import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import {
  MIN_BANK,
  balanceLimit,
  courseQuizIntegrity,
  extremeLimit,
  longestStrategyValue,
  measureBank,
  shortestStrategyValue,
  strategyValue,
  type IntegrityQuestion,
} from "@/lib/quiz-integrity";

/**
 * THE LENGTH MEASURES BEHIND THREE LINT GUARDS AND THE COURSE-PAGE QUIZ PANEL.
 *
 * scripts/check-longest-option.ts, check-shortest-option.ts and check-length-balance.ts all import
 * these functions, so a measure that silently drifts here drifts in every one of them at once. Each
 * case below is a property the guards' own header comments promise: equal lengths score chance, a
 * visibly longest correct option scores 1.0, a tie a learner cannot see through scores 1/k, a
 * true/false bank is judged against its own chance, and a small bank is not judged at all.
 */

/** An option of exactly `n` characters. */
const opt = (n: number, ch = "a") => ch.repeat(n);

/** A question whose options have these lengths, with the correct one at `correct`. */
function q(lens: number[], correct: number, extra: Partial<IntegrityQuestion> = {}): IntegrityQuestion {
  return { options: lens.map((n, i) => opt(n, String.fromCharCode(97 + i))), correctIndex: correct, ...extra };
}

const times = <T>(n: number, make: (i: number) => T): T[] => Array.from({ length: n }, (_, i) => make(i));

describe("per-question values", () => {
  it("equal lengths score chance on every strategy", () => {
    const lens = [20, 20, 20, 20];
    expect(longestStrategyValue(lens, 0)).toEqual({ value: 0.25, visible: 4 });
    expect(shortestStrategyValue(lens, 2)).toEqual({ value: 0.25, visible: 4 });
    for (const st of ["shortest", "2nd shortest", "2nd longest", "longest"] as const) {
      expect(strategyValue(lens, 1, st)).toBe(0.25);
    }
  });

  it("a visibly longest correct option scores 1.0, and a visibly shorter one scores 0", () => {
    expect(longestStrategyValue([10, 10, 10, 40], 3).value).toBe(1);
    expect(longestStrategyValue([10, 10, 10, 40], 0).value).toBe(0);
    expect(shortestStrategyValue([5, 40, 40, 40], 0).value).toBe(1);
  });

  it("a k-way tie a learner cannot see through scores 1/k", () => {
    // Three options within 8 characters of the longest: a learner is choosing among three.
    expect(longestStrategyValue([30, 30, 30, 10], 0)).toEqual({ value: 1 / 3, visible: 3 });
    // 25 is within 8 of 30, so this is a two-way tie even though the correct option is strictly longest.
    expect(longestStrategyValue([30, 25, 10, 5], 0)).toEqual({ value: 0.5, visible: 2 });
    // One character longer is not a tell at all.
    expect(longestStrategyValue([21, 20, 20, 20], 0).value).toBe(0.25);
    // The margin scales with length: 10% of 200 is 20, so 185 reads as the same size as 200.
    expect(longestStrategyValue([200, 185, 100, 100], 0).value).toBe(0.5);
  });

  it("a position strategy needs two options, and the inner positions read the sorted lengths", () => {
    expect(strategyValue([12], 0, "longest")).toBe(0);
    // Sorted 10, 40, 80, 120: the second-shortest target is 40, alone within its margin.
    expect(strategyValue([80, 40, 120, 10], 1, "2nd shortest")).toBe(1);
    expect(strategyValue([80, 40, 120, 10], 0, "2nd longest")).toBe(1);
    expect(strategyValue([80, 40, 120, 10], 0, "2nd shortest")).toBe(0);
  });
});

describe("limits", () => {
  it("judges a true/false bank against its own chance: 65% for balance, 75% for longest and shortest", () => {
    expect(balanceLimit(2)).toBeCloseTo(0.65, 10);
    expect(extremeLimit(2)).toBeCloseTo(0.75, 10);
  });

  it("uses the floors on a four-option bank: 40% for balance, 60% for longest and shortest", () => {
    expect(balanceLimit(4)).toBe(0.4);
    expect(extremeLimit(4)).toBe(0.6);
    // Three options: chance plus 15 points beats the 40% floor; chance plus 25 does not beat 60%.
    expect(balanceLimit(3)).toBeCloseTo(1 / 3 + 0.15, 10);
    expect(extremeLimit(3)).toBe(0.6);
  });

  it("a true/false bank carries those limits through measureBank", () => {
    const m = measureBank(times(MIN_BANK, () => q([20, 20], 0)));
    expect(m.options).toBe(2);
    expect(m.balance.limit).toBeCloseTo(0.65, 10);
    expect(m.longest.limit).toBeCloseTo(0.75, 10);
    expect(m.shortest.limit).toBeCloseTo(0.75, 10);
    expect(m.balance.score).toBe(0.5);
    expect(m.pass).toBe(true);
  });
});

describe("measureBank", () => {
  it("scores an equal-length bank at chance and passes it", () => {
    const m = measureBank(times(10, (i) => q([20, 20, 20, 20], i % 4)));
    expect(m).toMatchObject({ measured: true, size: 10, options: 4, pass: true });
    expect(m.longest.score).toBe(0.25);
    expect(m.shortest.score).toBe(0.25);
    expect(m.balance.score).toBe(0.25);
  });

  it("scores a bank whose correct option is always visibly longest at 1.0 and fails it", () => {
    const m = measureBank(times(8, () => q([10, 12, 11, 60], 3)));
    expect(m.longest.score).toBe(1);
    expect(m.balance).toMatchObject({ score: 1, strategy: "longest" });
    expect(m.shortest.score).toBe(0);
    expect(m.pass).toBe(false);
  });

  it("catches a bank that hides at the second-shortest position, which neither extreme guard sees", () => {
    const m = measureBank(times(8, () => q([10, 40, 80, 120], 1)));
    expect(m.longest.score).toBe(0);
    expect(m.shortest.score).toBe(0);
    expect(m.balance).toMatchObject({ score: 1, strategy: "2nd shortest" });
    expect(m.pass).toBe(false);
  });

  it("leaves a bank of 7 or fewer measurable questions unmeasured, with no verdict", () => {
    const seven = measureBank(times(7, () => q([10, 10, 10, 60], 3)));
    expect(seven).toMatchObject({ measured: false, size: 7, pass: null });
    expect(measureBank(times(8, () => q([10, 10, 10, 60], 3))).measured).toBe(true);
    expect(measureBank([])).toMatchObject({ measured: false, size: 0, pass: null });
    expect(measureBank(null).measured).toBe(false);
  });

  it("skips a question it cannot measure honestly rather than guessing, so it does not count toward 8", () => {
    const bank = [
      ...times(7, () => q([20, 20, 20, 20], 0)),
      q([20, 20, 20, 20], 4), // correctIndex past the end
      { options: ["a", 3, "c"], correctIndex: 0 } as unknown as IntegrityQuestion, // a non-string option
      { correctIndex: 0 } as IntegrityQuestion, // no options at all
    ];
    expect(measureBank(bank)).toMatchObject({ measured: false, size: 7 });
  });

  it("measures trimmed option text, so padding with spaces changes nothing", () => {
    const padded = measureBank(times(8, () => ({ options: ["  aaaa  ", "bbbb", "cccc", "dddd"], correctIndex: 0 })));
    expect(padded.longest.score).toBe(0.25);
  });

  it("gives the same answer from lengths measured elsewhere as from the option text", () => {
    const fromText = measureBank(times(9, (i) => q([10 + i, 30, 55, 90], i % 4)));
    const fromLengths = measureBank(times(9, (i) => ({ optionLengths: [10 + i, 30, 55, 90], correctIndex: i % 4 })));
    expect(fromLengths).toEqual(fromText);
  });
});

describe("courseQuizIntegrity", () => {
  const fair = () => times(8, (i) => q([20, 20, 20, 20], i % 4));
  const tell = () => times(8, () => q([10, 10, 10, 60], 3));

  it("returns null for a course with no quiz, or only empty ones, so the panel renders nothing", () => {
    expect(courseQuizIntegrity([], ["intro"])).toBeNull();
    expect(courseQuizIntegrity([null, undefined, { questions: [] }, { questions: null }], ["intro"])).toBeNull();
  });

  it("counts shuffle the way toSafeQuiz serves it: an explicit shuffleOptions false is the only opt-out", () => {
    const r = courseQuizIntegrity(
      [
        { questions: [q([5, 5], 0)] },
        { questions: [q([5, 5], 0)], shuffleOptions: true },
        { questions: [q([5, 5], 0)], shuffleOptions: false },
        { questions: [q([5, 5], 0)], shuffleOptions: null },
      ],
      [],
    );
    expect(r).toMatchObject({ quizzes: 4, shuffled: 3 });
  });

  it("counts a question as tied to a lesson only when its slug names a lesson in this course", () => {
    const r = courseQuizIntegrity(
      [
        {
          questions: [
            q([5, 5], 0, { sourceLessonSlug: "intro" }),
            q([5, 5], 0, { sourceLessonSlug: "another-courses-lesson" }),
            q([5, 5], 0),
            q([5, 5], 0, { sourceLessonSlug: "" }),
          ],
        },
      ],
      ["intro", "week-two", null],
    );
    expect(r).toMatchObject({ questions: 4, tied: 1 });
  });

  it("counts an explanation only when it has text, or when SQL reported one", () => {
    const r = courseQuizIntegrity(
      [
        {
          questions: [
            q([5, 5], 0, { explanation: "Because the lesson says so." }),
            q([5, 5], 0, { explanation: "   " }),
            q([5, 5], 0),
            { optionLengths: [5, 5], correctIndex: 0, hasExplanation: true },
            { optionLengths: [5, 5], correctIndex: 0, hasExplanation: false },
          ],
        },
      ],
      [],
    );
    expect(r).toMatchObject({ questions: 5, explained: 2 });
  });

  it("reports length balance only for banks of 8+, and null when none is that big", () => {
    expect(courseQuizIntegrity([{ questions: times(7, () => q([5, 5], 0)) }], [])?.balance).toBeNull();
    const r = courseQuizIntegrity([{ questions: fair() }, { questions: tell() }, { questions: times(3, () => q([5, 5], 0)) }], []);
    expect(r).toMatchObject({ quizzes: 3, questions: 19, balance: { measured: 2, passing: 1 } });
  });
});

describe("one definition: the three guards import the measure instead of keeping a copy", () => {
  const read = (p: string) => readFileSync(fileURLToPath(new URL(`../${p}`, import.meta.url)), "utf8");

  for (const script of [
    "scripts/check-longest-option.ts",
    "scripts/check-shortest-option.ts",
    "scripts/check-length-balance.ts",
  ]) {
    it(`${script} reads its measure from src/lib/quiz-integrity.ts`, () => {
      const src = read(script);
      expect(src).toContain('from "../src/lib/quiz-integrity"');
      for (const own of [
        "const MIN_BANK",
        "const MIN_VISIBLE_GAP",
        "const VISIBLE_FRACTION",
        "const BASE_SHARE",
        "const OVER_UNIFORM",
        "const OVER_CHANCE",
        "function longestStrategyValue",
        "function shortestStrategyValue",
        "function strategyValue",
        "Math.max(BASE_SHARE",
      ]) {
        expect(src, own).not.toContain(own);
      }
    });
  }
});
