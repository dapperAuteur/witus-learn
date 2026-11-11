import { beforeEach, describe, expect, it, vi } from "vitest";

/**
 * Handing a course to a teacher (BAM, 2026-11-10): the two routes that do it share one rule
 * (src/lib/course-instructor.ts, applied by assignCourseInstructor in src/db/queries/course-instructor.ts).
 *
 *   POST /api/admin/courses/[id]/instructor (the Users page)
 *     - signed out 401; another school's course 404 (it does not resolve in this tenant);
 *     - a learner, a plain teacher and a brand_admin of ANOTHER school 403, and none of them write;
 *     - this school's brand_admin and the owner OFFER the course to a teacher of the school (BAM,
 *       2026-11-10: "approve assigned courses"): an offer row is written and the teacher emailed, the
 *       course itself is not touched and nothing is logged until the teacher accepts;
 *     - handing it to yourself is immediate: the course row is updated and a course_instructor_changes
 *       row names the actor, role and source;
 *     - a target with no role on the school is refused (400), nothing written;
 *     - an OWNER-ONLY course is a 404 to the brand_admin, and still the owner's to offer;
 *     - the current instructor again is a no-op (200, changed false, nothing written).
 *
 *   PATCH /api/courses/[id] with instructorId (the course settings picker)
 *     - a plain teacher's instructorId is dropped and the rest of the save goes through;
 *     - a brand_admin's instructorId goes through the same shared rule (a non-teacher target refuses the
 *       save) and becomes an offer; the platform owner's is immediate and logged as course-settings.
 *
 * The real route code and the real rule run; the session, membership, owner flag, the tenant-scoped
 * course read, the authoring helpers and the database client are mocked.
 */

const mocks = vi.hoisted(() => ({
  getSession: vi.fn(),
  getMembership: vi.fn(),
  isPlatformOwner: vi.fn(),
  getCourseById: vi.fn(),
  ensureUsernameById: vi.fn(),
  instructorSlugTaken: vi.fn(),
  updateCourse: vi.fn(),
  after: vi.fn(),
  createCourseOffer: vi.fn(),
  getAccountFacts: vi.fn(),
  sendCourseOfferEmail: vi.fn(),
  // The fake database: queued answers for db.select(), and a record of every write in a transaction.
  selectQueue: [] as unknown[][],
  updates: [] as unknown[],
  inserts: [] as unknown[],
  updateReturns: [] as unknown[],
}));

vi.mock("next/server", async (importOriginal) => ({ ...(await importOriginal<object>()), after: mocks.after }));
vi.mock("@/lib/session", () => ({
  getSession: mocks.getSession,
  getMembership: mocks.getMembership,
  isPlatformOwner: mocks.isPlatformOwner,
}));
vi.mock("@/db/scoped", () => ({
  getScopedDb: async () => ({ tenantId: TENANT, tenant: { id: TENANT, slug: "school", name: "School", email: {} }, getCourseById: mocks.getCourseById }),
}));
vi.mock("@/db/queries/authoring", () => ({
  ensureUsernameById: mocks.ensureUsernameById,
  instructorSlugTaken: mocks.instructorSlugTaken,
  updateCourse: mocks.updateCourse,
  deleteCourse: vi.fn(),
}));
vi.mock("@/lib/ai/reindex", () => ({ reindexCourseEmbeddings: vi.fn() }));
vi.mock("@/db/queries/course-offers", () => ({ createCourseOffer: mocks.createCourseOffer }));
vi.mock("@/db/queries/account-settings", () => ({ getAccountFacts: mocks.getAccountFacts }));
vi.mock("@/lib/emails", () => ({ sendCourseOfferEmail: mocks.sendCourseOfferEmail }));
vi.mock("@/lib/cache-tags", () => ({ expireCourse: vi.fn(), expireCacheTags: vi.fn(), expireProfiles: vi.fn(), CACHE_TAGS: {} }));
vi.mock("@/db/client", () => {
  // A chainable query stub: every builder method returns the chain; awaiting it yields the answer.
  function chain(answer: () => unknown, onValues?: (v: unknown) => void) {
    const c: Record<string, unknown> = {};
    for (const m of ["from", "where", "limit", "orderBy", "innerJoin", "leftJoin", "groupBy", "set", "returning", "onConflictDoNothing", "onConflictDoUpdate"]) {
      c[m] = () => c;
    }
    c.values = (v: unknown) => {
      onValues?.(v);
      return c;
    };
    c.then = (res: (v: unknown) => unknown, rej: (e: unknown) => unknown) => Promise.resolve().then(answer).then(res, rej);
    return c;
  }
  const tx = {
    update: () => chain(() => mocks.updateReturns, (v) => mocks.updates.push(v)),
    insert: () => chain(() => [], (v) => mocks.inserts.push(v)),
    select: () => chain(() => mocks.selectQueue.shift() ?? []),
  };
  // tx.update(...).set(v) must record the patch too.
  const origUpdate = tx.update;
  tx.update = () => {
    const c = origUpdate() as Record<string, unknown>;
    c.set = (v: unknown) => {
      mocks.updates.push(v);
      return c;
    };
    return c as ReturnType<typeof origUpdate>;
  };
  const db = {
    select: () => chain(() => mocks.selectQueue.shift() ?? []),
    transaction: async (fn: (t: typeof tx) => Promise<unknown>) => fn(tx),
  };
  return { db, schema: {} };
});

import { POST as assign } from "@/app/api/admin/courses/[id]/instructor/route";
import { PATCH as patchCourse } from "@/app/api/courses/[id]/route";

const TENANT = "tenant-1";
const OWNER = "owner-1";
const INSTRUCTOR = "instructor-1";
const TEACHER = "teacher-2";
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
  vettedAt: null as Date | null,
  allowUnvettedPublic: false,
  price: "0",
  priceType: "free",
  billingInterval: null,
  category: null,
  additionalCategories: [] as string[],
  ownerOnly: false,
};

type Who = "owner" | "instructor" | "brand_admin" | "other_school_admin" | "teacher" | "learner";
function as(who: Who | null) {
  if (!who) {
    mocks.getSession.mockResolvedValue(null);
    return;
  }
  const id = who === "owner" ? OWNER : who === "instructor" ? INSTRUCTOR : `${who}-1`;
  mocks.getSession.mockResolvedValue({ user: { id, email: `${who}@example.com` } });
  mocks.isPlatformOwner.mockImplementation(async (uid: string) => uid === OWNER);
  mocks.getMembership.mockImplementation(async (_uid: string, tenantId: string) => {
    if (who === "brand_admin") return tenantId === TENANT ? "brand_admin" : null;
    if (who === "other_school_admin") return tenantId === "tenant-2" ? "brand_admin" : null;
    if (who === "learner") return "learner";
    return "instructor";
  });
}

/** The target's role on THIS school, as schoolRoleOf will read it. */
function targetRole(role: string | null) {
  mocks.selectQueue.push(role ? [{ role }] : []);
}

const post = (body: unknown) =>
  assign(new Request("http://school.test/api/admin/courses/course-1/instructor", { method: "POST", body: JSON.stringify(body) }), {
    params: Promise.resolve({ id: "course-1" }),
  });
const patch = (body: unknown) =>
  patchCourse(new Request("http://school.test/api/courses/course-1", { method: "PATCH", body: JSON.stringify(body) }), {
    params: Promise.resolve({ id: "course-1" }),
  });

beforeEach(() => {
  vi.clearAllMocks();
  mocks.selectQueue.length = 0;
  mocks.updates.length = 0;
  mocks.inserts.length = 0;
  mocks.updateReturns = [{ ...BASE, instructorId: TEACHER }];
  as("brand_admin");
  mocks.getCourseById.mockResolvedValue({ ...BASE });
  mocks.ensureUsernameById.mockResolvedValue("teacher2");
  mocks.instructorSlugTaken.mockResolvedValue(false);
  mocks.updateCourse.mockImplementation(async (_t: string, _id: string, p: object) => ({ ...BASE, ...p }));
  mocks.createCourseOffer.mockImplementation(async (input: { teacherUserId: string }) => ({ id: "offer-1", expiresAt: new Date("2026-11-24T00:00:00Z"), ...input }));
  mocks.getAccountFacts.mockImplementation(async (uid: string) => ({ userId: uid, email: `${uid}@example.com`, displayName: "T Two", name: null, username: "teacher2" }));
});

describe("POST /api/admin/courses/[id]/instructor", () => {
  it("401s signed out and 404s a course that does not resolve in this school", async () => {
    as(null);
    expect((await post({ instructorId: TEACHER })).status).toBe(401);
    as("brand_admin");
    mocks.getCourseById.mockResolvedValue(null);
    expect((await post({ instructorId: TEACHER })).status).toBe(404);
    expect(mocks.updates).toEqual([]);
  });

  it("403s a learner, the course's own teacher, and a brand_admin of another school; nothing is written", async () => {
    for (const who of ["learner", "instructor", "other_school_admin", "teacher"] as Who[]) {
      as(who);
      targetRole("instructor");
      const res = await post({ instructorId: TEACHER });
      expect(res.status, who).toBe(403);
    }
    expect(mocks.updates).toEqual([]);
    expect(mocks.inserts).toEqual([]);
  });

  it("this school's brand_admin OFFERS the course to a teacher of the school: the teacher is emailed, the course is untouched", async () => {
    targetRole("instructor");
    const res = await post({ instructorId: TEACHER });
    expect(res.status).toBe(201);
    expect(await res.json()).toMatchObject({ ok: true, changed: false, offered: true, offer: { id: "offer-1" }, course: { id: "course-1", instructorId: INSTRUCTOR } });
    expect(mocks.createCourseOffer).toHaveBeenCalledWith(
      expect.objectContaining({ tenantId: TENANT, teacherUserId: TEACHER, offeredBy: { userId: "brand_admin-1", role: "brand_admin" } }),
    );
    expect(mocks.sendCourseOfferEmail).toHaveBeenCalledWith(expect.objectContaining({ to: `${TEACHER}@example.com`, courseTitle: "Course" }));
    // Nothing moves and nothing is logged until the teacher accepts.
    expect(mocks.updates).toEqual([]);
    expect(mocks.inserts).toEqual([]);
    // The rule still ran in full: the username is made sure of and the slug collision checked.
    expect(mocks.ensureUsernameById).toHaveBeenCalledWith(TEACHER);
    expect(mocks.instructorSlugTaken).toHaveBeenCalledWith(TENANT, TEACHER, "course", "course-1");
  });

  it("the platform owner's offer from the Users page is made in the owner's role", async () => {
    as("owner");
    targetRole("instructor");
    expect((await post({ instructorId: TEACHER })).status).toBe(201);
    expect(mocks.createCourseOffer.mock.calls[0]![0]).toMatchObject({ offeredBy: { userId: OWNER, role: "platform_owner" } });
  });

  it("a failed offer email never fails the offer", async () => {
    targetRole("instructor");
    mocks.sendCourseOfferEmail.mockRejectedValueOnce(new Error("mailgun down"));
    expect((await post({ instructorId: TEACHER })).status).toBe(201);
  });

  it("handing the course to yourself is immediate, and the change is logged", async () => {
    targetRole("brand_admin");
    mocks.updateReturns = [{ ...BASE, instructorId: "brand_admin-1" }];
    const res = await post({ instructorId: "brand_admin-1" });
    expect(res.status).toBe(200);
    expect(await res.json()).toMatchObject({ ok: true, changed: true, offered: false, course: { instructorId: "brand_admin-1" } });
    expect(mocks.createCourseOffer).not.toHaveBeenCalled();
    expect(mocks.updates).toContainEqual(expect.objectContaining({ instructorId: "brand_admin-1" }));
    expect(mocks.inserts).toEqual([
      expect.objectContaining({
        tenantId: TENANT,
        courseId: "course-1",
        fromInstructorId: INSTRUCTOR,
        toInstructorId: "brand_admin-1",
        actorUserId: "brand_admin-1",
        actorRole: "brand_admin",
        source: "admin-users",
      }),
    ]);
  });

  it("refuses a target with no teaching role on this school (400) and writes nothing", async () => {
    targetRole(null);
    const res = await post({ instructorId: "stranger-9" });
    expect(res.status).toBe(400);
    expect((await res.json()).error).toMatch(/isn't a teacher of this school/);
    expect(mocks.updates).toEqual([]);
    targetRole("learner");
    expect((await post({ instructorId: "learner-9" })).status).toBe(400);
  });

  it("refuses a slug collision with 409", async () => {
    targetRole("instructor");
    mocks.instructorSlugTaken.mockResolvedValue(true);
    expect((await post({ instructorId: TEACHER })).status).toBe(409);
    expect(mocks.updates).toEqual([]);
  });

  it("an owner-only course is a 404 to the brand_admin and still the owner's to offer", async () => {
    mocks.getCourseById.mockResolvedValue({ ...BASE, ownerOnly: true });
    expect((await post({ instructorId: TEACHER })).status).toBe(404);
    expect(mocks.createCourseOffer).not.toHaveBeenCalled();
    as("owner");
    targetRole("instructor");
    expect((await post({ instructorId: TEACHER })).status).toBe(201);
  });

  it("the current instructor again is a no-op", async () => {
    const res = await post({ instructorId: INSTRUCTOR });
    expect(res.status).toBe(200);
    expect(await res.json()).toMatchObject({ ok: true, changed: false });
    expect(mocks.updates).toEqual([]);
    expect(mocks.inserts).toEqual([]);
  });

  it("400s a body without a teacher", async () => {
    expect((await post({})).status).toBe(400);
  });
});

describe("PATCH /api/courses/[id] with instructorId", () => {
  it("drops a plain teacher's instructorId and saves the rest", async () => {
    as("instructor");
    const res = await patch({ title: "Renamed", instructorId: TEACHER });
    expect(res.status).toBe(200);
    expect(mocks.updateCourse).toHaveBeenCalledWith(TENANT, "course-1", expect.not.objectContaining({ instructorId: expect.anything() }));
    expect(mocks.updateCourse.mock.calls[0]![2]).toMatchObject({ title: "Renamed" });
    expect(mocks.inserts).toEqual([]);
  });

  it("a brand_admin's instructorId becomes an offer; the rest of the save goes through", async () => {
    targetRole("instructor");
    const res = await patch({ title: "Renamed", instructorId: TEACHER });
    expect(res.status).toBe(200);
    expect((await res.json()).instructorOffer).toMatchObject({ teacherLabel: "T Two" });
    expect(mocks.createCourseOffer).toHaveBeenCalledWith(expect.objectContaining({ teacherUserId: TEACHER, offeredBy: { userId: "brand_admin-1", role: "brand_admin" } }));
    expect(mocks.updates).toEqual([]);
    expect(mocks.inserts).toEqual([]);
    // The generic UPDATE never carries instructorId itself.
    expect(mocks.updateCourse.mock.calls[0]![2]).not.toHaveProperty("instructorId");
    expect(mocks.updateCourse.mock.calls[0]![2]).toMatchObject({ title: "Renamed" });
  });

  it("the platform owner's picker is immediate and logged as course-settings", async () => {
    as("owner");
    targetRole("instructor");
    const res = await patch({ title: "Renamed", instructorId: TEACHER });
    expect(res.status).toBe(200);
    expect((await res.json()).instructorOffer).toBeUndefined();
    expect(mocks.createCourseOffer).not.toHaveBeenCalled();
    expect(mocks.updates).toContainEqual(expect.objectContaining({ instructorId: TEACHER }));
    expect(mocks.inserts[0]).toMatchObject({ source: "course-settings", actorRole: "platform_owner", toInstructorId: TEACHER });
    expect(mocks.updateCourse.mock.calls[0]![2]).not.toHaveProperty("instructorId");
  });

  it("an admin's refused assignment refuses the whole save", async () => {
    targetRole(null);
    const res = await patch({ title: "Renamed", instructorId: "stranger-9" });
    expect(res.status).toBe(400);
    expect(mocks.updateCourse).not.toHaveBeenCalled();
  });
});
