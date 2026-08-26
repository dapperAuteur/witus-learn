import Link from "next/link";
import type { Metadata } from "next";
import { requireTenant } from "@/lib/tenant";
import { getSession } from "@/lib/session";
import { listReviewQueue } from "@/db/queries/field-log";

export const metadata: Metadata = { title: "Peer review, Field Log" };

// The review queue: projects that peers have marked `in_review`. Reviewing others' work against the
// Trusted Documentation Rubric is how learners earn the "verification-by-doing" muscle — and how the
// credential's endorsements get collected.
export default async function ReviewQueuePage() {
  const tenant = await requireTenant();
  const session = await getSession();

  if (!session) {
    return (
      <main className="mx-auto max-w-2xl px-4 py-12">
        <h1 className="text-2xl font-bold">Peer review</h1>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400">
          Please <Link href="/login" className="underline">sign in</Link> to review peers&apos; projects.
        </p>
      </main>
    );
  }

  const queue = await listReviewQueue(tenant.id, session.user.id);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link href="/field-log" className="text-sm text-neutral-600 hover:underline">← My Field Log</Link>
      <h1 className="mt-1 text-2xl font-bold">Peer review</h1>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        Review a peer&apos;s project against the Trusted Documentation Rubric. Trust pillars must be
        <strong> Met</strong> to endorse; a project needs <strong>2 endorsements</strong> for the credential.
      </p>

      {queue.length === 0 ? (
        <div className="mt-8 rounded-lg border border-dashed border-neutral-300 p-8 text-center dark:border-neutral-700">
          <p className="text-neutral-600 dark:text-neutral-400">Nothing awaiting review right now.</p>
        </div>
      ) : (
        <ul className="mt-6 space-y-3">
          {queue.map((p) => (
            <li key={p.id}>
              <Link
                href={`/field-log/review/${p.id}`}
                className="block rounded-lg border border-neutral-200 p-4 hover:border-neutral-300 dark:border-neutral-800 dark:hover:border-neutral-700"
              >
                <div className="font-semibold">{p.title}</div>
                <div className="mt-1 flex flex-wrap gap-2 text-xs text-neutral-600">
                  {p.medium ? <span className="rounded bg-neutral-100 px-2 py-0.5 dark:bg-neutral-800">{p.medium}</span> : null}
                  {p.subjectTag ? <span className="rounded bg-neutral-100 px-2 py-0.5 dark:bg-neutral-800">{p.subjectTag}</span> : null}
                  {p.subject ? <span className="truncate">· {p.subject}</span> : null}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
