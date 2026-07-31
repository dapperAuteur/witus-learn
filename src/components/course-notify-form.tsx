"use client";

import { useId, useState } from "react";

// "Get notified when this course opens", the email capture on an UNVETTED course's public
// landing page. Rendered only for the stranger view: the owner, the course's instructor and
// anyone already enrolled get the real course, so they never see this box.
//
// One field on purpose. Every extra field costs signups, and for someone who just wants to be
// told when a course opens, the address is the entire value. The server (POST /api/course-notify)
// re-validates, resolves the tenant from the request host, and refuses any course that isn't
// actually published-and-unvetted.
//
// The confirmation promises exactly one thing: an email when it opens. No date, no timeline, no
// price, because none of those are known and a missed date is worse than no date.
export function CourseNotifyForm({
  courseId,
  defaultEmail,
}: {
  courseId: string;
  /** The signed-in user's address, prefilled but still editable so they confirm or change it. */
  defaultEmail?: string;
}) {
  const id = useId();
  const [email, setEmail] = useState(defaultEmail ?? "");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "sending") return;
    setState("sending");
    setError(null);
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/course-notify", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          courseId,
          email: email.trim(),
          company: String(fd.get("company") ?? ""),
        }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        setError(data?.error ?? "That did not go through. Try again.");
        setState("error");
        return;
      }
      setState("done");
    } catch {
      setError("We could not reach the server. Check your connection and try again.");
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <p role="status" className="mt-4 text-sm font-medium" style={{ color: "var(--accent)" }}>
        You are on the list. We will email you when this course opens.
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="mt-4">
      <label htmlFor={`${id}-email`} className="block text-sm font-medium">
        Get notified when this course opens
      </label>
      <div className="mt-2 flex flex-col gap-2 sm:flex-row">
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          placeholder="you@example.com"
          aria-describedby={error ? `${id}-error` : undefined}
          className="min-h-11 flex-1 rounded-md border border-neutral-300 px-3 focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-12 dark:border-neutral-700 dark:bg-neutral-900"
        />
        {/* Honeypot: off-screen, not hidden, so a bot fills it and a screen reader skips it. */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
        />
        <button
          type="submit"
          disabled={state === "sending"}
          className="min-h-11 rounded-md px-4 font-medium text-white disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-12"
          style={{ backgroundColor: "var(--accent)" }}
        >
          {state === "sending" ? "Adding…" : "Notify me"}
        </button>
      </div>
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-2 text-sm text-red-700 dark:text-red-400">
          {error}
        </p>
      ) : null}
      <p className="mt-2 text-xs text-neutral-500">
        One email when it opens. Nothing else.
      </p>
    </form>
  );
}
