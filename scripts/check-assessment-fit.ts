import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { join, relative } from "node:path";
import ts from "typescript";
import {
  ASSESSMENT_RULES,
  RULE_SUMMARY,
  isClosedSetNumericAnswer,
  positionalExplanationHit,
  positionalOptionHit,
  proseSelfCheckHit,
  type AssessmentRule,
} from "../src/lib/assessment-fit";

/**
 * Guard: the ASSESSMENT WIDGET must fit the content wrapped inside it.
 *
 *   pnpm check:assessment-fit                     # exit 1 on any NEW mismatch
 *   pnpm check:assessment-fit --list              # every finding, grandfathered ones included
 *   pnpm check:assessment-fit --emit-grandfather  # re-baseline DOWNWARD after a sweep
 *
 * WHY THIS EXISTS
 * ---------------
 * Learners kept reporting the same defect wearing different clothes: a typed fill-in used for a
 * civics date where multiple-choice belongs (Indiana), a typed open-answer drill on interpretive
 * cultural history (Hoodoo), prose "check yourself" question-and-answer beats left as paragraphs
 * where a `:::reveal` card belongs (the FAA import shipped 40 of those). Each was fixed one at a
 * time. plans/app-improvements/feedback-triage.md names the mismatch as the ROOT CAUSE and every
 * other quiz fix in that list as a symptom. This guard is the part of that root cause a machine can
 * decide, so a new one cannot ship.
 *
 * THE SPLIT, AND WHY IT IS NOT NEGOTIABLE
 * ---------------------------------------
 * "Does this widget genuinely fit this content?" is a semantic judgment, and per CLAUDE.md an LLM
 * verdict may NEVER gate a commit: it is non-deterministic, so the same tree could pass and then
 * fail. This file therefore carries ONLY rules that are mechanically decidable with no judgment,
 * exactly like scripts/check-reveals.ts. The rules themselves live in src/lib/assessment-fit.ts as
 * pure predicates; this script is the AST walk plus the ratchet. The SEMANTIC half is advisory, on
 * the instructor tools: POST /api/courses/[id]/audit-assessment-fit, surfaced as the "Audit
 * assessment fit" button in src/components/course-admin-tools.tsx, the sibling of "Audit reveals".
 * It never runs in lint.
 *
 * THE RULES (each is a runtime FACT, not an opinion; full reasoning in src/lib/assessment-fit.ts)
 * ----------------------------------------------------------------------------------------------
 * 1. `positional-explanation` — an explanation naming an option by position ("the first option is
 *    wrong") while every attempt re-shuffles the options, so it describes an order no learner saw.
 *    FIX: name the option by its CONTENT ("the IMSAFE option"), editing explanation text only.
 * 2. `positional-option` — an option whose text depends on order ("all of the above").
 *    FIX: rewrite the option as a standalone statement.
 * 3. `closed-set-fill-in` — a typed `exercise` item whose every accepted answer is bare digits.
 *    FIX: convert the item to a quiz question, or, when producing the number by hand IS the skill
 *    (a calculation, a conversion), set `computedAnswer: true` on the item, the same explicit
 *    opt-out shape as `shuffleOptions: false` on a bank.
 * 4. `prose-self-check` — a `**Check yourself**` beat posing a question instead of being authored
 *    as `:::reveal <question> ||| <answer>`. FIX: `pnpm reveal:convert <course>`.
 *
 * WHAT WAS DELIBERATELY REJECTED (measured against the catalog, not assumed)
 * -------------------------------------------------------------------------
 * - "A long free-text fill-in cannot be graded by string equality." Measured: the whole catalog has
 *   4 items whose shortest accepted answer runs 5+ words, and all four are Portuguese TRANSLATION
 *   drills where typing the sentence is the entire exercise. Zero true positives, four false ones.
 * - "Many `accept` variants mean the answer is unspellable." No threshold separates them: the
 *   best-authored bank in the repo (ai-b1-prompt-engineering) carries a four-variant accept list
 *   and is correct authoring.
 * - "The fill-in answer is a proper noun." Capitalisation is not a signal: sentence-initial words,
 *   acronyms and language courses all break it. That is judgment.
 * - "These options are not mutually exclusive" / "a reveal would fit better than scoring here."
 *   Pure judgment. Both are prompts in the advisory audit route instead.
 *
 * A RATCHET, like check-longest-option.ts and check-standards-coverage.ts
 * ----------------------------------------------------------------------
 * Files that already violate are listed in GRANDFATHERED with their measured per-rule counts. They
 * do not fail, but they may not get WORSE, so the debt can only shrink. A file with no entry must
 * be clean. DELETE an entry when you fix its file: the list shrinking is the progress bar. NEVER
 * add an entry to make NEW content pass, and never run --emit-grandfather to silence a failure:
 * that records the regression as the new normal, which is the opposite of what a ratchet is for.
 *
 * SAFE FIXING (the same rules the other quiz guards state, for the same reason)
 * ----------------------------------------------------------------------------
 * Every fix above edits explanation text, edits option text, or converts a widget wholesale. Never
 * reorder options and never move `correctIndex`: stored attempts keep the chosen index, so a
 * reorder rewrites what past learners answered on the results replay. Never edit a question prompt:
 * `questionKey` hashes the prompt alone, so a reword resets per-question history for everyone who
 * already answered it.
 */

const ROOTS = ["scripts", "src"];
const EXCLUDE_DIRS = [join("src", "db", "migrations"), "node_modules", ".next"];
const EXTS = [".ts", ".tsx"];

/**
 * Measured violations that predate this guard, per file, per rule. A recorded count is a CEILING:
 * one more of the same rule in the same file fails the build. Delete a line when its file is clean.
 * Do not add lines to make new content pass.
 */
const GRANDFATHERED: Record<string, Partial<Record<AssessmentRule, number>>> = {
  "scripts/data/citizenship-naturalization-course.ts": { "closed-set-fill-in": 1 },
  "scripts/data/croquet-course.ts": { "closed-set-fill-in": 1 },
  "scripts/data/dual-citizenship-course.ts": { "closed-set-fill-in": 1 },
  "scripts/data/faa-part-107-quizzes.ts": { "positional-explanation": 1 },
  "scripts/data/football-course.ts": { "positional-explanation": 1 },
  "scripts/data/fort-harrison-course.ts": { "closed-set-fill-in": 2 },
  "scripts/data/golf-course.ts": { "closed-set-fill-in": 2 },
  "scripts/data/green-book-read-a-route-course.ts": { "closed-set-fill-in": 3 },
  "scripts/data/history-of-unions-course.ts": { "closed-set-fill-in": 2 },
  "scripts/data/how-the-tools-travelled-course.ts": { "closed-set-fill-in": 1 },
  "scripts/data/how-to-run-course.ts": { "closed-set-fill-in": 1 },
  "scripts/data/indiana-avenue-course.ts": { "closed-set-fill-in": 1 },
  "scripts/data/know-your-rights-at-work-course.ts": { "closed-set-fill-in": 2 },
  "scripts/data/labor-mexico-course.ts": { "closed-set-fill-in": 2 },
  "scripts/data/labor-nordics-course.ts": { "closed-set-fill-in": 2 },
  "scripts/data/mudsock-boundary-course.ts": { "closed-set-fill-in": 1 },
  "scripts/data/philadelphia-university-course.ts": { "closed-set-fill-in": 2 },
  "scripts/data/pittsburgh-playbook-course.ts": { "closed-set-fill-in": 1 },
  "scripts/data/read-your-body-course.ts": { "positional-explanation": 7 },
  "scripts/data/state-civics-al-course.ts": { "closed-set-fill-in": 2 },
  "scripts/data/state-civics-ar-course.ts": { "closed-set-fill-in": 1 },
  "scripts/data/state-civics-az-course.ts": { "closed-set-fill-in": 1 },
  "scripts/data/state-civics-ca-course.ts": { "closed-set-fill-in": 1 },
  "scripts/data/state-civics-co-course.ts": { "closed-set-fill-in": 1 },
  "scripts/data/state-civics-ct-course.ts": { "closed-set-fill-in": 1 },
  "scripts/data/state-civics-fl-course.ts": { "closed-set-fill-in": 1 },
  "scripts/data/state-civics-ga-course.ts": { "closed-set-fill-in": 1 },
  "scripts/data/state-civics-hi-course.ts": { "closed-set-fill-in": 1 },
  "scripts/data/state-civics-ia-course.ts": { "closed-set-fill-in": 1 },
  "scripts/data/state-civics-id-course.ts": { "closed-set-fill-in": 1 },
  "scripts/data/state-civics-il-course.ts": { "closed-set-fill-in": 2 },
  "scripts/data/state-civics-ks-course.ts": { "closed-set-fill-in": 1 },
  "scripts/data/state-civics-la-course.ts": { "closed-set-fill-in": 1 },
  "scripts/data/state-civics-ma-course.ts": { "closed-set-fill-in": 1 },
  "scripts/data/state-civics-md-course.ts": { "closed-set-fill-in": 1 },
  "scripts/data/state-civics-mi-course.ts": { "closed-set-fill-in": 2 },
  "scripts/data/state-civics-mn-course.ts": { "closed-set-fill-in": 1 },
  "scripts/data/state-civics-mo-course.ts": { "closed-set-fill-in": 1 },
  "scripts/data/state-civics-ms-course.ts": { "closed-set-fill-in": 1 },
  "scripts/data/state-civics-nc-course.ts": { "closed-set-fill-in": 2 },
  "scripts/data/state-civics-nd-course.ts": { "closed-set-fill-in": 1 },
  "scripts/data/state-civics-nh-course.ts": { "closed-set-fill-in": 1 },
  "scripts/data/state-civics-nj-course.ts": { "closed-set-fill-in": 2 },
  "scripts/data/state-civics-nm-course.ts": { "closed-set-fill-in": 1 },
  "scripts/data/state-civics-ny-course.ts": { "closed-set-fill-in": 1 },
  "scripts/data/state-civics-oh-course.ts": { "closed-set-fill-in": 1 },
  "scripts/data/state-civics-ok-course.ts": { "closed-set-fill-in": 1 },
  "scripts/data/state-civics-pa-course.ts": { "closed-set-fill-in": 2 },
  "scripts/data/state-civics-sc-course.ts": { "closed-set-fill-in": 1 },
  "scripts/data/state-civics-sd-course.ts": { "closed-set-fill-in": 1 },
  "scripts/data/state-civics-tn-course.ts": { "closed-set-fill-in": 1 },
  "scripts/data/state-civics-tx-course.ts": { "closed-set-fill-in": 1 },
  "scripts/data/state-civics-va-course.ts": { "closed-set-fill-in": 1 },
  "scripts/data/state-civics-wa-course.ts": { "closed-set-fill-in": 2 },
  "scripts/data/state-civics-wi-course.ts": { "closed-set-fill-in": 1 },
  "scripts/data/tennis-course.ts": { "closed-set-fill-in": 2 },
  "scripts/data/two-racetracks-course.ts": { "closed-set-fill-in": 1 },
  "scripts/data/voting-elections-101-course.ts": { "closed-set-fill-in": 1 },
  "scripts/data/woop-course.ts": { "positional-explanation": 1 },
};

interface Finding {
  file: string;
  line: number;
  rule: AssessmentRule;
  detail: string;
  text: string;
}

// ── AST helpers (literal-only, same approach as check-longest-option.ts) ──────────────────────

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

/** Literal string, or null for anything computed: a runtime-built bank is skipped, never guessed at. */
function stringOf(expr: ts.Expression | undefined): string | null {
  if (!expr) return null;
  if (ts.isStringLiteral(expr) || ts.isNoSubstitutionTemplateLiteral(expr)) return expr.text;
  return null;
}

function stringArrayOf(expr: ts.Expression | undefined): string[] | null {
  if (!expr || !ts.isArrayLiteralExpression(expr)) return null;
  const out: string[] = [];
  for (const el of expr.elements) {
    const s = ts.isExpression(el) ? stringOf(el) : null;
    if (s === null) return null;
    out.push(s);
  }
  return out;
}

const isTrue = (expr: ts.Expression | undefined) => Boolean(expr && expr.kind === ts.SyntaxKind.TrueKeyword);
const trim = (s: string) => s.replace(/\s+/g, " ").trim().slice(0, 100);

function scanFile(file: string): Finding[] {
  const text = readFileSync(file, "utf-8");
  const found: Finding[] = [];
  const sf = ts.createSourceFile(
    file,
    text,
    ts.ScriptTarget.Latest,
    true,
    file.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
  );
  const lineOf = (node: ts.Node) => sf.getLineAndCharacterOfPosition(node.getStart(sf)).line + 1;

  const visit = (node: ts.Node) => {
    if (ts.isObjectLiteralExpression(node)) {
      const props = propMap(node);
      const options = stringArrayOf(props.get("options"));

      // Rules 1 and 2: a quiz question is `options` plus `correctIndex`.
      if (options && props.has("correctIndex")) {
        const explanation = stringOf(props.get("explanation"));
        const hit = positionalExplanationHit(explanation);
        if (explanation && hit) {
          found.push({
            file,
            line: lineOf(node),
            rule: "positional-explanation",
            detail: `explanation says "${hit}", but every attempt re-shuffles the options`,
            text: trim(explanation),
          });
        }
        for (const option of options) {
          const optHit = positionalOptionHit(option);
          if (optHit) {
            found.push({
              file,
              line: lineOf(node),
              rule: "positional-option",
              detail: `option text "${optHit}" points at an order the learner never sees`,
              text: trim(option),
            });
          }
        }
      }
    }

    // Rule 3: `exercise: { items: [ { prompt, answer, accept? } ] }`.
    if (ts.isPropertyAssignment(node)) {
      const nm = node.name;
      const key = ts.isIdentifier(nm) || ts.isStringLiteral(nm) ? nm.text : null;
      if (key === "exercise" && ts.isObjectLiteralExpression(node.initializer)) {
        const items = propMap(node.initializer).get("items");
        if (items && ts.isArrayLiteralExpression(items)) {
          for (const el of items.elements) {
            if (!ts.isObjectLiteralExpression(el)) continue;
            const item = propMap(el);
            const answer = stringOf(item.get("answer"));
            const prompt = stringOf(item.get("prompt"));
            if (answer === null || prompt === null) continue;
            if (isTrue(item.get("computedAnswer"))) continue; // producing the number IS the skill
            if (isClosedSetNumericAnswer(answer, stringArrayOf(item.get("accept")) ?? [])) {
              found.push({
                file,
                line: lineOf(el),
                rule: "closed-set-fill-in",
                detail: `typed answer "${answer}" is a closed-set number; multiple-choice tests recall better`,
                text: trim(prompt),
              });
            }
          }
        }
      }
    }

    ts.forEachChild(node, visit);
  };
  ts.forEachChild(sf, visit);

  // Rule 4 is line based: a prose self-check beat is text inside a body, not a node of its own.
  const lines = text.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const question = proseSelfCheckHit(lines[i]);
    if (question === null) continue;
    found.push({
      file,
      line: i + 1,
      rule: "prose-self-check",
      detail: "a question in prose grades nothing: author it as `:::reveal <question> ||| <answer>`",
      text: trim(question),
    });
  }

  return found;
}

// ── Run ──────────────────────────────────────────────────────────────────────────────────────

function trackedFiles(): string[] {
  return execFileSync("git", ["ls-files", "-z", ...ROOTS], { encoding: "utf-8" })
    .split("\0")
    .filter((f) => f && EXTS.some((e) => f.endsWith(e)))
    .filter((f) => !EXCLUDE_DIRS.some((ex) => f === ex || f.startsWith(`${ex}/`)));
}

const listAll = process.argv.includes("--list");
const files = trackedFiles();
const findings = files.flatMap(scanFile);

/** file -> rule -> count */
const counts = new Map<string, Map<AssessmentRule, number>>();
for (const f of findings) {
  const rel = relative(process.cwd(), f.file);
  const byRule = counts.get(rel) ?? new Map<AssessmentRule, number>();
  byRule.set(f.rule, (byRule.get(f.rule) ?? 0) + 1);
  counts.set(rel, byRule);
}

if (process.argv.includes("--emit-grandfather")) {
  for (const rel of [...counts.keys()].sort()) {
    const byRule = counts.get(rel)!;
    const body = ASSESSMENT_RULES.filter((r) => byRule.has(r))
      .map((r) => `"${r}": ${byRule.get(r)}`)
      .join(", ");
    console.log(`  ${JSON.stringify(rel)}: { ${body} },`);
  }
  console.error(`\n${counts.size} files.`);
  process.exit(0);
}

const violations: Finding[] = [];
const overCeiling: string[] = [];
for (const [rel, byRule] of counts) {
  const allowed = GRANDFATHERED[rel] ?? {};
  for (const rule of ASSESSMENT_RULES) {
    const now = byRule.get(rule) ?? 0;
    const ceiling = allowed[rule] ?? 0;
    if (now > ceiling) {
      overCeiling.push(
        ceiling === 0
          ? `${rel}: ${now} ${rule}`
          : `${rel}: ${now} ${rule}, WORSE than the recorded ${ceiling}`,
      );
      violations.push(...findings.filter((f) => relative(process.cwd(), f.file) === rel && f.rule === rule));
    }
  }
}

/** A grandfathered count that reality has dropped below: lower the ceiling so the ratchet holds. */
const stale: string[] = [];
for (const [rel, allowed] of Object.entries(GRANDFATHERED)) {
  const byRule = counts.get(rel);
  for (const rule of ASSESSMENT_RULES) {
    const recorded = allowed[rule];
    if (recorded === undefined) continue;
    const now = byRule?.get(rule) ?? 0;
    if (now < recorded) stale.push(`${rel} :: ${rule} is down to ${now} (recorded ${recorded})`);
  }
}

if (listAll) {
  for (const f of [...findings].sort((a, b) => a.file.localeCompare(b.file) || a.line - b.line)) {
    console.log(`  ${f.rule.padEnd(23)} ${relative(process.cwd(), f.file)}:${f.line}\n      ${f.detail}`);
  }
  console.log("");
}

const totals = ASSESSMENT_RULES.map((r) => `${findings.filter((f) => f.rule === r).length} ${r}`).join(", ");
console.log(
  `Scanned ${files.length} files: ${findings.length} assessment-fit finding(s) (${totals}); ` +
    `${Object.keys(GRANDFATHERED).length} file(s) grandfathered, ${violations.length} violation(s).`,
);

if (stale.length > 0) {
  console.log(`\nGood news: ${stale.length} grandfathered entr(ies) are now below their recorded count.`);
  console.log("Lower or delete them in GRANDFATHERED so the ratchet keeps its new floor:");
  for (const s of stale) console.log(`  ${s}`);
}

if (violations.length > 0) {
  console.error("\nAssessment widgets that do not fit their content. Each is a runtime fact, not an opinion:");
  for (const rule of ASSESSMENT_RULES) console.error(`  ${rule.padEnd(23)}: ${RULE_SUMMARY[rule]}`);
  console.error(
    "\nFix by editing EXPLANATION or OPTION text, or by converting the widget. Never reorder options,\n" +
      "never move correctIndex, and never edit a prompt (questionKey hashes the prompt, so a reword\n" +
      "resets every learner's history for that question). Run with --list to see every finding.\n",
  );
  for (const line of overCeiling.sort()) console.error(`  ${line}`);
  console.error("");
  for (const v of violations.slice(0, 40)) {
    console.error(`  ${relative(process.cwd(), v.file)}:${v.line}  [${v.rule}]\n      ${v.detail}\n      ${v.text}`);
  }
  if (violations.length > 40) console.error(`  ... and ${violations.length - 40} more (use --list).`);
  process.exit(1);
}
