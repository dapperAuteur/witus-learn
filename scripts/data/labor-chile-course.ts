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
  ],
};
