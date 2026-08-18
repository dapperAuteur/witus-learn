# Learn.WitUS.Online

A standalone, **multi-tenant** Learning Management System for the WitUS ecosystem, cited,
media-rich courses hosted under multiple independent brands, each on its own domain, each
**strictly isolated** so a learner never perceives the others.

The launch tenant is **Better Vice Club (BVC)**: a cited, audio-first vice/drug-education
curriculum (21 commodity "episodes" across 3 seasons, coffee → khat) whose signature discovery
surface is the **Commodity Map**, an interactive world map, not a generic catalog.

## Status

Live and in active development. For a plain-language view of what's shipped and what's coming, see
the **public roadmap at `/roadmap`** ([src/lib/public-roadmap.ts](src/lib/public-roadmap.ts)); the
owner-only in-app roadmap at `/admin/roadmap` ([src/lib/roadmap.ts](src/lib/roadmap.ts)) carries the
full per-branch engineering detail. See [docs/BUILD_PLAN.md](docs/BUILD_PLAN.md) for the phased plan
and [docs/spec/dedicated-lms/](docs/spec/dedicated-lms/) for the complete product specification (PRD,
data model, API surface, content/pedagogy, auth/billing, multitenancy, migration).

Recent: publish-time RAG auto-indexing (+ staleness badge), the assessment guardrail (`pnpm
check:reveals` and `pnpm check:assessment-fit` lints + the "Audit reveals" and "Audit assessment fit"
instructor tools, deterministic gate and advisory AI split), admin bulk-resolve for problem reports,
and Sentry error monitoring (wired, inert until a DSN is set; every event passes through the
`beforeSend` scrubber in [src/lib/sentry-scrub.ts](src/lib/sentry-scrub.ts), which strips identity,
cookies, auth headers, token-bearing URLs, `request.query_string` in all three shapes Sentry sends it
in, and any credential-named key in `extra` / `tags` / `contexts` / breadcrumbs, and degrades the
event to identifiers if the scrub itself throws). This public **`/roadmap`** page is new.

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind v4 · Neon Postgres (+ pgvector) · Drizzle ORM ·
Better Auth (magic-link) · Stripe · Mailgun · Gemini (embeddings + recommendations) · Cloudinary.

## Multi-tenancy (the hard requirement)

- Tenants are resolved at runtime from the request **host** (`tenant_domains` → `tenants`); one
  deployment serves many domains. Adding a brand is a DB row + DNS, not a redeploy.
- Every content query flows through a mandatory **tenant-scoped data-access layer**
  ([src/db/scoped.ts](src/db/scoped.ts)); by-id / by-slug reads **404 across tenants** (never
  redirect). CYOA, embeddings, AI recommendations, search, sitemap, and OG/JSON-LD are all
  tenant-scoped. An **isolation test suite** (Phase 2) gates every later phase.
- Branding, legal pages, age-gate, Stripe descriptor, and email sender are all driven by the
  `tenants` row, never hardcoded, never client-supplied.

## Public read API (`/api/v1`)

A read-only, per-tenant, **API-key**-scoped surface so an external app's backend (starting with
WanderLearn) can render real Learn.WitUS lesson content, `GET /api/v1/courses` (paginated,
`?limit=&offset=`), `GET /api/v1/courses/[id]`, and `GET /api/v1/courses/[id]/lessons/[lessonId]`
(full lesson body/media). The tenant comes **only** from `Authorization: Bearer <key>`, never the
host, never client input, and every response is **published + `visibility:"public"` only**. The two
reads that return LESSONS additionally require the course to be **vetted** (`courses.vetted_at IS NOT
NULL`), so an unvetted "Coming soon" course is listed by `GET /api/v1/courses` but its lessons 404;
see [src/lib/vetting.ts](src/lib/vetting.ts). Mint
keys at `/admin/api-keys` (owner/brand-admin). Every response includes a top-level `disclaimer`
field the consumer must display; see [src/lib/disclaimer.ts](src/lib/disclaimer.ts) and the
consumer's guide, `plans/wanderlearn-embed-integration.md`. A chromeless
`/embed/course/[id]` iframe view is also available for embedding without calling the API directly.

**Paste-anywhere course card (no key).** `/embed/card/[courseId]` is a public, unauthenticated,
chromeless course card (title, description, price or Coming-soon state, click-through to the
course page on the tenant's own domain) designed to be iframed by ANY third-party site.
Instructors get a copy-paste snippet at `/teach/[courseId]/embed` (linked "Embed" from the course
manager). Published + public courses only; a vetting-locked course renders its public Coming-soon
face (no price, no offer); anything else 404s, never redirects. No API key appears anywhere in
the snippet — keys stay server-side on the `/api/v1` path. Framing headers are scoped in
`next.config.ts`: `/embed/*` alone sends `Content-Security-Policy: frame-ancestors *`; every
other route now sends `X-Frame-Options: SAMEORIGIN` + `frame-ancestors 'self'` (clickjacking
hardening — nothing outside `/embed/*` was ever meant to be framed by strangers). Click-throughs
are counted by the existing `/api/link/click` counter (`utm_source=embed-card`).

## Health check (`/api/health`)

**Point the uptime monitor here, not at the homepage.** A monitor on `/` can return 200 from a CDN
cache while Neon is down, so the site looks up while nobody can log in or load a lesson.
`GET /api/health` runs the cheapest possible liveness query (`select 1`) against the database on
every request and answers:

| Result | Status | Body |
| --- | --- | --- |
| Database answered | `200` | `{"ok":true,"checks":{"db":"ok"}}` |
| Database refused / errored | `503` | `{"ok":false,"error":"database_unreachable","checks":{"db":"fail"}}` |
| Database hung past 4s | `503` | `{"ok":false,"error":"database_timeout","checks":{"db":"fail"}}` |

Public and unauthenticated (a monitor cannot log in), so the payload is deliberately minimal: no
version, no env values, no counts, no tenant names, no user data. **The caught error never reaches
the response**, only one of the two fixed reason tokens above, because a Neon connection failure
routinely carries `DATABASE_URL` (password included) in its message. The failure is logged
server-side through Sentry instead. Responses are `Cache-Control: no-store` and the route is
`force-dynamic`.

It is **tenant-agnostic on purpose**: it never calls the tenant resolver, so an unknown host, a raw
`*.vercel.app` deployment URL, or a domain mid-DNS-cutover cannot make a healthy app read as down.
It answers "app + database alive", never "this brand exists". Covered by
[tests/health-route.test.ts](tests/health-route.test.ts).

## Observability & E2E

Error tracking (Sentry SDK, inert until `SENTRY_DSN` is set, every event through the
`beforeSend` scrubber) is described under [Status](#status) above and in the
[Health check](#health-check-apihealth) section. The rest of the observability story:

### Distributed tracing

Traces go to **Honeycomb** over OTLP via `@vercel/otel` ([otel.config.ts](otel.config.ts), loaded
from `src/instrumentation.ts` **before** the Sentry configs — whoever registers the global tracer
provider first wins, and Sentry is told to stand down via `skipOpenTelemetrySetup` in
[sentry.server.config.ts](sentry.server.config.ts)). Service name is **`learn-witus`** — one
`service.name` for the whole deployment on purpose: tenant brand domains all serve this same app,
and spans carry the request host for per-tenant splitting.

- **Inert until the key is set**: `HONEYCOMB_INGEST_API_KEY_SECRET` (fallback `HONEYCOMB_API_KEY`).
  With neither var set, registration is skipped entirely — same inert-until-provisioned pattern as
  the Sentry DSN.
- **`/api/health` spans are dropped at the sampler** (`DropHealthChecksSampler`) — uptime monitors
  probe it around the clock, and those requests must not spend Honeycomb's free-tier event budget.
  Everything else is recorded unsampled.

### E2E + accessibility CI

Playwright specs live in `e2e/`; the gate runs in
[.github/workflows/e2e.yml](.github/workflows/e2e.yml) on `deployment_status` — it tests the **real
Vercel deployment URL** (preview → full suite, production → `@smoke` only, desktop project), so CI
needs no secrets, database, or env. There is deliberately no `webServer` block in
[playwright.config.ts](playwright.config.ts): this repo's dev server needs real env that CI and
fresh clones don't have. The suite runs desktop plus a 360px mobile project (the ecosystem charter
is mobile-first), and covered pages must pass an axe check with **zero serious or critical
violations** — minor/moderate findings are reported but don't gate. The gate is strict on purpose;
fix the page, not the gate.

- Local runs: `PLAYWRIGHT_BASE_URL=<url> pnpm exec playwright test` (local runs drive installed
  Chrome via `channel: "chrome"` — Playwright's bundled chromium doesn't support macOS 13; CI uses
  the bundled browser).
- If the Vercel project enables Deployment Protection, set the project's "Protection Bypass for
  Automation" secret as the `VERCEL_AUTOMATION_BYPASS_SECRET` Actions secret; public previews need
  nothing.

### Synthetic traffic tag

Every request Playwright makes — the CI gate and the tutorial recordings alike — carries
`x-witus-origin-test: playwright-synthetic` (an `extraHTTPHeaders` entry in both Playwright
configs). The OTel layer surfaces it as the **`witus.origin_test`** span attribute
(`attributesFromHeaders` in [otel.config.ts](otel.config.ts)), so Honeycomb queries can include or
exclude synthetic traffic. Absent header = attribute absent = real user; queries about real users
exclude the attribute.

### Tutorial pipeline (tutorial-as-test)

Every user-facing tutorial is a **runnable Playwright spec** in `e2e/tutorials/*.tutorial.ts`,
driven by the helper in [e2e/tutorials/tutorial.ts](e2e/tutorials/tutorial.ts) — so a tutorial that
no longer matches the app **fails**, instead of quietly rotting as prose:

```bash
pnpm tutorial:record   # run the specs via playwright.tutorial.config.ts → video + step marks
pnpm tutorial:docs     # generate per-step markdown walkthroughs into docs/tutorials/
pnpm tutorial:video    # compose the narrated video from recordings + BAM's narration audio
```

Auth-gated tutorials **skip** (never fail) unless `TUTORIAL_STORAGE_STATE` points at a signed-in
Playwright storage state. Recordings, step marks, narration audio, storage states, and composed
video are all gitignored (`tutorial-output/`, `audio/`, `.auth/`, `docs/tutorials/video/`) — and
note that in this repo the generated walkthroughs under `docs/tutorials/` are **local-only too**,
because `/docs/` as a whole is gitignored here. The per-step narration master lives in the witus
repo at `plans/31-tutorial-narration-scripts.md`.

## Signed-out visitors: redirect, don't dead-end

Two guards in [src/lib/session.ts](src/lib/session.ts), and picking the wrong one is a visible bug:

| Guard | Signed-out result | Use it in |
| --- | --- | --- |
| `requireUserPage()` | `307` to `/login?next=<the page they wanted>` | **page components** |
| `requireUser()` | `403` via `forbidden()` | **API routes**, and the role guards built on it |

The split exists because the two callers need opposite things. A person needs a way forward, so a
page sends them to sign in and brings them back afterwards. An API caller needs a status it can
branch on: redirecting `/api/admin/*` would hand the admin UI's `fetch` an HTML sign-in page to
parse as JSON. **A missing session is "not signed in yet" (redirect); a session without the right
role is "not allowed" (403).** Role guards (`requireBrandAdmin` and friends) therefore keep using
`forbidden()` for the role failure itself.

`requireUserPage()` learns the current path from the `x-pathname` request header, which
[src/proxy.ts](src/proxy.ts) stamps on every matched request (request-side only, never sent to the
browser, and without the query string so no token in a URL rides along into a redirect). The
`?next=` value is validated by `safeNextPath()` in [src/lib/next-path.ts](src/lib/next-path.ts)
before anything redirects to it or hands it to the magic link as a `callbackURL`: absolute,
protocol-relative, backslash and control-character values all degrade to `/`, so the sign-in page
can never be turned into an open redirect for phishing.

`forbidden()` renders [src/app/forbidden.tsx](src/app/forbidden.tsx), a branded 403 that offers a
**Sign in** button when the visitor has no session and a way back to the home page when they do. It
never names the resource, the tenant, or the required role. Without that file Next renders its own
unstyled fallback, which is what produced the bare `NEXT_HTTP_ERROR_FALLBACK;403` page.

Covered by [tests/signed-out-redirect.test.ts](tests/signed-out-redirect.test.ts), which also fails
the build if any `(tenant)` page reaches for the API-shaped guard again.

## Vetting and "Coming soon" (`courses.vetted_at`)

`courses.vetted_at` records that the **platform owner** personally reviewed a course against its
sources. NULL means unvetted, and the migration that added the column deliberately did not backfill,
so a course is unvetted until someone says otherwise. An unvetted course keeps a **public, indexable
landing page** (title, description, the standards it meets, its own OG card, `Course` JSON-LD with no
price/offer, and a **"notify me when this course opens"** email capture) because that page is what
educators shop on, while the **content is closed**: no lesson list, no lesson titles, no media URLs,
no price, no enroll button. Full access is **owner OR the course's own instructor OR anyone with an
existing enrollment OR an invited auditor** (un-vetting must never revoke access from someone
mid-course).

**Live but unvetted** (`courses.allow_unvetted_public`, owner-only): the one deferred field from
plans/52. When the owner flips it on an unvetted course, the course's content opens to the public
NOW, with a visible review-in-progress disclosure on the landing page and every lesson
([src/components/unvetted-disclosure.tsx](src/components/unvetted-disclosure.tsx)); "Coming soon"
badges, the notify-me form, and the vetting locks all stand down (`isVettingLocked` in
[src/lib/vetting.ts](src/lib/vetting.ts) is what every gate now asks; `isUnvetted` keeps reporting
the truthful review status). Two deliberate exceptions: `/api/v1` keeps the stricter vetted-only
bar (an external consumer republishing lessons cannot show our disclosure), and invited auditors
stay read-only on the course while it remains unvetted. Toggled in bulk from `/teach`
("Open while unvetted" / "Close while unvetted", owner-only, enforced server-side in the PATCH).

**Invite-to-audit** (`course_auditors`): from a course's `/teach/<course>` page, the owner or its
instructor invites an email to **read one unvetted course** before it opens. A pending invite grants
nothing; accepting does. Grants are per tenant and per course. Auditors are **read-only**, no
enrolling, no certificate, no progress, and **no recorded quiz or recall attempts**, so a reviewer
never moves the course's statistics. See [src/lib/auditors.ts](src/lib/auditors.ts).

Discovery surfaces (catalog, home, search, category counts, instructor pages, **sitemap**) include
unvetted courses, badged; lesson-routing surfaces (cross-course CYOA, the api-v1 lesson reads)
exclude them. The whole decision lives in one pure module,
[src/lib/vetting.ts](src/lib/vetting.ts). Mark courses vetted or unvetted in bulk from `/teach`
(owner only); notify-me signups land in `leads` and are read at `/admin/leads`.

## State-standards finder (`/academic-standards`) and explorer (`/academic-standards/matrix`)

A teacher, homeschooler, or administrator picks their **state** and sees which courses meet which
of that state's published standards: exact code, the standard's **verbatim text**, the lessons
that cover it, a link to the publisher's document, the date it was retrieved, and an honest
`full` | `partial` flag (partials must say what's missing; a test enforces it). Filterable by
subject and course, printable, and copyable as plain text for a state filing. **All 51 jurisdictions (every US state plus the District of Columbia) are mapped**, each with its
state-civics flagship course mapped 1:1 where the state's own standards allow; the live list is derived from the data files, so
the picker and the in-app roadmap (`/admin/roadmap`) are the authoritative sources for exactly which
states are covered. States without a verified mapping render as "not mapped yet", never as errors,
and each mapped state publishes its **"What we don't claim"** rejections alongside the claims.

`?course=<slug>` **without** a `?state=` (the link every course page emits under "See the full
standards detail for this course") renders a **course-scoped picker**: only the jurisdictions where
that course carries standards, with its own per-state counts, and every link on carries the course
through so the reader stays filtered. A slug this tenant does not publish, or has no mapping for,
resolves to nothing and says so, so the finder still works but never claims anything about it.

**Subjects.** Social Studies, English/Language Arts, Science, **Mathematics**, Health & Wellness, and
Physical Education. Mathematics arrived with the Science & Math track (2026-08-10) and is the newest:
Common Core Mathematics, mapped once in `src/lib/standards/shared/common-core-math.ts` and adopted so
far by California. **A state's mathematics adoption is a separate decision from its ELA adoption** and
must be checked against that state's own department of education before it is added; several states
kept one and not the other. NGSS carries HS-ESS1 and HS-ESS2 alongside the original HS-ESS3.

Every mathematics and science standard this catalog claims is an **interpret-it** standard. The
produce-it expectations (Common Core S-ID.1/.4/.6/.8 and S-IC.2/.4/.5; every NGSS "Develop a model"
performance expectation) are deliberately **unclaimed**, because no course asks a learner to construct
a plot, fit a model, run a simulation or build a model, and the platform could not grade it if they
did. They become claimable when numeric grading ships, and not before.

The companion **standards explorer** (`/academic-standards/matrix`) flattens every
(state x standard x course) alignment into one table you can fuzzy-search (code, standard text,
course, state, subject), filter (state / subject / coverage / course), and sort by any column, with
per-course and per-state rollup counts ("course X meets N standards across M states"). It degrades
to stacked cards on small screens and reuses the exact same tenant boundary as the finder. Both
routes are linked from the **Teach** menu (instructors / admins), and `/standards` 308-redirects to
`/academic-standards` for old links.

The data model is a concept hub built to reach all 51 jurisdictions without repeating work:
[src/lib/standards/claims.ts](src/lib/standards/claims.ts) analyzes the catalog **once** into
framework-agnostic course claims; each state file under
[src/lib/standards/data/](src/lib/standards/data/) maps its own codes onto those claims;
multi-state frameworks (NGSS, Common Core) are mapped once in
[src/lib/standards/shared/](src/lib/standards/shared/) and *adopted* per state. Adding a state =
add `data/<state>.ts` + `pnpm gen:standards` (regenerates the committed index), no other code
changes. Tenant-scoped end to end: standards are keyed by course slug and resolved against the
requesting tenant's own published catalog, so a brand can never surface a standard its courses
don't back.

## Notes, inline annotations, and class notes

Every signed-in learner gets a **My notes** panel on every lesson (private by default, stated in
words next to each note), plus **inline annotations**: select lesson text → "Add note" pins the
note to that exact passage and highlights it. Anchoring is quote + ~30 chars of context + a
content-derived block id ([src/lib/block-id.ts](src/lib/block-id.ts), stamped by the markdown
renderer), so an anchor survives edits elsewhere in the lesson; when the quoted passage itself is
rewritten the note is kept and shown as "the text this was attached to has changed", never
dropped ([src/lib/annotations.ts](src/lib/annotations.ts) recomputes this at read time — nothing
is persisted, so restoring the text un-orphans the note).

Sharing is deliberately narrow (plans/61): a student shares a single note with a teacher (an
owner of a cohort they belong to), revocably — never a bulk toggle, never student↔student. A
teacher attaches a note to a lesson for a cohort or a subset of it (one `audience` model), which
renders in those students' panels on that lesson: **content, not messaging** — no notification,
no inbox, no email. Guardians see teacher-sent notes on the family report; a child's own notes
stay private unless the child shares them. Notes are searchable per course and exportable as
markdown with quoted passages and lesson links (`/api/courses/[id]/notes/export`).

All queries live in [src/db/queries/notes.ts](src/db/queries/notes.ts) behind the scoped DAL;
`tests/isolation/notes.db.test.ts` pins the visibility rules (cross-tenant, cross-author,
unshared-note, and recipient-narrowing leakage all fail the suite).
## In-app recording: audio and video

In-app lesson recording captures **video as well as audio**: 720p front-camera capture with a
mirrored live self-view (the saved file is not mirrored), the same offline-first
IndexedDB → Cloudinary pipeline with automatic sub-100 MB part splitting, and a teleprompter
self-view docked at the top of the screen so reading the script keeps the speaker's eyes near
the lens. `lessonType` is set to `audio` or `video` to match the take. Uploads reuse the
existing unsigned Cloudinary preset (`auto/upload`), so no new media infra; if the preset is
ever format-restricted, the recorder surfaces Cloudinary's exact error in-UI.

## In-course search

Every course page shows a **"Search this course"** box to viewers who can read the content
(enrolled learners, the instructor/owner, invited auditors). It searches the **published lessons of
that one course**: lesson titles, body prose, `:::reveal` self-checks (question + answer), and the
text attached to `:::figure` images: **alt text, captions, and credits, never the URL**. That last
part is deliberate phrasing (plans/61 §5): the app greps the text attached to an image, not the
image, so no surface calls it "image search". Exact-phrase matches rank above all-words matches and
title matches rank highest, with a ~60-character snippet around the first match.

The ranking is a pure module ([src/lib/course-search.ts](src/lib/course-search.ts), unit-tested in
`tests/course-search.test.ts`); the lesson read is tenant-scoped through `ScopedDb`
(`listPublishedLessonSearchRows`, isolation-tested in `tests/isolation/course-search.db.test.ts`);
the API is `GET /api/courses/[id]/search?q=` (404 across tenants, 403 for anyone who can't read the
content, 400 outside 2 to 200 characters).

## School gradebook roll-up + roster CRUD (plans/50 Phase 3, the safe half)

**`/admin/gradebook`** shows the tenant admin one row per learner across the whole school
(courses enrolled, lessons completed, best-quiz average, cohort membership), with a CSV export at
`/api/admin/gradebook.csv` (attachment download, `Cache-Control: no-store` — exports are student
PII). Brand_admin/platform-owner only, tenant-scoped like every other read
(`tests/isolation/gradebook-rollup.db.test.ts`). The cohort roster (`/cohorts/[id]`) now also
lists **pending invites** with a copyable join link and a **Resend** action that re-delivers the
same token (nothing already shared is invalidated). Editing grades, quiz attempts, or completions
WAS deferred to an override/annotation design — now shipped (plans/66, approved 2026-08-18):
teachers write **append-only grade overrides** (adjust a quiz score, mark a course complete —
display only, no certificate) with a required reason. The real attempt is never edited; every
surface that honors overrides (cohort report + CSV, family report, the learner's own dashboard)
shows the adjusted value with a visible marker and the reason, corrections are newer rows
(latest wins), and platform/course-level statistics never consult overrides
([src/lib/overrides.ts](src/lib/overrides.ts), migration `0053`).

## Self-serve custom domains

At `/admin/domains`, a school's **brand_admin** maps a domain to their tenant entirely self-serve,
no BAM in the loop. A `<slug>.learn.witus.online` subdomain works instantly (covered by a wildcard
Vercel domain BAM sets up once). A **custom** domain (e.g. `theirschool.com`) is auto-registered
with the Vercel project via the Vercel Domains API
([src/lib/vercel-domains.ts](src/lib/vercel-domains.ts)); the admin sees the DNS records to set at
their own registrar and a **"Check verification"** button that polls status. Optional env vars
`VERCEL_API_TOKEN` / `VERCEL_PROJECT_ID` / `VERCEL_TEAM_ID` gate the Vercel-side automation, without
them the domain manager still maps the host and shows generic DNS records, it just can't register
the domain with Vercel for you. A per-tenant cap (5 domains) keeps this abuse-resistant; Vercel never
serves an unverified domain, so a school can't hijack a domain it doesn't control. See
`plans/user-tasks/64-domain-self-serve-setup.md`.

## Demo account

"Try the demo" on the **Acme** tenant's login page (`acme.learning.witus.online`) signs a visitor
into a **shared demo account**, a `brand_admin` on Acme only, so they can try teacher/admin
surfaces (authoring, `/teach`, `/live`, `/cohorts`) without ever becoming a platform owner or a
member of any other brand. A nightly Vercel cron (`/api/cron/demo-reset`, midnight UTC) wipes the
demo user's Acme data and reseeds a small baseline so every visitor gets a fresh sandbox. Fully
optional: three env vars (`CRON_SECRET`, `DEMO_VISITOR_PASSWORD`, `DEMO_VISITOR_USER_EMAIL`) gate
it, the app boots fine without them. See [src/db/queries/demo.ts](src/db/queries/demo.ts) and
`plans/user-tasks/62-demo-account-setup.md`.

## Develop

```bash
pnpm install
cp .env.example .env.local        # fill in Neon + Better Auth (see plans/user-tasks)
pnpm db:generate && pnpm db:migrate
pnpm seed:tenants                 # creates BVC + a dummy "Acme Academy" test tenant
pnpm dev                          # http://bvc.localhost:3040  /  http://acme.localhost:3040
```

Optional content seeds (each needs `seed:tenants` first; re-seedable, upsert by
`(courseId, slug)`):

```bash
pnpm seed:faa        # FAA Part 107 → Learn.WitUS (14 collapsible modules, a quiz per module,
                     #   click-to-reveal quick checks). `pnpm seed:faa --dry-run` prints the
                     #   module → lesson/quiz breakdown WITHOUT touching the database.
pnpm seed:bvc:real   # real 21-episode BVC content → Better Vice Club
pnpm seed:sommelier  # BVC Sommelier series → Better Vice Club. Tasting-skills sequels to the BVC
                     #   episodes: Wine (Ep 9, age-gated 21+), Coffee (Ep 1) and Chocolate (Ep 3),
                     #   both un-gated. Every flight carries a parallel drill for non-consumers.
                     #   3 free preview lessons each; price + vetted state are set in the admin UI
pnpm seed:languages  # Spanish/French/Portuguese/Italian → Learn.WitUS
pnpm seed:health     # health/fitness courses (NASM CPT/CES/CNC, Read Your Body's Data,
                     #   ECS Foundations/Fitness) → Learn.WitUS (see scripts/seed-health.ts TARGET_SLUG)
pnpm seed:speedway   # ElementaryMBA: Speedway docuseries (Indy 500), Intro to Robotics & STEAM,
                     #   Young Makers: AI for Kids (F3), and AI for Entrepreneurs (F4)
pnpm seed:langchain  # 3 LangGraph/LangChain courses → Learn.WitUS (AI & Technology);
                     #   auto-discovers scripts/data/langchain/<repo>/ (course.json + lessons)
pnpm seed:demo       # demo account (brand_admin on Acme) + baseline enrollments, needs
                     #   DEMO_VISITOR_USER_EMAIL set; run once, and after every reseed of Acme content
```

`*.localhost` subdomains resolve to 127.0.0.1 in modern browsers; no `/etc/hosts` edit needed.

**Operating the app** (migrate + seed order, which seed owns which course, keeping content current):
see [OPERATING.md](OPERATING.md), mirrored in-app at `/help` → "Keeping courses & content current".

```bash
pnpm typecheck   # next typegen && tsc --noEmit
pnpm lint        # eslint + the content guards below, in order
pnpm test        # Vitest, unit + the isolation suite
```

Every content guard inside `pnpm lint` also runs on its own. Several are **ratchets**: pre-existing
violations sit in a `GRANDFATHERED` / `BACKLOG` map with their measured state and may not get worse,
anything not on the list fails, and deleting an entry when you fix its file is the progress bar.
Never add an entry to make new content pass.

```bash
pnpm check:em-dashes       # no em/en dashes in user-visible copy (--list shows protected hits)
pnpm check:quiz-balance    # no bank of 8+ questions parks over 60% of its correct answers at one
                           #   option index without `shuffleOptions: true` (--list prints every
                           #   bank). The fix is always the flag, never reordering options.
pnpm check:longest-option  # ratchet. No bank is beatable by always clicking the LONGEST option;
                           #   `shuffleOptions` does not help, because length travels with the text.
pnpm check:recall          # recall cards quiz the PREVIOUS lesson, never the one they sit on.
pnpm check:reveals         # ratchet. Every `:::reveal` card is well formed, so none rots into
                           #   prose that silently never grades.
pnpm check:assessment-fit  # ratchet. The assessment WIDGET fits its content: no explanation or
                           #   option that names a screen POSITION (options re-shuffle on every
                           #   attempt), no typed fill-in whose only answer is a bare number (a
                           #   closed-set fact multiple-choice tests better), no `**Check
                           #   yourself**` question left as prose. `--list` prints every finding.
pnpm check:standards       # ratchet. Every seeded course declares its standards, or says why not.
pnpm check:series-codes    # course codes (STORY-00) are legal and do not lie about a series'
                           #   shape: no duplicate position, no two courses claiming to be the
                           #   start or the capstone, no lettered track without a track NAME, no
                           #   prefix shared by two series. NOT a ratchet: codes are new, so
                           #   every code that exists was written under the rule.
pnpm check:page-reachability  # ratchet. No public page is a menu orphan or rides the default OG card.
```

The two quiz-integrity guards and the assessment-fit guard all cover the **deterministic** half of
their question. Their semantic halves are advisory buttons on a course's instructor tools,
deliberately NOT build gates, because an LLM verdict is non-deterministic and must never be able to
block a commit: **Audit reveals** (is each self-check answer supported by its lesson?) and **Audit
assessment fit** (does this lesson use the right widget for its content?).

When `check:assessment-fit` flags a typed exercise whose answer is a number and producing that
number by hand genuinely IS the skill (a calculation, a unit conversion), set `computedAnswer: true`
on the item, the explicit opt-out equivalent of `shuffleOptions: false`. Never set it on a year, a
seat count, or a form number.

## Future classes & features (`/admin/future`)

Owner-only review surface for everything proposed but not yet built, the *She Did the Work* course
proposals plus a research seed per subject, the extra civics courses, and the Travel & Living Abroad
track. Groups render as collapsible sections (item count in the heading; only the first starts
open), so 40+ proposals scan as a screenful of headings. Leave a note on any item and it lands in
`future_work_notes`; read the notes back from a terminal, no copy-paste:

```bash
pnpm future:list                  # open notes, all schools (--tenant <slug> · --status open|done|all
                                  #   · --item <key> · --limit N)
pnpm gen:future-work              # regenerate src/lib/future-work-content/* from plans/future-courses/
```

The proposals are **committed** (`src/lib/future-work-content/*`, generated from the gitignored
`plans/future-courses/` notes by `gen:future-work`), the app never reads `plans/` at runtime, so the
page renders the same in production. Add a proposal by dropping markdown in `plans/future-courses/`,
re-running the generator, and registering it in `src/lib/future-work.ts`.

## Owner library (`/admin/library`)

Owner-only reading room for BAM's private long-form ebooks (interview prep, the commercial
playbook). The markdown lives outside this public repo; `node scripts/sync-library.mjs
<markdown files...>` upserts each file into `library_documents` (slug from the filename minus any
date prefix, title from the first `#` heading, sort order from the argument order), and the pages
render it through the same safe `Markdown` component lessons use. The table is platform-level (no
`tenant_id`), both pages sit behind `requirePlatformOwner()`, and nothing tenant-scoped or public
links to it, so no school ever sees a byte of it. Mirrors `/admin/library` on witus.online.
Migration `0048_nebulous_vermin.sql` creates the table (`pnpm db:migrate:prod` after merging).
The owner can also download each document's typeset **PDF** (uploaded by `sync-library.mjs` from
the sibling `<name>.pdf`; migration `0052` adds the columns) from the list rows or the reader
header — attachment download, no caching.

## Admin home + self-serve brand settings

The `/admin` landing is a consolidated dashboard: headline tenant-scoped counts (learners, active
enrollments, courses published with the unvetted remainder, completions, open problem reports,
leads; the owner also sees new curriculum feedback, media awaiting review, and upcoming live
sessions), each linking to its surface, above the full tool grid. `/admin/settings` self-serve
flags now also include **Learning paths** (`flags.paths`) and **Lead funnel** (`flags.leadFunnel`)
alongside the existing set. Deployment-identity flags (`recruiting`, `surface`, `aiProvider`,
`ecosystemSso`, `firstParty`) stay deliberately out of self-serve.

## Lesson maps: county and tribal-area atlases

The lesson-map choropleth gained two lazy-loaded atlases (plans/49 remainder):
`atlas: "us-counties"` (5-digit county FIPS, US Census cartographic boundaries via the existing
`us-atlas` package, own async chunk) and `atlas: "us-aiannh"` (American Indian / Alaska Native /
Native Hawaiian areas from the Census 2024 AIANNH boundary file, in-repo simplified TopoJSON,
381 KB, own chunk). The AIANNH layer is separately styled (its own dark outline over a neutral
state base, never a shade of the state ladder, because a tribal nation is a separate sovereign)
and draws only boundaries plus each area's official Census name: every color and claim must come
from the lesson's own cited `regionLegend`. Pure join/legend helpers in
[src/lib/map-atlas.ts](src/lib/map-atlas.ts).

## Marketing tools (`/admin/marketing`)

One surface for the growth levers that exist: lead and interest signals (top courses by people
waiting), share counts by channel, which published courses have not been announced yet (linking
the existing `/teach/announce` batch tool), promo-code management, and email-campaign drafts. A
**Compose announcement** form drafts a course announcement from the course's own title,
description, and URL, with copy-to-clipboard and a `mailto:` fallback: sending happens through
BAM's own email tool for now, and the page says so. Bulk sending is deliberately unbuilt until
seven audience/consent/deliverability decisions are made (recorded in the branch notes), because
list hygiene failures would put the transactional magic-link mail at risk.

## Brand self-serve (`/admin/settings`)

Brand admins self-serve the full brand identity: name, tagline, accent colors, wordmark, PWA
short name, theme color, logo, favicon, and the default social card, each with a live preview and
https-only URL validation, plus a server-rendered "Saved brand" card showing how the stored
identity renders today. Only theme keys with a verified consumer are exposed: a setting that
silently does nothing is worse than no setting (`manifestUrl` stays a DB-level escape hatch on
purpose, since a self-serve external manifest is an easy installability-breaker).

## Course pages link to their bundles and series

A course page shows the paths it belongs to (linked), the series it is part of (linked when the
course carries a series slug), and an **"Also available in a bundle"** aside listing every
PUBLISHED bundle containing it, each linking to `/bundles/[slug]` with its price. Unpublished
bundles are withheld (a link nobody can buy is a dead end), and the Coming-soon face of an
unvetted course still shows no offers of any kind.

## Vetting: finding and clearing the queue

`/teach?status=unvetted` is the vetting queue, preselected from the URL, with the owner-only bulk
**Mark vetted** controls. The `/admin` home tile for published courses links straight there
whenever something is waiting, and any unvetted course carries an owner-only CTA
([src/components/vet-course-cta.tsx](src/components/vet-course-cta.tsx)) on the course page and in
the course manager, with a one-click **Mark this course vetted** button, so review happens where
the course is rather than after a walk to another surface.

## Specialization credentials

Named three-course tracks (shared research core + craft medium + subject, per the Documentarian
program's architecture in `plans/future/12`) earned automatically when all three courses are
complete. Definitions are committed typed course-slug triples in
[src/lib/specializations.ts](src/lib/specializations.ts); award and progress are **computed at
read time from `course_completions`** (no new table), tenant-scoped so a triple with any leg
unpublished in the requesting tenant simply does not exist there. Shown on the learner dashboard
(earned + in-progress with the remaining courses) and the Family view (earned only). Each earned
leg links to its existing `/verify/[token]` course credential; the specialization mints no token
and is deliberately presented as an internal platform record, never an external certification.

## Media verification (`/admin/media`)

Owner-only sign-off on every image, video, audio file and document uploaded for a course, **before
that course goes live**. It is the third review list beside Citations and Source checks, and the one
that covers what neither of those can: a course can be perfectly cited and still ship a figure with
murky rights, a caption describing a different photograph, or a scan too dark to read.

Each uploaded asset is registered in the tenant-scoped `media_assets` table with its **provenance
triple** (`credit`, `rights_status`, `source_url`) and sits at `pending` until it is approved or
rejected. The card renders the **real asset**, not a filename: an `<img>` for images, a player for
audio and video, a link for documents. Two rules are enforced in the API as well as in the form,
matching the citation board: a **rejection cannot be saved without a note** (a rejected image whose
problem was never written down gets re-uploaded unchanged), and media whose rights read `unknown`
**cannot be approved at all**. The top of the page shows the pending / approved / rejected counts and
**which courses still have media waiting**. Each card also names the lesson the asset illustrates,
links to it, and quotes the prose either side of its `:::figure` line (see
[Review context](#review-context-where-in-the-course-does-this-appear)).

```
GET   /api/admin/media          # this tenant's assets, newest first
POST  /api/admin/media          # register an upload: url, kind, credit, rightsStatus, sourceUrl (+ course/lesson/alt/caption)
PATCH /api/admin/media/[id]     # record a decision: { status, note }
```

Everything goes through the scoped DAL, so one school's unreviewed media is invisible to every other,
and a by-id decision on a foreign asset **404s** rather than redirecting. The pure clearance logic
lives in [src/lib/media-verify.ts](src/lib/media-verify.ts): `isCourseMediaCleared(slug, assets)` is
true when every registered asset for that course is approved, so "media signed off" is a checkable
pre-launch condition. Migration `0049_typical_the_leader.sql` creates the table (`pnpm
db:migrate:prod` after merging).

## Review context: where in the course does this appear?

Every review surface used to ask for a judgment call on a fragment cut out of its lesson. Citations
showed a bare APA string and asked whether the source says *what the lesson claims*, with no way to
read the lesson. Source checks asked about a hedge without showing the sentence that hedges. Media
showed a picture with no sight of the lesson it illustrates. A decision made blind is worse than no
decision, because it **closes** the item and nobody looks again.

All four boards, `/admin/citations`, `/audit/citations`, `/admin/research` and `/admin/media`, now
name the course and lesson, link straight to the lesson, and quote the lesson's own words where they
can be found honestly:

| Board | Context shown |
| --- | --- |
| Citations (owner + auditor) | The sentence carrying the in-text citation, e.g. the prose ending `(Fuller et al., 2020)`. Computed by `pnpm gen:citations` and committed, so `src/lib/citations.ts` still reads no database at request time. 137 of 883 citations match; the rest list their sources without in-text citations and get the link alone. |
| Source checks | An optional hand-recorded `lesson` slug and verbatim `quote` on the check, **verified against the live lesson on every render**: a check whose hedge has been rewritten out of the course is stale, and the board says so instead of quoting text that is gone. |
| Media | The prose immediately before and after the asset's `:::figure` line, which is the argument the picture is standing in for. |

**Nothing is guessed.** Every helper returns null when it cannot find a real match, and every missing
link comes with a sentence saying why ("this school does not host that course"). A wrong location is
worse than none: it sends a reviewer to the wrong page and they have no reason to doubt it. That is
also why the source-check `lesson` field is written by hand rather than keyword-matched, with
`pnpm locate:research-checks` printing the candidate lessons and the matching sentences as evidence
for a human to read (12 of 20 checks are located; the other 8 name group labels such as
`pricing: market anchors` rather than a course, and stay unlocated).

**Isolation.** The lookups (`ScopedDb.listLessonLocations`, `ScopedDb.listLessonBodies`) filter
`tenant_id` on lessons *and* courses. The citation registry is global (a citation is a property of
the text, not of a brand), so on a school that does not host a staged course the entry renders its
names with no link. A slug held by two instructors in one school links to nothing, matching
`getCourseByIdOrSlug`. `/audit/citations` feeds the lookup from the same groups that already encode
the auditor's grant, so it cannot widen it. Covered by
[tests/isolation/review-context.test.ts](tests/isolation/review-context.test.ts) and
[lesson-locations.db.test.ts](tests/isolation/lesson-locations.db.test.ts). No migration.

## Connection graph (`/admin/graph`)

Owner-only view of how the catalog hangs together, answering the two questions scrolling a
180-course list cannot: *what is this course connected to*, and *what is connected to nothing?*

**Derived at request time, never stored.** No table, no migration, no cron, no cache: the graph is
rebuilt from live rows on every load, so a course added or a prerequisite set in `/admin/paths` a
minute ago is already in it and there is no regeneration step to forget. Edges come from
`course_prerequisites` (required, solid with an arrow; recommended, dashed with an arrow) and the
`ENTITIES` registry (two courses covering the same person, case, law or concept, the line labelled
with the entity's name). Category drives colour and clustering. **Entity links are code, so they
move on deploy, not on save**, and the page says so rather than implying otherwise.

Two pictures, both deterministic trigonometry with **no `d3-force` and no new dependency**, so the
same course draws identically every time and a screenshot is comparable between sessions: an
**ego-centric radial** view of one course with its neighbours on rings by tie strength, and a
**whole-catalog** view clustered by category rather than scattered into a hairball. Semantic (CYOA)
neighbours are deliberately **not** drawn: the similarity match is lesson-grained, so rolling it up
to a course-level line is a judgment call whose choice would be visible in the output, and the
underlying query only sees courses that opted into cross-course CYOA.

The other half, and the more useful one, is the **orphan and weak-link report** under the drawing:
unconnected published courses, single-thread courses, **category islands** (a category no edge
leaves), entity coverage including entities inert here because fewer than two courses resolve,
one-way recommendations, and **dangling entity references**, an `ENTITIES` course slug matching no
course in this school, which nothing else in the app catches. That report is also the accessibility
path: the SVG is `aria-hidden` and every node and edge it draws is a link in the tables below it.

Expect most of the catalog to show as orphaned today. That is the picture telling the truth, not a
broken page. The graph logic is pure and DB-free in
[src/lib/course-graph.ts](src/lib/course-graph.ts) (unit-tested in `tests/course-graph.test.ts`);
reads go through `ScopedDb.listPrerequisiteEdges()`, which scopes **both** ends of every
prerequisite to the tenant. No migration.

## Teachers Pay Teachers packets (`/admin/tpt-plan`)

Owner-only rollout plan for the TpT sales channel: which packet to post, in what order, at what
recommended price, and why, with the course's real standards count on every row. Each built packet
gets a branded preview with print-to-PDF and inline editing. The packet markdown lives **gitignored**
under `plans/future-courses/tpt-packets/<dir>/`, so the preview is a **local-dev** tool: on a
deployment it renders an honest empty state instead of pretending the files are there.

Unit packets are hand-authored. **Bundle** packets (a compilation of already-built units) are half
generated, because their standards claim is the union of their members' claims and retyping 171 codes
by hand is where a wrong code reaches a teacher:

```bash
pnpm gen:tpt-bundle-standards            # every bundle in src/lib/tpt-plan.ts with a packetDir
pnpm gen:tpt-bundle-standards <dir>      # just one, e.g. state-civics-bundle
```

It writes `02-included-units.md` (the member manifest, with the codes each member carries) and
`03-standards-alignment.md` (the combined coverage, deduped per jurisdiction, every code quoted
verbatim) straight from `src/lib/standards`, the same data behind the public finder. The cover,
teaching guide, attribution, and listing pages stay hand-written. Re-run it after changing a bundle's
`bundleSlugs` or any standards claim.

## Conventions

This repo follows the WitUS ecosystem rules. Read [CLAUDE.md](CLAUDE.md) and
[STYLE_GUIDE.md](STYLE_GUIDE.md) before contributing, every change starts on a new
`type/short-slug` branch off `main`, and **BAM merges** (never merge to `main` yourself).

**Keep the docs current, in the same change, not "later."** When a set of tasks ships
user- or operator-facing behavior, update the docs that describe it before wrapping up:

- [README.md](README.md): feature list, setup, and the seed/migration commands.
- [OPERATING.md](OPERATING.md): the operator runbook (migrate/seed order, how-to-run).
- [src/lib/help-articles.ts](src/lib/help-articles.ts): the in-app Help Center (the
  "how to use the app" articles learners and operators read in-product).
- [src/lib/roadmap.ts](src/lib/roadmap.ts): move the entry to Shipped so the in-app
  roadmap reflects reality.

A feature isn't "done" until its README mention, usage/help note, and roadmap entry match
what shipped. (A local `Stop` hook in `.claude/settings.json` nudges when `src/` code changed
but these files didn't, a reminder, not a gate.)
