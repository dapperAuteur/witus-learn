import Link from "next/link";
import type { Metadata } from "next";
import { getScopedDb } from "@/db/scoped";
import { requirePlatformOwner } from "@/lib/session";
import { EBOOKS } from "@/lib/ebooks";
import { listEbookApprovals } from "@/db/queries/ebook-approvals";
import { Markdown } from "@/components/markdown";
import { EbookApprove } from "@/components/ebook-approve";

export const metadata: Metadata = { title: "Ebooks" };

// Owner-only review surface for the marketing ebooks. Each one is readable in full here BEFORE it is
// public anywhere: BAM's requirement is that an ebook exists in the repo and on this page and nowhere
// else until he approves it. Approval is enforced server-side on the public page and the download,
// not by hiding a link.
export default async function AdminEbooksPage() {
  await requirePlatformOwner();
  const sdb = await getScopedDb();
  const approvals = await listEbookApprovals(sdb.tenantId);

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-2xl font-semibold tracking-tight">Ebooks</h1>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        Free downloads for the landing pages, each one private until you approve it. An unapproved
        ebook 404s on its public page and on its download URL, so nothing leaks by someone guessing
        the address.
      </p>

      {EBOOKS.map((ebook) => {
        const approval = approvals.get(ebook.slug);
        return (
          <section key={ebook.slug} className="mt-10 border-t border-neutral-200 pt-6 dark:border-neutral-800">
            <h2 className="text-lg font-semibold tracking-tight">{ebook.title}</h2>
            <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">{ebook.subtitle}</p>
            <dl className="mt-3 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
              <div>
                <dt className="font-medium">Written for</dt>
                <dd className="text-neutral-700 dark:text-neutral-300">{ebook.writtenFor}</dd>
              </div>
              <div>
                <dt className="font-medium">Landing page</dt>
                <dd>
                  <Link href={`/for/${ebook.audience}`} className="underline">
                    /for/{ebook.audience}
                  </Link>
                </dd>
              </div>
            </dl>

            <EbookApprove
              slug={ebook.slug}
              initialApproved={Boolean(approval)}
              initialNote={approval?.note ?? ""}
            />

            <details className="mt-4">
              <summary className="cursor-pointer text-sm font-medium">Read the full text</summary>
              <div className="mt-3">
                <Markdown>{ebook.body}</Markdown>
              </div>
            </details>
          </section>
        );
      })}
    </main>
  );
}
