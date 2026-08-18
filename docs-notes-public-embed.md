# Docs notes: public paste-anywhere embed (feat/public-embed-widget)

Per the branch's scope, README.md and src/lib/roadmap.ts were deliberately NOT touched. When
merging, fold these sentences in (or hand them to the session that owns those files).

## For README.md (§ "Public read API" / embedding)

Add alongside the existing `/embed/course/[id]` paragraph:

> **Paste-anywhere course card (no key).** `/embed/card/[courseId]` is a public, unauthenticated,
> chromeless course card (title, description, price or Coming-soon state, click-through to the
> course page on the tenant's own domain) designed to be iframed by ANY third-party site, like a
> YouTube embed. Instructors get a copy-paste snippet at `/teach/[courseId]/embed` (linked
> "Embed" from the course manager). Published + public courses only; a vetting-locked course
> renders its public Coming-soon face (no price, no offer); anything else 404s, never redirects.
> No API key appears anywhere in the snippet — keys stay server-side on the `/api/v1` path.
> Framing headers are scoped in `next.config.ts`: `/embed/*` alone sends
> `Content-Security-Policy: frame-ancestors *`; every other route now sends
> `X-Frame-Options: SAMEORIGIN` + `frame-ancestors 'self'` (clickjacking hardening that this
> branch introduces — nothing outside `/embed/*` was ever meant to be framed by strangers).
> Click-throughs from the card are counted by the existing privacy-light `/api/link/click`
> counter (tagged `utm_source=embed-card` in the course's Link usage panel).

## For src/lib/roadmap.ts

A shipped line for the embedding/integrations theme:

> Public paste-anywhere embed: any site can iframe a tenant-branded course card
> (`/embed/card/[id]`), with a snippet builder on the course's teach page. Preview-only lead-gen
> per the backlog's recommendation; full-content embeds (auth, payment, per-tenant framing
> allowlist) remain future work.

## Decisions + deferrals made on this branch

- **Per-tenant domain allowlist for embedding: SKIPPED (needs a migration).** No existing column
  fits: enforcing `frame-ancestors <tenant list>` needs the tenant resolved at header time, and
  headers can only be set statically (`next.config.ts`) or in `src/proxy.ts`, which is
  deliberately DB-free. A future slice could store an allowlist in `tenants.flags` and set the
  CSP from a route handler or a DB-aware proxy; not attempted here.
- **Embed impression (page-load) tracking: SKIPPED (no fitting primitive).** `link_clicks` and
  `social_shares` both carry CHECK constraints on their kind/channel enums, so a new "embed
  impression" kind is a migration; repurposing an existing kind would pollute instructor
  dashboards. Click-throughs ARE tracked via the existing `/api/link/click` redirect.
- The card embed resolves the tenant from the request Host (the snippet's `src` is the tenant's
  own domain) and then requires the course row to belong to that tenant — same pattern as
  `/embed/course/[id]`; nothing tenant-ish is ever taken from the embedding page.
