import { describe, expect, it } from "vitest";
import {
  COURSE_REQUEST_ALREADY_DECIDED,
  COURSE_REQUEST_DECIDE_FORBIDDEN,
  COURSE_REQUEST_NOTE_REQUIRED,
  COURSE_REQUEST_NO_LONGER_TEACHER,
  CourseRequestDecisionInput,
  CourseRequestInput,
  REQUEST_STATUS_LABELS,
  decideCourseRequestAction,
} from "@/lib/course-requests";

// Course requests (BAM, 2026-11-10: "teachers should be able to submit or request courses"): the pure
// half. The routes are exercised in tests/course-requests-routes.test.ts.

const valid = { title: "Soil Science for Grade 5", description: "Ten lessons on soil, roots and compost.", reason: "Our garden club needs it." };

describe("CourseRequestInput", () => {
  it("trims, and turns an empty brief link into null", () => {
    const r = CourseRequestInput.parse({ ...valid, title: "  Soil Science  ", briefUrl: "  " });
    expect(r.title).toBe("Soil Science");
    expect(r.briefUrl).toBeNull();
  });

  it("accepts a full URL as the brief and rejects a bare word", () => {
    expect(CourseRequestInput.parse({ ...valid, briefUrl: "https://docs.example.test/brief" }).briefUrl).toBe("https://docs.example.test/brief");
    expect(CourseRequestInput.safeParse({ ...valid, briefUrl: "my brief" }).success).toBe(false);
  });

  it("wants a title, a description and a reason with some substance", () => {
    expect(CourseRequestInput.safeParse({ ...valid, title: "ab" }).success).toBe(false);
    expect(CourseRequestInput.safeParse({ ...valid, description: "short" }).success).toBe(false);
    expect(CourseRequestInput.safeParse({ ...valid, reason: "" }).success).toBe(false);
    expect(CourseRequestInput.safeParse(valid).success).toBe(true);
  });

  it("the decision input is approve or decline with an optional note", () => {
    expect(CourseRequestDecisionInput.safeParse({ action: "approve" }).success).toBe(true);
    expect(CourseRequestDecisionInput.safeParse({ action: "decline", note: "Not this term." }).success).toBe(true);
    expect(CourseRequestDecisionInput.safeParse({ action: "delete" }).success).toBe(false);
  });
});

describe("decideCourseRequestAction", () => {
  const admin = { isOwner: false, isSchoolAdmin: true };
  const owner = { isOwner: true, isSchoolAdmin: false };
  const nobody = { isOwner: false, isSchoolAdmin: false };
  const open = { status: "requested" };

  it("this school's admin and the owner may approve or decline", () => {
    expect(decideCourseRequestAction({ actor: admin, request: open, action: "approve", note: null, requesterCanTeach: true })).toEqual({ ok: true });
    expect(decideCourseRequestAction({ actor: owner, request: open, action: "decline", note: "We already have this course.", requesterCanTeach: true })).toEqual({ ok: true });
  });

  it("refuses a learner, a teacher (the requester included) and another school's admin", () => {
    expect(decideCourseRequestAction({ actor: nobody, request: open, action: "approve", note: null, requesterCanTeach: true })).toEqual({
      ok: false,
      status: 403,
      error: COURSE_REQUEST_DECIDE_FORBIDDEN,
    });
  });

  it("a request is decided once", () => {
    expect(decideCourseRequestAction({ actor: owner, request: { status: "approved" }, action: "decline", note: "Changed my mind.", requesterCanTeach: true })).toEqual({
      ok: false,
      status: 409,
      error: COURSE_REQUEST_ALREADY_DECIDED,
    });
  });

  it("a decline needs a note the teacher can act on", () => {
    expect(decideCourseRequestAction({ actor: admin, request: open, action: "decline", note: null, requesterCanTeach: true })).toEqual({ ok: false, status: 400, error: COURSE_REQUEST_NOTE_REQUIRED });
    expect(decideCourseRequestAction({ actor: admin, request: open, action: "decline", note: "No.", requesterCanTeach: true })).toMatchObject({ status: 400 });
  });

  it("an approval needs a requester who can still teach here", () => {
    expect(decideCourseRequestAction({ actor: admin, request: open, action: "approve", note: null, requesterCanTeach: false })).toEqual({
      ok: false,
      status: 409,
      error: COURSE_REQUEST_NO_LONGER_TEACHER,
    });
  });

  it("every status has a label a teacher can read", () => {
    expect(Object.keys(REQUEST_STATUS_LABELS).sort()).toEqual(["approved", "declined", "requested"]);
  });
});
