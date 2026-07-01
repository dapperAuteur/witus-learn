import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getScopedDb } from "@/db/scoped";
import { getMembership, getSession, isPlatformOwner } from "@/lib/session";
import { hasOutbox } from "@/lib/ecosystem-webhook";
import { AnnounceManager, type AnnounceCourseRow } from "@/components/announce-manager";

export const metadata: Metadata = { title: "Announce courses" };

// Brand-admin surface: review which courses have been announced to the WitUS Outbox and
// send the rest — in controlled batches, optionally scheduled. Tenant-scoped; nothing
// publishes automatically (the Outbox holds drafts for review).
export default async function AnnounceCoursesPage() {
  const session = await getSession();
  if (!session) redirect("/login");

  const sdb = await getScopedDb();
  const owner = await isPlatformOwner(session.user.id);
  const isAdmin = owner || (await getMembership(session.user.id, sdb.tenantId)) === "brand_admin";
  if (!isAdmin) redirect("/teach");

  const courses = await sdb.listCourses({ includeUnpublished: true, sort: "newest" });
  const rows: AnnounceCourseRow[] = courses.map((c) => ({
    id: c.id,
    title: c.title,
    coverImageUrl: c.coverImageUrl,
    isPublished: c.isPublished,
    announcedAt: c.announcedAt ? c.announcedAt.toISOString() : null,
  }));

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link href="/teach" className="text-sm underline" style={{ color: "var(--accent)" }}>
        ← Your courses
      </Link>
      <h1 className="mt-4 text-2xl font-bold">Announce courses</h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        Send new-course announcements to the WitUS Outbox as drafts. Review each draft and choose the
        social profiles there before it publishes — nothing goes out automatically.
      </p>
      <div className="mt-6">
        <AnnounceManager courses={rows} outboxConfigured={hasOutbox} />
      </div>
    </main>
  );
}
