import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { resolveTenant } from "@/lib/tenant";
import { brandName } from "@/lib/branding";
import { MagicLinkForm } from "@/components/magic-link-form";

export const metadata: Metadata = { title: "Sign in" };

// Outside the (tenant) group so it is NOT behind the age-gate — but still branded
// from the resolved tenant.
export default async function LoginPage() {
  const tenant = await resolveTenant();
  const accent = tenant?.theme.colors?.accent ?? tenant?.theme.themeColor ?? "#111111";
  const style = { "--accent": accent } as CSSProperties;

  return (
    <main style={style} className="mx-auto flex min-h-screen max-w-sm flex-col justify-center gap-6 px-6">
      <div>
        <p className="text-sm uppercase tracking-widest" style={{ color: "var(--accent)" }}>
          {brandName(tenant)}
        </p>
        <h1 className="mt-1 text-2xl font-bold">Sign in</h1>
        <p className="mt-1 text-sm text-neutral-500">No password — we email you a one-time link.</p>
      </div>
      <MagicLinkForm />
    </main>
  );
}
