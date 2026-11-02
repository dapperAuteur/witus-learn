import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { buildIndexStates, needingIndex, type IndexStateCourseRow } from "@/lib/rag/index-course";
import { ragAdminRows } from "@/lib/rag/admin-list";
import { ADMIN_NAV } from "@/lib/admin-nav";

// /admin/rag (BAM, 2026-11-02): the courses new (never indexed) or changed since indexed, each with
// Run, plus Run all. The list is the same rule the CLI and the seed workflow use. No database here:
// the course rows and hashes are plain data.

const src = (p: string) => readFileSync(join(process.cwd(), p), "utf8");

const course = (over: Partial<IndexStateCourseRow>): IndexStateCourseRow => ({
  courseId: "c",
  courseSlug: "c",
  title: "C",
  tenantSlug: "learn",
  tenantName: "Learn.WitUS",
  isPublished: true,
  indexedHash: null,
  indexedAt: null,
  chunkCount: null,
  ...over,
});

const courses: IndexStateCourseRow[] = [
  course({ courseId: "current", courseSlug: "current", title: "Current", indexedHash: "h1", indexedAt: new Date("2026-10-01T00:00:00Z"), chunkCount: 40 }),
  course({ courseId: "changed", courseSlug: "changed", title: "Changed", indexedHash: "old", indexedAt: new Date("2026-09-01T00:00:00Z"), chunkCount: 12 }),
  course({ courseId: "never", courseSlug: "never", title: "Never", isPublished: false }),
  course({ courseId: "legacy", courseSlug: "legacy", title: "Legacy chunks", tenantName: "Better Vice Club", tenantSlug: "bvc" }),
  course({ courseId: "empty", courseSlug: "empty", title: "Empty" }),
  course({ courseId: "noslug", courseSlug: null, title: "No slug" }),
];
const hashes = [
  { course_id: "current", items: 5, content_hash: "h1" },
  { course_id: "changed", items: 5, content_hash: "new" },
  { course_id: "never", items: 3, content_hash: "h3" },
  { course_id: "legacy", items: 3, content_hash: "h4" },
  { course_id: "empty", items: 0, content_hash: "h5" },
];

describe("the needs-indexing list", () => {
  const states = buildIndexStates(courses, hashes, ["legacy", "current"]);

  it("classifies every course with a slug, sorted by school then title", () => {
    expect(states.map((s) => [s.courseId, s.state])).toEqual([
      ["legacy", "changed"], // chunks but no record: indexed before records existed
      ["changed", "changed"],
      ["current", "current"],
      ["empty", "empty"],
      ["never", "never"],
    ]);
    expect(states.find((s) => s.courseId === "current")).toMatchObject({ chunkCount: 40 });
  });

  it("lists exactly the courses never indexed or changed since", () => {
    expect(needingIndex(states).map((n) => [n.courseId, n.reason])).toEqual([
      ["legacy", "changed"],
      ["changed", "changed"],
      ["never", "never"],
    ]);
  });

  it("after the move to Mistral, a course whose stored hash names Gemini reads as changed", () => {
    // The stored hash was computed under the old header; today's hash differs, so it is listed.
    const s = buildIndexStates([course({ courseId: "x", indexedHash: "gemini-era" })], [{ course_id: "x", items: 2, content_hash: "mistral-era" }], ["x"]);
    expect(needingIndex(s)).toHaveLength(1);
  });

  it("the admin rows: published first, never before changed, dates as strings, the rest counted", () => {
    const { rows, current, empty } = ragAdminRows(states);
    expect(rows.map((r) => [r.courseId, r.reason])).toEqual([
      ["legacy", "changed"],
      ["changed", "changed"],
      ["never", "never"],
    ]);
    expect(rows.find((r) => r.courseId === "changed")).toMatchObject({ indexedAt: "2026-09-01T00:00:00.000Z", chunkCount: 12 });
    expect(rows.find((r) => r.courseId === "never")?.indexedAt).toBeNull();
    expect(current).toBe(1);
    expect(empty).toBe(1);
  });
});

describe("the admin page and its endpoint", () => {
  it("the endpoint is owner-only, one course per request, with an explicit maxDuration", () => {
    const route = src("src/app/api/admin/rag/index/route.ts");
    expect(route).toContain("isPlatformOwner(session.user.id)");
    expect(route).toContain("export const maxDuration = 300;");
    expect(route).toContain("courseId: z.string().uuid()");
    expect(route).toContain("await indexCourse(course.courseSlug, course.tenantSlug)");
  });
  it("the page is owner-only and reachable from the admin menu", () => {
    expect(src("src/app/(tenant)/admin/rag/page.tsx")).toContain("await requirePlatformOwner();");
    expect(ADMIN_NAV.find((i) => i.href === "/admin/rag")).toMatchObject({ ownerOnly: true });
  });
  it("Run all goes one course at a time from the browser", () => {
    const ui = src("src/components/rag-index-admin.tsx");
    expect(ui).toMatch(/for \(const \[i, row\] of todo\.entries\(\)\) \{[\s\S]*await runOne\(row\)/);
  });
});
