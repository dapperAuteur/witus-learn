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
- ❓ **UI/UX overhaul** — research who does LMS UX best; BAM likes much of the CentOS Academy
  UI/UX/DX. Improve on it.
- ⚪ **WYSIWYG + markdown editor** (CentOS) for lesson authoring in the dashboard.
- ⚪ **Rich lesson media** — first-class video (upload/Cloudinary), YouTube, Google Slides, PDF, PPT.
- ⚪ **Media chapters + synced transcripts** — chapter markers with jump buttons; transcript that
  follows the audio/video. (\`audio_chapters\` + \`transcript_content\` columns already exist.)
- ⚪ **Language vocab UX** — glossary is one long scroll; paginate / collapse / search.
- ⚪ **Login/Mailgun** — verify the prod Mailgun sending domain (sandbox or from-domain mismatch).
  The mailer now logs why + a stopgap link.
- ⚪ **Profile edit UI** — let instructors edit displayName/bio/avatar/links from the dashboard.
- ⚪ Fee-aware pricing (small); lifetime teacher promo + marketing campaigns (\`plans/future/11\`).
- ⚪ Tenant-settings admin (flags) self-serve.

## Content
- ✅ Languages es/fr/pt/it (tense spines); Ed.L.D., Cyber, US Civics 101, "How to Create a Course".
- ✅ FAA Part 107; ✅ BVC real 21-episode content (lessons + quizzes + maps + Coffee assignment).
- 🟡 **Deepen the thin courses** — languages need exercises/quizzes/dialogues + an AI tutor that
  *evaluates the learner's sentences* (not just explains); civics needs more depth per branch.
- 🟡 Remaining civics courses (Constitution, State-vs-Federal, US/state/local civics, How to Run,
  Help a Campaign, Spotting Misleading Marketing) + per-state template + US map (IN/AZ/AR).
- ⚪ Learning-How-to-Learn (+ FlashLearn spaced recall); ElementaryMBA robotics/electronics/STEAM;
  Ewe/Twi/Igbo; per-episode BVC assignments; record audio.

## Operator
- 🟡 Merge open branches → \`db:migrate:prod\` → \`seed:bvc:real\` / \`seed:map\` / \`seed:owner\`
  → regen embeddings. Set \`PLATFORM_OWNER_EMAIL=bam@awews.com\`.
- ⚪ Inform CentOS that witus-learn hosts BVC.
`;
