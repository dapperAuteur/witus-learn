"use client";

// Client-side "save for offline" helpers backing the offline lesson experience. These write
// directly into the Cache API caches the service worker (public/sw.js) reads from when the
// network is unreachable — PAGES_CACHE for lesson pages (HTML + RSC payload) and MEDIA_CACHE
// for audio/video. Keep the cache names in sync with public/sw.js.
//
// The Cache API is the SOURCE OF TRUTH for "is this saved". A parallel metadata manifest
// (./offline-manifest.ts, localStorage) records what each cached path actually *is* — course,
// section, lesson title — because a URL alone can't tell the Downloads screen that. The two are
// reconciled on every read (see reconcileOffline) so the UI can never claim a lesson is saved
// when the cache says otherwise.
import {
  clearManifest,
  manifestSupported,
  readManifest,
  referencedMedia,
  upsertEntry,
  withoutPaths,
  writeManifest,
  type OfflineEntry,
  type OfflineLessonMeta,
} from "./offline-manifest";

export type { OfflineEntry, OfflineLessonMeta };

export const PAGES_CACHE = "witus-pages-v1";
export const MEDIA_CACHE = "witus-media-v1";

/** The Downloads manager route. Precached by the SW and (belt-and-braces) re-cached on first
 *  save — see ensureManagerCached. */
export const DOWNLOADS_PATH = "/downloads";

/** App shell pages that live in PAGES_CACHE but are NOT lessons. Excluded from the offline
 *  inventory so they never render as a mystery "orphaned lesson" on the Downloads screen. */
const SHELL_PATHS = new Set<string>([DOWNLOADS_PATH, "/offline"]);

// Synthetic cache key for a page's RSC (React Server Component) payload — the stream Next
// fetches for client-side <Link> navigation. It isn't a real URL a browser would request, so it
// can't collide with a real cached page.
function rscKey(pathname: string): string {
  return `${pathname}?__rsc`;
}

/** A lesson the learner can save. `meta` is REQUIRED so no call site can quietly cache a page
 *  the Downloads screen would then be unable to name. */
export type SavableLesson = {
  pagePath: string;
  mediaUrl?: string | null;
  meta: OfflineLessonMeta;
};

/** Enough to *remove* a lesson: the manifest supplies the media URL when it knows it, and the
 *  optional hint covers orphans (cached page, manifest entry lost). */
export type RemovableLesson = { pagePath: string; mediaUrl?: string | null };

/** True when the Cache API is unavailable (SSR, unsupported browser, etc). Callers no-op then. */
function unsupported(): boolean {
  return typeof caches === "undefined";
}

/** Whether offline downloads work in this browser at all. The UI shows an explanatory note
 *  instead of dead controls when this is false. */
export function offlineSupported(): boolean {
  return !unsupported() && manifestSupported();
}

/**
 * Cache a lesson page two ways: the HTML document (hard-navigation / offline fallback) and the
 * RSC payload (what Next fetches for client-side <Link> navigation, so clicking "Next lesson"
 * offline works without a full reload). Both requests hit the network directly from the page —
 * that's fine, they're GETs the SW would otherwise pass straight through to the network anyway.
 */
export async function savePage(pathname: string): Promise<void> {
  if (unsupported()) return;
  const cache = await caches.open(PAGES_CACHE);
  const results = await Promise.allSettled([
    fetch(pathname, { credentials: "same-origin" }).then((res) => {
      if (res.ok) return cache.put(pathname, res);
      throw new Error(`Failed to save ${pathname}: ${res.status}`);
    }),
    fetch(pathname, { credentials: "same-origin", headers: { RSC: "1" } }).then((res) => {
      if (res.ok) return cache.put(new Request(rscKey(pathname)), res);
    }),
  ]);
  // Require the HTML half to succeed (it's the offline fallback of last resort); the RSC half
  // is a nice-to-have for client-side nav and is allowed to fail independently.
  if (results[0].status === "rejected") throw results[0].reason;
}

/** Cache a lesson's audio/video file. Needs a CORS-ok response (Cloudinary is fine). */
export async function saveMedia(url: string): Promise<void> {
  if (unsupported()) return;
  const cache = await caches.open(MEDIA_CACHE);
  await cache.add(url);
}

// The Downloads manager is the ONLY screen where a learner can delete what they've saved, so it
// has to be reachable with no network. The service worker precaches it at install (public/sw.js),
// but an install-time fetch can fail (flaky connection, cold deploy). Re-cache it into PAGES_CACHE
// the first time a learner saves anything — by definition they're online at that moment. Runs once
// per page load, best-effort, and never blocks or fails the save the learner actually asked for.
let managerCached = false;
async function ensureManagerCached(): Promise<void> {
  if (unsupported() || managerCached) return;
  managerCached = true;
  try {
    if (!(await isSaved(DOWNLOADS_PATH))) await savePage(DOWNLOADS_PATH);
  } catch {
    managerCached = false; // let a later save retry
  }
}

/**
 * Save a single lesson: page (HTML + RSC), its media if any, then the manifest entry.
 *
 * Order matters. The manifest is written LAST, so it only ever claims a lesson that is genuinely
 * in the cache. An interrupted multi-select (tab closed, connection dropped) therefore leaves a
 * SHORTER manifest, never a wrong one — and any lesson whose page landed but whose manifest write
 * didn't shows up as a removable orphan rather than vanishing. Idempotent: re-saving overwrites
 * the same cache keys and refreshes `savedAt`.
 */
export async function saveLesson(lesson: SavableLesson): Promise<void> {
  await savePage(lesson.pagePath);
  if (lesson.mediaUrl) await saveMedia(lesson.mediaUrl);
  upsertEntry({
    pagePath: lesson.pagePath,
    courseTitle: lesson.meta.courseTitle,
    courseSlug: lesson.meta.courseSlug,
    courseHref: lesson.meta.courseHref,
    sectionTitle: lesson.meta.sectionTitle,
    lessonTitle: lesson.meta.lessonTitle,
    mediaUrl: lesson.mediaUrl ?? null,
    savedAt: Date.now(),
  });
  void ensureManagerCached();
}

/** Remove a single lesson's page (HTML + RSC) and its media, unless another saved lesson still
 *  references that media. Thin wrapper over removeLessons. */
export async function removeLesson(lesson: RemovableLesson): Promise<void> {
  await removeLessons([lesson]);
}

/**
 * Remove N lessons at once (a section, a course, a multi-select).
 *
 * SHARED MEDIA: two lessons can point at the same file (a re-used recording, a shared intro
 * clip). We drop the removed lessons from the manifest FIRST, then delete only the media URLs
 * that no *remaining* saved lesson references — so removing lesson A never takes lesson B's audio
 * with it. Media belonging to an orphan (cached page, no manifest entry) can't be identified from
 * the path alone; the caller may pass `mediaUrl` as a hint, and anything still unaccounted for is
 * surfaced separately on the Downloads screen as removable "other media" rather than being
 * silently stranded.
 *
 * Idempotent (deleting an absent key is a no-op) and safe to interrupt: if this dies between the
 * page delete and the manifest write, the manifest simply lists a lesson whose page is gone, and
 * the next reconcileOffline() prunes it as stale.
 */
export async function removeLessons(lessons: RemovableLesson[]): Promise<void> {
  if (unsupported() || lessons.length === 0) return;
  const before = readManifest();
  const paths = lessons.map((l) => l.pagePath);

  const pages = await caches.open(PAGES_CACHE);
  await Promise.all(
    paths.flatMap((p) => [pages.delete(p), pages.delete(new Request(rscKey(p)))]),
  );

  const after = withoutPaths(before, paths);
  const stillReferenced = referencedMedia(after);
  const media = await caches.open(MEDIA_CACHE);
  const doomed = new Set<string>();
  for (const lesson of lessons) {
    const url = lesson.mediaUrl ?? before[lesson.pagePath]?.mediaUrl ?? null;
    if (url && !stillReferenced.has(url)) doomed.add(url);
  }
  await Promise.all([...doomed].map((url) => media.delete(url)));

  writeManifest(after);
}

/** Whether a lesson page's HTML is already saved for offline. */
export async function isSaved(pagePath: string): Promise<boolean> {
  if (unsupported()) return false;
  const cache = await caches.open(PAGES_CACHE);
  const hit = await cache.match(pagePath);
  return Boolean(hit);
}

/** Whether a media URL is already saved for offline. */
export async function isMediaSaved(url: string): Promise<boolean> {
  if (unsupported()) return false;
  const cache = await caches.open(MEDIA_CACHE);
  const hit = await cache.match(url);
  return Boolean(hit);
}

/** Every lesson-page path currently in PAGES_CACHE. Synthetic RSC keys and app-shell pages
 *  (/downloads, /offline) are filtered out — what's left is exactly "lessons the learner has". */
export async function listSavedPagePaths(): Promise<string[]> {
  if (unsupported()) return [];
  const cache = await caches.open(PAGES_CACHE);
  const requests = await cache.keys();
  const paths = new Set<string>();
  for (const request of requests) {
    const url = new URL(request.url);
    if (url.searchParams.has("__rsc")) continue; // synthetic RSC-payload key, not a page
    if (SHELL_PATHS.has(url.pathname)) continue;
    paths.add(url.pathname);
  }
  return [...paths];
}

/** Every media URL currently in MEDIA_CACHE (absolute — media is often cross-origin Cloudinary). */
export async function listSavedMediaUrls(): Promise<string[]> {
  if (unsupported()) return [];
  const cache = await caches.open(MEDIA_CACHE);
  const requests = await cache.keys();
  return [...new Set(requests.map((r) => r.url))];
}

export type SaveCourseProgress = { done: number; total: number };

/**
 * Save a batch of lessons (page + media + manifest entry), one at a time. Reports progress after
 * each so the UI can render "3/12 saved". Continues past individual failures — a flaky asset
 * shouldn't abort the rest — and returns the ones that failed.
 *
 * Interrupt-safe by construction: each lesson is fully committed (cache, then manifest) before the
 * next one starts, so killing this mid-batch leaves N fully-saved lessons and nothing partial.
 */
export async function saveCourse(
  lessons: SavableLesson[],
  onProgress?: (progress: SaveCourseProgress) => void,
): Promise<{ failed: SavableLesson[] }> {
  const failed: SavableLesson[] = [];
  let done = 0;
  for (const lesson of lessons) {
    try {
      await saveLesson(lesson);
    } catch {
      failed.push(lesson);
    }
    done += 1;
    onProgress?.({ done, total: lessons.length });
  }
  return { failed };
}

/** True when every lesson's page is saved for offline (used for the course-level indicator). */
export async function isCourseSaved(lessons: SavableLesson[]): Promise<boolean> {
  if (unsupported() || lessons.length === 0) return false;
  const results = await Promise.all(lessons.map((l) => isSaved(l.pagePath)));
  return results.every(Boolean);
}

/** What is *actually* saved on this device, right now, with no network. */
export type OfflineInventory = {
  /** Saved AND described — the normal case; groupable by course → section → lesson. */
  entries: OfflineEntry[];
  /** Cached lesson pages the manifest can't name (manifest cleared, quota-blocked write, an
   *  older build that predates the manifest). Shown by path, and removable. */
  orphanPages: string[];
  /** Media files in MEDIA_CACHE no saved lesson references. Shown as removable "other media" so
   *  a learner is never charged storage they can't see or reclaim. */
  orphanMedia: string[];
};

/**
 * Reconcile the manifest against the real caches, and return only what's genuinely there.
 *
 * This is the anti-drift step, and it treats the CACHE as truth in both directions:
 *  • a manifest entry whose page is NOT in the cache is STALE → dropped (and the pruned manifest
 *    persisted), so the UI can never advertise a download that isn't there;
 *  • a cached page with NO manifest entry is an ORPHAN → still shown (by path) and still
 *    removable, so storage is never invisibly consumed.
 * Everything the Downloads screen and the per-lesson "saved" badges render comes from here.
 */
export async function reconcileOffline(): Promise<OfflineInventory> {
  if (unsupported()) return { entries: [], orphanPages: [], orphanMedia: [] };

  const [cachedPaths, cachedMedia] = await Promise.all([listSavedPagePaths(), listSavedMediaUrls()]);
  const cached = new Set(cachedPaths);
  const manifest = readManifest();

  const entries: OfflineEntry[] = [];
  let stale = false;
  for (const [path, entry] of Object.entries(manifest)) {
    if (cached.has(path)) entries.push(entry);
    else stale = true;
  }
  // Persist the prune so the drift is corrected, not just hidden from this render.
  if (stale) writeManifest(Object.fromEntries(entries.map((e) => [e.pagePath, e])));

  const described = new Set(entries.map((e) => e.pagePath));
  const orphanPages = cachedPaths.filter((p) => !described.has(p)).sort();

  const referenced = new Set(entries.map((e) => e.mediaUrl).filter((u): u is string => Boolean(u)));
  const orphanMedia = cachedMedia.filter((u) => !referenced.has(u)).sort();

  return { entries, orphanPages, orphanMedia };
}

/** Delete every media URL passed, unconditionally. Only used for the "other media" row on the
 *  Downloads screen, where by definition no saved lesson claims them. */
export async function removeMedia(urls: string[]): Promise<void> {
  if (unsupported() || urls.length === 0) return;
  const cache = await caches.open(MEDIA_CACHE);
  await Promise.all(urls.map((u) => cache.delete(u)));
}

/** Nuke every download: both caches and the manifest. The Downloads manager itself is precached
 *  in the SW's static cache, so it stays reachable offline even after this wipes PAGES_CACHE. */
export async function removeAllOffline(): Promise<void> {
  if (unsupported()) return;
  await Promise.all([caches.delete(PAGES_CACHE), caches.delete(MEDIA_CACHE)]);
  clearManifest();
  managerCached = false;
  void ensureManagerCached(); // best-effort; a no-op when we're offline
}

/**
 * Bytes this origin is using, per navigator.storage.estimate(). Origin-wide (every cache, plus
 * IndexedDB/localStorage), not just our two caches — the UI must label it as such rather than
 * imply it's the exact size of the learner's lessons. Returns null where unsupported (older
 * Safari), and the UI hides the row instead of showing a wrong 0 B.
 */
export async function storageUsage(): Promise<{ usage: number; quota: number } | null> {
  if (typeof navigator === "undefined" || !navigator.storage?.estimate) return null;
  try {
    const estimate = await navigator.storage.estimate();
    if (typeof estimate.usage !== "number") return null;
    return { usage: estimate.usage, quota: typeof estimate.quota === "number" ? estimate.quota : 0 };
  } catch {
    return null;
  }
}
