// Authored "Spotting Misleading Marketing" — a media/consumer-literacy course in the
// Civics category on Learn.WitUS. Carries the platform's trust DNA: advertising isn't
// lying by default, but learn the line between legal puffery, deceptive claims, and
// outright fraud — and how to verify a claim and exercise your rights. Strictly
// non-partisan and practical (teach the skill, don't fearmonger). Cited to primary
// authorities: the FTC (Deception Policy Statement; Endorsement/Disclosures guides;
// the Consumer Reviews & Testimonials Rule, 16 CFR 465; the .com Disclosures guide;
// the Dark Patterns staff report), the FDA (DSHEA / structure-function claims), the
// FCC (sponsorship-ID rule), and media-literacy orgs (News Literacy Project; Stanford
// Civic Online Reasoning). No real brand is named as deceptive. Exercises + a quiz
// whose every question links to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const SPOTTING_MISLEADING_MARKETING_COURSE: AuthoredCourse = {
  title: "Spotting Misleading Marketing",
  description:
    "Become a sharper consumer. Learn how advertising actually works (it isn't lying by default), where the legal line sits between harmless puffery and illegal deception, the common tactics — weasel words, fake urgency, fine print, fake discounts, fake reviews, undisclosed #ads, and dark patterns — plus how to read health and statistics claims, spot AI-generated marketing, verify a claim yourself, and use your rights. Practical, non-partisan, and cited to the FTC, FDA, FCC, and leading media-literacy organizations.",
  lessons: [
    {
      slug: "how-advertising-works",
      title: "1 · How advertising works (it isn't lying by default)",
      section: "Foundations",
      body: `Marketing is **persuasion**, and persuasion is legal and normal. A business has every right to present its product in the best honest light — to make you *aware*, *interested*, and *willing to buy*. The goal of this course is **not** to make you cynical about all advertising. It's to make you skilled at telling honest persuasion from manipulation and deception.

Most ads lean on a few well-known persuasion levers:

- **Emotion** — happiness, status, fear of missing out, belonging.
- **Identity** — "people like you use this."
- **Social proof** — "everyone's buying it / look at these reviews."
- **Authority** — experts, awards, "doctor recommended."
- **Scarcity & urgency** — "limited time," "only 3 left."

None of those is illegal or even wrong on its own. The problem starts when persuasion crosses into **deception** — creating a false impression that's likely to change what a reasonable person does with their money. That line is the subject of the next lesson.

**Mindset for this course:** you don't have to distrust everything. You need a small set of habits that let you **pause, check, and decide** instead of reacting. A skilled consumer isn't paranoid — they're hard to fool.

**Check yourself.** Name three persuasion levers an ad might use that are perfectly legal.

## Sources
- Federal Trade Commission. (1983). FTC Policy Statement on Deception. https://www.ftc.gov/legal-library/browse/ftc-policy-statement-deception
- Federal Trade Commission. Truth in Advertising. https://www.ftc.gov/news-events/topics/truth-advertising`,
    },
    {
      slug: "puffery-vs-deceptive-vs-false",
      title: "2 · The legal line: puffery, deceptive, and false",
      section: "Foundations",
      body: `U.S. ad law turns on one core idea from the **FTC Policy Statement on Deception (1983)**: an ad is **deceptive** if it has a statement or omission that is **likely to mislead a consumer acting reasonably**, and that point is **material** — important to a buying decision. Three buckets help you sort what you see:

| Bucket | What it is | Legal status |
| --- | --- | --- |
| **Puffery** | Vague, subjective brag a reasonable person won't take literally — "the best coffee in town," "world's comfiest socks." | **Allowed.** No one can prove or disprove it, so it's not "likely to mislead." |
| **Deceptive** | Creates a false *impression* that's likely to mislead and matters to your decision — even if technically true, or true-but-misleading by omission. | **Illegal** under FTC Act §5. |
| **False** | A flatly untrue factual claim ("clinically proven to cure X" with no proof). | **Illegal**, and often the easiest to act against. |

The slippery middle is **deception**, because a claim can be **literally true and still deceptive** — e.g., burying the condition that makes the headline price impossible for most people. Specific, **measurable** claims ("3x faster," "clinically proven," "#1 dermatologist recommended") must be **backed by evidence**; vague brags need not be.

**Check yourself.** "World's best pizza" vs. "clinically proven to lower cholesterol 30%" — which is puffery and which needs proof, and why?

## Sources
- Federal Trade Commission. (1983). FTC Policy Statement on Deception. https://www.ftc.gov/legal-library/browse/ftc-policy-statement-deception
- Federal Trade Commission. Advertising FAQ's: A Guide for Small Business. https://www.ftc.gov/business-guidance/resources/advertising-faqs-guide-small-business`,
    },
    {
      slug: "weasel-words-and-up-to",
      title: "3 · Weasel words, \"up to\" claims, and the fine print",
      section: "Common tactics",
      body: `Some of the most common ways an ad stays *technically* truthful while leaving a false impression:

- **Weasel words** — soft qualifiers that quietly drain a claim of meaning: *helps*, *may*, *can*, *virtually*, *fights*, *supports*, *up to*, *as low as*, *based on*. "Helps support a healthy immune system" promises almost nothing measurable.
- **"Up to" claims** — "save **up to** 70%" or "lasts **up to** 10 hours" describes the *best possible* case, not the typical one. Even one item at 70% off makes the whole banner literally true. Mentally translate "up to X" as **"X is the ceiling, not the promise."**
- **The fine print / disclosures** — the asterisk that "takes back" the headline. The FTC's **.com Disclosures** guidance says a disclosure must be **clear and conspicuous** and *near* the claim it modifies — and crucially, **a disclosure can only qualify a claim, never cure a false one.** Fine print that flatly contradicts the headline doesn't make the ad legal.

The skill here is simple: **read the qualifier as carefully as the headline.** When a claim has an asterisk, the asterisk is usually where the real terms live.

**Check yourself.** Why does "save up to 70%" tell you almost nothing about what *you'll* actually save?

## Sources
- Federal Trade Commission. (2013). .com Disclosures: How to Make Effective Disclosures in Digital Advertising. https://www.ftc.gov/business-guidance/resources/com-disclosures-how-make-effective-disclosures-digital-advertising
- Federal Trade Commission. Advertising and Marketing Basics. https://www.ftc.gov/business-guidance/advertising-marketing`,
    },
    {
      slug: "urgency-scarcity-anchoring",
      title: "4 · Fake urgency, fake scarcity, and fake discounts",
      section: "Common tactics",
      body: `These tactics work by **rushing your decision** or **distorting your sense of value** so you don't stop to compare.

- **Fake urgency** — countdown timers that reset when you reload, "sale ends tonight!" that runs every night, "only for the next 10 minutes." Real deadlines exist; **manufactured** ones exist only to stop you from thinking.
- **Fake scarcity** — "only 2 left!", "37 people are viewing this." Sometimes true, often a script. Genuine scarcity doesn't evaporate the moment you close the tab.
- **Anchoring & fake "discounts"** — a high "**was**" price (the *anchor*) next to a lower "**now**" price makes the now-price feel like a steal. If the "was" price was never a real, regular selling price — or was inflated just to be crossed out — the "discount" is an illusion. The honest test: **is the "sale" price simply the normal price?**

How to defend yourself:

- **Slow the clock.** A deal that's only good if you decide *right now* is engineered to skip your judgment. Step away; if it's real, it'll survive a few minutes' thought.
- **Check the real price.** Compare the "was" price elsewhere or over time. Decide if the item is **worth the actual price**, ignoring the crossed-out number entirely.

**Check yourself.** What single question deflates most "was \$X, now \$Y" discount claims?

## Sources
- Federal Trade Commission. (1983). FTC Policy Statement on Deception. https://www.ftc.gov/legal-library/browse/ftc-policy-statement-deception
- Federal Trade Commission. (2022). Bringing Dark Patterns to Light (Staff Report). https://www.ftc.gov/reports/bringing-dark-patterns-light`,
    },
    {
      slug: "fake-reviews-and-astroturfing",
      title: "5 · Fake reviews, astroturfing, and undisclosed #ads",
      section: "Common tactics",
      body: `A huge amount of "social proof" online is bought, faked, or undisclosed. The law has caught up here, which makes this a place you have real protection.

- **Fake reviews & astroturfing.** "Astroturfing" is fake grassroots — a company manufacturing reviews or comments to look like independent praise (or trashing a rival). As of **2024 the FTC's Consumer Reviews and Testimonials Rule (16 CFR Part 465)** bans buying or selling fake reviews, insider reviews that hide the relationship, fake "independent" review sites a company secretly controls, and **buying fake followers or other fake indicators of social-media influence.** Violations can draw civil penalties.
- **Undisclosed #ads (influencers).** If someone is paid, gifted, or has any **material connection** to a brand, the **FTC Endorsement Guides** require them to **clearly disclose** it — a plain "#ad" or "sponsored" placed *with* the endorsement, not buried in a profile or behind "more." Vague tags like "sp," "collab," or "thanks [brand]" don't cut it. And you can't endorse something you never used, or make health claims the brand can't prove.

How to read reviews like a pro:

- **Distrust the extremes.** Floods of 5-star, same-day, similar-phrasing reviews are a flag; so are oddly generic raves.
- **Look for disclosure.** No "#ad" on an obviously promotional post is itself a warning.
- **Read the 3-star reviews** — they tend to be the most specific and honest.

**Check yourself.** What does an influencer have to disclose, and what is the simplest way to do it?

## Sources
- Federal Trade Commission. (2024). Rule on the Use of Consumer Reviews and Testimonials, 16 CFR Part 465. https://www.ftc.gov/legal-library/browse/rules/rule-use-consumer-reviews-testimonials
- Federal Trade Commission. Disclosures 101 for Social Media Influencers. https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers
- Federal Trade Commission. Endorsements, Influencers, and Reviews. https://www.ftc.gov/business-guidance/advertising-marketing/endorsements-influencers-reviews`,
    },
    {
      slug: "dark-patterns",
      title: "6 · Dark patterns: when the design is the trick",
      section: "Common tactics",
      body: `A **dark pattern** is an interface designed to **trick you into doing something you didn't mean to** — spend more, share more data, or stay subscribed. In its 2022 staff report **Bringing Dark Patterns to Light**, the FTC grouped the most common ones into four families:

- **Misleading or disguised ads** — an "ad" dressed up as a normal article, search result, or system message; a giant green "Download" button that isn't the real one.
- **Hard-to-cancel / subscription traps** — easy to sign up in one click, but cancelling means calls, mazes, or "are you *sure*?" guilt screens. (Signing up and cancelling should be roughly equally easy.)
- **Buried terms & junk fees** — the price balloons with "service," "convenience," or "processing" fees that only appear at the final checkout step (sometimes called **drip pricing**).
- **Tricked into sharing data** — pre-checked boxes, confusing "Accept all" vs. a hidden "Reject," and **confirmshaming** ("No thanks, I don't like saving money").

Defenses:

- **Watch the default.** Pre-checked boxes and the big bright button are chosen to benefit the seller, not you.
- **Find the total before you commit.** Hunt for the all-in price *before* entering payment details.
- **Before you subscribe, find the cancel path.** If it's hidden, that's the point — and a reason not to sign up.

**Check yourself.** Name two of the four dark-pattern families from the FTC report.

## Sources
- Federal Trade Commission. (2022). Bringing Dark Patterns to Light (Staff Report). https://www.ftc.gov/reports/bringing-dark-patterns-light
- Federal Trade Commission. (2022, Sept. 15). FTC Report Shows Rise in Sophisticated Dark Patterns. https://www.ftc.gov/news-events/news/press-releases/2022/09/ftc-report-shows-rise-sophisticated-dark-patterns-designed-trick-trap-consumers`,
    },
    {
      slug: "health-and-miracle-claims",
      title: "7 · Health, supplements, and \"miracle\" claims",
      section: "High-stakes claims",
      body: `Health and "miracle" claims deserve the most skepticism, because the stakes are your body and your money — and supplements are **not** approved by the FDA the way drugs are.

Know the rules:

- **Supplements aren't pre-approved.** Under the **Dietary Supplement Health and Education Act (DSHEA, 1994)**, the FDA does **not** evaluate a supplement for safety or effectiveness *before* it's sold. The maker is responsible for its own claims.
- **Structure/function vs. disease claims.** A supplement may make a **structure/function** claim ("supports bone health") but may **not** claim to **diagnose, treat, cure, or prevent a disease** ("cures arthritis"). The legally required disclaimer is the tell: *"This statement has not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease."* Seeing that line means **no agency vouched for the claim.**
- **"Miracle" red flags** (per the FTC/FDA): a single product that cures many unrelated conditions, "ancient secret"/"breakthrough" language, "doctors hate it," all-natural-so-it's-safe, money-back-guarantee-no-questions, and personal testimonials *instead of* evidence.

Defense: for anything you'd put in your body, **look for the disclaimer, separate "supports" from "cures," and check a primary source** (the next lessons show how) before trusting — or spending.

**Check yourself.** A supplement says it "cures diabetes." Why is that claim almost certainly illegal?

## Sources
- U.S. Food and Drug Administration. Structure/Function Claims. https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/structurefunction-claims
- U.S. Food and Drug Administration. Questions and Answers on Dietary Supplements. https://www.fda.gov/food/information-consumers-using-dietary-supplements/questions-and-answers-dietary-supplements
- Federal Trade Commission. Health Products Compliance Guidance. https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance`,
    },
    {
      slug: "misleading-stats-and-charts",
      title: "8 · Misleading statistics and charts",
      section: "High-stakes claims",
      body: `Numbers feel objective, which is exactly why misleading ones are so persuasive. The figure can be accurate while the *impression* is false. Common moves:

- **Percentages with no base** — "50% more!" *More than what?* "Reduces wrinkles 40%" — measured how, on how many people, vs. what?
- **Relative vs. absolute risk** — "cuts your risk in half!" can mean going from 2-in-a-million to 1-in-a-million. The **relative** change sounds huge; the **absolute** change is tiny. Always ask for the absolute numbers.
- **Cherry-picked comparisons** — a flattering baseline, a hand-picked competitor, or "results not typical" testimonials.
- **Truncated-axis charts** — a bar chart whose y-axis starts at 90 instead of 0 turns a trivial gap into a cliff. Glance at the axis before you trust the shape.
- **Correlation dressed as causation** — "users of our app sleep better" may just mean people who sleep well also buy the app.

Defense questions: **Compared to what? Out of how many? Measured by whom? Does the chart's axis start at zero?** "4 out of 5 dentists" means little without knowing how many were asked and how the question was framed.

**Check yourself.** Why can "cuts your risk in half" be technically true and still misleading?

## Sources
- News Literacy Project. Resource Library (evaluating evidence and data). https://newslit.org/educators/resources/
- Stanford Civic Online Reasoning. Curriculum (evaluating evidence). https://cor.stanford.edu/`,
    },
    {
      slug: "ai-and-deepfake-marketing",
      title: "9 · AI-generated and deepfake marketing",
      section: "High-stakes claims",
      body: `AI can now generate realistic faces, voices, and "customer" videos cheaply. That supercharges old tricks: a fake "satisfied customer," a celebrity who *appears* to endorse a product they've never heard of, or a flood of unique-looking fake reviews.

What to watch for:

- **Synthetic endorsements & deepfakes.** A familiar face or voice promoting a too-good-to-be-true product — especially get-rich-quick schemes and miracle cures — is a classic scam, now harder to spot. The fact that you *recognize* the person is not proof they endorsed it.
- **AI-generated reviews and "people."** Stock-perfect headshots, oddly generic five-star praise, and review floods can all be machine-made. (And remember: the FTC's 2024 rule treats fake reviews and fake influence indicators as illegal regardless of who — or what — wrote them.)
- **Tells fade.** Warped hands, garbled text, unnatural blinking, or off lip-sync can give a fake away — but the technology improves fast, so **don't rely on tells alone.**

The durable defense isn't spotting pixels — it's **provenance and motive**: *Who is actually behind this, and what do they want me to do?* The verification habits in the next lesson work whether the content is human- or AI-made.

**Check yourself.** Why is "I recognized the celebrity" a weak reason to trust an endorsement video?

## Sources
- Federal Trade Commission. (2024). Rule on the Use of Consumer Reviews and Testimonials, 16 CFR Part 465. https://www.ftc.gov/legal-library/browse/rules/rule-use-consumer-reviews-testimonials
- Federal Trade Commission. Consumer Advice: How to Avoid Scams. https://consumer.ftc.gov/scams
- News Literacy Project. RumorGuard. https://www.rumorguard.org/`,
    },
    {
      slug: "how-to-verify-a-claim",
      title: "10 · How to verify a claim (and follow the money)",
      section: "Verify & act",
      body: `Here is the core skill of the course — a fast routine for checking a marketing claim before you believe or buy.

1. **Follow the money: who's paying / who benefits?** Is this an ad, an affiliate link, a sponsored post, or a paid placement? On TV and radio, the **FCC's sponsorship-identification rule (47 CFR 73.1212)** requires paid material to be disclosed. Online, look for "#ad," "sponsored," or affiliate notices. **A source that profits from your "yes" is not neutral.**
2. **Read laterally.** Don't evaluate a site by how polished *it* looks. Instead, open a new tab and see what **independent, reputable sources** say about the seller and the claim — the fact-checker's habit Stanford's Civic Online Reasoning calls **lateral reading.**
3. **Go to the primary source.** A claim citing "a study" should let you find the actual study (who funded it, how many people, peer-reviewed?). "Clinically proven" with no findable study is a flag.
4. **Reverse-image-search the proof.** Drop a "before/after," "customer photo," or endorsement image into a reverse-image search to see if it's stock, stolen, or AI-generated.
5. **Check independent reviews and complaints** — across multiple sources, not just the seller's own site, watching for the fake-review tells from Lesson 5.

You don't have to run all five every time. For a small purchase, "follow the money" and a quick lateral read are often enough. For health, money, or anything you'd act on seriously, do them all.

**Check yourself.** What does "lateral reading" mean, and why is it better than judging a site by its own polish?

## Sources
- Stanford Civic Online Reasoning. Lateral Reading. https://cor.stanford.edu/curriculum/collections/lateral-reading/
- News Literacy Project. Checkology / Resource Library. https://newslit.org/educators/resources/
- Federal Communications Commission. Sponsorship Identification Rules. https://www.fcc.gov/consumers/guides/sponsorship-identification-rules`,
    },
    {
      slug: "your-rights-and-where-to-report",
      title: "11 · Your rights and where to report",
      section: "Verify & act",
      body: `Spotting deception is half the skill; the other half is knowing your **rights** and that reporting **works** — your report helps agencies build cases that protect everyone.

Who handles what:

- **Federal Trade Commission (FTC)** — the main federal cop for deceptive and unfair advertising, fake reviews, dark patterns, and most scams. Report consumer fraud and bad ads at **ReportFraud.ftc.gov**; identity theft at **IdentityTheft.gov**.
- **Food and Drug Administration (FDA)** — false or dangerous **health, drug, supplement, and food** claims.
- **Federal Communications Commission (FCC)** — broadcast **sponsorship-ID** violations, plus robocalls/robotexts and phone scams (**fcc.gov/complaints**).
- **Your State Attorney General** — every state has a **consumer-protection** office that takes complaints and can act on local scams and deceptive businesses (find yours via your state's AG website or **usa.gov**).
- **The Better Business Bureau (BBB)** — not a government agency, but a place to file and research complaints.

Practical habits: **keep records** (screenshots, receipts, the ad itself, order numbers), report **even small** scams (patterns build cases), and dispute fraudulent charges with your **bank or card issuer**. You are not powerless, and you are not alone — a five-minute report can stop someone else from being hurt.

**Check yourself.** Where would you report a deceptive ad, and where would you report a false supplement health claim?

## Sources
- Federal Trade Commission. Report Fraud. https://reportfraud.ftc.gov/
- Federal Trade Commission. Consumer Advice. https://consumer.ftc.gov/
- USA.gov. State Consumer Protection Offices. https://www.usa.gov/state-consumer
- Federal Communications Commission. Consumer Complaint Center. https://www.fcc.gov/complaints`,
    },
    {
      slug: "practice-tactics",
      title: "12 · Practice: name the tactic",
      section: "Verify & act",
      exercise: {
        instructions: "Fill in each blank, then check. Spelling and capitalization are forgiving.",
        items: [
          { prompt: "Vague, subjective brags like \"world's best coffee\" that the law allows are called ___.", answer: "puffery", explanation: "Puffery isn't 'likely to mislead' a reasonable person, so it's legal (FTC)." },
          { prompt: "Soft qualifiers like \"helps,\" \"may,\" and \"up to\" that quietly drain a claim of meaning are ___ words.", answer: "weasel", explanation: "Weasel words keep an ad technically truthful while promising little." },
          { prompt: "A fake \"grassroots\" campaign — a company manufacturing reviews to look independent — is called ___.", answer: "astroturfing", explanation: "The FTC's 2024 reviews rule (16 CFR 465) bans fake and undisclosed reviews." },
          { prompt: "An interface designed to trick you into spending or sharing more is a ___ pattern.", answer: "dark", explanation: "The FTC's 2022 report grouped these into four common families." },
          { prompt: "Reading \"up to 70% off\" correctly: treat 70% as the ___ , not the promise.", answer: "ceiling", accept: ["maximum", "max", "best case"], explanation: "'Up to X' describes the best possible case, not the typical one." },
        ],
      },
    },
    {
      slug: "practice-verify",
      title: "13 · Practice: verify and act",
      section: "Verify & act",
      exercise: {
        instructions: "Fill in each blank, then check.",
        items: [
          { prompt: "The first question to ask about any claim — who's paying or who ___ — reveals bias.", answer: "benefits", accept: ["profits"], explanation: "A source that profits from your 'yes' is not neutral." },
          { prompt: "Opening a new tab to see what independent sources say about a seller is called ___ reading.", answer: "lateral", explanation: "Stanford's Civic Online Reasoning teaches lateral reading as the fact-checker's habit." },
          { prompt: "A supplement label must carry a disclaimer because the ___ does not pre-approve supplements (acronym).", answer: "FDA", accept: ["F.D.A."], explanation: "Under DSHEA (1994), supplements aren't evaluated for safety/effectiveness before sale." },
          { prompt: "To check if a 'customer photo' is stock or AI-made, do a reverse-___ search.", answer: "image", explanation: "Reverse-image search traces a photo to its real origin." },
          { prompt: "The main U.S. agency for deceptive ads, fake reviews, and most scams (acronym).", answer: "FTC", accept: ["F.T.C.", "federal trade commission"], explanation: "Report deceptive ads and fraud at ReportFraud.ftc.gov." },
        ],
      },
    },
    {
      slug: "spotting-misleading-marketing-quiz",
      title: "14 · Check your understanding",
      section: "Verify & act",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "Which statement is legal \"puffery\" rather than a claim that needs proof?",
            options: [
              "\"Clinically proven to lower cholesterol 30%\"",
              "\"The world's most comfortable socks\"",
              "\"#1 dermatologist recommended\"",
              "\"Cures arthritis in 7 days\"",
            ],
            correctIndex: 1,
            explanation:
              "Vague, subjective brags a reasonable person won't take literally are puffery and legal. Specific, measurable claims must be backed by evidence.",
            sourceLessonSlug: "puffery-vs-deceptive-vs-false",
          },
          {
            prompt: "Under the FTC's deception standard, an ad is deceptive when it is…",
            options: [
              "Annoying or repetitive",
              "Likely to mislead a reasonable consumer about something material",
              "Aimed at children",
              "Longer than 30 seconds",
            ],
            correctIndex: 1,
            explanation:
              "Per the FTC Policy Statement on Deception, the test is whether it's likely to mislead a reasonable consumer on a point material to their decision — even if technically true.",
            sourceLessonSlug: "puffery-vs-deceptive-vs-false",
          },
          {
            prompt: "What does a \"save up to 70%\" banner actually promise you?",
            options: [
              "Everything is 70% off",
              "You'll save at least 70%",
              "70% is the best possible case, not the typical one",
              "The average discount is 70%",
            ],
            correctIndex: 2,
            explanation:
              "\"Up to\" describes the ceiling. Even one item at 70% off makes the banner literally true — read the qualifier as carefully as the headline.",
            sourceLessonSlug: "weasel-words-and-up-to",
          },
          {
            prompt: "A paid influencer posts about a product. What does the FTC require?",
            options: [
              "Nothing, if they liked it",
              "A clear disclosure like \"#ad\" placed with the endorsement",
              "A disclosure only in their profile bio",
              "Approval from the FTC first",
            ],
            correctIndex: 1,
            explanation:
              "The FTC Endorsement Guides require a clear, conspicuous disclosure of any material connection, placed with the endorsement — not hidden in a bio or behind 'more.'",
            sourceLessonSlug: "fake-reviews-and-astroturfing",
          },
          {
            prompt: "As of 2024, what does the FTC's Consumer Reviews and Testimonials Rule (16 CFR 465) ban?",
            options: [
              "All online reviews",
              "Buying or selling fake reviews and fake indicators of social-media influence",
              "Negative reviews",
              "Reviews written by customers",
            ],
            correctIndex: 1,
            explanation:
              "The rule bans fake and undisclosed reviews, secretly company-controlled 'independent' review sites, and buying fake followers/influence — with civil penalties.",
            sourceLessonSlug: "fake-reviews-and-astroturfing",
          },
          {
            prompt: "An interface that makes signing up one click but cancelling a maze is an example of…",
            options: ["Puffery", "A dark pattern", "Lateral reading", "A structure/function claim"],
            correctIndex: 1,
            explanation:
              "Hard-to-cancel/subscription traps are one of the four dark-pattern families in the FTC's 2022 report; sign-up and cancel should be roughly equally easy.",
            sourceLessonSlug: "dark-patterns",
          },
          {
            prompt: "A supplement claims it \"cures diabetes.\" Why is that almost certainly illegal?",
            options: [
              "Supplements can't mention any body part",
              "Supplements may make structure/function claims but not claim to cure a disease",
              "The word 'diabetes' is trademarked",
              "Only doctors can sell supplements",
            ],
            correctIndex: 1,
            explanation:
              "Under DSHEA, supplements may say they 'support' a function but may not claim to diagnose, treat, cure, or prevent a disease — and the FDA doesn't pre-approve them.",
            sourceLessonSlug: "health-and-miracle-claims",
          },
          {
            prompt: "\"Cuts your risk in half!\" can be technically true but misleading because…",
            options: [
              "Risk can't be measured",
              "It may hide a tiny absolute change (e.g., 2-in-a-million to 1-in-a-million)",
              "Halving is always impossible",
              "It's a form of puffery",
            ],
            correctIndex: 1,
            explanation:
              "A big relative change can be a tiny absolute one. Always ask 'compared to what, and out of how many?'",
            sourceLessonSlug: "misleading-stats-and-charts",
          },
          {
            prompt: "What is \"lateral reading\"?",
            options: [
              "Reading an ad twice",
              "Opening new tabs to see what independent sources say about a source",
              "Skimming the fine print",
              "Reading reviews bottom-to-top",
            ],
            correctIndex: 1,
            explanation:
              "Lateral reading (Stanford Civic Online Reasoning) judges a source by what trusted others say about it — not by how polished the source looks itself.",
            sourceLessonSlug: "how-to-verify-a-claim",
          },
          {
            prompt: "Where would you report a deceptive advertisement or a scam?",
            options: [
              "The FCC only",
              "The FTC (ReportFraud.ftc.gov), and your state Attorney General",
              "Nowhere — nothing can be done",
              "The company that ran the ad",
            ],
            correctIndex: 1,
            explanation:
              "The FTC is the main agency for deceptive ads and scams; your state AG's consumer-protection office also takes complaints. Reporting helps build cases.",
            sourceLessonSlug: "your-rights-and-where-to-report",
          },
        ],
      },
    },
  ],
};
