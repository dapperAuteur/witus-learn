"use client";

import { useState } from "react";

// Create a white-label billing deal for a school (plans/51): pick the school, choose a recurring
// subscription (monthly/annual) or a one-time lifetime payment, set a custom amount, and get a Stripe
// Checkout link to send them. Posts to /api/admin/school-billing (owner-only).
export function SchoolBillingForm({ schools }: { schools: { tenantId: string; tenantName: string }[] }) {
  const [tenantId, setTenantId] = useState(schools[0]?.tenantId ?? "");
  const [billingType, setBillingType] = useState<"subscription" | "lifetime">("subscription");
  const [interval, setInterval] = useState<"month" | "year">("month");
  const [amount, setAmount] = useState("");
  const [link, setLink] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    setLink(null);
    const res = await fetch("/api/admin/school-billing", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        tenantId,
        billingType,
        interval: billingType === "subscription" ? interval : null,
        amountDollars: Number(amount),
      }),
    });
    const data = (await res.json().catch(() => ({}))) as { url?: string; error?: string };
    setBusy(false);
    if (!res.ok || !data.url) {
      setError(data.error ?? "Something went wrong.");
      return;
    }
    setLink(data.url);
  }

  const field = "min-h-11 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900 pointer-coarse:min-h-12";

  return (
    <form onSubmit={submit} className="mt-4 space-y-4 rounded-lg border border-neutral-200 p-5 dark:border-neutral-800">
      <div>
        <label htmlFor="sb-school" className="block text-sm font-medium">School</label>
        <select id="sb-school" value={tenantId} onChange={(e) => setTenantId(e.target.value)} className={field}>
          {schools.map((s) => (
            <option key={s.tenantId} value={s.tenantId}>{s.tenantName}</option>
          ))}
        </select>
      </div>

      <fieldset>
        <legend className="text-sm font-medium">Billing</legend>
        <div className="mt-1 flex flex-wrap gap-4 text-sm">
          <label className="inline-flex items-center gap-2">
            <input type="radio" name="sb-type" checked={billingType === "subscription"} onChange={() => setBillingType("subscription")} />
            Recurring subscription
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="radio" name="sb-type" checked={billingType === "lifetime"} onChange={() => setBillingType("lifetime")} />
            Lifetime (one-time)
          </label>
        </div>
      </fieldset>

      {billingType === "subscription" ? (
        <div>
          <label htmlFor="sb-interval" className="block text-sm font-medium">Interval</label>
          <select id="sb-interval" value={interval} onChange={(e) => setInterval(e.target.value as "month" | "year")} className={field}>
            <option value="month">Monthly</option>
            <option value="year">Yearly</option>
          </select>
        </div>
      ) : null}

      <div>
        <label htmlFor="sb-amount" className="block text-sm font-medium">
          Price (USD){billingType === "subscription" ? ` per ${interval}` : ", one time"}
        </label>
        <input
          id="sb-amount"
          type="number"
          min="1"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="e.g. 199"
          className={field}
          required
        />
      </div>

      <button
        type="submit"
        disabled={busy || !tenantId || !amount}
        className="min-h-11 rounded-md px-4 py-2 text-sm font-medium text-white disabled:opacity-50 pointer-coarse:min-h-12"
        style={{ backgroundColor: "var(--accent)" }}
      >
        {busy ? "Creating..." : "Create checkout link"}
      </button>

      {error ? <p className="text-sm text-red-600" role="alert">{error}</p> : null}
      {link ? (
        <div className="rounded-md border border-neutral-200 p-3 text-sm dark:border-neutral-800">
          <p className="font-medium">Send this checkout link to the school:</p>
          <a href={link} className="mt-1 block break-all underline" style={{ color: "var(--accent)" }}>
            {link}
          </a>
        </div>
      ) : null}
    </form>
  );
}
