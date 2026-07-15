// Authored "Pan-Africanism: The Idea, the Movement, the Reckoning" — a Culture & History course
// on Learn.WitUS (BVC), for high school students (and adult learners). This is the ANCHOR /
// entry-point course of a proposed Pan-Africanism track (see
// plans/future-courses/pan-africanism-track-proposal.md) — each follow-on (the Congresses,
// Garvey & the UNIA, Du Bois, Nkrumah & OAU→AU, Négritude, Rastafari & Ethiopia, the
// diaspora-vs-continent tension, the post-independence critiques) gets its own deep course later;
// THIS course is the movement's overview and connective tissue.
//
// THE HARD JOB THIS COURSE DOES (read before editing):
// Pan-Africanism is usually taught as either a hagiography (a parade of heroes) or not at all.
// This course teaches the movement's real arc — the idea born in the diaspora, the Congresses,
// Garvey AND his fall, Nkrumah AND his Preventive Detention Act, the OAU's liberation record AND
// its silence while Idi Amin chaired it — because a celebration-only course isn't credible, and
// the movement's own documents are strong enough not to need one.
//
// HARD RULES THIS FILE KEEPS (do not relax without BAM's editorial sign-off):
//  1. QUOTES: verbatim only where the wording is verified against a locatable primary text
//     (Du Bois's 1900 "colour line" address; his May 1924 Crisis "lunatic or a traitor" attack;
//     Hoover's 1919 "notorious negro agitator" memo fragment; Psalm 68:31 KJV; Sartre's
//     "anti-racist racism"; OAU/AU treaty text; Touré's 1958 "poverty in freedom" as the standard
//     translation, labeled as such). Where wording varies across transcriptions (Nkrumah's
//     midnight speech; Selassie's Geneva appeal, delivered in Amharic; Soyinka's "tigritude"
//     quip), the course SAYS SO in-line. Famous but unverifiable quotes are taught AS
//     unverifiable — the "Look to Africa" prophecy attributed to Garvey is the set-piece example.
//     NEVER a reconstructed quote presented as verbatim.
//  2. GARVEY IS TAUGHT HONESTLY: the UNIA's unmatched scale and ambition AND the Black Star
//     Line's collapse, the mail-fraud conviction, the KKK meeting — and, with equal honesty,
//     the documented evidence that the prosecution was politically driven (Hoover's 1919 memo).
//     Both are true at once; neither cancels the other.
//  3. THE STRONGMEN ARE NAMED: leaders who used pan-African rhetoric while ruling by detention
//     and fear (Nkrumah's PDA and Danquah's death in Nsawam; Touré's Camp Boiro, where the OAU's
//     own first secretary-general Diallo Telli died; Amin chairing the OAU in 1975; Mobutu's
//     "authenticité"; Gaddafi as AU patron). Every count/estimate is attributed and hedged.
//  4. Every date is sourced, not recalled. Contested numbers (UNIA membership, Amin's dead,
//     Camp Boiro's dead) are presented as contested, with the range and the source named.
//  5. Cross-links, not duplication: precolonial African history is taught in "Africa Before
//     Colonization: The Documented Record" and the Afrocentricity paradigm debate in
//     "Afrocentricity: How to Evaluate a Contested Paradigm" (both shipped) — this course
//     points at them and does not re-teach them.
//
// House style: `section` on every lesson; single-line `:::reveal <q> ||| <a>` self-checks (answer
// NOT spelled out in prose beneath); a quiz per section with a bank of ~15 (so the 10-question
// serving cap actually rotates); `sourceLessonSlug` + `explanation` on every quiz question;
// `recallContent` spaced-recall cards on the previous lesson; APA 7 in-line + a `## Sources`
// bibliography per content lesson. Spine sources: Adi's *Pan-Africanism: A History* (2018),
// Padmore's 1947 Manchester report, Du Bois's and Garvey's own writings, the OAU Charter and AU
// Constitutive Act.

import type { AuthoredCourse } from "./authored-course";

export const PAN_AFRICANISM_COURSE: AuthoredCourse = {
  title: "Pan-Africanism: The Idea, the Movement, the Reckoning",
  description:
    "In July 1900, a few dozen people met in a London town hall and gave a name to an idea: that Africans and people of African descent everywhere share a linked history and a linked destiny, and ought to act together. Within one lifetime that idea helped end colonial rule on a continent, built the Organisation of African Unity and then the African Union, and left its colors on dozens of flags. This is the anchor course of the Pan-Africanism track: the nineteenth-century roots and Edward Wilmot Blyden, Henry Sylvester Williams and the 1900 conference, Du Bois's Congresses and the pivotal Manchester Congress of 1945, Garvey and the UNIA taught honestly (the unmatched ambition AND the Black Star Line's collapse and the fraud conviction), Nkrumah and Ghana 1957, the OAU-to-AU arc, Négritude and its Harlem Renaissance bridge, Rastafari and Ethiopia as symbol versus fact — and the reckoning: the movement's internal tensions and the strongmen who wore its language while ruling by fear. Celebration-only history isn't credible, and this movement's documents are strong enough not to need it. Every date sourced; famous quotes verbatim-verified or explicitly flagged; APA 7 citations and a Sources list on every lesson. Built for high school students and adult learners.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 — The Idea and Its Roots (to 1900)
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "what-pan-africanism-is",
      title: "1 · What Pan-Africanism is",
      section: "The Idea and Its Roots (to 1900)",
      body: `Start with the strangest true fact about Pan-Africanism: the idea that all Africans belong together was largely invented **outside Africa** — by the descendants of people the slave trade had carried away.

**A working definition.** *Pan-Africanism* is the idea that Africans on the continent and people of African descent everywhere — the **diaspora** in the Americas, the Caribbean, and Europe — share a linked history and a linked destiny, and ought to **act together**. Historians who study it, like Hakim Adi, stress that it was never one organization or one doctrine; it is better described as a family of movements with a common premise (Adi, 2018; Esedebe, 1994). Inside that premise sit two distinct claims, and keeping them apart will help you all course long:

- **The solidarity claim:** what happens to Black people anywhere concerns Black people everywhere — an injury in Johannesburg or Mississippi is everyone's business.
- **The unity project:** that solidarity should be *organized* — into congresses, mass movements, and ultimately united African states.

Almost everyone in this course accepts the first claim. The fights — and there are many — are about the second: unity *how*, led by *whom*, and at what cost.

**Why the diaspora invented it.** The Atlantic slave trade scattered roughly twelve and a half million captives across an ocean (the documented numbers are taught in this platform's course *Africa Before Colonization: The Documented Record*). The people it took were Asante, Kongo, Yoruba, Wolof — not "Africans"; that continental identity meant little to anyone in the sixteenth century. It was **in slavery's aftermath**, in places where origin-differences had been deliberately erased and one condition imposed on all, that people began to think of themselves as one African people with one cause (Adi, 2018; Shepperson, 1962). The idea then traveled *back* across the Atlantic — carried by emigrants, missionaries, students, and eventually congress delegates — until Africans on the continent made it their own and turned it against colonial rule.

**What Pan-Africanism is not (and where we teach those).** Three neighbors are easy to confuse with it:

- **Afrocentricity** — a specific, contested *scholarly paradigm* about how to do scholarship (Molefi Kete Asante's term). This platform teaches it separately, in *Afrocentricity: How to Evaluate a Contested Paradigm*. Pan-Africanism is a *political* project, older and broader.
- **Black nationalism** — political self-determination for Black people *within* one country. It overlaps Pan-Africanism (Garvey was both) but has no necessary continental horizon.
- **Négritude** — the francophone *cultural* movement of Césaire and Senghor. It is part of the Pan-African family, and Section 5 teaches it as such.

**Where the word comes from.** People acted pan-African before anyone said "Pan-African": the earliest documented uses of the term cluster around the circle of **Henry Sylvester Williams**, the Trinidadian law student whose African Association convened the first **Pan-African Conference** in London in July 1900 (Geiss, 1974; Sherwood, 2011). Lesson 3 tells that story; Lesson 2 covers the century of roots that made it possible.

**How this course will treat the movement.** With documents, and with both hands. Pan-Africanism's achievements are real: it trained the generation that decolonized a continent, and it built institutions that still exist. Its failures are real too: leaders who preached African unity and ruled by detention and fear, congresses that excluded the masses they spoke for, a union that never came. A course that told you only the first half would be advertising, not history — and this movement's own record is strong enough not to need advertising.

:::reveal Pan-Africanism bundles two distinct claims — what are they, and which one do the movement's internal fights concern? ||| The solidarity claim (what happens to Black people anywhere concerns Black people everywhere) and the unity project (that solidarity should be organized — into congresses, movements, and ultimately united African states). The fights are almost all about the second: unity how, led by whom, at what cost.

## Sources
- Adi, H. (2018). *Pan-Africanism: A history*. Bloomsbury Academic.
- Esedebe, P. O. (1994). *Pan-Africanism: The idea and movement, 1776–1991* (2nd ed.). Howard University Press.
- Geiss, I. (1974). *The Pan-African movement: A history of Pan-Africanism in America, Europe and Africa* (A. Keep, Trans.). Africana Publishing.
- Sherwood, M. (2011). *Origins of Pan-Africanism: Henry Sylvester Williams, Africa, and the African diaspora*. Routledge.
- Shepperson, G. (1962). Pan-Africanism and "Pan-Africanism": Some historical notes. *Phylon, 23*(4), 346–358.`,
    },
    {
      slug: "nineteenth-century-roots",
      title: "2 · Nineteenth-century roots: emigration, Ethiopianism, and Blyden",
      section: "The Idea and Its Roots (to 1900)",
      recallContent: [
        {
          prompt: "Why was the pan-African idea largely invented in the diaspora rather than on the continent?",
          answer: "The people the slave trade took were Asante, Kongo, Yoruba, Wolof — 'African' meant little to anyone in that era. It was in slavery's aftermath, where origin-differences had been erased and one condition imposed on all, that people began to see themselves as one African people with one cause; the idea then traveled back across the Atlantic.",
        },
        {
          prompt: "How does Pan-Africanism differ from Afrocentricity?",
          answer: "Pan-Africanism is a political project (organized unity of Africans and the diaspora); Afrocentricity is a specific, contested scholarly paradigm about how to do scholarship — taught separately on this platform.",
        },
      ],
      body: `A full century before anyone convened a Pan-African congress, people in the diaspora were already acting on the idea. Three currents fed the movement: **emigration**, **Ethiopianism**, and the intellectual work of **Edward Wilmot Blyden**.

**Current one: emigration — "back to Africa," in several rival versions.** In 1815–16, **Paul Cuffe**, a Black Quaker sea captain and shipowner from Massachusetts, carried thirty-eight Black American settlers to Sierra Leone largely at his own expense — the first organized return led by a Black man (Adi, 2018; Esedebe, 1994). Then came the complication: in 1816, white Americans founded the **American Colonization Society (ACS)** to transport free Black people to West Africa — a project many of its backers supported precisely because they wanted free Black people *out* of the United States. Free Black communities saw the trap at once. In January 1817, some three thousand Black Philadelphians packed Richard Allen's Bethel AME Church and rejected colonization, resolving that they would "never separate ourselves voluntarily from the slave population in this country" (resolutions reprinted in Garrison, 1832). Hold that tension: *emigration chosen by Black people* and *removal designed by white people* could look identical from a distance and were opposites up close. The ACS nevertheless planted settlers on the West African coast from 1822; their colony declared itself the independent republic of **Liberia** in 1847. Honesty requires the next sentence too: the Americo-Liberian settler class dominated the indigenous peoples of the territory for more than a century — the returnees built their own hierarchy (Adi, 2018).

Emigrationism revived in the 1850s, when US law turned harder against free Black people. **Martin Delany** — physician, editor, later the first Black field-grade officer in the US Army — argued in *The Condition, Elevation, Emigration, and Destiny of the Colored People of the United States* (1852) that Black Americans were "a nation within a nation" who should build a nation of their own, and in 1859–60 he led the Niger Valley Exploring Party to present-day Nigeria, signing a settlement agreement with rulers at Abeokuta (an agreement that was later disavowed and came to nothing — but the round trip itself made the argument physical) (Delany, 1852; Adi, 2018). Alongside him stands **Alexander Crummell**, the Cambridge-educated priest who spent two decades (1853–1872) in Liberia arguing that the diaspora's educated elite owed Africa its talents (Moses, 1989).

**Current two: Ethiopianism — the idea in its church clothes.** Black congregations in the Americas had long read one Bible verse as a promise about their whole people: "Princes shall come out of Egypt; Ethiopia shall soon stretch out her hands unto God" (Psalm 68:31, King James Version). "Ethiopia" in older English usage meant Black Africa generally, and **Ethiopianism** — the conviction that Africa had a divinely appointed redemption coming, and that the diaspora would help deliver it — became the movement's emotional engine decades before its political vocabulary existed (Shepperson, 1968; Adi, 2018). You can hear it in the names: the *African* Methodist Episcopal Church (1816), the breakaway *Ethiopian* churches that appeared in southern Africa in the 1890s. File this current away carefully — it returns in Section 5, when an actual Ethiopian emperor is crowned in 1930 and a movement in Jamaica reads the news as prophecy fulfilled.

**Current three: Blyden — the first systematic thinker.** **Edward Wilmot Blyden** (1832–1912) was born in St. Thomas in the Danish West Indies, was turned away from American theological colleges because he was Black, and emigrated to Liberia in 1851, where he became a professor, a diplomat, and Liberia's secretary of state (Lynch, 1967). Blyden did something none of the emigrationists had done: he built an *argument*. In books like *Christianity, Islam and the Negro Race* (1887) and in a famous 1893 lecture in Freetown, he argued that Africans possess a distinct **"African personality"** — a civilizational character of their own, not a deficient copy of Europe's — and that Africa's development had to grow from African institutions rather than imported ones (Blyden, 1887; Lynch, 1967). That phrase had a long afterlife: Kwame Nkrumah revived "the African Personality" as a slogan of state in the 1950s (Section 4). Honesty again: Blyden's thought had documented strangenesses — he admired Islam's reach in Africa while serving Christian institutions, and his writings disparaged mixed-race elites with a race-purity edge that reads as poisonous now (Lynch, 1967). The course's rule, here and everywhere: take the contribution, document the flaws, canonize no one.

By 1900, then, the parts existed: organized return, a redemption theology, a named idea of African distinctness. What did not yet exist was a *political instrument* — a body that could speak for the scattered people. A Trinidadian law student in London built the first one.

:::reveal Name the three nineteenth-century currents that fed Pan-Africanism, and one representative of each. ||| Emigration ("back to Africa" — Paul Cuffe's 1815–16 Sierra Leone voyage, Martin Delany's 1859–60 Niger Valley expedition, against the white-led ACS version that founded Liberia); Ethiopianism (the Psalm 68:31 redemption theology — the AME and "Ethiopian" churches); and the intellectual work of Edward Wilmot Blyden (the "African personality," argued in his 1887 book and 1893 Freetown lecture).

## Sources
- Adi, H. (2018). *Pan-Africanism: A history*. Bloomsbury Academic.
- Blyden, E. W. (1887). *Christianity, Islam and the Negro race*. W. B. Whittingham.
- Delany, M. R. (1852). *The condition, elevation, emigration, and destiny of the colored people of the United States*. Author.
- Esedebe, P. O. (1994). *Pan-Africanism: The idea and movement, 1776–1991* (2nd ed.). Howard University Press.
- Garrison, W. L. (1832). *Thoughts on African colonization*. Garrison & Knapp. (Reprints the January 1817 Philadelphia resolutions.)
- Lynch, H. R. (1967). *Edward Wilmot Blyden: Pan-Negro patriot 1832–1912*. Oxford University Press.
- Moses, W. J. (1989). *Alexander Crummell: A study of civilization and discontent*. Oxford University Press.
- Shepperson, G. (1968). Ethiopianism: Past and present. In C. G. Baëta (Ed.), *Christianity in tropical Africa* (pp. 249–264). Oxford University Press.`,
    },
    {
      slug: "london-1900",
      title: "3 · London, 1900: the word gets a movement",
      section: "The Idea and Its Roots (to 1900)",
      recallContent: [
        {
          prompt: "What was the difference between Paul Cuffe's voyage and the American Colonization Society's project, which could look identical from a distance?",
          answer: "Cuffe's 1815–16 voyage was emigration chosen and financed by a Black man; the ACS (1816) was a white-led removal scheme — many backers wanted free Black people out of the United States. Three thousand Black Philadelphians rejected it at Bethel AME in January 1817.",
        },
        {
          prompt: "What did Blyden mean by the 'African personality,' and who later revived the phrase?",
          answer: "That Africans possess a distinct civilizational character of their own — not a deficient copy of Europe's — so African development must grow from African institutions. Kwame Nkrumah revived 'the African Personality' as a slogan of state in the 1950s.",
        },
      ],
      body: `The first Pan-African Conference was small enough to fit in one photograph. What it started did not stay small.

**The organizer.** **Henry Sylvester Williams** (1869–1911) was born in Arouca, Trinidad, worked as a schoolteacher, and came to London in the 1890s to study law at Gray's Inn. In September 1897 he founded the **African Association**, an organization to defend the rights and interests of people of African descent across the British Empire — petitions, publicity, parliamentary pressure (Sherwood, 2011). Its ambition outgrew its letterhead almost immediately: Williams began planning a meeting that would bring the scattered people into one room.

**The conference.** On **23–25 July 1900**, at Westminster Town Hall in London, Williams convened the **Pan-African Conference** — the first meeting ever held under that name (Sherwood, 2011; Adi, 2018). A few dozen delegates attended from the United States, the Caribbean, Britain, and West and southern Africa. **Bishop Alexander Walters** of the AME Zion Church presided. The educator and author **Anna Julia Cooper** — whose *A Voice from the South* (1892) had already made her one of Black America's leading intellectuals — addressed the conference, one of the women whose presence at the movement's founding is routinely forgotten in the retelling (Sherwood, 2011). The composer **Samuel Coleridge-Taylor** took part. On the agenda: the condition of Black people in the empire, and especially in southern Africa, where the South African War was then being fought.

**The sentence that outlived the meeting.** The conference closed with an "Address to the Nations of the World," drafted by a committee chaired by a 32-year-old American sociologist named **W. E. B. Du Bois**. It opened with a warning the twentieth century spent a hundred years confirming: "the problem of the Twentieth Century is the problem of the colour line" (Du Bois, 1900). Du Bois thought the line good enough to reuse — it reappears in *The Souls of Black Folk* three years later — but it was written first for this document, addressed to the world's governments on behalf of a people no government represented. The conference also petitioned Queen Victoria over the treatment of Africans in southern Africa; the reply from the Colonial Office was polite and committed to nothing (Sherwood, 2011).

**What happened next — the honest version.** Institutionally, almost nothing. The follow-up committees withered within two years; no second conference met on Williams's schedule. Williams himself practiced law in Cape Town, won election as a borough councillor in Marylebone, London in 1906 — among the earliest Black elected officials in Britain — returned to Trinidad, and died in 1911, aged only 42, largely unremembered (Sherwood, 2011). If you measure 1900 by immediate results, it failed.

**Why it still matters.** Three reasons. First, **the name**: "Pan-African" now existed as a word attached to a real event, and words organize thinking — the earliest documented uses of the term cluster around Williams's circle (Geiss, 1974). Second, **the method**: an international congress of the diaspora, speaking *as* Africans and their descendants to the powers — that format is exactly what Du Bois would revive in 1919 and what Manchester would weaponize in 1945 (Section 2). Third, **the succession**: the young committee chairman who drafted the closing address took the tool home with him. Williams built the instrument; Du Bois would play it for the next half century.

:::reveal What concretely came out of the 1900 London conference, given that its organization withered within two years? ||| The name (the first event ever called "Pan-African" — the word now organized the idea), the method (an international congress of Africans and the diaspora addressing the world's powers — the format Du Bois revived in 1919 and Manchester weaponized in 1945), and the succession (Du Bois, who chaired the committee that drafted the closing address with its "colour line" warning, carried the tool forward).

## Sources
- Adi, H. (2018). *Pan-Africanism: A history*. Bloomsbury Academic.
- Du Bois, W. E. B. (1900). *To the nations of the world* [Address]. Pan-African Conference, London.
- Geiss, I. (1974). *The Pan-African movement* (A. Keep, Trans.). Africana Publishing.
- Sherwood, M. (2011). *Origins of Pan-Africanism: Henry Sylvester Williams, Africa, and the African diaspora*. Routledge.
- Walters, A. (1917). *My life and work*. Fleming H. Revell.`,
    },
    {
      slug: "quiz-the-idea-and-its-roots",
      title: "4 · Quiz: The Idea and Its Roots",
      section: "The Idea and Its Roots (to 1900)",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Pan-Africanism bundles two distinct claims. Which pair states them correctly?",
            options: [
              "The solidarity claim (Black people everywhere share each other's concerns) and the unity project (that solidarity should be organized, up to united African states)",
              "The scholarship claim (re-center analysis on Africa) and the paradigm claim (lenses are debatable)",
              "The emigration claim (everyone must return to Africa) and the theology claim (redemption is divinely scheduled)",
              "The trade claim (Africa should industrialize) and the border claim (colonial borders must be redrawn immediately)",
            ],
            correctIndex: 0,
            explanation:
              "The solidarity claim is near-universal inside the movement; the fights are about the unity project — unity how, led by whom, at what cost. Keeping the two apart explains most of the course's conflicts.",
            sourceLessonSlug: "what-pan-africanism-is",
          },
          {
            prompt: "Why does the course say the pan-African idea was largely invented OUTSIDE Africa?",
            options: [
              "The slave trade's captives were Asante, Kongo, Yoruba, Wolof — 'African' as an identity was forged in the diaspora, where origin-differences had been erased, and then traveled back",
              "Because no one on the continent was interested in politics before 1900",
              "Because European colonizers invented the idea and exported it",
              "Because the word 'Africa' did not exist until the twentieth century",
            ],
            correctIndex: 0,
            explanation:
              "Continental identity meant little to anyone in the sixteenth century. It was in slavery's aftermath — one imposed condition, origin-differences deliberately erased — that people began to see themselves as one African people; the idea then traveled back across the Atlantic (Adi, 2018).",
            sourceLessonSlug: "what-pan-africanism-is",
          },
          {
            prompt: "How is Pan-Africanism different from Afrocentricity?",
            options: [
              "Pan-Africanism is a political project of organized unity; Afrocentricity is a specific, contested scholarly paradigm (taught separately on this platform)",
              "They are two spellings of the same movement",
              "Afrocentricity is the older, broader political movement; Pan-Africanism is a branch of it",
              "Pan-Africanism concerns only ancient history; Afrocentricity only modern politics",
            ],
            correctIndex: 0,
            explanation:
              "Afrocentricity is Asante's named academic paradigm about how to do scholarship; Pan-Africanism is the older, broader political project. The platform teaches them as separate courses for exactly this reason.",
            sourceLessonSlug: "what-pan-africanism-is",
          },
          {
            prompt: "What distinguished Paul Cuffe's 1815–16 voyage from the American Colonization Society's project?",
            options: [
              "Cuffe's was emigration chosen and financed by a Black shipowner; the ACS was a white-led scheme many of whose backers wanted free Black people removed from the US",
              "Cuffe worked for the ACS as its first sea captain",
              "The ACS project was run entirely by Black churches",
              "There was no difference; both were branches of the same organization",
            ],
            correctIndex: 0,
            explanation:
              "The two could look identical from a distance — ships carrying Black settlers to West Africa — and were opposites up close: chosen return versus designed removal. Black Philadelphia saw the difference immediately in 1817.",
            sourceLessonSlug: "nineteenth-century-roots",
          },
          {
            prompt: "What happened at Richard Allen's Bethel AME Church in Philadelphia in January 1817?",
            options: [
              "Some three thousand free Black people rejected ACS colonization, resolving never to 'separate ourselves voluntarily from the slave population in this country'",
              "The first Pan-African Conference was held there",
              "The congregation voted to fund the ACS's first ship",
              "Martin Delany announced his Niger Valley expedition",
            ],
            correctIndex: 0,
            explanation:
              "The 1817 meeting is the documented moment free Black America distinguished chosen emigration from designed removal — solidarity with the enslaved outweighed any 'fancied advantages' of leaving (resolutions reprinted in Garrison, 1832).",
            sourceLessonSlug: "nineteenth-century-roots",
          },
          {
            prompt: "Which honest complication does the course attach to Liberia (settled 1822, independent 1847)?",
            options: [
              "The Americo-Liberian settler class dominated the territory's indigenous peoples for more than a century — the returnees built their own hierarchy",
              "Liberia was never actually settled by anyone from the Americas",
              "Liberia immediately joined the British Empire",
              "The settlers all returned to the United States by 1850",
            ],
            correctIndex: 0,
            explanation:
              "The course's rule is both hands: Liberia is a real landmark of return AND its settler class ruled over indigenous peoples for over a century. Take the contribution, document the flaw.",
            sourceLessonSlug: "nineteenth-century-roots",
          },
          {
            prompt: "What is Ethiopianism?",
            options: [
              "The conviction — anchored on Psalm 68:31 — that Africa had a divinely appointed redemption coming and the diaspora would help deliver it",
              "The foreign policy of the Ethiopian empire in the nineteenth century",
              "A scholarly paradigm coined by Molefi Kete Asante",
              "The doctrine that all Black churches must relocate to Ethiopia",
            ],
            correctIndex: 0,
            explanation:
              "'Ethiopia' in older English usage meant Black Africa generally. Ethiopianism was the movement's emotional engine before its political vocabulary existed — and it returns in Section 5 when an actual Ethiopian emperor is crowned in 1930.",
            sourceLessonSlug: "nineteenth-century-roots",
          },
          {
            prompt: "Edward Wilmot Blyden's signature idea was:",
            options: [
              "The 'African personality' — a distinct African civilizational character, meaning development must grow from African institutions rather than imported ones",
              "That Africans should assimilate completely into European culture",
              "That emigration to Africa should be banned",
              "That the Bible should not be read in African churches",
            ],
            correctIndex: 0,
            explanation:
              "Argued in Christianity, Islam and the Negro Race (1887) and an 1893 Freetown lecture. Nkrumah revived 'the African Personality' as a state slogan in the 1950s — Blyden is the movement's first systematic thinker.",
            sourceLessonSlug: "nineteenth-century-roots",
          },
          {
            prompt: "Which documented flaw in Blyden does the course teach alongside his contribution?",
            options: [
              "His writings disparaged mixed-race elites with a race-purity edge (while he also admired Islam's reach despite serving Christian institutions)",
              "He fabricated his Liberian diplomatic career",
              "He secretly worked for the American Colonization Society's removal agenda his whole life",
              "He opposed all education for Africans",
            ],
            correctIndex: 0,
            explanation:
              "Lynch's biography documents both the achievement and the strangenesses. The course's rule: take the contribution, document the flaws, canonize no one.",
            sourceLessonSlug: "nineteenth-century-roots",
          },
          {
            prompt: "Who convened the first Pan-African Conference, and when and where did it meet?",
            options: [
              "Henry Sylvester Williams, a Trinidadian law student — 23–25 July 1900, Westminster Town Hall, London",
              "W. E. B. Du Bois — February 1919, Paris",
              "Marcus Garvey — August 1920, Madison Square Garden, New York",
              "Kwame Nkrumah — October 1945, Manchester",
            ],
            correctIndex: 0,
            explanation:
              "Williams's African Association (founded 1897) convened the July 1900 London conference — the first meeting ever held under the 'Pan-African' name. The 1919, 1920, and 1945 events came later and are taught in Sections 2–3.",
            sourceLessonSlug: "london-1900",
          },
          {
            prompt: "What role did W. E. B. Du Bois play at the 1900 conference?",
            options: [
              "He chaired the committee that drafted the closing 'Address to the Nations of the World,' with its warning that 'the problem of the Twentieth Century is the problem of the colour line'",
              "He presided over the whole conference as its bishop",
              "He funded the conference from his shipping fortune",
              "He refused to attend and denounced it in print",
            ],
            correctIndex: 0,
            explanation:
              "The 32-year-old Du Bois drafted the closing address; he reused its 'colour line' sentence in The Souls of Black Folk (1903). Bishop Alexander Walters presided over the conference itself.",
            sourceLessonSlug: "london-1900",
          },
          {
            prompt: "Which woman addressed the 1900 Pan-African Conference — a presence the retelling routinely forgets?",
            options: [
              "Anna Julia Cooper, author of A Voice from the South (1892)",
              "Amy Ashwood Garvey",
              "Paulette Nardal",
              "Ida B. Wells",
            ],
            correctIndex: 0,
            explanation:
              "Cooper, one of Black America's leading intellectuals, addressed the founding conference (Sherwood, 2011). Amy Ashwood Garvey and Paulette Nardal enter the story later — 1945 Manchester and 1930s Paris respectively.",
            sourceLessonSlug: "london-1900",
          },
          {
            prompt: "Measured by immediate institutional results, the 1900 conference failed — its committees withered within two years. Why does the course teach it as a founding moment anyway?",
            options: [
              "It created the name, the congress method (the diaspora addressing the powers as one body), and the succession — Du Bois carried the tool forward",
              "Because it secretly governed Britain's colonies for a decade",
              "Because Queen Victoria granted all of its petitions",
              "Because it immediately triggered decolonization",
            ],
            correctIndex: 0,
            explanation:
              "The Colonial Office reply committed to nothing and no second conference met on schedule. But the word, the format, and the successor (Du Bois, who revived the congress in 1919) all date from London 1900.",
            sourceLessonSlug: "london-1900",
          },
          {
            prompt: "What became of Henry Sylvester Williams after 1900?",
            options: [
              "He practiced law in Cape Town, won election as a Marylebone borough councillor in 1906, returned to Trinidad, and died in 1911, aged 42, largely unremembered",
              "He led Ghana to independence in 1957",
              "He became the first president of Liberia",
              "He organized the 1945 Manchester Congress",
            ],
            correctIndex: 0,
            explanation:
              "Williams was among the earliest Black elected officials in Britain, then died young and obscure — the instrument he built outlived him (Sherwood, 2011).",
            sourceLessonSlug: "london-1900",
          },
          {
            prompt: "Martin Delany's contribution to the emigrationist current was:",
            options: [
              "Arguing (1852) that Black Americans were 'a nation within a nation' and leading the 1859–60 Niger Valley expedition, which signed a later-disavowed settlement agreement at Abeokuta",
              "Founding the American Colonization Society",
              "Serving as Liberia's first secretary of state",
              "Writing the 'Address to the Nations of the World'",
            ],
            correctIndex: 0,
            explanation:
              "Delany made the emigration argument in print and then made it physical with the round trip to present-day Nigeria. Blyden (not Delany) served as Liberia's secretary of state; the ACS was white-founded.",
            sourceLessonSlug: "nineteenth-century-roots",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 — The Congress Movement, 1919–1945
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "congresses-1919-1927",
      title: "5 · Du Bois's Congresses, 1919–1927: petitions in evening dress",
      section: "The Congress Movement, 1919–1945",
      recallContent: [
        {
          prompt: "What three things did the 1900 London conference leave behind, despite its committees withering within two years?",
          answer: "The name ('Pan-African' now attached to a real event), the method (an international congress of the diaspora addressing the powers), and the succession — Du Bois, who drafted the closing address, carried the tool forward.",
        },
        {
          prompt: "Complete Du Bois's 1900 warning: 'the problem of the Twentieth Century is…'",
          answer: "'…the problem of the colour line.' Written first for the 1900 Address to the Nations of the World, reused in The Souls of Black Folk (1903).",
        },
      ],
      body: `In 1919 the victors of the First World War gathered at Versailles to redraw the world. Du Bois decided the world's Black people should be in Paris too — even if they had to meet down the street.

**Paris, February 1919: the First Pan-African Congress.** Du Bois — by now the most prominent Black intellectual in America, a founder of the NAACP and editor of its magazine *The Crisis* — sailed to France as the peace conference convened, and organized a **Pan-African Congress** in Paris with **fifty-seven delegates** from the United States, the Caribbean, and Africa (Du Bois, 1947; Adi, 2018). Getting the room at all was a feat: the US government had refused passports to several intended delegates, and the meeting was only permitted because **Blaise Diagne** — the Senegalese deputy in the French parliament, the first Black African elected to it — used his standing with the French government to authorize it, and presided (Adi, 2018; Geiss, 1974).

Read the 1919 resolutions and notice what they do *not* say. They asked that the former German colonies be held under international supervision rather than simply handed to other empires; that Africans be protected in land, labor, and education; that they *gradually* participate in their own government "as fast as their development permits" — the congress's own cautious phrasing of the era (Du Bois, 1947). **Nobody demanded independence.** This was a petition movement: distinguished men in evening dress asking empires to behave better. Judge it fairly by its context — in 1919 even this was radical enough that governments blocked passports to prevent it — but hold the baseline, because the distance between 1919's "as fast as their development permits" and 1945's demands is how you measure the movement's transformation.

**1921, 1923, 1927: the series, and its limits.** Congresses followed in **1921** (sessions in London, Brussels, and Paris — some 110 delegates), **1923** (London and Lisbon, thinner), and **1927** (New York, the largest, with over two hundred delegates). The 1921 congress produced the *London Manifesto*, declaring "the absolute equality of races" the founding stone of world peace — Du Bois's drafting again — and open friction between Du Bois and Diagne, who found the language dangerously radical and whose loyalty to French colonial policy the radicals found worse (Du Bois, 1947; Geiss, 1974). The 1927 New York congress was financed in large part by Black American women's organizations — Addie W. Hunton and the Circle for Peace and Foreign Relations — a fact worth stating because the movement's money, like much of its organizing, was female more often than its podiums were (Adi, 2018). A planned fifth congress came to nothing for want of funds as the Depression hit; the series stalled for eighteen years.

**The honest audit.** Four congresses, and no colony freer for them. The delegates were overwhelmingly diaspora professionals; the African masses the resolutions spoke *for* were not in the room, and several colonial governments worked to keep it that way. Du Bois himself later wrote candidly about the movement's thinness in these years — a series of meetings held together by his own will and other people's living rooms (Du Bois, 1940). And yet: the congresses kept the instrument alive, built the address book, and trained the argument. When the next generation picked the tool up in 1945, they did not have to invent it — they had to *aim* it.

:::reveal What did the 1919 Paris resolutions ask for, and what did they conspicuously NOT ask for? ||| They asked for international supervision of the former German colonies, protection of Africans in land, labor and education, and gradual participation in government "as fast as their development permits." They did not demand independence — 1919 was a petition movement, and that baseline is how you measure the leap to Manchester 1945.

## Sources
- Adi, H. (2018). *Pan-Africanism: A history*. Bloomsbury Academic.
- Du Bois, W. E. B. (1940). *Dusk of dawn: An essay toward an autobiography of a race concept*. Harcourt, Brace.
- Du Bois, W. E. B. (1947). *The world and Africa*. Viking Press.
- Geiss, I. (1974). *The Pan-African movement* (A. Keep, Trans.). Africana Publishing.`,
    },
    {
      slug: "ethiopia-1935-and-the-london-radicals",
      title: "6 · Ethiopia 1935 and the London radicals",
      section: "The Congress Movement, 1919–1945",
      recallContent: [
        {
          prompt: "Who presided over the 1919 Paris Congress, and why was his involvement indispensable?",
          answer: "Blaise Diagne, the Senegalese deputy in the French parliament — the first Black African elected to it. The US had refused passports to intended delegates; only Diagne's standing with the French government got the meeting authorized at all.",
        },
        {
          prompt: "Who largely financed the 1927 New York Pan-African Congress?",
          answer: "Black American women's organizations — Addie W. Hunton and the Circle for Peace and Foreign Relations. The movement's money and organizing were female more often than its podiums were.",
        },
      ],
      body: `Between Du Bois's stalled congresses and the Manchester explosion stands one radicalizing event and one remarkable city block's worth of people.

**October 1935: Italy invades Ethiopia.** Mussolini's armies attacked the one internationally recognized independent state in Black Africa — the empire that had crushed an Italian invasion at Adwa in 1896 (that battle, and the precision required around "never colonized," are taught in this platform's *Africa Before Colonization*). Ethiopia was Ethiopianism's namesake and the diaspora's living symbol, and the invasion detonated protest across the Black world: mass rallies in Harlem, fundraising and volunteer drives, dockworkers refusing Italian cargo (Adi, 2018; Asante, 1977 — the S. K. B. Asante study of West African responses, not the Afrocentricity theorist). The League of Nations' failure to stop Mussolini taught a generation a brutal lesson: **the international system would not protect even an independent African state.** Petitioning it was therefore a dead end; power would have to be built, not requested. Emperor **Haile Selassie**'s own appeal to the League in Geneva (June 1936) — delivered in Amharic, and remembered in its standard English rendering for the warning "It is us today. It will be you tomorrow." — became one of the century's famous prophecies, confirmed three years later by the World War (Selassie, 1936; Barker, 1968). Section 5 returns to Selassie in a very different register.

**The London milieu.** The response organized itself in London, where a small group of Caribbean and African intellectuals turned outrage into infrastructure. The **International African Friends of Abyssinia** (1935) was founded by, among others, the Trinidadian Marxist historian **C. L. R. James**, the Jamaican pan-Africanist and businesswoman **Amy Ashwood Garvey** (co-founder of the UNIA — Section 3), the Guyanese organizer **T. Ras Makonnen**, and a Kenyan student named **Jomo Kenyatta** (James, 1938/1969; Adi, 2018). In 1937 it evolved into the **International African Service Bureau**, chaired by the Trinidadian **George Padmore**, with James editing its journal. Remember these names: this specific address book becomes the organizing committee of the 1945 Congress.

**Padmore: the connector.** Born Malcolm Nurse in Trinidad in 1903, Padmore had risen inside the Communist International to run its Negro workers' bureau — and broke with the Comintern in 1934 when Soviet foreign policy downgraded anti-imperialism to court alliances with the colonial powers (Padmore, 1956; Hooker, 1967). The break mattered doctrinally: Padmore spent the rest of his life arguing that Black liberation had to be **self-organized** — allied with the left but never subordinate to Moscow — the argument of his book *Pan-Africanism or Communism?* (1956). He became the movement's indispensable man: the organizer, correspondent, and strategist through whom the diaspora's radicals and Africa's future presidents found each other.

**The war sharpens everything.** The Second World War then did what no pamphlet could. The Allies declared it a war for freedom and self-determination — the **Atlantic Charter** (1941) said peoples had the right to choose their own governments, and colonial subjects noticed, even as Churchill assured Parliament that the principle was meant for Nazi-occupied Europe, not the British Empire (Adi, 2018). Hundreds of thousands of African and Caribbean men served; empires that had claimed invincibility lost it at Singapore and elsewhere. By 1944 the London group was planning the congress that the moment demanded — and this time, the delegates would not be professionals in evening dress.

:::reveal Why did Italy's 1935 invasion of Ethiopia radicalize the movement more than any previous colonial outrage? ||| Ethiopia was the diaspora's living symbol — the internationally recognized independent African state, Ethiopianism's namesake, Adwa's victor. When the League of Nations let Mussolini take it, the lesson was that the international system would not protect even an independent African state: petitioning was a dead end, and power would have to be built, not requested.

## Sources
- Adi, H. (2018). *Pan-Africanism: A history*. Bloomsbury Academic.
- Asante, S. K. B. (1977). *Pan-African protest: West Africa and the Italo-Ethiopian crisis, 1934–1941*. Longman.
- Barker, A. J. (1968). *The civilizing mission: A history of the Italo-Ethiopian war of 1935–1936*. Dial Press.
- Hooker, J. R. (1967). *Black revolutionary: George Padmore's path from communism to Pan-Africanism*. Praeger.
- James, C. L. R. (1969). *A history of Pan-African revolt*. Drum and Spear Press. (Original work published 1938 as *A history of Negro revolt*.)
- Padmore, G. (1956). *Pan-Africanism or communism? The coming struggle for Africa*. Dennis Dobson.
- Selassie, H. (1936, June). *Appeal to the League of Nations* [Address]. League of Nations, Geneva. (Delivered in Amharic; quoted in its standard English rendering.)`,
    },
    {
      slug: "manchester-1945",
      title: "7 · Manchester, 1945: the Congress that demanded independence",
      section: "The Congress Movement, 1919–1945",
      recallContent: [
        {
          prompt: "Why did George Padmore break with the Comintern in 1934, and what did he argue afterward?",
          answer: "Soviet foreign policy downgraded anti-imperialism to court alliances with colonial powers. Padmore spent the rest of his life arguing Black liberation must be self-organized — allied with the left but never subordinate to Moscow (Pan-Africanism or Communism?, 1956).",
        },
        {
          prompt: "What did colonial subjects hear in the 1941 Atlantic Charter — and what did Churchill say about that reading?",
          answer: "That peoples have the right to choose their own governments — a promise they applied to themselves. Churchill assured Parliament the principle was meant for Nazi-occupied Europe, not the British Empire.",
        },
      ],
      body: `Five months after the war in Europe ended, the movement's whole future sat in a town hall in the north of England.

**The meeting.** The **Fifth Pan-African Congress** met **15–21 October 1945** at Chorlton-on-Medlock Town Hall, Manchester. The organizing engine was the London group: **George Padmore** and a 36-year-old Gold Coast student newly arrived from America, **Kwame Nkrumah**, served as joint political secretaries; **T. Ras Makonnen** ran money and logistics; **Amy Ashwood Garvey** chaired the opening session (Adi & Sherwood, 1995). Roughly ninety delegates and observers came — and their composition was the revolution. Where 1919 had gathered professionals, Manchester's delegates were **trade unionists, party organizers, students, and farmers' representatives** from across Africa and the Caribbean: the Congress deliberately built itself on workers' organizations (Adi & Sherwood, 1995; Padmore, 1947). Presiding over key sessions, at seventy-seven, was **W. E. B. Du Bois** — the living link to London 1900, honored by the young radicals even as they retired his method.

**The break.** Manchester dropped the petition. Its resolutions **demanded independence** — not supervision, not gradual participation "as fast as development permits," but an end to colonial rule — and endorsed the weapons the delegates actually possessed: mass organization, the strike, and the boycott, with the declarations drafted by Nkrumah calling on colonial workers, farmers, and intellectuals to organize and resist (Padmore, 1947; Adi & Sherwood, 1995). The tone was new because the theory was new: rights would be **taken by organized peoples**, not granted to eloquent petitioners. Padmore's 1947 report on the Congress — *Colonial and Coloured Unity*, the primary document, still in print — reads less like minutes than like a war plan.

**The roll call.** What makes Manchester pivotal is not only what was said but **who said it, and what they did next**. Among the participants: **Kwame Nkrumah**, who twelve years later led Ghana to independence; **Jomo Kenyatta**, later the first president of Kenya; **Hastings Banda**, later the first president of Malawi; the Sierra Leonean trade-union leader **I. T. A. Wallace-Johnson**; the novelist **Peter Abrahams** for South Africa (Adi & Sherwood, 1995). Manchester is the clearest case in the whole story of a meeting that functioned as a **school for heads of state** — and, as Section 6 will insist, that roll call carries the movement's tragedy inside it too, because more than one of those future presidents ruled the way empires had.

**Honest footnotes, before the legend sets.** Three. First, Manchester did not *cause* decolonization by itself — the war's exhaustion of the empires, mass movements at home, and superpower pressure all mattered; the Congress supplied doctrine, network, and nerve. Second, the gathering that spoke for half the world's colonized was itself thin in places — barely any delegates from francophone Africa (the Négritude world of Section 5 was following a different track through Paris), and only a handful of women among the delegates, Amy Ashwood Garvey and the Jamaican trade unionist **Alma La Badie** among them (Adi & Sherwood, 1995; Adi, 2018). Third, the empire noticed: British intelligence kept files on the organizers, and the men Manchester trained went home to jails before they went home to palaces. Within twelve years of Manchester, the first of those jailed organizers raised a new flag over Accra — Section 4's story.

:::reveal Name the three things that made Manchester 1945 different in kind from the 1919–1927 congresses. ||| (1) Composition: trade unionists, organizers, students and farmers' representatives — a workers' congress, not professionals in evening dress; (2) demands: independence outright, with mass organization, strikes and boycotts endorsed as the means — the petition era ended; (3) consequence: its participants (Nkrumah, Kenyatta, Banda) went home and led their countries to independence — a school for heads of state.

## Sources
- Adi, H. (2018). *Pan-Africanism: A history*. Bloomsbury Academic.
- Adi, H., & Sherwood, M. (1995). *The 1945 Manchester Pan-African Congress revisited*. New Beacon Books.
- Nkrumah, K. (1957). *Ghana: The autobiography of Kwame Nkrumah*. Thomas Nelson.
- Padmore, G. (Ed.). (1947). *Colonial and coloured unity: A programme of action — History of the Pan-African Congress*. Pan-African Federation.`,
    },
    {
      slug: "quiz-the-congress-movement",
      title: "8 · Quiz: The Congress Movement",
      section: "The Congress Movement, 1919–1945",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Why did Du Bois convene the First Pan-African Congress in Paris in February 1919?",
            options: [
              "The Versailles peace conference was redrawing the world, and he wanted the world's Black people represented in the city where it was happening",
              "The French government invited the NAACP to help draft the Treaty of Versailles",
              "It was the scheduled follow-up to the 1900 London conference",
              "He was barred from the United States and had to meet abroad",
            ],
            correctIndex: 0,
            explanation:
              "Du Bois organized 57 delegates in Paris as the peace conference convened — a parallel assembly for a people no government represented. It met at all only because Blaise Diagne got it authorized.",
            sourceLessonSlug: "congresses-1919-1927",
          },
          {
            prompt: "What did the 1919 Paris resolutions conspicuously NOT demand?",
            options: [
              "Independence — they asked for international supervision of former German colonies and gradual participation in government 'as fast as their development permits'",
              "Protection of Africans in land and labor",
              "International supervision of the former German colonies",
              "African participation in education",
            ],
            correctIndex: 0,
            explanation:
              "1919 was a petition movement. The distance between 'as fast as their development permits' and Manchester 1945's outright demand for independence is how the course measures the movement's transformation.",
            sourceLessonSlug: "congresses-1919-1927",
          },
          {
            prompt: "Who was Blaise Diagne, and what tension did he embody by 1921?",
            options: [
              "The Senegalese deputy in the French parliament who authorized and presided over the 1919 congress — and whose loyalty to French colonial policy put him at odds with Du Bois's radicals",
              "A Jamaican shipping magnate who funded the Black Star Line",
              "The bishop who presided over the 1900 London conference",
              "The founder of the International African Service Bureau",
            ],
            correctIndex: 0,
            explanation:
              "Diagne's standing made 1919 possible; by the 1921 congress he found the London Manifesto's language dangerously radical, while the radicals found his colonial loyalism worse (Geiss, 1974).",
            sourceLessonSlug: "congresses-1919-1927",
          },
          {
            prompt: "The course's honest audit of the 1919–1927 congresses concludes:",
            options: [
              "Four congresses freed no colony and largely excluded the African masses they spoke for — but they kept the instrument alive, built the address book, and trained the argument for 1945",
              "They achieved immediate independence for several colonies",
              "They were secretly funded by the colonial powers",
              "They had no effect of any kind and are taught only as trivia",
            ],
            correctIndex: 0,
            explanation:
              "Du Bois himself wrote candidly about the movement's thinness in these years (Dusk of Dawn, 1940). The 1945 generation didn't have to invent the tool — they had to aim it.",
            sourceLessonSlug: "congresses-1919-1927",
          },
          {
            prompt: "Why did Italy's 1935 invasion of Ethiopia teach the movement that petitioning was a dead end?",
            options: [
              "The League of Nations failed to stop Mussolini — proving the international system would not protect even an independent African state, so power had to be built, not requested",
              "The League of Nations expelled all African members in response",
              "Ethiopia had never been an independent state",
              "The invasion succeeded because the diaspora ignored it",
            ],
            correctIndex: 0,
            explanation:
              "Ethiopia was the diaspora's living symbol — Adwa's victor, Ethiopianism's namesake. The diaspora erupted (Harlem rallies, boycotts of Italian cargo), but the system's failure was the radicalizing lesson.",
            sourceLessonSlug: "ethiopia-1935-and-the-london-radicals",
          },
          {
            prompt: "Haile Selassie's June 1936 Geneva appeal is remembered for the warning 'It is us today. It will be you tomorrow.' How does the course handle that quote?",
            options: [
              "As the standard English rendering of an address delivered in Amharic — quoted with that caveat stated",
              "As a verbatim English sentence Selassie spoke on the BBC",
              "As a fabrication invented decades later",
              "As a quote from Marcus Garvey that was misattributed to Selassie",
            ],
            correctIndex: 0,
            explanation:
              "The course's quote policy: verbatim where verified, flagged where translation or transcription intervenes. The appeal was delivered in Amharic; the famous line is its standard English rendering — and the World War confirmed it three years later.",
            sourceLessonSlug: "ethiopia-1935-and-the-london-radicals",
          },
          {
            prompt: "Which set of people founded the International African Friends of Abyssinia (1935) in London?",
            options: [
              "C. L. R. James, Amy Ashwood Garvey, T. Ras Makonnen, and Jomo Kenyatta, among others",
              "W. E. B. Du Bois, Booker T. Washington, and Frederick Douglass",
              "Kwame Nkrumah, Hastings Banda, and Léopold Senghor",
              "Henry Sylvester Williams and Alexander Walters",
            ],
            correctIndex: 0,
            explanation:
              "The 1935 London response to the Ethiopia invasion built the address book — IAFA, then the International African Service Bureau (1937, chaired by Padmore) — that became the 1945 Manchester organizing committee.",
            sourceLessonSlug: "ethiopia-1935-and-the-london-radicals",
          },
          {
            prompt: "Why did George Padmore break with the Communist International in 1934?",
            options: [
              "Soviet foreign policy downgraded anti-imperialism to court alliances with the colonial powers — convincing him Black liberation must be self-organized, never subordinate to Moscow",
              "He was offered a colonial governorship by Britain",
              "He converted to the American Colonization Society's program",
              "He objected to the Comintern's support for African independence",
            ],
            correctIndex: 0,
            explanation:
              "The break is the doctrinal hinge of his life and of his book Pan-Africanism or Communism? (1956): allied with the left, subordinate to no one — the stance he carried into organizing Manchester.",
            sourceLessonSlug: "ethiopia-1935-and-the-london-radicals",
          },
          {
            prompt: "What did colonial subjects hear in the Atlantic Charter (1941), and what was Churchill's position?",
            options: [
              "They heard that peoples have the right to choose their own governments and applied it to themselves; Churchill assured Parliament it was meant for Nazi-occupied Europe, not the Empire",
              "They heard a promise of immediate independence that was honored in 1942",
              "Nothing — the Charter was kept secret until 1960",
              "They heard that the Empire would be expanded, and Churchill denied saying so",
            ],
            correctIndex: 0,
            explanation:
              "The Charter's self-determination language, read against Churchill's disclaimer, sharpened the contradiction the war created: a war for freedom fought by empires (Adi, 2018).",
            sourceLessonSlug: "ethiopia-1935-and-the-london-radicals",
          },
          {
            prompt: "When and where did the Fifth Pan-African Congress meet, and who were its joint political secretaries?",
            options: [
              "15–21 October 1945, Chorlton-on-Medlock Town Hall, Manchester — George Padmore and Kwame Nkrumah",
              "February 1919, Paris — Du Bois and Diagne",
              "July 1900, Westminster Town Hall — Williams and Walters",
              "May 1963, Addis Ababa — Nkrumah and Selassie",
            ],
            correctIndex: 0,
            explanation:
              "Manchester, October 1945: Padmore and Nkrumah as joint political secretaries, Makonnen on logistics, Amy Ashwood Garvey chairing the opening session, Du Bois presiding over key sessions at 77 (Adi & Sherwood, 1995).",
            sourceLessonSlug: "manchester-1945",
          },
          {
            prompt: "What made the COMPOSITION of the Manchester Congress revolutionary?",
            options: [
              "Its delegates were trade unionists, party organizers, students, and farmers' representatives — a congress deliberately built on workers' organizations, not professionals in evening dress",
              "Every delegate was a sitting head of state",
              "It was the first congress with no African delegates",
              "Delegates were chosen by the colonial governments",
            ],
            correctIndex: 0,
            explanation:
              "The shift in who was in the room drove the shift in what the room demanded: people whose weapons were the strike and the boycott endorsed exactly those weapons.",
            sourceLessonSlug: "manchester-1945",
          },
          {
            prompt: "How did Manchester's demands break with the earlier congresses?",
            options: [
              "It demanded independence outright and endorsed mass organization, strikes, and boycotts — dropping the petition for the theory that rights are taken by organized peoples",
              "It petitioned the new United Nations for gradual reform",
              "It asked only for better colonial education budgets",
              "It demanded that the League of Nations administer all colonies",
            ],
            correctIndex: 0,
            explanation:
              "Padmore's 1947 report Colonial and Coloured Unity — the primary document — reads like a war plan, with the declarations drafted by Nkrumah calling colonial workers, farmers, and intellectuals to organize.",
            sourceLessonSlug: "manchester-1945",
          },
          {
            prompt: "Which trio of Manchester participants later led their countries as heads of state or government?",
            options: [
              "Kwame Nkrumah (Ghana), Jomo Kenyatta (Kenya), Hastings Banda (Malawi)",
              "C. L. R. James (Trinidad), Peter Abrahams (South Africa), George Padmore (Ghana)",
              "Marcus Garvey (Jamaica), W. E. B. Du Bois (Ghana), Blaise Diagne (Senegal)",
              "Haile Selassie (Ethiopia), Sékou Touré (Guinea), Patrice Lumumba (Congo)",
            ],
            correctIndex: 0,
            explanation:
              "Manchester functioned as a school for heads of state — and Section 6 insists that the roll call carries the movement's tragedy too, since more than one of those presidents ruled the way empires had.",
            sourceLessonSlug: "manchester-1945",
          },
          {
            prompt: "Which honest footnotes does the course attach to Manchester before the legend sets?",
            options: [
              "It didn't cause decolonization single-handedly; francophone Africa was barely represented and only a handful of delegates were women; and its organizers went home to jails before palaces",
              "Its resolutions were written by the Colonial Office",
              "No one who attended ever held office anywhere",
              "It met in secret and left no documents",
            ],
            correctIndex: 0,
            explanation:
              "Doctrine, network, and nerve — not sole cause. Amy Ashwood Garvey and Alma La Badie were among the few women delegates; the Négritude world was following a different track through Paris (Section 5).",
            sourceLessonSlug: "manchester-1945",
          },
          {
            prompt: "Who presided over key sessions at Manchester at age seventy-seven, linking 1945 back to 1900?",
            options: [
              "W. E. B. Du Bois",
              "Marcus Garvey",
              "Henry Sylvester Williams",
              "Edward Wilmot Blyden",
            ],
            correctIndex: 0,
            explanation:
              "Du Bois — the man who drafted the 1900 closing address — was honored by the young radicals even as they retired his petition method. Garvey had died in 1940; Williams in 1911; Blyden in 1912.",
            sourceLessonSlug: "manchester-1945",
          },
        ],
      },
    },
  ],
};
