import { beforeEach, describe, expect, it, vi } from "vitest";

/**
 * The routes behind "every course is private until the owner vets and opens it" (BAM, 2026-10-28):
 *
 *   POST /api/courses/[id]/visibility (the owner's Make public / Make private switch)
 *     - signed out 401, unknown course 404, anyone but the platform owner 403, and none of them write;
 *     - readiness is computed on the server from the stored lessons and verdicts: unvetted → 409;
 *     - an override needs a reason (400 without one) and is recorded; the audit row and the course
 *       update go through one call (applyCourseVisibilityChange, a single transaction);
 *     - Make private takes it down; asking for the state it is already in writes nothing.
 *
 *   PATCH /api/courses/[id] (course settings)
 *     - refuses to move a private course out of private or to publish it, for the owner too (409);
 *     - a save that repeats the private state, or takes a public course down, goes through.
 *
 * The real src/lib/api.ts gates run here; only the session, membership, owner and DB reads are mocked.
 */

const mocks = vi.hoisted(() => ({
  getSession: vi.fn(),
  getMembership: vi.fn(),
  isPlatformOwner: vi.fn(),
  getCourseById: vi.fn(),
  listReviewableLessons: vi.fn(),
  listLessonReviews: vi.fn(),
  applyCourseVisibilityChange: vi.fn(),
  updateCourse: vi.fn(),
  after: vi.fn(),
}));

vi.mock("next/server", async (importOriginal) => ({ ...(await importOriginal<object>()), after: mocks.after }));
vi.mock("@/lib/session", () => ({
  getSession: mocks.getSession,
  getMembership: mocks.getMembership,
  isPlatformOwner: mocks.isPlatformOwner,
}));
vi.mock("@/db/scoped", () => ({
  getScopedDb: async () => ({
    tenantId: TENANT,
    getCourseById: mocks.getCourseById,
    listReviewableLessons: mocks.listReviewableLessons,
    listLessonReviews: mocks.listLessonReviews,
  }),
}));
vi.mock("@/db/queries/authoring", () => ({
  applyCourseVisibilityChange: mocks.applyCourseVisibilityChange,
  updateCourse: mocks.updateCourse,
  deleteCourse: vi.fn(),
  ensureUsernameById: vi.fn(),
  instructorSlugTaken: vi.fn(),
  isTenantInstructorMember: vi.fn(),
}));
vi.mock("@/lib/ai/reindex", () => ({ reindexCourseEmbeddings: vi.fn() }));

import { POST as setVisibility } from "@/app/api/courses/[id]/visibility/route";
import { PATCH as patchCourse } from "@/app/api/courses/[id]/route";

const TENANT = "tenant-1";
const OWNER = "owner-1";
const INSTRUCTOR = "instructor-1";
const BASE = {
  id: "course-1",
  tenantId: TENANT,
  instructorId: INSTRUCTOR,
  title: "Course",
  slug: "course",
  visibility: "private",
  isPublished: false,
  publishedAt: null as Date | null,
  publishHoldReason: null as string | null,
  vettedAt: new Date("2026-10-01T00:00:00Z") as Date | null,
  allowUnvettedPublic: false,
  price: "0",
  priceType: "free",
  billingInterval: null,
  category: null,
  additionalCategories: [] as string[],
};

function as(who: "owner" | "instructor" | "brand_admin" | null) {
  if (!who) {
    mocks.getSession.mockResolvedValue(null);
    return;
  }
  const id = who === "owner" ? OWNER : who === "instructor" ? INSTRUCTOR : "admin-1";
  mocks.getSession.mockResolvedValue({ user: { id, email: `${who}@example.com` } });
  mocks.isPlatformOwner.mockImplementation(async (uid: string) => uid === OWNER);
  mocks.getMembership.mockResolvedValue(who === "brand_admin" ? "brand_admin" : "instructor");
}

const post = (body: unknown) =>
  setVisibility(
    new Request("http://school.test/api/courses/course-1/visibility", { method: "POST", body: JSON.stringify(body) }),
    { params: Promise.resolve({ id: "course-1" }) },
  );
const patch = (body: unknown) =>
  patchCourse(
    new Request("http://school.test/api/courses/course-1", { method: "PATCH", body: JSON.stringify(body) }),
    { params: Promise.resolve({ id: "course-1" }) },
  );

beforeEach(() => {
  vi.clearAllMocks();
  as("owner");
  mocks.getCourseById.mockResolvedValue({ ...BASE });
  mocks.listReviewableLessons.mockResolvedValue([]);
  mocks.listLessonReviews.mockResolvedValue([]);
  mocks.applyCourseVisibilityChange.mockImplementation(async (_t: string, _c: string, _a: string, p: object) => ({ ...BASE, ...p }));
  mocks.updateCourse.mockImplementation(async (_t: string, _id: string, p: object) => ({ ...BASE, ...p }));
});

describe("POST /api/courses/[id]/visibility", () => {
  it("401s signed out and writes nothing", async () => {
    as(null);
    expect((await post({ action: "make-public" })).status).toBe(401);
    expect(mocks.applyCourseVisibilityChange).not.toHaveBeenCalled();
  });

  it("404s a course that does not resolve in this tenant", async () => {
    mocks.getCourseById.mockResolvedValue(null);
    expect((await post({ action: "make-public" })).status).toBe(404);
    expect(mocks.applyCourseVisibilityChange).not.toHaveBeenCalled();
  });

  it.each(["instructor", "brand_admin"] as const)("403s the course's %s: only the platform owner opens a course", async (who) => {
    as(who);
    expect((await post({ action: "make-public", override: true, reason: "I am sure about this one." })).status).toBe(403);
    expect((await post({ action: "make-private" })).status).toBe(403);
    expect(mocks.applyCourseVisibilityChange).not.toHaveBeenCalled();
  });

  it("makes a vetted course public: publishes and sets public in one write, with an audit row", async () => {
    const res = await post({ action: "make-public" });
    expect(res.status).toBe(200);
    expect(mocks.applyCourseVisibilityChange).toHaveBeenCalledTimes(1);
    const [tenantId, courseId, actor, p, audit] = mocks.applyCourseVisibilityChange.mock.calls[0];
    expect([tenantId, courseId, actor]).toEqual([TENANT, "course-1", OWNER]);
    expect(p).toMatchObject({ visibility: "public", isPublished: true });
    expect(p.publishedAt).toBeInstanceOf(Date);
    expect(audit).toMatchObject({
      fromVisibility: "private",
      toVisibility: "public",
      fromPublished: false,
      toPublished: true,
      overrodeReadiness: false,
      reason: null,
      readiness: { ready: true, vetted: true },
    });
    // Publishing re-indexes the embeddings after the response, as the settings PATCH does.
    expect(mocks.after).toHaveBeenCalledTimes(1);
  });

  it("re-computes readiness from the stored rows: an unvetted course is refused with 409", async () => {
    mocks.getCourseById.mockResolvedValue({ ...BASE, vettedAt: null });
    const res = await post({ action: "make-public" });
    expect(res.status).toBe(409);
    const body = await res.json();
    expect(body.error).toContain("Not vetted yet.");
    expect(body.readiness).toMatchObject({ ready: false, vetted: false });
    expect(mocks.listReviewableLessons).toHaveBeenCalledWith(["course-1"]);
    expect(mocks.applyCourseVisibilityChange).not.toHaveBeenCalled();
  });

  it("refuses an override with no reason (400) and writes nothing", async () => {
    mocks.getCourseById.mockResolvedValue({ ...BASE, vettedAt: null });
    expect((await post({ action: "make-public", override: true })).status).toBe(400);
    expect(mocks.applyCourseVisibilityChange).not.toHaveBeenCalled();
  });

  it("an override with a reason goes ahead, clears a hold, and stores who, why and what was set aside", async () => {
    mocks.getCourseById.mockResolvedValue({ ...BASE, vettedAt: null, publishHoldReason: "Held for review" });
    const reason = "Co-author signed off in person on 2026-10-27.";
    const res = await post({ action: "make-public", override: true, reason });
    expect(res.status).toBe(200);
    const [, , actor, p, audit] = mocks.applyCourseVisibilityChange.mock.calls[0];
    expect(actor).toBe(OWNER);
    expect(p).toMatchObject({ visibility: "public", isPublished: true, publishHoldReason: null });
    expect(audit).toMatchObject({ overrodeReadiness: true, reason, clearedHoldReason: "Held for review" });
  });

  it("makes a public course private and unpublished", async () => {
    mocks.getCourseById.mockResolvedValue({ ...BASE, visibility: "public", isPublished: true, publishedAt: new Date() });
    const res = await post({ action: "make-private", reason: "Found an error in lesson 3." });
    expect(res.status).toBe(200);
    const [, , , p, audit] = mocks.applyCourseVisibilityChange.mock.calls[0];
    expect(p).toEqual({ visibility: "private", isPublished: false });
    expect(audit).toMatchObject({ fromVisibility: "public", toVisibility: "private", reason: "Found an error in lesson 3." });
    expect(mocks.after).not.toHaveBeenCalled();
  });

  it("writes nothing (no audit row) when the course is already in the requested state", async () => {
    const res = await post({ action: "make-private" });
    expect(res.status).toBe(200);
    expect((await res.json()).changed).toBe(false);
    expect(mocks.applyCourseVisibilityChange).not.toHaveBeenCalled();
  });

  it("400s an unknown action", async () => {
    expect((await post({ action: "make-famous" })).status).toBe(400);
  });
});

describe("PATCH /api/courses/[id] on a private course", () => {
  it.each(["owner", "instructor"] as const)("refuses the %s moving it out of private (409), pointing at Make public", async (who) => {
    as(who);
    const res = await patch({ visibility: "public" });
    expect(res.status).toBe(409);
    expect((await res.json()).error).toMatch(/Make public/);
    expect(mocks.updateCourse).not.toHaveBeenCalled();
  });

  it("refuses publishing it while it stays private (409)", async () => {
    as("instructor");
    expect((await patch({ isPublished: true })).status).toBe(409);
    expect(mocks.updateCourse).not.toHaveBeenCalled();
  });

  it("saves the settings form's usual full body when it repeats the private state", async () => {
    as("instructor");
    const res = await patch({ title: "Renamed", visibility: "private", isPublished: false });
    expect(res.status).toBe(200);
    expect(mocks.updateCourse).toHaveBeenCalledWith(TENANT, "course-1", expect.objectContaining({ title: "Renamed", visibility: "private" }));
  });

  it("still lets an editor take a public course down", async () => {
    as("instructor");
    mocks.getCourseById.mockResolvedValue({ ...BASE, visibility: "public", isPublished: true });
    expect((await patch({ visibility: "private", isPublished: false })).status).toBe(200);
  });
});
