// WHERE YOU SET THE PRICE OF A WHITE-LABEL SCHOOL.
//
// This is the pricing for a school buying its OWN white-label instance of the platform (its own brand,
// its own domain), NOT the price of a course (that lives in src/lib/course-pricing.ts and the admin
// /admin/pricing page). It renders on /platform, which is the recruiting front door's white-label
// pitch and is linked from the footer, so a prospect can find it.
//
// The number is a business value only BAM can set, so per the authoritative-values rule this file does
// NOT guess one. Until you fill in a real `price`, each plan shows "Pricing on request" and the page
// routes the prospect to get in touch, which is honest rather than a fabricated figure. See the
// operator task ./plans/user-tasks/204-set-white-label-pricing.md.

export interface PlatformPlan {
  name: string;
  /** One line: who this plan is for. */
  forWhom: string;
  /** The price to show, e.g. "$149 / month" or "$1,500 / year". Leave "" to show "Pricing on request". */
  price: string;
  /** A few concrete inclusions. Keep them true (real platform features). */
  includes: string[];
}

// SET THESE. Add/rename plans and fill in `price` when you decide. Leave `price: ""` on any plan whose
// number you have not set yet, and it will read "Pricing on request" instead of a guess.
export const PLATFORM_PLANS: PlatformPlan[] = [
  {
    name: "White-label school",
    forWhom: "One brand, on your own domain",
    price: "",
    includes: [
      "Your own brand and domain, strictly isolated from every other school",
      "The full cited, standards-aligned catalog, plus your own courses on top",
      "Live classes, cohorts, a parent view, and verified credentials",
    ],
  },
];

/** Shown under the plans. Set this to whatever framing you want a prospect to read before they inquire. */
export const PLATFORM_PRICING_NOTE =
  "Pricing depends on your school's size and how much you want us to set up for you. Get in touch and we will scope it with you.";

/** The label + destination for the pricing call to action. Point it at your real intake path. */
export const PLATFORM_PRICING_CTA = { label: "Get pricing for your school", href: "/teach" };

export function displayPrice(price: string): string {
  return price.trim() ? price.trim() : "Pricing on request";
}
