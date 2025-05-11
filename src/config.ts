import dotenv from 'dotenv';
dotenv.config();

function required(name: string): string {
    const value = process.env[name];
    if (!value) throw new Error(`[ENV] Missing required env: ${name}`);
    return value;
}

export const config = {
    GITHUB_API_TOKEN: required('GITHUB_API_TOKEN'),
    REDIS_URL: import.meta.env.REDIS_URL ?? 'redis://localhost:6379',
    CACHE_KEY_TOP_REPO: import.meta.env.CACHE_KEY_TOP_REPO ?? 'github:top_repos',
    CACHE_TOP_REPO_TTL: parseInt(import.meta.env.CACHE_TOP_REPO_TTL ?? '604800', 10),
    CLOUDFLARE: {
        ACCOUNT_ID: import.meta.env.CLOUDFLARE_R2_ACCOUNT_ID,
        ACCESS_KEY_ID: import.meta.env.CLOUDFLARE_R2_ACCESS_KEY_ID,
        SECRET_ACCESS_KEY: import.meta.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY,
        BUCKET_NAME: import.meta.env.CLOUDFLARE_R2_BUCKET_NAME
    },
} as const;
