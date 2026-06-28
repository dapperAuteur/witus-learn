import { requireTenant } from "@/lib/tenant";
import { brandName } from "@/lib/branding";

// Tenant home (catalog stub). The real tenant-scoped catalog + Commodity Map land
// in Phases 3 and 7; this proves host→tenant + branding + age-gate end to end.
export default async function CatalogHome() {
  const tenant = await requireTenant();
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <p className="text-sm uppercase tracking-widest" style={{ color: "var(--accent)" }}>
        {brandName(tenant)}
      </p>
      <h1 className="mt-2 text-4xl font-bold">{tenant.name}</h1>
      {tenant.tagline ? (
        <p className="mt-3 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
          {tenant.tagline}
        </p>
      ) : null}
      <p className="mt-8 text-sm text-neutral-500">
        The course catalog and the Commodity Map arrive in later phases.
      </p>
    </main>
  );
}
