import Link from "next/link";
import type { TenantRecord } from "@/lib/tenant";
import { brandName } from "@/lib/branding";
import { DISCLAIMER_SHORT } from "@/lib/disclaimer";

// Per-tenant footer. Legal links come from tenants.legal — no cross-app footer
// ("your account also works on …"); each brand stands alone.
export function SiteFooter({ tenant }: { tenant: TenantRecord }) {
  const { legal } = tenant;
  return (
    <footer className="mt-12 border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-6 text-sm text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {brandName(tenant)}
        </p>
        <ul className="flex flex-wrap gap-4">
          {/* The platform pitch is the recruiting front door only (404 on a white-label school), so
              gate the link on the same flag to avoid a dead footer entry. */}
          {tenant.flags.recruiting ? (
            <li>
              <Link className="hover:underline" href="/platform">
                Platform
              </Link>
            </li>
          ) : null}
          {/* Public product roadmap — recruiting front door only (404 on a white-label school), so
              gate the link on the same flag as the page it points to. */}
          {tenant.flags.recruiting ? (
            <li>
              <Link className="hover:underline" href="/roadmap">
                Roadmap
              </Link>
            </li>
          ) : null}
          {legal.termsUrl ? (
            <li>
              <Link className="hover:underline" href="/terms">
                Terms
              </Link>
            </li>
          ) : null}
          {legal.privacyUrl ? (
            <li>
              <Link className="hover:underline" href="/privacy">
                Privacy
              </Link>
            </li>
          ) : null}
          {legal.safetyUrl ? (
            <li>
              <Link className="hover:underline" href="/safety">
                Safety
              </Link>
            </li>
          ) : null}
        </ul>
      </div>
      <div className="mx-auto max-w-5xl px-4 pb-6">
        {/* WCAG AA 4.5:1 for 12px text: neutral-500 on white = 4.74:1, dark neutral-400
            on the #0a0a0a page bg = 7.66:1. The old -400/-600 pair sat at ~2.6:1. */}
        <p className="text-xs text-neutral-600 dark:text-neutral-400">{DISCLAIMER_SHORT}</p>
      </div>
    </footer>
  );
}
