import { defineConfig, devices } from "@playwright/test";

// Recording profile for tutorials (witus plan 30 §8.3; harness contract in e2e/tutorials/tutorial.ts;
// ported from flashlearn-ai). Separate from playwright.config.ts on purpose: the CI gate wants
// speed; a recording wants one worker, slowMo pacing, a fixed 1280×720 frame, and video on. Run:
//   TUTORIAL_STORAGE_STATE=.auth/tutorial-user.json \
//   PLAYWRIGHT_BASE_URL=https://learn.witus.online pnpm run tutorial:record
// The storage state is a signed-in session (pnpm exec playwright codegen <url> --save-storage=...).
// .auth/ is gitignored — never commit a session.
const baseURL = process.env.PLAYWRIGHT_BASE_URL ?? "http://localhost:3040";

// Same Deployment Protection escape hatch as playwright.config.ts: needed when recording against a
// protected Vercel preview (e.g. the Stripe-test preview for the enroll tutorial). Read the value
// from the project's own Vercel dashboard; unset = no header, correct for public deployments.
const bypass = process.env.VERCEL_AUTOMATION_BYPASS_SECRET;

export default defineConfig({
  testDir: "./e2e/tutorials",
  testMatch: "**/*.tutorial.ts",
  timeout: 300_000,
  retries: 0,
  workers: 1,
  reporter: "list",
  use: {
    baseURL,
    viewport: { width: 1280, height: 720 },
    video: { mode: "on", size: { width: 1280, height: 720 } },
    launchOptions: { slowMo: 350 },
    ...(bypass ? { extraHTTPHeaders: { "x-vercel-protection-bypass": bypass } } : {}),
    ...(process.env.TUTORIAL_STORAGE_STATE ? { storageState: process.env.TUTORIAL_STORAGE_STATE } : {}),
    // Playwright's bundled chromium does not support macOS 13, so local runs drive the installed
    // Google Chrome (same reasoning as playwright.config.ts).
    ...(process.env.CI ? {} : { channel: "chrome" as const }),
  },
  projects: [{ name: "recording", use: { ...devices["Desktop Chrome"] } }],
});
