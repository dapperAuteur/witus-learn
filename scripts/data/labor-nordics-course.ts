// Authored "Sweden & Denmark: The Wage Floor That Isn't a Law" — Wave 1 of the Workers' Rights
// track (plans/future-courses/workers-rights-track-proposal.md). A country course hanging off the
// anchor, "The History of Unions: America and the World" (scripts/data/history-of-unions-course.ts).
// The anchor gives ONE lesson to the Nordics (lesson 20, "when the union pays your unemployment
// cheque") and supplies the four questions; this course goes deep on TWO countries and CROSS-LINKS
// the anchor rather than re-telling it. Sibling country course: "Germany: Workers on the Board".
//
// Sourcing discipline (the load-bearing part of this file):
//   * EVERY figure carries a YEAR, and the course says which country each claim is about. Sweden is
//     NOT Denmark and the course refuses to blur them into "Scandinavia." Norway appears only where
//     it earns its place — as the natural experiment (a Nordic country WITHOUT the Ghent system).
//   * Density/coverage figures are OECD/AIAS ICTWSS, given as rounded "around X% (year)" with the
//     measurement caveat stated, exactly as the anchor and the Germany course do. The Swedish
//     2006→2008 density DROP after the 2007 a-kassa fee reform is attributed to Anders Kjellberg
//     (Lund University), who is the authority on Swedish density and documented it — it is the
//     strongest single piece of evidence for the Ghent effect, so the course leans on it by name.
//   * THE STATUTES ARE NAMED, NOT INVENTED. Sweden has no statutory national minimum wage; the wage
//     floor is set by collective agreement. Sweden's Co-determination Act (Medbestämmandelagen, MBL,
//     SFS 1976:580) carries the peace obligation (fredsplikt) and permits sympathy action in support
//     of a LAWFUL primary dispute — the course states this at the level of the concept and the named
//     Act, and does NOT assert a paragraph number it could not verify. No Danish or Swedish statute
//     clause, agreement text, or court holding is quoted that was not confirmed; where the record is
//     contested or unretrieved, the course says so in-lesson.
//   * THE CONTRAST THAT MAKES THE COURSE: sympathy/secondary action is LEGAL in Sweden and Denmark
//     and ILLEGAL in the US — the anchor teaches Taft-Hartley §8(b)(4) banning it (lesson 13), and
//     this course hangs the Nordic contrast off that. Cross-links the anchor, does not restate it.
//   * THE ONGOING DISPUTE: the Tesla strike in Sweden (from Oct 2023) is taught as ONGOING and
//     CONTESTED. Every claim is dated, the course declares NO WINNER, and it tells the learner to
//     re-check. The license-plate court fight is described at a high level rather than asserting a
//     back-and-forth of interim rulings the author could not fully verify.
//   * THE COUNTERINTUITIVE LIMIT: the EU Adequate Minimum Wages Directive (2022/2041) was resisted
//     BY THE NORDIC UNIONS THEMSELVES, and Denmark (backed by Sweden) challenged it at the CJEU
//     (Case C-19/23). The course states the challenge exists and was pending; it does NOT assert a
//     final CJEU outcome it could not confirm.
//   * NOT A BROCHURE. Erosion is a full section: falling density, the a-kassa reform's damage,
//     migrant and platform workers sitting OUTSIDE the agreements, and flexicurity taught as a
//     TRADE (and under strain — the Danish dagpenge benefit period was cut from four years to two),
//     not a free lunch.

import type { AuthoredCourse } from "./authored-course";

export const LABOR_NORDICS_COURSE: AuthoredCourse = {
  title: "Sweden & Denmark: The Wage Floor That Isn't a Law",
  description:
    "In Sweden and Denmark there is almost no statutory national minimum wage — and that is not an oversight. It is the design. The wage floor is a contract, negotiated industry by industry between unions and employers, and the state deliberately stays out. For a student raised on \"the government sets the floor,\" this is the most disorienting fact in the whole Workers' Rights track, and this course is built around it. You will learn the plumbing that makes it work: the Ghent system, in which unemployment insurance is run through union-linked funds, which pushes union membership toward two-thirds of the workforce — and the natural experiment that proves it, because Norway, a Nordic country WITHOUT Ghent, sits around half. You will see the strongest evidence for that mechanism anywhere: when Sweden raised its unemployment-fund fees in 2007, density fell, fast. You will meet the two agreements by which the state stepped back on purpose — Saltsjöbaden (Sweden, 1938) and the September Compromise (Denmark, 1899) — and the Danish bargain called flexicurity: easy to fire, well cushioned if you are, and actively helped back to work, taught as a trade rather than a fairy tale, and honestly, as a trade under strain. You will learn the sharpest single comparison in the track: sympathy strikes, which US law bans, are legal here — and you will watch the model defend itself in real time in the still-unresolved 2023 Tesla dispute in Sweden. Then the honest limits: density is falling, migrant and platform workers sit outside the agreements, and — the lesson nobody expects — the Nordic unions themselves fought an EU law that would have guaranteed a minimum wage, because a legal floor would undercut the thing they built. Cited to OECD/AIAS, ETUI, Eurofound, the national confederations, and the EU directive itself. A country course in the Workers' Rights track — take \"The History of Unions: America and the World\" first.",
  lessons: [
    // ────────────── SECTION 1 · THE WAGE FLOOR THAT ISN'T A LAW ──────────────
    {
      slug: "nordic-no-minimum-wage",
      title: "1 · The fact that shouldn't be true: no minimum-wage law",
      section: "Section 1 · The wage floor that isn't a law",
      body: `Here is a sentence that stops most American students cold.

**Sweden and Denmark have no statutory national minimum wage.** No federal floor. No number written into a law that an employer may not pay below. There is no Swedish equivalent of the U.S. federal minimum wage, and no Danish one either.

Your first instinct is almost certainly wrong. You are probably imagining a low-wage free-for-all — no floor means no protection, means workers getting paid whatever a boss can get away with. **That is exactly backwards.** A full-time worker in Sweden or Denmark is, on the whole, better protected on pay than a worker in a U.S. state sitting on the $7.25 federal minimum. The floor is real, it is high, and it covers almost everyone.

**It is just not a law. It is a contract.**

In Sweden and Denmark, minimum pay is set by **collective agreement** — union and employers, negotiating industry by industry — and there are hundreds of those agreements, each with its own floor for its own sector. A cleaner, a bus driver, a hotel worker, a metalworker: each has a minimum, and each minimum was negotiated, not legislated. The government did not set it. The government, by long and deliberate tradition, was not in the room.

**This is the single most important idea in the course, so sit with how strange it is.** In the American mental model, a *protection* is a *law*. If you want workers to have a wage floor, you pass a statute; if you want the floor higher, you amend the statute. The whole fight happens in a legislature. In the Nordic model, the protection is real but the legislature is barely involved. **The floor is enforced the way a contract is enforced, not the way a criminal law is enforced** — and the people who wrote it are the people it covers.

Why would a country do it this way on purpose? Because a floor you *negotiated* is a floor you can defend and update every few years at the bargaining table, without needing to win a national election first. And because — as you will see in Section 6 — a floor written into *law* can quietly become a *ceiling*: if the state declares "€X is adequate," an employer has an argument for paying exactly €X and not a krona more. A negotiated floor has a union on the other side of it whose entire job is to push it up.

**Two cautions before we go further, because a course that hides its caveats is selling something.**

First: "no minimum wage" is a headline, and headlines round off. A tiny number of edge cases and sector-specific rules exist, and the picture is not literally "zero law touches pay." But the load-bearing fact — *there is no single national statutory minimum wage the way the U.S., the U.K., Germany, or France have one* — is true and is the whole point.

Second, and this is the through-line of the entire course: **Sweden is not Denmark.** They share a family resemblance and an American tour guide will call both of them "Scandinavia" and move on. This course will not. They organize their unemployment funds differently, they made their founding peace with employers in different decades and different ways, and they are under different kinds of strain right now. Every time it matters, this course will tell you *which country* it is talking about.

:::reveal Sweden and Denmark have no statutory national minimum wage. Where does the wage floor come from instead — and why is that not the same as "no floor"? ||| It comes from collective agreements — unions and employers negotiate a minimum for each industry, so there are hundreds of sector floors rather than one national law. It is a strong, high floor that covers almost everyone; it is simply enforced as a *contract* the parties wrote, not as a statute a legislature passed.

## Sources
- OECD/AIAS. (n.d.). *ICTWSS database — country notes: Sweden; Denmark*. Organisation for Economic Co-operation and Development. https://www.oecd.org/en/data/datasets/oecd-aias-ictwss-database.html
- European Commission. (2022). *Directive (EU) 2022/2041 on adequate minimum wages in the European Union* [recitals on Member States without statutory minimum wages]. EUR-Lex. https://eur-lex.europa.eu/eli/dir/2022/2041/oj
- Eurofound. (n.d.). *Sweden: Statutory minimum wages* [notes that Sweden has no statutory minimum wage; pay floors set by collective agreement]. European Foundation for the Improvement of Living and Working Conditions. https://www.eurofound.europa.eu/en/topic/minimum-wage`,
      recallContent: [
        {
          prompt: "In Sweden and Denmark, what sets the minimum wage, and who writes it?",
          answer:
            "Collective agreements, negotiated industry by industry between unions and employers — so there are hundreds of sector-level floors, each written by the union and the employers it covers, not by the legislature. Neither country has a single statutory national minimum wage.",
        },
        {
          prompt: "Why might a NEGOTIATED wage floor be more durable than a LEGISLATED one, in this model's own logic?",
          answer:
            "Because it can be defended and raised every bargaining round without first winning a national election, and because a floor written into law risks becoming a ceiling — a union on the other side of a negotiated floor exists to push it up.",
        },
      ],
    },
    {
      slug: "nordic-four-questions",
      title: "2 · The four questions, asked of Sweden and Denmark",
      section: "Section 1 · The wage floor that isn't a law",
      body: `If you have taken **The History of Unions: America and the World** — the anchor of this track — you already own the tool. It ends by handing you four questions you can ask of any country:

1. **Who is allowed to organise?**
2. **Who is excluded?**
3. **Who bargains with whom, and at what level?**
4. **What happens to you if you try?**

*(Haven't taken it? You can follow this course without it, but take it after — it is where the comparative frame comes from, and this course does not repeat it. The anchor's lesson 20, "The Nordics: when the union pays your unemployment cheque," is the one-paragraph version of everything here; this course is the deep version, for two countries, kept apart.)*

Here are Sweden's and Denmark's answers in advance. Everything after this is the detail.

**Q1 — Who is allowed to organise?** Essentially everyone, easily, and with very high take-up. This is where the startling number lives. In the early 2020s, trade-union density — the share of workers who are union *members* — was around **65% in Sweden** and around **67% in Denmark** (OECD/AIAS ICTWSS, figures for roughly 2019–2022). Compare that to **10.0%** in the United States in 2025 (Bureau of Labor Statistics [BLS], 2026). But hold the applause: "everyone may organise" is *also* true in plenty of countries stuck at 10% density, so the freedom to organise is not what explains the number. Section 2 finds the thing that does, and it is a piece of plumbing, not a national personality trait.

**Q2 — Who is excluded?** Fewer people than in the U.S., but the exclusions are real and you should know them before anyone sells you a fairy tale. The collective-agreement floor only protects you if there *is* an agreement covering your workplace — and coverage, while very high (Sweden around **88%**, Denmark around **82%**, OECD/AIAS, ~2018–2019), is not universal. The people outside it are disproportionately **migrant workers, platform/gig workers, and employees of firms that never signed an agreement** — and because the floor is a contract rather than a law, being outside the contract can mean being outside the floor entirely. That is Section 6, and it is the honest heart of the course.

**Q3 — Who bargains with whom, and at what level?** This is the question the Nordics answer differently from America, and it has two parts:
- **The level:** bargaining is largely **sectoral** (Sweden) and a mix of sectoral and cross-sectoral (Denmark) — a union federation and an employers' federation set terms for a whole industry at once, which is why coverage far exceeds any single workplace vote.
- **The referee:** there mostly *isn't* one. Where the U.S. has the National Labor Relations Board and Germany has a dense statute, Sweden and Denmark run on **self-regulation** — the two sides govern the labour market by agreement, and the state stays out by tradition. Section 3 tells you the two founding treaties that set that up: **Saltsjöbaden (Sweden, 1938)** and the **September Compromise (Denmark, 1899)**.

**Q4 — What happens to you if you try?** Broadly, you are protected — and, unusually, your *side* is allowed to fight hard. The weapon that American law bans, the **sympathy strike**, is legal here, and Section 4 makes that the sharpest comparison in the whole track. Section 5 then watches it used, live, against a company that won't sign.

:::reveal Sweden's and Denmark's union DENSITY is around two-thirds. Why does "everyone is allowed to organise" NOT explain that number? ||| Because the freedom to organise is also true in many countries stuck near 10% density (the U.S. among them). Legal freedom to join a union is common; two-thirds actually joining is rare. So the high number must be explained by something other than the mere legal right — a specific institution that makes joining the default. That institution is the Ghent system (Section 2).

## Sources
- OECD/AIAS. (n.d.). *ICTWSS database — country notes: Sweden; Denmark; Norway*. Organisation for Economic Co-operation and Development. https://www.oecd.org/en/data/datasets/oecd-aias-ictwss-database.html
- Bureau of Labor Statistics. (2026, February 18). *Union members — 2025* (USDL-26-0200). U.S. Department of Labor. https://www.bls.gov/news.release/pdf/union2.pdf
- ETUI / Worker Participation. (n.d.). *Sweden; Denmark: National industrial relations*. European Trade Union Institute. https://www.worker-participation.eu/national-industrial-relations/countries`,
      recallContent: [
        {
          prompt: "Roughly what were union density rates in Sweden and Denmark (early 2020s) and the US (2025), with sources?",
          answer:
            "Around 65% in Sweden and around 67% in Denmark (OECD/AIAS ICTWSS, ~2019–2022), against 10.0% in the United States in 2025 (BLS, 2026).",
        },
        {
          prompt: "What is the 'referee' difference between the US/German systems and the Nordic one (Q3)?",
          answer:
            "The U.S. has the NLRB and Germany has a dense statute; Sweden and Denmark largely have no state referee. The two sides self-regulate the labour market by agreement, and the state stays out by tradition — set up by Saltsjöbaden (1938) and the September Compromise (1899).",
        },
      ],
    },
    {
      slug: "nordic-quiz-1",
      title: "Section 1 quiz · The floor that isn't a law",
      section: "Section 1 · The wage floor that isn't a law",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is true about the national minimum wage in Sweden and Denmark?",
            options: [
              "It is one of the highest statutory minimum wages in the world",
              "There is essentially no statutory national minimum wage — the wage floor is set by collective agreement",
              "It is set by the EU and applied identically in both countries",
              "It exists in Denmark but not in Sweden",
            ],
            correctIndex: 1,
            explanation:
              "Neither country has a single statutory national minimum wage. Pay floors are negotiated industry by industry in collective agreements — a contract, not a law.",
            sourceLessonSlug: "nordic-no-minimum-wage",
          },
          {
            prompt: "An American student hears 'no minimum-wage law' and assumes wages must be terrible. Why is that backwards?",
            options: [
              "Because Sweden and Denmark actually do have a secret statutory minimum",
              "Because the collective-agreement floor is real, high, and covers almost everyone — a full-time worker is generally better protected than one on the $7.25 US federal floor",
              "Because wages don't matter in the Nordic model",
              "Because the government pays everyone's wages directly",
            ],
            correctIndex: 1,
            explanation:
              "No statutory floor does not mean no floor. The negotiated floor is strong and near-universal; it is simply enforced as a contract rather than a statute.",
            sourceLessonSlug: "nordic-no-minimum-wage",
          },
          {
            prompt: "In this model's own logic, why prefer a NEGOTIATED wage floor to a LEGISLATED one?",
            options: [
              "It is cheaper for the government to administer",
              "It can be raised each bargaining round without winning a national election, and it avoids a legal floor quietly becoming a ceiling",
              "It applies only to union members, keeping costs down",
              "It is required by the Swedish constitution",
            ],
            correctIndex: 1,
            explanation:
              "A negotiated floor has a union on the other side whose job is to push it up; a statutory 'adequate' figure can become the number employers pay and no more.",
            sourceLessonSlug: "nordic-no-minimum-wage",
          },
          {
            prompt: "Roughly what was trade-union density in Sweden in the early 2020s (OECD/AIAS)?",
            options: ["About 10%", "About 30%", "About 65%", "About 95%"],
            correctIndex: 2,
            explanation:
              "Around 65% in Sweden (OECD/AIAS ICTWSS, ~2019–2022) — against 10.0% in the US in 2025 (BLS).",
            sourceLessonSlug: "nordic-four-questions",
          },
          {
            prompt: "Roughly what was trade-union density in Denmark in the early 2020s (OECD/AIAS)?",
            options: ["About 11%", "About 25%", "About 67%", "About 90%"],
            correctIndex: 2,
            explanation:
              "Around 67% in Denmark (OECD/AIAS ICTWSS, ~2019–2022). Close to Sweden's, but the course keeps the two countries distinct throughout.",
            sourceLessonSlug: "nordic-four-questions",
          },
          {
            prompt: "Why does 'everyone is allowed to organise' fail to explain Sweden's and Denmark's ~two-thirds density?",
            options: [
              "Because the right to organise is also present in many countries stuck near 10% density — legal freedom is common, two-thirds actually joining is rare",
              "Because density is actually much lower than two-thirds",
              "Because the government forces workers to join",
              "Because only migrant workers may organise",
            ],
            correctIndex: 0,
            explanation:
              "The legal right to organise is nearly universal and does not predict high membership. Something else makes joining the default — the Ghent system.",
            sourceLessonSlug: "nordic-four-questions",
          },
          {
            prompt: "Roughly how high is collective-bargaining COVERAGE in Sweden and Denmark (OECD/AIAS, ~2018–2019)?",
            options: [
              "Sweden ~88%, Denmark ~82%",
              "Sweden ~30%, Denmark ~25%",
              "Sweden ~11%, Denmark ~10%",
              "Both exactly 100%",
            ],
            correctIndex: 0,
            explanation:
              "Coverage is very high — around 88% in Sweden and 82% in Denmark — but NOT universal, and the people outside it matter (Section 6).",
            sourceLessonSlug: "nordic-four-questions",
          },
          {
            prompt: "Who is disproportionately EXCLUDED from the collective-agreement floor (Q2)?",
            options: [
              "Executives and civil servants",
              "Migrant workers, platform/gig workers, and employees of firms that never signed an agreement",
              "Nobody — coverage is universal",
              "Anyone over 50",
            ],
            correctIndex: 1,
            explanation:
              "Because the floor is a contract, being outside the contract can mean being outside the floor. Migrant, platform, and uncovered-firm workers are the exposed groups.",
            sourceLessonSlug: "nordic-four-questions",
          },
          {
            prompt: "What does 'self-regulation' mean for Q3 (the referee) in Sweden and Denmark?",
            options: [
              "A government board like the US NLRB certifies every union",
              "There largely is no state referee — the two sides govern the labour market by agreement, and the state stays out by tradition",
              "The EU sets all wages",
              "Employers alone set the rules",
            ],
            correctIndex: 1,
            explanation:
              "Where the US has the NLRB and Germany a dense statute, the Nordic model runs on self-regulation, set up by Saltsjöbaden (1938) and the September Compromise (1899).",
            sourceLessonSlug: "nordic-four-questions",
          },
          {
            prompt: "The course repeatedly insists on one methodological habit about Sweden and Denmark. Which?",
            options: [
              "Treat them as interchangeable 'Scandinavia'",
              "Keep them distinct — they run their unemployment funds differently, made their founding peace in different decades, and are under different strains",
              "Assume Denmark always leads and Sweden follows",
              "Ignore Norway entirely",
            ],
            correctIndex: 1,
            explanation:
              "Sweden is not Denmark. The course names which country each claim is about, every time it matters.",
            sourceLessonSlug: "nordic-no-minimum-wage",
          },
          {
            prompt: "Which of the four anchor questions do Sweden and Denmark answer most distinctively on the WEAPONS side (Q4)?",
            options: [
              "They ban all strikes",
              "They permit the sympathy strike — a weapon US law bans — so a dispute can spread to firms that are not the direct target",
              "They require government approval before any strike",
              "They allow only individual, not collective, action",
            ],
            correctIndex: 1,
            explanation:
              "Legal sympathy action is the sharpest single comparison in the track (Section 4), and Section 5 watches it used against Tesla.",
            sourceLessonSlug: "nordic-four-questions",
          },
          {
            prompt: "Why does the course say Norway will appear as a 'natural experiment'?",
            options: [
              "Because Norway has the highest density in the world",
              "Because Norway is a Nordic country WITHOUT the Ghent system, so its lower density helps isolate what Ghent actually does",
              "Because Norway has a statutory minimum wage",
              "Because Norway is not in Scandinavia",
            ],
            correctIndex: 1,
            explanation:
              "Same regional culture, different plumbing: Norway lacks Ghent and sits around half, versus Sweden/Denmark's two-thirds. That contrast is the evidence (Section 2).",
            sourceLessonSlug: "nordic-four-questions",
          },
          {
            prompt: "The anchor course's lesson 20 relates to this course how?",
            options: [
              "It contradicts this course",
              "It is the one-paragraph version; this course is the deep version for two countries, kept distinct, and cross-links rather than repeats it",
              "It covers Germany, not the Nordics",
              "It is an exercise, not a lesson",
            ],
            correctIndex: 1,
            explanation:
              "Take the anchor first for the four questions and the overview; this course goes deep and does not restate the anchor.",
            sourceLessonSlug: "nordic-four-questions",
          },
          {
            prompt: "Why does the course flag a caveat even on the headline 'no minimum wage'?",
            options: [
              "Because the headline is actually false",
              "Because a course that hides its caveats is selling something — a few edge cases exist, but the load-bearing fact (no single national statutory minimum) is true",
              "Because Denmark secretly has one",
              "Because the EU sets the wage",
            ],
            correctIndex: 1,
            explanation:
              "Headlines round off. The honest version notes edge cases while keeping the real, load-bearing fact front and centre.",
            sourceLessonSlug: "nordic-no-minimum-wage",
          },
          {
            prompt: "In the American mental model the course contrasts with, a 'protection' is fundamentally a…",
            options: [
              "Contract the workers wrote",
              "Law passed by a legislature — so the whole fight happens in a legislature",
              "Decision by an employers' association",
              "Ruling by a labour court",
            ],
            correctIndex: 1,
            explanation:
              "In the US model a protection is a statute; in the Nordic model the protection is a negotiated contract and the legislature is barely involved. That inversion is the course's core idea.",
            sourceLessonSlug: "nordic-no-minimum-wage",
          },
        ],
      },
    },

    // ────────────── SECTION 2 · THE PLUMBING: THE GHENT SYSTEM ──────────────
    {
      slug: "nordic-ghent-system",
      title: "3 · The Ghent system: who runs the unemployment fund",
      section: "Section 2 · The plumbing — the Ghent system",
      body: `Now we hunt the thing that actually produces two-thirds density — and the anchor course already told you where to look: *look for the plumbing before you reach for the culture.* The plumbing here has a name. It is the **Ghent system**, named after the Belgian city where it started around 1901.

Here is the mechanism, and it is almost embarrassingly simple.

**In Sweden and Denmark, unemployment insurance is administered by funds that are linked to the unions.** In Sweden the fund is called an *a-kassa* (short for *arbetslöshetskassa*); in Denmark, an *a-kasse*. When you want to insure yourself against losing your job — a completely ordinary, sensible thing for a worker to do — you sign up with one of these funds. And historically, in most sectors, the fund sits right next to the union, shares its offices and its administration, and signing up for the one puts the paperwork for the other directly in front of you. Joining the union becomes the **default**, the path of least resistance, the thing everyone around you did when they started the job.

That is the whole trick. **The union is bundled with a service people actually want** — income protection against unemployment — and the bundling makes membership the norm rather than the exception.

Compare the American worker's decision. In the U.S., joining a union is a *separate, deliberate, often risky* act: there is usually no union at your workplace, you would have to help *build* one, and (as the anchor course's Question 4 lessons show) you can be fired for trying. In Ghent-system Sweden or Denmark, membership is not a brave act. **It is what you tick on the form when you sort out your unemployment insurance.** Same freedom to organise on paper; a completely different default in practice.

**This is why the anchor course says density in these countries is "not primarily a story about how much workers love unions. It is a story about who runs the unemployment system."** Institutions shape behaviour. If you change *who administers the unemployment cheque*, you change the union numbers — and Section 2's next two lessons prove that with, respectively, a country that never adopted Ghent (Norway) and a year Sweden partly dismantled it (2007).

**Three honest complications, because the simple story is never the whole story.**

1. **The funds are not literally the unions.** They are legally separate bodies, state-subsidised and state-regulated, and you *can* in principle be in a fund without being in a union. The Ghent effect works through the *link* and the *default*, not through a legal requirement. That gap is exactly where the erosion gets in (Section 6).
2. **Sweden is not Denmark here either.** Both are Ghent countries, but they run the funds and the union link somewhat differently, and Denmark in particular has seen the rise of cross-sector "alternative" funds and unions that sell the a-kasse *without* the traditional union attached — which weakens the bundle. Hold that thought for Section 6.
3. **Ghent is not the *only* reason density is high** — sectoral bargaining, workplace union presence, and a general norm of membership all matter too. But it is the single biggest lever, and the one that best explains why the Nordics tower over otherwise-similar countries.

:::reveal In one sentence, why does the Ghent system push union density so high? ||| Because unemployment insurance is administered through union-linked funds, so signing up for income protection — something workers actively want — makes joining the union the default, low-effort choice rather than a separate, deliberate, sometimes risky act.

## Sources
- OECD. (2025). *Membership of unions and employers' organisations, and bargaining coverage*. OECD Publishing. https://www.oecd.org/en/publications/membership-of-unions-and-employers-organisations-and-bargaining-coverage_fe47107c-en.html
- Kjellberg, A. (2011). The decline in Swedish union density since 2007. *Nordic Journal of Working Life Studies, 1*(1), 67–93. https://doi.org/10.19154/njwls.v1i1.2333
- Lind, J. (2009). The end of the Ghent system as a trade union recruitment machinery? *Industrial Relations Journal, 40*(6), 510–523. https://doi.org/10.1111/j.1468-2338.2009.00543.x`,
      recallContent: [
        {
          prompt: "What is the Ghent system, and where is it named after?",
          answer:
            "A system in which unemployment insurance is administered by union-linked funds (the a-kassa in Sweden, the a-kasse in Denmark), so joining the union is the default when you insure yourself against job loss. Named after Ghent, Belgium, where it began around 1901.",
        },
        {
          prompt: "Give the sharpest reason the same 'freedom to organise' produces ~65% density in Sweden but ~10% in the US.",
          answer:
            "The default is opposite. In Sweden joining is what you tick on the unemployment-insurance form; in the US it is a separate, deliberate, sometimes fireable act of helping build a union that usually doesn't exist at your workplace yet.",
        },
      ],
    },
    {
      slug: "nordic-norway-experiment",
      title: "4 · Norway: the Nordic country that skipped Ghent",
      section: "Section 2 · The plumbing — the Ghent system",
      body: `If the Ghent system really is the lever, then a Nordic country *without* it should have visibly lower density — same welfare-state culture, same egalitarian reputation, same neighbourhood, but a different unemployment-insurance plumbing. That country exists. It is **Norway**.

**Norway does not have a Ghent system.** Its unemployment insurance is a public, state-run scheme, not administered through union-linked funds. And its union density sits at around **50%** in the early 2020s (OECD/AIAS ICTWSS) — high by world standards, far above the U.S. **10.0%** (2025), but clearly and consistently **below** Sweden's ~65% and Denmark's ~67%.

Line them up, because this is as close to a controlled experiment as comparative labour policy ever gets:

| Country | Ghent system? | Union density (early 2020s) |
| --- | --- | --- |
| **Sweden** | **Yes** (a-kassa) | ~65% |
| **Denmark** | **Yes** (a-kasse) | ~67% |
| **Norway** | **No** (state-run UI) | ~50% |

Three countries that are otherwise about as similar as three countries can be — comparable wealth, comparable welfare states, comparable histories, a shared regional culture that any tourist would call identical. The biggest institutional difference in how workers relate to unions is *who runs the unemployment fund*. And the density gap tracks it: **the two Ghent countries are ~15 points higher than the non-Ghent one.** That is the natural experiment, and it is why serious economists (OECD, 2025) point at the plumbing rather than the culture.

**Now the honesty, because a course that oversells its natural experiment is doing the thing it warns you against.**

- **Norway's ~50% is still high**, and Norwegian bargaining coverage is also high (~65–70%, OECD/AIAS). So Ghent is not the *only* thing holding Nordic density up — strong sectoral bargaining and a deep norm of membership do real work in all three countries. The claim is that Ghent adds roughly another 15 points on top, not that it explains everything.
- **This is observational, not a laboratory.** You cannot randomly assign a country to have Ghent. Other differences between Norway and its neighbours exist, and a careful person says "the evidence is *consistent with* a large Ghent effect," not "this proves it." The next lesson is stronger evidence precisely because it watches *one country change its own plumbing* and measures what happened.

Still: hold the table in your head. When someone tells you high union membership is a matter of national character, the right response is a question — *what does that country's unemployment system look like?* Norway's answer is the reason the question is a good one.

:::reveal Norway is a Nordic country with a strong welfare state, yet its union density (~50%) is notably lower than Sweden's (~65%) or Denmark's (~67%). What is the biggest institutional difference the course points to? ||| Norway has no Ghent system — its unemployment insurance is a public, state-run scheme rather than one administered through union-linked funds. Same regional culture, different plumbing, and the density gap tracks the plumbing. (The course also notes ~50% is still high and Ghent is not the only factor — the evidence is consistent with a large Ghent effect, not proof.)

## Sources
- OECD/AIAS. (n.d.). *ICTWSS database — country notes: Norway; Sweden; Denmark*. Organisation for Economic Co-operation and Development. https://www.oecd.org/en/data/datasets/oecd-aias-ictwss-database.html
- OECD. (2025). *Membership of unions and employers' organisations, and bargaining coverage*. OECD Publishing. https://www.oecd.org/en/publications/membership-of-unions-and-employers-organisations-and-bargaining-coverage_fe47107c-en.html`,
      recallContent: [
        {
          prompt: "How does Norway serve as a 'natural experiment' for the Ghent system?",
          answer:
            "Norway is Nordic and has a strong welfare state but NO Ghent system (state-run unemployment insurance). Its density (~50%, early 2020s) is markedly below Ghent-system Sweden (~65%) and Denmark (~67%). Same culture, different plumbing — and the density gap tracks the plumbing.",
        },
        {
          prompt: "What is the honest caveat on the Norway comparison?",
          answer:
            "It is observational, not a lab: ~50% is still high, Norway's bargaining coverage is high too, and other factors matter. The evidence is consistent with a large Ghent effect (roughly +15 points), not proof of it.",
        },
      ],
    },
    {
      slug: "nordic-akassa-2007",
      title: "5 · The year Sweden tested it: the 2007 a-kassa reform",
      section: "Section 2 · The plumbing — the Ghent system",
      body: `The Norway comparison is suggestive. This lesson is the closer, because instead of comparing two countries it watches **one country change its own plumbing and measures the result** — and the result is the strongest single piece of evidence for the Ghent effect anywhere.

**What happened.** In January 2007, a new centre-right government in Sweden (the Alliance, under Prime Minister Fredrik Reinfeldt) reformed the *a-kassa*. The core change was to the **membership fees**: fees were raised substantially and, crucially, **differentiated** — funds in sectors with higher unemployment now charged their members more. For workers in some industries the monthly cost of belonging to their unemployment fund jumped sharply, more or less overnight.

Remember what the a-kassa is bundled with. If the price of the unemployment fund spikes, some people do the math and drop the fund — and because the fund is the thing that made union membership the default, **dropping the fund loosens the tie to the union.** So the theory makes a clean prediction: raise a-kassa fees, and union density should fall.

**It did — fast.** According to Anders Kjellberg of Lund University, the leading authority on Swedish union membership, trade-union density fell from about **77% in 2006** to about **71% in 2008** — roughly a **six-percentage-point drop in two years**, the steepest fall in modern Swedish history (Kjellberg, 2011). Membership in the unemployment funds themselves fell even more sharply. And the decline was **uneven in exactly the way the theory predicts**: it hit **blue-collar (LO) unions harder than white-collar ones**, because the fee increases bit hardest in lower-wage, higher-unemployment sectors.

Sit with what that gives you. This is not two different countries with a hundred hidden differences. **It is the same country, the same workers, the same culture — with one institutional dial turned.** And when the dial moved, the number moved, in the predicted direction, by a large amount, in the predicted groups. That is about as good as evidence gets in the social world.

**The coda, which keeps it honest.** The fees were later **cut back** (notably a reform in 2014 that abolished the differentiated part), and density partially stabilised — though it did **not** climb back to its 2006 level, settling in the high-60s in the years after (Kjellberg). Two lessons in that coda: institutions have *momentum* (a habit of membership, once broken, doesn't fully re-form), and the Ghent effect runs in **both** directions — cheapen the fund and you slow the bleed, but you don't automatically undo the damage.

**Why this matters for the whole course.** The wage floor that isn't a law (Section 1) rests on unions strong enough to negotiate and enforce it. Union strength rests substantially on density. Density rests substantially on the Ghent plumbing. So a government that wanted to weaken the negotiated-floor model would not need to abolish it — **it could just make the unemployment funds more expensive.** Sweden ran that experiment in 2007, apparently without that being the stated goal, and you can read the result in the density series. Plumbing is power.

:::reveal What did Sweden's 2007 a-kassa reform do, and what happened to union density — and why is this stronger evidence than the Norway comparison? ||| It raised and differentiated unemployment-fund membership fees (higher fees in higher-unemployment sectors). Density fell from ~77% (2006) to ~71% (2008) — the steepest drop in modern Swedish history, hitting blue-collar (LO) unions hardest (Kjellberg, 2011). It is stronger evidence because it is the SAME country with one institutional dial turned, rather than a comparison across two countries with many hidden differences.

## Sources
- Kjellberg, A. (2011). The decline in Swedish union density since 2007. *Nordic Journal of Working Life Studies, 1*(1), 67–93. https://doi.org/10.19154/njwls.v1i1.2333
- Kjellberg, A. (2024). *Kollektivavtalens täckningsgrad samt organisationsgraden hos arbetsgivarförbund och fackförbund* [Coverage of collective agreements and density of employer and union organisations] (Studies in Social Policy, Industrial Relations, Working Life and Mobility, Research Reports). Lund University, Department of Sociology. https://portal.research.lu.se/en/publications/`,
      recallContent: [
        {
          prompt: "What was the core change in Sweden's 2007 a-kassa reform, and the two-year effect on density?",
          answer:
            "It raised and differentiated a-kassa membership fees (higher fees where unemployment was higher). Union density fell from ~77% (2006) to ~71% (2008) — the steepest fall in modern Swedish history — and hit blue-collar (LO) unions hardest (Kjellberg, 2011).",
        },
        {
          prompt: "What does the post-2007 'coda' (fees cut in 2014, density only partly recovering) teach?",
          answer:
            "Institutions have momentum — a broken habit of membership doesn't fully re-form — and the Ghent effect runs both ways: cheapening the fund slows the bleed but does not automatically undo the damage. Density stabilised in the high-60s, below its 2006 level.",
        },
      ],
    },
    {
      slug: "nordic-quiz-2",
      title: "Section 2 quiz · The Ghent system and the evidence",
      section: "Section 2 · The plumbing — the Ghent system",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is the Ghent system?",
            options: [
              "A statutory minimum wage set by the city of Ghent",
              "A system in which unemployment insurance is administered by union-linked funds, making union membership the default",
              "A German co-determination law",
              "An EU directive on bargaining coverage",
            ],
            correctIndex: 1,
            explanation:
              "Named after Ghent, Belgium (c. 1901). Unemployment insurance runs through union-linked funds (a-kassa/a-kasse), so joining the union is the low-effort default.",
            sourceLessonSlug: "nordic-ghent-system",
          },
          {
            prompt: "Why does the same legal 'freedom to organise' produce ~65% density in Sweden but ~10% in the US?",
            options: [
              "Swedish law forces workers to join unions",
              "The default is opposite: in Sweden joining is what you tick when you insure against unemployment; in the US it is a separate, deliberate, sometimes fireable act",
              "US workers are legally barred from unions",
              "Sweden counts members differently",
            ],
            correctIndex: 1,
            explanation:
              "Ghent makes membership the path of least resistance. American organising is a brave, separate act with no bundled service attached.",
            sourceLessonSlug: "nordic-ghent-system",
          },
          {
            prompt: "The anchor course says Nordic density is 'a story about who runs the unemployment system.' What habit does that teach?",
            options: [
              "Explain union numbers by national character",
              "Look for the plumbing (the institutions) before reaching for the culture",
              "Assume all Nordic countries are identical",
              "Ignore unemployment insurance entirely",
            ],
            correctIndex: 1,
            explanation:
              "Institutions shape behaviour. Change who administers the unemployment cheque and you change the union numbers.",
            sourceLessonSlug: "nordic-ghent-system",
          },
          {
            prompt: "Which is a Ghent country?",
            options: ["Norway", "Sweden", "The United States", "Germany"],
            correctIndex: 1,
            explanation:
              "Sweden (a-kassa) and Denmark (a-kasse) are Ghent countries. Norway is the Nordic country that runs unemployment insurance publicly instead.",
            sourceLessonSlug: "nordic-ghent-system",
          },
          {
            prompt: "How does Norway function as a natural experiment for the Ghent effect?",
            options: [
              "It has the world's highest density despite no unions",
              "It is Nordic with a strong welfare state but NO Ghent system, and its density (~50%) sits well below Sweden's and Denmark's (~65–67%)",
              "It has a statutory minimum wage and no bargaining",
              "It banned unemployment insurance",
            ],
            correctIndex: 1,
            explanation:
              "Same regional culture, different plumbing. The ~15-point density gap tracks the presence or absence of Ghent.",
            sourceLessonSlug: "nordic-norway-experiment",
          },
          {
            prompt: "Roughly what is Norway's union density in the early 2020s (OECD/AIAS)?",
            options: ["About 10%", "About 50%", "About 67%", "About 90%"],
            correctIndex: 1,
            explanation:
              "About 50% — high by world standards, but clearly below Ghent-system Sweden (~65%) and Denmark (~67%).",
            sourceLessonSlug: "nordic-norway-experiment",
          },
          {
            prompt: "What is the honest caveat the course attaches to the Norway comparison?",
            options: [
              "There is no caveat — it proves Ghent is the only cause",
              "It is observational, not a lab: ~50% is still high, coverage is high, and Ghent adds roughly 15 points rather than explaining everything",
              "Norway actually has a Ghent system",
              "Density in Norway is really 10%",
            ],
            correctIndex: 1,
            explanation:
              "Careful phrasing: the evidence is consistent with a large Ghent effect, not proof of it. That is why the 2007 reform is the stronger test.",
            sourceLessonSlug: "nordic-norway-experiment",
          },
          {
            prompt: "What did Sweden's January 2007 a-kassa reform actually change?",
            options: [
              "It abolished collective bargaining",
              "It raised and DIFFERENTIATED unemployment-fund membership fees — charging more in higher-unemployment sectors",
              "It introduced a statutory minimum wage",
              "It merged all unions into one federation",
            ],
            correctIndex: 1,
            explanation:
              "Higher, risk-differentiated fees made belonging to the a-kassa more expensive, especially in lower-wage sectors.",
            sourceLessonSlug: "nordic-akassa-2007",
          },
          {
            prompt: "What happened to Swedish union density after the 2007 reform (Kjellberg)?",
            options: [
              "It rose from 65% to 80%",
              "It fell from about 77% (2006) to about 71% (2008) — the steepest drop in modern Swedish history",
              "It was completely unchanged",
              "It fell to 10%, matching the US",
            ],
            correctIndex: 1,
            explanation:
              "A ~6-point fall in two years, with a-kassa membership dropping even faster — direction and size both as the Ghent theory predicts.",
            sourceLessonSlug: "nordic-akassa-2007",
          },
          {
            prompt: "The 2007 decline was uneven. Who was hit hardest, and why does that support the theory?",
            options: [
              "White-collar unions, because they earn more",
              "Blue-collar (LO) unions, because the fee increases bit hardest in lower-wage, higher-unemployment sectors",
              "Only public-sector unions",
              "Everyone equally, which disproves the theory",
            ],
            correctIndex: 1,
            explanation:
              "The pattern matches the mechanism: where the differentiated fees rose most, membership fell most.",
            sourceLessonSlug: "nordic-akassa-2007",
          },
          {
            prompt: "Why is the 2007 reform STRONGER evidence than the Norway comparison?",
            options: [
              "Because Sweden is bigger than Norway",
              "Because it is the same country, same workers, same culture, with one institutional dial turned — rather than two countries with many hidden differences",
              "Because it was a randomised controlled trial",
              "Because Norway has no data",
            ],
            correctIndex: 1,
            explanation:
              "A within-country change over time isolates the variable far better than a cross-country snapshot.",
            sourceLessonSlug: "nordic-akassa-2007",
          },
          {
            prompt: "What does the post-2007 'coda' (fees cut in 2014, density only partly recovering) show?",
            options: [
              "That the Ghent effect is fake",
              "That institutions have momentum and the effect runs both ways — cheapening the fund slows the bleed but does not automatically restore lost membership",
              "That density instantly returned to 77%",
              "That fees never changed again",
            ],
            correctIndex: 1,
            explanation:
              "Density stabilised in the high-60s, below the 2006 level. A broken habit of membership does not fully re-form.",
            sourceLessonSlug: "nordic-akassa-2007",
          },
          {
            prompt: "What is the 'plumbing is power' implication for the negotiated wage floor?",
            options: [
              "The floor is safe no matter what happens to unions",
              "A government could weaken the negotiated-floor model without abolishing it — just by making the unemployment funds more expensive, since the floor rests on union strength, which rests on density, which rests on Ghent",
              "The floor depends only on the EU",
              "The floor depends only on employers",
            ],
            correctIndex: 1,
            explanation:
              "Section 1's floor → union strength → density → Ghent plumbing. Turn the plumbing and you move the whole chain.",
            sourceLessonSlug: "nordic-akassa-2007",
          },
          {
            prompt: "The course says the a-kassa funds are 'not literally the unions.' Why does that matter?",
            options: [
              "It means the Ghent effect is illegal",
              "The funds are legally separate, state-subsidised bodies, so you can be in a fund without a union — the effect works through the LINK and the DEFAULT, which is exactly where erosion gets in",
              "It means unions have no role at all",
              "It means density is actually zero",
            ],
            correctIndex: 1,
            explanation:
              "The gap between fund and union is the vulnerability: alternative funds that sell insurance without the union weaken the bundle (Section 6).",
            sourceLessonSlug: "nordic-ghent-system",
          },
          {
            prompt: "Who is the authority the course leans on for Swedish density figures?",
            options: [
              "The US Bureau of Labor Statistics",
              "Anders Kjellberg (Lund University)",
              "The European Central Bank",
              "Tesla's investor relations",
            ],
            correctIndex: 1,
            explanation:
              "Kjellberg is the leading authority on Swedish union membership and documented the post-2007 decline in detail.",
            sourceLessonSlug: "nordic-akassa-2007",
          },
        ],
      },
    },

    // ────────────── SECTION 3 · SELF-REGULATION: THE STATE STEPS BACK ──────────────
    {
      slug: "nordic-saltsjobaden",
      title: "6 · Sweden, 1938: the state agrees to stay out (Saltsjöbaden)",
      section: "Section 3 · Self-regulation — the state that stepped back by agreement",
      body: `You now know *that* Swedish wages are set by contract rather than by law (Section 1) and *why* Swedish unions are strong enough to do the setting (Section 2). This section answers the remaining question: **how did a country decide, on purpose, that the government would stay out of the labour market?** In Sweden, the answer has a place-name attached: **Saltsjöbaden**.

**The background is not gentle.** The 1920s and early 1930s in Sweden were years of hard, sometimes violent industrial conflict. The low point came in May **1931** at **Ådalen**, where soldiers opened fire on a workers' demonstration and **five people were killed** (the Ådalen shootings). Sweden in that decade had, relative to its size, some of the highest strike and lockout figures in the industrialised world. This is important context, because the calm, consensual "Swedish model" people admire today was not a national temperament — **it was a settlement that hard conflict forced.**

**The political pressure.** From 1932 the Social Democrats governed Sweden, and their preference was clear: they would rather the two sides of industry **regulate themselves** than have the state legislate the details of labour relations — but if the parties could not keep the peace, the government was prepared to step in with laws. That threat of legislation hung over the negotiating table. The union confederation (**LO**, *Landsorganisationen*) and the employers' confederation (**SAF**, *Svenska Arbetsgivareföreningen*) each preferred to keep control of their own affairs rather than hand the rulebook to politicians.

**The deal.** In December **1938**, LO and SAF signed the **Basic Agreement** (*Saltsjöbadsavtalet* / *Huvudavtalet*), named after the seaside resort of Saltsjöbaden where they negotiated it. It was not a wage deal. It was a **treaty about how to have disputes**: procedures for negotiation, rules for handling conflicts, limits on industrial action that would harm third parties or essential functions, and a shared commitment to settle things between themselves rather than through the state.

The phrase Swedes use for what came out of it is **"the spirit of Saltsjöbaden"** (*Saltsjöbadsandan*) — a norm of pragmatic, businesslike cooperation between organised labour and organised capital, both strong, both disciplined, both preferring the negotiating table to the legislature *and* to the street.

**Here is why this matters for everything else in the course.** The absence of a minimum-wage law, the absence of an American-style state referee, the whole "self-regulation" answer to Question 3 — none of that is a gap where a law should be. **It is a deliberately maintained space, created by an agreement between two organised sides who both decided they would rather govern the labour market themselves.** Self-regulation only works if *both* sides are strong and organised enough to make and keep bargains. Weaken either side badly enough — say, let union density erode (Section 6) — and the space that self-regulation fills starts to look like a vacuum. Which is when someone reaches for a law.

:::reveal What was the Saltsjöbaden Basic Agreement (1938), and why does the course call the "Swedish model" a settlement rather than a national temperament? ||| It was a 1938 agreement between the union confederation LO and the employers' confederation SAF setting the rules for how to conduct and resolve industrial disputes — the foundation of Swedish self-regulation ("the spirit of Saltsjöbaden"). The course calls it a settlement because it followed a decade of intense, sometimes deadly conflict (the Ådalen shootings, 1931) and a government threat to legislate — the consensus was forced by conflict and a shared preference to keep the state out, not inherited from a calm national character.

## Sources
- Nycander, S. (2008). *Makten över arbetsmarknaden: Ett perspektiv på Sveriges 1900-tal* [Power over the labour market] (2nd ed.). SNS Förlag.
- Kjellberg, A. (2017). *The Membership Development of Swedish Trade Unions and Union Confederations Since the End of the Nineteenth Century* (Studies in Social Policy, Industrial Relations, Working Life and Mobility). Lund University, Department of Sociology. https://portal.research.lu.se/en/publications/
- ETUI / Worker Participation. (n.d.). *Sweden: Collective bargaining*. European Trade Union Institute. https://www.worker-participation.eu/national-industrial-relations/countries/sweden`,
      recallContent: [
        {
          prompt: "Who signed the Saltsjöbaden Basic Agreement, in what year, and what did it actually regulate?",
          answer:
            "The union confederation LO and the employers' confederation SAF, in December 1938. It was not a wage deal but a 'treaty about how to have disputes' — procedures for negotiation, handling conflicts, limiting action that harms third parties, and settling matters between the two sides rather than through the state.",
        },
        {
          prompt: "What was the Ådalen event (1931), and why is it in this lesson?",
          answer:
            "In May 1931 soldiers fired on a workers' demonstration at Ådalen, Sweden, killing five people. It is in the lesson to show the admired, consensual 'Swedish model' was a settlement forced by a decade of hard, sometimes deadly conflict — not a calm national temperament.",
        },
      ],
    },
    {
      slug: "nordic-september-compromise",
      title: "7 · Denmark, 1899: the constitution of the labour market",
      section: "Section 3 · Self-regulation — the state that stepped back by agreement",
      body: `Denmark got to self-regulation the same way Sweden did — through a founding agreement after a brutal fight — but it got there **almost forty years earlier**, and that head start is one of the real differences between the two countries this course keeps insisting on.

**The fight.** In **1899**, Denmark saw one of the largest labour conflicts, relative to the size of the country, in European history: the **Great Lockout of 1899** (*Storlockouten*). Employers, newly organised, locked out tens of thousands of workers across many trades for about **four months** in a trial of strength with the young union movement. Both sides had recently built national organisations — the employers' confederation **DA** (*Dansk Arbejdsgiverforening*, founded 1896) and the union confederation then called **De samvirkende Fagforbund** (DsF, founded 1898, the ancestor of today's Danish LO/FH).

**The deal.** The lockout ended in September 1899 with the **September Compromise** (*Septemberforliget*), signed on **5 September 1899**. It is one of the oldest agreements of its kind anywhere, and Danes call it exactly what it is: **"the constitution of the labour market"** (*arbejdsmarkedets grundlov*). Two reciprocal recognitions sat at its core:

- **The employers recognised the workers' right to organise** — to form and belong to unions and to be represented by them.
- **The unions recognised the employers' "right to manage and direct work"** (*ledelsesretten*) — the principle that, subject to the agreements, it is the employer who organises and directs the work.

That trade — *we recognise your unions; you recognise our authority to run the business* — plus a framework for how conflicts must be conducted, became the permanent foundation of the Danish system. It has been revised many times since, but it has never been replaced, and it is why Denmark, like Sweden, runs on agreements between organised parties rather than on a labour code handed down by the state.

**Why the forty-year gap matters — Sweden is not Denmark.** Denmark's founding settlement (1899) predates Sweden's (1938) by a generation. Danish self-regulation is therefore older, more deeply habitual, and built even more around the *cross-sectoral* peak organisations (DA and the union confederation) negotiating the ground rules for everyone. It is also part of why Danish flexicurity (Section 4) — a genuinely distinctive Danish invention — could take root: a labour market where dismissal was governed by agreement rather than by protective statute had room to make "easy to fire, but well cushioned" into a deliberate national bargain. Sweden's model, by contrast, grew a stronger statutory layer in the 1970s (including its Employment Protection Act and its Co-determination Act). **Same family, different houses.**

:::reveal What was the September Compromise (Denmark, 1899), and what two reciprocal recognitions did it contain? ||| It was the 1899 agreement between the employers' confederation DA and the union confederation (then De samvirkende Fagforbund) that ended the Great Lockout — "the constitution of the Danish labour market." Its core trade: employers recognised the workers' right to organise, and unions recognised the employers' right to manage and direct work (ledelsesretten), within a framework of rules for conducting disputes.

## Sources
- Due, J., Madsen, J. S., & Jensen, C. S. (1994). *The Survival of the Danish Model: A Historical Sociological Analysis of the Danish System of Collective Bargaining*. DJØF Publishing.
- ETUI / Worker Participation. (n.d.). *Denmark: Collective bargaining*. European Trade Union Institute. https://www.worker-participation.eu/national-industrial-relations/countries/denmark
- Eurofound. (n.d.). *Denmark: Industrial relations and social dialogue*. European Foundation for the Improvement of Living and Working Conditions. https://www.eurofound.europa.eu/en/country/denmark`,
      recallContent: [
        {
          prompt: "What is the September Compromise (1899), and why is it called 'the constitution of the labour market'?",
          answer:
            "The 1899 Danish agreement between the employers' confederation DA and the union confederation that ended the Great Lockout. It is the founding, never-replaced framework of Danish self-regulation: employers recognised the right to organise, unions recognised the employer's right to manage and direct work (ledelsesret), within agreed rules for disputes.",
        },
        {
          prompt: "Give one way the timing of the two founding agreements marks Denmark as distinct from Sweden.",
          answer:
            "Denmark's settlement (1899) predates Sweden's (1938) by about forty years, so Danish self-regulation is older and built even more around cross-sectoral peak organisations — part of why the distinctively Danish flexicurity bargain (easy dismissal, well cushioned) could take root, while Sweden grew a stronger statutory layer in the 1970s.",
        },
      ],
    },
    {
      slug: "nordic-sectoral-wage-setting",
      title: "8 · So how is the wage floor actually set — with no law?",
      section: "Section 3 · Self-regulation — the state that stepped back by agreement",
      body: `Put Section 1 (no minimum-wage law) together with this section (self-regulation) and a practical question falls out: *if there's no statute and no wage board, who actually decides what the floor is this year — and what stops a firm from simply ignoring it?* Here is the machinery.

**1. Bargaining happens at the sector level, and one sector leads.** A union federation and an employers' association negotiate an agreement for a whole industry — metalworking, retail, transport, hotels — including its minimum rates. In Sweden, manufacturing/export industry deliberately settles **first**, and its settlement sets the norm — the **"mark"** (*märket*) — that the other sectors are expected to follow. This norm-setting role was formalised in Sweden's **Industrial Agreement** (*Industriavtalet*) of **1997**. Denmark runs a similar pattern, with industry (organised on the union side around CO-industri and on the employer side around the Confederation of Danish Industry, DI) leading the round. The point of letting the internationally exposed sector go first is discipline: wages across the economy stay tethered to what the country's exporters can actually afford.

**2. There is no legal extension — and that is the deep contrast with Germany and France.** In Germany, coverage rides on employers belonging to employers' associations; in France, the state *extends* agreements by decree to cover everyone. **Sweden and Denmark do neither by law.** There is no government mechanism that automatically stretches a collective agreement to a firm that never signed one. Coverage is high (Section 1) because organisation is high and because signing agreements is the overwhelming norm — **not because a law forces it.**

**3. So what makes a hold-out firm comply? Not a court order — a conflict.** If a company refuses to sign the relevant collective agreement, the union's tool is **industrial action**: a strike by any of its members in the firm, and — this is the Nordic superpower, and the whole of Section 4 — **sympathy action** by *other* unions to pressure the hold-out from every side (blocking its deliveries, refusing to service it, and so on). The aim is to make operating without an agreement more painful than signing one. That is how a contract-based floor is enforced in a country that refuses to legislate it: **collectively, by pressure, not by the state.** Keep this firmly in mind, because Section 5 is one long, real, unfinished example of exactly this machinery being turned on a company (Tesla) that will not sign.

**4. The peace obligation is the price of the deal.** Self-regulation is not a licence for permanent warfare. Once a collective agreement is in force, the parties bound by it owe a **peace obligation** (*fredsplikt* in Swedish) — they may not take industrial action over matters the agreement covers, for the life of the agreement. In Sweden this duty sits in the **Co-determination Act** (*Medbestämmandelagen*, MBL, SFS 1976:580), which governs the right of association, collective bargaining, and industrial action. Sympathy action is permitted as an *exception*, and generally only in support of a **lawful primary conflict** — a crucial limit we will unpack in Section 4. Disputes about whether a party has breached an agreement or the peace obligation are decided by a specialist **Labour Court** (Sweden's *Arbetsdomstolen*, established 1928; Denmark's *Arbejdsretten*), not by ordinary courts or a government agency.

**One line to carry out of Section 3:** the Nordic wage floor is set by organised sectors bargaining under a self-imposed constitution, enforced by collective pressure rather than by statute, and disciplined by a peace obligation and a specialist labour court. No minimum-wage law required — but a great deal of organisation, and a great deal of history, required instead.

:::reveal With no minimum-wage law and no legal extension, what makes a Swedish or Danish firm that refuses to sign a collective agreement actually comply? ||| Collective pressure, not the state. The union takes industrial action — a strike, plus sympathy action by other unions (blocking deliveries, refusing to service the firm) — to make operating without an agreement more costly than signing one. Coverage rides on high organisation and the norm of signing, disciplined by a peace obligation once an agreement is in force and adjudicated by a specialist labour court.

## Sources
- Lag (1976:580) om medbestämmande i arbetslivet [Employment (Co-determination in the Workplace) Act / MBL] (Sweden). Sveriges riksdag. https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-1976580-om-medbestammande-i-arbetslivet_sfs-1976-580
- Medlingsinstitutet [Swedish National Mediation Office]. (n.d.). *The Swedish model of wage formation and the mark (märket)*. https://www.mi.se/en/
- ETUI / Worker Participation. (n.d.). *Sweden; Denmark: Collective bargaining*. European Trade Union Institute. https://www.worker-participation.eu/national-industrial-relations/countries`,
      recallContent: [
        {
          prompt: "In Sweden, which sector sets the wage norm ('the mark'/märket), and what formalised that role?",
          answer:
            "Internationally exposed manufacturing/export industry settles first and sets the norm ('märket') that other sectors follow. Sweden's Industrial Agreement (Industriavtalet) of 1997 formalised this norm-setting role. The point is to keep economy-wide wages tethered to what exporters can afford.",
        },
        {
          prompt: "What is the peace obligation (fredsplikt), and where does it sit in Swedish law?",
          answer:
            "Once a collective agreement is in force, the bound parties may not take industrial action over matters it covers, for the life of the agreement. In Sweden it sits in the Co-determination Act (MBL, SFS 1976:580); sympathy action is an exception, generally only to support a lawful primary conflict. Disputes go to the Labour Court (Arbetsdomstolen).",
        },
      ],
    },
    {
      slug: "nordic-quiz-3",
      title: "Section 3 quiz · Self-regulation and how the floor is set",
      section: "Section 3 · Self-regulation — the state that stepped back by agreement",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What was the Saltsjöbaden Basic Agreement (1938)?",
            options: [
              "A Swedish statutory minimum wage",
              "A 1938 agreement between LO (unions) and SAF (employers) setting the rules for conducting and resolving industrial disputes — the base of Swedish self-regulation",
              "An EU directive",
              "A wage settlement for the metal industry",
            ],
            correctIndex: 1,
            explanation:
              "Not a wage deal but a 'treaty about how to have disputes,' and the origin of 'the spirit of Saltsjöbaden.'",
            sourceLessonSlug: "nordic-saltsjobaden",
          },
          {
            prompt: "Why does the course call the consensual 'Swedish model' a settlement rather than a national temperament?",
            options: [
              "Because Swedes have always been calm",
              "Because it followed a decade of intense, sometimes deadly conflict (the Ådalen shootings, 1931) and a government threat to legislate",
              "Because the EU imposed it",
              "Because employers invented it alone",
            ],
            correctIndex: 1,
            explanation:
              "The calm was forced by hard conflict and a shared preference to keep the state out — not inherited from national character.",
            sourceLessonSlug: "nordic-saltsjobaden",
          },
          {
            prompt: "What happened at Ådalen in 1931?",
            options: [
              "A collective agreement was signed",
              "Soldiers fired on a workers' demonstration and five people were killed",
              "The a-kassa was created",
              "Sweden introduced a minimum wage",
            ],
            correctIndex: 1,
            explanation:
              "The Ådalen shootings are the low point of the conflict-ridden era that Saltsjöbaden (1938) closed.",
            sourceLessonSlug: "nordic-saltsjobaden",
          },
          {
            prompt: "In the Swedish model, what does self-regulation require of BOTH sides to function?",
            options: [
              "That both sides be weak",
              "That both sides be strong and organised enough to make and keep bargains",
              "That the state set all wages",
              "That unions have no members",
            ],
            correctIndex: 1,
            explanation:
              "Self-regulation fills a deliberately maintained space; badly weaken either side and that space starts to look like a vacuum someone fills with a law.",
            sourceLessonSlug: "nordic-saltsjobaden",
          },
          {
            prompt: "What was the September Compromise (Denmark, 1899)?",
            options: [
              "A statutory minimum wage",
              "The 1899 agreement ending the Great Lockout — 'the constitution of the Danish labour market'",
              "A Swedish law",
              "An EU treaty",
            ],
            correctIndex: 1,
            explanation:
              "Signed 5 September 1899 between the employers' confederation DA and the union confederation; the founding, never-replaced framework of Danish self-regulation.",
            sourceLessonSlug: "nordic-september-compromise",
          },
          {
            prompt: "What two reciprocal recognitions sat at the core of the September Compromise?",
            options: [
              "The state recognised unions; unions recognised the state",
              "Employers recognised the workers' right to organise; unions recognised the employers' right to manage and direct work (ledelsesret)",
              "Both sides recognised a minimum wage",
              "Employers recognised the EU; unions recognised NATO",
            ],
            correctIndex: 1,
            explanation:
              "We recognise your unions; you recognise our authority to run the business — plus agreed rules for how conflicts must be conducted.",
            sourceLessonSlug: "nordic-september-compromise",
          },
          {
            prompt: "How does the timing of the two founding agreements mark Denmark as distinct from Sweden?",
            options: [
              "Denmark's (1899) predates Sweden's (1938) by ~40 years, so Danish self-regulation is older and more deeply habitual",
              "Sweden's came first, in 1899",
              "They were signed the same year",
              "Neither country has a founding agreement",
            ],
            correctIndex: 0,
            explanation:
              "The head start is a real Sweden-vs-Denmark difference and part of why Danish flexicurity could take root.",
            sourceLessonSlug: "nordic-september-compromise",
          },
          {
            prompt: "In Sweden, which sector settles first and sets the wage norm ('the mark'/märket)?",
            options: [
              "Retail",
              "The public sector",
              "Internationally exposed manufacturing/export industry",
              "Agriculture",
            ],
            correctIndex: 2,
            explanation:
              "Formalised in the Industrial Agreement (Industriavtalet) of 1997, so economy-wide wages stay tethered to what exporters can afford.",
            sourceLessonSlug: "nordic-sectoral-wage-setting",
          },
          {
            prompt: "How do Sweden and Denmark differ from Germany and France on extending agreements to non-signatory firms?",
            options: [
              "They extend agreements by decree, like France",
              "They have NO legal extension — coverage is high because organisation is high and signing is the norm, not because a law forces it",
              "They copy the German employer-association mechanism exactly",
              "They require every firm to sign by statute",
            ],
            correctIndex: 1,
            explanation:
              "France extends by decree; Germany rides on employer-association membership; Sweden and Denmark rely on organisation and pressure, not legal extension.",
            sourceLessonSlug: "nordic-sectoral-wage-setting",
          },
          {
            prompt: "With no law and no legal extension, what forces a hold-out firm to sign a collective agreement?",
            options: [
              "A government fine",
              "Industrial action — a strike plus SYMPATHY action by other unions — to make operating without an agreement more costly than signing one",
              "An EU court order",
              "Nothing; firms are free to ignore agreements",
            ],
            correctIndex: 1,
            explanation:
              "Enforcement is collective and by pressure, not by the state — exactly the machinery turned on Tesla in Section 5.",
            sourceLessonSlug: "nordic-sectoral-wage-setting",
          },
          {
            prompt: "What is the peace obligation (fredsplikt)?",
            options: [
              "A ban on all unions",
              "Once a collective agreement is in force, the bound parties may not take industrial action over matters it covers, for the life of the agreement",
              "A government promise not to tax unions",
              "A rule that strikes need police permission",
            ],
            correctIndex: 1,
            explanation:
              "In Sweden it sits in the Co-determination Act (MBL, 1976:580). Self-regulation is not permanent warfare — the peace obligation is the price of the deal.",
            sourceLessonSlug: "nordic-sectoral-wage-setting",
          },
          {
            prompt: "Which body adjudicates disputes over collective agreements and the peace obligation in Sweden?",
            options: [
              "The National Labor Relations Board",
              "The Labour Court (Arbetsdomstolen), a specialist court",
              "The European Central Bank",
              "The Riksdag (parliament) directly",
            ],
            correctIndex: 1,
            explanation:
              "Sweden's Arbetsdomstolen (established 1928); Denmark has the equivalent Arbejdsretten. Specialist labour courts, not a government agency.",
            sourceLessonSlug: "nordic-sectoral-wage-setting",
          },
          {
            prompt: "Which Swedish statute is named as governing the right of association, collective bargaining and industrial action?",
            options: [
              "The Wagner Act",
              "The Co-determination Act (Medbestämmandelagen, MBL, SFS 1976:580)",
              "The September Compromise",
              "Directive (EU) 2022/2041",
            ],
            correctIndex: 1,
            explanation:
              "MBL is the named Swedish Act; the course cites it without asserting a specific paragraph it could not verify.",
            sourceLessonSlug: "nordic-sectoral-wage-setting",
          },
          {
            prompt: "Why let the internationally exposed sector bargain FIRST?",
            options: [
              "To pay exporters the least",
              "For discipline — it tethers economy-wide wage growth to what the country's exporters can actually afford",
              "Because the law requires it",
              "To exclude the public sector from bargaining",
            ],
            correctIndex: 1,
            explanation:
              "The 'mark' set by export industry becomes the norm other sectors follow, keeping wage growth competitive.",
            sourceLessonSlug: "nordic-sectoral-wage-setting",
          },
          {
            prompt: "What single line summarises how the Nordic wage floor is maintained?",
            options: [
              "A statute sets it and the police enforce it",
              "Organised sectors bargain under a self-imposed constitution, enforced by collective pressure rather than statute, disciplined by a peace obligation and a specialist labour court",
              "The EU sets it and extends it to all firms",
              "Employers set it unilaterally",
            ],
            correctIndex: 1,
            explanation:
              "No minimum-wage law required — but a great deal of organisation and history required instead.",
            sourceLessonSlug: "nordic-sectoral-wage-setting",
          },
        ],
      },
    },

    // ────────────── SECTION 4 · THE BARGAIN AND THE WEAPON ──────────────
    {
      slug: "nordic-flexicurity",
      title: "9 · Danish flexicurity: easy to fire, hard to fall (a trade)",
      section: "Section 4 · The Danish bargain and the Nordic weapon",
      body: `Here is a bargain most Americans have never heard anyone propose, and it is **Danish**, not Swedish — this is one of the clearest places the two countries diverge, so watch the label.

**Denmark makes it relatively easy for an employer to fire you.** Job-protection rules are light by European standards; there is no thicket of statutory hurdles a Danish employer must clear to let a worker go. To an American that sounds like the bad news, and to most Europeans it sounds shocking. But it is only one leg of a three-legged deal that the Danes call, in English, **flexicurity** — and researchers call the **"golden triangle."**

**Leg 1 — Flexibility.** Easy hiring and firing. Employers can adjust their workforce to conditions quickly, which (the theory goes) makes them more willing to *hire* in the first place, because hiring is not a near-permanent commitment.

**Leg 2 — Security (of income, not of the specific job).** If you lose your job, you land on a relatively **generous unemployment benefit** (*dagpenge*), historically replacing a high share of a lower earner's previous wage (up to a cap). The security is not "you keep this job"; it is "losing this job does not wreck you."

**Leg 3 — Active labour-market policy.** The state spends heavily on **activation**: retraining, guidance, job-search support, and requirements to take part. The point is to move you from the old job to a new one quickly rather than parking you on benefits.

Put the three together and you get the pitch: **workers give up job security and get employment security instead** — the confidence that if this job ends, there is a cushion and a fast route to the next one. The number Danes point to is **mobility**: a large share of the Danish workforce changes jobs in any given year, and unemployment spells have historically been short. It is a genuinely different answer to "how do you protect a worker?" — *not by making the job hard to lose, but by making job loss survivable and temporary.*

**Now teach it as a trade, because it is one — and it is under strain.** Flexicurity only protects workers if legs 2 and 3 stay strong. Weaken the benefit or the retraining and all that is left is the easy-firing leg — which is just deregulation wearing a Scandinavian sweater. And legs 2 and 3 *have* been trimmed:

- In a **2010 reform**, Denmark **cut the maximum period you can draw dagpenge from four years to two** (phased in from around 2012–2013), and roughly **doubled the amount of prior employment needed to requalify**. That is a real reduction in leg 2.
- Over the longer run, the benefit's **replacement rate has drifted down** for many workers (the cap has not kept pace with wages), so "generous" is less true for a middle earner today than it was a generation ago.

So the honest verdict, dated: flexicurity is a real and coherent bargain, not a free lunch and not a fairy tale — and the security side of it has been quietly thinning, which is exactly the thing that would turn a good trade into a bad one. Whether it still delivers what it promises is a live Danish argument, and you should treat anyone who tells you it is simply a triumph *or* simply a con as selling you something.

**The Sweden-is-not-Denmark footnote, so you don't overgeneralise.** Sweden does **not** run classic Danish flexicurity. Sweden has meaningfully **stronger statutory job protection** — its Employment Protection Act (*Lagen om anställningsskydd*, LAS, 1982), with "last in, first out" seniority rules at its core — though even that was loosened in a 2022 reform that made dismissals somewhat easier in exchange for stronger retraining rights. "Nordic" is not one labour market. It is at least two.

:::reveal What is Danish "flexicurity," and why must it be taught as a trade rather than a free lunch? ||| The "golden triangle": (1) easy hiring and firing, (2) a relatively generous unemployment benefit (dagpenge), and (3) heavy active labour-market policy (retraining/activation). Workers trade job security for employment security — a cushion plus a fast route to the next job. It must be taught as a trade because it only protects workers if the benefit and retraining legs stay strong; weaken them and only easy-firing remains. And they have been trimmed — the 2010 reform cut the dagpenge period from four years to two.

## Sources
- Madsen, P. K. (2004). The Danish model of "flexicurity": Experiences and lessons. *Transfer: European Review of Labour and Research, 10*(2), 187–207. https://doi.org/10.1177/102425890401000205
- Andersen, T. M., & Svarer, M. (2007). Flexicurity — labour market performance in Denmark. *CESifo Economic Studies, 53*(3), 389–429. https://doi.org/10.1093/cesifo/ifm015
- Eurofound. (n.d.). *Denmark: Individual dismissal and unemployment benefits (dagpenge)*. European Foundation for the Improvement of Living and Working Conditions. https://www.eurofound.europa.eu/en/country/denmark
- Lag (1982:80) om anställningsskydd [Employment Protection Act / LAS] (Sweden). Sveriges riksdag. https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-198280-om-anstallningsskydd_sfs-1982-80`,
      recallContent: [
        {
          prompt: "Name the three legs of Danish flexicurity (the 'golden triangle') and the trade it offers workers.",
          answer:
            "(1) Easy hiring and firing; (2) a relatively generous unemployment benefit (dagpenge); (3) heavy active labour-market policy (retraining/activation). Workers trade JOB security for EMPLOYMENT security — losing a job is survivable and temporary rather than wrecking.",
        },
        {
          prompt: "Give the clearest evidence that flexicurity's 'security' side has thinned.",
          answer:
            "The 2010 reform cut the maximum dagpenge period from four years to two (phased ~2012–13) and roughly doubled the requalification requirement; the benefit's replacement rate has also drifted down for many workers as the cap lagged wages.",
        },
        {
          prompt: "How does Sweden differ from Denmark on job protection?",
          answer:
            "Sweden does not run classic Danish flexicurity; it has stronger statutory job protection via the Employment Protection Act (LAS, 1982) with 'last in, first out' seniority — though a 2022 reform loosened dismissals somewhat in exchange for stronger retraining rights. 'Nordic' is at least two different labour markets.",
        },
      ],
    },
    {
      slug: "nordic-sympathy-action",
      title: "10 · The weapon US law bans: the legal sympathy strike",
      section: "Section 4 · The Danish bargain and the Nordic weapon",
      body: `This is the sharpest single comparison in the entire Workers' Rights track, so slow down for it.

**In the United States, the sympathy strike and the secondary boycott are illegal.** The anchor course teaches this directly: the **Taft-Hartley Act of 1947** added **§ 8(b)(4)** to the National Labor Relations Act, which bars a union from pressuring a **neutral** business — one that is not the employer the union actually has its dispute with — to force it to stop dealing with that employer. If autoworkers have a fight with Company A, they may not lawfully strike or boycott **Company B** to squeeze A. The anchor calls that ban the removal of "one of labor's most powerful weapons," and notes the strange exception it created: farm workers, excluded from the NLRA in 1935, were *also* outside its secondary-boycott ban, which is exactly why the United Farm Workers' grape boycott was lawful when the same tactic would have been illegal for a steelworkers' union.

**In Sweden and Denmark, that weapon is legal.** A union whose members are *not* themselves in dispute with a company may lawfully take **sympathy action** (*sympatiåtgärder*) to support another union's **lawful primary conflict** — refusing to make deliveries to the targeted firm, refusing to service its equipment, refusing to handle its goods. In Sweden the framework sits in the **Co-determination Act** (MBL, 1976:580): parties bound by a collective agreement owe a peace obligation, **but sympathy action in support of a lawful primary dispute is a recognised exception** to it. Denmark's system permits sympathy conflict on the same broad logic.

**Feel the size of this difference.** The American ban confines a labour dispute to the two parties directly involved: the union and its own employer, in a ring, and everyone else must be left alone. The Nordic rule lets a dispute **radiate**. If a company refuses to sign an agreement, it is not just facing the one union whose members it employs — it can find its trucks unloaded by nobody, its mail undelivered, its machines unserviced, because *other* workers, in *other* companies, in *other* unions, are lawfully refusing to touch anything connected to it. **The neutral party the American statute protects is, in the Nordic model, precisely the pressure point.**

And now connect it back to Section 3, because this is not a curiosity — **it is load-bearing.** Remember the puzzle: with no minimum-wage law and no legal extension of agreements, what actually forces a hold-out firm to sign? The answer was "collective pressure, not the state." **The legal sympathy strike is what makes that pressure strong enough to work.** A self-regulating system that refuses to legislate the wage floor needs a way to bring a refusing employer to the table, and sympathy action is that way. Ban it — as U.S. law does — and the whole self-regulation model loses the teeth that make signing an agreement the rational choice. This is why the same countries that keep the state *out* of wage-setting keep sympathy action *in*: the second is what makes the first enforceable.

**Two honesties.** First, "legal" does not mean "unlimited": the primary conflict being supported must itself be lawful, essential-services and proportionality limits apply, and the peace obligation still binds parties to their own agreements. Sympathy action is a regulated weapon, not a free-for-all. Second, this is a genuinely contested policy choice, not a self-evident good — employers and their associations argue that letting a dispute spread to neutral firms is disproportionate and damages bystanders. The course's job is not to tell you they are wrong. It is to make sure you see that **the U.S. and the Nordics drew the line in opposite places, on purpose** — and Section 5 is what it looks like when that line is tested by a company that will not sign.

:::reveal Sympathy strikes are illegal in the US but legal in Sweden and Denmark. Why is that legality LOAD-BEARING for the Nordic model rather than just a curiosity? ||| Because the Nordic wage floor is enforced by collective pressure, not by statute (there's no minimum-wage law and no legal extension of agreements). The legal sympathy strike is what makes that pressure strong enough to bring a hold-out employer to the table — other unions can lawfully refuse to handle the firm's goods, deliveries and servicing. Ban it, as US §8(b)(4) does, and the self-regulation model loses the teeth that make signing an agreement the rational choice.

## Sources
- Labor Management Relations Act (Taft-Hartley Act), § 8(b)(4), 29 U.S.C. § 158(b)(4) (1947). Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?path=/prelim@title29/chapter7&edition=prelim
- Lag (1976:580) om medbestämmande i arbetslivet [Co-determination Act / MBL] (Sweden). Sveriges riksdag. https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-1976580-om-medbestammande-i-arbetslivet_sfs-1976-580
- ETUI / Worker Participation. (n.d.). *Sweden; Denmark: Industrial action*. European Trade Union Institute. https://www.worker-participation.eu/national-industrial-relations/countries`,
      recallContent: [
        {
          prompt: "What does US Taft-Hartley § 8(b)(4) do, and how does the Nordic rule on sympathy action differ?",
          answer:
            "§ 8(b)(4) (1947) bans US unions from pressuring a NEUTRAL business to force it to stop dealing with the employer the union actually disputes — outlawing secondary boycotts/sympathy strikes. In Sweden and Denmark, sympathy action in support of a LAWFUL primary conflict is legal (an exception to the peace obligation in Sweden's MBL), so a dispute can lawfully radiate to firms not directly involved.",
        },
        {
          prompt: "Why is the legality of sympathy action essential to Nordic self-regulation?",
          answer:
            "Because the wage floor is enforced by collective pressure rather than by law; the sympathy strike is what makes that pressure strong enough to bring a hold-out employer to sign. Ban it and the self-regulation model loses its teeth.",
        },
      ],
    },
    {
      slug: "nordic-quiz-4",
      title: "Section 4 quiz · Flexicurity and the sympathy strike",
      section: "Section 4 · The Danish bargain and the Nordic weapon",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Which country's model is 'flexicurity,' and what are its three legs?",
            options: [
              "Sweden's: high job protection, low benefits, no retraining",
              "Denmark's: easy hiring/firing, a relatively generous unemployment benefit (dagpenge), and heavy active labour-market policy",
              "Norway's: statutory minimum wage, high tariffs, no unions",
              "A US federal program",
            ],
            correctIndex: 1,
            explanation:
              "Flexicurity is Danish — the 'golden triangle.' Watch the label: Sweden does not run it.",
            sourceLessonSlug: "nordic-flexicurity",
          },
          {
            prompt: "What trade does flexicurity offer workers?",
            options: [
              "Job security in exchange for lower pay",
              "JOB security is given up for EMPLOYMENT security — a cushion if the job ends plus a fast route to the next one",
              "Higher wages in exchange for banning strikes",
              "Lifetime employment at one firm",
            ],
            correctIndex: 1,
            explanation:
              "Not 'you keep this job' but 'losing this job doesn't wreck you, and you'll be helped into the next one quickly.'",
            sourceLessonSlug: "nordic-flexicurity",
          },
          {
            prompt: "Why must flexicurity be taught as a trade rather than a free lunch?",
            options: [
              "Because it is illegal under EU law",
              "Because it only protects workers if the benefit and retraining legs stay strong — weaken them and only easy-firing remains ('deregulation in a Scandinavian sweater')",
              "Because it applies only to managers",
              "Because Denmark abolished it",
            ],
            correctIndex: 1,
            explanation:
              "Legs 2 and 3 are what make leg 1 tolerable. Thin them out and the bargain turns bad.",
            sourceLessonSlug: "nordic-flexicurity",
          },
          {
            prompt: "What concrete change shows flexicurity's 'security' side thinning?",
            options: [
              "The 2010 reform cut the maximum dagpenge period from four years to two and roughly doubled the requalification requirement",
              "Denmark abolished unemployment benefits entirely",
              "Denmark introduced a statutory minimum wage",
              "Denmark banned firing workers",
            ],
            correctIndex: 0,
            explanation:
              "A real reduction in leg 2 (phased in ~2012–13), plus a long-run drift down in the replacement rate for many workers.",
            sourceLessonSlug: "nordic-flexicurity",
          },
          {
            prompt: "How does Sweden differ from Denmark on job protection?",
            options: [
              "Sweden has weaker protection than Denmark",
              "Sweden has stronger statutory job protection via the Employment Protection Act (LAS, 1982), with 'last in, first out' seniority — it does not run classic Danish flexicurity",
              "Sweden and Denmark are identical here",
              "Sweden has no employment law at all",
            ],
            correctIndex: 1,
            explanation:
              "'Nordic' is at least two labour markets. LAS (1982) was itself loosened somewhat in a 2022 reform in exchange for stronger retraining rights.",
            sourceLessonSlug: "nordic-flexicurity",
          },
          {
            prompt: "What does US Taft-Hartley § 8(b)(4) (1947) prohibit?",
            options: [
              "All strikes by any union",
              "A union pressuring a NEUTRAL business to force it to stop dealing with the employer the union actually disputes (secondary boycotts / sympathy action)",
              "Collective bargaining",
              "Unemployment insurance",
            ],
            correctIndex: 1,
            explanation:
              "It confines a dispute to the union and its own employer; everyone else must be left alone. The anchor course teaches this in its Taft-Hartley lesson.",
            sourceLessonSlug: "nordic-sympathy-action",
          },
          {
            prompt: "What is the Nordic rule on sympathy action?",
            options: [
              "It is banned, exactly as in the US",
              "A union not itself in dispute may lawfully take sympathy action to support another union's LAWFUL primary conflict — an exception to the peace obligation",
              "It requires the government's permission each time",
              "It is allowed only for public-sector workers",
            ],
            correctIndex: 1,
            explanation:
              "In Sweden the framework sits in the Co-determination Act (MBL, 1976:580); Denmark permits it on the same broad logic.",
            sourceLessonSlug: "nordic-sympathy-action",
          },
          {
            prompt: "What is the vivid structural difference between the US ban and the Nordic rule?",
            options: [
              "The US lets disputes radiate; the Nordics confine them",
              "The US confines a dispute to the two direct parties; the Nordic rule lets it RADIATE, so the neutral party the US statute protects is the Nordic pressure point",
              "Both confine disputes identically",
              "Neither allows any industrial action",
            ],
            correctIndex: 1,
            explanation:
              "Trucks unloaded by nobody, mail undelivered, machines unserviced — because other workers in other unions lawfully refuse to touch anything connected to the target.",
            sourceLessonSlug: "nordic-sympathy-action",
          },
          {
            prompt: "Why is the legal sympathy strike LOAD-BEARING for Nordic self-regulation?",
            options: [
              "It isn't — it's just a historical curiosity",
              "Because the wage floor is enforced by collective pressure, not statute; sympathy action is what makes that pressure strong enough to bring a hold-out employer to sign",
              "Because it replaces the unemployment fund",
              "Because it sets the minimum wage directly",
            ],
            correctIndex: 1,
            explanation:
              "Keep the state out of wage-setting, keep sympathy action in — the second is what makes the first enforceable.",
            sourceLessonSlug: "nordic-sympathy-action",
          },
          {
            prompt: "Does 'legal sympathy action' mean 'unlimited'?",
            options: [
              "Yes — anything goes",
              "No — the primary conflict must be lawful, essential-services and proportionality limits apply, and the peace obligation still binds parties to their own agreements",
              "Yes, but only in Denmark",
              "No — it is actually banned",
            ],
            correctIndex: 1,
            explanation:
              "It is a regulated weapon, not a free-for-all.",
            sourceLessonSlug: "nordic-sympathy-action",
          },
          {
            prompt: "How does the course frame the US-vs-Nordic choice on sympathy action?",
            options: [
              "The Nordics are simply right and the US simply wrong",
              "As a genuinely contested policy choice — the two systems drew the line in opposite places on purpose, and employers argue spreading a dispute to neutral firms is disproportionate",
              "As an accident of history with no real disagreement",
              "As identical in both systems",
            ],
            correctIndex: 1,
            explanation:
              "The course's job is to show the deliberate opposite choices, not to adjudicate which is correct.",
            sourceLessonSlug: "nordic-sympathy-action",
          },
          {
            prompt: "In the anchor course, why was the United Farm Workers' grape boycott lawful when the same tactic was illegal for a steelworkers' union?",
            options: [
              "Because grapes are exempt",
              "Because farm workers were excluded from the NLRA in 1935, so they were also outside its secondary-boycott ban",
              "Because the UFW got special permission",
              "Because Taft-Hartley did not exist yet",
            ],
            correctIndex: 1,
            explanation:
              "The exclusion that stripped farm workers of protection also placed them outside the law's biggest restriction — a link this course draws from the anchor.",
            sourceLessonSlug: "nordic-sympathy-action",
          },
          {
            prompt: "Which Swedish statute frames sympathy action as an exception to the peace obligation?",
            options: [
              "The Employment Protection Act (LAS)",
              "The Co-determination Act (Medbestämmandelagen, MBL, 1976:580)",
              "The Taft-Hartley Act",
              "Directive (EU) 2022/2041",
            ],
            correctIndex: 1,
            explanation:
              "MBL governs association, bargaining and industrial action in Sweden, including the peace obligation and its sympathy-action exception.",
            sourceLessonSlug: "nordic-sympathy-action",
          },
          {
            prompt: "Why does the same country keep the state OUT of wage-setting but keep sympathy action IN?",
            options: [
              "For no particular reason",
              "Because sympathy action is what makes a non-legislated wage floor enforceable — the enforcement tool substitutes for a law",
              "Because the EU requires both",
              "Because employers demanded both",
            ],
            correctIndex: 1,
            explanation:
              "Self-regulation needs a credible way to bring refusers to the table; the sympathy strike is that mechanism.",
            sourceLessonSlug: "nordic-sympathy-action",
          },
          {
            prompt: "The Danish golden triangle's 'security' leg is best described as security of…",
            options: [
              "the specific job you currently hold",
              "income and employment — a cushion if the job ends and a fast route to a new one, not a guarantee you keep this job",
              "the employer's profits",
              "the union's finances",
            ],
            correctIndex: 1,
            explanation:
              "Flexicurity protects the worker, not the particular job — by making job loss survivable and temporary.",
            sourceLessonSlug: "nordic-flexicurity",
          },
        ],
      },
    },
  ],
};
