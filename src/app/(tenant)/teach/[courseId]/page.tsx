import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { getScopedDb } from "@/db/scoped";
import { canEditCourse } from "@/lib/api";
import { getSession, isPlatformOwner } from "@/lib/session";
import { hasStripe } from "@/lib/env";
import { listLessons } from "@/db/queries/authoring";
import { listLinkUsage } from "@/db/queries/link-clicks";
import { getCourseRecallStats } from "@/db/queries/recall";
import { CourseSettingsForm } from "@/components/course-settings-form";
import { LessonsManager } from "@/components/lessons-manager";
import { LinkUsagePanel } from "@/components/link-usage-panel";

export const metadata: Metadata = { title: "Manage course" };

// Instructor course manager: edit settings + manage lessons. Scoped + edit-gated,
// so only the owning instructor / brand admin / platform owner reaches it.
export default async function ManageCoursePage({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await params;
  const session = await getSession();
  if (!session) redirect("/login");

  const sdb = await getScopedDb();
  const course = await sdb.getCourseById(courseId);
  if (!course) notFound();
  if (!(await canEditCourse(session, sdb.tenantId, course))) notFound();

  const [lessons, owner, categories, linkUsage, recallStats] = await Promise.all([
    listLessons(courseId),
    isPlatformOwner(session.user.id),
    sdb.listCategories(),
    listLinkUsage(sdb.tenantId, courseId),
    getCourseRecallStats(sdb.tenantId, courseId),
  ]);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <div className="flex items-center justify-between">
        <Link href="/teach" className="text-sm text-neutral-500 hover:underline">
          ← Your courses
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <Link href={`/teach/${course.id}/script`} className="underline" style={{ color: "var(--accent)" }}>
            📄 Recording script
          </Link>
          <Link href={`/teach/${course.id}/submissions`} className="underline" style={{ color: "var(--accent)" }}>
            Submissions
          </Link>
          <Link href={`/course/${course.id}`} className="underline" style={{ color: "var(--accent)" }}>
            View public page →
          </Link>
        </div>
      </div>

      <h1 className="mt-4 text-2xl font-bold">{course.title}</h1>

      <div className="mt-6 space-y-8">
        <CourseSettingsForm
          courseId={course.id}
          canFeature={owner}
          hasStripe={hasStripe}
          categories={categories.map((c) => c.name)}
          initial={{
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
          }))}
        />

        <section className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
          <h2 className="font-semibold">Recall accuracy</h2>
          <p className="mt-1 text-sm text-neutral-500">
            How often learners self-report getting a Quick-recall prompt right, in the lesson —
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

        <LinkUsagePanel rows={linkUsage} />
      </div>
    </main>
  );
}
