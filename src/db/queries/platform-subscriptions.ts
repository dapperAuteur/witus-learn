import "server-only";
import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { platformSubscriptions, type PlatformSubscription } from "@/db/schema/billing";
import { tenants } from "@/db/schema/tenancy";

// Per-school platform billing (plans/51). One row per school; each carries its own negotiated price,
// recurring or lifetime. NOT tenant-scoped by a request host: this is a platform-owner surface that
// operates ACROSS tenants (BAM sells schools), so the caller authorizes with isPlatformOwner, and the
// webhook (which has no host) keys off the Stripe metadata.

export interface PlatformDealInput {
  tenantId: string;
  billingType: "subscription" | "lifetime";
  /** 'month' | 'year' for a subscription; null for lifetime. */
  interval: "month" | "year" | null;
  amountCents: number;
  currency?: string;
}

/** Create or replace a school's billing deal, resetting it to 'pending' (a new deal is unpaid until
 *  its checkout completes). One row per school (unique tenant_id), so this upserts. */
export async function upsertPlatformDeal(input: PlatformDealInput): Promise<PlatformSubscription> {
  const values = {
    tenantId: input.tenantId,
    billingType: input.billingType,
    interval: input.interval,
    amountCents: input.amountCents,
    currency: input.currency ?? "usd",
    status: "pending" as const,
  };
  const [row] = await db
    .insert(platformSubscriptions)
    .values(values)
    .onConflictDoUpdate({
      target: platformSubscriptions.tenantId,
      set: { ...values, updatedAt: new Date() },
    })
    .returning();
  return row;
}

/** The school's id + name, for a checkout. */
export async function getSchoolForBilling(id: string): Promise<{ id: string; name: string } | null> {
  const [row] = await db.select({ id: tenants.id, name: tenants.name }).from(tenants).where(eq(tenants.id, id)).limit(1);
  return row ?? null;
}

export async function getPlatformSubscription(tenantId: string): Promise<PlatformSubscription | null> {
  const [row] = await db
    .select()
    .from(platformSubscriptions)
    .where(eq(platformSubscriptions.tenantId, tenantId))
    .limit(1);
  return row ?? null;
}

export interface PlatformSubscriptionWithName extends PlatformSubscription {
  tenantName: string;
}

/** Every school's billing row with its name, for the owner's billing dashboard. */
export async function listPlatformSubscriptions(): Promise<PlatformSubscriptionWithName[]> {
  const rows = await db
    .select({ ps: platformSubscriptions, tenantName: tenants.name })
    .from(platformSubscriptions)
    .innerJoin(tenants, eq(tenants.id, platformSubscriptions.tenantId));
  return rows.map((r) => ({ ...r.ps, tenantName: r.tenantName }));
}

export interface SchoolBillingRow {
  tenantId: string;
  tenantName: string;
  isActive: boolean;
  subscription: PlatformSubscription | null;
}

/** Every school (tenant) with its billing row (null if none yet), for the owner's billing page. */
export async function listSchoolsWithBilling(): Promise<SchoolBillingRow[]> {
  const rows = await db
    .select({ tenant: tenants, ps: platformSubscriptions })
    .from(tenants)
    .leftJoin(platformSubscriptions, eq(platformSubscriptions.tenantId, tenants.id))
    .orderBy(tenants.name);
  return rows.map((r) => ({
    tenantId: r.tenant.id,
    tenantName: r.tenant.name,
    isActive: r.tenant.isActive,
    subscription: r.ps,
  }));
}

/** Webhook: a school's checkout completed. Mark the row active, store the Stripe ids, and activate the
 *  tenant so the school goes live. Idempotent: a Stripe retry just rewrites the same active row. */
export async function activatePlatformSubscription(opts: {
  tenantId: string;
  checkoutSessionId: string;
  stripeCustomerId: string | null;
  stripeSubscriptionId: string | null;
}): Promise<void> {
  await db
    .update(platformSubscriptions)
    .set({
      status: "active",
      stripeCheckoutSessionId: opts.checkoutSessionId,
      stripeCustomerId: opts.stripeCustomerId,
      stripeSubscriptionId: opts.stripeSubscriptionId,
      updatedAt: new Date(),
    })
    .where(eq(platformSubscriptions.tenantId, opts.tenantId));
  await db.update(tenants).set({ isActive: true }).where(eq(tenants.id, opts.tenantId));
}

/** Webhook: a school's recurring subscription changed (active, past_due, or canceled). Lifetime rows
 *  never reach here. On cancel we do NOT auto-delete the tenant; we mark it so BAM decides whether to
 *  suspend, since a cancelled platform sub is a business event, not a data-cleanup one. Keyed by the
 *  Stripe subscription id, so it only ever matches a platform row (never a student's course sub, which
 *  lives in a different table), and a repeated webhook is a no-op rewrite of the same status. */
export async function setPlatformSubscriptionStatusByStripeId(
  stripeSubscriptionId: string,
  status: "active" | "past_due" | "canceled",
): Promise<void> {
  await db
    .update(platformSubscriptions)
    .set({ status, updatedAt: new Date() })
    .where(eq(platformSubscriptions.stripeSubscriptionId, stripeSubscriptionId));
}

/** Owner suspend/reactivate: set a school's billing status directly by tenant id. Used by the
 *  suspend/reactivate control, not the webhook (which keys off Stripe ids). A no-op if the school has
 *  no billing row yet, and idempotent (re-running rewrites the same status). */
export async function setPlatformSubscriptionStatusByTenantId(
  tenantId: string,
  status: "pending" | "active" | "past_due" | "canceled",
): Promise<void> {
  await db
    .update(platformSubscriptions)
    .set({ status, updatedAt: new Date() })
    .where(eq(platformSubscriptions.tenantId, tenantId));
}

/** Owner suspend/reactivate: flip whether a school (tenant) is live. Suspending hides the school from
 *  its learners; reactivating brings it back. Idempotent (setting the same value is a no-op rewrite). */
export async function setTenantActive(tenantId: string, active: boolean): Promise<void> {
  await db.update(tenants).set({ isActive: active }).where(eq(tenants.id, tenantId));
}
