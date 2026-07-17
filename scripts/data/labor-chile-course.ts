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
    "Every other course in the Workers' Rights track shows you a labor system that evolved — pushed and pulled into shape over a century of strikes, statutes, and settlements. Chile shows you one that was designed. In 1979, under a military dictatorship, a 30-year-old economist named José Piñera wrote a labor code with a stated goal, published a book defending it, and signed his work — bargaining confined by law to the single firm, strikes that employers could wait out or replace their way through, union pluralism used to fragment rather than to free. This course reads that design the way an engineer reads a blueprint. You will see what stood before it: the strongest labor movement in Latin America, a third of wage earners unionised by 1973 — and how it was destroyed after the coup, told soberly and cited carefully. You will hear the designers' case in their own words, steelmanned honestly before it is measured against the record. You will follow the design through the return to democracy — why elected governments reformed it only at the margins for a quarter century, what the 2016 reform (Ley 20.940) finally changed, and what it deliberately did not — and you will read the result in today's numbers: union density around 16% and bargaining coverage around 19% (2023, OECD/AIAS), among the lowest in the OECD, in a system the OECD itself describes as atomised. Then the comparison the whole track has been building toward: Chile against Sweden and Denmark — two systems with the same surface, no sectoral bargaining written into statute, for exactly opposite reasons. One is silent because unions are strong enough not to need it. One is silent because its authors wanted them weak. This is the recommended final country course in the track, because its closing assignment is the point of the whole track: go re-read your own country's labor law, and ask who designed it, and what they wanted. Cited to OECD/AIAS, the Biblioteca del Congreso Nacional, the Dirección del Trabajo, Memoria Chilena, Servel, and the designers' own published defense. Take \"The History of Unions: America and the World\" first.",
  lessons: [
    // ────────────── SECTION 1 · A LABOR CODE WITH AN AUTHOR ──────────────
    {
      slug: "chile-designed-not-evolved",
      title: "1 · Designed, not evolved: why Chile is the last course",
      section: "Section 1 · A labor code with an author",
      body: `Every labor system you have met in this track so far *evolved*. America's grew out of Haymarket and the Wagner Act and Taft-Hartley, each layer a reaction to the last. Sweden's and Denmark's grew out of founding truces between organised workers and organised employers. Nobody sat down one year and drew the whole thing.

**Chile is the exception, and that is the entire reason this course exists.** The core of Chile's labor system was written in **1979**, under the military dictatorship of Augusto Pinochet, by a named person — **José Piñera**, a Harvard-trained economist appointed Minister of Labor at age 30 — as a deliberate, coherent package called the **Plan Laboral** ("Labor Plan"). It had a stated goal. Its author published a book defending it and defends it to this day. And its central architecture — collective bargaining confined by law to the **single firm**, never the industry — survived the dictatorship, survived the return to democracy in 1990, survived a major reform in 2016, and survived two attempts to rewrite the constitution in 2022 and 2023. You will read today's design in today's numbers before this course is over: union density around **16%** and collective-bargaining coverage around **19.3%** in **2023** (OECD/AIAS ICTWSS, in OECD, 2025) — against an OECD coverage average of about **33.5%** (2023/24).

Hold on to what that means methodologically. When a system *evolves*, you can always argue about what anyone intended — outcomes are accidents piled on accidents. When a system is *designed*, intent is on the record. Chile is the clearest documented case anywhere of a labor system engineered, on purpose, by identifiable people, to change the balance of power between workers and employers — which is why the track's proposal calls it "the perfect final lesson before a student re-reads their own country's law." Systems are choices. Chile is where you can watch the choosing.

**Two commitments before we start, because this history is painful and this politics is live.**

First: the design was built on a destruction. Before 1979 comes 1973 — a coup, a dissolved union confederation, and union leaders among the dead and disappeared. This course teaches that soberly, from the historical record, without flinching and without theatrics (Section 2).

Second: **the designers get their say.** The Plan Laboral has a serious intellectual defense — its author's own — and you will hear it steelmanned in Section 3 *before* you see the measured effects. A course that only prosecutes is propaganda; a course that lets the defense speak and then checks it against the evidence is education.

Here are the anchor course's **four questions**, asked of Chile in advance. Everything after this is the detail.

| Question | Chile's answer (the short version) |
| --- | --- |
| **1 · Who is allowed to organise?** | Almost everyone, freely — since 1979, deliberately including *multiple competing unions inside one firm*. Freedom used as fragmentation. |
| **2 · Who is excluded?** | The subcontracted, above all — workers placed *outside* the bargaining unit by contracting structure (Section 5) — plus the informal. |
| **3 · Who bargains with whom, at what level?** | A union (or a non-union "negotiating group") with a single employer, at the **firm level only**. Sectoral bargaining is not part of the legal architecture. This is the design's heart. |
| **4 · What happens to you if you try?** | Historically: replacement — until 2017, employers could replace strikers, and under the original 1979 rules a long strike could legally end your employment. Since Ley 20.940 (in force 2017), replacement is banned; the firm-level cage remains. |

*(Haven't taken the anchor — "The History of Unions: America and the World"? You can follow this course without it, but the four questions, Taft-Hartley, and the Mackay replacement doctrine all come from there, and this course leans on them without re-teaching them.)*

:::reveal What makes Chile's labor system different in KIND from every other system in this track — and why does that make it the recommended final course? ||| Every other system evolved; Chile's was designed — written in 1979 as a coherent package (the Plan Laboral) by a named author (José Piñera) under the Pinochet dictatorship, with a stated goal. Because intent is on the record, Chile turns "who bargains, at what level?" from a description into a question about choices — which is the right lens to carry back to your own country's law, so it comes last.

## Sources
- OECD. (2025). *Enhancing sectoral collective bargaining in Chile* (OECD Reviews of Labour Market and Social Policies). OECD Publishing. https://www.oecd.org/en/publications/enhancing-sectoral-collective-bargaining-in-chile_454f4167-en/
- Piñera, J. (1990). *La revolución laboral en Chile*. Zig-Zag. https://www.economiaysociedad.cl/
- Biblioteca del Congreso Nacional de Chile. (1979). *Decreto Ley 2758: Establece normas sobre negociación colectiva*. LeyChile. https://www.bcn.cl/leychile/navegar?idNorma=6993`,
      recallContent: [
        {
          prompt: "Who wrote Chile's 1979 Plan Laboral, under what government, and what is its central architectural rule?",
          answer:
            "José Piñera, a Harvard-trained economist appointed Minister of Labor at 30, under the Pinochet military dictatorship. The central rule: collective bargaining is confined by law to the single firm — never the industry or sector.",
        },
        {
          prompt: "Give Chile's union density and bargaining coverage with year and source, and the OECD coverage average for comparison.",
          answer:
            "Density around 16% and coverage around 19.3% in 2023 (OECD/AIAS ICTWSS, in OECD 2025), against an OECD coverage average of about 33.5% (2023/24) — among the lowest coverage in the OECD.",
        },
      ],
    },
    {
      slug: "chile-before-1973",
      title: "2 · What stood before: Iquique, the CUT, and a 34% peak",
      section: "Section 1 · A labor code with an author",
      body: `You cannot read the 1979 design without knowing what it was designed *against*. The Plan Laboral was not written on a blank slate. It was written in a country that had built, over seven decades, one of the strongest labor movements in Latin America — and had just watched it be destroyed.

**Start in the desert.** Chile's labor movement was born in the northern nitrate fields — the *pampa salitrera* — where tens of thousands of miners dug the fertilizer mineral that made Chile's export economy in the late 1800s. Conditions were brutal; pay often came in company scrip good only at the company store. In December **1907**, thousands of striking nitrate workers and their families marched into the port city of **Iquique** to press their demands and were quartered at the **Santa María School**. On **21 December 1907**, after the strikers refused an order to disperse, troops under General Roberto Silva Renard opened fire on them.

**How many died is genuinely contested, and the dispute is itself worth teaching.** Contemporary official counts put the dead at around **126** — that figure comes from the Iquique hospital administrator's count, and a telegram sent to the president within hours claimed only 30 (Archivo Nacional de Chile; Memoria Chilena). Later estimates run far higher, and Chilean social memory — fixed by the *Cantata de Santa María de Iquique*, the 1969 composition by Luis Advis that most Chileans know by heart — says **3,600**. Historians generally treat the official count as too low and the Cantata's number as memory rather than measurement; the honest statement is that **hundreds died at minimum, the true toll is unknown, and the state counted its victims carelessly because it could** (Memoria Chilena, n.d.; on the competing counts, see the scholarship collected by Chile's Archivo Nacional). This course will not pick a number. It will teach you to notice when a number is contested and why.

**Then the building.** Out of the nitrate era's mutual-aid societies and resistance societies grew federations, then national confederations. In **1953** the strands merged into the **CUT** — the *Central Única de Trabajadores*, a single national union center spanning blue-collar, white-collar, and public workers. Union membership climbed for two decades: by **1973**, Chile's union density reached roughly **34%**, the highest in its history — up from the mid-20s just a decade earlier (Fundación Sol, 2015; Memoria Chilena, n.d.). By the CUT's own account, at the time of the coup it represented on the order of **940,000 workers across some 6,700 unions** (CUT, n.d. — the organisation's own history, cited as such).

**And labor stood near the center of national politics.** In 1970 Chileans elected the Socialist **Salvador Allende** president at the head of a left coalition in which the unions were a pillar; in 1971 Chile's Congress approved the nationalization of the copper industry, the country's economic crown. Whatever you think of that political project — and Chileans still argue about it, hard — the structural fact matters for this course: **by the early 1970s organised labor in Chile was strong, centralised, sectorally organised, and politically consequential.** Copper and nitrate had taught Chilean workers to bargain *as an industry*, and the CUT gave them one national voice.

That is what stood on 10 September 1973. Keep the shape of it in mind — centralised, industrial, political — because the 1979 design (Section 3) reads almost point-for-point as its negation.

:::reveal Why does this course refuse to state a single death toll for the Santa María School massacre (1907) — and what does it teach instead? ||| Because the toll is genuinely contested: contemporary official counts said around 126 (with an initial telegram claiming 30), while Chilean social memory — fixed by the 1969 Cantata — says 3,600, and historians treat the truth as unknown but far above the official count. The lesson is methodological: notice when a number is contested, ask who counted and why, and refuse false precision.

## Sources
- Memoria Chilena, Biblioteca Nacional de Chile. (n.d.). *Masacre de la Escuela Santa María de Iquique*. https://www.memoriachilena.gob.cl/wiki/portadaut_masacredelaescuelasantamariadeiquique.php
- Archivo Nacional de Chile. (n.d.). *Matanza de la Escuela de Santa María de Iquique en 1907*. https://www.archivonacional.gob.cl/colecciones/matanza-de-la-escuela-de-santa-maria-de-iquique-en-1907
- Memoria Chilena, Biblioteca Nacional de Chile. (n.d.). *Central Única de Trabajadores (CUT, 1953–1973)*. https://www.memoriachilena.gob.cl/602/w3-article-96204.html
- Fundación Sol. (2015). *Sindicatos y negociación colectiva: Panorama estadístico nacional y evidencia comparada*. https://fundacionsol.cl/
- Central Unitaria de Trabajadores de Chile. (n.d.). *La historia de la CUT*. https://cut.cl/web/la-historia-de-la-cut/`,
      recallContent: [
        {
          prompt: "What was the CUT (1953), and how strong was Chilean labor by 1973 — with sources?",
          answer:
            "The Central Única de Trabajadores, Chile's single national union center founded in 1953. By 1973 union density reached roughly 34% — its historic peak (Fundación Sol, 2015; Memoria Chilena) — and by the CUT's own account it represented about 940,000 workers in some 6,700 unions at the time of the coup.",
        },
        {
          prompt: "Why does the pre-1973 movement's SHAPE (not just its size) matter for reading the Plan Laboral?",
          answer:
            "Because it was centralised (one national confederation), industrially organised (copper and nitrate bargained as sectors), and politically consequential (a pillar of Allende's coalition) — and the 1979 design reads almost point-for-point as the negation of exactly those three properties.",
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
              "Every other course shows a system that evolved; Chile's core was written in 1979 by José Piñera under the Pinochet dictatorship — intent is on the record.",
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
              "Piñera designed the Plan Laboral, signed his work, and defends it to this day — which is exactly why Chile is the track's clearest case of design.",
            sourceLessonSlug: "chile-designed-not-evolved",
          },
          {
            prompt: "What is the central architectural rule of Chile's labor system, from 1979 to today?",
            options: [
              "Collective bargaining happens at the national level, once a year",
              "Collective bargaining is confined by law to the single firm — sectoral bargaining is not part of the legal architecture",
              "Only the government may negotiate wages",
              "Strikes are constitutionally guaranteed at all levels",
            ],
            correctIndex: 1,
            explanation:
              "Firm-level-only bargaining is the design's heart — it survived the dictatorship, the transition, the 2016 reform, and two constitutional rewrite attempts.",
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
              "Around 16% density and 19.3% coverage in 2023 (OECD/AIAS ICTWSS, in OECD 2025) — coverage among the OECD's lowest, against an average of ~33.5%.",
            sourceLessonSlug: "chile-designed-not-evolved",
          },
          {
            prompt: "How does Chile's bargaining coverage compare with the OECD average?",
            options: [
              "It is roughly double the OECD average",
              "About 19.3% (2023) against an OECD average of about 33.5% (2023/24) — among the lowest in the OECD",
              "It exactly matches the OECD average",
              "The OECD does not measure Chile",
            ],
            correctIndex: 1,
            explanation:
              "Chile's coverage sits far below the OECD average — the designed firm-level cage shows up directly in the coverage number.",
            sourceLessonSlug: "chile-designed-not-evolved",
          },
          {
            prompt: "Why does the course insist the designers 'get their say' (the steelman) before the effects are measured?",
            options: [
              "Because the course endorses the Plan Laboral",
              "Because a course that only prosecutes is propaganda — the Plan has a serious published defense by its author, and education means hearing it, then checking it against evidence",
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
              "It is genuinely contested — official counts said around 126, social memory (via the 1969 Cantata) says 3,600, and historians treat the truth as unknown but well above the official count",
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
              "The 1969 Cantata is the vehicle of social memory — memory, not measurement, which is exactly the distinction the lesson teaches.",
            sourceLessonSlug: "chile-before-1973",
          },
          {
            prompt: "What was the CUT?",
            options: [
              "A copper mining company",
              "The Central Única de Trabajadores — Chile's single national union center, founded in 1953",
              "A government labor inspectorate",
              "An employers' confederation",
            ],
            correctIndex: 1,
            explanation:
              "Founded 1953, the CUT unified Chile's union strands into one national voice — by its own account some 940,000 workers in ~6,700 unions by 1973.",
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
              "Density peaked around 34% in 1973 (Fundación Sol, 2015; Memoria Chilena) — roughly double today's rate.",
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
              "The Plan Laboral atomised what was centralised, confined to the firm what was sectoral, and depoliticised what was political — point for point.",
            sourceLessonSlug: "chile-before-1973",
          },
          {
            prompt: "Where was Chile's labor movement born?",
            options: [
              "In Santiago's textile mills",
              "In the northern nitrate fields — the pampa salitrera — in the late 1800s",
              "In the southern fisheries",
              "In the vineyards of the central valley",
            ],
            correctIndex: 1,
            explanation:
              "Nitrate mining made Chile's export economy and its labor movement — brutal conditions, company scrip, and the organising they provoked.",
            sourceLessonSlug: "chile-before-1973",
          },
          {
            prompt: "Under the ORIGINAL 1979 rules, what could happen to you for striking too long (Question 4)?",
            options: [
              "Nothing — strikes had no time limit",
              "A long strike could legally end your employment, and employers could replace strikers — rules that stood until the 2017 reform took effect",
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
              "Subcontracted workers — placed outside the bargaining unit by contracting structure — plus the informal",
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
      section: "Section 2 · The destruction, 1973–1979",
      body: `On the morning of **11 September 1973**, the Chilean armed forces overthrew the elected government. Jets bombed the presidential palace; President Salvador Allende died in it; a four-man military junta under General **Augusto Pinochet** took power and held it for the next sixteen and a half years.

What happened next to the labor movement was not a side effect of the coup. It was one of its objects.

**The head was cut off within days.** By **Decree Law No. 12**, in September 1973, the junta cancelled the legal status of the **CUT** — the national union center you met in the last lesson, with its roughly 940,000 affiliated workers — outlawed it, and seized its assets (CUT, n.d.; Memoria Chilena, n.d.). Collective bargaining was suspended. Union elections were banned. Union meetings required permission and could be attended by police. Wages, which sectors like copper had negotiated, were now set by government decree. The labor relations system that had taken seventy years to build stopped existing in about two weeks — and for the next six years, Chile simply had **no functioning collective bargaining at all** (a vacuum that becomes important in the next lesson).

**The people were next, and this must be said plainly.** Chile's National Commission on Truth and Reconciliation — the **Rettig Commission**, created after the return to democracy — and its successor body documented more than **3,000 people killed or disappeared** by agents of the dictatorship over its span (Comisión Nacional de Verdad y Reconciliación, 1991, and the follow-up Corporation's consolidated findings). Union officers, shop-floor delegates, and labor activists were heavily represented among the victims, especially in the first months: being a union leader in a mine, a factory, or a farm in late 1973 was, in itself, enough to put a person on a list. Two named cases stand for thousands. **Víctor Jara** — the singer-songwriter whose music was woven through the labor and student movements — was detained in the days after the coup, tortured, and killed in the Estadio Chile; Chilean courts convicted former officers for his murder decades later. And in **1982**, **Tucapel Jiménez**, president of the public employees' association **ANEF** and by then an open critic of the regime's labor policy, was murdered by state intelligence agents — a crime for which Chilean courts, again decades later, convicted the men responsible.

Two disciplines for reading this lesson, because this is the most painful material in the course:

- **These are findings, not allegations.** The numbers above come from Chile's own official truth commissions, created by Chile's own democracy, and the named cases ended in criminal convictions in Chilean courts. This is about as far from contested history as the twentieth century gets. Chileans dispute much about the Allende years and the dictatorship's economics; the fact of the killings is documented by the Chilean state itself.
- **Do not let the numbers do the flattening.** The dictatorship's repression fell on the whole society, not only on unionists — and the labor movement was not merely a victim organization; it later became one of the first forces to organise open resistance (the copper miners' confederation called the first mass national protest against the regime in **May 1983**, which grew into the protest cycle of the mid-1980s). Both halves are true and this course will hold both.

Here is the point to carry into the next lesson. **By 1978, Chile's old labor system had been physically and legally annihilated — but nothing had been built in its place.** A dictatorship that presented itself abroad as modernizing could not indefinitely run a labor market with no labor law. Something would have to be written. The only question was what, and by whom.

:::reveal What happened to the CUT after the coup, and what do Chile's own truth commissions document about the human toll of the dictatorship? ||| The junta cancelled the CUT's legal status by Decree Law No. 12 (September 1973), outlawed it and seized its assets; collective bargaining was suspended and union elections banned. The Rettig Commission (1991) and its successor documented more than 3,000 people killed or disappeared by the dictatorship — with union officers and labor activists heavily represented, especially in the first months — findings of the Chilean state itself, not allegations.

## Sources
- Comisión Nacional de Verdad y Reconciliación. (1991). *Informe de la Comisión Nacional de Verdad y Reconciliación* [Rettig Report]. Gobierno de Chile. https://bibliotecadigital.indh.cl/handle/123456789/170
- Memoria Chilena, Biblioteca Nacional de Chile. (n.d.). *Central Única de Trabajadores (CUT, 1953–1973)*. https://www.memoriachilena.gob.cl/602/w3-article-96204.html
- Central Unitaria de Trabajadores de Chile. (n.d.). *La historia de la CUT*. https://cut.cl/web/la-historia-de-la-cut/
- Museo de la Memoria y los Derechos Humanos. (n.d.). *Archivo: Central Unitaria de Trabajadores (CUT)*. https://www.archivommdh.cl/index.php/central-unitaria-de-trabajadores-cut`,
      recallContent: [
        {
          prompt: "By what instrument and when was the CUT dissolved, and what else was shut down with it?",
          answer:
            "Decree Law No. 12, September 1973 — the junta cancelled the CUT's legal status, outlawed it, and seized its assets. Collective bargaining was suspended, union elections banned, meetings put under police supervision, and wages set by decree. Chile then had no functioning collective bargaining for six years.",
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
      title: "4 · Six years of nothing — then a boycott forces a labor code",
      section: "Section 2 · The destruction, 1973–1979",
      body: `Between 1973 and 1979, Chilean workers lived in a legal vacuum: unions existed on paper but could not bargain, could not strike, could not hold elections. Why did the dictatorship write a labor code at all — and why in **1979**, six years in? The answer is one of the strangest details in this whole track: **the Plan Laboral exists, in significant part, because of a threatened boycott by foreign unions.**

**The pressure.** Inside Chile, a group of union leaders who had survived the repression — known as the **Grupo de los Diez** ("Group of Ten") — kept pressing the regime over labor rights and reached out to the international labor movement. Abroad, the case built: the ILO's supervisory machinery was engaged, and by 1978 the **AFL-CIO** — the American union federation you know from the anchor course — together with international transport unions was preparing a **commercial boycott of Chilean goods**: longshoremen refusing to load or unload Chilean cargo, demanding an end to the violation of labor rights (Álvarez, 2012). For an export economy — copper, fruit, fishmeal — moving through foreign, heavily unionised ports, this was not a symbolic threat.

**The response.** At the end of 1978, Pinochet appointed the young economist **José Piñera** Minister of Labor, with — as the scholarship on the episode puts it — the mission of stopping the boycott and building new labor institutions (Álvarez, 2012). Piñera moved fast. In mid-1979 the government issued the decree laws of the **Plan Laboral**; once the framework restoring legal union activity and collective bargaining was announced, **the AFL-CIO suspended the boycott**.

Read that sequence carefully, because both of its halves matter and honest people emphasise different ones:

- **Half one: international labor solidarity worked.** A dictatorship that had annihilated its labor movement was forced, by pressure from workers in *other countries*, to restore legal unions and legal bargaining. If the anchor course's ILO lesson left you bleak about international enforcement — here is a case where the informal kind, a boycott threat, moved a military government in months. File it next to the USMCA mechanism from the Mexico course as the track's rare good news about cross-border leverage.
- **Half two: the regime turned compliance into architecture.** The junta did not concede the old system back. It used the moment to write a *new* one — a labor code that satisfied the formal demand ("unions and bargaining must be legal again") while deliberately engineering the result it wanted ("...and organised labor must never again be what it was in 1973"). The boycott forced *a* labor law into existence; the dictatorship decided *which* labor law.

One more piece of context you need before Section 3, because it is part of the honest picture: **within the regime, the argument was not between the Plan Laboral and something more generous — it was between the Plan Laboral and nothing.** The junta contained hardliners who wanted no independent unions at all, indefinitely. Piñera's design, which legalised unions but atomised them, won that internal argument. Keep this in mind when you hear his defense steelmanned in Section 3: measured against 1973, the Plan was a cage; measured against 1976, it was a door — a door built by a regime that controlled exactly how far it would open.

:::reveal Why did the Pinochet dictatorship, six years after destroying the labor movement, suddenly write a labor code in 1979? ||| Because international union pressure — Chile's Grupo de los Diez plus the AFL-CIO and transport unions preparing a boycott of Chilean exports in foreign ports — made the legal vacuum untenable for an export economy. Pinochet appointed José Piñera (late 1978) to stop the boycott and build new institutions; the Plan Laboral restored legal unions and bargaining, the AFL-CIO suspended the boycott — and the regime used the moment to write the rules to its own design.

## Sources
- Álvarez, R. (2012). El Plan Laboral y la negociación colectiva: ¿origen de un nuevo sindicalismo en Chile? 1979–1985. *Boletín del Instituto de Historia Argentina y Americana "Dr. Emilio Ravignani"*, (35/36). https://www.scielo.org.ar/scielo.php?script=sci_arttext&pid=S0524-97672012000200004
- Piñera, J. (1990). *La revolución laboral en Chile*. Zig-Zag. https://www.economiaysociedad.cl/
- Memoria Chilena, Biblioteca Nacional de Chile. (n.d.). *Sindicalismo en Chile durante la dictadura militar*. https://www.memoriachilena.gob.cl/`,
      recallContent: [
        {
          prompt: "What was the Grupo de los Diez, and what international pressure did the labor vacuum provoke by 1978?",
          answer:
            "A group of surviving Chilean union leaders who kept pressing the regime and reached out abroad. By 1978 the AFL-CIO and international transport unions were preparing a commercial boycott of Chilean exports — longshoremen refusing Chilean cargo — demanding an end to labor-rights violations. For an export economy, that threat had teeth.",
        },
        {
          prompt: "State both halves of the boycott-to-Plan sequence that 'honest people emphasise differently.'",
          answer:
            "Half one: international solidarity worked — foreign union pressure forced a dictatorship to restore legal unions and bargaining within months. Half two: the regime turned compliance into architecture — it wrote a new code that met the formal demand while engineering organised labor's permanent weakness. The boycott forced A labor law; the dictatorship chose WHICH one.",
        },
      ],
    },
    {
      slug: "chile-quiz-2",
      title: "Section 2 quiz · The destruction, 1973–1979",
      section: "Section 2 · The destruction, 1973–1979",
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
              "The coup of 11 September 1973 began a dictatorship that lasted sixteen and a half years — and destroying the labor movement was one of its objects, not a side effect.",
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
              "It did not function at all — bargaining was suspended, union elections banned, and wages set by government decree",
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
              "More than 3,000 people killed or disappeared by agents of the dictatorship — findings of the Chilean state's own truth commissions",
              "Only economic statistics",
              "The results of the 1988 plebiscite",
            ],
            correctIndex: 1,
            explanation:
              "These are findings, not allegations — documented by commissions Chile's own democracy created, with union officers and labor activists heavily represented among the victims.",
            sourceLessonSlug: "chile-coup-and-repression",
          },
          {
            prompt: "Who was Tucapel Jiménez?",
            options: [
              "The author of the Plan Laboral",
              "The president of the public employees' association ANEF, murdered by state intelligence agents in 1982 — a crime for which Chilean courts later convicted the perpetrators",
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
              "Because repression fell on the whole society, and the labor movement was not merely a victim — copper miners called the first mass national protest against the regime in May 1983",
              "Because statistics are always misleading",
              "Because the union movement collaborated with the regime",
            ],
            correctIndex: 1,
            explanation:
              "Both halves are true: heavy victimisation, and early, brave resistance — the mid-1980s protest cycle began with a miners' call.",
            sourceLessonSlug: "chile-coup-and-repression",
          },
          {
            prompt: "What foreign pressure pushed the dictatorship toward writing a labor code in 1979?",
            options: [
              "A United Nations invasion",
              "A threatened commercial boycott of Chilean exports by the AFL-CIO and international transport unions — longshoremen refusing Chilean cargo",
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
              "To stop the boycott and build new labor institutions — which became the 1979 Plan Laboral, after whose announcement the AFL-CIO suspended the boycott",
              "To negotiate Chile's entry into the ILO",
              "To dissolve the remaining unions permanently",
            ],
            correctIndex: 1,
            explanation:
              "The scholarship on the episode is direct: stop the boycott, build new institutions. The Plan restored legal unionism — on the regime's terms.",
            sourceLessonSlug: "chile-boycott-to-plan",
          },
          {
            prompt: "What is 'half one' of the boycott story — the part that is genuinely good news?",
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
            prompt: "What is 'half two' — the catch?",
            options: [
              "The boycott was never real",
              "The regime turned compliance into architecture: it wrote a NEW code that met the formal demand while deliberately engineering organised labor's weakness — the boycott forced A labor law; the dictatorship chose WHICH one",
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
              "Nothing — junta hardliners wanted no independent unions at all, indefinitely; Piñera's legalise-but-atomise design won that internal argument",
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
              "The singer-songwriter of the labor and student movements, detained, tortured, and killed in the Estadio Chile days after the coup — with former officers convicted decades later",
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
              "It presented itself abroad as modernizing, ran an export economy exposed to foreign union action, and by 1978 faced a concrete boycott threat — a labor market with no labor law was untenable",
              "The junta lost a plebiscite on the question",
              "The ILO expelled Chile",
            ],
            correctIndex: 1,
            explanation:
              "Exposure — reputational and commercial — is what converted six years of nothing into the 1979 design.",
            sourceLessonSlug: "chile-boycott-to-plan",
          },
          {
            prompt: "When the copper miners' confederation called the first mass national protest against the regime, what year was it?",
            options: ["1974", "1983", "1990", "2006"],
            correctIndex: 1,
            explanation:
              "May 1983 — the call that grew into the mid-1980s protest cycle, and proof the movement was an actor in the story, not only a victim.",
            sourceLessonSlug: "chile-coup-and-repression",
          },
        ],
      },
    },
  ],
};
