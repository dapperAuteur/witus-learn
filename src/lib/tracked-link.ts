// One shared way to route an outbound link through the click counter (/api/link/click).
// External http(s) links get wrapped; relative / mailto: / tel: / same-page links pass through
// unchanged. Counts only — no per-user tracking. Used by the markdown renderer, the course-page
// Sources block, and the cross-promotion surfaces.

export interface LinkContext {
  courseId?: string | null;
  lessonId?: string | null;
  kind?: "content" | "ecosystem";
}

export function trackedHref(url: string | undefined | null, ctx: LinkContext): string {
  if (!url) return "#";
  // Only external http(s) links are tracked; everything else is returned verbatim.
  if (!/^https?:\/\//i.test(url)) return url;
  if (!ctx.courseId) return url; // nothing to attribute the click to
  const params = new URLSearchParams({ u: url, c: ctx.courseId });
  if (ctx.lessonId) params.set("l", ctx.lessonId);
  if (ctx.kind === "ecosystem") params.set("k", "ecosystem");
  return `/api/link/click?${params.toString()}`;
}
