import type { Metadata } from "next";
import Link from "next/link";
import { requireTenant } from "@/lib/tenant";
import { requirePlatformOwner, getSession } from "@/lib/session";
import { listPromos } from "@/db/queries/connect";
import { getAudienceCounts, listCampaigns } from "@/db/queries/marketing";
import { MarketingAdmin, type PromoView } from "@/components/marketing-admin";
import { CampaignComposer, type CampaignView } from "@/components/campaign-composer";

export const metadata: Metadata = { title: "Marketing" };

export default async function MarketingPage() {
  const tenant = await requireTenant();
  await requirePlatformOwner();
  const session = await getSession();
  const rows = session ? await listPromos(tenant.id, session.user.id) : [];
  const promos: PromoView[] = rows.map((p) => ({
    code: p.code,
    discountPercent: p.discountPercent,
    courseId: p.courseId ?? null,
    maxUses: p.maxUses ?? null,
    expiresAt: p.expiresAt ? new Date(p.expiresAt).toISOString() : null,
  }));

  const [audience, campaignRows] = await Promise.all([
    getAudienceCounts(tenant.id),
    listCampaigns(tenant.id),
  ]);
  const campaigns: CampaignView[] = campaignRows.map((c) => ({
    id: c.id,
    subject: c.subject,
    audience: c.audience,
    status: c.status,
    createdAt: new Date(c.createdAt).toISOString(),
  }));

  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <Link href="/admin" className="text-sm text-neutral-500 hover:underline">
        ← Admin
      </Link>
      <h1 className="mt-3 text-2xl font-bold">Marketing</h1>
      <p className="mt-1 text-sm text-neutral-500">Promo codes for {tenant.name}.</p>

      <div className="mt-6">
        <MarketingAdmin initial={promos} />
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold">Email campaigns</h2>
        <p className="mt-1 text-sm text-neutral-500">
          Compose and save drafts now. <strong>Sending is disabled</strong> until you sign off on the
          audience + rules — see <code>docs/DECISIONS-NEEDED.md</code>.
        </p>
        <div className="mt-4">
          <CampaignComposer audience={audience} initial={campaigns} />
        </div>
      </section>
    </main>
  );
}
