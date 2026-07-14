"use client";

import { useEffect, useState } from "react";
import { reconcileOffline, type OfflineInventory } from "@/lib/offline";

// Lists what's actually saved for offline, read straight from the browser's own Cache API +
// localStorage manifest (the same stores src/lib/offline.ts writes into and public/sw.js serves
// navigations from). Server-rendering this would show nothing — the whole point of the page is
// that the network already failed — so it reads what's genuinely on the device instead.
//
// reconcileOffline() treats the CACHE as the source of truth: manifest entries whose page isn't
// actually cached are pruned, and cached pages the manifest can't name still show (by path). So
// this list can never advertise a lesson that wouldn't open.
export function OfflineSavedLessons() {
  const [inventory, setInventory] = useState<OfflineInventory | null>(null);

  useEffect(() => {
    let cancelled = false;
    // Async setState only (no synchronous set-in-effect), even on the "unsupported" path.
    reconcileOffline()
      .then((next) => {
        if (!cancelled) setInventory(next);
      })
      .catch(() => {
        if (!cancelled) setInventory({ entries: [], pages: [], orphanPages: [], orphanMedia: [] });
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // Loading (or Cache API unsupported): render nothing rather than a flash of "no lessons saved".
  if (inventory === null) return null;

  const { entries, pages, orphanPages } = inventory;
  const total = entries.length + pages.length + orphanPages.length;

  if (total === 0) {
    return (
      <p className="mt-6 text-sm text-neutral-500" role="status">
        You haven&rsquo;t saved any lessons for offline yet. Next time you&rsquo;re online, open a
        course, tick the lessons you want, and tap &ldquo;Download selected&rdquo; so they&rsquo;re
        here when you need them.
      </p>
    );
  }

  return (
    <div className="mt-6 w-full max-w-sm text-left" role="status">
      <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
        Available offline ({total})
      </h2>
      <ul className="mt-2 space-y-1 text-sm">
        {entries.map((entry) => (
          <li key={entry.pagePath} className="truncate">
            {/* Real <a> (not next/link): guarantees a hard navigation, which the service
                worker's navigate handler can serve from the page cache even if this path's
                RSC payload wasn't also saved. */}
            <a href={entry.pagePath} className="underline underline-offset-2" style={{ color: "var(--accent, #111)" }}>
              {entry.lessonTitle}
            </a>
            <span className="block truncate text-xs text-neutral-500">{entry.courseTitle}</span>
          </li>
        ))}
        {/* Saved standalone pages (today: the owner's /admin/future board). Listed here too — the
            /offline fallback is where you land when the network is gone, so anything readable
            offline has to be reachable from it. */}
        {pages.map((page) => (
          <li key={page.pagePath} className="truncate">
            <a href={page.pagePath} className="underline underline-offset-2" style={{ color: "var(--accent, #111)" }}>
              {page.pageTitle}
            </a>
            {page.pageSummary ? (
              <span className="block truncate text-xs text-neutral-500">{page.pageSummary}</span>
            ) : null}
          </li>
        ))}
        {orphanPages.map((path) => (
          <li key={path} className="truncate">
            <a href={path} className="underline underline-offset-2" style={{ color: "var(--accent, #111)" }}>
              {path}
            </a>
          </li>
        ))}
      </ul>
      {/* Real <a>: /downloads must be entered by a hard navigation — the only kind the service
          worker can answer from cache, and this component only ever renders when we're offline. */}
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a
        href="/downloads"
        className="mt-4 inline-flex min-h-11 items-center text-sm underline underline-offset-2"
        style={{ color: "var(--accent, #111)" }}
      >
        Manage downloads →
      </a>
    </div>
  );
}
