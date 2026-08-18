"use client";

import { useId, useState } from "react";
import { describeSale, type SaleView } from "@/lib/sale-pricing";

export interface SaleTarget {
  id: string;
  title: string;
  kind: "course" | "bundle";
}

// "Sales and promotions": codeless price cuts, beside the promo-code panel on /admin/marketing.
// Every price is re-resolved on the server at checkout, so nothing here is trusted from the client.
// Mobile-first: the form is a single column at 360px and lays out in two columns from `sm:`.
export function SalesAdmin({
  initial,
  courses,
  bundles,
}: {
  initial: SaleView[];
  courses: SaleTarget[];
  bundles: SaleTarget[];
}) {
  const [sales, setSales] = useState<SaleView[]>(initial);
  const [name, setName] = useState("");
  const [scope, setScope] = useState<"tenant" | "course" | "bundle">("course");
  const [targetId, setTargetId] = useState("");
  const [kind, setKind] = useState<"percent" | "amount" | "free">("percent");
  const [value, setValue] = useState("20");
  const [startsAt, setStartsAt] = useState("");
  const [endsAt, setEndsAt] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  const ids = useId();
  const targets = scope === "course" ? courses : scope === "bundle" ? bundles : [];

  // A local datetime input has no zone; the server stores UTC. Converting through Date here means
  // "ends 9pm" means 9pm where the admin is, which is what they meant.
  const toIso = (local: string): string | null => {
    if (!local) return null;
    const d = new Date(local);
    return Number.isNaN(d.getTime()) ? null : d.toISOString();
  };

  async function create(e: React.FormEvent) {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setError(null);
    setStatus(null);
    const res = await fetch("/api/admin/sales", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: name.trim(),
        scope,
        targetId: scope === "tenant" ? null : targetId || null,
        kind,
        value: kind === "free" ? null : Number(value),
        startsAt: toIso(startsAt),
        endsAt: toIso(endsAt),
      }),
    });
    if (res.ok) {
      const { sale } = (await res.json()) as { sale: SaleView };
      const title = targets.find((t) => t.id === sale.targetId)?.title ?? null;
      setSales((s) => [{ ...sale, targetTitle: sale.targetTitle ?? title }, ...s]);
      setName("");
      setStatus(`"${sale.name}" saved. It is ${sale.status}.`);
    } else {
      const j = await res.json().catch(() => ({}));
      setError(j.error ?? "Could not create the sale.");
    }
    setBusy(false);
  }

  async function endNow(sale: SaleView) {
    setError(null);
    const res = await fetch(`/api/admin/sales/${sale.id}`, { method: "POST" });
    if (res.ok) {
      const { sale: updated } = (await res.json()) as { sale: SaleView };
      setSales((s) =>
        s.map((x) => (x.id === updated.id ? { ...updated, targetTitle: x.targetTitle } : x)),
      );
      setStatus(`"${sale.name}" has ended. Prices are back to normal.`);
    } else {
      setError("Could not end that sale.");
    }
  }

  const groups: { key: SaleView["status"]; label: string }[] = [
    { key: "active", label: "Running now" },
    { key: "scheduled", label: "Scheduled" },
    { key: "ended", label: "Ended" },
  ];

  const field =
    "mt-1 block min-h-11 w-full rounded-md border border-neutral-300 px-3 dark:border-neutral-700 dark:bg-neutral-900";

  return (
    <div className="space-y-6">
      <form
        onSubmit={create}
        className="rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900"
      >
        <h3 className="font-semibold">New sale</h3>
        <p className="mt-1 text-sm text-neutral-500">
          A price cut with <strong>no code to type</strong>: everyone sees the new price on the
          course or bundle page. Leave the end date empty to run it until you end it.
        </p>

        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <label className="text-sm font-medium" htmlFor={`${ids}-name`}>
            Name
            <input
              id={`${ids}-name`}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              minLength={2}
              maxLength={80}
              placeholder="Back to school"
              className={field}
            />
          </label>

          <label className="text-sm font-medium" htmlFor={`${ids}-scope`}>
            Applies to
            <select
              id={`${ids}-scope`}
              value={scope}
              onChange={(e) => {
                setScope(e.target.value as typeof scope);
                setTargetId("");
              }}
              className={field}
            >
              <option value="course">One course</option>
              <option value="bundle">One bundle</option>
              <option value="tenant">Everything in this school</option>
            </select>
          </label>

          {scope !== "tenant" ? (
            <label className="text-sm font-medium" htmlFor={`${ids}-target`}>
              {scope === "course" ? "Course" : "Bundle"}
              <select
                id={`${ids}-target`}
                value={targetId}
                onChange={(e) => setTargetId(e.target.value)}
                required
                className={field}
              >
                <option value="">Choose one…</option>
                {targets.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.title}
                  </option>
                ))}
              </select>
            </label>
          ) : null}

          <label className="text-sm font-medium" htmlFor={`${ids}-kind`}>
            Discount
            <select
              id={`${ids}-kind`}
              value={kind}
              onChange={(e) => setKind(e.target.value as typeof kind)}
              className={field}
            >
              <option value="percent">Percent off</option>
              <option value="amount">Dollars off</option>
              <option value="free">Free</option>
            </select>
          </label>

          {kind !== "free" ? (
            <label className="text-sm font-medium" htmlFor={`${ids}-value`}>
              {kind === "percent" ? "Percent (1 to 100)" : "Dollars off"}
              <input
                id={`${ids}-value`}
                type="number"
                min={kind === "percent" ? 1 : 0.01}
                max={kind === "percent" ? 100 : undefined}
                step={kind === "percent" ? 1 : 0.01}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required
                className={field}
              />
            </label>
          ) : null}

          <label className="text-sm font-medium" htmlFor={`${ids}-starts`}>
            Starts (optional)
            <input
              id={`${ids}-starts`}
              type="datetime-local"
              value={startsAt}
              onChange={(e) => setStartsAt(e.target.value)}
              className={field}
            />
          </label>

          <label className="text-sm font-medium" htmlFor={`${ids}-ends`}>
            Ends (optional, blank = until you end it)
            <input
              id={`${ids}-ends`}
              type="datetime-local"
              value={endsAt}
              onChange={(e) => setEndsAt(e.target.value)}
              className={field}
            />
          </label>
        </div>

        <button
          type="submit"
          disabled={busy || name.trim().length < 2 || (scope !== "tenant" && !targetId)}
          className="mt-4 min-h-11 rounded-md px-4 font-medium focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60"
          style={{ backgroundColor: "var(--accent)", color: "var(--accent-fg, #fff)" }}
        >
          {busy ? "Saving…" : "Start sale"}
        </button>

        <p aria-live="polite" className="mt-2 text-sm">
          {error ? <span className="text-red-700 dark:text-red-400">{error}</span> : null}
          {status && !error ? (
            <span className="text-emerald-700 dark:text-emerald-300">{status}</span>
          ) : null}
        </p>

        <p className="mt-1 text-xs text-neutral-500">
          A sale on one course beats a school-wide sale on the same course; otherwise the biggest
          discount wins. Sales never apply to subscriptions, and never make an already-free course
          cost anything. Promo codes still work alongside these.
        </p>
      </form>

      {groups.map((g) => {
        const rows = sales.filter((s) => s.status === g.key);
        if (rows.length === 0) return null;
        return (
          <div key={g.key}>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
              {g.label}
            </h3>
            <ul className="mt-2 space-y-2">
              {rows.map((s) => (
                <li
                  key={s.id}
                  className="flex flex-col gap-2 rounded-xl border border-neutral-200 px-4 py-3 sm:flex-row sm:items-center sm:justify-between dark:border-neutral-800"
                >
                  <div className="min-w-0">
                    <span className="font-semibold">{s.name}</span>
                    <span className="ml-2 text-sm text-neutral-500">
                      {describeSale(s.kind, s.value)} ·{" "}
                      {s.scope === "tenant"
                        ? "whole school"
                        : (s.targetTitle ?? (s.scope === "course" ? "one course" : "one bundle"))}
                      {s.startsAt ? ` · from ${new Date(s.startsAt).toLocaleString()}` : ""}
                      {s.endsAt
                        ? ` · until ${new Date(s.endsAt).toLocaleString()}`
                        : s.endedAt
                          ? ` · ended ${new Date(s.endedAt).toLocaleString()}`
                          : " · no end date"}
                    </span>
                  </div>
                  {s.status !== "ended" ? (
                    <button
                      type="button"
                      onClick={() => endNow(s)}
                      className="min-h-11 shrink-0 self-start rounded-md border border-neutral-300 px-3 text-sm font-medium hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 sm:self-auto dark:border-neutral-700 dark:hover:bg-neutral-800"
                    >
                      End now
                    </button>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        );
      })}

      {sales.length === 0 ? (
        <p className="text-sm text-neutral-500">No sales yet.</p>
      ) : null}
    </div>
  );
}
