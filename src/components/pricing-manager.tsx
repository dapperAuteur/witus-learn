"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { PriceTier } from "@/lib/course-pricing";

export type PriceType = "free" | "one_time" | "subscription";

export interface PricingRow {
  courseId: string;
  slug: string | null;
  title: string;
  category: string;
  price: number;
  priceType: PriceType;
  billingInterval: "month" | "year" | null;
  proposedPrice: number;
  proposedTier: PriceTier;
}

const TIER_CLS: Record<PriceTier, string> = {
  free: "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300",
  foundation: "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300",
  core: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300",
  premium: "bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300",
  certification: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
};

const field =
  "min-h-11 rounded-md border border-neutral-300 px-2 py-1 text-sm dark:border-neutral-700 dark:bg-neutral-900 pointer-coarse:min-h-12";
const btn =
  "min-h-11 rounded-md px-3 py-1 text-sm font-medium disabled:opacity-50 pointer-coarse:min-h-12";

interface Draft {
  price: string;
  priceType: PriceType;
  interval: "month" | "year";
  // Last persisted values, for the dirty check and the "current" reference.
  savedPrice: string;
  savedType: PriceType;
  savedInterval: "month" | "year";
}

function toDraft(r: PricingRow): Draft {
  return {
    price: String(r.price),
    priceType: r.priceType,
    interval: r.billingInterval ?? "month",
    savedPrice: String(r.price),
    savedType: r.priceType,
    savedInterval: r.billingInterval ?? "month",
  };
}

function money(price: number, type: PriceType, interval: "month" | "year"): string {
  if (type === "free" || price === 0) return "Free";
  const amount = `$${price % 1 === 0 ? price.toFixed(0) : price.toFixed(2)}`;
  if (type === "subscription") return `${amount}/${interval === "year" ? "yr" : "mo"}`;
  return amount;
}

function isDirty(d: Draft): boolean {
  if (d.priceType !== d.savedType) return true;
  const price = d.priceType === "free" ? 0 : Number(d.price);
  if (price !== Number(d.savedPrice)) return true;
  if (d.priceType === "subscription" && d.interval !== d.savedInterval) return true;
  return false;
}

function invalidReason(d: Draft): string | null {
  if (d.priceType === "free") return null;
  const n = Number(d.price);
  if (!Number.isFinite(n) || n <= 0) return "Enter a price above 0.";
  return null;
}

interface WireUpdate {
  courseId: string;
  price: number;
  priceType: PriceType;
  subscriptionInterval: "month" | "year" | null;
}

// Owner-only interactive pricing table for /admin/pricing. Edit a course's price and type inline,
// apply the proposed price per row, or bulk-apply across selected rows. Every save clears the cached
// Stripe price server-side so the next checkout uses the new amount (see /api/admin/pricing).
export function PricingManager({ rows }: { rows: PricingRow[] }) {
  const router = useRouter();
  const [drafts, setDrafts] = useState<Record<string, Draft>>(() =>
    Object.fromEntries(rows.map((r) => [r.courseId, toDraft(r)])),
  );
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [busy, setBusy] = useState<Set<string>>(new Set());
  const [bulkBusy, setBulkBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [note, setNote] = useState<string | null>(null);

  // Bulk "set for all selected" controls.
  const [bulkType, setBulkType] = useState<PriceType>("one_time");
  const [bulkPrice, setBulkPrice] = useState("");
  const [bulkInterval, setBulkInterval] = useState<"month" | "year">("month");

  const proposedByCourse = useMemo(
    () => new Map(rows.map((r) => [r.courseId, r] as const)),
    [rows],
  );

  function patchDraft(courseId: string, patch: Partial<Draft>) {
    setDrafts((prev) => ({ ...prev, [courseId]: { ...prev[courseId], ...patch } }));
  }

  function toggle(courseId: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(courseId)) next.delete(courseId);
      else next.add(courseId);
      return next;
    });
  }

  const allSelected = rows.length > 0 && selected.size === rows.length;
  function toggleAll() {
    setSelected(allSelected ? new Set() : new Set(rows.map((r) => r.courseId)));
  }

  async function send(updates: WireUpdate[]): Promise<boolean> {
    setError(null);
    setNote(null);
    const res = await fetch("/api/admin/pricing", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ updates }),
    });
    const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
    if (!res.ok || !data.ok) {
      setError(data.error ?? "Could not save. Try again.");
      return false;
    }
    return true;
  }

  // Reflect a set of just-saved values into the drafts so "current" and the dirty state update
  // without waiting for the server refresh (which then reconciles).
  function commit(updates: WireUpdate[]) {
    setDrafts((prev) => {
      const next = { ...prev };
      for (const u of updates) {
        const price = String(u.price);
        const interval = u.subscriptionInterval ?? "month";
        next[u.courseId] = {
          price,
          priceType: u.priceType,
          interval,
          savedPrice: price,
          savedType: u.priceType,
          savedInterval: interval,
        };
      }
      return next;
    });
  }

  function draftToWire(courseId: string, d: Draft): WireUpdate {
    const price = d.priceType === "free" ? 0 : Number(d.price);
    return {
      courseId,
      price,
      priceType: d.priceType,
      subscriptionInterval: d.priceType === "subscription" ? d.interval : null,
    };
  }

  async function saveRow(courseId: string) {
    const d = drafts[courseId];
    if (invalidReason(d)) {
      setError(invalidReason(d));
      return;
    }
    const update = draftToWire(courseId, d);
    setBusy((p) => new Set(p).add(courseId));
    const ok = await send([update]);
    if (ok) {
      commit([update]);
      setNote(`Saved ${proposedByCourse.get(courseId)?.title ?? "course"}.`);
      router.refresh();
    }
    setBusy((p) => {
      const next = new Set(p);
      next.delete(courseId);
      return next;
    });
  }

  async function applyProposedRow(courseId: string) {
    const row = proposedByCourse.get(courseId);
    if (!row) return;
    const priceType: PriceType = row.proposedPrice === 0 ? "free" : "one_time";
    const update: WireUpdate = {
      courseId,
      price: row.proposedPrice,
      priceType,
      subscriptionInterval: null,
    };
    setBusy((p) => new Set(p).add(courseId));
    const ok = await send([update]);
    if (ok) {
      commit([update]);
      setNote(`Applied proposed price to ${row.title}.`);
      router.refresh();
    }
    setBusy((p) => {
      const next = new Set(p);
      next.delete(courseId);
      return next;
    });
  }

  async function bulkApplyProposed() {
    if (selected.size === 0) return;
    const updates: WireUpdate[] = [...selected].map((courseId) => {
      const row = proposedByCourse.get(courseId)!;
      return {
        courseId,
        price: row.proposedPrice,
        priceType: row.proposedPrice === 0 ? "free" : "one_time",
        subscriptionInterval: null,
      };
    });
    setBulkBusy(true);
    const ok = await send(updates);
    if (ok) {
      commit(updates);
      setNote(`Applied the proposed price to ${updates.length} course${updates.length === 1 ? "" : "s"}.`);
      setSelected(new Set());
      router.refresh();
    }
    setBulkBusy(false);
  }

  async function bulkSet() {
    if (selected.size === 0) return;
    const price = bulkType === "free" ? 0 : Number(bulkPrice);
    if (bulkType !== "free" && (!Number.isFinite(price) || price <= 0)) {
      setError("Enter a price above 0 for the bulk change.");
      return;
    }
    const updates: WireUpdate[] = [...selected].map((courseId) => ({
      courseId,
      price,
      priceType: bulkType,
      subscriptionInterval: bulkType === "subscription" ? bulkInterval : null,
    }));
    setBulkBusy(true);
    const ok = await send(updates);
    if (ok) {
      commit(updates);
      setNote(`Set ${updates.length} course${updates.length === 1 ? "" : "s"} to ${money(price, bulkType, bulkInterval)}.`);
      setSelected(new Set());
      router.refresh();
    }
    setBulkBusy(false);
  }

  return (
    <div>
      {error ? (
        <p role="alert" className="mb-3 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700 dark:bg-red-950/40 dark:text-red-300">
          {error}
        </p>
      ) : null}
      {note ? (
        <p role="status" className="mb-3 rounded-md bg-emerald-50 px-3 py-2 text-sm text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
          {note}
        </p>
      ) : null}

      {selected.size > 0 ? (
        <div className="mb-4 rounded-lg border-2 p-4" style={{ borderColor: "var(--accent)" }}>
          <p className="text-sm font-semibold">
            {selected.size} selected
          </p>
          <div className="mt-3 flex flex-wrap items-end gap-3">
            <button
              type="button"
              onClick={bulkApplyProposed}
              disabled={bulkBusy}
              className={`${btn} text-white`}
              style={{ backgroundColor: "var(--accent)" }}
            >
              {bulkBusy ? "Working..." : "Apply proposed price to selected"}
            </button>

            <span className="text-sm text-neutral-500">or set them all to:</span>

            <div>
              <label htmlFor="bulk-type" className="block text-xs font-medium text-neutral-500">
                Type
              </label>
              <select
                id="bulk-type"
                value={bulkType}
                onChange={(e) => setBulkType(e.target.value as PriceType)}
                className={`${field} w-full`}
              >
                <option value="free">Free</option>
                <option value="one_time">One-time</option>
                <option value="subscription">Subscription</option>
              </select>
            </div>

            {bulkType !== "free" ? (
              <div>
                <label htmlFor="bulk-price" className="block text-xs font-medium text-neutral-500">
                  Price (USD)
                </label>
                <input
                  id="bulk-price"
                  type="number"
                  min="1"
                  step="0.01"
                  value={bulkPrice}
                  onChange={(e) => setBulkPrice(e.target.value)}
                  placeholder="e.g. 19"
                  className={`${field} w-28`}
                />
              </div>
            ) : null}

            {bulkType === "subscription" ? (
              <div>
                <label htmlFor="bulk-interval" className="block text-xs font-medium text-neutral-500">
                  Interval
                </label>
                <select
                  id="bulk-interval"
                  value={bulkInterval}
                  onChange={(e) => setBulkInterval(e.target.value as "month" | "year")}
                  className={`${field} w-full`}
                >
                  <option value="month">Monthly</option>
                  <option value="year">Yearly</option>
                </select>
              </div>
            ) : null}

            <button
              type="button"
              onClick={bulkSet}
              disabled={bulkBusy}
              className={`${btn} border border-neutral-300 dark:border-neutral-700`}
            >
              {bulkBusy ? "Working..." : "Apply to selected"}
            </button>
          </div>
        </div>
      ) : null}

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-neutral-300 text-left dark:border-neutral-700">
              <th className="py-2 pr-2 font-semibold">
                <label className="flex min-h-11 min-w-11 items-center justify-center pointer-coarse:min-h-12">
                  <span className="sr-only">Select all courses</span>
                  <input
                    type="checkbox"
                    checked={allSelected}
                    onChange={toggleAll}
                    className="h-5 w-5"
                  />
                </label>
              </th>
              <th className="py-2 pr-3 font-semibold">Course</th>
              <th className="py-2 pr-3 font-semibold">Category</th>
              <th className="py-2 pr-3 font-semibold">Price</th>
              <th className="py-2 pr-3 font-semibold">Proposed</th>
              <th className="py-2 pr-3 font-semibold">Save</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => {
              const d = drafts[r.courseId];
              const rowBusy = busy.has(r.courseId);
              const dirty = isDirty(d);
              const bad = invalidReason(d);
              const proposedType: PriceType = r.proposedPrice === 0 ? "free" : "one_time";
              const proposedMatches =
                d.savedType === proposedType && Number(d.savedPrice) === r.proposedPrice;
              return (
                <tr
                  key={r.courseId}
                  className="border-b border-neutral-200 align-top dark:border-neutral-800"
                >
                  <td className="py-2 pr-2">
                    <label className="flex min-h-11 min-w-11 items-center justify-center pointer-coarse:min-h-12">
                      <span className="sr-only">Select {r.title}</span>
                      <input
                        type="checkbox"
                        checked={selected.has(r.courseId)}
                        onChange={() => toggle(r.courseId)}
                        className="h-5 w-5"
                      />
                    </label>
                  </td>

                  <td className="py-2 pr-3">
                    <Link
                      href={`/teach/${r.courseId}`}
                      className="font-medium underline decoration-neutral-300 underline-offset-2 hover:decoration-current"
                    >
                      {r.title}
                    </Link>
                    <div className="text-xs text-neutral-500">
                      now {money(Number(d.savedPrice), d.savedType, d.savedInterval)}
                    </div>
                  </td>

                  <td className="py-2 pr-3 whitespace-nowrap text-neutral-500">{r.category}</td>

                  <td className="py-2 pr-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <label className="sr-only" htmlFor={`price-${r.courseId}`}>
                        Price for {r.title}
                      </label>
                      <input
                        id={`price-${r.courseId}`}
                        type="number"
                        min="0"
                        step="0.01"
                        value={d.priceType === "free" ? "0" : d.price}
                        disabled={d.priceType === "free"}
                        onChange={(e) => patchDraft(r.courseId, { price: e.target.value })}
                        className={`${field} w-24 disabled:opacity-50`}
                      />
                      <label className="sr-only" htmlFor={`type-${r.courseId}`}>
                        Price type for {r.title}
                      </label>
                      <select
                        id={`type-${r.courseId}`}
                        value={d.priceType}
                        onChange={(e) => patchDraft(r.courseId, { priceType: e.target.value as PriceType })}
                        className={field}
                      >
                        <option value="free">Free</option>
                        <option value="one_time">One-time</option>
                        <option value="subscription">Subscription</option>
                      </select>
                      {d.priceType === "subscription" ? (
                        <>
                          <label className="sr-only" htmlFor={`interval-${r.courseId}`}>
                            Billing interval for {r.title}
                          </label>
                          <select
                            id={`interval-${r.courseId}`}
                            value={d.interval}
                            onChange={(e) =>
                              patchDraft(r.courseId, { interval: e.target.value as "month" | "year" })
                            }
                            className={field}
                          >
                            <option value="month">Monthly</option>
                            <option value="year">Yearly</option>
                          </select>
                        </>
                      ) : null}
                    </div>
                    {bad ? <p className="mt-1 text-xs text-red-600">{bad}</p> : null}
                  </td>

                  <td className="py-2 pr-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${TIER_CLS[r.proposedTier]}`}
                      >
                        {r.proposedPrice === 0 ? "Free" : `$${r.proposedPrice}`}
                      </span>
                      {proposedMatches ? (
                        <span className="text-xs text-neutral-400">applied</span>
                      ) : (
                        <button
                          type="button"
                          onClick={() => applyProposedRow(r.courseId)}
                          disabled={rowBusy}
                          className={`${btn} border border-neutral-300 dark:border-neutral-700`}
                        >
                          {rowBusy ? "..." : "Apply proposed"}
                        </button>
                      )}
                    </div>
                  </td>

                  <td className="py-2 pr-3">
                    <button
                      type="button"
                      onClick={() => saveRow(r.courseId)}
                      disabled={rowBusy || !dirty || Boolean(bad)}
                      className={`${btn} text-white`}
                      style={{ backgroundColor: "var(--accent)" }}
                    >
                      {rowBusy ? "Saving..." : "Save"}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
