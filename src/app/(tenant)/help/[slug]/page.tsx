import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HELP_ARTICLES, helpArticleBySlug } from "@/lib/help-articles";
import { Markdown } from "@/components/markdown";
import { tutorialScriptFor } from "@/lib/tutorial-scripts";

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

  // The video script for this article, when one is written. Kept beside the text on purpose: the
  // two are edited together or they drift (src/lib/tutorial-scripts.ts).
  const script = tutorialScriptFor(article.slug);

  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <Link href="/help" className="text-sm underline" style={{ color: "var(--accent)" }}>
        ← All help
      </Link>
      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-neutral-400">{article.category}</p>
      <article className="mt-1">
        <Markdown>{article.body}</Markdown>
      </article>

      {script ? (
        <details className="mt-8 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
          <summary className="cursor-pointer text-sm font-medium">
            Video tutorial script
            <span className="ml-2 text-xs font-normal text-neutral-600">
              {script.status === "ready"
                ? `${script.steps.length} steps${script.estimatedMinutes ? ` · about ${script.estimatedMinutes} min` : ""}`
                : "not written yet"}
            </span>
          </summary>
          {script.status === "ready" ? (
            <ol className="mt-3 space-y-3 text-sm">
              {script.steps.map((step, i) => (
                <li key={i}>
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                    {step.screen}
                  </p>
                  <p className="mt-1 text-neutral-700 dark:text-neutral-300">{step.narration}</p>
                </li>
              ))}
            </ol>
          ) : (
            <p className="mt-3 text-sm text-neutral-600">
              Nobody has written the narration for this one yet. It is listed here so the gap is
              visible rather than forgotten; an invented script would read as approved copy.
            </p>
          )}
        </details>
      ) : null}
    </main>
  );
}
