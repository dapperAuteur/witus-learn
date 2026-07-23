import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      // `server-only` throws outside an RSC context; stub it so the isolation
      // suite can import server modules that pull in pure helpers.
      "server-only": fileURLToPath(new URL("./tests/stubs/server-only.ts", import.meta.url)),
    },
  },
  test: {
    environment: "node",
    include: ["tests/**/*.test.ts"],
    // Vitest defaults to 5000ms per test. The standards-matrix isolation test walks every
    // generated standards row for all 51 jurisdictions and takes roughly 4.2 seconds at idle,
    // which is under the default but not by much: on a loaded machine (several builds running
    // at once) it tips over and fails as a timeout rather than a real assertion. Three separate
    // runs hit it on unrelated branches, each time costing a real investigation to rule out.
    // A slow test is not a failing test, so give the suite room. If something genuinely hangs,
    // 30 seconds still catches it long before CI would.
    testTimeout: 30_000,
  },
});
