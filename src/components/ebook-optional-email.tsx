"use client";

import { useState } from "react";

// The optional email on an ebook page.
//
// BAM's rule: no email is required to get the ebook, the visitor MAY offer one, and the page must
// say plainly that it is not required. So the download link sits ABOVE this form and works without
// it, and this component never gates anything. It cannot: the download route does not read email.
//
// Which makes the copy the whole feature. "Enter your email to download" is the industry default and
// it is a lie here, so the button says what it does and the label says what it does not.
export function EbookOptionalEmail({ slug }: { slug: string }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function send() {
    if (!email.trim()) return;
    setState("sending");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: `ebook:${slug}` }),
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <p className="mt-6 rounded-md border border-neutral-200 p-4 text-sm dark:border-neutral-800">
        Thank you. We will send occasional notes about new material, and you can stop them any time.
      </p>
    );
  }

  return (
    <div className="mt-6 rounded-md border border-neutral-200 p-4 dark:border-neutral-800">
      <p className="text-sm font-medium">Want to hear when there is more?</p>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
        Entirely optional. <strong>You do not need to give an email to read or download this</strong>,
        and the download above already works. Leave it blank and nothing is lost.
      </p>
      <div className="mt-3 flex flex-col gap-2 sm:flex-row">
        <label htmlFor={`email-${slug}`} className="sr-only">
          Email address, optional
        </label>
        <input
          id={`email-${slug}`}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="min-h-11 flex-1 rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700 dark:bg-neutral-900 pointer-coarse:min-h-12"
        />
        <button
          type="button"
          onClick={send}
          disabled={state === "sending" || !email.trim()}
          className="inline-flex min-h-11 items-center justify-center rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700 pointer-coarse:min-h-12"
        >
          {state === "sending" ? "Sending…" : "Keep me posted"}
        </button>
      </div>
      {state === "error" ? (
        <p role="alert" className="mt-2 text-sm text-red-700 dark:text-red-400">
          That did not send. The download is unaffected.
        </p>
      ) : null}
    </div>
  );
}
