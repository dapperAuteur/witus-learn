"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

/**
 * What a price change does to someone who enrolls TODAY. Every sentence is what the code does, not a
 * policy we would like to have:
 *
 * - Free and one-time: src/lib/gating.ts only applies the paywall to a viewer who is NOT enrolled, and
 *   no price-change path touches the enrollments table, so an active enrollment survives any later
 *   price change. The one thing that cancels an enrollment is the Stripe webhook on
 *   customer.subscription.deleted (src/app/api/stripe/webhook/route.ts), which matches by Stripe
 *   subscription id and so can never match a free or one-time enrollment.
 * - Subscription: that webhook CAN match, so access is not permanent and this copy does not say it is.
 *   What it does say (the amount does not change under you) holds because nothing in this app calls
 *   the Stripe subscription API, so an existing subscription keeps the price it was created with.
 *
 * If any of that changes, change this copy in the same commit. A false reassurance about access is
 * worse than no copy at all.
 */
function accessNote(isFree: boolean, priceType: "free" | "one_time" | "subscription"): string {
  if (isFree) {
    return "Enroll now and this course stays open to you, free, even if its price changes later.";
  }
  if (priceType === "subscription") {
    return "Your access runs for as long as your subscription is active, and if this course's price changes later your subscription keeps the amount you signed up at.";
  }
  return "What you buy today stays yours: if this course's price changes later, your access does not change.";
}

// Enroll (free) + claim-certificate actions for the course page. The server
// re-validates everything; these just call the APIs and refresh.
export function CourseActions({
  courseId,
  enrolled,
  isFree,
  priceType,
  priceLabel,
  allComplete,
}: {
  courseId: string;
  enrolled: boolean;
  isFree: boolean;
  /** Drives the access disclosure, because a subscription is the one kind that can be revoked. */
  priceType: "free" | "one_time" | "subscription";
  priceLabel: string;
  allComplete: boolean;
}) {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [verifyUrl, setVerifyUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function enroll() {
    setError(null);
    setPending(true);
    const r = await fetch(`/api/courses/${courseId}/enroll`, { method: "POST" });
    const data = await r
      .json()
      .catch(() => ({}) as { url?: string; error?: string; unmet?: { title: string }[] });
    if (data.url) {
      // Paid course → off to Stripe Checkout.
      window.location.href = data.url;
      return;
    }
    setPending(false);
    if (r.ok) {
      router.refresh();
      return;
    }
    const unmet = Array.isArray(data.unmet)
      ? data.unmet.map((u: { title: string }) => u.title).join(", ")
      : "";
    setError((data.error ?? "Could not enroll.") + (unmet ? ` (${unmet})` : ""));
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
          {pending ? "Working…" : isFree ? "Enroll for free" : `Buy, ${priceLabel}`}
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
      {/* Said where the decision is made, and only to someone who has not enrolled yet. */}
      {!enrolled ? (
        <p className="w-full text-sm text-neutral-600 dark:text-neutral-400">
          {accessNote(isFree, priceType)}
        </p>
      ) : null}
      {error ? (
        <p role="alert" className="w-full text-sm text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}
