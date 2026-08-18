import "server-only";
import { and, asc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { courses, lessons } from "@/db/schema";

// In-course search (plans/61 §5): the tenant-scoped read behind /api/courses/[id]/search.
//
// PUBLISHED lessons only — search must not leak a draft lesson's title or text to an enrollee, and
// the route's access gate (enrolled / editor / auditor) governs who may call it at all, not which
// lessons it reads. Like lesson-locations.ts, tenant_id is filtered on BOTH tables even though the
// join on course_id makes one predicate sufficient: the route resolves the course through
// sdb.getCourseById first, so the second filter is deliberate defense in depth on a query that
// returns lesson text. Kept free of next/headers so the isolation suite can call it directly.

export interface CourseSearchLesson {
  id: string;
  slug: string | null;
  title: string;
  body: string | null;
}

/** id/slug/title/body of the PUBLISHED lessons of one course, for THIS tenant, in course order. */
export async function listPublishedLessonSearchRows(
  tenantId: string,
  courseId: string,
): Promise<CourseSearchLesson[]> {
  return db
    .select({
      id: lessons.id,
      slug: lessons.slug,
      title: lessons.title,
      body: lessons.textContent,
    })
    .from(lessons)
    .innerJoin(courses, and(eq(courses.id, lessons.courseId), eq(courses.tenantId, tenantId)))
    .where(
      and(
        eq(lessons.tenantId, tenantId),
        eq(lessons.courseId, courseId),
        eq(lessons.isPublished, true),
      ),
    )
    .orderBy(asc(lessons.sortOrder));
}
