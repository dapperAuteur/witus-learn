import { and, asc, desc, eq, type SQL } from "drizzle-orm";
import { db } from "@/db/client";
import {
  courseModules,
  courses,
  lessons,
  userProfiles,
  type Course,
  type CourseModule,
  type Lesson,
} from "@/db/schema";
import { slugify } from "@/lib/slug";

// Tenant-scoped authoring writes + slug/instructor reads. Module/lesson writes are
// scoped via their parent course id (the caller verifies course ownership first).

export interface NewCourseInput {
  title: string;
  description?: string | null;
  category?: string | null;
  seasonNumber?: number | null;
  seriesSlug?: string | null;
  seriesTitle?: string | null;
  navigationMode?: "linear" | "cyoa";
  isSequential?: boolean;
  requiresAgeGate?: boolean;
  visibility?: "public" | "members" | "scheduled";
}

export type CoursePatch = Partial<typeof courses.$inferInsert>;

async function uniqueCourseSlug(
  tenantId: string,
  instructorId: string,
  base: string,
): Promise<string> {
  const baseSlug = slugify(base);
  let slug = baseSlug;
  for (let i = 2; i < 50; i++) {
    const hit = await db
      .select({ id: courses.id })
      .from(courses)
      .where(
        and(
          eq(courses.tenantId, tenantId),
          eq(courses.instructorId, instructorId),
          eq(courses.slug, slug),
        ),
      )
      .limit(1);
    if (!hit[0]) return slug;
    slug = `${baseSlug}-${i}`;
  }
  return `${baseSlug}-${Date.now()}`;
}

export async function createCourse(
  tenantId: string,
  instructorId: string,
  input: NewCourseInput,
): Promise<Course> {
  const slug = await uniqueCourseSlug(tenantId, instructorId, input.title);
  const [row] = await db
    .insert(courses)
    .values({
      tenantId,
      instructorId,
      title: input.title,
      slug,
      description: input.description ?? null,
      category: input.category ?? null,
      seasonNumber: input.seasonNumber ?? null,
      seriesSlug: input.seriesSlug ?? null,
      seriesTitle: input.seriesTitle ?? null,
      navigationMode: input.navigationMode ?? "linear",
      isSequential: input.isSequential ?? false,
      requiresAgeGate: input.requiresAgeGate ?? false,
      visibility: input.visibility ?? "public",
    })
    .returning();
  return row;
}

export async function updateCourse(
  tenantId: string,
  id: string,
  patch: CoursePatch,
): Promise<Course | null> {
  const [row] = await db
    .update(courses)
    .set({ ...patch, updatedAt: new Date() })
    .where(and(eq(courses.id, id), eq(courses.tenantId, tenantId)))
    .returning();
  return row ?? null;
}

export async function deleteCourse(tenantId: string, id: string): Promise<boolean> {
  const rows = await db
    .delete(courses)
    .where(and(eq(courses.id, id), eq(courses.tenantId, tenantId)))
    .returning({ id: courses.id });
  return rows.length > 0;
}

// ── Modules (scoped by course id) ────────────────────────────────────────────
export async function listModules(courseId: string): Promise<CourseModule[]> {
  return db
    .select()
    .from(courseModules)
    .where(eq(courseModules.courseId, courseId))
    .orderBy(asc(courseModules.sortOrder));
}

export async function createModule(
  courseId: string,
  input: { title: string; sortOrder?: number; isPublished?: boolean },
): Promise<CourseModule> {
  const [row] = await db
    .insert(courseModules)
    .values({
      courseId,
      title: input.title,
      sortOrder: input.sortOrder ?? 0,
      isPublished: input.isPublished ?? false,
    })
    .returning();
  return row;
}

export async function updateModule(
  courseId: string,
  moduleId: string,
  patch: Partial<typeof courseModules.$inferInsert>,
): Promise<CourseModule | null> {
  const [row] = await db
    .update(courseModules)
    .set(patch)
    .where(and(eq(courseModules.id, moduleId), eq(courseModules.courseId, courseId)))
    .returning();
  return row ?? null;
}

export async function deleteModule(courseId: string, moduleId: string): Promise<boolean> {
  const rows = await db
    .delete(courseModules)
    .where(and(eq(courseModules.id, moduleId), eq(courseModules.courseId, courseId)))
    .returning({ id: courseModules.id });
  return rows.length > 0;
}

// ── Lessons ──────────────────────────────────────────────────────────────────
export interface NewLessonInput {
  title: string;
  lessonType?: string;
  moduleId?: string | null;
  textContent?: string | null;
  contentUrl?: string | null;
  contentFormat?: "markdown" | "tiptap" | null;
  durationSeconds?: number | null;
  sortOrder?: number;
  isFreePreview?: boolean;
  isPublished?: boolean;
  slug?: string | null;
}

export async function listLessons(courseId: string): Promise<Lesson[]> {
  return db
    .select()
    .from(lessons)
    .where(eq(lessons.courseId, courseId))
    .orderBy(asc(lessons.sortOrder));
}

export async function getLessonById(tenantId: string, id: string): Promise<Lesson | null> {
  const rows = await db
    .select()
    .from(lessons)
    .where(and(eq(lessons.id, id), eq(lessons.tenantId, tenantId)))
    .limit(1);
  return rows[0] ?? null;
}

export async function createLesson(
  tenantId: string,
  courseId: string,
  input: NewLessonInput,
): Promise<Lesson> {
  const [row] = await db
    .insert(lessons)
    .values({
      tenantId,
      courseId,
      moduleId: input.moduleId ?? null,
      title: input.title,
      lessonType: input.lessonType ?? "text",
      textContent: input.textContent ?? null,
      contentUrl: input.contentUrl ?? null,
      contentFormat: input.contentFormat ?? null,
      durationSeconds: input.durationSeconds ?? null,
      sortOrder: input.sortOrder ?? 0,
      isFreePreview: input.isFreePreview ?? false,
      isPublished: input.isPublished ?? false,
      slug: slugify(input.slug || input.title),
    })
    .returning();
  return row;
}

export async function updateLesson(
  courseId: string,
  lessonId: string,
  patch: Partial<typeof lessons.$inferInsert>,
): Promise<Lesson | null> {
  const [row] = await db
    .update(lessons)
    .set({ ...patch, updatedAt: new Date() })
    .where(and(eq(lessons.id, lessonId), eq(lessons.courseId, courseId)))
    .returning();
  return row ?? null;
}

export async function deleteLesson(courseId: string, lessonId: string): Promise<boolean> {
  const rows = await db
    .delete(lessons)
    .where(and(eq(lessons.id, lessonId), eq(lessons.courseId, courseId)))
    .returning({ id: lessons.id });
  return rows.length > 0;
}

// ── Pretty-URL + instructor reads (tenant-scoped) ────────────────────────────
export async function getCourseBySlug(
  tenantId: string,
  username: string,
  slug: string,
): Promise<Course | null> {
  const rows = await db
    .select({ course: courses })
    .from(courses)
    .innerJoin(userProfiles, eq(userProfiles.userId, courses.instructorId))
    .where(
      and(
        eq(courses.tenantId, tenantId),
        eq(userProfiles.username, username),
        eq(courses.slug, slug),
      ),
    )
    .limit(1);
  return rows[0]?.course ?? null;
}

export interface InstructorCard {
  userId: string;
  username: string | null;
  displayName: string | null;
  avatarUrl: string | null;
  bio: string | null;
}

/** Instructors with at least one published course in THIS tenant. */
export async function listInstructors(tenantId: string): Promise<InstructorCard[]> {
  return db
    .selectDistinct({
      userId: userProfiles.userId,
      username: userProfiles.username,
      displayName: userProfiles.displayName,
      avatarUrl: userProfiles.avatarUrl,
      bio: userProfiles.bio,
    })
    .from(courses)
    .innerJoin(userProfiles, eq(userProfiles.userId, courses.instructorId))
    .where(and(eq(courses.tenantId, tenantId), eq(courses.isPublished, true)));
}

/** Instructor profile + their published courses on this tenant. Null (404) if
 *  they have no published courses here — so global usernames can't be probed. */
export async function getInstructorProfile(
  tenantId: string,
  username: string,
): Promise<{ profile: InstructorCard; courses: Course[] } | null> {
  const prof = await db
    .select({
      userId: userProfiles.userId,
      username: userProfiles.username,
      displayName: userProfiles.displayName,
      avatarUrl: userProfiles.avatarUrl,
      bio: userProfiles.bio,
    })
    .from(userProfiles)
    .where(eq(userProfiles.username, username))
    .limit(1);
  if (!prof[0]) return null;

  const list = await db
    .select()
    .from(courses)
    .where(
      and(
        eq(courses.tenantId, tenantId),
        eq(courses.instructorId, prof[0].userId),
        eq(courses.isPublished, true),
      ),
    )
    .orderBy(desc(courses.publishedAt));
  if (list.length === 0) return null;
  return { profile: prof[0], courses: list };
}

/** Courses owned by an instructor on this tenant (published + drafts) for /teach. */
export async function listOwnCourses(tenantId: string, instructorId: string): Promise<Course[]> {
  const conds: SQL[] = [eq(courses.tenantId, tenantId), eq(courses.instructorId, instructorId)];
  return db
    .select()
    .from(courses)
    .where(and(...conds))
    .orderBy(desc(courses.updatedAt));
}
