import { and, eq, isNotNull, ne, or, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { courses, lessonEmbeddings, lessons } from "@/db/schema";

// CYOA crossroads reads. Since migration 0079 every read uses lesson_embeddings.embedding_v2 (1024-dim
// mistral-embed); the legacy 768-dim Gemini `embedding` column is never read. A lesson with no v2 vector
// is skipped on both sides: it has no query vector of its own (getLessonEmbedding returns null, so its
// crossroads show no "Related" picks), and it is never offered as a neighbor (the isNotNull filters).
// Writes and staleness live in src/lib/cyoa/crossroads-index.ts.

export interface LessonMatch {
  id: string;
  title: string;
  slug: string | null;
  courseId: string;
  courseTitle?: string;
}

/** pgvector text literal for a vector, e.g. [0.1,0.2,...]. */
export function vectorLiteral(v: number[]): string {
  return `[${v.join(",")}]`;
}

/** The lesson's mistral-embed crossroads vector, or null when it has none yet. */
export async function getLessonEmbedding(lessonId: string): Promise<number[] | null> {
  const rows = await db
    .select({ embedding: lessonEmbeddings.embeddingV2 })
    .from(lessonEmbeddings)
    .where(eq(lessonEmbeddings.lessonId, lessonId))
    .limit(1);
  return rows[0]?.embedding ?? null;
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
      and(
        eq(lessons.courseId, courseId),
        eq(lessons.isPublished, true),
        ne(lessons.id, excludeLessonId),
        isNotNull(lessonEmbeddings.embeddingV2),
      ),
    )
    .orderBy(sql`${lessonEmbeddings.embeddingV2} <=> ${vec}::vector`)
    .limit(k);
}

/**
 * Cross-course semantic neighbors. **tenantFilter is mandatory** — without it,
 * CYOA routes a learner into another brand's course (the #1 leak vector). Also
 * requires the target course to opt in (allow_cross_course_cyoa).
 *
 * UNVETTED courses are excluded: this is a LESSON-ROUTING surface (it hands the learner a lesson
 * to walk into), and an unvetted course's lessons are closed to everyone but its instructor, the
 * owner and existing enrollees, so routing a stranger there is a guaranteed dead end. Discovery
 * surfaces make the opposite choice on purpose (see src/lib/vetting.ts).
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
        // Vetted, OR owner-flagged "live but unvetted" (plans/52): either way the lesson URL a
        // crossroads hands out actually opens, which is the property this filter protects.
        or(isNotNull(courses.vettedAt), eq(courses.allowUnvettedPublic, true)),
        eq(lessons.isPublished, true),
        ne(lessons.id, excludeLessonId),
        ne(lessons.courseId, excludeCourseId),
        isNotNull(lessonEmbeddings.embeddingV2),
      ),
    )
    .orderBy(sql`${lessonEmbeddings.embeddingV2} <=> ${vec}::vector`)
    .limit(k);
}
