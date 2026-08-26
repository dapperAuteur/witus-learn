"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import {
  listSavedPagePaths,
  offlineSupported,
  removeLessons,
  saveCourse,
  type OfflineReadiness,
  type SavableLesson,
  type SaveCourseProgress,
} from "@/lib/offline";
import { useOfflineReadiness } from "@/lib/use-offline-readiness";

/**
 * Selective offline downloads on the course page: a checkbox per lesson, a select-all per section,
 * a course-level select-all, and one action bar that downloads or removes exactly what's ticked.
 *
 * The provider is a client component whose `children` are the SERVER-rendered syllabus. React
 * passes that server JSX through as `children`, so it renders *inside* the provider's tree and the
 * client checkboxes nested within it read this context normally — which is why the checkboxes can
 * sit inside the existing collapsible <details> sections instead of in a duplicated shadow list.
 *
 * `saved` is always re-derived from listSavedPagePaths() — the Cache API, the source of truth —
 * after every save and every remove. It is never optimistically trusted, so the UI cannot claim a
 * lesson is downloaded when the cache disagrees.
 */

type Busy = { mode: "save" | "remove"; done: number; total: number };

type SelectionCtx = {
  supported: boolean;
  /** Null while the first probe is in flight. */
  readiness: OfflineReadiness | null;
  /** Storage AND a controlling service worker. False ⇒ a download would not survive going
   *  offline, so nothing in this UI may render as "saved". */
  works: boolean;
  /** Only ACCESSIBLE lessons are registered — the course page excludes locked ones, so they get
   *  no checkbox and can't be selected. */
  byPath: Map<string, SavableLesson>;
  allPaths: string[];
  selected: Set<string>;
  saved: Set<string>;
  busy: Busy | null;
  failed: number;
  toggle: (path: string) => void;
  setMany: (paths: string[], on: boolean) => void;
  download: (paths: string[]) => Promise<void>;
  remove: (paths: string[]) => Promise<void>;
};

const Ctx = createContext<SelectionCtx | null>(null);

function useSelection(): SelectionCtx | null {
  return useContext(Ctx);
}

export function OfflineDownloadProvider({
  lessons,
  children,
}: {
  lessons: SavableLesson[];
  children: React.ReactNode;
}) {
  const [supported, setSupported] = useState(false);
  const [selected, setSelected] = useState<Set<string>>(() => new Set());
  const [saved, setSaved] = useState<Set<string>>(() => new Set());
  const [busy, setBusy] = useState<Busy | null>(null);
  const [failed, setFailed] = useState(0);
  const { ready: readiness, works } = useOfflineReadiness();

  const byPath = useMemo(() => new Map(lessons.map((l) => [l.pagePath, l])), [lessons]);
  const allPaths = useMemo(() => lessons.map((l) => l.pagePath), [lessons]);

  // Re-read what's genuinely in the cache. Called on mount and after every mutation, so a
  // half-finished batch (tab closed mid-download, a lesson that 404'd) still leaves the ticks
  // showing exactly the lessons that made it.
  const refreshSaved = useCallback(async () => {
    const paths = await listSavedPagePaths();
    const mine = new Set(paths.filter((p) => byPath.has(p)));
    setSaved(mine);
    return mine;
  }, [byPath]);

  useEffect(() => {
    let cancelled = false;
    // Async setState only (no synchronous set-in-effect), even on the "unsupported" path — the
    // server renders nothing, so a sync set here would hydrate-mismatch.
    Promise.resolve()
      .then(() => {
        if (!offlineSupported()) return null;
        return listSavedPagePaths();
      })
      .then((paths) => {
        if (cancelled || paths === null) return;
        setSupported(true);
        setSaved(new Set(paths.filter((p) => byPath.has(p))));
      })
      .catch(() => {
        /* leave unsupported → controls stay hidden behind the explanatory note */
      });
    return () => {
      cancelled = true;
    };
  }, [byPath]);

  const toggle = useCallback((path: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(path)) next.delete(path);
      else next.add(path);
      return next;
    });
  }, []);

  const setMany = useCallback((paths: string[], on: boolean) => {
    setSelected((prev) => {
      const next = new Set(prev);
      for (const p of paths) {
        if (on) next.add(p);
        else next.delete(p);
      }
      return next;
    });
  }, []);

  const download = useCallback(
    async (paths: string[]) => {
      const batch = paths.map((p) => byPath.get(p)).filter((l): l is SavableLesson => Boolean(l));
      if (batch.length === 0) return;
      setFailed(0);
      setBusy({ mode: "save", done: 0, total: batch.length });
      // saveCourse commits each lesson fully (cache → manifest) before starting the next, so an
      // interrupted run leaves N complete downloads and nothing partial.
      const onProgress = (p: SaveCourseProgress) => setBusy({ mode: "save", ...p });
      const { failed: bad } = await saveCourse(batch, onProgress);
      await refreshSaved();
      setFailed(bad.length);
      setBusy(null);
      // Clear only what actually landed; anything that failed stays ticked so "try again" is one tap.
      const badPaths = new Set(bad.map((l) => l.pagePath));
      setMany(
        batch.map((l) => l.pagePath).filter((p) => !badPaths.has(p)),
        false,
      );
    },
    [byPath, refreshSaved, setMany],
  );

  const remove = useCallback(
    async (paths: string[]) => {
      const batch = paths
        .map((p) => byPath.get(p))
        .filter((l): l is SavableLesson => Boolean(l))
        .map((l) => ({ pagePath: l.pagePath, mediaUrl: l.mediaUrl ?? null }));
      if (batch.length === 0) return;
      setFailed(0);
      setBusy({ mode: "remove", done: 0, total: batch.length });
      try {
        // One call: it drops the manifest entries first, then deletes only the media no REMAINING
        // saved lesson still references (shared clips survive).
        await removeLessons(batch);
      } catch {
        /* fall through — refreshSaved below reports what's actually left */
      }
      await refreshSaved();
      setBusy(null);
      setMany(paths, false);
    },
    [byPath, refreshSaved, setMany],
  );

  const value = useMemo<SelectionCtx>(
    () => ({ supported, readiness, works, byPath, allPaths, selected, saved, busy, failed, toggle, setMany, download, remove }),
    [supported, readiness, works, byPath, allPaths, selected, saved, busy, failed, toggle, setMany, download, remove],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

// A 44px touch target on coarse pointers (the repo's pointer-coarse idiom, cf. markdown-editor),
// while staying compact on a mouse.
const TAP = "flex min-h-8 min-w-8 shrink-0 items-center justify-center gap-1 rounded-md pointer-coarse:min-h-11 pointer-coarse:min-w-11";
const BOX = "h-5 w-5 shrink-0 cursor-pointer accent-current focus-visible:outline-2 focus-visible:outline-offset-2";

/** Per-lesson checkbox + "already downloaded" indicator. Renders nothing for a lesson that isn't
 *  savable (locked → never registered) or when the browser can't do offline at all. */
export function OfflineLessonCheckbox({ pagePath, lessonTitle }: { pagePath: string; lessonTitle: string }) {
  const ctx = useSelection();
  if (!ctx?.supported || !ctx.works || !ctx.byPath.has(pagePath)) return null;
  const isSaved = ctx.saved.has(pagePath);
  const checked = ctx.selected.has(pagePath);
  return (
    <label className={TAP} title={isSaved ? "Saved for offline" : "Select for offline download"}>
      <input
        type="checkbox"
        className={BOX}
        checked={checked}
        disabled={ctx.busy !== null}
        onChange={() => ctx.toggle(pagePath)}
        // Names the lesson, not just "select" — a screen reader hears which one, and whether it's
        // already on the device.
        aria-label={`${lessonTitle}, ${isSaved ? "saved for offline; select to remove" : "select to download for offline"}`}
      />
      {isSaved ? (
        <span aria-hidden className="text-xs leading-none text-green-600 dark:text-green-400">
          ⬇
        </span>
      ) : null}
    </label>
  );
}

/** Select-all for one section (course module). Indeterminate when only some of its lessons are
 *  ticked — `indeterminate` is a DOM property, not an HTML attribute, so it must be set via ref. */
export function OfflineSectionCheckbox({ sectionTitle, paths }: { sectionTitle: string; paths: string[] }) {
  const ctx = useSelection();
  const ref = useRef<HTMLInputElement>(null);

  const byPath = ctx?.byPath;
  const mine = useMemo(() => (byPath ? paths.filter((p) => byPath.has(p)) : []), [paths, byPath]);
  const selectedCount = mine.filter((p) => ctx?.selected.has(p)).length;
  const savedCount = mine.filter((p) => ctx?.saved.has(p)).length;
  const all = mine.length > 0 && selectedCount === mine.length;
  const some = selectedCount > 0 && !all;

  useEffect(() => {
    if (ref.current) ref.current.indeterminate = some;
  }, [some]);

  if (!ctx?.supported || !ctx.works || mine.length === 0) return null;

  return (
    // Stop the click here: this label sits inside <summary>, and a click bubbling up to <summary>
    // would toggle the section open/closed. Covers keyboard too — Space on the input fires a click
    // that would otherwise reach <summary>.
    <label
      className={TAP}
      onClick={(e) => e.stopPropagation()}
      title={`Select all ${mine.length} lessons in this section for offline`}
    >
      <input
        ref={ref}
        type="checkbox"
        className={BOX}
        checked={all}
        disabled={ctx.busy !== null}
        onChange={(e) => ctx.setMany(mine, e.target.checked)}
        aria-label={`Select all ${mine.length} lesson${mine.length === 1 ? "" : "s"} in section “${sectionTitle}” for offline${savedCount > 0 ? ` (${savedCount} already saved)` : ""}`}
      />
      {savedCount === mine.length ? (
        <span aria-hidden className="text-xs leading-none text-green-600 dark:text-green-400">
          ⬇
        </span>
      ) : null}
    </label>
  );
}

/**
 * Why offline can't be relied on right now, in the learner's words — or null when it can.
 *
 * This is the guard against the bug that shipped: the Cache API writes fine with no service
 * worker, so downloads "succeeded" and the UI went green, but nothing was there to serve them and
 * airplane mode produced the browser's own no-connection page. If the SW isn't controlling this
 * page, we say so instead of showing a check the learner would trust on a plane.
 */
function unavailableReason(ctx: SelectionCtx): string | null {
  if (ctx.readiness === null) return null; // still probing — don't flash a scary banner
  if (!ctx.readiness.storage) return "Offline downloads aren’t supported in this browser. (Private or incognito windows usually block the storage they need.)";
  if (!ctx.readiness.serviceWorkerApi) return "Offline downloads aren’t supported in this browser.";
  if (!ctx.readiness.controlling) {
    return ctx.readiness.registered
      ? "Offline mode is still starting up, reload the page to finish enabling downloads."
      : "Offline mode isn’t running on this page yet, reload the page to enable downloads.";
  }
  return null;
}

function OfflineUnavailable({ reason }: { reason: string }) {
  return (
    <p role="status" className="max-w-sm text-xs text-amber-700 dark:text-amber-500">
      ⚠️ {reason}
    </p>
  );
}

/** "Manage downloads" → the Downloads manager. Only shown once this device actually HAS something
 *  saved, so it's a useful exit and not permanent chrome on a course nobody has downloaded.
 *
 *  Real <a>, not next/link: /downloads is served from the service worker's precache when there's
 *  no network, and only a hard navigation is a request the SW can answer. A <Link> would issue an
 *  RSC fetch that fails offline — on the one screen that exists for offline. */
function ManageDownloadsLink() {
  return (
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    <a
      href="/downloads"
      className="inline-flex min-h-8 items-center text-xs text-neutral-600 underline focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-11 dark:text-neutral-400"
    >
      Manage downloads
    </a>
  );
}

/** The one-click path, preserved: download every accessible lesson in the course. Sits next to the
 *  syllabus heading and shares state with the checkboxes, so ticks appear as it goes. */
export function OfflineDownloadAllButton() {
  const ctx = useSelection();
  if (!ctx || ctx.allPaths.length === 0) return null;

  const reason = unavailableReason(ctx);
  if (reason) return <OfflineUnavailable reason={reason} />;
  if (!ctx.supported || !ctx.works) return null;

  const missing = ctx.allPaths.filter((p) => !ctx.saved.has(p));
  const total = ctx.allPaths.length;
  const savedCount = total - missing.length;
  const wholeCourse = ctx.busy?.mode === "save" && ctx.busy.total === total;
  // `saved` is scoped to THIS course's lessons (refreshSaved filters by byPath), so this means
  // "the learner has downloaded something here" — the moment a manage/remove exit becomes useful.
  const hasDownloads = ctx.saved.size > 0;

  return (
    <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
      {missing.length === 0 ? (
        <span className="text-sm text-green-700 dark:text-green-400">
          ✓ Whole course saved for offline
        </span>
      ) : (
        <button
          type="button"
          onClick={() => void ctx.download(missing)}
          disabled={ctx.busy !== null}
          className="inline-flex min-h-10 items-center rounded-md border border-neutral-300 px-3 text-sm hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 pointer-coarse:min-h-11 dark:border-neutral-700 dark:hover:bg-neutral-800"
        >
          {wholeCourse && ctx.busy
            ? `Saving… ${ctx.busy.done}/${ctx.busy.total}`
            : savedCount > 0
              ? `⬇ Save the remaining ${missing.length} lesson${missing.length === 1 ? "" : "s"}`
              : `⬇ Save whole course (${total} lesson${total === 1 ? "" : "s"})`}
        </button>
      )}
      {hasDownloads ? <ManageDownloadsLink /> : null}
    </span>
  );
}

/**
 * The action bar. Sticks to the bottom of the viewport while anything is selected (or a batch is
 * running) so the learner never has to scroll back up to act on a long syllabus. Hidden entirely
 * when nothing is selected — no permanent chrome tax on the page.
 */
export function OfflineSelectionBar() {
  const ctx = useSelection();
  if (!ctx?.supported || !ctx.works || ctx.allPaths.length === 0) return null;

  const selected = [...ctx.selected];
  const busy = ctx.busy;
  if (selected.length === 0 && !busy && ctx.failed === 0) return null;

  const toSave = selected.filter((p) => !ctx.saved.has(p));
  const toRemove = selected.filter((p) => ctx.saved.has(p));
  const allSelected = ctx.allPaths.length > 0 && selected.length === ctx.allPaths.length;

  return (
    // -mx-4 bleeds to the page gutters without exceeding them, so there's no horizontal scroll at
    // 320px; the buttons wrap instead of overflowing.
    <div
      role="region"
      aria-label="Offline download actions"
      className="sticky bottom-0 z-10 -mx-4 mt-4 border-t border-neutral-200 bg-white/95 px-4 py-3 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/95"
    >
      <div aria-live="polite" className="flex flex-wrap items-center gap-2 text-sm">
        <span className="mr-auto tabular-nums text-neutral-600 dark:text-neutral-400">
          {busy
            ? `${busy.mode === "save" ? "Downloading" : "Removing"}… ${busy.done}/${busy.total}`
            : `${selected.length} selected`}
        </span>

        {toSave.length > 0 ? (
          <button
            type="button"
            onClick={() => void ctx.download(toSave)}
            disabled={busy !== null}
            className="inline-flex min-h-11 items-center rounded-md px-4 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60"
            style={{ backgroundColor: "var(--accent, #111)" }}
          >
            ⬇ Download selected ({toSave.length})
          </button>
        ) : null}

        {toRemove.length > 0 ? (
          <button
            type="button"
            onClick={() => void ctx.remove(toRemove)}
            disabled={busy !== null}
            className="inline-flex min-h-11 items-center rounded-md border border-neutral-300 px-4 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 dark:border-neutral-700 dark:hover:bg-neutral-800"
          >
            Remove selected ({toRemove.length})
          </button>
        ) : null}

        <button
          type="button"
          onClick={() => ctx.setMany(ctx.allPaths, !allSelected)}
          disabled={busy !== null}
          className="inline-flex min-h-11 items-center rounded-md px-3 text-neutral-600 underline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 dark:text-neutral-400"
        >
          {allSelected ? "Clear selection" : "Select all"}
        </button>
      </div>
      {ctx.failed > 0 ? (
        <p role="status" className="mt-1 text-xs text-red-600">
          {ctx.failed} lesson{ctx.failed === 1 ? "" : "s"} couldn&rsquo;t be downloaded and {ctx.failed === 1 ? "is" : "are"} still
          selected. Try again with a better connection.
        </p>
      ) : null}
    </div>
  );
}
