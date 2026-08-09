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

  // ── Here Be Dragons (plans/58): a second lane PAIR on the same axis ──────────────────────────────
  // The rail above is `ruling` vs `policy`, which is the route series' spine. These are `claim` vs
  // `evidence`, and the gap between the two is the argument of the whole series: a claim about the
  // world is made, and the evidence that could test it arrives decades or centuries later, or arrives
  // and is ignored. `lane` is a free-form string on TimelineEvent, so this needed no code change.
  //
  // Read the pairs, not the rows. 1912 against 1966 is Wegener. 1811 against the 1990s is Anning.
  // 1828 is the one to notice: a claim with no evidence behind it at all, which outlived most of the
  // properly evidenced entries on this list.
  { year: "77", lane: "claim", text: "Pliny compiles descriptions of peoples at the edge of the world" },
  { year: "c. 1300", lane: "claim", text: "The Hereford Mappa Mundi draws Pliny's peoples in its margins" },
  { year: "1375", lane: "evidence", text: "The Catalan Atlas draws Mali's ruler from Saharan trade testimony" },
  { year: "1539", lane: "claim", text: "The Carta Marina prints excellent coastlines covered in sea monsters" },
  { year: "1705", lane: "evidence", text: "Giant bones surface at Claverack, New York, and are read as biblical" },
  { year: "1811", lane: "evidence", text: "Mary Anning begins finding the fossils that others will publish" },
  { year: "1815", lane: "evidence", text: "William Smith's map shows strata as a picture for the first time" },
  { year: "1828", lane: "claim", text: "Irving invents the Salamanca scene, and the flat-earth myth with it" },
  { year: "1869", lane: "claim", text: "The Cardiff Giant is buried, dug up, and sold by the ticket" },
  { year: "1912", lane: "claim", text: "Wegener proposes drifting continents and is dismissed for decades" },
  { year: "1966", lane: "evidence", text: "Seafloor magnetic striping settles it, from instruments built for other work" },
  { year: "1969", lane: "evidence", text: "Deinonychus overturns the sluggish, tail-dragging picture of dinosaurs" },
  { year: "1980", lane: "claim", text: "Alvarez proposes an asteroid, on an iridium layer nobody wanted" },
  { year: "1991", lane: "evidence", text: "The Chicxulub crater is identified, and parts of the debate stay open" },
];
