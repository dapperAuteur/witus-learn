"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { VerdictNeedKind } from "@/lib/lesson-review";

// The platform owner's two buttons in reviewer sign-off (plans/93 section 1). Both are owner-only on
// the server; these are rendered only for the owner so nobody meets a button that can only fail.

/**
 * "Applied as written": the owner edited the lesson to read exactly as the correction asked. The
 * server re-pins the verdict to the edited text, once. It is how a correction is acted on; there is
 * no reply to one.
 */
export function CorrectionAppliedButton({
  courseId,
  lessonId,
  needKind,
}: {
  courseId: string;
  lessonId: string;
  needKind: VerdictNeedKind;
}) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function apply() {
    setBusy(true);
    setError(null);
    const res = await fetch(`/api/courses/${courseId}/lessons/${lessonId}/review/applied`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ needKind }),
    }).catch(() => null);
    setBusy(false);
    if (!res?.ok) {
      const data = await res?.json().catch(() => ({}));
      setError(data?.error ?? "That could not be saved.");
      return;
    }
    router.refresh();
  }

  return (
    <span className="inline-flex flex-col">
      <button
        type="button"
        onClick={apply}
        disabled={busy}
        className="mt-2 min-h-11 self-start rounded-md border border-current px-3 py-1 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60"
      >
        {busy ? "Saving…" : "Applied as written"}
      </button>
      {error ? (
        <span role="alert" className="mt-1 text-sm">
          {error}
        </span>
      ) : null}
    </span>
  );
}

/** Clear the course's publish hold. The server re-checks readiness and refuses (409) if not ready. */
export function ReleaseReviewHoldButton({ courseId }: { courseId: string }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function release() {
    setBusy(true);
    setMessage(null);
    const res = await fetch(`/api/courses/${courseId}/release-review-hold`, { method: "POST" }).catch(() => null);
    const data = await res?.json().catch(() => ({}));
    setBusy(false);
    if (!res?.ok) {
      setMessage(data?.error ?? "The hold could not be released.");
      return;
    }
    setMessage(data?.released ? "Hold released. Vetting is still a separate step." : "There was no hold to release.");
    router.refresh();
  }

  return (
    <div className="mt-3">
      <button
        type="button"
        onClick={release}
        disabled={busy}
        className="min-h-11 rounded-md px-4 py-2 text-sm font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60"
        style={{ backgroundColor: "var(--accent)" }}
      >
        {busy ? "Releasing…" : "Release the review hold"}
      </button>
      <p role="status" className="mt-1 text-sm">
        {message ?? ""}
      </p>
    </div>
  );
}
