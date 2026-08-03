import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { join, relative } from "node:path";

/**
 * Guard against em-dashes (— and –) creeping back into USER-VISIBLE copy.
 *
 *   pnpm check:em-dashes          # exit 1 on any unprotected dash
 *   pnpm check:em-dashes --list   # print every protected hit too, with its reason
 *
 * Why a script and not an ESLint rule: the ban has legitimate exceptions that are about MEANING,
 * not syntax. A dash inside a verbatim cited title (*Farewell—We're good and gone*), inside a
 * direct quotation, or inside a regex that literally matches dashes must stay. ESLint sees a
 * string literal and cannot tell those apart, so the rule would either fire on real citations or
 * need a disable comment on hundreds of them. This encodes the same boundaries the sweep used
 * (plans/app-improvements/em-dashes-ai-tells-sweep.md), so the check and the cleanup agree.
 *
 * The rule for humans: prose gets a comma, colon, or a reword. If you are quoting or citing
 * something that really contains a dash, leave it and this script will recognise it.
 */

const ROOTS = ["src", "scripts"];
const EXCLUDE_DIRS = [
  // Verbatim state-standard text, transcribed from state documents. The isolation suite guards it.
  join("src", "lib", "standards", "data"),
  // Verbatim CITATION text, generated from the lessons by `pnpm gen:citations`. Same reason as the
  // standards data: these are quotations of someone else's words, and "fixing" them would corrupt
  // them. A citation's dashes are load-bearing (page ranges like 847-886, hyphenated titles,
  // publisher names), and a reference entry is already an explicit exception to the ban in the rule
  // this script enforces.
  //
  // This surfaced the way these always do: the file passed lint while it was untracked, because
  // trackedFiles() reads `git ls-files`, and started failing the moment it was committed. Worth
  // remembering when adding any future generated artifact that carries quoted text.
  join("src", "lib", "citation-content"),
  join("src", "db", "migrations"),
  join("node_modules"),
  join(".next"),
];
const EXTS = [".ts", ".tsx"];
const DASH = /[—–]/;

type Hit = { file: string; line: number; text: string; reason: string | null };

/**
 * Only GIT-TRACKED files are checked.
 *
 * Several course data files (scripts/data/nasm-*, ecs-*) are auto-generated from the CentOS
 * curriculum and are explicitly gitignored, so they exist in some working trees and not others.
 * Walking the filesystem would make this check pass or fail depending on whose machine it ran on,
 * and would demand edits to files the repo does not own. Their dashes have to be fixed at the
 * generator (scripts/gen-health-data.ts) or upstream, not here.
 */
function trackedFiles(): string[] {
  const out = execFileSync("git", ["ls-files", "-z", ...ROOTS], { encoding: "utf-8" });
  return out
    .split("\0")
    .filter((f) => f && EXTS.some((e) => f.endsWith(e)))
    .filter((f) => !EXCLUDE_DIRS.some((ex) => f === ex || f.startsWith(`${ex}/`)));
}

/** A markdown reference-list entry: "- Marks, C. (1989). *Farewell—We're good and gone*." */
const REFERENCE = /^\s*[-*]\s+.*\((?:n\.d\.|\d{4}[a-z]?)\)/;
/** A code comment line. The (?!\*) matters: markdown **bold** prose is CONTENT, not a comment. */
const COMMENT_LINE = /^\s*(\/\/|\/\*|\*(?!\*))/;
/** A markdown blockquote — quoted material. */
const BLOCKQUOTE = /^\s*>/;
/** A heading that opens a citations block. */
const SOURCES_HEADING = /^\s*#{1,6}\s*(sources|references|further reading|bibliography)\b/i;
/** Any other heading closes it. */
const ANY_HEADING = /^\s*#{1,6}\s+/;
/** An author-date citation on the line implies quoted/cited material. */
const CITATION = /\((?:[A-Z][\w.'’-]+(?:\s*(?:&|and|et al\.?)\s*[A-Z][\w.'’-]+)*,\s*)?(?:n\.d\.|\d{4}[a-z]?)(?:,\s*p{1,2}\.\s*\d+)?\)/;

/**
 * The one OPEN exception, pending a decision (plans/user-tasks/179).
 *
 * `scripts/seed-faa.ts` MODULE_TITLES are `"Module 5 — Airspace"` strings that become course
 * SECTION labels, and `seed-authored-course.ts` keys modules off the distinct label — so changing
 * them could rename or duplicate every FAA module on the next `pnpm seed:faa`. A sibling regex
 * (`topicFor`) and the review-title template are coupled to the same separator and must change
 * together. That is a data decision, not a copy edit, so it is exempted rather than swept.
 *
 * Matched by LINE SHAPE, not by filename, so an unrelated new dash in that same file still fails.
 */
const FAA_MODULE_TITLE = /^\s*\d+:\s*"Module \d+ [—–]/;
const FAA_REVIEW_TITLE = /`Module \$\{m\.moduleOrder\} Review [—–]/;

/** Why this dash is allowed to stay, or null if it is a violation. */
function reasonFor(line: string, inBlockComment: boolean, inSources: boolean): string | null {
  if (FAA_MODULE_TITLE.test(line) || FAA_REVIEW_TITLE.test(line)) {
    return "FAA module label (coupled to the seeder; pending decision, task 179)";
  }
  // Already inside a /* … */ or JSX {/* … */} block. Note this is true even on the line that
  // CLOSES the comment: the text before the `*/` is still comment, not copy.
  if (inBlockComment) return "block comment";
  if (COMMENT_LINE.test(line)) return "code comment";
  // The line that OPENS a comment, when the dash sits after the opener. Covers the JSX form
  // `{/* … — … */}`, which is by far the most common comment shape in the app's page files.
  const open = line.indexOf("/*");
  if (open >= 0) {
    const dashAt = line.search(DASH);
    if (dashAt > open) return "comment";
  }
  if (BLOCKQUOTE.test(line)) return "blockquote (quoted material)";
  if (inSources) return "sources/references block";
  if (REFERENCE.test(line)) return "reference entry (verbatim title)";
  // A dash INSIDE a regex literal. Several scripts exist to detect or strip dashes
  // (gen-health-data.ts, email-redact.ts, seed-bvc-real.ts's `BVC[:—-]` stripper), so their
  // patterns must keep the character they match. Matching `/…/flags` spans is good enough here:
  // these are code lines, and a URL carrying an em-dash is not a thing.
  for (const m of line.matchAll(/\/(?:[^/\\\n]|\\.)+\/[gimsuy]*/g)) {
    if (DASH.test(m[0])) return "regex literal";
  }
  // A character class holding a dash, e.g. [A-Z0-9 ,&'/.:()–—\-]. The span matcher above misses
  // these when the class itself contains an unescaped "/", so match the class directly — but only
  // on a line with real regex context, so a markdown link label like [a — b] is still copy.
  if (/\[[^\]\n]*[—–][^\]\n]*\]/.test(line) && /\b(?:replace|match|test|exec|split)\(|RegExp|=\s*\//.test(line)) {
    return "regex character class";
  }
  // A trailing // comment that contains the dash (code before it is dash-free).
  const slash = line.indexOf("//");
  if (slash >= 0 && !DASH.test(line.slice(0, slash))) return "trailing comment";
  // A verbatim quotation: the dash sits inside "…" on a line carrying an author-date citation.
  if (CITATION.test(line)) {
    for (const m of line.matchAll(/"([^"]*)"/g)) {
      if (DASH.test(m[1])) return "verbatim quotation";
    }
  }
  return null;
}

function scan(files: string[]): Hit[] {
  const hits: Hit[] = [];
  for (const file of files) {
    const lines = readFileSync(file, "utf-8").split("\n");
    let inBlockComment = false;
    let inSources = false;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const opened = line.includes("/*");
      const closed = line.includes("*/");
      // Sources blocks run until the next heading or a blank line.
      if (SOURCES_HEADING.test(line)) inSources = true;
      else if (inSources && (ANY_HEADING.test(line) || line.trim() === "")) inSources = false;

      if (DASH.test(line)) {
        hits.push({
          file,
          line: i + 1,
          text: line.trim(),
          reason: reasonFor(line, inBlockComment, inSources),
        });
      }
      if (opened && !closed) inBlockComment = true;
      if (closed) inBlockComment = false;
    }
  }
  return hits;
}

const listAll = process.argv.includes("--list");
const showAll = process.argv.includes("--all");
const files = trackedFiles();
const hits = scan(files);
const violations = hits.filter((h) => h.reason === null);
const protectedHits = hits.length - violations.length;

if (listAll) {
  const byReason = new Map<string, number>();
  for (const h of hits) if (h.reason) byReason.set(h.reason, (byReason.get(h.reason) ?? 0) + 1);
  console.log("Protected (allowed) hits by reason:");
  for (const [reason, n] of [...byReason].sort((a, b) => b[1] - a[1])) {
    console.log(`  ${String(n).padStart(5)}  ${reason}`);
  }
}

console.log(
  `Scanned ${files.length} files: ${protectedHits} protected, ${violations.length} violation${violations.length === 1 ? "" : "s"}.`,
);

if (violations.length > 0) {
  console.error("\nEm-dashes in user-visible copy (use a comma, colon, or reword):");
  for (const v of violations.slice(0, showAll ? violations.length : 60)) {
    console.error(`  ${relative(process.cwd(), v.file)}:${v.line}\n    ${v.text.slice(0, 150)}`);
  }
  if (!showAll && violations.length > 60) console.error(`  …and ${violations.length - 60} more.`);
  process.exit(1);
}
