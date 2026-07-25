"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Buy a bundle. Free bundle: enroll in every member course, then refresh. Paid bundle: off to Stripe
// Checkout. The server re-validates everything; this just calls the API. Mirrors CourseActions.
export function BundleBuyButton({
  slug,
  priceLabel,
  owned,
}: {
  slug: string;
  priceLabel: string;
  owned: boolean;
}) {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function buy() {
    setError(null);
    setPending(true);
    const r = await fetch(`/api/bundles/${slug}/buy`, { method: "POST" });
    const data = await r.json().catch(() => ({}) as { url?: string; error?: string });
    if (data.url) {
      window.location.href = data.url; // Stripe Checkout
      return;
    }
    setPending(false);
    if (r.ok) {
      router.refresh();
      return;
    }
    setError(data.error ?? "Could not complete the purchase.");
  }

  if (owned) {
    return <p className="mt-6 text-sm font-medium text-emerald-600">You already own every course in this bundle.</p>;
  }

  return (
    <div className="mt-6">
      <button
        type="button"
        onClick={buy}
        disabled={pending}
        className="inline-block min-h-11 rounded-md px-5 py-2.5 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 pointer-coarse:min-h-12"
        style={{ backgroundColor: "var(--accent)" }}
      >
        {pending ? "Working…" : `Get the bundle · ${priceLabel}`}
      </button>
      {error ? <p className="mt-2 text-sm text-red-600">{error}</p> : null}
    </div>
  );
}
