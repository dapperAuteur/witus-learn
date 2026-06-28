import { and, eq, ne, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { courses, lessonEmbeddings, lessons } from "@/db/schema";
import { vectorLiteral } from "@/lib/ai/embeddings";

export interface LessonMatch {
  id: string;
  title: string;
  slug: string | null;
  courseId: string;
  courseTitle?: string;
}

export async function getLessonEmbedding(lessonId: string): Promise<number[] | null> {
  const rows = await db
    .select({ embedding: lessonEmbeddings.embedding })
    .from(lessonEmbeddings)
    .where(eq(lessonEmbeddings.lessonId, lessonId))
    .limit(1);
  return rows[0]?.embedding ?? null;
}

export async function upsertLessonEmbedding(lessonId: string, embedding: number[]): Promise<void> {
  await db
    .insert(lessonEmbeddings)
    .values({ lessonId, embedding })
    .onConflictDoUpdate({
      target: lessonEmbeddings.lessonId,
      set: { embedding, createdAt: new Date() },
    });
}

/** In-course semantic neighbors. Course-scoped, so naturally tenant-safe. */
export async function matchLessons(
  courseId: string,
  embedding: number[],
  excludeLessonId: string,
  k: number,
): Promise<LessonMatch[]> {
  const vec = vectorLiteral(embedding);
  return db
    .select({ id: lessons.id, title: lessons.title, slug: lessons.slug, courseId: lessons.courseId })
    .from(lessons)
    .innerJoin(lessonEmbeddings, eq(lessonEmbeddings.lessonId, lessons.id))
    .where(
      and(eq(lessons.courseId, courseId), eq(lessons.isPublished, true), ne(lessons.id, excludeLessonId)),
    )
    .orderBy(sql`${lessonEmbeddings.embedding} <=> ${vec}::vector`)
    .limit(k);
}

/**
 * Cross-course semantic neighbors. **tenantFilter is mandatory** — without it,
 * CYOA routes a learner into another brand's course (the #1 leak vector). Also
 * requires the target course to opt in (allow_cross_course_cyoa).
 */
export async function matchLessonsGlobal(
  tenantFilter: string,
  embedding: number[],
  excludeLessonId: string,
  excludeCourseId: string,
  k: number,
): Promise<LessonMatch[]> {
  const vec = vectorLiteral(embedding);
  return db
    .select({
      id: lessons.id,
      title: lessons.title,
      slug: lessons.slug,
      courseId: lessons.courseId,
      courseTitle: courses.title,
    })
    .from(lessons)
    .innerJoin(lessonEmbeddings, eq(lessonEmbeddings.lessonId, lessons.id))
    .innerJoin(courses, eq(courses.id, lessons.courseId))
    .where(
      and(
        eq(courses.tenantId, tenantFilter),
        eq(courses.allowCrossCourseCyoa, true),
        eq(courses.isPublished, true),
        eq(lessons.isPublished, true),
        ne(lessons.id, excludeLessonId),
        ne(lessons.courseId, excludeCourseId),
      ),
    )
    .orderBy(sql`${lessonEmbeddings.embedding} <=> ${vec}::vector`)
    .limit(k);
}
