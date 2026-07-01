// Builds the URL for a page-relevant social preview image (rendered by /api/og). Kept relative so
// Next resolves it against metadataBase (the request host) into an absolute og:image URL. The route
// resolves brand + accent from the tenant host itself, so callers only pass the page title +
// optional subtitle (a category/series). Empty title → the school's default card.
export function ogImageUrl(params: { title?: string; subtitle?: string }): string {
  const q = new URLSearchParams();
  if (params.title) q.set("title", params.title.slice(0, 140));
  if (params.subtitle) q.set("subtitle", params.subtitle.slice(0, 140));
  const qs = q.toString();
  return qs ? `/api/og?${qs}` : "/api/og";
}
