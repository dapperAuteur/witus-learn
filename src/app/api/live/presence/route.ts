import { apiContext, errorJson, json } from "@/lib/api";
import { heartbeat, listPresent } from "@/db/queries/live-chat";
import { listCohortIdsForMember } from "@/db/queries/cohorts";
import { recordAttendance } from "@/db/queries/family";

// "Who's here" for the live class. POST is the client heartbeat (also returns the current roster, so one
// round-trip does both); GET just reads it. Any signed-in user; tenant-scoped (isolation).
//
// Attendance piggybacks on this heartbeat: "attendance" = "was present in the live room on
// a day while a cohort member." For every cohort this user belongs to, upsert today's
// (UTC) attendance row — cheap (one membership query + idempotent upserts) and needs no
// separate check-in flow. Powers the parent Family view's attendance list.
export async function POST() {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  await heartbeat(sdb.tenantId, session.user.id, session.user.name ?? null);

  const today = new Date().toISOString().slice(0, 10); // UTC YYYY-MM-DD
  const cohortIds = await listCohortIdsForMember(sdb.tenantId, session.user.id);
  await Promise.all(cohortIds.map((cohortId) => recordAttendance(sdb.tenantId, cohortId, session.user.id, today)));

  return json({ present: await listPresent(sdb.tenantId) });
}

export async function GET() {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  return json({ present: await listPresent(sdb.tenantId) });
}
