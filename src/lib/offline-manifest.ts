"use client";

/**
 * The offline MANIFEST — the human-readable half of "saved for offline".
 *
 * The Cache API only stores URLs, so a cached lesson path (`/{user}/{course}/lesson/{slug}`)
 * carries no title, no course, no section. Without a side-table, a Downloads screen can only show
 * raw paths. This module keeps that side-table: one small record per saved lesson, written when
 * the lesson is saved and pruned when it's removed.
 *
 * ── Why localStorage and not IndexedDB ────────────────────────────────────────────────────────
 *  1. The manifest is a HINT LAYER, never the source of truth. The Cache API is the source of
 *     truth for "is this lesson actually saved" (see `reconcileOffline()` in `./offline.ts`).
 *     Losing or corrupting the manifest therefore loses *metadata*, never *content*: the worst
 *     case degrades to today's behaviour (a bare path), which the Downloads UI shows as an
 *     "orphan" row the learner can still open and remove. That risk profile does not justify
 *     IndexedDB's async plumbing, versioning and upgrade callbacks.
 *  2. It is tiny. ~250 bytes per lesson → a learner with 10 courses × 50 lessons is ~125 KB,
 *     about 2.5% of the ~5 MB localStorage budget. IndexedDB's capacity advantage buys nothing
 *     here (the *content* lives in the Cache API, which has its own, much larger quota).
 *  3. Reads are SYNCHRONOUS, so the Downloads screen and the course-page checkboxes have their
 *     metadata on first paint — no loading flash, and crucially **no network**, which is the
 *     entire point of the feature.
 *  4. Nothing reads the manifest from the service worker (a worker cannot see localStorage at
 *     all). If that ever changes, this module is the single thing to port.
 *
 * The one real cost: a read-modify-write of the whole blob is not atomic across TABS, so two tabs
 * saving at the same instant can drop one tab's entry. Reconciliation heals exactly that — the
 * dropped lesson is still in the cache, so it resurfaces as an orphan the learner can see and
 * remove. It never silently claims something is saved that isn't.
 *
 * ── Multi-tenant safety ───────────────────────────────────────────────────────────────────────
 * localStorage — like the Cache API and service workers — is partitioned per ORIGIN, and every
 * tenant is served from its own domain (`tenant_domains`), so two tenants can never share a
 * manifest: different origin, different storage bucket, no code path in between. We additionally
 * store no tenant id and nothing that names another brand — every entry is written by the very
 * page the learner opened on that origin, so a manifest can only ever describe content that
 * origin already served to that learner. There is nothing here to leak.
 */

/** One saved lesson, as the Downloads screen needs to describe it with no network. */
export type OfflineEntry = {
  /** Same-origin pathname of the lesson page. The manifest's primary key + the Cache API key. */
  pagePath: string;
  courseTitle: string;
  courseSlug: string;
  /** Pathname of the course page, so Downloads can link back to it. */
  courseHref: string;
  /** The course module ("section") this lesson sits in, or null for a flat course. */
  sectionTitle: string | null;
  lessonTitle: string;
  /** Direct media file cached alongside the page, if any (audio/video). */
  mediaUrl: string | null;
  /** Epoch ms. Lets Downloads sort/label "saved 3 days ago" and spot old content to prune. */
  savedAt: number;
};

/** The metadata a call site must supply to save a lesson. Everything else is derived. */
export type OfflineLessonMeta = Omit<OfflineEntry, "pagePath" | "mediaUrl" | "savedAt">;

/** `pagePath` → entry. A plain object so it round-trips through JSON unchanged. */
export type OfflineManifest = Record<string, OfflineEntry>;

const KEY = "witus-offline-manifest-v1";

/**
 * localStorage, or null when it isn't usable. Accessing `localStorage` THROWS (not returns
 * undefined) in Safari private mode and when a browser blocks storage for the origin, so this
 * must be inside a try — a blocked-storage browser must degrade, not crash.
 */
function storage(): Storage | null {
  try {
    if (typeof localStorage === "undefined") return null;
    return localStorage;
  } catch {
    return null;
  }
}

/** True when the manifest can be persisted at all (SSR and blocked-storage browsers → false). */
export function manifestSupported(): boolean {
  return storage() !== null;
}

/** Validate one parsed record. Anything malformed is dropped rather than trusted — a bad entry
 *  would put a wrong title next to a real cached lesson, which is the one thing we must not do. */
function coerce(pagePath: string, value: unknown): OfflineEntry | null {
  if (!value || typeof value !== "object") return null;
  const v = value as Record<string, unknown>;
  const str = (k: string): string | null => (typeof v[k] === "string" && v[k] ? (v[k] as string) : null);
  const courseTitle = str("courseTitle");
  const courseSlug = str("courseSlug");
  const courseHref = str("courseHref");
  const lessonTitle = str("lessonTitle");
  if (!courseTitle || !courseSlug || !courseHref || !lessonTitle) return null;
  return {
    pagePath,
    courseTitle,
    courseSlug,
    courseHref,
    lessonTitle,
    sectionTitle: typeof v.sectionTitle === "string" && v.sectionTitle ? v.sectionTitle : null,
    mediaUrl: typeof v.mediaUrl === "string" && v.mediaUrl ? v.mediaUrl : null,
    savedAt: typeof v.savedAt === "number" && Number.isFinite(v.savedAt) ? v.savedAt : 0,
  };
}

/** Read the manifest. Never throws: corrupt or foreign JSON reads as empty, and reconciliation
 *  then re-surfaces every cached page as an orphan (visible + removable), which is honest. */
export function readManifest(): OfflineManifest {
  const ls = storage();
  if (!ls) return {};
  let parsed: unknown;
  try {
    const raw = ls.getItem(KEY);
    if (!raw) return {};
    parsed = JSON.parse(raw);
  } catch {
    return {};
  }
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
  const out: OfflineManifest = {};
  for (const [pagePath, value] of Object.entries(parsed as Record<string, unknown>)) {
    const entry = coerce(pagePath, value);
    if (entry) out[pagePath] = entry;
  }
  return out;
}

/** Persist the manifest. Returns false (rather than throwing) when storage is full or blocked —
 *  the lesson is still genuinely in the cache, it just shows up as an orphan on Downloads. */
export function writeManifest(manifest: OfflineManifest): boolean {
  const ls = storage();
  if (!ls) return false;
  try {
    ls.setItem(KEY, JSON.stringify(manifest));
    return true;
  } catch {
    return false;
  }
}

/** Record one saved lesson. Idempotent — re-saving a lesson just refreshes its `savedAt`. */
export function upsertEntry(entry: OfflineEntry): void {
  const manifest = readManifest();
  manifest[entry.pagePath] = entry;
  writeManifest(manifest);
}

/** Pure helper: the manifest minus `pagePaths`. Does not touch storage (callers persist). */
export function withoutPaths(manifest: OfflineManifest, pagePaths: Iterable<string>): OfflineManifest {
  const drop = new Set(pagePaths);
  const out: OfflineManifest = {};
  for (const [path, entry] of Object.entries(manifest)) {
    if (!drop.has(path)) out[path] = entry;
  }
  return out;
}

/**
 * Every media URL still referenced by a lesson in `manifest`. Two lessons CAN point at the same
 * file (a shared intro clip, a re-used recording), so removing one of them must not delete media
 * the other still needs — callers diff against this set before any `MEDIA_CACHE.delete()`.
 */
export function referencedMedia(manifest: OfflineManifest): Set<string> {
  const urls = new Set<string>();
  for (const entry of Object.values(manifest)) {
    if (entry.mediaUrl) urls.add(entry.mediaUrl);
  }
  return urls;
}

/** Wipe the manifest (paired with clearing the caches — see `removeAllOffline()`). */
export function clearManifest(): void {
  const ls = storage();
  if (!ls) return;
  try {
    ls.removeItem(KEY);
  } catch {
    /* blocked storage — nothing to clear anyway */
  }
}
