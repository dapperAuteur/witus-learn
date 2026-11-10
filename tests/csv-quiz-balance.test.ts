import { describe, expect, it } from "vitest";
import { banksFromCsv, episodeFile, formatBank, positionName, seasonOf, verdictOf } from "../scripts/lib/csv-quiz-balance";
import { MIN_BANK } from "@/lib/quiz-integrity";

/**
 * The BVC episode quizzes live in gitignored CSVs, so the length guards over scripts/data/ never saw them
 * (the 2026-11-09 ElementaryMBA coffee warning). This pins the CSV path: the same converter the seed uses
 * (first 10 questions unless the title marks an exam), the same measure as the /teach warning, and the
 * filename rule that keeps a backup copy out of the seed. The fixture is a tiny CSV string, never the
 * real content.
 */

/** One CentOS-format question whose options have these lengths, the correct one at `correct`. */
function question(n: number, lens: number[], correct: number) {
  return {
    id: `q${n}`,
    questionText: `Question ${n}?`,
    options: lens.map((len, i) => ({ id: `q${n}${"abcd"[i]}`, text: String.fromCharCode(97 + i).repeat(len) })),
    correctOptionId: `q${n}${"abcd"[correct]}`,
    explanation: "Because.",
  };
}

const cell = (v: string) => `"${v.replace(/"/g, '""')}"`;

/** A two-row episode CSV in the real file's column layout: one text lesson, one quiz lesson. */
function episodeCsv(questions: ReturnType<typeof question>[], title = "Knowledge Check: Test"): string {
  const header = "module_title,lesson_order,title,lesson_type,text_content,is_free_preview,map_content,quiz_content";
  const text = ["Episode 1: Test", "2", "A lesson", "text", "Body text, with a comma.", "true", "", ""].map(cell).join(",");
  const quiz = ["Episode 1: Test", "17", title, "quiz", "", "false", "", JSON.stringify({ passingScore: 80, questions })]
    .map(cell)
    .join(",");
  return `${header}\n${text}\n${quiz}\n`;
}

const times = <T>(n: number, make: (i: number) => T): T[] => Array.from({ length: n }, (_, i) => make(i + 1));

describe("episodeFile", () => {
  it("reads the episode number and slug the seed uses, and the season it assigns", () => {
    expect(episodeFile("bvc-episode-1-coffee-lessons.csv")).toEqual({ file: "bvc-episode-1-coffee-lessons.csv", episode: 1, slug: "coffee", season: 1 });
    expect(episodeFile("bvc-episode-12-tequila-mezcal-lessons.csv")).toMatchObject({ episode: 12, slug: "tequila-mezcal", season: 2 });
    expect(seasonOf(7)).toBe(1);
    expect(seasonOf(8)).toBe(2);
    expect(seasonOf(21)).toBe(3);
  });

  it("ignores a backup copy and anything else in the folder", () => {
    expect(episodeFile("bvc-episode-1-coffee-lessons.bak-2026-11-09.csv")).toBeNull();
    expect(episodeFile("coffee-ASSIGNMENT.md")).toBeNull();
  });
});

describe("banksFromCsv", () => {
  it("a bank whose correct option is always alone-longest fails on the seeded 10 and on the full bank", () => {
    // 12 questions: the seed ships the first 10 (convertCentosQuiz caps a regular quiz), the CSV holds 12.
    const csv = episodeCsv(times(12, (n) => question(n, [20, 20, 20, 60], 3)));
    const [bank] = banksFromCsv("bvc-episode-1-coffee-lessons.csv", csv);
    expect(bank.lessonOrder).toBe(17);
    expect(bank.seeded.size).toBe(10);
    expect(bank.full.size).toBe(12);
    expect(bank.seeded.balance).toMatchObject({ strategy: "longest", score: 1 });
    expect(bank.seeded.balance.limit).toBeCloseTo(0.4);
    expect(verdictOf(bank.seeded)).toBe("fail");
    expect(verdictOf(bank.full)).toBe("fail");
    expect(bank.questions).toHaveLength(12);
    expect(positionName(bank.questions[0])).toBe("longest");
    expect(formatBank(bank)).toMatch(/^ {2}FAIL {2}ep {2}1 {2}coffee .*S1 shared .*seeded: 10 qs, longest 100% of limit 40%, FAIL .*full: 12 qs/);
  });

  it("equal-length options score chance and pass", () => {
    const csv = episodeCsv(times(MIN_BANK, (n) => question(n, [30, 30, 30, 30], n % 4)));
    const [bank] = banksFromCsv("bvc-episode-2-tea-lessons.csv", csv);
    expect(bank.seeded.size).toBe(MIN_BANK);
    expect(bank.seeded.balance.score).toBeCloseTo(0.25);
    expect(verdictOf(bank.seeded)).toBe("pass");
    expect(formatBank(bank)).toMatch(/^ {3}ok {3}ep {2}2 {2}tea .*seeded: 8 qs, shortest 25% of limit 40%, PASS/);
  });

  it("a bank under MIN_BANK questions gets no verdict, like the /teach warning", () => {
    const csv = episodeCsv(times(MIN_BANK - 1, (n) => question(n, [10, 10, 10, 50], 3)));
    const [bank] = banksFromCsv("bvc-episode-3-chocolate-lessons.csv", csv);
    expect(verdictOf(bank.seeded)).toBe("small");
    expect(formatBank(bank)).toContain("too small to measure");
  });

  it("an exam title keeps every question in the seeded bank, exactly as the converter does", () => {
    const csv = episodeCsv(times(12, (n) => question(n, [20, 20, 20, 20], 0)), "Final Exam: Test");
    const [bank] = banksFromCsv("bvc-episode-4-sugar-lessons.csv", csv);
    // The seed passes no title, so the cap applies regardless of what the CSV calls the lesson.
    expect(bank.seeded.size).toBe(10);
    expect(bank.full.size).toBe(12);
  });

  it("returns nothing for a file the seed would not pick up, and skips rows that are not quizzes", () => {
    const csv = episodeCsv(times(MIN_BANK, (n) => question(n, [30, 30, 30, 30], 0)));
    expect(banksFromCsv("bvc-episode-1-coffee-lessons.bak-2026-11-09.csv", csv)).toEqual([]);
    expect(banksFromCsv("bvc-episode-1-coffee-lessons.csv", csv)).toHaveLength(1);
  });
});
