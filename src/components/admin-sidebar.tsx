"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { AdminNavItem } from "@/lib/admin-nav";

// Persistent admin navigation. Desktop: a fixed left rail. Mobile: a top bar with a hamburger
// that opens a drawer (so the nav responds to screen size instead of overflowing — see
// mobile-first.md). Active item is highlighted via the current path.
export function AdminSidebar({ items, heading }: { items: AdminNavItem[]; heading: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  const nav = (
    <nav className="space-y-1">
      {items.map((i) => {
        const active = isActive(i.href);
        return (
          <Link
            key={i.href}
            href={i.href}
            onClick={() => setOpen(false)}
            aria-current={active ? "page" : undefined}
            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition ${
              active
                ? "bg-neutral-100 font-medium dark:bg-neutral-800"
                : "text-neutral-600 hover:bg-neutral-50 dark:text-neutral-300 dark:hover:bg-neutral-800/60"
            }`}
          >
            <span aria-hidden>{i.icon}</span>
            <span className="truncate">{i.title}</span>
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Mobile bar */}
      <div className="mb-2 flex items-center justify-between pt-6 md:hidden">
        <span className="font-semibold">{heading}</span>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Toggle admin menu"
          className="inline-flex min-h-9 items-center gap-1.5 rounded-md border border-neutral-300 px-3 text-sm dark:border-neutral-700"
        >
          ☰ Menu
        </button>
      </div>
      {open ? (
        <div className="mb-4 rounded-lg border border-neutral-200 p-2 md:hidden dark:border-neutral-800">{nav}</div>
      ) : null}

      {/* Desktop rail — pt-10 matches each page's own py-10 so the rail top-aligns with content. */}
      <aside className="hidden w-56 shrink-0 pt-10 md:block">
        <div className="sticky top-6">
          <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wide text-neutral-400">{heading}</p>
          {nav}
        </div>
      </aside>
    </>
  );
}
