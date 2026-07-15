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
  ],
};
