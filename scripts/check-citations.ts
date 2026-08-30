import { allSeedEntries } from "./lib/seed-registry";
import { STAGED_COURSES } from "../src/lib/citations";
import { STAGED_CITATIONS } from "../src/lib/citation-content/citations";

/**
 * Guard: every STAGED course must actually have citations generated, and the unstaged backlog must
 * stay visible.
 *
 *   pnpm check:citations          # exit 1 if a staged course generated nothing
 *   pnpm check:citations --list   # print the unstaged backlog too
 *
 * WHY THIS EXISTS
 * The rule BAM set is "every course joins the citation list when it is created". A rule that lives
 * only in a style guide is a rule that gets forgotten the week someone is busy, which is precisely
 * what happened to standards coverage before its ratchet existed.
 *
 * HOW IT WORKS, in two phases:
 *
 *   PHASE 1 (now): a course in STAGED_COURSES with ZERO generated citations fails the build. That
 *   catches the two real failure modes today: staging a course and forgetting to run
 *   `pnpm gen:citations`, and a course whose Sources blocks are in a format the extractor does not
 *   recognise. The second one is not hypothetical: the first version of the extractor read only
 *   bulleted entries and silently reported zero for three courses that plainly had references.
 *
 *   PHASE 2 (stage 5, see docs/citation-verification-plan.md): flip UNSTAGED_FAILS to true and every
 *   registered course must be staged. At that point the rule is enforced by the build rather than by
 *   memory.
 *
 * A course that genuinely cites nothing (a practical drill, a pure exercise course) belongs in
 * NO_CITATIONS_EXPECTED below with a one-line reason, the same shape as the standards BACKLOG.
 */

/** Staged courses that legitimately have no citations. Keep this short and justified. */
const NO_CITATIONS_EXPECTED: Record<string, string> = {
  // Confirmed by generation on 2026-08-03: no `## Sources` block anywhere in the course.
  // These are CONTENT GAPS rather than exemptions, and they are recorded here so the build stays
  // green while they are fixed rather than being quietly forgotten. Remove the line once the course
  // has sources, then re-run `pnpm gen:citations`.
  "how-to-create-a-course": "CONTENT GAP, no sources block in any lesson, needs authoring",
  spanish: "CONTENT GAP, no sources block in any lesson, needs authoring",
};

/** Flip at stage 5, when the whole library is staged. */
const UNSTAGED_FAILS = false;

const counts = new Map<string, number>();
for (const c of STAGED_CITATIONS) counts.set(c.courseSlug, (counts.get(c.courseSlug) ?? 0) + 1);

const emptyStaged = STAGED_COURSES.filter(
  (s) => (counts.get(s) ?? 0) === 0 && !(s in NO_CITATIONS_EXPECTED),
);

// Registered courses, read the same way check-standards-coverage.ts reads them: through the seed
// registry, which parses every `seedAuthoredCourse` call in every seed script. This used to regex
// scripts/seed-courses.ts alone, so it saw ~138 of 261 slugs and under-reported "not yet staged"
// by every course seeded from seed-health.ts and the other seeders.
const registered = [...new Set(allSeedEntries().map((e) => e.slug))];
const unstaged = registered.filter((s) => !STAGED_COURSES.includes(s));

console.log(
  `Citations: ${STAGED_CITATIONS.length} across ${counts.size} of ${STAGED_COURSES.length} staged course(s); ` +
    `${unstaged.length} registered course(s) not yet staged.`,
);

if (process.argv.includes("--list")) {
  for (const s of STAGED_COURSES) {
    const n = counts.get(s) ?? 0;
    const why = s in NO_CITATIONS_EXPECTED ? `  (${NO_CITATIONS_EXPECTED[s]})` : "";
    console.log(`  ${s.padEnd(36)} ${String(n).padStart(4)}${why}`);
  }
  if (unstaged.length) {
    console.log("\n  not yet staged:");
    for (const s of unstaged) console.log(`    ${s}`);
  }
}

const stale = Object.keys(NO_CITATIONS_EXPECTED).filter((s) => (counts.get(s) ?? 0) > 0);
if (stale.length) {
  console.log(
    `\nGood news: ${stale.length} course(s) listed as having no citations now have some. Delete them from NO_CITATIONS_EXPECTED:`,
  );
  for (const s of stale) console.log(`  ${s}`);
}

if (emptyStaged.length > 0) {
  console.error("\nThese courses are STAGED but generated zero citations:");
  for (const s of emptyStaged) console.error(`  ${s}`);
  console.error(
    "\nEither run `pnpm gen:citations` (you staged it and did not regenerate), or the course's\n" +
      "Sources blocks are in a shape the extractor does not read (check scripts/gen-citations.ts),\n" +
      "or the course genuinely cites nothing, in which case add it to NO_CITATIONS_EXPECTED with a\n" +
      "one-line reason. A staged course silently contributing nothing is the failure this guards.",
  );
  process.exit(1);
}

if (UNSTAGED_FAILS && unstaged.length > 0) {
  console.error("\nThese registered courses are not in STAGED_COURSES:");
  for (const s of unstaged) console.error(`  ${s}`);
  process.exit(1);
}
