// The internal roadmap, committed so it renders in-app at /admin/roadmap (platform
// owner). Keep it current as work lands — see the CLAUDE.md docs-maintenance rule.
// Status keys: ✅ done · 🔧 in branch · 🟡 next · ⚪ backlog · ❓ needs decision.

export const ROADMAP = `# Learn.WitUS, Roadmap

## Platform
- ✅ Phases 1-7 + 5a-d (isolation, catalog, auth, enrollment, Stripe, prerequisites, CYOA,
  embeddings, pedagogy/trust, certificates).
- ✅ AI tutor (multi-agent + streaming + LangSmith + per-tenant + paid-only + isolation test).
- ✅ Maps: Commodity (Episode Origins), Growing Belts, Languages atlas, Civics (blue/red US map),
  **Great Migration** (green/black/red Pan-African map, 3 migration streams + Chicago/Harlem/
  Detroit/Vanport clickable feature cards, \`/great-migration-map\`), **map lessons**.
- ✅ Quiz answer-links; **markdown rendering** in lessons.
- ✅ Phase 8: instructor dashboard, feedback review queue, self-serve domains, per-season age-gate,
  assignments, live-streaming, brand directory, lead funnel, learning paths.
- ✅ Instructor profile + re-home all courses to **BAM** (\`seed:owner\`); admin **Roadmap** page.
- ✅ **Self-serve custom domains, Vercel automation** (\`feat/vercel-domains\`), a brand_admin
  attaching their **own** domain (e.g. \`theirschool.com\`) at \`/admin/domains\` no longer needs BAM: the
  app registers it with the Vercel project via the Vercel Domains API, shows the DNS records to set at
  their registrar, and a **"Check verification"** button polls status until it flips to ✅ Verified.
  \`<slug>.learn.witus.online\` subdomains are unaffected, the wildcard zone covers them instantly, so
  the app skips the Vercel API call for those. Degrades gracefully to the old manual flow if
  \`VERCEL_API_TOKEN\`/\`VERCEL_PROJECT_ID\` aren't set. Per-tenant cap of 5 domains. No migration.
- ✅ **Operator overview** (\`feat/operator-overview\`): an owner-only \`/admin/overview\` dashboard
  consolidating cross-cutting signals in one place: **open problem reports**, **new curriculum
  feedback**, **recent leads + enrollments** (each a headline number + a few recent rows + a link to
  the full page), and a **migration-status indicator** comparing migrations on disk
  (\`src/db/migrations/meta/_journal.json\`) against \`drizzle.__drizzle_migrations\` for the current
  database, surfaces "N applied / M on disk, run \`pnpm db:migrate:prod\`" instead of guessing
  whether prod is behind. Degrades gracefully (shows latest-on-disk only) if the bookkeeping table
  can't be read. No migration; reuses existing tenant-scoped query helpers.
- ✅ **Learner dashboard** (\`feat/student-dashboard\`): a signed-in learner's stats + profile hub
  at \`/dashboard\`: current/best **streak**, lessons completed, **recall accuracy**, **quiz average**,
  a 7-day activity strip, earned **credentials** (each links to \`/verify/[token]\`), XP/level + badges
  (shown only when the tenant's gamification flag is \`full\`), and inline **profile editing**
  (reuses \`/api/profile\`). Reuses \`getLearnerDashboard\` + a new \`getLearnerStats\`; no migration.
- ✅ **Cohorts** (\`feat/cohorts-open\`): private classes for live class management (home-school #1):
  **any signed-in user** (not just brand admins) creates a **cohort** at \`/cohorts\`, invites
  students by email (one-time link; falls back to a copyable link if Mailgun isn't sending), and
  manages a **roster** at \`/cohorts/[id]\` showing **● here** for anyone currently present on
  \`/live\`. Students accept at \`/join/[token]\` and land on \`/live\` enrolled. Tenant-scoped tables
  \`cohorts\`/\`cohort_members\`/\`cohort_invites\` (migration 0029).
- ✅ **Family** (\`feat/cohorts-family\`): a read-only parent view (Model A of the hybrid: kids keep
  their own accounts). From a cohort roster, a teacher **invites a parent** by email per student
  (\`/api/cohorts/[id]/guardian-invite\`); the parent accepts at \`/family/accept/[token]\` and sees, at
  **/family**, read-only **course progress**, **grades** (recall + quiz), **credentials**, and
  **live-class attendance** for **their linked child(ren) only**, gated by \`isGuardianOf\` on every
  per-child read. Attendance is derived for free from the \`/live\` presence heartbeat (a cohort member
  seen present on a day is marked attended that day, no separate check-in flow). Tenant-scoped tables
  \`guardians\`/\`guardian_invites\`/\`cohort_attendance\` (migration 0030). Model B (parent-managed
  sub-profiles for kids too young for their own account) ships in \`feat/family-model-b\`.
- ✅ **Kid login, avatar + PIN** (\`feat/kid-login\`, on \`feat/family-model-b\`), a **per-child
  parent choice** of how a managed child signs in: None / Email / **Avatar+PIN**. Young kids with no
  email sign in **themselves** at **/kids** (also linked "I'm a student" from \`/login\`): enter the
  class **class code** → tap their **animal avatar** → enter a **4-6 digit PIN** → land on their OWN
  \`/dashboard\` (their own low-privilege session). Privacy: the screen never lists children, a bad
  class code reveals nothing (generic "class not found"; the avatar grid only appears for a valid
  code). PINs are **scrypt-hashed** (salted, constant-time compare, never plaintext) and
  **rate-limited** per child (5 wrong tries → 5-min lock). Session minted by a dedicated Better Auth
  plugin endpoint (Option A, no password login exposed to normal users). Parent controls live on
  \`/family\`; the teacher enables/rotates a cohort's class code (\`/api/cohorts/[id]/class-code\`).
  Adds \`user_profiles.login_method/avatar_key/pin_hash/pin_set_at\`, \`cohorts.class_code\`, and a
  \`kid_login_attempts\` table (migration 0032).
- ✅ **Recording batch** (\`feat/change-course-instructor\`): the in-app audio recorder is now
  embedded **inside** the teleprompter overlay (with a lesson picker), so you can read the
  auto-scrolling script and record at the same time (the overlay used to hide the record buttons).
  **Pause/Resume** (\`MediaRecorder.pause()\`) lets a course be taped across several sittings, not one
  take; paused time doesn't count toward duration. **Download to device** saves the take locally as a
  safety net if upload fails. Uploads get **readable Cloudinary names** (\`witus/recordings/<course>/
  <lesson>\`, \`witus/uploads/…\`, \`witus/images/…\`) via a \`public_id\` instead of random ids, so assets
  are findable. Upload failures now surface **Cloudinary's actual error** instead of a generic
  "Upload failed" (config-fix guidance in user-task 43).
- ✅ **iOS audio playback fix** (\`fix/ios-audio-playback\`): recorded lessons are WebM/Opus, which
  **iPhone/iPad Safari can't decode** (errored on iOS 16; played fine on Android). The player now
  requests an **MP3 rendition** from Cloudinary (\`f_mp3\`, cached after first play) for audio, so
  lessons play on every device, and the remaining-time readout is now accurate (WebM lacked duration
  metadata). \`playableAudioSrc()\` in \`src/lib/media.ts\`, unit-tested.
- ✅ **Teach page lesson numbering:** the instructor lesson list now labels each lesson with its
  **"Module N · Lesson M"** position (module order from \`course_modules\`, lesson order within its
  module), so a lesson a learner reports by number ("Module 2, Lesson 7") is easy to find on the
  manage-course page. \`teach/[courseId]/page.tsx\` + \`lessons-manager.tsx\`.
- ✅ **Change course instructor** (\`feat/change-course-instructor\`): an admin (owner / brand_admin)
  can reassign a course to a different instructor from **Course settings** (validated + slug-collision
  guarded, ensures the new instructor has a username; no migration). \`/teach\` now shows admins
  **every** course on the brand with an \`instructor:\` byline, so a course bylined to a stale seed
  instructor (\`@witus-health\` / \`@trade-faculty\` / \`bam\`) is reachable to fix. Bulk data fix for the
  existing bylines: \`pnpm reassign:instructor --apply\` (user-task 42). Also the root-cause fix for
  "changes didn't persist" when the logged-in account didn't match the course's seed instructor id.
- ✅ **Teacher Help Center** (\`/help\`): searchable in-app teacher guide (fuzzy search over
  task-oriented how-tos: courses, lessons, recording, pricing, publishing, live, quick-recall,
  feedback, sharing). Linked from the menu + Teach page. (help-documention.md)
- ✅ **Active recall** (\`feat/active-recall\`, stacks on \`feat/course-experience\`): per-lesson
  **Quick-recall** cards: click-to-reveal answer + "I got it / Missed it" **self-grade**
  (\`lessons.recall_content\` + authoring in the lesson editor). Grades land in \`recall_attempts\`;
  the teacher course page shows **recall accuracy** (in-lesson signal vs quiz). Migration 0022.
- ✅ **Check-yourself self-grading + history** (\`feat/reveal-self-grading\`): every inline
  \`:::reveal\` **Check yourself** card (1,045 across the catalog, the FAA course's end-of-lesson
  checks included) now offers the same "I got it / Missed it" self-grade as the quick-recall cards;
  fixed at the COMPONENT level, so it covers every course at once. Grades reuse \`recall_attempts\`
  with **no migration**: reveals store a negative, prompt-hashed \`prompt_index\` (identity survives
  reorders; sign discriminates check vs card, \`src/lib/reveals.ts\`), verified server-side against
  the lesson body and attributed to the ACTIVE learner (act-as safe). Signed-out reveals still work
  (sign-in nudge, never an error); offline grades queue in the outbox and sync on reconnect, as now
  do **lesson completions and instructor lesson edits** (both previously used a bare fetch and were
  silently dropped offline; they now fall back to the same outbox and replay on reconnect).
  \`/dashboard\` grows a **Check-yourself history** section: **review again** (spaced-recall assist,
  last-missed or stale-missed items), **recently missed** (with lesson links), and **miss-rate per
  course**. (check-yourself-tracking.md)
- ✅ **Course-experience batch** (\`feat/course-experience\`): **mark-complete** no longer jumps the
  page (flips in place + offers "Next lesson" on linear courses); **curriculum feedback** mirrors to
  the WitUS Inbox for the owner's courses + \`pnpm feedback:list\` CLI + each teacher sees only their
  own; **Report a problem** gains a **feedback** kind (bug/feedback/idea/other); **social-share
  tracking** (\`social_shares\` + \`/api/share\` + ShareButton) surfaced on the admin dashboard. Migration 0021.
- ✅ **SEO + mobile + admin-polish batch** (\`bundle/seo-mobile-admin-2026-07-01\`): **per-page
  social previews** (\`/api/og\` content-relevant cards, \`metadataBase\`, Twitter cards, course/lesson
  page OG + description, Course JSON-LD); **cross-promo picker** now lists all ecosystem apps (adds
  RideWitUS [flagged URL], Shop.WitUS, Field Reporter); **admin sub-pages** render cleanly in the
  sidebar shell; **mobile fixes** (DNS-table overflow, share-button squeeze).
- ✅ **Course-admin suite** (\`bundle/course-admin-suite\`): subscription **billing frequency**
  (monthly/annual) driving the Stripe interval; **unsaved-changes** guard on course settings;
  in-app **problem reporter** (site-wide button → \`/admin/reports\` triage + WitUS Inbox mirror +
  \`reports:list\`); **category management** (\`/admin/categories\` add/rename/delete + settings picker);
  **admin dashboard** (\`/admin/dashboard\`, learners, enrollments, completions + learner roster).
- ✅ **RAG auto-index + report bulk-resolve** (\`feat/rag-autoindex-and-report-bulk\`): publishing a
  course now **auto-reindexes its embeddings** (a non-blocking \`after()\` hook, so chat-with-sources
  and CYOA routing stay current without the manual "Generate embeddings" click), with a **staleness
  badge** on the instructor tools when lessons are edited after publish; **bulk-resolve** on
  \`/admin/reports\` (checkbox-select a batch of reports and close/triage them in one action, clearing
  the false backlog of already-fixed items).
- ✅ **Assessment guardrail** (\`feat/rag-autoindex-and-report-bulk\`): a two-layer check that a \`:::reveal\`
  self-check can't quietly break. **Structural** (\`pnpm check:reveals\`, a CI ratchet): flags a
  malformed / indented / placeholder / answer-equals-question card that would render as dead prose and
  never grade. **Semantic** ("Audit reveals" on the instructor tools): the AI judges whether each
  card's answer is actually supported by its lesson, advisory only (never a build gate).
- 🔜 **Sentry error monitoring** (\`feat/rag-autoindex-and-report-bulk\`, wired, DSN pending → task 208):
  crash-grade signal (real stack traces, grouping, alerting) alongside the existing home-grown admin
  error reports. Server/edge/client init is **inert until \`SENTRY_DSN\` is set**, so it ships dark;
  \`onRequestError\` tags the request host (how tenants resolve) and a \`beforeSend\` scrub reuses
  \`redactSecrets\` so no learner email or magic-link token ever leaves for the vendor.
- ✅ **Uptime health check** (\`feat/health-endpoint\`): \`GET /api/health\` is the endpoint an uptime
  monitor (Better Stack) should poll instead of the homepage, which can serve a cached 200 while Neon
  is down. It runs \`select 1\` on every request: **200** \`{"ok":true,"checks":{"db":"ok"}}\`, or **503**
  with \`error:"database_unreachable"\` / \`"database_timeout"\` (4s cap, so a hung DB fails fast instead
  of holding the request open). Public and unauthenticated, so the payload carries nothing else, and
  the **caught error is never echoed**: a Neon failure routinely embeds \`DATABASE_URL\` with its
  password, so only a fixed reason token is returned and the error goes to Sentry instead.
  Deliberately **tenant-agnostic** (no tenant resolver), so an unknown host or a \`*.vercel.app\` URL
  cannot read as down. \`force-dynamic\` + \`Cache-Control: no-store\`. No migration.
- ✅ **Standards growth funnel** (\`feat/standards-growth-funnel\`): turns the (already all-51-state)
  standards alignment into a discoverable SEO funnel. The **sitemap** now lists one indexable URL per
  jurisdiction THIS tenant is aligned to (plus the finder, the matrix, courses, and explore), so a
  teacher searching "<state> standards" can land on the page that answers them. A reusable, tenant-
  scoped **coverage badge** ("Aligned to published standards in N states and Washington, D.C.") now
  leads the finder and appears on \`/explore\` and \`/platform\`: a true, checkable claim that renders
  nothing when a tenant backs no mapped state. All 28 standards isolation tests still pass.
- ✅ **More TpT state-civics packets** (\`feat/tpt-more-state-packets\`): the four highest-population
  states now have printable, standards-grounded units built (California, Texas, Florida, New York, on
  top of Indiana / Illinois / Arizona), each drawn from its cited course with a standards file grounded
  in that state's real codes via \`pnpm standards:for\`. Also recorded the missing packetDir for the
  who-has-the-power and what-they-built units, and folded the new states into the State Civics Bundle.
  Packet files are gitignored; \`/admin/tpt-plan\` now lists them as built.
- ✅ **TpT packet preview + PDF + inline edit** (\`feat/tpt-packet-pdf-and-more-states\`): each built
  packet on \`/admin/tpt-plan\` gets a "Preview / download PDF" button opening a branded, print-ready
  view (Learn.WitUS header/footer + the tenant accent, one packet file per page). Download is the
  browser's Save-as-PDF (print-isolated so only the packet prints), you can edit any section inline
  with a live preview, and "Save to file" persists a fix back to the local markdown. Because the packet
  files are gitignored (not deployed), this is a LOCAL-dev tool: it reads the filesystem and shows an
  honest empty state where the files aren't present. Plus more state packets (Ohio, Georgia, North
  Carolina, Michigan).
- ✅ **TpT state packets, tier 3** (\`feat/tpt-state-packets-tier3\`): Pennsylvania, New Jersey, Virginia,
  Washington, and Tennessee civics units (orders 18-22), each standards-grounded against that state's
  real codes via \`pnpm standards:for\`. 16 of the highest-population states now have a printable unit;
  the two bundles move to 23/24 and all five join the State Civics Bundle.
- ✅ **TpT state packets, tiers 4-5** (\`feat/tpt-state-packets-tier4\`, \`feat/tpt-state-packets-tier5\`):
  twelve more civics units, each standards-grounded via \`pnpm standards:for\`. Tier 4 (orders 23-28):
  Massachusetts, Missouri, Maryland, Wisconsin, Colorado, Minnesota. Tier 5 (orders 29-34): South
  Carolina, Alabama, Louisiana, Kentucky, Oregon, Oklahoma. The two bundles move to 35/36 and all
  twelve join the State Civics Bundle. 28 of the highest-population states now have a printable unit.
- ✅ **TpT state packets, tier 6** (\`feat/tpt-state-packets-tier6\`): Connecticut, Utah, Iowa, Nevada,
  Arkansas, Mississippi civics units (orders 35-40), each standards-grounded via \`pnpm standards:for\`.
  The two bundles move to 41/42 and all six join the State Civics Bundle. 34 of the highest-population
  states now have a printable unit.
  plain-language **\`/roadmap\`** (what's live / building / exploring, recruiting-gated, own OG card,
  linked in the footer) drawn from \`src/lib/public-roadmap.ts\`, separate from this owner-only detail.
  Plus a verify pass: \`/explore\` polish confirmed done (map OG, in-place episodes, no S2/S3), Indiana
  civics superintendent-change confirmed accurate, and a mobile fix (family gradebook report table now
  scrolls in its own box). Cloudinary audio upload + FAA m2-review re-seed + instructor-URL reassign
  remain OPERATOR steps (config / DB), not code.
- ✅ **LMS UX batch** (\`bundle/lms-ux-2026-07-01\`): **upload hardening** for the 100MB Cloudinary
  cap (shared chunked \`uploadToCloudinary\` + size guard; recorder live-size + auto-stop; "Stripe
  not configured" banner); **teacher catalog** (\`/teach\` fuzzy search + status filters + bulk
  publish/unpublish/reprice + quick toggle); **learner progress groups** on \`/my-courses\`
  (in-progress / not-started / completed). Backlog from this batch: **social sharing**
  (share school/course/module) + **mobile-first** pass + admin sidebar shell.
  **Now also in this bundle:** **social sharing** (ShareButton on school/course/lesson, native
  sheet on mobile, Copy/X/LinkedIn/Facebook/Email fallback); **admin sidebar shell** (persistent
  nav rail + mobile hamburger, replacing the flat card grid); **responsive site menu** (header
  collapses to a hamburger drawer on small screens, mobile-first.md).
- ✅ **Course-tooling suite** (\`bundle/course-tooling-2026-07-01\`): **outbound-link click tracking**
  (privacy-light \`link_clicks\` counter + \`/api/link/click\` tracked redirect + teacher "Link usage"
  panel); **cross-promotion, 3 disclosed/opt-in ways** (per-course "Related WitUS tools" card,
  \`:::tool\` lesson callout, category→ecosystem catalog chip, WitUS-branded hosts only); **live
  admin course-picker** (attach a live session to a course, tenant-safe on fan-out); **in-app
  lesson recording** (offline-first audio: MediaRecorder → IndexedDB → queued Cloudinary upload →
  auto-attach + mark recorded). Migration 0020.

### Platform backlog
- ⚪ **Add RideWitUS to cross-promotion when it's public**: it's intentionally omitted from
  \`src/lib/ecosystem.ts\` because it isn't registered in the canonical \`gemini/witus/lib/products.ts\`
  yet (don't assert a guessed URL). CHECK BACK: once RideWitUS is registered there / goes public,
  add its real \`slug\` + \`href\` + \`tagline\` to \`ECOSYSTEM_PRODUCTS\` so it appears in the cross-promo picker.
- 🔧 **UI/UX overhaul**: north star **active-practice / mastery** (Duolingo + Brilliant + Khan).
  Decisions locked: home = **Direction B (mastery dashboard)**; lesson loop = **one idea → drill →
  coach → next**; gamification = **light layer now** (streaks/goal/mastery), **XP + badges Phase 2**,
  **leaderboards/leagues = per-tenant toggle**; accent = **per-tenant + disciplined**, feedback
  colors **constant** (green/amber/red/orange), tone **warm/encouraging, per-tenant dial**.
  Phases 0-2 **done** (prototypes; mastery dashboard + lesson shell + primitives; XP/badges +
  gamification flag + accent bar + searchable glossary). **Phase 3a done** (CourseCard w/ progress,
  my-courses grid, weekly leaderboard). **Phase 3b done** (course-page syllabus + instructor
  dashboard restyle). **Phase 3c done** (login card + schools cards + skip-to-content link; lang/alt/
  labels/aria/focus-visible verified). **Only remaining:** final **accent/tone values** (deferred to
  BAM) + any deeper a11y polish. The active-practice redesign is essentially complete. BAM likes CentOS.
- 🔧 **Accessibility / WCAG**: global \`:focus-visible\` ring + \`prefers-reduced-motion\` shipped;
  labeled copy controls; \`role=status\` aria-live form feedback. Remaining: full contrast audit +
  a comprehensive keyboard/screen-reader sweep across every surface.
- ✅ **Offline support (PWA)**: conservative per-origin service worker (network-first navigation +
  \`/offline\` fallback; cache-first hashed assets; API/cross-origin never cached), tenant-aware
  \`/manifest.webmanifest\`, and a \`NEXT_PUBLIC_DISABLE_SW=1\` kill-switch. Test on a preview first.
  A stale-deploy \`ChunkLoadError\` (an old tab requesting a chunk hash the new build removed) now
  auto-recovers with a one-time, loop-guarded hard reload (\`ChunkErrorReloader\`, in the root layout).
- ✅ **Offline lessons (pages + media)**: "Save for offline" caches the lesson **page itself**
  (HTML + RSC payload, via \`src/lib/offline.ts\`'s \`witus-pages-v1\` Cache), its audio/video
  (\`witus-media-v1\`), **and the JS/CSS the page needs to render** (\`witus-assets-v1\`), plus the
  **next lesson**, so tapping "Next" keeps working offline. YouTube-style embeds still can't be
  cached (noted in-UI).
- ✅ **Pick exactly what goes offline**: a checkbox per lesson inside its collapsible section, a
  **select-all per section** (indeterminate when partial), a course-level select-all, and a sticky
  action bar with "Download selected (N)" / "Remove selected" + live progress. Locked lessons are
  never offered. The one-click "save whole course" path is preserved next to the syllabus heading.
- ✅ **Downloads manager (\`/downloads\`)**: everything saved on this device, grouped **course →
  section → lesson**, with **remove at every level** (lesson, section, course, "Remove all") and
  storage used (\`navigator.storage.estimate()\`). Reachable from the **header nav** (Account ▾ →
  Downloads, desktop *and* the mobile drawer), \`/dashboard\`, the **course page** (next to the
  save-for-offline controls, once that course has something saved), \`/offline\`, and the per-lesson
  saved state. Deliberately outside the \`(tenant)\` group so it makes **no DB/session
  call** and works with no network. Backed by an **offline manifest** (localStorage) mapping a
  cached path → course/section/lesson titles, since the Cache API only stores URLs; it's a hint
  layer, and \`reconcileOffline()\` treats the cache as truth (stale entries pruned, orphaned pages
  still shown + removable), so the UI can't claim a download that isn't there. Shared media is
  refcounted, removing one lesson never deletes audio another saved lesson still uses.
- ✅ **Offline actually works now (bug fix)**: the service worker was **never registering**:
  registration was attached to \`window\`'s \`load\` event from inside a \`useEffect\` that usually runs
  *after* \`load\` has already fired, and the error was swallowed by an empty \`.catch()\`. Downloads
  still wrote to the Cache API, so the UI went green while nothing existed to serve them,
  airplane mode gave the browser's own "no connection" page. Registration now happens immediately
  when the document is already complete; \`savePage()\` throws on a non-OK response; a save is only
  reported after it's **read back out of the cache**; and every "saved" affordance is gated on
  \`navigator.serviceWorker.controller\` (an **Offline diagnostics** panel on \`/downloads\` shows it).
  Verified end-to-end in real Chrome against a **killed server**, not just typechecked.
- ✅ **You can now FIND your downloads** (\`feat/downloads-link-inbox-mirror\`): \`/downloads\` shipped
  working and then sat there **unlinked from the nav**, which is the same as not shipping it. It's now
  in **Account ▾ → Downloads**, one \`accountItems\` array feeds both the desktop dropdown and the
  mobile drawer, so it lights up on both, plus a **"Manage downloads"** exit on the course page next
  to the save-for-offline controls (only once that course has something saved, so it isn't permanent
  chrome). The nav item is a **real \`<a>\`, not a \`<Link>\`** (\`NavItem.hardNav\`): \`/downloads\` sits
  outside the \`(tenant)\` group precisely so the service worker can serve it with **zero network**, and
  a \`<Link>\` issues an **RSC fetch that dies offline**, on the one screen that exists for offline.
  \`tests/offline-nav.test.ts\` runs the **real \`public/sw.js\`** against a dead network and proves both
  halves: the hard navigation is served from the precache, and the RSC fetch a \`<Link>\` would have
  issued has nothing to serve. The **page itself stays ungated**, only the link is signed-in.
- ✅ **Read \`/admin/future\` on a plane** (\`feat/offline-admin-future\`): the Future classes & features
  board is 30-odd long proposals to *review*, which is reading you want to do without a connection. It
  now has the same **Save for offline** treatment as a lesson (page HTML + RSC payload + the
  \`/_next/static\` chunks it needs to actually **render**, a page cached without them dies with a
  \`ChunkLoadError\` the first time it's opened offline), and it lists on \`/downloads\` under **Saved
  pages**, its own heading, not a fake course. The offline manifest gained a \`kind\` discriminant
  (\`lesson\` | \`page\`) to make that honest; entries written by earlier builds still read as lessons.
  **It is the only authenticated page the app will cache, and the terms are strict:** it is cached
  **only on an explicit click** (never auto-saved), the button says in words that a copy of the page
  *including its notes* lands in this browser's storage unencrypted, **signing out deletes it**, and
  so does the next online page load under a different (or no) account, the purge sweeps both the
  manifest and the \`/admin\` path prefix, so a cleared manifest can't strand signed-in HTML on the
  device. \`requirePlatformOwner()\` is untouched: online the page is network-first, so the server gate
  runs on every visit. \`tests/offline-admin-page.test.ts\` drives the **real \`public/sw.js\`** over a
  dead network and proves the page *and its chunks* are served, and that sign-out revokes it while
  leaving the learner's saved lessons alone.
- ✅ **Notes written offline aren't lost, they queue and sync** (\`feat/offline-admin-future\`), the
  ideas happen on the plane, but notes are DB-backed, so a POST with no network just throws. There's
  now a general **offline outbox** (\`src/lib/offline-outbox.ts\`, localStorage) behind the
  \`/admin/future\` note form: write with no connection and the note is **queued**, shown as *waiting to
  send*, and posted automatically the moment the network is back, from whatever page is open, not
  just the one that queued it. The rule it enforces is **a queued write is never silently lost**: it
  survives a reload and a closed tab; it is only ever removed on a **2xx** or an explicit **Discard**;
  a **401** (session expired while it sat there) keeps it and retries after sign-in; a **400** keeps it,
  flags it, and shows the error with the text still on screen to copy out. Marking a note done still
  needs a connection (a queued toggle against a note that may not exist server-side yet is a good way
  to resurrect a closed one) and says so instead of silently reverting. The queue is deliberately
  generic, pointing report-a-problem or feedback at it is a \`kind\` string, not a rewrite.
- ✅ **Report a problem and lesson feedback work offline too** (\`feat/offline-outbox-everywhere\`),
  closes BAM's bug report in full: *"user should be able to submit comment, correction, question, bug,
  feedback, idea, other when offline and it syncs when back online."* All seven words now do. The
  moment you most want to file a bug is the moment the app is misbehaving, and "the network died" is
  one of the ways it misbehaves, while a learner reading a **saved-for-offline** lesson on a plane is
  exactly who spots the wrong date. Both forms now fall back to the **same outbox** instead of
  throwing the text away, and it was a \`kind\` string, as promised: \`bug|feedback|idea|other\` →
  \`POST /api/report\`, \`comment|correction|question\` → \`POST /api/courses/:c/lessons/:l/feedback\`.
  **The two payloads are kept distinct** (\`message\` vs \`body\`, the APIs' Zod schemas disagree) by
  deciding the endpoint and body **once, at enqueue time** (\`src/lib/outbox-kinds.ts\`); the flusher
  stays generic, with no \`switch (kind)\`, so the page a bug was seen on and the lesson a correction is
  about are **baked in** rather than re-derived from wherever the browser happens to be when the
  network returns. **Online behaviour is unchanged**, a healthy submit goes straight to its API and is
  never routed through the queue. Pending items are **visible** (a "N waiting" badge on the collapsed
  Report button, pending rows in both forms, each with an honest status and a Discard), because
  someone who files a bug and sees nothing files it again. Signed-out reports queue and flush
  signed-out (\`/api/report\` takes anonymous reports); a session that expires mid-queue gets "sign in
  and it'll save", not a deletion. Tenancy is unchanged and unbreakable: no body carries a tenant (the
  Host decides, server-side), and items are stamped with their origin so a queued write can't be
  replayed against another brand. Verified against a **real killed server** (a real \`ECONNREFUSED\`,
  not DevTools throttling, which the last offline agent learned doesn't apply to the SW's own
  fetches) and across a real process restart. No migration.
- ✅ **Every email is mirrored to the WitUS Inbox, with the credentials stripped**
  (\`feat/downloads-link-inbox-mirror\`), only the pricing form mirrored before; magic-link sign-in,
  certificates, cohort invites and guardian invites left no record. The mirror now happens at the
  **chokepoint** (\`sendEmail\` in \`src/lib/mailer.ts\`), so an email added tomorrow is covered without
  anyone remembering to wire it up. **The security half is the point:** several of these emails *are*
  bearer credentials, the magic-link URL **signs you in**, \`/join/<token>\` grants **class
  membership**, \`/family/accept/<token>\` opens a **child's** records, so mirroring them verbatim
  would copy working credentials into a triage inbox. \`src/lib/email-redact.ts\` therefore strips every
  token-bearing URL from the mirrored body (**biased to redact when unsure**: unknown query-param
  secrets, token-redemption paths, token-shaped path segments, and anything unparseable), scrubs
  labelled raw secrets (PIN/password), and **never mirrors the HTML part** at all. \`/verify/<token>\`
  is deliberately **kept**, a certificate check is *meant* to be shareable. What crosses the boundary
  is **metadata** (recipient, subject, which email, tenant, timestamp, delivered/failure) plus the
  redacted body and the **routes** the stripped links pointed at, enough to answer "did the sign-in
  link go out?" without being able to use it. \`form_type\` is per kind
  (\`learn-witus-email:cohort-invite\`) so triage can sort. The mirror runs **after** the delivery
  attempt, no-ops when the Inbox is unconfigured, and is wrapped so it **can never fail a send**.
- ✅ **Media player: accurate webm timeline + read-along text.** MediaRecorder audio/video ships no
  duration header, so \`el.duration\` was \`Infinity\` and the native seek bar's "time left" was wrong;
  the player now seeks past the end once to make the browser resolve the real duration (single and
  multi-part). Audio/video lessons also keep their written \`textContent\` visible under the player, so
  the learner can read and follow along, not only the synced transcript.
- ✅ **Resume where you left off** (\`feat/resume-where-you-left-off\`): progress already recorded
  **skipping around** faithfully (\`lesson_progress\` is keyed on \`(user, lesson)\`, not a linear
  pointer), but a row was only written on **"Mark complete"**, opening a lesson and reading half of
  it wrote nothing, so the app couldn't tell "started and left" from "never opened". Resume then fell
  back to the *first incomplete lesson in course order*, which sent a learner who'd skipped ahead to
  lesson 20 back to their lesson-3 gap. Now: a **\`last_viewed_at\`** column (migration **0034**;
  deliberately NOT \`updated_at\`, which moves on any write, a quiz score is not a view) fed by a lean
  tenant-scoped **\`/view\` ping**; **\`src/lib/resume.ts\`**, the pure, unit-tested rule (last-viewed +
  unfinished → resume there · last-viewed + finished → roll forward · never opened → lesson 1); the
  **dashboard** Continue/Up-next follow it; and a **"Continue where you left off"** card on the course
  page **naming the lesson**. **\`watch_seconds\` is finally wired**, audio/video resumes mid-track
  (with a "Start over" escape), which matters most for FAA Part 107's 118 audio lessons. **Viewing is
  not completing:** \`completed_at\` alone still drives the %, sequential unlocking, and certificates.
  Recorded against the **active learner**, so a parent studying as a child resumes the *child*. Cheap
  on purpose (Neon egress): 30s server-side debounce + a client guard on the ping, one player write
  per ~20s and on pause/leave (never on the timeupdate tick), and the course page reads completion +
  last-viewed + positions in ONE query that *replaces* the old completed-ids query.
- ✅ **Sticky site header** (\`fix/ui-sticky-header-collapsible-future\`): the header now stays at the
  top on every (tenant) page (BAM: "header should be sticky … so it's usable"), so nav is reachable
  mid-way through a long lesson. A client shell (\`StickyHeader\`) owns the stuck-state shadow and
  publishes the measured height as \`--site-header-h\`; the lesson page's progress sub-header and the
  admin sidebar rail offset by it so the bars **stack** instead of fighting, and anchor jumps (skip
  link, \`/explore#map\`) get matching \`scroll-padding\`, scoped so \`/downloads\`, \`/offline\`, \`/kids\`
  and \`/embed/*\` (no site header) are untouched. The acting-as banner deliberately scrolls away: the
  "Studying as" switcher pinned in the bar already carries that signal.
- ✅ **\`/admin/future\` collapses** (\`fix/ui-sticky-header-collapsible-future\`): each group heading
  (She Did the Work, subject research, proposals, Mansa Gold, …) is now a native \`<details>\` with an
  item count, all collapsed by default except the first (the 1-item overview), BAM: "the list and
  scroll is too long". 40+ proposals scan as a screenful of headings; item cards, notes, and the
  saved-for-offline copy work unchanged (native \`<details>\` needs no JS).
- ⚪ **Resume for multi-part audio + embeds**: the position is remembered for direct-media
  audio/video only. \`MultiPartPlayer\` (a long recording split into parts) would additionally need the
  part index, and YouTube/Vimeo embeds expose no time to us without their iframe APIs. Not started.
- ⚪ **WYSIWYG + markdown editor** (CentOS) for lesson authoring in the dashboard.
- ✅ **Rich lesson media**: native audio/video files get a full player; YouTube/Vimeo/Google
  Slides/PDF auto-embed (\`toEmbed\`). Cloudinary upload UI is the remaining piece (URLs work today).
- ✅ **Media chapters + synced transcripts**: clickable chapter jump-markers + a transcript that
  follows playback (active segment highlighted, click-to-seek). Player ships; **populating** the
  \`audio_chapters\`/\`transcript_content\` data per lesson is the remaining content task.
- ✅ **Language vocab UX**: glossary is now searchable + collapsible (no more long scroll).
- ✅ **Login 403 fixed**: was Better Auth "Invalid origin" on brand domains; trustedOrigins is now
  dynamic per registered tenant. (Not Mailgun, that was a wrong early guess.)
- ⚪ **Magic-link lands on wrong tenant**: clicking the BVC sign-in link opens learn.witus.online,
  not bettervice.club. Diagnosis: link is generated from \`BETTER_AUTH_URL\` (learn.witus.online);
  \`rewriteOrigin\` swaps the verify host, but the post-verify redirect resolves against the base URL.
  **Hold** pending BAM's new WitUS-Online auth system (discuss its impact on this app first).
- ✅ **Profile edit UI**: instructors edit displayName/bio/avatar/links at \`/teach/profile\`.
- ✅ **Fee-aware pricing**: set Free / one-time / subscription + price, with estimated net-after-fees.
  ⚪ Lifetime teacher promo + marketing campaigns (\`plans/future/11\`).
- ⚪ Tenant-settings admin (flags) self-serve.
- ✅ **Growing Belts latitude bands**: starts with 3 commodities, toggle the rest on/off (show-all /
  reset-to-3), and overlapping bands **blend** (mix-blend multiply) with a key explaining the mixed
  colors. (\`GrowingBeltsMap\`.)
- ⚪ **Gated specialization credentials**: a *real* credential (not just a completion badge): earned by
  finishing **shared core + one medium course + one subject course**, then surfaced on the learner
  profile in-app. Builds on the existing certificates system + CYOA branching; generalizes to any
  course family. First consumer is the **Documentarian program** (see Content). Plan:
  \`plans/future/12-documentarian-program.md\`.
- ✅ **My Field Log** (\`feat/field-log-schema\`): a per-user documentation-project workspace for the
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
- ✅ **Robust error UX** (\`feat/field-log-ui\`): route error boundaries now **route the user back into
  the app** (Home / My Field Log) AND **auto-report to an admin** (reusing the \`/api/report\` →
  problem_reports + WitUS Inbox pipeline) with a reference id. The Field Log client surfaces clear
  400/500 messages and reports 5xx; offline is handled separately (queued, not flagged as a bug).
- ✅ **WanderLearn embed API** (\`feat/embed-finish\`, supersedes \`feat/embed-api\`): a read-only,
  versioned, **API-key**-scoped public API (\`GET /api/v1/courses\` with \`limit\`/\`offset\` pagination,
  \`GET /api/v1/courses/[id]\`, and \`GET /api/v1/courses/[id]/lessons/[lessonId]\` for the **full lesson
  body/media**) so another app's backend (starting with WanderLearn, which is removing its own LMS)
  can render real lesson content. The tenant comes ONLY from the \`Authorization: Bearer <key>\`,
  never the host, never client input, via the \`tenant_api_keys\` table (**migration 0033**,
  sha256-hashed keys, raw key shown once). Brand-admin/owner UI to mint/revoke at **/admin/api-keys**.
  A chromeless **\`/embed/course/[id]\`** iframe view ships too (host-tenant-resolved, "Continue on
  Learn.WitUS" deep link out to the real course page). Every surface, footer, embed view, and every
  \`/api/v1\` JSON response, now carries the **educational-use disclaimer**
  (\`src/lib/disclaimer.ts\`); consumers are required to display it (see
  \`plans/wanderlearn-embed-integration.md\`, the consumer integration guide). DB-backed isolation
  tests cover the lesson endpoint too, incl. mismatched course/lesson pairings
  (\`tests/isolation/api-v1.db.test.ts\`).
- ✅ **Demo account** (\`feat/demo-account\`): "Try the demo" on the **Acme** tenant's login page
  mints a session for a **shared demo account** (a \`brand_admin\` on Acme ONLY, so a visitor can try
  teacher/admin surfaces, authoring, \`/teach\`, \`/live\`, \`/cohorts\`, never a platform owner, never
  another brand). A nightly **Vercel cron** (\`/api/cron/demo-reset\`, midnight UTC, Bearer \`CRON_SECRET\`
  guarded) wipes the demo user's Acme data and reseeds a small baseline (a couple of enrollments +
  completed lessons) so every visitor gets a fresh sandbox. Session mint reuses the kid-login plugin
  pattern (a real signed Better Auth cookie, not hand-rolled). No migration; three new **optional**
  env vars (\`CRON_SECRET\`, \`DEMO_VISITOR_PASSWORD\`, \`DEMO_VISITOR_USER_EMAIL\`), the feature stays
  dark until BAM sets them (see \`plans/user-tasks/62-demo-account-setup.md\` for the domain/env/seed
  steps).
- ✅ **Bundle SALES are live** (\`feat/bundle-sales\`, **migration 0039**). The app can now sell a
  bundle: two tenant-scoped tables (\`bundles\`, \`bundle_courses\`), \`createBundleCheckout\`
  mirroring the course flow, and a webhook branch that enrolls the buyer in EVERY member course
  idempotently (a Stripe retry never double-enrolls; access is granted per course so a later bundle
  edit cannot revoke it). \`/bundles\` and \`/bundles/<slug>\` are the buy surface (free bundles enroll
  directly, paid go to Stripe), \`/admin/bundles\` is the owner view, and \`pnpm seed:bundles\` creates
  the six proposed bundles UNPUBLISHED with the recommended price so nothing sells until BAM publishes.
  Tenant isolation is tested (a bundle 404s across tenants and never surfaces another tenant's course).
  Promos and ecosystem cross-promo (CentenarianOS, FlashLearnAI) already worked and are unchanged.
  **After merge: \`pnpm db:migrate:prod\`, then \`pnpm seed:bundles\`.**
- 🔧 **Bundle proposals + the bundle-sales gap** (\`src/lib/bundles.ts\`, on \`/admin/pricing\`).
  Six themed bundles (the full route series, Black History Through Place, Civics Essentials, the state
  civics collection, the two structural paths, and the global labor series), each with an APP price and
  a TpT price and a separate justification for each channel; app savings are computed live from the
  members' proposed course prices. Two capabilities were CONFIRMED already working: promo codes (Stripe
  coupons at \`/admin/marketing\`, applied at checkout, comparable to CentenarianOS and FlashLearnAI)
  and ecosystem cross-promo (both apps attachable to any course or category). The one gap is bundle
  SALES: the app cannot yet sell a bundle, because it is a payments feature with a prod migration and a
  webhook that grants paid access, so it is scoped as its own reviewed branch in \`plans/48\` rather
  than rushed. Prices are recommendations; nothing changes a live price.
- 🔧 **Proposed pricing** (\`/admin/pricing\`, owner-only): a fair-and-competitive price
  recommendation for every course, in five tiers (Free, Foundation $9, Core $19, Premium $29,
  Certification prep $39), assigned by category with per-course overrides (US Civics 101 free as a
  funnel; the Green Book flagship and the two capstones at Premium; FAA Part 107 at Certification;
  single-state civics at Foundation). Shows current vs proposed side by side (current read from the
  catalog), and leads with the recommendation that the PRIMARY model be an all-access subscription
  (~$12/mo or $99/yr). Proposals only, nothing changes a live price, and no number is a revenue
  promise. Model + assignment in \`src/lib/course-pricing.ts\`.
- 🔧 **Teachers Pay Teachers plan** (\`/admin/tpt-plan\`, owner-only): a ranked rollout plan for the
  TpT sales channel, ordered to optimize reach and conversion (free gateway first to buy followers and
  reviews, then high-intent state-civics units, then the differentiated Green Book flagship, then
  evergreen units, then bundles). Each row shows the recommended price and the course's REAL standards
  count (a genuine TpT selling point), pulled from the standards data. Packets live in
  \`plans/future-courses/tpt-packets/\`; seven are built (great-migration, indiana/illinois/arizona
  civics, us-constitution, woop, and Green Book). Recommendations, not sales promises.
- ✅ **Per-audience landing pages** (\`/for/<audience>\` + a \`/for\` index): teachers, school leaders,
  parents, homeschool families, and community leaders each get a page written in their own terms,
  above the two general pages (\`/platform\`, \`/explore\`). Recruiting-tenant only, 404 on a white-label
  school, and reachable from BOTH the homepage and the Explore nav menu ("Who it's for"). One \`AudienceLandingContent\` type and one
  shared renderer keep them consistent; each audience is a small content file resolved by a dynamic
  route. **No invented stats, efficacy claims, testimonials, or prices** (the type file states the
  rule): the pages lean on what is now genuinely verifiable, the real per-state standards alignment,
  cited courses, shuffled quizzes, the parent view, kid login, cohorts, the AI tutor, and the
  no-signup demo. The homeschool page asserts no state's requirements; the community page carries the
  "communities educating themselves" heritage generally and points to the catalog's cited history
  courses for specifics. Still notes: the Teachers Pay Teachers course packets.
- 🔧 **Unvetted courses, "Coming soon"** (\`feat/unvetted-coming-soon\`, **migration 0041**): a nullable
  \`courses.vetted_at\` records that the platform owner personally reviewed a course. NULL = unvetted,
  and the migration deliberately does **not backfill**, so every existing course reads as unvetted the
  moment it runs (that IS the bulk "move them all to Coming soon" request). An unvetted course keeps a
  **public, indexable landing page** (title, description, the standards it meets, its own OG card and
  Course JSON-LD, and a **"notify me when this course opens"** email capture), because that page is what
  teachers and schools shop on. The course **behind** it is closed: no lesson list, no lesson titles, no
  media URLs, no price, no enroll button. Full access is **owner OR the course's own instructor OR
  anyone with an existing enrollment** (un-vetting must never revoke access from someone mid-course,
  least of all someone who paid); invited auditors are the one seat left to build (plans/52 §5).
  Discovery surfaces (catalog, home, search, category counts, instructor pages, **sitemap**, which now
  lists per-course URLs at all) **include** unvetted courses, badged; lesson-routing surfaces
  (cross-course CYOA \`match_lessons_global\`, the api-v1 lesson reads) **exclude** them, because routing
  a stranger into a closed lesson is a dead end. Vetting is **owner-only** and the API takes a
  **boolean**, never a client timestamp; bulk **Mark vetted / Mark unvetted** plus **vetted/unvetted**
  filters ride the existing \`/teach\` bulk mechanism (no new endpoint). Notify-me signups reuse the
  existing \`leads\` funnel (\`leads.inquiries\`, so no second table and no extra migration), are mirrored
  to the WitUS Inbox as \`learn-course-notify\`, counted on the course's own manage page, and read in
  full at \`/admin/leads\`, which is now an **interest dashboard**: a demand board counting distinct
  people by **course**, by **learning track** (\`series_slug\`), by **bundle** (anyone waiting on any
  course the bundle contains) and by **source** (so "wants this course" reads apart from "asked about
  pricing"), each line linking to its own filtered list. Filters are plain \`searchParams\` on a GET
  form, like \`/academic-standards\`, so every view is shareable and printable, and
  **\`/api/admin/leads.csv\`** exports exactly the current filter, one row per person, for pasting into
  an email tool. Filters resolve only against the requesting tenant's own courses and bundles, so an
  id from another school selects nobody. **Vetting a course does NOT auto-email its waiting list**
  (BAM's decision): the list is his to mail when he chooses.
- 🔧 **Invite-to-audit** (\`feat/course-auditors\`, **migration 0042**): the last open seat in plans/52.
  The owner, or a course's own instructor, invites an email from the course's \`/teach/<course>\` page;
  the invitee follows a link, accepts, signs in with that address, and can then **read every lesson of
  that ONE unvetted course** while everyone else still sees the public "Coming soon" page. The gate
  needed no restructure: \`canSeeUnvettedContent\` already took an \`isAuditor\` flag, so the whole
  feature is a new \`course_auditors\` table plus resolving that flag in the two places that compose it
  (\`canSeeUnvettedCourse\` and \`loadCourseView\`). A **pending** invite grants nothing: only
  \`accepted_at\` opens the course. Grants are per **tenant** and per **course**, matched by user id OR
  the invited address, so an auditor of course A is a stranger to course B and a grant in one school
  can never open a course in another. **Auditors are READ-ONLY, and that is the load-bearing half**:
  no enrolling, no certificate, no progress, and **no recorded quiz or recall attempts**, enforced in
  every write route (quiz, recall, progress, submission, enroll, complete), so a reviewer clicking
  through a quiz to check its wording never moves that quiz's statistics or any dashboard average
  built on them (the same reasoning as the quiz-integrity rule). The UI never offers a control that
  can only fail: the course page shows a review notice instead of an enroll button, the lesson page
  hides mark-complete, recall and assignment submission, and the quiz renders every question with
  "this quiz is not scored". A grant confers **nothing once the course is vetted**, so a forgotten
  invite is not free access forever. Revoke is one click and takes effect on the next request.
- 🔧 **Platform + demo landing pages** (\`feat/platform-demo-landing\`): two public marketing pages,
  shown only on Learn.WitUS itself (\`tenant.flags.recruiting\`, 404 elsewhere so a white-label school
  never advertises the platform underneath it): **\`/platform\`** pitches Learn.WitUS as a product for
  prospective school operators (own domain, cited/media-rich courses, live classes + cohorts, parent
  view, kid login, AI tutor); **\`/demo\`** explains the shared **demo teacher account** on the
  **Acme Academy** demo school (try every teacher/admin feature, no signup) and that its data
  **resets nightly at midnight**, with a **"Launch the demo school →"** button. The demo school's URL
  is resolved at request time from \`tenant_domains\` (\`getDemoSchoolUrl()\` in \`src/db/queries/demo.ts\`),
  never hardcoded, preferring the primary non-local prod host, falling back to any prod host, then
  (dev only) \`acme.localhost\` on the dev port; if none exists yet the button degrades to a "not
  published yet" note instead of a dead link. Linked from a new **Demo** nav item, the home page's
  recruiting block, and the ecosystem footer. No migration.
- 🔧 **The standards finder honours \`?course=\` without a state** (\`fix/standards-course-without-state\`):
  every course page (and every "Coming soon" landing page) links to \`/academic-standards?course=<slug>\`
  under "See the full standards detail for this course", and that URL used to land on the generic state
  chooser, which **ignored the course param entirely**. Someone who asked "where does THIS course count?"
  got a list of 51 states. It now renders a **course-scoped picker**: the jurisdictions where that course
  actually carries standards, each card showing the course's own totals (mapped / full / partial /
  frameworks), busiest first, headed by "N standards across M jurisdictions", plus an honest line about
  the mapped jurisdictions where this course claims nothing. Every card links on with \`?state=..&course=..\`,
  and the state view's back links now return to the course picker rather than dropping the filter, so the
  reader stays filtered end to end. A **cross-state dump was deliberately not built**: that is what
  \`/academic-standards/matrix\` already is, and this page's job is the per-state filing.
  **Tenant scoping is unchanged**: \`getAlignedCourses\` is still the only boundary, and the course is
  resolved against \`coursesIn(scopeAlignments(...))\`, so an **unknown slug, another brand's slug, and a
  slug with no mapping are indistinguishable** (all resolve to nothing). A slug that does not resolve does
  **not 404 and does not silently show unfiltered results**: the finder renders with a visible "showing
  every course, that filter was ignored" notice, because a dropped filter a reader cannot see is how a
  wrong number gets filed with a state. \`generateMetadata\` names the course in the title, description,
  and OG card for the new view; a repeated param (\`?course=a&course=b\`) can no longer 500. New pure
  helpers \`standardsHref\` / \`courseJurisdictions\` plus 5 isolation tests. No migration.

## Content
- 🔧 **"Also discussed in" on lesson pages, and a year brush on the globe** (plans/45 follow-ups). A
  lesson that NAMES a cross-course entity now carries a quiet "Also discussed in other courses" line
  linking to the entity page, matched by scanning the lesson text (no per-lesson tagging), tenant-scoped
  and shown only when at least two of the tenant's courses cover it. And the globe gained a year brush
  (plans/45 Idea 1): seven pins carry a documented year they enter the record (the business-district
  foundings 1888-1906, the Great Migration's 1916 start, the DC 1954 and Pittsburgh 1956 clearances),
  and an "as of" slider reveals the dated places over time while undated pins always show, so place and
  time move together. Years are a curated seed drawn from the courses; the set grows as more pins earn
  a defensible date.
- 🔧 **Cross-course entities, surfaced in search** (plans/45 Part 3). Eleven people, cases, laws, and
  concepts the route series and its capstone argue about (Berman v. Parker, Milliken, Buchanan,
  Shelley, Kelo, the 1949/1956/1964 Acts, Unigov, Dillon's Rule, building-and-loans, North Carolina
  Mutual, the Great Migration) now have an ENTITY PAGE at \`/e/<slug>\` listing every course that
  touches them with each course's one-line take, and they surface in course SEARCH as their own result
  type (\`Milliken v. Bradley, appears in 3 courses\`) instead of scattered lesson hits. Tenant-scoped:
  a link only shows for a course the tenant publishes, and an entity is only 'cross-course' when the
  tenant has at least two of its courses. Curated seed in code (\`src/lib/entities.ts\`), so no
  migration; the DB-backed author-declared model stays the plans/45 follow-up. Timeline panel added to
  \`/globe\` too, the doctrinal-and-policy spine on one axis beside the map.
- 🔧 **The explore globe** (plans/45, \`/globe\`). A rotating, draggable orthographic globe of the
  places our courses are about, where zoom controls pin DENSITY (semantic zoom, not just dot size): far
  out shows only tier-1 hubs, zoom in reveals the rest. Drag rotates, wheel/buttons/arrow-keys zoom, and
  a pin on the far hemisphere is culled with \`geoDistance > PI/2\`. It is a projection swap on the
  existing d3-geo stack (\`geoOrthographic\` + \`geoGraticule10\`), so no new dependency and it works
  offline. The plan's non-negotiables ship WITH it, not as a follow-up: a flat-map toggle, a spin
  pause, keyboard control, and the pin list rendered as REAL TEXT beside the globe, which is both the
  accessibility affordance and the no-JS fallback. Tenant-scoped: a pin only appears if the tenant
  publishes the course it points to. Linked from /explore (\`Spin the globe\`). Pins are a curated set
  of real course locations (\`src/lib/globe-pins.ts\`); coordinates are ordinary city/site coordinates,
  several reused from the verified How the Tools Travelled map, nothing invented.
- 🔧 **Map time-slider** (plans/44 Option B). The map lesson gains an optional \`year\` on any marker,
  line, or polygon; when present, a Play button and a year slider appear and the map reveals elements
  as of the chosen year, so a learner watches the pins light up over time (diffusion). An element with
  no year always shows, so every existing map renders exactly as before. Play steps through the
  distinct event years, one cohort at a time. First use: **How the Tools Travelled**, where the six
  dated doctrinal markers now light up in order, 1917 Buchanan BEFORE the 1949 federal upstream, which
  is the course's own chronology point (an instrument that arrives after a practice is not its cause).
  All six years are verified from the course text. Next in plans/45: the explore-map globe.
- 🔧 **Visual timelines: the \`:::timeline\` block** (plans/44 Option C, the cheapest first step). A
  fenced block inside any lesson body renders a vertical, dated list on one shared time axis, so a
  course can SHOW co-occurrence (two things happening at once) instead of asserting it. Syntax mirrors
  the \`:::reveal\` family: \`:::timeline Optional title\` then \`year | lane | text\` (or
  \`year | text\`) lines, closed by \`:::\`. Events with lanes (e.g. built vs done) each get a
  colour and a legend, so the two tracks read at a glance and stay mobile-friendly. Pure data plus
  markup (offline-safe, no dependency, no new lesson type), parsed by \`src/lib/timeline.ts\` (unit
  tested) and rendered by \`TimelineBlock\`, wired into \`LessonBody\` beside the reveal/tool/field-log
  directives. The design rule holds in the author's text, not the renderer: co-occurrence is the claim,
  not balance. Next up (plans/44/45): the map time-slider (Option B) and the explore-map globe.

- ✅ **Both structural paths are complete** (\`plans/46\`): Path A "Who Has the Power?" is 9 of 9 and
  Path B "How a Business Is Formed" is 7 of 7. The **choropleth map layer** (\`plans/49\`) also shipped:
  map lessons gain a \`regions\` fill joined to the world topojson by ISO code, with a legend, so a
  comparative property renders as an AREA not a pin. **How Countries Constitute Themselves** is the
  first consumer, filling eight countries by executive family. Still open in \`plans/49\`: the US-state
  fill and the separate-sovereign tribal polygon layer (Tribal Nations ships a point-based stopgap
  until reservation geometry is wired). Both paths are the general case of something the catalog already teaches one
  instance at a time. **Who Has the Power to Do This?** (Civics, \`who-has-the-power\`, 19 lessons / 5 sections /
  4 quizzes / a map / a capstone) is the general case of the route series: given any government
  action, find the body, its enabling authority, the document that grants it, and who can overturn
  it. It teaches Dillon's Rule vs home rule and the special-district layer, and introduces tribal
  nations as a SEPARATE sovereign, not a rung on the ladder. It declines the apocryphal Andrew Jackson
  quote (teaching the refusal as method) and keeps Dillon's Rule vs the Cooley Doctrine an open split.
  **What a Business Entity Actually Is** (Civics, \`what-a-business-entity-is\`, 19 lessons / 5 sections
  / 4 quizzes / a capstone) is the general case of What They Built: an entity is a bundle of four
  decisions (liability, taxation, ownership/transfer, governance), and reading the formation documents
  as primary sources is the skill; it says plainly, repeatedly, that it is not legal or tax advice, and
  asserts no statute section or tax rate from memory. Both are mapped to the Common Core RH/WHST
  literacy strands and shuffle-by-default; all eight quiz banks score 25-31% on the length tell. A third course now joins them, **The
  Local Layer** (\`the-local-layer\`, 20 lessons), the deep Dillon's-Rule-vs-home-rule course: municipal
  forms (mayor-council, council-manager, commission), special districts (which outnumber cities and
  whose elections nobody votes in), town meeting, and Unigov as the creatures-of-the-state case, built
  ON the method course without repeating it. A fourth course, **Financing
  Without Access** (\`financing-without-access\`, 18 lessons), joins the business path: the bridge course
  on fraternal societies, industrial insurance, building-and-loans, ROSCAs worldwide (susu, tanda,
  chit fund, tontine) and Islamic finance, on the through-line that when the capital system excludes
  you, you invent an entity. It declines Islamic-finance market statistics rather than quote them
  loosely and teaches the form-vs-substance debate unresolved. Two more join now: **The US Forms**
  (\`us-business-forms\`, business path course 2: the US entity forms read through the four decisions,
  the S-corp taught as a tax ELECTION not an entity type) and **The Middle Layer** (\`the-middle-layer\`,
  government path course 4: states, provinces and regions on the federalism-vs-devolution distinction,
  entrenched co-sovereigns versus powers granted by statute). Four more join now: **Forms of
  Government, Honestly** (\`forms-of-government\`, government course 2: the classical forms, then reading
  a classification critically because V-Dem, Polity, Freedom House and the EIU rank the same countries
  differently on published methods, asserting no country's current score and mapping the measurers
  rather than the scores), **How Countries Constitute Themselves** (\`how-countries-constitute\`,
  government course 3: presidential/parliamentary/semi-presidential, written vs uncodified, federal vs
  unitary, and the four routes constitutions are made by, from the US 1787 to South Africa 1996),
  **Cooperatives** (\`cooperatives\`, business course 3: one-member-one-vote, the Rochdale Principles,
  Mondragon, rural electric co-ops and the credit union handed over by Financing Without Access), and
  **How Other Countries Form Businesses** (\`foreign-business-forms\`, business course 5: the four
  decisions applied to the UK, Germany with Mitbestimmung, France, Japan, the Nordics, China's SOEs and
  the VIE contractual structure, and India, on the point that the American set is not universal). All
  four map to the Common Core RH/WHST literacy strands and shuffle-by-default; every new quiz bank
  scores 23-35% on the length tell. Then four MORE join: **Tribal Nations and Indigenous Governance**
  (\`tribal-nations-governance\`, government course 6: sovereignty as pre-existing not delegated,
  treaties as supreme law, IRA 1934 vs traditional governance, McGirt, and Alaska Native corporations,
  authored under plans/46's care rules, teaching that/whose/why and reproducing no ceremonial or
  restricted detail, leading with nations' own words and Indigenous scholars, the Haudenosaunee held
  with care and the Constitution-influence claim taught as contested), **Governments Without States**
  (\`governments-without-states\`, government course 7: the EU as its own legal order, the UN and AU,
  contested states taught neutrally with attribution, and self-governing communities), **How Power
  Changes Hands** (\`how-power-changes-hands\`, government course 8: election systems that turn identical
  votes into different winners, then coups, revolutions, negotiated transitions and term limits, the
  worked example labelled hypothetical), and **Governance: Who Actually Decides** (\`business-governance\`,
  business course 6: boards, fiduciary duty, dual-class shares, the German two-tier board, and one share
  one vote vs one member one vote). All map to the RH/WHST strands; every new bank 23-35% on the length
  tell. Finally the two CAPSTONES land and **both paths are complete**: **Map Your Own Stack**
  (\`map-your-own-stack\`, government course 9 of 9: document every government with authority over your
  block from the primary record, most people find six to twelve and are surprised by half, the graded
  research capstone that synthesizes the whole path) and **Choose a Form and Defend It**
  (\`choose-a-form-capstone\`, business course 7 of 7: pick a form for a real scenario and defend it
  against the four decisions and a named alternative, not legal advice, stated in the assignment).
  **Path A is 9 of 9 and Path B is 7 of 7**; coverage 105/108. **Re-run \`pnpm seed:courses\`.**
- ✅ Languages es/fr/pt/it (tense spines); Ed.L.D., Cyber, US Civics 101, "How to Create a Course".
- ✅ **Pickleball, the first Sports course** (\`content/pickleball-course\`). New **Sports** category.
  "Play It, Question It, Build With It": **6 sections / 30 lessons / 6 quizzes × 15 questions**
  (banks >10 so the 10-question attempt cap actually rotates), 24 \`:::reveal\` checks, APA 7 +
  \`## Sources\` per lesson. Teaches the game (court, serve, kitchen, two-bounce rule, third-shot
  drop, dinking, doubles), then the parts a generic sports course skips. Two content traps drive
  the whole design: (1) **the rulebook is revised ANNUALLY** and the **2026** edition renumbered
  nearly everything, so every rule number is cited to the 2026 rulebook **by year** and none is
  asserted from memory, where a concept has no verified number, it's taught **without** one
  (e.g. the recommended court-BUILD area, which lives in USA Pickleball's court-construction
  guidance, not the rulebook); (2) **the "named after a dog named Pickles" story is DISPUTED**, so
  the course teaches the **dispute**, Joel Pritchard's own archived oral history says the dog came
  after the game, co-founder Barney McCallum told the dog story until he died, and the claim that
  would settle it (the dog's birth year) has **never been documented by anyone**, and turns it into
  a source-evaluation module. Same discipline on statistics: SFIA's coherent series (4.2M/2020 →
  24.3M/2025) is the one quoted, and a lesson teaches why SFIA said **8.9M** for 2022 while
  APP/YouGov said **36.5M** for the same year (different thresholds, neither lying). Rally vs.
  side-out scoring is presented as an **event-level choice** (Rule 15.C.2, rally scoring is a
  *provisional option* a TD may pick, and is barred from Nationals), never as one universal system.
  The strongest section is the entrepreneur angle: court conversion + the **noise litigation** that
  actually kills those projects, coaching/certification, leagues and events, the paddle industry's
  delamination → **PBCoR** arms race, and the pro tours' post-merger contract correction.
  Re-run \`pnpm seed:courses\`. No migration.
- ✅ BVC real 21-episode content (lessons + quizzes + maps + Coffee assignment).
- ✅ **Lacrosse: The Creator's Game** (\`content/lacrosse-course\`): new **Sports** category. 29
  lessons across 6 collapsible sections, 6 quizzes × **15 questions** each (90 total, every one
  carrying \`sourceLessonSlug\`), 22 \`:::reveal\` checks, 1 exercise. **Indigenous origins are
  foundational, not a footnote:** Section 1 is the Haudenosaunee game, led by the Onondaga Nation's
  own words and by an Indigenous historian (Allan Downey, Dakelh, *The Creator's Game*, 2018),
  with Indigenous-owned news (Windspeaker) carrying the current reporting. The course teaches
  **that** ceremonial medicine games exist, whose they are, and why they matter, and then stops:
  **no ceremonial procedure, songs, or ritual detail is reproduced**, and it tells the learner that
  the silence is deliberate. Men's, women's, box and Sixes are taught as the **four different games
  they are**; every rules lesson names the discipline AND the code before it gives a number, and
  every rule number was checked against the governing body's own PDF (WL men's field v1.1, women's
  field v1.1, Sixes/box v2.0, NCAA men's and women's). Haudenosaunee **Olympic eligibility for LA28
  is dated in-text** (IOC position as of March 25 2026; WL's qualification pathway as of July 1
  2026) and tells the learner to re-check rather than picking an outcome. Section 6 is the
  amateur/entrepreneur map, coaching, officiating, stringing, table crew, program-building, and
  Lesson 27 names the sport's access and equity problems honestly. **Re-run \`pnpm seed:courses\`.**
- ✅ **FAA Part 107, sectioned, quizzed, and click-to-reveal** (\`fix/faa-sections-quizzes\`). The
  import had seeded 90+ lessons as ONE flat list (\`seed-faa.ts\` never set \`section\`, so the course
  built zero modules), only 5 of its 14 modules had a quiz, and the audio "[CHECK]" beat rendered as
  a plain "Quick check" heading with the answer in prose right below the question. Now: all 14
  modules from the import's own metadata become collapsible SECTIONS (course page + lesson-page
  contents rail), every module ends with a quiz (6 imported + **10 authored**, 207 questions total,
  in the committed \`scripts/data/faa-part-107-quizzes.ts\`), all 92 quick checks are
  \`:::reveal\` click-to-reveal, and the 180 recall beats became self-graded recall cards.
  Authored explanations cite 14 CFR only where a real rule governs. Re-run \`pnpm seed:faa\`
  (\`--dry-run\` prints the breakdown without touching the DB).
- ✅ **The Indianapolis cluster: five more site courses** (\`bundle/indy-cluster-2026-07-23\`). The
  route-course series now has its full first metro: **The Gym and the Color Line**, **Two Racetracks**,
  **Mudsock**, **The President's House** and **Fort Harrison**, joining the Indiana Avenue pilot. Each
  applies the same six-beat template to one place, so the metro teaches clearance, school district
  lines, admission to a sport, suburban formation, federal land and a presidency as six views of the
  same civic machinery. Every one ships **without its 360 tour**: the Wanderlearn embed URL drops into
  the \`*-now-tour\` lesson later and a re-seed picks it up.
  The research changed the plan more than once, which is the point. The proposed Unigov spine was cut
  as a cause of Indiana Avenue's clearance because every instrument predates it. Course 2 refined what
  survives: Unigov did not segregate the schools, it made an existing segregation permanent at the one
  moment Indiana's own rule would have dissolved it. Course 3 could find no published rule barring
  Black drivers from the premier race, and a 1947 newspaper statement cuts the other way, so the claim
  became the documented mechanism of licensing and entry approval. Course 4 refused "where the tax base
  went" for lack of a longitudinal study. Course 5 declined to resolve Harrison into a hero. Where
  accounts disagree, these courses teach the disagreement.
- ✅ **The route series is complete: 14 courses, plus a positive track of 3**
  (\`bundle/route-series-complete\`). Five more metros joined the Indianapolis cluster,
  **Washington DC** (where the instrument was blessed), **Philadelphia** (the university and the
  block), **Pittsburgh** (where the playbook was written), **Baltimore** (the whole chain, 1910
  ordinance → covenant → redlining → renewal) and **Seattle** (the modern bookend), and **two
  capstones** close it: *How the Tools Travelled* tests the cross-city connections as claims rather
  than asserting them, and *Exported* asks what South Africa and Nazi Germany actually read of
  American race law, keeping those two on **separate evidentiary footings** and stating in its own
  text that it does not equate outcomes.
  **Then the shape problem got fixed.** Fourteen courses on clearance and exclusion can leave a
  learner concluding this history is only things done to people, which is false, and no amount of
  upbeat sentences inside those courses fixes it, because the argument is made by the CATALOGUE.
  So a second track runs beside it (\`plans/44\`): **The Schoolhouse Network** (the Rosenwald
  school-building program, where the finding is that communities contributed **more** than the Fund,
  16.5 vs 15.1 percent, which reframes a story usually told as philanthropy), **Where We Rested**
  (Black resort and beach communities as going concerns, establishing that Bruce's Beach returned
  **two lots and not the park**, that four other Black families in Block 12 got nothing, and that the
  land was sold back within about seven months), and **What They Built** (five business districts read
  as firms, out of charters and insurance filings, around the question nobody teaches: how do you
  capitalise a district when banks will not lend to you).
  **The governing rule is stated inside each course and enforced structurally:** never use a positive
  to soften a negative. The claim is **co-occurrence**, not balance, and it does not net out.
  Schoolhouse classifies every row of its co-occurrence table as causal, responsive or
  simultaneous-only and says Tulsa is simultaneous-only and must not be upgraded. Where We Rested
  ships a banned-sentence table ("but it wasn't all bad") and refuses the "civil rights hurt Black
  business" reading, naming the confounders instead. What They Built puts internal failures (the True
  Reformers embezzlement, Binga's charge) in the **achievement** column where they belong, and teaches
  no instruments of clearance at all, because the route series owns those.
  These courses also **cut** load-bearing claims rather than repeat them: Rosenwald's ubiquitous
  "$18.1 million in public funds" and Greenwood's "a dollar circulated 19 times", both cut on method,
  the second turned into the worked example of a claim to refuse. **Re-run \`pnpm seed:courses\`.**
- 🔧 **The "longest option" tell: measured, guarded, and FAA fixed** (\`fix/longest-option-tell\`).
  The sibling of the answer-position tell below, and the same defect from the other direction: the
  right answer collects the qualifier and the "because" clause while the distractors stay short, so a
  learner can **click the longest option without reading the prompt**. \`shuffleOptions\` does NOT
  fix it, because length travels with the option text wherever the shuffle moves it.
  Measured properly for the first time, and the number is uncomfortable: **307 of 355 quiz banks**
  are over the limit, about 155 of them at 90-100 percent, across **138 files** and roughly 4,000
  questions. It is a house authoring habit, worst in the generated courses (the AI, labor and
  precolonial series sit at or near 100 percent) and absent from the hand-authored route series,
  which measures 0. The metric scores what a learner actually gets from "always pick the longest",
  against the **visibly** longest set (a one-character edge is not a tell), so a balanced bank scores
  the same as guessing.
  **FAA Part 107 is fully fixed**, first, because it is the highest-stakes content here: a learner
  who passes by length is told they are ready for a **real FAA knowledge test** they will then fail.
  All 13 banks are now under the limit and the largest, 20 questions, sits at 26 percent, which is
  guessing. About 117 edits, every one to option TEXT only: no prompt touched (\`questionKey\` hashes
  the prompt alone, so an edit would reset every learner's history), no option reordered and no
  \`correctIndex\` moved (stored attempts keep the chosen index). Verified mechanically across all
  203 questions. Distractors were checked to stay **wrong** under 14 CFR, not merely longer, and the
  best of them now teach: the alcohol question offers 4 hours/0.08 and 24 hours in parallel phrasing
  against the correct 8 hours/0.04, so it tests whether you know the number.
  \`pnpm check:longest-option\` runs inside \`pnpm lint\` as a **ratchet**: the 138 pre-existing files
  carry their measured score, may not get worse, and anything not on that list fails. The remaining
  sweep is planned in \`plans/47\`, AI series first.
- ✅ **Quiz answer positions are balanced, and guarded** (\`fix/quiz-answer-balance\`). A catalogue-wide
  audit found **118 quiz banks** where more than 60 percent of correct answers sat at one option index
  with no shuffling, roughly 1,250 questions a learner could pass by always picking the same letter.
  All 118 now shuffle, so the stored index never reaches the screen as a fixed slot, and scoring is
  unaffected because it is by identity. **No prompt, option, correct answer or explanation changed**,
  so per-question history survives. \`pnpm check:quiz-balance\` runs inside \`pnpm lint\` and fails
  the build if a skewed unshuffled bank ever returns.
- ✅ **Saved offline courses know when they are out of date** (\`feat/offline-content-version\`,
  migration 0037). BAM asked the honest question: do offline courses sync when the professor updates
  them? The answer was half yes. Lesson PAGES are network-first, so an online learner always sees
  the new content, but downloaded MEDIA is cache-first with no revalidation, so replacing a lesson's
  audio at the same URL left everyone who downloaded it on the old file, forever, with no signal.
  Courses now carry a \`content_version\` that bumps whenever a lesson or module is created, edited
  or deleted (bumped in the query layer, so seeds and any future write path bump too, not just the
  authoring routes). A saved lesson records the version it downloaded; **/downloads** compares it
  against the live one and offers **Update available**, which re-downloads that course and evicts
  the stale media first so the refresh is real rather than the cache handing back the same bytes.
  Deliberately not \`updated_at\` (which moves on a price change and would cry wolf). The version
  check is the one network call on that screen and fails silently, so offline the page behaves
  exactly as before.
- ✅ **Readable authoring URLs** (\`feat/teach-readable-urls\`). The instructor pages were
  \`/teach/<uuid>\`, which is impossible to read, say out loud, or recognise in a browser history.
  They now accept the course **slug**: \`/teach/faa-part-107\`, \`/teach/faa-part-107/script\`,
  \`/teach/faa-part-107/submissions\`. **Every existing uuid link still works**, so nothing bookmarked
  breaks. No migration: \`courses.slug\` already existed for the public
  \`/{instructor}/{slug}\` URLs. Resolution is tenant-scoped like every other by-slug read (a foreign
  course 404s, never redirects), and because a slug is unique per instructor rather than per brand,
  an ambiguous slug deliberately resolves to nothing so the uuid stays the unambiguous way in.
- ✅ **Section quizzes can sit WITHIN a module** (\`fix/faa-section-quizzes\`). The FAA importer no
  longer forces every quiz to the module end: a quiz row in \`quizzes-import.csv\` may opt in with an
  \`after_lesson_order\` = the lesson \`n\` it should follow, and \`seed-faa.ts\` interleaves it right
  after that lesson (the module review still sits last). Untagged quizzes are unchanged, so this is a
  no-op until the data is tagged. The placement logic is a pure, unit-tested helper
  (\`scripts/lib/faa-quiz-placement.ts\`) that never drops or duplicates a quiz. Module 2 Regulations
  (the long one, 12 lessons, 3 quizzes all at the end today) is the intended first user: its
  Categories quiz maps to lessons 9 to 12. Actual tag values are a content decision for BAM (see
  \`plans/user-tasks/171\`); no data was retagged. Re-run \`pnpm seed:faa\` after any tagging.
  **Module 2 now ships this** as authored pools (next bullet) rather than CSV tags.
- ✅ **FAA Module 2 rebuilt as rotating per-section quiz pools** (\`fix/faa-m2-quiz-pools\`). Module 2
  Regulations had 3 quizzes stacked at the module end that between them tested only lessons 1 to 3
  (twice) and 9 to 11, leaving lessons 4 to 8 unquizzed. It is now 3 SECTION pools placed after the
  section each one tests: **Foundations** (16 questions, after lesson 3), **Certificate, Command and
  Core Rules** (20, after lesson 8, previously the untested gap), and **Operations Over People**
  (17, after lesson 11). Each serves a random subset per attempt (8, 9, 8) with shuffled options, so
  a learner retaking a quiz sees different questions instead of the same list. The 20 pre-existing
  questions are ported verbatim; the 33 new ones are each grounded in that lesson's own text with its
  real 14 CFR citation, and every answer key was verified against the lesson scripts. Authored
  quizzes now take precedence over the CSV import for any module they cover, because \`/content\` is
  gitignored and a local CSV edit would otherwise seed different quizzes on different machines.
  Re-run \`pnpm seed:faa\` to pick this up.
- ✅ **Quizzes score offline, integrity intact:** submitting a quiz with no network queues the attempt
  to the outbox (\`quiz-attempt\` kind) and scores it server-side on reconnect, so an attempt taken on a
  plane is never lost. The correct answers are still **never** sent to the device (server-scored as
  always), so nothing is exposed by taking the quiz offline. Instant local scoring for explicitly
  marked practice quizzes is the deliberate next step (it requires shipping answers, so it stays opt-in).
- ✅ **Quiz answer review:** the results page (\`/{user}/{course}/results\`) now replays your **latest
  attempt** per quiz, each question showing the option you chose vs the correct one (and its
  explanation), under a "Review your answers" toggle. Server-side only, so \`correctIndex\` is never
  exposed to a live quiz. Answers what learners asked twice ("review my scores AND answers").
- ✅ **Quizzes cap at 10 questions per attempt and rotate** (\`feat/quiz-rotation-cap\`). No attempt in
  ANY course now serves more than **10** questions: \`toSafeQuiz()\` in \`src/lib/quiz.ts\` is the single
  seam every quiz passes through on its way to a learner, so the cap covers authored quizzes, the
  CSV-imported FAA ones (the 24-question practice exam, the 11-question Regulation Quiz 4), and any
  course authored later, no per-course opt-in. An author asking for fewer than 10 still wins; more
  than 10 clamps. Scoring already graded the **served subset** by question identity, so \`passingScore\`
  keeps meaning what it says. To make the rotation actually vary, each of the **10 authored FAA banks
  grew from 6-8 to 15 questions** (+79, every one answerable from that module's own lesson text).
  Re-run \`pnpm seed:faa\` for the new questions.
- ✅ **FAA Part 107, the 11 module reviews the import was dropping** (\`feat/faa-review-lessons\`).
  Every module JSON carries a \`review\` key beside \`lessons\`, a ready-made recap, and
  \`seed-faa.ts\` had never read it, so the course shipped with none of them. All 11 (modules 1-11;
  modules 0/12/13 have \`review: null\` in the source) now import as a lesson at the END of their
  module, after the content lessons and **before the quiz**, review, then test. Their rapid-fire
  Q/A ("Question one. … Fact three. …") runs through the same \`:::reveal\` + recall-card conversion
  as the rest of the seed, so no answer is published in prose under its own question: **87 new
  click-to-reveal checks** (179 total) and 18 new recall cards, 0 left as prose.
- ✅ **Health/fitness courses migrated from CentOS + sectioned**: NASM CPT/CES/CNC, "Read Your
  Body's Data", ECS (Foundations/Fitness/Nutrition/Neuroscience) → Learn.WitUS; Speedway → ElementaryMBA.
  Gen-from-CentOS (\`pnpm gen:health\`), each course now has chapter/module/episode SECTIONS with
  section-scoped quizzes (≤10 Q). ECS copy-edited (em-dashes/AI-tells removed). \`pnpm seed:health\`/\`seed:speedway\`.
- ✅ **Speedway copy-edited** (em-dashes→clean, narration/production cues removed; citations preserved)
  and **ECS accuracy flags fixed** ("hundreds of millions of years"; the CECD sentence rewritten).
- ✅ **NASM CPT citations, resolved: cite the NASM CPT course as the primary source.** Every one of
  the 170 CPT lessons carries a \`## Sources & Further Reading\` block naming the **NASM Certified
  Personal Trainer (CPT)** curriculum + the National Academy of Sports Medicine (nasm.org) as its
  primary source, emitted by \`gen-health-data.ts\` (so a re-gen preserves it). Per-claim study
  citations remain a planned enhancement. (CES/CNC already carry real DOIs.) Re-run \`seed:health\`
  if the DB predates this. **Speedway S2/S3** still outline-only.
- ✅ **"Read Your Body's Data" metrics tracker, decided: keep on CentOS.** The course logs daily
  numbers in CentenarianOS's tracker (\`centenarianos.com/dashboard/metrics\`); the course now links
  learners there directly. witus does NOT build its own tracker (ecosystem: metrics live in CentOS).
- ✅ **Deepen the languages** (in branch): per-tense fill-in EXERCISES (forgiving on accents) +
  a **sentence-evaluating coach**: the learner writes a sentence and the AI checks grammar/word-order
  grounded only in the course, cites the rule, and gives a next prompt.
- ✅ **Language DIALOGUE lessons** (es/fr/pt/it): a "Dialogues" section per course with 3 realistic
  scenarios each (café order, asking directions, introductions): speaker-labeled transcript + English
  gloss + vocab list, a forgiving fill-in exercise, and a section quiz. Reuses only already-taught
  tenses (present, ser/estar·être/avoir·essere·ser/estar, ir+inf / futur proche, polite conditional).
  Wiring fix: \`seed:languages\` now routes authored courses through \`seedAuthoredCourse\` so
  \`section\`/\`exercise\`/\`quiz\` lessons actually persist (the old inline path only seeded text bodies).
  Next: civics depth.
- ✅ **Accent/special-character helper**: clickable accent bar on the exercise + sentence inputs
  (inserts é, ñ, ã, ç, è… into the focused field). Follow-up: per-language character sets.
- ✅ **BVC mezcal map point**: mezcal now has its own Commodity Map origin (Oaxaca / Santiago
  Matatlán), distinct from tequila's Jalisco (real CentOS geo data; cited Ep 12 + migration note).
  Beer (ep 8) and the tequila-mezcal course already exist, so **Season 2 (eps 8-14) is complete**.
- 🟡 Civics, ✅ **US Constitution 101**, ✅ **State vs Federal Power**, ✅ **How to Run for Office**,
  ✅ **How to Help a Campaign**, ✅ **Spotting Misleading Marketing**, ✅ **US/State/Local Government**
  all built (cited; National Archives / Constitution Annotated / FEC / FTC / FDA / NCSL / Census of
  Governments / Ballotpedia; case quotes verbatim; everything state-varying flagged + sourced, never
  asserted as universal). **Civics core complete.** Remaining: per-state template + US map (IN/AZ/AR).
- ✅ **Learning How to Learn** (cited cog-sci, retrieval/spacing/interleaving/metacognition; points to
  FlashLearn) + ✅ **Intro to Robotics & STEAM** (ElementaryMBA, cited NASA/JPL/micro:bit/Arduino/Code.org).
  Remaining: Ewe/Twi/Igbo (needs native review); per-episode BVC assignments; record audio.
- ✅ **AI courses F1-F4 BUILT**, F1 "AI Literacy" + F2 "Building with AI" (Learn.WitUS, cited NIST/
  OWASP/RAG); F3 "Young Makers: AI for Kids" (ElementaryMBA, grades 3-8, cited UNICEF/Common Sense/
  MIT Day of AI/Code.org/NIST); F4 "AI for Entrepreneurs" (ElementaryMBA, cited NIST + FTC + US
  Copyright Office + SBA). All coming-soon-gated. Next: the mastery ladders. Plan: \`docs/ai-curriculum.md\`.
- ✅ **LangGraph/LangChain courses** (\`feat/langchain-courses\`): 3 courses vetted + rewritten from
  the \`lang-chain/*\` source repos to the WitUS standard (no AI tells, hide-answer **recall cards**,
  Key Takeaways, per-module quizzes, hyperlinks to repo/app/tagged-files/docs, contractions), under
  **AI & Technology**. All built: **"LangGraph in Production: The WitUS Triage Agent"** (2 mod, 8
  lessons + 2 quizzes), **"Reflection Loops in LangGraph"** (wanderlearn, 7 mod, 43 lessons + 7
  quizzes), **"Multi-Agent LangGraph with Per-Agent RAG"** (centenarian, 7 mod, 28 lessons + 7
  quizzes). 79 lessons, 16 quizzes, 158 recall cards total. Seed \`pnpm seed:langchain\` (auto-discovers
  \`scripts/data/langchain/*\`). Pipeline gained \`recallContent\` + \`relatedProducts\` (cross-promo).
  Next: BAM builds the **learning path** Triage → Foundation (wanderlearn) → Project (centenarian).
- ✅ **Series membership on the course page** (\`feat/series-ordering-banner\`): a course that belongs to
  a learning path now shows a **"Part N of M in \<track\> (recommended order)"** banner with the ordered
  course list and a "Next in this track" link, so a learner knows the series exists and where this
  course sits (\`getPathsForCourse\` + the course page). Learn.WitUS's \`paths\` flag is flipped on
  (re-run \`pnpm seed:tenants\`); build the track at \`/admin/paths\` and it lights up. Closes the gap
  where the AI courses read as a loose pile instead of an ordered series.
- ✅ **Admin-managed stream settings** (\`feat/stream-settings\`): the persistent per-tenant stream
  (what would've been \`RTMP_STREAM_PLAYBACK_URL\` / \`STREAM_EMBED_CODE\` env vars) is now editable at
  **/admin/live**. Paste a provider embed (iframe-in-div) or a direct URL; the server **extracts the
  iframe src and allowlists its host** (\`src/lib/stream-embed.ts\`), storing only the URL in
  \`platform_settings\` (tenant-scoped, no migration). Renders on the Live page in a **sandboxed**
  iframe when no session is live. XSS-safe (never renders pasted HTML). Unit-tested. Falls back to
  \`RTMP_STREAM_PLAYBACK_URL\` / \`STREAM_EMBED_CODE\` env vars, so the value is set once. Viloud +
  Wave.Video hosts allowlisted. Multistream to socials = the \`stream-targets\` OBS-fan-out card.
- ⚪ **Paid streaming/media infra DEFERRED**: Mux / Cloudflare Stream (a thin media-library over a
  provider, spec \`plans/media-library-service.md\`) is **on hold until there are paying users**. Until
  then streaming stays **free**: the app embeds BAM's existing Viloud / Wave.Video player, no new spend.
- 🟡 **Admin/Operator workstream** (scheduled next): a consolidated \`/admin\` dashboard unifying the
  owner links (domains/live/paths/leads/roadmap) + **tenant settings** (flags: gamification dose,
  AI tutor, age-gate, coming-soon, **accent/branding**) + **marketing** (campaigns/promos). ~2-3 branches.
- ⚪ **Schools: Trade School + ElementaryMBA stay separate, bridged**: ElementaryMBA's HS end graduates
  into Trade School via a learning path (not merged).
- ⚪ **Documentarian program** (BVC): a course *family* teaching **trusted, cited documentation**, built
  from BAM's **Ghana trip** as the live case study. Shape: a shared **Foundations & Trust core** (ethics,
  consent, sourcing, representation) → a **standalone Archives & Records** course → a **medium ladder**
  (Words & Photo → Sound/Podcast → Motion/Film, lightest→richest tooling) → **medium × subject
  specializations** wired to the **CYOA** tool. Capstone: **one Ghana subject documented four ways**.
  Beginner-first; earns a gated specialization credential (see Platform backlog). Plan:
  \`plans/future/12-documentarian-program.md\`.
- ✅ **The Great Migration** (Culture & History): 12-lesson homeschool course covering the two
  waves, the three migration streams, the Black press, the Harlem Renaissance, music (blues→jazz→
  gospel), faith/foodways/mutual aid, civil rights, redlining, and the New Great Migration reversal,
  incl. the Pacific NW/Vanport Second-Migration thread. Cited (National Archives, Census Bureau,
  Smithsonian, BlackPast, Schomburg *In Motion*, Wilkerson/Gregory/Grossman); two claims flagged
  unverified in fact-checking (Philadelphia's "500%" figure, a Ray Atkeson 1943 photo attribution)
  were cut/softened rather than asserted. Ships with the **Great Migration map** (see Platform
  Maps). \`pnpm seed:courses\` picks it up. Companion to Hoodoo + Civics.
- 🔧 **The Great Migration: How Six Million People Remade America (and the World)** (Culture &
  History, \`content/great-migration-world\`). A high-school-level companion to the homeschool
  Great Migration course above, built on Isabel Wilkerson's three-family frame (Ida Mae Gladney,
  George Starling, Robert Foster) with an explicit GLOBAL pillar. 8 sections, 29 lessons (20
  teaching, 8 section quizzes with 15-question banks, 1 whole-course exercise): the push (Jim Crow,
  sharecropping and debt peonage, racial terror, the boll weevil), the pull (WWI/WWII industry, the
  Chicago Defender, kinship chains), the routes and cities, the culture (Harlem Renaissance, Chicago
  blues, Motown, the Black church and press), the political power (A. Philip Randolph and Executive
  Order 8802, the Northern Black vote), the costs (redlining, Shelley v. Kraemer, the second ghetto,
  white flight, Sugrue's deindustrialization), and the world (jazz to Paris, Chicago blues to global
  rock, Dudziak's Cold War civil rights, the New Great Migration reversal). Cited throughout
  (Wilkerson, Lemann, Grossman, Marks, Hirsch, Dudziak, National Archives, EJI); contested figures
  hedged, and the Philadelphia "500%" flagged as a verify, do not repeat moment. \`pnpm seed:courses\`
  picks it up. Distinct slug (\`great-migration-and-the-world\`), file, and export from the course
  above; cross-links Hoodoo, History of Unions, and Pan-Africanism.
- 🔧 **The Green Book: How to Read a Route** (Culture & History,
  \`content/green-book-read-a-route\`). **Opens the route-courses series**
  (\`plans/37-green-book-route-courses.md\`, Phase 1, course 1) and is the **prerequisite for every
  later site course** in it. Deliberately a METHOD course, not a site tour: high-school-and-up
  learners finish able to open a digitized edition, read a listing, chain listings into a real
  route, read a GAP as evidence, and research an address forward to what stands there today.
  7 sections, 20 lessons (13 teaching, 5 quizzes with 15-question banks, 1 map lesson with 22
  markers, 1 exercise), recall cards throughout. Teaches the four-level listing hierarchy
  (state, city, category, entry), the 1940 "under no circumstances do these listings imply that
  the place is recommended" disclaimer against the 1956 star legend, the 1956 category cut, and the
  three live readings of a gap (refusal vs absence vs reporting silence). Route worked example:
  Chicago to Los Angeles on U.S. 66 in the 1940 edition, where the chain breaks after Amarillo
  because New Mexico's entire section that year is ONE tourist home in Deming, off the corridor.
  Primary sources read directly from the digitized 1940 and 1956 editions (Schomburg Center,
  NYPL); framing from NPS (historic context, the 20 National Register Green Book properties,
  Route 66, Latimore Tourist Home), Title II read from 42 U.S.C. 2000a incl. the five-room
  owner-occupied exemption that describes a tourist home, the National Archives, Taylor (2020),
  Sorin (2020), Loewen (2005). The three circulating survival figures are given with owner, date
  and scope and explicitly NOT averaged, and the course states plainly that no complete national
  survey exists. A genuine source disagreement (which edition first carried the Latimore) is kept
  and taught rather than smoothed. Closes with a research assignment on a real address.
  \`pnpm seed:courses\` picks it up; no migration.
- 🔧 **Indiana Avenue: A District and What Replaced It** (Culture & History,
  \`content/indiana-avenue\`). **The PILOT SITE COURSE of the route-courses series**
  (\`plans/37-green-book-route-courses.md\` §1) and course 1 of the Indianapolis cluster
  (\`plans/39-indianapolis-pilot-cluster.md\`). It is the first course to run the **six-beat site
  template** end to end, one beat per section (Then, Built, Powers, Now, Next, Write), so it is the
  pattern every later site course copies. Prerequisite: the Green Book method course above, which
  teaches HOW to read a route; this one APPLIES that method to one nine-block corridor.
  6 sections, 21 lessons (14 teaching, 3 quizzes with 15-question banks, 1 map lesson, 1 exercise,
  1 \`virtual_tour\` lesson), recall cards throughout. **Its 360 tour is PENDING:** beat 4 ships as
  a \`virtual_tour\` lesson with **no \`contentUrl\`**, because the Wanderlearn embed URL does not
  exist yet and a tour URL is authoritative external data that is never guessed. The player renders
  the "no media yet" notice above the authored body, so the lesson reads as pending rather than
  broken, and the body is the learner's observation brief for when the tour lands. Dropping the URL
  in later is a one-line edit plus \`pnpm seed:courses\`.
  **Section 3 (Powers) is the load-bearing one** and is the civics, planning and taxes curriculum:
  five named INSTRUMENTS, each tied to a body, a statute and a document. The blight designation
  (the 1945 Indiana act, Pat Ward's Bottom, clearance from 1948, the 1956 declaration of almost
  38 acres for the IU Medical Center); eminent domain (the documented Temple family condemnation,
  23,000 dollars offered 1965 to 50,000 dollars settled 1979); the highway alignment decision
  (1956 Federal-Aid Highway Act, the 1957 state announcement, I-65 built 1968 to 1971, the inner
  loop opened 1975); a university as land assembler (the 1958 joint IU and Purdue campus plan,
  Hoosier Realty Corporation formed 1962, 401 parcels bought July 1964 to August 1966, about 300
  acres); and jurisdictional redrawing (Unigov, passed 1969, effective January 1, 1970, the only
  major postwar consolidation done without a referendum, schools and four municipalities excluded).
  **Lesson 13 TESTS plan 39's proposed Unigov spine against a date table and reports that it partly
  FAILS**, which is the finding rather than a problem: every instrument that took the Avenue's
  buildings predates Unigov, so the course ships the weaker, checkable claim (Unigov did not clear
  the Avenue, it changed who governs the ground afterwards, with the Black share of the city
  falling from 27 to 17 percent overnight). The popular "the interstate destroyed Indiana Avenue"
  line is softened for the same reason, and the widely repeated 17,000 displaced figure is
  attributed to its owner (an Indianapolis Star article of October 15, 1976, per WRTV) and marked
  city-wide rather than adopted. Beat 5 is live civics: comprehensive plan vs zoning, the
  Metropolitan Development Commission, and the Indiana Avenue Certified Strategic Plan whose honest
  status is "announced February 2023, still unadopted, completion expected autumn 2026", plus an
  exercise that has the learner look up a real parcel in MapIndy and the Marion County Assessor's
  property cards. Green Book listings for the corridor are transcribed from Table 6 of the 2025
  Indiana DNR and NPS multiple property documentation form (Borland & Linebarger, Gray & Pape),
  never asserted from memory; framing from the Encyclopedia of Indianapolis, Wachter (2014) for the
  Abell Foundation, SAVI, Chalkbeat, Archer (2020) and Rothstein (2017). A genuine source
  disagreement (Lockefield's 748 vs 798 units) is kept and taught. The map lesson is deliberately
  NATIONAL and says so: the lesson map renders a world projection, so a nine-block corridor is
  smaller than one marker, and the limitation becomes the beat-5 lesson about matching map scale to
  question. \`pnpm seed:courses\` picks it up; no migration.
- 🔧 **Training the Colonizer: The Knowledge That Was Taken** (Culture & History,
  \`content/training-the-colonizer\`). What enslaved and colonized people taught their enslavers, for
  high school students. 6 sections: rice and the **Black Rice debate** (Carney 2001 taught AS a debate
  beside Eltis, Morgan & Richardson 2007, no winner), indigo and cattle, building and ironwork,
  **Onesimus** and West African variolation in Boston's 1721 smallpox epidemic, and foodways and
  watercraft. The through-line, stated plainly: the knowledge was coerced, uncredited, and
  uncompensated. Cited (Carney, Wood, Littlefield, Dawson, Harris, Twitty); building attributions
  given as documented labor, not design. \`pnpm seed:courses\` picks it up.
- 🔧 **Clean: A Global History of Bathing and Soap** (Culture & History, \`content/history-of-bathing\`).
  Bathing and soap across traditions, for high school students. 8 sections: Rome (oil and strigil, no
  body soap), the Islamic hammam and hard soap (Aleppo and Nablus), the Indus Great Bath and Japan,
  the Finnish sauna and the Mesoamerican temazcal, Europe's LATER retreat from bathing and slow
  return, the Crusade and Columbian encounters, and a payoff that puts the "medieval Europeans never
  bathed" myth on trial and refutes it (a \`:::reveal\` and quiz items test the nuance). Vivid-but-thin
  claims (Moctezuma "twice a day" per Andres de Tapia) are attributed and hedged. Cited (Ashenburg
  2007, Smith 2007, Brown 2009, UNESCO ICH). \`pnpm seed:courses\` picks it up.
- 🔧 **The History of Unions: America and the World** (Culture & History, \`content/history-of-unions\`),
  the **anchor of the workers'-rights track**, for high school students. 7 sections · 22 teaching
  lessons · 7 quizzes (15-18-question banks, above the 10-question attempt cap so retries rotate) ·
  1 exercise. The US arc (Knights/AFL → **Haymarket** → Homestead/Pullman → **Triangle** → the
  **Wagner Act** → the CIO → **Taft-Hartley** → Randolph → **Memphis** → **PATCO** → the BLS density
  series) told **with the parts a comfortable course skips**: the NLRA's deliberate
  **agricultural/domestic carve-out** (29 U.S.C. § 152(3)) and why farmworker organizing had to
  happen outside the law; unions' **own** record of racial and gender exclusion (whites-only
  clauses, the apprenticeship chokepoint, segregated auxiliaries, *Steele v. L&N* (1944), the
  AFL-CIO declining to endorse the 1963 March); and the corruption chapters. **King was killed in
  Memphis because he was there for a strike**, said plainly. Then six genuinely different national
  models (Nordic/**Ghent**, German **co-determination**, Japanese **enterprise unions**, China's
  state-run **ACFTU**, **Solidarity**/**COSATU**, the Gulf **kafala** system) and the **ILO** floor,
  built on a transferable four-question frame. Accuracy posture is the point: **Haymarket's
  bomb-thrower is taught as unresolved** (the record never established who threw it; the lesson
  refuses to name one and flags that confident accounts in *both* directions exceed the evidence),
  as is Hoffa's disappearance; the NLRA exclusion splits **text** / **effect** / **motive**; every
  BLS, OECD, ILO and Gallup figure carries a **year** (incl. BLS's own caveat that the 2025 series
  is an 11-month average); and the standard PATCO folklore is corrected (permanent replacement was
  lawful from *Mackay Radio*, **1938**). Registered in \`seed-courses.ts\`; **no migration**,
  \`pnpm seed:courses\`. Cross-links to *Know Your Rights at Work*. Track proposal (11 country
  courses, 3 build waves) at \`/admin/future\`.
- 🔧 **Germany: Workers on the Board** (Culture & History, \`content/labor-germany\`): **Wave 1** of
  the workers'-rights country track, hanging off the anchor above (it does **not** re-tell the
  anchor's German lesson, it cross-links it). 6 sections · 16 teaching lessons · 6 quizzes
  (15-question banks, above the 10-question attempt cap) · 16 \`:::reveal\` self-checks. The payload
  is a pair of numbers a US student misreads without help: union **density ~14.1% (2024, OECD/AIAS)**
  vs **collective-bargaining coverage ~49% (2024)**, because coverage rides on **employer-association
  membership** (TVG § 3(1)) and **not** on statutory extension (which Germany barely uses, that is
  France). Co-determination taken apart with **information / consultation / co-determination** kept
  strictly distinct (they are not synonyms): works councils under the **Betriebsverfassungsgesetz**,
  the **Mitbestimmungsgesetz 1976** supervisory board, with the chair's **casting vote** (§ 29(2))
  that makes "half the seats" overstate it, and the **Montan-Mitbestimmung of 1951**, which really
  was parity. **No fairy tale:** Section 5 is the erosion (coverage down ~25 points in the West since
  1998, **OT-Mitgliedschaft**, the east/west gap, ~40% of firms over 2,000 employees engineering out
  of the parity board, incl. **Wirecard**), and Section 6 is the honest verdict, the natural-
  experiment evidence that co-determination's measured effects are **modest** (Jäger, Schoefer &
  Heining 2021, QJE; Jäger, Noy & Schoefer 2022, ILR Review), then the efficiency critique from the
  right and the "golden cage" critique from the left. Cited to the German statutes themselves,
  Destatis, IAB, OECD/AIAS, ETUI and the Hans-Böckler-Stiftung. Registered in \`seed-courses.ts\`;
  **no migration**, \`pnpm seed:courses\`.
- 🔧 **Mexico: The Protection Contract, and the Trade Deal That Came for It** (Culture & History,
  \`content/labor-mexico\`), **Wave 1 of the workers'-rights country track** and the **answer to the
  anchor's bleak ILO lesson** ("the floor is made of paper"). 5 sections · 10 teaching lessons ·
  5 quizzes (15-16-question banks, above the 10-question attempt cap so retries rotate) · 1 exercise.
  Teaches the **protection contract**, a real, registered collective agreement signed between a
  company and a union the workers never heard of, often before anyone was hired, which then legally
  **blocked** a genuine union, and rewires the student's core question from "*is there a union?*" to
  "**whose union is it?**". Then Mexico's **own 2019 labor reform** (personal/free/secret vote; the
  \`constancia de representatividad\`; the **legitimation** deadline of **1 May 2023**, when the great
  majority of ~139,000 registered contracts died for want of a worker vote) and the **USMCA Rapid
  Response Labor Mechanism**, the **only genuinely enforceable international labor tool in the whole
  track**, taught from the treaty text (**Annex 31-A**, US+Mexico only; a facility-specific **tariff
  penalty**; priority sectors **exclude agriculture**). Accuracy posture is the point: the RRM is
  taught as **leverage, not authorship** (Mexico's law came first, 1 May 2019, more than a year before
  USMCA entered into force 1 July 2020; the treaty text itself grounds the reform in a Mexican
  electoral mandate), and its **limits** are taught through the cases that went **badly**, the
  **San Martín / Grupo México mine** panel the US **lost** (13 May 2024: the RRM enforces a right, it
  cannot create one) and **Manufacturas VU / Piedras Negras**, where remediation was agreed and the
  company simply **closed the plant** (10 Oct 2023, ~400 workers). **GM Silao** (2021-22, SINTTIA) is
  the win; the **2026 Faurecia request** (18 May 2026) shows the tool survived a change of US
  administration; the **1 July 2026 joint review** (US declined the 16-year extension → annual
  reviews) is dated and left un-predicted. The scale of protection contracts is **deliberately not
  quantified** (no reliable count exists, and the course says so), and an unverifiable "BBB" petition
  named in an early draft was **cut rather than cited**. Registered in \`seed-courses.ts\`; **no
  migration**, \`pnpm seed:courses\`. Cross-links to the anchor and *Know Your Rights at Work*.
- 🔧 **Sweden & Denmark: The Wage Floor That Isn't a Law** (Culture & History, \`content/labor-nordics\`),
  **Wave 1 of the workers'-rights track**, a country course hanging off the anchor, for high school
  students. 6 sections · 14 teaching lessons · 6 quizzes (14-15-question banks, above the 10-question
  attempt cap so retries rotate) · 1 exercise (diagnose-the-mechanism). The reframe: **neither country
  has a statutory national minimum wage, by design**; the floor is a collective agreement. Teaches the
  **Ghent system** (union-run unemployment funds → ~two-thirds density) with **Norway** as the natural
  experiment (no Ghent → ~half) and Sweden's **2007 a-kassa fee reform** (density fell ~77%→71%,
  2006→2008, per **Kjellberg**) as the strongest causal evidence; **self-regulation** (**Saltsjöbaden**
  1938; the **September Compromise** 1899); Danish **flexicurity** taught as a **trade under strain**
  (dagpenge cut 4→2 years, 2010); and the track's sharpest single contrast, **sympathy/secondary
  action is legal here and illegal in the US** (cross-links **Taft-Hartley §8(b)(4)**). The still-
  unresolved **2023 Tesla dispute** is taught **dated, contested, and with no winner**. Honest limits:
  falling density, the **Laval** case (CJEU C-341/05, 2007) and migrant/platform outsiders, and the
  **counterintuitive** payload, the Nordic unions themselves **fought the EU minimum-wage directive**
  (2022/2041; Denmark's CJEU challenge C-19/23, outcome **not asserted**), because a statutory floor
  would undercut bargaining. **Sweden is kept distinct from Denmark throughout.** Cited to OECD/AIAS,
  ETUI, Eurofound, Kjellberg, the national confederations, and the EU directive text. Registered in
  \`seed-courses.ts\`; **no migration**, \`pnpm seed:courses\`. Sibling of the (separately branched)
  Germany course; cross-links the anchor and *Know Your Rights at Work*.
- 🔧 **Poland: Solidarność, When a Union Brought Down a State** (Culture & History,
  \`content/labor-poland\`), Wave 1 of the workers'-rights **country track**, for high school
  students. **6 sections · 13 teaching lessons · 1 exercise · 6 quizzes** (15-question banks, above
  the 10-question attempt cap so retries rotate; every question carries \`explanation\` +
  \`sourceLessonSlug\`). The one course in the track where a **trade union is the primary vehicle of
  a political revolution**: the 1980 Gdańsk strike, the **21 Demands** (demand #1 = free unions,
  citing ILO C87 Poland ratified in 1957 and ignored; the boards are on **UNESCO's Memory of the
  World** register), the Gdańsk Agreement, the **10 Nov 1980 Supreme Court registration fight**
  (taught precisely, the court's inserted "leading role of the Party" clause, the general-strike
  threat, the clause struck to a mere appendix), martial law (**13 Dec 1981**, nine miners shot dead
  at **Wujek**), the **Round Table** and **4 June 1989** landslide. **Told as the honest arc, NOT a
  triumph**: the union won the country and then **lost the workplace**, its own **Balcerowicz
  Plan** shock therapy (in force 1 Jan 1990) drove unemployment from an official 0 to **16.4% (1993,
  GUS)**, and today density is **~9% (2022)** and coverage **~12% (2023)** among the EU's lowest
  (OECD/AIAS), bargaining fragmented to the single firm. **Neutral + dated on live Polish politics**:
  states Solidarność's alignment with the national-catholic right (backed PiS, e.g. 2005) and names
  the contested **Wałęsa security-service file**, adjudicating neither. Teaches the **"junk
  contracts" (\`umowy śmieciowe\`) rhyme** with US misclassification + Mexican protection contracts,
  the track's payoff. Cited to UNESCO, the European Solidarity Centre, GUS, OECD/AIAS, ETUI and
  Eurofound. Registered in \`seed-courses.ts\`; **no migration**, \`pnpm seed:courses\`.
- 🔧 **India: When Most Workers Have No Employer** (Culture & History, \`content/labor-india\`),
  **Wave 2 of the workers'-rights country track**, and the proposal's "single most important course
  in the track": the course where **"worker = employee with an employer" breaks**. **6 sections ·
  14 teaching lessons · 6 quizzes** (15-question banks, above the 10-question attempt cap so
  retries rotate; every question carries \`explanation\` + \`sourceLessonSlug\`; a \`:::reveal\` per
  teaching lesson). The headline number is **named, dated and defined**: **~90% informal
  employment / ~82% informal sector** (India Employment Report 2024, ILO + Institute for Human
  Development, on the government's own PLFS), the 82-vs-90 definitional split is itself taught.
  **Party-tied federations** (AITUC 1920 / INTUC 1947 / BMS 1955 / CITU 1970, last completed
  membership verification **2002**, stated as such) as a **third politics-and-labor entanglement**
  against Poland and China; the **9 July 2025 general strike's "over 250 million" attributed to
  its organisers, never asserted**. **SEWA** (Ela Bhatt, Ahmedabad, registered 12 April 1972) as
  the track's one **employer-less union model**, the 1972 registration fight, the method
  (identity card, substituted counterparties, member-built institutions), and the honest limit
  (**no counterparty, no contract**). The **four Labour Codes taught dated at every threshold**:
  enacted 2019/2020 (29 laws → 4) → **in force 21 Nov 2025** → Central Rules 8 May 2026 → **state
  rules uneven as of mid-2026** (labour is Concurrent-List); first statutory **gig/platform
  recognition** (SS Code 2020 § 2; aggregator 1-2%-of-turnover funding; Rajasthan 2023 and
  Karnataka 2025 state laws; e-Shram 309M+ registrations by July 2025, registrations, not
  benefits). **Caste and labor via parliamentary data**: 377 sewer/septic deaths 2019-23 (Rajya
  Sabha, July 2024) beside "no manual scavenging as defined by the 2013 Act", the definitional
  artifact taught as such; NAMASTE profiling **67.9% SC** (Lok Sabha, Dec 2024); child labor
  **dated** (census 12.7M 2001 → 10.1M 2011; the 2016 amendment's family-enterprise exception and
  83→3 hazardous list; no current count asserted, the 2021 census was postponed). Cited to the
  ILO/PLFS, the Codes' text, parliamentary answers, Supreme Court judgments and SEWA's own record.
  Registered in \`seed-courses.ts\`; **no migration**, \`pnpm seed:courses\`.
- 🔧 **South Korea: Democracy, the Chaebol, and the Lawsuit as a Weapon** (Culture & History,
  \`content/labor-south-korea\`), **Wave 2 of the workers'-rights country track**, for high school
  students. **6 sections · 15 teaching lessons · 6 quizzes** (14-15-question banks, above the
  10-question attempt cap so retries rotate; every question carries \`explanation\` +
  \`sourceLessonSlug\`). The compressed century: **labor suppression as explicit development
  policy** under Park Chung-hee (the supervised FKTU, the Dec 1971 special-measures freeze, the
  Peace Market's teenage "sida"); **Jeon Tae-il's self-immolation (13 Nov 1970**, date verified;
  his reported last words *"We are not machines"* are **sourced to witness accounts via Cho
  Young-rae's biography (pub. 1983), not asserted as transcript**; Lee So-sun + the Cheonggye
  union); the women's unions of the 1970s (Dongil 1978, **YH → Bu-Ma → Park's assassination**,
  chain taught with hedged weights); the **1987 Great Workers' Struggle** (3,300+ strikes, ~1.2M
  workers, the **Poland cross-link with the causal arrow reversed**); FKTU vs **KCTU (founded
  1995, illegal until Nov 1999)** and chaebol **enterprise unions** (anchor's Japan lesson
  cross-linked); the **1997 IMF hinge** (letter of intent 3 Dec 1997, ~$58B package; Feb 1998
  layoffs + dispatch legalized) → the **regular/non-regular divide: 38.2% of wage workers /
  8.568M (Aug 2025, Statistics Korea)**, incl. **the movement's own blind spot** taught
  structurally (enterprise-union form; KTX attendants, Kiryung). **Question 4's modern form**:
  damages suits + **provisional seizure** (Ssangyong 2009, 77 days, ~4.7bn won awards, ~30
  deaths by 2018 with variance named, **Supreme Court June 2023** remand), the 2022 truckers'
  strike (**first-ever return-to-work orders, 29 Nov 2022**; ILO dispute taught both ways,
  **live**), and the **yellow envelope law** (passed 24 Aug 2025 after two vetoes, **effective
  Mar 2026, text + dates stated, no outcomes asserted**). Honest scorecard: **density 13.1%
  (2022, MOEL)**, the brief's "~10%" corrected, **coverage 14.8% (2018, OECD/AIAS)**,
  enterprise bargaining with **no extension mechanism**; ILO **C87/C98 ratified only 20 Apr
  2021**. Cited to Statistics Korea, MOEL, OECD/AIAS, ILO/NORMLEX, MOFA and the Korean + legal
  press. Registered in \`seed-courses.ts\`; **no migration**, \`pnpm seed:courses\`.
- 🔧 **Brazil: State-Chartered Unions, a Union-Made President, and the 2017 Rupture** (Culture &
  History, \`content/labor-brazil\`), **Wave 2** of the workers'-rights country track, hanging off
  the anchor. **6 sections · 11 teaching lessons · 6 quizzes** (15-question banks, above the
  10-question attempt cap so retries rotate; every question carries \`explanation\` +
  \`sourceLessonSlug\`). **Corporatism written into the law**: the 1943 CLT's three locks
  (**unicidade**, still in art. 8, II of the 1988 Constitution, which is why Brazil **still cannot
  ratify ILO C87**; the ministry charter; the **compulsory union tax**), the dictatorship turning
  the machine's keys (arrocho, pelego, DIEESE's 1977 audit of the faked inflation index), the **ABC
  strikes 1978-80** capturing the official union from within (vs Solidarność going outside, the
  matched pair), and 1988 breaking one lock while keeping two. Then the track's cleanest natural
  experiment: **Lei 13.467/2017** made the tax voluntary → revenue collapse taught **with figures
  and scopes flagged** (unions: R$2.0bn 2017 → R$88.2M Jan-Nov 2019, Secretaria do Trabalho via
  Gazeta do Povo; whole structure: R$3bn 2017 → R$65.6M 2021, via Poder360; density 16.1% 2012 →
  8.9% 2024, IBGE, falling **before** 2017, and 'cartorial' paper unions named, so both tidy
  framings are refused). **Lula taught neutral + dated**: the 2017-18 conviction AND the 8 Mar 2021
  jurisdictional annulment (neither an acquittal nor a conviction on the merits, the course
  adjudicates neither), 50.89% runoff win 30 Oct 2022 (Agência Brasil). **Informality 39.0% (2024)
  / 38.1% (2025, IBGE)** with the definition; **STF Tema 1291 (app drivers) taught as PENDING**
  (pulled from the docket 24 Jun 2026 pending the new ILO platform-work instrument; PLP 12/2024's
  exclusions named); the **outside-the-category rhyme** named across US misclassification / Mexican
  protection contracts / Polish junk contracts. Honesty section: **trabalho análogo à escravidão**
  (Penal Code art. 149, conditions, not chains), the **GEFM** (68,000+ rescued since 1995; 2,772
  in 2025, +38%, Repórter Brasil reporting MTE data) and the public **"lista suja"** (Oct 2025:
  +159 employers). Registered in \`seed-courses.ts\`; **no migration**, \`pnpm seed:courses\`.
- 🔧 **Chile: A Labor System Designed to Be Weak** (Culture & History, \`content/labor-chile\`),
  **Wave 2** of the workers'-rights country track, and the learner's recommended **LAST** country
  course. **6 sections · 14 teaching lessons · 6 quizzes** (15-question banks; every question
  carries \`explanation\` + \`sourceLessonSlug\`) **· 1 exercise** ("name the design"). The one course
  where a labor system is **DESIGNED, by a named author, with a stated goal**: the **1979 Plan
  Laboral** (DL 2756 unions / DL 2758 bargaining; eight decree laws, one 1978 + seven July 1979;
  José Piñera, appointed late 1978 amid the **AFL-CIO boycott threat**), bargaining locked to the
  **firm**, federations barred, pluralism-as-fragmentation, non-union \`grupos negociadores\`, and
  the strike engineered not to paralyse (replacement + the **59-day deemed-resignation trapdoor**,
  mirrored against *Mackay Radio* 1938). Before it: Iquique 1907 (toll taught **as contested**,
  official ~126 vs the Cantata's 3,600), the CUT (1953), the **34% density peak (1973,
  Fundación Sol)**; the destruction told from **Rettig Commission findings** (3,000+ killed or
  disappeared; CUT dissolved by **DL 12**, Sept 1973). The designers' case is **steelmanned in
  Piñera's own published words, then measured**: density **~16% (2023)** ≈ OECD average, coverage
  **~19.3% (2023)** among the OECD's lowest (avg ~33.5%), the **~3-point coverage-density gap as
  the firm-level fingerprint** (OECD/AIAS, in OECD 2025). Democracy keeps the design: 1990-91
  (Ley 19.069, trapdoor out, replacement kept) → **Ley 20.940** (in force 1 Apr 2017, replacement
  banned, \`huelga efectiva\`; **titularidad struck by the TC, Rol 3016-16**; level untouched).
  **Subcontratación** (Ley 20.123, 2007; the 2007 CTC/Codelco 37-day strike → Acuerdo Marco) named
  as Chile's **put-them-outside move** (rhymes: US misclassification, Mexican protection contracts,
  Polish junk contracts). Set **against the Nordics course**: same statutory silence on sectoral
  bargaining, **opposite cause**, the referee's silence vs the wall's. 2019 estallido + **both
  constitutional rejections dated, outcomes only** (4 Sep 2022: 61.86% Rechazo; 17 Dec 2023: 55.76%
  En contra; Servel). Cited to OECD/AIAS, BCN/LeyChile, Dirección del Trabajo, Memoria Chilena,
  Servel, Fundación Sol, Álvarez (2012) and Piñera (1990). Registered in \`seed-courses.ts\`;
  **no migration**, \`pnpm seed:courses\`.
- 🔧 **South Africa: The Union That Helped End Apartheid, Then Joined the Government** (Culture &
  History, \`content/labor-south-africa\`), **Wave 2** of the workers'-rights **country track**, for
  high school students. ⚠️ **NEEDS A SOUTH AFRICAN REVIEWER BEFORE PROMOTION** (per the track
  proposal): Marikana is still litigated and the ANC-SACP-COSATU alliance is a live domestic
  political fight, seeding is fine, but BAM must have the Marikana lessons checked by a South
  African reviewer before promoting (same posture as the Hoodoo courses; see
  \`plans/user-tasks/123-seed-labor-south-africa.md\`). **6 sections · 14 teaching lessons ·
  6 quizzes** (15-question banks; every question carries \`explanation\` + \`sourceLessonSlug\`).
  The spine: the union movement that helped end apartheid **then joined the government it once
  fought**. Exclusion **by race, by statute**, the track's outside-the-category move undisguised
  (ICA 1924's "employee" definition excluding pass-bearers, the 1953 strike ban and "works
  committees", the 1926 Colour Bar Act that white labour itself demanded, the Rand Revolt taught
  honestly). Durban 1973's leaderless strikes (documented RANGE: ~61,000 per the IIE study /
  ~100,000 per SAHO), Wiehahn's control gamble, **Joe Foster's 1982 independence warning** planted
  as "a prediction whose test results come later", COSATU's 1985 launch (~460,000, SAHO), the 1987
  miners' strike (both sides' numbers), the Tripartite Alliance into 1994. Post-94: **LRA 66 of
  1995** (no farm/domestic carve-out, the anchor's NLRA move deliberately refused) vs **32.9%
  official / 43.1% expanded unemployment (Q1 2025, Stats SA QLFS)**, the insider/outsider critique
  steelmanned BOTH ways, and **labour broking** as the track's rhyme (s 198, s 198A of 2014,
  *Assign Services* [2018] ZACC 22). 🔴 **Marikana taught from the Farlam Commission's published
  findings** (report released 25 Jun 2015): what it FOUND (defective operation, materially
  untruthful police account, Lonmin/NUM/AMCU failures, Ramaphosa accusation rejected) vs what it
  did NOT find (no political-order finding, no convictions, no compensation award), scene 1/scene 2
  kept distinct, accountability dated **"as of 2026" and left open**, no adjudication beyond the
  record. NUMSA expelled 8 Nov 2014 (33-24) / Vavi Mar 2015 / SAFTU Apr 2017, steelmanned from
  each side's own documents (minimum wage Act 9 of 2018 vs Marikana as rival exhibits, no verdict);
  the Poland cross-link ("won the state, lost the workplace?") offered as a QUESTION with the
  counter-case stated. Cited to SAHO, the O'Malley Archives, the statutes, Stats SA, the ILO,
  Wilson (1972) and the Marikana Commission report. Registered in \`seed-courses.ts\`; **no
  migration**, \`pnpm seed:courses\` (after review sign-off for promotion).
- 🔧 **Africa Before Colonization: The Documented Record** (Culture & History,
  \`content/africa-precolonial\`), the **anchor of the precolonial-Africa track** (from BAM's
  \`world.md\` queue). **7 sections · 16 teaching lessons · 7 quizzes** (15-16-question banks, above
  the 10-question attempt cap so retries rotate; every question carries \`explanation\` +
  \`sourceLessonSlug\`) **· 1 exercise** (name the people/place/period, the anti-flattening drill).
  **Opens with the claim in the deniers' own words**, Hegel 1837 ("no historical part of the
  World") and Trevor-Roper 1965 ("darkness is not a subject for history"), both quotes verified,
  then walks the record: **Kush** (Kerma, the 25th Dynasty c. 747-656 BCE, Meroë, Meroitic's
  read-but-not-understood script), **Aksum** (gold coinage c. 270 CE, Ezana's cross coins ~340s,
  Ge'ez, the 1937→2005 stele), **Ghana→Mali→Songhai** + Timbuktu's book trade, **Great Zimbabwe
  with the documented denial** (Mauch/Bent/Ancient Ruins Ltd → Randall-MacIver 1905 →
  Caton-Thompson 1929 → **Rhodesia's 1970 censorship law and Garlake forced out**, per Pikirayi
  2012), the **Swahili coast** (African towns, per the Shanga archaeology; Ibn Battuta on Kilwa,
  1331), **Benin** (Ife/Frobenius-Atlantis as the erasure pattern; the 2023 manilla isotope study;
  the **1897 looting with hedged counts** + dated restitution status) and **Ethiopia** (Lalibela;
  Wuchale Art. 17 → **Adwa 1896**; "never colonized" taught precisely WITH the 1936-41 occupation).
  **Accuracy posture is the point:** **Mansa Musa is taught as a source audit**, al-Umari's actual
  mithqal report via Levtzion & Hopkins, "richest ever" **refused** as unquantifiable (traces to a
  2012 listicle), the Cairo gold "crash" labeled **contested** (Schultz 2006), caravan head-counts
  "reported, not established"; the 1076 "Almoravid sack of Ghana" is contested (Conrad & Fisher
  1982); Timbuktu manuscript counts are reported estimates; "University of Sankore" is flagged as
  anachronistic; the Ark of the Covenant is church tradition, not artifact. **African participation
  in slavery and the slave trades is taught plainly** (Thornton, Lovejoy, Northrup; SlaveVoyages
  ~12.5M embarked / ~10.7M landed; Afonso I's 1526 letters as contemporary dissent WITHOUT
  dressing him as an abolitionist; the "sold their own people" gotcha corrected as anachronism),
  and **romantic overcorrection is taught as a trap equal to erasure**. Section 6 is the
  transferable "how we know" toolkit (radiocarbon/Jenne-jeno/Igbo-Ukwu, the Arabic corpus in
  scholarly translation, Vansina's oral-tradition rules, Ehret's linguistics, the convergence
  audit). Cited to the UNESCO General History of Africa, Gomez, Green, Fauvelle, Hunwick, museum
  records and UNESCO World Heritage documentation. Registered in \`seed-courses.ts\`; **no
  migration**, \`pnpm seed:courses\`. Track proposal (7 follow-on courses + build order) at
  \`plans/future-courses/africa-precolonial-track-proposal.md\` → \`/admin/future\`.
- 🔧 **Afrocentricity: How to Evaluate a Contested Paradigm** (Culture & History, \`content/afrocentricity\`),
  the **anchor of a proposed Afrocentricity track** (\`plans/future-courses/afrocentricity-track-proposal.md\`,
  renders at \`/admin/future\`), for high school students. **6 sections · 15 teaching lessons · 6 quizzes**
  (15-question banks, above the 10-question attempt cap so retries rotate; 90 questions) · 15 \`:::reveal\`
  self-checks; every question carries \`explanation\` + \`sourceLessonSlug\`. Afrocentricity is a **specific,
  named, genuinely contested** academic paradigm (**Asante** coined the term; roots in **Diop**), and the
  course does the hard thing: it teaches it **as its proponents define it**, presents the strongest claims
  **from their own books**, AND the substantive academic criticism **from the critics' own books**,
  **without the course taking a side**, asserting in its own voice only what is settled. The real
  deliverable is the transferable skill: **how to evaluate a contested paradigm.** The two live debates are
  taught with **no winner declared** and both sides cited from primary sources: the **Kemet / "was ancient
  Egypt Black?"** question (Diop vs. mainstream Egyptology, with the **2017 Schuenemann et al. ancient-DNA**
  study **dated and its limits stated**, one northern site, late window, three genomes) and the **Black
  Athena** exchange (Bernal vs. Lefkowitz + Bernal's 2001 reply; the concede/don't-concede split reported).
  **Stolen Legacy** (James) is taught as **academically rejected on specifics** (the Library of Alexandria
  postdates Aristotle's death) **without erasing** the documented Egypt→Greece influence. **Rigorous
  scholarship is distinguished from pop-Afrocentric myth** (the melanin pseudoscience of **Welsing/Jeffries**),
  a line Afrocentrism's **own** critics (**Howe**, **Ortiz de Montellano**) draw, so naming it is not
  partisan. Critics (**Howe/Appiah/Gilroy**) are steelmanned from their own books, then the proponents'
  replies, with honest scorekeeping. **No invented citations or quotes.** Cited to Asante, Diop, Bernal,
  Lefkowitz, Howe, Appiah, Gilroy, mainstream Egyptology and the 2017 aDNA paper (APA 7 + a \`## Sources\`
  list on every lesson). Registered in \`seed-courses.ts\`; **no migration**, \`pnpm seed:courses\`. The
  natural home for BAM's source note \`plans/future-courses/he-did-the-work/Molefi-Kete-Asante.md\`.
- 🔧 **Pan-Africanism: The Idea, the Movement, the Reckoning** (Culture & History,
  \`content/pan-africanism\`), the **anchor of the Pan-Africanism track**
  (\`plans/future-courses/pan-africanism-track-proposal.md\`, renders at \`/admin/future\`), for high
  school students. **6 sections · 16 teaching lessons · 6 quizzes** (15-question banks, above the
  10-question attempt cap so retries rotate; 90 questions) · a \`:::reveal\` self-check per teaching
  lesson; every question carries \`explanation\` + \`sourceLessonSlug\`. The full arc: 19th-century
  roots (Cuffe vs the ACS, the 1817 Bethel AME rejection, Delany, Ethiopianism, **Blyden's "African
  personality"** with his documented flaws) → **Williams's 1900 London conference** (Du Bois's
  verbatim "colour line" address) → the Congresses (1919's "as fast as their development permits"
  baseline vs **Manchester 1945**, taught as the pivot: workers' composition, independence demanded,
  the Nkrumah/Kenyatta/Banda roll call, honest footnotes) → **Garvey taught honestly** (UNIA scale
  with membership as a CONTESTED number; the Black Star Line collapse, the never-acquired *Phyllis
  Wheatley*, the single-count 1923 conviction AND Hoover's 1919 "notorious negro agitator" memo
  predating any crime, both halves, neither canceling; the KKK meeting; Du Bois's May 1924
  "lunatic or a traitor" verbatim, Garvey's colorist counterattacks paraphrased per quote policy) →
  **Nkrumah, Ghana 1957** (midnight-speech transcription variance flagged), the year of Accra 1958,
  **OAU 1963** (Casablanca vs Monrovia; "unite now or perish" scored honestly both ways;
  non-interference + Cairo 1964 borders from treaty text; Liberation Committee credit AND
  "dictators' club" debit) → **AU 2002** (Sirte 1999 with **Gaddafi taught plainly as the awkward
  midwife**; Article 4(h) verbatim, non-interference → non-indifference; AfCFTA/Agenda 2063 dated
  from the instruments; the text-vs-practice audit) → **Négritude** (the Nardal-salon Harlem bridge;
  Césaire/Senghor/Damas; Sartre's "anti-racist racism"; Soyinka's tigritude PARAPHRASED because
  wording varies) → **Rastafari/Ethiopia as the symbol-vs-fact set piece** (the "Look to Africa"
  prophecy audited as UNVERIFIABLE and traced toward James Morris Webb per Hill 1983; Garvey's
  documented 1937 "great coward" attack on Selassie; the two-ledgers method) → **the reckoning**:
  five structural tensions + the strongmen named with hedged, attributed numbers (Nkrumah's PDA and
  Danquah's death in Nsawam; Touré's Camp Boiro, where **OAU first secretary-general Diallo Telli**
  starved in 1977; **Amin chairing the OAU in 1975**; Mobutu; Gaddafi), because a celebration-only
  course isn't credible, and the dissident half of the tradition (Soyinka, Ngũgĩ, the survivors)
  named the crimes first. **Quote policy: verbatim-verified or explicitly flagged, never
  reconstructed; every date sourced; contested numbers taught as contested.** Cross-links (never
  duplicates) the shipped *Africa Before Colonization* and *Afrocentricity* anchors. Cited to Adi
  (2018), Adi & Sherwood (1995), Padmore's 1947 Manchester report, Hill's Garvey Papers, Grant,
  Cronon, Lewis, Nkrumah's and Du Bois's and Garvey's own writings, the OAU Charter and AU
  Constitutive Act, Meredith, Schmidt, Chevannes, Edmonds, Kesteloot, and Sharpley-Whiting (APA 7 +
  a \`## Sources\` list on every lesson). Registered in \`seed-courses.ts\`; **no migration**,
  \`pnpm seed:courses\`.
- 🔧 **Pre-Columbian Mesoamerica: Cities, Calendars, and the People Who Are Still Here** (Culture &
  History, \`content/precolumbian-mesoamerica\`), the **anchor of the Pre-Columbian Mesoamerica
  track** (7 follow-on courses proposed at
  \`plans/future-courses/precolumbian-mesoamerica-track-proposal.md\`). **7 sections · 17 teaching
  lessons · 7 quizzes** (15-question banks, above the 10-question attempt cap so retries rotate;
  105 questions; every question carries \`explanation\` + \`sourceLessonSlug\`) **· 1 exercise** (name
  the people/place/period, the anti-flattening drill) · one \`:::reveal\` per teaching lesson.
  The spread: the **Olmec** with the mother-vs-sister-culture question taught **as a live debate**
  (Diehl/Coe vs. Flannery & Marcus; Cascajal Block labeled unprovenienced/contested); **Aguada
  Fénix** (Inomata 2020, the oldest Maya monument is also the largest, found by LiDAR, read by its
  excavators as collective labor without kings and hedged as their argument); **Teotihuacan as the
  humility lesson** (builders, language, real name, and government all stated as UNKNOWN; the 378
  CE Tikal entrada known only via Maya writing; the selective burning c. mid-500s contested);
  the **Maya** (no empire, city-states; Tikal vs. Calakmul from the deciphered record; script +
  positional zero + Long Count; **the 2012 "doomsday" traced to Tortuguero Monument 6**, a
  damaged period-ending passage, an odometer rollover, no prophecy, per Stuart 2011; the **Classic
  collapse taught specific AND debated**, last stelae Tikal 869/Toniná 909, Chichancanab +
  Kennett drought cores, Petexbatun fortifications, brittle divine kingship, while the north
  flourished); the **Mexica** (Tenochtitlan's engineering with Cortés/Díaz market claims
  ATTRIBUTED as hostile witnesses; the Triple Alliance as a tribute empire "cheap to run, quick to
  shatter" read from the Codex Mendoza; **sacrifice taught honestly**, the excavated **Huei
  Tzompantli** (INAH, 2015-present) is real, the Fifth Sun logic explained-not-endorsed, and the 80,400
  / 136,000 chronicle figures **refused** as "reported, not established," with Harner's protein
  theory dismantled per Ortiz de Montellano 1978); **Oaxaca + the Purépecha** (the empire that
  beat the Aztecs; language isolate; bronze); **Central America beyond Mexico** (Joya de Cerén as
  the commoner-life corrective; the **Diquís spheres** with purpose honestly unknown and the
  Atlantis-mongering defused; the Isthmo-Colombian gold country); the **conquest per Restall's
  Seven Myths** (Indigenous-ally armies, "a civil war among Mesoamerican powers"; siege not
  technology; Quetzalcoatl-story labeled a probable colonial elaboration; **Nojpetén fell 1697**,
  the completion myth broken); the **demographic catastrophe as a RANGE** (~15-30M central-Mexico
  estimates, Cook & Borah vs. critics, → ~90% collapse to ~1-2M within a century, never one
  number, with guardrails against both minimizers and maximizers); and the **"how we know"
  methods lesson** (Landa's 1562 Maní burning quoted from his own Relación + the **~4 surviving
  codices**; the **Knorozov → Proskouriakoff → Coe** decipherment drama with Thompson as the
  authority-is-not-evidence caution; **PACUNAM LiDAR ~61,480 structures**). Closes with **"They
  are still here"**: ~7M Maya, ~6M speakers of ~30 Mayan languages, >40% of Guatemala (2018
  census), ~1.65M Nahuatl speakers (INEGI 2020), Caste War, CEH 1999 findings, Menchú's Nobel
  WITH the Stoll controversy reported, Guna Yala, Berta Cáceres, and why the "vanished
  civilization" trope harms living people. Cited to Coe & Houston, Miller-adjacent art-history
  sources, Martin & Grube, Cowgill, Smith, Restall, Townsend, INAH reporting, Nature/Science
  papers, the Popol Vuh and Florentine Codex in scholarly translation, and UNESCO. Registered in
  \`seed-courses.ts\`; **no migration**, \`pnpm seed:courses\` (task 109).
- 🔧 **Asia Before European Colonization: The Center of Gravity** (Culture & History,
  \`content/precolonial-asia\`), the **anchor of the precolonial-Asia track** (from BAM's
  \`world.md\` queue), for high school students. **7 sections · 17 teaching lessons · 7 quizzes**
  (15-question banks, above the 10-question attempt cap so retries rotate; 105 questions, every one
  carrying \`explanation\` + \`sourceLessonSlug\`) **· 1 exercise** (name the civilization/person/place,
  the anti-flattening drill) · a \`:::reveal\` per teaching lesson. **Orientation depth by design**
  (a map and a frame; depth belongs to the track's 8 proposed follow-ons): the zones, South Asia
  (Indus with the script taught as **UNDECIPHERED**, incl. the Farmer/Sproat/Witzel-vs-Parpola
  dispute over whether it encodes language at all; Ashoka's Kalinga edict with its figures flagged
  as the king's own; **zero cited link by link**, Aryabhata 499, Brahmagupta 628, Khmer 683,
  Gwalior 876, Bakhshali radiocarbon **contested** per Plofker et al. 2017; the Mughals as Central
  Asian **outsiders**), East Asia (Han census 2 CE as a different KIND of evidence; the An Lushan
  "36 million dead" **rejected** as a census artifact; Diamond Sutra 868; the Song revolution with
  primary sources named and Hartwell's iron figure labeled his estimate; Genji "often called" the
  first novel; sakoku as managed trade; **Jikji 1377 metal movable type before Gutenberg** stated
  precisely; Hangul's named inventor), **Southeast Asia given a full section** (Angkor per Evans et
  al. 2007 "largest preindustrial settlement complex," the Mouhot "discovery" refused; Srivijaya
  reassembled by Coedès 1918 as a lesson in what forgetting proves; Majapahit's Nagarakretagama
  read as court panegyric), and the connective tissue (Silk Roads per Hansen's revision + the
  Belitung wreck; the Baghdad translation movement with the **House of Wisdom hedged** per Gutas;
  the Mongols **neither only-barbarian nor only-Pax**, chronicle death tolls read as expressions of
  catastrophe, not counts). 🔴 **The thesis is cited, not asserted**: Maddison's (2007) shares
  (China+India ≈ **roughly half of world output as late as 1820**) taught as attributed
  reconstructions with caveats and NO false precision; **Pomeranz (2000) vs Broadberry/Guan/Li
  (2018)** taught as a live debate, **no winner declared**. **No utopia**: caste between the two
  myths (neither eternal essence nor British invention, per Bayly), Joseon **nobi** (Palais's ~30%
  attributed as his estimate), Khmer temple bondage (Zhou Daguan eyewitness), the Indian Ocean
  slave trade (Campbell; Malik Ambar), and **conquest before colonization** (Chola 1025, Ming-
  Vietnam 1407-27, Imjin 1592-98, Japan's 1910 annexation of Korea), "European colonization"
  taught precisely (enclaves 1510-1571 vs **Plassey 1757**; Japan/Korea/Siam/most of China never
  European colonies). Registered in \`seed-courses.ts\`; **no migration**, \`pnpm seed:courses\`.
  Track proposal (8 follow-on courses + build order) at
  \`plans/future-courses/precolonial-asia-track-proposal.md\` → \`/admin/future\`.
- ✅ **Golf: Play It, Know It, Work In It** (**Sports**: a new category), 42 lessons in 6 sections
  (How to Play · The Rules · Strategy · History · Tours & Leagues · Opportunities), for high school
  students. Rules cited to the 2023 code the USGA and The R&A write jointly; the World Handicap
  System taught from the verified figures (launched Jan 2020, max Index 54.0, 54 holes for an
  initial index, Index = average of the **lowest 8 of the last 20**, i.e. potential, not average).
  The **History** section is the spine: the PGA's Caucasian-only clause (1934-Nov 1961, acknowledged
  but never apologized for) and the three documented evasions institutions used to stay segregated,
  rename the tournament an "Invitational," lease the municipal course to a sham "private club," or
  sell it, plus the statutory reason they worked (**Title II does not list golf courses at all**;
  42 U.S.C. § 2000a(b), and § 2000a(e) exempts private clubs), which is why desegregation ran
  through the **Fourteenth Amendment**. Centerpiece is a **primary-source lesson**: students read the
  **January 1962 *Golfdom*** trade report of the repeal and find it credits "difficulties in making
  tournament arrangements" and names none of Sifford, Spiller, Rhodes, or Mosk, the article isn't
  false, it's *emptied*. Corrections carried deliberately against widely published error (incl. the
  PGA TOUR's own site): *Holmes* was **vacated**, not reversed; the Greensboro Six did **not** lose
  5-4 (*Wolfe*, 1960, dismissed the appeal); *Palmer v. Thompson* is a **pool** case. **Opportunities**
  is the payload: the **2022 amateur-status rewrite legalized sponsorship/endorsement/NIL/expenses/
  free equipment** (paid instruction is the one door still shut, and non-cash payment counts), and
  the **U.S. Open is genuinely open**, any amateur at a **0.4** Handicap Index may enter, and the
  USGA accepted a record **10,202 entries** for the 2025 U.S. Open. No unverifiable figure is printed
  (no NGF standalone Black-participation %, because none exists, the absence is taught as the
  finding; no U.S. Women's Amateur handicap limit, because it couldn't be verified).
  \`pnpm seed:courses\` picks it up. First of the five sports courses.
- 🔧 **Croquet** (\`content/croquet-course\`, Sports): 36 lessons across **8 sectioned modules**
  (28 teaching + 8 section quizzes, each quiz a **15-question bank** so the 10-question attempt cap
  actually rotates; every question carries \`sourceLessonSlug\`). The load-bearing constraint:
  **croquet is not one game.** Golf Croquet and Association Croquet (WCF), American Six-Wicket
  (USCA) and informal garden croquet have different courts, turn structures and scoring, so **every
  rules lesson names the code it teaches in bold in its first line** and the one lesson that compares
  them says so explicitly. Handicaps are taught **per code**, incl. the trap that American and
  Association handicaps are **different scales** (the USCA says add two), and the course **refuses
  to quote a numeric range** for the American scale because the USCA publishes no floor.
  **Every rule number was re-read in the governing body's current rulebook**, not recalled: 42 of 45
  verified verbatim, three corrected (AC choice-of-ball is **Law 2.6.1**, not 2.3; the USCA shot
  clock is **Rule 13.8** with its "in a time limit game" qualifier restored, not "13.8(a)"; USCA
  **17.1 is "Option to Play Either Ball"**, an experimental rule). Where **no** rule number exists the
  course says so instead of inventing one, "break" is not defined in the AC Laws, "jump" appears
  **zero** times in the GC Rules, "carryover deadness" appears **zero** times in the USCA rules.
  Sections 6-8 do the part croquet courses skip: **history you can actually check** (incl. a
  "stories we cut" lesson that shows its own working, the All England Croquet Club was founded on
  the **Strand**, not at Wimbledon; the croquet women were **not** the first female Olympians), the
  club/handicap ladder, and the real openings for an amateur or entrepreneur. Unsourceable folklore
  (a Boston croquet "ban") was **cut**, not softened. \`pnpm seed:courses\` picks it up; **no
  migration**.
- ✅ **Know Your Rights at Work** (Civics): the **labor-side sibling** of *The Bill of Rights: Know
  Your Rights*, and the educational layer under Work.WitUS's union-contract product. 19 lessons across
  **6 sections** (13 teaching · 2 exercise · 6 quizzes, banks of **15** so the 10-question attempt cap
  actually rotates; every question carries an \`explanation\` + \`sourceLessonSlug\`). Six women, one
  argument in six movements: **Addie Wyatt** (what a contract *is*, the seniority clause that saved her
  job at seventeen) · **Dolores Huerta** (building power outside the room) · **Crystal Lee Sutton** (what
  retaliation *costs* the person who absorbs it) · **Sara Nelson** (leverage) · **Fran Drescher +
  Meredith Stiehm** (AI likeness, residuals, and an employer restructuring the job so the old contract
  stops mapping onto it). **The law is quoted, never guessed**: NLRA §7 (29 U.S.C. § 157), the §2(3)
  exclusions + §2(11) "supervisor" (§ 152), §8(a)(1)/(3)/(4) (§ 158), §10(b)'s **six-month** charge clock
  and §10(c)'s **make-whole-not-punitive** remedy (§ 160), 29 C.F.R. § 102.9 ("**any person** may file"),
  and the **Railway Labor Act** (45 U.S.C. § 156 + the NMB's own release/30-day-cooling-off process),
  because flight attendants are *excluded* from the NLRA, which is the whole reason Nelson's leverage
  lesson works. \`NLRB v. Washington Aluminum\`, 370 U.S. 9 (1962) anchors protected concerted activity:
  **no union required**. At-will employment **varies by state**, so the course says so and names Montana
  as the statutory exception rather than asserting one state's rule as universal. **Five calendar errors
  corrected on purpose**: Wyatt was one of **twelve** women on Time's 1975 cover (Time named "American
  Women" *collectively*), her 1976 election was to the **Amalgamated Meat Cutters** (UFCW didn't exist
  until 1979), Sutton's mill was **Roanoke Rapids** (and the union was the **TWUA**, not ACTWU), Drescher
  and Stiehm are **former** presidents (both left office Sept 2025), and Nelson's unverifiable "Time 100"
  credit is **dropped and said so in-lesson**. **Sutton's court case does not exist**, a published-
  opinions search returns no case bearing her name, so the course teaches retaliation from the statute and
  **says so out loud** instead of inventing a citation. The **Huerta/Chavez** record (March 2026) is
  addressed **directly and cited** (AP/NPR/CalMatters), dated, adjudicating nothing and inventing no
  quote: *a movement is not a saint; the person who built the power can also be harmed inside it.*
  \`pnpm seed:courses\` picks it up; **no migration**.
- ✅ **Tennis: Play It, Read It, Work In It** (Sports): 41 lessons across **8 sections**, each with
  its own quiz (banks of **15-16** questions, so the 10-question attempt cap actually rotates):
  the rules · **hitting the ball** (grips, strokes, footwork) · **strategy** (the First 4 Shots,
  Serve +1, court geometry, doubles) · origins & amateurism · **the people** · how the sport is
  organized · opportunities for amateurs · opportunities for entrepreneurs. **Governance is stated
  correctly**: the **ITF publishes the Rules of Tennis**; the **ATP/WTA tours and the four Slams
  layer their own conditions on top, and the Slams are run by their national federations and the
  Grand Slam Board, not by the tours.** Rule numbers are read out of the ITF 2026 PDF, never guessed
  (tie-break is Rule 5(b), not a rule of its own; service let is Rule 22; No-Ad/No-Let/match
  tie-breaks are Appendix VI), and formats that **vary by event** are named as varying rather than
  asserted as universal. The **equal-prize-money timeline is the honest one**: US Open **1973**
  (first, via a boycott threat + a Bristol-Myers cheque), Australian Open **1984** → **reverted to
  paying men more by 1996** citing TV ratings → restored **2001**; Wimbledon **2007** (22 Feb, last
  to offer *any* equal pay); Roland-Garros **2006 champions only → 2007 full draw** (16 Mar, last to
  *full-draw* equality), a **34-year** climb, with the WTA's rest-of-tour pathway still pledged for
  **2027/2033**. Covers the segregated **American Tennis Association**, **Althea Gibson**, **Arthur
  Ashe**, **Billie Jean King**, the **Original 9**, the founding of the **WTA**, and the **Open era
  (1968)**. **No invented statistics**: where full per-round prize-money distribution data doesn't
  exist, the course says so instead of fabricating a table. \`pnpm seed:courses\` picks it up.
- ✅ **Football: Play It, Read It, Work In It** (Sports): 42 lessons across **8 sections**, each with
  its own quiz (banks of **15**, so the 10-question attempt cap actually rotates; 120 questions, every
  one carrying an \`explanation\` + \`sourceLessonSlug\`). The game the US calls soccer, called
  **football** throughout at BAM's instruction: the game & the pitch · **how to play** (first touch,
  dribbling, finishing, defending, goalkeeping) · **the Laws** · **strategy** · **history** · who runs
  what & the leagues · money & labour · **opportunities for amateurs and entrepreneurs**.
  **Governance is stated correctly, and this is the load-bearing part**: the **Laws of the Game are
  written by THE IFAB, not FIFA**, FIFA holds **4 of 8 votes**, a change needs a three-quarters
  majority (**6**), so FIFA *cannot change a Law alone*. There are **17 Laws**, revised annually, and
  every Law statement is read out of the official **Laws of the Game 2026/27** PDF (effective 1 July
  2026) with its Law number, never guessed. **Offside is Law 11** (hands/arms are not considered),
  **handball sits inside Law 12** (the current text, the old "accidental handball anywhere in the
  build-up voids the goal" clause is **gone**, and the course says so), and **VAR is Law 5 §4**
  (including the *new* 2026/27 competition-option corner-kick review). **Contested numbers are taught
  AS contested, never resolved to a headline**: the Dick, Kerr Ladies' Goodison Park crowd (c.
  46,000-53,000) and **Qatar 2022**, where four figures are shown to answer four *different* questions,
  the Guardian's **6,500** (all-cause, five nationalities, a decade), Qatar's **37** (stadium sites
  only), Al-Thawadi's own **400-500** (tournament-connected projects), and the **ILO's 50** (work-
  related, 2020), landing on the honest finding that the toll is unknown *because the deaths were not
  investigated*. History is told honestly: **ball games long predate England** (FIFA's own careful
  cuju claim, with **no** fake family tree to Wembley), the **1863** codification, and a full lesson on
  **the FA's 1921 ban on women's football, which lasted 50 years**, the resolution quoted verbatim
  ("quite unsuitable for females"). The entrepreneur section is concrete and cited: **refereeing** as a
  real paid job from age **13** (one association's *published* pay scale, \$30-\$90/game), the coaching
  licence ladder, the **pay-to-play** problem (Aspen/Project Play: soccer ≈**\$1,188**/child/season;
  **24% vs 40%** participation by household income), and the honest odds (**NCAA's own** table: **1.4%**
  of HS boys and **2.8%** of girls reach D-I, and the NCAA publishes **no** HS→pro figure for soccer,
  which the course explains rather than inventing). **No fabricated statistics, quotes or people**; the
  "soccer" etymology is verified as a **British** coinage and the undocumented Wreford-Brown
  attribution is explicitly **not** repeated. \`pnpm seed:courses\` picks it up.
- ✅ **Chess: Play It, Study It, Build With It** (Sports, \`content/chess-course\`): 34 lessons
  across **6 sections**, each with its own quiz (banks of **15**, so the 10-question attempt cap
  actually rotates; 90 questions, every one carrying \`explanation\` + \`sourceLessonSlug\`), 28
  \`:::reveal\` checks (one per teaching lesson), spaced recall cards, APA 7 + \`## Sources\` throughout.
  How to play (board, the six pieces, check/mate/stalemate, castling, en passant, promotion,
  algebraic notation) · **the FIDE Laws of Chess with VERIFIED article numbers**, touch-move is
  **Art. 4.3**, and the claimed-vs-automatic draw distinction most summaries miss is taught
  head-on (threefold **9.2** / fifty-move **9.3** are CLAIMED; fivefold **9.6.1** / 75-move
  **9.6.2** are AUTOMATIC; flag-fall **6.9** with its no-possible-mate draw exception; rapid/blitz
  bounds from **Appendices A/B**; where a sub-claim couldn't be pinned to a number it's taught
  without one · strategy (opening principles over memorization, forks/pins/skewers, discovered
  attacks, endgames, piece values flagged as **coaching convention, not law**) · **verified
  history**: chaturanga (~6th-c. India) → shatranj → the c. 1475 "mad queen" revolution (Murray
  1913; Yalom 2004), Steinitz-Zukertort **1886**, FIDE takeover **1948**, Menchik **1927**,
  Fischer **1972**, Kasparov **1985**, and the Deep Blue story kept EXACTLY right (**Kasparov WON
  1996 Philadelphia 4-2; Deep Blue won the 1997 NYC rematch 3½-2½, Game 6 on 11 May 1997**),
  AlphaZero **2017** (+28 =72 −0 vs Stockfish; *Science* 2018), and the **2020 boom on Netflix's
  own numbers** (62M households/28 days; Chess.com new players ×5) · organized chess (FIDE/US
  Chess pyramid, **Elo explained**, US Chess 1960, FIDE 1970, GM/IM/FM/CM thresholds + the
  27-game norm system from Handbook B.01, Olympiad since 1927, Swiss system, **chess.com vs
  Lichess as a business-model exhibit**) · and an **honest amateur/entrepreneur economy**: almost
  nobody earns a living *playing*, the course maps coaching + the scholastic pipeline, content,
  TD/arbiter/organizer work, and **fair play as a new profession**, with the **Carlsen-Niemann
  case stated precisely** (100+ likely ONLINE games per Chess.com's 2022 report, **no
  determinative OTB evidence**; suit dismissed June 2023; resolved Aug 2023) and **no invented
  rates or salaries**, numbers carry a year + source or were cut. Re-run \`pnpm seed:courses\`;
  **no migration**.
- 🔧 **/explore is a landing page now** (\`feat/explore-landing\`): the Commodity Map page was an
  \`<h1>\`, one sentence, and the map: a tool page that explained nothing and asked for nothing. It
  now answers **what is this → what will my student learn → why trust it → what next**, for the
  people who actually buy (parents, teachers, homeschoolers), each addressed on their own terms.
  **The map is still the centrepiece**, short hero, map immediately below it, both CTAs pointing
  back at it. **Every figure on the page is a count of the tenant's own rows** (episodes, origins,
  seasons, belt countries, lessons, courses, free courses, cited sources, verified sources, tracked
  claims, named instructors) via a new tenant-scoped \`src/db/queries/explore.ts\`, \`course_sources\`
  / \`course_claims\` carry no \`tenant_id\`, so every aggregate INNER JOINs \`courses\` and filters
  \`courses.tenant_id\`; that join IS the boundary. **No invented stats, no efficacy claims, no
  testimonials**; the one pedagogical claim carries three real, verified APA 7 citations rendered
  on the page (Smith 2002; Sobel 2004; McGrew et al. 2018). The FAQ answers only what the repo can
  answer truthfully (cost is derived from \`price_type\`), time commitment is still **deliberately
  absent** pending BAM (\`plans/user-tasks/72\`); **age range is now confirmed (high school)** and
  **standards alignment now ships** (see below), so both have been removed from that list. Hero
  copy is per-tenant overridable via \`platform_settings\`
  (\`explore_headline\`/\`explore_subhead\`/\`explore_intro\`) with brand-neutral defaults, **no
  migration**. Metadata/OG/JSON-LD tenant-scoped. Mobile-first (no 320px overflow; ≥44px targets).
- 🔧 **/explore: pricing conversation + the map fixes** (\`feat/explore-pricing-contact\`): closes
  three of the four open questions from \`plans/user-tasks/73\` and three map reports.
  **Age range: answered**, "Designed for high school students" now sits under the \`<h1>\` and in the
  FAQ, per-tenant overridable via \`platform_settings.explore_audience\` (**no migration**).
  **Time commitment: still TBD, and the page SAYS so** rather than deriving an hours-per-week figure
  from \`lessons.duration_seconds\`, a parent plans a school year around that number, so a wrong one
  is worse than none. **Standards alignment: still absent**, with a marked insertion point for the
  separate \`src/lib/standards.ts\` work. **Pricing: a "contact us for pricing" form** (\`#pricing\`),
  name / email / role / students / message, **Zod-validated server-side**, tenant resolved from the
  HOST, honeypot + a per-IP sliding window (the \`/api/v1\` limiter, extracted to
  \`src/lib/rate-limit.ts\` and now shared rather than duplicated). No captcha dependency, and **no
  price is stated anywhere**, that is the point. It **persists the lead FIRST and emails second**:
  a Mailgun failure logs loudly and returns \`notified: false\`, but the enquiry is already in
  \`leads\` and readable at \`/admin/leads\`, because a lost lead is a lost sale. **Migration:
  \`0034\` adds \`leads.inquiries\` (jsonb, append-only)**, the (tenant, email) unique constraint
  meant a repeat enquiry was being silently dropped by \`ON CONFLICT DO NOTHING\`; it now appends.
  **Map fixes:** the season filter is **gone** (it was a hardcoded \`SEASONS\` array carrying ONE
  brand's episode titles into a multi-tenant component, and it hid 2/3 of the pins from a first-time
  visitor), season survives as a data-derived heading in the episode list; clicking an episode
  **no longer navigates away** but opens a shared \`<EpisodeDetail>\` panel in place (lessons, cited
  sources, then an explicit "open the episode" second step), keyboard-openable with Escape + focus
  return; and **sharing /explore now previews the actual map** (\`/api/og?map=1\` renders the tenant's
  OWN pins via d3-geo → SVG → data URI, falling back to the branded card if it has no pins).
- 🎉 **All 51 jurisdictions mapped: the academic-standards fan-out is COMPLETE** (\`feat/standards-nd-sd\`, \`feat/standards-vt-wy\`, \`feat/standards-sd\`, \`feat/standards-wy\`). The finder and matrix now cover every US state plus the District of Columbia, and \`NEXT_UP\` is empty. The final four: **North Dakota (34 standards, 19 full, 15 partial)**, bespoke social studies with no-registration voting and a low-threshold initiative; **South Dakota (34 standards, 29 full, 5 partial)**, whose revised 2023 \`9-12.C.17\` anchors South Dakota and Native American government nearly 1:1 to \`state-civics-sd\`; **Vermont (17 standards, 5 full, 12 partial)**, the social-studies edge case that adopted the national C3 Framework rather than publishing its own codes (mapped honestly onto the general civics indicators, with the Vermont-specific gap documented), plus its independent-republic origin and 1777 adult-slavery ban; and **Wyoming (17 standards, 5 full, 12 partial)**, whose \`SS12.1.5\` names both the United States and Wyoming constitutions, giving the flagship a real home (the 1889 constitution, the five-officer plural executive with no lieutenant governor). No migration, no seed.
- 🔧 **West Virginia + Maine mapped** (\`feat/standards-wv-me\`); the standards finder now covers **43
  jurisdictions**, and \`/academic-standards?state=WV\` and \`?state=ME\` flip from "not mapped yet" to
  real pages. **West Virginia** is mixed and mostly bespoke: it adopted THEN repealed the Common Core
  (2015 to 2016), so its ELA is now West Virginia's own (codes ELA.11.x, mapped bespoke and never
  aliased to the shared Common Core file). Mapped: the WVCCRS **Civics** course (WVBE Policy 2520.4,
  SS.C.1 through SS.C.22 plus two Economics standards), transcribed verbatim from the WVDE Social
  Studies resource booklet, where SS.C.20 (state and local government) and SS.C.13 (state judicial
  systems) host West Virginia's own government (Constitution of 1872, plural executive with no
  Lieutenant Governor, 100 Delegates and 34 Senators, the 2015 switch to nonpartisan judicial
  elections and the 2022 Intermediate Court of Appeals, 55 counties), and SS.C.17 hosts the BVC
  media-literacy method; plus a bespoke **Grade 11 ELA** framework (Policy 2520.1A). West Virginia
  **science** is deferred honestly (its NGSS-derived standards are only available as image-only scans,
  so verbatim-or-nothing keeps it in "what we don't claim"). **Maine** is mixed: it adopted the
  **NGSS** verbatim in 2019 (LD 283), so the shared NGSS file is adopted with no aliases, but its ELA
  and social studies are Maine's own. Mapped: the **Maine Learning Results** Civics and Government
  (Civics and Government 1 and 2) and History (History 1 and 2) strands, Grades 9 to Diploma,
  transcribed verbatim from the 2019 Maine DOE strand PDFs, hosting Maine's own government (Constitution
  of 1820 and the split from Massachusetts, the Governor as the only statewide-elected official with
  the Attorney General, Secretary of State, and Treasurer elected by the Legislature, first-in-nation
  ranked-choice voting, the citizen initiative and people's veto, the appointed Law Court, town
  meeting, and Nebraska-style split electoral votes); plus a bespoke **Grade 9 to Diploma ELA**
  framework (Maine reorganized and reworded the Common Core into its own strands, so it is mapped
  bespoke rather than aliased). Maine's Economics and Geography strands are deferred to a later pass.
  \`NEXT_UP\` advances to **North Dakota and South Dakota**. No migration, no seed.
- 🔧 **Rhode Island + Alaska mapped** (\`feat/standards-ri-ak\`); the standards finder now covers **43
  jurisdictions**, and \`/academic-standards?state=RI\` and \`?state=AK\` flip from "not mapped yet" to
  real pages. **Rhode Island (19 civics standards, 5 full, 14 partial)** is inherit-heavy: it adopts
  the shared Common Core ELA (adopted July 1, 2010) and NGSS (Rhode Island was the first state to
  adopt NGSS, spring 2013) verbatim, and maps the bespoke **Rhode Island Social Studies Standards
  (2023)** High School Civics frame (SSHS.CVC), transcribed verbatim from RIDE. SSHS.CVC.4.5 (state,
  local, and tribal governments) is the \`state-civics-ri\` flagship's home for the
  no-county-governments, 2004 separation-of-powers, life-tenure Supreme Court, and 2020 name-change
  lessons, while SSHS.CVC.3.2/2.4 (ratification) and SSHS.CVC.6.3 (the Dorr Rebellion) carry Rhode
  Island's own history. **Alaska (5 Government and Citizenship standards + 6 bespoke ELA standards, 6
  full)** is bespoke-heavy because Alaska is a notable non-adopter of the Common Core: its **Government
  and Citizenship** content standards (A to G) anchor the \`state-civics-ak\` flagship at Standard C
  ("the character of government of the state") for boroughs and the Unorganized Borough, the strong
  governor, the Permanent Fund, merit-selection courts, and the top-four/ranked-choice election
  system; its **2012 ELA** standards are Alaska's own (its informational-text strand is edited away
  from the Common Core), so they are mapped as an own framework, not an alias; and its **2019 science**
  standards reproduce NGSS HS-ESS3-1 verbatim, so NGSS is adopted. Both states publish honest reject
  lists (tribal governance, international affairs). NEXT_UP advances to North Dakota + South Dakota.
- 🔧 **Delaware + Montana mapped** (\`feat/standards-de-mt\`); the standards finder now covers **43
  jurisdictions**, and \`/academic-standards?state=DE\` and \`?state=MT\` flip from "not mapped yet" to
  real pages. **Delaware (20 standards, 8 full)** is inherit-heavy with a bespoke social-studies
  frame: the mapped codes are the Grades 9-12 End of Cluster Expectations of the **Delaware Social
  Studies Standards** (Civics, Economics, Geography, and History strands), transcribed verbatim from
  the University of Delaware DSSEP mirror (education.delaware.gov is JavaScript-rendered and returns
  no benchmark text). The Civics strand's four anchor standards (Government, Politics, Citizenship,
  Participation) give the \`state-civics-de\` flagship a home for Delaware's signature civics: the
  only state that amends its constitution with no public vote, the Court of Chancery corporate
  capital, the constitutional major-party balance on its bench, and its three counties. Delaware also
  adopts the Common Core for ELA (2010; text verbatim, canonical CCSS codes, code-print style
  unverified and labeled as a fallback) and the NGSS (7th state to adopt, September 2013; verbatim).
  **Montana (23 standards, 5 full)** is bespoke across the board and shaped by **Indian Education for
  All**: the mapped codes are the Grades 9-12 civics/economics/geography/history standards of the
  **Montana Content Standards for Social Studies** (adopted November 2020, effective July 2021),
  Montana's own IEFA-rewritten Grades 11-12 ELA/literacy standards (Common Core numbering but
  Montana's own text, so cited bespoke rather than aliased), and Montana's own 2016 Earth and Space
  Science standards. Civics-and-government (1)(e), (1)(i), and (1)(j) host the \`state-civics-mt\`
  flagship's 1972 constitution (clean-and-healthful-environment, privacy, and right-to-know rights),
  its biennial 90-day citizen Legislature, and its strong direct democracy. Every tribal-sovereignty
  and American Indian standard and clause is faithfully rejected, because the catalog teaches neither
  tribal governments nor American Indian history, and published loudly under "What we don't claim."
  **NEXT_UP advances to North Dakota and South Dakota.**
- 🔧 **Iowa + Mississippi mapped** (\`feat/standards-ia-ms\`); the standards finder now covers **34
  jurisdictions**, and \`/academic-standards?state=IA\` and \`?state=MS\` flip from "not mapped yet" to
  real pages. **Iowa (23 standards, 14 full, 9 partial)** is inherit-heavy with a bespoke
  social-studies frame: the mapped codes are the High School Civics/Government (SS.9-12.Gov) and
  Inquiry (SS.9-12) standards of the current **Iowa Academic Standards for Social Studies (January
  2026)**, transcribed verbatim from the Iowa DOE. SS.9-12.Gov.18 (the government of the State of
  Iowa), Gov.20 (Iowa's local governments), and Gov.13 (Iowa election law, the Iowa Caucuses, and
  redistricting) give the \`state-civics-ia\` flagship a near 1:1 home for its caucuses, nonpartisan
  Legislative Services Agency redistricting, Missouri-Plan judiciary, 99 counties, and
  no-citizen-initiative lessons, while the Inquiry source-evaluation anchors (SS.9-12.3, SS.9-12.4)
  carry the media-literacy method. Iowa's 2024 ELA standards are Common-Core-derived but Iowa revised
  RI.11-12.6 ("artistry" not "beauty") and WHST.11-12.8 ("credible... recognition of bias" not
  "authoritative"), so the six RH/RI/WHST grade 11-12 codes are transcribed from Iowa's own document
  rather than aliased. **Mississippi (12 standards, 7 full, 5 partial)** is bespoke-leaning: the
  mapped codes are the **2018 MS College- and Career-Readiness Standards for the Social Studies** US
  Government course (USG) plus the Mississippi Studies course's MS.10, transcribed verbatim from MDE
  (a browser-user-agent fetch; the site returns 403 to a plain fetch). MS.10 (the structure and
  function of local and state government in Mississippi) gives the \`state-civics-ms\` flagship a 1:1
  home for its 1890 constitution, unusually powerful Lieutenant Governor, struck-down 2021 citizen
  initiative, 82-county board-of-supervisors layer, and nonpartisan elected judiciary, while
  USG.6.7/6.8 host the media-literacy method. MS's 2025 literacy standards are Common-Core-derived but
  MS revised RH.11-12.6 ("author's" singular, not "authors'"), so the five RH/WHST grade 11-12 codes
  are transcribed from MS's own document rather than aliased. Honest gaps published per state: Iowa's
  science (NGSS as a 2015 lead state, but documented Iowa revisions, so HS-ESS3-1 not confirmed
  verbatim) and math, and Mississippi's science (its own 2018 standards, NOT NGSS), math, and
  RI.11-12.6 (in MS's separate ELA document) are deferred rather than blind-aliased. \`NEXT_UP\`
  advances to **Idaho and West Virginia**. No migration, no seed.
- 🔧 **New Mexico + Nevada mapped** (\`feat/standards-nm-nv\`); the standards finder now covers **34
  jurisdictions**, and \`/academic-standards?state=NM\` and \`?state=NV\` flip from "not mapped yet" to
  real pages. Both states INHERIT Common Core ELA (adopted 2010) and NGSS (New Mexico's 2018 NM STEM
  Ready!, Nevada's 2014 NVACSS), mapped once in \`shared/\`, and add bespoke social-studies frames.
  **New Mexico (34 standards across 5 frameworks, 11 full):** the **2022 New Mexico Social Studies
  Standards** (adopted February 2022, effective 2023) supply three bespoke courses (High School
  Civics, Economics, World History); three civics standards are specifically about New Mexico
  (9-12.Civ.29 its constitution, 9-12.Civ.30 its diverse populations, 9-12.Civ.31 its government
  entities), giving the \`state-civics-nm\` flagship a genuine home for the bilingual 1912
  constitution and the only unpaid state legislature in the nation. **Nevada (38 standards across 5
  frameworks, 8 full):** the **2018 Nevada Academic Content Standards for Social Studies** fold
  civics into one Grade 9-12 Civics & Economics course, plus U.S. History (1877-Present) and World
  History (1300-Present); SS.9-12.CE.19 (compare the U.S. and Nevada constitutions) and CE.18
  (Nevada politics) host the \`state-civics-nv\` flagship's 1864 "Battle Born" constitution, the
  "None of These Candidates" ballot, gaming regulation and the no-income-tax structure, and the
  two-election amendment rule. Provenance: New Mexico's PED site is captcha-blocked and Nevada's DOE
  now serves a single-page-app shell, so both social-studies documents were transcribed verbatim
  from byte-faithful government/district mirrors (recorded in each file header; \`sourceUrl\` is the
  canonical DOE link). Coverage is honest full/partial with a per-state "What we don't claim" reject
  list. \`NEXT_UP\` advances to **Idaho and West Virginia**. No migration, no seed.
- 🔧 **Nebraska mapped** (\`feat/standards-ks-ne\`); the standards finder now covers 34 jurisdictions,
  and \`/academic-standards?state=NE\` flips from "not mapped yet" to a real page (8 standards in 1
  bespoke framework, 5 full, 3 partial). Nebraska is a notable NON-adopter of the Common Core, so it
  is bespoke-heavy: no shared framework is adopted. The mapped codes are the **High School Civics**
  standards of the **Nebraska Social Studies Standards (2019)** (approved by the State Board of
  Education on November 8, 2019), transcribed verbatim from NDE's own PDF. Unlike Kansas's skills-only
  design, Nebraska's civics standards NAME government content: **SS HS.1.1.e** (state government) even
  lists "bicameral/unicameral" in its own example set, so the \`state-civics-ne\` flagship's headline
  gets a 1:1 home, Nebraska's one-house, officially nonpartisan **Unicameral** of 49 senators (with
  its guaranteed public hearing for every bill, three-stage debate, and no conference committee),
  plus its merit-selection judiciary, its status as the only all-public-power state, and its
  Maine-style split of presidential electoral votes by congressional district (the Omaha "blue dot").
  SS HS.1.1.d hosts Nebraska's local government (93 counties, natural resources districts, and elected
  public-power boards) and the SS HS.1.2 standards host civic participation and the BVC media-literacy
  method (SS HS.1.2.f). Honest gaps published: Nebraska's ELA and math (Nebraska's own, not Common
  Core) and its 2017 science (Nebraska's own, NGSS-influenced but not verbatim) are deferred rather
  than blind-aliased. \`NEXT_UP\` advances to **Idaho and West Virginia**. No migration, no seed.
- 🔧 **Kansas mapped** (\`feat/standards-ks-ne\`); the standards finder now covers 33 jurisdictions,
  and \`/academic-standards?state=KS\` flips from "not mapped yet" to a real page (15 standards across
  3 frameworks, 7 full, 8 partial). Kansas is UNUSUAL: the **Kansas Standards for History,
  Government, and Social Studies (2013)** are deliberately skills, not content. Five thematic
  Standards (1 "Choices have consequences" through 5 "Relationships are dynamic"), each with four
  benchmarks, and KSDE states outright that assessments focus on the Standards and Benchmarks, not
  specific content. So Kansas publishes no code that names its own government. The **High School
  United States Government** course (Kansas Course Code 04151) applies those benchmarks, so the
  \`state-civics-ks\` flagship teaches Kansas's structure (its plural executive, its 125 and 40
  Legislature, its merit-selection Supreme Court, its lack of a citizen initiative, its strong home
  rule, and its 105 counties, all rooted in Bleeding Kansas and the still-in-force free-state
  Wyandotte Constitution of 1859) as the content that exercises the benchmark skills. Eight benchmarks
  are mapped verbatim (Standards 1, 2, 4, 5). Unlike Oklahoma, Kansas KEPT the Common Core: its ELA is
  the Kansas College and Career Ready Standards (verbatim Common Core, printed under bare RH and WHST
  codes, so the shared file is adopted with Kansas aliases), and its science is the NGSS, adopted
  verbatim in 2013 (one claim, HS-ESS3-1, partial). Math is not taught, and a 2020 revision of the
  social-studies standards is flagged for teachers to confirm current codes. No migration, no seed.
- 🔧 **Alabama + Louisiana mapped, both bespoke-heavy** (\`feat/standards-al-la\`); the standards
  finder now covers 28 jurisdictions, and \`/academic-standards?state=AL\` and \`?state=LA\` flip from
  "not mapped yet" to real pages. **Alabama (16 standards, 3 full, 13 partial)** writes its own
  standards and adopts neither Common Core nor NGSS: the mapped codes are the two required grade-12
  courses of the **2010 Alabama Course of Study: Social Studies** (ALSDE), United States Government
  and Economics, transcribed verbatim from ALSDE's own PDF. Standard USG.5 names "the Constitution of
  Alabama of 1901" and the comparison of state and local government, so the \`state-civics-al\`
  flagship gets a 1:1 home: the world-longest constitution and its 2022 recompile, weak home rule, the
  large plural executive, the partisan-elected judiciary, and the 67 counties. **Louisiana (26
  standards, 8 full, 18 partial)** replaced Common Core with its own standards: the mapped codes are
  the **2022 Louisiana Student Standards for Social Studies** High School Civics course, transcribed
  verbatim from the LDOE PDF. Louisiana names its own government in three expectations and the
  \`state-civics-la\` flagship maps 1:1 onto each: C.9.i (the Louisiana State Constitution), C.9.j
  (Civil Law and the Napoleonic Code), and C.11.k (parishes, police juries, and home rule charters),
  alongside the jungle primary, the 1974 constitution, and the seven-officer plural executive. Honest
  gaps published per state: Alabama's ELA (2021), math (2019), and science (2015, NOT NGSS) and
  Louisiana's ELA, math, and science (2017, NGSS-based but Louisiana's own) are deferred rather than
  blind-aliased, because the rule is compare-before-aliasing and those documents were not fetched this
  pass. \`NEXT_UP\` advances to **Iowa and Mississippi**. No migration, no seed.
- 🔧 **Kentucky + Oregon mapped** (\`feat/standards-ky-or\`); \`/academic-standards?state=KY\` and
  \`?state=OR\` flip from "not mapped yet" to real pages. **Kentucky (14 standards, 7 full, 7
  partial):** the **Kentucky Academic Standards (KAS) for Social Studies (2019)**, Kentucky's own
  inquiry and C3-based framework, transcribed verbatim from KDE's document. Its High School Civics
  strand carries a dedicated **Kentucky Government** cluster (HS.C.KGO.1-3) naming Kentucky's own
  Constitution of 1891 and government, so the \`state-civics-ky\` flagship's structure lessons (the
  large plural executive, the simple-majority-override veto, the nonpartisan elected judiciary, no
  citizen initiative, 120 counties) have a genuine home. Kentucky was an NGSS lead state and adopted
  the NGSS verbatim, so one science claim (HS-ESS3-1, partial) comes through the shared NGSS mapping;
  Kentucky's own 2019 reading and writing standards replaced its Common Core adoption and are
  deferred rather than blind-aliased. **Oregon (16 standards, 6 full, 10 partial):** the **2024
  Oregon Social Science Standards** (State Board Adopted June 7, 2024, the current revision of the
  2018 and 2021 ethnic-studies-integrated standards), transcribed verbatim. Its High School Civics
  indicators HS.C.PI.3 and HS.C.IR.8 name the government of the United States and Oregon, so the
  \`state-civics-or\` flagship's Oregon lessons (the Oregon System, vote-by-mail with automatic
  registration, no Lieutenant Governor, the 30 and 60 day Legislature, nonpartisan judges, and
  land-use planning) have a real home. Oregon adopted the Common Core for ELA in 2010 (kept through
  its June 2019 literacy revision, four strands verbatim and 11-12.RH.6 carrying Oregon's asterisk
  revision to "differing perspectives") and the NGSS for science as a lead state (one aliased claim,
  HS.ESS3.1, partial). No migration, no seed.
- 🔧 **Oklahoma + Utah mapped** (\`feat/standards-ok-ut\`); the standards finder now covers **28
  jurisdictions**, and \`/academic-standards?state=OK\` and \`?state=UT\` flip from "not mapped yet" to
  real pages. **Oklahoma (bespoke-heavy, 36 standards across 5 frameworks, 12 full):** the **Oklahoma
  Academic Standards for Social Studies (adopted 2019)**, transcribed verbatim from OSDE's own PDF.
  The grade-12 **United States Government (USG)** course anchors the \`state-civics-ok\` flagship and
  reaches Oklahoma's OWN government: USG.3.3 names the national, state, tribal, and local
  relationships and USG.3.4 names tribal sovereignty and the Major Crimes Act (the constitutional
  question in McGirt v. Oklahoma), so the flagship's two-high-courts, plural-executive, initiative,
  and tribal lessons get a real home. The World History, U.S. History, Economics, and World Human
  Geography courses map the Commodity Map plus the labor and Great Migration catalog. Oklahoma
  withdrew from the Common Core in 2014, so its ELA, its math, and its 2020 science (NGSS-influenced,
  not verbatim) are Oklahoma's own and are deferred fetch-or-don't-cite rather than blind-aliased.
  **Utah (mixed inherit and bespoke, 17 standards across 3 frameworks, 5 full):** the **United States
  Government and Citizenship** course (Utah Core Standards for Social Studies, revised September
  2016), transcribed from USBE's standards via the Utah Education Network and cross-checked against
  the subset-font-encoded canonical PDF. U.S. GOV Standard 3.3 (how people organize to participate)
  is a genuine home for Utah's distinctive dual-path (caucus-convention or signature) nomination
  system, and the flagship also teaches the 45-day citizen Legislature, the plural executive, merit
  selection with a Judicial Performance Evaluation Commission, and all-mail elections. Utah adopted
  the Common Core for ELA, and its disciplinary-literacy strands (RH.11-12.6/8/9 and WHST.11-12.7/8)
  are verbatim, mapped as OWN frameworks; but its 2023 ELA revision reworded RI.11-12.6, so the
  shared Common Core file is not adopted wholesale, and Utah's SEEd science is not verbatim NGSS and
  is deferred. **NEXT_UP advances to Iowa and Mississippi.**
- 🔧 **Maryland + Colorado mapped** (\`feat/standards-md-co\`); the standards finder now covers 22
  jurisdictions, and \`/academic-standards?state=MD\` and \`?state=CO\` flip from "not mapped yet" to
  real pages. **Maryland (bespoke civics, inherited ELA and science):** the **High School American
  Government Framework** (MSDE, revised June 2025), transcribed verbatim from MSDE's own PDF via a
  browser-user-agent fetch (the site returns 403 to a plain fetch). GOV.2.1.a names the **Maryland
  General Assembly**, and the structure indicators name "Federal and Maryland State Government," so
  the \`state-civics-md\` flagship's own-government lessons get a real home: the nation-strongest
  executive budget power, the compact plural executive, the 2022 Supreme Court of Maryland renaming,
  the petition-to-referendum-with-no-initiative, and the independent City of Baltimore. ELA adopts
  the **Common Core** (Maryland College and Career Ready Standards) with codes aliased to Maryland's
  printed bare form, verified word-for-word against MSDE's June 2023 Disciplinary Literacy Framework;
  science adopts **NGSS** verbatim (Maryland was an NGSS lead state); math is unclaimed.
  **Colorado (bespoke, concept-based civics):** the **2020 Colorado Academic Standards**, Social
  Studies Standard 4 (Civics), transcribed verbatim from CDE's P-12 booklet. Colorado's civics
  standard names "American government," not Colorado's own institutions, so the \`state-civics-co\`
  flagship's Colorado-specific lessons (TABOR, the initiative/referendum/recall, the GAVEL amendment,
  merit-selection judges, all-mail elections, the Denver/Broomfield city-counties) map as genuine
  instances of the generic outcomes. Colorado writes its OWN ELA (Reading, Writing, and
  Communicating) and its OWN science (NGSS-influenced, not adopted verbatim), so both are deferred
  rather than blind-aliased. Honest gaps published per state: Maryland's budget power and Colorado's
  TABOR have no state code of their own (each claimed through the nearest structure outcome and
  published in its \`notClaimed\`); Maryland's US and World History and Colorado's History, Geography,
  and Economics standards are deferred (fetch-and-verify-or-don't-cite). **\`NEXT_UP\` advanced past
  MD/CO to AL/LA.** No migration, no seed.
- 🔧 **Minnesota and Wisconsin mapped, both fully bespoke** (\`feat/standards-mn-wi\`).
  \`/academic-standards?state=MN\` and \`?state=WI\` flip from "not mapped yet" to real pages.
  **Minnesota (16 standards, 10 full, 6 partial)** maps the **2021 Minnesota Academic Standards in
  Social Studies**, Citizenship and Government strand, high school, transcribed verbatim from MDE's
  own learning-progression PDF: 9.1.4.7 (the powers and operations of Minnesota's own government)
  and 9.1.4.8 (local government in Minnesota) host the \`state-civics-mn\` flagship, with the general
  civics ladder on 9.1.4.1 through 9.1.4.5 and the media/source-literacy method on 9.1.1.3.
  Minnesota is the notable framework case: it did NOT adopt the Common Core for math (it kept its
  own), and its once-Common-Core ELA has since been replaced by Minnesota's own 2020 ELA standards,
  so ELA is deferred rather than aliased. **Wisconsin (13 standards, 5 full, 8 partial)** maps the
  **2018 Wisconsin Standards for Social Studies** Political Science, Inquiry, and History strands
  (verbatim from DPI): SS.PS3.c.h (the structure and functions of Wisconsin's own government) hosts
  the \`state-civics-wi\` flagship (the Wisconsin Idea, the "Frankenstein" partial veto, nonpartisan
  spring court elections, the strong recall, and no citizen initiative), and the source-literacy
  method maps to the Inquiry and History source-analysis indicators. Wisconsin's science (2017,
  NGSS-based but its own reorganization) and its own ELA are published as honest deferred gaps, not
  aliased. \`NEXT_UP\` advances to **AL/LA**.
- 🔧 **Missouri mapped, fully bespoke** (\`feat/standards-mo-md\`). \`/academic-standards?state=MO\`
  flips from "not mapped yet" to a real page. Missouri withdrew from the Common Core, so its ELA and
  math are Missouri's own and its science is Missouri's own (not NGSS); the mapped codes are all
  **High School Government** Grade Level Expectations from the **Missouri Learning Standards for
  Social Studies** (2016), transcribed verbatim from DESE's machine-readable export and cross-checked
  against the 6-12 GLE PDF. **13 standards (11 full, 2 partial)** onto the \`state-civics-mo\` flagship
  (the Missouri Plan for judges, the plural executive, initiative and referendum, the independent
  City of St. Louis) plus the civics ladder; ELA and science are published as honest deferred gaps.
  **Maryland was deferred** (the pass ended before MD) and re-queued at the front of \`NEXT_UP\`. No
  migration, no seed.
- 🔧 **Connecticut + South Carolina mapped** (\`feat/standards-ct-sc\`). \`/academic-standards?state=CT\`
  and \`?state=SC\` flip from "not mapped yet" to real pages. **Connecticut is inherit-heavy**: it kept
  the Common Core (as the CT Core Standards, 2010) for ELA and adopted the NGSS (2015) for science, so
  both shared frameworks are adopted verbatim, and its one bespoke frame is the 2015 Social Studies
  Frameworks High School Civics and Government course (CIV 9-12, transcribed verbatim from the CT SDE
  PDF). **14 standards (5 full, 9 partial)** onto the \`state-civics-ct\` flagship (abolished counties,
  the town as the local workhorse, legislative appointment of judges, no citizen initiative) plus the
  Common Core ELA and NGSS strands. **South Carolina is bespoke-heavy**: it withdrew from the Common
  Core (2015), so its ELA and math are its own and its science is its own (2021, not NGSS); the mapped
  codes are the grade-12 **United States Government** indicators (USG.1.ER to USG.4.IP) from the **SC
  Social Studies College- and Career-Ready Standards** (2019), transcribed verbatim from the SC DOE PDF.
  **11 standards (4 full, 7 partial)** onto the \`state-civics-sc\` flagship (the legislative state, the
  Legislature electing judges, the large plural executive, Home Rule counties) plus the civics ladder,
  with ELA and science published as honest deferred gaps. \`NEXT_UP\` advances to Alabama and Louisiana.
  No migration, no seed.
- 🔧 **Illinois + Michigan mapped, states #10 and #11, both heavy inheriters** (\`feat/standards-il-mi\`),
  \`/academic-standards?state=IL\` and \`?state=MI\` flip from "not mapped yet" to real pages. Both
  states adopted the shared multi-state frameworks, so we **INHERIT** rather than re-map: Illinois
  adopted the Common Core for ELA (June 24, 2010) and the NGSS for science (Jan 2014, an NGSS lead
  state), both **verbatim, no aliases**; Michigan adopted the NGSS as the Michigan Science
  Standards (Nov 10, 2015, **verbatim**) and the Common Core for ELA (2010). **Michigan is the
  ALIAS case**: its ELA document reproduces the CCSS wording word-for-word but prints the strands
  under the **bare codes** (\`RH.11-12.6\`, \`WHST.11-12.7\`) with no \`CCSS.ELA-Literacy\` namespace,
  so each shared code is aliased to Michigan's printed form (compared against Michigan's own doc,
  Wayback 2025-04-30, before aliasing). **Illinois: 32 standards (16 full, 16 partial) across 7
  frameworks**, the bespoke work is the 2017 **Illinois Social Science Standards** (isbe.net),
  which are disciplinary CONCEPTS not course benchmarks, so all five strands are mapped: Civics
  (SS.CV), History (SS.H), Economics (SS.EC), Geography (SS.G), and Inquiry Skills (SS.IS);
  \`state-civics-il\` is the 1:1 flagship (the 1970 Constitution, the plural executive with BOTH a
  Comptroller and a Treasurer, the uniquely narrow Legislative-Article initiative and 1980 Cutback
  Amendment, strong home rule). **Michigan: 22 standards (17 full, 5 partial) across 3 frameworks**,
  the bespoke work is the 2019 **Michigan Social Studies Standards** High School Civics (C
  strand), whose C3.2 cluster gives \`state-civics-mi\` a genuine home (C3.2.3 state/local structure,
  C3.2.6 initiative/referendum/recall, the Independent Citizens Redistricting Commission is the
  standard's own "case study"). Honesty published on the pages: Illinois's concept standards name
  no state's structure (so the flagship maps to abstract institution/participation standards);
  Michigan's era-based World/US History and Economics strands are **deferred** (their multi-column
  PDF layout risks non-verbatim transcription, verbatim-or-nothing), and tribal governments are
  not taught (C3.2.3 partial, C3.2.4 not claimed). \`NEXT_UP\` advances to **NC/VA**.
- 🔧 **Cross-state standards explorer + route rename** (\`feat/standards-matrix\`). The per-state
  finder moved from \`/standards\` to **\`/academic-standards\`** (a 308 redirect keeps old links and
  shares working), and a companion **\`/academic-standards/matrix\`** now flattens **every
  (state x standard x course)** alignment this tenant can back into one browsable table. It answers
  the question the per-state page cannot: *across ALL mapped states, which course meets the most
  standards, and where?* One **fuzzy search** box (a compact, dependency-free subsequence+substring
  matcher, no new library) covers code, standard text, course, state, and subject; multi-select
  **state / subject / coverage** filters plus a **course** dropdown; **sort by any column**; and
  **per-course and per-state rollup counts** ("course X meets N standards across M states"). The
  table **scrolls inside its own container** and **degrades to stacked cards below \`sm\`** (44px
  targets throughout), and reuses the finder's **print + copy-as-plain-text** for filings. Same
  tenant boundary, reused not re-implemented: \`flattenAlignments()\` consumes the output of
  \`scopeAlignments()\`, so a row can only exist for a course THIS tenant publishes; a new
  \`tests/isolation/standards-matrix.test.ts\` proves a course another tenant owns never appears and
  that a multi-course standard splits into rows for only the tenant's courses. A tenant with zero
  mapped-catalog overlap gets an **honest empty state**, not a 404. Both routes are linked from the
  **Teach** menu (instructors / admins). Also stripped the **em/en dashes** from the finder's own
  copy and fixed a real cross-state bleed: a hardcoded "Indiana publishes two editions" example that
  rendered on **every** state's shared framing box is now state-generic (the Indiana specifics still
  live on Indiana's own page, in \`data/in.ts\`). Nothing hardcoded per state, so OH/GA appear the
  moment their data files land. **No migration, no seed.**
- 🔧 **Standards alignment** (\`feat/explore-standards\`): a \`/academic-standards\` page, linked from
  \`/explore\`, answering the one question a teacher or a reporting homeschooler asks first: *which
  requirements does this meet, and which lesson meets them?* **41 standards (21 fully covered, 20
  partially) across 9 frameworks in 2 jurisdictions**, each with its **exact code**, the
  standard's **verbatim text**, a link to the
  **publisher's own document**, the **lessons** that cover it, and a \`full\` | \`partial\` flag,
  partials must state what is missing (a unit test enforces it). Indiana: Economics (2026), Geography
  and History of the World, World History and Civilization, U.S. History, ELA 9-10 and 11-12 (all
  2023 IDOE). Washington, D.C. resolves to **three** frameworks, because DC has no homegrown set:
  **Common Core** (ELA, adopted Jul 2010), **NGSS** (science, adopted Dec 2013) and **DC's own K-12
  Social Studies Standards** (Jun 2023), all three confirmed on OSSE's own pages. The page states,
  above the claims, that **we** did the mapping (nobody endorsed it), the **date every standard was
  fetched**, and that standards get revised. Honest omissions are published too: **no mathematics**,
  **almost no science** (one NGSS PE, partial, there is no lab work here and we say so), and no DC
  citation for Prohibition/mass incarceration because DC's standards contain none. Tenant-scoped:
  the table is keyed by course **slug** and \`db/queries/standards.ts\` resolves slugs against
  **this** tenant's published courses, so a Season-1-only school (Learn.WitUS, ElementaryMBA) can
  never surface a Season 2/3 standard, and a tenant hosting none of the curriculum **404s**.
  Printable + one-click copy-as-plain-text for state filings. **No migration.**
- 🔧 **State-standards finder + Indiana across the whole catalog**
  (\`feat/standards-finder-indiana\`), \`/academic-standards\` is now the tool the note asked for: a teacher,
  homeschooler, or admin **picks their state** and sees which courses meet which of that state's
  standards, filterable by **subject** and **course** (server-rendered link filters, shareable,
  printable), each standard still carrying its exact code, verbatim text, source link, per-framework
  **retrieved date**, and honest \`full\`|\`partial\` flag. States we haven't mapped render as a real
  "not mapped yet" page (**Arizona and Arkansas flagged next**), never an empty error. **Indiana is
  now mapped across the whole catalog, not just the Commodity Map: 64 standards (31 full, 33
  partial) across 9 frameworks**, U.S. Government 2023 (18 standards; the civics ladder plus
  \`state-civics-in\`, which was written FROM Indiana's materials, the flagship of the 50-state
  civics pattern), U.S. History 2023 (Great Migration, History of Unions, labor-Mexico/Poland),
  World History 2023 (Solidarność → Cold War's end), **Health & Wellness 2023** (dental, Read Your
  Body's Data, WOOP) and **High School PE 2023** (six sports courses, knowledge indicators only,
  and each entry says an online course cannot demonstrate motor performance). Everything fetched
  from IDOE **via the Wayback Machine** (in.gov blocks us; snapshots recorded in \`data/in.ts\`), and
  the 2026-vs-2023 **two-editions problem is still flagged on the page**, the 2026 U.S. Government
  edition currently exists only as a Google Drive link, so we cite the durable 2023 PDF and say so.
  Rejections are published per state under "What we don't claim" (e.g. USG.3.9 Benjamin Harrison,
  USG.1.6's named principles, deindustrialization for the unions course; AI/languages/study-skills
  deferred until their Indiana frameworks are fetched). **The data model is now the concept-hub**
  that makes states 3-51 cheap: \`src/lib/standards/claims.ts\` holds ~100 framework-agnostic
  **course claims** (the catalog analyzed once, with lesson evidence); each state file
  (\`data/in.ts\`, \`data/dc.ts\`) maps ITS codes → claim ids; **NGSS and Common Core are mapped once**
  in \`shared/\` and *adopted* by states (verbatim or with local code aliases, DC demonstrates it);
  and \`pnpm gen:standards\` auto-discovers state files into a committed generated index, so adding
  Arizona is one new data file + regenerate, **zero hand-edited code change**. 18 isolation tests
  incl. claims-fully-wired and filter-never-readmits proofs. **No migration, no seed.**

- 🔧 **North Carolina + Virginia mapped, both fully bespoke** (\`feat/standards-nc-va\`),
  \`/academic-standards?state=NC\` and \`?state=VA\` flip from "not mapped yet" to real pages: two new
  data files + \`pnpm gen:standards\`, zero code change. **North Carolina: 31 standards (7 full, 24
  partial)**, the NC Standard Course of Study is North Carolina's OWN framework (not Common Core, not
  NGSS). The one framework is the **graduation-required "Founding Principles of the United States of
  America and North Carolina: Civic Literacy"** course (NCDPI 4318, approved Feb 4 2021; CL.* codes
  across Behavioral Sciences, Civics & Government, Economics, Geography, History, and a content-neutral
  Inquiry strand). CL.C&G.4.1/4.3 name "the United States **and North Carolina**" judicial systems and
  constitutions, and CL.C&G.2.2/2.3/3.7 reach federalism, local government, and elections, so the
  \`state-civics-nc\` flagship has a genuine home (mapped partial). **Virginia: 38 standards (15 full, 23
  partial)**, the Virginia SOL are famously Virginia's OWN (never Common Core / never NGSS). The one
  framework is **"Virginia and United States Government" (2023 SOL, Board-approved 4/20/2023; Skills +
  GOVT.1-GOVT.14)**; **GOVT.10** ("the state and local governments as described in the Constitution of
  Virginia") is where a state SOL names Virginia's structure squarely, so \`state-civics-va\` maps
  **FULL** there (the one-consecutive-term governor, legislature-elected judges, 95 counties + 38
  independent cities). Both DOEs block tooling (dpi.nc.gov/files.nc.gov 403; VDOE portal refused), so
  each was transcribed from a **byte-faithful mirror of the DOE's own titled PDF** (App State for NC;
  the Board-approved 4/20/23 doc for VA), \`sourceUrl\` set to the canonical DOE page. Honest gaps
  published per state: NC's Civic Literacy standards have **no lawmaking-process objective**, so the
  flagship's signature bill-becomes-law lesson (veto only since 1997, 3/5 override) has no code to cite;
  VA's GOVT.3g ("the amendment process") is a real match but under the isolation suite's ~40-char floor,
  so VA's amendment path is cited via GOVT.10b/1c; **both states' ELA and Science standards were not
  retrievable from an acceptable source this pass** (fetch-or-don't-cite). **NEXT_UP advanced OH/GA →
  WA/NJ** (⚠️ merge-coordinates with the other in-flight standards branches, which also edit that line).
  **No migration, no seed.**
- 🔧 **Arizona + Arkansas mapped, states #3 and #4, proving the concept-hub price**
  (\`feat/standards-az-ar\`), \`/academic-standards?state=AZ\` and \`?state=AR\` now render real pages: two new
  data files + \`pnpm gen:standards\`, zero code change, exactly as the model promised. **Arizona: 46
  standards (22 full, 24 partial) across 6 ADE frameworks**, the 2018 History & Social Science
  anchor standards (\`state-civics-az\` is the 1:1 civics flagship; HS.G1.1 is near-verbatim what the
  Commodity Map is for), Arizona's own 2016 ELA (not Common Core), the 2018 Science Standards
  (**verified NOT NGSS**, NRC-Framework-based, so the shared NGSS file correctly does not apply),
  Health (Spring 2010 Strand/Concept/PO), and PE (May 2015). All five documents fetched via the
  **Wayback Machine** (azed.gov 403s us; snapshots recorded in \`data/az.ts\`). **Arkansas: 59
  standards (28 full, 31 partial) across 11 DESE frameworks**, the December 2022 course-based
  social studies revision (Civics, U.S. Government, Economics, World Geography, World History,
  U.S. History Since 1929, **African-American History**, the AR course that actually names the
  Great Migration), the 2023 K-12 ELA, the 2016 Earth Science (NGSS-derived, Arkansas's own codes
  and clarification statements), and the PFL/Recreational Sports PE course frameworks, all fetched
  from dese.ade.arkansas.gov directly. Honesty highlights published on the pages: Arkansas's 2022
  civics standards are **overwhelmingly federal**, so the Arkansas flagship's structure lessons
  (1874 constitution, seven elected executives, elected Supreme Court) have **no code to cite** and
  say so; Arizona's HS.C2.5 (AZ-vs-US rights comparison) is rejected despite being the flagship's
  home framework; U.S. History Since 1929 starts too late for the Gilded Age labor units. **No
  migration, no seed.**
- 🔧 **Ohio + Georgia mapped, states #10 and #11** (\`feat/standards-oh-ga\`, task 130),
  \`/standards?state=OH\` and \`?state=GA\` flip from "not mapped yet" to real pages: two new data
  files + \`pnpm gen:standards\`, zero code change. **Ohio: 50 standards (25 full, 25 partial) across
  7 frameworks**, all six of Ohio's Adopted-2018 high-school social-studies courses as their own
  frameworks (American Government, the \`state-civics-oh\` flagship's 1:1 home, because Ohio's
  Content Statements 16/17 NAME Ohio's own government, unlike AR/CA; American History; Modern World
  History; Economics & Financial Literacy, **CS 4 is the economic-systems standard AZ/CA lacked**;
  Contemporary World Issues, CS 3 is the media-literacy home; World Geography, the Commodity Map),
  plus Ohio's own Adopted-2017 ELA (RI.9-10/11-12, bespoke, NOT Common Core). **Ohio science
  EXCLUDED and documented**: Ohio publishes its HS science courses as bare topic outlines
  ("ENV.GP.3: Climate change"), not citable content statements, so the climate/resource content maps
  to Ohio social studies instead. **Georgia: 40 standards (13 full, 27 partial) across 6 frameworks**,
  the current GSE social studies (Approved 2016, **Updated Nov 2, 2023**): American
  Government/Civics SSCG (the \`state-civics-ga\` flagship maps to **SSCG17**, "state and local
  government described in the Georgia Constitution"), World History SSWH (names the **Opium Wars**
  SSWH16c and **Haiti** SSWH14b), U.S. History SSUSH (Great Migration + Debs named in SSUSH15b),
  World Geography SSWG (SSWG5e names "plantation farming in Africa and Central/South America"),
  and Economics (SSEIN1 trade / SSEF3 systems), plus Georgia's **NEW K-12 ELA Standards (Approved
  May 2023, in force SY2025-26**, which retired the Common Core-derived GSE ELA), mapped bespoke.
  **Georgia science deferred** (GA's own GSE Science, verified NOT NGSS, not fetched this pass, like
  TX/FL). education.ohio.gov and gadoe.org/georgiastandards.org all refuse our tooling (DNS/redirect)
  and web.archive.org was down, so every document was transcribed from **faithful district mirrors**
  of the states' own PDFs (provenance recorded in \`data/oh.ts\`/\`data/ga.ts\`); **every cited
  standard is genuine verbatim text**. **NEXT_UP advanced OH/GA → MI/IL** (⚠️ one-line conflict risk
  vs the parallel \`feat/standards-matrix\` branch, which may also edit that line). **No migration,
  no seed.**
- 🔧 **Massachusetts + Tennessee mapped, states #10 and #11, both fully bespoke** (\`feat/standards-ma-tn\`),
  \`/academic-standards?state=MA\` and \`?state=TN\` flip from "not mapped yet" to real pages: two new
  data files + \`pnpm gen:standards\`, zero code change. **Massachusetts: 35 standards (18 full, 17
  partial) across 7 frameworks** from the **2018 History and Social Science Framework**, Massachusetts
  writes its own social studies and revised Common Core into its **2017 ELA & Literacy Framework**
  (verified: the grades 11-12 Reading literacy standards RCA-H.6/.8/.9 are word-for-word CCSS but MA
  relabels the codes and revised the writing standards, so mapped as MA's own). The \`state-civics-ma\`
  flagship's fullest home is real: the **grade 8 Civics** course "United States and Massachusetts
  Government and Civic Life" (Topic 6 names the General Court, the Supreme Judicial Court, open town
  meeting, and the Massachusetts Constitution) plus the **US Government & Politics elective** (Topic 2).
  Also Economics, US History I & II, World History II (the Opium-trade imperialism standard), and the
  grades 11-12 literacy standards. **Tennessee: 34 standards (18 full, 16 partial) across 4 frameworks**
  from the **2019 Tennessee Academic Standards for Social Studies**, Tennessee withdrew from Common
  Core and writes its own K-12 standards. The \`state-civics-tn\` flagship maps to the **US Government and
  Civics** course's dedicated **"Tennessee State and Local Government" strand (GC.28-GC.30)**, plus
  Economics, World History (the Opium Wars), and US History (labor movement, the Great Migration,
  Prohibition, the Harlem Renaissance). doe.mass.edu (403) and tn.gov both block tooling, so both
  documents were transcribed from **Wayback byte-faithful mirrors** of the DOEs' own titled PDFs
  (mirror URLs in \`data/ma.ts\` / \`data/tn.ts\`; \`sourceUrl\` is the canonical DOE link); TN's
  two-column bulleted standards were de-interleaved deterministically. Honest gaps published per state:
  neither state's own science standards were fetched (fetch-or-don't-cite); TN's ELA/math are its own
  (not Common Core) and deferred; and the flagships' most distinctive facts with no state code, MA's
  Governor's Council / indirect initiative / VOTES Act / abolished counties, TN's Attorney-General-by-
  Supreme-Court / weak veto / no-initiative / voting rules, are published loudly in each \`notClaimed\`
  list. **NEXT_UP advanced past MA/TN → MO/MD** (⚠️ merge-coordinates with the other in-flight standards
  branches, which also edit that line). **No migration, no seed.**
- 🔧 **Texas + Florida mapped, states #8 and #9, both fully bespoke** (\`feat/standards-tx-fl\`),
  \`/academic-standards?state=TX\` and \`?state=FL\` flip from "not mapped yet" to real pages. **Texas: 56
  standards (31 full, 25 partial) across 8 TEKS frameworks**, Texas writes its own TEKS for every
  subject and has **never** adopted Common Core or NGSS. Confirmed the current social-studies TEKS
  are the **Nov-2022 SB3-aligned "Adopted 2022"** version (effective Aug 1, 2024, each section's
  TexReg source line checked): US Government §113.44 (the \`state-civics-tx\` flagship maps to
  (d)(7)(H)/(d)(9)(A), which name state & local govt), World Geography §113.43 (the Commodity Map's
  strongest home), World History §113.42, US History §113.41, Economics §113.31, English II §110.37,
  Health I §115.38, and PE §116.62/64 (knowledge-side only), all from the **TEA "currently in effect"
  rule PDFs**. **Florida: 42 standards (25 full, 17 partial) across 7 frameworks**, Florida is
  bespoke twice over: **B.E.S.T.** (ELA/math, 2020) and **NGSSS** (🔴 NGSSS ≠ NGSS) for
  science/social studies. Civics & Government SS.912.CG (2023; \`state-civics-fl\` flagship maps to
  CG.3.15/3.10/2.9; CG.2.11 "bias, omission, emotional appeal" is the media-literacy home), World
  History SS.912.W (Opium Wars via W.6.7; the trans-Atlantic slave trade; fall of communism),
  American History SS.912.A (the labor movement A.3.9), **African American History SS.912.AA, the
  politically live 2023-added strand, cited factually and dated** (triangular trade, Great Migration,
  Harlem Renaissance), Geography SS.912.G, Economics SS.912.E, and B.E.S.T. ELA Grade 10 (2020).
  flrules/CPALMS are bot-walled and fldoe.org Akamai-blocks tooling, so both docs were transcribed
  from **Wayback** captures (snapshots recorded in \`data/fl.ts\`); **every benchmark retrieved
  verbatim, none excluded**. Honest gaps published per state: neither state's science standards
  fetched (fetch-or-don't-cite); TX Grade 7 Texas History §113.20 and FL Grade 7 Civics SS.7.CG (the
  flagships' fullest homes) deferred; TX has no citizen-initiative standard and FL no
  direct-democracy benchmark. **NEXT_UP advanced NY/PA → OH/GA** (⚠️ merge-coordinates with
  \`feat/standards-ny-pa\`, which also edits that line). **No migration, no seed.**

- 🔧 **New York + Pennsylvania mapped, states #6 and #7** (\`feat/standards-ny-pa\`),
  \`/academic-standards?state=NY\` and \`?state=PA\` now render real pages: two new data files +
  \`pnpm gen:standards\`, zero code change. Every document fetched **directly from the DOEs** (no
  Wayback, nysed.gov and pdesas.org both served us). **New York: 43 standards (16 full, 27 partial)
  across 7 frameworks**, the K-12 Social Studies Framework mapped as five grade-level courses (Global
  History I & II, U.S. History & Government, Participation in Government, Economics), NY's own **Next
  Generation Literacy Standards** (RH/WHST, revised 2017), and **NGSS** (adopted as NYSSLS).
  **Pennsylvania: 29 standards (8 full, 21 partial) across 5 frameworks**, the June 2009 Academic
  Standards for Civics & Government,
  Economics, Geography, and History, plus **PA Core** literacy (8.5/8.6). The **inherit-vs-bespoke
  call was the whole job, made per framework and documented in each file header:** NY ELA is
  **bespoke** (NY renumbered RH.11-12.6→RH6 and revised it, dropped "differing", so aliasing the
  shared Common Core file would misrepresent it); NY science **inherits NGSS** (HS-ESS3-1 verbatim);
  PA ELA is **bespoke** even though PA Core 8.5/8.6 is *verbatim* Common Core (PA kept "differing"),
  because PA renamed every code and the shared file bundles an RI standard PA revised; PA has **no
  NGSS** (STEELS is its own), so PA science is unclaimed and the climate/resource content maps to PA
  Geography instead. Rejections published per state (NY: the Opium Wars and Haitian Revolution, NY's
  framework names neither; PA: science, and the flagship's uncoded structure). PA's civics standards
  **name the Pennsylvania Constitution** (5.1.12.D/E), giving that flagship a better home than CA/NY.
  \`state-civics-ny\`/\`state-civics-pa\` flagship claims added to \`claims.ts\`. Gates green
  (tsc/lint/test/build all 0). **No migration, no seed.** Next up flagged: **Texas, Florida.**
- 🔧 **Standards before filters** (\`feat/standards-above-filters\`): on a mapped state page
  (\`/academic-standards?state=XX\`) the alignment itself now sits **above** the filter controls. A
  teacher who picks their state used to scroll past subject chips and a by-course \`<details>\` before
  seeing a single standard; filters are refinement, not content. New order: header (state, intro,
  the four count tiles, print/copy) → the **honesty disclaimer**, still above every claim, because a
  teacher acting on a stale mapping is the harm this page can do → **the standards** → "What we
  don't claim" → **"Narrow this list"** (the filters, with a \`#narrow\` jump link beside the count
  tiles so a reader who wants to narrow does not hunt) → the CTA. The "showing N standards" feedback
  moved **into the header** as an accented **"This list is filtered. Showing N ... out of M mapped
  for <state>"** notice, so anyone arriving on a filtered link (every course page links here as
  \`?state=..&course=..\`) learns in the first screenful that the counts are a narrowed view; it is
  deliberately **not** \`print:hidden\` (a printed filing must say what it left out), only its reset
  link is. Filters stay plain \`searchParams\` links, so every view is still server-rendered,
  shareable, bookmarkable and \`print:hidden\`. Tenant scoping untouched: \`getAlignedCourses\` is
  still the boundary and \`filterGroups\` still only narrows what \`scopeAlignments\` allowed. Scope is
  the per-state view only; the picker and the matrix are unchanged. **No migration, no seed.**

## Operator
- 🟡 Merge open branches → \`db:migrate:prod\` → \`seed:bvc:real\` / \`seed:map\` / \`seed:owner\`
  → regen embeddings. Set \`PLATFORM_OWNER_EMAIL=bam@awews.com\`.
- ⚪ After merging the health/vetting work: \`pnpm gen:health\` → \`seed:health\` / \`seed:speedway\`.
- ✅ **Authoritative-values rule**: added to ecosystem + repo CLAUDE.md (never assert guessed external
  values; born from the DNS A-record false-negative). Still TODO: commit the ecosystem copy in \`gemini/\`.
- ⚪ Inform CentOS that witus-learn hosts BVC.
- ✅ **Future classes & features** (\`feat/admin-future-work\`, **migration 0036**): an owner-only
  \`/admin/future\` board for everything proposed but not yet built: the **She Did the Work** course
  proposals (9 courses A-I, the build order, the 14 factual errors in the source calendar, the
  rights/permissions table) plus a **research seed per subject** (29, 5 that carry a course alone,
  Sage Steele cut, Mary Bassett deferred to the health vertical), the extra **civics** courses, and
  the **Travel & Living Abroad** track. Each item renders its full markdown and takes a **note** →
  \`future_work_notes\` → read from a terminal with **\`pnpm future:list\`** (no copy-paste; same shape
  as \`reports:list\`). The content is **committed** (\`src/lib/future-work-content/*\`, generated from the
  gitignored \`plans/future-courses/\` notes by \`pnpm gen:future-work\`), so the page renders in
  production, nothing reads \`plans/\` at runtime.
`;
