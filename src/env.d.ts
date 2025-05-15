/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare namespace App {
    interface Env {
        GITHUB_API_TOKEN: string;
        CLOUDFLARE_ACCOUNT_ID: string;
        CLOUDFLARE_API_TOKEN: string;
        CLOUDFLARE_KV_NAMESPACE_ID: string;
        CLOUDFLARE_R2_ACCOUNT_ID?: string;
        CLOUDFLARE_R2_ACCESS_KEY_ID?: string;
        CLOUDFLARE_R2_SECRET_ACCESS_KEY?: string;
        
    }
}
