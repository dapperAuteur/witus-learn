import "server-only";
import { and, asc, count, eq, isNotNull } from "drizzle-orm";
import { db } from "@/db/client";
import { courses, lessons, userProfiles, type Lesson } from "@/db/schema";

// Tenant-scoped reads for the public read-only API (src/app/api/v1). Every function
// takes an explicit tenantId (resolved from the caller's API key — see
// src/lib/api-v1-auth.ts) and bakes it into the WHERE; there is no unscoped variant.
// PUBLISHED CONTENT ONLY — this is a public-facing surface, so unlike the authoring
// queries there is no includeUnpublished escape hatch here at all. The course LIST includes
// unvetted ("Coming soon") courses, because a title + description is discovery; the two reads
// that return LESSONS withhold them, because those are content and would deep-link a consumer
// into lessons nobody outside the school can open (see src/lib/vetting.ts).

export interface ApiCourseListItem {
  id: string;
  slug: string | null;
  title: string;
  description: string | null;
  category: string | null;
}

export interface ApiPagination {
  limit: number;
  offset: number;
  total: number;
  hasMore: boolean;
}

const DEFAULT_LIST_LIMIT = 20;
const MAX_LIST_LIMIT = 100;

/** Clamp caller-supplied pagination params to sane bounds — never trust raw query-string
 *  numbers straight into a DB query (negative/huge limit, negative offset). */
export function normalizeListPagination(opts?: { limit?: number; offset?: number }): {
  limit: number;
  offset: number;
} {
  const rawLimit = opts?.limit;
  const rawOffset = opts?.offset;
  const limit =
    Number.isFinite(rawLimit) && (rawLimit as number) > 0
      ? Math.min(Math.floor(rawLimit as number), MAX_LIST_LIMIT)
      : DEFAULT_LIST_LIMIT;
  const offset = Number.isFinite(rawOffset) && (rawOffset as number) > 0 ? Math.floor(rawOffset as number) : 0;
  return { limit, offset };
}

export async function listPublishedCourses(
  tenantId: string,
  opts?: { limit?: number; offset?: number },
): Promise<{ items: ApiCourseListItem[]; pagination: ApiPagination }> {
  const { limit, offset } = normalizeListPagination(opts);
  const where = and(
    eq(courses.tenantId, tenantId),
    eq(courses.isPublished, true),
    eq(courses.visibility, "public"),
  );

  const [rows, totalRows] = await Promise.all([
    db
      .select({
        id: courses.id,
        slug: courses.slug,
        title: courses.title,
        description: courses.description,
        category: courses.category,
      })
      .from(courses)
      .where(where)
      .orderBy(asc(courses.title))
      .limit(limit)
      .offset(offset),
    db.select({ value: count() }).from(courses).where(where),
  ]);

  const total = totalRows[0]?.value ?? 0;
  return {
    items: rows,
    pagination: { limit, offset, total, hasMore: offset + rows.length < total },
  };
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
 *  resolve in this tenant, isn't published, isn't public, or is UNVETTED. The route 404s on null
 *  rather than distinguishing "wrong tenant" from "doesn't exist" (no existence leak).
 *
 *  Unvetted courses are withheld here even though the LIST above includes them: this endpoint
 *  returns lesson titles, which are course content, and the consuming app would deep-link into
 *  lessons that are closed. Same reasoning as cross-course CYOA (see src/lib/vetting.ts). */
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
        isNotNull(courses.vettedAt),
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

export interface ApiLessonDetail {
  id: string;
  slug: string | null;
  title: string;
  lessonType: string;
  order: number;
  /** Lesson body text (markdown/tiptap per `contentFormat`) — null for media-only lesson types. */
  body: string | null;
  contentFormat: string | null;
  /** Primary media URL (video/audio/slides/photo/etc.), if this lesson type has one. */
  mediaUrl: string | null;
}

/** One published lesson belonging to a published+public course, tenant-scoped from the
 *  caller's API key. Null (route 404s) if the course id doesn't resolve in this tenant, isn't
 *  published/public, or the lesson doesn't belong to that course / isn't published — same
 *  no-existence-leak rule as getPublishedCourseWithLessons. This is the ONLY api-v1 read that
 *  returns lesson body/media — the course-detail endpoint stays metadata-only. */
export async function getPublishedLesson(
  tenantId: string,
  courseId: string,
  lessonId: string,
): Promise<ApiLessonDetail | null> {
  const courseRows = await db
    .select({ id: courses.id })
    .from(courses)
    .where(
      and(
        eq(courses.id, courseId),
        eq(courses.tenantId, tenantId),
        eq(courses.isPublished, true),
        eq(courses.visibility, "public"),
        isNotNull(courses.vettedAt),
      ),
    )
    .limit(1);
  if (!courseRows[0]) return null;

  const lessonRows = await db
    .select({
      id: lessons.id,
      slug: lessons.slug,
      title: lessons.title,
      lessonType: lessons.lessonType,
      sortOrder: lessons.sortOrder,
      textContent: lessons.textContent,
      contentFormat: lessons.contentFormat,
      contentUrl: lessons.contentUrl,
    })
    .from(lessons)
    .where(
      and(
        eq(lessons.id, lessonId),
        eq(lessons.courseId, courseId),
        eq(lessons.tenantId, tenantId),
        eq(lessons.isPublished, true),
      ),
    )
    .limit(1);
  const lesson = lessonRows[0];
  if (!lesson) return null;

  return {
    id: lesson.id,
    slug: lesson.slug,
    title: lesson.title,
    lessonType: lesson.lessonType,
    order: lesson.sortOrder,
    body: lesson.textContent,
    contentFormat: lesson.contentFormat,
    mediaUrl: lesson.contentUrl,
  };
}
