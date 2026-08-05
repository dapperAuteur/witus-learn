// Source-verification checks — the committed index of facts in the catalog that need a PRIMARY
// source, and that Claude could not get to.
//
// THE PROBLEM THIS SOLVES. This catalog's rule is that every claim is cited. Some claims can only be
// pinned by someone with access Claude does not have: a paywalled code section, a phone call to a
// county clerk, a regulator who answers email, a trade body's current standard behind a login. Until
// now those were prose caveats inside a lesson ("verify before relying on this"), which is honest and
// unactionable: no list exists, nothing records whether it was ever done, and the hedge ships to
// learners forever.
//
// HOW IT WORKS. Check definitions live here, committed, so the editorial call is reviewable in a
// diff. BAM answers them at /admin/research, which writes status and answer to
// `course_research_checks`. Claude reads the answers back with `pnpm research:list`, updates the
// lesson, and DELETES the check from this file. The list shrinking is the progress bar, exactly like
// the standards-coverage and length-tell ratchets.
//
// TO ADD A CHECK: append an entry. Do it whenever you write a lesson sentence containing a hedge you
// cannot resolve yourself. A hedge in a lesson without a check here is a hedge nobody will ever
// clear.

export type ResearchCheckStatus = "open" | "verified" | "corrected" | "blocked";

export const RESEARCH_CHECK_STATUS_LABEL: Record<ResearchCheckStatus, string> = {
  open: "Open, nobody has looked",
  verified: "Verified against a primary source",
  corrected: "Course was wrong, corrected",
  blocked: "Tried, could not settle it",
};

export interface ResearchCheck {
  /** Stable key and the join key for course_research_checks.check_key. Never renumber. */
  key: string;
  /** Course slug this affects, or a group label when it spans several. */
  course: string;
  /** Short label for the list. */
  title: string;
  /** How urgent, in terms of what is at stake if the current text is wrong. */
  severity: "high" | "medium" | "low";
  /** The precise question. One question, answerable. */
  question: string;
  /** The sentence or claim currently in the course, so BAM can see exactly what is at stake. */
  claim: string;
  /** What breaks, or who is misled, if the current text is wrong. */
  stakes: string;
  /** Exactly what Claude needs back to close this. Be specific: a quote, a number, a URL, a date. */
  needs: string[];
  /** Where to look. Primary sources first. */
  where: string[];
}

export const RESEARCH_CHECKS: ResearchCheck[] = [
  // ── Surplus Funds Basics ──────────────────────────────────────────────────────────────────────
  {
    key: "ga-pay-direct-rule",
    course: "surplus-funds-basics",
    title: "Georgia: must recovered funds be paid directly to the owner?",
    severity: "high",
    question:
      "Does O.C.G.A. § 44-12-224 (or a related provision) actually require that located property be paid directly to the owner and NOT to the finder, including under a power of attorney? Quote the operative sentence.",
    claim:
      "The course states, marked as reported rather than verified, that funds must be paid directly to the owner and may not be paid to the finder, 'whether pursuant to a duly executed power of attorney or otherwise.'",
    stakes:
      "This is the single most operationally consequential item in the course. If it holds, an operator cannot net their fee at source: they invoice and carry collection risk on every file, which changes cash flow, the contract and how much working capital is needed before the first fee arrives. Teaching the wrong answer sends someone into Georgia with a business model that does not work.",
    needs: [
      "The exact statutory sentence, quoted, with the code section and subsection",
      "Whether it applies only to property already delivered to the commissioner, or more broadly",
      "The URL of the primary source you read it in, and the date you read it",
    ],
    where: [
      "Georgia General Assembly's own code site, rather than Justia or FindLaw",
      "Georgia Department of Revenue unclaimed property program, which may state it plainly",
      "A call to the Georgia DOR unclaimed property office",
    ],
  },
  {
    key: "ga-county-held-finder-rules",
    course: "surplus-funds-basics",
    title: "Georgia: are finders regulated for COUNTY-held excess funds?",
    severity: "high",
    question:
      "Does any Georgia rule cap fees, require registration, or impose a waiting period for someone assisting with COUNTY-held excess funds under O.C.G.A. § 48-4-5, as distinct from state-held unclaimed property under § 44-12-224?",
    claim:
      "The course says plainly that this is not established, and treats the 10 percent cap and 24-month unenforceability as applying to state-held property only.",
    stakes:
      "It is the one hole in the three-state comparison table. If county-held funds are unregulated, Georgia is a materially better market than the course implies before the five-year cliff. If they are regulated and the course says nothing, a learner could charge an unlawful fee.",
    needs: [
      "Yes or no, with the code section if yes",
      "If yes: the cap, any registration requirement, and any waiting period",
      "Whether the Claimant Designated Representative registration introduced 1 July 2024 reaches county-held funds",
    ],
    where: [
      "Georgia code, Title 48 Chapter 4 and Title 44 Chapter 12",
      "Georgia DOR guidance on Claimant Designated Representatives",
      "A call to one county tax commissioner's office, which will know what they require in practice",
    ],
  },
  {
    key: "fl-197582-tax-deed-clock",
    course: "surplus-funds-basics",
    title: "Florida: the 120-day tax deed surplus clock",
    severity: "medium",
    question:
      "In Fla. Stat. § 197.582, is the claim period 120 days from the date of the NOTICE, and are non-owner claims barred after it while the property owner is treated differently? Quote the operative subsection.",
    claim:
      "The course states this as reported from secondary sources, and explicitly says it has not been read against the primary text.",
    stakes:
      "A wrong deadline is the failure mode that permanently costs a homeowner their money, and it is the number a learner is most likely to repeat to someone.",
    needs: [
      "The operative sentence quoted, with the subsection",
      "Confirmation of what event starts the clock, notice date versus sale date",
      "How the property owner's position differs from other claimants",
    ],
    where: [
      "flsenate.gov statutes for the current year, section 197.582",
      "A Florida clerk of court's tax deed surplus page, which usually restates the rule",
    ],
  },
  {
    key: "tx-attorney-referral-fees",
    course: "surplus-funds-basics",
    title: "Texas: can a non-attorney take a referral fee from an attorney?",
    severity: "medium",
    question:
      "Under the Texas Disciplinary Rules of Professional Conduct, may a Texas attorney pay a referral fee to a non-attorney who sends them an excess-proceeds client, and if not, what arrangements are permitted?",
    claim:
      "The course offers 'free information plus referral to an attorney' as one of three lawful Texas models, and flags that fee-splitting with non-lawyers is generally prohibited and needs its own check.",
    stakes:
      "It determines whether Texas can be a revenue market at all for a non-attorney, or only a goodwill one. The course currently leaves it open, which is honest but unhelpful to someone planning.",
    needs: [
      "The rule number and what it permits or prohibits",
      "Whether any arrangement, such as employment or a marketing fee, is permitted instead",
      "A Texas lawyer's read, since this is a professional-conduct question rather than a statute lookup",
    ],
    where: [
      "State Bar of Texas, Disciplinary Rules of Professional Conduct",
      "The lawyer you engage for the review, as question one",
    ],
  },

  // ── Sommelier series ──────────────────────────────────────────────────────────────────────────
  {
    key: "rioja-ageing-ladder",
    course: "bvc-taster-wine",
    title: "Rioja: current minimum ageing for Crianza, Reserva, Gran Reserva",
    severity: "medium",
    question:
      "What are the CURRENT minimum total ageing and minimum barrel ageing periods for red Rioja at Crianza, Reserva and Gran Reserva, per the Consejo Regulador?",
    claim:
      "The lesson gives the ladder as 'broadly two, three and five years total, with one, one and two of those in barrel' and tells the reader to check the current rules because they are periodically revised.",
    stakes:
      "Low harm, since the lesson already hedges and the ladder's ORDER is the teaching point. But a course that prints approximate numbers when exact ones exist is doing less than it could.",
    needs: [
      "The current figures for red, and whether white and rosado differ",
      "The date of the most recent revision",
      "A link to the Consejo Regulador's own statement of them",
    ],
    where: ["Consejo Regulador DOCa Rioja, riojawine.com", "The DOCa Rioja reglamento itself"],
  },
  {
    key: "sca-extraction-window",
    course: "bvc-taster-coffee",
    title: "SCA: is the 18-22% extraction and 1.15-1.35% strength window current?",
    severity: "medium",
    question:
      "Does the Specialty Coffee Association still publish the brewing control window as roughly 18-22 percent extraction yield and 1.15-1.35 percent strength, and has the Coffee Value Assessment work changed it?",
    claim:
      "The course teaches those two ranges as a window to steer within, cited to the SCA's brewing control work.",
    stakes:
      "It is the most quoted pair of numbers in specialty coffee and the course presents them as current. If the SCA has revised them, the course is teaching a superseded standard while claiming to teach the current one, which is the exact failure it criticises elsewhere.",
    needs: [
      "Whether the figures are current, and the SCA page or standard that states them",
      "Whether the cupping ratio of 8.25 g per 150 ml is also still current",
      "Any date the SCA gives for the most recent revision",
    ],
    where: ["sca.coffee protocols and standards", "The SCA Coffee Value Assessment documentation"],
  },
  {
    key: "norc-child-labour-figure",
    course: "bvc-taster-chocolate",
    title: "Chocolate: the 1.56 million child labour figure and its survey years",
    severity: "high",
    question:
      "Does the NORC at the University of Chicago report state approximately 1.56 million children in child labour in cocoa production in Côte d'Ivoire and Ghana, and for which survey year?",
    claim:
      "The course states roughly 1.56 million children in child labour in cocoa in those two countries in 2018/19, with a large majority in hazardous work.",
    stakes:
      "This is the most serious factual claim in the sommelier series and it concerns real harm to real children. Getting the number or the years wrong, in either direction, is worse than not citing a number at all. It is also the claim most likely to be quoted back at BAM.",
    needs: [
      "The figure as the report states it, with the page or table",
      "The exact survey year or years it covers",
      "Whether a more recent NORC or successor survey has since superseded it",
    ],
    where: ["norc.org, the cocoa child labour report", "US Department of Labor, which commissioned it"],
  },

  // ── Storytelling / Documentarian ──────────────────────────────────────────────────────────────
  {
    key: "documenters-permission",
    course: "civic-documentation (planned)",
    title: "Documenters: tell City Bureau and Mirror Indy the course exists",
    severity: "medium",
    question:
      "Are City Bureau and Mirror Indy content for a paid course to teach the Documenters practice from their published Field Guide, citing it and directing learners to apply to the real programme?",
    claim:
      "The planned Civic Documentation course is built on the Field Guide's structure and standards, cites them, and sends learners to documenters.org to apply. It claims no endorsement and no affiliation.",
    stakes:
      "The course is a benefit to them, since it produces trained applicants for a programme that trains and pays people. That is exactly why it should not arrive as a surprise. It is also a rights question about how much of the Guide may be quoted rather than taught.",
    needs: [
      "A reply from City Bureau (documenters@citybureau.org) and Mirror Indy (documenters@mirrorindy.org)",
      "Any wording they want used, or want avoided, when the course names them",
      "Whether they object to the course pointing learners at the Indianapolis programme",
    ],
    where: [
      "documenters@citybureau.org and documenters@mirrorindy.org",
      "The Field Guide's own Contact us section",
    ],
  },

  // ── Civics ────────────────────────────────────────────────────────────────────────────────────
  {
    key: "trump-v-barbara-status",
    course: "citizenship-naturalization",
    title: "Trump v. Barbara: current status and whether the lesson still holds",
    severity: "high",
    question:
      "What is the current procedural status of Trump v. Barbara (decided 30 June 2026), including any rehearing petition or further proceedings, and does the lesson's description of the holding and the vote split remain accurate?",
    claim:
      "The lesson describes the Court striking down the 2025 executive order 6-3, splitting 5-4 on the underlying constitutional question, and itself tells the reader to confirm the current status because further proceedings were reported as of July 2026.",
    stakes:
      "A civics course teaching birthright citizenship is exactly where being out of date is least acceptable, and the lesson currently carries its own hedge, which is a signal it is unfinished rather than a solution.",
    needs: [
      "Current status: final, rehearing pending, or further proceedings",
      "Confirmation of the vote split as described",
      "Whether anything in the holding has been narrowed or clarified since",
    ],
    where: ["supremecourt.gov docket for the case", "The Court's opinion and any subsequent orders"],
  },
  {
    key: "baltimore-grant-figures",
    course: "baltimore-chain",
    title: "Baltimore: are the grant figures still current?",
    severity: "low",
    question:
      "Are the grant amounts and programme names cited in the Baltimore course still accurate, and are the programmes still running?",
    claim:
      "The course tells the learner to re-check every figure before relying on it, since grants change.",
    stakes:
      "Grant programmes change or close, and a learner acting on a closed programme wastes real effort. Low severity only because the lesson already tells them to check.",
    needs: [
      "For each programme named: still running, yes or no",
      "Current amounts if changed",
      "The programme page URL and the date checked",
    ],
    where: ["The administering agency's own site for each programme"],
  },

  // ── Pricing anchors (src/lib/market-comparison.ts) ───────────────────────────────────────────
  // These differ from every other check in this file: they do not fix a sentence in a lesson, they
  // clear a number used to REASON about our own prices, and gate whether that number may ever be
  // quoted publicly. BAM said he would verify prices himself, so they live on the same list he
  // already works, /admin/research, rather than in a separate doc nobody opens.
  //
  // Each `price-*` key matches a MarketComparison `key`. When one is answered, update the entry's
  // price + gatheredOn, flip `needsVerification` to false, and DELETE the check from this file.
  {
    key: "price-dla-part-107",
    course: "pricing: market anchors",
    title: "Drone Launch Academy, Part 107 exam prep, current price?",
    severity: "medium",
    question:
      "What does Drone Launch Academy charge TODAY for its FAA Part 107 Exam Prep course, at full list price and at any standing discount?",
    claim:
      "market-comparison.ts records $199 as of 2026-08-04, and the Drone Services bundle's justification says $99 'undercuts their $199 exam prep ALONE'.",
    stakes:
      "This is the single comparison the drone bundle's price is argued from. If their real price is $99 on a standing sale, our headline is wrong and the bundle is mispriced. It is also the number most likely to end up in marketing copy, where a wrong figure about a named competitor is worse than no figure.",
    needs: [
      "Current list price in USD",
      "Any standing or seasonal discount, and what it reduces to",
      "The URL and the date checked",
    ],
    where: ["dronelaunchacademy.com course/pricing pages", "Their checkout, which is the only authoritative price"],
  },
  {
    key: "price-dla-roof-inspection",
    course: "pricing: market anchors",
    title: "Drone Launch Academy, Aerial Roof Inspection Pro: price, and what $499 actually buys",
    severity: "medium",
    question:
      "What is the current price of Aerial Roof Inspection Pro, and what does it include that our planned drone-roof-property-and-claims course does not, sample reports, client deliverables, an industry affiliation, live support?",
    claim:
      "market-comparison.ts records $499 as of 2026-08-04 and notes the $499-vs-$29 gap is 'worth investigating rather than boasting about'.",
    stakes:
      "The widest gap in the comparison table, so it is both our best marketing line and our biggest blind spot. If $499 buys sample deliverables and report templates, that is a real product gap in course 07 worth closing before launch, a competitive-intelligence answer, not just a price.",
    needs: [
      "Current price",
      "The course's syllabus or module list",
      "Whether it ships templates, sample reports, or any credential",
      "URL and date checked",
    ],
    where: ["dronelaunchacademy.com", "Their sales page's curriculum section", "Buying it once is a legitimate way to answer this"],
  },
  {
    key: "price-pilot-institute-part-107",
    course: "pricing: market anchors",
    title: "Pilot Institute, Part 107 and the Part 107 + Business bundle: standing prices?",
    severity: "medium",
    question:
      "What are Pilot Institute's standing (non-promotional) prices for the Part 107 course and for the Commercial Drone Pilot Bundle (Part 107 + Drone Business)?",
    claim:
      "market-comparison.ts records ~$149 as of 2026-08-04 with a note that it was 'reported as a LIMITED-TIME reduction', and that the full bundle price could not be established.",
    stakes:
      "The least reliable figure in the table, and the most structurally relevant one: their Part 107 + business bundle is EXACTLY the shape of our Drone Services bundle, so it is the closest thing to a direct competitor our $99 has. Getting this wrong misprices the flagship bundle.",
    needs: [
      "Standing price of the Part 107 course",
      "Price of the Part 107 + Drone Business bundle",
      "What the business half covers, module by module",
      "URL and date checked",
    ],
    where: ["pilotinstitute.com course and bundle pages"],
  },
  {
    key: "price-udemy-virtual-tours",
    course: "pricing: market anchors",
    title: "Udemy 360/virtual-tour courses, what do they ACTUALLY sell for?",
    severity: "low",
    question:
      "What is the typical effective (post-discount) price of the main 360 / virtual-property-tour courses on Udemy, observed across a few visits rather than at one moment?",
    claim:
      "market-comparison.ts records a $49.99 list price and already warns that 'Udemy's real price after discount is frequently under $20, so the honest comparison for our $19 fundamentals course is about the same money, much more course'.",
    stakes:
      "Our $19 fundamentals course and the $49 360 bundle are both anchored here. Udemy list prices are close to fictional; if the real price is $15, the 360 bundle is competing on volume and quality rather than on price, which changes how it should be marketed.",
    needs: [
      "Observed effective prices on 2-3 separate days",
      "The course URLs",
      "Dates checked",
    ],
    where: ["udemy.com, checked logged-out, on more than one day"],
  },
  {
    key: "price-dla-connect-membership",
    course: "pricing: market anchors",
    title: "Drone Launch Connect, what does the $348/year membership actually include?",
    severity: "low",
    question:
      "What does Drone Launch Academy's Connect community membership include at $348/12 months, job leads, referrals, live calls, course access?",
    claim:
      "market-comparison.ts records $348/12mo and states plainly that 'theirs buys a PEER COMMUNITY... ours buys a CONTENT CATALOG. Do not present $99 vs $348 as like-for-like.'",
    stakes:
      "This is the clearest case of a competitor charging more for something we do not offer at all. The answer decides a product question, not just a price one: whether all-access should ever include a community, and whether $99/year is underpriced if it did.",
    needs: [
      "Current price and term",
      "What membership includes",
      "Whether course access is bundled with it",
      "URL and date checked",
    ],
    where: ["dronelaunchacademy.com membership/community pages"],
  },
  {
    key: "price-coursera-range",
    course: "pricing: market anchors",
    title: "Coursera single-course range, is $39-79 still right?",
    severity: "low",
    question:
      "What is the current price range for a single self-paced Coursera course with a certificate, and has the model shifted further toward subscription-only (Coursera Plus)?",
    claim:
      "course-pricing.ts has anchored the whole catalog's tier ladder on 'Coursera $39-79 (with a certificate)' since the original pricing turn, and market-comparison.ts flags the range as predating this turn.",
    stakes:
      "This anchor sets the ceiling for the ENTIRE catalog, not just this series, every Core and Premium price is justified relative to it. If Coursera has moved to subscription-only, the comparison our tier ladder rests on no longer exists and the ladder needs rethinking.",
    needs: [
      "Current single-course price range",
      "Whether single-course purchase is still offered at all",
      "Coursera Plus pricing, since that is now the closer analogue to our all-access",
      "Date checked",
    ],
    where: ["coursera.org, logged out"],
  },
];

export function getResearchCheck(key: string): ResearchCheck | undefined {
  return RESEARCH_CHECKS.find((c) => c.key === key);
}

export interface ResearchCheckGroup {
  course: string;
  checks: ResearchCheck[];
}

/** Grouped by course, high severity first inside each group. */
export function groupedResearchChecks(): ResearchCheckGroup[] {
  const rank = { high: 0, medium: 1, low: 2 } as const;
  const byCourse = new Map<string, ResearchCheck[]>();
  for (const c of RESEARCH_CHECKS) {
    const list = byCourse.get(c.course);
    if (list) list.push(c);
    else byCourse.set(c.course, [c]);
  }
  return [...byCourse.entries()].map(([course, checks]) => ({
    course,
    checks: [...checks].sort((a, b) => rank[a.severity] - rank[b.severity]),
  }));
}
