import Link from "next/link";
import type { Metadata } from "next";
import { requirePlatformOwner } from "@/lib/session";
import { getScopedDb } from "@/db/scoped";
import { listBundles, getBundleCourseIds } from "@/db/queries/bundles";

export const metadata: Metadata = { title: "Bundles" };

function priceLabel(price: string | number, priceType: string): string {
  if (Number(price) === 0 || priceType === "free") return "Free";
  const n = Number(price);
  const amount = `$${n % 1 === 0 ? n.toFixed(0) : n.toFixed(2)}`;
  return priceType === "subscription" ? `${amount}/mo` : amount;
}

// Owner view of every bundle (published or not), with member count and publish state. Bundles are
// created by `pnpm seed:bundles` (from the proposals in src/lib/bundles.ts), UNPUBLISHED with the
// recommended price. Set the price and publish here (course settings-style form) when ready to sell.
export default async function AdminBundlesPage() {
  await requirePlatformOwner();
  const sdb = await getScopedDb();
  const bundles = await listBundles(sdb.tenantId, { includeUnpublished: true });
  const counts = await Promise.all(bundles.map((b) => getBundleCourseIds(sdb.tenantId, b.id)));

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold">Bundles</h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        Course bundles sold at one price; buying one enrolls the learner in every member course.
        Recommendations and pricing live at{" "}
        <Link href="/admin/pricing" className="underline" style={{ color: "var(--accent)" }}>
          /admin/pricing
        </Link>
        . Create or refresh them with <code>pnpm seed:bundles</code>; each starts UNPUBLISHED with the
        recommended price, so nothing sells until you publish it.
      </p>

      {bundles.length === 0 ? (
        <p className="mt-8 text-neutral-600">
          No bundles yet. Run <code>pnpm seed:bundles</code> after the migration to create the proposed
          set.
        </p>
      ) : (
        <table className="mt-6 w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-neutral-300 text-left dark:border-neutral-700">
              <th className="py-2 pr-3 font-semibold">Bundle</th>
              <th className="py-2 pr-3 font-semibold">Courses</th>
              <th className="py-2 pr-3 font-semibold">Price</th>
              <th className="py-2 pr-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {bundles.map((b, i) => (
              <tr key={b.id} className="border-b border-neutral-200 dark:border-neutral-800">
                <td className="py-2 pr-3 font-medium">
                  <Link href={`/bundles/${b.slug}`} className="hover:underline">
                    {b.title}
                  </Link>
                </td>
                <td className="py-2 pr-3 text-neutral-600">{counts[i].length}</td>
                <td className="py-2 pr-3 whitespace-nowrap">{priceLabel(b.price, b.priceType)}</td>
                <td className="py-2 pr-3">
                  <span
                    className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                      b.isPublished
                        ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300"
                        : "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
                    }`}
                  >
                    {b.isPublished ? "Published" : "Unpublished"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
