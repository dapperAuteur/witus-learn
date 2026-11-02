import { readFileSync } from "node:fs";
import { join } from "node:path";
import { beforeEach, describe, expect, it, vi } from "vitest";

/**
 * Tours from the field v2 (plans/96, acceptance 7): every surface that names a lesson whose tour is
 * live shows the cleaned title, never "(360 tour, forthcoming)": in-course search (driven for real
 * here), offline downloads and /api/v1 (pinned in their source, since both read the database).
 */

const mocks = vi.hoisted(() => ({
  getSession: vi.fn(),
  getMembership: vi.fn(),
  isPlatformOwner: vi.fn(),
  getCourseById: vi.fn(),
  listPublishedLessonSearchRows: vi.fn(),
  liveToursForCourse: vi.fn(),
}));

vi.mock("@/lib/session", () => ({
  getSession: mocks.getSession,
  getMembership: mocks.getMembership,
  isPlatformOwner: mocks.isPlatformOwner,
}));
vi.mock("@/db/scoped", () => ({
  getScopedDb: async () => ({
    tenantId: "tenant-1",
    getCourseById: mocks.getCourseById,
    listPublishedLessonSearchRows: mocks.listPublishedLessonSearchRows,
  }),
}));
vi.mock("@/lib/lesson-tours", () => ({ liveToursForCourse: mocks.liveToursForCourse }));
vi.mock("@/lib/active-learner", () => ({ getActiveLearner: async () => null }));

import { GET as search } from "@/app/api/courses/[id]/search/route";

const COURSE = { id: "c1", tenantId: "tenant-1", instructorId: "me", ownerOnly: false, isPublished: true, vettedAt: new Date() };
const TOUR = {
  id: "l-tour",
  slug: "fl-now-tour",
  title: "17 · Now: walk the shore (360 tour, forthcoming)",
  body: "**The 360 tour for this lesson is forthcoming.** Not here yet.\n\n**Look at the shore.** The marker stands at the point.",
  lessonType: "virtual_tour",
  contentUrl: null,
};

const run = async (q: string) => {
  const res = await search(new Request(`http://school.test/api/courses/c1/search?q=${encodeURIComponent(q)}`), {
    params: Promise.resolve({ id: "c1" }),
  });
  return (await res!.json()) as { results: { title: string; snippet: string }[] };
};

beforeEach(() => {
  vi.clearAllMocks();
  mocks.getSession.mockResolvedValue({ user: { id: "me", email: "me@example.org" } });
  mocks.isPlatformOwner.mockResolvedValue(false);
  mocks.getMembership.mockResolvedValue("instructor");
  mocks.getCourseById.mockResolvedValue(COURSE);
  mocks.listPublishedLessonSearchRows.mockResolvedValue([TOUR]);
});

describe("in-course search", () => {
  it("names a filled tour lesson without the suffix, and no longer finds the forthcoming paragraph", async () => {
    mocks.liveToursForCourse.mockResolvedValue(new Map([["l-tour", {}]]));
    const shore = await run("shore");
    expect(shore.results[0].title).toBe("17 · Now: walk the shore");
    expect(JSON.stringify(shore)).not.toMatch(/forthcoming/i);
    expect((await run("forthcoming")).results).toEqual([]);
  });

  it("shows an unfilled slot exactly as written", async () => {
    mocks.liveToursForCourse.mockResolvedValue(new Map());
    expect((await run("shore")).results[0].title).toBe(TOUR.title);
  });
});

describe("offline downloads and /api/v1 use the same display rule", () => {
  const src = (p: string) => readFileSync(join(process.cwd(), p), "utf8");

  it("offline metadata names a lesson the way the page does", () => {
    const course = src("src/app/(tenant)/[username]/[courseSlug]/page.tsx");
    expect(course).toContain("lessonTitle: titleOf(l),");
    expect(course).toContain("lessonTitle={titleOf(lesson)}");
    expect(course).not.toMatch(/lessonTitle: l\.title/);
    const lesson = src("src/app/(tenant)/[username]/[courseSlug]/lesson/[lessonSlug]/page.tsx");
    expect(lesson).toContain("lessonTitle: titleOf(l),");
    expect(lesson).not.toMatch(/lessonTitle: l\.title/);
  });

  it("/api/v1 cleans the title of a live tour lesson in the course detail and the lesson read (Q4)", () => {
    const api = src("src/db/queries/api-v1.ts");
    expect(api).toContain("title: displayTourTitle(l.title, filled.has(l.id))");
    expect(api).toContain("title: displayTourTitle(lesson.title, await hasLiveTour(tenantId, lesson))");
    // Tenant passed explicitly from the API key, never a host; the tour itself is not carried.
    expect(api).toContain("listCourseTourEmbeds(tenantId, courseId)");
    expect(api).toContain("getLessonTourEmbed(tenantId, lesson.id)");
    expect(api).not.toMatch(/credit|creditLine|storageUrl/);
  });
});
