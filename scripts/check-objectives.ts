import { existsSync, readFileSync } from "node:fs";
import { allSeedEntries, loadCourse } from "./lib/seed-registry";
import { OBJECTIVES_BASELINE } from "./lib/objectives-baseline";
import { evaluateObjectives, OBJECTIVES_CUTOFF, type ObjectivesReport } from "./lib/objectives-check";
import { ALIGNMENTS } from "../src/lib/standards/index";

/**
 * Guard: objectives and success criteria on every lesson (course-creation rubric v1.7, gate D10).
 *
 *   pnpm check:objectives          # exit 1 when a course in scope is missing them, or any are malformed
 *   pnpm check:objectives --list   # coverage per course, and the excused list's progress
 *
 * IN SCOPE: every course NOT in scripts/lib/objectives-baseline.ts (the catalog as registered on
 * 2026-11-16, so in practice every course added since), plus a listed course whose header `Brief:`
 * line is dated 2026-11-16 or later. In scope means every lesson carries one to three `objectives`
 * and at least one `successCriteria` entry (scripts/data/authored-course.ts).
 *
 * ON EVERY COURSE, excused or not, fields that are present must be well formed: no empty text, at most
 * three objectives, and an objective's `standardCode` must be a code the course actually claims in
 * src/lib/standards/ (so a lesson cannot name a standard the map does not back).
 *
 * THE RATCHET: an excused course whose every lesson now passes fails until its line is deleted from
 * the baseline, so the list only shrinks and its length is the progress bar.
 *
 * Offline, no DATABASE_URL. A gitignored module not on this machine is counted as unreadable, never
 * failed, the same as the other guards.
 */

const listAll = process.argv.includes("--list");

async function main(): Promise<number> {
  const excused = new Set(OBJECTIVES_BASELINE);
  const codesFor = (slug: string) => new Set(ALIGNMENTS.filter((a) => a.courseSlugs.includes(slug)).map((a) => a.code));
  const registered = new Set<string>();
  const reports: ObjectivesReport[] = [];
  const unreadable: string[] = [];
  const done = new Set<string>();
  for (const entry of allSeedEntries()) {
    registered.add(entry.slug);
    if (done.has(entry.slug)) continue;
    const course = await loadCourse(entry);
    if (!course) continue;
    done.add(entry.slug);
    const file = entry.modulePath ? `scripts/${entry.modulePath.replace(/^\.\//, "")}.ts` : null;
    const source = file && existsSync(file) ? readFileSync(file, "utf-8") : "";
    reports.push(evaluateObjectives({ slug: entry.slug, course, source, excused, claimedCodes: codesFor(entry.slug) }));
  }
  for (const s of registered) if (!done.has(s)) unreadable.push(s);

  const lessons = reports.reduce((a, r) => a + r.lessons, 0);
  const withObjectives = reports.reduce((a, r) => a + r.withObjectives, 0);
  const complete = reports.filter((r) => r.complete);
  const failing = reports.filter((r) => r.problems.length > 0);
  const stale = reports.filter((r) => excused.has(r.slug) && r.complete).map((r) => r.slug);
  const gone = OBJECTIVES_BASELINE.filter((s) => !registered.has(s));

  console.log(
    `Objectives (rubric D10, from ${OBJECTIVES_CUTOFF}): ${complete.length}/${reports.length} course(s) complete, ` +
      `${withObjectives}/${lessons} lesson(s) with objectives; ${excused.size} excused by the baseline, ` +
      `${unreadable.length} unreadable; ${failing.length} course(s) failing.`,
  );

  if (listAll) {
    const partial = reports
      .filter((r) => r.withObjectives > 0 || r.withCriteria > 0 || r.inScope)
      .sort((a, b) => a.slug.localeCompare(b.slug));
    console.log(`\nCourses with any objectives, or in scope (${partial.length}):`);
    for (const r of partial) {
      console.log(
        `  ${r.complete ? "complete" : r.inScope ? "IN SCOPE" : "partial "}  ${r.slug}: objectives ${r.withObjectives}/${r.lessons}, success criteria ${r.withCriteria}/${r.lessons}`,
      );
    }
    console.log(`\nExcused by scripts/lib/objectives-baseline.ts: ${excused.size} (shrinks as courses are brought up to D10).`);
    if (unreadable.length) console.log(`Unreadable here: ${unreadable.join(", ")}`);
  }

  let failed = false;
  if (failing.length) {
    failed = true;
    console.error("\nThese courses miss rubric v1.7 gate D10 (objectives and success criteria on every lesson):");
    for (const r of failing) {
      console.error(`  ${r.slug}${r.inScope ? "" : " (excused, but a field present is malformed)"}`);
      for (const p of r.problems.slice(0, 12)) console.error(`      ${p}`);
      if (r.problems.length > 12) console.error(`      ... and ${r.problems.length - 12} more`);
    }
    console.error(
      "\nGive every lesson `objectives` (one to three, each finishing \"After this lesson you can ...\", with the\n" +
        "`standardCode` it serves when the course claims one) and `successCriteria` (what its quiz or project\n" +
        "checks). Never add a course to scripts/lib/objectives-baseline.ts to make it pass.",
    );
  }
  if (stale.length || gone.length) {
    failed = true;
    console.error("\nDelete these lines from scripts/lib/objectives-baseline.ts (the list only shrinks):");
    for (const s of stale) console.error(`  ${s}  (every lesson now has objectives and success criteria)`);
    for (const s of gone) console.error(`  ${s}  (no seed script registers it any more)`);
  }
  return failed ? 1 : 0;
}

main().then(
  (code) => process.exit(code),
  (err) => {
    console.error(err);
    process.exit(2);
  },
);
