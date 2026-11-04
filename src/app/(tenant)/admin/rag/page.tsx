import type { Metadata } from "next";
import Link from "next/link";
import { requirePlatformOwner } from "@/lib/session";
import { listCourseIndexStates } from "@/lib/rag/index-course";
import { ragAdminRows } from "@/lib/rag/admin-list";
import { EMBED_MODEL } from "@/lib/rag/embed-batch";
import { RagIndexAdmin } from "@/components/rag-index-admin";

/** Owner-only operator page behind admin auth, never shared or indexed, so no social card by design. */
export const metadata: Metadata = {
  title: "Source chat index",
  description: "Courses whose chat-with-the-sources index is missing or out of date, with a Run button for each.",
  robots: { index: false, follow: false },
};
export const dynamic = "force-dynamic";

// /admin/rag (BAM, 2026-11-02): the courses whose "chat with the sources" index is new (never
// indexed) or changed since it was indexed, each with a Run button, plus Run all. The list is
// listCourseIndexStates (src/lib/rag/index-course.ts), the same rule `pnpm rag:list` and
// seed-production.yml use, so the three never disagree. Owner-only and cross-school like the CLI:
// the index is built per course for the whole catalog.
export default async function RagIndexAdminPage() {
  await requirePlatformOwner();
  const states = await listCourseIndexStates();
  const { rows, current, empty } = ragAdminRows(states);
  const hasKey = Boolean(process.env.MISTRAL_API_KEY);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-bold">Source chat index</h1>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        Courses whose &ldquo;chat with the sources&rdquo; index was never built, or whose lessons or sources changed since
        it was. Run one, or Run all to work through the list one course at a time. Embeddings use Mistral&apos;s{" "}
        <span className="font-mono">{EMBED_MODEL}</span>. A run that fails leaves the course&apos;s old index as it was.
      </p>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        {current} {current === 1 ? "course is" : "courses are"} current
        {empty > 0 ? `; ${empty} ${empty === 1 ? "has" : "have"} nothing to index yet` : ""}. Set who may use the chat on{" "}
        <Link href="/admin/source-chat" className="underline" style={{ color: "var(--accent)" }}>
          Course chat
        </Link>
        .
      </p>
      {!hasKey ? (
        <p role="alert" className="mt-4 rounded-md bg-amber-50 p-3 text-sm text-amber-900 dark:bg-amber-950/40 dark:text-amber-200">
          MISTRAL_API_KEY is not set on this deployment, so a run will fail. Add it in the hosting settings and redeploy.
        </p>
      ) : null}
      <div className="mt-6">
        <RagIndexAdmin initial={rows} />
      </div>
    </main>
  );
}
