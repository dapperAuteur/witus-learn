import "server-only";
import { and, asc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { learningPathCourses, learningPaths, type LearningPath } from "@/db/schema/learning";
import { courses } from "@/db/schema/courses";

export interface PathCourse {
  id: string;
  title: string;
  description: string | null;
  isPublished: boolean;
}

export async function listPaths(tenantId: string): Promise<LearningPath[]> {
  return db
    .select()
    .from(learningPaths)
    .where(eq(learningPaths.tenantId, tenantId))
    .orderBy(asc(learningPaths.sortOrder), asc(learningPaths.title));
}

export async function getPathBySlug(
  tenantId: string,
  slug: string,
): Promise<{ path: LearningPath; courses: PathCourse[] } | null> {
  const p = await db
    .select()
    .from(learningPaths)
    .where(and(eq(learningPaths.tenantId, tenantId), eq(learningPaths.slug, slug)))
    .limit(1);
  if (!p[0]) return null;

  const rows = await db
    .select({ id: courses.id, title: courses.title, description: courses.description, isPublished: courses.isPublished })
    .from(learningPathCourses)
    .innerJoin(courses, eq(courses.id, learningPathCourses.courseId))
    .where(and(eq(learningPathCourses.pathId, p[0].id), eq(courses.tenantId, tenantId)))
    .orderBy(asc(learningPathCourses.sortOrder));
  return { path: p[0], courses: rows };
}

// --- admin ---
export async function createPath(input: {
  tenantId: string;
  slug: string;
  title: string;
  description: string | null;
}): Promise<void> {
  await db.insert(learningPaths).values(input).onConflictDoNothing();
}

export async function getPathTenantId(id: string): Promise<string | null> {
  const r = await db.select({ tenantId: learningPaths.tenantId }).from(learningPaths).where(eq(learningPaths.id, id)).limit(1);
  return r[0]?.tenantId ?? null;
}

export async function setPathCourses(pathId: string, courseIds: string[]): Promise<void> {
  await db.delete(learningPathCourses).where(eq(learningPathCourses.pathId, pathId));
  if (courseIds.length === 0) return;
  await db.insert(learningPathCourses).values(courseIds.map((courseId, i) => ({ pathId, courseId, sortOrder: i })));
}

export async function deletePath(id: string): Promise<void> {
  await db.delete(learningPaths).where(eq(learningPaths.id, id));
}

/** Which learning path(s) a course belongs to, with the course's position and the ordered siblings.
 *  The reverse of getPathBySlug: it powers the "Part N of M in <track>" banner on the course page, so
 *  a learner knows the course is part of a series and where it sits. Tenant-scoped (a course's paths
 *  are only its own brand's). Empty when the course is in no path. */
export interface CourseInPath {
  id: string;
  slug: string;
  title: string;
  position: number; // 1-based position of THIS course in the path
  total: number;
  courses: { id: string; title: string }[]; // ordered, for the recommended-order list + next link
}

export async function getPathsForCourse(tenantId: string, courseId: string): Promise<CourseInPath[]> {
  const memberships = await db
    .select({ pathId: learningPathCourses.pathId, slug: learningPaths.slug, title: learningPaths.title })
    .from(learningPathCourses)
    .innerJoin(learningPaths, eq(learningPaths.id, learningPathCourses.pathId))
    .where(and(eq(learningPaths.tenantId, tenantId), eq(learningPathCourses.courseId, courseId)));

  const out: CourseInPath[] = [];
  for (const m of memberships) {
    const list = await db
      .select({ id: courses.id, title: courses.title })
      .from(learningPathCourses)
      .innerJoin(courses, eq(courses.id, learningPathCourses.courseId))
      .where(and(eq(learningPathCourses.pathId, m.pathId), eq(courses.tenantId, tenantId)))
      .orderBy(asc(learningPathCourses.sortOrder));
    const position = list.findIndex((c) => c.id === courseId) + 1;
    if (position > 0) out.push({ id: m.pathId, slug: m.slug, title: m.title, position, total: list.length, courses: list });
  }
  return out;
}
