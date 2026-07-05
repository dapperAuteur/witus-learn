import type { Metadata } from "next";
import { requirePlatformOwner } from "@/lib/session";
import { requireTenant } from "@/lib/tenant";
import { getTracker } from "@/db/queries/tracker";
import { DocumentarianTracker } from "@/components/documentarian-tracker";

export const metadata: Metadata = { title: "Documentarian program" };

// Owner-only tracker for the Documentarian course family (see
// plans/future/12-documentarian-program.md). Check items off + leave notes/comments;
// state persists in platform_settings and is readable with `pnpm tracker:show`.
export default async function DocumentarianAdminPage() {
  await requirePlatformOwner();
  const tenant = await requireTenant();
  const state = await getTracker(tenant.id);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-bold">Documentarian program</h1>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        The build tracker for the “trusted documentarian” course family — a shared trust core, a
        standalone Archives &amp; Records course, a Words → Sound → Motion medium ladder, and medium ×
        subject specializations, all sourced from the Ghana trip. Check things off and leave notes as
        you go; the full plan lives in <span className="font-mono">plans/future/12-documentarian-program.md</span>.
      </p>
      <div className="mt-6">
        <DocumentarianTracker initial={state} />
      </div>
    </main>
  );
}
