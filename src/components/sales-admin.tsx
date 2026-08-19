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
  const [slug, setSlug] = useState("");
  const [scope, setScope] = useState<"tenant" | "course" | "bundle" | "courses">("course");
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
        // A slug is what gives a sale its public page at /sale/<slug>. Blank means no page, which
        // is right for a one-off discount that is a price rather than a campaign.
        slug: slug.trim() || null,
        scope,
        targetId: scope === "tenant" || scope === "courses" ? null : targetId || null,
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
      setSlug("");
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

  // Membership of a campaign. Optimistic on success only: the list is re-set from what we sent
  // rather than from a refetch, because the server returns ok and the client already knows the id.
  async function setMembership(sale: SaleView, courseId: string, add: boolean) {
    setError(null);
    const res = await fetch(`/api/admin/sales/${sale.id}/items`, {
      method: add ? "POST" : "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ kind: "course", id: courseId }),
    });
    if (!res.ok) {
      setError(add ? "Could not add that course." : "Could not remove that course.");
      return;
    }
    setSales((list) =>
      list.map((x) =>
        x.id === sale.id
          ? {
              ...x,
              courseIds: add
                ? [...x.courseIds, courseId]
                : x.courseIds.filter((c) => c !== courseId),
            }
          : x,
      ),
    );
    const title = courses.find((c) => c.id === courseId)?.title ?? "That course";
    setStatus(add ? `${title} added to "${sale.name}".` : `${title} removed from "${sale.name}".`);
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

          <label className="text-sm font-medium" htmlFor={`${ids}-slug`}>
            Public page address <span className="font-normal text-neutral-500">(optional)</span>
            <input
              id={`${ids}-slug`}
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              pattern="[a-z0-9]+(?:-[a-z0-9]+)*"
              maxLength={60}
              placeholder="back-to-school"
              className={field}
            />
            <span className="mt-1 block text-xs font-normal text-neutral-500">
              Leave blank for no page. With a slug the sale gets a shareable page at{" "}
              <code>/sale/{slug || "your-slug"}</code> and is listed on <code>/sale</code>.
            </span>
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
              <option value="courses">A campaign (add courses over time)</option>
              <option value="tenant">Everything in this school</option>
            </select>
          </label>

          {scope === "courses" ? (
            <p className="text-sm text-neutral-600 sm:col-span-2 dark:text-neutral-400">
              A campaign starts empty and you add courses to it as they are vetted, below. Ending it
              applies to every course in it at once, and taking one course out leaves the rest
              exactly as they were.
            </p>
          ) : null}

          {scope === "tenant" ? (
            <p className="text-sm text-neutral-600 sm:col-span-2 dark:text-neutral-400">
              Covers every course and bundle. Once created you can name exceptions below, to hold
              individual items out of the sale without affecting anything else.
            </p>
          ) : null}

          {scope === "course" || scope === "bundle" ? (
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
          disabled={
            busy ||
            name.trim().length < 2 ||
            ((scope === "course" || scope === "bundle") && !targetId)
          }
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
                  className="rounded-xl border border-neutral-200 px-4 py-3 dark:border-neutral-800"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <span className="font-semibold">{s.name}</span>
                    <span className="ml-2 text-sm text-neutral-500">
                      {describeSale(s.kind, s.value)} ·{" "}
                      {s.scope === "courses"
                        ? `campaign, ${s.courseIds?.length ?? 0} course${(s.courseIds?.length ?? 0) === 1 ? "" : "s"}`
                        : s.scope === "tenant"
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
                  </div>

                  {/* The sale's named courses. Live sales only: adding a course to an ended sale
                      would change nothing while reading as though it might.

                      The SAME control serves two opposite meanings, which is why the labels below
                      are computed from the scope rather than hard-coded. On a campaign a named
                      course is a member and is on sale; on a school-wide sale a named course is an
                      exception and is held OUT of it. Removing either touches one row and leaves
                      every other course priced exactly as it was. */}
                  {(s.scope === "courses" || s.scope === "tenant") && s.status !== "ended" ? (
                    <div className="mt-3 border-t border-neutral-200 pt-3 dark:border-neutral-800">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-400">
                        {s.scope === "courses" ? "In this sale" : "Excluded from this sale"}
                      </p>
                      {s.courseIds.length > 0 ? (
                        <ul className="flex flex-wrap gap-2">
                          {s.courseIds.map((cid) => (
                            <li
                              key={cid}
                              className="flex items-center gap-1 rounded-full border border-neutral-300 py-1 pl-3 pr-1 text-sm dark:border-neutral-700"
                            >
                              {courses.find((c) => c.id === cid)?.title ?? "Course"}
                              <button
                                type="button"
                                onClick={() => setMembership(s, cid, false)}
                                aria-label={
                                  s.scope === "courses"
                                    ? `Remove ${courses.find((c) => c.id === cid)?.title ?? "course"} from ${s.name}`
                                    : `Put ${courses.find((c) => c.id === cid)?.title ?? "course"} back into ${s.name}`
                                }
                                className="min-h-11 rounded-full px-2 text-neutral-500 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:text-neutral-100"
                              >
                                &times;
                              </button>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-neutral-500">
                          {s.scope === "courses"
                            ? "No courses in this campaign yet. Add them as they are vetted."
                            : "No exceptions. This sale currently covers every course."}
                        </p>
                      )}

                      <label className="mt-2 block text-sm font-medium">
                        {s.scope === "courses" ? "Add a course to this sale" : "Hold a course out of this sale"}
                        <select
                          value=""
                          onChange={(e) => {
                            if (e.target.value) setMembership(s, e.target.value, true);
                          }}
                          className={field}
                        >
                          <option value="">Choose one…</option>
                          {courses
                            .filter((c) => !s.courseIds.includes(c.id))
                            .map((c) => (
                              <option key={c.id} value={c.id}>
                                {c.title}
                              </option>
                            ))}
                        </select>
                      </label>
                    </div>
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
