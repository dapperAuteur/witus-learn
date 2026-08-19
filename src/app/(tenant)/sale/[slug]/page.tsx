import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CourseCard } from "@/components/course-card";
import { getScopedDb } from "@/db/scoped";
import { ogImageUrl } from "@/lib/og";
import { coursePriceView, formatPrice, promotionStatus } from "@/lib/sale-pricing";

// One public campaign page, e.g. /sale/back-to-school.
//
// TENANT ISOLATION: a slug this tenant does not have 404s. It must never redirect, because a
// redirect would confirm the campaign exists on another brand, which is the leak the catalog rule
// in CLAUDE.md names explicitly.
//
// WHAT IT SHOWS. The campaign's own courses, each with its resolved price, so the discount is
// visible rather than asserted. Prices come from the SAME resolver the catalog and checkout use
// (coursePriceView -> resolvePrice), so this page can never advertise a number the checkout will
// not honour. That is the reason it does not compute its own arithmetic.

function describeDiscount(kind: string, value: string | number | null): string {
  if (kind === "free") return "Free";
  const n = Number(value ?? 0);
  if (kind === "percent") return `${n % 1 === 0 ? n.toFixed(0) : n}% off`;
  return `${formatPrice(n)} off`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sdb = await getScopedDb();
  const sale = await sdb.getPublicPromotionBySlug(slug);
  if (!sale) return { title: "Sale" };
  const title = sale.name;
  const description = `${describeDiscount(sale.kind, sale.value)} on selected courses. See what is included and how long it runs.`;
  const image = ogImageUrl({ title: sale.name, subtitle: describeDiscount(sale.kind, sale.value) });
  return {
    title,
    description,
    openGraph: { title, description, images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default async function SalePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sdb = await getScopedDb();
  const sale = await sdb.getPublicPromotionBySlug(slug);
  if (!sale) notFound();

  const now = new Date();
  const status = promotionStatus(sale, now);
  const [allCourses, activePromotions] = await Promise.all([
    sdb.listCourses({}),
    sdb.listActivePromotions(),
  ]);

  // Which courses this campaign covers. A tenant-wide sale covers the published catalog; a campaign
  // covers its members, in catalog order rather than the order they were added, so the page reads
  // as a shelf rather than as an audit log.
  const memberIds = new Set(sale.courseIds);
  const courses =
    sale.scope === "tenant"
      ? allCourses
      : sale.scope === "courses"
        ? allCourses.filter((c) => memberIds.has(c.id))
        : allCourses.filter((c) => c.id === sale.courseId);

  const ends = sale.endsAt ? new Date(sale.endsAt) : null;

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <nav className="mb-6 text-sm">
        <Link href="/sale" className="underline" style={{ color: "var(--accent)" }}>
          All sales
        </Link>
      </nav>

      <header className="mb-8">
        <h1 className="text-2xl font-bold sm:text-3xl">{sale.name}</h1>
        <p className="mt-2 text-lg font-medium" style={{ color: "var(--accent)" }}>
          {describeDiscount(sale.kind, sale.value)}
        </p>

        {status === "ended" ? (
          <p className="mt-3 rounded-lg border border-neutral-300 bg-neutral-50 p-3 text-sm dark:border-neutral-700 dark:bg-neutral-900">
            <strong>This sale has ended.</strong> The courses below are back at their usual prices.
          </p>
        ) : status === "scheduled" ? (
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
            Starting {sale.startsAt ? new Date(sale.startsAt).toLocaleDateString() : "soon"}.
          </p>
        ) : ends ? (
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
            Runs until {ends.toLocaleDateString()}.
          </p>
        ) : (
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
            Running now. No end date has been set.
          </p>
        )}

        {status === "active" && sale.scope === "courses" ? (
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
            More courses are being added to this sale as they are finished, so it is worth checking
            back.
          </p>
        ) : null}
      </header>

      {courses.length === 0 ? (
        <p className="rounded-lg border border-neutral-200 p-6 text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">
          No courses have been added to this sale yet. Check back shortly.
        </p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <li key={c.id}>
              <CourseCard course={c} price={coursePriceView(c, sdb.tenantId, activePromotions)} />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
