// Authored "Brazil: State-Chartered Unions, a Union-Made President, and the 2017 Rupture" — Wave 2
// of the Workers' Rights track (plans/future-courses/workers-rights-track-proposal.md). Country
// companion to the anchor, "The History of Unions: America and the World"
// (scripts/data/history-of-unions-course.ts). Brazil's slot in the track: CORPORATISM WRITTEN INTO
// THE LAW — unions chartered, categorized, and funded by the state (the 1943 CLT) — and then the
// controlled experiment nobody could have designed: Law 13.467/2017 abolished the compulsory union
// tax, and the course teaches the documented effect with figures.
//
// Sourcing discipline (the load-bearing part of this file):
//   * Every figure carries YEAR + SOURCE, verified against the source at authoring (July 2026),
//     not recalled. Union-tax revenue collapse: Secretaria do Trabalho (Ministério da Economia)
//     data as reported by Gazeta do Povo, 13 Jan 2020 — R$2bn (2017) → R$282.9M (2018) → R$88.2M
//     (Jan–Nov 2019); Poder360 (18 Jan 2023) reports R$3bn (2017, wider scope: unions + federations
//     + confederations + centrais) → R$65.6M (2021). The two 2017 baselines DIFFER because their
//     scopes differ; the course teaches that discrepancy as a source-evaluation lesson instead of
//     silently picking one. Union density: IBGE PNAD Contínua (Características adicionais do
//     mercado de trabalho) — 16.1% (2012) → 9.2% (2022) → 8.4% (2023, series low) → 8.9% (2024,
//     first rise since 2012). Informality: IBGE PNAD Contínua — 39.0% (2024 annual) → 38.1% (2025
//     annual). Slave-labor enforcement: MTE — 68,000+ workers rescued since the mobile inspection
//     group (GEFM) was created in 1995; 2,772 rescued in 2025 (+38% vs 2024, per Repórter Brasil,
//     Jan 2026, reporting MTE data); "lista suja" October 2025 update added 159 employers (101
//     individuals, 58 companies; 1,530 workers rescued in those cases, 2020–2025).
//   * LULA IS TAUGHT NEUTRAL AND DATED, zero editorializing. The record as courts and official
//     bodies left it: union president 1975; jailed under the National Security Law 1980; president
//     2003–2010; convicted 12 Jul 2017; imprisoned 7 Apr 2018; released 8 Nov 2019 (after the STF
//     ended imprisonment-after-first-appeal, not on the merits); convictions ANNULLED 8 Mar 2021 on
//     JURISDICTIONAL grounds (the Curitiba court lacked jurisdiction) — the course states expressly
//     that an annulment on jurisdiction is neither a conviction nor an acquittal on the merits, and
//     refuses to adjudicate what no court adjudicated; elected 30 Oct 2022 with 50.89% (Agência
//     Brasil), inaugurated 1 Jan 2023. Both the conviction and the annulment are taught as facts.
//   * LIVE MATTERS ARE DATED AND LEFT OPEN. STF Tema 1291 (employment status of app drivers) was
//     REMOVED from the docket on 24 Jun 2026 pending analysis of the new ILO platform-work
//     instrument; no thesis has been fixed as of authoring (Jul 2026) and the course refuses to
//     predict. PLP 12/2024 (drivers-only regulation) is taught as pending, with its exclusions.
//   * The Carta del Lavoro claim is taught AS CONTESTED: the corporatist design of the CLT is not
//     in dispute, but John D. French (2004, "Drowning in Laws") showed the "copied from Mussolini"
//     line overstates it — the CLT consolidated a decade of Brazilian decrees. Both halves taught.
//   * The 2017-defunding lesson deliberately includes the complication that cuts AGAINST the tidy
//     story: density was falling BEFORE 2017 (IBGE series), and the compulsory tax also sustained
//     paper "cartorial" unions that existed to collect it — so the course refuses both the "reform
//     killed healthy unions" and the "reform only killed fake unions" framings.
//   * THE RHYME is named explicitly: informality and app work put workers OUTSIDE the CLT's
//     categories — the same put-them-outside-the-door move as US misclassification (anchor),
//     Mexico's protection contracts (labor-mexico), and Poland's junk contracts (labor-poland).
//   * Brazil has NEVER ratified ILO Convention 87 (NORMLEX); the standard scholarly explanation —
//     unicidade sindical is incompatible with organizations "of their own choosing" — is
//     attributed, not asserted as the course's own judgment.

import type { AuthoredCourse } from "./authored-course";

export const LABOR_BRAZIL_COURSE: AuthoredCourse = {
  title: "Brazil: State-Chartered Unions, a Union-Made President, and the 2017 Rupture",
  description:
    "The country course built around a controlled experiment nobody could have designed: what happens to unions that were funded by the state, when the state stops funding them? Brazil answers it. In 1943, Getúlio Vargas's CLT wrote corporatism directly into law — one state-chartered union per category per territory, financed by a compulsory union tax deducted from every worker, member or not. That machinery organized labor and controlled it at once, and it survived democracy, dictatorship, and redemocratization — until the ABC metalworkers' strikes of 1978–80 produced a new unionism, a new federation (CUT), a new party (PT), and, eventually, a president. Then Law 13.467 of 2017 abolished the compulsory tax, and union revenue collapsed by more than 90% within two years — the course teaches the documented figures, year by year, source by source. It also teaches who the CLT never reached: the roughly four in ten Brazilian workers in informality (IBGE), the app drivers whose employment status Brazil's Supreme Court had not resolved as of July 2026, and the workers rescued from trabalho análogo à escravidão — slavery-like labor — by a mobile inspection system and a 'dirty list' that names employers publicly. Neutral and dated on live politics; every figure carries its year and source. Cited to the CLT, the 1988 Constitution, IBGE, the ILO, the STF's published decisions, and Brazil's Ministry of Labor.",
  lessons: [
    // ───────────── SECTION 1 · THE GIFT FROM ABOVE: VARGAS, THE CLT, AND CORPORATISM ─────────────
    {
      slug: "brazil-vargas-clt",
      section: "Section 1 · The gift from above: Vargas, the CLT, and corporatism",
      title: "1 · 1943: labor law arrives as a gift — with strings attached",
      body: `Every course in this track starts with the anchor's four questions — *who may organize? who is excluded? who bargains with whom? what happens to you if you try?* Brazil's answers all trace back to one document, and to the very unusual way it arrived.

In the United States (the anchor course), labor law was **won from below**: strikes, injunctions, Haymarket, Triangle, and finally the Wagner Act of 1935, extracted from a reluctant state. In Brazil, labor law was **handed down from above** — by a dictator, on May Day, as a gift.

**The giver was Getúlio Vargas**, who took power in the Revolution of 1930 and ruled until 1945 — from 1937 as the outright dictator of a regime he named the **Estado Novo** ("New State"). On **1 May 1943**, Vargas signed **Decreto-Lei nº 5.452: the Consolidação das Leis do Trabalho**, universally known as the **CLT** (Decreto-Lei nº 5.452, 1943). *Consolidação* means consolidation — the CLT gathered a decade of labor decrees issued since 1930 into one code. It regulated hours, vacations, dismissals, women's and children's work, unions, and labor courts — and, amended thousands of times, **it is still the backbone of Brazilian labor law today**.

Two things about this arrangement should stop you.

**First: real protections.** The CLT was not an empty gesture. It gave formal Brazilian workers enforceable rights decades before many neighbors — and it gave them a document that became the emblem of belonging: the **carteira de trabalho**, the work card every formal employee holds, in which every job, wage, and dismissal is recorded. To this day, the Brazilian shorthand for "a real job with rights" is **carteira assinada** — "signed card." Hold onto that phrase; in Section 5 it becomes the border of the entire system.

**Second: the price.** The same code that granted the rights also decided **who would speak for workers, and on what terms**. The CLT did not protect unions that workers had built; it **chartered** unions — one per occupational category per territory, recognized by the Labor Ministry, financed by a tax the state collected (next lesson). The state organized labor **and** controlled it, in the same statute. Political scientists call this design **corporatism**: the state structures society into official categories — labor here, employers there — and deals with each through a single authorized channel it supervises.

**Now the claim you will hear, and what the record supports.** It is often said that Vargas copied the CLT from **Mussolini's Italy** — specifically from the *Carta del Lavoro* (1927), fascist Italy's corporatist labor charter. The historian **John D. French**, who studied the CLT's drafting, concluded that the copy story **overstates it**: the CLT consolidated Brazilian decrees accumulated since 1930 and drew on several European models, and its drafters had reasons of their own (French, 2004). What is **not** in dispute is the design itself: state-chartered monopoly unions inside official categories is the corporatist architecture, and Estado Novo Brazil built it deliberately. Learn the distinction — *the influence is debated; the architecture is documented.*

**One more creation of the same era, because almost no student outside Brazil has heard of it.** Vargas also built a dedicated **labor judiciary** — the **Justiça do Trabalho** — inaugurated on **1 May 1941** as an administrative body attached to the executive, then made a full branch of the judiciary by the 1946 Constitution (Tribunal Superior do Trabalho [TST], n.d.). Brazil has entire courts, up to a national high court (the TST), that hear **nothing but labor cases**. Remember it in Section 5, when the question becomes *which workers can reach those courts at all.*

:::reveal In the US, labor rights were won from below and written into law in 1935. How did enforceable labor law arrive in Brazil — and why does the difference matter? ||| It was handed down from above: the dictator Getúlio Vargas signed the CLT (Decreto-Lei 5.452) on 1 May 1943, during the Estado Novo, consolidating a decade of decrees into one code. The difference matters because the same statute that granted real protections also decided who would speak for workers — state-chartered monopoly unions inside official categories, financed by a state-collected tax. A gift from above comes with the giver's strings: the state organized labor and controlled it in the same document.

## Sources
- Decreto-Lei nº 5.452, de 1º de maio de 1943 (Consolidação das Leis do Trabalho). Presidência da República. https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm
- French, J. D. (2004). *Drowning in laws: Labor law and Brazilian political culture*. University of North Carolina Press.
- Tribunal Superior do Trabalho. (n.d.). *História da Justiça do Trabalho*. https://www.tst.jus.br/historia-da-justica-do-trabalho`,
    },
    {
      slug: "brazil-three-locks",
      section: "Section 1 · The gift from above: Vargas, the CLT, and corporatism",
      title: "2 · The three locks: one union, one territory, one compulsory tax",
      recallContent: [
        {
          prompt: "What is the CLT, who signed it, and when?",
          answer: "The Consolidação das Leis do Trabalho (Decreto-Lei 5.452) — Brazil's consolidated labor code, signed by Getúlio Vargas on 1 May 1943, during the Estado Novo dictatorship. Amended heavily, it is still the backbone of Brazilian labor law.",
        },
        {
          prompt: "What does 'carteira assinada' mean, and why does it matter?",
          answer: "Literally 'signed card' — having your carteira de trabalho (work card) signed by an employer, i.e. formal employment with CLT rights. It is the border of the whole system: workers without it stand outside most of the CLT's protections.",
        },
        {
          prompt: "What is corporatism, in the labor sense?",
          answer: "A design in which the state structures society into official categories and deals with each through a single authorized channel it supervises — for labor: state-chartered monopoly unions rather than unions workers freely build.",
        },
      ],
      body: `The CLT's union system stood on three locks. Read them slowly — the rest of the course is what happens when each one is tested.

## Lock 1 — *unicidade sindical*: one union per category per territory

Brazilian law does not let workers choose among competing unions. For each **occupational category** (metalworkers, bank workers, teachers…) in each **territory** (no smaller than one municipality), there may be **exactly one** union. This rule — **unicidade sindical** — was built into the CLT's system and then, remarkably, **written into the democratic constitution of 1988**, Article 8, item II: it is *forbidden to create more than one union organization, at any level, representing a professional or economic category, in the same territorial base* (Constituição Federal [CF], 1988, art. 8º, II).

You do not vote a Brazilian union in. You are **assigned** to it, by your job description and your address.

## Lock 2 — the charter: recognition from the ministry

Under the CLT as Vargas built it, a union existed legally only once the **Labor Ministry recognized it** — the ministry defined the categories, issued the charter, and could **intervene** in a union and remove its leadership (Decreto-Lei nº 5.452, 1943). Keep that intervention power in mind: Section 2 shows a dictatorship using it, and Section 3 shows the 1988 Constitution abolishing it.

## Lock 3 — the *imposto sindical*: the compulsory union tax

The CLT financed the system with a tax: **one day's wage per year, deducted from every worker in the category — member or not** — and distributed by statute among the local union, its federation and confederation, and a government fund (Decreto-Lei nº 5.452, 1943, arts. 578–610). Whether you joined, whether you voted, whether you had ever met your union: one day of your March pay went to it.

**Sit with what the third lock does.** A union funded by a tax **does not need its members** — not their consent, not their dues, not their enthusiasm. Its budget arrives whether workers love it or despise it. That is the deal Vargas offered: guaranteed representation, guaranteed revenue — and no need, ever, to ask the workers anything. In Section 4, seventy-four years later, Brazil switches that tax off, and you will see exactly what it had been holding up.

## Name the model precisely — this track has shown you three cousins

- **Mexico** (labor-mexico): the CTM was fused to the **governing party** — a union inside the PRI's structure. The party, not the statute, was the cage.
- **Poland** (labor-poland): the official unions were organs of a **party-state**; Solidarność's first demand in 1980 was unions free of it.
- **China** (the anchor): the ACFTU is an **arm of the party-state** by statute.
- **Brazil** is a fourth arrangement: unions that are **nominally private** and not part of any party — but **chartered, categorized, and funded by the state**, whoever governs it. The cage is the legal architecture itself, and it outlived every regime that ruled through it.

**And the sharpest single receipt:** Brazil has **never ratified ILO Convention 87**, the freedom-of-association convention at the floor of international labor law (International Labour Organization [ILO], n.d.). Brazilian labor-law scholars are blunt about why: C87 protects workers' right to form organizations *"of their own choosing,"* and a constitution that mandates **one** union per category per territory cannot promise a choice (Aparecido, 2017). Mexico ratified C87 in 1950. Poland's communist government had ratified it in 1957 (and ignored it). **Democratic Brazil, as of 2026, still cannot sign it** — because *unicidade* is still in Article 8.

:::reveal Brazil has never ratified ILO Convention 87, while Mexico ratified it in 1950 and even communist Poland ratified it in 1957. What in Brazil's own constitution blocks ratification, and what does that tell you? ||| Unicidade sindical — Article 8, II of the 1988 Constitution forbids more than one union per category per territorial base. C87's core is workers' right to form organizations "of their own choosing," and a one-union-per-category rule cannot promise a choice, so Brazil cannot ratify without amending its constitution. It tells you the corporatist architecture of 1943 is not a dictatorship-era relic: the democratic constitution kept it, and it still binds Brazil today.

## Sources
- Decreto-Lei nº 5.452, de 1º de maio de 1943 (Consolidação das Leis do Trabalho). Presidência da República. https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm
- Constituição da República Federativa do Brasil. (1988). Presidência da República. https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm
- International Labour Organization. (n.d.). *Ratifications for Brazil*. NORMLEX. https://normlex.ilo.org/dyn/nrmlx_en/f?p=NORMLEXPUB:11200:0::NO::P11200_COUNTRY_ID:102571
- Aparecido, J. K. (2017). The fundamental Convention No. 87 of the International Labour Organization — union's freedom of association in Brazil and in the United States. *ILSA Journal of International & Comparative Law, 23*(3), Article 2. https://nsuworks.nova.edu/ilsajournal/vol23/iss3/2/`,
    },
    {
      slug: "brazil-section-1-quiz",
      section: "Section 1 · The gift from above: Vargas, the CLT, and corporatism",
      title: "3 · Check yourself: the CLT and the three locks",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is the CLT?",
            options: [
              "The Consolidação das Leis do Trabalho — Brazil's consolidated labor code, signed in 1943 and still the backbone of Brazilian labor law",
              "Brazil's largest union confederation",
              "A trade agreement between Brazil and Argentina",
              "The Brazilian constitution of 1988",
            ],
            correctIndex: 0,
            explanation: "Decreto-Lei nº 5.452, signed 1 May 1943. 'Consolidação' means consolidation — it gathered a decade of labor decrees into one code.",
            sourceLessonSlug: "brazil-vargas-clt",
          },
          {
            prompt: "Who signed the CLT into law, and under what regime?",
            options: [
              "Getúlio Vargas, during the Estado Novo dictatorship",
              "Lula, during his first term",
              "The Brazilian Congress, during the First Republic",
              "The military junta, in 1964",
            ],
            correctIndex: 0,
            explanation: "Vargas ruled from 1930 to 1945 — from 1937 as dictator of the Estado Novo. He signed the CLT on May Day 1943.",
            sourceLessonSlug: "brazil-vargas-clt",
          },
          {
            prompt: "How did enforceable labor law arrive in Brazil, compared with the United States?",
            options: [
              "Handed down from above by a dictator, rather than won from below and extracted from a reluctant state",
              "Exactly as in the US — through decades of strikes ending in a legislative victory",
              "Imposed by the ILO as a condition of membership",
              "Through a general strike that toppled the government",
            ],
            correctIndex: 0,
            explanation: "The US Wagner Act (1935) was extracted from below; the CLT (1943) was a gift from above — and the giver attached strings: the same statute decided who would speak for workers.",
            sourceLessonSlug: "brazil-vargas-clt",
          },
          {
            prompt: "What is the carteira de trabalho, and what does 'carteira assinada' mean?",
            options: [
              "The work card recording every formal job — 'signed card' is the Brazilian shorthand for formal employment with CLT rights",
              "A union membership card required to vote in union elections",
              "A tax document filed annually with the Labor Ministry",
              "An identity card issued only to public employees",
            ],
            correctIndex: 0,
            explanation: "The carteira is the emblem of belonging to the CLT system. Its absence — no signed card — is the border of the system, and the subject of Section 5.",
            sourceLessonSlug: "brazil-vargas-clt",
          },
          {
            prompt: "What is corporatism, in the labor sense this course uses?",
            options: [
              "The state structures society into official categories and deals with each through a single authorized channel it supervises",
              "A system in which corporations may not recognize unions",
              "Any economy dominated by large corporations",
              "A system in which unions own shares in the companies they bargain with",
            ],
            correctIndex: 0,
            explanation: "For labor: state-chartered monopoly unions inside official categories, rather than unions workers freely build. The CLT is the track's clearest example of corporatism written directly into law.",
            sourceLessonSlug: "brazil-vargas-clt",
          },
          {
            prompt: "What does the historian John D. French conclude about the claim that the CLT was copied from Mussolini's Carta del Lavoro?",
            options: [
              "The copy story overstates it — the CLT consolidated a decade of Brazilian decrees and drew on several models; what is documented is the corporatist architecture itself",
              "It is fully accurate — the CLT is a word-for-word translation",
              "The CLT was actually copied from the US Wagner Act",
              "The Carta del Lavoro never existed",
            ],
            correctIndex: 0,
            explanation: "French (2004): the influence is debated; the architecture — state-chartered monopoly unions inside official categories — is documented. Learn to keep those two claims separate.",
            sourceLessonSlug: "brazil-vargas-clt",
          },
          {
            prompt: "What is the Justiça do Trabalho?",
            options: [
              "Brazil's dedicated labor judiciary — entire courts, up to a national high court (the TST), hearing nothing but labor cases",
              "The labor inspection arm of the federal police",
              "A private arbitration service run by the union confederations",
              "The labor chamber of Brazil's electoral court",
            ],
            correctIndex: 0,
            explanation: "Inaugurated 1 May 1941 as an executive body and made a full branch of the judiciary by the 1946 Constitution (TST, n.d.). Almost no other country has one at this scale.",
            sourceLessonSlug: "brazil-vargas-clt",
          },
          {
            prompt: "What is unicidade sindical?",
            options: [
              "The rule that only ONE union may exist per occupational category per territory — competition between unions is forbidden",
              "The rule that all unions must affiliate to one national confederation",
              "The requirement that union votes be unanimous",
              "The merger of all Brazilian unions into a single body in 1943",
            ],
            correctIndex: 0,
            explanation: "You do not vote a Brazilian union in; you are assigned to it by job description and address. The territorial base can be no smaller than one municipality.",
            sourceLessonSlug: "brazil-three-locks",
          },
          {
            prompt: "Where does unicidade sindical live in Brazilian law today?",
            options: [
              "In the democratic constitution of 1988 — Article 8, item II",
              "Only in the original 1943 CLT, long since repealed",
              "In a decree of the military dictatorship",
              "In an ILO convention Brazil ratified",
            ],
            correctIndex: 0,
            explanation: "That is the remarkable part: redemocratized Brazil wrote the corporatist rule into its new constitution. It is not a dictatorship-era leftover — it is current constitutional law.",
            sourceLessonSlug: "brazil-three-locks",
          },
          {
            prompt: "How did the imposto sindical (compulsory union tax) work?",
            options: [
              "One day's wage per year was deducted from every worker in the category — member or not — and distributed by statute to the union structure and a government fund",
              "Union members paid a voluntary monthly fee",
              "Employers paid a payroll tax that funded strike pay",
              "Workers paid the tax only in years when their contract was renegotiated",
            ],
            correctIndex: 0,
            explanation: "CLT arts. 578–610. Whether you joined or had ever met your union, one day of your March pay went to it.",
            sourceLessonSlug: "brazil-three-locks",
          },
          {
            prompt: "Why does a union funded by a compulsory tax not need its members?",
            options: [
              "Its budget arrives by law whether workers support it or despise it — so it never has to ask them anything",
              "Because taxes are always larger than dues",
              "Because the tax was paid by employers",
              "Because such unions were forbidden from having members",
            ],
            correctIndex: 0,
            explanation: "Guaranteed representation plus guaranteed revenue equals no accountability pressure. Section 4 shows what happened when the tax was switched off in 2017.",
            sourceLessonSlug: "brazil-three-locks",
          },
          {
            prompt: "How does Brazil's corporatist model differ from Mexico's CTM?",
            options: [
              "Brazil's unions are nominally private and not part of any party, but chartered, categorized and funded by the state — Mexico's CTM was fused to the governing party itself",
              "They are identical — both were sectors of the governing party",
              "Brazil banned unions outright; Mexico did not",
              "Mexico's unions were funded by a compulsory tax; Brazil's were not",
            ],
            correctIndex: 0,
            explanation: "In Mexico the party was the cage; in Brazil the cage is the legal architecture itself — which is why it outlived every regime that ruled through it.",
            sourceLessonSlug: "brazil-three-locks",
          },
          {
            prompt: "What power did the Labor Ministry hold over unions under the CLT as Vargas built it?",
            options: [
              "It defined the categories, issued each union's charter, and could intervene in a union and remove its leadership",
              "It could only publish statistics about unions",
              "It appointed one non-voting observer to each union board",
              "None — unions were entirely independent of the ministry",
            ],
            correctIndex: 0,
            explanation: "The intervention power is the lock to watch: Section 2 shows the military dictatorship using it against the ABC metalworkers, and Section 3 shows the 1988 Constitution abolishing it.",
            sourceLessonSlug: "brazil-three-locks",
          },
          {
            prompt: "Brazil has never ratified ILO Convention 87. What is the standard explanation?",
            options: [
              "C87 protects workers' right to form organizations 'of their own choosing,' and a constitution mandating one union per category per territory cannot promise a choice",
              "Brazil left the ILO in 1943 and never rejoined",
              "C87 only applies to countries in Europe",
              "Brazil ratified it in 1950 but withdrew in 2017",
            ],
            correctIndex: 0,
            explanation: "The explanation is attributed to Brazilian labor-law scholarship (Aparecido, 2017). Mexico ratified C87 in 1950; even communist Poland ratified it in 1957. Democratic Brazil, as of 2026, still cannot.",
            sourceLessonSlug: "brazil-three-locks",
          },
          {
            prompt: "Which of these is one of the 'three locks' of the CLT's union system?",
            options: [
              "A state-collected compulsory tax that financed the union whether or not workers joined it",
              "A requirement that union leaders be approved by employers",
              "A ban on strikes in the constitution",
              "A rule that unions dissolve every five years",
            ],
            correctIndex: 0,
            explanation: "The three locks: unicidade (one union per category per territory), the ministry charter (recognition + intervention power), and the imposto sindical (one day's wage per year from every worker in the category).",
            sourceLessonSlug: "brazil-three-locks",
          },
        ],
      },
    },

    // ───────── SECTION 2 · THE DICTATORSHIP, AND THE STRIKES THAT WEREN'T SUPPOSED TO HAPPEN ─────────
    {
      slug: "brazil-dictatorship-arrocho",
      section: "Section 2 · The dictatorship, and the strikes that weren't supposed to happen",
      title: "4 · 1964–1977: the machine changes hands, and a lie is found in the index",
      recallContent: [
        {
          prompt: "Name the three locks of the CLT's union system.",
          answer: "Unicidade sindical (one union per category per territory — now in the 1988 Constitution, art. 8, II); the ministry charter (state recognition, with the power to intervene and remove leaders); and the imposto sindical (a compulsory tax of one day's wage per year from every worker in the category, member or not).",
        },
        {
          prompt: "Why has Brazil never ratified ILO Convention 87?",
          answer: "C87 protects workers' right to form organizations 'of their own choosing,' and Brazilian scholarship is blunt that a constitution mandating one union per category per territory (unicidade) cannot promise a choice. As of 2026 the rule is still in Article 8, so Brazil still cannot ratify.",
        },
      ],
      body: `Here is the danger of a labor system built as a machine of state: **machines change hands.**

On **31 March–1 April 1964**, Brazil's military overthrew the elected government and ruled for the next **twenty-one years** (1964–1985). The generals did not need to build an apparatus for controlling labor. **Vargas had already built it.** They simply turned the keys that were lying in the CLT:

- **The intervention power (Lock 2).** The Labor Ministry could remove a union's elected leadership and install its own trustees — so, after the coup, it did, across hundreds of unions. A leadership that displeased the regime was *cassada* — stripped — and replaced.
- **The tax kept flowing (Lock 3).** Here is the detail to underline: **interventions did not bankrupt a union, because the union's money never came from its members.** The imposto sindical arrived by law regardless. A captured union was a *funded* captured union.
- Strikes were smothered by statute and by fear. Wage increases were no longer bargained at all: the government **set them centrally, by decree, using an official formula** — a policy Brazilians called the ***arrocho salarial***, the "wage squeeze" (Memorial da Democracia, n.d.).

Brazilian workers have a word for the union officer who thrived in this world: ***pelego*** — literally the sheepskin pad that sits between the saddle and the horse's back, softening the ride **for the rider**. A pelego held office in the workers' union and served the state. The word is an entire labor history in two syllables, and it is Brazil's answer to a question the Mexico course taught you to ask: *whose union is it?*

## 1977: the number that broke the spell

The arrocho formula adjusted wages using the **official inflation index**. Which gave the regime an obvious temptation — and in 1977, proof surfaced that it had given in.

Economists at **DIEESE** — a statistics institute the unions themselves had founded in the 1950s, led at the time by **Walter Barelli** — showed, using findings that traced back to World Bank data and the Getúlio Vargas Foundation, that the official inflation figure for **1973** had been **manipulated**: announced as **12.6%** when the real figure was around **22.5%**. Because each year's wage adjustment compounded on the last, the understatement had quietly eaten workers' pay for years. For the metalworkers of São Bernardo do Campo and Diadema, DIEESE put the accumulated loss at **34.1%** of purchasing power (Confederação Nacional dos Trabalhadores Metalúrgicos [CNTM], n.d.; Sindicato dos Metalúrgicos do ABC [SMABC], n.d.-a).

In **September 1977**, those metalworkers held assemblies and launched a campaign with a demand of surgical simplicity: ***reposição* — give back the 34.1% you took** (SMABC, n.d.-a).

**Notice what kind of weapon this was.** Not an uprising — an *audit*. The regime's own machinery said wages tracked inflation; the unions' own statisticians proved the inflation number was false. The campaign did not yet break any law. It simply made the state's arithmetic indefensible — and it handed a young union president in São Bernardo, a lathe operator named **Luiz Inácio da Silva**, known as **Lula**, the issue that the next lesson turns into the biggest strikes in Brazilian history.

> **Source note.** The histories cited here are kept by the metalworkers' union (SMABC), the CUT, and allied institutes — **parties to this story**, useful for dates and sequence, and proud of their own role. The course uses them for the record of events and flags the interest, exactly as the Mexico course does with the CTM's official history. DIEESE's 1977 finding, however, was confirmed against World Bank–derived data at the time — that is *why* it worked.

:::reveal Why did intervening in a Brazilian union not bankrupt it — and why does that detail matter so much? ||| Because of Lock 3: the union's budget came from the compulsory imposto sindical, collected by law from every worker in the category, not from members' dues. So a union whose elected leaders had been removed and replaced with regime trustees kept its full revenue — a captured union was a funded captured union. It matters because it shows the corporatist design working exactly as built: a funding system that never depended on workers' consent could not be withdrawn by workers when the union stopped serving them.

## Sources
- Memorial da Democracia. (n.d.). *Novo Sindicalismo (1978–1983)*. https://memorialdademocracia.com.br/card/novo-sindicalismo
- Confederação Nacional dos Trabalhadores Metalúrgicos. (n.d.). *Os 60 anos do Dieese*. https://cntm.org.br/os-60-anos-do-dieese/
- Sindicato dos Metalúrgicos do ABC. (n.d.-a). *1977*. https://smabc.org.br/1977-2/ [The union's own history — a party to this story, used for dates and sequence.]
- Decreto-Lei nº 5.452, de 1º de maio de 1943 (Consolidação das Leis do Trabalho). Presidência da República. https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm`,
    },
    {
      slug: "brazil-abc-strikes",
      section: "Section 2 · The dictatorship, and the strikes that weren't supposed to happen",
      title: "5 · 1978–1980: the ABC strikes — a stadium, 41 days, and a union taken back",
      recallContent: [
        {
          prompt: "What was the arrocho salarial?",
          answer: "The 'wage squeeze' — under the military regime (1964–1985), wages were not bargained but set centrally by government decree using the official inflation index.",
        },
        {
          prompt: "What did DIEESE prove in 1977, and what campaign did it ignite?",
          answer: "That the official 1973 inflation figure had been manipulated — announced at 12.6% versus a real figure around 22.5% — costing São Bernardo/Diadema metalworkers an accumulated 34.1% of purchasing power. In September 1977 they launched the 'reposição' campaign: give back the 34.1%.",
        },
        {
          prompt: "What is a pelego?",
          answer: "A union officer who serves the state or employer rather than the workers — literally the sheepskin pad between saddle and horse, softening the ride for the rider.",
        },
      ],
      body: `On the morning of **12 May 1978**, workers at the **Scania** truck plant in São Bernardo do Campo received their pay slips, saw the government-fixed adjustment, and **stopped the machines** (SMABC, n.d.-b). No march, no barricade — they stood at their stations with their arms crossed, demanding a 20% raise. In a country where wages were set by decree and strikes had been smothered for over a decade, the stoppage was not supposed to be possible. Within days it spread across the industrial suburbs of São Paulo known as the **ABC** (Santo André, São **B**ernardo, São **C**aetano).

What followed came in three waves, each bigger than the last (Memorial da Democracia, n.d.; SMABC, n.d.-b):

| Year | What happened |
| --- | --- |
| **1978** | The Scania stoppage (12 May) spreads factory to factory across the ABC. |
| **1979** | Mass strikes return; on May Day, more than **150,000** people fill the **Vila Euclides stadium** in São Bernardo — the union hall could never have held the movement, so the movement met in a stadium. |
| **1980** | A **41-day** strike; over **300,000** metalworkers out across São Paulo state. The government **intervenes in the union**, strips its elected leadership, and jails **Lula and more than a dozen other leaders** under the **National Security Law**. They are released only on the strike's 41st day. |

**Now place this inside the course's architecture, because that is the point of teaching it.**

The strikes were led from **inside the official structure**. Lula had been elected president of the **state-chartered** São Bernardo and Diadema metalworkers' union in **1975** — a Lock-1 union, financed by the Lock-3 tax. The movement the press called the ***novo sindicalismo*** ("new unionism") captured Vargas's machine from within and made it do the one thing it was never designed to do: **obey its members.** Assemblies in a stadium, votes by raised hands in front of everyone, bargaining aimed directly at the employers instead of at the government's formula — the corporatist shell, filled with actual workers' democracy.

**Compare Poland, deliberately** (labor-poland). In the very same season — Gdańsk, August 1980 — Polish workers facing a one-party state made the opposite structural choice: they built **Solidarność** *outside* the official unions, and their first demand was the right to unions free of the state. Brazil's metalworkers **took over** the official union; Poland's shipyard workers **walked around** it. Two authoritarian corporatisms, two escape routes — and in both countries, the labor movement became the training ground of the democratic opposition. When Brazil's dictatorship finally ended in **1985**, the strikes of the ABC were part of how the ending had begun.

And the regime's counterattack proved the anchor course's fourth question still had teeth. *What happens to you if you try?* In Brazil in 1980: **intervention, cassation, and prison under a national-security statute** — for leading a wage strike.

The movement's leaders drew an institutional conclusion you will meet in the next section: winning inside one factory, or even one union, was not enough. They founded a party (1980) and a national union central (1983) — and one of them, eventually, became president of the Republic.

:::reveal Brazil's ABC metalworkers (1978–80) and Poland's Solidarność (1980) both fought authoritarian corporatist union systems — but with opposite structural strategies. What were the two strategies? ||| The ABC metalworkers captured the official structure from within: Lula led the state-chartered São Bernardo metalworkers' union itself, and the novo sindicalismo made Vargas's machine obey its members. Solidarność went outside the structure: Polish workers built a brand-new union independent of the party-state, and its first demand was the right to unions free of it. Same enemy — state-controlled labor channels — two escape routes; in both countries the labor movement became a training ground of the democratic opposition.

## Sources
- Sindicato dos Metalúrgicos do ABC. (n.d.-b). *Scania, 1978: a greve metalúrgica que acendeu a luta pela democracia*. https://smabc.org.br/scania-1978-a-greve-metalurgica-que-acendeu-a-luta-pela-democracia/ [The union's own history — a party to this story.]
- Memorial da Democracia. (n.d.). *Novo Sindicalismo (1978–1983)*. https://memorialdademocracia.com.br/card/novo-sindicalismo
- Fundação Perseu Abramo. (2018, May 12). *40 anos da greve na Scania: braços cruzados contra a ditadura*. https://fpabramo.org.br/2018/05/12/40-anos-da-greve-na-scania-bracos-cruzados-contra-ditadura/ [Maintained by a foundation linked to the PT — a party to this story.]`,
    },
    {
      slug: "brazil-section-2-quiz",
      section: "Section 2 · The dictatorship, and the strikes that weren't supposed to happen",
      title: "6 · Check yourself: the machine changes hands",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "When the military took power in 1964, what did it have to build in order to control organized labor?",
            options: [
              "Nothing — Vargas's CLT machinery (intervention power, monopoly unions, the compulsory tax) was already there to be used",
              "An entirely new labor code, written from scratch in 1965",
              "A network of secret unions loyal to the army",
              "A national wage-bargaining council with union majorities",
            ],
            correctIndex: 0,
            explanation: "That is the lesson's core: a labor system built as a machine of state changes hands with the state. The generals turned keys that were already in the CLT.",
            sourceLessonSlug: "brazil-dictatorship-arrocho",
          },
          {
            prompt: "How long did Brazil's military regime last?",
            options: ["Twenty-one years — 1964 to 1985", "Five years — 1964 to 1969", "Ten years — 1964 to 1974", "Two years — 1964 to 1966"],
            correctIndex: 0,
            explanation: "From the coup of 31 March–1 April 1964 to the return of civilian government in 1985.",
            sourceLessonSlug: "brazil-dictatorship-arrocho",
          },
          {
            prompt: "Why did a government intervention not bankrupt the union it captured?",
            options: [
              "Because the union's revenue was the compulsory tax, which arrived by law regardless of what workers thought — a captured union was a funded captured union",
              "Because the government paid captured unions a special subsidy",
              "Because members always kept paying dues out of loyalty",
              "Because unions held large stock portfolios",
            ],
            correctIndex: 0,
            explanation: "Lock 3 working exactly as designed: funding that never depended on workers' consent could not be withdrawn by workers when the union stopped serving them.",
            sourceLessonSlug: "brazil-dictatorship-arrocho",
          },
          {
            prompt: "What was the arrocho salarial?",
            options: [
              "The 'wage squeeze' — wages set centrally by government decree using the official inflation index, not bargained",
              "A minimum-wage increase decreed every May Day",
              "A strike fund administered by DIEESE",
              "The overtime premium in the CLT",
            ],
            correctIndex: 0,
            explanation: "Under the military regime, collective bargaining over pay effectively ceased; the state's formula decided. That made the official inflation index the whole ballgame — and the index was manipulated.",
            sourceLessonSlug: "brazil-dictatorship-arrocho",
          },
          {
            prompt: "What is a pelego?",
            options: [
              "A union officer who serves the state or employer rather than the workers — from the sheepskin pad that softens the ride for the rider",
              "A worker who refuses to join a strike",
              "A government labor inspector",
              "The president of a union federation",
            ],
            correctIndex: 0,
            explanation: "Two syllables of labor history — Brazil's answer to the Mexico course's question, 'whose union is it?'",
            sourceLessonSlug: "brazil-dictatorship-arrocho",
          },
          {
            prompt: "What did DIEESE's economists prove in 1977?",
            options: [
              "That the official 1973 inflation figure had been manipulated — announced at 12.6% versus a real figure around 22.5% — quietly eating workers' pay through compounding",
              "That Brazilian wages were the highest in Latin America",
              "That the union tax was being embezzled by the Labor Ministry",
              "That strikes had increased every year of the dictatorship",
            ],
            correctIndex: 0,
            explanation: "The finding traced back to World Bank data and the Getúlio Vargas Foundation. For São Bernardo/Diadema metalworkers, DIEESE put the accumulated loss at 34.1% of purchasing power.",
            sourceLessonSlug: "brazil-dictatorship-arrocho",
          },
          {
            prompt: "What made the 1977 'reposição' campaign such an effective weapon?",
            options: [
              "It was an audit, not an uprising — it used the state's own arithmetic and the unions' own statisticians to make the official wage formula indefensible",
              "It called for a nationwide general strike on day one",
              "It was secretly funded by foreign governments",
              "It demanded the abolition of the CLT",
            ],
            correctIndex: 0,
            explanation: "The demand was surgical: give back the 34.1% the manipulated index took. It broke no law — and it handed the São Bernardo union president, Lula, the issue that became the ABC strikes.",
            sourceLessonSlug: "brazil-dictatorship-arrocho",
          },
          {
            prompt: "Why does this course flag that SMABC, CUT and PT-linked foundations are 'parties to this story'?",
            options: [
              "Their histories are useful for dates and sequence but proud of their own role — label your sources and notice who is talking",
              "Because their accounts are always false",
              "Because Brazilian law forbids unions from publishing history",
              "Because they wrote the CLT",
            ],
            correctIndex: 0,
            explanation: "The same habit the Mexico course applies to the CTM's official history. Interested sources can be used — labeled.",
            sourceLessonSlug: "brazil-dictatorship-arrocho",
          },
          {
            prompt: "What happened at the Scania plant on 12 May 1978?",
            options: [
              "Workers saw the government-fixed adjustment on their pay slips and stopped the machines — the stoppage spread across the ABC within days",
              "The plant closed permanently and moved to Argentina",
              "The army occupied the factory before any strike began",
              "Workers voted to accept the government formula",
            ],
            correctIndex: 0,
            explanation: "Arms crossed at their stations, demanding a 20% raise — in a country where wages were set by decree, a stoppage that was not supposed to be possible.",
            sourceLessonSlug: "brazil-abc-strikes",
          },
          {
            prompt: "What does 'ABC' refer to in the ABC strikes?",
            options: [
              "The industrial suburbs of São Paulo — Santo André, São Bernardo, São Caetano",
              "The initials of the three union leaders who called the strike",
              "The Brazilian Labor Code's first three articles",
              "A television network that covered the strikes",
            ],
            correctIndex: 0,
            explanation: "The metalworking belt around São Paulo — home of the truck and auto plants, and of the São Bernardo metalworkers' union Lula led.",
            sourceLessonSlug: "brazil-abc-strikes",
          },
          {
            prompt: "Why did the 1979 and 1980 May Day assemblies meet in the Vila Euclides stadium?",
            options: [
              "The movement had outgrown any union hall — more than 150,000 people attended, voting by raised hands in the open",
              "The union hall had been burned down",
              "Stadium meetings were required by the CLT",
              "The government offered the stadium to keep strikers off the streets",
            ],
            correctIndex: 0,
            explanation: "Stadium assemblies became the emblem of the novo sindicalismo: the corporatist shell filled with actual workers' democracy.",
            sourceLessonSlug: "brazil-abc-strikes",
          },
          {
            prompt: "What happened during the 41-day strike of 1980?",
            options: [
              "Over 300,000 metalworkers struck across São Paulo state; the government intervened in the union, stripped its leadership, and jailed Lula and more than a dozen leaders under the National Security Law",
              "The government granted the 34.1% reposição in full",
              "The strike collapsed after three days without support",
              "Employers locked out workers for a full year",
            ],
            correctIndex: 0,
            explanation: "The jailed leaders were released only on the strike's 41st day. The anchor's fourth question — what happens to you if you try? — answered: intervention, cassation, prison, for leading a wage strike.",
            sourceLessonSlug: "brazil-abc-strikes",
          },
          {
            prompt: "What was structurally distinctive about the novo sindicalismo, compared with Poland's Solidarność?",
            options: [
              "It captured the official state-chartered union from within — Lula led the legal São Bernardo union — while Solidarność built a new union outside the official structure",
              "It was organized by the Catholic Church, while Solidarność was secular",
              "It rejected strikes, while Solidarność embraced them",
              "It was funded by the government, while Solidarność was funded by dues",
            ],
            correctIndex: 0,
            explanation: "Two authoritarian corporatisms, two escape routes: Brazil's workers took over the official machine; Poland's walked around it. In both countries the labor movement trained the democratic opposition.",
            sourceLessonSlug: "brazil-abc-strikes",
          },
          {
            prompt: "When had Lula become president of the São Bernardo and Diadema metalworkers' union?",
            options: ["1975 — three years before the Scania stoppage", "1964 — the year of the coup", "1980 — during the 41-day strike", "1943 — the year of the CLT"],
            correctIndex: 0,
            explanation: "A lathe operator elected to lead a state-chartered, tax-funded Lock-1 union — which the novo sindicalismo then made do the one thing it was never designed to do: obey its members.",
            sourceLessonSlug: "brazil-abc-strikes",
          },
          {
            prompt: "What institutional conclusion did the ABC movement's leaders draw from the strikes?",
            options: [
              "Winning inside one factory or union was not enough — they founded a party (1980) and a national union central (1983)",
              "That strikes should never be attempted under a dictatorship",
              "That the CLT should be re-signed by a new dictator",
              "That wage bargaining should return to the government's formula",
            ],
            correctIndex: 0,
            explanation: "The PT (February 1980) and the CUT (August 1983) — Section 3's subject. One of the movement's leaders eventually became president of the Republic.",
            sourceLessonSlug: "brazil-abc-strikes",
          },
        ],
      },
    },
  ],
};
