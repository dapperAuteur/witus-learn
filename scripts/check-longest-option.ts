import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { join, relative } from "node:path";
import ts from "typescript";

/**
 * Guard against the LENGTH TELL in authored quiz banks.
 *
 *   pnpm check:longest-option          # exit 1 on any bank over its limit
 *   pnpm check:longest-option --list   # print every bank, passing ones included
 *   pnpm check:longest-option --detail <file>   # per-question dump for one file, to author against
 *
 * THE TELL
 * --------
 * The correct answer is usually the one the author cared about, so it collects the qualifier, the
 * date and the "because" clause, while the three distractors stay short. The result is a bank a
 * learner can beat by always clicking the longest option WITHOUT READING THE PROMPT.
 *
 * This is the sibling of check-quiz-balance.ts and the SAME class of defect: a bank that measures
 * test-taking rather than learning. But it needs its own guard, because the quiz-balance fix does
 * not touch it. `shuffleOptions: true` defeats a position tell completely, since the stored index
 * never reaches the screen in a fixed slot. It does NOTHING here: length travels with the option
 * text wherever the shuffle moves it. Every affected bank in this repo already shuffles.
 *
 * WHAT IS MEASURED: the score of the strategy, not a count of questions
 * --------------------------------------------------------------------
 * The metric is the EXPECTED SCORE of "always pick the longest option", which is what a learner
 * actually gets. The subtlety that makes this honest is that a learner EYEBALLS length, so "one
 * character longer" is not a tell at all. Each question is scored against the VISIBLY longest set:
 *
 *   margin  = max(8 chars, 10% of the longest option)
 *   visible = every option within `margin` of the longest
 *   value   = 1 / visible.length  if the correct option is in that set, else 0
 *
 * So a bank whose options are all about the same length scores ~1/options, exactly what guessing
 * scores, and a bank whose right answer is visibly the fattest one scores 1.0. Counting "questions
 * where the correct answer is strictly longest" instead would score a 1-character edge and a
 * 77-character edge identically, which badly overstates the problem and would get the guard
 * dismissed as noise. `--list` still reports the strict count alongside, for reference.
 *
 * THE LIMIT, and why it matches the quiz-balance one
 * --------------------------------------------------
 * `max(0.60, 1/options + 0.25)`, using the widest question in the bank, deliberately identical to
 * check-quiz-balance.ts so the two guards are one idea with two symptoms: with 4 options, guessing
 * scores 25%, so 60% is far outside authoring noise; a true/false bank is judged against 75%
 * instead of failing for being true/false. Banks under 8 questions are not checked, because the
 * sample is too small to separate a tell from chance.
 *
 * THE FIX, when this fires, and why it is SAFE
 * --------------------------------------------
 * Unlike the position tell there is no one-line fix: the distractors have to earn their length.
 * Give them the same specificity the right answer has, a real date, a real mechanism, a real
 * qualifier. A plausible wrong answer is better pedagogy anyway, because it makes the question
 * discriminate. The reliable technique is to write each distractor as something a learner who half
 * -read the lesson would actually believe.
 *
 * Two rules while doing it:
 *
 *   1. EDIT OPTION TEXT IN PLACE. Never reorder options and never touch `correctIndex`. Stored
 *      attempts keep the chosen index, so a reorder silently rewrites what past learners "answered"
 *      on the results replay.
 *   2. NEVER EDIT THE PROMPT to fix this. `questionKey` (src/lib/quiz.ts) hashes the prompt ALONE,
 *      so a reworded prompt starts fresh per-question history for every learner who already
 *      answered it. Option text is not hashed, which is exactly why this fix is safe to make.
 *
 * Do NOT "fix" a bank by padding the distractors with filler. That trades a length tell for a
 * nonsense tell and is worse, because the padding reads as wrong on sight.
 *
 * A RATCHET, like check-standards-coverage.ts
 * -------------------------------------------
 * Courses authored before this guard are listed in GRANDFATHERED with their measured score, and do
 * not fail the build; failing them all at once would just get the check disabled. What fails is a
 * bank in a file that is NOT on that list. New content ships clean, and each entry deleted from the
 * list is real progress. The recorded number is also a ceiling: if a grandfathered file gets WORSE,
 * it fails, so the debt can only shrink.
 */

const ROOTS = ["scripts", "src"];
const EXCLUDE_DIRS = [join("src", "db", "migrations"), join("node_modules"), join(".next")];
const EXTS = [".ts", ".tsx"];

/** Banks smaller than this are not checked (too small to tell a giveaway from chance). */
const MIN_BANK = 8;
/** Base expected score of always-pick-longest that counts as a tell. */
const BASE_SHARE = 0.6;
/** Extra headroom over uniform, so a true/false bank is judged against 50%, not 25%. */
const OVER_UNIFORM = 0.25;
/** Slack over a grandfathered file's recorded score, for ordinary authoring drift. */
const DRIFT = 0.03;
/** Length difference a learner cannot see: options within this of the longest read as the same size. */
const MIN_VISIBLE_GAP = 8;
/** ...or within this fraction of the longest, so the gap scales with how long the options are. */
const VISIBLE_FRACTION = 0.1;

/** How many options a learner scanning for "the longest" would actually be choosing between, and
 *  therefore what always-pick-longest scores on this question. */
function longestStrategyValue(lens: number[], correct: number): { value: number; visible: number } {
  const max = Math.max(...lens);
  const margin = Math.max(MIN_VISIBLE_GAP, max * VISIBLE_FRACTION);
  const visible = lens.filter((l) => l >= max - margin).length;
  return { value: lens[correct] >= max - margin ? 1 / visible : 0, visible };
}

/**
 * Files authored before this guard existed, with the score measured when it was added. They do not
 * fail, but they may not get worse. DELETE an entry once its file is fixed; the list shrinking is
 * the progress bar. Do not add to this list to make new content pass.
 */
const GRANDFATHERED: Record<string, number> = {
  "scripts/data/africa-before-colonization-course.ts": 1.00,
  "scripts/data/afrocentricity-course.ts": 1.00,
  "scripts/data/ai-b2-agents-automations-course.ts": 0.88,
  "scripts/data/ai-building-course.ts": 0.85,
  "scripts/data/ai-e5-finance-analytics-capstone-course.ts": 0.90,
  "scripts/data/ai-l2-detecting-ai-course.ts": 0.88,
  "scripts/data/ai-l3-ethics-course.ts": 0.86,
  "scripts/data/ai-l4-privacy-security-course.ts": 0.80,
  "scripts/data/ai-l5-researching-course.ts": 0.85,
  "scripts/data/ai-y1-train-your-model-course.ts": 0.78,
  "scripts/data/ai-y4-science-fair-capstone-course.ts": 0.95,
  "scripts/data/ai-young-makers-course.ts": 0.86,
  "scripts/data/asia-before-european-colonization-course.ts": 1.00,
  "scripts/data/baltimore-chain-course.ts": 0.97,
  "scripts/data/banking-abroad-course.ts": 1.00,
  "scripts/data/broadcasting-course.ts": 0.69,
  "scripts/data/chess-course.ts": 1.00,
  "scripts/data/citizenship-naturalization-course.ts": 0.86,
  "scripts/data/croquet-course.ts": 0.96,
  "scripts/data/dc-berman-course.ts": 0.97,
  "scripts/data/dental-health-course.ts": 0.77,
  "scripts/data/dual-citizenship-course.ts": 1.00,
  "scripts/data/football-course.ts": 1.00,
  "scripts/data/golf-course.ts": 0.88,
  "scripts/data/great-migration-and-the-world-course.ts": 0.96,
  "scripts/data/green-book-read-a-route-course.ts": 0.83,
  "scripts/data/gym-color-line-course.ts": 1.00,
  "scripts/data/healthcare-abroad-course.ts": 0.78,
  "scripts/data/help-a-campaign-course.ts": 1.00,
  "scripts/data/history-of-bathing-course.ts": 1.00,
  "scripts/data/history-of-unions-course.ts": 0.92,
  "scripts/data/hoodoo-complete-course.ts": 1.00,
  "scripts/data/hoodoo-course.ts": 0.84,
  "scripts/data/how-to-run-course.ts": 0.72,
  "scripts/data/indiana-avenue-course.ts": 0.97,
  "scripts/data/jury-duty-courts-course.ts": 0.78,
  "scripts/data/knots-course.ts": 0.85,
  "scripts/data/know-your-rights-at-work-course.ts": 0.96,
  "scripts/data/labor-brazil-course.ts": 1.00,
  "scripts/data/labor-chile-course.ts": 1.00,
  "scripts/data/labor-germany-course.ts": 0.93,
  "scripts/data/labor-india-course.ts": 1.00,
  "scripts/data/labor-mexico-course.ts": 0.95,
  "scripts/data/labor-nordics-course.ts": 1.00,
  "scripts/data/labor-poland-course.ts": 0.96,
  "scripts/data/labor-south-africa-course.ts": 1.00,
  "scripts/data/labor-south-korea-course.ts": 1.00,
  "scripts/data/lacrosse-course.ts": 0.95,
  "scripts/data/learning-how-to-learn-course.ts": 0.95,
  "scripts/data/moving-abroad-101-course.ts": 0.81,
  "scripts/data/mudsock-boundary-course.ts": 1.00,
  "scripts/data/pan-africanism-course.ts": 1.00,
  "scripts/data/philadelphia-university-course.ts": 1.00,
  "scripts/data/pickleball-course.ts": 0.87,
  "scripts/data/pittsburgh-playbook-course.ts": 0.71,
  "scripts/data/precolumbian-mesoamerica-course.ts": 1.00,
  "scripts/data/presidents-house-course.ts": 0.92,
  "scripts/data/read-your-body-course.ts": 0.80,
  "scripts/data/retiring-abroad-course.ts": 0.81,
  "scripts/data/robotics-steam-course.ts": 0.63,
  "scripts/data/seattle-bookend-course.ts": 1.00,
  "scripts/data/shipping-logistics-course.ts": 0.94,
  "scripts/data/spotting-misleading-marketing-course.ts": 0.85,
  "scripts/data/state-civics-ak-course.ts": 0.93,
  "scripts/data/state-civics-al-course.ts": 0.85,
  "scripts/data/state-civics-ar-course.ts": 0.70,
  "scripts/data/state-civics-az-course.ts": 0.71,
  "scripts/data/state-civics-ca-course.ts": 0.78,
  "scripts/data/state-civics-co-course.ts": 0.95,
  "scripts/data/state-civics-ct-course.ts": 0.88,
  "scripts/data/state-civics-dc-course.ts": 0.93,
  "scripts/data/state-civics-de-course.ts": 0.85,
  "scripts/data/state-civics-fl-course.ts": 0.78,
  "scripts/data/state-civics-ga-course.ts": 0.93,
  "scripts/data/state-civics-hi-course.ts": 1.00,
  "scripts/data/state-civics-ia-course.ts": 0.78,
  "scripts/data/state-civics-il-course.ts": 0.80,
  "scripts/data/state-civics-in-course.ts": 0.72,
  "scripts/data/state-civics-ks-course.ts": 0.80,
  "scripts/data/state-civics-ky-course.ts": 0.80,
  "scripts/data/state-civics-la-course.ts": 0.82,
  "scripts/data/state-civics-ma-course.ts": 0.90,
  "scripts/data/state-civics-md-course.ts": 0.75,
  "scripts/data/state-civics-me-course.ts": 0.83,
  "scripts/data/state-civics-mi-course.ts": 0.78,
  "scripts/data/state-civics-mn-course.ts": 0.86,
  "scripts/data/state-civics-mo-course.ts": 0.63,
  "scripts/data/state-civics-ms-course.ts": 0.80,
  "scripts/data/state-civics-mt-course.ts": 0.73,
  "scripts/data/state-civics-nc-course.ts": 0.90,
  "scripts/data/state-civics-nd-course.ts": 0.93,
  "scripts/data/state-civics-ne-course.ts": 0.85,
  "scripts/data/state-civics-nh-course.ts": 0.82,
  "scripts/data/state-civics-nj-course.ts": 0.77,
  "scripts/data/state-civics-nm-course.ts": 0.88,
  "scripts/data/state-civics-nv-course.ts": 1.00,
  "scripts/data/state-civics-ny-course.ts": 0.81,
  "scripts/data/state-civics-ok-course.ts": 0.71,
  "scripts/data/state-civics-or-course.ts": 0.86,
  "scripts/data/state-civics-pa-course.ts": 0.88,
  "scripts/data/state-civics-ri-course.ts": 0.93,
  "scripts/data/state-civics-sc-course.ts": 0.82,
  "scripts/data/state-civics-sd-course.ts": 0.85,
  "scripts/data/state-civics-tn-course.ts": 0.88,
  "scripts/data/state-civics-tx-course.ts": 0.95,
  "scripts/data/state-civics-ut-course.ts": 0.85,
  "scripts/data/state-civics-va-course.ts": 0.78,
  "scripts/data/state-civics-vt-course.ts": 0.85,
  "scripts/data/state-civics-wa-course.ts": 0.83,
  "scripts/data/state-civics-wi-course.ts": 0.88,
  "scripts/data/state-civics-wv-course.ts": 0.93,
  "scripts/data/state-civics-wy-course.ts": 0.70,
  "scripts/data/state-vs-federal-course.ts": 0.63,
  "scripts/data/studying-abroad-course.ts": 1.00,
  "scripts/data/survival-course.ts": 0.93,
  "scripts/data/taxes-americans-abroad-course.ts": 0.94,
  "scripts/data/tennis-course.ts": 0.88,
  "scripts/data/training-the-colonizer-course.ts": 1.00,
  "scripts/data/travel-basics-course.ts": 0.80,
  "scripts/data/travel-flying-home-course.ts": 0.78,
  "scripts/data/travel-passport-course.ts": 0.84,
  "scripts/data/two-racetracks-course.ts": 0.97,
  "scripts/data/us-state-local-gov-course.ts": 0.61,
  "scripts/data/voting-elections-101-course.ts": 0.85,
  "scripts/data/woop-course.ts": 1.00,
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
  /** Expected score of always-pick-longest on this question: 1, 1/k for a k-way tie, or 0. */
  value: number;
  correctLen: number;
  maxOtherLen: number;
}

interface Bank {
  file: string;
  line: number;
  label: string;
  size: number;
  options: number;
  /** Mean of the per-question expected scores: what always-pick-longest scores on this bank. */
  score: number;
  /** Questions where the correct option is strictly longest. */
  strict: number;
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

    const { value } = longestStrategyValue(lens, correct);
    const promptExpr = q.get("prompt");
    qs.push({
      prompt: (promptExpr && stringOf(promptExpr)) ?? "(computed prompt)",
      line: sf.getLineAndCharacterOfPosition(el.getStart(sf)).line + 1,
      value,
      correctLen: lens[correct],
      maxOtherLen: Math.max(...lens.filter((_, i) => i !== correct), 0),
    });
  }
  if (qs.length === 0) return null;

  const score = qs.reduce((a, q) => a + q.value, 0) / qs.length;
  return {
    file,
    line: sf.getLineAndCharacterOfPosition(obj.getStart(sf)).line + 1,
    label: labelFor(obj),
    size: qs.length,
    options,
    score,
    strict: qs.filter((q) => q.value === 1).length,
    limit: options >= 2 ? Math.max(BASE_SHARE, 1 / options + OVER_UNIFORM) : BASE_SHARE,
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
  for (const b of mine) {
    console.log(`\n  ${relative(process.cwd(), b.file)}:${b.line}  ${b.label}`);
    console.log(`  always-pick-longest scores ${pct(b.score)} (${b.strict}/${b.size} strictly longest)\n`);
    for (const q of b.questions) {
      if (q.value === 0) continue;
      const gap = q.correctLen - q.maxOtherLen;
      console.log(
        `    :${String(q.line).padStart(5)}  ${q.value === 1 ? "LONGEST" : `tie ${q.value.toFixed(2)}`}` +
          `  +${gap} chars  ${q.prompt.slice(0, 70)}`,
      );
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
        `${String(b.strict).padStart(3)}/${String(b.size).padEnd(3)} strict  ` +
        `${relative(process.cwd(), b.file)}:${b.line}  ${b.label}`,
    );
  }
  console.log("");
}

console.log(
  `Scanned ${files.length} files: ${checked.length} quiz banks of ${MIN_BANK}+ questions, ` +
    `${overLimit.length} over the ${pct(BASE_SHARE)} length-tell limit ` +
    `(${Object.keys(GRANDFATHERED).length} file(s) grandfathered), ` +
    `${violations.length} violation${violations.length === 1 ? "" : "s"}.`,
);

if (stale.length > 0) {
  console.log(`\nGood news: ${stale.length} grandfathered file(s) are now clean. Delete them from GRANDFATHERED:`);
  for (const f of stale) console.log(`  ${f}`);
}

if (violations.length > 0) {
  console.error(
    "\nQuiz banks a learner can beat by always clicking the LONGEST option, without reading the prompt.\n" +
      "`shuffleOptions` does not help here: length travels with the option text wherever it is shuffled.\n" +
      "Fix by giving the distractors real specificity (a date, a mechanism, a qualifier), editing option\n" +
      "text IN PLACE. Never reorder options and never edit the prompt (questionKey hashes the prompt, so\n" +
      "an edit resets every learner's history for that question). Run with --detail <file> for the list.\n",
  );
  for (const v of violations.sort((a, b) => b.worst.score - a.worst.score)) {
    const why = v.grandfathered
      ? `${pct(v.worst.score)} is WORSE than the recorded ${pct(v.allowed - DRIFT)}`
      : `${pct(v.worst.score)} of questions answerable by length, limit ${pct(v.allowed)}`;
    console.error(`  ${v.file}:${v.worst.line}  ${v.worst.label}\n      ${why}`);
  }
  process.exit(1);
}
