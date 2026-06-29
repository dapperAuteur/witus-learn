import "server-only";
import { and, desc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { lessonFeedback } from "@/db/schema/learning";
import { courses, lessons } from "@/db/schema/courses";

export interface FeedbackRow {
  id: string;
  kind: string;
  body: string;
  status: string;
  createdAt: Date;
  courseId: string;
  courseTitle: string;
  lessonTitle: string;
}

// Curriculum feedback for a tenant's review queue. Always tenant-scoped. When
// `instructorId` is set, limited to that instructor's own courses (instructors see
// their own; brand admins / platform owner pass it undefined to see all tenant).
export async function listFeedback(
  tenantId: string,
  opts: { instructorId?: string; status?: string } = {},
): Promise<FeedbackRow[]> {
  const conds = [eq(lessonFeedback.tenantId, tenantId)];
  if (opts.instructorId) conds.push(eq(courses.instructorId, opts.instructorId));
  if (opts.status) conds.push(eq(lessonFeedback.status, opts.status));

  return db
    .select({
      id: lessonFeedback.id,
      kind: lessonFeedback.kind,
      body: lessonFeedback.body,
      status: lessonFeedback.status,
      createdAt: lessonFeedback.createdAt,
      courseId: lessonFeedback.courseId,
      courseTitle: courses.title,
      lessonTitle: lessons.title,
    })
    .from(lessonFeedback)
    .innerJoin(courses, eq(courses.id, lessonFeedback.courseId))
    .innerJoin(lessons, eq(lessons.id, lessonFeedback.lessonId))
    .where(and(...conds))
    .orderBy(desc(lessonFeedback.createdAt))
    .limit(200);
}

/** The feedback row's course id (for the status-update auth check). Tenant-scoped. */
export async function getFeedbackCourseId(tenantId: string, id: string): Promise<string | null> {
  const r = await db
    .select({ courseId: lessonFeedback.courseId })
    .from(lessonFeedback)
    .where(and(eq(lessonFeedback.id, id), eq(lessonFeedback.tenantId, tenantId)))
    .limit(1);
  return r[0]?.courseId ?? null;
}

export async function setFeedbackStatus(tenantId: string, id: string, status: string): Promise<void> {
  await db
    .update(lessonFeedback)
    .set({ status })
    .where(and(eq(lessonFeedback.id, id), eq(lessonFeedback.tenantId, tenantId)));
}
