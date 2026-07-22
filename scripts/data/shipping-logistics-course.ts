// Authored "Shipping & Logistics of an International Move" — the physical-logistics companion
// to Moving Abroad 101 (content/moving-abroad-101-course): once you've decided WHERE and on WHAT
// visa (Moving Abroad 101's job), this course covers the practical HOW of physically getting your
// life there — what to do with your belongings, how they travel, what happens at the destination's
// customs, moving pets, what to hand-carry, closing out U.S. mail, and staying registered to vote.
// Same "Travel & Living Abroad" category, same non-partisan, strictly informational, cited standard.
//
// AUTHORITATIVE-VALUES RULE (load-bearing here): destination-country customs exemptions for used
// household goods, pet-entry requirements (vaccines, titers, quarantine), and moving-company fees
// are all set unilaterally by the destination government (or, for pets, by both the destination
// government AND the airline) and change without notice. This course never asserts a fixed dollar
// figure, quarantine length, or document list as a permanent universal fact. It teaches the
// framework, uses the U.S.'s own returning-resident exemption and the UK's Transfer of Residence
// relief as two concrete, verified examples of how these programs are commonly structured, and
// repeatedly tells the learner to confirm the current, destination-specific rules with that
// country's own customs authority, its nearest consulate, USDA APHIS (for pets), and their moving
// company before they ship, fly, or sign anything.
//
// Every claim is cited APA 7 in-line to a verified, authoritative source: the U.S. Department of
// State (travel.state.gov), U.S. Customs and Border Protection (cbp.gov / help.cbp.gov) and the
// Code of Federal Regulations (via Cornell's Legal Information Institute), USDA's Animal and Plant
// Health Inspection Service (aphis.usda.gov/pet-travel), the UK government's Transfer of Residence
// guidance (gov.uk) as a second concrete destination-side example, the Federal Maritime Commission
// (fmc.gov, which licenses international ocean movers), the U.S. Postal Service (usps.com), and the
// Federal Voting Assistance Program (fvap.gov). Every citation was verified against the live
// official source via WebSearch/WebFetch before authoring — no fabricated country rules, no
// fabricated characters, no "AI tells."
//
// Ends with a quiz whose every question links back to the lesson that teaches the answer
// (the quiz standard).

import type { AuthoredCourse } from "./authored-course";

export const SHIPPING_LOGISTICS_COURSE: AuthoredCourse = {
  title: "Shipping & Logistics of an International Move",
  description:
    "The practical logistics of physically moving abroad, once you've already decided where and how (this course's sibling, Moving Abroad 101, covers that decision): movers vs. shipping it yourself vs. selling and rebuying, air vs. sea freight and how to vet a licensed international mover, customs on your household goods at the destination, moving pets internationally, which documents to hand-carry instead of pack, closing out U.S. mail, and staying registered to vote from abroad. Cited throughout to travel.state.gov, CBP, USDA APHIS, the UK government, the Federal Maritime Commission, USPS, and FVAP.gov, teaches the framework, since destination rules vary by country and change.",
  lessons: [
    {
      slug: "planning-your-logistics-timeline",
      title: "1 · Planning your shipping & logistics timeline",
      body: `Once you've decided where you're moving and secured your visa (this course's sibling, *Moving Abroad 101*, covers that decision), a second, separate project starts: physically getting your life there. This course breaks that project into the pieces that trip people up most, what to do with your belongings, how they travel, what customs expects on the other end, your pets, your paperwork, your mail, and your vote.

**Start earlier than feels necessary.** Two of the items in this course have their own long lead times that don't compress well: moving a pet internationally can take three to six months or more depending on the destination (Lesson 6), and some destination countries require customs approval for your household goods *before* they're ever shipped (Lesson 5). If you only plan around your flight date, you can find out too late that your dog can't travel yet or that your shipment can't legally enter without paperwork you haven't started.

**A rough order of operations:**
1. Decide what's coming with you at all, movers, DIY shipping, or selling and rebuying (Lesson 2).
2. If anything is shipping, choose a method and a licensed mover (Lessons 3-4).
3. Research your destination's customs rules for household goods, and your pet's entry requirements, well before you book a shipment or a flight for an animal (Lessons 5-6).
4. Gather and hand-carry your critical documents (Lesson 7) rather than packing them.
5. Handle U.S. mail and any loose ends before you leave (Lesson 8).
6. Keep your voting registration current from abroad (Lesson 9).

**This course is educational, not legal, customs, or immigration advice.** Every destination country, and every airline, for pets, sets its own current rules, so this course repeatedly points you to the authoritative source for each topic rather than printing a number that could go stale.

:::reveal What two logistics items in this course have unusually long lead times, and why should you start them early? ||| Moving a pet internationally (can take 3-6+ months) and destination-country customs approval for household goods (some countries require it before shipping), both can derail a move if you only plan around your flight date.

## Sources
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-a). International travel checklist. Travel.State.gov. https://travel.state.gov/content/travel/en/international-travel/before-you-go/travelers-checklist.html`,
    },
    {
      slug: "movers-vs-diy-vs-sell-and-rebuy",
      title: "2 · Deciding what to bring: movers, DIY shipping, or sell-and-rebuy",
      body: `Before you research a single shipping method, answer a more basic question: is it worth bringing your belongings at all? Most people land somewhere on a spectrum between three broad approaches, and a single move can legitimately mix all three across different categories of stuff.

**Full-service international movers.** A moving company packs, ships, handles customs paperwork, and delivers to your new address (door-to-door). This costs the most but requires the least of your own time and expertise, valuable if your schedule is tight or your shipment is large. Lesson 4 covers how to vet one.

**Ship-it-yourself.** You pack your own boxes and use a freight forwarder or moving container service to handle the actual transport, often at a lower cost than full-service but with more of your own labor and more responsibility for correctly declaring and documenting the shipment yourself.

**Sell-and-rebuy.** Sell, donate, or store what you own, travel light, and buy furniture and household goods again at your destination. This makes the most sense when: your belongings are worth less than the cost of shipping them; your destination has affordable, available furniture; or you're not sure yet how long you'll stay and don't want a container's worth of belongings following you home if the move doesn't work out.

**How to decide between them,** category by category rather than all-or-nothing:
- **High-value, hard-to-replace items** (heirlooms, specialized equipment, a well-built bed you love) usually justify shipping even at real cost.
- **Bulky, low-value furniture** (a big-box-store bookshelf, a mattress near the end of its life) rarely justifies international shipping cost and customs hassle, sell-and-rebuy usually wins.
- **Everything in between** comes down to your specific shipping quote versus your specific replacement cost at the destination, get an actual quote (Lesson 4) before assuming either way.

The Federal Maritime Commission, which oversees international household-goods movers by sea, recommends getting multiple written estimates based on an actual in-person (or video) inspection of your belongings before you decide anything, a rough guess over the phone isn't a number you can plan a budget around (Federal Maritime Commission, n.d.).

:::reveal Name the three broad approaches to deciding what to bring abroad. ||| Full-service international movers (they pack, ship, and handle customs), ship-it-yourself (you pack, a freight forwarder handles transport), and sell-and-rebuy (sell/donate belongings and buy new ones at the destination).

## Sources
- Federal Maritime Commission. (n.d.). Moving dos and don'ts. https://www.fmc.gov/about/bureaus-offices/consumer-affairs-dispute-resolution-services/moving-dos-and-donts/`,
      recallContent: [
        {
          prompt: "What two logistics items in this course have unusually long lead times, and why should you start them early?",
          answer:
            "Moving a pet internationally (can take 3-6+ months) and destination-country customs approval for household goods (some countries require it before shipping), both can derail a move if you only plan around your flight date.",
        },
      ],
    },
    {
      slug: "shipping-methods-air-vs-sea",
      title: "3 · Shipping methods: air freight vs. sea freight",
      body: `Once you've decided something is shipping, it travels one of two ways, and the choice trades cost against time.

**Air freight.** The fastest option, typically measured in days rather than weeks, and priced accordingly, usually the most expensive way to move the same volume of goods. It suits smaller shipments, items you need quickly after arrival, or a genuinely tight timeline where the extra cost is worth the speed.

**Sea (ocean) freight.** Far cheaper per pound or per cubic foot for large volumes, but far slower, typically weeks for the ocean transit alone, plus additional time for the shipment to clear destination customs (Lesson 5) once it arrives. This is the standard choice for a full household's worth of belongings.

**Containers.** If you're shipping by sea, you'll typically choose between:
- **A shared/consolidated container** (sometimes called less-than-container-load), where your goods share space with other shipments, cheaper, but slower, since the container waits until it's full enough to ship, and your goods are handled more times.
- **An exclusive-use container** (a full container to yourself), where your goods aren't combined with anyone else's, costs more, but ships on its own schedule and is handled less.

**This course does not print a fixed number of weeks for either method**, because actual transit and customs-clearance time varies by destination, carrier, season, and how complete your paperwork is, treat any "6-8 weeks" style estimate you're quoted as just that: an estimate, not a guarantee, and build a buffer before you rely on your belongings arriving by a specific date.

**Insurance is not automatic, and it's often more limited than people assume.** The Federal Maritime Commission's own consumer guidance is blunt about this: "Generally, international moving companies limit their responsibility for loss of or damage to your household goods," and separately, "many moving companies will not provide insurance coverage for your goods unless they are packed by the moving company" (Federal Maritime Commission, n.d.). Before you ship anything valuable, get the mover's insurance terms in writing and ask specifically what's covered if they didn't pack it themselves.

:::reveal Name the three broad approaches to deciding what to bring abroad (from the previous lesson). ||| Full-service international movers, ship-it-yourself, and sell-and-rebuy.

## Sources
- Federal Maritime Commission. (n.d.). Moving dos and don'ts. https://www.fmc.gov/about/bureaus-offices/consumer-affairs-dispute-resolution-services/moving-dos-and-donts/`,
      recallContent: [
        {
          prompt: "Name the three broad approaches to deciding what to bring abroad.",
          answer:
            "Full-service international movers (they pack, ship, and handle customs), ship-it-yourself (you pack, a freight forwarder handles transport), and sell-and-rebuy (sell/donate belongings and buy new ones at the destination).",
        },
        {
          prompt: "What does the Federal Maritime Commission recommend getting before choosing a mover, and why?",
          answer:
            "Multiple written estimates based on an actual in-person (or video) inspection of your belongings, a phone guess isn't a number you can budget around.",
        },
      ],
    },
    {
      slug: "vetting-a-licensed-international-mover",
      title: "4 · Vetting and hiring a licensed international mover",
      body: `If you're shipping by sea, the company you hire isn't just a vendor you're trusting with your belongings, it's operating in a regulated industry, and checking its license is your first, easiest screening step.

**Licensing.** Any company that ships household goods internationally by ocean vessel must be licensed or registered with the **Federal Maritime Commission (FMC)** as an Ocean Transportation Intermediary (OTI), a category that includes non-vessel-operating common carriers (NVOCCs) and freight forwarders, both of which can coordinate an international household-goods shipment. The FMC maintains a public, searchable list of licensed and bonded companies at **www2.fmc.gov/oti**, check any mover against it before you sign anything (Federal Maritime Commission, n.d.).

**Beyond licensing**, the FMC's own consumer guidance recommends:
- Getting **multiple written estimates**, each based on an actual inspection of your belongings (in person or by video), not a phone guess (Lesson 3).
- **Reading the contract's fine print** carefully, including the payment and cancellation policy, before you sign.
- Contacting the **Better Business Bureau**, local consumer agencies, or the FMC's own Consumer Affairs and Dispute Resolution Services (CADRS) staff to check a company's complaint history.

**A red flag worth naming specifically:** the FMC warns that "unscrupulous moving companies" sometimes use an unusually low estimate "as a tool" to win your business, planning to raise the price later, the cheapest quote isn't automatically the best one, and a bid dramatically lower than the others deserves extra scrutiny, not automatic acceptance (Federal Maritime Commission, n.d.).

**Don't wait until the last minute.** Between getting estimates, checking licensing, and reading a contract carefully, vetting a mover properly takes real time, folding it into a rushed final week before your move is exactly how people end up signing with whoever answers the phone first.

:::reveal What does the FMC's consumer guidance say about picking the cheapest quote? ||| It warns that "unscrupulous moving companies" sometimes use an unusually low estimate as a tool to win business, then raise the price later, a dramatically low bid deserves extra scrutiny, not automatic acceptance.

## Sources
- Federal Maritime Commission. (n.d.). Moving dos and don'ts. https://www.fmc.gov/about/bureaus-offices/consumer-affairs-dispute-resolution-services/moving-dos-and-donts/`,
      recallContent: [
        {
          prompt: "What does the Federal Maritime Commission recommend getting before choosing a mover, and why?",
          answer:
            "Multiple written estimates based on an actual in-person (or video) inspection of your belongings, a phone guess isn't a number you can budget around.",
        },
        {
          prompt: "What agency licenses international ocean movers, and where can you check if a company is licensed?",
          answer:
            "The Federal Maritime Commission (FMC) licenses Ocean Transportation Intermediaries (OTIs, including NVOCCs and freight forwarders); check its public list at www2.fmc.gov/oti.",
        },
      ],
    },
    {
      slug: "customs-on-household-goods-at-destination",
      title: "5 · Customs on your household goods at the destination",
      body: `Your belongings clearing your destination country's customs is a separate legal process from getting them onto a ship or plane, and it's the single place in this course where the rules vary the most by country. This lesson teaches the *shape* these programs commonly take, using two concrete, verified examples, because no fixed dollar amount, ownership period, or document list printed here would stay accurate across every destination.

**The common shape.** Many countries offer new or returning residents a duty-free (or reduced-duty) allowance for *used* household goods and personal effects, on the logic that you already owned and used these items abroad, you're not importing new goods to sell. These programs typically require the goods to have been owned and used for some minimum period, restrict resale or transfer for a period after arrival, and require a specific declaration or application, not just showing up with boxes.

**Concrete example 1, the U.S.'s own version (for returning U.S. residents).** Under 19 CFR § 148.52, furniture and other usual household effects "actually used abroad for not less than 1 year" by a resident may enter the U.S. free of duty and tax, provided they're not intended for another person or for sale; the year of use "need not be continuous, nor need it immediately precede" the import, and the claim is documented on a Customs Form 3299 declaration, verified to the satisfaction of the port director (U.S. Customs and Border Protection, n.d.). This is the U.S.'s rule for goods entering the U.S., not another country's rule, but it's a clear, verified illustration of the "used for a while, not for resale, formally declared" pattern many countries use.

**Concrete example 2, the UK's Transfer of Residence relief (for people moving to the UK).** The UK requires you to have been resident outside the UK for at least 12 consecutive months, and generally to have owned the goods for at least 6 months, before you can claim relief. Critically, **approval must come before you ship**: you apply to HM Revenue & Customs with form ToR1, and only after HMRC issues a reference number can you claim relief on your customs import declaration, goods without an approved reference risk being charged duty. Once granted, you generally have 12 months from arrival to bring the goods in, and anything relieved this way can't be lent, used as security, hired out, or transferred to someone else within 12 months of the move (GOV.UK, n.d.).

**The pattern to take from both examples:** expect a minimum ownership/use period, expect a "not for resale" condition, expect a specific customs form or declaration, and (as the UK shows) do not assume approval happens automatically or after the fact. Before you book a shipment:
1. Find your **destination country's own customs authority** (or its nearest consulate) and ask specifically about relief for new/returning residents' used household goods.
2. Ask whether approval is required **before** shipping, as it is in the UK.
3. Ask what documentation (an itemized inventory is common) and what minimum ownership period apply.
4. Ask your mover (Lesson 4), FMC-licensed international movers handle this paperwork regularly and often know the current destination requirements.

:::reveal What agency licenses international ocean movers, and where can you check if a company is licensed? (from the previous lesson) ||| The Federal Maritime Commission (FMC); check its public list at www2.fmc.gov/oti.

## Sources
- U.S. Customs and Border Protection. (n.d.). Returning resident exemptions & how to clear goods. Help.CBP.gov. https://www.help.cbp.gov/s/article/Article-1131
- Code of Federal Regulations. (n.d.). 19 CFR § 148.52 — Exemption for household effects used abroad. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/19/148.52
- GOV.UK. (n.d.). Transfer of residence to Great Britain. HM Revenue & Customs. https://www.gov.uk/guidance/transfer-of-residence-to-great-britain`,
      recallContent: [
        {
          prompt: "What agency licenses international ocean movers, and where can you check if a company is licensed?",
          answer:
            "The Federal Maritime Commission (FMC); check its public list at www2.fmc.gov/oti.",
        },
        {
          prompt: "In the UK's Transfer of Residence example, what must happen BEFORE you ship your goods?",
          answer:
            "You must apply to HMRC (form ToR1) and receive an approved reference number before shipping, claiming relief without it risks being charged duty.",
        },
      ],
    },
    {
      slug: "moving-pets-internationally",
      title: "6 · Moving your pets internationally",
      body: `Moving a pet abroad is its own project with its own timeline, separate from your household goods and separate from your own visa, and it's one of the two items in this course (with destination customs, Lesson 5) that can genuinely derail a move if you start late.

**Your destination country sets the rules, not the U.S.** Every country has its own entry requirements for pets, and the U.S. Department of Agriculture's Animal and Plant Health Inspection Service (APHIS) is explicit that requirements can change and must be verified for your specific destination every time you travel with a pet (Animal and Plant Health Inspection Service, n.d.-a).

**Start with a USDA-accredited veterinarian, and start early.** Contact one "as soon as you decide to travel", they'll help identify your destination's specific requirements and guide you through the process (Animal and Plant Health Inspection Service, n.d.-b). Commonly required elements, though the exact combination and timing varies by country:

- A **microchip**, often required before other steps (like a rabies titer test) can even be scheduled, since some countries require proof the chip was implanted before the vaccination or test it's meant to document.
- **Core vaccinations**, always including rabies, verified against your destination's specific schedule.
- A **rabies titer (antibody) test**, required by some countries, especially rabies-free destinations, which itself requires lead time for the blood draw, lab processing, and any required waiting period after the results.
- A **United States Interstate and International Certificate for Health Examination for Small Animals (USDA APHIS Form 7001)**, issued by your accredited veterinarian and then formally **endorsed by USDA/APHIS**, most countries require this specific endorsement, not just a vet's signature (Animal and Plant Health Inspection Service, n.d.-b).

**Timeline: start 3+ months out, and expect longer for some destinations.** APHIS points to countries like Japan, Australia, and New Zealand, which have additional rabies-free-country requirements, as examples where the full process, including titer testing and waiting periods, can take **6 to 9 months** (Animal and Plant Health Inspection Service, n.d.-b). Booking a flight before you've confirmed your pet's paperwork can be completed in time is one of the most common, and most stressful, pet-travel mistakes.

**Quarantine.** Some destinations require a quarantine period on arrival, and whether (and how long) depends on the destination's rabies-risk classification and how completely your documentation meets its requirements going in, this is not universal and this course does not print a length, since it varies by country and by how prepared your paperwork is.

**Airlines have their own rules too, separate from government requirements**, carrier size, breed restrictions, and cargo-vs-cabin policies vary by airline and are a second thing to confirm, not a substitute for the government-side requirements above.

:::reveal In the UK's Transfer of Residence example, what must happen BEFORE you ship your goods? (from the previous lesson) ||| You must apply to HMRC (form ToR1) and receive an approved reference number before shipping.

## Sources
- Animal and Plant Health Inspection Service. (n.d.-a). Travel with a pet. U.S. Department of Agriculture. https://www.aphis.usda.gov/pet-travel
- Animal and Plant Health Inspection Service. (n.d.-b). Pet travel process overview. U.S. Department of Agriculture. https://www.aphis.usda.gov/pet-travel/pet-travel-process-overview
- Animal and Plant Health Inspection Service. (n.d.-c). Take a pet from the United States to another country (export). U.S. Department of Agriculture. https://www.aphis.usda.gov/pet-travel/us-to-another-country-export`,
      recallContent: [
        {
          prompt: "In the UK's Transfer of Residence example, what must happen before you ship your goods?",
          answer: "You must apply to HMRC (form ToR1) and receive an approved reference number before shipping.",
        },
        {
          prompt: "Roughly how far ahead should you start a pet's international travel paperwork, and why might it take even longer?",
          answer:
            "At least 3 months ahead; for rabies-free destinations like Japan, Australia, and New Zealand, added requirements like a titer test can push the full process to 6-9 months.",
        },
      ],
    },
    {
      slug: "important-documents-to-hand-carry",
      title: "7 · Important documents to hand-carry (never pack these)",
      body: `A shipping container can take weeks to arrive, get held at customs, or in rare cases be lost or damaged. Anything you can't afford to be without during that window, or that you'll need the moment you land, belongs in your carry-on, not in the shipment.

**Hand-carry, don't pack:**
- **Passports and visas** for every traveling household member (this course's sibling *How to Get a U.S. Passport* covers getting or renewing yours).
- **Birth certificates and marriage/divorce certificates**, originals, since destination residency permits, school enrollment, or bank accounts often require an original or an apostilled copy, not a photocopy sitting in a shipping container.
- **Your pet's health certificate and vaccination records** (Lesson 6), required at the border, the moment you arrive with the animal.
- **Medical records and a current prescription list**, in case you need care or a refill before your belongings (and any home pharmacy) arrive.
- **Financial and tax records** you might need to open a bank account or file a return from abroad (this platform's *Taxes for Americans Abroad* course covers the filing side).
- **Your shipment's own paperwork**, the inventory list, the bill of lading, and any customs forms (Lesson 5), since you'll need these to actually claim your goods when they arrive, and they do you no good packed inside the shipment they describe.

**Make two copies of everything, and split them up.** The State Department's own travel checklist advises making two copies of your travel documents and leaving one "with a trusted friend or relative", so a second copy exists even if your original set is lost, stolen, or (for a move) still in transit (U.S. Department of State, n.d.-a). For a move, extend that habit to every document on this list, not just your passport.

**Enroll in STEP.** The Department's Smart Traveler Enrollment Program lets the nearest U.S. embassy or consulate reach you (or your emergency contact) directly and send you security and other updates for where you're living, free, and worth doing before you travel, not after (U.S. Department of State, n.d.-a).

:::reveal Roughly how far ahead should you start a pet's international travel paperwork, and why might it take even longer? (from the previous lesson) ||| At least 3 months ahead; rabies-free destinations like Japan, Australia, and New Zealand can push the full process to 6-9 months.

## Sources
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-a). International travel checklist. Travel.State.gov. https://travel.state.gov/content/travel/en/international-travel/before-you-go/travelers-checklist.html`,
      recallContent: [
        {
          prompt: "Roughly how far ahead should you start a pet's international travel paperwork, and why might it take even longer?",
          answer:
            "At least 3 months ahead; for rabies-free destinations, added requirements like a titer test can push the full process to 6-9 months.",
        },
        {
          prompt: "Why should original birth and marriage certificates be hand-carried instead of packed in your shipment?",
          answer:
            "Destination residency permits, school enrollment, or bank accounts often require the original (or an apostilled copy), and a shipment can take weeks or get held at customs.",
        },
      ],
    },
    {
      slug: "mail-forwarding-and-closing-out-us-logistics",
      title: "8 · Mail forwarding and closing out your U.S. logistics",
      body: `Your U.S. mail doesn't relocate itself, and the U.S. Postal Service treats an international move differently from a domestic one in one important way: you can't always finish it entirely online.

**You must go to a Post Office in person before you leave.** USPS is explicit: "If you're going to move outside the United States, before you leave the U.S., you must go to a Post Office location" to submit your change of address and verify your identity, plan this into your final week in the country, not as an afterthought (U.S. Postal Service, n.d.).

**Standard forwarding is time-limited, not permanent.** A standard change of address forwards your mail for **12 months**, and you can purchase an extension of an additional 6, 12, or 18 months beyond that, but it's a paid, non-refundable add-on, not automatic (U.S. Postal Service, n.d.). If you expect to be abroad longer than your forwarding window covers, plan a longer-term solution (below) rather than assuming USPS will keep redirecting mail indefinitely.

**Forwarding only covers USPS mail, not couriers.** Only mail actually sent through USPS (First-Class, Priority, and similar categories) gets forwarded; **USPS Marketing Mail is not forwarded at all**, and packages or letters sent via FedEx, UPS, DHL, or Amazon's own delivery network keep going to your old address regardless of your USPS forwarding request (U.S. Postal Service, n.d.). Update your address directly with anyone who ships to you by a courier other than USPS, forwarding your mail won't catch those.

**For anything longer-term**, many people abroad use a commercial virtual mailbox service (a paid, non-USPS service that gives you a permanent U.S. address, scans your mail, and forwards packages) or a trusted person back home to handle anything that still needs a physical address, since some U.S. institutions (a bank, the IRS, a state agency) may still reach you by physical mail years into living abroad.

**Before you leave, also update your address (or arrange a mail plan) with:** your bank and any card issuers, the IRS and your state's tax agency (this platform's *Taxes for Americans Abroad* course covers the filing side separately), your voter registration (Lesson 9), and anyone else who might send something that can't simply wait.

:::reveal Why should original birth and marriage certificates be hand-carried instead of packed in your shipment? (from the previous lesson) ||| Destination residency permits, school enrollment, or bank accounts often require the original (or an apostilled copy), and a shipment can take weeks or get held at customs.

## Sources
- U.S. Postal Service. (n.d.). Change your address. USPS.com. https://www.usps.com/manage/forward.htm`,
      recallContent: [
        {
          prompt: "Why should original birth and marriage certificates be hand-carried instead of packed in your shipment?",
          answer:
            "Destination residency permits, school enrollment, or bank accounts often require the original (or an apostilled copy), and a shipment can take weeks or get held at customs.",
        },
        {
          prompt: "Why can't you always finish a USPS change of address entirely online for an international move?",
          answer:
            "USPS requires you to go to a Post Office location in person, before you leave the U.S., to submit the request and verify your identity.",
        },
      ],
    },
    {
      slug: "staying-registered-to-vote-from-abroad",
      title: "9 · Staying registered to vote from abroad",
      body: `Moving abroad doesn't end your right to vote in U.S. elections, but it does mean you need to actively maintain your registration, it won't follow you automatically the way your mail forwarding might.

**Start at FVAP.gov.** The Federal Voting Assistance Program is the official Department of Defense-run program that helps U.S. citizens abroad register and vote, and its core tool is the **Federal Post Card Application (FPCA)**, which "acts as both a registration and absentee ballot request form", one standardized document that works across all states and territories (Federal Voting Assistance Program, n.d.).

**Submit a new FPCA when you move, and again every year.** FVAP recommends filing a new FPCA whenever you relocate (including your move abroad, and any later address change once you're there) and again annually, since a single FPCA "will extend your eligibility to receive a ballot for all federal elections for at least one calendar year", not indefinitely (Federal Voting Assistance Program, n.d.).

**Your voting residence is your last U.S. address, not your new mailing address abroad.** The State Department's guidance on voting from abroad confirms that most U.S. citizens 18 or older living overseas remain eligible to vote absentee in federal elections, and some states also permit voting in state and local elections from abroad, but which offices and candidates you're eligible to vote for is tied to your voting residence, so get this right when you complete your FPCA (U.S. Department of State, n.d.-b).

**Submission and return.** You can typically return your FPCA and your ballot by mail, and many states also accept fax or email; you (or someone else) can also drop off your FPCA or a completed ballot at the nearest U.S. embassy or consulate, which will send it back to the United States for you (Federal Voting Assistance Program, n.d.).

**Tie this back to Lesson 8.** Since your election materials often arrive by mail, make sure whatever mail plan you set up there, a forwarding window, a virtual mailbox, or a trusted contact, actually covers ballot-related mail, and don't let it lapse right before an election.

:::reveal Why can't you always finish a USPS change of address entirely online for an international move? (from the previous lesson) ||| USPS requires you to go to a Post Office location in person, before you leave the U.S., to submit the request and verify your identity.

## Sources
- Federal Voting Assistance Program. (n.d.). Citizen voter. U.S. Department of Defense. https://www.fvap.gov/citizen-voter
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-b). Voting from abroad. Travel.State.gov. https://travel.state.gov/content/travel/en/international-travel/while-abroad/voting.html`,
      recallContent: [
        {
          prompt: "Why can't you always finish a USPS change of address entirely online for an international move?",
          answer:
            "USPS requires you to go to a Post Office location in person, before you leave the U.S., to submit the request and verify your identity.",
        },
        {
          prompt: "How often should a U.S. citizen abroad submit a new FPCA, and why?",
          answer:
            "Whenever they move (including the move abroad) and again annually, a single FPCA only extends eligibility for federal-election ballots for at least one calendar year, not indefinitely.",
        },
      ],
    },
    {
      slug: "shipping-logistics-quiz",
      title: "10 · Check your understanding",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What two logistics items in this course have unusually long lead times that can derail a move if started late?",
            options: [
              "Buying a plane ticket and packing a suitcase",
              "Moving a pet internationally and getting destination-country customs approval for household goods",
              "Choosing a paint color and buying furniture",
              "Learning the local language and getting a haircut",
            ],
            correctIndex: 1,
            explanation:
              "Pet travel can take 3-9 months depending on the destination, and some countries require customs approval for household goods before they're ever shipped, both can derail a move planned only around a flight date.",
            sourceLessonSlug: "planning-your-logistics-timeline",
          },
          {
            prompt: "What are the three broad approaches to deciding what belongings to bring abroad?",
            options: [
              "Only full-service movers are an option",
              "Full-service international movers, ship-it-yourself, and sell-and-rebuy",
              "Air freight, sea freight, and rail freight",
              "Renting, buying, and leasing",
            ],
            correctIndex: 1,
            explanation:
              "These three approaches (often mixed by category of belongings) are the framework for deciding what's worth bringing versus replacing at the destination.",
            sourceLessonSlug: "movers-vs-diy-vs-sell-and-rebuy",
          },
          {
            prompt: "What's the key cost/time tradeoff between air freight and sea freight?",
            options: [
              "They cost and take the same amount of time",
              "Air freight is fast and expensive; sea freight is slow and far cheaper for large volumes",
              "Sea freight is always faster than air freight",
              "Air freight cannot be insured",
            ],
            correctIndex: 1,
            explanation:
              "Air freight is measured in days but costs more; sea freight is far cheaper per volume but takes weeks for transit plus additional time for destination customs clearance.",
            sourceLessonSlug: "shipping-methods-air-vs-sea",
          },
          {
            prompt: "What agency licenses companies that ship household goods internationally by ocean vessel, and where can you verify a company's license?",
            options: [
              "The IRS; verify at irs.gov",
              "The Federal Maritime Commission (FMC); verify at www2.fmc.gov/oti",
              "The FAA; verify at faa.gov",
              "There is no licensing requirement for international movers",
            ],
            correctIndex: 1,
            explanation:
              "The FMC licenses Ocean Transportation Intermediaries (including NVOCCs and freight forwarders) and maintains a public, searchable list at www2.fmc.gov/oti.",
            sourceLessonSlug: "vetting-a-licensed-international-mover",
          },
          {
            prompt: "In the UK's Transfer of Residence example, what must happen before you ship your household goods to claim duty relief?",
            options: [
              "Nothing, relief is automatic on arrival",
              "You must apply to HMRC (form ToR1) and receive an approved reference number before shipping",
              "You must sell everything and rebuy it in the UK",
              "You must be a UK citizen",
            ],
            correctIndex: 1,
            explanation:
              "Unlike some countries' after-the-fact declarations, the UK requires advance HMRC approval via form ToR1 before you ship, claiming relief without an approved reference risks being charged duty.",
            sourceLessonSlug: "customs-on-household-goods-at-destination",
          },
          {
            prompt: "According to USDA APHIS, who sets a pet's entry requirements for international travel?",
            options: [
              "The U.S. government, uniformly for every destination",
              "The destination country, and requirements can change and must be verified for that specific destination each time",
              "The airline only",
              "There are no requirements for pet travel",
            ],
            correctIndex: 1,
            explanation:
              "APHIS is explicit that the destination country sets pet-entry requirements, which can change, so they must be verified for the specific destination before every trip.",
            sourceLessonSlug: "moving-pets-internationally",
          },
          {
            prompt: "Why should you hand-carry documents like your passport, original birth/marriage certificates, and your shipment's inventory list rather than pack them?",
            options: [
              "Because customs prohibits shipping paper documents",
              "Because a shipment can take weeks, get held at customs, or rarely be lost, and you need these documents before or independent of it arriving",
              "Because they weigh too much to ship",
              "There's no real reason, packing them is fine",
            ],
            correctIndex: 1,
            explanation:
              "Documents you need immediately (to travel, enroll, bank, or claim your own shipment) shouldn't be at the mercy of a shipment's transit and customs-clearance timeline.",
            sourceLessonSlug: "important-documents-to-hand-carry",
          },
          {
            prompt: "For an international move, what does USPS require that a purely domestic move does not?",
            options: [
              "Nothing extra is required",
              "You must go to a Post Office location in person, before leaving the U.S., to submit the change of address and verify your identity",
              "You must forward your mail to a foreign post office directly",
              "International moves cannot use mail forwarding at all",
            ],
            correctIndex: 1,
            explanation:
              "USPS requires in-person verification at a Post Office before you leave the U.S. for an international change of address, unlike a routine domestic move.",
            sourceLessonSlug: "mail-forwarding-and-closing-out-us-logistics",
          },
          {
            prompt: "How often should a U.S. citizen living abroad submit a new Federal Post Card Application (FPCA)?",
            options: [
              "Once, permanently, the first time they move abroad",
              "Whenever they move and again annually, since one FPCA only extends federal-election eligibility for at least one calendar year",
              "Only in presidential election years",
              "FPCAs are not available to citizens living abroad",
            ],
            correctIndex: 1,
            explanation:
              "FVAP recommends filing a new FPCA whenever you relocate and again every year, since a single FPCA extends eligibility for federal-election ballots for at least one calendar year, not indefinitely.",
            sourceLessonSlug: "staying-registered-to-vote-from-abroad",
          },
        ],
      },
    },
  ],
};
