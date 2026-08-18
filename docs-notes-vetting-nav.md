# Docs notes — vetting-queue nav (branch `feat/vetting-queue-nav`)

Handoff notes for the session that owns `README.md` and `src/lib/roadmap.ts`. This branch did **not**
touch either file. Drop these sentences in and delete this file.

## README

Under the operator/admin feature list:

> **Vetting queue.** The courses still awaiting review are one click away from either menu —
> **Courses to vet** in the site header's Teach dropdown and in the Admin sidebar, both landing on
> `/teach?status=unvetted` where the bulk *Mark vetted* / *Mark unvetted* buttons live. Platform
> owner only, matching the server-side gate on the vetting actions themselves.

## Roadmap (`src/lib/roadmap.ts`)

Shipped, one line:

> Vetting queue reachable from the menu — "Courses to vet" in the site header (Teach) and the Admin
> sidebar, owner-gated, both pointing at `/teach?status=unvetted`.

## What shipped

- `src/lib/admin-nav.ts` — new exported `VETTING_QUEUE` constant (`href` + `label`), and a new
  `ownerOnly` `ADMIN_NAV` entry built from it, placed second, right under Operator overview.
- `src/components/site-header.tsx` — same constant added to `teachItems`, gated on `session && owner`
  (narrower than the dropdown's own `canTeach`). Feeds the desktop dropdown and the mobile drawer
  from the one array, so both surfaces got it.
- `src/lib/help-articles.ts` — `vetting-and-coming-soon` now says where the queue is.
- `tests/admin-nav.test.ts` — new; owner-only filtering, the entry's shape, and that the header
  reaches it through the shared constant under an owner-only gate rather than a copied string.
