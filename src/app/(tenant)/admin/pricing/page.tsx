import type { Metadata } from "next";
import Link from "next/link";
import { requirePlatformOwner } from "@/lib/session";
import { getScopedDb } from "@/db/scoped";
import { listCourses } from "@/db/queries/catalog";
import { countActiveEnrollmentsByCourse } from "@/db/queries/enrollment";
import { hasStripe } from "@/lib/env";
import {
  PRICE_TIERS,
  SUBSCRIPTION_RECOMMENDATION,
  proposePricing,
  type PriceTier,
} from "@/lib/course-pricing";
import { BUNDLE_PROPOSALS } from "@/lib/bundles";
import {
  MARKET_COMPARISONS,
  comparisonsFor,
  droneIncumbentComparison,
} from "@/lib/market-comparison";
import { PricingManager, type PricingRow } from "@/components/pricing-manager";

export const metadata: Metadata = { title: "Pricing" };

const TIER_ORDER: PriceTier[] = ["free", "foundation", "core", "premium", "certification"];
const TIER_CLS: Record<PriceTier, string> = {
  free: "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300",
  foundation: "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300",
  core: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300",
  premium: "bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300",
  certification: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
};

// Owner-only pricing manager for the whole catalog. Shows each course's current price beside a
// tier-based recommendation, and lets the owner change price / type / interval inline, apply the
// proposed price per row, or bulk-apply across selected rows. Current price is read from the DB.
export default async function PricingPage() {
  await requirePlatformOwner();
  const sdb = await getScopedDb();
  const courses = await listCourses(sdb.tenantId, { includeUnpublished: true });
  // Active enrollments per course, in one grouped query. It is the number that makes a free-to-paid
  // change real, so the confirm step can say how many learners it is being made in front of.
  const enrolled = await countActiveEnrollmentsByCourse(sdb.tenantId);

  const rows: PricingRow[] = courses
    .map((c) => {
      const p = proposePricing(c.slug, c.category);
      return {
        courseId: c.id,
        slug: c.slug,
        title: c.title,
        category: c.category ?? "Uncategorized",
        price: Number(c.price),
        priceType: c.priceType as PricingRow["priceType"],
        billingInterval: c.billingInterval as PricingRow["billingInterval"],
        proposedPrice: p.price,
        proposedTier: p.tier,
        enrollmentCount: enrolled.get(c.id) ?? 0,
      };
    })
    .sort((a, b) => a.category.localeCompare(b.category) || b.proposedPrice - a.proposedPrice);

  const countByTier = TIER_ORDER.map((t) => ({ tier: t, n: rows.filter((r) => r.proposedTier === t).length }));

  // Bundle sum-of-parts, from each member course's proposed price (real category from the catalog).
  const bySlug = new Map(courses.map((c) => [c.slug, c] as const));
  const bundles = BUNDLE_PROPOSALS.map((b) => {
    const sum = b.appMembers.reduce((acc, slug) => {
      const c = bySlug.get(slug);
      return acc + proposePricing(slug, c?.category ?? null).price;
    }, 0);
    const known = b.appMembers.filter((s) => bySlug.has(s)).length;
    // Market anchors attached to this bundle or to any of its member courses, so the reasoning for a
    // bundle price is readable in the same place as the price.
    const anchors = [
      ...comparisonsFor(b.slug),
      ...b.appMembers.flatMap((s) => comparisonsFor(s)),
    ].filter((c, i, all) => all.findIndex((x) => x.key === c.key) === i);
    return {
      ...b,
      sum,
      savings: Math.max(0, sum - b.appPrice),
      known,
      total: b.appMembers.length,
      anchors,
    };
  });

  const incumbent = droneIncumbentComparison();
  const unverifiedCount = MARKET_COMPARISONS.filter((c) => c.needsVerification).length;

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold">Pricing</h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        Fair-and-competitive price recommendations for every course, by tier, next to each course&apos;s
        current price. Change a price here: edit the amount and type inline and Save, apply the proposed
        price with one click, or select several rows and bulk-apply. Saving takes effect on the next
        checkout.
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
                <span className="text-xs text-neutral-600">
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
          Manage prices ({rows.length})
        </h2>
        <p className="mb-3 text-sm text-neutral-600 dark:text-neutral-400">
          Click a course name to open its manage page. The proposed price is the tier recommendation;
          Apply proposed sets it as a one-time price (or Free when the tier is $0). Any change that a
          learner or Stripe would notice stops for a confirmation step first, with what it does and how
          many learners are already enrolled.
        </p>
        <PricingManager rows={rows} hasStripe={hasStripe} />
      </section>

      <section aria-labelledby="bundles" className="mt-10">
        <h2 id="bundles" className="text-xl font-semibold">
          Bundles (app and Teachers Pay Teachers)
        </h2>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
          Themed sets sold together at a discount, each with a price and justification for BOTH
          channels. App savings are computed from the members&apos; proposed course prices. These are
          the proposals; <Link href="/admin/bundles" className="underline underline-offset-2">
            /admin/bundles
          </Link>{" "}
          is where a seeded bundle gets its final price and is published. A bundle marked{" "}
          <em>planned</em> below has courses that do not exist yet, so <code>pnpm seed:bundles</code>{" "}
          deliberately skips it rather than creating a full-price bundle with a fraction of its
          courses in it.
        </p>
        <div className="mt-4 space-y-4">
          {bundles.map((b) => (
            <div key={b.slug} className="rounded-lg border border-neutral-200 p-5 dark:border-neutral-800">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold">{b.title}</h3>
                <span className="text-sm text-neutral-600">
                  {b.plannedUntilComplete && b.known !== b.total ? (
                    <span className="mr-2 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">
                      planned
                    </span>
                  ) : null}
                  {b.known}
                  {b.known !== b.total ? ` of ${b.total}` : ""} course{b.total === 1 ? "" : "s"}
                </span>
              </div>
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                <div className="rounded-md bg-neutral-50 p-3 dark:bg-neutral-900/40">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--accent)" }}>
                      App
                    </span>
                    <span className="text-lg font-bold">${b.appPrice}</span>
                    {b.savings > 0 ? (
                      <span className="text-xs text-emerald-600">
                        save ${b.savings} vs ${b.sum} singly
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">{b.appJustification}</p>
                </div>
                <div className="rounded-md bg-neutral-50 p-3 dark:bg-neutral-900/40">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--accent)" }}>
                      TpT
                    </span>
                    <span className="text-lg font-bold">{b.tptPrice === null ? "not yet" : `$${b.tptPrice}`}</span>
                  </div>
                  <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">{b.tptJustification}</p>
                </div>
              </div>
              {b.anchors.length > 0 ? (
                <details className="mt-3">
                  <summary className="cursor-pointer text-xs font-medium text-neutral-700 hover:underline dark:text-neutral-300">
                    Compare with {b.anchors.length} competing product{b.anchors.length === 1 ? "" : "s"}
                  </summary>
                  <ul className="mt-2 space-y-1.5">
                    {b.anchors.map((c) => (
                      <li key={c.key} className="text-xs text-neutral-600 dark:text-neutral-400">
                        <a
                          href={c.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium underline underline-offset-2"
                        >
                          {c.vendor}: {c.product}
                        </a>{" "}
                        {c.price === null ? (
                          <span>({c.priceNote ?? "price not established"})</span>
                        ) : (
                          <span className="font-semibold">${c.price}</span>
                        )}
                        {c.needsVerification ? (
                          <span className="ml-1 text-amber-700 dark:text-amber-500">· unverified</span>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </details>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="market" className="mt-10">
        <h2 id="market" className="text-xl font-semibold">
          Market comparison ({MARKET_COMPARISONS.length})
        </h2>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
          The competing products every recommendation above is reasoned against, with a link to each
          so you can check it yourself during vetting. Each entry says what is genuinely{" "}
          <strong>alike</strong> and what is <strong>different</strong>, including where the
          competitor is better, because a table where we win every row is useless for setting a price.
        </p>

        {incumbent ? (
          <p className="mt-3 rounded-lg border-2 p-4 text-sm" style={{ borderColor: "var(--accent)" }}>
            <strong>The headline:</strong> {incumbent.parts.join(" + ")} alone is{" "}
            <strong>${incumbent.theirs}</strong>. The whole Imaging &amp; Drone Services path,
            certification prep included, is <strong>$129</strong>.
          </p>
        ) : null}

        {unverifiedCount > 0 ? (
          <p className="mt-3 rounded-md bg-amber-50 p-3 text-sm text-amber-900 dark:bg-amber-950/40 dark:text-amber-200">
            <strong>{unverifiedCount} of these still need your verification.</strong> They are
            snapshots of someone else&apos;s list price, and competitors discount constantly. None of
            them may appear in a learner-facing or marketing page until checked and dated. Clear them
            on the{" "}
            <Link href="/admin/research" className="underline underline-offset-2">
              source-check list
            </Link>{" "}
            (the <code>price-*</code> entries).
          </p>
        ) : null}

        <div className="mt-4 space-y-4">
          {MARKET_COMPARISONS.map((c) => (
            <div key={c.key} className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold">
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                    {c.vendor}: {c.product}
                  </a>
                </h3>
                <span className="text-lg font-bold">
                  {c.price === null ? "n/a" : `$${c.price}`}
                </span>
              </div>
              <p className="mt-1 text-xs text-neutral-600">
                {c.kind} · gathered {c.gatheredOn}
                {c.priceNote ? ` · ${c.priceNote}` : ""}
                {c.needsVerification ? (
                  <span className="ml-1 font-medium text-amber-700 dark:text-amber-500">
                    · needs verification
                  </span>
                ) : (
                  <span className="ml-1 font-medium text-emerald-700 dark:text-emerald-500">· verified</span>
                )}
              </p>
              <dl className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="rounded-md bg-neutral-50 p-3 dark:bg-neutral-900/40">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-500">
                    Alike
                  </dt>
                  <dd className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">{c.alike}</dd>
                </div>
                <div className="rounded-md bg-neutral-50 p-3 dark:bg-neutral-900/40">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-violet-700 dark:text-violet-400">
                    Different
                  </dt>
                  <dd className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">{c.different}</dd>
                </div>
              </dl>
              <p className="mt-2 text-xs text-neutral-600">
                Anchors: {c.anchors.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </section>

      <p className="mt-6 text-xs text-neutral-600">
        Course prices you save here take effect on the next checkout. Bundle prices above are still
        proposals: the app cannot yet sell a bundle. Competitor prices are dated snapshots, not
        facts. No number is a promise about revenue.
      </p>
    </main>
  );
}
