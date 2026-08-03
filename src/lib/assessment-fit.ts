// Assessment-fit rules: does the assessment WIDGET fit the content wrapped in it?
//
// Learners kept reporting one defect in different clothes: a typed fill-in used for a civics date
// where multiple-choice belongs (Indiana), a typed open-answer drill on interpretive cultural
// history (Hoodoo), prose "check yourself" question-and-answer beats left as paragraphs where a
// `:::reveal` card belongs (the FAA import shipped 40 of those). Each was fixed one at a time;
// plans/app-improvements/feedback-triage.md names the mismatch as the root cause and the rest as
// symptoms.
//
// This module holds ONLY the mechanically-decidable half, as pure text predicates with no I/O and
// no dependencies, so both halves of the guardrail can share one definition of the rules:
//
//   • scripts/check-assessment-fit.ts  — DETERMINISTIC, runs in `pnpm lint`, a ratchet. It walks
//     the authored course modules with the TypeScript AST to find each quiz explanation, option and
//     exercise item, then asks the predicates below whether that string is a violation.
//   • POST /api/courses/[id]/audit-assessment-fit — SEMANTIC, advisory, an instructor-tools button.
//     "Does this widget genuinely fit this content?" is a judgment, and per CLAUDE.md an LLM
//     verdict may never gate a commit, so that half can never run in lint. Same split as
//     check-reveals.ts and its "Audit reveals" companion.
//
// Adding a rule here means adding a rule to the build. It must be a runtime FACT, never an opinion:
// if a careful author could reasonably disagree with the verdict, it belongs in the advisory audit.

export type AssessmentRule =
  | "positional-explanation"
  | "positional-option"
  | "closed-set-fill-in"
  | "prose-self-check";

export const ASSESSMENT_RULES: AssessmentRule[] = [
  "positional-explanation",
  "positional-option",
  "closed-set-fill-in",
  "prose-self-check",
];

/** One line per rule: what is broken, in the terms a learner would experience it. */
export const RULE_SUMMARY: Record<AssessmentRule, string> = {
  "positional-explanation":
    "options are shuffled on every attempt, so an explanation that names a position describes an order the learner never saw",
  "positional-option":
    "same shuffle, so an option reading 'all of the above' points at nothing",
  "closed-set-fill-in":
    "a typed drill graded by string equality, on a closed-set fact that multiple-choice tests better",
  "prose-self-check":
    "a question left in prose is never graded and never recorded, so nobody is quizzed by it",
};

// ── Rule 1: an explanation that names an option by its screen position ────────────────────────
//
// `toSafeQuiz` (src/lib/quiz.ts) serves `shuffleOptions ?? true`, and the player builds a fresh
// option order per attempt (src/components/quiz-player.tsx), so "the first option is wrong" lands
// on whatever option shuffled into slot one, often the correct one.
//
// The DEFINITE article is required, which is what keeps ordinary prose out: "an owner always has a
// third option a tariff threat cannot touch" is a sentence about choices in the world, while "the
// third option reverses the real direction" is a pointer at a screen slot. Only the nouns "option"
// and "choice" count. "The first answer" is deliberately excluded: the AI courses use it to mean
// the model's first reply, which has nothing to do with option order.
const POSITIONAL_EXPLANATION =
  /\bthe\s+(?:first|second|third|fourth|fifth|sixth|last|final|top|bottom)\s+(?:option|choice)s?\b/i;

/**
 * A bare letter reference can only ever mean a slot: "option B", "answers A and C".
 *
 * The LETTER stays case-sensitive on purpose, and the whole pattern therefore cannot take the `i`
 * flag. A lowercase "a" is the indefinite article: "an owner always has a third option a tariff
 * threat cannot touch" would match "option a" and flag a perfectly ordinary sentence. Only the noun
 * varies in case, for a sentence-initial "Option B".
 */
const LETTERED_EXPLANATION = /\b(?:[Oo]ption|[Cc]hoice|[Aa]nswer)s?\s+[A-D]\b(?!\w)/;

/** The offending phrase in a quiz explanation, or null when the explanation is order-independent. */
export function positionalExplanationHit(explanation: string | null | undefined): string | null {
  if (!explanation) return null;
  const m = explanation.match(POSITIONAL_EXPLANATION) ?? explanation.match(LETTERED_EXPLANATION);
  return m ? m[0] : null;
}

// ── Rule 2: an option whose own text is a pointer at the other options ────────────────────────
//
// CLAUDE.md already states the catalog avoids positional options; this makes that rule checkable.
const POSITIONAL_OPTION =
  /\b(?:all|both|none|neither|any)\s+of\s+the\s+above\b|\bboth\s+[A-D]\s+and\s+[A-D]\b/i;

/** The offending phrase in an option, or null. */
export function positionalOptionHit(option: string | null | undefined): string | null {
  if (!option) return null;
  const m = option.match(POSITIONAL_OPTION);
  return m ? m[0] : null;
}

// ── Rule 3: a typed fill-in whose answer is a closed-set number ───────────────────────────────
//
// An `exercise` is a PRODUCTION drill graded by string equality, forgiving only about case and
// accents (checkExerciseAnswer in src/lib/exercise.ts), and accent-forgiveness buys a learner
// typing "1851" precisely nothing. A year, a seat count or a form number comes from a small closed
// set the learner either memorised or did not, which is the recognition shape multiple-choice
// exists for. This is verbatim the Indiana complaint: "the typed fill-in exercise is a poor fit for
// civics facts" (commit 43ba37f).
const NUMERIC_ONLY = /^[\s$€£#]*\d[\d,.\-/:%\s]*$/;

/**
 * True when EVERY accepted answer is bare digits plus separators, so no spelling a learner could
 * produce distinguishes understanding from a lucky guess at a number.
 */
export function isClosedSetNumericAnswer(answer: string, accept: readonly string[] = []): boolean {
  return [answer, ...accept].every((a) => NUMERIC_ONLY.test(a.trim()));
}

// ── Rule 4: a prose self-check beat that was never converted to `:::reveal` ───────────────────
//
// `**Check yourself.** <question>` is the pre-conversion shape `pnpm reveal:convert` rewrites. Left
// as prose it renders as a question with no gradable answer and writes no recall_attempts row.
const PROSE_SELF_CHECK =
  /\*\*(?:check yourself|check your understanding|quick check|knowledge check|self.check|test yourself)[.:]?\*\*(.*)$/i;

/**
 * The prose self-check question on this line, or null.
 *
 * The line must actually ASK something: a course-overview paragraph saying "every lesson ends with
 * a **Check yourself** prompt" describes the convention rather than posing a question, so the
 * remainder of the line has to carry a question mark.
 */
export function proseSelfCheckHit(line: string): string | null {
  const m = line.match(PROSE_SELF_CHECK);
  if (!m || !m[1].includes("?")) return null;
  return m[1].trim();
}
