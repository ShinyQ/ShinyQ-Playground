import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from '@tailwindcss/vite'
import path from "path";

export default defineConfig({
  integrations: [
    react(),
    tailwindcss({
      applyBaseStyles: false,
    }),
  ],
  site: "https://kurniadi.pages.dev",
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src')
      }
    },
  },
});
