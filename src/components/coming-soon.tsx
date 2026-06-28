import { brandName } from "@/lib/branding";
import type { TenantRecord } from "@/lib/tenant";

// Branded "launching soon" landing for pre-launch schools (tenant.flags.comingSoon).
// Server-resolved branding, so the holding page already wears the brand's colors.
export function ComingSoon({ tenant }: { tenant: TenantRecord }) {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-4 py-20 text-center">
      <p className="text-sm uppercase tracking-widest" style={{ color: "var(--accent)" }}>
        {brandName(tenant)}
      </p>
      <h1 className="mt-3 text-4xl font-bold sm:text-5xl">{tenant.name}</h1>
      {tenant.tagline ? (
        <p className="mt-4 max-w-xl text-lg text-neutral-600 dark:text-neutral-400">{tenant.tagline}</p>
      ) : null}
      <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium dark:border-neutral-700">
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
        Launching soon
      </p>
      <p className="mt-6 max-w-md text-sm text-neutral-500">
        This school is being prepared. Check back soon.
      </p>
    </main>
  );
}
