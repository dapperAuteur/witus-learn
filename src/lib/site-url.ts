import "server-only";
import { headers } from "next/headers";

/** Absolute origin of the current request (per-tenant host). Used for sitemap,
 *  JSON-LD, and OG URLs so they always reference this tenant's domain. */
export async function getSiteUrl(): Promise<string> {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3040";
  const proto = h.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  return `${proto}://${host}`;
}
