import Redis from 'ioredis';
import { config } from '@/config';
import { getUniversalCache, setUniversalCache } from './universalCache';

const REDIS_OPTIONS = {
    maxRetriesPerRequest: 1,
    connectTimeout: 3000,
    commandTimeout: 3000,
    retryStrategy(times: number) {
        if (times > 2) {
            return null;
        }
        return 1000;
    },
    reconnectOnError: () => false // Don't auto reconnect
};

const LOCAL_CACHE_TTL = 5 * 60 * 1000;

export async function createRedisClient(): Promise<Redis> {
    const client = new Redis(config.REDIS_URL, REDIS_OPTIONS);
    
    return new Promise((resolve, reject) => {
        client.on('connect', () => {
            console.log('[Redis] Connected successfully');
            resolve(client);
        });

        client.on('error', (err) => {
            console.error('[Redis] Connection error:', err);
            reject(err);
        });

        setTimeout(() => {
            client.disconnect();
            reject(new Error('Redis connection timeout'));
        }, REDIS_OPTIONS.connectTimeout);
    });
}

interface RedisOptions {
    useCache?: boolean;
    ttl?: number;
}

// Helper function to perform Redis operations with automatic connection management and local caching
export async function withRedis<T>(
    operation: (client: Redis) => Promise<T>,
    key?: string,
    options: RedisOptions = {}
): Promise<T | null> {
    const { useCache = true, ttl = LOCAL_CACHE_TTL } = options;

    // Check universal cache first if caching is enabled and key is provided
    if (useCache && key) {
        const cachedValue = getUniversalCache<T>(key);
        if (cachedValue !== null) {
            console.log('[UniversalCache] Cache hit for key:', key);
            return cachedValue;
        }
    }

    let client: Redis | null = null;
    try {
        client = await createRedisClient();
        const result = await operation(client);

        // Store in universal cache if caching is enabled and we have a result
        if (useCache && key && result !== null) {
            setUniversalCache<T>(key, result, ttl);
        }

        return result;
    } catch (err) {
        console.error('[Redis] Operation failed:', err);
        return null;
    } finally {
        if (client) {
            client.disconnect();
            console.log('[Redis] Connection closed');
        }
    }
}
