import type { AuthoredCourse } from "./authored-course";

// Authored "The Moors: The Word, the History, and the Evidence" (Culture & History), from BAM's
// one-line brief plans/future-courses/culture-and-history/2026-08-21-moors.md ("tell the history of the Moors and their impact on
// the world"). Tier 0 per docs/course-method/README.md.
//
// THE HARD JOB THIS COURSE DOES (read before editing):
// "Moor" is not the name of a people. It is a LABEL whose referent moves by century and by speaker:
// Roman Mauri, Amazigh (Berber) confederations, Arab elites, Iberian Muslims of any ancestry,
// sub-Saharan Africans, and finally anyone the European imagination wanted outside Christendom. The
// spine of the course is therefore the word AND the history it was pinned to, taught together.
//
// HARD RULES THIS FILE KEEPS (do not relax without BAM's editorial sign-off):
//  1. The course's own voice asserts only what is settled (dated events, that a text exists, that a
//     debate exists). Everything contested is ATTRIBUTED to who argues it.
//  2. NO WINNER IS DECLARED on the convivencia debate (Menocal vs. Fernandez-Morera, with Pearce's
//     critique of the critique), on the Almoravid "conquest" of Ghana (Conrad & Fisher), or on the
//     Morisco expulsion totals (Lapeyre's 275,000-300,000 vs. higher recent figures).
//  3. Popular claims that outrun the evidence are named and CORRECTED, not repeated: the Ibn Firnas
//     flight (one source, roughly seven centuries later), the 400,000-volume library figure (no
//     surviving catalog), "the Moors ended the Dark Ages" (the frame itself is rejected), and "the
//     Moors were all Black Africans" / "the Moors were not African at all" (both flatten a label
//     that genuinely covered several populations).
//  4. No invented sources, dates, or quotations. Where a number is contested it is given as a range
//     with the historian attached; where a claim rests on one late source, the course says so.
//
// House style: `section` on every lesson; flush-left single-line `:::reveal q ||| a`; a
// `## Vocabulary` block of 3-6 lesson-specific terms; APA 7 `## Sources`; a quiz per teaching
// section (pool 40, serving 5, passing 80, shuffled) plus a 40-question final serving 10; every
// question carries `explanation` + `sourceLessonSlug`. Correct options are written SHORT and
// distractors long and specific, per the Tier-0 authoring rule.
export const THE_MOORS_COURSE: AuthoredCourse = {
  title: "The Moors: The Word, the History, and the Evidence",
  description:
    "Moor was never the name of a people. It was a label, and where it pointed changed with the century and with whoever was using it: the Mauri of Roman North Africa, Amazigh confederations of the Sahara and the Atlas, Arab ruling families, Iberian Muslims of every ancestry, sub-Saharan Africans, and eventually anyone Europe wanted to place outside Christendom. This course teaches the word and the history together. You get the real record of al-Andalus and North Africa: the 711 crossing, the Umayyad emirate and the caliphate of Cordoba, the surgery and astronomy and philosophy that moved into Latin through Toledo, the Almoravids and Almohads, the long shrinking of Muslim Iberia, 1492, and the Moriscos. You also get the historiography beside it: which famous claims rest on one source written seven centuries later, which numbers no surviving document supports, and which arguments serious historians are still having. Where a claim is contested, the course names who contests it and on what grounds, and declines to hand you a verdict it cannot source.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 — The word before the history
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-word-and-its-origin",
      title: "1 · Where the word came from",
      section: "Section 1 · The word before the history",
      body: `Start with the label, because almost every argument about the Moors is really an argument about the word.

**The Roman layer.** English *Moor* descends from Latin *Maurus*, an inhabitant of **Mauretania**, the Roman name for the far northwest of Africa: today's Morocco and western Algeria. The Latin came through Greek *Mauros*. Strabo, writing in the early first century, reports *Mauri* as the name the people used for themselves, which is the strongest single piece of evidence that the term began as an ethnonym rather than as a description of anybody's appearance (Collins, 1989).

**The color etymology, and why philologists hedge it.** You will often read that *Moor* simply means black, from Greek *mauros*. That link is real but unresolved in the direction it runs. The adjective is attested in late Greek, later than the people-name, so it is at least as plausible that the color word was pulled toward the ethnonym as the reverse. The honest statement is the one etymologists actually make: the origin is uncertain, and a course that asserts either direction as settled has gone past its evidence.

**Why the word survived its own subject.** Rome's Mauretania ended. The label did not. Latin Christendom kept using *Maurus* for whoever occupied that space in its mental map, and after 711 that meant the Muslim rulers and populations of Iberia. The referent moved; the word stayed. That is the mechanism the rest of this section describes, and it is the reason the question "were the Moors African?" cannot be answered until you say which century you mean.

**What Muslims in Iberia called themselves.** Not Moors. They wrote of *al-Andalus*, the territory, and identified by lineage, city, tribe, school of law, and dynasty: Umayyad, Qurashi, Sanhaja, Zanata, Cordoban, Sevillan. **Moor is an outsider's word throughout its history.** Nobody in tenth-century Cordoba described themselves with it. Keeping that straight is not a technicality: it means the category never had to be internally coherent, because no one inside it was maintaining it.

**A rule to carry through the course.** When you meet the word in a source, ask three questions before you accept what it seems to say. Who is writing? In what century? And what work is the word doing for them: naming a region, naming a religion, naming an enemy, or naming a complexion? Different sources answer differently, and a claim built by stacking them is a claim built on a category error.

:::reveal Why do etymologists refuse to settle whether Moor originally meant black? ||| Because the Greek adjective mauros is attested later than the people-name Mauroi, and Strabo reports Mauri as a self-designation, so the color sense may have been pulled toward the ethnonym rather than the other way around.

:::reveal What did Muslims in Iberia actually call their territory and themselves? ||| They wrote of al-Andalus and identified by lineage, city, tribe, legal school, and dynasty. Moor was an outsider's label that no one inside the category used or maintained.

## Vocabulary
- **Mauretania**: the Roman name for the far northwest of Africa, roughly modern Morocco and western Algeria, and the source of Latin *Maurus*.
- **Ethnonym**: a name for a people. The evidence suggests *Mauri* started as one, rather than as a description of skin color.
- **al-Andalus**: the Arabic name for the parts of the Iberian Peninsula under Muslim rule, and the term the people there actually used.
- **Exonym**: a name applied to a group by outsiders. *Moor* is one for its whole documented history.

## Sources
- Collins, R. (1989). *The Arab conquest of Spain, 710-797*. Blackwell.
- Catlos, B. A. (2018). *Kingdoms of faith: A new history of Islamic Spain*. Basic Books.
- Glick, T. F. (2005). *Islamic and Christian Spain in the early Middle Ages* (2nd rev. ed.). Brill.`,
    },
    {
      slug: "whose-meaning-when",
      title: "2 · Whose meaning, in which century",
      section: "Section 1 · The word before the history",
      body: `The label did not drift randomly. It moved with what the people using it needed it to do.

**Medieval Iberia: a religious and political marker first.** In Christian Iberian sources, *moro* usually did the work that *Muslim* or *enemy* does now. It marked the other side of a frontier that people crossed, traded across, married across, and hired mercenaries across. It was not primarily a color term, which is why Christian chronicles can call a fair-skinned Andalusi ruler a Moor without any sense of contradiction.

**Late medieval Portuguese: the label splits.** As Portuguese ships worked down the Atlantic coast of Africa, one word had to cover too much ground, so writers subdivided it. Sources of the period distinguish *mouros brancos*, white Moors, for Arab and Turkish Muslims, *mouros da terra*, Moors of the land, for North African Amazigh populations, and *mouros negros*, black Moors, for sub-Saharan Africans. Read that carefully, because it settles a modern argument in both directions at once: the category plainly included people the writers saw as black, and it plainly was not restricted to them, or the adjectives would have been pointless.

**Early modern Europe: the word hardens.** Geraldine Heng has argued that the European Middle Ages already assembled the machinery of race, sorting people into fixed, inheritable, religiously charged kinds well before the vocabulary of biological race existed (Heng, 2018). Lynn Ramey traces the same hardening in the literature (Ramey, 2014). By the seventeenth century a European reader could meet *Moor* on a stage and be expected to picture a complexion, which is a different word from the one a twelfth-century Castilian scribe was using.

**Where the modern confusion comes from.** Two popular claims sit on opposite sides of the same mistake. One says the Moors were all Black Africans; the other says they had nothing to do with Africa. Both take a label that covered several populations across nine centuries and try to make it name one. The record supports neither. What it supports is the more useful and more interesting statement: **the category was always mixed, and the mixture changed.**

**Why this is not just pedantry.** Every downstream claim you will meet, about who built what, who taught whom, and who was expelled, inherits whatever definition of *Moor* it started with. Fix the definition and most of the arguments become answerable. Leave it floating and they cannot be settled at all, because the two sides are not talking about the same people.

:::reveal What do the Portuguese terms mouros brancos, mouros da terra, and mouros negros show about the category? ||| That it was internally subdivided by the people using it: it plainly included populations they saw as black, and it plainly was not limited to them, or the adjectives would have carried no information.

:::reveal Name the shared error behind "the Moors were all Black Africans" and "the Moors had nothing to do with Africa." ||| Both treat a nine-century label that covered several populations as though it named one people, so both have to discard most of the record to stay true.

## Vocabulary
- **Moro**: the Iberian Romance form of the word, used in Christian sources mainly as a religious and political marker rather than a description of complexion.
- **Mouros negros**: late medieval Portuguese for black Moors, one of three subdivisions writers used once the single word had to cover too much territory.
- **Amazigh**: the self-designation of the North African peoples long called Berbers in European writing; plural *Imazighen*.
- **Racialization**: the process by which a religious or regional label hardens into a claim about inherited bodily kind, which several historians locate in the medieval and early modern centuries.

## Sources
- Heng, G. (2018). *The invention of race in the European Middle Ages*. Cambridge University Press.
- Ramey, L. T. (2014). *Black legacies: Race and the European Middle Ages*. University Press of Florida.
- Catlos, B. A. (2018). *Kingdoms of faith: A new history of Islamic Spain*. Basic Books.`,
    },
    {
      slug: "who-was-actually-in-al-andalus",
      title: "3 · Who was actually there",
      section: "Section 1 · The word before the history",
      body: `Set the label aside and ask the answerable question instead: who lived in al-Andalus, and where did they come from?

**Imazighen, in large numbers.** The forces that crossed in 711 were mostly Amazigh, recently conquered and recently Muslim, commanded by an Amazigh officer, Tariq ibn Ziyad, under an Arab governor of North Africa, Musa ibn Nusayr. Estimates of their size in the sources run in the several thousands and are not firm; the composition is far better attested than the count. Amazigh settlement continued for centuries and shaped where people lived, because the Arab elite took the river plains of the south while Amazigh groups took or were pushed into the harder uplands.

**Arabs, few and dominant.** Arab lineages were a small share of the population and held a large share of the power, the land, and the written record. That imbalance is itself a historical force: it produced repeated Amazigh revolts, and it is why the surviving sources sound more Arab than the country was.

**Iberians who converted, eventually the majority.** The largest group over time was local: **muwalladun**, Iberians who became Muslim, and their descendants. Richard Bulliet's reconstruction from the timing of Arabic names in biographical dictionaries put the conversion curve as slow at first and steep in the tenth century, reaching a Muslim majority only well after the conquest (Bulliet, 1979). The method is indirect and has been challenged, so treat the shape of the curve as a serious argument rather than as a measurement.

**Christians and Jews under Muslim rule.** *Dhimmi* communities paid a poll tax, kept their courts and worship under restriction, and were barred from full civic parity. Arabized Christians are often called **Mozarabs**. Jewish communities in al-Andalus produced some of the most consequential Hebrew poetry and philosophy of the medieval world, under conditions that were far better than in most of contemporary Christian Europe and were still legally unequal.

**Sub-Saharan Africans, present and mostly unnamed.** Trans-Saharan routes moved gold, salt, goods, and enslaved people north for centuries. Enslaved sub-Saharan Africans appear in al-Andalus and the Maghreb in households and, notably, in armies: Yusuf ibn Tashfin's personal guard is described in the sources as including thousands of black troops. Almost none of these people are named individually, which is the ordinary condition of the enslaved in a written record kept by the people who owned them.

**Saqaliba.** Enslaved people of European origin, many from central and eastern Europe, who reached Iberia through Frankish and Italian intermediaries. Some rose to command armies and, after the caliphate broke, to rule taifa kingdoms outright. Their existence is one more reason the tidy modern picture fails: the palace at Cordoba held Amazigh, Arab, Iberian, sub-Saharan African, and Slavic people at once.

:::reveal Which group became the largest Muslim population of al-Andalus, and how did Bulliet estimate the timing? ||| The muwalladun, local Iberian converts and their descendants. Bulliet dated the curve from when Arabic names appear in biographical dictionaries, an indirect method that has been challenged, so it is an argued reconstruction rather than a count.

:::reveal Who were the saqaliba, and why do they complicate a simple picture of al-Andalus? ||| Enslaved people of European origin brought through Frankish and Italian intermediaries; some commanded armies and later ruled taifa kingdoms. They put Slavic, Amazigh, Arab, Iberian, and sub-Saharan African people inside the same court at once.

## Vocabulary
- **Muwalladun**: Iberians who converted to Islam, and their descendants; over time the largest Muslim population of al-Andalus.
- **Dhimmi**: a protected non-Muslim subject, permitted worship and communal courts in exchange for a poll tax and legal restrictions.
- **Mozarab**: an Arabized Christian living under Muslim rule in Iberia.
- **Saqaliba**: enslaved people of European, largely Slavic, origin in the Islamic west; some rose to military and political power.
- **Trans-Saharan trade**: the caravan routes linking West Africa to the Maghreb, moving gold, salt, goods, and enslaved people.

## Sources
- Bulliet, R. W. (1979). *Conversion to Islam in the medieval period: An essay in quantitative history*. Harvard University Press.
- Glick, T. F. (2005). *Islamic and Christian Spain in the early Middle Ages* (2nd rev. ed.). Brill.
- Kennedy, H. (1996). *Muslim Spain and Portugal: A political history of al-Andalus*. Longman.
- Constable, O. R. (Ed.). (2012). *Medieval Iberia: Readings from Christian, Muslim, and Jewish sources* (2nd ed.). University of Pennsylvania Press.`,
    },
    {
      slug: "quiz-the-word",
      title: "4 · Knowledge check: the word before the history",
      section: "Section 1 · The word before the history",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "English Moor descends most directly from which Latin word?",
            options: ["Maurus", "Mauritius", "Maurentia", "Marusus"],
            correctIndex: 0,
            explanation: "Latin Maurus meant an inhabitant of Mauretania, and it reached Latin through Greek Mauros.",
            sourceLessonSlug: "the-word-and-its-origin",
          },
          {
            prompt: "Mauretania was the Roman name for which region?",
            options: ["The far northwest of Africa", "The Nile valley south of Egypt", "The Atlantic islands off Africa", "The inland Sahara near the Niger"],
            correctIndex: 0,
            explanation: "Roughly modern Morocco and western Algeria. It has no connection to the modern state of Mauritania's borders.",
            sourceLessonSlug: "the-word-and-its-origin",
          },
          {
            prompt: "What does Strabo report about the name Mauri?",
            options: ["That the people used it themselves", "That Roman surveyors coined it", "That Carthaginian merchants coined it", "That it translated a Punic phrase"],
            correctIndex: 0,
            explanation: "Writing in the early first century, he records it as a self-designation, which is the main evidence that it began as an ethnonym.",
            sourceLessonSlug: "the-word-and-its-origin",
          },
          {
            prompt: "Why is the Greek mauros color etymology treated as unresolved?",
            options: ["The adjective is attested later than the people-name", "No Greek text using either word predates Roman rule", "Greek and Latin sources disagree on which came first", "The adjective shifted from tawny to black in koine Greek"],
            correctIndex: 0,
            explanation: "So the color sense may have been pulled toward the ethnonym rather than producing it. Etymologists say uncertain, and so should a course.",
            sourceLessonSlug: "the-word-and-its-origin",
          },
          {
            prompt: "What happened to the label after Roman Mauretania ceased to exist?",
            options: ["It stayed and its referent moved", "It fell out of use until the Renaissance", "It narrowed to the Atlas Amazigh only", "Saracen replaced it in Latin Christendom"],
            correctIndex: 0,
            explanation: "Latin Christendom kept applying it to whoever occupied that place in its mental map, which after 711 meant Muslim Iberia.",
            sourceLessonSlug: "the-word-and-its-origin",
          },
          {
            prompt: "What term did Muslims in Iberia use for their territory?",
            options: ["al-Andalus", "Mauretania Tingitana", "Ifriqiya", "Hispania"],
            correctIndex: 0,
            explanation: "They identified themselves by lineage, city, tribe, legal school, and dynasty. Moor appears nowhere in that vocabulary.",
            sourceLessonSlug: "the-word-and-its-origin",
          },
          {
            prompt: "What is an exonym?",
            options: ["A name outsiders apply to a group", "A name a group adopts for itself", "A name taken from a landscape feature", "A name that outlives its people in place-names"],
            correctIndex: 0,
            explanation: "Moor is an exonym for its entire documented history, which is why the category never had to be internally consistent.",
            sourceLessonSlug: "the-word-and-its-origin",
          },
          {
            prompt: "Because nobody inside the category maintained it, what follows?",
            options: ["It never had to be coherent", "It applied only to converts to Islam", "It had to be defined by law", "It shrank within a generation"],
            correctIndex: 0,
            explanation: "An outsider's category answers to the outsider's needs, not to any community policing its own boundaries.",
            sourceLessonSlug: "the-word-and-its-origin",
          },
          {
            prompt: "Which three questions does the lesson tell you to ask of any source using the word?",
            options: ["Who wrote it, when, and what the word is doing", "Where the writer traveled and who paid them", "What genre the text is and who copied it", "Whether the manuscript is complete"],
            correctIndex: 0,
            explanation: "The third one is the load-bearing question: naming a region, a religion, an enemy, or a complexion are four different jobs.",
            sourceLessonSlug: "the-word-and-its-origin",
          },
          {
            prompt: "The question \"were the Moors African?\" is unanswerable until you specify what?",
            options: ["Which century you mean", "Which modern border you mean", "Whether you count only rulers", "Which sources you trust most"],
            correctIndex: 0,
            explanation: "The referent moved across centuries while the word stayed fixed, so the question has a different answer in 300, 1000, and 1600.",
            sourceLessonSlug: "the-word-and-its-origin",
          },
          {
            prompt: "Which of these is NOT how Andalusi Muslims identified themselves?",
            options: ["As Moors", "By legal school", "By tribe or clan", "By home city"],
            correctIndex: 0,
            explanation: "Lineage, city, tribe, legal school, and dynasty are all attested. The exonym is not.",
            sourceLessonSlug: "the-word-and-its-origin",
          },
          {
            prompt: "Through which language did Latin Maurus reach Latin?",
            options: ["Greek", "Punic", "Old Berber", "Aramaic"],
            correctIndex: 0,
            explanation: "Greek Mauros, singular of Mauroi, is the intermediate step between the local name and the Latin one.",
            sourceLessonSlug: "the-word-and-its-origin",
          },
          {
            prompt: "In medieval Christian Iberian sources, moro chiefly marked what?",
            options: ["Religion and political side", "The person's complexion", "Descent from the 711 invaders", "Free or unfree legal status"],
            correctIndex: 0,
            explanation: "Which is why a chronicle can call a fair-skinned Andalusi ruler a Moor with no sense of contradiction.",
            sourceLessonSlug: "whose-meaning-when",
          },
          {
            prompt: "What did late medieval Portuguese writers mean by mouros brancos?",
            options: ["Arab and Turkish Muslims", "Converts who kept Muslim names", "North Africans under Portuguese rule", "Muslims of the Atlantic islands"],
            correctIndex: 0,
            explanation: "One of three subdivisions, alongside mouros da terra for North African Amazigh populations and mouros negros for sub-Saharan Africans.",
            sourceLessonSlug: "whose-meaning-when",
          },
          {
            prompt: "What did mouros da terra denote in those Portuguese sources?",
            options: ["North African Amazigh populations", "Muslims born in Portugal", "Farmers rather than port merchants", "Peoples of the Saharan interior"],
            correctIndex: 0,
            explanation: "Moors of the land, sitting between mouros brancos for Arabs and Turks and mouros negros for sub-Saharan Africans.",
            sourceLessonSlug: "whose-meaning-when",
          },
          {
            prompt: "What does the existence of those three Portuguese subdivisions prove?",
            options: ["The category was mixed, not one people", "Portuguese writers were unusually careful", "The color terms were newly coined", "Portugal sorted Muslims by trade partner"],
            correctIndex: 0,
            explanation: "It included people the writers saw as black and was not limited to them, or the qualifying adjectives would have carried no information.",
            sourceLessonSlug: "whose-meaning-when",
          },
          {
            prompt: "What does Geraldine Heng argue about the European Middle Ages?",
            options: ["It assembled the machinery of race, before a biological vocabulary", "Racial thinking began only with Atlantic slavery", "Religious categories were always convertible", "Color words were never hierarchical then"],
            correctIndex: 0,
            explanation: "Sorting people into fixed, inheritable, religiously charged kinds well before a vocabulary of biological race existed (Heng, 2018).",
            sourceLessonSlug: "whose-meaning-when",
          },
          {
            prompt: "Lynn Ramey's Black Legacies traces the same hardening where?",
            options: ["In medieval European literature", "In twelfth-century canon law", "In port-city tax records", "In manuscript illumination and sculpture"],
            correctIndex: 0,
            explanation: "Ramey (2014) is cited beside Heng as literary evidence for the same process the historical argument describes.",
            sourceLessonSlug: "whose-meaning-when",
          },
          {
            prompt: "By the seventeenth century, a European audience meeting Moor on a stage was expected to picture what?",
            options: ["A complexion, not a religious frontier", "A specific North African kingdom", "A convert of doubtful loyalty", "A Mediterranean merchant class"],
            correctIndex: 0,
            explanation: "Which is a different word from the one a twelfth-century Castilian scribe was using for the other side of a frontier.",
            sourceLessonSlug: "whose-meaning-when",
          },
          {
            prompt: "What error do the two opposite popular claims about the Moors share?",
            options: ["Both make one label name one people", "Both ignore the Latin record", "Both assume rulers and subjects shared origins", "Both date the category from 711"],
            correctIndex: 0,
            explanation: "A label covering several populations across nine centuries cannot be collapsed into one people without discarding most of the record.",
            sourceLessonSlug: "whose-meaning-when",
          },
          {
            prompt: "What does the record actually support about the category?",
            options: ["It was always mixed, and the mixture changed", "It was uniform until the Almoravids came", "It named a religion until the 1609 expulsions", "It was consistent in Arabic sources"],
            correctIndex: 0,
            explanation: "That is both the honest statement and the more interesting one, because the changes in the mixture are datable history.",
            sourceLessonSlug: "whose-meaning-when",
          },
          {
            prompt: "Why does the definition of Moor matter for later claims in the course?",
            options: ["Every claim inherits the definition it started with", "Legal rights were assigned by the label", "Arabic sources use the term precisely", "It decides which nations may claim the period"],
            correctIndex: 0,
            explanation: "Fix the definition and the arguments become answerable. Leave it floating and the two sides are not discussing the same people.",
            sourceLessonSlug: "whose-meaning-when",
          },
          {
            prompt: "What is the Amazigh people's own name for themselves in the plural?",
            options: ["Imazighen", "Mauri", "Sanhaja", "Zanata"],
            correctIndex: 0,
            explanation: "Sanhaja and Zanata are two confederations within that population, not synonyms for it.",
            sourceLessonSlug: "whose-meaning-when",
          },
          {
            prompt: "What does racialization name, as this lesson uses it?",
            options: ["A label hardening into a claim about inherited kind", "Separating populations into tax categories", "Recording appearance in official documents", "Replacing religious identity with national identity"],
            correctIndex: 0,
            explanation: "Several historians locate the process in the medieval and early modern centuries rather than only in the modern era.",
            sourceLessonSlug: "whose-meaning-when",
          },
          {
            prompt: "Who commanded the forces that crossed into Iberia in 711?",
            options: ["Tariq ibn Ziyad", "Musa ibn Nusayr in person", "Abd al-Rahman I", "Yusuf ibn Tashfin"],
            correctIndex: 0,
            explanation: "An Amazigh officer, operating under Musa ibn Nusayr, the Arab governor of North Africa, who crossed later.",
            sourceLessonSlug: "who-was-actually-in-al-andalus",
          },
          {
            prompt: "What was the ethnic composition of the 711 force?",
            options: ["Mostly Amazigh under Arab authority", "Arab and Amazigh in equal numbers", "Mostly Arab, with Amazigh guides", "A mix including Visigothic exiles"],
            correctIndex: 0,
            explanation: "Recently conquered and recently Muslim Amazigh troops, commanded by Tariq and answering to the Arab governor of North Africa.",
            sourceLessonSlug: "who-was-actually-in-al-andalus",
          },
          {
            prompt: "What does the lesson say about the SIZE of the 711 force?",
            options: ["The count is not firm, and the sources disagree", "Seven thousand, per two chronicles", "Exactly what Ceuta's ships could carry", "No source gives any figure"],
            correctIndex: 0,
            explanation: "The sources put it in the several thousands and disagree. The composition of the force is much better attested than the count.",
            sourceLessonSlug: "who-was-actually-in-al-andalus",
          },
          {
            prompt: "How did settlement patterns divide land between Arab and Amazigh groups?",
            options: ["Arabs took the southern river plains", "Arabs settled the frontier marches", "Both settled only the coast", "Amazigh groups took the irrigated valleys"],
            correctIndex: 0,
            explanation: "Amazigh groups took or were pushed into the harder uplands, which is one root of the revolts that follow.",
            sourceLessonSlug: "who-was-actually-in-al-andalus",
          },
          {
            prompt: "Arab lineages in al-Andalus held what combination?",
            options: ["A small share of people, a large share of power", "A large share of people and of offices", "Little power but most of the farmland", "Equal power with the Amazigh, by region"],
            correctIndex: 0,
            explanation: "That imbalance produced repeated Amazigh revolts, and it is why the surviving written record sounds more Arab than the country was.",
            sourceLessonSlug: "who-was-actually-in-al-andalus",
          },
          {
            prompt: "Who were the muwalladun?",
            options: ["Iberian converts to Islam and their descendants", "Arabs born in al-Andalus, not in Syria", "Christians who adopted Arabic culture", "Children of Amazigh and Arab marriages"],
            correctIndex: 0,
            explanation: "Over time they became the largest Muslim population of al-Andalus, which is the single most under-taught fact about the place.",
            sourceLessonSlug: "who-was-actually-in-al-andalus",
          },
          {
            prompt: "What evidence did Bulliet use to date the conversion curve?",
            options: ["When Arabic names appear in biographical dictionaries", "Poll-tax household counts in tax registers", "Mosque foundation inscriptions", "Baptism records that stop in each district"],
            correctIndex: 0,
            explanation: "An indirect method that has been challenged. Treat the shape of the curve as a serious argument, not as a measurement (Bulliet, 1979).",
            sourceLessonSlug: "who-was-actually-in-al-andalus",
          },
          {
            prompt: "According to Bulliet's reconstruction, when did conversion accelerate?",
            options: ["The tenth century", "The eighth century", "Only after the Almoravids", "Evenly, with no acceleration"],
            correctIndex: 0,
            explanation: "Slow at first and steep in the tenth century, reaching a Muslim majority well after 711 rather than at once.",
            sourceLessonSlug: "who-was-actually-in-al-andalus",
          },
          {
            prompt: "What did dhimmi status involve?",
            options: ["A poll tax and legal restrictions", "Full civic equality for military service", "A one-year renewable protection", "Tax exemption in return for no land"],
            correctIndex: 0,
            explanation: "Worship and communal courts were permitted under restriction, and full civic parity was not available.",
            sourceLessonSlug: "who-was-actually-in-al-andalus",
          },
          {
            prompt: "Who were the Mozarabs?",
            options: ["Arabized Christians under Muslim rule", "Muslims under Christian rule", "Christians who migrated south to trade", "Secretly Christian converts to Islam"],
            correctIndex: 0,
            explanation: "The mirror-image term for Muslims living under Christian rule, mudejar, appears later in the course.",
            sourceLessonSlug: "who-was-actually-in-al-andalus",
          },
          {
            prompt: "How does the lesson describe conditions for Jews in al-Andalus?",
            options: ["Better than most of Christian Europe, and still unequal", "Fully equal in law, hence the Hebrew poetry", "Worse than in the northern kingdoms", "Unchanged from the Visigothic laws"],
            correctIndex: 0,
            explanation: "Holding both halves at once is the whole discipline of the convivencia argument the course reaches in Section 4.",
            sourceLessonSlug: "who-was-actually-in-al-andalus",
          },
          {
            prompt: "Where do sub-Saharan Africans appear most visibly in the sources?",
            options: ["In households and in armies, mostly unnamed", "In the caliphate's diplomatic letters", "As named landowners in property registers", "In the scholars' biographical dictionaries"],
            correctIndex: 0,
            explanation: "Yusuf ibn Tashfin's personal guard is described as including thousands of black troops. Almost none of these people are named individually.",
            sourceLessonSlug: "who-was-actually-in-al-andalus",
          },
          {
            prompt: "Why are individual enslaved people so rarely named in the record?",
            options: ["The record was kept by the people who owned them", "Islamic law forbade recording their names", "Most were freed within a few years", "The registers burned in the 1009 civil war"],
            correctIndex: 0,
            explanation: "That is the ordinary condition of the enslaved in any written record produced by an owning class, not a peculiarity of al-Andalus.",
            sourceLessonSlug: "who-was-actually-in-al-andalus",
          },
          {
            prompt: "Who were the saqaliba?",
            options: ["Enslaved people of European origin", "Free Frankish mercenaries on the frontier", "Amazigh troops settled for land grants", "Converted Visigothic nobles with estates"],
            correctIndex: 0,
            explanation: "Many from central and eastern Europe, reaching Iberia through Frankish and Italian intermediaries.",
            sourceLessonSlug: "who-was-actually-in-al-andalus",
          },
          {
            prompt: "How high did some saqaliba rise?",
            options: ["To command armies and rule taifa kingdoms", "To the office of caliph itself", "To chief judgeships, never to command", "To hereditary frontier governorships"],
            correctIndex: 0,
            explanation: "After the caliphate broke apart, several taifa states were ruled outright by men of saqaliba origin.",
            sourceLessonSlug: "who-was-actually-in-al-andalus",
          },
          {
            prompt: "What moved along the trans-Saharan routes?",
            options: ["Gold, salt, goods, and enslaved people", "Only gold and salt, nothing else", "Metalwork south and grain north", "Almost only pilgrims and scholars"],
            correctIndex: 0,
            explanation: "The routes ran for centuries and are the mechanism by which sub-Saharan Africans reached al-Andalus and the Maghreb.",
            sourceLessonSlug: "who-was-actually-in-al-andalus",
          },
          {
            prompt: "Which combination of peoples could be found at the Cordoban court at once?",
            options: ["Amazigh, Arab, Iberian, sub-Saharan African, and Slavic", "Arab and Amazigh only", "Arab, Persian, and Greek", "Iberian converts and Frankish envoys"],
            correctIndex: 0,
            explanation: "Which is why any account reducing al-Andalus to one origin has to leave out most of the people who were there.",
            sourceLessonSlug: "who-was-actually-in-al-andalus",
          },
          {
            prompt: "The imbalance between Arab numbers and Arab power produced what?",
            options: ["Repeated Amazigh revolts", "An Arab-Visigothic alliance", "The abolition of tribal identity", "Land transfers to Amazigh settlers"],
            correctIndex: 0,
            explanation: "The same imbalance also skews the sources, which were written by and about the smaller, more powerful group.",
            sourceLessonSlug: "who-was-actually-in-al-andalus",
          },
          {
            prompt: "The claim that Moor named a single coherent people fails mainly because of what?",
            options: ["Nobody inside it ever maintained the category", "Latin and Arabic used different words", "The population was replaced entirely twice", "Writers never agreed on how to spell it"],
            correctIndex: 0,
            explanation: "An exonym answers to the needs of the people using it, and those needs changed across nine centuries.",
            sourceLessonSlug: "the-word-and-its-origin",
          },
          {
            prompt: "Which is the safest way to describe the 711 crossing's leadership?",
            options: ["An Amazigh commander under an Arab governor", "A command shared equally by Tariq and Musa", "An Arab leading Iberian converts", "A tribal council with no single commander"],
            correctIndex: 0,
            explanation: "Tariq ibn Ziyad led, Musa ibn Nusayr governed North Africa, and Musa crossed with a second force afterward.",
            sourceLessonSlug: "who-was-actually-in-al-andalus",
          },
          {
            prompt: "The Portuguese subdivisions of the label were driven by what pressure?",
            options: ["One word had to cover too much ground", "A royal decree on classifying non-Christians", "Shipping documents sorting enslaved from free", "Competition with a Castilian three-part scheme"],
            correctIndex: 0,
            explanation: "As Portuguese ships worked down the Atlantic coast of Africa, a single term stopped carrying useful information.",
            sourceLessonSlug: "whose-meaning-when",
          },
          {
            prompt: "A Christian chronicle calling a fair-skinned Andalusi ruler a Moor tells you what?",
            options: ["The word was not primarily about complexion then", "The chronicler knew the ruler only by hearsay", "The ruler was a convert, not born Muslim", "It postdates the seventeenth-century shift"],
            correctIndex: 0,
            explanation: "In medieval Iberian usage it marked the other side of a frontier, a frontier people crossed, traded across, and married across.",
            sourceLessonSlug: "whose-meaning-when",
          },
          {
            prompt: "What is the most defensible short answer to \"who were the Moors?\"",
            options: ["Several populations under one outsider's label", "The Amazigh peoples of North Africa", "The Arab dynasties that ruled Iberia", "Iberia's Muslims, minus local converts"],
            correctIndex: 0,
            explanation: "Amazigh, Arab, Iberian convert, sub-Saharan African, and Slavic populations all fall inside it at different times.",
            sourceLessonSlug: "who-was-actually-in-al-andalus",
          },
          {
            prompt: "Which statement about Jewish life in al-Andalus does the lesson refuse?",
            options: ["That Jews were legally equal to Muslims", "That it produced major Hebrew poetry", "That it was better than most of Christian Europe", "That Jews lived under the dhimmi framework"],
            correctIndex: 0,
            explanation: "Better than most of Christian Europe and still legally unequal are both true, and dropping either one produces a false picture.",
            sourceLessonSlug: "who-was-actually-in-al-andalus",
          },
          {
            prompt: "How should a reader treat Bulliet's conversion curve?",
            options: ["As an argued reconstruction, not a measurement", "As a direct count from tax registers", "As a discredited, abandoned method", "As a precise district-level measurement"],
            correctIndex: 0,
            explanation: "The method is indirect and has been challenged, which is exactly the difference between an argument and a measurement.",
            sourceLessonSlug: "who-was-actually-in-al-andalus",
          },
          {
            prompt: "What does the lesson say about the harder uplands of al-Andalus?",
            options: ["Amazigh groups took or were pushed into them", "They were left as an unsettled buffer", "They were crown land worked by the enslaved", "They converted first, having few bishops"],
            correctIndex: 0,
            explanation: "Arab elites took the southern river plains, which is the geographic form of the same power imbalance.",
            sourceLessonSlug: "who-was-actually-in-al-andalus",
          },
          {
            prompt: "Heng's argument matters to this course because it explains what?",
            options: ["How a religious label became an inherited kind", "Why Arabic sources took up racial vocabulary", "Why Moor left Iberian law after 1492", "How the Roman ethnonym survived Rome"],
            correctIndex: 0,
            explanation: "It supplies the mechanism between the twelfth-century scribe's frontier marker and the seventeenth-century stage's complexion.",
            sourceLessonSlug: "whose-meaning-when",
          },
          {
            prompt: "Which is true of the trans-Saharan trade's role in this history?",
            options: ["It is how sub-Saharan Africans reached the Maghreb and Iberia", "It stopped at the conquest until the 1300s", "It carried Iberian Christians to West Africa", "It was run from Cordoba to pay the armies"],
            correctIndex: 0,
            explanation: "Gold, salt, goods, and enslaved people moved north along routes that predate and outlast al-Andalus.",
            sourceLessonSlug: "who-was-actually-in-al-andalus",
          },
          {
            prompt: "What is the practical payoff of pinning the definition down first?",
            options: ["Most downstream arguments become answerable", "It proves one popular claim correct", "It removes the need for Arabic sources", "It assigns al-Andalus to North Africa"],
            correctIndex: 0,
            explanation: "Every claim about who built, taught, or was expelled inherits whatever definition it started from.",
            sourceLessonSlug: "whose-meaning-when",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 — From the crossing to the caliphate
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-crossing-of-711",
      title: "5 · 711, and the problem with the story of 711",
      section: "Section 2 · From the crossing to the caliphate",
      body: `In 711 a force under Tariq ibn Ziyad crossed from North Africa into the Visigothic kingdom of Hispania. Within roughly seven years most of the peninsula was under Muslim authority. Those two sentences are about as far as the settled record goes, and the gap between them and the story usually told is the point of this lesson.

**What is well attested.** A crossing in 711. A decisive defeat of the Visigothic king Roderic at a battle usually placed on the Guadalete river. The rapid fall of the major cities. The arrival of Musa ibn Nusayr with a second force in 712. The extension of raiding across the Pyrenees, checked in 732 or 733 near Poitiers by Charles Martel, a date the sources themselves leave slightly open.

**What is not.** Almost every vivid detail. The number of ships and men. The speech Tariq is said to have made after burning his boats, which appears only in much later sources. Count Julian, the aggrieved father who supposedly invited the invaders in, a story that reads like an explanation invented after the fact to make a defeat comprehensible. **There is no surviving Muslim narrative written at the time of the conquest.** The Arabic accounts are ninth century and later; the fullest Christian source close to the events, the Chronicle of 754, is terse, hostile, and interested in different questions.

**What historians do with that.** Roger Collins argues that the Arabic tradition on the conquest reflects the interests of the dynasties that later commissioned it as much as the events of 711 (Collins, 1989). Nicola Clarke's study of those narratives treats them as a body of literature with its own conventions and arguments, worth reading for what their authors were doing rather than mined for facts (Clarke, 2011). Neither position says the conquest did not happen. Both say that a confident, detailed retelling of it is a retelling of the ninth century.

**Why the kingdom fell so fast.** The most-cited explanations are structural rather than dramatic: the Visigothic monarchy was elective and contested, Roderic's accession was disputed, a rival faction had reason to prefer almost anyone to him, and towns were commonly taken by treaty rather than by storm. The best-known surviving treaty, made with a local lord in the southeast usually called Theodemir, guarantees his people their churches, their property, and their law in exchange for tribute and submission. That is a negotiated transfer of authority, not an extermination.

**The rule this establishes.** For the rest of the course, hold the frame and the detail apart. The frame, that a mostly Amazigh army under Arab authority ended the Visigothic kingdom in the 710s, is secure. The details that make the story tellable are mostly late, and a course that repeats them without saying so is passing off ninth-century literature as eighth-century fact.

:::reveal Why can no confident, detailed narrative of the 711 conquest be trusted? ||| Because no Muslim account survives from the time. The Arabic narratives are ninth century and later, and the closest Christian source, the Chronicle of 754, is terse and hostile. A detailed retelling is a retelling of the ninth century.

:::reveal What does the treaty with Theodemir show about how towns changed hands? ||| That authority was often transferred by negotiated agreement rather than by storm: he kept his churches, property, and law in exchange for tribute and submission.

## Vocabulary
- **Visigothic kingdom**: the Christian state ruling most of Iberia before 711, with an elective and frequently contested monarchy.
- **Chronicle of 754**: a Latin chronicle written in Iberia within living memory of the conquest, terse and hostile, and the closest thing to a contemporary narrative.
- **Guadalete**: the river usually named as the site of Roderic's defeat, though the location is not firmly established.
- **Treaty of Tudmir**: the surviving agreement with the local lord Theodemir, guaranteeing churches, property, and law in exchange for tribute.

## Sources
- Collins, R. (1989). *The Arab conquest of Spain, 710-797*. Blackwell.
- Clarke, N. (2011). *The Muslim conquest of Iberia: Medieval Arabic narratives*. Routledge.
- Constable, O. R. (Ed.). (2012). *Medieval Iberia: Readings from Christian, Muslim, and Jewish sources* (2nd ed.). University of Pennsylvania Press.
- Kennedy, H. (1996). *Muslim Spain and Portugal: A political history of al-Andalus*. Longman.`,
    },
    {
      slug: "emirate-to-caliphate",
      title: "6 · From a province to a caliphate",
      section: "Section 2 · From the crossing to the caliphate",
      body: `Al-Andalus began as a distant province governed from Damascus. What made it something else was a family catastrophe two thousand miles away.

**The survivor.** In 750 the Abbasids overthrew the Umayyad caliphs and killed the family. One young Umayyad, Abd al-Rahman, escaped, crossed North Africa, and in 756 took power in Cordoba as **emir**, an independent ruler who did not claim the caliphate. His line held Cordoba for more than two and a half centuries. The political meaning is worth stating plainly: al-Andalus stopped being a province of anywhere and became the seat of a rival dynasty.

**The century of consolidation.** The emirate spent much of the ninth century putting down revolts, from Amazigh groups resenting Arab dominance, from muwallad lineages excluded from power, and from Christian communities in the cities. Some of that is remembered as martyrdom and some as banditry, depending on which chronicle you read. Meanwhile a Christian polity survived and expanded in the north, and the frontier between them became a permanent feature of the peninsula rather than a temporary front.

**929: the claim to the caliphate.** Abd al-Rahman III took the title of **caliph** in 929, asserting that the leadership of the Muslim community rested in Cordoba. The immediate cause was competitive: the Fatimids in North Africa had claimed the caliphate first, and Cordoba could not concede the ground. The consequences were architectural, administrative, and diplomatic. He built the palace-city of **Madinat al-Zahra** outside Cordoba, received embassies from Byzantium and the northern Christian kingdoms, and ran a state that taxed, minted, and campaigned on a scale nothing else in western Europe matched at the time.

**How the state actually worked.** Taxation distinguished Muslims from dhimmi subjects, which created a fiscal interest in conversion not converting too quickly. Agriculture was reorganized around irrigation techniques and crops moving west across the Islamic world, from citrus and rice to sugar cane and cotton. Andalusi cities were large, walled, and commercially connected to North Africa and the eastern Mediterranean.

**Al-Hakam II and al-Mansur.** Abd al-Rahman III's son al-Hakam II, who ruled from 961 to 976, was a book collector and patron on a scale that became legendary, in the exact sense that the legend later outgrew the evidence. After him, effective power passed to a chief minister remembered as **al-Mansur**, who ruled in the name of a child caliph, campaigned relentlessly against the Christian north, and, according to the sources, purged the palace library of works he judged heterodox. A state that depends on one strongman is a state with a succession problem, and Cordoba was about to find that out.

:::reveal What made Abd al-Rahman I's arrival in 756 politically significant beyond one man taking a city? ||| He was an Umayyad survivor of the Abbasid overthrow, so al-Andalus stopped being a province governed from elsewhere and became the seat of a rival dynasty that lasted more than two and a half centuries.

:::reveal Why did Abd al-Rahman III claim the caliphal title in 929? ||| The Fatimids in North Africa had claimed the caliphate first, and Cordoba could not concede that ground. The claim came with Madinat al-Zahra, foreign embassies, and a state that taxed and campaigned at a scale unmatched in western Europe.

## Vocabulary
- **Emir**: an independent ruler who does not claim leadership of the whole Muslim community; the title Abd al-Rahman I took in 756.
- **Caliph**: a claimant to the leadership of the Muslim community, a title Cordoba asserted in 929 in competition with the Fatimids.
- **Madinat al-Zahra**: the palace-city built outside Cordoba by Abd al-Rahman III as the seat of the new caliphate.
- **Al-Mansur**: the chief minister who held effective power at the end of the tenth century, ruling in the name of a child caliph.
- **Fatimids**: the rival caliphate in North Africa whose claim prompted Cordoba's.

## Sources
- Kennedy, H. (1996). *Muslim Spain and Portugal: A political history of al-Andalus*. Longman.
- Catlos, B. A. (2018). *Kingdoms of faith: A new history of Islamic Spain*. Basic Books.
- Glick, T. F. (2005). *Islamic and Christian Spain in the early Middle Ages* (2nd rev. ed.). Brill.`,
    },
    {
      slug: "cordoba-and-its-numbers",
      title: "7 · Cordoba, and the numbers nobody can check",
      section: "Section 2 · From the crossing to the caliphate",
      body: `Tenth-century Cordoba was one of the largest and most sophisticated cities in the western world. That statement is safe. Almost every specific number attached to it is not, and learning to tell those apart is worth more than the numbers would be.

**What is well established.** A great mosque begun in the late eighth century and enlarged repeatedly, still standing. Paved and lit streets, running water, public baths, hospitals, markets, and paper, which reached the Islamic west before it reached Latin Europe. A working bureaucracy with archives. A scholarly culture in which women copied manuscripts and taught, and in which law, medicine, astronomy, and poetry were all practiced professionally.

**The library figure.** You will read everywhere that al-Hakam II's library held 400,000 volumes, sometimes 600,000. Here is what stands behind it: no catalog survives. The number comes down through later Arabic literary sources, and the collection is generally reported to have been dispersed or purged under al-Mansur and destroyed in the civil war that followed. Modern accounts that repeat the figure usually add that it cannot be substantiated and may be far larger than what was actually held. **The right way to say it is that the collection was extraordinary by the standards of its world and that its size is not established.**

**The population figure.** The same problem, in a worse form. Claims of a million residents circulate widely. Premodern city populations are estimated from built area, water supply, grain provisioning, and comparison, and every one of those methods carries wide error bars. Serious estimates for tenth-century Cordoba are far below a million and disagree with each other. A number repeated confidently in a popular account is usually a number nobody measured.

**Why the inflated figures are a trap and not a harmless flourish.** They are the easiest thing in the world to attack. A reader who checks one number and finds it unsupported will discount the true claims sitting beside it, and the true claims are remarkable enough. Cordoba genuinely had paper, street lighting, running water, and a scholarly class while most of Latin Europe had none of those things. That comparison survives scrutiny. A number that cannot be sourced does not, and it takes the sourced material down with it.

**A method you can reuse.** For any impressive premodern number, ask: what document would have had to exist for someone to know this, does that document survive, and how many centuries lie between the event and the earliest source that gives the figure? Applied to the Cordoba library, the answer is a catalog, no, and several. That is not a reason to dismiss the library. It is a reason to describe it without a number.

:::reveal What single question exposes the 400,000-volume library figure? ||| What document would someone have needed in order to know it. A catalog, and no catalog survives; the figure reaches us through later literary sources and the collection was dispersed and destroyed.

:::reveal Why is repeating an unsourceable number about Cordoba worse than saying nothing? ||| Because a reader who checks it and finds it unsupported discounts the well-evidenced claims beside it, and those claims, paper, street lighting, running water, and a professional scholarly class, survive scrutiny on their own.

## Vocabulary
- **Great Mosque of Cordoba**: begun in the late eighth century and enlarged repeatedly; the surviving building is the strongest physical evidence for the city's scale.
- **Unsourceable figure**: a number no surviving document could have produced, which should be reported as a tradition rather than as a measurement.
- **Built-area estimate**: the standard method for approximating a premodern city's population, using walled area, water supply, and grain provisioning, all with wide error bars.
- **Al-Hakam II's library**: the caliphal book collection whose real extent is unknown, since no catalog survives and the collection was dispersed.

## Sources
- Kennedy, H. (1996). *Muslim Spain and Portugal: A political history of al-Andalus*. Longman.
- Catlos, B. A. (2018). *Kingdoms of faith: A new history of Islamic Spain*. Basic Books.
- Glick, T. F. (2005). *Islamic and Christian Spain in the early Middle Ages* (2nd rev. ed.). Brill.`,
    },
    {
      slug: "quiz-conquest-and-caliphate",
      title: "8 · Knowledge check: from the crossing to the caliphate",
      section: "Section 2 · From the crossing to the caliphate",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "In what year did Tariq ibn Ziyad's force cross into Iberia?",
            options: ["711", "732", "756", "750"],
            correctIndex: 0,
            explanation: "Within roughly seven years most of the peninsula was under Muslim authority. Musa ibn Nusayr crossed with a second force in 712.",
            sourceLessonSlug: "the-crossing-of-711",
          },
          {
            prompt: "Which Visigothic king was defeated in the decisive battle of the conquest?",
            options: ["Roderic", "Theodemir", "Witiza", "Julian"],
            correctIndex: 0,
            explanation: "The battle is usually placed on the Guadalete river, though the location is not firmly established.",
            sourceLessonSlug: "the-crossing-of-711",
          },
          {
            prompt: "Where is the decisive battle usually placed?",
            options: ["On the Guadalete river", "Outside Toledo, after a siege", "At the Strait of Gibraltar", "On the Ebro, in the north"],
            correctIndex: 0,
            explanation: "Usually, not certainly. The site is one of many conquest details the sources do not settle.",
            sourceLessonSlug: "the-crossing-of-711",
          },
          {
            prompt: "How does the lesson date the Frankish check on raiding near Poitiers?",
            options: ["732 or 733", "732 exactly", "735", "In the 740s"],
            correctIndex: 0,
            explanation: "The sources leave the year slightly open, which is worth noticing in an event so often cited as a fixed hinge.",
            sourceLessonSlug: "the-crossing-of-711",
          },
          {
            prompt: "What is the central source problem with the 711 conquest?",
            options: ["No Muslim account survives from the time", "The Arabic and Latin accounts share a source", "All accounts come from participants", "The Arabic sources survive only in Latin"],
            correctIndex: 0,
            explanation: "The Arabic narratives are ninth century and later. The Chronicle of 754 is close in time but terse, hostile, and interested in other questions.",
            sourceLessonSlug: "the-crossing-of-711",
          },
          {
            prompt: "What is the Chronicle of 754?",
            options: ["A Latin chronicle written in Iberia after the conquest", "The earliest Arabic narrative, from Cordoba", "A Frankish annal of the Poitiers campaigns", "A Byzantine account from Constantinople"],
            correctIndex: 0,
            explanation: "Terse and hostile, and the closest thing to a contemporary narrative, which is why historians lean on it despite its limits.",
            sourceLessonSlug: "the-crossing-of-711",
          },
          {
            prompt: "How should the burning-the-boats speech attributed to Tariq be treated?",
            options: ["As a much later addition, absent from early sources", "As an eyewitness's verbatim record", "As a Latin Christian invention", "As a paraphrase from the Chronicle of 754"],
            correctIndex: 0,
            explanation: "It appears only in far later sources, alongside the other vivid details that make the story tellable and the record does not support.",
            sourceLessonSlug: "the-crossing-of-711",
          },
          {
            prompt: "How does the lesson characterize the Count Julian story?",
            options: ["An explanation invented after the fact", "An episode both sides' chronicles confirm", "A confusion of two men named Julian", "A Frankish tradition from Carolingian annals"],
            correctIndex: 0,
            explanation: "The aggrieved father who supposedly invited the invaders in reads like a story built later to make a defeat comprehensible.",
            sourceLessonSlug: "the-crossing-of-711",
          },
          {
            prompt: "What does Roger Collins argue about the Arabic conquest tradition?",
            options: ["It reflects the interests of later dynasties", "That it is reliable, unlike the Latin sources", "That it was composed in North Africa", "That it preserves an eyewitness core"],
            correctIndex: 0,
            explanation: "Collins (1989) treats the tradition as shaped by those who commissioned it as much as by the events of 711.",
            sourceLessonSlug: "the-crossing-of-711",
          },
          {
            prompt: "How does Nicola Clarke approach the conquest narratives?",
            options: ["As literature with its own conventions", "As a police file to cross-examine", "As forgeries justifying the Almohads", "As translated Visigothic records"],
            correctIndex: 0,
            explanation: "Clarke (2011) reads them for what their authors were doing, rather than mining them for facts they cannot supply.",
            sourceLessonSlug: "the-crossing-of-711",
          },
          {
            prompt: "Does the source problem mean the conquest did not happen?",
            options: ["No, only that detailed retellings are late", "Yes, some call it a ninth-century invention", "Yes, archaeology shows no disruption", "No, but the eighth century is undated"],
            correctIndex: 0,
            explanation: "The frame is secure: a mostly Amazigh army under Arab authority ended the Visigothic kingdom in the 710s. The vivid detail is ninth-century literature.",
            sourceLessonSlug: "the-crossing-of-711",
          },
          {
            prompt: "Which explanation for the kingdom's rapid fall does the lesson favor?",
            options: ["Structural weakness in an elective monarchy", "Overwhelming numbers in the invading force", "Stirrup cavalry the Visigoths could not counter", "A plague that emptied the southern cities"],
            correctIndex: 0,
            explanation: "An elective and contested monarchy, a disputed accession, and rival factions with reason to prefer almost anyone to Roderic.",
            sourceLessonSlug: "the-crossing-of-711",
          },
          {
            prompt: "What does the Treaty of Tudmir guarantee Theodemir's people?",
            options: ["Churches, property, and law, for tribute", "Tax exemption for three generations", "The right to garrison their own forts", "Free passage north with their goods"],
            correctIndex: 0,
            explanation: "In exchange for tribute and submission. It is a negotiated transfer of authority rather than an extermination.",
            sourceLessonSlug: "the-crossing-of-711",
          },
          {
            prompt: "How were towns commonly taken during the conquest?",
            options: ["By treaty, as at Tudmir", "By siege engines", "By betrayal from within", "By cutting off water"],
            correctIndex: 0,
            explanation: "The surviving Tudmir agreement is the best-preserved example of a pattern the sources describe repeatedly.",
            sourceLessonSlug: "the-crossing-of-711",
          },
          {
            prompt: "What happened to the Umayyad family in 750?",
            options: ["The Abbasids overthrew and killed them", "They moved the capital to Baghdad", "They split the caliphate by agreement", "A Byzantine offensive drove them to Egypt"],
            correctIndex: 0,
            explanation: "One young Umayyad, Abd al-Rahman, escaped, crossed North Africa, and took power in Cordoba.",
            sourceLessonSlug: "emirate-to-caliphate",
          },
          {
            prompt: "In what year did Abd al-Rahman I take power in Cordoba?",
            options: ["756", "750", "711", "929"],
            correctIndex: 0,
            explanation: "His line held Cordoba for more than two and a half centuries afterward.",
            sourceLessonSlug: "emirate-to-caliphate",
          },
          {
            prompt: "What title did Abd al-Rahman I take, and what did it deliberately not claim?",
            options: ["Emir, not caliph", "Caliph, not emir", "Sultan, not emir", "Malik, not emir"],
            correctIndex: 0,
            explanation: "An independent ruler who did not claim leadership of the whole Muslim community. That claim waited until 929.",
            sourceLessonSlug: "emirate-to-caliphate",
          },
          {
            prompt: "What changed politically when the Umayyad line established itself in Cordoba?",
            options: ["Al-Andalus stopped being anyone's province", "The northern frontier was closed by treaty", "Non-Muslim taxation was abolished", "Arabic replaced Latin in the churches"],
            correctIndex: 0,
            explanation: "It became the seat of a rival dynasty rather than a distant territory governed from Damascus.",
            sourceLessonSlug: "emirate-to-caliphate",
          },
          {
            prompt: "What occupied much of the emirate's ninth century?",
            options: ["Putting down revolts on several fronts", "Naval war with the Fatimids", "Pushing north of the Pyrenees", "Seeking Baghdad's recognition"],
            correctIndex: 0,
            explanation: "Amazigh groups resenting Arab dominance, muwallad lineages excluded from power, and Christian communities in the cities.",
            sourceLessonSlug: "emirate-to-caliphate",
          },
          {
            prompt: "In what year did Abd al-Rahman III take the caliphal title?",
            options: ["929", "961", "912", "976"],
            correctIndex: 0,
            explanation: "The immediate cause was competitive: the Fatimids in North Africa had claimed the caliphate first.",
            sourceLessonSlug: "emirate-to-caliphate",
          },
          {
            prompt: "Which rival claim prompted Cordoba's assertion of the caliphate?",
            options: ["The Fatimids in North Africa", "The Abbasids in Baghdad", "The Byzantine emperor", "The Almoravids in Morocco"],
            correctIndex: 0,
            explanation: "Cordoba could not concede the ground once a rival dynasty in the Maghreb had claimed it.",
            sourceLessonSlug: "emirate-to-caliphate",
          },
          {
            prompt: "What was Madinat al-Zahra?",
            options: ["A palace-city outside Cordoba", "The caliphal library complex", "A fortified frontier town", "The foreign merchants' quarter"],
            correctIndex: 0,
            explanation: "Built by Abd al-Rahman III as the seat of the new caliphate, and one of its clearest physical statements.",
            sourceLessonSlug: "emirate-to-caliphate",
          },
          {
            prompt: "Which powers sent embassies to Abd al-Rahman III's court?",
            options: ["Byzantium and the northern Christian kingdoms", "The Abbasids and the Tang court of China", "The Fatimids and Ghana, rivals for gold", "The papacy and the Normans, against the Franks"],
            correctIndex: 0,
            explanation: "Diplomatic recognition was part of what the caliphal claim was for, alongside the taxation, minting, and campaigning it funded.",
            sourceLessonSlug: "emirate-to-caliphate",
          },
          {
            prompt: "Why did the tax system give the state an interest in conversion staying slow?",
            options: ["Non-Muslim subjects paid a tax Muslims did not", "Converts gained a share of conquered land", "Only dhimmis owed military service", "Converts moved to caliphal jurisdiction"],
            correctIndex: 0,
            explanation: "A fiscal system built on the distinction has a built-in reason not to want the distinction to vanish quickly.",
            sourceLessonSlug: "emirate-to-caliphate",
          },
          {
            prompt: "Which agricultural change does the lesson attribute to al-Andalus's connections?",
            options: ["Irrigation and new crops moving west", "Pasture replacing grain on the plains", "Dry-farming replacing Roman terraces", "State estates worked by enslaved labor"],
            correctIndex: 0,
            explanation: "Citrus, rice, sugar cane, and cotton travel west across the Islamic world along with the irrigation methods that made them viable.",
            sourceLessonSlug: "emirate-to-caliphate",
          },
          {
            prompt: "Al-Hakam II ruled in which years?",
            options: ["961 to 976", "929 to 961", "912 to 929", "976 to 1009"],
            correctIndex: 0,
            explanation: "He was a book collector and patron on a scale that became legendary, in the exact sense that the legend outgrew the evidence.",
            sourceLessonSlug: "emirate-to-caliphate",
          },
          {
            prompt: "Who held effective power after al-Hakam II?",
            options: ["Al-Mansur, a chief minister", "Abd al-Rahman III, out of retirement", "A council of Amazigh commanders", "The Fatimid caliph, by annexation"],
            correctIndex: 0,
            explanation: "He ruled in the name of a child caliph and campaigned relentlessly against the Christian north.",
            sourceLessonSlug: "emirate-to-caliphate",
          },
          {
            prompt: "What is al-Mansur reported to have done to the palace library?",
            options: ["Purged works he judged heterodox", "Moved it to Madinat al-Zahra", "Opened it to the public", "Sold it to the Fatimids"],
            correctIndex: 0,
            explanation: "Which is part of why no catalog survives, and part of why the famous volume count cannot be checked.",
            sourceLessonSlug: "emirate-to-caliphate",
          },
          {
            prompt: "What structural weakness did rule by a strongman create?",
            options: ["A succession problem once he was gone", "Dependence on Fatimid subsidies", "Loss of the caliphal title", "A move of the capital to the frontier"],
            correctIndex: 0,
            explanation: "A state whose functioning depends on one person has no answer for the moment that person is gone.",
            sourceLessonSlug: "emirate-to-caliphate",
          },
          {
            prompt: "Which claim about tenth-century Cordoba is safe to make?",
            options: ["It was among the largest cities of the western world", "It held a million residents, the most in Europe", "Its library's 400,000 volumes survived to 1492", "It was the largest city on earth"],
            correctIndex: 0,
            explanation: "The scale and sophistication are well established. The specific numbers attached to them almost never are.",
            sourceLessonSlug: "cordoba-and-its-numbers",
          },
          {
            prompt: "Which technology reached the Islamic west before Latin Europe?",
            options: ["Paper", "Movable type", "Clocks", "The moldboard plow"],
            correctIndex: 0,
            explanation: "Paper sits alongside paved and lit streets, running water, public baths, hospitals, and markets in the well-evidenced list.",
            sourceLessonSlug: "cordoba-and-its-numbers",
          },
          {
            prompt: "What is the strongest surviving physical evidence for Cordoba's scale?",
            options: ["The Great Mosque", "The city walls", "Madinat al-Zahra", "The Roman bridge"],
            correctIndex: 0,
            explanation: "Begun in the late eighth century and enlarged repeatedly, and still standing to be measured.",
            sourceLessonSlug: "cordoba-and-its-numbers",
          },
          {
            prompt: "What does the lesson say about women in Cordoba's scholarly culture?",
            options: ["They copied manuscripts and taught", "They were barred from textual work", "They held the chief judgeships", "They were confined to poetry"],
            correctIndex: 0,
            explanation: "It sits in the well-evidenced column, alongside professional practice of law, medicine, astronomy, and poetry.",
            sourceLessonSlug: "cordoba-and-its-numbers",
          },
          {
            prompt: "What stands behind the 400,000-volume figure?",
            options: ["Later literary sources, and no catalog", "A surviving inventory for al-Hakam II", "An Abbasid envoy's count in 970", "Shelf space in the excavated palace"],
            correctIndex: 0,
            explanation: "The collection was dispersed or purged under al-Mansur and destroyed in the civil war, so nothing survives to check the number against.",
            sourceLessonSlug: "cordoba-and-its-numbers",
          },
          {
            prompt: "How should the caliphal library be described honestly?",
            options: ["Extraordinary, with its size unestablished", "As holding 400,000 volumes", "As a nineteenth-century invention", "As unknowable, even as to existence"],
            correctIndex: 0,
            explanation: "Extraordinary by the standards of its world is defensible. A specific count is not, and it is the count that gets attacked.",
            sourceLessonSlug: "cordoba-and-its-numbers",
          },
          {
            prompt: "How are premodern city populations estimated?",
            options: ["From built area, water, and grain supply", "From parish baptism and burial registers", "From tax rolls, which mostly survive", "From property-transfer house counts"],
            correctIndex: 0,
            explanation: "Every one of those methods carries wide error bars, which is why serious estimates disagree with each other.",
            sourceLessonSlug: "cordoba-and-its-numbers",
          },
          {
            prompt: "What do serious estimates say about the claim of a million residents?",
            options: ["They fall far below it", "They confirm it around 1000", "They cannot be made for Cordoba", "They exceed it"],
            correctIndex: 0,
            explanation: "And they disagree with each other, which is the ordinary condition of premodern demography.",
            sourceLessonSlug: "cordoba-and-its-numbers",
          },
          {
            prompt: "Why is an inflated number a trap rather than a harmless flourish?",
            options: ["It discredits the true claims beside it", "It comes from a sixteenth-century forgery", "The true figures are even larger", "It makes the period sound modern"],
            correctIndex: 0,
            explanation: "A reader who checks one unsupported number will discount the sourced material sitting next to it, and the sourced material is remarkable enough.",
            sourceLessonSlug: "cordoba-and-its-numbers",
          },
          {
            prompt: "Which comparison with Latin Europe survives scrutiny?",
            options: ["Paper, street lighting, running water, and scholars", "A literacy rate ten times higher", "More people than France and England", "Universities older than Bologna"],
            correctIndex: 0,
            explanation: "Cordoba genuinely had those things while most of Latin Europe had none of them. That is the claim worth making.",
            sourceLessonSlug: "cordoba-and-its-numbers",
          },
          {
            prompt: "What three questions does the lesson give for any impressive premodern number?",
            options: ["What document, does it survive, how many centuries", "Who benefits, who repeated it, and who first challenged it", "Is it round, is it plausible, and does another source agree", "What units, what date, and what modern equivalent"],
            correctIndex: 0,
            explanation: "Applied to the library the answers are a catalog, no, and several, which is a reason to describe it without a number.",
            sourceLessonSlug: "cordoba-and-its-numbers",
          },
          {
            prompt: "Applying that method to the Cordoba library gives which answers?",
            options: ["A catalog, no, and several", "A tax register, yes, and one", "An excavation report, partly, and none", "A royal decree, yes, and two"],
            correctIndex: 0,
            explanation: "The needed document is a catalog, none survives, and several centuries separate the collection from the earliest source giving a figure.",
            sourceLessonSlug: "cordoba-and-its-numbers",
          },
          {
            prompt: "The conclusion the lesson draws about the library is what?",
            options: ["Describe it without a number", "Use the lowest figure in circulation", "Omit the library entirely", "Quote it with its source's century"],
            correctIndex: 0,
            explanation: "The absence of a checkable count is not a reason to dismiss the collection, only a reason not to attach a number to it.",
            sourceLessonSlug: "cordoba-and-its-numbers",
          },
          {
            prompt: "Which detail of the conquest story does the lesson treat as secure?",
            options: ["The frame, not the vivid detail", "The number of ships used", "The wording of Tariq's address", "Which faction invited the crossing"],
            correctIndex: 0,
            explanation: "A mostly Amazigh army under Arab authority ended the Visigothic kingdom in the 710s. Everything tellable around it is late.",
            sourceLessonSlug: "the-crossing-of-711",
          },
          {
            prompt: "Musa ibn Nusayr's role in the conquest was what?",
            options: ["Governor of North Africa, crossing in 712", "Field commander at the Guadalete", "Abbasid envoy sent to recall Tariq", "A Visigothic count who changed sides"],
            correctIndex: 0,
            explanation: "Tariq crossed in 711 under his authority, and Musa followed with a second force the next year.",
            sourceLessonSlug: "the-crossing-of-711",
          },
          {
            prompt: "The permanent northern frontier of al-Andalus emerged how?",
            options: ["A Christian polity survived and expanded in the north", "The caliphs fixed it by treaty after Poitiers", "The Pyrenees were agreed with the Franks in 778", "Amazigh settlers refused to garrison the north"],
            correctIndex: 0,
            explanation: "What began as a front line during the ninth century became a permanent feature of the peninsula rather than a temporary one.",
            sourceLessonSlug: "emirate-to-caliphate",
          },
          {
            prompt: "Ninth-century urban Christian resistance in al-Andalus is remembered how?",
            options: ["As martyrdom or as banditry, depending on the chronicle", "Uniformly as martyrdom, in Christian and Muslim sources", "As a single organized revolt led from the north", "As entirely peaceful, since arms were illegal"],
            correctIndex: 0,
            explanation: "Which is a small, concrete example of how much a source's allegiance changes what an event is called.",
            sourceLessonSlug: "emirate-to-caliphate",
          },
          {
            prompt: "The Cordoban state's scale is best evidenced by which combination?",
            options: ["Taxing, minting, and campaigning", "Its library and its capital's population", "Its mosques and its aqueducts", "Its navy and its Atlantic trade"],
            correctIndex: 0,
            explanation: "Those are activities that leave documents, coins, and archaeology, unlike the numbers popular accounts prefer.",
            sourceLessonSlug: "emirate-to-caliphate",
          },
          {
            prompt: "Which is the correct order of titles in Cordoba?",
            options: ["Emir in 756, caliph in 929", "Caliph in 756, emir in 929", "Sultan in 711, caliph in 1009", "Governor until 929, then caliph"],
            correctIndex: 0,
            explanation: "The gap of nearly two centuries between the two is the political history of the emirate.",
            sourceLessonSlug: "emirate-to-caliphate",
          },
          {
            prompt: "The Treaty of Tudmir is valuable to historians chiefly because it is what?",
            options: ["A surviving text of an actual surrender agreement", "The only document naming Tariq ibn Ziyad by name", "A forgery whose exposure reshaped the field in the 1970s", "A Latin translation of a lost Arabic conquest chronicle"],
            correctIndex: 0,
            explanation: "It shows the mechanism directly, rather than requiring the mechanism to be inferred from a later narrative.",
            sourceLessonSlug: "the-crossing-of-711",
          },
          {
            prompt: "What made al-Andalus's ninth-century revolts hard to suppress?",
            options: ["They came from several directions at once", "They were financed by Abbasid Baghdad", "They held the province with the grain", "Royal claimants with legitimate titles led them"],
            correctIndex: 0,
            explanation: "Amazigh, muwallad, and urban Christian grievances were distinct, so no single settlement resolved them.",
            sourceLessonSlug: "emirate-to-caliphate",
          },
          {
            prompt: "Which is a fair description of Andalusi cities in this period?",
            options: ["Large, walled, and commercially connected", "Small administrative centers with little trade", "Open and unwalled, with no internal threat", "Purely military garrisons, by law"],
            correctIndex: 0,
            explanation: "Their links ran to North Africa and the eastern Mediterranean, which is how goods, crops, and texts moved.",
            sourceLessonSlug: "emirate-to-caliphate",
          },
          {
            prompt: "The habit this section is really teaching is what?",
            options: ["Separating the secure frame from the vivid detail", "Preferring Arabic sources to Latin ones", "Rejecting claims without an excavated object", "Dating events to the decade, not the year"],
            correctIndex: 0,
            explanation: "It applies to the conquest narrative, to the library figure, and to the population claim in exactly the same way.",
            sourceLessonSlug: "cordoba-and-its-numbers",
          },
          {
            prompt: "Public baths, hospitals, and markets belong to which column?",
            options: ["The well-established one", "The contested one", "The disputed one", "The legendary one"],
            correctIndex: 0,
            explanation: "They sit with paved and lit streets, running water, paper, and a working bureaucracy with archives.",
            sourceLessonSlug: "cordoba-and-its-numbers",
          },
          {
            prompt: "Which professions were practiced professionally in Cordoba, per the lesson?",
            options: ["Law, medicine, astronomy, and poetry", "Engineering and cartography, not medicine", "Only law and theology", "Astronomy alone"],
            correctIndex: 0,
            explanation: "A scholarly culture with paid, trained practitioners is a stronger claim than any headcount, and it is the one the evidence supports.",
            sourceLessonSlug: "cordoba-and-its-numbers",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 — Learning, translation, and the limits of the claim
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "learning-in-al-andalus",
      title: "9 · What was actually produced there",
      section: "Section 3 · Learning, translation, and the limits of the claim",
      body: `The strongest case for al-Andalus does not need a single unverifiable number. It rests on named people, surviving books, and datable manuscripts.

**Surgery.** Al-Zahrawi, known in Latin as Abulcasis, worked at Cordoba in the tenth century and compiled a medical encyclopedia, the *Kitab al-Tasrif*, whose surgical section describes instruments with drawings and sets out procedures for cautery, lithotomy, and the management of fractures and wounds. That surgical section was translated into Latin and read in European medical faculties for centuries. This is the model of a well-founded claim: a named author, an extant text, a documented translation, and a traceable readership.

**Astronomy.** Al-Zarqali, Latinized as Arzachel, worked at Toledo in the eleventh century, refined instruments, and contributed to the astronomical tables associated with that city. Those tables circulated in Latin and were used for calculation across Europe. Again the chain is checkable: text, translation, use.

**Philosophy.** Ibn Rushd of Cordoba, known in Latin as Averroes, wrote commentaries on Aristotle so thorough that Latin scholastics referred to him simply as the Commentator. His work reached Paris in translation and set off a genuine intellectual crisis there, because it forced theologians to argue with a fully worked-out Aristotelian system rather than with fragments. Ibn Tufayl and Ibn Bajja belong to the same tradition. Ibn Hazm, a Cordoban jurist and writer, produced both a comparative study of religious doctrine and *The Ring of the Dove*, a treatise on love that still reads well.

**Jewish learning, and the qualification it carries.** Maimonides was born in Cordoba around 1138 and became one of the most influential Jewish philosophers and legal scholars in history. He also **fled**: his family left al-Andalus under Almohad rule and he wrote his major works in Egypt. That fact belongs in any honest account, because a story about Andalusi tolerance that quietly uses Maimonides as evidence is using a refugee as proof of hospitality.

**What this record does and does not license.** It licenses saying that al-Andalus was a major center of medicine, astronomy, mathematics, philosophy, and poetry whose products were read across the Mediterranean and in Latin Europe. It does not license treating every scholar of the Islamic world as Andalusi. Ibn Sina, Latinized as Avicenna, was Persian and never went near Iberia, and his *Canon* reached Europe through the same translation channels for reasons that have nothing to do with al-Andalus. Getting that boundary right makes the Andalusi claim stronger, not weaker, because it makes it checkable.

:::reveal What four things make the al-Zahrawi claim well founded rather than merely impressive? ||| A named author, a surviving text (the Kitab al-Tasrif), a documented Latin translation of its surgical section, and a traceable readership in European medical faculties.

:::reveal Why must an honest account of Maimonides mention that he left al-Andalus? ||| Because his family fled Almohad rule and he wrote his major works in Egypt. Citing him as evidence of Andalusi tolerance uses a refugee as proof of hospitality.

## Vocabulary
- **Kitab al-Tasrif**: al-Zahrawi's medical encyclopedia; its surgical section, with instrument drawings, was translated into Latin and taught for centuries.
- **Toledan Tables**: astronomical tables associated with eleventh-century Toledo and al-Zarqali, later circulated and used in Latin Europe.
- **The Commentator**: the name Latin scholastics used for Ibn Rushd, marking how completely his Aristotle commentaries dominated the reading of Aristotle.
- **Scope boundary**: the discipline of not claiming scholars of the wider Islamic world, such as the Persian Ibn Sina, for al-Andalus.

## Sources
- Catlos, B. A. (2018). *Kingdoms of faith: A new history of Islamic Spain*. Basic Books.
- Kennedy, H. (1996). *Muslim Spain and Portugal: A political history of al-Andalus*. Longman.
- Glick, T. F. (2005). *Islamic and Christian Spain in the early Middle Ages* (2nd rev. ed.). Brill.
- Constable, O. R. (Ed.). (2012). *Medieval Iberia: Readings from Christian, Muslim, and Jewish sources* (2nd ed.). University of Pennsylvania Press.`,
    },
    {
      slug: "the-translation-pipeline",
      title: "10 · How the books actually moved",
      section: "Section 3 · Learning, translation, and the limits of the claim",
      body: `Ideas do not travel by proximity. They travel because specific people, in specific places, are paid to move them. The Iberian case is unusually well documented, so you can watch the mechanism work.

**Two earlier stages you need first.** Greek scientific and philosophical texts had been translated into Arabic in Abbasid Baghdad from the eighth century onward, a state-backed movement Dimitri Gutas argues was driven by the political and ideological needs of the early Abbasid regime rather than by simple curiosity (Gutas, 1998). Islamic scholars then did not merely preserve those texts; they argued with them, corrected them, and produced new work. Both stages must be in place before the Iberian stage makes sense.

**Toledo, after 1085.** Toledo fell to Castile in 1085 with its libraries and its Arabic-reading population substantially intact. Over the following century it became the most productive site of Arabic-to-Latin translation in Europe. **Gerard of Cremona**, who died in 1187, is the central figure: he came to Toledo looking for Ptolemy's *Almagest*, stayed, and is credited with a very large body of translations covering astronomy, medicine, mathematics, and Aristotle. **Dominicus Gundissalinus** worked there on philosophical texts.

**It was a program, not an accident.** Charles Burnett argues that the Toledo translations show coherence rather than randomness: Gerard and Gundissalinus concentrated on different fields, and Gerard's output follows a recognizable plan, working through a curriculum rather than translating whatever came to hand (Burnett, 2001). Translation also ran through collaboration, commonly a Jewish or Mozarab intermediary rendering Arabic into Romance and a Latin scholar putting the Romance into Latin.

**What arrived, and what it did.** Aristotle's natural philosophy and logic, Ptolemy's astronomy, Euclid, al-Khwarizmi on algebra and calculation, Ibn Sina and al-Zahrawi on medicine, and Ibn Rushd's commentaries. The effect on Latin Europe was not a gentle enrichment. Aristotle arrived with commentary attached, and the universities spent the thirteenth century fighting about what to do with him.

**State it precisely, and it is unassailable.** The defensible claim is that a large body of Greek and Arabic scientific and philosophical work entered Latin Europe through Iberia and Sicily in the twelfth and thirteenth centuries, transforming its universities. Notice what that claim does not require: that Latin Europe had no learning of its own, that all classical texts came this way, that the transmission was one-directional, or that the translators were Muslim. Several of the most important were Christians, and some texts arrived from Byzantium instead. The precise version is both true and much harder to knock down.

:::reveal Why does the Toledo pipeline count as a program rather than an accident, in Burnett's argument? ||| Because the output is patterned: Gerard of Cremona and Dominicus Gundissalinus concentrated on different fields, and Gerard's translations follow a recognizable curriculum rather than tracking whatever manuscripts happened to appear.

:::reveal Name three things the precise transmission claim does NOT require. ||| That Latin Europe had no learning of its own, that all classical texts arrived this way, and that the translators were Muslim. Several were Christians, and some texts came through Byzantium.

## Vocabulary
- **Graeco-Arabic translation movement**: the earlier, state-backed rendering of Greek scientific and philosophical works into Arabic in Abbasid Baghdad.
- **Gerard of Cremona**: the most prolific Toledo translator, died 1187, credited with a large body of astronomical, medical, mathematical, and Aristotelian translations.
- **Dominicus Gundissalinus**: a Toledo translator who concentrated on philosophical texts, working alongside Gerard on a different part of the field.
- **Intermediary translation**: the common two-stage method in which a Jewish or Mozarab scholar rendered Arabic into Romance and a Latin scholar rendered the Romance into Latin.

## Sources
- Burnett, C. (2001). The coherence of the Arabic-Latin translation program in Toledo in the twelfth century. *Science in Context, 14*(1-2), 249-288.
- Gutas, D. (1998). *Greek thought, Arabic culture: The Graeco-Arabic translation movement in Baghdad and early Abbasid society*. Routledge.
- Glick, T. F. (2005). *Islamic and Christian Spain in the early Middle Ages* (2nd rev. ed.). Brill.
- Catlos, B. A. (2018). *Kingdoms of faith: A new history of Islamic Spain*. Basic Books.`,
    },
    {
      slug: "where-the-claims-outrun-the-evidence",
      title: "11 · Where the popular claims outrun the evidence",
      section: "Section 3 · Learning, translation, and the limits of the claim",
      body: `This lesson exists because the true story is strong enough that inflating it is a bad trade. Every claim below is widely repeated, and each one weakens the case it was meant to support.

**Claim: the Moors ended Europe's Dark Ages.** The problem is the frame. Medievalists abandoned Dark Ages as a description of the early medieval centuries decades ago, because the period produced law, agriculture, architecture, manuscript culture, and institutions that the label hides. A claim built on a discarded frame inherits its weakness. The defensible version, from the previous lesson, is about a specific transmission with named translators and datable manuscripts.

**Claim: Abbas ibn Firnas flew in the ninth century.** The account of a controlled flight appears in al-Maqqari, a North African writer of the late sixteenth and early seventeenth centuries, roughly seven hundred years after the event. No independent contemporary source describes it. A verse by the Cordoban poet Mumin ibn Said mocking Ibn Firnas for flying with vulture feathers is quoted in that tradition, which is suggestive of some attempt but is satire, not a flight report. **The honest statement is that Ibn Firnas was a real and inventive figure of ninth-century Cordoba and that the flight rests on one very late account.**

**Claim: the library held 400,000 volumes.** Covered in Section 2. No catalog survives, so no one can check it.

**Claim: al-Andalus was a paradise of tolerance.** Section 4 takes the argument on properly. For now: the *dhimmi* framework was legal inequality, the Almohads persecuted Jews and Christians hard enough to push Maimonides out of the country, and pogroms happened. Coexistence and hierarchy were the same system, not alternating ones.

**Why any of this matters.** A reader who checks one claim and finds it hollow does not stop at that claim. The whole account becomes suspect, including the parts that are excellent. That is the mechanism by which a well-intentioned exaggeration does more damage than an omission, and it is why this course would rather hand you a smaller number of claims you can defend in an argument.

**The reusable test.** Where does this claim first appear in writing? How long after the event? Is there an independent source, meaning one not copying the first? And does the strongest version of the claim require anything the sources do not contain? Run those four on any impressive assertion, in this field or another one.

:::reveal What exactly is wrong with saying the Moors ended Europe's Dark Ages? ||| The frame is discarded. Medievalists reject Dark Ages as a description of the early medieval centuries, so the claim inherits the weakness of the label instead of resting on the datable transmission that actually happened.

:::reveal State the Ibn Firnas flight the way the evidence supports. ||| He was a real and inventive figure in ninth-century Cordoba, and the flight account rests on al-Maqqari, writing roughly seven centuries later, with no independent contemporary source.

## Vocabulary
- **Al-Maqqari**: the North African writer of the late sixteenth and early seventeenth centuries whose work is the source for the Ibn Firnas flight story.
- **Independent source**: a source that is not copying the first one. Two texts repeating one original are one piece of evidence, not two.
- **Discarded frame**: a category, such as Dark Ages, that specialists have abandoned, so that any claim built on it starts from a weak position.
- **Overclaim cost**: the way one unsupported assertion transfers doubt to the well-evidenced claims standing beside it.

## Sources
- al-Maqqari, A. (1840-1843). *The history of the Mohammedan dynasties in Spain* (P. de Gayangos, Trans.; Vols. 1-2). Oriental Translation Fund.
- Catlos, B. A. (2018). *Kingdoms of faith: A new history of Islamic Spain*. Basic Books.
- Glick, T. F. (2005). *Islamic and Christian Spain in the early Middle Ages* (2nd rev. ed.). Brill.
- Kennedy, H. (1996). *Muslim Spain and Portugal: A political history of al-Andalus*. Longman.`,
    },
    {
      slug: "quiz-learning-and-transmission",
      title: "12 · Knowledge check: learning, translation, and the limits",
      section: "Section 3 · Learning, translation, and the limits of the claim",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Al-Zahrawi is known in Latin by which name?",
            options: ["Abulcasis", "Avicenna", "Arzachel", "Averroes"],
            correctIndex: 0,
            explanation: "Avicenna is Ibn Sina, Arzachel is al-Zarqali, and Averroes is Ibn Rushd. Keeping the four apart is basic hygiene in this field.",
            sourceLessonSlug: "learning-in-al-andalus",
          },
          {
            prompt: "What is the Kitab al-Tasrif?",
            options: ["Al-Zahrawi's medical encyclopedia", "Ibn Rushd's commentary on Aristotle", "The Toledo astronomical tables", "Ibn Hazm's study of religious sects"],
            correctIndex: 0,
            explanation: "Its surgical section, with instrument drawings, was translated into Latin and read in European medical faculties for centuries.",
            sourceLessonSlug: "learning-in-al-andalus",
          },
          {
            prompt: "Which procedures does al-Zahrawi's surgical section cover?",
            options: ["Cautery, lithotomy, fractures, and wounds", "Cataract couching and trepanation only", "Obstetric procedures only", "Amputation and blood transfusion"],
            correctIndex: 0,
            explanation: "The section is illustrated with drawings of the instruments, which is part of why it traveled so well.",
            sourceLessonSlug: "learning-in-al-andalus",
          },
          {
            prompt: "What four features make a claim like the al-Zahrawi one well founded?",
            options: ["Named author, extant text, documented translation, traceable readership", "Contemporary praise, royal patronage, wide fame, and long survival", "Multiple manuscripts, a printed edition, a modern translation, and a museum object", "An eyewitness, a date, a place, and a surviving building"],
            correctIndex: 0,
            explanation: "Each link can be checked separately, which is exactly what an unsourceable number cannot offer.",
            sourceLessonSlug: "learning-in-al-andalus",
          },
          {
            prompt: "Al-Zarqali worked where and on what?",
            options: ["Toledo, on astronomy and instruments", "Cordoba, on surgery and its instruments", "Seville, on law and religions", "Granada, on Alhambra hydraulics"],
            correctIndex: 0,
            explanation: "He contributed to the astronomical tables associated with eleventh-century Toledo, which later circulated in Latin.",
            sourceLessonSlug: "learning-in-al-andalus",
          },
          {
            prompt: "What did Latin scholastics call Ibn Rushd?",
            options: ["The Commentator", "The Philosopher", "The Physician", "The Andalusian"],
            correctIndex: 0,
            explanation: "The name marks how completely his commentaries dominated the Latin reading of Aristotle.",
            sourceLessonSlug: "learning-in-al-andalus",
          },
          {
            prompt: "Why did Ibn Rushd's work cause a crisis in Paris?",
            options: ["It supplied a complete Aristotelian system", "It argued against a creator god", "It was written in Hebrew", "It contradicted the Toledan Tables"],
            correctIndex: 0,
            explanation: "Theologians had to argue with a fully worked-out system rather than with the fragments they had been managing before.",
            sourceLessonSlug: "learning-in-al-andalus",
          },
          {
            prompt: "Ibn Hazm of Cordoba wrote which pair of works?",
            options: ["A study of religious doctrine and The Ring of the Dove", "A surgical manual and a set of astronomical tables", "A commentary on Aristotle and a refutation of the Almohad creed", "A history of the conquest and a treatise on Saharan trade routes"],
            correctIndex: 0,
            explanation: "The comparative study of doctrines and the treatise on love come from the same jurist, which says something about the range of the culture.",
            sourceLessonSlug: "learning-in-al-andalus",
          },
          {
            prompt: "Where was Maimonides born, and roughly when?",
            options: ["Cordoba, around 1138", "Fustat in Egypt, around 1138", "Toledo, around 1085", "Granada, around 1200"],
            correctIndex: 0,
            explanation: "He wrote his major works in Egypt after his family left al-Andalus under Almohad rule.",
            sourceLessonSlug: "learning-in-al-andalus",
          },
          {
            prompt: "Why does the lesson insist on saying that Maimonides fled?",
            options: ["Otherwise a refugee is used as proof of hospitality", "His departure was for better patronage", "His Andalusi works are all lost", "His family returned within a decade"],
            correctIndex: 0,
            explanation: "An account of Andalusi tolerance that quietly cites him as evidence has inverted what actually happened to him.",
            sourceLessonSlug: "learning-in-al-andalus",
          },
          {
            prompt: "Ibn Sina's connection to al-Andalus was what?",
            options: ["None; he was Persian and never went there", "He studied at Cordoba before the Canon", "He corresponded with Ibn Rushd", "Andalusis who knew him translated him"],
            correctIndex: 0,
            explanation: "His Canon reached Europe through the same translation channels for reasons that have nothing to do with Iberia.",
            sourceLessonSlug: "learning-in-al-andalus",
          },
          {
            prompt: "Why does drawing that boundary make the Andalusi claim stronger?",
            options: ["It makes the claim checkable", "It leaves fewer scholars to dispute", "Persian work mattered less", "It shifts the claim to medicine"],
            correctIndex: 0,
            explanation: "A claim that can be tested and survives is worth more than a larger claim that collapses at the first check.",
            sourceLessonSlug: "learning-in-al-andalus",
          },
          {
            prompt: "What does the lesson say the Andalusi record does license?",
            options: ["Calling it a major Mediterranean center of learning", "Calling it the sole route for classical learning", "Calling every Islamic scholar an Andalusi", "Calling its faculties the first universities"],
            correctIndex: 0,
            explanation: "Medicine, astronomy, mathematics, philosophy, and poetry, read across the Mediterranean and in Latin Europe.",
            sourceLessonSlug: "learning-in-al-andalus",
          },
          {
            prompt: "Where did Greek scientific texts get translated into Arabic?",
            options: ["Abbasid Baghdad", "Toledo, under Castile", "Cordoba, under al-Hakam II", "Alexandria"],
            correctIndex: 0,
            explanation: "From the eighth century onward, and the Iberian stage only makes sense once this earlier one is in place.",
            sourceLessonSlug: "the-translation-pipeline",
          },
          {
            prompt: "What drove the Graeco-Arabic translation movement, in Gutas's argument?",
            options: ["The political and ideological needs of the Abbasid regime", "The personal curiosity of a few caliphs", "Demand from physicians and engineers", "A captured Greek library's survival"],
            correctIndex: 0,
            explanation: "Gutas (1998) treats it as a state-backed program rather than as simple intellectual appetite.",
            sourceLessonSlug: "the-translation-pipeline",
          },
          {
            prompt: "What did Islamic scholars do with the translated Greek texts?",
            options: ["Argued with them and produced new work", "Preserved them unchanged for Europe", "Retranslated them into Persian only", "Kept them in court libraries, untaught"],
            correctIndex: 0,
            explanation: "The preservation framing is the weaker and less accurate one; correction and original work are the better documented claim.",
            sourceLessonSlug: "the-translation-pipeline",
          },
          {
            prompt: "In what year did Toledo fall to Castile?",
            options: ["1085", "1031", "1212", "1236"],
            correctIndex: 0,
            explanation: "Its libraries and its Arabic-reading population remained substantially intact, which is why the translation work was possible there.",
            sourceLessonSlug: "the-translation-pipeline",
          },
          {
            prompt: "Why was Toledo after 1085 so productive for translation?",
            options: ["Its libraries and Arabic readers stayed", "Castile imported scholars from Baghdad", "The Almoravids exempted it from law", "The papacy funded a translation college"],
            correctIndex: 0,
            explanation: "A conquered city that keeps its books and the people who can read them is the rare condition this kind of work needs.",
            sourceLessonSlug: "the-translation-pipeline",
          },
          {
            prompt: "Gerard of Cremona came to Toledo looking for what?",
            options: ["Ptolemy's Almagest", "Ibn Rushd's commentaries", "Al-Zahrawi's surgical manual", "The Toledan Tables"],
            correctIndex: 0,
            explanation: "He stayed, and is credited with a very large body of translations across astronomy, medicine, mathematics, and Aristotle.",
            sourceLessonSlug: "the-translation-pipeline",
          },
          {
            prompt: "In what year did Gerard of Cremona die?",
            options: ["1187", "1085", "1212", "1248"],
            correctIndex: 0,
            explanation: "His working life covers most of the twelfth-century Toledo effort.",
            sourceLessonSlug: "the-translation-pipeline",
          },
          {
            prompt: "Dominicus Gundissalinus concentrated on which field at Toledo?",
            options: ["Philosophy", "Astronomy", "Surgery and pharmacology", "Maliki law"],
            correctIndex: 0,
            explanation: "The division of labor between him and Gerard is part of Burnett's evidence that the effort was planned.",
            sourceLessonSlug: "the-translation-pipeline",
          },
          {
            prompt: "What does Burnett argue about the Toledo translations?",
            options: ["They show a coherent, planned program", "That they were hasty and unreliable", "That they were really made in Sicily", "That Gerard translated whatever came"],
            correctIndex: 0,
            explanation: "Burnett (2001) points to the division of fields and to Gerard's output following a recognizable curriculum.",
            sourceLessonSlug: "the-translation-pipeline",
          },
          {
            prompt: "How did the two-stage translation method work?",
            options: ["Arabic to Romance, then Romance to Latin", "Arabic to Hebrew, then Hebrew to Greek", "Arabic to Latin directly, then corrected", "Arabic read aloud and translated live"],
            correctIndex: 0,
            explanation: "Commonly a Jewish or Mozarab intermediary produced the Romance and a Latin scholar produced the Latin.",
            sourceLessonSlug: "the-translation-pipeline",
          },
          {
            prompt: "Which body of work entered Latin Europe through these channels?",
            options: ["Aristotle, Ptolemy, Euclid, al-Khwarizmi, and Ibn Rushd", "Only medical texts, never philosophy", "Only Arabic originals, no Greek texts", "Poetry and history for the vernacular"],
            correctIndex: 0,
            explanation: "Al-Zahrawi and Ibn Sina on medicine belong on the same list, alongside the logic and natural philosophy.",
            sourceLessonSlug: "the-translation-pipeline",
          },
          {
            prompt: "What effect did the arriving Aristotle have on Latin universities?",
            options: ["A century of argument about what to do with him", "Immediate and untroubled adoption into the curriculum", "Rejection, leaving the texts unread for centuries", "A shift of the universities toward medicine"],
            correctIndex: 0,
            explanation: "Aristotle arrived with commentary attached, which is what made him hard to absorb quietly.",
            sourceLessonSlug: "the-translation-pipeline",
          },
          {
            prompt: "Which region, besides Iberia, is named as a transmission route?",
            options: ["Sicily", "Egypt", "The Balkans", "North Africa"],
            correctIndex: 0,
            explanation: "The defensible claim names Iberia and Sicily together in the twelfth and thirteenth centuries.",
            sourceLessonSlug: "the-translation-pipeline",
          },
          {
            prompt: "Were the Toledo translators Muslim?",
            options: ["Several of the most important were Christians", "All of them were, which gave it authority", "None, since Muslims were barred after 1085", "All were Jewish, under royal protection"],
            correctIndex: 0,
            explanation: "The work was collaborative across communities, and assuming otherwise is one of the easiest errors to make here.",
            sourceLessonSlug: "the-translation-pipeline",
          },
          {
            prompt: "Which assumption does the precise transmission claim avoid?",
            options: ["That Latin Europe had no learning of its own", "That translation happened in more than one city", "That Arabic texts were translated into Latin at all", "That universities were active then"],
            correctIndex: 0,
            explanation: "It also avoids claiming that all classical texts came this way, or that the flow ran in only one direction.",
            sourceLessonSlug: "the-translation-pipeline",
          },
          {
            prompt: "Why do medievalists reject the term Dark Ages?",
            options: ["The period produced law, agriculture, architecture, and institutions", "Because the sources are actually more abundant than for the later Middle Ages", "Because the term was invented by nineteenth-century nationalists to insult Spain", "Because the period is too short to warrant a label of its own"],
            correctIndex: 0,
            explanation: "A claim built on a discarded frame inherits the frame's weakness instead of resting on the datable transmission.",
            sourceLessonSlug: "where-the-claims-outrun-the-evidence",
          },
          {
            prompt: "Who is the source for the Ibn Firnas flight story?",
            options: ["Al-Maqqari", "The Chronicle of 754", "Ibn Hazm", "Gerard of Cremona"],
            correctIndex: 0,
            explanation: "A North African writer of the late sixteenth and early seventeenth centuries, roughly seven hundred years after the event.",
            sourceLessonSlug: "where-the-claims-outrun-the-evidence",
          },
          {
            prompt: "How large is the gap between the alleged flight and its source?",
            options: ["About seven centuries", "About fifty years", "About a century and a half", "About three hundred years"],
            correctIndex: 0,
            explanation: "And no independent contemporary source describes the flight at all.",
            sourceLessonSlug: "where-the-claims-outrun-the-evidence",
          },
          {
            prompt: "What is the status of the verse by Mumin ibn Said?",
            options: ["Satire, not a flight report", "A sworn eyewitness statement", "A later forgery in the manuscripts", "A technical account of the wings"],
            correctIndex: 0,
            explanation: "Mocking Ibn Firnas for flying with vulture feathers is suggestive of some attempt and is not evidence of a controlled flight.",
            sourceLessonSlug: "where-the-claims-outrun-the-evidence",
          },
          {
            prompt: "How should Ibn Firnas be described honestly?",
            options: ["A real, inventive figure with a very late flight story", "A legendary figure whose existence cannot be established", "The first aviator, confirmed by multiple ninth-century witnesses", "A Toledo translator later confused with an inventor"],
            correctIndex: 0,
            explanation: "Both halves matter: he existed and was inventive, and the flight rests on one source seven centuries downstream.",
            sourceLessonSlug: "where-the-claims-outrun-the-evidence",
          },
          {
            prompt: "Why can no one check the 400,000-volume library claim?",
            options: ["No catalog survives, and the books are gone", "The figure survives only in Latin", "The number counts pages, not volumes", "Madinat al-Zahra is unexcavated"],
            correctIndex: 0,
            explanation: "The collection was dispersed or purged under al-Mansur and destroyed in the civil war that followed.",
            sourceLessonSlug: "where-the-claims-outrun-the-evidence",
          },
          {
            prompt: "What does the lesson say about coexistence and hierarchy in al-Andalus?",
            options: ["They were one and the same system", "They alternated dynasty by dynasty", "Only Christians faced hierarchy", "Coexistence was a modern invention"],
            correctIndex: 0,
            explanation: "The dhimmi framework was legal inequality, the Almohads persecuted hard enough to push Maimonides out, and pogroms happened.",
            sourceLessonSlug: "where-the-claims-outrun-the-evidence",
          },
          {
            prompt: "Why is an unsupported claim worse than an omission?",
            options: ["Doubt spreads to the well-evidenced claims beside it", "It is harder to correct once printed", "Errors, unlike omissions, cannot be removed", "Readers remember exaggerations longer"],
            correctIndex: 0,
            explanation: "A reader who checks one claim and finds it hollow does not stop at that claim, which is the whole cost of the trade.",
            sourceLessonSlug: "where-the-claims-outrun-the-evidence",
          },
          {
            prompt: "What are the four questions in the reusable test?",
            options: ["First written appearance, gap, independence, and what the claim needs", "Author, date, publisher, and edition", "Who benefits, who repeats it, who denies it, and who profits", "Language, manuscript count, provenance, and modern translation"],
            correctIndex: 0,
            explanation: "The fourth is the sharpest: does the strongest version of the claim require anything the sources do not contain?",
            sourceLessonSlug: "where-the-claims-outrun-the-evidence",
          },
          {
            prompt: "What does an independent source mean in this test?",
            options: ["One that is not copying the first", "One in a different language", "One held in another archive", "One whose author had no stake"],
            correctIndex: 0,
            explanation: "Two texts repeating one original are one piece of evidence, not two, however far apart they were written.",
            sourceLessonSlug: "where-the-claims-outrun-the-evidence",
          },
          {
            prompt: "The lesson's preferred trade is what?",
            options: ["Fewer claims you can defend in an argument", "More claims, since readers check few", "Only claims with physical evidence", "Only claims from recent scholarship"],
            correctIndex: 0,
            explanation: "The true story about al-Andalus is strong enough that inflating it is a losing trade.",
            sourceLessonSlug: "where-the-claims-outrun-the-evidence",
          },
          {
            prompt: "Which of these is the DEFENSIBLE version of the transmission claim?",
            options: ["Greek and Arabic work entered Latin Europe through Iberia and Sicily", "The Moors gave Europe everything it knew about science and philosophy", "Without al-Andalus, Aristotle would have been lost to the world entirely", "Latin Europe had no schools of its own before the Toledo translations"],
            correctIndex: 0,
            explanation: "In the twelfth and thirteenth centuries, transforming the universities. It is true and much harder to knock down.",
            sourceLessonSlug: "the-translation-pipeline",
          },
          {
            prompt: "Which pairing of scholar and field is correct?",
            options: ["Al-Zarqali, astronomy", "Al-Zahrawi, philosophy", "Ibn Hazm, surgery", "Ibn Rushd, hydraulics"],
            correctIndex: 0,
            explanation: "Al-Zahrawi is surgery and medicine, Ibn Hazm is law and comparative religion, Ibn Rushd is philosophy.",
            sourceLessonSlug: "learning-in-al-andalus",
          },
          {
            prompt: "Ibn Tufayl and Ibn Bajja belong to which tradition?",
            options: ["Andalusi philosophy", "The Toledo translation school", "Abbasid mathematics", "Nasrid court poetry"],
            correctIndex: 0,
            explanation: "They sit alongside Ibn Rushd in the same Andalusi philosophical line.",
            sourceLessonSlug: "learning-in-al-andalus",
          },
          {
            prompt: "The Toledan Tables were used for what?",
            options: ["Calculation across Europe", "Atlantic navigation", "Dating Christian feasts", "Castilian tax assessment"],
            correctIndex: 0,
            explanation: "They circulated in Latin, which completes the same checkable chain of text, translation, and use.",
            sourceLessonSlug: "learning-in-al-andalus",
          },
          {
            prompt: "Ideas travel because of what, according to this section?",
            options: ["Specific people paid to move them", "Proximity between two cultures", "Trade volume carrying texts", "Military conquest"],
            correctIndex: 0,
            explanation: "Which is why the Iberian case is instructive: the people, places, and payments are unusually well documented.",
            sourceLessonSlug: "the-translation-pipeline",
          },
          {
            prompt: "Which of these would NOT survive the reusable test?",
            options: ["A ninth-century controlled flight known from one seventeenth-century writer", "A surgical text with surviving manuscripts and a dated Latin translation", "A translator's death date recorded in more than one independent source", "A tax system described in administrative documents of its own period"],
            correctIndex: 0,
            explanation: "The gap and the absence of an independent source are exactly what the test is built to catch.",
            sourceLessonSlug: "where-the-claims-outrun-the-evidence",
          },
          {
            prompt: "Why does the course prefer named translators to sweeping claims?",
            options: ["A named translator can be checked", "Names are easier to remember", "Sweeping claims are always false", "Translators mattered more than authors"],
            correctIndex: 0,
            explanation: "Gerard of Cremona and Dominicus Gundissalinus can be looked up, dated, and their output listed. A sweeping claim cannot.",
            sourceLessonSlug: "the-translation-pipeline",
          },
          {
            prompt: "What did the Almohads do that bears on the tolerance argument?",
            options: ["Persecuted Jews and Christians severely", "Funded the Toledo translators", "Guaranteed dhimmi status by treaty", "Made Maimonides their court physician"],
            correctIndex: 0,
            explanation: "Hard enough to push Maimonides and his family out of the country, which Section 4 takes up in full.",
            sourceLessonSlug: "where-the-claims-outrun-the-evidence",
          },
          {
            prompt: "How does the lesson describe the cost of a well-intentioned exaggeration?",
            options: ["It does more damage than an omission", "It is harmless if the point is true", "It matters only to specialists", "A footnote can correct it"],
            correctIndex: 0,
            explanation: "Because the whole account becomes suspect, including the parts that are excellent.",
            sourceLessonSlug: "where-the-claims-outrun-the-evidence",
          },
          {
            prompt: "What is the correct relationship between the Baghdad and Toledo stages?",
            options: ["Baghdad first, and Toledo depends on it", "They ran at once and independently", "Toledo first, then Baghdad from Latin", "Neither, since both used Greek originals"],
            correctIndex: 0,
            explanation: "Greek into Arabic in Baghdad from the eighth century, then Arabic into Latin in Iberia from the twelfth.",
            sourceLessonSlug: "the-translation-pipeline",
          },
          {
            prompt: "Which claim about al-Andalus does this section treat as unassailable?",
            options: ["It was a major center whose books were read abroad", "The only literate society of its day", "It saved learning otherwise destroyed", "It invented the university"],
            correctIndex: 0,
            explanation: "Named authors, surviving texts, dated translations, and traceable readership carry that claim without any unverifiable number.",
            sourceLessonSlug: "learning-in-al-andalus",
          },
          {
            prompt: "The strongest case for al-Andalus rests on what?",
            options: ["Named people, surviving books, datable manuscripts", "The size of its libraries and cities", "The length and extent of Muslim rule", "The number of languages spoken at the caliphal court"],
            correctIndex: 0,
            explanation: "None of which requires a single figure that no surviving document could have produced.",
            sourceLessonSlug: "learning-in-al-andalus",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4 — Berber empires and the long retreat
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "fitna-and-the-taifas",
      title: "13 · The caliphate breaks",
      section: "Section 4 · Berber empires and the long retreat",
      body: `The caliphate of Cordoba did not decline slowly. It came apart in about twenty years, and the shape of everything afterward follows from how it broke.

**The fitna.** From 1009 a civil war, the *fitna*, tore the caliphate apart. Rival claimants, Amazigh troops, saqaliba commanders, and Cordoban factions fought over a state whose legitimacy had rested on a family and a strongman rather than on institutions. Madinat al-Zahra was sacked. In 1031 the caliphate was formally abolished, and no one restored it.

**The taifas.** What replaced it was roughly two dozen successor states, the **taifa** kingdoms: Seville, Zaragoza, Toledo, Badajoz, Granada, Valencia, and others. Their rulers came from different origins, Arab lineages in some, Amazigh dynasties in others, saqaliba commanders in a few, which is one more reason the single-people picture of al-Andalus fails at the first contact with a list of names.

**Culture up, security down.** The taifa courts competed for poets, scientists, and prestige, and the eleventh century is one of the richest periods in Andalusi literary and scientific history. It is also when Muslim Iberia lost the ability to defend itself. Small states with rival dynasties do not coordinate, and their northern neighbors noticed.

**Parias.** The Christian kingdoms, chiefly Castile and Leon under Fernando I and then Alfonso VI, extracted **parias**, protection tribute, from taifa rulers who paid to be left alone or to be defended against each other. Gold moved north in quantity and financed churches, castles, and armies. This is the moment to retire the picture of a permanent religious war: Christian rulers rented armies to Muslim rulers, Muslim rulers paid Christian rulers to attack other Muslims, and the Cid served both sides in a career that Castilian legend later cleaned up considerably.

**1085 and the invitation.** Alfonso VI took Toledo in 1085. It was the first great Christian capture of a major Andalusi city, and it changed the arithmetic: the taifa rulers understood they could be taken one at a time. Several of them then made a decision they knew was dangerous. They invited a Saharan Amazigh power from North Africa to intervene on their behalf. The line attributed to the ruler of Seville, that he would rather be a camel driver in Africa than a swineherd in Castile, may or may not be authentic, but it captures the calculation exactly: the taifas chose the risk they understood over the one they did not.

:::reveal What does the parias system show about the supposed permanent religious war? ||| That it was not one. Christian kingdoms took protection tribute from Muslim rulers, rented armies to them, and were paid to attack other Muslim states, while figures like the Cid served both sides.

:::reveal Why did the taifa rulers invite a North African power in after 1085? ||| Because the fall of Toledo showed that Christian kingdoms could take them one at a time, so they chose the danger they understood, a Saharan Amazigh intervention, over the one they did not.

## Vocabulary
- **Fitna**: the civil war that began in 1009 and ended with the formal abolition of the Cordoban caliphate in 1031.
- **Taifa**: one of roughly two dozen successor states that divided al-Andalus after 1031, with rulers of Arab, Amazigh, and saqaliba origin.
- **Parias**: protection tribute paid by taifa rulers to Christian kingdoms, which moved large amounts of gold north.
- **Alfonso VI**: the Castilian and Leonese king who took Toledo in 1085 and made the taifas' isolation obvious to them.

## Sources
- Kennedy, H. (1996). *Muslim Spain and Portugal: A political history of al-Andalus*. Longman.
- Catlos, B. A. (2018). *Kingdoms of faith: A new history of Islamic Spain*. Basic Books.
- Constable, O. R. (Ed.). (2012). *Medieval Iberia: Readings from Christian, Muslim, and Jewish sources* (2nd ed.). University of Pennsylvania Press.`,
    },
    {
      slug: "almoravids-and-almohads",
      title: "14 · Two Amazigh empires from the south",
      section: "Section 4 · Berber empires and the long retreat",
      body: `The two powers that answered the taifas' call were both North African, both Amazigh, and both religious reform movements before they were states. They also both ended by making the Andalusi situation worse.

**The Almoravids.** A confederation of Sanhaja Amazigh groups of the western Sahara, including the Lamtuna and Massufa, organized around the teaching of the jurist Abd Allah ibn Yasin from the 1040s. Under **Yusuf ibn Tashfin** they took Morocco, founded Marrakesh as a capital, and crossed into Iberia at the taifas' request. At Sagrajas, also called Zallaqa, in 1086 they defeated Alfonso VI. Then they did the thing invited armies do: judging the taifa rulers decadent and their tax practices unlawful, they deposed them and annexed al-Andalus outright.

**Ghana, and a real historiographical dispute.** Older accounts state flatly that the Almoravids conquered the empire of Ghana in 1076. David Conrad and Humphrey Fisher challenged that in a two-part study, arguing that the external Arabic sources do not support a conquest and that the story was constructed by later writers and modern historians reading them (Conrad & Fisher, 1982, 1983). Other scholars have defended a version of Almoravid pressure on Ghana. The course's position is the honest one: **the Almoravid presence in the Sahel is real and the conquest of Ghana is disputed**, so anyone who states it as a plain fact is skipping an argument that has been running for decades.

**The Almohads.** A second movement, from the Masmuda Amazigh of the High Atlas, founded on the teaching of **Ibn Tumart**, who died around 1130 and who proclaimed himself the *mahdi* and preached a militant insistence on the absolute unity of God. Under Abd al-Mumin the Almohads destroyed the Almoravids, took North Africa and al-Andalus, and beat Castile at Alarcos in 1195.

**The Almohads and non-Muslims.** This is where the tolerance narrative meets its hardest counterexample. Almohad rule effectively ended the *dhimmi* arrangement in their territory: Jews and Christians faced conversion, exile, or death, synagogues and churches were closed, and Jewish communities that had existed for centuries in the Maghreb and al-Andalus were shattered. Maimonides was one of the people who left. Any account of al-Andalus that cannot accommodate this period is not an account of al-Andalus.

**1212.** At **Las Navas de Tolosa** in 1212 a coalition of Castile, Aragon, Navarre, and others broke the Almohad army. Almohad power in Iberia collapsed within a generation. Cordoba fell in 1236, Valencia in 1238, Seville in 1248. What remained was the emirate of Granada, a Nasrid state surviving as a Castilian tributary, which is what it was for most of its 250 years.

:::reveal What did the Almoravids do after winning at Sagrajas in 1086? ||| They judged the taifa rulers decadent and their taxes unlawful, deposed them, and annexed al-Andalus outright, which is the standard risk of inviting a foreign army to save you.

:::reveal Why does the course refuse to state the Almoravid conquest of Ghana as a fact? ||| Because Conrad and Fisher argued from the external Arabic sources that no conquest is supported and that the story was constructed later, and other scholars defend a version of Almoravid pressure. The dispute is live.

## Vocabulary
- **Almoravids**: a Sanhaja Amazigh confederation of the western Sahara, organized around Abd Allah ibn Yasin's teaching and led into Iberia by Yusuf ibn Tashfin.
- **Sagrajas (Zallaqa)**: the 1086 battle at which the Almoravids defeated Alfonso VI, shortly before annexing the taifas they had come to rescue.
- **Ibn Tumart**: the Masmuda Amazigh preacher, died around 1130, whose doctrine of divine unity founded the Almohad movement.
- **Las Navas de Tolosa**: the 1212 battle at which a Christian coalition broke Almohad power in Iberia.
- **Nasrid Granada**: the last Muslim state in Iberia, surviving from the thirteenth century mostly as a Castilian tributary.

## Sources
- Conrad, D., & Fisher, H. (1982). The conquest that never was: Ghana and the Almoravids, 1076. I. The external Arabic sources. *History in Africa, 9*, 21-59.
- Conrad, D., & Fisher, H. (1983). The conquest that never was: Ghana and the Almoravids, 1076. II. The local oral sources. *History in Africa, 10*, 53-78.
- Kennedy, H. (1996). *Muslim Spain and Portugal: A political history of al-Andalus*. Longman.
- Catlos, B. A. (2018). *Kingdoms of faith: A new history of Islamic Spain*. Basic Books.`,
    },
    {
      slug: "reconquista-the-word-and-the-thing",
      title: "15 · Reconquista, convivencia, and two arguments",
      section: "Section 4 · Berber empires and the long retreat",
      body: `Two words dominate how this period gets discussed, and both are modern arguments wearing medieval clothes.

**Reconquista.** The term describes an eight-century Christian project to recover a lost Christian Spain. Martín Ríos Saloma traced how that framing was assembled by historians and nationalists between the sixteenth and nineteenth centuries, becoming a load-bearing part of Spanish national self-description (Ríos Saloma, 2011). The medieval record is untidier: long stretches of coexistence and tribute, Christian kings allied with Muslim rulers against other Christians, Muslim rulers hiring Christian troops, and expansion driven by land, taxes, and dynastic advantage as much as by religion. **Something real happened**, the territory under Muslim rule shrank almost continuously from 1085 to 1492, and calling that process a single eight-hundred-year reconquest imports a purpose the participants did not share.

**Convivencia.** The Spanish word for coexistence, made a scholarly term by Américo Castro, who argued that Iberian identity was formed by the interaction of Christians, Muslims, and Jews. Claudio Sánchez-Albornoz rejected it and argued for a Spanish essence that predated and resisted Islam. That argument has never fully ended.

**The modern round, with both sides named.** María Rosa Menocal's *The Ornament of the World* (2002) carried a strong version of convivencia into English-language popular reading, drawing heavily on poetry and philosophy. Darío Fernández-Morera's *The Myth of the Andalusian Paradise* (2016) attacked it, emphasizing legal subordination, slavery, and religious persecution, and arguing that the golden-age picture is a modern romance. S. J. Pearce replied that Fernández-Morera's own book is a polemic that misrepresents the field it claims to correct, and situated it within a wider political revisionism (Pearce, 2020).

**Where this course stands.** It does not declare a winner, and it will not pretend the disagreement is only about tone. It does note two things both sides mostly concede. Legal inequality was structural and permanent: *dhimmi* status was subordination with rules. And genuine intercommunal collaboration is documented in specific, checkable places, including the translation workshops of Toledo, medical practice, court administration, and commerce. A framework that has to deny either of those is fighting the evidence.

**What to do with a contested field.** Read at least one serious writer on each side. Notice which claims each one is careful with and which they wave through. Ask what evidence would change their mind, and whether their book contains any. Then hold the question open, which is a legitimate final position and is very often the correct one.

:::reveal What is Ríos Saloma's argument about the term Reconquista? ||| That the eight-century framing was assembled by historians and nationalists between the sixteenth and nineteenth centuries and became part of Spanish national self-description, rather than describing a purpose medieval participants shared.

:::reveal Name the two things both sides of the convivencia argument mostly concede. ||| That legal inequality was structural and permanent under dhimmi status, and that documented intercommunal collaboration existed in specific places such as translation, medicine, administration, and commerce.

## Vocabulary
- **Reconquista**: the framing of Iberian history as one long Christian recovery, traced by Ríos Saloma to the sixteenth through nineteenth centuries.
- **Convivencia**: coexistence as a scholarly term, associated with Américo Castro and rejected by Claudio Sánchez-Albornoz.
- **Polemic**: a work written to win an argument rather than to survey a field, a charge made in both directions in this dispute.
- **Holding a question open**: declining to declare a winner when the evidence does not support one, which is a position rather than an evasion.

## Sources
- Ríos Saloma, M. F. (2011). *La Reconquista: Una construcción historiográfica (siglos XVI-XIX)*. Marcial Pons.
- Menocal, M. R. (2002). *The ornament of the world: How Muslims, Jews, and Christians created a culture of tolerance in medieval Spain*. Little, Brown.
- Fernández-Morera, D. (2016). *The myth of the Andalusian paradise: Muslims, Christians, and Jews under Islamic rule in medieval Spain*. ISI Books.
- Pearce, S. J. (2020). The myth of the myth of the Andalusian paradise. *Iberian Connections*. https://iberian-connections.yale.edu/articles/the-myth-of-the-myth-of-the-andalusian-paradise/`,
    },
    {
      slug: "quiz-empires-and-retreat",
      title: "16 · Knowledge check: Berber empires and the long retreat",
      section: "Section 4 · Berber empires and the long retreat",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "In what year did the fitna begin?",
            options: ["1009", "1031", "1085", "976"],
            correctIndex: 0,
            explanation: "The civil war ran for roughly two decades before the caliphate was abolished in 1031.",
            sourceLessonSlug: "fitna-and-the-taifas",
          },
          {
            prompt: "In what year was the caliphate of Cordoba formally abolished?",
            options: ["1031", "1009", "1086", "1212"],
            correctIndex: 0,
            explanation: "No one restored it. What followed were the taifa successor states.",
            sourceLessonSlug: "fitna-and-the-taifas",
          },
          {
            prompt: "Why did the caliphate come apart so quickly?",
            options: ["Its legitimacy rested on a family and a strongman", "A plague halved the southern cities in a decade", "The Fatimids invaded and occupied Cordoba", "The Christian kingdoms struck on every front"],
            correctIndex: 0,
            explanation: "Rather than on institutions, so rival claimants, Amazigh troops, saqaliba commanders, and Cordoban factions had nothing to contest for but the state itself.",
            sourceLessonSlug: "fitna-and-the-taifas",
          },
          {
            prompt: "What happened to Madinat al-Zahra during the fitna?",
            options: ["It was sacked", "It was fortified", "It was sold", "It was abandoned intact"],
            correctIndex: 0,
            explanation: "The palace-city built to announce the caliphate did not outlive it by much.",
            sourceLessonSlug: "fitna-and-the-taifas",
          },
          {
            prompt: "Roughly how many taifa states replaced the caliphate?",
            options: ["About two dozen", "About three", "Around sixty", "Just two"],
            correctIndex: 0,
            explanation: "Seville, Zaragoza, Toledo, Badajoz, Granada, and Valencia are among the larger ones.",
            sourceLessonSlug: "fitna-and-the-taifas",
          },
          {
            prompt: "What origins did taifa ruling houses have?",
            options: ["Arab, Amazigh, and saqaliba", "Uniformly Arab", "Uniformly Amazigh", "Converted Visigothic houses"],
            correctIndex: 0,
            explanation: "One more reason the single-people picture of al-Andalus fails at the first contact with a list of names.",
            sourceLessonSlug: "fitna-and-the-taifas",
          },
          {
            prompt: "What was culturally distinctive about the taifa period?",
            options: ["Courts competing for poets and scientists", "A collapse of literary production", "The closure of the translation workshops", "A ban on philosophy and astronomy"],
            correctIndex: 0,
            explanation: "The eleventh century is one of the richest periods in Andalusi literary and scientific history, and one of the least secure.",
            sourceLessonSlug: "fitna-and-the-taifas",
          },
          {
            prompt: "What were parias?",
            options: ["Protection tribute paid to Christian kingdoms", "Land taxes on taifa rulers' own subjects", "Ransoms for captives taken in raids", "Customs duties between taifa states"],
            correctIndex: 0,
            explanation: "Taifa rulers paid to be left alone or defended against each other, and the gold financed churches, castles, and armies in the north.",
            sourceLessonSlug: "fitna-and-the-taifas",
          },
          {
            prompt: "Which rulers extracted parias from the taifas?",
            options: ["Fernando I and Alfonso VI", "The Almoravid emirs of Marrakesh", "The Fatimid caliphs", "The counts of Barcelona alone"],
            correctIndex: 0,
            explanation: "Castile and Leon are the main beneficiaries, though other Christian rulers took tribute too.",
            sourceLessonSlug: "fitna-and-the-taifas",
          },
          {
            prompt: "What does the parias system disprove?",
            options: ["A permanent, purely religious war", "That the taifas were prosperous", "That Christian kingdoms were weaker", "That gold reached the north at all"],
            correctIndex: 0,
            explanation: "Christian rulers rented armies to Muslim rulers, and Muslim rulers paid Christian rulers to attack other Muslims.",
            sourceLessonSlug: "fitna-and-the-taifas",
          },
          {
            prompt: "How is the Cid's career described in this lesson?",
            options: ["He served both sides", "He fought only for Castile", "He was a Muslim commander", "He refused all service"],
            correctIndex: 0,
            explanation: "Castilian legend later cleaned the record up considerably, which is itself a lesson about how the period gets remembered.",
            sourceLessonSlug: "fitna-and-the-taifas",
          },
          {
            prompt: "What did the fall of Toledo in 1085 make clear to the taifa rulers?",
            options: ["They could be taken one at a time", "The Almoravids wanted payment first", "Castile had ended the parias", "That Cordoba would be the next city to fall"],
            correctIndex: 0,
            explanation: "Which is why several of them made the deliberate and dangerous choice to invite a North African power in.",
            sourceLessonSlug: "fitna-and-the-taifas",
          },
          {
            prompt: "How does the lesson treat the camel-driver line attributed to the ruler of Seville?",
            options: ["It may not be authentic, but it captures the calculation", "As a verbatim Almoravid chancery quotation", "As a Castilian invention to mock them", "As a poem line mistaken for a speech"],
            correctIndex: 0,
            explanation: "The taifas chose the risk they understood over the one they did not, whether or not anyone said it that way.",
            sourceLessonSlug: "fitna-and-the-taifas",
          },
          {
            prompt: "The Almoravids originated among which people?",
            options: ["Sanhaja Amazigh of the western Sahara", "Masmuda Amazigh of the High Atlas mountains", "Arab lineages settled in Ifriqiya", "Soninke of the Ghana empire"],
            correctIndex: 0,
            explanation: "The Lamtuna and Massufa are among the constituent groups. The Masmuda of the Atlas produced the Almohads instead.",
            sourceLessonSlug: "almoravids-and-almohads",
          },
          {
            prompt: "Which jurist's teaching organized the Almoravid movement?",
            options: ["Abd Allah ibn Yasin", "Ibn Tumart, the self-proclaimed mahdi", "Ibn Rushd of Cordoba", "Ibn Hazm"],
            correctIndex: 0,
            explanation: "From the 1040s. Ibn Tumart founded the rival Almohad movement a century later.",
            sourceLessonSlug: "almoravids-and-almohads",
          },
          {
            prompt: "Which city did the Almoravids found as their capital?",
            options: ["Marrakesh", "Fez", "Ceuta", "Sijilmasa"],
            correctIndex: 0,
            explanation: "They took Morocco before crossing into Iberia at the taifas' request.",
            sourceLessonSlug: "almoravids-and-almohads",
          },
          {
            prompt: "Who led the Almoravids into Iberia?",
            options: ["Yusuf ibn Tashfin", "Abd al-Mumin", "Tariq ibn Ziyad", "Abd Allah ibn Yasin"],
            correctIndex: 0,
            explanation: "His personal guard is described in the sources as including thousands of black troops, a detail from Section 1.",
            sourceLessonSlug: "almoravids-and-almohads",
          },
          {
            prompt: "What happened at Sagrajas in 1086?",
            options: ["The Almoravids defeated Alfonso VI", "The Almohads destroyed the Almoravids", "A Christian coalition broke the Almohads", "The taifa rulers were all deposed"],
            correctIndex: 0,
            explanation: "Also called Zallaqa. The annexation of the taifas came afterward, once the Almoravids judged their hosts unfit to rule.",
            sourceLessonSlug: "almoravids-and-almohads",
          },
          {
            prompt: "On what grounds did the Almoravids depose the taifa rulers?",
            options: ["Decadence and unlawful taxation", "Failure to pay for the intervention", "Refusing the Abbasid caliph", "Secret talks with Alfonso VI"],
            correctIndex: 0,
            explanation: "They annexed al-Andalus outright, which is the standard risk of inviting a foreign army to rescue you.",
            sourceLessonSlug: "almoravids-and-almohads",
          },
          {
            prompt: "What did Conrad and Fisher argue about Ghana and the Almoravids?",
            options: ["The external Arabic sources do not support a conquest", "That the conquest dates to 1054, not 1076", "That the Almoravids never reached the Sahel", "That Ghana conquered the Almoravids"],
            correctIndex: 0,
            explanation: "They argued the story was constructed by later writers and by modern historians reading them (Conrad & Fisher, 1982, 1983).",
            sourceLessonSlug: "almoravids-and-almohads",
          },
          {
            prompt: "What is this course's position on the Almoravid conquest of Ghana?",
            options: ["The Sahel presence is real, the conquest is disputed", "The conquest is settled fact", "The movement south is a modern invention", "No sources of any kind survive"],
            correctIndex: 0,
            explanation: "Other scholars defend a version of Almoravid pressure on Ghana, so stating a conquest as plain fact skips a decades-long argument.",
            sourceLessonSlug: "almoravids-and-almohads",
          },
          {
            prompt: "The Almohads came from which Amazigh grouping?",
            options: ["The Masmuda of the High Atlas", "The Sanhaja of the western Sahara", "The Zanata of the eastern Maghreb", "The Lamtuna of the Sahara"],
            correctIndex: 0,
            explanation: "Two Amazigh empires, two different confederations, and the second destroyed the first.",
            sourceLessonSlug: "almoravids-and-almohads",
          },
          {
            prompt: "What did Ibn Tumart proclaim himself?",
            options: ["The mahdi", "Caliph", "Emir of the faithful", "Head of the Almoravids"],
            correctIndex: 0,
            explanation: "He died around 1130, and his doctrine centered on a militant insistence on the absolute unity of God.",
            sourceLessonSlug: "almoravids-and-almohads",
          },
          {
            prompt: "Who led the Almohads to power after Ibn Tumart?",
            options: ["Abd al-Mumin", "Yusuf ibn Tashfin", "Ibn Yasin", "Muhammad I of Granada"],
            correctIndex: 0,
            explanation: "Under him the Almohads destroyed the Almoravids and took both North Africa and al-Andalus.",
            sourceLessonSlug: "almoravids-and-almohads",
          },
          {
            prompt: "What happened at Alarcos in 1195?",
            options: ["The Almohads beat Castile", "Castile broke the Almohad army", "The Almoravids beat Alfonso VI", "Granada became a tributary"],
            correctIndex: 0,
            explanation: "The reverse came seventeen years later at Las Navas de Tolosa.",
            sourceLessonSlug: "almoravids-and-almohads",
          },
          {
            prompt: "What did Almohad rule do to the dhimmi arrangement?",
            options: ["It effectively ended it in their territory", "It extended protection to new groups", "It cut the poll tax to a flat levy", "It left it untouched"],
            correctIndex: 0,
            explanation: "Jews and Christians faced conversion, exile, or death, and synagogues and churches were closed.",
            sourceLessonSlug: "almoravids-and-almohads",
          },
          {
            prompt: "Why is the Almohad period decisive for the tolerance narrative?",
            options: ["It is the hardest counterexample to it", "Only that period is well documented", "The Almohads invented the dhimmi system", "Only then did Jews hold office"],
            correctIndex: 0,
            explanation: "Any account of al-Andalus that cannot accommodate it is not an account of al-Andalus.",
            sourceLessonSlug: "almoravids-and-almohads",
          },
          {
            prompt: "Which battle broke Almohad power in Iberia?",
            options: ["Las Navas de Tolosa, 1212", "Sagrajas, 1086, near Badajoz", "Alarcos, 1195, against Castile", "Guadalete, 711"],
            correctIndex: 0,
            explanation: "A coalition of Castile, Aragon, Navarre, and others. Almohad power in Iberia collapsed within a generation.",
            sourceLessonSlug: "almoravids-and-almohads",
          },
          {
            prompt: "In what order did these cities fall to Christian rulers?",
            options: ["Cordoba 1236, Valencia 1238, Seville 1248", "Seville 1236, Cordoba 1238, Valencia 1248", "Valencia 1236, Seville 1238, Cordoba 1248", "Cordoba 1212, Seville 1236, Valencia 1248"],
            correctIndex: 0,
            explanation: "All three within a dozen years of Las Navas de Tolosa, which is how fast the collapse ran.",
            sourceLessonSlug: "almoravids-and-almohads",
          },
          {
            prompt: "What was Nasrid Granada's usual political status?",
            options: ["A Castilian tributary", "An independent equal of Castile", "A Marinid province", "A joint Castilian-Aragonese protectorate"],
            correctIndex: 0,
            explanation: "For most of its roughly 250 years, which is a much less romantic picture than the last-bastion version.",
            sourceLessonSlug: "almoravids-and-almohads",
          },
          {
            prompt: "What does Ríos Saloma argue about the Reconquista framing?",
            options: ["It was assembled between the sixteenth and nineteenth centuries", "That it describes eleventh-century kings' aims", "That it began as Almohad propaganda", "That it appears in eighth-century chronicles"],
            correctIndex: 0,
            explanation: "By historians and nationalists, becoming a load-bearing part of Spanish national self-description (Ríos Saloma, 2011).",
            sourceLessonSlug: "reconquista-the-word-and-the-thing",
          },
          {
            prompt: "What DID actually happen, on the course's account?",
            options: ["Muslim-ruled territory shrank almost continuously after 1085", "Christian and Muslim territory remained roughly stable until 1492", "Muslim rule grew until 1300, then fell at once", "The peninsula was divided by a fixed treaty line for four centuries"],
            correctIndex: 0,
            explanation: "Something real happened. Calling it a single eight-hundred-year reconquest imports a purpose the participants did not share.",
            sourceLessonSlug: "reconquista-the-word-and-the-thing",
          },
          {
            prompt: "What drove Christian expansion, besides religion?",
            options: ["Land, taxes, and dynastic advantage", "Northern population pressure", "Papal subsidies for campaigning", "A grain shortage in the north"],
            correctIndex: 0,
            explanation: "Which is why Christian kings allied with Muslim rulers against other Christians, and Muslim rulers hired Christian troops.",
            sourceLessonSlug: "reconquista-the-word-and-the-thing",
          },
          {
            prompt: "Who made convivencia a scholarly term?",
            options: ["Américo Castro", "Claudio Sánchez-Albornoz", "María Rosa Menocal", "Martín Ríos Saloma"],
            correctIndex: 0,
            explanation: "He argued Iberian identity was formed by the interaction of Christians, Muslims, and Jews.",
            sourceLessonSlug: "reconquista-the-word-and-the-thing",
          },
          {
            prompt: "What did Claudio Sánchez-Albornoz argue instead?",
            options: ["A Spanish essence that predated and resisted Islam", "That convivencia was real but only in the taifa period", "That Amazigh settlement formed Iberian identity", "That the sources cannot answer it"],
            correctIndex: 0,
            explanation: "The Castro and Sánchez-Albornoz argument has never fully ended, and the modern round inherits it.",
            sourceLessonSlug: "reconquista-the-word-and-the-thing",
          },
          {
            prompt: "What evidence does Menocal's Ornament of the World lean on?",
            options: ["Poetry and philosophy", "Tax and property records", "Archaeological survey", "Inquisition trial records"],
            correctIndex: 0,
            explanation: "Published in 2002, it carried a strong version of convivencia into English-language popular reading.",
            sourceLessonSlug: "reconquista-the-word-and-the-thing",
          },
          {
            prompt: "What does Fernández-Morera's 2016 book emphasize?",
            options: ["Legal subordination, slavery, and persecution", "The scale of the translation movement", "Collapse caused by Amazigh invasions", "Dependence on trans-Saharan gold"],
            correctIndex: 0,
            explanation: "He argues that the golden-age picture is a modern romance rather than a description of the period.",
            sourceLessonSlug: "reconquista-the-word-and-the-thing",
          },
          {
            prompt: "What was S. J. Pearce's reply?",
            options: ["That the book is a polemic misrepresenting the field", "That it understates the severity of Almohad persecution", "That it is correct but thirty years too late", "That its sources are forged, its citations invented"],
            correctIndex: 0,
            explanation: "Pearce (2020) situates it within a wider political revisionism rather than treating it as an ordinary scholarly correction.",
            sourceLessonSlug: "reconquista-the-word-and-the-thing",
          },
          {
            prompt: "Where does this course stand on the convivencia argument?",
            options: ["It declares no winner", "It sides with Menocal", "It sides with Fernández-Morera", "It calls it a matter of tone"],
            correctIndex: 0,
            explanation: "And it refuses to pretend the disagreement is only about tone, which would be its own way of dodging.",
            sourceLessonSlug: "reconquista-the-word-and-the-thing",
          },
          {
            prompt: "Which point do both sides mostly concede?",
            options: ["Legal inequality was structural and permanent", "No Jewish community was ever harmed", "No Christians joined the translations", "The taifa period was impoverished"],
            correctIndex: 0,
            explanation: "Dhimmi status was subordination with rules, and documented intercommunal collaboration existed alongside it.",
            sourceLessonSlug: "reconquista-the-word-and-the-thing",
          },
          {
            prompt: "Where is intercommunal collaboration documented?",
            options: ["Translation, medicine, administration, and commerce", "Only in poetry, which dominates the debate", "Only in the taifa courts and nowhere else", "Only in Toledo, after the city fell in 1085"],
            correctIndex: 0,
            explanation: "Specific and checkable places, which is what makes the concession hard for either side to avoid.",
            sourceLessonSlug: "reconquista-the-word-and-the-thing",
          },
          {
            prompt: "What does the lesson advise doing with a contested field?",
            options: ["Read a serious writer on each side", "Pick the more recent book", "Follow the larger citation count", "Wait for a consensus first"],
            correctIndex: 0,
            explanation: "Then notice which claims each one is careful with, ask what evidence would change their mind, and check whether their book contains any.",
            sourceLessonSlug: "reconquista-the-word-and-the-thing",
          },
          {
            prompt: "Is holding the question open a legitimate final position?",
            options: ["Yes, and often the correct one", "No, a reader must choose a side", "Only for specialists", "Only when both are equally cited"],
            correctIndex: 0,
            explanation: "Declining to declare a winner when the evidence does not support one is a position, not an evasion.",
            sourceLessonSlug: "reconquista-the-word-and-the-thing",
          },
          {
            prompt: "What is a polemic, as this lesson uses the word?",
            options: ["A work written to win an argument", "A work for a popular audience", "A work on one kind of evidence", "A work outside peer review"],
            correctIndex: 0,
            explanation: "Rather than to survey a field. The charge is made in both directions in this dispute.",
            sourceLessonSlug: "reconquista-the-word-and-the-thing",
          },
          {
            prompt: "How long did Nasrid Granada last, roughly?",
            options: ["About 250 years", "About 80 years", "About 400 years", "About 150 years"],
            correctIndex: 0,
            explanation: "From the thirteenth century to 1492, mostly as a Castilian tributary rather than as an independent power.",
            sourceLessonSlug: "almoravids-and-almohads",
          },
          {
            prompt: "Both North African empires ended by doing what to al-Andalus?",
            options: ["Making its situation worse", "Restoring the caliphate", "Withdrawing voluntarily", "Merging it into one Maghrebi state"],
            correctIndex: 0,
            explanation: "Both arrived as reform movements, both annexed what they came to rescue, and both eventually lost it.",
            sourceLessonSlug: "almoravids-and-almohads",
          },
          {
            prompt: "The taifa period illustrates which general pattern?",
            options: ["Cultural flourishing and military weakness together", "Cultural decline from political fragmentation", "Military strength bought by retrenchment", "Political unity despite dynastic rivalry"],
            correctIndex: 0,
            explanation: "Small competing courts bid for poets and scientists and cannot coordinate a defense.",
            sourceLessonSlug: "fitna-and-the-taifas",
          },
          {
            prompt: "Maimonides leaving al-Andalus belongs to which period?",
            options: ["Almohad rule", "The fitna", "The Almoravid annexation", "The Nasrid period"],
            correctIndex: 0,
            explanation: "The Almohads ended the dhimmi arrangement in their territory, and his family was among those who left.",
            sourceLessonSlug: "almoravids-and-almohads",
          },
          {
            prompt: "What is the safest way to summarize the period from 1085 to 1492?",
            options: ["Continuous territorial contraction with untidy politics", "A single sustained religious crusade with a fixed objective", "A stalemate broken only by the fall of Granada in 1492", "A Muslim expansion reversed in the 1400s"],
            correctIndex: 0,
            explanation: "The contraction is real and datable. The purpose attributed to it afterward is the part historians dispute.",
            sourceLessonSlug: "reconquista-the-word-and-the-thing",
          },
          {
            prompt: "Which pairing of movement and homeland is correct?",
            options: ["Almohads, High Atlas", "Almoravids, High Atlas", "Almohads, western Sahara", "Almoravids, eastern Maghreb"],
            correctIndex: 0,
            explanation: "Almoravids came from the Sanhaja of the western Sahara; Almohads from the Masmuda of the High Atlas.",
            sourceLessonSlug: "almoravids-and-almohads",
          },
          {
            prompt: "Why did the gold moving north as parias matter beyond the taifas?",
            options: ["It financed churches, castles, and armies", "It caused inflation in the Christian north", "It was minted into new gold coinage", "It funded the Toledo translators"],
            correctIndex: 0,
            explanation: "The tribute paid to be left alone helped build the capacity that eventually took the taifas anyway.",
            sourceLessonSlug: "fitna-and-the-taifas",
          },
          {
            prompt: "Which two words does this section describe as modern arguments in medieval clothes?",
            options: ["Reconquista and convivencia", "Taifa and parias", "Fitna and mahdi", "Almoravid and Almohad"],
            correctIndex: 0,
            explanation: "Both dominate how the period is discussed, and both carry an argument about Spain rather than a neutral description.",
            sourceLessonSlug: "reconquista-the-word-and-the-thing",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5 — 1492 and the afterlife of the word
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "1492-and-the-broken-guarantees",
      title: "17 · 1492, and what the surrender actually promised",
      section: "Section 5 · 1492 and the afterlife of the word",
      body: `Granada surrendered to Fernando and Isabel on 2 January 1492. The interesting part is not the date. It is that the surrender was a negotiated contract, and that we can read it and watch it fail.

**The capitulations.** The terms agreed before the handover were generous by the standards of the age. Granada's Muslims were to keep their religion, their mosques, their law and judges, their property, their language, and their customs. Those who wished to leave for North Africa could, with their goods. Nobody was to be forced to convert, and converts to Christianity were not to be insulted for it. This was not a sentimental gesture; it was the price of taking a defended city without a long siege.

**The other 1492.** On 31 March 1492 the same monarchs issued the edict, usually called the Alhambra Decree, expelling Jews who would not convert from Castile and Aragon. Tens of thousands left; many converted and remained under permanent suspicion. Two things worth holding together: the guarantees given to Granada's Muslims and the expulsion of Iberia's Jews are the same season, the same crown, and, once you see what happens next, the same trajectory.

**How the guarantee broke.** For about seven years the terms roughly held under Hernando de Talavera, the first archbishop of Granada, who favored persuasion and learning Arabic. Then **Cisneros**, Isabel's confessor and archbishop of Toledo, took a harder line: mass baptisms, pressure on the descendants of earlier converts, and public burnings of Arabic books. The result, entirely predictably, was revolt in the Albaicin quarter and then in the Alpujarras mountains in 1499 and 1500.

**The reinterpretation.** The crown then made an argument worth studying, because it is a move governments still make. Since the Muslims of Granada had rebelled, they had broken the capitulations themselves, and the crown was released from its side. In **1501 and 1502** Castile ordered its Muslims to convert or leave, on terms that made leaving nearly impossible. Aragon followed in **1525 and 1526**. Within a generation there were, in law, no Muslims in Spain at all. There were only new Christians, and a state that did not believe them.

**What this teaches beyond Spain.** A guarantee is only as strong as the willingness to keep it, and a party that wants out of a contract will usually look for a breach by the other side rather than repudiate it openly. Read the capitulations, then read the 1502 order, and the mechanism is completely visible in the documents.

:::reveal What did the Granada capitulations of 1491 and 1492 guarantee? ||| Religion, mosques, law and judges, property, language, and customs, with free departure for those who wished to leave and no forced conversion. They were the price of taking a defended city without a siege.

:::reveal What argument did the crown use to escape the capitulations? ||| That the Granadan revolts of 1499 and 1500 were themselves a breach, so the crown was released from its obligations. The conversion-or-exile orders followed in 1501 and 1502 in Castile and 1525 and 1526 in Aragon.

## Vocabulary
- **Capitulations of Granada**: the negotiated surrender terms guaranteeing religion, law, property, language, and customs to Granada's Muslims.
- **Alhambra Decree**: the edict of 31 March 1492 expelling from Castile and Aragon those Jews who would not convert.
- **Cisneros**: the archbishop of Toledo whose mass baptisms and book burnings in Granada triggered the revolts of 1499 and 1500.
- **Reinterpretation of breach**: the crown's argument that revolt voided the capitulations, releasing it from terms it had signed.
- **New Christian**: a convert, or the descendant of one, treated in law as Christian and in practice as suspect.

## Sources
- Harvey, L. P. (2005). *Muslims in Spain, 1500 to 1614*. University of Chicago Press.
- Catlos, B. A. (2018). *Kingdoms of faith: A new history of Islamic Spain*. Basic Books.
- Constable, O. R. (Ed.). (2012). *Medieval Iberia: Readings from Christian, Muslim, and Jewish sources* (2nd ed.). University of Pennsylvania Press.`,
    },
    {
      slug: "the-moriscos",
      title: "18 · The Moriscos, and the numbers we do and do not have",
      section: "Section 5 · 1492 and the afterlife of the word",
      body: `A **Morisco** was a Muslim of Iberia converted to Christianity, or the descendant of one. The word covers about a century of people the Spanish state had created by decree and then refused to accept.

**Suspicion as a system.** The Inquisition had no authority over Muslims, who were outside the church, but full authority over baptized Christians. Forced conversion therefore did not remove a population from scrutiny; it moved that population into the jurisdiction that could prosecute it. Alongside this ran the statutes of **limpieza de sangre**, purity of blood, which barred people of Jewish or Muslim ancestry from offices, guilds, colleges, and religious orders. This is the point at which Iberian religious categories became inherited, which is why historians of race pay close attention to it.

**1567.** A royal decree banned Arabic in speech and writing, ordered Moorish dress abandoned, prohibited public baths, and required houses to be left open on feast days so that Islamic practice could not be conducted privately. It was a program against a culture, not only against a creed.

**The second Alpujarras war.** The 1567 measures produced a rising in the Alpujarras from 1568 to 1571, fought with great brutality on both sides and ending in defeat and the forced dispersal of Granada's Morisco population into other regions of Castile. Dispersal did not resolve the state's problem; it exported it.

**The expulsion.** Between **1609 and 1614**, under Philip III, the Moriscos were expelled from Spain by a series of decrees. Most went to North Africa, some to France, some to the Ottoman lands. Many were not welcomed at their destinations, having been Christian by law and Spanish in language and habit for generations.

**The number, honestly.** Henri Lapeyre's study, long the standard reference, put the total expelled at roughly 275,000 to 300,000, on the order of four percent of Spain's population. More recent work has proposed higher figures, in some cases much higher. **Give the range and name Lapeyre**, rather than picking one number: the count depends on which decrees you include, how you treat returnees and those who evaded expulsion, and how you read incomplete embarkation records.

:::reveal Why did forced conversion increase rather than reduce state scrutiny of Muslims? ||| Because the Inquisition had no jurisdiction over Muslims, who were outside the church, but full jurisdiction over the baptized. Conversion moved the population into the court that could prosecute it.

:::reveal How should the total of Moriscos expelled between 1609 and 1614 be stated? ||| As a range with its source: Lapeyre's roughly 275,000 to 300,000, with more recent work proposing higher figures. The count depends on which decrees, returnees, and evaders are included.

## Vocabulary
- **Morisco**: a Muslim of Iberia converted to Christianity, or a descendant of one, in the period after the forced conversions.
- **Limpieza de sangre**: purity-of-blood statutes barring people of Jewish or Muslim ancestry from offices, guilds, colleges, and religious orders.
- **The 1567 decree**: the ban on Arabic, Moorish dress, and public baths, with houses to be left open on feast days.
- **Second Alpujarras war**: the rising of 1568 to 1571, ending in defeat and the dispersal of Granada's Moriscos across Castile.
- **Lapeyre's estimate**: the long-standard figure of roughly 275,000 to 300,000 expelled, now contested by higher counts.

## Sources
- Harvey, L. P. (2005). *Muslims in Spain, 1500 to 1614*. University of Chicago Press.
- Lapeyre, H. (1959). *Géographie de l'Espagne morisque*. SEVPEN.
- García-Arenal, M., & Wiegers, G. (Eds.). (2014). *The expulsion of the Moriscos from Spain: A Mediterranean diaspora*. Brill.
- Catlos, B. A. (2018). *Kingdoms of faith: A new history of Islamic Spain*. Basic Books.`,
    },
    {
      slug: "the-afterlife-of-the-word",
      title: "19 · The afterlife of the word",
      section: "Section 5 · 1492 and the afterlife of the word",
      body: `The Moriscos were gone by 1614. The word outlived them by four centuries and is still working, which is the last thing this course has to teach.

**Maurophilia.** Almost as soon as real Muslims had been removed, Spanish literature filled with admirable, chivalrous, romantic Moors. Barbara Fuchs argues that this Moorish material was not a foreign import but a component of Spanish identity that the state was busy disavowing (Fuchs, 2009). A culture can expel a population and keep its clothes, its architecture, and its ballads, and Spain did.

**The English stage.** English writers inherited the word without the history. On the early modern English stage a Moor could be a North African, a sub-Saharan African, a Muslim, or a stage villain, and often several at once. That imprecision is a fact about English usage, not evidence about the population of al-Andalus, and it is one of the main routes by which Moor came to read simply as black in later English.

**Blackamoors and heraldry.** European heraldry, sculpture, and decorative art carry Moor's heads and blackamoor figures from the medieval period onward. They are evidence of how Europeans imagined and used the figure, in servants' costume and on coats of arms, rather than portraits from life.

**Moorish Revival.** From the nineteenth century, architects across Europe and the Americas built in a Moorish style: synagogues, theaters, hotels, and bathhouses with horseshoe arches and stucco. The style is a nineteenth-century construction quoting al-Andalus, not a survival of it.

**The Moorish Science Temple.** In the United States, Noble Drew Ali founded a temple in Newark in 1913 and established his movement in Chicago in 1925, teaching that Black Americans were of Moorish descent and that reclaiming that nationality was the route out of the condition slavery and segregation had made. Susan Nance's study reads the movement as a sophisticated synthesis drawing on Western esotericism, Freemasonry, and revisionist history, developed by and for southern migrants in 1920s Chicago (Nance, 2002). Its historical influence on later Black religious movements in America is substantial and well documented. **Two things stay separate here.** What a community teaches about its own origins is a matter for that community. And the specific modern legal claim, advanced by some self-described Moorish nationals, that a Moorish identity exempts a person from United States law has been rejected by American courts consistently; anyone acting on it should expect to lose.

**Where the course leaves you.** The word began as a name for people in Roman North Africa, was pinned onto Muslim Iberia for eight centuries, hardened into a claim about bodies, survived the disappearance of everyone it originally described, and is still being used to make arguments. That is worth knowing on its own, and it is a pattern you will meet again with other words.

:::reveal What does Barbara Fuchs argue about Spanish maurophilia? ||| That the Moorish material in Spanish literature and culture was not a foreign import but a component of Spanish identity, appearing in force just as the state was disavowing and expelling the population it came from.

:::reveal What two things does the lesson insist on keeping separate about the Moorish Science Temple? ||| A community's teaching about its own origins, which is its own affair and historically influential, and the specific legal claim that Moorish identity exempts a person from United States law, which American courts have consistently rejected.

## Vocabulary
- **Maurophilia**: the taste for admirable, chivalrous Moorish figures in Spanish literature and culture after the expulsions.
- **Blackamoor**: a figure in European heraldry and decorative art, evidence of how Europeans imagined the Moor rather than a portrait from life.
- **Moorish Revival**: the nineteenth-century architectural style quoting al-Andalus, used for synagogues, theaters, hotels, and bathhouses.
- **Moorish Science Temple**: the movement founded by Noble Drew Ali, in Newark in 1913 and Chicago from 1925, teaching Moorish descent as a route out of segregation.

## Sources
- Fuchs, B. (2009). *Exotic nation: Maurophilia and the construction of early modern Spain*. University of Pennsylvania Press.
- Nance, S. (2002). Mystery of the Moorish Science Temple: Southern Blacks and American alternative spirituality in 1920s Chicago. *Religion and American Culture, 12*(2), 123-166. https://doi.org/10.1525/rac.2002.12.2.123
- Heng, G. (2018). *The invention of race in the European Middle Ages*. Cambridge University Press.
- Ramey, L. T. (2014). *Black legacies: Race and the European Middle Ages*. University Press of Florida.`,
    },
    {
      slug: "quiz-1492-and-after",
      title: "20 · Knowledge check: 1492 and the afterlife of the word",
      section: "Section 5 · 1492 and the afterlife of the word",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "On what date did Granada surrender?",
            options: ["2 January 1492", "31 March 1492", "12 October 1492", "2 January 1502"],
            correctIndex: 0,
            explanation: "The surrender was a negotiated contract, which is what makes its later breach readable in the documents.",
            sourceLessonSlug: "1492-and-the-broken-guarantees",
          },
          {
            prompt: "Which monarchs took the surrender of Granada?",
            options: ["Fernando and Isabel", "Philip III", "Alfonso VI", "Charles V"],
            correctIndex: 0,
            explanation: "The same crown issued the Alhambra Decree against the Jews of Castile and Aragon less than three months later.",
            sourceLessonSlug: "1492-and-the-broken-guarantees",
          },
          {
            prompt: "What did the capitulations guarantee Granada's Muslims?",
            options: ["Religion, law, property, language, and customs", "Tax exemption for three generations", "Seats in the cortes and the right to bear arms", "Autonomy under a Muslim governor"],
            correctIndex: 0,
            explanation: "Plus their mosques and judges, free departure for those who wished to leave, and no forced conversion.",
            sourceLessonSlug: "1492-and-the-broken-guarantees",
          },
          {
            prompt: "Why were the surrender terms so generous?",
            options: ["They were the price of avoiding a long siege", "Isabel had promised them years earlier", "The papacy required them first", "Castile lacked troops to hold the city"],
            correctIndex: 0,
            explanation: "Taking a defended city without a siege had a cost, and the capitulations were it. Not a sentimental gesture.",
            sourceLessonSlug: "1492-and-the-broken-guarantees",
          },
          {
            prompt: "What did the Alhambra Decree of 31 March 1492 order?",
            options: ["Expulsion of Jews who would not convert", "Expulsion of Granada's Muslims", "Closure of every mosque within a year", "Confiscation of private Arabic books"],
            correctIndex: 0,
            explanation: "From Castile and Aragon. Tens of thousands left; many converted and remained under permanent suspicion.",
            sourceLessonSlug: "1492-and-the-broken-guarantees",
          },
          {
            prompt: "Who was Hernando de Talavera?",
            options: ["Granada's first archbishop, who favored persuasion", "Isabel's confessor, who ordered the mass baptisms of 1499", "The Nasrid vizier who negotiated the terms of surrender", "The inquisitor general for the Moriscos"],
            correctIndex: 0,
            explanation: "He learned Arabic and the terms roughly held for about seven years under him.",
            sourceLessonSlug: "1492-and-the-broken-guarantees",
          },
          {
            prompt: "What did Cisneros do in Granada?",
            options: ["Mass baptisms and burnings of Arabic books", "Rebuilt the Alhambra as an archiepiscopal palace", "Negotiated harsher capitulations", "Expelled the Muslim population to North Africa by sea"],
            correctIndex: 0,
            explanation: "Along with pressure on the descendants of earlier converts. The result was revolt in the Albaicin and then the Alpujarras.",
            sourceLessonSlug: "1492-and-the-broken-guarantees",
          },
          {
            prompt: "When did the first Granadan revolts occur?",
            options: ["1499 and 1500", "1492", "1568 to 1571", "1609"],
            correctIndex: 0,
            explanation: "In the Albaicin quarter and then in the Alpujarras mountains, and entirely predictably given what preceded them.",
            sourceLessonSlug: "1492-and-the-broken-guarantees",
          },
          {
            prompt: "How did the crown justify abandoning the capitulations?",
            options: ["It said the revolts were the breach", "It voided them when the emir left Spain", "It obtained a papal dispensation", "It said they bound only the signers"],
            correctIndex: 0,
            explanation: "A party that wants out of a contract usually looks for a breach by the other side rather than repudiating openly.",
            sourceLessonSlug: "1492-and-the-broken-guarantees",
          },
          {
            prompt: "When did Castile order its Muslims to convert or leave?",
            options: ["1501 and 1502", "1492", "1525 and 1526", "1567"],
            correctIndex: 0,
            explanation: "On terms that made leaving nearly impossible. Aragon followed in 1525 and 1526.",
            sourceLessonSlug: "1492-and-the-broken-guarantees",
          },
          {
            prompt: "When did Aragon follow Castile's conversion orders?",
            options: ["1525 and 1526", "1501 and 1502", "1499", "1609"],
            correctIndex: 0,
            explanation: "Within a generation there were, in law, no Muslims in Spain at all. Only new Christians, and a state that did not believe them.",
            sourceLessonSlug: "1492-and-the-broken-guarantees",
          },
          {
            prompt: "What general lesson does the lesson draw from the capitulations?",
            options: ["A guarantee is only as strong as the will to keep it", "A written contract is always safer than a spoken promise", "Religious guarantees are weaker than property ones", "A treaty signed under military pressure has no legal force"],
            correctIndex: 0,
            explanation: "Read the capitulations, then the 1502 order, and the whole mechanism is visible in the documents.",
            sourceLessonSlug: "1492-and-the-broken-guarantees",
          },
          {
            prompt: "What is a Morisco?",
            options: ["An Iberian Muslim converted to Christianity, or a descendant", "A Christian who had adopted Arabic language and dress under Muslim rule", "A Muslim living under Christian rule while keeping his religion", "A North African settler who arrived with the Almoravids"],
            correctIndex: 0,
            explanation: "The word covers about a century of people the Spanish state created by decree and then refused to accept.",
            sourceLessonSlug: "the-moriscos",
          },
          {
            prompt: "Why did the Inquisition gain authority over converted Muslims?",
            options: ["Its jurisdiction ran over the baptized", "A 1492 papal bull extended it to Granada", "The crown gave it civil cases", "Converts were legally foreigners"],
            correctIndex: 0,
            explanation: "It had none over Muslims, who were outside the church. Conversion moved the population into the court that could prosecute it.",
            sourceLessonSlug: "the-moriscos",
          },
          {
            prompt: "What did the limpieza de sangre statutes do?",
            options: ["Barred people of Jewish or Muslim ancestry from offices and guilds", "Required all new Christians to prove baptism before three witnesses", "Taxed converts at a higher rate than old Christians for two generations", "Prohibited marriage between old Christians and new Christians"],
            correctIndex: 0,
            explanation: "Colleges and religious orders too. This is where Iberian religious categories became inherited, which is why historians of race attend to it.",
            sourceLessonSlug: "the-moriscos",
          },
          {
            prompt: "What did the royal decree of 1567 ban?",
            options: ["Arabic, Moorish dress, and public baths", "Trade with North Africa and large vessels", "Residence in Granada by anyone of Morisco descent", "Morisco marriage without a license"],
            correctIndex: 0,
            explanation: "It also required houses to be left open on feast days, so Islamic practice could not be conducted privately.",
            sourceLessonSlug: "the-moriscos",
          },
          {
            prompt: "How does the lesson characterize the 1567 measures?",
            options: ["A program against a culture, not only a creed", "A routine enforcement of the rules of 1502", "A local Granada initiative without royal backing", "A concession relaxing earlier restrictions"],
            correctIndex: 0,
            explanation: "Language, dress, and bathing are not doctrines, and banning them targets a way of life rather than a belief.",
            sourceLessonSlug: "the-moriscos",
          },
          {
            prompt: "When was the second Alpujarras war fought?",
            options: ["1568 to 1571", "1499 to 1500", "1609 to 1614", "1525 to 1526"],
            correctIndex: 0,
            explanation: "Fought with great brutality on both sides, and ending in the forced dispersal of Granada's Moriscos into other regions of Castile.",
            sourceLessonSlug: "the-moriscos",
          },
          {
            prompt: "What did the dispersal of Granada's Moriscos achieve?",
            options: ["It exported the state's problem rather than resolving it", "It ended Morisco resistance permanently across all of Spain", "It integrated the population within a single generation", "It reduced the Morisco population by roughly half"],
            correctIndex: 0,
            explanation: "Which is part of why the crown reached for expulsion four decades later.",
            sourceLessonSlug: "the-moriscos",
          },
          {
            prompt: "Under which king were the Moriscos expelled?",
            options: ["Philip III", "Fernando and Isabel", "Charles V", "Philip II"],
            correctIndex: 0,
            explanation: "By a series of decrees between 1609 and 1614.",
            sourceLessonSlug: "the-moriscos",
          },
          {
            prompt: "Over which years did the expulsion run?",
            options: ["1609 to 1614", "1492 to 1502", "1568 to 1571", "1525 to 1533"],
            correctIndex: 0,
            explanation: "Most of those expelled went to North Africa, some to France, and some to the Ottoman lands.",
            sourceLessonSlug: "the-moriscos",
          },
          {
            prompt: "Why were many Moriscos unwelcome at their destinations?",
            options: ["They were Christian in law and Spanish in language and habit", "North African treaties barred their entry", "They were stripped of property at the ports", "They would not settle outside the coast"],
            correctIndex: 0,
            explanation: "Generations of forced conversion had made them strangers on both sides of the water.",
            sourceLessonSlug: "the-moriscos",
          },
          {
            prompt: "What figure did Lapeyre's study give for the total expelled?",
            options: ["Roughly 275,000 to 300,000", "Roughly one million", "Roughly 50,000", "Roughly 2 million"],
            correctIndex: 0,
            explanation: "On the order of four percent of Spain's population. More recent work has proposed higher figures.",
            sourceLessonSlug: "the-moriscos",
          },
          {
            prompt: "How should the expulsion total be reported?",
            options: ["As a range, with Lapeyre named", "As Lapeyre's figure alone", "As the highest recent estimate", "As unknowable, with no records"],
            correctIndex: 0,
            explanation: "The count depends on which decrees are included and how returnees, evaders, and incomplete embarkation records are treated.",
            sourceLessonSlug: "the-moriscos",
          },
          {
            prompt: "Which three factors make the expulsion count uncertain?",
            options: ["Which decrees, returnees and evaders, and incomplete records", "Language barriers, lost archives, and deliberate falsification", "Plague deaths, shipwrecks, and unrecorded births at sea", "Currency conversion, calendar differences, and provincial boundaries"],
            correctIndex: 0,
            explanation: "Which is why a single confident number is the wrong shape of answer here.",
            sourceLessonSlug: "the-moriscos",
          },
          {
            prompt: "What is maurophilia?",
            options: ["A taste for admirable Moorish figures in Spanish culture", "A nineteenth-century revival of horseshoe arches", "A doctrine shielding converts from the Inquisition", "The study of Arabic manuscripts in Spain"],
            correctIndex: 0,
            explanation: "It filled Spanish literature almost as soon as the actual Muslim population had been removed.",
            sourceLessonSlug: "the-afterlife-of-the-word",
          },
          {
            prompt: "What does Barbara Fuchs argue about that material?",
            options: ["It was part of Spanish identity, not a foreign import", "That it was imported from French chivalric romance", "That it was mainly written by escaped Moriscos", "That the Inquisition suppressed it wherever found"],
            correctIndex: 0,
            explanation: "A culture can expel a population and keep its clothes, its architecture, and its ballads, and Spain did (Fuchs, 2009).",
            sourceLessonSlug: "the-afterlife-of-the-word",
          },
          {
            prompt: "On the early modern English stage, a Moor could be what?",
            options: ["Several things at once, often imprecisely", "Strictly a North African Muslim", "Strictly a sub-Saharan African", "Only a comic figure"],
            correctIndex: 0,
            explanation: "North African, sub-Saharan African, Muslim, or stage villain. That imprecision is a fact about English usage, not evidence about al-Andalus.",
            sourceLessonSlug: "the-afterlife-of-the-word",
          },
          {
            prompt: "Why does English stage usage matter to this course?",
            options: ["It is a main route by which Moor came to read as black", "Because English playwrights knew al-Andalus firsthand", "Because it preserves the medieval Iberian sense", "Because translation back changed Spanish usage"],
            correctIndex: 0,
            explanation: "English writers inherited the word without the history, and the imprecision traveled with it.",
            sourceLessonSlug: "the-afterlife-of-the-word",
          },
          {
            prompt: "What are blackamoor figures in European art evidence of?",
            options: ["How Europeans imagined and used the figure", "The appearance of Andalusi rulers", "African communities where they were made", "Art exchange between Iberia and Africa"],
            correctIndex: 0,
            explanation: "They appear in servants' costume and on coats of arms. Not portraits from life.",
            sourceLessonSlug: "the-afterlife-of-the-word",
          },
          {
            prompt: "What is the Moorish Revival?",
            options: ["A nineteenth-century architectural style quoting al-Andalus", "A twentieth-century movement to restore Andalusi manuscripts", "The Almohad program of rebuilding mosques on a unified plan", "The Spanish state's readmission of Morisco descendants after 1900"],
            correctIndex: 0,
            explanation: "Synagogues, theaters, hotels, and bathhouses with horseshoe arches and stucco. A construction quoting al-Andalus, not a survival of it.",
            sourceLessonSlug: "the-afterlife-of-the-word",
          },
          {
            prompt: "Where and when did Noble Drew Ali found his first temple?",
            options: ["Newark, 1913", "Chicago, 1925", "Detroit, 1930", "Philadelphia, 1919"],
            correctIndex: 0,
            explanation: "He established the movement in Chicago in 1925, which is where Nance's study locates its development.",
            sourceLessonSlug: "the-afterlife-of-the-word",
          },
          {
            prompt: "What did the Moorish Science Temple teach about Black Americans?",
            options: ["That they were of Moorish descent", "Descent from ancient Egyptians", "That they should emigrate to North Africa", "That race should be abolished"],
            correctIndex: 0,
            explanation: "And that reclaiming that nationality was the route out of the condition slavery and segregation had made.",
            sourceLessonSlug: "the-afterlife-of-the-word",
          },
          {
            prompt: "How does Susan Nance read the movement?",
            options: ["A synthesis of esotericism, Freemasonry, and revisionist history", "A direct transplant of North African Sufi practice into Chicago", "A political organization with a religious veneer added for legal cover", "A short-lived movement with no influence on later Black religion"],
            correctIndex: 0,
            explanation: "Developed by and for southern migrants in 1920s Chicago (Nance, 2002). Its influence on later Black religious movements is substantial.",
            sourceLessonSlug: "the-afterlife-of-the-word",
          },
          {
            prompt: "What has been the outcome of the Moorish-national exemption claim in American courts?",
            options: ["Courts have consistently rejected it", "Accepted in several federal circuits", "Declined as a political question", "Upheld for tax but not criminal matters"],
            correctIndex: 0,
            explanation: "The claim that a Moorish identity exempts a person from United States law loses. Anyone acting on it should expect that outcome.",
            sourceLessonSlug: "the-afterlife-of-the-word",
          },
          {
            prompt: "Which two things does the lesson keep separate?",
            options: ["A community's teaching about its origins, and a legal exemption claim", "The Newark temple and the Chicago temple, which had different doctrines", "The founder's teaching and the movement's later organizational history", "Nance's scholarly account and the movement's own published texts"],
            correctIndex: 0,
            explanation: "The first is the community's own affair and historically influential; the second is a specific claim courts have rejected.",
            sourceLessonSlug: "the-afterlife-of-the-word",
          },
          {
            prompt: "How does the course summarize the whole arc of the word?",
            options: ["A regional name that hardened into a claim about bodies", "A self-designation that Europeans adopted and then abandoned", "A religious term that became a purely geographic one over time", "A legal category invented in 1502 and abolished in 1614"],
            correctIndex: 0,
            explanation: "It survived the disappearance of everyone it originally described and is still being used to make arguments.",
            sourceLessonSlug: "the-afterlife-of-the-word",
          },
          {
            prompt: "Why did Spain expel the Moriscos rather than continue prosecuting them?",
            options: ["Dispersal had exported the problem without solving it", "The Inquisition had lost jurisdiction over the baptized", "North African rulers had offered payment for them", "The 1567 decree had been struck down as unlawful"],
            correctIndex: 0,
            explanation: "The second Alpujarras war ended in dispersal across Castile, and four decades later the crown reached for expulsion instead.",
            sourceLessonSlug: "the-moriscos",
          },
          {
            prompt: "The capitulations and the Alhambra Decree share what?",
            options: ["The same season, the same crown, and the same trajectory", "The same legal instrument, issued as two clauses", "The same target population, the Muslims of Granada", "The same author, Cisneros, acting as royal confessor"],
            correctIndex: 0,
            explanation: "Guarantees to Granada's Muslims in January and expulsion of the Jews in March, from the same monarchs in the same year.",
            sourceLessonSlug: "1492-and-the-broken-guarantees",
          },
          {
            prompt: "What did the terms allow those who wished to leave Granada?",
            options: ["Departure for North Africa with their goods", "Crown compensation for property left", "Resettlement in Castile at crown cost", "Ten years to decide whether to stay"],
            correctIndex: 0,
            explanation: "The later conversion orders offered exile on terms that made leaving nearly impossible, which is the contrast to notice.",
            sourceLessonSlug: "1492-and-the-broken-guarantees",
          },
          {
            prompt: "Roughly how long did the capitulations hold in practice?",
            options: ["About seven years", "About fifty years", "About six months", "About twenty-five years"],
            correctIndex: 0,
            explanation: "Under Hernando de Talavera, before Cisneros took a harder line.",
            sourceLessonSlug: "1492-and-the-broken-guarantees",
          },
          {
            prompt: "In law, how many Muslims were there in Spain after the conversion orders?",
            options: ["None", "Only Aragon's", "Fee-payers", "A third"],
            correctIndex: 0,
            explanation: "Only new Christians, and a state that did not believe them. The legal category was abolished, the population was not.",
            sourceLessonSlug: "1492-and-the-broken-guarantees",
          },
          {
            prompt: "Where did most expelled Moriscos go?",
            options: ["North Africa", "France", "The Ottoman lands", "The Americas"],
            correctIndex: 0,
            explanation: "Some went to France and some to the Ottoman lands, but North Africa took the largest share.",
            sourceLessonSlug: "the-moriscos",
          },
          {
            prompt: "Why do historians of race attend to limpieza de sangre?",
            options: ["It made religious categories inherited", "It was the first law anywhere to use race", "It applied only to Muslims, not Jewish converts", "It was struck down within a generation"],
            correctIndex: 0,
            explanation: "Ancestry, not belief, became the disqualifying fact, which is the hinge the whole argument about early modern race turns on.",
            sourceLessonSlug: "the-moriscos",
          },
          {
            prompt: "What is the relationship between the Moorish Revival and al-Andalus?",
            options: ["It quotes al-Andalus rather than continuing it", "It preserves techniques unbroken since 1492", "Returning Morisco descendants designed it", "It was a Spanish state restoration program"],
            correctIndex: 0,
            explanation: "A nineteenth-century construction using horseshoe arches and stucco, built across Europe and the Americas.",
            sourceLessonSlug: "the-afterlife-of-the-word",
          },
          {
            prompt: "What pattern does the course say you will meet again with other words?",
            options: ["A label outliving everyone it described and still arguing", "A word narrowing in meaning until it becomes purely technical", "A self-designation being adopted by outsiders without distortion", "A term disappearing entirely once its referent is gone"],
            correctIndex: 0,
            explanation: "Roman regional name, then eight centuries pinned onto Muslim Iberia, then a claim about bodies, then a live modern argument.",
            sourceLessonSlug: "the-afterlife-of-the-word",
          },
          {
            prompt: "What made the Morisco position legally distinctive?",
            options: ["Christian by law, suspect in practice", "Muslim by law, tolerated in practice", "Foreign by law, as resident aliens", "Exempt from the Inquisition"],
            correctIndex: 0,
            explanation: "The state had created the category by decree and then declined to accept the people in it.",
            sourceLessonSlug: "the-moriscos",
          },
          {
            prompt: "Requiring houses to be left open on feast days was aimed at what?",
            options: ["Private religious practice", "Tax assessment of household goods", "Detecting concealed weapons", "The ban on private Arabic books"],
            correctIndex: 0,
            explanation: "If practice cannot be conducted privately, it cannot be conducted at all, which is what makes the measure cultural rather than doctrinal.",
            sourceLessonSlug: "the-moriscos",
          },
          {
            prompt: "The Albaicin is best described as what?",
            options: ["A quarter of Granada where revolt broke out", "The mountain range where the risings were fought", "The archbishop's palace built after the surrender", "The port where expelled Moriscos embarked"],
            correctIndex: 0,
            explanation: "The revolt spread from there to the Alpujarras mountains in 1499 and 1500.",
            sourceLessonSlug: "1492-and-the-broken-guarantees",
          },
          {
            prompt: "What is the most defensible way to describe Moor today?",
            options: ["A label with a history, not a people with a lineage", "A synonym for North African Muslim", "An obsolete term with no current use", "A precise, recoverable ethnic designation"],
            correctIndex: 0,
            explanation: "That is the conclusion the whole course builds toward, from the Roman ethnonym to the modern courtroom.",
            sourceLessonSlug: "the-afterlife-of-the-word",
          },
          {
            prompt: "The Spanish state's treatment of the Moriscos illustrates which sequence?",
            options: ["Convert, suspect, restrict, disperse, expel", "Expel, readmit, tax, integrate", "Tolerate, tax, enfranchise, assimilate", "Segregate, license, deport, compensate"],
            correctIndex: 0,
            explanation: "Each step followed from the failure of the one before it, ending with the decrees of 1609 to 1614.",
            sourceLessonSlug: "the-moriscos",
          },
          {
            prompt: "What did the capitulations say about people who converted to Christianity?",
            options: ["They were not to be insulted for it", "They received a crown land grant", "They forfeited the Muslims' protections", "They had to leave within a year"],
            correctIndex: 0,
            explanation: "Which is a small clause worth noticing, since pressure on the descendants of earlier converts is exactly what Cisneros applied.",
            sourceLessonSlug: "1492-and-the-broken-guarantees",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // FINAL — pools 40, serves 10
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "final-exam-the-moors",
      title: "21 · Final assessment",
      section: "Final assessment",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 10,
        questions: [
          {
            prompt: "The single most important fact about the word Moor is that it is what?",
            options: ["An outsider's label, never a self-designation", "The Arabic name for the population of al-Andalus", "A Roman legal category revived in the fifteenth century", "A translation of the Amazigh self-name"],
            correctIndex: 0,
            explanation: "Nobody inside the category maintained it, which is why it never had to be coherent across its nine centuries of use.",
            sourceLessonSlug: "the-word-and-its-origin",
          },
          {
            prompt: "Latin Maurus originally denoted an inhabitant of where?",
            options: ["Mauretania", "Nasrid Granada", "The deep Sahara", "Muslim-ruled lands"],
            correctIndex: 0,
            explanation: "Roman northwest Africa, roughly modern Morocco and western Algeria. Strabo reports Mauri as a self-designation.",
            sourceLessonSlug: "the-word-and-its-origin",
          },
          {
            prompt: "The Portuguese triad of white, land, and black Moors demonstrates what?",
            options: ["The category covered several populations", "Portuguese sources first used color terms", "It had narrowed to sub-Saharan Africans", "Portugal sorted people by trading partner"],
            correctIndex: 0,
            explanation: "It included people the writers saw as black and was not limited to them, or the qualifying adjectives would have carried no information.",
            sourceLessonSlug: "whose-meaning-when",
          },
          {
            prompt: "Which group eventually formed the largest Muslim population of al-Andalus?",
            options: ["Muwalladun, local converts and their descendants", "Amazigh settlers arriving continuously from North Africa", "Arab lineages descended from the original conquerors", "Saqaliba from Frankish intermediaries"],
            correctIndex: 0,
            explanation: "Bulliet dated the conversion curve indirectly from Arabic names in biographical dictionaries, an argued reconstruction rather than a count.",
            sourceLessonSlug: "who-was-actually-in-al-andalus",
          },
          {
            prompt: "The central source problem for the 711 conquest is what?",
            options: ["No Muslim account survives from the time", "The Arabic and Latin accounts always conflict", "Eyewitness accounts burned in 1009", "Only a Byzantine Greek chronicle survives"],
            correctIndex: 0,
            explanation: "The Arabic narratives are ninth century and later, so a detailed retelling of 711 is a retelling of the ninth century.",
            sourceLessonSlug: "the-crossing-of-711",
          },
          {
            prompt: "The Treaty of Tudmir shows that towns commonly changed hands how?",
            options: ["By negotiated agreement", "By storm, after long sieges", "By mass conversion", "By purchase"],
            correctIndex: 0,
            explanation: "Theodemir kept his churches, property, and law in exchange for tribute and submission.",
            sourceLessonSlug: "the-crossing-of-711",
          },
          {
            prompt: "Abd al-Rahman I mattered because he was what?",
            options: ["An Umayyad survivor of the Abbasid overthrow", "The Abbasid governor of a rebel province", "An Amazigh commander who broke with the Arab elite", "A converted Visigothic noble"],
            correctIndex: 0,
            explanation: "His arrival in 756 made al-Andalus the seat of a rival dynasty rather than a province governed from elsewhere.",
            sourceLessonSlug: "emirate-to-caliphate",
          },
          {
            prompt: "Cordoba claimed the caliphate in 929 chiefly because of what?",
            options: ["The Fatimids had claimed it first", "Baghdad's caliphate had collapsed", "Andalusi jurists demanded it", "Byzantium snubbed a mere emir"],
            correctIndex: 0,
            explanation: "Cordoba could not concede that ground to a rival dynasty in the Maghreb.",
            sourceLessonSlug: "emirate-to-caliphate",
          },
          {
            prompt: "The 400,000-volume library figure fails which test?",
            options: ["No document that could establish it survives", "A surviving catalog contradicts it", "A nineteenth-century forger invented it", "It refers to a library in Baghdad"],
            correctIndex: 0,
            explanation: "No catalog survives, and the collection was dispersed or purged under al-Mansur and destroyed in the civil war.",
            sourceLessonSlug: "cordoba-and-its-numbers",
          },
          {
            prompt: "Which claim about Cordoba survives scrutiny?",
            options: ["Paper, street lighting, running water, and professional scholars", "A population of one million at the height of the caliphate", "The largest library in recorded history before the modern era", "The first university in the world, predating Bologna by two centuries"],
            correctIndex: 0,
            explanation: "That comparison with contemporary Latin Europe holds. The numbers attached to it almost never do.",
            sourceLessonSlug: "cordoba-and-its-numbers",
          },
          {
            prompt: "Al-Zahrawi's contribution is best described as what?",
            options: ["A surgical encyclopedia translated into Latin and taught for centuries", "The first hospital founded anywhere in the Islamic world", "The introduction of Greek medicine to al-Andalus from Baghdad", "A refutation of Galen that reoriented European anatomy"],
            correctIndex: 0,
            explanation: "Named author, extant text, documented translation, traceable readership. Every link is separately checkable.",
            sourceLessonSlug: "learning-in-al-andalus",
          },
          {
            prompt: "Why must an honest account note that Maimonides left al-Andalus?",
            options: ["Otherwise a refugee is cited as proof of hospitality", "Because his Andalusi works contradict his Egyptian ones", "Because his departure disproves that he was born in Cordoba", "He returned later, so the exile was brief"],
            correctIndex: 0,
            explanation: "His family fled Almohad rule, and he wrote his major works in Egypt.",
            sourceLessonSlug: "learning-in-al-andalus",
          },
          {
            prompt: "Ibn Sina belongs to which category in this course?",
            options: ["A scholar of the wider Islamic world, not an Andalusi", "An Andalusi philosopher of the Ibn Rushd generation", "A Toledo translator working from Arabic into Latin", "An Almohad jurist who codified the movement's doctrine"],
            correctIndex: 0,
            explanation: "He was Persian and never went to Iberia. Keeping the boundary makes the Andalusi claim checkable and therefore stronger.",
            sourceLessonSlug: "learning-in-al-andalus",
          },
          {
            prompt: "What made Toledo after 1085 productive for translation?",
            options: ["Its libraries and Arabic readers remained", "Castile imported Baghdad scholars", "The papacy funded a permanent scriptorium in the city", "An Almoravid exemption from religious law"],
            correctIndex: 0,
            explanation: "A conquered city that keeps its books and the people who can read them is the rare condition this work needs.",
            sourceLessonSlug: "the-translation-pipeline",
          },
          {
            prompt: "Burnett's argument about the Toledo translations is what?",
            options: ["They follow a coherent program", "They are unreliable versions", "They were really made in Sicily", "They used Hebrew intermediaries"],
            correctIndex: 0,
            explanation: "Gerard of Cremona and Dominicus Gundissalinus concentrated on different fields, and Gerard's output follows a curriculum.",
            sourceLessonSlug: "the-translation-pipeline",
          },
          {
            prompt: "Which is the defensible version of the transmission claim?",
            options: ["Greek and Arabic work entered Latin Europe through Iberia and Sicily", "The Moors single-handedly ended European ignorance", "Every classical text Europe possesses arrived through al-Andalus", "Latin Europe produced no original learning before the Toledo translations"],
            correctIndex: 0,
            explanation: "In the twelfth and thirteenth centuries, transforming the universities. True, and much harder to knock down.",
            sourceLessonSlug: "the-translation-pipeline",
          },
          {
            prompt: "What is wrong with the claim that the Moors ended Europe's Dark Ages?",
            options: ["The frame itself is one medievalists reject", "The chronology is off by roughly two centuries", "Transmission ran from Europe to al-Andalus", "No translations reached Europe before the fifteenth century"],
            correctIndex: 0,
            explanation: "The early medieval centuries produced law, agriculture, architecture, and institutions the label hides.",
            sourceLessonSlug: "where-the-claims-outrun-the-evidence",
          },
          {
            prompt: "The Ibn Firnas flight account comes from where?",
            options: ["Al-Maqqari, roughly seven centuries later", "A ninth-century Cordoban court chronicle", "The Chronicle of 754, written close to the events", "Gerard of Cremona's Toledo translations"],
            correctIndex: 0,
            explanation: "No independent contemporary source describes it, and the surviving contemporary verse is satire rather than a flight report.",
            sourceLessonSlug: "where-the-claims-outrun-the-evidence",
          },
          {
            prompt: "The four-question test for an impressive claim asks about what?",
            options: ["First written appearance, gap, independence, and what it requires", "Author, publisher, date, and edition", "Motive, opportunity, corroboration, and consequence", "Language, archive, manuscript count, and provenance"],
            correctIndex: 0,
            explanation: "The last one is sharpest: does the strongest version require anything the sources do not contain?",
            sourceLessonSlug: "where-the-claims-outrun-the-evidence",
          },
          {
            prompt: "Two texts repeating one original count as how much evidence?",
            options: ["One", "Two", "Three", "None"],
            correctIndex: 0,
            explanation: "An independent source is one that is not copying the first, however far apart the two were written.",
            sourceLessonSlug: "where-the-claims-outrun-the-evidence",
          },
          {
            prompt: "The caliphate of Cordoba was formally abolished in which year?",
            options: ["1031", "1009", "1085", "1086"],
            correctIndex: 0,
            explanation: "The fitna began in 1009, and roughly two dozen taifa states replaced the caliphate afterward.",
            sourceLessonSlug: "fitna-and-the-taifas",
          },
          {
            prompt: "The parias system consisted of what?",
            options: ["Tribute paid by taifa rulers to Christian kingdoms", "Taxes levied on Christian subjects within al-Andalus", "Ransoms exchanged for captives taken in frontier raiding", "Tolls charged on the trans-Saharan gold caravans"],
            correctIndex: 0,
            explanation: "The gold financed churches, castles, and armies in the north, which is how the picture of a permanent religious war falls apart.",
            sourceLessonSlug: "fitna-and-the-taifas",
          },
          {
            prompt: "After winning at Sagrajas in 1086, the Almoravids did what?",
            options: ["Deposed the taifa rulers and annexed al-Andalus", "Withdrew to Marrakesh with the agreed payment", "Restored the Umayyad caliphate under a new claimant", "Signed a permanent frontier treaty with Alfonso VI"],
            correctIndex: 0,
            explanation: "They judged the taifa rulers decadent and their taxation unlawful, which is the standard risk of inviting a foreign army in.",
            sourceLessonSlug: "almoravids-and-almohads",
          },
          {
            prompt: "Why does the course refuse to state the Almoravid conquest of Ghana as fact?",
            options: ["Conrad and Fisher argued the sources do not support it", "Because no Almoravid presence in the Sahel is documented at all", "Because the date 1076 has been shown to be a scribal error", "Because Ghana's own records contradict the Arabic ones"],
            correctIndex: 0,
            explanation: "Other scholars defend a version of Almoravid pressure on Ghana, so the presence is real and the conquest is disputed.",
            sourceLessonSlug: "almoravids-and-almohads",
          },
          {
            prompt: "Almohad rule is the hardest counterexample to which claim?",
            options: ["That al-Andalus was uniformly tolerant", "That Amazigh dynasties ruled after 1031", "That North Africans intervened in Iberia", "That the dhimmi framework existed in the Islamic west"],
            correctIndex: 0,
            explanation: "Jews and Christians faced conversion, exile, or death, and Maimonides was among those who left.",
            sourceLessonSlug: "almoravids-and-almohads",
          },
          {
            prompt: "Las Navas de Tolosa in 1212 produced what?",
            options: ["The collapse of Almohad power in Iberia", "An Almohad victory securing a century", "The end of Almoravid rule and the rise of the Almohads", "The surrender of Granada to Castile and Aragon"],
            correctIndex: 0,
            explanation: "Cordoba fell in 1236, Valencia in 1238, and Seville in 1248, all within a dozen years.",
            sourceLessonSlug: "almoravids-and-almohads",
          },
          {
            prompt: "Ríos Saloma argues the Reconquista framing was built when?",
            options: ["Between the sixteenth and nineteenth centuries", "In the eighth century, right after 711", "In the eleventh century, to justify the taking of Toledo", "Under Franco-era historians alone"],
            correctIndex: 0,
            explanation: "By historians and nationalists, becoming a load-bearing part of Spanish national self-description.",
            sourceLessonSlug: "reconquista-the-word-and-the-thing",
          },
          {
            prompt: "On the convivencia dispute, this course does what?",
            options: ["Declares no winner and names both sides", "Endorses Menocal on the literary evidence", "Endorses Fernández-Morera on the legal evidence", "Calls it a dispute about tone"],
            correctIndex: 0,
            explanation: "It notes what both sides mostly concede: structural legal inequality, and documented collaboration in specific checkable places.",
            sourceLessonSlug: "reconquista-the-word-and-the-thing",
          },
          {
            prompt: "The Granada capitulations guaranteed which combination?",
            options: ["Religion, mosques, law, property, language, and customs", "Political representation, tax exemption, and the right to bear arms", "Autonomy under a Muslim governor answerable to the crown", "Free passage to North Africa for the entire population"],
            correctIndex: 0,
            explanation: "Plus free departure for those who wished to leave and no forced conversion. They held roughly seven years.",
            sourceLessonSlug: "1492-and-the-broken-guarantees",
          },
          {
            prompt: "The crown escaped the capitulations by arguing what?",
            options: ["That the revolts of 1499 and 1500 were themselves the breach", "That the Nasrid emir's departure had voided the agreement", "That a papal dispensation released it from its oath", "That the terms had expired after ten years by their own wording"],
            correctIndex: 0,
            explanation: "Conversion-or-exile orders followed in Castile in 1501 and 1502 and in Aragon in 1525 and 1526.",
            sourceLessonSlug: "1492-and-the-broken-guarantees",
          },
          {
            prompt: "Forced conversion had which perverse effect on state scrutiny?",
            options: ["It brought the population under Inquisition jurisdiction", "It removed the population from all official record-keeping", "It ended the poll tax and with it the state's fiscal interest", "It transferred jurisdiction from the crown to the local bishops"],
            correctIndex: 0,
            explanation: "The Inquisition had no authority over Muslims and full authority over the baptized.",
            sourceLessonSlug: "the-moriscos",
          },
          {
            prompt: "Limpieza de sangre statutes are significant because they did what?",
            options: ["Made religious disqualification hereditary", "Applied only to Jewish converts", "Were struck down within a generation", "Required baptism, not ancestry"],
            correctIndex: 0,
            explanation: "Ancestry, not belief, became the disqualifying fact, which is why historians of race attend closely to this period.",
            sourceLessonSlug: "the-moriscos",
          },
          {
            prompt: "The 1567 decree targeted what?",
            options: ["Arabic, Moorish dress, and public baths", "Mosques and Muslim judges", "Trade with North Africa", "Marriage between Moriscos and old Christians"],
            correctIndex: 0,
            explanation: "It also required houses left open on feast days, making it a program against a culture rather than only a creed.",
            sourceLessonSlug: "the-moriscos",
          },
          {
            prompt: "How should the Morisco expulsion total be reported?",
            options: ["As a range, with Lapeyre named as its source", "As exactly 300,000", "As one million, the highest recent estimate available", "As unknown, since no embarkation records survive at all"],
            correctIndex: 0,
            explanation: "Roughly 275,000 to 300,000 in Lapeyre, with higher recent proposals. The count depends on decrees, returnees, and evaders.",
            sourceLessonSlug: "the-moriscos",
          },
          {
            prompt: "Barbara Fuchs's maurophilia argument is that the Moorish material was what?",
            options: ["Part of Spanish identity, not a foreign import", "A French chivalric import of the sixteenth century", "Written mainly by Moriscos who escaped the expulsion", "Suppressed by the Inquisition wherever it was found"],
            correctIndex: 0,
            explanation: "A culture can expel a population and keep its clothes, its architecture, and its ballads, and Spain did.",
            sourceLessonSlug: "the-afterlife-of-the-word",
          },
          {
            prompt: "The imprecision of Moor on the early modern English stage is evidence about what?",
            options: ["English usage, not the population of al-Andalus", "The actual ethnic composition of Muslim Iberia", "Direct English diplomatic contact with the Nasrid court", "The survival of Morisco communities in England after 1614"],
            correctIndex: 0,
            explanation: "English writers inherited the word without the history, and that is a main route by which it came to read simply as black.",
            sourceLessonSlug: "the-afterlife-of-the-word",
          },
          {
            prompt: "Noble Drew Ali founded his first temple where and when?",
            options: ["Newark, 1913", "Chicago, 1925", "Detroit, 1930", "Philadelphia, 1919"],
            correctIndex: 0,
            explanation: "He established the movement in Chicago from 1925, which is the setting for Susan Nance's study of it.",
            sourceLessonSlug: "the-afterlife-of-the-word",
          },
          {
            prompt: "How have American courts treated the Moorish-national exemption claim?",
            options: ["They have consistently rejected it", "Upheld in several federal circuits", "Called it a political question", "Accepted it in civil cases"],
            correctIndex: 0,
            explanation: "That legal question is kept separate from what a religious community teaches about its own origins, which is its own affair.",
            sourceLessonSlug: "the-afterlife-of-the-word",
          },
          {
            prompt: "The course's overall answer to \"who were the Moors?\" is what?",
            options: ["Several populations under one outsider's label", "The Amazigh peoples of North Africa", "The Arab dynasties that ruled Iberia from 711 to 1492", "Iberia's Muslims minus local converts"],
            correctIndex: 0,
            explanation: "Amazigh, Arab, Iberian convert, sub-Saharan African, and Slavic populations all fall inside it at different times.",
            sourceLessonSlug: "who-was-actually-in-al-andalus",
          },
          {
            prompt: "The habit this course is really teaching is what?",
            options: ["Separating the secure frame from the vivid detail", "Preferring Arabic sources to Latin ones in every conflict", "Rejecting any claim not tied to an excavated object", "Accepting the most recent scholarship as settled"],
            correctIndex: 0,
            explanation: "It applies identically to the conquest narrative, the library figure, the Ghana conquest, and the expulsion totals.",
            sourceLessonSlug: "cordoba-and-its-numbers",
          },
        ],
      },
    },
  ],
};
