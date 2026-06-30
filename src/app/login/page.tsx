import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { resolveTenant } from "@/lib/tenant";
import { brandName } from "@/lib/branding";
import { MagicLinkForm } from "@/components/magic-link-form";
import { WitusSsoButton } from "@/components/witus-sso-button";

export const metadata: Metadata = { title: "Sign in" };

// Outside the (tenant) group so it is NOT behind the age-gate — but still branded
// from the resolved tenant.
export default async function LoginPage() {
  const tenant = await resolveTenant();
  const accent = tenant?.theme.colors?.accent ?? tenant?.theme.themeColor ?? "#111111";
  const accentFg = tenant?.theme.colors?.accentFg ?? "#ffffff";
  const style = { "--accent": accent, "--accent-fg": accentFg } as CSSProperties;

  // Show "Sign in with WitUS" on WitUS-branded surfaces (any *.witus.online host
  // + localhost in dev), or where a tenant explicitly opts in via flags.ecosystemSso.
  // White-label tenants on their OWN domains (bettervice.club, elementarymba.com)
  // never match, so they stay isolated — no per-tenant flag needed.
  const h = await headers();
  const host = (h.get("x-forwarded-host") ?? h.get("host") ?? "").toLowerCase().split(":")[0];
  const isWitusHost =
    host === "witus.online" ||
    host.endsWith(".witus.online") ||
    host === "localhost" ||
    host.endsWith(".localhost");
  const showWitusSso = isWitusHost || tenant?.flags.ecosystemSso === true;

  return (
    <main style={style} className="flex min-h-screen items-center justify-center px-6 py-12">
      <div className="w-full max-w-sm">
        <div className="rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <p className="text-sm font-medium uppercase tracking-widest" style={{ color: "var(--accent)" }}>
            {brandName(tenant)}
          </p>
          <h1 className="mt-1 text-2xl font-bold">Sign in</h1>
          <p className="mt-1 text-sm text-neutral-500">No password — we email you a one-time link.</p>
          <div className="mt-6">
            <MagicLinkForm />
          </div>
          {showWitusSso ? (
            <div className="mt-4">
              <p className="mb-3 text-center text-xs uppercase tracking-wide text-neutral-400">or</p>
              <WitusSsoButton />
            </div>
          ) : null}
        </div>
      </div>
    </main>
  );
}
