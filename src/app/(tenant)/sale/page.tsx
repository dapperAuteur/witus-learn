import Link from "next/link";
import type { Metadata } from "next";
import { getScopedDb } from "@/db/scoped";
import { ogImageUrl } from "@/lib/og";
import { formatPrice, promotionStatus } from "@/lib/sale-pricing";

// The public index of sales that have their own page.
//
// WHY ONLY SOME SALES APPEAR. A promotion gets a page when it is given a slug, and most should not
// have one: a one-off discount on a single course is a price, not a campaign, and listing every
// such row here would bury the thing a visitor came for. `listPublicPromotions` therefore filters
// on slug rather than on scope.
//
// ENDED CAMPAIGNS STAY LISTED, marked as over. A shared link outlives the sale, and "this ended"
// is a better answer to somebody arriving late than a 404 that implies they mistyped.

const TITLE = "Sales";
const DESCRIPTION =
  "Every current offer in one place: what is discounted, how much comes off, and when each one ends.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [ogImageUrl({ title: TITLE, subtitle: "What is on offer right now" })],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [ogImageUrl({ title: TITLE, subtitle: "What is on offer right now" })],
  },
};

function describeDiscount(kind: string, value: string | number | null): string {
  if (kind === "free") return "Free";
  const n = Number(value ?? 0);
  if (kind === "percent") return `${n % 1 === 0 ? n.toFixed(0) : n}% off`;
  return `${formatPrice(n)} off`;
}

export default async function SalesIndexPage() {
  const sdb = await getScopedDb();
  const sales = await sdb.listPublicPromotions();
  const now = new Date();
  const withStatus = sales.map((s) => ({ sale: s, status: promotionStatus(s, now) }));
  const live = withStatus.filter((s) => s.status === "active");
  const upcoming = withStatus.filter((s) => s.status === "scheduled");
  const over = withStatus.filter((s) => s.status === "ended");

  const section = (
    heading: string,
    rows: typeof withStatus,
    tone: "live" | "muted",
  ) =>
    rows.length === 0 ? null : (
      <section className="mb-10">
        <h2 className="mb-3 text-lg font-semibold">{heading}</h2>
        <ul className="space-y-3">
          {rows.map(({ sale, status }) => (
            <li key={sale.id}>
              <Link
                href={`/sale/${sale.slug}`}
                className={`block rounded-lg border p-4 transition-colors hover:border-neutral-400 dark:hover:border-neutral-600 ${
                  tone === "live"
                    ? "border-neutral-300 dark:border-neutral-700"
                    : "border-neutral-200 opacity-70 dark:border-neutral-800"
                }`}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="text-base font-semibold">{sale.name}</span>
                  <span className="text-sm font-medium" style={{ color: "var(--accent)" }}>
                    {describeDiscount(sale.kind, sale.value)}
                  </span>
                </div>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  {sale.scope === "tenant"
                    ? "Everything in the catalog"
                    : sale.scope === "courses"
                      ? `${sale.courseIds.length} course${sale.courseIds.length === 1 ? "" : "s"}`
                      : "One item"}
                  {status === "ended" ? " · this sale has ended" : null}
                  {status === "scheduled" ? " · starts soon" : null}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    );

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <header className="mb-8">
        <h1 className="text-2xl font-bold sm:text-3xl">{TITLE}</h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">{DESCRIPTION}</p>
      </header>

      {withStatus.length === 0 ? (
        <p className="rounded-lg border border-neutral-200 p-6 text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">
          There are no sales running right now. Courses are at their usual prices.
        </p>
      ) : (
        <>
          {section("Running now", live, "live")}
          {section("Starting soon", upcoming, "live")}
          {section("Ended", over, "muted")}
        </>
      )}

      <p className="mt-8 text-sm text-neutral-600 dark:text-neutral-400">
        Prices shown on a course page already include any sale that applies to it.{" "}
        <Link href="/courses" className="underline" style={{ color: "var(--accent)" }}>
          Browse the full catalog
        </Link>
        .
      </p>
    </main>
  );
}
