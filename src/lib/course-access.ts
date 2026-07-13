import "server-only";
import { asc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { courseModules, type Course, type CourseModule, type Lesson } from "@/db/schema";
import { getCourseBySlug, listLessons } from "@/db/queries/authoring";
import { getCourseProgressSummary } from "@/db/queries/progress";
import { isEnrolled as checkEnrolled } from "@/db/queries/enrollment";
import { canAccessCourse } from "@/lib/api";
import { getSession } from "@/lib/session";
import { getActiveLearner } from "@/lib/active-learner";
import { requireTenant, type TenantRecord } from "@/lib/tenant";
import type { Session } from "@/lib/auth";

export interface CourseView {
  tenant: TenantRecord;
  course: Course;
  session: Session | null;
  /** The ACTIVE learner's user id (self, or a managed child if "studying as" one) — use
   *  this, not `session.user.id`, for any further per-learner read the page makes
   *  (submissions, unmet prerequisites, etc). Null when signed out. */
  activeLearnerId: string | null;
  isEditor: boolean;
  isEnrolled: boolean;
  lessons: Lesson[];
  /** Sections (course modules), ordered. Empty for flat courses. */
  modules: CourseModule[];
  /** COMPLETED lessons only. Merely opening a lesson never lands here — see `lastViewedLessonId`. */
  completedLessonIds: Set<string>;
  /** The lesson the active learner most recently OPENED. The anchor for "continue where you
   *  left off" — a weaker signal than completion, and never counted as one. Null if never opened. */
  lastViewedLessonId: string | null;
  /** lessonId → saved playback position, so an audio/video lesson resumes mid-track. */
  watchSeconds: Map<string, number>;
  orderedLessonIds: string[];
}

/** Load a course (by pretty URL) plus the viewer's access context. Returns null
 *  when it doesn't resolve in this tenant, or is a draft and the viewer can't
 *  edit it — both surface as 404 at the page. Enrollment/progress are read for
 *  the ACTIVE learner (self, or a managed child), so a parent "studying as" a
 *  child sees exactly what that child is enrolled in and has completed. Editor
 *  status is always the real signed-in account — never the active learner. */
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
  const learner = await getActiveLearner(session);
  // ONE round trip for completion + last-viewed + playback positions (it replaces the old
  // completed-ids-only query rather than adding to it — resume costs no extra Neon egress).
  const [progress, enrolled] = learner
    ? await Promise.all([
        getCourseProgressSummary(learner.id, course.id),
        checkEnrolled(learner.id, course.id),
      ])
    : [null, false];

  return {
    tenant,
    course,
    session,
    activeLearnerId: learner?.id ?? null,
    isEditor,
    isEnrolled: enrolled,
    lessons,
    modules,
    completedLessonIds: progress?.completedLessonIds ?? new Set<string>(),
    lastViewedLessonId: progress?.lastViewedLessonId ?? null,
    watchSeconds: progress?.watchSeconds ?? new Map<string, number>(),
    orderedLessonIds: lessons.map((l) => l.id),
  };
}
