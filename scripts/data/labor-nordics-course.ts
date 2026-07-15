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
  ],
};
