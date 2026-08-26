import type { Metadata } from "next";
import Link from "next/link";
import { requireTenant } from "@/lib/tenant";
import { requireBrandAdmin } from "@/lib/session";
import { brandName } from "@/lib/branding";
import { TenantSettingsForm, type TenantSettings } from "@/components/tenant-settings-form";

export const metadata: Metadata = { title: "Brand settings" };

// Brand admins (and the platform owner) edit the current brand's branding + flags.
export default async function SettingsPage() {
  const tenant = await requireTenant();
  await requireBrandAdmin(tenant.id);

  const initial: TenantSettings = {
    name: tenant.name,
    tagline: tenant.tagline ?? "",
    accent: tenant.theme.colors?.accent ?? tenant.theme.themeColor ?? "#2563eb",
    accentFg: tenant.theme.colors?.accentFg ?? "#ffffff",
    wordmark: tenant.theme.wordmark ?? "",
    shortName: tenant.theme.shortName ?? "",
    logoUrl: tenant.theme.logoUrl ?? "",
    faviconUrl: tenant.theme.faviconUrl ?? "",
    ogDefaultUrl: tenant.theme.ogDefaultUrl ?? "",
    themeColor: tenant.theme.themeColor ?? "",
    gamification: tenant.flags.gamification ?? "light",
    aiTutor: tenant.flags.aiTutor !== false,
    comingSoon: tenant.flags.comingSoon ?? false,
    commodityMap: tenant.flags.commodityMap === true,
    requiresAgeGate: tenant.requiresAgeGate,
    paths: tenant.flags.paths === true,
    leadFunnel: tenant.flags.leadFunnel === true,
  };

  return (
    <main className="max-w-2xl py-10">
      <Link href="/admin" className="text-sm text-neutral-600 hover:underline">
        ← Admin
      </Link>
      <h1 className="mt-3 text-2xl font-bold">Brand settings</h1>
      <p className="mt-1 text-sm text-neutral-600">
        Branding and features for {tenant.name}. Changes apply on next load.
      </p>
      <BrandPreviewCard tenant={tenant} />
      <div className="mt-6">
        <TenantSettingsForm initial={initial} />
      </div>
    </main>
  );
}

// Server-rendered preview of the SAVED brand: exactly what the resolved tenant row renders
// today (header wordmark via brandName, logo, tagline, accent), so an admin sees the live
// state before editing. The form below previews unsaved accent changes on its own.
function BrandPreviewCard({ tenant }: { tenant: Awaited<ReturnType<typeof requireTenant>> }) {
  const accent = tenant.theme.colors?.accent ?? tenant.theme.themeColor ?? "#111111";
  const accentFg = tenant.theme.colors?.accentFg ?? "#ffffff";
  return (
    <section aria-label="Current brand preview" className="mt-6 overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
      <div className="h-1.5" style={{ backgroundColor: accent }} />
      <div className="flex items-center gap-3 bg-white p-4 dark:bg-neutral-900">
        {tenant.theme.logoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element -- tenant-provided logo URL, shown as-is
          <img src={tenant.theme.logoUrl} alt={`${brandName(tenant)} logo`} loading="lazy" className="h-12 w-12 flex-none rounded-lg border border-neutral-200 bg-white object-contain dark:border-neutral-800" />
        ) : (
          <span aria-hidden className="flex h-12 w-12 flex-none items-center justify-center rounded-lg text-lg font-bold" style={{ backgroundColor: accent, color: accentFg }}>
            {brandName(tenant).slice(0, 1)}
          </span>
        )}
        <div className="min-w-0">
          <p className="truncate font-semibold">{tenant.theme.wordmark ?? brandName(tenant)}</p>
          {tenant.tagline ? <p className="truncate text-sm text-neutral-600">{tenant.tagline}</p> : null}
        </div>
        <span className="ml-auto flex-none rounded-full px-3 py-1 text-xs font-semibold" style={{ backgroundColor: accent, color: accentFg }}>
          Saved brand
        </span>
      </div>
    </section>
  );
}
