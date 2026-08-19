// Where a civics course's "back" link should point (BAM's in-app feedback, 2026-08-18: a state
// civics page had no way back to the civics landing page, so a teacher who arrived from the map
// had to use the browser's back button or start over from the catalog).
//
// Two families, two destinations, because they are genuinely different pages:
//   state-civics-<code>  -> /civics, the map where you pick a state. That IS the index for these.
//   any other Civics course -> the Civics slice of the catalog, which is its real index.
// Anything else gets nothing: an invented "back" link that lands somewhere unrelated is worse
// than the catalog link the page already has.

export interface CivicsBackLink {
  href: string;
  label: string;
}

/** The state-civics slug family: `state-civics-in`, `state-civics-dc`, and so on. */
export function isStateCivicsSlug(slug: string | null | undefined): boolean {
  return typeof slug === "string" && /^state-civics-[a-z]{2}$/.test(slug);
}

export function civicsBackLink(course: {
  slug: string | null;
  category: string | null;
}): CivicsBackLink | null {
  if (isStateCivicsSlug(course.slug)) {
    return { href: "/civics", label: "All state civics courses" };
  }
  if (course.category === "Civics") {
    return { href: "/courses?category=Civics", label: "All civics courses" };
  }
  return null;
}
