"use client";

import { useOnline } from "@/lib/use-outbox";

/** What the banner says. Exported so the e2e test asserts the same words the visitor reads. */
export const OFFLINE_BANNER_TEXT = "You're offline. Pages you've opened and courses you saved still work.";

/**
 * The app-wide "you're offline" bar, mounted once in the root layout so it shows on every page,
 * the ones public/sw.js replays from its caches included.
 *
 * It is the honest signal for those replays: a page served from the visited cache is the copy from
 * the last time it was opened, possibly days old, and nothing else on it says so.
 *
 * In the normal flow at the very top of the page, never fixed or overlaid, so it pushes the page
 * down rather than covering anything. The live region is always mounted (empty while online), so
 * a screen reader announces the bar when the connection drops instead of finding it only by
 * chance. `navigator.onLine` is a hint (see useOnline): it can say "online" on a connection that
 * reaches nothing, in which case pages still come from the caches and the bar simply stays away.
 *
 * "Your downloads" is a real <a>, not a next/link: a hard navigation is what the worker can answer
 * offline (tests/offline-nav.test.ts explains why a <Link> there would be a dead link).
 */
export function OfflineBanner() {
  return <OfflineBannerView online={useOnline()} />;
}

/** The bar itself, for a given connection state. Split out so it renders in a plain test. */
export function OfflineBannerView({ online }: { online: boolean }) {
  return (
    <div role="status" aria-live="polite">
      {online ? null : (
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 border-b border-amber-300 bg-amber-50 px-4 py-2 text-center text-sm text-amber-950 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-100">
          <p>{OFFLINE_BANNER_TEXT}</p>
          {/* A hard navigation on purpose: see the header comment. */}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a
            href="/downloads"
            className="inline-flex min-h-11 items-center font-medium underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
          >
            Your downloads
          </a>
        </div>
      )}
    </div>
  );
}
