import type { Metadata } from "next";
import Link from "next/link";
import { getScopedDb } from "@/db/scoped";
import { requireBrandAdmin } from "@/lib/session";
import { listApiKeys } from "@/db/queries/api-keys";
import { ApiKeysAdmin } from "@/components/api-keys-admin";

export const metadata: Metadata = { title: "API keys" };

// Admin: mint/revoke server-to-server read API keys for this school (brand-admin/owner
// only, tenant-scoped). Powers external embeds (e.g. WanderLearn) reading published
// course/lesson metadata via /api/v1 — see plans/wanderlearn-embed-design.md.
export default async function ApiKeysAdminPage() {
  const sdb = await getScopedDb();
  await requireBrandAdmin(sdb.tenantId);
  const keys = await listApiKeys(sdb.tenantId);

  return (
    <main className="max-w-2xl py-10">
      <Link href="/admin" className="text-sm underline" style={{ color: "var(--accent)" }}>
        ← Admin
      </Link>
      <h1 className="mt-4 text-2xl font-bold">API keys</h1>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
        Server-to-server read access for another app to embed {sdb.tenant.name}&rsquo;s published
        courses (e.g. WanderLearn). Each key only ever sees THIS school&rsquo;s published, public
        content, never drafts, never another school&rsquo;s. The full key is shown once, right
        after you create it; after that, only a short prefix is kept for identification. Store it
        somewhere safe (a secret manager on the consuming app&rsquo;s side), it can&rsquo;t be
        retrieved again, only revoked and replaced.
      </p>
      <div className="mt-6">
        <ApiKeysAdmin keys={keys} />
      </div>
    </main>
  );
}
