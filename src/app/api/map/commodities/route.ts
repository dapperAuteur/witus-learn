import { apiContext, json } from "@/lib/api";
import { listCommodities } from "@/db/queries/map";

// GET /api/map/commodities?season= — the tenant's Commodity Map pins. Public,
// tenant-scoped (a brand's map never shows another's).
export async function GET(req: Request) {
  const { sdb } = await apiContext();
  const seasonParam = new URL(req.url).searchParams.get("season");
  const season = seasonParam ? Number(seasonParam) : undefined;
  const commodities = await listCommodities(sdb.tenantId, Number.isFinite(season) ? season : undefined);
  return json({ commodities });
}
