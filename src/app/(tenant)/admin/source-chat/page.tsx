import type { Metadata } from "next";
import { requirePlatformOwner } from "@/lib/session";
import { requireTenant } from "@/lib/tenant";
import { listCourseOptions } from "@/db/queries/live";
import Link from "next/link";
import { SourceChatAdmin } from "@/components/source-chat-admin";
import { CourseChatOpenSwitch } from "@/components/course-chat-open-switch";
import { courseChatOpenToOthers } from "@/db/queries/source-chat-config";

export const metadata: Metadata = { title: "Course chat" };

// Owner dashboard for the course chat (one tool since 2026-11-03; it replaced "Ask the course tutor" and "Chat
// with the sources"): pick a course, set the access stage + which agents run + provider/params, save, and test
// the grounded chat inline. Index a course first on /admin/rag (or `pnpm rag:index`). Above the per-course config
// sits the platform-wide "Course chat for everyone else" switch (off by default: only the owner gets the chat).
export default async function SourceChatAdminPage() {
  await requirePlatformOwner();
  const tenant = await requireTenant();
  const [courses, openToOthers] = await Promise.all([listCourseOptions(tenant.id), courseChatOpenToOthers()]);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-bold">Course chat</h1>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        The course page&apos;s one chat (it replaced &ldquo;Ask the course tutor&rdquo; and &ldquo;Chat with the
        sources&rdquo;): retrieval-grounded, multi-agent, with follow-up questions and numbered sources that link
        to the passage. Until you turn on &ldquo;Course chat for everyone else&rdquo;, only you see it. After that,
        each course&apos;s &ldquo;Who can use it&rdquo; decides; a course with nothing saved stays only you, and the
        brand&apos;s AI tutor switch turns it off for that school&apos;s learners. Pick a course, choose who can use
        it and which agents run, then test it below. Build a course&apos;s index first on{" "}
        <Link href="/admin/rag" className="underline" style={{ color: "var(--accent)" }}>
          Source chat index
        </Link>{" "}
        (or <span className="break-all font-mono">pnpm rag:index --course &lt;slug&gt;</span>).
      </p>
      <section aria-labelledby="open-h" className="mt-6 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
        <h2 id="open-h" className="font-semibold">
          Course chat for everyone else
        </h2>
        <CourseChatOpenSwitch on={openToOthers} />
      </section>
      <div className="mt-6">
        <SourceChatAdmin courses={courses} openToOthers={openToOthers} />
      </div>
    </main>
  );
}
