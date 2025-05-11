import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import path from "path";

export default defineConfig({
  integrations: [
    react(),
    tailwind({
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
