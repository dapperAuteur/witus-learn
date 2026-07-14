import { describe, expect, it } from "vitest";
import { FUTURE_WORK, futureWorkGroups, getFutureWorkItem } from "@/lib/future-work";

// The Future classes & features content is COMMITTED (generated from the gitignored
// plans/future-courses/ notes by `pnpm gen:future-work`), because /admin/future renders it in a
// deploy where plans/ does not exist. These tests guard the two things that would break silently:
// the content shipping empty, and an item key drifting (item_key is the join key for the notes).
describe("future-work content index", () => {
  it("ships the She Did the Work proposal and every subject seed with a body", () => {
    const proposal = getFutureWorkItem("she-did-the-work");
    expect(proposal).toBeDefined();
    expect(proposal!.body).toContain("14 factual errors");

    const subjects = FUTURE_WORK.filter((i) => i.key.startsWith("sdtw-"));
    expect(subjects.length).toBeGreaterThanOrEqual(28);
    for (const s of subjects) {
      expect(s.body.length, s.key).toBeGreaterThan(100);
      expect(s.summary.length, s.key).toBeGreaterThan(0);
    }
  });

  it("carries the other standing proposals", () => {
    expect(getFutureWorkItem("civics-more")?.body).toContain("civics");
    expect(getFutureWorkItem("travel-abroad")?.body).toContain("Passport");
    // The workers'-rights track: the built History of Unions anchor + the country courses.
    expect(getFutureWorkItem("workers-rights-track-proposal")?.body).toContain("four questions");
  });

  // Top-level plans/future-courses/*.md are AUTO-DISCOVERED. Before this, the generator read two
  // hardcoded filenames, so a note BAM filed was invisible in /admin/future until someone edited the
  // script — it looked filed, and wasn't there. This test is the guard against that regressing.
  it("auto-discovers a newly dropped proposal note", () => {
    const unions = getFutureWorkItem("history-of-unions");
    expect(unions, "history-of-unions was not picked up — is discovery hardcoded again?").toBeDefined();
    expect(unions!.body.length).toBeGreaterThan(50);
    expect(unions!.group).toBe("Workers' Rights");
  });

  it("keeps item keys unique — they are the join key for future_work_notes", () => {
    const keys = FUTURE_WORK.map((i) => i.key);
    expect(new Set(keys).size).toBe(keys.length);
  });

  // item_key is the join column for future_work_notes. Renaming a key silently orphans every note
  // filed against it — the note stays in the table and never renders again. These two predate
  // auto-discovery (whose keys are filename-derived), so they are pinned by an explicit override.
  it("preserves the pre-existing keys that notes may already be attached to", () => {
    expect(getFutureWorkItem("civics-more")).toBeDefined();
    expect(getFutureWorkItem("travel-abroad")).toBeDefined();
    expect(getFutureWorkItem("civics-more-proposal")).toBeUndefined();
    expect(getFutureWorkItem("travel-abroad-proposal")).toBeUndefined();
  });

  it("reflects the proposal's judgment: 5 carry a course, Sage Steele is cut", () => {
    expect(FUTURE_WORK.filter((i) => i.status === "recommended")).toHaveLength(5);
    expect(getFutureWorkItem("sdtw-sage-steele")?.status).toBe("cut");
    expect(getFutureWorkItem("sdtw-mary-bassett")?.status).toBe("deferred");
  });

  // Asserts the KNOWN groups are present and correctly ordered relative to each other — NOT the exact
  // full list. Content is auto-discovered, so a new note/folder legitimately adds a group; pinning the
  // whole list would make every new drop a test failure, which is the brittleness this system removed.
  it("groups by kind, keeping the curated groups in declaration order", () => {
    const courseGroups = futureWorkGroups("course").map((g) => g.title);
    for (const g of ["She Did the Work", "Civics", "Workers' Rights", "Travel & Living Abroad"]) {
      expect(courseGroups, `${g} missing from /admin/future`).toContain(g);
    }
    // She Did the Work is authored first and must stay at the top.
    expect(courseGroups[0]).toBe("She Did the Work");

    // Research bundles are `feature`. Pricing is curated; Mansa Gold is an auto-discovered subdir.
    const featureGroups = futureWorkGroups("feature").map((g) => g.title);
    expect(featureGroups).toContain("Pricing");
    expect(featureGroups).toContain("Mansa Gold");
  });

  // Subdirectories of plans/future-courses/ are auto-discovered folder-by-folder, one item per .md,
  // grouped by the folder. This is what makes the Mansa Gold interview-prep pack reviewable in
  // /admin/future. The `*-FULL.md` concatenation (a PDF-export artifact) is skipped so it can't
  // duplicate its own sibling files.
  it("auto-discovers a subdirectory research bundle (Mansa Gold)", () => {
    const prep = getFutureWorkItem("mansa-gold-interview-prep");
    expect(prep, "mansa-gold/ subdir was not picked up").toBeDefined();
    expect(prep!.kind).toBe("feature");
    expect(prep!.group).toBe("Mansa Gold");
    expect(prep!.body.length).toBeGreaterThan(200);
    // The redundant concatenation must NOT appear as its own item.
    expect(getFutureWorkItem("mansa-gold-mansa-gold-interview-prep-FULL")).toBeUndefined();
  });
});
