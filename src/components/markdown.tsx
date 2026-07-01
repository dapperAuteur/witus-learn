import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { trackedHref, type LinkContext } from "@/lib/tracked-link";

// Safe markdown renderer (no raw HTML injection) with GFM (tables, etc.). Styled
// inline so it works without the typography plugin. Used for lesson text so authored
// content renders formatted instead of showing raw # and *.
//
// When `linkContext` (a courseId, optionally a lessonId) is supplied, external links are
// rewritten through /api/link/click so the instructor sees click counts. Without it, links
// render verbatim (e.g. previews, non-course content).
export function Markdown({ children, linkContext }: { children: string; linkContext?: LinkContext }) {
  return (
    <div className="text-neutral-800 dark:text-neutral-200">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => <h1 className="mb-2 mt-6 text-2xl font-bold">{children}</h1>,
          h2: ({ children }) => <h2 className="mb-2 mt-5 text-xl font-semibold">{children}</h2>,
          h3: ({ children }) => <h3 className="mb-1 mt-4 text-lg font-semibold">{children}</h3>,
          h4: ({ children }) => <h4 className="mb-1 mt-3 font-semibold">{children}</h4>,
          p: ({ children }) => <p className="my-3 leading-relaxed">{children}</p>,
          ul: ({ children }) => <ul className="my-3 list-disc space-y-1 pl-6">{children}</ul>,
          ol: ({ children }) => <ol className="my-3 list-decimal space-y-1 pl-6">{children}</ol>,
          li: ({ children }) => <li>{children}</li>,
          strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
          em: ({ children }) => <em className="italic">{children}</em>,
          a: ({ children, href }) => (
            <a
              href={linkContext ? trackedHref(href, linkContext) : href}
              className="underline"
              style={{ color: "var(--accent)" }}
              target="_blank"
              rel="noreferrer"
            >
              {children}
            </a>
          ),
          blockquote: ({ children }) => (
            <blockquote className="my-3 border-l-4 border-neutral-300 pl-4 text-neutral-600 dark:border-neutral-700 dark:text-neutral-400">
              {children}
            </blockquote>
          ),
          code: ({ children }) => <code className="rounded bg-neutral-100 px-1 py-0.5 text-sm dark:bg-neutral-800">{children}</code>,
          table: ({ children }) => (
            <div className="my-3 overflow-x-auto">
              <table className="w-full border-collapse text-sm">{children}</table>
            </div>
          ),
          th: ({ children }) => <th className="border border-neutral-300 px-2 py-1 text-left font-semibold dark:border-neutral-700">{children}</th>,
          td: ({ children }) => <td className="border border-neutral-300 px-2 py-1 dark:border-neutral-700">{children}</td>,
          hr: () => <hr className="my-4 border-neutral-200 dark:border-neutral-800" />,
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
