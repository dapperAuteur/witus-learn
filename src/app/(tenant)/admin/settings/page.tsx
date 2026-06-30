import type { Metadata } from "next";
import Link from "next/link";
import { requireTenant } from "@/lib/tenant";
import { requireBrandAdmin } from "@/lib/session";
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
    gamification: tenant.flags.gamification ?? "light",
    aiTutor: tenant.flags.aiTutor !== false,
    comingSoon: tenant.flags.comingSoon ?? false,
    requiresAgeGate: tenant.requiresAgeGate,
  };

  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <Link href="/admin" className="text-sm text-neutral-500 hover:underline">
        ← Admin
      </Link>
      <h1 className="mt-3 text-2xl font-bold">Brand settings</h1>
      <p className="mt-1 text-sm text-neutral-500">
        Branding and features for {tenant.name}. Changes apply on next load.
      </p>
      <div className="mt-6">
        <TenantSettingsForm initial={initial} />
      </div>
    </main>
  );
}
