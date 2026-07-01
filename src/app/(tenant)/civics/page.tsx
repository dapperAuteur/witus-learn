import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { requireTenant } from "@/lib/tenant";
import { listCourses } from "@/db/queries/catalog";
import { UsStatesMap, type StateLink } from "@/components/us-states-map";
import { US_STATES, stateCodeFromSlug } from "@/lib/us-states";

export const metadata: Metadata = { title: "Civics by State" };

// Per-state civics hub: a clickable US map. A state lights up when this tenant has a course
// with slug `state-civics-<code>`. Tenant-scoped (only this brand's courses) and only shown
// to tenants that actually teach civics.
export default async function CivicsStatesPage() {
  const tenant = await requireTenant();
  const courses = await listCourses(tenant.id);
  if (!courses.some((c) => c.category === "Civics")) notFound();

  const states: Record<string, StateLink> = {};
  for (const c of courses) {
    const code = c.slug ? stateCodeFromSlug(c.slug) : null;
    if (code) states[US_STATES[code]] = { href: `/course/${c.id}`, title: c.title };
  }
  const available = Object.entries(states).sort((a, b) => a[0].localeCompare(b[0]));

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-2xl font-bold">Civics by state</h1>
      <p className="mt-1 text-neutral-600 dark:text-neutral-400">
        Pick your state to learn how government works where you live. The national civics courses
        (Constitution, federalism, how to run or help a campaign) are in the catalog.
      </p>

      <div className="mt-6">
        <UsStatesMap states={states} />
      </div>

      {available.length ? (
        <div className="mt-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Available now</h2>
          <ul className="mt-2 flex flex-wrap gap-2">
            {available.map(([name, link]) => (
              <li key={name}>
                <Link
                  href={link.href}
                  className="inline-block min-h-9 rounded-md border border-neutral-200 px-3 py-1.5 text-sm hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-800 dark:hover:bg-neutral-800"
                  style={{ color: "var(--accent)" }}
                >
                  {name} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="mt-6 text-sm text-neutral-500">
          Per-state courses are coming soon — the national civics courses are available in the catalog now.
        </p>
      )}
    </main>
  );
}
