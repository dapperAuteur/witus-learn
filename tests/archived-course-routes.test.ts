import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

/**
 * The two routes of the archived-edition mechanism (plans/101 section 5):
 *
 *   POST /api/courses/[id]/enroll on an ARCHIVED course
 *     - refuses a new enrollment with 409 and the replacement's title and link;
 *     - still answers { enrolled: true } for a learner already enrolled (nothing of theirs changes);
 *     - a course that is not archived enrolls as before (the check added nothing to that path).
 *
 *   POST /api/courses/[id]/archive
 *     - signed out 401; a signed-in non-owner 403; an unknown course or replacement 404 (a foreign
 *       course does not resolve in this tenant, so it is the same 404);
 *     - a refusal from the operation is a 409 carrying its code; nothing is cached-cleared;
 *     - a real write clears both courses' cache tags; a dry run clears nothing.
 *
 * The real src/lib/api.ts runs; the session, the scoped reads, the enrollment reads and the archive
 * operation are mocked.
 */

const mocks = vi.hoisted(() => ({
  getSession: vi.fn(),
  getMembership: vi.fn(),
  isPlatformOwner: vi.fn(),
  getCourseById: vi.fn(),
  getReplacementCourse: vi.fn(),
  listActivePromotions: vi.fn(),
  isEnrolled: vi.fn(),
  enrollFree: vi.fn(),
  getUnmetRequired: vi.fn(),
  getActiveLearner: vi.fn(),
  archiveCourse: vi.fn(),
  expireCourse: vi.fn(),
}));

vi.mock("@/lib/session", () => ({
  getSession: mocks.getSession,
  getMembership: mocks.getMembership,
  isPlatformOwner: mocks.isPlatformOwner,
}));
vi.mock("@/db/scoped", () => ({
  getScopedDb: async () => ({
    tenantId: TENANT,
    tenant: { id: TENANT, slug: "learn-witus" },
    getCourseById: mocks.getCourseById,
    getReplacementCourse: mocks.getReplacementCourse,
    listActivePromotions: mocks.listActivePromotions,
  }),
}));
vi.mock("@/db/queries/enrollment", () => ({ isEnrolled: mocks.isEnrolled, enrollFree: mocks.enrollFree }));
vi.mock("@/db/queries/prerequisites", () => ({ getUnmetRequired: mocks.getUnmetRequired }));
vi.mock("@/db/queries/connect", () => ({
  getInstructorBillingProfile: vi.fn(),
  getPlatformFeePercent: vi.fn(),
  isConnectInstructor: vi.fn(),
  validatePromo: vi.fn(),
}));
vi.mock("@/db/queries/course-auditors", () => ({ isCourseAuditor: vi.fn(async () => false) }));
vi.mock("@/lib/stripe", () => ({
  createCourseCheckout: vi.fn(),
  createPromoCoupon: vi.fn(),
  ensureCoursePrice: vi.fn(),
  ensureCourseProduct: vi.fn(),
  getStripe: () => null,
}));
vi.mock("@/lib/site-url", () => ({ getSiteUrl: async () => "https://learn.example" }));
vi.mock("@/lib/active-learner", () => ({ getActiveLearner: mocks.getActiveLearner }));
vi.mock("@/db/client", () => ({ db: {} }));
vi.mock("@/lib/archive-course", async (importOriginal) => {
  const orig = await importOriginal<typeof import("@/lib/archive-course")>();
  return { ...orig, archiveCourse: mocks.archiveCourse, drizzleArchiveRunner: () => "runner" };
});
vi.mock("@/lib/cache-tags", () => ({ expireCourse: mocks.expireCourse }));

import { POST as enroll } from "@/app/api/courses/[id]/enroll/route";
import { POST as archive } from "@/app/api/courses/[id]/archive/route";
import { ArchiveRefusal } from "@/lib/archive-course";

const TENANT = "11111111-1111-1111-1111-111111111111";
const OLD_ID = "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa";
const NEW_ID = "bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb";
const OWNER = "owner-1";
const LEARNER = "learner-1";

const archivedCourse = {
  id: OLD_ID,
  tenantId: TENANT,
  instructorId: "instructor-1",
  title: "Tea",
  slug: "tea-archived-2026",
  isPublished: true,
  visibility: "public",
  vettedAt: new Date("2026-01-01"),
  allowUnvettedPublic: false,
  price: "0",
  priceType: "free",
  archivedAt: new Date("2026-11-25T15:00:00Z"),
  archivedReason: "Archived edition.",
  supersededByCourseId: NEW_ID,
};
const liveCourse = { ...archivedCourse, id: NEW_ID, slug: "tea", archivedAt: null, archivedReason: null, supersededByCourseId: null };
const replacement = { id: NEW_ID, title: "Tea, second edition", slug: "tea", username: "bam" };

function signedIn(userId: string | null) {
  mocks.getSession.mockResolvedValue(userId ? { user: { id: userId, email: `${userId}@example.com` } } : null);
  mocks.isPlatformOwner.mockImplementation(async (uid: string) => uid === OWNER);
  mocks.getMembership.mockResolvedValue(null);
  mocks.getActiveLearner.mockImplementation(async (s: { user: { id: string } } | null) => (s ? { id: s.user.id } : null));
}

const params = (id: string) => ({ params: Promise.resolve({ id }) });
const post = (body?: unknown) =>
  new Request("http://learn.example/x", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: body === undefined ? undefined : JSON.stringify(body),
  });

beforeEach(() => {
  mocks.listActivePromotions.mockResolvedValue([]);
  mocks.isEnrolled.mockResolvedValue(false);
  mocks.getUnmetRequired.mockResolvedValue([]);
  mocks.enrollFree.mockResolvedValue({ id: "enr-1" });
  mocks.getReplacementCourse.mockResolvedValue(replacement);
  mocks.getCourseById.mockImplementation(async (id: string) =>
    id === OLD_ID ? archivedCourse : id === NEW_ID ? liveCourse : null,
  );
});
afterEach(() => vi.clearAllMocks());

describe("POST /api/courses/[id]/enroll on an archived edition", () => {
  it("refuses a new enrollment with 409, the message and the replacement link, and writes nothing", async () => {
    signedIn(LEARNER);
    const r = await enroll(post(), params(OLD_ID));
    expect(r.status).toBe(409);
    const body = await r.json();
    expect(body.error).toBe("This is an archived edition and takes no new enrollments. Take Tea, second edition instead.");
    expect(body.replacement).toEqual({ id: NEW_ID, title: "Tea, second edition", href: "/bam/tea" });
    expect(mocks.enrollFree).not.toHaveBeenCalled();
  });

  it("still answers an enrolled learner with enrolled: true (their enrollment is untouched)", async () => {
    signedIn(LEARNER);
    mocks.isEnrolled.mockResolvedValue(true);
    const r = await enroll(post(), params(OLD_ID));
    expect(r.status).toBe(200);
    expect(await r.json()).toEqual({ enrolled: true });
    expect(mocks.enrollFree).not.toHaveBeenCalled();
  });

  it("names no replacement when the pointer resolves to nothing in this tenant", async () => {
    signedIn(LEARNER);
    mocks.getReplacementCourse.mockResolvedValue(null);
    const r = await enroll(post(), params(OLD_ID));
    expect(r.status).toBe(409);
    const body = await r.json();
    expect(body.error).toBe("This is an archived edition and takes no new enrollments.");
    expect(body.replacement).toBeNull();
  });

  it("enrolls on a course that is not archived, as before", async () => {
    signedIn(LEARNER);
    const r = await enroll(post(), params(NEW_ID));
    expect(r.status).toBe(201);
    expect(mocks.enrollFree).toHaveBeenCalledWith(TENANT, LEARNER, NEW_ID);
  });
});

describe("POST /api/courses/[id]/archive", () => {
  const plan = {
    tenantId: TENANT,
    archivedAt: new Date("2026-11-25T15:00:00Z"),
    reason: "Archived edition.",
    old: { id: NEW_ID, title: "Tea", slugBefore: "tea", slugAfter: "tea-archived-2026" },
    replacement: { id: OLD_ID, title: "Tea, second edition", slugBefore: "tea-v2", slugAfter: "tea" },
    written: true,
  };

  it("401 signed out, 403 for anyone but the platform owner, and the operation is never called", async () => {
    signedIn(null);
    expect((await archive(post({ replacementCourseId: OLD_ID }), params(NEW_ID))).status).toBe(401);
    signedIn(LEARNER);
    expect((await archive(post({ replacementCourseId: OLD_ID }), params(NEW_ID))).status).toBe(403);
    expect(mocks.archiveCourse).not.toHaveBeenCalled();
  });

  it("404 for an unknown course and for an unknown replacement (a foreign course is unknown here)", async () => {
    signedIn(OWNER);
    expect((await archive(post({ replacementCourseId: OLD_ID }), params("cccccccc-cccc-4ccc-8ccc-cccccccccccc"))).status).toBe(404);
    const r = await archive(post({ replacementCourseId: "cccccccc-cccc-4ccc-8ccc-cccccccccccc" }), params(NEW_ID));
    expect(r.status).toBe(404);
    expect(mocks.archiveCourse).not.toHaveBeenCalled();
  });

  it("400 on a body without a uuid replacement", async () => {
    signedIn(OWNER);
    expect((await archive(post({ replacementCourseId: "tea" }), params(NEW_ID))).status).toBe(400);
    expect((await archive(post(), params(NEW_ID))).status).toBe(400);
  });

  it("maps a refusal to 409 with its code and clears no cache", async () => {
    signedIn(OWNER);
    mocks.archiveCourse.mockRejectedValue(new ArchiveRefusal("target-slug-taken", "The slug tea-archived-2026 is already taken in this tenant."));
    const r = await archive(post({ replacementCourseId: OLD_ID }), params(NEW_ID));
    expect(r.status).toBe(409);
    expect(await r.json()).toEqual({ error: "The slug tea-archived-2026 is already taken in this tenant.", code: "target-slug-taken" });
    expect(mocks.expireCourse).not.toHaveBeenCalled();
  });

  it("runs the operation with both courses' slugs in this tenant and clears both courses' caches", async () => {
    signedIn(OWNER);
    mocks.archiveCourse.mockResolvedValue(plan);
    const r = await archive(post({ replacementCourseId: OLD_ID, reason: "Replaced." }), params(NEW_ID));
    expect(r.status).toBe(200);
    expect(mocks.archiveCourse).toHaveBeenCalledWith("runner", {
      tenantId: TENANT,
      oldSlug: "tea",
      newSlug: "tea-archived-2026",
      reason: "Replaced.",
      dryRun: undefined,
    });
    expect(mocks.expireCourse).toHaveBeenCalledWith(TENANT, NEW_ID);
    expect(mocks.expireCourse).toHaveBeenCalledWith(TENANT, OLD_ID);
  });

  it("a dry run returns the plan and clears nothing", async () => {
    signedIn(OWNER);
    mocks.archiveCourse.mockResolvedValue({ ...plan, written: false });
    const r = await archive(post({ replacementCourseId: OLD_ID, dryRun: true }), params(NEW_ID));
    expect(r.status).toBe(200);
    expect((await r.json()).plan.written).toBe(false);
    expect(mocks.expireCourse).not.toHaveBeenCalled();
  });
});
