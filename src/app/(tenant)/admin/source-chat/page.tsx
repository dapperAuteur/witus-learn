import type { Metadata } from "next";
import { requirePlatformOwner } from "@/lib/session";
import { requireTenant } from "@/lib/tenant";
import { listCourseOptions } from "@/db/queries/live";
import { SourceChatAdmin } from "@/components/source-chat-admin";

export const metadata: Metadata = { title: "Source Chat" };

// Owner dashboard for "chat with the sources": pick a course, set the access stage + which agents run +
// provider/params, save, and test the grounded chat inline. Index a course first with `pnpm rag:index`.
export default async function SourceChatAdminPage() {
  await requirePlatformOwner();
  const tenant = await requireTenant();
  const courses = await listCourseOptions(tenant.id);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-bold">Chat with the sources</h1>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        A retrieval-grounded, multi-agent chat over a course&apos;s indexed sources. Pick a course, choose
        who can use it and which agents run, then test it below. Build a course&apos;s index first with{" "}
        <span className="break-all font-mono">pnpm rag:index --course &lt;slug&gt;</span> (see{" "}
        <span className="break-all font-mono">/admin/commands</span>).
      </p>
      <div className="mt-6">
        <SourceChatAdmin courses={courses} />
      </div>
    </main>
  );
}
