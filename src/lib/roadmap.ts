// The internal roadmap, committed so it renders in-app at /admin/roadmap (platform
// owner). Keep it current as work lands — see the CLAUDE.md docs-maintenance rule.
// Status keys: ✅ done · 🔧 in branch · 🟡 next · ⚪ backlog · ❓ needs decision.

export const ROADMAP = `# Learn.WitUS — Roadmap

## Platform
- ✅ Phases 1–7 + 5a–d (isolation, catalog, auth, enrollment, Stripe, prerequisites, CYOA,
  embeddings, pedagogy/trust, certificates).
- ✅ AI tutor (multi-agent + streaming + LangSmith + per-tenant + paid-only + isolation test).
- ✅ Maps: Commodity (Episode Origins), Growing Belts, Languages atlas, **map lessons**.
- ✅ Quiz answer-links; **markdown rendering** in lessons.
- ✅ Phase 8: instructor dashboard, feedback review queue, self-serve domains, per-season age-gate,
  assignments, live-streaming, brand directory, lead funnel, learning paths.
- ✅ Instructor profile + re-home all courses to **BAM** (\`seed:owner\`); admin **Roadmap** page.
- 🔧 **Teacher Help Center** (\`/help\`) — searchable in-app teacher guide (fuzzy search over
  task-oriented how-tos: courses, lessons, recording, pricing, publishing, live, quick-recall,
  feedback, sharing). Linked from the menu + Teach page. (help-documention.md)
- 🔧 **Active recall** (\`feat/active-recall\`, stacks on \`feat/course-experience\`) — per-lesson
  **Quick-recall** cards: click-to-reveal answer + "I got it / Missed it" **self-grade**
  (\`lessons.recall_content\` + authoring in the lesson editor). Grades land in \`recall_attempts\`;
  the teacher course page shows **recall accuracy** (in-lesson signal vs quiz). Migration 0022.
- 🔧 **Course-experience batch** (\`feat/course-experience\`) — **mark-complete** no longer jumps the
  page (flips in place + offers "Next lesson" on linear courses); **curriculum feedback** mirrors to
  the WitUS Inbox for the owner's courses + \`pnpm feedback:list\` CLI + each teacher sees only their
  own; **Report a problem** gains a **feedback** kind (bug/feedback/idea/other); **social-share
  tracking** (\`social_shares\` + \`/api/share\` + ShareButton) surfaced on the admin dashboard. Migration 0021.
- 🔧 **SEO + mobile + admin-polish batch** (\`bundle/seo-mobile-admin-2026-07-01\`) — **per-page
  social previews** (\`/api/og\` content-relevant cards, \`metadataBase\`, Twitter cards, course/lesson
  page OG + description, Course JSON-LD); **cross-promo picker** now lists all ecosystem apps (adds
  RideWitUS [flagged URL], Shop.WitUS, Field Reporter); **admin sub-pages** render cleanly in the
  sidebar shell; **mobile fixes** (DNS-table overflow, share-button squeeze).
- 🔧 **Course-admin suite** (\`bundle/course-admin-suite\`) — subscription **billing frequency**
  (monthly/annual) driving the Stripe interval; **unsaved-changes** guard on course settings;
  in-app **problem reporter** (site-wide button → \`/admin/reports\` triage + WitUS Inbox mirror +
  \`reports:list\`); **category management** (\`/admin/categories\` add/rename/delete + settings picker);
  **admin dashboard** (\`/admin/dashboard\` — learners, enrollments, completions + learner roster).
- 🔧 **LMS UX batch** (\`bundle/lms-ux-2026-07-01\`) — **upload hardening** for the 100MB Cloudinary
  cap (shared chunked \`uploadToCloudinary\` + size guard; recorder live-size + auto-stop; "Stripe
  not configured" banner); **teacher catalog** (\`/teach\` fuzzy search + status filters + bulk
  publish/unpublish/reprice + quick toggle); **learner progress groups** on \`/my-courses\`
  (in-progress / not-started / completed). Backlog from this batch: **social sharing**
  (share school/course/module) + **mobile-first** pass + admin sidebar shell.
  **Now also in this bundle:** **social sharing** (ShareButton on school/course/lesson — native
  sheet on mobile, Copy/X/LinkedIn/Facebook/Email fallback); **admin sidebar shell** (persistent
  nav rail + mobile hamburger, replacing the flat card grid); **responsive site menu** (header
  collapses to a hamburger drawer on small screens — mobile-first.md).
- 🔧 **Course-tooling suite** (\`bundle/course-tooling-2026-07-01\`) — **outbound-link click tracking**
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
- 🟡 **Offline video/audio** — media should play offline. CentOS had a solution — review and port it.
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

## Content
- ✅ Languages es/fr/pt/it (tense spines); Ed.L.D., Cyber, US Civics 101, "How to Create a Course".
- ✅ FAA Part 107; ✅ BVC real 21-episode content (lessons + quizzes + maps + Coffee assignment).
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
- 🟡 **"Read Your Body's Data" needs a metrics tracker** — it logs daily numbers inside CentOS's
  "metrics page" (which witus lacks). Build a tracker, rewrite to external tools, or keep on CentOS.
- 🔧 **Deepen the languages** (in branch) — per-tense fill-in EXERCISES (forgiving on accents) +
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
- 🔧 **LangGraph/LangChain courses** (\`feat/langchain-courses\`) — 3 courses vetted + rewritten from
  the \`lang-chain/*\` source repos to the WitUS standard (no AI tells, hide-answer **recall cards**,
  Key Takeaways, per-module quizzes, hyperlinks to repo/app/tagged-files/docs, contractions), under
  **AI & Technology**. All built: **"LangGraph in Production: The WitUS Triage Agent"** (2 mod, 8
  lessons + 2 quizzes), **"Reflection Loops in LangGraph"** (wanderlearn, 7 mod, 43 lessons + 7
  quizzes), **"Multi-Agent LangGraph with Per-Agent RAG"** (centenarian, 7 mod, 28 lessons + 7
  quizzes). 79 lessons, 16 quizzes, 158 recall cards total. Seed \`pnpm seed:langchain\` (auto-discovers
  \`scripts/data/langchain/*\`). Pipeline gained \`recallContent\` + \`relatedProducts\` (cross-promo).
  Next: BAM builds the **learning path** Triage → Foundation (wanderlearn) → Project (centenarian).
- 🔧 **Admin-managed stream settings** (\`feat/stream-settings\`) — the persistent per-tenant stream
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

## Operator
- 🟡 Merge open branches → \`db:migrate:prod\` → \`seed:bvc:real\` / \`seed:map\` / \`seed:owner\`
  → regen embeddings. Set \`PLATFORM_OWNER_EMAIL=bam@awews.com\`.
- ⚪ After merging the health/vetting work: \`pnpm gen:health\` → \`seed:health\` / \`seed:speedway\`.
- ✅ **Authoritative-values rule** — added to ecosystem + repo CLAUDE.md (never assert guessed external
  values; born from the DNS A-record false-negative). Still TODO: commit the ecosystem copy in \`gemini/\`.
- ⚪ Inform CentOS that witus-learn hosts BVC.
`;
