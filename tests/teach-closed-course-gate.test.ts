import { beforeEach, describe, expect, it, vi } from "vitest";

/**
 * /teach/[courseId] and its sub-pages (script, embed, submissions) for a CLOSED course (private, or
 * held). Before 2026-10-28 these used canEditCourse, which lets any brand_admin in, so a school admin
 * could open the full text of a private course, including a private review copy of a copyrighted
 * book. Now (canOpenCourseWorkspace in src/lib/api.ts):
 *
 *   - private or held: the platform owner and the course's own instructor only; a brand_admin or any
 *     other teacher gets notFound(), the same answer a learner gets;
 *   - an open course: unchanged, a brand_admin still gets in.
 *
 * Each page is rendered up to its gate. Every read past the gate throws PASSED_GATE, so "got in" and
 * "was turned away" are told apart without a database.
 */

const mocks = vi.hoisted(() => ({
  getSession: vi.fn(),
  getMembership: vi.fn(),
  isPlatformOwner: vi.fn(),
  course: null as null | Record<string, unknown>,
  passed: () => {
    throw new Error("PASSED_GATE");
  },
}));

vi.mock("next/navigation", () => ({
  notFound: () => {
    throw new Error("NOT_FOUND");
  },
  redirect: () => {
    throw new Error("REDIRECT");
  },
}));
vi.mock("@/lib/session", () => ({
  getSession: mocks.getSession,
  getMembership: mocks.getMembership,
  isPlatformOwner: mocks.isPlatformOwner,
}));
// Any DB access past the gate.
vi.mock("@/db/client", () => ({ db: new Proxy({}, { get: (_t, p) => (p === "then" ? undefined : mocks.passed()) }) }));
vi.mock("@/db/scoped", () => ({
  getScopedDb: async () =>
    new Proxy(
      { tenantId: "tenant-1", getCourseByIdOrSlug: async () => mocks.course },
      { get: (t, p) => (p in t ? t[p as keyof typeof t] : p === "then" ? undefined : async () => mocks.passed()) },
    ),
}));
vi.mock("@/lib/tenant", () => ({ requireTenant: mocks.passed }));

import ManageCoursePage from "@/app/(tenant)/teach/[courseId]/page";
import RecordingScriptPage from "@/app/(tenant)/teach/[courseId]/script/page";
import EmbedSnippetPage from "@/app/(tenant)/teach/[courseId]/embed/page";
import SubmissionsPage from "@/app/(tenant)/teach/[courseId]/submissions/page";
import { canOpenCourseWorkspace } from "@/lib/api";

const OWNER = "owner-1";
const INSTRUCTOR = "instructor-1";
const OPEN = { id: "c1", tenantId: "tenant-1", instructorId: INSTRUCTOR, slug: "c", visibility: "public", publishHoldReason: null };
const PRIVATE = { ...OPEN, visibility: "private" };
const HELD = { ...OPEN, publishHoldReason: "Private review copy of a copyrighted book." };

function as(who: "owner" | "instructor" | "brand_admin" | "teacher") {
  const id = who === "owner" ? OWNER : who === "instructor" ? INSTRUCTOR : `${who}-1`;
  mocks.getSession.mockResolvedValue({ user: { id, email: `${who}@example.com` } });
  mocks.isPlatformOwner.mockImplementation(async (uid: string) => uid === OWNER);
  mocks.getMembership.mockResolvedValue(who === "brand_admin" ? "brand_admin" : "instructor");
}

const params = { params: Promise.resolve({ courseId: "c" }) };
const PAGES = [
  ["/teach/[courseId]", () => ManageCoursePage(params)],
  ["/teach/[courseId]/script", () => RecordingScriptPage(params)],
  ["/teach/[courseId]/embed", () => EmbedSnippetPage(params)],
  ["/teach/[courseId]/submissions", () => SubmissionsPage(params)],
] as const;

beforeEach(() => {
  vi.clearAllMocks();
  mocks.course = null;
});

describe.each(PAGES)("%s", (_route, render) => {
  describe.each([
    ["private", PRIVATE],
    ["held", HELD],
  ] as const)("a %s course", (_kind, course) => {
    beforeEach(() => {
      mocks.course = { ...course };
    });
    it.each(["brand_admin", "teacher"] as const)("is not found for a %s", async (who) => {
      as(who);
      await expect(render()).rejects.toThrow("NOT_FOUND");
    });
    it.each(["owner", "instructor"] as const)("opens for the %s", async (who) => {
      as(who);
      await expect(render()).rejects.toThrow("PASSED_GATE");
    });
  });

  it("an open course still opens for a brand_admin", async () => {
    mocks.course = { ...OPEN };
    as("brand_admin");
    await expect(render()).rejects.toThrow("PASSED_GATE");
  });
});

describe("canOpenCourseWorkspace", () => {
  it("is false signed out", async () => {
    expect(await canOpenCourseWorkspace(null, "tenant-1", PRIVATE as never)).toBe(false);
  });
  it("lets the instructor and the owner into a closed course, and nobody else", async () => {
    for (const course of [PRIVATE, HELD]) {
      for (const [who, expected] of [["owner", true], ["instructor", true], ["brand_admin", false], ["teacher", false]] as const) {
        as(who);
        const session = await mocks.getSession();
        expect(await canOpenCourseWorkspace(session, "tenant-1", course as never)).toBe(expected);
      }
    }
  });
  it("keeps canEditCourse's answer for an open course: instructor or tenant admin", async () => {
    for (const [who, expected] of [["owner", true], ["instructor", true], ["brand_admin", true], ["teacher", false]] as const) {
      as(who);
      const session = await mocks.getSession();
      expect(await canOpenCourseWorkspace(session, "tenant-1", OPEN as never)).toBe(expected);
    }
  });
});
