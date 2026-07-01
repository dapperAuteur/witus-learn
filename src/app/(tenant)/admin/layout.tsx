import { requireTenant } from "@/lib/tenant";
import { isPlatformOwner, requireBrandAdmin } from "@/lib/session";
import { adminNavFor } from "@/lib/admin-nav";
import { AdminSidebar } from "@/components/admin-sidebar";

// Persistent admin shell: every /admin/* page renders inside a sidebar layout. Gating is enforced
// here once (brand-admin + owner), and each page still enforces its own gate + tenant scope.
export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const tenant = await requireTenant();
  const session = await requireBrandAdmin(tenant.id);
  const owner = await isPlatformOwner(session.user.id);
  const items = adminNavFor(owner);

  // No vertical padding here — each admin page brings its own (py-10), so the sidebar and content
  // stay top-aligned without doubling up.
  return (
    <div className="mx-auto max-w-6xl gap-8 px-4 md:flex">
      <AdminSidebar items={items} heading={owner ? "Operator" : "Admin"} />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
