import { and, eq, sql } from "drizzle-orm";
import type { NeonDatabase } from "drizzle-orm/neon-serverless";
import * as schema from "../../src/db/schema";
import type { AuthoredCourse } from "../data/authored-course";

// Reusable seeder for any authored course (Ed.L.D., cyber, FAA when it lands, more
// languages). Upserts the course (refreshing title/description) and its lessons by
// the partial (course_id, slug) unique index — so lesson IDs survive a re-seed and
// embeddings/progress are not orphaned. Returns the course id.
export async function seedAuthoredCourse(
  db: NeonDatabase<typeof schema>,
  opts: {
    tenantId: string;
    instructorId: string;
    slug: string;
    course: AuthoredCourse;
    category?: string;
    navigationMode?: "linear" | "cyoa";
  },
): Promise<string> {
  const { tenantId, instructorId, slug, course, category } = opts;
  const navigationMode = opts.navigationMode ?? "linear";

  const existing = await db
    .select({ id: schema.courses.id })
    .from(schema.courses)
    .where(and(eq(schema.courses.tenantId, tenantId), eq(schema.courses.slug, slug)))
    .limit(1);

  let courseId = existing[0]?.id;
  if (!courseId) {
    const [row] = await db
      .insert(schema.courses)
      .values({
        tenantId,
        instructorId,
        title: course.title,
        slug,
        description: course.description,
        category,
        isPublished: true,
        publishedAt: new Date(),
        navigationMode,
      })
      .returning({ id: schema.courses.id });
    courseId = row.id;
    console.log(`+ course ${slug}`);
  } else {
    await db
      .update(schema.courses)
      .set({ title: course.title, description: course.description })
      .where(eq(schema.courses.id, courseId));
    console.log(`= course ${slug} (refreshed)`);
  }

  const lessonRows = course.lessons.map((l, i) => ({
    tenantId,
    courseId: courseId as string,
    title: l.title,
    slug: l.slug,
    lessonType: (l.quiz ? "quiz" : "text") as "quiz" | "text",
    contentFormat: "markdown" as const,
    textContent: l.body ?? null,
    quizContent: l.quiz ?? null,
    sortOrder: i + 1,
    isFreePreview: i === 0,
    isPublished: true,
  }));
  if (lessonRows.length) {
    await db
      .insert(schema.lessons)
      .values(lessonRows)
      .onConflictDoUpdate({
        target: [schema.lessons.courseId, schema.lessons.slug],
        targetWhere: sql`slug is not null`,
        set: {
          title: sql`excluded.title`,
          textContent: sql`excluded.text_content`,
          quizContent: sql`excluded.quiz_content`,
          sortOrder: sql`excluded.sort_order`,
          isFreePreview: sql`excluded.is_free_preview`,
          lessonType: sql`excluded.lesson_type`,
          contentFormat: sql`excluded.content_format`,
          isPublished: sql`excluded.is_published`,
          updatedAt: new Date(),
        },
      });
    console.log(`  lessons: ${lessonRows.length} (upserted)`);
  }
  return courseId;
}
