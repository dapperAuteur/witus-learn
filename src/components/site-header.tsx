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
import { MobileNav } from "./mobile-nav";
import { NavMenu } from "./nav-menu";
import type { NavItem } from "./nav-types";
import { ProfileSwitcher } from "./profile-switcher";
import { ActingAsBanner } from "./acting-as-banner";
import { StickyHeader } from "./sticky-header";

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

  // Nav model: a short list of always-inline targets, plus three grouped dropdowns
  // (Explore / Teach / Account) so the bar never grows past ~5 top-level targets no matter how
  // many tenant flags/roles are active (mobile-first.md). Every link + its exact gating from the
  // old flat list is preserved — just bucketed instead of inlined.
  const primaryItems: NavItem[] = [
    { href: "/courses", label: "Browse Catalog" },
    { href: "/live", label: "Live" },
  ];
  const showDemo = Boolean(flags.recruiting);

  // Content-driven links the tenant actually has, plus the always-on Instructors directory.
  const exploreItems: NavItem[] = [
    // Every multi-course path this brand teaches, with where to start. Ungated: it degrades to an
    // honest "no multi-course paths yet" on a school that has none, which is a true answer rather
    // than a dead link, and it is how a learner discovers a series exists at all.
    { href: "/series", label: "Course paths" },
    ...(hasCivics ? [{ href: "/civics", label: "Civics" }] : []),
    ...(hasLanguages ? [{ href: "/languages", label: "Languages" }] : []),
    ...(showMap ? [{ href: "/explore", label: "Explore" }] : []),
    ...(flags.paths ? [{ href: "/paths", label: "Paths" }] : []),
    { href: "/instructors", label: "Instructors" },
    // Bundles is a per-tenant commerce page (works on any school), so it is always available.
    { href: "/bundles", label: "Bundles" },
    // The recruiting front door's marketing/discovery pages: the per-audience landing pages
    // (/for + /for/<audience>) and the brand directory (/schools). Both 404 on a white-label school
    // (tenant.flags.recruiting), so gate the links on the SAME flag or they would be dead menu entries.
    ...(flags.recruiting
      ? [
          { href: "/for", label: "Who it's for" },
          { href: "/schools", label: "Our schools" },
        ]
      : []),
  ];

  // Only rendered for instructors/brand admins/the platform owner (canTeach). The two
  // standards links point at the same shared dataset from opposite ends: the per-state finder
  // (pick a state) and the cross-state explorer (one searchable table across every state). One
  // array feeds both the desktop dropdown (NavMenu) and the mobile drawer (MobileNav).
  const teachItems: NavItem[] = [
    ...(session && canTeach ? [{ href: "/teach", label: "Teach", accent: true }] : []),
    ...(session && canTeach ? [{ href: "/help", label: "Help" }] : []),
    ...(session && canTeach ? [{ href: "/academic-standards", label: "Standards by state" }] : []),
    ...(session && canTeach ? [{ href: "/academic-standards/matrix", label: "Standards explorer" }] : []),
    ...(session && canAdmin ? [{ href: "/admin", label: "Admin", accent: true }] : []),
  ];
  const showTeachMenu = Boolean(session) && canTeach && teachItems.length > 0;

  // Only rendered when signed in; Sign out is appended as the trailing action in both the
  // desktop dropdown and the mobile drawer's Account section. ONE array feeds both the desktop
  // dropdown (NavMenu) and the mobile drawer (MobileNav), so an item added here lights up both.
  //
  // Downloads is `hardNav` — a real <a>, not a <Link>. /downloads lives outside the (tenant)
  // route group precisely so it needs no tenant/session/DB call and the service worker can serve
  // it with zero network; a <Link> would issue an RSC fetch that fails the moment the learner is
  // offline, i.e. exactly when they reach for this menu. Gating the LINK on a session is fine —
  // the PAGE stays open to anyone at /downloads (never gate it), because its whole contract is
  // "renderable from cache with no session lookup".
  const accountItems: NavItem[] = session
    ? [
        { href: "/dashboard", label: "Dashboard" },
        { href: "/cohorts", label: "Cohorts" },
        { href: "/family", label: "Family" },
        { href: "/my-courses", label: "My Courses" },
        { href: "/field-log", label: "My Field Log" },
        { href: "/downloads", label: "Downloads", hardNav: true },
      ]
    : [];

  return (
    <>
      {/* Sticky (StickyHeader, a client shell) so the nav is reachable from anywhere on a long
          lesson page. Only the bar itself sticks, the acting-as banner below stays OUTSIDE it
          on purpose: the parent it addresses already has a persistent "Studying as <child>"
          signal pinned in the bar (the ProfileSwitcher renders for exactly the people who see
          the banner), so pinning the banner too would only spend scarce vertical space on small
          screens and make the header's height vary, which the lesson page's sub-header offset
          (--site-header-h) would then have to chase. */}
      <StickyHeader>
        <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-3">
          <Link
            href="/"
            className="min-w-0 truncate text-lg font-bold focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ color: "var(--accent)" }}
          >
            {tenant.theme.wordmark ?? brandName(tenant)}
          </Link>

          <div className="flex items-center gap-2">
            {managedChildren.length > 0 ? (
              <ProfileSwitcher
                currentId={activeLearner?.isChild ? activeLearner.id : null}
                managedChildren={managedChildren}
              />
            ) : null}

            <ThemeToggle />

            {/* Desktop: short top bar + grouped dropdowns (never overflows: ~5 targets max) */}
            <ul className="hidden items-center gap-1 text-sm md:flex">
              {primaryItems.map((i) => (
                <li key={i.href}>
                  <Link
                    className="inline-flex min-h-11 items-center px-2 py-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2"
                    href={i.href}
                  >
                    {i.label}
                  </Link>
                </li>
              ))}
              <li>
                <NavMenu label="Explore" items={exploreItems} />
              </li>
              {showDemo ? (
                <li>
                  <Link
                    className="inline-flex min-h-11 items-center px-2 py-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2"
                    href="/demo"
                  >
                    Demo
                  </Link>
                </li>
              ) : null}
              {showTeachMenu ? (
                <li>
                  <NavMenu label="Teach" items={teachItems} accent />
                </li>
              ) : null}
              {session ? (
                <li>
                  <NavMenu
                    label="Account"
                    items={accountItems}
                    trailing={
                      <SignOutButton
                        menuItem
                        className="block min-h-11 w-full rounded-md px-3 py-2 text-left leading-7 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-neutral-800"
                      />
                    }
                  />
                </li>
              ) : (
                <li>
                  <Link
                    className="inline-flex min-h-11 items-center px-2 py-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2"
                    href="/login"
                  >
                    Sign in
                  </Link>
                </li>
              )}
            </ul>

            {/* Mobile: hamburger drawer, grouped into the same Explore/Teach/Account sections */}
            <div className="md:hidden">
              <MobileNav
                primaryItems={primaryItems}
                showDemo={showDemo}
                exploreItems={exploreItems}
                teachItems={showTeachMenu ? teachItems : []}
                accountItems={accountItems}
                signedIn={Boolean(session)}
              />
            </div>
          </div>
        </nav>
      </StickyHeader>
      {activeLearner?.isChild ? (
        <ActingAsBanner childName={activeLearner.name ?? "your child"} />
      ) : null}
    </>
  );
}
