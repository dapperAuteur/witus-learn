import { describe, expect, it } from "vitest";
import {
  duplicateTitleLessonIds,
  encodeTextDirectiveTerm,
  resolveCitationLink,
  safeHttpUrl,
  textFragmentFor,
  type CitationChunk,
  type CitationLinkContext,
  type LinkableSource,
} from "@/lib/source-chat-links";

const ctx = (over: Partial<CitationLinkContext> = {}): CitationLinkContext => ({
  coursePath: "/bam/rope-access",
  lessons: [
    { id: "l1", title: "Anchors and Loads", slug: "anchors-and-loads" },
    { id: "l2", title: "Knots You Trust", slug: "knots-you-trust" },
  ],
  sources: new Map<string, LinkableSource>(),
  sourcesPageHref: "/bam/rope-access/sources",
  ...over,
});

const lessonChunk = (over: Partial<CitationChunk> = {}): CitationChunk => ({
  kind: "lesson",
  title: "Anchors and Loads",
  sourceId: null,
  text: "An anchor must hold the whole system load before anyone trusts it with a life.",
  ord: 0,
  ...over,
});

describe("lesson citations", () => {
  it("links to the lesson whose title matches, with a text fragment", () => {
    const link = resolveCitationLink(lessonChunk(), ctx());
    expect(link).toEqual({
      href: "/bam/rope-access/lesson/anchors-and-loads#:~:text=An%20anchor%20must%20hold%20the%20whole%20system%20load",
      external: false,
    });
  });

  it("gives no link when no visible lesson has that title (renamed, or unpublished for a learner)", () => {
    expect(resolveCitationLink(lessonChunk({ title: "A Lesson Since Renamed" }), ctx())).toBeNull();
    expect(resolveCitationLink(lessonChunk({ title: null }), ctx())).toBeNull();
  });

  it("gives no link when the course has no canonical path", () => {
    expect(resolveCitationLink(lessonChunk(), ctx({ coursePath: null }))).toBeNull();
  });

  it("gives no link for a lesson without a slug (the lesson route cannot address it)", () => {
    const lessons = [{ id: "l1", title: "Anchors and Loads", slug: null }];
    expect(resolveCitationLink(lessonChunk(), ctx({ lessons }))).toBeNull();
  });

  it("encodes the slug", () => {
    const lessons = [{ id: "l1", title: "Anchors and Loads", slug: "a b" }];
    expect(resolveCitationLink(lessonChunk(), ctx({ lessons }))?.href).toMatch(/^\/bam\/rope-access\/lesson\/a%20b#/);
  });

  describe("duplicate titles", () => {
    const lessons = [
      { id: "q1", title: "Review", slug: "review-1" },
      { id: "q2", title: "Review", slug: "review-2" },
    ];
    const chunk = lessonChunk({ title: "Review", text: "Second review body text goes right here today." });

    it("picks the one lesson whose body contains the chunk", () => {
      const duplicateTitleBodies = new Map([
        ["q1", "First review body text."],
        ["q2", "Intro.\n\nSecond review body text goes right here today. More."],
      ]);
      expect(resolveCitationLink(chunk, ctx({ lessons, duplicateTitleBodies }))?.href).toMatch(/\/lesson\/review-2#/);
    });

    it("gives no link when the bodies were not loaded or do not settle it", () => {
      expect(resolveCitationLink(chunk, ctx({ lessons }))).toBeNull();
      const both = new Map([
        ["q1", chunk.text],
        ["q2", chunk.text],
      ]);
      expect(resolveCitationLink(chunk, ctx({ lessons, duplicateTitleBodies: both }))).toBeNull();
    });

    it("only asks for bodies of cited titles that are actually shared", () => {
      const all = [...lessons, { id: "x", title: "Unique", slug: "unique" }, { id: "y", title: "Other", slug: "o1" }, { id: "z", title: "Other", slug: "o2" }];
      expect(duplicateTitleLessonIds(all, ["Review", "Unique"]).sort()).toEqual(["q1", "q2"]);
      expect(duplicateTitleLessonIds(all, ["Unique"])).toEqual([]);
    });
  });
});

describe("citation (bibliography) chunks", () => {
  const chunk: CitationChunk = { kind: "citation", title: "Smith, J. (2020). Rope.", sourceId: "s1", text: "Smith, J. (2020). Rope.", ord: 0 };
  const src = (s: Partial<LinkableSource>): Map<string, LinkableSource> =>
    new Map([["s1", { id: "s1", url: null, pdfUrl: null, doi: null, ...s }]]);

  it("uses the source's URL in a new tab", () => {
    expect(resolveCitationLink(chunk, ctx({ sources: src({ url: "https://example.org/rope" }) }))).toEqual({
      href: "https://example.org/rope",
      external: true,
    });
  });

  it("falls back to the hosted copy, then the DOI", () => {
    expect(resolveCitationLink(chunk, ctx({ sources: src({ pdfUrl: "https://res.cloudinary.com/x/rope.pdf" }) }))?.href).toBe(
      "https://res.cloudinary.com/x/rope.pdf",
    );
    expect(resolveCitationLink(chunk, ctx({ sources: src({ doi: "10.1000/xyz123" }) }))?.href).toBe("https://doi.org/10.1000/xyz123");
    expect(resolveCitationLink(chunk, ctx({ sources: src({ doi: "https://doi.org/10.1000/xyz123" }) }))?.href).toBe(
      "https://doi.org/10.1000/xyz123",
    );
  });

  it("without a URL, links to the course's Sources page in the same tab", () => {
    expect(resolveCitationLink(chunk, ctx({ sources: src({}) }))).toEqual({ href: "/bam/rope-access/sources", external: false });
    // An unknown source id (deleted since indexing) also lands on the Sources page.
    expect(resolveCitationLink({ ...chunk, sourceId: "gone" }, ctx())).toEqual({ href: "/bam/rope-access/sources", external: false });
  });

  it("gives no link when there is no URL and the viewer may not open the Sources page", () => {
    expect(resolveCitationLink(chunk, ctx({ sources: src({}), sourcesPageHref: null }))).toBeNull();
  });

  it("never links an unsafe URL", () => {
    expect(resolveCitationLink(chunk, ctx({ sources: src({ url: "javascript:alert(1)" }), sourcesPageHref: null }))).toBeNull();
  });
});

describe("public-domain text chunks", () => {
  it("links the source URL kept in the title", () => {
    const chunk: CitationChunk = { kind: "public_domain_text", title: "https://www.gutenberg.org/ebooks/1.txt", sourceId: null, text: "x", ord: 3 };
    expect(resolveCitationLink(chunk, ctx())).toEqual({ href: "https://www.gutenberg.org/ebooks/1.txt", external: true });
    expect(resolveCitationLink({ ...chunk, title: "not a url" }, ctx())).toBeNull();
  });
});

describe("safeHttpUrl", () => {
  it("accepts only absolute http(s) URLs", () => {
    expect(safeHttpUrl(" https://a.org/x ")).toBe("https://a.org/x");
    expect(safeHttpUrl("http://a.org")).toBe("http://a.org/");
    expect(safeHttpUrl("/relative")).toBeNull();
    expect(safeHttpUrl("data:text/html,hi")).toBeNull();
    expect(safeHttpUrl(null)).toBeNull();
  });
});

describe("text fragments", () => {
  it("encodes the directive's own syntax characters (- , &) and spaces", () => {
    expect(encodeTextDirectiveTerm("well-known, safe & sound")).toBe("well%2Dknown%2C%20safe%20%26%20sound");
  });

  it("caps the passage at eight words", () => {
    expect(textFragmentFor("one two three four five six seven eight nine ten", 0)).toBe(
      "#:~:text=one%20two%20three%20four%20five%20six%20seven%20eight",
    );
  });

  it("skips Markdown block markers and words carrying Markdown syntax", () => {
    expect(textFragmentFor("## Why anchors fail\n\nA **bad** anchor fails quietly under a shock load. End", 0)).toBe(
      "#:~:text=anchor%20fails%20quietly%20under%20a%20shock%20load.",
    );
  });

  it("drops the possibly cut first word of a later chunk", () => {
    expect(textFragmentFor("hors must hold the whole load first, always. End", 2)).toBe(
      "#:~:text=must%20hold%20the%20whole%20load%20first%2C%20always.",
    );
  });

  it("stays within one line, since a directive cannot match across blocks", () => {
    expect(textFragmentFor("Short line\nThis next line has enough plain words here. End", 0)).toBe(
      "#:~:text=This%20next%20line%20has%20enough%20plain%20words%20here.",
    );
  });

  it("returns nothing when there is no run of four plain words (the link still works)", () => {
    expect(textFragmentFor("| a | b |\n|---|---|\n`code`", 0)).toBe("");
    expect(textFragmentFor("", 0)).toBe("");
  });
});
