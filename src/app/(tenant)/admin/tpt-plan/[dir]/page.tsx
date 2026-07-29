import type { Metadata } from "next";
import Link from "next/link";
import { requirePlatformOwner } from "@/lib/session";
import { getScopedDb } from "@/db/scoped";
import { brandName } from "@/lib/branding";
import { readPacket } from "@/lib/tpt-packets";
import { TPT_PLAN } from "@/lib/tpt-plan";
import { TptPacketView } from "@/components/tpt-packet-view";

export const metadata: Metadata = { title: "TpT packet preview" };

// Owner-only preview + print-to-PDF + inline edit for a built TpT packet. The packet markdown is
// gitignored (local build artifacts), so this reads the local filesystem and only shows real content
// when the app runs where the files exist (local dev). On a deployment it renders an honest empty state.
export default async function TptPacketPreviewPage({ params }: { params: Promise<{ dir: string }> }) {
  await requirePlatformOwner();
  const { dir } = await params;
  const sdb = await getScopedDb();
  const brand = brandName(sdb.tenant);

  const item = TPT_PLAN.find((i) => i.packetDir === dir);
  const title = item?.title ?? dir.replace(/-/g, " ");
  const files = await readPacket(dir);

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <div className="mb-4 print:hidden">
        <Link href="/admin/tpt-plan" className="text-sm underline" style={{ color: "var(--accent)" }}>
          ← TpT plan
        </Link>
      </div>

      {files.length === 0 ? (
        <div className="rounded-lg border border-neutral-200 p-6 dark:border-neutral-800">
          <h1 className="text-xl font-bold">No packet files found for &ldquo;{dir}&rdquo;</h1>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            This packet&apos;s markdown lives gitignored under{" "}
            <code>plans/future-courses/tpt-packets/{dir}/</code> and isn&apos;t part of a deployment,
            so preview and PDF only work when you run the app locally (<code>pnpm dev</code>), where the
            files exist. If you&apos;re local and still see this, the packet hasn&apos;t been built yet.
          </p>
        </div>
      ) : (
        <TptPacketView dir={dir} title={title} brand={brand} initialFiles={files} />
      )}
    </main>
  );
}
