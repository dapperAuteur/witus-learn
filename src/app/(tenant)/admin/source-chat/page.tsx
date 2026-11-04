import type { Metadata } from "next";
import { requirePlatformOwner } from "@/lib/session";
import { requireTenant } from "@/lib/tenant";
import { listCourseOptions } from "@/db/queries/live";
import Link from "next/link";
import { SourceChatAdmin } from "@/components/source-chat-admin";

export const metadata: Metadata = { title: "Course chat" };

// Owner dashboard for the course chat (one tool since 2026-11-03; it replaced "Ask the course tutor" and "Chat
// with the sources"): pick a course, set the access stage + which agents run + provider/params, save, and test
// the grounded chat inline. Index a course first on /admin/rag (or `pnpm rag:index`).
export default async function SourceChatAdminPage() {
  await requirePlatformOwner();
  const tenant = await requireTenant();
  const courses = await listCourseOptions(tenant.id);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-bold">Course chat</h1>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        The course page&apos;s one chat (it replaced &ldquo;Ask the course tutor&rdquo; and &ldquo;Chat with the
        sources&rdquo;): retrieval-grounded, multi-agent, with follow-up questions and numbered sources that link
        to the passage. A course with nothing saved here is open to learners enrolled on a paid course, the
        tutor&apos;s old audience; the brand&apos;s AI tutor switch turns it off for learners. Pick a course, choose
        who can use it and which agents run, then test it below. Build a course&apos;s index first on{" "}
        <Link href="/admin/rag" className="underline" style={{ color: "var(--accent)" }}>
          Source chat index
        </Link>{" "}
        (or <span className="break-all font-mono">pnpm rag:index --course &lt;slug&gt;</span>).
      </p>
      <div className="mt-6">
        <SourceChatAdmin courses={courses} />
      </div>
    </main>
  );
}
