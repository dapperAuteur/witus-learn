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
    "The country course built around a controlled experiment nobody could have designed: what happens to unions that were funded by the state, when the state stops funding them? Brazil answers it. In 1943, Getúlio Vargas's CLT wrote corporatism directly into law, one state-chartered union per category per territory, financed by a compulsory union tax deducted from every worker, member or not. That machinery organized labor and controlled it at once, and it survived democracy, dictatorship, and redemocratization, until the ABC metalworkers' strikes of 1978-80 produced a new unionism, a new federation (CUT), a new party (PT), and, eventually, a president. Then Law 13.467 of 2017 abolished the compulsory tax, and union revenue collapsed by more than 90% within two years, the course teaches the documented figures, year by year, source by source. It also teaches who the CLT never reached: the roughly four in ten Brazilian workers in informality (IBGE), the app drivers whose employment status Brazil's Supreme Court had not resolved as of July 2026, and the workers rescued from trabalho análogo à escravidão, slavery-like labor, by a mobile inspection system and a 'dirty list' that names employers publicly. Neutral and dated on live politics; every figure carries its year and source. Cited to the CLT, the 1988 Constitution, IBGE, the ILO, the STF's published decisions, and Brazil's Ministry of Labor.",
  lessons: [
    // ───────────── SECTION 1 · THE GIFT FROM ABOVE: VARGAS, THE CLT, AND CORPORATISM ─────────────
    {
      slug: "brazil-vargas-clt",
      section: "Section 1 · The gift from above: Vargas, the CLT, and corporatism",
      title: "1 · 1943: labor law arrives as a gift, with strings attached",
      body: `Every course in this track starts with the anchor's four questions, *who may organize? who is excluded? who bargains with whom? what happens to you if you try?* Brazil's answers all trace back to one document, and to the very unusual way it arrived.

In the United States (the anchor course), labor law was **won from below**: strikes, injunctions, Haymarket, Triangle, and finally the Wagner Act of 1935, extracted from a reluctant state. In Brazil, labor law was **handed down from above**, by a dictator, on May Day, as a gift.

**The giver was Getúlio Vargas**, who took power in the Revolution of 1930 and ruled until 1945, from 1937 as the outright dictator of a regime he named the **Estado Novo** ("New State"). On **1 May 1943**, Vargas signed **Decreto-Lei nº 5.452: the Consolidação das Leis do Trabalho**, universally known as the **CLT** (Decreto-Lei nº 5.452, 1943). *Consolidação* means consolidation, the CLT gathered a decade of labor decrees issued since 1930 into one code. It regulated hours, vacations, dismissals, women's and children's work, unions, and labor courts, and, amended thousands of times, **it is still the backbone of Brazilian labor law today**.

Two things about this arrangement should stop you.

**First: real protections.** The CLT was not an empty gesture. It gave formal Brazilian workers enforceable rights decades before many neighbors, and it gave them a document that became the emblem of belonging: the **carteira de trabalho**, the work card every formal employee holds, in which every job, wage, and dismissal is recorded. To this day, the Brazilian shorthand for "a real job with rights" is **carteira assinada**, "signed card." Hold onto that phrase; in Section 5 it becomes the border of the entire system.

**Second: the price.** The same code that granted the rights also decided **who would speak for workers, and on what terms**. The CLT did not protect unions that workers had built; it **chartered** unions, one per occupational category per territory, recognized by the Labor Ministry, financed by a tax the state collected (next lesson). The state organized labor **and** controlled it, in the same statute. Political scientists call this design **corporatism**: the state structures society into official categories, labor here, employers there, and deals with each through a single authorized channel it supervises.

**Now the claim you will hear, and what the record supports.** It is often said that Vargas copied the CLT from **Mussolini's Italy**, specifically from the *Carta del Lavoro* (1927), fascist Italy's corporatist labor charter. The historian **John D. French**, who studied the CLT's drafting, concluded that the copy story **overstates it**: the CLT consolidated Brazilian decrees accumulated since 1930 and drew on several European models, and its drafters had reasons of their own (French, 2004). What is **not** in dispute is the design itself: state-chartered monopoly unions inside official categories is the corporatist architecture, and Estado Novo Brazil built it deliberately. Learn the distinction, *the influence is debated; the architecture is documented.*

**One more creation of the same era, because almost no student outside Brazil has heard of it.** Vargas also built a dedicated **labor judiciary**, the **Justiça do Trabalho**, inaugurated on **1 May 1941** as an administrative body attached to the executive, then made a full branch of the judiciary by the 1946 Constitution (Tribunal Superior do Trabalho [TST], n.d.). Brazil has entire courts, up to a national high court (the TST), that hear **nothing but labor cases**. Remember it in Section 5, when the question becomes *which workers can reach those courts at all.*

:::reveal In the US, labor rights were won from below and written into law in 1935. How did enforceable labor law arrive in Brazil, and why does the difference matter? ||| It was handed down from above: the dictator Getúlio Vargas signed the CLT (Decreto-Lei 5.452) on 1 May 1943, during the Estado Novo, consolidating a decade of decrees into one code. The difference matters because the same statute that granted real protections also decided who would speak for workers, state-chartered monopoly unions inside official categories, financed by a state-collected tax. A gift from above comes with the giver's strings: the state organized labor and controlled it in the same document.

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
          answer: "The Consolidação das Leis do Trabalho (Decreto-Lei 5.452), Brazil's consolidated labor code, signed by Getúlio Vargas on 1 May 1943, during the Estado Novo dictatorship. Amended heavily, it is still the backbone of Brazilian labor law.",
        },
        {
          prompt: "What does 'carteira assinada' mean, and why does it matter?",
          answer: "Literally 'signed card', having your carteira de trabalho (work card) signed by an employer, i.e. formal employment with CLT rights. It is the border of the whole system: workers without it stand outside most of the CLT's protections.",
        },
        {
          prompt: "What is corporatism, in the labor sense?",
          answer: "A design in which the state structures society into official categories and deals with each through a single authorized channel it supervises, for labor: state-chartered monopoly unions rather than unions workers freely build.",
        },
      ],
      body: `The CLT's union system stood on three locks. Read them slowly, the rest of the course is what happens when each one is tested.

## Lock 1, *unicidade sindical*: one union per category per territory

Brazilian law does not let workers choose among competing unions. For each **occupational category** (metalworkers, bank workers, teachers…) in each **territory** (no smaller than one municipality), there may be **exactly one** union. This rule, **unicidade sindical**, was built into the CLT's system and then, remarkably, **written into the democratic constitution of 1988**, Article 8, item II: it is *forbidden to create more than one union organization, at any level, representing a professional or economic category, in the same territorial base* (Constituição Federal [CF], 1988, art. 8º, II).

You do not vote a Brazilian union in. You are **assigned** to it, by your job description and your address.

## Lock 2, the charter: recognition from the ministry

Under the CLT as Vargas built it, a union existed legally only once the **Labor Ministry recognized it**, the ministry defined the categories, issued the charter, and could **intervene** in a union and remove its leadership (Decreto-Lei nº 5.452, 1943). Keep that intervention power in mind: Section 2 shows a dictatorship using it, and Section 3 shows the 1988 Constitution abolishing it.

## Lock 3, the *imposto sindical*: the compulsory union tax

The CLT financed the system with a tax: **one day's wage per year, deducted from every worker in the category, member or not**, and distributed by statute among the local union, its federation and confederation, and a government fund (Decreto-Lei nº 5.452, 1943, arts. 578-610). Whether you joined, whether you voted, whether you had ever met your union: one day of your March pay went to it.

**Sit with what the third lock does.** A union funded by a tax **does not need its members**, not their consent, not their dues, not their enthusiasm. Its budget arrives whether workers love it or despise it. That is the deal Vargas offered: guaranteed representation, guaranteed revenue, and no need, ever, to ask the workers anything. In Section 4, seventy-four years later, Brazil switches that tax off, and you will see exactly what it had been holding up.

## Name the model precisely, this track has shown you three cousins

- **Mexico** (labor-mexico): the CTM was fused to the **governing party**, a union inside the PRI's structure. The party, not the statute, was the cage.
- **Poland** (labor-poland): the official unions were organs of a **party-state**; Solidarność's first demand in 1980 was unions free of it.
- **China** (the anchor): the ACFTU is an **arm of the party-state** by statute.
- **Brazil** is a fourth arrangement: unions that are **nominally private** and not part of any party, but **chartered, categorized, and funded by the state**, whoever governs it. The cage is the legal architecture itself, and it outlived every regime that ruled through it.

**And the sharpest single receipt:** Brazil has **never ratified ILO Convention 87**, the freedom-of-association convention at the floor of international labor law (International Labour Organization [ILO], n.d.). Brazilian labor-law scholars are blunt about why: C87 protects workers' right to form organizations *"of their own choosing,"* and a constitution that mandates **one** union per category per territory cannot promise a choice (Aparecido, 2017). Mexico ratified C87 in 1950. Poland's communist government had ratified it in 1957 (and ignored it). **Democratic Brazil, as of 2026, still cannot sign it**, because *unicidade* is still in Article 8.

:::reveal Brazil has never ratified ILO Convention 87, while Mexico ratified it in 1950 and even communist Poland ratified it in 1957. What in Brazil's own constitution blocks ratification, and what does that tell you? ||| Unicidade sindical, Article 8, II of the 1988 Constitution forbids more than one union per category per territorial base. C87's core is workers' right to form organizations "of their own choosing," and a one-union-per-category rule cannot promise a choice, so Brazil cannot ratify without amending its constitution. It tells you the corporatist architecture of 1943 is not a dictatorship-era relic: the democratic constitution kept it, and it still binds Brazil today.

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
              "The Consolidação das Leis do Trabalho, Brazil's consolidated labor code of 1943",
              "The Central Única dos Trabalhadores, a union central founded back in 1983",
              "The Treaty of Asunción, the 1991 trade pact between Brazil and Argentina",
              "The democratic constitution promulgated on 5 October 1988, replacing the CLT",
            ],
            correctIndex: 0,
            explanation: "Decreto-Lei nº 5.452, signed 1 May 1943. 'Consolidação' means consolidation, it gathered a decade of labor decrees into one code.",
            sourceLessonSlug: "brazil-vargas-clt",
          },
          {
            prompt: "Who signed the CLT into law, and under what regime?",
            options: [
              "Getúlio Vargas, during the Estado Novo dictatorship",
              "Lula, during his first term as president of Brazil",
              "The Brazilian Congress, during the First Republic",
              "The military junta, in the year of the 1964 coup",
            ],
            correctIndex: 0,
            explanation: "Vargas ruled from 1930 to 1945, from 1937 as dictator of the Estado Novo. He signed the CLT on May Day 1943.",
            sourceLessonSlug: "brazil-vargas-clt",
          },
          {
            prompt: "How did enforceable labor law arrive in Brazil, compared with the United States?",
            options: [
              "Handed down from above by a dictator, rather than won from below in strikes",
              "Exactly as in the US, through decades of strikes ending in a Wagner-style act",
              "Imposed by the ILO as a condition of Brazil's founding membership in 1919",
              "Through a general strike in 1917 that toppled the government in São Paulo",
            ],
            correctIndex: 0,
            explanation: "The US Wagner Act (1935) was extracted from below; the CLT (1943) was a gift from above, and the giver attached strings: the same statute decided who would speak for workers.",
            sourceLessonSlug: "brazil-vargas-clt",
          },
          {
            prompt: "What is the carteira de trabalho, and what does 'carteira assinada' mean?",
            options: [
              "The work card recording every formal job; 'signed card' means formal employment",
              "A union membership card, required to vote in union elections and strike ballots",
              "A tax document filed with the Labor Ministry each March, when the tax fell due",
              "An identity card issued only to public employees and formal domestic workers",
            ],
            correctIndex: 0,
            explanation: "The carteira is the emblem of belonging to the CLT system. Its absence, no signed card, is the border of the system, and the subject of Section 5.",
            sourceLessonSlug: "brazil-vargas-clt",
          },
          {
            prompt: "What is corporatism, in the labor sense this course uses?",
            options: [
              "The state sorts society into official categories, one supervised channel each",
              "A system in which corporations are legally forbidden to recognize any union",
              "Any economy dominated by large corporations rather than by small family firms",
              "A system in which unions own shares in the firms they bargain with, as co-owners",
            ],
            correctIndex: 0,
            explanation: "For labor: state-chartered monopoly unions inside official categories, rather than unions workers freely build. The CLT is the track's clearest example of corporatism written directly into law.",
            sourceLessonSlug: "brazil-vargas-clt",
          },
          {
            prompt: "What does the historian John D. French conclude about the claim that the CLT was copied from Mussolini's Carta del Lavoro?",
            options: [
              "The copy story overstates it; the CLT consolidated a decade of Brazilian decrees",
              "It is fully accurate: the CLT is a word-for-word translation of the 1927 text",
              "The CLT was copied from the US Wagner Act of 1935, not from any Italian model",
              "The Carta del Lavoro was only a fascist slogan, never an actual written charter",
            ],
            correctIndex: 0,
            explanation: "French (2004): the influence is debated; the architecture, state-chartered monopoly unions inside official categories, is documented. Learn to keep those two claims separate.",
            sourceLessonSlug: "brazil-vargas-clt",
          },
          {
            prompt: "What is the Justiça do Trabalho?",
            options: [
              "Brazil's dedicated labor judiciary, topped by a national high court, the TST",
              "The labor-inspection arm of the federal police, which raids illegal worksites",
              "A private arbitration service run jointly by the union confederations and CNI",
              "The labor chamber of Brazil's electoral court, the TSE, sitting in Brasília",
            ],
            correctIndex: 0,
            explanation: "Inaugurated 1 May 1941 as an executive body and made a full branch of the judiciary by the 1946 Constitution (TST, n.d.). Almost no other country has one at this scale.",
            sourceLessonSlug: "brazil-vargas-clt",
          },
          {
            prompt: "What is unicidade sindical?",
            options: [
              "Only ONE union may exist per occupational category per territory, by law",
              "Every union must affiliate to one single national confederation, by law",
              "A union's strike votes must be unanimous before a strike becomes lawful",
              "The 1943 merger of all Brazilian unions into one single national body",
            ],
            correctIndex: 0,
            explanation: "You do not vote a Brazilian union in; you are assigned to it by job description and address. The territorial base can be no smaller than one municipality.",
            sourceLessonSlug: "brazil-three-locks",
          },
          {
            prompt: "Where does unicidade sindical live in Brazilian law today?",
            options: [
              "In the democratic constitution of 1988, Article 8, item II",
              "Only in the original 1943 CLT, repealed by the 2017 reform",
              "In a 1967 decree of the military dictatorship, still in force",
              "In ILO Convention 87, which Brazil ratified back in 1950",
            ],
            correctIndex: 0,
            explanation: "That is the remarkable part: redemocratized Brazil wrote the corporatist rule into its new constitution. It is not a dictatorship-era leftover, it is current constitutional law.",
            sourceLessonSlug: "brazil-three-locks",
          },
          {
            prompt: "How did the imposto sindical (compulsory union tax) work?",
            options: [
              "One day's wage a year, deducted from every worker in the category, member or not",
              "A voluntary monthly fee paid only by the workers who chose to join the union",
              "A payroll tax paid by employers, which funded strike pay for their own workers",
              "A levy paid only in the years when a worker's collective contract was renewed",
            ],
            correctIndex: 0,
            explanation: "CLT arts. 578-610. Whether you joined or had ever met your union, one day of your March pay went to it.",
            sourceLessonSlug: "brazil-three-locks",
          },
          {
            prompt: "Why does a union funded by a compulsory tax not need its members?",
            options: [
              "Its budget arrives by law whether workers support it or despise it",
              "Because a tax always raises more money than voluntary membership dues",
              "Because employers, not workers, paid the tax straight to the ministry",
              "Because tax-funded unions were legally forbidden to enrol any members",
            ],
            correctIndex: 0,
            explanation: "Guaranteed representation plus guaranteed revenue equals no accountability pressure. Section 4 shows what happened when the tax was switched off in 2017.",
            sourceLessonSlug: "brazil-three-locks",
          },
          {
            prompt: "How does Brazil's corporatist model differ from Mexico's CTM?",
            options: [
              "Brazil's unions were state-chartered; Mexico's CTM was fused to the ruling party",
              "They are identical: both were formal labour sectors of the governing party",
              "Brazil banned unions outright until 1988; Mexico allowed them throughout",
              "Mexico's unions lived on a compulsory tax; Brazil's lived on voluntary dues",
            ],
            correctIndex: 0,
            explanation: "In Mexico the party was the cage; in Brazil the cage is the legal architecture itself, which is why it outlived every regime that ruled through it.",
            sourceLessonSlug: "brazil-three-locks",
          },
          {
            prompt: "What power did the Labor Ministry hold over unions under the CLT as Vargas built it?",
            options: [
              "It defined the categories, issued charters, and could remove union leaders",
              "It could only publish statistics about unions and their membership numbers",
              "It appointed a non-voting government observer to every union's governing board",
              "None: unions were entirely independent of the ministry from 1943 onward",
            ],
            correctIndex: 0,
            explanation: "The intervention power is the lock to watch: Section 2 shows the military dictatorship using it against the ABC metalworkers, and Section 3 shows the 1988 Constitution abolishing it.",
            sourceLessonSlug: "brazil-three-locks",
          },
          {
            prompt: "Brazil has never ratified ILO Convention 87. What is the standard explanation?",
            options: [
              "C87 protects organizations 'of their own choosing'; unicidade allows no choice",
              "Brazil left the ILO in 1943 and has never rejoined the organization since",
              "C87 binds only European member states, so Brazil was never eligible to sign",
              "Brazil ratified C87 in 1950 but formally withdrew from it again in 2017",
            ],
            correctIndex: 0,
            explanation: "The explanation is attributed to Brazilian labor-law scholarship (Aparecido, 2017). Mexico ratified C87 in 1950; even communist Poland ratified it in 1957. Democratic Brazil, as of 2026, still cannot.",
            sourceLessonSlug: "brazil-three-locks",
          },
          {
            prompt: "Which of these is one of the 'three locks' of the CLT's union system?",
            options: [
              "A state-collected tax that funded the union whether or not workers joined",
              "A requirement that union leaders be approved by the employers they face",
              "A constitutional ban on strikes across the whole of the private sector",
              "A rule that every union must dissolve and re-charter every five years",
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
      title: "4 · 1964-1977: the machine changes hands, and a lie is found in the index",
      recallContent: [
        {
          prompt: "Name the three locks of the CLT's union system.",
          answer: "Unicidade sindical (one union per category per territory, now in the 1988 Constitution, art. 8, II); the ministry charter (state recognition, with the power to intervene and remove leaders); and the imposto sindical (a compulsory tax of one day's wage per year from every worker in the category, member or not).",
        },
        {
          prompt: "Why has Brazil never ratified ILO Convention 87?",
          answer: "C87 protects workers' right to form organizations 'of their own choosing,' and Brazilian scholarship is blunt that a constitution mandating one union per category per territory (unicidade) cannot promise a choice. As of 2026 the rule is still in Article 8, so Brazil still cannot ratify.",
        },
      ],
      body: `Here is the danger of a labor system built as a machine of state: **machines change hands.**

On **31 March-1 April 1964**, Brazil's military overthrew the elected government and ruled for the next **twenty-one years** (1964-1985). The generals did not need to build an apparatus for controlling labor. **Vargas had already built it.** They simply turned the keys that were lying in the CLT:

- **The intervention power (Lock 2).** The Labor Ministry could remove a union's elected leadership and install its own trustees, so, after the coup, it did, across hundreds of unions. A leadership that displeased the regime was *cassada*, stripped, and replaced.
- **The tax kept flowing (Lock 3).** Here is the detail to underline: **interventions did not bankrupt a union, because the union's money never came from its members.** The imposto sindical arrived by law regardless. A captured union was a *funded* captured union.
- Strikes were smothered by statute and by fear. Wage increases were no longer bargained at all: the government **set them centrally, by decree, using an official formula**, a policy Brazilians called the ***arrocho salarial***, the "wage squeeze" (Memorial da Democracia, n.d.).

Brazilian workers have a word for the union officer who thrived in this world: ***pelego***, literally the sheepskin pad that sits between the saddle and the horse's back, softening the ride **for the rider**. A pelego held office in the workers' union and served the state. The word is an entire labor history in two syllables, and it is Brazil's answer to a question the Mexico course taught you to ask: *whose union is it?*

## 1977: the number that broke the spell

The arrocho formula adjusted wages using the **official inflation index**. Which gave the regime an obvious temptation, and in 1977, proof surfaced that it had given in.

Economists at **DIEESE**, a statistics institute the unions themselves had founded in the 1950s, led at the time by **Walter Barelli**, showed, using findings that traced back to World Bank data and the Getúlio Vargas Foundation, that the official inflation figure for **1973** had been **manipulated**: announced as **12.6%** when the real figure was around **22.5%**. Because each year's wage adjustment compounded on the last, the understatement had quietly eaten workers' pay for years. For the metalworkers of São Bernardo do Campo and Diadema, DIEESE put the accumulated loss at **34.1%** of purchasing power (Confederação Nacional dos Trabalhadores Metalúrgicos [CNTM], n.d.; Sindicato dos Metalúrgicos do ABC [SMABC], n.d.-a).

In **September 1977**, those metalworkers held assemblies and launched a campaign with a demand of surgical simplicity: ***reposição*, give back the 34.1% you took** (SMABC, n.d.-a).

**Notice what kind of weapon this was.** Not an uprising, an *audit*. The regime's own machinery said wages tracked inflation; the unions' own statisticians proved the inflation number was false. The campaign did not yet break any law. It simply made the state's arithmetic indefensible, and it handed a young union president in São Bernardo, a lathe operator named **Luiz Inácio da Silva**, known as **Lula**, the issue that the next lesson turns into the biggest strikes in Brazilian history.

> **Source note.** The histories cited here are kept by the metalworkers' union (SMABC), the CUT, and allied institutes — **parties to this story**, useful for dates and sequence, and proud of their own role. The course uses them for the record of events and flags the interest, exactly as the Mexico course does with the CTM's official history. DIEESE's 1977 finding, however, was confirmed against World Bank–derived data at the time — that is *why* it worked.

:::reveal Why did intervening in a Brazilian union not bankrupt it, and why does that detail matter so much? ||| Because of Lock 3: the union's budget came from the compulsory imposto sindical, collected by law from every worker in the category, not from members' dues. So a union whose elected leaders had been removed and replaced with regime trustees kept its full revenue, a captured union was a funded captured union. It matters because it shows the corporatist design working exactly as built: a funding system that never depended on workers' consent could not be withdrawn by workers when the union stopped serving them.

## Sources
- Memorial da Democracia. (n.d.). *Novo Sindicalismo (1978–1983)*. https://memorialdademocracia.com.br/card/novo-sindicalismo
- Confederação Nacional dos Trabalhadores Metalúrgicos. (n.d.). *Os 60 anos do Dieese*. https://cntm.org.br/os-60-anos-do-dieese/
- Sindicato dos Metalúrgicos do ABC. (n.d.-a). *1977*. https://smabc.org.br/1977-2/ [The union's own history — a party to this story, used for dates and sequence.]
- Decreto-Lei nº 5.452, de 1º de maio de 1943 (Consolidação das Leis do Trabalho). Presidência da República. https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm`,
    },
    {
      slug: "brazil-abc-strikes",
      section: "Section 2 · The dictatorship, and the strikes that weren't supposed to happen",
      title: "5 · 1978-1980: the ABC strikes, a stadium, 41 days, and a union taken back",
      recallContent: [
        {
          prompt: "What was the arrocho salarial?",
          answer: "The 'wage squeeze', under the military regime (1964-1985), wages were not bargained but set centrally by government decree using the official inflation index.",
        },
        {
          prompt: "What did DIEESE prove in 1977, and what campaign did it ignite?",
          answer: "That the official 1973 inflation figure had been manipulated, announced at 12.6% versus a real figure around 22.5%, costing São Bernardo/Diadema metalworkers an accumulated 34.1% of purchasing power. In September 1977 they launched the 'reposição' campaign: give back the 34.1%.",
        },
        {
          prompt: "What is a pelego?",
          answer: "A union officer who serves the state or employer rather than the workers, literally the sheepskin pad between saddle and horse, softening the ride for the rider.",
        },
      ],
      body: `On the morning of **12 May 1978**, workers at the **Scania** truck plant in São Bernardo do Campo received their pay slips, saw the government-fixed adjustment, and **stopped the machines** (SMABC, n.d.-b). No march, no barricade, they stood at their stations with their arms crossed, demanding a 20% raise. In a country where wages were set by decree and strikes had been smothered for over a decade, the stoppage was not supposed to be possible. Within days it spread across the industrial suburbs of São Paulo known as the **ABC** (Santo André, São **B**ernardo, São **C**aetano).

What followed came in three waves, each bigger than the last (Memorial da Democracia, n.d.; SMABC, n.d.-b):

| Year | What happened |
| --- | --- |
| **1978** | The Scania stoppage (12 May) spreads factory to factory across the ABC. |
| **1979** | Mass strikes return; on May Day, more than **150,000** people fill the **Vila Euclides stadium** in São Bernardo, the union hall could never have held the movement, so the movement met in a stadium. |
| **1980** | A **41-day** strike; over **300,000** metalworkers out across São Paulo state. The government **intervenes in the union**, strips its elected leadership, and jails **Lula and more than a dozen other leaders** under the **National Security Law**. They are released only on the strike's 41st day. |

**Now place this inside the course's architecture, because that is the point of teaching it.**

The strikes were led from **inside the official structure**. Lula had been elected president of the **state-chartered** São Bernardo and Diadema metalworkers' union in **1975**, a Lock-1 union, financed by the Lock-3 tax. The movement the press called the ***novo sindicalismo*** ("new unionism") captured Vargas's machine from within and made it do the one thing it was never designed to do: **obey its members.** Assemblies in a stadium, votes by raised hands in front of everyone, bargaining aimed directly at the employers instead of at the government's formula, the corporatist shell, filled with actual workers' democracy.

**Compare Poland, deliberately** (labor-poland). In the very same season, Gdańsk, August 1980, Polish workers facing a one-party state made the opposite structural choice: they built **Solidarność** *outside* the official unions, and their first demand was the right to unions free of the state. Brazil's metalworkers **took over** the official union; Poland's shipyard workers **walked around** it. Two authoritarian corporatisms, two escape routes, and in both countries, the labor movement became the training ground of the democratic opposition. When Brazil's dictatorship finally ended in **1985**, the strikes of the ABC were part of how the ending had begun.

And the regime's counterattack proved the anchor course's fourth question still had teeth. *What happens to you if you try?* In Brazil in 1980: **intervention, cassation, and prison under a national-security statute**, for leading a wage strike.

The movement's leaders drew an institutional conclusion you will meet in the next section: winning inside one factory, or even one union, was not enough. They founded a party (1980) and a national union central (1983), and one of them, eventually, became president of the Republic.

:::reveal Brazil's ABC metalworkers (1978-80) and Poland's Solidarność (1980) both fought authoritarian corporatist union systems, but with opposite structural strategies. What were the two strategies? ||| The ABC metalworkers captured the official structure from within: Lula led the state-chartered São Bernardo metalworkers' union itself, and the novo sindicalismo made Vargas's machine obey its members. Solidarność went outside the structure: Polish workers built a brand-new union independent of the party-state, and its first demand was the right to unions free of it. Same enemy, state-controlled labor channels, two escape routes; in both countries the labor movement became a training ground of the democratic opposition.

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
              "Nothing: Vargas's CLT machinery was already there to be turned",
              "An entirely new labor code, written from scratch and decreed in 1967",
              "A network of secret unions loyal to the army and its intelligence",
              "A national wage-bargaining council with a built-in union majority",
            ],
            correctIndex: 0,
            explanation: "That is the lesson's core: a labor system built as a machine of state changes hands with the state. The generals turned keys that were already in the CLT.",
            sourceLessonSlug: "brazil-dictatorship-arrocho",
          },
          {
            prompt: "How long did Brazil's military regime last?",
            options: ["Twenty-one years, 1964 to 1985", "Five years, 1964 to 1969", "Ten years, 1964 to 1974", "Two years, 1964 to 1966"],
            correctIndex: 0,
            explanation: "From the coup of 31 March-1 April 1964 to the return of civilian government in 1985.",
            sourceLessonSlug: "brazil-dictatorship-arrocho",
          },
          {
            prompt: "Why did a government intervention not bankrupt the union it captured?",
            options: [
              "Its revenue was the compulsory tax, which arrived by law regardless",
              "Because the government paid captured unions a special federal subsidy",
              "Because members kept paying their dues out of loyalty to the old leaders",
              "Because unions held large stock portfolios built up over the 1950s",
            ],
            correctIndex: 0,
            explanation: "Lock 3 working exactly as designed: funding that never depended on workers' consent could not be withdrawn by workers when the union stopped serving them.",
            sourceLessonSlug: "brazil-dictatorship-arrocho",
          },
          {
            prompt: "What was the arrocho salarial?",
            options: [
              "The 'wage squeeze': pay set by government decree, not bargained",
              "A minimum-wage increase decreed by the president every May Day",
              "A strike fund the unions administered jointly through DIEESE",
              "The overtime premium the CLT sets for hours past the eighth",
            ],
            correctIndex: 0,
            explanation: "Under the military regime, collective bargaining over pay effectively ceased; the state's formula decided. That made the official inflation index the whole ballgame, and the index was manipulated.",
            sourceLessonSlug: "brazil-dictatorship-arrocho",
          },
          {
            prompt: "What is a pelego?",
            options: [
              "A union officer who serves the state or employer, not the workers",
              "A worker who refuses to join a strike and crosses the picket line",
              "A federal labor inspector attached to the ministry's mobile teams",
              "The elected president of a national union federation or central",
            ],
            correctIndex: 0,
            explanation: "Two syllables of labor history, Brazil's answer to the Mexico course's question, 'whose union is it?'",
            sourceLessonSlug: "brazil-dictatorship-arrocho",
          },
          {
            prompt: "What did DIEESE's economists prove in 1977?",
            options: [
              "That the official 1973 inflation figure was manipulated: 12.6% vs ~22.5% real",
              "That Brazilian industrial wages were the highest anywhere in Latin America",
              "That the Labor Ministry had embezzled a third of the union tax since 1964",
              "That the number of strikes had risen every single year of the dictatorship",
            ],
            correctIndex: 0,
            explanation: "The finding traced back to World Bank data and the Getúlio Vargas Foundation. For São Bernardo/Diadema metalworkers, DIEESE put the accumulated loss at 34.1% of purchasing power.",
            sourceLessonSlug: "brazil-dictatorship-arrocho",
          },
          {
            prompt: "What made the 1977 'reposição' campaign such an effective weapon?",
            options: [
              "It was an audit, not an uprising: it made the state's arithmetic indefensible",
              "It called for an immediate nationwide general strike on its very first day",
              "It was secretly funded by foreign governments and exiled Brazilian bankers",
              "It demanded the outright abolition of the CLT and its whole labor judiciary",
            ],
            correctIndex: 0,
            explanation: "The demand was surgical: give back the 34.1% the manipulated index took. It broke no law, and it handed the São Bernardo union president, Lula, the issue that became the ABC strikes.",
            sourceLessonSlug: "brazil-dictatorship-arrocho",
          },
          {
            prompt: "Why does this course flag that SMABC, CUT and PT-linked foundations are 'parties to this story'?",
            options: [
              "They are useful for dates and sequence, but proud of their own role",
              "Because accounts written by participants are always factually false",
              "Because Brazilian law forbids unions from publishing their own history",
              "Because those organizations drafted the CLT for Vargas back in 1943",
            ],
            correctIndex: 0,
            explanation: "The same habit the Mexico course applies to the CTM's official history. Interested sources can be used, labeled.",
            sourceLessonSlug: "brazil-dictatorship-arrocho",
          },
          {
            prompt: "What happened at the Scania plant on 12 May 1978?",
            options: [
              "Workers saw the decreed adjustment on their pay slips and stopped the machines",
              "The plant shut permanently and moved its truck production over to Argentina",
              "The army occupied the factory floor before any stoppage could even begin",
              "Workers voted in assembly to accept the government's wage formula in full",
            ],
            correctIndex: 0,
            explanation: "Arms crossed at their stations, demanding a 20% raise, in a country where wages were set by decree, a stoppage that was not supposed to be possible.",
            sourceLessonSlug: "brazil-abc-strikes",
          },
          {
            prompt: "What does 'ABC' refer to in the ABC strikes?",
            options: [
              "The industrial suburbs of São Paulo: Santo André, São Bernardo, São Caetano",
              "The initials of the three union leaders who called the first 1978 stoppage",
              "The first three articles of the CLT, the ones defining the labor contract",
              "The television network whose crews filmed the Vila Euclides assemblies",
            ],
            correctIndex: 0,
            explanation: "The metalworking belt around São Paulo, home of the truck and auto plants, and of the São Bernardo metalworkers' union Lula led.",
            sourceLessonSlug: "brazil-abc-strikes",
          },
          {
            prompt: "Why did the 1979 and 1980 May Day assemblies meet in the Vila Euclides stadium?",
            options: [
              "The movement had outgrown any union hall: more than 150,000 attended",
              "The union hall had been burned down by the political police in 1978",
              "The CLT required union assemblies over 10,000 to be held in stadiums",
              "The government offered the stadium to keep strikers off the streets",
            ],
            correctIndex: 0,
            explanation: "Stadium assemblies became the emblem of the novo sindicalismo: the corporatist shell filled with actual workers' democracy.",
            sourceLessonSlug: "brazil-abc-strikes",
          },
          {
            prompt: "What happened during the 41-day strike of 1980?",
            options: [
              "Over 300,000 struck; the government seized the union and jailed Lula",
              "The government granted the full 34.1% reposição and ended the arrocho",
              "The strike collapsed after three days for lack of support in the ABC",
              "Employers locked the metalworkers out of the plants for a full year",
            ],
            correctIndex: 0,
            explanation: "The jailed leaders were released only on the strike's 41st day. The anchor's fourth question, what happens to you if you try?, answered: intervention, cassation, prison, for leading a wage strike.",
            sourceLessonSlug: "brazil-abc-strikes",
          },
          {
            prompt: "What was structurally distinctive about the novo sindicalismo, compared with Poland's Solidarność?",
            options: [
              "It captured the official state-chartered union from within, unlike Solidarność",
              "It was organized by the Catholic Church, while Solidarność was strictly secular",
              "It rejected strikes on principle, while Solidarność embraced them from day one",
              "It was funded by the government, while Solidarność lived only on members' dues",
            ],
            correctIndex: 0,
            explanation: "Two authoritarian corporatisms, two escape routes: Brazil's workers took over the official machine; Poland's walked around it. In both countries the labor movement trained the democratic opposition.",
            sourceLessonSlug: "brazil-abc-strikes",
          },
          {
            prompt: "When had Lula become president of the São Bernardo and Diadema metalworkers' union?",
            options: ["1975, three years before the Scania stoppage", "1964, the year of the military coup itself", "1980, during the 41-day metalworkers' strike", "1943, the year Vargas signed the CLT into law"],
            correctIndex: 0,
            explanation: "A lathe operator elected to lead a state-chartered, tax-funded Lock-1 union, which the novo sindicalismo then made do the one thing it was never designed to do: obey its members.",
            sourceLessonSlug: "brazil-abc-strikes",
          },
          {
            prompt: "What institutional conclusion did the ABC movement's leaders draw from the strikes?",
            options: [
              "One factory or union was not enough: they founded a party and a central",
              "That strikes should never again be attempted under a military dictatorship",
              "That the CLT should be re-signed and re-issued by a new strong president",
              "That wage bargaining should go back to the government's official formula",
            ],
            correctIndex: 0,
            explanation: "The PT (February 1980) and the CUT (August 1983), Section 3's subject. One of the movement's leaders eventually became president of the Republic.",
            sourceLessonSlug: "brazil-abc-strikes",
          },
        ],
      },
    },

    // ───────── SECTION 3 · DEMOCRATIZATION: A PARTY, A CENTRAL, AND THE CAGE KEPT ─────────
    {
      slug: "brazil-cut-pt-1988",
      section: "Section 3 · Democratization: a party, a central, and the cage kept",
      title: "7 · 1980-1988: the PT, the CUT, and the constitution that kept two locks",
      recallContent: [
        {
          prompt: "What happened during the 41-day strike of 1980?",
          answer: "Over 300,000 metalworkers struck across São Paulo state. The government intervened in the union, stripped its elected leadership, and jailed Lula and more than a dozen leaders under the National Security Law, they were released only on the strike's 41st day.",
        },
        {
          prompt: "How did the novo sindicalismo's strategy differ structurally from Solidarność's?",
          answer: "Brazil's metalworkers captured the official state-chartered union from within and made Vargas's machine obey its members; Poland's workers built Solidarność outside the official structure entirely. Two authoritarian corporatisms, two escape routes.",
        },
      ],
      body: `The ABC movement's leaders concluded that winning inside one union was not enough, and they built two institutions to prove it.

**February 1980, a party.** The **Partido dos Trabalhadores** (Workers' Party, **PT**) was founded in São Paulo by unionists of the novo sindicalismo, together with intellectuals, Catholic base communities, and activists returning from exile (Fundação Perseu Abramo, n.d.). A party built *out of* a union movement, the direction matters. In most of the world's labor history, parties built unions or captured them; here the metalworkers built the party.

**August 1983, a central.** The **Central Única dos Trabalhadores** (**CUT**) was founded at a congress in São Bernardo do Campo (CUT, n.d.). Now notice something the corporatist architecture makes strange: under the CLT's design there was **no legal place for a central** at all. Unicidade chartered one union per *category*; a cross-category national federation of the workers' own choosing sat entirely outside the diagram. The CUT simply existed anyway, a fact before it was a legal fact. Brazilian law only formally recognized the *centrais sindicais* in **2008** (Lei nº 11.648, 2008), and here is the detail this course wants you to sit with: recognition came **with a 10% share of the compulsory union tax** (Lei nº 11.648, 2008, amending CLT art. 589). The central born from the fight against the corporatist machine was, twenty-five years later, written into the machine's revenue line. Hold that thought until Section 4.

**1985, the dictatorship ends.** Mass campaigning for direct elections (the **Diretas Já** movement, 1984) fell short of its amendment, but the regime's chosen succession failed anyway, and in 1985 a civilian took office after twenty-one years of military rule. The strikes of the ABC were part of how that ending had begun, the anchor course's pattern, again: the labor movement as the training ground of a democratic opposition.

## 1988: the new constitution, audit it against the three locks

Brazil's democratic constitution of **5 October 1988** rewrote the labor rules. Here is the honest audit, lock by lock:

| Lock | What 1988 did |
| --- | --- |
| **Lock 2, the ministry charter** | **BROKEN.** Article 8, item I: the state may not demand authorization for founding a union and is **forbidden from interfering or intervening** in union organization (CF, 1988, art. 8º, I). The power the dictatorship used against the ABC metalworkers, cassation, trustees, was abolished. |
| **Lock 1, unicidade** | **KEPT.** Article 8, item II, one union per category per territorial base, now with constitutional rank (CF, 1988, art. 8º, II). |
| **Lock 3, the compulsory tax** | **KEPT.** Article 8, item IV preserves the statutory contribution, the assembly-fixed dues are collected *"independentemente da contribuição prevista em lei,"* independently of the contribution provided by law, i.e. the imposto sindical survived alongside them (CF, 1988, art. 8º, IV). |

And one addition: **Article 9 made the right to strike a constitutional right** (CF, 1988, art. 9º), the workers deciding *"on the opportunity of exercising it and on the interests to be defended by it."* For the people jailed in 1980 for leading a strike, that sentence was the point.

**So read the scoreboard carefully, because it is stranger than a victory.** The movement that had fought the corporatist machine from inside won a constitution that took away the *state's key* to the machine, and kept the machine. No more ministry intervention; still one chartered union per category, still a tax collected from every worker, member or not. Why a constituent assembly full of unionists kept unicidade and the tax is a debated question of motives, and this course does not psychoanalyze; what is **documented** is the outcome, the corporatist architecture of 1943, minus state intervention, is what Brazilian democracy constitutionalized. That is why (as you learned in Section 1) Brazil **still cannot ratify ILO Convention 87**: the obstacle is not a dictatorship-era statute a congress could repeal, but Article 8 of the democratic constitution itself (ILO, n.d.).

:::reveal Audit the 1988 Constitution against the CLT's three locks: what did it break, and what did it keep? ||| It broke Lock 2, Article 8, I forbids the state from requiring authorization for unions or intervening in them, abolishing the ministry's cassation power. It kept Lock 1, unicidade sindical, now constitutional at Article 8, II, and Lock 3, Article 8, IV preserved the statutory compulsory contribution. Democracy removed the state's key but kept the corporatist machine: one chartered union per category, funded by a tax from every worker, which is also why Brazil still cannot ratify ILO Convention 87.

## Sources
- Constituição da República Federativa do Brasil. (1988). Presidência da República. https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm
- Lei nº 11.648, de 31 de março de 2008. Presidência da República. https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2008/lei/l11648.htm
- Central Única dos Trabalhadores. (n.d.). *Histórico*. https://www.cut.org.br/conteudo/historico [The central's own history — a party to this story, used for dates and sequence.]
- Fundação Perseu Abramo. (n.d.). *História do PT*. https://fpabramo.org.br/ [Maintained by a foundation linked to the PT — a party to this story.]
- International Labour Organization. (n.d.). *Ratifications for Brazil*. NORMLEX. https://normlex.ilo.org/dyn/nrmlx_en/f?p=NORMLEXPUB:11200:0::NO::P11200_COUNTRY_ID:102571`,
    },
    {
      slug: "brazil-lula-record",
      section: "Section 3 · Democratization: a party, a central, and the cage kept",
      title: "8 · The Lula record, stated as dated fact",
      recallContent: [
        {
          prompt: "Audit: which of the three locks did the 1988 Constitution break, and which did it keep?",
          answer: "Broke Lock 2 (no state authorization or intervention in unions, art. 8, I). Kept Lock 1 (unicidade, art. 8, II) and Lock 3 (the compulsory contribution, art. 8, IV). It also made the strike a constitutional right (art. 9).",
        },
        {
          prompt: "When were the PT and the CUT founded, and what happened to the CUT's legal status in 2008?",
          answer: "PT: February 1980. CUT: August 1983, with no legal place under the corporatist design until Lei 11.648/2008 recognized the centrais sindicais and gave them a 10% share of the compulsory union tax.",
        },
      ],
      body: `One person in this story went from a union hall to the presidency, to a prison cell, and back to the presidency. Brazilian politics is brutally polarized around him, so this course applies its strictest rule here: **dates, courts, and official records, nothing else.** You will not learn what to think about Lula from this lesson. You will learn what happened, when, and according to whom, so that no one can tell you a half of it and call it the whole.

| Date | Event, per the record |
| --- | --- |
| **1975** | Luiz Inácio da Silva ("Lula"), a lathe operator, is elected president of the São Bernardo and Diadema metalworkers' union (Section 2). |
| **1980** | Jailed under the National Security Law during the 41-day strike; co-founds the PT the same year. |
| **1989, 1994, 1998** | Runs for president three times; loses three times. |
| **30 Oct 2002 → 1 Jan 2003** | Elected president; takes office. Re-elected 2006; leaves office 1 Jan 2011 at the end of two terms. |
| **12 Jul 2017** | Convicted of corruption and money laundering by a federal trial judge in **Curitiba**, in a case from the *Lava Jato* (Car Wash) investigation. |
| **24 Jan 2018** | The regional appellate court (TRF-4) upholds and increases the sentence. |
| **7 Apr 2018** | Imprisoned in Curitiba. |
| **Aug-Sep 2018** | The electoral court (TSE) bars his presidential candidacy under the **Ficha Limpa** ("Clean Record") law, which disqualifies candidates convicted by a collegiate court (Lei Complementar nº 135, 2010). |
| **8 Nov 2019** | Released, because the STF ruled, for **all** defendants, that imprisonment before appeals are exhausted is unconstitutional. A procedural ruling; **not** a ruling on his case's merits. |
| **8 Mar 2021** | An STF justice **annuls the convictions** on **jurisdictional** grounds: the Curitiba court lacked jurisdiction over the cases (STF, HC 193.726). The STF's full bench confirms in April 2021. His political rights are restored. |
| **2021** | Separately, an STF panel rules that the trial judge had not been impartial toward him (*suspeição*), another procedural ruling, also not a merits judgment. The trial judge had, after convicting him, accepted appointment as justice minister in the government elected in 2018, a fact cited in that litigation. |
| **30 Oct 2022 → 1 Jan 2023** | Elected president with **50.89%** of the runoff vote (Agência Brasil, 2022); inaugurated. |

## What an annulment on jurisdiction is, and is not

This is the part most retellings get wrong, in both directions, so learn it precisely.

The 2021 annulment held that the **wrong court** had tried the cases. It did **not** find Lula innocent, and it did not find him guilty, a jurisdictional annulment is **neither an acquittal nor a conviction on the merits**. As of this course's writing (July 2026), the two facts stand side by side in the record: he **was convicted** in 2017-18, and those convictions **were annulled** in 2021 by the country's highest court. Anyone who tells you only "he was convicted" is deleting the annulment; anyone who tells you the annulment "proved his innocence" is claiming a merits judgment that no court issued. **This course teaches both facts and adjudicates neither**, because there is nothing left standing to adjudicate, and refusing to invent a verdict is what sourcing discipline looks like when the subject is radioactive.

## Why this lesson is in a labor course at all

Not because of the politics, despite them. The anchor course's fourth question is *what happens to you if you try?* Section 2 gave Brazil's 1980 answer: intervention, cassation, prison. This lesson completes the arc: the strike leader that answer was aimed at was later elected head of state, **twice**, with a conviction and an annulment in between. Whatever any Brazilian thinks of Lula, the uncontested spine of the record is a thing this track has seen nowhere else: **the corporatist union system Vargas built to contain labor ended up producing a president of the Republic from inside a union hall.** Poland's union produced a president too (Wałęsa, 1990), from *outside* the official structure. Brazil's came from within it. The two courses are a matched pair; keep them side by side.

:::reveal What exactly did the STF's 8 March 2021 decision do, and name the two mistakes people make about it. ||| It annulled Lula's convictions on jurisdictional grounds: the Curitiba court lacked jurisdiction to try the cases (HC 193.726; confirmed by the full bench in April 2021), restoring his political rights. Mistake one: deleting the annulment and saying only "he was convicted." Mistake two: calling the annulment proof of innocence, a jurisdictional annulment is neither an acquittal nor a conviction on the merits, and no court has issued a merits verdict since. The course teaches both facts and adjudicates neither.

## Sources
- Supremo Tribunal Federal. (2021). *Habeas Corpus 193.726* (decisão de 8 de março de 2021; referendada pelo Plenário em abril de 2021). https://portal.stf.jus.br/
- Lei Complementar nº 135, de 4 de junho de 2010 (Lei da Ficha Limpa). Presidência da República. https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp135.htm
- Agência Brasil. (2022, October 30). [Official public news agency's reporting of the certified runoff result: 50.89%.] https://agenciabrasil.ebc.com.br/
- Sindicato dos Metalúrgicos do ABC. (n.d.-a). *1977*. https://smabc.org.br/1977-2/ [For the union-career dates — a party to this story.]`,
    },
    {
      slug: "brazil-section-3-quiz",
      section: "Section 3 · Democratization: a party, a central, and the cage kept",
      title: "9 · Check yourself: democratization, and the record",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What two institutions did the ABC movement's leaders found, and when?",
            options: [
              "The PT (Workers' Party) in February 1980 and the CUT in August 1983",
              "The CLT in May 1943 and the labor high court, the TST, in 1946",
              "DIEESE in 1955 and the Ficha Limpa clean-record law in June 2010",
              "Solidarność in August 1980 and the Polish Round Table in 1989",
            ],
            correctIndex: 0,
            explanation: "A party and a central, built out of a union movement, the metalworkers built the party, not the other way around.",
            sourceLessonSlug: "brazil-cut-pt-1988",
          },
          {
            prompt: "What was legally strange about the CUT when it was founded in 1983?",
            options: [
              "The corporatist design had no legal place for a cross-category central",
              "It was founded by the Labor Ministry itself, at a congress in Brasília",
              "It was a foreign union federation operating inside Brazil under US law",
              "It was the one union allowed to compete inside other unions' territory",
            ],
            correctIndex: 0,
            explanation: "Unicidade chartered one union per category; a national central of the workers' own choosing sat outside the diagram entirely.",
            sourceLessonSlug: "brazil-cut-pt-1988",
          },
          {
            prompt: "What did Lei 11.648/2008 do?",
            options: [
              "Recognized the centrais sindicais, with a 10% share of the union tax",
              "Abolished the compulsory union tax, nine years before Lei 13.467",
              "Ratified ILO Convention 87, ending unicidade sindical at last",
              "Dissolved the CUT and folded it into the older confederations",
            ],
            correctIndex: 0,
            explanation: "The irony the course flags: the central born fighting the corporatist machine was written into the machine's revenue line twenty-five years later.",
            sourceLessonSlug: "brazil-cut-pt-1988",
          },
          {
            prompt: "Which of the three locks did the 1988 Constitution BREAK?",
            options: [
              "Lock 2, the ministry charter: art. 8, I bars state intervention in unions",
              "Lock 1, unicidade sindical: competing unions became legal per category",
              "Lock 3, the compulsory tax: union contributions became voluntary then",
              "All three locks: the 1988 text dismantled the corporatist design whole",
            ],
            correctIndex: 0,
            explanation: "The power the dictatorship used against the ABC metalworkers, cassation, trustees, was abolished. The other two locks survived.",
            sourceLessonSlug: "brazil-cut-pt-1988",
          },
          {
            prompt: "Which locks did the 1988 Constitution KEEP?",
            options: [
              "Lock 1 (unicidade, art. 8, II) and Lock 3 (the compulsory contribution)",
              "Only Lock 2, the Labor Ministry's charter and its intervention powers",
              "None: the constituent assembly abolished all three of the locks in 1988",
              "Only the labor courts, which art. 114 preserved from the Vargas design",
            ],
            correctIndex: 0,
            explanation: "Democracy removed the state's key and kept the machine: one chartered union per category, funded by a tax from every worker, member or not.",
            sourceLessonSlug: "brazil-cut-pt-1988",
          },
          {
            prompt: "What does Article 9 of the 1988 Constitution establish?",
            options: [
              "The right to strike as a constitutional right, exercised as workers decide",
              "The Labor Ministry's right to intervene in a union and remove its board",
              "A blanket ban on strikes in essential services, with no exception at all",
              "The compulsory union tax, moved out of the CLT into the constitution",
            ],
            correctIndex: 0,
            explanation: "For the people jailed in 1980 for leading a strike, that article was the point.",
            sourceLessonSlug: "brazil-cut-pt-1988",
          },
          {
            prompt: "After 1988, why can Brazil STILL not ratify ILO Convention 87?",
            options: [
              "Because unicidade now sits in the constitution itself, at art. 8, II",
              "Because the ILO expelled Brazil in 1988 and has not readmitted it since",
              "Because ratifying any ILO convention requires a national referendum first",
              "Because the labor courts vetoed ratification when it was put to them",
            ],
            correctIndex: 0,
            explanation: "C87 protects organizations 'of their own choosing'; a constitutional one-union-per-category rule cannot promise a choice, and constitutions are harder to change than statutes.",
            sourceLessonSlug: "brazil-cut-pt-1988",
          },
          {
            prompt: "According to the record, what happened to Lula in 1975 and in 1980?",
            options: [
              "Elected metalworkers' union president in 1975; jailed in the 1980 strike",
              "Elected president of Brazil in 1975; forced into exile in Portugal in 1980",
              "Appointed to the Labor Ministry in 1975; dismissed from the post in 1980",
              "Convicted of corruption in 1975; pardoned by the junta's president in 1980",
            ],
            correctIndex: 0,
            explanation: "A lathe operator leading a state-chartered union, the arc this course teaches begins in a union hall, not in a party office.",
            sourceLessonSlug: "brazil-lula-record",
          },
          {
            prompt: "Before winning in 2002, how many times had Lula run for president and lost?",
            options: ["Three, in 1989, 1994, and 1998", "None; he won on his first attempt", "One, the 1994 race against Cardoso", "Five, every election since 1985"],
            correctIndex: 0,
            explanation: "Elected 30 October 2002; took office 1 January 2003; re-elected 2006; left office 1 January 2011 after two terms.",
            sourceLessonSlug: "brazil-lula-record",
          },
          {
            prompt: "What happened on 12 July 2017?",
            options: [
              "Lula was convicted of corruption and money laundering in Curitiba",
              "Lula was acquitted of all the charges by the Curitiba trial court",
              "The STF annulled Lula's convictions and restored his political rights",
              "Lula was inaugurated in Brasília for a third presidential term",
            ],
            correctIndex: 0,
            explanation: "The appellate court (TRF-4) upheld and increased the sentence on 24 January 2018; he was imprisoned on 7 April 2018.",
            sourceLessonSlug: "brazil-lula-record",
          },
          {
            prompt: "Why was Lula barred from the 2018 presidential ballot?",
            options: [
              "The Ficha Limpa law bars candidates convicted by a collegiate court",
              "A constitutional limit of two presidential terms in a single lifetime",
              "He withdrew voluntarily and endorsed his running mate in his place",
              "The PT had been dissolved by the electoral court, the TSE, in 2016",
            ],
            correctIndex: 0,
            explanation: "Lei Complementar 135/2010. The electoral court (TSE) applied it in August-September 2018.",
            sourceLessonSlug: "brazil-lula-record",
          },
          {
            prompt: "What was the legal basis of Lula's release on 8 November 2019?",
            options: [
              "The STF ruled, for all defendants, that jailing before appeals end is unconstitutional",
              "A presidential pardon, signed in November 2019 by the president elected in 2018",
              "An acquittal on the merits, entered by the appellate court TRF-4 in Porto Alegre",
              "Completion of the full prison sentence that the TRF-4 had increased in January 2018",
            ],
            correctIndex: 0,
            explanation: "The decision changed when any convicted defendant may be imprisoned; it said nothing about whether his conviction was correct.",
            sourceLessonSlug: "brazil-lula-record",
          },
          {
            prompt: "On what grounds did the STF annul Lula's convictions on 8 March 2021?",
            options: [
              "Jurisdiction: the Curitiba court had no jurisdiction over those cases",
              "New DNA and forensic evidence produced by the defence in early 2021",
              "A finding of factual innocence on the merits, following a full retrial",
              "A statute of limitations that expired while he was in prison in 2019",
            ],
            correctIndex: 0,
            explanation: "The annulment restored his political rights. Separately, an STF panel ruled in 2021 that the trial judge had not been impartial, also a procedural ruling.",
            sourceLessonSlug: "brazil-lula-record",
          },
          {
            prompt: "What is a jurisdictional annulment NOT?",
            options: [
              "It is neither an acquittal nor a conviction on the merits, either way",
              "It is not appealable by the prosecution to any higher Brazilian court",
              "It is not issued by courts at all, but by Brazil's Ministry of Justice",
              "It is not applicable in criminal cases, only in civil and labor ones",
            ],
            correctIndex: 0,
            explanation: "The course's rule: teach the conviction and the annulment as dated facts, and refuse to invent the merits verdict that no court issued.",
            sourceLessonSlug: "brazil-lula-record",
          },
          {
            prompt: "What is the outcome of the 30 October 2022 runoff, per Agência Brasil?",
            options: [
              "Lula elected with 50.89% of the runoff vote; inaugurated 1 January 2023",
              "Lula lost the runoff with 49.11% and conceded the following morning",
              "The TSE annulled the runoff and ordered it re-run in December 2022",
              "Lula won in the first round with 89% of the valid votes cast nationally",
            ],
            correctIndex: 0,
            explanation: "The completed arc the track has seen nowhere else: union hall → presidency → prison → annulment → presidency again, every step dated and sourced.",
            sourceLessonSlug: "brazil-lula-record",
          },
        ],
      },
    },

    // ───────── SECTION 4 · 2017: THE RUPTURE — LAW 13.467 SWITCHES OFF THE TAX ─────────
    {
      slug: "brazil-lei-13467",
      section: "Section 4 · 2017: the rupture, Law 13.467 switches off the tax",
      title: "10 · Lei 13.467: the reform that switched off the tax",
      recallContent: [
        {
          prompt: "State the two facts of the Lula record that most retellings cut in half.",
          answer: "He was convicted in 2017-18 (Curitiba trial court, upheld by the TRF-4), AND those convictions were annulled by the STF on 8 March 2021 on jurisdictional grounds. A jurisdictional annulment is neither an acquittal nor a conviction on the merits, the course teaches both facts and adjudicates neither.",
        },
        {
          prompt: "Which lock did the 1988 Constitution leave in a STATUTE rather than in the constitution itself?",
          answer: "Lock 3, the compulsory union tax, the constitution's art. 8, IV merely preserved 'the contribution provided by law,' so the tax itself continued to live in the CLT (arts. 578-610). Unicidade, by contrast, is constitutional (art. 8, II).",
        },
      ],
      body: `Brazil entered its deepest recorded recession in 2015-16; a presidential impeachment in 2016 put vice-president **Michel Temer** in office; and his government passed the biggest rewrite of the CLT since 1943: **Lei nº 13.467, of 13 July 2017**, in force from **11 November 2017**, marketed as the *reforma trabalhista*, the labor reform (Lei nº 13.467, 2017).

It changed more than a hundred articles of the CLT. This course teaches the handful that matter to its argument, and the biggest one first.

## The tax, switched off

The reform rewrote CLT articles 578-579 with two words that undid 1943: the union contribution became conditional on the worker's ***prévia e expressa*** **authorization**, prior and express (Lei nº 13.467, 2017). No authorization, no deduction. **Lock 3, the compulsory imposto sindical that had financed every chartered union, federation, confederation, and (since 2008) central for seventy-four years, became voluntary overnight.**

Now recall your constitutional audit from Section 3, because it explains *how this was even possible*. **Unicidade** lives in the constitution (art. 8, II), killing it takes a constitutional amendment. **The tax** lived in the CLT, an ordinary statute, which an ordinary statute could rewrite. Of Vargas's three locks, the one that guarded the money was the one left within a simple majority's reach. Unions challenged the change at the Supreme Court; in **June 2018 the STF upheld it as constitutional** (ADI 5794). The tax was dead, and the highest court had signed the certificate.

## The rest of the reform, briefly

- **Negotiated over legislated** (*negociado sobre legislado*): a new CLT art. 611-A lets collective agreements **prevail over the statute** on a listed set of subjects (hours arrangements, breaks, and more), with art. 611-B listing what may never be bargained away (Lei nº 13.467, 2017). A corporatist code that had always answered "who bargains?" with "the state already decided" now lets the bargaining table overwrite parts of the code itself.
- **Intermittent work** (*trabalho intermitente*): a new contract form in which the worker is on the books but paid only for hours actually summoned, formal employment, with the schedule risk moved onto the worker.
- **Union sign-off on dismissals ended:** terminations no longer require homologation at the union, removing one of the routine moments where every departing worker met their union.
- **Litigation costs:** the reform made losing labor-court claimants, including poor ones, liable for costs in some circumstances; filings dropped sharply in the first year afterward (TST data), and in 2021 the STF struck down parts of the cost rules as unconstitutional. Taught here in one line for what it is: the reform also raised the price of reaching the one court system built for workers.

## Frame the experiment before you see the results

Every course in this track eventually hands you a natural experiment. Here is Brazil's, and it is the cleanest in the whole track: **a union system financed for 74 years by a compulsory tax has the tax switched off, at a stroke, on a known date.** If the corporatist bargain built real worker power, revenue should dip and recover as unions convert assigned members into willing payers. If it built dependence, the floor should simply drop. The next lesson shows you the numbers, and teaches you how to read two official-looking numbers that disagree.

:::reveal Why could an ordinary 2017 statute kill the compulsory union tax, when it could not have killed unicidade? ||| Because the two locks live at different legal altitudes: unicidade was written into the 1988 Constitution itself (art. 8, II) and would take a constitutional amendment to remove, while the tax lived in the CLT, an ordinary statute, which the constitution's art. 8, IV merely referenced as 'the contribution provided by law.' Lei 13.467 simply rewrote CLT arts. 578-579 to require the worker's prior and express authorization, and in June 2018 the STF upheld the change (ADI 5794).

## Sources
- Lei nº 13.467, de 13 de julho de 2017. Presidência da República. https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/lei/l13467.htm
- Decreto-Lei nº 5.452, de 1º de maio de 1943 (Consolidação das Leis do Trabalho, arts. 578–579, 611-A, 611-B, as amended). Presidência da República. https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm
- Supremo Tribunal Federal. (2018). *Ação Direta de Inconstitucionalidade 5794* (julgada em junho de 2018). https://portal.stf.jus.br/`,
    },
    {
      slug: "brazil-revenue-collapse",
      section: "Section 4 · 2017: the rupture, Law 13.467 switches off the tax",
      title: "11 · The collapse, by the numbers, and how to read two numbers that disagree",
      recallContent: [
        {
          prompt: "What did Lei 13.467/2017 do to the imposto sindical, exactly?",
          answer: "It rewrote CLT arts. 578-579 to make the contribution conditional on the worker's prior and express (prévia e expressa) authorization, compulsory became voluntary, effective 11 November 2017. The STF upheld the change in June 2018 (ADI 5794).",
        },
        {
          prompt: "What is 'negociado sobre legislado'?",
          answer: "The reform's rule (CLT art. 611-A) that collective agreements prevail over the statute on a listed set of subjects, with art. 611-B listing what can never be bargained away.",
        },
      ],
      body: `Here are the results of the experiment. Two sets of official figures, and then, because this course is also a course in reading sources, the discrepancy between them, taught instead of hidden.

## Series A, unions' tax receipts (Secretaria do Trabalho data, reported by Gazeta do Povo, 13 Jan 2020)

| Year | Compulsory-tax revenue |
| --- | --- |
| 2017 (last compulsory year) | **R$ 2.0 billion** |
| 2018 (first voluntary year) | **R$ 282.9 million** |
| 2019 (Jan-Nov) | **R$ 88.2 million** |

A fall of roughly **86% in the first year**; by 2019 the flow was around **4%** of what it had been.

## Series B, the whole corporatist structure (official data, reported by Poder360, 18 Jan 2023)

| Year | Revenue |
| --- | --- |
| 2017 | **R$ 3 billion** |
| 2021 | **R$ 65.6 million** |

A fall of roughly **98%** across four years.

## Wait, was 2017 R$2 billion or R$3 billion?

Both. **The scopes differ.** Series A counts the tax received by *unions*; Series B counts the tax received by the entire structure the tax fed, **unions + federations + confederations + centrais** (remember Lei 11.648/2008 cutting the centrais in for 10%). Neither number is wrong; they are answers to different questions. **This is the single most useful source-reading habit this course can give you:** when two credible figures disagree, check the *denominator and the scope* before you cry error or fraud, and notice that on the thing that matters, the two series agree completely: **more than 90% of the money vanished within a few years of the switch.**

## Now the harder question: what died?

Resist the tidy story in both directions.

**Complication 1, the decline predates 2017.** Union density, per IBGE's PNAD Contínua: **16.1% (2012) → 9.2% (2022) → 8.4% (2023, the series low) → 8.9% (2024, the first rise since 2012)** (IBGE, 2025). Membership was falling for five years *before* the tax ended. The reform did not start the decline; it defunded a structure that was already hollowing.

**Complication 2, some of what died was never alive.** Brazilian labor debate has a name for unions that existed mainly to receive the tax: *sindicatos cartoriais*, "registry-office unions," paper entities with a charter, a category, a bank account, and no members to speak of. Guaranteed revenue for seventy-four years had made founding a union a business model. Some of the collapse is those entities starving, which even many unionists do not mourn.

**So the course refuses both framings.** "The reform killed healthy unions" ignores that density was already falling and that the tax propped up paper unions. "The reform only killed fake unions" ignores that real, functioning unions, including the ABC metalworkers' heirs, lost the bulk of their budgets in a single year and cut staff, services, and bargaining capacity accordingly. What the experiment actually demonstrates is the price of the original bargain: **a union that never had to ask workers for money never built the habit of earning it.** When the tax vanished, seventy-four years of that dependence came due at once. Compare the Nordic course: Ghent-system unions, which must continuously *earn* membership by administering benefits workers value, held densities near two-thirds. Brazil's assigned, tax-fed unions could not convert assigned members into willing payers on two years' notice, and the small 2024 uptick (8.9%) is the first data point that any of them are learning to.

:::reveal One source says Brazil's union tax brought in R$2 billion in 2017; another says R$3 billion for the same year. Is one of them wrong, and what should you check first? ||| Neither is necessarily wrong, check the scope. The R$2bn series (Secretaria do Trabalho data via Gazeta do Povo, 2020) counts what UNIONS received; the R$3bn series (via Poder360, 2023) counts the whole structure the tax fed, unions plus federations, confederations, and centrais. Different denominators, different answers, same shape: after Lei 13.467 made the tax voluntary, more than 90% of the revenue vanished within a few years (to R$282.9M in 2018, R$88.2M in Jan-Nov 2019, and R$65.6M for the whole structure in 2021).

## Sources
- Secretaria do Trabalho (Ministério da Economia). (2020). [Union-tax collection figures 2017–2019, as reported by Gazeta do Povo, 2020, January 13.]
- Poder360. (2023, January 18). [Report on official union-tax revenue: R$3 billion (2017) to R$65.6 million (2021), covering unions, federations, confederations and centrais.] https://www.poder360.com.br/
- Instituto Brasileiro de Geografia e Estatística. (2025). *PNAD Contínua — Características adicionais do mercado de trabalho* (union-density series 2012–2024). https://www.ibge.gov.br/
- Lei nº 13.467, de 13 de julho de 2017. Presidência da República. https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/lei/l13467.htm`,
    },
    {
      slug: "brazil-section-4-quiz",
      section: "Section 4 · 2017: the rupture, Law 13.467 switches off the tax",
      title: "12 · Check yourself: the rupture and the numbers",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Under which government was Lei 13.467 passed, and when did it take effect?",
            options: [
              "Michel Temer's government, signed 13 July 2017, in force 11 November 2017",
              "Dilma Rousseff's second government, signed and in force during early 2015",
              "The military regime, decreed in 1967 and in force from 1 January 1968",
              "Getúlio Vargas's Estado Novo, signed and in force from May Day 1943",
            ],
            correctIndex: 0,
            explanation: "Passed after the 2015-16 recession and the 2016 impeachment, and marketed as the reforma trabalhista, the biggest rewrite of the CLT since 1943.",
            sourceLessonSlug: "brazil-lei-13467",
          },
          {
            prompt: "What did Lei 13.467 do to the compulsory union tax?",
            options: [
              "Made it voluntary: the deduction now needs prior, express authorization",
              "Doubled it to two days' wages a year, split with the government fund",
              "Transferred it in full to the government's own workers' support fund",
              "Left it wholly unchanged, but moved it from the CLT into the constitution",
            ],
            correctIndex: 0,
            explanation: "CLT arts. 578-579 as rewritten. Lock 3, the funding lock that had held since 1943, was switched off overnight.",
            sourceLessonSlug: "brazil-lei-13467",
          },
          {
            prompt: "Why could an ordinary statute abolish the tax but not unicidade?",
            options: [
              "The tax lived in an ordinary statute; unicidade is in the constitution",
              "Because a tax can never be given constitutional rank in Brazilian law",
              "Because unicidade had already been abolished by the 1988 constitution",
              "It could not: the STF struck the tax abolition down again in June 2018",
            ],
            correctIndex: 0,
            explanation: "The three locks live at different legal altitudes. The one guarding the money was the one within a simple majority's reach.",
            sourceLessonSlug: "brazil-lei-13467",
          },
          {
            prompt: "What did the STF decide in ADI 5794 (June 2018)?",
            options: [
              "It upheld the end of the compulsory union tax as constitutional",
              "It restored the compulsory union tax and ordered back payment",
              "It abolished unicidade sindical, opening the way to ratify C87",
              "It annulled the entire 2017 reform as unconstitutional in whole",
            ],
            correctIndex: 0,
            explanation: "Unions had challenged the change; the highest court signed the tax's death certificate.",
            sourceLessonSlug: "brazil-lei-13467",
          },
          {
            prompt: "What is 'negociado sobre legislado'?",
            options: [
              "Collective agreements prevail over the statute on a listed set of subjects",
              "The older rule that the CLT's text always beat any collective agreement",
              "A ban on collective bargaining in every sector deemed essential by law",
              "Compulsory arbitration of every dispute before the labor courts rule",
            ],
            correctIndex: 0,
            explanation: "A code that had always answered 'who bargains?' with 'the state already decided' now lets the bargaining table overwrite parts of the code itself.",
            sourceLessonSlug: "brazil-lei-13467",
          },
          {
            prompt: "What is trabalho intermitente (intermittent work), created by the 2017 reform?",
            options: [
              "The worker is formally employed but paid only for hours actually summoned",
              "A ban on all part-time contracts of fewer than thirty hours a week",
              "Seasonal agricultural work, contracted only for the harvest months",
              "Work performed exclusively from the worker's own home, unsupervised",
            ],
            correctIndex: 0,
            explanation: "Formal employment, a signed carteira, with none of the income predictability the signed card used to imply.",
            sourceLessonSlug: "brazil-lei-13467",
          },
          {
            prompt: "Per Secretaria do Trabalho data reported by Gazeta do Povo (2020), what happened to unions' tax revenue after the switch?",
            options: [
              "R$2.0 billion (2017) → R$282.9 million (2018) → R$88.2 million (Jan-Nov 2019)",
              "R$2.0 billion (2017) → R$1.9 billion (2018) → R$2.1 billion (Jan-Nov 2019)",
              "R$282.9 million (2017) → R$2.0 billion (2018) → R$3.0 billion (Jan-Nov 2019)",
              "R$2.0 billion (2017) → R$0 (2018) → R$0 (2019): collection ceased entirely",
            ],
            correctIndex: 0,
            explanation: "Roughly −86% in the first voluntary year; by 2019 the flow was around 4% of the 2017 level.",
            sourceLessonSlug: "brazil-revenue-collapse",
          },
          {
            prompt: "Per official data reported by Poder360 (2023), what did the WHOLE corporatist structure receive in 2017 and in 2021?",
            options: [
              "R$3 billion (2017) → R$65.6 million (2021), a fall of roughly 98%",
              "R$65.6 million (2017) → R$3 billion (2021), a rise of roughly 98%",
              "R$3 billion (2017) → R$2.9 billion (2021), a fall of roughly 3%",
              "R$100 billion (2017) → R$50 billion (2021), a fall of roughly 50%",
            ],
            correctIndex: 0,
            explanation: "This series counts unions plus federations, confederations and centrais, the entire structure the tax fed.",
            sourceLessonSlug: "brazil-revenue-collapse",
          },
          {
            prompt: "Why do the two sources give different figures (R$2bn vs R$3bn) for the same year, 2017?",
            options: [
              "Their scopes differ: unions only versus the whole corporatist structure",
              "One of the two outlets simply fabricated the figure that it published",
              "Inflation between the 2020 report and the 2023 report, about 50% apart",
              "A currency conversion error between reais and US dollars in one report",
            ],
            correctIndex: 0,
            explanation: "The course's source-reading habit: when two credible figures disagree, check the denominator and the scope before crying error or fraud.",
            sourceLessonSlug: "brazil-revenue-collapse",
          },
          {
            prompt: "On what do both revenue series agree?",
            options: [
              "More than 90% of the money vanished within a few years of the switch",
              "Revenue was essentially unaffected by the 2017 reform, on either count",
              "Revenue roughly doubled after 2017, as workers volunteered to pay it",
              "The tax was never actually collected from workers in the first place",
            ],
            correctIndex: 0,
            explanation: "Different scopes, same shape. The cleanest natural experiment in the track produced an unambiguous result.",
            sourceLessonSlug: "brazil-revenue-collapse",
          },
          {
            prompt: "What is Brazil's union-density series, per IBGE's PNAD Contínua?",
            options: [
              "16.1% (2012) → 9.2% (2022) → 8.4% (2023, series low) → 8.9% (2024)",
              "30.2% (2012) → 29.4% (2022) → 30.1% (2023) → 30.6% (2024), near-flat",
              "16.1% (2012) → 20.4% (2022) → 23.8% (2023) → 25.2% (2024), a steady rise",
              "16.1% (2012) → 0% (2018 on): IBGE recorded no members after the tax",
            ],
            correctIndex: 0,
            explanation: "The detail that complicates the tidy story: membership was falling for five years BEFORE the tax ended.",
            sourceLessonSlug: "brazil-revenue-collapse",
          },
          {
            prompt: "What are 'sindicatos cartoriais'?",
            options: [
              "Paper 'registry-office' unions that existed mainly to collect the tax",
              "The unions representing Brazil's notaries and registry-office clerks",
              "The unions chartered before 1943, which the CLT later grandfathered in",
              "Foreign unions operating inside Brazil under a Labor Ministry licence",
            ],
            correctIndex: 0,
            explanation: "Guaranteed revenue had made founding a union a business model. Part of the post-2017 collapse is those entities starving.",
            sourceLessonSlug: "brazil-revenue-collapse",
          },
          {
            prompt: "Why does the course refuse the framing 'the reform killed healthy unions'?",
            options: [
              "Because density was already falling and the tax propped up paper unions",
              "Because no Brazilian union actually lost revenue after November 2017",
              "Because the STF annulled the whole of the reform in June 2018 anyway",
              "Because the unions went on collecting the tax right through to 2021",
            ],
            correctIndex: 0,
            explanation: "And it equally refuses 'the reform only killed fake unions', real unions, including the ABC metalworkers' heirs, lost the bulk of their budgets in a year.",
            sourceLessonSlug: "brazil-revenue-collapse",
          },
          {
            prompt: "What does the 2017 experiment actually demonstrate, per this course?",
            options: [
              "A union that never had to ask workers for money never learned to earn it",
              "That unions cannot survive anywhere without permanent state funding",
              "That voluntary funding always strengthens unions almost immediately",
              "That the compulsory tax had no measurable effect on union behavior",
            ],
            correctIndex: 0,
            explanation: "Contrast the Ghent-system unions of the Nordic course, which continuously earn membership by administering benefits, and held densities near two-thirds.",
            sourceLessonSlug: "brazil-revenue-collapse",
          },
          {
            prompt: "What happened to labor-court litigation costs under the reform?",
            options: [
              "Losing claimants became liable for costs; filings dropped sharply",
              "All labor-court litigation was made free of charge for both parties",
              "The labor courts were abolished and folded into the ordinary courts",
              "Filing fees were left unchanged by the reform, at 2% of the claim",
            ],
            correctIndex: 0,
            explanation: "The reform also raised the price of reaching the one court system built for workers, taught in one line for what it is.",
            sourceLessonSlug: "brazil-lei-13467",
          },
        ],
      },
    },

    // ───────── SECTION 5 · OUTSIDE THE DOOR: INFORMALITY, THE APPS, AND SLAVERY-LIKE LABOR ─────────
    {
      slug: "brazil-informality-apps",
      section: "Section 5 · Outside the door: informality, the apps, and the rhyme",
      title: "13 · Four in ten without the signed card, and the drivers the Court hasn't answered",
      recallContent: [
        {
          prompt: "State the two revenue series for the post-2017 collapse, with scopes.",
          answer: "Unions only (Secretaria do Trabalho data via Gazeta do Povo, 2020): R$2.0bn (2017) → R$282.9M (2018) → R$88.2M (Jan-Nov 2019). Whole structure, unions + federations + confederations + centrais (via Poder360, 2023): R$3bn (2017) → R$65.6M (2021). Different scopes, same shape: >90% gone.",
        },
        {
          prompt: "Why does the course refuse both tidy framings of the collapse?",
          answer: "Density was falling before 2017 (16.1% in 2012 → 9.2% in 2022, IBGE) and the tax propped up paper 'cartorial' unions, so 'the reform killed healthy unions' overclaims; but real unions also lost most of their budgets in a year, so 'it only killed fake unions' overclaims too.",
        },
      ],
      body: `Everything this course has taught so far, the chartered union, the category, the tax, the labor courts, the reform, applies to workers **inside** the CLT's door: the ones with a **carteira assinada**, the signed work card from Lesson 1. This lesson counts the people outside it, because they are not an edge case. They are around **four workers in every ten**.

## Informality, measured

Per IBGE's continuous national household survey (PNAD Contínua), the **informality rate** among employed Brazilians was **39.0% in 2024**, easing to **38.1% in 2025** (IBGE, 2025, 2026). Know what the statistic contains, because "informal" is a defined term, not a vibe, IBGE counts, principally: employees and domestic workers **without a signed carteira**, self-employed workers and employers **without business registration (CNPJ)**, and unpaid family workers (IBGE, 2025).

Now walk the consequences through the machinery you already understand. No signed card means: no CLT floor of rights as an employee; **no occupational category**, so no chartered union is *yours* (unicidade assigns you by category, no category, no assignment); much weaker access in practice to the Justiça do Trabalho, whose docket is built on the employment relationship. The corporatist system does not merely *underserve* the informal four-in-ten. **Its basic unit of membership, the category, is defined so that they are not in it.** In 1943 the CLT drew a door, and eighty years later roughly 40% of the country's workers stand on the wrong side of it.

## The apps: the newest way to stand outside

The 2020s version of the question is a person driving for a ride-hailing app. Employee (CLT, category, union, labor courts), or autonomous contractor (none of the above)? Brazil's answer, as of this course's writing, is: **pending, at the highest level.**

- **In the labor courts**, app-driver cases produced years of conflicting rulings, some panels finding employment, others autonomy.
- **At the Supreme Court**, the question became **Tema 1291**, a *repercussão geral* case, meaning the STF's eventual thesis will bind every court in the country on the employment status of app drivers.
- **On 24 June 2026**, the case was **removed from the docket**, pulled from the judgment calendar, pending analysis of the **new ILO instrument on platform work** (STF, 2026). As of **July 2026**, no thesis has been fixed.
- **In Congress**, the executive's bill **PLP 12/2024** would regulate app **drivers** as a new category of "autonomous worker" with an earnings floor and social-security inclusion, while **excluding delivery couriers**, and settling nothing about employment status generally. As of July 2026 it, too, is **pending** (Câmara dos Deputados, 2024).

**This course teaches pending as pending.** It will not predict the STF, and neither should anything you read, a paragraph claiming to know how Tema 1291 comes out is telling you about its author, not about Brazilian law. What you *can* know now is the shape of the stakes: a binding thesis either walks millions of platform workers through the CLT's door, or fixes them permanently outside it, or (like PLP 12/2024) builds them a separate, smaller door.

## Name the rhyme, you have seen this move in every country in the track

The mechanisms differ; the move is identical: **put the worker outside the category the protections attach to.**

| Country | The outside-the-door move |
| --- | --- |
| **United States** (anchor) | **Misclassification**, call the worker an independent contractor and the NLRA, minimum wage, and overtime never attach. |
| **Mexico** (labor-mexico) | The **protection contract**, the worker is nominally *inside* everything, but the union at the table is the employer's, so the protections are hollow. |
| **Poland** (labor-poland) | ***Umowy śmieciowe***, "junk" civil-law contracts instead of employment contracts; labor law never attaches. |
| **Brazil** | **Informality and app work**, no carteira assinada, no category: the corporatist system's own unit of membership excludes you. |

Once you see the move, you cannot unsee it. The most important question about any labor-law system is not what it gives the workers inside, it is **who counts as inside**. That is the anchor's Question 2, and Brazil states it at national scale: the answer decides four in ten people.

:::reveal What is STF Tema 1291, and what is its status as of July 2026? ||| It is the Supreme Court case, with repercussão geral, meaning the eventual thesis will bind all Brazilian courts, on whether app drivers are employees or autonomous contractors. On 24 June 2026 it was removed from the judgment docket pending analysis of the new ILO instrument on platform work, and no thesis has been fixed as of July 2026. The course teaches it as pending and refuses to predict; separately, PLP 12/2024 (a drivers-only regulation with an earnings floor, excluding delivery couriers) also remains pending in Congress.

## Sources
- Instituto Brasileiro de Geografia e Estatística. (2025, 2026). *PNAD Contínua* (informality rate: 39.0% in 2024; 38.1% in 2025; definition of informal employment). https://www.ibge.gov.br/
- Supremo Tribunal Federal. (2026). *Tema 1291 da repercussão geral* (retirado de pauta em 24 de junho de 2026). https://portal.stf.jus.br/
- Câmara dos Deputados. (2024). *Projeto de Lei Complementar nº 12/2024*. https://www.camara.leg.br/`,
    },
    {
      slug: "brazil-slave-labor-dirty-list",
      section: "Section 5 · Outside the door: informality, the apps, and the rhyme",
      title: "14 · The hardest lesson: trabalho análogo à escravidão, and the list that names names",
      recallContent: [
        {
          prompt: "What is Brazil's informality rate, per IBGE, and what does the statistic contain?",
          answer: "39.0% of employed workers in 2024, easing to 38.1% in 2025 (IBGE PNAD Contínua). It counts employees and domestic workers without a signed carteira, self-employed and employers without CNPJ registration, and unpaid family workers.",
        },
        {
          prompt: "Name the outside-the-door rhyme across the track's four countries.",
          answer: "US: misclassification as independent contractors. Mexico: the protection contract (inside on paper, hollow in fact). Poland: junk civil-law contracts (umowy śmieciowe). Brazil: informality and app work, no carteira, no category. Same move everywhere: put the worker outside the category the protections attach to.",
        },
      ],
      body: `A workers'-rights course that stops at unions has not described the country. At the far edge of Brazil's labor market, past the informal four-in-ten, past the app drivers awaiting their ruling, is a reality Brazilian law names with unusual directness: ***trabalho análogo à escravidão***, work analogous to slavery. This lesson teaches what the law says, what the state does about it, and the numbers, sourced.

## What the law says: conditions, not chains

Article 149 of Brazil's Penal Code, sharpened by a 2003 amendment, criminalizes reducing someone to a *condição análoga à de escravo*, and defines it by **four conditions**: **forced labor**; ***jornada exaustiva*** (a workday so exhausting it endangers health); **degrading conditions**; and **restriction of movement by debt**, debt bondage (Código Penal, art. 149). Read the definition again, because its breadth is the point: Brazilian law does **not** require chains, locks, or an owner. A worker recruited to a remote ranch, housed without sanitation or drinkable water, charged for his own tools and food against wages he never quite receives, is, in the statute's terms, in a condition analogous to slavery, even if the gate stands open. The law reaches **conditions**, not just captivity.

## What the state does: the mobile teams and the list

Two institutions, both internationally distinctive:

**The GEFM**, *Grupo Especial de Fiscalização Móvel*, the mobile inspection group created in **1995**: task forces of labor inspectors, prosecutors, and police that travel to remote worksites, ranches, charcoal camps, plantations, and increasingly urban sites, and **rescue** workers found in art. 149 conditions. Since 1995, the mobile teams have rescued **more than 68,000 workers** (Ministério do Trabalho e Emprego [MTE] data). In **2025 alone, 2,772 workers were rescued, up 38% from 2024** (Repórter Brasil, 2026, reporting MTE data). Read that rising number with the source-discipline this course has drilled: **more rescues can mean more slavery, more enforcement, or both**, the figure counts what inspectors *found*, not all that exists.

**The "lista suja"**, the **dirty list**, a public federal register (created in 2004) of employers caught subjecting workers to slavery-like conditions after their cases conclude administratively. It is publicly searchable, updated periodically, and consequential: being listed carries reputational cost and, in practice, restrictions on credit from public banks and on sales to companies that screen their supply chains against it. The **October 2025 update added 159 employers, 101 individuals and 58 companies, tied to 1,530 workers rescued in cases from 2020-2025** (MTE data, as reported by Repórter Brasil, 2025). The ILO has repeatedly pointed to Brazil's mobile-inspection-plus-public-list system as an international reference in fighting forced labor (ILO, n.d.), which is worth stating precisely: the *system* is the reference; the persistence of the problem it fights is the reason the system still rescues thousands a year.

## Where, and who

The historical core is **rural**: cattle ranching, charcoal for pig iron, coffee, sugarcane, concentrated along the **Amazon deforestation frontier**, where land is cleared far from any inspector and workers are recruited from poor regions with debts attached before they arrive. Recent years' case files also include **urban** work: construction, textile workshops, and domestic labor. The victims are overwhelmingly informal, often internal migrants, the same people Lesson 13 counted outside the CLT's door, at the door-less extreme.

## Why this lesson is in this course

Place it in the architecture. The anchor's Question 2, *who is excluded?*, has run through this whole section: the informal four-in-ten (excluded from the category system), the app drivers (exclusion pending adjudication), and here, workers excluded from something far more basic than a union: wages actually paid, exit actually possible. And notice what the state's two best tools have in common with the unions' 1977 weapon (Section 2): **the audit and the record.** DIEESE beat a dictatorship's wage formula with verified numbers; the GEFM and the lista suja fight slavery-like labor with inspections and a public list of names. In Brazil's labor history, the ledger keeps turning out to be mightier than the manifesto.

:::reveal What are the four conditions in Penal Code art. 149, and why does 'the gate stands open' not defeat the charge? ||| Forced labor; jornada exaustiva (a health-endangering, exhausting workday); degrading conditions; and restriction of movement through debt bondage. Any of these can constitute trabalho análogo à escravidão, the 2003 amendment defined the crime by CONDITIONS, not captivity, so no chains, locks, or physical imprisonment are required. A worker on a remote ranch, unpaid behind manufactured debts, in degrading conditions, is within the statute even if free in principle to walk out the open gate.

## Sources
- Decreto-Lei nº 2.848, de 7 de dezembro de 1940 (Código Penal), art. 149. Presidência da República. https://www.planalto.gov.br/ccivil_03/decreto-lei/del2848compilado.htm
- Repórter Brasil. (2026, January). [Report of MTE data: 2,772 workers rescued in 2025, +38% vs 2024; 68,000+ rescued since the GEFM's creation in 1995.] https://reporterbrasil.org.br/ [An investigative-journalism NGO focused on labor abuses — an advocacy source, used here for its reporting of official MTE figures.]
- Repórter Brasil. (2025, October). [Report of the lista suja update: 159 employers added — 101 individuals, 58 companies; 1,530 workers rescued in the underlying 2020–2025 cases.] https://reporterbrasil.org.br/
- Ministério do Trabalho e Emprego. (n.d.). *Cadastro de Empregadores que tenham submetido trabalhadores a condições análogas à de escravo* ("lista suja"). https://www.gov.br/trabalho-e-emprego/
- International Labour Organization. (n.d.). *Forced labour in Brazil* (recognition of the mobile inspection units and public list as reference practices). https://www.ilo.org/`,
    },
    {
      slug: "brazil-section-5-quiz",
      section: "Section 5 · Outside the door: informality, the apps, and the rhyme",
      title: "15 · Check yourself: outside the door",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What was Brazil's informality rate in 2024 and 2025, per IBGE's PNAD Contínua?",
            options: [
              "39.0% (2024), easing to 38.1% (2025), around four employed workers in ten",
              "9.0% (2024), easing to 8.1% (2025), fewer than one employed worker in ten",
              "75.0% (2024), rising to 80.1% (2025), about three employed workers in four",
              "IBGE has not measured informality since PNAD Contínua began back in 2012",
            ],
            correctIndex: 0,
            explanation: "Not an edge case: roughly 40% of the employed stand outside the CLT's door.",
            sourceLessonSlug: "brazil-informality-apps",
          },
          {
            prompt: "What does IBGE's informality statistic principally count?",
            options: [
              "Workers with no signed carteira, no CNPJ, and unpaid family workers",
              "Anyone earning below the monthly minimum wage, whatever their contract",
              "Only street vendors and others trading in the open air without a stall",
              "All workers employed outside the São Paulo and Rio metropolitan regions",
            ],
            correctIndex: 0,
            explanation: "'Informal' is a defined term, not a vibe, know what is inside a statistic before you use it.",
            sourceLessonSlug: "brazil-informality-apps",
          },
          {
            prompt: "Why does informality exclude a worker from Brazil's union system specifically?",
            options: [
              "Unicidade assigns by occupational category; no formal job means no category",
              "Informal workers are barred by the CLT from joining any workers' association",
              "Union dues are simply too expensive for most informal workers to afford",
              "It does not: informal workers are automatically enrolled in their union",
            ],
            correctIndex: 0,
            explanation: "The corporatist system's basic unit of membership, the category, is defined so that the informal four-in-ten are not in it.",
            sourceLessonSlug: "brazil-informality-apps",
          },
          {
            prompt: "What is STF Tema 1291?",
            options: [
              "The Supreme Court case on whether app drivers are employees or contractors",
              "The 2024 statute that made every app driver a CLT employee outright",
              "The Supreme Court case that abolished the compulsory union tax in 2018",
              "A tax dispute over how the app companies book their Brazilian revenue",
            ],
            correctIndex: 0,
            explanation: "Years of conflicting labor-court rulings pushed the question to the top. Repercussão geral means the answer, once fixed, binds every court.",
            sourceLessonSlug: "brazil-informality-apps",
          },
          {
            prompt: "What happened to Tema 1291 on 24 June 2026?",
            options: [
              "It was removed from the judgment docket; no thesis has been fixed since",
              "The STF ruled that every app driver is a CLT employee, binding all courts",
              "The STF ruled that no app driver can ever be an employee in Brazilian law",
              "The case was dismissed permanently and the question cannot be raised again",
            ],
            correctIndex: 0,
            explanation: "The course teaches pending as pending, and refuses to predict the outcome, as should anything you read.",
            sourceLessonSlug: "brazil-informality-apps",
          },
          {
            prompt: "What is PLP 12/2024, and whom does it leave out?",
            options: [
              "A pending bill regulating app DRIVERS only; it leaves delivery couriers out",
              "A law in force since 2024 granting all platform workers CLT employment",
              "A pending bill banning ride-hailing apps from operating in Brazil at all",
              "A constitutional amendment that would abolish unicidade for app workers",
            ],
            correctIndex: 0,
            explanation: "A separate, smaller door, proposed, not yet built: still pending in Congress as of July 2026.",
            sourceLessonSlug: "brazil-informality-apps",
          },
          {
            prompt: "Name the outside-the-door move in each of the track's four countries.",
            options: [
              "US: misclassification; Mexico: protection contracts; Poland: junk contracts; Brazil: no carteira",
              "All four countries use the same statutory misclassification test, written for them by the ILO",
              "Only Brazil leaves workers outside its labor-law protections; the other three cover everyone",
              "US: protection contracts; Brazil: junk contracts; Poland: misclassification; Mexico: informality",
            ],
            correctIndex: 0,
            explanation: "The mechanisms differ; the move is identical: put the worker outside the category the protections attach to.",
            sourceLessonSlug: "brazil-informality-apps",
          },
          {
            prompt: "Per this course, what is the most important question about any labor-law system?",
            options: [
              "Not what it gives the workers inside, but who counts as inside",
              "How high it sets its statutory minimum wage, measured in real terms",
              "How many separate unions the country's law formally recognizes",
              "Whether it has dedicated labor courts, and how many of them exist",
            ],
            correctIndex: 0,
            explanation: "The anchor's Question 2, stated at national scale: in Brazil the answer decides four in ten people.",
            sourceLessonSlug: "brazil-informality-apps",
          },
          {
            prompt: "How does Penal Code art. 149 define trabalho análogo à escravidão?",
            options: [
              "Four conditions: forced labor, jornada exaustiva, degrading conditions, debt bondage",
              "Only as physically chaining a worker, or locking them inside the worksite at night",
              "Only as the failure to pay the legal minimum wage over three consecutive months",
              "Only as employing a worker without a signed carteira for longer than one year",
            ],
            correctIndex: 0,
            explanation: "The 2003 amendment defined the crime by CONDITIONS, not captivity, a worker can be within the statute even if the gate stands open.",
            sourceLessonSlug: "brazil-slave-labor-dirty-list",
          },
          {
            prompt: "What is the GEFM?",
            options: [
              "The mobile inspection group, created in 1995, that rescues workers on site",
              "The union federation for rural and plantation workers, founded in 1995",
              "The Supreme Court panel that hears labor cases referred up from the TST",
              "A private agency that certifies slavery-free supply chains for export",
            ],
            correctIndex: 0,
            explanation: "Since 1995 the mobile teams have rescued more than 68,000 workers (MTE data).",
            sourceLessonSlug: "brazil-slave-labor-dirty-list",
          },
          {
            prompt: "How many workers were rescued in 2025, and how should the rising number be read?",
            options: [
              "2,772, up 38% on 2024; read with care, it counts what inspectors found",
              "27, down 38% on 2024, which shows the problem has been largely solved",
              "One million, counted from satellite imagery of the Amazon frontier alone",
              "None: the government stopped counting rescued workers altogether in 2020",
            ],
            correctIndex: 0,
            explanation: "The figure counts what inspectors FOUND, not all that exists, the same source-discipline the course applies everywhere.",
            sourceLessonSlug: "brazil-slave-labor-dirty-list",
          },
          {
            prompt: "What is the 'lista suja'?",
            options: [
              "The public federal register (2004) of employers caught using such labor",
              "A secret federal police file on union leaders, maintained since the 1960s",
              "The register of the unions that lost their charters for failing to file",
              "An annual ranking of the best employers to work for in Brazil, by MTE",
            ],
            correctIndex: 0,
            explanation: "Naming names, publicly, the October 2025 update added 159 employers (101 individuals, 58 companies) tied to 1,530 workers rescued in 2020-2025 cases.",
            sourceLessonSlug: "brazil-slave-labor-dirty-list",
          },
          {
            prompt: "Where has slavery-like labor historically concentrated in Brazil?",
            options: [
              "Rural frontiers: cattle, charcoal, coffee and sugarcane, with urban cases too",
              "Almost entirely in federal and state government offices in the state capitals",
              "Almost entirely in the auto and truck plants of the São Paulo ABC region",
              "Almost exclusively in the deep-sea fishing fleets off the Atlantic coast",
            ],
            correctIndex: 0,
            explanation: "Land cleared far from any inspector, workers recruited from poor regions with debts attached before they arrive.",
            sourceLessonSlug: "brazil-slave-labor-dirty-list",
          },
          {
            prompt: "What does the ILO's recognition of Brazil's system mean, precisely?",
            options: [
              "The SYSTEM is cited as an international reference, not the situation",
              "That slavery-like labor no longer occurs anywhere in Brazil these days",
              "That Brazil has at last ratified ILO Convention 87 on free association",
              "That the ILO itself runs the mobile inspections, directed from Geneva",
            ],
            correctIndex: 0,
            explanation: "State recognition precisely: the tool is the reference, not the situation it fights.",
            sourceLessonSlug: "brazil-slave-labor-dirty-list",
          },
          {
            prompt: "What do the GEFM/lista suja share with DIEESE's 1977 weapon against the wage squeeze?",
            options: [
              "The audit and the record: verified numbers and a public list of names",
              "Both were created by the military regime and then kept by democracy",
              "Both are funded from the compulsory union tax that was ended in 2017",
              "Nothing: they are unrelated tools, thirty years and a regime apart",
            ],
            correctIndex: 0,
            explanation: "DIEESE beat a dictatorship's formula with verified numbers; the GEFM and the dirty list fight slavery-like labor with inspections and named names.",
            sourceLessonSlug: "brazil-slave-labor-dirty-list",
          },
        ],
      },
    },

    // ───────── SECTION 6 · THE WHOLE ARC: BRAZIL AND THE FOUR QUESTIONS ─────────
    {
      slug: "brazil-four-questions",
      section: "Section 6 · The whole arc: Brazil and the four questions",
      title: "16 · What Brazil gives the track: follow the money that funds the union",
      recallContent: [
        {
          prompt: "What are the four art. 149 conditions, and what is the lista suja?",
          answer: "Forced labor, jornada exaustiva, degrading conditions, and debt-bondage restriction of movement, conditions, not chains. The lista suja is the public federal register (since 2004) of employers caught subjecting workers to slavery-like conditions; the October 2025 update added 159 employers tied to 1,530 rescued workers.",
        },
        {
          prompt: "What is the status of app-driver employment in Brazil as of July 2026?",
          answer: "Pending. STF Tema 1291 (whose thesis will bind all courts) was removed from the docket on 24 June 2026 pending analysis of the new ILO platform-work instrument; PLP 12/2024, a drivers-only regulation excluding couriers, is also pending in Congress. The course refuses to predict either.",
        },
      ],
      body: `You will not remember every date in this course five years from now. That is fine. **This is the lesson you keep.**

## Put the whole course in one line

Brazil ran the controlled experiment nobody could have designed: **it funded its unions by law for seventy-four years, then stopped, at a stroke, on a known date.** The result was not subtle, more than 90% of the money gone within a few years (Section 4), density drifting to a series low of 8.4% (2023) before the first uptick in twelve years (8.9%, 2024, IBGE). And the honest reading is not the tidy one in either direction: the decline predated the reform, part of what starved was paper, and part of what starved was real.

## The question you keep

Mexico gave you *whose union is it?* Brazil's gift is its financial twin:

> ### **Who pays the union — and what does the payer get?**

Follow the funding and every act of this course explains itself. Vargas's tax bought unions that answered to the state that collected it (Sections 1-2: a captured union was a *funded* captured union). The novo sindicalismo filled the shell with members, but the shell's revenue still never depended on them (Section 3). When the tax died, what had been holding unions up was revealed with experimental precision (Section 4). A union funded **without workers' consent** serves whoever guarantees the funding; a union that must **earn** its budget, Ghent-style, dues-by-choice, has no one to serve but the people who can stop paying. Carry the question everywhere: into US agency-fee debates, into any country's subsidy schemes, into every headline that says "union" as if the word settled anything.

## The four questions, applied to Brazil

The track's reusable spine (from the anchor), answered for the country you just studied:

| Question | Brazil's answer |
| --- | --- |
| **1. Who may organize?** | Formal workers, into **the** union for their category and territory. Unicidade (1943 → art. 8, II, 1988) means you are assigned, not asked; Brazil still cannot ratify ILO C87. |
| **2. Who is excluded?** | The informal **~4 in 10** (39.0% in 2024, 38.1% in 2025, IBGE), no carteira, no category; app workers, pending Tema 1291; and at the extreme, workers in art. 149 conditions, rescued by the GEFM at thousands per year. |
| **3. Who bargains, at what level?** | Category unions, employer counterparts, and a dedicated labor judiciary, with the state's formula replacing bargaining outright under the dictatorship (the arrocho), and *negociado sobre legislado* letting agreements override parts of the statute since 2017. |
| **4. What happens if you try?** | 1980: intervention, cassation, prison under the National Security Law. 1988 on: the strike is a constitutional right (art. 9). And the arc the track has seen nowhere else: the jailed strike leader was later elected president, twice, with a conviction and an annulment in between, both taught as dated facts. |

## Cross-links: where to go from here

- **The anchor** (*The History of Unions*) gave you the four questions and the US misclassification move Brazil rhymes with.
- **Mexico** (labor-mexico) is the sibling corporatism where the *party*, not the statute, was the cage, and where a trade deal, not a funding cut, forced the reckoning.
- **Poland** (labor-poland) is the mirror image of Section 2: workers who went *around* the official structure instead of capturing it, and whose union also produced a president.
- **Sweden & Denmark** (the Nordic course) is the counterfactual to Vargas's bargain: unions that earn membership through the Ghent system, and keep it.
- **Know Your Rights at Work** is the companion for your own workplace, today, in the US: protected activity, retaliation, what to do on Monday.

## What you can actually do with this

- **The lista suja is public.** Anyone, including you, can search Brazil's dirty list of employers caught using slavery-like labor. Supply-chain screening is not a specialist's power.
- **The data is public.** IBGE's PNAD Contínua (density, informality) and the STF's own case-tracking pages (Tema 1291) are open; every load-bearing number in this course can be re-checked by a student with a browser.
- **The habit is portable.** Twice in this course, verified numbers beat power: DIEESE's audit broke the arrocho in 1977, and the GEFM's inspections put names on a public list. When you meet a labor claim anywhere, do what this course did, ask for the year, the source, and the scope.

:::reveal What is the one-line verdict of Brazil's controlled experiment, stated with all three honest complications? ||| When the state stopped funding unions it had funded by law for 74 years (Lei 13.467, effective November 2017), union revenue collapsed by more than 90% within a few years, but the honest verdict carries three complications: density was already falling before 2017 (16.1% in 2012 → 9.2% in 2022, IBGE); part of what starved was paper 'cartorial' unions that existed to collect the tax; and part was real unions that lost most of their budgets in a year. The durable lesson: a union funded without workers' consent serves whoever guarantees the funding, so always ask who pays the union, and what the payer gets.

## Sources
- Decreto-Lei nº 5.452, de 1º de maio de 1943 (Consolidação das Leis do Trabalho). Presidência da República. https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm
- Constituição da República Federativa do Brasil. (1988). Presidência da República. https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm
- Lei nº 13.467, de 13 de julho de 2017. Presidência da República. https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/lei/l13467.htm
- Instituto Brasileiro de Geografia e Estatística. (2025, 2026). *PNAD Contínua* (union density 2012–2024; informality 2024–2025). https://www.ibge.gov.br/
- Ministério do Trabalho e Emprego. (n.d.). *Cadastro de Empregadores* ("lista suja"). https://www.gov.br/trabalho-e-emprego/`,
    },
    {
      slug: "brazil-final-quiz",
      section: "Section 6 · The whole arc: Brazil and the four questions",
      title: "17 · Final check: the whole arc",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "How did enforceable labor law arrive in Brazil, and in what document?",
            options: [
              "Handed down from above: Vargas signed the CLT on 1 May 1943",
              "Won from below: a general strike in São Paulo in 1917 forced it",
              "Imposed by the ILO in 1950 as a condition of Brazilian membership",
              "Written into the constitution by the military junta back in 1967",
            ],
            correctIndex: 0,
            explanation: "A gift from above, with the giver's strings: the same statute that granted protections decided who would speak for workers.",
            sourceLessonSlug: "brazil-vargas-clt",
          },
          {
            prompt: "Name the three locks of the CLT's union system.",
            options: [
              "Unicidade, the ministry charter, and the compulsory imposto sindical",
              "The minimum wage, the maximum working day, and paid annual vacations",
              "The rights to strike, to boycott, and to picket an employer's gate",
              "Federations, confederations, and the centrais recognized in 2008",
            ],
            correctIndex: 0,
            explanation: "The whole course is what happens when each lock is tested: by a dictatorship, by a democracy, and by a 2017 statute.",
            sourceLessonSlug: "brazil-three-locks",
          },
          {
            prompt: "Why has Brazil never ratified ILO Convention 87?",
            options: [
              "Unicidade cannot promise organizations 'of their own choosing'",
              "Because Brazil left the ILO in 1943 and has never rejoined it",
              "Because ratifying requires unanimity in both houses of Congress",
              "It did ratify C87 back in 1950, at the same time as Mexico did",
            ],
            correctIndex: 0,
            explanation: "Mexico ratified C87 in 1950; even communist Poland ratified it in 1957. Democratic Brazil, as of 2026, still cannot.",
            sourceLessonSlug: "brazil-three-locks",
          },
          {
            prompt: "Why did the military regime (1964-85) not need to build a labor-control apparatus?",
            options: [
              "Vargas had already built it; the generals just turned the CLT's keys",
              "It abolished all unions instead and bargained with workers directly",
              "It had no interest in controlling labor, and left the unions alone",
              "The ILO administered Brazil's unions throughout that whole period",
            ],
            correctIndex: 0,
            explanation: "The danger of a labor system built as a machine of state: machines change hands.",
            sourceLessonSlug: "brazil-dictatorship-arrocho",
          },
          {
            prompt: "What did DIEESE prove in 1977, and why did it matter?",
            options: [
              "That the 1973 inflation figure was manipulated: 12.6% vs ~22.5% real",
              "That strikes were already legal under the 1967 military constitution",
              "That the compulsory union tax was much too small to fund bargaining",
              "That wages had risen faster than inflation in every year since 1964",
            ],
            correctIndex: 0,
            explanation: "Not an uprising, an audit. It handed the São Bernardo union president, Lula, the issue that became the ABC strikes.",
            sourceLessonSlug: "brazil-dictatorship-arrocho",
          },
          {
            prompt: "What was structurally distinctive about the ABC strikes of 1978-80?",
            options: [
              "They were led from INSIDE the official state-chartered union itself",
              "They were organized by a secret union with no legal existence at all",
              "They were called by the Labor Ministry itself, to test the wage formula",
              "They never involved more than the one Scania plant in São Bernardo",
            ],
            correctIndex: 0,
            explanation: "Two authoritarian corporatisms, two escape routes, and in both countries, the labor movement trained the democratic opposition.",
            sourceLessonSlug: "brazil-abc-strikes",
          },
          {
            prompt: "Audit the 1988 Constitution against the three locks.",
            options: [
              "Broke Lock 2, kept Locks 1 and 3, and made the strike a constitutional right",
              "Broke all three locks, leaving unions wholly free of the state after 1988",
              "Kept all three locks unchanged, including the ministry's intervention power",
              "Abolished unions entirely and handed their role to the labor courts instead",
            ],
            correctIndex: 0,
            explanation: "Democracy removed the state's key and kept the machine, which is also why C87 remains out of reach.",
            sourceLessonSlug: "brazil-cut-pt-1988",
          },
          {
            prompt: "State the Lula record of 2017-2023 the way this course teaches it.",
            options: [
              "Convicted 2017-18; freed 2019; convictions annulled 2021; elected again 2022",
              "Acquitted on the merits in 2021, in a ruling that established his innocence",
              "Convicted in 2017-18, and the convictions still stand in force to this day",
              "Never convicted and never imprisoned, because the charges were dropped in 2018",
            ],
            correctIndex: 0,
            explanation: "Both facts taught, the conviction and the annulment, and neither adjudicated: no court issued a merits verdict after the annulment.",
            sourceLessonSlug: "brazil-lula-record",
          },
          {
            prompt: "What did Lei 13.467/2017 do to Vargas's third lock, and how could a mere statute do it?",
            options: [
              "It made the tax conditional on the worker's authorization; the tax was statutory",
              "It doubled the tax, which was possible because taxes are set by executive decree",
              "It abolished unicidade, possible because the 1988 constitution had lapsed by then",
              "Nothing: the tax survives today, since only an amendment could ever remove it",
            ],
            correctIndex: 0,
            explanation: "Effective 11 November 2017; upheld by the STF in June 2018 (ADI 5794).",
            sourceLessonSlug: "brazil-lei-13467",
          },
          {
            prompt: "What happened to union revenue after the tax became voluntary?",
            options: [
              "It collapsed by more than 90%: R$2.0bn (2017) → R$88.2M (Jan-Nov 2019)",
              "It fell by about 5% in 2018 and had recovered fully by the end of 2021",
              "It rose above R$3bn in 2018, as workers volunteered to keep paying it",
              "No one measured it, because the ministry stopped publishing the figures",
            ],
            correctIndex: 0,
            explanation: "Two official-data series, two scopes (unions only vs unions + federations + confederations + centrais), one shape.",
            sourceLessonSlug: "brazil-revenue-collapse",
          },
          {
            prompt: "Which complication cuts AGAINST the tidy story that the 2017 reform killed Brazilian unionism?",
            options: [
              "Density was already falling before 2017 (16.1% in 2012 → 9.2% in 2022)",
              "Union density actually rose after 2017, from 9.2% up to 16.1% by 2024",
              "The compulsory tax was never actually abolished, and it survives today",
              "The 2017 reform applied only in the state of São Paulo, not nationally",
            ],
            correctIndex: 0,
            explanation: "The course refuses both tidy framings: the reform neither killed a healthy movement nor culled only fakes, real unions lost most of their budgets too.",
            sourceLessonSlug: "brazil-revenue-collapse",
          },
          {
            prompt: "Who stands outside the CLT's door, by the numbers?",
            options: [
              "Roughly four in ten: 39.0% (2024) and 38.1% (2025) informality, per IBGE",
              "Almost no one: informality has been below 2% since PNAD began in 2012",
              "Only foreign workers, who are barred from the CLT by their visa status",
              "Only workers in agriculture, whom the CLT expressly excluded back in 1943",
            ],
            correctIndex: 0,
            explanation: "The corporatist system's unit of membership, the category, is defined so that they are not in it.",
            sourceLessonSlug: "brazil-informality-apps",
          },
          {
            prompt: "How does this course handle the app-driver question, and why?",
            options: [
              "As pending and dated July 2026: Tema 1291 is off the docket, PLP 12/2024 unpassed",
              "It states that app drivers are definitively CLT employees, settled by the STF in 2024",
              "It states that app drivers are definitively autonomous, settled by the STF in 2024",
              "It ignores the question entirely, as the course was written before the app economy",
            ],
            correctIndex: 0,
            explanation: "A paragraph claiming to know how Tema 1291 comes out is telling you about its author, not about Brazilian law.",
            sourceLessonSlug: "brazil-informality-apps",
          },
          {
            prompt: "What are Brazil's two internationally cited tools against trabalho análogo à escravidão?",
            options: [
              "The GEFM mobile inspection teams and the public 'lista suja' of employers",
              "A national referendum on forced labor and a federal whistleblower hotline",
              "The compulsory union tax and unicidade sindical, both from the 1943 CLT",
              "Import tariffs and trade sanctions imposed on the states that allow it",
            ],
            correctIndex: 0,
            explanation: "The ILO cites the SYSTEM as a reference; the problem's persistence is why it still rescues thousands a year (Repórter Brasil, reporting MTE data).",
            sourceLessonSlug: "brazil-slave-labor-dirty-list",
          },
          {
            prompt: "What is the portable question Brazil adds to the track's toolkit?",
            options: [
              "Who pays the union, and what does the payer get?",
              "Whose union is it? (that one is Mexico's question)",
              "Is there a union in the workplace at all, or none?",
              "How large is the union's strike fund, in reais?",
            ],
            correctIndex: 0,
            explanation: "Follow the funding and every act of the course explains itself, from the captured-but-funded unions of 1964 to the collapse of 2018.",
            sourceLessonSlug: "brazil-four-questions",
          },
        ],
      },
    },
  ],
};
