"use client";

import { useState } from "react";

// The two things a reporting homeschooler actually needs: a printable record, and a block of
// text they can paste into whatever their state asks them to file. Both are client-only, so
// the page itself stays a server component.

export function StandardsActions({ plainText }: { plainText: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(plainText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  const btn =
    "inline-flex min-h-11 items-center justify-center rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium transition-colors hover:border-current focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700 pointer-coarse:min-h-12";

  return (
    <div className="mt-5 flex flex-col gap-3 print:hidden sm:flex-row sm:flex-wrap">
      <button type="button" onClick={() => window.print()} className={btn}>
        Print / save as PDF
      </button>
      <button type="button" onClick={copy} className={btn} aria-live="polite">
        {copied ? "Copied to clipboard" : "Copy as plain text"}
      </button>
    </div>
  );
}
