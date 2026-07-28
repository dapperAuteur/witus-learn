import type { Metadata } from "next";
import { requirePlatformOwner } from "@/lib/session";
import { listSchoolsWithBilling } from "@/db/queries/platform-subscriptions";
import { SchoolBillingForm } from "@/components/school-billing-form";

export const metadata: Metadata = { title: "School billing" };

function money(cents: number, currency: string): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: currency.toUpperCase() }).format(cents / 100);
}

// Platform-owner only (plans/51). Sell each white-label school at its own price, recurring or lifetime.
// Cross-tenant by design, so it gates on requirePlatformOwner, not a per-tenant admin check.
export default async function SchoolBillingPage() {
  await requirePlatformOwner();
  const schools = await listSchoolsWithBilling();

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-bold">School billing</h1>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
        Sell each white-label school at its own price, as a recurring subscription or a one-time
        lifetime payment. Create a deal to get a Stripe checkout link to send the school; when they pay,
        their school is marked active automatically.
      </p>

      <SchoolBillingForm schools={schools.map((s) => ({ tenantId: s.tenantId, tenantName: s.tenantName }))} />

      <h2 className="mt-8 text-lg font-semibold">Schools</h2>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neutral-200 text-left text-neutral-500 dark:border-neutral-800">
              <th className="py-2 pr-4">School</th>
              <th className="py-2 pr-4">Plan</th>
              <th className="py-2 pr-4">Price</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {schools.map((s) => {
              const sub = s.subscription;
              return (
                <tr key={s.tenantId} className="border-b border-neutral-100 dark:border-neutral-900">
                  <td className="py-2 pr-4">{s.tenantName}</td>
                  <td className="py-2 pr-4">
                    {sub ? (sub.billingType === "lifetime" ? "Lifetime" : `Subscription, ${sub.interval}`) : "no deal"}
                  </td>
                  <td className="py-2 pr-4">{sub ? money(sub.amountCents, sub.currency) : ""}</td>
                  <td className="py-2">{sub ? sub.status : ""}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}
