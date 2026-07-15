"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// Client shell that makes the site header stick to the top of every (tenant) page so the nav
// is always reachable on long lesson pages. The header CONTENT stays a server component
// (site-header.tsx passes it in as children); this shell only owns the two bits that need the
// browser:
//
//   1. --site-header-h. Sub-headers that must stack BELOW the site header (the lesson page's
//      sticky progress bar) offset themselves by this custom property. globals.css carries a
//      static fallback (the header's normal one-row height) for first paint / no-JS; the
//      ResizeObserver here overwrites it with the MEASURED height, so the offset stays exact
//      even if the nav's flex-wrap safety valve ever wraps it to two rows.
//   2. Shadow-when-stuck. A zero-height sentinel sits right above the header; the moment it
//      scrolls out of the viewport the header is stuck and gets a subtle shadow. At rest the
//      header shows only its usual border-b, so the top of the page looks unchanged.
//
// Stacking ladder (root context): lesson progress sub-header z-10 < header z-40 < skip-to-content
// link and full-screen overlays (recording-script-view) z-50. The header's own z-index makes it a
// stacking context, so the nav dropdowns / mobile drawer inside it (z-20/z-30 LOCALLY) paint above
// ALL page content, including the z-10 sub-header. Deliberately z-40, not z-50: the root layout's
// skip link is z-50 and later-in-DOM full-screen overlays must cover the header.
export function StickyHeader({ children }: { children: ReactNode }) {
  const [stuck, setStuck] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header || typeof ResizeObserver === "undefined") return;
    const root = document.documentElement;
    const ro = new ResizeObserver(() => {
      root.style.setProperty("--site-header-h", `${header.offsetHeight}px`);
    });
    ro.observe(header);
    return () => {
      ro.disconnect();
      root.style.removeProperty("--site-header-h");
    };
  }, []);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([entry]) => setStuck(!entry.isIntersecting));
    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* 1px sentinel, pulled back out of the layout by -mb-px so it adds no height. */}
      <div ref={sentinelRef} aria-hidden className="pointer-events-none -mb-px h-px" />
      <header
        ref={headerRef}
        // data-site-header keys the html:has() scroll-padding rule in globals.css, so anchor
        // jumps only compensate for the header on pages that actually render one.
        data-site-header
        className={`sticky top-0 z-40 border-b border-neutral-200 bg-white transition-shadow dark:border-neutral-800 dark:bg-neutral-950 ${
          stuck ? "shadow-md shadow-neutral-900/10 dark:shadow-black/40" : ""
        }`}
      >
        {children}
      </header>
    </>
  );
}
