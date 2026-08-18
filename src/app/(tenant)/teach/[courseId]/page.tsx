import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { getScopedDb } from "@/db/scoped";
import { canEditCourse } from "@/lib/api";
import { getMembership, getSession, isPlatformOwner } from "@/lib/session";
import { VetCourseCta } from "@/components/vet-course-cta";
import { hasStripe } from "@/lib/env";
import { listLessons, listModules, listTenantInstructors } from "@/db/queries/authoring";
import { listLinkUsage } from "@/db/queries/link-clicks";
import { countCourseNotifySignups } from "@/db/queries/leads";
import { countActiveEnrollments } from "@/db/queries/enrollment";
import { isUnvetted } from "@/lib/vetting";
import { getCourseRecallStats } from "@/db/queries/recall";
import { CourseSettingsForm } from "@/components/course-settings-form";
import { LessonsManager } from "@/components/lessons-manager";
import { LinkUsagePanel } from "@/components/link-usage-panel";
import { CourseAuditorsPanel } from "@/components/course-auditors-panel";

export const metadata: Metadata = { title: "Manage course" };

// Instructor course manager: edit settings + manage lessons. Scoped + edit-gated,
// so only the owning instructor / brand admin / platform owner reaches it.
export default async function ManageCoursePage({ params }: { params: Promise<{ courseId: string }> }) {
  // The URL segment is the course SLUG (readable) or its uuid (legacy links / ambiguous slugs).
  const { courseId: courseParam } = await params;
  const session = await getSession();
  if (!session) redirect("/login");

  const sdb = await getScopedDb();
  const course = await sdb.getCourseByIdOrSlug(courseParam);
  if (!course) notFound();
  if (!(await canEditCourse(session, sdb.tenantId, course))) notFound();
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
    enrolledNow,
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
      // Active enrollments, shown in the price-change confirmation: the number of learners a
      // free-to-paid switch is being made in front of.
      countActiveEnrollments(courseId),
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

  // Admins (platform owner / brand_admin) may reassign the course's instructor.
  const isAdmin = owner || membership === "brand_admin";
  const instructors = isAdmin ? await listTenantInstructors(sdb.tenantId) : [];

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <div className="flex items-center justify-between">
        <Link href="/teach" className="text-sm text-neutral-500 hover:underline">
          ← Your courses
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <Link href={`${courseHref}/script`} className="underline" style={{ color: "var(--accent)" }}>
            📄 Recording script
          </Link>
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
              and back is the friction that let the review queue sit (BAM 2026-08-18). */}
          {owner ? <VetCourseCta courseId={course.id} variant="inline" /> : null}
        </div>
      ) : null}

      <div className="mt-6 space-y-8">
        <CourseSettingsForm
          courseId={course.id}
          canFeature={owner}
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
            navigationMode: course.navigationMode as "linear" | "cyoa",
            visibility: course.visibility as "public" | "members" | "scheduled" | "private",
            isPublished: course.isPublished,
            publishHoldReason: course.publishHoldReason,
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
          <p className="mt-1 text-sm text-neutral-500">
            How often learners self-report getting a Quick-recall prompt right, in the lesson,
            your signal for whether it&apos;s sticking in class vs only at quiz time.
          </p>
          {recallStats.accuracy === null ? (
            <p className="mt-2 text-sm text-neutral-500">No recall attempts yet.</p>
          ) : (
            <p className="mt-2 text-sm">
              <span className="text-2xl font-bold" style={{ color: "var(--accent)" }}>{recallStats.accuracy}%</span>{" "}
              recalled correctly <span className="text-neutral-500">({recallStats.gotIt}/{recallStats.attempts} attempts)</span>
            </p>
          )}
        </section>

        <CourseAuditorsPanel
          courseId={course.id}
          isUnvetted={isUnvetted(course)}
          initial={auditors.map((a) => ({
            id: a.id,
            email: a.email,
            invitedAt: a.invitedAt,
            acceptedAt: a.acceptedAt,
          }))}
        />

        <LinkUsagePanel rows={linkUsage} />
      </div>
    </main>
  );
}
