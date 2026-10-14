// Quiz integrity: the LENGTH measures, defined once.
//
// A quiz a learner can pass by picking an option by its length, without reading the prompt, measures
// test-taking rather than learning. Three lint guards catch that, and the course page shows a learner
// how this course's quizzes are built. All of them read the definitions below, so a change to a
// measure changes every one of them at once:
//
//   • scripts/check-longest-option.ts   always-pick-longest, limit max(60%, chance + 25 points)
//   • scripts/check-shortest-option.ts  always-pick-shortest, the same limit, mirrored
//   • scripts/check-length-balance.ts   every length POSITION, limit max(40%, chance + 15 points)
//   • src/components/course-quiz-integrity.tsx and /admin/quiz-integrity, through measureBank and
//     courseQuizIntegrity at the bottom of this file
//
// Pure: no I/O, no database, no dependencies, so the scripts can import it with tsx (the way
// scripts/check-assessment-fit.ts imports src/lib/assessment-fit.ts) and Vitest can pin it.
//
// THE MEASURE. A learner EYEBALLS length, so "one character longer" is not a tell. Each question is
// scored against the options a learner cannot tell apart by size:
//
//   margin = max(8 characters, 10% of the target option's length)
//   value  = 1 / k when the correct option is one of the k options within `margin` of the target,
//            else 0
//
// A bank's score is the mean of those values: the expected score of the strategy. Equal-length options
// score exactly chance; a visibly longest correct option scores 1.0 on always-pick-longest.
//
// One caveat the admin page states: the scripts read option text from the authored source and skip a
// question with any COMPUTED option, while the course page and the admin page read what was seeded into
// the database. The two can differ slightly; the lint figures are the ones that gate a commit.

/** Banks smaller than this are not measured (too small to tell a giveaway from chance). */
export const MIN_BANK = 8;
/** Length difference a learner cannot see: options within this of the target read as the same size. */
export const MIN_VISIBLE_GAP = 8;
/** ...or within this fraction of the target, so the gap scales with how long the options are. */
export const VISIBLE_FRACTION = 0.1;
/** Base expected score of always-pick-longest (or always-pick-shortest) that counts as a tell. */
export const EXTREME_BASE_SHARE = 0.6;
/** Headroom over chance for those two, so a true/false bank is judged against 75%, not 60%. */
export const OVER_UNIFORM = 0.25;
/** The floor of the balance limit: no length strategy may score more than this on a bank of 4+ options. */
export const BALANCE_BASE_SHARE = 0.4;
/** Headroom over chance (1 / options), so a true/false bank is judged against 65%, not 40%. */
export const OVER_CHANCE = 0.15;

/** How an option's length is measured: trimmed, in JavaScript string length. */
export function optionLength(text: string): number {
  return text.trim().length;
}

/** How many options a learner scanning for "the longest" would actually be choosing between, and
 *  therefore what always-pick-longest scores on this question. */
export function longestStrategyValue(lens: readonly number[], correct: number): { value: number; visible: number } {
  const max = Math.max(...lens);
  const margin = Math.max(MIN_VISIBLE_GAP, max * VISIBLE_FRACTION);
  const visible = lens.filter((l) => l >= max - margin).length;
  return { value: lens[correct] >= max - margin ? 1 / visible : 0, visible };
}

/** How many options a learner scanning for "the shortest" would actually be choosing between, and
 *  therefore what always-pick-shortest scores on this question. */
export function shortestStrategyValue(lens: readonly number[], correct: number): { value: number; visible: number } {
  const min = Math.min(...lens);
  const margin = Math.max(MIN_VISIBLE_GAP, min * VISIBLE_FRACTION);
  const visible = lens.filter((l) => l <= min + margin).length;
  return { value: lens[correct] <= min + margin ? 1 / visible : 0, visible };
}

export type Strategy = "shortest" | "2nd shortest" | "2nd longest" | "longest";
export const STRATEGIES: Strategy[] = ["shortest", "2nd shortest", "2nd longest", "longest"];

/** What "always pick the option at this length position" scores on one question: 1 if the correct option
 *  is alone at that position, 1/k if it is one of k options a learner cannot tell apart by size, else 0. */
export function strategyValue(lens: readonly number[], correct: number, strategy: Strategy): number {
  if (lens.length < 2) return 0;
  const asc = [...lens].sort((a, b) => a - b);
  const pos = { shortest: 0, "2nd shortest": 1, "2nd longest": lens.length - 2, longest: lens.length - 1 }[strategy];
  if (pos < 0 || pos >= lens.length) return 0;
  const target = asc[pos];
  const margin = Math.max(MIN_VISIBLE_GAP, target * VISIBLE_FRACTION);
  const candidates = lens.filter((l) => Math.abs(l - target) <= margin).length;
  return Math.abs(lens[correct] - target) <= margin ? 1 / candidates : 0;
}

/** The limit for always-pick-longest and always-pick-shortest, from the widest question in the bank. */
export function extremeLimit(options: number): number {
  return options >= 2 ? Math.max(EXTREME_BASE_SHARE, 1 / options + OVER_UNIFORM) : EXTREME_BASE_SHARE;
}

/** The limit for the best length strategy (full balance), from the widest question in the bank. */
export function balanceLimit(options: number): number {
  return options >= 2 ? Math.max(BALANCE_BASE_SHARE, 1 / options + OVER_CHANCE) : BALANCE_BASE_SHARE;
}

/** The strategy that scores best on a bank; the first in STRATEGIES order wins a tie. */
export function bestStrategy(byStrategy: Record<Strategy, number>): Strategy {
  return STRATEGIES.reduce((best, st) => (byStrategy[st] > byStrategy[best] ? st : best), STRATEGIES[0]);
}

// ── One bank ─────────────────────────────────────────────────────────────────────────────────────

/** One question as the length measures see it. */
export interface LengthQuestion {
  /** The option texts, measured with optionLength... */
  options?: readonly unknown[] | null;
  /** ...or lengths a caller already measured (the admin page asks SQL for them, so no question text
   *  leaves the database). Wins over `options` when both are given. */
  optionLengths?: readonly unknown[] | null;
  correctIndex?: unknown;
}

export interface BankMeasure {
  /** True when the bank has MIN_BANK or more measurable questions; a smaller bank is not judged. */
  measured: boolean;
  /** Measurable questions: every option a string (or a length) and correctIndex pointing at one. */
  size: number;
  /** Options on the widest question, which sets the limits. */
  options: number;
  longest: { score: number; limit: number };
  shortest: { score: number; limit: number };
  balance: { score: number; strategy: Strategy; limit: number };
  /** Whether every measure is within its limit; null when the bank is too small to judge. */
  pass: boolean | null;
}

/** Option lengths and the correct index, or null for a question that cannot be measured honestly
 *  (the same rule the scripts apply to a computed option: skip the question, never guess). */
function lengthsOf(q: LengthQuestion): { lens: number[]; correct: number } | null {
  if (!q || typeof q !== "object") return null;
  let lens: number[];
  if (Array.isArray(q.optionLengths)) {
    if (!q.optionLengths.every((n) => typeof n === "number" && Number.isFinite(n))) return null;
    lens = q.optionLengths as number[];
  } else if (Array.isArray(q.options)) {
    if (!q.options.every((t) => typeof t === "string")) return null;
    lens = (q.options as string[]).map(optionLength);
  } else {
    return null;
  }
  const correct = q.correctIndex;
  if (typeof correct !== "number" || !Number.isInteger(correct) || correct < 0 || correct >= lens.length) {
    return null;
  }
  return { lens, correct };
}

const mean = (values: number[]) => (values.length === 0 ? 0 : values.reduce((a, v) => a + v, 0) / values.length);

/** Every length measure on one bank, scored exactly as the three lint guards score it. */
export function measureBank(questions: readonly LengthQuestion[] | null | undefined): BankMeasure {
  const measurable = (questions ?? []).map(lengthsOf).filter((q): q is { lens: number[]; correct: number } => q !== null);
  const options = measurable.reduce((m, q) => Math.max(m, q.lens.length), 0);

  const byStrategy = Object.fromEntries(
    STRATEGIES.map((st) => [st, mean(measurable.map((q) => strategyValue(q.lens, q.correct, st)))]),
  ) as Record<Strategy, number>;
  const strategy = bestStrategy(byStrategy);

  const longest = { score: mean(measurable.map((q) => longestStrategyValue(q.lens, q.correct).value)), limit: extremeLimit(options) };
  const shortest = { score: mean(measurable.map((q) => shortestStrategyValue(q.lens, q.correct).value)), limit: extremeLimit(options) };
  const balance = { score: byStrategy[strategy], strategy, limit: balanceLimit(options) };

  const measured = measurable.length >= MIN_BANK;
  return {
    measured,
    size: measurable.length,
    options,
    longest,
    shortest,
    balance,
    pass: measured
      ? longest.score <= longest.limit && shortest.score <= shortest.limit && balance.score <= balance.limit
      : null,
  };
}

// ── One course ───────────────────────────────────────────────────────────────────────────────────

/** One question as the course panel sees it: the length fields plus the two it counts. */
export interface IntegrityQuestion extends LengthQuestion {
  explanation?: unknown;
  /** Set by a caller that measured in SQL and knows only whether an explanation exists. */
  hasExplanation?: boolean | null;
  sourceLessonSlug?: unknown;
}

/** One quiz bank (a lesson's quiz_content, or the same shape built from SQL). */
export interface IntegrityQuiz {
  questions?: readonly IntegrityQuestion[] | null;
  shuffleOptions?: boolean | null;
}

/** Counts only: what a course page may show, with no question text in it. */
export interface CourseQuizIntegrity {
  /** Quiz banks with at least one question. */
  quizzes: number;
  /** Questions across those banks. */
  questions: number;
  /** Banks whose options are reshuffled on every attempt (shuffleOptions ?? true, as toSafeQuiz serves it). */
  shuffled: number;
  /** Banks of MIN_BANK+ questions and how many pass every length measure; null when none is that big. */
  balance: { measured: number; passing: number } | null;
  /** Questions whose sourceLessonSlug names a lesson in this course, so the review link lands. */
  tied: number;
  /** Questions that carry an explanation, shown after the learner answers. */
  explained: number;
}

const hasText = (v: unknown) => typeof v === "string" && v.trim().length > 0;

/**
 * The course-level summary behind the course-page panel and the admin table. Null when the course
 * has no quiz with a question in it, so the panel renders nothing rather than "0 of 0".
 *
 * There is deliberately no "cites the lesson" measure: whether an explanation cites its lesson is a
 * judgment, and the quiz-integrity rule keeps judgment out of the deterministic checks.
 */
export function courseQuizIntegrity(
  quizzes: readonly (IntegrityQuiz | null | undefined)[],
  lessonSlugs: Iterable<string | null | undefined>,
): CourseQuizIntegrity | null {
  const slugs = new Set<string>();
  for (const s of lessonSlugs) if (s) slugs.add(s);

  const banks = quizzes.filter(
    (q): q is IntegrityQuiz & { questions: readonly IntegrityQuestion[] } =>
      Boolean(q) && Array.isArray(q?.questions) && q.questions.length > 0,
  );
  if (banks.length === 0) return null;

  let questions = 0;
  let shuffled = 0;
  let measured = 0;
  let passing = 0;
  let tied = 0;
  let explained = 0;
  for (const bank of banks) {
    if (bank.shuffleOptions ?? true) shuffled += 1;
    const m = measureBank(bank.questions);
    if (m.measured) {
      measured += 1;
      if (m.pass) passing += 1;
    }
    for (const q of bank.questions) {
      if (!q || typeof q !== "object") continue;
      questions += 1;
      if (typeof q.sourceLessonSlug === "string" && slugs.has(q.sourceLessonSlug)) tied += 1;
      if (q.hasExplanation === true || hasText(q.explanation)) explained += 1;
    }
  }

  return {
    quizzes: banks.length,
    questions,
    shuffled,
    balance: measured > 0 ? { measured, passing } : null,
    tied,
    explained,
  };
}
