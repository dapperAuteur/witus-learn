// The numbered sources under a "chat with the sources" answer. Each one links to where it can be read
// in full when the server resolved a place (src/lib/source-chat-links.ts): a lesson (with a text
// fragment that scrolls to the passage), a source's own page, or the course's Sources page.
//
// Internal links are plain <a>, not next/link, on purpose: a URL text fragment (#:~:text=) is only
// acted on by a real browser navigation, and a client-side route change would skip the scroll and
// highlight. External links open in a new tab with rel="noopener noreferrer".

export interface SourceChatCitationView {
  n: number;
  kind: string;
  title: string | null;
  snippet: string;
  href?: string | null;
  external?: boolean;
}

const KIND_LABEL: Record<string, string> = {
  lesson: "lesson",
  citation: "source",
  public_domain_text: "full text",
};

export function SourceChatCitations({ citations, className }: { citations: SourceChatCitationView[]; className?: string }) {
  return (
    <ol className={className}>
      {citations.map((c) => {
        // A link needs words to click; an untitled one reads "Read it in full".
        const label = c.title || (c.href ? "Read it in full" : null);
        return (
          <li key={c.n}>
            [{c.n}] <span className="font-medium">{KIND_LABEL[c.kind] ?? c.kind}</span>
            {label ? " · " : null}
            {c.href ? (
              <a
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="underline hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:inline-flex pointer-coarse:min-h-11 pointer-coarse:items-center"
                style={{ color: "var(--accent)" }}
              >
                {label}
                {c.external ? <span className="sr-only"> (opens in a new tab)</span> : null}
              </a>
            ) : (
              label
            )}
            : {c.snippet}…
          </li>
        );
      })}
    </ol>
  );
}
