// Builds the URL for a page-relevant social preview image (rendered by /api/og). Kept relative so
// Next resolves it against metadataBase (the request host) into an absolute og:image URL. The route
// resolves brand + accent from the tenant host itself, so callers only pass the page title +
// optional subtitle (a category/series). Empty title → the school's default card.
export function ogImageUrl(params: { title?: string; subtitle?: string; map?: boolean }): string {
  const q = new URLSearchParams();
  if (params.title) q.set("title", params.title.slice(0, 140));
  if (params.subtitle) q.set("subtitle", params.subtitle.slice(0, 140));
  // map=1 renders the school's OWN Commodity Map pins behind the title (see /api/og). The route
  // resolves the tenant from the host and reads only that tenant's pins — there is deliberately
  // no way for a caller to ask for another brand's map.
  if (params.map) q.set("map", "1");
  const qs = q.toString();
  return qs ? `/api/og?${qs}` : "/api/og";
}
