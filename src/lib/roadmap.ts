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
  Phase 0 prototypes in \`docs/prototypes/\`. **Phase 1 done** (mastery dashboard + interactive lesson
  shell + design-system primitives). **Phase 2 in branch**: XP/levels + badges + per-tenant
  \`gamification\` flag (off/light/full), accent-key bar, searchable glossary. Phase 3 next =
  leaderboards surface (when a tenant sets full) + cross-surface polish. BAM likes the CentOS UI/UX.
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
- ⚪ **Login/Mailgun** — root cause CONFIRMED global (fails on BVC too, not tenant-specific): the prod
  Mailgun sending domain (sandbox or from-domain ≠ MAILGUN_DOMAIN). The mailer now logs why + a
  \`[mailer:fallback]\` magic link in the server logs. Fix the Mailgun domain.
- ⚪ **Profile edit UI** — let instructors edit displayName/bio/avatar/links from the dashboard.
- ⚪ Fee-aware pricing (small); lifetime teacher promo + marketing campaigns (\`plans/future/11\`).
- ⚪ Tenant-settings admin (flags) self-serve.

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

## Operator
- 🟡 Merge open branches → \`db:migrate:prod\` → \`seed:bvc:real\` / \`seed:map\` / \`seed:owner\`
  → regen embeddings. Set \`PLATFORM_OWNER_EMAIL=bam@awews.com\`.
- ⚪ Inform CentOS that witus-learn hosts BVC.
`;
