// Single source of truth for the admin navigation — used by the admin sidebar shell and the
// /admin landing. Owner-only items (cross-school live, roadmap) are filtered for brand admins.
export interface AdminNavItem {
  href: string;
  title: string;
  desc: string;
  /** Emoji marker shown in the sidebar. */
  icon: string;
  ownerOnly?: boolean;
}

export const ADMIN_NAV: AdminNavItem[] = [
  { href: "/admin/dashboard", title: "Dashboard", desc: "Learners, enrollments, completions + roster.", icon: "📊" },
  { href: "/admin/settings", title: "Brand settings", desc: "Accent, branding, gamification, AI tutor, age-gate.", icon: "🎨" },
  { href: "/admin/categories", title: "Categories", desc: "Add, rename, or remove course categories.", icon: "🗂️" },
  { href: "/admin/domains", title: "Domains", desc: "Map a custom domain to your school.", icon: "🌐" },
  { href: "/admin/marketing", title: "Marketing", desc: "Promo codes now; email campaigns soon.", icon: "📣" },
  { href: "/admin/leads", title: "Leads", desc: "Lead funnel signups.", icon: "🎯" },
  { href: "/admin/reports", title: "Problem reports", desc: "In-app bug/idea reports to triage.", icon: "🐞" },
  { href: "/admin/paths", title: "Learning paths", desc: "Sequence courses into guided paths.", icon: "🧭" },
  { href: "/admin/live", title: "Live", desc: "Schedule and run live sessions.", icon: "🔴", ownerOnly: true },
  { href: "/admin/roadmap", title: "Roadmap", desc: "Internal progress tracker.", icon: "🗺️", ownerOnly: true },
];

export function adminNavFor(isOwner: boolean): AdminNavItem[] {
  return ADMIN_NAV.filter((i) => isOwner || !i.ownerOnly);
}
