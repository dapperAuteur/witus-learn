// The internal roadmap, committed so it renders in-app at /admin/roadmap (platform
// owner). Keep it current as work lands — see the CLAUDE.md docs-maintenance rule.
// Status keys: ✅ done · 🔧 in branch · 🟡 next · ⚪ backlog · ❓ needs decision.

export const ROADMAP = `# Learn.WitUS — Roadmap

## Platform
- ✅ Phases 1–7 + 5a–d (isolation, catalog, auth, enrollment, Stripe, prerequisites, CYOA,
  embeddings, pedagogy/trust, certificates).
- ✅ AI tutor (multi-agent + streaming + LangSmith + per-tenant + paid-only + isolation test).
- ✅ Maps: Commodity (Episode Origins), Growing Belts, Languages atlas, Civics (blue/red US map),
  **Great Migration** (green/black/red Pan-African map — 3 migration streams + Chicago/Harlem/
  Detroit/Vanport clickable feature cards, \`/great-migration-map\`), **map lessons**.
- ✅ Quiz answer-links; **markdown rendering** in lessons.
- ✅ Phase 8: instructor dashboard, feedback review queue, self-serve domains, per-season age-gate,
  assignments, live-streaming, brand directory, lead funnel, learning paths.
- ✅ Instructor profile + re-home all courses to **BAM** (\`seed:owner\`); admin **Roadmap** page.
- ✅ **Self-serve custom domains — Vercel automation** (\`feat/vercel-domains\`) — a brand_admin
  attaching their **own** domain (e.g. \`theirschool.com\`) at \`/admin/domains\` no longer needs BAM: the
  app registers it with the Vercel project via the Vercel Domains API, shows the DNS records to set at
  their registrar, and a **"Check verification"** button polls status until it flips to ✅ Verified.
  \`<slug>.learn.witus.online\` subdomains are unaffected — the wildcard zone covers them instantly, so
  the app skips the Vercel API call for those. Degrades gracefully to the old manual flow if
  \`VERCEL_API_TOKEN\`/\`VERCEL_PROJECT_ID\` aren't set. Per-tenant cap of 5 domains. No migration.
- ✅ **Operator overview** (\`feat/operator-overview\`) — an owner-only \`/admin/overview\` dashboard
  consolidating cross-cutting signals in one place: **open problem reports**, **new curriculum
  feedback**, **recent leads + enrollments** (each a headline number + a few recent rows + a link to
  the full page), and a **migration-status indicator** comparing migrations on disk
  (\`src/db/migrations/meta/_journal.json\`) against \`drizzle.__drizzle_migrations\` for the current
  database — surfaces "N applied / M on disk, run \`pnpm db:migrate:prod\`" instead of guessing
  whether prod is behind. Degrades gracefully (shows latest-on-disk only) if the bookkeeping table
  can't be read. No migration; reuses existing tenant-scoped query helpers.
- ✅ **Learner dashboard** (\`feat/student-dashboard\`) — a signed-in learner's stats + profile hub
  at \`/dashboard\`: current/best **streak**, lessons completed, **recall accuracy**, **quiz average**,
  a 7-day activity strip, earned **credentials** (each links to \`/verify/[token]\`), XP/level + badges
  (shown only when the tenant's gamification flag is \`full\`), and inline **profile editing**
  (reuses \`/api/profile\`). Reuses \`getLearnerDashboard\` + a new \`getLearnerStats\`; no migration.
- ✅ **Cohorts** (\`feat/cohorts-open\`) — private classes for live class management (home-school #1):
  **any signed-in user** (not just brand admins) creates a **cohort** at \`/cohorts\`, invites
  students by email (one-time link; falls back to a copyable link if Mailgun isn't sending), and
  manages a **roster** at \`/cohorts/[id]\` showing **● here** for anyone currently present on
  \`/live\`. Students accept at \`/join/[token]\` and land on \`/live\` enrolled. Tenant-scoped tables
  \`cohorts\`/\`cohort_members\`/\`cohort_invites\` (migration 0029).
- ✅ **Family** (\`feat/cohorts-family\`) — a read-only parent view (Model A of the hybrid: kids keep
  their own accounts). From a cohort roster, a teacher **invites a parent** by email per student
  (\`/api/cohorts/[id]/guardian-invite\`); the parent accepts at \`/family/accept/[token]\` and sees, at
  **/family**, read-only **course progress**, **grades** (recall + quiz), **credentials**, and
  **live-class attendance** for **their linked child(ren) only** — gated by \`isGuardianOf\` on every
  per-child read. Attendance is derived for free from the \`/live\` presence heartbeat (a cohort member
  seen present on a day is marked attended that day — no separate check-in flow). Tenant-scoped tables
  \`guardians\`/\`guardian_invites\`/\`cohort_attendance\` (migration 0030). Model B (parent-managed
  sub-profiles for kids too young for their own account) ships in \`feat/family-model-b\`.
- ✅ **Kid login — avatar + PIN** (\`feat/kid-login\`, on \`feat/family-model-b\`) — a **per-child
  parent choice** of how a managed child signs in: None / Email / **Avatar+PIN**. Young kids with no
  email sign in **themselves** at **/kids** (also linked "I'm a student" from \`/login\`): enter the
  class **class code** → tap their **animal avatar** → enter a **4–6 digit PIN** → land on their OWN
  \`/dashboard\` (their own low-privilege session). Privacy: the screen never lists children — a bad
  class code reveals nothing (generic "class not found"; the avatar grid only appears for a valid
  code). PINs are **scrypt-hashed** (salted, constant-time compare — never plaintext) and
  **rate-limited** per child (5 wrong tries → 5-min lock). Session minted by a dedicated Better Auth
  plugin endpoint (Option A — no password login exposed to normal users). Parent controls live on
  \`/family\`; the teacher enables/rotates a cohort's class code (\`/api/cohorts/[id]/class-code\`).
  Adds \`user_profiles.login_method/avatar_key/pin_hash/pin_set_at\`, \`cohorts.class_code\`, and a
  \`kid_login_attempts\` table (migration 0032).
- ✅ **Recording batch** (\`feat/change-course-instructor\`) — the in-app audio recorder is now
  embedded **inside** the teleprompter overlay (with a lesson picker), so you can read the
  auto-scrolling script and record at the same time (the overlay used to hide the record buttons).
  **Pause/Resume** (\`MediaRecorder.pause()\`) lets a course be taped across several sittings, not one
  take; paused time doesn't count toward duration. **Download to device** saves the take locally as a
  safety net if upload fails. Uploads get **readable Cloudinary names** (\`witus/recordings/<course>/
  <lesson>\`, \`witus/uploads/…\`, \`witus/images/…\`) via a \`public_id\` instead of random ids, so assets
  are findable. Upload failures now surface **Cloudinary's actual error** instead of a generic
  "Upload failed" (config-fix guidance in user-task 43).
- ✅ **iOS audio playback fix** (\`fix/ios-audio-playback\`) — recorded lessons are WebM/Opus, which
  **iPhone/iPad Safari can't decode** (errored on iOS 16; played fine on Android). The player now
  requests an **MP3 rendition** from Cloudinary (\`f_mp3\`, cached after first play) for audio, so
  lessons play on every device — and the remaining-time readout is now accurate (WebM lacked duration
  metadata). \`playableAudioSrc()\` in \`src/lib/media.ts\`, unit-tested.
- ✅ **Change course instructor** (\`feat/change-course-instructor\`) — an admin (owner / brand_admin)
  can reassign a course to a different instructor from **Course settings** (validated + slug-collision
  guarded, ensures the new instructor has a username; no migration). \`/teach\` now shows admins
  **every** course on the brand with an \`instructor:\` byline, so a course bylined to a stale seed
  instructor (\`@witus-health\` / \`@trade-faculty\` / \`bam\`) is reachable to fix. Bulk data fix for the
  existing bylines: \`pnpm reassign:instructor --apply\` (user-task 42). Also the root-cause fix for
  "changes didn't persist" when the logged-in account didn't match the course's seed instructor id.
- ✅ **Teacher Help Center** (\`/help\`) — searchable in-app teacher guide (fuzzy search over
  task-oriented how-tos: courses, lessons, recording, pricing, publishing, live, quick-recall,
  feedback, sharing). Linked from the menu + Teach page. (help-documention.md)
- ✅ **Active recall** (\`feat/active-recall\`, stacks on \`feat/course-experience\`) — per-lesson
  **Quick-recall** cards: click-to-reveal answer + "I got it / Missed it" **self-grade**
  (\`lessons.recall_content\` + authoring in the lesson editor). Grades land in \`recall_attempts\`;
  the teacher course page shows **recall accuracy** (in-lesson signal vs quiz). Migration 0022.
- ✅ **Course-experience batch** (\`feat/course-experience\`) — **mark-complete** no longer jumps the
  page (flips in place + offers "Next lesson" on linear courses); **curriculum feedback** mirrors to
  the WitUS Inbox for the owner's courses + \`pnpm feedback:list\` CLI + each teacher sees only their
  own; **Report a problem** gains a **feedback** kind (bug/feedback/idea/other); **social-share
  tracking** (\`social_shares\` + \`/api/share\` + ShareButton) surfaced on the admin dashboard. Migration 0021.
- ✅ **SEO + mobile + admin-polish batch** (\`bundle/seo-mobile-admin-2026-07-01\`) — **per-page
  social previews** (\`/api/og\` content-relevant cards, \`metadataBase\`, Twitter cards, course/lesson
  page OG + description, Course JSON-LD); **cross-promo picker** now lists all ecosystem apps (adds
  RideWitUS [flagged URL], Shop.WitUS, Field Reporter); **admin sub-pages** render cleanly in the
  sidebar shell; **mobile fixes** (DNS-table overflow, share-button squeeze).
- ✅ **Course-admin suite** (\`bundle/course-admin-suite\`) — subscription **billing frequency**
  (monthly/annual) driving the Stripe interval; **unsaved-changes** guard on course settings;
  in-app **problem reporter** (site-wide button → \`/admin/reports\` triage + WitUS Inbox mirror +
  \`reports:list\`); **category management** (\`/admin/categories\` add/rename/delete + settings picker);
  **admin dashboard** (\`/admin/dashboard\` — learners, enrollments, completions + learner roster).
- ✅ **LMS UX batch** (\`bundle/lms-ux-2026-07-01\`) — **upload hardening** for the 100MB Cloudinary
  cap (shared chunked \`uploadToCloudinary\` + size guard; recorder live-size + auto-stop; "Stripe
  not configured" banner); **teacher catalog** (\`/teach\` fuzzy search + status filters + bulk
  publish/unpublish/reprice + quick toggle); **learner progress groups** on \`/my-courses\`
  (in-progress / not-started / completed). Backlog from this batch: **social sharing**
  (share school/course/module) + **mobile-first** pass + admin sidebar shell.
  **Now also in this bundle:** **social sharing** (ShareButton on school/course/lesson — native
  sheet on mobile, Copy/X/LinkedIn/Facebook/Email fallback); **admin sidebar shell** (persistent
  nav rail + mobile hamburger, replacing the flat card grid); **responsive site menu** (header
  collapses to a hamburger drawer on small screens — mobile-first.md).
- ✅ **Course-tooling suite** (\`bundle/course-tooling-2026-07-01\`) — **outbound-link click tracking**
  (privacy-light \`link_clicks\` counter + \`/api/link/click\` tracked redirect + teacher "Link usage"
  panel); **cross-promotion, 3 disclosed/opt-in ways** (per-course "Related WitUS tools" card,
  \`:::tool\` lesson callout, category→ecosystem catalog chip — WitUS-branded hosts only); **live
  admin course-picker** (attach a live session to a course, tenant-safe on fan-out); **in-app
  lesson recording** (offline-first audio: MediaRecorder → IndexedDB → queued Cloudinary upload →
  auto-attach + mark recorded). Migration 0020.

### Platform backlog
- ⚪ **Add RideWitUS to cross-promotion when it's public** — it's intentionally omitted from
  \`src/lib/ecosystem.ts\` because it isn't registered in the canonical \`gemini/witus/lib/products.ts\`
  yet (don't assert a guessed URL). CHECK BACK: once RideWitUS is registered there / goes public,
  add its real \`slug\` + \`href\` + \`tagline\` to \`ECOSYSTEM_PRODUCTS\` so it appears in the cross-promo picker.
- 🔧 **UI/UX overhaul** — north star **active-practice / mastery** (Duolingo + Brilliant + Khan).
  Decisions locked: home = **Direction B (mastery dashboard)**; lesson loop = **one idea → drill →
  coach → next**; gamification = **light layer now** (streaks/goal/mastery), **XP + badges Phase 2**,
  **leaderboards/leagues = per-tenant toggle**; accent = **per-tenant + disciplined**, feedback
  colors **constant** (green/amber/red/orange), tone **warm/encouraging, per-tenant dial**.
  Phases 0–2 **done** (prototypes; mastery dashboard + lesson shell + primitives; XP/badges +
  gamification flag + accent bar + searchable glossary). **Phase 3a done** (CourseCard w/ progress,
  my-courses grid, weekly leaderboard). **Phase 3b done** (course-page syllabus + instructor
  dashboard restyle). **Phase 3c done** (login card + schools cards + skip-to-content link; lang/alt/
  labels/aria/focus-visible verified). **Only remaining:** final **accent/tone values** (deferred to
  BAM) + any deeper a11y polish. The active-practice redesign is essentially complete. BAM likes CentOS.
- 🔧 **Accessibility / WCAG** — global \`:focus-visible\` ring + \`prefers-reduced-motion\` shipped;
  labeled copy controls; \`role=status\` aria-live form feedback. Remaining: full contrast audit +
  a comprehensive keyboard/screen-reader sweep across every surface.
- ✅ **Offline support (PWA)** — conservative per-origin service worker (network-first navigation +
  \`/offline\` fallback; cache-first hashed assets; API/cross-origin never cached), tenant-aware
  \`/manifest.webmanifest\`, and a \`NEXT_PUBLIC_DISABLE_SW=1\` kill-switch. Test on a preview first.
- ✅ **Offline lessons (pages + media)** — "Save for offline" caches the lesson **page itself**
  (HTML + RSC payload, via \`src/lib/offline.ts\`'s \`witus-pages-v1\` Cache), its audio/video
  (\`witus-media-v1\`), **and the JS/CSS the page needs to render** (\`witus-assets-v1\`) — plus the
  **next lesson**, so tapping "Next" keeps working offline. YouTube-style embeds still can't be
  cached (noted in-UI).
- ✅ **Pick exactly what goes offline** — a checkbox per lesson inside its collapsible section, a
  **select-all per section** (indeterminate when partial), a course-level select-all, and a sticky
  action bar with "Download selected (N)" / "Remove selected" + live progress. Locked lessons are
  never offered. The one-click "save whole course" path is preserved next to the syllabus heading.
- ✅ **Downloads manager (\`/downloads\`)** — everything saved on this device, grouped **course →
  section → lesson**, with **remove at every level** (lesson, section, course, "Remove all") and
  storage used (\`navigator.storage.estimate()\`). Reachable from the **header nav** (Account ▾ →
  Downloads, desktop *and* the mobile drawer), \`/dashboard\`, the **course page** (next to the
  save-for-offline controls, once that course has something saved), \`/offline\`, and the per-lesson
  saved state. Deliberately outside the \`(tenant)\` group so it makes **no DB/session
  call** and works with no network. Backed by an **offline manifest** (localStorage) mapping a
  cached path → course/section/lesson titles, since the Cache API only stores URLs; it's a hint
  layer, and \`reconcileOffline()\` treats the cache as truth (stale entries pruned, orphaned pages
  still shown + removable), so the UI can't claim a download that isn't there. Shared media is
  refcounted — removing one lesson never deletes audio another saved lesson still uses.
- ✅ **Offline actually works now (bug fix)** — the service worker was **never registering**:
  registration was attached to \`window\`'s \`load\` event from inside a \`useEffect\` that usually runs
  *after* \`load\` has already fired, and the error was swallowed by an empty \`.catch()\`. Downloads
  still wrote to the Cache API, so the UI went green while nothing existed to serve them —
  airplane mode gave the browser's own "no connection" page. Registration now happens immediately
  when the document is already complete; \`savePage()\` throws on a non-OK response; a save is only
  reported after it's **read back out of the cache**; and every "saved" affordance is gated on
  \`navigator.serviceWorker.controller\` (an **Offline diagnostics** panel on \`/downloads\` shows it).
  Verified end-to-end in real Chrome against a **killed server**, not just typechecked.
- ✅ **You can now FIND your downloads** (\`feat/downloads-link-inbox-mirror\`) — \`/downloads\` shipped
  working and then sat there **unlinked from the nav**, which is the same as not shipping it. It's now
  in **Account ▾ → Downloads** — one \`accountItems\` array feeds both the desktop dropdown and the
  mobile drawer, so it lights up on both — plus a **"Manage downloads"** exit on the course page next
  to the save-for-offline controls (only once that course has something saved, so it isn't permanent
  chrome). The nav item is a **real \`<a>\`, not a \`<Link>\`** (\`NavItem.hardNav\`): \`/downloads\` sits
  outside the \`(tenant)\` group precisely so the service worker can serve it with **zero network**, and
  a \`<Link>\` issues an **RSC fetch that dies offline** — on the one screen that exists for offline.
  \`tests/offline-nav.test.ts\` runs the **real \`public/sw.js\`** against a dead network and proves both
  halves: the hard navigation is served from the precache, and the RSC fetch a \`<Link>\` would have
  issued has nothing to serve. The **page itself stays ungated** — only the link is signed-in.
- ✅ **Every email is mirrored to the WitUS Inbox — with the credentials stripped**
  (\`feat/downloads-link-inbox-mirror\`) — only the pricing form mirrored before; magic-link sign-in,
  certificates, cohort invites and guardian invites left no record. The mirror now happens at the
  **chokepoint** (\`sendEmail\` in \`src/lib/mailer.ts\`), so an email added tomorrow is covered without
  anyone remembering to wire it up. **The security half is the point:** several of these emails *are*
  bearer credentials — the magic-link URL **signs you in**, \`/join/<token>\` grants **class
  membership**, \`/family/accept/<token>\` opens a **child's** records — so mirroring them verbatim
  would copy working credentials into a triage inbox. \`src/lib/email-redact.ts\` therefore strips every
  token-bearing URL from the mirrored body (**biased to redact when unsure**: unknown query-param
  secrets, token-redemption paths, token-shaped path segments, and anything unparseable), scrubs
  labelled raw secrets (PIN/password), and **never mirrors the HTML part** at all. \`/verify/<token>\`
  is deliberately **kept** — a certificate check is *meant* to be shareable. What crosses the boundary
  is **metadata** (recipient, subject, which email, tenant, timestamp, delivered/failure) plus the
  redacted body and the **routes** the stripped links pointed at — enough to answer "did the sign-in
  link go out?" without being able to use it. \`form_type\` is per kind
  (\`learn-witus-email:cohort-invite\`) so triage can sort. The mirror runs **after** the delivery
  attempt, no-ops when the Inbox is unconfigured, and is wrapped so it **can never fail a send**.
- ✅ **Resume where you left off** (\`feat/resume-where-you-left-off\`) — progress already recorded
  **skipping around** faithfully (\`lesson_progress\` is keyed on \`(user, lesson)\`, not a linear
  pointer), but a row was only written on **"Mark complete"** — opening a lesson and reading half of
  it wrote nothing, so the app couldn't tell "started and left" from "never opened". Resume then fell
  back to the *first incomplete lesson in course order*, which sent a learner who'd skipped ahead to
  lesson 20 back to their lesson-3 gap. Now: a **\`last_viewed_at\`** column (migration **0034**;
  deliberately NOT \`updated_at\`, which moves on any write — a quiz score is not a view) fed by a lean
  tenant-scoped **\`/view\` ping**; **\`src/lib/resume.ts\`**, the pure, unit-tested rule (last-viewed +
  unfinished → resume there · last-viewed + finished → roll forward · never opened → lesson 1); the
  **dashboard** Continue/Up-next follow it; and a **"Continue where you left off"** card on the course
  page **naming the lesson**. **\`watch_seconds\` is finally wired** — audio/video resumes mid-track
  (with a "Start over" escape), which matters most for FAA Part 107's 118 audio lessons. **Viewing is
  not completing:** \`completed_at\` alone still drives the %, sequential unlocking, and certificates.
  Recorded against the **active learner**, so a parent studying as a child resumes the *child*. Cheap
  on purpose (Neon egress): 30s server-side debounce + a client guard on the ping, one player write
  per ~20s and on pause/leave (never on the timeupdate tick), and the course page reads completion +
  last-viewed + positions in ONE query that *replaces* the old completed-ids query.
- ⚪ **Resume for multi-part audio + embeds** — the position is remembered for direct-media
  audio/video only. \`MultiPartPlayer\` (a long recording split into parts) would additionally need the
  part index, and YouTube/Vimeo embeds expose no time to us without their iframe APIs. Not started.
- ⚪ **WYSIWYG + markdown editor** (CentOS) for lesson authoring in the dashboard.
- ✅ **Rich lesson media** — native audio/video files get a full player; YouTube/Vimeo/Google
  Slides/PDF auto-embed (\`toEmbed\`). Cloudinary upload UI is the remaining piece (URLs work today).
- ✅ **Media chapters + synced transcripts** — clickable chapter jump-markers + a transcript that
  follows playback (active segment highlighted, click-to-seek). Player ships; **populating** the
  \`audio_chapters\`/\`transcript_content\` data per lesson is the remaining content task.
- ✅ **Language vocab UX** — glossary is now searchable + collapsible (no more long scroll).
- ✅ **Login 403 fixed** — was Better Auth "Invalid origin" on brand domains; trustedOrigins is now
  dynamic per registered tenant. (Not Mailgun — that was a wrong early guess.)
- ⚪ **Magic-link lands on wrong tenant** — clicking the BVC sign-in link opens learn.witus.online,
  not bettervice.club. Diagnosis: link is generated from \`BETTER_AUTH_URL\` (learn.witus.online);
  \`rewriteOrigin\` swaps the verify host, but the post-verify redirect resolves against the base URL.
  **Hold** pending BAM's new WitUS-Online auth system (discuss its impact on this app first).
- ✅ **Profile edit UI** — instructors edit displayName/bio/avatar/links at \`/teach/profile\`.
- ✅ **Fee-aware pricing** — set Free / one-time / subscription + price, with estimated net-after-fees.
  ⚪ Lifetime teacher promo + marketing campaigns (\`plans/future/11\`).
- ⚪ Tenant-settings admin (flags) self-serve.
- ✅ **Growing Belts latitude bands** — starts with 3 commodities, toggle the rest on/off (show-all /
  reset-to-3), and overlapping bands **blend** (mix-blend multiply) with a key explaining the mixed
  colors. (\`GrowingBeltsMap\`.)
- ⚪ **Gated specialization credentials** — a *real* credential (not just a completion badge): earned by
  finishing **shared core + one medium course + one subject course**, then surfaced on the learner
  profile in-app. Builds on the existing certificates system + CYOA branching; generalizes to any
  course family. First consumer is the **Documentarian program** (see Content). Plan:
  \`plans/future/12-documentarian-program.md\`.
- ✅ **My Field Log** (\`feat/field-log-schema\`) — a per-user documentation-project workspace for the
  Documentarian program: projects with story **legs** (sites/nodes of a chain, e.g. cocoa farm → factory
  → corporate office), a **link-only capture log** + **consent ledger**, **crews** (co-owned projects),
  and **self-attest + peer-review** assessment against the Trusted Documentation Rubric. This branch ships
  the **schema** (6 tables, **migration 0025**) + templates-in-code + **access-scoped CRUD API**
  (\`/api/field-log/*\`). Tenant-scoped; media is **never hosted** (links only); consent stored at the
  minimum. Logistics (budgets/itineraries) hand off to **RideWitUS**, not built here. The
  **\`/field-log\` UI** (\`feat/field-log-ui\`) ships the project list + workspace tabs (checklist, legs with
  a **chain-mode** toggle, capture log + **consent ledger**, journal), **offline-queued mobile capture**,
  **JSON + print/PDF export**, and the consent/legal disclaimers. **Peer/teacher review**
  (\`feat/field-log-review\`) is built: **self-attest → \`in_review\`** opens a project to a **review
  queue**; peers/teachers score it against the **Trusted Documentation Rubric** (8 criteria + safety
  gate; trust pillars must be Met) → **endorsements** count toward the credential (≥2), shown on the
  project; plus in-app **reminders** (consent/back-up/overdue-leg). **Course hooks**
  (\`feat/field-log-course-hooks\`) complete the MVP: a **\`:::field-log <template>\` lesson callout** →
  \`/field-log/start\` deep-link → creates a project, and the **Trusted Documentation credential**
  (self-attest + 2 endorsements) is **surfaced** on My Field Log (a 🎖 group + per-card badge). The
  fuller **gated course-family credential** (core+medium+subject) stays backlog, building on this signal.
  Spec: \`plans/future/14-field-kit.md\`, rubric: \`…/16\`.
- ✅ **Robust error UX** (\`feat/field-log-ui\`) — route error boundaries now **route the user back into
  the app** (Home / My Field Log) AND **auto-report to an admin** (reusing the \`/api/report\` →
  problem_reports + WitUS Inbox pipeline) with a reference id. The Field Log client surfaces clear
  400/500 messages and reports 5xx; offline is handled separately (queued, not flagged as a bug).
- ✅ **WanderLearn embed API** (\`feat/embed-finish\`, supersedes \`feat/embed-api\`) — a read-only,
  versioned, **API-key**-scoped public API (\`GET /api/v1/courses\` with \`limit\`/\`offset\` pagination,
  \`GET /api/v1/courses/[id]\`, and \`GET /api/v1/courses/[id]/lessons/[lessonId]\` for the **full lesson
  body/media**) so another app's backend (starting with WanderLearn, which is removing its own LMS)
  can render real lesson content. The tenant comes ONLY from the \`Authorization: Bearer <key>\` —
  never the host, never client input — via the \`tenant_api_keys\` table (**migration 0033**,
  sha256-hashed keys, raw key shown once). Brand-admin/owner UI to mint/revoke at **/admin/api-keys**.
  A chromeless **\`/embed/course/[id]\`** iframe view ships too (host-tenant-resolved, "Continue on
  Learn.WitUS" deep link out to the real course page). Every surface — footer, embed view, and every
  \`/api/v1\` JSON response — now carries the **educational-use disclaimer**
  (\`src/lib/disclaimer.ts\`); consumers are required to display it (see
  \`plans/wanderlearn-embed-integration.md\`, the consumer integration guide). DB-backed isolation
  tests cover the lesson endpoint too, incl. mismatched course/lesson pairings
  (\`tests/isolation/api-v1.db.test.ts\`).
- ✅ **Demo account** (\`feat/demo-account\`) — "Try the demo" on the **Acme** tenant's login page
  mints a session for a **shared demo account** (a \`brand_admin\` on Acme ONLY, so a visitor can try
  teacher/admin surfaces — authoring, \`/teach\`, \`/live\`, \`/cohorts\` — never a platform owner, never
  another brand). A nightly **Vercel cron** (\`/api/cron/demo-reset\`, midnight UTC, Bearer \`CRON_SECRET\`
  guarded) wipes the demo user's Acme data and reseeds a small baseline (a couple of enrollments +
  completed lessons) so every visitor gets a fresh sandbox. Session mint reuses the kid-login plugin
  pattern (a real signed Better Auth cookie — not hand-rolled). No migration; three new **optional**
  env vars (\`CRON_SECRET\`, \`DEMO_VISITOR_PASSWORD\`, \`DEMO_VISITOR_USER_EMAIL\`) — the feature stays
  dark until BAM sets them (see \`plans/user-tasks/62-demo-account-setup.md\` for the domain/env/seed
  steps).
- 🔧 **Platform + demo landing pages** (\`feat/platform-demo-landing\`) — two public marketing pages,
  shown only on Learn.WitUS itself (\`tenant.flags.recruiting\`, 404 elsewhere so a white-label school
  never advertises the platform underneath it): **\`/platform\`** pitches Learn.WitUS as a product for
  prospective school operators (own domain, cited/media-rich courses, live classes + cohorts, parent
  view, kid login, AI tutor); **\`/demo\`** explains the shared **demo teacher account** on the
  **Acme Academy** demo school (try every teacher/admin feature, no signup) and that its data
  **resets nightly at midnight**, with a **"Launch the demo school →"** button. The demo school's URL
  is resolved at request time from \`tenant_domains\` (\`getDemoSchoolUrl()\` in \`src/db/queries/demo.ts\`)
  — never hardcoded — preferring the primary non-local prod host, falling back to any prod host, then
  (dev only) \`acme.localhost\` on the dev port; if none exists yet the button degrades to a "not
  published yet" note instead of a dead link. Linked from a new **Demo** nav item, the home page's
  recruiting block, and the ecosystem footer. No migration.

## Content
- ✅ Languages es/fr/pt/it (tense spines); Ed.L.D., Cyber, US Civics 101, "How to Create a Course".
- ✅ **Pickleball — the first Sports course** (\`content/pickleball-course\`). New **Sports** category.
  "Play It, Question It, Build With It": **6 sections / 30 lessons / 6 quizzes × 15 questions**
  (banks >10 so the 10-question attempt cap actually rotates), 24 \`:::reveal\` checks, APA 7 +
  \`## Sources\` per lesson. Teaches the game (court, serve, kitchen, two-bounce rule, third-shot
  drop, dinking, doubles), then the parts a generic sports course skips. Two content traps drive
  the whole design: (1) **the rulebook is revised ANNUALLY** and the **2026** edition renumbered
  nearly everything, so every rule number is cited to the 2026 rulebook **by year** and none is
  asserted from memory — where a concept has no verified number, it's taught **without** one
  (e.g. the recommended court-BUILD area, which lives in USA Pickleball's court-construction
  guidance, not the rulebook); (2) **the "named after a dog named Pickles" story is DISPUTED**, so
  the course teaches the **dispute** — Joel Pritchard's own archived oral history says the dog came
  after the game, co-founder Barney McCallum told the dog story until he died, and the claim that
  would settle it (the dog's birth year) has **never been documented by anyone** — and turns it into
  a source-evaluation module. Same discipline on statistics: SFIA's coherent series (4.2M/2020 →
  24.3M/2025) is the one quoted, and a lesson teaches why SFIA said **8.9M** for 2022 while
  APP/YouGov said **36.5M** for the same year (different thresholds, neither lying). Rally vs.
  side-out scoring is presented as an **event-level choice** (Rule 15.C.2 — rally scoring is a
  *provisional option* a TD may pick, and is barred from Nationals), never as one universal system.
  The strongest section is the entrepreneur angle: court conversion + the **noise litigation** that
  actually kills those projects, coaching/certification, leagues and events, the paddle industry's
  delamination → **PBCoR** arms race, and the pro tours' post-merger contract correction.
  Re-run \`pnpm seed:courses\`. No migration.
- ✅ BVC real 21-episode content (lessons + quizzes + maps + Coffee assignment).
- ✅ **Lacrosse: The Creator's Game** (\`content/lacrosse-course\`) — new **Sports** category. 29
  lessons across 6 collapsible sections, 6 quizzes × **15 questions** each (90 total, every one
  carrying \`sourceLessonSlug\`), 22 \`:::reveal\` checks, 1 exercise. **Indigenous origins are
  foundational, not a footnote:** Section 1 is the Haudenosaunee game, led by the Onondaga Nation's
  own words and by an Indigenous historian (Allan Downey, Dakelh — *The Creator's Game*, 2018),
  with Indigenous-owned news (Windspeaker) carrying the current reporting. The course teaches
  **that** ceremonial medicine games exist, whose they are, and why they matter — and then stops:
  **no ceremonial procedure, songs, or ritual detail is reproduced**, and it tells the learner that
  the silence is deliberate. Men's, women's, box and Sixes are taught as the **four different games
  they are**; every rules lesson names the discipline AND the code before it gives a number, and
  every rule number was checked against the governing body's own PDF (WL men's field v1.1, women's
  field v1.1, Sixes/box v2.0, NCAA men's and women's). Haudenosaunee **Olympic eligibility for LA28
  is dated in-text** (IOC position as of March 25 2026; WL's qualification pathway as of July 1
  2026) and tells the learner to re-check rather than picking an outcome. Section 6 is the
  amateur/entrepreneur map — coaching, officiating, stringing, table crew, program-building — and
  Lesson 27 names the sport's access and equity problems honestly. **Re-run \`pnpm seed:courses\`.**
- ✅ **FAA Part 107 — sectioned, quizzed, and click-to-reveal** (\`fix/faa-sections-quizzes\`). The
  import had seeded 90+ lessons as ONE flat list (\`seed-faa.ts\` never set \`section\`, so the course
  built zero modules), only 5 of its 14 modules had a quiz, and the audio "[CHECK]" beat rendered as
  a plain "Quick check" heading with the answer in prose right below the question. Now: all 14
  modules from the import's own metadata become collapsible SECTIONS (course page + lesson-page
  contents rail), every module ends with a quiz (6 imported + **10 authored**, 207 questions total,
  in the committed \`scripts/data/faa-part-107-quizzes.ts\`), all 92 quick checks are
  \`:::reveal\` click-to-reveal, and the 180 recall beats became self-graded recall cards.
  Authored explanations cite 14 CFR only where a real rule governs. Re-run \`pnpm seed:faa\`
  (\`--dry-run\` prints the breakdown without touching the DB).
- ✅ **Quizzes cap at 10 questions per attempt and rotate** (\`feat/quiz-rotation-cap\`). No attempt in
  ANY course now serves more than **10** questions: \`toSafeQuiz()\` in \`src/lib/quiz.ts\` is the single
  seam every quiz passes through on its way to a learner, so the cap covers authored quizzes, the
  CSV-imported FAA ones (the 24-question practice exam, the 11-question Regulation Quiz 4), and any
  course authored later — no per-course opt-in. An author asking for fewer than 10 still wins; more
  than 10 clamps. Scoring already graded the **served subset** by question identity, so \`passingScore\`
  keeps meaning what it says. To make the rotation actually vary, each of the **10 authored FAA banks
  grew from 6–8 to 15 questions** (+79, every one answerable from that module's own lesson text).
  Re-run \`pnpm seed:faa\` for the new questions.
- ✅ **FAA Part 107 — the 11 module reviews the import was dropping** (\`feat/faa-review-lessons\`).
  Every module JSON carries a \`review\` key beside \`lessons\` — a ready-made recap — and
  \`seed-faa.ts\` had never read it, so the course shipped with none of them. All 11 (modules 1–11;
  modules 0/12/13 have \`review: null\` in the source) now import as a lesson at the END of their
  module, after the content lessons and **before the quiz** — review, then test. Their rapid-fire
  Q/A ("Question one. … Fact three. …") runs through the same \`:::reveal\` + recall-card conversion
  as the rest of the seed, so no answer is published in prose under its own question: **87 new
  click-to-reveal checks** (179 total) and 18 new recall cards, 0 left as prose.
- ✅ **Health/fitness courses migrated from CentOS + sectioned** — NASM CPT/CES/CNC, "Read Your
  Body's Data", ECS (Foundations/Fitness/Nutrition/Neuroscience) → Learn.WitUS; Speedway → ElementaryMBA.
  Gen-from-CentOS (\`pnpm gen:health\`), each course now has chapter/module/episode SECTIONS with
  section-scoped quizzes (≤10 Q). ECS copy-edited (em-dashes/AI-tells removed). \`pnpm seed:health\`/\`seed:speedway\`.
- ✅ **Speedway copy-edited** (em-dashes→clean, narration/production cues removed; citations preserved)
  and **ECS accuracy flags fixed** ("hundreds of millions of years"; the CECD sentence rewritten).
- ✅ **NASM CPT citations — resolved: cite the NASM CPT course as the primary source.** Every one of
  the 170 CPT lessons carries a \`## Sources & Further Reading\` block naming the **NASM Certified
  Personal Trainer (CPT)** curriculum + the National Academy of Sports Medicine (nasm.org) as its
  primary source, emitted by \`gen-health-data.ts\` (so a re-gen preserves it). Per-claim study
  citations remain a planned enhancement. (CES/CNC already carry real DOIs.) Re-run \`seed:health\`
  if the DB predates this. **Speedway S2/S3** still outline-only.
- ✅ **"Read Your Body's Data" metrics tracker — decided: keep on CentOS.** The course logs daily
  numbers in CentenarianOS's tracker (\`centenarianos.com/dashboard/metrics\`); the course now links
  learners there directly. witus does NOT build its own tracker (ecosystem: metrics live in CentOS).
- ✅ **Deepen the languages** (in branch) — per-tense fill-in EXERCISES (forgiving on accents) +
  a **sentence-evaluating coach**: the learner writes a sentence and the AI checks grammar/word-order
  grounded only in the course, cites the rule, and gives a next prompt.
- ✅ **Language DIALOGUE lessons** (es/fr/pt/it) — a "Dialogues" section per course with 3 realistic
  scenarios each (café order, asking directions, introductions): speaker-labeled transcript + English
  gloss + vocab list, a forgiving fill-in exercise, and a section quiz. Reuses only already-taught
  tenses (present, ser/estar·être/avoir·essere·ser/estar, ir+inf / futur proche, polite conditional).
  Wiring fix: \`seed:languages\` now routes authored courses through \`seedAuthoredCourse\` so
  \`section\`/\`exercise\`/\`quiz\` lessons actually persist (the old inline path only seeded text bodies).
  Next: civics depth.
- ✅ **Accent/special-character helper** — clickable accent bar on the exercise + sentence inputs
  (inserts é, ñ, ã, ç, è… into the focused field). Follow-up: per-language character sets.
- ✅ **BVC mezcal map point** — mezcal now has its own Commodity Map origin (Oaxaca / Santiago
  Matatlán), distinct from tequila's Jalisco (real CentOS geo data; cited Ep 12 + migration note).
  Beer (ep 8) and the tequila-mezcal course already exist, so **Season 2 (eps 8–14) is complete**.
- 🟡 Civics — ✅ **US Constitution 101**, ✅ **State vs Federal Power**, ✅ **How to Run for Office**,
  ✅ **How to Help a Campaign**, ✅ **Spotting Misleading Marketing**, ✅ **US/State/Local Government**
  all built (cited; National Archives / Constitution Annotated / FEC / FTC / FDA / NCSL / Census of
  Governments / Ballotpedia; case quotes verbatim; everything state-varying flagged + sourced, never
  asserted as universal). **Civics core complete.** Remaining: per-state template + US map (IN/AZ/AR).
- ✅ **Learning How to Learn** (cited cog-sci — retrieval/spacing/interleaving/metacognition; points to
  FlashLearn) + ✅ **Intro to Robotics & STEAM** (ElementaryMBA, cited NASA/JPL/micro:bit/Arduino/Code.org).
  Remaining: Ewe/Twi/Igbo (needs native review); per-episode BVC assignments; record audio.
- ✅ **AI courses F1–F4 BUILT** — F1 "AI Literacy" + F2 "Building with AI" (Learn.WitUS, cited NIST/
  OWASP/RAG); F3 "Young Makers: AI for Kids" (ElementaryMBA, grades 3-8, cited UNICEF/Common Sense/
  MIT Day of AI/Code.org/NIST); F4 "AI for Entrepreneurs" (ElementaryMBA, cited NIST + FTC + US
  Copyright Office + SBA). All coming-soon-gated. Next: the mastery ladders. Plan: \`docs/ai-curriculum.md\`.
- ✅ **LangGraph/LangChain courses** (\`feat/langchain-courses\`) — 3 courses vetted + rewritten from
  the \`lang-chain/*\` source repos to the WitUS standard (no AI tells, hide-answer **recall cards**,
  Key Takeaways, per-module quizzes, hyperlinks to repo/app/tagged-files/docs, contractions), under
  **AI & Technology**. All built: **"LangGraph in Production: The WitUS Triage Agent"** (2 mod, 8
  lessons + 2 quizzes), **"Reflection Loops in LangGraph"** (wanderlearn, 7 mod, 43 lessons + 7
  quizzes), **"Multi-Agent LangGraph with Per-Agent RAG"** (centenarian, 7 mod, 28 lessons + 7
  quizzes). 79 lessons, 16 quizzes, 158 recall cards total. Seed \`pnpm seed:langchain\` (auto-discovers
  \`scripts/data/langchain/*\`). Pipeline gained \`recallContent\` + \`relatedProducts\` (cross-promo).
  Next: BAM builds the **learning path** Triage → Foundation (wanderlearn) → Project (centenarian).
- ✅ **Admin-managed stream settings** (\`feat/stream-settings\`) — the persistent per-tenant stream
  (what would've been \`RTMP_STREAM_PLAYBACK_URL\` / \`STREAM_EMBED_CODE\` env vars) is now editable at
  **/admin/live**. Paste a provider embed (iframe-in-div) or a direct URL; the server **extracts the
  iframe src and allowlists its host** (\`src/lib/stream-embed.ts\`), storing only the URL in
  \`platform_settings\` (tenant-scoped, no migration). Renders on the Live page in a **sandboxed**
  iframe when no session is live. XSS-safe (never renders pasted HTML). Unit-tested. Falls back to
  \`RTMP_STREAM_PLAYBACK_URL\` / \`STREAM_EMBED_CODE\` env vars, so the value is set once. Viloud +
  Wave.Video hosts allowlisted. Multistream to socials = the \`stream-targets\` OBS-fan-out card.
- ⚪ **Paid streaming/media infra DEFERRED** — Mux / Cloudflare Stream (a thin media-library over a
  provider, spec \`plans/media-library-service.md\`) is **on hold until there are paying users**. Until
  then streaming stays **free**: the app embeds BAM's existing Viloud / Wave.Video player, no new spend.
- 🟡 **Admin/Operator workstream** (scheduled next) — a consolidated \`/admin\` dashboard unifying the
  owner links (domains/live/paths/leads/roadmap) + **tenant settings** (flags: gamification dose,
  AI tutor, age-gate, coming-soon, **accent/branding**) + **marketing** (campaigns/promos). ~2-3 branches.
- ⚪ **Schools: Trade School + ElementaryMBA stay separate, bridged** — ElementaryMBA's HS end graduates
  into Trade School via a learning path (not merged).
- ⚪ **Documentarian program** (BVC) — a course *family* teaching **trusted, cited documentation**, built
  from BAM's **Ghana trip** as the live case study. Shape: a shared **Foundations & Trust core** (ethics,
  consent, sourcing, representation) → a **standalone Archives & Records** course → a **medium ladder**
  (Words & Photo → Sound/Podcast → Motion/Film — lightest→richest tooling) → **medium × subject
  specializations** wired to the **CYOA** tool. Capstone: **one Ghana subject documented four ways**.
  Beginner-first; earns a gated specialization credential (see Platform backlog). Plan:
  \`plans/future/12-documentarian-program.md\`.
- ✅ **The Great Migration** (Culture & History) — 12-lesson homeschool course covering the two
  waves, the three migration streams, the Black press, the Harlem Renaissance, music (blues→jazz→
  gospel), faith/foodways/mutual aid, civil rights, redlining, and the New Great Migration reversal
  — incl. the Pacific NW/Vanport Second-Migration thread. Cited (National Archives, Census Bureau,
  Smithsonian, BlackPast, Schomburg *In Motion*, Wilkerson/Gregory/Grossman); two claims flagged
  unverified in fact-checking (Philadelphia's "500%" figure, a Ray Atkeson 1943 photo attribution)
  were cut/softened rather than asserted. Ships with the **Great Migration map** (see Platform
  Maps). \`pnpm seed:courses\` picks it up. Companion to Hoodoo + Civics.
- ✅ **Golf: Play It, Know It, Work In It** (**Sports** — a new category) — 42 lessons in 6 sections
  (How to Play · The Rules · Strategy · History · Tours & Leagues · Opportunities), for high school
  students. Rules cited to the 2023 code the USGA and The R&A write jointly; the World Handicap
  System taught from the verified figures (launched Jan 2020, max Index 54.0, 54 holes for an
  initial index, Index = average of the **lowest 8 of the last 20** — i.e. potential, not average).
  The **History** section is the spine: the PGA's Caucasian-only clause (1934–Nov 1961, acknowledged
  but never apologized for) and the three documented evasions institutions used to stay segregated —
  rename the tournament an "Invitational," lease the municipal course to a sham "private club," or
  sell it — plus the statutory reason they worked (**Title II does not list golf courses at all**;
  42 U.S.C. § 2000a(b), and § 2000a(e) exempts private clubs), which is why desegregation ran
  through the **Fourteenth Amendment**. Centerpiece is a **primary-source lesson**: students read the
  **January 1962 *Golfdom*** trade report of the repeal and find it credits "difficulties in making
  tournament arrangements" and names none of Sifford, Spiller, Rhodes, or Mosk — the article isn't
  false, it's *emptied*. Corrections carried deliberately against widely published error (incl. the
  PGA TOUR's own site): *Holmes* was **vacated**, not reversed; the Greensboro Six did **not** lose
  5–4 (*Wolfe*, 1960, dismissed the appeal); *Palmer v. Thompson* is a **pool** case. **Opportunities**
  is the payload: the **2022 amateur-status rewrite legalized sponsorship/endorsement/NIL/expenses/
  free equipment** (paid instruction is the one door still shut, and non-cash payment counts), and
  the **U.S. Open is genuinely open** — any amateur at a **0.4** Handicap Index may enter, and the
  USGA accepted a record **10,202 entries** for the 2025 U.S. Open. No unverifiable figure is printed
  (no NGF standalone Black-participation %, because none exists — the absence is taught as the
  finding; no U.S. Women's Amateur handicap limit, because it couldn't be verified).
  \`pnpm seed:courses\` picks it up. First of the five sports courses.
- 🔧 **Croquet** (\`content/croquet-course\`, Sports) — 36 lessons across **8 sectioned modules**
  (28 teaching + 8 section quizzes, each quiz a **15-question bank** so the 10-question attempt cap
  actually rotates; every question carries \`sourceLessonSlug\`). The load-bearing constraint:
  **croquet is not one game.** Golf Croquet and Association Croquet (WCF), American Six-Wicket
  (USCA) and informal garden croquet have different courts, turn structures and scoring, so **every
  rules lesson names the code it teaches in bold in its first line** and the one lesson that compares
  them says so explicitly. Handicaps are taught **per code**, incl. the trap that American and
  Association handicaps are **different scales** (the USCA says add two) — and the course **refuses
  to quote a numeric range** for the American scale because the USCA publishes no floor.
  **Every rule number was re-read in the governing body's current rulebook**, not recalled: 42 of 45
  verified verbatim, three corrected (AC choice-of-ball is **Law 2.6.1**, not 2.3; the USCA shot
  clock is **Rule 13.8** with its "in a time limit game" qualifier restored, not "13.8(a)"; USCA
  **17.1 is "Option to Play Either Ball"**, an experimental rule). Where **no** rule number exists the
  course says so instead of inventing one — "break" is not defined in the AC Laws, "jump" appears
  **zero** times in the GC Rules, "carryover deadness" appears **zero** times in the USCA rules.
  Sections 6–8 do the part croquet courses skip: **history you can actually check** (incl. a
  "stories we cut" lesson that shows its own working — the All England Croquet Club was founded on
  the **Strand**, not at Wimbledon; the croquet women were **not** the first female Olympians), the
  club/handicap ladder, and the real openings for an amateur or entrepreneur. Unsourceable folklore
  (a Boston croquet "ban") was **cut**, not softened. \`pnpm seed:courses\` picks it up; **no
  migration**.
- ✅ **Know Your Rights at Work** (Civics) — the **labor-side sibling** of *The Bill of Rights: Know
  Your Rights*, and the educational layer under Work.WitUS's union-contract product. 19 lessons across
  **6 sections** (13 teaching · 2 exercise · 6 quizzes, banks of **15** so the 10-question attempt cap
  actually rotates; every question carries an \`explanation\` + \`sourceLessonSlug\`). Six women, one
  argument in six movements: **Addie Wyatt** (what a contract *is* — the seniority clause that saved her
  job at seventeen) · **Dolores Huerta** (building power outside the room) · **Crystal Lee Sutton** (what
  retaliation *costs* the person who absorbs it) · **Sara Nelson** (leverage) · **Fran Drescher +
  Meredith Stiehm** (AI likeness, residuals, and an employer restructuring the job so the old contract
  stops mapping onto it). **The law is quoted, never guessed**: NLRA §7 (29 U.S.C. § 157), the §2(3)
  exclusions + §2(11) "supervisor" (§ 152), §8(a)(1)/(3)/(4) (§ 158), §10(b)'s **six-month** charge clock
  and §10(c)'s **make-whole-not-punitive** remedy (§ 160), 29 C.F.R. § 102.9 ("**any person** may file"),
  and the **Railway Labor Act** (45 U.S.C. § 156 + the NMB's own release/30-day-cooling-off process) —
  because flight attendants are *excluded* from the NLRA, which is the whole reason Nelson's leverage
  lesson works. \`NLRB v. Washington Aluminum\`, 370 U.S. 9 (1962) anchors protected concerted activity:
  **no union required**. At-will employment **varies by state**, so the course says so and names Montana
  as the statutory exception rather than asserting one state's rule as universal. **Five calendar errors
  corrected on purpose**: Wyatt was one of **twelve** women on Time's 1975 cover (Time named "American
  Women" *collectively*), her 1976 election was to the **Amalgamated Meat Cutters** (UFCW didn't exist
  until 1979), Sutton's mill was **Roanoke Rapids** (and the union was the **TWUA**, not ACTWU), Drescher
  and Stiehm are **former** presidents (both left office Sept 2025), and Nelson's unverifiable "Time 100"
  credit is **dropped and said so in-lesson**. **Sutton's court case does not exist** — a published-
  opinions search returns no case bearing her name, so the course teaches retaliation from the statute and
  **says so out loud** instead of inventing a citation. The **Huerta/Chavez** record (March 2026) is
  addressed **directly and cited** (AP/NPR/CalMatters), dated, adjudicating nothing and inventing no
  quote: *a movement is not a saint; the person who built the power can also be harmed inside it.*
  \`pnpm seed:courses\` picks it up; **no migration**.
- ✅ **Tennis: Play It, Read It, Work In It** (Sports) — 41 lessons across **8 sections**, each with
  its own quiz (banks of **15–16** questions, so the 10-question attempt cap actually rotates):
  the rules · **hitting the ball** (grips, strokes, footwork) · **strategy** (the First 4 Shots,
  Serve +1, court geometry, doubles) · origins & amateurism · **the people** · how the sport is
  organized · opportunities for amateurs · opportunities for entrepreneurs. **Governance is stated
  correctly**: the **ITF publishes the Rules of Tennis**; the **ATP/WTA tours and the four Slams
  layer their own conditions on top — and the Slams are run by their national federations and the
  Grand Slam Board, not by the tours.** Rule numbers are read out of the ITF 2026 PDF, never guessed
  (tie-break is Rule 5(b), not a rule of its own; service let is Rule 22; No-Ad/No-Let/match
  tie-breaks are Appendix VI), and formats that **vary by event** are named as varying rather than
  asserted as universal. The **equal-prize-money timeline is the honest one**: US Open **1973**
  (first, via a boycott threat + a Bristol-Myers cheque), Australian Open **1984** → **reverted to
  paying men more by 1996** citing TV ratings → restored **2001**; Wimbledon **2007** (22 Feb, last
  to offer *any* equal pay); Roland-Garros **2006 champions only → 2007 full draw** (16 Mar, last to
  *full-draw* equality) — a **34-year** climb, with the WTA's rest-of-tour pathway still pledged for
  **2027/2033**. Covers the segregated **American Tennis Association**, **Althea Gibson**, **Arthur
  Ashe**, **Billie Jean King**, the **Original 9**, the founding of the **WTA**, and the **Open era
  (1968)**. **No invented statistics**: where full per-round prize-money distribution data doesn't
  exist, the course says so instead of fabricating a table. \`pnpm seed:courses\` picks it up.
- ✅ **Football: Play It, Read It, Work In It** (Sports) — 42 lessons across **8 sections**, each with
  its own quiz (banks of **15**, so the 10-question attempt cap actually rotates; 120 questions, every
  one carrying an \`explanation\` + \`sourceLessonSlug\`). The game the US calls soccer, called
  **football** throughout at BAM's instruction: the game & the pitch · **how to play** (first touch,
  dribbling, finishing, defending, goalkeeping) · **the Laws** · **strategy** · **history** · who runs
  what & the leagues · money & labour · **opportunities for amateurs and entrepreneurs**.
  **Governance is stated correctly, and this is the load-bearing part**: the **Laws of the Game are
  written by THE IFAB, not FIFA** — FIFA holds **4 of 8 votes**, a change needs a three-quarters
  majority (**6**), so FIFA *cannot change a Law alone*. There are **17 Laws**, revised annually, and
  every Law statement is read out of the official **Laws of the Game 2026/27** PDF (effective 1 July
  2026) with its Law number — never guessed. **Offside is Law 11** (hands/arms are not considered),
  **handball sits inside Law 12** (the current text — the old "accidental handball anywhere in the
  build-up voids the goal" clause is **gone**, and the course says so), and **VAR is Law 5 §4**
  (including the *new* 2026/27 competition-option corner-kick review). **Contested numbers are taught
  AS contested, never resolved to a headline**: the Dick, Kerr Ladies' Goodison Park crowd (c.
  46,000–53,000) and **Qatar 2022**, where four figures are shown to answer four *different* questions
  — the Guardian's **6,500** (all-cause, five nationalities, a decade), Qatar's **37** (stadium sites
  only), Al-Thawadi's own **400–500** (tournament-connected projects), and the **ILO's 50** (work-
  related, 2020) — landing on the honest finding that the toll is unknown *because the deaths were not
  investigated*. History is told honestly: **ball games long predate England** (FIFA's own careful
  cuju claim, with **no** fake family tree to Wembley), the **1863** codification, and a full lesson on
  **the FA's 1921 ban on women's football, which lasted 50 years** — the resolution quoted verbatim
  ("quite unsuitable for females"). The entrepreneur section is concrete and cited: **refereeing** as a
  real paid job from age **13** (one association's *published* pay scale, \$30–\$90/game), the coaching
  licence ladder, the **pay-to-play** problem (Aspen/Project Play: soccer ≈**\$1,188**/child/season;
  **24% vs 40%** participation by household income), and the honest odds (**NCAA's own** table: **1.4%**
  of HS boys and **2.8%** of girls reach D-I — and the NCAA publishes **no** HS→pro figure for soccer,
  which the course explains rather than inventing). **No fabricated statistics, quotes or people**; the
  "soccer" etymology is verified as a **British** coinage and the undocumented Wreford-Brown
  attribution is explicitly **not** repeated. \`pnpm seed:courses\` picks it up.
- 🔧 **/explore is a landing page now** (\`feat/explore-landing\`) — the Commodity Map page was an
  \`<h1>\`, one sentence, and the map: a tool page that explained nothing and asked for nothing. It
  now answers **what is this → what will my student learn → why trust it → what next**, for the
  people who actually buy (parents, teachers, homeschoolers), each addressed on their own terms.
  **The map is still the centrepiece** — short hero, map immediately below it, both CTAs pointing
  back at it. **Every figure on the page is a count of the tenant's own rows** (episodes, origins,
  seasons, belt countries, lessons, courses, free courses, cited sources, verified sources, tracked
  claims, named instructors) via a new tenant-scoped \`src/db/queries/explore.ts\` — \`course_sources\`
  / \`course_claims\` carry no \`tenant_id\`, so every aggregate INNER JOINs \`courses\` and filters
  \`courses.tenant_id\`; that join IS the boundary. **No invented stats, no efficacy claims, no
  testimonials**; the one pedagogical claim carries three real, verified APA 7 citations rendered
  on the page (Smith 2002; Sobel 2004; McGrew et al. 2018). The FAQ answers only what the repo can
  answer truthfully (cost is derived from \`price_type\`) — time commitment is still **deliberately
  absent** pending BAM (\`plans/user-tasks/72\`); **age range is now confirmed (high school)** and
  **standards alignment now ships** (see below), so both have been removed from that list. Hero
  copy is per-tenant overridable via \`platform_settings\`
  (\`explore_headline\`/\`explore_subhead\`/\`explore_intro\`) with brand-neutral defaults — **no
  migration**. Metadata/OG/JSON-LD tenant-scoped. Mobile-first (no 320px overflow; ≥44px targets).
- 🔧 **/explore: pricing conversation + the map fixes** (\`feat/explore-pricing-contact\`) — closes
  three of the four open questions from \`plans/user-tasks/73\` and three map reports.
  **Age range: answered** — "Designed for high school students" now sits under the \`<h1>\` and in the
  FAQ, per-tenant overridable via \`platform_settings.explore_audience\` (**no migration**).
  **Time commitment: still TBD, and the page SAYS so** rather than deriving an hours-per-week figure
  from \`lessons.duration_seconds\` — a parent plans a school year around that number, so a wrong one
  is worse than none. **Standards alignment: still absent**, with a marked insertion point for the
  separate \`src/lib/standards.ts\` work. **Pricing: a "contact us for pricing" form** (\`#pricing\`) —
  name / email / role / students / message, **Zod-validated server-side**, tenant resolved from the
  HOST, honeypot + a per-IP sliding window (the \`/api/v1\` limiter, extracted to
  \`src/lib/rate-limit.ts\` and now shared rather than duplicated). No captcha dependency, and **no
  price is stated anywhere** — that is the point. It **persists the lead FIRST and emails second**:
  a Mailgun failure logs loudly and returns \`notified: false\`, but the enquiry is already in
  \`leads\` and readable at \`/admin/leads\`, because a lost lead is a lost sale. **Migration:
  \`0034\` adds \`leads.inquiries\` (jsonb, append-only)** — the (tenant, email) unique constraint
  meant a repeat enquiry was being silently dropped by \`ON CONFLICT DO NOTHING\`; it now appends.
  **Map fixes:** the season filter is **gone** (it was a hardcoded \`SEASONS\` array carrying ONE
  brand's episode titles into a multi-tenant component, and it hid 2/3 of the pins from a first-time
  visitor) — season survives as a data-derived heading in the episode list; clicking an episode
  **no longer navigates away** but opens a shared \`<EpisodeDetail>\` panel in place (lessons, cited
  sources, then an explicit "open the episode" second step), keyboard-openable with Escape + focus
  return; and **sharing /explore now previews the actual map** (\`/api/og?map=1\` renders the tenant's
  OWN pins via d3-geo → SVG → data URI, falling back to the branded card if it has no pins).
- 🔧 **Standards alignment** (\`feat/explore-standards\`) — a \`/standards\` page, linked from
  \`/explore\`, answering the one question a teacher or a reporting homeschooler asks first: *which
  requirements does this meet, and which lesson meets them?* **41 standards (21 fully covered, 20
  partially) across 9 frameworks in 2 jurisdictions**, each with its **exact code**, the
  standard's **verbatim text**, a link to the
  **publisher's own document**, the **lessons** that cover it, and a \`full\` | \`partial\` flag —
  partials must state what is missing (a unit test enforces it). Indiana: Economics (2026), Geography
  and History of the World, World History and Civilization, U.S. History, ELA 9-10 and 11-12 (all
  2023 IDOE). Washington, D.C. resolves to **three** frameworks, because DC has no homegrown set:
  **Common Core** (ELA, adopted Jul 2010), **NGSS** (science, adopted Dec 2013) and **DC's own K-12
  Social Studies Standards** (Jun 2023) — all three confirmed on OSSE's own pages. The page states,
  above the claims, that **we** did the mapping (nobody endorsed it), the **date every standard was
  fetched**, and that standards get revised. Honest omissions are published too: **no mathematics**,
  **almost no science** (one NGSS PE, partial — there is no lab work here and we say so), and no DC
  citation for Prohibition/mass incarceration because DC's standards contain none. Tenant-scoped:
  the table is keyed by course **slug** and \`db/queries/standards.ts\` resolves slugs against
  **this** tenant's published courses, so a Season-1-only school (Learn.WitUS, ElementaryMBA) can
  never surface a Season 2/3 standard, and a tenant hosting none of the curriculum **404s**.
  Printable + one-click copy-as-plain-text for state filings. **No migration.**

## Operator
- 🟡 Merge open branches → \`db:migrate:prod\` → \`seed:bvc:real\` / \`seed:map\` / \`seed:owner\`
  → regen embeddings. Set \`PLATFORM_OWNER_EMAIL=bam@awews.com\`.
- ⚪ After merging the health/vetting work: \`pnpm gen:health\` → \`seed:health\` / \`seed:speedway\`.
- ✅ **Authoritative-values rule** — added to ecosystem + repo CLAUDE.md (never assert guessed external
  values; born from the DNS A-record false-negative). Still TODO: commit the ecosystem copy in \`gemini/\`.
- ⚪ Inform CentOS that witus-learn hosts BVC.
- ✅ **Future classes & features** (\`feat/admin-future-work\`, **migration 0036**) — an owner-only
  \`/admin/future\` board for everything proposed but not yet built: the **She Did the Work** course
  proposals (9 courses A–I, the build order, the 14 factual errors in the source calendar, the
  rights/permissions table) plus a **research seed per subject** (29 — 5 that carry a course alone,
  Sage Steele cut, Mary Bassett deferred to the health vertical), the extra **civics** courses, and
  the **Travel & Living Abroad** track. Each item renders its full markdown and takes a **note** →
  \`future_work_notes\` → read from a terminal with **\`pnpm future:list\`** (no copy-paste; same shape
  as \`reports:list\`). The content is **committed** (\`src/lib/future-work-content/*\`, generated from the
  gitignored \`plans/future-courses/\` notes by \`pnpm gen:future-work\`), so the page renders in
  production — nothing reads \`plans/\` at runtime.
`;
