"use client";

import { useEffect, useState } from "react";
import { PAGES_CACHE } from "@/lib/offline";

// Lists the lesson pages currently saved for offline, read straight from the Cache API (the
// same PAGES_CACHE src/lib/offline.ts writes into and public/sw.js serves navigations from).
// Server-rendered on /offline would show nothing (no request/tenant context to scope a DB
// query to, and the whole point of this page is "the network already failed") — so this reads
// the *browser's own* cache, which is exactly what's actually usable right now.
export function OfflineSavedLessons() {
  const [pages, setPages] = useState<string[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    // Async setState only (no synchronous set-in-effect), even on the "unsupported" path.
    Promise.resolve()
      .then(() => {
        if (typeof caches === "undefined") return [] as Request[];
        return caches.open(PAGES_CACHE).then((c) => c.keys());
      })
      .then((requests) => {
        if (cancelled) return;
        const seen = new Set<string>();
        for (const req of requests) {
          const url = new URL(req.url);
          if (url.searchParams.has("__rsc")) continue; // synthetic RSC-payload key, not a page
          seen.add(url.pathname);
        }
        setPages(Array.from(seen).sort());
      })
      .catch(() => {
        if (!cancelled) setPages([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // Loading (or Cache API unsupported): render nothing rather than a flash of "no lessons saved".
  if (pages === null) return null;

  if (pages.length === 0) {
    return (
      <p className="mt-6 text-sm text-neutral-500" role="status">
        You haven&rsquo;t saved any lessons for offline yet. Next time you&rsquo;re online, open a
        lesson and tap &ldquo;Save for offline&rdquo; so it&rsquo;s here when you need it.
      </p>
    );
  }

  return (
    <div className="mt-6 w-full max-w-sm text-left" role="status">
      <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
        Available offline ({pages.length})
      </h2>
      <ul className="mt-2 space-y-1 text-sm">
        {pages.map((path) => (
          <li key={path}>
            {/* Real <a> (not next/link): guarantees a hard navigation, which the service
                worker's navigate handler can serve from the page cache even if this path's
                RSC payload wasn't also saved. */}
            <a href={path} className="underline underline-offset-2" style={{ color: "var(--accent, #111)" }}>
              {path}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
