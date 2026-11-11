import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  assignmentIsOffer,
  decideOfferResponse,
  OFFER_ALREADY_ANSWERED,
  OFFER_EXPIRED,
  OFFER_NO_LONGER_TEACHER,
  OFFER_NOT_YOURS,
  OFFER_TTL_DAYS,
  offerExpiresAt,
  OfferResponseInput,
} from "@/lib/course-offers";
import { CourseRequestInput, ExistingCourseRequestInput, isExistingCourseRequestBody, requestStatusLabel } from "@/lib/course-requests";

/**
 * Course offers and existing-course requests as pure rules (BAM, 2026-11-10: "request a course should
 * allow teacher to choose from list of existing courses also, and approve assigned courses"). The routes
 * are tested in tests/course-offers-routes.test.ts.
 */

const NOW = new Date("2026-11-10T12:00:00Z");
const open = { status: "offered", teacherUserId: "t1", expiresAt: offerExpiresAt(NOW) };

describe("offerExpiresAt", () => {
  it(`is ${OFFER_TTL_DAYS} days after the offer`, () => {
    expect(OFFER_TTL_DAYS).toBe(14);
    expect(offerExpiresAt(NOW).toISOString()).toBe("2026-11-24T12:00:00.000Z");
  });
});

describe("decideOfferResponse", () => {
  const decide = (over: Partial<Parameters<typeof decideOfferResponse>[0]> = {}) =>
    decideOfferResponse({ offer: open, actorUserId: "t1", action: "accept", teacherCanTeach: true, now: NOW, ...over });

  it("lets the teacher it was made to accept or decline an open offer", () => {
    expect(decide()).toEqual({ ok: true });
    expect(decide({ action: "decline" })).toEqual({ ok: true });
  });

  it("refuses anyone else (403), an answered or withdrawn offer (409) and an expired one (410)", () => {
    expect(decide({ actorUserId: "t2" })).toEqual({ ok: false, status: 403, error: OFFER_NOT_YOURS });
    for (const status of ["accepted", "declined", "withdrawn", "expired"]) {
      expect(decide({ offer: { ...open, status } })).toEqual({ ok: false, status: 409, error: OFFER_ALREADY_ANSWERED });
    }
    expect(decide({ now: new Date(open.expiresAt.getTime() + 1) })).toEqual({ ok: false, status: 410, error: OFFER_EXPIRED });
    expect(decide({ now: open.expiresAt })).toMatchObject({ ok: false, status: 410 });
  });

  it("an accept needs the teacher to still teach on the school; a decline never does", () => {
    expect(decide({ teacherCanTeach: false })).toEqual({ ok: false, status: 409, error: OFFER_NO_LONGER_TEACHER });
    expect(decide({ teacherCanTeach: false, action: "decline" })).toEqual({ ok: true });
  });

  it("caps the note", () => {
    expect(OfferResponseInput.safeParse({ action: "accept", note: "x".repeat(1001) }).success).toBe(false);
    expect(OfferResponseInput.safeParse({ action: "maybe" }).success).toBe(false);
  });
});

describe("assignmentIsOffer", () => {
  it("a school admin handing a course to someone else is always an offer, from either page", () => {
    expect(assignmentIsOffer({ actorUserId: "a", targetUserId: "t", actorIsOwner: false, source: "admin-users" })).toBe(true);
    expect(assignmentIsOffer({ actorUserId: "a", targetUserId: "t", actorIsOwner: false, source: "course-settings" })).toBe(true);
  });

  it("the owner's course-settings picker is immediate; the owner's Users-page assignment is an offer", () => {
    expect(assignmentIsOffer({ actorUserId: "o", targetUserId: "t", actorIsOwner: true, source: "course-settings" })).toBe(false);
    expect(assignmentIsOffer({ actorUserId: "o", targetUserId: "t", actorIsOwner: true, source: "admin-users" })).toBe(true);
  });

  it("handing a course to yourself is never an offer", () => {
    expect(assignmentIsOffer({ actorUserId: "a", targetUserId: "a", actorIsOwner: false, source: "admin-users" })).toBe(false);
  });
});

describe("existing-course requests", () => {
  it("a body with kind existing is validated by its own schema, with its own messages", () => {
    expect(isExistingCourseRequestBody({ kind: "existing" })).toBe(true);
    expect(isExistingCourseRequestBody({ title: "x" })).toBe(false);
    expect(isExistingCourseRequestBody(null)).toBe(false);
    const bad = ExistingCourseRequestInput.safeParse({ kind: "existing", courseId: "nope", reason: "I know this subject well." });
    expect(bad.success).toBe(false);
    if (!bad.success) expect(bad.error.issues[0]?.message).toBe("Pick a course from the list.");
    const good = ExistingCourseRequestInput.safeParse({ kind: "existing", courseId: "00000000-0000-4000-8000-000000000001", reason: "  I know this subject well. " });
    expect(good.success && good.data.reason).toBe("I know this subject well.");
  });

  it("a new-course body still parses with or without kind new", () => {
    const body = { title: "Soil", description: "Ten lessons on soil.", reason: "Our garden club.", briefUrl: "" };
    expect(CourseRequestInput.safeParse(body).success).toBe(true);
    expect(CourseRequestInput.safeParse({ ...body, kind: "new" }).success).toBe(true);
  });

  it("an approved existing-course request reads as handed over, not as a draft", () => {
    expect(requestStatusLabel("approved", "existing")).toMatch(/you teach this course now/);
    expect(requestStatusLabel("approved", "new")).toMatch(/draft/);
    expect(requestStatusLabel("declined", "existing")).toBe("Declined");
  });
});

describe("migration 0084_course_offers_and_existing_requests", () => {
  const sql = readFileSync(join(import.meta.dirname, "..", "src/db/migrations/0084_course_offers_and_existing_requests.sql"), "utf8");

  it("is additive: a new table and two new course_requests columns, the old rows reading as kind new", () => {
    expect(sql).toMatch(/CREATE TABLE "course_offers"/);
    expect(sql).toMatch(/ALTER TABLE "course_requests" ADD COLUMN "kind" text DEFAULT 'new' NOT NULL/);
    expect(sql).toMatch(/ALTER TABLE "course_requests" ADD COLUMN "requested_course_id" uuid;/);
    expect(sql).not.toMatch(/DROP |ALTER COLUMN|RENAME/);
  });

  it("keeps the kind honest and allows one open offer per course", () => {
    expect(sql).toMatch(/"kind" = 'new' and "course_requests"\."requested_course_id" is null\) or \("course_requests"\."kind" = 'existing' and "course_requests"\."requested_course_id" is not null/);
    expect(sql).toMatch(/CREATE UNIQUE INDEX "course_offers_open_course_uq" ON "course_offers" USING btree \("course_id"\) WHERE "course_offers"\."status" = 'offered'/);
    // A deleted course takes its existing-course requests with it, so the check can never block a delete.
    expect(sql).toMatch(/"requested_course_id"\) REFERENCES "public"\."courses"\("id"\) ON DELETE cascade/);
  });
});
