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
}

export interface QuizContent {
  questions: QuizQuestion[];
  passingScore?: number;
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
