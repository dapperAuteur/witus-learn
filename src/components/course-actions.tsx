"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Enroll (free) + claim-certificate actions for the course page. The server
// re-validates everything; these just call the APIs and refresh.
export function CourseActions({
  courseId,
  enrolled,
  isFree,
  priceLabel,
  allComplete,
}: {
  courseId: string;
  enrolled: boolean;
  isFree: boolean;
  priceLabel: string;
  allComplete: boolean;
}) {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [verifyUrl, setVerifyUrl] = useState<string | null>(null);

  async function enroll() {
    setPending(true);
    const r = await fetch(`/api/courses/${courseId}/enroll`, { method: "POST" });
    const data = await r.json().catch(() => ({}) as { url?: string });
    if (data.url) {
      // Paid course → off to Stripe Checkout.
      window.location.href = data.url;
      return;
    }
    setPending(false);
    if (r.ok) router.refresh();
  }

  async function complete() {
    setPending(true);
    const r = await fetch(`/api/courses/${courseId}/complete`, { method: "POST" });
    setPending(false);
    if (r.ok) setVerifyUrl(`/verify/${(await r.json()).verificationToken}`);
  }

  return (
    <div className="mt-6 flex flex-wrap items-center gap-3">
      {!enrolled ? (
        <button
          type="button"
          onClick={enroll}
          disabled={pending}
          className="min-h-11 rounded-md px-4 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60"
          style={{ backgroundColor: "var(--accent)" }}
        >
          {pending ? "Working…" : isFree ? "Enroll for free" : `Buy — ${priceLabel}`}
        </button>
      ) : null}
      {enrolled ? (
        <span className="text-sm font-medium text-green-700 dark:text-green-400">✓ Enrolled</span>
      ) : null}
      {allComplete ? (
        <button
          type="button"
          onClick={complete}
          disabled={pending}
          className="min-h-11 rounded-md border border-current px-4 font-medium focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60"
          style={{ color: "var(--accent)" }}
        >
          {pending ? "Issuing…" : "Claim certificate"}
        </button>
      ) : null}
      {verifyUrl ? (
        <a href={verifyUrl} className="text-sm underline">
          View your certificate →
        </a>
      ) : null}
    </div>
  );
}
