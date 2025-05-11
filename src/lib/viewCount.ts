import redis from './redis';

const VIEW_COUNT_KEY = 'site:view_count';

export async function incrementViewCount(): Promise<number> {
    const count = await redis.incr(VIEW_COUNT_KEY);
    return count;
}

export async function getViewCount(): Promise<number> {
    const count = await redis.get(VIEW_COUNT_KEY);
    return count ? parseInt(count) : 0;
} 