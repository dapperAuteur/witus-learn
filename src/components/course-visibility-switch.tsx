"use client";

import { useRouter } from "next/navigation";
import { useId, useState } from "react";
import { MIN_OVERRIDE_REASON, type PublicReadiness } from "@/lib/course-visibility";

// The Make public / Make private switch (src/lib/course-visibility.ts). Rendered on /teach/[courseId]
// for the platform owner and this school's brand_admin (never on an owner-only course for the
// latter); the route re-checks the role and re-computes readiness from the stored rows, so what this
// panel shows is a preview, never the decision.
//
// Make public opens a confirmation that lists the readiness checks. When the course is not ready the
// confirm button stays disabled until the actor ticks the override and writes a reason, which is
// stored with the change along with their role. Make private takes the course down in one confirmed
// step.
export function CourseVisibilitySwitch({
  courseId,
  visibility,
  isPublished,
  ownerOnly = false,
  readiness,
}: {
  courseId: string;
  visibility: string;
  isPublished: boolean;
  /** courses.owner_only: closed to the school's admins, so the "who can open it" line says so. */
  ownerOnly?: boolean;
  readiness: PublicReadiness;
}) {
  const router = useRouter();
  const ids = useId();
  const [open, setOpen] = useState<null | "make-public" | "make-private">(null);
  const [override, setOverride] = useState(false);
  const [reason, setReason] = useState("");
  const [state, setState] = useState<"idle" | "saving" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const isLive = visibility === "public" && isPublished;
  const needsOverride = open === "make-public" && !readiness.ready;
  const canConfirm =
    open === "make-private" || !needsOverride || (override && reason.trim().length >= MIN_OVERRIDE_REASON);

  async function submit() {
    if (!open) return;
    setState("saving");
    setError(null);
    const r = await fetch(`/api/courses/${courseId}/visibility`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        action: open,
        ...(needsOverride ? { override: true } : {}),
        ...(reason.trim() ? { reason: reason.trim() } : {}),
      }),
    }).catch(() => null);
    if (!r?.ok) {
      const body = (await r?.json().catch(() => null)) as { error?: string } | null;
      setError(body?.error ?? "Could not change the visibility. Try again.");
      setState("error");
      return;
    }
    setState("idle");
    setOpen(null);
    setOverride(false);
    setReason("");
    router.refresh();
  }

  const check = (ok: boolean, label: string) => (
    <li className="flex gap-2">
      <span aria-hidden="true">{ok ? "✓" : "✗"}</span>
      <span className={ok ? "text-emerald-800 dark:text-emerald-300" : "text-red-800 dark:text-red-300"}>
        <span className="sr-only">{ok ? "Done: " : "Not done: "}</span>
        {label}
      </span>
    </li>
  );
  const m = readiness.markers;
  const hasMarkers = m.qrTotal + m.pTotal + m.openDecisions > 0;

  return (
    <section
      aria-labelledby={`${ids}-h`}
      className="rounded-lg border border-neutral-300 p-4 text-sm dark:border-neutral-700"
    >
      <h2 id={`${ids}-h`} className="font-semibold">
        Visibility
      </h2>
      <p className="mt-1 text-neutral-700 dark:text-neutral-300">
        {isLive
          ? "This course is public and published."
          : visibility === "private"
            ? ownerOnly
              ? "This course is private, unpublished and owner only: only the platform owner and its instructor can open it."
              : "This course is private and unpublished: only its instructor, this school's admins and the platform owner can open it."
            : `This course is ${visibility}${isPublished ? ", published" : ", unpublished"}.`}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {!isLive ? (
          <button
            type="button"
            onClick={() => setOpen("make-public")}
            className="inline-flex min-h-11 items-center rounded-md px-3 font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-12"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Make public…
          </button>
        ) : null}
        {visibility !== "private" || isPublished ? (
          <button
            type="button"
            onClick={() => setOpen("make-private")}
            className="inline-flex min-h-11 items-center rounded-md border border-neutral-400 px-3 font-medium focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-12 dark:border-neutral-600"
          >
            Make private…
          </button>
        ) : null}
      </div>

      {open ? (
        <div role="dialog" aria-labelledby={`${ids}-c`} className="mt-4 rounded-md border border-neutral-300 bg-neutral-50 p-3 dark:border-neutral-700 dark:bg-neutral-900">
          <p id={`${ids}-c`} className="font-semibold">
            {open === "make-public" ? "Make this course public?" : "Make this course private?"}
          </p>
          {open === "make-public" ? (
            <>
              <p className="mt-1">This publishes the course and sets it public in one step. Release readiness:</p>
              <ul className="mt-2 space-y-1">
                {check(readiness.vetted, readiness.vetted ? "Vetted" : "Not vetted yet")}
                {check(!readiness.held, readiness.held ? `On hold: ${readiness.holdReason}` : "No publish hold")}
                {hasMarkers
                  ? check(
                      readiness.markersCleared,
                      `Reviewer markers: ${m.qrCleared} of ${m.qrTotal} qualified-reviewer, ${m.pCleared} of ${m.pTotal} practitioner cleared, ${m.openDecisions} decision${m.openDecisions === 1 ? "" : "s"} open`,
                    )
                  : check(true, "No reviewer markers on this course")}
              </ul>
              {needsOverride ? (
                <div className="mt-3 space-y-2">
                  <label className="flex items-start gap-2">
                    <input type="checkbox" checked={override} onChange={(e) => setOverride(e.target.checked)} className="mt-1" />
                    <span>
                      Override: make it public anyway.
                      {readiness.held ? " This also clears the hold; its text is kept in the change record." : ""}
                    </span>
                  </label>
                  <label className="block">
                    <span className="font-medium">Reason (stored with the change, at least {MIN_OVERRIDE_REASON} characters)</span>
                    <textarea
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      rows={3}
                      maxLength={1000}
                      disabled={!override}
                      className="mt-1 w-full rounded-md border border-neutral-300 bg-white p-2 dark:border-neutral-700 dark:bg-neutral-950"
                    />
                  </label>
                </div>
              ) : null}
            </>
          ) : (
            <>
              <p className="mt-1">
                Learners lose access to the lessons and the course leaves the catalog. Enrolled learners keep their
                progress for when it reopens.
              </p>
              <label className="mt-2 block">
                <span className="font-medium">Reason (optional, stored with the change)</span>
                <textarea
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  rows={2}
                  maxLength={1000}
                  className="mt-1 w-full rounded-md border border-neutral-300 bg-white p-2 dark:border-neutral-700 dark:bg-neutral-950"
                />
              </label>
            </>
          )}
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => void submit()}
              disabled={!canConfirm || state === "saving"}
              className="inline-flex min-h-11 items-center rounded-md px-3 font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 pointer-coarse:min-h-12"
              style={{ backgroundColor: "var(--accent)" }}
            >
              {state === "saving" ? "Saving…" : open === "make-public" ? "Confirm: make public" : "Confirm: make private"}
            </button>
            <button
              type="button"
              onClick={() => {
                setOpen(null);
                setError(null);
                setOverride(false);
                setReason("");
              }}
              className="inline-flex min-h-11 items-center rounded-md border border-neutral-400 px-3 focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-12 dark:border-neutral-600"
            >
              Cancel
            </button>
          </div>
          {error ? (
            <p role="alert" className="mt-2 text-red-700 dark:text-red-400">
              {error}
            </p>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
