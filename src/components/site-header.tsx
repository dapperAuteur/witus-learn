import Link from "next/link";
import type { TenantRecord } from "@/lib/tenant";
import { brandName } from "@/lib/branding";

// Brand-aware academy header. Nav is driven by the tenant's feature flags — not a
// fixed CentOS module nav. Accent color comes from the --accent CSS var set by the
// tenant layout.
export function SiteHeader({ tenant }: { tenant: TenantRecord }) {
  const { flags } = tenant;
  return (
    <header className="border-b border-neutral-200 dark:border-neutral-800">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <Link
          href="/"
          className="text-lg font-bold focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{ color: "var(--accent)" }}
        >
          {tenant.theme.wordmark ?? brandName(tenant)}
        </Link>
        <ul className="flex items-center gap-4 text-sm">
          {flags.commodityMap ? (
            <li>
              <Link className="hover:underline" href="/explore">
                Explore
              </Link>
            </li>
          ) : null}
          {flags.paths ? (
            <li>
              <Link className="hover:underline" href="/paths">
                Paths
              </Link>
            </li>
          ) : null}
          <li>
            <Link className="hover:underline" href="/my-courses">
              My Courses
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
