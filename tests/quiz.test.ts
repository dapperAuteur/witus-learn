import { describe, expect, it } from "vitest";
import { scoreQuiz, type QuizContent } from "@/lib/quiz";

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
