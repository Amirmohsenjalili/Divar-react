import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
  server: {
    port: 3006,
    proxy: {
      "/api/search": {
        target: "https://api.divar.ir/v8/postlist/w",
        changeOrigin: true,
        rewrite: (requestPath) => requestPath.replace(/^\/api\/search/, "/search"),
      },
      "/api/posts": {
        target: "https://api.divar.ir/v8/posts-v2/web",
        changeOrigin: true,
        rewrite: (requestPath) => requestPath.replace(/^\/api\/posts/, ""),
      },
    },
  },
});
