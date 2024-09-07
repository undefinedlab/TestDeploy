import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      crypto: "crypto-browserify",
      stream: "stream-browserify",
      assert: "assert",
      http: "stream-http",
      https: "https-browserify",
      os: "os-browserify",
      url: "url"
    },
  },
  assetsInclude: ['**/*.wasm'],
  define: {
    'process.env': {},
    global: 'globalThis',
  },
  optimizeDeps: {
    include: ["@xmtp/xmtp-js", "ethers"],
  },
  build: {
    target: "esnext",
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})