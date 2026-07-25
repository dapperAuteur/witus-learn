// Per-audience marketing landing pages (teachers, school leaders, parents, homeschool families,
// community leaders). One shape, one renderer (src/components/marketing/audience-landing.tsx), one
// dynamic route (src/app/(tenant)/for/[audience]/page.tsx). Each audience is a content file in
// ./audiences/, registered below.
//
// HONESTY RULES (same spirit as /explore and /platform):
//   · No invented statistics, no efficacy claims, no testimonials, no fabricated logos.
//   · Every concrete claim is about a REAL platform feature or a verifiable fact (e.g. the standards
//     alignment, which is now real data in src/lib/standards/ and rendered on every course page).
//   · Copy speaks to the audience on its own terms; it never disparages another audience or product.
// The pages are gated behind `tenant.flags.recruiting`, so a white-label school on its own domain
// never advertises the platform underneath it (they 404 there, like /platform and /demo).

export interface LandingCta {
  href: string;
  label: string;
}

export interface LandingValueProp {
  icon: string; // a single emoji
  title: string;
  body: string;
}

export interface LandingFaq {
  q: string;
  a: string;
}

export interface AudienceLandingContent {
  /** URL slug: /for/<slug>. Must match its key in AUDIENCES. */
  slug: string;
  /** Small uppercase label above the title, e.g. "For teachers". */
  eyebrow: string;
  /** Page <title> and hero heading share this. */
  title: string;
  /** One or two sentences under the title. */
  subtitle: string;
  /** Meta description (<= ~160 chars). */
  metaDescription: string;
  primaryCta: LandingCta;
  secondaryCta?: LandingCta;
  /** The value-prop grid: what this audience gets, in their terms. 3 to 6 entries. */
  valueProps: LandingValueProp[];
  /** Optional FAQ, answered only with what the platform can say truthfully. */
  faq?: LandingFaq[];
  /** Closing call-to-action band. */
  closer: { title: string; body: string };
}
