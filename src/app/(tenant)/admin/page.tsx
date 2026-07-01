import type { Metadata } from "next";
import Link from "next/link";
import { requireTenant } from "@/lib/tenant";
import { isPlatformOwner, requireBrandAdmin } from "@/lib/session";
import { adminNavFor } from "@/lib/admin-nav";

export const metadata: Metadata = { title: "Admin" };

// Admin landing. The persistent sidebar (admin/layout.tsx) is the primary nav; this page is a
// quick-access overview of the same destinations. Gating + tenant scope are enforced by the
// layout and by each destination page.
export default async function AdminHome() {
  const tenant = await requireTenant();
  const session = await requireBrandAdmin(tenant.id);
  const owner = await isPlatformOwner(session.user.id);
  const cards = adminNavFor(owner);

  return (
    <div className="py-10">
      <h1 className="text-2xl font-bold">Admin</h1>
      <p className="mt-1 text-sm text-neutral-500">
        {owner ? "Platform operator console." : `Manage ${tenant.name}.`}
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="rounded-2xl border border-neutral-200 bg-white p-5 transition hover:border-neutral-300 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
          >
            <h2 className="font-semibold" style={{ color: "var(--accent)" }}>
              <span aria-hidden>{c.icon}</span> {c.title}
            </h2>
            <p className="mt-1 text-sm text-neutral-500">{c.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
