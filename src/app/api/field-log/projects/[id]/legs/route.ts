import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { addLeg } from "@/db/queries/field-log";

type Params = { params: Promise<{ id: string }> };

const LegSchema = z.object({
  name: z.string().min(1).max(200),
  siteType: z.enum(["farm", "factory", "office", "market", "home", "public-space", "archive", "other"]).nullish(),
  locationLabel: z.string().max(300).nullish(),
  lat: z.number().nullish(),
  lng: z.number().nullish(),
  startDate: z.string().max(20).nullish(),
  endDate: z.string().max(20).nullish(),
  visited: z.boolean().optional(),
  notes: z.string().max(2000).nullish(),
  estCostCents: z.number().int().nullish(),
  estCurrency: z.string().max(10).nullish(),
  sortOrder: z.number().int().optional(),
});

// POST /api/field-log/projects/[id]/legs — add a site/node to a project.
export async function POST(req: Request, { params }: Params) {
  const { id } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  const parsed = LegSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);
  const leg = await addLeg(sdb.tenantId, session.user.id, id, parsed.data);
  if (!leg) return errorJson("Not found", 404);
  return json(leg, 201);
}
