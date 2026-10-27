import { beforeEach, describe, expect, it, vi } from "vitest";
import { strFromU8, unzipSync } from "fflate";

/**
 * GET /api/admin/courses/[id]/epub and /pdf: WHO may download a course and WHAT goes in the file.
 *
 *   1. The gate: signed out is 401, signed in but not a tenant admin (an ordinary teacher) is 403,
 *      and nothing is read from the lessons table on either.
 *   2. Tenant scope: the course is resolved through the scoped DAL, so a course that does not
 *      resolve in this tenant (another brand's course, or no such course) is a 404.
 *   3. The file: an attachment named after the slug, never cached, built from the PUBLISHED
 *      lessons only, with the module titles as sections.
 */

const mocks = vi.hoisted(() => ({
  apiContext: vi.fn(),
  isTenantAdmin: vi.fn(),
  getCourseByIdOrSlug: vi.fn(),
  listLessons: vi.fn(),
  listModules: vi.fn(),
}));

vi.mock("@/lib/api", () => ({
  apiContext: mocks.apiContext,
  isTenantAdmin: mocks.isTenantAdmin,
  errorJson: (error: string, status: number) => Response.json({ error }, { status }),
}));
vi.mock("@/db/queries/authoring", () => ({ listLessons: mocks.listLessons, listModules: mocks.listModules }));

import { GET as getEpub } from "@/app/api/admin/courses/[id]/epub/route";
import { GET as getPdf } from "@/app/api/admin/courses/[id]/pdf/route";

const TENANT = "tenant-1";
const COURSE = {
  id: "11111111-2222-4333-8444-555555555555",
  tenantId: TENANT,
  slug: "faa-part-107",
  title: "FAA Part 107",
  description: "Pass the exam.",
};
const session = { user: { id: "admin-1", name: "Admin" } };

const call = (route: typeof getEpub, id = "faa-part-107") =>
  route(new Request("http://school.test/api/admin/courses/x"), { params: Promise.resolve({ id }) });

beforeEach(() => {
  vi.clearAllMocks();
  mocks.apiContext.mockResolvedValue({ sdb: { tenantId: TENANT, getCourseByIdOrSlug: mocks.getCourseByIdOrSlug }, session });
  mocks.isTenantAdmin.mockResolvedValue(true);
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
    mocks.apiContext.mockResolvedValue({ sdb: { tenantId: TENANT, getCourseByIdOrSlug: mocks.getCourseByIdOrSlug }, session: null });
    const res = await call(route);
    expect(res.status).toBe(401);
    expect(mocks.listLessons).not.toHaveBeenCalled();
  });

  it("403s a signed-in viewer who is not a tenant admin, using the gradebook's gate", async () => {
    mocks.isTenantAdmin.mockResolvedValue(false);
    const res = await call(route);
    expect(res.status).toBe(403);
    expect(mocks.isTenantAdmin).toHaveBeenCalledWith(session, TENANT);
    expect(mocks.getCourseByIdOrSlug).not.toHaveBeenCalled();
    expect(mocks.listLessons).not.toHaveBeenCalled();
  });

  it("404s a course that does not resolve in this tenant", async () => {
    mocks.getCourseByIdOrSlug.mockResolvedValue(null);
    const res = await call(route, "someone-elses-course");
    expect(res.status).toBe(404);
    expect(mocks.getCourseByIdOrSlug).toHaveBeenCalledWith("someone-elses-course");
    expect(mocks.listLessons).not.toHaveBeenCalled();
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
