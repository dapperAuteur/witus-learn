import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { getScopedDb } from "@/db/scoped";
import { canOpenCourseWorkspace } from "@/lib/api";
import { exportAccess, publicReadiness, visibilityActorRole } from "@/lib/course-visibility";
import { CourseVisibilitySwitch } from "@/components/course-visibility-switch";
import { getMembership, getSession, isPlatformOwner } from "@/lib/session";
import { VetCourseCta } from "@/components/vet-course-cta";
import { hasStripe } from "@/lib/env";
import { getUsername, listLessons, listModules, listTenantInstructors } from "@/db/queries/authoring";
import { listLinkUsage } from "@/db/queries/link-clicks";
import { countCourseNotifySignups } from "@/db/queries/leads";
import { countActiveEnrollments } from "@/db/queries/enrollment";
import { isUnvetted } from "@/lib/vetting";
import { getCourseRecallStats } from "@/db/queries/recall";
import { CourseSettingsForm } from "@/components/course-settings-form";
import { LessonsManager } from "@/components/lessons-manager";
import { LinkUsagePanel } from "@/components/link-usage-panel";
import { CourseAuditorsPanel } from "@/components/course-auditors-panel";
import { CourseInterestPanel } from "@/components/course-interest-panel";
import { serializeForOwner } from "@/lib/course-interest";
import { ReviewSignoffPanel, type SignoffLesson } from "@/components/review-signoff-panel";
import { readinessOf, reviewsByLesson, summarizeLessonReview } from "@/lib/lesson-review-summary";
import { courseStage, followUpsForCourse, type LaunchTodo } from "@/lib/release-followups";
import { launchTodosForCourse } from "@/db/queries/release-followups";
import { LaunchTodoList } from "@/components/launch-todo-list";

export const metadata: Metadata = { title: "Manage course" };

// Instructor course manager: edit settings + manage lessons. Scoped + edit-gated, so only the
// owning instructor / this school's brand admin / platform owner reaches it, whether the course is
// private, held or open; an OWNER-ONLY course only its own instructor and the platform owner
// (canOpenCourseWorkspace). The school's brand admin also gets the Make public / Make private
// switch, vetting and the hold release here (BAM 2026-10-29).
export default async function ManageCoursePage({ params }: { params: Promise<{ courseId: string }> }) {
  // The URL segment is the course SLUG (readable) or its uuid (legacy links / ambiguous slugs).
  const { courseId: courseParam } = await params;
  const session = await getSession();
  if (!session) redirect("/login");

  const sdb = await getScopedDb();
  const course = await sdb.getCourseByIdOrSlug(courseParam);
  if (!course) notFound();
  if (!(await canOpenCourseWorkspace(session, sdb.tenantId, course))) notFound();
  // Everything downstream keys off the RESOLVED id, never the raw segment.
  const courseId = course.id;
  // Sibling authoring links keep the readable slug when the course has one.
  const courseHref = `/teach/${course.slug ?? course.id}`;

  const [
    lessons,
    owner,
    membership,
    categories,
    linkUsage,
    recallStats,
    modules,
    waiting,
    auditors,
    interest,
    enrolledNow,
    lessonReviews,
    instructorUsername,
  ] = await Promise.all([
      listLessons(courseId),
      isPlatformOwner(session.user.id),
      getMembership(session.user.id, sdb.tenantId),
      sdb.listCategories(),
      listLinkUsage(sdb.tenantId, courseId),
      getCourseRecallStats(sdb.tenantId, courseId),
      listModules(courseId),
      // Only an unvetted course has a notify-me form, so only it can have anyone waiting.
      isUnvetted(course) ? countCourseNotifySignups(sdb.tenantId, courseId) : Promise.resolve(0),
      // Invite-to-audit grants (plans/52 section 5), read through the tenant-scoped DAL.
      sdb.listCourseAuditors(courseId),
      // Self-nominations. Carries the volunteered phone numbers and backgrounds, which is why it is
      // read only here: this page is already gated to the owner / this course's instructor / a
      // tenant admin by the canEditCourse check above, and the rows go through serializeForOwner,
      // which re-checks the tenant on every one of them.
      sdb.listCourseInterest(courseId),
      // Active enrollments, shown in the price-change confirmation: the number of learners a
      // free-to-paid switch is being made in front of.
      countActiveEnrollments(courseId),
      // Reviewer sign-off (plans/93 section 1): the current verdicts on this course's marked lessons,
      // tenant-scoped. Their state is computed below against each lesson as it stands now.
      sdb.listLessonReviews([courseId]),
      // For the pretty lesson URLs the sign-off panel links to.
      getUsername(course.instructorId),
    ]);

  // Number lessons the way the learner sees them ("Module 2, Lesson 7: …") so the instructor can
  // find the right one. Modules are ordered by sortOrder (position = module number); a lesson's
  // number is its position among its own module's lessons (lessons already arrive sorted). Lessons
  // with no module carry no number.
  const moduleInfo = new Map<string, { number: number; title: string }>();
  modules.forEach((m, i) => moduleInfo.set(m.id, { number: i + 1, title: m.title }));
  const lessonNumberById = new Map<string, number>();
  const perModuleCount = new Map<string, number>();
  for (const l of lessons) {
    if (!l.moduleId) continue;
    const n = (perModuleCount.get(l.moduleId) ?? 0) + 1;
    perModuleCount.set(l.moduleId, n);
    lessonNumberById.set(l.id, n);
  }

  // Reviewer sign-off: one summary per lesson that carries a release need (or keeps a cleared badge
  // after its marker went). The lessons are already loaded above, so this costs no extra read.
  const reviewsFor = reviewsByLesson(lessonReviews);
  const signoffLessons: SignoffLesson[] = lessons
    .map((l) => ({
      title: l.title,
      href: instructorUsername && course.slug && l.slug ? `/${instructorUsername}/${course.slug}/lesson/${l.slug}` : null,
      summary: summarizeLessonReview(l, reviewsFor.get(l.id) ?? []),
    }))
    .filter((x) => x.summary.rows.length > 0 || x.summary.decisions.length > 0);
  const signoffReadiness = readinessOf(signoffLessons.map((x) => x.summary));

  // The launch to-do list (src/lib/release-followups.ts): the committed follow-ups that name this
  // course plus the items its editors added. Every editor sees it (the teacher plans the launch too),
  // and it rides along as a warning on every control that schedules, publishes or releases the
  // course. A committed follow-up can wait on several courses, so only then is the catalog read.
  // Kept off the critical path: if the tables are missing (a deploy ahead of its migration), the page
  // still renders and the error is logged.
  let launchTodos: LaunchTodo[] = [];
  try {
    const committedHere = course.slug ? followUpsForCourse(sdb.tenant.slug, course.slug) : [];
    const stageCourses = committedHere.length ? await sdb.listCourses({ includeUnpublished: true }) : [course];
    launchTodos = await launchTodosForCourse({ id: sdb.tenantId, slug: sdb.tenant.slug }, course, stageCourses);
  } catch (err) {
    console.error("launch to-do list unavailable", err);
  }
  const courseLive = courseStage(course) === "live";
  const showLaunchTodos = !courseLive || launchTodos.some((t) => t.status === "open");

  // Admins (platform owner / brand_admin) may reassign the course's instructor. This is the same
  // test isTenantAdmin (src/lib/api.ts) makes, computed from the rows already loaded above. The
  // download links below follow the export routes' rule (canExport), so they show only to a viewer
  // those routes would serve. A brand_admin only reaches this page for a course that is not
  // owner-only (the gate above), so `isAdmin` here never opens an owner-only course.
  const isAdmin = owner || membership === "brand_admin";
  const actor = { isOwner: owner, isInstructor: course.instructorId === session.user.id, isSchoolAdmin: isAdmin };
  // The export routes' own rule (courseExportAccess → exportAccess).
  const canExport = exportAccess(actor, course) === "ok";
  // The Make public / Make private switch: the owner, or this school's brand_admin (null otherwise).
  const switchRole = visibilityActorRole(actor, course);
  const instructors = isAdmin ? await listTenantInstructors(sdb.tenantId) : [];

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <div className="flex items-center justify-between">
        <Link href="/teach" className="text-sm text-neutral-600 hover:underline">
          ← Your courses
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <Link href={`${courseHref}/script`} className="underline" style={{ color: "var(--accent)" }}>
            📄 Recording script
          </Link>
          {/* Admin-only reading copies (e-reader or paper), built from the published lessons. Plain
              anchors, not <Link>: these are file downloads, and a prefetch would render a book. */}
          {canExport ? (
            <>
              <a href={`/api/admin/courses/${course.slug ?? course.id}/epub`} download className="underline" style={{ color: "var(--accent)" }}>
                Download EPUB
              </a>
              <a href={`/api/admin/courses/${course.slug ?? course.id}/pdf`} download className="underline" style={{ color: "var(--accent)" }}>
                Download PDF
              </a>
            </>
          ) : null}
          <Link href={`${courseHref}/submissions`} className="underline" style={{ color: "var(--accent)" }}>
            Submissions
          </Link>
          <Link href={`${courseHref}/embed`} className="underline" style={{ color: "var(--accent)" }}>
            Embed
          </Link>
          <Link href={`/course/${course.id}`} className="underline" style={{ color: "var(--accent)" }}>
            View public page →
          </Link>
        </div>
      </div>

      <h1 className="mt-4 text-2xl font-bold">{course.title}</h1>

      {/* Unvetted: learners get the public "Coming soon" landing page instead of the lessons, and
          the people who asked to be told when it opens are counted right here, where the course is
          worked on. The addresses themselves live with every other lead at /admin/leads. */}
      {isUnvetted(course) ? (
        <div className="mt-3 rounded-lg border border-sky-300 bg-sky-50 p-4 text-sm dark:border-sky-800 dark:bg-sky-950/40">
          <p className="font-semibold text-sky-900 dark:text-sky-200">
            🕒 Coming soon (not vetted yet)
          </p>
          <p className="mt-1 text-sky-800 dark:text-sky-300">
            Learners see this course&apos;s title, description and standards, plus a notify-me form,
            but not the lessons. You, and anyone already enrolled, still see everything.
            {waiting > 0
              ? ` ${waiting} ${waiting === 1 ? "person is" : "people are"} waiting to hear it opened.`
              : " Nobody has signed up to be notified yet."}
          </p>
          {isAdmin ? (
            <Link href="/admin/leads" className="mt-1 inline-block underline" style={{ color: "var(--accent)" }}>
              See who is waiting →
            </Link>
          ) : null}
          {/* Mark it vetted from here, where the course is actually worked on: the walk to /teach
              and back is the friction that let the review queue sit (BAM 2026-08-18). The owner, or
              this school's brand_admin (BAM 2026-10-29). */}
          {isAdmin ? <VetCourseCta courseId={course.id} variant="inline" launchTodos={launchTodos} /> : null}
        </div>
      ) : null}

      <div className="mt-6 space-y-8">
        {/* The Make public / Make private switch: every course is born private and unpublished, and
            the owner or this school's brand_admin opens it, after vetting (src/lib/course-visibility.ts). */}
        {switchRole ? (
          <CourseVisibilitySwitch
            courseId={course.id}
            visibility={course.visibility}
            isPublished={course.isPublished}
            ownerOnly={course.ownerOnly}
            readiness={publicReadiness(course, signoffReadiness)}
          />
        ) : null}

        {showLaunchTodos ? (
          <LaunchTodoList courseId={course.id} todos={launchTodos} isOwner={owner} courseLive={courseLive} />
        ) : null}

        <CourseSettingsForm
          courseId={course.id}
          launchTodos={launchTodos}
          canFeature={owner}
          canSetOwnerOnly={owner}
          hasStripe={hasStripe}
          categories={categories.map((c) => c.name)}
          canAssignInstructor={isAdmin}
          instructors={instructors}
          enrollmentCount={enrolledNow}
          initial={{
            instructorId: course.instructorId,
            title: course.title,
            description: course.description,
            category: course.category,
            additionalCategories: course.additionalCategories ?? [],
            navigationMode: course.navigationMode as "linear" | "cyoa",
            visibility: course.visibility as "public" | "members" | "scheduled" | "private",
            isPublished: course.isPublished,
            publishHoldReason: course.publishHoldReason,
            ownerOnly: course.ownerOnly,
            billingInterval: course.billingInterval as "month" | "year" | null,
            requiresAgeGate: course.requiresAgeGate,
            allowCrossCourseCyoa: course.allowCrossCourseCyoa,
            isSequential: course.isSequential,
            isFeatured: course.isFeatured,
            priceType: course.priceType as "free" | "one_time" | "subscription",
            price: Number(course.price ?? 0),
            relatedProducts: Array.isArray(course.relatedProducts) ? course.relatedProducts : [],
          }}
        />

        <LessonsManager
          courseId={course.id}
          lessons={lessons.map((l) => ({
            id: l.id,
            title: l.title,
            lessonType: l.lessonType,
            slug: l.slug,
            isPublished: l.isPublished,
            isFreePreview: l.isFreePreview,
            sortOrder: l.sortOrder,
            textContent: l.textContent,
            contentUrl: l.contentUrl,
            audioChapters: l.audioChapters,
            transcriptContent: l.transcriptContent,
            recallContent: l.recallContent,
            moduleNumber: l.moduleId ? (moduleInfo.get(l.moduleId)?.number ?? null) : null,
            moduleTitle: l.moduleId ? (moduleInfo.get(l.moduleId)?.title ?? null) : null,
            lessonNumber: l.moduleId ? (lessonNumberById.get(l.id) ?? null) : null,
          }))}
        />

        <section className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
          <h2 className="font-semibold">Recall accuracy</h2>
          <p className="mt-1 text-sm text-neutral-600">
            How often learners self-report getting a Quick-recall prompt right, in the lesson,
            your signal for whether it&apos;s sticking in class vs only at quiz time.
          </p>
          {recallStats.accuracy === null ? (
            <p className="mt-2 text-sm text-neutral-600">No recall attempts yet.</p>
          ) : (
            <p className="mt-2 text-sm">
              <span className="text-2xl font-bold" style={{ color: "var(--accent)" }}>{recallStats.accuracy}%</span>{" "}
              recalled correctly <span className="text-neutral-600">({recallStats.gotIt}/{recallStats.attempts} attempts)</span>
            </p>
          )}
        </section>

        <CourseInterestPanel
          courseId={course.id}
          isUnvetted={isUnvetted(course)}
          initial={interest
            .map((r) => serializeForOwner(r, sdb.tenantId))
            .filter((r): r is NonNullable<typeof r> => r !== null)}
        />

        <CourseAuditorsPanel
          courseId={course.id}
          isUnvetted={isUnvetted(course)}
          initial={auditors.map((a) => ({
            id: a.id,
            email: a.email,
            invitedAt: a.invitedAt,
            acceptedAt: a.acceptedAt,
            reviewerName: a.reviewerName,
            reviewerCredential: a.reviewerCredential,
          }))}
        />

        {signoffLessons.length > 0 ? (
          <ReviewSignoffPanel
            courseId={course.id}
            lessons={signoffLessons}
            readiness={signoffReadiness}
            isOwner={owner}
            canRelease={isAdmin}
            holdReason={course.publishHoldReason}
            launchTodos={launchTodos}
          />
        ) : null}

        <LinkUsagePanel rows={linkUsage} />
      </div>
    </main>
  );
}
