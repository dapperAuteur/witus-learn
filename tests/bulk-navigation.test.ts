import { beforeEach, describe, expect, it, vi } from "vitest";

/**
 * POST /api/courses/bulk-navigation (BAM, 2026-11-04: "can I convert multiple courses at once to CYOA?").
 *
 *   - signed out 401; a bad body 400 (no ids, a non-uuid id, an unknown mode) and nothing is written;
 *   - each course gets the single-course PATCH's check (the real src/lib/api.ts checkEditableCourse runs here):
 *     the course's instructor and this school's brand_admin and the platform owner may set it; a teacher who is
 *     not its instructor gets "forbidden"; another school's course is "not-found"; an OWNER-ONLY course is
 *     "not-found" to the school's brand_admin;
 *   - a mixed selection answers per course, writes only the allowed ones, and names no refused course;
 *   - a course already in the mode is "unchanged" and not written;
 *   - after CYOA, every CYOA course carries its crossroads status and the summary counts what still needs
 *     embeddings; nothing is embedded by the route.
 *
 * Only the session, membership, owner flag and database reads/writes are mocked.
 */

const mocks = vi.hoisted(() => ({
  getSession: vi.fn(),
  getMembership: vi.fn(),
  isPlatformOwner: vi.fn(),
  getCourseById: vi.fn(),
  updateCourse: vi.fn(),
  getCrossroadsStatus: vi.fn(),
  indexCrossroads: vi.fn(),
}));

vi.mock("@/lib/session", () => ({
  getSession: mocks.getSession,
  getMembership: mocks.getMembership,
  isPlatformOwner: mocks.isPlatformOwner,
}));
vi.mock("@/db/scoped", () => ({
  getScopedDb: async () => ({ tenantId: TENANT, getCourseById: mocks.getCourseById }),
}));
vi.mock("@/db/queries/authoring", () => ({ updateCourse: mocks.updateCourse }));
vi.mock("@/lib/cyoa/crossroads-index", () => ({
  getCrossroadsStatus: mocks.getCrossroadsStatus,
  indexCrossroads: mocks.indexCrossroads,
  crossroadsEmbedderConfigured: () => true,
}));

import { POST } from "@/app/api/courses/bulk-navigation/route";
import { summarizeBulkNavigation, mapLimit, type BulkNavigationResult } from "@/lib/bulk-navigation";

const TENANT = "tenant-1";
const OWNER = "owner-1";
const INSTRUCTOR = "instructor-1";
const id = (n: number) => `00000000-0000-4000-8000-00000000000${n}`;

// 1, 2: INSTRUCTOR's linear courses · 3: someone else's · 4: someone else's owner-only course ·
// 5: INSTRUCTOR's, already CYOA · 9: not on this school (getCourseById resolves only this tenant's courses).
const COURSES: Record<string, Record<string, unknown>> = {
  [id(1)]: { id: id(1), tenantId: TENANT, instructorId: INSTRUCTOR, title: "Knots", navigationMode: "linear", ownerOnly: false },
  [id(2)]: { id: id(2), tenantId: TENANT, instructorId: INSTRUCTOR, title: "Rope", navigationMode: "linear", ownerOnly: false },
  [id(3)]: { id: id(3), tenantId: TENANT, instructorId: "someone-else", title: "Theirs", navigationMode: "linear", ownerOnly: false },
  [id(4)]: { id: id(4), tenantId: TENANT, instructorId: "someone-else", title: "Review copy", navigationMode: "linear", ownerOnly: true },
  [id(5)]: { id: id(5), tenantId: TENANT, instructorId: INSTRUCTOR, title: "Maps", navigationMode: "cyoa", ownerOnly: false },
};

type Who = "owner" | "instructor" | "brand_admin" | null;
function as(who: Who) {
  if (!who) {
    mocks.getSession.mockResolvedValue(null);
    return;
  }
  const uid = who === "owner" ? OWNER : who === "instructor" ? INSTRUCTOR : "admin-1";
  mocks.getSession.mockResolvedValue({ user: { id: uid, email: `${who}@example.com` } });
  mocks.isPlatformOwner.mockImplementation(async (u: string) => u === OWNER);
  mocks.getMembership.mockImplementation(async (_u: string, tenantId: string) =>
    who === "brand_admin" && tenantId === TENANT ? "brand_admin" : "instructor",
  );
}

const post = (body: unknown) =>
  POST(new Request("http://school.test/api/courses/bulk-navigation", { method: "POST", body: JSON.stringify(body) }));

async function run(courseIds: string[], navigationMode: string) {
  const res = await post({ courseIds, navigationMode });
  return { status: res.status, body: (await res.json()) as { results: BulkNavigationResult[]; summary: ReturnType<typeof summarizeBulkNavigation>; error?: string } };
}

beforeEach(() => {
  vi.clearAllMocks();
  as("instructor");
  mocks.getCourseById.mockImplementation(async (cid: string) => (COURSES[cid] ? { ...COURSES[cid] } : null));
  mocks.updateCourse.mockImplementation(async (_t: string, cid: string, patch: object) => ({ ...COURSES[cid], ...patch }));
  mocks.getCrossroadsStatus.mockImplementation(async (cid: string) => (cid === id(5) ? { published: 4, stale: 0 } : { published: 6, stale: 6 }));
});

describe("POST /api/courses/bulk-navigation", () => {
  it("401 signed out, 400 on a bad body, and writes nothing", async () => {
    as(null);
    expect((await run([id(1)], "cyoa")).status).toBe(401);
    as("instructor");
    expect((await run([], "cyoa")).status).toBe(400);
    expect((await run(["not-a-uuid"], "cyoa")).status).toBe(400);
    expect((await run([id(1)], "random")).status).toBe(400);
    expect((await post(null)).status).toBe(400);
    expect(mocks.updateCourse).not.toHaveBeenCalled();
  });

  it("an instructor's mixed selection: own courses change, others are refused by id only", async () => {
    const { status, body } = await run([id(1), id(2), id(3), id(4), id(5), id(9), id(1)], "cyoa");
    expect(status).toBe(200);
    const by = new Map(body.results.map((r) => [r.courseId, r]));
    expect(body.results).toHaveLength(6); // the repeated id is answered once
    expect(by.get(id(1))).toMatchObject({ status: "updated", title: "Knots", crossroads: { published: 6, stale: 6 } });
    expect(by.get(id(2))).toMatchObject({ status: "updated", title: "Rope" });
    expect(by.get(id(3))).toEqual({ courseId: id(3), status: "forbidden" });
    // owner-only, not theirs: the same not-found a missing course gets, so it confirms nothing
    expect(by.get(id(4))).toEqual({ courseId: id(4), status: "not-found" });
    expect(by.get(id(5))).toMatchObject({ status: "unchanged", crossroads: { published: 4, stale: 0 } });
    expect(by.get(id(9))).toEqual({ courseId: id(9), status: "not-found" });

    expect(mocks.updateCourse.mock.calls.map((c) => c[1]).sort()).toEqual([id(1), id(2)]);
    for (const c of mocks.updateCourse.mock.calls) {
      expect(c[0]).toBe(TENANT);
      expect(c[2]).toEqual({ navigationMode: "cyoa" });
    }
    expect(body.summary).toEqual({
      updated: 2,
      unchanged: 1,
      refused: 3,
      failed: 0,
      coursesNeedingCrossroads: 2,
      lessonsNeedingCrossroads: 12,
    });
    // the route reports what needs embeddings; it never embeds
    expect(mocks.indexCrossroads).not.toHaveBeenCalled();
  });

  it("this school's brand_admin may set any course but an owner-only one; the owner may set that too", async () => {
    as("brand_admin");
    let { body } = await run([id(3), id(4)], "cyoa");
    expect(body.results.map((r) => r.status)).toEqual(["updated", "not-found"]);

    vi.clearAllMocks();
    as("owner");
    mocks.getCourseById.mockImplementation(async (cid: string) => (COURSES[cid] ? { ...COURSES[cid] } : null));
    mocks.updateCourse.mockImplementation(async (_t: string, cid: string, patch: object) => ({ ...COURSES[cid], ...patch }));
    mocks.getCrossroadsStatus.mockResolvedValue({ published: 1, stale: 0 });
    ({ body } = await run([id(3), id(4)], "cyoa"));
    expect(body.results.map((r) => r.status)).toEqual(["updated", "updated"]);
    expect(body.summary.coursesNeedingCrossroads).toBe(0);
  });

  it("to Linear: no crossroads read, already-linear courses unchanged", async () => {
    const { body } = await run([id(1), id(5)], "linear");
    expect(body.results).toEqual([
      { courseId: id(1), status: "unchanged", title: "Knots" },
      { courseId: id(5), status: "updated", title: "Maps" },
    ]);
    expect(mocks.getCrossroadsStatus).not.toHaveBeenCalled();
  });

  it("a failing course is reported as failed and does not stop the others; a failed status read keeps the save", async () => {
    mocks.updateCourse.mockImplementation(async (_t: string, cid: string, patch: object) => {
      if (cid === id(2)) throw new Error("db down");
      return { ...COURSES[cid], ...patch };
    });
    mocks.getCrossroadsStatus.mockRejectedValue(new Error("read failed"));
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    const { body } = await run([id(1), id(2)], "cyoa");
    spy.mockRestore();
    expect(body.results).toEqual([
      { courseId: id(1), status: "updated", title: "Knots" },
      { courseId: id(2), status: "failed" },
    ]);
    expect(body.summary).toMatchObject({ updated: 1, failed: 1 });
  });
});

describe("helpers", () => {
  it("mapLimit keeps order and never runs more than the limit at once", async () => {
    let inFlight = 0;
    let peak = 0;
    const out = await mapLimit([1, 2, 3, 4, 5, 6, 7], 3, async (n) => {
      inFlight++;
      peak = Math.max(peak, inFlight);
      await new Promise((r) => setTimeout(r, 5 - (n % 3)));
      inFlight--;
      return n * 10;
    });
    expect(out).toEqual([10, 20, 30, 40, 50, 60, 70]);
    expect(peak).toBeLessThanOrEqual(3);
    expect(await mapLimit([], 3, async (n: number) => n)).toEqual([]);
  });
});
