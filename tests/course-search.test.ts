import { describe, expect, it } from "vitest";
import {
  MAX_RESULTS,
  searchLessons,
  segmentBody,
  type SearchableLesson,
} from "@/lib/course-search";

// In-course search (plans/61 §5). The pure half: segmentation must mirror how the lesson-body
// renderer splits directives, figure matches must run over alt/caption/credit and NEVER the URL,
// and no snippet may leak `:::` directive syntax — those are the honesty guarantees the feature's
// copy makes to learners.

const FIGURE =
  ":::figure https://res.cloudinary.com/demo/image/upload/map1539.jpg ||| A hand-drawn 1539 map of the northern seas ||| Note the sea monsters marking unexplored water ||| Olaus Magnus, Carta Marina, 1539, public domain";

describe("segmentBody", () => {
  it("splits prose into paragraph segments on blank lines", () => {
    const segs = segmentBody("First line\nstill first paragraph\n\nSecond paragraph");
    expect(segs).toEqual([
      { kind: "text", text: "First line still first paragraph" },
      { kind: "text", text: "Second paragraph" },
    ]);
  });

  it("returns [] for empty and nullish bodies", () => {
    expect(segmentBody("")).toEqual([]);
    expect(segmentBody(null)).toEqual([]);
    expect(segmentBody(undefined)).toEqual([]);
    expect(segmentBody("   \n\n  ")).toEqual([]);
  });

  it("turns a :::figure into a figure segment of alt + caption + credit, never the url", () => {
    const segs = segmentBody(`Intro prose.\n${FIGURE}\nAfter prose.`);
    expect(segs).toHaveLength(3);
    const fig = segs[1];
    expect(fig.kind).toBe("figure");
    expect(fig.text).toContain("A hand-drawn 1539 map of the northern seas");
    expect(fig.text).toContain("Note the sea monsters marking unexplored water");
    expect(fig.text).toContain("Olaus Magnus, Carta Marina, 1539, public domain");
    expect(fig.text).not.toContain("cloudinary");
    expect(fig.text).not.toContain("https://");
    expect(fig.text).not.toContain(":::");
  });

  it("turns a :::reveal into a reveal segment of question + answer", () => {
    const segs = segmentBody(":::reveal What year did it appear? ||| 1539, on the Carta Marina");
    expect(segs).toEqual([
      { kind: "reveal", text: "What year did it appear? · 1539, on the Carta Marina" },
    ]);
  });

  it("skips :::tool and :::field-log lines entirely", () => {
    const segs = segmentBody(
      "Before.\n:::tool shop-witus | Browse the catalog\n:::field-log expedition | Start yours\nAfter.",
    );
    expect(segs).toEqual([
      { kind: "text", text: "Before." },
      { kind: "text", text: "After." },
    ]);
  });

  it("skips timeline fence lines but keeps the event lines searchable as text", () => {
    const segs = segmentBody(
      ":::timeline Two tracks\n1936 | built | The first Green Book edition appears\n1964 | law | The Civil Rights Act passes\n:::\nProse after.",
    );
    expect(segs.some((s) => s.text.includes(":::"))).toBe(false);
    expect(segs.some((s) => s.text.includes("Two tracks"))).toBe(false);
    const timelineText = segs.find((s) => s.text.includes("Green Book"));
    expect(timelineText?.kind).toBe("text");
    expect(timelineText?.text).toContain("The Civil Rights Act passes");
    expect(segs.at(-1)).toEqual({ kind: "text", text: "Prose after." });
  });

  it("skips malformed and unknown directive lines rather than leaking their syntax", () => {
    const segs = segmentBody(
      ":::figure missing-the-separators\n:::reveal no separator either\n:::mystery whatever\nReal prose.",
    );
    expect(segs).toEqual([{ kind: "text", text: "Real prose." }]);
  });

  it("strips markdown syntax so snippets read as prose", () => {
    const segs = segmentBody("## The Heading\n**Bold claim** with [a link](https://example.com/x).");
    expect(segs[0].text).toBe("The Heading Bold claim with a link.");
    expect(segs[0].text).not.toContain("example.com");
  });
});

function lesson(overrides: Partial<SearchableLesson> & { id: string }): SearchableLesson {
  return { slug: overrides.id, title: `Lesson ${overrides.id}`, body: null, ...overrides };
}

describe("searchLessons", () => {
  const lessons: SearchableLesson[] = [
    lesson({ id: "a", title: "The spice trade", body: "Prose about ships and storms." }),
    lesson({
      id: "b",
      title: "Cartography",
      body: `Some intro.\n${FIGURE}\n:::reveal Who drew the Carta Marina? ||| Olaus Magnus drew it in 1539`,
    }),
    lesson({
      id: "c",
      title: "Navigation",
      body: "Sailors used the spice trade routes for centuries. The trade in spice shaped ports.",
    }),
  ];

  it("is case-insensitive", () => {
    const r = searchLessons(lessons, "SPICE TRADE");
    expect(r.length).toBeGreaterThan(0);
    expect(r[0].lessonId).toBe("a");
  });

  it("ranks title matches above body matches", () => {
    const r = searchLessons(lessons, "spice trade");
    expect(r.map((x) => x.lessonId)).toEqual(["a", "c"]);
    expect(r[0].kind).toBe("title");
    expect(r[1].kind).toBe("text");
  });

  it("ranks an exact phrase above an all-words match", () => {
    const many: SearchableLesson[] = [
      lesson({ id: "words", title: "One", body: "The trade of ships. Spice arrived later." }),
      lesson({ id: "phrase", title: "Two", body: "Everyone joined the spice trade that year." }),
    ];
    const r = searchLessons(many, "spice trade");
    expect(r.map((x) => x.lessonId)).toEqual(["phrase", "words"]);
  });

  it("finds figures by alt, caption and credit, labelled kind figure, without the url", () => {
    for (const q of ["sea monsters", "northern seas", "Olaus Magnus"]) {
      const r = searchLessons(lessons, q);
      const hit = r.find((x) => x.lessonId === "b");
      expect(hit, q).toBeDefined();
      expect(hit!.kind === "figure" || hit!.kind === "reveal").toBe(true);
      expect(hit!.snippet).not.toContain("https://");
      expect(hit!.snippet).not.toContain(":::");
    }
    // A query that only the figure's alt text carries must be a figure match specifically.
    const r = searchLessons(lessons, "hand-drawn");
    expect(r[0].kind).toBe("figure");
  });

  it("never matches a figure by its url", () => {
    expect(searchLessons(lessons, "cloudinary")).toEqual([]);
    expect(searchLessons(lessons, "map1539")).toEqual([]);
  });

  it("finds reveals by question and by answer", () => {
    const byQuestion = searchLessons(lessons, "who drew");
    expect(byQuestion[0]).toMatchObject({ lessonId: "b", kind: "reveal" });
    const byAnswer = searchLessons(lessons, "drew it in 1539");
    expect(byAnswer[0]).toMatchObject({ lessonId: "b", kind: "reveal" });
  });

  it("builds a snippet of ~60 chars context either side with ellipses", () => {
    const long = lesson({
      id: "long",
      title: "Long lesson",
      body: `${"start ".repeat(30)}NEEDLE in the middle ${"end ".repeat(30)}`,
    });
    const [r] = searchLessons([long], "needle");
    expect(r.snippet).toContain("NEEDLE");
    expect(r.snippet.startsWith("…")).toBe(true);
    expect(r.snippet.endsWith("…")).toBe(true);
    // match + ~60 each side + ellipses, with a little slack for word-boundary trimming
    expect(r.snippet.length).toBeLessThanOrEqual(2 * 60 + "needle".length + 20);
  });

  it("does not ellipsise a snippet that fits", () => {
    const [r] = searchLessons([lesson({ id: "s", title: "Short", body: "A tiny needle here." })], "needle");
    expect(r.snippet).toBe("A tiny needle here.");
  });

  it("returns results with the shape the route serves", () => {
    const [r] = searchLessons(lessons, "storms");
    expect(r).toEqual({
      lessonId: "a",
      slug: "a",
      title: "The spice trade",
      kind: "text",
      snippet: "Prose about ships and storms.",
    });
  });

  it("caps results at MAX_RESULTS", () => {
    const many = Array.from({ length: 30 }, (_, i) =>
      lesson({ id: `l${i}`, title: `Common title ${i}`, body: "common body" }),
    );
    expect(searchLessons(many, "common").length).toBe(MAX_RESULTS);
  });

  it("returns [] for a blank query", () => {
    expect(searchLessons(lessons, "   ")).toEqual([]);
  });

  it("returns one result per lesson (its best match)", () => {
    const r = searchLessons(lessons, "trade");
    expect(new Set(r.map((x) => x.lessonId)).size).toBe(r.length);
  });
});
