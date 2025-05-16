import { KV } from "./kv";
import { config } from "@/config";

const NAMESPACE_ID = config.CLOUDFLARE.KV.KV_NAMESPACE_ID;
const kv = new KV();

async function hashString(str: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export async function trackUniqueVisitor(ip: string, userAgent: string): Promise<boolean> {
    try {
        const visitorId = await hashString(`${ip}-${userAgent}`);
        const uniqueKey = `${config.VISITOR.UNIQUE_KEY}:${visitorId}`;

        // Check if already exists
        const exists = await kv.getKey(NAMESPACE_ID, uniqueKey);
        if (exists) { return false; }

        // Use a single transaction to update both the visitor and count
        const current = await kv.getKey(NAMESPACE_ID, config.VISITOR.UNIQUE_KEY);
        const count = current ? parseInt(current as string, 10) || 0 : 0;
        
        // Batch the operations
        await Promise.all([
            kv.putKey(NAMESPACE_ID, uniqueKey, "1", config.VISITOR.EXPIRY),
            kv.putKey(NAMESPACE_ID, config.VISITOR.UNIQUE_KEY, (count + 1).toString())
        ]);

        return true;
    } catch (error) {
        console.error("[Visitor Tracking] Error:", error);
        return false;
    }
}

export async function getUniqueVisitorCount(): Promise<number> {
    try {
        const count = await kv.getKey(NAMESPACE_ID, config.VISITOR.UNIQUE_KEY);
        if (!count) { return 0; }
        
        const parsedCount = parseInt(count as string, 10);
        return isNaN(parsedCount) ? 0 : parsedCount;
    } catch (error) {
        console.error("[Visitor Count] Error:", error);
        return 0;
    }
}
