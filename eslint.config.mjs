import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    ".next/**",
    ".claude/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "src/db/migrations/**",
    "content/**",
  ]),
  {
    // Ecosystem copy, kept byte-for-byte identical to witus-online lib/analytics (its INTEGRATE.md
    // forbids local edits; the conformance checker asserts its init options). Its one synchronous
    // setReady(true) runs only when PostHog is already initialised, a one-time no-op re-render.
    // Exempt the rule here rather than fork the file; a fix belongs upstream in witus-online.
    files: ["src/lib/analytics/posthog-provider.tsx"],
    rules: { "react-hooks/set-state-in-effect": "off" },
  },
]);

export default eslintConfig;
