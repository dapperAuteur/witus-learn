import Link from "next/link";
import type { Metadata } from "next";
import { requireTenant } from "@/lib/tenant";
import { getSession } from "@/lib/session";
import { templateByKey } from "@/lib/field-log-templates";
import { StartProjectButton } from "@/components/field-log/start-project-button";

export const metadata: Metadata = { title: "Start your project — Field Log" };

type SP = { searchParams: Promise<{ template?: string | string[]; title?: string | string[] }> };

// The capstone deep-link target (from a lesson's `:::field-log <template>` callout). Confirms +
// names the project, then creates it. A confirm step (not auto-create-on-GET) avoids duplicate
// projects from link prefetch.
export default async function StartProjectPage({ searchParams }: SP) {
  await requireTenant();
  const sp = await searchParams;
  const templateKey = typeof sp.template === "string" ? sp.template : "foundations-capstone";
  const titleParam = typeof sp.title === "string" ? sp.title : "";
  const session = await getSession();
  const template = templateByKey(templateKey);

  if (!session) {
    return (
      <main className="mx-auto max-w-xl px-4 py-12">
        <h1 className="text-2xl font-bold">Start your project</h1>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400">
          Please <Link href="/login" className="underline">sign in</Link> to start a documentation project.
        </p>
      </main>
    );
  }

  if (!template) {
    return (
      <main className="mx-auto max-w-xl px-4 py-12">
        <h1 className="text-2xl font-bold">Unknown project template</h1>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400">
          That template isn&apos;t available. Go to <Link href="/field-log" className="underline">My Field Log</Link>{" "}
          to start one from the list.
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-xl px-4 py-12">
      <h1 className="text-2xl font-bold">Start your project</h1>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        <strong>{template.title}</strong> — {template.description}
      </p>
      <div className="mt-6">
        <StartProjectButton templateKey={template.key} defaultTitle={titleParam || template.title} />
      </div>
      <p className="mt-4 text-sm">
        <Link href="/field-log" className="text-neutral-500 hover:underline">Cancel</Link>
      </p>
    </main>
  );
}
