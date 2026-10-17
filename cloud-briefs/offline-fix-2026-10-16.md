# Cloud brief: make saved courses usable offline (2026-10-16)

Written for a Claude Code cloud session working in this repo. Local notes under `plans/` and
`docs/` are gitignored here, so everything you need is in this file. Line numbers are from
`main` at `645d6ab0`; re-check them before editing.

## The bug (reported by BAM, the owner)

"When offline, Learn.WitUS saves courses offline but the UI says you're offline and Retry, not
allowing the user to use the app offline."

## Diagnosis (read-only review, key claims re-verified)

1. **The places learners start from are never saved.** "Save whole course" saves lesson pages only.
   It never saves the course page, `/` (the PWA `start_url`, `src/app/manifest.webmanifest/route.ts:24`),
   `/courses`, `/my-courses` or `/course/<id>`. Offline, each of those falls through to
   `public/sw.js:122` (`return caches.match(OFFLINE_URL)`), so the learner lands on `/offline`.
2. **`/offline` has no way forward without JavaScript.** Server-rendered, it is a heading, a
   paragraph and "Retry" with `href="/"` (`src/app/offline/page.tsx:25`). The saved-lessons list
   renders only after client JS reads the cache (`src/components/offline-saved-lessons.tsx`).
   Retry goes to `/`, which is never saved, so it loops.
3. **Likely: a stale `/offline` copy.** `sw.js` caches `/offline` and `/downloads` at install
   (line 36) into `witus-static-v4`. `VERSION` has been "v4" since July, so that copy is months
   old and points at July's JS chunks. `caches.match(OFFLINE_URL)` searches every cache in creation
   order, so the old copy usually wins over the fresh one `src/lib/offline.ts` writes into
   `witus-pages-v1`. If its chunks are gone, only "You're offline / Retry" shows.
4. **Latent: a saved lesson could be served as RSC data instead of HTML.** `sw.js:117` uses
   `pages.match(request, { ignoreSearch: true })`, so `/x` also matches the `/x?__rsc` entry that
   `savePage` writes (`src/lib/offline.ts:137-138`). The Cache API returns the first stored match.
   `tests/offline-admin-page.test.ts` uses a FakeCache that checks exact matches first, which hides this.
5. **Secondary: a 5xx is not treated as offline.** `fetch()` resolves on 500/503, so a saved copy is
   never used when the server or database is down. (Production was down on 2026-10-17 with a Neon
   quota error; saved lessons showed the error page.)

Ruled out: `/api/health` (no client code calls it; online state comes from `navigator.onLine`),
`src/proxy.ts` redirects, service-worker registration timing, version bumps wiping downloads
(`activate` keeps the media, pages and assets caches, `sw.js:50`).

## Fixes, in this order (one commit each)

1. **`public/sw.js`.**
   - On network failure, match the exact path first and never return a `?__rsc` entry to a
     navigation: try `pages.match(url.origin + url.pathname, { ignoreVary: true })`, check the
     response is `text/html`, then fall back.
   - Serve `/offline` from `witus-pages-v1` first, then the static cache, instead of `caches.match(OFFLINE_URL)`.
   - Bump `VERSION` to `"v5"` so every browser reinstalls the worker and drops the stale shell.
     Saved lessons survive (`activate` keeps the non-versioned caches).
2. **`src/app/offline/page.tsx`.** Add a server-rendered primary link `<a href="/downloads">Your downloads</a>`
   that works without JS. Make Retry reload the URL the learner asked for, not `/`. Put the saved
   lessons list above the fold.
3. **Save the course page with its lessons** (`src/lib/offline.ts`). `saveLesson`/`saveCourse` also
   `savePage(meta.courseHref)`, best-effort. `removeLessons` drops the course page when its last
   lesson goes. `listSavedPagePaths` and `reconcileOffline` must not list course pages as unnamed
   leftovers on `/downloads` (add `kind: "course"` to the manifest, and read old entries without a
   kind as lessons). Optionally, offline navigations to `/` serve `/downloads`.
4. **Optional, `public/sw.js`.** If a navigation gets status >= 500 and that exact path is saved,
   serve the saved copy; otherwise pass the error through.

Never cache or serve from cache: `/api/*`, auth routes, `/dashboard`, `/admin` (except
`/admin/future`, which is already saved on purpose). This is the ecosystem UI standard: only
content pages work offline.

## Tests

- `tests/offline-nav.test.ts` (runs the real `sw.js`): update `"witus-static-v4"`; add (a) stale
  `/offline` in static + fresh in pages → the fresh copy is served; (b) `?__rsc` saved before the
  HTML → a navigation gets `text/html`; (c) if fix 4 lands, 503 on a saved path → saved copy, 503 on
  an unsaved path → passes through, `/api` untouched.
- `tests/offline-admin-page.test.ts`: make `FakeCache.match` return entries in insertion order like
  the real Cache API, and assert the served document is HTML.
- `tests/offline-cache.test.ts`: `saveCourse` caches `courseHref`; the course page is neither a
  leftover nor a listed lesson; removing the last lesson removes it.
- `tests/offline-manifest.test.ts`: only if `kind: "course"` is added; old entries read as lessons.
- New `e2e/offline-saved-lesson.spec.ts` (not `@smoke` yet): open a free lesson as a signed-out
  visitor, wait for `navigator.serviceWorker.controller`, click "Save for offline", expect "Saved for
  offline", `context.setOffline(true)`. Negative check: `/courses` shows the offline page and the
  "Your downloads" link. Positive: the lesson URL returns `text/html` with the lesson `h1` and no
  offline heading; "Next →" works; after fix 3 the course URL renders; `/downloads` lists the lesson.
  If the preview has no open lesson for a signed-out visitor, `test.skip` with that reason.

## Gates

- `pnpm tsc --noEmit`, `pnpm lint`, `pnpm vitest run` (the offline tests need no database).
- `next build` needs `DATABASE_URL`, `BETTER_AUTH_SECRET`, `BETTER_AUTH_URL`; if the sandbox lacks
  them, say so and let the Vercel preview be the build gate. Previews build only for `bundle/*`.

## Branch rule

Work on `bundle/learn-offline-fix-2026-10-16` (this branch). Commit after each fix, push, open a PR,
do not merge. BAM merges. Do not touch `main`. Report what passed and what you could not run.
