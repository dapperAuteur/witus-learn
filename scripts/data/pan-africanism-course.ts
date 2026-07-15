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
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 — Garvey and Du Bois
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "garvey-and-the-unia",
      title: "9 · Garvey and the UNIA: the largest movement",
      section: "Garvey and Du Bois",
      recallContent: [
        {
          prompt: "What made Manchester 1945 a 'school for heads of state'?",
          answer: "Its participants went home and led their countries: Nkrumah (Ghana), Kenyatta (Kenya), Banda (Malawi), with Wallace-Johnson leading Sierra Leonean labor — the congress trained the generation that decolonized the continent.",
        },
        {
          prompt: "Who chaired the opening session at Manchester — a name that also co-founded the UNIA?",
          answer: "Amy Ashwood Garvey, the Jamaican pan-Africanist who had co-founded the UNIA with Marcus Garvey in 1914.",
        },
      ],
      body: `While Du Bois was holding congresses for dozens, a Jamaican printer built a movement of masses. No honest history of Pan-Africanism can skip Marcus Garvey — and no honest history can sand him smooth. This lesson is the rise; the next is the fall; both are true.

**The making.** **Marcus Mosiah Garvey** was born 17 August 1887 in St. Ann's Bay, Jamaica, apprenticed as a printer, and educated himself in motion — working in Costa Rica and Panama among Caribbean migrant laborers, then in London (1912–14), where he read widely, worked around the African diaspora press, and encountered Booker T. Washington's *Up from Slavery* (Grant, 2008). In 1914, back in Kingston, he and **Amy Ashwood** founded the **Universal Negro Improvement Association (UNIA)** — motto: **"One God! One Aim! One Destiny!"** In 1916 he moved to Harlem, and there the organization detonated.

**The scale.** Garvey's newspaper, the ***Negro World*** (founded 1918), circulated across the Americas, the Caribbean, and — smuggled past colonial bans — Africa. UNIA divisions appeared in the hundreds across dozens of countries. In **August 1920** the UNIA convened its First International Convention in New York: a month of sessions, a parade through Harlem in full regalia, and an opening rally at **Madison Square Garden** with a reported crowd of some 25,000 (Grant, 2008; Cronon, 1955). The convention adopted the **Declaration of the Rights of the Negro Peoples of the World** (13 August 1920) — a bill of rights for a scattered nation — named Garvey "Provisional President of Africa," and adopted the **red, black, and green** flag you can still see echoed across the African world (Hill, 1983–1990; UNIA, 1920). How many members did the UNIA have? **Teach the number as contested:** Garvey claimed millions — figures up to six million circulated by 1923 — while skeptical historians count far fewer *paid* members. What no serious historian disputes is the comparative claim: it was the **largest mass movement of Black people the world had yet seen** (Cronon, 1955; Grant, 2008; Martin, 1976).

**The idea.** Garveyism ran on three propositions. **Race pride** — Garvey preached Black beauty, Black history, and Black self-respect to people drowning in the opposite, and eyewitnesses consistently describe the psychological effect as electric. **Economic self-reliance** — the UNIA built businesses: groceries, restaurants, a printing house, and above all the **Black Star Line** (incorporated 1919), a Black-owned steamship company selling shares at five dollars each, only to Black buyers — designed to knit the Black Atlantic together commercially and to prove, in steel and smoke, that Black people could run the machinery of the modern world (Grant, 2008). **Africa for the Africans** — the UNIA's political horizon was a redeemed and self-governing Africa, with a concrete (and ultimately doomed) plan to establish a settlement foothold in **Liberia**. Where Du Bois petitioned empires to reform, Garvey organized a nation-in-waiting with its own flag, anthem, nobility, and merchant marine — a state waiting for its territory.

**Why the establishment feared him.** Every colonial power banned or surveilled the *Negro World*; the young **J. Edgar Hoover**, building his career in the Bureau of Investigation, fixed on Garvey early. In an October 1919 memo Hoover called him a "notorious negro agitator" and — the revealing part — lamented that Garvey had *not yet violated any federal law* that would support deportation (Hoover memo, quoted in Hill, 1983–1990, Vol. 2; Grant, 2008). File that memo away: it is dated **four years before** the conviction the next lesson covers, and it is why the honest version of Garvey's fall has two halves.

:::reveal Why does the course teach UNIA membership as a contested number, and what comparative claim stands regardless? ||| Garvey claimed millions (figures up to six million circulated by 1923); skeptical historians count far fewer paid members — so no single figure is asserted. What no serious historian disputes: the UNIA was the largest mass movement of Black people the world had yet seen.

## Sources
- Cronon, E. D. (1955). *Black Moses: The story of Marcus Garvey and the Universal Negro Improvement Association*. University of Wisconsin Press.
- Grant, C. (2008). *Negro with a hat: The rise and fall of Marcus Garvey*. Oxford University Press.
- Hill, R. A. (Ed.). (1983–1990). *The Marcus Garvey and Universal Negro Improvement Association papers* (Vols. 1–7). University of California Press.
- Martin, T. (1976). *Race first: The ideological and organizational struggles of Marcus Garvey and the Universal Negro Improvement Association*. Greenwood Press.
- Universal Negro Improvement Association. (1920, August 13). *Declaration of the rights of the Negro peoples of the world*. New York.`,
    },
    {
      slug: "black-star-line-and-the-fall",
      title: "10 · The Black Star Line, the trial, and the fall",
      section: "Garvey and Du Bois",
      recallContent: [
        {
          prompt: "What were Garveyism's three core propositions?",
          answer: "Race pride (Black beauty, history, self-respect), economic self-reliance (UNIA businesses, above all the Black Star Line), and 'Africa for the Africans' (a redeemed, self-governing Africa — a nation-in-waiting with its own flag and institutions).",
        },
        {
          prompt: "What did J. Edgar Hoover's October 1919 memo about Garvey say, and why does its date matter?",
          answer: "It called Garvey a 'notorious negro agitator' and lamented that he had not yet violated any federal law that would support deportation. It is dated four years before his conviction — evidence the prosecution was sought before any crime existed.",
        },
      ],
      body: `A movement that sells its followers a fleet had better buy seaworthy ships. This lesson is the half of the Garvey story his admirers skip and his enemies distort. The course's rule: **both halves, documented.**

**The collapse of the Black Star Line.** The line bought three ships — the *Yarmouth*, the *Shadyside*, and the *Kanawha* — and every one was a disaster: aging vessels bought at inflated prices, plagued by breakdowns, insurance losses, and officers who ranged from unlucky to incompetent to corrupt. A fourth ship, promoted to investors as the *Phyllis Wheatley*, was **never acquired at all** — and UNIA promotional material showing a ship the line did not own became the legal hinge of everything that followed. By early 1922 the line had suspended operations, having consumed the five-dollar shares of tens of thousands of Black investors (Grant, 2008; Cronon, 1955). Two things are true and must be held together: the Black Star Line was **real economic self-determination attempted at unprecedented scale**, and it was **run into the ground** — Garvey was a spellbinding organizer and a poor executive who trusted badly and audited nothing (Grant, 2008).

**The trial — both halves.** In January 1922 Garvey was arrested for **mail fraud**: using the postal service to sell stock in a line whose true condition its promotions misrepresented — the *Phyllis Wheatley* flyer at the center. In **June 1923** a jury convicted Garvey **on a single count** while acquitting his co-defendants; he was sentenced to five years (Grant, 2008; Hill, 1983–1990). Half one: the financial wreckage was real, the promotions did misrepresent, and the money of poor Black investors was really gone — a course that calls the conviction *nothing but* persecution is not telling the truth. Half two: the prosecution was **politically sought**. Hoover's 1919 memo predates any alleged crime; the Bureau had planted informants inside the UNIA (its first Black agents were hired substantially for that purpose); and the government pursued the movement's leader, not the line's worst-managed books (Hill, 1983–1990; Grant, 2008; Kornweibel, 1998). **Both halves are documented. Neither cancels the other.** Learning to hold them together — a real offense *and* a targeted prosecution — is precisely the kind of thinking this platform teaches.

**The self-inflicted wound.** In June 1922 — between arrest and trial — Garvey met in Atlanta with **Edward Young Clarke**, a senior leader of the **Ku Klux Klan**. Garvey's stated logic was separatist realism: the Klan, he argued, was at least honest about white America's intentions, and since the UNIA sought a separate Black destiny rather than integration, they were not competing for the same future (Grant, 2008; Martin, 1976). The reaction was volcanic. Black leaders across the spectrum united under the slogan **"Garvey Must Go"**; A. Philip Randolph and Chandler Owen's *Messenger* led the campaign, and eight prominent figures wrote the Attorney General urging the government to press its case (Grant, 2008). Judge it as history, not gossip: the meeting was strategy, not secret sympathy — and it was a catastrophic misjudgment that handed his enemies, state and civilian, exactly what they needed.

**Prison, deportation, afterlife.** Appeals exhausted, Garvey entered **Atlanta Federal Penitentiary in February 1925**. His wife **Amy Jacques Garvey** — the movement's under-credited second engine — kept the organization and the message alive, publishing the two volumes of *Philosophy and Opinions of Marcus Garvey* (1923, 1925) partly to fund the defense. President Coolidge **commuted the sentence in November 1927**, and Garvey — never a citizen — was **deported to Jamaica**. He rebuilt in Kingston and later London, but the UNIA's American engine never restarted. The Liberia plan had already collapsed — Monrovia, under diplomatic and commercial pressure, repudiated the UNIA in 1924, and within two years leased a vast concession to the Firestone Rubber Company instead (Grant, 2008). Garvey died in London on **10 June 1940**, having **never set foot in Africa**. And here the symbols outran the man: Ghana's national shipping line, founded under Nkrumah, was named the **Black Star Line**, and the black star sits at the center of Ghana's flag to this day — Section 4 completes that circle.

:::reveal The course insists the Garvey trial be taught in two documented halves — what are they? ||| Half one: the Black Star Line's wreckage was real — misleading promotions (the never-acquired Phyllis Wheatley), tens of thousands of poor investors' money gone, genuine mismanagement; the June 1923 single-count mail-fraud conviction was not a fabrication from nothing. Half two: the prosecution was politically sought — Hoover's 'notorious negro agitator' memo predates any alleged crime by four years, informants were planted, and the government hunted the movement's leader. Neither half cancels the other.

## Sources
- Cronon, E. D. (1955). *Black Moses: The story of Marcus Garvey and the Universal Negro Improvement Association*. University of Wisconsin Press.
- Garvey, A. J. (Ed.). (1923–1925). *Philosophy and opinions of Marcus Garvey* (Vols. 1–2). Universal Publishing House.
- Grant, C. (2008). *Negro with a hat: The rise and fall of Marcus Garvey*. Oxford University Press.
- Hill, R. A. (Ed.). (1983–1990). *The Marcus Garvey and Universal Negro Improvement Association papers* (Vols. 1–7). University of California Press.
- Kornweibel, T., Jr. (1998). *Seeing red: Federal campaigns against Black militancy, 1919–1925*. Indiana University Press.
- Martin, T. (1976). *Race first*. Greenwood Press.`,
    },
    {
      slug: "du-bois-vs-garvey",
      title: "11 · Du Bois vs. Garvey: the feud and what it was really about",
      section: "Garvey and Du Bois",
      recallContent: [
        {
          prompt: "What happened to the promised fourth Black Star Line ship, the Phyllis Wheatley?",
          answer: "It was never acquired at all — and UNIA promotional material showing a ship the line did not own became the legal hinge of the mail-fraud case.",
        },
        {
          prompt: "Why was Garvey's June 1922 meeting with the Klan's Edward Young Clarke so damaging?",
          answer: "Whatever its separatist-realism logic, it united Black leadership against him — the 'Garvey Must Go' campaign, with the Messenger leading and eight prominent figures urging the Attorney General to prosecute. Strategy or not, it handed his enemies exactly what they needed.",
        },
      ],
      body: `The two greatest pan-Africanists of their generation spent the 1920s trying to destroy each other in print. The feud is ugly, quotable, and — once you see what it was actually about — one of the most instructive episodes in the whole movement.

**The combatants could not have been designed more differently.** **W. E. B. Du Bois** (1868–1963): born free in Great Barrington, Massachusetts; the first African American to take a Harvard doctorate (1895); author of *The Souls of Black Folk* (1903); co-founder of the NAACP and editor of *The Crisis*; the congress movement's architect (Section 2); light-skinned, patrician, integrationist by strategy, elitist by temperament — the man who had argued that a college-trained "Talented Tenth" would lift the race. **Marcus Garvey** (1887–1940): born poor in colonial Jamaica; self-educated printer; dark-skinned and proudly so; contemptuous of integration; master of the mass meeting Du Bois never held. Class, color, nationality, strategy — every fault line in the Black Atlantic ran between these two men personally.

**The exchange of fire.** Du Bois's early Crisis coverage of Garvey (December 1920–January 1921) was actually measured — an assessment that took the movement seriously while doubting its business methods (Du Bois, 1920–1921). As the Black Star Line sank and the Klan meeting detonated, measure vanished. In May 1924, in a Crisis essay titled "A Lunatic or a Traitor," Du Bois wrote that Garvey was "without doubt, the most dangerous enemy of the Negro race in America and in the world" (Du Bois, 1924) — from the movement's senior statesman, about its largest organizer, that sentence is as extraordinary now as it was then. Garvey gave as good as he got: for years the *Negro World* derided Du Bois as a mulatto elitist, a beggar at white philanthropy's table, a man ashamed of his African blood — attacks that were explicitly and repeatedly colorist, mocking Du Bois's mixed ancestry (the exchanges are collected in Hill, 1983–1990; per this course's quote policy the insults are paraphrased here rather than reconstructed). Neither man's conduct in the feud honors him; the course declines to award it to either.

**What it was really about.** Strip the invective and a real strategic question emerges, one the movement never stopped arguing:

- **Integration or separate destiny?** Du Bois fought for full citizenship *inside* multiracial states while organizing internationally; Garvey judged that bid hopeless and organized for a separate Black future anchored in Africa.
- **Elites or masses?** Du Bois's congresses gathered credentialed dozens; Garvey's conventions filled arenas with laundresses and longshoremen. Garvey proved the masses were organizable; Du Bois's heirs proved the institutions were capturable. The movement needed both and got them as enemies.
- **Whose money, whose risk?** Du Bois's work ran on white philanthropy and NAACP budgets; Garvey's on the five-dollar shares of the Black poor — which made Garvey's financial failures a betrayal of exactly the people he championed, and made Du Bois's dependence a leash his critics never let him forget.

**The verdict history delivered: both, partially.** Garvey was right that Du Bois underestimated the hunger for race pride and mass organization — nothing Du Bois built ever touched ordinary Black lives at UNIA scale, and Garveyism's afterlives (Rastafari in Section 5; the flags and names across Section 4's independent Africa) outlived every sneer. Du Bois was right that the Black Star Line was doomed as a business and that Garvey's theatrical improvisation invited catastrophe — it came. And the deeper irony the course asks you to sit with: **the archenemies converged.** Du Bois, the integrationist, died in 1963 having renounced America — a citizen of Nkrumah's Ghana (Section 4 tells that ending). Garvey, the African redemptionist, died in London never having seen Africa. The century used them both and vindicated neither cleanly.

:::reveal Beneath the insults, what three strategic questions actually divided Du Bois and Garvey? ||| (1) Integration into multiracial states vs. a separate Black destiny anchored in Africa; (2) organizing credentialed elites vs. organizing the masses; (3) whose money and risk — white philanthropy and NAACP budgets vs. the five-dollar shares of the Black poor. The feud personalized fault lines (class, color, strategy) the movement never stopped arguing.

## Sources
- Du Bois, W. E. B. (1920, December–1921, January). Marcus Garvey. *The Crisis, 21*(2–3).
- Du Bois, W. E. B. (1924, May). A lunatic or a traitor. *The Crisis, 28*(1), 8–9.
- Grant, C. (2008). *Negro with a hat: The rise and fall of Marcus Garvey*. Oxford University Press.
- Hill, R. A. (Ed.). (1983–1990). *The Marcus Garvey and Universal Negro Improvement Association papers* (Vols. 1–7). University of California Press.
- Lewis, D. L. (2000). *W. E. B. Du Bois: The fight for equality and the American century, 1919–1963*. Henry Holt.`,
    },
    {
      slug: "quiz-garvey-and-du-bois",
      title: "12 · Quiz: Garvey and Du Bois",
      section: "Garvey and Du Bois",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What did the UNIA's August 1920 convention in New York produce?",
            options: [
              "The Declaration of the Rights of the Negro Peoples of the World, the red-black-green flag, and Garvey's title 'Provisional President of Africa' — after an opening rally at Madison Square Garden with a reported 25,000",
              "The founding charter of the NAACP",
              "The resolutions of the Fifth Pan-African Congress",
              "The incorporation papers of the Firestone Rubber Company",
            ],
            correctIndex: 0,
            explanation:
              "The 1920 convention was a bill of rights for a scattered nation — a nation-in-waiting with flag, anthem, and titles. The crowd figure is taught as 'reported,' per the course's number policy.",
            sourceLessonSlug: "garvey-and-the-unia",
          },
          {
            prompt: "How does the course handle the question of how many members the UNIA had?",
            options: [
              "As contested — Garvey claimed millions (up to six million circulated by 1923), skeptical historians count far fewer paid members; what stands is that it was the largest Black mass movement the world had yet seen",
              "It asserts exactly six million members as verified fact",
              "It asserts the UNIA had almost no members",
              "It refuses to discuss membership at all",
            ],
            correctIndex: 0,
            explanation:
              "Contested numbers are presented as contested, with the claim and the skepticism both named — while the undisputed comparative claim (unprecedented scale) is asserted plainly.",
            sourceLessonSlug: "garvey-and-the-unia",
          },
          {
            prompt: "What was the Black Star Line designed to prove and to do?",
            options: [
              "To knit the Black Atlantic together commercially and prove Black people could run the machinery of the modern world — a Black-owned steamship line selling $5 shares only to Black buyers",
              "To transport the entire US Black population to Liberia within one year",
              "To carry mail for the US Post Office under federal contract",
              "To compete with the Cunard Line for white passengers",
            ],
            correctIndex: 0,
            explanation:
              "The line was economic self-determination in steel and smoke — which is exactly why its collapse (aging overpriced ships, bad officers, suspended operations by early 1922) was so devastating.",
            sourceLessonSlug: "garvey-and-the-unia",
          },
          {
            prompt: "What is the significance of J. Edgar Hoover's October 1919 memo on Garvey?",
            options: [
              "It called him a 'notorious negro agitator' and lamented that he had not yet violated any federal law — four years BEFORE the conviction, evidence the prosecution was sought before any crime existed",
              "It cleared Garvey of all suspicion",
              "It was written after the 1923 trial as a justification",
              "It praised the Black Star Line's management",
            ],
            correctIndex: 0,
            explanation:
              "The memo (quoted in Hill's Garvey Papers) is the documented anchor of the trial's second half: a targeted prosecution — which coexists with the first half, the real financial wreckage.",
            sourceLessonSlug: "garvey-and-the-unia",
          },
          {
            prompt: "On what was Garvey convicted in June 1923?",
            options: [
              "A single count of mail fraud — centered on promotional material for the Phyllis Wheatley, a ship the Black Star Line never acquired",
              "Treason against the United States",
              "Tax evasion on UNIA convention revenue",
              "Sedition for the Negro World's editorials",
            ],
            correctIndex: 0,
            explanation:
              "One count, co-defendants acquitted, five-year sentence. The misrepresentation was real AND the prosecution was politically driven — the course requires both halves.",
            sourceLessonSlug: "black-star-line-and-the-fall",
          },
          {
            prompt: "Why does the course reject teaching Garvey's conviction as 'nothing but persecution'?",
            options: [
              "Because the wreckage was real: promotions misrepresented the line's condition, and the money of tens of thousands of poor Black investors was really gone",
              "Because Garvey confessed to inventing the UNIA's membership rolls",
              "Because the FBI had no interest in Garvey",
              "Because the jury was composed entirely of UNIA members",
            ],
            correctIndex: 0,
            explanation:
              "A celebration-only account would erase the Black investors who lost their five-dollar shares. Real offense AND targeted prosecution — documented, simultaneous, non-canceling.",
            sourceLessonSlug: "black-star-line-and-the-fall",
          },
          {
            prompt: "What was Garvey's stated logic for meeting KKK leader Edward Young Clarke in June 1922, and what did it cost him?",
            options: [
              "Separatist realism — the Klan was 'honest' about white intentions and the UNIA wasn't competing for integration; it cost him a united 'Garvey Must Go' campaign across Black leadership",
              "He was infiltrating the Klan for the Bureau of Investigation",
              "He sought Klan investment in the Black Star Line, which he received",
              "There is no evidence the meeting occurred",
            ],
            correctIndex: 0,
            explanation:
              "The meeting is documented and taught as strategy, not secret sympathy — and as a catastrophic misjudgment: Randolph and Owen's Messenger led the campaign, and eight prominent figures urged the Attorney General to prosecute.",
            sourceLessonSlug: "black-star-line-and-the-fall",
          },
          {
            prompt: "What ended Garvey's American career, and where did he die?",
            options: [
              "Atlanta penitentiary from February 1925, sentence commuted by Coolidge in November 1927, deportation to Jamaica — he died in London in June 1940, never having set foot in Africa",
              "He was acquitted on appeal and retired to Harlem, dying there in 1960",
              "He escaped to Liberia and governed the UNIA colony until his death",
              "He was assassinated at the 1927 Pan-African Congress",
            ],
            correctIndex: 0,
            explanation:
              "The man who preached Africa for the Africans never saw Africa — while his symbols (the black star on Ghana's flag, Nkrumah's Black Star Line) crossed without him.",
            sourceLessonSlug: "black-star-line-and-the-fall",
          },
          {
            prompt: "What happened to Garvey's Liberia plan?",
            options: [
              "Monrovia repudiated the UNIA in 1924 under diplomatic and commercial pressure — and within two years leased a vast concession to the Firestone Rubber Company instead",
              "It succeeded, and the UNIA governed Liberia until 1945",
              "The League of Nations formally adopted and funded it",
              "Garvey canceled it personally after visiting Monrovia",
            ],
            correctIndex: 0,
            explanation:
              "The contrast — the Black nation-in-waiting rebuffed, the rubber company welcomed — is one of the era's bitterest documented ironies. Garvey never visited; he was never able to.",
            sourceLessonSlug: "black-star-line-and-the-fall",
          },
          {
            prompt: "Who kept the UNIA's message alive during Garvey's imprisonment, publishing Philosophy and Opinions of Marcus Garvey?",
            options: [
              "Amy Jacques Garvey, his wife — the movement's under-credited second engine",
              "W. E. B. Du Bois, as a gesture of reconciliation",
              "J. Edgar Hoover, to use as evidence",
              "Booker T. Washington",
            ],
            correctIndex: 0,
            explanation:
              "Amy Jacques Garvey edited the two volumes (1923, 1925) partly to fund the defense — one of several places this course notes the movement's women doing uncredited structural work.",
            sourceLessonSlug: "black-star-line-and-the-fall",
          },
          {
            prompt: "What did Du Bois write about Garvey in The Crisis in May 1924?",
            options: [
              "That Garvey was 'without doubt, the most dangerous enemy of the Negro race in America and in the world' — in an essay titled 'A Lunatic or a Traitor'",
              "That Garvey deserved the Nobel Peace Prize",
              "That the Black Star Line was a sound investment",
              "Nothing — Du Bois never mentioned Garvey in print",
            ],
            correctIndex: 0,
            explanation:
              "A verbatim-verified quote, and an extraordinary one: the movement's senior statesman anathematizing its largest organizer. Du Bois's 1920–21 coverage had been far more measured before the Line sank and the Klan meeting detonated.",
            sourceLessonSlug: "du-bois-vs-garvey",
          },
          {
            prompt: "How does the course handle Garvey's attacks on Du Bois, per its quote policy?",
            options: [
              "It paraphrases them (mulatto elitist, beggar at white philanthropy's table, ashamed of his African blood) with citation to Hill's Garvey Papers, rather than reconstructing exact insults",
              "It quotes them verbatim from memory",
              "It denies Garvey ever attacked Du Bois",
              "It invents representative quotes and labels them authentic",
            ],
            correctIndex: 0,
            explanation:
              "The attacks are documented (and explicitly colorist), but where exact wording isn't verified against a locatable text, the course paraphrases and attributes — never reconstructs.",
            sourceLessonSlug: "du-bois-vs-garvey",
          },
          {
            prompt: "Which pair correctly states the strategic disagreement beneath the Du Bois–Garvey feud?",
            options: [
              "Du Bois: full citizenship inside multiracial states, organized through credentialed elites; Garvey: a separate Black destiny anchored in Africa, organized through the masses",
              "Du Bois: armed revolution; Garvey: strict pacifism",
              "Du Bois: African emigration for all; Garvey: total assimilation",
              "They had no actual disagreement — the feud was purely personal",
            ],
            correctIndex: 0,
            explanation:
              "The insults were personal; the questions (integration vs. separate destiny, elites vs. masses, whose money and risk) were structural — and the movement kept arguing them long after both men died.",
            sourceLessonSlug: "du-bois-vs-garvey",
          },
          {
            prompt: "What 'converging irony' does the course ask you to sit with at the end of the feud?",
            options: [
              "Du Bois the integrationist died a citizen of Ghana, having renounced America; Garvey the African redemptionist died in London, never having seen Africa",
              "Both men ended their lives as officers of the same organization",
              "Both men retired from politics in 1930 and reconciled publicly",
              "Both men were deported from the United States in 1927",
            ],
            correctIndex: 0,
            explanation:
              "The century used both men and vindicated neither cleanly — Garvey was right about mass organization and race pride; Du Bois was right about the Line's doom; both were wrong in the feud's conduct.",
            sourceLessonSlug: "du-bois-vs-garvey",
          },
          {
            prompt: "What financial asymmetry made the two men's failures cut differently?",
            options: [
              "Garvey's movement ran on the five-dollar shares of the Black poor (so his business failures betrayed his own base); Du Bois's work ran on white philanthropy and NAACP budgets (a leash his critics never let him forget)",
              "Both movements were funded by the same foundation",
              "Garvey was independently wealthy; Du Bois was penniless",
              "Neither movement handled any money",
            ],
            correctIndex: 0,
            explanation:
              "Whose money, whose risk — the third structural question under the feud. It explains why the Black Star Line's collapse was experienced as betrayal, not mere bankruptcy.",
            sourceLessonSlug: "du-bois-vs-garvey",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4 — Independence and Union: Nkrumah, the OAU, and the AU
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "nkrumah-and-ghana",
      title: "13 · Nkrumah, Ghana 1957, and the year of Accra",
      section: "Independence and Union: Nkrumah, the OAU, and the AU",
      recallContent: [
        {
          prompt: "State the 'converging irony' at the end of the Du Bois–Garvey feud.",
          answer: "Du Bois the integrationist died a citizen of Ghana, having renounced America; Garvey the African redemptionist died in London, never having set foot in Africa.",
        },
        {
          prompt: "Where did Garvey's black star end up after his death?",
          answer: "On Ghana's flag — and on Nkrumah's national shipping line, named the Black Star Line after Garvey's. The symbols crossed the Atlantic without the man.",
        },
      ],
      body: `Twelve years after Manchester, one of its two political secretaries stood at a podium in Accra at midnight and made Pan-Africanism a matter of state.

**From Manchester to Accra.** **Kwame Nkrumah** (1909–1972) was born in the southwest of the British Gold Coast, trained as a teacher, and spent a decade in the United States (Lincoln University and the University of Pennsylvania, 1935–1945), where he absorbed both Du Bois's writing and — by his own account — Garvey's: his autobiography names the *Philosophy and Opinions of Marcus Garvey* among the books that influenced him most (Nkrumah, 1957). In London (1945–1947) he became Padmore's closest collaborator and Manchester's co-secretary (Section 2). In December 1947 he sailed home, invited by the lawyer-led United Gold Coast Convention to be its organizing secretary — and promptly out-organized his hosts, founding the mass-based **Convention People's Party** in 1949 on the demand of "Self-Government NOW." In January 1950 he launched **Positive Action** — Gandhian-inflected strikes and boycotts, straight out of the Manchester playbook — and was jailed for it. Then the empire blinked: in the February 1951 elections the CPP won overwhelmingly, and the British released Nkrumah from prison to lead the government (Nkrumah, 1957; Birmingham, 1998).

**6 March 1957.** After six years of staged transfer, the Gold Coast became **Ghana** — the first sub-Saharan African colony to win independence from a European empire in the postwar wave (Sudan, technically an Anglo-Egyptian condominium, had preceded it in 1956) — taking its name from the medieval West African empire (whose real history is taught in this platform's *Africa Before Colonization*). At the midnight rally Nkrumah declared, in the words of the recorded speech, that "our independence is meaningless unless it is linked up with the total liberation of Africa" — transcriptions vary slightly in the final phrase (some render "of the African continent"), and the course flags rather than hides that (Nkrumah, 1957, 6 March speech; Adi, 2018). The sentence was policy, not poetry: Ghana's constitution-era politics, its diplomacy, and its budget all treated Ghanaian independence as a down payment on continental liberation. The new flag carried **Garvey's black star**; the new national shipping line was named the **Black Star Line**; Padmore moved to Accra to run African affairs; Du Bois would come to die there (Birmingham, 1998; Adi, 2018).

**1958: the year of Accra.** With one independent radical state to host them, the movement's meetings came home to Africa. In **April 1958** Nkrumah convened the **Conference of Independent African States** — eight flags: Egypt, Ethiopia, Ghana, Liberia, Libya, Morocco, Sudan, Tunisia — the first such gathering on African soil (Adi, 2018; Legum, 1962). In **December 1958** came the more consequential one: the **All-African People's Conference**, gathering liberation movements and parties from across the continent — hundreds of delegates, chaired by the Kenyan trade unionist **Tom Mboya**, with **Frantz Fanon** representing Algeria's FLN and a young Congolese organizer named **Patrice Lumumba** among those it electrified (Adi, 2018; Legum, 1962). Nkrumah also pursued union in miniature: the **Ghana–Guinea union** of 1958 (joined by Mali in 1960–61) — more symbol than state, but a declared seed of the United States of Africa he intended.

**Du Bois's ending.** The circle Section 1 opened closes here. Harassed at home in the McCarthy years — indicted in 1951 as an unregistered foreign agent (acquitted), his passport withheld for most of the decade — Du Bois accepted Nkrumah's invitation to Ghana in 1961 to direct the *Encyclopedia Africana*, took Ghanaian citizenship, and died in Accra on **27 August 1963**, aged ninety-five — the night before the March on Washington, where the news was announced to the crowd (Lewis, 2000). The man who drafted the 1900 "colour line" address died a citizen of the first state Pan-Africanism ever produced. Whether that state was becoming what the movement had promised is Section 6's question — and the honest answer starts earlier than most tellings admit.

:::reveal Why does the course call 1958 'the year of Accra'? ||| Because with Ghana independent, the movement's meetings came home to Africa: the April Conference of Independent African States (eight flags, the first such gathering on African soil) and the December All-African People's Conference (liberation movements from across the continent — Mboya chairing, Fanon for the FLN, Lumumba electrified), plus the Ghana–Guinea union as a declared seed of continental union.

## Sources
- Adi, H. (2018). *Pan-Africanism: A history*. Bloomsbury Academic.
- Birmingham, D. (1998). *Kwame Nkrumah: The father of African nationalism* (Rev. ed.). Ohio University Press.
- Legum, C. (1962). *Pan-Africanism: A short political guide*. Frederick A. Praeger.
- Lewis, D. L. (2000). *W. E. B. Du Bois: The fight for equality and the American century, 1919–1963*. Henry Holt.
- Nkrumah, K. (1957). *Ghana: The autobiography of Kwame Nkrumah*. Thomas Nelson.`,
    },
    {
      slug: "oau-1963",
      title: "14 · Addis Ababa, 1963: the OAU and the argument Nkrumah lost",
      section: "Independence and Union: Nkrumah, the OAU, and the AU",
      recallContent: [
        {
          prompt: "What happened on 6 March 1957, and how did Nkrumah frame it at the midnight rally?",
          answer: "The Gold Coast became Ghana — the first sub-Saharan colony freed in the postwar wave (Sudan's 1956 condominium case noted). Nkrumah declared, per the recorded speech, that 'our independence is meaningless unless it is linked up with the total liberation of Africa' (final-phrase transcriptions vary, and the course flags that).",
        },
        {
          prompt: "How did Du Bois's life end, and why is it the closing of a circle?",
          answer: "Invited by Nkrumah to direct the Encyclopedia Africana, he took Ghanaian citizenship and died in Accra on 27 August 1963 — the news announced the next day at the March on Washington. The drafter of the 1900 'colour line' address died a citizen of the first state Pan-Africanism produced.",
        },
      ],
      body: `By 1963, more than thirty African states were independent. The question Manchester never had to answer was now unavoidable: **what, exactly, should unity mean between sovereign governments?** Two camps formed, they fought, and the loser's argument haunts the continent still.

**Casablanca versus Monrovia.** The radicals — the **Casablanca Group** (formed January 1961: Ghana, Guinea, Mali, Morocco, Egypt, Libya, with Algeria's provisional government) — wanted **political union now**: continental institutions with real power, before the new states hardened into permanence. The gradualists — the larger **Monrovia Group** (formed May 1961 around Nigeria, Liberia, and most of the former French colonies) — wanted **cooperation among sovereign states**: economic coordination, mutual respect, no surrender of the sovereignty just won (Legum, 1962; Adi, 2018). Beneath the doctrine sat harder things: the Congo crisis (the camps had backed different sides after Lumumba's overthrow and January 1961 murder), Cold War alignments, and the plain fact that thirty new governments were not eager to dissolve themselves into a union a few charismatic rivals might dominate.

**Addis Ababa, May 1963.** Emperor **Haile Selassie** — the symbol of Section 5, here in his other role as the continent's senior statesman — hosted both camps in Addis Ababa, and on **25 May 1963** thirty-two African states signed the Charter of the **Organisation of African Unity (OAU)** (OAU, 1963). Nkrumah arrived with the maximal case, published that same year as the book *Africa Must Unite*: balkanized micro-states would be playthings of their former masters, so Africa needed a **Union Government** — common defense, common currency, continental planning — and he pressed the summit, in the words of his address, that Africa "must unite now or perish" (Nkrumah, 1963a; Nkrumah, 1963b). **He lost.** The Charter that emerged was the Monrovia Group's document: its principles enshrined **sovereign equality** and **non-interference in internal affairs**, and its machinery could recommend but not compel (OAU, 1963). The next year in Cairo, the OAU locked the map itself in place, resolving that members pledge to "respect the borders existing on their achievement of national independence" (OAU, 1964) — the colonial lines, kept, because opening one border question would open them all.

**What the OAU actually did — both columns.** Credit first, and it is real: the OAU's **Liberation Committee** (headquartered in Dar es Salaam) channeled money, training, and diplomatic standing to the movements fighting Portuguese rule, Rhodesia, and apartheid South Africa; the OAU made those liberation wars a *continental* cause and kept them on the world's agenda until the last of them was won (Adi, 2018; Meredith, 2005). Africa's dictionaries gained a phrase — the "frontline states" — from the members that carried the cost. Now the debit column, which Section 6 details: **non-interference in practice meant silence.** Whatever a member government did *inside* its borders — one-party rule, massacre, famine as policy — was constitutionally none of the OAU's business, and the organization's summits seated and honored the perpetrators. Critics took to calling it a **"dictators' club,"** and the label stuck precisely because the Charter had been built, deliberately, with no tool for judging members (Meredith, 2005). Hold the full thought: **the same non-interference clause** that protected fragile new states from subversion also protected tyrants from scrutiny. It was not a drafting accident; it was the price of getting thirty-two signatures.

**Nkrumah's prophecy, scored honestly.** Was he right? On the diagnosis, substantially: the micro-states *did* stay economically dependent, the borders *did* freeze weakness in place, and every subsequent generation of African integration (Section 15) has crept back toward things he proposed in 1963. On the prescription, his critics had a point the course will not launder: the Union Government he demanded would have needed a central power, and Section 6 shows what Nkrumah was building at home by 1963 — the argument "trust a strong center" was weaker coming from a man constructing one-man rule. Both truths, one man. That is this course's method, and nowhere does it matter more than in Accra.

:::reveal What did Casablanca and Monrovia each want, and which camp's vision became the OAU Charter? ||| Casablanca (Ghana, Guinea, Mali, Morocco, Egypt, Libya + Algeria's provisional government): political union NOW — continental government before the new states hardened. Monrovia (the larger group around Nigeria, Liberia, and most ex-French colonies): cooperation among sovereign states. The 1963 Charter was Monrovia's document — sovereign equality, non-interference, machinery that could recommend but not compel; Nkrumah's union government lost.

## Sources
- Adi, H. (2018). *Pan-Africanism: A history*. Bloomsbury Academic.
- Legum, C. (1962). *Pan-Africanism: A short political guide*. Frederick A. Praeger.
- Meredith, M. (2005). *The fate of Africa: A history of fifty years of independence*. PublicAffairs.
- Nkrumah, K. (1963a). *Africa must unite*. Heinemann.
- Nkrumah, K. (1963b, May 24). *Address to the Conference of African Heads of State and Government* [Speech]. Addis Ababa.
- Organisation of African Unity. (1963, May 25). *Charter of the Organisation of African Unity*. Addis Ababa.
- Organisation of African Unity. (1964, July). *Resolution AHG/Res. 16(I): Border disputes among African states*. Cairo.`,
    },
    {
      slug: "from-oau-to-au",
      title: "15 · From OAU to AU: non-interference to non-indifference",
      section: "Independence and Union: Nkrumah, the OAU, and the AU",
      recallContent: [
        {
          prompt: "What double edge did the OAU Charter's non-interference principle carry?",
          answer: "It protected fragile new states from subversion AND protected tyrants from scrutiny — whatever a member did inside its borders was constitutionally none of the OAU's business, which is why critics called it a 'dictators' club.' It was the price of thirty-two signatures, not a drafting accident.",
        },
        {
          prompt: "How does the course score Nkrumah's 1963 'unite now or perish' argument?",
          answer: "Substantially right on diagnosis (micro-states stayed dependent; frozen borders froze weakness; later integration crept back toward his proposals) — but weaker on prescription, because 'trust a strong center' rang hollow from a man building one-man rule at home.",
        },
      ],
      body: `Thirty-six years after Addis Ababa, the OAU's members voted to replace it. The story of the successor — who pushed it, what changed on paper, and what has and hasn't changed in practice — is Pan-Africanism's institutional present tense.

**Why replace the OAU?** By the 1990s the organization's founding job — ending colonial and white-minority rule — was finished: Namibia was independent (1990) and apartheid fell (1994). What remained was the record non-interference had produced: the OAU had watched, near-silent, through Amin's Uganda, the Rwandan genocide of 1994, and two Congo wars. Its own members increasingly said so; the genocide in particular became the argument no defender of pure sovereignty could survive (Meredith, 2005; Makinda & Okumu, 2008).

**The awkward midwife.** The push to relaunch came at a summit in **Sirte, Libya, in September 1999**, hosted and driven by **Muammar Gaddafi**, who had adopted Nkrumah's cause — he openly campaigned for a "United States of Africa" — and bankrolled much of the process (the **Sirte Declaration** calling for the new union is dated 9 September 1999) (OAU, 1999; Makinda & Okumu, 2008). The course teaches this plainly rather than around it: the AU's rebirth owes real momentum to an authoritarian ruler seeking a continental stage — patronage and Pan-Africanism have never been strangers, and Section 6 returns to what that pattern costs. The legal instrument followed: the **Constitutive Act of the African Union**, adopted at Lomé on 11 July 2000; the **African Union** formally launched at **Durban in July 2002**, succeeding the OAU (African Union, 2000; Makinda & Okumu, 2008).

**What actually changed on paper.** One clause more than any other. Where the OAU Charter enshrined non-interference, the Constitutive Act's **Article 4(h)** asserts "the right of the Union to intervene in a Member State pursuant to a decision of the Assembly in respect of grave circumstances, namely: war crimes, genocide and crimes against humanity" (African Union, 2000, art. 4(h)). Diplomats and scholars compressed the shift into a slogan: from **non-interference to non-indifference**. The Act also barred governments that seize power unconstitutionally from participating — and unlike much AU paper, that rule has teeth in practice: suspension after coups has been applied repeatedly, including the run of West African and Sahelian coups of the 2020s (African Union, 2000; Makinda & Okumu, 2008). A Peace and Security Council (2004) and AU peace operations (Darfur, Somalia) followed.

**The working machinery — and the honest audit.** The AU's economic flagship is the **African Continental Free Trade Area (AfCFTA)**: agreement signed at Kigali in March 2018, in force May 2019, trading formally begun 1 January 2021 — by number of participating countries, the largest free-trade area created since the WTO's founding (African Union, 2018; UNECA, 2021). Add **Agenda 2063** (the fifty-year development framework adopted in 2015), a diaspora formally embraced as, in common AU usage, the continent's **"sixth region"** (a 2003 amendment invites the diaspora's full participation "as an important part of our Continent"), and the long-promised continental passport (African Union, 2003; Adi, 2018). Now the audit, in the same breath: the AU runs substantially on external donor funding, which is a strange posture for an anti-dependency project; Article 4(h) has never been invoked to force entry against a sitting government committing atrocities; suspension punishes coups far more reliably than stolen elections or presidents-for-life; and intra-African trade, AfCFTA notwithstanding, remains a modest share of the continent's commerce. The gap between text and practice is where the next generation of the argument lives.

**Where the argument stands.** Run the line: 1900, a petition. 1945, a demand. 1957, a state. 1963, a club of states — union rejected. 2002, a union in name, with one revolutionary clause and a familiar respect for sovereignty. Nkrumah's question — federate or stay weak? — remains open and live: you can hear it in every AfCFTA negotiation and every debate over the AU's budget. Pan-Africanism built real institutions; it has not yet built the one its founders imagined. Both clauses of that sentence are true, and this course asks you to carry both.

:::reveal What is Article 4(h) of the AU Constitutive Act, and what slogan captures the shift it made from the OAU Charter? ||| Article 4(h) asserts 'the right of the Union to intervene in a Member State pursuant to a decision of the Assembly in respect of grave circumstances, namely: war crimes, genocide and crimes against humanity.' The slogan: from non-interference to non-indifference. The course's audit notes it has never been invoked to force entry against a sitting government committing atrocities.

## Sources
- Adi, H. (2018). *Pan-Africanism: A history*. Bloomsbury Academic.
- African Union. (2000, July 11). *Constitutive Act of the African Union*. Lomé.
- African Union. (2003, February 3). *Protocol on amendments to the Constitutive Act of the African Union*. Addis Ababa. (Article 3(q), diaspora participation.)
- African Union. (2018, March 21). *Agreement establishing the African Continental Free Trade Area*. Kigali.
- Makinda, S. M., & Okumu, F. W. (2008). *The African Union: Challenges of globalization, security, and governance*. Routledge.
- Meredith, M. (2005). *The fate of Africa: A history of fifty years of independence*. PublicAffairs.
- Organisation of African Unity. (1999, September 9). *Sirte Declaration*. Sirte.
- United Nations Economic Commission for Africa. (2021). *AfCFTA: Start of trading*. UNECA.`,
    },
    {
      slug: "quiz-independence-and-union",
      title: "16 · Quiz: Independence and Union",
      section: "Independence and Union: Nkrumah, the OAU, and the AU",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is the documented chain from Manchester 1945 to Accra 1957?",
            options: [
              "Manchester's co-secretary Nkrumah went home in 1947, founded the mass-based CPP (1949), launched Positive Action (1950), was jailed, won the 1951 election from prison, and led Ghana to independence on 6 March 1957",
              "Manchester's resolutions were adopted verbatim by the British Parliament in 1946",
              "Nkrumah was appointed governor of the Gold Coast by the Colonial Office in 1948",
              "Ghana's independence was granted spontaneously with no local organizing",
            ],
            correctIndex: 0,
            explanation:
              "The Positive Action playbook — strikes and boycotts — is Manchester's doctrine applied: the empire jailed him, then released him to lead the government after the CPP's February 1951 landslide.",
            sourceLessonSlug: "nkrumah-and-ghana",
          },
          {
            prompt: "How does the course present Nkrumah's famous midnight-speech line?",
            options: [
              "Quoted per the recorded speech — 'our independence is meaningless unless it is linked up with the total liberation of Africa' — with the note that transcriptions vary slightly in the final phrase",
              "As a sentence invented by later biographers",
              "As a line Nkrumah borrowed word-for-word from Du Bois's 1900 address",
              "It refuses to mention the speech at all",
            ],
            correctIndex: 0,
            explanation:
              "Quote policy in action: the core wording is verified against the recorded speech; the variance in the final phrase ('of the African continent' in some transcriptions) is flagged, not hidden.",
            sourceLessonSlug: "nkrumah-and-ghana",
          },
          {
            prompt: "Which precision does the course attach to 'Ghana was first'?",
            options: [
              "First sub-Saharan African colony to win independence from a European empire in the postwar wave — with Sudan (1956), technically an Anglo-Egyptian condominium, noted as the earlier case",
              "First African territory ever to be independent in any era",
              "First member of the United Nations",
              "First colony to gain independence anywhere in the world",
            ],
            correctIndex: 0,
            explanation:
              "Every date sourced, every superlative fenced: Ethiopia and Liberia were never in the postwar decolonization queue, and Sudan's 1956 case is named rather than ignored.",
            sourceLessonSlug: "nkrumah-and-ghana",
          },
          {
            prompt: "What were the two Accra conferences of 1958?",
            options: [
              "April: the Conference of Independent African States (eight flags, first such gathering on African soil); December: the All-African People's Conference (liberation movements — Mboya chairing, Fanon for the FLN, Lumumba among those electrified)",
              "Both were meetings of the British Commonwealth",
              "April: the founding of the OAU; December: the founding of the AU",
              "Two sessions of the Fifth Pan-African Congress",
            ],
            correctIndex: 0,
            explanation:
              "1958 is 'the year of Accra': with one independent radical state to host them, the movement's congresses moved from London and Manchester to Africa itself.",
            sourceLessonSlug: "nkrumah-and-ghana",
          },
          {
            prompt: "What did the Casablanca Group want that the Monrovia Group refused?",
            options: [
              "Political union NOW — continental government with real powers, before the new states hardened; Monrovia wanted cooperation among sovereign states with no surrender of sovereignty",
              "The restoration of colonial rule under international supervision",
              "A single African monarchy under Haile Selassie",
              "Immediate war against all former colonial powers",
            ],
            correctIndex: 0,
            explanation:
              "Casablanca (Ghana, Guinea, Mali, Morocco, Egypt, Libya + Algeria's provisional government) vs the larger Monrovia group (around Nigeria and Liberia): union-now versus sovereignty-first. The 1963 Charter was Monrovia's.",
            sourceLessonSlug: "oau-1963",
          },
          {
            prompt: "What happened on 25 May 1963 in Addis Ababa?",
            options: [
              "Thirty-two African states signed the OAU Charter, hosted by Haile Selassie — enshrining sovereign equality and non-interference, and rejecting Nkrumah's union government",
              "The African Union was launched, replacing the OAU",
              "The Fifth Pan-African Congress convened",
              "The AfCFTA agreement was signed",
            ],
            correctIndex: 0,
            explanation:
              "Addis 1963 founded the OAU on the gradualists' terms. The AU launch (Durban) came in 2002; Manchester was 1945; Kigali/AfCFTA was 2018.",
            sourceLessonSlug: "oau-1963",
          },
          {
            prompt: "What did the OAU's 1964 Cairo resolution pledge, and why?",
            options: [
              "That members 'respect the borders existing on their achievement of national independence' — keeping the colonial lines, because opening one border question would open them all",
              "That all colonial-era borders would be redrawn within ten years",
              "That the OAU would administer all border disputes as a supreme court",
              "That borders would be abolished entirely by 1970",
            ],
            correctIndex: 0,
            explanation:
              "AHG/Res. 16(I) froze the map. It bought stability at the price Nkrumah predicted: locking in micro-states — the diagnosis half of his argument the course scores as substantially right.",
            sourceLessonSlug: "oau-1963",
          },
          {
            prompt: "What is the OAU's strongest documented credit entry?",
            options: [
              "Its Liberation Committee (HQ Dar es Salaam) channeled money, training, and diplomatic standing to the movements fighting Portuguese rule, Rhodesia, and apartheid — making those wars a continental cause until they were won",
              "It abolished poverty across the continent by 1980",
              "It successfully created a single African currency",
              "It prevented all wars between African states",
            ],
            correctIndex: 0,
            explanation:
              "Credit and debit both taught: the liberation record is real (the 'frontline states' carried the cost), and the same Charter left the OAU near-silent on member atrocities.",
            sourceLessonSlug: "oau-1963",
          },
          {
            prompt: "Why did critics call the OAU a 'dictators' club'?",
            options: [
              "Non-interference meant whatever a member government did inside its borders was constitutionally none of the OAU's business — its summits seated and honored perpetrators",
              "Because its charter required members to be military governments",
              "Because it was headquartered in a former prison",
              "The label was invented by colonial powers with no basis",
            ],
            correctIndex: 0,
            explanation:
              "The clause protecting fragile states from subversion also protected tyrants from scrutiny — not a drafting accident but the price of thirty-two signatures. Section 6 gives the worked example: Amin chairing the OAU in 1975.",
            sourceLessonSlug: "oau-1963",
          },
          {
            prompt: "How does the course score Nkrumah's 'Africa must unite now or perish' argument?",
            options: [
              "Right on much of the diagnosis (dependence, frozen weakness — later integration crept back toward his proposals); weaker on prescription, since 'trust a strong center' came from a man building one-man rule at home",
              "Entirely right in every respect",
              "Entirely wrong in every respect",
              "The course refuses to evaluate it",
            ],
            correctIndex: 0,
            explanation:
              "Both truths, one man — the course's method. The 1963 loss is scored honestly in both directions rather than turned into martyrology or dismissal.",
            sourceLessonSlug: "oau-1963",
          },
          {
            prompt: "What role did Muammar Gaddafi play in the AU's creation, and how does the course teach it?",
            options: [
              "He hosted and drove the September 1999 Sirte summit, campaigned for a 'United States of Africa,' and bankrolled the process — taught plainly as an authoritarian seeking a continental stage, since patronage and Pan-Africanism have never been strangers",
              "He opposed the AU's creation and boycotted it",
              "He had no involvement whatsoever",
              "He founded the OAU in 1963",
            ],
            correctIndex: 0,
            explanation:
              "The Sirte Declaration (9 Sept 1999) began the relaunch; the Constitutive Act followed at Lomé (2000) and the AU launched at Durban (2002). The course teaches the awkward midwife rather than around him.",
            sourceLessonSlug: "from-oau-to-au",
          },
          {
            prompt: "What does Article 4(h) of the AU Constitutive Act assert?",
            options: [
              "The Union's right to intervene in a Member State, by Assembly decision, in respect of grave circumstances: war crimes, genocide and crimes against humanity",
              "The permanent inviolability of all member governments",
              "The Union's right to collect taxes directly from African citizens",
              "The abolition of all national armies",
            ],
            correctIndex: 0,
            explanation:
              "The one-clause revolution: from non-interference to non-indifference — drafted in the shadow of Rwanda 1994. The audit: it has never been invoked to force entry against a sitting government committing atrocities.",
            sourceLessonSlug: "from-oau-to-au",
          },
          {
            prompt: "Which AU-era instruments and dates are correctly matched?",
            options: [
              "AfCFTA signed Kigali March 2018, trading begun 1 January 2021; Agenda 2063 adopted 2015; AU launched Durban July 2002",
              "AfCFTA signed 1963; Agenda 2063 adopted 1900; AU launched 1945",
              "AfCFTA signed at Manchester 1945; AU launched at Addis Ababa 1963",
              "All three were created by the OAU Charter in 1963",
            ],
            correctIndex: 0,
            explanation:
              "The working machinery is dated from the treaty texts: Kigali 2018 / trading 2021 (the largest free-trade area by country count since the WTO), Agenda 2063 (2015), Durban launch (2002).",
            sourceLessonSlug: "from-oau-to-au",
          },
          {
            prompt: "Which items appear in the course's honest audit of the AU?",
            options: [
              "Heavy reliance on external donor funding; 4(h) never used to force entry against a sitting government; suspensions punish coups more reliably than stolen elections; intra-African trade still a modest share",
              "The AU has no headquarters, no members, and no treaties",
              "The AU has achieved full continental federation",
              "The AU abolished all African borders in 2005",
            ],
            correctIndex: 0,
            explanation:
              "Text versus practice: real machinery (PSC, peace operations, coup suspensions with actual teeth) alongside the gaps — an anti-dependency project on donor money being the sharpest irony.",
            sourceLessonSlug: "from-oau-to-au",
          },
          {
            prompt: "In the course's one-line arc — 1900, 1945, 1957, 1963, 2002 — what does each date stand for?",
            options: [
              "A petition; a demand; a state; a club of states (union rejected); a union in name with one revolutionary clause",
              "A war; a treaty; a currency; a passport; a railway",
              "Five successive Pan-African Congresses in London",
              "Five failed attempts at continental government",
            ],
            correctIndex: 0,
            explanation:
              "London petitioned; Manchester demanded; Ghana embodied; Addis federated nothing; Durban renamed the club and added Article 4(h). Nkrumah's question — federate or stay weak? — remains open.",
            sourceLessonSlug: "from-oau-to-au",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5 — The Cultural Movements
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "negritude",
      title: "17 · Négritude: Césaire, Senghor, and the Harlem bridge",
      section: "The Cultural Movements",
      recallContent: [
        {
          prompt: "Run the course's one-line arc: what do 1900, 1945, 1957, 1963, and 2002 each stand for?",
          answer: "1900 a petition (London); 1945 a demand (Manchester); 1957 a state (Ghana); 1963 a club of states with union rejected (the OAU); 2002 a union in name with one revolutionary clause, Article 4(h) (the AU).",
        },
        {
          prompt: "Why was Manchester 1945 thin on francophone Africa?",
          answer: "The French-colonial world was following a different track through Paris — the cultural movement of Négritude, which Section 5 teaches as part of the Pan-African family.",
        },
      ],
      body: `While the anglophone movement built congresses, the francophone movement built a poetics. Négritude is Pan-Africanism in its cultural register — and its origin story runs through Harlem.

**The Harlem bridge.** In 1920s Paris, the sisters **Paulette and Jane Nardal** — Martinican intellectuals; Paulette was among the first Black women to study at the Sorbonne — hosted a salon in suburban Clamart where African, Caribbean, and African American writers met, and co-animated *La Revue du monde noir* (1931–32), a bilingual journal that put the **Harlem Renaissance** into French circulation (Sharpley-Whiting, 2002). The students who became Négritude's founders read **Langston Hughes**, **Countee Cullen**, and above all **Claude McKay** — whose novel *Banjo* (1929) they treated almost as a manifesto — and drew the lesson that Blackness could be written *as itself*, not as apprentice Frenchness (Kesteloot, 1991; Sharpley-Whiting, 2002). Per this course's habit of crediting the uncredited: Paulette Nardal later observed, with documented tartness, that the young men took up ideas the salon's women had been airing and won the glory for them (Sharpley-Whiting, 2002).

**The three founders.** In 1930s Paris three colonial students found each other: **Aimé Césaire** of Martinique, **Léopold Sédar Senghor** of Senegal, and **Léon-Gontran Damas** of French Guiana. Around their student journal *L'Étudiant noir* (1935), Césaire coined a word from a slur: **négritude** — reclaiming *nègre* the way later movements reclaimed other weapons. Damas struck first in verse (*Pigments*, 1937 — banned by the French state in 1939); Césaire's book-length poem *Cahier d'un retour au pays natal* (*Notebook of a Return to the Native Land*, 1939) became the movement's monument (Césaire, 1939/2001; Kesteloot, 1991). What was négritude? In Senghor's formulation, the sum of the cultural values of the Black world — a civilization to be affirmed, not a lack to be remedied; in Césaire's, a defiant solidarity with the despised and enslaved. Against France's **assimilation** doctrine — become French, forget the rest — négritude answered: we will take your language and write ourselves in it.

**From poetics to politics.** The movement refused to stay literary. Césaire's *Discourse on Colonialism* (1950) turned the poetry into prosecution — colonization, he argued, "decivilizes" the **colonizer** — and his 1956 letter resigning from the French Communist Party insisted Black struggle must not be an annex of anyone else's (Césaire, 1950/2000; Césaire, 1956). The publishing house and journal **Présence Africaine** (founded 1947 by **Alioune Diop**) gave the movement an institution, and convened the **First International Congress of Black Writers and Artists** at the Sorbonne in **September 1956** — Césaire, Senghor, Fanon, Richard Wright and James Baldwin in the same hall; Du Bois, his passport again withheld by Washington, could send only a message (Présence Africaine, 1956; Adi, 2018). Senghor went furthest into the state: first president of independent **Senegal** (1960), host of the **First World Festival of Negro Arts** in Dakar (1966, answered by Lagos's colossal **FESTAC '77**), first African elected to the Académie française (1983) — and, rare among this course's presidents, a leader who **stepped down voluntarily** (1980). Note what the course is *not* claiming: Senghor's Senegal was for years effectively single-party, and his prime minister Mamadou Dia was imprisoned for over a decade after a contested 1962 crisis — even the gentlest of the founding presidents doesn't escape Section 6's questions unasked (Meredith, 2005).

**The critics — from inside the family.** Négritude drew fire almost immediately, and the fire is part of the curriculum. **Jean-Paul Sartre**, in his famous preface "Black Orpheus" (1948), praised it as an "anti-racist racism" — a dialectical stage that would dissolve into universal struggle — a compliment that read to some as a burial. **Frantz Fanon**, Césaire's own student, warned that celebrating a timeless Black essence could become a museum exhibit — a detour from the actual work of liberation (Fanon, 1952/2008; Fanon, 1961/2004). And the anglophone jab that every survey quotes: **Wole Soyinka**'s quip that a tiger does not proclaim its *tigritude* — it acts. The remark, made around the 1962 African writers' gathering at Makerere, survives in several near-identical versions, so this course paraphrases rather than fixes a wording; Soyinka himself later glossed and softened it (Soyinka, 1976; Jahn, 1968). Senghor's defenders answered that people whose humanity had been systematically denied do not get the luxury of skipping self-affirmation. The debate — affirm the essence, or refuse essences altogether? — is the cultural twin of the political arguments in Sections 3 and 4, and it is still running.

:::reveal What did the Nardal sisters' salon and La Revue du monde noir transmit to the future founders of Négritude — and what does the course credit alongside it? ||| The Harlem Renaissance in French circulation: Hughes, Cullen, and above all McKay's Banjo taught Césaire, Senghor, and Damas that Blackness could be written as itself, not as apprentice Frenchness. The course also credits Paulette Nardal's documented complaint that the young men took up ideas the salon's women had aired — and won the glory.

## Sources
- Adi, H. (2018). *Pan-Africanism: A history*. Bloomsbury Academic.
- Césaire, A. (2000). *Discourse on colonialism* (J. Pinkham, Trans.). Monthly Review Press. (Original work published 1950)
- Césaire, A. (2001). *Notebook of a return to the native land* (C. Eshleman & A. Smith, Trans.). Wesleyan University Press. (Original work published 1939)
- Césaire, A. (1956). *Lettre à Maurice Thorez*. Présence Africaine.
- Fanon, F. (2008). *Black skin, white masks* (R. Philcox, Trans.). Grove Press. (Original work published 1952)
- Fanon, F. (2004). *The wretched of the earth* (R. Philcox, Trans.). Grove Press. (Original work published 1961)
- Jahn, J. (1968). *A history of neo-African literature* (O. Coburn & U. Lehrburger, Trans.). Faber & Faber.
- Kesteloot, L. (1991). *Black writers in French: A literary history of negritude* (E. C. Kennedy, Trans.). Howard University Press.
- Meredith, M. (2005). *The fate of Africa*. PublicAffairs.
- Sartre, J.-P. (1948). Orphée noir. In L. S. Senghor (Ed.), *Anthologie de la nouvelle poésie nègre et malgache de langue française*. Presses Universitaires de France.
- Sharpley-Whiting, T. D. (2002). *Negritude women*. University of Minnesota Press.
- Soyinka, W. (1976). *Myth, literature and the African world*. Cambridge University Press.`,
    },
    {
      slug: "rastafari-and-ethiopia",
      title: "18 · Rastafari and Ethiopia: symbol versus fact",
      section: "The Cultural Movements",
      recallContent: [
        {
          prompt: "Who coined the word 'négritude,' in what venue, and what was the word doing?",
          answer: "Aimé Césaire, around the Paris student journal L'Étudiant noir (1935) — coining a proud identity out of the slur nègre. His Cahier d'un retour au pays natal (1939) became the movement's monument.",
        },
        {
          prompt: "Name two critiques of Négritude taught from inside the family.",
          answer: "Fanon: celebrating a timeless Black essence risks becoming a museum exhibit, a detour from liberation. Soyinka: the 'tigritude' quip (paraphrased — its wording survives in several versions) — a tiger doesn't proclaim its nature, it acts. (Sartre's 'anti-racist racism' praise-burial also counts.)",
        },
      ],
      body: `On 2 November 1930, Ras Tafari Makonnen was crowned Emperor of Ethiopia as **Haile Selassie I**. In Jamaica, some readers of that news concluded that Psalm 68:31 had been fulfilled — and a new religion began. This lesson teaches the most instructive case study this course owns in **symbol versus fact**: what a movement needs its symbols to be, versus what the documented record shows they were.

**The symbol assembles.** Every piece was ready before the coronation. Ethiopianism (Lesson 2) had spent a century teaching that "Ethiopia shall soon stretch out her hands unto God" (Psalm 68:31, KJV). Ethiopia was Adwa's victor — the African empire that had defeated a European army (taught in *Africa Before Colonization*). And Garveyism had saturated Jamaica — Garvey's homeland — with African redemption. When an African king was crowned amid worldwide press, street preachers in Kingston — **Leonard Howell**, Joseph Hibbert, Archibald Dunkley, Robert Hinds — began proclaiming, independently of each other, that the redeemer had come: Selassie was divine, and Africa was home (Chevannes, 1994; Edmonds, 2012). The famous connective tissue — the prophecy attributed to Garvey, "Look to Africa, where a black king shall be crowned…" — is this course's set-piece **quote-audit**: it appears in none of Garvey's located writings, and researchers trace "black king" preaching to others in the period, notably the itinerant preacher **James Morris Webb** (Hill, 1983; Chevannes, 1994). The movement needed Garvey to be its Baptist; the record does not oblige. **And the record goes further:** after Italy's invasion, Garvey — feeling Selassie had failed the test of resistance — attacked the emperor in his London journal *The Black Man*, in a 1937 essay calling him a "great coward" who abandoned his country (Garvey, 1937; Grant, 2008). Sit with that: **the man Rastafari reveres as prophet publicly savaged the man Rastafari reveres as God.** Symbols and facts run on different rails.

**The movement endures the facts.** Colonial Jamaica answered the new faith with force: Howell was jailed for sedition in the 1930s; his commune at **Pinnacle** (founded 1940) was raided repeatedly; Rastafari spent decades as a persecuted movement of the poor (Chevannes, 1994). The facts kept complicating the symbol. Selassie ruled as an absolute monarch over a feudal empire; formal abolition of slavery in Ethiopia came only in 1942 (Zewde, 2001). He never claimed divinity — he remained a devout Ethiopian Orthodox Christian, and in his rare recorded engagements with the question he deflected it (Edmonds, 2012). Yet when he landed in Kingston on **21 April 1966** — the state visit Rastafari commemorates as **Grounation Day** — the crowd that engulfed the airport tarmac was so vast the emperor initially could not leave the plane (Edmonds, 2012). Ethiopia had even given the symbol soil: through the **Ethiopian World Federation** (founded 1937 in New York by Selassie's envoy), land at **Shashamane** — commonly dated to a 1948 grant of some 500 acres — was set aside for diaspora settlers, and a small Rastafari community lives there to this day (Edmonds, 2012; Chevannes, 1994). Then history stripped the symbol bare: the **Derg** deposed Selassie in September 1974; he died in custody in August 1975 (the circumstances remain contested — the official "natural causes" was widely disbelieved, and his remains were found years later buried on the palace grounds) (Zewde, 2001; Meredith, 2005). Rastafari absorbed even this — many adherents simply denied the death — and the movement globalized anyway, carried not least by **Bob Marley** and reggae into every country on earth.

**How to think about it — the transferable skill.** It would be easy, and lazy, to score this lesson as "religion got the facts wrong." The course asks for something harder. *As documented fact*: Selassie was a mortal autocrat, Garvey never prophesied him and later reviled him, and redemption did not arrive by coronation. *As documented function*: Rastafari took the poorest people in a colonial society and gave them dignity, discipline, a homeland of the mind, and eventually a global culture — real effects, visible in the record, produced by a symbol the record won't certify. Pan-Africanism runs on such symbols — Ethiopia itself, the black star, the red-black-green — and the honest method is neither to worship them nor to debunk them into dust, but to keep two ledgers and read both. That is the skill you will need in Section 6, where the symbols get conscripted by men with prisons.

:::reveal What is the double quote-audit at the heart of the Rastafari lesson? ||| (1) The 'Look to Africa, where a black king shall be crowned' prophecy attributed to Garvey appears in none of his located writings — researchers trace 'black king' preaching to others, notably James Morris Webb; (2) the documented record runs the other way: in a 1937 Black Man essay Garvey attacked Selassie as a 'great coward.' The man revered as the movement's prophet publicly savaged the man revered as its God — symbols and facts run on different rails.

## Sources
- Chevannes, B. (1994). *Rastafari: Roots and ideology*. Syracuse University Press.
- Edmonds, E. B. (2012). *Rastafari: A very short introduction*. Oxford University Press.
- Garvey, M. (1937). The failure of Haile Selassie as Emperor. *The Black Man* (London).
- Grant, C. (2008). *Negro with a hat: The rise and fall of Marcus Garvey*. Oxford University Press.
- Hill, R. A. (1983). Leonard P. Howell and millenarian visions in early Rastafari. *Jamaica Journal, 16*(1), 24–39.
- Meredith, M. (2005). *The fate of Africa*. PublicAffairs.
- Zewde, B. (2001). *A history of modern Ethiopia, 1855–1991* (2nd ed.). Ohio University Press.`,
    },
    {
      slug: "quiz-the-cultural-movements",
      title: "19 · Quiz: The Cultural Movements",
      section: "The Cultural Movements",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What role did the Nardal sisters play in the origin of Négritude?",
            options: [
              "Their Clamart salon and the bilingual La Revue du monde noir (1931–32) put the Harlem Renaissance into French circulation for the students who founded the movement",
              "They wrote the Cahier d'un retour au pays natal under a pseudonym",
              "They funded the Black Star Line",
              "They organized the Manchester Congress",
            ],
            correctIndex: 0,
            explanation:
              "Paulette Nardal — among the first Black women at the Sorbonne — later observed with documented tartness that the young men took up the salon's ideas and won the glory (Sharpley-Whiting, 2002).",
            sourceLessonSlug: "negritude",
          },
          {
            prompt: "Which Harlem Renaissance novel did the future Négritude founders treat almost as a manifesto?",
            options: [
              "Claude McKay's Banjo (1929)",
              "Ralph Ellison's Invisible Man",
              "Richard Wright's Native Son",
              "Zora Neale Hurston's Their Eyes Were Watching God",
            ],
            correctIndex: 0,
            explanation:
              "McKay — with Hughes and Cullen — taught the Paris students that Blackness could be written as itself. Ellison, Wright's Native Son, and Hurston's novel all postdate the moment (and Wright appears later, at the 1956 Sorbonne congress).",
            sourceLessonSlug: "negritude",
          },
          {
            prompt: "Who were Négritude's three founders, and what did each contribute first?",
            options: [
              "Césaire (coined the word; the 1939 Cahier), Senghor (the civilizational formulation; later Senegal's presidency), Damas (struck first in verse with Pigments, 1937, banned in 1939)",
              "Fanon, Sartre, and Camus",
              "Du Bois, Garvey, and Padmore",
              "Hughes, Cullen, and McKay",
            ],
            correctIndex: 0,
            explanation:
              "Three colonial students around L'Étudiant noir (1935): Césaire of Martinique, Senghor of Senegal, Damas of French Guiana — a word coined from the slur nègre, against France's assimilation doctrine.",
            sourceLessonSlug: "negritude",
          },
          {
            prompt: "What was Césaire's argument in Discourse on Colonialism (1950)?",
            options: [
              "That colonization 'decivilizes' the colonizer — turning the poetry into prosecution",
              "That colonization should be extended to more territories",
              "That literature must never address politics",
              "That France had no colonies",
            ],
            correctIndex: 0,
            explanation:
              "The Discourse marked Négritude's refusal to stay literary; Césaire's 1956 resignation letter to the French Communist Party then insisted Black struggle must not be an annex of anyone else's.",
            sourceLessonSlug: "negritude",
          },
          {
            prompt: "What happened at the Sorbonne in September 1956?",
            options: [
              "Présence Africaine convened the First International Congress of Black Writers and Artists — Césaire, Senghor, Fanon, Wright, and Baldwin present; Du Bois, passport withheld, could only send a message",
              "The OAU was founded",
              "The first Pan-African Conference met",
              "Senghor was elected president of France",
            ],
            correctIndex: 0,
            explanation:
              "Alioune Diop's Présence Africaine (founded 1947) gave the cultural movement an institution; the 1956 congress was its summit — with Washington's passport denial of Du Bois a documented cameo of the era.",
            sourceLessonSlug: "negritude",
          },
          {
            prompt: "Which set of facts about Senghor does the course teach TOGETHER, per its both-hands rule?",
            options: [
              "First president of Senegal (1960), Dakar festival host (1966), first African in the Académie française (1983), voluntary retirement (1980) — AND years of effective single-party rule with his prime minister Mamadou Dia imprisoned over a decade",
              "Only his literary honors, since his politics are irrelevant",
              "Only the Dia imprisonment, since his honors are propaganda",
              "That he led Ghana to independence",
            ],
            correctIndex: 0,
            explanation:
              "Even the gentlest founding president doesn't escape Section 6's questions unasked — the rare voluntary handover (1980) and the Dia case are both in the record.",
            sourceLessonSlug: "negritude",
          },
          {
            prompt: "How does the course present Soyinka's famous 'tigritude' remark?",
            options: [
              "Paraphrased — a tiger does not proclaim its nature, it acts — because the remark survives in several near-identical versions from the 1962 Makerere gathering, so no single wording is fixed as verbatim",
              "As an exact verbatim sentence with a page citation",
              "As a remark by Senghor about Soyinka",
              "The course denies the remark was ever made",
            ],
            correctIndex: 0,
            explanation:
              "Quote policy again: real remark, variant wordings, so paraphrase and say why. Soyinka himself later glossed and softened it (Myth, Literature and the African World, 1976).",
            sourceLessonSlug: "negritude",
          },
          {
            prompt: "What did Sartre's 'Black Orpheus' (1948) call Négritude, and why did the compliment trouble some readers?",
            options: [
              "An 'anti-racist racism' — a dialectical stage destined to dissolve into universal struggle, which read to some as a burial dressed as praise",
              "A permanent and complete philosophy needing no development",
              "A plagiarism of French symbolism",
              "A movement with no political significance",
            ],
            correctIndex: 0,
            explanation:
              "Sartre's preface made the movement famous and subordinated it in the same gesture — the debate (affirm the essence, or refuse essences?) is the cultural twin of the course's political arguments.",
            sourceLessonSlug: "negritude",
          },
          {
            prompt: "Which pieces were already in place BEFORE 1930 that let Selassie's coronation ignite a religion in Jamaica?",
            options: [
              "A century of Ethiopianism (Psalm 68:31), Ethiopia's standing as Adwa's victor, and Jamaica saturated with Garveyism's African redemption",
              "A Vatican decree, a UN resolution, and a BBC documentary",
              "Nothing — the movement began without any prior context",
              "The founding of the OAU and the AU",
            ],
            correctIndex: 0,
            explanation:
              "The symbol assembled from ready parts: prophecy (Ethiopianism), proof (Adwa), and preparation (Garveyism in Garvey's homeland). Street preachers — Howell, Hibbert, Dunkley, Hinds — then proclaimed independently that the redeemer had come.",
            sourceLessonSlug: "rastafari-and-ethiopia",
          },
          {
            prompt: "What does the course's quote-audit find about the 'Look to Africa, where a black king shall be crowned' prophecy?",
            options: [
              "It appears in none of Garvey's located writings; researchers trace 'black king' preaching to others in the period, notably James Morris Webb",
              "It is verbatim from Philosophy and Opinions of Marcus Garvey",
              "Garvey delivered it at the 1920 Madison Square Garden rally, on film",
              "It was written by Haile Selassie about himself",
            ],
            correctIndex: 0,
            explanation:
              "The set-piece example of the course's rule: famous but unverifiable quotes are taught AS unverifiable (Hill, 1983; Chevannes, 1994). The movement needed Garvey to be its Baptist; the record does not oblige.",
            sourceLessonSlug: "rastafari-and-ethiopia",
          },
          {
            prompt: "What did Garvey actually write about Selassie in 1937?",
            options: [
              "An essay in his London journal The Black Man attacking the emperor as a 'great coward' who abandoned his country after Italy's invasion",
              "A hymn proclaiming Selassie's divinity",
              "Nothing — Garvey died before Selassie was crowned",
              "A formal apology for earlier criticism",
            ],
            correctIndex: 0,
            explanation:
              "The documented record runs opposite the legend: the man Rastafari reveres as prophet publicly savaged the man it reveres as God. Symbols and facts run on different rails — the lesson's core skill.",
            sourceLessonSlug: "rastafari-and-ethiopia",
          },
          {
            prompt: "Which facts about Haile Selassie does the course put in the 'fact' ledger against the symbol?",
            options: [
              "Absolute monarch over a feudal empire; formal abolition of slavery in Ethiopia only in 1942; never claimed divinity (he remained Ethiopian Orthodox and deflected the question)",
              "He was elected democratically and served two four-year terms",
              "He founded the Rastafari movement personally in Kingston",
              "He was never actually emperor of Ethiopia",
            ],
            correctIndex: 0,
            explanation:
              "The fact ledger (Zewde, 2001; Edmonds, 2012) coexists with the function ledger: the 21 April 1966 Kingston visit — Grounation Day — drew a crowd so vast he initially couldn't leave the plane.",
            sourceLessonSlug: "rastafari-and-ethiopia",
          },
          {
            prompt: "What is Shashamane?",
            options: [
              "Land in Ethiopia — commonly dated to a 1948 grant of some 500 acres via the Ethiopian World Federation — set aside for diaspora settlers, where a small Rastafari community lives to this day",
              "The prison where Marcus Garvey was held",
              "The hall where the OAU Charter was signed",
              "A ship of the Black Star Line",
            ],
            correctIndex: 0,
            explanation:
              "The symbol given soil: repatriation made literal, at small scale — taught with hedged dating and acreage per the course's number policy.",
            sourceLessonSlug: "rastafari-and-ethiopia",
          },
          {
            prompt: "How did Haile Selassie's reign end, and how does the course date and hedge it?",
            options: [
              "The Derg deposed him in September 1974; he died in custody in August 1975 — the official 'natural causes' widely disbelieved and the circumstances taught as contested; his remains were found years later on the palace grounds",
              "He reigned until a peaceful retirement in 1990",
              "He was restored to the throne in 1980",
              "He abdicated to become secretary-general of the OAU",
            ],
            correctIndex: 0,
            explanation:
              "Every date sourced, contested circumstances labeled contested (Zewde, 2001; Meredith, 2005). Rastafari absorbed even this — many adherents denied the death — and globalized anyway, carried not least by Marley and reggae.",
            sourceLessonSlug: "rastafari-and-ethiopia",
          },
          {
            prompt: "What 'two ledgers' does the course ask you to keep on Rastafari — the transferable skill of the lesson?",
            options: [
              "Documented fact (a mortal autocrat; an unverified prophecy; no redemption by coronation) AND documented function (dignity, discipline, a homeland of the mind, a global culture for the colonized poor) — read both, worship neither, debunk neither into dust",
              "One ledger for believers and one for police files",
              "Assets and liabilities of the Ethiopian treasury",
              "The course asks you to pick one ledger and discard the other",
            ],
            correctIndex: 0,
            explanation:
              "Pan-Africanism runs on symbols — Ethiopia, the black star, the red-black-green. The honest method keeps the fact ledger and the function ledger open at once; Section 6 shows what happens when symbols get conscripted by men with prisons.",
            sourceLessonSlug: "rastafari-and-ethiopia",
          },
        ],
      },
    },
  ],
};
