import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import path from "path";

// https://astro.build/config
export default defineConfig({
  integrations: [
    // Enable React components in Astro
    react(),
    // Enable Tailwind CSS
    tailwind({
      applyBaseStyles: false,
    }),
  ],

  // Configure site URL for production
  site: "https://kurniadi.pages.dev",

  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src')
      }
    },
  },
});