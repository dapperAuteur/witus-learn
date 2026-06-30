"use client";

import { useState } from "react";

export interface PromoView {
  code: string;
  discountPercent: number;
  courseId: string | null;
  maxUses: number | null;
  expiresAt: string | null;
}

// Promo-code management (brand-wide unless a code was scoped to a course). Internal
// only — no email is sent from here. Email campaigns are a separate, confirmed step.
export function MarketingAdmin({ initial }: { initial: PromoView[] }) {
  const [promos, setPromos] = useState<PromoView[]>(initial);
  const [code, setCode] = useState("");
  const [discount, setDiscount] = useState(20);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function create(e: React.FormEvent) {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setError(null);
    const res = await fetch("/api/admin/promo-codes", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ code: code.trim().toUpperCase(), discountPercent: discount }),
    });
    if (res.ok) {
      const { promoCode } = await res.json();
      setPromos((p) => [{ ...promoCode, expiresAt: promoCode.expiresAt ?? null }, ...p]);
      setCode("");
    } else {
      const j = await res.json().catch(() => ({}));
      setError(j.error ?? "Could not create code.");
    }
    setBusy(false);
  }

  async function remove(c: string) {
    await fetch("/api/admin/promo-codes", {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ code: c }),
    });
    setPromos((p) => p.filter((x) => x.code !== c));
  }

  return (
    <div className="space-y-6">
      <form onSubmit={create} className="rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900">
        <h2 className="font-semibold">New promo code</h2>
        <div className="mt-3 flex flex-wrap items-end gap-3">
          <label className="text-sm font-medium">
            Code
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
              maxLength={40}
              placeholder="LAUNCH20"
              className="mt-1 block min-h-11 rounded-md border border-neutral-300 px-3 uppercase dark:border-neutral-700 dark:bg-neutral-900"
            />
          </label>
          <label className="text-sm font-medium">
            Discount %
            <input
              type="number"
              min={1}
              max={100}
              value={discount}
              onChange={(e) => setDiscount(Number(e.target.value))}
              className="mt-1 block min-h-11 w-24 rounded-md border border-neutral-300 px-3 dark:border-neutral-700 dark:bg-neutral-900"
            />
          </label>
          <button type="submit" disabled={busy || code.trim().length < 2} className="min-h-11 rounded-md px-4 font-medium disabled:opacity-60" style={{ backgroundColor: "var(--accent)", color: "var(--accent-fg, #fff)" }}>
            {busy ? "Creating…" : "Create"}
          </button>
        </div>
        <p className="mt-2 text-xs text-neutral-500">Brand-wide, applies to all this school&apos;s courses. Mirrors a Stripe coupon when Stripe is configured.</p>
        {error ? <p className="mt-2 text-sm text-red-600">{error}</p> : null}
      </form>

      <div>
        <h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-400">Active codes</h2>
        {promos.length === 0 ? (
          <p className="mt-2 text-sm text-neutral-500">No promo codes yet.</p>
        ) : (
          <ul className="mt-2 space-y-2">
            {promos.map((p) => (
              <li key={p.code} className="flex items-center justify-between gap-3 rounded-xl border border-neutral-200 px-4 py-3 dark:border-neutral-800">
                <div>
                  <span className="font-mono font-semibold">{p.code}</span>
                  <span className="ml-3 text-sm text-neutral-500">
                    {p.discountPercent}% off · {p.courseId ? "one course" : "brand-wide"}
                    {p.maxUses ? ` · max ${p.maxUses}` : ""}
                    {p.expiresAt ? ` · expires ${new Date(p.expiresAt).toLocaleDateString()}` : ""}
                  </span>
                </div>
                <button type="button" onClick={() => remove(p.code)} className="text-sm text-red-600 hover:underline">
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
