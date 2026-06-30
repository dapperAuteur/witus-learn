import type { Metadata } from "next";
import Link from "next/link";
import { requireTenant } from "@/lib/tenant";
import { requirePlatformOwner } from "@/lib/session";

export const metadata: Metadata = { title: "Admin" };

const CARDS: { href: string; title: string; desc: string; soon?: boolean }[] = [
  { href: "/admin/settings", title: "Brand settings", desc: "Accent, branding, gamification, AI tutor, age-gate, coming-soon." },
  { href: "/admin/domains", title: "Domains", desc: "Map custom domains to schools." },
  { href: "/admin/marketing", title: "Marketing", desc: "Promo codes now; email campaigns soon." },
  { href: "/admin/leads", title: "Leads", desc: "Lead funnel signups." },
  { href: "/admin/paths", title: "Learning paths", desc: "Sequence courses into guided paths." },
  { href: "/admin/live", title: "Live", desc: "Schedule and run live sessions." },
  { href: "/admin/roadmap", title: "Roadmap", desc: "Internal progress tracker." },
];

// Consolidated owner console — one home for every operator surface (was scattered
// links on /teach).
export default async function AdminHome() {
  const tenant = await requireTenant();
  await requirePlatformOwner();

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-2xl font-bold">Admin</h1>
      <p className="mt-1 text-sm text-neutral-500">Operator console for {tenant.name}.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map((c) =>
          c.soon ? (
            <div key={c.href} className="rounded-2xl border border-dashed border-neutral-300 bg-white p-5 opacity-70 dark:border-neutral-700 dark:bg-neutral-900">
              <div className="flex items-center gap-2">
                <h2 className="font-semibold">{c.title}</h2>
                <span className="rounded-full bg-neutral-200 px-2 py-0.5 text-xs text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300">Soon</span>
              </div>
              <p className="mt-1 text-sm text-neutral-500">{c.desc}</p>
            </div>
          ) : (
            <Link
              key={c.href}
              href={c.href}
              className="rounded-2xl border border-neutral-200 bg-white p-5 transition hover:border-neutral-300 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
            >
              <h2 className="font-semibold" style={{ color: "var(--accent)" }}>{c.title}</h2>
              <p className="mt-1 text-sm text-neutral-500">{c.desc}</p>
            </Link>
          ),
        )}
      </div>
    </main>
  );
}
