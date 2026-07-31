import "server-only";
import { asc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { courseModules, type Course, type CourseModule, type Lesson } from "@/db/schema";
import { getCourseBySlug, listLessons } from "@/db/queries/authoring";
import { getCourseProgressSummary } from "@/db/queries/progress";
import { isEnrolled as checkEnrolled } from "@/db/queries/enrollment";
import { canAccessCourse } from "@/lib/api";
import { canSeeUnvettedContent, courseViewGate, isUnvetted } from "@/lib/vetting";
import { isCourseAuditor } from "@/db/queries/course-auditors";
import { getSession, isPlatformOwner } from "@/lib/session";
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
  /** True when this viewer is an ACCEPTED auditor of this course (plans/52 §5): they may READ an
   *  unvetted course's lessons and may write nothing. Pages use it to hide every write control
   *  (mark complete, enroll, submit) and to say out loud that nothing is being recorded. */
  isAuditor: boolean;
  /** True when the course is UNVETTED (`vetted_at IS NULL`) and this viewer isn't the owner,
   *  its instructor or an enrollee. The page must render the public "Coming soon" landing face:
   *  title, description, standards, share card, and nothing else. `lessons` and `modules` are
   *  emptied in that case, so no consumer of this view can leak a lesson title or media URL. */
  isComingSoon: boolean;
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
 *  edit it, both surface as 404 at the page. An UNVETTED course still loads for
 *  everyone (its landing page is public) but comes back with `isComingSoon` and
 *  no lessons or sections. Enrollment/progress are read for
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
  const learner = await getActiveLearner(session);
  // ONE round trip for completion + last-viewed + playback positions (it replaces the old
  // completed-ids-only query rather than adding to it — resume costs no extra Neon egress).
  const [progress, enrolled] = learner
    ? await Promise.all([
        getCourseProgressSummary(learner.id, course.id),
        checkEnrolled(learner.id, course.id),
      ])
    : [null, false];

  // One gate, three outcomes (src/lib/vetting.ts):
  //   not-found → a draft, or private, to someone who can't edit it.
  //   coming-soon → unvetted, and this viewer is not the owner, its instructor or an enrollee.
  //   open → the normal course experience.
  // The unvetted CONTENT gate is stricter than the edit gate on purpose: it is owner OR the
  // course's own instructor OR an enrollee, never a brand_admin (the same reasoning that keeps
  // a private course away from brand_admins). Enrollment is the ACTIVE learner's, so a parent
  // studying as a child sees exactly what that child may see. An invited auditor (plans/52 §5)
  // plugs in as canSeeUnvettedContent's `isAuditor`, and no page had to change for it.
  const isOwnerOrInstructor = session
    ? course.instructorId === session.user.id || (await isPlatformOwner(session.user.id))
    : false;
  // The audit grant belongs to the SIGNED-IN account, not the active learner: a grant is issued to
  // a person who was asked to review the course, and a managed child studying under it is not that
  // person. Only asked for when it could change the answer, so the common paths cost no query.
  const isAuditor =
    session && !isOwnerOrInstructor && !enrolled && isUnvetted(course)
      ? await isCourseAuditor({
          tenantId: tenant.id,
          courseId: course.id,
          userId: session.user.id,
          email: session.user.email ?? null,
        })
      : false;
  const gate = courseViewGate({
    isPublished: course.isPublished,
    visibility: course.visibility,
    vettedAt: course.vettedAt,
    isEditor,
    canSeeUnvetted: canSeeUnvettedContent({ isOwnerOrInstructor, isEnrolled: enrolled, isAuditor }),
  });
  if (gate === "not-found") return null;
  const isComingSoon = gate === "coming-soon";

  // A coming-soon viewer gets NO lesson data at all, not a title, not a media URL, so the
  // landing page cannot leak content and the lesson route 404s (it looks its lesson up in this
  // list). Skipping both reads also makes the public face cheaper than the full page.
  const all = isComingSoon ? [] : await listLessons(course.id);
  const lessons = isEditor ? all : all.filter((l) => l.isPublished);
  const modules = isComingSoon
    ? []
    : await db
        .select()
        .from(courseModules)
        .where(eq(courseModules.courseId, course.id))
        .orderBy(asc(courseModules.sortOrder));

  return {
    tenant,
    course,
    session,
    activeLearnerId: learner?.id ?? null,
    isEditor,
    isEnrolled: enrolled,
    isAuditor,
    isComingSoon,
    lessons,
    modules,
    completedLessonIds: progress?.completedLessonIds ?? new Set<string>(),
    lastViewedLessonId: progress?.lastViewedLessonId ?? null,
    watchSeconds: progress?.watchSeconds ?? new Map<string, number>(),
    orderedLessonIds: lessons.map((l) => l.id),
  };
}
