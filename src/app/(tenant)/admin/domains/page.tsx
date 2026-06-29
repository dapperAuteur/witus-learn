import type { Metadata } from "next";
import { requirePlatformOwner } from "@/lib/session";
import { listTenantsWithDomains } from "@/db/queries/admin-domains";
import { DomainsAdmin } from "@/components/domains-admin";

export const metadata: Metadata = { title: "Domains" };

// Platform-owner domain administration: map custom domains to schools. Self-serve
// custom domains — add a domain + align it to a school, with DNS setup guidance.
export default async function DomainsAdminPage() {
  await requirePlatformOwner();
  const tenants = await listTenantsWithDomains();

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-bold">Custom domains</h1>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        Map a custom domain to any school. Each request&apos;s host resolves to its school here, so a
        domain only goes live for the school you map it to.
      </p>
      <div className="mt-6">
        <DomainsAdmin tenants={tenants} />
      </div>
    </main>
  );
}
