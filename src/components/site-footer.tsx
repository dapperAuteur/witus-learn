import Link from "next/link";
import type { TenantRecord } from "@/lib/tenant";
import { brandName } from "@/lib/branding";

// Per-tenant footer. Legal links come from tenants.legal — no cross-app footer
// ("your account also works on …"); each brand stands alone.
export function SiteFooter({ tenant }: { tenant: TenantRecord }) {
  const { legal } = tenant;
  return (
    <footer className="mt-12 border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-6 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {brandName(tenant)}
        </p>
        <ul className="flex flex-wrap gap-4">
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
    </footer>
  );
}
