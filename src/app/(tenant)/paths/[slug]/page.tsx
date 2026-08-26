import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getScopedDb } from "@/db/scoped";
import { getPathBySlug } from "@/db/queries/paths";
import { standardsForCourses } from "@/lib/standards";

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

  // Standards this path meets, aggregated over its published courses and deduped by (state, code):
  // a path is a shopping unit too, so it earns the same summary a course page carries. Pure lookup
  // over committed standards data, no query. Renders nothing when none of the courses is mapped,
  // exactly like the course page — "0 standards" would read as "meets none", not "not analysed yet".
  const pathStandards = standardsForCourses(courses.map((c) => c.slug).filter((s): s is string => !!s));

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link href="/paths" className="text-sm text-neutral-600 hover:underline">
        ← Learning paths
      </Link>
      <h1 className="mt-4 text-3xl font-bold">{data.path.title}</h1>
      {data.path.description ? (
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">{data.path.description}</p>
      ) : null}

      {pathStandards.total > 0 ? (
        <details className="mt-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 px-4 text-sm font-medium pointer-coarse:min-h-12">
            <span aria-hidden="true">🎓</span>
            <span>
              This path meets <strong>{pathStandards.total}</strong> academic standard
              {pathStandards.total === 1 ? "" : "s"} across{" "}
              <strong>{pathStandards.jurisdictions.length}</strong>{" "}
              {pathStandards.jurisdictions.length === 1 ? "jurisdiction" : "jurisdictions"}
            </span>
            <span className="ml-auto text-xs text-neutral-600">show</span>
          </summary>
          <div className="px-4 pb-4">
            <ul className="mt-2 flex flex-wrap gap-2">
              {pathStandards.jurisdictions.map((j) => (
                <li key={j.state}>
                  <Link
                    href={`/academic-standards?state=${j.state.toLowerCase()}`}
                    className="inline-flex items-center gap-1 rounded-full border border-neutral-300 px-3 py-1 text-xs hover:underline dark:border-neutral-700"
                  >
                    {j.jurisdiction}
                    <span className="text-neutral-600">{j.count}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/academic-standards"
              className="mt-3 inline-block text-sm underline underline-offset-2"
              style={{ color: "var(--accent)" }}
            >
              Explore the full standards finder
            </Link>
          </div>
        </details>
      ) : null}

      <ol className="mt-6 space-y-3">
        {courses.length === 0 ? <li className="text-neutral-600">No courses in this path yet.</li> : null}
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
