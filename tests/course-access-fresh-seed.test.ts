import { beforeEach, describe, expect, it, vi } from "vitest";

/**
 * loadCourseView when the cached route index misses (src/lib/course-access.ts).
 *
 * The route index is cached for up to an hour (src/lib/public-cache.ts) and the seed scripts write
 * outside Next, so they cannot clear it. On 2026-10-22 two private courses seeded with
 * `pnpm seed:local-private:prod` 404'd for their owner, because the index was filled before the
 * seed ran. What this file pins:
 *   1. A signed-in viewer's miss gets one direct read, so a course seeded in the last hour opens.
 *   2. A signed-out miss reads nothing: crawlers inventing URLs still cost no query.
 *   3. A hit never takes the direct read.
 *   4. The direct read does not bypass the gate: a private course still 404s for a non-editor.
 */

const mocks = vi.hoisted(() => ({
  cachedCourseBySlug: vi.fn(),
  getCourseBySlug: vi.fn(),
  getSession: vi.fn(),
  isPlatformOwner: vi.fn(),
  canAccessCourse: vi.fn(),
}));

vi.mock("@/lib/public-cache", () => ({
  cachedCourseBySlug: mocks.cachedCourseBySlug,
  cachedLessonSummaries: async () => [],
  cachedModules: async () => [],
}));
vi.mock("@/db/queries/authoring", () => ({ getCourseBySlug: mocks.getCourseBySlug }));
vi.mock("@/lib/session", () => ({ getSession: mocks.getSession, isPlatformOwner: mocks.isPlatformOwner }));
vi.mock("@/lib/api", () => ({ canAccessCourse: mocks.canAccessCourse }));
vi.mock("@/lib/tenant", () => ({ requireTenant: async () => ({ id: TENANT, slug: "learn-witus" }) }));
vi.mock("@/lib/active-learner", () => ({
  getActiveLearner: async (session: { user: { id: string } } | null) => (session ? { id: session.user.id } : null),
}));
vi.mock("@/db/queries/progress", () => ({
  getCourseProgressSummary: async () => ({
    completedLessonIds: new Set<string>(),
    lastViewedLessonId: null,
    watchSeconds: new Map<string, number>(),
  }),
}));
vi.mock("@/db/queries/enrollment", () => ({ isEnrolled: async () => false }));
vi.mock("@/db/queries/course-auditors", () => ({ isCourseAuditor: async () => false }));

import { loadCourseView } from "@/lib/course-access";

const TENANT = "tenant-1";
const OWNER = { user: { id: "owner-1", email: "owner@example.com" } };
const SEEDED = {
  id: "course-1",
  tenantId: TENANT,
  instructorId: OWNER.user.id,
  slug: "fresh-private-course",
  isPublished: false,
  visibility: "private",
  vettedAt: null,
  allowUnvettedPublic: false,
};

beforeEach(() => {
  vi.clearAllMocks();
  mocks.cachedCourseBySlug.mockResolvedValue(null);
  mocks.getCourseBySlug.mockResolvedValue(SEEDED);
  mocks.getSession.mockResolvedValue(OWNER);
  mocks.isPlatformOwner.mockResolvedValue(true);
  mocks.canAccessCourse.mockImplementation(async (session: unknown) => session === OWNER);
});

describe("a course missing from the cached route index", () => {
  it("opens for its signed-in owner through one direct read", async () => {
    const view = await loadCourseView("bam", SEEDED.slug);
    expect(view?.course.id).toBe(SEEDED.id);
    expect(view?.isEditor).toBe(true);
    expect(mocks.getCourseBySlug).toHaveBeenCalledTimes(1);
    expect(mocks.getCourseBySlug).toHaveBeenCalledWith(TENANT, "bam", SEEDED.slug);
  });

  it("is a 404 for a signed-out visitor, with no database read", async () => {
    mocks.getSession.mockResolvedValue(null);
    expect(await loadCourseView("wp-admin", "setup.php")).toBeNull();
    expect(mocks.getCourseBySlug).not.toHaveBeenCalled();
  });

  it("is a 404 for a signed-in visitor when the course really does not exist", async () => {
    mocks.getCourseBySlug.mockResolvedValue(null);
    expect(await loadCourseView("bam", "no-such-course")).toBeNull();
  });

  it("still 404s a private course for a signed-in visitor who cannot edit it", async () => {
    mocks.getSession.mockResolvedValue({ user: { id: "learner-1", email: "learner@example.com" } });
    mocks.isPlatformOwner.mockResolvedValue(false);
    expect(await loadCourseView("bam", SEEDED.slug)).toBeNull();
  });
});

describe("a course the cached route index already has", () => {
  it("never takes the direct read", async () => {
    mocks.cachedCourseBySlug.mockResolvedValue(SEEDED);
    expect((await loadCourseView("bam", SEEDED.slug))?.course.id).toBe(SEEDED.id);
    expect(mocks.getCourseBySlug).not.toHaveBeenCalled();
  });
});
