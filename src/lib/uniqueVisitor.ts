import redis from './redis';
import { createHash } from 'crypto';

const UNIQUE_VISITORS_KEY = 'site:unique_visitors';
const VISITOR_EXPIRY = 60 * 5; 

export async function trackUniqueVisitor(ip: string, userAgent: string): Promise<boolean> {
    const visitorId = createHash('md5')
        .update(`${ip}-${userAgent}`)
        .digest('hex');
    
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
}

export async function getUniqueVisitorCount(): Promise<number> {
    const count = await redis.get(UNIQUE_VISITORS_KEY);
    return count ? parseInt(count) : 0;
} 