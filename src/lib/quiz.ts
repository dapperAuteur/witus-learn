// Pure quiz scoring (no DB) so it can be unit-tested. Quiz content lives in
// lessons.quiz_content; the correctIndex is NEVER sent to the client (the player
// receives a stripped copy) — scoring happens server-side.
export interface QuizQuestion {
  prompt: string;
  options: string[];
  correctIndex: number;
  /** Why this is the answer — shown after submission. */
  explanation?: string;
  /** Slug of the lesson where the answer is found; becomes a "review" link.
   *  EVERY authored quiz question should set this (point the learner to the source). */
  sourceLessonSlug?: string;
  /** Optional figure shown above the prompt. `imageAlt` is REQUIRED whenever `imageUrl`
   *  is set (screen-reader description) — enforced by the seed/authoring guard. */
  imageUrl?: string;
  imageAlt?: string;
}

export interface QuizContent {
  questions: QuizQuestion[];
  passingScore?: number;
  /** Serve a random subset of this many questions per attempt (a rotating pool), so a learner
   *  sees different questions on retries. Omit / >= questions.length = show all. */
  questionsPerAttempt?: number;
  /** Shuffle each question's option order per attempt (display only; scoring is by identity). */
  shuffleOptions?: boolean;
}

/** A learner's answer to one served question: original indices into content.questions/options. */
export interface QuizResponse {
  questionIndex: number;
  optionIndex: number;
}

/** No attempt ever serves more than this many questions, in ANY course. A long bank becomes a
 *  rotating pool instead of a slog: a shorter attempt the learner will actually retry, and each
 *  retry draws a fresh subset. Applied at the SERVING seam (`toSafeQuiz`), so it covers authored
 *  quizzes, CSV-imported ones, and anything authored later — no per-course opt-in. */
export const MAX_QUESTIONS_PER_ATTEMPT = 10;

/** How many questions THIS attempt serves: the author's `questionsPerAttempt` when they asked for
 *  fewer, otherwise the cap — and never more questions than the bank actually holds.
 *  A bank of 24 with no author value serves 10; an author value of 5 wins; 20 clamps to 10. */
export function questionsToServe(content: Pick<QuizContent, "questions" | "questionsPerAttempt">): number {
  const bank = content.questions?.length ?? 0;
  const cap = Math.min(MAX_QUESTIONS_PER_ATTEMPT, bank);
  const authored = content.questionsPerAttempt;
  // An author value below the cap still wins; above it clamps. Junk (0, negative, NaN) is ignored.
  if (typeof authored === "number" && Number.isFinite(authored) && authored > 0) {
    return Math.min(Math.floor(authored), cap);
  }
  return cap;
}

/** The client-safe copy of a quiz: `correctIndex` and `explanation` are stripped (they'd hand the
 *  learner the answers), and `questionsPerAttempt` is RESOLVED through the cap so the player never
 *  has to know the rule. This is the one seam every quiz passes through on its way to a learner. */
export function toSafeQuiz(content: QuizContent): {
  questions: Omit<QuizQuestion, "correctIndex" | "explanation" | "sourceLessonSlug">[];
  passingScore?: number;
  questionsPerAttempt: number;
  shuffleOptions?: boolean;
} {
  return {
    questions: (content.questions ?? []).map((q) => ({
      prompt: q.prompt,
      options: q.options,
      imageUrl: q.imageUrl,
      imageAlt: q.imageAlt,
    })),
    passingScore: content.passingScore,
    questionsPerAttempt: questionsToServe(content),
    // Shuffle by DEFAULT, so a retake never shows the correct answer in the same slot it was last
    // time (a learner who saw it at "C" cannot coast on position). Scoring is by original index
    // server-side and questionKey is prompt-derived, so shuffling changes no score and no history.
    // A bank opts OUT only with an explicit `shuffleOptions: false`, reserved for the rare question
    // whose options must keep a fixed order; the catalog avoids positional options ("all of the
    // above", "A and B") as an authoring rule, so that case is essentially theoretical here.
    shuffleOptions: content.shuffleOptions ?? true,
  };
}

// A stable identity for a question, derived from its prompt text (djb2 → base36). Captured on each
// attempt so per-question history survives question REORDERS (position changes, prompt doesn't).
// Editing a prompt intentionally starts a fresh history for that (now different) question.
export function questionKey(prompt: string): string {
  const s = (prompt ?? "").trim();
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = (((h << 5) + h) + s.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36);
}

// Per-question feedback returned AFTER submission (so correct answers are never
// sent before the learner answers). `source` links to the lesson that teaches it.
export interface QuizFeedbackItem {
  correctIndex: number;
  correct: boolean;
  explanation: string | null;
  source: { title: string; href: string } | null;
}

export function scoreQuiz(
  content: QuizContent,
  answers: number[],
): { score: number; passed: boolean; correct: number; total: number } {
  const total = content.questions.length;
  if (total === 0) return { score: 0, passed: false, correct: 0, total: 0 };

  let correct = 0;
  content.questions.forEach((q, i) => {
    if (answers[i] === q.correctIndex) correct += 1;
  });
  const score = Math.round((correct / total) * 100);
  return { score, passed: score >= (content.passingScore ?? 70), correct, total };
}

// Score a rotated/shuffled attempt: the learner saw a subset of questions in some option order,
// and submits the ORIGINAL indices for each. We score only the served questions (`responses`),
// so subsetting and shuffling are safe regardless of display order.
export function scoreQuizResponses(
  content: QuizContent,
  responses: QuizResponse[],
): { score: number; passed: boolean; correct: number; total: number } {
  const total = responses.length;
  if (total === 0) return { score: 0, passed: false, correct: 0, total: 0 };
  let correct = 0;
  for (const r of responses) {
    const q = content.questions[r.questionIndex];
    if (q && r.optionIndex === q.correctIndex) correct += 1;
  }
  const score = Math.round((correct / total) * 100);
  return { score, passed: score >= (content.passingScore ?? 70), correct, total };
}
