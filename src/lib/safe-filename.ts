/** Keeps a slug from smuggling CR/LF, quotes, or path characters into a
 *  Content-Disposition header. Falls back to "document" when nothing survives. */
export function safeFilename(slug: string): string {
  const cleaned = slug.replace(/[^a-z0-9._-]/gi, "-").slice(0, 100);
  return cleaned.length > 0 ? cleaned : "document";
}
