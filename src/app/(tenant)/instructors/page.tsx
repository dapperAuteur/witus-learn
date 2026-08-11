import Link from "next/link";
import type { Metadata } from "next";
import { ogImageUrl } from "@/lib/og";
import { requireTenant } from "@/lib/tenant";
import { listInstructors } from "@/db/queries/authoring";

const TITLE = "Instructors";
const DESCRIPTION =
  "The people who wrote these courses, what each one teaches, and how to reach them.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [ogImageUrl({ title: TITLE, subtitle: "Who teaches here" })],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [ogImageUrl({ title: TITLE, subtitle: "Who teaches here" })],
  },
};

// Tenant-scoped directory: only instructors with a published course on THIS brand.
export default async function InstructorsPage() {
  const tenant = await requireTenant();
  const instructors = await listInstructors(tenant.id);

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-bold">Instructors</h1>
      {instructors.length === 0 ? (
        <p className="text-neutral-500">No instructors yet.</p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {instructors.map((i) => (
            <li key={i.userId}>
              <Link
                href={`/instructors/${i.username ?? ""}`}
                className="block rounded-lg border border-neutral-200 p-4 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-800"
              >
                <p className="font-semibold">{i.displayName ?? i.username}</p>
                {i.username ? <p className="text-sm text-neutral-500">@{i.username}</p> : null}
                {i.bio ? (
                  <p className="mt-2 line-clamp-2 text-sm text-neutral-600 dark:text-neutral-400">
                    {i.bio}
                  </p>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
