// Estimated processor fee so an instructor sees roughly what they keep when they set a
// price. These are the common US Stripe card defaults (2.9% + $0.30) — an ESTIMATE, not
// authoritative; actual fees vary by country, card, and plan. Override via env. Always
// present the net as "estimated" in the UI (see the authoritative-values rule in CLAUDE.md).
export const FEE_PERCENT = Number(process.env.NEXT_PUBLIC_STRIPE_FEE_PERCENT ?? "2.9");
export const FEE_FIXED = Number(process.env.NEXT_PUBLIC_STRIPE_FEE_FIXED ?? "0.30");

/** Estimated processor fee on a one-time charge of `price` dollars. */
export function estimatedFee(price: number): number {
  if (!price || price <= 0) return 0;
  return Math.round((price * (FEE_PERCENT / 100) + FEE_FIXED) * 100) / 100;
}

/** Estimated amount the instructor keeps after the processor fee. */
export function estimatedNet(price: number): number {
  return Math.round((price - estimatedFee(price)) * 100) / 100;
}
