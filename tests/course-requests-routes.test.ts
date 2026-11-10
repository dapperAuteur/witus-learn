import { beforeEach, describe, expect, it, vi } from "vitest";

/**
 * Course requests (BAM, 2026-11-10: "teachers should be able to submit or request courses").
 *
 *   POST /api/teach/course-requests (a teacher asks)
 *     - signed out 401; a learner 403; a teacher of ANOTHER school (no role on this one) 403;
 *     - a teacher of this school: the row is written on this tenant for this user, the school's admins
 *       are emailed (best-effort: a failed email never fails the request), 201;
 *     - a bad body 400 and nothing written.
 *
 *   POST /api/admin/course-requests/[id] (the school decides)
 *     - signed out 401; another school's request 404 (it does not resolve in this tenant);
 *     - a learner, the requesting teacher and another school's admin 403, nothing written;
 *     - this school's brand_admin approves: a draft course is created for the requester and the teacher
 *       is emailed; the owner declines with a note; a decline without a note 400; decided twice 409;
 *       an approval for someone who no longer teaches here 409.
 *
 * The real routes and the real rule run; the session, membership, owner flag, the tenant-scoped
 * reads and writes, and the mailer are mocked.
 */

const mocks = vi.hoisted(() => ({
  getSession: vi.fn(),
  getMembership: vi.fn(),
  isPlatformOwner: vi.fn(),
  createCourseRequest: vi.fn(),
  listOwnCourseRequests: vi.fn(),
  listSchoolAdminEmails: vi.fn(),
  getCourseRequest: vi.fn(),
  approveCourseRequest: vi.fn(),
  declineCourseRequest: vi.fn(),
  schoolRoleOf: vi.fn(),
  ensureUsernameById: vi.fn(),
  sendCourseRequestEmail: vi.fn(),
  sendCourseRequestDecisionEmail: vi.fn(),
}));

vi.mock("@/lib/session", () => ({
  getSession: mocks.getSession,
  getMembership: mocks.getMembership,
  isPlatformOwner: mocks.isPlatformOwner,
}));
vi.mock("@/db/scoped", () => ({
  getScopedDb: async () => ({ tenantId: TENANT, tenant: { id: TENANT, slug: "school", name: "School", email: {} } }),
}));
vi.mock("@/db/queries/course-requests", () => ({
  createCourseRequest: mocks.createCourseRequest,
  listOwnCourseRequests: mocks.listOwnCourseRequests,
  listSchoolAdminEmails: mocks.listSchoolAdminEmails,
  getCourseRequest: mocks.getCourseRequest,
  approveCourseRequest: mocks.approveCourseRequest,
  declineCourseRequest: mocks.declineCourseRequest,
}));
vi.mock("@/db/queries/course-instructor", () => ({ schoolRoleOf: mocks.schoolRoleOf }));
vi.mock("@/db/queries/authoring", () => ({ ensureUsernameById: mocks.ensureUsernameById }));
vi.mock("@/lib/emails", () => ({
  pricingInquiryRecipient: () => null,
  sendCourseRequestEmail: mocks.sendCourseRequestEmail,
  sendCourseRequestDecisionEmail: mocks.sendCourseRequestDecisionEmail,
}));

import { POST as createRequest } from "@/app/api/teach/course-requests/route";
import { POST as decide } from "@/app/api/admin/course-requests/[id]/route";

const TENANT = "tenant-1";
const OWNER = "owner-1";
const TEACHER = "teacher-1";
const REQUEST = {
  id: "req-1",
  tenantId: TENANT,
  requesterUserId: TEACHER,
  title: "Soil Science for Grade 5",
  description: "Ten lessons on soil, roots and compost.",
  reason: "Our garden club needs it.",
  briefUrl: null,
  status: "requested",
  decisionNote: null,
  decidedByUserId: null,
  decidedAt: null,
  courseId: null,
  createdAt: new Date("2026-11-10T00:00:00Z"),
  updatedAt: new Date("2026-11-10T00:00:00Z"),
  requesterName: "T Rivera",
  requesterEmail: "teacher@example.com",
  requesterUsername: null,
  courseSlug: null,
};

type Who = "owner" | "teacher" | "brand_admin" | "other_school_admin" | "learner";
function as(who: Who | null) {
  if (!who) {
    mocks.getSession.mockResolvedValue(null);
    return;
  }
  const id = who === "owner" ? OWNER : who === "teacher" ? TEACHER : `${who}-1`;
  mocks.getSession.mockResolvedValue({ user: { id, email: `${who}@example.com`, name: who === "teacher" ? "T Rivera" : null } });
  mocks.isPlatformOwner.mockImplementation(async (uid: string) => uid === OWNER);
  mocks.getMembership.mockImplementation(async (_uid: string, tenantId: string) => {
    if (who === "brand_admin") return tenantId === TENANT ? "brand_admin" : null;
    if (who === "other_school_admin") return tenantId === "tenant-2" ? "brand_admin" : null;
    if (who === "learner") return "learner";
    if (who === "teacher") return tenantId === TENANT ? "instructor" : null;
    return null;
  });
}

const body = { title: REQUEST.title, description: REQUEST.description, reason: REQUEST.reason, briefUrl: "" };
const ask = (b: unknown) =>
  createRequest(new Request("http://school.test/api/teach/course-requests", { method: "POST", body: JSON.stringify(b), headers: { host: "school.test" } }));
const judge = (b: unknown) =>
  decide(new Request("http://school.test/api/admin/course-requests/req-1", { method: "POST", body: JSON.stringify(b), headers: { host: "school.test" } }), {
    params: Promise.resolve({ id: "req-1" }),
  });

beforeEach(() => {
  vi.clearAllMocks();
  as("teacher");
  mocks.createCourseRequest.mockImplementation(async (tenantId: string, requesterUserId: string, input: object) => ({ ...REQUEST, tenantId, requesterUserId, ...input }));
  mocks.listSchoolAdminEmails.mockResolvedValue(["admin@example.com"]);
  mocks.getCourseRequest.mockResolvedValue({ ...REQUEST });
  mocks.schoolRoleOf.mockResolvedValue("instructor");
  mocks.ensureUsernameById.mockResolvedValue("trivera");
  mocks.approveCourseRequest.mockImplementation(async (input: { request: typeof REQUEST; note: string | null }) => ({
    course: { id: "course-9", slug: "soil-science-for-grade-5", instructorId: input.request.requesterUserId },
    request: { ...input.request, status: "approved", decisionNote: input.note, courseId: "course-9" },
  }));
  mocks.declineCourseRequest.mockImplementation(async (input: { note: string }) => ({ ...REQUEST, status: "declined", decisionNote: input.note }));
  mocks.sendCourseRequestEmail.mockResolvedValue(undefined);
  mocks.sendCourseRequestDecisionEmail.mockResolvedValue(undefined);
});

describe("POST /api/teach/course-requests", () => {
  it("401s signed out, 403s a learner and a teacher of another school; nothing is written", async () => {
    as(null);
    expect((await ask(body)).status).toBe(401);
    as("learner");
    expect((await ask(body)).status).toBe(403);
    as("other_school_admin");
    expect((await ask(body)).status).toBe(403);
    expect(mocks.createCourseRequest).not.toHaveBeenCalled();
  });

  it("a teacher of this school: the request is written on this tenant for this user and the admins are emailed", async () => {
    const res = await ask(body);
    expect(res.status).toBe(201);
    expect(mocks.createCourseRequest).toHaveBeenCalledWith(TENANT, TEACHER, expect.objectContaining({ title: REQUEST.title, briefUrl: null }));
    expect(mocks.sendCourseRequestEmail).toHaveBeenCalledTimes(1);
    expect(mocks.sendCourseRequestEmail.mock.calls[0]![0]).toMatchObject({
      to: "admin@example.com",
      teacherEmail: "teacher@example.com",
      title: REQUEST.title,
      adminUrl: "https://school.test/admin/users#course-requests",
    });
    expect(await res.json()).toMatchObject({ notified: 1, request: { title: REQUEST.title } });
  });

  it("this school's brand_admin and the owner may ask too (they teach here)", async () => {
    as("brand_admin");
    expect((await ask(body)).status).toBe(201);
    as("owner");
    expect((await ask(body)).status).toBe(201);
  });

  it("a failed email never fails the request", async () => {
    mocks.sendCourseRequestEmail.mockRejectedValue(new Error("mailgun down"));
    const res = await ask(body);
    expect(res.status).toBe(201);
    expect(await res.json()).toMatchObject({ notified: 0 });
  });

  it("400s a bad body and writes nothing", async () => {
    expect((await ask({ ...body, title: "ab" })).status).toBe(400);
    expect((await ask({ ...body, briefUrl: "not a url" })).status).toBe(400);
    expect(mocks.createCourseRequest).not.toHaveBeenCalled();
  });
});

describe("POST /api/admin/course-requests/[id]", () => {
  it("401s signed out and 404s a request that does not resolve in this school", async () => {
    as(null);
    expect((await judge({ action: "approve" })).status).toBe(401);
    as("brand_admin");
    mocks.getCourseRequest.mockResolvedValue(null);
    expect((await judge({ action: "approve" })).status).toBe(404);
    expect(mocks.approveCourseRequest).not.toHaveBeenCalled();
  });

  it("403s a learner, the requesting teacher, and a brand_admin of another school; nothing is written", async () => {
    for (const who of ["learner", "teacher", "other_school_admin"] as Who[]) {
      as(who);
      expect((await judge({ action: "approve" })).status, who).toBe(403);
      expect((await judge({ action: "decline", note: "Not this term, sorry." })).status, who).toBe(403);
    }
    expect(mocks.approveCourseRequest).not.toHaveBeenCalled();
    expect(mocks.declineCourseRequest).not.toHaveBeenCalled();
    expect(mocks.sendCourseRequestDecisionEmail).not.toHaveBeenCalled();
  });

  it("this school's brand_admin approves: the draft course is created for the requester and the teacher is told", async () => {
    as("brand_admin");
    const res = await judge({ action: "approve", note: "Go ahead." });
    expect(res.status).toBe(200);
    expect(mocks.ensureUsernameById).toHaveBeenCalledWith(TEACHER);
    expect(mocks.approveCourseRequest).toHaveBeenCalledWith(
      expect.objectContaining({ tenantId: TENANT, deciderUserId: "brand_admin-1", note: "Go ahead.", request: expect.objectContaining({ requesterUserId: TEACHER }) }),
    );
    expect(mocks.sendCourseRequestDecisionEmail.mock.calls[0]![0]).toMatchObject({
      to: "teacher@example.com",
      decision: "approved",
      courseUrl: "https://school.test/teach/soil-science-for-grade-5",
    });
    expect(await res.json()).toMatchObject({ request: { status: "approved", courseId: "course-9" } });
  });

  it("the owner declines with a note; a decline without a note is 400", async () => {
    as("owner");
    expect((await judge({ action: "decline", note: "short" })).status).toBe(400);
    expect(mocks.declineCourseRequest).not.toHaveBeenCalled();
    const res = await judge({ action: "decline", note: "We already have a soil unit in Grade 4." });
    expect(res.status).toBe(200);
    expect(mocks.declineCourseRequest).toHaveBeenCalledWith(expect.objectContaining({ tenantId: TENANT, requestId: "req-1", deciderUserId: OWNER }));
    expect(mocks.sendCourseRequestDecisionEmail.mock.calls[0]![0]).toMatchObject({ decision: "declined", note: "We already have a soil unit in Grade 4.", courseUrl: null });
  });

  it("a decided request is 409, and so is approving for someone who no longer teaches here", async () => {
    as("brand_admin");
    mocks.getCourseRequest.mockResolvedValue({ ...REQUEST, status: "declined" });
    expect((await judge({ action: "approve" })).status).toBe(409);
    mocks.getCourseRequest.mockResolvedValue({ ...REQUEST });
    mocks.schoolRoleOf.mockResolvedValue("learner");
    const res = await judge({ action: "approve" });
    expect(res.status).toBe(409);
    expect((await res.json()).error).toMatch(/no longer a teacher/);
    expect(mocks.approveCourseRequest).not.toHaveBeenCalled();
  });

  it("a lost race (decided meanwhile) is 409 and sends no email", async () => {
    as("brand_admin");
    mocks.approveCourseRequest.mockResolvedValue(null);
    expect((await judge({ action: "approve" })).status).toBe(409);
    expect(mocks.sendCourseRequestDecisionEmail).not.toHaveBeenCalled();
  });

  it("400s an unknown action", async () => {
    as("brand_admin");
    expect((await judge({ action: "delete" })).status).toBe(400);
  });
});
