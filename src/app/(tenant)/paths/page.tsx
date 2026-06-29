import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getScopedDb } from "@/db/scoped";
import { listPaths } from "@/db/queries/paths";

export const metadata: Metadata = { title: "Learning paths" };

// Curated course tracks for a school (flags.paths).
export default async function PathsPage() {
  const sdb = await getScopedDb();
  if (!sdb.tenant.flags.paths) notFound();
  const paths = await listPaths(sdb.tenantId);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold">Learning paths</h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">Follow a track of courses in order.</p>
      {paths.length === 0 ? (
        <p className="mt-6 text-neutral-500">No paths yet.</p>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {paths.map((p) => (
            <Link key={p.id} href={`/paths/${p.slug}`} className="rounded-lg border border-neutral-200 p-4 hover:border-current dark:border-neutral-800">
              <h2 className="font-semibold">{p.title}</h2>
              {p.description ? <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{p.description}</p> : null}
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
