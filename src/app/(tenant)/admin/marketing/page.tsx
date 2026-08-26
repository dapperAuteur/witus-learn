import type { Metadata } from "next";
import Link from "next/link";
import { getScopedDb } from "@/db/scoped";
import { requireBrandAdmin } from "@/lib/session";
import { listPromos } from "@/db/queries/connect";
import { getAudienceCounts, listCampaigns } from "@/db/queries/marketing";
import { getShareStats } from "@/db/queries/social-shares";
import { loadTenantInterest } from "@/db/queries/leads";
import { countByCourse } from "@/lib/lead-interest";
import { hasOutbox } from "@/lib/ecosystem-webhook";
import { brandName } from "@/lib/branding";
import { listBundles } from "@/db/queries/bundles";
import { toSaleView } from "@/lib/sale-pricing";
import { MarketingAdmin, type PromoView } from "@/components/marketing-admin";
import { SalesAdmin, type SaleTarget } from "@/components/sales-admin";
import { CampaignComposer, type CampaignView } from "@/components/campaign-composer";
import { AnnouncementComposer } from "@/components/announcement-composer";

export const metadata: Metadata = {
  title: "Marketing",
  description: "Promo codes, course announcements, email drafts, demand and share stats in one place.",
};

// Every marketing lever that actually exists, on one brand-admin surface. Tenant-scoped
// throughout: promos, campaigns, leads, shares and courses are all loaded for THIS tenant
// only, and the announce + campaign APIs re-check the tenant server-side.
export default async function MarketingPage() {
  const sdb = await getScopedDb();
  const session = await requireBrandAdmin(sdb.tenantId);
  const tenant = sdb.tenant;
  const brand = brandName(tenant);

  const [promoRows, audience, campaignRows, shares, interest, allCourses, saleRows, bundleRows] =
    await Promise.all([
      listPromos(tenant.id, session.user.id),
      getAudienceCounts(tenant.id),
      listCampaigns(tenant.id),
      getShareStats(tenant.id),
      loadTenantInterest(tenant.id),
      sdb.listCourses({ includeUnpublished: true, sort: "newest" }),
      // Codeless sales for THIS tenant, and the bundles a sale can target.
      sdb.listPromotions(),
      listBundles(tenant.id, { includeUnpublished: true }),
    ]);

  const promos: PromoView[] = promoRows.map((p) => ({
    code: p.code,
    discountPercent: p.discountPercent,
    courseId: p.courseId ?? null,
    maxUses: p.maxUses ?? null,
    expiresAt: p.expiresAt ? new Date(p.expiresAt).toISOString() : null,
  }));
  const now = new Date();
  const sales = saleRows.map((s) => toSaleView(s, now));
  const saleCourses: SaleTarget[] = allCourses.map((c) => ({
    id: c.id,
    title: c.title,
    kind: "course" as const,
  }));
  const saleBundles: SaleTarget[] = bundleRows.map((b) => ({
    id: b.id,
    title: b.title,
    kind: "bundle" as const,
  }));
  const campaigns: CampaignView[] = campaignRows.map((c) => ({
    id: c.id,
    subject: c.subject,
    audience: c.audience,
    status: c.status,
    createdAt: new Date(c.createdAt).toISOString(),
  }));

  const published = allCourses.filter((c) => c.isPublished);
  const unannounced = published.filter((c) => !c.announcedAt);
  const topDemand = countByCourse(interest.leads, interest.courses).slice(0, 3);
  const topChannels = shares.byChannel.slice(0, 3);

  const card = "rounded-2xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900";

  return (
    <main className="max-w-3xl py-10">
      <Link href="/admin" className="text-sm text-neutral-600 hover:underline">
        ← Admin
      </Link>
      <h1 className="mt-3 text-2xl font-bold">Marketing</h1>
      <p className="mt-1 text-sm text-neutral-600">
        Every marketing lever for {brand} in one place: who is interested, what to announce, and the
        codes and drafts to act on it.
      </p>

      <section aria-labelledby="mkt-signals" className="mt-6">
        <h2 id="mkt-signals" className="text-lg font-bold">
          Signals
        </h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          <div className={card}>
            <p className="text-2xl font-bold">{interest.leads.length}</p>
            <p className="text-sm text-neutral-600">
              Captured leads{interest.truncated ? " (first 1000)" : ""}
            </p>
            <Link href="/admin/leads" className="mt-1 inline-block text-sm hover:underline" style={{ color: "var(--accent)" }}>
              Interest &amp; leads
            </Link>
          </div>
          <div className={card}>
            <p className="text-sm font-semibold">Top demand</p>
            {topDemand.length === 0 ? (
              <p className="mt-1 text-sm text-neutral-600">No course-specific interest yet.</p>
            ) : (
              <ul className="mt-1 space-y-1 text-sm">
                {topDemand.map((d) => (
                  <li key={d.key} className="flex justify-between gap-2">
                    <span className="truncate">{d.label}</span>
                    <span className="shrink-0 text-neutral-600">{d.leads} waiting</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className={card}>
            <p className="text-2xl font-bold">{shares.total}</p>
            <p className="text-sm text-neutral-600">
              Shares from the in-app share buttons
              {topChannels.length > 0
                ? ` (${topChannels.map((c) => `${c.channel} ${c.count}`).join(", ")})`
                : ""}
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="mkt-announce" className="mt-10">
        <h2 id="mkt-announce" className="text-lg font-bold">
          Course announcements
        </h2>
        {unannounced.length === 0 ? (
          <p className="mt-1 text-sm text-neutral-600">
            Every published course has been announced. New courses appear here when they publish.
          </p>
        ) : (
          <div className="mt-1">
            <p className="text-sm text-neutral-600">
              {unannounced.length} of {published.length} published course
              {published.length === 1 ? "" : "s"} not announced yet
              {hasOutbox
                ? ". Announcing creates social-post drafts in the WitUS Outbox; nothing publishes automatically."
                : ". The WitUS Outbox is not configured, so the social batch tool cannot send; the email draft below still works."}
            </p>
            <ul className="mt-2 list-inside list-disc text-sm text-neutral-600 dark:text-neutral-400">
              {unannounced.slice(0, 5).map((c) => (
                <li key={c.id} className="truncate">
                  {c.title}
                </li>
              ))}
              {unannounced.length > 5 ? <li>and {unannounced.length - 5} more</li> : null}
            </ul>
          </div>
        )}
        <Link
          href="/teach/announce"
          className="mt-3 inline-flex min-h-11 items-center rounded-md border border-neutral-300 px-4 font-medium hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-neutral-700 dark:hover:bg-neutral-800"
        >
          Open the announcement manager
        </Link>
        <div className="mt-4">
          <AnnouncementComposer
            brand={brand}
            courses={published.map((c) => ({ id: c.id, title: c.title, description: c.description }))}
          />
        </div>
      </section>

      <section aria-labelledby="mkt-promos" className="mt-10">
        <h2 id="mkt-promos" className="text-lg font-bold">
          Promo codes
        </h2>
        <div className="mt-3">
          <MarketingAdmin initial={promos} />
        </div>
      </section>

      <section aria-labelledby="mkt-sales" className="mt-10">
        <h2 id="mkt-sales" className="text-lg font-bold">
          Sales and promotions
        </h2>
        <p className="mt-1 text-sm text-neutral-600">
          Discounts that need <strong>no code</strong>. The course or bundle page shows the old price
          struck through beside the new one, and checkout charges the new price. The list price you
          set on the course is never overwritten, so a sale always ends cleanly.
        </p>
        <div className="mt-3">
          <SalesAdmin initial={sales} courses={saleCourses} bundles={saleBundles} />
        </div>
      </section>

      <section aria-labelledby="mkt-campaigns" className="mt-10">
        <h2 id="mkt-campaigns" className="text-lg font-bold">
          Email campaigns
        </h2>
        <p className="mt-1 text-sm text-neutral-600">
          Compose and save drafts now. <strong>Sending is disabled</strong> until the audience,
          consent and unsubscribe rules are signed off; the open decisions are listed in{" "}
          <code>docs-notes-admin-marketing.md</code>. Until then, send saved drafts through your own
          email tool.
        </p>
        <div className="mt-4">
          <CampaignComposer audience={audience} initial={campaigns} />
        </div>
      </section>
    </main>
  );
}
