// Conservative offline service worker. Goals: (1) never serve stale HTML while online —
// navigations are network-first; (2) fall back to a learner's own saved lesson pages when the
// network is unreachable, then to the last copy of a public page they opened, and only to the
// generic offline page when neither exists; (3) otherwise cache only immutable hashed assets.
// API + cross-origin are never touched. Service workers
// are per-origin, so each tenant domain gets its own cache — no cross-tenant leakage. Bump
// VERSION to roll out a new SW + purge old caches.
// v5: every browser drops the months-old /offline copy precached by v4, whose JS chunks may no
// longer exist. Saved pages, media and assets survive (activate keeps their caches).
// v6: public pages the visitor opens are remembered in VISITED_CACHE, so the app keeps working
// offline from the last good copy of every page they have seen, not only the ones they saved.
const VERSION = "v6";
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
// The last good copy of each public page the visitor opened (HTML and RSC payloads), written by
// this worker, never by the page. Version-independent like PAGES/MEDIA/ASSETS: a deploy must not
// throw away the copies that make the app usable offline. Bounded (see VISITED_MAX_*), and cleared
// when the signed-in user changes (src/components/offline-privacy-guard.tsx). Keep the name in
// sync with src/lib/offline.ts.
const VISITED_CACHE = "witus-visited-v1";
// About 150 pages, oldest dropped first, and nothing over 1.5 MB, so the cache stays a small,
// predictable share of the device's storage. HTML and RSC entries count alike.
const VISITED_MAX_ENTRIES = 150;
const VISITED_MAX_BYTES = 1.5 * 1024 * 1024;
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

// Pages that are never REMEMBERED on a visit: a wider net than NEVER_FROM_CACHE, because this
// cache fills on its own, with nobody pressing a button. Sign-in and invite routes (their URLs and
// pages carry tokens and codes), every signed-in area, and checkout or billing. /admin has no
// exception here: /admin/future works offline only through its explicit save, never by visiting.
// /api/* is skipped before this is ever consulted.
const NEVER_REMEMBER = [
  ...NEVER_FROM_CACHE,
  "/kids",
  "/join",
  "/teach",
  "/audit",
  "/cohorts",
  "/family",
  "/field-log",
  "/my-courses",
  "/checkout",
  "/billing",
];
// Query parameters that mark a URL as one-time or personal (a sign-in token, a Stripe session).
const SENSITIVE_PARAMS = ["token", "session_id", "code"];

const isHtml = (res) => Boolean(res) && (res.headers.get("content-type") || "").includes("text/html");
const isRscPayload = (res) => Boolean(res) && (res.headers.get("content-type") || "").includes("text/x-component");

// Whether this page may be remembered in VISITED_CACHE at all, and so served from it.
const rememberable = (url) =>
  !NEVER_REMEMBER.some((p) => under(url.pathname, p)) && !SENSITIVE_PARAMS.some((k) => url.searchParams.has(k));

// The Cache-Control Next.js puts on EVERY dynamically rendered page, public or not. Nearly every
// page here is dynamic (the tenant layout reads the request host), so treating this value as
// "private" would remember nothing at all. Any OTHER value carrying `private` or `no-store` is a
// deliberate opt-out by the route, and is honored.
const NEXT_DYNAMIC_DEFAULT = ["max-age=0", "must-revalidate", "no-cache", "no-store", "private"].join(",");
const optsOutOfCaching = (res) => {
  const cc = (res.headers.get("cache-control") || "").toLowerCase();
  const directives = cc.split(",").map((d) => d.trim()).filter(Boolean).sort();
  if (directives.join(",") === NEXT_DYNAMIC_DEFAULT) return false;
  return directives.includes("private") || directives.includes("no-store");
};

// Whether this RESPONSE may be remembered: a plain 200 for the URL that was asked for, which sets
// no cookie and does not opt out. A redirect is refused because its body belongs to a different
// page (often /login) than the key it would be stored under. (A browser hides Set-Cookie from a
// worker's fetch, so that check only bites where the header is visible; the path list is the
// real guard for sign-in pages.)
const storableResponse = (res) =>
  res.status === 200 &&
  !res.redirected &&
  (res.type === "basic" || res.type === "default") &&
  !res.headers.has("set-cookie") &&
  !optsOutOfCaching(res);

// What may be stored as a page, decided in ONE place so no write path can skip it. A document is
// a plain 200 HTML response; a router (RSC) payload is a plain 200 text/x-component response, and
// it is kept only under its own `_rsc` URL, so it can never sit at a page's address and be found
// where a document is expected. Error pages, redirects and any other body are refused.
const hasRscKey = (key) => new URL(typeof key === "string" ? key : key.url, self.location.origin).searchParams.has("_rsc");
const storableDocument = (res) => Boolean(res) && storableResponse(res) && isHtml(res);
const storablePayload = (res) => Boolean(res) && storableResponse(res) && isRscPayload(res);
const storableUnder = (key, res) => (hasRscKey(key) ? storablePayload(res) : storableDocument(res));

/** Store a document in a shell cache (install-time /offline and /downloads), under the same rule. */
async function putDocument(cacheName, path) {
  const res = await fetch(path, { credentials: "same-origin" });
  if (!storableDocument(res)) return;
  await (await caches.open(cacheName)).put(path, res);
}

// Sign-out must not leave behind a page that was still being saved when it started. Every write
// into VISITED_CACHE goes through remember(), which notes the generation it began in; sign-out
// (settleOfflineSaves in src/lib/offline.ts) posts SETTLE_SAVES before it purges, which bumps the
// generation, aborts in-flight fetches and waits for running saves to finish. A save from an
// older generation then drops its copy instead of writing it, and one that already wrote deletes
// it again, so nothing begun before sign-out survives the purge that follows it.
const SETTLE_SAVES = "witus:settle-saves";
let saveGeneration = 0;
const savesInFlight = new Set();

/** Run a background save so SETTLE_SAVES can abort it (through `signal`) and wait for it. */
function trackSave(run) {
  const entry = { controller: new AbortController(), done: undefined };
  entry.done = Promise.resolve()
    .then(() => run(entry.controller.signal))
    .finally(() => savesInFlight.delete(entry));
  savesInFlight.add(entry);
  return entry.done;
}

async function settleSaves() {
  saveGeneration++;
  const pending = [...savesInFlight];
  for (const save of pending) save.controller.abort();
  await Promise.allSettled(pending.map((save) => save.done));
}

/** Aborts on whichever fires first: the save's own controller or its timeout. */
function saveSignal(signal, timeoutMs) {
  if (typeof AbortSignal.timeout !== "function") return signal;
  const timeout = AbortSignal.timeout(timeoutMs);
  return typeof AbortSignal.any === "function" ? AbortSignal.any([signal, timeout]) : signal;
}

/**
 * Remember a public page's response as its last good copy. Best-effort and off the critical path:
 * the visitor already has `res`; this works on a clone. The body is read to measure it (streamed
 * HTML usually has no Content-Length), and anything over VISITED_MAX_BYTES is skipped.
 *
 * Re-putting a key deletes it first, so the Cache API's insertion order is "least recently visited
 * first" and the eviction below drops the page opened longest ago.
 */
function remember(key, res, generation = saveGeneration) {
  return trackSave(async () => {
    if (!storableUnder(key, res)) return;
    try {
      const body = await res.arrayBuffer();
      if (body.byteLength > VISITED_MAX_BYTES) return;
      if (generation !== saveGeneration) return; // sign-out started while this was in flight
      const cache = await caches.open(VISITED_CACHE);
      await cache.delete(key);
      await cache.put(key, new Response(body, { status: res.status, statusText: res.statusText, headers: res.headers }));
      if (generation !== saveGeneration) {
        await cache.delete(key);
        return;
      }
      const keys = await cache.keys();
      const excess = keys.length - VISITED_MAX_ENTRIES;
      for (let i = 0; i < excess; i++) await cache.delete(keys[i]);
    } catch {
      /* quota or a torn stream: the copy is a convenience, never worth an error */
    }
  });
}

// A tap on an in-app link is an RSC fetch, never a document load, so on its own it leaves no page
// to open offline: only full loads were remembered, and most browsing is taps. After such a fetch
// succeeds, fetch the same URL as a document and remember it, with its assets, as a full load
// would have. Skipped while the remembered copy is younger than DOCUMENT_REFRESH_MS, so going back
// and forth between pages costs one extra render per page, not one per tap.
const DOCUMENT_REFRESH_MS = 10 * 60 * 1000;

async function rememberDocument(rscUrl) {
  const url = new URL(rscUrl.href);
  url.searchParams.delete("_rsc");
  if (!rememberable(url)) return;
  const key = url.origin + url.pathname + url.search;
  const generation = saveGeneration;
  await trackSave(async (signal) => {
    try {
      const cache = await caches.open(VISITED_CACHE);
      const prior = await cache.match(key, { ignoreVary: true });
      const age = prior ? Date.now() - Date.parse(prior.headers.get("date") || "") : Infinity;
      if (isHtml(prior) && age < DOCUMENT_REFRESH_MS) return;
      const res = await fetch(key, { credentials: "same-origin", signal: saveSignal(signal, PRECACHE_TIMEOUT_MS) });
      if (!storableDocument(res)) return;
      const html = await res.clone().text();
      await remember(key, res, generation);
      if (generation === saveGeneration) await cachePageAssets(html);
    } catch {
      /* offline, slow or cancelled by sign-out: the page already rendered from the RSC payload */
    }
  });
}

// The visited copy of this exact URL (path AND query: `/courses?category=art` is its own page).
// HTML only, so an RSC payload can never come back as a document.
async function visitedDocument(url) {
  if (!rememberable(url)) return undefined;
  const cache = await caches.open(VISITED_CACHE);
  const hit = await cache.match(url.origin + url.pathname + url.search, { ignoreVary: true });
  return isHtml(hit) ? hit : undefined;
}

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

// The RSC payload remembered for this exact request, payloads only: a document stored under a
// matching URL is never handed to the router as if it were one.
async function visitedPayload(request) {
  const cache = await caches.open(VISITED_CACHE);
  const hit = await cache.match(request);
  return isRscPayload(hit) ? hit : undefined;
}

// What a navigation gets when the network can't answer it: the learner's saved copy, then the
// last copy this worker remembered on a visit, then the install-time shell.
async function offlineNavigation(url) {
  if (!neverFromCache(url.pathname)) {
    const saved = await savedDocument(PAGES_CACHE, url);
    if (saved) return saved;
    const visited = await visitedDocument(url);
    if (visited) return visited;
    const shell = await savedDocument(STATIC_CACHE, url);
    if (shell) return shell;
  }
  // The installed app opens at "/" (the manifest's start_url), which is never saved. Offline,
  // the learner's downloads are a better first screen than the generic offline page.
  if (url.pathname === "/") {
    const downloads = new URL(DOWNLOADS_URL, url);
    const hit = (await savedDocument(PAGES_CACHE, downloads)) || (await savedDocument(STATIC_CACHE, downloads));
    if (hit) return hit;
  }
  return offlinePage(url);
}

// The front door: what an installed app needs to open on its FIRST offline launch, before the
// visitor has browsed anything. "/" is the manifest's start_url. Stored in VISITED_CACHE, so it
// passes the same exclusions as a visit and is cleared with it when the user changes.
const FRONT_DOOR = ["/", DOWNLOADS_URL, OFFLINE_URL, "/help"];
// A front-door fetch that hangs must not hold the worker's install open indefinitely.
const PRECACHE_TIMEOUT_MS = 15000;

// Every /_next/static/… URL an HTML page mentions (same pattern as src/lib/offline.ts). A page
// fetched here was never rendered, so its JS/CSS was never requested; without them it would be
// served offline and then die with a ChunkLoadError. A "(group)" segment is part of the path
// (route groups: `chunks/app/(tenant)/page-….js`); any other parenthesis ends it, as in CSS
// `url(…)`. Stopping at every "(" cut those chunks to `chunks/app/`, and in Chromium that
// redirecting, never-finishing add held the install open, so the worker never activated.
const NEXT_ASSET_RE = /\/_next\/static\/(?:[^"'()\s\\]|\([^"'()\s\\/]*\))+/g;

async function cachePageAssets(html) {
  const urls = new Set(html.match(NEXT_ASSET_RE) || []);
  if (urls.size === 0) return;
  const cache = await caches.open(STATIC_CACHE);
  await Promise.all(
    [...urls].map(async (u) => {
      try {
        if (await caches.match(u)) return; // content-hashed: one copy anywhere is enough
        await cache.add(u);
      } catch {
        /* one missing chunk must not cost the page */
      }
    }),
  );
}

// Fetch and remember the front-door pages, with their assets. Best-effort per page. Runs at
// install, and again when a page asks (a sign-in or sign-out just emptied VISITED_CACHE).
async function precacheFrontDoor() {
  await Promise.all(
    FRONT_DOOR.map(async (path) => {
      const url = new URL(path, self.location.origin);
      if (!rememberable(url)) return;
      try {
        const signal = typeof AbortSignal.timeout === "function" ? AbortSignal.timeout(PRECACHE_TIMEOUT_MS) : undefined;
        const res = await fetch(url.href, { credentials: "same-origin", signal });
        if (!storableDocument(res)) return;
        const html = await res.clone().text();
        await remember(url.href, res);
        await cachePageAssets(html);
      } catch {
        /* offline or slow at install: the visitor's own browsing fills it later */
      }
    }),
  );
}

self.addEventListener("install", (event) => {
  // Added independently (not addAll) so one failing fetch doesn't take the other down with it.
  event.waitUntil(
    Promise.all([
      // Fetched and checked, not cache.add(): add() would keep a redirect to /login or a 2xx
      // that is not a page.
      putDocument(STATIC_CACHE, OFFLINE_URL).catch(() => {}),
      putDocument(STATIC_CACHE, DOWNLOADS_URL).catch(() => {}),
      precacheFrontDoor(),
    ]),
  );
  self.skipWaiting();
});

// A page asks for the front door to be fetched again: src/lib/offline.ts sends this right after
// OfflinePrivacyGuard empties VISITED_CACHE for a new signed-in user (or for signing out).
const WARM_FRONT_DOOR = "witus:warm-front-door";
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === WARM_FRONT_DOOR) event.waitUntil(precacheFrontDoor());
  // Sign-out: cancel and wait for every background save, then answer on the port the page sent,
  // so the page purges only once nothing from before sign-out can still land.
  if (event.data && event.data.type === SETTLE_SAVES) {
    event.waitUntil(settleSaves().then(() => event.ports?.[0]?.postMessage({ type: SETTLE_SAVES })));
  }
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter(
              (k) =>
                k !== STATIC_CACHE &&
                k !== MEDIA_CACHE &&
                k !== PAGES_CACHE &&
                k !== ASSETS_CACHE &&
                k !== VISITED_CACHE,
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
            // Only a real asset: a 404 or 500 cached here would be served cache-first forever.
            if (res.status === 200 && !res.redirected) {
              const copy = res.clone();
              caches.open(STATIC_CACHE).then((c) => c.put(request, copy));
            }
            return res;
          }),
      ),
    );
    return;
  }

  // Client-side RSC (React Server Component) fetches — what Next's router issues for a
  // <Link>/router.push navigation instead of a full document request. Network-first (always
  // fresh online); offline, serve the payload savePage() cached under this pathname's synthetic
  // key (see src/lib/offline.ts), then the payload remembered on a visit. If neither exists, let
  // this fail — Next's router then falls back to a hard navigation, which the navigate handler
  // below serves from the page caches instead. NOTE: a cached RSC payload can go stale across
  // deploys (its shape is tied to the build); it's strictly an offline-only fallback and is never
  // served while the network is reachable.
  //
  // Visited payloads are stored under the REAL request: its URL keeps the `_rsc` value and the
  // response's `Vary` (rsc, next-router-state-tree, next-router-prefetch, …) stays in force on
  // match. Next derives `_rsc` from those same router headers, so a payload is only ever replayed
  // for the identical navigation it answered, never patched onto a different router state.
  // Prefetches are not remembered: they are partial segments, and there are many per page.
  // A document navigation is never an RSC fetch, even when its URL carries `_rsc` (a pasted or
  // bookmarked payload URL): routing it here could hand the browser a payload as the page.
  const isRscRequest =
    request.mode !== "navigate" && (request.headers.get("RSC") === "1" || url.searchParams.has("_rsc"));
  if (isRscRequest) {
    if (neverFromCache(url.pathname)) return;
    const isPrefetch =
      request.headers.has("Next-Router-Prefetch") || request.headers.has("Next-Router-Segment-Prefetch");
    event.respondWith(
      fetch(request).then(
        (res) => {
          if (!isPrefetch && rememberable(url) && hasRscKey(request) && storablePayload(res)) {
            event.waitUntil(Promise.all([remember(request, res.clone()), rememberDocument(url)]));
          }
          return res;
        },
        async () =>
          (await caches.open(PAGES_CACHE).then((c) => c.match(new Request(rscKey(url.pathname))))) ||
          (isPrefetch ? undefined : await visitedPayload(request)),
      ),
    );
    return;
  }

  // Page navigations → network-first (always fresh online). A healthy public page is remembered
  // in VISITED_CACHE on the way through. Offline, fall back in order:
  //   1. the learner's own saved copy of this exact page (query string ignored; HTML only);
  //   2. the copy remembered the last time this exact URL was opened (HTML only);
  //   3. a precached app-shell page — today that's /downloads, so a learner with no signal can
  //      still reach the one screen that lists and deletes their downloads;
  //   4. for "/" only, /downloads; then the generic /offline page, freshest copy first.
  // Sign-in, dashboard and admin pages skip 1 to 3 (see NEVER_FROM_CACHE).
  //
  // A 5xx is not a network failure (fetch resolves), but to a learner it is the same thing: the
  // server or its database is down. If this exact page is saved, the saved copy beats an error
  // page; anything not saved gets the real error, never a different page standing in for it.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).then(
        async (res) => {
          if (rememberable(url) && storableDocument(res)) {
            event.waitUntil(remember(url.origin + url.pathname + url.search, res.clone()));
          }
          if (res.status < 500 || neverFromCache(url.pathname)) return res;
          return (await savedDocument(PAGES_CACHE, url)) || res;
        },
        () => offlineNavigation(url),
      ),
    );
  }
});
