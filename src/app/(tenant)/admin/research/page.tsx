import Link from "next/link";
import type { Metadata } from "next";
import { getScopedDb } from "@/db/scoped";
import { requirePlatformOwner } from "@/lib/session";
import { researchChecksByKey } from "@/db/queries/research-checks";
import {
  RESEARCH_CHECK_STATUS_LABEL,
  groupedResearchChecks,
  type ResearchCheckStatus,
} from "@/lib/research-checks";
import { ResearchCheckForm } from "@/components/research-check-form";

export const metadata: Metadata = { title: "Source checks" };

// Owner-only. The facts in the catalog that need a PRIMARY source and that Claude could not get to.
//
// The checks are COMMITTED content (src/lib/research-checks.ts); only the status and the answer live
// in the database, scoped to the tenant resolved from the request host by getScopedDb(). Claude reads
// the answers back with `pnpm research:list`, fixes the lesson, and deletes the check from the index.
// The list shrinking is the progress bar, the same shape as the standards-coverage ratchet.

const statusClass: Record<ResearchCheckStatus, string> = {
  open: "bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200",
  verified: "bg-emerald-100 text-emerald-900 dark:bg-emerald-900/40 dark:text-emerald-100",
  corrected: "bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-200",
  blocked: "bg-neutral-200 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300",
};

const severityClass = {
  high: "bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300",
  medium: "bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200",
  low: "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300",
} as const;

export default async function ResearchChecksPage() {
  await requirePlatformOwner();
  const sdb = await getScopedDb();
  const answers = await researchChecksByKey(sdb.tenantId);
  const groups = groupedResearchChecks();

  const all = groups.flatMap((g) => g.checks);
  const openCount = all.filter((c) => (answers.get(c.key)?.status ?? "open") === "open").length;

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-2xl font-semibold tracking-tight">Source checks</h1>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        Facts in the catalog that need a primary source, and that Claude could not get to: paywalled
        statutes, a call to a county clerk, a trade body&rsquo;s current standard. Answer one and it
        goes straight to Claude, who fixes the lesson and removes the check.
      </p>
      <p className="mt-2 text-sm font-medium">
        {openCount} open of {all.length} total.
      </p>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        This is the flagged list. The other one,{" "}
        <Link href="/admin/citations" className="underline">
          Citations
        </Link>
        , holds every source cited by a staged course.
      </p>
      <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
        A check cannot be closed without saying what you found. A check marked verified with nothing
        written down is worse than an open one, because it stops anyone looking again.
      </p>

      {groups.map((group) => (
        <section key={group.course} className="mt-10">
          <h2 className="text-lg font-semibold tracking-tight">{group.course}</h2>
          <ul className="mt-4 space-y-6">
            {group.checks.map((check) => {
              const row = answers.get(check.key);
              const status = (row?.status ?? "open") as ResearchCheckStatus;
              return (
                <li
                  key={check.key}
                  className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${severityClass[check.severity]}`}
                    >
                      {check.severity}
                    </span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${statusClass[status]}`}
                    >
                      {RESEARCH_CHECK_STATUS_LABEL[status]}
                    </span>
                  </div>

                  <h3 className="mt-2 text-base font-semibold">{check.title}</h3>

                  <dl className="mt-3 space-y-3 text-sm">
                    <div>
                      <dt className="font-medium">The question</dt>
                      <dd className="text-neutral-700 dark:text-neutral-300">{check.question}</dd>
                    </div>
                    <div>
                      <dt className="font-medium">What the course currently says</dt>
                      <dd className="text-neutral-700 dark:text-neutral-300">{check.claim}</dd>
                    </div>
                    <div>
                      <dt className="font-medium">Why it matters</dt>
                      <dd className="text-neutral-700 dark:text-neutral-300">{check.stakes}</dd>
                    </div>
                    <div>
                      <dt className="font-medium">What Claude needs back</dt>
                      <dd>
                        <ul className="list-disc pl-5 text-neutral-700 dark:text-neutral-300">
                          {check.needs.map((n) => (
                            <li key={n}>{n}</li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                    <div>
                      <dt className="font-medium">Where to look</dt>
                      <dd>
                        <ul className="list-disc pl-5 text-neutral-700 dark:text-neutral-300">
                          {check.where.map((w) => (
                            <li key={w}>{w}</li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  </dl>

                  <ResearchCheckForm
                    checkKey={check.key}
                    initialStatus={status}
                    initialAnswer={row?.answer ?? ""}
                    updatedAt={row?.updatedAt ? row.updatedAt.toISOString() : null}
                  />
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </main>
  );
}
