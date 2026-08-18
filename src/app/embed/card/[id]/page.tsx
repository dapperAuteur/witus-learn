import type { CSSProperties, ReactNode } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { requireTenant } from "@/lib/tenant";
import { getSiteUrl } from "@/lib/site-url";
import { getPublishedCourseCard } from "@/db/queries/embed";
import { cardPriceLabel, embedCardFace, embedClickThroughHref } from "@/lib/embed-card";
import { DISCLAIMER_SHORT } from "@/lib/disclaimer";

export const metadata: Metadata = { robots: { index: false, follow: false } };

type Params = { params: Promise<{ id: string }> };

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/**
 * PUBLIC paste-anywhere course CARD — the anonymous sibling of /embed/course/[id]. Any site
 * owner pastes the iframe snippet (generated at /teach/[courseId]/embed) and gets a small
 * tenant-branded marketing card: title, description, price or Coming-soon state, and a
 * click-through to the real course page on the tenant's own domain. Read-only discovery: no
 * auth, no cookies, no lesson data — clicking through lands on the tenant site (target="_top").
 *
 * Tenant resolution is HOST-based (requireTenant), same as /embed/course/[id]: the iframe src
 * is the tenant's own domain, so the Host header the browser sends is authoritative and nothing
 * about the tenant is ever taken from the embedding page. The course row must then resolve
 * WITHIN that tenant (published + public), or the route 404s — never redirects, never says
 * whether the id exists elsewhere. A vetting-locked course renders its public Coming-soon face:
 * title + description, no price, no offer (src/lib/vetting.ts).
 *
 * Framing: next.config.ts scopes `frame-ancestors *` to /embed/* only; everything else on the
 * site stays same-origin-framed. That header exception is what makes this page embeddable.
 */
export default async function EmbedCardPage({ params }: Params) {
  const tenant = await requireTenant();
  const { id } = await params;
  if (!UUID_RE.test(id)) notFound();

  const course = await getPublishedCourseCard(tenant.id, id);
  if (!course) notFound();

  const face = embedCardFace(course);
  const siteUrl = await getSiteUrl();
  const ctaHref = embedClickThroughHref(siteUrl, course);

  const accent = tenant.theme.colors?.accent ?? tenant.theme.themeColor ?? "#111111";
  const style = { "--accent": accent } as CSSProperties;

  let footer: ReactNode;
  if (face === "coming-soon") {
    // Public landing face only: the course cannot be bought yet, so a price beside it would be
    // an offer we can't honour (same rule as the catalog card).
    footer = (
      <span className="inline-flex items-center gap-1 rounded-full bg-sky-100 px-2 py-0.5 text-xs font-medium text-sky-900 dark:bg-sky-900 dark:text-sky-100">
        <span aria-hidden="true">🕒</span> Coming soon
      </span>
    );
  } else {
    footer = (
      <p className="text-sm font-semibold" style={{ color: "var(--accent, #111)" }}>
        {cardPriceLabel(course)}
      </p>
    );
  }

  return (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col p-5" style={style}>
      <span className="mb-3 h-1.5 w-12 rounded" style={{ backgroundColor: "var(--accent, #111)" }} />
      <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">{tenant.name}</p>
      <h1 className="mt-1 text-lg font-bold">{course.title}</h1>
      {course.description ? (
        <p className="mt-2 line-clamp-3 text-sm text-neutral-600 dark:text-neutral-400">
          {course.description}
        </p>
      ) : null}

      <div className="mt-4 flex-1" />

      <div className="flex flex-wrap items-center justify-between gap-3">
        {footer}
        <a
          href={ctaHref}
          target="_top"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center rounded-md px-4 py-2 text-sm font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{ backgroundColor: "var(--accent, #111)" }}
        >
          {face === "coming-soon" ? <>See it on {tenant.name} →</> : <>View course on {tenant.name} →</>}
        </a>
      </div>

      {/* The embed strips all site chrome, so the disclaimer travels with the card — same rule
          as /embed/course/[id]. */}
      <p className="mt-5 border-t border-neutral-200 pt-3 text-[11px] leading-snug text-neutral-400 dark:border-neutral-800 dark:text-neutral-600">
        {DISCLAIMER_SHORT}
      </p>
    </main>
  );
}
