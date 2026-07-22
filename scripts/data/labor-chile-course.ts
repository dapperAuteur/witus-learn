// Authored "Chile: A Labor System Designed to Be Weak" — Wave 2 of the Workers' Rights track
// (plans/future-courses/workers-rights-track-proposal.md), and the recommended LAST country course
// in the learner's sequence: every other course in the track shows a labor system that EVOLVED;
// Chile shows one that was DESIGNED, by named people, with a stated goal — the right final thought
// before a student re-reads their own country's statute. Hangs off the anchor, "The History of
// Unions: America and the World" (scripts/data/history-of-unions-course.ts), and is deliberately
// set AGAINST the Nordics course (scripts/data/labor-nordics-course.ts): same surface — no sectoral
// bargaining established by statute — OPPOSITE cause (state absent because unions are strong vs
// unions weak by state design).
//
// Sourcing discipline (the load-bearing part of this file):
//   * EVERY figure carries a YEAR + SOURCE. Density 16% (2023) and coverage 19.3% (2023) vs the
//     OECD average 33.5% (2023/24) are OECD/AIAS ICTWSS figures as reported in OECD (2025),
//     "Enhancing Sectoral Collective Bargaining in Chile" — which also documents the firm-level,
//     fragmented, uncoordinated structure. The 1973 density peak (~34%) is Fundación Sol's series,
//     echoed by Memoria Chilena. Where Chilean official (Dirección del Trabajo) and OECD measures
//     differ by denominator, the course says which it is using.
//   * NO LAW NUMBER IS INVENTED. The Plan Laboral decree laws are named precisely where verified
//     (DL 2200 of 1978; DL 2756 and DL 2758 of 1979 — the package was eight decree laws, one in
//     1978 and seven in July 1979) and generically otherwise ("the 1990–91 and 2001 reform rounds"
//     are described without statute numbers the author did not verify). Ley 20.940 (published
//     8 Sep 2016, in force 1 Apr 2017), Ley 20.123 (published 14 Oct 2006, in force 14 Jan 2007)
//     and Ley 21.561 (published 26 Apr 2023, phasing to 40 hours by 2028) are asserted with dates
//     from BCN/LeyChile, the Dirección del Trabajo, and the Ministry of Labor.
//   * THE STEELMAN IS REAL, AND CITED TO ITS AUTHOR. José Piñera's case for the Plan Laboral is
//     given in his own published terms (economiaysociedad.cl; La revolución laboral en Chile,
//     1990) BEFORE the documented effects are laid against it. The course does not caricature the
//     design's rationale; it quotes it, then measures it.
//   * PINOCHET-ERA HISTORY IS HANDLED SOBERLY. The pre-1973 movement and its destruction are
//     taught from Memoria Chilena, the CUT's own history (attributed as such), and the Rettig
//     Commission (1991). The Santa María de Iquique death toll (1907) is taught AS CONTESTED —
//     official counts ~126, social memory up to 3,600 via the 1969 Cantata — with the dispute
//     itself as the lesson. No fabricated characters, no invented scenes.
//   * LIVE POLITICS STAYS DATED AND ADJUDICATED BY NOBODY. The 2019 protests, the 2020 entry
//     plebiscite (Apruebo 78.27%, Servel), and the two rejected constitutional proposals
//     (4 Sep 2022: Rechazo 61.86%; 17 Dec 2023: En contra 55.76%) are asserted as dated vote
//     outcomes only. The course does not score Chile's current politics.
//   * THE THROUGH-LINE: subcontratación (Ley 20.123) is taught as Chile's version of the
//     put-them-outside move, and the rhyme is NAMED — US misclassification (anchor), Mexico's
//     protection contracts (labor-mexico), Poland's junk contracts (labor-poland), informality
//     across the Global South. Cross-links siblings; does not restate them.

import type { AuthoredCourse } from "./authored-course";

export const LABOR_CHILE_COURSE: AuthoredCourse = {
  title: "Chile: A Labor System Designed to Be Weak",
  description:
    "Every other course in the Workers' Rights track shows you a labor system that evolved — pushed and pulled into shape over a century of strikes, statutes, and settlements. Chile shows you one that was designed. In 1979, under a military dictatorship, a 30-year-old economist named José Piñera wrote a labor code with a stated goal, published a book defending it, and signed his work — bargaining confined by law to the single firm, strikes that employers could wait out or replace their way through, union pluralism used to fragment rather than to free. This course reads that design the way an engineer reads a blueprint. You will see what stood before it: the strongest labor movement in Latin America, a third of wage earners unionised by 1973 — and how it was destroyed after the coup, told soberly and cited carefully. You will hear the designers' case in their own words, steelmanned honestly before it is measured against the record. You will follow the design through the return to democracy, why elected governments reformed it only at the margins for a quarter century, what the 2016 reform (Ley 20.940) finally changed, and what it deliberately did not, and you will read the result in today's numbers: union density around 16% and bargaining coverage around 19% (2023, OECD/AIAS), among the lowest in the OECD, in a system the OECD itself describes as atomised. Then the comparison the whole track has been building toward: Chile against Sweden and Denmark — two systems with the same surface, no sectoral bargaining written into statute, for exactly opposite reasons. One is silent because unions are strong enough not to need it. One is silent because its authors wanted them weak. This is the recommended final country course in the track, because its closing assignment is the point of the whole track: go re-read your own country's labor law, and ask who designed it, and what they wanted. Cited to OECD/AIAS, the Biblioteca del Congreso Nacional, the Dirección del Trabajo, Memoria Chilena, Servel, and the designers' own published defense. Take \"The History of Unions: America and the World\" first.",
  lessons: [
    // ────────────── SECTION 1 · A LABOR CODE WITH AN AUTHOR ──────────────
    {
      slug: "chile-designed-not-evolved",
      title: "1 · Designed, not evolved: why Chile is the last course",
      section: "Section 1 · A labor code with an author",
      body: `Every labor system you have met in this track so far *evolved*. America's grew out of Haymarket and the Wagner Act and Taft-Hartley, each layer a reaction to the last. Sweden's and Denmark's grew out of founding truces between organised workers and organised employers. Nobody sat down one year and drew the whole thing.

**Chile is the exception, and that is the entire reason this course exists.** The core of Chile's labor system was written in **1979**, under the military dictatorship of Augusto Pinochet, by a named person, **José Piñera**, a Harvard-trained economist appointed Minister of Labor at age 30, as a deliberate, coherent package called the **Plan Laboral** ("Labor Plan"). It had a stated goal. Its author published a book defending it and defends it to this day. And its central architecture, collective bargaining confined by law to the **single firm**, never the industry, survived the dictatorship, survived the return to democracy in 1990, survived a major reform in 2016, and survived two attempts to rewrite the constitution in 2022 and 2023. You will read today's design in today's numbers before this course is over: union density around **16%** and collective-bargaining coverage around **19.3%** in **2023** (OECD/AIAS ICTWSS, in OECD, 2025), against an OECD coverage average of about **33.5%** (2023/24).

Hold on to what that means methodologically. When a system *evolves*, you can always argue about what anyone intended, outcomes are accidents piled on accidents. When a system is *designed*, intent is on the record. Chile is the clearest documented case anywhere of a labor system engineered, on purpose, by identifiable people, to change the balance of power between workers and employers, which is why the track's proposal calls it "the perfect final lesson before a student re-reads their own country's law." Systems are choices. Chile is where you can watch the choosing.

**Two commitments before we start, because this history is painful and this politics is live.**

First: the design was built on a destruction. Before 1979 comes 1973, a coup, a dissolved union confederation, and union leaders among the dead and disappeared. This course teaches that soberly, from the historical record, without flinching and without theatrics (Section 2).

Second: **the designers get their say.** The Plan Laboral has a serious intellectual defense, its author's own, and you will hear it steelmanned in Section 3 *before* you see the measured effects. A course that only prosecutes is propaganda; a course that lets the defense speak and then checks it against the evidence is education.

Here are the anchor course's **four questions**, asked of Chile in advance. Everything after this is the detail.

| Question | Chile's answer (the short version) |
| --- | --- |
| **1 · Who is allowed to organise?** | Almost everyone, freely, since 1979, deliberately including *multiple competing unions inside one firm*. Freedom used as fragmentation. |
| **2 · Who is excluded?** | The subcontracted, above all, workers placed *outside* the bargaining unit by contracting structure (Section 5), plus the informal. |
| **3 · Who bargains with whom, at what level?** | A union (or a non-union "negotiating group") with a single employer, at the **firm level only**. Sectoral bargaining is not part of the legal architecture. This is the design's heart. |
| **4 · What happens to you if you try?** | Historically: replacement, until 2017, employers could replace strikers, and under the original 1979 rules a long strike could legally end your employment. Since Ley 20.940 (in force 2017), replacement is banned; the firm-level cage remains. |

*(Haven't taken the anchor, "The History of Unions: America and the World"? You can follow this course without it, but the four questions, Taft-Hartley, and the Mackay replacement doctrine all come from there, and this course leans on them without re-teaching them.)*

:::reveal What makes Chile's labor system different in KIND from every other system in this track, and why does that make it the recommended final course? ||| Every other system evolved; Chile's was designed, written in 1979 as a coherent package (the Plan Laboral) by a named author (José Piñera) under the Pinochet dictatorship, with a stated goal. Because intent is on the record, Chile turns "who bargains, at what level?" from a description into a question about choices, which is the right lens to carry back to your own country's law, so it comes last.

## Sources
- OECD. (2025). *Enhancing sectoral collective bargaining in Chile* (OECD Reviews of Labour Market and Social Policies). OECD Publishing. https://www.oecd.org/en/publications/enhancing-sectoral-collective-bargaining-in-chile_454f4167-en/
- Piñera, J. (1990). *La revolución laboral en Chile*. Zig-Zag. https://www.economiaysociedad.cl/
- Biblioteca del Congreso Nacional de Chile. (1979). *Decreto Ley 2758: Establece normas sobre negociación colectiva*. LeyChile. https://www.bcn.cl/leychile/navegar?idNorma=6993`,
      recallContent: [
        {
          prompt: "Who wrote Chile's 1979 Plan Laboral, under what government, and what is its central architectural rule?",
          answer:
            "José Piñera, a Harvard-trained economist appointed Minister of Labor at 30, under the Pinochet military dictatorship. The central rule: collective bargaining is confined by law to the single firm, never the industry or sector.",
        },
        {
          prompt: "Give Chile's union density and bargaining coverage with year and source, and the OECD coverage average for comparison.",
          answer:
            "Density around 16% and coverage around 19.3% in 2023 (OECD/AIAS ICTWSS, in OECD 2025), against an OECD coverage average of about 33.5% (2023/24), among the lowest coverage in the OECD.",
        },
      ],
    },
    {
      slug: "chile-before-1973",
      title: "2 · What stood before: Iquique, the CUT, and a 34% peak",
      section: "Section 1 · A labor code with an author",
      body: `You cannot read the 1979 design without knowing what it was designed *against*. The Plan Laboral was not written on a blank slate. It was written in a country that had built, over seven decades, one of the strongest labor movements in Latin America, and had just watched it be destroyed.

**Start in the desert.** Chile's labor movement was born in the northern nitrate fields, the *pampa salitrera*, where tens of thousands of miners dug the fertilizer mineral that made Chile's export economy in the late 1800s. Conditions were brutal; pay often came in company scrip good only at the company store. In December **1907**, thousands of striking nitrate workers and their families marched into the port city of **Iquique** to press their demands and were quartered at the **Santa María School**. On **21 December 1907**, after the strikers refused an order to disperse, troops under General Roberto Silva Renard opened fire on them.

**How many died is genuinely contested, and the dispute is itself worth teaching.** Contemporary official counts put the dead at around **126**, that figure comes from the Iquique hospital administrator's count, and a telegram sent to the president within hours claimed only 30 (Archivo Nacional de Chile; Memoria Chilena). Later estimates run far higher, and Chilean social memory, fixed by the *Cantata de Santa María de Iquique*, the 1969 composition by Luis Advis that most Chileans know by heart, says **3,600**. Historians generally treat the official count as too low and the Cantata's number as memory rather than measurement; the honest statement is that **hundreds died at minimum, the true toll is unknown, and the state counted its victims carelessly because it could** (Memoria Chilena, n.d.; on the competing counts, see the scholarship collected by Chile's Archivo Nacional). This course will not pick a number. It will teach you to notice when a number is contested and why.

**Then the building.** Out of the nitrate era's mutual-aid societies and resistance societies grew federations, then national confederations. In **1953** the strands merged into the **CUT**, the *Central Única de Trabajadores*, a single national union center spanning blue-collar, white-collar, and public workers. Union membership climbed for two decades: by **1973**, Chile's union density reached roughly **34%**, the highest in its history, up from the mid-20s just a decade earlier (Fundación Sol, 2015; Memoria Chilena, n.d.). By the CUT's own account, at the time of the coup it represented on the order of **940,000 workers across some 6,700 unions** (CUT, n.d., the organisation's own history, cited as such).

**And labor stood near the center of national politics.** In 1970 Chileans elected the Socialist **Salvador Allende** president at the head of a left coalition in which the unions were a pillar; in 1971 Chile's Congress approved the nationalization of the copper industry, the country's economic crown. Whatever you think of that political project, and Chileans still argue about it, hard, the structural fact matters for this course: **by the early 1970s organised labor in Chile was strong, centralised, sectorally organised, and politically consequential.** Copper and nitrate had taught Chilean workers to bargain *as an industry*, and the CUT gave them one national voice.

That is what stood on 10 September 1973. Keep the shape of it in mind, centralised, industrial, political, because the 1979 design (Section 3) reads almost point-for-point as its negation.

:::reveal Why does this course refuse to state a single death toll for the Santa María School massacre (1907), and what does it teach instead? ||| Because the toll is genuinely contested: contemporary official counts said around 126 (with an initial telegram claiming 30), while Chilean social memory, fixed by the 1969 Cantata, says 3,600, and historians treat the truth as unknown but far above the official count. The lesson is methodological: notice when a number is contested, ask who counted and why, and refuse false precision.

## Sources
- Memoria Chilena, Biblioteca Nacional de Chile. (n.d.). *Masacre de la Escuela Santa María de Iquique*. https://www.memoriachilena.gob.cl/wiki/portadaut_masacredelaescuelasantamariadeiquique.php
- Archivo Nacional de Chile. (n.d.). *Matanza de la Escuela de Santa María de Iquique en 1907*. https://www.archivonacional.gob.cl/colecciones/matanza-de-la-escuela-de-santa-maria-de-iquique-en-1907
- Memoria Chilena, Biblioteca Nacional de Chile. (n.d.). *Central Única de Trabajadores (CUT, 1953–1973)*. https://www.memoriachilena.gob.cl/602/w3-article-96204.html
- Fundación Sol. (2015). *Sindicatos y negociación colectiva: Panorama estadístico nacional y evidencia comparada*. https://fundacionsol.cl/
- Central Unitaria de Trabajadores de Chile. (n.d.). *La historia de la CUT*. https://cut.cl/web/la-historia-de-la-cut/`,
      recallContent: [
        {
          prompt: "What was the CUT (1953), and how strong was Chilean labor by 1973, with sources?",
          answer:
            "The Central Única de Trabajadores, Chile's single national union center founded in 1953. By 1973 union density reached roughly 34%, its historic peak (Fundación Sol, 2015; Memoria Chilena), and by the CUT's own account it represented about 940,000 workers in some 6,700 unions at the time of the coup.",
        },
        {
          prompt: "Why does the pre-1973 movement's SHAPE (not just its size) matter for reading the Plan Laboral?",
          answer:
            "Because it was centralised (one national confederation), industrially organised (copper and nitrate bargained as sectors), and politically consequential (a pillar of Allende's coalition), and the 1979 design reads almost point-for-point as the negation of exactly those three properties.",
        },
      ],
    },
    {
      slug: "chile-quiz-1",
      title: "Section 1 quiz · A labor code with an author",
      section: "Section 1 · A labor code with an author",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What makes Chile's labor system different in KIND from every other system in the Workers' Rights track?",
            options: [
              "It is the oldest labor system in the Americas",
              "It was deliberately designed as a coherent package (the 1979 Plan Laboral) by a named author with a stated goal, rather than evolving",
              "It has the highest union density in the OECD",
              "It was written by the ILO",
            ],
            correctIndex: 1,
            explanation:
              "Every other course shows a system that evolved; Chile's core was written in 1979 by José Piñera under the Pinochet dictatorship, intent is on the record.",
            sourceLessonSlug: "chile-designed-not-evolved",
          },
          {
            prompt: "Who was José Piñera, in this story?",
            options: [
              "The general who led the 1973 coup",
              "The Harvard-trained economist appointed Pinochet's Minister of Labor at age 30, who wrote the 1979 Plan Laboral and published a book defending it",
              "Chile's first labor union president",
              "The author of the 2016 labor reform",
            ],
            correctIndex: 1,
            explanation:
              "Piñera designed the Plan Laboral, signed his work, and defends it to this day, which is exactly why Chile is the track's clearest case of design.",
            sourceLessonSlug: "chile-designed-not-evolved",
          },
          {
            prompt: "What is the central architectural rule of Chile's labor system, from 1979 to today?",
            options: [
              "Collective bargaining happens at the national level, once a year",
              "Collective bargaining is confined by law to the single firm, sectoral bargaining is not part of the legal architecture",
              "Only the government may negotiate wages",
              "Strikes are constitutionally guaranteed at all levels",
            ],
            correctIndex: 1,
            explanation:
              "Firm-level-only bargaining is the design's heart, it survived the dictatorship, the transition, the 2016 reform, and two constitutional rewrite attempts.",
            sourceLessonSlug: "chile-designed-not-evolved",
          },
          {
            prompt: "What were Chile's union density and bargaining coverage in 2023 (OECD/AIAS)?",
            options: [
              "Density ~16%, coverage ~19.3%",
              "Density ~34%, coverage ~50%",
              "Density ~65%, coverage ~88%",
              "Density ~5%, coverage ~2%",
            ],
            correctIndex: 0,
            explanation:
              "Around 16% density and 19.3% coverage in 2023 (OECD/AIAS ICTWSS, in OECD 2025), coverage among the OECD's lowest, against an average of ~33.5%.",
            sourceLessonSlug: "chile-designed-not-evolved",
          },
          {
            prompt: "How does Chile's bargaining coverage compare with the OECD average?",
            options: [
              "It is roughly double the OECD average",
              "About 19.3% (2023) against an OECD average of about 33.5% (2023/24), among the lowest in the OECD",
              "It exactly matches the OECD average",
              "The OECD does not measure Chile",
            ],
            correctIndex: 1,
            explanation:
              "Chile's coverage sits far below the OECD average, the designed firm-level cage shows up directly in the coverage number.",
            sourceLessonSlug: "chile-designed-not-evolved",
          },
          {
            prompt: "Why does the course insist the designers 'get their say' (the steelman) before the effects are measured?",
            options: [
              "Because the course endorses the Plan Laboral",
              "Because a course that only prosecutes is propaganda, the Plan has a serious published defense by its author, and education means hearing it, then checking it against evidence",
              "Because Chilean law requires it",
              "Because the effects are unknown",
            ],
            correctIndex: 1,
            explanation:
              "Section 3 steelmans Piñera's own case in his own terms before laying the documented record against it.",
            sourceLessonSlug: "chile-designed-not-evolved",
          },
          {
            prompt: "What happened at the Santa María School in Iquique on 21 December 1907?",
            options: [
              "A mining accident killed nitrate workers",
              "Troops under General Silva Renard opened fire on striking nitrate workers and their families who were quartered at the school",
              "The CUT was founded there",
              "The first collective agreement in Chile was signed there",
            ],
            correctIndex: 1,
            explanation:
              "Thousands of striking nitrate workers had marched into Iquique; after they refused to disperse, soldiers fired on them at the school.",
            sourceLessonSlug: "chile-before-1973",
          },
          {
            prompt: "What is true about the death toll at Santa María de Iquique?",
            options: [
              "It is precisely documented at 3,600",
              "It is genuinely contested, official counts said around 126, social memory (via the 1969 Cantata) says 3,600, and historians treat the truth as unknown but well above the official count",
              "It is precisely documented at 30",
              "No one died; the strike ended peacefully",
            ],
            correctIndex: 1,
            explanation:
              "The course teaches the dispute itself: notice who counted, and refuse false precision. Hundreds died at minimum; the state counted carelessly because it could.",
            sourceLessonSlug: "chile-before-1973",
          },
          {
            prompt: "What fixed the figure of 3,600 dead in Chilean social memory?",
            options: [
              "The official government report of 1908",
              "The Cantata de Santa María de Iquique, composed by Luis Advis in 1969",
              "The Rettig Report",
              "The 1979 Plan Laboral",
            ],
            correctIndex: 1,
            explanation:
              "The 1969 Cantata is the vehicle of social memory, memory, not measurement, which is exactly the distinction the lesson teaches.",
            sourceLessonSlug: "chile-before-1973",
          },
          {
            prompt: "What was the CUT?",
            options: [
              "A copper mining company",
              "The Central Única de Trabajadores, Chile's single national union center, founded in 1953",
              "A government labor inspectorate",
              "An employers' confederation",
            ],
            correctIndex: 1,
            explanation:
              "Founded 1953, the CUT unified Chile's union strands into one national voice, by its own account some 940,000 workers in ~6,700 unions by 1973.",
            sourceLessonSlug: "chile-before-1973",
          },
          {
            prompt: "Roughly what was Chile's union density at its historic peak, and when?",
            options: [
              "About 34%, in 1973",
              "About 16%, in 1990",
              "About 65%, in 1953",
              "About 50%, in 2007",
            ],
            correctIndex: 0,
            explanation:
              "Density peaked around 34% in 1973 (Fundación Sol, 2015; Memoria Chilena), roughly double today's rate.",
            sourceLessonSlug: "chile-before-1973",
          },
          {
            prompt: "Which THREE properties of the pre-1973 movement does the course say the 1979 design reads as a negation of?",
            options: [
              "Rural, informal, and apolitical",
              "Centralised (one confederation), industrially organised (sectors like copper bargaining as one), and politically consequential",
              "Foreign-led, illegal, and violent",
              "Small, fragmented, and firm-level",
            ],
            correctIndex: 1,
            explanation:
              "The Plan Laboral atomised what was centralised, confined to the firm what was sectoral, and depoliticised what was political, point for point.",
            sourceLessonSlug: "chile-before-1973",
          },
          {
            prompt: "Where was Chile's labor movement born?",
            options: [
              "In Santiago's textile mills",
              "In the northern nitrate fields, the pampa salitrera, in the late 1800s",
              "In the southern fisheries",
              "In the vineyards of the central valley",
            ],
            correctIndex: 1,
            explanation:
              "Nitrate mining made Chile's export economy and its labor movement, brutal conditions, company scrip, and the organising they provoked.",
            sourceLessonSlug: "chile-before-1973",
          },
          {
            prompt: "Under the ORIGINAL 1979 rules, what could happen to you for striking too long (Question 4)?",
            options: [
              "Nothing, strikes had no time limit",
              "A long strike could legally end your employment, and employers could replace strikers, rules that stood until the 2017 reform took effect",
              "You would be imprisoned automatically",
              "The state would pay your wages",
            ],
            correctIndex: 1,
            explanation:
              "The four-questions preview: replacement was legal until Ley 20.940 took effect in 2017, and the original design let a long strike legally end employment (Section 3 has the detail).",
            sourceLessonSlug: "chile-designed-not-evolved",
          },
          {
            prompt: "Who is EXCLUDED, above all, in Chile's system (Question 2 preview)?",
            options: [
              "Public-sector managers",
              "Subcontracted workers, placed outside the bargaining unit by contracting structure, plus the informal",
              "Mining workers",
              "University graduates",
            ],
            correctIndex: 1,
            explanation:
              "Subcontratación is Chile's version of the put-them-outside move, and Section 5 makes it the through-line to the rest of the track.",
            sourceLessonSlug: "chile-designed-not-evolved",
          },
        ],
      },
    },

    // ────────────── SECTION 2 · THE DESTRUCTION, 1973–1979 ──────────────
    {
      slug: "chile-coup-and-repression",
      title: "3 · 11 September 1973: the movement is destroyed",
      section: "Section 2 · The destruction, 1973-1979",
      body: `On the morning of **11 September 1973**, the Chilean armed forces overthrew the elected government. Jets bombed the presidential palace; President Salvador Allende died in it; a four-man military junta under General **Augusto Pinochet** took power and held it for the next sixteen and a half years.

What happened next to the labor movement was not a side effect of the coup. It was one of its objects.

**The head was cut off within days.** By **Decree Law No. 12**, in September 1973, the junta cancelled the legal status of the **CUT**, the national union center you met in the last lesson, with its roughly 940,000 affiliated workers, outlawed it, and seized its assets (CUT, n.d.; Memoria Chilena, n.d.). Collective bargaining was suspended. Union elections were banned. Union meetings required permission and could be attended by police. Wages, which sectors like copper had negotiated, were now set by government decree. The labor relations system that had taken seventy years to build stopped existing in about two weeks, and for the next six years, Chile simply had **no functioning collective bargaining at all** (a vacuum that becomes important in the next lesson).

**The people were next, and this must be said plainly.** Chile's National Commission on Truth and Reconciliation, the **Rettig Commission**, created after the return to democracy, and its successor body documented more than **3,000 people killed or disappeared** by agents of the dictatorship over its span (Comisión Nacional de Verdad y Reconciliación, 1991, and the follow-up Corporation's consolidated findings). Union officers, shop-floor delegates, and labor activists were heavily represented among the victims, especially in the first months: being a union leader in a mine, a factory, or a farm in late 1973 was, in itself, enough to put a person on a list. Two named cases stand for thousands. **Víctor Jara**, the singer-songwriter whose music was woven through the labor and student movements, was detained in the days after the coup, tortured, and killed in the Estadio Chile; Chilean courts convicted former officers for his murder decades later. And in **1982**, **Tucapel Jiménez**, president of the public employees' association **ANEF** and by then an open critic of the regime's labor policy, was murdered by state intelligence agents, a crime for which Chilean courts, again decades later, convicted the men responsible.

Two disciplines for reading this lesson, because this is the most painful material in the course:

- **These are findings, not allegations.** The numbers above come from Chile's own official truth commissions, created by Chile's own democracy, and the named cases ended in criminal convictions in Chilean courts. This is about as far from contested history as the twentieth century gets. Chileans dispute much about the Allende years and the dictatorship's economics; the fact of the killings is documented by the Chilean state itself.
- **Do not let the numbers do the flattening.** The dictatorship's repression fell on the whole society, not only on unionists, and the labor movement was not merely a victim organization; it later became one of the first forces to organise open resistance (the copper miners' confederation called the first mass national protest against the regime in **May 1983**, which grew into the protest cycle of the mid-1980s). Both halves are true and this course will hold both.

Here is the point to carry into the next lesson. **By 1978, Chile's old labor system had been physically and legally annihilated, but nothing had been built in its place.** A dictatorship that presented itself abroad as modernizing could not indefinitely run a labor market with no labor law. Something would have to be written. The only question was what, and by whom.

:::reveal What happened to the CUT after the coup, and what do Chile's own truth commissions document about the human toll of the dictatorship? ||| The junta cancelled the CUT's legal status by Decree Law No. 12 (September 1973), outlawed it and seized its assets; collective bargaining was suspended and union elections banned. The Rettig Commission (1991) and its successor documented more than 3,000 people killed or disappeared by the dictatorship, with union officers and labor activists heavily represented, especially in the first months, findings of the Chilean state itself, not allegations.

## Sources
- Comisión Nacional de Verdad y Reconciliación. (1991). *Informe de la Comisión Nacional de Verdad y Reconciliación* [Rettig Report]. Gobierno de Chile. https://bibliotecadigital.indh.cl/handle/123456789/170
- Memoria Chilena, Biblioteca Nacional de Chile. (n.d.). *Central Única de Trabajadores (CUT, 1953–1973)*. https://www.memoriachilena.gob.cl/602/w3-article-96204.html
- Central Unitaria de Trabajadores de Chile. (n.d.). *La historia de la CUT*. https://cut.cl/web/la-historia-de-la-cut/
- Museo de la Memoria y los Derechos Humanos. (n.d.). *Archivo: Central Unitaria de Trabajadores (CUT)*. https://www.archivommdh.cl/index.php/central-unitaria-de-trabajadores-cut`,
      recallContent: [
        {
          prompt: "By what instrument and when was the CUT dissolved, and what else was shut down with it?",
          answer:
            "Decree Law No. 12, September 1973, the junta cancelled the CUT's legal status, outlawed it, and seized its assets. Collective bargaining was suspended, union elections banned, meetings put under police supervision, and wages set by decree. Chile then had no functioning collective bargaining for six years.",
        },
        {
          prompt: "Name the two documented cases the course uses to stand for the repression of labor figures, and why they are 'findings, not allegations.'",
          answer:
            "Víctor Jara, detained, tortured and killed in the Estadio Chile days after the coup; and Tucapel Jiménez, ANEF president, murdered by state intelligence agents in 1982. Both cases ended in criminal convictions in Chilean courts, and the overall toll (3,000+ killed or disappeared) is documented by Chile's own truth commissions.",
        },
      ],
    },
    {
      slug: "chile-boycott-to-plan",
      title: "4 · Six years of nothing, then a boycott forces a labor code",
      section: "Section 2 · The destruction, 1973-1979",
      body: `Between 1973 and 1979, Chilean workers lived in a legal vacuum: unions existed on paper but could not bargain, could not strike, could not hold elections. Why did the dictatorship write a labor code at all, and why in **1979**, six years in? The answer is one of the strangest details in this whole track: **the Plan Laboral exists, in significant part, because of a threatened boycott by foreign unions.**

**The pressure.** Inside Chile, a group of union leaders who had survived the repression, known as the **Grupo de los Diez** ("Group of Ten"), kept pressing the regime over labor rights and reached out to the international labor movement. Abroad, the case built: the ILO's supervisory machinery was engaged, and by 1978 the **AFL-CIO**, the American union federation you know from the anchor course, together with international transport unions was preparing a **commercial boycott of Chilean goods**: longshoremen refusing to load or unload Chilean cargo, demanding an end to the violation of labor rights (Álvarez, 2012). For an export economy, copper, fruit, fishmeal, moving through foreign, heavily unionised ports, this was not a symbolic threat.

**The response.** At the end of 1978, Pinochet appointed the young economist **José Piñera** Minister of Labor, with, as the scholarship on the episode puts it, the mission of stopping the boycott and building new labor institutions (Álvarez, 2012). Piñera moved fast. In mid-1979 the government issued the decree laws of the **Plan Laboral**; once the framework restoring legal union activity and collective bargaining was announced, **the AFL-CIO suspended the boycott**.

Read that sequence carefully, because both of its halves matter and honest people emphasise different ones:

- **Half one: international labor solidarity worked.** A dictatorship that had annihilated its labor movement was forced, by pressure from workers in *other countries*, to restore legal unions and legal bargaining. If the anchor course's ILO lesson left you bleak about international enforcement, here is a case where the informal kind, a boycott threat, moved a military government in months. File it next to the USMCA mechanism from the Mexico course as the track's rare good news about cross-border leverage.
- **Half two: the regime turned compliance into architecture.** The junta did not concede the old system back. It used the moment to write a *new* one, a labor code that satisfied the formal demand ("unions and bargaining must be legal again") while deliberately engineering the result it wanted ("...and organised labor must never again be what it was in 1973"). The boycott forced *a* labor law into existence; the dictatorship decided *which* labor law.

One more piece of context you need before Section 3, because it is part of the honest picture: **within the regime, the argument was not between the Plan Laboral and something more generous, it was between the Plan Laboral and nothing.** The junta contained hardliners who wanted no independent unions at all, indefinitely. Piñera's design, which legalised unions but atomised them, won that internal argument. Keep this in mind when you hear his defense steelmanned in Section 3: measured against 1973, the Plan was a cage; measured against 1976, it was a door, a door built by a regime that controlled exactly how far it would open.

:::reveal Why did the Pinochet dictatorship, six years after destroying the labor movement, suddenly write a labor code in 1979? ||| Because international union pressure, Chile's Grupo de los Diez plus the AFL-CIO and transport unions preparing a boycott of Chilean exports in foreign ports, made the legal vacuum untenable for an export economy. Pinochet appointed José Piñera (late 1978) to stop the boycott and build new institutions; the Plan Laboral restored legal unions and bargaining, the AFL-CIO suspended the boycott, and the regime used the moment to write the rules to its own design.

## Sources
- Álvarez, R. (2012). El Plan Laboral y la negociación colectiva: ¿origen de un nuevo sindicalismo en Chile? 1979–1985. *Boletín del Instituto de Historia Argentina y Americana "Dr. Emilio Ravignani"*, (35/36). https://www.scielo.org.ar/scielo.php?script=sci_arttext&pid=S0524-97672012000200004
- Piñera, J. (1990). *La revolución laboral en Chile*. Zig-Zag. https://www.economiaysociedad.cl/
- Memoria Chilena, Biblioteca Nacional de Chile. (n.d.). *Sindicalismo en Chile durante la dictadura militar*. https://www.memoriachilena.gob.cl/`,
      recallContent: [
        {
          prompt: "What was the Grupo de los Diez, and what international pressure did the labor vacuum provoke by 1978?",
          answer:
            "A group of surviving Chilean union leaders who kept pressing the regime and reached out abroad. By 1978 the AFL-CIO and international transport unions were preparing a commercial boycott of Chilean exports, longshoremen refusing Chilean cargo, demanding an end to labor-rights violations. For an export economy, that threat had teeth.",
        },
        {
          prompt: "State both halves of the boycott-to-Plan sequence that 'honest people emphasise differently.'",
          answer:
            "Half one: international solidarity worked, foreign union pressure forced a dictatorship to restore legal unions and bargaining within months. Half two: the regime turned compliance into architecture, it wrote a new code that met the formal demand while engineering organised labor's permanent weakness. The boycott forced A labor law; the dictatorship chose WHICH one.",
        },
      ],
    },
    {
      slug: "chile-quiz-2",
      title: "Section 2 quiz · The destruction, 1973-1979",
      section: "Section 2 · The destruction, 1973-1979",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What happened on 11 September 1973 in Chile?",
            options: [
              "The Plan Laboral was announced",
              "The armed forces overthrew the elected government; President Allende died in the bombed presidential palace; a junta under Pinochet took power",
              "The CUT was founded",
              "Chile joined the OECD",
            ],
            correctIndex: 1,
            explanation:
              "The coup of 11 September 1973 began a dictatorship that lasted sixteen and a half years, and destroying the labor movement was one of its objects, not a side effect.",
            sourceLessonSlug: "chile-coup-and-repression",
          },
          {
            prompt: "By what instrument was the CUT dissolved?",
            options: [
              "A plebiscite",
              "Decree Law No. 12 (September 1973), which cancelled its legal status, outlawed it, and seized its assets",
              "The Plan Laboral of 1979",
              "A ruling of the Supreme Court",
            ],
            correctIndex: 1,
            explanation:
              "The junta dissolved the national union center within about two weeks of the coup and took its property.",
            sourceLessonSlug: "chile-coup-and-repression",
          },
          {
            prompt: "What was the state of collective bargaining in Chile from 1973 to 1979?",
            options: [
              "It continued normally at the firm level",
              "It did not function at all, bargaining was suspended, union elections banned, and wages set by government decree",
              "It moved to the sectoral level",
              "It was administered by the ILO",
            ],
            correctIndex: 1,
            explanation:
              "Six years of legal vacuum: unions existed on paper but could not bargain, strike, or elect leaders.",
            sourceLessonSlug: "chile-coup-and-repression",
          },
          {
            prompt: "What did Chile's Rettig Commission and its successor document?",
            options: [
              "That no one was killed under the dictatorship",
              "More than 3,000 people killed or disappeared by agents of the dictatorship, findings of the Chilean state's own truth commissions",
              "Only economic statistics",
              "The results of the 1988 plebiscite",
            ],
            correctIndex: 1,
            explanation:
              "These are findings, not allegations, documented by commissions Chile's own democracy created, with union officers and labor activists heavily represented among the victims.",
            sourceLessonSlug: "chile-coup-and-repression",
          },
          {
            prompt: "Who was Tucapel Jiménez?",
            options: [
              "The author of the Plan Laboral",
              "The president of the public employees' association ANEF, murdered by state intelligence agents in 1982, a crime for which Chilean courts later convicted the perpetrators",
              "The general who led the 1973 coup",
              "Chile's first labor minister after 1990",
            ],
            correctIndex: 1,
            explanation:
              "Jiménez, an open critic of the regime's labor policy, is one of the named, court-adjudicated cases the course uses to stand for thousands.",
            sourceLessonSlug: "chile-coup-and-repression",
          },
          {
            prompt: "Why does the course warn 'do not let the numbers do the flattening'?",
            options: [
              "Because the numbers are invented",
              "Because repression fell on the whole society, and the labor movement was not merely a victim, copper miners called the first mass national protest against the regime in May 1983",
              "Because statistics are always misleading",
              "Because the union movement collaborated with the regime",
            ],
            correctIndex: 1,
            explanation:
              "Both halves are true: heavy victimisation, and early, brave resistance, the mid-1980s protest cycle began with a miners' call.",
            sourceLessonSlug: "chile-coup-and-repression",
          },
          {
            prompt: "What foreign pressure pushed the dictatorship toward writing a labor code in 1979?",
            options: [
              "A United Nations invasion",
              "A threatened commercial boycott of Chilean exports by the AFL-CIO and international transport unions, longshoremen refusing Chilean cargo",
              "An OECD membership requirement",
              "Pressure from the Soviet Union",
            ],
            correctIndex: 1,
            explanation:
              "For an export economy moving copper and fruit through foreign unionised ports, the boycott threat was material, not symbolic.",
            sourceLessonSlug: "chile-boycott-to-plan",
          },
          {
            prompt: "What was the Grupo de los Diez?",
            options: [
              "The military junta's economic team",
              "A group of surviving Chilean union leaders who kept pressing the regime on labor rights and connected with the international labor movement",
              "Ten companies exempted from the labor code",
              "The drafting committee of the 1980 Constitution",
            ],
            correctIndex: 1,
            explanation:
              "Internal persistence plus international solidarity produced the pressure that forced a labor code into existence.",
            sourceLessonSlug: "chile-boycott-to-plan",
          },
          {
            prompt: "What was José Piñera's mission when appointed Minister of Labor at the end of 1978?",
            options: [
              "To restore the 1973 labor system",
              "To stop the boycott and build new labor institutions, which became the 1979 Plan Laboral, after whose announcement the AFL-CIO suspended the boycott",
              "To negotiate Chile's entry into the ILO",
              "To dissolve the remaining unions permanently",
            ],
            correctIndex: 1,
            explanation:
              "The scholarship on the episode is direct: stop the boycott, build new institutions. The Plan restored legal unionism, on the regime's terms.",
            sourceLessonSlug: "chile-boycott-to-plan",
          },
          {
            prompt: "What is 'half one' of the boycott story, the part that is genuinely good news?",
            options: [
              "The boycott failed completely",
              "International labor solidarity worked: pressure from workers in other countries forced a dictatorship to restore legal unions and bargaining within months",
              "The regime voluntarily liberalised",
              "The ILO imposed sanctions",
            ],
            correctIndex: 1,
            explanation:
              "File it next to the USMCA mechanism (Mexico course) as the track's rare good news about cross-border leverage.",
            sourceLessonSlug: "chile-boycott-to-plan",
          },
          {
            prompt: "What is 'half two', the catch?",
            options: [
              "The boycott was never real",
              "The regime turned compliance into architecture: it wrote a NEW code that met the formal demand while deliberately engineering organised labor's weakness, the boycott forced A labor law; the dictatorship chose WHICH one",
              "The AFL-CIO wrote the Plan Laboral",
              "The old system was restored unchanged",
            ],
            correctIndex: 1,
            explanation:
              "Satisfying 'unions must be legal again' while designing 'labor must never be what it was in 1973' is the Plan Laboral in one sentence.",
            sourceLessonSlug: "chile-boycott-to-plan",
          },
          {
            prompt: "Within the regime, what was the actual alternative to the Plan Laboral?",
            options: [
              "A Nordic-style sectoral system",
              "Nothing, junta hardliners wanted no independent unions at all, indefinitely; Piñera's legalise-but-atomise design won that internal argument",
              "Restoring the CUT",
              "Joining a US-style NLRB system",
            ],
            correctIndex: 1,
            explanation:
              "Measured against 1973 the Plan was a cage; measured against 1976 it was a door the regime controlled. Both framings are needed to read the steelman honestly.",
            sourceLessonSlug: "chile-boycott-to-plan",
          },
          {
            prompt: "Who was Víctor Jara?",
            options: [
              "A junta economist",
              "The singer-songwriter of the labor and student movements, detained, tortured, and killed in the Estadio Chile days after the coup, with former officers convicted decades later",
              "The leader of the Grupo de los Diez",
              "The first president of the new CUT in 1988",
            ],
            correctIndex: 1,
            explanation:
              "A named, court-adjudicated case that stands for the first months of repression.",
            sourceLessonSlug: "chile-coup-and-repression",
          },
          {
            prompt: "Why could the dictatorship not simply keep the labor-law vacuum forever?",
            options: [
              "The 1980 Constitution forbade it",
              "It presented itself abroad as modernizing, ran an export economy exposed to foreign union action, and by 1978 faced a concrete boycott threat, a labor market with no labor law was untenable",
              "The junta lost a plebiscite on the question",
              "The ILO expelled Chile",
            ],
            correctIndex: 1,
            explanation:
              "Exposure, reputational and commercial, is what converted six years of nothing into the 1979 design.",
            sourceLessonSlug: "chile-boycott-to-plan",
          },
          {
            prompt: "When the copper miners' confederation called the first mass national protest against the regime, what year was it?",
            options: ["1974", "1983", "1990", "2006"],
            correctIndex: 1,
            explanation:
              "May 1983, the call that grew into the mid-1980s protest cycle, and proof the movement was an actor in the story, not only a victim.",
            sourceLessonSlug: "chile-coup-and-repression",
          },
        ],
      },
    },

    // ────────────── SECTION 3 · THE PLAN LABORAL, 1979 ──────────────
    {
      slug: "chile-plan-laboral-architecture",
      title: "5 · The architecture: DL 2756 and DL 2758",
      section: "Section 3 · The Plan Laboral, 1979",
      body: `Now read the blueprint. The **Plan Laboral** arrived as a package of **eight decree laws**, one in 1978 and seven in July 1979 (Álvarez, 2012). Two of them carry the architecture, and they are worth knowing by number, the way an American student knows "Wagner" and "Taft-Hartley":

- **Decree Law 2756 (1979)** — union organisations: who may form a union, of what kind, funded how.
- **Decree Law 2758 (1979)** — collective bargaining: who bargains with whom, over what, and what a strike is allowed to be.

(The 1978 piece, **Decree Law 2200**, had already rewritten *individual* employment law, contracts and dismissal, in the direction of flexibility. Keep your eye on the two 1979 laws; they are the collective architecture.)

**Design move 1: bargaining is locked to the single firm.** Under DL 2758, collective bargaining happens between **one employer** and a union **within that firm**. Industry-wide bargaining, copper as a sector, construction as a sector, the kind of bargaining that built the pre-1973 movement and that runs the Nordic model, was simply **not part of the legal machinery**: federations and confederations of unions were barred from bargaining on behalf of their members (Álvarez, 2012). Remember the anchor's Question 3, *who bargains with whom, at what level?* The Plan Laboral answers it with a wall: at the firm. Only at the firm.

**Design move 2: pluralism as fragmentation.** DL 2756 permitted, this will sound generous until you think about it, **multiple competing unions inside a single firm**, with voluntary membership and funding only from voluntary dues. The same firm could face several unions, each bargaining separately, potentially producing **as many negotiations as there were unions in one workplace** (Álvarez, 2012). Where the Wagner Act model channels workers into one exclusive bargaining agent, and the Nordic model concentrates them into strong sector federations, the Chilean design *multiplies* worker organisations while *dividing* what each can do. More unions, less union.

**Design move 3: the non-union competitor.** DL 2758 also allowed **"negotiating groups"** (*grupos negociadores*), ad hoc groups of workers, not unions at all, to bargain collectively with the employer. So even inside the firm, the union has a competitor the employer may prefer to deal with. Hold this one in your mind: it will still be alive in 2016, when a reform tries to kill it and Chile's Constitutional Court keeps it breathing (Section 4).

**Design move 4: desynchronisation.** Bargaining timing was staggered firm by firm, so that negotiations across an industry never came due together (Álvarez, 2012). No common expiry, no common fight, a design detail that quietly forecloses even *informal* sectoral coordination.

Step back and look at the whole. The scholarship summarises the Plan's declared pillars as: **bargaining at the firm level; strikes that do not paralyse; union "freedom" (pluralism); and union depoliticisation** (Álvarez, 2012). Every one of those pillars is the negation of a property the 1973 movement had. Centralised? Now atomised. Sectoral? Now firm-locked. Political? Now confined to "matters within the firm." That is what it means to say this system was *designed*: the correspondence is not a coincidence you infer, it is a specification you can read.

One fairness note before the strike lesson. **None of these moves reads as shocking to an American.** The United States also bargains firm by firm (mostly), also lacks sectoral bargaining, and also permits striker replacement (anchor course, PATCO lesson). Part of what the Plan Laboral did was import familiar decentralised, adversarial machinery. The difference, and Section 6 turns this into the course's final argument, is *provenance and purpose*: in Chile the machinery was chosen, all at once, by a dictatorship that had just physically destroyed the alternative, with the stated aim of preventing its return. Same furniture; very different architect.

:::reveal Name the four design moves of the Plan Laboral's collective architecture (DL 2756 / DL 2758). ||| (1) Bargaining locked to the single firm, federations and confederations barred from bargaining, no sectoral level; (2) pluralism as fragmentation, multiple competing unions allowed inside one firm, voluntary dues, many parallel negotiations; (3) the non-union competitor, ad hoc "negotiating groups" allowed to bargain instead of unions; (4) desynchronisation, staggered bargaining timing so an industry's negotiations never come due together.

## Sources
- Álvarez, R. (2012). El Plan Laboral y la negociación colectiva: ¿origen de un nuevo sindicalismo en Chile? 1979–1985. *Boletín del Instituto de Historia Argentina y Americana "Dr. Emilio Ravignani"*, (35/36). https://www.scielo.org.ar/scielo.php?script=sci_arttext&pid=S0524-97672012000200004
- Biblioteca del Congreso Nacional de Chile. (1979). *Decreto Ley 2758: Establece normas sobre negociación colectiva*. LeyChile. https://www.bcn.cl/leychile/navegar?idNorma=6993
- International Labour Organization. (n.d.). *Chile — Decreto-ley núm. 2758 por el que se establecen normas sobre negociación colectiva* (NATLEX). https://www.ilo.org/dyn/natlex/natlex4.detail?p_isn=12535`,
      recallContent: [
        {
          prompt: "Which two decree laws carry the Plan Laboral's collective architecture, and what does each govern?",
          answer:
            "DL 2756 (1979) governs union organisations, union types, voluntary membership, multiple unions per firm, voluntary dues. DL 2758 (1979) governs collective bargaining, firm-level only, federations barred from bargaining, negotiating groups permitted, and the strike rules. (DL 2200 of 1978 had already flexibilised individual contracts.)",
        },
        {
          prompt: "Why does the course call the Plan's union pluralism 'fragmentation' rather than freedom?",
          answer:
            "Because permitting multiple competing unions inside one firm, each bargaining separately, funded only by voluntary dues, with non-union negotiating groups as competitors, multiplies worker organisations while dividing their power: as many parallel negotiations as unions in a workplace. More unions, less union.",
        },
      ],
    },
    {
      slug: "chile-strike-that-cannot-win",
      title: "6 · The strike that must not paralyse",
      section: "Section 3 · The Plan Laboral, 1979",
      body: `The anchor's Question 4, *what happens to you if you try?*, gets the Plan Laboral's most explicit engineering. The designers said it themselves, as a pillar: strikes should be legal, and strikes should **not paralyse** (Álvarez, 2012). Here is how DL 2758 built a strike that cannot win.

**Move 1: the struck firm keeps running.** DL 2758 expressly allowed the employer to **hire replacement workers during a strike** (Álvarez, 2012). A strike whose work is being done by someone else is a demonstration, not a stoppage. The economic clock that a strike is supposed to start, every day costs the employer output, barely ticks.

**Move 2: the strikers' clock, by contrast, ticks loudly.** Strike days were unpaid (standard almost everywhere, but combined with replacement it becomes decisive), and the employer could respond with a **lockout**, a temporary closure turning the pressure back on the workforce (Álvarez, 2012).

**Move 3: the sixty-day trapdoor.** Under the original DL 2758, a strike had a legal time limit with a penalty attached that students usually refuse to believe until they see it sourced: **after 59 days on strike, a worker was deemed to have voluntarily resigned** (Álvarez, 2012). Read that again. Not "fired", *resigned*, as a matter of law, with everything that classification implies. A strike was a fuse that burned toward the strikers.

Put the three together and run the game out in your head. You strike; the firm hires replacements and production continues; you earn nothing; the firm may lock you out; and at day 59 the law converts your persistence into your resignation. **The rational move is almost never to strike, which was the design.** The strike is not banned (banning it was what the boycott was about); it is *permitted and defeated in advance*. This is a theme you have seen throughout the track: the sophisticated modern way to remove a right is not to prohibit it, but to keep it formally available while engineering its failure.

**Now the American mirror, because you should feel this one land close to home.** The anchor course taught you *NLRB v. Mackay Radio* (1938): permanently replacing economic strikers has been lawful in the United States for most of a century, and after PATCO (1981) employers actually used it. So striker replacement is not some exotic dictatorship invention, **the world's oldest continuous democracy runs a version of the same rule.** What Chile shows you is the same mechanism with its intent printed on the label. In the US, replacement law *accreted*, a Supreme Court aside, decades of dormancy, a norm shift. In Chile, replacement was *drawn*, one clause in a coherent design whose author stated the goal: strikes that do not paralyse. Mechanically similar; forensically, night and day. And that is precisely why this course keeps insisting on provenance: **when you find a rule like this in any country's law, including yours, the question is not just "what does it do?" but "who put it there, and what did they want?"**

*(Where did the rules go from here? The 59-day trapdoor did not survive democracy, and striker replacement itself was finally banned by Ley 20.940, in force April 2017, nearly forty years after it was drawn. Section 4 tells that story, including how much of the surrounding architecture the ban left standing.)*

:::reveal How did DL 2758 engineer 'a strike that does not paralyse', three moves? ||| (1) Employers could hire replacement workers during the strike, so production continued; (2) strike days were unpaid and the employer could answer with a lockout, so the cost fell on the strikers; (3) after 59 days on strike a worker was deemed by law to have voluntarily resigned. The strike stayed legal, and was defeated in advance by design.

## Sources
- Álvarez, R. (2012). El Plan Laboral y la negociación colectiva: ¿origen de un nuevo sindicalismo en Chile? 1979–1985. *Boletín del Instituto de Historia Argentina y Americana "Dr. Emilio Ravignani"*, (35/36). https://www.scielo.org.ar/scielo.php?script=sci_arttext&pid=S0524-97672012000200004
- Biblioteca del Congreso Nacional de Chile. (1979). *Decreto Ley 2758: Establece normas sobre negociación colectiva*. LeyChile. https://www.bcn.cl/leychile/navegar?idNorma=6993
- NLRB v. Mackay Radio & Telegraph Co., 304 U.S. 333 (1938). Library of Congress. https://www.loc.gov/item/usrep304333/`,
      recallContent: [
        {
          prompt: "What was the '59-day trapdoor' in the original DL 2758?",
          answer:
            "A strike's legal time limit with a penalty: after 59 days on strike, a worker was deemed by law to have VOLUNTARILY RESIGNED, not fired, resigned. Combined with legal replacement and possible lockout, the fuse burned toward the strikers.",
        },
        {
          prompt: "How does Chile's 1979 replacement rule compare with US law, and why does the course say the difference is 'provenance'?",
          answer:
            "Mechanically they rhyme: NLRB v. Mackay Radio (1938) made permanent replacement of economic strikers lawful in the US, and post-PATCO employers used it. But the US rule accreted through doctrine and norm shifts; Chile's was drawn deliberately, one clause in a coherent design whose author stated the goal, strikes that do not paralyse. Same furniture, different architect, so always ask who put the rule there and why.",
        },
      ],
    },
    {
      slug: "chile-steelman",
      title: "7 · The designers' case, steelmanned, then measured",
      section: "Section 3 · The Plan Laboral, 1979",
      body: `This course promised you the defense before the verdict. Here it is, in its strongest honest form, most of it in the designer's own words, all of it in his own published terms.

**José Piñera's own summary** of what the Plan Laboral achieved, from his own writing (translated from his site and his 1990 book *La revolución laboral en Chile*): it *"restored union freedom and democracy in Chile, introduced firm-level collective bargaining, depoliticised the union world, achieved social peace in the private sector, and established the conditions for reaching full employment."* Unpack that into the four claims a fair opponent must actually answer:

1. **"It legalised, when the alternative was nothing."** Recall Section 2: inside the junta, the live alternative to the Plan was indefinite prohibition. Piñera's design restored legal unions, legal bargaining, and even a legal (if hobbled) strike, over hardliner objection, in a dictatorship. Judged against 1976 rather than 1973, every one of those was a real, non-trivial restoration.
2. **"Firm-level bargaining is economics, not oppression."** The serious version of this argument: wages negotiated at the firm track what *that firm* can actually pay. Sectoral deals, defenders argue, impose the strongest firms' wages on the weakest, pricing marginal firms, and their workers, out of existence; firm-level deals let a struggling firm and its workers make their own bargain. (You have met the respectable cousin of this argument: it is why even the Nordic model lets exporters set the wage norm first.) On this view, decentralised bargaining is not anti-worker, it is anti-unemployment.
3. **"Depoliticisation protects workers too."** Pre-1973 Chilean unionism was profoundly entangled with political parties, up to and including a national crisis that ended in catastrophe for everyone, most of all for workers. A union confined to workplace economics, the argument runs, cannot be weaponised by any party, and its members cannot be purged when the political wind reverses.
4. **"It worked, look at the economy."** Defenders point at the arc after the mid-1980s: strong growth, falling unemployment, and one of Latin America's great poverty declines, and argue a flexible labor market was part of the machine that produced it.

That is a real case. It is made by serious people, it contains true statements, and you should be able to repeat it fairly before you answer it. Now measure it.

**Against claim 1:** true as far as it goes, and it goes exactly as far as the regime wanted. "Better than nothing" is a fact about the *junta's menu*, not about the design's fairness. The workers whose system this became never voted on it; no Chilean did, until the dictatorship ended.

**Against claim 2:** firm-level bargaining *as a choice available to workers* is one thing, as a **legal ceiling workers may not bargain past**, it is another. The Nordic exporters set the norm first because their unions *chose* that discipline and can revisit it; Chilean workers were *forbidden* the sectoral level outright. And the promised firm-level vitality did not arrive: the OECD's 2025 review describes Chilean bargaining as **atomised, fragmented, and uncoordinated**, with **coverage of 19.3% (2023)**, among the lowest in the OECD (average ~33.5%, 2023/24). Four and a half decades is a long time to wait for a design to start delivering its advertised benefits to the people it governs.

**Against claim 3:** the depoliticisation was **asymmetric**. Unions were confined to the firm; employers and their associations remained free to organise nationally, fund politics, and shape legislation, and did. A rule that depoliticises one side of a power relationship does not produce apolitical outcomes; it produces the other side's politics.

**Against claim 4:** "social peace in the private sector," achieved 1979-1990, was peace under a dictatorship that had recently killed union leaders, suppression reads as peace in any ledger. And the growth argument faces an attribution problem its defenders rarely engage: Chile's post-1985 boom followed massive reforms across the whole economy plus a copper cycle; isolating the labor code's contribution is somewhere between hard and impossible, and the code's *measurable* legacy, density 16%, coverage 19.3% (2023, OECD/AIAS), is not a labor market working well for labor.

**The honest bottom line**, and notice it is not a symmetric shrug: the Plan Laboral was a genuine legalisation, built with genuine economic reasoning, *and* it did exactly what its structure was shaped to do, atomise worker power, because that is what its author, in a position to specify outcomes, specified. The defense explains why the design was arguable. The record shows what it produced. You are allowed to hold both.

:::reveal State the strongest version of the Plan Laboral's defense in one breath, and the single strongest reply. ||| Defense: it legalised unions when the junta's alternative was nothing; firm-level bargaining ties wages to what each firm can pay (protecting employment); depoliticised unions can't be weaponised or purged; and Chile's later growth vindicates flexibility. Reply: every plank describes a CHOICE imposed by a dictatorship as if workers had made it, firm-level as a forbidden ceiling rather than an option, asymmetric depoliticisation, peace that was suppression, and the measurable outcome (16% density, 19.3% coverage, 2023 OECD/AIAS; bargaining the OECD calls atomised) is precisely the weakness the structure was shaped to produce.

## Sources
- Piñera, J. (1990). *La revolución laboral en Chile*. Zig-Zag. https://www.economiaysociedad.cl/
- OECD. (2025). *Enhancing sectoral collective bargaining in Chile* (OECD Reviews of Labour Market and Social Policies). OECD Publishing. https://www.oecd.org/en/publications/enhancing-sectoral-collective-bargaining-in-chile_454f4167-en/
- Álvarez, R. (2012). El Plan Laboral y la negociación colectiva: ¿origen de un nuevo sindicalismo en Chile? 1979–1985. *Boletín del Instituto de Historia Argentina y Americana "Dr. Emilio Ravignani"*, (35/36). https://www.scielo.org.ar/scielo.php?script=sci_arttext&pid=S0524-97672012000200004`,
      recallContent: [
        {
          prompt: "List the four claims of the steelmanned defense of the Plan Laboral.",
          answer:
            "(1) It legalised unions when the junta's real alternative was nothing; (2) firm-level bargaining ties wages to firm productivity and protects employment at marginal firms; (3) depoliticised unions protect workers from being weaponised or purged by parties; (4) Chile's post-1985 growth and poverty decline vindicate labor flexibility.",
        },
        {
          prompt: "What is the asymmetry problem with the 'depoliticisation' claim?",
          answer:
            "Only one side was depoliticised: unions were confined to firm-level economics while employers and their associations remained free to organise nationally, fund politics, and shape legislation. Depoliticising one side of a power relationship doesn't remove politics, it hands the politics to the other side.",
        },
      ],
    },
    {
      slug: "chile-quiz-3",
      title: "Section 3 quiz · The Plan Laboral, 1979",
      section: "Section 3 · The Plan Laboral, 1979",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Which two 1979 decree laws carry the Plan Laboral's collective architecture?",
            options: [
              "DL 2756 (union organisations) and DL 2758 (collective bargaining)",
              "DL 12 and DL 2200",
              "Ley 20.940 and Ley 20.123",
              "The Wagner Act and Taft-Hartley",
            ],
            correctIndex: 0,
            explanation:
              "DL 2756 governs unions; DL 2758 governs bargaining and the strike. The package totalled eight decree laws, one in 1978 (DL 2200, individual contracts) and seven in July 1979.",
            sourceLessonSlug: "chile-plan-laboral-architecture",
          },
          {
            prompt: "At what level did DL 2758 lock collective bargaining?",
            options: [
              "The national level",
              "The single firm, with federations and confederations barred from bargaining for their members",
              "The industry level",
              "The regional level",
            ],
            correctIndex: 1,
            explanation:
              "Firm-level only. Sectoral bargaining, the form that built the pre-1973 movement, was excluded from the legal machinery entirely.",
            sourceLessonSlug: "chile-plan-laboral-architecture",
          },
          {
            prompt: "How did the Plan Laboral use union PLURALISM?",
            options: [
              "It banned having more than one union per firm",
              "It allowed multiple competing unions inside one firm, with voluntary dues, multiplying organisations while dividing their power",
              "It required all unions to join one confederation",
              "It made union membership mandatory",
            ],
            correctIndex: 1,
            explanation:
              "'Freedom' as fragmentation: one workplace could hold as many separate negotiations as it had unions. More unions, less union.",
            sourceLessonSlug: "chile-plan-laboral-architecture",
          },
          {
            prompt: "What are 'grupos negociadores'?",
            options: [
              "Government mediators",
              "Ad hoc groups of workers, not unions, allowed by DL 2758 to bargain collectively, giving the union a non-union competitor inside the firm",
              "Employer associations",
              "The junta's economic advisors",
            ],
            correctIndex: 1,
            explanation:
              "The non-union competitor is a 1979 design move that survived even the 2016 reform, thanks to a Constitutional Court ruling (Section 4).",
            sourceLessonSlug: "chile-plan-laboral-architecture",
          },
          {
            prompt: "Why was bargaining timing staggered firm by firm?",
            options: [
              "To reduce paperwork at the labor inspectorate",
              "So negotiations across an industry never came due together, foreclosing even informal sectoral coordination",
              "To align all contracts with the fiscal year",
              "It was an accident of drafting",
            ],
            correctIndex: 1,
            explanation:
              "Desynchronisation: no common expiry, no common fight. A quiet design detail with loud consequences.",
            sourceLessonSlug: "chile-plan-laboral-architecture",
          },
          {
            prompt: "What were the Plan Laboral's declared pillars, per the scholarship?",
            options: [
              "Sectoral bargaining, strike pay, union monopoly, political unions",
              "Firm-level bargaining; strikes that do not paralyse; union pluralism ('freedom'); union depoliticisation",
              "Nationalisation, indexation, central planning, full employment",
              "Co-determination, works councils, Ghent funds, flexicurity",
            ],
            correctIndex: 1,
            explanation:
              "Each pillar negates a property the 1973 movement had: centralised → atomised, sectoral → firm-locked, political → confined to the firm.",
            sourceLessonSlug: "chile-plan-laboral-architecture",
          },
          {
            prompt: "Under the original DL 2758, what could the employer do during a legal strike?",
            options: [
              "Nothing, operations had to stop",
              "Hire replacement workers so production continued, and answer with a lockout",
              "Only negotiate through the Labor Ministry",
              "Pay double wages to strikers",
            ],
            correctIndex: 1,
            explanation:
              "Replacement plus lockout meant the struck firm kept running while the strikers' costs mounted, a strike engineered not to paralyse.",
            sourceLessonSlug: "chile-strike-that-cannot-win",
          },
          {
            prompt: "What was the '59-day rule' in the original DL 2758?",
            options: [
              "Strikes had to be announced 59 days in advance",
              "After 59 days on strike, a worker was deemed by law to have voluntarily resigned",
              "Employers had 59 days to respond to demands",
              "Contracts lasted 59 months",
            ],
            correctIndex: 1,
            explanation:
              "The trapdoor: the law converted persistence into resignation. The strike stayed formally legal, and was defeated in advance.",
            sourceLessonSlug: "chile-strike-that-cannot-win",
          },
          {
            prompt: "What is the American mirror of Chile's striker-replacement rule?",
            options: [
              "There is none, replacement is unlawful in the US",
              "NLRB v. Mackay Radio (1938): permanent replacement of economic strikers has been lawful in the US for most of a century, used in earnest after PATCO (1981)",
              "The Wagner Act banned strikes entirely",
              "The US requires strikes to end after 59 days",
            ],
            correctIndex: 1,
            explanation:
              "Same mechanism, but in the US it accreted via doctrine and norm shift, while in Chile it was drawn deliberately with the goal stated. Provenance is the lesson.",
            sourceLessonSlug: "chile-strike-that-cannot-win",
          },
          {
            prompt: "What is 'the sophisticated modern way to remove a right,' per this section?",
            options: [
              "Prohibit it in the constitution",
              "Keep it formally available while engineering its failure, the strike stays legal and cannot win",
              "Delegate it to the courts",
              "Put it to a referendum",
            ],
            correctIndex: 1,
            explanation:
              "The Plan did not ban the strike (the boycott was about legality); it permitted a strike designed to lose.",
            sourceLessonSlug: "chile-strike-that-cannot-win",
          },
          {
            prompt: "Which of these is Piñera's OWN summary of the Plan Laboral's achievements?",
            options: [
              "It restored union freedom and democracy, introduced firm-level bargaining, depoliticised the union world, achieved social peace, and set conditions for full employment",
              "It abolished unions permanently",
              "It created Nordic-style sectoral bargaining",
              "It was written by the AFL-CIO",
            ],
            correctIndex: 0,
            explanation:
              "The course quotes the designer's own published claims (Piñera, 1990; economiaysociedad.cl), the steelman starts from his terms.",
            sourceLessonSlug: "chile-steelman",
          },
          {
            prompt: "What is the serious economic argument FOR firm-level bargaining?",
            options: [
              "It maximises strike frequency",
              "Wages negotiated at the firm track what that firm can pay, so marginal firms and their workers aren't priced out by sector-wide deals struck by the strongest firms",
              "It guarantees equal pay across an industry",
              "It requires no unions at all",
            ],
            correctIndex: 1,
            explanation:
              "The anti-unemployment case for decentralisation, whose respectable cousin appears even in the Nordic model, where exporters set the norm first.",
            sourceLessonSlug: "chile-steelman",
          },
          {
            prompt: "What is the course's key reply to that economic argument, as applied to Chile?",
            options: [
              "Firm-level bargaining is always wrong",
              "Firm-level as an option workers choose is one thing; as a legal ceiling workers were FORBIDDEN to bargain past, imposed by a dictatorship, never voted on, it is another. And the OECD (2025) finds the result atomised, with coverage ~19.3% (2023)",
              "Sectoral bargaining has no downsides anywhere",
              "The Nordic model also forbids sectoral bargaining",
            ],
            correctIndex: 1,
            explanation:
              "The difference between a discipline unions chose (Nordic exporters' norm) and a level workers are legally barred from reaching is the whole point.",
            sourceLessonSlug: "chile-steelman",
          },
          {
            prompt: "Why does the course reject 'social peace in the private sector, 1979-1990' as vindication?",
            options: [
              "Because there were constant strikes in the 1980s",
              "Because peace under a dictatorship that had recently killed union leaders is suppression, which reads as peace in any ledger",
              "Because social peace is undesirable",
              "Because the claim is about the public sector",
            ],
            correctIndex: 1,
            explanation:
              "An outcome achieved while the other side is repressed cannot be scored as consent.",
            sourceLessonSlug: "chile-steelman",
          },
          {
            prompt: "What is the 'attribution problem' with crediting the labor code for Chile's post-1985 boom?",
            options: [
              "Chile had no growth after 1985",
              "The boom followed sweeping reforms across the whole economy plus a copper cycle, so isolating the labor code's contribution is somewhere between hard and impossible",
              "The OECD refuses to publish Chilean GDP",
              "Growth statistics are secret",
            ],
            correctIndex: 1,
            explanation:
              "Defenders' claim 4 rests on an inference the evidence can't isolate, while the code's measurable legacy (16% density, 19.3% coverage, 2023) is directly observable.",
            sourceLessonSlug: "chile-steelman",
          },
        ],
      },
    },

    // ────────────── SECTION 4 · DEMOCRACY KEEPS THE DESIGN, 1990–2017 ──────────────
    {
      slug: "chile-transition-margins",
      title: "8 · 1990: democracy returns; the design stays",
      section: "Section 4 · Democracy keeps the design, 1990-2017",
      body: `In October 1988, Chileans voted **No** in the plebiscite the regime's own constitution had scheduled, and the dictatorship's end date was set. Labor was in that fight from the start, a new national center, today's **CUT** (*Central Unitaria de Trabajadores*), had been founded in **1988**, reclaiming the dissolved confederation's initials. In March **1990**, the elected government of Patricio Aylwin took office.

So here is the question this section exists to answer, and it is the more interesting half of the whole Chilean story: **why didn't democracy repeal the dictatorship's labor code?**

Because, this is the uncomfortable, load-bearing fact, **it largely couldn't, and then it largely didn't.** The Plan Laboral's architecture, folded into the Código del Trabajo, is *still* the skeleton of Chilean labor law today. Four reasons, in roughly the order they operated:

**1. The outgoing regime locked the doors on its way out.** The dictatorship's **1980 Constitution**, which democratic Chile inherited whole, came with institutional safety bolts: **designated (non-elected) senators**, an electoral system engineered so the right could hold a blocking position in the Senate with a minority of votes, and a Constitutional Tribunal to police the boundaries. For the transition's first decade and a half, a government that wanted to restructure the labor code could pass bills in the lower house and watch them die or shrink in the Senate. This was not bad luck. It was the same designer's hand: the labor system and the political system that protected it were parts of one project.

**2. The first reforms were real, and marginal by design.** The Aylwin government did what it could get through. The **1991 reform (Ley 19.069)** rewrote the rules on unions and bargaining: the strike's fixed time limit, the 59-day trapdoor you met in Section 3, was gone, and strikes became **indefinite**. Dismissal protections were strengthened in a parallel 1990 law. These mattered. But look at what survived: **striker replacement remained lawful** (the 1991 law itself regulated the conditions under which employers could hire replacements from day one), bargaining stayed **locked to the single firm**, and the negotiating-group competitor stayed in place. A further round in **2001** tightened some screws and loosened others. The cage got more humane. It stayed a cage.

**3. The governing coalition chose caution.** The center-left *Concertación* governed for twenty straight years (1990-2010), and its economic teams, governing in the shadow of both the dictatorship and hyperinflationary neighbors, prized stability, investment, and growth, and treated the flexible labor market as part of that machine. The Chile that entered the OECD in 2010 did so with the Plan Laboral's skeleton intact not only because the right defended it, but because much of the center had made its peace with it.

**4. And the movement that might have forced the issue had been remade small.** This is the design closing its own loop. The labor movement that could have mobilised to demand structural reform was, by 1990, a movement organised in firm-sized fragments under exactly the rules that make mass sectoral mobilisation hardest. A system designed to atomise had, among its products, the weakness of the constituency for un-designing it. The CUT never regained anything near its pre-1973 weight (the numbers are in Section 5).

**The habit to take from this lesson:** when you see an institution outlive the regime that created it, don't reach first for "consensus" or "inertia" as explanations. Ask **what was constitutionally locked, who benefited from the lock, and whether the people harmed by it retained the organised power to force it open.** In Chile, the answers were: a great deal; a coherent coalition; and (by design) no.

:::reveal Give the four reasons the Plan Laboral's architecture survived the return to democracy in 1990. ||| (1) The 1980 Constitution locked the doors, designated senators and an engineered electoral system gave the right a Senate veto for the transition's first 15+ years; (2) the reforms that could pass (1990-91's Ley 19.069, then 2001) were real but marginal, the 59-day trapdoor died and strikes became indefinite, but replacement stayed lawful and bargaining stayed firm-locked; (3) the governing Concertación itself chose caution, treating the flexible labor market as part of the growth machine; (4) the movement that might have forced structural change had been remade small by the very rules it needed to change, the design closed its own loop.

## Sources
- Fundación Patricio Aylwin. (2021). *Un día como hoy hace 30 años: La reforma laboral*. http://fundacionaylwin.cl/un-dia-como-hoy-hace-30-anos-la-reforma-laboral/
- Biblioteca del Congreso Nacional de Chile. (1991). *Ley 19.069: Establece normas sobre organizaciones sindicales y negociación colectiva*. LeyChile. https://www.bcn.cl/leychile/navegar?idNorma=30436
- Central Unitaria de Trabajadores de Chile. (n.d.). *La historia de la CUT*. https://cut.cl/web/la-historia-de-la-cut/
- OECD. (2025). *Enhancing sectoral collective bargaining in Chile* (OECD Reviews of Labour Market and Social Policies). OECD Publishing. https://www.oecd.org/en/publications/enhancing-sectoral-collective-bargaining-in-chile_454f4167-en/`,
      recallContent: [
        {
          prompt: "What did the 1991 reform (Ley 19.069) change about the strike, and what did it preserve?",
          answer:
            "It removed the fixed strike time limit (the 59-day deemed-resignation trapdoor), making strikes indefinite, and came alongside strengthened dismissal protections. It preserved striker replacement, itself regulating the conditions for hiring replacements from day one, the firm-level lock, and the negotiating-group competitor.",
        },
        {
          prompt: "How did the 1980 Constitution protect the Plan Laboral after 1990?",
          answer:
            "Designated (non-elected) senators and an engineered electoral system let the right hold a Senate blocking position with minority support, so structural labor reforms died or shrank there for the transition's first fifteen-plus years. The labor code and the political system shielding it were parts of one project, by the same designer's hand.",
        },
      ],
    },
    {
      slug: "chile-ley-20940",
      title: "9 · Ley 20.940 (2016): what finally changed, and what didn't",
      section: "Section 4 · Democracy keeps the design, 1990-2017",
      body: `Thirty-seven years after the Plan Laboral, Chile passed the biggest labor reform of its democratic era: **Ley 20.940**, "modernising the system of labor relations", published **8 September 2016**, in force **1 April 2017** (Dirección del Trabajo, n.d.). It is the right place to end this section, because it shows with unusual clarity both what democratic reform *can* reach and what, in Chile, it so far *has not*.

**What changed, and one change is genuinely big.**

- **Striker replacement was banned.** The rule you have tracked since 1979 — the employer keeps producing while you strike — was finally reversed: Ley 20.940 **prohibits replacing striking workers**, whether with external hires or by shuffling internal personnel, recognising what Chilean lawyers call the **"huelga efectiva"** — the effective strike (Dirección del Trabajo, n.d.). Thirty-eight years after DL 2758 drew the replacement clause, and 79 years after *Mackay Radio* blessed the American version, Chile deleted its copy. On the anchor's Question 4, this is the largest single improvement in the course.
- **Bargaining rights were extended and proceduralised** — expanded rights to information from the employer, a floor for negotiations (the expiring agreement as the baseline for a new one, in defined circumstances), mandatory mediation options, and rules requiring **union agreement before union-won benefits are extended to non-members** — ending the old practice of employers unilaterally handing the union's wins to everyone, which had made membership look pointless.

**What didn't change, the architecture.**

- **Bargaining stayed at the firm.** Ley 20.940 did **not** establish sectoral bargaining. The level question — the design's heart since 1979 — was left where José Piñera put it. The OECD's 2025 review, written nearly a decade after the reform, still describes Chilean bargaining as **firm-level, fragmented, and uncoordinated**, with no mechanisms binding negotiations together (OECD, 2025).
- **The non-union competitor survived — by court ruling.** The reform as passed tried to establish **union titularity** (*titularidad sindical*): where a union exists, *it* is the bargaining agent — closing the 1979 loophole of ad hoc negotiating groups. Chile's **Constitutional Tribunal**, in its judgment of **9 May 2016** (Rol 3016-16), struck that chapter down before the law even took effect, on freedom-of-association grounds (the freedom *not* to be represented by the union). The grupos negociadores — design move 3 from Section 3 — breathe on.

Read the 2016 story at the altitude this course has been teaching. A center-left government with, at last, majorities, spent enormous political capital on labor reform, and secured a real, historic win on the *strike* while leaving the *level* untouched and losing *titularity* to a constitutional body. The pattern is the same one you saw in 1991 and 2001, now at higher resolution: **democratic Chile has repeatedly been able to soften the Plan Laboral's penalties, and so far unable to touch its architecture.** The walls of the firm-level cage have proven harder than any single rule inside it.

*(Since then, dated for the record: a 2023 law, Ley 21.561, published 26 April 2023, is phasing the standard workweek down from 45 to 40 hours by 2028. Real, and again: hours, not architecture.)*

:::reveal What did Ley 20.940 (in force 1 April 2017) change, and in what two ways did the 1979 architecture survive it? ||| It banned striker replacement, external or internal, recognising the "effective strike," extended information/procedural rights, and required union agreement before union-won benefits go to non-members. But (1) bargaining stayed locked at the firm level, no sectoral bargaining was established, and the OECD in 2025 still calls the system fragmented and uncoordinated; and (2) the Constitutional Tribunal (9 May 2016, Rol 3016-16) struck down union titularity before the law took effect, keeping the 1979 non-union "negotiating groups" alive.

## Sources
- Dirección del Trabajo (Chile). (n.d.). *Reforma al sistema de relaciones laborales: Ley 20.940*. https://www.dt.gob.cl/legislacion/1624/w3-propertyvalue-160691.html
- Biblioteca del Congreso Nacional de Chile. (2016). *Ley 20.940: Moderniza el sistema de relaciones laborales*. LeyChile. https://www.bcn.cl/leychile/
- OECD. (2025). *Enhancing sectoral collective bargaining in Chile* (OECD Reviews of Labour Market and Social Policies). OECD Publishing. https://www.oecd.org/en/publications/enhancing-sectoral-collective-bargaining-in-chile_454f4167-en/
- Ministerio del Trabajo y Previsión Social (Chile). (2023). *Ley que reduce la jornada laboral a 40 horas semanales es publicada en el Diario Oficial*. https://www.mintrab.gob.cl/ley-que-reduce-la-jornada-laboral-a-40-horas-semanales-es-publicada-en-el-diario-oficial/`,
      recallContent: [
        {
          prompt: "What is the 'huelga efectiva,' and when did Chile get it?",
          answer:
            "The effective strike: Ley 20.940 (published 8 September 2016, in force 1 April 2017) prohibited replacing striking workers with external hires or internal reshuffling, reversing the 1979 replacement rule after 38 years. The struck firm now actually stops.",
        },
        {
          prompt: "What happened to 'titularidad sindical,' and why does it matter?",
          answer:
            "The reform tried to make the union the sole bargaining agent where one exists, closing the 1979 negotiating-groups loophole, but Chile's Constitutional Tribunal struck that chapter down on 9 May 2016 (Rol 3016-16), on freedom-of-association grounds, before the law took effect. The non-union competitor from the original design survives.",
        },
      ],
    },
    {
      slug: "chile-quiz-4",
      title: "Section 4 quiz · Democracy keeps the design",
      section: "Section 4 · Democracy keeps the design, 1990-2017",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What happened in Chile's October 1988 plebiscite?",
            options: [
              "The Plan Laboral was approved by voters",
              "Chileans voted No, setting the dictatorship's end date, with the new CUT (founded 1988) part of the campaign",
              "A new constitution was adopted",
              "Pinochet was re-elected for life",
            ],
            correctIndex: 1,
            explanation:
              "The regime's own constitutional calendar produced the plebiscite; the No victory led to elections and the March 1990 transition.",
            sourceLessonSlug: "chile-transition-margins",
          },
          {
            prompt: "What is 'the more interesting half of the Chilean story,' per this course?",
            options: [
              "That the dictatorship wrote a labor code at all",
              "That the Plan Laboral's architecture SURVIVED the return to democracy, largely intact to this day",
              "That Chile joined the OECD",
              "That copper prices rose",
            ],
            correctIndex: 1,
            explanation:
              "A designed system outliving its designer's regime by three-plus decades is the phenomenon the whole second half of the course explains.",
            sourceLessonSlug: "chile-transition-margins",
          },
          {
            prompt: "How did the 1980 Constitution protect the labor code after 1990?",
            options: [
              "It explicitly forbade any labor legislation",
              "Designated senators and an engineered electoral system gave the right a Senate blocking position, where structural labor reforms died or shrank for 15+ years",
              "It required ILO approval for reforms",
              "It did not, the code was unprotected",
            ],
            correctIndex: 1,
            explanation:
              "The labor system and the political system shielding it were one project: the same designer's hand locked the doors on the way out.",
            sourceLessonSlug: "chile-transition-margins",
          },
          {
            prompt: "What did the 1991 reform (Ley 19.069) do to the 59-day trapdoor?",
            options: [
              "Extended it to 90 days",
              "Removed it, strikes became indefinite, while striker replacement remained lawful under regulated conditions",
              "Nothing changed until 2016",
              "It abolished strikes entirely",
            ],
            correctIndex: 1,
            explanation:
              "The first democratic round removed the deemed-resignation rule but preserved replacement and the firm-level lock: a more humane cage, still a cage.",
            sourceLessonSlug: "chile-transition-margins",
          },
          {
            prompt: "Why does the course say the design 'closed its own loop' after 1990?",
            options: [
              "Because the junta remained in power secretly",
              "Because the movement that might have forced structural reform had been remade small by the very rules it needed to change, atomised unions couldn't mass-mobilise for de-atomisation",
              "Because workers preferred the Plan Laboral",
              "Because the ILO endorsed the design",
            ],
            correctIndex: 1,
            explanation:
              "A system designed to atomise produces, among its outputs, a weakened constituency for un-designing it.",
            sourceLessonSlug: "chile-transition-margins",
          },
          {
            prompt: "Which was a reason the Concertación governments (1990-2010) left the architecture largely alone?",
            options: [
              "They were banned from legislating on labor",
              "Their own economic teams prized stability and growth and treated the flexible labor market as part of that machine, the center had made its peace with it",
              "The CUT asked them not to reform",
              "The OECD forbade reform",
            ],
            correctIndex: 1,
            explanation:
              "Not only the right's veto: much of the governing center chose caution. Both facts are needed for the honest account.",
            sourceLessonSlug: "chile-transition-margins",
          },
          {
            prompt: "When was Ley 20.940 published, and when did it take effect?",
            options: [
              "Published 8 September 2016; in force 1 April 2017",
              "Published in 1991; in force 1992",
              "Published 11 September 1973; in force immediately",
              "Published 2023; in force 2028",
            ],
            correctIndex: 0,
            explanation:
              "The biggest labor reform of Chile's democratic era, 37 years after the Plan Laboral.",
            sourceLessonSlug: "chile-ley-20940",
          },
          {
            prompt: "What is the 'huelga efectiva' that Ley 20.940 recognised?",
            options: [
              "A strike limited to 59 days",
              "The effective strike: replacing strikers is prohibited, externally or by internal reshuffling, so the struck firm actually stops",
              "A strike that requires government permission",
              "A symbolic one-hour strike",
            ],
            correctIndex: 1,
            explanation:
              "The largest single Question-4 improvement in the course: the 1979 replacement clause was deleted after 38 years.",
            sourceLessonSlug: "chile-ley-20940",
          },
          {
            prompt: "What did Ley 20.940 change about extending union-won benefits to non-members?",
            options: [
              "Nothing",
              "Extension now requires the union's agreement, ending employers' unilateral practice of handing the union's wins to everyone, which had made membership look pointless",
              "Extension became automatic and mandatory",
              "Non-members were banned from receiving benefits forever",
            ],
            correctIndex: 1,
            explanation:
              "A free-rider fix: if the union's gains flow to non-members automatically, joining looks pointless, the reform gave the union a say.",
            sourceLessonSlug: "chile-ley-20940",
          },
          {
            prompt: "What happened to 'titularidad sindical' in 2016?",
            options: [
              "It became law and remains in force",
              "The Constitutional Tribunal (9 May 2016, Rol 3016-16) struck it down before the law took effect, so non-union negotiating groups survive",
              "The unions rejected it",
              "It was never proposed",
            ],
            correctIndex: 1,
            explanation:
              "The attempt to make the union the sole bargaining agent where one exists was voided on freedom-of-association grounds, design move 3 from 1979 breathes on.",
            sourceLessonSlug: "chile-ley-20940",
          },
          {
            prompt: "Did Ley 20.940 establish sectoral bargaining?",
            options: [
              "Yes, Chile now bargains by industry",
              "No, bargaining stayed at the firm level, and the OECD's 2025 review still describes the system as firm-level, fragmented, and uncoordinated",
              "Yes, but only for mining",
              "Sectoral bargaining was already legal since 1979",
            ],
            correctIndex: 1,
            explanation:
              "The level question, the design's heart, was left where Piñera put it in 1979.",
            sourceLessonSlug: "chile-ley-20940",
          },
          {
            prompt: "What is the repeating pattern across 1991, 2001, and 2016?",
            options: [
              "Each reform abolished and then restored the labor code",
              "Democratic Chile has repeatedly softened the Plan Laboral's PENALTIES while proving unable, so far, to touch its ARCHITECTURE, the firm-level cage outlasts every rule inside it",
              "Each reform strengthened the dictatorship's rules",
              "No reform ever passed",
            ],
            correctIndex: 1,
            explanation:
              "Trapdoor removed (1991), replacement banned (2017), and the level of bargaining unchanged since 1979.",
            sourceLessonSlug: "chile-ley-20940",
          },
          {
            prompt: "What does the 2023 workweek law (Ley 21.561) illustrate, in this course's framing?",
            options: [
              "That the architecture has finally changed",
              "That reform continues at the margins, hours phased from 45 to 40 by 2028, while the bargaining architecture remains untouched: hours, not architecture",
              "That Chile abolished the Código del Trabajo",
              "That strikes are banned again",
            ],
            correctIndex: 1,
            explanation:
              "Published 26 April 2023, phasing to 40 hours by 2028, real, dated, and another marginal (if welcome) change.",
            sourceLessonSlug: "chile-ley-20940",
          },
          {
            prompt: "On what grounds did the Constitutional Tribunal strike union titularity?",
            options: [
              "Fiscal cost",
              "Freedom of association, including the freedom NOT to be represented by the union",
              "Conflict with the ILO constitution",
              "A drafting typo",
            ],
            correctIndex: 1,
            explanation:
              "The same vocabulary of freedom that framed the 1979 pluralism rules resurfaced in 2016 to preserve the union's non-union competitor.",
            sourceLessonSlug: "chile-ley-20940",
          },
          {
            prompt: "What habit does Section 4 teach for reading institutions that outlive their creators?",
            options: [
              "Assume consensus explains survival",
              "Ask what was constitutionally locked, who benefited from the lock, and whether the people harmed retained the organised power to force it open",
              "Assume inertia explains everything",
              "Check only economic statistics",
            ],
            correctIndex: 1,
            explanation:
              "In Chile the answers were: a great deal; a coherent coalition; and (by design) no.",
            sourceLessonSlug: "chile-transition-margins",
          },
        ],
      },
    },

    // ────────────── SECTION 5 · THE NUMBERS, AND THE OUTSIDE MOVE ──────────────
    {
      slug: "chile-numbers",
      title: "10 · Reading the design in the numbers",
      section: "Section 5 · The numbers, and the outside move",
      body: `Time to read the instrument panel. Every figure below carries its year and source, and (as with every course in this track) treat the numbers as rounded and the definitions as load-bearing. (Chile's Dirección del Trabajo publishes its own union statistics, whose rates run somewhat differently because the denominator differs; for cross-country comparability this course uses the OECD/AIAS ICTWSS figures as reported in OECD, 2025.)

**Union density: about 16% of employees (2023).** Roughly one worker in six is a union member, against the historic peak of ~34% in 1973 (Fundación Sol, 2015), and far below Ghent-system Sweden (~65%) and Denmark (~67%) from the Nordics course. But here is the first surprise: 16% is actually *slightly above* the OECD average density of **15.1% (2023)** (OECD, 2025). If you stopped at density, Chile would look... ordinary. Don't stop at density.

**Bargaining coverage: about 19.3% of employees (2023), among the lowest in the OECD**, against an OECD average of **33.5% (2023/24)** (OECD, 2025). And now line the two numbers up, because their *relationship* is the course's whole argument turned into arithmetic:

| Country | Density | Coverage | Gap |
| --- | --- | --- | --- |
| **Sweden** | ~65% (early 2020s, OECD/AIAS) | ~88% (~2018-19, OECD/AIAS) | **+23** |
| **Germany** | 14.1% (2024) | ~49% (2024) | **+35** |
| **Chile** | ~16% (2023) | ~19.3% (2023) | **~+3** |
| **United States** | 10.0% (2025, BLS) | barely above density | **~+1-2** |

In most of the OECD, coverage towers over membership, because bargaining happens at the **sector** and agreements reach workers who never joined anything, that is the anchor's Question 3, and it is why Germany covers half its workforce with one-seventh of it unionised. **Chile's gap is barely three points.** In a firm-level-only system with no extension mechanism, an agreement covers (roughly) the workplaces that fought for it, and nobody else. *The coverage-density gap is the fingerprint of bargaining level*, and Chile's near-zero gap is the Plan Laboral's signature, still legible in 2023 data, forty-four years on. Notice which democracy Chile's line most resembles.

**Two honest complications, because a dashboard without caveats is a sales brochure:**

- **Chilean density has been rising.** The OECD notes that only **Iceland, Chile and Spain** have seen density *increase* since 1985 (OECD, 2025). Startling, until you notice the baseline: 1985 is mid-dictatorship, near the movement's repressed trough. Measured from its own 1973 peak, Chilean density is down by more than half; measured from its 1985 valley, it climbs. Both statements are true. Whoever picks the baseline picks the story, a trick you should now catch reflexively.
- **The aggregate hides an archipelago.** Membership concentrates in big firms and specific sectors — in **mining, 42% of employees were unionised (2023)** (OECD, 2025) — while the OECD documents *great fragmentation*: many, many small unions (the 1979 pluralism design at work), bargaining alone, uncoordinated, atomised. Chile does not so much have a labor movement as thousands of firm-sized labor movements.

Carry the fingerprint idea into the next lesson, because the design has one more trick: if bargaining power is locked inside the firm's walls, then the cheapest way to defeat it is not to fight the union inside, it is to move the workers *outside the walls*.

:::reveal Chile's union density (~16%, 2023) is close to the OECD average, so why is its bargaining coverage (~19.3%, 2023) among the OECD's lowest, and what does the tiny gap between the two numbers prove? ||| Because coverage exceeds density only where bargaining happens above the firm, sectoral agreements reach non-members, which is how Germany turns 14.1% density into ~49% coverage. Chile bargains at the firm only, with no extension mechanism, so agreements cover little more than the workplaces that fought for them: a ~3-point gap. The coverage-density gap is the fingerprint of bargaining level, and Chile's near-zero gap is the Plan Laboral's signature still legible in 2023 data.

## Sources
- OECD. (2025). *Enhancing sectoral collective bargaining in Chile* (OECD Reviews of Labour Market and Social Policies). OECD Publishing. https://www.oecd.org/en/publications/enhancing-sectoral-collective-bargaining-in-chile_454f4167-en/
- OECD/AIAS. (n.d.). *ICTWSS database — country note: Chile*. Organisation for Economic Co-operation and Development. https://www.oecd.org/en/data/datasets/oecd-aias-ictwss-database.html
- Bureau of Labor Statistics. (2026, February 18). *Union members — 2025* (USDL-26-0200). U.S. Department of Labor. https://www.bls.gov/news.release/pdf/union2.pdf
- Fundación Sol. (2015). *Sindicatos y negociación colectiva: Panorama estadístico nacional y evidencia comparada*. https://fundacionsol.cl/`,
      recallContent: [
        {
          prompt: "Give Chile's density and coverage (year + source), and the OECD averages they compare against.",
          answer:
            "Density ~16% (2023), slightly ABOVE the OECD average of 15.1% (2023); coverage ~19.3% (2023), among the OECD's lowest, against an average of 33.5% (2023/24). All OECD/AIAS ICTWSS figures via OECD (2025).",
        },
        {
          prompt: "Why is 'Chilean density has RISEN since 1985' true but misleading, and what habit does it teach?",
          answer:
            "Because 1985 is the mid-dictatorship trough: only Iceland, Chile and Spain show increases from that baseline (OECD, 2025), yet from the 1973 peak (~34%) density is down by more than half. Whoever picks the baseline picks the story, always ask what the starting point is doing.",
        },
      ],
    },
    {
      slug: "chile-subcontratacion",
      title: "11 · Subcontratación: the put-them-outside move",
      section: "Section 5 · The numbers, and the outside move",
      body: `Here is the design's second act. The Plan Laboral locked bargaining inside the walls of the firm. So Chilean employers discovered, as employers everywhere discover, that the cheapest countermove is to relocate the workers **outside the walls**: *subcontratación*.

**The mechanics.** A principal company (*empresa principal*), the mine, the supermarket chain, the forestry giant, contracts out chunks of its own operation to contractor firms. The workers dig the principal's copper, stock the principal's shelves, cut the principal's timber, but their **legal employer is the contractor**. Now run the Plan Laboral's rules over them. With whom may they bargain? *Their employer*, the contractor: a thin company that does not set the budget, does not own the mine, and can be swapped for another contractor at renewal time. The entity with the actual power over their conditions, the principal, is, legally, a stranger to them. **In a firm-level-only system, defining which firm employs you decides whether your bargaining rights mean anything.** Subcontracting turns Question 3 (*who bargains with whom?*) into a shell game.

You have seen this move before, in country after country, and now it has a family name. **The put-them-outside move:** when beating organised workers inside the system is expensive, redefine the workers so the system no longer applies. The anchor taught it as the NLRA's farm-and-domestic carve-out and modern **misclassification** ("you're not an employee, you're an independent contractor"). Mexico did it with **protection contracts** (the union exists, it just isn't yours). Poland does it with **junk contracts** (a civil-law contract instead of an employment one). Across the Global South it appears as **informality**, no employer of record at all. Chile's version is distinctive because it interlocks with the 1979 architecture: *the narrower the legal bargaining unit, the more you can achieve by nudging workers just past its edge.* A design that confines power to the firm makes "which firm?" the whole fight.

**Chile regulated it, after it had already reshaped the labor market.** **Ley 20.123** (published 14 October 2006, in force 14 January 2007) defined subcontracted work, regulated temporary-services firms, and made the principal company **jointly or subsidiarily liable** for contractors' labor and social-security obligations (Dirección del Trabajo, n.d.; BCN). Real protections, pay claims against a vanished contractor can now reach the principal. But note precisely what the law did *not* do: it did not give subcontracted workers bargaining rights **toward the principal**. The liability follows the money; the bargaining table does not.

**And then the excluded broke the script.** In **2007**, subcontracted workers across **Codelco**, the state copper giant, employing on the order of 30,000 workers through contractors, struck for **37 days** under the **Confederación de Trabajadores del Cobre (CTC)** and won a **framework agreement** (*Acuerdo Marco*) covering contractor workers across Codelco's divisions. The CTC itself describes it as the first sectoral-type bargaining experience in Chile since before the dictatorship (CTC, n.d.; Aravena, 2016). Sit with the irony, because it is the sharpest in the course: **Chile's first post-1979 approximation of sectoral bargaining was won by the workers the architecture most completely excluded, from outside the legal machinery entirely**, through a strike the Código del Trabajo did not contemplate, producing an agreement the Código does not name. The law channeled bargaining into the firm; the workers with no meaningful firm to bargain with went around the law and bargained with reality. Design constrains; it does not conclude.

:::reveal Why is subcontracting more devastating in Chile's system than in most, and what does Ley 20.123 (2007) fix and not fix? ||| Because bargaining is locked to the single firm, so making a thin contractor your legal employer strips your bargaining rights of their target, the principal that actually controls your conditions is legally a stranger. Ley 20.123 (in force 14 January 2007) made principals jointly/subsidiarily liable for contractors' labor and social-security obligations, the liability follows the money, but gave subcontracted workers no bargaining rights toward the principal: the table stays at the contractor.

## Sources
- Biblioteca del Congreso Nacional de Chile. (2006). *Ley 20.123: Regula trabajo en régimen de subcontratación, el funcionamiento de las empresas de servicios transitorios y el contrato de trabajo de servicios transitorios*. LeyChile. https://www.bcn.cl/leychile/navegar?idNorma=254080
- Dirección del Trabajo (Chile). (n.d.). *Subcontratación*. https://www.dt.gob.cl/portal/1626/w3-article-93827.html
- Confederación de Trabajadores del Cobre. (n.d.). *Historia*. https://www.confederaciondelcobre.cl/index.php/historia/
- Aravena, A. (2016). Oportunidad, conflicto y reconocimiento: El movimiento de trabajadores subcontratados de CODELCO y el gobierno de Michelle Bachelet, 2006–2007. *Polis (Santiago)*. https://www.scielo.cl/scielo.php?script=sci_arttext&pid=S0718-50492016000400004`,
      recallContent: [
        {
          prompt: "Name the 'put-them-outside move' variants across the track, including Chile's.",
          answer:
            "US: the NLRA farm/domestic carve-out and modern misclassification. Mexico: protection contracts (a union that isn't yours). Poland: junk contracts (civil-law instead of employment contracts). Global South broadly: informality. Chile: subcontratación, a thin contractor becomes your legal employer, and in a firm-level-only system that empties your bargaining rights of their target.",
        },
        {
          prompt: "What happened at Codelco in 2007, and why does the course call it the course's sharpest irony?",
          answer:
            "Some 30,000 subcontracted workers struck for 37 days under the CTC and won a framework agreement (Acuerdo Marco) across Codelco's divisions, described by the CTC as Chile's first sectoral-type bargaining since before the dictatorship. The workers the 1979 architecture most excluded produced its first post-1979 approximation of sectoral bargaining, entirely outside the legal machinery.",
        },
      ],
    },
    {
      slug: "chile-quiz-5",
      title: "Section 5 quiz · The numbers, and the outside move",
      section: "Section 5 · The numbers, and the outside move",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What was Chile's union density in 2023 (OECD/AIAS), and how does it compare to the OECD average?",
            options: [
              "About 16%, slightly ABOVE the OECD average of 15.1%",
              "About 34%, double the OECD average",
              "About 5%, the OECD's lowest",
              "About 65%, Nordic levels",
            ],
            correctIndex: 0,
            explanation:
              "The density number alone makes Chile look ordinary, which is exactly why the course says: don't stop at density.",
            sourceLessonSlug: "chile-numbers",
          },
          {
            prompt: "What was Chile's collective bargaining coverage in 2023, and where does it rank?",
            options: [
              "About 19.3%, among the lowest in the OECD (average ~33.5%, 2023/24)",
              "About 49%, near Germany's",
              "About 88%, near Sweden's",
              "About 33.5%, exactly the OECD average",
            ],
            correctIndex: 0,
            explanation:
              "Coverage, not density, is where the design shows: among the OECD's lowest (OECD, 2025).",
            sourceLessonSlug: "chile-numbers",
          },
          {
            prompt: "What is the 'fingerprint of bargaining level'?",
            options: [
              "The absolute number of unions in a country",
              "The GAP between coverage and density, sectoral systems show coverage towering over membership (Germany: 14.1% vs ~49%); firm-only Chile shows a ~3-point gap",
              "The number of strikes per year",
              "The minimum wage level",
            ],
            correctIndex: 1,
            explanation:
              "Agreements reach non-members only where bargaining happens above the firm. Chile's near-zero gap is the Plan Laboral's signature in the data.",
            sourceLessonSlug: "chile-numbers",
          },
          {
            prompt: "Which democracy does Chile's density/coverage line most resemble in the comparison table?",
            options: [
              "Sweden",
              "The United States, low density with coverage barely above it, the profile of firm-level-only bargaining",
              "Germany",
              "Denmark",
            ],
            correctIndex: 1,
            explanation:
              "The US (10.0% density, 2025 BLS; coverage barely above) shares the firm-locked profile, a resemblance the course keeps asking you to notice.",
            sourceLessonSlug: "chile-numbers",
          },
          {
            prompt: "'Chilean union density has risen since 1985', what makes this true statement misleading?",
            options: [
              "The data is fabricated",
              "1985 is the mid-dictatorship trough; from the 1973 peak (~34%) density is down by more than half. Whoever picks the baseline picks the story",
              "Density actually fell since 1985",
              "The OECD doesn't track Chile",
            ],
            correctIndex: 1,
            explanation:
              "Only Iceland, Chile and Spain show increases since 1985 (OECD, 2025), a fact that teaches baseline-checking, not union strength.",
            sourceLessonSlug: "chile-numbers",
          },
          {
            prompt: "Which sector shows Chile's highest unionisation, at what rate?",
            options: [
              "Retail, at 80%",
              "Mining, at 42% of employees (2023)",
              "Agriculture, at 60%",
              "Banking, at 90%",
            ],
            correctIndex: 1,
            explanation:
              "Membership concentrates in big firms and specific sectors; the aggregate hides an archipelago of thousands of small, uncoordinated unions.",
            sourceLessonSlug: "chile-numbers",
          },
          {
            prompt: "In subcontratación, who is the subcontracted worker's LEGAL employer?",
            options: [
              "The principal company whose work they do",
              "The contractor firm, while the principal that actually controls their conditions is, legally, a stranger to them",
              "The state",
              "The union",
            ],
            correctIndex: 1,
            explanation:
              "They dig the principal's copper or stock its shelves, but the bargaining counterparty the law gives them is the thin contractor.",
            sourceLessonSlug: "chile-subcontratacion",
          },
          {
            prompt: "Why does subcontracting interact so powerfully with Chile's firm-level-only rule?",
            options: [
              "It doesn't, the two are unrelated",
              "Because the narrower the legal bargaining unit, the more an employer gains by nudging workers just past its edge, 'which firm employs you' decides whether bargaining rights mean anything",
              "Because subcontractors pay higher wages",
              "Because sectoral bargaining covers subcontractors automatically",
            ],
            correctIndex: 1,
            explanation:
              "A design that confines power inside the firm's walls makes moving workers outside the walls the cheapest countermove.",
            sourceLessonSlug: "chile-subcontratacion",
          },
          {
            prompt: "What is the 'put-them-outside move,' and what is Chile's version?",
            options: [
              "Banning unions outright; Chile's version is a union ban",
              "Redefining workers so the system no longer applies, US misclassification, Mexican protection contracts, Polish junk contracts, informality, with subcontratación as Chile's version",
              "Deporting union organisers",
              "Moving factories abroad",
            ],
            correctIndex: 1,
            explanation:
              "When beating organised workers inside the system is expensive, move them outside it. The family resemblance across the track now has a Chilean member.",
            sourceLessonSlug: "chile-subcontratacion",
          },
          {
            prompt: "What did Ley 20.123 (in force 14 January 2007) actually do?",
            options: [
              "It banned subcontracting",
              "It defined and regulated subcontracted work and temp-services firms, and made the principal jointly or subsidiarily liable for contractors' labor and social-security obligations",
              "It gave subcontracted workers the right to bargain with the principal",
              "It privatised Codelco",
            ],
            correctIndex: 1,
            explanation:
              "The liability follows the money, but the bargaining table stays at the contractor. Protection, not power.",
            sourceLessonSlug: "chile-subcontratacion",
          },
          {
            prompt: "What crucial thing did Ley 20.123 NOT do?",
            options: [
              "It did not define subcontracting",
              "It did not give subcontracted workers bargaining rights toward the principal company",
              "It did not regulate temp agencies",
              "It did not create any liability",
            ],
            correctIndex: 1,
            explanation:
              "Claims can reach the principal's pocket; the collective bargaining table cannot reach the principal's chair.",
            sourceLessonSlug: "chile-subcontratacion",
          },
          {
            prompt: "What happened at Codelco in 2007?",
            options: [
              "The mine was privatised",
              "Around 30,000 subcontracted workers struck for 37 days under the CTC and won a framework agreement (Acuerdo Marco) across Codelco's divisions",
              "The government banned mining strikes",
              "Codelco abolished subcontracting",
            ],
            correctIndex: 1,
            explanation:
              "The CTC describes it as Chile's first sectoral-type bargaining experience since before the dictatorship.",
            sourceLessonSlug: "chile-subcontratacion",
          },
          {
            prompt: "Why does the course call the 2007 Acuerdo Marco the sharpest irony in the course?",
            options: [
              "Because it was negotiated by the government",
              "Because Chile's first post-1979 approximation of SECTORAL bargaining was won by the workers the architecture most completely excluded, from outside the legal machinery entirely",
              "Because it lasted only one week",
              "Because it lowered wages",
            ],
            correctIndex: 1,
            explanation:
              "The law channeled bargaining into the firm; workers with no meaningful firm to bargain with went around the law. Design constrains; it does not conclude.",
            sourceLessonSlug: "chile-subcontratacion",
          },
          {
            prompt: "Why does this course use OECD/AIAS figures rather than Chile's Dirección del Trabajo statistics?",
            options: [
              "The Dirección del Trabajo publishes no statistics",
              "For cross-country comparability, the DT's own rates run somewhat differently because the denominator differs, and the course says which measure it is using",
              "OECD numbers are always higher",
              "Chilean statistics are secret",
            ],
            correctIndex: 1,
            explanation:
              "Definitions are load-bearing: same country, different denominators, different rates. Name your measure, a track-wide habit.",
            sourceLessonSlug: "chile-numbers",
          },
          {
            prompt: "Chile 'does not so much have a labor movement as thousands of firm-sized labor movements.' What produced that shape?",
            options: [
              "Worker preference for small unions",
              "The 1979 design, pluralism-as-fragmentation plus firm-locked bargaining, whose fragmentation the OECD still documents in 2025",
              "A 2023 law requiring small unions",
              "The Ghent system",
            ],
            correctIndex: 1,
            explanation:
              "Many small unions bargaining alone, uncoordinated and atomised: the archipelago is the design's intended topology.",
            sourceLessonSlug: "chile-numbers",
          },
        ],
      },
    },

    // ────────────── SECTION 6 · CHILE AGAINST THE NORDICS — AND YOUR OWN STATUTE ──────────────
    {
      slug: "chile-vs-nordics",
      title: "12 · The same surface, the opposite cause",
      section: "Section 6 · Chile against the Nordics, and your own statute",
      body: `Now the comparison this whole track has been building toward, the reason the proposal wants Chile taught *last*, and taught *against* Sweden and Denmark.

Start with a fact that should bother you. Ask of both systems: **does the statute establish sectoral bargaining?** Sweden and Denmark: **no.** Chile: **no.** Ask: **is there a legal mechanism extending agreements to non-signatory firms?** Sweden and Denmark: **no** (that was the deep contrast with Germany and France in the Nordics course). Chile: **no.** On paper, on this axis, the wage-setting architecture of the strongest labor systems in the OECD and one of the weakest are *the same*: the state declines to mandate bargaining above the firm, and coverage is left to whatever the parties themselves can build.

And the outcomes could not be further apart:

| | Sweden | Denmark | Chile |
| --- | --- | --- | --- |
| Density | ~65% (early 2020s) | ~67% (early 2020s) | ~16% (2023) |
| Coverage | ~88% (~2018-19) | ~82% (~2018-19) | ~19.3% (2023) |
| Sectoral bargaining | The norm, by contract | The norm, by contract | Essentially none |

*(OECD/AIAS ICTWSS figures, as used in the Nordics course and OECD, 2025.)*

**Same statutory surface. Opposite worlds. The difference is who made the statute silent, and why.**

In **Sweden and Denmark**, the state is absent from the bargaining table because the organised parties **pushed it out and locked the door from the inside**. Saltsjöbaden (1938) and the September Compromise (1899) were treaties between two strong sides who preferred to govern the labor market themselves; sectoral bargaining exists not because law commands it but because ~two-thirds-density unions and near-universally organised employers *choose* it, enforce it with legal sympathy action, and renew it every bargaining round. The statute is silent the way a referee is silent at a chess match between grandmasters.

In **Chile**, the state is absent from the *sectoral* level because it **stood in the doorway and barred it**. DL 2758 did not neglect to provide industry bargaining, it locked bargaining to the firm, barred federations from the table, and (until 2017) armed employers with replacement. The statute is "silent" above the firm the way a wall is silent: it has nothing to say because it exists to stop movement. And the enforcement weapon that makes the Nordic contract-floor work, **sympathy action, spreading a dispute to pressure a hold-out from every side**, has no Chilean counterpart: Chile's lawful strike lives only *inside* a firm's own regulated bargaining round, precisely where the Nordic weapon lives *outside* it.

Even the membership plumbing points opposite ways. The Nordics run **default-in**: the Ghent system bundles union membership with unemployment insurance, so joining is the path of least resistance. The Plan Laboral built **default-out**: voluntary dues, competing unions splitting the workplace, a non-union bargaining alternative, and, until 2017, employers extending union-won gains to non-members for free, making membership economically irrational on purpose.

**Here is the methodological payload, and it is the most transferable sentence in the track:** *you cannot read a labor statute, anyone's, by its text alone.* Two systems with the same textual silence are opposites, because one silence was won by workers strong enough not to need the law, and the other was imposed to keep workers too weak to use it. To know which you are looking at, you must ask the historian's questions: who wrote this, against what background, over whose objection, and who has the organised power today. Text tells you the rules. Only provenance tells you the game.

:::reveal Sweden/Denmark and Chile share the same statutory surface, no sectoral bargaining mandated, no extension mechanism, with opposite outcomes. State the opposite causes, precisely. ||| In Sweden and Denmark the statute is silent because strong organised parties pushed the state out by treaty (September Compromise 1899, Saltsjöbaden 1938) and built sectoral bargaining themselves, by contract, enforced with legal sympathy action, sustained by Ghent-driven ~two-thirds density. In Chile the statute confines because a dictatorship's designer locked bargaining to the firm (DL 2758), barred federations from the table, and built default-out membership plumbing. One silence was won by strength; the other was imposed to prevent it, text tells you the rules, provenance tells you the game.

## Sources
- OECD. (2025). *Enhancing sectoral collective bargaining in Chile* (OECD Reviews of Labour Market and Social Policies). OECD Publishing. https://www.oecd.org/en/publications/enhancing-sectoral-collective-bargaining-in-chile_454f4167-en/
- OECD/AIAS. (n.d.). *ICTWSS database — country notes: Sweden; Denmark; Chile*. Organisation for Economic Co-operation and Development. https://www.oecd.org/en/data/datasets/oecd-aias-ictwss-database.html
- Biblioteca del Congreso Nacional de Chile. (1979). *Decreto Ley 2758: Establece normas sobre negociación colectiva*. LeyChile. https://www.bcn.cl/leychile/navegar?idNorma=6993`,
      recallContent: [
        {
          prompt: "In what sense do Sweden/Denmark and Chile have the SAME wage-setting architecture on paper, and what are the numbers that show the opposite outcomes?",
          answer:
            "Neither mandates sectoral bargaining by statute nor has a legal extension mechanism, coverage is left to what the parties build. Outcomes: Sweden ~65% density / ~88% coverage, Denmark ~67% / ~82%, Chile ~16% / ~19.3% (OECD/AIAS; Chile 2023).",
        },
        {
          prompt: "Explain the two metaphors: the referee's silence vs the wall's silence.",
          answer:
            "The Nordic statute is silent like a referee at a grandmasters' match, the strong parties govern themselves and asked the state out (1899, 1938). The Chilean statute is silent above the firm like a wall, DL 2758 exists to stop movement to the sectoral level. Same textual silence, opposite provenance and purpose.",
        },
      ],
    },
    {
      slug: "chile-constitution-attempts",
      title: "13 · Two rewrites, two rejections (2019-2023)",
      section: "Section 6 · Chile against the Nordics, and your own statute",
      body: `One chapter remains, and it is recent enough that this course tightens its rules: **dated facts and vote totals only**, from Chile's electoral service and Congress library, with no adjudication of a politics that is still in motion.

**October 2019.** Protests that began in Santiago over a metro-fare increase widened, within days, into the largest demonstrations since the return to democracy, the *estallido social*, an eruption over inequality, pensions, health, and the cost of living. In November 2019, Chile's parties across the spectrum agreed to open the question the transition had never reopened: whether to replace the dictatorship's 1980 Constitution, the document whose locks you met in Section 4.

**The first attempt.** In an entry plebiscite on **25 October 2020**, Chileans voted **78.27% Apruebo** ("approve", i.e., write a new constitution), and chose an elected convention to draft it (Servel, 2020). The Constitutional Convention produced a long, transformative draft, on labor, it moved in the direction of stronger collective rights, among many other sweeping changes across every domain of Chilean life. On **4 September 2022**, with voting mandatory and turnout at **85.7%**, the highest-participation vote in Chilean history, the draft was **rejected: 61.86% Rechazo to 38.14% Apruebo** (Servel; BCN, 2022).

**The second attempt.** A new process followed, run through an elected Constitutional Council in which the political right held the majority, producing a draft widely characterised as more conservative than the existing constitution. On **17 December 2023**, that draft was **also rejected: 55.76% En contra to 44.24% A favor** (Servel, 2023).

Two drafts, from opposite ends of the political spectrum, three years, two rejections. **What may be concluded from this, and what may not:**

- **May not:** that Chileans endorsed the Plan Laboral's architecture, or rejected it. Both proposals were rejected *as wholes*, hundreds of articles spanning every subject, for reasons voters never itemise. Reading a labor-policy verdict into either result is exactly the kind of inference this track has taught you to refuse.
- **May:** the institutional fact. **The 1980 Constitution — heavily amended, its designated senators long since abolished, but the same document — remains in force.** And the labor architecture of 1979 remains beneath it. The design has now outlived the dictatorship that decreed it (1990), survived the reform that disarmed its sharpest rule (2017), and stood through two consecutive attempts to rebuild Chile's foundations from scratch (2022, 2023).

That durability, whatever one thinks of it, and Chileans think everything of it, is the final data point in the course's argument. **A well-built design does not need its designer.** It persists through the veto points it was born with, through the caution of its inheritors, through the atomisation of its opponents, and even through moments when a large majority wants *something* to change but cannot converge on *what*. If the course's question was "what does a labor system look like when it is designed to be weak?", the last part of the answer is: **it looks permanent.**

*(This is where the course's clock stops. Chilean politics did not, treat any claim about what happened after 2023 as your homework to verify, not this course's to assert.)*

:::reveal What happened in Chile's two constitutional plebiscites of 2022 and 2023, and what does the course say those results do NOT tell you about labor? ||| On 4 September 2022, the Constitutional Convention's draft was rejected 61.86% to 38.14% (mandatory voting, 85.7% turnout); on 17 December 2023, the Constitutional Council's more conservative draft was also rejected, 55.76% to 44.24% (Servel). They do NOT tell you Chileans endorsed or rejected the Plan Laboral's architecture, both drafts were rejected as wholes, spanning every domain. What they DO establish: the amended 1980 Constitution, and the 1979 labor architecture beneath it, remain in force.

## Sources
- Servicio Electoral de Chile. (2020, October 26). *Plebiscito Nacional 2020 fue la mayor votación de la historia de Chile*. https://www.servel.cl/2020/10/26/plebiscito-nacional-2020-fue-la-mayor-votacion-de-la-historia-de-chile/
- Biblioteca del Congreso Nacional de Chile. (2022). *Con histórica participación electoral propuesta de nueva Constitución fue rechazada*. https://www.bcn.cl/portal/
- Servicio Electoral de Chile. (n.d.). *Resultados plebiscitos* (Archivo Histórico). https://archivo.servel.cl/index.php/resultados-plebiscitos`,
      recallContent: [
        {
          prompt: "Give the three plebiscite results, dated, with source.",
          answer:
            "25 October 2020: 78.27% Apruebo to begin a rewrite. 4 September 2022: the Convention's draft rejected, 61.86% Rechazo / 38.14% Apruebo, mandatory voting, 85.7% turnout, Chile's highest-participation vote. 17 December 2023: the Council's draft rejected, 55.76% En contra / 44.24% A favor. All per Servel (with BCN reporting).",
        },
        {
          prompt: "Why does the course refuse to read the 2022/2023 results as verdicts on labor policy?",
          answer:
            "Both proposals, one transformative, one more conservative than the status quo, were rejected as wholes: hundreds of articles spanning every subject, with voters' reasons never itemised. Inferring a labor verdict from a whole-document rejection is exactly the kind of overreach the track teaches you to refuse. The safe conclusion is institutional: the amended 1980 Constitution and the 1979 labor architecture remain in force.",
        },
      ],
    },
    {
      slug: "chile-last-course-close",
      title: "14 · The last country course: now re-read your own statute",
      section: "Section 6 · Chile against the Nordics, and your own statute",
      body: `This is the final teaching lesson of the Chile course, and, if you have followed the track's recommended order, the final country lesson of the whole Workers' Rights track. So let it do the two jobs a last lesson owes you: close Chile, and hand you the tool you leave with.

**Chile, closed, the four questions, final answers:**

1. **Who is allowed to organise?** Nearly everyone, freely, in as many competing unions per firm as workers care to form, a pluralism designed in 1979 to fragment, and still fragmenting: thousands of small unions, atomised bargaining (OECD, 2025).
2. **Who is excluded?** The subcontracted, whose lawful bargaining counterparty is a firm without power over them; the informal; and every worker whose employer's shape puts them past the edge of a firm-sized bargaining unit.
3. **Who bargains with whom, at what level?** A union, or a non-union group the Constitutional Tribunal kept alive in 2016, with a single employer, at the firm, on staggered clocks. No sectoral table exists in law; the one approximation of it (Codelco, 2007) was built outside the law by the excluded.
4. **What happens to you if you try?** Since April 2017: you may strike, and you may no longer be replaced, the design's sharpest tooth, drawn after 38 years. What remains is the cage the tooth defended: a strike confined to one firm's bargaining round, in a system where the firm may not be where power lives.

**And the tool.** You have now read a labor system whose intent is printed on the label, named author, stated goals, measurable results. Here is why that was worth a whole course: **it calibrates you.** Every other system you will ever encounter, including the one you live under, presents itself as nobody's decision: accreted, natural, just-how-things-are. Chile teaches you what design *looks like* in the wild: rules that all lean the same direction; "freedoms" that fragment; procedures that desynchronise; penalties that make a right unusable without banning it; political locks that protect the whole arrangement from revision. Once you have seen those patterns where they were confessed, you can recognise them where they are denied.

So here is the assignment the entire track has been building to. **Go re-read your own country's labor law**, for most students on this platform, that means going back to the anchor course's American arc, and interrogate it like a Chilean statute:

- Bargaining level: who fixed it there, and when, and against whose preference?
- Striker replacement: *Mackay Radio* wrote Chile's rule into American law in 1938, and no Congress has deleted it. Chile deleted its copy in 2016. What does that comparison do to "just how things are"?
- Exclusions: who is your system's subcontracted-Codelco-miner, formally free to organise, structurally unable to reach the party with power?
- And the Chilean question, the one this course exists to install: **if this system had a named author, what would you say they wanted?**

A labor system is an answer to the question "how much organised power should working people have?" Chile's was written by a man who answered *less*, said so, and built well. Whatever your country's answer is, someone gave it, in statutes, court rulings, and quiet structural choices, whether or not they signed their work the way José Piñera signed his. You now know how to find them. That is what this track was for.

*(Where to from here: the anchor's closing lesson, "Apply the four questions," pairs with this one; "Know Your Rights at Work" covers what you can do on Monday. And this course's numbers will age, the OECD updates density and coverage regularly, Chilean politics is live, and the 40-hour phase-in completes in 2028. Re-check before you quote.)*

:::reveal What does the course mean by saying Chile 'calibrates' you for reading every other labor system? ||| Chile is the system where design is confessed, named author, stated goals, measurable results, so it teaches you what engineered weakness looks like: rules leaning one direction, freedoms that fragment, desynchronised procedures, rights kept legal but unusable, political locks against revision. Systems that present themselves as nobody's decision ('just how things are') hide the same kinds of choices; having read one labeled example, you can now recognise the patterns unlabeled, starting with your own country's statute.

## Sources
- OECD. (2025). *Enhancing sectoral collective bargaining in Chile* (OECD Reviews of Labour Market and Social Policies). OECD Publishing. https://www.oecd.org/en/publications/enhancing-sectoral-collective-bargaining-in-chile_454f4167-en/
- Piñera, J. (1990). *La revolución laboral en Chile*. Zig-Zag. https://www.economiaysociedad.cl/
- NLRB v. Mackay Radio & Telegraph Co., 304 U.S. 333 (1938). Library of Congress. https://www.loc.gov/item/usrep304333/`,
      recallContent: [
        {
          prompt: "Answer Question 4 for Chile as of today, in two sentences.",
          answer:
            "Since Ley 20.940 took effect (1 April 2017), workers may strike and may not be replaced, externally or internally, the 1979 design's sharpest tooth, drawn after 38 years. But the strike remains confined to a single firm's regulated bargaining round, in a system where the firm you may pressure is often not where power over your conditions lives.",
        },
        {
          prompt: "What are the design patterns Chile teaches you to recognise in systems that 'deny having authors'?",
          answer:
            "Rules that all lean one direction; 'freedoms' that fragment (pluralism, negotiating groups); procedures that desynchronise; penalties that make a right legal but unusable (replacement, the 59-day trapdoor); and political locks protecting the arrangement from revision (the 1980 Constitution's veto points). Seen once where confessed, they become recognisable where denied.",
        },
      ],
    },
    {
      slug: "chile-quiz-6",
      title: "Section 6 quiz · The comparison, the rewrites, the close",
      section: "Section 6 · Chile against the Nordics, and your own statute",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "On paper, what do Sweden/Denmark and Chile share in their wage-setting architecture?",
            options: [
              "A statutory national minimum wage",
              "Neither mandates sectoral bargaining by statute, and neither has a legal mechanism extending agreements to non-signatory firms",
              "Ghent-system unemployment funds",
              "A ban on all strikes",
            ],
            correctIndex: 1,
            explanation:
              "The same textual silence, which is exactly why text alone cannot tell you which system you are looking at.",
            sourceLessonSlug: "chile-vs-nordics",
          },
          {
            prompt: "Why is the Nordic statute silent about sectoral bargaining?",
            options: [
              "Because sectoral bargaining is banned there",
              "Because strong organised parties pushed the state out by treaty (1899, 1938) and built sectoral bargaining themselves, by contract, enforced with legal sympathy action",
              "Because the EU forbids it",
              "Because unions are too weak to demand it",
            ],
            correctIndex: 1,
            explanation:
              "The referee's silence: two-thirds-density unions and organised employers govern the labor market themselves and renew that choice every round.",
            sourceLessonSlug: "chile-vs-nordics",
          },
          {
            prompt: "Why is the Chilean statute silent above the firm?",
            options: [
              "Because workers chose decentralisation in a referendum",
              "Because DL 2758 locked bargaining to the firm and barred federations from the table, the wall's silence: it exists to stop movement",
              "Because sectoral bargaining was never invented in Latin America",
              "Because the ILO required it",
            ],
            correctIndex: 1,
            explanation:
              "One silence was won by strength; the other was imposed to prevent strength. Same surface, opposite provenance.",
            sourceLessonSlug: "chile-vs-nordics",
          },
          {
            prompt: "How do the membership 'defaults' differ between the two systems?",
            options: [
              "Both are default-in",
              "Nordic Ghent plumbing makes joining the path of least resistance (default-in); the Plan Laboral built default-out, voluntary dues, competing unions, a non-union alternative, and (until 2017) free extension of union wins to non-members",
              "Both are default-out",
              "Chile has a Ghent system",
            ],
            correctIndex: 1,
            explanation:
              "Plumbing points opposite ways: one design makes membership the norm, the other made it economically irrational on purpose.",
            sourceLessonSlug: "chile-vs-nordics",
          },
          {
            prompt: "What is 'the most transferable sentence in the track'?",
            options: [
              "All labor law converges over time",
              "You cannot read a labor statute by its text alone, text tells you the rules; only provenance tells you the game",
              "Density always predicts coverage",
              "Strikes are always counterproductive",
            ],
            correctIndex: 1,
            explanation:
              "Two identical silences can be opposites. Ask who wrote it, against what background, over whose objection, and who holds organised power now.",
            sourceLessonSlug: "chile-vs-nordics",
          },
          {
            prompt: "Where does Chile's lawful strike live, compared with the Nordic sympathy weapon?",
            options: [
              "Anywhere, any time, for any cause",
              "Only inside a firm's own regulated bargaining round, precisely where Nordic sympathy action lives OUTSIDE the primary dispute, spreading pressure to hold-outs",
              "Only in the public sector",
              "Only with government authorisation",
            ],
            correctIndex: 1,
            explanation:
              "The enforcement weapon that makes the Nordic contract-floor work has no Chilean counterpart.",
            sourceLessonSlug: "chile-vs-nordics",
          },
          {
            prompt: "What began Chile's constitutional process in 2019?",
            options: [
              "An OECD directive",
              "Protests that began over a Santiago metro-fare increase and widened into the largest demonstrations since the return to democracy, the estallido social",
              "A military coup",
              "A petition by employers",
            ],
            correctIndex: 1,
            explanation:
              "The eruption over inequality led to the November 2019 cross-party agreement to reopen the 1980 Constitution.",
            sourceLessonSlug: "chile-constitution-attempts",
          },
          {
            prompt: "What did Chileans decide on 25 October 2020?",
            options: [
              "To reject any new constitution",
              "78.27% voted Apruebo, to write a new constitution, via an elected convention (Servel)",
              "To restore the 1925 constitution",
              "To leave the OECD",
            ],
            correctIndex: 1,
            explanation:
              "The entry plebiscite opened the first rewrite attempt.",
            sourceLessonSlug: "chile-constitution-attempts",
          },
          {
            prompt: "What happened on 4 September 2022?",
            options: [
              "The Convention's draft was approved narrowly",
              "The Convention's draft was rejected 61.86% to 38.14%, with mandatory voting and 85.7% turnout, Chile's highest-participation vote",
              "The plebiscite was cancelled",
              "The 1980 Constitution was abolished",
            ],
            correctIndex: 1,
            explanation:
              "First attempt, rejected (Servel; BCN).",
            sourceLessonSlug: "chile-constitution-attempts",
          },
          {
            prompt: "What happened on 17 December 2023?",
            options: [
              "A second, more conservative draft was approved",
              "The Constitutional Council's draft, widely characterised as more conservative than the existing constitution, was also rejected, 55.76% to 44.24%",
              "Sectoral bargaining became constitutional",
              "A third convention was elected",
            ],
            correctIndex: 1,
            explanation:
              "Two drafts from opposite ends of the spectrum, two rejections (Servel).",
            sourceLessonSlug: "chile-constitution-attempts",
          },
          {
            prompt: "What may NOT be concluded from the two constitutional rejections, per the course?",
            options: [
              "That the 1980 Constitution remains in force",
              "That Chileans endorsed, or rejected, the Plan Laboral's labor architecture: both drafts were rejected as wholes, for unitemised reasons spanning every subject",
              "That turnout was high in 2022",
              "That two processes occurred",
            ],
            correctIndex: 1,
            explanation:
              "Reading a labor verdict into a whole-document vote is the kind of inference the track teaches you to refuse.",
            sourceLessonSlug: "chile-constitution-attempts",
          },
          {
            prompt: "What is the institutional bottom line after 2019-2023?",
            options: [
              "Chile has a new constitution",
              "The amended 1980 Constitution remains in force, and the 1979 labor architecture remains beneath it, the design has outlived its regime, a major reform, and two rebuild attempts",
              "The labor code was abolished",
              "Sectoral bargaining was established",
            ],
            correctIndex: 1,
            explanation:
              "'A well-built design does not need its designer', the course's final data point: it looks permanent.",
            sourceLessonSlug: "chile-constitution-attempts",
          },
          {
            prompt: "Why was reading ONE confessed design worth a whole course, per the closing lesson?",
            options: [
              "Because Chile is the largest economy in the track",
              "Because it calibrates you: having seen engineered weakness where it was confessed, named author, stated goals, you can recognise the same patterns in systems that present themselves as nobody's decision",
              "Because designed systems are rare and unimportant",
              "Because all other systems are identical to Chile's",
            ],
            correctIndex: 1,
            explanation:
              "Rules leaning one way, freedoms that fragment, rights kept legal but unusable, locks against revision, patterns you can now spot unlabeled.",
            sourceLessonSlug: "chile-last-course-close",
          },
          {
            prompt: "What comparison does the closing assignment ask American students to sit with?",
            options: [
              "Chile has a minimum wage and the US does not",
              "Mackay Radio (1938) wrote Chile's replacement rule into US law and no Congress has deleted it, while Chile deleted its copy in 2016",
              "The US has sectoral bargaining and Chile does not",
              "Both countries ban strikes",
            ],
            correctIndex: 1,
            explanation:
              "The course's provenance question turned homeward: what does that comparison do to 'just how things are'?",
            sourceLessonSlug: "chile-last-course-close",
          },
          {
            prompt: "What is 'the Chilean question' the course exists to install?",
            options: [
              "How high should the minimum wage be?",
              "If this system had a named author, what would you say they wanted?",
              "Should unions exist?",
              "Is GDP growth good?",
            ],
            correctIndex: 1,
            explanation:
              "Every labor system answers 'how much organised power should working people have?', someone gave your country's answer, signed or unsigned. Now you know how to find them.",
            sourceLessonSlug: "chile-last-course-close",
          },
        ],
      },
    },
    {
      slug: "chile-exercise",
      title: "Exercise · Name the design",
      section: "Section 6 · Chile against the Nordics, and your own statute",
      body: `A short production drill. For each cue, type a brief answer, then check it against the key. Spelling and accents are graded forgivingly, aim for the right idea. This exercises the course's core habit: naming the *design choice* behind an outcome, with its date and, where it has one, its author.`,
      exercise: {
        instructions: "Type a short answer for each. One or a few words is enough unless the prompt asks for a sentence.",
        items: [
          {
            prompt: "Name the 1979 package of decree laws that designed Chile's labor system, written under the Pinochet dictatorship.",
            answer: "the Plan Laboral",
            accept: ["Plan Laboral", "the Plan Laboral", "labor plan", "the labor plan"],
            hint: "Two words, Spanish.",
            explanation:
              "The Plan Laboral, eight decree laws (one in 1978, seven in July 1979), with DL 2756 (unions) and DL 2758 (bargaining) at the core.",
          },
          {
            prompt: "Who was its author, Pinochet's Minister of Labor, appointed at age 30?",
            answer: "José Piñera",
            accept: ["Piñera", "Jose Pinera", "José Piñera", "Pinera"],
            hint: "He later published La revolución laboral en Chile (1990).",
            explanation:
              "José Piñera designed the Plan Laboral, stated its goals, and still defends it, the reason Chile is the track's clearest case of design.",
          },
          {
            prompt: "At what level, and only that level, does Chilean law locate collective bargaining, from 1979 to today?",
            answer: "the firm",
            accept: ["firm", "the firm", "firm level", "the firm level", "company", "company level", "enterprise", "enterprise level"],
            hint: "Not the sector, not the industry.",
            explanation:
              "Firm-level only: federations were barred from bargaining, and no reform since, including Ley 20.940, has established a sectoral table.",
          },
          {
            prompt: "Under the original DL 2758, after how many days on strike was a worker deemed to have voluntarily resigned?",
            answer: "59",
            accept: ["59", "59 days", "fifty-nine", "sixty", "60"],
            hint: "Just short of two months.",
            explanation:
              "The 59-day trapdoor: the law converted persistence into resignation. Removed in the 1991 reform (Ley 19.069), which made strikes indefinite.",
          },
          {
            prompt: "Name the 2016 law (in force April 2017) that finally banned striker replacement in Chile.",
            answer: "Ley 20.940",
            accept: ["20.940", "20940", "Ley 20.940", "ley 20940", "Law 20.940"],
            hint: "Published 8 September 2016.",
            explanation:
              "Ley 20.940 recognised the 'huelga efectiva', no external or internal replacement, while leaving the firm-level architecture intact.",
          },
          {
            prompt: "Which body struck down union titularity on 9 May 2016, keeping non-union 'negotiating groups' alive?",
            answer: "the Constitutional Tribunal",
            accept: ["Constitutional Tribunal", "the Constitutional Tribunal", "Tribunal Constitucional", "constitutional court", "the constitutional court", "TC"],
            hint: "Rol 3016-16.",
            explanation:
              "Chile's Constitutional Tribunal voided the titularity chapter on freedom-of-association grounds before Ley 20.940 took effect, 1979's design move 3 survives.",
          },
          {
            prompt: "Give Chile's 2023 union density and bargaining coverage (OECD/AIAS), rounded.",
            answer: "16% density, 19.3% coverage",
            accept: ["16 and 19", "16% and 19%", "16 19", "16% density 19.3% coverage", "16/19.3", "16 and 19.3", "about 16% and about 19%"],
            hint: "Density near the OECD average; coverage among its lowest.",
            explanation:
              "~16% density (slightly above the OECD average of 15.1%) and ~19.3% coverage (against ~33.5% average), the ~3-point gap is the firm-level fingerprint.",
          },
          {
            prompt: "Name Chile's version of the put-them-outside move, the practice regulated (not empowered) by Ley 20.123 in 2007.",
            answer: "subcontratación",
            accept: ["subcontratacion", "subcontratación", "subcontracting", "outsourcing"],
            hint: "Your legal employer is a thin contractor; the mine belongs to someone else.",
            explanation:
              "Subcontratación: the principal firm's power sits outside your firm-sized bargaining unit. Ley 20.123 made principals liable for obligations, but gave no bargaining rights toward them.",
          },
          {
            prompt: "Which workers won Chile's first sectoral-type agreement since the dictatorship, in 2007, after a 37-day strike?",
            answer: "Codelco's subcontracted copper workers (the CTC)",
            accept: ["subcontracted workers", "Codelco subcontractors", "the CTC", "CTC", "copper subcontractors", "Codelco's subcontracted workers", "subcontratistas"],
            hint: "The workers the architecture most excluded.",
            explanation:
              "Some 30,000 subcontracted workers under the Confederación de Trabajadores del Cobre won the Acuerdo Marco, sectoral-style bargaining built entirely outside the legal machinery.",
          },
          {
            prompt: "One sentence: why do Sweden and Chile, with the SAME statutory silence on sectoral bargaining, have opposite systems?",
            answer: "Sweden's silence was won by strong parties who govern the labor market themselves; Chile's was imposed by a design that locked bargaining to the firm to keep unions weak",
            accept: [
              "opposite causes",
              "one silence won by strength, one imposed to prevent strength",
              "Sweden's unions are strong so the state stays out; Chile's law confines bargaining to keep unions weak",
              "provenance",
              "the referee vs the wall",
            ],
            hint: "The referee's silence vs the wall's silence.",
            explanation:
              "Text tells you the rules; provenance tells you the game. One statute is silent because workers didn't need it; the other because its author wanted them unable to use it.",
          },
        ],
      },
    },
  ],
};
