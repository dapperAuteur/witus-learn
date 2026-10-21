# Cloud brief: Learn.WitUS works offline as an app, not only saved lessons (2026-10-21)

Written for a Claude Code cloud session in this repo. `plans/` and `docs/` are gitignored here, so this
file is the whole spec. Line references are from `main` at the merge of PR #1 (worker `v5`); re-check them.

## What BAM asked for (2026-10-21, after testing the v5 fix on his phone)

> "offline still isn't working ... witus offline homepage should work and user should be able to navigate
> thru app and access offline courses with banner letting them know they're offline. all pages and
> sections that dont use db should work"

So, offline: the home page opens; the visitor can move around the app; saved courses and lessons open; a
banner says they are offline; anything that does not need fresh data works.

## Where v5 stops (PR #1, `cloud-briefs/offline-fix-2026-10-16.md`)

- `public/sw.js` navigations are network-first, and on failure fall back to the **saved** copy of that exact
  path, then to `/offline`. A page is in the cache only if the learner pressed "Save for offline" (lessons,
  and since v5 their course page). The home page, catalog, explore and help pages are never cached, so
  offline they all show `/offline`.
- Client-side navigation (Next `<Link>`, `?_rsc` requests) only works offline for saved pages.
- There is no app-wide offline indicator; `/offline` is the only offline UI.
- Most pages read the database: the `(tenant)` layout resolves the school from the database per request
  (about 100 of 108 `page.tsx` files import data code). "Pages that don't use the database" is therefore
  almost nothing; the real requirement is "pages work offline from their last good copy".

## Design (implement in this order, one commit each)

1. **Remember visited public pages (worker v6).** In `public/sw.js`, on a successful (200, `text/html`)
   navigation response for a public page, put a copy in a new `witus-visited-v1` cache keyed by exact URL
   (origin + path + search). Offline fallback order: saved page (`witus-pages-v1`) → visited copy → for `/`
   only, `/downloads` → `/offline`. Same for `?_rsc` responses of visited pages (keyed separately, never
   served to a navigation). Cap the visited cache (for example 150 entries, oldest evicted) and skip
   responses over about 1.5 MB. Bump `VERSION` to `"v6"`; `activate` must keep saved pages, media and
   assets as v5 does.
2. **Never store private or dynamic pages.** Exclude from the visited cache: `/api/*`, auth routes,
   `/login`, `/dashboard*`, `/admin*` (except the existing explicit `/admin/future` save), checkout and
   billing, and any response with `Cache-Control: private` or `no-store` or a `Set-Cookie` header. Extend
   `src/components/offline-privacy-guard.tsx` so its online purge also clears `witus-visited-v1` when the
   signed-in user changes or signs out (read its header comment first: its online-only condition is
   load-bearing).
3. **Precache the front door.** On worker install (and after sign-in, best-effort), fetch and store `/`,
   `/downloads`, `/offline` and the help index into the visited cache, so a first offline launch of the
   installed app opens the home page. Use the same exclusions.
4. **Offline banner on every page.** A client component in the root layout (`src/app/layout.tsx`): when
   `navigator.onLine` is false (and on `offline`/`online` events), show a slim bar: "You're offline. Pages
   you've opened and courses you saved still work." with a **Your downloads** link. `role="status"`,
   `aria-live="polite"`, visible focus, readable in light and dark, does not cover content (push it down).
   Pages served from the visited cache may be stale; the banner is the honest signal.
5. **Links keep working offline.** When offline, make in-app `<Link>` navigations fall back to a full page
   load if the RSC fetch fails (or intercept clicks while `navigator.onLine` is false), so the worker can
   serve the HTML copy. Do not break online navigation.
6. **Forms and data actions while offline.** Buttons that need the server (enroll, save notes, quiz
   submit, sign-in) show a short "Needs a connection" message instead of failing silently. Reuse the
   existing outbox (`src/lib/use-outbox.ts`) where it already queues writes.

## Tests

- `tests/offline-nav.test.ts` (runs the real `sw.js`): visited page served offline; private paths never
  cached; `Set-Cookie`/`no-store` responses skipped; `/` falls back to `/downloads` when not visited; cap
  evicts oldest; saved copy beats visited copy; a `?_rsc` entry is never served to a navigation.
- Privacy guard: user change clears the visited cache (unit test with the fake cache).
- `e2e/offline-app-shell.spec.ts` (not `@smoke` yet): online visit `/`, `/courses`, a course page and
  `/help`; `context.setOffline(true)`; each opens from cache with the banner visible; an unvisited page shows
  `/offline`; clicking a link to a visited page works offline. Keep the negative check that the test is
  really offline.

## Gates

`pnpm tsc --noEmit`, `pnpm lint`, `pnpm vitest run`. `next build` needs database and auth env; if the sandbox
lacks it, say so and let the Vercel preview be the build gate (previews build only for `bundle/*`).

## Branch rule

Work on `bundle/learn-offline-app-shell-2026-10-21` (this branch). Commit after each step, push, open a PR,
do not merge. Report what passed, what you could not run, and anything in this brief that was wrong.
