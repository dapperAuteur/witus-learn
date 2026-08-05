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
  {
    href: "/admin/overview",
    title: "Operator overview",
    desc: "Open reports, curriculum feedback, recent leads + enrollments, migration status.",
    icon: "📡",
    ownerOnly: true,
  },
  { href: "/admin/dashboard", title: "Dashboard", desc: "Learners, enrollments, completions + roster.", icon: "📊" },
  { href: "/admin/settings", title: "Brand settings", desc: "Accent, branding, gamification, AI tutor, age-gate.", icon: "🎨" },
  { href: "/admin/categories", title: "Categories", desc: "Add, rename, or remove course categories.", icon: "🗂️" },
  { href: "/admin/domains", title: "Domains", desc: "Map a custom domain to your school.", icon: "🌐" },
  { href: "/admin/api-keys", title: "API keys", desc: "Mint/revoke read keys for embedding your courses in another app.", icon: "🔑" },
  { href: "/admin/marketing", title: "Marketing", desc: "Promo codes now; email campaigns soon.", icon: "📣" },
  { href: "/admin/leads", title: "Interest & leads", desc: "Who is waiting for which course, track, or bundle. Filter and export.", icon: "🎯" },
  { href: "/admin/reports", title: "Problem reports", desc: "In-app bug/idea reports to triage.", icon: "🐞" },
  { href: "/admin/paths", title: "Learning paths", desc: "Sequence courses into guided paths.", icon: "🧭" },
  { href: "/admin/live", title: "Live", desc: "Schedule and run live sessions.", icon: "🔴", ownerOnly: true },
  { href: "/admin/documentarian", title: "Documentarian", desc: "Course-family build tracker, check off + leave notes.", icon: "🎬", ownerOnly: true },
  { href: "/admin/future", title: "Future classes & features", desc: "Proposed courses + features to review, leave notes Claude reads.", icon: "🔮", ownerOnly: true },
  { href: "/admin/research", title: "Source checks", desc: "Facts needing a primary source Claude cannot reach; answer one and it fixes the lesson.", icon: "🔎", ownerOnly: true },
  { href: "/admin/downloads", title: "Downloads", desc: "Branded PDFs you can hand to someone outside the platform.", icon: "📄", ownerOnly: true },
  { href: "/admin/ebooks", title: "Ebooks", desc: "Marketing ebooks, private until you approve them; then a free download on their landing page.", icon: "📘", ownerOnly: true },
  { href: "/admin/citations", title: "Citations", desc: "Every source cited by a staged course: does it exist, resolve, and say what the lesson claims?", icon: "📚", ownerOnly: true },
  { href: "/admin/tpt-plan", title: "Teachers Pay Teachers plan", desc: "Which packets to post, in what order and at what price, to optimize sales.", icon: "🛒", ownerOnly: true },
  { href: "/admin/pricing", title: "Proposed pricing", desc: "Fair, competitive price recommendations for every course, current vs proposed.", icon: "💵", ownerOnly: true },
  { href: "/admin/bundles", title: "Bundles", desc: "Course bundles sold at one price; publish and price them.", icon: "📦", ownerOnly: true },
  { href: "/admin/school-billing", title: "School billing", desc: "Sell each white-label school at its own price, a subscription or a one-time lifetime payment.", icon: "🏫", ownerOnly: true },
  { href: "/admin/roadmap", title: "Roadmap", desc: "Internal progress tracker.", icon: "🗺️", ownerOnly: true },
  { href: "/admin/commands", title: "Commands", desc: "CLI reference, migrations, seeds, feedback:list…", icon: "⌨️", ownerOnly: true },
  { href: "/admin/source-chat", title: "Source Chat", desc: "Chat-with-sources config + test (per course).", icon: "💬", ownerOnly: true },
];

export function adminNavFor(isOwner: boolean): AdminNavItem[] {
  return ADMIN_NAV.filter((i) => isOwner || !i.ownerOnly);
}
