import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getScopedDb } from "@/db/scoped";
import { getPathBySlug } from "@/db/queries/paths";

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const sdb = await getScopedDb();
  const p = await getPathBySlug(sdb.tenantId, slug);
  return { title: p?.path.title ?? "Path" };
}

// A single learning path: its courses, in order. Tenant-scoped.
export default async function PathPage({ params }: Params) {
  const { slug } = await params;
  const sdb = await getScopedDb();
  if (!sdb.tenant.flags.paths) notFound();
  const data = await getPathBySlug(sdb.tenantId, slug);
  if (!data) notFound();

  const courses = data.courses.filter((c) => c.isPublished);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link href="/paths" className="text-sm text-neutral-500 hover:underline">
        ← Learning paths
      </Link>
      <h1 className="mt-4 text-3xl font-bold">{data.path.title}</h1>
      {data.path.description ? (
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">{data.path.description}</p>
      ) : null}

      <ol className="mt-6 space-y-3">
        {courses.length === 0 ? <li className="text-neutral-500">No courses in this path yet.</li> : null}
        {courses.map((c, i) => (
          <li key={c.id}>
            <Link href={`/course/${c.id}`} className="flex items-start gap-3 rounded-lg border border-neutral-200 p-4 hover:border-current dark:border-neutral-800">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white" style={{ backgroundColor: "var(--accent)" }}>
                {i + 1}
              </span>
              <span>
                <span className="font-medium">{c.title}</span>
                {c.description ? <span className="mt-1 block text-sm text-neutral-600 dark:text-neutral-400">{c.description}</span> : null}
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
