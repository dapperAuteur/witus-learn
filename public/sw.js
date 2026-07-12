// Conservative offline service worker. Goals: (1) never serve stale HTML while online —
// navigations are network-first; (2) fall back to a learner's own saved lesson pages when the
// network is unreachable, and only to the generic offline page when nothing was saved;
// (3) cache only immutable hashed assets. API + cross-origin are never touched. Service workers
// are per-origin, so each tenant domain gets its own cache — no cross-tenant leakage. Bump
// VERSION to roll out a new SW + purge old caches.
const VERSION = "v3";
const STATIC_CACHE = `witus-static-${VERSION}`;
// Media + lesson pages the learner explicitly saved for offline. Independent of VERSION so a SW
// update never wipes a learner's downloads — both are preserved across activations. Keep these
// names in sync with src/lib/offline.ts (the client-side code that writes into them).
const MEDIA_CACHE = "witus-media-v1";
const PAGES_CACHE = "witus-pages-v1";
const OFFLINE_URL = "/offline";
// Synthetic key a saved page's RSC (React Server Component) payload is stored under — see
// src/lib/offline.ts. Not a real URL, so it can't collide with a real cached page.
const rscKey = (pathname) => `${pathname}?__rsc`;

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(STATIC_CACHE).then((c) => c.add(OFFLINE_URL)).catch(() => {}));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((k) => k !== STATIC_CACHE && k !== MEDIA_CACHE && k !== PAGES_CACHE).map((k) => caches.delete(k)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  // "Saved for offline" lesson media (audio/video, often cross-origin Cloudinary): serve from
  // the media cache when present, else the network. Scoped to media requests so it adds no
  // overhead to navigation/asset fetches.
  if (request.destination === "video" || request.destination === "audio") {
    event.respondWith(caches.open(MEDIA_CACHE).then((c) => c.match(request)).then((hit) => hit || fetch(request)));
    return;
  }

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return; // never touch cross-origin
  if (url.pathname.startsWith("/api/")) return; // never cache API responses

  // Immutable, content-hashed build assets → cache-first (safe: the hash changes on deploy).
  if (url.pathname.startsWith("/_next/static/")) {
    event.respondWith(
      caches.match(request).then(
        (hit) =>
          hit ||
          fetch(request).then((res) => {
            const copy = res.clone();
            caches.open(STATIC_CACHE).then((c) => c.put(request, copy));
            return res;
          }),
      ),
    );
    return;
  }

  // Client-side RSC (React Server Component) fetches — what Next's router issues for a
  // <Link>/router.push navigation instead of a full document request. Network-first (always
  // fresh online); offline, serve the payload savePage() cached under this pathname's synthetic
  // key (see src/lib/offline.ts). If it's missing (never saved, or a stale/incompatible payload
  // from a previous deploy), let this fail — Next's router then falls back to a hard navigation,
  // which the navigate handler below serves from the page cache instead. NOTE: a cached RSC
  // payload can go stale across deploys (its shape is tied to the build); it's strictly an
  // offline-only fallback and is never served while the network is reachable.
  const isRscRequest = request.headers.get("RSC") === "1" || url.searchParams.has("_rsc");
  if (isRscRequest) {
    event.respondWith(
      fetch(request).catch(() => caches.open(PAGES_CACHE).then((c) => c.match(new Request(rscKey(url.pathname))))),
    );
    return;
  }

  // Page navigations → network-first (always fresh online). Offline, serve the learner's own
  // saved copy of this exact lesson page when they saved it (ignoreSearch: query strings don't
  // change lesson content); only fall back to the generic offline page when nothing was saved.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(() =>
        caches
          .open(PAGES_CACHE)
          .then((c) => c.match(request, { ignoreSearch: true }))
          .then((hit) => hit || caches.match(OFFLINE_URL)),
      ),
    );
  }
});
