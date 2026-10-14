import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { canRecordVerdict } from "@/lib/lesson-review";

// Reviewer sign-off (plans/93 section 1), offline half of the isolation guard. The DB-backed half,
// tests/isolation/lesson-reviews.db.test.ts, proves the queries cannot read or write across tenants
// or courses; this file proves every route reaches them only through the scoped DAL, takes the
// tenant from the host, 404s a lesson from another course, and computes the hash itself. Checked by
// reading the source, which is how the repo already guards the auditor routes.
const src = (p: string) => readFileSync(join(process.cwd(), p), "utf8");

describe("reviewer sign-off is tenant-scoped end to end", () => {
  it("every read and write goes through ScopedDb, which supplies the tenant itself", () => {
    const scoped = src("src/db/scoped.ts");
    expect(scoped).toContain("listLessonReviews(this.tenantId, courseIds, lessonId)");
    expect(scoped).toContain("upsertLessonReview({ tenantId: this.tenantId, ...input })");
    expect(scoped).toContain("markCorrectionApplied({ tenantId: this.tenantId, ...input })");
    expect(scoped).toContain("listReviewableLessons(this.tenantId, courseIds)");
    expect(scoped).toContain("setCourseAuditorCredit(this.tenantId, courseId, auditorId, credit)");
    expect(scoped).toContain("getViewerAuditorGrant({ tenantId: this.tenantId, ...input })");
    expect(scoped).toContain("listViewerAuditGrants(this.tenantId, viewer)");
  });

  it("the queries filter tenant_id, and the write re-checks the lesson's tenant and course", () => {
    const q = src("src/db/queries/lesson-reviews.ts");
    expect(q).toContain("eq(lessonReviews.tenantId, tenantId)");
    expect(q).toContain("eq(lessonReviews.tenantId, input.tenantId)");
    expect(q).toContain("eq(lessons.tenantId, tenantId)");
    const upsert = q.slice(q.indexOf("export async function upsertLessonReview"));
    expect(upsert).toContain("eq(lessons.tenantId, input.tenantId)");
    expect(upsert).toContain("eq(lessons.courseId, input.courseId)");
    const a = src("src/db/queries/course-auditors.ts");
    const credit = a.slice(a.indexOf("export async function setCourseAuditorCredit"));
    expect(credit).toContain("eq(courseAuditors.tenantId, tenantId)");
    expect(credit).toContain("eq(courseAuditors.courseId, courseId)");
  });

  it("the verdict route 404s across tenants and across courses, and pins its own hash", () => {
    const r = src("src/app/api/courses/[id]/lessons/[lessonId]/review/route.ts");
    expect(r).toContain("sdb.getCourseById(id)");
    expect(r).toContain("getLessonById(sdb.tenantId, lessonId)");
    expect(r).toContain("lesson.courseId !== course.id");
    expect(r).toContain("sdb.getViewerAuditorGrant(");
    expect(r).toContain("canRecordVerdict(");
    expect(r).toContain("const lessonHash = lessonReviewHash(lesson)");
    // The request schema carries no hash: a client cannot choose what its verdict is pinned to.
    const body = r.slice(r.indexOf("const Body"), r.indexOf("});", r.indexOf("const Body")));
    expect(body).not.toMatch(/hash/i);
  });

  it("only the platform owner applies a correction or releases a hold (not a brand_admin, by default)", () => {
    for (const p of [
      "src/app/api/courses/[id]/lessons/[lessonId]/review/applied/route.ts",
      "src/app/api/courses/[id]/release-review-hold/route.ts",
    ]) {
      const r = src(p);
      expect(r, p).toContain("isPlatformOwner(session.user.id)");
      expect(r, p).toContain("sdb.getCourseById(id)");
      expect(r, p).not.toContain("isTenantAdmin");
      expect(r, p).not.toContain("canEditCourse");
    }
    const release = src("src/app/api/courses/[id]/release-review-hold/route.ts");
    // Readiness is recomputed on the server from stored verdicts, never trusted from the click.
    expect(release).toContain("readinessOf(");
    expect(release).toContain("readiness.ready");
  });

  it("a reviewer's credit is set by whoever may grant the review, never by the reviewer", () => {
    const r = src("src/app/api/courses/[id]/auditors/[auditorId]/route.ts");
    const patch = r.slice(r.indexOf("export async function PATCH"), r.indexOf("export async function DELETE"));
    expect(patch).toContain("canManageCourseReviewers");
    expect(patch).toContain("sdb.setCourseAuditorCredit(course.id, auditorId, parsed.data)");
  });

  it("the seeder parses the markers and rewrites review_needs on every seed", () => {
    const seeder = src("scripts/lib/seed-authored-course.ts");
    expect(seeder).toContain("parseReleaseMarkers(l.body)");
    expect(seeder).toContain("reviewNeeds: sql`excluded.review_needs`");
  });

  it("the reviewer's list is noindex, page-guarded, and limited to the viewer's own grants", () => {
    const page = src("src/app/(tenant)/audit/review/page.tsx");
    expect(page).toContain("robots: { index: false, follow: false }");
    expect(page).toContain("requireUserPage()");
    expect(page).toContain("sdb.listViewerAuditGrants(viewer)");
    expect(page).toContain("sdb.listReviewableLessons(courseIds)");
  });
});

describe("the owner never clears a qualified-reviewer need", () => {
  it("holds even when the owner gives himself a grant with a credential", () => {
    expect(
      canRecordVerdict({ isAuditor: true, hasCredential: true, isOwner: true, isInstructor: true, kind: "qr" }),
    ).toBe(false);
  });
});
