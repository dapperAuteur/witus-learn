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

### Platform backlog
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
- ⚪ **Accessibility / WCAG compliant** — the redesign (and existing surfaces) must be a11y compliant:
  semantic markup, labels, focus states, contrast, keyboard nav, reduced-motion. Bake into Phase 1+.
- ⚪ **Offline support (PWA)** — the app should work offline. Manifest groundwork exists
  (\`TenantTheme.manifestUrl\`); needs a service worker + offline shell.
- ⚪ **Offline video/audio** — media should play offline. CentOS had a solution — review and port it.
- ⚪ **WYSIWYG + markdown editor** (CentOS) for lesson authoring in the dashboard.
- ⚪ **Rich lesson media** — first-class video (upload/Cloudinary), YouTube, Google Slides, PDF, PPT.
- ⚪ **Media chapters + synced transcripts** — chapter markers with jump buttons; transcript that
  follows the audio/video. (\`audio_chapters\` + \`transcript_content\` columns already exist.)
- ✅ **Language vocab UX** — glossary is now searchable + collapsible (no more long scroll).
- ✅ **Login 403 fixed** — was Better Auth "Invalid origin" on brand domains; trustedOrigins is now
  dynamic per registered tenant. (Not Mailgun — that was a wrong early guess.)
- ⚪ **Magic-link lands on wrong tenant** — clicking the BVC sign-in link opens learn.witus.online,
  not bettervice.club. Diagnosis: link is generated from \`BETTER_AUTH_URL\` (learn.witus.online);
  \`rewriteOrigin\` swaps the verify host, but the post-verify redirect resolves against the base URL.
  **Hold** pending BAM's new WitUS-Online auth system (discuss its impact on this app first).
- ⚪ **Profile edit UI** — let instructors edit displayName/bio/avatar/links from the dashboard.
- ⚪ Fee-aware pricing (small); lifetime teacher promo + marketing campaigns (\`plans/future/11\`).
- ⚪ Tenant-settings admin (flags) self-serve.
- ⚪ **Growing Belts latitude bands** — prepopulate only 3 commodities; let the user toggle the rest
  on/off, and add a CentOS-style **key** that shows how overlapping band colors blend (so users can
  read the mixed colors). Refines the per-commodity belt work already shipped.

## Content
- ✅ Languages es/fr/pt/it (tense spines); Ed.L.D., Cyber, US Civics 101, "How to Create a Course".
- ✅ FAA Part 107; ✅ BVC real 21-episode content (lessons + quizzes + maps + Coffee assignment).
- 🔧 **Deepen the languages** (in branch) — per-tense fill-in EXERCISES (forgiving on accents) +
  a **sentence-evaluating coach**: the learner writes a sentence and the AI checks grammar/word-order
  grounded only in the course, cites the rule, and gives a next prompt. Next: dialogues; civics depth.
- ✅ **Accent/special-character helper** — clickable accent bar on the exercise + sentence inputs
  (inserts é, ñ, ã, ç, è… into the focused field). Follow-up: per-language character sets.
- ⚪ **BVC Season 2 missing episodes** — beer, mezcal (pairs with tequila), and one other are absent;
  add them to the S2 lineup.
- 🟡 Remaining civics courses (Constitution, State-vs-Federal, US/state/local civics, How to Run,
  Help a Campaign, Spotting Misleading Marketing) + per-state template + US map (IN/AZ/AR).
- ⚪ Learning-How-to-Learn (+ FlashLearn spaced recall); ElementaryMBA robotics/electronics/STEAM;
  Ewe/Twi/Igbo; per-episode BVC assignments; record audio.
- 🟡 **AI courses** — **F1 "AI Literacy: Use It Well & Wisely" BUILT** (9 lessons, cited, exercises +
  quiz, on Learn.WitUS). Next: F2 Building with AI [Trade School], F4 AI for Entrepreneurs + F3 Young
  Makers [ElementaryMBA], then the mastery ladders. Full plan: \`docs/ai-curriculum.md\`.
- 🟡 **Admin/Operator workstream** (scheduled next) — a consolidated \`/admin\` dashboard unifying the
  owner links (domains/live/paths/leads/roadmap) + **tenant settings** (flags: gamification dose,
  AI tutor, age-gate, coming-soon, **accent/branding**) + **marketing** (campaigns/promos). ~2-3 branches.
- ⚪ **Schools: Trade School + ElementaryMBA stay separate, bridged** — ElementaryMBA's HS end graduates
  into Trade School via a learning path (not merged).

## Operator
- 🟡 Merge open branches → \`db:migrate:prod\` → \`seed:bvc:real\` / \`seed:map\` / \`seed:owner\`
  → regen embeddings. Set \`PLATFORM_OWNER_EMAIL=bam@awews.com\`.
- ⚪ Inform CentOS that witus-learn hosts BVC.
`;
