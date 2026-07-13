"use client";

import { useCallback, useEffect, useState } from "react";
import {
  offlineSupported,
  reconcileOffline,
  removeAllOffline,
  removeLessons,
  removeMedia,
  storageUsage,
  type OfflineEntry,
  type OfflineInventory,
} from "@/lib/offline";
import { useOfflineReadiness } from "@/lib/use-offline-readiness";

/**
 * The Downloads manager — everything this device has saved, across every course, with a Remove at
 * each level (lesson, section, course, everything).
 *
 * NO NETWORK, BY CONSTRUCTION. It reads only the browser's own Cache API and the localStorage
 * manifest; there is no fetch, no server action, no DB. Its route (`/downloads`) is deliberately
 * OUTSIDE the `(tenant)` route group, so it renders with no tenant/session/DB lookup — which is
 * what lets the service worker precache it at install (public/sw.js) and serve the shell from
 * cache once the network is gone. src/lib/offline.ts also re-caches it on the learner's first
 * save, as a belt-and-braces guard against a failed install-time fetch. The page a learner needs
 * *most* when offline is the one that tells them what they can still read.
 *
 * Everything rendered here comes from reconcileOffline(), which treats the CACHE as truth: stale
 * manifest entries are pruned, and cached pages the manifest can't name are shown anyway as
 * removable orphans. So this screen never claims a download exists when it doesn't, and never
 * hides storage the learner is paying for.
 */

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  const units = ["KB", "MB", "GB"];
  let value = bytes / 1024;
  let i = 0;
  while (value >= 1024 && i < units.length - 1) {
    value /= 1024;
    i += 1;
  }
  return `${value < 10 ? value.toFixed(1) : Math.round(value)} ${units[i]}`;
}

function savedAgo(ms: number): string {
  if (!ms) return "";
  const days = Math.floor((Date.now() - ms) / 86_400_000);
  if (days <= 0) return "saved today";
  if (days === 1) return "saved yesterday";
  if (days < 30) return `saved ${days} days ago`;
  const months = Math.round(days / 30);
  return `saved ${months} month${months === 1 ? "" : "s"} ago`;
}

/** A destructive control sized for thumbs (44px on coarse pointers, the repo's pointer-coarse idiom). */
const REMOVE_BTN =
  "inline-flex min-h-8 shrink-0 items-center rounded-md px-2 text-xs text-neutral-500 underline hover:text-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 pointer-coarse:min-h-11 pointer-coarse:px-3";

type Course = {
  courseHref: string;
  courseTitle: string;
  sections: { title: string | null; lessons: OfflineEntry[] }[];
  lessons: OfflineEntry[];
};

/** Group a flat inventory into course → section → lesson, preserving first-seen order. */
function groupByCourse(entries: OfflineEntry[]): Course[] {
  const courses = new Map<string, Course>();
  for (const entry of [...entries].sort((a, b) => a.savedAt - b.savedAt)) {
    let course = courses.get(entry.courseHref);
    if (!course) {
      course = { courseHref: entry.courseHref, courseTitle: entry.courseTitle, sections: [], lessons: [] };
      courses.set(entry.courseHref, course);
    }
    course.lessons.push(entry);
    let section = course.sections.find((s) => s.title === entry.sectionTitle);
    if (!section) {
      section = { title: entry.sectionTitle, lessons: [] };
      course.sections.push(section);
    }
    section.lessons.push(entry);
  }
  return [...courses.values()].sort((a, b) => a.courseTitle.localeCompare(b.courseTitle));
}

export function OfflineDownloadsManager() {
  const [inventory, setInventory] = useState<OfflineInventory | null>(null);
  const [supported, setSupported] = useState<boolean | null>(null);
  const [storage, setStorage] = useState<{ usage: number; quota: number } | null>(null);
  const [pending, setPending] = useState(false);

  const refresh = useCallback(async () => {
    const [next, used] = await Promise.all([reconcileOffline(), storageUsage()]);
    setInventory(next);
    setStorage(used);
  }, []);

  useEffect(() => {
    let cancelled = false;
    // Async setState only, so the unsupported branch can't hydrate-mismatch against the server.
    Promise.resolve()
      .then(() => {
        if (!offlineSupported()) return false;
        return refresh().then(() => true);
      })
      .then((ok) => {
        if (!cancelled) setSupported(ok);
      })
      .catch(() => {
        if (!cancelled) setSupported(false);
      });
    return () => {
      cancelled = true;
    };
  }, [refresh]);

  // Every mutation re-reconciles against the real caches rather than patching local state, so what
  // you see after a delete is what the browser actually still has.
  const drop = useCallback(
    async (lessons: OfflineEntry[]) => {
      setPending(true);
      try {
        await removeLessons(lessons.map((l) => ({ pagePath: l.pagePath, mediaUrl: l.mediaUrl })));
      } catch {
        /* refresh below reports the real state either way */
      }
      await refresh();
      setPending(false);
    },
    [refresh],
  );

  const dropPaths = useCallback(
    async (paths: string[]) => {
      setPending(true);
      try {
        await removeLessons(paths.map((pagePath) => ({ pagePath })));
      } catch {
        /* ignore */
      }
      await refresh();
      setPending(false);
    },
    [refresh],
  );

  const dropMedia = useCallback(
    async (urls: string[]) => {
      setPending(true);
      try {
        await removeMedia(urls);
      } catch {
        /* ignore */
      }
      await refresh();
      setPending(false);
    },
    [refresh],
  );

  const dropAll = useCallback(async () => {
    if (!window.confirm("Remove everything you've saved for offline? You can download it again when you're back online.")) return;
    setPending(true);
    try {
      await removeAllOffline();
    } catch {
      /* ignore */
    }
    await refresh();
    setPending(false);
  }, [refresh]);

  if (supported === null) {
    // Loading — render nothing rather than a flash of "you haven't saved anything".
    return null;
  }

  if (!supported) {
    return (
      <p role="status" className="mt-6 rounded-xl border border-neutral-200 p-4 text-sm text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">
        Offline downloads aren&rsquo;t supported in this browser, so there&rsquo;s nothing to manage
        here. Try a recent version of Chrome, Edge, Firefox or Safari — and note that private /
        incognito windows usually block offline storage.
      </p>
    );
  }

  const entries = inventory?.entries ?? [];
  const orphanPages = inventory?.orphanPages ?? [];
  const orphanMedia = inventory?.orphanMedia ?? [];
  const courses = groupByCourse(entries);
  const nothing = entries.length === 0 && orphanPages.length === 0 && orphanMedia.length === 0;

  return (
    <div className="mt-6">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-neutral-200 p-4 dark:border-neutral-800">
        <div className="text-sm">
          <p className="font-medium">
            {entries.length} lesson{entries.length === 1 ? "" : "s"} saved
            {courses.length > 0 ? ` across ${courses.length} course${courses.length === 1 ? "" : "s"}` : ""}
          </p>
          {storage ? (
            <p className="mt-0.5 text-xs text-neutral-500">
              {/* navigator.storage.estimate() is ORIGIN-wide — it counts everything this site has
                  stored, not only your lessons — so the copy says "this site", not "your lessons". */}
              {formatBytes(storage.usage)} used by this site on your device
              {storage.quota > 0 ? ` (of about ${formatBytes(storage.quota)} available)` : ""}
            </p>
          ) : null}
        </div>
        {!nothing ? (
          <button
            type="button"
            onClick={() => void dropAll()}
            disabled={pending}
            className="inline-flex min-h-11 items-center rounded-md border border-red-300 px-4 text-sm text-red-700 hover:bg-red-50 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 dark:border-red-900 dark:text-red-400 dark:hover:bg-red-950/40"
          >
            Remove all
          </button>
        ) : null}
      </div>

      {nothing ? (
        <p role="status" className="mt-6 text-sm text-neutral-500">
          You haven&rsquo;t saved anything for offline yet. Open a course while you&rsquo;re online,
          tick the lessons you want, and tap &ldquo;Download selected&rdquo; — they&rsquo;ll be here
          when the network isn&rsquo;t.
        </p>
      ) : null}

      <ul className="mt-6 space-y-4">
        {courses.map((course) => (
          <li key={course.courseHref} className="rounded-xl border border-neutral-200 dark:border-neutral-800">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-200 px-4 py-3 dark:border-neutral-800">
              <div className="min-w-0">
                {/* Real <a>, not next/link: offline, a hard navigation is what the service worker
                    can serve from cache — a client-side RSC nav would just fail. */}
                <a href={course.courseHref} className="font-medium underline underline-offset-2">
                  {course.courseTitle}
                </a>
                <p className="text-xs text-neutral-500">
                  {course.lessons.length} lesson{course.lessons.length === 1 ? "" : "s"}
                </p>
              </div>
              <button
                type="button"
                onClick={() => void drop(course.lessons)}
                disabled={pending}
                className={REMOVE_BTN}
                aria-label={`Remove all ${course.lessons.length} saved lessons from ${course.courseTitle}`}
              >
                Remove course
              </button>
            </div>

            <div className="divide-y divide-neutral-100 dark:divide-neutral-900">
              {course.sections.map((section) => (
                <div key={section.title ?? "__flat"} className="px-4 py-3">
                  {section.title ? (
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="min-w-0 text-xs font-semibold uppercase tracking-wide text-neutral-500">
                        {section.title}
                      </h3>
                      <button
                        type="button"
                        onClick={() => void drop(section.lessons)}
                        disabled={pending}
                        className={REMOVE_BTN}
                        aria-label={`Remove all ${section.lessons.length} saved lessons in section ${section.title} of ${course.courseTitle}`}
                      >
                        Remove section
                      </button>
                    </div>
                  ) : null}
                  <ul className={section.title ? "mt-2 space-y-1" : "space-y-1"}>
                    {section.lessons.map((lesson) => (
                      <li key={lesson.pagePath} className="flex items-center justify-between gap-2 text-sm">
                        <a href={lesson.pagePath} className="min-w-0 flex-1 truncate underline-offset-2 hover:underline">
                          {lesson.lessonTitle}
                          {lesson.mediaUrl ? (
                            <span aria-label="includes media" title="Audio/video saved too">
                              {" "}
                              🎧
                            </span>
                          ) : null}
                        </a>
                        <span className="shrink-0 text-xs text-neutral-400">{savedAgo(lesson.savedAt)}</span>
                        <button
                          type="button"
                          onClick={() => void drop([lesson])}
                          disabled={pending}
                          className={REMOVE_BTN}
                          aria-label={`Remove ${lesson.lessonTitle} from your offline downloads`}
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>

      {/* Honesty rows. A cached page the manifest can't name, or a media file no saved lesson
          claims, still occupies the learner's storage — hiding them would be exactly the "misled
          about what's actually saved" failure this feature exists to fix. */}
      {orphanPages.length > 0 ? (
        <section className="mt-6 rounded-xl border border-amber-200 p-4 dark:border-amber-900/60">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-sm font-semibold">Other saved pages ({orphanPages.length})</h2>
            <button type="button" onClick={() => void dropPaths(orphanPages)} disabled={pending} className={REMOVE_BTN}>
              Remove all of these
            </button>
          </div>
          <p className="mt-1 text-xs text-neutral-500">
            These pages are on your device but we couldn&rsquo;t match them to a course — usually
            because they were saved by an older version of the app, or the record of them was
            cleared. They still work offline; remove them if you don&rsquo;t need them.
          </p>
          <ul className="mt-2 space-y-1 text-sm">
            {orphanPages.map((path) => (
              <li key={path} className="flex items-center justify-between gap-2">
                <a href={path} className="min-w-0 flex-1 truncate underline underline-offset-2">
                  {path}
                </a>
                <button
                  type="button"
                  onClick={() => void dropPaths([path])}
                  disabled={pending}
                  className={REMOVE_BTN}
                  aria-label={`Remove the saved page ${path}`}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {orphanMedia.length > 0 ? (
        <section className="mt-6 rounded-xl border border-amber-200 p-4 dark:border-amber-900/60">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-sm font-semibold">Other saved media ({orphanMedia.length})</h2>
            <button type="button" onClick={() => void dropMedia(orphanMedia)} disabled={pending} className={REMOVE_BTN}>
              Remove all of these
            </button>
          </div>
          <p className="mt-1 text-xs text-neutral-500">
            Audio or video files still on your device that no saved lesson uses any more. Removing
            them frees space and won&rsquo;t affect the lessons listed above.
          </p>
        </section>
      ) : null}

      <OfflineDiagnostics savedPages={entries.length + orphanPages.length} usage={storage?.usage ?? null} />
    </div>
  );
}

/**
 * Offline diagnostics — how you tell truth from a lie.
 *
 * The bug that shipped was invisible precisely because there was nowhere to look: the Cache API
 * accepted every write, the UI went green, and only airplane mode revealed that no service worker
 * had ever registered. "Serving offline pages" is the load-bearing line — when it says No, saving
 * lessons is pointless no matter how many are cached, and that is exactly the state that produced
 * the browser's no-connection page on a plane.
 */
function OfflineDiagnostics({ savedPages, usage }: { savedPages: number; usage: number | null }) {
  const { ready } = useOfflineReadiness();

  const rows: { label: string; value: string; bad?: boolean }[] = [
    {
      label: "Serving offline pages",
      value: ready?.controlling ? "Yes" : "No — reload the page",
      bad: ready !== null && !ready.controlling,
    },
    {
      label: "Offline worker installed",
      value: ready?.registered ? "Yes" : "No",
      bad: ready !== null && !ready.registered,
    },
    { label: "Storage available", value: ready?.storage ? "Yes" : "No", bad: ready !== null && !ready.storage },
    { label: "Pages saved", value: String(savedPages) },
    { label: "Storage used (this site)", value: usage === null ? "Unknown" : formatBytes(usage) },
  ];

  return (
    <details className="mt-8 rounded-xl border border-neutral-200 dark:border-neutral-800">
      <summary className="flex min-h-11 cursor-pointer list-none items-center px-4 text-sm font-medium text-neutral-600 dark:text-neutral-400">
        Offline diagnostics
      </summary>
      <dl className="space-y-1 px-4 pb-4 text-sm">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between gap-3">
            <dt className="text-neutral-500">{row.label}</dt>
            <dd className={`tabular-nums ${row.bad ? "font-medium text-amber-700 dark:text-amber-500" : ""}`}>
              {ready === null ? "…" : row.value}
            </dd>
          </div>
        ))}
      </dl>
      <p className="px-4 pb-4 text-xs text-neutral-500">
        If &ldquo;Serving offline pages&rdquo; says No, saved lessons will NOT open without a
        connection — reload this page to start the offline worker, then try again.
      </p>
    </details>
  );
}

/**
 * Compact dashboard entry point. Same no-network guarantees (Cache API + manifest only), so it's
 * safe on any surface — but the dashboard itself is a server page, so this is only ever seen
 * online. It exists to make Downloads *discoverable*; /downloads is where the work happens.
 */
export function OfflineDownloadsSummary() {
  const [count, setCount] = useState<number | null>(null);
  const [usage, setUsage] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    Promise.resolve()
      .then(() => {
        if (!offlineSupported()) return null;
        return Promise.all([reconcileOffline(), storageUsage()]);
      })
      .then((result) => {
        if (cancelled || !result) return;
        const [inventory, storage] = result;
        setCount(inventory.entries.length + inventory.orphanPages.length);
        setUsage(storage?.usage ?? null);
      })
      .catch(() => {
        /* unsupported → stay collapsed to the plain link below */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    // Real <a>, not next/link: /downloads must always be entered by a HARD navigation, which is
    // the only kind the service worker can answer from cache. A client-side RSC fetch would fail
    // the moment the learner is offline — on the one page they need offline.
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    <a
      href="/downloads"
      className="mt-3 flex min-h-11 items-center justify-between gap-3 rounded-xl border border-neutral-200 bg-white p-4 hover:border-current dark:border-neutral-800 dark:bg-neutral-900"
    >
      <span>
        <span className="font-medium">Offline downloads</span>
        <span className="block text-xs text-neutral-500">
          {count === null
            ? "See and remove what you've saved for offline"
            : count === 0
              ? "Nothing saved yet — tick lessons on any course page"
              : `${count} lesson${count === 1 ? "" : "s"} on this device${usage ? ` · ${formatBytes(usage)} used` : ""}`}
        </span>
      </span>
      <span aria-hidden className="shrink-0 text-neutral-400">
        →
      </span>
    </a>
  );
}
