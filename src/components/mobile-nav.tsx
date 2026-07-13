"use client";

import { useEffect, useRef, useState, type FocusEvent, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignOutButton } from "./sign-out-button";
import type { NavItem } from "./nav-types";

export type { NavItem };

// Mobile site menu: a hamburger that opens a drawer grouping the same links shown as dropdowns
// on desktop (nav-menu.tsx) into labeled sections — Explore / Teach / Account — instead of one
// long flat list. The drawer scrolls vertically only (max-h + overflow-y-auto), never
// horizontally, so it can never be the source of the horizontal-overflow bug (mobile-first.md).
// Closes on link tap, outside tap, Escape, or route change.
const linkClass =
  "block min-h-11 rounded-md px-3 py-2 leading-7 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-neutral-800";

export function MobileNav({
  primaryItems,
  showDemo,
  exploreItems,
  teachItems,
  accountItems,
  signedIn,
}: {
  primaryItems: NavItem[];
  showDemo: boolean;
  exploreItems: NavItem[];
  teachItems: NavItem[];
  accountItems: NavItem[];
  signedIn: boolean;
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  // Close whenever the route changes so navigating never leaves a stale drawer open. Computed
  // during render (the React-recommended "adjusting state on prop change" pattern) rather than
  // in an effect, so it can't cause a cascading extra render.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    function onPointerDown(e: MouseEvent | TouchEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [open]);

  // No full focus trap, but tabbing (or clicking, handled above) out of the trigger+panel
  // group closes the drawer rather than leaving it open over unrelated page content.
  function onBlur(e: FocusEvent<HTMLDivElement>) {
    if (!e.relatedTarget || !containerRef.current?.contains(e.relatedTarget as Node)) {
      setOpen(false);
    }
  }

  function renderLink(i: NavItem) {
    return (
      <li key={i.href}>
        <Link
          href={i.href}
          onClick={() => setOpen(false)}
          className={linkClass}
          style={i.accent ? { color: "var(--accent)", fontWeight: 500 } : undefined}
        >
          {i.label}
        </Link>
      </li>
    );
  }

  function renderSection(heading: string, sectionItems: NavItem[], trailing?: ReactNode) {
    if (sectionItems.length === 0 && !trailing) return null;
    return (
      <li className="mt-2 border-t border-neutral-200 pt-2 dark:border-neutral-800">
        <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
          {heading}
        </p>
        <ul>
          {sectionItems.map(renderLink)}
          {trailing ? <li>{trailing}</li> : null}
        </ul>
      </li>
    );
  }

  return (
    <div ref={containerRef} className="relative" onBlur={onBlur}>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label="Menu"
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-neutral-300 text-lg focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700"
      >
        {open ? "✕" : "☰"}
      </button>
      {open ? (
        <>
          <div className="fixed inset-0 z-20" onClick={() => setOpen(false)} aria-hidden />
          <div
            id="mobile-nav-panel"
            className="absolute right-0 z-30 mt-2 max-h-[80vh] w-64 overflow-y-auto overflow-x-hidden rounded-lg border border-neutral-200 bg-white p-1 shadow-lg dark:border-neutral-700 dark:bg-neutral-900"
          >
            <ul className="text-sm">
              {primaryItems.map(renderLink)}
              {showDemo ? renderLink({ href: "/demo", label: "Demo" }) : null}
              {renderSection("Explore", exploreItems)}
              {renderSection("Teach", teachItems)}
              {signedIn ? (
                renderSection(
                  "Account",
                  accountItems,
                  <SignOutButton className={`${linkClass} w-full text-left`} />,
                )
              ) : (
                <li className="mt-2 border-t border-neutral-200 pt-2 dark:border-neutral-800">
                  <Link href="/login" onClick={() => setOpen(false)} className={linkClass}>
                    Sign in
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </>
      ) : null}
    </div>
  );
}
