import "server-only";
import { and, desc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { courses, gradeOverrides, type GradeOverride } from "@/db/schema";
import { latestOverrides, type OverrideRow } from "@/lib/overrides";

// Grade overrides (plans/66). Append-only: this module exposes CREATE and READ, nothing else —
// the absence of update/delete here is the design, not an omission. Authorization (cohort
// ownership, membership) lives in the route; every query here is tenant-scoped.

export interface CreateOverrideInput {
  tenantId: string;
  cohortId: string;
  studentUserId: string;
  teacherUserId: string;
  courseId: string;
  lessonId?: string | null;
  kind: "quiz_score" | "lesson_complete" | "course_complete";
  value?: number | null;
  reason: string;
}

export async function createOverride(input: CreateOverrideInput): Promise<GradeOverride> {
  const [row] = await db
    .insert(gradeOverrides)
    .values({
      ...input,
      lessonId: input.lessonId ?? null,
      value: input.value == null ? null : String(input.value),
    })
    .returning();
  return row;
}

/** Every override on one student in this tenant, newest first (the audit-trail read), with the
 *  course title for display surfaces (the learner's own Adjustments list). */
export async function listStudentOverridesWithCourse(
  tenantId: string,
  studentUserId: string,
): Promise<(GradeOverride & { courseTitle: string | null })[]> {
  const rows = await db
    .select({ o: gradeOverrides, courseTitle: courses.title })
    .from(gradeOverrides)
    .leftJoin(courses, eq(courses.id, gradeOverrides.courseId))
    .where(
      and(eq(gradeOverrides.tenantId, tenantId), eq(gradeOverrides.studentUserId, studentUserId)),
    )
    .orderBy(desc(gradeOverrides.createdAt));
  return rows.map((r) => ({ ...r.o, courseTitle: r.courseTitle }));
}

/** Every override on one student in this tenant, newest first (the audit-trail read). */
export async function listStudentOverrides(
  tenantId: string,
  studentUserId: string,
): Promise<GradeOverride[]> {
  return db
    .select()
    .from(gradeOverrides)
    .where(
      and(eq(gradeOverrides.tenantId, tenantId), eq(gradeOverrides.studentUserId, studentUserId)),
    )
    .orderBy(desc(gradeOverrides.createdAt));
}

/** A cohort's overrides, newest first (the teacher's list). */
export async function listCohortOverrides(
  tenantId: string,
  cohortId: string,
): Promise<GradeOverride[]> {
  return db
    .select()
    .from(gradeOverrides)
    .where(and(eq(gradeOverrides.tenantId, tenantId), eq(gradeOverrides.cohortId, cohortId)))
    .orderBy(desc(gradeOverrides.createdAt));
}

/** The latest-wins resolution map for one student, ready for src/lib/overrides.ts helpers. */
export async function getStudentOverrideMap(
  tenantId: string,
  studentUserId: string,
): Promise<Map<string, OverrideRow>> {
  const rows = await listStudentOverrides(tenantId, studentUserId);
  return latestOverrides(
    rows.map((r) => ({
      id: r.id,
      courseId: r.courseId,
      lessonId: r.lessonId,
      kind: r.kind as OverrideRow["kind"],
      value: r.value,
      reason: r.reason,
      teacherUserId: r.teacherUserId,
      createdAt: r.createdAt,
    })),
  );
}
