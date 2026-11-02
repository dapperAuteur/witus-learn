import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

/**
 * Tours from the field v2 (plans/96): editing a published tour from /teach/tours.
 *
 *   PATCH /api/courses/[id]/lessons/[lessonId]/tour { creditLine?, attest?: true }
 *   POST  /api/courses/[id]/lessons/[lessonId]/tour/check
 *
 * Both: 401 signed out; 404 for a malformed id, a course that does not resolve in this tenant, or a
 * lesson of another course; 403 for a signed-in user who may not edit the course (and 404, not 403,
 * on an owner-only course, so its existence is not confirmed); a school admin may (Q3). PATCH: 400 on
 * a credit over 400 characters or an empty body; 200 with a valid one. Check: fetches the STORED link
 * and returns the answer, never stores it.
 *
 * loadEditableCourse and canAccessCourse run for real; only the session, membership and database
 * reads are mocked.
 */

const mocks = vi.hoisted(() => ({
  getSession: vi.fn(),
  getMembership: vi.fn(),
  isPlatformOwner: vi.fn(),
  getCourseById: vi.fn(),
  updateLessonTourEmbed: vi.fn(),
  getLessonTourUrl: vi.fn(),
  deleteLessonTourEmbed: vi.fn(),
  getLessonById: vi.fn(),
  bumpCourseContentVersion: vi.fn(),
}));

vi.mock("@/lib/session", () => ({
  getSession: mocks.getSession,
  getMembership: mocks.getMembership,
  isPlatformOwner: mocks.isPlatformOwner,
}));
vi.mock("@/db/scoped", () => ({
  getScopedDb: async () => ({
    tenantId: TENANT,
    getCourseById: mocks.getCourseById,
    updateLessonTourEmbed: mocks.updateLessonTourEmbed,
    getLessonTourUrl: mocks.getLessonTourUrl,
    deleteLessonTourEmbed: mocks.deleteLessonTourEmbed,
  }),
}));
vi.mock("@/db/queries/authoring", () => ({
  getLessonById: mocks.getLessonById,
  bumpCourseContentVersion: mocks.bumpCourseContentVersion,
}));

import { PATCH, DELETE } from "@/app/api/courses/[id]/lessons/[lessonId]/tour/route";
import { POST as CHECK } from "@/app/api/courses/[id]/lessons/[lessonId]/tour/check/route";

const TENANT = "tenant-1";
const COURSE = { id: "11111111-1111-4111-8111-111111111111", tenantId: TENANT, instructorId: "instructor-1", ownerOnly: false };
const LESSON = "22222222-2222-4222-8222-222222222222";
const LINK = "https://drive.google.com/file/d/abc123/view";

function as(who: "instructor" | "owner" | "school_admin" | "teacher") {
  const id = who === "instructor" ? COURSE.instructorId : `${who}-1`;
  mocks.getSession.mockResolvedValue({ user: { id, name: who } });
  mocks.isPlatformOwner.mockResolvedValue(who === "owner");
  mocks.getMembership.mockResolvedValue(who === "school_admin" ? "brand_admin" : "instructor");
}

/** A route's Response, asserted present (the handlers' inferred type allows undefined). */
async function must(res: Promise<Response | undefined>): Promise<Response> {
  const r = await res;
  if (!r) throw new Error("route returned nothing");
  return r;
}

const ctx = (id = COURSE.id, lessonId = LESSON) => ({ params: Promise.resolve({ id, lessonId }) });
const patch = (body: unknown, id?: string, lessonId?: string) =>
  must(
    PATCH(
      new Request("http://school.test/x", { method: "PATCH", body: JSON.stringify(body), headers: { "content-type": "application/json" } }),
      ctx(id, lessonId),
    ),
  );
const check = (id?: string, lessonId?: string) => must(CHECK(new Request("http://school.test/x", { method: "POST" }), ctx(id, lessonId)));
const remove = () => must(DELETE(new Request("http://school.test/x", { method: "DELETE" }), ctx()));

beforeEach(() => {
  vi.clearAllMocks();
  as("instructor");
  mocks.getCourseById.mockResolvedValue(COURSE);
  mocks.getLessonById.mockResolvedValue({ id: LESSON, courseId: COURSE.id });
  mocks.updateLessonTourEmbed.mockImplementation(async (input: { creditLine?: string; attestedAt?: Date }) => ({
    creditLine: input.creditLine ?? "Old credit.",
    peopleAttestedAt: input.attestedAt ?? null,
  }));
  mocks.getLessonTourUrl.mockResolvedValue(LINK);
});

afterEach(() => vi.restoreAllMocks());

describe.each([
  ["PATCH", () => patch({ creditLine: "Photo by BAM." })],
  ["check", () => check()],
])("%s: who may", (_name, call) => {
  it("is 401 signed out", async () => {
    mocks.getSession.mockResolvedValue(null);
    expect((await call()).status).toBe(401);
  });

  it("is 403 for a signed-in teacher who does not run the course", async () => {
    as("teacher");
    expect((await call()).status).toBe(403);
  });

  it("is 404, never 403, on an owner-only course for anyone but its owner and instructor", async () => {
    as("school_admin");
    mocks.getCourseById.mockResolvedValue({ ...COURSE, ownerOnly: true });
    expect((await call()).status).toBe(404);
  });

  it("is 404 for a course in another tenant, or a lesson of another course", async () => {
    mocks.getCourseById.mockResolvedValue(null);
    expect((await call()).status).toBe(404);
    mocks.getCourseById.mockResolvedValue(COURSE);
    mocks.getLessonById.mockResolvedValue({ id: LESSON, courseId: "another-course" });
    expect((await call()).status).toBe(404);
  });

  it("lets the instructor, the owner and a school admin through", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(new Response(null, { status: 200 }));
    for (const who of ["instructor", "owner", "school_admin"] as const) {
      as(who);
      expect((await call()).status).toBe(200);
    }
  });
});

describe("PATCH a tour", () => {
  it("is 404 for a malformed id", async () => {
    expect((await patch({ creditLine: "x" }, "nope")).status).toBe(404);
    expect((await patch({ creditLine: "x" }, COURSE.id, "nope")).status).toBe(404);
  });

  it("refuses a 401-character credit, an empty one, an empty body and an unknown field", async () => {
    expect((await patch({ creditLine: "x".repeat(401) })).status).toBe(400);
    expect((await patch({ creditLine: "   " })).status).toBe(400);
    expect((await patch({})).status).toBe(400);
    expect((await patch({ url: "https://elsewhere.example/x.jpg" })).status).toBe(400);
    expect((await patch({ attest: false })).status).toBe(400);
    expect(mocks.updateLessonTourEmbed).not.toHaveBeenCalled();
  });

  it("saves a tidied credit and marks offline copies stale", async () => {
    const res = await patch({ creditLine: "  Photo by BAM\n at the porch. " });
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ tour: { creditLine: "Photo by BAM at the porch.", peopleAttestedAt: null } });
    expect(mocks.updateLessonTourEmbed).toHaveBeenCalledWith({
      courseId: COURSE.id,
      lessonId: LESSON,
      creditLine: "Photo by BAM at the porch.",
      attestedAt: undefined,
    });
    expect(mocks.bumpCourseContentVersion).toHaveBeenCalledWith(COURSE.id);
  });

  it("records the attestation now, without touching the credit", async () => {
    const res = await patch({ attest: true });
    expect(res.status).toBe(200);
    const input = mocks.updateLessonTourEmbed.mock.calls[0][0];
    expect(input.creditLine).toBeUndefined();
    expect(input.attestedAt).toBeInstanceOf(Date);
    expect(mocks.bumpCourseContentVersion).not.toHaveBeenCalled();
  });

  it("is 404 when the lesson has no tour", async () => {
    mocks.updateLessonTourEmbed.mockResolvedValue(null);
    expect((await patch({ creditLine: "Photo." })).status).toBe(404);
  });
});

describe("DELETE a tour still answers as before", () => {
  it("removes it for an editor, and is 401 signed out", async () => {
    mocks.deleteLessonTourEmbed.mockResolvedValue(true);
    expect((await remove()).status).toBe(200);
    mocks.getSession.mockResolvedValue(null);
    expect((await remove()).status).toBe(401);
  });
});

describe("Check link", () => {
  it("fetches the STORED link and reports the answer", async () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValue(new Response(null, { status: 200 }));
    const res = await check();
    expect(res.status).toBe(200);
    expect(await res.json()).toMatchObject({ status: 200, reachable: true, finalHost: "drive.google.com" });
    expect(fetchSpy.mock.calls[0][0]).toBe(LINK);
  });

  it("reports a dead link as not reachable", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(new Response(null, { status: 404 }));
    expect(await (await check()).json()).toMatchObject({ status: 404, reachable: false });
  });

  it("is 404 when the lesson has no tour", async () => {
    mocks.getLessonTourUrl.mockResolvedValue(null);
    expect((await check()).status).toBe(404);
  });
});
