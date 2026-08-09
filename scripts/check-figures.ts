import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { FIGURE_PROBLEM_LABEL, checkFigures, extractFigures } from "../src/lib/figures";

/**
 * Guard: `:::figure` lesson images must be well-formed, described, and accounted for.
 *
 *   pnpm check:figures          # exit 1 on any broken or unaccountable figure
 *   pnpm check:figures --list   # per-file figure counts
 *
 * WHY THIS IS A BUILD GATE, and the fourth guard of its kind (after quiz-balance, longest-option,
 * reveals and assessment-fit): every failure it catches is INVISIBLE IN THE APP.
 *
 * A malformed or indented `:::figure` does not error. The renderer simply does not match it
 * (src/components/lesson-body.tsx matches FIGURE_RE anchored at ^), so the line falls through to
 * ordinary markdown and ships as a stray line of literal text where a picture should be. Nobody
 * reviewing the page notices, because there is nothing to notice: the image was never there.
 *
 * The same logic covers the content fields:
 *   · empty or placeholder ALT      the image is simply absent for a screen-reader user, silently
 *   · alt identical to the caption  they hear the same sentence twice and learn nothing about the image
 *   · empty or placeholder CREDIT   this catalog's whole trust signal is that it can account for what
 *                                   it publishes. An unattributed image is the visual equivalent of an
 *                                   uncited claim, and for third-party media it is how a takedown starts
 *   · a non-Cloudinary URL          hotlinks a server we do not control, which can rotate or 404 without
 *                                   anyone noticing, and puts load on an institution that never agreed
 *
 * Every rule here is a runtime FACT, never an opinion, which is the same line check-assessment-fit
 * draws. Whether a caption is INSIGHTFUL is a judgment and is deliberately not gated: a guard that
 * cries wolf gets allowlisted into uselessness, which is worse than no guard.
 *
 * A ratchet, like its siblings. The corpus is currently clean, so there is no GRANDFATHERED list and
 * none should ever be added: a new figure that cannot state its own provenance should not ship.
 *
 * The rights RULE itself (what licences may be published, and why CC BY-SA is allowed but flagged)
 * lives in scripts/upload-course-media.mjs, and the human approval step is /admin/media. This script
 * only checks that whatever shipped is well-formed and carries a credit; it cannot know whether the
 * credit is TRUE. That is what the review queue is for.
 */

/**
 * Course bodies are TS template literals, so a figure authored as the FIRST line of a body reads
 * ``body: `:::figure …`` in the source: at runtime it is line 1 of the body string and renders
 * perfectly, but in the raw file it is not at column 0, so a naive line scan would skip it and every
 * check below would silently pass on an unchecked figure.
 *
 * Normalizing the body opener to its own line makes the file agree with what the renderer sees.
 * Line numbers stay usable because the inserted break only ever splits the `body:` line itself.
 */
function asRenderedLines(src: string): string {
  return src.replace(/body:\s*`/g, "body: `\n");
}

const listAll = process.argv.includes("--list");
const files = execFileSync("git", ["ls-files", "scripts/data"], { encoding: "utf-8" })
  .split("\n")
  .filter((f) => f.endsWith("-course.ts"));

interface Violation {
  file: string;
  line: number;
  problem: string;
  excerpt: string;
}

const violations: Violation[] = [];
let total = 0;

for (const file of files) {
  const src = asRenderedLines(readFileSync(file, "utf-8"));
  const n = extractFigures(src).length;
  total += n;
  if (listAll && n > 0) console.log(`  ${n.toString().padStart(3)} figure  ${file}`);
  for (const f of checkFigures(src)) {
    violations.push({
      file,
      line: f.line,
      problem: FIGURE_PROBLEM_LABEL[f.problem],
      excerpt: f.excerpt,
    });
  }
}

console.log(
  `Scanned ${files.length} course files: ${total} figures, ${violations.length} problem(s).`,
);

if (violations.length > 0) {
  console.error("\nBroken :::figure blocks (each one fails SILENTLY in the app):");
  for (const v of violations) {
    console.error(`  ${v.file}:${v.line}  ${v.problem}\n      ${v.excerpt}`);
  }
  console.error(
    "\nSyntax: :::figure <url> ||| <alt> ||| <caption> ||| <credit>, flush left, on one line.",
  );
  console.error(
    "alt describes the image for someone who cannot see it; caption says what to look at and why;",
  );
  console.error("credit names creator, date, licence and source. All four are required.");
  process.exit(1);
}
