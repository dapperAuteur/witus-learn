import Link from "next/link";
import type { Metadata } from "next";
import { requirePlatformOwner } from "@/lib/session";
import { listLibraryDocuments } from "@/db/queries/library";

export const metadata: Metadata = { title: "Library" };

const dateFmt = new Intl.DateTimeFormat("en-US", { dateStyle: "medium", timeZone: "UTC" });

// Platform-owner private library: the long-form internal ebooks (interview prep, the commercial
// playbook) that live as local markdown outside this public repo. Content is upserted into
// library_documents by `node scripts/sync-library.mjs <files...>` and readable only here.
export default async function AdminLibraryPage() {
  await requirePlatformOwner();
  const docs = await listLibraryDocuments();

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-semibold tracking-tight">Library</h1>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        Private long-form documents: interview prep, the playbook, per-app chapters. Synced from
        local markdown via <span className="font-mono">scripts/sync-library.mjs</span>. Owner-only;
        nothing here is visible to any school.
      </p>

      {docs.length === 0 ? (
        <p className="mt-6 rounded-lg border border-neutral-200 px-4 py-6 text-sm text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">
          Nothing here yet. Run{" "}
          <span className="font-mono">node scripts/sync-library.mjs &lt;markdown files...&gt;</span>{" "}
          from the repo root to upload the ebooks.
        </p>
      ) : (
        <ul className="mt-6 space-y-3">
          {docs.map((doc) => (
            <li key={doc.slug}>
              <Link
                href={`/admin/library/${doc.slug}`}
                className="block min-h-11 rounded-lg border border-neutral-200 px-4 py-3 transition-colors hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-500"
              >
                <span className="block font-semibold">{doc.title}</span>
                {doc.description ? (
                  <span className="mt-1 block text-sm text-neutral-600 dark:text-neutral-400">
                    {doc.description}
                  </span>
                ) : null}
                <span className="mt-1 block text-xs text-neutral-500">
                  Updated {dateFmt.format(doc.updatedAt)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
