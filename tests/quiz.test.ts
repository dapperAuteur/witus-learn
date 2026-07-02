import { describe, expect, it } from "vitest";
import { scoreQuiz, scoreQuizResponses, type QuizContent } from "@/lib/quiz";

const content: QuizContent = {
  questions: [
    { prompt: "q1", options: ["a", "b"], correctIndex: 0 },
    { prompt: "q2", options: ["a", "b"], correctIndex: 1 },
  ],
  passingScore: 80,
};

describe("scoreQuiz", () => {
  it("scores all-correct as 100 and passed", () => {
    expect(scoreQuiz(content, [0, 1])).toMatchObject({ score: 100, passed: true, correct: 2, total: 2 });
  });
  it("scores partial below the passing score as not passed", () => {
    expect(scoreQuiz(content, [0, 0])).toMatchObject({ score: 50, passed: false, correct: 1 });
  });
  it("handles missing answers", () => {
    expect(scoreQuiz(content, [])).toMatchObject({ score: 0, passed: false, correct: 0 });
  });
  it("empty quiz never passes", () => {
    expect(scoreQuiz({ questions: [] }, [])).toMatchObject({ total: 0, passed: false });
  });
});

const pool: QuizContent = {
  questions: [
    { prompt: "q1", options: ["a", "b", "c"], correctIndex: 2 },
    { prompt: "q2", options: ["a", "b"], correctIndex: 0 },
    { prompt: "q3", options: ["a", "b"], correctIndex: 1 },
  ],
  passingScore: 80,
  questionsPerAttempt: 2,
  shuffleOptions: true,
};

describe("scoreQuizResponses (rotated / shuffled attempts)", () => {
  it("scores by ORIGINAL indices regardless of served subset or option order", () => {
    // Learner was served q3 then q1 (rotated order), picked the correct original option for each.
    const r = scoreQuizResponses(pool, [
      { questionIndex: 2, optionIndex: 1 }, // q3 correct
      { questionIndex: 0, optionIndex: 2 }, // q1 correct
    ]);
    expect(r).toMatchObject({ score: 100, passed: true, correct: 2, total: 2 });
  });

  it("total is the number SERVED, not the full pool", () => {
    const r = scoreQuizResponses(pool, [{ questionIndex: 1, optionIndex: 0 }]);
    expect(r).toMatchObject({ correct: 1, total: 1, score: 100 });
  });

  it("marks a wrong original option incorrect", () => {
    const r = scoreQuizResponses(pool, [{ questionIndex: 0, optionIndex: 0 }]);
    expect(r).toMatchObject({ correct: 0, total: 1, passed: false });
  });

  it("ignores responses pointing outside the pool", () => {
    const r = scoreQuizResponses(pool, [{ questionIndex: 99, optionIndex: 0 }]);
    expect(r.correct).toBe(0);
  });
});
