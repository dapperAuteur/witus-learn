import "server-only";
import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { courses, userProfiles } from "@/db/schema";

// Read for the PUBLIC course-card embed (/embed/card/[id]). Tenant-scoped by explicit tenantId,
// resolved server-side from the request HOST by the route (requireTenant) — the iframe's src is
// the tenant's own domain, so the Host header is authoritative and nothing tenant-ish ever comes
// from the embedding page. PUBLISHED + PUBLIC ONLY, baked into the WHERE with no escape hatch.
//
// Unlike getPublishedCourseWithLessons (src/db/queries/api-v1.ts) this read INCLUDES unvetted
// courses: it returns card metadata only (title/description/price fields), never a lesson, so it
// is a DISCOVERY surface in the src/lib/vetting.ts taxonomy — the route renders the Coming-soon
// face (no price, no offer) when embedCardFace says so. Null → the route 404s; it never
// distinguishes "wrong tenant" from "doesn't exist" and never redirects (no existence leak).

export interface EmbedCourseCard {
  id: string;
  slug: string | null;
  title: string;
  description: string | null;
  category: string | null;
  price: string;
  priceType: string;
  billingInterval: string | null;
  vettedAt: Date | null;
  allowUnvettedPublic: boolean;
  instructorUsername: string | null;
}

export async function getPublishedCourseCard(
  tenantId: string,
  id: string,
): Promise<EmbedCourseCard | null> {
  const rows = await db
    .select({
      id: courses.id,
      slug: courses.slug,
      title: courses.title,
      description: courses.description,
      category: courses.category,
      price: courses.price,
      priceType: courses.priceType,
      billingInterval: courses.billingInterval,
      vettedAt: courses.vettedAt,
      allowUnvettedPublic: courses.allowUnvettedPublic,
      instructorUsername: userProfiles.username,
    })
    .from(courses)
    .leftJoin(userProfiles, eq(userProfiles.userId, courses.instructorId))
    .where(
      and(
        eq(courses.id, id),
        eq(courses.tenantId, tenantId),
        eq(courses.isPublished, true),
        eq(courses.visibility, "public"),
      ),
    )
    .limit(1);
  return rows[0] ?? null;
}
