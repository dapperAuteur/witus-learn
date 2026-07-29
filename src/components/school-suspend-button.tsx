"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Suspend or reactivate a white-label school (plans/51). Posts to /api/admin/school-billing/suspend
// (owner-only) and refreshes the page so the row's status updates. Suspending takes the school offline
// and marks its billing canceled; reactivating brings it back. Idempotent on the server, so a stray
// double-click is harmless.
export function SchoolSuspendButton({ tenantId, isActive }: { tenantId: string; isActive: boolean }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const action = isActive ? "suspend" : "reactivate";

  async function run() {
    setBusy(true);
    setError(null);
    const res = await fetch("/api/admin/school-billing/suspend", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tenantId, action }),
    });
    if (!res.ok) {
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      setBusy(false);
      setError(data.error ?? "Something went wrong.");
      return;
    }
    // Keep busy while the refresh repaints, so the label does not flash the old action.
    router.refresh();
    setBusy(false);
  }

  return (
    <div className="flex flex-col items-start gap-1">
      <button
        type="button"
        onClick={run}
        disabled={busy}
        aria-label={`${isActive ? "Suspend" : "Reactivate"} school`}
        className="min-h-9 rounded-md border border-neutral-300 px-3 py-1 text-xs font-medium disabled:opacity-50 dark:border-neutral-700 pointer-coarse:min-h-11"
      >
        {busy ? "Working..." : isActive ? "Suspend" : "Reactivate"}
      </button>
      {error ? (
        <span className="text-xs text-red-600" role="alert">
          {error}
        </span>
      ) : null}
    </div>
  );
}
