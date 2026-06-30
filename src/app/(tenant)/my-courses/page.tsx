import Link from "next/link";
import type { Metadata } from "next";
import { requireTenant } from "@/lib/tenant";
import { getSession } from "@/lib/session";
import { getLearnerDashboard } from "@/db/queries/dashboard";
import { CourseCard } from "@/components/course-card";

export const metadata: Metadata = { title: "My courses" };

export default async function MyCoursesPage() {
  const tenant = await requireTenant();
  const session = await getSession();

  if (!session) {
    return (
      <main className="mx-auto max-w-2xl px-4 py-12">
        <h1 className="text-2xl font-bold">My courses</h1>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400">
          Please{" "}
          <Link href="/login" className="underline">
            sign in
          </Link>{" "}
          to see your enrolled courses.
        </p>
      </main>
    );
  }

  const { courses } = await getLearnerDashboard(tenant.id, session.user.id);

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-2xl font-bold">My courses</h1>
      {courses.length === 0 ? (
        <p className="mt-3 text-neutral-500">
          You are not enrolled in any courses yet.{" "}
          <Link href="/?view=catalog" className="underline" style={{ color: "var(--accent)" }}>
            Browse the catalog
          </Link>
          .
        </p>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((d) => (
            <CourseCard
              key={d.course.id}
              course={d.course}
              progress={d.percent}
              href={d.username && d.course.slug ? `/${d.username}/${d.course.slug}` : `/course/${d.course.id}`}
            />
          ))}
        </div>
      )}
    </main>
  );
}
