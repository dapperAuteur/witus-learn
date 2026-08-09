import { describe, expect, it } from "vitest";
import {
  GENERAL_MEDIA_GROUP,
  countByStatus,
  courseMediaClearance,
  coursesWithPendingMedia,
  groupByCourse,
  isCourseMediaCleared,
  isMediaKind,
  isMediaStatus,
  isRightsStatus,
  mediaDecisionError,
  rightsAreAccountedFor,
  type MediaAssetLike,
  type MediaStatus,
} from "@/lib/media-verify";

// The media-verification rules, checked with no database. The question the whole surface exists to
// answer is "may this course go live?", so that is the one tested hardest.

const asset = (status: MediaStatus, courseSlug: string | null = "faa-part-107"): MediaAssetLike => ({
  courseSlug,
  status,
});

describe("countByStatus", () => {
  it("counts each bucket and the total", () => {
    expect(
      countByStatus([asset("pending"), asset("approved"), asset("approved"), asset("rejected")]),
    ).toEqual({ total: 4, pending: 1, approved: 2, rejected: 1 });
  });

  it("an empty list is all zeroes, not a crash", () => {
    expect(countByStatus([])).toEqual({ total: 0, pending: 0, approved: 0, rejected: 0 });
  });
});

describe("courseMediaClearance", () => {
  it("clears a course whose every asset is approved", () => {
    const assets = [asset("approved"), asset("approved")];
    expect(courseMediaClearance("faa-part-107", assets)).toEqual({
      total: 2,
      pending: 0,
      approved: 2,
      rejected: 0,
      cleared: true,
    });
    expect(isCourseMediaCleared("faa-part-107", assets)).toBe(true);
  });

  it("one PENDING asset blocks the course", () => {
    expect(isCourseMediaCleared("faa-part-107", [asset("approved"), asset("pending")])).toBe(false);
  });

  it("one REJECTED asset blocks it too: the lesson may still point at media we turned down", () => {
    expect(isCourseMediaCleared("faa-part-107", [asset("approved"), asset("rejected")])).toBe(false);
  });

  it("ignores other courses entirely, in both directions", () => {
    const mixed = [asset("approved", "faa-part-107"), asset("pending", "wine-tasting")];
    expect(isCourseMediaCleared("faa-part-107", mixed)).toBe(true);
    expect(isCourseMediaCleared("wine-tasting", mixed)).toBe(false);
    // A general (no course) asset is nobody's blocker.
    expect(isCourseMediaCleared("faa-part-107", [...mixed, asset("pending", null)])).toBe(true);
  });

  it("a course with no registered media is vacuously clear, and says so with total 0", () => {
    const result = courseMediaClearance("prose-only-course", [asset("pending", "other")]);
    expect(result.cleared).toBe(true);
    expect(result.total).toBe(0);
  });
});

describe("coursesWithPendingMedia", () => {
  it("lists each course once, sorted, and only for PENDING assets", () => {
    expect(
      coursesWithPendingMedia([
        asset("pending", "wine-tasting"),
        asset("pending", "wine-tasting"),
        asset("pending", "faa-part-107"),
        asset("approved", "how-to-research"),
        asset("rejected", "how-to-research"),
      ]),
    ).toEqual(["faa-part-107", "wine-tasting"]);
  });

  it("reports course-less assets under the general group rather than dropping them", () => {
    expect(coursesWithPendingMedia([asset("pending", null)])).toEqual([GENERAL_MEDIA_GROUP]);
  });

  it("is empty when everything has been decided", () => {
    expect(coursesWithPendingMedia([asset("approved"), asset("rejected")])).toEqual([]);
  });
});

describe("groupByCourse", () => {
  it("groups by slug, sorts the groups, and keeps the incoming order inside each", () => {
    const a = { ...asset("pending", "b-course"), id: "1" };
    const b = { ...asset("pending", "a-course"), id: "2" };
    const c = { ...asset("approved", "b-course"), id: "3" };
    expect(groupByCourse([a, b, c])).toEqual([
      { courseSlug: "a-course", assets: [b] },
      { courseSlug: "b-course", assets: [a, c] },
    ]);
  });

  it("puts course-less assets in their own group", () => {
    expect(groupByCourse([asset("pending", null)])[0].courseSlug).toBe(GENERAL_MEDIA_GROUP);
  });
});

describe("rights vocabulary", () => {
  it("accounts for every value except unknown", () => {
    expect(rightsAreAccountedFor("public-domain")).toBe(true);
    expect(rightsAreAccountedFor("own-work")).toBe(true);
    expect(rightsAreAccountedFor("permission-granted")).toBe(true);
    expect(rightsAreAccountedFor("unknown")).toBe(false);
  });

  it("treats an empty or unrecognised value as unaccounted, never as fine", () => {
    expect(rightsAreAccountedFor("")).toBe(false);
    expect(rightsAreAccountedFor("probably ok")).toBe(false);
    expect(rightsAreAccountedFor("Public-Domain")).toBe(false);
  });
});

describe("the type guards", () => {
  it("accept only the closed sets", () => {
    expect(isMediaKind("image")).toBe(true);
    expect(isMediaKind("gif")).toBe(false);
    expect(isMediaStatus("approved")).toBe(true);
    expect(isMediaStatus("published")).toBe(false);
    expect(isRightsStatus("cc-by")).toBe(true);
    expect(isRightsStatus("cc-by-nc")).toBe(false);
  });
});

describe("mediaDecisionError", () => {
  const rights = "public-domain";

  it("refuses a rejection with no note, and says why", () => {
    const err = mediaDecisionError({ status: "rejected", note: "   ", rightsStatus: rights });
    expect(err).toContain("Say why");
  });

  it("allows a rejection once a reason is written", () => {
    expect(
      mediaDecisionError({ status: "rejected", note: "Scan is too dark to read.", rightsStatus: rights }),
    ).toBeNull();
  });

  it("allows an approval with no note: only rejections must be explained", () => {
    expect(mediaDecisionError({ status: "approved", note: "", rightsStatus: rights })).toBeNull();
  });

  it("refuses to APPROVE media whose rights were never established", () => {
    const err = mediaDecisionError({ status: "approved", note: "Looks good", rightsStatus: "unknown" });
    expect(err).toContain("rights");
    // Rejecting it is always allowed: unknown rights are a reason to reject, not a trap.
    expect(
      mediaDecisionError({ status: "rejected", note: "Cannot establish rights.", rightsStatus: "unknown" }),
    ).toBeNull();
  });

  it("lets an asset be put back to pending without a note", () => {
    expect(mediaDecisionError({ status: "pending", note: "", rightsStatus: "unknown" })).toBeNull();
  });
});
