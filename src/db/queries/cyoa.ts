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

/** Index freshness for a course: how many published lessons are missing an embedding or have been
 *  edited since they were last embedded (`updated_at > created_at`). `stale > 0` means the RAG index
 *  is behind the lessons — the course page shows a "re-index" nudge on the instructor tools. */
export async function getEmbeddingStaleness(
  courseId: string,
): Promise<{ published: number; stale: number }> {
  const [row] = await db
    .select({
      published: sql<number>`count(*)`.mapWith(Number),
      stale: sql<number>`count(*) filter (where ${lessonEmbeddings.lessonId} is null or ${lessons.updatedAt} > ${lessonEmbeddings.createdAt})`.mapWith(
        Number,
      ),
    })
    .from(lessons)
    .leftJoin(lessonEmbeddings, eq(lessonEmbeddings.lessonId, lessons.id))
    .where(and(eq(lessons.courseId, courseId), eq(lessons.isPublished, true)));
  return { published: row?.published ?? 0, stale: row?.stale ?? 0 };
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
