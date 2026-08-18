import { describe, expect, it } from "vitest";
import { resolvePrice, type PromotionLike } from "@/lib/sale-pricing";

// Codeless promotions are prices, so a leak here is not a cosmetic bug: tenant A's "everything
// free" week would zero out tenant B's catalog, and (because checkout re-resolves the same way)
// actually give away tenant B's courses. This pins the boundary at the pure layer, where every
// surface and the checkout routes meet. The DB half is tests/isolation/promotions.db.test.ts.

const A = "tenant-a";
const B = "tenant-b";

function row(over: Partial<PromotionLike>): PromotionLike {
  return {
    id: "p",
    tenantId: A,
    name: "Everything free",
    scope: "tenant",
    courseId: null,
    bundleId: null,
    kind: "free",
    value: null,
    startsAt: null,
    endsAt: null,
    endedAt: null,
    createdAt: new Date("2026-01-01T00:00:00Z"),
    ...over,
  };
}

describe("a sale in one tenant never changes another tenant's price", () => {
  const courseInB = { kind: "course" as const, id: "b-course" };

  it("a brand-wide sale in A does not touch a course in B", () => {
    const v = resolvePrice({
      tenantId: B,
      target: courseInB,
      listPrice: "19",
      priceType: "one_time",
      promotions: [row({ id: "a-wide" })],
    });
    expect(v.effectivePrice).toBe(19);
    expect(v.discounted).toBe(false);
    expect(v.promotion).toBeNull();
  });

  it("a sale in A naming B's course id still does not apply (the row is A's)", () => {
    const v = resolvePrice({
      tenantId: B,
      target: courseInB,
      listPrice: "19",
      priceType: "one_time",
      promotions: [row({ id: "a-targeted", scope: "course", courseId: "b-course" })],
    });
    expect(v.effectivePrice).toBe(19);
    expect(v.promotion).toBeNull();
  });

  it("a sale in A naming B's bundle id does not apply either", () => {
    const v = resolvePrice({
      tenantId: B,
      target: { kind: "bundle", id: "b-bundle" },
      listPrice: "49",
      priceType: "one_time",
      promotions: [row({ id: "a-bundle", scope: "bundle", bundleId: "b-bundle" })],
    });
    expect(v.effectivePrice).toBe(49);
  });

  it("B's own sale still applies when A's rows are mixed into the same list", () => {
    const v = resolvePrice({
      tenantId: B,
      target: courseInB,
      listPrice: "19",
      priceType: "one_time",
      promotions: [
        row({ id: "a-wide" }),
        row({ id: "b-own", tenantId: B, kind: "percent", value: "50" }),
      ],
    });
    expect(v.promotion?.id).toBe("b-own");
    expect(v.effectivePrice).toBe(9.5);
  });

  it("A's rows cannot even win a tie against B's own", () => {
    const v = resolvePrice({
      tenantId: B,
      target: courseInB,
      listPrice: "19",
      priceType: "one_time",
      promotions: [
        // Newer AND deeper AND more specific: still inert, because it belongs to A.
        row({
          id: "a-newer",
          scope: "course",
          courseId: "b-course",
          createdAt: new Date("2030-01-01T00:00:00Z"),
        }),
        row({ id: "b-own", tenantId: B, kind: "amount", value: "1" }),
      ],
    });
    expect(v.promotion?.id).toBe("b-own");
    expect(v.effectivePrice).toBe(18);
  });
});
