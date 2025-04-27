import { reactRouter } from "@react-router/dev/vite";

import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths(), react()],
  build: {
    cssMinify: true,
    ssr: false,
  },
  server: {
    port: 3000,
  },
});
