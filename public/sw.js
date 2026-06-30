// Conservative offline service worker. Goals: (1) never serve stale HTML while online —
// navigations are network-first; (2) only fall back to a generic offline page when the
// network is truly unreachable; (3) cache only immutable hashed assets. API + cross-origin
// are never touched. Service workers are per-origin, so each tenant domain gets its own
// cache — no cross-tenant leakage. Bump VERSION to roll out a new SW + purge old caches.
const VERSION = "v1";
const STATIC_CACHE = `witus-static-${VERSION}`;
const OFFLINE_URL = "/offline";

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(STATIC_CACHE).then((c) => c.add(OFFLINE_URL)).catch(() => {}));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== STATIC_CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

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
