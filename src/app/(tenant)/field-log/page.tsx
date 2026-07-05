import Link from "next/link";
import type { Metadata } from "next";
import { requireTenant } from "@/lib/tenant";
import { getSession } from "@/lib/session";
import { listProjects } from "@/db/queries/field-log";
import { NewProject } from "@/components/field-log/new-project";

export const metadata: Metadata = { title: "My Field Log" };

function progressOf(checklist: unknown): { done: number; total: number } {
  const stages = (checklist as { stages?: { items?: { done?: boolean }[] }[] } | null)?.stages ?? [];
  let done = 0;
  let total = 0;
  for (const s of stages) for (const i of s.items ?? []) {
    total += 1;
    if (i.done) done += 1;
  }
  return { done, total };
}

export default async function FieldLogPage() {
  const tenant = await requireTenant();
  const session = await getSession();

  if (!session) {
    return (
      <main className="mx-auto max-w-2xl px-4 py-12">
        <h1 className="text-2xl font-bold">My Field Log</h1>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400">
          Please{" "}
          <Link href="/login" className="underline">sign in</Link>{" "}
          to plan and track your documentation projects.
        </p>
      </main>
    );
  }

  const projects = await listProjects(tenant.id, session.user.id);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold">My Field Log</h1>
        <div className="flex items-center gap-3">
          <Link href="/field-log/review" className="text-sm text-neutral-600 hover:underline dark:text-neutral-400">
            Review peers →
          </Link>
          <NewProject />
        </div>
      </div>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        Run your own documentation projects — plan, gather with consent, verify, and publish. Each project
        holds its story <strong>legs</strong> (the sites you visit), a capture log, and a consent ledger.
      </p>

      {projects.length === 0 ? (
        <div className="mt-8 rounded-lg border border-dashed border-neutral-300 p-8 text-center dark:border-neutral-700">
          <p className="text-neutral-600 dark:text-neutral-400">No projects yet.</p>
          <p className="mt-1 text-sm text-neutral-500">Start one from a template to begin.</p>
        </div>
      ) : (
        <ul className="mt-6 space-y-3">
          {projects.map((p) => {
            const { done, total } = progressOf(p.checklist);
            return (
              <li key={p.id}>
                <Link
                  href={`/field-log/${p.id}`}
                  className="block rounded-lg border border-neutral-200 p-4 transition hover:border-neutral-300 focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-800 dark:hover:border-neutral-700"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-semibold">{p.title}</span>
                    <span className="text-xs text-neutral-500">{total ? `${done}/${total}` : "—"}</span>
                  </div>
                  <div className="mt-1 flex flex-wrap gap-2 text-xs text-neutral-500">
                    {p.medium ? <span className="rounded bg-neutral-100 px-2 py-0.5 dark:bg-neutral-800">{p.medium}</span> : null}
                    {p.subjectTag ? <span className="rounded bg-neutral-100 px-2 py-0.5 dark:bg-neutral-800">{p.subjectTag}</span> : null}
                    <span className="rounded bg-neutral-100 px-2 py-0.5 dark:bg-neutral-800">{p.status}</span>
                    {p.subject ? <span className="truncate">· {p.subject}</span> : null}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
}
