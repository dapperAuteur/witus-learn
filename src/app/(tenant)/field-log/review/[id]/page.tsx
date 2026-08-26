import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { requireTenant } from "@/lib/tenant";
import { getSession } from "@/lib/session";
import { getReviewBundle } from "@/db/queries/field-log";
import { ReviewForm } from "@/components/field-log/review-form";
import type { RubricState } from "@/lib/field-log-rubric";

export const metadata: Metadata = { title: "Review a project, Field Log" };

type Params = { params: Promise<{ id: string }> };

export default async function ReviewProjectPage({ params }: Params) {
  const { id } = await params;
  const tenant = await requireTenant();
  const session = await getSession();
  if (!session) notFound();
  const bundle = await getReviewBundle(tenant.id, session.user.id, id);
  if (!bundle) notFound(); // not in_review, or the caller is on the crew
  const { project, legs, captures, myReview } = bundle;

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link href="/field-log/review" className="text-sm text-neutral-600 hover:underline">← Review queue</Link>
      <h1 className="mt-1 text-2xl font-bold">{project.title}</h1>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        {project.subject ?? ""} {project.medium ? `· ${project.medium}` : ""} {project.subjectTag ? `· ${project.subjectTag}` : ""}
      </p>

      <section className="mt-6 rounded-lg border border-neutral-200 p-4 text-sm dark:border-neutral-800">
        <h2 className="font-semibold">Legs</h2>
        <ol className="mt-1 list-decimal space-y-0.5 pl-5">
          {legs.map((l) => (
            <li key={l.id}>{l.name}{l.siteType ? ` (${l.siteType})` : ""}{l.locationLabel ? `, ${l.locationLabel}` : ""}</li>
          ))}
          {legs.length === 0 ? <li className="list-none text-neutral-600">None.</li> : null}
        </ol>

        <h2 className="mt-4 font-semibold">Consent ledger</h2>
        <div className="mt-1 overflow-x-auto">
          <table className="w-full text-left">
            <thead className="text-xs text-neutral-600"><tr><th className="py-1 pr-3">Subject</th><th className="py-1 pr-3">Consent</th><th className="py-1 pr-3">Minor</th></tr></thead>
            <tbody>
              {captures.map((c) => (
                <tr key={c.id} className="border-t border-neutral-100 dark:border-neutral-800">
                  <td className="py-1 pr-3">{c.subject ?? "-"}</td>
                  <td className="py-1 pr-3">{c.consentStatus}</td>
                  <td className="py-1 pr-3">{c.involvesMinor ? "yes" : ""}</td>
                </tr>
              ))}
              {captures.length === 0 ? <tr><td colSpan={3} className="py-1 text-neutral-600">No captures.</td></tr> : null}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-semibold">Your review</h2>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
          Score against the Trusted Documentation Rubric. Cite evidence in your notes.
        </p>
        <div className="mt-4">
          <ReviewForm
            projectId={project.id}
            initial={{
              verdict: (myReview?.verdict as "endorse" | "revise" | null) ?? null,
              rubric: (myReview?.rubric as RubricState | null) ?? null,
              body: myReview?.body ?? null,
            }}
          />
        </div>
      </section>
    </main>
  );
}
