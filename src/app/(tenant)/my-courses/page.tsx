import Link from "next/link";
import type { Metadata } from "next";
import { requireTenant } from "@/lib/tenant";
import { getSession } from "@/lib/session";
import { listMyCourses } from "@/db/queries/enrollment";

export const metadata: Metadata = { title: "My courses" };

export default async function MyCoursesPage() {
  await requireTenant();
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

  const tenant = await requireTenant();
  const courses = await listMyCourses(tenant.id, session.user.id);

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-2xl font-bold">My courses</h1>
      {courses.length === 0 ? (
        <p className="mt-3 text-neutral-500">
          You are not enrolled in any courses yet.{" "}
          <Link href="/" className="underline">
            Browse the catalog
          </Link>
          .
        </p>
      ) : (
        <ul className="mt-6 divide-y divide-neutral-200 dark:divide-neutral-800">
          {courses.map(({ enrollment, course }) => (
            <li key={enrollment.id} className="flex items-center justify-between py-3">
              <Link href={`/course/${course.id}`} className="font-medium hover:underline">
                {course.title}
              </Link>
              <span className="text-xs text-neutral-500">
                {enrollment.status === "active" ? "Enrolled" : enrollment.status}
              </span>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
