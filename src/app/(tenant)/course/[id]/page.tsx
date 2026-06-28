import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { getScopedDb } from "@/db/scoped";
import { getUsername } from "@/db/queries/authoring";

// /course/[id] is the stable internal link (catalog cards, /teach, /my-courses).
// It redirects to the canonical pretty URL /{username}/{courseSlug}, which renders
// the full course experience (syllabus, enroll, certificate, prerequisites).
export default async function CourseByIdRedirect({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const sdb = await getScopedDb();
  const course = await sdb.getCourseById(id);
  if (!course) notFound();

  const username = await getUsername(course.instructorId);
  if (username && course.slug) {
    redirect(`/${username}/${course.slug}`);
  }

  // Fallback: instructor has no username yet (rare). Show a minimal page.
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link href="/" className="text-sm text-neutral-500 hover:underline">
        ← Back to catalog
      </Link>
      <h1 className="mt-6 text-3xl font-bold">{course.title}</h1>
      {course.description ? (
        <p className="mt-4 text-neutral-700 dark:text-neutral-300">{course.description}</p>
      ) : null}
      <p className="mt-6 text-sm text-neutral-500">
        This course&apos;s public page is being set up.
      </p>
    </main>
  );
}
