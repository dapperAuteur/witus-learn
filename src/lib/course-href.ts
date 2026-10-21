import type { Course } from "@/db/schema";

/**
 * The address a course card links to: the canonical `/{username}/{courseSlug}` page when both are
 * known, else `/course/{id}`, which redirects there. Linking straight to the canonical page saves a
 * redirect online, and it is the only address that opens offline: the service worker never stores
 * a redirect, so a card pointing at `/course/{id}` showed "You're offline" even for a course the
 * visitor had opened.
 */
export function coursePagePath(course: Pick<Course, "id" | "slug">, username: string | null | undefined): string {
  return username && course.slug ? `/${username}/${course.slug}` : `/course/${course.id}`;
}
