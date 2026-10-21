"use client";

import { useEffect } from "react";
import { offlineHardNavigationTarget } from "@/lib/offline-links";

/**
 * While offline, makes in-app link clicks load the page in full, so the service worker can answer
 * them from its saved and visited copies. See src/lib/offline-links.ts for why and for exactly
 * which clicks qualify. Mounted once in the root layout; renders nothing.
 *
 * The listener is on `window` in the CAPTURE phase. React (and so next/link) listens on the
 * document, below window, so this runs first, and stopping the event here keeps the router from
 * also starting a client navigation. It does nothing at all while `navigator.onLine` is true.
 */
export function OfflineLinkFallback() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (navigator.onLine !== false) return;
      const anchor = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (!(anchor instanceof HTMLAnchorElement)) return;
      const href = offlineHardNavigationTarget(event, anchor, window.location);
      if (!href) return;
      event.preventDefault();
      event.stopPropagation();
      window.location.assign(href);
    }
    window.addEventListener("click", onClick, { capture: true });
    return () => window.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
