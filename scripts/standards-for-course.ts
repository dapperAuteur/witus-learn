import { ALIGNMENTS, FRAMEWORKS } from "../src/lib/standards/index";

const FW = new Map(FRAMEWORKS.map((f) => [f.id, f]));
const stateOf = (frameworkId: string) => FW.get(frameworkId)?.state ?? "??";
const jurisOf = (frameworkId: string) => FW.get(frameworkId)?.jurisdiction ?? frameworkId;

/**
 * Print exactly which academic standards ONE course claims, per jurisdiction, for accuracy review.
 *
 *   pnpm standards:for <course-slug>          # every standard, grouped by state, with coverage
 *   pnpm standards:for <course-slug> --codes   # just the codes (compact)
 *
 * WHY THIS EXISTS
 * The coverage ratchet (check-standards-coverage.ts) only proves a course is aligned to SOMETHING.
 * It cannot tell you whether the specific standards a course claims are still ACCURATE after the
 * lessons change. That is a human read, and this makes it a fast one: after adding or editing a
 * course, run this and confirm every code below is a standard the course genuinely teaches now —
 * not one it used to, and never one it does not. If a lesson that carried a claim was cut or
 * rewritten, fix the claim in src/lib/standards/claims.ts (and the jurisdiction files) so the page
 * a teacher sees is true. See the standards-accuracy rule in CLAUDE.md.
 */

const codesOnly = process.argv.includes("--codes");
const wanted = process.argv[2];
if (!wanted || wanted.startsWith("--")) {
  console.error("Usage: pnpm standards:for <course-slug> [--codes]");
  process.exit(1);
}

const rows = ALIGNMENTS.filter((a) => a.courseSlugs.includes(wanted));

if (rows.length === 0) {
  console.log(`No standards claimed for "${wanted}".`);
  console.log(
    "That is either a genuinely unaligned course (add a claim in src/lib/standards/claims.ts or a\n" +
      "BACKLOG line in scripts/check-standards-coverage.ts) or a mistyped slug.",
  );
  process.exit(0);
}

const byState = new Map<string, typeof rows>();
for (const a of rows) byState.set(stateOf(a.frameworkId), [...(byState.get(stateOf(a.frameworkId)) ?? []), a]);

console.log(`\n${wanted}: claims ${rows.length} standard(s) across ${byState.size} jurisdiction(s)\n`);
for (const [state, list] of [...byState].sort((x, y) => x[0].localeCompare(y[0]))) {
  console.log(`${state}  (${jurisOf(list[0].frameworkId)})`);
  for (const a of list.sort((x, y) => x.code.localeCompare(y.code))) {
    if (codesOnly) {
      console.log(`  ${a.coverage === "partial" ? "~" : " "} ${a.code}`);
    } else {
      console.log(`  ${a.coverage === "partial" ? "PARTIAL" : "full   "}  ${a.code}`);
      console.log(`           ${a.text.slice(0, 96)}${a.text.length > 96 ? "…" : ""}`);
    }
  }
  console.log("");
}
console.log("Review: is every code above a standard THIS course, as it stands today, genuinely teaches?");
