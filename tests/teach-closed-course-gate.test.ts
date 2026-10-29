import { beforeEach, describe, expect, it, vi } from "vitest";

/**
 * /teach/[courseId] and its sub-pages (script, embed, submissions), gated by canOpenCourseWorkspace
 * (src/lib/api.ts). BAM 2026-10-29: a school's brand_admin controls that school's courses, so
 *
 *   - a private, held or open course opens for its instructor, the platform owner, and a brand_admin
 *     of THIS school; a brand_admin of another school or any other teacher gets notFound(), the same
 *     answer a learner gets;
 *   - an OWNER-ONLY course (courses.owner_only: the private pipeline's review copies, some built from
 *     copyrighted books) opens only for the owner and its own instructor, never for a brand_admin of
 *     its school. That is the gap the 2026-10-28 closed-course rule was really about.
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
const OPEN = { id: "c1", tenantId: "tenant-1", instructorId: INSTRUCTOR, slug: "c", visibility: "public", publishHoldReason: null, ownerOnly: false };
const PRIVATE = { ...OPEN, visibility: "private" };
const HELD = { ...OPEN, publishHoldReason: "Held for cultural review." };
const OWNER_ONLY = { ...PRIVATE, publishHoldReason: "Private review copy of a copyrighted book.", ownerOnly: true };

type Who = "owner" | "instructor" | "brand_admin" | "other_school_admin" | "teacher";
function as(who: Who) {
  const id = who === "owner" ? OWNER : who === "instructor" ? INSTRUCTOR : `${who}-1`;
  mocks.getSession.mockResolvedValue({ user: { id, email: `${who}@example.com` } });
  mocks.isPlatformOwner.mockImplementation(async (uid: string) => uid === OWNER);
  // Membership is per TENANT. The request resolves to tenant-1; the other school's admin is a
  // brand_admin of tenant-2 only, so here they are nobody.
  mocks.getMembership.mockImplementation(async (_uid: string, tenantId: string) => {
    if (who === "brand_admin") return tenantId === "tenant-1" ? "brand_admin" : null;
    if (who === "other_school_admin") return tenantId === "tenant-2" ? "brand_admin" : null;
    return "instructor";
  });
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
    ["open", OPEN],
  ] as const)("a %s course", (_kind, course) => {
    beforeEach(() => {
      mocks.course = { ...course };
    });
    it.each(["other_school_admin", "teacher"] as const)("is not found for a %s", async (who) => {
      as(who);
      await expect(render()).rejects.toThrow("NOT_FOUND");
    });
    it.each(["owner", "instructor", "brand_admin"] as const)("opens for the %s", async (who) => {
      as(who);
      await expect(render()).rejects.toThrow("PASSED_GATE");
    });
  });

  describe("an owner-only course", () => {
    beforeEach(() => {
      mocks.course = { ...OWNER_ONLY };
    });
    it.each(["brand_admin", "other_school_admin", "teacher"] as const)("is not found for a %s", async (who) => {
      as(who);
      await expect(render()).rejects.toThrow("NOT_FOUND");
    });
    it.each(["owner", "instructor"] as const)("opens for the %s", async (who) => {
      as(who);
      await expect(render()).rejects.toThrow("PASSED_GATE");
    });
  });
});

describe("canOpenCourseWorkspace", () => {
  it("is false signed out", async () => {
    expect(await canOpenCourseWorkspace(null, "tenant-1", PRIVATE as never)).toBe(false);
  });
  it("lets the school's brand_admin into its private, held and open courses, and no other school's admin", async () => {
    for (const course of [PRIVATE, HELD, OPEN]) {
      for (const [who, expected] of [
        ["owner", true],
        ["instructor", true],
        ["brand_admin", true],
        ["other_school_admin", false],
        ["teacher", false],
      ] as const) {
        as(who);
        const session = await mocks.getSession();
        expect(await canOpenCourseWorkspace(session, "tenant-1", course as never), `${who} on ${course.visibility}`).toBe(expected);
      }
    }
  });
  it("keeps an owner-only course to the owner and its own instructor", async () => {
    for (const [who, expected] of [
      ["owner", true],
      ["instructor", true],
      ["brand_admin", false],
      ["other_school_admin", false],
      ["teacher", false],
    ] as const) {
      as(who);
      const session = await mocks.getSession();
      expect(await canOpenCourseWorkspace(session, "tenant-1", OWNER_ONLY as never), who).toBe(expected);
    }
  });
});
