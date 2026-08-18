import type { Metadata } from "next";
import { getScopedDb } from "@/db/scoped";
import { requireUserPage, isPlatformOwner } from "@/lib/session";
import { listAuditedCourseSlugs } from "@/db/queries/course-auditors";
import { citationChecksByKey } from "@/db/queries/citation-checks";
import { citationsByCourse, type CitationStatus } from "@/lib/citations";
import { buildLessonLinkIndex, reviewLocation } from "@/lib/lesson-links";
import { CitationList, type CitationRow } from "@/components/citation-list";

export const metadata: Metadata = { title: "Verify citations" };

// The auditor-facing half of citation verification.
//
// An accepted `course_auditors` grant already means "you may read this unvetted course". It now also
// means "you may verify this course's citations, and only this course's". This page shows exactly the
// courses the viewer holds a grant for, and nothing else: the slug list comes from the database, is
// tenant-scoped, and is passed into the shared list component, which contains no authorisation logic.
//
// Auditors never see /admin/research. That list is BAM's triage queue and carries commercial context
// (fee caps, market questions) that an invited reviewer has no reason to read.
//
// This page uses the PAGE guard, requireUserPage, rather than the API-shaped one: a signed-out
// auditor following an emailed link needs to be sent to sign in and brought back, not handed a 403
// dead end. (Naming the API guard literally here would trip the static scan in
// tests/signed-out-redirect.test.ts, which reads raw source and cannot tell a comment from a call.
// That bluntness is worth keeping, so the comment works around it rather than the test being
// loosened to accommodate a comment.)
export default async function AuditCitationsPage() {
  const session = await requireUserPage();
  const sdb = await getScopedDb();

  const owner = await isPlatformOwner(session.user.id);
  const audited = await listAuditedCourseSlugs(sdb.tenantId, {
    userId: session.user.id,
    email: session.user.email ?? null,
  });

  // The owner sees everything here too, so one link works for whoever opens it.
  const groups = citationsByCourse(owner ? undefined : audited);
  const checks = await citationChecksByKey(sdb.tenantId);

  // Lesson links for exactly the courses already on screen, and no others. `groups` is the whole
  // authorisation decision (the auditor's own grants, or everything for the owner), so deriving the
  // slug list from it cannot widen the grant: an auditor asks for locations only in the one course
  // they were invited to read. The lookup is tenant-scoped as well, so neither can the tenant.
  const links = buildLessonLinkIndex(
    await sdb.listLessonLocations(groups.map((g) => g.courseSlug)),
  );

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-2xl font-semibold tracking-tight">Verify citations</h1>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        Thank you for checking these. For each source: does it exist, does the link still work, and
        does it actually say what the lesson claims it says? The last one is the one that matters most
        and the one an automated link checker can never catch.
      </p>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        Each source says which lesson it comes from and links straight to it, and where we could find
        the sentence that cites it, that sentence is quoted underneath. Read it before you decide.
      </p>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        Say what you found before marking anything. A citation marked verified with nothing written
        behind it stops anyone from ever looking again, which is worse than leaving it unchecked.
      </p>

      {groups.length === 0 ? (
        <p className="mt-8 rounded-md border border-neutral-200 p-4 text-sm dark:border-neutral-800">
          You do not have an accepted invitation to review any course on this site yet. If you were
          sent an invitation link, open it first and it will bring you back here.
        </p>
      ) : (
        groups.map((g) => {
          const rows: CitationRow[] = g.citations.map((c) => {
            const row = checks.get(c.key);
            const where = reviewLocation(links, c.courseSlug, c.lessonSlug);
            return {
              ...c,
              status: (row?.status ?? "unverified") as CitationStatus,
              note: row?.note ?? null,
              lessonHref: where.href,
              lessonIsLinked: where.isLesson,
              locationNote: where.note,
            };
          });
          return (
            <CitationList
              key={g.courseSlug}
              courseSlug={g.courseSlug}
              courseTitle={g.courseTitle}
              rows={rows}
              groupCount={groups.length}
            />
          );
        })
      )}
    </main>
  );
}
