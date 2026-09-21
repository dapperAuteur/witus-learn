import type { Metadata } from "next";
import Link from "next/link";
import { forbidden } from "next/navigation";
import { requireUserPage } from "@/lib/session";
import { getScopedDb } from "@/db/scoped";
import { getCohort, isCohortTeacher, listCohortTeachers, listMembers, listPendingInvites } from "@/db/queries/cohorts";
import { listPresent } from "@/db/queries/live-chat";
import { getSiteUrl } from "@/lib/site-url";
import { CohortRoster } from "@/components/cohort-roster";
import { canAssignCohortTeachers, canManageCohort } from "@/lib/cohort-access";
import { CohortTeachers } from "@/components/cohort-teachers";
import { AdultAttestation } from "@/components/adult-attestation";
import { buildContactCards, type ContactCard } from "@/lib/contact-cards";
import { brandName } from "@/lib/branding";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const sdb = await getScopedDb();
  const cohort = await getCohort(sdb.tenantId, id);
  return { title: cohort ? `${cohort.name}, Cohort roster` : "Cohort" };
}

// A cohort's roster: members, who's currently present in /live, an invite-by-email
// form, and remove-member controls. 404s across tenants via ownOrNotFound — never a
// redirect, which would leak whether a cohort with this id exists on another brand.
export default async function CohortRosterPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const sdb = await getScopedDb();
  const session = await requireUserPage();

  const found = await getCohort(sdb.tenantId, id);
  const cohort = sdb.ownOrNotFound(found);
  // The creator, an assigned teacher, or a brand admin/owner (src/lib/cohort-access.ts).
  if (!(await canManageCohort(session, sdb.tenantId, cohort))) forbidden();

  const [members, present, pendingInvites, siteUrl, teachers, canAssign, viewerTeaches, guardianLinks, contactSettings] =
    await Promise.all([
      listMembers(sdb.tenantId, cohort.id),
      listPresent(sdb.tenantId),
      listPendingInvites(sdb.tenantId, cohort.id),
      getSiteUrl(),
      listCohortTeachers(sdb.tenantId, cohort.id),
      canAssignCohortTeachers(session, sdb.tenantId, cohort),
      isCohortTeacher(sdb.tenantId, cohort.id, session.user.id),
      sdb.listGuardianLinksForCohort(cohort.id),
      sdb.getContactSettings(session.user.id),
    ]);
  const presentIds = new Set(present.map((p) => p.userId));

  // Parent/teacher contact: only this class's TEACHERS see its students' parents as contacts (an
  // admin or creator who is not on the teacher list runs the class but is not who families reach).
  // A parent's request shows on that parent's card, under the student it is about. No inbox.
  const fullNames = new Map(members.map((m) => [m.userId, m.fullName]));
  const contact = viewerTeaches
    ? await buildContactCards({
        sdb,
        viewerId: session.user.id,
        viewerRole: "teacher",
        links: guardianLinks
          .filter((l) => l.guardianUserId !== session.user.id)
          .map((l) => ({
            studentUserId: l.studentUserId,
            studentName: fullNames.get(l.studentUserId) ?? "Student",
            cohortId: cohort.id,
            cohortName: cohort.name,
            counterpartId: l.guardianUserId,
          })),
        studentHref: (l) => `/cohorts/${cohort.id}/report?student=${encodeURIComponent(l.studentUserId)}`,
      })
    : null;
  const cardsByStudent: Record<string, ContactCard[]> = {};
  for (const c of contact?.cards ?? []) (cardsByStudent[c.studentUserId] ??= []).push(c);
  const showContact = Boolean(contact) && contact?.viewerStatus !== "minor_signal";

  return (
    <main className="max-w-2xl py-10">
      <Link href="/cohorts" className="text-sm text-neutral-600 hover:underline">
        ← Cohorts
      </Link>
      <h1 className="mt-3 text-2xl font-bold">{cohort.name}</h1>
      <p className="mt-1 text-sm text-neutral-600">
        {members.length} {members.length === 1 ? "student" : "students"} ·{" "}
        <Link href="/live" className="underline">
          Go to /live
        </Link>
      </p>

      {/* Gradebook export (plans/50): a CSV download and a print-to-PDF report, both authorized to the
          cohort owner or a tenant admin. */}
      <div className="mt-4 flex flex-wrap gap-2">
        <a
          href={`/api/cohorts/${cohort.id}/gradebook.csv`}
          className="inline-flex min-h-11 items-center rounded-md border border-neutral-300 px-3 py-1.5 text-sm font-medium hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-900 pointer-coarse:min-h-12"
        >
          Export gradebook (CSV)
        </a>
        <Link
          href={`/cohorts/${cohort.id}/report`}
          className="inline-flex min-h-11 items-center rounded-md border border-neutral-300 px-3 py-1.5 text-sm font-medium hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-900 pointer-coarse:min-h-12"
        >
          Printable report (PDF)
        </Link>
      </div>

      <div className="mt-6">
        <CohortTeachers cohortId={cohort.id} teachers={teachers} canAssign={canAssign} />
      </div>

      {showContact && contact?.viewerStatus === "unattested" && contact.cards.length > 0 ? (
        <div className="mt-6">
          <AdultAttestation purpose="Contacting your students' parents is for adults only. Confirm it once to see how to reach them." />
        </div>
      ) : null}

      <div className="mt-6">
        <CohortRoster
          cohortId={cohort.id}
          members={members.map((m) => ({
            userId: m.userId,
            displayName: m.fullName,
            present: presentIds.has(m.userId),
            workHref: `/cohorts/${cohort.id}/report?student=${encodeURIComponent(m.userId)}`,
          }))}
          contact={
            showContact
              ? {
                  cardsByStudent,
                  me: { adult: contact?.viewerStatus === "adult", email: session.user.email, phone: contactSettings.phone },
                  school: { brand: brandName(sdb.tenant), email: sdb.tenant.email.replyTo ?? null },
                }
              : null
          }
          pendingInvites={pendingInvites.map((i) => ({
            id: i.id,
            email: i.email,
            invitedAt: i.invitedAt.toISOString().slice(0, 10),
            url: `${siteUrl}/join/${i.token}`,
          }))}
        />
      </div>
    </main>
  );
}
