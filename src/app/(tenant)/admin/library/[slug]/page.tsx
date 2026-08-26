import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { requirePlatformOwner } from "@/lib/session";
import { formatBytes } from "@/lib/format-bytes";
import { getLibraryDocument } from "@/db/queries/library";
import { Markdown } from "@/components/markdown";

export const metadata: Metadata = { title: "Library" };

const dateFmt = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: "UTC",
});

// Reader for one platform-owner library document. Owner-gated like /admin/roadmap; the body is
// rendered by the shared safe <Markdown> component (react-markdown, no raw HTML), the same
// pipeline lesson text uses.
export default async function AdminLibraryDocumentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  await requirePlatformOwner();
  const { slug } = await params;
  const doc = await getLibraryDocument(slug);
  if (!doc) notFound();
  const size = doc.hasPdf ? formatBytes(doc.pdfBytes) : null;

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 text-sm">
        <Link href="/admin/library" className="underline">
          Back to Library
        </Link>
        <div className="flex items-center gap-3">
          {doc.hasPdf ? (
            <a
              href={`/admin/library/${doc.slug}/download`}
              className="inline-flex min-h-11 items-center rounded-lg border border-neutral-200 px-3 text-xs font-semibold transition-colors hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-500"
            >
              Download PDF{size ? ` (${size})` : ""}
            </a>
          ) : null}
          <span className="text-xs text-neutral-600">
            Updated {dateFmt.format(doc.updatedAt)} UTC
          </span>
        </div>
      </div>
      <article>
        <Markdown>{doc.content}</Markdown>
      </article>
    </main>
  );
}
