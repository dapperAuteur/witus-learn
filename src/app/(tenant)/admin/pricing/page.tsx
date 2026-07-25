import type { Metadata } from "next";
import { requirePlatformOwner } from "@/lib/session";
import { getScopedDb } from "@/db/scoped";
import { listCourses } from "@/db/queries/catalog";
import {
  PRICE_TIERS,
  SUBSCRIPTION_RECOMMENDATION,
  proposePricing,
  type PriceTier,
} from "@/lib/course-pricing";

export const metadata: Metadata = { title: "Proposed pricing" };

const TIER_ORDER: PriceTier[] = ["free", "foundation", "core", "premium", "certification"];
const TIER_CLS: Record<PriceTier, string> = {
  free: "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300",
  foundation: "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300",
  core: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300",
  premium: "bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300",
  certification: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
};

function currentLabel(price: string | number, priceType: string): string {
  if (priceType === "free" || Number(price) === 0) return "Free";
  const n = Number(price);
  const amount = Number.isFinite(n) ? `$${n % 1 === 0 ? n.toFixed(0) : n.toFixed(2)}` : `$${price}`;
  return priceType === "subscription" ? `${amount}/mo` : amount;
}

// Owner-only proposed pricing for the whole catalog. Recommendations to review and apply on each
// course's settings; nothing here changes a live price. Current price is read from the DB so the
// owner sees current vs proposed side by side.
export default async function PricingPage() {
  await requirePlatformOwner();
  const sdb = await getScopedDb();
  const courses = await listCourses(sdb.tenantId, { includeUnpublished: true });

  const rows = courses
    .map((c) => {
      const p = proposePricing(c.slug, c.category);
      return {
        title: c.title,
        category: c.category ?? "Uncategorized",
        current: currentLabel(c.price, c.priceType),
        proposed: p,
        changes: currentLabel(c.price, c.priceType) !== (p.price === 0 ? "Free" : `$${p.price}`),
      };
    })
    .sort((a, b) => a.category.localeCompare(b.category) || b.proposed.price - a.proposed.price);

  const countByTier = TIER_ORDER.map((t) => ({ tier: t, n: rows.filter((r) => r.proposed.tier === t).length }));

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold">Proposed pricing</h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        Fair-and-competitive price recommendations for every course, by tier. These do not change any
        live price. Apply the ones you like on each course&apos;s settings. Current price is read from the
        catalog, so you can see current vs proposed side by side.
      </p>

      <section aria-labelledby="sub" className="mt-6 rounded-lg border-2 p-5" style={{ borderColor: "var(--accent)" }}>
        <h2 id="sub" className="font-semibold">
          First, the model recommendation: an all-access subscription
        </h2>
        <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
          Recommended primary model: <strong>${SUBSCRIPTION_RECOMMENDATION.monthly}/month</strong> or{" "}
          <strong>${SUBSCRIPTION_RECOMMENDATION.annual}/year</strong> for all-access.{" "}
          {SUBSCRIPTION_RECOMMENDATION.note}
        </p>
      </section>

      <section aria-labelledby="tiers" className="mt-6">
        <h2 id="tiers" className="mb-3 text-xl font-semibold">
          The tiers
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {PRICE_TIERS.map((t) => (
            <div key={t.tier} className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
              <div className="flex items-center justify-between">
                <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${TIER_CLS[t.tier]}`}>
                  {t.label}
                </span>
                <span className="text-xs text-neutral-500">
                  {countByTier.find((c) => c.tier === t.tier)?.n ?? 0} courses
                </span>
              </div>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{t.rationale}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="courses" className="mt-8">
        <h2 id="courses" className="mb-3 text-xl font-semibold">
          Every course ({rows.length})
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-neutral-300 text-left dark:border-neutral-700">
                <th className="py-2 pr-3 font-semibold">Course</th>
                <th className="py-2 pr-3 font-semibold">Category</th>
                <th className="py-2 pr-3 font-semibold">Current</th>
                <th className="py-2 pr-3 font-semibold">Proposed</th>
                <th className="py-2 pr-3 font-semibold">Tier</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.title} className="border-b border-neutral-200 align-top dark:border-neutral-800">
                  <td className="py-2 pr-3 font-medium">{r.title}</td>
                  <td className="py-2 pr-3 text-neutral-500 whitespace-nowrap">{r.category}</td>
                  <td className="py-2 pr-3 whitespace-nowrap text-neutral-500">{r.current}</td>
                  <td className="py-2 pr-3 font-semibold whitespace-nowrap">
                    {r.proposed.price === 0 ? "Free" : `$${r.proposed.price}`}
                    {r.changes ? <span className="ml-1 text-xs text-amber-600">change</span> : null}
                  </td>
                  <td className="py-2 pr-3">
                    <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${TIER_CLS[r.proposed.tier]}`}>
                      {r.proposed.tier}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <p className="mt-6 text-xs text-neutral-500">
        Proposals only. Nothing here changes a live price. No number is a promise about revenue.
      </p>
    </main>
  );
}
