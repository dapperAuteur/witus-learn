import type { Metadata } from "next";
import Link from "next/link";
import { requirePlatformOwner } from "@/lib/session";
import { listSavedSourceChatCourses, listSavedSourceChats } from "@/db/queries/source-chat-history";
import { SavedSourceChatManager } from "@/components/saved-source-chats";

/** Owner-only operator page behind admin auth, never shared or indexed, so no social card by design. */
export const metadata: Metadata = {
  title: "Saved course chats",
  description: "Your saved course-chat conversations across every course, with Delete per conversation and Delete all.",
  robots: { index: false, follow: false },
};
export const dynamic = "force-dynamic";

// /admin/source-chat-history (BAM, 2026-11-02): the platform owner's saved course-chat conversations (one row
// per turn, shown as whole threads since migration 0078), newest first, across every course and school (the owner is cross-school, like /admin/rag),
// with a course filter. Only the owner's questions are ever saved (src/lib/source-chat-history.ts), and
// every read and delete is keyed by the owner's own user id.
export default async function SavedSourceChatsPage({ searchParams }: { searchParams: Promise<{ course?: string }> }) {
  const session = await requirePlatformOwner();
  const { course } = await searchParams;
  const courses = await listSavedSourceChatCourses(session.user.id);
  // Only a course the owner actually has saved chats for is a valid filter; anything else shows all.
  const courseId = courses.some((c) => c.courseId === course) ? (course as string) : null;
  const rows = await listSavedSourceChats(session.user.id, { courseId, limit: 200 });
  const items = rows.map((r) => ({ ...r, createdAt: r.createdAt.toISOString() }));

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-bold">Saved course chats</h1>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        Every conversation you had with a course&apos;s chat, each question with its answer and the sources it
        cited, newest first (the latest 200 questions shown, so the oldest thread on the page may be cut short).
        Only your questions are saved; nobody else&apos;s are. Set who may use the chat on{" "}
        <Link href="/admin/source-chat" className="underline" style={{ color: "var(--accent)" }}>
          Course chat
        </Link>
        .
      </p>

      {courses.length > 1 ? (
        <form method="get" className="mt-4 flex flex-wrap items-end gap-2">
          <label className="text-sm">
            <span className="block font-medium">Course</span>
            <select
              name="course"
              defaultValue={courseId ?? ""}
              className="mt-1 min-h-11 rounded-md border border-neutral-300 px-3 text-sm dark:border-neutral-700 dark:bg-neutral-900"
            >
              <option value="">All courses</option>
              {courses.map((c) => (
                <option key={c.courseId} value={c.courseId}>
                  {c.courseTitle} ({c.tenantName})
                </option>
              ))}
            </select>
          </label>
          <button
            type="submit"
            className="min-h-11 rounded-md px-4 text-sm font-medium text-white"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Show
          </button>
        </form>
      ) : null}

      {/* Keyed by the filter so changing it starts from the server's list, not the last one's state. */}
      <SavedSourceChatManager key={courseId ?? "all"} initial={items} courseId={courseId} />
    </main>
  );
}
