import "server-only";
import { and, desc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { assignmentSubmissions } from "@/db/schema/learning";
import { lessons } from "@/db/schema/courses";

export interface SubmissionRow {
  id: string;
  lessonId: string;
  lessonTitle: string;
  userId: string;
  body: string;
  status: string;
  grade: number | null;
  feedback: string | null;
  submittedAt: Date;
}

/** A learner's own submission to an assignment lesson. */
export async function getSubmission(lessonId: string, userId: string) {
  const r = await db
    .select()
    .from(assignmentSubmissions)
    .where(and(eq(assignmentSubmissions.lessonId, lessonId), eq(assignmentSubmissions.userId, userId)))
    .limit(1);
  return r[0] ?? null;
}

/** Submit or re-submit (one per lesson+user). Re-submitting resets to 'submitted'. */
export async function upsertSubmission(input: {
  tenantId: string;
  courseId: string;
  lessonId: string;
  userId: string;
  body: string;
}): Promise<void> {
  await db
    .insert(assignmentSubmissions)
    .values({ ...input, status: "submitted" })
    .onConflictDoUpdate({
      target: [assignmentSubmissions.lessonId, assignmentSubmissions.userId],
      set: { body: input.body, status: "submitted", grade: null, feedback: null, submittedAt: new Date(), gradedAt: null },
    });
}

/** Submissions for a course's assignments (instructor grading). Tenant-scoped. */
export async function listSubmissionsForCourse(tenantId: string, courseId: string): Promise<SubmissionRow[]> {
  return db
    .select({
      id: assignmentSubmissions.id,
      lessonId: assignmentSubmissions.lessonId,
      lessonTitle: lessons.title,
      userId: assignmentSubmissions.userId,
      body: assignmentSubmissions.body,
      status: assignmentSubmissions.status,
      grade: assignmentSubmissions.grade,
      feedback: assignmentSubmissions.feedback,
      submittedAt: assignmentSubmissions.submittedAt,
    })
    .from(assignmentSubmissions)
    .innerJoin(lessons, eq(lessons.id, assignmentSubmissions.lessonId))
    .where(and(eq(assignmentSubmissions.tenantId, tenantId), eq(assignmentSubmissions.courseId, courseId)))
    .orderBy(desc(assignmentSubmissions.submittedAt));
}

/** The submission's course id (for the grading auth check). Tenant-scoped. */
export async function getSubmissionCourseId(tenantId: string, id: string): Promise<string | null> {
  const r = await db
    .select({ courseId: assignmentSubmissions.courseId })
    .from(assignmentSubmissions)
    .where(and(eq(assignmentSubmissions.id, id), eq(assignmentSubmissions.tenantId, tenantId)))
    .limit(1);
  return r[0]?.courseId ?? null;
}

export async function gradeSubmission(tenantId: string, id: string, grade: number, feedback: string | null): Promise<void> {
  await db
    .update(assignmentSubmissions)
    .set({ grade, feedback, status: "graded", gradedAt: new Date() })
    .where(and(eq(assignmentSubmissions.id, id), eq(assignmentSubmissions.tenantId, tenantId)));
}
