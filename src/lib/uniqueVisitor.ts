import { withRedis } from './redis';
import { createHash } from 'crypto';
import { UNIQUE_VISITORS_KEY, VISITOR_EXPIRY } from '@/config';

export async function trackUniqueVisitor(ip: string, userAgent: string): Promise<boolean> {
    const visitorId = createHash('md5')
        .update(`${ip}-${userAgent}`)
        .digest('hex');
    
    const result = await withRedis(async (redis) => {
        const isNewVisitor = await redis.set(
            `${UNIQUE_VISITORS_KEY}:${visitorId}`,
            '1',
            'EX',
            VISITOR_EXPIRY,
            'NX'
        );

        if (isNewVisitor) {
            await redis.incr(UNIQUE_VISITORS_KEY);
            return true;
        }

        return false;
    });

    return result ?? false;
}

export async function getUniqueVisitorCount(): Promise<number> {
    const result = await withRedis(
        async (redis) => {
            const count = await redis.get(UNIQUE_VISITORS_KEY);
            return count ? parseInt(count) : 0;
        },
        UNIQUE_VISITORS_KEY
    );
    return result ?? 0;
} 