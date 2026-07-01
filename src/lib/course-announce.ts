import "server-only";
import { sendToOutbox } from "@/lib/ecosystem-webhook";
import { brandName } from "@/lib/branding";
import type { TenantRecord } from "@/lib/tenant";

// Build and dispatch a "new course" announcement to the WitUS Outbox (→ Ocoya).
// Per BAM's decision, announcements are always created as DRAFTS (draft: true) with
// an auto-generated caption + the course cover image; BAM reviews each draft and picks
// the social profiles in the Outbox before it publishes. Nothing publishes automatically.
// Optionally carries a scheduled_at so a batch can be staggered over time.

/** The minimum a course needs to be announced (a subset of the Course row). */
export interface AnnounceCourse {
  id: string;
  title: string;
  description: string | null;
  coverImageUrl: string | null;
}

/** First line/sentence of the description, trimmed to a caption-friendly length. */
function tagline(description: string | null): string {
  const first = (description ?? "").trim().split(/\n+/)[0]?.trim() ?? "";
  return first.length > 180 ? `${first.slice(0, 177).trimEnd()}…` : first;
}

/** The public course URL on the tenant's own host. `origin` is the request origin, so
 *  the link always points at the brand the announcement was triggered from. */
export function courseUrl(origin: string, course: AnnounceCourse): string {
  return `${origin.replace(/\/$/, "")}/course/${course.id}`;
}

/** The draft caption: "New on {brand}: {title}\n\n{tagline}\n\n{url}". */
export function announceCaption(tenant: TenantRecord, origin: string, course: AnnounceCourse): string {
  return [`New on ${brandName(tenant)}: ${course.title}`, tagline(course.description), courseUrl(origin, course)]
    .filter(Boolean)
    .join("\n\n");
}

/**
 * Send one course announcement to the Outbox as a DRAFT. No social_profile_ids are set
 * (BAM chooses them in the Outbox). `scheduledAt` (ISO string) is passed through so the
 * batch UI can stagger announcements; omit it to leave scheduling to the Outbox.
 * No-op if the Outbox isn't configured (see hasOutbox).
 */
export function announceCourseToOutbox(
  tenant: TenantRecord,
  origin: string,
  course: AnnounceCourse,
  scheduledAt?: string,
): Promise<void> {
  return sendToOutbox({
    external_ref: `learn-witus:${tenant.slug}:course:${course.id}`,
    caption: announceCaption(tenant, origin, course),
    media_urls: course.coverImageUrl ? [course.coverImageUrl] : [],
    scheduled_at: scheduledAt ?? null,
    draft: true,
  });
}
