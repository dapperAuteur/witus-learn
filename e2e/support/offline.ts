import type { BrowserContext } from "@playwright/test";

/**
 * Take the browser offline for real, service worker included.
 *
 * `context.setOffline(true)` alone is not enough, and it fails in the way that matters most: it
 * flips `navigator.onLine` and cuts the PAGE's own requests, but the service worker's fetches can
 * still reach the server. Measured on this app with Playwright 1.62 and Chromium: after one
 * navigation the worker answered from its cache, the next one went straight past it to the live
 * server, so a "never visited" page loaded for real and the test could not tell a cached copy from
 * a live one. Even with PW_EXPERIMENTAL_SERVICE_WORKER_NETWORK_EVENTS (set in
 * playwright.config.ts), offline emulation alone leaked. Aborting every request at the context,
 * which that flag extends to the worker's own fetches, closes it.
 */
export async function goOffline(context: BrowserContext) {
  await context.setOffline(true);
  await context.route("**/*", (route) => route.abort("internetdisconnected"));
}

export async function goOnline(context: BrowserContext) {
  await context.unrouteAll({ behavior: "ignoreErrors" });
  await context.setOffline(false);
}
