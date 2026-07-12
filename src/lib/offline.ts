"use client";

// Client-side "save for offline" helpers backing the offline lesson experience. These write
// directly into the Cache API caches the service worker (public/sw.js) reads from when the
// network is unreachable — PAGES_CACHE for lesson pages (HTML + RSC payload) and MEDIA_CACHE
// for audio/video. Keep the cache names in sync with public/sw.js.
export const PAGES_CACHE = "witus-pages-v1";
export const MEDIA_CACHE = "witus-media-v1";

// Synthetic cache key for a page's RSC (React Server Component) payload — the stream Next
// fetches for client-side <Link> navigation. It isn't a real URL a browser would request, so it
// can't collide with a real cached page.
function rscKey(pathname: string): string {
  return `${pathname}?__rsc`;
}

export type SavableLesson = { pagePath: string; mediaUrl?: string | null };

/** True when the Cache API is unavailable (SSR, unsupported browser, etc). Callers no-op then. */
function unsupported(): boolean {
  return typeof caches === "undefined";
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

/** Save a single lesson (page + its media, if any). */
export async function saveLesson({ pagePath, mediaUrl }: SavableLesson): Promise<void> {
  await savePage(pagePath);
  if (mediaUrl) await saveMedia(mediaUrl);
}

/** Remove a lesson's page (both HTML + RSC) and media from the offline caches. */
export async function removeLesson({ pagePath, mediaUrl }: SavableLesson): Promise<void> {
  if (unsupported()) return;
  const pages = await caches.open(PAGES_CACHE);
  await Promise.all([pages.delete(pagePath), pages.delete(new Request(rscKey(pagePath)))]);
  if (mediaUrl) {
    const media = await caches.open(MEDIA_CACHE);
    await media.delete(mediaUrl);
  }
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

export type SaveCourseProgress = { done: number; total: number };

/**
 * Save every lesson in a course (page + media). Reports progress after each lesson so the UI
 * can render "3/12 saved". Continues past individual lesson failures — a flaky asset shouldn't
 * abort the whole course; failures are collected and returned.
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
