import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import {
  compareToBaseline,
  countByCourse,
  nextBaseline,
  scanTellCourse,
  scanTellText,
  topPhrases,
  type TellBaseline,
} from "../scripts/lib/ai-tells";
import { HIGH, LOW, MED } from "../scripts/lib/ai-writing-tells";

/**
 * Rubric v1.7 gate D4 (2026-11-16): the AI-writing-tells ratchet (scripts/check-ai-tells.ts). These pin
 * what counts as a hit, what the course did not write and so never counts, and the ratchet's two
 * directions: more than the baseline fails, fewer is reported so the owner can lower the file.
 */

const where = { course: "c", lesson: "l", field: "body" };
const phrases = (text: string): string[] => scanTellText(text, where).map((h) => h.phrase);

describe("the phrase lists", () => {
  it("are the blog's three lists, non-empty and with no duplicates", () => {
    for (const list of [HIGH, MED, LOW]) {
      expect(list.length).toBeGreaterThan(10);
      expect(new Set(list).size).toBe(list.length);
    }
  });
});

describe("what counts", () => {
  it("whole phrases, case-insensitive, each occurrence counted", () => {
    expect(phrases("This plays a crucial role. Crucial, really.")).toEqual(["plays a crucial role", "crucial", "crucial"]);
    expect(phrases("Let's explore the track. It is A Testament To speed.")).toEqual(["a testament to", "let's explore"]);
  });

  it("never part of a longer word", () => {
    expect(phrases("The robustness of the frame; leveraged buyouts; vitality.")).toEqual([]);
  });

  it("scans quiz, exercise and recall text and the course description", () => {
    const hits = scanTellCourse("c", {
      title: "T",
      description: "A comprehensive guide.",
      lessons: [
        {
          slug: "q",
          title: "Q",
          quiz: {
            questions: [
              { prompt: "Why is this pivotal?", options: ["a", "b"], correctIndex: 0, explanation: "Moreover, it is." },
            ],
          } as never,
          recallContent: [{ prompt: "Keep in mind?", answer: "Yes" }],
        },
      ],
    });
    expect(hits.map((h) => `${h.lesson}:${h.field}:${h.phrase}`)).toEqual([
      "(course):description:comprehensive",
      "q:quiz[0].prompt:pivotal",
      "q:quiz[0].explanation:moreover",
      "q:recall[0].prompt:keep in mind",
    ]);
  });
});

describe("what the course did not write never counts", () => {
  it("text in double quotation marks, straight or curly", () => {
    expect(phrases('The ad promised "a game-changer" for drivers.')).toEqual([]);
    expect(phrases("The museum calls it “a testament to speed” on its sign.")).toEqual([]);
  });

  it("a blockquote, a code fence, inline code and a URL", () => {
    expect(phrases("> It plays a vital role in the race.")).toEqual([]);
    expect(phrases("```\nleverage = 3\n```")).toEqual([]);
    expect(phrases("Run `robust-check` first. See https://example.org/the-power-of-wheels")).toEqual([]);
  });

  it("a Sources block, up to the next heading", () => {
    const body = "## Sources\n\nDuhigg, C. (2012). *The power of habit*.\n\n## Next steps\n\nIn conclusion, read it.";
    expect(phrases(body)).toEqual(["in conclusion"]);
  });
});

describe("the ratchet", () => {
  const baseline: TellBaseline = { asOf: "2026-11-16", note: "", counts: { a: 3, b: 2 } };

  it("fails a course above its baseline and a new course with any hit, worst excess first", () => {
    const r = compareToBaseline(new Map([["a", 4], ["b", 2], ["new", 5]]), baseline);
    expect(r.over).toEqual([
      { slug: "new", count: 5, baseline: 0 },
      { slug: "a", count: 4, baseline: 3 },
    ]);
    expect(r.under).toEqual([]);
  });

  it("reports a course below its baseline without failing it, and ignores courses not read here", () => {
    const r = compareToBaseline(new Map([["a", 1]]), baseline);
    expect(r.over).toEqual([]);
    expect(r.under).toEqual([{ slug: "a", count: 1, baseline: 3 }]);
  });

  it("--update-baseline drops clean courses and keeps the count of any course it could not read", () => {
    const next = nextBaseline(new Map([["a", 1], ["c", 0]]), ["b"], baseline, "2026-12-01");
    expect(next).toEqual({ asOf: "2026-12-01", note: "", counts: { a: 1, b: 2 } });
  });

  it("counts and top phrases per course", () => {
    const hits = [...scanTellText("crucial crucial vital", where), ...scanTellText("vital", { ...where, course: "d" })];
    expect(countByCourse(hits)).toEqual(new Map([["c", 3], ["d", 1]]));
    expect(topPhrases(hits, "c")).toEqual(['"crucial" x2', '"vital" x1']);
  });
});

describe("the committed baseline", () => {
  const file = JSON.parse(readFileSync("scripts/lib/ai-tells-baseline.json", "utf-8")) as TellBaseline;

  it("holds positive whole counts, sorted by slug", () => {
    const entries = Object.entries(file.counts);
    expect(entries.every(([, n]) => Number.isInteger(n) && n > 0)).toBe(true);
    expect(entries.map(([s]) => s)).toEqual([...entries.map(([s]) => s)].sort((x, y) => x.localeCompare(y)));
  });

  it("never grows past the catalog total measured on 2026-11-16 (629 hits)", () => {
    expect(Object.values(file.counts).reduce((a, b) => a + b, 0)).toBeLessThanOrEqual(629);
  });
});
