import "server-only";
import { and, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { courseCategories, courses, type CourseCategory } from "@/db/schema";
import { renameInAdditional } from "@/lib/course-categories";

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
  // And every course that lists it as an ADDITIONAL category. Done row by row through the shared
  // helper rather than with array_replace, because a rename can collide: renaming B to A on a course
  // whose primary is already A, or onto another extra it already has, would otherwise leave a
  // duplicate that double-counts the course. Tenant-scoped like the update above.
  const listing = await db
    .select({ id: courses.id, category: courses.category, additional: courses.additionalCategories })
    .from(courses)
    .where(and(eq(courses.tenantId, tenantId), sql`${cat.oldName} = ANY(${courses.additionalCategories})`));
  for (const row of listing) {
    const next = renameInAdditional(row.category, row.additional, cat.oldName, newName);
    if (next === null) continue;
    await db
      .update(courses)
      .set({ additionalCategories: next })
      .where(and(eq(courses.tenantId, tenantId), eq(courses.id, row.id)));
  }
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
  // And drop it from every additional-category list. Removing an entry cannot create a duplicate,
  // so array_remove is safe here where a rename is not.
  await db
    .update(courses)
    .set({ additionalCategories: sql`array_remove(${courses.additionalCategories}, ${cat.name})` })
    .where(and(eq(courses.tenantId, tenantId), sql`${cat.name} = ANY(${courses.additionalCategories})`));
  return true;
}
