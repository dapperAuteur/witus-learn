import { readFileSync } from "node:fs";
import { allAlignedCourseSlugs } from "../src/lib/standards/index";

/**
 * Guard: every registered course must either carry a standards alignment or be explicitly excused.
 *
 *   pnpm check:standards       # exit 1 if a NEW course has neither
 *   pnpm check:standards --list  # show the backlog and the excused list
 *
 * WHY THIS EXISTS
 * Standards coverage is the thing educators actually shop on, and it rots silently: courses get
 * added weekly, the jurisdiction files are mapped in batches, and nothing connects the two. A
 * measurement on 2026-07-24 found 35 of 89 registered courses with no alignment at all, including
 * every course in the route series, which had just been built. Nothing failed, because nothing was
 * checking.
 *
 * HOW IT WORKS: a RATCHET, not a wall.
 * The 35 already-unaligned courses are listed in BACKLOG below with the reason each is unmapped.
 * They do not fail the build, because failing 35 existing courses would just get the check disabled.
 * What DOES fail is a course that is registered later and appears in neither list. That makes the
 * decision explicit at the moment a course ships: map it, or say in one line why it is out of scope.
 *
 * To clear an entry: map the course in src/lib/standards/ (add or extend a claim in claims.ts and
 * reference it from the jurisdiction files), then delete its line here. The list shrinking is the
 * progress bar.
 */

/** Courses with no academic-standards mapping, and why. Shrink this list; never grow it casually.
 *
 * The route series, labor series, precolonial/contested-history courses, the positive track, the
 * culture histories, and state-civics-dc were mapped on 2026-07-24 to the Common Core Reading- and
 * Writing-in-History-and-Social-Studies strands (RH.11-12.8, RH.11-12.9, WHST.11-12.7/8). Common
 * Core ELA was adopted by ~41 states plus DC; 15 of those jurisdictions are transcribed in this
 * repo so far, so that is how many surface today. Those literacy strands are the genuine fit for a
 * catalog whose defining rule is cited, source-critical, multi-source history with a research
 * capstone — see the three `catalog.*` claims in src/lib/standards/claims.ts. Content-standard
 * mappings (economics, US/world history, geography, civics) remain worthwhile follow-up work, but
 * the courses are no longer unaligned. */
const BACKLOG: Record<string, string> = {
  // Genuinely out of scope: practical/vocational skills with no academic standard to claim.
  // These are permanent, not backlog.
  "knot-tying": "OUT OF SCOPE, practical skill, no academic standard claimed",
  "off-grid-survival": "OUT OF SCOPE, practical skill, no academic standard claimed",
  "broadcasting-break-in": "OUT OF SCOPE, vocational, no academic standard claimed",
  "voice-acting": "OUT OF SCOPE, vocational, no academic standard claimed",
  // Pre-registered. This one is seeded from scripts/seed-sommelier.ts rather than
  // scripts/seed-courses.ts, so `registered` below does not currently see it and the entry is
  // inert. It is written here anyway because this is where the next author looks for the
  // standards decision on a course, and because it goes live automatically if the BVC Sommelier
  // series is ever registered in the file this check scans.
  "bvc-taster-wine": "OUT OF SCOPE, vocational and 21+, no K-12 academic standard claimed",
  // WELL program (plans/67): adult professional education, PRIVATE owner-only study courses.
  // Seeded from scripts/seed-well.ts, so `registered` below does not see them and these entries
  // are inert; written here because this is where the next author looks for the standards
  // decision. Revisit at the public flip.
  "well-orientation-scope": "OUT OF SCOPE, adult professional education, private owner-only (plans/67)",
  "well-coaching-psychology": "OUT OF SCOPE, adult professional education, private owner-only (plans/67)",
  "well-coaching-movement": "OUT OF SCOPE, adult professional education, private owner-only (plans/67)",
  "well-coaching-nutrition": "OUT OF SCOPE, adult professional education, private owner-only (plans/67)",
  "well-recovery-stress": "OUT OF SCOPE, adult professional education, private owner-only (plans/67)",
  "well-sleep": "OUT OF SCOPE, adult professional education, private owner-only (plans/67)",
  "well-mental-wellbeing": "OUT OF SCOPE, adult professional education, private owner-only (plans/67)",
  "well-movement-longevity": "OUT OF SCOPE, adult professional education, private owner-only (plans/67)",
  "well-centenarian-capstone": "OUT OF SCOPE, adult professional education, private owner-only (plans/67)",
  // Adult professional/consumer education. Like the sommelier entry above, this one is currently
  // INERT: `registered` below only matches the shorthand `{ slug: "..." }` form, and this course is
  // registered through a seedAuthoredCourse call, so the guard never sees it. Written down anyway
  // because this is where the next author looks for the decision.
  //
  // Worth revisiting rather than treating as permanent: the course is source-critical research with
  // statutory citation and a research capstone, which is the same profile that earned the catalog's
  // history courses their Common Core literacy mappings (RH.11-12.8, WHST.11-12.7/8). It is excused
  // for now on audience, not on rigour.
  "surplus-funds-basics": "OUT OF SCOPE for now, adult professional education. Revisit for the literacy strands",
  // Monodrama I. Inert for the same reason as the two above (registered via seedAuthoredCourse, not
  // the shorthand form this guard scans). Flagged as a GENUINE mapping candidate rather than an
  // exemption: a course whose capstone is a written narrative draft with structural revision is a
  // direct fit for the Common Core ELA writing strands (W.11-12.3 narrative writing, W.11-12.5
  // revision), which is a closer fit than most of what the catalog has already mapped.
  "monodrama-writing": "MAP THIS, not excused. Narrative-writing course, fits the ELA writing strands",
  "monodrama-performing": "MAP THIS, not excused. Performance craft; check the arts standards rather than ELA",
  "short-form-drama": "MAP THIS, not excused. Dramatic writing, fits the ELA writing strands",
  // The strongest mapping candidate in the Storytelling group: civics content (how local government
  // works, open-meetings law) plus source-critical writing and a research capstone. Fits both the
  // civics standards and the literacy strands the catalog already uses.
  "civic-documentation": "MAP THIS, not excused. Civics plus literacy; the best fit in this group",
  "how-stories-work": "MAP THIS, not excused. Narrative craft across media; ELA reading and writing strands",
  "news-storytelling": "MAP THIS, not excused. Media literacy plus ELA informational writing and sourcing",
  documentary: "MAP THIS, not excused. Media literacy, research ethics, ELA argument-from-evidence",
  "oral-history": "MAP THIS, not excused. ELA speaking/listening plus social-studies historical inquiry",
  "digital-social-storytelling": "MAP THIS, not excused. Media literacy plus ELA production and distribution of writing",
  mockumentary: "MAP THIS, not excused. Media literacy: evaluating credibility of media claims",
};

const seed = readFileSync("scripts/seed-courses.ts", "utf-8");
const registered = [
  ...new Set([...seed.matchAll(/\{\s*slug:\s*"([a-z0-9-]+)"/g)].map((m) => m[1])),
];
const aligned = new Set(allAlignedCourseSlugs());

const unaligned = registered.filter((s) => !aligned.has(s));
const newlyUnaligned = unaligned.filter((s) => !(s in BACKLOG));
const staleBacklog = Object.keys(BACKLOG).filter((s) => aligned.has(s));

if (process.argv.includes("--list")) {
  console.log(`  aligned: ${registered.length - unaligned.length} of ${registered.length}`);
  console.log(`  backlog (unmapped, known): ${unaligned.length - newlyUnaligned.length}`);
  for (const s of unaligned.filter((x) => x in BACKLOG)) console.log(`    ${s}  (${BACKLOG[s]})`);
}

console.log(
  `Standards coverage: ${registered.length - unaligned.length}/${registered.length} courses aligned, ` +
    `${unaligned.length} unmapped (${newlyUnaligned.length} unaccounted for).`,
);

if (staleBacklog.length > 0) {
  console.log(
    `\nGood news: ${staleBacklog.length} course(s) in BACKLOG now have alignments. Delete them from the list:`,
  );
  for (const s of staleBacklog) console.log(`  ${s}`);
}

if (newlyUnaligned.length > 0) {
  console.error("\nThese registered courses have NO standards alignment and are not in the backlog list:");
  for (const s of newlyUnaligned) console.error(`  ${s}`);
  console.error(
    "\nMap the course in src/lib/standards/ (a claim in claims.ts, referenced from the jurisdiction\n" +
      "files), OR add it to BACKLOG in this file with a one-line reason. Educators shop on standards\n" +
      "coverage, so a course shipping without either is a silent gap.",
  );
  process.exit(1);
}
