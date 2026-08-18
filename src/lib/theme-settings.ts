import { z } from "zod";
import type { TenantTheme } from "@/db/schema/tenancy";

// Self-serve brand-identity settings (/admin/settings → PATCH /api/admin/tenant).
// Only theme keys that are actually CONSUMED somewhere are exposed here, so a saved
// value always renders (authoritative-values rule: no setting may silently do nothing):
//   wordmark     → site header (src/components/site-header.tsx)
//   shortName    → PWA manifest short_name (src/app/manifest.webmanifest/route.ts)
//   logoUrl      → PWA manifest icons + JSON-LD Organization logo (src/lib/seo/json-ld.ts)
//   faviconUrl   → metadata icons (src/lib/branding.ts)
//   ogDefaultUrl → default social card (src/lib/branding.ts)
//   themeColor   → viewport theme-color, manifest theme_color, accent fallback
// Deliberately NOT exposed: theme.manifestUrl. It is consumed (metadata.manifest override
// in src/lib/branding.ts) but the generated /manifest.webmanifest already reflects
// logo/short name/theme color; overriding the whole manifest stays a DB-level escape hatch.

export const HEX_COLOR = /^#[0-9a-fA-F]{6}$/;

/** Clearable https-only URL: "" clears the key; anything else must be a valid https URL. */
export const httpsUrl = z.literal("").or(
  z
    .string()
    .url()
    .max(500)
    .refine((u) => u.startsWith("https://"), "Must be an https:// URL"),
);

/** The brand-identity slice of the tenant PATCH. "" clears a key (falls back to defaults). */
export const ThemePatchSchema = z.object({
  wordmark: z.string().max(80).optional(),
  shortName: z.string().max(30).optional(),
  logoUrl: httpsUrl.optional(),
  faviconUrl: httpsUrl.optional(),
  ogDefaultUrl: httpsUrl.optional(),
  themeColor: z.literal("").or(z.string().regex(HEX_COLOR)).optional(),
});

export type ThemePatch = z.infer<typeof ThemePatchSchema>;

const PATCH_KEYS = [
  "wordmark",
  "shortName",
  "logoUrl",
  "faviconUrl",
  "ogDefaultUrl",
  "themeColor",
] as const;

/**
 * Pure merge of a validated patch into a tenant theme. Per key: undefined leaves the
 * stored value alone; an empty (or whitespace-only) string deletes the key so the
 * platform default applies again; anything else is trimmed and stored. Keys outside
 * the self-serve set (name, colors, manifestUrl) are always preserved untouched.
 */
export function applyThemePatch(theme: TenantTheme, patch: ThemePatch): TenantTheme {
  const next: TenantTheme = { ...theme };
  for (const key of PATCH_KEYS) {
    const value = patch[key];
    if (value === undefined) continue;
    const trimmed = value.trim();
    if (trimmed === "") delete next[key];
    else next[key] = trimmed;
  }
  return next;
}
