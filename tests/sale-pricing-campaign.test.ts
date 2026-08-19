import { describe, expect, it } from "vitest";
import {
  coursePriceView,
  promotionCoversTarget,
  resolvePrice,
  type PromotionLike,
} from "@/lib/sale-pricing";

// The `courses` scope is a CAMPAIGN: one promotion with a member list, so a sale like "Back to
// school" is a single object that courses join over the weeks it runs (src/db/schema/promotions.ts).
//
// Two properties matter more than the rest and are the reason this file exists:
//
//   1. A campaign with no members loaded covers NOTHING. `courseIds` is optional on PromotionLike,
//      and a caller that forgets to load membership must produce list prices, never a discount on
//      the whole catalog. The failure has to be in the safe direction.
//   2. Precedence is three levels now, not two: course/bundle beats campaign beats tenant. A
//      blanket sale must not override a course somebody deliberately added to a campaign, and a
//      campaign must not override a decision made about one specific course.

const base = {
  tenantId: "t1",
  courseId: null,
  bundleId: null,
  startsAt: null,
  endsAt: null,
  endedAt: null,
  createdAt: new Date("2026-01-01"),
};

const campaign = (over: Partial<PromotionLike> = {}): PromotionLike => ({
  ...base,
  id: "p-campaign",
  name: "Back to school",
  scope: "courses",
  kind: "percent",
  value: 25,
  courseIds: ["c1", "c2"],
  ...over,
});

const price = (promotions: PromotionLike[], id = "c1") =>
  resolvePrice({
    tenantId: "t1",
    target: { kind: "course", id },
    listPrice: 100,
    priceType: "one_time",
    promotions,
    now: new Date("2026-06-01"),
  });

describe("campaign promotions cover exactly their members", () => {
  it("discounts a member", () => {
    expect(price([campaign()]).effectivePrice).toBe(75);
  });

  it("leaves a non-member at the list price", () => {
    const view = price([campaign()], "c9");
    expect(view.effectivePrice).toBe(100);
    expect(view.discounted).toBe(false);
  });

  it("covers NOTHING when membership was never loaded", () => {
    // The whole point: a plumbing mistake upstream must not discount the catalog.
    const unloaded = campaign({ courseIds: undefined });
    expect(promotionCoversTarget(unloaded, { kind: "course", id: "c1" })).toBe(false);
    expect(price([unloaded]).effectivePrice).toBe(100);
  });

  it("covers nothing when the campaign is empty, which is a normal starting state", () => {
    expect(price([campaign({ courseIds: [] })]).effectivePrice).toBe(100);
  });

  it("never covers a bundle, which is priced by its own row", () => {
    expect(promotionCoversTarget(campaign({ courseIds: ["b1"] }), { kind: "bundle", id: "b1" })).toBe(
      false,
    );
  });
});

describe("precedence: course beats campaign beats tenant", () => {
  const tenantWide: PromotionLike = {
    ...base,
    id: "p-tenant",
    name: "Everything 50% off",
    scope: "tenant",
    kind: "percent",
    value: 50,
  };
  const courseSpecific: PromotionLike = {
    ...base,
    id: "p-course",
    name: "This one, 10% off",
    scope: "course",
    courseId: "c1",
    kind: "percent",
    value: 10,
  };

  it("a campaign beats a DEEPER brand-wide sale", () => {
    // 25% off (campaign) wins over 50% off (tenant), because the narrower row is the more
    // deliberate decision. The learner pays MORE, and that is the documented, intended behaviour.
    const view = price([tenantWide, campaign()]);
    expect(view.effectivePrice).toBe(75);
    expect(view.promotion?.id).toBe("p-campaign");
  });

  it("a course-specific sale beats a DEEPER campaign", () => {
    const view = price([campaign(), courseSpecific]);
    expect(view.effectivePrice).toBe(90);
    expect(view.promotion?.id).toBe("p-course");
  });

  it("the brand-wide sale still applies to a course the campaign does not include", () => {
    const view = price([tenantWide, campaign()], "c9");
    expect(view.effectivePrice).toBe(50);
    expect(view.promotion?.id).toBe("p-tenant");
  });

  it("between two campaigns covering the same course, the deeper discount wins", () => {
    const deeper = campaign({ id: "p-deep", value: 40 });
    expect(price([campaign(), deeper]).effectivePrice).toBe(60);
  });
});

describe("removing an item affects only that item", () => {
  // BAM's question: can something be taken out of a promo without disturbing what is still in it?
  // Membership is a set, so removal is set subtraction, and these assert that directly on the
  // pricing layer rather than trusting the delete statement.
  const twoMembers = campaign({ courseIds: ["c1", "c2"] });
  const afterRemoval = campaign({ courseIds: ["c2"] });

  it("the removed course goes back to its list price", () => {
    expect(price([twoMembers], "c1").effectivePrice).toBe(75);
    expect(price([afterRemoval], "c1").effectivePrice).toBe(100);
  });

  it("every other member is priced exactly as before", () => {
    const before = price([twoMembers], "c2");
    const after = price([afterRemoval], "c2");
    expect(after.effectivePrice).toBe(before.effectivePrice);
    expect(after.promotion?.id).toBe(before.promotion?.id);
  });

  it("removing the last member leaves a valid, empty campaign rather than a broken one", () => {
    const empty = campaign({ courseIds: [] });
    expect(price([empty], "c2").effectivePrice).toBe(100);
    expect(price([empty], "c2").discounted).toBe(false);
  });
});

describe("brand-wide sales can name exceptions", () => {
  // For a `tenant` sale the named set is read as EXCLUSIONS, which is how something is taken out of
  // a sale that otherwise covers everything.
  const everything: PromotionLike = {
    ...base,
    id: "p-tenant",
    name: "Everything 50% off",
    scope: "tenant",
    kind: "percent",
    value: 50,
  };

  it("covers everything when it names nothing, exactly as before exceptions existed", () => {
    expect(price([everything], "c9").effectivePrice).toBe(50);
  });

  it("skips a named course and leaves the rest discounted", () => {
    const withException = { ...everything, courseIds: ["c1"] };
    expect(price([withException], "c1").effectivePrice).toBe(100);
    expect(price([withException], "c2").effectivePrice).toBe(50);
  });

  it("excludes bundles by name too", () => {
    const withException = { ...everything, bundleIds: ["b1"] };
    expect(promotionCoversTarget(withException, { kind: "bundle", id: "b1" })).toBe(false);
    expect(promotionCoversTarget(withException, { kind: "bundle", id: "b2" })).toBe(true);
  });

  it("an unloaded exception set means no exceptions, which never over-charges", () => {
    // The safe direction for a tenant sale is the opposite of a campaign's: failing to load must
    // leave the advertised brand-wide discount intact rather than quietly removing it.
    expect(price([everything], "c1").effectivePrice).toBe(50);
  });
});

describe("campaigns can hold bundles as well as courses", () => {
  it("covers a named bundle", () => {
    const c = campaign({ courseIds: [], bundleIds: ["b1"] });
    expect(promotionCoversTarget(c, { kind: "bundle", id: "b1" })).toBe(true);
    expect(promotionCoversTarget(c, { kind: "bundle", id: "b2" })).toBe(false);
  });

  it("naming a bundle does not put its member courses on sale by itself", () => {
    // A bundle is a separate product with its own price; discounting it says nothing about buying
    // the courses individually, and pretending otherwise would advertise a price checkout would not
    // honour.
    const c = campaign({ courseIds: [], bundleIds: ["b1"] });
    expect(price([c], "c1").effectivePrice).toBe(100);
  });
});

describe("campaign invariants hold with the rest of the rules", () => {
  it("an ended campaign stops discounting", () => {
    const ended = campaign({ endedAt: new Date("2026-05-01") });
    expect(price([ended]).effectivePrice).toBe(100);
  });

  it("a scheduled campaign does not discount before it starts", () => {
    const later = campaign({ startsAt: new Date("2026-09-01") });
    expect(price([later]).effectivePrice).toBe(100);
  });

  it("never touches an already-free course", () => {
    const view = coursePriceView(
      { id: "c1", price: 0, priceType: "free" },
      "t1",
      [campaign({ kind: "amount", value: 5 })],
    );
    expect(view.effectivePrice).toBe(0);
    expect(view.discounted).toBe(false);
  });

  it("never discounts across tenants", () => {
    const otherBrand = campaign({ tenantId: "t2" });
    expect(price([otherBrand]).effectivePrice).toBe(100);
  });

  it("a free campaign makes a member free and cannot go negative", () => {
    const view = price([campaign({ kind: "free", value: null })]);
    expect(view.effectivePrice).toBe(0);
    expect(view.isFree).toBe(true);
  });
});
