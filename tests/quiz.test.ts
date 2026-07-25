import { describe, expect, it } from "vitest";
import {
  MAX_QUESTIONS_PER_ATTEMPT,
  questionsToServe,
  scoreQuiz,
  scoreQuizResponses,
  toSafeQuiz,
  type QuizContent,
} from "@/lib/quiz";

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

// Build a bank of `n` questions where question i's correct option is index 1.
function bank(n: number, extra: Partial<QuizContent> = {}): QuizContent {
  return {
    questions: Array.from({ length: n }, (_, i) => ({
      prompt: `q${i}`,
      options: ["wrong", "right"],
      correctIndex: 1,
      explanation: `because ${i}`,
    })),
    ...extra,
  };
}

describe("questionsToServe (the catalog-wide 10-question cap)", () => {
  it("caps a long bank at 10 even though the quiz sets no questionsPerAttempt", () => {
    // The CSV-imported FAA practice exam: 24 questions, no author value.
    expect(questionsToServe(bank(24))).toBe(MAX_QUESTIONS_PER_ATTEMPT);
    expect(MAX_QUESTIONS_PER_ATTEMPT).toBe(10);
  });

  it("caps an 11-question bank at 10 (Regulation Quiz 4)", () => {
    expect(questionsToServe(bank(11))).toBe(10);
  });

  it("never serves more questions than the bank holds", () => {
    expect(questionsToServe(bank(6))).toBe(6);
    expect(questionsToServe(bank(0))).toBe(0);
  });

  it("an author value BELOW the cap still wins", () => {
    expect(questionsToServe(bank(24, { questionsPerAttempt: 5 }))).toBe(5);
  });

  it("an author value ABOVE the cap is clamped to 10", () => {
    expect(questionsToServe(bank(24, { questionsPerAttempt: 20 }))).toBe(10);
  });

  it("an author value above the cap AND above the bank clamps to the smaller of the two", () => {
    expect(questionsToServe(bank(8, { questionsPerAttempt: 20 }))).toBe(8);
  });

  it("ignores junk author values and falls back to the cap", () => {
    expect(questionsToServe(bank(24, { questionsPerAttempt: 0 }))).toBe(10);
    expect(questionsToServe(bank(24, { questionsPerAttempt: -3 }))).toBe(10);
    expect(questionsToServe(bank(24, { questionsPerAttempt: Number.NaN }))).toBe(10);
  });
});

describe("toSafeQuiz (the serving seam)", () => {
  const content = bank(15, { passingScore: 80, shuffleOptions: true });

  it("strips the answers before the quiz reaches the client", () => {
    const safe = toSafeQuiz(content) as unknown as Record<string, unknown>;
    const q = (safe.questions as Record<string, unknown>[])[0];
    expect(q).not.toHaveProperty("correctIndex");
    expect(q).not.toHaveProperty("explanation");
    expect(q.prompt).toBe("q0");
    expect(JSON.stringify(safe)).not.toContain("correctIndex");
  });

  it("resolves questionsPerAttempt through the cap and keeps the rest of the config", () => {
    const safe = toSafeQuiz(content);
    expect(safe.questionsPerAttempt).toBe(10);
    expect(safe.questions).toHaveLength(15); // the full bank ships; the player samples 10 of it
    expect(safe.passingScore).toBe(80);
    expect(safe.shuffleOptions).toBe(true);
  });

  it("shuffles by DEFAULT: a bank that never set shuffleOptions still serves shuffled", () => {
    // So a retake cannot leave the correct answer in the same slot. A bank opts out only with an
    // explicit false; undefined means shuffle.
    expect(toSafeQuiz(bank(12)).shuffleOptions).toBe(true);
    expect(toSafeQuiz({ questions: bank(12).questions, shuffleOptions: false }).shuffleOptions).toBe(false);
  });
});

describe("scoring a capped subset attempt", () => {
  // A 15-question bank served as a 10-question attempt: the learner answers only the 10 served.
  const content = bank(15, { passingScore: 80 });
  const served = [0, 3, 4, 7, 8, 9, 11, 12, 13, 14]; // one random rotation

  it("scores against the SERVED questions, not the whole bank", () => {
    const all10 = served.map((questionIndex) => ({ questionIndex, optionIndex: 1 }));
    // 10/10 served correct = 100%, NOT 10/15 = 67% (which would wrongly fail an 80% bar).
    expect(scoreQuizResponses(content, all10)).toMatchObject({
      correct: 10,
      total: 10,
      score: 100,
      passed: true,
    });
  });

  it("passingScore still means what it says against the served subset", () => {
    // 8 of the 10 served correct = 80%, exactly the passing bar.
    const eight = served.map((questionIndex, i) => ({ questionIndex, optionIndex: i < 8 ? 1 : 0 }));
    expect(scoreQuizResponses(content, eight)).toMatchObject({ correct: 8, total: 10, score: 80, passed: true });

    // 7 of 10 = 70%, below the 80% bar.
    const seven = served.map((questionIndex, i) => ({ questionIndex, optionIndex: i < 7 ? 1 : 0 }));
    expect(scoreQuizResponses(content, seven)).toMatchObject({ correct: 7, total: 10, score: 70, passed: false });
  });

  it("a different rotation of the same bank scores the same way", () => {
    const other = [1, 2, 5, 6, 10].map((questionIndex) => ({ questionIndex, optionIndex: 1 }));
    expect(scoreQuizResponses(content, other)).toMatchObject({ correct: 5, total: 5, score: 100, passed: true });
  });
});
