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
    expect(getFutureWorkItem("workers-rights-track")?.body).toContain("four questions");
  });

  it("keeps item keys unique — they are the join key for future_work_notes", () => {
    const keys = FUTURE_WORK.map((i) => i.key);
    expect(new Set(keys).size).toBe(keys.length);
  });

  it("reflects the proposal's judgment: 5 carry a course, Sage Steele is cut", () => {
    expect(FUTURE_WORK.filter((i) => i.status === "recommended")).toHaveLength(5);
    expect(getFutureWorkItem("sdtw-sage-steele")?.status).toBe("cut");
    expect(getFutureWorkItem("sdtw-mary-bassett")?.status).toBe("deferred");
  });

  it("groups by kind, preserving declaration order", () => {
    const groups = futureWorkGroups("course");
    expect(groups.map((g) => g.title)).toEqual([
      "She Did the Work",
      "She Did the Work — subject research",
      "Civics",
      "Travel & Living Abroad",
      "Culture & History",
    ]);
    expect(futureWorkGroups("feature")).toEqual([]);
  });
});
