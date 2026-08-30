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
Wanderlust, renamed from Wanderlearn in 2026-08) can render real Learn.WitUS lesson content, `GET /api/v1/courses` (paginated,
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

### Verifying a deployment can actually report its errors

```bash
pnpm verify:observability https://learn.witus.online          # one target
pnpm verify:observability https://learn.witus.online https://bettervice.club
pnpm verify:observability --env-file ../other-app/.env.local https://other-app.example
```

**Use it after a deploy, after any header or CSP change, and any time the error dashboard has been
suspiciously quiet.** Wiring browser error reporting into an app has three failure modes that look
identical from the outside, and two of them are invisible from the inside as well: the browser DSN
never reached the build; the DSN is there but the site's CSP forbids the ingest origin, so the
browser drops every report before it leaves the page while the *server* side keeps reporting
normally and the dashboard looks healthy; or the app cannot reach its database. Against a deployed
URL the script asserts four things and exits non-zero if any of them is not established:

| Check | What a pass means |
| --- | --- |
| `dsn-in-client-bundle` | The exact configured DSN string is present in the served HTML or in one of that page's own JS chunks. This is the only direct evidence the browser SDK will initialise at all. |
| `csp-allows-ingest` | Every enforced `Content-Security-Policy` on the response permits the ingest envelope endpoint, following the spec's `connect-src` then `default-src` fallback. Report-only policies are printed but never counted either way, since they cannot block. |
| `ingest-host-resolves` | The DSN's hostname resolves in DNS. Catches a mistyped region or a stale vendor domain, which the other two checks cannot see because they both derive from that same string. |
| `health-endpoint` | `/api/health` returns 200, with JSON that **affirms** health. |

Three properties are load-bearing, and none of them should be "simplified" later:

- **"Could not determine" reports as NOT verified.** Every check answers pass / fail / unknown and
  only a pass counts. A 200 that returns HTML, or JSON with no recognised health field, is `unknown`
  and fails the run. A harness that reports green when it could not actually look is worse than no
  harness, and this is the failure class that produced false-healthy signals three times.
- **No DSN is hardcoded.** It is read from `--dsn`, `--env-file`, the environment, or a `.env*` file
  in the working directory, and **the source is printed on every run**. There is deliberately no
  fallback value: with no DSN, the DSN and CSP checks report `unknown` and the run fails. The first
  live run showed why this matters, since this deployment's DSN points at Better Stack's
  Sentry-compatible ingest rather than at `sentry.io`. The ingest origin is always *derived* from
  whichever DSN is found.
- **Read-only.** GET requests only, only against the URL you name, and it never sends a test event,
  so running it costs no error quota and pollutes no project.

**Not in `pnpm lint`, on purpose:** it makes network calls, and a guard that fails on bad wifi is a
guard people learn to bypass. It is a post-deploy tool, not a commit gate. It also cannot prove that
events are *accepted* (only that they can be sent), that a route-specific chunk it never fetched
carries the init (pass `--page <route>` to widen), or that the project behind the DSN is enabled and
under quota. Other flags: `--health-path`, `--max-chunks`, `--timeout`, `--show-dsn`, `--json`.
Its judgment lives in pure functions in
[scripts/lib/observability-checks.ts](scripts/lib/observability-checks.ts), pinned by
[tests/verify-observability.test.ts](tests/verify-observability.test.ts).

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

## Private courses (`courses.visibility = 'private'`)

A course can be **held back entirely** rather than published unvetted. `visibility: "private"` is an
**insert-only** option on `seedAuthoredCourse` (like `price`), so the public flip is done once in the
admin UI and survives every later re-seed. A private course writes `isPublished: false`, so every
catalog surface filters it out, and `getSpecializations` excludes it explicitly. The **owner can
still study it end to end** — enroll, quiz and complete all check `canAccessCourse` rather than
`isPublished` — which is what makes a private course a real course and not a draft. Coverage:
`tests/isolation/private-course.db.test.ts`.

`publishHoldReason` records **why** in one honest sentence, and it is not decoration: it is the
difference between "nobody has got to this yet" and "this is deliberately waiting on something".

Two courses ship this way today, both **free by decision** rather than by omission:

- **`deaf-america`** — "Deaf America: Language, Schools, and the Record". Held until a **Deaf
  co-author** has reviewed it. It teaches history, culture, linguistics and law and **teaches no
  signs**, because every usable sign-media dataset bars a paid course (ASL-LEX carves the videos
  out, WLASL forbids commercial use, ASL Citizen forbids redistribution). Black ASL is the centre:
  from 1869, seventeen states and DC ran separate schools for Black Deaf children, and because those
  underfunded schools kept teaching in sign while white schools practised oralism, Black signers were
  later found to use **more** traditional and standardised forms, not fewer.
- **`blind-and-low-vision-america`** — "Blind and Low-Vision America: The Code, the Schools, and the
  Record". Held until a **blind co-author or reviewer** has read it, and its credit section is
  explicitly unfinished. **Braille is a code, not a language**, so this course is not the Deaf course
  with the nouns swapped: it goes to the War of the Dots, the schools, credit, and the law.

Both state their author's standpoint in lesson one, flag per source whether a Deaf or blind author or
organisation wrote it, and teach contested claims as contested with the holders named. Neither is in
`STAGED_COURSES` while private, and both carry a reasoned `BACKLOG` line in the standards ratchet
rather than a standards claim, because claiming coverage for a course no educator can see would be a
claim about content that may still change.

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

**Self-nomination** (`course_interest_requests`): the other direction. On an unvetted course's public
landing page, under the notify-me box, a visitor can offer to **take** the course, to **test** it
before it opens, or to **vet** it as a subject matter expert, giving a name, an email, and optionally
an international phone number and a few lines of background. Signed-out visitors may submit (an
expert has no reason to hold an account here); the route is treated as hostile input the way
`/api/course-notify` is: tenant from the host, server-side Zod, a honeypot, per-IP **and**
per-address sliding windows, and a unique key on `(tenant, course, email)` so a re-submit updates one
row.

**A self-nomination is a REQUEST, never a grant.** It lands `pending` and opens nothing. Only a human
decision on the course's own `/teach` page turns a beta/expert request into the **existing**
`course_auditors` grant, through the existing invite path, so there is no second grant mechanism to
audit; approving an interested learner mints nothing, and no capacity ever auto-enrolls anyone. One
gate, [src/lib/course-reviewers.ts](src/lib/course-reviewers.ts), guards inviting, revoking, and
approving, so widening one widens all three. The rules are pure in
[src/lib/course-interest.ts](src/lib/course-interest.ts) and pinned by
[tests/isolation/course-interest.test.ts](tests/isolation/course-interest.test.ts).

**PII:** phone and background are readable only by the platform owner, the course's own instructor,
and the school's admins, on the `/teach` panel. Its own table, not `leads.inquiries`, precisely so
the marketing CSV export and the campaign audience cannot reach them; one serializer
(`serializeForOwner`); never on a public page, an OG card, the sitemap, an email, or the Inbox
mirror. Every submission does notify the WitUS Inbox (`learn-course-interest:<capacity>`), carrying
who, which capacity, which course, `phone_provided` / `credentials_provided` booleans and a link back
to the owner's panel, never the values themselves. The form says all of this in visible copy.

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

A note can also belong to the **course** rather than to any one lesson: the course page carries a
**My notes on this course** panel for anyone who can read the course (enrolled, instructor, or an
invited auditor), for the notes that have no passage to point at ("come back to the worksheet in
section 3"). Same table, `lesson_id IS NULL`
([src/db/schema/notes.ts](src/db/schema/notes.ts)), so course notes are searched, exported and
tenant-scoped by exactly the same code as lesson notes and no anchoring logic is duplicated. They
are private with no share control at all, because a teacher note is content attached to a LESSON
and a database constraint (`lesson_notes_teacher_lesson_chk`) makes that a fact rather than a
convention. Notes key off stable lesson/course UUIDs, never array positions, so re-seeding a
course leaves every note where its author put it.

Sharing is deliberately narrow (plans/61): a student shares a single note with a teacher (an
owner of a cohort they belong to), revocably — never a bulk toggle, never student↔student. A
teacher attaches a note to a lesson for a cohort or a subset of it (one `audience` model), which
renders in those students' panels on that lesson: **content, not messaging** — no notification,
no inbox, no email. Guardians see teacher-sent notes on the family report; a child's own notes
stay private unless the child shares them. Notes are exportable as markdown with quoted passages
and lesson links (`/api/courses/[id]/notes/export`).

**Note search covers the four visibility rules, not just "mine"** (plans/61 §4). A learner's
search returns their own notes plus teacher notes sent to them; a teacher's search *also* returns
notes students shared with them and notes they sent, which neither learner rule can reach because
a teacher owns a cohort rather than belonging to it. Every hit says whose note it is, and the box
states its own scope in words rather than implying it. The two ids are kept apart on purpose: own
notes follow the active learner (so acting as a managed child searches that child's notes), the
teaching half follows the signed-in account (so a child being acted as never inherits it).

All queries live in [src/db/queries/notes.ts](src/db/queries/notes.ts) behind the scoped DAL;
`tests/isolation/notes.db.test.ts` pins the visibility rules (cross-tenant, cross-author,
unshared-note, recipient-narrowing, teacher-search, and guardian-view leakage all fail the suite,
including the one that matters most: a student's personal note never reaches their guardian, and
including the course-level notes in both directions). The export's assembly is pure and unit
tested in [tests/notes-export.test.ts](tests/notes-export.test.ts).

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

One check is deliberately **outside** that list: `pnpm verify:observability <url>` runs against a
DEPLOYED url rather than the working tree, so it makes network calls and must never gate a commit.
See [Verifying a deployment can actually report its errors](#verifying-a-deployment-can-actually-report-its-errors).

The two quiz-integrity guards and the assessment-fit guard all cover the **deterministic** half of
their question. Their semantic halves are advisory buttons on a course's instructor tools,
deliberately NOT build gates, because an LLM verdict is non-deterministic and must never be able to
block a commit: **Audit reveals** (is each self-check answer supported by its lesson?) and **Audit
assessment fit** (does this lesson use the right widget for its content?).

When `check:assessment-fit` flags a typed exercise whose answer is a number and producing that
number by hand genuinely IS the skill (a calculation, a unit conversion), set `computedAnswer: true`
on the item, the explicit opt-out equivalent of `shuffleOptions: false`. Never set it on a year, a
seat count, or a form number.

### Measuring a course, and generating its outline

Two on-demand tools, neither of them a build gate (`docs/course-method/README.md` explains why, and
which tier of the method they belong to):

```bash
pnpm audit:course <slug>                # structural holes: a section with no quiz, a lesson no
                                        #   question ever cites, a lesson assessed only in the final,
                                        #   a review link pointing at no lesson
pnpm audit:course --all                 # the whole catalog, one line each, findings tallied by kind
pnpm audit:course <slug> --spec         # also check pools against the Tier-0 assessment spec
pnpm audit:course <slug> --spec --strict  # exit 1 on any finding, for a course's own final commit
pnpm gen:outline <slug>                 # the course as a structured outline, generated from the
                                        #   committed data so it cannot drift from what is seeded
pnpm gen:outline --series <seriesSlug>  # a whole series (this replaced gen-well-outline.ts)
```

Every question is supposed to carry `sourceLessonSlug`, which is what turns a wrong answer into
"reread this lesson". The eight courses migrated from CentOS carried none, because the CentOS quiz
files have no lesson association: `scripts/lib/source-lesson-match.ts` assigns one at generation time
(structurally when a section holds a single lesson, by BM25 over the section's lessons otherwise) and
**declines when the evidence is thin**, because a wrong "reread this" link is worse than no link.
`pnpm gen:health` reports its coverage on every run. The 120 questions it declined were then read
against their chapter's lessons and assigned by hand in `scripts/lib/source-lesson-overrides.ts`
(keyed by prompt, because seven of the eight modules are generated and gitignored), so **every
question in every readable course now names the lesson that teaches its answer.**

`audit:course` exists because twelve green guards are not the same as a complete course: the nine
WELL courses passed every one of them while all nine were missing their terminal-section quiz, 27
lessons appeared only inside a final's pool, and one lesson had no question anywhere. A guard cannot
see a hole it was not written to look for. `gen:outline` exists to feed an adversarial review pass
something produced from the same modules the seeder reads, rather than a hand-written summary that
has drifted.

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
sessions), each linking to its surface, above the full tool grid. "Open problem reports" counts
everything not yet `closed`, so a row parked at `triaged` still shows in that number. On
`/admin/reports` itself, every row off `new` now displays the reason recorded against it (the
`--note` that `pnpm reports:triage` requires, stored in `problem_reports.resolution` by migration
0058), and a row off `new` with no reason recorded says so rather than looking settled: closing a
report without saying why stops the next person from ever looking again. `/admin/settings` self-serve
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
**Mark vetted** controls, reachable as **"Courses to vet"** from both the admin rail and the
signed-in site menu (owner-only in both: an instructor offered the link would reach a queue whose
buttons reject them; both menus read one shared `VETTING_QUEUE` constant so they cannot drift). The `/admin` home tile for published courses links straight there
whenever something is waiting, and any unvetted course carries an owner-only CTA
([src/components/vet-course-cta.tsx](src/components/vet-course-cta.tsx)) on the course page and in
the course manager, with a one-click **Mark this course vetted** button, so review happens where
the course is rather than after a walk to another surface.

## Review boards collapse by course

`/admin/citations`, `/audit/citations` and `/admin/research` group by course and start collapsed,
each summary line carrying its own counts (`12 sources, 3 unverified`, `5 checks, 3 open`), so a
reviewer picks the course with outstanding work without scrolling past the finished ones. Nothing
auto-expands on a multi-course board: with most citations still unverified, "open the groups with
work" would expand nearly everything and undo the point. The per-course "show only unchecked"
filter lives inside the panel it filters, so collapsing cannot defeat it.

## Civics courses link back to their index

A `state-civics-<code>` course links back to `/civics`, the map that is actually its index; any
other Civics-category course links to the Civics slice of the catalog; anything else gets no extra
link ([src/lib/civics-nav.ts](src/lib/civics-nav.ts)). Course pages also carry an **"Also available
in a bundle"** aside with a *Get the bundle* CTA that lands on the bundle page rather than charging
in place, plus linked paths and series.
## Sales and promotions (no code needed)

Brand admins can put a course, a bundle, or the whole school on sale from `/admin/marketing`:
percent off, dollars off, or free, starting now or on a date, ending on a date or running
indefinitely until ended by hand. The catalog shows the list price struck through beside the new
one, and **checkout re-resolves the price on the server**, so the amount charged is always the
amount shown. The course's list price is never overwritten, so ending a sale restores it exactly.
Promo codes still work alongside sales. Subscription pricing is deliberately out of scope until
the recurring-discount rule is decided ([src/lib/sale-pricing.ts](src/lib/sale-pricing.ts),
migration `0054`).

## Catalog prose is US English

A 2026-08-19 sweep converted 3,421 UK spellings to US across 118 course files, touching only
display fields. Machine-readable and history-keyed strings were left alone by construction: no
slug, quiz prompt, `:::reveal` question, accepted-answer list, URL, bibliography entry or verbatim
quotation changed (the US Constitution's "good Behaviour", the International Labour Organization's
own name, and 143 other proper nouns included). What remains is logged with file and line in the
sweep's own report.

## Private study programs (owner-only courses)

`seedAuthoredCourse` accepts insert-only `visibility: "private"` + `publishHoldReason`: the
course is born unpublished and owner/instructor-only, invisible on every public surface
(catalog, series, sitemap via `includeInSitemap`, api-v1, embeds, specializations), while the
owner can still enroll, study, and complete it — completions mint real `/verify/[token]`
credentials. Insert-only means the later PUBLIC FLIP in the admin UI survives every re-seed
(same rationale as `price`). First consumer: the WELL wellness-coaching series (plans/67).
Pinned by `tests/isolation/private-course.db.test.ts`. Courses that name external certification
bodies render a canonical not-affiliated notice from the `CERT_DISCLAIMERS` registry.

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

## Cross-course links, approved before they render (`/admin/cross-links`)

The catalog is past 200 courses and its value is increasingly in the connections: the architecture
course teaches Robert R. Taylor at Tuskegee, the construction research names the McKissack contract
at the same field, and a learner on either page has no way to reach the other. `pnpm cross-links`
finds those mechanically. Whether two courses **should** link is a judgment call, so a finding is a
candidate, not a link.

**Owner-approved, one mention at a time.** `/admin/cross-links` groups candidates by the course doing
the mentioning, collapsed like the other review boards, and each card shows the target course, the
lesson the mention sits in, and **the sentence itself**. That sentence is the feature: judging
"does this course mean the Who Gets Named course, or is that phrase ordinary English here" is
impossible from two slugs and trivial from one sentence, and a decision made blind is worse than no
decision because it closes the item and nobody looks again. The sentence is re-checked against the
live lesson on every render, so a candidate whose prose has been rewritten says so instead of being
approved on evidence that is gone.

**Approved links render as a short "Related courses" list under the lesson.** The lesson body is
never edited. That is the whole point of the links being data: an edit is not reviewable, revocable,
or per-school, and a link that lives in the prose cannot be withdrawn without a content change.

**A rejected candidate is not an unreviewed one.** Two tables, following `ebook_approvals`:
`cross_link_approvals` holds a row **only when the link is approved**, so absence is the default and
the default is that nothing renders; a rejection is its own row in `cross_link_dismissals`. The
asymmetry is the argument. Forgetting to consult the dismissals table shows a decided candidate in
the owner's queue again, which is visible and safe; forgetting a `decision = 'approved'` filter would
publish a rejected link, which is invisible. A decision **flips** (approving deletes any dismissal
and vice versa), so no reader ever needs a precedence rule, and undoing deletes both rows, which is
the only path back to "nobody has looked at this".

**Where the candidates come from.** `pnpm gen:cross-links` reads `lessons.text_content` from the
**database** and writes the committed registry `src/lib/cross-link-content/cross-links.ts`, the same
split and the same reason as `pnpm gen:citations`: BVC episodes come from gitignored CSVs, the health
courses are generated, FAA and the languages have their own seeders, so a source-file reader silently
covers about two thirds of the library. That is survivable in a developer report and not in a review
queue, which looks finished when you reach the bottom of it. The registry ships **empty** until that
command is run; the board says so rather than looking like a queue with no work left. The matching
rules are shared by the report and the generator ([src/lib/cross-link-detect.ts](src/lib/cross-link-detect.ts))
so the two cannot drift.

**Isolation.** A decision is per tenant, so one school never inherits another's links. On top of
that, every approved target is resolved through `ScopedDb.listCourseLocations` at render time: a
course this school does not host, holds unpublished, or holds twice at one slug (`courses.slug` is
unique per instructor, not per tenant) renders **nothing at all**, not a 404 and not an explanation,
because the learner never knew a candidate existed. The API validates the triple against the registry
before writing, so a POST cannot mint a link between two courses no lesson mentions. Covered by
[tests/isolation/cross-links.test.ts](tests/isolation/cross-links.test.ts) and
[cross-links.db.test.ts](tests/isolation/cross-links.db.test.ts). **Migration 0060.**

## Connection graph (`/admin/graph`)

Owner-only view of how the catalog hangs together, answering the two questions scrolling a
180-course list cannot: *what is this course connected to*, and *what is connected to nothing?*

**Derived at request time, never stored.** No table, no migration, no cron, no cache: the graph is
rebuilt from live rows on every load, so a course added or a prerequisite set in `/admin/paths` a
minute ago is already in it and there is no regeneration step to forget. Edges come from
`course_prerequisites` (required, solid with an arrow; recommended, dashed with an arrow) and the
`ENTITIES` registry (two courses covering the same person, case, law or concept, the line labeled
with the entity's name). Category drives color and clustering. **Entity links are code, so they
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
