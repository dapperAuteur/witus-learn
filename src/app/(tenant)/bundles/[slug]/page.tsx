import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getScopedDb } from "@/db/scoped";
import { getSession } from "@/lib/session";
import { getActiveLearner } from "@/lib/active-learner";
import { getBundleBySlug } from "@/db/queries/bundles";
import { isEnrolled } from "@/db/queries/enrollment";
import { BundleBuyButton } from "@/components/bundle-buy-button";

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const sdb = await getScopedDb();
  const found = await getBundleBySlug(sdb.tenantId, slug);
  return { title: found?.bundle.title ?? "Bundle" };
}

function priceLabel(price: string | number, priceType: string): string {
  if (Number(price) === 0 || priceType === "free") return "Free";
  const n = Number(price);
  const amount = `$${n % 1 === 0 ? n.toFixed(0) : n.toFixed(2)}`;
  return priceType === "subscription" ? `${amount}/mo` : amount;
}

// A single bundle: its member courses and a buy button. Tenant-scoped; a bundle another tenant owns,
// or an unpublished one, 404s (never redirects).
export default async function BundlePage({ params }: Params) {
  const { slug } = await params;
  const sdb = await getScopedDb();
  const found = await getBundleBySlug(sdb.tenantId, slug);
  if (!found) notFound();
  const { bundle, courses } = found;

  const session = await getSession();
  const learner = session ? await getActiveLearner(session) : null;
  const enrolledFlags = learner
    ? await Promise.all(courses.map((c) => isEnrolled(learner.id, c.id)))
    : courses.map(() => false);
  const ownsAll = courses.length > 0 && enrolledFlags.every(Boolean);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link href="/bundles" className="text-sm text-neutral-500 hover:underline">
        ← Bundles
      </Link>
      <h1 className="mt-4 text-3xl font-bold">{bundle.title}</h1>
      {bundle.description ? (
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">{bundle.description}</p>
      ) : null}
      <p className="mt-3 text-sm text-neutral-500">
        {courses.length} course{courses.length === 1 ? "" : "s"}, one purchase, enrolls you in all of them.
      </p>

      {session ? (
        <BundleBuyButton slug={bundle.slug} priceLabel={priceLabel(bundle.price, bundle.priceType)} owned={ownsAll} />
      ) : (
        <p className="mt-6 text-sm">
          <Link href="/login" className="font-medium underline" style={{ color: "var(--accent)" }}>
            Sign in
          </Link>{" "}
          to get this bundle ({priceLabel(bundle.price, bundle.priceType)}).
        </p>
      )}

      <ol className="mt-8 space-y-3">
        {courses.map((c, i) => (
          <li key={c.id}>
            <Link
              href={`/course/${c.id}`}
              className="flex items-start gap-3 rounded-lg border border-neutral-200 p-4 hover:border-current dark:border-neutral-800"
            >
              <span
                className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
                style={{ backgroundColor: "var(--accent)" }}
              >
                {i + 1}
              </span>
              <span>
                <span className="font-medium">{c.title}</span>
                {enrolledFlags[i] ? <span className="ml-2 text-xs text-emerald-600">owned</span> : null}
                {c.description ? (
                  <span className="mt-1 block text-sm text-neutral-600 dark:text-neutral-400">{c.description}</span>
                ) : null}
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
