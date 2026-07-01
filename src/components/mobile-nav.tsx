"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SignOutButton } from "./sign-out-button";

export interface NavItem {
  href: string;
  label: string;
  accent?: boolean;
}

// Mobile site menu: a hamburger that opens a drawer of the same nav links shown inline on desktop,
// so the menu responds to screen size instead of overflowing/scrolling on small devices
// (mobile-first.md). Closes on link tap, outside tap, or Escape.
export function MobileNav({ items, signedIn }: { items: NavItem[]; signedIn: boolean }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label="Menu"
        className="inline-flex min-h-9 min-w-9 items-center justify-center rounded-md border border-neutral-300 text-lg dark:border-neutral-700"
      >
        {open ? "✕" : "☰"}
      </button>
      {open ? (
        <>
          <div className="fixed inset-0 z-20" onClick={() => setOpen(false)} aria-hidden />
          <div className="absolute right-0 z-30 mt-2 w-56 rounded-lg border border-neutral-200 bg-white p-1 shadow-lg dark:border-neutral-700 dark:bg-neutral-900">
            <ul className="text-sm">
              {items.map((i) => (
                <li key={i.href}>
                  <Link
                    href={i.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                    style={i.accent ? { color: "var(--accent)", fontWeight: 500 } : undefined}
                  >
                    {i.label}
                  </Link>
                </li>
              ))}
              <li className="mt-1 border-t border-neutral-200 px-3 py-2 dark:border-neutral-800">
                {signedIn ? (
                  <SignOutButton />
                ) : (
                  <Link href="/login" onClick={() => setOpen(false)} className="hover:underline">
                    Sign in
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </>
      ) : null}
    </div>
  );
}
