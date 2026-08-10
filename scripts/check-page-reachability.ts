import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

/**
 * Guard for the PAGE-QUALITY rule (see CLAUDE.md "## Page-quality rule"). Two failure modes that a
 * human never notices until a visitor complains, both mechanically checkable:
 *
 *   pnpm check:page-reachability
 *
 * 1. THE MENU ORPHAN. A page ships, works, and is completely unreachable from the site chrome, so the
 *    only way to it is to know the URL. This is exactly how the per-audience landing pages sat unlinked:
 *    built, published, and invisible in the menu. A public page a visitor cannot navigate to is a page
 *    that does not exist for them, and a marketing page that is not in the menu never earns its traffic.
 *
 * 2. THE SHARED-CARD PAGE. A page inherits the tenant's generic Open Graph card, so every link to it on
 *    social or in a text preview looks identical and says nothing about THIS page. The app already has a
 *    per-page card system (`ogImageUrl` -> /api/og, which paints the page's title over the tenant's own
 *    map); a public page just has to opt in by setting `openGraph`/`ogImageUrl` in its metadata.
 *
 * SCOPE: top-level static pages, i.e. `src/app/(tenant)/<segment>/page.tsx` where <segment> is one
 * plain (non-dynamic, non-route-group) path segment. Dynamic pages (`[slug]`), nested flow steps
 * (`/field-log/start`), API, admin, and auth are out of scope: detail pages get their card and title
 * from data, and flow steps are reached from their parent, not the menu.
 *
 * REACHABLE means: the route appears as a link target in a LINK SURFACE (the header, the mobile drawer,
 * or the footer). A page reached only from another page's body (a feature page linked from /explore, a
 * map linked from a lesson) is NOT "in the menu" and must be listed in ORPHAN_OK with the reason.
 *
 * OWN-CARD means: the page's own `page.tsx` references `ogImageUrl(` or sets `openGraph`. Login-gated
 * app pages (GATED_PREFIXES) are exempt, since they are behind auth and not shared; a public page that
 * still rides the default card must be listed in SHARED_CARD_OK.
 *
 * A RATCHET, like check-longest-option.ts and check-standards-coverage.ts. The two allowlists below
 * hold the pages that predate this guard (or are legitimately excused, with a reason). A page NOT on
 * the relevant list fails. Delete an entry when you fix its page; never add one to make a new page pass.
 */

const LINK_SURFACES = [
  "src/components/site-header.tsx",
  "src/components/mobile-nav.tsx",
  "src/components/site-footer.tsx",
];

/** Login-gated app sections: exempt from the OWN-CARD requirement (behind auth, not shared socially).
 *  They are still subject to the menu-reachability check. */
const GATED_PREFIXES = ["dashboard", "cohorts", "family", "my-courses", "field-log", "teach", "admin"];

/** Public top-level pages NOT reachable from the header/footer/mobile menu, with the reason each is a
 *  legitimate exception. A page reached only from another page's body belongs here, not the menu. */
const ORPHAN_OK: Record<string, string> = {
  "/globe": "A feature surface reached from /explore, not a standalone top-nav destination.",
  "/great-migration-map": "A single lesson's map, linked from the course that uses it, not the menu.",
};

/** Public top-level pages that still ride the tenant's default OG card instead of setting their own.
 *  Debt: give each its own `ogImageUrl({ title })` and delete the line. Legal pages may stay. */
const SHARED_CARD_OK: Record<string, string> = {
  // The eleven "pre-existing" entries were CLEARED on 2026-08-10: every one of those pages now sets
  // its own title, description and `ogImageUrl` card. BAM's requirement was that every landing page
  // be optimised for sharing, with its own preview when sent by text or posted socially, and a page
  // riding the default card shares identically to every other page and says nothing about itself.
  // Only the legal pages remain, and they stay by choice.
  "/privacy": "Legal page; the default card is fine.",
  "/safety": "Legal page; the default card is fine.",
  "/terms": "Legal page; the default card is fine.",
};

const TENANT_ROOT = "src/app/(tenant)";

function trackedPages(): string[] {
  const out = execFileSync("git", ["ls-files", "-z", TENANT_ROOT], { encoding: "utf-8" });
  return out.split("\0").filter((f) => f.endsWith("/page.tsx"));
}

/** Derive the route from a `(tenant)/.../page.tsx` path: drop the tenant root, drop `/page.tsx`, and
 *  drop any `(route-group)` segments (they do not appear in the URL). */
function routeOf(file: string): string {
  const r = file
    .replace(`${TENANT_ROOT}`, "")
    .replace(/\/page\.tsx$/, "")
    .replace(/\/\([a-z0-9-]+\)/g, "");
  return r || "/";
}

/** Top-level static page: exactly one plain segment, no dynamic `[...]`. */
function isTopLevelStatic(route: string): boolean {
  return /^\/[a-z0-9-]+$/.test(route);
}

function isGated(route: string): boolean {
  return GATED_PREFIXES.some((p) => route === `/${p}`);
}

const surfaceText = LINK_SURFACES.map((f) => {
  try {
    return readFileSync(f, "utf-8");
  } catch {
    return "";
  }
}).join("\n");

/** A route is linked from a surface if it appears there as a string/template literal href target. */
function isLinked(route: string): boolean {
  return surfaceText.includes(`"${route}"`) || surfaceText.includes(`\`${route}\``) || surfaceText.includes(`"${route}/`);
}

const orphans: string[] = [];
const sharedCards: string[] = [];
const staleOrphan: string[] = [];
const staleCard: string[] = [];
let checked = 0;

for (const file of trackedPages()) {
  const route = routeOf(file);
  if (!isTopLevelStatic(route)) continue;
  checked++;
  const src = readFileSync(file, "utf-8");

  // 1. Menu reachability.
  if (isLinked(route)) {
    if (ORPHAN_OK[route]) staleOrphan.push(route);
  } else if (!ORPHAN_OK[route]) {
    orphans.push(route);
  }

  // 2. Own social card (public pages only).
  if (!isGated(route)) {
    const ownCard = /ogImageUrl\(|openGraph/.test(src);
    if (ownCard) {
      if (SHARED_CARD_OK[route]) staleCard.push(route);
    } else if (!SHARED_CARD_OK[route]) {
      sharedCards.push(route);
    }
  }
}

const fail = orphans.length > 0 || sharedCards.length > 0;

if (orphans.length) {
  console.error(`\nMENU ORPHANS (${orphans.length}): a public page with no link in the header, mobile drawer, or footer.`);
  for (const r of orphans.sort()) console.error(`  ${r}`);
  console.error(`  Fix: add a nav/footer link in the same branch, or add the route to ORPHAN_OK in this script with a reason.`);
}
if (sharedCards.length) {
  console.error(`\nSHARED OG CARD (${sharedCards.length}): a public page that rides the tenant default card instead of its own.`);
  for (const r of sharedCards.sort()) console.error(`  ${r}`);
  console.error(`  Fix: set metadata.openGraph.images to ogImageUrl({ title: <page title> }) (see src/lib/og.ts), or add to SHARED_CARD_OK with a reason.`);
}
if (staleOrphan.length) {
  console.log(`\nGood news: ${staleOrphan.length} ORPHAN_OK entr${staleOrphan.length === 1 ? "y is" : "ies are"} now linked. Delete: ${staleOrphan.sort().join(", ")}`);
}
if (staleCard.length) {
  console.log(`\nGood news: ${staleCard.length} SHARED_CARD_OK entr${staleCard.length === 1 ? "y" : "ies"} now set their own card. Delete: ${staleCard.sort().join(", ")}`);
}

console.log(
  `\nScanned ${checked} top-level page(s): ${orphans.length} menu orphan(s), ${sharedCards.length} shared-card page(s), ` +
    `${Object.keys(ORPHAN_OK).length} orphan-excused, ${Object.keys(SHARED_CARD_OK).length} shared-card-excused.`,
);

process.exit(fail ? 1 : 0);
