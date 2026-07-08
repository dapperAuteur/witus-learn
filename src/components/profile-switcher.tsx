"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";

export interface ManagedChildOption {
  userId: string;
  displayName: string;
}

// "Studying as" switcher — shown only for a parent with ≥1 managed child (Family Model B).
// A plain <select> keeps it small and fully accessible; switching POSTs the target learner
// id to /api/family/act-as (which re-verifies isManagedChildOf server-side before setting
// the cookie) and refreshes the page so every server-rendered read picks up the new
// active learner.
export function ProfileSwitcher({
  currentId,
  managedChildren,
}: {
  /** The currently active learner's user id, or null when "studying as" self. */
  currentId: string | null;
  managedChildren: ManagedChildOption[];
}) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  function switchTo(learnerId: string | null) {
    startTransition(async () => {
      await fetch("/api/family/act-as", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ learnerId }),
      });
      router.refresh();
    });
  }

  return (
    <label className="flex items-center gap-1.5 text-sm">
      <span className="hidden text-neutral-500 sm:inline">Studying as</span>
      <select
        value={currentId ?? ""}
        disabled={pending}
        onChange={(e) => switchTo(e.target.value || null)}
        className="min-h-9 rounded-md border border-neutral-300 bg-transparent px-2 py-1 text-sm disabled:opacity-60 dark:border-neutral-700"
        aria-label="Studying as"
      >
        <option value="">Me</option>
        {managedChildren.map((c) => (
          <option key={c.userId} value={c.userId}>
            {c.displayName}
          </option>
        ))}
      </select>
    </label>
  );
}
