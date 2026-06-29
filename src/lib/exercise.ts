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
  /** Optional nudge shown on request before answering. */
  hint?: string;
  /** Shown after checking — the rule / why. */
  explanation?: string;
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
  if (input.trim() && candidates.some((c) => fold(c) === fold(input))) return "close";
  return "incorrect";
}
