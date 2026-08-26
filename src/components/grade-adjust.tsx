"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// The teacher's grade-adjustment control (plans/66), one per gradebook row on the cohort report.
// Append-only on the server: saving writes a new override row; nothing is ever edited or deleted,
// and the student's real attempt stays visible underneath wherever they look. The reason field is
// required because a record nobody can interrogate is worse than none.
export function GradeAdjust({
  cohortId,
  studentUserId,
  courseId,
  courseTitle,
  currentBest,
}: {
  cohortId: string;
  studentUserId: string;
  courseId: string;
  courseTitle: string;
  currentBest: number | null;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [kind, setKind] = useState<"quiz_score" | "course_complete">("quiz_score");
  const [value, setValue] = useState("");
  const [reason, setReason] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function save(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    const r = await fetch(`/api/cohorts/${cohortId}/overrides`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        studentUserId,
        courseId,
        kind,
        value: kind === "quiz_score" ? Number(value) : undefined,
        reason: reason.trim(),
      }),
    }).catch(() => null);
    setSaving(false);
    if (!r?.ok) {
      const body = (await r?.json().catch(() => null)) as { error?: string } | null;
      setError(body?.error ?? "Could not save the adjustment. Try again.");
      return;
    }
    setOpen(false);
    setValue("");
    setReason("");
    router.refresh();
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex min-h-11 items-center text-xs underline print:hidden pointer-coarse:min-h-12"
        style={{ color: "var(--accent)" }}
      >
        Adjust
      </button>
    );
  }

  return (
    <form onSubmit={save} className="mt-1 w-64 rounded-lg border border-neutral-200 p-3 text-left text-xs print:hidden dark:border-neutral-700">
      <p className="font-medium">{courseTitle}</p>
      <label className="mt-2 flex min-h-11 items-center gap-2 pointer-coarse:min-h-12">
        <input type="radio" name={`kind-${courseId}-${studentUserId}`} checked={kind === "quiz_score"} onChange={() => setKind("quiz_score")} />
        Adjust quiz score {currentBest != null ? `(recorded best: ${currentBest})` : "(no attempt yet)"}
      </label>
      <label className="flex min-h-11 items-center gap-2 pointer-coarse:min-h-12">
        <input type="radio" name={`kind-${courseId}-${studentUserId}`} checked={kind === "course_complete"} onChange={() => setKind("course_complete")} />
        Mark course complete (display only, no certificate)
      </label>
      {kind === "quiz_score" ? (
        <div className="mt-1">
          <label htmlFor={`adj-value-${courseId}-${studentUserId}`} className="mr-2">
            Adjusted score
          </label>
          <input
            id={`adj-value-${courseId}-${studentUserId}`}
            type="number"
            min={0}
            max={100}
            required
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="min-h-9 w-20 rounded-md border border-neutral-300 px-2 dark:border-neutral-700 dark:bg-neutral-900"
          />
        </div>
      ) : null}
      <label htmlFor={`adj-reason-${courseId}-${studentUserId}`} className="mt-2 block font-medium">
        Reason (required, kept on record)
      </label>
      <textarea
        id={`adj-reason-${courseId}-${studentUserId}`}
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        required
        minLength={3}
        maxLength={2000}
        rows={2}
        placeholder="e.g. Retake authorized: fire alarm during the first attempt."
        className="mt-1 w-full rounded-md border border-neutral-300 px-2 py-1 dark:border-neutral-700 dark:bg-neutral-900"
      />
      <div className="mt-2 flex items-center gap-2">
        <button
          type="submit"
          disabled={saving || reason.trim().length < 3 || (kind === "quiz_score" && value === "")}
          className="inline-flex min-h-11 items-center rounded-md px-3 font-medium text-white disabled:opacity-60 pointer-coarse:min-h-12"
          style={{ backgroundColor: "var(--accent)" }}
        >
          {saving ? "Saving…" : "Save adjustment"}
        </button>
        <button type="button" onClick={() => setOpen(false)} className="inline-flex min-h-11 items-center underline pointer-coarse:min-h-12">
          Cancel
        </button>
      </div>
      {error ? (
        <p role="status" className="mt-1 text-red-600 dark:text-red-400">
          {error}
        </p>
      ) : null}
      <p className="mt-2 text-neutral-600">
        The student&rsquo;s recorded attempt is never changed; reports show your adjustment with
        your name and reason, and the student sees both values.
      </p>
    </form>
  );
}
