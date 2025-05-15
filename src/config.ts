import dotenv from 'dotenv';
dotenv.config();

export const config = {
    GITHUB: {
        API_TOKEN: import.meta.env.GITHUB_API_TOKEN,
        CACHE: {
            KEY_TOP_REPO: 'github:top_repos',
            TOP_REPO_TTL: '604800',
        }
    },
    CACHE: {
        DEFAULT_TTL: 5 * 60 * 1000, // 5 minutes
    },
    VISITOR: {
        UNIQUE_KEY: "site:unique_visitors",
        EXPIRY: 60 * 5, // 5 minutes
    },
    R2: {
        SIGNED_URL_EXPIRY: 600, // 10 minutes in seconds
        OPERATION_TIMEOUT: 3000, // 3 seconds in milliseconds
    },
    CLOUDFLARE: {
        KV: {
            ACCOUNT_ID: import.meta.env.CLOUDFLARE_ACCOUNT_ID,
            API_TOKEN: import.meta.env.CLOUDFLARE_API_TOKEN,
            KV_NAMESPACE_ID: import.meta.env.CLOUDFLARE_KV_NAMESPACE_ID,
            CLOUDFLARE_EMAIL: import.meta.env.CLOUDFLARE_EMAIL,
        },
        R2: {
            ACCOUNT_ID: import.meta.env.CLOUDFLARE_R2_ACCOUNT_ID,
            ACCESS_KEY_ID: import.meta.env.CLOUDFLARE_R2_ACCESS_KEY_ID,
            SECRET_ACCESS_KEY: import.meta.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY,
            BUCKET_NAME: import.meta.env.CLOUDFLARE_R2_BUCKET_NAME
        }
    }
} as const;
