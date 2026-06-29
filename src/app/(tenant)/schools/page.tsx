import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getScopedDb } from "@/db/scoped";
import { listSchoolDirectory } from "@/db/queries/directory";

export const metadata: Metadata = { title: "Our schools" };

// Brand directory — only on the platform front door (the recruiting school). Links
// OUT to each brand's own domain; never renders another brand's catalog (isolation).
export default async function SchoolsPage() {
  const sdb = await getScopedDb();
  if (!sdb.tenant.flags.recruiting) notFound();

  const schools = await listSchoolDirectory(sdb.tenant.slug);

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <header className="mb-8">
        <p className="text-sm uppercase tracking-widest" style={{ color: "var(--accent)" }}>
          The WitUS family
        </p>
        <h1 className="mt-1 text-3xl font-bold">Our schools</h1>
        <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-400">
          Each school is its own brand, on its own domain. Explore them below.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {schools.map((s) => {
          const inner = (
            <>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full" style={{ backgroundColor: s.accent ?? "#888" }} />
                <h2 className="font-semibold">{s.name}</h2>
                {s.comingSoon ? (
                  <span className="rounded-full bg-neutral-200 px-2 py-0.5 text-xs text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
                    Coming soon
                  </span>
                ) : null}
              </div>
              {s.tagline ? (
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{s.tagline}</p>
              ) : null}
              {s.host ? (
                <p className="mt-3 text-sm font-medium" style={{ color: "var(--accent)" }}>
                  Visit {s.host} →
                </p>
              ) : null}
            </>
          );
          const cls = "rounded-lg border border-neutral-200 p-4 dark:border-neutral-800";
          return s.host ? (
            <a key={s.slug} href={`https://${s.host}`} className={`${cls} block hover:border-current`}>
              {inner}
            </a>
          ) : (
            <div key={s.slug} className={cls}>
              {inner}
            </div>
          );
        })}
      </div>
    </main>
  );
}
