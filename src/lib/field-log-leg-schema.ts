import { z } from "zod";

// The shape a Field Log leg accepts over the API. Shared by the create route (POST .../legs) and
// the edit route (PATCH .../legs/[legId]) because a Next route file may export only its handlers.
export const SITE_TYPES = ["farm", "factory", "office", "market", "home", "public-space", "archive", "other"] as const;

export const LegSchema = z.object({
  name: z.string().min(1).max(200),
  siteType: z.enum(SITE_TYPES).nullish(),
  locationLabel: z.string().max(300).nullish(),
  lat: z.number().nullish(),
  lng: z.number().nullish(),
  startDate: z.string().max(20).nullish(),
  endDate: z.string().max(20).nullish(),
  visited: z.boolean().optional(),
  notes: z.string().max(2000).nullish(),
  /** What permission covers filming at this stop (tours from the field need one); see the column. */
  permissionNote: z.string().max(500).nullish(),
  estCostCents: z.number().int().nullish(),
  estCurrency: z.string().max(10).nullish(),
  sortOrder: z.number().int().optional(),
});

/** An edit: any subset of the create fields, but at least one of them. */
export const LegPatchSchema = LegSchema.partial().refine((p) => Object.keys(p).length > 0, "Nothing to update");
