// Pure quiz scoring (no DB) so it can be unit-tested. Quiz content lives in
// lessons.quiz_content; the correctIndex is NEVER sent to the client (the player
// receives a stripped copy) — scoring happens server-side.
export interface QuizQuestion {
  prompt: string;
  options: string[];
  correctIndex: number;
}

export interface QuizContent {
  questions: QuizQuestion[];
  passingScore?: number;
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
