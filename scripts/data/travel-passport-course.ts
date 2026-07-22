// Authored "How to Get a U.S. Passport" — the launch course for a new "Travel & Living
// Abroad" category on Learn.WitUS. Practical, plain-language, strictly informational
// (the process, not opinions about travel). Cited to the U.S. Department of State's own
// site, travel.state.gov (the authoritative source for U.S. passports), which the course
// treats as its primary source throughout.
//
// AUTHORITATIVE-VALUES RULE (load-bearing here): passport FEES, FORMS, and PROCESSING
// TIMES change over time (fee schedules are periodically revised, and processing times
// move with seasonal demand). This course never asserts a fixed dollar figure or a fixed
// number of weeks as a permanent fact. It describes the *structure* (which fees exist,
// what they're for, routine vs. expedited) and repeatedly tells the learner to confirm
// the current numbers with the Department of State's own fee calculator and processing-time
// tool at travel.state.gov before applying or budgeting. Every other fact (eligibility
// rules, document requirements, photo specs, the six-month validity convention, blank-page
// requirements) is cited to a specific, verified travel.state.gov page.
//
// Ends with a quiz whose every question links back to the lesson that teaches the answer
// (the quiz standard).

import type { AuthoredCourse } from "./authored-course";

export const TRAVEL_PASSPORT_COURSE: AuthoredCourse = {
  title: "How to Get a U.S. Passport",
  description:
    "A practical, plain-language guide for U.S. citizens: passport book vs. card, applying for the first time (Form DS-11), renewing (Form DS-82), the documents and photo you need, fees and processing times (and why to always verify the current numbers), passports for minors, name changes, lost or stolen passports, and the travel-validity rules many countries enforce. Cited throughout to the U.S. Department of State's travel.state.gov.",
  lessons: [
    {
      slug: "what-is-a-passport",
      title: "1 · What a U.S. passport is, and who needs one",
      body: `A U.S. passport is the federal document that proves your **identity and U.S. citizenship** for international travel. It is issued by the **U.S. Department of State**, and it comes in two forms: a **passport book** and a **passport card** (U.S. Department of State, n.d.-b). The next lesson compares them in detail.

Every U.S. citizen who wants to travel internationally **by air** needs a valid **passport book**, there is no card-only option for flying abroad. Both the book and the card can also serve as accepted photo ID for **domestic** air travel, as an alternative to a REAL ID-compliant driver's license (U.S. Department of State, n.d.-b).

There are two paths to getting a passport, and which one applies to you depends on your situation:

- **First time, or not eligible to renew**: apply in person with **Form DS-11** (Lesson 3).
- **Eligible to renew**: renew by mail or online with **Form DS-82** (Lesson 6).

Because the exact fees, forms, and wait times the Department of State publishes **change over time**, this course teaches you the *process* and always points you to **travel.state.gov** to confirm the current numbers before you apply or book travel.

:::reveal What two things does a U.S. passport prove, and which federal agency issues it? ||| It proves your identity and your U.S. citizenship for international travel, and it's issued by the U.S. Department of State.

## Sources
- U.S. Department of State. (n.d.-b). *Compare a passport card and book*. https://travel.state.gov/content/travel/en/passports/need-passport/card.html`,
    },
    {
      slug: "passport-book-vs-card",
      title: "2 · Passport book vs. passport card",
      body: `The Department of State issues two different passport documents, and picking the right one (or getting both) matters before you book travel.

**The passport book** is a traditional booklet (about 5" x 3½") with blank pages for visas and entry/exit stamps. It is **valid for international travel by air, sea, or land**, it works everywhere a U.S. passport is accepted (U.S. Department of State, n.d.-b).

**The passport card** is a wallet-sized, credit-card-format plastic document with no visa pages. It is valid **only** for entering the United States by **land or sea** from **Canada, Mexico, Bermuda, and certain Caribbean destinations**. The card is **not valid for international travel by air**, at all, you cannot fly internationally on a passport card (U.S. Department of State, n.d.-b).

**Price.** The card costs meaningfully less than the book, and applying for both together costs less than applying for each separately. Because these are Department of State fees and fee schedules change, do not treat any specific dollar figure as permanent, check the current amounts with the official fee calculator at travel.state.gov before you budget (U.S. Department of State, n.d.-b, n.d.-f).

**Validity period.** Both documents currently carry the same length of validity: 10 years for applicants 16 and older, and 5 years for children under 16 (U.S. Department of State, n.d.-b).

**Who each is best for:**
- The **card** suits people who regularly cross by land or sea into Canada, Mexico, Bermuda, or the Caribbean and never need to fly internationally (e.g., a frequent border commuter). It also works as domestic-flight ID.
- The **book** is the right choice for anyone who might fly internationally, even occasionally, it's the only document that works for that.

**You can hold both.** Getting a card does not require giving up the book, and you can apply for either one, or both at once, on the same Form DS-11 or DS-82 (U.S. Department of State, n.d.-b).

:::reveal Can a passport card be used to fly internationally? What is it valid for instead? ||| No, the card is never valid for international air travel. It's valid only for entering the U.S. by land or sea from Canada, Mexico, Bermuda, and certain Caribbean destinations. The book is valid for all international travel by air, sea, or land.

## Sources
- U.S. Department of State. (n.d.-b). *Compare a passport card and book*. https://travel.state.gov/content/travel/en/passports/need-passport/card.html
- U.S. Department of State. (n.d.-f). *Passport fees*. https://travel.state.gov/content/travel/en/passports/how-apply/fees.html`,
      recallContent: [
        {
          prompt: "What two things does a U.S. passport prove, and which federal agency issues it?",
          answer:
            "It proves your identity and your U.S. citizenship for international travel, and it's issued by the U.S. Department of State.",
        },
        {
          prompt: "What are the two paths to getting a passport, and which form does each use?",
          answer:
            "First-time applicants (or those who don't qualify to renew) apply in person with Form DS-11. Those eligible to renew use Form DS-82 by mail or online.",
        },
      ],
    },
    {
      slug: "applying-first-time",
      title: "3 · Applying for the first time (Form DS-11)",
      body: `If this is your first U.S. passport, or you don't qualify to renew (Lesson 6 covers who does), you must apply **in person** using **Form DS-11**. Applying in person lets an acceptance official verify your identity and documents and witness you signing the application (U.S. Department of State, n.d.-c).

**Do not sign Form DS-11 before your appointment.** Fill it out using the official online Form Filler, print it single-sided, and leave it **unsigned** until the acceptance agent tells you to sign it in front of them (U.S. Department of State, n.d.-c).

**Where to apply:**
- **Most applicants**: an authorized **acceptance facility**, often a post office, public library, or county clerk's office. Some require an appointment.
- **Traveling internationally within 14 days**: make an appointment at a **passport agency or center** instead.
- **Applying from abroad**: contact the nearest U.S. embassy or consulate.

**What to bring:**
1. Your completed, unsigned Form DS-11.
2. One piece of citizenship evidence, plus a photocopy (Lesson 4).
3. A valid photo ID, plus a photocopy of the front and back (Lesson 4).
4. One passport photo that meets the specifications (Lesson 4).
5. Payment for **two separate fees**: the application fee (to the Department of State) and the facility's acceptance fee (Lesson 5).

(U.S. Department of State, n.d.-c)

:::reveal Why can't a first-time applicant just mail in their passport application? ||| Because first-time applicants (with few exceptions) must apply in person at an acceptance facility, passport agency, or embassy, so an official can verify their identity and documents and witness them signing Form DS-11.

## Sources
- U.S. Department of State. (n.d.-c). *Apply for your adult passport*. https://travel.state.gov/content/travel/en/passports/need-passport/apply-in-person.html`,
      recallContent: [
        {
          prompt: "What is the price relationship between a passport card and a passport book, and why doesn't this course state exact dollar figures?",
          answer:
            "The card costs meaningfully less than the book, and applying for both together costs less than applying separately. Exact fees change over time, so the course points you to the official fee calculator instead of a fixed number.",
        },
        {
          prompt: "Currently, how long is a passport valid for an adult (16+) versus a child under 16?",
          answer: "10 years for applicants 16 and older, and 5 years for children under 16, the same for both the book and the card.",
        },
      ],
    },
    {
      slug: "documents-and-photo",
      title: "4 · Required documents and your passport photo",
      body: `**Proof of U.S. citizenship.** Bring one piece of **primary evidence** if you have it, plus a photocopy of the front (and back, if it has printed information):

- A certified U.S. birth certificate showing the city/county/state of birth, filed within 1 year of birth, with the issuing office's seal or stamp; **or**
- A previous, full-validity, undamaged U.S. passport; **or**
- A Consular Report of Birth Abroad, Certificate of Naturalization, or Certificate of Citizenship (if you weren't born in the U.S.).

If you can't produce primary evidence, for example, a birth certificate filed more than a year after birth, the Department of State accepts **secondary evidence**: a delayed birth certificate plus early public records, or a "Letter of No Record" from the state registrar plus early records (baptism certificates, hospital birth records, census records, or school records from your first five years) (U.S. Department of State, n.d.-d).

**Photo ID.** Bring a valid, undamaged photo ID, an in-state, fully valid driver's license, a U.S. passport (book or card, even expired), a military ID, or a Trusted Traveler ID, plus a photocopy of its front and back.

**Your passport photo** must meet exact specifications: 2" x 2" (51 x 51 mm), with your head between 1" and 1⅜" (25-35 mm) from chin to crown; taken within the **last 6 months**; a plain white or off-white background free of shadows; a neutral expression with both eyes open and your mouth closed, facing the camera directly. You may **not** wear eyeglasses, sunglasses, a uniform, or a face covering (documented religious or medical coverings are allowed), and you may **not** submit a photo altered by filters, apps, or AI, or a photocopy/scan (U.S. Department of State, n.d.-e).

:::reveal Name two things that are NOT allowed in a passport photo. ||| Any two of: eyeglasses or sunglasses, digital filters or AI edits, a uniform, a photo taken more than 6 months ago, or a photocopy/scanned image.

## Sources
- U.S. Department of State. (n.d.-d). *Citizenship evidence*. https://travel.state.gov/content/travel/en/passports/how-apply/citizenship-evidence.html
- U.S. Department of State. (n.d.-e). *Passport photos*. https://travel.state.gov/content/travel/en/passports/how-apply/photos.html`,
      recallContent: [
        {
          prompt: "Why can't a first-time applicant just mail in their passport application?",
          answer:
            "Because first-time applicants must apply in person at an acceptance facility, passport agency, or embassy, so an official can verify their identity and documents and witness them signing Form DS-11.",
        },
        {
          prompt: "If you're traveling internationally within 14 days, where should you apply instead of a regular acceptance facility?",
          answer: "Make an appointment at a passport agency or center.",
        },
      ],
    },
    {
      slug: "fees-and-processing-times",
      title: "5 · Fees and processing times (and why to verify them)",
      body: `**Fees come in parts, not one number.** A first-time applicant pays **two separate fees**: an **application fee**, paid to the U.S. Department of State, and an **execution/acceptance fee**, paid directly to the acceptance facility. These are two different payments, often required in different forms (U.S. Department of State, n.d.-f). Renewing by mail or online skips the acceptance fee, since you don't apply in person.

Fees also differ by **document** (book, card, or both) and by **applicant age** (adult vs. child), and there are **optional add-ons**:
- **Expedited service**, faster processing for an extra fee.
- **1-3 day return delivery**, a faster shipping option for the finished passport, for an extra fee (not available for card-only applications).

**This course does not print a fee table.** The Department of State periodically revises its fee schedule, so any dollar figure written here could go stale. Before you apply, use the **official fee calculator** at travel.state.gov to get the exact, current total for your situation (U.S. Department of State, n.d.-f).

**Processing times work the same way.** The Department of State publishes **routine** and **expedited** processing windows, and expedited service costs more but takes less time. Two things to know:

1. **Mailing time is separate from processing time**, add time for your application to reach the agency and for your new passport to reach you.
2. **Processing times change** with seasonal demand (they typically run slower in late winter through summer) and other factors, so check the **current processing time** at travel.state.gov before you book travel that depends on your passport arriving by a certain date (U.S. Department of State, n.d.-g).

:::reveal Name the two separate fees a first-time applicant pays, and to whom each is paid. ||| The application fee, paid to the U.S. Department of State, and the execution/acceptance fee, paid to the acceptance facility, two separate payments.

## Sources
- U.S. Department of State. (n.d.-f). *Passport fees*. https://travel.state.gov/content/travel/en/passports/how-apply/fees.html
- U.S. Department of State. (n.d.-g). *Get your processing time*. https://travel.state.gov/content/travel/en/passports/how-apply/processing-times.html`,
      recallContent: [
        {
          prompt: "Name two of the primary citizenship-evidence documents accepted for a passport application.",
          answer:
            "Any two of: a certified U.S. birth certificate, a previous full-validity U.S. passport, a Consular Report of Birth Abroad, or a Certificate of Naturalization/Citizenship.",
        },
        {
          prompt: "How recent must a passport photo be, and what background does it need?",
          answer: "Taken within the last 6 months, against a plain white or off-white background free of shadows.",
        },
      ],
    },
    {
      slug: "renewing-your-passport",
      title: "6 · Renewing your passport (Form DS-82)",
      body: `You may be able to renew **without** applying in person, using **Form DS-82**, if **all** of the following are true: your most recent passport was issued when you were **16 or older** and was valid for **10 years**; it was issued **within the last 15 years**; it is **not damaged** beyond normal wear and tear; it was **never reported lost or stolen**; and it is either still in your **current name**, or you can supply a marriage certificate, divorce decree, or court order showing your name change (U.S. Department of State, n.d.-h). If any of those isn't true, you apply in person with Form DS-11 instead (Lesson 3).

**Renew by mail.** Submit Form DS-82, your most recent passport (it's returned to you separately from your new one), a new passport photo, and the fee. This is the fallback if you don't qualify to renew online (U.S. Department of State, n.d.-h).

**Renew online**, where eligible, is faster but has its **own, narrower** eligibility layer on top of the mail-renewal rules: your current 10-year passport is expiring within 1 year (or expired less than 5 years ago); you're 25 or older; you're not changing your name, sex, or other personal details; you are not traveling internationally within the next 6 weeks; and you're physically located in a U.S. state or territory when you apply (U.S. Department of State, n.d.-i).

**Use the official site only.** The **only** authorized place to renew online is **opr.travel.state.gov**. Third-party sites, even ones with "gov" in the name, are not the Department of State and may charge unnecessary fees (U.S. Department of State, n.d.-i).

:::reveal You want to renew online. Name two eligibility conditions you must meet. ||| Any two of: your current 10-year passport is expiring within 1 year or expired less than 5 years ago, you aren't changing your name or other personal details, you aren't traveling internationally within 6 weeks, and you're physically in a U.S. state or territory when you apply.

## Sources
- U.S. Department of State. (n.d.-h). *Renew your passport by mail*. https://travel.state.gov/content/travel/en/passports/have-passport/renew.html
- U.S. Department of State. (n.d.-i). *Renew your passport online*. https://travel.state.gov/content/travel/en/passports/have-passport/renew-online.html`,
      recallContent: [
        {
          prompt: "What two separate service add-ons can you pay extra for when applying, and what does each speed up?",
          answer:
            "Expedited service (speeds up processing) and 1-3 day return delivery (speeds up shipping of the finished passport, not available for card-only applications).",
        },
        {
          prompt: "Why does this course avoid printing a specific fee table or processing-time number?",
          answer:
            "Because the Department of State periodically revises fees and processing times shift with demand, so any fixed number could go stale, check the official fee calculator and processing-time tool instead.",
        },
      ],
    },
    {
      slug: "passports-for-minors",
      title: "7 · Passports for minors",
      body: `Children cannot renew by mail, every passport for a minor is a **new, in-person** application, and it comes with extra consent rules that scale with age.

**Under 16.** **Both parents or legal guardians** generally must appear in person with the child, or otherwise show consent, before a passport is issued. If one parent or guardian **cannot** appear in person, the absent parent must sign a **notarized Statement of Consent (Form DS-3053)**, submitted within **90 days** of notarization, along with a photocopy of their photo ID. If a parent has **sole custody** (or is the only parent/guardian), that can instead be shown with a court custody order, a birth certificate listing only that parent, or the other parent's death certificate. A child's passport book is valid for **5 years** and cannot be renewed, a new application is required every time (U.S. Department of State, n.d.-j).

**Age 16-17.** The rule shifts from **two-parent** consent to **one**: a 16- or 17-year-old applies in person on Form DS-11 like an adult, but must show that **at least one** parent or legal guardian is aware of the application (a signed note, being listed as an emergency contact, or paying the fee can demonstrate this, a parent doesn't have to appear in person). If the teen is enrolled in the Children's Passport Issuance Alert Program, the Department contacts the enrolling parent or guardian before issuing the passport (U.S. Department of State, n.d.-j).

:::reveal How does the parental-consent rule change between a child under 16 and a 16-17 year old applicant? ||| Under 16 generally requires both parents/guardians to appear or consent (or a notarized DS-3053 from an absent parent). At 16-17, the teen applies like an adult but only needs to show that at least one parent or guardian is aware of the application.

## Sources
- U.S. Department of State. (n.d.-j). *Apply for a child's passport under 16*. https://travel.state.gov/content/travel/en/passports/need-passport/under-16.html`,
      recallContent: [
        {
          prompt: "What are the two renewal paths, and what's the key extra eligibility layer for the faster one?",
          answer:
            "Renew by mail (Form DS-82) or renew online. Online renewal adds extra requirements on top of mail eligibility: age 25+, no changes to your name/personal details, and no international travel within 6 weeks.",
        },
        {
          prompt: "Where is the only authorized place to renew a U.S. passport online?",
          answer: "opr.travel.state.gov, third-party sites, even ones with 'gov' in the name, are not official.",
        },
      ],
    },
    {
      slug: "name-changes-and-lost-stolen",
      title: "8 · Name changes, and lost or stolen passports",
      body: `**Changing your name on a passport** depends on timing:

- **Both** your passport's issuance **and** your legal name change happened within the **last year**: mail in **Form DS-5504** with your current passport, a certified copy of the name-change document (marriage certificate, divorce decree, or court order), and a new photo.
- **More than a year** has passed since either event: if you're otherwise eligible, **renew by mail** (Form DS-82) with a certified copy of your name-change document, or **apply in person** (Form DS-11) with valid ID in your new name.
- **No legal document available**: apply in person with Form DS-11, your citizenship evidence, valid ID in your current name, a **Form DS-60 affidavit** signed by two people who have known you by both names, and **three certified public records** showing you've used the new name for **5 or more years**.

(U.S. Department of State, n.d.-k)

**If your passport is lost or stolen, report it immediately.** Three ways, from fastest to slowest:

1. **Online**, the fastest option, at the Department's online form filler. Your passport is canceled within **1 business day**, with an email confirmation.
2. **By phone**, call the National Passport Information Center.
3. **By mail**, complete and sign **Form DS-64** and mail it with a photocopy of your photo ID; this takes several weeks.

Once reported, the passport is **permanently invalid**, even if you find it later, it cannot be used for travel again. Reporting it lost or stolen does **not** replace it: you must **apply in person** for a new one (Form DS-11), noting when and where it was lost and including a police report if you filed one. Note: no one can travel internationally using only your passport *number*, the physical document, with its security features, is what's required (U.S. Department of State, n.d.-l).

:::reveal True or false: once you report a passport lost or stolen, you can use it again if you find it. Explain. ||| False. Reporting it lost or stolen permanently deactivates it, even if you later find it, and reporting it does not replace it, so you must apply in person for a new one.

## Sources
- U.S. Department of State. (n.d.-k). *Change or correct a passport*. https://travel.state.gov/en/passports/renew-replace/change-correct-passport.html
- U.S. Department of State. (n.d.-l). *Report your passport lost or stolen*. https://travel.state.gov/en/passports/renew-replace/report-passport-lost-stolen.html`,
      recallContent: [
        {
          prompt: "Under 16, what must an absent parent do if they can't appear in person for their child's passport application?",
          answer:
            "Sign a notarized Statement of Consent (Form DS-3053), submitted within 90 days of notarization, with a photocopy of their photo ID, unless the other parent has sole custody, shown a different way.",
        },
        {
          prompt: "What's the key difference in the consent requirement for a 16-17 year old applicant versus a child under 16?",
          answer:
            "A 16-17 year old applies like an adult and only needs to show that at least one parent or guardian is aware of the application, rather than both parents appearing or consenting.",
        },
      ],
    },
    {
      slug: "travel-validity-rules",
      title: "9 · Validity rules for travel: the six-month rule and blank pages",
      body: `Having a technically-valid passport isn't the whole story, many destinations set their **own** extra requirements, and missing one can get you denied boarding or entry.

**The six-month validity rule.** Many foreign destinations require your passport to have **at least 6 months of validity remaining beyond your trip's dates**, not just be unexpired on your travel date. Some airlines will refuse to let you board if this isn't met, even if your destination itself would let you in. The exact rule varies by country, so **check the specific destination's entry requirements**, travel.state.gov's country-by-country Travel Advisories and destination pages are the place to confirm it before you book (U.S. Department of State, n.d.-m).

**Blank-page requirements.** Some destinations also require your passport book to have **2 to 4 completely blank visa or stamp pages** at the time of entry, a passport that's technically valid but full of stamps can still get you turned away by an airline or a border agent. You **cannot add pages** to an existing passport book; if you're a frequent international traveler running low on blank pages, you must **renew** and choose the larger-book option when you apply (U.S. Department of State, n.d.-m).

**The practical habit:** before you book any international trip, check (1) your passport's expiration date against your destination's specific validity requirement, and (2) how many blank pages you have left, both on travel.state.gov's destination-specific pages, since requirements vary by country and can change.

:::reveal What two passport conditions, beyond simply "not expired", should you check before booking international travel, and why? ||| Whether you have at least 6 months of validity remaining beyond your trip (many countries and airlines require this), and whether you have enough blank visa/stamp pages left (some destinations require 2-4 blank pages), both vary by destination.

## Sources
- U.S. Department of State. (n.d.-m). *Frequently asked questions about passport services*. https://travel.state.gov/content/travel/en/passports/passport-help/faqs.html`,
      recallContent: [
        {
          prompt: "If both your passport's issuance and your legal name change happened within the last year, which form do you mail in?",
          answer: "Form DS-5504, along with your current passport, a certified copy of the name-change document, and a new photo.",
        },
        {
          prompt: "What is the fastest way to report a lost or stolen passport, and how quickly is it canceled?",
          answer: "Report it online through the Department's online form filler, it's canceled within 1 business day, with email confirmation.",
        },
      ],
    },
    {
      slug: "us-passport-quiz",
      title: "10 · Check your understanding",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "Can a U.S. passport card be used to fly internationally?",
            options: [
              "Yes, on any international flight",
              "No, it's valid only for land/sea entry from Canada, Mexico, Bermuda, and certain Caribbean destinations",
              "Only on flights to Canada",
              "Only if paired with a driver's license",
            ],
            correctIndex: 1,
            explanation:
              "The card is never valid for international air travel. It's valid only for land or sea entry from Canada, Mexico, Bermuda, and certain Caribbean destinations. The book is required for international flights.",
            sourceLessonSlug: "passport-book-vs-card",
          },
          {
            prompt: "As a first-time applicant, when should you sign Form DS-11?",
            options: [
              "Before your appointment, so it's ready to hand over",
              "At your appointment, only when the acceptance official tells you to",
              "It doesn't need to be signed",
              "Anytime, as long as it's dated",
            ],
            correctIndex: 1,
            explanation:
              "Form DS-11 must stay unsigned until you're at your appointment and the acceptance official directs you to sign it, since they witness the signature.",
            sourceLessonSlug: "applying-first-time",
          },
          {
            prompt: "Which of these is required for every passport photo?",
            options: [
              "It must be taken within the last 6 months",
              "It can be edited with a smoothing filter",
              "It must show you wearing your regular eyeglasses",
              "It can be a scanned copy of a printed photo",
            ],
            correctIndex: 0,
            explanation:
              "Passport photos must be recent (taken within the last 6 months) and unaltered, no filters, AI edits, eyeglasses, or scanned copies.",
            sourceLessonSlug: "documents-and-photo",
          },
          {
            prompt: "Why doesn't this course print a specific passport fee amount or number of weeks for processing?",
            options: [
              "Those numbers are secret",
              "Fees and processing times change over time, so the course points you to the current official numbers instead",
              "Every applicant pays a different, unpredictable amount",
              "The Department of State doesn't publish that information",
            ],
            correctIndex: 1,
            explanation:
              "The Department of State periodically revises its fee schedule, and processing times shift with demand, so this course teaches the fee/time structure and tells you to verify current figures at travel.state.gov.",
            sourceLessonSlug: "fees-and-processing-times",
          },
          {
            prompt: "You're eligible to renew by mail with Form DS-82, but you also want to renew online. What extra condition applies ONLY to online renewal?",
            options: [
              "You must be at least 25 and not traveling internationally within 6 weeks",
              "You must renew at a passport agency in person",
              "You must have a passport card, not a book",
              "There's no extra condition, mail eligibility is the same as online eligibility",
            ],
            correctIndex: 0,
            explanation:
              "Online renewal adds its own layer on top of mail-renewal eligibility: you must be 25 or older, not be changing personal details, not be traveling internationally within 6 weeks, and be physically in a U.S. state or territory.",
            sourceLessonSlug: "renewing-your-passport",
          },
          {
            prompt: "For a child under 16, what must an absent parent typically provide if they can't appear in person?",
            options: [
              "Nothing, one parent is always enough",
              "A notarized Statement of Consent, Form DS-3053, submitted within 90 days of notarization",
              "A verbal phone confirmation to the acceptance official",
              "A copy of the child's birth certificate only",
            ],
            correctIndex: 1,
            explanation:
              "The absent parent generally must sign a notarized Form DS-3053 (submitted within 90 days), unless sole custody is shown a different way.",
            sourceLessonSlug: "passports-for-minors",
          },
          {
            prompt: "Once you report a passport lost or stolen, and later find it, can you use it to travel?",
            options: [
              "Yes, once you report it found",
              "No, it's permanently invalid, even if you find it later",
              "Yes, for domestic travel only",
              "Only if you call to reactivate it",
            ],
            correctIndex: 1,
            explanation:
              "Reporting a passport lost or stolen permanently deactivates it. Finding it later doesn't restore its validity, and reporting it doesn't replace it, a new in-person application is required.",
            sourceLessonSlug: "name-changes-and-lost-stolen",
          },
          {
            prompt: "What is the 'six-month validity rule' many countries apply?",
            options: [
              "Your passport must not have expired more than six months ago",
              "Your passport must be valid for at least six months beyond your trip's dates",
              "You can only travel for six months on one passport",
              "Passports are only checked every six months",
            ],
            correctIndex: 1,
            explanation:
              "Many destinations (and airlines enforcing their rules) require your passport to remain valid for at least six months past your trip's dates, not just be unexpired on the day you travel.",
            sourceLessonSlug: "travel-validity-rules",
          },
        ],
      },
    },
  ],
};
