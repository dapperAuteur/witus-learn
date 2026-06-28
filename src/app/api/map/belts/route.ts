import { apiContext, json } from "@/lib/api";
import { listBelts } from "@/db/queries/map";

// GET /api/map/belts — the tenant's growing-belt dataset (Equal Earth mode).
export async function GET() {
  const { sdb } = await apiContext();
  return json({ belts: await listBelts(sdb.tenantId) });
}
