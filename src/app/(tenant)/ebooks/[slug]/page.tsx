import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getScopedDb } from "@/db/scoped";
import { getEbook } from "@/lib/ebooks";
import { isEbookApproved } from "@/db/queries/ebook-approvals";
import { ogImageUrl } from "@/lib/og";
import { Markdown } from "@/components/markdown";
import { EbookOptionalEmail } from "@/components/ebook-optional-email";

// The public ebook page. 404s unless the ebook is APPROVED for this tenant, checked server-side on
// every request, so an unapproved draft is unreachable even to someone who knows the URL.
//
// No email is required to read or download. The optional-email card sits BELOW the download link and
// gates nothing.

async function load(slug: string) {
  const ebook = getEbook(slug);
  if (!ebook) return null;
  const sdb = await getScopedDb();
  if (!(await isEbookApproved(sdb.tenantId, ebook.slug))) return null;
  return ebook;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ebook = await load(slug);
  if (!ebook) return { title: "Not found" };
  const image = ogImageUrl({ title: ebook.title, subtitle: ebook.subtitle });
  return {
    title: ebook.title,
    description: ebook.subtitle,
    openGraph: { title: ebook.title, description: ebook.subtitle, images: [image] },
    twitter: { title: ebook.title, description: ebook.subtitle, images: [image] },
  };
}

export default async function EbookPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ebook = await load(slug);
  if (!ebook) notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-2xl font-semibold tracking-tight">{ebook.title}</h1>
      <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{ebook.subtitle}</p>

      <p className="mt-4">
        <a
          href={`/api/ebooks/${ebook.slug}/download`}
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 dark:bg-neutral-100 dark:text-neutral-900 pointer-coarse:min-h-12"
        >
          Download it
        </a>
      </p>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        Free, and no email needed. The whole thing is on this page as well.
      </p>

      <EbookOptionalEmail slug={ebook.slug} />

      <article className="mt-10 border-t border-neutral-200 pt-8 dark:border-neutral-800">
        <Markdown>{ebook.body}</Markdown>
      </article>
    </main>
  );
}
