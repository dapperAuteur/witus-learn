/**
 * Which link clicks to turn into a full page load while the browser is offline.
 *
 * A next/link click fetches an RSC payload instead of the page. Offline, public/sw.js can answer
 * that only with a payload remembered for the identical navigation, which is rare; it CAN answer a
 * document request from its saved and visited copies. Next does fall back to a full load when the
 * payload fetch fails, but only after the failed fetch, and not at all when a stale payload is
 * found. So while `navigator.onLine` is false, an in-app link click skips the router and loads the
 * page directly. Online, nothing changes.
 *
 * Pure and DOM-light so it is unit-tested without a browser: the caller passes the click and where
 * the page is now.
 */

/** The parts of a click this decision reads. A real MouseEvent satisfies it. */
export type LinkClick = {
  button: number;
  metaKey: boolean;
  ctrlKey: boolean;
  shiftKey: boolean;
  altKey: boolean;
  defaultPrevented: boolean;
};

/** The parts of the clicked <a> this decision reads. A real HTMLAnchorElement satisfies it. */
export type ClickedAnchor = {
  href: string;
  target: string;
  hasAttribute(name: string): boolean;
};

/**
 * The URL to load in full, or null to leave the click alone.
 *
 * Left alone: a modified or non-primary click (new tab, new window, download), one some other
 * handler already took, a link that opens elsewhere or downloads, another origin, a non-http(s)
 * scheme, and a jump within the current page (same path and query, only the #fragment differs),
 * which needs no network at all.
 */
export function offlineHardNavigationTarget(
  click: LinkClick,
  anchor: ClickedAnchor,
  current: { href: string },
): string | null {
  if (click.defaultPrevented || click.button !== 0) return null;
  if (click.metaKey || click.ctrlKey || click.shiftKey || click.altKey) return null;
  if (anchor.target && anchor.target !== "_self") return null;
  if (anchor.hasAttribute("download")) return null;

  let to: URL;
  let here: URL;
  try {
    here = new URL(current.href);
    to = new URL(anchor.href, here);
  } catch {
    return null;
  }
  if (to.protocol !== "http:" && to.protocol !== "https:") return null;
  if (to.origin !== here.origin) return null;
  if (to.pathname === here.pathname && to.search === here.search && to.hash !== "") return null;
  return to.href;
}
