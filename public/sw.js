// Conservative offline service worker. Goals: (1) never serve stale HTML while online —
// navigations are network-first; (2) fall back to a learner's own saved lesson pages when the
// network is unreachable, and only to the generic offline page when nothing was saved;
// (3) cache only immutable hashed assets. API + cross-origin are never touched. Service workers
// are per-origin, so each tenant domain gets its own cache — no cross-tenant leakage. Bump
// VERSION to roll out a new SW + purge old caches.
// v5: every browser drops the months-old /offline copy precached by v4, whose JS chunks may no
// longer exist. Saved pages, media and assets survive (activate keeps their caches).
const VERSION = "v5";
const STATIC_CACHE = `witus-static-${VERSION}`;
// Media + lesson pages the learner explicitly saved for offline. Independent of VERSION so a SW
// update never wipes a learner's downloads — both are preserved across activations. Keep these
// names in sync with src/lib/offline.ts (the client-side code that writes into them).
const MEDIA_CACHE = "witus-media-v1";
const PAGES_CACHE = "witus-pages-v1";
// The JS/CSS a saved page needs to RENDER offline. The `/_next/static/` handler below is
// cache-first but only fills on demand, so a page the learner opens for the FIRST time while
// offline has no route chunk and dies with a ChunkLoadError. src/lib/offline.ts therefore caches
// each saved page's assets here at save time. Version-independent + preserved across activations,
// exactly like PAGES/MEDIA — a deploy must never strip a learner's downloads of the code that
// renders them.
const ASSETS_CACHE = "witus-assets-v1";
const OFFLINE_URL = "/offline";
// The Downloads manager — the ONLY screen where a learner can see and delete what they've saved.
// It has to work with no network, so it's precached here alongside the offline fallback. Both are
// tenant-neutral, DB-free pages (outside the (tenant) route group) precisely so one cached copy is
// correct on every domain. src/lib/offline.ts ALSO re-caches /downloads into PAGES_CACHE on the
// learner's first save, so a failed install-time fetch here can't strand them.
const DOWNLOADS_URL = "/downloads";
// Synthetic key a saved page's RSC (React Server Component) payload is stored under — see
// src/lib/offline.ts. Not a real URL, so it can't collide with a real cached page.
const rscKey = (pathname) => `${pathname}?__rsc`;

// Pages that are never answered from a cache, whatever the caches hold: sign-in and account
// pages, the dashboard and the admin area. Only content pages work offline (ecosystem UI
// standard). /admin/future is the one exception: the owner saves it on purpose, and
// src/lib/offline.ts purges it on sign-out. /api/* is skipped before this is ever consulted.
const NEVER_FROM_CACHE = ["/login", "/verify", "/dashboard", "/admin"];
const CACHE_OK_EXCEPTIONS = ["/admin/future"];
const under = (pathname, prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`);
const neverFromCache = (pathname) =>
  !CACHE_OK_EXCEPTIONS.some((p) => under(pathname, p)) && NEVER_FROM_CACHE.some((p) => under(pathname, p));

const isHtml = (res) => Boolean(res) && (res.headers.get("content-type") || "").includes("text/html");

// The saved document for this path, HTML only. Matched on the exact path (query string dropped),
// never with ignoreSearch: that would also match the `?__rsc` entry savePage() writes beside the
// HTML, and the Cache API returns whichever was stored first, so a navigation could get the RSC
// payload as its document.
async function savedDocument(cacheName, url) {
  const cache = await caches.open(cacheName);
  const hit = await cache.match(url.origin + url.pathname, { ignoreVary: true });
  return isHtml(hit) ? hit : undefined;
}

// The /offline page. The copy src/lib/offline.ts saves into PAGES_CACHE (with its JS) wins over
// the install-time copy in the static cache. caches.match() searched every cache in creation
// order, so an old static copy whose chunks were gone could win and render as a bare "Retry".
// The last resort is inline HTML, so a navigation never ends on the browser's own error page.
async function offlinePage(url) {
  const fresh = (await savedDocument(PAGES_CACHE, new URL(OFFLINE_URL, url))) ||
    (await savedDocument(STATIC_CACHE, new URL(OFFLINE_URL, url)));
  if (fresh) return fresh;
  return new Response(
    '<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">' +
      "<title>Offline</title><h1>You're offline</h1>" +
      '<p><a href="/downloads">Your downloads</a></p><p><a href="">Retry</a></p>',
    { status: 200, headers: { "content-type": "text/html; charset=utf-8" } },
  );
}

// What a navigation gets when the network can't answer it.
async function offlineNavigation(url) {
  if (!neverFromCache(url.pathname)) {
    const saved = await savedDocument(PAGES_CACHE, url);
    if (saved) return saved;
    const shell = await savedDocument(STATIC_CACHE, url);
    if (shell) return shell;
  }
  return offlinePage(url);
}

self.addEventListener("install", (event) => {
  // Added independently (not addAll) so one failing fetch doesn't take the other down with it.
  event.waitUntil(
    caches.open(STATIC_CACHE).then((c) =>
      Promise.all([c.add(OFFLINE_URL).catch(() => {}), c.add(DOWNLOADS_URL).catch(() => {})]),
    ).catch(() => {}),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter(
              (k) => k !== STATIC_CACHE && k !== MEDIA_CACHE && k !== PAGES_CACHE && k !== ASSETS_CACHE,
            )
            .map((k) => caches.delete(k)),
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
    if (neverFromCache(url.pathname)) return;
    event.respondWith(
      fetch(request).catch(() => caches.open(PAGES_CACHE).then((c) => c.match(new Request(rscKey(url.pathname))))),
    );
    return;
  }

  // Page navigations → network-first (always fresh online). Offline, fall back in order:
  //   1. the learner's own saved copy of this exact page (query string ignored; HTML only);
  //   2. a precached app-shell page — today that's /downloads, so a learner with no signal can
  //      still reach the one screen that lists and deletes their downloads;
  //   3. the generic /offline page, freshest copy first.
  // Sign-in, dashboard and admin pages skip 1 and 2 (see NEVER_FROM_CACHE).
  if (request.mode === "navigate") {
    event.respondWith(fetch(request).catch(() => offlineNavigation(url)));
  }
});
