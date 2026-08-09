"use client";

import { useEffect, useRef } from "react";
import { priceChangeHeadline, type PriceChangeAssessment, type PriceWarningLevel } from "@/lib/price-change";

/** One course's proposed change, as both write paths return it on a 409 and as both UIs build it locally. */
export interface PriceChangeItem extends PriceChangeAssessment {
  courseId: string;
  title: string;
}

const LEVEL_CLS: Record<PriceWarningLevel, string> = {
  critical:
    "border-red-400 bg-red-50 text-red-900 dark:border-red-700 dark:bg-red-950/40 dark:text-red-200",
  warning:
    "border-amber-400 bg-amber-50 text-amber-900 dark:border-amber-600 dark:bg-amber-950/40 dark:text-amber-200",
  info: "border-neutral-300 bg-neutral-50 text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900/50 dark:text-neutral-300",
};

const LEVEL_LABEL: Record<PriceWarningLevel, string> = {
  critical: "Critical",
  warning: "Warning",
  info: "Note",
};

/**
 * The deliberate confirm step in front of a material price change, shared by /admin/pricing and the
 * per-course settings form so both say the same true things. Every sentence comes from
 * src/lib/price-change.ts, which derives them from what the code actually does.
 *
 * It renders inline rather than as a modal: on a 360px phone a modal over a long table is worse than
 * a panel you can scroll, and focus is moved here on open so it is not missed either way.
 */
export function PriceChangeConfirm({
  changes,
  busy = false,
  confirmLabel = "Yes, change the price",
  onConfirm,
  onCancel,
}: {
  changes: PriceChangeItem[];
  busy?: boolean;
  confirmLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    panel.current?.focus();
  }, []);

  if (changes.length === 0) return null;
  const many = changes.length > 1;

  return (
    <div
      ref={panel}
      tabIndex={-1}
      role="group"
      aria-labelledby="price-change-confirm-heading"
      className="mb-4 rounded-lg border-2 border-red-500 bg-white p-4 focus-visible:outline-2 focus-visible:outline-offset-2 dark:bg-neutral-950"
    >
      <h3 id="price-change-confirm-heading" className="text-base font-bold">
        {many
          ? `Confirm ${changes.length} price changes`
          : `Confirm this price change: ${changes[0].summary}`}
      </h3>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
        Read what this does before you save. Nothing has changed yet.
      </p>

      <ul className="mt-3 space-y-4">
        {changes.map((c) => (
          <li key={c.courseId} className="rounded-md border border-neutral-200 p-3 dark:border-neutral-800">
            <p className="font-semibold">{c.title}</p>
            <p className="mt-0.5 text-sm">
              <span className="text-neutral-500">{c.fromLabel}</span>
              <span aria-hidden="true"> &rarr; </span>
              <span className="sr-only"> changes to </span>
              <strong>{c.toLabel}</strong>
            </p>
            <p className="mt-1 text-sm font-medium">{priceChangeHeadline(c)}</p>
            {c.enrollmentCount !== null ? (
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                Currently enrolled: <strong className="tabular-nums">{c.enrollmentCount}</strong>
              </p>
            ) : null}
            <ul className="mt-2 space-y-2">
              {c.warnings.map((w) => (
                <li key={w.code} className={`rounded-md border px-3 py-2 text-sm ${LEVEL_CLS[w.level]}`}>
                  <span className="font-semibold">{LEVEL_LABEL[w.level]}: </span>
                  {w.message}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <button
          type="button"
          onClick={onConfirm}
          disabled={busy}
          className="min-h-11 rounded-md bg-red-600 px-4 font-medium text-white hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 pointer-coarse:min-h-12"
        >
          {busy ? "Saving..." : confirmLabel}
        </button>
        <button
          type="button"
          onClick={onCancel}
          disabled={busy}
          className="min-h-11 rounded-md border border-neutral-300 px-4 font-medium focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 dark:border-neutral-700 pointer-coarse:min-h-12"
        >
          Cancel, keep the current price
        </button>
      </div>
    </div>
  );
}
