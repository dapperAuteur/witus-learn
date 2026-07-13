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
}
