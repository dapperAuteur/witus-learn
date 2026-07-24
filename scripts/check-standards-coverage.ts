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

/** Courses with no academic-standards mapping, and why. Shrink this list; never grow it casually. */
const BACKLOG: Record<string, string> = {
  // Route series (plans/37 to 45). Genuinely standards-rich (US history, civics, economics,
  // geography, ELA) and mapping them is real work that has not been done yet.
  "green-book-how-to-read-a-route": "route series, unmapped",
  "indiana-avenue-a-district-and-what-replaced-it": "route series, unmapped",
  "the-gym-and-the-color-line": "route series, unmapped",
  "two-racetracks": "route series, unmapped",
  "mudsock-how-a-rivalry-marks-a-boundary": "route series, unmapped",
  "the-presidents-house": "route series, unmapped",
  "fort-harrison-the-federal-footprint": "route series, unmapped",
  "dc-where-the-instrument-was-blessed": "route series, unmapped",
  "philadelphia-the-university-and-the-block": "route series, unmapped",
  "seattle-the-modern-bookend": "route series, unmapped",
  "baltimore-the-whole-chain": "route series, unmapped",
  "pittsburgh-where-the-playbook-was-written": "route series, unmapped",
  "how-the-tools-travelled": "route series capstone, unmapped",
  "exported-how-others-studied-american-race-law": "route series capstone, unmapped",

  // History and culture courses that predate the standards work.
  "where-we-rested": "positive track, unmapped; property/civics content when mapped",
  "the-schoolhouse-network": "positive track, unmapped; strong civics/economics content when mapped",
  "great-migration-and-the-world": "unmapped",
  "africa-before-colonization": "unmapped",
  "asia-before-european-colonization": "unmapped",
  "precolumbian-mesoamerica": "unmapped",
  "pan-africanism": "unmapped",
  afrocentricity: "unmapped",
  "training-the-colonizer": "unmapped",
  "hoodoo-tradition-of-resistance": "unmapped",
  "hoodoo-complete": "unmapped",
  "history-of-bathing": "unmapped",

  // Labor series. Strong economics and civics content; unmapped as a batch.
  "labor-brazil": "labor series, unmapped",
  "labor-chile": "labor series, unmapped",
  "labor-germany": "labor series, unmapped",
  "labor-india": "labor series, unmapped",
  "labor-south-africa": "labor series, unmapped",
  "labor-south-korea": "labor series, unmapped",
  "sweden-denmark-nordic-model": "labor series, unmapped",

  // DC is a jurisdiction in the standards data but its own civics course is not mapped to it yet.
  "state-civics-dc": "unmapped, and DC's own civics course should map to DC's standards",

  // Genuinely out of scope: practical/vocational skills with no academic standard to claim.
  // These are permanent, not backlog.
  "knot-tying": "OUT OF SCOPE, practical skill, no academic standard claimed",
  "off-grid-survival": "OUT OF SCOPE, practical skill, no academic standard claimed",
  "broadcasting-break-in": "OUT OF SCOPE, vocational, no academic standard claimed",
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
