import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    // disable remix plugin for vitest
    !process.env.VITEST && remix(),
    tsconfigPaths(),
  ],
  test: {
    environment: "happy-dom",
    // load variable without "VITE_" prefix in ".env.test"
    env: loadEnv("test", process.cwd(), ""),
  },
});
