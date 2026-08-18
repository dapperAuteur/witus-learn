// Authored "Surplus Funds Basics" — course #1 of the Asset Recovery series
// (plans/real-estate/00-asset-recovery-series.md, docs/asset-recovery-course-brief.md).
//
// THIS COURSE IS NOT LEGAL ADVICE, and it says so in lesson 1, in the module on the service, and in
// the capstone. It is gated on the legal review BAM agreed to before the business material publishes.
//
// SOURCING DISCIPLINE, which is stricter here than anywhere else in the catalog:
//   * A wrong standard shown to a teacher is embarrassing. A wrong fee cap shown to someone starting
//     an asset-recovery business can put them on the wrong side of a consumer-protection statute and
//     can cost a homeowner money they were legally entitled to. So every state-specific claim is
//     cited to the statute, and figures researched on 2026-08-03 carry that date IN THE LESSON so a
//     reader knows what to re-check.
//   * The transferable skill this course teaches is HOW TO FIND the rule for a jurisdiction, not a
//     national summary table. Summary tables go stale silently; a method does not.
//   * Where research is not yet confirmed against primary text, the lesson says so in the prose
//     rather than presenting it at the same confidence as a verified quote. Two items are marked
//     that way on purpose (Georgia's pay-direct rule and Florida's 120-day tax deed clock).
//   * Tyler v. Hennepin County, 598 U.S. 631 (2023) is the legal spine and is quoted, not
//     paraphrased into something stronger than it held.
//
// THE HOUSE MODEL, decided by BAM 2026-08-02 and load-bearing for the whole course: tell the owner
// what the money is, where it is, and that they can claim it themselves; give them a free PDF with
// the steps; charge only for doing it for them. The research turned that from an ethical preference
// into a structural requirement, because Texas prohibits non-attorney fees outright and Florida
// compels the same disclosure by statute.
//
// NO EARNINGS CLAIMS. The course states plainly that the business is fee-capped, deadline-driven and
// in Texas mostly closed to non-attorneys, and it says out loud that a substantial share of the money
// in this industry is made selling training about the industry. That is the course applying its own
// disclosure standard to itself.

import type { AuthoredCourse } from "./authored-course";

const NOT_LEGAL_ADVICE = `> **This course is not legal advice, and it cannot be.** It is education about a field governed by state statutes, county practice and federal consumer-protection rules, all of which change and none of which this course can apply to your situation. Every figure here was researched on **3 August 2026** and carries that date so you know what to re-check. Before you charge anyone a fee, or contact a homeowner, get a lawyer licensed in the state you intend to work in. The course tells you exactly what to ask them.`;

export const SURPLUS_FUNDS_BASICS_COURSE: AuthoredCourse = {
  title: "Surplus Funds Basics: Helping Homeowners Recover What Is Theirs",
  description:
    "When a home sells at a tax or foreclosure auction for more than the debt against it, the extra money belongs to the former owner, and a great deal of it is never claimed. This course teaches where that money comes from and where it sits, what the Supreme Court settled in Tyler v. Hennepin County and what it did not, how to read a county surplus ledger, how to verify who is entitled, and how the claim is actually filed. It covers the honest economics of doing this as a service: the fee caps in Florida and Georgia, the fact that Texas prohibits a non-attorney from charging at all, the deadlines that end a claim, and the disclosure model that is both the ethical choice and the only one that works in all three states. It teaches the industry as it actually operates, including the practices that got the fee caps written, and it is honest about how much of the money in this field is made selling training rather than recovering funds. Built on statutes read directly and dated, with a method for researching any county rather than a summary table that goes stale. Not legal advice.",
  lessons: [
    // ══════════════ MODULE 1 · WHAT SURPLUS FUNDS ARE ══════════════
    {
      slug: "surplus-what-this-is",
      title: "1 · What this course is, and what it will not promise you",
      section: "Module 1 · What surplus funds are",
      body: `A house is sold at auction because the owner fell behind on property taxes or a mortgage. The debt is $18,000. The house sells for $95,000. What happens to the difference?

It belongs to the former owner. A great deal of it is never claimed, because nobody tells them clearly enough, or the deadline passes, or the notice went to the address they no longer live at, which is the address of the house they just lost.

**What you will be able to do at the end**

- Explain where surplus comes from and the order in which an auction's proceeds get paid out.
- Say what *Tyler v. Hennepin County* settled, and what it left open.
- Find the office holding surplus funds in a given county, and read its list.
- Verify who is entitled to a claim, and what documents prove it.
- Research the fee rules, deadlines and disclosure requirements for **any** county, rather than trusting a table.
- Decide whether to do this as a business, with an accurate picture of what it pays.

**What this course will not do**

**It will not promise you money.** The business is fee-capped in Florida and Georgia. In Texas a non-attorney may not charge for it at all. Every claim has a deadline, and much of the work is unpaid research that leads nowhere. Module 2 gives you the arithmetic and you may well conclude this is not worth your time, which is a legitimate outcome of taking a course.

**It will not teach you to withhold information from a homeowner.** That is a real technique in this industry and this course rejects it, for a reason that is practical as much as ethical: it is restricted in some states, it is the reason fee caps exist, and it is the one thing your competitors cannot copy if you refuse to do it.

**The model this course teaches, stated once so nothing later surprises you.** Tell the person what the money is, where it is, and that they can claim it themselves. Give them a free written guide with the steps and your contact details. Then charge for doing it for them, if they want that.

That is not a softer version of the business. In Texas it is the only lawful version available to a non-attorney. In Florida the law already forces the same disclosure on everyone. You are choosing to lead with what your competitors must eventually admit.

**And the uncomfortable disclosure this course owes you.** A substantial share of the money in this industry is made selling training about the industry rather than recovering funds. This is training about the industry. So you should weigh what it says against the fact that it profits from your interest, and you should notice that a course promising easy money would sell better than this one.

${NOT_LEGAL_ADVICE}

:::reveal A course about a business model is itself a product in that business's ecosystem. What should you do with that fact while taking this one? ||| Weigh the claims against the incentive: this course profits from your interest in the field, so its optimistic statements deserve more skepticism than its discouraging ones. Notice which way it errs. A course that tells you the business is fee-capped, deadline-driven and closed to non-attorneys in Texas is giving away reasons not to buy, which is weak evidence in its favor, and it is exactly the test you should apply to every other course you meet in this field.

## Sources
- *Tyler v. Hennepin County*, 598 U.S. 631 (2023). https://www.supremecourt.gov/opinions/22pdf/22-166_8n59.pdf`,
    },
    {
      slug: "surplus-the-waterfall",
      title: "2 · The waterfall: who gets paid, in what order",
      section: "Module 1 · What surplus funds are",
      recallContent: [
        {
          prompt: "State the model this course teaches for dealing with a homeowner, and one practical reason it is not merely the polite option.",
          answer:
            "Tell them what the money is, where it is, and that they can claim it themselves; give them a free guide with the steps; charge only for doing it for them. Practically: in Texas a non-attorney may not charge for this at all, so free information is the only lawful model there, and in Florida the law already compels the same disclosure, so leading with it costs nothing your competitors will not eventually have to admit.",
        },
      ],
      body: `Surplus is arithmetic. Money comes in from a sale, obligations are paid in a fixed order, and whatever survives that order belongs to the former owner.

**The order, in general terms.** The precise sequence and the labels vary by state and by whether it was a tax sale or a mortgage foreclosure, so treat this as the shape rather than as any one state's rule:

1. **The costs of the sale itself.** Court costs, publication, the officer conducting the sale.
2. **The debt that caused the sale.** The delinquent taxes, or the foreclosing mortgage.
3. **Other government liens**, which in many places are paid before private claimants.
4. **Junior liens and judgments**, in their order of priority. A second mortgage, a contractor's lien, a judgment from an unrelated lawsuit.
5. **Whatever is left goes to the former owner.**

**Two things follow from that list, and they are the whole practical picture.**

**First, a large surplus on paper is not always a surplus in fact.** A property sells for $60,000 over the tax debt and looks like a $60,000 claim. Then a second mortgage and two judgments appear at step 4 and the owner receives nothing. **Checking for junior liens before you contact anyone is the difference between a real file and a wasted month**, and it protects the homeowner from being told about money that was never going to reach them.

**Second, the person entitled at step 5 is defined as of a specific moment**, usually the time of the sale or the filing of the foreclosure action, not today. That matters when the property changed hands, when the owner has died and heirs are involved, or when a deed was never recorded.

**Tax sale and mortgage foreclosure are different systems.** They are held by different offices, they run on different clocks, and they often sit in different chapters of a state's code. Florida is the clearest example and Module 4 covers it: foreclosure surplus and tax deed surplus have separate statutes, separate deadlines and separate rules. **Conflating the two is the single most common factual error in this subject**, including in material sold as training.

**Where the money physically sits.** Usually with the clerk of court, the treasurer, the tax commissioner or the comptroller, depending on the state and the sale type. If nobody claims it, most states eventually transfer it to a state unclaimed property fund, at which point a different set of rules applies, and in Georgia a different and much harder procedure.

:::reveal A county list shows a $60,000 surplus on a property. What is the first thing to check before you would tell the former owner about it, and why? ||| Whether there are junior liens or judgments that get paid at step 4, ahead of the owner. A second mortgage, a contractor's lien or an unrelated judgment can consume the entire surplus, so the owner would receive nothing. Checking first protects them from being told about money that was never going to reach them, and it saves you from working a file that cannot pay.

## Sources
- *Tyler v. Hennepin County*, 598 U.S. 631 (2023). https://www.supremecourt.gov/opinions/22pdf/22-166_8n59.pdf
- Fla. Stat. § 197.582 (2025). *Disbursement of proceeds of sale*. https://www.flsenate.gov/Laws/Statutes/2025/197.582`,
    },
    {
      slug: "surplus-tyler-v-hennepin",
      title: "3 · Tyler v. Hennepin County, and what it did not settle",
      section: "Module 1 · What surplus funds are",
      body: `Geraldine Tyler was 94. She owed Hennepin County, Minnesota about $15,000 in property taxes, interest and penalties. The county took her condominium, sold it for $40,000, kept all of it, and under Minnesota law at the time that was allowed.

In 2023 the Supreme Court held unanimously that this was unconstitutional. Keeping the surplus beyond the debt is a **taking of private property under the Fifth Amendment**, which requires just compensation (*Tyler v. Hennepin County*, 598 U.S. 631 (2023)).

**Why the case is the spine of this course.** It establishes, at the highest level, the principle everything else rests on: **the surplus is the former owner's property, not the government's windfall.** Before Tyler, a number of states operated schemes where the government or a purchaser kept the excess. That question is now settled.

**What it did not settle, and this is the part usually skipped**

- **It did not create a process.** How you claim, where you file, what proves entitlement and how long you have are all still state and county matters. Tyler says the money is yours; it does not say how to get it.
- **It did not set a deadline rule.** States still impose claim periods, and a missed deadline can still cost someone their money.
- **It did not address what happens to funds already transferred to a state**, or claims from before the decision, which have been litigated separately.
- **It did not regulate the recovery industry at all.** Fee caps, licensing and disclosure rules are entirely state law, and Module 4 shows how differently three states answer.

**The practical consequence for you.** Tyler produced a wave of new entrants into surplus recovery, because it clarified that the money exists and belongs to someone. That means more competition, more letters arriving in the same mailboxes, and more states paying attention to how those letters are written. It also means some of the material you will find online predates the decision and describes a world that no longer exists.

**How to use it when you talk to someone.** Not as a sales tool. As reassurance that they are not being told about a loophole or a scheme: the Supreme Court of the United States said the money is theirs. That is a true statement, it is checkable, and it costs you nothing to let them verify it.

:::reveal Someone tells you Tyler v. Hennepin means every former owner is now automatically sent their surplus. Correct them, precisely. ||| Tyler held that a government keeping surplus equity beyond the debt is an unconstitutional taking, so the money is the former owner's property. It did not create any process for getting it: filing, proof of entitlement, which office holds the funds and how long you have are still governed by state and county law, and a claim can still be lost to a missed deadline. The decision settled ownership, not procedure.

## Sources
- *Tyler v. Hennepin County*, 598 U.S. 631 (2023). https://www.supremecourt.gov/opinions/22pdf/22-166_8n59.pdf`,
    },
    {
      slug: "surplus-quiz-1",
      title: "4 · Knowledge check: what surplus funds are",
      section: "Module 1 · What surplus funds are",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "In the payout order after an auction, who is paid LAST?",
            options: [
              "The former owner of the property, from whatever remains",
              "The county tax collector, for the delinquent taxes owed",
              "The holders of junior liens and unrelated judgments",
              "The officer who conducted and advertised the sale",
            ],
            correctIndex: 0,
            explanation:
              "Costs of sale, then the debt that caused the sale, then other government liens, then junior liens and judgments, and only what survives all of that reaches the former owner. This is why a large surplus on paper is sometimes nothing in fact.",
            sourceLessonSlug: "surplus-the-waterfall",
          },
          {
            prompt: "What did the Supreme Court hold in Tyler v. Hennepin County?",
            options: [
              "That counties must automatically mail surplus funds to former owners",
              "That a government keeping surplus equity beyond the debt is an unconstitutional taking",
              "That surplus recovery agents must register in every state where they operate",
              "That tax foreclosure itself violates the Fifth Amendment in all circumstances",
            ],
            correctIndex: 1,
            explanation:
              "The holding is about ownership: the surplus belongs to the former owner rather than being a government windfall. It created no process, no deadline rule and no regulation of the recovery industry.",
            sourceLessonSlug: "surplus-tyler-v-hennepin",
          },
          {
            prompt: "Why should you check for junior liens before contacting a former owner?",
            options: [
              "Junior lienholders are the only parties permitted to file a claim",
              "Lien records are the only way to confirm a property address",
              "Liens paid ahead of the owner can consume the entire surplus",
              "Contacting an owner before a lien search is prohibited by federal law",
            ],
            correctIndex: 2,
            explanation:
              "A second mortgage, a contractor's lien or an unrelated judgment sits ahead of the former owner in the waterfall. Checking first protects them from being told about money that was never going to reach them, and saves you a wasted file.",
            sourceLessonSlug: "surplus-the-waterfall",
          },
          {
            prompt: "What does this course identify as the most common factual error in the subject?",
            options: [
              "Confusing tax sale surplus with mortgage foreclosure surplus",
              "Believing that surplus funds are taxable income to the owner",
              "Assuming that county records are private rather than public",
              "Treating the sale price as the property's market value",
            ],
            correctIndex: 0,
            explanation:
              "They are different systems, held by different offices, on different clocks, often in different chapters of a state's code. Florida is the clearest case, with separate statutes and separate deadlines for each.",
            sourceLessonSlug: "surplus-the-waterfall",
          },
          {
            prompt: "The person entitled to surplus is determined as of when?",
            options: [
              "Whoever holds title on the date the claim is filed with the office",
              "Whoever occupied the property most recently before the auction date",
              "Whoever the county's current mailing records identify as the owner",
              "A specific past moment, usually the sale or the foreclosure filing",
            ],
            correctIndex: 3,
            explanation:
              "Entitlement is fixed at a moment in the past, not today. That matters where the property changed hands, where the owner has died and heirs are involved, or where a deed was never recorded.",
            sourceLessonSlug: "surplus-the-waterfall",
          },
          {
            prompt: "Which of these did Tyler v. Hennepin County NOT do?",
            options: [
              "Establish a claim process, deadlines, or proof-of-entitlement rules",
              "Hold that keeping surplus beyond the debt is a taking",
              "Decide the case unanimously at the Supreme Court",
              "Involve a homeowner whose condominium sold for more than she owed",
            ],
            correctIndex: 0,
            explanation:
              "Procedure remains entirely a matter of state and county law, which is why a claim can still be lost to a missed deadline even though the money is constitutionally the owner's.",
            sourceLessonSlug: "surplus-tyler-v-hennepin",
          },
          {
            prompt: "What practical effect did the Tyler decision have on the recovery industry?",
            options: [
              "It capped recovery agent fees nationally at a uniform percentage",
              "It brought new entrants in, so owners now receive more competing letters",
              "It required counties to hire licensed recovery agents directly",
              "It moved all surplus funds into a single federal claims system",
            ],
            correctIndex: 1,
            explanation:
              "Clarifying that the money exists and belongs to someone attracted competition, and prompted more state attention to how solicitation letters are written. It also means older online material describes a world that no longer exists.",
            sourceLessonSlug: "surplus-tyler-v-hennepin",
          },
          {
            prompt: "How does this course say Tyler should be used in a conversation with a homeowner?",
            options: [
              "As proof that they will receive their money automatically",
              "As leverage to create urgency about a filing deadline",
              "As checkable reassurance that this is not a scheme or loophole",
              "As grounds to sue the county that conducted the sale",
            ],
            correctIndex: 2,
            explanation:
              "The Supreme Court saying the money is theirs is a true and verifiable statement that costs nothing to let them check. Using it to manufacture urgency, or implying automatic payment, both misdescribe what it held.",
            sourceLessonSlug: "surplus-tyler-v-hennepin",
          },
          {
            prompt: "What does this course say about its own position in the industry?",
            options: [
              "That it is the only accurate training available in the field",
              "That it profits from your interest, so weigh its optimism accordingly",
              "That it is endorsed by the offices that hold surplus funds",
              "That course sales are unrelated to the recovery business",
            ],
            correctIndex: 1,
            explanation:
              "A substantial share of the money in this field is made selling training about it. The course discloses that it is such a product, and notes that a course promising easy money would sell better than this one.",
            sourceLessonSlug: "surplus-what-this-is",
          },
          {
            prompt: "Where do surplus funds usually sit before anyone claims them?",
            options: [
              "In an escrow account held by the auction's winning bidder",
              "With the foreclosing lender until a court orders release",
              "In a federal registry maintained for unclaimed property nationally",
              "With a county office such as the clerk, treasurer or tax commissioner",
            ],
            correctIndex: 3,
            explanation:
              "Which office depends on the state and the sale type. If nobody claims the funds, most states eventually transfer them to a state unclaimed property fund, where different and often harder rules apply.",
            sourceLessonSlug: "surplus-the-waterfall",
          },
        ],
      },
    },

    // ══════════════ MODULE 2 · THE PEOPLE, THE ETHICS, THE INDUSTRY ══════════════
    {
      slug: "surplus-who-these-people-are",
      title: "5 · Who is on the other end of your letter",
      section: "Module 2 · The people, the ethics, the industry",
      recallContent: [
        {
          prompt: "What did Tyler v. Hennepin County settle, and name two things it left to state law.",
          answer:
            "It settled ownership: a government keeping surplus equity beyond the debt is an unconstitutional taking, so the surplus belongs to the former owner. It left the claim process and deadlines to state and county law, and it did not regulate the recovery industry, so fee caps, licensing and disclosure rules remain entirely state matters.",
        },
      ],
      body: `Before any technique, this. Tax foreclosure does not fall randomly across a population, and if you work in this field you should know whose money you are handling.

**The Detroit evidence.** Atuahene and Berry (2019) examined Detroit's property tax foreclosure crisis and found that more than 100,000 properties, roughly one in four in the city, were tax-foreclosed from 2011. They found the city had over-assessed homes in violation of the Michigan Constitution, and estimated that about **10 percent of all tax foreclosures**, rising to roughly **25 percent among homes in the lowest-priced quintile**, were attributable to those unconstitutional assessments. Most of the people displaced were African American.

Read that carefully, because it says something specific: a measurable share of those foreclosures **should not have happened at all.** The debt that took the house was inflated by an assessment that violated the state constitution.

**Who this concentrates on.** The elderly, including people who have owned a home outright for decades and fall behind on a tax bill rather than a mortgage. The low-income, for whom a few thousand dollars in arrears is unpayable. Heirs holding property through an unrecorded deed or an unadministered estate, who often do not know they own it. And, as the Detroit work documents, Black homeowners disproportionately.

Geraldine Tyler was 94 years old.

**Why this belongs in a practical course rather than a preamble.** Three reasons, each of which changes what you do:

1. **It changes who you look for.** Heirs with clouded title are a large share of unclaimed surplus, and they are the hardest to find and the most likely to be told their claim is impossible.
2. **It changes how you write.** A letter to someone who lost a home they had owned for forty years is a different document from a marketing piece, and people can tell the difference immediately.
3. **It changes what "unclaimed" means.** Money goes unclaimed because notice went to the address of the house they lost, or because the deadline passed while they were finding somewhere to live. Not because they did not want it.

**The connection to the rest of this catalog.** Property tax administration, assessment, and who loses homes are civics and history questions as much as financial ones. If a share of Detroit's foreclosures traced to unconstitutional assessment, then surplus recovery is downstream of a governance failure, and understanding the failure makes you better at the work.

:::reveal Why does the Detroit research change what "unclaimed surplus" means, rather than just adding moral context? ||| Because it shows that some of those foreclosures should never have happened: assessments that violated the Michigan Constitution inflated the debt that took the homes. Combined with the ordinary reasons funds go unclaimed, notice mailed to the address of the house the person just lost, or a deadline passing while they found somewhere to live, it means unclaimed money usually reflects a failure of process rather than a choice not to claim. That reframes your job from finding forgotten money to closing a notification gap.

## Sources
- Atuahene, B., & Berry, C. R. (2019). Taxed out: Illegal property tax assessments and the epidemic of tax foreclosures in Detroit. *UC Irvine Law Review, 9*(4), 847-886. https://scholarship.law.uci.edu/ucilr/vol9/iss4/3/
- *Tyler v. Hennepin County*, 598 U.S. 631 (2023). https://www.supremecourt.gov/opinions/22pdf/22-166_8n59.pdf`,
    },
    {
      slug: "surplus-industry-archetypes",
      title: "6 · How the industry actually does business",
      section: "Module 2 · The people, the ethics, the industry",
      body: `Six models, described so you can choose one deliberately instead of absorbing whichever you meet first.

| Model | How it works | What to know |
| --- | --- | --- |
| **Attorney practice area** | Claims handled as legal work, often alongside probate or real estate | Legitimate everywhere. In Texas, the only way to charge a fee for this work |
| **Professional finder** | Contingency fee for locating the person and filing the claim | The regulated middle, and where most fee caps and registration rules apply |
| **Claim buyer / assignee** | Buys the claim outright at a discount and takes the risk of collecting | Structurally legitimate, and the model where information asymmetry does the most damage: you profit from the gap between what they know it is worth and what you pay |
| **Mass mail operation** | High volume letters, low touch, low conversion, scale economics | Legal, and the reason a homeowner receives five letters and believes none of them |
| **Skip-trace and cold-call shop** | Phone first, high pressure, fast signatures | Where telephone consumer-protection exposure concentrates |
| **The course seller** | Sells training about surplus recovery | The largest and least discussed segment. This course is one of them |

**The claim-buyer row deserves a longer look**, because it is the one that sounds cleanest and carries the sharpest problem. Buying a claim is an honest transaction between informed parties. The difficulty is that the seller is frequently not informed: they have just lost a home, they may not know a surplus exists until you tell them, and they almost never know what the claim is worth or how likely it is to pay. Texas caps what a court may order paid to an assignee at **125 percent of what the assignee paid** the original owner, which exists precisely to compress that gap.

**How to think about which model you are in.** Ask one question: **where does my profit come from?** If it comes from doing work the person could not easily do themselves, that is a service. If it comes from them not knowing something you know, that is arbitrage on their ignorance, and it is the thing every fee cap in this field was written to limit.

**On competing with the mass mailers.** You cannot out-volume them and you should not try. What you can do is be the only letter in the stack that names the office, the case number and the deadline, and says the money can be claimed for free. The mass mailers cannot copy that without becoming a different business, because their entire model depends on conversion rates that transparency reduces.

:::reveal Apply the "where does my profit come from" test to a claim buyer who pays a homeowner $4,000 for a claim they know is very likely to yield $30,000. ||| The profit comes almost entirely from the information gap: the buyer knows the claim's likely value and the seller does not, and the seller has just lost a home so is poorly placed to evaluate the offer. That is arbitrage on their ignorance rather than payment for work performed, which is exactly what the fee caps and Texas's 125 percent assignee limit exist to compress. The same transaction with the valuation disclosed, and the owner told they could file themselves, is a different deal entirely.

## Sources
- Tex. Tax Code § 34.04. *Claims for excess proceeds*. https://texas.public.law/statutes/tex._tax_code_section_34.04`,
    },
    {
      slug: "surplus-fee-caps-as-history",
      title: "7 · Fee caps are a historical record, and the line you will be asked to cross",
      section: "Module 2 · The people, the ethics, the industry",
      body: `Florida caps compensation on an assigned foreclosure surplus at **12 percent**. Georgia caps recovery fees on state-held unclaimed property at **10 percent**. Texas prohibits a non-attorney from charging **anything at all** to obtain excess proceeds for an owner.

Legislatures do not write numbers like that in the abstract. **Each one is a response to conduct that happened**, at enough scale, to enough people, that a legislature acted. Read as a compliance checklist, the caps are an obstacle. Read as a record, they tell you exactly which behaviors this industry produced when it was unregulated.

**The five practices that sit on the line.** Named so you recognize them when a competitor, a partner or a training course presents them as technique. Each is paired with the version that does the same job honestly.

**1. Withholding the source of the funds.** "We have located funds belonging to you" without saying what or where. The purpose is to make you necessary. *The honest version:* name the office and the case number, and let them verify. You will lose some people who then file alone. You will convert more of the ones who stay, and you will not have built a business on a fact you were hiding.

**2. Overstating the difficulty of filing alone.** Describing a form-and-notary county as if it required a hearing before a magistrate, to someone who just said they would do it themselves. *The honest version:* tell them what their county actually requires. If it genuinely is a petition and a hearing, you have a strong pitch. If it is a form, sell convenience and deadline management, which are real.

**3. Pressing for a signature before they have read it.** *The honest version:* send the agreement, and call back. A deadline weeks away is not an emergency, and treating it as one is the tell.

**4. Routing funds through your own account.** A power of attorney letting you receive the money and net your fee. Georgia's unclaimed property rules appear to prohibit this outright, requiring payment directly to the owner. *The honest version:* the money goes to them and you invoice. It is worse for your cash flow and it removes any question about whether they got paid.

**5. Contacting people inside a statutory waiting period.** Some states bar solicitation for a period after a sale, and Georgia makes recovery agreements unenforceable for **24 months** after property is delivered to the commissioner. *The honest version:* know the period for your jurisdiction, and treat an agreement signed inside it as worth nothing, because it may be.

**The test to carry.** If a technique stops working the moment the other person understands it fully, it is not a technique. It is a gap you are exploiting, and someone eventually writes a statute about it.

:::reveal A competitor's letter says "our firm has located funds belonging to you, held by a government agency, and we work on contingency." What is missing, and what does its absence accomplish? ||| It never says what the funds are, which office holds them, or that the person can claim them without paying anyone. The absence makes the sender necessary: the recipient cannot evaluate whether the fee is worth it, cannot verify the claim independently, and cannot file alone because they do not know where. That is the practice that fee caps and disclosure statutes were written in response to, and Florida now compels the missing sentence by law on assignments.

## Sources
- Fla. Stat. § 45.033 (2025). *Sale or assignment of rights to surplus funds in a property subject to foreclosure*. https://www.flsenate.gov/Laws/Statutes/2025/0045.033
- Ga. Code Ann. § 44-12-224. *Agreement and fees for recovery or assistance in recovery of property reported and delivered to commissioner*. https://law.justia.com/codes/georgia/2021/title-44/chapter-12/article-5/section-44-12-224/
- Tex. Tax Code § 34.04. *Claims for excess proceeds*. https://texas.public.law/statutes/tex._tax_code_section_34.04`,
    },
    {
      slug: "surplus-community-and-referral",
      title: "8 · Being a good neighbor is also the marketing",
      section: "Module 2 · The people, the ethics, the industry",
      body: `**Know the free help, by name, before you charge anyone.** These exist in every state and most people you contact will not know about them:

- **The office holding the money.** Clerks and treasurers routinely walk claimants through their own forms. They are not your competitor; they are the baseline your service has to beat.
- **HUD-approved housing counselling agencies.** Free, federally approved, and the correct referral for anyone still in a housing crisis rather than just owed money.
- **Legal aid.** For claims that are contested, involve an estate, or hit a title problem, this may be both better and free.
- **State unclaimed property portals**, which are free to search and are where the money goes if a county claim period lapses.

**Refer away work you could have taken.** When someone is better served by legal aid, tell them. When the claim is straightforward and the deadline is far off and they would rather file alone, help them do it. You will lose files. You will also become the person locally who tells people the truth, in a field where that is scarce, and that reputation compounds in a way that individual files do not.

**This is a small world.** County clerks talk to each other and remember names. Homeowners talk to their families, and families in the situations that produce surplus tend to be dealing with more than one property. A single reputation for honesty in one county is worth more over five years than the handful of files it costs you.

**Serve your own community first.** Two reasons, one practical and one not. Practically, trust already exists and referral chains are short. Less practically: the people receiving the least honest letters are usually the people with the least access to a lawyer, and a course built on the Detroit evidence should say plainly that showing up honestly for those neighborhoods is worth doing on its own terms.

**What this looks like operationally.** Keep a written list of the free options for every county you work, put them in the free guide you hand out (Module 5), and log every referral you make. That log is also your best answer if a regulator or a client ever asks what you told people.

:::reveal You find a claim worth roughly $2,000 for someone whose county uses a simple form and whose deadline is eight months away. Your fee would be a few hundred dollars. What does this course say to do? ||| Tell them what it is, hand them the free guide, and let them file it themselves. The work does not justify the fee here: an easy form with a distant deadline is exactly the case the person can handle, and charging for it is selling convenience they do not need. You lose a small file and gain someone who will tell other people what you did, which in a field where honesty is scarce is the better trade.

## Sources
- U.S. Department of Housing and Urban Development. (n.d.). *Find a housing counselor*. https://www.hud.gov/findacounselor
- National Association of Unclaimed Property Administrators. (n.d.). *Unclaimed.org*. https://unclaimed.org/`,
    },
    {
      slug: "surplus-quiz-2",
      title: "9 · Knowledge check: people, ethics, industry",
      section: "Module 2 · The people, the ethics, the industry",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "What did Atuahene and Berry find about Detroit's tax foreclosures?",
            options: [
              "Roughly 10 percent were attributable to unconstitutional over-assessment",
              "That foreclosure rates were evenly distributed across all neighborhoods",
              "That the majority of foreclosed owners successfully claimed their surplus",
              "That assessment practices complied fully with the Michigan Constitution",
            ],
            correctIndex: 0,
            explanation:
              "The figure rises to about 25 percent among the lowest-priced quintile of homes, and most of those displaced were African American. A measurable share of those foreclosures should not have happened at all.",
            sourceLessonSlug: "surplus-who-these-people-are",
          },
          {
            prompt: "According to this course, why does surplus most often go unclaimed?",
            options: [
              "Owners generally prefer not to engage with government offices",
              "Notice reaches the address of the house they lost, or the deadline lapses",
              "Counties are prohibited from contacting former owners after a sale",
              "The amounts are usually too small to be worth the paperwork",
            ],
            correctIndex: 1,
            explanation:
              "Unclaimed money usually reflects a failure of process rather than a choice. That reframes the job from finding forgotten money to closing a notification gap.",
            sourceLessonSlug: "surplus-who-these-people-are",
          },
          {
            prompt: "Which industry model does the course say carries the sharpest information-asymmetry problem?",
            options: [
              "The attorney practice area handling claims as legal work",
              "The mass mail operation running on volume economics",
              "The claim buyer purchasing a claim at a discount",
              "The professional finder charging a contingency fee",
            ],
            correctIndex: 2,
            explanation:
              "The seller has usually just lost a home, may not have known a surplus existed, and rarely knows what the claim is worth. Texas caps assignee recovery at 125 percent of what was paid precisely to compress that gap.",
            sourceLessonSlug: "surplus-industry-archetypes",
          },
          {
            prompt: "What is the 'where does my profit come from' test?",
            options: [
              "Whether revenue exceeds the cost of skip tracing on each file",
              "Whether profit comes from work performed or from what the person does not know",
              "Whether the fee is charged upfront rather than on contingency",
              "Whether the county or the owner ultimately pays your invoice",
            ],
            correctIndex: 1,
            explanation:
              "Profit from work the person could not easily do themselves is a service. Profit from an information gap is arbitrage on their ignorance, and it is what every fee cap in this field was written to limit.",
            sourceLessonSlug: "surplus-industry-archetypes",
          },
          {
            prompt: "How does this course say fee caps should be read?",
            options: [
              "As a record of conduct the industry produced when unregulated",
              "As an arbitrary ceiling that varies for no particular reason",
              "As a guarantee that any fee below the cap is ethical",
              "As a temporary measure most states intend to repeal",
            ],
            correctIndex: 0,
            explanation:
              "Legislatures do not write those numbers in the abstract. Read as a compliance checklist the caps are an obstacle; read as a record they tell you which behaviors this field produced.",
            sourceLessonSlug: "surplus-fee-caps-as-history",
          },
          {
            prompt: "A competitor's letter says funds have been located but never says where. What does that accomplish?",
            options: [
              "It protects the recipient's privacy from third-party interception",
              "It complies with state rules barring disclosure before an agreement",
              "It reduces the risk of another recovery agent claiming the file",
              "It makes the sender necessary, since the recipient cannot verify or file alone",
            ],
            correctIndex: 3,
            explanation:
              "Without the office and the case number the recipient cannot evaluate the fee or act independently. Florida now compels the missing disclosure by statute on assignments.",
            sourceLessonSlug: "surplus-fee-caps-as-history",
          },
          {
            prompt: "Which is the correct referral for someone still in a housing crisis rather than simply owed money?",
            options: [
              "A HUD-approved housing counselling agency",
              "A state unclaimed property portal",
              "A title insurance company in the county",
              "The winning bidder at the auction",
            ],
            correctIndex: 0,
            explanation:
              "HUD-approved counselling is free and federally approved. Legal aid is the right referral for contested claims, estates or title problems, and the office holding the funds handles straightforward claims for nothing.",
            sourceLessonSlug: "surplus-community-and-referral",
          },
          {
            prompt: "Why does the course say to refer away work you could have taken?",
            options: [
              "Because taking small files is prohibited under most fee caps",
              "Because a local reputation for honesty compounds beyond the files it costs",
              "Because referrals generate a commission from the receiving agency",
              "Because claims below a threshold cannot legally be handled for a fee",
            ],
            correctIndex: 1,
            explanation:
              "Clerks remember names, families deal with more than one property, and honesty is scarce in this field. The reputation is worth more over five years than the handful of files lost.",
            sourceLessonSlug: "surplus-community-and-referral",
          },
          {
            prompt: "What is the test for whether a sales technique is legitimate?",
            options: [
              "Whether it is explicitly permitted by the state's statute",
              "Whether it improves conversion rates measurably over time",
              "Whether it still works when the other person understands it fully",
              "Whether competitors in the same county are also using it",
            ],
            correctIndex: 2,
            explanation:
              "A technique that collapses under full understanding is a gap being exploited rather than a technique, and eventually someone writes a statute about it.",
            sourceLessonSlug: "surplus-fee-caps-as-history",
          },
          {
            prompt: "Why can mass mail operations not copy the disclosure-first approach?",
            options: [
              "Their conversion model depends on rates that transparency reduces",
              "Bulk mail regulations prohibit including case numbers",
              "They are legally barred from naming the office holding funds",
              "Their letters are written by third parties they do not control",
            ],
            correctIndex: 0,
            explanation:
              "You cannot out-volume them and should not try. Being the only letter that names the office, the case number and the deadline is a position they would have to become a different business to occupy.",
            sourceLessonSlug: "surplus-industry-archetypes",
          },
        ],
      },
    },

    // ══════════════ MODULE 3 · FINDING IT ══════════════
    {
      slug: "surplus-where-the-records-are",
      title: "10 · Where the records are, and what they are called",
      section: "Module 3 · Finding it",
      recallContent: [
        {
          prompt: "Name three of the five practices that sit on the line, and the honest version of one of them.",
          answer:
            "Any three of: withholding the source of the funds, overstating the difficulty of filing alone, pressing for a signature before the person has read the agreement, routing funds through your own account, and contacting people inside a statutory waiting period. For example, the honest version of the first is to name the office and the case number and let them verify it themselves.",
        },
      ],
      body: `Almost everything you need is public by law. The difficulty is not access, it is that every county names and publishes it differently.

**Start with the county, because that is where the money is.** Depending on the state and the sale type, the holder is one of: the **clerk of court** (common for foreclosure surplus), the **tax commissioner** or **tax collector** (common for tax sales), the **treasurer**, or the **comptroller**.

**What the list is called.** Search the county site for any of these, because there is no national vocabulary:

- Surplus funds list, excess funds list, excess proceeds report
- Tax deed surplus, overage list, overbid list
- Registry of court balances, unclaimed registry funds
- Unclaimed excess proceeds

**If nothing is published, ask.** It is public information and a records request is a normal thing to file. Ask specifically for the surplus or excess funds ledger for tax sales or foreclosure sales in a date range. Be polite, be specific, and be patient: the person who answers is a colleague you will deal with for years.

**Then the court docket for the underlying case**, which is where you learn the things the list does not tell you: who the lienholders were, whether anything is contested, and whether another claimant has already filed.

**Then, if the county trail is cold, the state unclaimed property portal.** When a county claim period lapses, the funds usually transfer to the state. The NAUPA directory and MissingMoney point to the official state portals, which are free to search. **Note the change of regime**: once money is state-held, a different set of rules applies, often with its own fee cap, its own waiting period, and in Georgia a much harder recovery path.

**A discipline that will save you months.** Before you contact anyone, spend time reading a county's last twelve months of lists without acting on them. You are learning what a normal file looks like, what a typical surplus is in that county, how fast they are claimed, and what the list's quirks are. Operators who skip this contact people about claims that were already paid.

**On paid data.** Skip tracing platforms are the only line item with real per-record cost, and the only one carrying consumer-data obligations, so they come last, once a file is worth it. Lesson 12 covers what governs their use.

:::reveal A county publishes nothing on its website and you cannot find a surplus list. What are your next two moves, in order? ||| First, file a public records request with the office that would hold it, the clerk of court, tax commissioner, treasurer or comptroller depending on the sale type, asking specifically for the surplus or excess funds ledger for a date range. It is public information. Second, pull the court docket for individual cases you already know about, which gives you the lienholders and whether a claim is contested. The state unclaimed property portal is the fallback for funds that already passed the county stage.

## Sources
- National Association of Unclaimed Property Administrators. (n.d.). *Unclaimed.org*. https://unclaimed.org/
- Ga. Code Ann. § 48-4-5. *Payment of excess*. https://law.justia.com/codes/georgia/title-48/chapter-4/article-1/section-48-4-5/`,
    },
    {
      slug: "surplus-verifying-entitlement",
      title: "11 · Verifying who is actually entitled",
      section: "Module 3 · Finding it",
      body: `A name on a list is a starting point, not an answer. Before you contact anyone, and certainly before you promise anything, establish who is entitled.

**The three questions.**

**1. Who owned it at the relevant moment?** Not today. As Lesson 2 covered, entitlement is fixed at a past moment, usually the sale or the filing of the foreclosure action, and Florida's foreclosure statute makes this explicit with a rebuttable presumption that the owner of record when the lis pendens was filed is the person entitled, after subordinate lienholders' timely claims (Fla. Stat. § 45.033).

**2. Who else has a claim ahead of them?** Junior liens, judgments, and in many places recorded governmental liens. This is the check that decides whether the file is real.

**3. Is the entitled person available to claim?** This is where the work concentrates, and where three complications recur:

- **The owner has died.** Now you are dealing with an estate, possibly unadministered, and possibly multiple heirs. This is a different and slower body of law, and it is frequently where the largest unclaimed sums sit.
- **The deed was never recorded.** Common with property passed informally within families. The person who believes they own it may have to establish that first.
- **The owner has moved and left no trail**, which is the ordinary case, because the address on file is the house they lost.

**What proves entitlement, generally.** Expect a claim to require government photo identification, proof of ownership at the time of the sale such as the deed, and often the notice the county mailed. Notarisation is common. Where an estate is involved, expect letters of administration or their local equivalent. **The specific list is set by the office holding the money**, and asking them directly is faster and more reliable than any secondary source.

**Skip tracing, and the law that governs it.** Finding a person who has moved is the core research skill in this field, and the professional platforms draw on consumer data. That data is regulated: the federal Fair Credit Reporting Act governs consumer reports and restricts their use to permissible purposes, and the platforms impose their own subscriber requirements to match. **Do not assume that because you can buy access, any use is permitted.** Establish what purpose you are permitted to use it for before you build a workflow on it, and treat that as a question for the lawyer in Lesson 20's list.

:::reveal The person named on a surplus list died two years ago. Why is this both the hardest and often the most valuable kind of file? ||| Hardest because entitlement now runs through an estate that may be unadministered, possibly with multiple heirs, which is a different and slower body of law and often requires letters of administration before anyone can claim. Most valuable because those are exactly the claims that sit unclaimed the longest: nobody is watching the mail at the old address, the heirs frequently do not know the property or the surplus exists, and other operators skip them for being difficult.

## Sources
- Fla. Stat. § 45.033 (2025). *Sale or assignment of rights to surplus funds in a property subject to foreclosure*. https://www.flsenate.gov/Laws/Statutes/2025/0045.033
- Federal Trade Commission. (n.d.). *Fair Credit Reporting Act*. https://www.ftc.gov/legal-library/browse/statutes/fair-credit-reporting-act`,
    },
    {
      slug: "surplus-research-drill",
      title: "12 · Drill: read the file",
      section: "Module 3 · Finding it",
      body: `Short typed answers, checked forgivingly. This drill is about the reasoning, not the vocabulary.`,
      exercise: {
        instructions: "Answer in a few words. Name the office, the check, or the next step as asked.",
        items: [
          {
            prompt: "A $45,000 surplus, and the docket shows a recorded second mortgage of $52,000. Is this a file? Why?",
            answer: "no, the junior lien consumes the surplus",
            accept: [
              "no, the second mortgage is paid first",
              "not a file, the lien exceeds the surplus",
              "no, junior lien takes it",
            ],
            explanation:
              "Junior liens are paid ahead of the former owner in the waterfall, so nothing reaches them. Checking this first protects the owner from being told about money that will never arrive.",
          },
          {
            prompt: "Which office would you contact first for FORECLOSURE surplus in most places?",
            answer: "the clerk of court",
            accept: ["clerk of court", "county clerk", "the court clerk"],
            explanation:
              "Foreclosure surplus commonly sits with the clerk of court, while tax sale surplus more often sits with the tax commissioner, tax collector or treasurer.",
          },
          {
            prompt: "The county publishes no surplus list online. What is your next move?",
            answer: "file a public records request",
            accept: [
              "public records request",
              "request the ledger from the office",
              "ask the clerk for the ledger",
            ],
            explanation:
              "It is public information by law. Ask specifically for the surplus or excess funds ledger for a stated date range and sale type.",
          },
          {
            prompt: "Entitlement to surplus is determined as of which moment, generally?",
            answer: "the time of the sale or the foreclosure filing",
            accept: [
              "the sale date",
              "at the time of sale",
              "when the lis pendens was filed",
              "the foreclosure filing",
            ],
            explanation:
              "Not today. Florida makes this explicit with a rebuttable presumption favouring the owner of record when the lis pendens was filed.",
          },
          {
            prompt: "The named owner died before the sale. What does the claim now most likely require?",
            answer: "letters of administration from the estate",
            accept: [
              "an estate to be administered",
              "probate, letters of administration",
              "estate documents",
              "probate",
            ],
            explanation:
              "Entitlement runs through the estate, which may be unadministered. Slower and harder, and frequently where the largest unclaimed sums sit.",
          },
          {
            prompt: "Name the federal law that governs use of consumer data in skip tracing.",
            answer: "the Fair Credit Reporting Act",
            accept: ["FCRA", "fair credit reporting act"],
            explanation:
              "It restricts consumer reports to permissible purposes, and platforms impose matching subscriber requirements. Buying access does not establish that a given use is permitted.",
          },
          {
            prompt: "Before contacting anyone in a new county, what does the course tell you to do first?",
            answer: "read twelve months of its lists without acting",
            accept: [
              "study past lists first",
              "read the last year of lists",
              "review previous lists before contacting",
            ],
            explanation:
              "You learn what a normal file looks like, typical surplus size, how fast claims are made, and the list's quirks. Operators who skip it contact people about claims already paid.",
          },
          {
            prompt: "What does the court docket tell you that the surplus list usually does not?",
            answer: "the lienholders and whether the claim is contested",
            accept: [
              "junior liens and contests",
              "who the lienholders were",
              "whether another claimant filed",
            ],
            explanation:
              "It is the difference between a name with a number beside it and an understanding of whether that number can actually reach the former owner.",
          },
          {
            prompt: "Money has left the county and gone to the state. What changes?",
            answer: "a different set of rules applies",
            accept: [
              "different regime, own fee cap and waiting period",
              "state unclaimed property rules apply",
              "the rules change, often harder",
            ],
            explanation:
              "State-held property typically has its own fee cap, its own waiting period, and in Georgia a much harder recovery path requiring an interpleader action.",
          },
          {
            prompt: "Name one free resource you should tell a homeowner about before charging them.",
            answer: "the office holding the funds",
            accept: [
              "HUD housing counselor",
              "legal aid",
              "the clerk's office",
              "the county office",
              "state unclaimed property portal",
            ],
            explanation:
              "The office holding the money, HUD-approved housing counselling, legal aid and the free state portals are all baselines your service has to beat.",
          },
        ],
      },
    },

    // ══════════════ MODULE 4 · THREE STATES ══════════════
    {
      slug: "surplus-florida",
      title: "13 · Florida: two regimes, two clocks",
      section: "Module 4 · Three states, three answers",
      recallContent: [
        {
          prompt: "Name the three questions that establish whether a surplus file is real.",
          answer:
            "Who owned the property at the relevant past moment, usually the sale or the foreclosure filing. Who else has a claim ahead of them, meaning junior liens, judgments and recorded governmental liens. And whether the entitled person is available to claim, which is where death, unrecorded deeds and relocation complicate things.",
        },
      ],
      body: `Florida is the best teaching jurisdiction in this course, for two reasons: it runs **two separate surplus regimes**, which makes the general lesson concrete, and its foreclosure statute **writes the disclosure model into law**.

*Figures researched 3 August 2026. Verify the current text before relying on any of them.*

**Regime one: foreclosure surplus, Fla. Stat. § 45.033.** A voluntary transfer or assignment of rights to surplus is valid only if it meets every one of these:

| Requirement | The rule |
| --- | --- |
| **Fee cap** | Total compensation to the transferee or assignee may not exceed **12 percent of the surplus** |
| **Financial disclosure** | Must specify the assessed value, that assessed value may be lower than actual value, the approximate debt encumbering the property, and the approximate equity |
| **The disclosure that defines this course** | Must include *"a statement that the owner does not need an attorney or other representative to recover surplus funds in a foreclosure"* |
| **Deadline** | Filed with the court **within 60 days** after the filing of the certificate of disbursements |
| **Who may take it** | The transferee must qualify, or be able to qualify, as a surplus trustee under § 45.034 |

There is also a rebuttable presumption that the owner of record when the lis pendens was filed is entitled, after subordinate lienholders' timely claims.

**Read the third row again.** Florida requires every operator to tell the owner they do not need a representative. Your competitors put that sentence in the agreement, at signing, in the smallest permissible type. This course's model puts it in the first sentence of the first contact. **Same disclosure, opposite posture**, and the law is on the side of doing it early.

**Regime two: tax deed surplus, Fla. Stat. § 197.582.** Different pool, different clock. Reported requirements, and this one has not been read against the primary text yet, so verify before relying on it: claimants have **120 days from the date of the notice** to file with the clerk, and claims other than the property owner's that miss the 120th day are **barred**. Recorded governmental lienholders file within the same window and are paid before non-governmental claimants.

**The general lesson, which is the reason Florida goes first.** One state, two regimes, two statutes, two deadlines, two offices. If you assume a state has one surplus system you will miss claims and quote wrong deadlines. **Ask which sale produced the money before anything else.**

:::reveal Florida law already requires telling an owner they do not need a representative. Why is that good news for this course's model rather than a problem for it? ||| Because it means the disclosure is not a competitive disadvantage you are volunteering, it is a statement every competitor must make eventually anyway. They make it grudgingly, in the agreement, at signing. Leading with it in the first contact costs you nothing legally and gives you the one position a volume mailer cannot occupy, since their model depends on conversion rates that early transparency reduces.

## Sources
- Fla. Stat. § 45.033 (2025). *Sale or assignment of rights to surplus funds in a property subject to foreclosure*. https://www.flsenate.gov/Laws/Statutes/2025/0045.033
- Fla. Stat. § 197.582 (2025). *Disbursement of proceeds of sale*. https://www.flsenate.gov/Laws/Statutes/2025/197.582`,
    },
    {
      slug: "surplus-texas",
      title: "14 · Texas: where the business model is illegal",
      section: "Module 4 · Three states, three answers",
      body: `Texas is in this course because it breaks the business, and a course that only showed you states where the model works would be selling you something.

*Figures researched 3 August 2026. Verify the current text before relying on any of them.*

**Tex. Tax Code § 34.04, claims for excess proceeds.** Read against the statute text:

| Rule | The provision |
| --- | --- |
| **Non-attorney fee prohibition** | *"A person who is not an attorney may not charge a fee to obtain excess proceeds for an owner."* |
| **Attorney fee cap** | A fee charged by an attorney may not exceed **25 percent of the amount obtained, or $1,000, whichever is less** |
| **Assignee cap** | A court may not order an assignee or transferee paid more than **125 percent of what the assignee paid** the assignor on the date of assignment |
| **Deadline** | The petition must be filed **before the second anniversary of the date of the sale** |
| **Penalty** | An assignee who obtains excess proceeds without complying is liable to the assignor for the amount obtained plus attorney's fees and expenses |

**Take the attorney cap seriously, because it is doing something unusual.** Twenty-five percent **or $1,000, whichever is less** means the fee is effectively $1,000 on any surplus above $4,000. On a $60,000 surplus, a Texas attorney may charge $1,000. Compare Florida, where 12 percent of the same surplus is $7,200. Texas has deliberately made this economically unattractive, and that is the legislature's stated preference rather than a loophole to route around.

**So what can a business actually be in Texas?**

1. **Free information, and referral to an attorney.** Lawful. Note that attorneys generally may not split fees with non-lawyers under the rules of professional conduct, so a referral-fee arrangement needs its own check with a Texas lawyer. This is one of the questions in Lesson 20.
2. **Buying claims as an assignee**, within the 125 percent cap. A different business: you are purchasing at a discount and bearing risk, not charging for a service. It is also where the disclosure problem is sharpest, because you would be buying from someone who may not know what the claim is worth.
3. **Not charging in Texas at all**, and treating it as a jurisdiction where you help people for free because the alternative is helping them not at all.

**Why this lesson exists.** Any training that presents surplus recovery as a nationally uniform opportunity is wrong, and the error is not small. **Operating your Florida model in Texas would mean charging fees the statute prohibits.** The general skill is the one Lesson 16 teaches: research the jurisdiction before you work it, every time, and accept that the answer is sometimes no.

:::reveal You run a surplus recovery service in Florida and want to expand to Texas using the same contract and fee structure. What happens, and what are your actual options? ||| The Florida model is unlawful there: Texas prohibits a non-attorney from charging a fee to obtain excess proceeds for an owner, so your contract would be charging for something you may not charge for. The real options are giving information away free and referring to a Texas attorney, subject to checking the fee-splitting rules; buying claims as an assignee within the 125 percent cap, which is a different business; or not charging in Texas and helping people for free.

## Sources
- Tex. Tax Code § 34.04. *Claims for excess proceeds*. https://texas.public.law/statutes/tex._tax_code_section_34.04`,
    },
    {
      slug: "surplus-georgia",
      title: "15 · Georgia: the five-year cliff, and where your fee can go",
      section: "Module 4 · Three states, three answers",
      body: `Georgia matters for a structural reason: it shows what happens when money moves from county to state, which is the transition every unclaimed surplus eventually faces.

*Figures researched 3 August 2026, from secondary legal sources rather than primary text. Verify before relying on any of them.*

**County-held excess funds, O.C.G.A. § 48-4-5.**

| Rule | Reported substance |
| --- | --- |
| **County notice duty** | Written notice of excess funds by first-class mail **within 30 days after the sale**, to the record owner, each security deed holder, and other recorded interests |
| **Who may claim** | The record owner at the time of sale, security deed holders, and parties with a recorded equity interest or claim |
| **Deadline** | A claim may be filed **at any time after the sale until the funds are awarded** |
| **The five-year cliff** | After five years, unclaimed funds are paid over to the Department of Revenue. After that, release requires **a court order from an interpleader action** filed in the county where the sale occurred |

**Before the cliff, a form. After it, litigation.** That is the single most useful fact for anyone working Georgia, and it is a genuine service you can offer: a claim filed in year four is administrative, and the same claim in year six requires a lawsuit.

**State-held unclaimed property, O.C.G.A. § 44-12-224 and related provisions.** Once funds pass the cliff they enter a different regime:

| Rule | Reported substance |
| --- | --- |
| **Fee cap** | Fees to recover property delivered to the commissioner may **not exceed 10 percent** of the value recovered |
| **24-month unenforceability** | Agreements to pay compensation are **unenforceable for 24 months** after payment or delivery to the commissioner |
| **Pay-direct rule** | Located funds **must be paid directly to the owner** and may not be paid to the finder, *"whether pursuant to a duly executed power of attorney or otherwise"* |
| **Registration** | Since **1 July 2024**, Claimant Designated Representatives providing locator services must register with the Georgia Department of Revenue |

**The pay-direct rule is the one that reshapes operations**, if it holds against the primary text. If funds cannot pass through your account, you cannot net your fee at source. The money goes to the client and you invoice them afterwards, which means you carry collection risk on every single file. That changes your cash flow, your contract, and how much working capital you need before the first fee arrives.

**And notice that it is the honest structure anyway.** Lesson 7 listed routing funds through your own account as a practice on the line. Georgia appears to have simply made the honest version mandatory.

**An open question this course will not paper over.** Whether Georgia regulates finders for **county-held** excess funds, as distinct from state-held unclaimed property, is not established here. The 10 percent cap and the 24-month rule are written for property delivered to the commissioner. If you work Georgia, that gap is a specific question for your lawyer, and it is on the list in Lesson 20.

:::reveal A Georgia claim is in year four with the county, and an identical one is in year six with the state. Describe both the procedural and the commercial difference. ||| Procedurally, the year-four claim is administrative: a form filed with the county office holding the funds, with no deadline until the five-year cliff. The year-six claim requires a court order from an interpleader action filed in the county where the sale occurred, so it is litigation. Commercially, the state-held claim is capped at 10 percent, any agreement is unenforceable for 24 months after delivery to the commissioner, and the funds appear to have to be paid directly to the owner rather than through your account.

## Sources
- Ga. Code Ann. § 48-4-5. *Payment of excess*. https://law.justia.com/codes/georgia/title-48/chapter-4/article-1/section-48-4-5/
- Ga. Code Ann. § 44-12-224. *Agreement and fees for recovery or assistance in recovery of property reported and delivered to commissioner*. https://law.justia.com/codes/georgia/2021/title-44/chapter-12/article-5/section-44-12-224/
- Georgia Department of Revenue. (n.d.). *Unclaimed property program*. https://dor.georgia.gov/unclaimed-property-program`,
    },
    {
      slug: "surplus-jurisdiction-worksheet",
      title: "16 · The transferable skill: researching any county",
      section: "Module 4 · Three states, three answers",
      body: `Three states, three completely different answers. Which is why the thing worth learning is not those three answers but the method that produced them. **A summary table goes stale silently. A method does not.**

**The eight questions, in order.** Answer these for any county before you work it, and write the answers down with the date you found them.

**1. Which sale produced the money?** Tax sale or mortgage foreclosure. They are different systems with different statutes, and Florida proves they can differ inside one state.

**2. Which office holds it?** Clerk of court, tax commissioner, tax collector, treasurer or comptroller. Call and ask; the answer takes one phone call and saves weeks.

**3. What is the deadline, and from what event does it run?** The event matters as much as the number. Florida's assignment clock runs from the filing of the certificate of disbursements; Texas runs from the sale date; Georgia county funds have no deadline until the five-year transfer.

**4. May a non-attorney charge a fee here at all?** Ask this before anything commercial. Texas answers no.

**5. If yes, what is the cap, and what is it a percentage of?** Twelve percent of the surplus is not the same as ten percent of the amount recovered, and a percentage cap is not the same as a dollar ceiling.

**6. Is there a required disclosure or a required contract form?** Florida requires specific statements for a valid assignment. A missing sentence can invalidate the agreement.

**7. Is there a waiting period before you may solicit, or before an agreement is enforceable?** Georgia's 24-month unenforceability for state-held property is the sharpest example.

**8. Can funds pass through your account, or must the owner be paid directly?** This determines your cash flow and your collection risk.

**Where to find the answers.** The state code, via the legislature's own site rather than a summary. The office holding the funds, which will usually tell you its own procedure. The state unclaimed property administrator for state-held funds. And a lawyer in that state for anything commercial, which is Lesson 20.

**Write it down with a date.** Statutes change, and a note that says "12 percent" is worth much less than one that says "12 percent, Fla. Stat. § 45.033, read 3 August 2026." That habit is the difference between research and folklore, and it is the same discipline this course applies to itself.

:::reveal Why does question 3 ask what event the deadline runs FROM, rather than just how long it is? ||| Because the number is meaningless without the trigger, and the triggers genuinely differ: Florida's assignment clock runs from the filing of the certificate of disbursements, Texas's two years run from the date of the sale, and Georgia county funds have no deadline at all until the five-year transfer to the state. Knowing "60 days" without knowing what starts it will make you miss claims you thought you had months to file.

## Sources
- Fla. Stat. § 45.033 (2025). https://www.flsenate.gov/Laws/Statutes/2025/0045.033
- Tex. Tax Code § 34.04. https://texas.public.law/statutes/tex._tax_code_section_34.04
- Ga. Code Ann. § 48-4-5. https://law.justia.com/codes/georgia/title-48/chapter-4/article-1/section-48-4-5/`,
    },
    {
      slug: "surplus-quiz-3",
      title: "17 · Knowledge check: three states",
      section: "Module 4 · Three states, three answers",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "What does Texas Tax Code § 34.04 say about non-attorneys charging for excess proceeds?",
            options: [
              "A non-attorney may not charge a fee to obtain excess proceeds for an owner",
              "A non-attorney may charge up to 25 percent of the amount recovered",
              "A non-attorney must register with the state before charging any fee",
              "A non-attorney may charge only after the second anniversary of the sale",
            ],
            correctIndex: 0,
            explanation:
              "The prohibition is flat. It means a Florida-style fee-for-service model operated in Texas would be charging for something the statute forbids, which is why the course includes Texas at all.",
            sourceLessonSlug: "surplus-texas",
          },
          {
            prompt: "A Texas attorney recovers a $60,000 surplus. What is the maximum fee?",
            options: [
              "$15,000, which is a flat 25 percent of the amount that was obtained",
              "$7,200, matching Florida's 12 percent cap",
              "$1,000, because the cap is the lesser of 25 percent or $1,000",
              "There is no statutory cap at all once a licensed attorney is involved",
            ],
            correctIndex: 2,
            explanation:
              "Twenty-five percent or $1,000, whichever is less, means the fee is effectively $1,000 on any surplus above $4,000. Texas has deliberately made this economically unattractive.",
            sourceLessonSlug: "surplus-texas",
          },
          {
            prompt: "Which disclosure does Florida require in a valid assignment of foreclosure surplus?",
            options: [
              "A statement that the owner does not need an attorney or other representative",
              "A statement that the assignee is bonded and insured to operate in the state",
              "A statement of the assignee's total recoveries in the prior year",
              "A statement that the county clerk approved the assignment before it was signed",
            ],
            correctIndex: 0,
            explanation:
              "Along with a financial disclosure covering assessed value, debt and equity. It means every Florida competitor must eventually say what this course's model says first.",
            sourceLessonSlug: "surplus-florida",
          },
          {
            prompt: "What is Florida's fee cap on an assigned foreclosure surplus?",
            options: [
              "10 percent of the amount recovered",
              "12 percent of the surplus",
              "25 percent or $1,000, whichever is less",
              "There is no cap, only a disclosure requirement",
            ],
            correctIndex: 1,
            explanation:
              "Total compensation to the transferee or assignee may not exceed 12 percent of the surplus, and the assignment must also be filed within 60 days of the certificate of disbursements.",
            sourceLessonSlug: "surplus-florida",
          },
          {
            prompt: "What happens to Georgia county excess funds after five years?",
            options: [
              "They are forfeited permanently into the county general operating fund",
              "They are returned automatically to the last known address",
              "They transfer to the state, and release then requires an interpleader action",
              "They are distributed among the recorded lienholders automatically by default",
            ],
            correctIndex: 2,
            explanation:
              "Before the cliff a claim is administrative, after it the same claim is litigation. That is the single most useful fact for anyone working Georgia.",
            sourceLessonSlug: "surplus-georgia",
          },
          {
            prompt: "Georgia's pay-direct rule, if it holds, changes what about the business?",
            options: [
              "You cannot net your fee at source, so you invoice and carry collection risk",
              "You must open a dedicated trust account in the state before taking any clients",
              "You must be paid by the county rather than by the owner",
              "You may charge a fee only once the full 24-month period has expired",
            ],
            correctIndex: 0,
            explanation:
              "If funds must be paid directly to the owner rather than through your account, cash flow and working capital requirements change on every file. It is also the honest structure anyway.",
            sourceLessonSlug: "surplus-georgia",
          },
          {
            prompt: "Why does Florida serve as the course's best teaching jurisdiction?",
            options: [
              "It has the largest volume of surplus funds of any state",
              "It runs two separate regimes and writes the disclosure model into statute",
              "It is the only state where surplus recovery is entirely unregulated",
              "Its rules are identical to those in most other states",
            ],
            correctIndex: 1,
            explanation:
              "Foreclosure surplus and tax deed surplus have separate statutes, deadlines and offices, which makes the general lesson concrete, and § 45.033 requires the very disclosure this course is built around.",
            sourceLessonSlug: "surplus-florida",
          },
          {
            prompt: "In the eight-question worksheet, why does the deadline question ask about the triggering event?",
            options: [
              "Because deadlines are always measured in calendar rather than business days",
              "Because the triggering event determines which office holds the funds",
              "Because a duration is meaningless without knowing what starts the clock",
              "Because most states measure all deadlines from the date of notice",
            ],
            correctIndex: 2,
            explanation:
              "Florida's assignment clock runs from the certificate of disbursements, Texas's from the sale date, and Georgia county funds have no deadline until the five-year transfer.",
            sourceLessonSlug: "surplus-jurisdiction-worksheet",
          },
          {
            prompt: "Why does the course teach a research method rather than a national summary table?",
            options: [
              "A summary table goes stale silently, while a method stays true",
              "National tables are copyrighted by the states that publish them",
              "The rules are identical enough that a table would be redundant",
              "Methods are easier to test in a multiple-choice format",
            ],
            correctIndex: 0,
            explanation:
              "Statutes change and a reader has no way to tell when a table stopped being accurate. Writing each answer down with its citation and the date read is the difference between research and folklore.",
            sourceLessonSlug: "surplus-jurisdiction-worksheet",
          },
          {
            prompt: "What does the course say is genuinely NOT established about Georgia?",
            options: [
              "Whether finders are regulated for county-held excess funds specifically",
              "Whether excess funds are generated by tax sales in Georgia at all",
              "Which county office is responsible for holding excess funds before transfer",
              "Whether the state operates an unclaimed property program",
            ],
            correctIndex: 0,
            explanation:
              "The 10 percent cap and 24-month rule are written for property delivered to the commissioner. Whether an equivalent governs county-held funds is a specific question for a Georgia lawyer, and the course says so rather than guessing.",
            sourceLessonSlug: "surplus-georgia",
          },
        ],
      },
    },

    // ══════════════ MODULE 5 · THE CLAIM AND THE SERVICE ══════════════
    {
      slug: "surplus-the-claim-packet",
      title: "18 · The claim itself, and the deadline that ends it",
      section: "Module 5 · The claim and the service",
      recallContent: [
        {
          prompt: "List four of the eight jurisdiction questions you answer before working a county.",
          answer:
            "Any four of: which sale produced the money, which office holds it, what the deadline is and what event it runs from, whether a non-attorney may charge at all, what the fee cap is and what it is a percentage of, whether a disclosure or contract form is required, whether there is a waiting period, and whether funds can pass through your account.",
        },
      ],
      body: `The mechanics vary by office, and the office will tell you its own procedure, which is always more reliable than any secondary description including this one. What follows is the shape.

**What a claim usually contains**

- **The claim form**, obtained from the office holding the funds. Complete it exactly and do not alter it; some offices reject altered forms outright.
- **Government photo identification** for the claimant.
- **Proof of ownership at the relevant time**, typically the deed, and often the notice the county mailed about the sale.
- **Notarisation**, commonly required on the claimant's signature.
- **Estate documents** where the owner has died: letters of administration or the local equivalent.
- **A release or satisfaction** where a lien has been paid or discharged, if a resolved lien is still showing.

**Where claims fail, in order of frequency.** These are the failures worth designing against:

1. **The deadline passed.** The most common and the least recoverable.
2. **The form was incomplete or altered.** Offices are strict, and a rejection consumes time you may not have.
3. **Entitlement was not proven** to the office's satisfaction, usually a chain-of-title or estate problem.
4. **A competing claimant filed**, and the matter now needs resolution between claimants.
5. **The claim was correct and the surplus was consumed** by liens nobody checked, which Lesson 2 warned about.

**Deadlines deserve their own discipline.** Record, for every file: the triggering event, the date it occurred, the length of the period, the computed deadline, and where that rule came from. Then build your reminders backwards from the deadline rather than forwards from today. **A missed deadline is not a lost commission, it is a person permanently losing money that was theirs**, and it should be the number you track most closely.

**When it becomes contested.** If another claimant appears, if the estate is disputed, or if a lienholder challenges priority, this stops being administrative and becomes legal. That is the moment to refer to a lawyer rather than to press on, and knowing where that line is protects both of you. In Georgia, funds past the five-year cliff are contested by definition, since release requires an interpleader action.

:::reveal Why should reminders be built backwards from the deadline rather than forwards from the day you open the file? ||| Because the deadline is the only fixed point, and everything else moves. Working forwards from today produces a schedule based on when you happened to start, which silently compresses when a file sits untouched for a fortnight. Working backwards forces you to identify the last safe date to send the agreement, the last safe date to get it notarised, and the last safe date to file, so a delay shows up as a missed internal date rather than as a missed statutory one.

## Sources
- Fla. Stat. § 197.582 (2025). *Disbursement of proceeds of sale*. https://www.flsenate.gov/Laws/Statutes/2025/197.582
- Ga. Code Ann. § 48-4-5. *Payment of excess*. https://law.justia.com/codes/georgia/title-48/chapter-4/article-1/section-48-4-5/`,
    },
    {
      slug: "surplus-the-free-guide",
      title: "19 · The free guide, and why it is the whole strategy",
      section: "Module 5 · The claim and the service",
      body: `The centrepiece of this model is a document you give away: a short written guide, per jurisdiction, that tells someone exactly how to claim their money without you.

**Why give away the thing you would otherwise charge for?**

- **In Texas it is the only lawful product** a non-attorney has.
- **In Florida the disclosure is compulsory anyway**, so leading with it costs nothing.
- **It works in every jurisdiction unchanged in principle**, where a paid service must be reconfigured for each one. It is the only asset you do not rebuild per state.
- **It is the one thing volume mailers cannot copy** without damaging their own conversion economics.
- **It converts the people worth having.** Someone who reads a complete, honest guide and still asks you to handle it is telling you they value their time, which is a better client than someone who signed because they were confused.

**What goes in it.** Roughly two pages, per county:

1. What surplus funds are, in three sentences, and that the money is theirs.
2. **The specific office holding it**, with address, phone number and hours.
3. The exact form name and where to get it.
4. What documents they will need.
5. **The deadline, prominently**, with the triggering event and what happens if it passes.
6. That filing themselves costs nothing.
7. The free help available: the office itself, legal aid, HUD-approved housing counselling.
8. **Last:** what you charge to do it for them, and what that buys.

**The line you must not cross.** Keep the guide **general to the process**, never specific to a person's case. Describing what a county requires is information. Telling a named individual what to file in their particular matter, or advising them on a contested estate, edges toward the unauthorized practice of law, and where that line sits varies by state. It is question three on the list in the next lesson.

**Distribution is still regulated.** The guide being free does not exempt how you deliver it. Telephone consumer-protection rules govern calls and texts, and any state waiting period on soliciting claimants still applies. A free document delivered by an unlawful cold call is still an unlawful cold call.

**What to measure.** Guides sent, guides that led to a self-filed claim, and guides that converted to paid work. **Track the second number deliberately, and be pleased when it is high.** It is evidence that the model works, it is what you will point to when a regulator or a client asks how you operate, and over time it is the only marketing that compounds.

:::reveal Someone reads your free guide, files their own claim, and pays you nothing. Why does this course count that as a success rather than a loss? ||| Because it is the model working as designed: the person got their money, which is the point, and it cost you a document you had already written for the county. It also produces the evidence that makes the whole approach credible, a track record of people you helped for free, which is what you show a regulator or a skeptical client. And it is the marketing that compounds, because that person tells others in a field where almost nobody has a good experience to report.

## Sources
- Fla. Stat. § 45.033 (2025). *Sale or assignment of rights to surplus funds in a property subject to foreclosure*. https://www.flsenate.gov/Laws/Statutes/2025/0045.033
- Tex. Tax Code § 34.04. *Claims for excess proceeds*. https://texas.public.law/statutes/tex._tax_code_section_34.04`,
    },
    {
      slug: "surplus-agreements-and-lawyer",
      title: "20 · Agreements, and the questions to bring your lawyer",
      section: "Module 5 · The claim and the service",
      body: `${NOT_LEGAL_ADVICE}

**What an agreement generally has to do.** State the fee and how it is calculated. State that the client may claim without you. Comply with the fee cap of the **right state**, which is where the property and the funds are, not where you are. Include any statutorily required language, which Florida has and other states may. Say what happens if the claim fails, which under a contingency arrangement should be that they owe nothing. Say who pays filing costs. And say how the money moves, which Georgia may decide for you.

**What voids an agreement, based on the three states researched here.** A fee above the cap. A missing required disclosure, which in Florida can invalidate an assignment outright. Signing inside a statutory unenforceability window, as Georgia appears to impose for 24 months on state-held property. Charging at all as a non-attorney in Texas. **Every one of those turns a completed file into unpaid work**, and possibly into a liability.

**The questions to bring your lawyer.** The review is worth several times more with a specific list. In priority order:

1. In this state, may a non-attorney charge a fee to assist with a surplus or excess funds claim, and under what structure?
2. Does any registration, bonding or license apply to that activity here?
3. **Where is the line between preparing a claim and practicing law in this state?**
4. Is there a mandatory disclosure, a required contract form, or a waiting period after the sale?
5. May client funds pass through my account, or must the office pay the owner directly?
6. What must my agreement contain, and what would void it?
7. **If I operate in several states, which state's rules govern: where the property is, where the owner now lives, or where I am?**
8. What is my exposure if a claim I file is rejected, or is later contested by another claimant?

**Question seven is the one people forget**, and for a business operating across state lines it is the most consequential of the eight. Ask it first if you only get one.

**On insurance and structure.** Whether you need an entity, professional liability cover, or a bond is a question for the same conversation. This course does not have a view, and anyone who tells you confidently what structure to use without knowing your state is guessing.

:::reveal You are based in Ohio, the property was in Georgia, and the former owner now lives in Texas. Whose rules govern your fee agreement? ||| This course does not answer that, and that is the honest answer: it is question seven on the lawyer list precisely because it is genuinely contested and consequential. The safe working assumption is that the state where the property and the funds are, Georgia here, has the strongest claim to govern, since that is where the statute creating the surplus operates and where the office holding the money sits. But the owner's state of residence may also impose consumer-protection rules, and you need a lawyer's answer rather than an assumption before you operate across lines.

## Sources
- Fla. Stat. § 45.033 (2025). https://www.flsenate.gov/Laws/Statutes/2025/0045.033
- Ga. Code Ann. § 44-12-224. https://law.justia.com/codes/georgia/2021/title-44/chapter-12/article-5/section-44-12-224/
- Tex. Tax Code § 34.04. https://texas.public.law/statutes/tex._tax_code_section_34.04`,
    },
    {
      slug: "surplus-quiz-4",
      title: "21 · Knowledge check: the claim and the service",
      section: "Module 5 · The claim and the service",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is the most common reason surplus claims fail?",
            options: [
              "The deadline passed before the claim was filed",
              "The claimant could not obtain photo identification",
              "The county lost the records of the original sale",
              "The surplus amount was too small to process",
            ],
            correctIndex: 0,
            explanation:
              "It is also the least recoverable failure, which is why deadlines get their own tracking discipline and why reminders are built backwards from the deadline.",
            sourceLessonSlug: "surplus-the-claim-packet",
          },
          {
            prompt: "Why build reminders backwards from the deadline?",
            options: [
              "The office requires a written filing schedule to be submitted in advance",
              "The deadline is the only fixed point, so delays surface as internal misses",
              "Working forwards from today is prohibited under most contingency agreements",
              "It reduces the total number of reminders needed per file",
            ],
            correctIndex: 1,
            explanation:
              "Working forwards from today produces a schedule based on when you happened to start, which silently compresses when a file sits untouched.",
            sourceLessonSlug: "surplus-the-claim-packet",
          },
          {
            prompt: "What must the free guide NOT do?",
            options: [
              "Name the specific office holding the funds in that county",
              "State that filing without help costs the claimant nothing",
              "Advise a named person on what to file in their particular matter",
              "List free alternatives such as legal aid and housing counselling",
            ],
            correctIndex: 2,
            explanation:
              "Describing a process is information; advising an individual on their case edges toward the unauthorized practice of law, and where that line sits varies by state.",
            sourceLessonSlug: "surplus-the-free-guide",
          },
          {
            prompt: "Someone reads the free guide and files their own claim without paying. How does the course treat that?",
            options: [
              "As a success: they got their money and it produces credible evidence",
              "As a failure of the conversion copywriting in the guide itself",
              "As a reason to withhold rather more detail in every future version",
              "As a breach of the agreement they implicitly accepted",
            ],
            correctIndex: 0,
            explanation:
              "It is the model working as designed, it builds the track record you show a regulator or a skeptical client, and it is the marketing that compounds.",
            sourceLessonSlug: "surplus-the-free-guide",
          },
          {
            prompt: "Which state's fee cap governs your agreement?",
            options: [
              "The state where your business is registered and operates",
              "The state where the property and the funds are located",
              "The state where the former owner currently resides",
              "Whichever state's cap is highest among those involved",
            ],
            correctIndex: 1,
            explanation:
              "The statute creating the surplus operates where the property is and where the office holds the money. Which state's rules govern overall is question seven on the lawyer list, because it is genuinely contested.",
            sourceLessonSlug: "surplus-agreements-and-lawyer",
          },
          {
            prompt: "Which of these would void an agreement in one of the three researched states?",
            options: [
              "Omitting a required statutory disclosure from a Florida assignment",
              "Charging a contingency fee that sits below the applicable statutory cap",
              "Providing the claimant with the holding office's full contact details",
              "Filing the claim earlier than the deadline requires",
            ],
            correctIndex: 0,
            explanation:
              "Florida requires specific statements for a valid assignment. Other voiding conditions include exceeding a cap, signing inside Georgia's unenforceability window, and charging at all as a non-attorney in Texas.",
            sourceLessonSlug: "surplus-agreements-and-lawyer",
          },
          {
            prompt: "Which lawyer question does the course say is the most consequential for multi-state operation?",
            options: [
              "Whether professional liability insurance is required to operate lawfully",
              "Whether a registered entity or a sole proprietorship is the better structure",
              "Which state's rules govern: property, owner's residence, or yours",
              "Whether the fee should be contingent or flat",
            ],
            correctIndex: 2,
            explanation:
              "It is question seven, and the course says to ask it first if you only get one. Operating across state lines without an answer is the biggest unquantified exposure in the business.",
            sourceLessonSlug: "surplus-agreements-and-lawyer",
          },
          {
            prompt: "When should a file be referred to a lawyer rather than pressed on?",
            options: [
              "Whenever the surplus exceeds a fixed dollar threshold",
              "Only after the county has formally rejected the claim",
              "When the claimant asks for a written fee agreement",
              "When a competing claimant appears or the estate is disputed",
            ],
            correctIndex: 3,
            explanation:
              "At that point it stops being administrative and becomes legal. In Georgia, funds past the five-year cliff are contested by definition, since release requires an interpleader action.",
            sourceLessonSlug: "surplus-the-claim-packet",
          },
          {
            prompt: "Why does the free guide work in every jurisdiction while the paid service does not?",
            options: [
              "Free documents are exempt from every state consumer-protection rule",
              "Information is lawful everywhere, while charging is regulated per state",
              "The guide does not need to name a specific office or deadline",
              "Counties agree to distribute the guide on the operator's behalf",
            ],
            correctIndex: 1,
            explanation:
              "It is the only asset you do not rebuild per state. Distribution is still regulated though: a free document delivered by an unlawful cold call is still an unlawful cold call.",
            sourceLessonSlug: "surplus-the-free-guide",
          },
          {
            prompt: "What should an operator track deliberately, and be pleased to see high?",
            options: [
              "Guides that led to someone filing their own claim successfully",
              "The average fee percentage charged across all closed files",
              "The number of letters mailed per county per month",
              "The proportion of claims contested by other claimants",
            ],
            correctIndex: 0,
            explanation:
              "It is evidence the model works, it is what you show when asked how you operate, and it is the marketing that compounds in a field where almost nobody has a good experience to report.",
            sourceLessonSlug: "surplus-the-free-guide",
          },
        ],
      },
    },

    // ══════════════ MODULE 6 · CLOSE ══════════════
    {
      slug: "surplus-capstone",
      title: "22 · Capstone: research one county, end to end",
      section: "Module 6 · Close",
      lessonType: "assignment",
      body: `One county, researched properly, with nothing invented. This cannot be completed by reading, and it deliberately does not ask you to contact a single homeowner.

**The brief.** Pick one county, in any state. Not a state, a county. Produce the research packet you would need before working it.

**What to submit.**

**1. The eight jurisdiction questions** from Lesson 16, answered for your county. Each answer needs a **source and the date you found it**: a statute section, an office's own published page, or a named person you spoke to and when. An answer without a source does not count, and "I could not establish this" is an acceptable and useful answer where it is true.

**2. Which office holds the money**, with address, phone number and how you confirmed it. If you called, say what they told you.

**3. A real surplus list**, or evidence there is not one. Either link the published list, or document the records request you would file, with the exact wording and the office it goes to.

**4. One file walked through on paper.** Take one entry from a published list, or a hypothetical if nothing is published, and work it: what would you check for junior liens, what would establish entitlement, what documents would the claim require, what is the deadline and what event starts it. **Do not contact anyone.**

**5. The free guide for that county**, written to the eight-point outline in Lesson 19. Two pages. This is the main deliverable, and it should be good enough to actually hand to someone.

**6. Your lawyer question list**, from Lesson 20, adapted to what your research left open. Which of the eight are already answered by your research, and which are genuinely open for your state?

**7. The honest verdict.** Given the fee cap, the deadline, the volume on the list and what you now know, **would you work this county?** Say yes or no and show the arithmetic. A well-argued no is worth full marks. If the answer is no, say what would have to change.

**What a strong submission looks like.** Sourced, dated, specific to one place, and willing to record what it could not find out. A submission where every question was answered easily and the conclusion was that this is a great opportunity is a submission that did not do the research.

${NOT_LEGAL_ADVICE}`,
    },
    {
      slug: "surplus-review",
      title: "23 · Cumulative review",
      section: "Module 6 · Close",
      body: `**Surplus is arithmetic.** Costs of sale, then the debt that caused it, then government liens, then junior liens and judgments, and only what survives reaches the former owner. Check for junior liens before you tell anyone anything.

**Tax sale and foreclosure are different systems**, often in different chapters of the same state's code, held by different offices, on different clocks. Ask which sale produced the money first.

**Tyler v. Hennepin County settled ownership, not procedure.** The surplus is the former owner's property. How to claim it, by when, and who may charge for helping are all still state law.

**Entitlement is fixed at a past moment**, usually the sale or the foreclosure filing, which is why deaths, unrecorded deeds and relocations complicate files.

**Money goes unclaimed because of a notification gap**, not indifference. Notice goes to the house they lost. The Detroit research shows a measurable share of those foreclosures should never have happened at all.

**Fee caps are a historical record.** Florida 12 percent, Georgia 10 percent on state-held property, Texas prohibits non-attorney fees entirely. Each number is a response to conduct.

**The five practices on the line:** withholding the source, overstating filing difficulty, rushing a signature, routing funds through your account, and contacting inside a waiting period. Each has an honest version that does the same job.

**The test:** if a technique stops working when the other person understands it fully, it is not a technique.

**Three states, three answers.** Florida runs two regimes and compels the disclosure this course is built on. Texas prohibits non-attorney fees and caps attorneys at the lesser of 25 percent or $1,000. Georgia has a five-year cliff after which a form becomes litigation, and appears to require payment directly to the owner.

**The transferable skill is the eight-question worksheet**, answered per county, written down with a citation and a date. A table goes stale silently. A method does not.

**The free guide is the strategy**, not a giveaway attached to one: the only lawful product in Texas, compulsory in substance in Florida, and the only asset that does not get rebuilt per state.

**Track the deadline above everything.** A missed one is not a lost commission, it is a person permanently losing money that was theirs.

:::reveal Without looking back, name the eight jurisdiction questions from Lesson 16. ||| Which sale produced the money. Which office holds it. What the deadline is and what event it runs from. Whether a non-attorney may charge a fee at all. If so, what the cap is and what it is a percentage of. Whether a disclosure or contract form is required. Whether there is a waiting period before soliciting or before an agreement is enforceable. And whether funds may pass through your account or must be paid directly to the owner.

## Sources
- *Tyler v. Hennepin County*, 598 U.S. 631 (2023). https://www.supremecourt.gov/opinions/22pdf/22-166_8n59.pdf
- Atuahene, B., & Berry, C. R. (2019). Taxed out: Illegal property tax assessments and the epidemic of tax foreclosures in Detroit. *UC Irvine Law Review, 9*(4), 847-886. https://scholarship.law.uci.edu/ucilr/vol9/iss4/3/`,
    },
    {
      slug: "surplus-sources",
      title: "24 · Sources, and how to keep this current",
      section: "Module 6 · Close",
      body: `Everything in this course was researched on **3 August 2026** and cited to the statute or the agency rather than to a summary. That date is the most important thing on this page.

**How to keep it current, in order of return**

1. **Re-read the statute, not a summary of it.** Every state legislature publishes its own code. A secondary source that was right when it was written gives you no signal when it stops being right.
2. **Ask the office.** Procedures change more often than statutes, and the clerk knows before anybody publishes it.
3. **Re-run the eight questions annually per county you work**, and date each answer.
4. **Watch for post-Tyler legislation.** The decision prompted states to revisit their surplus procedures, and some of what you learn today will be superseded.
5. **Get the legal review before you charge anyone.** Nothing here substitutes for it.

**Two things this course deliberately did not resolve**, and you should know they are open rather than assume they were covered: whether Georgia regulates finders for county-held excess funds as distinct from state-held unclaimed property, and Florida's tax deed claim timing, which is reported here from secondary sources rather than read against the primary text.

**A closing note.** This course told you the business is fee-capped, deadline-driven, closed to non-attorney fee-charging in Texas, and that a large share of the money in the field is made selling training rather than recovering funds. It did that because a course teaching disclosure has to practice it. Apply the same test to the next one you take.

## Sources

**Cases**
- *Tyler v. Hennepin County*, 598 U.S. 631 (2023). https://www.supremecourt.gov/opinions/22pdf/22-166_8n59.pdf

**Statutes**
- Fla. Stat. § 45.033 (2025). *Sale or assignment of rights to surplus funds in a property subject to foreclosure*. https://www.flsenate.gov/Laws/Statutes/2025/0045.033
- Fla. Stat. § 197.582 (2025). *Disbursement of proceeds of sale*. https://www.flsenate.gov/Laws/Statutes/2025/197.582
- Ga. Code Ann. § 44-12-224. *Agreement and fees for recovery or assistance in recovery of property reported and delivered to commissioner*. https://law.justia.com/codes/georgia/2021/title-44/chapter-12/article-5/section-44-12-224/
- Ga. Code Ann. § 48-4-5. *Payment of excess*. https://law.justia.com/codes/georgia/title-48/chapter-4/article-1/section-48-4-5/
- Tex. Tax Code § 34.04. *Claims for excess proceeds*. https://texas.public.law/statutes/tex._tax_code_section_34.04

**Agencies and reference**
- Federal Trade Commission. (n.d.). *Fair Credit Reporting Act*. https://www.ftc.gov/legal-library/browse/statutes/fair-credit-reporting-act
- Georgia Department of Revenue. (n.d.). *Unclaimed property program*. https://dor.georgia.gov/unclaimed-property-program
- National Association of Unclaimed Property Administrators. (n.d.). *Unclaimed.org*. https://unclaimed.org/
- U.S. Department of Housing and Urban Development. (n.d.). *Find a housing counselor*. https://www.hud.gov/findacounselor

**Research**
- Atuahene, B., & Berry, C. R. (2019). Taxed out: Illegal property tax assessments and the epidemic of tax foreclosures in Detroit. *UC Irvine Law Review, 9*(4), 847-886. https://scholarship.law.uci.edu/ucilr/vol9/iss4/3/`,
    },
  ],
};
