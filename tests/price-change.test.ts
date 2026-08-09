import { describe, expect, it } from "vitest";
import {
  assessPriceChange,
  formatPriceState,
  isEffectivelyFree,
  priceChangeHeadline,
  type PriceState,
  type PriceWarningCode,
} from "@/lib/price-change";

const free: PriceState = { price: 0, priceType: "free", billingInterval: null };
const oneTime = (price: number): PriceState => ({ price, priceType: "one_time", billingInterval: null });
const sub = (price: number, billingInterval: "month" | "year" = "month"): PriceState => ({
  price,
  priceType: "subscription",
  billingInterval,
});

function codes(
  current: PriceState,
  proposed: PriceState,
  opts?: Parameters<typeof assessPriceChange>[2],
): PriceWarningCode[] {
  return assessPriceChange(current, proposed, opts).warnings.map((w) => w.code);
}

describe("isEffectivelyFree", () => {
  it("treats priceType free as free", () => {
    expect(isEffectivelyFree(free)).toBe(true);
  });

  it("treats a $0 paid course as free, the way isFreeCourse in gating.ts does", () => {
    expect(isEffectivelyFree(oneTime(0))).toBe(true);
    expect(isEffectivelyFree(sub(0))).toBe(true);
  });

  it("treats any positive price as paid", () => {
    expect(isEffectivelyFree(oneTime(0.5))).toBe(false);
  });
});

describe("formatPriceState", () => {
  it("labels free, one-time, and both subscription intervals", () => {
    expect(formatPriceState(free)).toBe("Free");
    expect(formatPriceState(oneTime(19))).toBe("$19 one-time");
    expect(formatPriceState(sub(5))).toBe("$5/month");
    expect(formatPriceState(sub(49, "year"))).toBe("$49/year");
  });

  it("shows cents only when there are cents", () => {
    expect(formatPriceState(oneTime(19.5))).toBe("$19.50 one-time");
    expect(formatPriceState(oneTime(20))).toBe("$20 one-time");
  });

  it("labels a $0 paid course Free, because that is what a learner experiences", () => {
    expect(formatPriceState(oneTime(0))).toBe("Free");
  });
});

describe("no material change", () => {
  it("is not material when nothing moves", () => {
    const a = assessPriceChange(oneTime(19), oneTime(19));
    expect(a.kind).toBe("none");
    expect(a.material).toBe(false);
    expect(a.warnings).toEqual([]);
  });

  it("is not material when a $0 one-time becomes an explicit free, since the gate reads both as free", () => {
    const a = assessPriceChange(oneTime(0), free);
    expect(a.kind).toBe("none");
    expect(a.material).toBe(false);
  });

  it("ignores a billing interval on a non-subscription course, matching what both write paths store", () => {
    const a = assessPriceChange(
      { price: 19, priceType: "one_time", billingInterval: "month" },
      { price: 19, priceType: "one_time", billingInterval: "year" },
    );
    expect(a.material).toBe(false);
  });

  it("ignores a missing billingInterval on a monthly subscription (undefined defaults to month)", () => {
    const a = assessPriceChange({ price: 5, priceType: "subscription" }, sub(5, "month"));
    expect(a.material).toBe(false);
  });
});

describe("free to paid, the highest-risk change", () => {
  it("classifies it and flags the funnel closing as critical", () => {
    const a = assessPriceChange(free, oneTime(19));
    expect(a.kind).toBe("free-to-paid");
    expect(a.material).toBe(true);
    expect(a.summary).toBe("Free to $19 one-time");
    const funnel = a.warnings.find((w) => w.code === "funnel-closes");
    expect(funnel?.level).toBe("critical");
    expect(a.warnings.some((w) => w.code === "free-enrollment-stops")).toBe(true);
  });

  it("names the exact enrollment count so the decision is concrete", () => {
    const a = assessPriceChange(free, oneTime(19), { enrollmentCount: 412 });
    expect(a.enrollmentCount).toBe(412);
    expect(a.warnings.find((w) => w.code === "enrolled-keep-access")?.message).toContain(
      "412 enrolled learners keep full access",
    );
  });

  it("uses the singular for one learner and says nobody when there are none", () => {
    expect(
      assessPriceChange(free, oneTime(19), { enrollmentCount: 1 }).warnings.find(
        (w) => w.code === "enrolled-keep-access",
      )?.message,
    ).toContain("1 enrolled learner keeps full access");
    expect(
      assessPriceChange(free, oneTime(19), { enrollmentCount: 0 }).warnings.find(
        (w) => w.code === "enrolled-keep-access",
      )?.message,
    ).toContain("No learner is enrolled yet");
  });

  it("avoids naming a number when the caller did not supply one", () => {
    const a = assessPriceChange(free, oneTime(19));
    expect(a.enrollmentCount).toBeNull();
    expect(a.warnings.find((w) => w.code === "enrolled-keep-access")?.message).toContain(
      "Learners already enrolled keep full access",
    );
  });

  it("flags an unbuyable course when Stripe is not configured", () => {
    expect(codes(free, oneTime(19), { stripeConfigured: false })).toContain("stripe-not-configured");
    expect(codes(free, oneTime(19), { stripeConfigured: true })).not.toContain("stripe-not-configured");
    expect(codes(free, oneTime(19))).not.toContain("stripe-not-configured");
  });

  it("does not warn about Stripe config when the outcome is still free", () => {
    expect(codes(oneTime(19), free, { stripeConfigured: false })).not.toContain("stripe-not-configured");
  });
});

describe("paid to free", () => {
  it("classifies it and flags that revenue stops", () => {
    const a = assessPriceChange(oneTime(19), free);
    expect(a.kind).toBe("paid-to-free");
    expect(a.warnings.find((w) => w.code === "revenue-stops")?.level).toBe("critical");
  });

  it("does not claim enrolled learners keep access, because free access is not access they can lose", () => {
    expect(codes(oneTime(19), free)).not.toContain("enrolled-keep-access");
  });

  it("warns that existing subscribers keep being billed, since nothing here cancels a subscription", () => {
    const a = assessPriceChange(sub(5), free);
    const w = a.warnings.find((x) => x.code === "subscribers-keep-billing");
    expect(w?.level).toBe("critical");
    expect(w?.message).toContain("Stripe dashboard");
  });

  it("warns that past subscribers can still lose access after the course is free", () => {
    expect(codes(sub(5), free)).toContain("past-subscribers-still-revocable");
  });

  it("says nothing about subscribers when the course was a one-time purchase", () => {
    const c = codes(oneTime(19), free);
    expect(c).not.toContain("subscribers-keep-billing");
    expect(c).not.toContain("past-subscribers-still-revocable");
  });
});

describe("price moves within paid", () => {
  it("classifies an increase", () => {
    const a = assessPriceChange(oneTime(19), oneTime(29));
    expect(a.kind).toBe("increase");
    expect(a.summary).toBe("$19 one-time to $29 one-time");
  });

  it("classifies a decrease and warns that nobody is refunded the difference", () => {
    const a = assessPriceChange(oneTime(29), oneTime(19));
    expect(a.kind).toBe("decrease");
    expect(a.warnings.find((w) => w.code === "no-refunds")?.message).toContain("no refund path");
  });

  it("does not warn about refunds on an increase", () => {
    expect(codes(oneTime(19), oneTime(29))).not.toContain("no-refunds");
  });

  it("tells the truth that existing subscribers keep the old amount", () => {
    const w = assessPriceChange(sub(5), sub(9)).warnings.find(
      (x) => x.code === "subscribers-keep-old-amount",
    );
    expect(w?.message).toContain("only affects new checkouts");
  });
});

describe("one-time and subscription switches", () => {
  it("classifies one-time to subscription as a model switch", () => {
    const a = assessPriceChange(oneTime(19), sub(5));
    expect(a.kind).toBe("model-switch");
    expect(a.summary).toBe("$19 one-time to $5/month");
  });

  it("classifies subscription to one-time as a model switch and warns on both subscription facts", () => {
    const c = codes(sub(5), oneTime(19));
    expect(assessPriceChange(sub(5), oneTime(19)).kind).toBe("model-switch");
    expect(c).toContain("subscribers-keep-billing");
    expect(c).toContain("past-subscribers-still-revocable");
  });

  it("warns that subscription access is revocable whenever the outcome is a subscription", () => {
    expect(codes(oneTime(19), sub(5))).toContain("subscription-access-is-revocable");
    expect(codes(free, sub(5))).toContain("subscription-access-is-revocable");
  });

  it("does not call one-time access revocable", () => {
    expect(codes(free, oneTime(19))).not.toContain("subscription-access-is-revocable");
  });

  it("warns about refunds when a model switch also lowers the amount", () => {
    expect(codes(oneTime(19), sub(5))).toContain("no-refunds");
    expect(codes(sub(5), oneTime(19))).not.toContain("no-refunds");
  });

  it("classifies a month to year switch at the same amount", () => {
    const a = assessPriceChange(sub(49), sub(49, "year"));
    expect(a.kind).toBe("interval-switch");
    expect(a.material).toBe(true);
  });
});

describe("consequences that apply to every material change", () => {
  const cases: [string, PriceState, PriceState][] = [
    ["free to paid", free, oneTime(19)],
    ["paid to free", oneTime(19), free],
    ["increase", oneTime(19), oneTime(29)],
    ["decrease", oneTime(29), oneTime(19)],
    ["model switch", oneTime(19), sub(5)],
    ["interval switch", sub(49), sub(49, "year")],
  ];

  it.each(cases)("%s clears the cached Stripe price", (_name, current, proposed) => {
    expect(codes(current, proposed)).toContain("stripe-price-recreated");
  });

  it.each(cases)("%s takes effect publicly right away", (_name, current, proposed) => {
    expect(codes(current, proposed)).toContain("public-price-changes-now");
  });

  it.each(cases)("%s is material and carries at least one warning", (_name, current, proposed) => {
    const a = assessPriceChange(current, proposed);
    expect(a.material).toBe(true);
    expect(a.warnings.length).toBeGreaterThan(0);
  });

  it("never carries a warning on an immaterial change, so the confirm gate cannot cry wolf", () => {
    expect(assessPriceChange(sub(5, "year"), sub(5, "year")).warnings).toEqual([]);
    expect(assessPriceChange(free, free).warnings).toEqual([]);
  });
});

describe("priceChangeHeadline", () => {
  it("gives each kind its own plain sentence", () => {
    expect(priceChangeHeadline(assessPriceChange(free, oneTime(19)))).toContain("behind a paywall");
    expect(priceChangeHeadline(assessPriceChange(oneTime(19), free))).toContain("free");
    expect(priceChangeHeadline(assessPriceChange(oneTime(19), oneTime(29)))).toContain("raising");
    expect(priceChangeHeadline(assessPriceChange(oneTime(29), oneTime(19)))).toContain("lowering");
    expect(priceChangeHeadline(assessPriceChange(oneTime(19), sub(5)))).toContain("how this course is sold");
    expect(priceChangeHeadline(assessPriceChange(sub(49), sub(49, "year")))).toContain("billing interval");
    expect(priceChangeHeadline(assessPriceChange(free, free))).toContain("Nothing material");
  });
});

describe("warning copy is honest", () => {
  it("never promises a notification, a refund, or a grandfathered price", () => {
    const all = [
      assessPriceChange(free, oneTime(19), { enrollmentCount: 3 }),
      assessPriceChange(oneTime(19), free),
      assessPriceChange(sub(5), sub(9)),
      assessPriceChange(sub(5), oneTime(19)),
      assessPriceChange(oneTime(19), sub(5), { stripeConfigured: false }),
    ].flatMap((a) => a.warnings.map((w) => w.message.toLowerCase()));
    expect(all.length).toBeGreaterThan(0);
    for (const m of all) {
      expect(m).not.toContain("we will email");
      expect(m).not.toContain("notified");
      expect(m).not.toContain("grandfather");
      expect(m).not.toContain("automatically refund");
    }
  });

  it("keeps every message a complete sentence", () => {
    const a = assessPriceChange(free, sub(5, "year"), { enrollmentCount: 2, stripeConfigured: false });
    for (const w of a.warnings) {
      expect(w.message.length).toBeGreaterThan(20);
      expect(w.message.endsWith(".")).toBe(true);
    }
  });
});
