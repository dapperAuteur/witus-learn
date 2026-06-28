import { resolveTenant } from "@/lib/tenant";
import { brandName } from "@/lib/branding";
import { hasDatabase } from "@/lib/env";

// The tenant home (catalog stub). Resolves the brand from the request host so
// the same deployment serves every domain. Phase 3 replaces this with the real
// tenant-scoped catalog.
export default async function HomePage() {
  const tenant = await resolveTenant();

  if (!tenant) {
    return (
      <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center gap-4 px-6">
        <h1 className="text-2xl font-semibold">Learn.WitUS — multi-tenant LMS</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          No tenant is configured for this host
          {hasDatabase ? "." : " (database not configured yet)."} Add a row to{" "}
          <code className="rounded bg-neutral-100 px-1 dark:bg-neutral-800">tenant_domains</code>{" "}
          and visit it on the matching domain — e.g.{" "}
          <code className="rounded bg-neutral-100 px-1 dark:bg-neutral-800">
            bvc.localhost:3040
          </code>
          .
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-4 px-6">
      <p className="text-sm uppercase tracking-widest text-neutral-500">{brandName(tenant)}</p>
      <h1 className="text-4xl font-bold">{tenant.name}</h1>
      {tenant.tagline ? (
        <p className="text-lg text-neutral-600 dark:text-neutral-400">{tenant.tagline}</p>
      ) : null}
      <p className="text-sm text-neutral-500">
        Tenant resolved from host. Catalog, Commodity Map, and learner flow arrive in later phases.
      </p>
    </main>
  );
}
