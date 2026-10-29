import { beforeEach, describe, expect, it, vi } from "vitest";
import { strFromU8, unzipSync } from "fflate";

/**
 * GET /api/admin/courses/[id]/epub and /pdf: WHO may download a course and WHAT goes in the file.
 *
 *   1. The gate (courseExportAccess in src/lib/api.ts, exercised for real here: only the session,
 *      membership and owner reads are mocked): signed out is 401; a course that does not resolve in
 *      this tenant is 404; an OPEN course exports for a tenant admin and 403s anyone else.
 *   2. A CLOSED course (private, or held) exports for the platform owner, its own instructor and a
 *      brand_admin of its school (BAM 2026-10-29). An OWNER-ONLY course (courses.owner_only) exports
 *      only for the owner and its own instructor. Everyone else, a brand_admin of another school or of
 *      an owner-only course's school included, gets the same 404 as a course that does not exist, so
 *      the route never confirms it is there. Nothing is read from the lessons table.
 *   3. The file: an attachment named after the slug, never cached, built from the PUBLISHED
 *      lessons only, with the module titles as sections.
 */

const mocks = vi.hoisted(() => ({
  getSession: vi.fn(),
  getMembership: vi.fn(),
  isPlatformOwner: vi.fn(),
  getCourseByIdOrSlug: vi.fn(),
  listLessons: vi.fn(),
  listModules: vi.fn(),
}));

vi.mock("@/lib/session", () => ({
  getSession: mocks.getSession,
  getMembership: mocks.getMembership,
  isPlatformOwner: mocks.isPlatformOwner,
}));
vi.mock("@/db/scoped", () => ({
  getScopedDb: async () => ({ tenantId: TENANT, getCourseByIdOrSlug: mocks.getCourseByIdOrSlug }),
}));
vi.mock("@/db/queries/authoring", () => ({ listLessons: mocks.listLessons, listModules: mocks.listModules }));

import { GET as getEpub } from "@/app/api/admin/courses/[id]/epub/route";
import { GET as getPdf } from "@/app/api/admin/courses/[id]/pdf/route";

const TENANT = "tenant-1";
const COURSE = {
  id: "11111111-2222-4333-8444-555555555555",
  tenantId: TENANT,
  instructorId: "course-instructor-1",
  slug: "faa-part-107",
  title: "FAA Part 107",
  description: "Pass the exam.",
  visibility: "public",
  publishHoldReason: null as string | null,
  ownerOnly: false,
};
const session = { user: { id: "admin-1", name: "Admin" } };

const call = (route: typeof getEpub, id = "faa-part-107") =>
  route(new Request("http://school.test/api/admin/courses/x"), { params: Promise.resolve({ id }) });

/** Who is asking: a brand_admin by default. Membership is per tenant: the request resolves to
 *  TENANT, and the other school's admin is a brand_admin of "tenant-2" only. */
function as(who: "brand_admin" | "other_school_admin" | "owner" | "instructor" | "teacher") {
  const id = who === "instructor" ? COURSE.instructorId : `${who}-1`;
  mocks.getSession.mockResolvedValue({ user: { id, name: who } });
  mocks.isPlatformOwner.mockResolvedValue(who === "owner");
  mocks.getMembership.mockImplementation(async (_uid: string, tenantId: string) => {
    if (who === "brand_admin") return tenantId === TENANT ? "brand_admin" : null;
    if (who === "other_school_admin") return tenantId === "tenant-2" ? "brand_admin" : null;
    return "instructor";
  });
}

beforeEach(() => {
  vi.clearAllMocks();
  mocks.getSession.mockResolvedValue(session);
  mocks.isPlatformOwner.mockResolvedValue(false);
  mocks.getMembership.mockResolvedValue("brand_admin");
  mocks.getCourseByIdOrSlug.mockResolvedValue(COURSE);
  mocks.listModules.mockResolvedValue([
    { id: "m1", courseId: COURSE.id, title: "Module 1", sortOrder: 1 },
    { id: "m2", courseId: COURSE.id, title: "Module 2", sortOrder: 2 },
  ]);
  mocks.listLessons.mockResolvedValue([
    { id: "l1", title: "Published One", slug: "one", moduleId: "m1", lessonType: "text", isPublished: true, textContent: "# Published One\n\nBody.", quizContent: null, recallContent: null },
    { id: "l2", title: "Draft Lesson", slug: "draft", moduleId: "m1", lessonType: "text", isPublished: false, textContent: "Secret draft.", quizContent: null, recallContent: null },
    { id: "l3", title: "Quiz Two", slug: "quiz", moduleId: "m2", lessonType: "quiz", isPublished: true, textContent: null, quizContent: { questions: [{ prompt: "Q?", options: ["a", "b"], correctIndex: 1, sourceLessonSlug: "one" }] }, recallContent: null },
  ]);
});

describe.each([
  ["epub", getEpub],
  ["pdf", getPdf],
] as const)("GET /api/admin/courses/[id]/%s gate", (_name, route) => {
  it("401s signed out", async () => {
    mocks.getSession.mockResolvedValue(null);
    const res = await call(route);
    expect(res.status).toBe(401);
    expect(mocks.listLessons).not.toHaveBeenCalled();
  });

  it("403s a signed-in viewer who is not a tenant admin on an open course", async () => {
    as("teacher");
    const res = await call(route);
    expect(res.status).toBe(403);
    expect(mocks.listLessons).not.toHaveBeenCalled();
  });

  it("404s a course that does not resolve in this tenant", async () => {
    mocks.getCourseByIdOrSlug.mockResolvedValue(null);
    const res = await call(route, "someone-elses-course");
    expect(res.status).toBe(404);
    expect(mocks.getCourseByIdOrSlug).toHaveBeenCalledWith("someone-elses-course");
    expect(mocks.listLessons).not.toHaveBeenCalled();
  });

  describe.each([
    ["private", { visibility: "private", publishHoldReason: null }],
    ["held", { visibility: "public", publishHoldReason: "Private review copy of a copyrighted book." }],
  ] as const)("a %s course", (_kind, closed) => {
    beforeEach(() => mocks.getCourseByIdOrSlug.mockResolvedValue({ ...COURSE, ...closed }));

    it.each(["other_school_admin", "teacher"] as const)("is a 404 to a %s, exactly like a missing course", async (who) => {
      as(who);
      const res = await call(route);
      expect(res.status).toBe(404);
      expect(await res.json()).toEqual({ error: "Course not found." });
      expect(mocks.listLessons).not.toHaveBeenCalled();
    });

    it.each(["owner", "instructor", "brand_admin"] as const)("downloads for the %s", async (who) => {
      as(who);
      const res = await call(route);
      expect(res.status).toBe(200);
      expect(mocks.listLessons).toHaveBeenCalledWith(COURSE.id);
    });
  });

  describe("an owner-only course (the private pipeline)", () => {
    beforeEach(() =>
      mocks.getCourseByIdOrSlug.mockResolvedValue({
        ...COURSE,
        visibility: "private",
        publishHoldReason: "Private review copy of a copyrighted book.",
        ownerOnly: true,
      }),
    );

    it.each(["brand_admin", "other_school_admin", "teacher"] as const)("is a 404 to a %s, its school's admin included", async (who) => {
      as(who);
      const res = await call(route);
      expect(res.status).toBe(404);
      expect(await res.json()).toEqual({ error: "Course not found." });
      expect(mocks.listLessons).not.toHaveBeenCalled();
    });

    it.each(["owner", "instructor"] as const)("downloads for the %s", async (who) => {
      as(who);
      const res = await call(route);
      expect(res.status).toBe(200);
    });
  });
});

describe("GET /api/admin/courses/[id]/epub", () => {
  it("downloads an EPUB of the published lessons, sectioned by module, named after the slug", async () => {
    const res = await call(getEpub);
    expect(res.status).toBe(200);
    expect(res.headers.get("content-type")).toBe("application/epub+zip");
    expect(res.headers.get("content-disposition")).toBe('attachment; filename="faa-part-107.epub"');
    expect(res.headers.get("cache-control")).toBe("no-store");
    const bytes = new Uint8Array(await res.arrayBuffer());
    expect(String.fromCharCode(bytes[0], bytes[1])).toBe("PK");
    const files = unzipSync(bytes);
    const chapters = Object.keys(files).filter((f) => f.startsWith("OEBPS/text/"));
    expect(chapters).toHaveLength(2); // the draft is not in the book
    const all = chapters.map((f) => strFromU8(files[f])).join("\n");
    expect(all).toContain("Published One");
    expect(all).toContain("Module 2");
    expect(all).not.toContain("Secret draft");
    expect(strFromU8(files["OEBPS/content.opf"])).toContain(`urn:uuid:${COURSE.id}`);
    expect(mocks.listLessons).toHaveBeenCalledWith(COURSE.id);
  });

  it("falls back to the course id for the filename when the course has no slug", async () => {
    mocks.getCourseByIdOrSlug.mockResolvedValue({ ...COURSE, slug: null });
    const res = await call(getEpub, COURSE.id);
    expect(res.headers.get("content-disposition")).toBe(`attachment; filename="${COURSE.id}.epub"`);
  });
});

describe("GET /api/admin/courses/[id]/pdf", () => {
  it("downloads a PDF of the published lessons", async () => {
    const res = await call(getPdf);
    expect(res.status).toBe(200);
    expect(res.headers.get("content-type")).toBe("application/pdf");
    expect(res.headers.get("content-disposition")).toBe('attachment; filename="faa-part-107.pdf"');
    expect(res.headers.get("cache-control")).toBe("no-store");
    const bytes = Buffer.from(await res.arrayBuffer());
    expect(bytes.subarray(0, 5).toString("latin1")).toBe("%PDF-");
    const marks = [...bytes.toString("latin1").matchAll(/\/Title \(([^)]*)\)/g)].map((m) => m[1]);
    expect(marks).toContain("Published One");
    expect(marks).toContain("Quiz Two");
    expect(marks).not.toContain("Draft Lesson");
  });
});
