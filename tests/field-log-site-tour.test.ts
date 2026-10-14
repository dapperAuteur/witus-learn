import { describe, expect, it } from "vitest";
import { FIELD_LOG_TEMPLATES, initialChecklist, templateByKey } from "@/lib/field-log-templates";
import { LegPatchSchema, LegSchema } from "@/lib/field-log-leg-schema";
import { splitNoteLinks } from "@/lib/note-links";

// The site-tour pieces of My Field Log are pure: the template data, the leg edit schema the PATCH
// route validates with, and the note-link splitter the legs tab renders with. Pinned here without a
// database.

describe("field-log templates", () => {
  it("keeps every item id unique within a template, since the checklist snapshot keys on them", () => {
    for (const t of FIELD_LOG_TEMPLATES) {
      const ids = t.stages.flatMap((s) => s.items.map((i) => i.id));
      expect(new Set(ids).size, t.key).toBe(ids.length);
    }
  });

  it("offers the site-tour template and snapshots it un-done", () => {
    const t = templateByKey("site-tour");
    expect(t).toBeDefined();
    const checklist = initialChecklist(t!);
    expect(checklist.stages.map((s) => s.key)).toEqual(t!.stages.map((s) => s.key));
    expect(checklist.stages.flatMap((s) => s.items).every((i) => !i.done && i.note === "")).toBe(true);
  });
});

describe("leg edit schema", () => {
  it("accepts a visited tick on its own", () => {
    expect(LegPatchSchema.safeParse({ visited: true }).success).toBe(true);
  });

  it("rejects an empty edit and unknown site types", () => {
    expect(LegPatchSchema.safeParse({}).success).toBe(false);
    expect(LegPatchSchema.safeParse({ siteType: "museum" }).success).toBe(false);
  });

  it("holds notes to the same 2,000 characters as a new leg", () => {
    expect(LegPatchSchema.safeParse({ notes: "x".repeat(2000) }).success).toBe(true);
    expect(LegPatchSchema.safeParse({ notes: "x".repeat(2001) }).success).toBe(false);
    expect(LegSchema.safeParse({ name: "Stop", notes: "x".repeat(2001) }).success).toBe(false);
  });
});

describe("splitNoteLinks", () => {
  it("links a lesson path and keeps the text around it", () => {
    const segs = splitNoteLinks("Open: 2 · The firm /bam/negro-leagues/lesson/nl-what-a-league-is ; then go");
    expect(segs).toEqual([
      { text: "Open: 2 · The firm " },
      { text: "/bam/negro-leagues/lesson/nl-what-a-league-is", href: "/bam/negro-leagues/lesson/nl-what-a-league-is", external: false },
      { text: " ; then go" },
    ]);
  });

  it("links an absolute URL but leaves trailing punctuation outside it", () => {
    const segs = splitNoteLinks("See https://www.nps.gov/hutr/index.htm.");
    expect(segs[1]).toEqual({ text: "https://www.nps.gov/hutr/index.htm", href: "https://www.nps.gov/hutr/index.htm", external: true });
    expect(segs[2]).toEqual({ text: "." });
  });

  it("leaves slashes that are not paths as text", () => {
    for (const text of ["and/or", "1/2 mile", "a / b", "/single", "15/16 inch"]) {
      expect(splitNoteLinks(text).some((s) => s.href), text).toBe(false);
    }
  });
});
