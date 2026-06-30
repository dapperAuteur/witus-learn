import type { Metadata } from "next";

export const metadata: Metadata = { title: "Offline" };

// Generic offline fallback, precached by the service worker and shown only when a page
// navigation can't reach the network. Deliberately brand-neutral and self-contained (no
// tenant data) so it's correct on every domain and never stale.
export default function OfflinePage() {
  return (
    <main id="main-content" className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center px-4 text-center">
      <p className="text-4xl" aria-hidden>📡</p>
      <h1 className="mt-4 text-2xl font-bold">You&rsquo;re offline</h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        This page isn&rsquo;t available without a connection. Lessons you&rsquo;ve already opened may
        still work — otherwise, reconnect and try again.
      </p>
      {/* A real <a> (not next/link): offline, we want a full reload that re-hits the
          network, not a client-side navigation that would just fail again. */}
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a
        href="/"
        className="mt-6 min-h-11 rounded-md px-5 py-2.5 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2"
        style={{ backgroundColor: "var(--accent, #111)" }}
      >
        Retry
      </a>
    </main>
  );
}
