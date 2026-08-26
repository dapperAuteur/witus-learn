import type { Metadata } from "next";
import Link from "next/link";
import { requireTenant } from "@/lib/tenant";
import { isPlatformOwner, requireBrandAdmin } from "@/lib/session";
import { adminNavFor } from "@/lib/admin-nav";
import { adminStatTiles } from "@/lib/admin-home";
import { getAdminStats } from "@/db/queries/admin-dashboard";
import { countOpenProblemReports } from "@/db/queries/problem-reports";
import { countOpenFeedback } from "@/db/queries/feedback";
import { countLeads } from "@/db/queries/leads";
import { countPendingMediaAssets } from "@/db/queries/media-assets";
import { countUpcomingLiveSessions } from "@/db/queries/live";

export const metadata: Metadata = { title: "Admin" };

// Admin landing: a consolidated overview (headline counts, each linking to the surface where the
// admin acts on it) above the full quick-access nav grid. The persistent sidebar
// (admin/layout.tsx) remains the primary nav. Gating mirrors the rest of /admin: brand admin of
// the host-resolved tenant, with owner-only counts (feedback / media / live, the ownerOnly nav
// surfaces) fetched only for the platform owner. Every count is tenant-scoped through the
// existing query helpers.
export default async function AdminHome() {
  const tenant = await requireTenant();
  const session = await requireBrandAdmin(tenant.id);
  const owner = await isPlatformOwner(session.user.id);
  const cards = adminNavFor(owner);

  const [stats, openReports, leads, openFeedback, pendingMedia, upcomingLive] = await Promise.all([
    getAdminStats(tenant.id),
    countOpenProblemReports(tenant.id),
    countLeads(tenant.id),
    owner ? countOpenFeedback(tenant.id) : Promise.resolve(null),
    owner ? countPendingMediaAssets(tenant.id) : Promise.resolve(null),
    owner ? countUpcomingLiveSessions(tenant.id) : Promise.resolve(null),
  ]);

  const tiles = adminStatTiles({ stats, openReports, leads, openFeedback, pendingMedia, upcomingLive });

  return (
    <div className="py-10">
      <h1 className="text-2xl font-bold">Admin</h1>
      <p className="mt-1 text-sm text-neutral-600">
        {owner ? "Platform operator console." : `Manage ${tenant.name}.`}
      </p>

      <section aria-labelledby="admin-at-a-glance" className="mt-6">
        <h2 id="admin-at-a-glance" className="text-sm font-semibold uppercase tracking-wide text-neutral-600">
          At a glance
        </h2>
        <ul className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {tiles.map((t) => (
            <li key={`${t.href}-${t.label}`}>
              <Link
                href={t.href}
                className="block min-h-11 rounded-2xl border border-neutral-200 bg-white p-4 transition hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-800 dark:bg-neutral-900"
                style={t.attention ? { borderColor: "var(--accent)" } : undefined}
              >
                <span className="block text-2xl font-bold tabular-nums" style={{ color: "var(--accent)" }}>
                  {t.value}
                </span>
                <span className="mt-0.5 block text-sm font-medium">{t.label}</span>
                {t.hint ? <span className="mt-0.5 block text-xs text-neutral-600">{t.hint}</span> : null}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="admin-all-tools" className="mt-8">
        <h2 id="admin-all-tools" className="text-sm font-semibold uppercase tracking-wide text-neutral-600">
          All tools
        </h2>
        <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="rounded-2xl border border-neutral-200 bg-white p-5 transition hover:border-neutral-300 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
            >
              <h3 className="font-semibold" style={{ color: "var(--accent)" }}>
                <span aria-hidden>{c.icon}</span> {c.title}
              </h3>
              <p className="mt-1 text-sm text-neutral-600">{c.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
