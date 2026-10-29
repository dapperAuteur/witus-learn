import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

/**
 * The routes behind "every course is private until it is vetted and opened" (BAM, 2026-10-28), and
 * "a school's brand_admin controls that school's courses" (BAM, 2026-10-29):
 *
 *   POST /api/courses/[id]/visibility (the Make public / Make private switch)
 *     - signed out 401, unknown course 404 (another school's course does not resolve), the
 *       instructor or a teacher 403, a brand_admin of another school 403, and none of them write;
 *     - the platform owner and this school's brand_admin get the same rules, and the audit row
 *       records which role acted;
 *     - an OWNER-ONLY course is a 404 to this school's brand_admin, and still the owner's;
 *     - readiness is computed on the server from the stored lessons and verdicts: unvetted → 409;
 *     - an override needs a reason (400 without one) and is recorded; the audit row and the course
 *       update go through one call (applyCourseVisibilityChange, a single transaction);
 *     - Make private takes it down; asking for the state it is already in writes nothing.
 *
 *   PATCH /api/courses/[id] (course settings)
 *     - refuses to move a private course out of private or to publish it, for the owner and the
 *       school's brand_admin too (409), pointing at the switch;
 *     - a save that repeats the private state, or takes a public course down, goes through;
 *     - the school's brand_admin may set vetted; only the owner may set owner-only;
 *     - an owner-only course is a 404 to the school's brand_admin.
 *
 *   POST /api/courses/[id]/release-review-hold
 *     - this school's brand_admin and the owner release a ready hold; an owner-only course is a 404
 *       to the brand_admin; another school's admin 403.
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
// The real readiness math, wrapped so the hold-release tests can stand in a course whose reviewer
// markers are all cleared without building lesson rows.
vi.mock("@/lib/lesson-review-summary", async (importOriginal) => {
  const orig = await importOriginal<typeof import("@/lib/lesson-review-summary")>();
  return { ...orig, readinessOf: vi.fn(orig.readinessOf) };
});

import { POST as setVisibility } from "@/app/api/courses/[id]/visibility/route";
import { PATCH as patchCourse } from "@/app/api/courses/[id]/route";
import { POST as releaseHold } from "@/app/api/courses/[id]/release-review-hold/route";
import * as reviewSummary from "@/lib/lesson-review-summary";

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
  ownerOnly: false,
};

type Who = "owner" | "instructor" | "brand_admin" | "other_school_admin" | "teacher";
function as(who: Who | null) {
  if (!who) {
    mocks.getSession.mockResolvedValue(null);
    return;
  }
  const id = who === "owner" ? OWNER : who === "instructor" ? INSTRUCTOR : `${who}-1`;
  mocks.getSession.mockResolvedValue({ user: { id, email: `${who}@example.com` } });
  mocks.isPlatformOwner.mockImplementation(async (uid: string) => uid === OWNER);
  // Membership is per TENANT. The request resolves to TENANT; the other school's admin is a
  // brand_admin of "tenant-2" only.
  mocks.getMembership.mockImplementation(async (_uid: string, tenantId: string) => {
    if (who === "brand_admin") return tenantId === TENANT ? "brand_admin" : null;
    if (who === "other_school_admin") return tenantId === "tenant-2" ? "brand_admin" : null;
    return "instructor";
  });
}

const post = (body: unknown) =>
  setVisibility(
    new Request("http://school.test/api/courses/course-1/visibility", { method: "POST", body: JSON.stringify(body) }),
    { params: Promise.resolve({ id: "course-1" }) },
  );
const release = () =>
  releaseHold(new Request("http://school.test/api/courses/course-1/release-review-hold", { method: "POST" }), {
    params: Promise.resolve({ id: "course-1" }),
  });
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

  it.each(["instructor", "teacher", "other_school_admin"] as const)("403s the %s: only the owner or this school's admin opens a course", async (who) => {
    as(who);
    expect((await post({ action: "make-public", override: true, reason: "I am sure about this one." })).status).toBe(403);
    expect((await post({ action: "make-private" })).status).toBe(403);
    expect(mocks.applyCourseVisibilityChange).not.toHaveBeenCalled();
  });

  it("lets this school's brand_admin make a ready course public, with an audit row naming the role", async () => {
    as("brand_admin");
    const res = await post({ action: "make-public" });
    expect(res.status).toBe(200);
    const [tenantId, courseId, actor, p, audit] = mocks.applyCourseVisibilityChange.mock.calls[0];
    expect([tenantId, courseId, actor]).toEqual([TENANT, "course-1", "brand_admin-1"]);
    expect(p).toMatchObject({ visibility: "public", isPublished: true });
    expect(audit).toMatchObject({ actorRole: "brand_admin", toVisibility: "public", overrodeReadiness: false, readiness: { ready: true } });
  });

  it("holds this school's brand_admin to the same readiness check: unvetted 409, override without reason 400", async () => {
    as("brand_admin");
    mocks.getCourseById.mockResolvedValue({ ...BASE, vettedAt: null });
    expect((await post({ action: "make-public" })).status).toBe(409);
    expect((await post({ action: "make-public", override: true })).status).toBe(400);
    expect(mocks.applyCourseVisibilityChange).not.toHaveBeenCalled();
  });

  it("lets this school's brand_admin override with a reason, clearing a hold, recorded with the role", async () => {
    as("brand_admin");
    mocks.getCourseById.mockResolvedValue({ ...BASE, vettedAt: null, publishHoldReason: "Held for review" });
    const reason = "Our curriculum lead reviewed every lesson on 2026-10-29.";
    expect((await post({ action: "make-public", override: true, reason })).status).toBe(200);
    const [, , actor, p, audit] = mocks.applyCourseVisibilityChange.mock.calls[0];
    expect(actor).toBe("brand_admin-1");
    expect(p).toMatchObject({ visibility: "public", isPublished: true, publishHoldReason: null });
    expect(audit).toMatchObject({ actorRole: "brand_admin", overrodeReadiness: true, reason, clearedHoldReason: "Held for review" });
  });

  it("lets this school's brand_admin make a public course private", async () => {
    as("brand_admin");
    mocks.getCourseById.mockResolvedValue({ ...BASE, visibility: "public", isPublished: true, publishedAt: new Date() });
    expect((await post({ action: "make-private" })).status).toBe(200);
    const [, , , p, audit] = mocks.applyCourseVisibilityChange.mock.calls[0];
    expect(p).toEqual({ visibility: "private", isPublished: false });
    expect(audit).toMatchObject({ actorRole: "brand_admin", toVisibility: "private" });
  });

  it("404s an owner-only course to this school's brand_admin (and to a teacher), and writes nothing", async () => {
    mocks.getCourseById.mockResolvedValue({ ...BASE, ownerOnly: true });
    for (const who of ["brand_admin", "teacher", "other_school_admin"] as const) {
      as(who);
      expect((await post({ action: "make-public" })).status).toBe(404);
    }
    expect(mocks.applyCourseVisibilityChange).not.toHaveBeenCalled();
  });

  it("still lets the owner switch an owner-only course, recorded as the platform owner", async () => {
    mocks.getCourseById.mockResolvedValue({ ...BASE, ownerOnly: true });
    expect((await post({ action: "make-public" })).status).toBe(200);
    expect(mocks.applyCourseVisibilityChange.mock.calls[0][4]).toMatchObject({ actorRole: "platform_owner" });
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
      actorRole: "platform_owner",
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
  it.each(["owner", "instructor", "brand_admin"] as const)("refuses the %s moving it out of private (409), pointing at Make public", async (who) => {
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

describe("PATCH /api/courses/[id]: vetting and owner-only", () => {
  it("lets this school's brand_admin mark a course vetted (the server stamps the time)", async () => {
    as("brand_admin");
    mocks.getCourseById.mockResolvedValue({ ...BASE, vettedAt: null });
    expect((await patch({ vetted: true })).status).toBe(200);
    const p = mocks.updateCourse.mock.calls[0][2];
    expect(p.vettedAt).toBeInstanceOf(Date);
    expect(p).not.toHaveProperty("vetted");
  });

  it("still drops vetting from the course's own instructor", async () => {
    as("instructor");
    mocks.getCourseById.mockResolvedValue({ ...BASE, vettedAt: null });
    expect((await patch({ vetted: true, title: "T" })).status).toBe(200);
    expect(mocks.updateCourse.mock.calls[0][2]).not.toHaveProperty("vettedAt");
  });

  it("strips owner-only from a brand_admin, and takes it from the owner", async () => {
    as("brand_admin");
    expect((await patch({ ownerOnly: true, title: "T" })).status).toBe(200);
    expect(mocks.updateCourse.mock.calls[0][2]).not.toHaveProperty("ownerOnly");
    as("owner");
    expect((await patch({ ownerOnly: true })).status).toBe(200);
    expect(mocks.updateCourse.mock.calls[1][2]).toMatchObject({ ownerOnly: true });
  });

  it("404s an owner-only course to this school's brand_admin (no edit, no vetting)", async () => {
    as("brand_admin");
    mocks.getCourseById.mockResolvedValue({ ...BASE, ownerOnly: true, vettedAt: null });
    expect((await patch({ vetted: true })).status).toBe(404);
    expect(mocks.updateCourse).not.toHaveBeenCalled();
  });

  it("403s a brand_admin of another school on an open course of this one", async () => {
    as("other_school_admin");
    mocks.getCourseById.mockResolvedValue({ ...BASE, visibility: "public", isPublished: true });
    expect((await patch({ title: "Hijacked" })).status).toBe(403);
    expect(mocks.updateCourse).not.toHaveBeenCalled();
  });
});

describe("POST /api/courses/[id]/release-review-hold", () => {
  const HELD = { ...BASE, publishHoldReason: "Held until the reviewer signs off" };
  const readinessOf = vi.mocked(reviewSummary.readinessOf);
  const real = readinessOf.getMockImplementation();
  beforeEach(() => {
    mocks.getCourseById.mockResolvedValue({ ...HELD });
    // Every reviewer marker cleared: the hold is ready to come off.
    readinessOf.mockImplementation(() => ({ ready: true, qrTotal: 2, qrCleared: 2, pTotal: 1, pCleared: 1, openDecisions: 0 }));
  });
  afterEach(() => {
    if (real) readinessOf.mockImplementation(real);
  });

  it.each(["brand_admin", "owner"] as const)("lets the %s release a ready hold on a private course", async (who) => {
    as(who);
    const res = await release();
    expect(res.status).toBe(200);
    expect(await res.json()).toMatchObject({ ok: true, released: true });
    expect(mocks.updateCourse).toHaveBeenCalledWith(TENANT, "course-1", { publishHoldReason: null });
  });

  it.each(["instructor", "teacher", "other_school_admin"] as const)("403s the %s", async (who) => {
    as(who);
    expect((await release()).status).toBe(403);
    expect(mocks.updateCourse).not.toHaveBeenCalled();
  });

  it("404s an owner-only course to this school's brand_admin; the owner still releases it", async () => {
    mocks.getCourseById.mockResolvedValue({ ...HELD, ownerOnly: true });
    as("brand_admin");
    expect((await release()).status).toBe(404);
    expect(mocks.updateCourse).not.toHaveBeenCalled();
    as("owner");
    expect((await release()).status).toBe(200);
    expect(mocks.updateCourse).toHaveBeenCalledTimes(1);
  });
});
