import type { AuthoredCourse } from "./authored-course";

// "Renting Out Production Gear: the Owner-Operator's Business" (Careers & Media, also listed in
// Trade Skills and Money & Property). Slug `renting-out-production-gear`. Series
// `the-crew-behind-the-show` ("The Crew Behind the Show"), code CREW, position 06. CREW-01 is
// `stage-and-broadcast-rigging`, CREW-02 `sound-craft`, CREW-03 `light-on-set`; CREW-04 (the
// cinema-look camera rig) and CREW-05 (arena transmission) are approved briefs, not yet built, so this
// course names them in prose and links to no lesson of theirs.
//
// BRIEF: plans/future-courses/careers-and-media/2026-10-21-production-gear-rental-business-brief.md,
// APPROVED on 2026-10-21 (gate A8). The decisions recorded in the brief's section 7:
//   1. A public course in the CREW series, held ("Coming soon") until a peer reviewer signs
//      off. The publishHoldReason in scripts/seed-courses.ts says so.
//   2. Rental houses are described in prose as "a regional rental house". Every source is still cited
//      by name in the `## Sources` lists, as citation integrity requires.
//   3. Built locally in this repo.
// Standing rules from the brief: no lesson promises income, and every rate is a dated example with
// its date shown (all prices read on October 21, 2026).
//
// RESEARCH TIER 2 (docs/course-method/README.md): money, contracts, insurance and taxes.
// Inputs: the research pack content/broadcastig/renting-equipment-to-networks-and-studios/synthesis/
// 05-business-case.md and 04-builds-costs-compromises.md (local, gitignored; fetched 2026-10-21). Every
// source this course cites was fetched again on 2026-10-21 while the course was written, and only
// what the fetched page says is asserted. Arithmetic on those figures is shown in the lesson, labeled
// as the course's own arithmetic. Worked money models state every assumption as an assumption.
// Left out on purpose: the pack's reported union specialty camera rate (seen only on a third-party
// page), the UK terms of a peer-to-peer platform (no US terms were read), and any premium or tax
// figure the course could not read on the issuer's own page.
//
// CATEGORY NOTE: the brief named "Business" as an extra category. The learn tenant has no category of
// that name (scripts/seed-courses.ts inserts every category explicitly), so the registration uses
// "Money & Property", the existing category for money and contracts, with "Trade Skills".
//
// MARKED LESSONS. Each starts its body with a "> **Before release:**" line naming who must act.
//   QR (qualified reviewer): 15 and 16 (an attorney for the agreement; an insurance agent for the
//     waivers), 17 and 18 (a licensed insurance agent), 23, 24, 25 and 26 (a CPA or enrolled agent).
//   P (practitioner): 28 (a working owner-operator or crew coordinator, and a union business agent).
//   Unmarked: the market, choosing, buying, pricing and operations lessons, which rest on published
//   price lists, platform pages and manufacturer guidance quoted as written.
//
// RIGHTS (the source-hosting rule in CLAUDE.md, decided per source):
//  - Tier A, may be hosted later: the IRS publications and pages, the CFR sections, the TSA page and
//    the SBA page (U.S. federal works).
//  - Tier B, link only, never rehost: the rental houses' price lists and policies, the platform's
//    help-center articles, the Insurance Information Institute and IRMI pages, the insurers' and the
//    broker's pages, the Sony help guide, the retailer and manufacturer product pages, the rate guide,
//    the union rates card, the league's page and the closed platform's home page.
//  - FIGURES: none.
//
// HEDGES WRITTEN INTO LESSONS (each has a check in src/lib/research-checks.ts):
//  - L3 and L28: how a union contract pays a member for the use of their own kit.
//  - L26: whether a state taxes the rental of production equipment.
//
// House style, matching stage-and-broadcast-rigging-course.ts: `section` on every lesson; flush-left
// single-line `:::reveal q ||| a`; recallContent from the second teaching lesson on, quizzing the
// lesson before; an APA 7 `## Sources` block on every teaching lesson with a locator on every entry; a
// quiz per section pooled to round(words / 35), clamped 40 to 100, serving 5, passing 80, shuffled; a
// final pooling 40 or more and serving 10, placed last. Option lengths are balanced within each
// question. American spelling in prose; quotations keep their own spelling. No em or en dashes.

// ── Source helpers ────────────────────────────────────────────────────────────────────────────────
const READ = "Retrieved October 21, 2026, from";

// Rental houses and the peer-to-peer platform. ShareGrid help articles carry an update date; APA 7
// letters same-year works in date order (titles break a tie on the same day).
const RH_CINEMA = `Rental House by Roberts Camera. (n.d.-a). *Cinema cameras* [Rental page]. ${READ} https://rentalhouseindy.com/rentals/cameras/cinema-cameras`;
const RH_GIMBALS = `Rental House by Roberts Camera. (n.d.-b). *Gimbals, stabilizers, and sliders* [Rental page]. ${READ} https://rentalhouseindy.com/rentals/camera-supports/gimbals-stabilizers-and-sliders`;
const RH_POLICIES = `Rental House by Roberts Camera. (n.d.-c). *Policies*. ${READ} https://rentalhouseindy.com/policies`;
const RH_FX3 = `Rental House by Roberts Camera. (n.d.-d). *Sony Cinema Line FX3 w/ XLR top handle* [Rental page]. ${READ} https://rentalhouseindy.com/sony-cinema-line-fx3-w-xlr-top-handle`;
const RH_WIRELESS = `Rental House by Roberts Camera. (n.d.-e). *Wireless video transmission systems* [Rental page]. ${READ} https://rentalhouseindy.com/rentals/camera-supports/wireless-video-transmission-systems`;
const LR_LENSCAP = `Lensrentals. (n.d.-a). *Lenscap*. ${READ} https://www.lensrentals.com/lenscap`;
const LR_FX3A = `Lensrentals. (n.d.-b). *Rent a Sony FX3 A (body only)*. ${READ} https://www.lensrentals.com/rent/sony-fx3-a-body-only`;
const LR_BOLT = `Lensrentals. (n.d.-c). *Rent a Teradek Bolt 6 LT 750 3G-SDI/HDMI kit (V-mount)*. ${READ} https://www.lensrentals.com/rent/teradek-bolt-6-lt-750-3g-sdi-hdmi-kit-v-mount`;
const SG = "https://support.sharegrid.com/en/articles/";
const SG_COMPARE = `ShareGrid. (2026b, January 29). *Compare ShareGrid damage waiver and insurance options*. ${SG}733937-compare-sharegrid-damage-waiver-and-insurance-options`;
const SG_COVERAGE = `ShareGrid. (2026f, June 2). *Coverage guidelines for owners on ShareGrid*. ${SG}733956-coverage-guidelines-for-owners-on-sharegrid`;
const SG_SHOOT_DAYS = `ShareGrid. (2026h, July 17). *How ShareGrid calculates shoot days and pricing (local pickup)*. ${SG}748910-how-sharegrid-calculates-shoot-days-and-pricing-local-pickup`;
const SG_BEST_MATCH = `ShareGrid. (2025a, August 13). *How the "Best Match" search filter ranks your listings*. ${SG}733951-how-the-best-match-search-filter-ranks-your-listings`;
const SG_MISSING = `ShareGrid. (2026e, February 20). *Missing rental items policy*. ${SG}6005236-missing-rental-items-policy`;
const SG_DAMAGE = `ShareGrid. (2025b, August 13). *Navigating equipment damage and missing items for ShareGrid owners*. ${SG}733935-navigating-equipment-damage-and-missing-items-for-sharegrid-owners`;
const SG_ID = `ShareGrid. (2026a, January 15). *Owner guide: Verifying renter ID at local pickup*. ${SG}733945-owner-guide-verifying-renter-id-at-local-pickup`;
const SG_GUARANTEE = `ShareGrid. (2026g, June 2). *ShareGrid owner guarantee*. ${SG}3282176-sharegrid-owner-guarantee`;
const SG_TIPS = `ShareGrid. (2026c, January 30). *Tips for rental owners on ShareGrid*. ${SG}733934-tips-for-rental-owners-on-sharegrid`;
const SG_FEES = `ShareGrid. (2025c, August 13). *Understanding ShareGrid fees*. ${SG}733957-understanding-sharegrid-fees`;
const SG_THEFT = `ShareGrid. (2026d, January 30). *Understanding ShareGrid's damage + theft option*. ${SG}733952-understanding-sharegrid-s-damage-theft-option`;
const KITSPLIT_2023 =
  "KitSplit. (2023, January 15). *KitSplit | Quality gear rentals. Guaranteed.* [Home page, archived by the Internet Archive]. https://web.archive.org/web/20230115110658/https://kitsplit.com/";
const KITSPLIT = `KitSplit. (n.d.). *KitSplit* [Home page]. ${READ} https://kitsplit.com/`;

// Gear prices, manufacturers and care guidance
const FOCUS_FX3A = `Focus Camera. (n.d.). *Sony Alpha FX3A 4K compact full-frame cinema digital camera body* [Product page]. ${READ} https://focuscamera.com/products/sony-ilmefx3a-cameras-mirrorless-cameras`;
const MPB_FX3 = `MPB. (n.d.). *Used Sony FX3* [Product page]. ${READ} https://www.mpb.com/en-us/product/sony-pxw-fx3`;
const TERADEK_4K = `Teradek. (n.d.-a). *Bolt 4K 12G-SDI 750 deluxe kit* [Product page]. ${READ} https://teradek.com/products/bolt-4k-750-kit`;
const TERADEK_B6 = `Teradek. (n.d.-b). *Bolt 6 LT set* [Product page]. ${READ} https://teradek.com/products/bolt-6-lt-set`;
const SONY_GUIDE = "https://helpguide.sony.net/ilc/2210/v1/en/contents/";
const SONY_SENSOR = `Sony. (n.d.-a). *Cleaning the image sensor (Sensor Cleaning)* [ILME-FX3 help guide]. ${READ} ${SONY_GUIDE}TP1000843984.html`;
const SONY_LENDING = `Sony. (n.d.-b). *Lending, transferring or discarding the camera and/or memory card to others (Notes on protecting private information)* [ILME-FX3 help guide]. ${READ} ${SONY_GUIDE}TP1001273512.html`;
const SONY_BATTERY = `Sony. (n.d.-c). *Notes on the battery pack and charging the battery* [ILME-FX3 help guide]. ${READ} ${SONY_GUIDE}TP1000844044.html`;
const SONY_CLEANING = `Sony. (n.d.-d). *On cleaning* [ILME-FX3 help guide]. ${READ} ${SONY_GUIDE}TP1000844047.html`;
const SONY_RESET = `Sony. (n.d.-e). *Setting Reset* [ILME-FX3 help guide]. ${READ} ${SONY_GUIDE}TP1000844002.html`;
const SONY_VERSION = `Sony. (n.d.-f). *Version* [ILME-FX3 help guide]. ${READ} ${SONY_GUIDE}TP1000887636.html`;
const TSA_LI = `Transportation Security Administration. (n.d.). *Lithium batteries with more than 100 watt hours*. ${READ} https://www.tsa.gov/travel/security-screening/whatcanibring/items/lithium-batteries-more-100-watt-hours`;
const CFR_173_22 = "Shipper's responsibility, 49 C.F.R. § 173.22 (2026). https://www.law.cornell.edu/cfr/text/49/173.22";
const CFR_173_185 = "Lithium cells and batteries, 49 C.F.R. § 173.185 (2026). https://www.law.cornell.edu/cfr/text/49/173.185";

// Labor, the market and wireless
const RATE_GUIDE = "The Rate Guide. (2026). *Camera operator day rate* [Updated August 2026]. https://therateguide.com/camera-operator-day-rate";
const IATSE_796 = `IATSE Local 796. (n.d.). *Rates card*. ${READ} https://www.iatse796.org/ratescard.html`;
const NFL_EFC = `NFL Football Operations. (n.d.). *Event frequency coordinators*. ${READ} https://operations.nfl.com/game-operations-logistics/game-day-assistants/event-frequency-coordinators`;
const CFR_74_600 = "Eligibility for license, 47 C.F.R. § 74.600 (2026). https://www.law.cornell.edu/cfr/text/47/74.600";

// Insurance
const III_INVENTORY = `Insurance Information Institute. (n.d.-a). *How to create a home inventory*. ${READ} https://www.iii.org/article/how-to-create-a-home-inventory`;
const III_HOME_BUSINESS = `Insurance Information Institute. (n.d.-b). *Insuring your home-based business*. ${READ} https://www.iii.org/article/insuring-your-home-based-business`;
const III_BASICS = `Insurance Information Institute. (n.d.-c). *Small business insurance basics*. ${READ} https://www.iii.org/article/small-business-insurance-basics`;
const III_INLAND_MARINE = `Insurance Information Institute. (n.d.-d). *Understanding inland marine insurance*. ${READ} https://www.iii.org/article/understanding-inland-marine-insurance`;
const IRMI_FLOATER = `International Risk Management Institute. (n.d.). *Equipment floater* [Glossary entry]. ${READ} https://www.irmi.com/term/insurance-definitions/equipment-floater`;
const IRMI_MAMECF =
  "Roberts, C. (2020, April 10). *The mobile agricultural machinery and equipment coverage form (MAMECF)*. International Risk Management Institute. https://www.irmi.com/articles/expert-commentary/the-mobile-agricultural-machinery-and-equipment-coverage-form-(mamecf)";
const ATHOS = `Athos Insurance. (n.d.). *Buy equipment insurance*. ${READ} https://www.athosinsurance.com/buy-equipment-insurance`;
const INSUREON = "Insureon. (2026, May 21). *Inland marine insurance cost*. https://www.insureon.com/small-business-insurance/inland-marine/cost";

// Taxes and records
const IRS_P946 = "Internal Revenue Service. (2026, April 30). *Publication 946 (2025), How to depreciate property*. https://www.irs.gov/publications/p946";
const IRS_P583 = "Internal Revenue Service. (2026, April 30). *Publication 583 (12/2024), Starting a business and keeping records*. https://www.irs.gov/publications/p583";
const IRS_P525 = "Internal Revenue Service. (2026, April 30). *Publication 525 (2025), Taxable and nontaxable income*. https://www.irs.gov/publications/p525";
const IRS_TANGIBLE = "Internal Revenue Service. (2026, August 4). *Tangible property final regulations*. https://www.irs.gov/businesses/small-businesses-self-employed/tangible-property-final-regulations";
const IRS_GIG = "Internal Revenue Service. (2026, July 9). *Gig economy tax center*. https://www.irs.gov/businesses/gig-economy-tax-center";
const IRS_SE = "Internal Revenue Service. (2026, June 27). *Self-employment tax (Social Security and Medicare taxes)*. https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes";
const IRS_1099 = "Internal Revenue Service. (2026, July 1). *Instructions for Forms 1099-MISC and 1099-NEC* (Rev. December 2026). https://www.irs.gov/instructions/i1099mec";
const SBA_TAXES = `U.S. Small Business Administration. (n.d.). *Pay taxes*. ${READ} https://www.sba.gov/business-guide/manage-your-business/pay-taxes`;

/** The marker every lesson needing a qualified reviewer opens with. */
const QR = (who: string) => `> **Before release:** needs a qualified reviewer (QR): ${who}.`;
/** The marker every lesson needing a practitioner opens with. */
const P = (what: string) => `> **Before release:** needs a practitioner: ${what}.`;

export const RENTING_OUT_PRODUCTION_GEAR_COURSE: AuthoredCourse = {
  title: "Renting Out Production Gear: the Owner-Operator's Business",
  description:
    "For camera operators, sound mixers and other crew who own production gear, or are thinking about buying it, and want to know whether renting it out makes sense. The course reads the market from published price lists and platform terms: rental houses, a peer-to-peer platform, and the owner-operator who brings a kit and charges a kit fee. It teaches how to choose what to own and what to keep renting, how to buy new or used and keep the records an insurer and the IRS ask for, how to price day, weekend and week rentals against the real market (and why a percentage-of-replacement-value rule can mislead), how damage waivers differ from insurance, how to protect gear against damage, theft and non-return, how to prep, check out, check in, clean, repair and retire it, and how to do break-even math honestly, with your own labor counted separately from what the gear earns. Depreciation, expensing and tax records are taught at a beginner's level, with a plain instruction to talk to a tax professional. No lesson promises income, and every rate is a dated example. Lessons on contracts, insurance and taxes are marked for a qualified reviewer. Part of The Crew Behind the Show series.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1: The market
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "who-rents-out-production-gear",
      title: "1 · Who rents out production gear",
      section: "1 · The market",
      body: `**What this course is for.** It is for crew who own production gear, or are thinking about buying it, and want to know whether renting it out makes sense. By the end you should be able to decide whether to start, choose what to own and what to keep renting, buy sensibly, price against the real market, protect the gear, run check-out and check-in, maintain and retire it, and do the break-even math honestly, with your own labor counted separately from what the gear earns.

**What it is not.** It is not legal, tax or insurance advice. Lessons on contracts, insurance and taxes carry a box at the top that begins "Before release", and they wait for a qualified reviewer. The course does not promise that renting gear will make you money. Every price in it was read on October 21, 2026, and is an example with that date, not a rate to copy.

**Three kinds of business.** Gear reaches a production in three common ways.

1. **The rental house.** A regional rental house publishes a price list on its website. On October 21, 2026, it listed a Sony FX3 cinema camera with its XLR top handle at $125 for one day and $562.50 for one week. Its policy page sets the terms: a renter must be at least 21 and show a valid government ID and a credit card, and a reservation that includes items of $3,000 or more needs a certificate of insurance for rented equipment. Lensrentals, a rental house that publishes its prices by rental length, listed a Sony FX3 A body at $155 for 3 days and $222 for 7 days.
2. **The peer-to-peer platform.** On ShareGrid, owners list their own gear and other members rent it; its help pages call the listings "the marketplace". It charges owners a "Fixed 15% service fee". Lesson 12 works through what that fee leaves you.
3. **The owner-operator.** You are hired to operate, and the client pays you separately for bringing your own kit. One published rate guide calls this "kit rental" and gives a norm for it that lesson 13 tests against real price lists.

**Platforms come and go.** In January 2023, KitSplit's home page offered "The easiest way to rent camera gear" and told renters to "Rent from trusted local creatives in your community." On October 21, 2026, the same address read only: "Stay tuned! We will be back shortly." A business built on one platform depends on that platform staying open.

**Three words this course uses.** It uses its own short names for three arrangements, so the lessons can be exact:

- **Dry hire:** the gear goes out without you, through a rental platform or direct to a client.
- **Kit fee:** the gear goes out with you as its operator, and the client pays for the gear on top of your day rate.
- **Labor:** your day rate as an operator. Lesson 3 explains why the gear never gets credit for it.

:::reveal Name the three kinds of business through which gear reaches a production in this lesson. ||| The rental house, the peer-to-peer platform, and the owner-operator who brings a kit.

:::reveal What did KitSplit's home page say on October 21, 2026? ||| "Stay tuned! We will be back shortly."

:::reveal In this course, what is the difference between dry hire and a kit fee? ||| Dry hire sends the gear out without you; a kit fee is paid for the gear when you go with it as the operator, on top of your day rate.

## Sources
- ${RH_FX3} Locator: price lines "1 Day" and "1 Week".
- ${RH_POLICIES} Locator: rental requirements (age, ID, credit card) and the insurance requirement for items of $3,000 or more.
- ${LR_FX3A} Locator: rental price table, 3-day and 7-day rows.
- ${SG_BEST_MATCH} Locator: closing paragraph, "credibility in the marketplace".
- ${SG_FEES} Locator: "Rentals", owner fee.
- ${KITSPLIT_2023} Locator: the page's headline and the line under it.
- ${KITSPLIT} Locator: the whole page.
- ${RATE_GUIDE} Locator: the paragraph on kit rental.`,
    },
    {
      slug: "why-productions-rent",
      title: "2 · Why productions rent instead of buying",
      section: "1 · The market",
      recallContent: [
        {
          prompt: "What did one regional rental house charge for a Sony FX3 with XLR top handle on October 21, 2026?",
          answer: "$125 for one day and $562.50 for one week.",
        },
        {
          prompt: "In this course, what is a kit fee?",
          answer: "Payment for your gear when you go with it as its operator, on top of your day rate.",
        },
      ],
      body: `**Start from the production's side.** Everything a production avoids by renting, the owner takes on. So the first question is what a production avoids, and the published prices answer much of it.

**The arithmetic of one camera.** On October 21, 2026, a camera retailer listed the Sony FX3A body at $4,298. The same day, Lensrentals listed the FX3 A body at $155 for 3 days and $222 for 7 days. This course's own arithmetic:

- A 3-day rental costs $155 ÷ $4,298 = about 3.6 percent of the purchase price.
- Buying would equal the 3-day price about 28 times over ($4,298 ÷ $155 = 27.7).

A production that needs the camera for one shoot, or a few shoots a year, pays a few percent of its price each time and hands it back. That is the core reason to rent, and it is the core problem for an owner: the owner has to find those 28 rentals, or more once fees and upkeep are counted.

**A package, not a bare item.** Lensrentals lists exactly what arrives with the FX3 A body: the body, a body cap, a strap, an NP-FZ100 battery, a BC-ZD1 charger, a 3-foot Thunderbolt 4 USB-C cable and a USB charger. Its wireless video kit lists its parts too, and then says: "Batteries are not included and must be rented separately." A production that rents gets a written list of what will be in the case. An owner who rents gear out has to be just as exact.

**What renting costs a production besides the price.** Renting is not free of conditions. The regional rental house requires a certificate of insurance for reservations that include items of $3,000 or more, and from a first-time renter it may ask for a credit card hold of $1,000 (or the full value of the rental equipment, whichever is less). A production that rents often may weigh those costs against buying.

**What the owner takes on.** Teradek's page for its Bolt 4K 750 Deluxe Kit, listed at $6,890, showed every version "Sold Out" on October 21, 2026, and pointed buyers onward: "For the latest Bolt generation see Bolt 6." A production that rents simply rents the newer generation. The owner of the older one still owns it. This course's reading, from those pages: renting moves four things from the production to the owner, and later lessons take them one at a time.

1. The purchase price (section 3).
2. The idle days between bookings (lesson 5).
3. Upkeep, repair and the risk of damage or loss (sections 5 and 6).
4. The new model that makes yours the older one (lesson 6).

:::reveal By this course's arithmetic, about what share of the FX3A's retail price did a 3-day rental cost on October 21, 2026? ||| About 3.6 percent ($155 ÷ $4,298).

:::reveal What did Lensrentals' wireless video kit listing say about batteries? ||| "Batteries are not included and must be rented separately."

:::reveal Name two of the four things this lesson says renting moves from the production to the owner. ||| Any two of: the purchase price; the idle days between bookings; upkeep, repair and the risk of damage or loss; the newer model that makes yours the older one.

## Sources
- ${FOCUS_FX3A} Locator: price line.
- ${LR_FX3A} Locator: rental price table, 3-day and 7-day rows; "What's included" list.
- ${LR_BOLT} Locator: included-items list and the batteries note.
- ${RH_POLICIES} Locator: insurance requirement and the credit card authorization paragraph.
- ${TERADEK_4K} Locator: product variants and price; "Product Overview", first sentence.`,
    },
    {
      slug: "gear-income-and-your-labor",
      title: "3 · Gear income, kit fees and your labor",
      section: "1 · The market",
      recallContent: [
        {
          prompt: "Why does this course say a production rents a camera instead of buying it?",
          answer: "A rental costs a few percent of the purchase price each time (a 3-day FX3 A rental was about 3.6 percent of its retail price), so a production that needs it only now and then pays far less and hands it back.",
        },
        {
          prompt: "What did Teradek's Bolt 4K 750 Deluxe Kit page say to buyers on October 21, 2026?",
          answer: "\"For the latest Bolt generation see Bolt 6.\" Every version of the older kit showed \"Sold Out\".",
        },
      ],
      body: `**Three streams of money, kept apart.** An owner-operator can be paid three different ways, and only two of them pay for the gear.

| Stream | What the client buys | Does it pay for the gear? |
|---|---|---|
| Labor | Your day as an operator | No |
| Kit fee | Your gear, while you operate it | Yes, after upkeep |
| Dry hire | Your gear, with someone else operating it | Yes, after fees and upkeep |

**Why your labor is not gear income.** This is the course's own reasoning, and the rest of the course depends on it. If you would have earned your day rate running a client's camera, then the day rate is not something your camera earned. Only the money the gear brings in on top of your labor counts toward paying for the gear. An owner who adds the day rate to the gear's earnings will think the gear pays for itself when it may not.

**The tax forms split them too.** The IRS instructions for Forms 1099-MISC and 1099-NEC tell a business that pays for a machine and its operator together to split the payment: "If the machine rental is part of a contract that includes both the use of the machine and the operator, prorate the rental between the rent of the machine (report that in box 1) and the operator's charge (report that on Form 1099-NEC in box 1a)." The example the IRS gives is a bulldozer, but the rule is about any machine rented with its operator. Section 7 comes back to the forms.

**What labor pays, as dated examples.** Two published figures, each with its date:

- IATSE Local 796's rates card lists a handheld camera operator at a daily minimum of $550.70, "Beginning 4/1/21", for a 10-hour day of 9 hours at straight time and 1 hour of overtime. A hard camera operator's daily minimum is $521.72.
- The Rate Guide, updated August 2026, reports that "ProductionHub's 2025 data puts the median freelance camera operator day rate at $750."

These are examples, not your rate. They show the size of the labor number next to the gear numbers in later lessons, and why it must be kept out of them.

**What this course could not find.** The Local 796 rates card lists day rates and has no line about equipment, kit or box rental. This course found no published rule for how a union call pays a member for the use of their own kit, so it gives none. If you work union calls, ask your local how its contracts treat a member's own gear before you price a kit fee. Lesson 28 returns to this.

:::reveal Which of the three streams does not count toward paying for the gear, and why? ||| Labor. You could have earned your day rate on a client's gear, so the day rate is not something your gear earned.

:::reveal What do the IRS instructions tell a payer to do when a machine is rented with its operator? ||| Prorate the payment: the machine's rent goes in box 1 of Form 1099-MISC and the operator's charge on Form 1099-NEC in box 1a.

:::reveal What does the Local 796 rates card say about a member's own kit? ||| Nothing. It lists day rates and has no line about equipment, kit or box rental.

## Sources
- ${IRS_1099} Locator: "Specific Instructions for Form 1099-MISC", "Box 1. Rents", the machine rentals paragraph.
- ${IATSE_796} Locator: the "Beginning 4/1/21" rate table, Handheld Camera Operator and Hard Camera Operator rows, and the 9 plus 1 note.
- ${RATE_GUIDE} Locator: the median day rate paragraph.`,
    },
    {
      slug: "section-1-quiz",
      title: "Section 1 quiz · The market",
      section: "1 · The market",
      body: "A graded check on who rents out production gear, why productions rent instead of buying, and why gear income, kit fees and your own labor are kept apart. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "Who is this course written for?", options: ["Crew who own gear or are thinking of buying it", "Rental house managers setting their day rates", "Producers choosing which camera to rent next", "Insurers writing policies for camera owners"], correctIndex: 0, explanation: "Lesson 1: the course is for crew who own production gear, or are thinking about buying it, and want to know whether renting it out makes sense. It is not written for rental house managers, producers or insurers.", sourceLessonSlug: "who-rents-out-production-gear" },
          { prompt: "What does the course say about whether renting gear will make you money?", options: ["It promises a profit inside the first year", "It does not promise that renting will pay", "It guarantees income once the gear is insured", "It promises payback after about 28 rentals"], correctIndex: 1, explanation: "\"The course does not promise that renting gear will make you money.\" It makes no profit, income or payback promise.", sourceLessonSlug: "who-rents-out-production-gear" },
          { prompt: "On what date were the prices in this course read?", options: ["January 15, 2023", "April 1, 2021", "October 21, 2026", "August 31, 2026"], correctIndex: 2, explanation: "\"Every price in it was read on October 21, 2026\". January 2023 is the date of KitSplit's archived home page, and April 1, 2021 is when the union rates card's figures began.", sourceLessonSlug: "who-rents-out-production-gear" },
          { prompt: "How does lesson 1 tell you to treat a price quoted in this course?", options: ["As the minimum a renter must legally pay", "As a rate every platform has to charge", "As a national average across all houses", "As a dated example, not a rate to copy"], correctIndex: 3, explanation: "Each price \"is an example with that date, not a rate to copy.\" The course never presents a price as a legal minimum, a required platform rate or a national average.", sourceLessonSlug: "who-rents-out-production-gear" },
          { prompt: "Which lessons carry a box at the top that begins \"Before release\"?", options: ["Lessons on contracts, insurance and taxes", "Lessons on cameras, lenses and gimbals", "Lessons on listings, photos and reviews", "Lessons on batteries, cleaning and firmware"], correctIndex: 0, explanation: "\"Lessons on contracts, insurance and taxes carry a box at the top that begins 'Before release', and they wait for a qualified reviewer.\"", sourceLessonSlug: "who-rents-out-production-gear" },
          { prompt: "What does a \"Before release\" box on a lesson tell you?", options: ["The lesson is optional for experienced owners", "The lesson waits for a qualified reviewer", "The lesson holds its section's graded quiz", "The lesson was written by a rental house"], correctIndex: 1, explanation: "Lessons with the box \"wait for a qualified reviewer.\" The box does not mark optional reading, a quiz, or a rental house as author.", sourceLessonSlug: "who-rents-out-production-gear" },
          { prompt: "What did the regional rental house charge for a Sony FX3 with XLR top handle?", options: ["$155 for 3 days, $222 for 7 days", "$75 a day and $335 for a week", "$125 a day and $562.50 for a week", "$300 a day and $1,200 for a week"], correctIndex: 2, explanation: "On October 21, 2026, the regional house listed the FX3 with XLR top handle at $125 for one day and $562.50 for one week. $155 and $222 are Lensrentals' FX3 A prices; $75 and $300 a day are other cameras.", sourceLessonSlug: "who-rents-out-production-gear" },
          { prompt: "How old must a renter be at the regional rental house?", options: ["At least 18 years old", "At least 25 years old", "At least 30 years old", "At least 21 years old"], correctIndex: 3, explanation: "Its policy page says \"a renter must be at least 21\".", sourceLessonSlug: "who-rents-out-production-gear" },
          { prompt: "Besides meeting the age rule, what must a renter show at the regional rental house?", options: ["A valid government ID and a credit card", "A business license and a cash deposit", "A union card and a producer's letter", "Two references and a recent utility bill"], correctIndex: 0, explanation: "A renter must \"show a valid government ID and a credit card\". The lesson names no license, union card or references.", sourceLessonSlug: "who-rents-out-production-gear" },
          { prompt: "When does a reservation at the regional rental house need a certificate of insurance for rented equipment?", options: ["When the rental lasts longer than a week", "When it includes items of $3,000 or more", "When the renter is younger than 25 years", "When the gear will leave the renter's state"], correctIndex: 1, explanation: "\"a reservation that includes items of $3,000 or more needs a certificate of insurance for rented equipment.\" Length, age and travel are not the trigger in the lesson.", sourceLessonSlug: "who-rents-out-production-gear" },
          { prompt: "How does lesson 1 describe the way Lensrentals publishes its prices?", options: ["By the hour, with a two-hour minimum", "Only as a quote after a phone call", "By rental length, such as 3 or 7 days", "As a share of each item's full value"], correctIndex: 2, explanation: "Lensrentals is \"a rental house that publishes its prices by rental length\": the FX3 A body was $155 for 3 days and $222 for 7 days.", sourceLessonSlug: "who-rents-out-production-gear" },
          { prompt: "What did Lensrentals list for the FX3 A body on October 21, 2026?", options: ["$125 for 3 days, $562.50 for 7 days", "$142 for 3 days and $203 for 7 days", "$222 for 3 days and $300 for 7 days", "$155 for 3 days and $222 for 7 days"], correctIndex: 3, explanation: "The FX3 A body was $155 for 3 days and $222 for 7 days. $142 and $203 are the Bolt 6 LT kit's prices, and $125 and $562.50 are the regional house's FX3 day and week prices.", sourceLessonSlug: "who-rents-out-production-gear" },
          { prompt: "On ShareGrid, who lists the gear that members rent?", options: ["Owners, who list their own gear", "ShareGrid, from its own warehouse", "Rental houses, from their own stock", "Makers, who list their demo units"], correctIndex: 0, explanation: "\"On ShareGrid, owners list their own gear and other members rent it\". That is what makes it a peer-to-peer platform.", sourceLessonSlug: "who-rents-out-production-gear" },
          { prompt: "What service fee does ShareGrid charge owners?", options: ["A fixed 10% service fee", "A fixed 15% service fee", "A fixed 20% service fee", "A flat $25 per booking"], correctIndex: 1, explanation: "ShareGrid \"charges owners a 'Fixed 15% service fee'\". Lesson 12 works through what that leaves an owner.", sourceLessonSlug: "who-rents-out-production-gear" },
          { prompt: "What do ShareGrid's help pages call its listings?", options: ["The gear library", "The rental catalog", "The marketplace", "The kit exchange"], correctIndex: 2, explanation: "Its help pages call the listings \"the marketplace\".", sourceLessonSlug: "who-rents-out-production-gear" },
          { prompt: "How is an owner-operator paid for bringing their own kit?", options: ["The kit is folded into the day rate", "The platform pays a share of its fee", "The rental house pays a finder's fee", "The client pays for the kit separately"], correctIndex: 3, explanation: "\"You are hired to operate, and the client pays you separately for bringing your own kit.\"", sourceLessonSlug: "who-rents-out-production-gear" },
          { prompt: "What does one published rate guide call an operator's payment for bringing their own gear?", options: ["Kit rental", "Box hire", "Gear lease", "Crew fee"], correctIndex: 0, explanation: "\"One published rate guide calls this 'kit rental'\", and lesson 13 tests its norm against real price lists.", sourceLessonSlug: "who-rents-out-production-gear" },
          { prompt: "What did KitSplit's home page offer in January 2023?", options: ["The largest used camera store online", "The easiest way to rent camera gear", "Insurance for owners who rent gear", "A hiring hall for freelance crews"], correctIndex: 1, explanation: "In January 2023 KitSplit's home page offered \"The easiest way to rent camera gear\" and told renters to \"Rent from trusted local creatives in your community.\"", sourceLessonSlug: "who-rents-out-production-gear" },
          { prompt: "What lesson does the course draw from KitSplit's home page in 2026?", options: ["Platform fees always rise after a sale", "List the same price on every platform", "A business on one platform needs it open", "Platforms close when rental houses win"], correctIndex: 2, explanation: "On October 21, 2026, the page read only \"Stay tuned! We will be back shortly.\" The lesson: \"A business built on one platform depends on that platform staying open.\"", sourceLessonSlug: "who-rents-out-production-gear" },
          { prompt: "In this course's words, what is dry hire?", options: ["You operate the gear and are paid a kit fee", "You rent a house's gear for your own shoot", "You are paid for labor on a client's gear", "The gear goes out without you as operator"], correctIndex: 3, explanation: "\"Dry hire: the gear goes out without you, through a rental platform or direct to a client.\" Going out with it as operator is a kit fee.", sourceLessonSlug: "who-rents-out-production-gear" },
          { prompt: "In this course's words, what is a kit fee?", options: ["Pay for your gear while you operate it", "Pay for your day as the camera operator", "A platform's charge for listing the gear", "A rental house's fee for cleaning a kit"], correctIndex: 0, explanation: "\"Kit fee: the gear goes out with you as its operator, and the client pays for the gear on top of your day rate.\" Your day rate is labor.", sourceLessonSlug: "who-rents-out-production-gear" },
          { prompt: "Which of the course's three words means your day rate as an operator?", options: ["Kit fee", "Labor", "Dry hire", "Box rent"], correctIndex: 1, explanation: "\"Labor: your day rate as an operator.\" A kit fee pays for the gear while you operate it, and dry hire sends the gear out without you.", sourceLessonSlug: "who-rents-out-production-gear" },

          { prompt: "Lesson 2 starts from the production's side. What does it say the owner takes on?", options: ["Only the cost of insuring the gear", "Only the renter's credit card hold", "Everything a production avoids by renting", "Half of the production's rental costs"], correctIndex: 2, explanation: "\"Everything a production avoids by renting, the owner takes on.\" So the first question is what a production avoids.", sourceLessonSlug: "why-productions-rent" },
          { prompt: "What did a camera retailer list as the price of the Sony FX3A body?", options: ["$3,549", "$6,890", "$2,390", "$4,298"], correctIndex: 3, explanation: "On October 21, 2026, a camera retailer listed the Sony FX3A body at $4,298. $3,549 is the low end of MPB's used FX3 range, $6,890 the Bolt 4K kit and $2,390 the Bolt 6 LT set.", sourceLessonSlug: "why-productions-rent" },
          { prompt: "By the course's arithmetic, what share of the FX3A's price did a 3-day rental cost?", options: ["About 3.6 percent", "About 10 percent", "About 15 percent", "About 1.5 percent"], correctIndex: 0, explanation: "\"A 3-day rental costs $155 ÷ $4,298 = about 3.6 percent of the purchase price.\" Ten to fifteen percent is the rate guide's kit norm, not this arithmetic.", sourceLessonSlug: "why-productions-rent" },
          { prompt: "About how many 3-day rentals of the FX3 A equal its purchase price?", options: ["About 17", "About 28", "About 12", "About 45"], correctIndex: 1, explanation: "\"Buying would equal the 3-day price about 28 times over ($4,298 ÷ $155 = 27.7).\" About 17 and about 12 are the Bolt 6 LT's 3-day and weekly counts.", sourceLessonSlug: "why-productions-rent" },
          { prompt: "What is $4,298 divided by $155, as lesson 2 works it?", options: ["16.8", "11.8", "27.7", "35.1"], correctIndex: 2, explanation: "$4,298 ÷ $155 = 27.7, so about 28 three-day rentals equal the purchase price. 16.8 and 11.8 come from the Bolt 6 LT example in lesson 7.", sourceLessonSlug: "why-productions-rent" },
          { prompt: "Lesson 2 calls the cheapness of renting the core problem for an owner. Why?", options: ["Productions refuse to pay rental deposits", "Rental houses buy every camera at a discount", "Platforms set the price an owner may charge", "The owner has to find those 28 rentals or more"], correctIndex: 3, explanation: "\"the owner has to find those 28 rentals, or more once fees and upkeep are counted.\"", sourceLessonSlug: "why-productions-rent" },
          { prompt: "Which battery and charger come with Lensrentals' FX3 A body rental?", options: ["An NP-FZ100 battery and a BC-ZD1 charger", "A V-mount battery and a dual V-mount charger", "Two NP-F970 batteries and a travel charger", "No battery; it must be rented separately"], correctIndex: 0, explanation: "Lensrentals lists \"an NP-FZ100 battery, a BC-ZD1 charger\" among what arrives with the FX3 A body. The note about renting batteries separately belongs to the wireless video kit.", sourceLessonSlug: "why-productions-rent" },
          { prompt: "Which cable does Lensrentals list in the FX3 A box?", options: ["A 6-foot HDMI to micro HDMI cable", "A 3-foot Thunderbolt 4 USB-C cable", "A 10-foot SDI cable with BNC ends", "A 3-foot D-Tap camera power cable"], correctIndex: 1, explanation: "The list includes \"a 3-foot Thunderbolt 4 USB-C cable\", along with the body, body cap, strap, battery, charger and a USB charger.", sourceLessonSlug: "why-productions-rent" },
          { prompt: "What does Lensrentals' wireless video kit listing say about batteries?", options: ["One battery is included per transmitter", "Batteries ship charged to half capacity", "They are not included and are rented apart", "Batteries come only with the 7-day rental"], correctIndex: 2, explanation: "The listing says: \"Batteries are not included and must be rented separately.\"", sourceLessonSlug: "why-productions-rent" },
          { prompt: "What does lesson 2 conclude from rental houses' exact lists of what is in the case?", options: ["Owners should never list accessories", "Productions should bring their own cables", "Package lists matter only on long rentals", "An owner must be just as exact about it"], correctIndex: 3, explanation: "\"A production that rents gets a written list of what will be in the case. An owner who rents gear out has to be just as exact.\"", sourceLessonSlug: "why-productions-rent" },
          { prompt: "How much may the regional rental house hold on a first-time renter's credit card?", options: ["Up to $1,000, or the gear's value if less", "Up to $3,000, or the gear's value if more", "The full replacement value of every item", "A flat $500 on every single reservation"], correctIndex: 0, explanation: "From a first-time renter it may ask for \"a credit card hold of $1,000 (or the full value of the rental equipment, whichever is less).\" It does not hold $3,000, the full replacement value, or a flat $500.", sourceLessonSlug: "why-productions-rent" },
          { prompt: "Why does lesson 2 say renting is \"not free of conditions\" for a production?", options: ["Houses require a year-long contract", "Insurance and card holds can be required", "Renters must also buy one item a year", "Rented gear may be used only in a studio"], correctIndex: 1, explanation: "The regional house requires a certificate of insurance for items of $3,000 or more and may hold up to $1,000 on a card. \"A production that rents often may weigh those costs against buying.\"", sourceLessonSlug: "why-productions-rent" },
          { prompt: "What price did Teradek list for its Bolt 4K 750 Deluxe Kit?", options: ["$2,390", "$4,298", "$6,890", "$1,200"], correctIndex: 2, explanation: "Teradek listed the Bolt 4K 750 Deluxe Kit at $6,890, with every version \"Sold Out\". $2,390 is the Bolt 6 LT set.", sourceLessonSlug: "why-productions-rent" },
          { prompt: "Where did Teradek's Bolt 4K Deluxe Kit page point buyers on October 21, 2026?", options: ["To a used-gear dealer", "To its rental partners", "To the Bolt 4K 1500 kit", "To the Bolt 6 generation"], correctIndex: 3, explanation: "The page said: \"For the latest Bolt generation see Bolt 6.\"", sourceLessonSlug: "why-productions-rent" },
          { prompt: "When a newer generation ships, what happens to a production that rents, according to lesson 2?", options: ["It simply rents the newer generation", "It must keep renting the older model", "It pays a fee to switch to the new one", "It buys the older model at a discount"], correctIndex: 0, explanation: "\"A production that rents simply rents the newer generation. The owner of the older one still owns it.\"", sourceLessonSlug: "why-productions-rent" },
          { prompt: "Which of these is one of the four things lesson 2 says renting moves from the production to the owner?", options: ["The renter's certificate of insurance", "The idle days between bookings", "The renter's credit card hold", "The rental house's cleaning fees"], correctIndex: 1, explanation: "The four are the purchase price, the idle days between bookings, upkeep with the risk of damage or loss, and the new model that makes yours the older one.", sourceLessonSlug: "why-productions-rent" },
          { prompt: "Which of the four things that move to the owner does lesson 6 take up?", options: ["The purchase price of the gear", "The idle days between bookings", "The newer model replacing yours", "The risk of damage or of loss"], correctIndex: 2, explanation: "Lesson 2's list: the purchase price (section 3), idle days (lesson 5), upkeep, repair and risk (sections 5 and 6), and \"The new model that makes yours the older one (lesson 6).\"", sourceLessonSlug: "why-productions-rent" },
          { prompt: "Where does lesson 2 say the idle days between bookings are taken up?", options: ["Section 3", "Section 7", "Lesson 13", "Lesson 5"], correctIndex: 3, explanation: "\"The idle days between bookings (lesson 5).\" Section 3 takes up the purchase price.", sourceLessonSlug: "why-productions-rent" },

          { prompt: "Of the three streams of money in lesson 3, which pay for the gear?", options: ["Kit fee and dry hire", "Labor and dry hire", "Labor and kit fee", "Labor alone"], correctIndex: 0, explanation: "Only two of the three pay for the gear: the kit fee and dry hire. Labor does not.", sourceLessonSlug: "gear-income-and-your-labor" },
          { prompt: "Which stream in lesson 3 does not pay for the gear?", options: ["Kit fee", "Labor", "Dry hire", "Rental"], correctIndex: 1, explanation: "Labor (your day as an operator) does not pay for the gear. Kit fees do, and dry hire does after fees and upkeep.", sourceLessonSlug: "gear-income-and-your-labor" },
          { prompt: "With what condition does dry hire pay for the gear, according to lesson 3's table?", options: ["Only when you also operate it", "Only on a union production", "After fees and upkeep are paid", "Only on rentals of a week or more"], correctIndex: 2, explanation: "The table says dry hire pays for the gear \"Yes, after fees and upkeep\". Dry hire means someone else operates it.", sourceLessonSlug: "gear-income-and-your-labor" },
          { prompt: "What does a client buy when it pays you a kit fee?", options: ["Your day as an operator", "Your gear, with someone else on it", "A share of a platform's service fee", "Your gear, while you operate it"], correctIndex: 3, explanation: "The table: a kit fee buys \"Your gear, while you operate it\". Your day is labor, and gear run by someone else is dry hire.", sourceLessonSlug: "gear-income-and-your-labor" },
          { prompt: "Why does lesson 3 say your day rate is not something your gear earned?", options: ["You could earn it on a client's gear", "The IRS taxes day rates at a lower rate", "Union rules forbid adding gear to pay", "Platforms take a fee from every day rate"], correctIndex: 0, explanation: "\"If you would have earned your day rate running a client's camera, then the day rate is not something your camera earned.\"", sourceLessonSlug: "gear-income-and-your-labor" },
          { prompt: "What mistake does lesson 3 warn an owner against making with the day rate?", options: ["Charging a day rate under the union scale", "Adding it to the gear's earnings", "Billing it on a different invoice", "Asking for it before the job starts"], correctIndex: 1, explanation: "\"An owner who adds the day rate to the gear's earnings will think the gear pays for itself when it may not.\"", sourceLessonSlug: "gear-income-and-your-labor" },
          { prompt: "What counts toward paying for the gear, in lesson 3's reasoning?", options: ["The full day rate on every gear job", "Half of the day rate on gear jobs", "Money the gear brings beyond your labor", "Only money from union calls with kit"], correctIndex: 2, explanation: "\"Only the money the gear brings in on top of your labor counts toward paying for the gear.\"", sourceLessonSlug: "gear-income-and-your-labor" },
          { prompt: "What do the IRS 1099 instructions tell a payer to do when a machine is rented with its operator?", options: ["Report the whole payment as wages", "Report the whole payment as rent", "Report nothing under $5,000 a year", "Prorate it between rent and operator"], correctIndex: 3, explanation: "\"prorate the rental between the rent of the machine (report that in box 1) and the operator's charge (report that on Form 1099-NEC in box 1a).\"", sourceLessonSlug: "gear-income-and-your-labor" },
          { prompt: "Where do the IRS instructions say the machine's rent is reported?", options: ["In box 1 of Form 1099-MISC", "In box 1a of Form 1099-NEC", "In box 3 of Form 1099-MISC", "In box 7 of Form 1099-NEC"], correctIndex: 0, explanation: "The rent of the machine goes in box 1 (the \"Box 1. Rents\" instruction of Form 1099-MISC); the operator's charge goes on Form 1099-NEC in box 1a.", sourceLessonSlug: "gear-income-and-your-labor" },
          { prompt: "Where do the IRS instructions say the operator's charge is reported?", options: ["Form 1099-MISC, box 1", "Form 1099-NEC, box 1a", "Form 1099-K, box 1a", "Form W-2, box 1 only"], correctIndex: 1, explanation: "The operator's charge is reported \"on Form 1099-NEC in box 1a\". Box 1 of Form 1099-MISC holds the machine's rent.", sourceLessonSlug: "gear-income-and-your-labor" },
          { prompt: "What machine does the IRS use as its example of a rental with an operator?", options: ["A camera", "A crane", "A bulldozer", "A forklift"], correctIndex: 2, explanation: "\"The example the IRS gives is a bulldozer, but the rule is about any machine rented with its operator.\"", sourceLessonSlug: "gear-income-and-your-labor" },
          { prompt: "What daily minimum does IATSE Local 796's rates card list for a handheld camera operator?", options: ["$521.72", "$750.00", "$625.50", "$550.70"], correctIndex: 3, explanation: "Handheld camera operator: $550.70 a day. $521.72 is the hard camera operator's minimum, and $750 is the rate guide's median freelance figure.", sourceLessonSlug: "gear-income-and-your-labor" },
          { prompt: "From what date do the Local 796 rates quoted in lesson 3 apply?", options: ["April 1, 2021", "August 1, 2026", "January 1, 2025", "October 21, 2026"], correctIndex: 0, explanation: "The card reads \"Beginning 4/1/21\": April 1, 2021. October 21, 2026 is when the course read it.", sourceLessonSlug: "gear-income-and-your-labor" },
          { prompt: "How is the 10-hour day on the Local 796 card made up?", options: ["10 hours, all at straight time", "9 straight hours plus 1 overtime", "8 straight hours plus 2 overtime", "10 hours, all at the overtime rate"], correctIndex: 1, explanation: "The rates are \"for a 10-hour day of 9 hours at straight time and 1 hour of overtime.\"", sourceLessonSlug: "gear-income-and-your-labor" },
          { prompt: "What daily minimum does the Local 796 card give a hard camera operator?", options: ["$550.70", "$498.10", "$521.72", "$480.00"], correctIndex: 2, explanation: "\"A hard camera operator's daily minimum is $521.72.\" $550.70 is the handheld camera operator's minimum.", sourceLessonSlug: "gear-income-and-your-labor" },
          { prompt: "What median freelance camera operator day rate does The Rate Guide report?", options: ["$550", "$900", "$625", "$750"], correctIndex: 3, explanation: "The Rate Guide reports that \"ProductionHub's 2025 data puts the median freelance camera operator day rate at $750.\"", sourceLessonSlug: "gear-income-and-your-labor" },
          { prompt: "Whose data does The Rate Guide credit for its median day rate figure?", options: ["ProductionHub's 2025 data", "The 2025 federal wage survey", "IATSE Local 796's rates card", "ShareGrid's 2025 owner report"], correctIndex: 0, explanation: "The guide says \"ProductionHub's 2025 data puts the median freelance camera operator day rate at $750.\"", sourceLessonSlug: "gear-income-and-your-labor" },
          { prompt: "Why does lesson 3 show published labor rates at all?", options: ["To set the rate you should charge", "To show the size of labor kept out", "To prove union rates beat freelance", "To price kit fees as a share of labor"], correctIndex: 1, explanation: "\"These are examples, not your rate. They show the size of the labor number next to the gear numbers in later lessons, and why it must be kept out of them.\"", sourceLessonSlug: "gear-income-and-your-labor" },
          { prompt: "What does the Local 796 rates card say about a member's own equipment?", options: ["It pays 10 percent of the day rate", "It pays a flat fee per piece of gear", "It has no line about kit or box rental", "It forbids members to bring own gear"], correctIndex: 2, explanation: "\"The Local 796 rates card lists day rates and has no line about equipment, kit or box rental.\"", sourceLessonSlug: "gear-income-and-your-labor" },
          { prompt: "What does lesson 3 tell a union crew member to do before pricing a kit fee?", options: ["Charge 10 to 15 percent of the gear's value", "Use the rental house's day rate for the kit", "Add the kit fee to the union day rate line", "Ask the local how its contracts treat gear"], correctIndex: 3, explanation: "The course found no published rule, so it gives none: \"ask your local how its contracts treat a member's own gear before you price a kit fee.\"", sourceLessonSlug: "gear-income-and-your-labor" },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2: Choosing what to own
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "start-from-demand",
      title: "4 · Start from demand, not a wish list",
      section: "2 · Choosing what to own",
      recallContent: [
        {
          prompt: "What did IATSE Local 796's rates card list as a handheld camera operator's daily minimum, and from when?",
          answer: "$550.70, beginning April 1, 2021, for a 10-hour day (9 hours straight time and 1 hour overtime).",
        },
        {
          prompt: "Why must labor be kept out of the gear's numbers?",
          answer: "You could earn your day rate on a client's gear, so only the money the gear brings in on top of your labor pays for the gear.",
        },
      ],
      body: `**The wrong first question.** "What would I love to own?" is a buyer's question. A rental owner's first question is "What do productions near me already rent, how often, and from whom?" The gear you buy has to win bookings away from whoever supplies it now.

**Read the local catalog.** A regional rental house's price lists show what its market already supplies. On October 21, 2026, one regional house listed:

| Page | Items listed | Day and week prices |
|---|---|---|
| Cinema cameras | 5 | From $75 a day ($335 a week) for a Sony FX30 to $300 a day ($1,200 a week) for a RED Komodo-X package |
| Gimbals, stabilizers and sliders | 1 | DJI RS4 Pro Combo Kit, $75 a day, $250 a week |
| Wireless video transmission | 2 | A Hollyland Pyro 7-inch kit at $75 a day ($325 a week), a Paralinx Tomahawk 2 kit at $150 a day ($675 a week) |

This course reads three things from a table like that. These are inferences, so the reasoning is shown:

1. **What is already covered.** Five cinema cameras on one page means a renter there already has a choice. Another FX3 in that market competes with the house's $125-a-day FX3.
2. **What may be thin.** One gimbal on the page may mean low demand, or it may mean a gap. The page cannot tell you which. Only renters can.
3. **The price you must meet.** Whatever you list has to make sense next to the house's price for the same item.

**Ask the people who rent.** The demand that matters is a renter who says they would book your item, at a price, for a kind of job. Before buying, this course suggests three steps (this is advice, not a finding from a source):

1. Name at least three productions, crews or companies near you who rent the item now, and ask what they rent, how often and from whom.
2. Rent the exact item yourself for a paid job, so you learn what goes wrong with it and what renters ask about.
3. Write down your kill rule before you buy: the number of paid days in the first six months below which you will sell.

**What a platform rewards.** ShareGrid's search ranking favors listings with "Fair Market Pricing", "Positive Reviews", fast responses, a high acceptance rate, and the "Number and Variety of Listings". A single item at a high price, with no reviews yet, starts at the bottom of that list. ShareGrid also says it blends in "new owners and listings to give everyone a fair chance to earn credibility in the marketplace."

:::reveal What is a rental owner's first question, according to this lesson? ||| What productions nearby already rent, how often, and from whom.

:::reveal How many gimbals did the regional house's gimbal page list, and what can that number not tell you? ||| One. It cannot tell you whether that means low demand or a gap; only renters can.

:::reveal Name three factors ShareGrid says its Best Match ranking rewards. ||| Any three of: Elite Status, fair market pricing, positive reviews, fast response times and a high response rate, up-to-date availability and a high acceptance rate, and the number and variety of listings.

## Sources
- ${RH_CINEMA} Locator: the five camera listings and their "1 Day" and "1 Week" prices.
- ${RH_GIMBALS} Locator: the one listing and its prices.
- ${RH_WIRELESS} Locator: the two listings and their prices.
- ${RH_FX3} Locator: price lines.
- ${SG_BEST_MATCH} Locator: the list of ranking factors and the closing paragraph on new owners.`,
    },
    {
      slug: "utilization",
      title: "5 · Utilization: billed days against calendar days",
      section: "2 · Choosing what to own",
      recallContent: [
        {
          prompt: "Name the three steps this course suggests before buying an item to rent out.",
          answer: "Ask at least three productions or crews who rent it now what they rent, how often and from whom; rent the exact item for a paid job yourself; write down your kill rule before buying.",
        },
        {
          prompt: "What price did the regional house's gimbal page show for its DJI RS4 Pro Combo Kit?",
          answer: "$75 a day and $250 a week.",
        },
      ],
      body: `**The number that decides it.** This course uses one word for how much your gear works: **utilization**, the share of the days it could be earning on which a client is actually paying for it. It is the course's own definition, and it is measured in billed days, not in the days the gear is away from you. The two are not the same, because rental pricing gives renters days for free.

**How one platform counts days.** ShareGrid's rules for local pickup say:

- "Shoot days that fall on Saturday and Sunday count as 1 day".
- "If you have the gear for 6 to 7 days, you're only charged for 3 shoot days."
- "If you rent gear for 22 to 31 days, you'll only be charged for 10 shoot days."
- Pickup is "after 2:00 PM on the start date" and return "by 12:00 PM (noon) on the return date", and "pickup and return days do not count as shoot days." ShareGrid says those days "are intended for checking, prepping, and transporting gear, not filming." Its own example is a "Two-day shoot over four calendar days" charged as two shoot days.

**How one rental house counts them.** The regional rental house prices most items for a weekend (a Friday start and a Monday end) at "1.5 times the day rate". Weekend reservations "can be picked up as early as Thursday at 3:00pm" and "must be returned no later than Tuesday at 10:00am."

**The arithmetic, shown.** This is the course's own working from those rules:

- A weekend at the regional house can keep an item out from Thursday at 3 p.m. to Tuesday at 10 a.m., nearly five calendar days, and bill one and a half days.
- On ShareGrid, a full week out bills 3 days. A full month out bills 10.
- So an item that is "out" every day of a month on one long rental may bill only 10 days.

**Why it matters before buying.** Suppose, as an assumption only, you would rent an item at $100 a billed day. One booking a week, each a weekend, might bill about 52 weekend-days a year on ShareGrid's rule (one billed day each). The same item booked by the week, every week, would bill about 156 days (52 × 3). Your calendar would look full in both cases. Your income would differ by three times. When you estimate utilization, count billed days, and count them by the rules of whoever bills the renter.

**One kit, one place.** A rented item cannot also be on your own job. If you plan to use the gear yourself on weekends, the weekend bookings that rental pricing favors are the ones you cannot take.

:::reveal How does this course define utilization? ||| The share of the days your gear could be earning on which a client is actually paying for it, measured in billed days.

:::reveal Under ShareGrid's local-pickup rules, how many shoot days is a renter charged for keeping gear 6 or 7 days? ||| 3 shoot days.

:::reveal At the regional house, how long can a weekend rental keep an item out, and how many days does it bill? ||| From Thursday at 3 p.m. to Tuesday at 10 a.m., nearly five calendar days, billed at 1.5 times the day rate.

## Sources
- ${SG_SHOOT_DAYS} Locator: the weekend, weekly and monthly rules, the pickup and return times, and the "Two-day shoot over four calendar days" example.
- ${RH_POLICIES} Locator: weekend pricing paragraph and the pickup and return times.`,
    },
    {
      slug: "churn-and-wear",
      title: "6 · Technology churn and what wears out",
      section: "2 · Choosing what to own",
      recallContent: [
        {
          prompt: "Under ShareGrid's local-pickup rules, how do Saturday and Sunday count?",
          answer: "As one shoot day.",
        },
        {
          prompt: "Why does this course measure utilization in billed days rather than calendar days?",
          answer: "Rental pricing gives renters days for free (weekends count as one day, a week bills 3 days, a month bills 10), so gear can be out far more days than it is billed.",
        },
      ],
      body: `**Two clocks run on every item.** One is wear: parts that get used up. The other is churn: newer models that make yours the older one. A rental owner pays for both, and neither shows on the purchase receipt.

**Churn, from the makers' own pages.** On October 21, 2026:

- Teradek's Bolt 4K 750 Deluxe Kit page listed both versions at $6,890, both "Sold Out", and said: "For the latest Bolt generation see Bolt 6." Teradek's Bolt 6 LT set was listed at $2,390.
- Lensrentals rented the Sony FX3 A body, while MPB, a used-gear dealer, listed used Sony FX3 bodies: its page counted 11, from $3,549 to $3,929.

This course reads those pages this way, as inference: cameras and wireless links are replaced by newer models, the newer model appears on rental price lists beside yours, and renters can choose it. The Bolt pages do not compare the two products, so this course does not either. It only notes that the maker sends buyers of the older line to the newer one.

**Wear, from the manual.** Sony's help guide for the FX3 says of its battery: "The battery life is limited. If you use the same battery repeatedly, or use the same battery for a long period, the battery capacity decreases gradually." It adds that when "the available time of the battery is shortened significantly, it is probably time to replace the battery pack with a new one." A rental owner should treat batteries as consumables: bought, used up and replaced on a schedule.

**Upkeep you can see in a price list.** The regional rental house's policies show what comes back from renters. It charges "a $20 cleaning fee per item" for equipment returned with offensive odors or a dirty exterior, may charge up to 25 percent of the rental fee for "offensively dirty" gear, and charges "$25 per sensor that is returned needing cleaning." A house does not write fees for things that never happen.

**Software is upkeep too.** Sony's help guide has a Version screen that "Displays the version of this product's software" and adds that it "Also displays the version of the lens if a lens compatible with firmware updates is attached." So a camera and its lenses can each need updates, and checking them is part of preparing a rental (lesson 19).

**What this means for choosing.** This is the course's reasoning: favor items whose usefulness lasts longer than their model year, and budget from day one for the parts that wear out. Before you buy anything that renters will judge against the newest model, check how many of the older model are for sale used, and at what price.

:::reveal What did Teradek's Bolt 4K 750 Deluxe Kit page tell buyers on October 21, 2026? ||| "For the latest Bolt generation see Bolt 6." Both versions were listed at $6,890 and "Sold Out".

:::reveal What does Sony's help guide say happens to a battery's capacity with repeated or long use? ||| It "decreases gradually", and when the available time is shortened significantly it is probably time to replace the pack.

:::reveal What did the regional rental house charge per sensor returned needing cleaning? ||| $25 per sensor.

## Sources
- ${TERADEK_4K} Locator: product variants and price; "Product Overview", first sentence.
- ${TERADEK_B6} Locator: price line.
- ${LR_FX3A} Locator: page title and rental price table.
- ${MPB_FX3} Locator: results header (count and price range).
- ${SONY_BATTERY} Locator: "On battery life".
- ${RH_POLICIES} Locator: cleaning fees paragraph.
- ${SONY_VERSION} Locator: the first two sentences.`,
    },
    {
      slug: "what-to-keep-renting",
      title: "7 · What to keep renting",
      section: "2 · Choosing what to own",
      recallContent: [
        {
          prompt: "How many used FX3 bodies did MPB's page count on October 21, 2026, and at what price range?",
          answer: "11, from $3,549 to $3,929.",
        },
        {
          prompt: "How does this course say a rental owner should treat batteries?",
          answer: "As consumables: bought, used up and replaced on a schedule, because Sony says capacity decreases gradually with use.",
        },
      ],
      body: `**Owning is not the only way to have gear.** An owner-operator can rent items for a job and charge the client for them, the way a production does. The skill is knowing which items to own and which to keep renting.

**Rent-or-buy arithmetic for one item.** On October 21, 2026, Teradek listed its Bolt 6 LT wireless video set at $2,390. Lensrentals listed a Bolt 6 LT 750 kit at $142 for 3 days and $203 for 7 days. This course's arithmetic:

- $2,390 ÷ $142 = 16.8, so about 17 three-day rentals cost as much as buying.
- $2,390 ÷ $203 = 11.8, so about 12 weekly rentals cost as much as buying.

If you would need the link fewer times a year than that, renting it per job costs less than owning it, before you even count upkeep, insurance and the newer model (lesson 6). If you would need it more often, owning may cost less, but only if the bookings that need it are real (lesson 4).

**Gear you cannot own your way into.** Some equipment is controlled by someone other than its owner. Two federal and league rules show it:

- Under 47 C.F.R. § 74.600, a license for a TV broadcast auxiliary station "will be issued only to a television broadcast station, a Class A TV station, a television broadcast network-entity, a low power TV station, or a TV translator station." This course's reading: an individual crew member is none of those, so the licensed wireless links a network uses come under that network's authority, not the operator's.
- At NFL events, "uncoordinated devices are prohibited", and "In some instances, operators not following the policies may have his or her working credential revoked."

So on a major sports show, the wireless path is set by the show. That is the case the planned CREW-04 course on the cinema-look camera rig makes for its own build: own the camera side, and rent or partner for licensed broadcast wireless. Buying broadcast wireless without a client who requires it from you puts your largest purchase where you have the least control.

**A short test for each item.** This course suggests asking four questions (advice, not a source's finding):

1. How many paid days a year would this item work, counted in billed days?
2. How many rentals equal its price, from a published rental price?
3. Who decides whether it may be used on the jobs you want: you, the client, or a league or license holder?
4. Will a newer model replace it before it has paid for itself?

:::reveal By this course's arithmetic, about how many 3-day rentals of a Bolt 6 LT kit cost as much as buying the set? ||| About 17 ($2,390 ÷ $142 = 16.8).

:::reveal To whom may a license for a TV broadcast auxiliary station be issued under 47 C.F.R. § 74.600? ||| Only a television broadcast station, a Class A TV station, a television broadcast network-entity, a low power TV station, or a TV translator station.

:::reveal What does the NFL's page say about uncoordinated wireless devices? ||| "uncoordinated devices are prohibited", and operators not following the policies may have their working credential revoked.

## Sources
- ${TERADEK_B6} Locator: price line.
- ${LR_BOLT} Locator: rental price list, 3-day and 7-day rows.
- ${CFR_74_600} Locator: the section's single paragraph.
- ${NFL_EFC} Locator: paragraphs on policy and on credential revocation.`,
    },
    {
      slug: "section-2-quiz",
      title: "Section 2 quiz · Choosing what to own",
      section: "2 · Choosing what to own",
      body: "A graded check on starting from demand, utilization in billed days, technology churn and wear, and what to keep renting. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "Which question does lesson 4 call a buyer's question rather than a rental owner's?", options: ["What would I love to own?", "Who rents this item now?", "How often is it rented?", "What does it rent for?"], correctIndex: 0, explanation: "\"'What would I love to own?' is a buyer's question.\" The owner's first question asks what productions nearby already rent, how often and from whom.", sourceLessonSlug: "start-from-demand" },
          { prompt: "What is a rental owner's first question, according to lesson 4?", options: ["Which model has the best reviews online?", "What do productions near me rent, and how?", "Which platform charges owners the least?", "How fast will this item pay for itself?"], correctIndex: 1, explanation: "\"A rental owner's first question is 'What do productions near me already rent, how often, and from whom?'\"", sourceLessonSlug: "start-from-demand" },
          { prompt: "What does lesson 4 say the gear you buy has to do?", options: ["Match the newest model on the market", "Cost less than the regional house's gear", "Win bookings from whoever supplies it now", "Earn back its price inside one year"], correctIndex: 2, explanation: "\"The gear you buy has to win bookings away from whoever supplies it now.\"", sourceLessonSlug: "start-from-demand" },
          { prompt: "How many cameras did the regional house list on its cinema camera page?", options: ["Two", "One", "Nine", "Five"], correctIndex: 3, explanation: "The cinema cameras page listed 5 items, from a Sony FX30 to a RED Komodo-X package.", sourceLessonSlug: "start-from-demand" },
          { prompt: "Which was the lowest-priced camera on the regional house's cinema camera page?", options: ["A Sony FX30 at $75 a day", "A Sony FX3 at $55 a day", "A RED Komodo-X at $75 a day", "A Sony FX3 at $100 a day"], correctIndex: 0, explanation: "Prices ran \"From $75 a day ($335 a week) for a Sony FX30 to $300 a day ($1,200 a week) for a RED Komodo-X package\".", sourceLessonSlug: "start-from-demand" },
          { prompt: "What did the RED Komodo-X package rent for at the regional house?", options: ["$125 a day, $562.50 a week", "$300 a day, $1,200 a week", "$150 a day, $675 a week", "$75 a day, $335 a week"], correctIndex: 1, explanation: "The RED Komodo-X package was $300 a day and $1,200 a week, the top of the cinema camera page.", sourceLessonSlug: "start-from-demand" },
          { prompt: "What weekly price did the regional house list for its Sony FX30?", options: ["$250 a week", "$325 a week", "$335 a week", "$562.50 a week"], correctIndex: 2, explanation: "The FX30 was $75 a day and $335 a week. $250 is the gimbal's week, $325 the Pyro kit's, and $562.50 the FX3's.", sourceLessonSlug: "start-from-demand" },
          { prompt: "How many items did the regional house's gimbals, stabilizers and sliders page list?", options: ["Five", "Three", "Two", "One"], correctIndex: 3, explanation: "It listed one item, the DJI RS4 Pro Combo Kit.", sourceLessonSlug: "start-from-demand" },
          { prompt: "Which two wireless video kits did the regional house list?", options: ["A Hollyland Pyro 7-inch and a Paralinx Tomahawk 2", "A Teradek Bolt 6 LT and a Hollyland Pyro 7-inch", "A Paralinx Tomahawk 2 and a Teradek Bolt 4K", "A Teradek Bolt 4K and a Teradek Bolt 6 LT"], correctIndex: 0, explanation: "The wireless page listed a Hollyland Pyro 7-inch kit ($75 a day) and a Paralinx Tomahawk 2 kit ($150 a day). The Bolt kits come from Teradek's and Lensrentals' pages.", sourceLessonSlug: "start-from-demand" },
          { prompt: "What did the regional house charge for its Paralinx Tomahawk 2 kit?", options: ["$75 a day, $325 a week", "$150 a day, $675 a week", "$142 for 3 days", "$203 for 7 days"], correctIndex: 1, explanation: "The Tomahawk 2 kit was $150 a day and $675 a week. $75 and $325 are the Pyro kit; $142 and $203 are Lensrentals' Bolt 6 LT prices.", sourceLessonSlug: "start-from-demand" },
          { prompt: "What does lesson 4 read from five cinema cameras on one page?", options: ["Cinema cameras rarely rent there", "The house is selling off its cameras", "A renter there already has a choice", "Prices there are set by one maker"], correctIndex: 2, explanation: "\"Five cinema cameras on one page means a renter there already has a choice. Another FX3 in that market competes with the house's $125-a-day FX3.\"", sourceLessonSlug: "start-from-demand" },
          { prompt: "What can a single gimbal on the regional house's page tell you about demand?", options: ["That gimbals are in short supply", "That gimbals rent for too little", "That gimbals are rarely asked for", "Not whether it is low demand or a gap"], correctIndex: 3, explanation: "\"One gimbal on the page may mean low demand, or it may mean a gap. The page cannot tell you which. Only renters can.\"", sourceLessonSlug: "start-from-demand" },
          { prompt: "According to lesson 4, who can tell you whether a thin catalog means a gap?", options: ["Only renters can", "The house's owner", "The gear's maker", "A platform's ranking"], correctIndex: 0, explanation: "\"The page cannot tell you which. Only renters can.\"", sourceLessonSlug: "start-from-demand" },
          { prompt: "What does lesson 4 say about the price you list?", options: ["It must undercut the house by half", "It must make sense next to the house's", "It must match the platform's average", "It must cover the item within a year"], correctIndex: 1, explanation: "\"Whatever you list has to make sense next to the house's price for the same item.\"", sourceLessonSlug: "start-from-demand" },
          { prompt: "What kind of demand does lesson 4 say matters?", options: ["Views and saves on a listing page", "A large count of local productions", "A renter who says they would book it", "A rental house that is out of stock"], correctIndex: 2, explanation: "\"The demand that matters is a renter who says they would book your item, at a price, for a kind of job.\"", sourceLessonSlug: "start-from-demand" },
          { prompt: "How many productions, crews or companies does lesson 4's first step ask you to name?", options: ["At least ten", "At least one", "At least five", "At least three"], correctIndex: 3, explanation: "Step 1: \"Name at least three productions, crews or companies near you who rent the item now, and ask what they rent, how often and from whom.\"", sourceLessonSlug: "start-from-demand" },
          { prompt: "Why does lesson 4 suggest renting the exact item yourself for a paid job?", options: ["To learn what goes wrong and what renters ask", "To earn back part of its price before buying", "To prove to a platform that you are an owner", "To get a discount from the house on purchase"], correctIndex: 0, explanation: "Step 2: rent the exact item for a paid job, \"so you learn what goes wrong with it and what renters ask about.\"", sourceLessonSlug: "start-from-demand" },
          { prompt: "What is the kill rule lesson 4 asks you to write before buying?", options: ["The top price you will pay for the item", "Paid days in six months below which you sell", "The number of reviews you need to keep going", "The date on which you raise your day rate"], correctIndex: 1, explanation: "Step 3: \"Write down your kill rule before you buy: the number of paid days in the first six months below which you will sell.\"", sourceLessonSlug: "start-from-demand" },
          { prompt: "Which of these does ShareGrid's search ranking favor, as lesson 4 quotes it?", options: ["Lowest price on the whole site", "Newest model in each category", "Number and Variety of Listings", "Longest time as a member owner"], correctIndex: 2, explanation: "ShareGrid's ranking favors \"Fair Market Pricing\", \"Positive Reviews\", fast responses, a high acceptance rate, and the \"Number and Variety of Listings\".", sourceLessonSlug: "start-from-demand" },
          { prompt: "Why does ShareGrid say it blends in new owners and listings?", options: ["To fill the gaps in its rental catalog", "To test new owners before approving them", "To keep prices low for all of its renters", "To give everyone a fair chance at credibility"], correctIndex: 3, explanation: "ShareGrid blends in \"new owners and listings to give everyone a fair chance to earn credibility in the marketplace.\"", sourceLessonSlug: "start-from-demand" },

          { prompt: "How does lesson 5 define utilization?", options: ["The share of possible days a client pays for", "The share of days the gear is away from you", "The number of rentals it takes to repay it", "The share of listings that receive a booking"], correctIndex: 0, explanation: "Utilization is \"the share of the days it could be earning on which a client is actually paying for it\", measured in billed days.", sourceLessonSlug: "utilization" },
          { prompt: "In what unit does this course measure utilization?", options: ["Calendar days out", "Billed days", "Bookings a month", "Hours of use"], correctIndex: 1, explanation: "It \"is measured in billed days, not in the days the gear is away from you.\"", sourceLessonSlug: "utilization" },
          { prompt: "Why are billed days and days away from you not the same?", options: ["Owners bill extra for prep days", "Renters pay for travel days too", "Rental pricing gives renters free days", "Platforms bill only on weekdays"], correctIndex: 2, explanation: "\"The two are not the same, because rental pricing gives renters days for free.\"", sourceLessonSlug: "utilization" },
          { prompt: "Under ShareGrid's local-pickup rules, what do Saturday and Sunday shoot days count as?", options: ["Two days, at a discount", "Two full shoot days", "One and a half days", "One shoot day"], correctIndex: 3, explanation: "\"Shoot days that fall on Saturday and Sunday count as 1 day\".", sourceLessonSlug: "utilization" },
          { prompt: "Under ShareGrid's rules, what is a renter charged for keeping gear 6 or 7 days?", options: ["3 shoot days", "5 shoot days", "6 shoot days", "4 shoot days"], correctIndex: 0, explanation: "\"If you have the gear for 6 to 7 days, you're only charged for 3 shoot days.\"", sourceLessonSlug: "utilization" },
          { prompt: "Under ShareGrid's rules, what is a renter charged for 22 to 31 days?", options: ["15 shoot days", "10 shoot days", "12 shoot days", "20 shoot days"], correctIndex: 1, explanation: "\"If you rent gear for 22 to 31 days, you'll only be charged for 10 shoot days.\"", sourceLessonSlug: "utilization" },
          { prompt: "When is ShareGrid's standard local pickup time?", options: ["Before 9:00 AM on the start date", "At noon on the day before the start", "After 2:00 PM on the start date", "After 3:00 PM the day before start"], correctIndex: 2, explanation: "Pickup is \"after 2:00 PM on the start date\". After 3:00 p.m. the day before is the regional house's rule for advance rentals.", sourceLessonSlug: "utilization" },
          { prompt: "When is gear due back under ShareGrid's standard local-pickup times?", options: ["By 10:00 AM the day after", "By 5:00 PM on the return date", "By midnight on the return date", "By noon on the return date"], correctIndex: 3, explanation: "Return is \"by 12:00 PM (noon) on the return date\". 10:00 a.m. is the regional house's Tuesday deadline for weekends.", sourceLessonSlug: "utilization" },
          { prompt: "What does ShareGrid say pickup and return days are intended for?", options: ["Checking, prepping and moving gear", "Short test shoots by the renter", "Owner inspections with photos", "Overflow if the shoot runs long"], correctIndex: 0, explanation: "\"pickup and return days do not count as shoot days.\" They \"are intended for checking, prepping, and transporting gear, not filming.\"", sourceLessonSlug: "utilization" },
          { prompt: "How many shoot days does ShareGrid charge for its \"Two-day shoot over four calendar days\" example?", options: ["Four", "Two", "Three", "One"], correctIndex: 1, explanation: "ShareGrid's example \"Two-day shoot over four calendar days\" is charged as two shoot days, since pickup and return days are free.", sourceLessonSlug: "utilization" },
          { prompt: "How does the regional rental house price most items for a weekend?", options: ["At 2 times the day rate", "At the full weekly rate", "At 1.5 times the day rate", "At 3 times the day rate"], correctIndex: 2, explanation: "It prices most items for a weekend at \"1.5 times the day rate\".", sourceLessonSlug: "utilization" },
          { prompt: "What start and end days make up a weekend at the regional rental house?", options: ["A Saturday start and a Sunday end", "A Thursday start and a Tuesday end", "A Friday start and a Sunday end", "A Friday start and a Monday end"], correctIndex: 3, explanation: "Weekend pricing applies to \"a Friday start and a Monday end\". Thursday and Tuesday are the earliest pickup and latest return.", sourceLessonSlug: "utilization" },
          { prompt: "When is the earliest a weekend reservation can be picked up at the regional house?", options: ["Thursday at 3:00 p.m.", "Friday at 2:00 p.m.", "Friday at 9:00 a.m.", "Thursday at noon"], correctIndex: 0, explanation: "Weekend reservations \"can be picked up as early as Thursday at 3:00pm\".", sourceLessonSlug: "utilization" },
          { prompt: "By the course's arithmetic, how long can one weekend rental at the regional house keep an item out?", options: ["Exactly two calendar days", "Nearly five calendar days", "Seven full calendar days", "Three and a half days"], correctIndex: 1, explanation: "\"from Thursday at 3 p.m. to Tuesday at 10 a.m., nearly five calendar days, and bill one and a half days.\"", sourceLessonSlug: "utilization" },
          { prompt: "On ShareGrid's rules, how many days does one long rental that keeps an item out a full month bill?", options: ["31 days", "22 days", "10 days", "3 days"], correctIndex: 2, explanation: "\"an item that is 'out' every day of a month on one long rental may bill only 10 days.\"", sourceLessonSlug: "utilization" },
          { prompt: "In lesson 5's assumed example, about how many days a year do weekly bookings every week bill?", options: ["About 52", "About 104", "About 365", "About 156"], correctIndex: 3, explanation: "\"The same item booked by the week, every week, would bill about 156 days (52 × 3).\" About 52 is the weekend-only case.", sourceLessonSlug: "utilization" },
          { prompt: "In lesson 5's example, how do weekly bookings compare with weekend bookings in income?", options: ["About three times as much", "About the same in the end", "About half as much again", "About twice as much"], correctIndex: 0, explanation: "About 156 billed days against about 52: \"Your income would differ by three times.\"", sourceLessonSlug: "utilization" },
          { prompt: "What does lesson 5 say about an owner who uses the gear on their own weekend jobs?", options: ["Weekend rentals pay them twice", "They lose the bookings rentals favor", "They may bill renters for weekends", "Their utilization doubles in summer"], correctIndex: 1, explanation: "\"If you plan to use the gear yourself on weekends, the weekend bookings that rental pricing favors are the ones you cannot take.\"", sourceLessonSlug: "utilization" },

          { prompt: "What are the two clocks lesson 6 says run on every item?", options: ["Price and demand", "Fees and taxes", "Wear and churn", "Prep and repair"], correctIndex: 2, explanation: "\"One is wear: parts that get used up. The other is churn: newer models that make yours the older one.\"", sourceLessonSlug: "churn-and-wear" },
          { prompt: "What does lesson 6 mean by churn?", options: ["Parts that get used up in service", "Renters who never come back again", "Price cuts made by rental houses", "Newer models that make yours older"], correctIndex: 3, explanation: "\"churn: newer models that make yours the older one.\" Parts that get used up are wear.", sourceLessonSlug: "churn-and-wear" },
          { prompt: "Which of the two clocks shows on the purchase receipt?", options: ["Neither one", "Only wear", "Only churn", "Both clocks"], correctIndex: 0, explanation: "\"A rental owner pays for both, and neither shows on the purchase receipt.\"", sourceLessonSlug: "churn-and-wear" },
          { prompt: "What did Teradek list as the price of each version of its Bolt 4K 750 Deluxe Kit?", options: ["$2,390 each", "$6,890 each", "$4,298 each", "$3,929 each"], correctIndex: 1, explanation: "Both versions were listed at $6,890, both \"Sold Out\". $2,390 is the Bolt 6 LT set.", sourceLessonSlug: "churn-and-wear" },
          { prompt: "How does lesson 6 describe MPB?", options: ["A rental house", "A camera maker", "A rental platform", "A used-gear dealer"], correctIndex: 3, explanation: "\"MPB, a used-gear dealer, listed used Sony FX3 bodies\".", sourceLessonSlug: "churn-and-wear" },
          { prompt: "How many used Sony FX3 bodies did MPB's page count?", options: ["11", "28", "17", "5"], correctIndex: 0, explanation: "\"its page counted 11, from $3,549 to $3,929.\"", sourceLessonSlug: "churn-and-wear" },
          { prompt: "What price range did MPB's page show for used Sony FX3 bodies?", options: ["$2,390 to $4,298", "$3,549 to $3,929", "$4,298 to $6,890", "$3,000 to $3,549"], correctIndex: 1, explanation: "MPB's page counted 11 used FX3 bodies \"from $3,549 to $3,929.\"", sourceLessonSlug: "churn-and-wear" },
          { prompt: "Which Sony body was Lensrentals renting while MPB sold used FX3 bodies?", options: ["The Sony FX30", "The Sony FX6", "The Sony FX3 A", "The Sony a7S III"], correctIndex: 2, explanation: "\"Lensrentals rented the Sony FX3 A body, while MPB, a used-gear dealer, listed used Sony FX3 bodies\".", sourceLessonSlug: "churn-and-wear" },
          { prompt: "What does lesson 6 infer from the Bolt and FX3 pages?", options: ["Older models rent for more than new ones", "Makers stop repairing models after a year", "Used prices rise when a new model ships", "Newer models sit beside yours on price lists"], correctIndex: 3, explanation: "The course's inference: \"cameras and wireless links are replaced by newer models, the newer model appears on rental price lists beside yours, and renters can choose it.\"", sourceLessonSlug: "churn-and-wear" },
          { prompt: "Does lesson 6 compare the Bolt 4K Deluxe Kit with the Bolt 6 LT?", options: ["No, Teradek's pages don't compare them", "Yes, it finds the Bolt 6 LT the better buy", "Yes, it finds the two kits identical", "No, because the Bolt 6 LT was sold out"], correctIndex: 0, explanation: "\"The Bolt pages do not compare the two products, so this course does not either.\" It only notes that the maker sends buyers onward.", sourceLessonSlug: "churn-and-wear" },
          { prompt: "What does Sony's FX3 help guide say about battery life?", options: ["It is unlimited if stored half charged", "It is limited, and capacity falls slowly", "It lasts five years with normal use", "It falls only if charged in the cold"], correctIndex: 1, explanation: "\"The battery life is limited. If you use the same battery repeatedly, or use the same battery for a long period, the battery capacity decreases gradually.\"", sourceLessonSlug: "churn-and-wear" },
          { prompt: "When does Sony's help guide say it is probably time to replace the battery pack?", options: ["After 300 full charge cycles", "Once a year, before storing it", "When available time drops a lot", "When the charge lamp first flashes"], correctIndex: 2, explanation: "When \"the available time of the battery is shortened significantly, it is probably time to replace the battery pack with a new one.\"", sourceLessonSlug: "churn-and-wear" },
          { prompt: "How does lesson 6 say a rental owner should treat batteries?", options: ["As lifetime parts", "As renter property", "As free accessories", "As consumables"], correctIndex: 3, explanation: "\"A rental owner should treat batteries as consumables: bought, used up and replaced on a schedule.\"", sourceLessonSlug: "churn-and-wear" },
          { prompt: "What does the regional house charge per item returned with offensive odors or a dirty exterior?", options: ["$20 per item", "$25 per item", "$50 per item", "$10 per item"], correctIndex: 0, explanation: "It charges \"a $20 cleaning fee per item\". $25 is its charge per sensor that needs cleaning.", sourceLessonSlug: "churn-and-wear" },
          { prompt: "What may the regional house charge for gear returned \"offensively dirty\"?", options: ["A flat $100 cleaning fee", "Up to 25 percent of the rental fee", "The full rental fee a second time", "Up to 10 percent of the gear's value"], correctIndex: 1, explanation: "It \"may charge up to 25 percent of the rental fee for 'offensively dirty' gear\".", sourceLessonSlug: "churn-and-wear" },
          { prompt: "What does the regional house charge for each sensor returned needing cleaning?", options: ["$20 per sensor", "$50 per sensor", "$25 per sensor", "$15 per sensor"], correctIndex: 2, explanation: "\"$25 per sensor that is returned needing cleaning.\" $20 is the per-item cleaning fee.", sourceLessonSlug: "churn-and-wear" },
          { prompt: "What does lesson 6 conclude from a rental house's cleaning fees?", options: ["Houses profit most from their fees", "Renters seldom return gear dirty", "Fees replace the need for insurance", "Houses don't write fees for nothing"], correctIndex: 3, explanation: "The fees \"show what comes back from renters\": \"A house does not write fees for things that never happen.\"", sourceLessonSlug: "churn-and-wear" },
          { prompt: "Besides the camera body's software, what can Sony's Version screen display?", options: ["A compatible lens's version", "The battery's charge cycles", "The memory card's free space", "The sensor's cleaning history"], correctIndex: 0, explanation: "It \"Also displays the version of the lens if a lens compatible with firmware updates is attached.\"", sourceLessonSlug: "churn-and-wear" },
          { prompt: "What does lesson 6 advise checking before buying an item renters will judge against the newest model?", options: ["Whether the maker offers a trade-in", "How many older units sell used, and for what", "Which platform charges the lowest fee", "Whether a rental house has it in stock"], correctIndex: 1, explanation: "\"check how many of the older model are for sale used, and at what price.\"", sourceLessonSlug: "churn-and-wear" },

          { prompt: "Besides owning gear, what else can an owner-operator do, according to lesson 7?", options: ["Ask the client to buy the gear", "Borrow gear from a union local", "Rent items and charge the client", "Lease gear from the manufacturer"], correctIndex: 2, explanation: "\"An owner-operator can rent items for a job and charge the client for them, the way a production does.\"", sourceLessonSlug: "what-to-keep-renting" },
          { prompt: "What skill does lesson 7 open with?", options: ["Spotting the next new model", "Negotiating a lower purchase", "Running gear past its warranty", "Knowing what to own and rent"], correctIndex: 3, explanation: "\"The skill is knowing which items to own and which to keep renting.\"", sourceLessonSlug: "what-to-keep-renting" },
          { prompt: "What did Lensrentals charge for a Bolt 6 LT 750 kit for 3 days?", options: ["$142", "$155", "$203", "$125"], correctIndex: 0, explanation: "The kit was $142 for 3 days and $203 for 7 days. $155 is the FX3 A body's 3-day price.", sourceLessonSlug: "what-to-keep-renting" },
          { prompt: "What did Lensrentals charge for a Bolt 6 LT 750 kit for 7 days?", options: ["$222", "$203", "$335", "$250"], correctIndex: 1, explanation: "$203 for 7 days. $222 is the FX3 A body's 7-day price.", sourceLessonSlug: "what-to-keep-renting" },
          { prompt: "By lesson 7's arithmetic, about how many weekly rentals of the Bolt 6 LT kit equal its purchase price?", options: ["About 28", "About 17", "About 12", "About 7"], correctIndex: 2, explanation: "\"$2,390 ÷ $203 = 11.8, so about 12 weekly rentals cost as much as buying.\" About 17 is the 3-day count.", sourceLessonSlug: "what-to-keep-renting" },
          { prompt: "What is $2,390 divided by $142, as lesson 7 works it?", options: ["11.8", "27.7", "15.4", "16.8"], correctIndex: 3, explanation: "\"$2,390 ÷ $142 = 16.8, so about 17 three-day rentals cost as much as buying.\"", sourceLessonSlug: "what-to-keep-renting" },
          { prompt: "If you would need the Bolt fewer times a year than the break-even count, what does lesson 7 conclude?", options: ["Renting per job costs less", "Owning still costs less", "The two always cost the same", "Buy it used instead"], correctIndex: 0, explanation: "\"renting it per job costs less than owning it, before you even count upkeep, insurance and the newer model.\"", sourceLessonSlug: "what-to-keep-renting" },
          { prompt: "If you would need the link more often than the break-even count, what does lesson 7 say?", options: ["Owning always costs less than renting", "Owning may cost less if bookings are real", "Renting still costs less every time", "Buy a second unit so one is always free"], correctIndex: 1, explanation: "\"If you would need it more often, owning may cost less, but only if the bookings that need it are real (lesson 4).\"", sourceLessonSlug: "what-to-keep-renting" },
          { prompt: "Which of these may hold a license under 47 C.F.R. § 74.600, as lesson 7 quotes it?", options: ["A freelance camera operator", "A gear rental platform", "A TV broadcast network-entity", "A regional rental house"], correctIndex: 2, explanation: "A license \"will be issued only to a television broadcast station, a Class A TV station, a television broadcast network-entity, a low power TV station, or a TV translator station.\"", sourceLessonSlug: "what-to-keep-renting" },
          { prompt: "What does lesson 7 conclude from 47 C.F.R. § 74.600?", options: ["Operators may license their own links", "Rental houses hold every broadcast link", "Licensed links are free to any crew", "A network's links are under its authority"], correctIndex: 3, explanation: "\"an individual crew member is none of those, so the licensed wireless links a network uses come under that network's authority, not the operator's.\"", sourceLessonSlug: "what-to-keep-renting" },
          { prompt: "What does the NFL's page say about uncoordinated wireless devices at its events?", options: ["They are prohibited", "They need a fee paid", "They work at halftime", "They need a spare unit"], correctIndex: 0, explanation: "\"uncoordinated devices are prohibited\".", sourceLessonSlug: "what-to-keep-renting" },
          { prompt: "What may happen to an operator who does not follow the NFL's wireless policies, as lesson 7 quotes it?", options: ["Their gear may be sold at auction", "Their working credential may be revoked", "Their network may be fined for a season", "Their union may suspend them a year"], correctIndex: 1, explanation: "\"In some instances, operators not following the policies may have his or her working credential revoked.\"", sourceLessonSlug: "what-to-keep-renting" },
          { prompt: "On a major sports show, who sets the wireless path, according to lesson 7?", options: ["The camera operator", "The rental house", "The show itself", "The gear's maker"], correctIndex: 2, explanation: "\"So on a major sports show, the wireless path is set by the show.\"", sourceLessonSlug: "what-to-keep-renting" },
          { prompt: "What build does lesson 7 say the planned CREW-04 course makes the case for?", options: ["Own the licensed wireless, rent the camera", "Rent every part of the rig for each job", "Own every part of the rig, wireless included", "Own the camera, rent or partner for wireless"], correctIndex: 3, explanation: "The case is \"own the camera side, and rent or partner for licensed broadcast wireless.\"", sourceLessonSlug: "what-to-keep-renting" },
          { prompt: "Why does lesson 7 warn against buying broadcast wireless without a client who requires it from you?", options: ["It puts your largest buy where you have least control", "It is illegal for crew members to own wireless links", "It costs more to insure than any camera body would", "It is always sold out at the maker's own store"], correctIndex: 0, explanation: "It \"puts your largest purchase where you have the least control\", because the show and the license holder decide what wireless may be used.", sourceLessonSlug: "what-to-keep-renting" },
          { prompt: "Which of these is one of the four questions lesson 7 suggests asking about each item?", options: ["Which color sells best on platforms?", "Who decides if it may be used on jobs?", "How many owners already list it nearby?", "Which maker offers the longest warranty?"], correctIndex: 1, explanation: "The third question: \"Who decides whether it may be used on the jobs you want: you, the client, or a league or license holder?\"", sourceLessonSlug: "what-to-keep-renting" },
          { prompt: "In lesson 7's four questions, how are an item's paid days a year counted?", options: ["In calendar days", "In bookings made", "In billed days", "In hours of use"], correctIndex: 2, explanation: "The first question asks how many paid days a year the item would work, \"counted in billed days\".", sourceLessonSlug: "what-to-keep-renting" },
          { prompt: "What does lesson 7 say about the status of its four questions?", options: ["They come from IRS Publication 946", "They are a platform's listing rules", "They are a rental house's policy terms", "They are advice, not a source's finding"], correctIndex: 3, explanation: "The four questions are \"advice, not a source's finding.\"", sourceLessonSlug: "what-to-keep-renting" },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3: Acquiring gear
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "new-or-used",
      title: "8 · New or used",
      section: "3 · Acquiring gear",
      recallContent: [
        {
          prompt: "By this course's arithmetic, about how many weekly rentals of a Bolt 6 LT kit cost as much as buying the set?",
          answer: "About 12 ($2,390 ÷ $203 = 11.8).",
        },
        {
          prompt: "Under 47 C.F.R. § 74.600, who may hold a license for a TV broadcast auxiliary station?",
          answer: "Only a television broadcast station, a Class A TV station, a television broadcast network-entity, a low power TV station, or a TV translator station; an individual crew member is none of those.",
        },
      ],
      body: `**Two ways to buy the same job.** A body that rents for the same price earns the same money whether you paid full price for it or less. What you paid decides how many rentals it takes to earn it back. That makes the new-or-used choice a money question first.

**New, from a retailer's page.** On October 21, 2026, a camera retailer listed the Sony FX3A body at $4,298. Its box list: the body, an XLR handle unit, an NP-FZ100 battery, a BC-ZD1 charger, an accessory shoe kit, a body cap, an accessory shoe cap and a handle shoe cap.

**Used, from a dealer's page.** The same day, MPB, a used-gear dealer, showed 11 used Sony FX3 bodies available, priced from $3,549 to $3,929. The FX3 is a different model from the FX3A. Each of the eight listings it displayed read "Cosmetic condition: Excellent" and "Standard 6 month warranty". All eight included an NP-FZ100 battery, the FX3 battery door and the XLR handle unit. The rest varied by listing: some had original packaging or a manual, some a USB cable, one a third-party charger in place of Sony's, and two added third-party parts such as a cage or a top plate.

**The arithmetic, shown.** This course's own working, comparing the two pages:

- $4,298 − $3,929 = $369, and $4,298 − $3,549 = $749.
- At the regional house's $125 day rate for an FX3, $749 is about 6 billed days ($749 ÷ $125 = 6.0).

So the used body saved, at most, about six days of rent at that price. The comparison is between two different models, so it measures money only. Whether renters in your market will pay the same for each is the demand question of lesson 4.

**Five checks before you buy used.** These are this course's advice, each tied to a page you can read:

1. **Match the listing to your package.** The dealer's listings differ in what is in the box. Price the missing pieces, such as a charger, before comparing.
2. **Write down the warranty.** The used listings said six months. Know when it ends.
3. **Reset it.** Sony's help guide says that if a camera "is transferred to you or you borrow the camera: initialize the camera or cancel the linkage with Creators' Cloud on the camera."
4. **Check the software.** Sony's Version screen shows the body's firmware and, with a compatible lens attached, the lens's (lesson 6).
5. **Record it.** Serial number, invoice and photos go into the asset record the day it arrives (lesson 9).

**When new may be worth it.** This course's reasoning: a longer warranty, a full box and a known history are worth something to a rental owner, because the item will go out to strangers. If the used price saves only a few days of rent, those things may be worth more than the saving. If it saves weeks, used may win. Either way, decide with the numbers written down.

:::reveal What did MPB show for used FX3 bodies on October 21, 2026? ||| 11 available, priced from $3,549 to $3,929.

:::reveal What warranty did each displayed used FX3 listing state? ||| "Standard 6 month warranty".

:::reveal What does Sony's help guide tell you to do when a camera is transferred to you? ||| Initialize the camera or cancel its linkage with Creators' Cloud on the camera.

## Sources
- ${FOCUS_FX3A} Locator: price line and "What's in the box".
- ${MPB_FX3} Locator: results header and the eight listings' condition, warranty and "includes" lines.
- ${RH_FX3} Locator: "1 Day" price line.
- ${SONY_LENDING} Locator: "Notes on using the cloud service (Creators' Cloud)", the transfer instructions.
- ${SONY_VERSION} Locator: the first two sentences.`,
    },
    {
      slug: "the-asset-record",
      title: "9 · Serial numbers, receipts and the asset record",
      section: "3 · Acquiring gear",
      recallContent: [
        {
          prompt: "By this course's arithmetic, what was the most a used FX3 saved against a new FX3A on October 21, 2026, and what is that in days of rent at $125?",
          answer: "$749 ($4,298 − $3,549), about 6 billed days at $125.",
        },
        {
          prompt: "Name three of the five checks this course suggests before buying used.",
          answer: "Any three of: match the listing to your package; write down the warranty; reset the camera; check the firmware; record serial number, invoice and photos.",
        },
      ],
      body: `**Three readers, one set of facts.** Three parties may one day ask what you own, when you got it and what it is worth: the IRS, your insurer, and a rental platform's guarantee. They ask for nearly the same facts. Keeping one record that answers all three is the cheapest protection this course teaches.

**What the IRS says asset records should show.** IRS Publication 583 says of business assets: "You need records to figure the annual depreciation and the gain or loss when you sell the assets." It lists what the records should show:

- When and how you acquired the asset, and the purchase price.
- The cost of any improvements.
- The section 179 deduction taken, and deductions taken for depreciation (section 7 explains both).
- Deductions taken for casualty losses, "such as losses resulting from fires or storms."
- How you used the asset.
- When and how you disposed of it, the selling price, and the expenses of sale.

It names documents that may show this, including "Purchase and sales invoices" and "Canceled checks". And it says how long to keep them: "Keep records relating to property until the period of limitations expires for the year in which you dispose of the property in a taxable disposition." For a camera, that can be years after you sell it.

**What an insurer's guide asks for.** The Insurance Information Institute's guide to a home inventory says to describe each item and "note where you bought it, the make and model, what you paid". It says serial numbers are "usually found on the back or bottom of major appliances and electronic equipment" and are "a useful reference". It says to "Store sales receipts, purchase contracts, and appraisals with your list", and to make a photo record labeled with "what's pictured, where you bought it, the make or model". The guide is written for a household. This course applies the same habits to rental gear.

**What a platform asks for.** ShareGrid's Owner Guarantee tells owners to "Set the Replacement Value accurately for each of your rental Listings. ShareGrid will only pay for an item up to the listed Replacement Value." It adds: "Make sure all items in a package are mentioned in the Listing. If they're not, they may not be protected by the ShareGrid Owner Guarantee."

**One record that answers all three.** This course suggests one row per item, with these fields:

| Field | Who asks for it |
|---|---|
| Make, model and serial number | Insurer, platform |
| Date bought, seller, price paid, invoice | IRS, insurer |
| Photos on arrival, labeled | Insurer, platform |
| Replacement value today, with the date you checked it | Platform, insurer |
| What ships with it (charger, cables, case) | Platform |
| Firmware version | You, at each check-out |
| Business and personal days of use | IRS (lesson 23) |
| Date sold or retired, price, costs of sale | IRS |

Update the replacement value when prices move. A value set the day you bought the item can be wrong a year later, and the guarantee pays only up to the value listed.

:::reveal According to IRS Publication 583, how long should you keep records about a business asset? ||| Until the period of limitations expires for the year in which you dispose of the property in a taxable disposition.

:::reveal Where does the Insurance Information Institute say serial numbers are usually found? ||| On the back or bottom of major appliances and electronic equipment.

:::reveal What does ShareGrid say happens to package items not mentioned in a listing? ||| They may not be protected by the ShareGrid Owner Guarantee.

## Sources
- ${IRS_P583} Locator: "Supporting Documents", "Assets" (the list of what records should show and the documents that show it); "How Long To Keep Records", "Assets".
- ${III_INVENTORY} Locator: "Start your home inventory now" (basic information, serial numbers, proof of value); "Use technology to make your home inventory easier" (photos).
- ${SG_GUARANTEE} Locator: "Eligibility", first two items.`,
    },
    {
      slug: "kits-that-rent-together",
      title: "10 · Kits that rent together",
      section: "3 · Acquiring gear",
      recallContent: [
        {
          prompt: "Name four things IRS Publication 583 says asset records should show.",
          answer: "Any four of: when and how you acquired the asset; purchase price; cost of improvements; section 179 deduction taken; depreciation taken; casualty losses taken; how you used it; when and how you disposed of it; selling price; expenses of sale.",
        },
        {
          prompt: "What does ShareGrid say it will pay, at most, for an unreturned item under its Owner Guarantee?",
          answer: "Up to the listed Replacement Value, which the owner must set accurately.",
        },
      ],
      body: `**Renters book something that works.** A production does not want a camera body. It wants pictures by call time. Rental houses price and name packages to match:

- Lensrentals' FX3 A rental lists seven items in the box: the body, a body cap, a strap, an NP-FZ100 battery, a BC-ZD1 charger, a 3-foot Thunderbolt 4 USB-C cable and a USB charger.
- The regional rental house lists a "Sony Cinema Line FX3 w/ XLR Top Handle", a "DJI RS4 Pro Combo Kit", a "Hollyland PyroTX and RX 7\" Monitor Kit" and a "RED Komodo-X Camera Package". The names themselves say these go out as sets.

**The part that breaks a booking.** Lensrentals' Bolt 6 LT 750 kit lists a transmitter, a receiver, seven antennas, a D-Tap power cable, a 2-pin LEMO AC adapter, mounts, two V-Mount plates and more, then says: "Batteries are not included and must be rented separately." This course's reasoning: whatever you leave out, the renter must find somewhere else. A renter who has to shop twice for one job may book the whole job from someone who supplies it all.

**Build the kit list from the job backward.** This course suggests a method, not a rule. List what the job needs to make a usable picture, in order:

1. Capture: the body, a lens, and the media it records to.
2. Power: batteries, a charger, and any cable that powers it from a larger battery.
3. Seeing the picture: a monitor or a wireless link, if the job needs one.
4. Holding it: the handle, a cage, a gimbal or a tripod plate.
5. Connecting it: the cables each piece needs.
6. Carrying it: a case that fits all of the above.

Mark each line **included**, **add-on at a price**, or **renter supplies**, and put that list in the listing.

**Describe and photograph exactly that.** ShareGrid's tips for owners say: "Clearly describe your gear and any special notes the renter should be aware of" and "Ensure your photos are accurate and show your gear clearly." A clear list also protects you. ShareGrid's guarantee covers only package items "mentioned in the Listing", and its missing-items policy says "Renters are accountable for returning all rented gear" and that a renter "may be charged the full replacement cost (including tax and shipping)" for an item that cannot be returned. You can only claim for what you can show went out.

**Media cards carry other people's work.** Sony's help guide warns that "Executing [Format] or [Delete] on the camera or a computer may not completely delete the data on the memory card" and recommends deleting data "completely using data deletion software" before lending a card. If your kit includes cards, lesson 19 builds that into the turnaround.

:::reveal What did Lensrentals' Bolt 6 LT kit listing say about batteries? ||| "Batteries are not included and must be rented separately."

:::reveal Name the six groups in this course's kit-list method. ||| Capture, power, seeing the picture, holding it, connecting it, and carrying it.

:::reveal What does Sony's help guide say about formatting a memory card before lending it? ||| Formatting or deleting may not completely delete the data; it recommends data deletion software.

## Sources
- ${LR_FX3A} Locator: "What's included" list.
- ${RH_CINEMA} Locator: item names.
- ${RH_GIMBALS} Locator: item name.
- ${RH_WIRELESS} Locator: item names.
- ${LR_BOLT} Locator: included-items list and the batteries note.
- ${SG_TIPS} Locator: "Create a Comprehensive Description" and "Upload High-Quality Photos".
- ${SG_GUARANTEE} Locator: "Eligibility", second item.
- ${SG_MISSING} Locator: first two paragraphs.
- ${SONY_LENDING} Locator: "Notes on lending, transferring, or discarding a memory card to others".`,
    },
    {
      slug: "section-3-quiz",
      title: "Section 3 quiz · Acquiring gear",
      section: "3 · Acquiring gear",
      body: "A graded check on buying new or used, keeping one asset record for the IRS, your insurer and a platform, and building kits that rent together. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "According to lesson 8, what decides how many rentals it takes a body to earn back its cost?", options: ["What you paid for it", "The color of its case", "The renter's home city", "The date you listed it"], correctIndex: 0, explanation: "\"What you paid decides how many rentals it takes to earn it back.\" The case color, the renter's city and the listing date play no part in that.", sourceLessonSlug: "new-or-used" },
          { prompt: "Why does lesson 8 call the new-or-used choice a money question first?", options: ["Used bodies rent for twice the price of new", "A body earns the same rent whatever you paid", "New bodies may not be listed on a platform", "Dealers sell used bodies only to rental houses"], correctIndex: 1, explanation: "\"A body that rents for the same price earns the same money whether you paid full price for it or less.\" The lesson says nothing about used bodies renting for more, platform bans or dealer limits.", sourceLessonSlug: "new-or-used" },
          { prompt: "What price did a camera retailer list for the Sony FX3A body on October 21, 2026?", options: ["$3,929", "$4,298", "$3,549", "$2,390"], correctIndex: 1, explanation: "The retailer listed the FX3A body at $4,298. $3,549 and $3,929 bound the used FX3 range at MPB, and $2,390 is the Bolt 6 LT set.", sourceLessonSlug: "new-or-used" },
          { prompt: "How many used Sony FX3 bodies did MPB show as available that day?", options: ["8", "28", "11", "6"], correctIndex: 2, explanation: "MPB \"showed 11 used Sony FX3 bodies available\". It displayed eight of them; 28 is the rental count from lesson 2, and 6 is the billed-day figure in lesson 8.", sourceLessonSlug: "new-or-used" },
          { prompt: "What price range did MPB show for its used FX3 bodies?", options: ["$3,859 to $4,298", "$2,390 to $3,549", "$3,549 to $3,929", "$4,298 to $6,890"], correctIndex: 2, explanation: "The used bodies were \"priced from $3,549 to $3,929.\" $4,298 is the new FX3A, $2,390 the Bolt set and $6,890 the older Bolt kit.", sourceLessonSlug: "new-or-used" },
          { prompt: "What cosmetic condition did each of the eight displayed used FX3 listings state?", options: ["Excellent", "Good", "Fair", "Like new"], correctIndex: 0, explanation: "Each of the eight read \"Cosmetic condition: Excellent\".", sourceLessonSlug: "new-or-used" },
          { prompt: "How long was the warranty on the used FX3 bodies MPB displayed?", options: ["Twelve months", "Three months", "Ninety days", "Six months"], correctIndex: 3, explanation: "Each listing read \"Standard 6 month warranty\".", sourceLessonSlug: "new-or-used" },
          { prompt: "Which items did all eight displayed used FX3 listings include?", options: ["A charger, a manual and the original box", "A cage, a top plate and a USB cable kit", "A lens, a strap and a spare memory card", "The battery, battery door and XLR handle"], correctIndex: 3, explanation: "\"All eight included an NP-FZ100 battery, the FX3 battery door and the XLR handle unit.\" Chargers, manuals, boxes, cages, plates and cables varied by listing.", sourceLessonSlug: "new-or-used" },
          { prompt: "In one used FX3 listing, which part came from a third party in place of Sony's?", options: ["The battery", "The handle", "The charger", "The battery door"], correctIndex: 2, explanation: "One listing had \"a third-party charger in place of Sony's\". The battery, battery door and XLR handle were in all eight.", sourceLessonSlug: "new-or-used" },
          { prompt: "What does lesson 8 say about the FX3 and the FX3A?", options: ["They are one model, renamed", "The FX3A is a used FX3 body", "The FX3 is sold only as new", "They are two different models"], correctIndex: 3, explanation: "\"The FX3 is a different model from the FX3A.\" That is why the lesson says its comparison measures money only.", sourceLessonSlug: "new-or-used" },
          { prompt: "By lesson 8's arithmetic, what was the largest saving a used FX3 offered against a new FX3A?", options: ["$369", "$560", "$929", "$749"], correctIndex: 3, explanation: "$4,298 minus $3,549 is $749. $369 is the smallest saving ($4,298 minus $3,929).", sourceLessonSlug: "new-or-used" },
          { prompt: "By lesson 8's arithmetic, what was the smallest saving a used FX3 offered against a new FX3A?", options: ["$749", "$125", "$155", "$369"], correctIndex: 3, explanation: "$4,298 minus $3,929 is $369. $749 is the largest saving; $125 and $155 are rental prices.", sourceLessonSlug: "new-or-used" },
          { prompt: "At the regional house's $125 day rate, about how many billed days does a $749 saving equal?", options: ["About 3", "About 12", "About 6", "About 28"], correctIndex: 2, explanation: "$749 divided by $125 is 6.0, so \"the used body saved, at most, about six days of rent at that price.\"", sourceLessonSlug: "new-or-used" },
          { prompt: "Because the FX3 and FX3A are different models, what does lesson 8 say its comparison measures?", options: ["Picture quality", "Rental demand", "Battery life", "Money only"], correctIndex: 3, explanation: "\"The comparison is between two different models, so it measures money only.\" Demand is lesson 4's question.", sourceLessonSlug: "new-or-used" },
          { prompt: "Which question does lesson 8 hand back to lesson 4?", options: ["Whether renters pay the same for each", "Which dealer gives the longest warranty", "How to reset a camera that you bought", "Where the serial number is printed on it"], correctIndex: 0, explanation: "\"Whether renters in your market will pay the same for each is the demand question of lesson 4.\"", sourceLessonSlug: "new-or-used" },
          { prompt: "What does lesson 8's first check, matching the listing to your package, tell you to do?", options: ["Ask the dealer for a longer used warranty", "Buy whichever listing has the most parts", "Pick whichever listing has the lowest price", "Price the missing pieces before comparing"], correctIndex: 3, explanation: "\"The dealer's listings differ in what is in the box. Price the missing pieces, such as a charger, before comparing.\"", sourceLessonSlug: "new-or-used" },
          { prompt: "What does Sony's help guide say to do when a camera is transferred to you?", options: ["Initialize it or cancel its cloud linkage", "Update the lens firmware before first use", "Clean the sensor with a blower right away", "Format every card that came in the camera"], correctIndex: 0, explanation: "Sony: \"initialize the camera or cancel the linkage with Creators' Cloud on the camera.\"", sourceLessonSlug: "new-or-used" },
          { prompt: "What does Sony's Version screen show, per lesson 8's fourth check?", options: ["Body firmware, and a compatible lens's", "Remaining battery level and charge time", "Hours the camera has run since purchase", "The serial number and the purchase date"], correctIndex: 0, explanation: "The Version screen \"shows the body's firmware and, with a compatible lens attached, the lens's\".", sourceLessonSlug: "new-or-used" },
          { prompt: "When does lesson 8 say a used body's serial number, invoice and photos go into the asset record?", options: ["After its first rental", "The day it arrives", "At the end of the year", "On the day you sell it"], correctIndex: 1, explanation: "\"Serial number, invoice and photos go into the asset record the day it arrives (lesson 9).\"", sourceLessonSlug: "new-or-used" },
          { prompt: "When does lesson 8 say used may win over new?", options: ["When a used listing adds a third-party cage", "When the used price saves weeks of rent", "When every used listing reads Excellent", "When the warranty on new runs six months"], correctIndex: 1, explanation: "\"If the used price saves only a few days of rent, those things may be worth more than the saving. If it saves weeks, used may win.\"", sourceLessonSlug: "new-or-used" },
          { prompt: "Why does lesson 8 say a longer warranty, a full box and a known history matter to a rental owner?", options: ["Platforms list only brand-new gear", "The item will go out to strangers", "Insurers refuse all used bodies", "Renters can see what you paid"], correctIndex: 1, explanation: "Those things \"are worth something to a rental owner, because the item will go out to strangers.\"", sourceLessonSlug: "new-or-used" },
          { prompt: "Which three parties does lesson 9 say may ask what you own, when you got it and what it is worth?", options: ["The IRS, your insurer and a platform", "Your renter, your bank and a house", "Your union, a dealer and the maker", "The TSA, the FCC and a league office"], correctIndex: 0, explanation: "\"Three parties may one day ask...: the IRS, your insurer, and a rental platform's guarantee.\"", sourceLessonSlug: "the-asset-record" },
          { prompt: "What does lesson 9 call the cheapest protection the course teaches?", options: ["A binder for each kind of reader", "A photo of every renter's ID card", "An extended warranty on each item", "One record that answers all three"], correctIndex: 3, explanation: "\"Keeping one record that answers all three is the cheapest protection this course teaches.\" ShareGrid asks owners not to photograph IDs (lesson 18).", sourceLessonSlug: "the-asset-record" },
          { prompt: "Why does IRS Publication 583 say you need records about business assets?", options: ["To figure depreciation and gain or loss", "To prove the gear is in working order", "To set a fair price for each rental day", "To register the gear with its maker"], correctIndex: 0, explanation: "\"You need records to figure the annual depreciation and the gain or loss when you sell the assets.\"", sourceLessonSlug: "the-asset-record" },
          { prompt: "Which of these is on Publication 583's list of what asset records should show?", options: ["The renter's license number", "How you used the asset", "The camera's firmware version", "The listing's search ranking"], correctIndex: 1, explanation: "The list includes \"How you used the asset.\" Firmware is a field this course adds for you, not one the IRS lists.", sourceLessonSlug: "the-asset-record" },
          { prompt: "What example of casualty losses does Publication 583 give?", options: ["Losses from late returns", "Losses from fires or storms", "Losses from platform fees", "Losses from used purchases"], correctIndex: 1, explanation: "Records show deductions for casualty losses, \"such as losses resulting from fires or storms.\"", sourceLessonSlug: "the-asset-record" },
          { prompt: "Which documents does Publication 583 name as able to show asset information?", options: ["Rental listings and reviews", "Purchase and sales invoices", "Insurance quotes and emails", "Firmware logs and manuals"], correctIndex: 1, explanation: "It names documents \"including 'Purchase and sales invoices' and 'Canceled checks'\".", sourceLessonSlug: "the-asset-record" },
          { prompt: "How long does Publication 583 say to keep records relating to an asset?", options: ["Until the limitations period ends for the year of disposal", "For three years from the date you bought the item, no more", "Until the maker's warranty on the item runs out entirely", "For as long as the item stays listed on a rental platform"], correctIndex: 0, explanation: "\"Keep records relating to property until the period of limitations expires for the year in which you dispose of the property in a taxable disposition.\"", sourceLessonSlug: "the-asset-record" },
          { prompt: "For a camera, when does lesson 9 say the asset record may still be needed?", options: ["Only until you sell it", "Years after you sell it", "Until it is insured", "Until its warranty ends"], correctIndex: 1, explanation: "The retention rule runs to the year you dispose of the item, so \"For a camera, that can be years after you sell it.\"", sourceLessonSlug: "the-asset-record" },
          { prompt: "What does the Insurance Information Institute's guide say to note for each item?", options: ["The renter's name, address and phone number", "The date it was last cleaned and by whom", "Where you bought it, make, model, what you paid", "Its firmware version and its battery count"], correctIndex: 2, explanation: "The guide says to describe each item and \"note where you bought it, the make and model, what you paid\".", sourceLessonSlug: "the-asset-record" },
          { prompt: "On major electronic equipment, where does the Institute's guide say to look for a serial number?", options: ["Inside the battery door", "Under the lens mount cap", "On the back or bottom", "On the original box only"], correctIndex: 2, explanation: "Serial numbers are \"usually found on the back or bottom of major appliances and electronic equipment\".", sourceLessonSlug: "the-asset-record" },
          { prompt: "What does the Institute's guide say to store with your inventory list?", options: ["Firmware notes, manuals and cleaning logs", "Rental listings, reviews and renter IDs", "Sales receipts, purchase contracts, appraisals", "Battery logs, charger cables, spare caps"], correctIndex: 2, explanation: "\"Store sales receipts, purchase contracts, and appraisals with your list\".", sourceLessonSlug: "the-asset-record" },
          { prompt: "How does lesson 9 use the Institute's home inventory guide?", options: ["It quotes the guide as a legal standard", "It treats the guide as an insurance policy", "It says the guide was written for rentals", "It applies a household guide's habits to gear"], correctIndex: 3, explanation: "\"The guide is written for a household. This course applies the same habits to rental gear.\"", sourceLessonSlug: "the-asset-record" },
          { prompt: "Under the ShareGrid Owner Guarantee, up to what will ShareGrid pay for an item?", options: ["The price you originally paid", "The listed Replacement Value", "The renter's damage waiver", "The rental house's day rate"], correctIndex: 1, explanation: "\"ShareGrid will only pay for an item up to the listed Replacement Value.\"", sourceLessonSlug: "the-asset-record" },
          { prompt: "What does ShareGrid say about package items not mentioned in the listing?", options: ["They may not be protected by the guarantee", "They are covered at half their listed value", "They are billed to the renter at day rate", "They are covered only on shipped rentals"], correctIndex: 0, explanation: "\"Make sure all items in a package are mentioned in the Listing. If they're not, they may not be protected by the ShareGrid Owner Guarantee.\"", sourceLessonSlug: "the-asset-record" },
          { prompt: "In lesson 9's table, which field is marked for the IRS alone, pointing to lesson 23?", options: ["Firmware version at each check-out", "Days of business and personal use", "What ships with the item in the box", "Make, model and the serial number"], correctIndex: 1, explanation: "\"Business and personal days of use\" is marked \"IRS (lesson 23)\". Firmware is for you; what ships with it is for the platform; make, model and serial for insurer and platform.", sourceLessonSlug: "the-asset-record" },
          { prompt: "In lesson 9's table, who is the firmware version field for?", options: ["The IRS, each tax year", "Your insurer, at claim", "You, at each check-out", "The platform, at listing"], correctIndex: 2, explanation: "The table marks firmware version \"You, at each check-out\".", sourceLessonSlug: "the-asset-record" },
          { prompt: "In lesson 9's table, who asks for the make, model and serial number?", options: ["The IRS and the insurer", "The insurer and the platform", "The IRS and the platform", "Only the platform, at listing"], correctIndex: 1, explanation: "The row \"Make, model and serial number\" is marked \"Insurer, platform\".", sourceLessonSlug: "the-asset-record" },
          { prompt: "In lesson 9's table, who asks for the date sold or retired, the price and costs of sale?", options: ["The insurer", "The IRS", "The platform", "The renter"], correctIndex: 1, explanation: "That row is marked \"IRS\", matching Publication 583's list.", sourceLessonSlug: "the-asset-record" },
          { prompt: "Why does lesson 9 tell you to update the replacement value when prices move?", options: ["The IRS taxes the value on each listing again", "The guarantee pays only up to the listed value", "Platforms delete listings with an old value", "Renters may only pay the value set at purchase"], correctIndex: 1, explanation: "\"A value set the day you bought the item can be wrong a year later, and the guarantee pays only up to the value listed.\"", sourceLessonSlug: "the-asset-record" },
          { prompt: "According to lesson 10, what does a production actually want?", options: ["The lowest day rate", "A camera body alone", "Only the newest model", "Pictures by call time"], correctIndex: 3, explanation: "\"A production does not want a camera body. It wants pictures by call time.\"", sourceLessonSlug: "kits-that-rent-together" },
          { prompt: "How many items did Lensrentals list in the box with its FX3 A body?", options: ["Five", "Nine", "Seven", "Eleven"], correctIndex: 2, explanation: "\"Lensrentals' FX3 A rental lists seven items in the box\". Eleven is MPB's count of used FX3 bodies.", sourceLessonSlug: "kits-that-rent-together" },
          { prompt: "Which of these was in Lensrentals' FX3 A box list?", options: ["An XLR handle unit", "A V-Mount plate", "A BC-ZD1 charger", "A memory card"], correctIndex: 2, explanation: "The seven items include \"a BC-ZD1 charger\". The XLR handle unit appears in the retailer's FX3A box, the V-Mount plates in the Bolt kit, and no card is listed.", sourceLessonSlug: "kits-that-rent-together" },
          { prompt: "What does lesson 10 say the regional house's package names show?", options: ["These go out as sets", "The gear is all used", "The prices are fixed", "The kits ship free"], correctIndex: 0, explanation: "\"The names themselves say these go out as sets.\"", sourceLessonSlug: "kits-that-rent-together" },
          { prompt: "Which package name does the regional rental house list?", options: ["DJI RS4 Pro Combo Kit", "Sony FX3 A body only", "Teradek Bolt 6 LT set", "Canon C70 lens bundle"], correctIndex: 0, explanation: "The house lists a \"DJI RS4 Pro Combo Kit\". The FX3 A body rental is Lensrentals', and the Bolt 6 LT set is Teradek's product.", sourceLessonSlug: "kits-that-rent-together" },
          { prompt: "What does Lensrentals' Bolt 6 LT 750 kit listing say must be rented separately?", options: ["Antennas", "Receivers", "Batteries", "Mounts"], correctIndex: 2, explanation: "\"Batteries are not included and must be rented separately.\" The kit lists the antennas, a receiver and mounts.", sourceLessonSlug: "kits-that-rent-together" },
          { prompt: "How many antennas does the Bolt 6 LT 750 kit list?", options: ["Two", "Four", "Ten", "Seven"], correctIndex: 3, explanation: "The kit lists \"seven antennas\".", sourceLessonSlug: "kits-that-rent-together" },
          { prompt: "By lesson 10's reasoning, what happens to whatever you leave out of a kit?", options: ["The renter must find it somewhere else", "The platform supplies it at no charge", "The renter's waiver pays for its cost", "The rental house lends it out for free"], correctIndex: 0, explanation: "\"Whatever you leave out, the renter must find somewhere else.\"", sourceLessonSlug: "kits-that-rent-together" },
          { prompt: "What may a renter who has to shop twice for one job do, according to lesson 10?", options: ["Pay a higher community fee instead", "Ask the platform to refund the fee", "Book the whole job from someone else", "Leave a review that hides the gap"], correctIndex: 2, explanation: "\"A renter who has to shop twice for one job may book the whole job from someone who supplies it all.\"", sourceLessonSlug: "kits-that-rent-together" },
          { prompt: "What is the first group in lesson 10's kit-list method?", options: ["Capture", "Power", "Carrying it", "Connecting it"], correctIndex: 0, explanation: "The method runs capture, power, seeing the picture, holding it, connecting it, carrying it.", sourceLessonSlug: "kits-that-rent-together" },
          { prompt: "What goes in the capture group of lesson 10's method?", options: ["Batteries, charger and cables", "Monitor, link and a receiver", "Case, cage and a tripod plate", "Body, lens and recording media"], correctIndex: 3, explanation: "\"Capture: the body, a lens, and the media it records to.\"", sourceLessonSlug: "kits-that-rent-together" },
          { prompt: "In lesson 10's method, which group holds a gimbal or a tripod plate?", options: ["Holding it", "Capture", "Power", "Carrying it"], correctIndex: 0, explanation: "\"Holding it: the handle, a cage, a gimbal or a tripod plate.\"", sourceLessonSlug: "kits-that-rent-together" },
          { prompt: "In lesson 10's method, which group holds a monitor or a wireless link?", options: ["Connecting it", "Holding it", "Carrying it", "Seeing the picture"], correctIndex: 3, explanation: "\"Seeing the picture: a monitor or a wireless link, if the job needs one.\" Connecting it covers the cables.", sourceLessonSlug: "kits-that-rent-together" },
          { prompt: "Which three marks does lesson 10 tell you to put on each kit-list line?", options: ["Included, add-on, renter supplies", "New, used, rented from a house", "Owned, leased, borrowed for free", "Insured, waived, or guaranteed"], correctIndex: 0, explanation: "\"Mark each line included, add-on at a price, or renter supplies, and put that list in the listing.\"", sourceLessonSlug: "kits-that-rent-together" },
          { prompt: "How does lesson 10 describe its kit-list method?", options: ["A legal requirement", "A platform's own rule", "A method, not a rule", "An insurer's own rule"], correctIndex: 2, explanation: "\"This course suggests a method, not a rule.\"", sourceLessonSlug: "kits-that-rent-together" },
          { prompt: "What does ShareGrid's description tip tell owners to do?", options: ["List only the most valuable items", "Copy a rental house's description", "Describe gear and any special notes", "Leave out notes about wear or marks"], correctIndex: 2, explanation: "\"Clearly describe your gear and any special notes the renter should be aware of\".", sourceLessonSlug: "kits-that-rent-together" },
          { prompt: "What does ShareGrid's photo tip ask of owners' photos?", options: ["Taken by a professional photographer", "Shot on a plain white backdrop only", "Updated before every single rental", "Accurate, showing the gear clearly"], correctIndex: 3, explanation: "\"Ensure your photos are accurate and show your gear clearly.\"", sourceLessonSlug: "kits-that-rent-together" },
          { prompt: "Which package items does ShareGrid's guarantee cover, as lesson 10 quotes it?", options: ["Those mentioned in the Listing", "Those bought new from a dealer", "Those worth more than $1,000", "Those shipped by the platform"], correctIndex: 0, explanation: "The guarantee covers package items \"mentioned in the Listing\".", sourceLessonSlug: "kits-that-rent-together" },
          { prompt: "For an item that cannot be returned, what may ShareGrid charge the renter?", options: ["Half of the item's listed replacement value", "One week of the item's listed day rate", "Full replacement cost with tax and shipping", "The owner's insurance deductible only"], correctIndex: 2, explanation: "A renter \"may be charged the full replacement cost (including tax and shipping)\".", sourceLessonSlug: "kits-that-rent-together" },
          { prompt: "According to lesson 10, what can you claim for?", options: ["Anything the renter used on set", "Only what you can show went out", "Any item listed on any platform", "Anything the guarantee names"], correctIndex: 1, explanation: "\"You can only claim for what you can show went out.\"", sourceLessonSlug: "kits-that-rent-together" },
          { prompt: "What does Sony warn about formatting or deleting on a memory card?", options: ["It erases data beyond all recovery", "It is required by every platform", "It damages cards used by renters", "It may not completely delete the data"], correctIndex: 3, explanation: "\"Executing [Format] or [Delete] on the camera or a computer may not completely delete the data on the memory card\". Sony recommends data deletion software.", sourceLessonSlug: "kits-that-rent-together" },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4: Pricing
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "reading-a-price-list",
      title: "11 · Reading a published price list",
      section: "4 · Pricing",
      recallContent: [
        {
          prompt: "What did Lensrentals list as included with its FX3 A body rental?",
          answer: "The body, a body cap, a strap, an NP-FZ100 battery, a BC-ZD1 charger, a 3-foot Thunderbolt 4 USB-C cable and a USB charger.",
        },
        {
          prompt: "Why does this course say leaving power or media out of a package can cost a booking?",
          answer: "The renter must find the missing pieces somewhere else, and a renter who has to shop twice may book the whole job from someone who supplies it all.",
        },
      ],
      body: `**Prices are published, so read them.** Rental houses publish their prices, and a peer-to-peer platform publishes its rules for counting days. Together they tell you what a renter near you already pays, and how a "week" or a "weekend" is counted. Every price below was read on October 21, 2026.

**One house's day and week, side by side.** This course divided each week price by its day price:

| Item at the regional rental house | Day | Week | Week ÷ day |
|---|---|---|---|
| Sony FX3 with XLR top handle | $125 | $562.50 | 4.5 |
| Sony FX30 with XLR top handle | $75 | $335 | 4.47 |
| Canon EOS C70 | $100 | $450 | 4.5 |
| RED Komodo-X package | $300 | $1,200 | 4.0 |
| DJI RS4 Pro Combo Kit | $75 | $250 | 3.33 |
| Hollyland Pyro 7-inch kit | $75 | $325 | 4.33 |

Its weekend rate, for a Friday start and a Monday end, is "1.5 times the day rate" for most items.

**A house that prices by length.** Lensrentals does not quote a day rate. Its FX3 A body costs $155 for 3 days, $222 for 7 days, $389 for 14 days and $655 for 30 days. This course's arithmetic per day: about $51.67 at 3 days, $31.71 at 7, $27.79 at 14 and $21.83 at 30. The longer the rental, the less each day costs.

**A platform that counts days for you.** ShareGrid caps a full week at 3 shoot days and a month at 10, and counts Saturday and Sunday as one (lesson 5).

**A guide's rule of thumb.** The Rate Guide says a weekly kit rate is "typically set at 3×" the daily rate.

**What the four sources say together.** This course's reading: a "week" costs anywhere from 3 to 4.5 days' rent, depending on who sets the price. A "weekend" costs 1 day on the platform and 1.5 days at the house. There is no single market rule, so when you set yours (lesson 14), say it in writing.

**What a price list leaves out.** The regional house's FX3 page shows two prices and no list of what comes with the camera; Lensrentals' FX3 A page lists seven items. Before you compare your price with a house's, find out what its price includes. A lower price for less gear is not a lower price.

:::reveal At the regional house, how many day rates did a week of the Sony FX3 with handle cost? ||| 4.5 ($562.50 ÷ $125).

:::reveal By this course's arithmetic, what did one day of a 30-day Lensrentals FX3 A rental cost? ||| About $21.83 ($655 ÷ 30).

:::reveal What does this course conclude a "week" costs across the four sources? ||| Anywhere from 3 to 4.5 days' rent, depending on who sets the price.

## Sources
- ${RH_CINEMA} Locator: the five camera listings, "1 Day" and "1 Week".
- ${RH_GIMBALS} Locator: the one listing.
- ${RH_WIRELESS} Locator: the Hollyland listing.
- ${RH_POLICIES} Locator: weekend pricing paragraph.
- ${RH_FX3} Locator: the whole page (two prices, no list of contents).
- ${LR_FX3A} Locator: rental price table and "What's included".
- ${SG_SHOOT_DAYS} Locator: "Full week" and "Full month" rules.
- ${RATE_GUIDE} Locator: the kit rental rates paragraph.`,
    },
    {
      slug: "platform-fees",
      title: "12 · Platform fees: what reaches you",
      section: "4 · Pricing",
      recallContent: [
        {
          prompt: "At the regional rental house, what was the weekend rate for most items?",
          answer: "1.5 times the day rate, for a Friday start and a Monday end.",
        },
        {
          prompt: "Across the regional house, Lensrentals, ShareGrid and The Rate Guide, how many days' rent does a week cost?",
          answer: "Anywhere from 3 to 4.5, depending on who sets the price.",
        },
      ],
      body: `**Your listed price is not your income.** A platform takes a fee, the renter pays a fee on top, and the days billed are fewer than the days the gear is away. Work out what reaches you before you set a price.

**ShareGrid's fees, as its page states them.** Under "Rentals":

- Owner fee: "Fixed 15% service fee."
- Renter fee: "Dynamic community fee, typically 10%, displayed during checkout." The page adds that it "may vary based on pickup schedule, coverage option, and booking lead time."
- "The community fee may not be refundable if the renter cancels a confirmed rental."
- The fees cover "ID verification, coverage verification, security, customer service, feature improvements, and dispute mitigation."

Under "Buy & Sell", which matters when you retire gear (lesson 22): "A 5% fee applies to all seller transactions", and buyers paying by credit card pay "2.45% + $0.30".

**A worked example.** The numbers are assumptions chosen to show the method, not a rate to use. This course assumes the 15 percent is taken from the rental price; confirm that on your own payout statement.

| Step | Amount |
|---|---|
| Your listed day rate (assumption) | $100 |
| Renter keeps the gear 7 days; ShareGrid bills 3 shoot days | $300 |
| Owner fee, 15 percent | $45 |
| Reaches you | $255 |
| Per day the gear was away (7 days) | about $36.43 |
| Renter's community fee, typically 10 percent | about $30 more for the renter |

The same gear, booked for one shoot day with pickup and return days free, would earn $85 for three calendar days away. Either way, the number that pays for the gear is what reaches you per billed day, minus your upkeep and time (section 7).

**What renters already pay for protection at a rental house.** Lensrentals' FX3 A page adds an optional fee for its Lenscap protection: $21 on the $155 three-day rental, or $32 for Lenscap+ (lesson 16 explains what they are). A renter comparing your listing with a rental house is comparing totals, not day rates.

**What the fee buys you.** ShareGrid says its fees pay for ID and coverage verification, security and dispute handling. Section 5 shows what those are worth, and what they do not cover.

:::reveal What owner fee does ShareGrid charge on rentals? ||| A "Fixed 15% service fee."

:::reveal In this lesson's example, what reaches the owner from a 7-day rental billed at 3 days of $100? ||| $255 ($300 less the 15 percent fee of $45), about $36.43 per day away.

:::reveal What did Lensrentals charge for Lenscap on a $155 three-day FX3 A rental? ||| $21 (or $32 for Lenscap+).

## Sources
- ${SG_FEES} Locator: "Rentals" (owner fee, renter fee and its variation), "Important Note", the fee-purpose sentence, and "Buy & Sell".
- ${SG_SHOOT_DAYS} Locator: "Full week" rule and the pickup and return days.
- ${LR_FX3A} Locator: rental price table, 3-day row, Lenscap and Lenscap+ columns.`,
    },
    {
      slug: "kit-fees",
      title: "13 · Kit fees: why a percentage rule misleads",
      section: "4 · Pricing",
      recallContent: [
        {
          prompt: "What renter fee does ShareGrid's page describe?",
          answer: "A \"Dynamic community fee, typically 10%, displayed during checkout\", which may vary with pickup schedule, coverage option and booking lead time.",
        },
        {
          prompt: "In lesson 12's example, why is the owner's income per day away lower than the listed day rate?",
          answer: "The platform takes 15 percent and a 7-day rental bills only 3 shoot days, so $255 reaches the owner for 7 days away, about $36.43 a day.",
        },
      ],
      body: `**The rule.** The Rate Guide, updated August 2026, says "The industry norm for kit rental is" 10 to 15 percent "of the replacement value of the equipment per day." Its examples: a $5,000 gimbal at $500 to $750 a day, and a full Steadicam rig with a $15,000 replacement value at $1,500 to $2,250 a day. It also says kit rentals are separate line items on the production budget, not built into the operating rate. That last point matches this course (lesson 3). The percentage is what this lesson tests.

**Test it against the price lists.** This course's arithmetic, using prices read on October 21, 2026:

| Item | Price new | Rule: 10 to 15 percent a day | What a renter could pay instead |
|---|---|---|---|
| Sony FX3A body | $4,298 (retailer) | $429.80 to $644.70 a day | $125 a day for an FX3 with handle at the regional house; $155 for 3 days at Lensrentals |
| Teradek Bolt 6 LT set | $2,390 (maker) | $239 to $358.50 a day | $142 for 3 days at Lensrentals |

By this arithmetic, the rule's day rate for the camera is 3.4 to 5.2 times the regional house's day rate for an FX3 ($429.80 ÷ $125 and $644.70 ÷ $125). For the wireless set, the rule asks for more in one day than Lensrentals charges for three.

**Why it misleads.** This course's reasoning: a percentage of replacement value describes your cost, not the client's choice. A client who can rent the same item from a rental house will compare. A rule that ignores the price list prices you out of the jobs where the client checks, and teaches you to expect income the market may not pay. This course could not test whether clients pay the rule's rates, so it treats the rental house's price as the figure a client can check, and the guide's rule as a claim.

**What a kit fee does buy the client.** The regional house asks a renter to show a certificate of insurance for items of $3,000 or more, and may ask a first-time renter for a $1,000 credit card hold. A client who pays your kit fee skips the pickup, the return, the certificate and the hold, and gets gear prepped by the person who will run it. That convenience is real, by this course's reading, but it has a ceiling: the client can still rent the gear and hire you to run it.

**How to write it on an invoice.** Keep the kit fee on its own line, apart from your day rate. The Rate Guide says so, and the IRS instructions quoted in lesson 3 ask a payer to split a machine's rent from its operator's charge.

:::reveal What does The Rate Guide give as the industry norm for kit rental? ||| 10 to 15 percent of the replacement value of the equipment per day.

:::reveal By this course's arithmetic, what day rate does the rule give for a $4,298 FX3A, against the regional house's $125? ||| $429.80 to $644.70, which is 3.4 to 5.2 times the house's day rate.

:::reveal Why does this course say a percentage of replacement value misleads? ||| It describes your cost, not the client's choice; a client who can rent the same item for less from a rental house will compare.

## Sources
- ${RATE_GUIDE} Locator: the kit rental rates paragraph and its examples.
- ${FOCUS_FX3A} Locator: price line.
- ${TERADEK_B6} Locator: price line.
- ${RH_FX3} Locator: "1 Day" price line.
- ${LR_FX3A} Locator: rental price table, 3-day row.
- ${LR_BOLT} Locator: rental price list, 3-day row.
- ${RH_POLICIES} Locator: insurance requirement and the credit card authorization paragraph.
- ${IRS_1099} Locator: "Box 1. Rents", the machine rentals paragraph.`,
    },
    {
      slug: "your-rate-sheet",
      title: "14 · Build your own rate sheet",
      section: "4 · Pricing",
      recallContent: [
        {
          prompt: "By this course's arithmetic, how does the 10 to 15 percent rule's day rate for a Bolt 6 LT set compare with Lensrentals' price?",
          answer: "The rule gives $239 to $358.50 a day, more than Lensrentals' $142 for three days.",
        },
        {
          prompt: "What does a client who pays a kit fee skip, compared with renting from the regional house?",
          answer: "The pickup, the return, the certificate of insurance and the credit card hold; and the gear arrives prepped by the person who will run it.",
        },
      ],
      body: `**An exercise, with a worked sample.** Build a one-page rate sheet for the gear you own or plan to buy. It turns the last three lessons into numbers you can defend to a client and to yourself.

**Step 1: date it.** Write "Rates as of" and the date at the top. Every price on it will change; the date tells you when to look again.

**Step 2: one row per item or package.** For each, fill in:

- What it is, and what is included (lesson 10).
- Replacement value: what it would cost new today, with the source and the date (lesson 9).
- The market: a regional house's day and week price; a house that prices by length, at 3 and 7 days; and a comparable platform listing, if there is one (lesson 11).

**Step 3: your prices, with your rules in words.** A day rate. A weekend rule (one day, like the platform, or 1.5 days, like the regional house). A week rule (3 days, 4.5 days, or your own). Write the rule, not just the number, so a renter can predict the bill.

**Step 4: what reaches you.** Subtract the platform's fee (lesson 12). If you rent direct, subtract card fees and your time instead.

**Step 5: your kit fee when you operate.** On its own line, priced against what the client could pay a rental house for the same package (lesson 13).

**Step 6: your terms.** What you require before gear leaves: ID, a deposit or card hold, insurance or a waiver. Section 5 covers each.

**A worked sample.** Every price for "your" gear below is an assumption to show the method, not advice.

| | Market (October 21, 2026) | Your price (assumption) | Reaches you |
|---|---|---|---|
| FX3-class body with handle, battery, charger | Regional house $125 a day, $562.50 a week; FX3 A at Lensrentals $155 for 3 days | Platform: $100 a day; weekend counts 1 day; week counts 3 days | $85 a billed day after the 15 percent fee |
| Same, with you operating | Same | Kit fee $110 a day, its own invoice line | $110, less your prep time and upkeep |

**What a platform rewards.** ShareGrid ranks listings partly on "Fair Market Pricing", which it explains as "Set competitive and reasonable rental prices to attract renters and improve your ranking." A rate sheet built from the market is how you show that.

**When to review it.** This course suggests two triggers: a fixed date (every three months, say), and any time a newer model of something you own appears on a rental house's list (lesson 6).

:::reveal Why does this lesson tell you to write your weekend and week rules in words, not just numbers? ||| So a renter can predict the bill; the market has no single rule (a weekend is 1 day on the platform and 1.5 at the regional house).

:::reveal In the worked sample, what reaches the owner from a $100 platform day? ||| $85 a billed day, after the 15 percent owner fee.

:::reveal What does ShareGrid's "Fair Market Pricing" factor tell owners to do? ||| "Set competitive and reasonable rental prices to attract renters and improve your ranking."

## Sources
- ${RH_FX3} Locator: price lines.
- ${RH_POLICIES} Locator: weekend pricing paragraph.
- ${LR_FX3A} Locator: rental price table, 3-day row.
- ${SG_SHOOT_DAYS} Locator: weekend and "Full week" rules.
- ${SG_FEES} Locator: "Rentals", owner fee.
- ${SG_BEST_MATCH} Locator: "Fair Market Pricing".`,
    },
    {
      slug: "section-4-quiz",
      title: "Section 4 quiz · Pricing",
      section: "4 · Pricing",
      body: "A graded check on reading published price lists, what reaches you after platform fees, why a percentage-of-replacement-value kit fee misleads, and building your own rate sheet. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "At the regional house, how many day rates did a week of the Sony FX3 with handle cost, by lesson 11's division?", options: ["3.0", "4.0", "4.5", "3.33"], correctIndex: 2, explanation: "$562.50 divided by $125 is 4.5. 4.0 is the RED Komodo-X package and 3.33 the DJI RS4 Pro kit.", sourceLessonSlug: "reading-a-price-list" },
          { prompt: "What did the regional house charge for the Sony FX30 with XLR top handle?", options: ["$75 a day, $250 a week", "$100 a day, $450 a week", "$125 a day, $562 a week", "$75 a day, $335 a week"], correctIndex: 3, explanation: "The FX30 was $75 a day and $335 a week. $75 and $250 is the RS4 Pro kit; $100 and $450 the Canon EOS C70.", sourceLessonSlug: "reading-a-price-list" },
          { prompt: "In lesson 11's table, which item had the lowest week-to-day multiple?", options: ["The Sony FX3 with handle", "The Canon EOS C70 body", "The DJI RS4 Pro Combo Kit", "The RED Komodo-X package"], correctIndex: 2, explanation: "The RS4 Pro kit's week was 3.33 day rates ($250 divided by $75). The FX3 and C70 were 4.5 and the RED package 4.0.", sourceLessonSlug: "reading-a-price-list" },
          { prompt: "What week-to-day multiple did lesson 11 compute for the RED Komodo-X package?", options: ["4.5", "4.0", "3.33", "4.33"], correctIndex: 1, explanation: "$1,200 divided by $300 is 4.0. 4.33 is the Hollyland Pyro kit.", sourceLessonSlug: "reading-a-price-list" },
          { prompt: "What did the regional house list for the Canon EOS C70?", options: ["$100 a day, $450 a week", "$75 a day, $335 a week", "$300 a day, $1,200 a week", "$75 a day, $325 a week"], correctIndex: 0, explanation: "The C70 was $100 a day and $450 a week, a multiple of 4.5.", sourceLessonSlug: "reading-a-price-list" },
          { prompt: "What did lesson 11 compute for the Hollyland Pyro 7-inch kit's week-to-day multiple?", options: ["3.33", "4.47", "4.0", "4.33"], correctIndex: 3, explanation: "$325 divided by $75 is 4.33. 4.47 is the FX30 and 3.33 the RS4 Pro kit.", sourceLessonSlug: "reading-a-price-list" },
          { prompt: "What is the regional house's weekend rate for most items?", options: ["2 times the day rate", "The same as one day", "3 times the day rate", "1.5 times the day rate"], correctIndex: 3, explanation: "Its weekend rate is \"1.5 times the day rate\" for most items. One day is the platform's weekend.", sourceLessonSlug: "reading-a-price-list" },
          { prompt: "Which start and end days does the regional house's weekend rate cover?", options: ["A Friday start, Monday end", "A Saturday start, Sunday end", "A Thursday start, Tuesday end", "A Friday start, Sunday end"], correctIndex: 0, explanation: "The weekend rate is \"for a Friday start and a Monday end\".", sourceLessonSlug: "reading-a-price-list" },
          { prompt: "How does Lensrentals price its FX3 A body, according to lesson 11?", options: ["By one flat day rate of $51.67", "By rental length, not a day rate", "By a weekly rate of 4.5 days", "By the renter's distance away"], correctIndex: 1, explanation: "\"Lensrentals does not quote a day rate.\" It prices by length: 3, 7, 14 and 30 days.", sourceLessonSlug: "reading-a-price-list" },
          { prompt: "What did Lensrentals charge for 14 days of the FX3 A body?", options: ["$222", "$655", "$155", "$389"], correctIndex: 3, explanation: "$389 for 14 days. $155 is 3 days, $222 is 7 days and $655 is 30 days.", sourceLessonSlug: "reading-a-price-list" },
          { prompt: "By lesson 11's arithmetic, about what did each day of a 7-day Lensrentals FX3 A rental cost?", options: ["About $51.67", "About $27.79", "About $21.83", "About $31.71"], correctIndex: 3, explanation: "$222 divided by 7 is about $31.71. $51.67 is the 3-day figure, $27.79 the 14-day and $21.83 the 30-day.", sourceLessonSlug: "reading-a-price-list" },
          { prompt: "What does lesson 11 conclude from Lensrentals' price ladder?", options: ["The longer the rental, the less per day", "The longer the rental, the more per day", "The per-day price is fixed at any length", "Only weekly rentals get a lower price"], correctIndex: 0, explanation: "\"The longer the rental, the less each day costs.\" Per day fell from about $51.67 at 3 days to $21.83 at 30.", sourceLessonSlug: "reading-a-price-list" },
          { prompt: "How many shoot days does ShareGrid cap a full week at?", options: ["4.5 shoot days", "7 shoot days", "5 shoot days", "3 shoot days"], correctIndex: 3, explanation: "ShareGrid \"caps a full week at 3 shoot days and a month at 10\".", sourceLessonSlug: "reading-a-price-list" },
          { prompt: "How many shoot days does ShareGrid cap a month at?", options: ["22 shoot days", "30 shoot days", "10 shoot days", "15 shoot days"], correctIndex: 2, explanation: "A month is capped at 10 shoot days. 22 to 31 days is the length of rental the rule applies to.", sourceLessonSlug: "reading-a-price-list" },
          { prompt: "What does The Rate Guide say a weekly kit rate is typically set at?", options: ["Four and a half times daily", "Seven times the daily rate", "One and a half times daily", "Three times the daily rate"], correctIndex: 3, explanation: "The guide says a weekly kit rate is \"typically set at 3×\" the daily rate. 4.5 is the regional house's FX3 multiple; 1.5 is its weekend.", sourceLessonSlug: "reading-a-price-list" },
          { prompt: "Across lesson 11's four sources, what does a week cost?", options: ["3 to 4.5 days' rent", "5 to 7 days' rent", "1 to 1.5 days' rent", "7 to 10 days' rent"], correctIndex: 0, explanation: "\"A 'week' costs anywhere from 3 to 4.5 days' rent, depending on who sets the price.\"", sourceLessonSlug: "reading-a-price-list" },
          { prompt: "How do the platform and the regional house count a weekend?", options: ["1.5 days on the platform, 1 at the house", "2 days on the platform, 3 at the house", "1 day at both the platform and the house", "1 day on the platform, 1.5 at the house"], correctIndex: 3, explanation: "\"A 'weekend' costs 1 day on the platform and 1.5 days at the house.\"", sourceLessonSlug: "reading-a-price-list" },
          { prompt: "Because the market has no single rule for weeks and weekends, what does lesson 11 tell you to do?", options: ["Copy the rental house's rules", "Always charge a full seven days", "State your own rule in writing", "Use the platform's rule off it too"], correctIndex: 2, explanation: "\"There is no single market rule, so when you set yours (lesson 14), say it in writing.\"", sourceLessonSlug: "reading-a-price-list" },
          { prompt: "What does the regional house's FX3 page show, according to lesson 11?", options: ["Seven items and three prices", "A day price and a deposit", "A weekend price and a list", "Two prices, no contents list"], correctIndex: 3, explanation: "\"The regional house's FX3 page shows two prices and no list of what comes with the camera\".", sourceLessonSlug: "reading-a-price-list" },
          { prompt: "Before comparing your price with a rental house's, what does lesson 11 tell you to find out?", options: ["How old the house's gear may be", "Whether the house ships its gear", "What the house's price includes", "Which platform the house uses"], correctIndex: 2, explanation: "\"Before you compare your price with a house's, find out what its price includes. A lower price for less gear is not a lower price.\"", sourceLessonSlug: "reading-a-price-list" },
          { prompt: "What owner fee does ShareGrid's page list under Rentals?", options: ["Fixed 10% service fee", "Fixed 15% service fee", "Dynamic 12% owner fee", "Fixed 5% service fee"], correctIndex: 1, explanation: "Owner fee: \"Fixed 15% service fee.\" Typically 10% is the renter's community fee, 12% the Damage + Theft claim fee, and 5% the seller fee.", sourceLessonSlug: "platform-fees" },
          { prompt: "How does ShareGrid's page describe the renter fee?", options: ["A flat $30 booking fee per day", "A fixed fee of 15% per rental", "A community fee, typically 10%", "A 5% fee on every transaction"], correctIndex: 2, explanation: "Renter fee: \"Dynamic community fee, typically 10%, displayed during checkout.\"", sourceLessonSlug: "platform-fees" },
          { prompt: "What does ShareGrid say can make the renter's community fee vary?", options: ["Pickup schedule, coverage and lead time", "Gear value, owner rating and city size", "Item count, case weight and distance", "Owner reviews, photos and listing age"], correctIndex: 0, explanation: "It \"may vary based on pickup schedule, coverage option, and booking lead time.\"", sourceLessonSlug: "platform-fees" },
          { prompt: "What does ShareGrid say about the community fee if a renter cancels a confirmed rental?", options: ["It is always refunded", "It may not be refundable", "It is doubled on cancel", "It goes to the owner"], correctIndex: 1, explanation: "\"The community fee may not be refundable if the renter cancels a confirmed rental.\"", sourceLessonSlug: "platform-fees" },
          { prompt: "What does ShareGrid say its fees cover?", options: ["ID and coverage checks, security, support", "Owner insurance, repairs and shipping", "Cleaning, charging and sensor checks", "Listing photos, ads and ranking boosts"], correctIndex: 0, explanation: "The fees cover \"ID verification, coverage verification, security, customer service, feature improvements, and dispute mitigation.\"", sourceLessonSlug: "platform-fees" },
          { prompt: "Under ShareGrid's Buy & Sell heading, what fee applies to seller transactions?", options: ["15%", "5%", "10%", "12%"], correctIndex: 1, explanation: "\"A 5% fee applies to all seller transactions\". 15% is the owner's rental fee.", sourceLessonSlug: "platform-fees" },
          { prompt: "Under Buy & Sell, what do buyers paying by credit card pay?", options: ["2.45% + $0.30", "5% + $1.00", "10% + $0.30", "15% flat fee"], correctIndex: 0, explanation: "Buyers paying by credit card pay \"2.45% + $0.30\".", sourceLessonSlug: "platform-fees" },
          { prompt: "In lesson 12's worked example, what does the course assume about the 15 percent fee?", options: ["It is added to the renter's bill", "It is charged once each year", "It applies to shipped gear only", "It is taken from the rental price"], correctIndex: 3, explanation: "\"This course assumes the 15 percent is taken from the rental price; confirm that on your own payout statement.\"", sourceLessonSlug: "platform-fees" },
          { prompt: "In lesson 12's example, a renter keeps the gear 7 days. How many shoot days does ShareGrid bill?", options: ["7 shoot days", "5 shoot days", "3 shoot days", "1 shoot day"], correctIndex: 2, explanation: "\"Renter keeps the gear 7 days; ShareGrid bills 3 shoot days\" for $300.", sourceLessonSlug: "platform-fees" },
          { prompt: "In lesson 12's example, how much of the $300 reaches the owner?", options: ["$300", "$255", "$270", "$345"], correctIndex: 1, explanation: "$300 less the 15 percent owner fee of $45 leaves $255.", sourceLessonSlug: "platform-fees" },
          { prompt: "In lesson 12's example, about how much does the owner get per day the gear was away?", options: ["About $42.86", "About $85.00", "About $36.43", "About $51.67"], correctIndex: 2, explanation: "$255 over 7 days away is about $36.43.", sourceLessonSlug: "platform-fees" },
          { prompt: "In lesson 12, what would the same gear earn when booked for one shoot day?", options: ["$100 for one day away", "$85 for one day away", "$100 for three days away", "$85 for three days away"], correctIndex: 3, explanation: "With pickup and return days free, one shoot day \"would earn $85 for three calendar days away.\"", sourceLessonSlug: "platform-fees" },
          { prompt: "What did Lensrentals charge for Lenscap+ on the $155 three-day FX3 A rental?", options: ["$32", "$21", "$15", "$45"], correctIndex: 0, explanation: "Lenscap was $21 and Lenscap+ $32 on the $155 rental.", sourceLessonSlug: "platform-fees" },
          { prompt: "What does lesson 12 say a renter comparing your listing with a rental house is comparing?", options: ["Day rates, not totals", "Reviews, not prices", "Totals, not day rates", "Brands, not prices"], correctIndex: 2, explanation: "\"A renter comparing your listing with a rental house is comparing totals, not day rates.\"", sourceLessonSlug: "platform-fees" },
          { prompt: "Which number does lesson 12 say pays for the gear?", options: ["What reaches you per billed day, less upkeep", "Your listed day rate before platform fees", "The renter's total bill with the community fee", "The rental house's day rate for the same item"], correctIndex: 0, explanation: "\"The number that pays for the gear is what reaches you per billed day, minus your upkeep and time.\"", sourceLessonSlug: "platform-fees" },
          { prompt: "Which kit rental norm does lesson 13 quote from The Rate Guide?", options: ["10 to 15 percent of replacement value a day", "3 to 5 percent of replacement value a day", "10 to 15 percent of the price paid a week", "25 to 30 percent of replacement value a day"], correctIndex: 0, explanation: "The guide says the norm is 10 to 15 percent \"of the replacement value of the equipment per day.\"", sourceLessonSlug: "kit-fees" },
          { prompt: "What does The Rate Guide say a $5,000 gimbal rents for?", options: ["$50 to $75 a day", "$250 to $375 a day", "$750 to $1,000 a day", "$500 to $750 a day"], correctIndex: 3, explanation: "Its example: \"a $5,000 gimbal at $500 to $750 a day\".", sourceLessonSlug: "kit-fees" },
          { prompt: "What does The Rate Guide say a full Steadicam rig with a $15,000 replacement value rents for?", options: ["$1,500 to $2,250 a day", "$150 to $225 a day", "$750 to $1,125 a day", "$2,250 to $3,000 a day"], correctIndex: 0, explanation: "Its second example: a $15,000 Steadicam rig \"at $1,500 to $2,250 a day.\"", sourceLessonSlug: "kit-fees" },
          { prompt: "Which point in The Rate Guide does lesson 13 say matches this course?", options: ["Kit rentals are separate budget lines", "Kit rentals are built into a day rate", "Kit rentals run 10 to 15 percent a day", "Kit rentals are set by each platform"], correctIndex: 0, explanation: "\"It also says kit rentals are separate line items on the production budget... That last point matches this course (lesson 3). The percentage is what this lesson tests.\"", sourceLessonSlug: "kit-fees" },
          { prompt: "By lesson 13's arithmetic, what day rate does the 10 to 15 percent rule give for a $4,298 FX3A?", options: ["$125.00 to $155.00", "$429.80 to $644.70", "$239.00 to $358.50", "$562.50 to $655.00"], correctIndex: 1, explanation: "10 percent of $4,298 is $429.80 and 15 percent is $644.70. $239 to $358.50 is the rule applied to the Bolt set.", sourceLessonSlug: "kit-fees" },
          { prompt: "By lesson 13's arithmetic, what day rate does the rule give for the $2,390 Bolt 6 LT set?", options: ["$142 to $203 a day", "$239 to $358.50 a day", "$429.80 to $644.70", "$125 to $155 a day"], correctIndex: 1, explanation: "10 to 15 percent of $2,390 is $239 to $358.50. $142 and $203 are Lensrentals' 3-day and 7-day prices.", sourceLessonSlug: "kit-fees" },
          { prompt: "How many times the regional house's FX3 day rate is the rule's day rate for the FX3A?", options: ["1.2 to 1.5 times", "3.4 to 5.2 times", "6.0 to 7.5 times", "2.0 to 2.5 times"], correctIndex: 1, explanation: "$429.80 and $644.70 divided by $125 give 3.4 to 5.2.", sourceLessonSlug: "kit-fees" },
          { prompt: "What did Lensrentals charge for 3 days of the Bolt 6 LT kit?", options: ["$203", "$239", "$155", "$142"], correctIndex: 3, explanation: "$142 for 3 days. $203 is 7 days; $239 is the rule's low day rate; $155 is the FX3 A for 3 days.", sourceLessonSlug: "kit-fees" },
          { prompt: "What does lesson 13 say about the rule's day rate for the wireless set?", options: ["One day costs more than three at the house", "One day costs less than one at the house", "One day equals a full week at the house", "One day equals a month at the house"], correctIndex: 0, explanation: "\"For the wireless set, the rule asks for more in one day than Lensrentals charges for three.\"", sourceLessonSlug: "kit-fees" },
          { prompt: "Why does lesson 13 say a percentage of replacement value misleads?", options: ["It forgets the cost of the gear you bought", "It is set by the platform, not the owner", "It describes your cost, not the client's choice", "It counts weekends as a single day of rent"], correctIndex: 2, explanation: "\"A percentage of replacement value describes your cost, not the client's choice.\"", sourceLessonSlug: "kit-fees" },
          { prompt: "What does lesson 13 expect a client who can rent the same item for less to do?", options: ["Pay the higher rate", "Compare the prices", "Ask the owner to wait", "Book the owner twice"], correctIndex: 1, explanation: "\"A client who can rent the same item from a rental house will compare.\"", sourceLessonSlug: "kit-fees" },
          { prompt: "What does lesson 13 say a rule that ignores the price list does?", options: ["Raises your platform search rank", "Lowers the insurance renters need", "Prices you out where clients check", "Shortens your gear's turnaround"], correctIndex: 2, explanation: "It \"prices you out of the jobs where the client checks, and teaches you to expect income the market may not pay.\"", sourceLessonSlug: "kit-fees" },
          { prompt: "How does lesson 13 treat the rental house's price and the guide's rule?", options: ["The price is checkable; the rule is a claim", "The rule is checkable; the price is a claim", "Both are claims nobody could ever check", "Both are prices clients must legally pay"], correctIndex: 0, explanation: "The course \"treats the rental house's price as the figure a client can check, and the guide's rule as a claim.\"", sourceLessonSlug: "kit-fees" },
          { prompt: "What does lesson 13 say this course could not test?", options: ["Whether rental houses publish prices", "Whether the FX3A cost $4,298 new", "Whether clients pay the rule's rates", "Whether platforms charge an owner fee"], correctIndex: 2, explanation: "\"This course could not test whether clients pay the rule's rates\".", sourceLessonSlug: "kit-fees" },
          { prompt: "For which reservations does the regional house ask for a certificate of insurance?", options: ["Items of $1,000 or more", "Items of $3,000 or more", "Items of $5,000 or more", "Items of $500 or more"], correctIndex: 1, explanation: "It asks for a certificate \"for items of $3,000 or more\". $1,000 is the first-time renter's card hold.", sourceLessonSlug: "kit-fees" },
          { prompt: "What credit card hold may the regional house ask of a first-time renter?", options: ["$3,000", "$1,000", "$500", "$4,298"], correctIndex: 1, explanation: "It \"may ask a first-time renter for a $1,000 credit card hold.\" $3,000 is the insurance threshold.", sourceLessonSlug: "kit-fees" },
          { prompt: "What does a client who pays your kit fee skip, compared with renting from the house?", options: ["Your day rate, overtime and travel", "Pickup, return, certificate and hold", "The platform fee, tax and the review", "Insurance, cleaning and the battery"], correctIndex: 1, explanation: "The client \"skips the pickup, the return, the certificate and the hold, and gets gear prepped by the person who will run it.\"", sourceLessonSlug: "kit-fees" },
          { prompt: "What ceiling does lesson 13 put on the convenience a kit fee buys?", options: ["The client can rent it and hire you", "The platform caps every kit fee", "A union sets the kit fee maximum", "The insurer limits the kit fee"], correctIndex: 0, explanation: "\"That convenience is real... but it has a ceiling: the client can still rent the gear and hire you to run it.\"", sourceLessonSlug: "kit-fees" },
          { prompt: "How does lesson 13 say to write a kit fee on an invoice?", options: ["On its own line, apart from your day rate", "Folded into your day rate as one figure", "As a tip after the job is fully finished", "On a separate invoice sent a month later"], correctIndex: 0, explanation: "\"Keep the kit fee on its own line, apart from your day rate.\"", sourceLessonSlug: "kit-fees" },
          { prompt: "Which two sources does lesson 13 cite for invoicing the kit fee separately?", options: ["ShareGrid's fee page and Sony's guide", "The rental house and the TSA's rules", "The Rate Guide and the IRS instructions", "Lensrentals and the NFL's policy page"], correctIndex: 2, explanation: "\"The Rate Guide says so, and the IRS instructions quoted in lesson 3 ask a payer to split a machine's rent from its operator's charge.\"", sourceLessonSlug: "kit-fees" },
          { prompt: "What price did Teradek list for the Bolt 6 LT set, as lesson 13's table shows?", options: ["$2,390", "$4,298", "$6,890", "$3,929"], correctIndex: 0, explanation: "The table lists the Bolt 6 LT set at $2,390 (maker). $4,298 is the FX3A and $6,890 the older Bolt 4K kit.", sourceLessonSlug: "kit-fees" },
          { prompt: "What is step 1 of lesson 14's rate sheet?", options: ["Write the date at the top", "List every renter's name", "Set your weekend rule", "Subtract the platform fee"], correctIndex: 0, explanation: "\"Step 1: date it. Write 'Rates as of' and the date at the top.\"", sourceLessonSlug: "your-rate-sheet" },
          { prompt: "Why does lesson 14 say to date the rate sheet?", options: ["Platforms reject sheets with no date", "The date tells you when to look again", "The IRS requires a date on each rate", "Renters may only book dated rates"], correctIndex: 1, explanation: "\"Every price on it will change; the date tells you when to look again.\"", sourceLessonSlug: "your-rate-sheet" },
          { prompt: "Which field does step 2 ask for alongside what the item is?", options: ["The renter's name and phone number", "Replacement value, with source and date", "The item's firmware and cleaning date", "Your profit target for the next year"], correctIndex: 1, explanation: "Step 2 asks for what it is and what is included, its replacement value \"with the source and the date\", and the market prices.", sourceLessonSlug: "your-rate-sheet" },
          { prompt: "In step 2, which market prices does lesson 14 tell you to record?", options: ["Only the cheapest price found on any platform", "The maker's list price and a dealer's used price", "Your own last three invoices for the same item", "A house's day and week; 3 and 7 days by length"], correctIndex: 3, explanation: "\"A regional house's day and week price; a house that prices by length, at 3 and 7 days; and a comparable platform listing, if there is one.\"", sourceLessonSlug: "your-rate-sheet" },
          { prompt: "Which weekend rules does step 3 offer as examples?", options: ["Two days or three days", "Half a day or one day", "One day or 1.5 days", "Three days or 4.5 days"], correctIndex: 2, explanation: "\"A weekend rule (one day, like the platform, or 1.5 days, like the regional house).\" Three days or 4.5 days are the week rules.", sourceLessonSlug: "your-rate-sheet" },
          { prompt: "Why does lesson 14 tell you to write the rule, not just the number?", options: ["So the platform approves listing", "So a renter can predict the bill", "So the insurer accepts the gear", "So the IRS accepts the invoice"], correctIndex: 1, explanation: "\"Write the rule, not just the number, so a renter can predict the bill.\"", sourceLessonSlug: "your-rate-sheet" },
          { prompt: "If you rent direct, what does step 4 tell you to subtract?", options: ["The platform's 15 percent", "The renter's 10 percent", "Card fees and your time", "The rental house's price"], correctIndex: 2, explanation: "\"If you rent direct, subtract card fees and your time instead.\"", sourceLessonSlug: "your-rate-sheet" },
          { prompt: "In step 5, against what is your kit fee priced?", options: ["10 to 15 percent of replacement value", "Your day rate as the camera operator", "The platform's typical community fee", "What a client would pay a rental house"], correctIndex: 3, explanation: "Step 5: the kit fee is \"priced against what the client could pay a rental house for the same package (lesson 13).\"", sourceLessonSlug: "your-rate-sheet" },
          { prompt: "Which terms does step 6 name as things you require before gear leaves?", options: ["A review, a referral and a second booking", "ID, a deposit or hold, insurance or waiver", "A firmware log, photos and a battery test", "A union card, a call sheet and a contract"], correctIndex: 1, explanation: "\"What you require before gear leaves: ID, a deposit or card hold, insurance or a waiver.\"", sourceLessonSlug: "your-rate-sheet" },
          { prompt: "In lesson 14's worked sample, what platform day rate is assumed?", options: ["$125 a day", "$110 a day", "$155 a day", "$100 a day"], correctIndex: 3, explanation: "The sample assumes \"Platform: $100 a day\". $125 is the regional house's FX3 rate and $110 the sample kit fee.", sourceLessonSlug: "your-rate-sheet" },
          { prompt: "In the worked sample, what reaches the owner per billed platform day?", options: ["$100", "$110", "$85", "$75"], correctIndex: 2, explanation: "\"$85 a billed day after the 15 percent fee.\"", sourceLessonSlug: "your-rate-sheet" },
          { prompt: "In the worked sample, how does a weekend count on the platform?", options: ["1 day", "1.5 days", "2 days", "3 days"], correctIndex: 0, explanation: "\"weekend counts 1 day; week counts 3 days\".", sourceLessonSlug: "your-rate-sheet" },
          { prompt: "In the worked sample, how many days does a week count on the platform?", options: ["4.5 days", "7 days", "5 days", "3 days"], correctIndex: 3, explanation: "\"week counts 3 days\". 4.5 is the regional house's FX3 multiple.", sourceLessonSlug: "your-rate-sheet" },
          { prompt: "In the worked sample, what kit fee is assumed when you operate?", options: ["$100 a day, in the day rate", "$125 a day, its own line", "$85 a day, in the day rate", "$110 a day, its own line"], correctIndex: 3, explanation: "\"Kit fee $110 a day, its own invoice line\".", sourceLessonSlug: "your-rate-sheet" },
          { prompt: "What are the worked sample's prices for your gear, according to lesson 14?", options: ["The course's recommended rates", "Assumptions to show the method", "The regional house's own rates", "The platform's minimum prices"], correctIndex: 1, explanation: "\"Every price for 'your' gear below is an assumption to show the method, not advice.\"", sourceLessonSlug: "your-rate-sheet" },
          { prompt: "How does ShareGrid explain its Fair Market Pricing factor?", options: ["Match the rental house's own price", "Price at 15 percent of the value", "Set competitive, reasonable prices", "Never charge below the guide rate"], correctIndex: 2, explanation: "\"Set competitive and reasonable rental prices to attract renters and improve your ranking.\"", sourceLessonSlug: "your-rate-sheet" },
          { prompt: "What two triggers does lesson 14 suggest for reviewing your rate sheet?", options: ["A bad review and a late renter return", "A fixed date and a newer model listed", "A tax filing and an insurance renewal", "A slow month and a platform fee change"], correctIndex: 1, explanation: "\"A fixed date (every three months, say), and any time a newer model of something you own appears on a rental house's list.\"", sourceLessonSlug: "your-rate-sheet" },
          { prompt: "What example interval does lesson 14 give for a fixed review date?", options: ["Every two years", "Every single week", "Every three months", "Once a decade"], correctIndex: 2, explanation: "\"a fixed date (every three months, say)\".", sourceLessonSlug: "your-rate-sheet" },
          { prompt: "According to lesson 14, which lessons does the rate sheet turn into numbers?", options: ["The section on protection", "The section on the market", "The last three lessons", "The lessons on batteries"], correctIndex: 2, explanation: "\"It turns the last three lessons into numbers you can defend to a client and to yourself.\"", sourceLessonSlug: "your-rate-sheet" },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5: Protection
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-rental-agreement",
      title: "15 · The rental agreement",
      section: "5 · Protection",
      recallContent: [
        {
          prompt: "Name the six steps of this course's rate sheet.",
          answer: "Date it; one row per item or package with the market prices; your prices with your weekend and week rules in words; what reaches you after fees; your kit fee on its own line; your terms.",
        },
        {
          prompt: "What does ShareGrid's \"Fair Market Pricing\" factor tell owners?",
          answer: "\"Set competitive and reasonable rental prices to attract renters and improve your ranking.\"",
        },
      ],
      body: `${QR("an attorney who drafts equipment rental agreements in the learner's state, to check this lesson's reading of the published policies and its checklist")}

**What this lesson does.** It reads one rental house's published policies and terms as a working example of what a rental agreement covers. It is not a template and not legal advice. Which terms a court will enforce depends on the law of your state, which is why this lesson waits for an attorney's review.

**What one house's terms cover.** The regional rental house's policies and terms page, read on October 21, 2026, covers at least nine subjects:

1. **Who may rent.** "You must be at least 21 years of age", with "a valid and current Driver's License or equivalent State/government issued ID" and "a valid and active credit card". The house scans the ID "to have on hand and attach to the customer profile", and if someone else picks up the order, "a copy of their ID will need to be presented at pick-up."
2. **Money held.** From first-time renters, a card authorization of "$1000.00 (or full value of the rental equipment, whichever is less)."
3. **Insurance.** A certificate of insurance for reservations that include items of $3,000 or more, and proof of insurance from "All first-time renters". Without a valid certificate, "the renter agrees to full responsibility for any damages or replacement costs that may occur." Lesson 17 reads the certificate's terms.
4. **Who bears the risk, and until when.** The customer "shall continue to bear any and all risks of loss and/or damage to the Equipment" until it is returned and "verified ... as undamaged and in working condition."
5. **How the gear may be used.** No use that would "subject it to abnormal or hazardous conditions", no alterations without written consent, and "Customer shall not attempt to service or repair any of the Equipment".
6. **Time.** "Rentals must be returned by 10am the day after the last reserved date", and late charges "continue to accrue at the rates set forth in the rental contract."
7. **Fees for condition.** Cleaning fees, a "$5 per cap fee for any missing lens/body/rear cap", and a $25 sensor cleaning fee.
8. **Non-return.** If a renter fails to return equipment or communicate, the house "will consider equipment stolen and will make all efforts to recover", and "Any and all costs to effect recovery will be the responsibility of you, the renter."
9. **The legal frame.** The agreement "constitutes a lease and not a sale"; the customer may not "sublease the Equipment to any other person or entity without consent"; the customer agrees to indemnify the house for claims arising from use of the equipment; and a governing-law clause names a state and the county where any case will be heard.

**When a platform is in the middle.** On ShareGrid, the platform's rules supply much of this. Pickup and return times apply "Unless you arrange otherwise with the owner"; "All rentals require some type of coverage"; and an owner may add a late fee, typically "a one-day rental fee", when items come back late. Read the platform's rules as part of your agreement, and do not promise a renter anything that contradicts them.

**A checklist for your own agreement.** This course's list, for the attorney to review: the parties and their ID; the items, with serial numbers and replacement values (lesson 9); pickup and return times; prices and your weekend and week rules; the deposit or card hold; the insurance or waiver required; who bears the risk until check-in; permitted use and no self-repair; condition, cleaning and missing-part fees; late fees; what happens on non-return; cancellation; and signatures.

:::reveal Until when does the regional house's customer bear the risk of loss or damage? ||| Until the equipment is returned and verified as undamaged and in working condition.

:::reveal What does the house say happens if a renter fails to return equipment or communicate? ||| It will consider the equipment stolen and make all efforts to recover it, at the renter's cost.

:::reveal Name four subjects this course's agreement checklist covers. ||| Any four of: parties and ID; items with serial numbers and replacement values; pickup and return times; prices and rules; deposit or hold; insurance or waiver; risk until check-in; permitted use and no self-repair; condition and cleaning fees; late fees; non-return; cancellation; signatures.

## Sources
- ${RH_POLICIES} Locator: "Policies and Terms" (eligibility, ID scans, first-time renters); "Terms of Rental" (return time, late charges, insurance); "Return"; "Use of Equipment"; "Additional Fees"; "Additional Rental Terms"; "Governing Law"; "Indemnification".
- ${SG_SHOOT_DAYS} Locator: pickup and return times, "Unless you arrange otherwise with the owner".
- ${SG_COVERAGE} Locator: first paragraph.
- ${SG_DAMAGE} Locator: handling missing items, late returns.`,
    },
    {
      slug: "waivers-are-not-insurance",
      title: "16 · Damage waivers are not insurance",
      section: "5 · Protection",
      recallContent: [
        {
          prompt: "What does the regional house's agreement say it is, and what may the customer not do with the equipment?",
          answer: "It \"constitutes a lease and not a sale\", and the customer may not sublease the equipment without consent.",
        },
        {
          prompt: "Under the regional house's terms, how much must a first-time renter allow on a card hold?",
          answer: "$1,000, or the full value of the rental equipment, whichever is less.",
        },
      ],
      body: `${QR("a licensed insurance agent who writes production equipment coverage, to check this lesson's reading of the waiver and protection pages")}

**Two different promises.** An insurance policy is a contract with an insurer. A damage waiver is a promise from a platform or a rental house about how much a renter will owe if something goes wrong. Renters often treat them as the same thing. The platform's own page says they are not.

**ShareGrid, in its own words.** "Damage Only and Damage + Theft coverage options are not insurance policies."

- **Damage Only** "Provides coverage exclusively for physical damage to the gear" and is "Available for rentals with a cumulative replacement value under $6,000."
- **Damage + Theft** "Provides protection against both physical damage and theft if the rental is stolen from the renter." Its own page calls it a "Loss Damage Waiver" and says "The renter, not the owner, is responsible for a 12% fee if there is rental damage or theft", based on "the replacement value listed on the rental's listing". It applies to "most listings with a replacement value of up to $30,000."
- Excluded: "Wear and Tear: Damages such as scratches or dents resulting from regular use are not eligible." and "Any damage resulting from the renter's negligence is also excluded." Every claim is "subject to a comprehensive review by ShareGrid."
- A renter may also use outside insurance, "accepted only after completing coverage verification."

**What ShareGrid tells owners.** "Owners are not required to carry insurance to list their gear on ShareGrid." "The responsibility to cover the gear lies with the renters." And from the missing-items policy: "Insurance and damage waivers do not cover missing items."

**A rental house's version.** Lensrentals' Lenscap plans are "optional add-ons that limit your liability". With Lenscap, "your liability is limited to the lesser of the cost to repair the equipment or 10% of the replacement cost", up to a stated maximum of $100,000, for accidental damage "as long as you can return it to us." Lenscap+ adds cover for "situations that make it impossible to return the equipment that you rented", such as theft.

**Worked examples of the rules.** This course's arithmetic, with made-up values:

- A Damage + Theft claim on a listing with a $5,000 replacement value: the renter's fee is 12 percent, $600.
- A Lenscap renter damages an item with a $4,000 replacement value and a $1,000 repair: the renter owes the lesser of $1,000 or $400, so $400.

**Where the owner is still exposed.** This course's reading of those pages: a waiver limits what the renter owes; it does not insure you. Wear and tear, damage the review finds was negligence, missing items, values above the waiver's limits, and the bookings you lose while gear is out for repair all fall outside what these pages describe. Lesson 17 covers insurance you buy for yourself, and lesson 18 covers gear that never comes back.

:::reveal What does ShareGrid say about its Damage Only and Damage + Theft options? ||| They "are not insurance policies."

:::reveal Under Damage + Theft, who pays the 12 percent fee, and on what is it based? ||| The renter, not the owner, based on the replacement value listed on the rental's listing.

:::reveal With Lenscap, what does a renter owe for damage? ||| The lesser of the cost to repair the equipment or 10 percent of the replacement cost, up to a $100,000 maximum.

## Sources
- ${SG_COMPARE} Locator: the waiver-status sentence and the descriptions of Damage Only, Damage + Theft and third-party insurance.
- ${SG_THEFT} Locator: the 12 percent fee, the $30,000 limit and the exclusions.
- ${SG_COVERAGE} Locator: the owner insurance sentence and "The responsibility to cover the gear lies with the renters."
- ${SG_MISSING} Locator: "Insurance and damage waivers do not cover missing items."
- ${LR_LENSCAP} Locator: the plan description, the liability limit and its footnote, and the Lenscap+ paragraph.`,
    },
    {
      slug: "insurance-for-owned-gear",
      title: "17 · Insurance for owned gear and for liability",
      section: "5 · Protection",
      recallContent: [
        {
          prompt: "In this course's worked example, what does a Lenscap renter owe for a $1,000 repair on an item with a $4,000 replacement value?",
          answer: "$400, the lesser of the $1,000 repair or 10 percent of the replacement value.",
        },
        {
          prompt: "Name three things this course says still fall outside what the waiver pages describe.",
          answer: "Any three of: wear and tear; damage the review finds was negligence; missing items; values above the waiver's limits; bookings lost while gear is out for repair.",
        },
      ],
      body: `${QR("a licensed insurance agent who writes production equipment and small-business coverage, to check every statement about coverage and every question this lesson tells the learner to ask")}

**Your home policy is probably not enough.** The Insurance Information Institute says: "A typical homeowners policy provides only $2,500 coverage for business equipment, which is usually not enough to cover all of your business property." It describes three routes: a homeowners endorsement ("For as little as $25 you can raise the policy limits from $2,500 to $5,000", and some insurers allow up to $10,000), an in-home business policy, and a businessowners policy (BOP).

**Gear that travels: inland marine.** The Institute explains that, unlike marine insurance for goods moved over water, inland marine insurance covers products, materials and equipment moved over land, by truck or train, or while a third party holds them in storage. It names "Photography equipment" among the specialty equipment it can cover, and adds that "Collisions and cargo theft are the two most frequent causes of inland marine losses." The International Risk Management Institute (IRMI) defines the policy rental owners hear about most: "An equipment floater is property insurance covering equipment that is often moved from place to place. It is a form of inland marine insurance."

**Liability is a separate question.** The Institute: "Any enterprise can be sued." Liability insurance "pays damages for which the business is found liable, up to the policy limits, as well as attorneys' fees and other legal defense expenses." The regional rental house's certificate requirements say "General Liability Insurance may be required depending on equipment use case." A client may ask the same of you.

**What a rental house asks its renters to carry.** Read as a model of the terms that matter: "Rented Equipment or Inland Marine Equipment Floater Insurance required"; "No 'unattended vehicle' exclusion"; a named loss payee; and coverage that "is replacement cost and includes transit and world-wide coverage."

**What prices looked like, as dated examples.** On October 21, 2026, Athos Insurance listed minimum premiums of "$495" for "Annual Production Equipment: (Owned and/or Rented)", "$250" for "Short-Term Rented Equipment", and a start of "$220" for hobbyists or private events, with deductible options of $250, $500, $1,000 or $2,500. Its form asks, "How much of your total owned equipment do you rent to others?", and entering 0 means that coverage is not added. Insureon, a broker, reported that small businesses buying through it paid "an average of $48 per month" for inland marine insurance, with "Annual premiums" from "around $150 to over $4,500 per year". These are minimums and averages, not a quote for your gear.

**Questions to ask an agent.** This course's list, for the reviewer to check:

1. Does the policy cover my owned gear while it is rented to others, and up to what amount?
2. Does it cover voluntary parting (lesson 18)?
3. Is there an unattended-vehicle exclusion?
4. Does it pay replacement cost, and is transit covered?
5. What is the deductible, and is it different for some losses?
6. Does it schedule items by serial number, using my asset record (lesson 9)?
7. What general liability limit do my clients ask for, and does this policy include it?

:::reveal How much coverage does the Insurance Information Institute say a typical homeowners policy gives business equipment? ||| Only $2,500, which is usually not enough to cover all of your business property.

:::reveal How does IRMI define an equipment floater? ||| Property insurance covering equipment that is often moved from place to place; a form of inland marine insurance.

:::reveal What does Athos's form ask about equipment rented to others, and what happens if you enter 0? ||| How much of your total owned equipment you rent to others; entering 0 means that coverage is not added.

## Sources
- ${III_HOME_BUSINESS} Locator: first paragraph; "Homeowners Policy Endorsement"; "In-Home Business Policy/Program"; "Businessowners Policy (BOP)".
- ${III_INLAND_MARINE} Locator: first paragraph; the list of specialty equipment.
- ${IRMI_FLOATER} Locator: the definition.
- ${III_BASICS} Locator: "Major Coverages", item 2, "Liability Insurance".
- ${RH_POLICIES} Locator: "Certificate of Insurance Requirements".
- ${ATHOS} Locator: minimum premiums; deductible selector; the rented-to-others question.
- ${INSUREON} Locator: the average monthly cost and the annual range.`,
    },
    {
      slug: "theft-and-non-return",
      title: "18 · Theft, non-return and the guarantee's limits",
      section: "5 · Protection",
      recallContent: [
        {
          prompt: "What did Athos list as the minimum premium for annual production equipment, owned and/or rented, on October 21, 2026?",
          answer: "$495.",
        },
        {
          prompt: "Name three questions this course tells you to ask an insurance agent.",
          answer: "Any three of: owned gear while rented to others; voluntary parting; an unattended-vehicle exclusion; replacement cost and transit; the deductible; scheduling by serial number; the general liability limit.",
        },
      ],
      body: `${QR("a licensed insurance agent, for the voluntary parting coverage and exclusion, and an attorney for the police-report and written-demand steps")}

**The loss owners fear most.** A renter takes the gear and never brings it back. ShareGrid's guarantee page names it: "This scenario is known as voluntary parting. This is a criminal act sometimes called 'theft by fraud' or 'theft by false pretenses' and should be reported to law enforcement." It adds: "These cases are extremely rare, but when they occur, they can be devastating to the gear's owner."

**What the platform's guarantee covers, and its limits.** ShareGrid's Owner Guarantee offers "up to $20,000 in cumulative Replacement Value for Listings rented and picked up in person, and up to $7,500 in cumulative Replacement Value for Listings rented out using ShareGrid's shipping feature." Its limits, in its own words:

- "This is a cumulative limit, not a per-rental limit." A $15,000 and a $10,000 listing out at once are protected up to $20,000, not $25,000.
- A listing, or a package, worth more than $20,000 is not protected.
- "There is a maximum of two (2) eligible claims per 12 calendar months for each Owner account."
- An owner who has "an insurance policy that covers someone renting your Listing and not returning it" is not eligible and must claim on that policy.
- It does not cover "Loss of use or ongoing rental fees" before you are reimbursed, or gear not "personally picked up by the Renter from the Owner" unless shipped through ShareGrid's tracked shipping.

**What it asks of you.** Notify ShareGrid "within 48 hours of the rental's end date". If the gear is not back within 72 hours, ShareGrid recommends a police report "for theft by fraud or theft by false pretenses", and notes that some places "may require you to send a written demand to the Renter" first. A theft claim needs a copy of the police report, confirmation of a criminal investigation, and any information or footage that helps.

**Check the ID in person.** ShareGrid's owner guide: "Always check the renter's government-issued ID at gear pickup." "Ensure that the name on the ID matches the name listed in the rental conversation thread on ShareGrid." And: "Please refrain from taking photos of the renter's or an authorized person's ID", because ShareGrid already keeps a copy from sign-up.

**Insurance for the same loss.** The guarantee page recommends "voluntary parting coverage" above its limits, and names Athos Insurance as the partner that provides policies bought through ShareGrid accounts. Athos sells "Voluntary Parting and/or Conversion" as "(Optional Coverage)" and explains: "If you are tricked into renting your equipment to a fraudulent client, where the client does not return or disappears with your equipment." An IRMI article on an equipment coverage form written for farm machinery lists "Voluntary parting" among that form's additional excluded causes of loss. This course's reading: an equipment policy may exclude exactly this loss unless you add it, so ask (lesson 17, question 2).

**Five habits.** This course's advice, from the pages above: hand gear only to the named renter after checking ID; prefer local pickup when the guarantee depends on it; keep values and item lists current (lesson 9); keep total value out at one time under the limits you rely on; and put the 48-hour deadline in your calendar the moment a rental is late.

:::reveal What does ShareGrid call the scenario where a renter does not return the gear? ||| Voluntary parting, a criminal act sometimes called theft by fraud or theft by false pretenses.

:::reveal How much does ShareGrid's guarantee cover for gear picked up in person, and is the limit per rental? ||| Up to $20,000 in cumulative Replacement Value; it is cumulative, not per rental.

:::reveal Within how many hours must an owner notify ShareGrid of an unreturned rental? ||| Within 48 hours of the rental's end date.

## Sources
- ${SG_GUARANTEE} Locator: opening paragraph; "Why does ShareGrid offer this?"; "Do I still need voluntary parting coverage?" and its examples; "Eligibility"; "Making a claim"; "Exclusions".
- ${SG_ID} Locator: the ID check, the name match and the request not to photograph IDs.
- ${ATHOS} Locator: "(Optional Coverage) Voluntary Parting and/or Conversion" and its explanation.
- ${IRMI_MAMECF} Locator: the list of additional excluded causes of loss.`,
    },
    {
      slug: "section-5-quiz",
      title: "Section 5 quiz · Protection",
      section: "5 · Protection",
      body: "A graded check on the rental agreement, why damage waivers are not insurance, insurance for owned gear and for liability, and theft, non-return and the guarantee's limits. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "What does lesson 15 use as its working example of a rental agreement?", options: ["A model contract drafted by a trade association", "A federal rule that governs all equipment rentals", "One rental house's published policies and terms", "A peer platform's standard owner contract"], correctIndex: 2, explanation: "Lesson 15 reads \"one rental house's published policies and terms as a working example of what a rental agreement covers.\" It is not a trade association model, a federal rule or a platform contract.", sourceLessonSlug: "the-rental-agreement" },
          { prompt: "Why does lesson 15 wait for an attorney's review?", options: ["Its policies were copied from a court decision", "Rental agreements must be filed with a court", "The rental house asked for a lawyer's sign-off", "Enforceable terms depend on your state's law"], correctIndex: 3, explanation: "\"Which terms a court will enforce depends on the law of your state, which is why this lesson waits for an attorney's review.\"", sourceLessonSlug: "the-rental-agreement" },
          { prompt: "How old must a renter be under the regional rental house's terms?", options: ["At least 18", "At least 21", "At least 25", "At least 30"], correctIndex: 1, explanation: "The terms say: \"You must be at least 21 years of age\".", sourceLessonSlug: "the-rental-agreement" },
          { prompt: "What ID does the regional house ask a renter to provide?", options: ["A passport only, with a second photo ID as backup", "A valid, current driver's license or government ID", "A utility bill showing the renter's home address", "A business card and a production company letter"], correctIndex: 1, explanation: "The terms ask for \"a valid and current Driver's License or equivalent State/government issued ID\". No passport rule, utility bill or production letter is named.", sourceLessonSlug: "the-rental-agreement" },
          { prompt: "What does the regional house do with a renter's ID?", options: ["Holds the ID at the counter until gear returns", "Photographs it and posts it on the rental slip", "Sends a copy to the renter's insurance company", "Scans it and attaches it to the customer profile"], correctIndex: 3, explanation: "The house scans the ID \"to have on hand and attach to the customer profile\".", sourceLessonSlug: "the-rental-agreement" },
          { prompt: "Under the regional house's terms, what happens when someone other than the orderer picks up the gear?", options: ["Their ID must also be presented at pickup", "The order is canceled and the fee refunded", "The renter must sign a second insurance form", "The pickup is allowed only after 3:00 p.m."], correctIndex: 0, explanation: "If someone else picks up the order, \"a copy of their ID will need to be presented at pick-up.\"", sourceLessonSlug: "the-rental-agreement" },
          { prompt: "From whom may the regional house ask a card authorization of $1000.00 or the gear's value, whichever is less?", options: ["Every renter, every time", "Renters under age 25", "First-time renters", "Renters who ship gear"], correctIndex: 2, explanation: "Lesson 15: \"From first-time renters, a card authorization of '$1000.00 (or full value of the rental equipment, whichever is less).'\" It is not asked of every renter, and no age or shipping rule applies.", sourceLessonSlug: "the-rental-agreement" },
          { prompt: "How large is the card authorization the regional house may ask of first-time renters?", options: ["$3,000, or the gear's full value if more", "$1000.00, or the gear's full value if less", "$500, plus a deposit equal to one day's rent", "The full replacement value of every item"], correctIndex: 1, explanation: "\"$1000.00 (or full value of the rental equipment, whichever is less).\" $3,000 is the insurance threshold, not the hold.", sourceLessonSlug: "the-rental-agreement" },
          { prompt: "Which reservations at the regional house require a certificate of insurance, according to lesson 15?", options: ["Those that last longer than one full week", "Those picked up by someone other than the renter", "Those that include items of $3,000 or more", "Those booked less than a day ahead of pickup"], correctIndex: 2, explanation: "A certificate of insurance is needed \"for reservations that include items of $3,000 or more\". Length, pickup person and booking lead time are not the trigger.", sourceLessonSlug: "the-rental-agreement" },
          { prompt: "What does the regional house require of all first-time renters, whatever the rental value?", options: ["A second credit card", "A local home address", "A production letter", "Proof of insurance"], correctIndex: 3, explanation: "Lesson 15: the house asks for \"proof of insurance from 'All first-time renters'\".", sourceLessonSlug: "the-rental-agreement" },
          { prompt: "What does a renter agree to by reserving at the regional house without a valid certificate of insurance?", options: ["Full responsibility for damage or replacement", "A fixed fee covering any damage to the gear", "A waiver of every charge for normal wear", "A cap of 10 percent of the replacement cost"], correctIndex: 0, explanation: "Without a valid certificate, \"the renter agrees to full responsibility for any damages or replacement costs that may occur.\" The 10 percent cap belongs to Lenscap, not to this house.", sourceLessonSlug: "the-rental-agreement" },
          { prompt: "Under the regional house's terms, the customer carries the risk of loss until what point?", options: ["The moment the gear leaves the counter", "The end of the last reserved rental day", "The renter's insurer accepts the claim", "Return and verification as undamaged"], correctIndex: 3, explanation: "The customer \"shall continue to bear any and all risks of loss and/or damage to the Equipment\" until it is returned and \"verified ... as undamaged and in working condition.\"", sourceLessonSlug: "the-rental-agreement" },
          { prompt: "Which of these does the regional house forbid the customer to do with its gear?", options: ["Record on the house's own cards", "Take it to a second location", "Attempt to service or repair it", "Carry it inside a hard-shell case"], correctIndex: 2, explanation: "\"Customer shall not attempt to service or repair any of the Equipment\". The terms do not ban recording, travel or a hard case.", sourceLessonSlug: "the-rental-agreement" },
          { prompt: "Besides repairs, what else does the regional house's use clause rule out without written consent?", options: ["Alterations to the equipment", "Shooting outside the home state", "Recording in 4K resolution", "Mounting it on a tripod"], correctIndex: 0, explanation: "Lesson 15: \"no alterations without written consent\". Nothing is said about states, resolution or tripods.", sourceLessonSlug: "the-rental-agreement" },
          { prompt: "By what time must regional house rentals come back?", options: ["Noon on the final reserved day of the rental", "10am the day after the last reserved date", "Midnight on the last day of the reservation", "3:00pm the day before the rental's end date"], correctIndex: 1, explanation: "\"Rentals must be returned by 10am the day after the last reserved date\". Noon is ShareGrid's local-pickup return time, not this house's.", sourceLessonSlug: "the-rental-agreement" },
          { prompt: "What happens to rental charges when gear comes back late to the regional house?", options: ["They stop, and a flat $20 late fee applies", "They double for each day the gear is late", "They keep accruing at the contract's rates", "They are forgiven if the renter calls ahead"], correctIndex: 2, explanation: "Late charges \"continue to accrue at the rates set forth in the rental contract.\" $20 is a cleaning fee, and no doubling or forgiveness is described.", sourceLessonSlug: "the-rental-agreement" },
          { prompt: "What does the regional house charge for a missing lens, body or rear cap?", options: ["$5 per cap", "$20 per cap", "$25 per cap", "$10 per cap"], correctIndex: 0, explanation: "A \"$5 per cap fee for any missing lens/body/rear cap\". $20 is the per-item cleaning fee and $25 the sensor cleaning fee.", sourceLessonSlug: "the-rental-agreement" },
          { prompt: "A renter goes silent and keeps the gear. How does the regional house's policy treat it?", options: ["As a sale, billed at the gear's list price", "As a late return, billed at the daily rate", "As stolen, with recovery costs on the renter", "As a dispute, settled by the platform first"], correctIndex: 2, explanation: "The house \"will consider equipment stolen and will make all efforts to recover\", and \"Any and all costs to effect recovery will be the responsibility of you, the renter.\"", sourceLessonSlug: "the-rental-agreement" },
          { prompt: "How does the regional house's agreement describe itself?", options: ["A sale with a buyback", "A lease and not a sale", "A loan with interest", "A service contract"], correctIndex: 1, explanation: "The agreement \"constitutes a lease and not a sale\".", sourceLessonSlug: "the-rental-agreement" },
          { prompt: "What does the regional house's agreement say about subleasing its gear?", options: ["Allowed for crew on the same job", "Allowed after the first full week", "Not without the house's consent", "Allowed if the renter is insured"], correctIndex: 2, explanation: "The customer may not \"sublease the Equipment to any other person or entity without consent\".", sourceLessonSlug: "the-rental-agreement" },
          { prompt: "What does the governing-law clause in the regional house's terms name?", options: ["The federal court for all rental disputes", "A state and the county where cases are heard", "An arbitrator chosen by the renter's insurer", "The renter's home state and its courts"], correctIndex: 1, explanation: "Lesson 15: \"a governing-law clause names a state and the county where any case will be heard.\" It names neither a federal court, an arbitrator nor the renter's state.", sourceLessonSlug: "the-rental-agreement" },
          { prompt: "On ShareGrid, when may pickup and return times differ from the standard ones?", options: ["When the renter pays a schedule change fee", "When the rental is a full month or longer", "When you arrange otherwise with the owner", "When the renter adds Damage + Theft cover"], correctIndex: 2, explanation: "Pickup and return times apply \"Unless you arrange otherwise with the owner\".", sourceLessonSlug: "the-rental-agreement" },
          { prompt: "What late fee does lesson 15 say a ShareGrid owner may typically add?", options: ["Half a day's rental", "A fee of 25 percent", "A one-day rental fee", "Double the day rate"], correctIndex: 2, explanation: "An owner may add a late fee, typically \"a one-day rental fee\", when items come back late.", sourceLessonSlug: "the-rental-agreement" },
          { prompt: "What does lesson 15 tell you about your promises to renters when a platform is in the middle?", options: ["Promise more than the platform allows", "Let the renter set the pickup rules", "Do not contradict the platform's rules", "Replace the platform's coverage rules"], correctIndex: 2, explanation: "\"Read the platform's rules as part of your agreement, and do not promise a renter anything that contradicts them.\"", sourceLessonSlug: "the-rental-agreement" },
          { prompt: "Which of these is on lesson 15's checklist for your own agreement?", options: ["The renter's past rental history online", "A credit check on every first-time renter", "The renter's employer and job title", "Items listed with serial numbers and values"], correctIndex: 3, explanation: "The checklist includes \"the items, with serial numbers and replacement values\". Rental history, credit checks and employers are not on it.", sourceLessonSlug: "the-rental-agreement" },
          { prompt: "How does lesson 16 tell an insurance policy from a damage waiver?", options: ["A waiver is with an insurer; a policy limits what a renter owes", "A policy covers only theft; a waiver covers only accidental damage", "A policy is with an insurer; a waiver limits what a renter owes", "A policy is for renters; a waiver is for owners who list their gear"], correctIndex: 2, explanation: "\"An insurance policy is a contract with an insurer. A damage waiver is a promise from a platform or a rental house about how much a renter will owe\".", sourceLessonSlug: "waivers-are-not-insurance" },
          { prompt: "In ShareGrid's own words, what are its two coverage options not?", options: ["Insurance policies", "Optional for renters", "Refundable after use", "Priced by the owner"], correctIndex: 0, explanation: "\"Damage Only and Damage + Theft coverage options are not insurance policies.\"", sourceLessonSlug: "waivers-are-not-insurance" },
          { prompt: "What does ShareGrid's Damage Only option cover?", options: ["Physical damage to the gear only", "Theft of the gear from the renter", "Missing items and lost accessories", "Lost bookings while gear is repaired"], correctIndex: 0, explanation: "Damage Only \"Provides coverage exclusively for physical damage to the gear\". Theft is in Damage + Theft, and missing items are not covered by any waiver.", sourceLessonSlug: "waivers-are-not-insurance" },
          { prompt: "Up to what cumulative replacement value is Damage Only available?", options: ["Under $30,000", "Under $20,000", "Under $6,000", "Under $7,500"], correctIndex: 2, explanation: "It is \"Available for rentals with a cumulative replacement value under $6,000.\" $30,000 is the Damage + Theft limit; $20,000 and $7,500 are guarantee limits.", sourceLessonSlug: "waivers-are-not-insurance" },
          { prompt: "What does Damage + Theft add beyond physical damage?", options: ["Wear and tear from ordinary use", "Theft of the rental from the renter", "Damage caused by renter negligence", "Items the renter forgets to return"], correctIndex: 1, explanation: "It \"Provides protection against both physical damage and theft if the rental is stolen from the renter.\" Wear and tear and negligence are excluded, and missing items are not covered.", sourceLessonSlug: "waivers-are-not-insurance" },
          { prompt: "What does ShareGrid's own page call its Damage + Theft option?", options: ["A Loss Damage Waiver", "A rental insurance policy", "An owner guarantee", "A collision floater"], correctIndex: 0, explanation: "Its own page calls it a \"Loss Damage Waiver\". It is expressly not an insurance policy.", sourceLessonSlug: "waivers-are-not-insurance" },
          { prompt: "Under Damage + Theft, who is responsible for the 12 percent fee after damage or theft?", options: ["The owner, not the renter", "ShareGrid, from its fees", "The owner's own insurer", "The renter, not the owner"], correctIndex: 3, explanation: "\"The renter, not the owner, is responsible for a 12% fee if there is rental damage or theft\".", sourceLessonSlug: "waivers-are-not-insurance" },
          { prompt: "On what is the Damage + Theft fee based?", options: ["The total rental price paid", "The actual cost of the repair", "The owner's purchase receipt", "The listed replacement value"], correctIndex: 3, explanation: "The fee is based on \"the replacement value listed on the rental's listing\".", sourceLessonSlug: "waivers-are-not-insurance" },
          { prompt: "Up to what replacement value does Damage + Theft apply for most listings?", options: ["$20,000", "$6,000", "$7,500", "$30,000"], correctIndex: 3, explanation: "It applies to \"most listings with a replacement value of up to $30,000.\"", sourceLessonSlug: "waivers-are-not-insurance" },
          { prompt: "Which kind of damage does ShareGrid's Damage + Theft page name as not eligible?", options: ["Physical damage during the rental", "Wear and tear from regular use", "Theft of the rental from the renter", "Damage on rentals under $6,000"], correctIndex: 1, explanation: "\"Wear and Tear: Damages such as scratches or dents resulting from regular use are not eligible.\" Physical damage and theft are what the option covers.", sourceLessonSlug: "waivers-are-not-insurance" },
          { prompt: "Besides wear and tear, what else does Damage + Theft exclude?", options: ["Damage from the renter's negligence", "Damage on rentals of a week or more", "Damage reported by the owner in time", "Damage to items worth under $1,000"], correctIndex: 0, explanation: "\"Any damage resulting from the renter's negligence is also excluded.\"", sourceLessonSlug: "waivers-are-not-insurance" },
          { prompt: "What does ShareGrid say every damage incident is subject to?", options: ["An inspection by the renter's insurer", "A comprehensive review by ShareGrid", "A police report filed within 72 hours", "Arbitration chosen by the owner"], correctIndex: 1, explanation: "Every claim is \"subject to a comprehensive review by ShareGrid.\" The 72-hour police report belongs to non-return claims under the guarantee.", sourceLessonSlug: "waivers-are-not-insurance" },
          { prompt: "When does ShareGrid accept a renter's own outside insurance?", options: ["Only for rentals over $30,000", "Only when the owner also insures", "Only for rentals shipped by mail", "Only after coverage verification"], correctIndex: 3, explanation: "Outside insurance is \"accepted only after completing coverage verification.\"", sourceLessonSlug: "waivers-are-not-insurance" },
          { prompt: "Must owners carry insurance to list gear on ShareGrid?", options: ["Yes, for every item listed", "Yes, above $6,000 in value", "No; ShareGrid insures all gear", "No; renters carry the coverage"], correctIndex: 3, explanation: "\"Owners are not required to carry insurance to list their gear on ShareGrid.\" \"The responsibility to cover the gear lies with the renters.\" ShareGrid does not insure the gear.", sourceLessonSlug: "waivers-are-not-insurance" },
          { prompt: "What do insurance and damage waivers not cover, per ShareGrid's missing-items policy?", options: ["Missing items", "Accidental damage", "Physical damage", "Stolen rentals"], correctIndex: 0, explanation: "\"Insurance and damage waivers do not cover missing items.\" Damage and theft are what the options are for.", sourceLessonSlug: "waivers-are-not-insurance" },
          { prompt: "How does Lensrentals describe its Lenscap plans?", options: ["Required insurance on every rental", "A refund plan for unused rental days", "A policy issued by an outside insurer", "Optional add-ons that limit liability"], correctIndex: 3, explanation: "Lenscap plans are \"optional add-ons that limit your liability\".", sourceLessonSlug: "waivers-are-not-insurance" },
          { prompt: "Under Lenscap, a renter's liability for damage is limited to what?", options: ["The greater of repair cost or 10 percent of value", "The full repair cost, up to a $1,000 maximum", "A flat 12 percent fee on the replacement value", "The lesser of repair cost or 10 percent of value"], correctIndex: 3, explanation: "\"your liability is limited to the lesser of the cost to repair the equipment or 10% of the replacement cost\". The 12 percent fee is ShareGrid's Damage + Theft.", sourceLessonSlug: "waivers-are-not-insurance" },
          { prompt: "What maximum does Lensrentals state for Lenscap liability?", options: ["$100,000", "$30,000", "$20,000", "$50,000"], correctIndex: 0, explanation: "Lenscap's limit applies \"up to a stated maximum of $100,000\".", sourceLessonSlug: "waivers-are-not-insurance" },
          { prompt: "What does Lenscap+ add to Lenscap?", options: ["Cover when the gear cannot be returned", "Cover for ordinary wear and tear", "A refund for days the gear sat unused", "A second copy of every rented item"], correctIndex: 0, explanation: "Lenscap+ adds cover for \"situations that make it impossible to return the equipment that you rented\", such as theft.", sourceLessonSlug: "waivers-are-not-insurance" },
          { prompt: "In lesson 16's worked example, what fee does a renter pay on a $5,000 listing under Damage + Theft?", options: ["$500", "$750", "$600", "$1,000"], correctIndex: 2, explanation: "12 percent of the $5,000 replacement value is $600.", sourceLessonSlug: "waivers-are-not-insurance" },
          { prompt: "In lesson 16's Lenscap example ($4,000 replacement value, $1,000 repair), what does the renter owe?", options: ["$1,000", "$480", "$400", "$100"], correctIndex: 2, explanation: "The lesser of the $1,000 repair or 10 percent of $4,000, which is $400.", sourceLessonSlug: "waivers-are-not-insurance" },
          { prompt: "Which of these does lesson 16 say still falls outside what the waiver pages describe?", options: ["Bookings lost while gear is repaired", "Theft of a rental from the renter", "Accidental damage during a rental", "Physical damage under $6,000"], correctIndex: 0, explanation: "Outside the waivers: wear and tear, negligence, missing items, values above limits, \"and the bookings you lose while gear is out for repair\". Theft and damage are what the waivers address.", sourceLessonSlug: "waivers-are-not-insurance" },
          { prompt: "According to the Insurance Information Institute, what is the business-equipment limit of a typical homeowners policy?", options: ["About $25,000", "Only $2,500", "Only $250", "About $10,000"], correctIndex: 1, explanation: "\"A typical homeowners policy provides only $2,500 coverage for business equipment\".", sourceLessonSlug: "insurance-for-owned-gear" },
          { prompt: "What does the Institute say an endorsement can cost to raise the limit from $2,500 to $5,000?", options: ["As little as $250", "About $495 a year", "As little as $25", "About $48 a month"], correctIndex: 2, explanation: "\"For as little as $25 you can raise the policy limits from $2,500 to $5,000\". $495 and $48 are Athos's and Insureon's figures.", sourceLessonSlug: "insurance-for-owned-gear" },
          { prompt: "Up to what amount does the Institute say some insurers let an endorsement raise business-equipment cover?", options: ["$10,000", "$5,000", "$25,000", "$2,500"], correctIndex: 0, explanation: "Some insurers allow up to $10,000.", sourceLessonSlug: "insurance-for-owned-gear" },
          { prompt: "Which three routes does the Institute describe for insuring a home business?", options: ["Waiver, guarantee, or a home policy", "Floater, auto policy, or a waiver", "Endorsement, in-home policy, or a BOP", "Lenscap, waiver, or an endorsement"], correctIndex: 2, explanation: "A homeowners endorsement, an in-home business policy, and a businessowners policy (BOP).", sourceLessonSlug: "insurance-for-owned-gear" },
          { prompt: "What does inland marine insurance cover, as the Institute explains it?", options: ["Goods and equipment moved over water", "Goods and equipment moved over land", "Only gear kept at a fixed address", "Only vehicles that carry the gear"], correctIndex: 1, explanation: "Unlike marine insurance for goods moved over water, inland marine covers products, materials and equipment moved over land, by truck or train.", sourceLessonSlug: "insurance-for-owned-gear" },
          { prompt: "Besides gear in transit, when else does the Institute say inland marine can cover it?", options: ["While a third party holds it in storage", "While it crosses the ocean by ship", "While it sits in the owner's own home", "While a renter holds it past the return"], correctIndex: 0, explanation: "It covers equipment moved over land \"or while a third party holds them in storage.\" Ocean shipping is marine insurance.", sourceLessonSlug: "insurance-for-owned-gear" },
          { prompt: "Which equipment does the Institute name among what inland marine can cover?", options: ["Household furniture", "Personal vehicles", "Ocean cargo ships", "Photography equipment"], correctIndex: 3, explanation: "It names \"Photography equipment\" among the specialty equipment inland marine can cover.", sourceLessonSlug: "insurance-for-owned-gear" },
          { prompt: "What does the Institute name as the two most frequent causes of inland marine losses?", options: ["Collisions and cargo theft", "Fire and water damage", "Floods and windstorms", "Drops and spills on set"], correctIndex: 0, explanation: "\"Collisions and cargo theft are the two most frequent causes of inland marine losses.\"", sourceLessonSlug: "insurance-for-owned-gear" },
          { prompt: "What kind of insurance is an equipment floater, by IRMI's definition?", options: ["Liability cover for injuries on set", "A waiver that limits a renter's debt", "Auto cover for the van that hauls gear", "Property cover for gear often moved"], correctIndex: 3, explanation: "\"An equipment floater is property insurance covering equipment that is often moved from place to place. It is a form of inland marine insurance.\"", sourceLessonSlug: "insurance-for-owned-gear" },
          { prompt: "What does the Institute's small business page say about lawsuits?", options: ["Only large firms get sued", "Renters cannot sue owners", "Waivers prevent lawsuits", "Any enterprise can be sued"], correctIndex: 3, explanation: "\"Any enterprise can be sued.\"", sourceLessonSlug: "insurance-for-owned-gear" },
          { prompt: "Besides damages, what does liability insurance pay, per the Institute?", options: ["The value of the owner's lost bookings", "Attorneys' fees and legal defense costs", "Repairs to the owner's damaged gear", "The renter's 12 percent waiver fee"], correctIndex: 1, explanation: "Liability insurance \"pays damages for which the business is found liable, up to the policy limits, as well as attorneys' fees and other legal defense expenses.\"", sourceLessonSlug: "insurance-for-owned-gear" },
          { prompt: "What does the regional house's certificate requirement say about general liability insurance?", options: ["It is never required of renters", "It is always required of renters", "It may be required, by use case", "It replaces equipment coverage"], correctIndex: 2, explanation: "\"General Liability Insurance may be required depending on equipment use case.\"", sourceLessonSlug: "insurance-for-owned-gear" },
          { prompt: "Which exclusion must a renter's policy not have, per the regional house?", options: ["A wear and tear exclusion", "A voluntary parting exclusion", "A flood and hail exclusion", "An unattended vehicle exclusion"], correctIndex: 3, explanation: "The certificate terms say \"No 'unattended vehicle' exclusion\".", sourceLessonSlug: "insurance-for-owned-gear" },
          { prompt: "On what basis must a renter's mobile equipment coverage pay, per the regional house?", options: ["Actual cash value, within the home state", "Repair cost only, capped at a fixed $1,000", "Replacement cost, with transit and worldwide", "Purchase price, for the first year only"], correctIndex: 2, explanation: "Coverage that \"is replacement cost and includes transit and world-wide coverage.\"", sourceLessonSlug: "insurance-for-owned-gear" },
          { prompt: "What minimum premium did Athos list for annual production equipment, owned and/or rented?", options: ["$495", "$250", "$220", "$48"], correctIndex: 0, explanation: "\"$495\" for \"Annual Production Equipment: (Owned and/or Rented)\". $250 is short-term rented, $220 the hobbyist start, $48 Insureon's monthly average.", sourceLessonSlug: "insurance-for-owned-gear" },
          { prompt: "What minimum did Athos list for short-term rented equipment?", options: ["$495", "$220", "$150", "$250"], correctIndex: 3, explanation: "\"$250\" for \"Short-Term Rented Equipment\".", sourceLessonSlug: "insurance-for-owned-gear" },
          { prompt: "Which deductible options did Athos's form list?", options: ["$250, $500, $1,000 or $2,500", "$100, $250, $500 or $1,000", "$500, $1,000, $2,500 or $5,000", "$25, $48, $150 or $495"], correctIndex: 0, explanation: "Deductible options of $250, $500, $1,000 or $2,500.", sourceLessonSlug: "insurance-for-owned-gear" },
          { prompt: "What happens on Athos's form if you enter 0 for equipment rented to others?", options: ["The coverage is added free", "The form cannot be sent", "A $100,000 limit is set", "That coverage is not added"], correctIndex: 3, explanation: "Entering 0 \"means that coverage is not added.\"", sourceLessonSlug: "insurance-for-owned-gear" },
          { prompt: "What did Insureon report small businesses paid on average for inland marine?", options: ["$48 per year", "$48 per month", "$495 per year", "$25 per month"], correctIndex: 1, explanation: "\"an average of $48 per month\" for small businesses buying through Insureon.", sourceLessonSlug: "insurance-for-owned-gear" },
          { prompt: "How does lesson 17 describe the Athos and Insureon figures?", options: ["A quote for a typical gear owner", "Minimums and averages, not a quote", "Fixed prices set by state law", "Maximums any insurer may charge"], correctIndex: 1, explanation: "\"These are minimums and averages, not a quote for your gear.\"", sourceLessonSlug: "insurance-for-owned-gear" },
          { prompt: "Which is one of lesson 17's seven questions for an insurance agent?", options: ["Will you rent my gear to others?", "Is my gear covered while rented out?", "Do you sell used camera bodies?", "Can you waive the renter's fee?"], correctIndex: 1, explanation: "Question 1: \"Does the policy cover my owned gear while it is rented to others, and up to what amount?\"", sourceLessonSlug: "insurance-for-owned-gear" },
          { prompt: "By what name does ShareGrid's guarantee page know a renter keeping the gear for good?", options: ["Lost in transit", "Owner default", "Voluntary parting", "Gear forfeiture"], correctIndex: 2, explanation: "\"This scenario is known as voluntary parting.\"", sourceLessonSlug: "theft-and-non-return" },
          { prompt: "What other names does ShareGrid give that criminal act?", options: ["Theft by fraud or by false pretenses", "Breach of contract or late return", "Embezzlement or simple larceny", "Ordinary negligence or wear and tear"], correctIndex: 0, explanation: "\"a criminal act sometimes called 'theft by fraud' or 'theft by false pretenses'\".", sourceLessonSlug: "theft-and-non-return" },
          { prompt: "How much does the Owner Guarantee cover for listings picked up in person?", options: ["Up to $7,500 cumulative value", "Up to $20,000 cumulative value", "Up to $30,000 per rental", "Up to $6,000 per single item"], correctIndex: 1, explanation: "\"up to $20,000 in cumulative Replacement Value for Listings rented and picked up in person\". $7,500 is the shipped limit.", sourceLessonSlug: "theft-and-non-return" },
          { prompt: "How much does the guarantee cover for listings rented through ShareGrid's shipping feature?", options: ["Up to $7,500", "Up to $20,000", "Up to $30,000", "Up to $6,000"], correctIndex: 0, explanation: "\"up to $7,500 in cumulative Replacement Value for Listings rented out using ShareGrid's shipping feature.\"", sourceLessonSlug: "theft-and-non-return" },
          { prompt: "A $15,000 and a $10,000 listing are out at once. Up to what does the guarantee protect?", options: ["$25,000", "$15,000", "$20,000", "$10,000"], correctIndex: 2, explanation: "Lesson 18: \"A $15,000 and a $10,000 listing out at once are protected up to $20,000, not $25,000.\"", sourceLessonSlug: "theft-and-non-return" },
          { prompt: "Why does the guarantee protect only $20,000 in that case?", options: ["The limit is cumulative, not per rental", "Each listing alone is capped at $10,000", "The second listing is never eligible", "Two items out at once count as two claims"], correctIndex: 0, explanation: "\"This is a cumulative limit, not a per-rental limit.\"", sourceLessonSlug: "theft-and-non-return" },
          { prompt: "Is a single listing worth $30,000 protected by the guarantee?", options: ["Yes, up to $20,000 of its value", "Yes, if it is picked up in person", "Yes, if the renter has Damage + Theft", "No; it is over the $20,000 limit"], correctIndex: 3, explanation: "\"A listing, or a package, worth more than $20,000 is not protected.\"", sourceLessonSlug: "theft-and-non-return" },
          { prompt: "How many eligible guarantee claims may each owner account make per 12 calendar months?", options: ["Two", "One", "Three", "Four"], correctIndex: 0, explanation: "\"There is a maximum of two (2) eligible claims per 12 calendar months for each Owner account.\"", sourceLessonSlug: "theft-and-non-return" },
          { prompt: "An owner already has a policy that covers non-return. What does the guarantee say?", options: ["Eligible, and paid before the policy", "Not eligible; claim on that policy", "Eligible for the first claim only", "Eligible up to $7,500 in value"], correctIndex: 1, explanation: "Such an owner \"is not eligible and must claim on that policy.\"", sourceLessonSlug: "theft-and-non-return" },
          { prompt: "Which loss does the guarantee exclude, per lesson 18?", options: ["Gear not returned after pickup", "Loss of use before reimbursement", "Gear picked up by the renter in person", "Listings under $20,000 in value"], correctIndex: 1, explanation: "It does not cover \"Loss of use or ongoing rental fees\" before you are reimbursed. Unreturned in-person rentals under $20,000 are what it covers.", sourceLessonSlug: "theft-and-non-return" },
          { prompt: "What is the notice deadline for an unreturned rental under the guarantee?", options: ["72 hours after the rental's end date", "48 hours after the rental's end date", "24 hours after the rental's end date", "7 days after the rental's end date"], correctIndex: 1, explanation: "Notify ShareGrid \"within 48 hours of the rental's end date\". 72 hours is when a police report is recommended.", sourceLessonSlug: "theft-and-non-return" },
          { prompt: "When does ShareGrid recommend filing a police report?", options: ["If gear is not back within 72 hours", "As soon as gear is one hour late", "Only after a written demand is paid", "After the 12-month claim window"], correctIndex: 0, explanation: "If the gear is not back within 72 hours, ShareGrid recommends a police report.", sourceLessonSlug: "theft-and-non-return" },
          { prompt: "What may some places require before you can make a police report, per ShareGrid?", options: ["A signed waiver from the renter", "A written demand to the renter", "A claim filed with your insurer", "A second ID check of the renter"], correctIndex: 1, explanation: "Some places \"may require you to send a written demand to the Renter\" first.", sourceLessonSlug: "theft-and-non-return" },
          { prompt: "Which of these does a guarantee theft claim require?", options: ["A copy of the filed police report", "The renter's signed confession", "A repair estimate from the maker", "The renter's photo ID image"], correctIndex: 0, explanation: "A theft claim needs a copy of the police report, confirmation of a criminal investigation, and any information or footage that helps.", sourceLessonSlug: "theft-and-non-return" },
          { prompt: "What must an owner check at pickup, per ShareGrid's owner guide?", options: ["The renter's insurance certificate", "The renter's government-issued ID", "The renter's production schedule", "The renter's credit card statement"], correctIndex: 1, explanation: "\"Always check the renter's government-issued ID at gear pickup.\"", sourceLessonSlug: "theft-and-non-return" },
          { prompt: "What must the name on the renter's ID match?", options: ["The name on the owner's insurance policy", "The name on the production's call sheet", "The name on the renter's credit card bill", "The name in the rental conversation thread"], correctIndex: 3, explanation: "\"Ensure that the name on the ID matches the name listed in the rental conversation thread on ShareGrid.\"", sourceLessonSlug: "theft-and-non-return" },
          { prompt: "Why does ShareGrid ask owners not to photograph renters' IDs?", options: ["Photos of IDs void the guarantee", "Renters must approve every photo", "ShareGrid keeps a copy from sign-up", "ID photos are illegal in all states"], correctIndex: 2, explanation: "ShareGrid asks owners to refrain from photos \"because ShareGrid already keeps a copy from sign-up.\"", sourceLessonSlug: "theft-and-non-return" },
          { prompt: "Whom does the guarantee page name as the partner providing policies bought through ShareGrid accounts?", options: ["Insureon", "Lenscap Plus", "Athos Insurance", "Lensrentals"], correctIndex: 2, explanation: "The page \"names Athos Insurance as the partner that provides policies bought through ShareGrid accounts.\"", sourceLessonSlug: "theft-and-non-return" },
          { prompt: "How does Athos explain its voluntary parting coverage?", options: ["Gear damaged by a client during a shoot", "Gear lost by a carrier while shipping", "Gear stolen from your home by a stranger", "Tricked into renting to a client who vanishes"], correctIndex: 3, explanation: "\"If you are tricked into renting your equipment to a fraudulent client, where the client does not return or disappears with your equipment.\"", sourceLessonSlug: "theft-and-non-return" },
          { prompt: "What does an IRMI article list voluntary parting as, in a farm machinery equipment form?", options: ["A covered cause of loss at no charge", "An additional excluded cause of loss", "A required coverage in every policy", "A claim limited to $20,000 of value"], correctIndex: 1, explanation: "The IRMI article lists \"Voluntary parting\" among that form's additional excluded causes of loss.", sourceLessonSlug: "theft-and-non-return" },
          { prompt: "Which is one of lesson 18's five habits?", options: ["Ship gear when pickup is possible", "Let a friend collect for the renter", "Check ID only on large rentals", "Hand gear only to the named renter"], correctIndex: 3, explanation: "\"hand gear only to the named renter after checking ID\". The habits also prefer local pickup when the guarantee depends on it.", sourceLessonSlug: "theft-and-non-return" },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 6: Operations
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "prep-and-test",
      title: "19 · Prep and test before every rental",
      section: "6 · Operations",
      recallContent: [
        {
          prompt: "How many eligible claims per 12 calendar months does ShareGrid's Owner Guarantee allow each owner account?",
          answer: "Two.",
        },
        {
          prompt: "What does ShareGrid ask owners not to do with a renter's ID at pickup?",
          answer: "Not to take photos of it; ShareGrid already keeps a copy from sign-up.",
        },
      ],
      body: `**The standard renters expect.** ShareGrid's tips for owners set it plainly: "Keep your equipment clean, in good working order, and ready for use." "Be accessible to resolve any issues within 24 hours of the renter picking up the equipment." "Arrive on time for both the pick-up and return exchanges." And "Check the renter's ID at the start of the rental." The regional rental house promises its own customers that "all Equipment will be operational to accepted manufacturer's specifications" when delivered. A renter comparing you with a house will expect no less.

**Clear the last renter out of the camera.** Sony's help guide for the FX3 says that before lending a camera you should "be sure to perform the following operation to protect private information. Select [Setting Reset] → [Initialize]." Initializing deletes registered faces, certificates, access point information, FTP and cloud connection settings, and streaming connection information. Two details matter for a rental owner:

- Even [Initialize] does not reset [Picture Profile] settings, except PPLUT 1 to 4, so a look the last user built may still be in the camera. Check it.
- "Be sure not to eject the battery pack while resetting."

**Wipe the cards.** Sony warns that formatting "may not completely delete the data on the memory card" and recommends data deletion software before lending a card. The regional rental house formats rented cards "immediately upon return" and asks renters to make sure "all footage has been properly transferred off" first. If you include cards, tell renters the same, in writing.

**Update the software, with power to spare.** Sony's Version screen shows the body's firmware and, with a compatible lens attached, the lens's. "Updating can be performed only when the remaining battery level is 51% or more." Update between rentals, never the morning of one, and test after.

**A pre-rental checklist.** This course's list, built from the pages above and lessons 9 and 10:

1. Charge every battery; test each in the camera (lesson 20).
2. Record a short test clip; play it back; check every output the package promises.
3. Check firmware versions against your asset record.
4. Reset or initialize the camera, then set any defaults you promise renters.
5. Wipe every card with data deletion software.
6. Clean what renters will touch and look through (lesson 21).
7. Photograph each item, including serial numbers and any marks.
8. Pack against the kit list, and have the renter confirm the list at handover.

:::reveal Which Sony operation does the help guide say to perform before lending a camera? ||| [Setting Reset] → [Initialize], to protect private information.

:::reveal What does Sony say about [Picture Profile] settings when you initialize? ||| They are not reset, except PPLUT 1 to 4.

:::reveal What battery level does Sony require for a firmware update? ||| 51 percent or more.

## Sources
- ${SG_TIPS} Locator: "Maintain Your Gear", "Be Available", "Be Punctual", "Verify ID".
- ${RH_POLICIES} Locator: "Return", the warranty sentence; "Additional Fees", "Immediate Card Format".
- ${SONY_LENDING} Locator: "Notes on lending, transferring, or discarding the camera to others"; "Notes on lending, transferring, or discarding a memory card to others".
- ${SONY_RESET} Locator: "Note", the Picture Profile and battery sentences.
- ${SONY_VERSION} Locator: the first two sentences and "Note".`,
    },
    {
      slug: "batteries",
      title: "20 · Batteries: care, travel and shipping",
      section: "6 · Operations",
      recallContent: [
        {
          prompt: "What does the regional rental house do with rented cards on return, and what does it ask renters to do first?",
          answer: "It formats them immediately on return, and asks renters to make sure all footage has been transferred off first.",
        },
        {
          prompt: "Name four steps of this course's pre-rental checklist.",
          answer: "Any four of: charge and test batteries; record and play back a test clip and check outputs; check firmware; reset or initialize; wipe cards; clean; photograph each item and serial number; pack against the kit list with the renter confirming it.",
        },
      ],
      body: `**Batteries are where rentals fail.** A camera that will not power on ends the booking. Treat batteries as their own inventory, with their own log.

**What the camera's maker says.** Sony's help guide for the FX3:

- Use only "genuine Sony branded battery packs" in the camera.
- "Do not expose the battery pack to water. The battery pack is not water-resistant."
- "Do not leave the battery pack in extremely hot places, such as in a car or under direct sunlight."
- Sony recommends charging "in an ambient temperature of between 10 °C and 30 °C (50 °F and 86 °F)."
- "The charged battery pack will discharge little by little even if you do not use it."
- "Do not continuously or repeatedly charge the battery pack without using it if it is already fully charged or close to fully charged. Doing so may cause a deterioration in battery performance."
- "Battery performance decreases in low temperature environments."
- For storage: "charge the battery pack and then fully discharge it in the camera at least once a year before storing it. Store the battery in a cool, dry place after removing it from the camera."

Larger batteries from other makers come with their own manuals. Follow each maker's instructions for its own packs.

**A battery log.** This course suggests one line per battery: a number marked on the pack, the date bought, and a note each time its run time in your test drops. Sony says that when "the available time of the battery is shortened significantly, it is probably time to replace the battery pack." The log tells you when that day has come, before a renter finds out.

**Flying with spares.** The Transportation Security Administration says spare lithium batteries "must be carried in carry-on baggage only." With airline approval, a passenger may also carry "up to two spare larger lithium ion batteries" of 101 to 160 watt hours, a size that "covers ... some larger batteries used in professional audio/visual equipment." A renter flying with your kit needs to know this. Put it in your handover notes.

**Shipping is a regulated act.** Federal hazardous materials rules have a section titled "Lithium cells and batteries" (49 C.F.R. § 173.185), and the person who offers a hazardous material for transport "shall class and describe the hazardous material in accordance with parts 172 and 173" (49 C.F.R. § 173.22(a)(1)). This course does not teach those rules. If you ship batteries to renters, learn your carrier's rules and the federal rules first, or ship the kit without them and have renters supply power.

:::reveal What does Sony recommend for storing a battery pack? ||| Charge it and then fully discharge it in the camera at least once a year before storing, and store it in a cool, dry place outside the camera.

:::reveal Under TSA rules, where must spare lithium batteries travel, and how many larger 101 to 160 watt-hour spares may a passenger carry? ||| In carry-on baggage only; up to two larger spares, with airline approval.

:::reveal Which federal section is titled "Lithium cells and batteries"? ||| 49 C.F.R. § 173.185.

## Sources
- ${SONY_BATTERY} Locator: "Notes on using the battery pack"; "Notes on charging the battery pack"; "Effective use of the battery pack"; "How to store the battery pack"; "On battery life".
- ${TSA_LI} Locator: the carry-on rule and the 101 to 160 watt-hour paragraph.
- ${CFR_173_185} Locator: section title.
- ${CFR_173_22} Locator: paragraph (a)(1).
- ${RH_POLICIES} Locator: "Additional Fees", "Immediate Card Format".`,
    },
    {
      slug: "cleaning",
      title: "21 · Cleaning lenses, sensors and bodies",
      section: "6 · Operations",
      recallContent: [
        {
          prompt: "In what temperature range does Sony recommend charging the FX3's battery pack?",
          answer: "Between 10 °C and 30 °C (50 °F and 86 °F).",
        },
        {
          prompt: "What does this course say to do if you will ship a kit but have not learned the battery shipping rules?",
          answer: "Ship the kit without batteries and have renters supply power, or learn the carrier's and the federal rules first.",
        },
      ],
      body: `**Follow the maker, not habit.** Cleaning is where well-meant care does damage. The rules below are Sony's, from the FX3 help guide. Lenses and bodies from other makers come with their own instructions; read them.

**Lenses.**

- "Do not use a cleaning solution containing organic solvents, such as thinner, or benzine."
- "When cleaning the lens surface, remove dust with a commercially available blower."
- For dust that sticks, "wipe it off with a soft cloth or tissue paper slightly moistened with lens cleaning solution. Wipe in a spiral pattern from the center to the outside."
- "Do not spray lens cleaning solution directly onto the lens surface."

**The body.**

- "Do not touch the parts of the product inside the lens mount, such as a lens signal contact." Use a blower inside the mount, and do not use a spray-type blower, which "may cause a malfunction".
- Clean the outside "with a soft cloth slightly moistened with water, then wipe the surface with a dry cloth."
- Keep it away from "thinner, benzine, alcohol, disposable cloths, insect repellent, sunscreen or insecticide", and do not leave it "in contact with rubber or vinyl for a long time."
- Sony warns that wiping the monitor firmly with tissue paper may scratch it; remove dust gently, then use a soft cloth.

**The sensor.** Sony's steps: confirm the battery is charged, run [Sensor Cleaning] from the menu, then "Use a commercially available blower to clean the image sensor surface and the surrounding area", holding the camera "slightly face downward so that the dust falls out." Its cautions: the battery level must be "51% or more"; "Do not use a spray type blower"; do not put the blower's tip past the lens mount; "do not blow too hard". And: "If the dust remains even after you cleaned the product as described, consult the service facility."

**What the market charges for dirt.** The regional rental house charges $20 per item for gear returned with odors or a dirty exterior, up to 25 percent of the rental fee for gear that comes back "offensively dirty", and "$25 per sensor that is returned needing cleaning". It asks renters "do not try to clean the sensor yourself as it could damage the sensor." Your agreement can name cleaning fees too (lesson 15), and your listing can ask renters not to clean sensors.

**Cleaning is time, and time is cost.** This course's reasoning: every rental adds a cleaning step to the turnaround, and a sensor that a blower will not clear means a trip to a service facility and days out of rental. Count both in your per-booking costs (lesson 25).

:::reveal How does Sony say to wipe a lens with lens cleaning solution? ||| With a soft cloth or tissue slightly moistened with the solution, in a spiral from the center to the outside, never spraying solution on the lens.

:::reveal What does Sony say to do if sensor dust remains after cleaning with a blower? ||| Consult the service facility.

:::reveal What did the regional house charge per sensor returned needing cleaning, and what does it ask renters not to do? ||| $25 per sensor, and it asks renters not to clean the sensor themselves.

## Sources
- ${SONY_CLEANING} Locator: "Cleaning the lens"; "Cleaning the camera body"; "Cleaning the product surface"; "Cleaning the monitor".
- ${SONY_SENSOR} Locator: the numbered steps and "Note".
- ${RH_POLICIES} Locator: "Additional Fees", cleaning and sensor cleaning fees.`,
    },
    {
      slug: "check-in-and-retirement",
      title: "22 · Check-in, turnaround, repair and retirement",
      section: "6 · Operations",
      recallContent: [
        {
          prompt: "Name two things Sony says to keep the camera body away from when cleaning.",
          answer: "Any two of: thinner, benzine, alcohol, disposable cloths, insect repellent, sunscreen, insecticide; also long contact with rubber or vinyl.",
        },
        {
          prompt: "What battery level does Sony require before sensor cleaning?",
          answer: "51 percent or more.",
        },
      ],
      body: `**Check-in starts the clock.** ShareGrid tells owners to "Report the damage within 24 hours of the equipment's return" and to "take detailed photographs to capture the extent and nature of the damage". Late reports may affect coverage. For missing items, "Renters have 24 hours to locate and return the item," and owners may add a late fee of one day's rental. So inspect at handback, not next week.

**A check-in routine.** This course's steps, matched to those deadlines:

1. With the renter present, count every item against the kit list (lesson 10).
2. Power on, record, play back; test every output.
3. Photograph each item from the same angles as at check-out (lesson 19), including serial numbers.
4. Note anything missing or damaged, and tell the renter on the spot.
5. Report through the platform within 24 hours if anything is wrong.
6. Then clean, charge, reset, wipe and log, so the kit is ready for the next renter.

**Turnaround is real time.** ShareGrid makes pickup and return days free because they "are intended for checking, prepping, and transporting gear, not filming." Those days are yours to fill with the routine above. This course's reasoning: if check-in, cleaning, charging and testing take a few hours per booking, count them as a cost of every booking (lesson 25).

**Repairs go to the maker's service.** The regional rental house forbids renters to repair its gear: "Customer shall not attempt to service or repair any of the Equipment". Sony's guide sends sensor dust it cannot clear to "the service facility". This course's advice: send repairs to an authorized service center, keep the receipts in the asset record (for listed property, IRS Publication 946's records rule names "maintenance and repair costs" among the expenditures your records must support), and mark the item unavailable until it is back and tested.

**Retirement.** Gear leaves the business in one of three ways: it wears out, it stops renting, or you sell it. Each leaves a record.

- **Batteries** retire when their run time falls (lesson 20).
- **For tax purposes**, IRS Publication 946 says "You stop depreciating property either when you have fully recovered your cost or other basis or when you retire it from service, whichever happens first."
- **When you sell**, Publication 583's asset record asks for when and how you disposed of the asset, the selling price, and the expenses of sale. Selling through ShareGrid carries "A 5% fee" on seller transactions.
- **Before it goes**, Sony says to initialize the camera, and "When discarding a memory card, we recommend that you physically destroy it."

:::reveal Within how long after return does ShareGrid tell owners to report damage? ||| Within 24 hours of the equipment's return, with detailed photographs.

:::reveal Why does ShareGrid make pickup and return days free? ||| They "are intended for checking, prepping, and transporting gear, not filming."

:::reveal According to IRS Publication 946, when do you stop depreciating property? ||| When you have fully recovered its cost or other basis, or when you retire it from service, whichever happens first.

## Sources
- ${SG_DAMAGE} Locator: reporting deadline and photographs; handling missing items.
- ${SG_MISSING} Locator: the 24-hour window and late fee.
- ${SG_SHOOT_DAYS} Locator: "Pick-up and drop-off days are free".
- ${RH_POLICIES} Locator: "Return", the service and repair sentence.
- ${SONY_SENSOR} Locator: "Note", last item on dust that remains.
- ${IRS_P946} Locator: chapter 1, "When Does Depreciation Begin and End?"; chapter 5, "What Records Must Be Kept?", "Elements of expenditure or use".
- ${IRS_P583} Locator: "Supporting Documents", "Assets".
- ${SG_FEES} Locator: "Buy & Sell", seller fee.
- ${SONY_LENDING} Locator: "Notes on lending, transferring, or discarding a memory card to others".`,
    },
    {
      slug: "section-6-quiz",
      title: "Section 6 quiz · Operations",
      section: "6 · Operations",
      body: "A graded check on prepping and testing before a rental, battery care, travel and shipping, cleaning lenses, sensors and bodies, and check-in, turnaround, repair and retirement. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "Which standard does ShareGrid's owner tip set for gear condition?", options: ["New in box, with the maker's seals intact", "Fully insured, with a certificate on hand", "Clean, in good working order, ready to use", "Inspected yearly by a service facility"], correctIndex: 2, explanation: "\"Keep your equipment clean, in good working order, and ready for use.\"", sourceLessonSlug: "prep-and-test" },
          { prompt: "How soon after pickup does ShareGrid ask owners to be available to resolve issues?", options: ["Within 48 hours", "Within 72 hours", "Within one week", "Within 24 hours"], correctIndex: 3, explanation: "\"Be accessible to resolve any issues within 24 hours of the renter picking up the equipment.\"", sourceLessonSlug: "prep-and-test" },
          { prompt: "What does the regional house warrant about its gear at delivery?", options: ["Free of any cosmetic wear or scratches", "Operational to the maker's specifications", "Covered by the renter's own insurance", "Updated to the newest firmware version"], correctIndex: 1, explanation: "It promises \"all Equipment will be operational to accepted manufacturer's specifications\" when delivered.", sourceLessonSlug: "prep-and-test" },
          { prompt: "Before a camera goes out on loan, which menu path does Sony's guide name?", options: ["[Sensor Cleaning] then [Enter]", "[Setting Reset] then [Initialize]", "[Version] then [Software Update]", "[Reset Network Set.] then [Enter]"], correctIndex: 1, explanation: "Sony: \"Select [Setting Reset] → [Initialize].\" to protect private information before lending.", sourceLessonSlug: "prep-and-test" },
          { prompt: "Which of these does initializing the FX3 delete, per Sony?", options: ["Faces registered in Face Memory", "The camera's firmware version", "The battery's charge history", "The lens's firmware version"], correctIndex: 0, explanation: "Initializing deletes registered faces, certificates, access point information, FTP and cloud settings, and streaming connection information. Firmware is not among them.", sourceLessonSlug: "prep-and-test" },
          { prompt: "What does Sony say [Initialize] leaves in place?", options: ["Registered faces, except the first four", "Picture Profile settings, except PPLUT 1 to 4", "Cloud links, except Creators' Cloud ones", "Network settings, except FTP settings"], correctIndex: 1, explanation: "\"Even [Initialize] does not reset [Picture Profile] settings, except PPLUT 1 to 4\".", sourceLessonSlug: "prep-and-test" },
          { prompt: "Why does lesson 19 tell you to check Picture Profile settings before a rental?", options: ["A look the last user built may remain", "Initializing erases all of them anyway", "Renters cannot change them on the FX3", "They decide the camera's firmware level"], correctIndex: 0, explanation: "Because they survive initializing, \"a look the last user built may still be in the camera. Check it.\"", sourceLessonSlug: "prep-and-test" },
          { prompt: "What does Sony warn against doing while the camera resets?", options: ["Ejecting the battery pack", "Removing the lens cap", "Formatting the media card", "Pressing the record button"], correctIndex: 0, explanation: "\"Be sure not to eject the battery pack while resetting.\"", sourceLessonSlug: "prep-and-test" },
          { prompt: "What does the regional house do with rented cards on return?", options: ["Formats them immediately", "Erases them a week later", "Keeps them for 30 days", "Mails them to the renter"], correctIndex: 0, explanation: "The house formats rented cards \"immediately upon return\".", sourceLessonSlug: "prep-and-test" },
          { prompt: "What does the regional house ask renters to do before returning rented cards?", options: ["Format them in the camera first", "Transfer all their footage off", "Wipe them with deletion software", "Label each with the shoot date"], correctIndex: 1, explanation: "It asks renters to make sure \"all footage has been properly transferred off\" first.", sourceLessonSlug: "prep-and-test" },
          { prompt: "Below what battery level will the FX3 refuse a firmware update?", options: ["51 percent", "25 percent", "75 percent", "90 percent"], correctIndex: 0, explanation: "\"Updating can be performed only when the remaining battery level is 51% or more.\"", sourceLessonSlug: "prep-and-test" },
          { prompt: "When does lesson 19 say to update firmware?", options: ["The morning of a rental", "Only when a renter asks", "Once a year, in January", "Between rentals, then test"], correctIndex: 3, explanation: "\"Update between rentals, never the morning of one, and test after.\"", sourceLessonSlug: "prep-and-test" },
          { prompt: "What does Sony's Version screen show when a compatible lens is attached?", options: ["The lens's shutter count too", "The lens's serial number only", "The lens's firmware version too", "The lens's purchase date too"], correctIndex: 2, explanation: "The Version screen shows the body's firmware and, with a compatible lens attached, the lens's.", sourceLessonSlug: "prep-and-test" },
          { prompt: "Which is step 1 of lesson 19's pre-rental checklist?", options: ["Charge and test every battery", "Photograph each serial number", "Wipe every card with software", "Pack against the kit list"], correctIndex: 0, explanation: "Step 1: \"Charge every battery; test each in the camera.\" Photos, card wiping and packing come later.", sourceLessonSlug: "prep-and-test" },
          { prompt: "What does lesson 19's checklist say to do with every card before a rental?", options: ["Format it once in the camera only", "Leave the last renter's clips on it", "Wipe it with data deletion software", "Replace it with a brand new card"], correctIndex: 2, explanation: "\"Wipe every card with data deletion software.\" Sony warns that formatting may not completely delete the data.", sourceLessonSlug: "prep-and-test" },
          { prompt: "What should happen at handover, per the last checklist step?", options: ["The renter signs a damage waiver", "The owner records a test clip", "The owner takes the renter's ID photo", "The renter confirms the kit list"], correctIndex: 3, explanation: "\"Pack against the kit list, and have the renter confirm the list at handover.\"", sourceLessonSlug: "prep-and-test" },
          { prompt: "Which items does lesson 19 say to photograph before a rental?", options: ["Only items worth over $3,000", "Each item, with serials and marks", "Only the camera body's front", "Only damage the renter points out"], correctIndex: 1, explanation: "\"Photograph each item, including serial numbers and any marks.\"", sourceLessonSlug: "prep-and-test" },
          { prompt: "Why does lesson 20 call batteries the place where rentals fail?", options: ["Batteries cost more than the camera body", "Platforms refuse to list any batteries", "Renters are not allowed to charge batteries", "A camera that won't power on ends the booking"], correctIndex: 3, explanation: "\"A camera that will not power on ends the booking.\"", sourceLessonSlug: "batteries" },
          { prompt: "Which battery packs does Sony say to use in the FX3?", options: ["Only genuine Sony branded packs", "Any pack with the same voltage", "Any pack rated at 98 watt hours", "Only packs under one year old"], correctIndex: 0, explanation: "Use only \"genuine Sony branded battery packs\" in the camera.", sourceLessonSlug: "batteries" },
          { prompt: "What does Sony say about the FX3 battery pack and water?", options: ["It is fine in light rain", "It is sealed against splashes", "It is not water-resistant", "It must be cooled with water"], correctIndex: 2, explanation: "\"Do not expose the battery pack to water. The battery pack is not water-resistant.\"", sourceLessonSlug: "batteries" },
          { prompt: "Where does Sony say not to leave the battery pack?", options: ["In a car or under direct sunlight", "In a cool, dry drawer at home", "In a padded hard-shell case", "In an office kept at 68 °F"], correctIndex: 0, explanation: "\"Do not leave the battery pack in extremely hot places, such as in a car or under direct sunlight.\"", sourceLessonSlug: "batteries" },
          { prompt: "Sony's recommended charging range for the FX3 pack is which?", options: ["0 °C to 20 °C (32 °F to 68 °F)", "10 °C to 30 °C (50 °F to 86 °F)", "20 °C to 40 °C (68 °F to 104 °F)", "5 °C to 25 °C (41 °F to 77 °F)"], correctIndex: 1, explanation: "Sony recommends charging \"in an ambient temperature of between 10 °C and 30 °C (50 °F and 86 °F).\"", sourceLessonSlug: "batteries" },
          { prompt: "What does Sony say a charged pack does when you don't use it?", options: ["Holds its charge for a year", "Discharges little by little", "Gains capacity over time", "Swells unless it is used"], correctIndex: 1, explanation: "\"The charged battery pack will discharge little by little even if you do not use it.\"", sourceLessonSlug: "batteries" },
          { prompt: "What does Sony warn happens if you keep recharging a pack that is already full?", options: ["It may refuse any further charge", "Its warranty may become void", "Its performance may deteriorate", "It may gain extra capacity"], correctIndex: 2, explanation: "Repeated charging of a full pack \"may cause a deterioration in battery performance.\"", sourceLessonSlug: "batteries" },
          { prompt: "How often should a stored FX3 pack be charged and then fully run down, per Sony?", options: ["At least once a week", "Every three months", "Only before travel", "At least once a year"], correctIndex: 3, explanation: "\"charge the battery pack and then fully discharge it in the camera at least once a year before storing it.\"", sourceLessonSlug: "batteries" },
          { prompt: "Where does Sony say to store the battery?", options: ["Warm and dry, in the camera", "Fully charged, in the camera", "In the freezer, in a sealed bag", "Cool and dry, out of the camera"], correctIndex: 3, explanation: "\"Store the battery in a cool, dry place after removing it from the camera.\"", sourceLessonSlug: "batteries" },
          { prompt: "What does lesson 20 say to do about other makers' larger batteries?", options: ["Follow Sony's rules for every pack", "Follow each maker's own instructions", "Store all of them fully charged", "Charge them only below 10 °C"], correctIndex: 1, explanation: "\"Follow each maker's instructions for its own packs.\"", sourceLessonSlug: "batteries" },
          { prompt: "What does lesson 20's battery log record for each pack?", options: ["Its owner, each renter and the rental price", "A number, purchase date and run-time drops", "Its serial, color and case it ships in", "Its brand, weight and airline approvals"], correctIndex: 1, explanation: "\"one line per battery: a number marked on the pack, the date bought, and a note each time its run time in your test drops.\"", sourceLessonSlug: "batteries" },
          { prompt: "When does Sony say it is probably time to replace a pack?", options: ["After its first full year of service", "When its case shows scratches or dents", "After 100 charges, whatever its run time", "When its available time shortens sharply"], correctIndex: 3, explanation: "When \"the available time of the battery is shortened significantly, it is probably time to replace the battery pack.\"", sourceLessonSlug: "batteries" },
          { prompt: "Spare lithium batteries may fly in which bags, per TSA?", options: ["Checked bags only", "Either kind of bag", "Carry-on bags only", "Neither kind of bag"], correctIndex: 2, explanation: "Spare lithium batteries \"must be carried in carry-on baggage only.\"", sourceLessonSlug: "batteries" },
          { prompt: "How many larger spares of 101 to 160 watt hours may a passenger carry, with airline approval?", options: ["Up to four", "Only one", "Up to two", "Up to six"], correctIndex: 2, explanation: "\"up to two spare larger lithium ion batteries\" of 101 to 160 watt hours, with airline approval.", sourceLessonSlug: "batteries" },
          { prompt: "What does TSA say the 101 to 160 watt-hour size covers?", options: ["Every camera battery sold in stores", "Only electric scooter and bike packs", "Some larger pro audio/visual batteries", "Only phone battery charging cases"], correctIndex: 2, explanation: "The size \"covers ... some larger batteries used in professional audio/visual equipment.\"", sourceLessonSlug: "batteries" },
          { prompt: "Where does lesson 20 say to put the TSA rules for renters?", options: ["On the listing's price", "On the camera's screen", "In your handover notes", "In the rental fee line"], correctIndex: 2, explanation: "\"A renter flying with your kit needs to know this. Put it in your handover notes.\"", sourceLessonSlug: "batteries" },
          { prompt: "Lesson 20 cites which section of 49 C.F.R. for lithium cells and batteries?", options: ["§ 173.22", "§ 74.600", "§ 172.101", "§ 173.185"], correctIndex: 3, explanation: "49 C.F.R. § 173.185 is titled \"Lithium cells and batteries\". § 173.22 is the shipper's responsibility; § 74.600 is broadcast licensing.", sourceLessonSlug: "batteries" },
          { prompt: "What does 49 C.F.R. § 173.22(a)(1) require of the person offering a hazardous material for transport?", options: ["To insure the shipment for its value", "To drive the shipment to the carrier", "To class and describe the material", "To test the packaging in a federal lab"], correctIndex: 2, explanation: "The person \"shall class and describe the hazardous material in accordance with parts 172 and 173\".", sourceLessonSlug: "batteries" },
          { prompt: "Short of learning the shipping rules, what does lesson 20 suggest?", options: ["Ship without batteries; renters supply power", "Ship batteries fully charged and taped", "Ship batteries in a separate plain box", "Ship batteries by the cheapest service"], correctIndex: 0, explanation: "\"learn your carrier's rules and the federal rules first, or ship the kit without them and have renters supply power.\"", sourceLessonSlug: "batteries" },
          { prompt: "Why does lesson 21 say to follow the maker rather than habit?", options: ["Makers void warranties after any cleaning", "Habit is faster but costs more to do", "Well-meant care is where damage happens", "Rental houses ban all cleaning by owners"], correctIndex: 2, explanation: "\"Cleaning is where well-meant care does damage.\"", sourceLessonSlug: "cleaning" },
          { prompt: "Which cleaning solutions does Sony say not to use on a lens?", options: ["Those sold for cleaning camera lenses", "Those with organic solvents like thinner", "Those mixed with plain distilled water", "Those applied with a soft lens cloth"], correctIndex: 1, explanation: "\"Do not use a cleaning solution containing organic solvents, such as thinner, or benzine.\"", sourceLessonSlug: "cleaning" },
          { prompt: "What does Sony say to use first to remove dust from a lens surface?", options: ["A cloth soaked in lens solution", "A commercially available blower", "A fingertip, wiped across gently", "A tissue moistened with alcohol"], correctIndex: 1, explanation: "\"When cleaning the lens surface, remove dust with a commercially available blower.\"", sourceLessonSlug: "cleaning" },
          { prompt: "In what pattern does Sony say to wipe a lens with cleaning solution?", options: ["A spiral from the center outward", "A spiral from the edge inward", "Straight lines from top to bottom", "Small circles around the rim only"], correctIndex: 0, explanation: "\"Wipe in a spiral pattern from the center to the outside.\"", sourceLessonSlug: "cleaning" },
          { prompt: "Where does Sony say lens cleaning solution should go?", options: ["Sprayed directly onto the lens surface", "Onto the lens mount's signal contacts", "Into the blower before using it", "On a soft cloth or tissue, not the lens"], correctIndex: 3, explanation: "Wipe with a cloth or tissue \"slightly moistened with lens cleaning solution\"; \"Do not spray lens cleaning solution directly onto the lens surface.\"", sourceLessonSlug: "cleaning" },
          { prompt: "What part inside the lens mount does Sony say not to touch?", options: ["The rear lens cap", "The battery door", "The accessory shoe", "The lens signal contact"], correctIndex: 3, explanation: "\"Do not touch the parts of the product inside the lens mount, such as a lens signal contact.\"", sourceLessonSlug: "cleaning" },
          { prompt: "Why does Sony say not to use a spray-type blower inside the mount?", options: ["It may void the warranty", "It may cause a malfunction", "It is too weak to clear dust", "It may scratch the screen"], correctIndex: 1, explanation: "A spray-type blower \"may cause a malfunction\".", sourceLessonSlug: "cleaning" },
          { prompt: "How does Sony say to clean the outside of the body?", options: ["Damp cloth with water, then a dry one", "Alcohol wipe, then a dry soft cloth", "Lens solution sprayed on, then wiped", "Disposable wipes, then compressed air"], correctIndex: 0, explanation: "Clean the outside \"with a soft cloth slightly moistened with water, then wipe the surface with a dry cloth.\" Alcohol and disposable cloths are on the keep-away list.", sourceLessonSlug: "cleaning" },
          { prompt: "Which of these does Sony say to keep away from the camera body?", options: ["A soft cloth", "Plain water", "A blower", "Sunscreen"], correctIndex: 3, explanation: "Keep it away from \"thinner, benzine, alcohol, disposable cloths, insect repellent, sunscreen or insecticide\".", sourceLessonSlug: "cleaning" },
          { prompt: "What can happen if you wipe the monitor firmly with tissue, per Sony?", options: ["It may lose its color", "It may stop responding", "It may be scratched", "It may fog up inside"], correctIndex: 2, explanation: "Sony warns that wiping the monitor firmly with tissue paper may scratch it.", sourceLessonSlug: "cleaning" },
          { prompt: "Which step comes first in Sony's sensor cleaning?", options: ["Blow hard into the camera body", "Confirm the battery is charged", "Remove the sensor with a tool", "Spray solution on the sensor"], correctIndex: 1, explanation: "Sony's steps: confirm the battery is charged, run [Sensor Cleaning], then use a blower.", sourceLessonSlug: "cleaning" },
          { prompt: "How should the camera be held while blowing dust off the sensor?", options: ["Slightly face upward", "Lens mount to the side", "Flat on a table, face up", "Slightly face downward"], correctIndex: 3, explanation: "Hold the camera \"slightly face downward so that the dust falls out.\"", sourceLessonSlug: "cleaning" },
          { prompt: "Which of these is one of Sony's sensor cleaning cautions?", options: ["Do not blow too hard", "Use a spray blower", "Clean it once a day", "Touch it with a cloth"], correctIndex: 0, explanation: "Cautions include \"do not blow too hard\" and \"Do not use a spray type blower\".", sourceLessonSlug: "cleaning" },
          { prompt: "Dust survives the blower. Where does Sony send you next?", options: ["A wet swab and alcohol", "The service facility", "The rental house", "A second blower pass"], correctIndex: 1, explanation: "\"If the dust remains even after you cleaned the product as described, consult the service facility.\"", sourceLessonSlug: "cleaning" },
          { prompt: "What fee did the regional house charge for gear returned with odors or a dirty exterior?", options: ["$20 per item", "$25 per item", "$5 per item", "$50 per item"], correctIndex: 0, explanation: "The house charges $20 per item for gear returned with odors or a dirty exterior. $25 is per sensor, $5 per missing cap.", sourceLessonSlug: "cleaning" },
          { prompt: "Why does the regional house ask renters not to clean sensors themselves?", options: ["It voids the renter's waiver", "It is the owner's paid service", "It could damage the sensor", "It takes too long to finish"], correctIndex: 2, explanation: "It asks renters \"do not try to clean the sensor yourself as it could damage the sensor.\"", sourceLessonSlug: "cleaning" },
          { prompt: "Which two costs does lesson 21 say to count in per-booking costs?", options: ["Lens caps and the weekly listing fee", "Sensor swabs and the card hold", "Cleaning time and days out for service", "Platform fees and travel to renters"], correctIndex: 2, explanation: "Every rental adds a cleaning step, and a stubborn sensor means a service trip and days out of rental: \"Count both in your per-booking costs\".", sourceLessonSlug: "cleaning" },
          { prompt: "What is ShareGrid's window for reporting damage after gear comes back?", options: ["48 hours", "72 hours", "24 hours", "7 days"], correctIndex: 2, explanation: "\"Report the damage within 24 hours of the equipment's return\". 48 hours is the guarantee's non-return notice.", sourceLessonSlug: "check-in-and-retirement" },
          { prompt: "What evidence does ShareGrid tell owners to take of damage?", options: ["A repair invoice", "A police report", "Detailed photographs", "A renter's statement"], correctIndex: 2, explanation: "\"take detailed photographs to capture the extent and nature of the damage\".", sourceLessonSlug: "check-in-and-retirement" },
          { prompt: "How long do renters have to locate and return a missing item?", options: ["24 hours", "48 hours", "72 hours", "7 days"], correctIndex: 0, explanation: "\"Renters have 24 hours to locate and return the item.\"", sourceLessonSlug: "check-in-and-retirement" },
          { prompt: "What late fee may an owner add for missing items not returned on time?", options: ["One day's rental", "Two days' rental", "Half a day's rental", "A full week's rental"], correctIndex: 0, explanation: "Owners may add a late fee of one day's rental.", sourceLessonSlug: "check-in-and-retirement" },
          { prompt: "When does lesson 22 say to inspect returned gear?", options: ["At handback, not next week", "Before the next booking", "Once a month, in a batch", "Only if the renter reports it"], correctIndex: 0, explanation: "\"So inspect at handback, not next week.\"", sourceLessonSlug: "check-in-and-retirement" },
          { prompt: "Which is the first step of lesson 22's check-in routine?", options: ["Clean, charge, reset and log", "Count items against the kit list", "Report through the platform", "Photograph only damaged items"], correctIndex: 1, explanation: "Step 1: \"With the renter present, count every item against the kit list\".", sourceLessonSlug: "check-in-and-retirement" },
          { prompt: "How should check-in photographs be taken, per lesson 22?", options: ["Only of the items that look damaged", "From the renter's own phone camera", "From the same angles as at check-out", "Only after cleaning every surface"], correctIndex: 2, explanation: "\"Photograph each item from the same angles as at check-out\".", sourceLessonSlug: "check-in-and-retirement" },
          { prompt: "When does lesson 22 say to tell the renter about missing or damaged items?", options: ["Within one week, by email", "Only after a repair quote", "On the spot, at check-in", "Only if the platform asks"], correctIndex: 2, explanation: "\"Note anything missing or damaged, and tell the renter on the spot.\"", sourceLessonSlug: "check-in-and-retirement" },
          { prompt: "Which step closes lesson 22's check-in routine?", options: ["Clean, charge, reset, wipe and log", "Count items with the renter there", "Report any damage to the platform", "Record and play back a test clip"], correctIndex: 0, explanation: "The last step: \"Then clean, charge, reset, wipe and log, so the kit is ready for the next renter.\"", sourceLessonSlug: "check-in-and-retirement" },
          { prompt: "What does ShareGrid say pickup and return days are meant for?", options: ["Filming the renter's opening scene", "Checking, prepping and moving gear", "Extra shooting at a lower day rate", "Letting the owner use the gear too"], correctIndex: 1, explanation: "They \"are intended for checking, prepping, and transporting gear, not filming.\"", sourceLessonSlug: "check-in-and-retirement" },
          { prompt: "How does lesson 22 say to treat the hours spent on check-in, cleaning and testing?", options: ["As free time between rentals", "As a cost billed to the renter", "As time the platform pays for", "As a cost of every booking"], correctIndex: 3, explanation: "\"count them as a cost of every booking (lesson 25).\"", sourceLessonSlug: "check-in-and-retirement" },
          { prompt: "Which clause does lesson 22 quote from the regional house about repairs?", options: ["Customers must repair it within a week", "Customers may repair it with consent", "Customers pay a set repair fee upfront", "Customers shall not service or repair it"], correctIndex: 3, explanation: "\"Customer shall not attempt to service or repair any of the Equipment\".", sourceLessonSlug: "check-in-and-retirement" },
          { prompt: "Where does lesson 22 advise sending repairs?", options: ["The renter's local repair shop", "The platform's repair team", "Any shop with the lowest quote", "An authorized service center"], correctIndex: 3, explanation: "\"send repairs to an authorized service center\".", sourceLessonSlug: "check-in-and-retirement" },
          { prompt: "What does Publication 946's records rule for listed property name among the expenditures records must support?", options: ["Maintenance and repair costs", "Rental fees paid by clients", "Insurance premiums for renters", "Platform fees on each booking"], correctIndex: 0, explanation: "The records rule names \"maintenance and repair costs\" among the expenditures your records must support.", sourceLessonSlug: "check-in-and-retirement" },
          { prompt: "What status should a repaired item have until it is back and tested?", options: ["Unavailable for rental", "Listed at half price", "Rented with a waiver", "Sold to a buyer"], correctIndex: 0, explanation: "\"mark the item unavailable until it is back and tested.\"", sourceLessonSlug: "check-in-and-retirement" },
          { prompt: "Which three ways does lesson 22 say gear leaves the business?", options: ["It is lost, stolen, or given away", "It wears out, stops renting, or is sold", "It is upgraded, traded, or donated", "It is rented, insured, or repaired"], correctIndex: 1, explanation: "\"it wears out, it stops renting, or you sell it.\"", sourceLessonSlug: "check-in-and-retirement" },
          { prompt: "Per Publication 946, depreciation ends at which point?", options: ["Cost recovered or sold, whichever last", "Cost recovered or retired, whichever first", "Three years after it is placed in service", "When its resale value falls below $2,500"], correctIndex: 1, explanation: "\"You stop depreciating property either when you have fully recovered your cost or other basis or when you retire it from service, whichever happens first.\"", sourceLessonSlug: "check-in-and-retirement" },
          { prompt: "Which facts does Publication 583's asset record ask for when you sell?", options: ["The buyer's name, address and ID", "The renter history and every fee", "The listing photos and the reviews", "When and how, the price and sale costs"], correctIndex: 3, explanation: "It asks for when and how you disposed of the asset, the selling price, and the expenses of sale.", sourceLessonSlug: "check-in-and-retirement" },
          { prompt: "What fee applies when you sell gear through ShareGrid?", options: ["15% on seller transactions", "10% on seller transactions", "12% on seller transactions", "5% on seller transactions"], correctIndex: 3, explanation: "\"A 5% fee\" on seller transactions. 15 percent is the owner fee on rentals.", sourceLessonSlug: "check-in-and-retirement" },
          { prompt: "Before a card leaves for good, Sony recommends what?", options: ["Formatting it once in camera", "Deleting its last folder", "Labeling it as blank", "Physically destroying it"], correctIndex: 3, explanation: "\"When discarding a memory card, we recommend that you physically destroy it.\"", sourceLessonSlug: "check-in-and-retirement" },
          { prompt: "What does Sony say to do with a camera before it leaves your hands for good?", options: ["Update it", "Initialize it", "Clean its sensor", "Reset its clock"], correctIndex: 1, explanation: "Before it goes, \"Sony says to initialize the camera\".", sourceLessonSlug: "check-in-and-retirement" },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 7: The money
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "depreciation",
      title: "23 · Depreciation in plain words",
      section: "7 · The money",
      recallContent: [
        {
          prompt: "Within how long after return does ShareGrid tell owners to report damage, and with what?",
          answer: "Within 24 hours of the equipment's return, with detailed photographs.",
        },
        {
          prompt: "What does Sony recommend when you discard a memory card?",
          answer: "Physically destroy it.",
        },
      ],
      body: `${QR("a CPA or enrolled agent, to check every tax statement in this lesson and how the listed-property rules apply to rental gear")}

**Talk to a tax professional first.** This section reads IRS publications at a beginner's level so that you know what to ask. It is not tax advice. The rules change from year to year, and which ones apply depends on your situation. Before you claim any deduction this section describes, ask a CPA or an enrolled agent.

**What depreciation is.** IRS Publication 946: "Depreciation is an annual income tax deduction that allows you to recover the cost or other basis of certain property over the time you use the property. It is an allowance for the wear and tear, deterioration, or obsolescence of the property."

**What can be depreciated.** The publication sets four requirements. Property "must be property you own"; it "must be used in your business or income-producing activity"; it "must have a determinable useful life"; and it "must be expected to last more than 1 year."

**When it starts and stops.** "You begin to depreciate your property when you place it in service for use in your trade or business or for the production of income." And: "Even if you are not using the property, it is in service when it is ready and available for its specific use." It stops when you have recovered the cost or retire the item, whichever comes first (lesson 22).

**Cameras are "listed property".** Publication 946's list of listed property includes "Property generally used for entertainment, recreation, or amusement (including photographic, phonographic, communication, and video recording equipment)." Listed property comes with a business-use test: it "must be used predominantly (more than 50% of its total use) for qualified business use." If it is not:

- It does not qualify for the section 179 deduction or the special depreciation allowance in the year it is placed in service (lesson 24).
- Depreciation "must be figured using the straight line method over the ADS recovery period."
- Excess depreciation from earlier years "must be recaptured (included in income)" in the first year the business use falls to 50 percent or less.

**The records rule.** "You cannot take any depreciation or section 179 deduction for the use of listed property unless you can prove your business/investment use with adequate records or with sufficient evidence to support your own statements." The records must support the amount of each expenditure, "such as the cost of acquiring the item, maintenance and repair costs"; the amount of business and investment use, measured by "time for other listed property", and the total use for the year; the date; and the business purpose. "For listed property, you must keep records for as long as any recapture can still occur."

**What this means for a rental owner.** This course's reading, for the reviewer to check: if you also use the camera for your own projects, keep a log of business days and personal days as you go, in the asset record's use field (lesson 9). Whether a particular use counts as "qualified business use" is a question for your tax professional.

**Two different depreciations.** Lesson 25's break-even uses the value you expect the gear to lose (what you paid minus what you expect to sell it for) to judge the business. Tax depreciation follows the IRS's methods and recovery periods, and the two numbers can differ. Do not use one in place of the other.

:::reveal How does IRS Publication 946 define depreciation? ||| An annual income tax deduction that recovers the cost or other basis of certain property over the time you use it; an allowance for wear and tear, deterioration or obsolescence.

:::reveal Which kinds of equipment does Publication 946 name as listed property used for entertainment, recreation or amusement? ||| Photographic, phonographic, communication, and video recording equipment.

:::reveal What business-use share must listed property have to qualify for section 179 or the special allowance? ||| More than 50 percent qualified business use.

## Sources
- ${IRS_P946} Locator: chapter 1, "Overview of Depreciation" (introduction), "What Property Can Be Depreciated?", "When Does Depreciation Begin and End?" and "Placed in Service"; chapter 5, "What Is Listed Property?", "What Is the Business-Use Requirement?" and "What Records Must Be Kept?"`,
    },
    {
      slug: "expensing",
      title: "24 · Expensing: section 179, the special allowance and small items",
      section: "7 · The money",
      recallContent: [
        {
          prompt: "Under IRS Publication 946, when does depreciation begin?",
          answer: "When you place the property in service, meaning it is ready and available for its specific use, even if you are not using it yet.",
        },
        {
          prompt: "What must listed property records support, according to Publication 946?",
          answer: "The amount of each expenditure; the amount of business and investment use (by time, for listed property other than vehicles) and total use; the date; and the business purpose.",
        },
      ],
      body: `${QR("a CPA or enrolled agent, to check every statement in this lesson and its reading of the trade-or-business condition")}

**Deducting sooner.** Lesson 23 described recovering a cost over years. IRS Publication 946 also describes ways to deduct some or all of it in the first year. Read them to know what to ask your tax professional, not to decide alone. The figures below are from the 2025 edition; check the current one.

**Section 179.** "You can elect to recover all or part of the cost of certain qualifying property, up to a limit, by deducting it in the year you place the property in service. This is the section 179 deduction." For 2025: "For tax years beginning in 2025, the maximum section 179 expense deduction is $2,500,000. This limit is reduced by the amount by which the cost of section 179 property placed in service during the tax year exceeds $4,000,000."

Two conditions matter to a rental owner:

- **It must be a trade or business.** "To qualify for the section 179 deduction, your property must have been acquired for use in your trade or business. Property you acquire only for the production of income, such as investment property, rental property (if renting property is not your trade or business), and property that produces royalties, does not qualify."
- **Business use over half.** "When you use property for both business and nonbusiness purposes, you can elect the section 179 deduction only if you use the property more than 50% for business in the year you place it in service." The publication's example: an item costing $11,000 used 80 percent for business has a business cost of $8,800.

**The special depreciation allowance.** Publication 946 says "P.L. 119-21, commonly known as the One Big Beautiful Bill Act, reinstated the 100% special depreciation allowance for certain qualified property acquired and placed in service after January 19, 2025", and that a taxpayer can instead "elect to take a 40% special depreciation allowance" for that property in the first tax year ending after January 19, 2025. Listed property used 50 percent or less for business does not qualify (lesson 23).

**Small items: the de minimis safe harbor.** The IRS's page on the tangible property regulations: "you may elect to apply a de minimis safe harbor to amounts paid to acquire or produce tangible property to the extent such amounts are deducted by you for financial accounting purposes or in keeping your books and records." A business without an applicable financial statement "may use the safe harbor to deduct amounts up to $2,500" per invoice or item, as substantiated by invoice. To elect it, "attach a statement titled 'Section 1.263(a)-1(f) de minimis safe harbor election' to the timely filed original federal tax return including extensions", and "you must apply the de minimis safe harbor to all expenditures meeting the criteria for the election in the taxable year."

**What this means for a rental owner.** This course's reading, for the reviewer:

- Whether renting gear is your "trade or business" matters twice: for section 179 here, and for where you report the income (lesson 26).
- A cable, a case or a battery may fall under the $2,500 de minimis line; a $4,298 camera body does not.
- Deducting sooner changes when you pay tax. It does not change what the gear earns, so lesson 25's break-even does not change.

:::reveal What was the maximum section 179 deduction for tax years beginning in 2025, and where did the reduction begin? ||| $2,500,000, reduced by the amount by which section 179 property placed in service that year cost more than $4,000,000.

:::reveal Does rental property qualify for section 179 if renting property is not your trade or business? ||| No. Property acquired only for the production of income, including such rental property, does not qualify.

:::reveal Without an applicable financial statement, up to what amount does the de minimis safe harbor reach? ||| $2,500 per invoice or item, as substantiated by invoice.

## Sources
- ${IRS_P946} Locator: "What's New for 2025" (section 179 dollar limits; special depreciation allowance); chapter 2 (the section 179 deduction), introduction, "Property Acquired for Business Use" and "Partial business use".
- ${IRS_TANGIBLE} Locator: "What is the de minimis safe harbor election?" and "How do you elect to use the de minimis safe harbor?"
- ${FOCUS_FX3A} Locator: price line.`,
    },
    {
      slug: "break-even",
      title: "25 · Break-even under three scenarios",
      section: "7 · The money",
      recallContent: [
        {
          prompt: "What did P.L. 119-21 do to the special depreciation allowance, according to Publication 946?",
          answer: "It reinstated the 100 percent special depreciation allowance for certain qualified property acquired and placed in service after January 19, 2025, with an election to take 40 percent instead.",
        },
        {
          prompt: "Why does this course say expensing does not change the break-even?",
          answer: "Deducting sooner changes when you pay tax, not what the gear earns.",
        },
      ],
      body: `${QR("a CPA or enrolled agent, to check the model's method and its labels; every input marked as an assumption is invented to show the method")}

**What this lesson is, and is not.** It is a method: a way to see how many paid days a kit needs before it covers its costs. It is not a forecast, and it is not a promise. Every input marked "assumption" below is invented to show the arithmetic. Put your own numbers in, and expect a different answer.

**The kit (two verified prices, one assumption).** A Sony FX3A body at $4,298 and a Teradek Bolt 6 LT set at $2,390, both listed on October 21, 2026, total $6,688. Add $1,312 of lens, batteries, cables and case (assumption), for $8,000.

**The inputs.**

| Input | Value |
|---|---|
| Life, and resale at the end | 3 years; 40 percent of cost (assumption) |
| Value lost per year | ($8,000 − $3,200) ÷ 3 = $1,600 |
| Insurance per year | $500 (assumption; one insurer's annual minimum was $495, lesson 17) |
| Listings, bookkeeping, admin per year | $300 (assumption) |
| Fixed costs per year | $800 |
| Dry-hire billed day | $150 listed (assumption), less the 15 percent platform fee ($22.50), less $32.50 of upkeep and handling time (assumption) = **$95** |
| Kit-fee day (you operate) | $150 (assumption), less $40 of upkeep, extra prep and transport (assumption) = **$110** |

Your labor is in neither day. Lesson 3 explains why.

**Break-even points.** This course's arithmetic, rounded up to whole days:

| Goal for one year | Kit-fee days only | Dry-hire days only |
|---|---|---|
| Cover fixed costs ($800) | 8 | 9 |
| Cover fixed costs and value lost ($2,400) | 22 | 26 |

**Three scenarios a year (assumptions).**

| | Low | Base | High |
|---|---|---|---|
| Kit-fee days | 5 | 15 | 30 |
| Dry-hire billed days | 5 | 15 | 30 |
| Money left after per-day costs | $1,025 | $3,075 | $6,150 |
| After fixed costs ($800) | $225 | $2,275 | $5,350 |
| After value lost ($1,600) | -$1,375 | $675 | $3,750 |
| Over three years, counting resale | -$4,125 | $2,025 | $11,250 |
| Simple cash payback of $8,000 | about 36 years | about 3.5 years | about 1.5 years |

**Change one input.** Raise insurance from $500 to $1,000 and the base case falls from $675 to $175 a year after value lost ($3,075 − $1,300 − $1,600).

**Reading the model.** This course's reading: the low case loses money; the base case barely clears the value the kit loses; the high case needs 60 rental days a year from one kit. A working operator's own jobs often fall on the same days renters want (lesson 5), so check the high case against your calendar before you believe it. The input that moves the answer most is utilization, which is why section 2 came first.

**Turn it into a kill rule.** Before you buy, write the pace below which you will sell. For example (an assumption, not advice): fewer than 15 paid days in the first six months, half the base case, means sell while resale is still high.

:::reveal In this lesson's model, how much does one kit-fee day contribute, and what is left out of it? ||| $110 after per-day costs; your labor is left out, because you could earn your day rate on a client's gear.

:::reveal In the model, how many kit-fee days a year cover fixed costs and value lost? ||| 22 ($2,400 ÷ $110 = 21.8, rounded up).

:::reveal What does the base case leave after fixed costs and value lost, and what happens if insurance doubles to $1,000? ||| $675 a year; with $1,000 insurance it falls to $175.

## Sources
- ${FOCUS_FX3A} Locator: price line.
- ${TERADEK_B6} Locator: price line.
- ${SG_FEES} Locator: "Rentals", owner fee.
- ${ATHOS} Locator: minimum premiums, annual production equipment.`,
    },
    {
      slug: "taxes-and-records",
      title: "26 · Taxes and records: where the income goes",
      section: "7 · The money",
      recallContent: [
        {
          prompt: "In lesson 25's model, how many dry-hire days a year cover fixed costs and value lost?",
          answer: "26 ($2,400 ÷ $95 = 25.3, rounded up).",
        },
        {
          prompt: "What does the model's high case require from one kit, and why does the lesson doubt it?",
          answer: "60 rental days a year; a working operator's own jobs often fall on the days renters want.",
        },
      ],
      body: `${QR("a CPA or enrolled agent, for every federal statement in this lesson; and a state tax professional for sales tax")}

**Is your rental a business?** IRS Publication 525 says that when you rent out personal property, "such as equipment or vehicles", how you report depends on "Whether or not the rental activity is a business, and Whether or not the rental activity is conducted for profit." It adds: "In most cases, if your primary purpose is income or profit and you're involved in the rental activity with continuity and regularity, your rental activity is a business."

- "If you're in the business of renting personal property, report your income and expenses on Schedule C (Form 1040)."
- "If you aren't in the business of renting personal property, report your rental income on Schedule 1 (Form 1040), line 8l." Expenses of renting for profit go on line 24b.
- "If you don't rent personal property for profit, your deductions are limited and you can't report a loss to offset other income."

**Income counts whether or not a form arrives.** The IRS's gig economy page lists "Rent equipment" as gig work and says income must be reported "even if the income is" not on an information return such as Form 1099-K, 1099-MISC or 1099-NEC.

**What payers report.** The instructions for Forms 1099-MISC and 1099-NEC tell payers to "Enter amounts of $2,000 or more for all types of rents" in box 1, and say the minimum reporting threshold for certain payments "increased to $2,000" for tax years beginning after 2025. Lesson 3 quoted the same instructions on splitting a machine's rent from its operator's charge, which is one more reason to invoice them separately.

**Self-employment tax.** The IRS says: "Generally, your net earnings from self-employment are subject to self-employment tax. If you are self-employed as a sole proprietor or independent contractor, you generally use Schedule C to figure net earnings from self-employment." The rate "is 15.3%": 12.4 percent for Social Security and 2.9 percent for Medicare. You must pay it if your net earnings from self-employment were "$400 or more." This course's reading, for the reviewer: a rental business reported on Schedule C generally feeds this tax, so set money aside for it.

**Sales tax is a state question.** The U.S. Small Business Administration says "Tax laws vary by location and business structure, so you'll need to check with state and local governments to know your business' tax obligations." This course found no single federal source that says whether your state taxes the rental of production equipment, so it says nothing about any state's rule. Ask your state's department of revenue before your first rental.

**Which legal form?** Whether you rent as a sole proprietor or through an entity is its own decision. Two catalog courses teach it: *What a Business Entity Actually Is* (lesson "2 · An entity is a separate legal person you create") and *The US Forms: Sole Prop to Corporation* (lessons "5 · Sole proprietorship: you, doing business" and "10 · The LLC: the modern default").

**Keep the records.** Publication 583: keep records "until the period of limitations for that return runs out", keep asset records until the period expires for the year you dispose of the item (lesson 9), and before you discard anything, check whether "your insurance company or creditors may require you to keep them longer than the IRS does."

:::reveal Under Publication 525, where do you report income if you are in the business of renting personal property? ||| On Schedule C (Form 1040).

:::reveal From what amount do the current 1099-MISC instructions tell payers to report rents in box 1? ||| $2,000 or more.

:::reveal What is the self-employment tax rate, and what two parts make it up? ||| 15.3 percent: 12.4 percent for Social Security and 2.9 percent for Medicare.

## Sources
- ${IRS_P525} Locator: "Rents From Personal Property" and its three reporting paragraphs.
- ${IRS_GIG} Locator: "What is the gig economy?" list of gig work; "Gig income is taxable".
- ${IRS_1099} Locator: "What's New", threshold increase; "Specific Instructions for Form 1099-MISC", "Box 1. Rents".
- ${IRS_SE} Locator: "Self-employment tax rate"; "Who must pay self-employment tax".
- ${SBA_TAXES} Locator: "Determine your state tax obligations".
- ${IRS_P583} Locator: "How Long To Keep Records" ("Period of limitations", "Assets", "Records for nontax purposes").`,
    },
    {
      slug: "section-7-quiz",
      title: "Section 7 quiz · The money",
      section: "7 · The money",
      body: "A graded check on depreciation and listed property, section 179, the special allowance and the de minimis safe harbor, the break-even model's method and its labeled assumptions, and where rental income is reported. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "Before you claim any deduction section 7 describes, whom does lesson 23 tell you to ask?", options: ["A CPA or an enrolled agent", "The platform's support team", "The camera maker's dealer", "A rental house's manager"], correctIndex: 0, explanation: "\"Before you claim any deduction this section describes, ask a CPA or an enrolled agent.\" A platform, a dealer or a rental house is not who the lesson names.", sourceLessonSlug: "depreciation" },
          { prompt: "How does lesson 25 describe what its model is?", options: ["A forecast for one kit", "A method, not a forecast", "A promise of a payback", "A tax return worksheet"], correctIndex: 1, explanation: "\"It is a method: a way to see how many paid days a kit needs before it covers its costs. It is not a forecast, and it is not a promise.\" It is not a tax worksheet either.", sourceLessonSlug: "break-even" },
          { prompt: "How does Publication 946 describe depreciation?", options: ["A one-time credit for buying new business equipment", "A yearly fee the IRS charges on owned business gear", "An annual deduction recovering cost over time of use", "A tax charged on the resale value of used equipment"], correctIndex: 2, explanation: "\"Depreciation is an annual income tax deduction that allows you to recover the cost or other basis of certain property over the time you use the property.\" It is not a credit, a fee or a tax on resale.", sourceLessonSlug: "depreciation" },
          { prompt: "According to Publication 946, depreciation is an allowance for what?", options: ["Rental income lost while the gear sits unused", "Insurance premiums paid on business equipment", "Platform fees taken from each billed rental", "Wear and tear, deterioration, or obsolescence"], correctIndex: 3, explanation: "\"It is an allowance for the wear and tear, deterioration, or obsolescence of the property.\" Idle days, premiums and platform fees are other costs.", sourceLessonSlug: "depreciation" },
          { prompt: "Which of these is one of Publication 946's four requirements for depreciable property?", options: ["It must be property you own", "It must cost more than $2,500", "It must be bought brand new", "It must be insured for loss"], correctIndex: 0, explanation: "Property \"must be property you own\". The four requirements say nothing about a price floor, buying new, or insurance.", sourceLessonSlug: "depreciation" },
          { prompt: "Publication 946 says depreciable property must be expected to last how long?", options: ["At least 3 years", "More than 1 year", "At least 5 years", "More than 6 months"], correctIndex: 1, explanation: "It \"must be expected to last more than 1 year.\" Three years appears only as lesson 25's assumed life, not as an IRS requirement.", sourceLessonSlug: "depreciation" },
          { prompt: "Which requirement for depreciable property does Publication 946 state?", options: ["It must be rented out at least 50 days", "It must be listed on a rental platform", "It must have a determinable useful life", "It must be bought from an authorized dealer"], correctIndex: 2, explanation: "Property \"must have a determinable useful life.\" No requirement counts rental days, platform listings or where it was bought.", sourceLessonSlug: "depreciation" },
          { prompt: "Which use does Publication 946 require of depreciable property?", options: ["Used only by you and never lent to anyone else", "Used on at least one paid job every single month", "Used for at least half of every calendar year", "Used in your business or income-producing activity"], correctIndex: 3, explanation: "It \"must be used in your business or income-producing activity.\" The publication sets no monthly or calendar test, and lending is not barred.", sourceLessonSlug: "depreciation" },
          { prompt: "When does Publication 946 say you begin to depreciate property?", options: ["When you place it in service", "When you first rent it out", "When you first file a return", "When the warranty ends"], correctIndex: 0, explanation: "\"You begin to depreciate your property when you place it in service for use in your trade or business or for the production of income.\" The first rental, a return and the warranty do not start it.", sourceLessonSlug: "depreciation" },
          { prompt: "Under Publication 946, is an item in service if it is ready for use but you are not using it?", options: ["No, not until it earns its first rental fee", "Yes, if it is ready and available for its use", "No, not until it is used on a paid job", "Yes, but only once it has been insured"], correctIndex: 1, explanation: "\"Even if you are not using the property, it is in service when it is ready and available for its specific use.\" Earning a fee, a paid job or insurance is not the test.", sourceLessonSlug: "depreciation" },
          { prompt: "Lesson 23 says depreciation stops at which of these points, whichever comes first?", options: ["Warranty expired or item sold", "Three years pass or item sold", "Cost recovered or item retired", "Insurance ends or item retired"], correctIndex: 2, explanation: "It stops when you have recovered the cost or retire the item, whichever comes first (lesson 22). Warranties, a three-year mark and insurance do not stop it.", sourceLessonSlug: "depreciation" },
          { prompt: "Why are cameras \"listed property\" under Publication 946?", options: ["Every item over $2,500 is listed property by rule", "Any gear rented to others becomes listed property", "Rental platforms must list them with the IRS", "The list names photographic and video recording gear"], correctIndex: 3, explanation: "Listed property includes property used for entertainment, recreation, or amusement \"(including photographic, phonographic, communication, and video recording equipment).\" Price, renting and platforms are not the reason.", sourceLessonSlug: "depreciation" },
          { prompt: "Which category of listed property names photographic equipment?", options: ["Property used for entertainment, recreation, or amusement", "Property used mostly for the transportation of goods", "Property used to produce royalties or license fees", "Property held by a bailee for another business owner"], correctIndex: 0, explanation: "The category reads \"Property generally used for entertainment, recreation, or amusement (including photographic, phonographic, communication, and video recording equipment).\"", sourceLessonSlug: "depreciation" },
          { prompt: "What business-use share does listed property need to meet Publication 946's business-use requirement?", options: ["At least 25 percent", "More than 50 percent", "At least 75 percent", "More than 90 percent"], correctIndex: 1, explanation: "It \"must be used predominantly (more than 50% of its total use) for qualified business use.\"", sourceLessonSlug: "depreciation" },
          { prompt: "If a camera is used 50 percent or less for business, how must its MACRS depreciation be figured?", options: ["Declining balance over a five-year period", "In full in the year it is placed in service", "Straight line over the ADS recovery period", "Only in the year the item is finally sold"], correctIndex: 2, explanation: "Depreciation \"must be figured using the straight line method over the ADS recovery period.\" Deducting it in full in the first year is exactly what the item loses.", sourceLessonSlug: "depreciation" },
          { prompt: "What happens to excess depreciation when business use of listed property falls to 50 percent or less?", options: ["It is refunded by the IRS in cash", "It is carried to the next owner", "It is forgiven after three years", "It must be recaptured as income"], correctIndex: 3, explanation: "Excess depreciation from earlier years \"must be recaptured (included in income)\" in the first year the business use falls to 50 percent or less.", sourceLessonSlug: "depreciation" },
          { prompt: "What must you be able to prove to take depreciation on listed property?", options: ["Business use, with adequate records", "Insurance in force for the full year", "A dealer's receipt for a new item", "A platform rating of four stars"], correctIndex: 0, explanation: "You cannot take it \"unless you can prove your business/investment use with adequate records or with sufficient evidence to support your own statements.\"", sourceLessonSlug: "depreciation" },
          { prompt: "For listed property other than vehicles, how does Publication 946 say use is measured?", options: ["By miles", "By time", "By rentals", "By income"], correctIndex: 1, explanation: "The records must support use measured by \"time for other listed property\". Miles is the measure for vehicles.", sourceLessonSlug: "depreciation" },
          { prompt: "How long must records for listed property be kept, per Publication 946?", options: ["Exactly three years after the purchase", "Until the item's warranty has expired", "As long as any recapture can still occur", "Until the renter's final payment clears"], correctIndex: 2, explanation: "\"For listed property, you must keep records for as long as any recapture can still occur.\"", sourceLessonSlug: "depreciation" },
          { prompt: "Where does lesson 23 say to keep the log of business and personal days?", options: ["On the rental platform's listing", "In the camera's own settings menu", "On the renter's signed agreement", "In the asset record's use field"], correctIndex: 3, explanation: "Keep a log of business days and personal days as you go, \"in the asset record's use field (lesson 9).\"", sourceLessonSlug: "depreciation" },
          { prompt: "Who does lesson 23 say should decide whether a particular use counts as \"qualified business use\"?", options: ["Your tax professional", "The rental platform", "The camera's maker", "Your insurance agent"], correctIndex: 0, explanation: "\"Whether a particular use counts as 'qualified business use' is a question for your tax professional.\"", sourceLessonSlug: "depreciation" },
          { prompt: "What does lesson 25's break-even use in place of tax depreciation, per lesson 23?", options: ["The IRS recovery period for the item's class", "Value expected to be lost: cost minus resale", "The section 179 limit for the current year", "The platform's replacement value for the item"], correctIndex: 1, explanation: "Lesson 25 uses \"the value you expect the gear to lose (what you paid minus what you expect to sell it for)\". Tax depreciation follows IRS methods instead.", sourceLessonSlug: "depreciation" },
          { prompt: "What does lesson 23 say about using tax depreciation in place of the break-even's value lost?", options: ["Do it; the IRS figure is the same", "Do it only for listed property items", "Do not; the two numbers can differ", "Do it only after the first full year"], correctIndex: 2, explanation: "\"The two numbers can differ. Do not use one in place of the other.\"", sourceLessonSlug: "depreciation" },
          { prompt: "What is the section 179 deduction, in Publication 946's words?", options: ["Spreading a qualifying cost evenly over five tax years", "Crediting the sales tax paid on qualifying equipment", "Deducting rental income lost while gear sits idle", "Deducting a qualifying cost in the year placed in service"], correctIndex: 3, explanation: "\"You can elect to recover all or part of the cost of certain qualifying property, up to a limit, by deducting it in the year you place the property in service.\"", sourceLessonSlug: "expensing" },
          { prompt: "For tax years beginning in 2025, what was the maximum section 179 expense deduction?", options: ["$2,500,000", "$4,000,000", "$1,250,000", "$2,500"], correctIndex: 0, explanation: "\"For tax years beginning in 2025, the maximum section 179 expense deduction is $2,500,000.\" $4,000,000 is where the reduction begins; $2,500 is the de minimis line.", sourceLessonSlug: "expensing" },
          { prompt: "Above what cost of section 179 property placed in service in 2025 did the limit start to shrink?", options: ["$2,500,000", "$4,000,000", "$1,000,000", "$5,000,000"], correctIndex: 1, explanation: "The limit \"is reduced by the amount by which the cost of section 179 property placed in service during the tax year exceeds $4,000,000.\" $2,500,000 is the limit itself.", sourceLessonSlug: "expensing" },
          { prompt: "How is the 2025 section 179 limit reduced once that threshold is passed?", options: ["By half of all costs incurred", "By 40 percent of the limit", "By the cost over $4,000,000", "By the year's rental income"], correctIndex: 2, explanation: "It is reduced \"by the amount by which the cost of section 179 property placed in service during the tax year exceeds $4,000,000.\"", sourceLessonSlug: "expensing" },
          { prompt: "Under Publication 946, does rental property qualify for section 179 when renting is not your trade or business?", options: ["Yes, if it is used more than half for rentals", "Yes, if the property cost less than $2,500", "No, unless it is also used for personal work", "No, it is property for the production of income"], correctIndex: 3, explanation: "\"Property you acquire only for the production of income, such as investment property, rental property (if renting property is not your trade or business), and property that produces royalties, does not qualify.\"", sourceLessonSlug: "expensing" },
          { prompt: "What must property have been acquired for to qualify for section 179?", options: ["Use in your trade or business", "Resale within twelve months", "Personal use and investment", "Lending to family members"], correctIndex: 0, explanation: "\"To qualify for the section 179 deduction, your property must have been acquired for use in your trade or business.\"", sourceLessonSlug: "expensing" },
          { prompt: "Which of these does Publication 946 list as not qualifying for section 179?", options: ["Equipment used in your business", "Property that produces royalties", "Gear bought for your own trade", "Tools used every working day"], correctIndex: 1, explanation: "The excluded list includes \"property that produces royalties\", along with investment property and rental property when renting is not your trade or business.", sourceLessonSlug: "expensing" },
          { prompt: "When property has both business and personal use, when can you elect section 179?", options: ["Only if personal use is over 50%", "Only if it was bought brand new", "Only if business use is over 50%", "Only if it costs under $2,500"], correctIndex: 2, explanation: "\"You can elect the section 179 deduction only if you use the property more than 50% for business in the year you place it in service.\"", sourceLessonSlug: "expensing" },
          { prompt: "In Publication 946's example, what is the business cost of an $11,000 item used 80 percent for business?", options: ["$2,200", "$11,000", "$9,900", "$8,800"], correctIndex: 3, explanation: "80 percent of $11,000 is $8,800. $2,200 is the personal 20 percent.", sourceLessonSlug: "expensing" },
          { prompt: "What did P.L. 119-21 do to the special depreciation allowance, per Publication 946?", options: ["Reinstated 100% for property after January 19, 2025", "Ended it for all property after January 19, 2025", "Cut it to 40% for all property bought in 2025", "Limited it to items costing under $2,500 each"], correctIndex: 0, explanation: "It \"reinstated the 100% special depreciation allowance for certain qualified property acquired and placed in service after January 19, 2025\". The 40 percent figure is an election, not a cut.", sourceLessonSlug: "expensing" },
          { prompt: "Instead of the 100% allowance, what may a taxpayer elect for that property in the first tax year ending after January 19, 2025?", options: ["A 60% section 179 limit", "A 40% special allowance", "A 25% recapture credit", "A 15% platform credit"], correctIndex: 1, explanation: "A taxpayer can instead \"elect to take a 40% special depreciation allowance\" for that property in that year.", sourceLessonSlug: "expensing" },
          { prompt: "Which listed property does not qualify for the special allowance, per lessons 23 and 24?", options: ["Listed property bought used from a dealer", "Listed property insured under a floater", "Listed property used 50% or less for business", "Listed property rented through a platform"], correctIndex: 2, explanation: "\"Listed property used 50 percent or less for business does not qualify (lesson 23).\" Buying used, insurance and platforms are not the test.", sourceLessonSlug: "expensing" },
          { prompt: "What does the de minimis safe harbor let a business do, per the IRS page?", options: ["Skip reporting rental income under a set yearly amount", "Avoid paying sales tax on equipment costing under $2,500", "Treat every camera purchase as a deductible repair cost", "Deduct small tangible property costs it books as expenses"], correctIndex: 3, explanation: "You may apply it \"to amounts paid to acquire or produce tangible property to the extent such amounts are deducted by you for financial accounting purposes or in keeping your books and records.\"", sourceLessonSlug: "expensing" },
          { prompt: "Without an applicable financial statement, what is the de minimis limit?", options: ["$2,500 per invoice or item", "$5,000 per invoice or item", "$2,500 per tax year in total", "$500 per invoice or per item"], correctIndex: 0, explanation: "A business without one \"may use the safe harbor to deduct amounts up to $2,500\" per invoice or item, as substantiated by invoice. It is not a yearly total.", sourceLessonSlug: "expensing" },
          { prompt: "How is the de minimis safe harbor elected, per the IRS page?", options: ["A form mailed to the IRS within thirty days of purchase", "A statement attached to the timely filed original return", "A box checked on the seller's invoice at time of purchase", "A letter sent to the state's department of revenue first"], correctIndex: 1, explanation: "\"Attach a statement titled 'Section 1.263(a)-1(f) de minimis safe harbor election' to the timely filed original federal tax return including extensions\".", sourceLessonSlug: "expensing" },
          { prompt: "If you elect the de minimis safe harbor, to which expenditures must you apply it that year?", options: ["Only the ones you choose to include", "Only purchases of cameras and lenses", "All that meet the election's criteria", "Only items bought from one retailer"], correctIndex: 2, explanation: "\"You must apply the de minimis safe harbor to all expenditures meeting the criteria for the election in the taxable year.\" You cannot pick and choose.", sourceLessonSlug: "expensing" },
          { prompt: "Per lesson 24, does a $4,298 camera body fall under the $2,500 de minimis line?", options: ["Yes, any single camera counts", "Yes, if it is bought on credit", "No, cameras are never eligible", "No, it costs more than $2,500"], correctIndex: 3, explanation: "\"A cable, a case or a battery may fall under the $2,500 de minimis line; a $4,298 camera body does not.\" The reason is its price, not that cameras are barred.", sourceLessonSlug: "expensing" },
          { prompt: "Which items does lesson 24 say may fall under the de minimis line?", options: ["A cable, a case or a battery", "A camera body and its lenses", "A full rental kit in its case", "A gimbal and a wireless set"], correctIndex: 0, explanation: "\"A cable, a case or a battery may fall under the $2,500 de minimis line\".", sourceLessonSlug: "expensing" },
          { prompt: "According to lesson 24, what does deducting sooner change?", options: ["What gear earns", "When you pay tax", "Which days bill", "Who owns the gear"], correctIndex: 1, explanation: "\"Deducting sooner changes when you pay tax. It does not change what the gear earns\".", sourceLessonSlug: "expensing" },
          { prompt: "Why does lesson 24 say expensing leaves lesson 25's break-even unchanged?", options: ["It raises the kit's resale value at the end", "It lowers the platform fee on every booking", "It changes tax timing, not what the gear earns", "It removes insurance from the yearly costs"], correctIndex: 2, explanation: "It changes when you pay tax and \"does not change what the gear earns, so lesson 25's break-even does not change.\"", sourceLessonSlug: "expensing" },
          { prompt: "In lesson 24, whether renting is your \"trade or business\" matters for which two things?", options: ["Sales tax and the platform's owner fee", "Insurance and the guarantee's limit", "Resale value and the kit fee you charge", "Section 179 and where you report income"], correctIndex: 3, explanation: "It \"matters twice: for section 179 here, and for where you report the income (lesson 26).\"", sourceLessonSlug: "expensing" },
          { prompt: "Which edition's figures does lesson 24 quote, and what does it tell you to check?", options: ["The 2025 edition; check the current one", "The 2020 edition; check with the dealer", "The 2026 edition; check with a platform", "The 2023 edition; check the state's site"], correctIndex: 0, explanation: "\"The figures below are from the 2025 edition; check the current one.\"", sourceLessonSlug: "expensing" },
          { prompt: "In lesson 25's model, which two verified prices start the kit total?", options: ["Used FX3 $3,549 and Bolt 4K kit $6,890", "FX3A $4,298 and Bolt 6 LT set $2,390", "FX3A $4,298 and a $1,312 lens kit", "Used FX3 $3,929 and Bolt 6 LT $2,390"], correctIndex: 1, explanation: "\"A Sony FX3A body at $4,298 and a Teradek Bolt 6 LT set at $2,390, both listed on October 21, 2026, total $6,688.\" The $1,312 is an assumption, not a verified price.", sourceLessonSlug: "break-even" },
          { prompt: "In lesson 25's model, what does the kit cost in total?", options: ["$6,688", "$4,298", "$8,000", "$9,312"], correctIndex: 2, explanation: "$6,688 of verified prices plus $1,312 of assumed accessories is $8,000. $6,688 leaves out the accessories.", sourceLessonSlug: "break-even" },
          { prompt: "In lesson 25's model, what life and resale value are assumed?", options: ["5 years; 20 percent of cost", "3 years; 60 percent of cost", "2 years; 50 percent of cost", "3 years; 40 percent of cost"], correctIndex: 3, explanation: "The inputs table: \"3 years; 40 percent of cost (assumption)\".", sourceLessonSlug: "break-even" },
          { prompt: "In lesson 25's model, how much value does the kit lose each year?", options: ["$1,600", "$2,667", "$3,200", "$4,800"], correctIndex: 0, explanation: "($8,000 − $3,200) ÷ 3 = $1,600. $3,200 is the resale and $4,800 the total loss over three years.", sourceLessonSlug: "break-even" },
          { prompt: "In lesson 25's model, what are the fixed costs per year?", options: ["$500", "$800", "$300", "$1,600"], correctIndex: 1, explanation: "$500 of insurance plus $300 of listings, bookkeeping and admin: $800. $1,600 is the value lost, a separate line.", sourceLessonSlug: "break-even" },
          { prompt: "Why does lesson 25 set insurance at $500 a year?", options: ["The average Insureon reported for floaters", "The fee the platform requires of owners", "An assumption near one insurer's $495 minimum", "The premium on a homeowners endorsement"], correctIndex: 2, explanation: "\"$500 (assumption; one insurer's annual minimum was $495, lesson 17)\".", sourceLessonSlug: "break-even" },
          { prompt: "In lesson 25's model, what does one dry-hire billed day contribute?", options: ["$150", "$110", "$127.50", "$95"], correctIndex: 3, explanation: "$150 less the $22.50 platform fee less $32.50 of upkeep and handling = $95. $110 is the kit-fee day.", sourceLessonSlug: "break-even" },
          { prompt: "How does lesson 25 get the dry-hire day's $95?", options: ["$150 less $22.50 fee less $32.50 costs", "$150 less $40 of upkeep and transport", "$110 less $15 of cleaning and charging", "$127.50 less $32.50 in platform fees"], correctIndex: 0, explanation: "\"$150 listed (assumption), less the 15 percent platform fee ($22.50), less $32.50 of upkeep and handling time (assumption) = $95\". $150 less $40 is the kit-fee day.", sourceLessonSlug: "break-even" },
          { prompt: "What is subtracted from the $150 kit-fee day in lesson 25's model?", options: ["A 15 percent platform fee of $22.50", "$40 of upkeep, extra prep and transport", "Your $550.70 day rate as an operator", "$32.50 of handling time and cleaning"], correctIndex: 1, explanation: "\"$150 (assumption), less $40 of upkeep, extra prep and transport (assumption) = $110\". No platform fee applies, and your labor is left out.", sourceLessonSlug: "break-even" },
          { prompt: "Why is your labor in neither of lesson 25's day figures?", options: ["The platform pays your labor separately each day", "Labor is a tax deduction the model already counts", "You could earn your day rate on a client's gear", "Union rules forbid adding labor to gear income"], correctIndex: 2, explanation: "\"Your labor is in neither day. Lesson 3 explains why\": you could earn your day rate running a client's gear, so it is not something your gear earned.", sourceLessonSlug: "break-even" },
          { prompt: "In lesson 25's model, how many kit-fee days alone cover fixed costs and value lost?", options: ["26", "8", "9", "22"], correctIndex: 3, explanation: "$2,400 ÷ $110 = 21.8, rounded up to 22. Twenty-six is the dry-hire figure; 8 and 9 cover fixed costs only.", sourceLessonSlug: "break-even" },
          { prompt: "Why is lesson 25's break-even for dry hire higher than for kit-fee days?", options: ["A dry-hire day contributes $95 against $110", "Dry hire carries the full value lost twice", "Kit-fee days carry no fixed costs at all", "Dry hire must also cover your labor cost"], correctIndex: 0, explanation: "Both must cover the same $2,400, and a dry-hire day contributes $95 against $110 for a kit-fee day, so dry hire needs 26 days against 22.", sourceLessonSlug: "break-even" },
          { prompt: "In lesson 25's base case, what is left after fixed costs and value lost?", options: ["$2,275", "$675", "$175", "$3,075"], correctIndex: 1, explanation: "$3,075 − $800 − $1,600 = $675. $2,275 is before value lost; $175 is the result with $1,000 insurance.", sourceLessonSlug: "break-even" },
          { prompt: "In lesson 25's low case, what happens after fixed costs and value lost?", options: ["A gain of $225 a year", "A gain of $675 a year", "A loss of $1,375 a year", "A loss of $4,125 a year"], correctIndex: 2, explanation: "The low case shows -$1,375 after value lost. $225 is before value lost, and -$4,125 is the three-year figure.", sourceLessonSlug: "break-even" },
          { prompt: "In lesson 25's high case, how many rental days a year does one kit need?", options: ["30", "15", "10", "60"], correctIndex: 3, explanation: "\"The high case needs 60 rental days a year from one kit\": 30 kit-fee days and 30 dry-hire days.", sourceLessonSlug: "break-even" },
          { prompt: "In lesson 25's model, about how long is the simple cash payback in the base case?", options: ["About 3.5 years", "About 1.5 years", "About 36 years", "About 7 years"], correctIndex: 0, explanation: "$8,000 ÷ $2,275 is about 3.5 years. About 1.5 years is the high case and about 36 years the low case.", sourceLessonSlug: "break-even" },
          { prompt: "In lesson 25's model, what does raising insurance to $1,000 do to the base case after value lost?", options: ["It rises from $675 to $1,175", "It falls from $675 to $175", "It falls from $675 to a loss", "It stays at $675 each year"], correctIndex: 1, explanation: "\"Raise insurance from $500 to $1,000 and the base case falls from $675 to $175 a year after value lost ($3,075 − $1,300 − $1,600).\"", sourceLessonSlug: "break-even" },
          { prompt: "Which input does lesson 25 say moves the answer most?", options: ["Insurance", "Resale value", "Utilization", "The platform fee"], correctIndex: 2, explanation: "\"The input that moves the answer most is utilization, which is why section 2 came first.\"", sourceLessonSlug: "break-even" },
          { prompt: "Why does lesson 25 doubt the high case?", options: ["Insurers refuse kits rented 60 days", "Platforms cap rentals at 30 days a year", "Resale value falls to zero after year one", "Your own jobs fall on days renters want"], correctIndex: 3, explanation: "\"A working operator's own jobs often fall on the same days renters want (lesson 5), so check the high case against your calendar before you believe it.\"", sourceLessonSlug: "break-even" },
          { prompt: "What example kill rule does lesson 25 give, as an assumption?", options: ["Fewer than 15 paid days in six months means sell", "Fewer than 60 paid days in a full year means sell", "Any month without one booking means sell the kit", "A single damage claim in a year means sell at once"], correctIndex: 0, explanation: "\"Fewer than 15 paid days in the first six months, half the base case, means sell while resale is still high.\" It is labeled an assumption, not advice.", sourceLessonSlug: "break-even" },
          { prompt: "Per Publication 525, what two things decide how you report rent from personal property?", options: ["Whether it is insured and for profit", "Whether it is a business and for profit", "Whether it is shipped or picked up", "Whether it is new or bought used"], correctIndex: 1, explanation: "It depends on \"Whether or not the rental activity is a business, and Whether or not the rental activity is conducted for profit.\"", sourceLessonSlug: "taxes-and-records" },
          { prompt: "When is a personal property rental usually a business, per Publication 525?", options: ["The owner rents through a platform at least once a year", "The gear is worth more than $2,500 in replacement value", "Profit is the main purpose, with continuity and regularity", "The owner has a written agreement for every rental"], correctIndex: 2, explanation: "\"In most cases, if your primary purpose is income or profit and you're involved in the rental activity with continuity and regularity, your rental activity is a business.\"", sourceLessonSlug: "taxes-and-records" },
          { prompt: "If you are in the business of renting personal property, where do you report, per Publication 525?", options: ["Schedule 1, line 8l", "Schedule E (Form 1040)", "Form 1099-MISC, box 1", "Schedule C (Form 1040)"], correctIndex: 3, explanation: "\"If you're in the business of renting personal property, report your income and expenses on Schedule C (Form 1040).\" Schedule 1 is for renting that is not a business.", sourceLessonSlug: "taxes-and-records" },
          { prompt: "If you rent personal property for profit but not as a business, where does the income go?", options: ["Schedule 1 (Form 1040), line 8l", "Schedule C (Form 1040), line 1", "Schedule SE (Form 1040), line 2", "Schedule 1 (Form 1040), line 24b"], correctIndex: 0, explanation: "\"Report your rental income on Schedule 1 (Form 1040), line 8l.\" Line 24b takes the expenses, not the income.", sourceLessonSlug: "taxes-and-records" },
          { prompt: "Where do the expenses of renting for profit, but not as a business, go per Publication 525?", options: ["Schedule 1, line 8l", "Schedule 1, line 24b", "Schedule C, line 24b", "Schedule SE, line 8l"], correctIndex: 1, explanation: "\"Expenses of renting for profit go on line 24b\" of Schedule 1. Line 8l takes the income.", sourceLessonSlug: "taxes-and-records" },
          { prompt: "What does Publication 525 say if you do not rent personal property for profit?", options: ["All expenses are deductible but the income is not taxed", "The income goes on Schedule C as a business activity", "Deductions are limited and no loss offsets other income", "The rental income is exempt below $2,000 a year"], correctIndex: 2, explanation: "\"If you don't rent personal property for profit, your deductions are limited and you can't report a loss to offset other income.\"", sourceLessonSlug: "taxes-and-records" },
          { prompt: "Which kind of gig work on the IRS's gig economy page matches this course?", options: ["Sell insurance", "Repair cameras", "Teach classes", "Rent equipment"], correctIndex: 3, explanation: "The page lists \"Rent equipment\" as gig work.", sourceLessonSlug: "taxes-and-records" },
          { prompt: "Per the IRS's gig economy page, must gig income be reported if no Form 1099 arrives?", options: ["Yes, even if not on an information return", "No, only income shown on a Form 1099-K", "No, only if the platform withholds tax", "Yes, but only above $2,000 in a year"], correctIndex: 0, explanation: "Income must be reported \"even if the income is\" not on an information return such as Form 1099-K, 1099-MISC or 1099-NEC. The $2,000 figure is the payer's reporting threshold, not yours.", sourceLessonSlug: "taxes-and-records" },
          { prompt: "From what amount do the 1099-MISC instructions tell payers to report rents in box 1?", options: ["$600 or more", "$2,000 or more", "$400 or more", "$5,000 or more"], correctIndex: 1, explanation: "\"Enter amounts of $2,000 or more for all types of rents\" in box 1. $400 is the self-employment tax figure.", sourceLessonSlug: "taxes-and-records" },
          { prompt: "For which tax years did the minimum reporting threshold rise to $2,000, per the 1099 instructions?", options: ["Tax years beginning after 2020", "Tax years ending before 2025", "Tax years beginning after 2025", "Only the 2025 tax year itself"], correctIndex: 2, explanation: "The minimum threshold \"increased to $2,000\" for tax years beginning after 2025.", sourceLessonSlug: "taxes-and-records" },
          { prompt: "Which IRS rule does lesson 26 call one more reason to invoice gear and labor separately?", options: ["Reporting all rents of $2,000 or more", "Using Schedule C for a rental business", "Keeping asset records until disposal", "Splitting a machine's rent from its operator"], correctIndex: 3, explanation: "Lesson 3 quoted the same instructions \"on splitting a machine's rent from its operator's charge, which is one more reason to invoice them separately.\"", sourceLessonSlug: "taxes-and-records" },
          { prompt: "What does the IRS say is generally true of net earnings from self-employment?", options: ["They are subject to self-employment tax", "They are exempt below $2,000 a year", "They are taxed only by the states", "They are reported on Form 1099-K"], correctIndex: 0, explanation: "\"Generally, your net earnings from self-employment are subject to self-employment tax.\"", sourceLessonSlug: "taxes-and-records" },
          { prompt: "What is the self-employment tax rate, per the IRS?", options: ["12.4%", "15.3%", "2.9%", "7.65%"], correctIndex: 1, explanation: "The rate \"is 15.3%\": 12.4 percent for Social Security and 2.9 percent for Medicare. Those two are its parts, not the rate.", sourceLessonSlug: "taxes-and-records" },
          { prompt: "What do 12.4 percent and 2.9 percent stand for in the self-employment tax?", options: ["Federal and state income tax", "Medicare and unemployment", "Social Security and Medicare", "Social Security and sales tax"], correctIndex: 2, explanation: "The 15.3 percent rate is 12.4 percent for Social Security and 2.9 percent for Medicare.", sourceLessonSlug: "taxes-and-records" },
          { prompt: "At what net earnings from self-employment must you pay the tax, per the IRS?", options: ["$2,000 or more", "$600 or more", "$4,000 or more", "$400 or more"], correctIndex: 3, explanation: "You must pay it if your net earnings from self-employment were \"$400 or more.\" $2,000 is the 1099 reporting threshold.", sourceLessonSlug: "taxes-and-records" },
          { prompt: "What does lesson 26 advise because a Schedule C rental business generally feeds self-employment tax?", options: ["Set money aside for it", "Rent only to companies", "Skip the Schedule SE", "Report it on Form 4562"], correctIndex: 0, explanation: "\"A rental business reported on Schedule C generally feeds this tax, so set money aside for it.\"", sourceLessonSlug: "taxes-and-records" },
          { prompt: "Where does the SBA tell businesses to check their tax obligations?", options: ["With their rental platform's support", "With state and local governments", "With the camera maker's dealer", "With the IRS gig economy page only"], correctIndex: 1, explanation: "\"You'll need to check with state and local governments to know your business' tax obligations.\"", sourceLessonSlug: "taxes-and-records" },
          { prompt: "What does lesson 26 say about any state's rule on taxing equipment rentals?", options: ["It says every state taxes equipment rentals", "It says no state taxes equipment rentals", "It says nothing, for lack of a federal source", "It says only rentals over $2,000 are taxed"], correctIndex: 2, explanation: "\"This course found no single federal source that says whether your state taxes the rental of production equipment, so it says nothing about any state's rule.\"", sourceLessonSlug: "taxes-and-records" },
          { prompt: "Whom does lesson 26 tell you to ask about sales tax before your first rental?", options: ["The rental platform's support team", "The IRS's gig economy tax center", "The insurer that covers your gear", "Your state's department of revenue"], correctIndex: 3, explanation: "\"Ask your state's department of revenue before your first rental.\"", sourceLessonSlug: "taxes-and-records" },
          { prompt: "Which catalog course does lesson 26 point to for choosing a legal form?", options: ["The US Forms: Sole Prop to Corporation", "Break Into Sports & Media Broadcasting", "Rigging for Stage and Broadcast Crews", "Light on Set, the third CREW course"], correctIndex: 0, explanation: "Lesson 26 names What a Business Entity Actually Is and The US Forms: Sole Prop to Corporation for the choice of legal form.", sourceLessonSlug: "taxes-and-records" },
          { prompt: "Per Publication 583, how long should records supporting a return generally be kept?", options: ["Until the gear it covers is sold off", "Until its period of limitations runs out", "For exactly one year after you file", "Until the platform deletes its data"], correctIndex: 1, explanation: "Keep records \"until the period of limitations for that return runs out\". Asset records follow their own rule, tied to the year you dispose of the item.", sourceLessonSlug: "taxes-and-records" },
          { prompt: "Before discarding records the IRS no longer needs, what does Publication 583 say to check?", options: ["Whether the platform still shows the rental", "Whether the renter has left a final review", "Whether insurers or creditors need them longer", "Whether the gear's warranty has run out"], correctIndex: 2, explanation: "Check whether \"your insurance company or creditors may require you to keep them longer than the IRS does.\"", sourceLessonSlug: "taxes-and-records" },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 8: Growing it
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "listings-and-reputation",
      title: "27 · Listings and reputation",
      section: "8 · Growing it",
      recallContent: [
        {
          prompt: "Under Publication 525, when is renting personal property usually a business?",
          answer: "In most cases, when your primary purpose is income or profit and you are involved in the rental activity with continuity and regularity.",
        },
        {
          prompt: "What does the SBA say about state tax obligations?",
          answer: "Tax laws vary by location and business structure, so check with state and local governments to know your business's tax obligations.",
        },
      ],
      body: `**Reputation is the asset that does not depreciate.** A kit can be bought by anyone. A record of on-time, clean, working rentals takes months to build, and it is what wins the next booking. This lesson reads one platform's own advice on building it.

**What ShareGrid tells owners to do.** Its tips page lists nine:

1. "Create a Comprehensive Description: Clearly describe your gear and any special notes the renter should be aware of."
2. "Upload High-Quality Photos: Ensure your photos are accurate and show your gear clearly."
3. "Respond Promptly: Please answer renters' questions and requests as quickly as possible."
4. "Be Available: Be accessible to resolve any issues within 24 hours of the renter picking up the equipment."
5. "Be Punctual: Arrive on time for both the pick-up and return exchanges."
6. "Maintain Your Gear: Keep your equipment clean, in good working order, and ready for use."
7. "Verify ID: Check the renter's ID at the start of the rental."
8. "Leave Feedback: Provide feedback and a rating after each rental to help build the renter's reputation."
9. "Follow Community Rules: Be courteous and adhere to ShareGrid's Community Rules."

**What its search ranking rewards.** ShareGrid's "Best Match" ranking names "Elite Status" ("Achieving and maintaining Elite Status boosts your listing's visibility"), "Fair Market Pricing", "Positive Reviews", fast response times and a high response rate, up-to-date availability and a high acceptance rate, and the "Number and Variety of Listings". It blends in new owners and listings "to give everyone a fair chance to earn credibility in the marketplace." Reviews run both ways: owners rate renters too.

**A listing that does the work.** This course's checklist, built from the tips above and earlier lessons:

- A title that names the model and says what kind of package it is.
- The full kit list from lesson 10, with every item named, so the guarantee covers it (lesson 9).
- Photos of every item, matching the list.
- An accurate replacement value, kept current (lesson 9).
- Your weekend and week rules in words (lesson 14), and your pickup and return windows.
- When you can be reached during the rental.

**Off the platform, the same rules.** This course's reasoning: a production company that rents your kit directly judges you by the same things the platform measures (answers, timing, condition), and it remembers. Keep a list of every client: what they rented, when, what went well, and whether they booked again. Rebooking is the clearest sign your reputation is working, and the best evidence for lesson 29's decision.

:::reveal Name four of the nine tips ShareGrid gives owners. ||| Any four of: comprehensive description; high-quality photos; respond promptly; be available within 24 hours of pickup; be punctual; maintain your gear; verify ID; leave feedback; follow community rules.

:::reveal Why does ShareGrid say owners should leave feedback after each rental? ||| To help build the renter's reputation.

:::reveal What does this course call the clearest sign that your reputation is working? ||| Clients booking again.

## Sources
- ${SG_TIPS} Locator: the nine tips.
- ${SG_BEST_MATCH} Locator: the ranking factors and the closing paragraph on new owners.`,
    },
    {
      slug: "relationships-and-unions",
      title: "28 · Relationships, productions and the union question",
      section: "8 · Growing it",
      recallContent: [
        {
          prompt: "Name three factors in ShareGrid's Best Match ranking.",
          answer: "Any three of: Elite Status; fair market pricing; positive reviews; fast response times and a high response rate; up-to-date availability and a high acceptance rate; number and variety of listings.",
        },
        {
          prompt: "What should a client list record, according to this course?",
          answer: "What each client rented, when, what went well, and whether they booked again.",
        },
      ],
      body: `${P("a working owner-operator or crew coordinator, for how bookings with production trucks and production companies are actually made and who approves a kit fee on a show; and a union business agent, for how a local's contracts treat a member's own kit")}

**Two halves.** This lesson has a documented half and a practitioner's half. The documents say a good deal about how gear is priced and paid for, and very little about how a crew member's kit gets onto a show. That half will come from practitioners, named at the top, before the lesson is released.

**What the documents say.**

1. **On major shows, someone else sets the wireless.** At NFL events, "uncoordinated devices are prohibited", and licensed broadcast auxiliary stations go only to stations and network entities (lesson 7). The show decides what gear may be used, and you fit your kit to it.
2. **The kit is its own line.** A published rate guide says kit rentals are separate line items on the production budget, and the IRS instructions for Form 1099-MISC tell a payer to split a machine's rent from its operator's charge (lessons 3 and 13). Invoice them separately from the start, so a production's paperwork matches yours.
3. **One union rate card says nothing about kit.** IATSE Local 796's rates card lists day rates and has no line about equipment, kit or box rental. Lesson 3 named the gap: no published rule this course found says how a union call pays a member for their own kit.

**What to ask a practitioner.** This course's questions, to bring to a crew coordinator, a production manager or an owner-operator who already rents to productions:

1. Who books specialty camera or sound packages on the shows I want to work, and how far ahead?
2. Which production trucks or companies carry their own packages, and which rent?
3. Who approves a kit fee on a show, and on what paperwork?
4. What insurance certificate, loss payee or liability limit will they ask me to show?
5. If I work union calls, does my local's contract cover a member's own gear, and how is it paid?

**Where the catalog goes further.** *Break Into Sports & Media Broadcasting* covers the crew side of getting work in "14 · Internships, freelancing, and building credits" and "15 · Unions, networking, and landing the first job". This lesson adds only the gear.

:::reveal At NFL events, what does the league's page say about uncoordinated wireless devices? ||| They are prohibited.

:::reveal What did IATSE Local 796's rates card say about a member's own kit? ||| Nothing; it lists day rates and has no line about equipment, kit or box rental.

:::reveal Name two of the five questions this lesson tells you to bring to a practitioner. ||| Any two of: who books specialty packages and how far ahead; which trucks or companies carry their own; who approves a kit fee and on what paperwork; what insurance certificate, loss payee or liability limit they ask for; how a union contract treats a member's own gear.

## Sources
- ${NFL_EFC} Locator: paragraph on policy.
- ${CFR_74_600} Locator: the section's single paragraph.
- ${RATE_GUIDE} Locator: the kit rental rates paragraph.
- ${IRS_1099} Locator: "Box 1. Rents", the machine rentals paragraph.
- ${IATSE_796} Locator: the whole rates card.`,
    },
    {
      slug: "a-second-kit",
      title: "29 · When to add a second kit",
      section: "8 · Growing it",
      recallContent: [
        {
          prompt: "What are the two halves of lesson 28?",
          answer: "A documented half (what the documents say about pricing, paperwork and wireless) and a practitioner's half (how kit actually gets booked onto shows, and how union contracts treat a member's own gear).",
        },
        {
          prompt: "Why does this course tell you to invoice the kit fee separately from the start?",
          answer: "Rate guides treat kit rental as its own budget line and the IRS tells payers to split a machine's rent from its operator's charge, so your paperwork should match the production's.",
        },
      ],
      body: `**The test is turned-away bookings.** This course's reasoning: a second kit earns only from bookings the first kit had to turn down. If the first kit sits idle on the days a second would be busy, the second kit adds cost and little income. So keep a log of every request you could not fill: the date, the item, the days, the price offered, and why you said no.

**Run the model again for kit two.** Using lesson 25's base-case inputs (all assumptions): a second identical kit adds $1,600 a year of value lost and, say, $300 a year more insurance (assumption). At $95 per dry-hire day, 20 turned-away billed days a year would bring $1,900, which just covers $300 plus $1,600. Fewer than about 20 such days, and the second kit loses money on these assumptions.

**A different second item may beat a duplicate.** If your log shows requests for something you do not own (a different lens, a wireless link, a sound package), lesson 7's test applies to that item instead. ShareGrid's ranking also counts the "Number and Variety of Listings", so a different item may help the first kit's listings too.

**Limits that do not grow with you.** Two of the protections in section 5 have ceilings that a bigger inventory reaches:

- ShareGrid's Owner Guarantee covers "up to $20,000 in cumulative Replacement Value" for in-person rentals, and "This is a cumulative limit, not a per-rental limit." Two kits out at once can pass it. It also allows "a maximum of two (2) eligible claims per 12 calendar months for each Owner account."
- One insurer listed a "$100K maximum for Equipment Rented To Others and Voluntary Parting Coverage."

This course's reading: as the value you have out at one time grows, the guarantee covers less of it, and your own insurance has to carry more (lessons 17 and 18). Ask your agent before you buy the second kit, not after.

**Your calendar is the other limit.** A second kit can rent while you operate the first. That is its best case. But every kit adds check-in, cleaning, charging and testing time (section 6). If you cannot do that work without losing paid days of your own, count those days as a cost.

**A decision rule to adapt.** This course's suggestion, with assumption-based thresholds you should replace: buy a second item only when your log shows at least the break-even number of turned-away days in the past year, your insurance covers the higher value out at once, and you have the hours to turn both kits around.

:::reveal According to this lesson, what is the test for a second kit? ||| Turned-away bookings: a second kit earns only from requests the first kit had to turn down.

:::reveal On lesson 25's assumptions, about how many turned-away dry-hire days a year would a second identical kit need to break even? ||| About 20 ($1,900 at $95 a day covers $300 more insurance plus $1,600 of value lost).

:::reveal Is ShareGrid's Owner Guarantee limit per rental? ||| No. It is cumulative: up to $20,000 in replacement value out at any one time for in-person rentals.

## Sources
- ${SG_GUARANTEE} Locator: opening paragraph; "Do I still need voluntary parting coverage?"; "Eligibility", claim limit.
- ${ATHOS} Locator: the rented-to-others and voluntary parting maximum.
- ${SG_BEST_MATCH} Locator: "Number and Variety of Listings".`,
    },
    {
      slug: "capstone-written-plan",
      title: "30 · Capstone: a written plan with a kill rule",
      section: "8 · Growing it",
      recallContent: [
        {
          prompt: "What should a turned-away bookings log record?",
          answer: "The date, the item, the days, the price offered, and why you said no.",
        },
        {
          prompt: "What maximum did one insurer list for equipment rented to others and voluntary parting coverage?",
          answer: "$100,000.",
        },
      ],
      body: `**The assignment.** Write a one-page plan for the gear you own or want to buy. Each part comes from a lesson, and each part has to rest on something you can show: a price list with its date, a named renter, a written rule. If a part rests on a hope, mark it as one.

**The eight parts.**

1. **Demand (lesson 4).** Name three productions, crews or companies who rent this item now, what they rent, how often and from whom. Attach the local and national price lists you read, with dates.
2. **Own or rent (lesson 7).** For each item, the four answers: billed days a year, rentals that equal its price, who decides whether it may be used, and whether a newer model is due.
3. **Buy (lessons 8 to 10).** New or used, with the arithmetic; the kit list from the job backward; the asset record's fields, filled in.
4. **Price (lessons 11 to 14).** Your dated rate sheet: day, weekend rule, week rule, what reaches you after fees, and your kit fee on its own line.
5. **Protect (lessons 15 to 18).** Your agreement checklist, which waiver or insurance you require from renters, your own policy (with the answers to lesson 17's seven questions), and your ID and pickup rules.
6. **Operate (lessons 19 to 22).** Your pre-rental checklist, battery log, cleaning steps and check-in routine, with the time each takes.
7. **Money (lessons 23 to 26).** The break-even model with your own inputs, three scenarios, and the questions you will take to a tax professional.
8. **Grow (lessons 27 to 29).** What your listing will say, who you will ask for work, and the log that will tell you when a second item is earned.

**The kill rule.** At the bottom, write one sentence in this form: "If I have fewer than __ paid days by __, I will sell __." Pick the number from your model before you buy, while you can still be objective about it. A kill rule written after the purchase tends to bend.

**The review date.** Put a date on the plan three or six months out, and on that date compare what happened with what you wrote: the bookings, the rates paid, the hours spent, and whether clients booked again.

**What a good plan looks like.** It can say no. A plan that ends "do not buy yet; rent the item for two paid jobs first and see" is a good result. This course has not promised that renting gear will pay; its purpose is to make sure that if it does not, you find out early and cheaply.

:::reveal What form does this lesson give for the kill rule? ||| "If I have fewer than __ paid days by __, I will sell __", written before you buy.

:::reveal Why does this lesson say to write the kill rule before the purchase? ||| So you can still be objective about it; a kill rule written after the purchase tends to bend.

:::reveal Can a good plan end with "do not buy yet"? ||| Yes. A plan that says to rent the item for paid jobs first and see is a good result.

## Sources
- No new sources. This assignment uses the sources cited in lessons 4 to 29.`,
    },
    {
      slug: "section-8-quiz",
      title: "Section 8 quiz · Growing it",
      section: "8 · Growing it",
      body: "A graded check on listings and reputation, what the documents say about getting kit onto a show and the union question, when a second kit is earned, and the capstone plan with its kill rule. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "What does lesson 27 call the asset that does not depreciate?", options: ["Reputation", "The kit list", "Replacement value", "The rate sheet"], correctIndex: 0, explanation: "\"Reputation is the asset that does not depreciate.\" A kit can be bought by anyone; a record of good rentals takes months.", sourceLessonSlug: "listings-and-reputation" },
          { prompt: "Why does lesson 27 say reputation wins the next booking?", options: ["A platform ranks every owner by the price of the kit", "On-time, clean, working rentals take months to build", "Renters only ever book owners who belong to a union", "A kit bought new always outranks one bought used"], correctIndex: 1, explanation: "\"A record of on-time, clean, working rentals takes months to build, and it is what wins the next booking.\"", sourceLessonSlug: "listings-and-reputation" },
          { prompt: "Which ShareGrid tip tells owners to answer renters' questions and requests as quickly as possible?", options: ["Be Punctual", "Be Available", "Respond Promptly", "Verify ID"], correctIndex: 2, explanation: "\"Respond Promptly: Please answer renters' questions and requests as quickly as possible.\" Be Punctual is about pickup and return times.", sourceLessonSlug: "listings-and-reputation" },
          { prompt: "Within how long of pickup does ShareGrid's \"Be Available\" tip ask owners to be reachable to resolve issues?", options: ["Within 48 hours", "Within 2 hours", "Within 7 days", "Within 24 hours"], correctIndex: 3, explanation: "\"Be accessible to resolve any issues within 24 hours of the renter picking up the equipment.\"", sourceLessonSlug: "listings-and-reputation" },
          { prompt: "What does ShareGrid's \"Be Punctual\" tip ask of owners?", options: ["Arrive on time for pickup and return", "Answer every message within an hour", "List new gear on the day it arrives", "Return deposits on the day of check-in"], correctIndex: 0, explanation: "\"Be Punctual: Arrive on time for both the pick-up and return exchanges.\"", sourceLessonSlug: "listings-and-reputation" },
          { prompt: "What does ShareGrid's \"Upload High-Quality Photos\" tip ask for?", options: ["Photos taken by a professional in a studio setting", "Photos that are accurate and show the gear clearly", "Photos of the serial number on every single item", "Photos of each renter holding the gear at pickup"], correctIndex: 1, explanation: "\"Ensure your photos are accurate and show your gear clearly.\" The tip does not ask for a studio, serial numbers or renters in the frame.", sourceLessonSlug: "listings-and-reputation" },
          { prompt: "What is the purpose of leaving feedback, per ShareGrid's tips?", options: ["To raise the owner's search ranking", "To claim the owner guarantee later", "To help build the renter's reputation", "To unlock a lower owner service fee"], correctIndex: 2, explanation: "\"Provide feedback and a rating after each rental to help build the renter's reputation.\"", sourceLessonSlug: "listings-and-reputation" },
          { prompt: "Which ranking factor does ShareGrid say boosts a listing's visibility when achieved and maintained?", options: ["Owner Guarantee", "Damage Only", "Community Fee", "Elite Status"], correctIndex: 3, explanation: "\"Achieving and maintaining Elite Status boosts your listing's visibility.\" The guarantee, the Damage Only option and the community fee are not ranking factors.", sourceLessonSlug: "listings-and-reputation" },
          { prompt: "Which of these is a factor in ShareGrid's Best Match ranking?", options: ["Number and variety of listings", "Years the owner has held gear", "Age of the owner's equipment", "Union membership of the owner"], correctIndex: 0, explanation: "The ranking names the \"Number and Variety of Listings\" along with Elite Status, pricing, reviews, responsiveness and acceptance rate.", sourceLessonSlug: "listings-and-reputation" },
          { prompt: "In lesson 27, what reason does ShareGrid give for mixing new listings into its rankings?", options: ["To test new owners before full approval is given", "To give everyone a fair chance to earn credibility", "To keep prices lower for every renter on the site", "To fill gaps in the catalog for rare gear types"], correctIndex: 1, explanation: "It blends in new owners and listings \"to give everyone a fair chance to earn credibility in the marketplace.\"", sourceLessonSlug: "listings-and-reputation" },
          { prompt: "According to lesson 27, do ShareGrid reviews run only from renters to owners?", options: ["Yes, only renters leave ratings", "No, only ShareGrid staff rate", "No, owners rate renters too", "Yes, owners may only reply"], correctIndex: 2, explanation: "\"Reviews run both ways: owners rate renters too.\"", sourceLessonSlug: "listings-and-reputation" },
          { prompt: "Which item belongs on lesson 27's listing checklist?", options: ["The renter's photo ID scanned in advance", "Your home address for faster pickups", "A promise of income for the renter", "The full kit list with every item named"], correctIndex: 3, explanation: "The checklist includes \"The full kit list from lesson 10, with every item named\".", sourceLessonSlug: "listings-and-reputation" },
          { prompt: "Why does lesson 27 say a listing should name every item in the kit?", options: ["So the guarantee covers it", "So the platform fee falls", "So renters pay sales tax", "So insurers waive deductibles"], correctIndex: 0, explanation: "Every item named, \"so the guarantee covers it (lesson 9).\"", sourceLessonSlug: "listings-and-reputation" },
          { prompt: "Off the platform, what does lesson 27 say a production company judges you by?", options: ["Your union card and day rate", "Answers, timing and condition", "The age and brand of your kit", "Your follower count online"], correctIndex: 1, explanation: "It \"judges you by the same things the platform measures (answers, timing, condition), and it remembers.\"", sourceLessonSlug: "listings-and-reputation" },
          { prompt: "Which client behavior does lesson 27 treat as the best evidence that your reputation works?", options: ["Paying early", "Leaving a tip", "Booking again", "Haggling less"], correctIndex: 2, explanation: "\"Rebooking is the clearest sign your reputation is working\".", sourceLessonSlug: "listings-and-reputation" },
          { prompt: "What does lesson 27 say a client list should record?", options: ["Their address, ID number and credit card number", "Their union local, day rate and agent's name", "The serial numbers of items they once damaged", "What they rented, when, what went well, rebooking"], correctIndex: 3, explanation: "Keep a list of every client: \"what they rented, when, what went well, and whether they booked again.\"", sourceLessonSlug: "listings-and-reputation" },
          { prompt: "How does lesson 28 describe its two halves?", options: ["A documented half and a practitioner's half", "A legal half and an insurance agent's half", "A union half and a production company half", "A platform half and a rental house half"], correctIndex: 0, explanation: "\"This lesson has a documented half and a practitioner's half.\"", sourceLessonSlug: "relationships-and-unions" },
          { prompt: "Which half of lesson 28 will come from practitioners before release?", options: ["How the IRS taxes rentals", "How kit gets onto a show", "What the NFL page says", "What a rate card lists"], correctIndex: 1, explanation: "The documents say little \"about how a crew member's kit gets onto a show. That half will come from practitioners\".", sourceLessonSlug: "relationships-and-unions" },
          { prompt: "What do the documents in lesson 28 say about who sets the wireless on major shows?", options: ["The operator picks any link that works", "The rental house supplies it for each show", "The show sets it; you fit your kit to it", "The platform approves each owner's link"], correctIndex: 2, explanation: "\"The show decides what gear may be used, and you fit your kit to it.\"", sourceLessonSlug: "relationships-and-unions" },
          { prompt: "Which word does the NFL's page use for uncoordinated devices at its events, as lesson 28 quotes it?", options: ["Discouraged", "Registered", "Licensed", "Prohibited"], correctIndex: 3, explanation: "At NFL events, \"uncoordinated devices are prohibited\".", sourceLessonSlug: "relationships-and-unions" },
          { prompt: "Who may hold licensed broadcast auxiliary stations, per lesson 28's summary?", options: ["Stations and network entities", "Any crew member who applies", "Rental houses and platforms", "Union locals and their members"], correctIndex: 0, explanation: "Licensed broadcast auxiliary stations \"go only to stations and network entities (lesson 7).\"", sourceLessonSlug: "relationships-and-unions" },
          { prompt: "Why does lesson 28 tell you to invoice the kit separately from the start?", options: ["So the platform can collect a larger fee", "So a production's paperwork matches yours", "So the union can bill the kit as wages", "So the kit fee avoids sales tax entirely"], correctIndex: 1, explanation: "\"Invoice them separately from the start, so a production's paperwork matches yours.\"", sourceLessonSlug: "relationships-and-unions" },
          { prompt: "Which two sources does lesson 28 cite for keeping the kit on its own line?", options: ["The NFL's page and 47 C.F.R. § 74.600", "ShareGrid's tips and the Lenscap page", "A rate guide and the 1099-MISC instructions", "Sony's help guide and the TSA battery page"], correctIndex: 2, explanation: "A published rate guide says kit rentals are separate budget lines, and the 1099-MISC instructions split a machine's rent from its operator's charge.", sourceLessonSlug: "relationships-and-unions" },
          { prompt: "What does lesson 28 say IATSE Local 796's rates card says about kit?", options: ["It pays kit at 10 percent a day", "It bans members' own equipment", "It sets a flat box rental fee", "Nothing; it lists day rates only"], correctIndex: 3, explanation: "The card \"lists day rates and has no line about equipment, kit or box rental.\"", sourceLessonSlug: "relationships-and-unions" },
          { prompt: "What gap did lesson 3 name, as lesson 28 repeats it?", options: ["No published rule on paying for a member's kit", "No published rate for camera operator labor", "No rule on insuring gear rented to others", "No federal rule on licensing wireless links"], correctIndex: 0, explanation: "\"No published rule this course found says how a union call pays a member for their own kit.\" Labor rates were published (lesson 3).", sourceLessonSlug: "relationships-and-unions" },
          { prompt: "Which is one of lesson 28's questions to bring to a practitioner?", options: ["Which camera brand will rent best next year?", "Who approves a kit fee, on what paperwork?", "How much does the platform charge renters?", "What is the sales tax rate in each state?"], correctIndex: 1, explanation: "Question 3: \"Who approves a kit fee on a show, and on what paperwork?\"", sourceLessonSlug: "relationships-and-unions" },
          { prompt: "Lesson 28 suggests asking which production trucks or companies do what?", options: ["Pay the highest day rates in the area", "Hire only union crew for every show", "Carry their own packages, and which rent", "Require operators to bring cameras"], correctIndex: 2, explanation: "Question 2: \"Which production trucks or companies carry their own packages, and which rent?\"", sourceLessonSlug: "relationships-and-unions" },
          { prompt: "Which insurance items does lesson 28 suggest asking productions about?", options: ["Deductible, premium and agent's license", "Homeowners policy, endorsement and rider", "Waiver fee, claim fee and guarantee cap", "Certificate, loss payee or liability limit"], correctIndex: 3, explanation: "Question 4: \"What insurance certificate, loss payee or liability limit will they ask me to show?\"", sourceLessonSlug: "relationships-and-unions" },
          { prompt: "For union members, what does lesson 28 suggest asking?", options: ["Whether the contract covers a member's own gear", "Whether the local will buy gear for its members", "Whether union dues cover gear insurance costs", "Whether a member may rent gear on ShareGrid"], correctIndex: 0, explanation: "Question 5: \"If I work union calls, does my local's contract cover a member's own gear, and how is it paid?\"", sourceLessonSlug: "relationships-and-unions" },
          { prompt: "Which catalog course covers the crew side of getting work, per lesson 28?", options: ["What a Business Entity Actually Is", "Break Into Sports & Media Broadcasting", "The US Forms: Sole Prop to Corporation", "Rigging for Stage and Broadcast Crews"], correctIndex: 1, explanation: "\"Break Into Sports & Media Broadcasting covers the crew side of getting work\" in its lessons 14 and 15.", sourceLessonSlug: "relationships-and-unions" },
          { prompt: "Which lesson of that broadcasting course does lesson 28 name for unions and networking?", options: ["14 · Internships, freelancing, and building credits", "3 · The utility technician: your fastest way in", "15 · Unions, networking, and landing the first job", "1 · The landscape: who does what on a broadcast"], correctIndex: 2, explanation: "Lesson 28 names \"14 · Internships, freelancing, and building credits\" and \"15 · Unions, networking, and landing the first job\"; the second covers unions.", sourceLessonSlug: "relationships-and-unions" },
          { prompt: "What does lesson 28 say it adds to what the broadcasting course covers?", options: ["Only the unions", "Only the taxes", "Only the jobs", "Only the gear"], correctIndex: 3, explanation: "\"This lesson adds only the gear.\"", sourceLessonSlug: "relationships-and-unions" },
          { prompt: "Who does lesson 28 suggest bringing its questions to?", options: ["A crew coordinator, production manager or owner-operator", "A rental platform's support team or its insurance partner", "An insurance agent, a CPA or an enrolled agent for taxes", "A camera maker's service center or an authorized dealer"], correctIndex: 0, explanation: "The questions are \"to bring to a crew coordinator, a production manager or an owner-operator who already rents to productions.\"", sourceLessonSlug: "relationships-and-unions" },
          { prompt: "What does lesson 29 say a second kit earns from?", options: ["Higher prices than the first kit can charge", "Bookings the first kit had to turn down", "A larger share of the platform's fee", "Tax deductions for a second purchase"], correctIndex: 1, explanation: "\"A second kit earns only from bookings the first kit had to turn down.\"", sourceLessonSlug: "a-second-kit" },
          { prompt: "Which set of details does lesson 29's turned-away log keep?", options: ["Renter's name, ID number and address", "Item, serial number and replacement value", "Date, item, days, price offered, reason", "Platform, fee, rating and review text"], correctIndex: 2, explanation: "Log \"the date, the item, the days, the price offered, and why you said no.\"", sourceLessonSlug: "a-second-kit" },
          { prompt: "In lesson 29, what does a second identical kit add each year, on lesson 25's assumptions?", options: ["$800 of fixed costs and $1,600 of value lost", "$300 of fixed costs and no added value lost", "$2,400 of costs and $95 per day of income", "$1,600 of value lost and $300 more insurance"], correctIndex: 3, explanation: "It \"adds $1,600 a year of value lost and, say, $300 a year more insurance (assumption).\"", sourceLessonSlug: "a-second-kit" },
          { prompt: "On lesson 25's assumptions, what do 20 turned-away dry-hire days bring a second kit?", options: ["$1,900", "$2,200", "$3,000", "$1,600"], correctIndex: 0, explanation: "20 days at $95 is $1,900. $1,600 is the value lost it must cover.", sourceLessonSlug: "a-second-kit" },
          { prompt: "In lesson 29's arithmetic, what does that $1,900 cover?", options: ["The first kit's $800 of fixed costs only", "$300 more insurance plus $1,600 lost value", "Two years of the second kit's value lost", "Both kits' insurance for a full year"], correctIndex: 1, explanation: "\"20 turned-away billed days a year would bring $1,900, which just covers $300 plus $1,600.\"", sourceLessonSlug: "a-second-kit" },
          { prompt: "On lesson 25's assumptions, what happens with fewer than about 20 turned-away days?", options: ["The first kit loses money", "The guarantee stops paying", "The second kit loses money", "Insurance costs fall by half"], correctIndex: 2, explanation: "\"Fewer than about 20 such days, and the second kit loses money on these assumptions.\"", sourceLessonSlug: "a-second-kit" },
          { prompt: "If your log shows requests for an item you do not own, what does lesson 29 suggest?", options: ["Buy a duplicate of your first kit", "Raise the first kit's day rate", "Decline those requests for a year", "Apply lesson 7's test to that item"], correctIndex: 3, explanation: "\"If your log shows requests for something you do not own ... lesson 7's test applies to that item instead.\"", sourceLessonSlug: "a-second-kit" },
          { prompt: "Why might a different second item help the first kit's listings, per lesson 29?", options: ["ShareGrid counts number and variety", "It lowers the owner's platform fee", "It extends the guarantee to $40,000", "It raises the first kit's resale"], correctIndex: 0, explanation: "ShareGrid's ranking \"counts the 'Number and Variety of Listings', so a different item may help the first kit's listings too.\"", sourceLessonSlug: "a-second-kit" },
          { prompt: "How does ShareGrid's guarantee limit work when two kits are out at once?", options: ["It doubles to $40,000 for two kits out", "It is cumulative, up to $20,000 in total", "It covers each rental up to $20,000", "It drops to $7,500 for the second kit"], correctIndex: 1, explanation: "\"This is a cumulative limit, not a per-rental limit.\" Two kits out at once can pass it.", sourceLessonSlug: "a-second-kit" },
          { prompt: "How many eligible guarantee claims per 12 calendar months does each owner account get?", options: ["One", "Three", "Two", "Five"], correctIndex: 2, explanation: "\"A maximum of two (2) eligible claims per 12 calendar months for each Owner account.\"", sourceLessonSlug: "a-second-kit" },
          { prompt: "Lesson 29 quotes one insurer's ceiling on rented-to-others and voluntary parting coverage. What is it?", options: ["$20,000", "$7,500", "$50K", "$100K"], correctIndex: 3, explanation: "\"$100K maximum for Equipment Rented To Others and Voluntary Parting Coverage.\" $20,000 and $7,500 are ShareGrid's guarantee limits.", sourceLessonSlug: "a-second-kit" },
          { prompt: "As the value out at one time grows, what does lesson 29 say happens?", options: ["The guarantee covers less; insurance carries more", "The guarantee rises to match the value out", "The platform fee drops for owners with more gear", "The insurer lowers the deductible on each kit"], correctIndex: 0, explanation: "\"As the value you have out at one time grows, the guarantee covers less of it, and your own insurance has to carry more.\"", sourceLessonSlug: "a-second-kit" },
          { prompt: "When does lesson 29 say to ask your agent about a second kit?", options: ["After the first claim", "Before you buy it", "After a year of rentals", "When you renew a policy"], correctIndex: 1, explanation: "\"Ask your agent before you buy the second kit, not after.\"", sourceLessonSlug: "a-second-kit" },
          { prompt: "What does lesson 29 call a second kit's best case?", options: ["It rents only on your own days off", "It sits ready as a spare for repairs", "It rents while you operate the first", "It sells for more than it cost new"], correctIndex: 2, explanation: "\"A second kit can rent while you operate the first. That is its best case.\"", sourceLessonSlug: "a-second-kit" },
          { prompt: "What work does lesson 29 say every added kit brings?", options: ["Union filings, permits and licenses", "New platform accounts for each kit", "A separate tax return for each kit", "Check-in, cleaning, charging and testing"], correctIndex: 3, explanation: "\"Every kit adds check-in, cleaning, charging and testing time (section 6).\"", sourceLessonSlug: "a-second-kit" },
          { prompt: "Which three conditions does lesson 29's decision rule set before buying a second item?", options: ["Enough turned-away days, insurance, and hours", "A loan, a second vehicle, and a storage unit", "Five reviews, Elite Status, and a union card", "A new model release, a sale price, and cash"], correctIndex: 0, explanation: "Buy only when the log shows the break-even number of turned-away days, \"your insurance covers the higher value out at once, and you have the hours to turn both kits around.\"", sourceLessonSlug: "a-second-kit" },
          { prompt: "What does lesson 29 say about the thresholds in its decision rule?", options: ["They are set by the IRS each year", "They are assumptions to replace", "They come from ShareGrid's terms", "They are fixed by an insurer"], correctIndex: 1, explanation: "It gives the rule \"with assumption-based thresholds you should replace\".", sourceLessonSlug: "a-second-kit" },
          { prompt: "What does lesson 30's assignment ask you to write?", options: ["A rental agreement for a renter", "A listing for a rental platform", "A one-page plan for your gear", "An insurance claim for a loss"], correctIndex: 2, explanation: "\"Write a one-page plan for the gear you own or want to buy.\"", sourceLessonSlug: "capstone-written-plan" },
          { prompt: "What must each part of the capstone plan rest on?", options: ["A forecast of income", "An expert's opinion", "A platform's ranking", "Something you can show"], correctIndex: 3, explanation: "\"Each part has to rest on something you can show: a price list with its date, a named renter, a written rule.\"", sourceLessonSlug: "capstone-written-plan" },
          { prompt: "What does lesson 30 say to do if a part of your plan rests on a hope?", options: ["Mark it as one", "Delete the part", "Ask the renter", "Raise the price"], correctIndex: 0, explanation: "\"If a part rests on a hope, mark it as one.\"", sourceLessonSlug: "capstone-written-plan" },
          { prompt: "How many parts does the capstone plan have?", options: ["Six", "Eight", "Ten", "Five"], correctIndex: 1, explanation: "The plan has eight parts: demand, own or rent, buy, price, protect, operate, money and grow.", sourceLessonSlug: "capstone-written-plan" },
          { prompt: "Which part of the plan names three productions, crews or companies who rent the item now?", options: ["Protect", "Operate", "Demand", "Grow"], correctIndex: 2, explanation: "\"Demand (lesson 4). Name three productions, crews or companies who rent this item now\".", sourceLessonSlug: "capstone-written-plan" },
          { prompt: "In the plan's \"Own or rent\" part, what do you give for each item?", options: ["Its serial number only", "A photo and a price", "Its insurance limit", "Lesson 7's four answers"], correctIndex: 3, explanation: "\"For each item, the four answers\" from lesson 7: billed days, rentals that equal its price, who decides its use, and whether a newer model is due.", sourceLessonSlug: "capstone-written-plan" },
          { prompt: "Which part of the plan holds your dated rate sheet and kit fee line?", options: ["Price", "Buy", "Money", "Grow"], correctIndex: 0, explanation: "\"Price (lessons 11 to 14). Your dated rate sheet ... and your kit fee on its own line.\"", sourceLessonSlug: "capstone-written-plan" },
          { prompt: "Which part of the plan holds the break-even model with your own inputs?", options: ["Price", "Money", "Demand", "Operate"], correctIndex: 1, explanation: "\"Money (lessons 23 to 26). The break-even model with your own inputs, three scenarios\".", sourceLessonSlug: "capstone-written-plan" },
          { prompt: "In the plan's \"Operate\" part, what goes with each checklist and routine?", options: ["The renter's rating", "The platform's fee", "The time each takes", "The insurer's limit"], correctIndex: 2, explanation: "\"Your pre-rental checklist, battery log, cleaning steps and check-in routine, with the time each takes.\"", sourceLessonSlug: "capstone-written-plan" },
          { prompt: "Which sentence form does lesson 30 give for the kill rule?", options: ["If I earn less than __ dollars by __, I will raise my rate", "If a renter damages __ by __, I will stop renting __ out", "If the platform fee passes __ by __, I will list elsewhere", "If I have fewer than __ paid days by __, I will sell __"], correctIndex: 3, explanation: "\"If I have fewer than __ paid days by __, I will sell __.\"", sourceLessonSlug: "capstone-written-plan" },
          { prompt: "Why should the kill rule's number come from your model before you buy?", options: ["You can still be objective then", "The IRS requires it with a return", "Platforms ask for it at sign-up", "Insurers price policies from it"], correctIndex: 0, explanation: "\"Pick the number from your model before you buy, while you can still be objective about it.\"", sourceLessonSlug: "capstone-written-plan" },
          { prompt: "What does lesson 30 say tends to happen to a kill rule written after the purchase?", options: ["It tends to hold", "It tends to bend", "It gets audited", "It is enforced"], correctIndex: 1, explanation: "\"A kill rule written after the purchase tends to bend.\"", sourceLessonSlug: "capstone-written-plan" },
          { prompt: "When does lesson 30 say to set the plan's review date?", options: ["At the end of year three", "After the first claim", "Three or six months out", "Whenever a renter asks"], correctIndex: 2, explanation: "\"Put a date on the plan three or six months out\".", sourceLessonSlug: "capstone-written-plan" },
          { prompt: "On the review date, which of these does lesson 30 tell you to compare?", options: ["Your followers, likes and comments online", "Insurance quotes from three new agents", "Prices of the newest models on sale", "Bookings, rates paid, hours and rebooking"], correctIndex: 3, explanation: "Compare \"the bookings, the rates paid, the hours spent, and whether clients booked again.\"", sourceLessonSlug: "capstone-written-plan" },
          { prompt: "According to lesson 30, can a good plan say not to buy yet?", options: ["Yes, and rent for paid jobs first", "No, a plan must end in a purchase", "No, unless an insurer refuses you", "Yes, but only after a year of use"], correctIndex: 0, explanation: "\"A plan that ends 'do not buy yet; rent the item for two paid jobs first and see' is a good result.\"", sourceLessonSlug: "capstone-written-plan" },
          { prompt: "What does lesson 30 say the course's purpose is if renting does not pay?", options: ["To refund the cost of your first kit", "To help you find out early and cheaply", "To promise income once you are insured", "To list your gear on a partner platform"], correctIndex: 1, explanation: "\"Its purpose is to make sure that if it does not, you find out early and cheaply.\" The course promises no income.", sourceLessonSlug: "capstone-written-plan" },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // FINAL
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "final-quiz",
      title: "Final quiz · Renting Out Production Gear",
      section: "Final assessment",
      body: "Ten questions drawn from the whole course, from who rents out gear to the written plan with a kill rule. No question asks you to predict income. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          { prompt: "Which three ways of reaching a production does lesson 1 compare?", options: ["Rental house, camera retailer, used-gear dealer", "Peer-to-peer platform, insurer, camera retailer", "Rental house, peer-to-peer platform, owner-operator", "Owner-operator, union local, used-gear dealer"], correctIndex: 2, explanation: "Lesson 1's three kinds of business are the rental house, the peer-to-peer platform, and the owner-operator who brings a kit. Retailers, dealers, insurers and union locals appear elsewhere, not as the three.", sourceLessonSlug: "who-rents-out-production-gear" },
          { prompt: "A client hires you to operate and also pays for the camera you bring. Which of the course's words names the camera payment?", options: ["Dry hire", "Labor", "Kit fee", "Box rent"], correctIndex: 2, explanation: "\"Kit fee: the gear goes out with you as its operator, and the client pays for the gear on top of your day rate.\" Your day rate is labor; dry hire sends the gear out without you.", sourceLessonSlug: "who-rents-out-production-gear" },
          { prompt: "Lesson 2 compares a 3-day FX3 A rental with the FX3A's retail price. What does that comparison show?", options: ["Renting costs a production more than owning", "Rental houses sell their cameras below retail", "A rental is a few percent of the price each time", "Owners recover the price in about three rentals"], correctIndex: 2, explanation: "$155 ÷ $4,298 is about 3.6 percent, so a production that needs the camera now and then \"pays a few percent of its price each time and hands it back.\"", sourceLessonSlug: "why-productions-rent" },
          { prompt: "Why does the course keep your day rate out of what your gear earns?", options: ["Day rates are taxed as wages, not as rent", "Platforms forbid owners to list a day rate", "Union locals set the day rate for the kit", "You could earn the day rate on a client's gear"], correctIndex: 3, explanation: "Lesson 3: \"If you would have earned your day rate running a client's camera, then the day rate is not something your camera earned.\"", sourceLessonSlug: "gear-income-and-your-labor" },
          { prompt: "What does the IRS tell a payer to do with one payment covering a rented machine and its operator?", options: ["Report it all as nonemployee compensation", "Report it all as rent in box 1 of 1099-MISC", "Leave it off every form if under $5,000", "Split it between machine rent and operator"], correctIndex: 3, explanation: "The instructions say to \"prorate the rental between the rent of the machine (report that in box 1) and the operator's charge (report that on Form 1099-NEC in box 1a).\"", sourceLessonSlug: "gear-income-and-your-labor" },
          { prompt: "A regional house lists five cinema cameras and one gimbal. What does lesson 4 say that one gimbal tells you?", options: ["Gimbals are rarely rented in that market", "Gimbals there are priced too high to rent", "The house plans to add more gimbals soon", "Not whether it means low demand or a gap"], correctIndex: 3, explanation: "\"One gimbal on the page may mean low demand, or it may mean a gap. The page cannot tell you which. Only renters can.\"", sourceLessonSlug: "start-from-demand" },
          { prompt: "Under ShareGrid's local-pickup rules, a renter keeps an item for a full week. How many shoot days are billed?", options: ["7", "5", "3", "1"], correctIndex: 2, explanation: "\"If you have the gear for 6 to 7 days, you're only charged for 3 shoot days.\" That is why lesson 5 counts utilization in billed days.", sourceLessonSlug: "utilization" },
          { prompt: "Why does lesson 5 say a full calendar can still mean low income?", options: ["Platforms hold payouts for a month", "Renters often cancel late in the week", "Insurance costs rise with each booking", "Rental pricing gives renters free days"], correctIndex: 3, explanation: "Utilization is measured in billed days, and \"rental pricing gives renters days for free\": a weekend bills one day, a week three, a month ten.", sourceLessonSlug: "utilization" },
          { prompt: "Batteries lose capacity with repeated use. Which of lesson 6's two clocks is that?", options: ["Wear", "Churn", "Demand", "Utilization"], correctIndex: 0, explanation: "Lesson 6: \"One is wear: parts that get used up. The other is churn: newer models that make yours the older one.\" Sony says battery capacity \"decreases gradually\", which is wear.", sourceLessonSlug: "churn-and-wear" },
          { prompt: "By lesson 7's arithmetic, about how many 3-day rentals of a Bolt 6 LT kit equal buying the set?", options: ["About 28", "About 17", "About 12", "About 45"], correctIndex: 1, explanation: "\"$2,390 ÷ $142 = 16.8, so about 17 three-day rentals cost as much as buying.\" About 12 is the weekly count, and about 28 is the FX3 A body's 3-day count.", sourceLessonSlug: "what-to-keep-renting" },
          { prompt: "Which three things does lesson 8 say a new purchase may offer a rental owner over a used one?", options: ["A lower price, more parts, a free lens", "A higher day rate, more reviews, a cage", "A longer warranty, full box, known history", "Free shipping, a spare battery, a case"], correctIndex: 2, explanation: "\"A longer warranty, a full box and a known history are worth something to a rental owner, because the item will go out to strangers.\"", sourceLessonSlug: "new-or-used" },
          { prompt: "By lesson 8's arithmetic, what does a $749 saving equal at a $125 day rate?", options: ["About six billed days", "About two billed days", "About twelve billed days", "About twenty-eight days"], correctIndex: 0, explanation: "$749 divided by $125 is 6.0, so the used body saved, at most, about six days of rent.", sourceLessonSlug: "new-or-used" },
          { prompt: "In lesson 9's table, who asks for labeled photos taken on arrival?", options: ["The IRS and the platform", "The insurer and the platform", "The IRS and the insurer", "Only the IRS, at tax time"], correctIndex: 1, explanation: "The row \"Photos on arrival, labeled\" is marked \"Insurer, platform\".", sourceLessonSlug: "the-asset-record" },
          { prompt: "In lesson 10's kit-list method, which group holds batteries and a charger?", options: ["Capture", "Holding it", "Carrying it", "Power"], correctIndex: 3, explanation: "\"Power: batteries, a charger, and any cable that powers it from a larger battery.\"", sourceLessonSlug: "kits-that-rent-together" },
          { prompt: "What did the regional house charge for a week of the Hollyland Pyro 7-inch kit?", options: ["$250", "$335", "$450", "$325"], correctIndex: 3, explanation: "The Pyro kit was $75 a day and $325 a week. $250 is the RS4 Pro kit, $335 the FX30 and $450 the C70.", sourceLessonSlug: "reading-a-price-list" },
          { prompt: "By lesson 11's arithmetic, about what did each day of a 3-day Lensrentals FX3 A rental cost?", options: ["About $31.71", "About $51.67", "About $21.83", "About $41.33"], correctIndex: 1, explanation: "$155 divided by 3 is about $51.67. $31.71 is the 7-day figure and $21.83 the 30-day.", sourceLessonSlug: "reading-a-price-list" },
          { prompt: "In lesson 12's example, how much is the 15 percent owner fee on a $300 rental?", options: ["$30", "$85", "$45", "$15"], correctIndex: 2, explanation: "15 percent of $300 is $45, leaving $255. About $30 is the renter's typical community fee.", sourceLessonSlug: "platform-fees" },
          { prompt: "Under which heading of ShareGrid's fee page do the seller fee and the card fee appear?", options: ["Buy & Sell", "Rentals", "Fee Purpose", "Payouts"], correctIndex: 0, explanation: "Lesson 12 quotes both fees \"Under 'Buy & Sell'\". The owner and renter fees sit under \"Rentals\".", sourceLessonSlug: "platform-fees" },
          { prompt: "For a $4,298 camera body, what does 15 percent of replacement value a day come to?", options: ["$429.80", "$644.70", "$562.50", "$358.50"], correctIndex: 1, explanation: "15 percent of $4,298 is $644.70. $429.80 is 10 percent; $358.50 is 15 percent of the $2,390 Bolt set.", sourceLessonSlug: "kit-fees" },
          { prompt: "When you rent through a platform, what does step 4 of the rate sheet subtract?", options: ["The platform's fee", "Your card fees", "The sales tax", "The card hold"], correctIndex: 0, explanation: "\"Step 4: what reaches you. Subtract the platform's fee (lesson 12). If you rent direct, subtract card fees and your time instead.\"", sourceLessonSlug: "your-rate-sheet" },
          { prompt: "Under \"the legal frame\", what does lesson 15 say the regional house's terms establish?", options: ["A sale, with a buyback after a year", "A loan, repaid through rental fees", "A partnership with each renter", "A lease, not a sale, with no sublease"], correctIndex: 3, explanation: "The agreement \"constitutes a lease and not a sale\", and the customer may not sublease without consent.", sourceLessonSlug: "the-rental-agreement" },
          { prompt: "On ShareGrid, which rule does lesson 15 say applies to every rental?", options: ["A card hold of $1,000 is required", "Some type of coverage is required", "A signed paper lease is required", "A deposit of 25 percent is required"], correctIndex: 1, explanation: "\"All rentals require some type of coverage\". The $1,000 hold is the regional house's rule for first-time renters.", sourceLessonSlug: "the-rental-agreement" },
          { prompt: "Which statement about damage waivers does lesson 16 support?", options: ["They limit what a renter owes; they do not insure you", "They insure the owner against every kind of loss", "They are policies written by a licensed insurer", "They cover missing items as well as any damage"], correctIndex: 0, explanation: "\"a waiver limits what the renter owes; it does not insure you.\" Waivers are not insurance policies and do not cover missing items.", sourceLessonSlug: "waivers-are-not-insurance" },
          { prompt: "Which coverage does lesson 17 say a client may ask an owner to show?", options: ["A homeowners endorsement", "A Lenscap protection plan", "General liability insurance", "A damage waiver from ShareGrid"], correctIndex: 2, explanation: "\"General Liability Insurance may be required depending on equipment use case.\" A client may ask the same of you.", sourceLessonSlug: "insurance-for-owned-gear" },
          { prompt: "Which of these is outside ShareGrid's Owner Guarantee?", options: ["A $30,000 listing that is never returned", "A $5,000 listing picked up and kept", "A $12,000 package picked up in person", "A $7,000 listing shipped with tracking"], correctIndex: 0, explanation: "A listing worth more than $20,000 is not protected. In-person rentals up to $20,000 and tracked shipments up to $7,500 are.", sourceLessonSlug: "theft-and-non-return" },
          { prompt: "Which habit does lesson 18 give about deadlines when a rental runs late?", options: ["Wait 72 hours before telling anyone", "Email the renter after a full week", "Calendar the 48-hour notice at once", "File a claim only after resale"], correctIndex: 2, explanation: "\"put the 48-hour deadline in your calendar the moment a rental is late.\"", sourceLessonSlug: "theft-and-non-return" },
          { prompt: "Why does lesson 19 tell owners to wipe cards with deletion software?", options: ["Renters ask for new cards every time", "Formatting may not fully delete data", "Platforms check cards for old clips", "Cards fail unless they are wiped"], correctIndex: 1, explanation: "Sony warns that formatting \"may not completely delete the data on the memory card\".", sourceLessonSlug: "prep-and-test" },
          { prompt: "What does lesson 20's battery log let an owner do?", options: ["Prove a pack was charged on every day", "Claim a refund from the battery maker", "Ship packs without federal paperwork", "Retire a pack before a renter finds out"], correctIndex: 3, explanation: "\"The log tells you when that day has come, before a renter finds out.\"", sourceLessonSlug: "batteries" },
          { prompt: "Which cleaning method follows Sony's guidance for the FX3 body?", options: ["An alcohol wipe, then a dry cloth", "A soft cloth damp with water, then dry", "A spray blower inside the lens mount", "Insect repellent wipes for the grip"], correctIndex: 1, explanation: "Clean the outside \"with a soft cloth slightly moistened with water, then wipe the surface with a dry cloth.\" Alcohol, spray blowers in the mount and insect repellent are all ruled out.", sourceLessonSlug: "cleaning" },
          { prompt: "Why does lesson 22 tie check-in to ShareGrid's deadlines?", options: ["Damage must be reported within 24 hours", "Renters may rate owners within 24 hours", "Payouts are lost after a week of delay", "Claims must be filed before pickup"], correctIndex: 0, explanation: "ShareGrid tells owners to \"Report the damage within 24 hours of the equipment's return\", so inspect at handback.", sourceLessonSlug: "check-in-and-retirement" },
          { prompt: "A rental camera falls into which Publication 946 category that adds a business-use test?", options: ["Listed property", "Section 1250 property", "Inventory for resale", "Intangible property"], correctIndex: 0, explanation: "Publication 946's listed property includes property used for entertainment, recreation, or amusement, \"including photographic, phonographic, communication, and video recording equipment\", and it must be used more than 50 percent for qualified business use.", sourceLessonSlug: "depreciation" },
          { prompt: "In the capstone, what must you pick from your model before buying?", options: ["The platform to list on", "The kill rule's number", "The insurer to call first", "The first renter's name"], correctIndex: 1, explanation: "\"Pick the number from your model before you buy, while you can still be objective about it.\"", sourceLessonSlug: "capstone-written-plan" },
          { prompt: "What condition on renting must hold for rental gear to qualify for section 179?", options: ["Renting must happen on a platform only", "The gear must be rented 100 days a year", "Renting must be your trade or business", "Each renter must carry insurance first"], correctIndex: 2, explanation: "Rental property does not qualify \"if renting property is not your trade or business\"; property must be \"acquired for use in your trade or business.\"", sourceLessonSlug: "expensing" },
          { prompt: "In lesson 25's model, what do a kit-fee day and a dry-hire day each contribute?", options: ["$150 and $150", "$95 and $110", "$127.50 and $85", "$110 and $95"], correctIndex: 3, explanation: "A kit-fee day is $150 less $40 = $110; a dry-hire day is $150 less the $22.50 fee and $32.50 of costs = $95. Both figures are built on stated assumptions.", sourceLessonSlug: "break-even" },
          { prompt: "In lesson 25's model, what does the low case show over three years, counting resale?", options: ["-$4,125", "$2,025", "-$1,375", "$675"], correctIndex: 0, explanation: "The low case loses $1,375 a year after value lost, -$4,125 over three years. $2,025 is the base case over three years.", sourceLessonSlug: "break-even" },
          { prompt: "Which IRS publication does lesson 26 quote on reporting rent from personal property?", options: ["Publication 583", "Publication 525", "Publication 946", "Publication 15"], correctIndex: 1, explanation: "Publication 525's \"Rents From Personal Property\" section sets out the Schedule C and Schedule 1 rules. Publication 946 covers depreciation and 583 recordkeeping.", sourceLessonSlug: "taxes-and-records" },
          { prompt: "What does lesson 26 tell you to do about sales tax on rentals?", options: ["Charge a set federal rental tax of 6%", "Ignore it unless you use a platform", "Ask your state's department of revenue", "Let the platform file it for you"], correctIndex: 2, explanation: "\"Ask your state's department of revenue before your first rental.\" The course makes no claim about any state's rule, and there is no federal rental sales tax in the lesson.", sourceLessonSlug: "taxes-and-records" },
          { prompt: "Which ShareGrid tip asks owners to keep gear clean, working and ready for use?", options: ["Respond Promptly", "Leave Feedback", "Follow Community Rules", "Maintain Your Gear"], correctIndex: 3, explanation: "\"Maintain Your Gear: Keep your equipment clean, in good working order, and ready for use.\"", sourceLessonSlug: "listings-and-reputation" },
          { prompt: "Why does lesson 28 treat one union rate card as evidence of a gap?", options: ["It lists day rates but nothing on kit", "It lists kit fees but no day rates", "It covers only lighting technicians", "It was withdrawn from the local's site"], correctIndex: 0, explanation: "IATSE Local 796's rates card \"lists day rates and has no line about equipment, kit or box rental.\"", sourceLessonSlug: "relationships-and-unions" },
          { prompt: "Per lesson 29, what is the best evidence that a second kit is earned?", options: ["A newer model on rental lists", "A log of turned-away bookings", "A drop in the platform's fee", "A year with no damage claims"], correctIndex: 1, explanation: "\"A second kit earns only from bookings the first kit had to turn down\", so the log of requests you could not fill is the test.", sourceLessonSlug: "a-second-kit" },
        ],
      },
    },
  ],
};
