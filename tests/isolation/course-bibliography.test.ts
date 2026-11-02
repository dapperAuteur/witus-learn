import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

// The course Sources page (src/app/(tenant)/[username]/[courseSlug]/sources/page.tsx), offline half
// of the isolation guard: the course resolves in the tenant the HOST names, the lessons are read
// through the tenant-scoped DAL, the audit grant check is the scoped one, and a viewer the gate
// refuses gets notFound(), never a redirect. Checked by reading the source, as the repo guards the
// reviewer routes (tests/isolation/lesson-reviews.test.ts).
const src = (p: string) => readFileSync(join(process.cwd(), p), "utf8");
const PAGE = "src/app/(tenant)/[username]/[courseSlug]/sources/page.tsx";

describe("the course Sources page is tenant-scoped and gated", () => {
  it("resolves the course in the host's tenant and reads lessons only through ScopedDb", () => {
    const p = src(PAGE);
    expect(p).toContain("const tenant = await requireTenant();");
    expect(p).toContain("cachedCourseBySlug(tenant.id, username, courseSlug)");
    expect(p).toContain("getCourseBySlug(tenant.id, username, courseSlug)");
    expect(p).toContain("const sdb = await getScopedDb();");
    expect(p).toContain("sdb.listPublishedLessonSearchRows(course.id)");
    expect(p).toContain("sdb.getViewerAuditorGrant(");
    expect(p).toContain("canAccessCourse(session, sdb.tenantId, course)");
    // No unscoped lesson read sneaks in.
    expect(p).not.toMatch(/\blistLessons\(/);
    expect(p).not.toMatch(/from "@\/db\/client"/);
  });

  it("the scoped query filters tenant and course and returns PUBLISHED lessons only", () => {
    const scoped = src("src/db/scoped.ts");
    expect(scoped).toContain("listPublishedLessonSearchRows(this.tenantId, courseId)");
    const q = src("src/db/queries/course-search.ts");
    const fn = q.slice(q.indexOf("export async function listPublishedLessonSearchRows"));
    expect(fn).toContain("eq(lessons.tenantId, tenantId)");
    expect(fn).toContain("eq(courses.tenantId, tenantId)");
    expect(fn).toContain("eq(lessons.isPublished, true)");
  });

  it("refuses with notFound(), never a redirect, and applies the one gate", () => {
    const p = src(PAGE);
    expect(p).toContain("bibliographyAccess(course, { isEditor, isAuditor })");
    expect(p).toContain('if (access === "not-found") return null;');
    expect(p).toContain("if (!loaded) notFound();");
    expect(p).not.toMatch(/\bredirect\(/);
    // The course page links to it under the same gate.
    expect(src("src/app/(tenant)/[username]/[courseSlug]/page.tsx")).toContain(
      'bibliographyAccess(course, { isEditor, isAuditor: view.isAuditor }) !== "not-found"',
    );
  });

  it("never renders lesson prose, only titles, numbers and locators", () => {
    const p = src(PAGE);
    expect(p).not.toMatch(/\{[^}]*\.body\}/);
    expect(p).not.toContain("dangerouslySetInnerHTML");
  });
});
