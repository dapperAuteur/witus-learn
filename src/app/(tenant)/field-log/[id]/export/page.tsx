import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { requireTenant } from "@/lib/tenant";
import { getSession } from "@/lib/session";
import { getProjectBundle } from "@/db/queries/field-log";
import { PrintButton } from "@/components/field-log/print-button";

export const metadata: Metadata = { title: "Export — Field Log project" };

type Params = { params: Promise<{ id: string }> };

// Human-readable, print-optimized export. Use the browser's Print → "Save as PDF" (no PDF
// dependency). Machine-readable JSON is at /api/field-log/projects/[id]/export.
export default async function FieldLogExportPage({ params }: Params) {
  const { id } = await params;
  const tenant = await requireTenant();
  const session = await getSession();
  if (!session) notFound();
  const bundle = await getProjectBundle(tenant.id, session.user.id, id);
  if (!bundle) notFound();
  const { project, legs, captures } = bundle;

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <div className="flex items-center justify-between gap-3 print:hidden">
        <Link href={`/field-log/${id}`} className="text-sm text-neutral-500 hover:underline">← Back to project</Link>
        <PrintButton />
      </div>
      <p className="mt-2 text-xs text-neutral-500 print:hidden">
        Tip: choose “Save as PDF” as the destination to keep a PDF copy. You own this record.
      </p>

      <h1 className="mt-6 text-2xl font-bold">{project.title}</h1>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        {project.subject ?? ""} {project.medium ? `· ${project.medium}` : ""} {project.subjectTag ? `· ${project.subjectTag}` : ""}
      </p>

      <section className="mt-6">
        <h2 className="font-semibold">Legs</h2>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm">
          {legs.map((l) => (
            <li key={l.id}>
              {l.name}{l.siteType ? ` (${l.siteType})` : ""}{l.locationLabel ? ` — ${l.locationLabel}` : ""}{l.startDate ? ` · ${l.startDate}` : ""}
            </li>
          ))}
          {legs.length === 0 ? <li className="list-none text-neutral-500">None.</li> : null}
        </ol>
      </section>

      <section className="mt-6">
        <h2 className="font-semibold">Consent ledger</h2>
        <table className="mt-2 w-full text-left text-sm">
          <thead className="text-xs text-neutral-500">
            <tr><th className="py-1 pr-3">Subject</th><th className="py-1 pr-3">Consent</th><th className="py-1 pr-3">Minor</th><th className="py-1 pr-3">When</th></tr>
          </thead>
          <tbody>
            {captures.map((c) => (
              <tr key={c.id} className="border-t border-neutral-100 dark:border-neutral-800">
                <td className="py-1 pr-3">{c.subject ?? "—"}</td>
                <td className="py-1 pr-3">{c.consentStatus}</td>
                <td className="py-1 pr-3">{c.involvesMinor ? "yes" : ""}</td>
                <td className="py-1 pr-3 text-xs text-neutral-500">{new Date(c.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
            {captures.length === 0 ? <tr><td colSpan={4} className="py-2 text-neutral-500">No captures.</td></tr> : null}
          </tbody>
        </table>
      </section>

      <section className="mt-6">
        <h2 className="font-semibold">Sources / media links</h2>
        <ul className="mt-2 space-y-1 text-sm">
          {captures.filter((c) => c.storageUrl).map((c) => (
            <li key={c.id} className="break-all">{c.subject ? `${c.subject}: ` : ""}{c.storageUrl}</li>
          ))}
          {captures.every((c) => !c.storageUrl) ? <li className="text-neutral-500">No media links.</li> : null}
        </ul>
      </section>
    </main>
  );
}
