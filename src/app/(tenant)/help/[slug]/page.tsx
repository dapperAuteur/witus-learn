import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HELP_ARTICLES, helpArticleBySlug } from "@/lib/help-articles";
import { Markdown } from "@/components/markdown";

type Params = { params: Promise<{ slug: string }> };

// Pre-render every help article (static content, no tenant data).
export function generateStaticParams() {
  return HELP_ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const article = helpArticleBySlug((await params).slug);
  return { title: article ? `${article.title} · Help` : "Help" };
}

export default async function HelpArticlePage({ params }: Params) {
  const article = helpArticleBySlug((await params).slug);
  if (!article) notFound();

  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <Link href="/help" className="text-sm underline" style={{ color: "var(--accent)" }}>
        ← All help
      </Link>
      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-neutral-400">{article.category}</p>
      <article className="mt-1">
        <Markdown>{article.body}</Markdown>
      </article>
    </main>
  );
}
