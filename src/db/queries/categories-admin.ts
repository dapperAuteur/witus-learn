import "server-only";
import { and, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { courseCategories, courses, type CourseCategory } from "@/db/schema";

// Admin CRUD over a tenant's course categories. Renames/deletes reconcile the free-text
// courses.category field so course chips stay consistent. All tenant-scoped.

export async function addCategory(tenantId: string, name: string, sortOrder = 0): Promise<CourseCategory | null> {
  const [row] = await db
    .insert(courseCategories)
    .values({ tenantId, name, sortOrder })
    .onConflictDoNothing()
    .returning();
  return row ?? null;
}

export async function renameCategory(tenantId: string, id: string, newName: string): Promise<boolean> {
  const [cat] = await db
    .select({ oldName: courseCategories.name })
    .from(courseCategories)
    .where(and(eq(courseCategories.tenantId, tenantId), eq(courseCategories.id, id)))
    .limit(1);
  if (!cat) return false;
  await db
    .update(courseCategories)
    .set({ name: newName })
    .where(and(eq(courseCategories.tenantId, tenantId), eq(courseCategories.id, id)));
  // Move courses using the old label onto the new one (category is a free-text field).
  await db
    .update(courses)
    .set({ category: newName })
    .where(and(eq(courses.tenantId, tenantId), sql`${courses.category} = ${cat.oldName}`));
  return true;
}

// Cross-promotion idea #3: map a category to a WitUS ecosystem product slug (or null to clear).
export async function setCategoryEcosystem(
  tenantId: string,
  id: string,
  slug: string | null,
): Promise<boolean> {
  const rows = await db
    .update(courseCategories)
    .set({ ecosystemProductSlug: slug })
    .where(and(eq(courseCategories.tenantId, tenantId), eq(courseCategories.id, id)))
    .returning({ id: courseCategories.id });
  return rows.length > 0;
}

export async function deleteCategory(tenantId: string, id: string): Promise<boolean> {
  const [cat] = await db
    .select({ name: courseCategories.name })
    .from(courseCategories)
    .where(and(eq(courseCategories.tenantId, tenantId), eq(courseCategories.id, id)))
    .limit(1);
  if (!cat) return false;
  await db.delete(courseCategories).where(and(eq(courseCategories.tenantId, tenantId), eq(courseCategories.id, id)));
  // Un-categorize any courses that used it, so no orphan chips remain.
  await db
    .update(courses)
    .set({ category: null })
    .where(and(eq(courses.tenantId, tenantId), sql`${courses.category} = ${cat.name}`));
  return true;
}
