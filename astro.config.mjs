import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import path from "path";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [react(), sitemap(), tailwindcss(), mdx()],
  site: "https://kurniadi.pages.dev",
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src')
      }
    },
  },
});