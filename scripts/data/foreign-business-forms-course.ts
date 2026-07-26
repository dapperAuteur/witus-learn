// Authored "How Other Countries Form Businesses" — course 5 of the "How a Business Is Formed"
// learning path (plans/46, Path B, course 5). A cited, high-school-and-up course on Learn.WitUS.
//
// WHY THIS COURSE EXISTS (the structural argument, from plans/46)
// --------------------------------------------------------------
// Course 1, "What a Business Entity Actually Is," taught the METHOD: an entity is a bundle of FOUR
// decisions (liability, taxation, ownership and transfer, governance). Course 2, "The US Forms,"
// walked the American menu as the baseline. THIS course carries the same four decisions abroad, to
// show the single most important thing course 2 could not: the American set of forms is NOT
// universal. Every country writes its own menu, and the differences are POLICY CHOICES WITH
// CONSEQUENCES, not accidents of translation. The learner who holds the four questions can read a
// form in a language they do not speak, place it beside the nearest US form, and, just as important,
// name the parts that DO NOT TRANSLATE.
//
// The countries, and why each is here:
//   UK      — the Ltd, the PLC, and the community interest company (a social-enterprise form with an
//             asset lock and its own regulator, which the US benefit corporation does not copy).
//   GERMANY — the GmbH (private limited-liability company) and the AG (public stock corporation),
//             their TWO-TIER board, and MITBESTIMMUNG: mandatory worker seats on the supervisory
//             board of large companies, which has no US equivalent and connects to the unions track.
//   FRANCE  — the SARL (rigid, close-held) and the SAS (a flexible joint-stock form startups love).
//   JAPAN   — the kabushiki kaisha (KK), the standard stock corporation.
//   NORDICS — cooperative DENSITY: the one-member-one-vote form the US treats as niche is mainstream.
//   CHINA   — state-owned enterprises (the state as owner, plus a Party role in governance) and the
//             VIE structure (a CONTRACTUAL workaround, NOT an entity type, of contested legality).
//   INDIA   — the private limited company and the Section 8 company (a not-for-profit company).
//
// THE HARD RULE, which is the ethical spine of the file
// -----------------------------------------------------
// NOT LEGAL OR TAX ADVICE, stated plainly and repeatedly, and doubly so for foreign law a reader
// cannot casually check. This course invents NO capital-requirement figure, employee-count
// threshold, statute section, or quotation it cannot verify. It keeps every foreign form CONCEPTUAL
// AND ACCURATE (the GmbH as a private limited-liability company, the AG as a public one,
// co-determination thresholds in general terms, the VIE as a contractual arrangement rather than an
// entity), and where a country's rules or a form's legal standing are genuinely DEBATED (the VIE
// most of all) it TEACHES THE UNCERTAINTY instead of resolving it. Classifications that are this
// course's own reading, rather than a country's official label, are flagged as such. The primary
// sources are each country's official companies registry or business portal, and reputable
// comparative bodies (the OECD, the International Cooperative Alliance, the US SEC on the VIE risk).
//
// House rule: NO em-dashes or en-dashes anywhere in prose. Commas, colons, parentheses, and hyphens
// only. Verbatim cited titles in a `## Sources` block are the only place a dash could survive, and
// none of the sources here carry one.

import type { AuthoredCourse } from "./authored-course";

export const FOREIGN_BUSINESS_FORMS_COURSE: AuthoredCourse = {
  title: "How Other Countries Form Businesses",
  description:
    "A cited, high-school-and-up tour of how businesses are formed outside the United States, and the fifth course in the 'How a Business Is Formed' path. It is not legal or tax advice, and it says so throughout, doubly so for foreign law you cannot casually check: it teaches you what to ASK a professional, not the answer for your situation. Course 1 gave you the method, that any entity is a bundle of FOUR decisions (who pays the debts, who pays the tax, who owns it and how ownership moves, and who decides), and course 2 walked the US menu as the baseline. This course carries the same four questions abroad to prove the one thing the US baseline cannot: the American set of forms is not universal. You will read the United Kingdom's private limited company, public limited company, and the community interest company with its asset lock; Germany's GmbH and AG, their two-tier board, and Mitbestimmung, the mandatory worker representation on the supervisory boards of large companies that connects straight to the unions track; France's rigid SARL and flexible SAS; Japan's kabushiki kaisha; the Nordic countries, where the one-member-one-vote cooperative the US treats as niche is a mainstream, mass-membership institution; China's state-owned enterprises and the VIE structure, a contractual workaround of contested legality that is not an entity type at all; and India's private limited company and its Section 8 not-for-profit company. Every difference is read as a policy choice with consequences, not an accident of translation, and where a form's legal standing is genuinely debated, the VIE above all, the course teaches the uncertainty rather than faking an answer. The capstone asks you to match a foreign form to its nearest US form using the four decisions, and then to name, honestly, what does not translate.",
  lessons: [
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 1 · How to read a foreign form  (the four decisions abroad; the US set is not universal)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "fbf-what-this-is",
      title: "1 · What this course is for, and the rule it runs on",
      section: "Section 1 · How to read a foreign form",
      body: `This is the fifth course in the "How a Business Is Formed" path, and it takes the method abroad. Course 1, **"What a Business Entity Actually Is,"** taught that any business entity is a bundle of **four decisions**. Course 2, **"The US Forms,"** filled in those four for the American menu. This course does something neither of those could: it carries the four decisions to **other countries**, to show that the US set of forms is only one country's answer, not the way business is done everywhere.

## The one rule, stated first because it governs everything, and matters more here

**This course is not legal advice and it is not tax advice.** It cannot be, and the warning is louder here than in any earlier course, because **foreign law is exactly what a reader cannot casually check.** You probably cannot open Germany's commercial register or read France's business code the way you could pull up your own state's filing portal, which makes a confident-sounding summary more dangerous, not less. So this course teaches you the **shape** of each foreign form and sends every real decision to a professional who actually practises in that country.

Because of that rule, this course refuses to invent, and it refuses harder than usual. It names **no** minimum-capital figure, **no** employee-count threshold, **no** statute section, and **no** quotation that it cannot verify. Where it touches a foreign law it stays **conceptual and accurate**, and where a form's very legal standing is debated (the Chinese VIE structure most of all) it **teaches the uncertainty** instead of pretending the debate is settled.

## What you already have, and what it buys you

You are not starting cold. You hold the four decisions:

| # | Decision | The question you ask any form, anywhere |
|---|---|---|
| **1** | **Liability** | If it owes money it cannot pay, whose money pays? |
| **2** | **Taxation** | When it earns, on whose return does the money land? |
| **3** | **Ownership and transfer** | Who owns it, and how does a share move? |
| **4** | **Governance** | Who actually gets to decide? |

**Those four questions are not American.** They are the questions every business form on earth answers, because every form has to settle who is on the hook, who is taxed, who owns it, and who decides. That is why the method travels: handed a German GmbH or a Japanese kabushiki kaisha, you do not need to read the language to start placing it. You ask the four.

## The claim this whole course exists to make

Here it is, and the rest of the course is the evidence: **the American menu of forms is not universal, and the differences between countries are policy choices with consequences.** Other countries put workers on company boards by law. Some make the state the owner of much of the economy. Some make the cooperative a mainstream institution rather than a curiosity. None of that is a quirk of vocabulary. Each is a deliberate answer to the four decisions, made differently, on purpose, and each has consequences for who holds power in an economy.

## What you will do, section by section

| Section | What you learn to read |
|---|---|
| **1. How to read a foreign form** | Take the four decisions abroad; see that the US set is one option among many |
| **2. The UK and Germany** | The Ltd, the PLC, the community interest company; the GmbH, the AG, and Mitbestimmung |
| **3. France, Japan, and the Nordics** | The SARL and SAS, the kabushiki kaisha, and Nordic cooperative density |
| **4. China and India** | State-owned enterprises, the VIE structure, the private limited, and the Section 8 company |
| **5. The capstone** | Match a foreign form to a US form, and name what does not translate |

**One last time, because it is the rule:** this is a course about how to read a foreign form and how to ask. It is not advice about doing business in any country. For anything real, you retain a professional who practises where the business will be.

## Sources
- Organisation for Economic Co-operation and Development. (n.d.). *Corporate governance*. https://www.oecd.org/corporate/
- U.S. Small Business Administration. (n.d.). *Choose a business structure*. https://www.sba.gov/business-guide/launch-your-business/choose-business-structure`,
    },
    {
      slug: "fbf-four-decisions",
      title: "2 · The four decisions, used to read any form on earth",
      section: "Section 1 · How to read a foreign form",
      body: `Course 1 spent five lessons proving the four decisions are real and separate. This lesson takes them as settled and sharpens them into a **passport**: a reading tool that works in any country, in any language, on a form you have never seen. The trick is to stop asking "what is this form called?" and start asking "how does it answer the four?"

## The four, as a reading grid you carry across borders

| # | Decision | What you look for | The two ends |
|---|---|---|---|
| **1** | **Liability** | Is there a separate legal person with a wall? | Owners personally exposed, or the business alone (the wall) |
| **2** | **Taxation** | Where does the tax land? | On the owners (pass-through), or on the business too |
| **3** | **Ownership and transfer** | What is a stake, and can it move? | One fixed owner, or many owners trading freely |
| **4** | **Governance** | Who holds the power to decide? | The owners directly, or a board and officers |

**A form, in any country, is one row filled across those four columns.** The names change (member, associé, Gesellschafter, shareholder); the columns do not.

## Why the grid survives translation

Every economy has to answer the same four questions, because they are not about culture, they are about **what a business needs to function**: someone bears the debts, someone pays the tax, someone owns it, someone decides. A country can answer each differently, but it cannot skip one. So when you meet the German **GmbH**, you do not need a dictionary to know it is a company "with limited liability" (that is literally what the abbreviation stands for): you run the four and you find a private company with a liability wall. The label is local; the reading is universal.

## Two moves that make foreign reading reliable

- **Translate the DECISION, not the word.** Do not try to memorise that "SARL means LLC." That mapping is loose and it misleads. Instead ask what the SARL does on liability, tax, ownership, and governance, and let the answers place it. A form is its four answers, not its nearest English nickname.
- **Watch for a fifth thing that is not one of the four.** Some countries bolt on a feature the four decisions do not capture on their own, like a legal requirement that workers sit on the board, or that profits can never be paid out. When you meet one, flag it as an **extra**, because those extras are usually the whole point of the form and the part that does not translate.

## Reading any foreign form, in order

1. **Liability.** Separate legal person with a wall, or the owners exposed?
2. **Taxation.** Does the business pay, or do the owners, or both?
3. **Ownership and transfer.** What is an owner called, what is a stake, and can it be sold and to whom?
4. **Governance.** Owners directly, or an appointed board and officers, and how are votes counted?
5. **The extra.** Is there a mandatory feature outside the four (workers on the board, an asset lock, a state owner) that defines this form?

Run those five prompts and you can hold your own on a form from a country you have never visited. And the limit still binds: reading a form is not choosing one, and choosing one abroad is a job for a professional who practises there.

## Sources
- Organisation for Economic Co-operation and Development. (n.d.). *Corporate governance*. https://www.oecd.org/corporate/
- U.S. Small Business Administration. (n.d.). *Choose a business structure*. https://www.sba.gov/business-guide/launch-your-business/choose-business-structure`,
      recallContent: [
        {
          prompt: "Why is the not-advice rule louder in this course than in the earlier ones?",
          answer: "Because foreign law is exactly what a reader cannot casually check. You cannot pull up Germany's register or France's business code the way you can your own state's portal, so a confident summary is more dangerous, not less. The course teaches the shape and sends real decisions to a professional who practises in that country.",
        },
        {
          prompt: "What are the four decisions, and why do they travel across borders?",
          answer: "Liability, taxation, ownership and transfer, and governance. They travel because every economy has to answer the same four (someone bears the debts, someone is taxed, someone owns it, someone decides), so they are the questions every form on earth answers, whatever the local name.",
        },
        {
          prompt: "State the central claim this whole course exists to make.",
          answer: "The American menu of forms is not universal, and the differences between countries are policy choices with consequences, not accidents of translation. Each foreign form is a deliberate, different answer to the four decisions.",
        },
        {
          prompt: "What extra values does the course refuse to invent for foreign forms?",
          answer: "Minimum-capital figures, employee-count thresholds, statute sections, and quotations it cannot verify. It keeps each form conceptual and accurate, and where a form's legal standing is debated it teaches the uncertainty instead of faking an answer.",
        },
      ],
    },
    {
      slug: "fbf-not-universal",
      title: "3 · The American set is not universal",
      section: "Section 1 · How to read a foreign form",
      body: `This is the lesson the course turns on. Most Americans carry a quiet assumption that the forms they grew up with, the LLC, the C-corp, the S-corp election, the 501(c)(3), are just **how business works.** They are not. They are **one country's answers** to the four decisions, and other countries answered differently, on purpose, with real consequences. Seeing that is the whole point of going abroad.

## Four ways the rest of the world diverges from the US menu

Hold these four as a map of what is coming. Each is a place where a foreign answer to the four decisions departs sharply from the American one.

| Divergence | The US answer | An answer found elsewhere |
|---|---|---|
| **Workers and governance** | No mandatory worker seats on boards | Germany requires worker seats on large supervisory boards (Mitbestimmung) |
| **Who owns the economy** | Overwhelmingly private ownership | China runs much of its economy through state-owned enterprises |
| **The cooperative** | A niche form most people never join knowingly | In the Nordics, mass-membership cooperatives are mainstream |
| **The social enterprise** | Benefit corporation, with no asset lock | The UK's community interest company locks its assets to a public purpose |

**None of those is a translation problem.** Each is a policy choice a society made about who holds power in its economy, and each has consequences: a German worker has a legally guaranteed voice in the boardroom that a US worker does not; a Chinese firm answers to the state in ways a US firm does not; a Nordic shopper is often a co-owner of the store, not just a customer.

## Three traps that come from assuming the US set is universal

- **The false-friend trap.** A foreign form with a familiar-sounding name is not the same as its US near-twin. A German AG and a US C-corporation are both public companies, but the AG has a **two-tier board with workers on it** that the C-corp has nothing like. Assume they are identical and you will misread the AG completely.
- **The "there must be an equivalent" trap.** Sometimes there is no US equivalent, and the honest move is to say so. **Mitbestimmung has no American counterpart.** Forcing a match ("it is sort of like a union") loses exactly what makes it distinctive.
- **The "it is just a workaround" trap.** Some foreign structures exist because a law blocks the ordinary path, like China's VIE structure, built from contracts because direct foreign ownership is restricted. Reading it as a normal entity type misses that it is a **response to a constraint**, and that its legality is genuinely contested.

## The through-line to the rest of the path

There is a thread here that runs straight back through this path. Course 4, "Financing Without Access," taught that **when the capital system excludes you, you invent an entity.** This course generalises the move: **when a country's law forbids or discourages an arrangement, someone invents a structure to approximate it**, whether that is the UK inventing an asset-locked company for social enterprise or Chinese firms inventing a contractual web to reach foreign capital. The four decisions let you read every one of those inventions. The rest of the course is worked examples.

**The reading habit to carry:** meet a foreign form, run the four decisions, then ask "what did this country choose that mine did not, and what does it cost or buy?" That question, not a vocabulary list, is what this course is training. And the rule holds: understanding a foreign choice is not the same as advising anyone to make it.

## Sources
- Organisation for Economic Co-operation and Development. (n.d.). *State-owned enterprises*. https://www.oecd.org/corporate/
- International Cooperative Alliance. (n.d.). *Facts and figures*. https://www.ica.coop/en/cooperatives/facts-and-figures`,
      recallContent: [
        {
          prompt: "What is a form, in any country, in terms of the four decisions?",
          answer: "One row filled across four columns: liability, taxation, ownership and transfer, and governance. The local names for owners and stakes change, but the four columns do not, so the grid survives translation.",
        },
        {
          prompt: "Why translate the decision rather than the word when reading a foreign form?",
          answer: "Because a loose mapping like 'SARL means LLC' misleads. A form is its four answers, not its nearest English nickname, so you ask what it does on liability, tax, ownership, and governance and let those answers place it.",
        },
        {
          prompt: "What is the 'extra,' and why does it matter?",
          answer: "A mandatory feature outside the four decisions (workers on the board, an asset lock, a state owner) that some countries bolt onto a form. It matters because the extra is usually the whole point of the form and the part that does not translate to the US menu.",
        },
        {
          prompt: "What five prompts do you run, in order, to read any foreign form?",
          answer: "Liability (wall or exposed?), taxation (business, owners, or both?), ownership and transfer (what is a stake, can it move and to whom?), governance (owners or an appointed board, how are votes counted?), and the extra (a mandatory feature outside the four that defines the form).",
        },
      ],
    },
    {
      slug: "fbf-quiz-reading-foreign",
      title: "4 · Quiz: reading a foreign form",
      section: "Section 1 · How to read a foreign form",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "This course mainly teaches you to:",
            options: [
              "hire a foreign firm",
              "read a foreign form",
              "file a form abroad",
              "avoid every lawyer",
            ],
            correctIndex: 1,
            explanation: "It teaches the shape of each foreign form so you can place it with the four decisions, and it sends real decisions to a professional who practises there.",
            sourceLessonSlug: "fbf-what-this-is",
          },
          {
            prompt: "The not-advice rule is louder here because foreign law is:",
            options: [
              "always identical",
              "never written down",
              "hard to check",
              "free to ignore",
            ],
            correctIndex: 2,
            explanation: "You cannot casually open another country's register or code the way you can your own state's portal, so a confident summary is more dangerous, not less.",
            sourceLessonSlug: "fbf-what-this-is",
          },
          {
            prompt: "For a foreign value it cannot verify, this course:",
            options: [
              "invents a statute",
              "guesses a figure",
              "skips the whole form",
              "teaches the concept",
            ],
            correctIndex: 3,
            explanation: "It names no minimum-capital figure, threshold, or section it cannot verify, and stays conceptual and accurate instead.",
            sourceLessonSlug: "fbf-what-this-is",
          },
          {
            prompt: "The central claim of the course is that the US set of forms is:",
            options: [
              "not universal",
              "the world model",
              "legally required",
              "always cheapest",
            ],
            correctIndex: 0,
            explanation: "The American menu is one country's answers to the four decisions; other countries answered differently, on purpose, with consequences.",
            sourceLessonSlug: "fbf-what-this-is",
          },
          {
            prompt: "A business entity is a bundle of how many decisions?",
            options: ["three", "six", "five", "four"],
            correctIndex: 3,
            explanation: "Liability, taxation, ownership and transfer, and governance. Every form on earth is a different set of answers to those four.",
            sourceLessonSlug: "fbf-four-decisions",
          },
          {
            prompt: "The four decisions survive translation because they are about:",
            options: [
              "each local culture",
              "one shared language",
              "what a business needs",
              "a single tax code",
            ],
            correctIndex: 2,
            explanation: "Every economy must settle who bears the debts, who is taxed, who owns it, and who decides, so the four columns are universal even when the labels are not.",
            sourceLessonSlug: "fbf-four-decisions",
          },
          {
            prompt: "When reading a foreign form, you should translate the:",
            options: [
              "decision, not word",
              "word, not meaning",
              "name into English",
              "fee into dollars",
            ],
            correctIndex: 0,
            explanation: "A loose mapping like 'SARL means LLC' misleads. Ask what the form does on the four decisions and let the answers place it.",
            sourceLessonSlug: "fbf-four-decisions",
          },
          {
            prompt: "The 'extra' in the reading drill is a mandatory feature that sits:",
            options: [
              "inside the tax code",
              "outside the four",
              "on every US form",
              "only in the name",
            ],
            correctIndex: 1,
            explanation: "Some countries bolt on a feature the four decisions miss (workers on the board, an asset lock, a state owner), and the extra is usually the whole point of the form.",
            sourceLessonSlug: "fbf-four-decisions",
          },
          {
            prompt: "Most Americans wrongly assume their familiar forms are:",
            options: [
              "a recent invention",
              "how business works",
              "banned in Europe",
              "run by the state",
            ],
            correctIndex: 1,
            explanation: "The LLC, C-corp, and the rest are one country's answers to the four decisions, not the universal way business is done.",
            sourceLessonSlug: "fbf-not-universal",
          },
          {
            prompt: "Compared with the US, Germany's boardrooms differ by legally requiring:",
            options: [
              "a single owner",
              "no outside board",
              "yearly public votes",
              "worker board seats",
            ],
            correctIndex: 3,
            explanation: "Mitbestimmung puts worker representatives on the supervisory boards of large German companies, a policy choice with no US counterpart.",
            sourceLessonSlug: "fbf-not-universal",
          },
          {
            prompt: "The 'false-friend' trap is treating a foreign form as identical to its:",
            options: [
              "own local rival",
              "US near-twin",
              "founding charter",
              "tax election",
            ],
            correctIndex: 1,
            explanation: "A German AG and a US C-corp are both public, but the AG's two-tier board with workers on it has no C-corp equivalent. A familiar name is not sameness.",
            sourceLessonSlug: "fbf-not-universal",
          },
          {
            prompt: "When no US equivalent exists, the honest move is to:",
            options: [
              "force a US match",
              "call it a union",
              "say so plainly",
              "skip the form",
            ],
            correctIndex: 2,
            explanation: "Mitbestimmung has no American counterpart; forcing a match ('it is sort of like a union') loses exactly what makes it distinctive.",
            sourceLessonSlug: "fbf-not-universal",
          },
          {
            prompt: "The path's through-line is that a blocked legal path leads people to:",
            options: [
              "invent a structure",
              "give up the plan",
              "move to the US",
              "pay a larger tax",
            ],
            correctIndex: 0,
            explanation: "When a law forbids or discourages an arrangement, someone invents a structure to approximate it, from the UK's asset-locked company to China's contractual VIE.",
            sourceLessonSlug: "fbf-not-universal",
          },
          {
            prompt: "In much of its economy, China's businesses are owned by the:",
            options: [
              "founding family",
              "foreign public",
              "worker councils",
              "state",
            ],
            correctIndex: 3,
            explanation: "China runs a large share of its economy through state-owned enterprises, a very different answer to the ownership decision than the US private-ownership default.",
            sourceLessonSlug: "fbf-not-universal",
          },
          {
            prompt: "The reading habit to carry asks what a country chose that yours did not, and:",
            options: [
              "what it costs or buys",
              "who named the form",
              "when it was passed",
              "which state agrees",
            ],
            correctIndex: 0,
            explanation: "Meet a foreign form, run the four decisions, then ask what this country chose differently and what that choice costs or buys. That question is what the course trains.",
            sourceLessonSlug: "fbf-not-universal",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 2 · The United Kingdom and Germany
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "fbf-uk",
      title: "5 · The UK: the Ltd, the PLC, and the community interest company",
      section: "Section 2 · The United Kingdom and Germany",
      body: `Start with the United Kingdom, because its menu is close enough to the US one to be readable and different enough to teach. UK companies are registered at **Companies House**, the UK's national registry, which plays roughly the role the Secretary of State plays for a US company: it is the public record, and it is your primary source.

## The private limited company ("Ltd")

The **private limited company**, written **Ltd** after the name, is the UK workhorse, the form most British small and medium businesses use. Against the four decisions:

- **Liability: limited.** Most are "limited by shares," meaning a member's loss is capped at what they agreed to pay for their shares. (A variant, "limited by guarantee," is used by non-profits and clubs, where members guarantee a small sum instead.)
- **Taxation: entity-level.** A UK company is its own taxpayer and pays corporation tax on its profits. This course names **no rate**, because rates are values that change and belong to the UK tax authority.
- **Ownership and transfer: shares, but not public.** Owners hold shares, and a private limited company **cannot offer its shares to the general public.** Transfer is typically restricted, which suits a closely held business.
- **Governance: directors.** The shareholders own it; directors run it and owe duties to the company.

**Read against the US menu, an Ltd sits near a privately held US corporation:** a separate person, a wall, shares that do not trade publicly, run by directors.

## The public limited company ("PLC")

The **public limited company**, written **PLC**, is the form that **can offer shares to the public** and can be listed on a stock exchange. It answers the four much like the Ltd on liability and governance, but diverges on ownership: its shares can be sold widely to the public. A PLC must also meet a **minimum share-capital requirement** set by UK law that a private Ltd does not; this course keeps that **conceptual** rather than asserting the figure. **The PLC is the UK's public-company form, the near-cousin of a listed US corporation.**

## The community interest company (CIC): the one that does not translate

Now the distinctive UK form, and the reason the UK is in this course. A **community interest company (CIC)** is a **limited company built for social enterprise.** It is still a company (limited liability, directors, the usual wall), but it carries two features an ordinary company does not:

- **A community-interest purpose.** It must pass a test showing it serves a community rather than purely private benefit.
- **An asset lock.** This is the heart of it. An **asset lock** restricts the company from distributing its assets and profits to private owners; assets are broadly locked to the community purpose, so they cannot simply be paid out to shareholders or extracted on a sale.

A CIC is overseen by a dedicated public office, the **Regulator of Community Interest Companies.** Against the four decisions, a CIC reads like a limited company on liability, taxation, and governance, but its **ownership-and-transfer answer is deliberately constrained**: the asset lock limits how value can flow out to owners.

**Here is the "does not translate" point.** The nearest US idea is the benefit corporation from course 2, but they are **not the same.** The US benefit corporation widens directors' duties to consider a public benefit; it does **not** impose an asset lock or a dedicated regulator. The CIC's defining feature, assets legally locked to a community purpose, has **no direct US equivalent.** Reading the CIC as "the British benefit corporation" loses exactly what makes it a CIC.

**Reading these on sight:** "Ltd" is a private limited company (wall, shares not public, directors); "PLC" is a public one that can list; a "CIC" is a limited company with a community purpose and an asset lock, a social-enterprise form the US menu has no twin for. And the rule holds: this is how to read the forms, not advice to use any of them, which for a real UK business is a job for a UK professional.

## Sources
- GOV.UK. (n.d.). *Set up a private limited company*. https://www.gov.uk/limited-company-formation
- GOV.UK. (n.d.). *Set up a social enterprise*. https://www.gov.uk/set-up-a-social-enterprise
- Office of the Regulator of Community Interest Companies. (n.d.). *About us*. https://www.gov.uk/government/organisations/office-of-the-regulator-of-community-interest-companies`,
      recallContent: [
        {
          prompt: "Name the four ways the rest of the world diverges from the US menu.",
          answer: "Workers and governance (Germany's mandatory worker board seats), who owns the economy (China's state-owned enterprises), the cooperative (mainstream in the Nordics, niche in the US), and the social enterprise (the UK's asset-locked community interest company versus the US benefit corporation).",
        },
        {
          prompt: "What is the false-friend trap?",
          answer: "Treating a foreign form as identical to its familiar-sounding US near-twin. A German AG and a US C-corp are both public companies, but the AG's two-tier board with workers on it has no C-corp equivalent, so assuming sameness misreads it.",
        },
        {
          prompt: "Why is it sometimes honest to say a foreign form has no US equivalent?",
          answer: "Because forcing a match can lose what makes the form distinctive. Mitbestimmung has no American counterpart, and calling it 'sort of like a union' misdescribes it. Saying plainly that there is no equivalent is more accurate than a false match.",
        },
        {
          prompt: "How does the path's through-line generalise course 4's lesson?",
          answer: "Course 4 taught that when the capital system excludes you, you invent an entity. This course generalises it: when a country's law forbids or discourages an arrangement, someone invents a structure to approximate it, and the four decisions let you read every such invention.",
        },
      ],
    },
    {
      slug: "fbf-germany-gmbh-ag",
      title: "6 · Germany: the GmbH and the AG",
      section: "Section 2 · The United Kingdom and Germany",
      body: `Germany gives us two core company forms and a structural surprise. The two forms are the **GmbH** and the **AG**; the surprise, next lesson, is that workers sit on their boards by law. German companies register in the commercial register (the **Handelsregister**), which is the public primary source.

## The GmbH: the private limited-liability company

**GmbH** stands for **Gesellschaft mit beschränkter Haftung**, which translates almost word for word as "company with limited liability." It is the German workhorse, the form most private German businesses use. Against the four decisions:

- **Liability: limited.** The abbreviation says it: the company is a separate legal person and a member's liability is limited. Owners are **Gesellschafter** (members or shareholders in the company).
- **Taxation: entity-level.** A GmbH is its own taxpayer. This course names no rate.
- **Ownership and transfer: shares, closely held.** Ownership is divided into shares in the company, and transfer is typically formal and restricted, which suits closely held firms. A GmbH **cannot list its shares on a public stock exchange.**
- **Governance: managing directors.** Day-to-day management is by one or more managing directors (**Geschäftsführer**), appointed by and answerable to the members.

Germany also recognises a **lower-capital variant** of the GmbH, sometimes called the "mini-GmbH," for founders who cannot meet the standard capital, but the course keeps the capital figures **conceptual.** **Read against the US menu, the GmbH is a private limited-liability company, the near-cousin of a privately held US corporation or an LLC that has chosen a corporate shape.**

## The AG: the public stock corporation

**AG** stands for **Aktiengesellschaft**, a **stock corporation.** This is the form built to raise capital widely and to **list on a stock exchange.** Against the four decisions:

- **Liability: limited**, like any corporation.
- **Taxation: entity-level.**
- **Ownership and transfer: shares (Aktien) built to trade.** The AG issues stock that can be offered publicly and listed, which is exactly why large public German companies are AGs.
- **Governance: this is where it gets distinctive.** An AG has a **two-tier board**, and that structure is the setup for the next lesson.

## The two-tier board: the structural surprise

Here is the thing a US reader must not skip. A large German company does **not** have one board of directors the way a US corporation does. It has **two separate boards**:

| Board | German name | What it does |
|---|---|---|
| **Management board** | Vorstand | Runs the company day to day; the executives |
| **Supervisory board** | Aufsichtsrat | Oversees and appoints the management board; sets no daily operations |

The **management board (Vorstand)** manages; the **supervisory board (Aufsichtsrat)** supervises, appoints, and can remove the managers, but does not run operations itself. **The two roles that a US corporation blends into a single board of directors are, in Germany, split into two bodies.** This separation is not decoration: it is exactly what makes the next lesson possible, because **the supervisory board is where the law seats workers.**

**Reading these on sight:** "GmbH" is a private limited-liability company (wall, closely held, run by managing directors); "AG" is a public stock corporation that can list, run through a **two-tier** board. The moment you see two boards, a management board and a supervisory board, you are reading a German-style structure, and you should expect the co-determination rules that come next. As always, this is reading, not advice; a real German venture takes advice in Germany.

## Sources
- Make it in Germany. (n.d.). *Setting up a business*. https://www.make-it-in-germany.com/en/
- Organisation for Economic Co-operation and Development. (2021). *OECD corporate governance factbook*. https://www.oecd.org/corporate/`,
      recallContent: [
        {
          prompt: "How does a UK private limited company (Ltd) answer the four decisions?",
          answer: "Liability: limited, usually limited by shares. Taxation: entity-level (corporation tax). Ownership and transfer: shares that cannot be offered to the public, transfer usually restricted. Governance: shareholders own it, directors run it. It reads near a privately held US corporation.",
        },
        {
          prompt: "What is a community interest company, and what is its defining feature?",
          answer: "A limited company built for social enterprise. Its defining feature is the asset lock, which restricts distributing assets and profits to private owners so value stays locked to a community purpose. It also must pass a community-interest test and is overseen by a dedicated regulator.",
        },
        {
          prompt: "Why is a CIC not simply 'the British benefit corporation'?",
          answer: "The US benefit corporation widens directors' duties to consider a public benefit but imposes no asset lock and no dedicated regulator. The CIC's asset lock, value legally locked to a community purpose, has no direct US equivalent, so the match loses what makes it a CIC.",
        },
        {
          prompt: "What does a PLC do that a private Ltd cannot?",
          answer: "A public limited company can offer its shares to the general public and list on a stock exchange, and it must meet a minimum share-capital requirement set by UK law. A private Ltd cannot offer shares publicly.",
        },
      ],
    },
    {
      slug: "fbf-mitbestimmung",
      title: "7 · Mitbestimmung: workers on the supervisory board",
      section: "Section 2 · The United Kingdom and Germany",
      body: `This is the German feature with no American counterpart, and one of the sharpest examples in the whole course that a business form is a **policy choice.** Its name is **Mitbestimmung**, usually translated as **co-determination**, and it means what it says: in large German companies, workers help determine how the company is governed, by **sitting on the supervisory board by law.**

## What co-determination actually is

Last lesson set it up: a large German company has a **two-tier board**, and the supervisory board (Aufsichtsrat) appoints and oversees the managers. Mitbestimmung is the rule that **a share of the supervisory board's seats is reserved for employee representatives.** These are not advisers or observers. They are voting members of the board that hires, oversees, and can remove the company's top managers. Worker voice is built into the governance decision itself.

**This is the "extra" from lesson 2 in its clearest form.** It is not one of the four decisions; it is a mandatory feature bolted onto **governance**, and it changes who holds power inside the company.

## How much representation, in general terms

The amount of employee representation depends on the company's size, and the course describes the tiers **in general terms** rather than asserting exact employee-count thresholds, which are set by German statute and are values it will not invent:

| Company size | Roughly what co-determination requires |
|---|---|
| **Smaller firms below the thresholds** | Generally no mandatory board-level employee seats |
| **Mid-sized firms above a first threshold** | Around one-third of supervisory-board seats for employees |
| **The largest firms (thousands of employees)** | Up to about half the supervisory-board seats for employees |

**Read the bottom row carefully, because it is widely misunderstood.** Even in the largest companies, where employees hold close to half the supervisory-board seats, this is usually **not** full worker control. In the standard near-parity model, the shareholder side typically keeps a **tie-breaking edge**: the board chair, effectively chosen by the shareholder side, can hold a **casting vote** that breaks a deadlock. So "up to half the seats" means a powerful, legally guaranteed voice, **not** a controlling majority. Overstating it (saying workers "control" big German firms) is as wrong as ignoring it.

## Why this is a policy choice with consequences

Set it beside the US answer and the choice is stark:

- **In the US**, there is **no** legal requirement for workers to sit on a company's board. Governance runs shareholders to board to officers, with labour's voice coming, if at all, through unions and collective bargaining **outside** the boardroom.
- **In Germany**, large-company governance **reserves board seats for workers by law**, so labour has a voice **inside** the room where managers are hired and overseen.

Neither is an accident. Each is a deliberate answer to "who gets to decide," and each has consequences: for how restructurings and layoffs are debated, for how long companies plan, for whose interests directors weigh. This is why the plan places Mitbestimmung next to the unions track: **it is worker power expressed as corporate governance instead of, or alongside, collective bargaining.**

**The honest reader's summary:** Mitbestimmung is mandatory worker representation on the supervisory boards of large German companies, scaled by size to roughly one-third and up to about half the seats, with shareholders usually keeping a tie-breaker at the top. It is a governance "extra" with **no US equivalent**, and pretending it is "just German unions" or "worker ownership" both miss it. And, as always, this is how to read the rule, not advice about operating under it, which belongs to a German professional.

## Sources
- Make it in Germany. (n.d.). *Setting up a business*. https://www.make-it-in-germany.com/en/
- Organisation for Economic Co-operation and Development. (2021). *OECD corporate governance factbook*. https://www.oecd.org/corporate/`,
      recallContent: [
        {
          prompt: "What does GmbH stand for, and how does it answer the four decisions?",
          answer: "Gesellschaft mit beschraenkter Haftung, 'company with limited liability.' Liability: limited (a separate person, owners are Gesellschafter). Taxation: entity-level. Ownership: shares, closely held, cannot list publicly. Governance: managing directors (Geschaeftsfuehrer) appointed by the members. It reads as a private limited-liability company.",
        },
        {
          prompt: "What does an AG do that a GmbH cannot, and what is unusual about its board?",
          answer: "An AG (Aktiengesellschaft, a stock corporation) can offer shares to the public and list on a stock exchange, which a GmbH cannot. Its board is two-tier: a management board (Vorstand) that runs the company and a supervisory board (Aufsichtsrat) that oversees and appoints the managers.",
        },
        {
          prompt: "How does the German two-tier board differ from a US board of directors?",
          answer: "A US corporation blends management oversight and direction into a single board of directors. Germany splits those roles into two separate bodies: the management board (Vorstand) that runs operations and the supervisory board (Aufsichtsrat) that supervises and appoints the managers.",
        },
        {
          prompt: "Why does the two-tier board set up the co-determination lesson?",
          answer: "Because the supervisory board is where German law seats workers. The separation of a distinct supervisory board is exactly what makes it possible to reserve a share of board seats for employee representatives.",
        },
      ],
    },
    {
      slug: "fbf-quiz-uk-germany",
      title: "8 · Quiz: the UK and Germany",
      section: "Section 2 · The United Kingdom and Germany",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "A UK company written 'Ltd' is a:",
            options: [
              "public co-op",
              "state agency",
              "private company",
              "tax election",
            ],
            correctIndex: 2,
            explanation: "'Ltd' marks a private limited company: a wall, shares that cannot be offered to the public, run by directors, the UK workhorse.",
            sourceLessonSlug: "fbf-uk",
          },
          {
            prompt: "A UK private limited company cannot:",
            options: [
              "appoint directors",
              "sell shares publicly",
              "pay corporation tax",
              "limit its liability",
            ],
            correctIndex: 1,
            explanation: "Offering shares to the general public is the PLC's feature; a private Ltd keeps its shares closely held with restricted transfer.",
            sourceLessonSlug: "fbf-uk",
          },
          {
            prompt: "The defining feature of a community interest company is its:",
            options: [
              "asset lock",
              "tax refund",
              "public listing",
              "single owner",
            ],
            correctIndex: 0,
            explanation: "An asset lock keeps assets and profits tied to a community purpose, so value cannot simply be paid out to private owners.",
            sourceLessonSlug: "fbf-uk",
          },
          {
            prompt: "A CIC differs from a US benefit corporation because the US form has no:",
            options: [
              "board of directors",
              "profit motive",
              "asset lock",
              "legal charter",
            ],
            correctIndex: 2,
            explanation: "The US benefit corporation widens directors' duties but imposes no asset lock and no dedicated regulator, so it is not the CIC's twin.",
            sourceLessonSlug: "fbf-uk",
          },
          {
            prompt: "A UK company's public primary-source record is kept at:",
            options: [
              "the tax office",
              "a private bank",
              "the trade union",
              "Companies House",
            ],
            correctIndex: 3,
            explanation: "Companies House is the UK's national registry, playing roughly the role a US Secretary of State plays for a US company.",
            sourceLessonSlug: "fbf-uk",
          },
          {
            prompt: "The German abbreviation 'GmbH' names a company with:",
            options: [
              "public listing",
              "limited liability",
              "no fixed owner",
              "one board seat",
            ],
            correctIndex: 1,
            explanation: "GmbH is 'Gesellschaft mit beschraenkter Haftung,' literally a company with limited liability: the private German workhorse.",
            sourceLessonSlug: "fbf-germany-gmbh-ag",
          },
          {
            prompt: "Unlike a GmbH, a German AG is built to:",
            options: [
              "avoid all tax",
              "list its shares",
              "skip a board",
              "stay one-person",
            ],
            correctIndex: 1,
            explanation: "An AG (Aktiengesellschaft) is the stock corporation that can offer shares to the public and list on an exchange; a GmbH cannot.",
            sourceLessonSlug: "fbf-germany-gmbh-ag",
          },
          {
            prompt: "A large German company's governance is unusual because it uses:",
            options: [
              "two-tier boards",
              "no directors",
              "a single owner",
              "a state proxy",
            ],
            correctIndex: 0,
            explanation: "It splits the roles into a management board (Vorstand) that runs the firm and a supervisory board (Aufsichtsrat) that oversees and appoints the managers.",
            sourceLessonSlug: "fbf-germany-gmbh-ag",
          },
          {
            prompt: "In the German two-tier structure, the supervisory board mainly:",
            options: [
              "runs daily work",
              "sells the shares",
              "oversees managers",
              "files the taxes",
            ],
            correctIndex: 2,
            explanation: "The Aufsichtsrat supervises, appoints, and can remove the management board, but it does not run day-to-day operations itself.",
            sourceLessonSlug: "fbf-germany-gmbh-ag",
          },
          {
            prompt: "Mitbestimmung requires that a share of the supervisory board be:",
            options: [
              "sold to the state",
              "left empty by law",
              "chosen by lenders",
              "held by employees",
            ],
            correctIndex: 3,
            explanation: "Co-determination reserves supervisory-board seats for employee representatives, who are voting members of the board that oversees managers.",
            sourceLessonSlug: "fbf-mitbestimmung",
          },
          {
            prompt: "Mitbestimmung is best classified as a mandatory 'extra' bolted onto:",
            options: [
              "the governance",
              "the liability",
              "the taxation",
              "the share price",
            ],
            correctIndex: 0,
            explanation: "It is not one of the four decisions; it is a feature added to governance that changes who holds power inside the company.",
            sourceLessonSlug: "fbf-mitbestimmung",
          },
          {
            prompt: "In the largest German firms, near-parity co-determination usually still lets shareholders keep a:",
            options: [
              "tie-breaking vote",
              "full board veto",
              "tax exemption",
              "second company",
            ],
            correctIndex: 0,
            explanation: "Even with employees near half the seats, the shareholder-side chair typically holds a casting vote, so it is a strong voice, not control.",
            sourceLessonSlug: "fbf-mitbestimmung",
          },
          {
            prompt: "The amount of German co-determination scales with the company's:",
            options: [
              "annual profit",
              "share price",
              "export share",
              "size",
            ],
            correctIndex: 3,
            explanation: "Smaller firms have none, mid-sized firms roughly a third of the seats, and the largest up to about half, described here in general terms.",
            sourceLessonSlug: "fbf-mitbestimmung",
          },
          {
            prompt: "In the US, by contrast, the law requires companies to give workers:",
            options: [
              "half the board",
              "a third of votes",
              "no board seats",
              "a yearly bonus",
            ],
            correctIndex: 2,
            explanation: "US law mandates no worker seats on company boards; labour's voice comes, if at all, through unions and bargaining outside the boardroom.",
            sourceLessonSlug: "fbf-mitbestimmung",
          },
          {
            prompt: "Calling Mitbestimmung 'just German unions' is wrong because it is worker power expressed as:",
            options: [
              "a tax rebate",
              "corporate governance",
              "a share buyback",
              "a private club",
            ],
            correctIndex: 1,
            explanation: "It seats workers inside the governance structure itself, alongside or instead of collective bargaining, which is why it has no US equivalent.",
            sourceLessonSlug: "fbf-mitbestimmung",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 3 · France, Japan, and the Nordics
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "fbf-france",
      title: "9 · France: the SARL and the SAS",
      section: "Section 3 · France, Japan, and the Nordics",
      body: `France gives us a clean lesson in how **two forms with the same liability wall** can feel like opposite businesses, because they answer **ownership and governance** so differently. The two are the **SARL** and the **SAS**, and the contrast between them is the point.

## The SARL: the rigid, close-held form

**SARL** stands for **Société à responsabilité limitée**, a "company with limited liability." It is the traditional French small-business form. Against the four decisions:

- **Liability: limited.** A separate legal person with a wall; owners are **associés** (members).
- **Taxation: entity-level** by default, though French law offers some options this course will not detail (they are tax specifics that change).
- **Ownership and transfer: parts sociales, closely held.** Ownership is divided into **parts sociales** (company shares that are not freely tradeable), and transfer to outsiders is typically restricted, often needing the other members' approval. This keeps ownership among known people.
- **Governance: a gérant.** The company is managed by one or more **gérants** (managers), and much of how it runs is **set by statute**, leaving founders less room to customise.

**The SARL is the rigid one:** limited liability with a fairly fixed, statute-defined internal structure. Read against the US menu, it sits near a closely held corporation or a member-managed limited company.

## The SAS: the flexible, contract-driven form

**SAS** stands for **Société par actions simplifiée**, a "simplified joint-stock company," and it has become enormously popular in France, especially for startups and for subsidiaries of larger groups. Against the four decisions:

- **Liability: limited**, the same wall as the SARL.
- **Taxation: entity-level** by default, again with options left to a professional.
- **Ownership and transfer: actions (shares).** Unlike the SARL's parts sociales, the SAS issues **actions**, and its structure is friendlier to bringing in investors, which is one reason startups favour it. But note the limit: an SAS **cannot offer its shares to the public**; the traditional public, listable form is the **SA (société anonyme)**, France's classic stock corporation.
- **Governance: this is the headline.** The SAS gives founders **broad freedom to design governance in the bylaws** (the **statuts**). Where the SARL is largely fixed by statute, the SAS lets the owners write their own rules for who decides what, subject to a few required roles such as a president. That contractual freedom is the SAS's whole appeal.

## The lesson: same wall, opposite feel

Put them side by side and the four decisions do their job:

| Decision | SARL | SAS |
|---|---|---|
| **Liability** | Limited | Limited |
| **Taxation** | Entity-level by default | Entity-level by default |
| **Ownership** | Parts sociales, restricted | Actions, investor-friendly, not public |
| **Governance** | Largely fixed by statute | Freely designed in the bylaws |

**They share liability and (by default) taxation and diverge on ownership and governance**, which is the same move you saw with the US LLC versus C-corp: hold two columns steady, move the other two, get two different forms. The SAS's freedom-of-contract governance even rhymes with the US LLC's operating agreement, but the SAS is a share-issuing company, so the resemblance is a rhyme, not a translation.

**Reading these on sight:** an "SARL" is the rigid, close-held French limited company (parts sociales, a gérant, statute-set rules); an "SAS" is the flexible joint-stock company startups love (actions, bylaws you design, but no public offering). If you see a French company that raised venture money, it is very often an SAS, and if you see a listed French giant, it is very often an SA. And the rule holds: reading these is not advising anyone to form one in France, which is a job for a French professional.

## Sources
- Service-Public.fr. (n.d.). *Entreprises: création et gestion*. https://www.service-public.fr/
- Organisation for Economic Co-operation and Development. (n.d.). *Corporate governance*. https://www.oecd.org/corporate/`,
      recallContent: [
        {
          prompt: "What is Mitbestimmung, and where does it seat worker representatives?",
          answer: "Co-determination: mandatory worker representation on the supervisory boards of large German companies. Employee representatives are voting members of the supervisory board (Aufsichtsrat), the board that appoints and oversees the managers.",
        },
        {
          prompt: "In general terms, how much board representation does German co-determination give?",
          answer: "It scales with size: smaller firms none, mid-sized firms roughly one-third of the supervisory-board seats, and the largest firms up to about half. The exact employee-count thresholds are set by statute and are not stated here.",
        },
        {
          prompt: "Why is near-parity co-determination usually not full worker control?",
          answer: "Even when employees hold close to half the seats, the shareholder-side board chair typically has a casting vote to break deadlock, so workers have a powerful, legally guaranteed voice but not a controlling majority.",
        },
        {
          prompt: "How does the US answer on workers and boards differ from Germany's?",
          answer: "US law requires no worker seats on company boards; labour's voice comes, if at all, through unions and collective bargaining outside the boardroom. Germany reserves board seats for workers by law, putting labour inside the room where managers are overseen.",
        },
      ],
    },
    {
      slug: "fbf-japan-kk",
      title: "10 · Japan: the kabushiki kaisha",
      section: "Section 3 · France, Japan, and the Nordics",
      body: `Japan's central business form is the **kabushiki kaisha**, abbreviated **KK**, and reading it teaches a useful lesson: sometimes a foreign form maps cleanly onto a US one, and the interesting details are in the **history** and the **surrounding menu** rather than in the four decisions themselves.

## The kabushiki kaisha (KK): the standard stock company

**Kabushiki kaisha** translates as **stock company**, and it is the standard, prestigious Japanese corporate form, the one most established Japanese companies use, from the corner firm to the global giant. Against the four decisions:

- **Liability: limited.** A separate legal person with a wall; owners hold shares.
- **Taxation: entity-level.** The company is its own taxpayer. This course names no rate.
- **Ownership and transfer: shares.** Ownership is in shares (**kabushiki**), and a KK can range from a small, closely held company to a large, publicly listed one, depending on how its shares are held and whether transfer is restricted.
- **Governance: directors, and often a board.** Shareholders elect directors; larger companies have a board and, traditionally, statutory auditors overseeing management. The details of the governance structure have several statutory options, which this course leaves to a professional.

**Read against the US menu, the KK maps fairly cleanly onto a corporation:** shares, limited liability, director-led governance, able to be private or public. When a US reader meets "Kabushiki Kaisha" or the short form "K.K." after a company name, "Japanese corporation" is a reasonable first read.

## The history that reframes the form: capital is a policy choice too

Here is the detail worth carrying, and it echoes the LLC lesson from courses 1 and 2. For a long time, Japan set a **minimum-capital barrier** to forming a company, which kept many would-be founders out. In a company-law reform in the **mid-2000s**, Japan **removed that minimum-capital barrier** and reorganised its company forms, making it far easier to start a company with very little capital. This course states that **conceptually** and names **no figure**, because the specific amounts are values it will not assert.

**Why this matters:** it is another proof of the course's central claim. Whether it takes a pile of capital to form a company is **not a law of nature**; it is a policy dial a country can turn, and Japan turned it. The same reform also introduced a new **LLC-like form**, the **godo kaisha (GK)**, modelled on the American LLC, giving Japan a flexible, member-run alternative to the share-based KK. So Japan's menu, like every menu in this course, is a set of recent, revisable choices, not an eternal given.

**Reading these on sight:** "KK" or "Kabushiki Kaisha" is the standard Japanese stock corporation (shares, wall, directors, private or public); "GK" or "Godo Kaisha" is the newer LLC-style form. The clean part is that the KK reads like a corporation; the instructive part is that Japan's minimum-capital rule was a choice it changed. And, as ever, this is reading, not advice; a real Japanese venture takes advice in Japan.

## Sources
- Japan External Trade Organization. (n.d.). *Setting up business in Japan*. https://www.jetro.go.jp/en/invest/setting_up/
- Organisation for Economic Co-operation and Development. (n.d.). *Corporate governance*. https://www.oecd.org/corporate/`,
      recallContent: [
        {
          prompt: "How do the SARL and the SAS answer the four decisions, and where do they differ?",
          answer: "Both are limited-liability French companies taxed at entity level by default (the same first two answers). They differ on ownership (the SARL uses restricted parts sociales; the SAS issues actions and is investor-friendly but cannot offer shares publicly) and governance (the SARL is largely fixed by statute; the SAS is freely designed in the bylaws).",
        },
        {
          prompt: "Which French form do startups favour, and why?",
          answer: "The SAS (societe par actions simplifiee). Its appeal is broad freedom to design governance in the bylaws and a share structure friendly to bringing in investors, though it still cannot offer shares to the public.",
        },
        {
          prompt: "Which French form is the traditional public, listable one?",
          answer: "The SA (societe anonyme), France's classic stock corporation. The SAS, by contrast, cannot offer its shares to the public.",
        },
        {
          prompt: "How does the SARL-versus-SAS contrast rhyme with a US comparison?",
          answer: "It is the same move as the US LLC versus C-corp: hold liability and default taxation steady, move ownership and governance, and you get two different forms. The SAS's freedom-of-contract governance even rhymes with the US LLC's operating agreement, though the SAS is a share-issuing company.",
        },
      ],
    },
    {
      slug: "fbf-nordic-coops",
      title: "11 · The Nordic co-op density",
      section: "Section 3 · France, Japan, and the Nordics",
      body: `The Nordic lesson is not about a single exotic form. It is about **how common a familiar form is**, and that difference of degree turns out to be a difference of kind. The form is the **cooperative**, and in the Nordic countries (Denmark, Sweden, Norway, Finland, and Iceland) it is not a niche curiosity. It is a **mainstream, mass-membership institution** that ordinary people belong to without thinking of themselves as activists.

## A one-lesson recap of what a cooperative is

Course 3 in this path covers cooperatives in depth; here is the reading you need. A **cooperative** is a business **owned by the people who use it** (its members), and its signature answer to the governance decision is **one member, one vote**, regardless of how much money each member put in. That single choice, people control rather than capital control, is what separates a co-op from an ordinary corporation, and it is pure **decision four (governance)**.

- **Consumer co-ops** are owned by their customers.
- **Producer co-ops** (famously, farmers) are owned by the suppliers who sell through them.
- Either way, the members own it and each gets one vote.

## What "density" means, and why it is the whole point

"Co-op density" means: **what share of ordinary economic life runs through cooperatives.** In the United States, most people belong to a co-op or two (a credit union, a rural electric co-op) often without knowing it, and the form reads as marginal. In the Nordics, the density is far higher and the form is **visible and normal**:

- **Consumer cooperatives** run a large share of grocery and retail. In Finland, for example, the consumer co-op sector (the S Group, a network of cooperatives) has **millions of member-owners** in a country of only a few million people, so a very large share of households are literally co-owners of the shops they buy from.
- **Farmer-owned cooperatives** dominate parts of agriculture. Nordic dairy is a classic case: large dairy businesses (for instance, Arla Foods) are **cooperatives owned by the farmers** who supply the milk, a direct descendant of the Danish agricultural cooperative movement that reorganised farming generations ago.
- **Cooperative banks and housing cooperatives** are likewise ordinary, mainstream ways to bank and to own a home.

The course keeps the membership numbers **general** ("millions of members," "a large share of households") rather than asserting precise counts, but the shape is well established: **the same one-member-one-vote form the US treats as a curiosity is, in the Nordics, a normal way to shop, farm, bank, and house yourself.**

## Why this belongs in a course about foreign forms

Because it is the clearest proof that **a form's importance is itself a policy and cultural choice, not a property of the form.** The cooperative exists in US law too; Americans simply built their economy so that it stays at the margins, while the Nordic countries built theirs so that it sits in the middle. Nobody outlawed the US co-op and nobody mandated the Nordic one. Over generations, through law, culture, and habit, the two societies gave the same form very different weight, and that is exactly the kind of consequential choice this course exists to make visible.

**Reading this on sight:** when you meet a Nordic grocery chain, dairy giant, or bank and find it is owned by its **members** and run **one member, one vote**, you are seeing co-op density in action, the same form the US menu keeps in the corner placed at the centre. And the through-line to course 3 is direct: the co-op you will study there is not a museum piece; somewhere, it is how the economy mainly runs. As always, this is understanding a choice, not advising anyone to make it.

## Sources
- International Cooperative Alliance. (n.d.). *Facts and figures*. https://www.ica.coop/en/cooperatives/facts-and-figures
- Organisation for Economic Co-operation and Development. (n.d.). *Co-operatives*. https://www.oecd.org/`,
      recallContent: [
        {
          prompt: "How does the kabushiki kaisha (KK) answer the four decisions?",
          answer: "Liability: limited (a separate person with a wall). Taxation: entity-level. Ownership and transfer: shares (kabushiki), and it can be closely held or publicly listed. Governance: shareholders elect directors, with a board and traditionally statutory auditors in larger firms. It maps fairly cleanly onto a corporation.",
        },
        {
          prompt: "What did Japan's mid-2000s company-law reform change about capital, and why does it matter?",
          answer: "It removed the old minimum-capital barrier to forming a company, making it far easier to start with little capital. It matters because it proves that requiring a pile of capital to form a company is a policy dial a country can turn, not a law of nature.",
        },
        {
          prompt: "What LLC-like form did Japan's reform introduce?",
          answer: "The godo kaisha (GK), modelled on the American LLC: a flexible, member-run alternative to the share-based kabushiki kaisha.",
        },
        {
          prompt: "When a US reader sees 'K.K.' after a company name, what is a reasonable first read?",
          answer: "'Japanese corporation.' The KK maps fairly cleanly onto a US corporation: shares, limited liability, director-led governance, and it can be private or public.",
        },
      ],
    },
    {
      slug: "fbf-quiz-france-japan-nordics",
      title: "12 · Quiz: France, Japan, and the Nordics",
      section: "Section 3 · France, Japan, and the Nordics",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "The French SARL is best described as the:",
            options: [
              "public giant",
              "rigid small form",
              "state holding",
              "worker council",
            ],
            correctIndex: 1,
            explanation: "The SARL is the traditional close-held French limited company: parts sociales, a gerant, and an internal structure largely fixed by statute.",
            sourceLessonSlug: "fbf-france",
          },
          {
            prompt: "The SARL and the SAS share the same answer on:",
            options: [
              "the liability",
              "the governance",
              "the share type",
              "public listing",
            ],
            correctIndex: 0,
            explanation: "Both are limited-liability companies; they diverge on ownership (parts sociales versus actions) and governance (statute-fixed versus freely designed).",
            sourceLessonSlug: "fbf-france",
          },
          {
            prompt: "The SAS's main appeal to startups is its freedom to design:",
            options: [
              "its own tax rate",
              "a public offering",
              "its governance",
              "a state subsidy",
            ],
            correctIndex: 2,
            explanation: "An SAS lets founders write their own governance rules in the bylaws (the statuts), where the SARL is largely fixed by statute.",
            sourceLessonSlug: "fbf-france",
          },
          {
            prompt: "Unlike France's SA, an SAS cannot:",
            options: [
              "issue any shares",
              "have a president",
              "limit liability",
              "offer shares publicly",
            ],
            correctIndex: 3,
            explanation: "The SAS issues shares (actions) but cannot offer them to the public; the SA (societe anonyme) is the traditional listable form.",
            sourceLessonSlug: "fbf-france",
          },
          {
            prompt: "Japan's kabushiki kaisha (KK) maps most cleanly onto a US:",
            options: [
              "sole proprietor",
              "corporation",
              "general partner",
              "tax election",
            ],
            correctIndex: 1,
            explanation: "The KK is the standard stock company: shares, limited liability, director-led governance, and it can be private or public.",
            sourceLessonSlug: "fbf-japan-kk",
          },
          {
            prompt: "Japan's mid-2000s reform notably removed the old barrier of:",
            options: [
              "minimum capital",
              "foreign workers",
              "any income tax",
              "a share market",
            ],
            correctIndex: 0,
            explanation: "It removed the minimum-capital requirement, making it far easier to start a company, and proving capital rules are a policy dial a country can turn.",
            sourceLessonSlug: "fbf-japan-kk",
          },
          {
            prompt: "The LLC-like form Japan's reform introduced is the:",
            options: [
              "godo kaisha",
              "kabushiki kaisha",
              "societe anonyme",
              "community company",
            ],
            correctIndex: 0,
            explanation: "The godo kaisha (GK) is modelled on the US LLC: a flexible, member-run alternative to the share-based KK.",
            sourceLessonSlug: "fbf-japan-kk",
          },
          {
            prompt: "The signature governance rule of a cooperative is:",
            options: [
              "one share, one vote",
              "one member, one vote",
              "the state decides",
              "the board decides",
            ],
            correctIndex: 1,
            explanation: "A co-op is owned by the people who use it and votes one member, one vote, so people control rather than capital control. That is decision four.",
            sourceLessonSlug: "fbf-nordic-coops",
          },
          {
            prompt: "'Co-op density' measures how much economic life runs through:",
            options: [
              "state agencies",
              "foreign banks",
              "cooperatives",
              "family trusts",
            ],
            correctIndex: 2,
            explanation: "Density is the share of ordinary shopping, farming, banking, and housing that runs through member-owned cooperatives.",
            sourceLessonSlug: "fbf-nordic-coops",
          },
          {
            prompt: "In the Nordics, the cooperative is best described as:",
            options: [
              "banned by law",
              "a state monopoly",
              "a rare oddity",
              "mainstream",
            ],
            correctIndex: 3,
            explanation: "Consumer, farmer, banking, and housing co-ops are ordinary, mass-membership institutions, where the US keeps the same form at the margins.",
            sourceLessonSlug: "fbf-nordic-coops",
          },
          {
            prompt: "A large Nordic dairy such as Arla Foods is owned by its:",
            options: [
              "farmers",
              "customers",
              "state fund",
              "founders",
            ],
            correctIndex: 0,
            explanation: "Nordic dairy is a classic producer co-op: the business is owned by the farmers who supply the milk, descended from the Danish cooperative movement.",
            sourceLessonSlug: "fbf-nordic-coops",
          },
          {
            prompt: "Finland's S Group shows co-op density because it has millions of:",
            options: [
              "state auditors",
              "listed shares",
              "member-owners",
              "paid lobbyists",
            ],
            correctIndex: 2,
            explanation: "The consumer co-op sector has millions of member-owners in a small country, so a very large share of households co-own the shops they buy from.",
            sourceLessonSlug: "fbf-nordic-coops",
          },
          {
            prompt: "The Nordic lesson proves that a form's importance is itself a:",
            options: [
              "law of nature",
              "tax accident",
              "language quirk",
              "policy choice",
            ],
            correctIndex: 3,
            explanation: "The co-op exists in US law too; the two societies simply gave the same form very different weight through law, culture, and habit.",
            sourceLessonSlug: "fbf-nordic-coops",
          },
          {
            prompt: "One member, one vote means a co-op is controlled by:",
            options: [
              "the biggest investor",
              "the people, not capital",
              "the largest lender",
              "the oldest member",
            ],
            correctIndex: 1,
            explanation: "Each member gets one vote regardless of money put in, so people control rather than capital, the line that separates a co-op from a corporation.",
            sourceLessonSlug: "fbf-nordic-coops",
          },
          {
            prompt: "A French company that raised venture money is very often an:",
            options: [
              "SARL",
              "SA",
              "SAS",
              "AG",
            ],
            correctIndex: 2,
            explanation: "The SAS's flexible, investor-friendly structure makes it the common choice for French startups, though it still cannot offer shares publicly.",
            sourceLessonSlug: "fbf-france",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 4 · China and India
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "fbf-china-soe",
      title: "13 · China: the state-owned enterprise",
      section: "Section 4 · China and India",
      body: `China forces the four decisions to stretch, because it answers two of them, **ownership** and **governance**, in ways the US menu has no room for. This lesson takes the first surprise: a large share of the Chinese economy is owned by the **state**, and the governing power inside many Chinese companies runs through channels a US reader would not expect.

## The state-owned enterprise (SOE)

A **state-owned enterprise**, or **SOE**, is a business the **state owns and controls.** China has many, and the largest ones matter enormously to its economy. Many are organised as companies under China's company law, so they have a corporate shell, but the crucial reading is in ownership and governance:

- **Liability: generally limited**, in the sense that the SOE is usually a company with its own legal personality.
- **Taxation: entity-level**, as a company. This course names no rate.
- **Ownership and transfer: the state is the owner.** For large central SOEs, state ownership is exercised through a government body (the State-owned Assets Supervision and Administration Commission, **SASAC**, at the central level, with local counterparts). Ownership does not sit with private shareholders in the way a US reader assumes; the ultimate owner is the state.
- **Governance: this is the second surprise.** Beyond the ordinary corporate organs, the **Chinese Communist Party has a formal, institutional role in the governance of many Chinese firms**, including SOEs, typically through an internal Party organisation or committee within the company. This is a well-documented feature of the Chinese corporate landscape, and it means the lines of real decision-making can run outside the org chart a Western reader would draw.

## Why this breaks the US template

Run the US template over an SOE and two columns simply do not fit:

| Decision | US default read | Chinese SOE |
|---|---|---|
| **Ownership** | Private shareholders | The state, via a government body |
| **Governance** | Shareholders to board to officers | Corporate organs plus a formal Party role |

**The state as the ultimate owner of major businesses**, and **an institutional Party role inside corporate governance**, are answers to the ownership and governance decisions that the American menu has no slot for. This is not a criticism dressed as a lesson; it is the course's method applied honestly. When you read a Chinese SOE, you must widen decisions three and four to include an owner (the state) and a decider (the Party organisation) that a US form would never list.

## Keeping it accurate, and keeping it humble

Two honesty notes, because this is a subject where confident foreign summaries go wrong:

- **China's system is large and varied.** There are central SOEs and local SOEs, wholly state-owned firms and mixed-ownership firms where the state and private investors both hold stakes, and the balance between them has shifted over time through policy. The course teaches the **shape** (state ownership is major; the Party has a governance role) and leaves the specifics, which change with policy, to specialists.
- **This is description, not endorsement or condemnation.** The point is to read the form as it is, using the four decisions widened to fit, exactly as the course would read any other.

**Reading this on sight:** a major Chinese enterprise whose ultimate owner is a state body, and inside which a Party organisation has a formal governance role, is a state-owned enterprise, an answer to "who owns it" and "who decides" that the US menu cannot express. The next lesson takes China's second invention, the one built precisely because **foreign** owners are kept out of certain sectors. And the rule stands: this is reading a system, not advice about operating in it, which is work for professionals in that jurisdiction.

## Sources
- Organisation for Economic Co-operation and Development. (n.d.). *State-owned enterprises*. https://www.oecd.org/corporate/
- State-owned Assets Supervision and Administration Commission of the State Council. (n.d.). *Home*. http://en.sasac.gov.cn/`,
      recallContent: [
        {
          prompt: "What is a cooperative's signature answer to the governance decision, and what does it separate?",
          answer: "One member, one vote, regardless of how much money each member put in. It separates a cooperative (people control) from an ordinary corporation (capital control, one share one vote).",
        },
        {
          prompt: "What does 'co-op density' mean, and how do the US and the Nordics compare?",
          answer: "Density is the share of ordinary economic life that runs through cooperatives. In the US most people belong to a co-op or two without noticing, and the form reads as marginal; in the Nordics, consumer, farmer, banking, and housing co-ops are mainstream, mass-membership institutions.",
        },
        {
          prompt: "Give two Nordic examples of everyday cooperative ownership.",
          answer: "Consumer co-ops running much of grocery retail (for example Finland's S Group, with millions of member-owners), and farmer-owned dairy cooperatives (for example Arla Foods, owned by the farmers who supply the milk). Cooperative banks and housing co-ops are likewise mainstream.",
        },
        {
          prompt: "Why does the Nordic case prove a form's importance is a policy choice?",
          answer: "The cooperative exists in US law too; nobody outlawed the US co-op or mandated the Nordic one. Over generations, through law, culture, and habit, the two societies gave the same form very different weight, so its importance is a choice, not a property of the form.",
        },
      ],
    },
    {
      slug: "fbf-china-vie",
      title: "14 · China: the VIE structure",
      section: "Section 4 · China and India",
      body: `This is the most conceptually demanding form in the course, and the one where teaching **the uncertainty** matters most. The **VIE structure** is not an entity type. It is a **workaround built out of contracts**, created to do something Chinese law makes hard: let **foreign** investors put money into, and profit from, Chinese businesses in sectors where **foreign ownership is restricted.**

## The problem the VIE was invented to solve

China restricts or prohibits foreign ownership in certain sectors (internet and technology services, media, and education have been prominent examples). At the same time, many Chinese companies in exactly those sectors wanted to raise money from foreign investors and to **list on foreign stock exchanges** (often in the US). Direct foreign ownership was blocked. So, following the course's through-line, when the ordinary path is closed, **someone invents a structure to approximate it.** That structure is the VIE.

## What a VIE actually is: control by contract, not by ownership

**VIE** stands for **variable interest entity**, a term that comes from accounting. The structure works, in concept, like this:

- A **foreign-listed holding company** is set up **outside** China (very often in the Cayman Islands). Foreign investors buy shares in **this** company.
- The actual Chinese operating business (the one holding the restricted licences) is a **separate Chinese company**, owned on paper by Chinese individuals, not by the foreign holding company.
- The two are tied together by a **web of contracts**: service and management agreements, loan agreements, equity-pledge agreements, and powers of attorney. Through these contracts, the offshore holding company is meant to capture the **economic benefits** of the Chinese business and exert **control** over it, **without formally owning its equity.**

**So the foreign investor owns shares in an offshore company that has contractual claims on a Chinese business it does not legally own.** The ownership decision has been answered with a stack of contracts standing in for equity. That is why the VIE is **not an entity type**: it is a **contractual arrangement layered on top of two real companies.** Calling the VIE "a kind of Chinese company" is a category error; it is a structure, not a form.

## The uncertainty, taught rather than resolved

This is the part to hold honestly, because it is genuinely unsettled:

- **The VIE's legal standing has long been debated.** The structure was designed to sit **around** foreign-ownership rules rather than under an explicit approval, and it has generally **not** enjoyed a clear, comprehensive blessing in Chinese law. Whether the contracts would be fully enforceable, and whether regulators might one day treat the structure as evading the restrictions, has been an open question for years.
- **Regulators on both sides have flagged the risk.** Chinese authorities have at times tightened scrutiny of these structures and of overseas listings; and in the United States, the Securities and Exchange Commission has publicly **warned investors** that when they buy such a company, they are often buying a shell with **contractual** claims rather than ownership of the underlying Chinese business, and that this carries real, distinctive risk.
- **The honest summary:** the VIE is widely **used** (many well-known US-listed Chinese companies have relied on it) and simultaneously **legally uncertain.** Both are true at once, and a responsible course says so rather than declaring it simply legal or simply illegal.

**Reading this on sight:** if a China-based company is listed abroad in a sector where foreign ownership is restricted, and foreign investors hold shares in an offshore holding company linked to the Chinese business by contracts rather than by equity, you are looking at a VIE structure, a contractual workaround, not an entity, whose legality is contested. This is the course's central move in its most vivid form: a blocked ownership path answered by invention, read cleanly with the four decisions, and reported with its uncertainty intact. And the not-advice rule is at maximum volume: whether such a structure is sound or lawful for any real investment is a question for professionals and regulators, not for this course.

## Sources
- U.S. Securities and Exchange Commission. (2021). *Statement on investor protection related to recent developments in China*. https://www.sec.gov/
- U.S. Securities and Exchange Commission. (n.d.). *Investor.gov: International investing*. https://www.investor.gov/`,
      recallContent: [
        {
          prompt: "How does a Chinese state-owned enterprise stretch the ownership and governance decisions?",
          answer: "Ownership: the ultimate owner is the state, exercised through a government body (SASAC at the central level) rather than private shareholders. Governance: beyond the ordinary corporate organs, the Communist Party has a formal, institutional role in many firms, typically through an internal Party organisation, so real decision-making can run outside the visible org chart.",
        },
        {
          prompt: "Why does a Chinese SOE break the US template for reading a company?",
          answer: "Because two columns do not fit: ownership is the state via a government body rather than private shareholders, and governance includes a formal Party role alongside the corporate organs. The US menu has no slot for either answer.",
        },
        {
          prompt: "What two honesty notes does the SOE lesson attach?",
          answer: "First, China's system is large and varied (central and local SOEs, wholly state-owned and mixed-ownership firms, with the balance shifting through policy), so the course teaches the shape and leaves specifics to specialists. Second, it is description, not endorsement or condemnation.",
        },
        {
          prompt: "Where is the SOE's ultimate ownership exercised, at the central level?",
          answer: "Through the State-owned Assets Supervision and Administration Commission (SASAC) at the central level, with local counterparts for local SOEs. The state, not private shareholders, is the ultimate owner.",
        },
      ],
    },
    {
      slug: "fbf-india",
      title: "15 · India: the private limited and the Section 8 company",
      section: "Section 4 · China and India",
      body: `India closes the tour with two forms that show a comforting pattern after China's surprises: the same four decisions, answered in ways that map recognisably onto the US menu, under an English-language company law a US reader can partly follow. India's company forms live under its **Companies Act**, administered by the **Ministry of Corporate Affairs**, which is the public primary source.

## The private limited company: India's workhorse

A **private limited company** is the standard form for a serious Indian small or medium business. Against the four decisions:

- **Liability: limited.** A separate legal person with a wall; owners are shareholders.
- **Taxation: entity-level.** The company is its own taxpayer. This course names no rate.
- **Ownership and transfer: shares, closely held.** A private limited company **restricts the transfer of its shares**, **caps the number of members**, and **cannot invite the general public to subscribe** for its shares. Ownership stays among known people.
- **Governance: directors.** Shareholders own it; a board of directors runs it, subject to the Companies Act's requirements.

**Read against the US menu, the Indian private limited company sits close to a privately held US corporation:** wall, shares that do not trade publicly, board-run. (India's menu also includes a **public limited company** that can list, a **one person company** for solo founders, and a **limited liability partnership** adopted in the late 2000s; the private limited is the most common, so it anchors the lesson.)

## The Section 8 company: a not-for-profit built as a company

Now India's instructive form. A **Section 8 company** is a **not-for-profit organised as a company**, named after the section of India's Companies Act that creates it. It is formed to promote purposes such as commerce, art, science, education, research, sports, social welfare, religion, or charity. Against the four decisions:

- **Liability: limited**, like any company.
- **Taxation: entity-level** as a company, though not-for-profits may qualify for specific tax treatment this course leaves to a professional.
- **Ownership and transfer: members, but constrained.** It has members, but it carries a **non-distribution constraint**: it must **apply its profits (and any other income) to promoting its objects** and is **prohibited from paying dividends to its members.** Surplus goes back into the mission, not out to owners.
- **Governance: a board**, directing the organisation toward its stated charitable objects.

**Here is the pattern worth seeing.** The Section 8 company is India's answer to the same question the US answers with the **nonprofit corporation** from course 2: how do you build a mission-driven organisation with a corporate wall but no owners taking profit? Both answer with a **company that cannot distribute profit to members.** The names differ ("Section 8 company" in India, "nonprofit corporation" plus a 501(c) tax status in the US), and the tax mechanics differ, but the **core move, an owner-less, non-distributing company devoted to a purpose, recurs across both menus.** That recurrence is itself a finding: some answers to the four decisions are common enough to appear worldwide under different names.

**Reading these on sight:** an Indian "private limited" company is a close-held corporation (wall, shares not public, board-run); a "Section 8" company is a not-for-profit company that cannot pay profits out to members, India's cousin of the US nonprofit corporation. If the private limited felt familiar and the Section 8 company felt like the nonprofit lesson in a new language, that is the point: after a course of divergences, India shows how much also **converges.** And the rule holds to the end: this is reading India's forms, not advising anyone to use one, which is a job for an Indian professional.

## Sources
- Ministry of Corporate Affairs, Government of India. (n.d.). *Home*. https://www.mca.gov.in/
- Organisation for Economic Co-operation and Development. (n.d.). *Corporate governance*. https://www.oecd.org/corporate/`,
      recallContent: [
        {
          prompt: "What is a VIE structure, and why is it not an entity type?",
          answer: "A variable interest entity structure: a contractual workaround. A foreign-listed holding company (often in the Cayman Islands) is tied by a web of contracts to a separate Chinese operating company it does not legally own, capturing the economic benefits and control without owning the equity. It is a contractual arrangement layered on two real companies, not a form, so calling it 'a kind of Chinese company' is a category error.",
        },
        {
          prompt: "What problem was the VIE structure invented to solve?",
          answer: "China restricts foreign ownership in certain sectors (internet, media, education), yet Chinese companies in those sectors wanted foreign investment and foreign stock-exchange listings. With direct foreign ownership blocked, the VIE was invented to approximate it through contracts.",
        },
        {
          prompt: "Why does the course teach the VIE's uncertainty rather than resolving it?",
          answer: "Because its legal standing is genuinely unsettled: it was built around foreign-ownership rules without a clear, comprehensive blessing in Chinese law, its contracts' enforceability is debated, and regulators on both sides have flagged the risk. It is widely used and legally uncertain at once, so the honest course reports both rather than declaring it simply legal or illegal.",
        },
        {
          prompt: "What does a foreign investor in a VIE actually own?",
          answer: "Shares in an offshore holding company that has contractual claims on a Chinese business it does not legally own, rather than ownership of the underlying Chinese company. The ownership decision has been answered with a stack of contracts standing in for equity.",
        },
      ],
    },
    {
      slug: "fbf-quiz-china-india",
      title: "16 · Quiz: China and India",
      section: "Section 4 · China and India",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "A Chinese state-owned enterprise is ultimately owned by the:",
            options: [
              "public market",
              "founding family",
              "state",
              "labour union",
            ],
            correctIndex: 2,
            explanation: "For large central SOEs, state ownership is exercised through a government body (SASAC), not by private shareholders.",
            sourceLessonSlug: "fbf-china-soe",
          },
          {
            prompt: "Inside many Chinese firms, a distinctive governance feature is a formal role for the:",
            options: [
              "Communist Party",
              "foreign auditor",
              "stock exchange",
              "customer council",
            ],
            correctIndex: 0,
            explanation: "The Party typically has an institutional role through an internal organisation, so real decision-making can run outside the visible corporate org chart.",
            sourceLessonSlug: "fbf-china-soe",
          },
          {
            prompt: "A Chinese SOE breaks the US template on which two decisions?",
            options: [
              "tax and liability",
              "ownership and governance",
              "liability and transfer",
              "tax and governance",
            ],
            correctIndex: 1,
            explanation: "The state as ultimate owner and a formal Party governance role are answers the US menu has no slot for.",
            sourceLessonSlug: "fbf-china-soe",
          },
          {
            prompt: "The SOE lesson insists its account is description, and not:",
            options: [
              "at all accurate",
              "based on sources",
              "about ownership",
              "praise or blame",
            ],
            correctIndex: 3,
            explanation: "The point is to read the form as it is with the four decisions widened to fit, neither endorsing nor condemning it.",
            sourceLessonSlug: "fbf-china-soe",
          },
          {
            prompt: "The VIE structure is best described as a:",
            options: [
              "kind of entity",
              "state agency",
              "contractual workaround",
              "public charity",
            ],
            correctIndex: 2,
            explanation: "It is a structure built from contracts, not an entity type. Calling it 'a kind of Chinese company' is a category error.",
            sourceLessonSlug: "fbf-china-vie",
          },
          {
            prompt: "The VIE was invented to let foreign investors reach sectors where China restricts:",
            options: [
              "foreign ownership",
              "any local hiring",
              "all stock trading",
              "small businesses",
            ],
            correctIndex: 0,
            explanation: "Foreign ownership is restricted in sectors like internet, media, and education, so the VIE approximates foreign investment through contracts.",
            sourceLessonSlug: "fbf-china-vie",
          },
          {
            prompt: "In a VIE, a foreign investor actually owns shares in a holding company located:",
            options: [
              "inside China",
              "at the exchange",
              "in a state fund",
              "outside China",
            ],
            correctIndex: 3,
            explanation: "The listed holding company sits outside China (often the Cayman Islands) and is tied to the Chinese operating business by contracts, not equity.",
            sourceLessonSlug: "fbf-china-vie",
          },
          {
            prompt: "On the VIE's legality, the honest teaching is that it is:",
            options: [
              "clearly legal",
              "plainly illegal",
              "legally uncertain",
              "never actually used",
            ],
            correctIndex: 2,
            explanation: "It is widely used yet legally unsettled, lacking a clear comprehensive blessing in Chinese law, so the course teaches the uncertainty rather than faking a verdict.",
            sourceLessonSlug: "fbf-china-vie",
          },
          {
            prompt: "The US SEC has warned that a VIE investor may be buying mostly:",
            options: [
              "voting control",
              "contractual claims",
              "hard state bonds",
              "direct equity",
            ],
            correctIndex: 1,
            explanation: "Investors often hold a shell with contractual claims rather than ownership of the underlying Chinese business, a real and distinctive risk.",
            sourceLessonSlug: "fbf-china-vie",
          },
          {
            prompt: "India's most common form for a serious small business is the:",
            options: [
              "private limited",
              "Section 8 company",
              "one person company",
              "state enterprise",
            ],
            correctIndex: 0,
            explanation: "The private limited company is India's workhorse: a wall, closely held shares that cannot be offered to the public, run by a board.",
            sourceLessonSlug: "fbf-india",
          },
          {
            prompt: "An Indian private limited company cannot:",
            options: [
              "appoint a board",
              "invite public buyers",
              "limit its liability",
              "issue any shares",
            ],
            correctIndex: 1,
            explanation: "It restricts share transfer, caps its members, and cannot invite the general public to subscribe for shares.",
            sourceLessonSlug: "fbf-india",
          },
          {
            prompt: "A Section 8 company is India's version of a:",
            options: [
              "public listed firm",
              "state-owned firm",
              "not-for-profit",
              "tax election",
            ],
            correctIndex: 2,
            explanation: "It is a not-for-profit organised as a company, named after the section of the Companies Act that creates it.",
            sourceLessonSlug: "fbf-india",
          },
          {
            prompt: "The defining constraint of a Section 8 company is that it cannot:",
            options: [
              "hold any assets",
              "hire any staff",
              "own a building",
              "pay members dividends",
            ],
            correctIndex: 3,
            explanation: "It must apply its profits to its objects and is barred from paying dividends to members, the non-distribution constraint.",
            sourceLessonSlug: "fbf-india",
          },
          {
            prompt: "The Section 8 company maps onto which US idea from course 2?",
            options: [
              "the S election",
              "the nonprofit corporation",
              "the benefit corp",
              "the sole proprietor",
            ],
            correctIndex: 1,
            explanation: "Both build a mission-driven company with a wall but no owners taking profit, the owner-less, non-distributing company recurring under different names.",
            sourceLessonSlug: "fbf-india",
          },
          {
            prompt: "India's overall lesson, after China's surprises, is how much also:",
            options: [
              "converges",
              "stays hidden",
              "is banned",
              "gets taxed",
            ],
            correctIndex: 0,
            explanation: "The private limited feels like a close-held US corporation and the Section 8 company like the nonprofit lesson in a new language, so much converges.",
            sourceLessonSlug: "fbf-india",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 5 · The capstone  (match a foreign form to a US form, and name what does not translate)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "fbf-capstone",
      title: "17 · Capstone: match a foreign form, and name what does not translate",
      section: "Section 5 · Match a foreign form and name what does not translate",
      lessonType: "assignment",
      body: `You have carried the four decisions across seven countries and watched them place forms in languages you may not read. This capstone asks you to **use** the method in both directions: to match a foreign form to its nearest US form, and, just as important, to name honestly what **does not translate.** It is not advice about doing business anywhere.

## The assignment

Pick **one foreign form** below (or another from this course). In **700 to 1,100 words**, do three things: **match it to its nearest US form using the four decisions**, **name what does not translate**, and **defend both claims** with the reading method the course trained. The deliverable is an argument, not a recommendation to a real person.

**Read this line twice, because it is the point of the assignment and the rule of the course:** you are not giving legal or tax advice, and you must say so in your piece. You are demonstrating that you can *read a foreign form with the four decisions*. A real version of this analysis, for a real business, goes to a professional who practises in that country, and your piece should say so in as many words.

## The forms to choose from

1. **The German AG with co-determination.** A public stock corporation with a two-tier board and workers seated on the supervisory board by law.
2. **The UK community interest company.** A limited company for social enterprise, with a community-interest test and an asset lock.
3. **The French SAS.** A flexible joint-stock company whose governance is designed in the bylaws, popular with startups.
4. **The Indian Section 8 company.** A not-for-profit organised as a company, barred from paying dividends to members.
5. **The Chinese VIE structure.** A contractual arrangement linking a foreign-listed offshore holding company to a restricted Chinese business.

## What your piece must contain

**1. Name the form and your nearest US match, up front.** One or two sentences: the foreign form, and the closest US form you are mapping it to. If your honest answer is "there is no clean US match" (which is defensible for some choices), say that up front and explain why.

**2. Match it against all four decisions, one at a time.** A short paragraph each, in order:

| Decision | What your paragraph must answer |
|---|---|
| **Liability** | Is there a separate person with a wall? Does your US match answer liability the same way? |
| **Taxation** | Where does the tax land, in concept? Note where you would confirm the specifics rather than assert them. |
| **Ownership and transfer** | What is a stake called, and can it move? Does your US match share this answer, or diverge? |
| **Governance** | Who decides, and how are votes counted? This is where the sharpest differences usually live. |

**3. Name what does not translate.** This is the heart of the capstone. Identify at least one feature of your foreign form that the US menu has **no equivalent** for, and explain why forcing a match would lose it. Examples the course handed you: Mitbestimmung has no US counterpart; the CIC's asset lock and regulator are not the US benefit corporation; the VIE is not an entity at all; the state-owner-plus-Party governance of a Chinese SOE has no US slot; mainstream co-op density is a cultural choice the US made differently.

**4. Point at the primary source.** Say which official registry or portal you would actually read to confirm the form in its own country (Companies House, the Handelsregister, Service-Public.fr, JETRO, SASAC, the Ministry of Corporate Affairs), because the four decisions are universal but the paperwork is local, and foreign paperwork most of all.

**5. State the limit.** One clear sentence that your piece is an exercise in reading, not legal or tax advice, and that a real decision belongs with a professional who practises in that country.

## Rules you do not get to break

1. **No invented values.** Do not assert a minimum-capital figure, an employee-count threshold, a tax rate, or a statute section from memory. If your argument needs a specific value, write "I would confirm this at [the primary source]" instead of stating a number. This is the course's rule, and it is the professional habit, and it is strictest for foreign law.
2. **Translate the decision, not the word.** Do not lean on "SARL means LLC" style shortcuts. Show the match through the four decisions, and let the answers, not the nickname, carry it.
3. **Name what does not translate, honestly.** A piece that maps a foreign form to a US form and pretends everything fits has missed the course. The untranslatable feature is the finding.
4. **Teach any uncertainty you meet.** If you pick the VIE, you must report that its legality is contested, not resolve it. Where a country's rules genuinely differ or are debated, say so, exactly as the course did.
5. **Where the honest answer is 'it depends on facts I do not have,' say that.** "It depends on the company's size," "I would confirm the co-determination threshold in the German statute," and "a local professional would weigh this" are professional sentences, not evasions.

## What good looks like

A short piece in which someone who has never taken this course could, from your four paragraphs, reconstruct what the foreign form is and how it compares to a US form, in which you never once invent a foreign legal value you would have to look up, and in which the **untranslatable feature is stated plainly rather than smoothed over.** **You are not proving you know every country's law. You are proving you can read a form you have never seen with four questions, and that you know the difference between what maps and what does not, which is the whole course.**

## Sources
- Organisation for Economic Co-operation and Development. (n.d.). *Corporate governance*. https://www.oecd.org/corporate/
- International Cooperative Alliance. (n.d.). *Facts and figures*. https://www.ica.coop/en/cooperatives/facts-and-figures
- U.S. Securities and Exchange Commission. (n.d.). *Investor.gov: International investing*. https://www.investor.gov/`,
    },
  ],
};
