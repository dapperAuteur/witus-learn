// Public paste-anywhere course-card embed (`/embed/card/[id]`) — the pure half.
//
// This is capability 2 of plans/embeddable-widget-backlog.md: an iframe snippet ANY site owner
// can paste (a homeschool co-op's WordPress page, say), like a YouTube or Calendly embed. It is
// deliberately the LOW-RISK slice of that backlog: a marketing card (title, description, price or
// Coming-soon state, link out to the real course page), never lessons, never a player, never auth.
// The trusted-consumer path (/api/v1 + /embed/course/[id]) is a different capability and keeps
// its API keys; the public card needs NO key anywhere — a key pasted into third-party HTML would
// be a leaked secret, so the snippet builder must never emit one.
//
// Everything in this file is PURE (no next/headers, no db) so tests/isolation/embed-card.test.ts
// can exercise every branch offline, same pattern as src/lib/vetting.ts.

import { isVettingLocked } from "@/lib/vetting";

/**
 * Which face does the ANONYMOUS embed viewer get? An embed carries no session and sets no
 * cookies, so unlike courseViewGate there is no editor/enrollee escape hatch: the SQL read has
 * already excluded drafts and non-public courses (they are `null` → the route 404s, never
 * redirects), leaving only the vetting question. A vetting-locked course shows its public
 * "Coming soon" face — title + description are real discovery value — but no price and no offer,
 * exactly like the catalog card (src/components/course-card.tsx).
 */
export function embedCardFace(course: {
  vettedAt: Date | null;
  allowUnvettedPublic: boolean;
}): "coming-soon" | "open" {
  return isVettingLocked(course) ? "coming-soon" : "open";
}

/** Price label matching the catalog card / pricing manager conventions ("Free", "$19", "$12/mo"). */
export function cardPriceLabel(course: {
  price: string;
  priceType: string;
  billingInterval: string | null;
}): string {
  if (course.priceType === "free" || Number(course.price) === 0) return "Free";
  const base = `$${course.price}`;
  if (course.priceType === "subscription") {
    return course.billingInterval === "year" ? `${base}/yr` : `${base}/mo`;
  }
  return base;
}

/** Pretty course-landing path when the course has one, `/course/[id]` otherwise. */
export function courseLandingPath(course: {
  id: string;
  slug: string | null;
  instructorUsername: string | null;
}): string {
  return course.instructorUsername && course.slug
    ? `/${course.instructorUsername}/${course.slug}`
    : `/course/${course.id}`;
}

/**
 * The card's click-through CTA. Routed through the EXISTING privacy-light counter
 * (/api/link/click: counts only, no user id / IP / cookies — see src/db/queries/link-clicks.ts)
 * so the instructor's "Link usage" panel shows how many visitors arrive from embeds. The
 * `utm_source=embed-card` tag is what makes the row self-describing there, and it rides into the
 * tenant's own web analytics too. Impression (page-load) counting is deliberately NOT done: no
 * existing analytics primitive fits it (see docs-notes-public-embed.md).
 */
export function embedClickThroughHref(
  siteUrl: string,
  course: { id: string; slug: string | null; instructorUsername: string | null },
): string {
  const target = `${siteUrl}${courseLandingPath(course)}?utm_source=embed-card`;
  return `${siteUrl}/api/link/click?u=${encodeURIComponent(target)}&c=${course.id}&k=content`;
}

/** Minimal HTML-attribute escape for values interpolated into the snippet. */
function escapeAttr(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

/**
 * The copy-paste iframe snippet the /teach embed tab hands an instructor. Plain HTML that works
 * on any third-party site: no script tag, no API key, no cookies. `siteUrl` is the tenant's OWN
 * origin (from the request the instructor is on), so the snippet keeps working for white-label
 * schools on their own domains — never hardcode learn.witus.online here.
 */
export function buildEmbedSnippet(input: {
  siteUrl: string;
  courseId: string;
  courseTitle: string;
  tenantName: string;
}): string {
  const src = `${input.siteUrl}/embed/card/${input.courseId}`;
  const title = escapeAttr(`${input.courseTitle} on ${input.tenantName}`);
  return [
    `<iframe`,
    `  src="${escapeAttr(src)}"`,
    `  title="${title}"`,
    `  width="100%"`,
    `  height="360"`,
    `  style="max-width: 480px; border: 0; border-radius: 16px;"`,
    `  loading="lazy"`,
    `></iframe>`,
  ].join("\n");
}
