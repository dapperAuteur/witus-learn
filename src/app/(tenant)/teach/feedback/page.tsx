import Link from "next/link";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { requireTenant } from "@/lib/tenant";
import { getMembership, getSession, isPlatformOwner } from "@/lib/session";
import { listFeedback } from "@/db/queries/feedback";
import { FeedbackQueue } from "@/components/feedback-queue";

export const metadata: Metadata = { title: "Curriculum feedback" };

// Review queue for learner-submitted corrections/comments/questions. Brand admins +
// the platform owner see all tenant feedback; an instructor sees their own courses'.
export default async function FeedbackQueuePage() {
  const tenant = await requireTenant();
  const session = await getSession();
  if (!session) redirect("/login");

  const role = await getMembership(session.user.id, tenant.id);
  // Only the platform owner (BAM) sees the whole school's feedback. Every teacher — instructor
  // OR brand admin — sees ONLY feedback on their own courses.
  const seesAll = await isPlatformOwner(session.user.id);
  if (!seesAll && !["instructor", "brand_admin"].includes(role ?? "")) {
    redirect("/teach");
  }

  const rows = await listFeedback(tenant.id, seesAll ? {} : { instructorId: session.user.id });
  const items = rows.map((r) => ({
    id: r.id,
    kind: r.kind,
    body: r.body,
    status: r.status,
    when: r.createdAt.toLocaleDateString(),
    courseId: r.courseId,
    courseTitle: r.courseTitle,
    lessonTitle: r.lessonTitle,
  }));

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link href="/teach" className="text-sm text-neutral-500 hover:underline">
        ← Your courses
      </Link>
      <h1 className="mt-4 text-2xl font-bold">Curriculum feedback</h1>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        Corrections, comments, and questions learners submitted on your lessons.
      </p>
      <FeedbackQueue items={items} />
    </main>
  );
}
