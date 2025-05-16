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
        "node:os": false,
      },
    },
  },
  output: "server",
  adapter: cloudflare(),
});