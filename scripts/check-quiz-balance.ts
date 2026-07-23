import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { join, relative } from "node:path";
import ts from "typescript";

/**
 * Guard against ANSWER-POSITION GIVEAWAYS in authored quiz banks.
 *
 *   pnpm check:quiz-balance          # exit 1 on any exposed bank
 *   pnpm check:quiz-balance --list   # print every bank, passing ones included
 *
 * THE RULE
 * --------
 * A quiz bank of 8 or more questions FAILS when BOTH of these are true:
 *
 *   1. more than 60% of its correct answers sit at a single option index, and
 *   2. the quiz does not set `shuffleOptions: true`.
 *
 * Either half on its own is fine. A bank that shuffles is safe whatever its stored indices,
 * because `toSafeQuiz` (src/lib/quiz.ts) hands the player a per-attempt option order and scoring
 * is by IDENTITY, not by position, so the stored `correctIndex` never reaches the screen in a
 * fixed slot. A bank that does not shuffle is fine as long as its answers are spread out.
 *
 * What the rule is protecting: with a constant `correctIndex` and no shuffle, a learner scores
 * 100% by clicking the same letter every time without reading a word. Every score, pass/fail and
 * dashboard "quiz average" from that course then measures nothing.
 *
 * WHY 60%, AND WHY IT SCALES WITH OPTION COUNT
 * --------------------------------------------
 * The floor is `max(0.60, 1/options + 0.25)`, using the widest question in the bank:
 *
 *   - 4 options (the house default): uniform is 25%, so 60% is well clear of ordinary authoring
 *     noise. A balanced 10-question bank tripping this by chance is a fraction of a percent.
 *   - 3 options: uniform is 33%, still under the 60% floor, so 60% governs.
 *   - 2 options (true/false): uniform is 50%, and a genuine 6-of-10 "true" bank is not a
 *     giveaway. The floor rises to 75% so honest true/false banks are left alone.
 *
 * Banks under 8 questions are not checked: with so few answers, "most at one index" is normal and
 * the sample is too small to distinguish a giveaway from chance.
 *
 * THE FIX, when this fires
 * ------------------------
 * Add `shuffleOptions: true` to the quiz. That is the cheap, content-preserving fix: it rewrites
 * no prompt, moves no option and changes no `correctIndex`. Do NOT "fix" a bank by reordering
 * options or editing prompts. `quiz_attempts.questionKey` is derived from the prompt text
 * (`questionKey`, src/lib/quiz.ts), so an edited prompt silently starts a fresh per-question
 * history for every learner who already answered it.
 *
 * While you are there, consider `questionsPerAttempt: 8` on a bank of 15 or more, so a retake
 * draws a different subset rather than the same list (the repo standard, see
 * scripts/data/indiana-avenue-course.ts). Never set it above the bank size, and never below 5.
 *
 * WHY A SCRIPT AND NOT AN ESLINT RULE
 * -----------------------------------
 * The property this checks is statistical and spans a whole array literal, which is not what a
 * lint rule is shaped for. This walks the TypeScript AST instead of the text, so a markdown body
 * full of brackets and braces cannot confuse it, and it finds a bank wherever it is authored:
 * `lesson.quiz`, the FAA `AUTHORED_FAA_QUIZZES` entries, or anything written later.
 */

const ROOTS = ["scripts", "src"];
const EXCLUDE_DIRS = [join("src", "db", "migrations"), join("node_modules"), join(".next")];
const EXTS = [".ts", ".tsx"];

/** Banks smaller than this are not checked (too small to tell a giveaway from chance). */
const MIN_BANK = 8;
/** Base share of one index that counts as exposed. */
const BASE_SHARE = 0.6;
/** Extra headroom over uniform, so a true/false bank is judged against 50%, not 25%. */
const OVER_UNIFORM = 0.25;

/**
 * Only GIT-TRACKED files are checked, for the same reason check-em-dashes.ts does it: some
 * generated course data (scripts/data/nasm-*, ecs-*) is gitignored and exists only in some working
 * trees, so walking the filesystem would make the result depend on whose machine it ran on.
 */
function trackedFiles(): string[] {
  const out = execFileSync("git", ["ls-files", "-z", ...ROOTS], { encoding: "utf-8" });
  return out
    .split("\0")
    .filter((f) => f && EXTS.some((e) => f.endsWith(e)))
    .filter((f) => !EXCLUDE_DIRS.some((ex) => f === ex || f.startsWith(`${ex}/`)));
}

interface Bank {
  file: string;
  line: number;
  label: string;
  size: number;
  /** correctIndex -> how many questions use it. */
  counts: Map<number, number>;
  topIndex: number;
  topCount: number;
  share: number;
  /** Widest `options` array in the bank; 0 when no question spells its options out inline. */
  options: number;
  shuffles: boolean;
  perAttempt: number | null;
  /** The share at which this bank is judged, given its option count. */
  limit: number;
}

function propMap(obj: ts.ObjectLiteralExpression): Map<string, ts.Expression> {
  const out = new Map<string, ts.Expression>();
  for (const p of obj.properties) {
    if (!ts.isPropertyAssignment(p)) continue;
    const n = p.name;
    const name = ts.isIdentifier(n) || ts.isStringLiteral(n) ? n.text : null;
    if (name) out.set(name, p.initializer);
  }
  return out;
}

function numberOf(expr: ts.Expression | undefined): number | null {
  if (!expr) return null;
  if (ts.isNumericLiteral(expr)) return Number(expr.text);
  return null;
}

/** A human-readable name for the bank: the owning lesson's slug or title where there is one. */
function labelFor(obj: ts.ObjectLiteralExpression): string {
  const own = propMap(obj);
  const ownTitle = own.get("title");
  const parent = obj.parent;
  if (parent && ts.isPropertyAssignment(parent)) {
    const grand = parent.parent;
    if (grand && ts.isObjectLiteralExpression(grand)) {
      const outer = propMap(grand);
      for (const key of ["slug", "title"]) {
        const v = outer.get(key);
        if (v && ts.isStringLiteral(v)) return v.text;
      }
    }
  }
  if (ownTitle && ts.isStringLiteral(ownTitle)) return ownTitle.text;
  return "(unnamed quiz)";
}

/** Reads a bank out of an object literal that has a `questions` array of authored questions. */
function bankFrom(obj: ts.ObjectLiteralExpression, file: string, sf: ts.SourceFile): Bank | null {
  const props = propMap(obj);
  const questions = props.get("questions");
  if (!questions || !ts.isArrayLiteralExpression(questions)) return null;

  const counts = new Map<number, number>();
  let size = 0;
  let options = 0;
  for (const el of questions.elements) {
    if (!ts.isObjectLiteralExpression(el)) continue;
    const q = propMap(el);
    const correct = numberOf(q.get("correctIndex"));
    if (correct === null) continue;
    size++;
    counts.set(correct, (counts.get(correct) ?? 0) + 1);
    const opts = q.get("options");
    if (opts && ts.isArrayLiteralExpression(opts)) options = Math.max(options, opts.elements.length);
  }
  if (size === 0) return null;

  let topIndex = -1;
  let topCount = 0;
  for (const [idx, n] of [...counts].sort((a, b) => a[0] - b[0])) {
    if (n > topCount) {
      topCount = n;
      topIndex = idx;
    }
  }
  const limit = options >= 2 ? Math.max(BASE_SHARE, 1 / options + OVER_UNIFORM) : BASE_SHARE;
  return {
    file,
    line: sf.getLineAndCharacterOfPosition(obj.getStart(sf)).line + 1,
    label: labelFor(obj),
    size,
    counts,
    topIndex,
    topCount,
    share: topCount / size,
    options,
    shuffles: props.get("shuffleOptions")?.kind === ts.SyntaxKind.TrueKeyword,
    perAttempt: numberOf(props.get("questionsPerAttempt")),
    limit,
  };
}

function banksIn(file: string): Bank[] {
  const text = readFileSync(file, "utf-8");
  const sf = ts.createSourceFile(
    file,
    text,
    ts.ScriptTarget.Latest,
    true,
    file.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
  );
  const found: Bank[] = [];
  const visit = (node: ts.Node) => {
    if (ts.isObjectLiteralExpression(node)) {
      const bank = bankFrom(node, file, sf);
      if (bank) found.push(bank);
    }
    ts.forEachChild(node, visit);
  };
  ts.forEachChild(sf, visit);
  return found;
}

/** An oversized `questionsPerAttempt` is a separate authoring slip: it promises a rotating pool
 *  the bank cannot supply. Reported alongside, since it is the sibling of the same fix. */
function overSized(b: Bank): boolean {
  return b.perAttempt !== null && b.perAttempt > b.size;
}

function spread(b: Bank): string {
  const width = Math.max(b.options, (Math.max(...b.counts.keys()) || 0) + 1);
  const parts: string[] = [];
  for (let i = 0; i < width; i++) parts.push(`${i}:${b.counts.get(i) ?? 0}`);
  return parts.join("  ");
}

const listAll = process.argv.includes("--list");
const showAll = process.argv.includes("--all");
const files = trackedFiles();
const banks = files.flatMap(banksIn);
const checked = banks.filter((b) => b.size >= MIN_BANK);
const skewed = checked.filter((b) => b.share > b.limit);
const violations = checked.filter((b) => (b.share > b.limit && !b.shuffles) || overSized(b));

if (listAll) {
  for (const b of [...checked].sort((a, b) => b.share - a.share)) {
    const flag = violations.includes(b) ? "FAIL" : b.shuffles ? "shuf" : " ok ";
    console.log(
      `  ${flag}  ${String(Math.round(b.share * 100)).padStart(3)}% @${b.topIndex}  ` +
        `${String(b.size).padStart(3)}q  ${relative(process.cwd(), b.file)}:${b.line}  ${b.label}`,
    );
  }
  console.log("");
}

console.log(
  `Scanned ${files.length} files: ${banks.length} quiz banks, ${checked.length} of ${MIN_BANK}+ questions ` +
    `(${checked.filter((b) => b.shuffles).length} shuffle, ${skewed.length} skewed), ` +
    `${violations.length} violation${violations.length === 1 ? "" : "s"}.`,
);

if (violations.length > 0) {
  console.error(
    `\nQuiz banks a learner can pass without reading (over ${Math.round(BASE_SHARE * 100)}% of answers at one index, no shuffle).` +
      `\nFix by adding \`shuffleOptions: true\` to the quiz. Do not reorder options or edit prompts.\n`,
  );
  const byFile = new Map<string, Bank[]>();
  for (const v of violations) byFile.set(v.file, [...(byFile.get(v.file) ?? []), v]);
  const shown = [...byFile].slice(0, showAll ? byFile.size : 40);
  for (const [file, list] of shown) {
    console.error(`  ${relative(process.cwd(), file)}`);
    for (const b of list) {
      const why = overSized(b)
        ? `questionsPerAttempt ${b.perAttempt} exceeds the ${b.size}-question bank`
        : `${b.topCount}/${b.size} (${Math.round(b.share * 100)}%) at index ${b.topIndex}, limit ${Math.round(b.limit * 100)}%`;
      console.error(`    :${b.line}  ${b.label}\n        ${why}\n        spread  ${spread(b)}`);
    }
  }
  if (!showAll && byFile.size > shown.length) {
    console.error(`  ...and ${byFile.size - shown.length} more files.`);
  }
  process.exit(1);
}
