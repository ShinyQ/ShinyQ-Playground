import dotenv from 'dotenv';
dotenv.config();

function required(name: string): string {
    const value = process.env[name];
    if (!value) throw new Error(`[ENV] Missing required env: ${name}`);
    return value;
}

export const config = {
    REDIS_URL: process.env.REDIS_URL ?? 'redis://localhost:6379',
    GITHUB_API_TOKEN: required('GITHUB_API_TOKEN'),
    CACHE_KEY_TOP_REPO: process.env.CACHE_KEY_TOP_REPO ?? 'github:top_repos',
    CACHE_TOP_REPO_TTL: parseInt(process.env.CACHE_TOP_REPO_TTL ?? '604800', 10),
};
