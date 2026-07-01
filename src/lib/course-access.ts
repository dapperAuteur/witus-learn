import "server-only";
import { asc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { courseModules, type Course, type CourseModule, type Lesson } from "@/db/schema";
import { getCourseBySlug, listLessons } from "@/db/queries/authoring";
import { getCompletedLessonIds } from "@/db/queries/progress";
import { isEnrolled as checkEnrolled } from "@/db/queries/enrollment";
import { canAccessCourse } from "@/lib/api";
import { getSession } from "@/lib/session";
import { requireTenant, type TenantRecord } from "@/lib/tenant";
import type { Session } from "@/lib/auth";

export interface CourseView {
  tenant: TenantRecord;
  course: Course;
  session: Session | null;
  isEditor: boolean;
  isEnrolled: boolean;
  lessons: Lesson[];
  /** Sections (course modules), ordered. Empty for flat courses. */
  modules: CourseModule[];
  completedLessonIds: Set<string>;
  orderedLessonIds: string[];
}

/** Load a course (by pretty URL) plus the viewer's access context. Returns null
 *  when it doesn't resolve in this tenant, or is a draft and the viewer can't
 *  edit it — both surface as 404 at the page. */
export async function loadCourseView(
  username: string,
  courseSlug: string,
): Promise<CourseView | null> {
  const tenant = await requireTenant();
  const course = await getCourseBySlug(tenant.id, username, courseSlug);
  if (!course) return null;

  const session = await getSession();
  const isEditor = await canAccessCourse(session, tenant.id, course);
  // Hidden from non-owners when it's a draft OR marked private (private stays owner-only
  // even if published). canAccessCourse already restricts private to owner/instructor.
  if ((!course.isPublished || course.visibility === "private") && !isEditor) return null;

  const all = await listLessons(course.id);
  const lessons = isEditor ? all : all.filter((l) => l.isPublished);
  const modules = await db
    .select()
    .from(courseModules)
    .where(eq(courseModules.courseId, course.id))
    .orderBy(asc(courseModules.sortOrder));
  const [completed, enrolled] = session
    ? await Promise.all([
        getCompletedLessonIds(session.user.id, course.id),
        checkEnrolled(session.user.id, course.id),
      ])
    : [[] as string[], false];

  return {
    tenant,
    course,
    session,
    isEditor,
    isEnrolled: enrolled,
    lessons,
    modules,
    completedLessonIds: new Set(completed),
    orderedLessonIds: lessons.map((l) => l.id),
  };
}
