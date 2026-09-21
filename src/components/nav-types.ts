// Shared nav-item shape used by the desktop dropdowns (nav-menu.tsx), the mobile drawer
// (mobile-nav.tsx), and the item lists computed in site-header.tsx.
export interface NavItem {
  href: string;
  label: string;
  accent?: boolean;
  /**
   * Render a real <a> (hard document navigation) instead of a client-side <Link>.
   *
   * Needed for the offline-first pages that live OUTSIDE the `(tenant)` route group — today
   * `/downloads`. A <Link> navigation issues an RSC fetch, which simply fails with no network;
   * only a hard navigation is a `request.mode === "navigate"` the service worker can answer
   * from its precache (public/sw.js). Same reason the page itself, `OfflineDownloadsSummary`,
   * and `SaveOfflineButton` all use raw <a href="/downloads">.
   */
  hardNav?: boolean;
  /**
   * A count to show beside the label (today: parent/teacher contact pings waiting on /family and
   * /cohorts). It is a SIGNAL pointing at the page where the thing already lives, never a link to an
   * inbox; see CLAUDE.md, no-inbox rule. Zero or absent renders nothing.
   */
  badge?: number;
}

/** Sum of item badges, for the dot on a collapsed menu trigger (desktop Account, mobile hamburger). */
export function badgeTotal(items: NavItem[]): number {
  return items.reduce((n, i) => n + (i.badge ?? 0), 0);
}
