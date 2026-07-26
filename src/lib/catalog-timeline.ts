import type { TimelineEvent } from "./timeline";

// The catalog's doctrinal-and-policy spine, for the timeline panel on the globe page (plans/45 Part 2,
// the event rail). These are the rulings and federal acts the route series and its capstone argue
// about, the same items the cross-course entity registry (src/lib/entities.ts) seeds from, on one axis
// so the time dimension sits beside the place dimension the globe shows. Two lanes: what a court
// RULED, and what a legislature or agency did as POLICY. Every date is a well-established public fact.
export const CATALOG_TIMELINE: TimelineEvent[] = [
  { year: "1917", lane: "ruling", text: "Buchanan v. Warley bars explicit racial zoning ordinances" },
  { year: "1926", lane: "ruling", text: "Euclid v. Ambler upholds zoning as a valid police power" },
  { year: "1948", lane: "ruling", text: "Shelley v. Kraemer: courts may not enforce racial covenants" },
  { year: "1949", lane: "policy", text: "The Housing Act funds slum clearance nationally" },
  { year: "1954", lane: "ruling", text: "Berman v. Parker upholds taking a whole area for renewal" },
  { year: "1956", lane: "policy", text: "The Federal-Aid Highway Act sets the federal share at 90 percent" },
  { year: "1964", lane: "policy", text: "The Civil Rights Act ends legal segregation in public accommodations" },
  { year: "1968", lane: "policy", text: "The Fair Housing Act bars discrimination in housing" },
  { year: "1974", lane: "ruling", text: "Milliken v. Bradley limits desegregation across district lines" },
  { year: "1984", lane: "ruling", text: "Hawaii Housing Authority v. Midkiff broadens the public-use doctrine" },
  { year: "2005", lane: "ruling", text: "Kelo v. New London allows taking for economic development" },
];
