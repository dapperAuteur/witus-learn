import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { requireTenant } from "@/lib/tenant";
import { brandName } from "@/lib/branding";
import { ogImageUrl } from "@/lib/og";
import { PUBLIC_ROADMAP, ROADMAP_STATUS_META, type RoadmapStatus } from "@/lib/public-roadmap";

// Public product roadmap: what's live today, what we're building, and what we're exploring. This is
// the recruiting front door's transparency page — gated on tenant.flags.recruiting (404 on a
// white-label school, whose learners don't need the platform's roadmap), same as /platform. Every
// item is grounded in the internal roadmap; there are no fabricated stats, dates, or efficacy claims.
const description =
  "What Learn.WitUS does today and what we're building next: cited courses, standards alignment, the map curriculum, cohorts, certificates, and more.";
const card = ogImageUrl({ title: "Roadmap" });
export const metadata: Metadata = {
  title: "Roadmap",
  description,
  openGraph: { title: "Roadmap", description, images: [card] },
  twitter: { card: "summary_large_image", title: "Roadmap", description, images: [card] },
};

const ORDER: RoadmapStatus[] = ["now", "building", "exploring"];

export default async function RoadmapPage() {
  const tenant = await requireTenant();
  if (!tenant.flags.recruiting) notFound();
  const brand = brandName(tenant);
  const accent = { color: "var(--accent)" };

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:py-10">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest" style={accent}>
          {brand}
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">
          What we&apos;ve built, and what&apos;s next
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
          Learn.WitUS hosts cited, media-rich courses under your own brand and domain. Here&apos;s
          what you can use today, what we&apos;re actively building, and the directions we&apos;re
          exploring, in plain language and with no promises we can&apos;t keep.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <Link
            href="/courses"
            className="inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 pointer-coarse:min-h-12"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Browse the courses →
          </Link>
          <Link
            href="/teach"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-neutral-300 px-5 py-2.5 font-medium focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700 pointer-coarse:min-h-12"
          >
            Start your own school
          </Link>
          <Link href="/platform" className="text-sm font-medium underline" style={accent}>
            See the platform
          </Link>
        </div>
      </header>

      {ORDER.map((status) => {
        const meta = ROADMAP_STATUS_META[status];
        const items = PUBLIC_ROADMAP[status];
        return (
          <section key={status} className="mt-12" aria-labelledby={`roadmap-${status}`}>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h2 id={`roadmap-${status}`} className="text-2xl font-bold">
                <span aria-hidden className="mr-2">
                  {meta.emoji}
                </span>
                {meta.label}
              </h2>
              <p className="text-sm text-neutral-600">{meta.blurb}</p>
            </div>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {items.map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-neutral-200 p-5 dark:border-neutral-800"
                >
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        );
      })}

      <section className="mt-14 rounded-2xl border-2 p-6 sm:p-8" style={{ borderColor: "var(--accent)" }}>
        <h2 className="text-2xl font-bold">Want something that isn&apos;t here yet?</h2>
        <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-400">
          The roadmap moves on what teachers and schools actually ask for. Tell us what you need, and
          it may be the next thing we build.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <Link href="/help" className="text-sm font-medium underline" style={accent}>
            Read the help center
          </Link>
          <Link href="/for" className="text-sm font-medium underline" style={accent}>
            Who is it for?
          </Link>
        </div>
      </section>
    </main>
  );
}
