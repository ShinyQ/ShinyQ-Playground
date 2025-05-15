import dotenv from 'dotenv';
dotenv.config();

function required(name: string): string {
    const value = process.env[name];
    if (!value) throw new Error(`[ENV] Missing required env: ${name}`);
    return value;
}

export const config = {
    GITHUB_API_TOKEN: required('GITHUB_API_TOKEN'),
    REDIS_URL: required('REDIS_URL'),
    CACHE_TOP_REPO_TTL: parseInt(required('CACHE_TOP_REPO_TTL'), 10),
    CLOUDFLARE: {
        ACCOUNT_ID: required('CLOUDFLARE_R2_ACCOUNT_ID'),
        ACCESS_KEY_ID: required('CLOUDFLARE_R2_ACCESS_KEY_ID'),
        SECRET_ACCESS_KEY: required('CLOUDFLARE_R2_SECRET_ACCESS_KEY'),
        BUCKET_NAME: required('CLOUDFLARE_R2_BUCKET_NAME'),
    },
} as const;

export const SIGNED_URL_EXPIRY   = 300;                       // 5 minutes in seconds
export const OPERATION_TIMEOUT   = 3000;                      // 3 seconds
export const LOCAL_CACHE_TTL     = 5 * 60 * 1000;             // 5 minutes in milliseconds
export const CACHE_TOP_REPO_TTL  = 3 * 24 * 60 * 60;           // 3 days in seconds
export const VISITOR_EXPIRY      = 60 * 5;                    // 5 minutes in seconds

export const UNIQUE_VISITORS_KEY = 'site:unique_visitors';
export const CACHE_KEY_TOP_REPO  = 'github:top_repos';

