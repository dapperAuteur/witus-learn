import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { getTableColumns } from "drizzle-orm";
import { lessonTourEmbeds } from "@/db/schema/tour-embeds";

// Tours from the field (plans/93 section 2), offline half of the isolation guard. The DB-backed half,
// tests/isolation/tour-embeds.db.test.ts, proves the queries cannot read or write across tenants or
// courses; this file proves every route reaches them only through the scoped DAL, takes the tenant
// from the host, 404s across tenants and courses, re-runs the capture rules on the server and on every
// read, and never takes the tour's link from the client. Checked by reading the source, which is how
// the repo already guards the auditor and reviewer routes.
const src = (p: string) => readFileSync(join(process.cwd(), p), "utf8");
const TARGETS = "src/app/api/field-log/projects/[id]/legs/[legId]/tour-targets/route.ts";
const REMOVE = "src/app/api/courses/[id]/lessons/[lessonId]/tour/route.ts";

describe("tours from the field are tenant-scoped end to end", () => {
  it("every read and write goes through ScopedDb, which supplies the tenant itself", () => {
    const scoped = src("src/db/scoped.ts");
    expect(scoped).toContain("listTourSlots(this.tenantId, viewer)");
    expect(scoped).toContain("listCourseTourEmbeds(this.tenantId, courseId)");
    expect(scoped).toContain("getLessonTourEmbed(this.tenantId, lessonId)");
    expect(scoped).toContain("insertLessonTourEmbed({ tenantId: this.tenantId, ...input })");
    expect(scoped).toContain("deleteLessonTourEmbed(this.tenantId, courseId, lessonId)");
  });

  it("the queries filter tenant_id, join captures only through a same-tenant project, and re-check on write", () => {
    const q = src("src/db/queries/tour-embeds.ts");
    expect(q).toContain("eq(lessonTourEmbeds.tenantId, tenantId)");
    expect(q).toContain("eq(documentationProjects.tenantId, lessonTourEmbeds.tenantId)");
    expect(q).toContain("eq(courses.tenantId, tenantId)");
    const insert = q.slice(q.indexOf("export async function insertLessonTourEmbed"));
    expect(insert).toContain("eq(lessons.tenantId, input.tenantId)");
    expect(insert).toContain("eq(lessons.courseId, input.courseId)");
    const remove = q.slice(q.indexOf("export async function deleteLessonTourEmbed"));
    expect(remove).toContain("eq(lessonTourEmbeds.tenantId, tenantId)");
    expect(remove).toContain("eq(lessonTourEmbeds.courseId, courseId)");
  });

  it("the publish route 404s outside the caller's project and tenant, and checks the rules on the server", () => {
    const r = src(TARGETS);
    expect(r).toContain("getProjectBundle(sdb.tenantId, session.user.id, id)");
    expect(r).toContain("c.legId === leg.id");
    expect(r).toContain("getLessonById(sdb.tenantId, parsed.data.lessonId)");
    expect(r).toContain("sdb.getCourseById(lesson.courseId)");
    expect(r).toContain("canPublishTour({ isOwner, isInstructor: course.instructorId === session.user.id })");
    expect(r).toContain("const eligibility = tourCaptureEligibility(capture, leg)");
    expect(r).toContain("isEmptyTourSlot(lesson, existing !== null)");
    // The link is copied from the stored capture; the request schema cannot carry one.
    const body = r.slice(r.indexOf("const Body"), r.indexOf("});", r.indexOf("const Body")));
    expect(body).not.toMatch(/url/i);
    expect(r).toContain("url: capture.storageUrl!.trim()");
  });

  it("publishing is the owner or the course's own instructor, never a brand admin by role", () => {
    const r = src(TARGETS);
    expect(r).not.toContain("isTenantAdmin");
    expect(r).not.toContain("canEditCourse");
    expect(r).not.toContain("canAccessCourse");
  });

  it("the remove route 404s across tenants and across courses", () => {
    const r = src(REMOVE);
    expect(r).toContain("loadEditableCourse(id)");
    expect(r).toContain("getLessonById(sdb.tenantId, lessonId)");
    expect(r).toContain("lesson.courseId !== course.id");
    expect(r).toContain("sdb.deleteLessonTourEmbed(course.id, lesson.id)");
  });

  it("every lesson read re-runs the rules, and the pages read tours only that way", () => {
    expect(src("src/lib/lesson-tours.ts")).toContain("liveToursByLesson(await sdb.listCourseTourEmbeds(courseId))");
    for (const p of [
      "src/app/(tenant)/[username]/[courseSlug]/lesson/[lessonSlug]/page.tsx",
      "src/app/(tenant)/[username]/[courseSlug]/page.tsx",
    ]) {
      const page = src(p);
      expect(page, p).toContain("liveToursForCourse(");
      expect(page, p).not.toContain("listCourseTourEmbeds");
    }
  });

  it("the seeder never writes the tour table, so a re-seed cannot erase a tour", () => {
    const seeder = src("scripts/lib/seed-authored-course.ts");
    expect(seeder).not.toMatch(/lessonTourEmbeds|lesson_tour_embeds/);
  });
});

describe("a tour is published directly, never requested (no-inbox rule)", () => {
  it("lesson_tour_embeds has exactly the columns of one published tour", () => {
    const names = Object.values(getTableColumns(lessonTourEmbeds))
      .map((c) => c.name)
      .sort();
    expect(names).toEqual(
      ["capture_id", "course_id", "credit_line", "id", "lesson_id", "set_at", "set_by", "tenant_id", "url"].sort(),
    );
    // No state that would make it a queue, and nothing message-shaped. A new column here is a decision
    // for BAM, not a test to update.
    expect(names.join(" ")).not.toMatch(/status|request|approv|message|reply|thread|body|read_at|seen/);
  });

  it("the publish route notifies and emails nobody", () => {
    expect(src(TARGETS)).not.toMatch(/mail|notify|notification|inbox/i);
  });
});
