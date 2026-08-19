import { describe, expect, it } from "vitest";
import {
  applyPromotion,
  bundlePriceView,
  coursePriceView,
  describeSale,
  formatPrice,
  isPromotionActive,
  priceAnnouncement,
  promotionStatus,
  resolvePrice,
  toSaleView,
  type PromotionLike,
} from "@/lib/sale-pricing";

const TENANT = "tenant-a";
const OTHER = "tenant-b";
const COURSE = "course-1";
const BUNDLE = "bundle-1";
const NOW = new Date("2026-08-18T12:00:00Z");

function promo(over: Partial<PromotionLike> = {}): PromotionLike {
  return {
    id: over.id ?? "p1",
    tenantId: TENANT,
    name: "Sale",
    scope: "tenant",
    courseId: null,
    bundleId: null,
    kind: "percent",
    value: "50",
    startsAt: null,
    endsAt: null,
    endedAt: null,
    createdAt: new Date("2026-08-01T00:00:00Z"),
    ...over,
  };
}

const view = (promotions: PromotionLike[], listPrice: string | number = 20, priceType = "one_time") =>
  resolvePrice({
    tenantId: TENANT,
    target: { kind: "course", id: COURSE },
    listPrice,
    priceType,
    promotions,
    now: NOW,
  });

describe("isPromotionActive / promotionStatus", () => {
  it("treats a null start as live immediately", () => {
    expect(isPromotionActive(promo({ startsAt: null }), NOW)).toBe(true);
    expect(promotionStatus(promo({ startsAt: null }), NOW)).toBe("active");
  });

  it("treats a null end as running indefinitely", () => {
    expect(isPromotionActive(promo({ endsAt: null }), NOW)).toBe(true);
    // Ten years on, still running: an indefinite sale is not an expired one.
    expect(isPromotionActive(promo({ endsAt: null }), new Date("2036-01-01T00:00:00Z"))).toBe(true);
  });

  it("is not yet active before its start", () => {
    const p = promo({ startsAt: "2026-09-01T00:00:00Z" });
    expect(isPromotionActive(p, NOW)).toBe(false);
    expect(promotionStatus(p, NOW)).toBe("scheduled");
  });

  it("is over after its end", () => {
    const p = promo({ endsAt: "2026-08-01T00:00:00Z" });
    expect(isPromotionActive(p, NOW)).toBe(false);
    expect(promotionStatus(p, NOW)).toBe("ended");
  });

  it("is over the instant its end passes (end is exclusive)", () => {
    expect(isPromotionActive(promo({ endsAt: NOW.toISOString() }), NOW)).toBe(false);
    expect(isPromotionActive(promo({ startsAt: NOW.toISOString() }), NOW)).toBe(true);
  });

  it("is over when ended by hand, even with no end date", () => {
    const p = promo({ endsAt: null, endedAt: "2026-08-17T00:00:00Z" });
    expect(isPromotionActive(p, NOW)).toBe(false);
    expect(promotionStatus(p, NOW)).toBe("ended");
  });

  it("is over when ended by hand BEFORE its scheduled end", () => {
    const p = promo({ endsAt: "2026-12-01T00:00:00Z", endedAt: "2026-08-17T00:00:00Z" });
    expect(isPromotionActive(p, NOW)).toBe(false);
  });

  it("accepts ISO strings as well as Dates", () => {
    expect(isPromotionActive(promo({ startsAt: "2026-08-01T00:00:00.000Z" }), NOW)).toBe(true);
  });
});

describe("applyPromotion", () => {
  it("takes a percentage off", () => {
    expect(applyPromotion(promo({ kind: "percent", value: "25" }), 20)).toBe(15);
  });

  it("takes a fixed amount off", () => {
    expect(applyPromotion(promo({ kind: "amount", value: "5" }), 20)).toBe(15);
  });

  it("makes a course free", () => {
    expect(applyPromotion(promo({ kind: "free", value: null }), 20)).toBe(0);
  });

  it("never goes below zero on an over-large amount", () => {
    expect(applyPromotion(promo({ kind: "amount", value: "500" }), 20)).toBe(0);
  });

  it("rounds to whole cents", () => {
    // 19 * (1 - 33/100) = 12.73 exactly, not 12.729999999999999.
    expect(applyPromotion(promo({ kind: "percent", value: "33" }), 19)).toBe(12.73);
  });

  it("clamps a nonsense percentage instead of raising the price", () => {
    expect(applyPromotion(promo({ kind: "percent", value: "-50" }), 20)).toBe(20);
    expect(applyPromotion(promo({ kind: "percent", value: "500" }), 20)).toBe(0);
  });

  it("leaves the price alone for a kind it does not understand", () => {
    expect(applyPromotion(promo({ kind: "future-kind", value: "5" }), 20)).toBe(20);
  });
});

describe("resolvePrice", () => {
  it("returns the list price when nothing applies", () => {
    const v = view([]);
    expect(v).toMatchObject({ listPrice: 20, effectivePrice: 20, isFree: false, discounted: false });
    expect(v.promotion).toBeNull();
  });

  it("applies a live brand-wide percentage", () => {
    const v = view([promo({ kind: "percent", value: "50" })]);
    expect(v.effectivePrice).toBe(10);
    expect(v.discounted).toBe(true);
    expect(v.promotion?.id).toBe("p1");
  });

  it("applies a course-scoped sale to its own course", () => {
    const v = view([promo({ scope: "course", courseId: COURSE, kind: "amount", value: "5" })]);
    expect(v.effectivePrice).toBe(15);
  });

  it("does not apply a course-scoped sale to a different course", () => {
    const v = view([promo({ scope: "course", courseId: "other-course", kind: "free", value: null })]);
    expect(v.effectivePrice).toBe(20);
    expect(v.discounted).toBe(false);
  });

  it("does not apply a bundle-scoped sale to a course", () => {
    const v = view([promo({ scope: "bundle", bundleId: BUNDLE, kind: "free", value: null })]);
    expect(v.effectivePrice).toBe(20);
  });

  it("applies a bundle-scoped sale to its own bundle", () => {
    const v = resolvePrice({
      tenantId: TENANT,
      target: { kind: "bundle", id: BUNDLE },
      listPrice: "49",
      priceType: "one_time",
      promotions: [promo({ scope: "bundle", bundleId: BUNDLE, kind: "percent", value: "50" })],
      now: NOW,
    });
    expect(v.effectivePrice).toBe(24.5);
    expect(v.discounted).toBe(true);
  });

  it("makes a paid course free and says so", () => {
    const v = view([promo({ kind: "free", value: null })]);
    expect(v).toMatchObject({ effectivePrice: 0, isFree: true, discounted: true });
  });

  it("ignores a scheduled sale until it starts", () => {
    const v = view([promo({ startsAt: "2026-09-01T00:00:00Z", kind: "free", value: null })]);
    expect(v.effectivePrice).toBe(20);
  });

  it("ignores an expired sale", () => {
    const v = view([promo({ endsAt: "2026-08-01T00:00:00Z", kind: "free", value: null })]);
    expect(v.effectivePrice).toBe(20);
  });

  it("ignores a manually ended sale", () => {
    const v = view([promo({ endedAt: "2026-08-17T00:00:00Z", kind: "free", value: null })]);
    expect(v.effectivePrice).toBe(20);
  });

  // ── The invariants ────────────────────────────────────────────────────────
  it("never raises a price", () => {
    const v = view([promo({ kind: "amount", value: "0.0000001" })]);
    expect(v.effectivePrice).toBeLessThanOrEqual(20);
  });

  it("never charges for an already-free course", () => {
    const v = view([promo({ kind: "amount", value: "5" })], 0, "free");
    expect(v).toMatchObject({ effectivePrice: 0, isFree: true, discounted: false });
    expect(v.promotion).toBeNull();
  });

  it("shows no strike-through for a zero-effect sale", () => {
    const v = view([promo({ kind: "percent", value: "0" })]);
    expect(v.discounted).toBe(false);
    expect(v.effectivePrice).toBe(20);
  });

  it("leaves subscriptions at their list price (an unanswered product question)", () => {
    const v = view([promo({ kind: "free", value: null })], 12, "subscription");
    expect(v).toMatchObject({ effectivePrice: 12, discounted: false });
  });

  // ── Precedence ────────────────────────────────────────────────────────────
  it("lets a course-scoped sale beat a DEEPER brand-wide one", () => {
    const v = view([
      promo({ id: "wide", scope: "tenant", kind: "percent", value: "90" }),
      promo({ id: "narrow", scope: "course", courseId: COURSE, kind: "percent", value: "10" }),
    ]);
    expect(v.promotion?.id).toBe("narrow");
    expect(v.effectivePrice).toBe(18);
  });

  it("lets a course-scoped sale beat a SHALLOWER brand-wide one too", () => {
    const v = view([
      promo({ id: "wide", scope: "tenant", kind: "percent", value: "10" }),
      promo({ id: "narrow", scope: "course", courseId: COURSE, kind: "free", value: null }),
    ]);
    expect(v.promotion?.id).toBe("narrow");
    expect(v.isFree).toBe(true);
  });

  it("takes the biggest discount when two sales share a scope", () => {
    const v = view([
      promo({ id: "small", kind: "percent", value: "10" }),
      promo({ id: "big", kind: "percent", value: "60" }),
    ]);
    expect(v.promotion?.id).toBe("big");
    expect(v.effectivePrice).toBe(8);
  });

  it("breaks an equal-price tie on the newest, then deterministically on id", () => {
    const older = promo({ id: "a", kind: "amount", value: "5", createdAt: "2026-01-01T00:00:00Z" });
    const newer = promo({ id: "b", kind: "amount", value: "5", createdAt: "2026-06-01T00:00:00Z" });
    expect(view([older, newer]).promotion?.id).toBe("b");
    expect(view([newer, older]).promotion?.id).toBe("b");

    const sameTime = [
      promo({ id: "zzz", kind: "amount", value: "5", createdAt: "2026-01-01T00:00:00Z" }),
      promo({ id: "aaa", kind: "amount", value: "5", createdAt: "2026-01-01T00:00:00Z" }),
    ];
    expect(view(sameTime).promotion?.id).toBe("aaa");
    expect(view([...sameTime].reverse()).promotion?.id).toBe("aaa");
  });

  // ── Tenant isolation ──────────────────────────────────────────────────────
  it("ignores another tenant's sale even when it names this course", () => {
    const v = view([
      promo({ id: "foreign", tenantId: OTHER, scope: "course", courseId: COURSE, kind: "free", value: null }),
    ]);
    expect(v.effectivePrice).toBe(20);
    expect(v.discounted).toBe(false);
    expect(v.promotion).toBeNull();
  });

  it("ignores another tenant's brand-wide sale", () => {
    const v = view([promo({ id: "foreign", tenantId: OTHER, kind: "percent", value: "75" })]);
    expect(v.effectivePrice).toBe(20);
  });

  it("applies only this tenant's row when both tenants are running one", () => {
    const v = view([
      promo({ id: "foreign", tenantId: OTHER, kind: "free", value: null }),
      promo({ id: "mine", tenantId: TENANT, kind: "percent", value: "25" }),
    ]);
    expect(v.promotion?.id).toBe("mine");
    expect(v.effectivePrice).toBe(15);
  });
});

describe("row wrappers", () => {
  it("reads a Drizzle course row (numeric price as a string)", () => {
    const v = coursePriceView(
      { id: COURSE, price: "19.00", priceType: "one_time" },
      TENANT,
      [promo({ kind: "percent", value: "50" })],
      NOW,
    );
    expect(v.listPrice).toBe(19);
    expect(v.effectivePrice).toBe(9.5);
  });

  it("reads a Drizzle bundle row", () => {
    const v = bundlePriceView(
      { id: BUNDLE, price: "49.00", priceType: "one_time" },
      TENANT,
      [promo({ scope: "bundle", bundleId: BUNDLE, kind: "amount", value: "10" })],
      NOW,
    );
    expect(v.effectivePrice).toBe(39);
  });
});

describe("presentation helpers", () => {
  it("formats whole dollars without cents, and zero as Free", () => {
    expect(formatPrice(19)).toBe("$19");
    expect(formatPrice(9.5)).toBe("$9.50");
    expect(formatPrice(0)).toBe("Free");
  });

  it("announces a discount as was/now so a struck price is never read as the price", () => {
    expect(priceAnnouncement(view([promo({ kind: "percent", value: "50" })]))).toBe(
      "was $20, now $10",
    );
    expect(priceAnnouncement(view([promo({ kind: "free", value: null })]))).toBe(
      "was $20, now Free",
    );
    expect(priceAnnouncement(view([]))).toBe("$20");
  });

  it("describes each sale kind for the admin list", () => {
    expect(describeSale("percent", 20)).toBe("20% off");
    expect(describeSale("amount", 5)).toBe("$5 off");
    expect(describeSale("free", null)).toBe("Free");
  });

  it("maps a row to the admin view model", () => {
    const v = toSaleView(
      { ...promo({ scope: "course", courseId: COURSE, value: "25" }), targetTitle: "US Civics 101" },
      NOW,
    );
    expect(v).toMatchObject({
      targetId: COURSE,
      targetTitle: "US Civics 101",
      value: 25,
      status: "active",
      endsAt: null,
    });
  });
});

// ── Campaign promotions (`scope: 'courses'`) ────────────────────────────────────────────────────
//
// The shape a running back-to-school sale needs: ONE promotion whose membership grows as courses
// are vetted. The pricing risk is entirely in two places, so both are covered hard here:
//
//   1. A campaign with no membership loaded must cover NOTHING. `courseIds` is optional on
//      PromotionLike, and if absence were read as "everything" a plumbing mistake in the query
//      layer would silently discount the whole catalog.
//   2. Precedence now has three levels rather than two. A campaign must beat a brand-wide sale and
//      must lose to a single-course sale, in BOTH directions, so that the narrower decision always
//      wins even when the broader one is deeper.

describe("campaign promotions (scope: courses)", () => {
  const campaign = (over: Partial<PromotionLike> = {}) =>
    promo({ id: "camp", scope: "courses", courseIds: [COURSE], ...over });

  const view = (promotions: PromotionLike[], listPrice = 100) =>
    resolvePrice({
      tenantId: TENANT,
      target: { kind: "course", id: COURSE },
      listPrice,
      priceType: "one_time",
      promotions,
      now: NOW,
    });

  it("discounts a course that is a member", () => {
    const r = view([campaign({ kind: "percent", value: 25 })]);
    expect(r.effectivePrice).toBe(75);
    expect(r.discounted).toBe(true);
    expect(r.promotion?.id).toBe("camp");
  });

  it("leaves a course that is not a member at its list price", () => {
    const r = view([campaign({ courseIds: ["some-other-course"] })]);
    expect(r.effectivePrice).toBe(100);
    expect(r.discounted).toBe(false);
  });

  it("covers NOTHING when the membership was never loaded", () => {
    // The dangerous direction. An unloaded membership must fail closed.
    const r = view([campaign({ courseIds: undefined })]);
    expect(r.effectivePrice).toBe(100);
    expect(r.discounted).toBe(false);
  });

  it("covers nothing when the membership is explicitly empty", () => {
    // A campaign announced before any course is vetted is a normal state, not an error.
    const r = view([campaign({ courseIds: [] })]);
    expect(r.effectivePrice).toBe(100);
  });

  it("never applies to a bundle, even when a bundle id collides with a member course id", () => {
    const r = resolvePrice({
      tenantId: TENANT,
      target: { kind: "bundle", id: COURSE },
      listPrice: 100,
      priceType: "one_time",
      promotions: [campaign()],
      now: NOW,
    });
    expect(r.effectivePrice).toBe(100);
  });

  it("ignores a campaign belonging to another tenant", () => {
    const r = view([campaign({ tenantId: OTHER, kind: "free" })]);
    expect(r.effectivePrice).toBe(100);
  });

  it("respects the window like any other promotion", () => {
    const ended = campaign({ endedAt: new Date("2026-08-17T00:00:00Z") });
    expect(view([ended]).effectivePrice).toBe(100);
    const scheduled = campaign({ startsAt: new Date("2026-09-01T00:00:00Z") });
    expect(view([scheduled]).effectivePrice).toBe(100);
  });

  describe("precedence: campaign sits between tenant-wide and single-course", () => {
    it("beats a DEEPER brand-wide sale", () => {
      const r = view([
        promo({ id: "brand", scope: "tenant", kind: "percent", value: 50 }),
        campaign({ kind: "percent", value: 10 }),
      ]);
      expect(r.promotion?.id).toBe("camp");
      expect(r.effectivePrice).toBe(90);
    });

    it("still beats a brand-wide sale when the campaign is the deeper one", () => {
      const r = view([
        promo({ id: "brand", scope: "tenant", kind: "percent", value: 10 }),
        campaign({ kind: "percent", value: 50 }),
      ]);
      expect(r.promotion?.id).toBe("camp");
      expect(r.effectivePrice).toBe(50);
    });

    it("loses to a SHALLOWER single-course sale", () => {
      const r = view([
        campaign({ kind: "percent", value: 50 }),
        promo({ id: "one", scope: "course", courseId: COURSE, kind: "percent", value: 10 }),
      ]);
      expect(r.promotion?.id).toBe("one");
      expect(r.effectivePrice).toBe(90);
    });

    it("loses to a deeper single-course sale too", () => {
      const r = view([
        campaign({ kind: "percent", value: 10 }),
        promo({ id: "one", scope: "course", courseId: COURSE, kind: "free" }),
      ]);
      expect(r.promotion?.id).toBe("one");
      expect(r.effectivePrice).toBe(0);
    });

    it("takes the largest discount when two campaigns both include the course", () => {
      const r = view([
        campaign({ id: "c1", kind: "percent", value: 20 }),
        campaign({ id: "c2", kind: "percent", value: 40 }),
      ]);
      expect(r.promotion?.id).toBe("c2");
      expect(r.effectivePrice).toBe(60);
    });
  });

  it("keeps the invariants: never raises a price, never charges a free course", () => {
    expect(view([campaign({ kind: "amount", value: 500 })]).effectivePrice).toBe(0);
    const alreadyFree = resolvePrice({
      tenantId: TENANT,
      target: { kind: "course", id: COURSE },
      listPrice: 0,
      priceType: "free",
      promotions: [campaign({ kind: "percent", value: 50 })],
      now: NOW,
    });
    expect(alreadyFree.isFree).toBe(true);
    expect(alreadyFree.discounted).toBe(false);
  });
});
