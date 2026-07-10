import Link from "next/link";
import type { TenantRecord } from "@/lib/tenant";
import { brandName } from "@/lib/branding";
import { getMembership, getSession, isPlatformOwner } from "@/lib/session";
import { getActiveLearner } from "@/lib/active-learner";
import { listManagedChildren } from "@/db/queries/family";
import { listCategories } from "@/db/queries/catalog";
import { tenantHasMapData } from "@/db/queries/map";
import { SignOutButton } from "./sign-out-button";
import { ThemeToggle } from "./theme-toggle";
import { MobileNav, type NavItem } from "./mobile-nav";
import { ProfileSwitcher } from "./profile-switcher";
import { ActingAsBanner } from "./acting-as-banner";

// Brand-aware academy header. Nav is driven by the tenant's feature flags — not a
// fixed CentOS module nav. Accent color comes from the --accent CSS var set by the
// tenant layout. Session-aware: Sign in (logged out) ↔ Sign out (logged in).
export async function SiteHeader({ tenant }: { tenant: TenantRecord }) {
  const { flags } = tenant;
  const session = await getSession();
  const owner = session ? await isPlatformOwner(session.user.id) : false;
  const membership = session ? ((await getMembership(session.user.id, tenant.id)) ?? "") : "";
  // Admin: platform owner OR a brand admin. Teach: owner, brand admin, OR instructor.
  const canAdmin = owner || membership === "brand_admin";
  const canTeach = owner || ["instructor", "brand_admin"].includes(membership);

  // Content-driven nav: only show /civics and /languages when this school has that content
  // (both pages 404 otherwise). Keeps the menu relevant per tenant.
  const categories = await listCategories(tenant.id);
  const hasCivics = categories.some((c) => c.name === "Civics");
  const hasLanguages = categories.some((c) => c.name === "Languages");
  // The Commodity Map shows for any school that HAS map data (flag is only a force-hide override).
  const showMap = flags.commodityMap !== false && (await tenantHasMapData(tenant.id));

  // Family Model B "studying as" switcher: only rendered for a parent with ≥1 managed
  // child. The active learner is re-verified server-side on every request (never trusted
  // from a cookie alone) by getActiveLearner.
  const managedChildren = session ? await listManagedChildren(tenant.id, session.user.id) : [];
  const activeLearner = session ? await getActiveLearner(session) : null;

  // One nav model, rendered inline on desktop and in a hamburger drawer on mobile.
  const items: NavItem[] = [
    { href: "/courses", label: "Browse Catalog" },
    ...(flags.recruiting ? [{ href: "/demo", label: "Demo" }] : []),
    { href: "/live", label: "Live" },
    ...(hasCivics ? [{ href: "/civics", label: "Civics" }] : []),
    ...(hasLanguages ? [{ href: "/languages", label: "Languages" }] : []),
    ...(showMap ? [{ href: "/explore", label: "Explore" }] : []),
    ...(flags.paths ? [{ href: "/paths", label: "Paths" }] : []),
    { href: "/instructors", label: "Instructors" },
    ...(session && canTeach ? [{ href: "/teach", label: "Teach", accent: true }] : []),
    ...(session && canTeach ? [{ href: "/help", label: "Help" }] : []),
    ...(session && canAdmin ? [{ href: "/admin", label: "Admin", accent: true }] : []),
    ...(session ? [{ href: "/dashboard", label: "Dashboard" }] : []),
    ...(session ? [{ href: "/cohorts", label: "Cohorts" }] : []),
    ...(session ? [{ href: "/family", label: "Family" }] : []),
    ...(session ? [{ href: "/my-courses", label: "My Courses" }] : []),
    ...(session ? [{ href: "/field-log", label: "My Field Log" }] : []),
  ];

  return (
    <>
      <header className="border-b border-neutral-200 dark:border-neutral-800">
        <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
          <Link
            href="/"
            className="text-lg font-bold focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ color: "var(--accent)" }}
          >
            {tenant.theme.wordmark ?? brandName(tenant)}
          </Link>

          <div className="flex items-center gap-3">
            {managedChildren.length > 0 ? (
              <ProfileSwitcher
                currentId={activeLearner?.isChild ? activeLearner.id : null}
                managedChildren={managedChildren}
              />
            ) : null}

            <ThemeToggle />

            {/* Desktop: inline links */}
            <ul className="hidden items-center gap-4 text-sm md:flex">
              {items.map((i) => (
                <li key={i.href}>
                  <Link
                    className={`hover:underline ${i.accent ? "font-medium" : ""}`}
                    style={i.accent ? { color: "var(--accent)" } : undefined}
                    href={i.href}
                  >
                    {i.label}
                  </Link>
                </li>
              ))}
              <li>{session ? <SignOutButton /> : <Link className="hover:underline" href="/login">Sign in</Link>}</li>
            </ul>

            {/* Mobile: hamburger drawer */}
            <div className="md:hidden">
              <MobileNav items={items} signedIn={Boolean(session)} />
            </div>
          </div>
        </nav>
      </header>
      {activeLearner?.isChild ? (
        <ActingAsBanner childName={activeLearner.name ?? "your child"} />
      ) : null}
    </>
  );
}
