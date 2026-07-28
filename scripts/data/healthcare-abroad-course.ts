// Authored "Healthcare Abroad" course for the "Travel & Living Abroad" category on Learn.WitUS.
// For U.S. citizens traveling or living abroad: how healthcare differs once you leave the U.S.,
// travel medical insurance (a trip) vs. international/expat health insurance (living abroad), the
// key fact that Medicare generally does NOT cover care outside the U.S., getting and legally
// carrying medications abroad, routine and emergency care, medical evacuation/repatriation, and
// exactly what the State Department can (and cannot) do to help.
//
// Deliberately educational, not medical or insurance advice: every lesson says so, and the course
// repeatedly points learners to their own doctor, insurer, Medicare, and the cited official sources
// rather than telling them what to buy or do.
//
// AUTHORITATIVE-VALUES RULE (load-bearing here): specific dollar figures (Medigap's $250 deductible/
// $50,000 lifetime cap, air-ambulance evacuation cost ranges) are cited directly from Medicare.gov
// and travel.state.gov, but fees, coverage details, and cost ranges all change over time. This course
// never asserts them as permanent; it repeatedly tells the learner to confirm current numbers with
// Medicare.gov, travel.state.gov, the CDC, and their own plan/insurer before relying on them.
//
// Cited throughout to Medicare.gov (Centers for Medicare & Medicaid Services), travel.state.gov
// (U.S. Department of State, Bureau of Consular Affairs), and the CDC's Travelers' Health / Yellow
// Book. Companion to Moving Abroad 101 (which points here for healthcare depth) and International
// Travel Basics / Travel Insurance lessons in the same category.
//
// Ends with a quiz whose every question links back to the lesson that teaches the answer (the quiz
// standard).

import type { AuthoredCourse } from "./authored-course";

export const HEALTHCARE_ABROAD_COURSE: AuthoredCourse = {
  title: "Healthcare Abroad",
  description:
    "For U.S. citizens traveling or living abroad: how healthcare systems and payment expectations differ once you leave the U.S., travel medical insurance for a trip versus international (expat) health insurance for living abroad, the key fact that Medicare generally does not cover care outside the U.S., getting and legally carrying medications abroad, routine and emergency care, medical evacuation and repatriation, and exactly what the State Department can (and cannot) do to help. This course is educational only, not medical or insurance advice; always confirm current coverage, costs, and rules with your own doctor, insurer, Medicare, and the official sources cited throughout. Cited to Medicare.gov, travel.state.gov, and the CDC's Travelers' Health resources.",
  lessons: [
    {
      slug: "how-healthcare-differs-abroad",
      title: "1 · How healthcare differs once you leave the U.S.",
      body: `**This course is educational only.** It explains how healthcare abroad typically works and the choices worth thinking through before you go. It is not medical advice, not insurance advice, and not a substitute for talking with your own doctor, your insurer, and the official sources cited in every lesson.

There is no single "healthcare system abroad." Care varies enormously by country, and sometimes by region within one country. Some destinations have strong public systems open to visitors; others rely on excellent but expensive private clinics; infrastructure and specialist availability both differ widely. Anyone planning to spend real time in a country, not just pass through, needs to identify a healthcare source in advance rather than assume equivalent care will simply be there (Centers for Disease Control and Prevention, n.d.-a).

The one thing that is consistent almost everywhere: **you are usually expected to pay, often before you are treated.** The State Department states this plainly. In many locations, a payment or deposit is required before any services are provided, and the U.S. government does not pay medical costs for U.S. citizens abroad (U.S. Department of State, Bureau of Consular Affairs, n.d.-a).

That single fact drives most of what follows in this course: travel medical insurance for a short trip (Lesson 2), international health insurance for a longer stay (Lesson 3), why Medicare generally will not help either way (Lesson 4), and how to actually get care and pay for it once you are there (Lesson 6).

:::reveal According to the State Department, what is a common practical reality about paying for medical care abroad, even in an emergency? ||| In many locations you must pay, or put down a deposit, before you are treated. The U.S. government does not pay medical costs for U.S. citizens abroad.

## Sources
- Centers for Disease Control and Prevention. (n.d.-a). *Long-term travelers and expatriates*. CDC Yellow Book. https://www.cdc.gov/yellow-book/hcp/travel-for-work-other/long-term-travelers-and-expatriates.html
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-a). *Travel insurance*. Travel.State.gov. https://travel.state.gov/content/travel/en/international-travel/before-you-go/your-health-abroad/Insurance_Coverage_Overseas.html`,
    },
    {
      slug: "travel-medical-insurance",
      title: "2 · Travel medical insurance: coverage for a trip",
      body: `**Travel medical insurance** is coverage built around a single, defined trip. It is meant to pay for emergency medical care, and often medical evacuation (Lesson 7), if you get sick or hurt while traveling, for the length of that trip only.

The CDC's own guidance splits travel-related coverage into three distinct products, and it is worth knowing the difference before you shop: **travel disruption (trip) insurance**, which covers things like cancellation and lost luggage; **travel health insurance**, which covers medical care abroad; and **medical evacuation insurance**, which covers getting you to adequate care, or home, when local care is not enough (Centers for Disease Control and Prevention, n.d.-b). A single bundled policy can include more than one of these, but they are not the same coverage, and a policy can easily have one without the other.

Before you buy, or decide your existing coverage is enough, the State Department recommends checking a few things directly with the insurer: whether your current health plan covers care outside the U.S. at all (most U.S. plans, including Medicare, generally do not, as Lesson 4 covers), what a travel medical policy specifically covers (emergency care, medical transport home, with pre-existing conditions a common exclusion to check for), and whether it is a standalone policy or bundled into broader trip insurance (U.S. Department of State, Bureau of Consular Affairs, n.d.-a).

This course does not recommend a specific insurer. Offerings and coverage details change, so verify what a policy actually covers directly with the provider before you buy.

:::reveal What are the three distinct types of travel-related insurance the CDC identifies, and what does each one cover? ||| Travel disruption (trip) insurance covers things like cancellation and lost luggage; travel health insurance covers medical care abroad; medical evacuation insurance covers getting you to adequate care or home. A bundled policy can include more than one, but they are different coverages.

## Sources
- Centers for Disease Control and Prevention. (n.d.-b). *Travel insurance, travel health insurance, and medical evacuation insurance*. CDC Yellow Book. https://www.cdc.gov/yellow-book/hcp/health-care-abroad/travel-insurance.html
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-a). *Travel insurance*. Travel.State.gov. https://travel.state.gov/content/travel/en/international-travel/before-you-go/your-health-abroad/Insurance_Coverage_Overseas.html`,
      recallContent: [
        {
          prompt: "According to the State Department, what is a common practical reality about paying for medical care abroad, even in an emergency?",
          answer:
            "In many locations you must pay, or put down a deposit, before you're treated. The U.S. government does not pay medical costs for U.S. citizens abroad.",
        },
        {
          prompt: "Why does this course say there's no single 'healthcare system abroad'?",
          answer:
            "Because care varies enormously by country, and even by region within a country, in its public/private mix, cost, and availability of specialists.",
        },
      ],
    },
    {
      slug: "international-expat-health-insurance",
      title: "3 · International (expat) health insurance: coverage for living abroad",
      body: `Travel medical insurance (Lesson 2) is built for a trip. **International health insurance**, sometimes called expat health insurance, is built for something different: ongoing, renewable coverage for someone actually living in a country, meant to pay for routine care and continuing treatment, not just a single emergency.

The CDC draws this line by duration. Long-term travel, commonly considered six months or more, changes the planning that is needed, especially for lower- and middle-income destinations, and anyone in that position (whether an expatriate with a fixed assignment or an open-ended traveler) should determine in advance whether they need supplemental international health insurance and separate evacuation insurance, rather than rely on a short-trip policy that assumes you will be home soon (Centers for Disease Control and Prevention, n.d.-a).

The CDC also recommends that long-term travelers and expatriates get a complete medical and dental exam before departure, and, for expatriates specifically, consider a pre-departure mental health evaluation, since unaddressed issues are a common cause of early repatriation (Centers for Disease Control and Prevention, n.d.-a). None of that is a one-time travel-insurance question; it is part of planning to actually live somewhere.

A practical note: many long-stay visa categories require proof of health insurance as a condition of the visa itself. This platform's **Moving Abroad 101** course covers those visa-category requirements in more depth; here, the point is simply to confirm your destination's healthcare access path and insurance requirement before you commit to a move, not after.

:::reveal What is the key difference between travel medical insurance (Lesson 2) and international/expat health insurance? ||| Travel medical insurance covers emergencies during a single, defined trip. International/expat health insurance is ongoing and renewable, meant to cover routine and continuing care for someone actually living in a country long-term.

## Sources
- Centers for Disease Control and Prevention. (n.d.-a). *Long-term travelers and expatriates*. CDC Yellow Book. https://www.cdc.gov/yellow-book/hcp/travel-for-work-other/long-term-travelers-and-expatriates.html
- Centers for Disease Control and Prevention. (n.d.-b). *Travel insurance, travel health insurance, and medical evacuation insurance*. CDC Yellow Book. https://www.cdc.gov/yellow-book/hcp/health-care-abroad/travel-insurance.html`,
      recallContent: [
        {
          prompt: "What are the three distinct types of travel-related insurance the CDC identifies?",
          answer:
            "Travel disruption (trip) insurance, travel health insurance, and medical evacuation insurance, each covering something different.",
        },
        {
          prompt: "Name two things the State Department recommends checking before buying, or skipping, travel medical insurance.",
          answer:
            "Whether your current health plan (including Medicare) covers care outside the U.S., and what a travel medical policy specifically covers, including common exclusions like pre-existing conditions.",
        },
      ],
    },
    {
      slug: "medicare-and-care-abroad",
      title: "4 · The key fact: Medicare generally does not cover care outside the U.S.",
      body: `Here is the fact this entire course keeps returning to, stated directly by Medicare.gov: **Medicare usually does not cover health care while you are traveling outside the U.S.** (Centers for Medicare & Medicaid Services, n.d.-a). For Medicare's purposes, "the U.S." means the 50 states, the District of Columbia, Puerto Rico, the U.S. Virgin Islands, Guam, the Northern Mariana Islands, and American Samoa. Anywhere else counts as outside the U.S., whether that is a two-week vacation or a retirement spent living abroad (Centers for Medicare & Medicaid Services, n.d.-a).

**There are narrow exceptions**, and all of them are about geography, not intent:
1. You are in the U.S. when a medical emergency happens, and a foreign hospital is closer than the nearest U.S. hospital able to treat you.
2. You are traveling without unreasonable delay, by the most direct route, through Canada between Alaska and another U.S. state, a medical emergency happens, and the Canadian hospital is closer than the nearest capable U.S. hospital.
3. You live in the U.S. and a foreign hospital is closer to your home than the nearest U.S. hospital able to treat your condition. This one does not even require an emergency.
(Centers for Medicare & Medicaid Services, n.d.-a)

Outside those specific situations, if you get sick or hurt while traveling or living abroad, Original Medicare does not pay. Medicare drug coverage (Part D) does cover vaccines recommended by the Advisory Committee on Immunization Practices, including some you might need before a trip, such as yellow fever. That is coverage for the vaccine itself, given before or apart from travel, not coverage for care you receive once you are abroad (Centers for Medicare & Medicaid Services, n.d.-a).

**Some Medigap (Medicare Supplement) plans add a foreign travel emergency benefit,** but not every plan includes it, so check your own policy. Where it exists, it typically pays 80% of billed charges for medically necessary emergency care abroad, after a $250 yearly deductible, up to a $50,000 lifetime limit, and only for emergency care that begins in the first 60 days of a trip (Centers for Medicare & Medicaid Services, n.d.-b). Medicare Advantage plans vary as well; some include worldwide emergency coverage and some do not. These figures and plan details can change, so confirm your own plan's current coverage directly with Medicare.gov or your plan documents before you travel.

The State Department repeats this warning specifically for older travelers: "U.S. Medicare (for ages 65+) and Medicaid do not cover medical costs abroad" (U.S. Department of State, Bureau of Consular Affairs, n.d.-b). That gap is exactly why travel medical insurance (Lesson 2) and international health insurance (Lesson 3) exist.

:::reveal What does Medicare.gov itself say about coverage outside the U.S., and name one of the narrow exceptions. ||| Medicare usually does not cover health care while traveling outside the U.S. One exception: a medical emergency that starts while you're still in the U.S., where a foreign hospital is closer than the nearest capable U.S. hospital.

## Sources
- Centers for Medicare & Medicaid Services. (n.d.-a). *Travel outside the U.S.* Medicare.gov. https://www.medicare.gov/coverage/travel-outside-the-u.s.
- Centers for Medicare & Medicaid Services. (n.d.-b). *Medicare coverage outside the United States* [Fact sheet]. Medicare.gov. https://www.medicare.gov/publications/11037-medicare-coverage-outside-the-united-states.pdf
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-b). *Age 65+ travelers*. Travel.State.gov. https://travel.state.gov/en/international-travel/planning/personal-needs/age-65.html`,
      recallContent: [
        {
          prompt: "What is the key difference between travel medical insurance and international/expat health insurance?",
          answer:
            "Travel medical insurance covers a single defined trip; international/expat health insurance is ongoing and renewable, for someone actually living abroad.",
        },
        {
          prompt: "What does the CDC recommend long-term travelers and expatriates do before they depart, beyond arranging insurance?",
          answer:
            "Get a complete medical and dental exam, and, for expatriates, consider a pre-departure mental health evaluation, since unaddressed issues are a common cause of early repatriation.",
        },
      ],
    },
    {
      slug: "medications-and-prescriptions-abroad",
      title: "5 · Getting medications abroad, and carrying them legally",
      body: `Two separate problems come up around medication and travel: getting more of a medicine while you are already abroad, and legally carrying the medicine you already take into another country. The second one has real legal stakes.

**Entering another country with certain medicines, even medicines that are entirely legal in the U.S., can lead to arrest or detention abroad.** Rules on what is allowed, restricted, or banned vary by country and are not the same as U.S. rules, so the State Department's direct advice is to check with the embassy of your destination, and of any country where you have a layover, before you travel (U.S. Department of State, Bureau of Consular Affairs, n.d.-c).

The CDC's practical checklist for traveling with medicine:
- Keep medicines in their **original, labeled containers**, clearly showing your name, your health care provider's name, the generic and brand name, and the exact dosage.
- Carry **copies of all written prescriptions**, including generic names, not just the brand name.
- If you use a **controlled substance or an injectable medicine**, such as an EpiPen or insulin, ask your prescribing provider for a note describing it.
- Bring **enough medicine for your entire trip, plus extra** in case of delays, and pack it in your carry-on, not checked luggage.
- Many countries allow a limited supply (commonly around 30 days) of certain medicines, but still require a prescription or a medical certificate to carry it.
(Centers for Disease Control and Prevention, n.d.-c)

If you run out, or need care while already abroad, a local doctor or pharmacist can often prescribe an equivalent, but availability, brand names, and even active ingredients can differ from what you take at home. Bringing your written prescription (with the generic name) is what makes that possible; do not count on finding your exact U.S. brand on a foreign pharmacy shelf.

:::reveal Why does the State Department recommend checking with a destination's embassy before traveling with your medicines, even ones that are legal in the U.S.? ||| Because rules on which medicines are allowed, restricted, or banned vary by country, and entering with a prohibited medicine, even one that's legal at home, can lead to arrest or detention abroad.

## Sources
- Centers for Disease Control and Prevention. (n.d.-c). *Traveling abroad with medicine*. Travelers' Health. https://wwwnc.cdc.gov/travel/page/travel-abroad-with-medicine
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-c). *Medicine and health*. Travel.State.gov. https://travel.state.gov/content/travel/en/international-travel/before-you-go/your-health-abroad.html`,
      recallContent: [
        {
          prompt: "What does Medicare.gov say about Medicare coverage outside the U.S.?",
          answer:
            "Medicare usually doesn't cover health care while you're traveling outside the U.S., with only a few narrow, geography-based exceptions.",
        },
        {
          prompt: "If a Medigap plan includes a foreign travel emergency benefit, what does it typically look like?",
          answer:
            "About 80% of billed charges for medically necessary emergency care after a $250 yearly deductible, up to a $50,000 lifetime limit, only for emergencies beginning in the first 60 days of a trip. Not every Medigap plan includes this benefit.",
        },
      ],
    },
    {
      slug: "routine-and-emergency-care-abroad",
      title: "6 · Getting routine and emergency care once you are there",
      body: `Whether you need a routine visit or an emergency room, the practical experience of getting care abroad is often different from home, and it is worth knowing what to expect before you need it.

**Availability and quality vary by destination, and even by region within a country.** Long-term travelers in particular are advised to identify a healthcare source in advance rather than assume equivalent care will be available when needed (Centers for Disease Control and Prevention, n.d.-a). For a shorter trip, that same instinct still applies at a smaller scale: know where the nearest capable facility is before you need it, not after.

**Expect to pay, and often to pay first.** As Lesson 1 introduced, in many locations a payment or deposit is required before any services are provided (U.S. Department of State, Bureau of Consular Affairs, n.d.-a). Keep a way to pay (cash, a card that works internationally, proof of insurance if you have it) accessible, not packed away.

**Finding reputable care in an unfamiliar place is its own skill.** A U.S. embassy or consulate's website commonly lists local doctors and hospitals, which is one practical way to find care you can trust rather than guessing (U.S. Department of State, Bureau of Consular Affairs, n.d.-c); Lesson 8 covers the government's full role here in detail. A hotel concierge, a local expat community, or your travel insurer's own assistance line (many travel medical policies include one) are other common starting points.

Routine care while abroad, a prescription refill, a check-up, a dental cleaning, generally works the same way as emergency care in terms of payment: you arrange it and pay for it (or file with your insurer) much as you would at home, just without Medicare, or often your regular U.S. insurance, behind you (Lesson 4).

:::reveal According to the State Department, what should you generally expect about paying for care abroad, and why does that matter for how you prepare? ||| Expect that a payment or deposit is often required before you're treated, so keep an accessible way to pay (cash, a working card, insurance proof) rather than assume you can settle up afterward.

## Sources
- Centers for Disease Control and Prevention. (n.d.-a). *Long-term travelers and expatriates*. CDC Yellow Book. https://www.cdc.gov/yellow-book/hcp/travel-for-work-other/long-term-travelers-and-expatriates.html
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-a). *Travel insurance*. Travel.State.gov. https://travel.state.gov/content/travel/en/international-travel/before-you-go/your-health-abroad/Insurance_Coverage_Overseas.html
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-c). *Medicine and health*. Travel.State.gov. https://travel.state.gov/content/travel/en/international-travel/before-you-go/your-health-abroad.html`,
      recallContent: [
        {
          prompt: "Why does the State Department recommend checking with a destination's embassy before traveling with your medicines?",
          answer:
            "Because medicine rules vary by country, and carrying a restricted or banned medicine, even one legal in the U.S., can lead to arrest or detention abroad.",
        },
        {
          prompt: "Name three things the CDC recommends when carrying medicine abroad.",
          answer:
            "Any three of: keep medicines in original labeled containers, carry copies of written prescriptions with generic names, get a provider's note for controlled substances or injectables, bring enough for the whole trip plus extra, and pack them in carry-on luggage.",
        },
      ],
    },
    {
      slug: "medical-evacuation-and-repatriation",
      title: "7 · Medical evacuation and repatriation",
      body: `**Medical evacuation** (sometimes called medevac) means getting you from wherever you are to a hospital that can actually treat you, whether that is a better-equipped facility in-country or transport all the way back to the United States (repatriation). It is a separate coverage question from ordinary travel medical insurance, and it is worth understanding why.

Even where travel health insurance covers routine emergency care, the quality of care available at your location might not be enough, and getting from a resource-limited area to a hospital that can deliver definitive care can be its own emergency (Centers for Disease Control and Prevention, n.d.-b). Most travel medical plans do not automatically cover transport all the way back to the United States. Very few health insurance plans, including most travel plans, pay to bring you home by air ambulance if that is what is medically needed (U.S. Department of State, Bureau of Consular Affairs, n.d.-a).

**The cost gap is large.** Air ambulance evacuation can run anywhere from about $20,000 to $200,000, depending on your location and medical condition (U.S. Department of State, Bureau of Consular Affairs, n.d.-c). By contrast, medical evacuation insurance itself is relatively inexpensive to buy, and can save a traveler thousands of dollars if evacuation actually becomes necessary (Centers for Disease Control and Prevention, n.d.-b). Because of that gap, the State Department strongly recommends buying medical evacuation coverage, either as a standalone policy or bundled into a broader travel insurance plan, especially for travel to remote areas or places with limited medical infrastructure (U.S. Department of State, Bureau of Consular Affairs, n.d.-a).

As with every dollar figure in this course, evacuation costs and what a specific policy covers can both change. Confirm the current numbers, and the exact coverage, with the insurer before you rely on it.

:::reveal Why can medical evacuation insurance matter even if you already have travel health insurance? ||| Because travel health insurance covers care at your location, but most plans don't cover the cost of getting you to a better-equipped hospital or transporting you home by air ambulance, which can run tens of thousands of dollars and is a separate coverage.

## Sources
- Centers for Disease Control and Prevention. (n.d.-b). *Travel insurance, travel health insurance, and medical evacuation insurance*. CDC Yellow Book. https://www.cdc.gov/yellow-book/hcp/health-care-abroad/travel-insurance.html
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-a). *Travel insurance*. Travel.State.gov. https://travel.state.gov/content/travel/en/international-travel/before-you-go/your-health-abroad/Insurance_Coverage_Overseas.html
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-c). *Medicine and health*. Travel.State.gov. https://travel.state.gov/content/travel/en/international-travel/before-you-go/your-health-abroad.html`,
      recallContent: [
        {
          prompt: "What should you generally expect about paying for care abroad?",
          answer:
            "That a payment or deposit is often required before you're treated, so keep an accessible way to pay rather than assume you can settle up afterward.",
        },
        {
          prompt: "Where might you find a list of local doctors or hospitals in an unfamiliar destination?",
          answer:
            "A U.S. embassy or consulate's website commonly lists local doctors and hospitals; a hotel concierge or your travel insurer's assistance line are other starting points.",
        },
      ],
    },
    {
      slug: "state-department-role",
      title: "8 · What the State Department can (and cannot) do",
      body: `If you have a medical emergency abroad, the nearest U.S. embassy or consulate is a real resource, but it is important to understand exactly what it can and cannot do, so you are not counting on help that will not come.

**What the U.S. government can do:** help you find local doctors or hospitals, and, with your permission, contact your family or friends to let them know what is happening (U.S. Department of State, Bureau of Consular Affairs, n.d.-c). In a broader crisis, embassies and consulates are also a channel for safety information and assistance; the fastest way to reach one directly is to contact the nearest U.S. embassy or consulate, or call the State Department's own numbers for citizens abroad (U.S. Department of State, Bureau of Consular Affairs, n.d.-d).

**What the U.S. government cannot do, stated plainly:** it does not pay your medical bills. "The U.S. government does not pay medical bills abroad" (U.S. Department of State, Bureau of Consular Affairs, n.d.-c). Combined with the fact from Lesson 6 that many locations require payment or a deposit before you are even treated, this means the practical responsibility for paying always sits with you, your insurance (Lessons 2 and 3), or Medicare in the very narrow cases where it applies (Lesson 4). The embassy can point you toward care and keep your family informed; it is not a payer of last resort.

This is exactly why the earlier lessons in this course exist. Since the government will help you locate care but will not fund it, the coverage decisions in Lessons 2 through 4, and the planning in Lesson 9, are what actually determine whether a medical emergency abroad is a manageable inconvenience or a financial crisis.

:::reveal What can the U.S. government do for you in a medical emergency abroad, and what will it explicitly not do? ||| It can help you find local doctors or hospitals and, with your permission, contact your family or friends. It explicitly does not pay your medical bills abroad.

## Sources
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-c). *Medicine and health*. Travel.State.gov. https://travel.state.gov/content/travel/en/international-travel/before-you-go/your-health-abroad.html
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-d). *Emergencies abroad*. Travel.State.gov. https://travel.state.gov/content/travel/en/contact-us/Emergencies-Abroad.html`,
      recallContent: [
        {
          prompt: "Why can medical evacuation insurance matter even if you already have travel health insurance?",
          answer:
            "Because travel health insurance covers care at your location, but most plans don't cover getting you to better-equipped care or transporting you home, which can cost tens of thousands of dollars.",
        },
        {
          prompt: "About how much can an air ambulance medical evacuation cost, according to the State Department?",
          answer:
            "Roughly $20,000 to $200,000, depending on location and medical condition, and this figure can change over time.",
        },
      ],
    },
    {
      slug: "planning-before-you-go",
      title: "9 · Planning for your health before you go",
      body: `Everything in this course points to the same conclusion: healthcare planning works best before you leave, not after something goes wrong. The State Department's own international travel checklist frames trip preparation as five steps: learn about your destination, enroll in STEP, organize your travel documents, review your safety and health situation, and consider travel insurance (U.S. Department of State, Bureau of Consular Affairs, n.d.-e).

A practical pre-trip health sequence:
1. **See a healthcare provider well before you leave.** The CDC recommends an appointment at least 4 to 6 weeks before departure, so vaccines have time to take effect (Centers for Disease Control and Prevention, n.d.-d); the State Department suggests 6 to 8 weeks specifically for travelers 65 and older (U.S. Department of State, Bureau of Consular Affairs, n.d.-b).
2. **Decide on coverage.** Travel medical insurance for a trip (Lesson 2), international health insurance if you are moving abroad (Lesson 3), and medical evacuation coverage (Lesson 7) are three separate decisions, not one.
3. **Sort out your medications.** Original labeled containers, copies of prescriptions, a provider's note for controlled substances or injectables, enough supply for the whole trip plus extra, and a check with your destination's embassy on what is allowed (Lesson 5).
4. **Know where you would go for care.** Identify a hospital or clinic near where you are staying before you need one, especially for a longer stay (Lesson 6).
5. **Enroll in STEP.** The Smart Traveler Enrollment Program sends you safety and health alerts from the nearest U.S. embassy or consulate for your specific trip, and helps them contact you or your emergency contact in a crisis (U.S. Department of State, Bureau of Consular Affairs, n.d.-f).
6. **Know what the government will, and will not, do** if something goes wrong (Lesson 8), so your coverage, not a false assumption, is your actual safety net.

None of the numbers in this course, insurance costs, evacuation figures, Medigap thresholds, are guaranteed to stay the same. Confirm the current details directly with Medicare.gov, travel.state.gov, the CDC, and your own insurer before you travel or move.

:::reveal What five steps does the State Department's international travel checklist include? ||| Learn about your destination, enroll in STEP, organize your travel documents, review your safety and health situation, and consider travel insurance.

## Sources
- Centers for Disease Control and Prevention. (n.d.-d). *Before you travel*. Travelers' Health. https://wwwnc.cdc.gov/travel/page/before-travel
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-b). *Age 65+ travelers*. Travel.State.gov. https://travel.state.gov/en/international-travel/planning/personal-needs/age-65.html
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-e). *International travel checklist*. Travel.State.gov. https://travel.state.gov/en/international-travel/planning/checklist.html
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-f). *Smart Traveler Enrollment Program (STEP)*. Travel.State.gov. https://travel.state.gov/en/international-travel/travel-advisories/smart-traveler-enrollment-program.html`,
      recallContent: [
        {
          prompt: "What can the U.S. government do for you in a medical emergency abroad, and what will it not do?",
          answer:
            "It can help you find local doctors or hospitals and, with permission, contact your family. It will not pay your medical bills.",
        },
        {
          prompt: "Why does this course say the embassy is not a 'payer of last resort'?",
          answer:
            "Because the government explicitly does not pay medical bills abroad, so the coverage decisions in Lessons 2 through 4 are what actually protect you financially, not the embassy.",
        },
      ],
    },
    {
      slug: "healthcare-abroad-quiz",
      title: "10 · Check your understanding",
      quiz: {
        passingScore: 70,
        // Options shuffle per attempt so a fixed answer position cannot be gamed;
        // scoring is by identity, so no answer changes (src/lib/quiz.ts).
        shuffleOptions: true,
        questions: [
          {
            prompt: "According to the State Department, what is a common practical reality about paying for medical care abroad?",
            options: [
              "Care is always billed to your U.S. insurance automatically",
              "In many places, payment or a deposit comes before treatment",
              "The U.S. government pays the provider and bills you later",
              "Care abroad is always completely free for U.S. citizens",
            ],
            correctIndex: 1,
            explanation:
              "The State Department is direct that in many locations you must pay, or put down a deposit, before treatment, and the U.S. government does not cover those costs.",
            sourceLessonSlug: "how-healthcare-differs-abroad",
          },
          {
            prompt: "What is travel medical insurance designed to cover?",
            options: [
              "Ongoing routine care for someone living abroad long-term",
              "Emergency medical care, often evacuation, for one defined trip",
              "Trip cancellation, travel delays, and lost luggage only",
              "Routine prescription refills at any U.S. or local pharmacy",
            ],
            correctIndex: 1,
            explanation:
              "Travel medical insurance is built around a single trip, covering emergency medical care and often evacuation for that trip's length.",
            sourceLessonSlug: "travel-medical-insurance",
          },
          {
            prompt: "How does international (expat) health insurance differ from travel medical insurance?",
            options: [
              "It's identical to travel medical, just a different name",
              "It's ongoing and renewable, for long-term residents abroad",
              "It only covers medical emergencies during airport layovers",
              "It's only available to non-U.S. citizens living abroad",
            ],
            correctIndex: 1,
            explanation:
              "International/expat health insurance is ongoing and renewable, built for routine and continuing care during a long-term stay, unlike a single-trip travel medical policy.",
            sourceLessonSlug: "international-expat-health-insurance",
          },
          {
            prompt: "What does Medicare.gov say about Medicare coverage outside the United States?",
            options: [
              "Medicare covers all care abroad exactly the same as at home",
              "Medicare usually won't cover care abroad, with few exceptions",
              "Medicare only covers emergency care in Canada and Mexico",
              "Medicare coverage abroad depends only on your age bracket",
            ],
            correctIndex: 1,
            explanation:
              "Medicare.gov states plainly that Medicare usually doesn't cover care outside the U.S., with only a few narrow, geography-based exceptions.",
            sourceLessonSlug: "medicare-and-care-abroad",
          },
          {
            prompt: "Why does the State Department recommend checking with a destination's embassy about your medicines before you travel?",
            options: [
              "Because customs officers always confiscate medicine",
              "Because a restricted medicine can mean arrest abroad",
              "Because embassies always sell replacement medicine",
              "Because it's only relevant for controlled substances",
            ],
            correctIndex: 1,
            explanation:
              "Rules on which medicines are allowed vary by country; carrying a prohibited one, even if it's legal in the U.S., can lead to arrest or detention abroad.",
            sourceLessonSlug: "medications-and-prescriptions-abroad",
          },
          {
            prompt: "What should you generally expect about paying for routine or emergency care abroad?",
            options: [
              "Your U.S. insurance is always billed automatically",
              "Payment or a deposit is often required up front",
              "Care is billed directly to the nearest U.S. embassy",
              "You can always pay the bill after you return home",
            ],
            correctIndex: 1,
            explanation:
              "As in Lesson 1, an up-front payment or deposit is common abroad, so travelers should keep an accessible way to pay rather than assume they can settle up later.",
            sourceLessonSlug: "routine-and-emergency-care-abroad",
          },
          {
            prompt: "Why can medical evacuation insurance matter even if you already have travel health insurance?",
            options: [
              "Travel health insurance never covers any medical care at all",
              "Most travel plans don't cover costly evacuation transport",
              "Medical evacuation is always covered automatically for free",
              "Evacuation insurance replaces the need for a passport",
            ],
            correctIndex: 1,
            explanation:
              "Travel health insurance covers care at your location, but most plans don't cover the often tens-of-thousands-of-dollars cost of evacuation to better care or transport home.",
            sourceLessonSlug: "medical-evacuation-and-repatriation",
          },
          {
            prompt: "What will the U.S. government explicitly NOT do if you have a medical emergency abroad?",
            options: [
              "Help you find a local doctor or hospital",
              "Contact your family with your permission",
              "Pay your medical bills",
              "Provide embassy contact numbers",
            ],
            correctIndex: 2,
            explanation:
              "The State Department is explicit: 'The U.S. government does not pay medical bills abroad,' even though it can help locate care and contact family.",
            sourceLessonSlug: "state-department-role",
          },
          {
            prompt: "According to the State Department's international travel checklist, what should you do alongside reviewing your safety and health situation before a trip?",
            options: [
              "Cancel all vaccinations",
              "Consider travel insurance",
              "Avoid registering with any government program",
              "Wait until you arrive to plan for medications",
            ],
            correctIndex: 1,
            explanation:
              "The checklist's five steps include reviewing your safety/health situation and considering travel insurance, along with learning about your destination, enrolling in STEP, and organizing documents.",
            sourceLessonSlug: "planning-before-you-go",
          },
        ],
      },
    },
  ],
};
