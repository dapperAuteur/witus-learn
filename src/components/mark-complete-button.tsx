"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { enqueue, outboxSupported } from "@/lib/offline-outbox";
import { progressDraft, progressUrl } from "@/lib/outbox-kinds";

// Marks a lesson complete via the progress API. Deliberately does NOT jump the viewport — the old
// behaviour looked like the page had navigated to the next lesson. Instead it flips in place, and
// (for a linear course with a next lesson) offers a "Next lesson" prompt so the learner chooses to
// move on. Router state is refreshed quietly so sequential gating unlocks; scroll is preserved.
export function MarkCompleteButton({
  courseId,
  lessonId,
  completed,
  nextHref,
  isLinear,
}: {
  courseId: string;
  lessonId: string;
  completed: boolean;
  /** Link to the next lesson, or null if this is the last one. */
  nextHref?: string | null;
  /** Linear course → offer the "Next lesson" prompt after completing. */
  isLinear?: boolean;
}) {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [justCompleted, setJustCompleted] = useState(false);

  const done = completed || justCompleted;

  if (done) {
    return (
      <div className="flex flex-wrap items-center gap-3">
        <p role="status" className="text-sm font-medium text-green-700 dark:text-green-400">
          ✓ Completed
        </p>
        {isLinear && nextHref ? (
          <Link
            href={nextHref}
            className="min-h-9 rounded-md px-3 py-1.5 text-sm font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Next lesson →
          </Link>
        ) : null}
      </div>
    );
  }

  async function onClick() {
    setPending(true);
    try {
      const res = await fetch(progressUrl(courseId, lessonId), {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ completed: true }),
      });
      setPending(false);
      if (res.ok) {
        setJustCompleted(true); // flip in place — no scroll jump
        router.refresh(); // refetch server state (gating) without moving the viewport
      }
    } catch {
      // Offline: the fetch threw. Queue the completion so it records when the network returns, and
      // flip in place now so the learner isn't stuck on "Saving…". router.refresh() can't refetch
      // server-side gating offline, so the optimistic "Completed" is the honest best-effort until
      // the outbox drains on reconnect (OfflineOutboxFlusher in the root layout).
      setPending(false);
      if (outboxSupported() && enqueue(progressDraft({ courseId, lessonId, completed: true }))) {
        setJustCompleted(true);
      }
    }
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={pending}
      className="min-h-11 rounded-md px-4 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60"
      style={{ backgroundColor: "var(--accent)" }}
    >
      {pending ? "Saving…" : "Mark complete"}
    </button>
  );
}
