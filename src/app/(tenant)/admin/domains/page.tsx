import type { Metadata } from "next";
import { requireTenant } from "@/lib/tenant";
import { isPlatformOwner, requireBrandAdmin } from "@/lib/session";
import { listTenantsWithDomains } from "@/db/queries/admin-domains";
import { DomainsAdmin } from "@/components/domains-admin";

export const metadata: Metadata = { title: "Domains" };

// Custom-domain administration. The platform owner maps domains to ANY school; a brand
// admin manages only THEIR school's domains (the list is scoped to their tenant, and
// the API only accepts adds/removes for a tenant they administer).
export default async function DomainsAdminPage() {
  const tenant = await requireTenant();
  const session = await requireBrandAdmin(tenant.id);
  const owner = await isPlatformOwner(session.user.id);

  const all = await listTenantsWithDomains();
  const tenants = owner ? all : all.filter((t) => t.id === tenant.id);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-bold">Custom domains</h1>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        {owner
          ? "Map a custom domain to any school. Each request's host resolves to its school here."
          : `Map a custom domain to ${tenant.name}.`}
      </p>
      <div className="mt-6">
        <DomainsAdmin tenants={tenants} />
      </div>
    </main>
  );
}
