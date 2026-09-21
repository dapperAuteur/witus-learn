import "server-only";
import type { ScopedDb } from "@/db/scoped";
import type { ContactPing } from "@/db/schema";
import { cohortOverrideKey } from "@/db/queries/contact";
import {
  counterpartView,
  effectiveMode,
  isPingActive,
  pingEmailDueAt,
  type ContactMode,
  type CounterpartView,
  type Role,
} from "@/lib/contact";
import { mayUseContact, type AdultStatus } from "@/lib/teacher-age";

// Builds what ONE viewer may see about each adult they are related to, on the two pages where
// contact lives: /family (a parent looking at their children's teachers) and a class roster (a
// teacher looking at their students' parents). Server-only, because the whole point is deciding
// what NOT to send to the browser: a counterpart's email and phone leave the server only when the
// viewer is a confirmed adult AND the counterpart's own rule for this viewer is "show my details",
// or when the counterpart pinged the viewer (asking is consenting to be reached).

export interface CardDetails {
  email: string;
  phone: string | null;
  note: string | null;
}

export interface ContactCard {
  key: string;
  counterpartId: string;
  counterpartName: string;
  /** The counterpart's role in this relationship. */
  counterpartRole: Role;
  studentUserId: string;
  studentName: string;
  /** Where this viewer can see the student's work (assignments, grades, progress). */
  studentHref: string;
  cohortId: string;
  cohortName: string;
  view: CounterpartView;
  /** Only when view === "details" and the viewer is a confirmed adult. */
  details: CardDetails | null;
  /** The viewer's own rule for this one person, or null for "use my default". */
  myOverride: ContactMode | null;
  /** The viewer's default for people in the counterpart's role. */
  myDefault: ContactMode;
  /** A ping the viewer sent this person about this student, still active. */
  outgoing: { pingId: string; createdAt: string; emailDueAt: string; emailedAt: string | null } | null;
  /** A ping this person sent the viewer about this student, still active, with how to reach them.
   *  The viewer can close it (POST /api/contact/pings/[id]/close). */
  incoming: { pingId: string; createdAt: string; emailedAt: string | null; details: CardDetails } | null;
}

export interface ContactLink {
  studentUserId: string;
  studentName: string;
  cohortId: string;
  cohortName: string;
  counterpartId: string;
}

export interface ContactCardsResult {
  viewerStatus: AdultStatus;
  cards: ContactCard[];
}

function pingFor(pings: ContactPing[], from: string, to: string, link: ContactLink, now: Date): ContactPing | null {
  return (
    pings.find(
      (p) =>
        p.fromUserId === from &&
        p.toUserId === to &&
        p.studentUserId === link.studentUserId &&
        p.cohortId === link.cohortId &&
        isPingActive(p, now),
    ) ?? null
  );
}

export async function buildContactCards(input: {
  sdb: ScopedDb;
  viewerId: string;
  viewerRole: Role;
  links: ContactLink[];
  studentHref: (link: ContactLink) => string;
  now?: Date;
}): Promise<ContactCardsResult> {
  const { sdb, viewerId, viewerRole, links } = input;
  const now = input.now ?? new Date();
  const counterpartIds = [...new Set(links.map((l) => l.counterpartId))];
  const counterpartRole: Role = viewerRole === "parent" ? "teacher" : "parent";

  const [people, overridesAboutMe, myOverrides, pings, classRules] = await Promise.all([
    sdb.getContactPeople([viewerId, ...counterpartIds]),
    sdb.listContactOverridesAbout(viewerId, counterpartIds),
    sdb.listContactOverridesBy(viewerId),
    sdb.listActivePingsForUser(viewerId, now),
    // Each counterpart's per-class rule for the class this link runs through (a teacher's "parents
    // in this class may..."). Keyed `${counterpartId}:${cohortId}`.
    sdb.contactCohortOverridesFor(counterpartIds, [...new Set(links.map((l) => l.cohortId))]),
  ]);
  const viewer = people.get(viewerId);
  const viewerStatus: AdultStatus = viewer?.status ?? "unattested";
  const viewerAdult = mayUseContact(viewerStatus);
  const myDefault = viewerRole === "parent" ? viewer?.settings.teachersMode : viewer?.settings.parentsMode;

  const cards: ContactCard[] = [];
  for (const link of links) {
    const other = people.get(link.counterpartId);
    if (!other) continue;
    const mode = effectiveMode({
      settings: other.settings,
      override: overridesAboutMe.get(other.userId) ?? null,
      cohortOverride: classRules.get(cohortOverrideKey(other.userId, link.cohortId)) ?? null,
      askerRole: viewerRole,
    });
    const view = counterpartView(mode, mayUseContact(other.status));
    const details: CardDetails = { email: other.email, phone: other.settings.phone, note: other.settings.note };
    const out = pingFor(pings, viewerId, other.userId, link, now);
    const inc = pingFor(pings, other.userId, viewerId, link, now);
    cards.push({
      key: `${link.cohortId}:${link.studentUserId}:${other.userId}`,
      counterpartId: other.userId,
      counterpartName: other.name,
      counterpartRole,
      studentUserId: link.studentUserId,
      studentName: link.studentName,
      studentHref: input.studentHref(link),
      cohortId: link.cohortId,
      cohortName: link.cohortName,
      view,
      details: viewerAdult && view === "details" ? details : null,
      myOverride: myOverrides.get(other.userId) ?? null,
      myDefault: myDefault ?? "request",
      outgoing: out
        ? {
            pingId: out.id,
            createdAt: out.createdAt.toISOString(),
            emailDueAt: pingEmailDueAt(out).toISOString(),
            emailedAt: out.emailedAt?.toISOString() ?? null,
          }
        : null,
      incoming:
        inc && viewerAdult
          ? { pingId: inc.id, createdAt: inc.createdAt.toISOString(), emailedAt: inc.emailedAt?.toISOString() ?? null, details }
          : null,
    });
  }
  return { viewerStatus, cards };
}
