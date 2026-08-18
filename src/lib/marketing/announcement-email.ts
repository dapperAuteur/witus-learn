// Pure helpers for the /admin/marketing "Compose announcement" form.
//
// Deliberately NOT server-only: the client component builds the draft from data the page already
// resolved tenant-scoped, and these functions never touch the database. Keep the caption grammar
// in step with src/lib/course-announce.ts (the social-post sibling): both lead with
// "New on {brand}: {title}" and both take the first line of the description as the tagline.
//
// Nothing here SENDS anything. Sending a real campaign is an open product decision
// (docs-notes-admin-marketing.md); until then the draft leaves the app via copy-to-clipboard
// or a mailto: link into BAM's own email tool.

/** The minimum a course needs to become an announcement email. */
export interface AnnouncementCourse {
  id: string;
  title: string;
  description: string | null;
}

/** First line/sentence of the description, trimmed to a caption-friendly length. */
export function announcementTagline(description: string | null): string {
  const first = (description ?? "").trim().split(/\n+/)[0]?.trim() ?? "";
  return first.length > 180 ? `${first.slice(0, 177).trimEnd()}…` : first;
}

/** The public course URL on the host the admin is actually using (origin is authoritative). */
export function buildCourseUrl(origin: string, courseId: string): string {
  return `${origin.replace(/\/$/, "")}/course/${courseId}`;
}

/** Subject line, same grammar as the social caption's first line. */
export function announcementSubject(brand: string, courseTitle: string): string {
  return `New on ${brand}: ${courseTitle}`;
}

/**
 * Plain-text body: what opened, one honest line about it, and the link. No fabricated stats,
 * no testimonials, no urgency theater. Footer/unsubscribe text belongs to the email tool that
 * actually sends, so it is not baked in here.
 */
export function announcementBody(input: {
  brand: string;
  course: AnnouncementCourse;
  courseUrl: string;
}): string {
  const tagline = announcementTagline(input.course.description);
  return [
    `${input.course.title} is now open on ${input.brand}.`,
    tagline,
    `Start here: ${input.courseUrl}`,
  ]
    .filter(Boolean)
    .join("\n\n");
}

/** A recipient-less mailto: link carrying the draft, for "open in your email app". */
export function mailtoHref(subject: string, body: string): string {
  return `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
