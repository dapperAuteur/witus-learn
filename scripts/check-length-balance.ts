import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { join, relative } from "node:path";
import ts from "typescript";

/**
 * Guard: FULL length balance. The longest- and shortest-option guards catch the two extremes; this one
 * catches every position. If the correct answer is usually the second-shortest, or never at either
 * extreme, a learner still beats chance by length alone without reading. BAM chose full balance on
 * 2026-10-14 after the shortest-tell sweep showed correct answers sitting in the shorter half of their
 * options 85 to 100% of the time in most grandfathered banks (plans/bugs/2026-10-07-shortest-option-tell.md).
 *
 * For each bank it scores four strategies: always pick the shortest, the second-shortest, the
 * second-longest, or the longest option. Options within a visible margin of the target length read as the
 * same size (the same 8 characters or 10% the other two guards use), so a strategy that lands on a k-way
 * tie scores 1/k. The bank's score is its BEST strategy, and it fails when that beats chance by more than
 * OVER_CHANCE (40% on a four-option bank, where guessing scores 25%). Equal-length options score exactly
 * chance on every strategy, which is the ideal.
 *
 * A RATCHET like the other two: files measured when it was added sit in GRANDFATHERED and may not get
 * worse. Fix by editing option TEXT in place (never reorder options, move correctIndex, or edit a prompt),
 * so that across a bank the correct answer is as often long as short. Then delete the file's line.
 *
 *   pnpm exec tsx scripts/check-length-balance.ts                 # exit 1 on any file over its limit
 *   pnpm exec tsx scripts/check-length-balance.ts --list          # every bank, worst first
 *   pnpm exec tsx scripts/check-length-balance.ts --detail <file> # per question: where the correct option sits
 */

const ROOTS = ["scripts", "src"];
const EXCLUDE_DIRS = [join("src", "db", "migrations"), join("node_modules"), join(".next")];
const EXTS = [".ts", ".tsx"];

/** Banks smaller than this are not checked (too small to tell a giveaway from chance). */
const MIN_BANK = 8;
/** The floor of the limit: no strategy may score more than this on any bank of 4+ options. */
const BASE_SHARE = 0.4;
/** Headroom over chance (1 / options), so a true/false bank is judged against 65%, not 40%. */
const OVER_CHANCE = 0.15;
/** Slack over a grandfathered file's recorded score, for ordinary authoring drift. */
const DRIFT = 0.03;
/** Length difference a learner cannot see: options within this of the shortest read as the same size. */
const MIN_VISIBLE_GAP = 8;
/** ...or within this fraction of the shortest, so the gap scales with how long the options are. */
const VISIBLE_FRACTION = 0.1;

type Strategy = "shortest" | "2nd shortest" | "2nd longest" | "longest";
const STRATEGIES: Strategy[] = ["shortest", "2nd shortest", "2nd longest", "longest"];

/** What "always pick the option at this length position" scores on one question: 1 if the correct option
 *  is alone at that position, 1/k if it is one of k options a learner cannot tell apart by size, else 0. */
function strategyValue(lens: number[], correct: number, strategy: Strategy): number {
  if (lens.length < 2) return 0;
  const asc = [...lens].sort((a, b) => a - b);
  const pos = { shortest: 0, "2nd shortest": 1, "2nd longest": lens.length - 2, longest: lens.length - 1 }[strategy];
  if (pos < 0 || pos >= lens.length) return 0;
  const target = asc[pos];
  const margin = Math.max(MIN_VISIBLE_GAP, target * VISIBLE_FRACTION);
  const candidates = lens.filter((l) => Math.abs(l - target) <= margin).length;
  return Math.abs(lens[correct] - target) <= margin ? 1 / candidates : 0;
}

/** Where the correct option sits, for --detail: 0 = shortest ... n-1 = longest. */
function rankOf(lens: number[], correct: number): number {
  return lens.filter((l, i) => i !== correct && l < lens[correct]).length;
}

/**
 * Files authored before this guard existed, with the score measured when it was added. They do not
 * fail, but they may not get worse. DELETE an entry once its file is fixed; the list shrinking is
 * the progress bar. Do not add to this list to make new content pass.
 */
const GRANDFATHERED: Record<string, number> = {
  "scripts/data/acting-course.ts": 1.00,
  "scripts/data/ai-entrepreneurs-course.ts": 0.53,
  "scripts/data/ai-l1-advanced-prompting-course.ts": 1.00,
  "scripts/data/ai-l2-detecting-ai-course.ts": 1.00,
  "scripts/data/ai-l3-ethics-course.ts": 0.52,
  "scripts/data/ai-l4-privacy-security-course.ts": 0.50,
  "scripts/data/ai-literacy-course.ts": 0.45,
  "scripts/data/ai-y3-creative-ai-course.ts": 0.55,
  "scripts/data/ai-young-makers-course.ts": 0.48,
  "scripts/data/banking-and-the-unbanked-course.ts": 1.00,
  "scripts/data/blind-and-low-vision-america-course.ts": 1.00,
  "scripts/data/broadcasting-course.ts": 0.51,
  "scripts/data/bvc-sommelier-coffee-course.ts": 0.48,
  "scripts/data/bvc-sommelier-wine-course.ts": 0.60,
  "scripts/data/cash-flow-timing-course.ts": 1.00,
  "scripts/data/construction-math-course.ts": 1.00,
  "scripts/data/construction-safety-course.ts": 0.97,
  "scripts/data/credit-decisions-course.ts": 1.00,
  "scripts/data/crochet-course.ts": 0.53,
  "scripts/data/cyber-security-course.ts": 1.00,
  "scripts/data/dance-credit-course.ts": 0.97,
  "scripts/data/deaf-america-course.ts": 0.86,
  "scripts/data/deep-time-and-the-dinosaur-renaissance-course.ts": 0.52,
  "scripts/data/digital-social-storytelling-course.ts": 0.49,
  "scripts/data/drew-blood-bank-course.ts": 1.00,
  "scripts/data/editor-of-the-crisis-course.ts": 1.00,
  "scripts/data/education-leader-course.ts": 1.00,
  "scripts/data/esther-lederberg-course.ts": 1.00,
  "scripts/data/faa-part-107-quizzes.ts": 0.57,
  "scripts/data/fort-harrison-course.ts": 0.87,
  "scripts/data/golf-course.ts": 0.57,
  "scripts/data/great-migration-course.ts": 1.00,
  "scripts/data/history-of-unions-course.ts": 0.46,
  "scripts/data/housing-decisions-course.ts": 1.00,
  "scripts/data/how-a-bill-becomes-law-course.ts": 0.47,
  "scripts/data/how-a-house-stands-up-course.ts": 1.00,
  "scripts/data/how-the-tools-travelled-course.ts": 0.47,
  "scripts/data/how-the-trades-work-course.ts": 1.00,
  "scripts/data/how-to-research-course.ts": 0.53,
  "scripts/data/how-we-know-whats-out-there-course.ts": 1.00,
  "scripts/data/indiana-avenue-course.ts": 0.50,
  "scripts/data/jim-crow-export-course.ts": 0.49,
  "scripts/data/keeping-a-house-course.ts": 1.00,
  "scripts/data/knots-course.ts": 1.00,
  "scripts/data/making-string-course.ts": 0.40,
  "scripts/data/manure-and-compost-course.ts": 0.84,
  "scripts/data/monodrama-performing-course.ts": 0.48,
  "scripts/data/monodrama-writing-course.ts": 0.50,
  "scripts/data/monsters-at-the-edge-of-the-map-course.ts": 0.51,
  "scripts/data/naacp-learned-to-win-course.ts": 0.90,
  "scripts/data/negro-leagues-course.ts": 0.98,
  "scripts/data/neuromatch-climate-tools-course.ts": 1.00,
  "scripts/data/neuromatch-comp-behaviour-course.ts": 0.56,
  "scripts/data/neuromatch-compneuro-course.ts": 1.00,
  "scripts/data/neuromatch-deep-learning-course.ts": 0.49,
  "scripts/data/notes-made-by-mr-george-hunt-course.ts": 1.00,
  "scripts/data/painted-in-court-course.ts": 0.97,
  "scripts/data/photography-credit-course.ts": 1.00,
  "scripts/data/predatory-products-course.ts": 1.00,
  "scripts/data/read-the-plan-and-the-code-course.ts": 1.00,
  "scripts/data/read-your-body-course.ts": 0.51,
  "scripts/data/reporter-capstone-course.ts": 0.47,
  "scripts/data/reporter-interviewing-course.ts": 0.58,
  "scripts/data/reporter-media-law-course.ts": 0.57,
  "scripts/data/reporter-pitch-and-shapes-course.ts": 0.56,
  "scripts/data/reporter-public-records-course.ts": 0.96,
  "scripts/data/reporter-reading-a-report-course.ts": 0.78,
  "scripts/data/reporter-solutions-journalism-course.ts": 0.52,
  "scripts/data/reporter-verification-on-deadline-course.ts": 0.60,
  "scripts/data/reporter-what-a-beat-is-course.ts": 1.00,
  "scripts/data/retirement-accounts-course.ts": 1.00,
  "scripts/data/schoolhouse-network-course.ts": 0.50,
  "scripts/data/she-took-the-seat-course.ts": 1.00,
  "scripts/data/shirley-graham-course.ts": 0.95,
  "scripts/data/soul-train-the-business-course.ts": 1.00,
  "scripts/data/state-civics-id-course.ts": 0.58,
  "scripts/data/state-civics-oh-course.ts": 0.59,
  "scripts/data/surplus-funds-basics-course.ts": 0.49,
  "scripts/data/survival-course.ts": 1.00,
  "scripts/data/taxes-and-filing-course.ts": 1.00,
  "scripts/data/territories-course.ts": 0.97,
  "scripts/data/the-author-line-and-the-finding-course.ts": 1.00,
  "scripts/data/the-county-committee-course.ts": 1.00,
  "scripts/data/the-mark-and-the-star-course.ts": 0.90,
  "scripts/data/the-match-course.ts": 0.97,
  "scripts/data/the-moors-course.ts": 1.00,
  "scripts/data/the-name-on-the-door-course.ts": 1.00,
  "scripts/data/the-partner-and-the-prize-course.ts": 1.00,
  "scripts/data/the-river-and-the-watershed-course.ts": 0.85,
  "scripts/data/well-centenarian-capstone-course.ts": 0.58,
  "scripts/data/well-coaching-movement-course.ts": 0.59,
  "scripts/data/well-coaching-nutrition-course.ts": 0.59,
  "scripts/data/well-coaching-psychology-course.ts": 0.58,
  "scripts/data/well-context-equity-course.ts": 1.00,
  "scripts/data/well-mental-wellbeing-course.ts": 0.59,
  "scripts/data/well-movement-longevity-course.ts": 0.57,
  "scripts/data/well-orientation-scope-course.ts": 0.55,
  "scripts/data/well-recovery-stress-course.ts": 0.56,
  "scripts/data/well-sleep-course.ts": 0.57,
  "scripts/data/what-the-citation-records-course.ts": 1.00,
  "scripts/data/what-they-built-course.ts": 0.80,
  "scripts/data/where-we-rested-course.ts": 0.60,
  "scripts/data/who-gets-named-course.ts": 1.00,
  "scripts/data/who-gets-nominated-course.ts": 0.81,
  "scripts/data/who-gets-the-credit-course.ts": 0.55,
  "scripts/data/who-may-teach-course.ts": 1.00,
  "scripts/data/who-signs-the-print-course.ts": 1.00,
  "scripts/data/who-the-rule-leaves-out-course.ts": 1.00,
  "scripts/data/who-were-the-computers-course.ts": 1.00,
  "scripts/data/whose-name-is-on-the-score-course.ts": 1.00,
  "scripts/data/whose-names-the-payroll-kept-course.ts": 1.00,
  "scripts/data/writing-poems-and-songs-course.ts": 1.00,
  "scripts/data/written-by-himself-course.ts": 1.00,
};

function trackedFiles(): string[] {
  const out = execFileSync("git", ["ls-files", "-z", ...ROOTS], { encoding: "utf-8" });
  return out
    .split("\0")
    .filter((f) => f && EXTS.some((e) => f.endsWith(e)))
    .filter((f) => !EXCLUDE_DIRS.some((ex) => f === ex || f.startsWith(`${ex}/`)));
}

interface Q {
  prompt: string;
  line: number;
  /** Expected score of each length strategy on this question: 1, 1/k for a k-way tie, or 0. */
  values: Record<Strategy, number>;
  /** 0 = the correct option is the shortest ... options-1 = the longest. */
  rank: number;
  options: number;
}

interface Bank {
  file: string;
  line: number;
  label: string;
  size: number;
  options: number;
  /** The best length strategy's score on this bank (mean of its per-question values). */
  score: number;
  /** Which strategy that is. */
  strategy: Strategy;
  /** Every strategy's score, for --detail. */
  byStrategy: Record<Strategy, number>;
  limit: number;
  questions: Q[];
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

/** Option text, for the literal forms authored courses actually use. Returns null for anything
 *  computed, so a bank built at runtime is skipped rather than mis-measured. */
function stringOf(expr: ts.Expression): string | null {
  if (ts.isStringLiteral(expr) || ts.isNoSubstitutionTemplateLiteral(expr)) return expr.text;
  return null;
}

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

function bankFrom(obj: ts.ObjectLiteralExpression, file: string, sf: ts.SourceFile): Bank | null {
  const props = propMap(obj);
  const questions = props.get("questions");
  if (!questions || !ts.isArrayLiteralExpression(questions)) return null;

  const qs: Q[] = [];
  let options = 0;
  for (const el of questions.elements) {
    if (!ts.isObjectLiteralExpression(el)) continue;
    const q = propMap(el);
    const correct = numberOf(q.get("correctIndex"));
    const opts = q.get("options");
    if (correct === null || !opts || !ts.isArrayLiteralExpression(opts)) continue;

    const texts = opts.elements.map((e) => (ts.isExpression(e) ? stringOf(e) : null));
    // A bank with any computed option cannot be measured honestly; skip the whole question.
    if (texts.some((t) => t === null) || correct >= texts.length) continue;
    const lens = (texts as string[]).map((t) => t.trim().length);
    options = Math.max(options, lens.length);

    const values = Object.fromEntries(STRATEGIES.map((st) => [st, strategyValue(lens, correct, st)])) as Record<Strategy, number>;
    const promptExpr = q.get("prompt");
    qs.push({
      prompt: (promptExpr && stringOf(promptExpr)) ?? "(computed prompt)",
      line: sf.getLineAndCharacterOfPosition(el.getStart(sf)).line + 1,
      values,
      rank: rankOf(lens, correct),
      options: lens.length,
    });
  }
  if (qs.length === 0) return null;

  const byStrategy = Object.fromEntries(
    STRATEGIES.map((st) => [st, qs.reduce((a, q) => a + q.values[st], 0) / qs.length]),
  ) as Record<Strategy, number>;
  const strategy = STRATEGIES.reduce((best, st) => (byStrategy[st] > byStrategy[best] ? st : best), STRATEGIES[0]);
  return {
    file,
    line: sf.getLineAndCharacterOfPosition(obj.getStart(sf)).line + 1,
    label: labelFor(obj),
    size: qs.length,
    options,
    score: byStrategy[strategy],
    strategy,
    byStrategy,
    limit: options >= 2 ? Math.max(BASE_SHARE, 1 / options + OVER_CHANCE) : BASE_SHARE,
    questions: qs,
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

const pct = (n: number) => `${Math.round(n * 100)}%`;

const listAll = process.argv.includes("--list");
const detailIdx = process.argv.indexOf("--detail");
const files = trackedFiles();
const banks = files.flatMap(banksIn);
const checked = banks.filter((b) => b.size >= MIN_BANK);

// --detail: per-question dump for one file, so an author can see which questions to rewrite.
if (detailIdx !== -1) {
  const want = process.argv[detailIdx + 1];
  const mine = checked.filter((b) => b.file.includes(want));
  if (mine.length === 0) {
    console.error(`No checked banks matched ${want}`);
    process.exit(1);
  }
  const NAMES = ["shortest", "2nd shortest", "2nd longest", "longest"];
  for (const b of mine) {
    console.log(`\n  ${relative(process.cwd(), b.file)}:${b.line}  ${b.label}  (${b.size} questions, limit ${pct(b.limit)})`);
    console.log(
      `  strategies: ${STRATEGIES.map((st) => `${st} ${pct(b.byStrategy[st])}`).join(" · ")}` +
        `  -> worst: always-pick-${b.strategy} ${pct(b.score)}${b.score > b.limit ? "  TELL" : ""}`,
    );
    const counts = [0, 0, 0, 0];
    for (const q of b.questions) counts[Math.min(3, q.rank === q.options - 1 ? 3 : q.rank)] += 1;
    console.log(`  correct option is: shortest ${counts[0]} · 2nd shortest ${counts[1]} · 3rd ${counts[2]} · longest ${counts[3]}\n`);
    for (const q of b.questions) {
      const where = q.rank === q.options - 1 ? "longest" : NAMES[Math.min(q.rank, 2)];
      console.log(`    :${String(q.line).padStart(5)}  ${where.padEnd(12)}  ${q.prompt.slice(0, 80)}`);
    }
  }
  process.exit(0);
}

/**
 * `--emit-grandfather` prints the GRANDFATHERED literal for the CURRENT state of the tree.
 *
 * This exists for the one-time baseline and for re-baselining DOWNWARD after a sweep. Do not run it
 * to silence a failure: it would record the regression as the new normal, which is the opposite of
 * what the ratchet is for. To let one file through deliberately, add that single line by hand.
 */
if (process.argv.includes("--emit-grandfather")) {
  const rows: [string, number][] = [];
  for (const [file, list] of new Map(
    [...checked].reduce((m, b) => m.set(b.file, [...(m.get(b.file) ?? []), b]), new Map<string, Bank[]>()),
  )) {
    const worst = list.reduce((a, b) => (b.score > a.score ? b : a));
    if (worst.score > worst.limit) rows.push([relative(process.cwd(), file), worst.score]);
  }
  rows.sort((a, b) => a[0].localeCompare(b[0]));
  for (const [f, s] of rows) console.log(`  ${JSON.stringify(f)}: ${s.toFixed(2)},`);
  console.error(`\n${rows.length} files.`);
  process.exit(0);
}

if (process.argv.includes("--seed")) {
  const seedMap = new Map<string, number>();
  for (const b of checked) {
    if (b.score <= b.limit) continue;
    const rel = relative(process.cwd(), b.file);
    seedMap.set(rel, Math.max(seedMap.get(rel) ?? 0, b.score));
  }
  for (const [f, sc] of [...seedMap].sort()) console.log(`  ${JSON.stringify(f)}: ${sc.toFixed(2)},`);
  console.error(`${seedMap.size} files.`);
  process.exit(0);
}

/** Worst bank score per file: a file is only as clean as its most gameable bank. */
const byFile = new Map<string, Bank[]>();
for (const b of checked) byFile.set(b.file, [...(byFile.get(b.file) ?? []), b]);

const violations: { file: string; worst: Bank; allowed: number; grandfathered: boolean }[] = [];
for (const [file, list] of byFile) {
  const worst = list.reduce((a, b) => (b.score > a.score ? b : a));
  const rel = relative(process.cwd(), file);
  const recorded = GRANDFATHERED[rel];
  // A grandfathered file is judged against its own recorded score plus drift, so it can never get
  // worse; a file with no entry is judged against the normal limit.
  const allowed = recorded === undefined ? worst.limit : Math.max(worst.limit, recorded + DRIFT);
  if (worst.score > allowed) {
    violations.push({ file: rel, worst, allowed, grandfathered: recorded !== undefined });
  }
}

const overLimit = checked.filter((b) => b.score > b.limit);
const stale = Object.keys(GRANDFATHERED).filter((f) => {
  const list = byFile.get(join(process.cwd(), f)) ?? byFile.get(f);
  if (!list) return false;
  return list.every((b) => b.score <= b.limit);
});

if (listAll) {
  for (const b of [...checked].sort((a, b) => b.score - a.score)) {
    const flag = b.score > b.limit ? "TELL" : " ok ";
    console.log(
      `  ${flag}  ${String(Math.round(b.score * 100)).padStart(3)}%  ` +
        `${b.strategy.padEnd(12)} ${String(b.size).padStart(3)} qs  ` +
        `${relative(process.cwd(), b.file)}:${b.line}  ${b.label}`,
    );
  }
  console.log("");
}

console.log(
  `Scanned ${files.length} files: ${checked.length} quiz banks of ${MIN_BANK}+ questions, ` +
    `${overLimit.length} where a length strategy beats chance by over ${pct(OVER_CHANCE)} ` +
    `(${Object.keys(GRANDFATHERED).length} file(s) grandfathered), ` +
    `${violations.length} violation${violations.length === 1 ? "" : "s"}.`,
);

if (stale.length > 0) {
  console.log(`\nGood news: ${stale.length} grandfathered file(s) are now clean. Delete them from GRANDFATHERED:`);
  for (const f of stale) console.log(`  ${f}`);
}

if (violations.length > 0) {
  console.error(
    "\nQuiz banks a learner can beat by picking an option by its LENGTH position, without reading the prompt.\n" +
      "`shuffleOptions` does not help here: length travels with the option text wherever it is shuffled.\n" +
      "Fix so the correct answer is as often long as short across the bank (give it an accurate, sourced\n" +
      "detail from its lesson, or tighten a distractor without making it true), editing option\n" +
      "text IN PLACE. Never reorder options and never edit the prompt (questionKey hashes the prompt, so\n" +
      "an edit resets every learner's history for that question). Run with --detail <file> for the list.\n",
  );
  for (const v of violations.sort((a, b) => b.worst.score - a.worst.score)) {
    const why = v.grandfathered
      ? `${pct(v.worst.score)} is WORSE than the recorded ${pct(v.allowed - DRIFT)}`
      : `always-pick-${v.worst.strategy} scores ${pct(v.worst.score)}, limit ${pct(v.allowed)}`;
    console.error(`  ${v.file}:${v.worst.line}  ${v.worst.label}\n      ${why}`);
  }
  process.exit(1);
}
