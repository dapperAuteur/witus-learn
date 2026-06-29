import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { getScopedDb } from "@/db/scoped";
import { canEditCourse } from "@/lib/api";
import { getSession } from "@/lib/session";
import { listSubmissionsForCourse } from "@/db/queries/assignments";
import { SubmissionsGrader } from "@/components/submissions-grader";

export const metadata: Metadata = { title: "Submissions" };

// Instructor grading queue for a course's assignment submissions.
export default async function SubmissionsPage({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await params;
  const session = await getSession();
  if (!session) redirect("/login");

  const sdb = await getScopedDb();
  const course = await sdb.getCourseById(courseId);
  if (!course) notFound();
  if (!(await canEditCourse(session, sdb.tenantId, course))) notFound();

  const rows = await listSubmissionsForCourse(sdb.tenantId, courseId);
  const items = rows.map((r) => ({
    id: r.id,
    lessonTitle: r.lessonTitle,
    userId: r.userId,
    body: r.body,
    status: r.status,
    grade: r.grade,
    feedback: r.feedback,
    when: r.submittedAt.toLocaleDateString(),
  }));

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link href={`/teach/${courseId}`} className="text-sm text-neutral-500 hover:underline">
        ← Manage {course.title}
      </Link>
      <h1 className="mt-4 text-2xl font-bold">Assignment submissions</h1>
      <SubmissionsGrader courseId={courseId} items={items} />
    </main>
  );
}
