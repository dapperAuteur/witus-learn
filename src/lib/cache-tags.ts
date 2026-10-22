import { revalidateTag } from "next/cache";

// Tags for Next's data cache on PUBLIC, read-mostly content (src/lib/public-cache.ts), and the one
// way to clear them. Why the cache exists: cloud-briefs/learn-db-egress-2026-10-20.md.
//
// Kept free of `server-only` and of the cached reads themselves: the authoring query helpers import
// this to clear tags after a write, and those helpers also run in the `seed:*` scripts, outside Next.

export const CACHE_TAGS = {
  /** Tenant-by-host lookups: every request resolves its brand through one. */
  tenants: "tenants",
  /** Public profiles. A username is half of every course URL, so a rename must drop the old one. */
  profiles: "profiles",
  /** One tenant's public catalog: course rows, categories, sitemap rows, map pins, explore counts. */
  catalog: (tenantId: string) => `catalog:${tenantId}`,
  /** One course's lessons and sections, summaries and full bodies alike. */
  course: (courseId: string) => `course:${courseId}`,
} as const;

/** Backstop for writes that cannot clear a tag (seed scripts write straight to the database). */
export const PUBLIC_CACHE_SECONDS = 60 * 60;

/**
 * Expire tags NOW (`expire: 0`), so the next read after an admin's edit is fresh rather than one
 * stale render later. Never throws: outside a Next request (a seed script, a test) there is no cache
 * to clear and Next throws an invariant, and a failed invalidation must never fail the edit the
 * person asked for. Those writes surface within PUBLIC_CACHE_SECONDS.
 */
export function expireCacheTags(tags: readonly string[]): void {
  for (const tag of tags) {
    try {
      revalidateTag(tag, { expire: 0 });
    } catch {
      // Outside a request scope: nothing cached here to clear. See above.
    }
  }
}

/** A course row changed (title, publish, vetting, price, slug, ...): its catalog and its content. */
export function expireCourse(tenantId: string, courseId: string): void {
  expireCacheTags([CACHE_TAGS.catalog(tenantId), CACHE_TAGS.course(courseId)]);
}

/** Something listed in a tenant's catalog changed (categories, announce stamps, removals). */
export function expireCatalog(tenantId: string): void {
  expireCacheTags([CACHE_TAGS.catalog(tenantId)]);
}

/** A tenant's settings, domains or active state changed. */
export function expireTenants(): void {
  expireCacheTags([CACHE_TAGS.tenants]);
}

/** A public profile changed (username, display name). */
export function expireProfiles(): void {
  expireCacheTags([CACHE_TAGS.profiles]);
}
