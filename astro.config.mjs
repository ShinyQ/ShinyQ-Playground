import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import path from "path";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [
    react(), 
    sitemap(),
    tailwindcss()
  ],
  site: "https://kurniadi.pages.dev",
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src')
      }
    }
  },
});