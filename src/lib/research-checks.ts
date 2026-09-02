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
  /**
   * Slug of the lesson the hedge is actually in, when it is known. OPTIONAL, and unset means
   * "nobody recorded it", which /admin/research says in those words.
   *
   * WHY IT IS FILLED IN BY HAND. A reviewer is being asked to settle a hedge and cannot read the
   * sentence that hedges, so the board needs to link to the lesson. A check only carries a course,
   * so the lesson has to come from somewhere, and keyword-matching one and printing it as fact is
   * the worst option available: a wrong location sends the reviewer to the wrong page and they have
   * no reason to doubt it. `pnpm locate:research-checks` reports which lessons contain a check's
   * quoted phrases and statute numbers, WITH the matching sentence, and a human writes this field
   * after reading that evidence. Some checks span a whole course, or name a course that does not
   * exist yet, and those legitimately stay unset forever.
   */
  lesson?: string;
  /**
   * The verbatim hedging sentence from the lesson, when one was recorded.
   *
   * The board verifies it against the live lesson before showing it, and says plainly when it no
   * longer appears: a check whose sentence has been rewritten out of the course is stale, and that
   * is worth knowing before spending an afternoon on a phone call to settle it.
   */
  quote?: string;
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
  {
    key: "ga-ssepf8-gloss",
    title: "What does Georgia SSEPF8 actually say?",
    course: "banking-and-the-unbanked",
    severity: "medium",
    claim:
      "src/lib/standards/data/ga.ts glosses Georgia SSEPF8 as (investing) inside a notClaimed body that is published to teachers.",
    question:
      "What does Georgia SSEPF8 actually say? The gloss has flipped between 'how earnings are determined' and 'investing' three times inside merge conflict resolutions, and it is currently 'investing' with no evidence behind it either way.",
    stakes:
      "It is UNFALSIFIABLE inside this repo, which is why it survived. SSEPF8 is unclaimed, so fetch-or-do-not-cite means no verbatim text for it exists anywhere in the codebase, and the string SSEPF8 appears EXACTLY ONCE in the whole repository: in that parenthesis, describing itself. Nothing can contradict it, no guard can see it, and it is asserted to Georgia teachers as a reason the catalog does not claim that standard. A wrong gloss makes the refusal read as a refusal of something else.",
    needs: [
      "The verbatim text of SSEPF8 from the Georgia Standards of Excellence, Personal Finance and Economics, course code 45.061",
      "Whether the gloss should be corrected, or dropped entirely since the standard is unclaimed and the parenthetical adds nothing a reader can verify",
    ],
    where: [
      "The canonical GaDOE PDF at lor2.gadoe.org, which resolved for the housing-standards pass on 2026-08-28",
      "src/lib/standards/data/ga.ts, the notClaimed entry listing the unclaimed SSEPF standards",
    ],
  },
  // ── Surplus Funds Basics ──────────────────────────────────────────────────────────────────────
  {
    key: "ga-pay-direct-rule",
    course: "surplus-funds-basics",
    lesson: "surplus-georgia",
    quote:
      'Located funds must be paid directly to the owner and may not be paid to the finder, "whether pursuant to a duly executed power of attorney or otherwise"',
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
    lesson: "surplus-georgia",
    quote:
      "Whether Georgia regulates finders for county-held excess funds, as distinct from state-held unclaimed property, is not established here.",
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
    lesson: "surplus-florida",
    quote:
      "Reported requirements, and this one has not been read against the primary text yet, so verify before relying on it: claimants have 120 days from the date of the notice to file with the clerk, and claims other than the property owner's that miss the 120th day are barred.",
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
    lesson: "surplus-texas",
    quote:
      "Note that attorneys generally may not split fees with non-lawyers under the rules of professional conduct, so a referral-fee arrangement needs its own check with a Texas lawyer.",
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
    lesson: "somm-reading-old-world-labels",
    quote:
      "For red Rioja the ladder runs roughly two, three and five years total, with one, one and two of those in oak, and the exact requirements are set and periodically revised by the Consejo Regulador",
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
    lesson: "coffee-extraction",
    quote:
      "The Specialty Coffee Association's brewing control work puts a widely used target range at roughly 18 to 22 percent extraction yield, with strength around 1.15 to 1.35 percent dissolved solids for filter coffee.",
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
    lesson: "choc-ethics",
    quote:
      "estimated approximately 1.56 million children in child labor in cocoa production in those two countries in the 2018/19 season, with a large majority engaged in hazardous work as defined by the survey",
    title: "Chocolate: the 1.56 million child labor figure and its survey years",
    severity: "high",
    question:
      "Does the NORC at the University of Chicago report state approximately 1.56 million children in child labor in cocoa production in Côte d'Ivoire and Ghana, and for which survey year?",
    claim:
      "The course states roughly 1.56 million children in child labor in cocoa in those two countries in 2018/19, with a large majority in hazardous work.",
    stakes:
      "This is the most serious factual claim in the sommelier series and it concerns real harm to real children. Getting the number or the years wrong, in either direction, is worse than not citing a number at all. It is also the claim most likely to be quoted back at BAM.",
    needs: [
      "The figure as the report states it, with the page or table",
      "The exact survey year or years it covers",
      "Whether a more recent NORC or successor survey has since superseded it",
    ],
    where: ["norc.org, the cocoa child labor report", "US Department of Labor, which commissioned it"],
  },

  // ── Storytelling / Documentarian ──────────────────────────────────────────────────────────────
  {
    key: "documenters-permission",
    course: "civic-documentation (planned)",
    title: "Documenters: tell City Bureau and Mirror Indy the course exists",
    severity: "medium",
    question:
      "Are City Bureau and Mirror Indy content for a paid course to teach the Documenters practice from their published Field Guide, citing it and directing learners to apply to the real program?",
    claim:
      "The planned Civic Documentation course is built on the Field Guide's structure and standards, cites them, and sends learners to documenters.org to apply. It claims no endorsement and no affiliation.",
    stakes:
      "The course is a benefit to them, since it produces trained applicants for a program that trains and pays people. That is exactly why it should not arrive as a surprise. It is also a rights question about how much of the Guide may be quoted rather than taught.",
    needs: [
      "A reply from City Bureau (documenters@citybureau.org) and Mirror Indy (documenters@mirrorindy.org)",
      "Any wording they want used, or want avoided, when the course names them",
      "Whether they object to the course pointing learners at the Indianapolis program",
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
    lesson: "birthright-citizenship",
    quote:
      "the Supreme Court struck down a 2025 executive order that had sought to limit birthright citizenship",
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
      "Are the grant amounts and program names cited in the Baltimore course still accurate, and are the programs still running?",
    claim:
      "The course tells the learner to re-check every figure before relying on it, since grants change.",
    stakes:
      "Grant programs change or close, and a learner acting on a closed program wastes real effort. Low severity only because the lesson already tells them to check.",
    needs: [
      "For each program named: still running, yes or no",
      "Current amounts if changed",
      "The program page URL and the date checked",
    ],
    where: ["The administering agency's own site for each program"],
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

  // ── Here Be Dragons: Writing the World (plans/58) ──────────────────────────────────────────────
  // Both filed by the course's own author, who flagged them rather than shipping a citation it could
  // not stand behind. This is the rule working as intended: a hedge with no check is a hedge nobody
  // will ever clear.
  {
    key: "wtw-nasa-alh84001-release-title",
    course: "writing-the-world",
    lesson: "press-release-institutional-voice",
    quote:
      "On 7 August 1996, more than a week before the paper appeared in print, NASA held a press conference at its Washington headquarters to announce the ALH84001 findings.",
    title: "Exact title of the 1996 NASA ALH84001 press release",
    severity: "medium",
    question:
      "What was the exact title and release date of the NASA press release announcing the ALH84001 Martian meteorite findings in August 1996?",
    claim:
      "Lesson 5 (the press release) cites it as: National Aeronautics and Space Administration. (1996, August 7). Meteorite yields evidence of primitive life on early Mars. The date and the event are solid. The exact release TITLE is the part that was not verified against NASA's own archive.",
    stakes:
      "Lesson 5 is the course's worked example of institutional voice, and it teaches students to trace a claim back to its source document. A misquoted title in the one lesson about citing precisely would be the most self-undermining error the course could ship. It is also an ELA capstone whose standards claims rest on modeling WHST.11-12.8.",
    needs: [
      "The verbatim release title",
      "The release date and any release number",
      "A stable URL in NASA's newsroom or history archive",
    ],
    where: [
      "NASA newsroom archive, nasa.gov",
      "NASA History Division online reference collection",
      "The Internet Archive capture of nasa.gov from August 1996",
    ],
  },
  {
    key: "wtw-orwell-horizon-citation",
    course: "writing-the-world",
    lesson: "the-missing-actor",
    quote: "Orwell, G. (1946). Politics and the English language. Horizon, 13(76), 252-265.",
    title: "Volume, issue and page range for Orwell's Politics and the English Language",
    severity: "low",
    question:
      "What are the correct volume, issue and page numbers for George Orwell's Politics and the English Language as first published in Horizon in April 1946?",
    claim:
      "Lesson 9 (the passive voice and the missing actor) and lesson 10 cite it as Horizon, 13(76), 252-265. The essay, the journal and the year are not in doubt; the volume, issue and page range were not confirmed against the issue itself.",
    stakes:
      "Low stakes for the argument, which does not depend on the pagination, but this is the lesson that teaches citation as an instruction to a reader with a job. A wrong page range here is a small error in exactly the place a sharp student will check.",
    needs: ["Volume number", "Issue number", "First and last page"],
    where: [
      "A library copy or scan of Horizon vol. 13 (1946)",
      "The Orwell Foundation, which reproduces the essay with publication details",
      "Any scholarly edition of Orwell's essays, which will carry the original citation",
    ],
  },

  // ── Here Be Dragons: Wrong for Good Reasons (plans/58) ─────────────────────────────────────────
  {
    key: "wfgr-tharp-dismissal-quotation",
    course: "wrong-for-good-reasons",
    lesson: "who-gets-believed",
    quote:
      "Working that way she identified the mid-ocean rift valley and argued it was continuous, and by her own account the finding was initially waved off.",
    title: "What Marie Tharp was actually told when she first mapped the rift valley",
    severity: "medium",
    question:
      "Is there a documented, sourceable quotation for the reaction Marie Tharp received when she first identified the rift valley in the Mid-Atlantic Ridge, and what exactly was said?",
    claim:
      "Lesson 15 (who gets believed) currently PARAPHRASES the reaction as her being waved off, rather than quoting the widely repeated line, because the famous wording is reported in secondary retellings more often than it is documented.",
    stakes:
      "Lesson 15 is the course's who-gets-believed lesson, and lesson 9 of course 1 teaches that repetition is not corroboration. Printing a much-repeated quotation without a source would break the series' own rule in the lesson least able to afford it. The paraphrase is safe but weaker than the real thing would be.",
    needs: [
      "A quotation with a documented source (Tharp's own writing, an interview transcript, or an archival record)",
      "Or confirmation that no such documented wording exists, in which case the paraphrase stays and this check closes as blocked",
    ],
    where: [
      "Tharp, M. (1999). Connect the dots: Mapping the seafloor and discovering the mid-ocean ridge, in Lamont-Doherty's own published memoir collection",
      "Lamont-Doherty Earth Observatory archives, Columbia University",
      "Hali Felt's biography Soundings (2012), checking ITS sourcing rather than treating it as the source",
    ],
  },
  {
    key: "wfgr-letronne-1834-citation",
    course: "wrong-for-good-reasons",
    lesson: "irving-1828",
    quote:
      "In 1834, the French scholar Antoine-Jean Letronne published an influential essay arguing that the Church Fathers had held a flat earth.",
    title: "Full citation for Letronne's 1834 essay on medieval cosmography",
    severity: "low",
    question:
      "What are the journal, volume and page numbers for J. A. Letronne's 1834 essay on the cosmographical opinions of the Church Fathers?",
    claim:
      "Lesson 4 credits Letronne (1834) alongside Washington Irving as a co-originator of the flat-earth myth, so the story is not told as a single-author invention. The citation currently omits volume and page numbers rather than guessing them.",
    stakes:
      "Low: the argument does not depend on the pagination, and naming Letronne at all is what keeps the lesson from oversimplifying its own myth-busting. But an incomplete citation in a course about tracing claims to their origin is a visible weak spot for a careful reader.",
    needs: ["Journal title", "Volume and year", "First and last page"],
    where: [
      "Russell, J. B. (1991). Inventing the flat earth, whose notes cite Letronne directly",
      "Revue des Deux Mondes archives for 1834",
      "Gallica, the Bibliothèque nationale de France digital library",
    ],
  },

  // ── How We Know What's Out There (SCI-02) ─────────────────────────────────────────────────────
  // The physics in this course is settled and citable. The BIOGRAPHY is where the risk is, and the
  // She Did the Work audit is the precedent: 14 factual errors in one social calendar, several
  // about living people. Popular science history is worse, because a good anecdote gets repeated
  // for a century before anyone checks it. Each lesson below HEDGES IN THE TEXT rather than
  // asserting, and tells the learner it is hedging, which is the subject of the course being
  // modelled rather than a disclaimer bolted on. Close a check by fixing the lesson and DELETING
  // the entry.
  {
    key: "banneker-lenfant-plan",
    course: "how-we-know-whats-out-there",
    lesson: "banneker-and-the-almanac",
    quote:
      "Treat that story as unestablished. It is widely repeated, and historians have questioned whether it holds up.",
    title: "Banneker and the reconstruction of the Washington plan from memory",
    severity: "high",
    question:
      "What does the primary record support about Benjamin Banneker's role in the survey of the federal district, and specifically about the claim that he reconstructed L'Enfant's plan from memory after L'Enfant left with the drawings?",
    claim:
      "The lesson states his documented work (almanac ephemerides, the 1791 letter to Jefferson, the boundary survey under Andrew Ellicott) and explicitly declines to repeat the reconstruction story, telling the learner it is contested and that an already-remarkable life acquiring a better story is a reason to check.",
    stakes:
      "HIGH, in two directions. Asserting a likely-false story in a course about evidence would be self-refuting. But under-crediting him would be its own error, and this is a Black scientist whose reputation has been both inflated by admirers and attacked by detractors. Getting the line exactly right matters more here than almost anywhere in the catalog.",
    needs: [
      "What the surviving survey records show about his actual role and dates",
      "The earliest known appearance of the reconstruction story, and whether any contemporary source supports it",
      "A citable statement from a historian or holding institution on its status",
    ],
    where: [
      "Library of Congress, Banneker and early District of Columbia survey records",
      "Maryland Center for History and Culture",
      "National Park Service history of the L'Enfant plan",
    ],
  },
  {
    key: "payne-thesis-retraction",
    course: "how-we-know-whats-out-there",
    lesson: "cecilia-payne-and-what-stars-are-made-of",
    quote:
      "The compressed version is doing several things at once, and this course flags rather than repeats it.",
    title: "Cecilia Payne's 1925 thesis: what actually happened with the hedged conclusion",
    severity: "medium",
    question:
      "What do the 1925 thesis and the surrounding correspondence actually show about how the hydrogen-abundance conclusion came to be described as almost certainly not real, and what was Henry Norris Russell's documented role?",
    claim:
      "The lesson states that the published thesis contains language stepping back from the result, that she was correct, and that the widely told forced-to-retract version compresses several things. It deliberately does not narrate the sequence.",
    stakes:
      "MEDIUM. The science is not in question and the lesson is honest as written. But this is one of the most-repeated stories in popular astronomy and the popular version may be unfair to one or both parties. A course about evidence should tell it accurately or not at all.",
    needs: [
      "The exact hedging sentence in the published thesis, with its page",
      "What the surviving correspondence shows about who advised the hedge",
      "How Russell's own later publication treated her priority",
    ],
    where: [
      "The published 1925 thesis, Stellar Atmospheres, Radcliffe College",
      "Harvard College Observatory archives and the Payne-Gaposchkin papers",
    ],
  },
  {
    key: "leavitt-nobel-anecdote",
    course: "how-we-know-whats-out-there",
    lesson: "rung-two-leavitts-yardstick",
    quote:
      "That story is usually told inaccurately, and this course leaves it out pending a check against primary sources.",
    title: "The Henrietta Leavitt Nobel nomination anecdote",
    severity: "low",
    question:
      "What is the documented basis for the story that Henrietta Swan Leavitt was going to be nominated for a Nobel Prize, and is the usual telling accurate?",
    claim:
      "The lesson mentions the anecdote exists, says it is usually told inaccurately, omits it, and argues that introducing her through a prize she did not receive makes the prize the measure of the work.",
    stakes:
      "LOW for the astronomy, which is unaffected. Worth settling anyway: it is repeated everywhere, and this course tells the learner it is unreliable, so it should be able to say why.",
    needs: [
      "The documented origin of the story and who recorded it",
      "Whether any nomination or intent to nominate is evidenced",
      "Whether the usual retelling misstates the dates",
    ],
    where: ["The Nobel Foundation nomination archive", "Harvard College Observatory archives"],
  },
  {
    key: "hubble-tension-current-values",
    course: "how-we-know-whats-out-there",
    lesson: "the-hubble-tension",
    quote:
      "This course does not print current values for the expansion rate, because they are actively revised and a course is a poor place for a number that moves.",
    title: "Current expansion-rate values from both method families",
    severity: "medium",
    question:
      "What are the current published values, with uncertainties and dates, for the Hubble constant from the distance-ladder family and from the early-universe family, and has the tension narrowed?",
    claim:
      "The lesson describes the disagreement and its three candidate explanations, and deliberately prints NO numbers, telling the learner to go to a current source and note which method produced the figure.",
    stakes:
      "MEDIUM. The lesson is honest and durable as written, which was the point of omitting the numbers. But a course about how we know things is stronger if it can show the reader the actual gap, and this is live enough to need a date attached and a plan to revisit.",
    needs: [
      "One current representative value plus uncertainty from each family, with publication and date",
      "Whether the gap has narrowed, widened, or held",
      "A note on when this should next be re-checked",
    ],
    where: [
      "NASA and ESA mission pages",
      "The most recent peer-reviewed determinations from each method family",
    ],
  },
  {
    key: "iau-hubble-lemaitre-resolution",
    course: "how-we-know-whats-out-there",
    lesson: "redshift-and-an-expanding-universe",
    quote:
      "The International Astronomical Union has recommended the name Hubble-Lemaitre law, and this course uses it.",
    title: "The IAU resolution on the Hubble-Lemaitre law: exact status and wording",
    severity: "low",
    question:
      "What did IAU Resolution B4 (2018) actually say, what was the outcome of the member vote, and is the recommendation binding or advisory?",
    claim:
      "The lesson states that Lemaitre published the relationship in 1927, two years before Hubble, that the IAU has recommended the name Hubble-Lemaitre law, and that this course uses it.",
    stakes:
      "LOW. The priority fact is well documented and is the teaching point. But the lesson makes a claim about what a scientific body decided, and recommended versus voted-to-rename is exactly the distinction this course teaches learners to notice. It should be right about its own example.",
    needs: [
      "The resolution's operative wording",
      "The vote outcome and whether it is advisory",
      "Confirmation of the 1927 publication details",
    ],
    where: [
      "iau.org, Resolution B4 (2018)",
      "Lemaitre 1927, Annales de la Societe Scientifique de Bruxelles",
    ],
  },

  // ── The River and the Watershed (SCI-03) ──────────────────────────────────────────────────────
  {
    key: "gulf-hypoxic-zone-extent",
    course: "the-river-and-the-watershed",
    lesson: "why-the-oxygen-runs-out",
    quote:
      "The affected area varies from year to year and is measured by survey each summer.",
    title: "Gulf of Mexico hypoxic zone: the current measured extent",
    severity: "medium",
    question:
      "What was the measured extent of the Gulf of Mexico hypoxic zone in the most recent annual summer survey, and what is the five-year average the Hypoxia Task Force reports against its own reduction target?",
    claim:
      "The lesson describes the mechanism in four steps and states that the affected area varies year to year and is measured each summer. It deliberately prints NO figure.",
    stakes:
      "MEDIUM. The lesson is honest and durable as written, and the mechanism is the teaching point. But the size is the fact everyone wants, a course that can give it with a year attached is stronger, and printing a typical size from memory would be exactly the fake precision this track's courses teach against.",
    needs: [
      "The most recent survey's measured extent, with its year",
      "The five-year running average and the Task Force's stated target",
      "A note on when to re-check, since this is annual",
    ],
    where: [
      "NOAA annual hypoxia survey announcements",
      "Mississippi River/Gulf of Mexico Hypoxia Task Force reports, epa.gov/ms-htf",
    ],
  },
  {
    key: "mississippi-basin-drainage-share",
    course: "the-river-and-the-watershed",
    lesson: "you-live-in-a-watershed",
    quote:
      "The Mississippi basin drains a very large share of the continental United States",
    title: "What share of the continental United States the Mississippi basin drains",
    severity: "low",
    question:
      "What share of the land area of the continental United States does the Mississippi River basin drain, per the USGS or another primary authority, and how is the basin boundary defined for that figure?",
    claim:
      "Lesson 1 says the basin drains 'a very large share' of the continental United States and names the Rockies and Appalachians as the reach of its tributaries, without giving a percentage.",
    stakes:
      "LOW. The teaching point is that a watershed is the land that drains to a place, not the exact fraction. But the commonly quoted figure varies between sources depending on how the basin is delimited, and a course whose first lesson is about what a watershed IS should be able to state the number and say how it was defined.",
    needs: [
      "A figure from a primary authority, with the definition of the basin used",
      "Whether the commonly quoted variants differ because of boundary definition or because of error",
    ],
    where: ["U.S. Geological Survey", "U.S. Army Corps of Engineers, Mississippi Valley Division"],
  },
  // ── WELL-08 Context, Equity, and the Coaching Agreement ───────────────────────────────────────
  {
    key: "well08-appreciative-inquiry-health-coaching-evidence",
    course: "well-context-equity",
    lesson: "appreciative-inquiry",
    quote:
      "this program could not locate randomized evidence for it as a one-to-one health-coaching intervention comparable to the trials behind motivational interviewing",
    title: "Appreciative Inquiry: is there trial evidence in one-to-one health coaching?",
    severity: "medium",
    question:
      "Does randomized evidence exist for Appreciative Inquiry as a one-to-one health-coaching or health-behavior-change intervention, with a health or behavioral outcome, rather than as an organizational-development or team-level method? If it does, give the trial, the outcome, and the effect size.",
    claim:
      "The lesson teaches Appreciative Inquiry as a framing device with a plausible mechanism and a good fit to the rest of the program, and states explicitly that it is NOT an evidence-backed protocol, because no comparable randomized health-coaching evidence was located.",
    stakes:
      "The NBHWC competency list names Appreciative Inquiry (2.9), so a coach will meet it as though it were established. If good trial evidence exists, the lesson is under-claiming a technique the handbook expects and should say what the trials show. If it does not, the honest label stays and the lesson is the only place a learner will be told so. Either way the label should reflect what is actually there, which is the rule the whole curriculum runs on.",
    needs: [
      "A randomized or otherwise controlled trial with individual participants, not an organizational case study",
      "The outcome measured and its effect size, so the lesson can quote it the way it quotes the MI trials",
      "Or a definite negative: a systematic review reporting that no such trials exist",
    ],
    where: [
      "PubMed and PsycINFO for Appreciative Inquiry with health coaching, behavior change, or self-management",
      "The Cooperrider-associated literature, checking whether individual-level outcomes were ever measured",
      "Any NBHWC-approved program's own reading list, which may cite the evidence the handbook relies on",
    ],
  },
  // ── He Did the Work ───────────────────────────────────────────────────────────────────────────
  {
    key: "naacp-1919-lynching-report-total",
    course: "naacp-learned-to-win",
    lesson: "hdw-counting-as-evidence",
    quote:
      "So the lesson describes the report's structure and method, and prints no total. A course that teaches counting as a discipline and then reprints an unchecked number would be arguing against itself.",
    title: "The 1919 NAACP lynching report: what does its headline total count?",
    severity: "medium",
    question:
      "In Thirty Years of Lynching in the United States, 1889-1918, what total does the report itself give, and does that figure count ALL persons lynched in the period or only Black victims? What is the breakdown by race?",
    claim:
      "No total. The lesson describes the report's structure (arranged by year, state, race, sex and alleged offense, naming victims where a name could be established) and deliberately prints no number, saying why.",
    stakes:
      "This is the lesson that teaches counting and the burden of correction. Printing a number the course has not checked would refute the lesson in its own body, and the ambiguity is real: secondary accounts describe the same headline figure as both the total lynched and the number of Black victims, which cannot both be true.",
    needs: [
      "The report's own total for 1889 to 1918, quoted from its summary tables",
      "The race breakdown as the report states it, in the report's own terms",
      "The page or table the figures come from, so the lesson can cite it precisely",
    ],
    where: [
      "The digitized original at https://archive.org/details/thirtyyearsoflyn00nati (the summary tables sit in the opening pages, before the state-by-state listing)",
      "The Library of Congress scan in its NAACP exhibition, https://www.loc.gov/exhibits/naacp/",
      "Any library holding the 1919 printing or the Lawbook Exchange reprint edited by Paul Finkelman",
    ],
  },
  // ── She Did the Work ──────────────────────────────────────────────────────────────────────────
  {
    key: "kennedy-rose-parade-emmy-year",
    course: "she-took-the-seat",
    lesson: "sts-trial-contract",
    quote:
      "Her Emmy for Rose Parade coverage is real; the year is not settled, so this course does not print one.",
    title: "Jayne Kennedy's Rose Parade Emmy: which year?",
    severity: "medium",
    question:
      "In which year did Jayne Kennedy win an Emmy for her Rose Parade coverage, and in which category?",
    claim:
      "The course states that the Emmy is real and deliberately prints NO year, because the circulating years are mutually incompatible and none is confirmed by an awards database.",
    stakes:
      "A course about ordinal and date precision that guesses a date has failed its own lesson. Printing a wrong year for a living subject's award is the exact error the course was built to correct, and it would be quoted back at every other claim in it.",
    needs: [
      "The award year, from an Emmy awards database or the awarding chapter's own records",
      "The exact category (a local or regional chapter award and a National Academy award are different things and should not be printed as the same)",
      "Whether the award was to her personally or to the broadcast, which several secondary accounts conflate",
    ],
    where: [
      "Her 2025 memoir Plain Jayne (Andscape Books), which is now the best primary record of her career",
      "The National Academy of Television Arts and Sciences and its Los Angeles chapter award archives",
      "The National Sports Media Association, which carries her biography and honored her in 2022",
    ],
  },
  {
    key: "hobson-financial-literacy-own-words",
    course: "she-did-the-work (Hobson course, not yet built)",
    title: "Mellody Hobson on financial literacy: her own sourced words",
    severity: "high",
    question:
      "Is there a primary, quotable Mellody Hobson statement on FINANCIAL LITERACY (as distinct from racial candor in business), and what is its exact wording and source?",
    claim:
      "Nothing. No Hobson course has been built and no Hobson quotation appears anywhere in the catalog. This check exists because the source calendar attributes a financial-literacy position to her (\"know your numbers, face your numbers, act on your numbers\", and a line about visibility problems rather than income problems) that the verification pass could not tie to anything she is recorded as saying. Her verifiable public words are about racial candor in business, in the 2014 TED talk.",
    stakes:
      "She is a living asset manager. Putting an unsourced financial-literacy position in her mouth is the single most damaging fabrication available in this project, and the calendar's framing makes it easy to do by accident. Until this is answered, any Hobson course must be built on the color-brave material where her voice is documented, or not built.",
    needs: [
      "A direct quotation with its source, date and context, or a clear finding that none exists",
      "If it exists: whether it is in an Ariel shareholder letter, an Ariel-Schwab Black Investor Survey release, a Good Morning America segment, or a filmed talk",
      "A decision from BAM on which basis a Hobson course would be built if the dig comes back empty",
    ],
    where: [
      "Ariel Investments shareholder letters and the Ariel-Schwab Black Investor Survey releases",
      "The 2014 TED talk transcript, which is the one verified body of her public speech (it is about race in business, not financial literacy)",
      "Archived ABC Good Morning America financial segments she presented",
    ],
  },

  // ── Acting ────────────────────────────────────────────────────────────────────────────────────
  {
    key: "sag-aftra-self-tape-terms",
    course: "acting",
    lesson: "the-self-tape",
    quote:
      "The specific numbers change with each bargaining cycle, so this course does not quote them; read the current terms on SAG-AFTRA's own self-tape guidelines page before you accept an unreasonable request as normal",
    title: "SAG-AFTRA: what do the current self-tape audition protections actually say?",
    severity: "medium",
    question:
      "Under the CURRENT SAG-AFTRA TV/Theatrical and Commercials agreements, what are the actual self-tape audition terms: the maximum pages for a first audition and for a callback, the minimum preparation time, whether memorization can be required, and any technical or resolution ceiling? Quote the operative language and name the agreement and its effective dates.",
    claim:
      "The course states only that protections EXIST and names the four things they cover (pages, notice, memorization, technical standard), and deliberately quotes no number, pointing the learner at sagaftra.org instead.",
    stakes:
      "A performer who does not know the terms accepts a 20-page overnight self-tape as normal, which is exactly what the protections were bargained to stop. Naming the numbers in the lesson would make it materially more useful. Quoting a stale number would be worse than the current hedge, because a learner would cite it to a producer and be wrong.",
    needs: [
      "The page limits for a first audition and for a callback, quoted, with the agreement they come from",
      "The minimum preparation time and how weekends are handled",
      "Whether memorization can be required, and what happens if it is",
      "Any technical or resolution ceiling, stated as a ceiling or a floor",
      "The effective dates of the agreement these come from, so the lesson can say when they were current",
    ],
    where: [
      "https://www.sagaftra.org/self-tape-guidelines-members (the member page; it returns 403 to automated fetches, so a human with a browser is needed)",
      "The SAG-AFTRA contract bulletin PDFs under sagaftra.org/sites/default/files/sa_documents/",
      "A SAG-AFTRA member services call, which will state the current terms and the agreement they sit in",
    ],
  },

  // ── The Negro Leagues: Who Owned the Game ─────────────────────────────────────────────────────
  // Six hedges written into the course on purpose. Each is a sentence a learner reads as "the
  // record does not settle this", and each names the document that would settle it. All six sit
  // behind paper that exists and is offline, scanned without a text layer, or behind a rendering
  // no automated fetcher could read.
  {
    key: "nl-abc-name-origin",
    course: "negro-leagues",
    lesson: "nl-abcs",
    quote:
      "This course does not pick. You are looking at a real, ordinary problem in business history: a sponsorship name is evidence of a relationship whose direction the record does not fix.",
    title: "Indianapolis ABCs: what did the letters actually stand for?",
    severity: "low",
    question:
      "Does any contemporaneous document establish whether the ABCs were named for the American Brewing Company, or for the initials of George Abrams, Ran Butler and a co-manager named Conoyer?",
    claim:
      "The lesson gives the brewery reading as the majority account (Encyclopedia of Indianapolis), gives the three-initials reading as a live alternative, notes that the club's own historian Paul Debono hedges even the brewery version because a sponsor can attach to a name that already exists, and refuses to pick.",
    stakes:
      "Low stakes factually and high stakes pedagogically: this is the course's first worked example of a claim held open. If a primary document settles it, the lesson should say so and the example has to be replaced with one that is genuinely open. If nothing settles it, the hedge is exactly right and the lesson should cite whatever Debono says about why.",
    needs: [
      "What Paul Debono, The Indianapolis ABCs (McFarland, 1997), says on the name, quoted with a page number",
      "Any 1900s or 1910s Indianapolis newspaper item naming the sponsor, or an American Brewing Company advertisement carrying the club",
      "The provenance of the 1905 team photograph said to show an ABC Beer sign",
    ],
    where: [
      "Paul Debono, The Indianapolis ABCs: History of a Premier Team in the Negro Leagues (McFarland, 1997; 2nd ed. 2007), on the shelf at IU Indianapolis or via interlibrary loan",
      "The Indianapolis Recorder, 1899 to 2005, at Hoosier State Chronicles: https://newspapers.library.in.gov/",
      "The Indiana Historical Society photograph collections, for the 1905 team image",
    ],
  },
  {
    key: "nl-taylor-avenue-business",
    course: "negro-leagues",
    lesson: "nl-avenue-and-the-ground",
    quote:
      "He built changing space into his own business on Indiana Avenue, had his players dress there, and turned the walk to the ballpark into parades down the Avenue",
    title: "What was C. I. Taylor's Indiana Avenue business?",
    severity: "medium",
    question:
      "What trade did C. I. Taylor's own Indiana Avenue business carry on, and at what address, in the years the ABCs dressed there because Washington Park's locker rooms were closed to them?",
    claim:
      "The lesson states, sourced to the Encyclopedia of Indianapolis, that Taylor created changing space in his Indiana Avenue business and paraded his players to the ballpark from it. It never says what the business was, because no source reached names it.",
    stakes:
      "This is the load-bearing fact of the course's whole Indianapolis argument, that exclusion generated its own infrastructure on a Black business street. Naming the trade and the address turns a good sentence into a documented one, and would let the course place it on the same block map the Indiana Avenue course already teaches. Guessing would be worse than the gap.",
    needs: [
      "The trade (saloon, pool hall, restaurant, other) and the street address",
      "The source that carries it, with a page or a directory year",
      "Whether the premises appear in an Indianapolis city directory under Taylor's name",
    ],
    where: [
      "Paul Debono, The Indianapolis ABCs (McFarland, 1997), the likeliest place this is written down",
      "Geri Strecker and Christopher Baas, Batter UP! Professional Black Baseball at Indianapolis Ballparks, in Traces of Indiana and Midwestern History 23, no. 4 (Fall 2011), pages 27 to 30",
      "Indianapolis city directories for 1915 to 1922, at the Indiana State Library",
    ],
  },
  {
    key: "nl-ballpark-rental-terms",
    course: "negro-leagues",
    lesson: "nl-avenue-and-the-ground",
    quote:
      "Taylor reached an agreement with the Indianapolis Indians to lease Washington Park, at 1200 West Washington Street, occasionally",
    title: "What did a Negro League club actually pay to rent an Indianapolis ballpark?",
    severity: "high",
    question:
      "What were the rental terms, flat fee or percentage of the gate, that the Indianapolis ABCs paid the Indianapolis Indians for Washington Park, or that the Indianapolis Clowns paid for Perry Stadium?",
    claim:
      "The course teaches that renting the ballpark was the structural weakness of the whole industry, and that the Indianapolis lease excluded the locker rooms. It gives NO dollar figure or percentage anywhere, because no source reached documents one.",
    stakes:
      "The highest-value gap in the course. A single sourced rental term would turn the central argument from a well-supported generalization into an arithmetic a student can do: gate receipts in, rent out, what is left. Without it the money section is qualitative where it could be quantitative. It also affects the write assignment, which asks students for exactly this and currently cannot show them a worked example.",
    needs: [
      "A lease, a percentage, a per-date guarantee, or a reported figure, with the year it applied",
      "The source document and where it is held",
      "Whether the terms differed between the ABCs at Washington Park and the Clowns at Perry Stadium",
    ],
    where: [
      "The National Register nomination for Bush Stadium, NRHP reference 95000703, a scanned PDF with no text layer that needs OCR: https://npgallery.nps.gov/NRHP/GetAsset/NRHP/95000703_text",
      "Library of Congress HALS IN-6, Bush Stadium and the Landscape of Black Baseball in Indianapolis, whose URLs return 403 to automated fetchers: https://www.loc.gov/pictures/item/in0534/",
      "The Indianapolis Recorder business coverage at Hoosier State Chronicles, and Strecker and Baas in Traces 23, no. 4 (Fall 2011)",
    ],
  },
  {
    key: "nl-aaron-contract-price",
    course: "negro-leagues",
    lesson: "nl-clowns",
    quote: "It is reported here as commonly reported and not as established.",
    title: "What did the Braves pay the Indianapolis Clowns for Hank Aaron's contract?",
    severity: "medium",
    question:
      "Is there a primary record, a contract, a league transaction record, or a contemporaneous 1952 news report, establishing what the Boston Braves paid the Indianapolis Clowns for Hank Aaron?",
    claim:
      "The lesson gives $10,000 as commonly reported, notes that the Encyclopedia of Indianapolis carries it, and states that no primary record for it was located and that SABR's biography of Aaron gives no figure at all.",
    stakes:
      "This is the course's single most concrete example of a contract sale, and it is the number a student will want when writing the capstone. If a primary record exists, the lesson should quote it and the hedge comes out. If none does, the hedge is the finding and belongs in the lesson permanently, since a figure repeated everywhere with no document behind it is exactly what the course teaches students to notice.",
    needs: [
      "A 1952 Boston, Milwaukee or Indianapolis newspaper report naming a figure, with date and page",
      "Or a Negro American League or Braves transaction record",
      "Confirmation of the date, since the Encyclopedia of Indianapolis dates the sale to late 1953 while SABR has Aaron signing with a Braves scout on 14 June 1952",
    ],
    where: [
      "The Boston Globe, the Boston Herald and the Indianapolis Recorder for June 1952",
      "The National Baseball Hall of Fame Giamatti Research Center, which holds contract and transaction files",
      "The Negro Leagues Baseball Museum in Kansas City",
    ],
  },
  {
    key: "nl-gibson-plaque-text",
    course: "negro-leagues",
    lesson: "nl-what-is-contested",
    quote:
      "Josh Gibson's Hall of Fame plaque estimates that he hit almost 800 home runs; Baseball Reference's documented total is 176",
    title: "The verbatim inscription on Josh Gibson's Hall of Fame plaque",
    severity: "low",
    question:
      "What is the full verbatim text of Josh Gibson's National Baseball Hall of Fame plaque, and does it attribute the home run estimate to league play, independent play, or both?",
    claim:
      "The lesson quotes the phrase 'almost 800 home runs' as the plaque's estimate. The phrase itself is attested three times independently (Baseball Reference quoting the plaque, MLB's Negro Leagues Statistical Review Committee report, and the Heinz History Center), but the surrounding sentences were never read on an authoritative page.",
    stakes:
      "Low, but it is the course's headline example of the gap between a legend and a documented record, so the quotation should be exact and its scope stated. If the plaque itself already says 'in league and independent baseball', that materially strengthens the lesson's argument that the legend and the record measure different universes, and the lesson should say so.",
    needs: [
      "The complete inscription, transcribed",
      "The induction year as the Hall states it",
      "Whether the plaque itself names the scope of the estimate",
    ],
    where: [
      "The plaque gallery at the National Baseball Hall of Fame in Cooperstown, or the Hall of Fame Explorer, whose plaque text is rendered client-side and is not in the HTML a fetcher receives",
      "https://baseballhall.org/hall-of-famers/gibson-josh",
    ],
  },
  {
    key: "nl-paige-legend-numbers",
    course: "negro-leagues",
    lesson: "nl-what-is-contested",
    quote:
      "the Satchel Paige claims of roughly 2,000 wins and 55 no-hitters, whose origin this course could not trace to a primary source and therefore does not repeat",
    title: "Where do the Satchel Paige 2,000-wins and 55-no-hitters figures come from?",
    severity: "low",
    question:
      "What is the earliest traceable source of the claim that Satchel Paige pitched about 2,500 games, won about 2,000 and threw 55 no-hitters? Is it his 1962 autobiography, a press account, or his own promotional material?",
    claim:
      "The lesson says these figures could not be traced to a primary source and does not repeat them as fact, giving MLB's documented 125 career wins instead.",
    stakes:
      "The course argues that promotional exaggeration was a business function of a league with no central statistical office, which is a claim about WHY the folklore exists. Tracing one famous number to its actual origin would turn that argument from plausible to demonstrated, and it is the single best illustration available.",
    needs: [
      "The earliest printed appearance of the figures, with publication and date",
      "Whether Paige himself is the source, and in what venue",
      "What the National Baseball Hall of Fame says, given that its own Paige page declines to give totals",
    ],
    where: [
      "Leroy Paige with David Lipman, Maybe I'll Pitch Forever (Doubleday, 1962)",
      "The Sporting News and Pittsburgh Courier archives for Paige profiles, 1930s to 1950s",
      "https://baseballhall.org/hall-of-famers/paige-satchel",
    ],
  },
  // ── Section 7, Outside the league (added 2026-08-29) ──────────────────────────────────────────
  // Five more hedges, written on purpose, from the HBCU and international research. Two of them are
  // the highest-value unread documents in the whole subject: a Black college conference's own
  // eligibility rules, and Landis's own words about why he capped barnstorming teams.
  {
    key: "nl-ciaa-eligibility-rules",
    course: "negro-leagues",
    lesson: "nl-college-and-club",
    quote:
      "Their eligibility articles between 1912 and 1950 would settle whether the missing games are a rule or a gap, and this course has not read them.",
    title: "Did the CIAA, SIAC or SWAC write and enforce an amateur eligibility rule?",
    severity: "high",
    question:
      "What did the Colored Intercollegiate Athletic Association, the Southern Intercollegiate Athletic Conference and the Southwestern Athletic Conference actually say in their constitutions and eligibility articles, between 1912 and 1950, about a student playing professional baseball?",
    claim:
      "The lesson argues that the assumed names Larry Doby and Monte Irvin used are the signature of a rule being broken, so the absence of any documented game between a Negro League club and a Black college team may be a finding rather than a gap. It labels that as a hypothesis, states that Oriard's amateur-code evidence describes the NCAA and white colleges, and says plainly that the Black conferences' own rules have not been read.",
    stakes:
      "The single highest-value missing document in this subject. If a Black college conference wrote and enforced an amateur rule, the relationship between the two games was regulated and adversarial exactly where they touched, the missing games become evidence, and the lesson can state its argument instead of hedging it. If no such rule existed, the missing games are a gap in newspaper indexing and the hedge stays permanently. Either answer improves the lesson; guessing would wreck it.",
    needs: [
      "The text of the eligibility article on professionalism, with the year it was adopted and any later amendment",
      "Any recorded enforcement: a player ruled ineligible, a protest, a forfeited game",
      "Whether the rule distinguished summer baseball for expense money from a signed professional contract, which is the distinction the pseudonyms turn on",
    ],
    where: [
      "Hampton University archives, where the CIAA was founded in 1912, and the CIAA's own records",
      "Virginia Union and Howard university archives, both charter CIAA members",
      "The SWAC's centennial materials and its founding minutes, and the SIAC's own records",
    ],
  },
  {
    key: "nl-forty-percent-college",
    course: "negro-leagues",
    lesson: "nl-college-and-club",
    quote:
      "No published methodology, roster count or study appears with it anywhere, and the comparison usually printed beside it, less than 5 percent of white major leaguers, has no source at all.",
    title: "Is there any basis for 'about 40 percent of Negro League players were college educated'?",
    severity: "medium",
    question:
      "Does Bob Kendrick, or the Diverse: Issues In Higher Education article that reports him, name any roster count, study or methodology behind the estimate that about 40 percent of Negro League players were college educated? And where does the companion figure for white major leaguers come from?",
    claim:
      "The lesson names Kendrick and the outlet, states that no methodology is published with the figure anywhere, records that the article returns HTTP 403 to automated fetching and was NOT read in full for this course, and refuses to print the number as a count. It treats it as the same class of figure as the unfootnoted $100,000 a year the course already refuses.",
    stakes:
      "It is the only quantified claim in the whole HBCU story, so every popular retelling rests on it. If a methodology exists, the lesson should report the number properly and the refusal comes out. If none does, the refusal is the finding and should be stated more sharply than it currently is. Separately, a roster-based count is genuinely doable from Seamheads or the Baseball Reference Negro Leagues register and does not appear to have been published by anyone, which would make it original work worth commissioning.",
    needs: [
      "The article read in full, with its author and publication date",
      "Kendrick's exact words and whether he or the reporter names any basis for 40 percent",
      "Any source at all for the 'less than 5 percent of white major leaguers' comparison",
    ],
    where: [
      "diverseeducation.com/article/71229/, which 301s to theeduledger.com and returns 403 to automated fetchers but should resolve in a browser",
      "The Negro Leagues Baseball Museum in Kansas City, directly",
      "Seamheads' Negro Leagues Database and the Baseball Reference Negro Leagues register, for a roster-based count nobody appears to have run",
    ],
  },
  {
    key: "nl-landis-barnstorming-motive",
    course: "negro-leagues",
    lesson: "nl-playing-the-majors",
    quote:
      "The claim that they were aimed at interracial games is an interpretation that appears in secondary writing without a citation to Landis's own words, and this course states the rule, says who reads a motive into it, and stops.",
    title: "Were the 1922 barnstorming limits aimed at interracial games?",
    severity: "medium",
    question:
      "Is there any document in Kenesaw Mountain Landis's own hand, or in the major-league code itself, showing that the three-player cap, the 31 October cutoff or the All-Star billing requirement were adopted in response to Black clubs beating major-league squads?",
    claim:
      "The lesson states the rules as documented general barnstorming rules, sourced to the Hall of Fame, and explicitly declines to assert the motive that secondary writing attaches to them. It names the documents that would settle it.",
    stakes:
      "The motive is repeated as fact almost everywhere and it changes the meaning of the whole exhibition record: a rule adopted to hide results is a different object from a rule adopted to protect the World Series brand. Asserting it without a document would be exactly the failure this course teaches students to catch, and refusing it without looking would be lazy.",
    needs: [
      "The text of the major-league code provisions as amended in 1922, in full",
      "Any Landis office correspondence, memorandum or public statement bearing on interracial exhibitions",
      "The earliest secondary source to attach the motive, and what it cites",
    ],
    where: [
      "The Chicago History Museum, which holds a Kenesaw Mountain Landis collection",
      "The National Baseball Hall of Fame Giamatti Research Center, for the code text and commissioner's office files",
      "Contemporaneous coverage in The Sporting News and the Pittsburgh Courier for 1921 and 1922",
    ],
  },
  {
    key: "nl-wells-courier-interview",
    course: "negro-leagues",
    lesson: "nl-market-was-international",
    quote:
      "The version that circulates adds a reporter, Wendell Smith, and a year, 1944. The reference this course could open names neither, so the byline and the date are not stated here and are filed as a source check.",
    title: "Which issue of the Pittsburgh Courier carries the Willie Wells interview?",
    severity: "medium",
    question:
      "What is the exact date, page and byline of the Pittsburgh Courier item in which Willie Wells said he had found freedom and democracy in Mexico, and what is the full unelided quotation?",
    claim:
      "The lesson quotes one sentence, attributes it to the Pittsburgh Courier through Eric Enders's encyclopedia entry, and states that the reference it could open names neither the reporter nor the year, so it prints neither. The circulating version credits Wendell Smith in 1944.",
    stakes:
      "It is the strongest single piece of testimony in the international lesson: a named player, in a Black-owned paper, in the period, explaining his own employment decision. A course that leans on a quotation this hard should be able to say which issue it came out of. The quotation also circulates at several different lengths, and the versions differ, so the ellipses matter.",
    needs: [
      "The issue date and page, and the reporter's byline",
      "The full quotation as printed, with nothing elided",
      "Whether the widely quoted line 'Here in Mexico, I am a man' is from the same item",
    ],
    where: [
      "The Pittsburgh Courier for 1944, on microfilm or in ProQuest's Historical Black Newspapers",
      "The Wendell Smith Papers at the National Baseball Hall of Fame",
      "Eric Enders, who wrote the encyclopedia entry the course cites",
    ],
  },
  {
    key: "nl-peterson-interracial-record",
    course: "negro-leagues",
    lesson: "nl-playing-the-majors",
    quote:
      "The page carrying the first two figures returned HTTP 403 to this course's fetching and the book itself was not read here. The review was. So .527 and nearly 55 percent are reported as attributed rather than as verified.",
    title: "Verify Peterson's interracial won-lost figures and their two denominators",
    severity: "medium",
    question:
      "In Todd Peterson's work, what exactly is the 315-282-20 record measured against and over what corpus, what is the 'nearly 55 percent' figure measured against, and how does the 325-314 record for 1885 to 1948 that Leslie Heaphy's review reports at page 94 relate to both?",
    claim:
      "The lesson prints all three numbers, says they have three different scopes, warns against the blended sentence that circulates, and labels the first two as attributed rather than verified because the page carrying them returns 403 and the book was not read for this course.",
    stakes:
      "This is the number the whole 'they were good enough' argument rests on, and the course uses it while telling students that a rate without a denominator is not a fact. Getting the scopes exactly right, from the book itself, is the difference between the lesson modelling the discipline and merely describing it. It also matters that this is a figure that FLATTERS the course's own argument, which is precisely when the discipline is hardest to hold.",
    needs: [
      "The 315-282-20 record and its stated opponent population and years, quoted from the source",
      "The 'nearly 55 percent' figure and its stated population, quoted from the source",
      "How the appendix defines an interracial game, and what produced the 2,000-plus game corpus",
    ],
    where: [
      "Todd Peterson (Ed.), The Negro Leagues Were Major Leagues: Historians Reappraise Black Baseball (McFarland, 2019), read directly",
      "baseball-reference.com/articles/negro-leagues-major-leagues-todd-peterson.shtml, which returns 403 to automated fetch but should resolve in a browser",
      "Leslie Heaphy's review at ussporthistory.com, 11 July 2020, which was read and supplies the 325-314 figure at page 94",
    ],
  },
  // ── Who Gets the Credit (Black inventors and attribution) ────────────────────────────────────
  {
    key: "blair-colored-man-notation",
    course: "who-gets-the-credit",
    lesson: "free-patentees-and-the-first-problem",
    quote:
      "He is very widely described as the only inventor whose Patent Office record identifies him as a colored man; this course repeats that description as a widely reported claim rather than as a verified one",
    title: "Is Henry Blair really the only inventor the Patent Office recorded as a colored man?",
    severity: "medium",
    question:
      "Does any Patent Office record, index, or annual report actually identify Henry Blair as 'a colored man', and is he demonstrably the only inventor so identified?",
    claim:
      "The course states the claim is very widely repeated and explicitly declines to assert it as verified, because the author could not check it against the Patent Office's own indexes.",
    stakes:
      "It is one of the most-repeated single facts about Blair. If it is a modern accretion rather than a record entry, the course should say so plainly rather than passing it along hedged. If it is real, the hedge is unnecessary and weakens a genuinely striking fact.",
    needs: [
      "A citation to the specific Patent Office document (index, annual report, or file wrapper) carrying the notation, with a page or image",
      "Whether any OTHER inventor carries a comparable racial notation, which is what the word 'only' turns on",
      "If no such record exists, the earliest source that makes the claim and what it cites",
    ],
    where: [
      "USPTO historical patent records and the annual reports of the Commissioner of Patents for 1834-1836",
      "National Archives, Records of the Patent and Trademark Office (Record Group 241)",
      "Portia P. James, The Real McCoy (Smithsonian, 1989), which surveys the nineteenth-century record",
    ],
  },
  {
    key: "edison-woods-litigation",
    course: "who-gets-the-credit",
    lesson: "documented-cases-nineteenth-century",
    quote:
      "The much more famous story, that Thomas Edison sued Woods twice and lost and then offered him a partnership, is repeated nearly everywhere and this course does not assert it",
    title: "Did Edison actually sue Granville Woods, and did he offer him a partnership?",
    severity: "medium",
    question:
      "Is there a docket, a Patent Office interference record, or a contemporary newspaper report establishing that Thomas Edison (or an Edison company) brought suit against Granville T. Woods over the induction telegraph patents, and that Woods prevailed?",
    claim:
      "The course teaches only the documented interference against Lucius Phelps and explicitly declines to assert the Edison litigation or the partnership offer.",
    stakes:
      "This is the single most repeated anecdote about Woods and it is the kind of claim a hostile reader checks first. If it is documented, the course is underselling a strong fact. If it is not, the course is right to withhold it and should say why in the lesson.",
    needs: [
      "A case name and court, or an interference number, for any Edison v. Woods proceeding",
      "A contemporary (1880s-1890s) newspaper or trade-press report of the suit or its outcome",
      "Any primary evidence for the partnership offer, as opposed to later biographical retellings",
      "What Rayvon Fouché concluded about this specific story in Black Inventors in the Age of Segregation (2003)",
    ],
    where: [
      "Rayvon Fouché, Black Inventors in the Age of Segregation (Johns Hopkins UP, 2003), chapter on Woods",
      "Patent Office interference records for the 1887 induction telegraphy patents (373,383 and 373,915)",
      "Contemporary electrical trade press: Electrical World, Electrical Review, 1887-1893",
    ],
  },
  {
    key: "cleveland-1916-rescue-counts",
    course: "who-gets-the-credit",
    lesson: "documented-cases-twentieth-century",
    quote:
      "Accounts differ on how many were rescued alive and how many bodies were recovered, and this course gives no number for that reason",
    title: "How many men did Garrett Morgan bring out of the Cleveland waterworks tunnel in 1916?",
    severity: "low",
    question:
      "What do contemporary Cleveland newspaper accounts and the city's own records say about the number of men rescued alive and the number of bodies recovered on 25 July 1916, and about whether Morgan was denied recognition others received?",
    claim:
      "The course names the date, the event, and Morgan's and his brother Frank's participation using the safety hoods, but gives no rescue figures because published accounts conflict.",
    stakes:
      "The event is the strongest human story attached to a verified patent in this course. Leaving it numberless is honest but flat, and a sourced figure would make the lesson materially better. A wrong figure would be exactly the error the course spends a section warning against.",
    needs: [
      "Cleveland newspaper coverage from late July 1916 with figures for survivors and bodies recovered",
      "Whether the city or the waterworks produced an official casualty report",
      "Documentary basis for the widely repeated claim that Morgan was passed over for a Carnegie Medal or comparable recognition",
    ],
    where: [
      "Cleveland Plain Dealer and Cleveland Press, 26-31 July 1916",
      "Cleveland Public Library, Cleveland Memory Project",
      "Carnegie Hero Fund Commission award records for 1916-1917",
      "USPTO, 'Of courage and caution' (Journeys of Innovation), which narrates the rescue",
    ],
  },
  {
    key: "gladys-west-recognition",
    course: "who-gets-the-credit",
    lesson: "credit-without-a-patent",
    quote: "Public recognition came decades after the work itself, which is the pattern this lesson exists to name.",
    title: "What exactly did Gladys West's Dahlgren work contribute to GPS, and when was she recognized?",
    severity: "low",
    question:
      "What is the precise technical description of Gladys West's contribution at the Naval Surface Warfare Center at Dahlgren, and what are the dates and forms of the recognition she eventually received?",
    claim:
      "The course says she worked on satellite geodesy, the computations behind an accurate mathematical model of the shape of the Earth, that this fed into what became GPS, and that public recognition came decades later. It gives no recognition date.",
    stakes:
      "Vagueness here is a weakness in a course whose whole argument is that specific, checkable claims beat impressive ones. A precise technical statement and a dated recognition would let the lesson make its point with the same rigor it demands elsewhere.",
    needs: [
      "A Navy or Dahlgren publication describing her role and the geodetic model she worked on",
      "The date and name of the formal recognition she received, with the awarding body",
      "Her own account, if published, of which computations she was responsible for",
    ],
    where: [
      "Naval Surface Warfare Center Dahlgren Division historical office and its published histories",
      "US Air Force Space and Missiles Pioneers Hall of Fame induction records",
      "Gladys West's memoir and interviews given after her public recognition",
    ],
  },
  {
    key: "ibn-firnas-corroboration",
    course: "the-moors",
    lesson: "where-the-claims-outrun-the-evidence",
    quote:
      "The account of a controlled flight appears in al-Maqqari, a North African writer of the late sixteenth and early seventeenth centuries, roughly seven hundred years after the event. No independent contemporary source describes it.",
    title: "Does any source independent of al-Maqqari describe the Ibn Firnas flight?",
    severity: "low",
    question:
      "Is there any ninth-, tenth-, or eleventh-century Arabic source that describes Abbas ibn Firnas attempting flight, independent of the tradition al-Maqqari transmits?",
    claim:
      "The course states that Ibn Firnas was a real and inventive figure of ninth-century Cordoba, that the flight account rests on al-Maqqari writing roughly seven centuries later, and that the contemporary verse by Mumin ibn Said is satire rather than a flight report.",
    stakes:
      "This is the course's flagship example of a claim outrunning its evidence, so it has to be right. If an independent early source exists, the lesson is teaching a correction that is itself wrong, which would be worse than teaching the myth.",
    needs: [
      "Any pre-1200 Arabic text mentioning the flight, with an edition and a folio or page reference",
      "A specialist assessment of whether Mumin ibn Said's verse can bear the weight sometimes placed on it",
      "The scholarly consensus on al-Maqqari's sources for the Ibn Firnas material",
    ],
    where: [
      "Al-Maqqari, Nafh al-Tib, and Pascual de Gayangos's translation (Oriental Translation Fund, 1840-1843)",
      "Encyclopaedia of Islam entries for Abbas ibn Firnas and for al-Maqqari",
      "Specialist literature on Andalusi science and on popular misrepresentations of medieval Muslim technology",
    ],
  },

  // ── Reporter track (plans/68) ─────────────────────────────────────────────────────────────────
  {
    key: "fpi-posting-still-live",
    course: "reporter-what-a-beat-is",
    lesson: "beat-memo",
    quote:
      "The Free Press Indiana posting that prompted this track asks for someone relentless about building relationships built on equal trust, and describes travel across the state as part of the job rather than an expense line.",
    title: "Free Press Indiana women and girls reporter posting: does the URL still resolve?",
    severity: "low",
    question:
      "Does https://www.freepressindiana.org/jobs/women-girls-reporter still resolve, and does the posting text still contain the phrase about relationships built on equal trust and the description of statewide travel? If the posting has been taken down, what is the correct citation for an archived copy?",
    claim:
      "REPORT-00 cites the posting twice as a public document, once for the equal-trust phrase and once for statewide travel as part of the job. It is cited as a public document only, with the course's disclosure making clear that Free Press Indiana has not reviewed, endorsed, or sponsored the course.",
    stakes:
      "Job postings are taken down when the role is filled, and a dead citation in a course about sourcing is exactly the failure the course teaches learners to catch. If the URL is gone, the reference should point at an archived capture with its capture date, or the phrasing should be attributed more generally.",
    needs: [
      "Whether the URL currently resolves, and the date checked",
      "The two quoted characteristics confirmed against the live or archived posting text",
      "An archive.org capture URL and capture date if the original is gone",
    ],
    where: [
      "The posting URL itself",
      "web.archive.org for a capture of the same URL",
      "Free Press Indiana's careers or jobs index, in case the posting moved rather than closed",
    ],
  },
  {
    key: "report-cyberbullying-ratio-source",
    course: "reporter-reading-a-report",
    lesson: "locating-the-table",
    quote:
      "The correct conclusion is NOT that the report is wrong. It is that the summary's ratio does not follow from the chart on page 59, so it comes from somewhere else: another source, a different measure of cyberbullying, or a different population.",
    title: "Indiana Girl Report: which table supports the three-times cyberbullying ratio?",
    severity: "medium",
    question:
      "Page 7 of the 2025 Indiana Girl Report states that girls experience bullying at twice the rate of boys and cyberbullying at three times the rate. Which table, source, year, and population produce those two ratios? The Youth Risk Behavior Survey chart on page 59 gives 25.3 percent of female against 20.7 percent of male high school students electronically bullied in 2023, which is roughly 1.2, so the summary must rest on something else.",
    claim:
      "REPORT-02 lesson 6 works this sentence end to end as its demonstration of tracing. It states plainly that the ratio does not follow from the page 59 chart, that this does NOT mean the report is wrong, and that the correct next action is to ask the publisher which table supports the sentence. Until an answer exists the course tells learners they may report the page 59 figures and may not report the three times.",
    stakes:
      "The lesson is the course's worked example and its most memorable teaching moment, so it has to be exactly right about what it does and does not assert. If the publisher identifies the supporting table, the lesson becomes stronger: it shows the method producing an answer rather than a doubt, and the answer goes into the text. If the ratio turns out to rest on a different measure or population, that is also worth naming precisely. Either way, a course that teaches tracing should not leave its own trace unfinished.",
    needs: [
      "The specific source, year, population, and measure behind the twice and three-times ratios",
      "Whether the ratios are drawn from the report's own tables or from an external source not reproduced",
      "The publisher's own wording of the answer, so it can be quoted in the lesson",
      "The date the publisher was asked and the date they replied",
    ],
    where: [
      "Indiana Youth Institute directly, which compiled the report and will know the provenance of each summary line",
      "The Girl Coalition of Indiana, co-publisher, at girlcoalitionindiana.org/report",
      "The report's own endnotes for the bullying section, pages 75 and 76, which may name a source not charted on page 59",
    ],
  },
  {
    key: "report-endnote-8-resolves",
    course: "reporter-reading-a-report",
    lesson: "chasing-the-endnote",
    quote:
      "Treat that as an exercise rather than a verdict: search the journal by volume and article number, search the title, search the authors, and see what comes back.",
    title: "Indiana Girl Report endnote: does the Cai and Liu (2024) citation resolve?",
    severity: "low",
    question:
      "Does the article cited in the report's endnotes as Cai, J., and Liu, Y. (2024), The impact of social media on mental health: A longitudinal study, Journal of Health Economics, 95, 102456 exist? Give the DOI and the article's actual title and abstract if it resolves, or a definite negative if a search of the journal's volume 95 and of the authors turns up nothing.",
    claim:
      "REPORT-02 lesson 10 uses this citation as the worked exercise in resolving a journal endnote and deliberately reaches NO verdict, telling the learner to search and report what they find, and stating both outcomes: a resolved citation gives you a paper to read yourself, an unresolved one gives you a question for the publisher and a reason not to build a paragraph on it.",
    stakes:
      "The lesson is deliberately verdict-free, which is the honest position for a course that cannot check a paywalled journal index. But an unresolvable citation inside the document this whole course teaches from would be a genuinely important teaching point, and a resolvable one would let the lesson show the happy path with a real paper. Asserting either without checking would be exactly the failure the course warns about.",
    needs: [
      "Whether an article with that title, those authors, or that article number exists in Journal of Health Economics volume 95",
      "If it exists: the DOI, the actual title, and one sentence on what it found",
      "If it does not: what a search of the journal volume, the title, and the author names returned, and the date searched",
    ],
    where: [
      "The Journal of Health Economics table of contents for volume 95 on the publisher's site",
      "Crossref, which resolves DOIs and indexes article numbers",
      "PubMed and Google Scholar for the title and the author names",
    ],
  },
  {
    key: "report-in-shield-scope",
    course: "reporter-media-law",
    lesson: "shield-and-privilege",
    quote:
      "Read Indiana Code 34-46-4-1 for the covered list before you rely on your own place in it, and a narrowed source check is filed asking for exactly that verbatim text.",
    title: "Indiana shield law: the verbatim text of the covered-persons list, 34-46-4-1",
    severity: "high",
    question:
      "What is the exact current text of Ind. Code 34-46-4-1, listing who the shield covers? Quote it in full, and give the URL on the Indiana General Assembly's own site plus the date you read it.",
    claim:
      "The lesson now teaches, on the Reporters Committee's authority, that the privilege is absolute as to state matters, protects the SOURCE'S IDENTITY only rather than notes or unpublished material, and defines its covered class by EMPLOYMENT with newspapers, periodicals of regular circulation, press associations, wire services, or licensed broadcasters, as owner, editor or reporter. It warns that a freelancer, newsletter writer, podcaster or civic Documenter may fall outside that list.",
    stakes:
      "This is the check where being wrong hurts a third party rather than the course. A reporter who believes the statute covers them may promise a source confidentiality they cannot deliver, and the person exposed is the source, not the journalist. The lesson currently rests on an expert secondary reading because iga.in.gov serves an application rather than a document to an automated reader. The verbatim list would let the course state the covered categories as law rather than as summary.",
    needs: [
      "The full current text of Ind. Code 34-46-4-1, quoted",
      "Whether the list has been amended since 1941, and if so when and how",
      "Any Indiana appellate decision applying it to a freelancer, blogger, or non-employee",
    ],
    where: [
      "iga.in.gov, opened in a browser rather than fetched, since the site serves an app",
      "The Indiana Supreme Court's opinion search for cases citing 34-46-4",
      "law.justia.com carries the section but returns 403 to automated requests; it opens fine in a browser",
    ],
  },
  {
    key: "report-in-recording",
    course: "reporter-media-law",
    lesson: "recording-consent",
    quote:
      "Indiana is commonly described as a one-party consent state for the recording of conversations, and this course does not print a statutory section or the operative language for that proposition because this pass could not read the current Indiana text against a primary source.",
    title: "Indiana recording: which statute, and what does it actually say?",
    severity: "medium",
    question:
      "Which Indiana statutory provision governs the recording of conversations, is Indiana correctly described as a one-party consent state, and what is the operative language? Give the code section and quote the sentence that establishes the consent rule.",
    claim:
      "REPORT-05 says Indiana is commonly described as a one-party consent state and prints no section number or operative language, sending the reader to the current statute and to the RCFP recording guide before relying on any characterization including the course's own.",
    stakes:
      "Recording is the legal question a reporter meets most often, and in all-party states the penalties can be criminal. Printing a wrong section number would send a reporter to the wrong text at the moment they most need the right one. Once verified, the lesson can name the provision and stop hedging.",
    needs: [
      "The Indiana code section governing interception or recording of conversations",
      "The operative sentence establishing whose consent is required",
      "Whether the rule differs for in-person conversation and electronic communication",
      "The URL on iga.in.gov and the date read",
    ],
    where: [
      "iga.in.gov, searching the criminal code for interception of communications",
      "The Reporters Committee's Reporter's Recording Guide entry for Indiana",
      "The Indiana attorney general's published guidance, if any exists on the point",
    ],
  },
  {
    key: "report-sojo-evidence",
    course: "reporter-solutions-journalism",
    lesson: "why-a-method",
    quote:
      "The course does NOT print audience-effect figures or efficacy statistics: the research exists and is growing, this pass could not read the underlying studies against their primaries.",
    title: "Solutions journalism: what does the audience research actually show?",
    severity: "low",
    question:
      "What does the published research on solutions journalism actually establish about audience effects, and with what effect sizes? Name two or three studies that can be read in full, give what each measured, in what population, and what it found, including any null or negative results.",
    claim:
      "REPORT-06 teaches solutions journalism as a method defined by four qualities and makes NO empirical claim about how audiences respond to it. The course deliberately prints no engagement figures, efficacy statistics, or effect sizes anywhere.",
    stakes:
      "Two-sided. If good evidence exists, a course that teaches rigor about other people's evidence should be able to state its own subject's evidence with the same discipline, and the omission currently makes the form look less established than it may be. If the evidence is thinner than advocates suggest, that is worth saying plainly in a course whose whole argument is that a claim gets labeled by the strength of what supports it. Either way the current silence is honest and incomplete.",
    needs: [
      "Two or three studies readable in full, with what each measured and in what population",
      "The effect sizes, and whether the outcome was self-reported or behavioral",
      "Any null or negative findings, which matter as much as the positive ones here",
      "Whether the research was funded by an organization that advocates for the form, and whether that was disclosed",
    ],
    where: [
      "The Solutions Journalism Network's own research page, read alongside who funded each item",
      "Journalism studies journals, searching for solutions journalism and constructive journalism",
      "Any systematic review or meta-analysis, which would settle the question faster than individual trials",
    ],
  },
  // ── Who Gets Named (CREDIT-00) ────────────────────────────────────────────────────────────────
  // Six hedges the course states in its own prose. Each one is a sentence in a lesson that says
  // out loud that this could not be settled, which is only useful once it is filed here.
  {
    key: "credit00-murray-robinson-wager",
    course: "who-gets-named",
    lesson: "pauli-murray-the-argument-before-the-case",
    quote:
      "It traces to Murray's own recollection rather than to a contemporaneous record, so it is flagged here and filed as an open question rather than printed as fact.",
    title: "Pauli Murray: is the ten dollar wager with Spottswood Robinson documented anywhere?",
    severity: "medium",
    question:
      "Is there a contemporaneous record (a letter, a class record, a newspaper item, a paper in the Murray or Robinson papers) of Murray betting Spottswood Robinson ten dollars in 1944 that Plessy would fall within twenty five years, and of Robinson paying it in the 1960s? Or does every published account trace back to Murray's own later memoir?",
    claim:
      "The lesson names the story as widely repeated, says it traces to Murray's own recollection rather than a contemporaneous record, and explicitly declines to assert it.",
    stakes:
      "It is the single most repeated anecdote about Murray and it is the kind of detail a reader will quote in an argument. If a primary record exists the lesson should print it, because it dates the moment the argument was taken seriously. If none exists, the current refusal is right and should stay, and the course has a worked example of a beloved story that cannot be sourced.",
    needs: [
      "Either a citation to a contemporaneous document, with the archive, collection and folder",
      "Or a statement from an archivist that the story appears only in Murray's own retrospective account",
      "The page of Murray's autobiography where Murray tells it, so the lesson can attribute it precisely",
    ],
    where: [
      "The Pauli Murray Papers at the Schlesinger Library, Radcliffe Institute, Harvard",
      "The Spottswood W. Robinson III papers, and the Howard University School of Law archives",
      "The Pauli Murray Center for History and Social Justice, which answers research questions",
    ],
  },
  {
    key: "credit00-traag-version-of-record",
    course: "who-gets-named",
    lesson: "the-footnote-inside-the-paper",
    quote:
      "That study is an eLife reviewed preprint rather than a version of record, so treat the citation as provisional.",
    title: "Matthew effect replication: has the Traag et al. study reached a version of record?",
    severity: "medium",
    question:
      "Has 'The Matthew effect and early-career setbacks in research funding: a replication study' (Traag, Brady, Vincent-Lamarre, Bidel, Lopes-Bento, Andersen and Bloch, eLife Reviewed Preprint 109042, posted 13 October 2025) since been published as a version of record, and did any of its numbers change? Specifically the 109,624 applications, the 14 programs and the six funders.",
    claim:
      "The lesson reports that the Matthew effect replicated and generalized while the early-career-setback claim did not, cites the reviewed preprint, and tells the learner to treat the citation as provisional.",
    stakes:
      "This is the only measured replication in the course and the lesson leans on it to teach that reporting the finding which did NOT survive is part of honest citation. If the numbers moved between preprint and final version, a course that teaches source discipline would be quoting stale figures, which is the exact failure it warns against.",
    needs: [
      "The final citation if one exists: journal, volume, pages, DOI and year",
      "Confirmation of the three figures (109,624 applications, 14 programs, six funders) in that version",
      "Whether the conclusion about the early-career-setback claim is unchanged",
    ],
    where: [
      "eLife's page for Reviewed Preprint 109042, which links any later version",
      "The DOI 10.7554/eLife.109042 and its version history",
      "The corresponding author's institutional page at Leiden CWTS",
    ],
  },
  {
    key: "credit00-hela-pseudonym-origin",
    course: "who-gets-named",
    lesson: "henrietta-lacks-and-the-substituted-name",
    quote:
      "Who introduced the false name, and why, is not settled by the record, and this course does not guess.",
    title: "HeLa: who first published the name Helen Lane, and in what document?",
    severity: "medium",
    question:
      "What is the earliest published appearance of 'Helen Lane' or 'Helen Larson' as the source of the HeLa cell line, and is there any documentary evidence of who introduced the substitution and why?",
    claim:
      "The lesson states that for roughly two decades the line was attributed in print to a person who did not exist, that the substitution ended with a 1973 query in Nature, and that who introduced the false name is not settled by the record.",
    stakes:
      "The substituted name is the load-bearing example in the archive-silences section, where the course argues that a plausible wrong answer is worse than a blank space because it stops the question being asked. Naming the earliest source would turn a general claim into a dated one. Guessing at a motive would be exactly the assertion the course forbids.",
    needs: [
      "The earliest citation using the false name, with journal, year and page",
      "The 1973 Nature item that recovered the real name, with its full citation",
      "Any archival evidence about who introduced the pseudonym, or a scholar's statement that none exists",
    ],
    where: [
      "The Johns Hopkins Medicine Henrietta Lacks pages and the university's own archives",
      "Nature's 1973 volumes, searching for the query that obtained her name",
      "Hannah Landecker's and Rebecca Skloot's published notes, which cite the early literature directly",
    ],
  },
  {
    key: "credit00-poro-college-year",
    course: "who-gets-named",
    lesson: "the-eminent-name-absorbs-the-story",
    quote:
      "Sources differ on whether the Poro complex opened in 1917 or 1918. This course follows the State Historical Society of Missouri and says 1918.",
    title: "Poro College: did the St. Louis complex open in 1917 or 1918?",
    severity: "low",
    question:
      "What year did Annie Turnbo Malone's Poro College complex at 4300 St. Ferdinand Avenue actually open, according to a contemporaneous source such as a city directory, a building permit, a deed, or the St. Louis Argus?",
    claim:
      "The lesson says 1918, following the State Historical Society of Missouri, and tells the reader other sources say 1917.",
    stakes:
      "Low on its own, and the lesson already reports the disagreement rather than hiding it. It matters because this course uses the Malone record as its example of documentation asymmetry, so a settled date from a contemporaneous St. Louis source would strengthen exactly the claim the lesson makes about which records survive.",
    needs: [
      "A contemporaneous document naming the opening year, with its archive and date",
      "Whether 1917 refers to the school's founding and 1918 to the building, which would explain both",
      "The citation for whichever source settles it",
    ],
    where: [
      "The Missouri Historical Society and the St. Louis city building permit records",
      "The St. Louis Argus, searched around 1917 and 1918",
      "The City of St. Louis page on the site of Poro College, and the National Register nomination if one exists",
    ],
  },
  {
    key: "credit00-colvin-death-date",
    course: "who-gets-named",
    lesson: "claudette-colvin-and-the-choice-not-to-name",
    quote:
      "She died in January 2026, aged eighty six; sources give slightly different days for her death and this course does not pick one.",
    title: "Claudette Colvin: what is the correct date of death?",
    severity: "medium",
    question:
      "On what date did Claudette Colvin die? Published reports in January 2026 give 13 and 14 January, and at least one account pairs 14 January with a day of the week that does not match it.",
    claim:
      "The lesson gives the month and year, states her age as eighty six, and says outright that sources disagree on the day.",
    stakes:
      "A date of death is exactly the kind of fact a reader assumes a cited course has right, and Colvin is one of the six people the course is built on. It is also a live example of the course's own rule: report the disagreement rather than picking. Once a family statement or an obituary of record settles it, the lesson should carry the day.",
    needs: [
      "The date given by the family, a funeral home notice, or an obituary of record",
      "The place of death, if the family has stated one",
      "The citation, so the lesson can attribute the date rather than assert it",
    ],
    where: [
      "A family statement, or the funeral home's published notice",
      "The New York Times or Associated Press obituary, which usually names its source for the date",
      "The Equal Justice Initiative and the National Museum of African American History and Culture, both of which published remembrances",
    ],
  },
  {
    key: "credit00-states-laws-imprint-year",
    course: "who-gets-named",
    lesson: "pauli-murray-the-argument-before-the-case",
    quote:
      "The imprint reads 1950 and library catalogs record it as 1950, corrected to 1951, and the Pauli Murray Center dates it 1951.",
    title: "States' Laws on Race and Color: 1950 or 1951?",
    severity: "low",
    question:
      "Was Pauli Murray's States' Laws on Race and Color actually issued in 1950 or 1951? Library catalogs record the imprint as 1950 with a bracketed correction to 1951, and secondary accounts use both years and occasionally 1948.",
    claim:
      "The lesson reports the disagreement rather than choosing, naming the imprint, the catalog correction, and the Pauli Murray Center's date.",
    stakes:
      "Small in itself, and the lesson is already honest about it. Worth closing because the book is the single most cited thing Murray produced and the course quotes Thurgood Marshall's description of it, so a reader chasing the citation should land on the right year the first time.",
    needs: [
      "The actual issue date, from the publisher's records or a contemporaneous review",
      "Why library catalogs bracket the correction, which usually indicates a known imprint error",
      "Whether any 1948 edition or precursor compilation exists, which would explain the third date",
    ],
    where: [
      "The HathiTrust and Library of Congress catalog records, including their notes fields",
      "The American Political Science Review's contemporaneous notice of the book, which carries its own date",
      "The archives of the Woman's Division of Christian Service of the Methodist Church, the publisher",
    ],
  },

  // ── The Editor of The Crisis (DIDWORK-S2) ─────────────────────────────────────────────────────
  {
    key: "jrf-birthplace",
    course: "the-editor-of-the-crisis",
    lesson: "jrf-the-life-in-one-primary-note",
    quote:
      "The note says she was born in Philadelphia. Modern reference works generally place her birth in Camden County, New Jersey, in April 1882, with the family moving to Philadelphia. Both cannot be right, and this course prints neither as settled.",
    title: "Fauset: was she born in Philadelphia or in Camden County, New Jersey?",
    severity: "medium",
    question:
      "Where was Jessie Redmon Fauset born? Her employer's own staff note in The Crisis for November 1919 says Philadelphia. Most modern reference works say Camden County, New Jersey (variously Fredericksville, Snow Hill, or what is now Lawnside). What does a primary vital or census record show?",
    claim:
      "The course quotes the 1919 note verbatim, states the disagreement, prints neither version as settled, and uses the case to teach that proximity is not the same as being in a position to know.",
    stakes:
      "Low stakes for the argument and high stakes for the course's credibility, because this is the lesson in which the course tells a learner how to handle exactly this kind of disagreement. If a birth record settles it, the lesson gets a real answer instead of a worked example, and the example can be replaced with one that is genuinely open.",
    needs: [
      "A primary record: a birth or baptismal record, or the earliest census entry naming her, with the enumeration district",
      "What that record gives as the place of birth, quoted",
      "If New Jersey, which municipality, and what it is called today",
      "Whether Carolyn Wedin Sylvander's biography cites a primary record for its date and place, and which one",
    ],
    where: [
      "New Jersey State Archives vital records, and Camden County municipal records for Lawnside",
      "The 1900 United States federal census, which should name her in the household",
      "Carolyn Wedin Sylvander, Jessie Redmon Fauset, Black American Writer (1981), and its notes",
    ],
  },
  {
    key: "jrf-acquisitions-beyond-hughes",
    course: "the-editor-of-the-crisis",
    lesson: "jrf-acquired-versus-published",
    quote:
      "Countee Cullen, Jean Toomer, Anne Spencer, Georgia Douglas Johnson, Arna Bontemps and Gwendolyn Bennett all appear in The Crisis while she ran the literary pages ... Whether she solicited a given poem, or Du Bois handed it to her, or it arrived unsolicited and she said yes, is a question the contents page cannot answer.",
    title: "Fauset: is there correspondence documenting any acquisition besides Hughes?",
    severity: "high",
    question:
      "Does surviving correspondence document Fauset soliciting, accepting or editing a specific piece by any writer other than Langston Hughes? Name the writer, the piece, the date, and the repository and collection where the letter sits.",
    claim:
      "The course teaches Hughes as the one fully documented acquisition, on his own account in The Big Sea, and states plainly that for every other name the record shows appearance during her tenure and not who chose the piece.",
    stakes:
      "This is the course's central evidentiary claim and the thing that separates it from the secondary literature, which conflates appeared with acquired. If letters exist in the Du Bois papers at Massachusetts or in the Cullen, Toomer or Bennett collections, the course is understating her documented record and should be corrected. If they do not, the refusal is the finding and should be stated even more firmly.",
    needs: [
      "For each documented case: the writer, the specific piece, the date, and the archive, collection and box or folder",
      "A quoted sentence from the letter showing the editorial act, not merely that the two corresponded",
      "Whether any marked typescript survives showing her revisions to a submitted piece",
      "Whether the W. E. B. Du Bois Papers include Crisis editorial correspondence distinguishing her decisions from his",
    ],
    where: [
      "W. E. B. Du Bois Papers, Special Collections and University Archives, University of Massachusetts Amherst (digitised finding aid and images)",
      "Countee Cullen Papers, Amistad Research Center; Jean Toomer Papers, Beinecke Library, Yale",
      "Gwendolyn Bennett Papers, Schomburg Center; Langston Hughes Papers, Beinecke Library",
    ],
  },
  {
    key: "jrf-civic-club-what-she-said",
    course: "the-editor-of-the-crisis",
    lesson: "jrf-the-civic-club-dinner",
    quote:
      "This is a fact about the notice and not proof that she was silent, and the distinction matters: a news column lists who was notable, not who spoke.",
    title: "Civic Club dinner, March 1924: did Fauset speak, and what is the source?",
    severity: "medium",
    question:
      "Did Jessie Fauset address the Civic Club dinner held in her honour on or about 21 March 1924, and what is the primary evidence? Contemporary press accounts, the Writers' Guild's own record, or a participant's letter would all count. Separately: is the widely repeated account that Alain Locke as master of ceremonies marginalised her at her own event traceable to a specific document?",
    claim:
      "The course quotes the May 1924 Crisis notice, observes that it names six male speakers and does not list the honoree among them, and explicitly refuses the stronger claim that she was silenced. It attributes no motive to Locke.",
    stakes:
      "The dinner is the course's central illustration and the point where an author is most tempted to overreach. David Levering Lewis's When Harlem Was in Vogue is the standard account and is often cited for a 1933 Fauset letter to Locke about the evening. This pass could not read that letter, so the course teaches only what the contemporaneous notice supports. If the letter is real and quotable, the lesson can say considerably more and should. If it is not, the refusal is correct and worth stating.",
    needs: [
      "Any contemporaneous account naming who spoke, from Opportunity, the New York Age, the Amsterdam News or the Survey",
      "The 1933 Fauset letter to Locke, if it exists: its repository, its date, and the passage about the dinner quoted verbatim",
      "The page reference in Lewis (1981) for the account of Locke's handling of the evening, and the source Lewis himself cites",
      "Whether the Writers' Guild left any minutes or programme for the evening",
    ],
    where: [
      "Alain Locke Papers, Moorland-Spingarn Research Center, Howard University",
      "Opportunity for April and May 1924, and the Black weekly press for late March 1924",
      "David Levering Lewis, When Harlem Was in Vogue (1981), and its notes",
    ],
  },
  {
    key: "jrf-du-bois-editorial-control",
    course: "the-editor-of-the-crisis",
    lesson: "jrf-whose-magazine-was-it",
    quote:
      "Nobody has produced a document showing Du Bois overruling her on a specific poem, and nobody has produced one showing her overruling him.",
    title: "The Crisis: is there a document showing who decided a specific literary acceptance?",
    severity: "medium",
    question:
      "Does any surviving document show W. E. B. Du Bois and Jessie Fauset disagreeing about, or separately deciding, a specific submission to The Crisis between October 1919 and April 1926? An office memorandum, a marked submission, or a letter to a contributor would settle it in either direction.",
    claim:
      "The course states that her authority over the literary pages is documented in title, in a legal filing and in her employer's own farewell, and that it was exercised inside an editorial line another person set. It calls the question serious, documented on both sides, and unresolved.",
    stakes:
      "This is the strongest objection to the course's thesis and the course answers it by holding it open. Holding a question open is only honest if nobody has in fact closed it. If a document exists in either direction and the course did not find it, the lesson is presenting a settled matter as contested, which is the mirror of the error the catalogue's rules exist to prevent.",
    needs: [
      "Any document naming a specific piece and who decided it, with repository and collection",
      "Whether Crisis office files for 1919 to 1926 survive anywhere as a body, or only as scattered correspondence",
      "Whether any scholar has published on the division of editorial labour at The Crisis in these years, and what they concluded",
      "Fauset's own account, if she left one, of how much latitude the post carried",
    ],
    where: [
      "W. E. B. Du Bois Papers, University of Massachusetts Amherst, correspondence 1919-1926",
      "NAACP Records, Manuscript Division, Library of Congress, for the magazine's administrative files",
      "Carolyn Wedin Sylvander (1981) and Cheryl A. Wall, Women of the Harlem Renaissance (1995)",
    ],
  },
  {
    key: "jrf-chinaberry-tree-foreword",
    course: "the-editor-of-the-crisis",
    lesson: "jrf-four-novels",
    quote:
      "Section 13 lists the four novels and their publishers and says nothing about the circumstances in which any of them was accepted.",
    title: "The Chinaberry Tree: is the story about the publisher's reader's report documented?",
    severity: "low",
    question:
      "Is there a documented source for the widely repeated account that Frederick A. Stokes required a foreword by the white novelist Zona Gale for The Chinaberry Tree (1931), on the ground that a reader had objected that no such Black people existed? The report is often quoted as saying there \"ain't no such colored people as these\". What is the primary source, and is the quotation accurate?",
    claim:
      "The course says nothing about it. Section 13 gives the four novels, their publishers and their dates, and Section 14 documents the reception problem from a 1925 Chicago Tribune objection reported in The Crisis rather than from this anecdote.",
    stakes:
      "If documented, this is the single sharpest illustration in the whole subject of the mechanism Fauset herself described in the 1926 Crisis symposium, that publishers refused the variant on commercial grounds. It would strengthen Section 14 considerably. It is omitted for now precisely because the quotation circulates without a primary attribution, and a fabricated-sounding quotation in a course about quotation drift would be self-refuting.",
    needs: [
      "The primary source for the reader's report or the publisher's requirement, quoted, with a repository",
      "Whether Zona Gale's foreword itself, in the 1931 first edition, says anything about why it was written",
      "Whether Fauset described the episode in correspondence or in an interview, and where",
      "Confirmation of the exact wording, since the version in circulation may be a paraphrase",
    ],
    where: [
      "The 1931 Frederick A. Stokes first edition of The Chinaberry Tree, read for Gale's foreword",
      "Zona Gale Papers, Wisconsin Historical Society",
      "Carolyn Wedin Sylvander (1981), and Deborah E. McDowell's introductions to the Beacon Press reissues",
    ],
  },
  // ── Shirley Graham Wrote the Opera First (DIDWORK-S3) ─────────────────────────────────────────
  // Nine hedges, all of them written into lessons rather than left implicit. The pattern worth
  // noticing: this subject shaved years off her own age in print, so the ordinary trick of
  // preferring the earliest source fails on her, and several of these can only be closed by a
  // registry, a transcript or a page image.
  {
    key: "sg-tomtom-broadcast",
    course: "shirley-graham",
    lesson: "sg-tom-tom",
    quote:
      "The NBC attribution traces to weak sources, and her radio play Track Thirteen really was an NBC broadcast in 1940, which is an easy thing to slide backwards onto the opera. Unverified, so not taught.",
    title: "Tom-Tom: was the 1932 premiere broadcast on radio at all?",
    severity: "medium",
    question:
      "Was any performance of Shirley Graham's opera Tom-Tom, at Cleveland Municipal Stadium on 30 June 1932 or later that season, carried on radio? If so, by which station or network, on what date, and what is the evidence?",
    claim:
      "Lesson 3 states that TIME's contemporaneous account mentions no broadcast, names the NBC claim as unverified, and suggests it migrated from her 1940 radio play Track Thirteen, which genuinely was an NBC broadcast. The course teaches the absence of evidence rather than a denial.",
    stakes:
      "The broadcast is one of the four premiere details the course publicly refuses to print, and lesson 3 is the course's worked example of how a retelling accretes false detail. If a broadcast IS documented, the course is teaching a real fact as a myth, which is the worst possible failure for a lesson about verification. If it is not, the refusal should stay and the reasoning is confirmed.",
    needs: [
      "A contemporaneous listing, log or newspaper radio page for late June or early July 1932 in Cleveland",
      "The station's call letters, and whether any relay was local, regional or national",
      "If nothing exists, a statement of where you looked, so the negative is recorded rather than reasserted",
    ],
    where: [
      "Cleveland Plain Dealer radio listings for 29 June to 10 July 1932, on microfilm or in a newspaper database",
      "The NBC History Files at the Library of Congress and the NBC collection at the Wisconsin Historical Society",
      "The Encyclopedia of Cleveland History's Stadium Opera entry and whatever it cites",
    ],
  },
  {
    key: "sg-tomtom-second-night",
    course: "shirley-graham",
    lesson: "sg-tom-tom",
    quote:
      "The combined figure above twenty five thousand is repeated everywhere, but the contemporary account puts about fifteen thousand at the premiere itself. The split is not settled and this course does not print it.",
    title: "Tom-Tom: how many performances, on what dates, and what were the attendances?",
    severity: "medium",
    question:
      "How many performances did Tom-Tom receive in the 1932 Stadium Opera season, on which dates, and what attendance figure is recorded for each? The modern account gives 10,000 at the first and 15,000 at the second; TIME on 11 July 1932 puts nearly 15,000 at the performance it calls the first.",
    claim:
      "Lesson 3 gives 30 June 1932 as the premiere and TIME's roughly fifteen thousand for that night, states that the modern 10,000 / 15,000 split is incompatible with the contemporaneous report, and prints neither the split nor a combined total.",
    stakes:
      "The 'more than 25,000' figure is the single most repeated fact about this opera and appears on the Harvard Gazette, Oberlin's own site and the Schlesinger Library's pages. If it is right, the course is being over cautious about a well documented number. If the dates or the split are wrong, a great many institutional pages are propagating one error, which is worth saying in print.",
    needs: [
      "The exact dates of every 1932 Tom-Tom performance",
      "A contemporaneous attendance figure for each, with the source that reported it",
      "Whether the 10,000 figure has any 1932 source at all, or first appears in a later retelling",
    ],
    where: [
      "Cleveland Plain Dealer and Cleveland Press for 29 June to 11 July 1932",
      "The Cleveland Public Library's Cleveland Digital Public Library and its Stadium Opera holdings",
      "Sarah Schmalenberger's 2006 Black Music Research Journal article, which worked the score and the season",
    ],
  },
  {
    key: "sg-sorbonne-record",
    course: "shirley-graham",
    lesson: "sg-training",
    quote:
      "Hold that one loosely: no account names a registration record, and the caution is earned by the next lesson.",
    title: "Did Shirley Graham actually enrol at the Sorbonne?",
    severity: "medium",
    question:
      "Is there any registration record, transcript, certificate or contemporaneous document placing Shirley Graham as a student at the Sorbonne, or at any named Paris institution, between December 1926 and about 1930? Or does the claim rest entirely on her own later accounts?",
    claim:
      "Lesson 2 says she was in France from December 1926 and reported studying music composition there, usually given as the Sorbonne, and states that no account names a registration record, so it is a repeated self report rather than a documented fact.",
    stakes:
      "Every biography of her carries the Sorbonne. If it is documented, the course is casting doubt on a real credential, which is unfair to a woman whose credentials were already discounted in her lifetime. If it is not, the hedge is correct and worth keeping, because this is a subject who demonstrably adjusted her own record and the course says so elsewhere.",
    needs: [
      "A registration or inscription record naming her, with the year and the faculty",
      "Or an explicit statement from a scholar who looked and found nothing",
      "The name of the actual institution, since the Sorbonne of that period covered several distinct faculties and music was not obviously among them",
    ],
    where: [
      "Her papers at the Schlesinger Library, Radcliffe Institute (MC 476)",
      "Gerald Horne's Race Woman and its notes on the Paris years",
      "Archives nationales and the Sorbonne's own registers for the later 1920s",
    ],
  },
  {
    key: "sg-messner-award-year",
    course: "shirley-graham",
    lesson: "sg-the-prize",
    quote:
      "Neither the book nor Horne dates the judging, and it was a manuscript competition, so a 1946 decision with a 1947 publication is plausible and unproven.",
    title: "What year was the Julian Messner Award announced?",
    severity: "low",
    question:
      "In what year was the Julian Messner Award for the best book combating intolerance in America announced to Shirley Graham for the manuscript published in 1947 as There Was Once a Slave?",
    claim:
      "Lesson 10 states the award, its value, its judges and the size of the competition from the book's own copyright page, and deliberately prints NO year, saying that the honest form is 'won the Julian Messner Award; published 1947'.",
    stakes:
      "Low, but the whole lesson is about getting prize records right, so a course that then leaves a date blank should be able to say either what the date is or that it was looked for and not found. Some sources give 1946, which would be consistent with a manuscript competition, and no source seen so far cites anything for it.",
    needs: [
      "A trade press announcement with a date, most likely in Publishers Weekly",
      "Or the terms of the competition, which would say whether the award was announced on submission or on publication",
    ],
    where: [
      "Publishers Weekly for 1946 and 1947",
      "New York Times book pages for the announcement of the award",
      "The Julian Messner imprint records, if any survive with its corporate successors",
    ],
  },
  {
    key: "sg-marriage-date",
    course: "shirley-graham",
    lesson: "sg-february-1951",
    quote:
      "First, a variant wedding date of 14 February circulates. It comes from a reference entry that also gives her birth year as 1907 and her age at death as 69, both demonstrably wrong, so this course prints 27 February and files a source check.",
    title: "Was the Du Bois wedding on 14 or 27 February 1951?",
    severity: "medium",
    question:
      "On what date did W. E. B. Du Bois and Shirley Graham marry? A New York City or New York State marriage record would settle it outright.",
    claim:
      "Lesson 15 prints 27 February 1951, sourced to an item recording the ceremony held with the W. E. B. Du Bois papers at UMass Amherst, and rejects the 14 February variant because its source also gets her birth year and her age at death wrong.",
    stakes:
      "The whole lesson is built on a dated sequence: indictment 9 February, arraignment 16 February, wedding, trial 18 November. The argument that they did NOT marry on the eve of the trial survives either date, but a course that teaches chronological precision cannot itself be loose about the one date at its centre.",
    needs: [
      "A New York marriage licence or certificate number and date",
      "Or a contemporaneous newspaper notice of the ceremony",
      "Confirmation of what the UMass item actually is: a certificate, a photograph, a letter, or a later note",
    ],
    where: [
      "New York City Municipal Archives marriage index for 1951",
      "The W. E. B. Du Bois papers (MS 312) at UMass Amherst, and the Credo digital repository",
      "New York Times and New York Amsterdam News for late February and early March 1951",
    ],
  },
  {
    key: "sg-ghana-citizenship-date",
    course: "shirley-graham",
    lesson: "sg-citizenship-coup",
    quote:
      "So this course prints no settled date and files a source check against the FBI file and the State Department record.",
    title: "When did Shirley Graham Du Bois change her citizenship, and by which act?",
    severity: "high",
    question:
      "When did Shirley Graham Du Bois acquire Ghanaian citizenship, and separately, when and by what act did she cease to be a United States citizen? One account gives 1961; another cites a Justice Department memorandum of 10 October 1963 recording that the American embassy at Accra reported on 4 October 1963 that she had renounced under section 349(a)(6) of the Immigration and Nationality Act of 1952.",
    claim:
      "Lesson 22 prints NO date. It gives both candidate accounts, notes that the 1961 version coincides with her arrival year and that the more specific 1963 version comes from a journalist writing in an article that misstates her death year, and files this check instead of choosing.",
    stakes:
      "The highest severity in this course. 'In 1961 both renounced US citizenship and became Ghanaian citizens' is one of the most repeated sentences about this couple and the course calls it wrong in both halves. If the 1963 renunciation is confirmed, the course should print it and say so plainly. If 1961 turns out to be right after all, a whole lesson's argument about contaminating dates needs rewriting.",
    needs: [
      "A Certificate of Loss of Nationality, or the State Department record of one, with a date",
      "The Ghanaian certificate of citizenship or the Ministry of the Interior letter for HER, as exists for him dated 16 February 1963",
      "The Justice Department memorandum of 10 October 1963 itself, rather than a report of it",
    ],
    where: [
      "Her FBI file, obtainable under the Freedom of Information Act",
      "State Department records at the National Archives, Record Group 59, on loss of nationality",
      "Her papers at the Schlesinger Library and the Du Bois papers at UMass Amherst",
    ],
  },
  {
    key: "sg-ghana-local-content",
    course: "shirley-graham",
    lesson: "sg-ghana-television",
    quote:
      "The share of locally made programming is reported at eighty five per cent in one place and seventy five per cent in another. Both figures circulate, they cannot both be right, and a source check is filed rather than a number chosen.",
    title: "What share of Ghana Television's output was locally produced under Graham Du Bois?",
    severity: "low",
    question:
      "What proportion of Ghana Television's programming was produced in Ghana during Shirley Graham Du Bois's directorship, from 31 July 1965 to February 1966, and what is the primary source for the figure?",
    claim:
      "Lesson 21 states that programming was produced in Ghana to an unusually high degree and prints no percentage, naming the conflict between the 85 and 75 per cent figures in circulation.",
    stakes:
      "Low on its own, but the figure is the main quantitative claim about what she actually achieved in the job, and it is the sort of number that gets repeated forever once a course prints it. A wrong one would also undercut a lesson that spends its length correcting other people's numbers.",
    needs: [
      "A primary figure from the broadcaster's own reporting or from a Ghanaian government publication of 1965 or 1966",
      "The definition being measured: hours, titles, or schedule share, since the three give different answers",
    ],
    where: [
      "Ghana Broadcasting Corporation archives in Accra",
      "Jennifer Blaylock's work on Ghanaian television and its citations",
      "Contemporary Ghanaian press for 1965 and 1966",
    ],
  },
  {
    key: "sg-mccarthy-subpoena",
    course: "shirley-graham",
    lesson: "sg-the-file",
    quote:
      "Whether she appeared before McCarthy's subcommittee on 15 July 1953 is unsettled, and a source check is filed against the Senate's own executive session transcripts, unsealed in 2003.",
    title: "Did Shirley Graham appear before McCarthy's subcommittee on 15 July 1953?",
    severity: "medium",
    question:
      "Did Shirley Graham appear before the Senate Permanent Subcommittee on Investigations on 15 July 1953, as the subpoena of 25 June 1953 required? If she did, what did she say, and did she invoke any privilege?",
    claim:
      "Lesson 17 documents the subpoena and its date, corrects the widespread claim that she testified before HUAC by pointing out that McCarthy chaired a SENATE body, notes she was named on a 1948 HUAC list of fronts, and says no evidence has been located that she testified before HUAC at all.",
    stakes:
      "The HUAC claim is repeated almost everywhere, and this lesson's correction of it is only worth making if the course can also say what DID happen. Leaving the appearance unresolved is honest and incomplete, and the transcripts to settle it were unsealed in 2003, so this is closeable by anyone willing to read them.",
    needs: [
      "The executive session transcript for 15 July 1953, or confirmation that no session took place that day",
      "Whether she appeared at all, and under what name, since she was then Shirley Graham Du Bois",
      "Any contemporaneous press report of an appearance",
    ],
    where: [
      "Executive Sessions of the Senate Permanent Subcommittee on Investigations, 83rd Congress, published by the Government Printing Office in 2003",
      "Her FBI file, which is likely to record any appearance",
      "New York Times and Washington Post for mid July 1953",
    ],
  },
  {
    key: "sg-death-date",
    course: "shirley-graham",
    lesson: "sg-ledger",
    quote:
      "Horne gives 1 April, which may be the memorial rather than the death, so a check is filed.",
    title: "Did Shirley Graham Du Bois die on 27 March or 1 April 1977?",
    severity: "low",
    question:
      "On what date did Shirley Graham Du Bois die in Beijing, and what is the 1 April date that Horne gives? Is it the memorial service, the announcement, or a genuinely different account of the death?",
    claim:
      "Lesson 23 prints 27 March 1977, breast cancer, aged 80, and says Horne gives 1 April, which may be the memorial rather than the death.",
    stakes:
      "Low in isolation, but this course makes a point of the fact that a syndicated reference entry gets her age at death wrong, and a course that says so should be able to state the date without a hedge of its own. It is also a question with a documentary answer somewhere.",
    needs: [
      "A death certificate or a Chinese official record",
      "The date of the Babaoshan memorial service, which would explain the discrepancy if it is 1 April",
      "The date and wording of the New York Times obituary",
    ],
    where: [
      "New York Times and Xinhua reports for late March and early April 1977",
      "Gerald Horne's Race Woman and its source for 1 April",
      "Her papers at the Schlesinger Library, and David Graham Du Bois's own papers",
    ],
  },
  {
    key: "sg-etta-bell-marriage",
    course: "shirley-graham",
    lesson: "sg-training",
    quote:
      "Those two facts cannot both stand beside an 1896 birth. A source check is filed.",
    title: "Etta Bell married David A. Graham in 1905, so who was Shirley Graham's mother?",
    severity: "high",
    question:
      "The 1916 Centennial Encyclopaedia of the A.M.E. Church states that the Reverend David A. Graham married Elizabeth Etta Bell in St. Paul, Minnesota, in November 1905. The Schlesinger Library names Elizabeth Etta (Bell) Graham as Shirley Graham's mother, and dates her birth to approximately November 1896. Which of those is wrong?",
    claim:
      "Lesson 2 prints 11 November 1896 in Indianapolis, names the contradiction openly, says no scholar appears to have addressed it, and files this check rather than choosing a resolution.",
    stakes:
      "High, and it is the strongest existing reason to doubt the 1896 date, which this course prints as fact and builds several arguments on: the nineteen year gap to the marriage, her age of 35 at the Tom-Tom premiere against TIME's 25, and her age at every later milestone. If the 1905 marriage is right and Etta Bell is her mother, the 1907 birth year that a syndicated reference entry gives becomes much harder to dismiss, and a section of this course needs rewriting.",
    needs: [
      "An Indiana birth record for Lola Shirley Graham, or the 1900 census image for the Graham household",
      "A Minnesota marriage record for David A. Graham and Elizabeth Etta Bell, with its actual date",
      "Whether the 1916 encyclopaedia's 1905 is a typographical error for 1895, which would resolve everything",
    ],
    where: [
      "Indiana State Department of Health vital records, and Indianapolis city directories for 1896 to 1900",
      "Minnesota Historical Society marriage records for Ramsey County",
      "The 1900 United States Census, searching the Graham household wherever David A. Graham was then posted",
    ],
  },
  {
    key: "sg-horne-quotations",
    course: "shirley-graham",
    lesson: "sg-fictionalized",
    quote:
      "Her biographies were, in Horne's words, at times criticized sharply for their inclusion of imagined dialogue, and he lists fictionalized dialogue and shimmering prose among her trademarks (Horne, 2000).",
    title: "Confirm the Race Woman quotations and page numbers against a print copy",
    severity: "medium",
    question:
      "Do the phrases this course attributes to Gerald Horne's Race Woman appear as quoted, and on which pages? Specifically: 'criticized sharply for their inclusion of imagined dialogue'; 'fictionalized dialogue and shimmering prose'; the sentence connecting her invented dialogue to her having created and unmade details of her own life; 'a bit unfair'; and the Cayton and Redding review citations.",
    claim:
      "Section 3 quotes and closely paraphrases Race Woman throughout, and cites it as Horne, G. (2000), New York University Press, WITHOUT page numbers, because the wording was read from a digitized copy whose pagination this pass could not confirm.",
    stakes:
      "This is the section where the course judges its own subject's documentation standards, so it is the one place where a loose citation would be self refuting. A missing page number is a lesser fault than a wrong one, which is why none are printed, but a cited quotation in a published course should carry a page a reader can turn to. Also confirm the edition year: most sources give 2000, at least one gives 2002.",
    needs: [
      "Page numbers for each quoted phrase, from a print or properly paginated copy",
      "The correct publication year and edition of Race Woman",
      "The full citations for the Horace Cayton (Chicago Sun, 13 April 1947) and Saunders Redding (Philadelphia Afro-American, 31 August 1946) reviews as Horne gives them",
    ],
    where: [
      "A library copy of Horne, G., Race Woman: The Lives of Shirley Graham Du Bois, New York University Press",
      "The NYU Press catalogue record for the edition and year",
      "The reviews themselves, in the Chicago Sun and Philadelphia Afro-American for those dates",
    ],
  },
  // ── Who Signs the Print (CREDIT-02) ───────────────────────────────────────────────────────────
  {
    key: "wsp-printmaking-workshop-founding-year",
    course: "who-signs-the-print",
    lesson: "the-founding-year-problem",
    quote:
      "Until one of those is on the table this stays open, and this course files it as an open question rather than resolving it in prose.",
    title: "Did the Printmaking Workshop open in late 1947 or in 1948?",
    severity: "medium",
    question:
      "Which year did Robert Blackburn open the Printmaking Workshop? The Library of Congress exhibition says he acquired his own lithographic press by late 1947 and opened his own studio in Chelsea in 1948, and the MacArthur Foundation's 1992 fellowship page also says 1948. The workshop's own successor, the Robert Blackburn Printmaking Workshop at the Elizabeth Foundation for the Arts, says he decided in late winter 1947 and opened on 17th Street.",
    claim:
      "Lesson 11 of the course teaches this as a genuine disagreement. It names both positions and both institutions, explains that the two may be marking different events in one continuous process (press acquired, then studio opened), and deliberately does NOT choose. Every quiz item on the topic asks the learner to report the disagreement rather than to give a year.",
    stakes:
      "Low for the argument and high for the course's own credibility rule, which is that a contested claim is taught as contested. If a dated primary document settles it, the lesson should say so and name the document rather than continuing to present an answered question as open. Note also that two of the three sources now on the 1948 side (Library of Congress, MacArthur Foundation) are not independent of each other if both drew on the same 2003 exhibition research.",
    needs: [
      "A dated primary document: a lease or rent receipt for the Chelsea or 17th Street premises, a dated invoice or bill of sale for the lithographic press, a contemporaneous letter, or a New York City directory listing",
      "Whether the Library of Congress's Printmaking Workshop Records finding aid states a founding date, and which",
      "Whether the workshop's successor can say what evidence its late winter 1947 date rests on",
    ],
    where: [
      "Library of Congress Manuscript Division, Printmaking Workshop Records finding aid",
      "The Robert Blackburn Printmaking Workshop at the Elizabeth Foundation for the Arts, which holds or knows the institutional memory",
      "New York City directories and Manhattan property records for 1947 and 1948",
    ],
  },
  {
    key: "wsp-charles-white-otis-appointment",
    course: "who-signs-the-print",
    lesson: "teaching-with-no-format",
    quote:
      "Otis College's own account says he joined the faculty in 1964. Literature connected with the 2019 LACMA retrospective gives 1965.",
    title: "When did Charles White join the Otis faculty, and was he its first Black faculty member?",
    severity: "medium",
    question:
      "Two questions, both needing Otis College itself. First, did Charles White join the Otis Art Institute faculty in 1964 or 1965? The college's own LibGuide says 1964; coverage connected with the 2019 LACMA retrospective says 1965. Second, is the widely repeated claim that he was the school's first Black faculty member true, and does Otis state it anywhere in its own words?",
    claim:
      "The lesson reports the year as contested, names both positions, and picks neither. It deliberately does NOT print the first-Black-faculty-member claim at all, on the rule that a first claim needs the issuing institution. The lesson says so out loud, so a learner knows the omission is a decision.",
    stakes:
      "Medium. The year changes nothing about the argument and the course says so, but the first claim does matter: it is repeated constantly, it would be a genuinely notable fact, and printing it unverified is exactly the hostage this course warns against in its own final lesson. If Otis confirms it, the lesson should carry it with the citation. If Otis cannot, the refusal should stay and the reason should stay visible.",
    needs: [
      "The year of White's faculty appointment, from an Otis College personnel record, catalogue, or an archivist's written statement",
      "Whether Otis College will state in its own words that he was the first Black member of its faculty, and on what evidence",
      "If the first claim is true, the exact wording Otis uses, so the course can quote rather than paraphrase",
    ],
    where: [
      "Otis College of Art and Design archives and library, which maintain the LibGuide that currently says 1964",
      "The Charles White: A Retrospective catalogue (Museum of Modern Art / LACMA, 2018 to 2019), whose chronology should be dated and sourced",
      "The Charles White Archives, which handle the estate's records",
    ],
  },
  {
    key: "wsp-emma-amos-spiral-year",
    course: "who-signs-the-print",
    lesson: "the-only-woman-in-the-room",
    quote:
      "One detail does remain unsettled: some accounts date her joining to 1963 rather than 1964, and this course follows the Studio Museum's 1964 while filing the discrepancy as an open question rather than smoothing it over.",
    title: "Did Emma Amos join Spiral in 1963 or 1964?",
    severity: "low",
    question:
      "In which year did Emma Amos become a member of Spiral? The Studio Museum in Harlem says 1964, tying the invitation to her master's study at New York University under Hale Woodruff. Several other accounts say 1963, the year the collective was co-founded. Which is right, and is there a contemporaneous record of Spiral's membership?",
    claim:
      "The lesson follows the Studio Museum and prints 1964, states in the lesson body that other accounts say 1963, and does not present the year as settled. The separate and more important claim, that she was the only woman admitted to the group, IS printed, verified against the Studio Museum.",
    stakes:
      "Low. Nothing in the argument turns on the year, and the load bearing claim (only woman admitted, member until the 1965 dissolution) is verified independently. It is filed because the course's rule is that an unresolved point gets written down rather than smoothed over, and because a reader who checks will find the conflict and should find the course already acknowledging it.",
    needs: [
      "A contemporaneous record of Spiral's membership, such as a meeting note, the 1965 First Group Showing catalogue, or correspondence",
      "Amos's own account of the year, from her oral history or published interviews",
      "Whether any account distinguishes the year she was invited from the year she began attending",
    ],
    where: [
      "The Studio Museum in Harlem, which mounted a Spiral exhibition and holds research on the group",
      "Emma Amos's 2011 oral history and the Georgia Museum of Art's Emma Amos: Color Odyssey catalogue",
      "Archives of American Art, for the papers of Spiral members including Bearden, Alston and Woodruff",
    ],
  },
  {
    key: "wsp-africobra-print-price",
    course: "who-signs-the-print",
    lesson: "cheap-multiple-and-portable",
    quote:
      "A dollar figure circulates. No institutional source this course could reach states it, so the lesson says affordably priced and stocked in Black-owned businesses, which the Studio Museum does state.",
    title: "What did AfriCOBRA actually charge for its poster prints?",
    severity: "low",
    question:
      "Did AfriCOBRA sell its poster prints at a fixed price, and if so what was it? A figure of ten dollars circulates widely in secondary writing. Is it stated anywhere by the artists themselves, by a museum, or in a contemporaneous document, and did it apply to all the group's prints or to a particular edition or exhibition?",
    claim:
      "The lesson prints no price at all. It says the works were affordably priced and stocked in Black-owned businesses, which is the Studio Museum in Harlem's own wording, and the dollar figure is deliberately omitted as unverified.",
    stakes:
      "Low, but the detail is the single most vivid thing in the lesson and it would make the argument concrete: a price is what turns 'affordable' from an adjective into evidence about who could own the work. Worth closing precisely because it is the kind of detail a course is tempted to print on the strength of repetition alone.",
    needs: [
      "A price stated by an AfriCOBRA member in a published interview or in Barbara Jones-Hogu's 1973 essay on the group's history, philosophy and aesthetics",
      "Or a museum wall text, catalogue entry or object record that states a price and gives its source",
      "The scope of the figure: all prints, or one portfolio, or one exhibition",
    ],
    where: [
      "Barbara Jones-Hogu, 'The History, Philosophy and Aesthetics of AfriCOBRA', and any reprint of it",
      "The DePaul Art Museum, which mounted a Jones-Hogu exhibition, and the Smart Museum of Art at the University of Chicago",
      "Smithsonian American Art Museum and Studio Museum in Harlem object records for AfriCOBRA prints",
    ],
  },
  // ── The Name on the Door (CREDIT-03) ──────────────────────────────────────────────────────────
  {
    key: "notd-abele-chief-designer-year",
    course: "the-name-on-the-door",
    lesson: "abele-and-the-office",
    quote:
      "Nothing in the argument turns on the year. The course's rule is that an unresolved conflict between institutional sources gets written down rather than smoothed over.",
    title: "Did Julian Abele become Trumbauer's chief designer in 1909 or 1908?",
    severity: "low",
    question:
      "In which year was Julian Francis Abele promoted to chief designer of Horace Trumbauer's office? The University of Pennsylvania's University Archives and Records Center says he advanced to the position in 1909, and Duke University Libraries independently says 1909. The NCSU Libraries' North Carolina Architects and Builders entry says Trumbauer brought him into the firm in 1906 and promoted him to chief designer in 1908.",
    claim:
      "Lesson 9 reports the disagreement, names all three institutions, states that nothing in the argument turns on the year, and deliberately does not choose. Every quiz item on the topic asks the learner to report the disagreement rather than to give a single year.",
    stakes:
      "Low for the argument and high for the course's own credibility rule, which is that a contested claim is taught as contested. If a dated employment record settles it, the lesson should say so and name the document rather than continuing to present an answered question as open. Note also that Penn and Duke may not be independent of each other if both drew on the same biographical research.",
    needs: [
      "A dated primary document: a payroll or personnel record from the Trumbauer office, a contemporaneous city directory or professional register listing his title, or dated correspondence in which he is described as chief designer",
      "Whether Dreck Spurlock Wilson's African American Architects: A Biographical Dictionary 1865-1945 gives a year, and what evidence it cites for it",
      "Whether the NCSU entry's 1908 rests on a source Penn and Duke did not consult, or on a transcription slip",
    ],
    where: [
      "University of Pennsylvania University Archives and Records Center, which holds Abele material and wrote the 1909 biography",
      "The Athenaeum of Philadelphia, which holds Trumbauer office drawings and interview files",
      "Duke University's Julian Abele reference collection in the Rubenstein Library",
    ],
  },
  {
    key: "notd-duke-portrait-year",
    course: "the-name-on-the-door",
    lesson: "corrections-that-happened",
    quote:
      "Three institutional accounts, three years. This course reports the disagreement and does not choose.",
    title: "When was Duke's first portrait of Julian Abele unveiled: 1987, 1988 or 1989?",
    severity: "low",
    question:
      "In which year was the commissioned portrait of Julian Abele first unveiled and hung in the foyer of Duke's Allen Building? Duke University Libraries says the Black Graduate and Professional Student Association unveiled it in 1987. Duke Today's own coverage of the 2016 quad naming says 1988. The NCSU Libraries entry gives a precise date of 21 April 1989.",
    claim:
      "Lesson 22 reports all three years, names the institution behind each, and does not choose. It uses the disagreement as an example of the same discipline the course applies to Abele's promotion year.",
    stakes:
      "Low for the argument and useful as a teaching example, because it is a case where a single university's own publications disagree with each other about an event on its own campus within living memory. If Duke can date the unveiling from an event programme or a campus newspaper report, the lesson should carry the date and name the document, and keep the disagreement only as a footnote about how quickly an institutional record diverges.",
    needs: [
      "A dated event programme, press release, or Duke Chronicle report of the unveiling",
      "Whether the 1989 date in the NCSU entry refers to a second event, such as a formal dedication following an earlier unveiling",
      "Whether the Black Graduate and Professional Student Association's own records date the first Julian Abele Awards banquet, which the accounts tie to the portrait",
    ],
    where: [
      "Duke University Archives in the David M. Rubenstein Rare Book and Manuscript Library",
      "The Duke Chronicle's digitised archive for the years 1987 to 1989",
      "Duke's Office of Institutional Equity or the Black Graduate and Professional Student Association's own records",
    ],
  },
  {
    key: "notd-chase-texas-licence",
    course: "the-name-on-the-door",
    lesson: "what-a-licence-gates",
    quote:
      "The state historical association's entry does not say it, and this course's rule is that a specific claim about what a licensing board did needs the board or an equivalent record.",
    title: "How and when exactly was John S. Chase licensed in Texas?",
    severity: "medium",
    question:
      "What is the documented record of John Saunders Chase's Texas architectural registration? Several accounts say he petitioned the Texas Board of Architectural Examiners to waive an internship requirement he could not satisfy because no white firm would employ him, and give July 1954 as the month of licensure. The Texas State Historical Association's Handbook of Texas entry states only that he was the first African American licensed to practice architecture in Texas, with no month and no procedural detail.",
    claim:
      "Lesson 6 prints the Handbook of Texas facts (Hampton degree in 1948, first African American to enrol at UT Austin's architecture school in 1950, graduated 1952, could not find work at white firms, opened his own practice, first African American licensed in Texas) and deliberately does NOT print the waiver petition or the month. The lesson says out loud that the omission is a decision.",
    stakes:
      "Medium. The waiver detail, if documented, would be the single sharpest illustration in the whole course of how the experience requirement operates as a gate, because it would show a board being asked to set aside a requirement the market had made impossible to meet. Printing it unverified is exactly the hostage the course warns against in lesson 14. If the board's records confirm it, the lesson should carry it with the citation; if they cannot, the refusal should stay and the reason should stay visible.",
    needs: [
      "The Texas Board of Architectural Examiners' registration record for Chase: the date of registration and the certificate or registration number",
      "Any board minute, correspondence or docket entry recording a petition to waive an internship or experience requirement",
      "If the waiver account originates in an interview or a memoir, the exact wording and where it was published",
    ],
    where: [
      "The Texas Board of Architectural Examiners, and its records held by the Texas State Library and Archives Commission",
      "The John S. Chase papers and the Chase family, and the University of Texas at Austin's Alexander Architectural Archives",
      "Texas Southern University, where Chase taught from 1952, and the Houston chapter of the American Institute of Architects",
    ],
  },
  {
    key: "notd-williams-aia-membership-year",
    course: "the-name-on-the-door",
    lesson: "a-door-of-your-own",
    quote:
      "Neither source gives a year for his AIA membership, so this course does not print one.",
    title: "In what year did Paul Revere Williams become a member of the AIA?",
    severity: "low",
    question:
      "In what year did Paul Revere Williams join the American Institute of Architects, and does the institute itself state that he was its first African American member? The Getty Research Institute states the first without a year. The Los Angeles Conservancy dates his fellowship to 1957 and gives no year for ordinary membership. A year of 1923 circulates widely, but that is also the year he opened his own practice, which is the kind of coincidence that suggests a conflation.",
    claim:
      "Lesson 19 prints the three firsts exactly as the Getty states them, with no year attached to the membership, and says in the lesson that neither source gives one. The 1957 fellowship and the 2017 Gold Medal are printed with their sources.",
    stakes:
      "Low for the argument and worth closing because it is a first claim about a named institution, which is the category this course holds to the highest standard. A widely repeated year that turns out to be the year he opened his office would be a small, checkable, and embarrassing error to have printed.",
    needs: [
      "The AIA's own record of Williams's election to membership, with the year",
      "Whether the AIA will state in its own words that he was its first African American member, and on what evidence",
      "The correct year of his election to the College of Fellows, to confirm the Conservancy's 1957",
    ],
    where: [
      "The American Institute of Architects' membership and College of Fellows records in Washington, D.C.",
      "The Getty Research Institute and the USC School of Architecture, joint holders of the Paul Revere Williams archive",
      "Karen Elyse Hudson's published work on her grandfather, which draws on family papers",
    ],
  },
  {
    key: "notd-williams-upside-down-drawing",
    course: "the-name-on-the-door",
    lesson: "a-door-of-your-own",
    quote:
      "It could not locate Williams saying either thing in his own published words, and has filed the question rather than treating an institutional retelling as a first-hand account.",
    title: "Did Paul Revere Williams describe drawing upside down in his own words?",
    severity: "low",
    question:
      "Is there a first-hand statement by Paul Revere Williams that he learned to draw upside down so that white clients could sit across the table from him rather than beside him, and that he toured construction sites with his hands clasped behind his back? The Getty Research Institute states both as fact in its 2020 archive announcement. Does the underlying account come from Williams himself, for example his 1937 essay in The American Magazine, or from family recollection?",
    claim:
      "Lesson 19 prints both details as the Getty states them, attributes them to the Getty by name, and adds explicitly that the course could not locate Williams saying either in his own published words. It does not present them as first-hand testimony.",
    stakes:
      "Low. The detail is true in the sense that an institution holding his archive prints it, and this course says so. But it is one of the most repeated anecdotes in American architectural history and the kind that becomes unfalsifiable through repetition, exactly like the Abele servant story. If Williams wrote it himself, the lesson should quote him instead of the retelling. If the account traces only to family recollection, saying so makes it stronger rather than weaker.",
    needs: [
      "The full text of Paul R. Williams, 'I Am a Negro', The American Magazine, July 1937, and whether either detail appears in it",
      "Whether Karen Elyse Hudson's books cite a source for the upside-down drawing, and what it is",
      "Whether the Getty can say what source its own announcement drew on",
    ],
    where: [
      "The Paul Revere Williams archive at the Getty Research Institute and the USC School of Architecture",
      "Bound volumes of The American Magazine for July 1937, held by major research libraries",
      "Karen Elyse Hudson's published biographies of Williams",
    ],
  },
  {
    key: "notd-daaa-current-count",
    course: "the-name-on-the-door",
    lesson: "counting-who-is-in-the-room",
    quote:
      "That figure belongs to whichever edition of the introduction you are reading, and the page carries no date, so this course reports the sentence and does not treat the number as current.",
    title: "What is the current, dated count in the Directory of African American Architects?",
    severity: "medium",
    question:
      "How many licensed African American architects does the Directory of African American Architects currently list, how many of them are women, and as of what date? The directory's published introduction states that it lists only eighty four women, but the page carries no date and the directory has since moved to the Directories of Diverse Architects and Designers under NOMA, whose own site says the data is a combination of the old and new databases during a migration.",
    claim:
      "Lesson 7 quotes the introduction's sentence about eighty four women, states explicitly that the page is undated and that the number is therefore not treated as current, and carries no live total from the directory at all. The dated figure the lesson relies on is NCARB's two percent from its 2025 edition reporting 2024 data.",
    stakes:
      "Medium. The whole point of that lesson is that a count is only usable with a method and a date attached, so the course would be violating its own rule if it printed a live number it could not date. A dated figure from the directory's maintainers, especially the women's count, would let the lesson show two independent measurements of the same population rather than one.",
    needs: [
      "A current total of licensed African American architects in the directory, with the date the count was taken",
      "The current count of women, with its date",
      "Whether the migration to the new database is complete, and whether the pre-migration and post-migration counts are comparable",
    ],
    where: [
      "The Directories of Diverse Architects and Designers, a project of the National Organization of Minority Architects",
      "Bradford C. Grant and Dennis Alan Mann, the founders, and the University of Cincinnati's School of Architecture and Interior Design",
      "NOMA's national office, which now stewards the directory",
    ],
  },
  // ── Written by Himself (CREDIT-W1) ────────────────────────────────────────────────────────────
  {
    key: "wbh-malcolm-x-first-printing-year",
    course: "written-by-himself",
    lesson: "as-told-to-in-the-modern-trade",
    quote:
      "The book is generally dated 1965, and the Internet Archive copy is catalogued as Grove Press, 1966, which is the kind of first-printing-versus-later-printing discrepancy this catalog reports instead of choosing.",
    title: "Is the Grove Press Autobiography of Malcolm X first printing 1965 or 1966?",
    severity: "low",
    question:
      "What year does the FIRST Grove Press printing of The Autobiography of Malcolm X carry on its title page, and does that first printing carry the same credit line as later ones? The book is almost universally dated 1965. The copy digitised at the Internet Archive, which this course read for the title-page wording, is catalogued as Grove Press, 1966. Both can be true if the archived copy is a later printing, but the course has not seen a first printing.",
    claim:
      "Lesson 21 reports the discrepancy in one sentence, states that it is a first-printing-versus-later-printing question, and does not choose a year. The load-bearing claim in that lesson is the title-page PHRASE, which the archived copy carries, not the year.",
    stakes:
      "Low for the argument and real for the course's own method, since the lesson is specifically about a credit line being remembered inaccurately. If the first printing carries a different credit line from the copy this course read, the lesson's correction would need rewriting rather than dating.",
    needs: [
      "The title-page year and the credit-line wording of a verified first Grove Press printing",
      "A national library catalogue record (Library of Congress or British Library) giving the first-publication year and the statement of responsibility as printed",
      "Whether any printing carries the phrase \"as told to Alex Haley\" on the title page rather than on the jacket or cover",
    ],
    where: [
      "The Library of Congress catalogue record for the first Grove Press edition",
      "Grove Atlantic, the successor to Grove Press, which may hold printing records",
      "A rare-book dealer's collation of a verified first printing, which describes the title page in detail",
    ],
  },
  {
    key: "wbh-yellin-1981-pagination",
    course: "written-by-himself",
    lesson: "how-yellin-settled-it",
    quote:
      "In 1981, Yellin published \"Written by Herself: Harriet Jacobs's Slave Narrative\" in the journal American Literature.",
    title: "Confirm the volume, issue, pages and stable link for Yellin's 1981 article",
    severity: "low",
    question:
      "What are the exact volume, issue, page range and DOI or JSTOR stable URL for Jean Fagan Yellin's 1981 article \"Written by Herself: Harriet Jacobs's Slave Narrative\" in American Literature? Secondary listings agree on volume 53, November 1981, pages 479-486, but the course could not open the journal's own record or a JSTOR page to confirm the issue number, the pagination or a stable identifier, so the citation is printed without a URL.",
    claim:
      "Lesson 18 cites Yellin (1981), American Literature, 53(3), 479-486, with no URL, and states the year and journal in the body. Nothing in the argument depends on the page range; the load-bearing facts are the year, the journal and that the article preceded the 1987 edition.",
    stakes:
      "Low for the teaching and material for the citation list, because this catalog's rule is a DOI or stable URL wherever one exists. A confirmed identifier would let a reader check the article rather than take the course's word for it, which is exactly the standard the course teaches.",
    needs: [
      "The issue number, exact page range, and DOI or JSTOR stable URL from Duke University Press or JSTOR",
      "Whether the article title uses \"Jacobs'\" or \"Jacobs's\" as printed in the journal",
      "Whether an open-access version exists that could be linked instead",
    ],
    where: [
      "Duke University Press, which publishes American Literature",
      "JSTOR's record for American Literature volume 53",
      "Any university library's catalogue record for the bound volume",
    ],
  },
  {
    key: "wbh-fisher-1881-imprint",
    course: "written-by-himself",
    lesson: "dictated-and-unattributed",
    quote:
      "San Francisco, 1881. What Mrs. Fisher Knows About Old Southern Cooking, Soups, Pickles, Preserves, Etc., by Mrs. Abby Fisher, late of Mobile, Alabama.",
    title: "Which printing office issued Abby Fisher's 1881 cookbook?",
    severity: "low",
    question:
      "What imprint appears on the title page of the first edition of What Mrs. Fisher Knows About Old Southern Cooking? The full-text copy at the Internet Archive that this course read gives \"Mills's Co-operative Printing Office, 420, 424 & 430 Montgomery Street\". A number of accounts of the book instead name the Women's Co-operative Printing Office of San Francisco. The two may be the same firm under different names, successive firms, or two different issues.",
    claim:
      "Lesson 15 names neither printer. It gives only the city and year, cites the Internet Archive full text, and rests its argument on the Preface and Apology and on the reference-list heading, neither of which is affected by the imprint question.",
    stakes:
      "Low for the argument and worth settling for accuracy, because the Women's Co-operative Printing Office is frequently mentioned as part of the book's significance, and if that attribution is wrong it is being repeated widely. If the two names belong to one firm, saying so would let the lesson name it.",
    needs: [
      "The imprint as printed on a verified first-edition title page",
      "Whether Mills's Co-operative Printing Office and the Women's Co-operative Printing Office were the same business, successive businesses, or unrelated",
      "Whether more than one 1881 issue exists with different imprints",
    ],
    where: [
      "The Library of Congress rare book record for the 1881 edition",
      "The California Historical Society and the San Francisco Public Library's California collection",
      "Michigan State University Libraries' Feeding America digital cookbook collection, which holds the title",
    ],
  },
  {
    key: "wbh-keckley-authorship-doubt-history",
    course: "written-by-himself",
    lesson: "keckley-doubted-and-punished",
    quote:
      "Behind the Scenes was edited by the journalist James Redpath, and there has long been argument about how much of the book is his.",
    title: "What is the documented history of doubt about Elizabeth Keckley's authorship?",
    severity: "medium",
    question:
      "Who publicly questioned Elizabeth Keckley's authorship of Behind the Scenes, when, and on what grounds, and who answered them? This course found second-hand reports of a 1935 Washington Star article by David Barbee attributing the book to Jane Swisshelm and questioning whether Keckley existed at all, answered by John E. Washington in They Knew Lincoln (1942). Neither could be confirmed against a source the course could open, so neither is printed.",
    claim:
      "Lesson 19 says only what Documenting the American South says: that there is speculation about the level of involvement of Keckley's editor James Redpath, and that verifiable facts in the book have affirmed its authenticity. It names no earlier doubter and prints no proportion of the text.",
    stakes:
      "Medium. If the 1935 attempt is real, it is the strongest documented case in this entire course of a Black woman's authorship being denied outright rather than merely doubted, and answered by a named Black scholar seven years later. That is a correction with the same shape as the Jacobs case and it currently sits unprinted because it could not be verified.",
    needs: [
      "The Washington Star article of 11 November 1935, its author, and exactly what it claimed",
      "The passage in John E. Washington's They Knew Lincoln (1942) that answers it, with a page reference",
      "Jennifer Fleischner's scholarly position on Redpath's role, quoted rather than summarised, from Mrs. Lincoln and Mrs. Keckly",
    ],
    where: [
      "The Washington Star's microfilm run, held by the District of Columbia Public Library and the Library of Congress",
      "They Knew Lincoln (1942), reissued by Oxford University Press with a scholarly introduction",
      "Jennifer Fleischner's Mrs. Lincoln and Mrs. Keckly, the scholarly anchor for the authorship question",
    ],
  },
  // ── The Match (WARRANT-01) ────────────────────────────────────────────────────────────────────
  {
    key: "match-1890-annual-appropriation-ended-1995",
    course: "the-match",
    lesson: "cash-not-land",
    quote:
      "That is what the note says. What it did in practice to the institutions, and how it sits beside the capacity grants Section 3 covers, is a question this course has filed rather than answered",
    title: "What did the 1994 provision ending payments under the Act of August 30, 1890 actually do?",
    severity: "medium",
    question:
      "Public Law 103-330, title VII, section 724 (30 September 1994) provided that no funds shall be available in fiscal year 1995 and thereafter for payments under the Act of August 30, 1890 and the tenth and eleventh paragraphs of the 1907 Act (7 U.S.C. 321 et seq.). What happened in practice? Were the 1890 Act's annual $50,000 payments genuinely discontinued from FY1995, were they folded into another appropriation line, and did the change affect the 1890 institutions, the 1862 institutions, or both?",
    claim:
      "Lesson 6 quotes the statutory note verbatim, says that is what the note says, and explicitly declines to interpret it. No consequence is asserted anywhere in the course.",
    stakes:
      "Medium. If the payments simply ended, that is a materially interesting fact about the 1890 Act's own money that sits directly on this course's spine and is currently unsaid. If they were folded into a successor line, a reader who found the note independently would reasonably assume the course had missed something. Either way the gap is visible and unexplained.",
    needs: [
      "What Congress intended by P.L. 103-330 sec. 724, from the appropriations report language for FY1995",
      "Whether payments under 7 U.S.C. 322 appear in any appropriations act after FY1994, and if not, whether a successor line replaced them",
      "Whether the change reached the 1890 institutions' share under 7 U.S.C. 323, the 1862 colleges, or both",
    ],
    where: [
      "The FY1995 Agriculture appropriations act (P.L. 103-330) and its committee reports, on congress.gov",
      "CRS reports on land-grant university funding, particularly R45897 on the land-grant system",
      "USDA NIFA budget justifications for FY1994 and FY1995",
    ],
  },
  {
    key: "match-2026-usda-1890-mou-text",
    course: "the-match",
    lesson: "a-remedy-without-money",
    quote:
      "This course did not read the memorandum itself, so it does not tell you what the text does or does not contain.",
    title: "What does the March 2026 USDA / Council of 1890 Universities memorandum actually say?",
    severity: "medium",
    question:
      "Obtain the text of the memorandum of understanding signed by USDA and the Council of 1890 University Presidents in March 2026. Confirm its exact signing date, the signatories by name and title, and whether the document itself carries any dollar figure, appropriation, funding commitment or measurable target.",
    claim:
      "Lesson 19 dates the signing to 5 March 2026 on West Virginia State University's own announcement, describes the task force and the meeting frequency from that announcement, and says explicitly that neither the parties' announcements nor the trade press names a dollar figure. It does not characterise the text.",
    stakes:
      "Medium. This is the course's closing lesson and its honest ending depends on the distinction between the reporting naming no money and the document containing none. If the memorandum does carry a commitment, the closing lesson understates what happened; if it does not, the lesson can say so directly instead of hedging.",
    needs: [
      "A copy of the memorandum, or USDA's own release describing it",
      "The exact signing date, confirmed against a USDA source rather than a signatory institution's account",
      "Whether the text names any dollar figure, appropriation or measurable target",
      "Whether the claim that USDA has signed such agreements since the Reagan administration can be documented with at least two prior examples and their dates",
    ],
    where: [
      "USDA's newsroom and its Office of Partnerships and Public Engagement (usda.gov returns HTTP 403 to automated fetches, so a browser or a records request may be needed)",
      "The 1890 Universities Foundation and the Council of 1890 University Presidents",
      "Any of the nineteen institutions' government relations offices",
    ],
  },
  {
    key: "match-1994-endowment-mechanism",
    course: "the-match",
    lesson: "three-tiers-in-one-row",
    quote:
      "It does not narrate the 1994 institutions' own story, their endowment arrangements, or what tribal colleges do",
    title: "What is the 1994 institutions' endowment mechanism, and do they receive only the interest?",
    severity: "low",
    question:
      "The Equity in Educational Land-Grant Status Act of 1994 created an endowment arrangement for the 1994 institutions. What amount did Congress authorize, is the principal held by the Treasury with only the income distributed, and what has the annual distribution been in recent years?",
    claim:
      "Lesson 11 says nothing about the endowment. It reports only the CRS Table 1 row, whose 1994 capacity-funding cell is blank because no comparable programmes exist, and says explicitly that the endowment arrangement is not this course's material.",
    stakes:
      "Low for this course, which deliberately declines to narrate it, but the figure is exactly the kind of round number that circulates without provenance and it will be load-bearing for WARRANT-99, where the three tiers are compared directly.",
    needs: [
      "The authorized amount and the statutory mechanism, from the Act as codified in the note to 7 U.S.C. 301",
      "Whether the institutions receive income only, and how the distribution is calculated",
      "The most recent annual distribution total, from the agency's own published letters",
    ],
    where: [
      "USDA NIFA's Tribal College Endowment Program distribution letters, which are published as PDFs",
      "The Equity in Educational Land-Grant Status Act of 1994, Pub. L. 103-382, tit. V, pt. C",
      "The American Indian Higher Education Consortium",
    ],
  },
  {
    key: "match-annual-capacity-and-match-report",
    course: "the-match",
    lesson: "do-it-yourself",
    quote:
      "Section 7116 of the 2018 farm bill, codified at 7 U.S.C. § 2207d, requires USDA to report annually on federal capacity funding allocations and non-federal matching funds by institution and by grant programme",
    title: "Where is the annual capacity-funding-and-match report published, and what is the latest one?",
    severity: "high",
    question:
      "Locate the report 7 U.S.C. 2207d requires USDA to publish annually. What is its stable URL or publication route, which fiscal year does the most recent edition cover, and which institutions does it identify as having received matching fund waivers in that year?",
    claim:
      "Lesson 21's exercise tells a learner to pull this report and names the statute that requires it, but deliberately asserts no URL, because the repo's authoritative-values rule forbids presenting a guessed external location as correct. The course's only waiver count is CRS's FY2020 figure of nine institutions.",
    stakes:
      "High. This is the artifact the course's closing exercise depends on, and a learner who cannot find it cannot do the exercise. It is also the only way to update the FY2020 waiver count, which is now several years old and is the course's most-cited observed fact.",
    needs: [
      "The stable publication location of the report, confirmed by opening it",
      "The most recent fiscal year covered",
      "The institutions identified as receiving waivers in that year, by programme",
      "Whether the report format still matches what CRS described in 2021",
    ],
    where: [
      "USDA NIFA, which administers the capacity grants",
      "7 U.S.C. 2207d and section 7116 of the Agriculture Improvement Act of 2018 for the statutory description",
      "A congressional office, if the report is transmitted rather than posted",
    ],
  },
  {
    key: "match-1994-institution-count",
    course: "the-match",
    lesson: "the-roster-still-changes",
    quote:
      "Those two numbers are counting slightly different things at different dates, and a course that picked whichever one it preferred would be doing the thing this catalog exists to stop.",
    title: "How many 1994 land-grant institutions are there today, and what explains 35 against 36?",
    severity: "low",
    question:
      "CRS reported 35 in June 2021. The statutory definition list printed as a note to 7 U.S.C. 301 currently names 36 colleges. Which is the operative count today, and what accounts for the difference: an institution named in statute but not currently operating or accredited, an amendment after CRS published, or two different definitions of eligibility?",
    claim:
      "Lesson 7 reports both numbers with their sources and dates, states that they count slightly different things, and refuses to give a current count. Lesson 11 repeats CRS's 35 with the June 2021 date attached.",
    stakes:
      "Low, because the course already refuses the count rather than asserting one. Worth closing anyway: the difference is probably instructive about how a statutory roster and an agency list diverge, which is a point this course makes twice about the 1890 group and could make with evidence about the 1994 group.",
    needs: [
      "The agency's current published list of 1994 institutions, with its date",
      "The statutory list as most recently amended, with the amending public law",
      "The reason for any difference between them",
    ],
    where: [
      "USDA NIFA's land-grant institution lists",
      "The note to 7 U.S.C. 301 on uscode.house.gov",
      "The American Indian Higher Education Consortium's member list",
    ],
  },
  {
    key: "territories-us-reports-citations",
    course: "territories-and-representation",
    lesson: "reading-it-yourself",
    quote:
      "The citations here therefore use docket number and decision date, which are exact.",
    title: "United States Reports volume and page for the three modern cases",
    severity: "low",
    question:
      "What are the official United States Reports citations (volume and starting page) for United States v. Vaello Madero (No. 20-303, decided 21 April 2022), Financial Oversight and Management Board for Puerto Rico v. Aurelius Investment, LLC (No. 18-1334, decided 1 June 2020), and the Federal Reporter citation for Fitisemanu v. United States (10th Cir., filed 15 June 2021)?",
    claim:
      "The course cites all three by docket number and decision date, and says in its ledger of refusals that no verified reporter page was found in the sources consulted.",
    stakes:
      "Low, because a docket number plus a decision date identifies a case exactly and every source URL in the course resolves. But an educator quoting the course in a brief or a syllabus will want the reporter citation, and a guessed page is worse than none.",
    needs: [
      "Volume and starting page for each, from a bound reporter or a source that prints the official citation",
      "The source consulted, so the course can cite it",
    ],
    where: [
      "A law library's bound United States Reports, or a Bluebook-accurate database",
      "The Supreme Court's own preliminary print, once issued for the relevant term",
      "The Federal Reporter for the Tenth Circuit opinion",
    ],
  },
  {
    key: "territories-crs-freely-associated-states",
    course: "territories-and-representation",
    lesson: "reading-it-yourself",
    quote:
      "the middle name appears to be a slip, so this course names only the two it can verify and points you at the sentence",
    title: "CRS R44721 names a third freely associated state that may be a slip",
    severity: "low",
    question:
      "In CRS report R44721 (updated 6 June 2024), the sentence explaining free association names the Federated States of Micronesia, the Republic of Micronesia, and the Republic of Palau. Is the middle name an error for the Republic of the Marshall Islands, and has CRS corrected it in a later version?",
    claim:
      "The course names only the Federated States of Micronesia and Palau, states that the third name appears to be a slip, and does not assert what the report meant to say.",
    stakes:
      "Low, and it is a source-quality note rather than a claim the course rests on. Worth closing because the course teaches learners to check sources against each other, and this is the worked example.",
    needs: [
      "Whether a later version of R44721 prints a different third name",
      "Confirmation of which three states currently hold Compacts of Free Association with the United States, from a primary source",
    ],
    where: [
      "A newer version of R44721 on crsreports.congress.gov",
      "The Department of the Interior's Office of Insular Affairs, which administers the Compacts",
    ],
  },
  {
    key: "territories-house-rule-current-congress",
    course: "territories-and-representation",
    lesson: "a-seat-without-a-vote",
    quote:
      "Check the current rules package before relying on it: this is exactly the kind of value that can change every two years without anyone announcing it.",
    title: "Do Delegates still vote in the Committee of the Whole in the current Congress?",
    severity: "medium",
    question:
      "As of today, does clause 3(a) of Rule III still give Delegates and the Resident Commissioner the powers of Members in the Committee of the Whole, and does clause 6(h) of Rule XVIII still require an automatic revote when their votes are decisive? Which Congress's rules package is currently in force, and did it amend either rule?",
    claim:
      "The course states the privilege was granted in the 103rd Congress, revoked in the 104th, reinstated in the 110th, revoked in the 112th and reinstated in the 116th, and that H. Res. 5 of the 119th Congress adopted the 118th Congress's rules without amending either rule.",
    stakes:
      "Medium and recurring. This privilege has flipped five times since 1993, always in the opening rules package of a new Congress, so the sentence goes stale on a predictable schedule rather than at random. A course that teaches the wrong answer here teaches a learner that a delegate has a vote they do not have.",
    needs: [
      "The rules resolution of the current Congress, and whether its amendments touch Rule III or Rule XVIII clause 6",
      "The current edition of the House Rules and Manual, if one has been published for this Congress",
    ],
    where: [
      "rules.house.gov, for the rules of the current Congress",
      "govinfo.gov, for the House Rules and Manual (HMAN) of the current Congress and for the rules resolution as engrossed",
    ],
  },
  // ── The County Committee (WARRANT-02) ─────────────────────────────────────────────────────────
  {
    key: "county-uphpa-current-adoption-count",
    course: "the-county-committee",
    lesson: "the-uniform-act-and-the-farm-number",
    quote:
      "here is what this course will not tell you: how many states have adopted it today",
    title: "How many jurisdictions have enacted the Uniform Partition of Heirs Property Act today?",
    severity: "high",
    question:
      "What is the CURRENT number of jurisdictions that have enacted the Uniform Partition of Heirs Property Act, as the Uniform Law Commission itself states it, and which ones are they? The Commission publishes its enactment map inside an embedded Power BI dashboard that returns nothing to an automated fetch, and its own server-rendered catalog page carries the act description with no count at all. Published secondary counts disagree and count different things: one legal-profession update gives 22 states plus DC and the U.S. Virgin Islands for 2024 and 24 plus DC and USVI for 2025, and a conservation body gives 26 states enacting the act OR a substantially similar law, which sweeps in states that extended similar protections to ALL partition actions rather than adopting the uniform act.",
    claim:
      "Lesson 15 states the four protections from the act's own text and then refuses to print any adoption count, tells the learner to read it from the Commission with the date they read it, and to check their own state's code. Nowhere in the course is a number given.",
    stakes:
      "High, and it is the single most useful practical fact in Section 4. Whether the notice, the undiscounted appraisal and the co-tenant right of first refusal protect a particular family depends entirely on whether that family's state has enacted the act. A learner who assumes their state has it, and does not, will be surprised at the worst possible moment. A stale number presented as current would also be an authoritative-values violation, since this value belongs to the Uniform Law Commission.",
    needs: [
      "The count as the Uniform Law Commission itself states it, read in a browser from its Partition of Heirs Property Act community page",
      "The date it was read, which travels with the number",
      "The list of enacting jurisdictions if the dashboard exposes one",
      "Whether the Commission counts territories and the District of Columbia inside its headline number",
      "The first enacting state and year, which no source consulted could supply",
    ],
    where: [
      "uniformlaws.org, the Partition of Heirs Property Act community page, opened in a real browser so the embedded dashboard renders",
      "The Commission's Legislative Counsel, who is named on the act's catalog page",
      "Your own state legislature's code search, for the enacting section number",
    ],
  },
  {
    key: "county-dfap-appropriated-versus-paid",
    course: "the-county-committee",
    lesson: "the-race-neutral-rewrite",
    quote:
      "this course found no document itemising the difference, so it does not print one",
    title: "What accounts for the gap between the $2.2bn appropriated and the ~$2bn USDA reported paying?",
    severity: "medium",
    question:
      "Congress appropriated $2,200,000,000 at ARPA section 1006(e) as amended by IRA section 22007, and USDA announced awards totalling about $2 billion to over 43,000 recipients on 31 July 2024. What accounts for the roughly $200 million difference, line by line? The statute appropriates for the programme 'including the cost of any financial assistance' and requires delivery 'through 1 or more qualified nongovernmental entities', and a separate subsection appropriates $24,000,000 for USDA's own administrative costs, so the likely answer is payments to the third-party administrators out of the same appropriation. No document stating that was located.",
    claim:
      "Lesson 22 prints $2.2 billion appropriated and about $2 billion in awards, states the statutory reason the two can differ, and explicitly declines to print any breakdown of the difference.",
    stakes:
      "Medium. The two figures are both correct and both circulate, and a reader who meets them without the explanation reasonably concludes that $200 million went missing. The honest answer is probably mundane, and having it would let the lesson say so in one sentence instead of leaving a gap a bad-faith reader can fill.",
    needs: [
      "A USDA or Office of Management and Budget document breaking out programme delivery costs against awards for the Discrimination Financial Assistance Program",
      "Whether any of the $2.2 billion remained unobligated when awards closed, and what happens to it before 30 September 2031",
      "The names of the qualified nongovernmental entities that administered the programme, and what they were paid",
    ],
    where: [
      "usda.gov and farmers.gov, which return HTTP 403 to automated fetch but resolve in a browser",
      "USASpending.gov, which should carry the obligations under the Treasury Account for this appropriation",
      "The Discrimination Financial Assistance Program FOIA page, which USDA maintains",
    ],
  },
  {
    key: "county-arpa-1005-amount-disbursed",
    course: "the-county-committee",
    lesson: "the-race-neutral-rewrite",
    quote:
      "This course found no official document reporting any section 1005 debt relief actually disbursed",
    title: "Was any ARPA section 1005 debt relief ever paid out before the repeal?",
    severity: "medium",
    question:
      "Did USDA disburse any farm loan debt relief under section 1005 of the American Rescue Plan Act between its enactment on 11 March 2021 and its repeal on 16 August 2022, and if so, how much and to how many borrowers? The litigation record makes zero the expected answer, since a temporary restraining order issued on 10 June 2021 and a nationwide preliminary injunction on 23 June 2021, but an expected answer is not a documented one.",
    claim:
      "Lesson 22 says the programme was frozen from the outset and stayed frozen until repeal, and that this course found no official document reporting any amount disbursed. It prints no figure, including no zero.",
    stakes:
      "Medium. Saying 'no money moved' is a strong claim and the course currently reaches it by inference from the injunction dates rather than from a disbursement record. If some payments went out in the weeks before the first order, the lesson's summary is wrong in a way a reader with the payment file could correct in public.",
    needs: [
      "A USDA, GAO or Congressional Budget Office statement of amounts obligated or disbursed under ARPA section 1005",
      "If the answer is zero, a document that says so, rather than the absence of a document saying otherwise",
      "Whether any borrower received a payment between 11 March and 10 June 2021",
    ],
    where: [
      "USASpending.gov, for obligations against the section 1005 appropriation",
      "GAO's reporting on American Rescue Plan implementation",
      "The government's own filings in Wynn, Miller, Faust and Holman, which had to describe the programme's status",
    ],
  },
  {
    key: "county-pigford-fraud-audit-or-prosecution",
    course: "the-county-committee",
    lesson: "the-criticism-in-both-directions",
    quote:
      "This course searched for a substantiating audit or prosecution and did not find one, which is not the same sentence as \"none exists\"",
    title: "Has any audit, inspector general report or prosecution ever substantiated Pigford claim fraud?",
    severity: "high",
    question:
      "Did the USDA Office of Inspector General ever publish an audit making findings of fraud in the Pigford or Pigford II claims processes, and has the Department of Justice ever charged or convicted anyone for defrauding either settlement? CRS records that OIG conducted ongoing monitoring and added auditing to the claims review process, and OIG budget justifications for FY2013 and FY2014 request funds to apply statistical sampling to Pigford II improper payments, but no resulting published report was located. GAO-13-69R examined internal controls, expressly did not examine claimant fraud, tested 150 claims and found no exceptions.",
    claim:
      "Lesson 21 states that no government audit, inspector general report or prosecution that this course could locate ever found the settlements to be characterised by fraud, and says explicitly that 'not found' is not the same sentence as 'does not exist'.",
    stakes:
      "High, and it is the load-bearing sentence of the section that clears the brief's hard gate. The lesson reproduces a named fraud allegation precisely because it can also name the rebuttals and the audit findings, and the closing sentence is what keeps the treatment honest in both directions. If a substantiating report or a prosecution exists and this course says it searched and found none, the course is wrong on the one point where being wrong is least acceptable. If the search can be closed as genuinely exhaustive, the hedge can be tightened into a statement.",
    needs: [
      "Whether USDA OIG ever published an audit of Pigford or Pigford II claim validity, with the report number and date if so",
      "Whether the improper-payment sampling work requested in the OIG FY2013 and FY2014 budget justifications was ever performed and reported",
      "Any federal indictment, information, plea or conviction for fraud against either settlement",
      "Whether the roughly 3,180 claims flagged for potential fraud concerns as of 23 October 2012 were ever adjudicated, and with what outcome",
    ],
    where: [
      "usda.gov/oig, the Office of Inspector General's audit report index",
      "justice.gov press releases, and PACER for the District of Columbia and the districts where claimants were concentrated",
      "The claims administrator's later reports to the district court in In re Black Farmers Discrimination Litigation",
    ],
  },
  {
    key: "county-usccr-1982-printings-erratum",
    course: "the-county-committee",
    lesson: "who-sat-on-it",
    quote:
      "the report contradicts itself about Tennessee, in print, and there are two printings",
    title: "Is there an erratum establishing which USCCR 1982 printing carries the correction?",
    severity: "low",
    question:
      "Did the U.S. Commission on Civil Rights ever publish an erratum, corrigendum or revised-edition notice for The Decline of Black Farming in America (February 1982)? Two settings exist. The February 1982 typescript, held by ERIC as ED222604 and by the Thurgood Marshall Law Library, prints Tennessee in Table 4.1 as 33 to 2 with a change of 93.3 per cent, which does not compute. A Government Printing Office setting carrying 1983 signature marks, which is the copy usccr.gov hosts, prints the same row as 12 to 2 with 83.3 per cent, and its chapter text at page 94 says 83.3, but its Findings at page 188 still say 93.3.",
    claim:
      "Lesson 6 uses 83.3, shows that 12 to 2 is an exact 83.33 per cent fall, states that the report's Findings still print 93.3, and describes the two printings without asserting which is authoritative or why the correction reached some parts of the document and not others.",
    stakes:
      "Low for the figure, which the arithmetic settles, and genuinely useful for the lesson, which is about how to handle a source that disagrees with itself. Establishing that a correction was issued, and that it was applied to the table and the chapter but not to the findings, would turn a careful description into a documented one.",
    needs: [
      "Any Commission erratum, corrigendum or reprint notice for this report",
      "Confirmation of the printing dates of the two settings, since the 1983 dating currently rests on GPO signature marks rather than on a title page",
      "Whether the underlying source, USDA's Equal Opportunity Report: USDA Programs, 1980, at pages 53 and 73 to 76, shows Tennessee as 12 or as 33 for 1979",
    ],
    where: [
      "The Commission's own publications office and its historical publications index at usccr.gov",
      "The Thurgood Marshall Law Library's USCCR digital archive, which holds the February 1982 setting",
      "The National Agricultural Library, for USDA's Equal Opportunity Report series",
    ],
  },

  // ── MONEY-01 · Credit, and the Decisions Made About You ───────────────────────────────────────
  //
  // This course generates more of these than any other in the catalog, and that is correct rather
  // than a smell. Its statutory spine is stable; the things layered on top of it (which score models
  // are in use, what the agencies currently offer above the statutory floor, which body administers
  // which rule this month) all move, and the course's rule is to teach the floor and the method and
  // to DATE every refusal in the lesson. Each check below corresponds to a dated refusal a reader
  // can see on the page, not to a hedge buried in a code comment.
  {
    key: "credit-score-models-in-use",
    course: "credit-decisions",
    lesson: "there-is-no-single-score",
    quote:
      "this course makes no claim about which score models are in general use or which the mortgage market requires",
    title: "Which credit score models are in general use, and which does the mortgage market require?",
    severity: "medium",
    question:
      "As of the date you check, which credit-scoring model families and version numbers are in general use by consumer lenders, and which model or models does the federal housing regulator currently require or permit for conforming mortgage origination? Give the version strings exactly as the publishers and the regulator print them.",
    claim:
      "The course states, dated 28 August 2026, that it makes NO claim about this. It teaches only what the statute guarantees (that a score is a modelled prediction, that models are plural and versioned, and the four things an agency must disclose with one) and tells the reader to read the current picture from the model publishers and the relevant federal housing regulator, with the date attached.",
    stakes:
      "Nothing in the course is wrong today, because it deliberately asserts nothing here. The stakes run the other way: a learner who wants the current picture is sent off-site, and a dated answer would let the lesson say more without becoming a table that goes stale silently. It also decides whether MONEY-06 (housing) can teach the mortgage-model requirement at all.",
    needs: [
      "The model family names and version strings as the publishers themselves print them",
      "The federal housing regulator's own current statement about which models are required or permitted for conforming origination, quoted",
      "The URL of each primary source and the date you read it",
      "Whether any of it is under an announced transition with a future effective date",
    ],
    where: [
      "The model publishers' own product pages, not a comparison site or a lender's blog",
      "The Federal Housing Finance Agency's own announcements and its credit-score pages",
      "The Federal Register, for any rule or notice carrying an effective date",
    ],
  },
  {
    key: "credit-agency-footing",
    course: "credit-decisions",
    lesson: "who-writes-the-rules",
    quote:
      "It will not describe any agency's authorities, funding, staffing or enforcement posture in the present tense",
    title: "Which federal body currently administers and enforces the FCRA, ECOA and TILA rules?",
    severity: "high",
    question:
      "As of the date you check, which federal body is issuing, supervising and enforcing 12 CFR part 1002 (Regulation B), part 1022 (Regulation V) and part 1026 (Regulation Z) for consumer creditors, and are any of those parts stayed, redesignated or transferred? Name the body and quote the source that says so.",
    claim:
      "The course refuses to describe the agency layer in the present tense. It states only that the statutes and regulations it quotes were in force and readable on 28 August 2026, and teaches instead that the statute and regulation layers hold still while the agency layer does not. That refusal is itself the lesson, and it is dated in the text.",
    stakes:
      "This is the load-bearing sourcing decision for the whole MONEY series, not one lesson. The course is built on 15 U.S.C. and 12 CFR precisely because an agency's footing was contested through 2025 and 2026. If a part has been redesignated or a rule stayed, the CITATIONS change even though the rights do not, and every later course in the series inherits the same citations. A wrong part number sends an educator to a rule that is not there.",
    needs: [
      "The issuing body named on each of the three CFR parts, as eCFR currently prints it",
      "Whether any part number has been redesignated, and if so the Federal Register document that did it",
      "Whether the consumer complaint database the recourse material refers to is still operating, and under whom",
      "The date you checked each item",
    ],
    where: [
      "eCFR, for the current authority note on parts 1002, 1022 and 1026",
      "The Federal Register, for any redesignation or stay",
      "The agency's own site, read for what it says about itself rather than for commentary",
    ],
  },
  {
    key: "medical-debt-on-consumer-reports",
    course: "credit-decisions",
    lesson: "what-may-appear-and-for-how-long",
    quote: "this course states the statutory text and nothing about the current practice",
    title: "What medical debt currently appears on consumer reports, and under what rule?",
    severity: "medium",
    question:
      "As of the date you check, what is the current position on medical debt in consumer reports: what does 15 U.S.C. 1681c permit, what rule if any restricts it further, is that rule in force or stayed, and what do the nationwide agencies say their own policies are?",
    claim:
      "The course quotes 15 U.S.C. 1681c(a)(6) verbatim on the naming of a medical information furnisher, then says explicitly, dated 28 August 2026, that whether particular medical debts appear at all has moved repeatedly through both voluntary industry changes and rulemaking, and that it therefore states the statutory text and nothing about current practice.",
    stakes:
      "Medical debt is the most common surprise item in a consumer file and the one a learner is most likely to be looking for. The lesson is honest but thin, and a dated answer would let it say something useful. It also directly affects MONEY-03, which is scheduled to carry medical debt as its strongest original material.",
    needs: [
      "Whether any rule restricting medical debt in consumer reports is currently in force, stayed or vacated, with the Federal Register or court document that settles it",
      "Each nationwide agency's own published policy statement, quoted, with its date",
      "The date you read each one",
    ],
    where: [
      "The Federal Register and the relevant court docket, for the rule's status",
      "Each nationwide consumer reporting agency's own policy page, not a news summary",
      "15 U.S.C. 1681c on uscode.house.gov, to confirm the statute itself has not moved",
    ],
  },
  {
    key: "free-report-frequency-above-the-floor",
    course: "credit-decisions",
    lesson: "getting-your-own-file",
    quote:
      "The floor is the thing to rely on. Anything above it is a bonus that may or may not be there when you look.",
    title: "What do the nationwide agencies currently offer above the one-per-12-months statutory floor?",
    severity: "low",
    question:
      "As of the date you check, how often do the nationwide agencies actually make a file disclosure available through the centralized source, and is that a permanent published policy or a rolling offer? Also confirm the centralized source's current web address and toll-free number from a federal source.",
    claim:
      "The course teaches the statutory floor at 15 U.S.C. 1681j(a)(1)(A) as the reliable fact, notes that the CFPB page it cites says a consumer may be able to view reports more often, and treats that as company practice rather than a right. It cites the CFPB page with BOTH the page's own last-reviewed date of 28 August 2023 and the date this course read it, 28 August 2026.",
    stakes:
      "Low, because the course relies only on the floor and says so. But the cited CFPB page was three years past its own review date when it was read, and the lesson turns on the fact that 12 CFR 1022.136 requires a centralized source WITHOUT naming its address. If the address the federal source publishes ever changes, the lesson's one non-statutory fact changes with it.",
    needs: [
      "The centralized source's current web address and toll-free number, from a federal agency page, quoted with that page's own date",
      "What the centralized source itself currently states about frequency",
      "Whether the CFPB page cited in the lesson has been re-reviewed since 28 August 2023",
    ],
    where: [
      "The federal consumer-facing pages that name the centralized source",
      "The centralized source's own published terms",
      "12 CFR 1022.136 on eCFR, to confirm the rule still does not name an address",
    ],
  },
  {
    key: "il-social-science-2022-edition",
    course: "credit-decisions",
    title:
      "Illinois: did the 2022-23 Social Science edition renumber the SS.CV, SS.EC, SS.G, SS.H and SS.IS codes too?",
    severity: "high",
    question:
      "In ISBE's current Illinois Learning Standards for Social Science (adopted for implementation 2022-2023, document updated 05/05/2025), do the high-school Civics (SS.CV), Economics (SS.EC), Geography (SS.G), History (SS.H) and Inquiry (SS.IS) codes still read as they do in the 2017 printing, or were they renumbered and rewritten the way the Financial Literacy sub-strand was?",
    claim:
      "src/lib/standards/data/il.ts now carries TWO editions at once. Its Financial Literacy framework was re-fetched on 2026-08-28 from the current document and uses SS.9-12.EC.FL codes. Every other Illinois framework in that file still cites the 2017 PDF and its SS.EC.1.9-12 style codes, and was not re-read this pass.",
    stakes:
      "A live risk of showing an Illinois educator a code that no longer exists, which the standards rule treats as worse than showing none. The Financial Literacy strand was renumbered, extended from six standards to nine, and had every standard rewritten, so there is direct evidence the same revision touched other strands. Until this is settled the Illinois file is internally inconsistent about which edition it speaks for.",
    needs: [
      "For each of SS.CV, SS.EC, SS.G, SS.H and SS.IS: whether the code format changed, and whether the verbatim text of the specific codes claimed in il.ts changed",
      "The exact code and text of any claimed standard that moved, so the entries can be corrected rather than deleted",
      "The current document's own version string and the date you read it",
    ],
    where: [
      "https://www.isbe.net/Documents/IL-Social-Science-Standards.pdf, the file ISBE currently links",
      "ISBE's social science standards landing page, for the authoritative current document",
      "The 2017 printing at isbe.net/Documents/SS-Standards-9-12.pdf, for the side-by-side comparison",
    ],
  },
  {
    key: "wv-2520-4-2025-renumbering",
    course: "credit-decisions",
    title: "West Virginia: did the 2025 Policy 2520.4 amendment move the SS.C codes this repo already claims?",
    severity: "high",
    question:
      "Under W. Va. 126CSR44D as filed July 8, 2024 and effective July 1, 2025, do the Civics course standards this repo claims (SS.C.1, SS.C.5, SS.C.13, SS.C.17, SS.C.20, SS.C.26 and the rest in src/lib/standards/data/wv.ts) still carry those code numbers and that verbatim text?",
    claim:
      "wv.ts now carries two editions at once. Its new Appendix A Personal Finance framework was read on 2026-08-28 from the rule effective 2025-07-01. Every SS.C entry above it was transcribed on 2026-07-19 from the 2016 document, which the current rule expressly amends and repeals.",
    stakes:
      "Higher than the Illinois case, because West Virginia's renumbering is PROVEN rather than suspected: the current rule runs the Civics course to SS.C.37 only, SS.C.38 and SS.C.39 no longer exist, and SS.C.30 and SS.C.31 now mean economics standards about business climate and the evolution of currency rather than personal finance. If the lower-numbered codes moved too, this repo is showing West Virginia educators standards under the wrong numbers, which is exactly the failure the standards rule exists to prevent.",
    needs: [
      "For each SS.C code claimed in wv.ts: the code and verbatim text as the current rule prints them",
      "Confirmation of where the Civics course's standards now start and end",
      "Whether the ten Appendix A personal-finance items have since moved again to 126CSR44M, the CTE policy, as the rule anticipates",
    ],
    where: [
      "https://wveis.k12.wv.us/wvboe/policies/policy.php?p=2520.4 — the PDF there is an image-only scan; the same viewer serves a machine-readable DOCX at that URL with the alt parameter set to 1",
      "The West Virginia Secretary of State's CSR reader, for the filed rule and its history",
      "126CSR44M, for whether the personal-finance standards have landed there yet",
    ],
  },
  // ── Banking, and Who Has No Bank (MONEY-02) ───────────────────────────────────────────────────
  // Six checks, which is more than any other single course in the catalog and is CORRECT rather
  // than a smell: this domain runs on figures that reset, agency rules whose status has moved, and
  // one private company's published policy. Every one of them corresponds to a sentence in a lesson
  // that hedges, and none of them may be silently firmed up.
  {
    key: "banking-fdic-2025-survey-edition",
    course: "banking-and-the-unbanked",
    lesson: "the-survey-that-counts",
    quote:
      "The 2023 report is the most recent published edition as of 28 August 2026",
    title: "Has the 2025 FDIC National Survey of Unbanked and Underbanked Households been published?",
    severity: "high",
    question:
      "Has the FDIC published the report of the 2025 wave of its National Survey of Unbanked and Underbanked Households, and if so what are its headline figures? The survey is biennial, the FDIC's own FAQ says a new report is released 'every two years, in the fall of even-numbered years', the 2025 wave was fielded in June 2025, and the 2023 report appeared on 14 November 2024. So a 2025 report was expected in the autumn of 2026, which is after this course was written. Every rate, reason and demographic split in Section 2 comes from the 2023 report and is superseded the day the 2025 one appears.",
    claim:
      "Section 2 names the edition it uses in three separate lessons, states that the 2023 report was the most recent PUBLISHED edition on 28 August 2026, says a 2025 survey has been fielded, and tells the reader to read the new one rather than trusting these figures once it exists. Every figure carries its read date.",
    stakes:
      "High, and it is the single largest maintenance item in the course. Twelve lessons and roughly a hundred quiz questions rest on 2023 figures: the 4.2 and 14.2 per cent rates, Figure 1.8's cited and main reasons, Table 1.1's income and demographic splits, and the money order, check cashing, prepaid and payment app usage series. A stale survey figure presented as current is exactly the failure this domain punishes, and the FDIC's own report is the only thing that can update it.",
    needs: [
      "Whether the 2025 report has been published, and its exact title and publication date",
      "The unbanked, underbanked and fully banked rates and household counts",
      "Figure 1.8's successor: the cited and main reasons for not having an account, both columns",
      "Table 1.1's successor: unbanked rates by income, education, age, disability status, race and ethnicity",
      "Whether any question changed between the 2023 and 2025 waves, which would break the series the way the tax-refund-anticipation-loan question did between 2021 and 2023",
    ],
    where: [
      "fdic.gov/household-survey, the survey's own landing page",
      "The FDIC newsroom press release, which is how the 2023 edition was announced",
      "fdic.gov/household-survey/household-survey-archives, which lists every prior edition",
    ],
  },
  {
    key: "banking-chexsystems-retention-period",
    course: "banking-and-the-unbanked",
    lesson: "getting-and-fixing-your-file",
    quote:
      "the pages read on 28 August 2026 did not state how long an item stays in a file",
    title: "How long does ChexSystems keep an item in a consumer file, and by what authority?",
    severity: "medium",
    question:
      "For how long does ChexSystems retain a reported item in a consumer's file, does Early Warning Services use the same period, and is that period set by the Fair Credit Reporting Act, by the company's own policy, or by both? The FCRA's general obsolescence rule at 15 U.S.C. 1681c bars most adverse items after seven years, but a deposit-screening company's own published retention policy may be shorter, and a widely repeated figure of five years was not found on the company's own pages by this course.",
    claim:
      "Lesson 11 states plainly that the ChexSystems pages read on 28 August 2026 did not state a retention period, and prints no number at all. The lesson teaches the disclosure right, the dispute right and the deletion rule instead.",
    stakes:
      "Medium, and it is the first question a person who has been denied an account asks. Knowing whether an entry disappears in five years or seven changes whether waiting is a strategy at all. A wrong number here would be worse than the current silence, because a learner would plan around it.",
    needs: [
      "The retention period as ChexSystems itself states it, with the page it appears on and the date read",
      "The same for Early Warning Services",
      "Whether the period is the company's policy or a statutory obsolescence limit under 15 U.S.C. 1681c",
      "Whether the period differs by kind of entry, for example an unpaid balance against a suspected-fraud flag",
    ],
    where: [
      "chexsystems.com, its consumer disclosure and frequently-asked-questions pages, opened in a browser",
      "The Early Warning Services consumer site",
      "15 U.S.C. 1681c on uscode.house.gov, for the statutory obsolescence periods",
      "The CFPB's Ask CFPB answers on checking account reporting",
    ],
  },
  {
    key: "banking-cfpb-screening-company-list",
    course: "banking-and-the-unbanked",
    lesson: "getting-and-fixing-your-file",
    quote:
      "its published list of consumer reporting companies, last updated 13 March 2025, showed one company under bank account screening",
    title: "Which companies does the CFPB currently list under deposit account and payments screening?",
    severity: "medium",
    question:
      "The CFPB's Ask CFPB answer on being denied a checking account, last reviewed 18 December 2024, names 'Chex Systems and Early Warning Services'. The CFPB's own List of Consumer Reporting Companies, last updated 13 March 2025, showed a single company under bank account screening when it was read on 28 August 2026. Which is current, and is the shorter list a deliberate narrowing of the published list, an artefact of how the page renders, or a lapse in maintenance? The question matters because the list is the document a consumer is pointed at to find out who holds a file on them.",
    claim:
      "Lesson 11 prints both CFPB pages with their own dates, states that they are not fully consistent, and declines to resolve the disagreement into a single confident sentence. Lesson 9 cites the Ask CFPB answer for the two company names because that is the page that names them.",
    stakes:
      "Medium. A consumer following the published list to find the company holding their file could miss the two companies the agency itself names elsewhere. Smoothing this into one sentence would hide a real inconsistency in a federal consumer resource, which this catalog's rule forbids.",
    needs: [
      "The full current contents of the bank account screening section of the CFPB's List of Consumer Reporting Companies, read in a browser rather than by automated fetch",
      "The list's own last-updated date at the time of reading",
      "Whether the CFPB publishes an explanation of what qualifies a company for inclusion",
      "Whether the Ask CFPB answer still names Chex Systems and Early Warning Services",
    ],
    where: [
      "consumerfinance.gov/consumer-tools/credit-reports-and-scores/consumer-reporting-companies/companies-list/",
      "The downloadable PDF version of the same list, which the CFPB has published in past years",
      "consumerfinance.gov/ask-cfpb, the checking-account-denial answer",
    ],
  },
  {
    key: "banking-cfpb-institutional-status",
    course: "banking-and-the-unbanked",
    lesson: "the-rule-that-was-repealed",
    quote:
      "the CFPB's own regulation pages, which were live and current when this course was written",
    title: "What is the current institutional status of the CFPB, and are the rules this course cites still in force?",
    severity: "high",
    question:
      "Are 12 CFR 1005.17 (the overdraft opt-in), 12 CFR 1005.18 (the prepaid pre-acquisition disclosure), 12 CFR 1030.4 (Truth in Savings account disclosures) and 12 CFR 1002.2 (Regulation B definitions) still in force as published by the Bureau, and is the CFPB still the issuing agency for each? The agency's authorities, staffing and rulemaking have been publicly contested, and this course leans on four of its regulations plus its complaint process and two of its consumer pages. The regulations themselves implement statutes (the Electronic Fund Transfer Act, the Truth in Savings Act, the Equal Credit Opportunity Act) that do not move when an agency does, but the part numbers, the hosting and the complaint route all could.",
    claim:
      "Every CFPB page cited was read on 28 August 2026 and carries its own last-modified or last-reviewed date in the lesson: the regulation pages, the complaint page (modified 15 July 2026), the checking-account answer (reviewed 18 December 2024) and the consumer reporting companies list (updated 13 March 2025). The course states the 2024 overdraft rule as NULLIFIED by Public Law 119-10 rather than describing it in the present tense.",
    stakes:
      "High for the sourcing strategy rather than for any single sentence. If the Bureau's regulation pages stop being maintained or the complaint route changes, the course's citations should move to eCFR and govinfo for the regulation text and name a different complaint route, and the closing lesson's fifth step would need rewriting. The statutory citations (15 U.S.C. 1681, 31 CFR 1020.220, 5 U.S.C. 801) are unaffected either way.",
    needs: [
      "Whether each of the four CFR parts cited is still current and still attributed to the Bureau, checked on eCFR rather than on the Bureau's own site",
      "Whether the CFPB complaint process is still accepting and routing complaints, and its current published response timeframes",
      "Whether any part number has been redesignated to another agency",
      "A fallback complaint or enforcement route to name if the CFPB one is unavailable, for example the FTC, a prudential regulator, or a state attorney general",
    ],
    where: [
      "ecfr.gov, for parts 1002, 1005 and 1030 of title 12, which is the authoritative text",
      "federalregister.gov, for any redesignation or transfer notice",
      "consumerfinance.gov itself, read in a browser with its last-modified dates recorded",
    ],
  },
  {
    key: "banking-ny-check-casher-current-maximum",
    course: "banking-and-the-unbanked",
    lesson: "money-orders-and-check-cashing",
    quote:
      "Its industry letter of 30 January 2023, effective 18 January 2023",
    title: "Is the January 2023 New York check casher fee maximum still the current one?",
    severity: "medium",
    question:
      "Has the New York Department of Financial Services issued a maximum check casher fee superseding the one in its industry letter of 30 January 2023 (effective 18 January 2023: 1.5 per cent on listed government payments, and $1 or 2.2 per cent whichever is greater on all other checks)? The Department published annual maximum-fee letters for many years and then adopted a revised, data-driven methodology under Part 400.11 in January 2023. Whether that methodology produces a new published maximum each year, and whether one has issued since, was not established from the Department's own site by this course.",
    claim:
      "Lesson 17 prints the 2023 rates with both the letter's date and its effective date, names Part 400.11 as the authority, and frames New York as one worked example of a METHOD rather than as a national or current number. Lesson 19 uses those rates in an arithmetic example that carries the same dates.",
    stakes:
      "Medium. New York is the course's only worked state example, and the whole point of using it is to show a learner what a real published cap looks like before sending them to their own regulator. A superseded rate presented with a 2023 date is not dishonest, but a current one would be better teaching, and the arithmetic example in lesson 19 would need updating with it.",
    needs: [
      "Whether an industry letter later than 30 January 2023 sets a maximum check casher fee, and its date and effective date",
      "The current percentages for government assistance checks and for all other checks",
      "Whether the Part 400.11 methodology recalculates the maximum annually or only on the Department's initiative",
      "Whether the greater-of structure ($1 or the percentage) survives in the current letter",
    ],
    where: [
      "dfs.ny.gov, the industry letters index, which lists the maximum check casher fee letters by year",
      "dfs.ny.gov, the check casher licensing pages",
      "Part 400.11 of the Superintendent's Regulations itself",
    ],
  },
  {
    key: "banking-prepaid-pass-through-insurance-conditions",
    course: "banking-and-the-unbanked",
    lesson: "prepaid-cards-and-payment-apps",
    quote:
      "Prepaid cards that are registered with the card issuer are insured when certain FDIC requirements are met",
    title: "What are the 'certain FDIC requirements' that make funds on a prepaid card insured?",
    severity: "medium",
    question:
      "The FDIC's deposit insurance FAQ, read 28 August 2026 and last updated 1 April 2024, says prepaid cards registered with the issuer are insured 'when certain FDIC requirements are met'. What are those requirements, stated by the FDIC? The expected answer involves pass-through coverage of funds held by a third party in a custodial capacity at an insured bank, and the recordkeeping and disclosure conditions attached to it, but this course did not find the FDIC stating those conditions in terms a consumer could check against a particular card.",
    claim:
      "Lesson 18 quotes the FDIC's conditional sentence exactly, points out that it contains two conditions, and says that whether coverage applies to a particular card is a fact about that card's programme rather than about prepaid cards in general. It asserts nothing about pass-through coverage or its conditions.",
    stakes:
      "Medium, and it is the most consequential unresolved item for a learner who is using a prepaid card as their account. The FDIC data quoted in the same lesson shows 44.8 per cent of unbanked prepaid users keeping money on the card, so whether that money is insured, and how a holder can tell, is a live question for a real population rather than a technicality.",
    needs: [
      "The FDIC's own statement of the requirements, from Your Insured Deposits or an FDIC advisory rather than from the FAQ summary",
      "What a consumer can look at on or with a card to tell whether the conditions are met",
      "Whether registration with the issuer is itself one of the requirements or a separate precondition",
      "Whether the same analysis applies to funds stored in a nonbank online payment service account, which the survey treats as a distinct product",
    ],
    where: [
      "fdic.gov, the Your Insured Deposits brochure and the deposit insurance FAQ",
      "12 CFR part 330, for the FDIC's own coverage rules, read on ecfr.gov",
      "Any FDIC advisory or financial institution letter on prepaid and payment app balances",
    ],
  },

  // ── MONEY-03 · Cash Flow, and When the Money Actually Moves ────────────────
  {
    key: "timing-regcc-business-day-juneteenth",
    course: "cash-flow-timing",
    lesson: "business-day-banking-day",
    quote:
      "Regulation CC's definition of a business day does not name June 19, so a day on which a bank is closed for Juneteenth is still a business day for counting an availability deadline",
    title: "Has 12 CFR 229.2's definition of business day been amended to add June 19?",
    severity: "high",
    question:
      "Open the current eCFR text of 12 CFR 229.2 in a browser and read the definition of 'business day' in full. Does its list of excluded dates include June 19, or does it still name only the ten dates (January 1, the third Monday in January, the third Monday in February, the last Monday in May, July 4, the first Monday in September, the second Monday in October, November 11, the fourth Thursday in November, December 25)? If it has been amended, name the Federal Register document that did it and its effective date.",
    claim:
      "The course prints the ten-date list verbatim, prints the eleven legal public holidays of 5 U.S.C. 6103(a) verbatim beside it, and states that June 19 is in the second list and not the first, checked on 28 August 2026 against the Government Publishing Office's Code of Federal Regulations title 12 text and a secondary rendering of the same section. It then draws one conclusion and no more: a day a bank is closed for Juneteenth can be a business day for counting while not being a banking day for depositing.",
    stakes:
      "High, because the comparison is taught twice and used as the course's headline example of why a defined term must be read rather than assumed. Section 1 builds the counting rules on it and Section 5 returns to it when the benefit-payment rule turns out to use the OTHER list. If the Board has since amended the definition, the striking fact becomes a wrong fact in the one place the course asks a learner to trust a close reading.",
    needs: [
      "The current eCFR text of the business-day definition at 12 CFR 229.2, read in a browser, with the date read",
      "The eCFR 'last amended' date shown on that section",
      "If amended, the Federal Register citation and effective date of the amendment",
      "Whether any Board commentary or appendix to part 229 addresses Juneteenth separately",
    ],
    where: [
      "ecfr.gov, title 12, part 229, section 229.2, opened in a browser (automated fetches are refused)",
      "govinfo.gov, the annual Code of Federal Regulations edition for title 12, for a dated snapshot",
      "federalregister.gov, searched for amendments to part 229 since 2021",
    ],
  },
  {
    key: "timing-regcc-threshold-cycle",
    course: "cash-flow-timing",
    lesson: "why-a-schedule-exists",
    quote:
      "the figures in force from 1 July 2025 were $275 for the minimum amount of a day's check deposits that must be available on the next business day, $550 for the amount that must be available for cash withdrawal, and $6,725 for the large-deposit and new-account thresholds",
    title: "Are the Regulation CC dollar thresholds and civil-liability amounts still the 2025 figures, and when is the next adjustment?",
    severity: "high",
    question:
      "Confirm, against the current regulation rather than a summary, the four figures this course prints with a date: the minimum availability amount in 12 CFR 229.10(c)(1)(vii), the cash-withdrawal amount in 229.12(d), the large-deposit and new-account threshold in 229.13, and the civil-liability amounts in 229.21(a) ($125 and $1,350 for an individual action, $672,950 for a class). Then find the date the NEXT five-year adjustment under 12 U.S.C. 4006(f) takes effect, and whether a rule making it has already been published.",
    claim:
      "The course prints each figure with the words 'as read on 28 August 2026' and teaches the adjustment clause itself as the reason no figure in this area should be memorised. It states that the amounts took effect on 1 July 2025 and names the prior figures ($225, $450, $5,525) so a reader can see the direction of travel.",
    stakes:
      "High, and it is a scheduled failure rather than a possible one. The statute guarantees these numbers will move, so the only question is whether the lesson is re-dated before or after they do. An educator planning against a stale threshold is the exact failure the course's own method-not-table rule exists to prevent, and it would be embarrassing for it to happen inside the lesson that teaches the rule.",
    needs: [
      "Each of the four figures as the current regulation prints them, with the section number and the date read",
      "The effective date of the next scheduled adjustment under 12 U.S.C. 4006(f)",
      "Whether a final rule making that adjustment has been published, and its Federal Register citation",
      "Whether the civil-liability amounts in 229.21(a) are adjusted on the same cycle as the availability thresholds",
    ],
    where: [
      "ecfr.gov, title 12, part 229, sections 229.10, 229.12, 229.13 and 229.21",
      "federalregister.gov, searched for 'Availability of Funds and Collection of Checks threshold adjustments'",
      "The Federal Reserve Board's press releases on Regulation CC threshold adjustments",
    ],
  },
  {
    key: "timing-ucc-4-303-state-variation",
    course: "cash-flow-timing",
    lesson: "any-order-convenient",
    quote:
      "the operative rule for you is your own state's enactment of Article 4. The section number is usually the same and the words usually are too",
    title: "Do any states vary U.C.C. 4-303(b), or otherwise constrain posting order on consumer accounts?",
    severity: "medium",
    question:
      "The course quotes the uniform text of U.C.C. 4-303(b) and tells the learner to find their own state's enactment, on the ground that the words are 'usually' the same. Is that hedge right? Identify whether any state has enacted a non-uniform version of section 4-303, and separately whether any state statute, banking regulation or attorney-general settlement constrains the order in which a bank may post consumer transactions. Name any state that does and quote the provision.",
    claim:
      "The course teaches the uniform text as the rule, says explicitly that the code is enacted state by state so the citation that governs an account is a state statute, and sets finding your own state's enactment as the exercise. It surveys no state and publishes no fifty-state table, by the same method-not-table rule it applies to payday statutes.",
    stakes:
      "Medium. The uniform text is the right thing to teach and the arithmetic that follows from it is unaffected either way. But 'usually the same' is a hedge, and if even one state has legislated a posting-order constraint for consumer accounts, that is a genuinely important exception a learner in that state should be pointed at rather than left to discover.",
    needs: [
      "Whether any state has a non-uniform enactment of section 4-303, and the text if so",
      "Whether any state statute or banking rule fixes or constrains consumer posting order",
      "Whether any state attorney-general settlement or consent order does so for a named institution",
      "The date each item was checked",
    ],
    where: [
      "The Uniform Law Commission's enactment map and state variation notes for U.C.C. Article 4",
      "Each candidate state's own code, read on the legislature's site rather than a mirror",
      "State banking department regulations and attorney-general press offices",
    ],
  },
  {
    key: "timing-pay-frequency-distribution",
    course: "cash-flow-timing",
    lesson: "four-different-years",
    quote:
      "it is arithmetic, and it is the most load-bearing arithmetic in this course",
    title: "What is the current published distribution of pay-period lengths among US private establishments?",
    severity: "low",
    question:
      "The Bureau of Labor Statistics publishes a Current Employment Statistics page on the length of pay periods among private establishments, giving the share paid weekly, biweekly, semimonthly and monthly. Retrieve the current figures, the reference period they describe, and the page's own publication or update date, by opening the page in a browser.",
    claim:
      "The course publishes NO distribution figure. It teaches the four annual counts (52, 26, 24, 12) as arithmetic, teaches the mechanism behind each schedule, and says nothing about how common any of them is. The omission is deliberate: the BLS page refused automated retrieval when the lesson was written on 28 August 2026, and the fetch-or-do-not-cite rule then forbids the number.",
    stakes:
      "Low, and it is an enrichment rather than a correction. Nothing in the course depends on the distribution, and the lesson stands without it. But a dated, cited sentence saying which schedule most people are actually on would make the biweekly-against-semimonthly distinction land harder for a reader trying to work out which one applies to them.",
    needs: [
      "The four percentages, with the reference month or period they describe",
      "The exact title of the BLS page and its publication or last-updated date",
      "Whether BLS states any caveat about how the figures are collected",
      "The date you read it",
    ],
    where: [
      "bls.gov/ces/publications/length-pay-period.htm, opened in a browser (automated fetches return 403)",
      "The BLS Current Employment Statistics methods pages, for how the pay period is captured",
      "bls.gov/opub/ted, for any Economics Daily article summarising the same data",
    ],
  },
  {
    key: "timing-ssa-derivative-beneficiary-birth-date",
    course: "cash-flow-timing",
    lesson: "when-a-benefit-arrives",
    quote:
      "Insured individuals born on the 1st through the 10th of the month will be paid on the second Wednesday of each month",
    title: "Whose birth date sets the monthly payment day for a spouse's or child's benefit?",
    severity: "medium",
    question:
      "20 CFR 404.1807 assigns a monthly payment day by reference to a date of birth, and the sentences the course quotes speak of 'insured individuals'. For a benefit paid on another person's earnings record (a spouse, a surviving spouse, a child), whose birth date governs: the beneficiary's own, or that of the worker on whose record entitlement is based? Quote the regulatory text or the agency's own published statement that settles it.",
    claim:
      "The lesson quotes the three bracket sentences and the weekend-and-holiday substitution sentence verbatim, and stops there. It states the rule as the regulation states it and does not address the derivative-beneficiary case in either direction, because it was not resolved verbatim when the lesson was written on 28 August 2026.",
    stakes:
      "Medium, and it lands on exactly the readers this lesson is written for. The point of the lesson is that a benefit date is computable a year ahead by anybody; a reader receiving a spouse's or a child's benefit who computes from the wrong birth date gets a wrong date and, worse, believes the method failed rather than that they applied it wrongly.",
    needs: [
      "The full current text of 20 CFR 404.1807, including any paragraph addressing benefits on another person's record",
      "The agency's own published payment-schedule explanation and which birth date it tells beneficiaries to use",
      "Whether any category of beneficiary is excluded from the birth-date brackets altogether",
      "The date you read each source",
    ],
    where: [
      "ecfr.gov, title 20, section 404.1807, opened in a browser",
      "The Social Security Administration's own published schedule of benefit payment dates",
      "The agency's programme operations manual, for the internal statement of the same rule",
    ],
  },
  {
    key: "timing-instant-payment-reach",
    course: "cash-flow-timing",
    lesson: "instant-and-irrevocable",
    quote:
      "Which institutions offer instant payment, what limits they set, and which competing networks operate alongside the Federal Reserve's service are all things that change",
    title: "How widely available is instant payment to consumers, and what are the current participation figures?",
    severity: "low",
    question:
      "The lesson uses two cited facts from the operator (the live date and the twenty-four-hour business day) and deliberately asserts nothing about reach. Retrieve, with dates: how many financial institutions currently participate in the Federal Reserve's instant payment service, whether the operator publishes a participant list, and whether it publishes any statement about typical consumer send limits. Note also whether the operator describes any competing private instant network in its own materials.",
    claim:
      "The lesson states only that the service went live on 20 July 2023, that it has a twenty-four-hour business day each day of the week including weekends and holidays, and that it settles in near real time on a gross basis, each cited to the operator and dated 28 August 2026. It then tells the learner that participation, limits and hours are a term of their own account documents, and stops.",
    stakes:
      "Low. The lesson's teaching point is the trade between settlement speed and the interval a stop-payment right needs, and that argument is unaffected by how many institutions have joined. A participation figure would make the lesson feel current, which is precisely why it needs a date attached before it goes in.",
    needs: [
      "The current participant count and whether a public participant list exists",
      "Any operator statement about consumer send limits or hours of availability",
      "Whether the operator names competing instant networks in its own published materials",
      "The date each figure was read",
    ],
    where: [
      "federalreserve.gov/paymentsystems, the instant payment service pages",
      "The operator's own service pages for financial institutions, including any published participant list",
      "The Federal Reserve's payments-improvement publications, for dated adoption statements",
    ],
  },
  // ── MONEY-04 · Predatory Products, Priced ─────────────────────────────────────────────────────
  {
    key: "predatory-state-lending-rules-current",
    course: "predatory-products",
    lesson: "find-your-states-rule",
    quote:
      "Both statements are true right now. Neither is the national position, because there is no national position",
    title: "Are the Florida, New York, Virginia and Georgia lending provisions still as quoted?",
    severity: "high",
    question:
      "As of the date you check, do Fla. Stat. 560.404 (the 10 percent fee cap, the 500 dollar face amount, the 7-to-31-day term, the rollover ban and the 60-day grace period), N.Y. Penal Law 190.40 (criminal usury at twenty-five per centum per annum), Va. Code 6.2-2216 (36 percent simple annual on a motor vehicle title loan and its closed list of other charges) and O.C.G.A. 44-12-131 (25 percent per 30-day period for the first 90 days, 12.5 percent thereafter) still read as this course quotes them, and has any of the four been amended or repealed?",
    claim:
      "The course quotes all four verbatim, dates each to 28 August 2026, and uses the Florida and New York pair as its proof that there is no national rule. It prints no national rate or cap anywhere and teaches the method of finding a state's own rule instead, so a change in one of these does not invalidate the method. It does invalidate the specific worked arithmetic in Section 2, which is computed from the Florida and Georgia ceilings.",
    stakes:
      "State small-dollar lending statutes are the most amendment-prone material in the entire MONEY series, and this course leans on four of them to teach that the answers differ. A repealed or amended provision quoted as current would be a false statement of law shown to a learner deciding whether an offer in front of them is lawful, which is the most consequential kind of error this catalog can make.",
    needs: [
      "For each of the four, whether the section is still in force and whether its text has changed",
      "The current fee cap, face-amount ceiling, term range and rollover rule in Fla. Stat. 560.404",
      "The current rate in N.Y. Penal Law 190.40 and its offence grading",
      "The current rate and permitted-charge list in Va. Code 6.2-2216",
      "The current per-period ceilings in O.C.G.A. 44-12-131",
      "The date you read each one",
    ],
    where: [
      "The Florida Senate's own statute pages, flsenate.gov/Laws/Statutes",
      "The New York State Senate's legislation pages, nysenate.gov/legislation/laws/PEN",
      "Virginia Law, law.lis.virginia.gov, for title 6.2 chapter 22",
      "Georgia's published code for title 44 chapter 12, and the Georgia Department of Banking and Finance",
    ],
  },
  {
    key: "predatory-sentinel-current-edition",
    course: "predatory-products",
    lesson: "who-is-targeted-from-the-record",
    quote:
      "was the most recent listed on the Commission's own report index when this course was written",
    title: "Has the FTC published a Consumer Sentinel Network Data Book after the 2024 edition?",
    severity: "medium",
    question:
      "As of the date you check, what is the most recent Consumer Sentinel Network Data Book the FTC lists on its own reports index, and what does that edition say about total reports, fraud reports, identity theft reports through IdentityTheft.gov, total reported losses, and the payment methods behind the largest reported losses? Does it still carry the caution that the data is based on unverified reports and is not a consumer survey?",
    claim:
      "The course states that the 2024 edition, published March 2025, was the most recent listed on the Commission's own report index when it was written on 28 August 2026, and it quotes that edition's figures with that date attached. It quotes the FTC's own caution verbatim before using any figure, and it uses the enforcement record rather than the reports as its primary evidence about who is targeted, so a newer edition changes the numbers rather than the argument.",
    stakes:
      "A course that names a report as the most recent when a newer one exists looks careless in exactly the place it is asking a reader to be careful about evidence. The figures themselves are secondary here, deliberately, but the claim about which edition is current is checkable and should be right.",
    needs: [
      "The most recent Data Book edition and its publication date, from the FTC's own reports index",
      "That edition's totals for consumer reports, fraud reports, identity theft reports and reported losses",
      "Whether the payment-method finding about bank transfers and cryptocurrency still holds",
      "The exact wording of its caution about unverified reports, quoted",
      "The date you checked",
    ],
    where: [
      "ftc.gov/policy/reports, filtered to Consumer Sentinel Network",
      "The Data Book PDF itself, for the caution and the figures",
      "The FTC press release accompanying the current edition",
    ],
  },
  {
    key: "predatory-irs-free-preparation-thresholds",
    course: "predatory-products",
    lesson: "the-refund-loan-and-the-transfer",
    quote: "89,000 dollars on the page read on **28 August 2026**",
    title: "What are the current IRS Free File and VITA eligibility figures, and does Free File still ban RAL sales?",
    severity: "medium",
    question:
      "As of the date you check, what adjusted gross income threshold applies to IRS Free File guided tax software, does Free File Fillable Forms still carry no income limit, what income figure does the VITA page state, does TCE still name people aged 60 and over, and does the Free File program still list the selling of bank products such as a refund anticipation loan among its prohibitions?",
    claim:
      "The course states 89,000 dollars for guided software and generally 69,000 dollars or less for VITA, both dated 28 August 2026 in the lesson, names TCE as particularly serving people aged 60 and over, and quotes the Free File prohibition on selling bank products such as a refund anticipation loan. The prohibition is the load-bearing citation, because it is the tax authority naming this course's subject and excluding it from its own free channel.",
    stakes:
      "The two income figures reset with the filing season, so they will be wrong within a year and the lesson dates them for exactly that reason. The prohibition is the sentence that would matter most if it changed: it is quoted as evidence that the IRS treats the product as something to keep out of a free channel, and the argument in the lesson leans on it.",
    needs: [
      "The current guided-software adjusted gross income threshold on the IRS Free File page",
      "Whether Free File Fillable Forms still has no income limit",
      "The current VITA income figure and the TCE age description",
      "Whether the Free File benefits list still names refund anticipation loans among prohibited bank products, quoted",
      "The date you read each page",
    ],
    where: [
      "irs.gov/filing/irs-free-file-do-your-taxes-for-free",
      "irs.gov/individuals/free-tax-return-preparation-for-qualifying-taxpayers",
    ],
  },
  {
    key: "predatory-reg-e-authority-and-parts",
    course: "predatory-products",
    lesson: "unauthorized-has-a-definition",
    quote: "12 CFR part 1005",
    title: "Is Regulation E still at 12 CFR part 1005, and are 1005.2(m), 1005.6 and 1005.11 unchanged?",
    severity: "high",
    question:
      "As of the date you check, is Regulation E still codified at 12 CFR part 1005 under the same issuing authority, and do 1005.2(m), 1005.3(c), 1005.6, 1005.11 and 1005.17 still read as this course quotes them? Have the official interpretations to 1005.2(m) on a furnished access device and on a device obtained through fraud or robbery been amended? Are the corresponding Regulation Z provisions at 12 CFR 1026.2(a)(16) and 1026.12 unchanged?",
    claim:
      "The course quotes all of these verbatim, read on 28 August 2026, and it deliberately does not describe any agency's current footing in the present tense, for the reason MONEY-01 established and filed as its own check. The entire fifth section, which the course calls the most useful thing it teaches, is built on the 1005.2(m) definition and the machinery that attaches to it.",
    stakes:
      "Higher than the corresponding MONEY-01 check, because this course does not merely cite these parts, it teaches the difference between two outcomes that turn on a single definition. If a part has been redesignated the citations change even though the rights do not, and a learner sent to a rule that is not there loses the one thing this course was written to give them. If the definition or the commentary has been amended, the central lesson needs rewriting rather than renumbering.",
    needs: [
      "The current part number and issuing authority for Regulation E, as eCFR prints it",
      "The current text of 1005.2(m) with its three exclusions",
      "The current text of the official interpretations to 1005.2(m), on a furnished device and on fraud or robbery",
      "The current liability tiers in 1005.6 and clocks in 1005.11",
      "Whether 12 CFR 1026.2(a)(16) and 1026.12(b) and (c) are unchanged",
      "The date you read each one",
    ],
    where: [
      "eCFR, for parts 1005 and 1026 and the supplement I interpretations",
      "The Federal Register, for any redesignation, stay or amendment",
    ],
  },
  {
    key: "predatory-mla-cap-and-coverage",
    course: "predatory-products",
    lesson: "one-class-congress-capped",
    quote: "may not impose an MAPR greater than 36 percent in connection with an extension of consumer credit",
    title: "Is the Military Lending Act cap still 36 percent, and is its coverage unchanged?",
    severity: "medium",
    question:
      "As of the date you check, does 10 U.S.C. 987(b) still cap the annual percentage rate at 36 percent for covered borrowers, does 32 CFR 232.4(b) still state the same figure as an MAPR limit, are the charges 232.4(c) sweeps into the MAPR unchanged, and are the exclusions at 232.3(f) (residential mortgages, purchase-money vehicle loans, credit secured by the personal property it finances) unchanged?",
    claim:
      "The course quotes the statute and the rule verbatim, read on 28 August 2026, and builds a whole lesson on the fact that Congress capped this price for one named class and not for anyone else. The purchase-money exclusion is load-bearing a second time, in the title-lending lesson, because it is what separates a car loan from a loan against a car already owned.",
    stakes:
      "This is the course's sharpest single teaching object and it is quoted three times: in Section 1, in the title-lending lesson, and in the targeting lesson. The figure has been stable, but the Department of Defense rule's coverage has been litigated and interpreted before, and a changed exclusion would make the car-loan-against-title-loan distinction wrong rather than merely stale.",
    needs: [
      "The current text of 10 U.S.C. 987(b), (e) and (i)(1)",
      "The current text of 32 CFR 232.4(b) and the charge list at 232.4(c)",
      "The current exclusions at 32 CFR 232.3(f), quoted",
      "The date you read each one",
    ],
    where: [
      "eCFR, for 32 CFR part 232",
      "The Office of the Law Revision Counsel or Cornell's LII, for 10 U.S.C. 987",
      "The Federal Register, for any amendment to part 232",
    ],
  },
  {
    key: "predatory-path-act-refund-hold",
    course: "predatory-products",
    lesson: "a-refund-is-money-already-owed",
    quote: "shall be made before the 15th day of the second month following",
    title: "Does 26 U.S.C. 6402(m) still hold refunds on returns claiming the section 24(d) and section 32 credits?",
    severity: "medium",
    question:
      "As of the date you check, is 26 U.S.C. 6402(m) still in force with the same date and the same two named credits, and has the IRS published anything that changes when refunds on such returns are actually issued?",
    claim:
      "The course quotes the subsection, names the section 24(d) and section 32 credits, and builds the whole refund-products section on the observation that federal law holds the refunds of a defined population and creates a defined window that a product is sold into. It is careful to call the hold an anti-fraud measure with a stated purpose rather than a scandal.",
    stakes:
      "If the hold were repealed or narrowed, the section's central mechanism would be describing a market condition that no longer exists, and the lesson's claim that the product responds to a statute rather than to chance would stop being supportable.",
    needs: [
      "Whether 26 U.S.C. 6402(m) is still in force and whether its date or its named credits have changed",
      "Any IRS publication on when refunds claiming those credits are issued in the current filing season",
      "The date you checked",
    ],
    where: [
      "The Office of the Law Revision Counsel or Cornell's LII, for 26 U.S.C. 6402",
      "irs.gov, for the current filing season's refund timing guidance",
    ],
  },
  // ── MONEY-06 · housing-decisions ────────────────────────────────────────────
  // Six checks. Every one of them is a hedge that is IN the lessons, in prose, with a date beside
  // it, because this course refuses to print anything on an annual or contested cycle without one.
  {
    key: "housing-pave-action-plan-host",
    course: "housing-decisions",
    lesson: "valuation-is-a-covered-transaction",
    quote:
      "As of 28 August 2026 its published web host did not resolve, so the course does not cite an address it could not open.",
    title: "Where does the 2022 federal appraisal-bias action plan now live, if anywhere?",
    severity: "medium",
    question:
      "The Interagency Task Force on Property Appraisal and Valuation Equity published an action plan in March 2022 at a hud.gov subdomain. As of the date you check, does that subdomain resolve, has the document moved to a permanent archive with a stable address, and is the task force itself still constituted? Give the address you actually opened and the date you opened it.",
    claim:
      "The lesson says, in prose and with the date attached, that the plan exists, that its published host did not resolve on 28 August 2026, and that the course therefore cites the statutes, HUD's regulation and the 2024 interagency automated valuation model rule instead. It cites no address for the plan at all.",
    stakes:
      "This is the strongest secondary evidence in the section on valuation and the only place the course reaches for a document rather than a statute. If the plan is retrievable at a stable address, the lesson gains a real federal finding about the extent of appraisal bias; if it is genuinely gone, the lesson's refusal is the right answer and should be left as it stands. Either way a dead link must never be printed.",
    needs: [
      "Whether the original address resolves, and what it returns",
      "A stable archived or relocated copy, if one exists, with the exact URL you opened",
      "Whether the task force is currently constituted, from a federal source rather than commentary",
      "The date you checked",
    ],
    where: [
      "The federal agency sites named as task force members, for a relocated copy",
      "A permanent web archive, for a byte-faithful snapshot of the original address",
      "The Federal Register, for anything that established or dissolved the task force",
    ],
  },
  {
    key: "housing-mortgage-interest-cap-current",
    course: "housing-decisions",
    lesson: "build-the-comparison-yourself",
    quote: "Read on 28 August 2026, and dated because this provision has been amended more than once.",
    title: "What is the acquisition indebtedness cap in 26 U.S.C. 163(h) for the current tax year?",
    severity: "high",
    question:
      "As of the date you check, what does 26 U.S.C. 163(h)(3) currently provide: what is the acquisition indebtedness limitation, does the substitution for taxable years beginning after 2017 still apply, does it carry a sunset, and is home equity indebtedness currently deductible? Quote the current statutory text and give the date you read it.",
    claim:
      "The lesson quotes 163(h)(1) disallowing personal interest, 163(h)(3)(A) defining qualified residence interest, 163(h)(3)(B)(ii)'s 1,000,000 and 500,000 figures, and the paragraph substituting 750,000 and 375,000 for taxable years beginning after 2017, all read on 28 August 2026 and dated in the lesson. It teaches the deduction as strictly conditional (itemising, income rather than tax, and the cap) and never as a discount on the interest rate.",
    stakes:
      "High, because this is the one place in the course where a wrong figure would change a household's arithmetic rather than merely their vocabulary. The provision has been amended more than once and has carried sunset language in the past. The durable teaching (three conditions, not a discount) survives any change; the numbers do not.",
    needs: [
      "The current text of 26 U.S.C. 163(h)(3)(B)(ii) and of any paragraph substituting different figures",
      "Whether any substitution carries an expiry, and the statute or public law that set it",
      "Whether home equity indebtedness is currently within the definition",
      "The date you read the section",
    ],
    where: [
      "uscode.house.gov, for the current text with its amendment notes",
      "The public law that last amended section 163, for any effective and sunset dates",
    ],
  },
  {
    key: "housing-section-121-exclusion-current",
    course: "housing-decisions",
    lesson: "the-costs-of-getting-in-and-out",
    quote: "Those figures were read on 28 August 2026 and are dated for a reason.",
    title: "Are the 26 U.S.C. 121 exclusion amounts and the two-of-five-years test still as quoted?",
    severity: "medium",
    question:
      "As of the date you check, does 26 U.S.C. 121 still cap the excluded gain at 250,000 dollars with 500,000 dollars substituted on a qualifying joint return, and does subsection (a) still require ownership and use as a principal residence for periods aggregating two years or more within the five-year period ending on the date of sale? Quote the current text and give the date.",
    claim:
      "The lesson quotes 121(a), 121(b)(1) and 121(b)(2)(A) verbatim as read on 28 August 2026, and then says the durable part is the SHAPE rather than the figures: a rule keyed on two years out of five is telling you these decisions are counted in years.",
    stakes:
      "Medium. The lesson's argument survives a change to the dollar figures because it leans on the holding-period condition, but a stale number quoted verbatim from a statute is still a wrong number in a teacher's hands, and this one is used to justify the whole treatment of the horizon.",
    needs: [
      "The current text of 26 U.S.C. 121(a), (b)(1) and (b)(2)(A)",
      "Whether the amounts are indexed or fixed",
      "The date you read the section",
    ],
    where: [
      "uscode.house.gov, for the current text with amendment notes",
      "The IRS publication for the relevant year, only to confirm the statutory figures, never as the primary citation",
    ],
  },
  {
    key: "housing-avm-rule-status",
    course: "housing-decisions",
    lesson: "valuation-is-a-covered-transaction",
    quote:
      "published at 89 Fed. Reg. 64538 on 7 August 2024 and effective 1 October 2025",
    title: "Is the interagency automated valuation model rule in force as published, and where is it codified?",
    severity: "medium",
    question:
      "As of the date you check, is the quality control standards rule for automated valuation models in force as published at 89 Fed. Reg. 64538, has its effective date moved, has it been stayed or amended, and what CFR section does each of the six agencies codify it at? Name the sections and the date you checked.",
    claim:
      "The lesson states the Federal Register citation, the 7 August 2024 publication date, the 1 October 2025 effective date, the six adopting agencies, and quotes the five quality control factors including the nondiscrimination factor, all read from the Bureau's own final rule page on 28 August 2026. It gives no CFR section for the rule, because it did not confirm one.",
    stakes:
      "The nondiscrimination quality control factor is the load-bearing point of the lesson's last third: it is the evidence that the obligation followed the decision when the decision moved from a person to a model. A stayed or amended rule would not change the lesson's argument, but it would change what the course is telling an educator is currently in force, and the course states an effective date in the past tense.",
    needs: [
      "The rule's current status, from the Federal Register or the adopting agencies",
      "The CFR section each agency codified it at",
      "Whether the effective date was changed after publication",
      "The date you checked",
    ],
    where: [
      "The Federal Register document itself, for the codification table",
      "Each adopting agency's own rule page, read for what it says rather than for commentary",
    ],
  },
  {
    key: "housing-arizona-tenancy-currency",
    course: "housing-decisions",
    lesson: "the-deposit-and-the-clock",
    quote:
      "What is true in Arizona is not true in your state unless your state says so.",
    title: "Are A.R.S. 33-1321 and 33-1368 still as quoted, and has the Act been amended since?",
    severity: "medium",
    question:
      "As of the date you check, does A.R.S. 33-1321 still cap security at one and one-half month's rent, still provide that a fee not designated nonrefundable is refundable, and still allow fourteen days excluding weekends and legal holidays for the itemized list? Does A.R.S. 33-1368 still set five days for both the health-and-safety notice and the nonpayment notice? Quote the current text and give the date.",
    claim:
      "The lessons quote both sections verbatim as read on the Arizona State Legislature's own site on 28 August 2026, and label Arizona throughout as ONE state used as a worked example rather than as a national rule. The transferable teaching is a four-question shape (cap, labelling, deadline, remedy) that survives any amendment to the numbers.",
    stakes:
      "Arizona is the only state whose tenancy figures this course prints, and it prints them as quotations. A learner in Arizona would rely on them directly. The course's method survives an amendment; the quoted numbers do not, and a quotation that no longer matches the statute is the worst kind of error because it looks authoritative.",
    needs: [
      "The current text of A.R.S. 33-1321 subsections A, B, C and D",
      "The current text of A.R.S. 33-1368 subsections A and B",
      "Any session law amending either since 2026-08-28",
      "The date you read each section",
    ],
    where: [
      "azleg.gov, the legislature's own current text of Title 33 chapter 10",
      "The Arizona session laws, for any amendment adopted after the fetch date",
    ],
  },
  {
    key: "housing-georgia-gse-version-line",
    course: "housing-decisions",
    // No lesson: this hedge lives in src/lib/standards/data/ga.ts, not in a lesson body.
    title: "Which edition date is correct for the Georgia Personal Finance and Economics standards?",
    severity: "low",
    question:
      "The PDF at the GaDOE lor2 address this catalog cites carries a page footer reading \"December 9, 2021\" and a course header reading \"Course Code: 45.061 effective beginning the 2022-2023 school year\". This repo's framework `version` string additionally says \"Approved June 9, 2016 · Updated November 2, 2023\", which is not printed on the document. Which is the edition a Georgia teacher is answerable to, and where is that stated?",
    claim:
      "The Georgia framework's `version` is left exactly as the earlier pass recorded it, and the discrepancy is written into a comment above the SSEPF1 entry rather than resolved by guessing. Nothing in the catalog asserts an approval or update date that the document itself shows.",
    stakes:
      "Low for a learner and real for a teacher: the version line is provenance rendered on the standards finder, and a date that is not on the document is the sort of small wrongness this module exists to prevent. It affects every Georgia claim in the file, not only the housing one.",
    needs: [
      "The edition date GaDOE itself publishes for course 45.061 on its standards page",
      "Whether the lor2 PDF is the current file that page links to",
      "The date you checked",
    ],
    where: [
      "The GaDOE social studies standards page, read for what it links and what it calls the edition",
      "The lor2 PDF's own footer and header, which is what this repo transcribed",
    ],
  },
  // ── MONEY-05 · Taxes, and the Money Taken Before You See It ───────────────────────────────────
  //
  // FIVE OF THESE SIX ARE SCHEDULED RATHER THAN SPECULATIVE, in the sense MONEY-03's Regulation CC
  // threshold check established: the underlying figure is guaranteed to move on a stated cycle, so
  // the only question is whether the lesson is re-dated before or after it does. Tax is the worst
  // domain in the catalog for this, because almost every number resets by revenue procedure in the
  // autumn for the following year, and because two of the three free-filing routes moved during the
  // eighteen months before the course was written. Every figure in the course already carries its
  // date and its source in the lesson, so nothing here is currently WRONG; these exist so the
  // re-dating happens on purpose.
  {
    key: "taxes-annual-figures-cycle",
    course: "taxes-and-filing",
    lesson: "when-a-credit-is-disallowed",
    quote:
      "The amount actually in force is not 1,000 dollars. It has been set for years at a time by temporary amendments layered over subsection (a), and the refundable portion has its own separately-legislated figure.",
    title: "ANNUAL: which revenue procedure sets this year's brackets, standard deduction and credit amounts?",
    severity: "high",
    question:
      "For the tax year now being filed, find the IRS revenue procedure that sets the inflation-adjusted amounts and note its number and date. Then record four things from it or from the current revision of Publication 17: the basic standard deduction by filing status, the section 24 child tax credit amount actually in force and its refundable ceiling, the section 32 earned income credit maximum and its investment-income limit, and the section 6012 filing thresholds by status and age.",
    claim:
      "The course prints NONE of these figures and says so repeatedly. It teaches the method instead: find the current Publication 17 and note its year, find the annual revenue procedure and cite it by number, write the tax year beside every figure, and re-check anything older than one filing season. Section 3 lesson 3 uses 26 U.S.C. 24(a)'s printed 1,000 dollars as proof that even the Code's own operative sentence can be stale.",
    stakes:
      "Nothing in the course is wrong today, because it deliberately asserts none of these numbers. The stakes run the other way: a teacher or a learner who wants a worked example with real figures has to leave the course to get one, and the answers here would let the lessons demonstrate the method ON a real current figure instead of only describing it. This is also the check that proves the method works, so answering it once is worth more than the figures themselves.",
    needs: [
      "The revenue procedure number, its date, and the tax year it governs",
      "The revision year printed on the cover of the current Publication 17",
      "The section 24 amount actually in force, and whether it still differs from the 1,000 dollars printed in subsection (a)",
      "The section 32 maximum credit and investment-income limit for that year",
    ],
    where: [
      "irs.gov, searched for the annual inflation adjustments revenue procedure for the tax year",
      "IRS Publication 17 for the tax year, downloaded from irs.gov rather than a mirror",
      "uscode.house.gov or law.cornell.edu for 26 U.S.C. 24 and 32, to see whether the printed text has caught up",
    ],
  },
  {
    key: "taxes-direct-file-status",
    course: "taxes-and-filing",
    lesson: "direct-file-and-what-happened",
    quote:
      "What this course will not do is state a present-tense status for the program on the day you happen to be reading. Two documents on two dates are evidence about those dates.",
    title: "Is Direct File available for the filing season now open, and did the supplemental report appear?",
    severity: "high",
    question:
      "As of the date you check: does the IRS publish a Direct File option for the filing season now open, and what does the agency's own page or filing-season news release say? Separately, has Treasury published the supplemental report on the future of free tax filing that Step 4 of its 2 October 2025 report promised, and has the Free Filing Modernization Summit it proposed been convened?",
    claim:
      "The lesson quotes Treasury's Report on the Replacement of Direct File (2 October 2025), including its Step 2 sentence suspending the program, and records that the IRS release opening the 2026 filing season on 26 January 2026 names Free File and the volunteer programs and does not mention Direct File. It states no present-tense status and draws no conclusion about any later date.",
    stakes:
      "High, and it is the reason the lesson is written the way it is. A free filing route was designed, launched in twelve states, expanded to twenty-five, used for 296,531 accepted returns, evaluated in a report to Congress and suspended inside about eighteen months. A course that asserted its status would be wrong within a year. If the program has returned, been replaced, or been formally ended by statute, the lesson can say so with a date instead of teaching only the method for checking.",
    needs: [
      "What the IRS's own filing pages say about Direct File, quoted, with the date read and the page's own review date",
      "Whether Treasury's supplemental report on the future of free tax filing has been published, and its date",
      "Whether the Free Filing Modernization Summit was convened, and what it produced",
      "Any statute enacted after Public Law 119-21 that speaks to a government-run filing service",
    ],
    where: [
      "irs.gov filing pages and the newsroom release opening the current filing season",
      "home.treasury.gov, searched for the supplemental report on free tax filing",
      "congress.gov, for any enactment after Public Law 119-21 section 70607",
    ],
  },
  {
    key: "taxes-free-file-limit-cycle",
    course: "taxes-and-filing",
    lesson: "free-file-is-a-contract",
    quote:
      "Neither figure is the answer to your question, because your question is about a filing season neither of them may cover.",
    title: "ANNUAL: what is the current Free File income limit, and is the ninth memorandum still in force?",
    severity: "high",
    question:
      "For the filing season now open, what adjusted gross income limit does the IRS Free File page state for the guided software, and what is the page's own review date? Separately, is the Ninth Memorandum of Understanding between the IRS and Free File, Inc. still in force, and does Article 3.1 still express the annual limit as a target of making approximately 70 percent of taxpayers eligible?",
    claim:
      "The lesson gives two dated readings of one moving number: Treasury records an adjusted gross income limit of 84,000 dollars for tax year 2024, and the IRS Free File page read on 29 August 2026 (agency review date 12 June 2026) states 89,000 dollars or less. It teaches that the limit is derived from a percentile in a private contract rather than from a statute, and that the memorandum was extended by an amendment dated 30 April 2024 to run to 31 October 2029.",
    stakes:
      "High, and scheduled rather than possible. The limit is contractually recalculated every year, so the only question is whether the lesson is re-dated before or after it moves. The 70 percent mechanism is the more important half: if the memorandum has been renegotiated on a different basis, the lesson's central teaching point about why the number moves stops being true, and a learner sent to reason about a percentile would be reasoning about the wrong thing.",
    needs: [
      "The current adjusted gross income limit for Free File guided software, with the page's review date and the date you read it",
      "Whether the ninth memorandum, as amended 30 April 2024, is still the operative agreement",
      "Whether Article 3.1 still frames the limit as an approximately 70 percent eligibility target",
      "Whether Free File, Inc. is still the IRS's counterparty",
    ],
    where: [
      "irs.gov/filing/irs-free-file-do-your-taxes-for-free, read in a browser with the review date noted",
      "irs.gov/pub/irs-efile, for the memorandum of understanding and any later addendum",
      "home.treasury.gov, for any report describing a renegotiated arrangement",
    ],
  },
  {
    key: "taxes-vita-threshold-cycle",
    course: "taxes-and-filing",
    lesson: "the-volunteer-programs",
    quote:
      "Two figures, two dates, one moving number, and the same method as the last lesson: read the agency's page and write down when you read it.",
    title: "ANNUAL: what is the current VITA income threshold, and are the program scale figures still right?",
    severity: "medium",
    question:
      "For the filing season now open, what adjusted gross income figure does the IRS state for VITA eligibility, and what is the page's review date? Are the TCE age criterion and the scope exclusions unchanged? And has Treasury or the IRS published newer counts of partner organizations, volunteers, sites, eligible tax units and returns prepared than the tax year 2024 figures the lesson uses?",
    claim:
      "The lesson gives the VITA threshold twice with dates: 67,000 dollars for tax year 2024 from Treasury's report, and 69,000 dollars or less from the IRS page read on 29 August 2026 with an agency review date of 12 August 2026. Its scale figures are all attributed to Treasury's October 2025 report: nearly 3,100 partner organizations, more than 76,000 volunteers, more than 5,600 VITA sites and more than 3,900 TCE sites, and approximately 67 million tax units eligible for VITA against about 1.6 million returns filed as of 1 August 2025.",
    stakes:
      "Medium, and the eligibility-against-use gap is the part worth keeping current. The lesson's strongest claim is that roughly 67 million eligible tax units produced about 1.6 million returns, and that the constraint is therefore capacity and awareness rather than eligibility. If a newer edition changes that ratio materially, the argument changes with it, and the argument is what a teacher will carry away from the lesson.",
    needs: [
      "The current VITA adjusted gross income figure, with the page's review date and the date you read it",
      "Whether the TCE age-60 priority and the named scope exclusions are unchanged",
      "Any newer published counts of sites, volunteers, eligible tax units and returns prepared",
      "Whether the section 7526A matching grant program's funding has changed materially",
    ],
    where: [
      "irs.gov/individuals/free-tax-return-preparation-for-qualifying-taxpayers, read in a browser",
      "home.treasury.gov, for any later report carrying updated program figures",
      "irs.gov newsroom, for the annual VITA and TCE grant award announcement",
    ],
  },
  {
    key: "taxes-path-practical-refund-date",
    course: "taxes-and-filing",
    lesson: "the-fifteenth-day-of-the-second-month",
    quote:
      "The practical date is published fresh each year, it sits weeks after the statutory floor, and quoting last year's is exactly the mistake this course exists to prevent.",
    title: "ANNUAL: what date has the IRS published for EITC and ACTC refunds this filing season?",
    severity: "medium",
    question:
      "For the filing season now open, what date does the IRS publish for when most earned income credit and additional child tax credit refunds will be available, and in which news release does it appear? Confirm also that 26 U.S.C. 6402(m) is unamended and still names section 24 by reason of subsection (d) and section 32, and that the IRS still states the hold reaches the entire refund.",
    claim:
      "The lesson quotes 6402(m) in full, explains that the formula produces 15 February for a calendar-year filer, and separately records that for the 2026 filing season, opened 26 January 2026, the IRS expected most affected refunds to be available by 2 March 2026 for direct-deposit filers with no other issues, citing release IR-2026-12. It states in terms that the statutory floor is not the practical date.",
    stakes:
      "Medium. The statutory sentence is durable and is the load-bearing half of the lesson; the practical date is the half that expires. A stale practical date would not make the mechanism wrong, but it would put a wrong number in front of exactly the households the lesson is about, and those are the households for whom a two-week difference is a real one.",
    needs: [
      "The date the IRS published for affected refunds this season, quoted, with the release number and date",
      "Confirmation that 26 U.S.C. 6402(m) has not been amended, and its current text",
      "Whether the IRS still states that the hold applies to the entire refund",
      "The date the current filing season opened",
    ],
    where: [
      "irs.gov newsroom, the release opening the current filing season",
      "The IRS page on when to expect a refund if the earned income or additional child tax credit was claimed",
      "law.cornell.edu or uscode.house.gov for the current text of 26 U.S.C. 6402",
    ],
  },
  {
    key: "taxes-audit-data-currency",
    course: "taxes-and-filing",
    lesson: "the-disparity-and-the-method",
    quote:
      "Those are figures for stated tax years, from a stated dataset, in a dated report. They are not a claim about the current filing season, and this course does not make one.",
    title: "Have newer audit-rate figures or a follow-up to the GAO equity recommendations been published?",
    severity: "medium",
    question:
      "Has the Government Accountability Office, the Treasury Inspector General for Tax Administration, or the IRS Data Book published individual audit-rate figures more recent than the tax year 2010 to 2019 series in GAO-22-104960? And what is the implementation status of the six recommendations in GAO-24-106126, in particular the one asking the IRS to calculate the no-change rate without default audits?",
    claim:
      "Section 6 uses GAO-22-104960 (May 2022) for the audit-rate trend, stating the dataset and the tax years, and GAO-24-106126 (April 2024) for the mechanism, including the 78 percent figure GAO attributes to the academic study, the no-change rate including default audits, the officials' statement about differential response rates, the sex-varying risk scores dating from 2001, and the six recommendations the IRS agreed to. The published study is cited as Elzayn et al. (2025), Quarterly Journal of Economics 140(1), 113-163, with the 2023 working paper cited for the abstract and the methodology.",
    stakes:
      "Medium, and it is about the closing argument rather than about a figure. The lesson's point is that a metric choice produced a measured disparity and that GAO recommended changing the metric. If those recommendations have been implemented, the lesson can end on what changed rather than on what was recommended, which is a materially better ending and a more useful one for a teacher. If newer audit-rate data exists, the trend figures should be re-dated rather than left at 2019.",
    needs: [
      "Any GAO, TIGTA or IRS Data Book publication with individual audit rates by income later than tax year 2019",
      "The recommendation status page for GAO-24-106126, with the date read",
      "Whether the IRS has published a change to how the no-change rate is calculated",
      "Whether the Dependent Database risk scores GAO said dated from 2001 have been updated",
    ],
    where: [
      "gao.gov/products/gao-24-106126, which carries a recommendations status section",
      "gao.gov, searched for later reports on individual audit rates",
      "irs.gov, the annual Data Book examination coverage tables",
      "treasury.gov/tigta, for reports on refundable credit examinations",
    ],
  },
  // ── MONEY-07 · retirement-accounts ──────────────────────────────────────────
  // Seven checks. FIVE OF THEM ARE ANNUAL-CYCLE CHECKS and should be treated as a standing calendar
  // rather than as one-off questions: the contribution figures, the survey editions and the
  // inflation-adjusted penalty all reset on their own schedules, and this course was written to
  // print a method rather than a table precisely so that a stale answer degrades a date rather than
  // a rule. Mark the annual ones as recurring the way MONEY-03 filed the Regulation CC threshold.
  {
    key: "retirement-annual-contribution-figures",
    course: "retirement-accounts",
    lesson: "a-base-amount-and-an-adjustment",
    quote:
      "The operative figures are published each year by the tax authority in an annual notice, alongside the phase-out ranges from the previous lesson.",
    title: "ANNUAL: what are this year's elective deferral, catch-up, IRA and phase-out figures?",
    severity: "high",
    question:
      "For the current tax year, what are the operative elective deferral limit, the age 50 catch-up amount, the individual retirement contribution deductible amount and its catch-up, and the active-participant deduction phase-out ranges by filing situation? Name the annual notice or revenue procedure that sets them, by number, and give the date you read it.",
    claim:
      "The course prints NO current figure. It prints only the statutory base amounts (26 U.S.C. 402(g)(1)(B)'s 15,000, 219(b)(5)(A)'s 5,000 and the 1,000 catch-up), labels each as a base rather than a limit, and teaches the adjustment mechanism (base period, index, rounding to the next lowest multiple of 500 or the lower multiple of 100) plus the instruction to read the year's published notice.",
    stakes:
      "This is the check that has to be re-run every year for as long as the course exists, and the course was designed so that leaving it open costs nothing: no lesson depends on a current figure. The stake is the opposite one. If a later editor ever decides to help by printing this year's numbers, the course acquires the exact defect the method was written to avoid, and this entry is the record of why it does not.",
    needs: [
      "The number of the annual notice or revenue procedure for the year in question",
      "Each operative figure as that document prints it",
      "Confirmation that the statutory base amounts and rounding rules quoted in the lesson are unchanged",
      "The date you read the notice",
    ],
    where: [
      "The tax authority's own annual notice on cost-of-living adjustments for pension plans",
      "26 U.S.C. 402(g) and 219(b)(5) on the Legal Information Institute, for the base amounts",
    ],
  },
  {
    key: "retirement-erisa-penalty-inflation-adjusted",
    course: "retirement-accounts",
    lesson: "the-plan-document-governs",
    quote:
      "the 100 dollars is the figure printed in the statute; federal civil penalties of this kind are adjusted for inflation on their own schedule, so the operative daily maximum is higher than the printed one and must be looked up rather than assumed",
    title: "ANNUAL: what is the current inflation-adjusted daily maximum under ERISA section 502(c)(1)?",
    severity: "medium",
    question:
      "What is the current maximum daily amount a court may impose under 29 U.S.C. 1132(c)(1) for an administrator's failure to furnish requested documents, as adjusted under the Federal Civil Penalties Inflation Adjustment Act? Give the regulation or notice that states it, the effective date, and the date you read it.",
    claim:
      "The lesson quotes the statute's printed figure of up to 100 dollars a day, says in the same paragraph that the operative maximum is higher because penalties of this kind are inflation-adjusted, and dates the reading to 29 August 2026. It asserts no adjusted figure.",
    stakes:
      "Medium. A learner who quotes the printed 100 dollars to a plan administrator is understating their own position, and a learner who quotes a stale adjusted figure is asserting a number that has moved. The lesson currently does neither, which is safe but incomplete: filling this in makes the paragraph genuinely useful rather than merely honest.",
    needs: [
      "The current adjusted daily maximum, as printed by the adjusting authority",
      "The regulation or annual adjustment notice that sets it, cited by number",
      "The effective date of the current figure, and the date you read it",
    ],
    where: [
      "29 CFR part 2575, the civil penalty adjustment regulation for this title",
      "The annual civil penalty inflation adjustment notice published in the Federal Register",
    ],
  },
  {
    key: "retirement-cashout-thresholds-current",
    course: "retirement-accounts",
    lesson: "what-leaving-does",
    quote:
      "Both figures are printed in the statute and were read on 29 August 2026; both have been changed by legislation before, so check them before relying on either.",
    title: "Are the 7,000 and 1,000 dollar mandatory-distribution thresholds still current?",
    severity: "medium",
    question:
      "Do 26 U.S.C. 411(a)(11)(A) and 401(a)(31)(B) still print 7,000 dollars as the consent threshold and 1,000 dollars as the automatic-transfer trigger, and does either carry an indexing provision that has produced a different operative figure? Quote the current text and give the date you read it.",
    claim:
      "The lesson states that a plan may distribute without consent where the present value does not exceed 7,000 dollars, that a mandatory distribution above 1,000 dollars must be transferred to an individual retirement plan of a designated trustee, and that both figures are statutory, dated 29 August 2026, and previously amended.",
    stakes:
      "Medium, and it is the one place in Section 2 where a wrong number changes what happens to somebody's money rather than their vocabulary. The consent threshold decides whether a plan can push a former employee's balance out of the plan at all, and the transfer trigger decides whether what leaves is a cheque or an account.",
    needs: [
      "The current text of both provisions, quoted, with the dollar figures as printed",
      "Whether either figure is indexed, and if so the operative amount for the current year",
      "The public law behind the most recent change to either, and the date you read the sections",
    ],
    where: [
      "26 U.S.C. 411(a)(11) and 401(a)(31)(B) on the United States Code site or the Legal Information Institute",
      "The tax authority's annual cost-of-living notice, if either figure turns out to be indexed",
    ],
  },
  {
    key: "retirement-ncs-current-edition",
    course: "retirement-accounts",
    lesson: "who-has-a-plan-at-all",
    quote:
      "Those figures are from March 2025 and were published on 18 March 2026. Check the current release before you repeat them.",
    title: "ANNUAL: what does the newest employee benefits survey say about access and participation?",
    severity: "high",
    question:
      "What are the most recently published access, participation and take-up figures for private-sector workers overall, by wage quartile, by full-time and part-time status, and by establishment size? Give the survey reference month, the publication date, and the exact figures as published.",
    claim:
      "The course reports 72 percent access and 53 percent participation for private-sector workers in March 2025, with 49 and 23 percent in the lowest-paid quarter of occupations against 91 and 80 in the highest, 47 and 23 for part-time workers against 81 and 62 for full-time, and 55 and 38 at establishments under 50 workers against 90 and 76 at those with 500 or more. It attributes them to a Congressional Research Service reading of the March 2025 National Compensation Survey published 18 March 2026, and says in the lesson to check the current release.",
    stakes:
      "High, because these figures are the spine of the whole course rather than an illustration. Section 1 uses them to establish that access is a fact about employment, Section 4's automatic enrollment lesson refers back to the take-up gap, and the capstone sets them against the wealth distribution. A stale set does not break the argument, since the gradient is structural, but it does date the course visibly.",
    needs: [
      "The reference month and publication date of the newest release",
      "Access and participation overall and for each of the four breakdowns the lesson quotes",
      "Whether the publishing body's own definitions of access, participation and take-up have changed",
      "The date you read it",
    ],
    where: [
      "The Bureau of Labor Statistics employee benefits pages and the news release for the newest reference month",
      "The Congressional Research Service's recurring product on worker participation in employer-sponsored pensions",
    ],
  },
  {
    key: "retirement-scf-2025-edition",
    course: "retirement-accounts",
    lesson: "read-your-own-record",
    quote:
      "Analysing the 2022 Survey of Consumer Finances, the Congressional Research Service reported that 54.3 percent of U.S. households had retirement account assets",
    title: "Has the 2025 Survey of Consumer Finances been published, and does it move these figures?",
    severity: "medium",
    question:
      "Has the Federal Reserve published results from the 2025 Survey of Consumer Finances? If so, what are the current figures for the share of families holding any retirement account, the distribution of balances, and median wealth by race and ethnicity, and what are the exact titles and publication dates of the documents reporting them?",
    claim:
      "The capstone cites the 2022 survey throughout: 54.3 percent of households with retirement account assets, ownership by age band, the four balance ranges, and the Federal Reserve note reporting median White family wealth of 285,000 dollars against a typical Black family's 44,900 (about 15 percent) and a typical Hispanic family at about 20 percent. Every figure is labelled as 2022 and the survey's publication date is named.",
    stakes:
      "Medium. The survey is triennial, so a 2025 edition supersedes every figure in the capstone at once. The teaching point, that the account gap and the wealth gap are one story about employment, does not depend on the vintage, but a course that shows a teacher four-year-old numbers next to a claim about the present is doing the thing this catalog dates figures to avoid.",
    needs: [
      "Whether a 2025 edition exists, and its publication date and exact title",
      "The share of families holding any retirement account in the newest edition",
      "The median wealth figures by race and ethnicity in the newest edition, with the document that reports them",
      "The date you checked",
    ],
    where: [
      "The Federal Reserve's Survey of Consumer Finances index page",
      "The Federal Reserve Bulletin article reporting changes in U.S. family finances for the newest survey pair",
      "Congressional Research Service products analysing retirement account balances from the newest survey",
    ],
  },
  {
    key: "retirement-social-security-reliance-primary",
    course: "retirement-accounts",
    lesson: "retirement-age-and-the-floor",
    quote:
      "That analysis uses data reflecting income received in calendar year 2019 and was updated on 5 August 2025.",
    title: "Is there a newer primary-source measure of how much of aged income Social Security supplies?",
    severity: "medium",
    question:
      "What is the most recent published measure, from the Social Security Administration's own research or from a comparable federal source, of the share of people aged 65 and older receiving Social Security income and the share relying on it for 90 percent or more of household income, broken down by income quintile? Give the publication, its date, and the survey and year the figures come from.",
    claim:
      "The lesson reports approximately 92 percent of individuals aged 65 and older receiving household income from Social Security, about 29.5 percent of aggregate income for that population, and 61.5 percent of the bottom household income quintile relying on it for 90 percent or more, all from a Congressional Research Service analysis of Health and Retirement Study data for calendar year 2019, updated 5 August 2025. The lesson names both the data year and the update date.",
    stakes:
      "Medium, and there is a sourcing point behind it as well as a currency one. The Social Security Administration publishes its own recurring analysis of income of the aged, and this course cites a congressional analysis of a different survey instead, because the agency's site would not serve its pages to the tool used to write the course. A primary-source figure would be the better citation for the same claim even if the number does not move.",
    needs: [
      "The agency's own current publication on income of the aged population, by exact title and date",
      "The receipt rate and the 90-percent-reliance rate as that publication states them, with the survey and year",
      "Whether the agency's figures differ materially from the congressional analysis the lesson currently cites",
      "The date you read it",
    ],
    where: [
      "The Social Security Administration's Office of Retirement and Disability Policy research publications",
      "The agency's annual statistical supplement",
      "Congressional Research Service products on income for the population ages 65 and older, for comparison",
    ],
  },
  {
    key: "retirement-tx-teks-transcription-source",
    course: "retirement-accounts",
    title: "Texas: reconcile the two copies of 19 TAC 113.49(c)(6) and (c)(7)",
    severity: "medium",
    question:
      "Does the Texas Education Agency's own currently-in-effect Chapter 113 Subchapter C PDF print 113.49(c)(6)(A) and (c)(7)(B) in exactly the words this repo has transcribed, and what is the page footer date on the copy you open? If the wording differs at all, quote the agency's text.",
    claim:
      "Both codes were transcribed on 2026-08-29 from the Legal Information Institute's copy of 19 Tex. Admin. Code § 113.49, because the TEA PDF at this framework's sourceUrl was re-downloaded the same day and its text layer would not extract. The framework's fetchedOn was deliberately LEFT at 2026-08-28 rather than stamped with the newer date, and a comment above both entries records exactly this. Every other entry in that framework came from the TEA PDF.",
    stakes:
      "Medium, and it is a provenance problem rather than a substance one. The standards module's rule is fetch-or-do-not-cite from the publisher, and two of the entries in the Texas personal financial literacy framework now come from a secondary copy of the same rule. A teacher reading a verbatim standard is entitled to know it is the publisher's text, and either confirming the wording or correcting it closes the only gap of its kind in this file.",
    needs: [
      "The two provisions as the TEA document prints them, quoted",
      "The page footer date on the TEA PDF you opened, and its URL",
      "Whether the TEA text differs from the transcription in any respect, including punctuation",
      "The date you checked, so the framework's fetchedOn can be updated honestly",
    ],
    where: [
      "The TEA currently-in-effect Chapter 113 Subchapter C PDF, opened in a reader rather than extracted",
      "The Texas Administrative Code as published by the Secretary of State",
    ],
  },
  {
    key: "pan-africanism-uneca-afcfta-start-of-trading",
    course: "pan-africanism",
    title: "Which UNECA publication is \"AfCFTA: Start of trading\"?",
    severity: "medium",
    question:
      "What is the exact UNECA publication the course cites as \"AfCFTA: Start of trading\" (2021): its full title, its document number if it has one, and a URL on uneca.org or repository.uneca.org that serves it? If no such publication exists, what should the entry cite instead for the 1 January 2021 start of trading?",
    claim:
      "The bibliography lists \"United Nations Economic Commission for Africa. (2021). AfCFTA: Start of trading. UNECA.\" It is the only entry in the course carrying no identifier that ought to have one: every other institutional source resolved to an au.int, UN or peaceau.org document during the 2026-08-30 bibliography pass.",
    stakes:
      "Medium. The lesson uses it for the date trading formally opened under the AfCFTA, which is a checkable fact with an obvious primary source (the AU Assembly decision of 5 December 2020, and the agreement itself). A reader who tries to follow the citation finds nothing at uneca.org under that title, which reads as a fabricated source even though the underlying fact is not in doubt.",
    needs: [
      "The publication's exact title and URL, or confirmation that no UNECA publication by that name exists",
      "If it does not exist, the primary source the entry should name instead, with a URL",
    ],
    where: [
      "repository.uneca.org, the UNECA institutional repository",
      "uneca.org publications listing for 2020 and 2021",
      "The AU Assembly 13th Extraordinary Session decision approving 1 January 2021, on au.int",
    ],
  },
  {
    key: "pan-africanism-selassie-1936-league-record",
    course: "pan-africanism",
    title: "The League of Nations record for Haile Selassie's 1936 appeal",
    severity: "low",
    question:
      "What is the League of Nations Official Journal citation (special supplement number, session, date and page) for Haile Selassie's 1936 address to the Assembly, and does the League's own record print the English text the course quotes?",
    claim:
      "The entry reads \"Selassie, H. (1936, June). Appeal to the League of Nations [Address]. League of Nations, Geneva. (Delivered in Amharic; quoted in its standard English rendering.)\" The 2026-08-30 bibliography pass could attach only a secondary full-text source, because the UN Library Geneva League of Nations holdings would not serve an automated request.",
    stakes:
      "Low for the argument and real for the sourcing rule. The course already tells the reader the English is a rendering rather than the delivered words, which is the honest half. The missing half is the record itself: an official-journal citation would let a reader see which English text the League entered, and that is exactly the kind of claim the catalog promises is checkable.",
    needs: [
      "The Official Journal special supplement number and pages for the Assembly session at which the appeal was delivered",
      "The exact date of delivery as the League recorded it",
      "Whether the League printed English matches the wording the lesson quotes, and a stable URL if a digitised copy has one",
    ],
    where: [
      "The UN Library and Archives Geneva, League of Nations Official Journal collection",
      "libraryresources.unog.ch, League of Nations documents",
    ],
  },
  {
    key: "deaf-america-segregation-averages",
    course: "deaf-america",
    title: "Where do the 33-year and 72.8-year Black Deaf school averages come from?",
    severity: "medium",
    question:
      "A draft of this course asserted that the white school opened on average 33 years before the Black school, and that desegregation came on average 72.8 years after the Black school opened. Which published source gives those two averages, over which set of states, and measured how? The likeliest home is Bayley, Lucas, McCaskill and Hill's article on segregation and desegregation of the Southern schools for the deaf in the journal Language, which was not accessible when this was written.",
    claim:
      "Both figures were REMOVED from the course description on 2026-08-30 rather than shipped unverified, and replaced with facts that were confirmed: seventeen states and DC ran separate schools or departments for Black Deaf children beginning in 1869; the last opened in Louisiana in 1938; most resisted Brown v. Board (1954) until the mid-1960s, Louisiana until 1978. The averages are more striking than what replaced them, so they are worth recovering IF a source actually supports them.",
    stakes:
      "Medium. Nothing wrong is on the page now. But a precise-looking average like 72.8 is exactly the kind of number that gets repeated once it appears in a course, and this catalog's whole claim is that a reader can check every figure. Do not restore either number without the source, the state set, and the method.",
    needs: [
      "The published source for the 33-year and 72.8-year averages, with page numbers",
      "Which states each average covers, since 17 states plus DC is not the same set as the six the Black ASL Project interviewed in",
      "Whether the averages count school FOUNDING dates or department-within-a-school dates, which are different events",
    ],
    where: [
      "Bayley, Lucas, McCaskill & Hill, Language (Cambridge), on segregation and desegregation of the Southern schools for the deaf",
      "McCaskill, Lucas, Bayley & Hill (2011), The Hidden Treasure of Black ASL, Gallaudet University Press",
    ],
  },
  {
    key: "compneuro-dayan-abbott-triad",
    course: "computational-neuroscience-foundations",
    title: "Does Dayan and Abbott chapter 1 actually name the descriptive/mechanistic/interpretive triad?",
    severity: "low",
    question:
      "Does chapter 1 of Theoretical Neuroscience name those three model types in those words, and is the mapping onto what / how / why theirs or this course's gloss?",
    claim:
      "The book is paywalled and only its bibliographic record was fetched. The lesson teaches the triad as a standard framing and attributes it to the book, which is the usual attribution, but the exact wording and the what/how/why mapping were not read from the text.",
    stakes:
      "Low. The framing is genuinely standard and no factual claim rests on it. Worth closing because attributing a gloss to an author who did not write it is a small dishonesty that compounds.",
    needs: ["Chapter 1 of Dayan and Abbott, with the three terms and any mapping quoted as printed"],
    where: ["Theoretical Neuroscience, MIT Press, ISBN 9780262041997"],
  },
  {
    key: "compneuro-paninski-2004-result",
    course: "computational-neuroscience-foundations",
    title: "What exactly does Paninski (2004) prove about the likelihood surface?",
    severity: "medium",
    question:
      "What is the theorem's exact statement, and what is the paper's own condition on the nonlinearity?",
    claim:
      "A draft said the log-likelihood is CONCAVE. The abstract is elided by the publisher on every aggregator reached, so that was rewritten to the paper's own weaker claim, a condition on the nonlinearity under which the likelihood has no non-global local maxima, and the weaker wording was propagated through three quiz items.",
    stakes:
      "Medium. Concavity and no-local-maxima are different mathematical claims, and a learner who carries the stronger one into their own work will over-trust an optimiser.",
    needs: ["The theorem as printed, and the condition on the nonlinearity, from the paper itself"],
    where: ["Neural Computation, Paninski 2004"],
  },
  {
    key: "compneuro-ernst-banks-degraded-vision",
    course: "computational-neuroscience-foundations",
    title: "Did Ernst and Banks degrade vision with visual noise, as the lesson describes?",
    severity: "low",
    question:
      "What manipulation did the 2002 experiment actually use to vary visual reliability?",
    claim:
      "The fetched abstract confirms statistically optimal integration of visual and haptic information but does NOT confirm the specific visual-noise manipulation the lesson describes.",
    stakes:
      "Low. The teaching point, that weighting follows reliability, is confirmed. The experimental detail is the unverified part and should either be sourced or dropped.",
    needs: ["The methods section, with the manipulation described as printed"],
    where: ["Nature, Ernst and Banks 2002"],
  },
  {
    key: "compneuro-cunningham-yu-motivation",
    course: "computational-neuroscience-foundations",
    title: "Is the trial-averaging motivation for dimensionality reduction stated in Cunningham and Yu?",
    severity: "low",
    question:
      "Does their review state that dimensionality reduction is motivated by the limits of trial averaging, in those terms?",
    claim:
      "Only the bibliographic record was fetched. The claim is a standard motivation and is attributed to the review, but the review's own framing was not read.",
    stakes:
      "Low, same class as the Dayan and Abbott entry: a standard idea attributed to a specific source without the source having been read.",
    needs: ["The review's introduction, with its stated motivation quoted"],
    where: ["Nature Neuroscience, Cunningham and Yu 2014"],
  },
  {
    key: "climate-preindustrial-baseline-years",
    course: "computational-climate-tools-foundations",
    title: "Which years define the pre-industrial baseline for assessment purposes?",
    severity: "medium",
    question:
      "What reference period does the assessment literature actually mean by relative to pre-industrial levels? The course states the period is earlier than any of the dataset baselines it names (GISTEMP, HadCRUT5) but deliberately prints NO years.",
    claim:
      "The body defining it publishes on ipcc.ch, which returned HTTP 403 to automated retrieval during authoring, and no other source reached in that pass states the definition in its own right. The lesson says so in the text rather than printing a number nobody checked.",
    stakes:
      "Medium, and it is the lesson's own point. The whole lesson is about incomplete statements of what a number is measured against, so a course that quoted an unchecked baseline while teaching that would be refuting itself.",
    needs: [
      "The assessment report's own statement of the reference period, read from the primary document, with the section quoted",
      "Then name the years beside the GISTEMP and HadCRUT5 baselines, where the point lands hardest",
    ],
    where: ["The assessment report itself, not a summary", "Any agency page that states the period in its own right"],
  },
  {
    key: "climate-enso-contribution-magnitude",
    course: "computational-climate-tools-foundations",
    title: "How large is the ENSO contribution to global mean surface temperature?",
    severity: "low",
    question:
      "What is a sourced estimate of how much El Nino or La Nina shifts global mean surface temperature for a year or two, ideally separating the two sides?",
    claim:
      "A draft said a few tenths of a degree. No primary source could be retrieved, so THE NUMBER WAS REMOVED from the lesson, the reveal, the vocabulary entry and two quiz questions rather than shipped unsourced. The lesson still teaches that ENSO moves the number without a change in forcing, which is the teachable part.",
    stakes:
      "Low as written, since nothing unsourced is on the page. Worth closing because the magnitude is what makes the trend-versus-wiggle lesson concrete.",
    needs: [
      "A published estimate of the ENSO contribution to global mean surface temperature, read from the paper or an agency page",
      "Foster and Rahmstorf on removing ENSO, solar and volcanic signals is the obvious first place to look",
    ],
    where: ["Environmental Research Letters", "NOAA or NASA agency pages stating the figure directly"],
  },
  {
    key: "climate-nasem-attribution-confidence-ranking",
    course: "computational-climate-tools-foundations",
    title: "What is the National Academies ranking of attribution confidence by event type?",
    severity: "medium",
    question:
      "What does the National Academies 2016 report print as its own summary of attribution confidence by event class? The course teaches that thermodynamic events give the shortest chain of reasoning and circulation-driven events the hardest, but does NOT print the report's ranking.",
    claim:
      "nationalacademies.org served only the catalogue summary; the report body containing the figure was not retrieved. The lesson uses the sourced thermodynamic-versus-circulation framing instead and says the ranking is absent.",
    stakes:
      "Medium. This is the single most useful thing the attribution lesson is currently missing, and it is exactly the kind of table a learner would want to check a news claim against.",
    needs: ["The report's summary table of attribution confidence by event type, with classes and confidence levels quoted as printed"],
    where: ["National Academies of Sciences, Engineering, and Medicine (2016), the report body"],
  },
  {
    key: "songs-sung-slant-rhyme-forgiveness",
    course: "writing-poems-and-songs",
    title: "Is a sung slant rhyme really easier to get away with than a written one?",
    severity: "low",
    question:
      "Is there a peer-reviewed perception study comparing recognition of perfect versus slant rhyme in SUNG versus SPOKEN delivery? The course claims pitch, duration and the repeated melodic phrase cue the ear that a return happened, so a sung slant rhyme lands where a written one would not.",
    claim:
      "The lesson labels this as craft practice gathered from tradition, NOT a measured finding, and says so in the lesson body rather than in a footnote. Nothing was found while writing the course.",
    stakes:
      "Low. It is hedged where it appears. Worth settling because it is the kind of claim that hardens into fact through repetition in songwriting books.",
    needs: [
      "A perception study on rhyme recognition across sung and spoken delivery",
      "If none exists, that absence is itself worth recording so nobody searches twice",
    ],
    where: ["Music perception journals", "Psychology of music literature"],
  },
  {
    key: "songs-mis-stressing-attention-cost",
    course: "writing-poems-and-songs",
    title: "What is the measured cost of setting an unstressed syllable on a strong beat?",
    severity: "low",
    question:
      "Is there published text-setting research measuring a comprehension or recall cost when a lyric places an unstressed syllable on a strong beat? The course claims a listener hears the wrong pronunciation and spends attention repairing the word.",
    claim:
      "Hedged in the lesson as craft practice. NOTE: the two Music Theory Online articles this course cites are about FORM, not text setting, so they do not support this claim and are not offered as if they did.",
    stakes:
      "Low, and hedged. Worth settling because generative text-setting models exist and may already answer it.",
    needs: [
      "Generative textsetting literature, or work on prosodic alignment in sung text",
      "Any study measuring comprehension or recall against stress alignment",
    ],
    where: ["Music Theory Online", "Linguistics of text setting"],
  },
  {
    key: "songs-metro-poem-line-one-punctuation",
    course: "writing-poems-and-songs",
    title: "Colon or semicolon at the end of line one of In a Station of the Metro?",
    severity: "low",
    question:
      "Does the April 1913 printing in Poetry 2(1), page 6 end the first line with a colon or a semicolon? The University of Toronto's Representative Poetry Online gives a colon and records the original wide internal spacing; many modern reprints show a semicolon.",
    claim:
      "The course follows RPO and CITES RPO explicitly rather than asserting a bare text, so a reader can see which witness is being followed. A page image of the 1913 printing would settle it outright.",
    stakes:
      "Low for the argument, which is about the image doing the work rather than about punctuation. But the course quotes both lines, and a quotation should be right.",
    needs: ["A page image or facsimile of Poetry 2(1), April 1913, page 6"],
    where: ["Modernist Journals Project", "Poetry magazine archive"],
  },
  {
    key: "mesoamerica-arqueologia-mexicana-148-authorship",
    course: "precolumbian-mesoamerica",
    title: "Who wrote the Huei Tzompantli article in Arqueologia Mexicana 148?",
    severity: "medium",
    question:
      "SETTLED on 2026-08-30, and now waiting only on BAM reading the article. The authorship question is closed: Dialnet's full table of contents for Arqueologia Mexicana 25(148) lists fourteen dossier articles, and NO article by Matos Moctezuma and Lopez Lujan appears in the issue at all. Nothing sits at 60-67 either; that range straddles Chavez Balderas and Vazquez Vallin (58-63) and Mendoza (64-69). The only Huei Tzompantli de Tenochtitlan article is Matos Moctezuma, Barrera Rodriguez and Vazquez Vallin at 52-57. So the course entry was a transcription error on ONE article, not a citation of a different piece. What remains open is whether that article actually supports the lesson's specific claim, which needs the text, and the text is paywalled.",
    claim:
      "The bibliography USED to read \"Matos Moctezuma, E., & Lopez Lujan, L. (2017). El Huei Tzompantli de Tenochtitlan. Arqueologia Mexicana, 25(148), 60-67.\" BAM chose on 2026-08-30 to CUT it rather than correct it, so the entry is gone and the tzompantli sentence now cites INAH (2017) alone. RESTORE KIT, one line, once BAM has read the article and confirmed it supports the claim: \"- Matos Moctezuma, E., Barrera Rodriguez, R., & Vazquez Vallin, L. (2017). El Huei Tzompantli de Tenochtitlan. *Arqueologia Mexicana, 25*(148), 52-57.\" Verified independently by Dialnet (dialnet.unirioja.es/servlet/articulo?codigo=6227562, ISSN 0188-8218) and by the magazine's own citation block. Full text is print/digital only: \"Texto completo en la edicion impresa\", buy at tiendadigitales.raices.com.mx.",
    stakes:
      "Low now, and falling. The misattribution is gone, so nothing wrong is on the page. The cost of leaving it cut is that the tzompantli sentence rests on the INAH entry alone, which has its own open check below, so the best-evidenced claim in the lesson currently has the weakest citation in it. That is the argument for restoring once BAM confirms.",
    needs: [
      "DONE 2026-08-30: the issue 148 table of contents, with authors and pages (Dialnet)",
      "DONE 2026-08-30: no Matos Moctezuma and Lopez Lujan article exists in the issue; nothing is at 60-67",
      "OPEN: BAM to read the article and confirm it supports the excavation claim, then restore the corrected entry",
    ],
    where: [
      "dialnet.unirioja.es/ejemplar/474860, the full issue 148 table of contents",
      "tiendadigitales.raices.com.mx, to buy the issue (the text is not online)",
    ],
  },
  {
    key: "mesoamerica-inah-tzompantli-codice-citations",
    course: "precolumbian-mesoamerica",
    title: "Pin the 2017 INAH tzompantli source to an actual INAH document",
    severity: "medium",
    question:
      "Which INAH document is the course citing as the 2017 Programa de Arqueologia Urbana reporting on the Huei Tzompantli? Give the bulletin number or report title, its date, and a URL on inah.gob.mx. If the reporting the lessons rely on is actually the 2015 discovery bulletin or a later one, the entry's year should change to match.",
    claim:
      "The bibliography has \"Instituto Nacional de Antropologia e Historia. (2017). Huei Tzompantli de Tenochtitlan [excavation reporting, Programa de Arqueologia Urbana]. INAH.\" It describes an INAH communication rather than naming one, and no INAH item dated 2017 could be found during the 2026-08-30 bibliography pass: inah.gob.mx refuses automated requests, and a Wayback sweep of the bulletins for 2016 to 2018 surfaced only the 2015 discovery bulletin. Its sibling entry, the 2018 codex authentication, WAS resolved in that pass and now carries the INAH bulletin URL.",
    stakes:
      "Medium. This is the evidence behind what the lessons say about the scale of Mexica skull display, which is exactly the claim a sceptical reader will want to follow to its source. A source described but not named cannot be checked at all.",
    needs: [
      "The INAH bulletin number or report title, its date, and a URL",
      "Whether the excavation reporting the lessons rely on is dated 2017 at all, and the correct year if not",
      "The date you read it",
    ],
    where: [
      "inah.gob.mx boletines, opened in a browser",
      "The Programa de Arqueologia Urbana publications and the Proyecto Templo Mayor reports",
      "lugares.inah.gob.mx node 5907, INAH's own undated page for the Huei Tzompantli",
    ],
  },
  {
    key: "blind-nemeth-code-1951-or-1952",
    course: "blind-and-low-vision-america",
    lesson: "the-private-code-that-became-a-standard",
    title: "Was the Nemeth Code adopted in 1951 or 1952, and by what act?",
    severity: "medium",
    question:
      "The American Foundation for the Blind's obituary of Abraham Nemeth (AccessWorld, November 2013, by Deborah Kendrick) says the code has carried his name \"since its adoption in 1951\" and that he presented it one morning in 1951 and it was unanimously adopted that afternoon. Other accounts date the Nemeth Code to 1952, which appears to be when the American Printing House published it. Which body adopted it, on what date, and on what date was it published? Are these two different events or is one of the dates wrong?",
    claim:
      "The lesson prints AFB's 1951 adoption account, states in the body that other accounts give 1952 for publication by APH, says the two are probably describing different events, and says the course does not know which. A quiz question tests that this course prints the source it read and files the discrepancy rather than choosing.",
    stakes:
      "Medium. Nothing wrong is on the page: the lesson says openly that it does not know. But this course teaches that every date in it is checkable, and a code still in daily use in American mathematics classrooms should have a settled adoption date. The nfb.org interview with Nemeth (nfb.org/history-nemeth-code-interview-dr-abraham-nemeth) is the obvious place to settle it and returned a Cloudflare challenge to this pass.",
    needs: [
      "The date the Joint Uniform Braille Committee adopted the code, from its own minutes or proceedings",
      "The date and imprint of the American Printing House's first published edition",
      "Whether Nemeth's own account, in the NFB interview or elsewhere, gives one date or both",
    ],
    where: [
      "nfb.org/history-nemeth-code-interview-dr-abraham-nemeth, the NFB's interview with Nemeth (blocked to automated fetching)",
      "American Printing House for the Blind, publication records for the Nemeth Code",
      "Braille Authority of North America, for the Joint Uniform Braille Committee's records",
    ],
  },
  {
    key: "blind-lp-developed-for-talking-books",
    course: "blind-and-low-vision-america",
    lesson: "who-is-allowed-to-make-a-copy",
    title: "Was the long-playing record developed for talking books?",
    severity: "medium",
    question:
      "It is widely said that the long-playing record was worked out for the Talking Books programme in the early 1930s, more than a decade before the commercial LP. The Library of Congress's own NLS history establishes that by 1933 AFB had a durable record cut at 150 grooves to the inch running at 33 and a third revolutions per minute, giving thirty minutes a side, with a 60,000-word book on eight or nine double-faced twelve-inch discs. It does NOT establish that the commercial LP descended from that work. Did it?",
    claim:
      "The lesson prints the speed, the groove pitch, the disc count and the date, all from the Library of Congress history, and then says in terms that the course does not assert the causal claim because the source it read establishes the facts and not the causation.",
    stakes:
      "Medium, and the upside is real. If it holds up, \"the format the music industry built itself on in 1948 was worked out for blind readers in the 1930s\" is both true and the single best line available to this course. If it does not, cutting it costs nothing, because the copyright-exception story in the same lesson is just as good. What must not happen is the sentence appearing without the evidence.",
    needs: [
      "Whether Rubery's The Untold Story of the Talking Book (Harvard University Press, 2016) traces a line from the AFB disc to the commercial LP, with page numbers",
      "AFB's own institutional records on the development of the talking-book disc and any contact with commercial record manufacturers",
      "Whether Columbia's 1948 LP development cites or draws on the earlier talking-book work in any documented way",
    ],
    where: [
      "Rubery, M. (2016). The untold story of the talking book. Harvard University Press",
      "American Foundation for the Blind institutional archives, talking-book development records",
      "Library of Congress, NLS history, https://www.loc.gov/nls/about/organization/history/",
    ],
  },
  {
    key: "blind-mainstreaming-and-braille-instruction",
    course: "blind-and-low-vision-america",
    lesson: "the-residential-school-and-the-curriculum",
    title: "Did mainstreaming cause the decline in braille instruction?",
    severity: "medium",
    question:
      "Braille literacy advocates connect the least-restrictive-environment mandate of the 1975 Education for All Handicapped Children Act, and the dispersal of blind students into local districts, directly to a decline in braille instruction, on the argument that a district serving one blind child has no braille teacher and no braille-reading peers. Is there a published study establishing that causal link, as opposed to the correlation? And separately, what does the American Printing House Annual Registry actually measure when it reports a student's reading medium?",
    claim:
      "The lesson states the argument, names who makes it, says explicitly that this is an empirical claim about causation that the authoring pass could not settle, and does not assert it. The course also prints NO braille literacy percentage anywhere, because the commonly quoted \"ten per cent of blind children\" figure turns on whether the registry counts primary reading medium or braille ability at all.",
    stakes:
      "Medium. Nothing wrong is on the page. But this is the single most repeated claim in braille advocacy and a course that teaches the history of the code will be asked about it. Getting it right also means settling what the registry measures, because the ambiguity in that measurement is the reason both sides of the braille-versus-audio argument can quote the same number.",
    needs: [
      "A published study, with citation, establishing causation rather than correlation between placement and braille instruction",
      "The American Printing House Annual Registry methodology: what \"primary reading medium\" records and who is in the counted population",
      "Whether the National Federation of the Blind's 2009 report The Braille Literacy Crisis in America gives a traceable citation chain for its ten per cent figure",
    ],
    where: [
      "American Printing House for the Blind, Annual Registry of Legally Blind Students, methodology documentation",
      "National Federation of the Blind (2009), The Braille Literacy Crisis in America",
      "Journal of Visual Impairment and Blindness, for placement and literacy outcome studies",
    ],
  },
  {
    key: "blind-campsie-full-text-not-read",
    course: "blind-and-low-vision-america",
    lesson: "the-story-that-was-made-up",
    title: "Read Campsie's Barbier article in full, and confirm what this course says about it",
    severity: "low",
    question:
      "Does the full text of Campsie, P. (2021), Charles Barbier: A hidden story, Disability Studies Quarterly 41(2), doi 10.18061/dsq.v41i2.7499, support the four findings as this course states them, and does it say what the course says about Pignier (1859) and Pierre Henri (1952)? Also: does it settle the widely repeated claim that the Paris school suppressed braille after Louis Braille's time, with a director banning it and books burned?",
    claim:
      "The lesson states the four findings and the two distorting accounts from the article's OWN abstract as indexed by the Directory of Open Access Journals, plus Judy Dixon's independent summary published by the American Council of the Blind. The bibliography says in terms that the full text was not retrievable in this pass, because dsq-sds.org served an automated reader a challenge page. The suppression and book-burning story is NOT taught, and the lesson says why.",
    stakes:
      "Low for accuracy and high for the course's own rule. Everything printed comes from the article's abstract or from a summary that quotes it, so the risk of misstatement is small. But this course tells learners that it reads what it cites, and one lesson currently rests on an abstract. Reading the article would either confirm the lesson or improve it, and it is the natural place to settle the suppression story that the lesson refuses to teach.",
    needs: [
      "The full text of the article, read, with confirmation of the four findings as stated",
      "Whether the article treats the post-Braille suppression and book-burning story, and what it concludes",
      "Whether Braille's own 1829 text acknowledges Barbier, and in what words, since this course prints no such quotation",
    ],
    where: [
      "Disability Studies Quarterly, https://dsq-sds.org/article/view/7499 (served a challenge page to automated fetching on 2026-08-30)",
      "Association Valentin Hauy museum, Paris, which holds the Barbier papers donated in 2001",
    ],
  },
  {
    key: "blind-device-credit-archival-work",
    course: "blind-and-low-vision-america",
    lesson: "a-method-for-checking-who-is-named",
    title: "Do the archival work on the device-credit cases this course deliberately did not narrate",
    severity: "medium",
    question:
      "For each of three cases, what do the patent, the acknowledgements, the institutional archive and the press coverage actually establish about the blind people involved? (1) The Optacon, credited to John Linvill and James Bliss: who did the tactile-reading training design, and is that person named anywhere but an acknowledgement? (2) The Perkins Brailler, designed by David Abraham: do the Perkins Archives show blind staff or students shaping key pressure, spacing, noise or reliability? (3) The IBM Screen Reader released in 1984: what was Jesse Wright's role, how did he describe himself, and did Jim Thatcher credit him in his own extensive published accounts?",
    claim:
      "The course teaches the METHOD (four records, and what each does and does not establish) and states plainly that it does not narrate these cases because the archival work was not done in this pass, on the ground that naming a case you have not checked is how a grievance becomes folklore. Nothing about any of the three devices is asserted anywhere in the course.",
    stakes:
      "Medium, and it is an opportunity rather than a risk. Nothing wrong is on the page. But Section 5 currently rests on two code cases and one counter-case, and the device cases are where the argument would be strongest if it holds. The IBM question matters most: if Thatcher himself credited Wright, this is a case of the PRESS dropping a name rather than a colleague doing it, which is a materially different and more interesting finding.",
    needs: [
      "For the Optacon: the 1966 patent, the training-design acknowledgements, and Telesensory or Stanford records naming the blind test subjects and trainers",
      "For the Perkins Brailler: Perkins Archives memos, minutes and correspondence from the 1941 prototype to the 1951 production run",
      "For IBM Screen Reader: IBM records and Jim Thatcher's own published accounts, to establish Jesse Wright's role and whether Thatcher credited him",
    ],
    where: [
      "Perkins School for the Blind Archives, Watertown, Massachusetts",
      "Stanford University archives and the Telesensory Systems corporate record",
      "Jim Thatcher's published writing on the history of screen readers, and IBM's own records",
    ],
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
