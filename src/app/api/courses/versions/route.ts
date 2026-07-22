import { NextResponse } from "next/server";
import { getScopedDb } from "@/db/scoped";

// GET /api/courses/versions?ids=<uuid>,<uuid>,…
//
// Returns the LIVE `content_version` for each course id, so /downloads can compare it against the
// version each saved lesson recorded at download time and show "Update available".
//
// Deliberately not session-gated: a content version is a bare integer that reveals nothing about
// the course or the learner, and the ids come from the caller's OWN offline manifest. It is still
// tenant-scoped — ids from another brand are absent from the response rather than 404ing the whole
// request, so the reply can never confirm that a course exists on a different domain.
//
// This is the ONLINE half of the offline story: when the fetch fails (the learner is offline, which
// is the normal case for this feature) the UI keeps its last known answer and says nothing.

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
/** A learner with a very large library still asks one bounded question. */
const MAX_IDS = 200;

export async function GET(req: Request) {
  const sdb = await getScopedDb();
  const raw = new URL(req.url).searchParams.get("ids") ?? "";
  // Filter to well-formed uuids before touching the DB: junk in the query string becomes an empty
  // answer, never a malformed `IN ()`.
  const ids = Array.from(
    new Set(
      raw
        .split(",")
        .map((s) => s.trim())
        .filter((s) => UUID_RE.test(s)),
    ),
  ).slice(0, MAX_IDS);

  if (ids.length === 0) return NextResponse.json({ versions: {} });
  const versions = await sdb.getContentVersions(ids);
  return NextResponse.json({ versions });
}
