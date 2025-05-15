import { LOCAL_CACHE_TTL } from '@/config';

const memoryCache = new Map<string, { value: any, timestamp: number, ttl: number }>();

export function getUniversalCache<T>(key: string): T | null {
    console.log("[UniversalCache][SSR] Cache", 	[...memoryCache.entries()]); 
    const entry = memoryCache.get(key);

    if (!entry) return null;

    const now = Date.now();
    if (now - entry.timestamp > entry.ttl) {
        memoryCache.delete(key);
        console.log('[UniversalCache][SSR] Expired', key);
        return null;
    }

    return entry.value;
}

export function setUniversalCache<T>(key: string, value: T, ttl: number = LOCAL_CACHE_TTL): void {
    memoryCache.set(key, { value, timestamp: Date.now(), ttl });
    console.log('[UniversalCache][SSR] Set', key);
}

