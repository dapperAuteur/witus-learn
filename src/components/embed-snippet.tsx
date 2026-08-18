"use client";

import { useState } from "react";

// Copy box for the paste-anywhere iframe snippet (/teach/[courseId]/embed). The snippet itself
// is built server-side (buildEmbedSnippet in src/lib/embed-card.ts) and passed in — this
// component only displays and copies it. Same copy pattern as recording-script-view.tsx.
export function EmbedSnippetCopy({ snippet }: { snippet: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(snippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard may be blocked; the textarea text is selectable anyway */
    }
  }

  return (
    <div>
      <label htmlFor="embed-snippet" className="text-sm font-medium">
        Copy this snippet into any web page
      </label>
      <textarea
        id="embed-snippet"
        readOnly
        value={snippet}
        rows={9}
        spellCheck={false}
        onFocus={(e) => e.currentTarget.select()}
        className="mt-1 w-full rounded-md border border-neutral-300 bg-neutral-50 p-3 font-mono text-xs leading-relaxed dark:border-neutral-700 dark:bg-neutral-900"
      />
      <button
        type="button"
        onClick={copy}
        className="mt-2 inline-flex min-h-11 items-center rounded-md px-4 py-2 text-sm font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2"
        style={{ backgroundColor: "var(--accent, #111)" }}
      >
        {copied ? "Copied ✓" : "Copy snippet"}
      </button>
      <span aria-live="polite" className="sr-only">
        {copied ? "Snippet copied to clipboard" : ""}
      </span>
    </div>
  );
}
