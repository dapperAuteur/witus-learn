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
