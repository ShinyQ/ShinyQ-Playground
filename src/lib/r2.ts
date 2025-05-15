import { S3Client, GetObjectCommand, ListObjectsV2Command } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { config } from "@/config";

// Types
export interface R2File {
    key: string;
    size?: number;
    lastModified?: Date;
}

interface R2ClientConfig {
    region: string;
    endpoint: string;
    credentials: {
        accessKeyId: string;
        secretAccessKey: string;
    };
    forcePathStyle: boolean;
}

// Constants
const URL_CACHE = new Map<string, { url: string; expires: number }>();

// Client management
class R2ClientManager {
    private static instance: R2ClientManager;
    private client: S3Client | null = null;
    private config: R2ClientConfig | null = null;

    private constructor() {
        this.initializeConfig();
    }

    public static getInstance(): R2ClientManager {
        if (!R2ClientManager.instance) {
            R2ClientManager.instance = new R2ClientManager();
        }

        return R2ClientManager.instance;
    }

    private initializeConfig(): void {
        if (typeof window !== 'undefined') {
            console.error("R2 client is not available in the browser");
            return;
        }

        const { CLOUDFLARE } = config;

        if (!CLOUDFLARE.R2.ACCESS_KEY_ID || !CLOUDFLARE.R2.SECRET_ACCESS_KEY) {
            console.error("Missing Cloudflare R2 credentials");
            return;
        }

        this.config = {
            region: "auto",
            endpoint: `https://${CLOUDFLARE.R2.ACCOUNT_ID}.r2.cloudflarestorage.com`,
            credentials: {
                accessKeyId: CLOUDFLARE.R2.ACCESS_KEY_ID,
                secretAccessKey: CLOUDFLARE.R2.SECRET_ACCESS_KEY,
            },
            forcePathStyle: true,
        };
    }

    public getClient(): S3Client | null {
        if (!this.config) {
            console.error("R2 client configuration is not initialized");
            return null;
        }

        try {
            this.client ??= new S3Client(this.config);
            return this.client;
        } catch (error) {
            console.error("Failed to initialize R2 client:", error);
            return null;
        }
    }

    public async withClient<T>(operation: (client: S3Client) => Promise<T>): Promise<T | null> {
        const client = this.getClient();
        if (!client) {
            console.error("Failed to get R2 client");
            return null;
        }

        try {
            return await Promise.race([
                operation(client),
                new Promise<null>((_, reject) =>
                    setTimeout(() => reject(new Error('Operation timeout')), config.R2.OPERATION_TIMEOUT)
                )
            ]);
        } catch (error) {
            console.error('R2 operation failed:', error);
            return null;
        }
    }
}

// URL Caching
function getCachedUrl(key: string): string | null {
    const cached = URL_CACHE.get(key);

    if (cached && Date.now() < cached.expires) {
        return cached.url;
    }

    URL_CACHE.delete(key);

    return null;
}

function cacheUrl(key: string, url: string): void {
    // Cache for slightly less than the signed URL expiry
    URL_CACHE.set(key, {
        url,
        expires: Date.now() + (config.R2.SIGNED_URL_EXPIRY - 60) * 1000
    });
}

// Exported functions
export async function getSignedFileUrl(key: string): Promise<string> {
    // Return as-is if it's already a URL
    if (key.startsWith("http://") || key.startsWith("https://")) {
        return key;
    }

    // Check cache first
    const cachedUrl = getCachedUrl(key);
    if (cachedUrl) {
        return cachedUrl;
    }

    const r2Manager = R2ClientManager.getInstance();

    const signedUrl = await r2Manager.withClient(async (client) => {
        const command = new GetObjectCommand({
            Bucket: config.CLOUDFLARE.R2.BUCKET_NAME,
            Key: key,
        });

        return getSignedUrl(client, command, {
            expiresIn: config.R2.SIGNED_URL_EXPIRY,
            signableHeaders: new Set(["host"]),
        });
    });

    if (signedUrl) {
        cacheUrl(key, signedUrl);
        return signedUrl;
    }

    return `/fallback/${key}`;
}

export async function listDirectoryFiles(prefix: string): Promise<R2File[]> {
    const r2Manager = R2ClientManager.getInstance();

    const files = await r2Manager.withClient(async (client) => {
        const command = new ListObjectsV2Command({
            Bucket: config.CLOUDFLARE.R2.BUCKET_NAME,
            Prefix: prefix,
        });

        const response = await client.send(command);
        return response.Contents || [];
    });

    if (!files) {
        console.error("Failed to list directory files");
        return [];
    }

    return files
        .filter(file => file.Key && file.Key !== prefix)
        .map(file => ({
            key: file.Key!,
            size: file.Size,
            lastModified: file.LastModified,
        }));
}
