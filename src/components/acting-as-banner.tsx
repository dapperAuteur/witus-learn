"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";

// Shown across every page while a parent is "studying as" a managed child, so it's
// always obvious whose progress is being recorded right now — and always one click
// to get back to the parent's own account.
export function ActingAsBanner({ childName }: { childName: string }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  function switchBack() {
    startTransition(async () => {
      await fetch("/api/family/act-as", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ learnerId: null }),
      });
      router.refresh();
    });
  }

  return (
    <div
      role="status"
      className="flex items-center justify-center gap-3 border-b border-amber-300 bg-amber-50 px-4 py-2 text-sm text-amber-900 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-200"
    >
      <span>
        You&apos;re helping <strong>{childName}</strong>.
      </span>
      <button
        type="button"
        onClick={switchBack}
        disabled={pending}
        className="min-h-8 rounded-md border border-amber-400 px-2.5 py-1 font-medium underline-offset-2 hover:underline disabled:opacity-60 dark:border-amber-700"
      >
        {pending ? "Switching…" : "Switch back to you"}
      </button>
    </div>
  );
}
