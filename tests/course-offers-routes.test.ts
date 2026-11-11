import { beforeEach, describe, expect, it, vi } from "vitest";

/**
 * Course offers and existing-course requests, routes (BAM, 2026-11-10: "request a course should allow
 * teacher to choose from list of existing courses also, and approve assigned courses").
 *
 *   POST /api/teach/course-offers/[id] (the teacher answers)
 *     - signed out 401; another school's offer 404; another teacher 403; answered 409; expired 410;
 *     - accept re-runs the assignment rule as the admin who offered it, moves the course, emails the admin;
 *     - accept by someone who no longer teaches here 409; decline changes nothing on the course.
 *   DELETE /api/admin/course-offers/[id]: a teacher 403; the school's admin withdraws; twice 409.
 *   POST /api/teach/course-requests with kind existing:
 *     - another school's course 404; an owner-only course 404 to a teacher; your own course 400;
 *       asked already 409; otherwise the request is written for that course and the admins emailed.
 *   POST /api/admin/course-requests/[id] approving an existing-course request hands the course over
 *     (no draft created); a rule refusal (e.g. slug taken) refuses the approval.
 *
 * The real routes and rules run; the session, tenant, database half and mailer are mocked.
 */

const mocks = vi.hoisted(() => ({
  getSession: vi.fn(),
  getMembership: vi.fn(),
  isPlatformOwner: vi.fn(),
  getCourseById: vi.fn(),
  getCourseOffer: vi.fn(),
  acceptCourseOffer: vi.fn(),
  declineCourseOffer: vi.fn(),
  withdrawCourseOffer: vi.fn(),
  checkInstructorAssignment: vi.fn(),
  schoolRoleOf: vi.fn(),
  listSchoolAdminEmails: vi.fn(),
  createCourseRequest: vi.fn(),
  createExistingCourseRequest: vi.fn(),
  hasOpenExistingRequest: vi.fn(),
  listOwnCourseRequests: vi.fn(),
  getCourseRequest: vi.fn(),
  approveCourseRequest: vi.fn(),
  approveExistingCourseRequest: vi.fn(),
  declineCourseRequest: vi.fn(),
  getUsername: vi.fn(),
  ensureUsernameById: vi.fn(),
  sendCourseOfferDecisionEmail: vi.fn(),
  sendCourseRequestEmail: vi.fn(),
  sendCourseRequestDecisionEmail: vi.fn(),
}));

vi.mock("@/lib/session", () => ({ getSession: mocks.getSession, getMembership: mocks.getMembership, isPlatformOwner: mocks.isPlatformOwner }));
vi.mock("@/db/scoped", () => ({
  getScopedDb: async () => ({ tenantId: TENANT, tenant: { id: TENANT, slug: "school", name: "School", email: {} }, getCourseById: mocks.getCourseById }),
}));
vi.mock("@/db/queries/course-offers", () => ({
  getCourseOffer: mocks.getCourseOffer,
  acceptCourseOffer: mocks.acceptCourseOffer,
  declineCourseOffer: mocks.declineCourseOffer,
  withdrawCourseOffer: mocks.withdrawCourseOffer,
}));
vi.mock("@/db/queries/course-instructor", () => ({ checkInstructorAssignment: mocks.checkInstructorAssignment, schoolRoleOf: mocks.schoolRoleOf }));
vi.mock("@/db/queries/course-requests", () => ({
  listSchoolAdminEmails: mocks.listSchoolAdminEmails,
  createCourseRequest: mocks.createCourseRequest,
  createExistingCourseRequest: mocks.createExistingCourseRequest,
  hasOpenExistingRequest: mocks.hasOpenExistingRequest,
  listOwnCourseRequests: mocks.listOwnCourseRequests,
  getCourseRequest: mocks.getCourseRequest,
  approveCourseRequest: mocks.approveCourseRequest,
  approveExistingCourseRequest: mocks.approveExistingCourseRequest,
  declineCourseRequest: mocks.declineCourseRequest,
}));
vi.mock("@/db/queries/authoring", () => ({ getUsername: mocks.getUsername, ensureUsernameById: mocks.ensureUsernameById }));
vi.mock("@/lib/emails", () => ({
  pricingInquiryRecipient: () => null,
  sendCourseOfferDecisionEmail: mocks.sendCourseOfferDecisionEmail,
  sendCourseRequestEmail: mocks.sendCourseRequestEmail,
  sendCourseRequestDecisionEmail: mocks.sendCourseRequestDecisionEmail,
}));

import { POST as answerOffer } from "@/app/api/teach/course-offers/[id]/route";
import { DELETE as withdrawOffer } from "@/app/api/admin/course-offers/[id]/route";
import { POST as createRequest } from "@/app/api/teach/course-requests/route";
import { POST as decideRequest } from "@/app/api/admin/course-requests/[id]/route";

const TENANT = "tenant-1";
const OWNER = "owner-1";
const TEACHER = "teacher-1";
const OFFER_ID = "11111111-1111-4111-8111-111111111111";
const COURSE_ID = "22222222-2222-4222-8222-222222222222";

const OFFER = {
  id: OFFER_ID,
  tenantId: TENANT,
  courseId: COURSE_ID,
  teacherUserId: TEACHER,
  fromInstructorId: "old-teacher",
  offeredByUserId: "admin-1",
  offeredByRole: "brand_admin",
  status: "offered",
  decisionNote: null,
  decidedAt: null,
  expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  createdAt: new Date(),
  updatedAt: new Date(),
  courseTitle: "Soil Science",
  courseSlug: "soil-science",
  teacherLabel: "T Rivera",
  teacherEmail: "teacher@example.com",
  offeredByLabel: "A Admin",
  offeredByEmail: "admin@example.com",
};
const COURSE = { id: COURSE_ID, tenantId: TENANT, instructorId: "old-teacher", title: "Soil Science", slug: "soil-science", ownerOnly: false };

function signIn(userId: string | null, role: "brand_admin" | "instructor" | "learner" | null = null) {
  if (!userId) {
    mocks.getSession.mockResolvedValue(null);
    return;
  }
  mocks.getSession.mockResolvedValue({ user: { id: userId, email: `${userId}@example.com`, name: userId === TEACHER ? "T Rivera" : null } });
  mocks.isPlatformOwner.mockImplementation(async (uid: string) => uid === OWNER);
  mocks.getMembership.mockImplementation(async (uid: string, tenantId: string) => (uid === userId && tenantId === TENANT ? role : null));
  mocks.schoolRoleOf.mockImplementation(async (tenantId: string, uid: string) => (uid === userId && tenantId === TENANT ? role : null));
}

const req = (path: string, method: string, body?: unknown) =>
  new Request(`http://school.test${path}`, { method, body: body === undefined ? undefined : JSON.stringify(body), headers: { host: "school.test" } });
const answer = (body: unknown, id = OFFER_ID) => answerOffer(req(`/api/teach/course-offers/${id}`, "POST", body), { params: Promise.resolve({ id }) });

beforeEach(() => {
  vi.clearAllMocks();
  signIn(TEACHER, "instructor");
  mocks.getCourseOffer.mockResolvedValue({ ...OFFER });
  mocks.getCourseById.mockResolvedValue({ ...COURSE });
  mocks.checkInstructorAssignment.mockResolvedValue({ ok: true, changed: true, actorRole: "brand_admin" });
  mocks.acceptCourseOffer.mockResolvedValue({ offer: { ...OFFER, status: "accepted" }, course: { ...COURSE, instructorId: TEACHER }, fromInstructorId: "old-teacher" });
  mocks.declineCourseOffer.mockResolvedValue({ ...OFFER, status: "declined" });
  mocks.listSchoolAdminEmails.mockResolvedValue(["admin@example.com"]);
  mocks.hasOpenExistingRequest.mockResolvedValue(false);
  mocks.createExistingCourseRequest.mockImplementation(async (tenantId: string, requesterUserId: string, input: { course: { id: string; title: string }; reason: string }) => ({
    id: "req-9",
    tenantId,
    requesterUserId,
    kind: "existing",
    requestedCourseId: input.course.id,
    title: input.course.title,
    description: "",
    reason: input.reason,
    briefUrl: null,
  }));
  mocks.getUsername.mockResolvedValue("old-teacher");
});

describe("POST /api/teach/course-offers/[id]", () => {
  it("401 signed out; 404 for an offer that does not resolve in this school, or a malformed id", async () => {
    signIn(null);
    expect((await answer({ action: "accept" })).status).toBe(401);
    signIn(TEACHER, "instructor");
    mocks.getCourseOffer.mockResolvedValueOnce(null);
    expect((await answer({ action: "accept" })).status).toBe(404);
    expect((await answer({ action: "accept" }, "not-a-uuid")).status).toBe(404);
    expect(mocks.acceptCourseOffer).not.toHaveBeenCalled();
  });

  it("another teacher 403; an answered offer 409; an expired one 410; nothing moves", async () => {
    signIn("teacher-2", "instructor");
    expect((await answer({ action: "accept" })).status).toBe(403);
    signIn(TEACHER, "instructor");
    mocks.getCourseOffer.mockResolvedValueOnce({ ...OFFER, status: "declined" });
    expect((await answer({ action: "accept" })).status).toBe(409);
    mocks.getCourseOffer.mockResolvedValueOnce({ ...OFFER, expiresAt: new Date(Date.now() - 1000) });
    expect((await answer({ action: "accept" })).status).toBe(410);
    expect(mocks.acceptCourseOffer).not.toHaveBeenCalled();
  });

  it("accept re-runs the assignment rule as the admin who offered, moves the course and emails that admin", async () => {
    const res = await answer({ action: "accept", note: " Happy to. " });
    expect(res.status).toBe(200);
    expect(await res.json()).toMatchObject({ ok: true, status: "accepted", courseUrl: "/teach/soil-science" });
    expect(mocks.checkInstructorAssignment).toHaveBeenCalledWith(
      expect.objectContaining({ newInstructorId: TEACHER, actor: { userId: "admin-1", isOwner: false, isSchoolAdmin: true } }),
    );
    expect(mocks.acceptCourseOffer).toHaveBeenCalledWith(expect.objectContaining({ tenantId: TENANT, note: "Happy to." }));
    expect(mocks.sendCourseOfferDecisionEmail).toHaveBeenCalledWith(expect.objectContaining({ to: "admin@example.com", decision: "accepted", note: "Happy to." }));
  });

  it("accept is refused when the rule refuses (slug taken 409) or the teacher no longer teaches here (409)", async () => {
    mocks.checkInstructorAssignment.mockResolvedValueOnce({ ok: false, status: 409, error: "That teacher already has a course at this URL." });
    expect((await answer({ action: "accept" })).status).toBe(409);
    signIn(TEACHER, "learner");
    expect((await answer({ action: "accept" })).status).toBe(409);
    expect(mocks.acceptCourseOffer).not.toHaveBeenCalled();
  });

  it("decline changes nothing on the course, works for a former teacher, and tells the admin", async () => {
    signIn(TEACHER, "learner");
    const res = await answer({ action: "decline" });
    expect(res.status).toBe(200);
    expect(mocks.acceptCourseOffer).not.toHaveBeenCalled();
    expect(mocks.checkInstructorAssignment).not.toHaveBeenCalled();
    expect(mocks.sendCourseOfferDecisionEmail).toHaveBeenCalledWith(expect.objectContaining({ decision: "declined" }));
  });

  it("a lost race answers 409, and a failed email never fails the answer", async () => {
    mocks.acceptCourseOffer.mockResolvedValueOnce(null);
    expect((await answer({ action: "accept" })).status).toBe(409);
    mocks.sendCourseOfferDecisionEmail.mockRejectedValueOnce(new Error("down"));
    expect((await answer({ action: "decline" })).status).toBe(200);
  });
});

describe("DELETE /api/admin/course-offers/[id]", () => {
  const del = () => withdrawOffer(req(`/api/admin/course-offers/${OFFER_ID}`, "DELETE"), { params: Promise.resolve({ id: OFFER_ID }) });

  it("a teacher may not withdraw; the school's admin may, once", async () => {
    expect((await del()).status).toBe(403);
    signIn("admin-1", "brand_admin");
    mocks.withdrawCourseOffer.mockResolvedValueOnce(true);
    expect((await del()).status).toBe(200);
    mocks.withdrawCourseOffer.mockResolvedValueOnce(false);
    expect((await del()).status).toBe(409);
  });
});

describe("POST /api/teach/course-requests, kind existing", () => {
  const ask = (body: unknown) => createRequest(req("/api/teach/course-requests", "POST", body));
  const body = { kind: "existing", courseId: COURSE_ID, reason: "I teach this subject every spring." };

  it("404 for a course that is not this school's, or owner-only to a teacher; 400 for your own course", async () => {
    mocks.getCourseById.mockResolvedValueOnce(null);
    expect((await ask(body)).status).toBe(404);
    mocks.getCourseById.mockResolvedValueOnce({ ...COURSE, ownerOnly: true });
    expect((await ask(body)).status).toBe(404);
    mocks.getCourseById.mockResolvedValueOnce({ ...COURSE, instructorId: TEACHER });
    expect((await ask(body)).status).toBe(400);
    expect(mocks.createExistingCourseRequest).not.toHaveBeenCalled();
  });

  it("409 when the teacher already asked and has no answer; 400 for a missing course id", async () => {
    mocks.hasOpenExistingRequest.mockResolvedValueOnce(true);
    expect((await ask(body)).status).toBe(409);
    const bad = await ask({ kind: "existing", reason: "I teach this subject every spring." });
    expect(bad.status).toBe(400);
    expect((await bad.json()).error).toBe("Pick a course from the list.");
  });

  it("writes the request for that course on this school and emails the admins, saying it is an existing course", async () => {
    const res = await ask(body);
    expect(res.status).toBe(201);
    expect(mocks.createExistingCourseRequest).toHaveBeenCalledWith(TENANT, TEACHER, { course: expect.objectContaining({ id: COURSE_ID }), reason: body.reason });
    expect(mocks.createCourseRequest).not.toHaveBeenCalled();
    expect(mocks.sendCourseRequestEmail).toHaveBeenCalledWith(expect.objectContaining({ kind: "existing", title: "Soil Science", currentInstructor: "@old-teacher" }));
  });

  it("a learner may not ask (403)", async () => {
    signIn("learner-1", "learner");
    expect((await ask(body)).status).toBe(403);
  });
});

describe("POST /api/admin/course-requests/[id], an existing-course request", () => {
  const REQ = {
    id: "req-9",
    tenantId: TENANT,
    requesterUserId: TEACHER,
    kind: "existing",
    requestedCourseId: COURSE_ID,
    title: "Soil Science",
    description: "",
    reason: "I teach this subject every spring.",
    briefUrl: null,
    status: "requested",
    decisionNote: null,
    decidedByUserId: null,
    decidedAt: null,
    courseId: null,
    requesterEmail: "teacher@example.com",
  };
  const decide = (b: unknown) => decideRequest(req("/api/admin/course-requests/req-9", "POST", b), { params: Promise.resolve({ id: "req-9" }) });

  beforeEach(() => {
    signIn("admin-1", "brand_admin");
    mocks.schoolRoleOf.mockImplementation(async (_t: string, uid: string) => (uid === TEACHER ? "instructor" : uid === "admin-1" ? "brand_admin" : null));
    mocks.getCourseRequest.mockResolvedValue({ ...REQ });
    mocks.approveExistingCourseRequest.mockResolvedValue({ request: { ...REQ, status: "approved", courseId: COURSE_ID }, course: { ...COURSE, instructorId: TEACHER } });
  });

  it("approving hands the course to the teacher through the assignment rule, creating no draft", async () => {
    const res = await decide({ action: "approve" });
    expect(res.status).toBe(200);
    expect(mocks.checkInstructorAssignment).toHaveBeenCalledWith(expect.objectContaining({ newInstructorId: TEACHER, actor: { userId: "admin-1", isOwner: false, isSchoolAdmin: true } }));
    expect(mocks.approveExistingCourseRequest).toHaveBeenCalledWith(expect.objectContaining({ deciderUserId: "admin-1", deciderRole: "brand_admin" }));
    expect(mocks.approveCourseRequest).not.toHaveBeenCalled();
    expect(mocks.sendCourseRequestDecisionEmail).toHaveBeenCalledWith(expect.objectContaining({ decision: "approved", kind: "existing" }));
  });

  it("a rule refusal refuses the approval, and a vanished course answers 409", async () => {
    mocks.checkInstructorAssignment.mockResolvedValueOnce({ ok: false, status: 409, error: "That teacher already has a course at this URL." });
    expect((await decide({ action: "approve" })).status).toBe(409);
    mocks.getCourseById.mockResolvedValueOnce(null);
    expect((await decide({ action: "approve" })).status).toBe(409);
    expect(mocks.approveExistingCourseRequest).not.toHaveBeenCalled();
  });

  it("declining works as before, with a note", async () => {
    mocks.declineCourseRequest.mockResolvedValueOnce({ ...REQ, status: "declined" });
    expect((await decide({ action: "decline", note: "Ms Lee keeps teaching it this year." })).status).toBe(200);
    expect(mocks.approveExistingCourseRequest).not.toHaveBeenCalled();
  });
});
