import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 3006,
    proxy: {
      "/api/search": {
        target: "https://api.divar.ir/v8/postlist/w",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/search/, "/search"),
      },
      "/api/posts": {
        target: "https://api.divar.ir/v8/posts-v2/web",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/posts/, ""),
      },
    },
  },
});
