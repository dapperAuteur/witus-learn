import { NextResponse } from "next/server";
import { env } from "@/lib/env";
import {
  claimPingForEmail,
  getCohortName,
  getCohortOverride,
  getContactPeople,
  getTenantWithSiteUrl,
  listOverridesAbout,
  listPingsDueForEmail,
  releasePingEmailClaim,
} from "@/db/queries/contact";
import { sendContactPingEmail } from "@/lib/emails";
import { counterpartView, effectiveMode, mayPing, roleOf, type Role } from "@/lib/contact";
import { mayUseContact } from "@/lib/teacher-age";

// GET/POST /api/cron/contact-pings: the 48-hour fallback for parent/teacher contact pings (decided
// 2026-09-20). A ping shows in the app first; if the person who asked has not marked "we've started
// talking" 48 hours later, and the person they asked has not closed it, that person gets ONE email,
// Reply-To the asker.
//
// Runs once a day (vercel.json), so an email goes out between 48 and 72 hours after the ask. Guarded
// by CRON_SECRET exactly like /api/cron/demo-reset: no secret, or a wrong one, is a flat 401.
//
// Every ping is re-checked at send time, inside its own tenant: the relationship must still hold
// (listPingsDueForEmail filters on it) and the recipient's CURRENT rule for this asker must still
// allow asking (per-person rule, then per-class rule, then default). A recipient who switched to
// "through the school" after being asked gets no email.
// Each ping is claimed before sending, so overlapping runs can never send it twice, and released if
// the send fails, so tomorrow's run tries again (until the ping expires at 14 days).
function guard(req: Request): boolean {
  if (!env.CRON_SECRET) return false;
  return req.headers.get("authorization") === `Bearer ${env.CRON_SECRET}`;
}

function formatDay(d: Date): string {
  return d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", timeZone: "UTC" });
}

async function handle(req: Request): Promise<NextResponse> {
  if (!guard(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const now = new Date();
  const due = await listPingsDueForEmail(now);
  let sent = 0;
  let skipped = 0;
  let failed = 0;

  for (const ping of due) {
    try {
      const site = await getTenantWithSiteUrl(ping.tenantId);
      if (!site) {
        skipped++;
        continue;
      }
      const [people, overridesAboutAsker, classRule, cohortName] = await Promise.all([
        getContactPeople(ping.tenantId, [ping.fromUserId, ping.toUserId, ping.studentUserId]),
        listOverridesAbout(ping.tenantId, ping.fromUserId, [ping.toUserId]),
        getCohortOverride(ping.tenantId, ping.toUserId, ping.cohortId),
        getCohortName(ping.tenantId, ping.cohortId),
      ]);
      const asker = people.get(ping.fromUserId);
      const recipient = people.get(ping.toUserId);
      const student = people.get(ping.studentUserId);
      const role = ping.fromRole as Role;
      if (!asker || !recipient || !student || !cohortName || !mayUseContact(asker.status)) {
        skipped++;
        continue;
      }
      const mode = effectiveMode({
        settings: recipient.settings,
        override: overridesAboutAsker.get(recipient.userId) ?? null,
        cohortOverride: classRule,
        askerRole: role,
      });
      if (!mayPing(counterpartView(mode, mayUseContact(recipient.status)))) {
        skipped++;
        continue;
      }

      if (!(await claimPingForEmail(ping.id))) {
        skipped++;
        continue;
      }
      // The recipient's own page for this request: a teacher's class roster, or a parent's /family.
      const pageUrl = role === "parent" ? `${site.siteUrl}/cohorts/${ping.cohortId}` : `${site.siteUrl}/family`;
      try {
        await sendContactPingEmail({
          tenant: site.tenant,
          to: recipient.email,
          fromName: asker.name,
          fromEmail: asker.email,
          fromRoleText: roleOf(role, student.name),
          fromPhone: asker.settings.phone,
          fromNote: asker.settings.note,
          studentName: student.name,
          cohortName,
          askedOn: formatDay(ping.createdAt),
          pageUrl,
        });
        sent++;
      } catch (err) {
        await releasePingEmailClaim(ping.id);
        failed++;
        console.error("[cron/contact-pings] send failed:", err instanceof Error ? err.message : err);
      }
    } catch (err) {
      failed++;
      console.error("[cron/contact-pings] ping failed:", err instanceof Error ? err.message : err);
    }
  }

  return NextResponse.json({ ok: true, due: due.length, sent, skipped, failed, at: now.toISOString() });
}

export async function GET(req: Request) {
  return handle(req);
}

export async function POST(req: Request) {
  return handle(req);
}
