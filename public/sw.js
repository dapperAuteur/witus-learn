// Conservative offline service worker. Goals: (1) never serve stale HTML while online —
// navigations are network-first; (2) only fall back to a generic offline page when the
// network is truly unreachable; (3) cache only immutable hashed assets. API + cross-origin
// are never touched. Service workers are per-origin, so each tenant domain gets its own
// cache — no cross-tenant leakage. Bump VERSION to roll out a new SW + purge old caches.
const VERSION = "v2";
const STATIC_CACHE = `witus-static-${VERSION}`;
// Media the learner explicitly saved for offline. Independent of VERSION so a SW update never
// wipes downloaded lessons — it's preserved across activations.
const MEDIA_CACHE = "witus-media-v1";
const OFFLINE_URL = "/offline";

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(STATIC_CACHE).then((c) => c.add(OFFLINE_URL)).catch(() => {}));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== STATIC_CACHE && k !== MEDIA_CACHE).map((k) => caches.delete(k))))
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

  // Page navigations → network-first (always fresh online), generic offline page if offline.
  if (request.mode === "navigate") {
    event.respondWith(fetch(request).catch(() => caches.match(OFFLINE_URL)));
  }
});
