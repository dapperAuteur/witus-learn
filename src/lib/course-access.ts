import "server-only";
import type { Course, Lesson } from "@/db/schema";
import { getCourseBySlug, listLessons } from "@/db/queries/authoring";
import { getCompletedLessonIds } from "@/db/queries/progress";
import { canEditCourse } from "@/lib/api";
import { getSession } from "@/lib/session";
import { requireTenant, type TenantRecord } from "@/lib/tenant";
import type { Session } from "@/lib/auth";

export interface CourseView {
  tenant: TenantRecord;
  course: Course;
  session: Session | null;
  isEditor: boolean;
  lessons: Lesson[];
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
  const isEditor = await canEditCourse(session, tenant.id, course);
  if (!course.isPublished && !isEditor) return null;

  const all = await listLessons(course.id);
  const lessons = isEditor ? all : all.filter((l) => l.isPublished);
  const completedLessonIds = session
    ? new Set(await getCompletedLessonIds(session.user.id, course.id))
    : new Set<string>();

  return {
    tenant,
    course,
    session,
    isEditor,
    lessons,
    completedLessonIds,
    orderedLessonIds: lessons.map((l) => l.id),
  };
}
