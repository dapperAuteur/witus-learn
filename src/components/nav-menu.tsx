"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import type { KeyboardEvent as ReactKeyboardEvent, FocusEvent as ReactFocusEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "./nav-types";

// Accessible disclosure dropdown for a group of nav links (Explore / Teach / Account in
// site-header.tsx). Groups the ~16 flat nav items the header used to render inline into a
// handful of short top-level targets so the bar never overflows horizontally (mobile-first.md).
//
// A11y contract:
// - `aria-haspopup`/`aria-expanded`/`aria-controls` on the trigger button.
// - Enter/Space on the trigger opens (native <button> behavior) and focuses the first item.
// - ArrowDown/ArrowUp/Home/End move focus between items (and the optional trailing action).
// - Escape closes and returns focus to the trigger.
// - Outside click/tap closes.
// - Tabbing (or clicking) out of the trigger+panel group closes it.
// - Route change closes it (usePathname) so the panel never lingers over the new page.
export function NavMenu({
  label,
  items,
  accent,
  trailing,
}: {
  label: string;
  items: NavItem[];
  accent?: boolean;
  trailing?: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const panelId = useId();

  // Close whenever the route changes so navigating never leaves a stale panel open. Computed
  // during render (the React-recommended "adjusting state on prop change" pattern) rather than
  // in an effect, so it can't cause a cascading extra render.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;

    // Standard menu-button behavior: focus the first item as soon as the panel opens,
    // regardless of whether it was opened by mouse or keyboard.
    const first = panelRef.current?.querySelector<HTMLElement>("[data-menu-item]");
    first?.focus();

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

  function onPanelKeyDown(e: ReactKeyboardEvent<HTMLUListElement>) {
    const focusable = Array.from(
      panelRef.current?.querySelectorAll<HTMLElement>("[data-menu-item]") ?? [],
    );
    if (focusable.length === 0) return;
    const idx = focusable.indexOf(document.activeElement as HTMLElement);
    if (e.key === "ArrowDown") {
      e.preventDefault();
      focusable[(idx + 1 + focusable.length) % focusable.length]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      focusable[(idx - 1 + focusable.length) % focusable.length]?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      focusable[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      focusable[focusable.length - 1]?.focus();
    }
  }

  // Tabbing past the last item (or the trigger, going backwards) moves focus outside the
  // trigger+panel group — close in that case. relatedTarget is null for the mouse clicks the
  // document listener above already handles, so this only fires for keyboard focus moves.
  function onBlur(e: ReactFocusEvent<HTMLDivElement>) {
    if (!e.relatedTarget || !containerRef.current?.contains(e.relatedTarget as Node)) {
      setOpen(false);
    }
  }

  return (
    <div ref={containerRef} className="relative" onBlur={onBlur}>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={panelId}
        className={`inline-flex min-h-11 items-center gap-1 rounded-md px-2 py-2 text-sm hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 ${accent ? "font-medium" : ""}`}
        style={accent ? { color: "var(--accent)" } : undefined}
      >
        {label}
        <span aria-hidden className="text-xs">
          ▾
        </span>
      </button>
      {open ? (
        <ul
          id={panelId}
          ref={panelRef}
          role="menu"
          aria-label={label}
          onKeyDown={onPanelKeyDown}
          className="absolute right-0 z-30 mt-2 w-56 rounded-lg border border-neutral-200 bg-white p-1 text-sm shadow-lg dark:border-neutral-700 dark:bg-neutral-900"
        >
          {items.map((i) => (
            <li key={i.href} role="none">
              <Link
                href={i.href}
                role="menuitem"
                data-menu-item
                onClick={() => setOpen(false)}
                className="block min-h-11 rounded-md px-3 py-2 leading-7 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-neutral-800"
                style={i.accent ? { color: "var(--accent)", fontWeight: 500 } : undefined}
              >
                {i.label}
              </Link>
            </li>
          ))}
          {trailing ? (
            <li
              role="none"
              className="mt-1 border-t border-neutral-200 pt-1 dark:border-neutral-800"
            >
              {trailing}
            </li>
          ) : null}
        </ul>
      ) : null}
    </div>
  );
}
