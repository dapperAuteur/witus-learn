import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getScopedDb } from "@/db/scoped";
import { getSession } from "@/lib/session";
import { canAccessCourse } from "@/lib/api";
import { listLessons } from "@/db/queries/authoring";
import { courseToRecordingScript } from "@/lib/narration";
import { RecordingScriptView } from "@/components/recording-script-view";

export const metadata: Metadata = { title: "Recording script" };

// The course's narration script for recording the audio/video version. Owner/instructor-only
// (private-aware). Generated from the lesson bodies at request time — always up to date.
export default async function RecordingScriptPage({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await params;
  const session = await getSession();
  const sdb = await getScopedDb();
  const course = await sdb.getCourseById(courseId);
  if (!course) notFound();
  if (!(await canAccessCourse(session, sdb.tenantId, course))) notFound();

  const lessons = await listLessons(courseId);
  const script = courseToRecordingScript(
    course.title,
    lessons.map((l) => ({ title: l.title, body: l.textContent })),
  );

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link href={`/teach/${course.id}`} className="text-sm underline print:hidden" style={{ color: "var(--accent)" }}>
        ← Back to manage
      </Link>
      <h1 className="mt-4 text-2xl font-bold">Recording script — {course.title}</h1>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400 print:hidden">
        Read this aloud to record the course. Citations and formatting are stripped; “[PAUSE]” marks a
        break between lessons. It regenerates from the current lessons each time you open it, so edits
        stay in sync.
      </p>
      <div className="mt-6">
        <RecordingScriptView script={script} />
      </div>
    </main>
  );
}
