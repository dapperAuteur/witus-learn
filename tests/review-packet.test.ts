import { beforeEach, describe, expect, it, vi } from "vitest";
import { needsHeading, packetFilename, packetLessons, parsePacketFormat, type PacketLessonRow } from "@/lib/review-packet";

// Plans/97 v2, G3 and acceptance 3: the reviewer packet holds exactly the course's lessons with
// needs; a viewer without a grant gets 403; another tenant's course id gets 404.

const mocks = vi.hoisted(() => ({
  session: null as null | { user: { id: string; email: string } },
  course: null as null | { id: string; slug: string; title: string; description: string; ownerOnly: boolean },
  owner: false,
  admin: false,
  grant: null as null | object,
  rows: [] as PacketLessonRow[],
}));

vi.mock("@/lib/api", () => ({
  apiContext: async () => ({
    session: mocks.session,
    sdb: {
      tenantId: "tenant-a",
      tenant: { name: "School A" },
      getCourseById: async (id: string) => (mocks.course && mocks.course.id === id ? mocks.course : null),
      getViewerAuditorGrant: async () => mocks.grant,
    },
  }),
  errorJson: (error: string, status: number) => Response.json({ error }, { status }),
  isTenantAdmin: async () => mocks.admin,
}));
vi.mock("@/lib/session", () => ({ isPlatformOwner: async () => mocks.owner }));
vi.mock("@/db/queries/authoring", () => ({
  listLessons: async () => mocks.rows,
  listModules: async () => [{ id: "m1", title: "Section one" }],
}));
vi.mock("@/lib/site-url", () => ({ getSiteUrl: async () => "https://school-a.example" }));
vi.mock("@/lib/pdf/course-to-pdf", () => ({
  courseToPdf: async (input: { lessons: unknown[]; brand: { name: string } }) =>
    new TextEncoder().encode(`PDF ${input.lessons.length} ${input.brand.name}`),
}));
vi.mock("@/lib/epub/course-to-epub", () => ({
  courseToEpub: (input: { lessons: unknown[]; publisher: string }) =>
    new TextEncoder().encode(`EPUB ${input.lessons.length} ${input.publisher}`),
}));

import { GET } from "@/app/api/courses/[id]/review-packet/route";

const row = (over: Partial<PacketLessonRow>): PacketLessonRow => ({
  slug: "l",
  title: "Lesson",
  moduleId: "m1",
  lessonType: "text",
  textContent: "Body.",
  quizContent: null,
  recallContent: null,
  reviewNeeds: null,
  isPublished: true,
  ...over,
});
const QR = [{ kind: "qr", who: "a rigger" }];

describe("packetLessons", () => {
  it("keeps exactly the published lessons with needs, headed by them", () => {
    const out = packetLessons(
      [
        row({ slug: "a", reviewNeeds: QR }),
        row({ slug: "b" }),
        row({ slug: "c", reviewNeeds: QR, isPublished: false }),
        row({ slug: "d", reviewNeeds: [{ kind: "p", who: "a shearer" }, { kind: "decision", who: "x", question: 5 }] }),
      ],
      new Map([["m1", "Section one"]]),
    );
    expect(out.map((l) => l.slug)).toEqual(["a", "d"]);
    expect(out[0].section).toBe("Section one");
    expect(out[0].body.startsWith("> **For your review before release.**")).toBe(true);
    expect(out[0].body).toContain("> **Qualified reviewer:** a rigger");
    expect(out[0].body.endsWith("Body.")).toBe(true);
    expect(out[1].body).toContain("> **Decision (brief question 5):** x");
  });
  it("names, formats and headings", () => {
    expect(parsePacketFormat("pdf")).toBe("pdf");
    expect(parsePacketFormat("docx")).toBeNull();
    expect(packetFilename({ slug: "the-show crew", id: "x" }, "epub")).toBe("the-show-crew-review-packet.epub");
    expect(needsHeading([{ kind: "p", who: "a shearer" }])).toContain("**Practitioner:** a shearer");
  });
});

describe("GET /api/courses/[id]/review-packet", () => {
  const call = (id: string, format = "pdf") =>
    GET(new Request(`https://school-a.example/api/courses/${id}/review-packet?format=${format}`), {
      params: Promise.resolve({ id }),
    });
  beforeEach(() => {
    mocks.session = { user: { id: "u1", email: "reviewer@example.org" } };
    mocks.course = { id: "c1", slug: "course-a", title: "Course A", description: "", ownerOnly: false };
    mocks.owner = false;
    mocks.admin = false;
    mocks.grant = null;
    mocks.rows = [row({ slug: "a", reviewNeeds: QR }), row({ slug: "b" })];
  });

  it("401 signed out, 400 on a bad format", async () => {
    mocks.session = null;
    expect((await call("c1")).status).toBe(401);
    mocks.session = { user: { id: "u1", email: "r@example.org" } };
    expect((await call("c1", "docx")).status).toBe(400);
  });
  it("404 for another tenant's course id, 403 without a grant", async () => {
    expect((await call("course-in-tenant-b")).status).toBe(404);
    expect((await call("c1")).status).toBe(403);
  });
  it("200 for an accepted reviewer, with only the marked lessons and this school's name", async () => {
    mocks.grant = { id: "g1" };
    const pdf = await call("c1", "pdf");
    expect(pdf.status).toBe(200);
    expect(pdf.headers.get("content-disposition")).toContain("course-a-review-packet.pdf");
    expect(await pdf.text()).toBe("PDF 1 School A");
    const epub = await call("c1", "epub");
    expect(await epub.text()).toBe("EPUB 1 School A");
  });
  it("the owner and a school admin may download; an admin not on an owner-only course", async () => {
    mocks.owner = true;
    expect((await call("c1")).status).toBe(200);
    mocks.owner = false;
    mocks.admin = true;
    expect((await call("c1")).status).toBe(200);
    mocks.course = { ...mocks.course!, ownerOnly: true };
    expect((await call("c1")).status).toBe(403);
  });
  it("404 when no lesson is marked", async () => {
    mocks.grant = { id: "g1" };
    mocks.rows = [row({ slug: "b" })];
    expect((await call("c1")).status).toBe(404);
  });
});
