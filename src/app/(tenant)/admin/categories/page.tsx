import type { Metadata } from "next";
import Link from "next/link";
import { getScopedDb } from "@/db/scoped";
import { requireBrandAdmin } from "@/lib/session";
import { CategoryManager } from "@/components/category-manager";

export const metadata: Metadata = { title: "Categories" };

// Admin: add / rename / remove course categories for this school. Brand-admin/owner only.
export default async function CategoriesAdminPage() {
  const sdb = await getScopedDb();
  await requireBrandAdmin(sdb.tenantId);
  const categories = await sdb.listCategories();

  return (
    <main className="max-w-2xl py-10">
      <Link href="/admin" className="text-sm underline" style={{ color: "var(--accent)" }}>
        ← Admin
      </Link>
      <h1 className="mt-4 text-2xl font-bold">Course categories</h1>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
        Categories power the catalog filter and the “Browse by track” cards. Renaming one moves its
        courses onto the new label; deleting one leaves its courses uncategorized. Assign a course’s
        category in its settings.
      </p>
      <div className="mt-6">
        <CategoryManager
          categories={categories.map((c) => ({
            id: c.id,
            name: c.name,
            ecosystemProductSlug: c.ecosystemProductSlug,
          }))}
        />
      </div>
    </main>
  );
}
