import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";
import path from "path";

export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: 'server',
  adapter: cloudflare(),
  site: "https://kurniadi.pages.dev",
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src'),
        'react-dom/server': 'react-dom/server.edge'
      }
    },
  },
});
