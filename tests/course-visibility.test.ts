import { describe, expect, it } from "vitest";
import {
  MIN_OVERRIDE_REASON,
  NEW_COURSE_STATE,
  decideVisibilityChange,
  exportAccess,
  isClosedCourse,
  ownerOnlyBlocks,
  patchOpensPrivate,
  publicReadiness,
  visibilityActorRole,
  workspaceAccess,
  type CourseActor,
  type MarkerReadiness,
} from "@/lib/course-visibility";

/**
 * src/lib/course-visibility.ts: every course is born private and unpublished, and is opened after
 * vetting (BAM, 2026-10-28) by the platform owner or, on that school's courses, its brand_admin
 * (BAM, 2026-10-29), except an owner-only course. Pure policy, so every branch is pinned offline.
 */

const NO_MARKERS: MarkerReadiness = { qrTotal: 0, qrCleared: 0, pTotal: 0, pCleared: 0, openDecisions: 0 };
const VETTED = new Date("2026-10-01T00:00:00Z");
const NOW = new Date("2026-10-28T12:00:00Z");
const PRIVATE = { visibility: "private", isPublished: false, publishedAt: null, publishHoldReason: null };

describe("NEW_COURSE_STATE", () => {
  it("is private and unpublished with no publish date", () => {
    expect(NEW_COURSE_STATE).toEqual({ visibility: "private", isPublished: false, publishedAt: null });
  });
});

describe("isClosedCourse", () => {
  it("is true for a private course and for a held course of any visibility", () => {
    expect(isClosedCourse({ visibility: "private", publishHoldReason: null })).toBe(true);
    expect(isClosedCourse({ visibility: "public", publishHoldReason: "vet culturally" })).toBe(true);
    expect(isClosedCourse({ visibility: "members", publishHoldReason: "copyright" })).toBe(true);
  });
  it("is false for an open course, and a blank hold does not count as a hold", () => {
    expect(isClosedCourse({ visibility: "public", publishHoldReason: null })).toBe(false);
    expect(isClosedCourse({ visibility: "public", publishHoldReason: "   " })).toBe(false);
  });
});

describe("publicReadiness", () => {
  it("is ready when vetted, not held, and every marker is cleared", () => {
    const r = publicReadiness({ vettedAt: VETTED, publishHoldReason: null }, { qrTotal: 2, qrCleared: 2, pTotal: 1, pCleared: 1, openDecisions: 0 });
    expect(r).toMatchObject({ ready: true, vetted: true, held: false, markersCleared: true, blockers: [] });
  });
  it("does not need markers: no markers plus the owner's vetting is ready", () => {
    expect(publicReadiness({ vettedAt: VETTED, publishHoldReason: null }, NO_MARKERS).ready).toBe(true);
  });
  it("lists every blocker: unvetted, held, open decisions, uncleared QR and P needs", () => {
    const r = publicReadiness(
      { vettedAt: null, publishHoldReason: "Hold for cultural review" },
      { qrTotal: 3, qrCleared: 1, pTotal: 2, pCleared: 0, openDecisions: 1 },
    );
    expect(r.ready).toBe(false);
    expect(r.blockers).toEqual([
      "Not vetted yet.",
      "On hold: Hold for cultural review",
      "1 decision marker is still open.",
      "1 of 3 qualified-reviewer needs are cleared.",
      "0 of 2 practitioner needs are cleared.",
    ]);
  });
});

describe("decideVisibilityChange", () => {
  const ready = publicReadiness({ vettedAt: VETTED, publishHoldReason: null }, NO_MARKERS);
  const unvetted = publicReadiness({ vettedAt: null, publishHoldReason: null }, NO_MARKERS);
  const held = publicReadiness({ vettedAt: VETTED, publishHoldReason: "Private review copy" }, NO_MARKERS);

  it("refuses anyone with no switch role (neither the owner nor the school's brand_admin), whatever they ask", () => {
    for (const action of ["make-public", "make-private"] as const) {
      const d = decideVisibilityChange({ actorRole: null, course: PRIVATE, readiness: ready, request: { action, override: true, reason: "a long enough reason" } });
      expect(d).toMatchObject({ ok: false, status: 403 });
    }
  });

  it("gives the school's brand_admin the same rules as the owner, and records the role", () => {
    const d = decideVisibilityChange({ actorRole: "brand_admin", course: PRIVATE, readiness: ready, request: { action: "make-public" }, now: NOW });
    expect(d).toMatchObject({ ok: true, changed: true, audit: { actorRole: "brand_admin", toVisibility: "public" } });
    expect(decideVisibilityChange({ actorRole: "brand_admin", course: PRIVATE, readiness: unvetted, request: { action: "make-public" } })).toMatchObject({ ok: false, status: 409 });
    expect(decideVisibilityChange({ actorRole: "brand_admin", course: PRIVATE, readiness: unvetted, request: { action: "make-public", override: true } })).toMatchObject({ ok: false, status: 400 });
    const over = decideVisibilityChange({ actorRole: "brand_admin", course: PRIVATE, readiness: unvetted, request: { action: "make-public", override: true, reason: "Our curriculum lead signed off." } });
    expect(over).toMatchObject({ ok: true, audit: { actorRole: "brand_admin", overrodeReadiness: true, reason: "Our curriculum lead signed off." } });
  });

  it("makes a ready course public: publishes the row and sets visibility in one patch", () => {
    const d = decideVisibilityChange({ actorRole: "platform_owner", course: PRIVATE, readiness: ready, request: { action: "make-public" }, now: NOW });
    expect(d).toEqual({
      ok: true,
      changed: true,
      patch: { visibility: "public", isPublished: true, publishedAt: NOW },
      audit: {
        actorRole: "platform_owner",
        fromVisibility: "private",
        toVisibility: "public",
        fromPublished: false,
        toPublished: true,
        overrodeReadiness: false,
        reason: null,
        clearedHoldReason: null,
      },
    });
  });

  it("keeps an existing first-publish date", () => {
    const course = { ...PRIVATE, publishedAt: VETTED };
    const d = decideVisibilityChange({ actorRole: "platform_owner", course, readiness: ready, request: { action: "make-public" }, now: NOW });
    expect(d.ok && d.patch).toEqual({ visibility: "public", isPublished: true });
  });

  it("refuses a course that is not ready (409) and says why", () => {
    const d = decideVisibilityChange({ actorRole: "platform_owner", course: PRIVATE, readiness: unvetted, request: { action: "make-public" } });
    expect(d).toMatchObject({ ok: false, status: 409 });
    expect(!d.ok && d.error).toContain("Not vetted yet.");
  });

  it("refuses an override with no reason, or a reason too short to say anything (400)", () => {
    for (const reason of [undefined, "", "   ", "x".repeat(MIN_OVERRIDE_REASON - 1)]) {
      const d = decideVisibilityChange({ actorRole: "platform_owner", course: PRIVATE, readiness: unvetted, request: { action: "make-public", override: true, reason } });
      expect(d).toMatchObject({ ok: false, status: 400 });
    }
  });

  it("an override with a reason goes ahead and records that it overrode, and why", () => {
    const reason = "Reviewed in person with the co-author on 2026-10-27.";
    const d = decideVisibilityChange({ actorRole: "platform_owner", course: PRIVATE, readiness: unvetted, request: { action: "make-public", override: true, reason: `  ${reason} ` }, now: NOW });
    expect(d.ok).toBe(true);
    if (!d.ok) return;
    expect(d.patch).toEqual({ visibility: "public", isPublished: true, publishedAt: NOW });
    expect(d.audit).toMatchObject({ overrodeReadiness: true, reason, clearedHoldReason: null });
  });

  it("an override on a held course clears the hold and keeps its text in the audit row", () => {
    const d = decideVisibilityChange({
      actorRole: "platform_owner",
      course: { ...PRIVATE, publishHoldReason: "Private review copy" },
      readiness: held,
      request: { action: "make-public", override: true, reason: "The publisher granted permission in writing." },
      now: NOW,
    });
    expect(d.ok && d.patch).toEqual({ visibility: "public", isPublished: true, publishedAt: NOW, publishHoldReason: null });
    expect(d.ok && d.audit.clearedHoldReason).toBe("Private review copy");
  });

  it("an override tick on a READY course is not recorded as an override", () => {
    const d = decideVisibilityChange({ actorRole: "platform_owner", course: PRIVATE, readiness: ready, request: { action: "make-public", override: true, reason: "not needed here" } });
    expect(d.ok && d.audit.overrodeReadiness).toBe(false);
  });

  it("makes a course private: private and unpublished, reason optional", () => {
    const live = { visibility: "public", isPublished: true, publishedAt: VETTED, publishHoldReason: null };
    const d = decideVisibilityChange({ actorRole: "platform_owner", course: live, readiness: unvetted, request: { action: "make-private" } });
    expect(d).toMatchObject({
      ok: true,
      changed: true,
      patch: { visibility: "private", isPublished: false },
      audit: { fromVisibility: "public", toVisibility: "private", fromPublished: true, toPublished: false, overrodeReadiness: false, reason: null },
    });
  });

  it("reports no change when the course is already in the requested state", () => {
    expect(decideVisibilityChange({ actorRole: "platform_owner", course: PRIVATE, readiness: ready, request: { action: "make-private" } })).toMatchObject({ ok: true, changed: false });
    const live = { visibility: "public", isPublished: true, publishedAt: VETTED, publishHoldReason: null };
    expect(decideVisibilityChange({ actorRole: "platform_owner", course: live, readiness: ready, request: { action: "make-public" } })).toMatchObject({ ok: true, changed: false });
  });
});

describe("patchOpensPrivate (the course settings PATCH)", () => {
  const priv = { visibility: "private", isPublished: false };
  it("refuses moving a private course to any other visibility", () => {
    for (const visibility of ["public", "members", "scheduled"]) {
      expect(patchOpensPrivate(priv, { visibility })).toMatch(/Make public/);
    }
  });
  it("refuses publishing a private course", () => {
    expect(patchOpensPrivate(priv, { isPublished: true })).toMatch(/Make public/);
  });
  it("lets a save that repeats the private state through (the form sends every field)", () => {
    expect(patchOpensPrivate(priv, { visibility: "private", isPublished: false })).toBeNull();
    expect(patchOpensPrivate({ visibility: "private", isPublished: true }, { visibility: "private", isPublished: true })).toBeNull();
  });
  it("never blocks taking a course down, or edits to a course that is not private", () => {
    expect(patchOpensPrivate({ visibility: "public", isPublished: true }, { visibility: "private", isPublished: false })).toBeNull();
    expect(patchOpensPrivate({ visibility: "public", isPublished: false }, { isPublished: true })).toBeNull();
  });
});

describe("who runs a course: the school's brand_admin, except on an owner-only course (BAM 2026-10-29)", () => {
  const OWNER: CourseActor = { isOwner: true, isInstructor: false, isSchoolAdmin: true };
  const INSTRUCTOR: CourseActor = { isOwner: false, isInstructor: true, isSchoolAdmin: false };
  const SCHOOL_ADMIN: CourseActor = { isOwner: false, isInstructor: false, isSchoolAdmin: true };
  // A brand_admin of ANOTHER school is no admin of this one: their membership is read for this tenant.
  const STRANGER: CourseActor = { isOwner: false, isInstructor: false, isSchoolAdmin: false };
  const open = { ownerOnly: false, visibility: "public", publishHoldReason: null };
  const priv = { ...open, visibility: "private" };
  const held = { ...open, publishHoldReason: "Held for review" };
  const ownerOnly = { ...priv, ownerOnly: true };

  it("opens the workspace of a private, held or open course for its school's brand_admin", () => {
    for (const course of [open, priv, held]) {
      expect(workspaceAccess(SCHOOL_ADMIN, course)).toBe(true);
      expect(workspaceAccess(STRANGER, course)).toBe(false);
    }
  });
  it("keeps an owner-only course to the owner and its own instructor", () => {
    expect(workspaceAccess(OWNER, ownerOnly)).toBe(true);
    expect(workspaceAccess(INSTRUCTOR, ownerOnly)).toBe(true);
    expect(workspaceAccess(SCHOOL_ADMIN, ownerOnly)).toBe(false);
    expect(ownerOnlyBlocks(SCHOOL_ADMIN, ownerOnly)).toBe(true);
    expect(ownerOnlyBlocks(OWNER, ownerOnly)).toBe(false);
    expect(ownerOnlyBlocks(INSTRUCTOR, ownerOnly)).toBe(false);
    expect(ownerOnlyBlocks(SCHOOL_ADMIN, priv)).toBe(false);
  });
  it("exports: closed courses to the school's brand_admin, owner-only courses never, strangers not-found", () => {
    expect(exportAccess(SCHOOL_ADMIN, priv)).toBe("ok");
    expect(exportAccess(SCHOOL_ADMIN, held)).toBe("ok");
    expect(exportAccess(SCHOOL_ADMIN, open)).toBe("ok");
    expect(exportAccess(SCHOOL_ADMIN, ownerOnly)).toBe("not-found");
    expect(exportAccess(OWNER, ownerOnly)).toBe("ok");
    expect(exportAccess(INSTRUCTOR, ownerOnly)).toBe("ok");
    expect(exportAccess(STRANGER, priv)).toBe("not-found");
    expect(exportAccess(STRANGER, open)).toBe("forbidden");
  });
  it("gives the switch to the owner and the school's brand_admin, not the instructor, not on owner-only", () => {
    expect(visibilityActorRole(OWNER, priv)).toBe("platform_owner");
    expect(visibilityActorRole(OWNER, ownerOnly)).toBe("platform_owner");
    expect(visibilityActorRole(SCHOOL_ADMIN, priv)).toBe("brand_admin");
    expect(visibilityActorRole(SCHOOL_ADMIN, ownerOnly)).toBeNull();
    expect(visibilityActorRole(INSTRUCTOR, priv)).toBeNull();
    expect(visibilityActorRole(STRANGER, priv)).toBeNull();
  });
});
