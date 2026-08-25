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
