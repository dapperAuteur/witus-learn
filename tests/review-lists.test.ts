import { describe, expect, it } from "vitest";
import {
  citationGroupSummary,
  countReviewGroup,
  researchGroupSummary,
  reviewGroupStartsOpen,
} from "@/lib/review-lists";

// /admin/citations and /admin/research collapse each course by default, so the summary line is the
// only thing a reviewer reads before deciding what to open. These tests pin the two things that
// matter about it: the open count is never dropped, and a group is never silently expanded on a
// board where that would re-create the wall of cards the collapse exists to remove.

describe("countReviewGroup", () => {
  it("counts total and open in one pass", () => {
    const rows = [{ done: true }, { done: false }, { done: false }];
    expect(countReviewGroup(rows, (r) => !r.done)).toEqual({ total: 3, open: 2 });
  });

  it("reports an empty group as empty rather than as done", () => {
    expect(countReviewGroup([], () => true)).toEqual({ total: 0, open: 0 });
  });
});

describe("citationGroupSummary", () => {
  it("names the number still unverified, because collapsing must not hide the queue", () => {
    expect(citationGroupSummary({ total: 12, open: 3 })).toBe("12 sources, 3 unverified");
  });

  it("says a finished course is finished", () => {
    expect(citationGroupSummary({ total: 12, open: 0 })).toBe("12 sources, all checked");
  });

  it("agrees with itself on one source", () => {
    expect(citationGroupSummary({ total: 1, open: 1 })).toBe("1 source, 1 unverified");
  });

  it("does not claim an empty group was checked", () => {
    expect(citationGroupSummary({ total: 0, open: 0 })).toBe("no sources extracted yet");
  });
});

describe("researchGroupSummary", () => {
  it("names the number still open", () => {
    expect(researchGroupSummary({ total: 5, open: 3 })).toBe("5 checks, 3 open");
  });

  it("says a fully answered group is answered", () => {
    expect(researchGroupSummary({ total: 5, open: 0 })).toBe("5 checks, all answered");
  });

  it("agrees with itself on one check", () => {
    expect(researchGroupSummary({ total: 1, open: 1 })).toBe("1 check, 1 open");
  });

  it("does not claim an empty group was answered", () => {
    expect(researchGroupSummary({ total: 0, open: 0 })).toBe("no checks filed");
  });
});

describe("reviewGroupStartsOpen", () => {
  it("opens the only group on the board when it still has work", () => {
    expect(reviewGroupStartsOpen({ total: 12, open: 3 }, 1)).toBe(true);
  });

  it("leaves the only group closed when nothing is outstanding", () => {
    expect(reviewGroupStartsOpen({ total: 12, open: 0 }, 1)).toBe(false);
  });

  it("keeps every group closed once there is more than one, however much is open", () => {
    expect(reviewGroupStartsOpen({ total: 600, open: 600 }, 14)).toBe(false);
    expect(reviewGroupStartsOpen({ total: 12, open: 3 }, 2)).toBe(false);
  });
});
