import { describe, expect, it } from "vitest";
import { normalizeForMatch, quoteStillResolves } from "@/lib/annotations";

// The orphan rule (plans/61 §2): whether a quote still resolves is recomputed against the current
// lesson body, whitespace-insensitively but case-exactly, and is never persisted. These tests pin
// the matching semantics the notes API and the highlight layer both rely on.

describe("normalizeForMatch", () => {
  it("collapses runs of whitespace (spaces, newlines, tabs) to single spaces and trims", () => {
    expect(normalizeForMatch("  a\n\nb\tc  ")).toBe("a b c");
  });

  it("preserves case", () => {
    expect(normalizeForMatch("The Rochdale Pioneers")).toBe("The Rochdale Pioneers");
  });
});

describe("quoteStillResolves", () => {
  const body = "The vocal folds blow apart and snap back together\nhundreds of times per second.";

  it("finds a quote across the body's line breaks", () => {
    expect(quoteStillResolves(body, "snap back together hundreds of times")).toBe(true);
  });

  it("is case-exact: a quote is a citation, not a search", () => {
    expect(quoteStillResolves(body, "the vocal folds blow apart")).toBe(false);
  });

  it("fails when the quoted passage was rewritten", () => {
    expect(quoteStillResolves(body, "vibrate hundreds of times per second")).toBe(false);
  });

  it("treats a missing quote as a lesson-level note that always resolves", () => {
    expect(quoteStillResolves(body, null)).toBe(true);
    expect(quoteStillResolves(body, "")).toBe(true);
  });

  it("does not resolve any quote against a missing body", () => {
    expect(quoteStillResolves(null, "anything")).toBe(false);
  });
});
