import { S3Client, GetObjectCommand, ListObjectsV2Command } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { config } from "@/config";

let r2: S3Client | null = null;

export interface R2File {
    key: string;
}

if (typeof window === 'undefined') {
    if (!config.CLOUDFLARE.ACCESS_KEY_ID || !config.CLOUDFLARE.SECRET_ACCESS_KEY) {
        throw new Error("Missing Cloudflare R2 credentials");
    }

    r2 = new S3Client({
        region: "auto",
        endpoint: `https://${config.CLOUDFLARE.ACCOUNT_ID}.r2.cloudflarestorage.com`,
        credentials: {
            accessKeyId: config.CLOUDFLARE.ACCESS_KEY_ID,
            secretAccessKey: config.CLOUDFLARE.SECRET_ACCESS_KEY,
        },
        forcePathStyle: true,
    });
}

export const getSignedFileUrl = async (key: string): Promise<string> => {
    if (key.startsWith("http://") || key.startsWith("https://")) return key;

    if (!r2) {
        throw new Error("R2 client is not available");
    }

    const command = new GetObjectCommand({
        Bucket: config.CLOUDFLARE.BUCKET_NAME,
        Key: key,
    });

    try {
        return await getSignedUrl(r2, command, {
            expiresIn: 604800,
            signableHeaders: new Set(["host"]),
        });
    } catch (err) {
        console.error(`Failed to sign R2 key: ${key}`, err);
        return key;
    }
};

export const listDirectoryFiles = async (prefix: string): Promise<R2File[]> => {
    if (!r2) {
        throw new Error("R2 client is not available");
    }

    try {
        const command = new ListObjectsV2Command({
            Bucket: config.CLOUDFLARE.BUCKET_NAME,
            Prefix: prefix,
        });

        const response = await r2.send(command);
        const files = response.Contents || [];

        // Filter out the directory itself and return just the keys
        return files
            .filter(file => file.Key && file.Key !== prefix)
            .map(file => ({
                key: file.Key!,
            }));
    } catch (err) {
        console.error(`Failed to list directory: ${prefix}`, err);
        return [];
    }
};
