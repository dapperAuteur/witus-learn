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
  isLessonEntry,
  isPageEntry,
  manifestSupported,
  readManifest,
  referencedMedia,
  upsertEntry,
  withoutPaths,
  writeManifest,
  type OfflineEntry,
  type OfflineLessonEntry,
  type OfflineLessonMeta,
  type OfflinePageEntry,
  type OfflinePageMeta,
} from "./offline-manifest";

export type {
  OfflineEntry,
  OfflineLessonEntry,
  OfflineLessonMeta,
  OfflinePageEntry,
  OfflinePageMeta,
};
export { isLessonEntry, isPageEntry };

export const PAGES_CACHE = "witus-pages-v1";
export const MEDIA_CACHE = "witus-media-v1";
/**
 * The JS/CSS a saved page needs in order to actually RENDER offline.
 *
 * public/sw.js caches `/_next/static/*` cache-first, but only ON DEMAND — a chunk lands in the
 * cache because the learner requested it, i.e. because they visited the page that needs it. That
 * silently breaks any page they only ever open OFFLINE: the SW serves the cached HTML, React then
 * tries to load its route chunk, the network is gone, and the whole page dies with a
 * ChunkLoadError → "Something went wrong". It bit /downloads and /offline exactly — the two pages
 * whose entire job is to work with no connection.
 *
 * So when we save a page we also save the build assets its HTML references. Content-hashed and
 * immutable, so they're safe to keep and never need revalidating. Version-independent (like PAGES
 * and MEDIA) and in the SW's activate-purge allowlist, so a deploy can't strip a learner's
 * downloads of the code that renders them.
 */
export const ASSETS_CACHE = "witus-assets-v1";

/** The Downloads manager route. Precached by the SW and (belt-and-braces) re-cached — with its
 *  JS/CSS — on the learner's first save. See ensureShellCached. */
export const DOWNLOADS_PATH = "/downloads";

/** App shell pages that live in PAGES_CACHE but are NOT lessons. Excluded from the offline
 *  inventory so they never render as a mystery "orphaned lesson" on the Downloads screen. */
const SHELL_PATHS = new Set<string>([DOWNLOADS_PATH, "/offline"]);

// Synthetic cache key for a page's RSC (React Server Component) payload — the stream Next
// fetches for client-side <Link> navigation. It isn't a real URL a browser would request, so it
// can't collide with a real cached page. Passed to the Cache API as a plain string (a valid
// RequestInfo, normalised against the document base exactly as `new Request(...)` would be) —
// same stored key, and no relative-URL construction to trip over.
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

/** A standalone page the user can save (today: `/admin/future`). Same rule — `meta` is required,
 *  and for a signed-in page it carries the `sensitive` flag the purge depends on. */
export type SavablePage = {
  pagePath: string;
  meta: OfflinePageMeta;
};

/**
 * Cached paths that are ALWAYS treated as private, whatever the manifest says.
 *
 * The manifest is a hint layer: it can be cleared, quota-blocked, or corrupted, and then a cached
 * admin page would have no `sensitive: true` record to find it by — leaving signed-in HTML on the
 * device with nothing left to revoke it. So the purge ALSO sweeps by path prefix. Belt and braces,
 * on the one thing where being wrong means leaving someone else's private notes on a shared phone.
 */
const PRIVATE_PATH_PREFIXES = ["/admin"];

function isPrivatePath(pathname: string): boolean {
  return PRIVATE_PATH_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

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
    fetch(pathname, { credentials: "same-origin" }).then(async (res) => {
      if (!res.ok) throw new Error(`Failed to save ${pathname}: ${res.status}`);
      // Clone BEFORE put — put consumes the body, and we need the HTML text to find the page's
      // JS/CSS. Without those, this page would be served from cache and then die rendering.
      const forAssets = res.clone();
      await cache.put(pathname, res);
      return forAssets.text();
    }),
    fetch(pathname, { credentials: "same-origin", headers: { RSC: "1" } }).then((res) => {
      if (res.ok) return cache.put(rscKey(pathname), res);
    }),
  ]);
  // Require the HTML half to succeed (it's the offline fallback of last resort); the RSC half
  // is a nice-to-have for client-side nav and is allowed to fail independently.
  if (results[0].status === "rejected") throw results[0].reason;
  await savePageAssets(results[0].value);
}

// Every /_next/static/… URL the HTML mentions — <script src>, <link href>, preloads, and the ones
// embedded in the RSC flight payload (which appear escaped, so we don't anchor on a quote).
const NEXT_ASSET_RE = /\/_next\/static\/[^"'()\s\\]+/g;

/** Cache the build assets a saved page needs to render. Best-effort per asset: a single missing
 *  chunk must not fail the lesson save the learner actually asked for. */
async function savePageAssets(html: string): Promise<void> {
  if (unsupported()) return;
  const urls = new Set<string>(html.match(NEXT_ASSET_RE) ?? []);
  if (urls.size === 0) return;
  const cache = await caches.open(ASSETS_CACHE);
  await Promise.allSettled(
    [...urls].map(async (url) => {
      // Content-hashed and immutable: if we already have it, never fetch it again.
      if (await cache.match(url)) return;
      await cache.add(url);
    }),
  );
}

/** Cache a lesson's audio/video file. Needs a CORS-ok response (Cloudinary is fine). */
export async function saveMedia(url: string): Promise<void> {
  if (unsupported()) return;
  const cache = await caches.open(MEDIA_CACHE);
  await cache.add(url);
}

/**
 * Cache the two pages that only ever get OPENED offline: the Downloads manager (the only screen
 * where a learner can see and delete what they've saved) and the /offline fallback.
 *
 * The service worker precaches both at install, but only their HTML — and HTML alone is not enough
 * (see ASSETS_CACHE: a page whose route chunk was never fetched dies with a ChunkLoadError the
 * moment it's opened without a network). savePage() pulls in each page's JS/CSS too, so this is
 * what actually makes them work.
 *
 * Runs on the learner's first save, when they are by definition online. Best-effort: it never
 * blocks or fails the save they actually asked for.
 */
const SHELL_TO_CACHE = [DOWNLOADS_PATH, "/offline"];
let shellCached = false;
async function ensureShellCached(): Promise<void> {
  if (unsupported() || shellCached) return;
  shellCached = true;
  try {
    await Promise.all(
      SHELL_TO_CACHE.map(async (path) => {
        if (!(await isSaved(path))) await savePage(path);
      }),
    );
  } catch {
    shellCached = false; // let a later save retry
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
  // VERIFY, don't assume. "Saved" must mean "I have read this back out of the cache", not "the
  // promise resolved" — a green check the learner trusts and then loses on a plane is the worst
  // outcome this feature has. Throwing here also keeps the lesson out of the manifest, so the
  // Downloads screen can't advertise it either.
  if (!(await isSaved(lesson.pagePath))) {
    throw new Error(`Offline save could not be verified for ${lesson.pagePath}`);
  }
  upsertEntry({
    kind: "lesson",
    pagePath: lesson.pagePath,
    courseTitle: lesson.meta.courseTitle,
    courseSlug: lesson.meta.courseSlug,
    courseHref: lesson.meta.courseHref,
    sectionTitle: lesson.meta.sectionTitle,
    lessonTitle: lesson.meta.lessonTitle,
    mediaUrl: lesson.mediaUrl ?? null,
    savedAt: Date.now(),
  });
  void ensureShellCached();
}

/**
 * Save a standalone page for offline — the same page + assets + verify + manifest sequence as
 * saveLesson, for something that isn't a lesson. Today: `/admin/future`.
 *
 * ── Why this is allowed to cache an AUTHENTICATED page, and on what terms ─────────────────────
 * Everything else here is public course content. This writes a SIGNED-IN, owner-only page — with
 * whatever notes are on it — into the Cache API as plain text on the device. That is a real
 * exposure, so it is fenced:
 *
 *  1. EXPLICIT ONLY. There is no auto-save, no prefetch, no "we saved this for you". The only
 *     thing that calls this with `sensitive: true` is a button the owner deliberately pressed, and
 *     its copy says what lands on the device. (Contrast lessons, which a course page will happily
 *     bulk-save — that is fine for public content and would not be fine here.)
 *  2. REVOCABLE. `savedByUserId` + `sensitive` let purgeSensitivePages() delete it on sign-out and
 *     on the next online load under a different account. See that function.
 *  3. STILL SERVER-GATED. Caching changes nothing about authorisation: the page is network-first,
 *     so ONLINE it is always re-fetched and `requirePlatformOwner()` runs. The cached copy is only
 *     ever reachable when the network is gone — which is the whole point — and until the purge
 *     removes it.
 *
 * What remains, honestly: between saving and signing out, someone holding the unlocked device with
 * the network off can read the cached page. That is the deal the button's copy states plainly.
 */
export async function savePageOffline(page: SavablePage): Promise<void> {
  await savePage(page.pagePath);
  // VERIFY, don't assume — same rule as saveLesson: "saved" means "read back out of the cache".
  if (!(await isSaved(page.pagePath))) {
    throw new Error(`Offline save could not be verified for ${page.pagePath}`);
  }
  upsertEntry({
    kind: "page",
    pagePath: page.pagePath,
    pageTitle: page.meta.pageTitle,
    pageSummary: page.meta.pageSummary,
    sensitive: page.meta.sensitive,
    savedByUserId: page.meta.savedByUserId,
    mediaUrl: null,
    savedAt: Date.now(),
  });
  void ensureShellCached();
}

/**
 * Delete every cached page that is private and no longer belongs to the user who is signed in
 * RIGHT NOW. This is the revocation half of the deal `savePageOffline` makes.
 *
 * Called with:
 *   • `null` from the sign-out button, BEFORE the session is destroyed → the owner's saved admin
 *     page leaves the device with them.
 *   • the current user id from `<OfflinePrivacyGuard>` on every ONLINE tenant page load → so a
 *     session that simply expired, or a second person signing in on the same device, also clears
 *     it. (The guard skips this while offline, because a page replayed from cache carries a STALE
 *     `userId` baked in at save time — acting on that would delete the owner's own downloads.)
 *
 * Two independent sweeps, because either one alone has a hole:
 *   • by MANIFEST — every `sensitive` page entry whose `savedByUserId` isn't the current user;
 *   • by PATH — every cached page under `/admin` (see PRIVATE_PATH_PREFIXES), even if the manifest
 *     lost its record of it, unless it's the current user's own described entry.
 *
 * Returns the paths it removed (the caller may want to tell the user).
 */
export async function purgeSensitivePages(currentUserId: string | null): Promise<string[]> {
  if (unsupported()) return [];
  const manifest = readManifest();
  const doomed = new Set<string>();

  const mine = (entry: OfflineEntry): boolean =>
    isPageEntry(entry) && Boolean(currentUserId) && entry.savedByUserId === currentUserId;

  for (const entry of Object.values(manifest)) {
    if (isPageEntry(entry) && entry.sensitive && !mine(entry)) doomed.add(entry.pagePath);
  }
  // Path sweep: catches anything the manifest can no longer describe (cleared, quota-blocked,
  // corrupted) — a cached /admin page with no record is exactly the case a manifest-only purge
  // would strand on the device forever.
  const cache = await caches.open(PAGES_CACHE);
  for (const request of await cache.keys()) {
    const { pathname } = new URL(request.url);
    if (!isPrivatePath(pathname)) continue;
    const entry = manifest[pathname];
    if (entry && mine(entry)) continue;
    doomed.add(pathname);
  }

  if (doomed.size === 0) return [];
  await removeSavedPaths([...doomed]);
  return [...doomed];
}

/** Remove a single lesson's page (HTML + RSC) and its media, unless another saved lesson still
 *  references that media. Thin wrapper over removeLessons. */
export async function removeLesson(lesson: RemovableLesson): Promise<void> {
  await removeLessons([lesson]);
}

/** Remove saved pages by path — lessons, standalone pages, or orphans the manifest can't name.
 *  The same machinery as removeLessons (which is media-aware); these just have no media. */
export async function removeSavedPaths(pagePaths: string[]): Promise<void> {
  await removeLessons(pagePaths.map((pagePath) => ({ pagePath })));
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
  await Promise.all(paths.flatMap((p) => [pages.delete(p), pages.delete(rscKey(p))]));

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
  /** Saved LESSONS, described — the normal case; groupable by course → section → lesson. */
  entries: OfflineLessonEntry[];
  /** Saved standalone pages (today: `/admin/future`). Listed under their own heading on
   *  /downloads rather than shoehorned into a course they don't belong to. */
  pages: OfflinePageEntry[];
  /** Cached pages the manifest can't name (manifest cleared, quota-blocked write, an
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
  if (unsupported()) return { entries: [], pages: [], orphanPages: [], orphanMedia: [] };

  const [cachedPaths, cachedMedia] = await Promise.all([listSavedPagePaths(), listSavedMediaUrls()]);
  const cached = new Set(cachedPaths);
  const manifest = readManifest();

  const live: OfflineEntry[] = [];
  let stale = false;
  for (const [path, entry] of Object.entries(manifest)) {
    if (cached.has(path)) live.push(entry);
    else stale = true;
  }
  // Persist the prune so the drift is corrected, not just hidden from this render.
  if (stale) writeManifest(Object.fromEntries(live.map((e) => [e.pagePath, e])));

  const entries = live.filter(isLessonEntry);
  const pages = live.filter(isPageEntry).sort((a, b) => a.pageTitle.localeCompare(b.pageTitle));

  // BOTH kinds count as "described" — a saved page the manifest knows about is not an orphan.
  const described = new Set(live.map((e) => e.pagePath));
  const orphanPages = cachedPaths.filter((p) => !described.has(p)).sort();

  const referenced = referencedMedia(Object.fromEntries(live.map((e) => [e.pagePath, e])));
  const orphanMedia = cachedMedia.filter((u) => !referenced.has(u)).sort();

  return { entries, pages, orphanPages, orphanMedia };
}

/** Delete every media URL passed, unconditionally. Only used for the "other media" row on the
 *  Downloads screen, where by definition no saved lesson claims them. */
export async function removeMedia(urls: string[]): Promise<void> {
  if (unsupported() || urls.length === 0) return;
  const cache = await caches.open(MEDIA_CACHE);
  await Promise.all(urls.map((u) => cache.delete(u)));
}

/**
 * Nuke every download: pages, media, the page assets we pulled in for them, and the manifest.
 *
 * "Remove all" has to mean it — leaving the assets cache behind would keep megabytes of JS the
 * learner explicitly asked to reclaim. The SW still has the shell HTML in its own static cache, and
 * we re-cache /downloads + /offline (with their JS) immediately after, so the manager doesn't
 * saw off the branch it's sitting on. That re-cache needs the network; when we're offline it's a
 * no-op and the SW's static cache carries the page instead.
 */
export async function removeAllOffline(): Promise<void> {
  if (unsupported()) return;
  await Promise.all([
    caches.delete(PAGES_CACHE),
    caches.delete(MEDIA_CACHE),
    caches.delete(ASSETS_CACHE),
  ]);
  clearManifest();
  shellCached = false;
  void ensureShellCached();
}

/**
 * Can this page ACTUALLY serve content offline right now?
 *
 * The Cache API works with or without a service worker — which is precisely the trap. Downloads
 * write into the cache happily, the UI goes green, and then the learner switches to airplane mode
 * and gets the browser's "no connection" page, because nothing is intercepting the navigation.
 * `controller` is the one honest signal: it is non-null only when a SW is actively controlling
 * THIS page, and that is exactly the condition under which public/sw.js can answer a navigation
 * from cache. Anything that claims "saved for offline" must gate on it.
 *
 * `controller` is legitimately null for a short window on a first visit (the SW installs, then
 * `clients.claim()`s) — callers listen for `controllerchange` and re-probe, rather than
 * permanently condemning the page.
 */
export type OfflineReadiness = {
  /** Cache API + manifest storage usable at all. */
  storage: boolean;
  /** The browser exposes the Service Worker API (false in private windows on some browsers). */
  serviceWorkerApi: boolean;
  /** A service worker is installed and active for this scope. */
  registered: boolean;
  /** A service worker is controlling THIS page — the only state in which offline actually works. */
  controlling: boolean;
};

export async function offlineReadiness(): Promise<OfflineReadiness> {
  const storage = offlineSupported();
  const serviceWorkerApi = typeof navigator !== "undefined" && "serviceWorker" in navigator;
  if (!serviceWorkerApi) return { storage, serviceWorkerApi: false, registered: false, controlling: false };
  let registered = false;
  try {
    const registration = await navigator.serviceWorker.getRegistration();
    registered = Boolean(registration?.active);
  } catch {
    registered = false;
  }
  return {
    storage,
    serviceWorkerApi: true,
    registered,
    controlling: navigator.serviceWorker.controller !== null,
  };
}

/** True when a learner can genuinely rely on offline: storage to put lessons in, and a service
 *  worker controlling the page to serve them back. Both, or it's a lie. */
export function offlineWorks(readiness: OfflineReadiness): boolean {
  return readiness.storage && readiness.controlling;
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
