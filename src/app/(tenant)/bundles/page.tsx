import Link from "next/link";
import type { Metadata } from "next";
import { getScopedDb } from "@/db/scoped";
import { listBundles } from "@/db/queries/bundles";
import { ogImageUrl } from "@/lib/og";

const bundlesDescription = "Course bundles: themed sets sold together at a discount.";
const bundlesCard = ogImageUrl({ title: "Bundles" });
export const metadata: Metadata = {
  title: "Bundles",
  description: bundlesDescription,
  openGraph: { title: "Bundles", description: bundlesDescription, images: [bundlesCard] },
  twitter: { card: "summary_large_image", title: "Bundles", description: bundlesDescription, images: [bundlesCard] },
};

function priceLabel(price: string | number, priceType: string): string {
  if (Number(price) === 0 || priceType === "free") return "Free";
  const n = Number(price);
  const amount = `$${n % 1 === 0 ? n.toFixed(0) : n.toFixed(2)}`;
  return priceType === "subscription" ? `${amount}/mo` : amount;
}

// Published bundles for this tenant. Tenant-scoped; empty state is a plain, honest message.
export default async function BundlesIndexPage() {
  const sdb = await getScopedDb();
  const bundles = await listBundles(sdb.tenantId);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold">Bundles</h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        Themed sets of courses, sold together at a discount. One purchase enrolls you in every course
        in the bundle.
      </p>

      {bundles.length === 0 ? (
        <p className="mt-8 text-neutral-600">No bundles are available yet.</p>
      ) : (
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {bundles.map((b) => (
            <li key={b.id}>
              <Link
                href={`/bundles/${b.slug}`}
                className="block h-full rounded-lg border border-neutral-200 p-5 hover:border-current dark:border-neutral-800"
              >
                <p className="font-medium">{b.title}</p>
                {b.description ? (
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{b.description}</p>
                ) : null}
                <p className="mt-2 text-sm font-semibold" style={{ color: "var(--accent)" }}>
                  {priceLabel(b.price, b.priceType)}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
