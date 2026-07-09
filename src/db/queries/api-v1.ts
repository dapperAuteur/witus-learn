import "server-only";
import { and, asc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { courses, lessons, userProfiles, type Lesson } from "@/db/schema";

// Tenant-scoped reads for the public read-only API (src/app/api/v1). Every function
// takes an explicit tenantId (resolved from the caller's API key — see
// src/lib/api-v1-auth.ts) and bakes it into the WHERE; there is no unscoped variant.
// PUBLISHED CONTENT ONLY — this is a public-facing surface, so unlike the authoring
// queries there is no includeUnpublished escape hatch here at all.

export interface ApiCourseListItem {
  id: string;
  slug: string | null;
  title: string;
  description: string | null;
  category: string | null;
}

export async function listPublishedCourses(tenantId: string): Promise<ApiCourseListItem[]> {
  const rows = await db
    .select({
      id: courses.id,
      slug: courses.slug,
      title: courses.title,
      description: courses.description,
      category: courses.category,
    })
    .from(courses)
    .where(
      and(
        eq(courses.tenantId, tenantId),
        eq(courses.isPublished, true),
        eq(courses.visibility, "public"),
      ),
    )
    .orderBy(asc(courses.title));
  return rows;
}

export interface ApiLessonListItem {
  id: string;
  slug: string | null;
  title: string;
  lessonType: string;
  sortOrder: number;
}

export interface ApiCourseDetail extends ApiCourseListItem {
  /** The instructor's public username — lets a consumer build the pretty
   *  `/{username}/{slug}` deep-link back to the real Learn.WitUS course page
   *  (e.g. a "Continue on Learn.WitUS" CTA) without a second lookup. */
  instructorUsername: string | null;
  lessons: ApiLessonListItem[];
}

/** Course + its published lessons, filtered to this tenant. Null if the id doesn't
 *  resolve in this tenant, isn't published, or isn't public — the route 404s on null
 *  rather than distinguishing "wrong tenant" from "doesn't exist" (no existence leak). */
export async function getPublishedCourseWithLessons(
  tenantId: string,
  id: string,
): Promise<ApiCourseDetail | null> {
  const courseRows = await db
    .select({
      id: courses.id,
      slug: courses.slug,
      title: courses.title,
      description: courses.description,
      category: courses.category,
      instructorUsername: userProfiles.username,
    })
    .from(courses)
    .leftJoin(userProfiles, eq(userProfiles.userId, courses.instructorId))
    .where(
      and(
        eq(courses.id, id),
        eq(courses.tenantId, tenantId),
        eq(courses.isPublished, true),
        eq(courses.visibility, "public"),
      ),
    )
    .limit(1);
  const course = courseRows[0];
  if (!course) return null;

  const lessonRows: Pick<Lesson, "id" | "slug" | "title" | "lessonType" | "sortOrder">[] = await db
    .select({
      id: lessons.id,
      slug: lessons.slug,
      title: lessons.title,
      lessonType: lessons.lessonType,
      sortOrder: lessons.sortOrder,
    })
    .from(lessons)
    .where(and(eq(lessons.courseId, id), eq(lessons.tenantId, tenantId), eq(lessons.isPublished, true)))
    .orderBy(asc(lessons.sortOrder));

  return { ...course, lessons: lessonRows };
}
