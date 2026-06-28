# Multi‑Tenancy & Branding

The spine of the new LMS, and the part to get **right the first time**. One codebase + one database serve many brands, each on its own domain, **strictly isolated** — a user on one brand's domain must never see another brand's content, branding, or existence. First tenant: **Better Vice Club**.

This doc carries forward the leak‑surface analysis from the white‑label investigation so the new build bakes isolation in from day one rather than retrofitting it.

---

## 1. Tenant model
- **`tenants`** — the registry (slug, name, theme, legal, flags, stripe, email, `requires_age_gate`). One row per brand.
- **`tenant_domains`** — `host → tenant_id` for runtime resolution.
- **`tenant_memberships`** — per‑tenant roles (`learner | instructor | brand_admin`). Platform owner is global.
- Every top‑level content table carries `tenant_id`; children inherit via parent (a few hot tables — `lessons`, `enrollments` — denormalize it for cheap guards). See `DATA_MODEL.md`.

## 2. Tenant resolution
- **Middleware** reads the request `Host`, looks up `tenant_domains`, attaches `tenant_id` (and the resolved `tenants` row) to the request context (header/AsyncLocalStorage). Cache the host→tenant map.
- **Recommended: runtime host→tenant** (one deployment, many domains). Adding a brand = insert a `tenants` row + a `tenant_domains` row + point DNS. No redeploy.
- **Alternative:** per‑tenant deployment with a build‑time `TENANT_SLUG` env (stronger physical isolation; more ops). The earlier white‑label note preferred build‑time for a *single* extra brand; for a **registry of N brands**, runtime resolution wins. Either way, **branding is server‑resolved; never trust a client‑supplied tenant.**
- Unknown host → a neutral 404/landing, never a default brand's content.

## 3. Mandatory tenant‑scoped data access
- Build a **data‑access layer** where every query takes `tenantId` and applies it. Forbid raw catalog queries in route handlers. This single chokepoint is what makes isolation auditable.
- **Optional defense‑in‑depth:** Postgres RLS via request GUCs — `SET app.tenant_id = $1; SET app.user_id = $2;` per request, policies `USING (tenant_id = current_setting('app.tenant_id')::uuid)`. (Do **not** port CentOS `auth.uid()` policies — that function doesn't exist under Better Auth.)
- **By‑id / by‑slug reads must 404 cross‑tenant** — fetch, then if `row.tenant_id !== current` return `notFound()` (exempt only owner/platform‑owner tooling). Never render, never redirect (redirect reveals existence).

## 4. Branding (server‑resolved, per tenant)
Each `tenants.theme`/assets supply: `name`, `shortName/wordmark`, `logo`, `favicon`, `manifest`, `ogDefault`, `themeColor`, accent tokens (CentOS uses Tailwind `sky`/`fuchsia`; tenants override). Apply at:
- **Chrome:** a brand‑aware academy header/footer (NOT the CentOS grouped module nav). Stripped to the tenant's surface.
- **Metadata:** `generateMetadata`/root metadata read the resolved tenant — `title` template (`%s · {brand}`), `openGraph.siteName`, `<meta theme-color>`, `<link rel=manifest>`, favicon.
- **JSON‑LD:** Organization/Course schemas use the tenant's name + domain (CentOS hardcodes `CentenarianOS`/`centenarianos.com` in `lib/seo/json-ld.ts` — make these tenant‑driven).
- **OG image routes** (`/api/og/*`): render the tenant's name, not a hardcoded brand (easy miss — they're image generators).
- **Auth pages (login/signup):** brand chrome; **remove** any cross‑app footer ("your account also works on …"); post‑signup redirect → the tenant's academy home, not a CentOS pricing page.

## 5. Per‑tenant legal & age‑gate
- **Legal:** `tenants.legal.{terms,privacy,safety}` → tenant‑specific pages; footers/signup link per tenant.
- **Age‑gate** (`requires_age_gate`, true for BVC — vice/drug content): a cookie‑backed gate (`{slug}_age_ok`, ~1yr, `sameSite=lax`, domain‑scoped) shown on first visit to the academy surface; mount in the academy layout, gated on the flag. Server‑readable so SSR can withhold content pre‑acknowledgment.
- **Content disclaimers / sourcing trust:** surface the sources/claims/verification (see pedagogy doc) as a visible trust signal — especially important for a vice brand.

## 6. Route‑surface gating
A tenant exposes only its surface; everything else redirects to the tenant home.
- **Allow (BVC):** `/` (catalog), `/explore` (map), `/{instructor}/{courseSlug}[...]`, `/my-courses[...]`, `/paths[...]`, `/instructors[...]`, `/verify/[token]`, `/help`, `/feedback`, `/bug`, `/offline`, `/terms|/privacy|/safety`, `/login|/signup|/auth/*`, `/api/*`.
- **Block/redirect:** any CentOS‑style dashboard/module/pricing/marketing route. Admin (`/admin`, `/platform`) is gated to `brand_admin`/`platform_owner` and typically operated from a primary/ops host.
- Drive the allowlist from `tenants.flags`/a `surface` config so brands can differ (one might enable a blog, another not).

## 7. ⚠️ The leak surface — every place that must be tenant‑scoped
Enumerated from the white‑label analysis. The rule: **catalog/discovery filters by tenant; by‑id/by‑slug 404s cross‑tenant; AI/semantic/SEO are scoped.**

**Highest risk (a single miss exposes another brand's *content*):**
1. **Catalog list** (`/api/courses`) — filter `tenant_id`. Miss = entire other library leaks.
2. **Course detail by id** (`/api/courses/[id]`) — 404 cross‑tenant. Direct‑UUID bypass.
3. **Slug resolution** (`/{username}/{courseSlug}` server resolver) — scope the lookup so a foreign slug → `notFound()`. Pretty URLs are crawlable.
4. **Enroll by id** (`/api/courses/[id]/enroll`) — 404 cross‑tenant before creating any Stripe session.
5. **Cross‑course CYOA** (`match_lessons_global`) — add `tenant_filter`; constrain `courses.tenant_id`. Else a lesson routes into another brand mid‑course.
6. **AI recommendations** — scope the candidate course list; it feeds **titles** to the LLM (leaks even if links would 404).

**Also scope (discovery surfaces / metadata):**
7. **Series grouping** (`/api/series`) — a shared `series_slug` across tenants would cross‑pollinate season switchers.
8. **Learning paths** list + `paths/recommend`.
9. **Teacher/instructor directory** + per‑instructor course list (an instructor on two brands shows only this brand's courses here).
10. **Categories** — per‑tenant (or derive visible categories from the tenant‑filtered course list).
11. **Search** — operates only over the tenant's courses.
12. **Sitemap** — emit only this tenant's URLs + this tenant's static routes. *(CentOS `app/sitemap.ts` also has a latent bug: it filters `status='published'` but the column is `is_published` — fix in the rebuild.)*
13. **OG / JSON‑LD** — tenant name + domain, never hardcoded.
14. **`is_featured` / "app tutorial" flags** — global booleans in CentOS; isolation relies on the catalog list already being tenant‑filtered. If any surface ever reads featured courses *without* the tenant filter, it leaks — keep a grep/lint note.

**Naturally safe (no extra work, document why):**
- **Lesson embeddings** are stored global but the **query** (`match_lessons_global`) is tenant‑scoped — don't denormalize `tenant_id` onto embeddings; scope at query time. (Do keep `lessons.tenant_id` for the join.)
- In‑course `match_lessons` is course‑scoped already.

## 8. Isolation test suite (write in Phase 2; gates every later phase)
Stand up **two tenants** (BVC + a dummy "Acme Academy") with their own courses, then assert from BVC's host:
- Catalog returns only BVC courses; search/category/featured/series only BVC.
- A known Acme course **UUID** → 404; Acme **slug** → 404; enroll POST to an Acme id → 404.
- Crossroads on a BVC lesson never returns an Acme lesson; AI recs/path recs mention only BVC.
- Instructor directory lists only BVC‑publishing instructors; an instructor on both shows only BVC courses on BVC's host.
- `sitemap.xml` contains only BVC URLs (and is non‑empty); OG/JSON‑LD say BVC.
- Visiting a blocked route (`/admin`, a CentOS‑style module) → redirect to BVC home.
- Certificate email `from` = BVC sender; verify page shows BVC branding.
- Repeat the mirror from Acme's host. **Any leak fails the build.**

## 9. Sessions & cookies
Better Auth cookies are **domain‑scoped** — a session on `bettervice.club` does not transfer to another brand's domain (different host = different cookie jar). A person may hold independent accounts/sessions per brand (same email allowed; the cookie won't cross). No cross‑domain SSO in v1 (and none desired — that would reveal the shared backend).

## 10. Deployment options (recap)
| Option | Isolation | Ops | Adding a brand |
|---|---|---|---|
| **Runtime host→tenant (recommended)** | Logical (data‑access layer + tests) | One project, many domains | DB rows + DNS |
| Per‑tenant deployment (build‑time slug) | Physical build separation | N projects, N env sets | New project + env + DNS |

Start with runtime resolution; a sensitive tenant can later be promoted to its own deployment (and eventually its own Stripe/Neon) without a rewrite, because the tenant boundary is already explicit everywhere.
