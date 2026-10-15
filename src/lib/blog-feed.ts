import "server-only";
import { BLOGS, type BlogKey } from "@/lib/release-followups";

// Which posts a blog has published, read from its own JSON Feed, so /admin/follow-ups can say "live on
// the blog" without anyone typing it. Listing in the feed is what "published" means for BAM's blog
// (the blog ledger rule), so this is the authoritative check, not a guess from a URL.
//
// Best effort and never in the way: cached for an hour, a 3-second timeout, and any failure returns
// null, which the page shows as "could not check the blog" rather than as "not published".

interface FeedItem {
  url?: string;
  id?: string;
}

export async function publishedSlugs(blog: BlogKey): Promise<Set<string> | null> {
  try {
    const res = await fetch(BLOGS[blog].feed, {
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(3000),
    });
    if (!res.ok) return null;
    const feed = (await res.json()) as { items?: FeedItem[] };
    const slugs = new Set<string>();
    for (const item of feed.items ?? []) {
      const url = item.url ?? item.id;
      if (!url) continue;
      const slug = url.replace(/\/+$/, "").split("/").pop();
      if (slug) slugs.add(slug);
    }
    return slugs;
  } catch {
    return null;
  }
}
