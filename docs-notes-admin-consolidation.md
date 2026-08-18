# Docs notes — feat/admin-consolidation (branch 1 of the Admin/Operator workstream)

Sentences for README.md and src/lib/roadmap.ts, to be applied by the session that merges this
branch (this branch deliberately does not touch either file).

## README (features / admin section)

- The `/admin` landing is now a consolidated dashboard: headline tenant-scoped counts
  (learners, active enrollments, courses published with the unvetted remainder, completions,
  open problem reports, leads; owner also sees new curriculum feedback, media awaiting review,
  and upcoming live sessions), each linking to its surface, above the full tool grid.
- `/admin/settings` self-serve flags now also include **Learning paths** (`flags.paths`) and
  **Lead funnel** (`flags.leadFunnel`), alongside name/tagline/accent, gamification dose,
  AI tutor, age gate, coming soon, and Commodity Map.

## Roadmap (src/lib/roadmap.ts)

Update the 🟡 **Admin/Operator workstream** item: branch 1 (consolidated `/admin` dashboard +
self-serve tenant settings) is 🔧 in branch `feat/admin-consolidation`; remaining branches:

- **Branch 2 — marketing**: campaigns/promos consolidation under `/admin/marketing`
  (email campaigns beyond promo codes). OUT OF SCOPE for branch 1 on purpose.
- **Branch 3 (optional) — further settings**: owner-gated flags that stayed out of self-serve
  deliberately (`recruiting` gates the WitUS platform-marketing front doors and would reveal
  the shared backend on a white-label domain; `surface`, `aiProvider`, `ecosystemSso`,
  `firstParty` are deployment-identity flags), plus richer branding (logoUrl/favicon/OG image)
  if wanted.

## In-app help

Added `admin-home-and-brand-settings` to `src/lib/help-articles.ts` (category Operator),
covering the new at-a-glance tiles and the full settings list. No other docs changed.
