import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { requireTenant } from "@/lib/tenant";
import { getCourseBySlug } from "@/db/queries/authoring";

// Canonical pretty URL: /{instructor-username}/{course-slug}. Resolution is
// tenant-scoped + matched on the instructor's username, so a foreign tenant's
// slug (or a crawlable pretty URL from another brand) 404s here.
type Params = { params: Promise<{ username: string; courseSlug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { username, courseSlug } = await params;
  const tenant = await requireTenant();
  const course = await getCourseBySlug(tenant.id, username, courseSlug);
  return { title: course?.title ?? "Course" };
}

export default async function CourseBySlugPage({ params }: Params) {
  const { username, courseSlug } = await params;
  const tenant = await requireTenant();
  const course = await getCourseBySlug(tenant.id, username, courseSlug);
  if (!course || !course.isPublished) notFound();

  const meta = [course.seriesTitle, course.seasonNumber ? `Season ${course.seasonNumber}` : null]
    .filter(Boolean)
    .join(" · ");

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link href="/" className="text-sm text-neutral-500 hover:underline">
        ← Back to catalog
      </Link>
      {meta ? (
        <p className="mt-6 text-xs uppercase tracking-wide text-neutral-500">{meta}</p>
      ) : null}
      <h1 className="mt-1 text-3xl font-bold">{course.title}</h1>
      <p className="mt-1 text-sm text-neutral-500">
        by{" "}
        <Link href={`/instructors/${username}`} className="hover:underline">
          {username}
        </Link>
      </p>
      {course.description ? (
        <p className="mt-4 text-neutral-700 dark:text-neutral-300">{course.description}</p>
      ) : null}
      <p className="mt-6 text-sm text-neutral-500">
        Lessons and enrollment arrive in the next phases.
      </p>
    </main>
  );
}
