import type { Metadata } from "next";
import { requirePlatformOwner } from "@/lib/session";
import { requireTenant } from "@/lib/tenant";
import { brandName } from "@/lib/branding";
import { listLeads } from "@/db/queries/leads";

export const metadata: Metadata = { title: "Leads" };

// Platform-owner view of captured leads for this school.
export default async function LeadsPage() {
  await requirePlatformOwner();
  const tenant = await requireTenant();
  const rows = await listLeads(tenant.id);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-bold">Leads — {brandName(tenant)}</h1>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{rows.length} captured.</p>
      {rows.length === 0 ? (
        <p className="mt-6 text-neutral-500">No leads yet.</p>
      ) : (
        <ul className="mt-6 divide-y divide-neutral-200 text-sm dark:divide-neutral-800">
          {rows.map((l) => (
            <li key={l.email} className="flex items-center justify-between gap-3 py-2">
              <span className="font-mono">{l.email}</span>
              <span className="text-neutral-500">
                {l.source ?? "—"} · {l.createdAt.toLocaleDateString()}
              </span>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
