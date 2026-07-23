// Authored "Flying Internationally & Coming Home" — the airport-and-border companion to
// "How to Get a U.S. Passport" and "Travel Visas 101" in the "Travel & Living Abroad"
// category. Practical, plain-language, strictly informational (the process, not opinions
// about travel or immigration policy): airport/airline basics for an international flight,
// TSA security screening + TSA PreCheck, what CBP does at the U.S. border, the Trusted
// Traveler Programs (Global Entry, PreCheck, NEXUS, SENTRI — who each is for), and coming
// home — the CBP re-entry process, the customs declaration, what you can and can't bring
// back, and how to avoid problems.
//
// Cited throughout to the U.S. Transportation Security Administration (tsa.gov), U.S.
// Customs and Border Protection (cbp.gov), and USDA's Animal and Plant Health Inspection
// Service (aphis.usda.gov) — the three federal agencies that actually run these processes.
//
// AUTHORITATIVE-VALUES RULE (load-bearing here, same pattern as travel-passport-course.ts):
// program FEES (TSA PreCheck, Global Entry, NEXUS, SENTRI) and duty-free PERSONAL EXEMPTION
// dollar amounts both change over time and, for exemptions, vary by trip length and which
// countries were visited. This course never asserts a fixed dollar figure for either. It
// teaches the *structure* (which fees/tiers exist, what drives the difference) and repeatedly
// points the learner to the agency's own current-figures tool (tsa.gov, cbp.gov) before they
// apply, budget, or shop. Every other fact is cited to a specific, verified tsa.gov or
// cbp.gov (or aphis.usda.gov) page.
//
// Ends with a quiz whose every question links back to the lesson that teaches the answer
// (the quiz standard).

import type { AuthoredCourse } from "./authored-course";

export const TRAVEL_FLYING_HOME_COURSE: AuthoredCourse = {
  title: "Flying Internationally & Coming Home",
  description:
    "A practical, plain-language guide to the airport-and-border parts of an international trip: check-in and documents, TSA security screening and TSA PreCheck, what U.S. Customs and Border Protection (CBP) actually does, the Trusted Traveler Programs (Global Entry, PreCheck, NEXUS, SENTRI) and who each is for, and coming home, the CBP re-entry process, the customs declaration, duty-free allowances, prohibited and restricted items, and how to avoid problems. Cited throughout to tsa.gov, cbp.gov, and USDA APHIS.",
  lessons: [
    {
      slug: "before-you-fly",
      title: "1 · Before you fly: documents, check-in, and connections",
      body: `Flying internationally starts with the right paperwork. Every U.S. citizen flying abroad needs a valid **passport book**, the passport *card* is never valid for international air travel (see the *How to Get a U.S. Passport* course). Some destinations also require a **visa** or an electronic travel authorization before you can board; check the specific country's entry requirements ahead of time (see the *Travel Visas 101* course).

**Check-in.** Airlines set their own check-in cutoff times and recommended arrival windows for international flights, and these vary by airline and airport, always confirm the specific time with your airline before you travel. What is universal is that **security screening takes time**: the Transportation Security Administration (TSA) recommends arriving early enough to allow for the full screening process, especially since international departures can involve additional steps (Transportation Security Administration [TSA], n.d.-a).

**Connections.** Two different situations, with different rules:
- **Domestic flight → international flight** (both from the same U.S. departure): you clear TSA security once, before your first flight, and don't interact with CBP at all until you *return*.
- **International flight → domestic flight, landing back in the U.S.**: you must clear CBP at your **first U.S. airport of arrival**, the "port of entry", even if that airport isn't your final destination. Only after CBP clears you do you head to your connecting domestic flight. Lesson 6 covers this step by step.

A few airports run CBP **Preclearance**: U.S. officers stationed at select foreign airports so you clear customs and immigration *before* you fly, then land in the U.S. and go straight to baggage claim or your connection like a domestic passenger (U.S. Customs and Border Protection [CBP], n.d.-a).

:::reveal What's the key difference between connecting through a domestic flight before an international one, versus connecting through a domestic flight after landing back in the U.S. from abroad? ||| Before an international departure, you only clear TSA security once and never see CBP. After landing back in the U.S., you must clear CBP at your first U.S. arrival airport, even if it isn't your final destination, before continuing to a connecting domestic flight.

## Sources
- Transportation Security Administration. (n.d.-a). *Travel checklist*. https://www.tsa.gov/travel/travel-tips/travel-checklist
- U.S. Customs and Border Protection. (n.d.-a). *Preclearance*. https://www.cbp.gov/travel/preclearance`,
    },
    {
      slug: "tsa-security-screening",
      title: "2 · TSA security screening for international flights",
      body: `**TSA's job is aviation security**, screening passengers and their bags for weapons, explosives, and other threats before they board. That's a different job from CBP's (Lesson 4 covers CBP), and it's worth keeping the two agencies straight: TSA screens you **going through** a U.S. airport; CBP inspects you **entering** the United States.

**The 3-1-1 liquids rule** applies to every carry-on, domestic or international: containers of 3.4 oz (100 mL) or less, all fitting in one quart-size clear bag, one bag per passenger. Medically necessary liquids and medications over that limit are allowed but must be declared and screened separately, and breast milk, formula, and juice in larger quantities are exempt from the bag requirement (TSA, n.d.-b).

**Flying *into* the U.S. from abroad can mean extra screening.** The Department of Homeland Security requires enhanced security measures at roughly 280 foreign "last-point-of-departure" airports with direct flights to the U.S., across more than 100 countries, so a flight originating overseas may involve more thorough screening of your belongings and electronics than a purely domestic one, and TSA recommends budgeting extra time for it (TSA, n.d.-c). One specific rule from that enhanced screening: **powders over 12 oz (350 mL)** in carry-on baggage on a U.S.-bound international flight may require additional screening, and powder that can't be resolved at the checkpoint won't be allowed into the cabin (TSA, n.d.-c).

**When in doubt about a specific item**, a souvenir, a gift, an electronic device, TSA's "What Can I Bring?" tool covers thousands of items for both carry-on and checked bags (TSA, n.d.-d).

:::reveal Name the 3-1-1 rule's three numbers and what each one means. ||| 3.4 oz (100 mL) maximum per container, 1 quart-size clear bag to hold them all, and 1 bag per passenger.

## Sources
- Transportation Security Administration. (n.d.-b). *Liquids, aerosols, and gels rule*. https://www.tsa.gov/travel/frequently-asked-questions/what-3-1-1-liquids-rule
- Transportation Security Administration. (n.d.-c). *Security screening*. https://www.tsa.gov/travel/security-screening
- Transportation Security Administration. (n.d.-d). *What can I bring?* https://www.tsa.gov/travel/security-screening/whatcanibring/all`,
      recallContent: [
        {
          prompt: "What's the key difference between connecting through a domestic flight before an international one, versus after landing back in the U.S.?",
          answer:
            "Before departing internationally, you clear TSA security once and never see CBP. After landing back in the U.S., you must clear CBP at your first U.S. arrival airport, even if it isn't your final destination, before continuing to a connecting flight.",
        },
        {
          prompt: "What does a CBP Preclearance airport let you do differently?",
          answer:
            "At select foreign airports, U.S. officers clear your customs and immigration before you fly, so you land in the U.S. and go straight to baggage claim or your connection, like a domestic passenger.",
        },
      ],
    },
    {
      slug: "tsa-precheck",
      title: "3 · TSA PreCheck: what it is and how it helps",
      body: `**TSA PreCheck®** is an expedited-screening program for flights **departing U.S. airports**, in the PreCheck lane, you typically keep your shoes, belt, and light jacket on, and leave laptops and permitted liquids in your bag (TSA, n.d.-e). It applies to domestic flights and, at participating airports, to **outbound international flights** leaving the U.S. too (TSA, n.d.-f).

**Who's eligible.** U.S. citizens, U.S. nationals, and lawful permanent residents can apply directly. Certain groups get PreCheck automatically as a benefit: active-duty military and DoD civilians, cadets/midshipmen at the U.S. service academies, and children age 12 and under traveling with an eligible adult (TSA, n.d.-g). Applicants can be denied for incomplete or false application information, certain federal security-regulation violations, or disqualifying criminal offenses (TSA, n.d.-g).

**How to get it.** Apply through an authorized enrollment provider via tsa.gov/precheck: a short online pre-enrollment, then a brief in-person visit where the provider checks your ID, takes your fingerprints and photo, and collects payment. Membership lasts for a set number of years and requires an application fee, because that fee is set by TSA and can change, don't treat any number you see elsewhere as permanent; check tsa.gov for the current fee before applying (TSA, n.d.-g). Once approved, add your **Known Traveler Number (KTN)** to every airline reservation, with your name matching your enrollment exactly, to get the PreCheck indicator on your boarding pass (TSA, n.d.-g).

**PreCheck vs. Global Entry, in one line:** PreCheck speeds up **security screening when you leave** a U.S. airport; Global Entry (Lesson 5) speeds up **CBP processing when you return**. If you only fly domestically, PreCheck alone may be enough, but Global Entry membership includes PreCheck benefits, so frequent international travelers often get more value from Global Entry (TSA, n.d.-h).

:::reveal What's the one-line difference between what TSA PreCheck speeds up versus what Global Entry speeds up? ||| PreCheck speeds up security screening when you LEAVE a U.S. airport. Global Entry speeds up CBP processing when you RETURN to the U.S., and Global Entry membership also includes PreCheck benefits.

## Sources
- Transportation Security Administration. (n.d.-e). *How to use TSA PreCheck® benefits*. https://www.tsa.gov/precheck/benefits
- Transportation Security Administration. (n.d.-f). *Can I use TSA PreCheck® when flying from a U.S. airport to a foreign country?* https://www.tsa.gov/travel/frequently-asked-questions/can-i-use-tsa-precheckr-when-flying-us-airport-foreign-country
- Transportation Security Administration. (n.d.-g). *Who can apply for TSA PreCheck®?* https://www.tsa.gov/travel/frequently-asked-questions/who-can-apply-tsa-precheckr
- Transportation Security Administration. (n.d.-h). *What is the difference between Global Entry, TSA PreCheck®, and other DHS Trusted Traveler Programs?* https://www.tsa.gov/travel/frequently-asked-questions/what-difference-between-global-entry-tsa-precheckr-and-other`,
      recallContent: [
        {
          prompt: "Name the 3-1-1 rule's three numbers and what each one means.",
          answer:
            "3.4 oz (100 mL) maximum per container, 1 quart-size clear bag to hold them all, and 1 bag per passenger.",
        },
        {
          prompt: "Why does an international flight into the U.S. sometimes involve more thorough TSA screening than a domestic one?",
          answer:
            "DHS requires enhanced security measures at roughly 280 foreign 'last-point-of-departure' airports with direct U.S. flights, so belongings and electronics may get more thorough screening, TSA recommends budgeting extra time.",
        },
      ],
    },
    {
      slug: "cbp-and-the-border",
      title: "4 · CBP and the U.S. border: what CBP does",
      body: `**U.S. Customs and Border Protection (CBP)** is a different federal agency from TSA, with a different job: CBP is the nation's largest federal law-enforcement agency, charged with securing U.S. borders while facilitating lawful travel and trade (CBP, n.d.-b). Where TSA screens you *going through* an airport, CBP decides whether you and your belongings may *enter the United States*.

**Ports of entry.** CBP officers staff more than 300 official land, air, and sea ports of entry. Every person seeking entry, U.S. citizens included, is inspected there, and CBP officers determine **admissibility**: whether the law allows that person to enter (CBP, n.d.-c). For a U.S. citizen, admissibility inspection is quick (confirming identity and citizenship), but it's still a real legal checkpoint, not a formality.

**Entry and exit tracking.** CBP also runs a biometric entry/exit program: a photo taken at the border confirms your identity against your travel document. For U.S. citizens, that photo is discarded within 12 hours; for non-citizens, it feeds a longer-retention identity system used to verify who has actually left the country when their authorized stay ends (CBP, n.d.-d). This is part of why "exit" isn't just the mirror image of "entry" for everyone, but for a returning U.S. citizen, the process that matters day-to-day is the **entry** inspection, detailed in Lesson 6.

**The takeaway for this course:** TSA (Lessons 2-3) keeps weapons and threats off planes. CBP (this lesson and Lessons 5-9) decides who and what may cross the U.S. border, and handles the customs side of returning from abroad.

:::reveal In one sentence, how is CBP's job different from TSA's? ||| TSA screens people and bags for security threats before boarding a flight; CBP inspects people and goods at the border to decide whether they may legally enter the United States.

## Sources
- U.S. Customs and Border Protection. (n.d.-b). *About CBP*. https://www.cbp.gov/about
- U.S. Customs and Border Protection. (n.d.-c). *At ports of entry: Field operations*. https://www.cbp.gov/border-security/ports-entry
- U.S. Customs and Border Protection. (n.d.-d). *DHS announces final rule to advance the Biometric Entry/Exit Program*. https://www.cbp.gov/newsroom/national-media-release/dhs-announces-final-rule-advance-biometric-entry/exit-program`,
      recallContent: [
        {
          prompt: "What's the one-line difference between what TSA PreCheck speeds up versus what Global Entry speeds up?",
          answer:
            "PreCheck speeds up security screening when you leave a U.S. airport. Global Entry speeds up CBP processing when you return, and Global Entry membership also includes PreCheck benefits.",
        },
        {
          prompt: "Roughly how many official U.S. ports of entry does CBP staff, and what do CBP officers determine there?",
          answer:
            "More than 300 land, air, and sea ports of entry, where officers determine admissibility, whether the law allows a given person to enter the U.S.",
        },
      ],
    },
    {
      slug: "trusted-traveler-programs",
      title: "5 · Trusted Traveler Programs: Global Entry, NEXUS, SENTRI, and PreCheck compared",
      body: `The Department of Homeland Security runs several **Trusted Traveler Programs (TTPs)** that pre-screen low-risk travelers for expedited processing. They overlap in benefits but target different situations:

- **TSA PreCheck** (Lesson 3): expedited **security screening** departing U.S. airports (domestic, and international departures at participating airports). Best fit: frequent flyers who mostly travel within, or out of, the U.S.
- **Global Entry**: expedited **CBP processing on arrival back in the U.S.** after international air travel, approved members use a kiosk or the Global Entry mobile app instead of the standard line, and Global Entry membership includes TSA PreCheck benefits (CBP, n.d.-e). Best fit: anyone who flies internationally with any regularity, since it bundles both programs.
- **NEXUS**: a **joint U.S.-Canada** program for travelers who cross that border. Members get dedicated lanes at land ports, NEXUS kiosks entering Canada by air, and can use Global Entry kiosks entering the U.S., NEXUS also carries Global Entry and TSA PreCheck benefits (CBP, n.d.-f). Best fit: people who regularly cross the northern border.
- **SENTRI**: for the **U.S.-Mexico** land border, dedicated primary lanes at Southern land ports of entry for pre-approved, low-risk travelers (CBP, n.d.-g). SENTRI cards also work in NEXUS lanes and, since they carry an RFID chip, can be used at Global Entry airport kiosks by current members (CBP, n.d.-h). Best fit: frequent Mexico border crossers by land.

**In short:** PreCheck is about **leaving** a U.S. airport; Global Entry, NEXUS, and SENTRI are all, at their core, about **entering** the U.S. faster, by air (Global Entry), the Canadian border (NEXUS), or the Mexican land border (SENTRI), and each of the border-crossing programs layers PreCheck and Global Entry benefits on top once you're a member. Application fees and membership lengths differ by program and change over time, so check the current numbers at cbp.gov before applying (CBP, n.d.-e).

:::reveal Which Trusted Traveler Program should someone pick who mostly flies internationally by air, versus someone who regularly drives across the U.S.-Mexico border? ||| Global Entry for frequent international air travelers (it bundles TSA PreCheck too); SENTRI for frequent U.S.-Mexico land-border crossers.

## Sources
- U.S. Customs and Border Protection. (n.d.-e). *Global Entry*. https://www.cbp.gov/travel/trusted-traveler-programs/global-entry
- U.S. Customs and Border Protection. (n.d.-f). *NEXUS*. https://www.cbp.gov/travel/trusted-traveler-programs/nexus
- U.S. Customs and Border Protection. (n.d.-g). *Secure Electronic Network for Travelers Rapid Inspection (SENTRI)*. https://www.cbp.gov/travel/trusted-traveler-programs/sentri
- U.S. Customs and Border Protection. (n.d.-h). *Benefits of SENTRI*. https://www.cbp.gov/travel/trusted-traveler-programs/sentri/benefits-sentri`,
      recallContent: [
        {
          prompt: "In one sentence, how is CBP's job different from TSA's?",
          answer:
            "TSA screens people and bags for security threats before boarding; CBP inspects people and goods at the border to decide whether they may legally enter the United States.",
        },
        {
          prompt: "What identity-verification step does CBP take at the border, and how long is a U.S. citizen's photo kept?",
          answer:
            "CBP's biometric entry/exit program takes a photo to confirm identity against the travel document. For U.S. citizens that photo is discarded within 12 hours.",
        },
      ],
    },
    {
      slug: "cbp-reentry-process",
      title: "6 · Coming home: the CBP re-entry process",
      body: `When your flight lands back in the U.S. from abroad, you go through a **Federal Inspection Station** at that airport, your first U.S. port of entry, before you can do anything else, including catching a connecting flight (CBP, n.d.-a; see Lesson 1).

**The basic steps:**
1. **Primary CBP inspection.** You present your passport (or other accepted travel document) to a CBP officer, or, if eligible, use a self-service option instead of the officer line.
2. **Self-service options**, where available, include the **Global Entry kiosk** (for approved Global Entry members only) and **Mobile Passport Control (MPC)**, a free app open to eligible U.S. citizens and Canadian visitors that lets you submit your passport and customs-declaration information electronically before you reach the inspection area, cutting time in line (CBP, n.d.-i). Wherever available, the specific self-service option depends on the airport, check which ones your arrival airport offers.
3. **The officer (or kiosk) also handles your customs declaration**, Lesson 7 covers what that involves.
4. **Possible secondary inspection.** Most travelers are cleared at primary inspection. CBP may refer some travelers or bags for a closer secondary inspection; this isn't a sign of wrongdoing so much as CBP's normal risk-based process.
5. **Baggage claim**, then, if you're connecting to another domestic flight, **re-checking your bag** for that flight, normally required, though CBP has been piloting programs at a handful of airports that skip the re-check step for eligible arriving flights (CBP, n.d.-a; see Lesson 1's note on Preclearance for the alternative that avoids this step entirely).

**Why this matters for connections:** because you clear CBP at your **first** U.S. arrival airport, budget real time between an international arrival and a tight domestic connection, CBP processing, baggage claim, and re-checking a bag all happen before you can head to your next gate.

:::reveal Name two self-service options CBP offers at some airports to speed up primary inspection, and who's eligible for each. ||| The Global Entry kiosk (approved Global Entry members only) and Mobile Passport Control, a free app open to eligible U.S. citizens and Canadian visitors.

## Sources
- U.S. Customs and Border Protection. (n.d.-a). *Preclearance*. https://www.cbp.gov/travel/preclearance
- U.S. Customs and Border Protection. (n.d.-i). *Mobile Passport Control (MPC)*. https://www.cbp.gov/travel/us-citizens/mobile-passport-control`,
      recallContent: [
        {
          prompt: "Which Trusted Traveler Program fits someone who mostly flies internationally, versus someone who regularly drives across the U.S.-Mexico border?",
          answer:
            "Global Entry for frequent international air travelers (it bundles TSA PreCheck too); SENTRI for frequent U.S.-Mexico land-border crossers.",
        },
        {
          prompt: "What do NEXUS and SENTRI have in common with Global Entry, beyond their own specific border?",
          answer:
            "Both layer Global Entry and TSA PreCheck benefits on top of their own dedicated-lane benefits once you're a member.",
        },
      ],
    },
    {
      slug: "customs-declaration",
      title: "7 · The customs declaration: what it is and how to complete it",
      body: `Everyone entering the U.S. must **declare** certain things to CBP, either on the official **Customs Declaration, CBP Form 6059B** (paper, or the same information collected electronically through a kiosk, the MPC app, or a Global Entry kiosk), itemizing purchased merchandise and agricultural products you're bringing in (CBP, n.d.-j).

**What you must declare:**
- All merchandise, gifts, and items acquired abroad (including duty-free purchases, see Lesson 8).
- Any **fruits, vegetables, plants, seeds, meats, other agricultural products, or animals** you're carrying, in checked bags, carry-on, or a vehicle, Lesson 9 explains why.
- **Currency or monetary instruments over $10,000** (combined, per family or group traveling together, not per person), reported on **FinCEN Form 105**. This applies whether you're arriving or departing (CBP, n.d.-k).

**Family grouping.** Family members living in the same household and traveling together can combine their individual exemptions into one joint declaration, which can be worth more total exemption than filing separately (CBP, n.d.-l).

**Declare it, even if you're not sure.** CBP is explicit on agricultural items: if you declare everything, you face **no penalty**, even if an inspector ultimately decides the item can't enter the country and has to take it. The penalties are for **not** declaring, or declaring falsely (CBP, n.d.-m; see Lesson 9). If you're unsure whether something needs to be declared, the safe move is always to declare it and let the officer decide.

**Failing to report currency** over the $10,000 threshold can result in the money being seized and forfeited, plus possible civil or criminal penalties (CBP, n.d.-k).

:::reveal If you're not sure whether an item needs to be declared, what should you do, and why? ||| Declare it anyway. CBP does not penalize you for declaring an item that turns out to be restricted or prohibited, the penalties are for failing to declare, or declaring falsely.

## Sources
- U.S. Customs and Border Protection. (n.d.-j). *Customs declaration* (CBP Form 6059B). https://www.cbp.gov/sites/default/files/2024-07/cbp_form_6059b_english_0.pdf
- U.S. Customs and Border Protection. (n.d.-k). *Money and other monetary instruments*. https://www.cbp.gov/travel/international-visitors/money-monetary-instruments
- U.S. Customs and Border Protection. (n.d.-l). *Family grouping of exemptions for articles acquired abroad*. https://www.help.cbp.gov/s/article/Article-1179
- U.S. Customs and Border Protection. (n.d.-m). *Bringing agricultural products into the United States*. https://www.cbp.gov/travel/clearing-cbp/bringing-agricultural-products-united-states`,
      recallContent: [
        {
          prompt: "Name two self-service options CBP offers at some airports to speed up primary inspection.",
          answer:
            "The Global Entry kiosk (approved members only) and Mobile Passport Control, a free app open to eligible U.S. citizens and Canadian visitors.",
        },
        {
          prompt: "Why is it important to budget real time for a tight domestic connection after landing back in the U.S. from abroad?",
          answer:
            "You must clear CBP at your first U.S. arrival airport, then claim and often re-check your bag, all before heading to your next gate.",
        },
      ],
    },
    {
      slug: "duty-free-allowances",
      title: "8 · What you can bring back: duty-free allowances (the high-level picture)",
      body: `Coming home with souvenirs, gifts, or purchases doesn't automatically mean paying duty, every returning traveler gets a **personal exemption**: a value of goods you can bring in duty-free, for personal or household use or as gifts, as long as the items travel with you (CBP, n.d.-n).

**The exemption amount isn't one fixed number.** CBP sets **different exemption tiers** depending on **which countries you visited and how long you were gone**, a short trip to some destinations gets a smaller exemption than a longer trip that included certain other countries or territories. Because these tiers and thresholds can change, this course doesn't print specific dollar figures as permanent facts, use **CBP's own exemption tool** at cbp.gov to check the current amount for your specific trip before you shop (CBP, n.d.-o).

**A few things that surprise first-time international travelers:**
- **Duty-free shop purchases are not automatically duty-free at home.** "Duty-free" at the airport shop means you didn't pay *that country's* taxes on the purchase, it still counts against your U.S. personal exemption and must be declared (CBP, n.d.-p).
- **Alcohol and tobacco have their own, much tighter limits**, separate from and smaller than the general merchandise exemption (CBP, n.d.-o).
- **Above your exemption, you generally pay a flat duty rate** on the next set amount of goods for personal use, then item-specific rates beyond that, again, confirm current rates with CBP rather than assuming a number.
- **Keep your receipts.** They're the easiest way to establish value if CBP asks.

The bottom line: know that tiers exist and that alcohol/tobacco are separate and stricter, check the current numbers for your specific trip before you shop, and declare what you bring back (Lesson 7), CBP, not guesswork, is the source of truth.

:::reveal Name two factors that change which duty-free exemption tier applies to your trip, and one category of goods with its own separate, tighter limit. ||| The exemption tier depends on which countries you visited and how long you were gone. Alcohol and tobacco have their own, tighter limits, separate from the general merchandise exemption.

## Sources
- U.S. Customs and Border Protection. (n.d.-n). *Types of exemptions*. https://www.cbp.gov/travel/international-visitors/kbyg/types-exemptions
- U.S. Customs and Border Protection. (n.d.-o). *What to expect when you return*. https://www.cbp.gov/travel/us-citizens/know-before-you-go/what-expect-when-you-return
- U.S. Customs and Border Protection. (n.d.-p). *Shopping abroad: Duty free, gifts, household items*. https://www.cbp.gov/travel/us-citizens/know-before-you-go/shopping-abroad-duty-free-gifts-household-items`,
      recallContent: [
        {
          prompt: "If you're not sure whether an item needs to be declared, what should you do, and why?",
          answer:
            "Declare it anyway. CBP does not penalize you for declaring an item that turns out to be restricted or prohibited, the penalties are for failing to declare, or declaring falsely.",
        },
        {
          prompt: "What's the threshold for having to report currency or monetary instruments to CBP, and on what form?",
          answer:
            "Amounts over $10,000 (combined per family or group traveling together), reported on FinCEN Form 105.",
        },
      ],
    },
    {
      slug: "prohibited-restricted-items",
      title: "9 · What you can't bring back: prohibited and restricted items",
      body: `CBP draws a distinction that matters: **prohibited** items are forbidden by law from entering the U.S. at all (examples CBP cites include dangerous toys, cars that don't meet U.S. crash-protection standards, and bushmeat). **Restricted** items can enter, but only with the right permit or license from the federal agency that regulates them (CBP, n.d.-q).

**Agricultural products, the biggest everyday category.** Meats, fresh fruits and vegetables, plants, seeds, and soil are heavily restricted or prohibited, and **why** is the point: these items can carry plant pests and foreign animal diseases that could seriously damage U.S. crops, livestock, and the environment, an economic and ecological risk, not an arbitrary rule (U.S. Department of Agriculture, Animal and Plant Health Inspection Service [APHIS], n.d.). Nearly all fresh fruits and vegetables are prohibited outright because of pest and disease risk; **commercially canned** fruits and vegetables are generally fine, as long as you declare them (APHIS, n.d.). Fresh, cooked, cured, or dried meat may be allowed from certain countries with proper documentation of origin, but rules vary by country and product, check with APHIS or CBP before you pack it (APHIS, n.d.). **All** agricultural items, meats, fruits, vegetables, plants, seeds, soil, animals, and animal/plant products including soups, must be declared, whether in checked bags, carry-on, or a vehicle (CBP, n.d.-m).

**Medications.** Virtually all foreign-made medications are prohibited from entering the U.S., even ones that are legal and common where you bought them (CBP, n.d.-q).

**Wildlife and wildlife products.** Endangered species and products made from them generally may not be imported. Items like ivory, tortoiseshell, coral, and fur or skins from protected species are covered by CITES (the international endangered-species treaty) and U.S. Fish and Wildlife Service rules, whether a souvenir is legal can depend on both the species **and** the country where you bought it, so it's worth checking before you buy, not after (CBP, n.d.-q, n.d.-r).

**Tips to avoid problems:** declare everything, every time, there's no penalty for declaring (Lesson 7); if you're bringing agricultural souvenirs, gifts, or wildlife-adjacent items (leather, fur, shell, feathers), check with APHIS or U.S. Fish and Wildlife before you buy, not at the airport; keep documentation/receipts; and if you're unsure about anything, ask a CBP officer directly rather than guessing.

:::reveal Why does CBP restrict agricultural items like fresh fruit, meat, and plants, specifically? ||| Because they can carry plant pests and foreign animal diseases that could seriously damage U.S. crops, livestock, and the environment, it's a biosecurity and economic protection, not an arbitrary rule.

## Sources
- U.S. Customs and Border Protection. (n.d.-q). *Prohibited and restricted items*. https://www.cbp.gov/travel/us-citizens/know-before-you-go/prohibited-and-restricted-items
- U.S. Customs and Border Protection. (n.d.-m). *Bringing agricultural products into the United States*. https://www.cbp.gov/travel/clearing-cbp/bringing-agricultural-products-united-states
- U.S. Customs and Border Protection. (n.d.-r). *Importing endangered species of wildlife, plants, ivory, exotic skins and furs*. https://www.help.cbp.gov/s/article/Article-1028
- U.S. Department of Agriculture, Animal and Plant Health Inspection Service. (n.d.). *Traveling with food or agricultural products*. https://www.aphis.usda.gov/traveling-with-ag-products`,
      recallContent: [
        {
          prompt: "Name two factors that change which duty-free exemption tier applies to your trip.",
          answer: "Which countries you visited and how long you were gone.",
        },
        {
          prompt: "What's the difference between a 'prohibited' item and a 'restricted' item at the U.S. border?",
          answer:
            "A prohibited item is forbidden by law from entering at all. A restricted item can enter, but only with the right permit or license from the regulating federal agency.",
        },
      ],
    },
    {
      slug: "flying-internationally-quiz",
      title: "10 · Check your understanding",
      quiz: {
        passingScore: 70,
        // Options shuffle per attempt so a fixed answer position cannot be gamed;
        // scoring is by identity, so no answer changes (src/lib/quiz.ts).
        shuffleOptions: true,
        questions: [
          {
            prompt: "When landing back in the U.S. with a connecting domestic flight, when must you clear CBP?",
            options: [
              "Only at your final destination airport",
              "At your first U.S. airport of arrival, even if it isn't your final destination",
              "You don't need to clear CBP if you're a U.S. citizen",
              "Only if you have something to declare",
            ],
            correctIndex: 1,
            explanation:
              "You must clear CBP at your first U.S. port of entry, the Federal Inspection Station, before continuing to any connecting flight, regardless of your final destination.",
            sourceLessonSlug: "before-you-fly",
          },
          {
            prompt: "What are the three numbers in TSA's 3-1-1 liquids rule?",
            options: [
              "3 bags, 1 liter each, 1 passenger",
              "3.4 oz (100 mL) per container, 1 quart-size bag, 1 bag per passenger",
              "3 hours early, 1 ID, 1 boarding pass",
              "3 liquids max, 1 gel, 1 aerosol",
            ],
            correctIndex: 1,
            explanation:
              "3.4 oz (100 mL) maximum per container, all fitting in one quart-size clear bag, one bag per passenger.",
            sourceLessonSlug: "tsa-security-screening",
          },
          {
            prompt: "What's the one-line difference between what TSA PreCheck speeds up and what Global Entry speeds up?",
            options: [
              "They do the exact same thing",
              "PreCheck speeds up leaving a U.S. airport; Global Entry speeds up returning to the U.S., and includes PreCheck benefits",
              "PreCheck is for international flights only; Global Entry is for domestic flights only",
              "PreCheck is free; Global Entry always costs more with no added benefit",
            ],
            correctIndex: 1,
            explanation:
              "PreCheck speeds up security screening when you leave a U.S. airport. Global Entry speeds up CBP processing when you return, and membership includes TSA PreCheck benefits.",
            sourceLessonSlug: "tsa-precheck",
          },
          {
            prompt: "How is CBP's job different from TSA's?",
            options: [
              "They're the same agency with different names",
              "TSA screens for security threats before boarding; CBP decides who and what may legally enter the U.S. at the border",
              "TSA only works overseas; CBP only works domestically",
              "CBP handles airline check-in; TSA handles customs",
            ],
            correctIndex: 1,
            explanation:
              "TSA (aviation security screening) and CBP (border entry and customs) are different federal agencies with different jobs.",
            sourceLessonSlug: "cbp-and-the-border",
          },
          {
            prompt: "Which Trusted Traveler Program is the best fit for someone who regularly drives across the U.S.-Mexico border?",
            options: ["TSA PreCheck", "NEXUS", "SENTRI", "Global Entry only"],
            correctIndex: 2,
            explanation:
              "SENTRI provides dedicated lanes at Southern land ports of entry for pre-approved travelers crossing the U.S.-Mexico border.",
            sourceLessonSlug: "trusted-traveler-programs",
          },
          {
            prompt: "Name two self-service options CBP offers at some airports to speed up primary inspection on return to the U.S.",
            options: [
              "TSA PreCheck and NEXUS",
              "The Global Entry kiosk and Mobile Passport Control (MPC)",
              "A paper form and a phone call",
              "There are no self-service options; every traveler must see an officer",
            ],
            correctIndex: 1,
            explanation:
              "Approved Global Entry members can use a kiosk; eligible U.S. citizens and Canadian visitors can use the free Mobile Passport Control app to submit information electronically before reaching the inspection area.",
            sourceLessonSlug: "cbp-reentry-process",
          },
          {
            prompt: "If you're unsure whether an item you're bringing back needs to be declared, what should you do?",
            options: [
              "Leave it undeclared to save time",
              "Declare it, there's no penalty for declaring, even if the item turns out to be restricted or prohibited",
              "Only declare it if it's worth more than $1,000",
              "Ask another passenger for advice instead of declaring it",
            ],
            correctIndex: 1,
            explanation:
              "CBP does not penalize travelers for declaring an item, even one that ultimately can't enter the country. Penalties are for failing to declare, or declaring falsely.",
            sourceLessonSlug: "customs-declaration",
          },
          {
            prompt: "Why doesn't this course print a fixed dollar amount for the duty-free personal exemption?",
            options: [
              "CBP keeps that number secret",
              "The exemption tier depends on which countries you visited and how long you were gone, and the amounts can change, so the course points to CBP's own tool for the current figure",
              "Every traveler gets the exact same exemption regardless of trip details",
              "Duty-free exemptions no longer exist",
            ],
            correctIndex: 1,
            explanation:
              "The exemption amount varies by trip length and countries visited, and the tiers can change over time, so this course teaches the structure and points to CBP's exemption tool for the current number.",
            sourceLessonSlug: "duty-free-allowances",
          },
          {
            prompt: "Why does CBP restrict bringing back items like fresh fruit, meat, and plants specifically?",
            options: [
              "To protect the profits of domestic grocery stores",
              "Because they can carry plant pests and foreign animal diseases that could seriously damage U.S. crops, livestock, and the environment",
              "There's no real reason, it's an arbitrary customs rule",
              "Only to collect extra duty revenue",
            ],
            correctIndex: 1,
            explanation:
              "Agricultural restrictions exist to protect U.S. agriculture and the environment from pests and foreign animal diseases that fresh or unprocessed items can carry.",
            sourceLessonSlug: "prohibited-restricted-items",
          },
        ],
      },
    },
  ],
};
