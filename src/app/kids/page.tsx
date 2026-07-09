import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { resolveTenant } from "@/lib/tenant";
import { brandName } from "@/lib/branding";
import { KidSignIn } from "@/components/kid-sign-in";

export const metadata: Metadata = { title: "Student sign in" };

// Kid sign-in (avatar + PIN). Outside the (tenant) group so it is NOT behind the age-gate
// — but still branded from the resolved tenant. The whole flow (class code → avatar grid
// → PIN pad) is client-side and talks only to /api/kid-login/* — no child is ever listed
// without a valid class code (see src/db/queries/kid-login.ts).
export default async function KidsPage() {
  const tenant = await resolveTenant();
  const accent = tenant?.theme.colors?.accent ?? tenant?.theme.themeColor ?? "#111111";
  const accentFg = tenant?.theme.colors?.accentFg ?? "#ffffff";
  const style = { "--accent": accent, "--accent-fg": accentFg } as CSSProperties;

  return (
    <main style={style} className="flex min-h-screen items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <p className="text-center text-sm font-medium uppercase tracking-widest" style={{ color: "var(--accent)" }}>
          {brandName(tenant)}
        </p>
        <KidSignIn />
      </div>
    </main>
  );
}
