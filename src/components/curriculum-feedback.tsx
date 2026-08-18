"use client";

import { useState } from "react";
import { discard, enqueue, outboxSupported } from "@/lib/offline-outbox";
import { CURRICULUM_FEEDBACK, curriculumFeedbackDraft, feedbackUrl, type FeedbackKind } from "@/lib/outbox-kinds";
import { useOnline, useOutbox } from "@/lib/use-outbox";

// Learner tool to suggest a correction / comment / question on a lesson. Posts to
// the feedback API (tenant-scoped server-side). A learner improving the curriculum
// is a trust signal, so this lives on every lesson.
//
// ── Writing feedback with no network ──────────────────────────────────────────────────────────
// A lesson can be SAVED FOR OFFLINE and read on a plane or a subway — which is exactly where a
// learner spots the typo, the wrong date, the claim that doesn't match its source. That is the most
// valuable feedback the platform gets, and until now the send button simply threw it away.
//
// Now it queues (src/lib/offline-outbox.ts) and sends itself when the connection returns, from
// whatever page is open at the time. Online behaviour is UNCHANGED — a healthy submit goes straight
// to the API and is never routed through the queue.
//
// The feedback API is signed-in only (401 otherwise) and this component is only rendered for a
// signed-in learner. But a session can expire while the note sits in the queue, so the 401 path
// matters: the outbox KEEPS a 401'd item and retries after sign-in rather than dropping it. The
// pending row says so in words.
export function CurriculumFeedback({ courseId, lessonId }: { courseId: string; lessonId: string }) {
  const [kind, setKind] = useState<FeedbackKind>("correction");
  const [body, setBody] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done" | "queued" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const online = useOnline();
  const { items } = useOutbox(CURRICULUM_FEEDBACK);

  // Only the queued feedback for THIS lesson. The lesson is baked into the item's URL at enqueue
  // time, so matching on it can't drift — and feedback queued on lesson 4 never shows up under
  // lesson 5 while it waits.
  const url = feedbackUrl(courseId, lessonId);
  const pending = items.filter((i) => i.url === url);

  /** Hold it on the device. False when it couldn't be stored — then we KEEP the textarea's text. */
  function queue(text: string): boolean {
    return enqueue(curriculumFeedbackDraft({ courseId, lessonId, kind, body: text })) !== null;
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const text = body.trim();
    if (text.length < 3) return;
    setError(null);

    // Known-offline: queue it rather than throw it at a network that isn't there.
    if (!online) {
      if (!outboxSupported()) {
        setState("error");
        setError("You're offline and this browser can't hold your note. Copy your text somewhere safe.");
      } else if (queue(text)) {
        setBody("");
        setState("queued");
      } else {
        setState("error");
        setError("Couldn't hold that note (storage is full). Your text is still here, copy it somewhere safe.");
      }
      return;
    }

    setState("sending");
    try {
      const r = await fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(curriculumFeedbackDraft({ courseId, lessonId, kind, body: text }).body),
      });
      if (!r.ok) {
        // The server answered and refused. Queueing wouldn't help — it'd refuse again every flush.
        setState("error");
        setError(r.status === 401 ? "Sign in to send feedback." : "Could not send. Try again.");
        return;
      }
      setBody("");
      setState("done");
    } catch {
      // Online by `navigator.onLine`, dead in practice. Same answer: hold it, don't lose it.
      if (outboxSupported() && queue(text)) {
        setBody("");
        setState("queued");
      } else {
        setState("error");
        setError("Network error, and your note couldn't be held. Your text is still here, copy it somewhere safe.");
      }
    }
  }

  // A successful send used to REPLACE the form with a thanks line, which meant a learner with a
  // second thought had to refresh the page to say it (reported 2026-08-10). The form now stays,
  // cleared and ready; the inline role=status line below the button says thanks.

  return (
    <details className="mt-10 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800" open={pending.length > 0}>
      <summary className="cursor-pointer text-sm font-medium">
        Suggest a correction, comment, or question
        {pending.length > 0 ? (
          <span className="ml-2 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-950 dark:text-amber-400">
            {pending.length} waiting to send
          </span>
        ) : null}
      </summary>

      {/* Queued notes. Visibly not sent, with the text still readable and recoverable. */}
      {pending.length > 0 ? (
        <ul className="mt-3 space-y-2">
          {pending.map((item) => (
            <li
              key={item.id}
              className="rounded-lg border border-dashed border-amber-300 bg-amber-50/60 p-3 text-sm dark:border-amber-900/60 dark:bg-amber-950/20"
            >
              <p className="whitespace-pre-wrap wrap-break-word">{item.label}</p>
              <div className="mt-2 flex flex-wrap items-center gap-x-3">
                <span
                  role="status"
                  className={`text-xs ${item.failed ? "font-medium text-red-700 dark:text-red-400" : "text-amber-700 dark:text-amber-500"}`}
                >
                  {item.failed
                    ? (item.lastError ?? "This note wasn't sent.")
                    : (item.lastError ?? "Waiting to send, goes out when you're back online")}
                </span>
                <button
                  type="button"
                  onClick={() => discard(item.id)}
                  className="inline-flex min-h-11 items-center text-xs text-neutral-500 underline pointer-coarse:min-h-12"
                >
                  Discard
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : null}

      <form onSubmit={submit} className="mt-3 space-y-3">
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
          {(["correction", "comment", "question"] as const).map((k) => (
            <label key={k} className="flex min-h-11 items-center gap-1.5 capitalize pointer-coarse:min-h-12">
              <input type="radio" name="kind" checked={kind === k} onChange={() => setKind(k)} />
              {k}
            </label>
          ))}
        </div>
        <label htmlFor="cf-body" className="sr-only">
          Your note
        </label>
        <textarea
          id="cf-body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          minLength={3}
          maxLength={4000}
          rows={3}
          placeholder="What should we fix or clarify? Cite a source if you can."
          className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
        />
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="submit"
            disabled={state === "sending" || body.trim().length < 3}
            className="inline-flex min-h-11 items-center justify-center rounded-md px-3 text-sm font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 pointer-coarse:min-h-12"
            style={{ backgroundColor: "var(--accent)" }}
          >
            {state === "sending" ? "Sending…" : online ? "Send to instructor" : "Save note"}
          </button>
          {state === "queued" ? (
            <span role="status" className="text-sm text-amber-700 dark:text-amber-500">
              Saved on this device, it&rsquo;ll send itself when you&rsquo;re back online.
            </span>
          ) : null}
          {state === "done" ? (
            <span role="status" className="text-sm text-green-700 dark:text-green-400">
              Thanks, sent to the instructor.
            </span>
          ) : null}
          {state === "error" && error ? (
            <span role="status" className="text-sm text-red-600 dark:text-red-400">{error}</span>
          ) : null}
        </div>
        {!online ? (
          <p className="text-xs text-neutral-500">
            You&rsquo;re offline. Your note is held on this device and sent automatically when you
            reconnect, you can keep writing.
          </p>
        ) : null}
      </form>
    </details>
  );
}
