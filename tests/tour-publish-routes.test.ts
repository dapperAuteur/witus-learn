import { beforeEach, describe, expect, it, vi } from "vitest";

/**
 * Tours from the field v2 (plans/96): the publish route and the capture edit route.
 *
 *   POST /api/field-log/projects/[id]/legs/[legId]/tour-targets
 *     - 401 signed out; 404 for a project or capture that is not this user's (the tenant check);
 *     - 403 for anyone but the owner, the course's instructor, or (Q3) a school admin on a course that
 *       is not owner-only;
 *     - 422 with the attestation sentence unless `peopleAttested: true`; 201 with it, and the row is
 *       written with the moment it was confirmed.
 *   PATCH /api/field-log/projects/[id]/captures/[captureId] { projection }
 *     - 401 signed out; 404 for a capture outside the project; 400 for a 360 mark on anything but a
 *       photo; 200 otherwise.
 *
 * Only the session, membership and database reads are mocked: the permission and eligibility rules
 * run for real.
 */

const mocks = vi.hoisted(() => ({
  getSession: vi.fn(),
  getMembership: vi.fn(),
  isPlatformOwner: vi.fn(),
  getProjectBundle: vi.fn(),
  updateCapture: vi.fn(),
  getLessonById: vi.fn(),
  getUsername: vi.fn(),
  bumpCourseContentVersion: vi.fn(),
  getCourseById: vi.fn(),
  getLessonTourEmbed: vi.fn(),
  insertLessonTourEmbed: vi.fn(),
  listTourSlots: vi.fn(),
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
    getLessonTourEmbed: mocks.getLessonTourEmbed,
    insertLessonTourEmbed: mocks.insertLessonTourEmbed,
    listTourSlots: mocks.listTourSlots,
  }),
}));
vi.mock("@/db/queries/field-log", () => ({
  getProjectBundle: mocks.getProjectBundle,
  updateCapture: mocks.updateCapture,
}));
vi.mock("@/db/queries/authoring", () => ({
  getLessonById: mocks.getLessonById,
  getUsername: mocks.getUsername,
  bumpCourseContentVersion: mocks.bumpCourseContentVersion,
}));

import { POST as publish } from "@/app/api/field-log/projects/[id]/legs/[legId]/tour-targets/route";
import { PATCH as patchCapture } from "@/app/api/field-log/projects/[id]/captures/[captureId]/route";
import { PEOPLE_ATTESTATION_REQUIRED } from "@/lib/field-log-tour";

const TENANT = "tenant-1";
const PROJECT = "11111111-1111-4111-8111-111111111111";
const LEG = "22222222-2222-4222-8222-222222222222";
const CAPTURE = "33333333-3333-4333-8333-333333333333";
const VIDEO = "44444444-4444-4444-8444-444444444444";
const LESSON = "55555555-5555-4555-8555-555555555555";
const COURSE = { id: "66666666-6666-4666-8666-666666666666", instructorId: "instructor-1", ownerOnly: false, title: "Fox Lake", slug: "fox-lake" };
const PANO = "https://res.cloudinary.com/demo/image/upload/v1/marker.jpg";

const bundle = {
  legs: [{ id: LEG, name: "The marker", locationLabel: "Fox Lake, Indiana", notes: null, permissionNote: "Public ground." }],
  captures: [
    { id: CAPTURE, legId: LEG, kind: "photo", subject: null, consentStatus: "na", involvesMinor: false, storageUrl: PANO, projection: "equirectangular", capturedAt: null },
    { id: VIDEO, legId: LEG, kind: "video", subject: null, consentStatus: "na", involvesMinor: false, storageUrl: "https://example.org/a.mp4", projection: null, capturedAt: null },
  ],
};

function as(who: "instructor" | "owner" | "school_admin" | "stranger") {
  const id = who === "instructor" ? COURSE.instructorId : `${who}-1`;
  mocks.getSession.mockResolvedValue({ user: { id, name: "Jordan Lee" } });
  mocks.isPlatformOwner.mockResolvedValue(who === "owner");
  mocks.getMembership.mockResolvedValue(who === "school_admin" ? "brand_admin" : who === "stranger" ? "instructor" : null);
}

const post = (body: Record<string, unknown>) =>
  publish(
    new Request("http://school.test/x", { method: "POST", body: JSON.stringify(body), headers: { "content-type": "application/json" } }),
    { params: Promise.resolve({ id: PROJECT, legId: LEG }) },
  );
const good = { captureId: CAPTURE, lessonId: LESSON, credit: "Photo by Jordan Lee at the marker.", peopleAttested: true };

beforeEach(() => {
  vi.clearAllMocks();
  as("instructor");
  mocks.getProjectBundle.mockResolvedValue(bundle);
  mocks.getLessonById.mockResolvedValue({ id: LESSON, courseId: COURSE.id, title: "17 · Now (360 tour, forthcoming)", slug: "fl-now-tour", lessonType: "virtual_tour", contentUrl: null });
  mocks.getCourseById.mockResolvedValue(COURSE);
  mocks.getLessonTourEmbed.mockResolvedValue(null);
  mocks.getUsername.mockResolvedValue("bam");
  mocks.insertLessonTourEmbed.mockImplementation(async (input: { url: string; creditLine: string }) => ({
    ok: true,
    row: { url: input.url, creditLine: input.creditLine },
  }));
});

describe("POST tour-targets", () => {
  it("is 401 signed out and 404 for a project that is not this user's", async () => {
    mocks.getSession.mockResolvedValue(null);
    expect((await post(good)).status).toBe(401);
    as("instructor");
    mocks.getProjectBundle.mockResolvedValue(null);
    expect((await post(good)).status).toBe(404);
  });

  it("is 404 for a capture on another leg or another project", async () => {
    expect((await post({ ...good, captureId: "77777777-7777-4777-8777-777777777777" })).status).toBe(404);
    expect(mocks.insertLessonTourEmbed).not.toHaveBeenCalled();
  });

  it("is 403 for anyone but the owner, the instructor or a school admin", async () => {
    as("stranger");
    expect((await post(good)).status).toBe(403);
    expect(mocks.insertLessonTourEmbed).not.toHaveBeenCalled();
  });

  it("lets a school admin publish into a course that is not owner-only, never an owner-only one (Q3)", async () => {
    as("school_admin");
    expect((await post(good)).status).toBe(201);
    mocks.getCourseById.mockResolvedValue({ ...COURSE, ownerOnly: true });
    expect((await post(good)).status).toBe(403);
  });

  it("refuses with 422 and the attestation sentence unless peopleAttested is true", async () => {
    for (const peopleAttested of [undefined, false]) {
      const res = await post({ ...good, peopleAttested });
      expect(res.status).toBe(422);
      expect(await res.json()).toEqual({ error: PEOPLE_ATTESTATION_REQUIRED });
    }
    expect(mocks.insertLessonTourEmbed).not.toHaveBeenCalled();
  });

  it("publishes with the attestation, records when, and says how the lesson will show it", async () => {
    const res = await post(good);
    expect(res.status).toBe(201);
    const input = mocks.insertLessonTourEmbed.mock.calls[0][0];
    expect(input.peopleAttestedAt).toBeInstanceOf(Date);
    expect(input.url).toBe(PANO);
    const data = await res.json();
    expect(data.tour).toMatchObject({ mediaKind: "image", projection: "equirectangular", courseId: COURSE.id, lessonId: LESSON });
    expect(mocks.bumpCourseContentVersion).toHaveBeenCalledWith(COURSE.id);
  });
});

describe("PATCH a capture's projection", () => {
  const patch = (captureId: string, body: unknown) =>
    patchCapture(
      new Request("http://school.test/x", { method: "PATCH", body: JSON.stringify(body), headers: { "content-type": "application/json" } }),
      { params: Promise.resolve({ id: PROJECT, captureId }) },
    );

  beforeEach(() => {
    mocks.updateCapture.mockImplementation(async (_t: string, _u: string, id: string, p: object) => ({ id, ...p }));
  });

  it("is 401 signed out and 404 outside the project", async () => {
    mocks.getSession.mockResolvedValue(null);
    expect((await patch(CAPTURE, { projection: "equirectangular" })).status).toBe(401);
    as("instructor");
    expect((await patch("88888888-8888-4888-8888-888888888888", { projection: "flat" })).status).toBe(404);
    expect((await patch("not-a-uuid", { projection: "flat" })).status).toBe(404);
  });

  it("refuses a 360 mark on a video, and any field but projection", async () => {
    const res = await patch(VIDEO, { projection: "equirectangular" });
    expect(res.status).toBe(400);
    expect((await patch(CAPTURE, { projection: "flat", storageUrl: "https://evil.example" })).status).toBe(400);
    expect((await patch(CAPTURE, { projection: "cubemap" })).status).toBe(400);
    expect(mocks.updateCapture).not.toHaveBeenCalled();
  });

  it("marks a photo as 360, or back to flat", async () => {
    const res = await patch(CAPTURE, { projection: "flat" });
    expect(res.status).toBe(200);
    expect(mocks.updateCapture).toHaveBeenCalledWith(TENANT, COURSE.instructorId, CAPTURE, { projection: "flat" });
  });
});
