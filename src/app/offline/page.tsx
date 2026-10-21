import type { Metadata } from "next";
import { OfflineSavedLessons } from "@/components/offline-saved-lessons";

export const metadata: Metadata = { title: "Offline" };

// Generic offline fallback, precached by the service worker and shown only when a page
// navigation can't reach the network AND there is no copy of the requested page: not saved for
// offline, and not opened on this device before (see public/sw.js — a saved or previously opened
// page is served straight from cache instead of landing here). Deliberately brand-neutral and self-contained (no tenant data) so it's correct on
// every domain and never stale. The saved-lessons list below is read client-side from the
// browser's own Cache API, so it works even though this page itself can't hit the network.
//
// Everything above the list is server-rendered and works with NO JavaScript, because this page
// is often an old cached copy whose JS chunks may be gone: the Downloads link is the way forward,
// and Retry reloads the address the learner actually asked for (the service worker serves this
// page in place of it, so the URL bar still holds it). It used to point at "/", which is never
// saved, so offline it looped straight back here.
export default function OfflinePage() {
  return (
    <main id="main-content" className="mx-auto flex max-w-md flex-col items-center px-4 py-8 text-center">
      <h1 className="text-2xl font-bold">
        <span aria-hidden>📡 </span>You&rsquo;re offline
      </h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        This page isn&rsquo;t on this device yet. Pages you&rsquo;ve opened and lessons you saved
        still work.
      </p>
      <div className="mt-5 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
        {/* Real <a>s (not next/link): offline, only a full navigation can be answered from the
            service worker's cache; a client-side RSC fetch would just fail again. */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a
          href="/downloads"
          className="inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{ backgroundColor: "var(--accent, #111)" }}
        >
          Your downloads
        </a>
        {/* An empty href is the current URL: a plain reload of the page the learner asked for. */}
        <a
          href=""
          className="inline-flex min-h-11 items-center justify-center rounded-md border border-neutral-300 px-5 py-2.5 font-medium focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700"
        >
          Retry
        </a>
      </div>
      <OfflineSavedLessons />
    </main>
  );
}
