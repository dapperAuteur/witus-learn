import { describe, expect, it } from "vitest";
import { noteSearchSource, normalizeForMatch, quoteStillResolves } from "@/lib/annotations";

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

// Note search returns four kinds of hit (plans/61 §4) and every one of them has to say whose note
// it is. The DB half of this lives in tests/isolation/notes.db.test.ts; these run everywhere,
// because mislabelling a shared note as the viewer's own is a privacy bug, not a cosmetic one.
describe("noteSearchSource", () => {
  const me = "user-me";
  const other = "user-other";

  it("labels the viewer's own personal note as theirs", () => {
    expect(noteSearchSource({ kind: "personal", authorId: me }, me, me)).toBe("mine");
  });

  it("never labels someone else's personal note as the viewer's own", () => {
    // Only a share row can put this note in the results, so 'shared' is the only honest label.
    expect(noteSearchSource({ kind: "personal", authorId: other }, me, me)).toBe("shared");
  });

  it("separates a note the viewer sent from one their teacher sent them", () => {
    expect(noteSearchSource({ kind: "teacher", authorId: me }, me, me)).toBe("sent");
    expect(noteSearchSource({ kind: "teacher", authorId: other }, me, me)).toBe("teacher");
  });

  it("attributes the teaching half to the account, not to a child being acted as", () => {
    const child = "user-child";
    // A parent acting as their managed child: the child's notes are "mine" for this viewer,
    // and a note the PARENT sent as a teacher stays labelled as the parent's own sending.
    expect(noteSearchSource({ kind: "personal", authorId: child }, child, me)).toBe("mine");
    expect(noteSearchSource({ kind: "teacher", authorId: me }, child, me)).toBe("sent");
    // A different teacher's note is still just a teacher note.
    expect(noteSearchSource({ kind: "teacher", authorId: other }, child, me)).toBe("teacher");
  });
});
