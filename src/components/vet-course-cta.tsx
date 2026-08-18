"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

// "This course still needs vetting" — the call to action, shown wherever the platform OWNER meets
// an unvetted course (BAM 2026-08-18: he was finding unvetted courses with no way to act on them
// from where he stood). Vetting is owner-only server-side; this component is only rendered for the
// owner, and the PATCH strips the field for anyone else regardless.
//
// The button marks the course vetted in place, because the alternative (navigate to /teach, find
// the row, tick it, bulk-act) is exactly the friction that let the review queue sit. `variant`
// picks the two contexts: "page" is the wide banner on the course itself, "inline" sits inside an
// existing banner that already explains the Coming-soon state.
export function VetCourseCta({
  courseId,
  courseTitle,
  variant = "page",
}: {
  courseId: string;
  courseTitle?: string;
  variant?: "page" | "inline";
}) {
  const router = useRouter();
  const [state, setState] = useState<"idle" | "saving" | "done" | "error">("idle");

  async function markVetted() {
    setState("saving");
    const r = await fetch(`/api/courses/${courseId}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ vetted: true }),
    }).catch(() => null);
    if (!r?.ok) {
      setState("error");
      return;
    }
    setState("done");
    router.refresh();
  }

  const button = (
    <button
      type="button"
      onClick={markVetted}
      disabled={state === "saving" || state === "done"}
      className="inline-flex min-h-11 items-center justify-center rounded-md px-3 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 pointer-coarse:min-h-12"
      style={{ backgroundColor: "var(--accent)" }}
    >
      {state === "saving" ? "Marking…" : state === "done" ? "Marked vetted ✓" : "Mark this course vetted"}
    </button>
  );

  const status =
    state === "error" ? (
      <span role="status" className="text-sm text-red-700 dark:text-red-400">
        Could not mark it vetted. Try again, or use /teach.
      </span>
    ) : state === "done" ? (
      <span role="status" className="text-sm text-emerald-700 dark:text-emerald-400">
        Learners can now open the lessons.
      </span>
    ) : null;

  if (variant === "inline") {
    return (
      <div className="mt-3 flex flex-wrap items-center gap-3">
        {button}
        {status}
      </div>
    );
  }

  return (
    <aside
      aria-label="This course needs vetting"
      className="mt-4 rounded-lg border border-amber-300 bg-amber-50 p-4 dark:border-amber-900/60 dark:bg-amber-950/30"
    >
      <p className="font-semibold text-amber-900 dark:text-amber-200">
        <span aria-hidden="true">🕒</span> Needs your review before learners can take it
      </p>
      <p className="mt-1 text-sm text-amber-900/90 dark:text-amber-200/90">
        {courseTitle ? `"${courseTitle}"` : "This course"} is published but not vetted, so everyone
        except you and people already enrolled sees the Coming soon page instead of the lessons.
        Vetting is your confirmation that you reviewed it against its sources.
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        {button}
        <Link
          href="/teach?status=unvetted"
          className="inline-flex min-h-11 items-center text-sm underline pointer-coarse:min-h-12"
          style={{ color: "var(--accent)" }}
        >
          See every course awaiting review
        </Link>
        {status}
      </div>
    </aside>
  );
}
