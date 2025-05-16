import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import path from "path";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [react(), sitemap(), tailwindcss(), mdx()],
  site: "https://kurniadi.pages.dev",
  vite: {
    resolve: {
      alias: import.meta.env.PROD && {
        "@": path.resolve("./src"),
        "react-dom/server": "react-dom/server.edge",
      },
    },
    ssr: {
      external: ["dotenv", "crypto", "path", "os", "events", "stream", "util", "net", "tls", "url", "dns", "assert", "buffer", "string_decoder"],
      noExternal: ["@aws-sdk/*"],
    },
  },
  output: "server",
  adapter: cloudflare({
    imageService: 'cloudflare',
    platformProxy: {
      enabled: true,
    },
  }),
});