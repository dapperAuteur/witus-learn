// Authored "International Travel Basics" — the connective "start here" hub for the Travel &
// Living Abroad category. It ties the whole pre-trip checklist together for U.S. travelers and
// points to the deeper sibling courses (How to Get a U.S. Passport; Travel Visas 101) rather
// than duplicating their depth. Cited to authoritative sources only: the U.S. Department of
// State (travel.state.gov), CDC Travelers' Health (wwwnc.cdc.gov/travel), and U.S. Customs and
// Border Protection (cbp.gov). Every citation was verified against the live official source
// before authoring (WebSearch) — no fabricated requirements. Because fees, exemption amounts,
// and requirements CHANGE, this course teaches the process/structure and repeatedly points
// learners to the official source for current figures (authoritative-values rule) — the same
// pattern as its siblings.
// In the "Travel & Living Abroad" category alongside How to Get a U.S. Passport
// (content/travel-passport) and Travel Visas 101 (content/travel-visa).
// Ends with a quiz whose every question links back to the lesson that teaches the answer
// (the quiz standard).

import type { AuthoredCourse } from "./authored-course";

export const TRAVEL_BASICS_COURSE: AuthoredCourse = {
  title: "International Travel Basics",
  description:
    "The start-here hub for U.S. travelers planning an international trip: a pre-trip timeline, passport and visa readiness, STEP and Travel Advisories, travel insurance, health prep, money abroad, packing and documents, staying safe (and what to do in an emergency), and coming home through customs. Points to the deeper Passports and Visas courses rather than repeating them. Cited throughout to travel.state.gov, CDC Travelers' Health, and CBP.",
  lessons: [
    {
      slug: "planning-timeline",
      title: "1 · Welcome: build your pre-trip timeline",
      body: `International travel has a lot of moving pieces, passport, visa, health, insurance, money, safety planning, and they don't all start on the same clock. This course is the hub: it walks through **every** piece at a high level, in the order you'd actually plan them, and points you to the two deeper courses in this category (**How to Get a U.S. Passport** and **Travel Visas 101**) whenever a topic needs more depth than a single lesson can give.

The U.S. Department of State's own **International Travel Checklist** frames trip prep as five steps: learn about your destination, enroll in STEP, organize your travel documents, review safety and health tips for your specific situation, and consider travel insurance (U.S. Department of State, n.d.-a). This course follows that same shape, lesson by lesson, and adds the two steps the checklist assumes you already know: passports and visas.

**A rough timeline that works for most trips:**

- **As soon as you're planning international travel**: check your passport's expiration date (Lesson 2), renewals and first-time applications take time.
- **At least 4-6 weeks before departure**: see a healthcare provider or travel health specialist about destination-specific vaccines and medicines (Lesson 6); this lead time matters because some vaccines need weeks to become effective (Centers for Disease Control and Prevention, n.d.-b).
- **Weeks before departure**: confirm your destination's visa/entry requirements (Lesson 3), enroll in STEP and check the Travel Advisory level (Lesson 4), buy travel insurance if you need it (Lesson 5), and set up your money plan (Lesson 7).
- **Days before departure**: finish packing and make copies of your documents (Lesson 8).
- **While you're there, and on the way home**: know how to get help in an emergency (Lesson 9) and what to expect re-entering the U.S. (Lesson 10).

None of this replaces checking your specific destination's current requirements, it's the map, not the territory.

:::reveal According to the State Department's own checklist, what are the five steps to preparing for international travel? ||| Learn about your destination, enroll in STEP, organize your travel documents, review safety and health tips for your situation, and consider travel insurance.

## Sources
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-a). *International travel checklist*. Travel.State.gov. https://travel.state.gov/en/international-travel/planning/checklist.html
- Centers for Disease Control and Prevention. (n.d.-b). *Before you travel*. Travelers' Health. https://wwwnc.cdc.gov/travel/page/before-travel`,
    },
    {
      slug: "passport-readiness",
      title: "2 · Passport readiness",
      body: `Your passport is the one document nearly every international trip needs, and it's the piece with the longest lead time, so it's first on the timeline.

**The quick check:** is your passport valid, and valid for *long enough*? Many countries, especially in Europe, require your passport to remain valid for **at least 6 months beyond your travel dates**, not just be unexpired on the day you fly; some airlines will refuse to board you if this isn't met (U.S. Department of State, n.d.-a). This requirement varies by destination, so confirm it for your specific country before you book.

**If you don't have a passport yet, or yours won't meet that bar in time:** this course doesn't re-teach the application process, the sibling course **How to Get a U.S. Passport** covers first-time applications (Form DS-11), renewals (Form DS-82), fees, processing times, and passports for minors in full. The one thing worth repeating here: **processing takes real time**, and it can lengthen with seasonal demand, so don't wait until weeks before a trip to check your passport's status.

**Quick checklist for this lesson:**
- Check your expiration date now, today, before you plan anything else.
- Check your destination's specific validity requirement (not just "6 months" as a universal rule).
- If you need to apply or renew, start now, see *How to Get a U.S. Passport* for the full process.

:::reveal Why is "my passport hasn't expired yet" not always enough to travel internationally? ||| Many countries, especially in Europe, require your passport to stay valid for at least 6 months beyond your trip's dates, not just be unexpired on your travel date, and some airlines enforce this at boarding.

## Sources
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-a). *International travel checklist*. Travel.State.gov. https://travel.state.gov/en/international-travel/planning/checklist.html`,
      recallContent: [
        {
          prompt: "According to the State Department's own checklist, what are the five steps to preparing for international travel?",
          answer:
            "Learn about your destination, enroll in STEP, organize your travel documents, review safety and health tips for your situation, and consider travel insurance.",
        },
      ],
    },
    {
      slug: "visas-and-entry-requirements",
      title: "3 · Visa and entry requirements",
      body: `A passport proves who you are. A **visa**, where one is required, is a different thing: permission from the *destination country's* government to enter, for a specific purpose and length of stay. Not every trip needs one; some countries require an electronic travel authorization instead; and the rules are set unilaterally by each country and can change with little notice (U.S. Department of State, n.d.-a).

This course doesn't re-teach how to figure out visa requirements destination by destination, the sibling course **Travel Visas 101** covers the method in full: the four common visa categories (visa-free, visa on arrival, e-visa, embassy/consulate visa), Europe's Schengen Area and the new ETIAS authorization, typical required documents, transit visas, and overstay rules.

**The one habit worth repeating here:** check **two** sources, in this order, every trip, the State Department's country information pages at travel.state.gov, and the destination's own official embassy, consulate, or immigration website (U.S. Department of State, n.d.-a). A travel blog or a friend's experience from last year is not a substitute for either, requirements change, sometimes for reasons that have nothing to do with anything you'd read about in the news.

:::reveal What are the two authoritative sources you should check for any destination's current entry/visa requirements? ||| The State Department's country information pages at travel.state.gov, and the destination country's own official embassy, consulate, or immigration website.

## Sources
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-a). *International travel checklist*. Travel.State.gov. https://travel.state.gov/en/international-travel/planning/checklist.html`,
      recallContent: [
        {
          prompt: "Why is 'my passport hasn't expired yet' not always enough to travel internationally?",
          answer:
            "Many countries, especially in Europe, require your passport to stay valid for at least 6 months beyond your trip's dates, not just be unexpired on your travel date, and some airlines enforce this at boarding.",
        },
      ],
    },
    {
      slug: "step-and-travel-advisories",
      title: "4 · STEP and Travel Advisories",
      body: `Two free State Department tools work together to keep you informed before and during a trip.

**Travel Advisories** rate every country on a **4-level scale**: Level 1 (Exercise Normal Precautions), Level 2 (Exercise Increased Caution), Level 3 (Reconsider Travel), and Level 4 (Do Not Travel) (U.S. Department of State, n.d.-c). Levels 1 and 2 are reviewed roughly annually; Levels 3 and 4 are reviewed at least twice a year, and any level can be updated immediately if conditions change (U.S. Department of State, n.d.-c). Check your destination's current level before you book, and again before you go.

**STEP, the Smart Traveler Enrollment Program**, is a free service you enroll in for a *specific trip*: register your destination and dates, and you'll receive security, health, and safety alerts from the nearest U.S. embassy or consulate for that window, along with a way for the embassy to reach *you* in a crisis (U.S. Department of State, n.d.-a, n.d.-b). It's the mechanism that turns a Travel Advisory into an alert that actually finds you while you're traveling.

**The habit:** enroll in STEP for every international trip, not just ones to places that feel risky, natural disasters, political unrest, and local emergencies can happen anywhere, and STEP is how the embassy knows you're there.

:::reveal What does enrolling in STEP actually get you, and how does it connect to Travel Advisories? ||| STEP registers your specific trip's destination and dates so the nearest U.S. embassy or consulate can send you security, health, and safety alerts and reach you in a crisis, it's what turns a destination's Travel Advisory level into alerts that find you while you're traveling.

## Sources
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-a). *International travel checklist*. Travel.State.gov. https://travel.state.gov/en/international-travel/planning/checklist.html
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-b). *Smart Traveler Enrollment Program (STEP)*. Travel.State.gov. https://travel.state.gov/en/international-travel/travel-advisories/smart-traveler-enrollment-program.html
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-c). *Travel advisories*. Travel.State.gov. https://travel.state.gov/en/international-travel/travel-advisories.html`,
      recallContent: [
        {
          prompt: "What are the two authoritative sources you should check for any destination's current entry/visa requirements?",
          answer:
            "The State Department's country information pages at travel.state.gov, and the destination country's own official embassy, consulate, or immigration website.",
        },
      ],
    },
    {
      slug: "travel-insurance",
      title: "5 · Travel insurance",
      body: `Here's the fact that makes this lesson necessary: **the U.S. government does not provide insurance or pay for any costs for U.S. citizens abroad** (U.S. Department of State, n.d.-a). Your U.S. health insurance, Medicare, and Medicaid typically don't cover care outside the U.S. either. If you get sick, injured, or need to be evacuated for medical care while traveling internationally, the default is that **you** pay for it, out of pocket, at the destination's rates, unless you've arranged coverage in advance.

That's what travel insurance, specifically **travel medical insurance**, is for: coverage for emergency medical care and medical evacuation while abroad. It can be a standalone medical/evacuation policy or bundled into a broader travel-insurance plan that also covers trip cancellation or interruption; the State Department's checklist recommends reviewing the specific coverage before you buy, since policies vary in what they actually cover (U.S. Department of State, n.d.-a).

**Before you buy or skip it, ask:**
- Does my destination or activity (e.g., adventure travel, high-altitude trekking, a region with limited medical infrastructure) make evacuation coverage especially important?
- Does any policy I already have (credit card travel benefits, an existing plan) already cover medical emergencies abroad, and does it cover *evacuation*, not just treatment?
- What's excluded? Pre-existing conditions and certain activities are common exclusions to check for.

This course doesn't recommend a specific insurer, verify current options and coverage details directly with providers, since offerings change.

:::reveal What does the State Department itself say about who pays your medical costs if you get sick or hurt abroad? ||| The U.S. government does not provide insurance or pay for any costs for U.S. citizens abroad, and U.S. health insurance/Medicare/Medicaid typically don't cover care outside the U.S. either, travel medical insurance is how you cover that gap.

## Sources
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-a). *International travel checklist*. Travel.State.gov. https://travel.state.gov/en/international-travel/planning/checklist.html`,
      recallContent: [
        {
          prompt: "What does enrolling in STEP actually get you?",
          answer:
            "STEP registers your specific trip's destination and dates so the nearest U.S. embassy or consulate can send you security, health, and safety alerts and reach you in a crisis.",
        },
      ],
    },
    {
      slug: "health-prep-before-you-go",
      title: "6 · Health prep: vaccines and medical planning",
      body: `Health prep is the item most likely to get skipped because it has the longest lead time and no hard deadline forcing it, which is exactly why it goes early on your timeline.

**See a healthcare provider or travel health specialist at least 4-6 weeks before you leave.** They can advise you on destination-specific vaccines, medicines, and health risks based on your itinerary, planned activities, and any health conditions you disclose (Centers for Disease Control and Prevention, n.d.-b). That lead time isn't arbitrary: some vaccines take multiple doses spread over weeks, and your body needs time after vaccination to build immunity (Centers for Disease Control and Prevention, n.d.-b).

**Check CDC's destination-specific pages** at wwwnc.cdc.gov/travel for your specific country, they list the vaccines, medicines, and health notices relevant to that destination, since risk varies enormously by country and even by region within a country (Centers for Disease Control and Prevention, n.d.-a, n.d.-d). Also make sure your **routine** vaccinations (the ones not specific to travel) are up to date, your provider can check this at the same appointment.

**One more thing worth checking before you pack:** the State Department's checklist flags that **some prescription and over-the-counter medications that are legal in the U.S. are not legal in some other countries**, even common ones (U.S. Department of State, n.d.-a). If you take regular medication, verify its legal status at your destination before you travel, and consider carrying it in original, labeled packaging with a copy of your prescription.

:::reveal How far in advance should you see a healthcare provider before international travel, and why does that lead time matter? ||| At least 4-6 weeks before you leave, because some vaccines require multiple doses over several weeks, and your body needs time afterward to build immunity.

## Sources
- Centers for Disease Control and Prevention. (n.d.-a). *Travelers' health*. https://wwwnc.cdc.gov/travel
- Centers for Disease Control and Prevention. (n.d.-b). *Before you travel*. Travelers' Health. https://wwwnc.cdc.gov/travel/page/before-travel
- Centers for Disease Control and Prevention. (n.d.-d). *Destinations*. Travelers' Health. https://wwwnc.cdc.gov/travel/destinations/list
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-a). *International travel checklist*. Travel.State.gov. https://travel.state.gov/en/international-travel/planning/checklist.html`,
      recallContent: [
        {
          prompt: "What does the State Department itself say about who pays your medical costs if you get sick or hurt abroad?",
          answer:
            "The U.S. government does not provide insurance or pay for any costs for U.S. citizens abroad, travel medical insurance is how you cover that gap.",
        },
      ],
    },
    {
      slug: "money-abroad",
      title: "7 · Money abroad",
      body: `Money problems abroad are rarely about not having *any* money, they're about not having **accessible** money at the moment you need it. A few habits from the State Department's own trip-planning guidance cover most of the risk:

**Before you go:**
- Tell your bank and credit card companies you're traveling, and confirm your cards will work at your destination, a card frozen for "suspicious activity" in another country is one of the most common and preventable travel headaches.
- Carry more than one way to pay: a primary card, a backup card (ideally from a different bank), and a modest amount of cash, not carrying all your money in one form or one place.
- Review the **Crime and Safety** section of your destination's Country Specific Information on travel.state.gov before you go, it flags financial and ATM scams specifically targeting foreign visitors in that country (U.S. Department of State, n.d.-a).

**While you're there:** avoid carrying large amounts of cash, and keep the bulk of your funds split across cards and a hotel safe rather than in one wallet.

**If it goes wrong, you're robbed, or you simply run out of money abroad:** this isn't a dead end. Lesson 9 covers how a U.S. embassy or consulate can help you contact family or your bank, and the emergency-loan programs the State Department offers destitute citizens as a last resort.

Remember the fact from Lesson 5: **the U.S. government does not pay your costs abroad** (U.S. Department of State, n.d.-a), these habits are about avoiding a money emergency in the first place, not relying on a bailout if one happens.

:::reveal Name two habits that reduce the risk of a money problem while traveling abroad. ||| Any two of: notify your bank/card companies before you travel, carry more than one way to pay (not all cash or one card), avoid carrying large amounts of cash at once, and check your destination's Crime and Safety information for common financial/ATM scams.

## Sources
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-a). *International travel checklist*. Travel.State.gov. https://travel.state.gov/en/international-travel/planning/checklist.html`,
      recallContent: [
        {
          prompt: "How far in advance should you see a healthcare provider before international travel, and why does that lead time matter?",
          answer:
            "At least 4-6 weeks before you leave, because some vaccines require multiple doses over several weeks, and your body needs time afterward to build immunity.",
        },
      ],
    },
    {
      slug: "packing-and-documents",
      title: "8 · Packing and documents",
      body: `Packing for international travel is less about clothes and more about **documents you can't easily replace on the road**. The State Department's checklist step "organize your travel documents" comes down to a few concrete habits (U.S. Department of State, n.d.-a):

**Make copies, physical and digital, of:**
- Your passport's photo page (and any visa pages).
- Your travel insurance policy and its emergency contact number (Lesson 5).
- Prescriptions and a list of any medications you're carrying, especially if you'll need to explain or replace one abroad (Lesson 6).
- Any child-custody or travel-consent documents, if you're traveling internationally with a minor and not both legal parents/guardians.

**Keep copies separate from the originals**, in a different bag, and stored digitally (e.g., emailed to yourself or saved somewhere you can access without your phone), so a lost or stolen bag doesn't take every copy down with it.

**A few destination-dependent items to check ahead of time:**
- An **International Driving Permit**, if you plan to drive, many countries don't accept a U.S. driver's license alone (U.S. Department of State, n.d.-a).
- Proof of onward or return travel, sometimes requested at entry (covered in more depth in *Travel Visas 101*).
- Your STEP enrollment confirmation and the nearest U.S. embassy/consulate's contact info for your destination (Lesson 4 and Lesson 9).

**Write down, or save offline, the phone number and address of the nearest U.S. embassy or consulate at your destination** before you leave, you don't want to be searching for it for the first time during an actual emergency.

:::reveal Why should copies of your passport and other key documents be stored separately from the originals, and in more than one form? ||| So that a single lost or stolen bag doesn't take both the original and every copy with it, keep physical copies in a different bag and digital copies somewhere accessible without your phone.

## Sources
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-a). *International travel checklist*. Travel.State.gov. https://travel.state.gov/en/international-travel/planning/checklist.html`,
      recallContent: [
        {
          prompt: "Name two habits that reduce the risk of a money problem while traveling abroad.",
          answer:
            "Any two of: notify your bank/card companies before you travel, carry more than one way to pay, avoid carrying large amounts of cash at once, and check your destination's Crime and Safety information for common scams.",
        },
      ],
    },
    {
      slug: "staying-safe-emergencies-abroad",
      title: "9 · Staying safe: emergencies and embassy help",
      body: `Every country has a U.S. embassy or, in many cities, a consulate, and knowing what they can (and can't) do for you before you need it is worth five minutes now.

**What a U.S. embassy or consulate can help with:** replacing a lost or stolen passport, supporting victims of crime, locating a missing U.S. citizen, advising someone arrested or detained abroad, providing emergency financial assistance, and coordinating a crisis response or evacuation (U.S. Department of State, n.d.-d). If you lose your passport, report it **immediately**, you'll need to apply in person for a replacement, and in a genuine emergency the consular section can issue a limited-validity emergency passport (U.S. Department of State, n.d.-e).

**24/7 emergency contact numbers**, for when you can't reach the local embassy directly: **888-407-4747** from the U.S. or Canada, or **202-501-4444** from anywhere else (U.S. Department of State, n.d.-d).

**If you run out of money abroad** (Lesson 7), the embassy's role is mainly to *connect* you to help, not hand you cash directly: they can help you reach family, friends, or an employer to arrange a transfer, including through the State Department's own **OCS Trust** wire-transfer service. As a last resort for citizens with no other options, the Department offers **repatriation loans** (covering transportation and temporary food/lodging to get you home) and **emergency medical loans**, but these are loans, not gifts, and your passport is restricted until repaid (U.S. Department of State, n.d.-f).

**Before you travel:** save your destination's embassy/consulate address and phone number (not just the emergency numbers above), and make sure your STEP enrollment (Lesson 4) is current for your actual trip dates, it's the fastest way the embassy learns you're in-country if something happens.

:::reveal If you run out of money abroad, what does a U.S. embassy typically do to help, and what's the important catch about the loan programs it offers? ||| It mainly helps connect you to outside help (family, friends, an employer, or the OCS Trust wire-transfer service); as a last resort it can offer repatriation or emergency medical loans, but these must be repaid and your passport is restricted until you do.

## Sources
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-d). *Help abroad*. Travel.State.gov. https://travel.state.gov/en/international-travel/help-abroad.html
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-e). *Lost or stolen passport abroad*. Travel.State.gov. https://travel.state.gov/en/international-travel/help-abroad/lost-stolen-passport.html
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-f). *Emergency financial assistance for U.S. citizens abroad*. Travel.State.gov. https://travel.state.gov/content/travel/en/international-travel/while-abroad/sending-money-abroad.html`,
      recallContent: [
        {
          prompt: "Why should copies of your passport and other key documents be stored separately from the originals, and in more than one form?",
          answer:
            "So that a single lost or stolen bag doesn't take both the original and every copy with it.",
        },
      ],
    },
    {
      slug: "coming-home-customs",
      title: "10 · Coming home: customs and re-entry",
      body: `Your trip isn't over at the arrival gate, re-entering the U.S. has its own rules, enforced by **U.S. Customs and Border Protection (CBP)**, separate from anything the State Department or a foreign country required of you on the way out.

**Every returning traveler is inspected.** CBP officers are authorized to ask about your trip and anything you're bringing back that you didn't have when you left (U.S. Customs and Border Protection, n.d.-a). **Declare everything** you acquired abroad, merchandise, gifts, and agricultural products, using the CBP declaration process at arrival; if in doubt, declare it, because failing to declare something that should have been declared risks forfeiting it (U.S. Customs and Border Protection, n.d.-a).

**Duty-free personal exemptions.** A dollar value of goods you bring back is typically exempt from duty, currently **$200, $800, or $1,600, depending on which countries you visited**, but you generally need to have been outside the U.S. for at least **48 hours** and not have used the exemption in the last 30 days, among other conditions (U.S. Customs and Border Protection, n.d.-a, n.d.-b). Because these dollar amounts and rules are set by federal regulation and can change, **confirm the current exemption for your specific itinerary at cbp.gov before you rely on it**, don't treat the figures above as permanent.

**A few things that trip up first-time re-entrants:**
- Agricultural products (fresh food, plants, some animal products) are restricted or banned, even in small amounts, when unsure, declare it and let CBP decide.
- CBP officers have legal authority to search you, your baggage, and your vehicle.
- Some travelers are eligible for expedited/no-declaration processing at certain airports; that's a convenience program, not a substitute for knowing your own exemption status.

This closes the loop on the whole course: plan ahead (Lessons 1-8), stay safe and know how to get help while you're there (Lesson 9), and know what's expected of you on the way back in.

:::reveal What's the safest rule of thumb if you're not sure whether something you're bringing back needs to be declared to CBP? ||| Declare it. Failing to declare something that should have been declared risks having it forfeited, and the specific duty-free exemption amounts should always be confirmed at cbp.gov since they're set by regulation and can change.

## Sources
- U.S. Customs and Border Protection. (n.d.-a). *Know before you go*. https://www.cbp.gov/travel/us-citizens/know-before-you-go
- U.S. Customs and Border Protection. (n.d.-b). *What to expect when you return*. https://www.cbp.gov/travel/us-citizens/know-before-you-go/what-expect-when-you-return`,
      recallContent: [
        {
          prompt: "If you run out of money abroad, what does a U.S. embassy typically do to help?",
          answer:
            "It mainly helps connect you to outside help, family, friends, an employer, or the OCS Trust wire-transfer service, and as a last resort can offer repatriation or emergency medical loans that must be repaid.",
        },
      ],
    },
    {
      slug: "international-travel-basics-quiz",
      title: "11 · Check your understanding",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "According to the State Department's own International Travel Checklist, which of these is one of its five recommended steps?",
            options: [
              "Book only refundable flights",
              "Enroll in STEP",
              "Learn the destination's language fluently",
              "Buy foreign currency a year in advance",
            ],
            correctIndex: 1,
            explanation:
              "The checklist's five steps are: learn about your destination, enroll in STEP, organize your travel documents, review safety/health tips for your situation, and consider travel insurance.",
            sourceLessonSlug: "planning-timeline",
          },
          {
            prompt: "Why can't you assume 'my passport hasn't expired' is enough to travel internationally?",
            options: [
              "Passports must always be replaced every 2 years regardless of expiration",
              "Many countries require at least 6 months of validity remaining beyond your trip, and some airlines enforce this at boarding",
              "Passports expire the moment you leave the country",
              "It's always fine, expiration dates don't matter for travel",
            ],
            correctIndex: 1,
            explanation:
              "Many destinations, especially in Europe, require 6+ months of remaining validity beyond your travel dates, not just an unexpired passport on the day you fly.",
            sourceLessonSlug: "passport-readiness",
          },
          {
            prompt: "What are the two authoritative sources you should check for a destination's current visa/entry requirements?",
            options: [
              "A travel blog and a friend who went recently",
              "The airline's booking page only",
              "The State Department's country pages (travel.state.gov) and the destination's own official embassy/consulate site",
              "A third-party visa-checker app",
            ],
            correctIndex: 2,
            explanation:
              "Requirements are set unilaterally by each destination country and change; travel.state.gov gives the U.S. side, and the destination's own official site has the authoritative current details.",
            sourceLessonSlug: "visas-and-entry-requirements",
          },
          {
            prompt: "What does STEP (the Smart Traveler Enrollment Program) actually do?",
            options: [
              "It automatically books your flights",
              "It registers your specific trip so the nearest U.S. embassy can send you alerts and reach you in a crisis",
              "It replaces the need for a passport",
              "It guarantees a full refund if your trip is canceled",
            ],
            correctIndex: 1,
            explanation:
              "STEP registers your destination and travel dates so the nearest embassy/consulate can send security, health, and safety alerts, and reach you in an emergency.",
            sourceLessonSlug: "step-and-travel-advisories",
          },
          {
            prompt: "According to the State Department, who pays your medical bills if you get sick or hurt while traveling abroad?",
            options: [
              "The U.S. government automatically covers it",
              "Your destination country's government",
              "You do, the U.S. government does not provide insurance or pay costs for citizens abroad, and U.S. health insurance often doesn't cover it either",
              "Your airline is required to cover it",
            ],
            correctIndex: 2,
            explanation:
              "The State Department is explicit: it does not provide insurance or pay any costs for U.S. citizens abroad, this is exactly the gap travel medical insurance is meant to cover.",
            sourceLessonSlug: "travel-insurance",
          },
          {
            prompt: "How far ahead should you see a healthcare provider before international travel, and why?",
            options: [
              "The day before you leave, so advice is fresh",
              "At least 4-6 weeks before, since some vaccines need multiple doses and time to build immunity",
              "There's no need to see a provider before travel",
              "Exactly 24 hours before, per CDC guidance",
            ],
            correctIndex: 1,
            explanation:
              "CDC recommends at least 4-6 weeks of lead time because some travel vaccines require multiple doses spread over weeks, plus time afterward for immunity to develop.",
            sourceLessonSlug: "health-prep-before-you-go",
          },
          {
            prompt: "Which of these is a recommended habit for managing money safely abroad?",
            options: [
              "Carry all your funds as cash in one wallet for simplicity",
              "Notify your bank/card companies before you travel and carry more than one way to pay",
              "Avoid checking your destination's Crime and Safety information, it's for tourists, not residents",
              "Rely on the U.S. embassy to cover any shortfall automatically",
            ],
            correctIndex: 1,
            explanation:
              "Notifying your bank, carrying multiple payment methods, avoiding large cash amounts, and checking destination-specific scam warnings all reduce the risk of a money problem abroad.",
            sourceLessonSlug: "money-abroad",
          },
          {
            prompt: "If your bag with your only passport copy is lost or stolen abroad, what habit from this course would have protected you?",
            options: [
              "Keeping the only copy in the same bag as the original, for convenience",
              "Keeping physical and digital copies of key documents stored separately from the originals",
              "Memorizing your passport number instead of keeping any copies",
              "Not carrying your passport at all while sightseeing",
            ],
            correctIndex: 1,
            explanation:
              "Copies (physical, in a different bag, plus digital) mean a single lost or stolen bag doesn't take every copy of your documents down with it.",
            sourceLessonSlug: "packing-and-documents",
          },
          {
            prompt: "What can a U.S. embassy or consulate help with if you're in an emergency abroad?",
            options: [
              "Nothing, they can only assist with passport renewals",
              "Replacing a lost/stolen passport, supporting crime victims, and connecting you to emergency financial help, among other things",
              "Only issuing new visas for other countries",
              "Paying your hotel bill directly with no repayment required",
            ],
            correctIndex: 1,
            explanation:
              "Embassies and consulates help with lost/stolen passports, crime victims, missing citizens, arrests, emergency financial assistance (including last-resort loans), and crisis evacuations.",
            sourceLessonSlug: "staying-safe-emergencies-abroad",
          },
          {
            prompt: "When re-entering the U.S., if you're not sure whether something you bought abroad needs to be declared to CBP, what should you do?",
            options: [
              "Skip declaring it if it's a small item",
              "Declare it, failing to declare something that should have been declared risks forfeiting it",
              "Only declare items over $5,000",
              "Ask a fellow passenger for advice instead of CBP",
            ],
            correctIndex: 1,
            explanation:
              "CBP's guidance is direct: when in doubt, declare it. Duty-free exemption amounts ($200/$800/$1,600 depending on countries visited) and conditions should be confirmed at cbp.gov, since they can change.",
            sourceLessonSlug: "coming-home-customs",
          },
        ],
      },
    },
  ],
};
