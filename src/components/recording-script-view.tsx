"use client";

import { useState } from "react";

// Displays a course's generated recording (narration) script in the admin UI — the words to
// read aloud when recording. Large, clean reading pane + Copy and Print. The script itself is
// generated server-side (src/lib/narration.ts) and passed in.
export function RecordingScriptView({ script }: { script: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(script);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard may be blocked; the text is selectable anyway */
    }
  }

  return (
    <div>
      <div className="mb-3 flex flex-wrap gap-2 print:hidden">
        <button
          type="button"
          onClick={copy}
          className="min-h-9 rounded-md border border-neutral-300 px-3 text-sm hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
        >
          {copied ? "✓ Copied" : "Copy script"}
        </button>
        <button
          type="button"
          onClick={() => window.print()}
          className="min-h-9 rounded-md border border-neutral-300 px-3 text-sm hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
        >
          Print / Save PDF
        </button>
      </div>
      {/* Reading pane: generous size + line height so it's easy to read on a stand while recording. */}
      <pre className="whitespace-pre-wrap rounded-lg border border-neutral-200 bg-white p-5 text-[15px] leading-8 text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100">
        {script}
      </pre>
    </div>
  );
}
