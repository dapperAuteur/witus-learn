// Fill-in production drills for language (and any) courses. Unlike a quiz (graded
// multiple-choice gate), an exercise is formative practice: the learner types an
// answer and self-checks against the key. Checking is forgiving — accent/case
// differences count as "close" (right idea, polish the spelling) rather than wrong.

export interface ExerciseItem {
  /** The cue, e.g. "yo ___ (ayudar) — present" or "Translate: I help". */
  prompt: string;
  /** The canonical correct answer. */
  answer: string;
  /** Other fully-correct answers (regional variants, synonyms). */
  accept?: string[];
  /**
   * Set on an item whose diacritics CARRY MEANING, so a diacritic-only difference grades
   * "incorrect" rather than "close".
   *
   * The default is right for Spanish, French and Portuguese, where an accent is spelling and a
   * near-miss deserves "close, polish the spelling". It is WRONG for a tonal orthography. In Ewe,
   * Twi and Igbo the tone mark is not decoration on a word, it is part of which word this is, so
   * grading a wrong tone as "close" tells a learner they nearly had it when they in fact wrote a
   * different word. Opt in per item, the same way `computedAnswer` opts out of the closed-set
   * fill-in rule, rather than flipping a default that 4 shipped language courses rely on.
   */
  diacriticsAreMeaningful?: boolean;
  /** Optional nudge shown on request before answering. */
  hint?: string;
  /** Shown after checking — the rule / why. */
  explanation?: string;
  /**
   * The learner PRODUCING this number is the skill being practised (a calculation, a unit
   * conversion, a value read off a chart), not recalling a fact.
   *
   * Authoring-time only, read by scripts/check-assessment-fit.ts, never by the player. Its
   * `closed-set-fill-in` rule fails a typed item whose every accepted answer is bare digits,
   * because a date or a count is a closed set that multiple-choice tests better and that
   * `checkExerciseAnswer`'s forgiveness (case, accents) cannot help with. Set this flag ONLY when
   * the arithmetic is the point. Never set it on a year, a seat count, or a form number the
   * learner can only have memorised: that is the exact mismatch the guard exists to catch. Same
   * shape and same discipline as `shuffleOptions: false` on a quiz bank.
   */
  computedAnswer?: true;
}

export interface ExerciseContent {
  /** Short instruction line, e.g. "Conjugate each verb in the present tense." */
  instructions?: string;
  items: ExerciseItem[];
}

export type ExerciseVerdict = "correct" | "close" | "incorrect";

const norm = (s: string) => s.trim().toLowerCase().replace(/\s+/g, " ");
const fold = (s: string) =>
  norm(s)
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");

/** Forgiving check: exact (case/space-insensitive) = correct; accent/diacritic-only
 *  difference = close; otherwise incorrect. */
export function checkExerciseAnswer(item: ExerciseItem, input: string): ExerciseVerdict {
  const candidates = [item.answer, ...(item.accept ?? [])];
  if (candidates.some((c) => norm(c) === norm(input))) return "correct";
  // On a tonal item the fold would erase the very thing being tested, so it is not consulted.
  if (item.diacriticsAreMeaningful) return "incorrect";
  if (input.trim() && candidates.some((c) => fold(c) === fold(input))) return "close";
  return "incorrect";
}
