// What a price change actually DOES, as a pure function. No db, no next/headers, so the two write
// paths (POST /api/admin/pricing and PATCH /api/courses/[id]) and the two admin UIs that drive them
// all read the same sentences, and the sentences can be unit-tested.
//
// Every warning below is derived from code that exists in this repo TODAY, cited by file so a future
// edit that changes the behaviour also finds the copy that describes it. Nothing here promises a
// notification, a refund, a grandfathered price, or a migration of existing subscribers, because no
// such code exists. If you add one, add the warning; if you remove one, delete the warning.

export type PriceType = "free" | "one_time" | "subscription";
export type BillingInterval = "month" | "year" | null;

export interface PriceState {
  /** Dollars, not cents (courses.price is a numeric column read as a string; convert before calling). */
  price: number;
  priceType: PriceType;
  /** Only meaningful for a subscription; ignored otherwise, exactly as both write paths ignore it. */
  billingInterval?: BillingInterval;
}

/** The headline classification. `none` means nothing a learner or Stripe would notice. */
export type PriceChangeKind =
  | "none"
  | "free-to-paid"
  | "paid-to-free"
  | "increase"
  | "decrease"
  | "model-switch"
  | "interval-switch";

/** critical = money or the funnel is on the line · warning = surprising · info = true and worth saying. */
export type PriceWarningLevel = "critical" | "warning" | "info";

export type PriceWarningCode =
  | "funnel-closes"
  | "free-enrollment-stops"
  | "revenue-stops"
  | "enrolled-keep-access"
  | "stripe-price-recreated"
  | "stripe-not-configured"
  | "subscribers-keep-billing"
  | "subscribers-keep-old-amount"
  | "subscription-access-is-revocable"
  | "past-subscribers-still-revocable"
  | "no-refunds"
  | "public-price-changes-now";

export interface PriceWarning {
  code: PriceWarningCode;
  level: PriceWarningLevel;
  message: string;
}

export interface PriceChangeAssessment {
  kind: PriceChangeKind;
  /** True when the change alters what a learner sees or what Stripe charges. Drives the confirm gate. */
  material: boolean;
  fromLabel: string;
  toLabel: string;
  /** One line for a confirmation list, e.g. "Free to $19 one-time". */
  summary: string;
  /** Active enrollments the change is being made in front of, when the caller supplied it. */
  enrollmentCount: number | null;
  warnings: PriceWarning[];
}

export interface AssessOptions {
  /** Active enrollments on this course. Omit when unknown; the copy then avoids naming a number. */
  enrollmentCount?: number | null;
  /**
   * Whether Stripe keys are configured. Pass it and a paid outcome with no Stripe gets a critical
   * warning, because POST /api/courses/[id]/enroll returns 503 "Payments are not configured" when
   * getStripe() is null, so nobody can buy the course at all.
   */
  stripeConfigured?: boolean;
}

/**
 * Mirrors isFreeCourse in src/lib/gating.ts: a $0 course is free whatever its priceType says, and
 * that function is what the paywall and the enroll route actually consult. Keeping the same rule
 * here is what stops the warning copy from disagreeing with the gate.
 */
export function isEffectivelyFree(s: PriceState): boolean {
  return s.priceType === "free" || s.price === 0;
}

function intervalOf(s: PriceState): "month" | "year" {
  return s.billingInterval === "year" ? "year" : "month";
}

function amount(price: number): string {
  return `$${price % 1 === 0 ? price.toFixed(0) : price.toFixed(2)}`;
}

/** "Free" · "$19 one-time" · "$5/month". The label used in every confirmation line. */
export function formatPriceState(s: PriceState): string {
  if (isEffectivelyFree(s)) return "Free";
  if (s.priceType === "subscription") return `${amount(s.price)}/${intervalOf(s)}`;
  return `${amount(s.price)} one-time`;
}

function learnerPhrase(count: number | null): string {
  if (count === null) return "Learners already enrolled";
  if (count === 0) return "No learner is enrolled yet, so nobody";
  return `${count} enrolled learner${count === 1 ? "" : "s"}`;
}

function classify(current: PriceState, proposed: PriceState): PriceChangeKind {
  const wasFree = isEffectivelyFree(current);
  const nowFree = isEffectivelyFree(proposed);
  // Both sides free: priceType may differ on paper (free vs a $0 one_time) but isFreeCourse reads
  // both as free, so no gate, no checkout, and no Stripe price behaves differently. Not material.
  if (wasFree && nowFree) return "none";
  if (wasFree) return "free-to-paid";
  if (nowFree) return "paid-to-free";
  if (current.priceType !== proposed.priceType) return "model-switch";
  if (current.price !== proposed.price) return proposed.price > current.price ? "increase" : "decrease";
  if (proposed.priceType === "subscription" && intervalOf(current) !== intervalOf(proposed)) {
    return "interval-switch";
  }
  return "none";
}

/**
 * Classify a proposed price change and return the specific, verified consequences it carries.
 *
 * The warnings are the point. Each one names a behaviour that is in the code right now:
 * see the inline citations. `material` is what the API confirm gate and the UI dialog key off.
 */
export function assessPriceChange(
  current: PriceState,
  proposed: PriceState,
  opts: AssessOptions = {},
): PriceChangeAssessment {
  const kind = classify(current, proposed);
  const fromLabel = formatPriceState(current);
  const toLabel = formatPriceState(proposed);
  const enrollmentCount =
    typeof opts.enrollmentCount === "number" ? Math.max(0, Math.trunc(opts.enrollmentCount)) : null;
  const material = kind !== "none";

  const warnings: PriceWarning[] = [];
  if (!material) {
    return {
      kind,
      material,
      fromLabel,
      toLabel,
      summary: `No change, stays ${toLabel}`,
      enrollmentCount,
      warnings,
    };
  }

  const nowFree = isEffectivelyFree(proposed);
  const wasSubscription = current.priceType === "subscription" && !isEffectivelyFree(current);
  const nowSubscription = proposed.priceType === "subscription" && !nowFree;

  if (kind === "free-to-paid") {
    // src/app/api/courses/[id]/enroll/route.ts: isFreeCourse(course) enrolls directly, otherwise the
    // route builds a Stripe Checkout URL. src/lib/gating.ts:53 then locks every lesson for anyone
    // who is not enrolled.
    warnings.push({
      code: "funnel-closes",
      level: "critical",
      message:
        "This course stops being free. New visitors can no longer enroll in one click, they are sent to Stripe Checkout, and every lesson stays locked until they pay. If this course is the free entry point to a series, that funnel closes the moment you save.",
    });
    warnings.push({
      code: "free-enrollment-stops",
      level: "warning",
      message:
        "Free enrollments stop immediately. There is no scheduled or announced cutover, and nobody who was about to enroll for free is told the price changed.",
    });
  }

  if (kind === "paid-to-free") {
    warnings.push({
      code: "revenue-stops",
      level: "critical",
      message:
        "This course stops earning. A free course enrolls the learner directly and never opens Stripe Checkout, so there is no way to buy it while it is free.",
    });
  }

  // The enrollment guarantee, and it IS a guarantee: src/lib/gating.ts:53 only consults the paywall
  // when the viewer is not enrolled, and no price write path touches the enrollments table. The one
  // thing that cancels an enrollment is the Stripe webhook on customer.subscription.deleted
  // (src/app/api/stripe/webhook/route.ts:69).
  if (kind !== "paid-to-free") {
    warnings.push({
      code: "enrolled-keep-access",
      level: "info",
      message: `${learnerPhrase(enrollmentCount)} keep${enrollmentCount === 1 ? "s" : ""} full access. Changing a price never touches enrollments, and lesson access checks enrollment before it checks price.`,
    });
  }

  // src/app/api/admin/pricing/route.ts and src/app/api/courses/[id]/route.ts both set
  // stripePriceId: null on a pricing edit; ensureCoursePrice (src/lib/stripe.ts:25) returns the
  // cached id when there is one and otherwise mints a new Stripe price at the current amount.
  warnings.push({
    code: "stripe-price-recreated",
    level: "info",
    message:
      "The cached Stripe price on this course is cleared, so the next checkout creates a fresh Stripe price at the new amount. The old Stripe price object is not deleted, it is simply no longer used for new purchases.",
  });

  // The course page prints the price straight from the course row, and the catalog cards do the same.
  warnings.push({
    code: "public-price-changes-now",
    level: "info",
    message:
      "The new price is public as soon as you save. It appears on the course page and the catalog on the next load, with no draft or preview step.",
  });

  if (opts.stripeConfigured === false && !nowFree) {
    warnings.push({
      code: "stripe-not-configured",
      level: "critical",
      message:
        "Stripe is not configured on this deployment, so making this course paid makes it unbuyable: the enroll request fails with \"Payments are not configured\" and no one can get in at all.",
    });
  }

  // No code in this repo calls the Stripe subscription API (no stripe.subscriptions.* anywhere), so
  // an existing subscription is untouched by anything done here.
  if (wasSubscription && !nowSubscription) {
    warnings.push({
      code: "subscribers-keep-billing",
      level: "critical",
      message:
        "Existing subscribers are NOT cancelled by this change. This app never calls the Stripe subscription API, so anyone already subscribed keeps being billed the old amount until someone cancels them in the Stripe dashboard.",
    });
  } else if (wasSubscription && nowSubscription) {
    warnings.push({
      code: "subscribers-keep-old-amount",
      level: "warning",
      message:
        "Existing subscribers keep paying the old amount on the old billing interval. Clearing the cached price only affects new checkouts, and no existing Stripe subscription is moved to the new price.",
    });
  }

  if (nowSubscription) {
    // src/app/api/stripe/webhook/route.ts:69 -> cancelEnrollmentBySubscription sets the enrollment
    // to "cancelled", and isEnrolled only counts status = "active".
    warnings.push({
      code: "subscription-access-is-revocable",
      level: "warning",
      message:
        "Access bought as a subscription is not permanent the way a one-time purchase is: when the Stripe subscription is deleted, the webhook marks that enrollment cancelled and the learner loses the course.",
    });
  } else if (wasSubscription) {
    warnings.push({
      code: "past-subscribers-still-revocable",
      level: "warning",
      message:
        "Learners who joined while this was a subscription still lose access if their subscription ends. The webhook cancels an enrollment by its Stripe subscription id no matter what the course costs today.",
    });
  }

  if (kind === "decrease" || (kind === "model-switch" && proposed.price < current.price)) {
    warnings.push({
      code: "no-refunds",
      level: "warning",
      message:
        "Nobody who already paid the higher price is refunded the difference. This app has no refund path, so any goodwill refund has to be issued by hand in Stripe.",
    });
  }

  return {
    kind,
    material,
    fromLabel,
    toLabel,
    summary: `${fromLabel} to ${toLabel}`,
    enrollmentCount,
    warnings,
  };
}

/** The single sentence a confirmation dialog leads with. Kept here so both admin UIs agree. */
export function priceChangeHeadline(a: PriceChangeAssessment): string {
  switch (a.kind) {
    case "free-to-paid":
      return "You are putting a free course behind a paywall.";
    case "paid-to-free":
      return "You are making a paid course free.";
    case "increase":
      return "You are raising the price.";
    case "decrease":
      return "You are lowering the price.";
    case "model-switch":
      return "You are changing how this course is sold.";
    case "interval-switch":
      return "You are changing the billing interval.";
    default:
      return "Nothing material changes.";
  }
}
