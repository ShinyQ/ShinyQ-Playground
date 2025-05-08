import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { UserConfigExport } from 'vite';
import { compression } from 'vite-plugin-compression2'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    compression(),
    mode === 'development' && []
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})) as UserConfigExport;
