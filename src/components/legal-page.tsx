import type { TenantRecord } from "@/lib/tenant";
import { brandName } from "@/lib/branding";

// Shared shell for the per-tenant legal pages. Content is intentionally a
// per-tenant placeholder for now — real Terms/Privacy/Safety copy is authored
// per brand (and is a launch requirement for BVC). The structure + the 404 when a
// tenant doesn't enable a page is the Phase 2 deliverable.
export function LegalPage({
  tenant,
  title,
  children,
}: {
  tenant: TenantRecord;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="mt-2 text-sm text-neutral-500">{brandName(tenant)}</p>
      <div className="mt-6 space-y-4 text-neutral-700 dark:text-neutral-300">
        {children ?? (
          <p>This content is managed per tenant and will be published before launch.</p>
        )}
      </div>
    </main>
  );
}
