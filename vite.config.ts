import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [!process.env.VITEST && remix(), tsconfigPaths()],
  test: {
    environment: "happy-dom",
  },
});
