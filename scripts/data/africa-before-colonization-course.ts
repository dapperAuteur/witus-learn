// Authored "Africa Before Colonization: The Documented Record" — the ANCHOR of the
// precolonial-Africa track (plans/future-courses/africa-precolonial-track-proposal.md).
// From BAM's world.md queue ("Africa before colonization"). Survey depth, real spread:
// the Nile corridor (Kush, Aksum), West Africa (Ghana/Mali/Songhai, Timbuktu), the south
// and east (Great Zimbabwe, the Swahili coast, Benin, Ethiopia), the honest record on
// slavery, and a "how we know" methods section.
//
// Why this course exists: to replace "Africa had no history before Europeans" with the
// documented record. It OPENS with the claim in the deniers' own words — Hegel (lectures
// published 1837; Sibree translation) and Trevor-Roper (1963 broadcast lectures, printed
// 1965) — both quotes verified as safe to attribute (fact-check pass on this branch),
// then spends the rest of the course walking the record that refutes them. The equal and
// opposite failure is also in scope: romantic overcorrection (a war-free, slavery-free
// golden age; invented statistics) is taught AS a trap, in Lesson 2 and throughout.
//
// Sourcing discipline (the load-bearing part of this file):
//   * Every teaching lesson carries APA 7 in-line citations + a ## Sources list. The
//     backbone sources are the UNESCO General History of Africa, working Africanists
//     (Thornton, Ehret, Gomez, Green, Northrup, Vansina, Lovejoy, Munro-Hay, Garlake,
//     Hunwick, Fauvelle), the Levtzion & Hopkins Corpus for the Arabic sources in
//     scholarly translation, museum records (British Museum, Smithsonian) and UNESCO
//     World Heritage documentation.
//   * NOTHING is flattened to "Africa did X." Every claim names a region, a people, and
//     a period. The final exercise drills exactly that skill.
//   * HEDGES ARE EXPLICIT where beloved claims are shaky, and several were cut:
//     - Mansa Musa: what al-Umari actually reports (mithqal 25 → ~22 dirhams, depressed
//       "about twelve years") is quoted via Levtzion & Hopkins; the "richest human ever"
//       figure is refused as unquantifiable; Schultz's (2006) reappraisal (the dip is
//       within normal Mamluk exchange-rate fluctuation) is taught; caravan head-counts
//       are labelled "reported, not established."
//     - The 1076 "Almoravid sack of Ghana" is taught as CONTESTED (Conrad & Fisher 1982).
//     - Timbuktu manuscript counts are labelled reported estimates, not audited censuses.
//     - "University of Sankore" is flagged as an anachronistic frame; the scholarship
//       itself (Ahmad Baba, the chronicles) is documented.
//     - Benin loot counts are given as ranges ("thousands; commonly 3,000-5,000; no
//       complete inventory"); the 900 plaques in the palace storehouse are the specific.
//     - The Ark of the Covenant at Aksum is stated as church tradition, not fact.
//     - "Ethiopia was never colonized" is taught WITH the 1936-41 Italian occupation.
//     - The "silent trade" of gold and salt is flagged as a travelers' story.
//   * The colonial DENIAL of the record is itself taught from documents: Rhodesia's 1970
//     censorship of Great Zimbabwe's African origin (Garlake forced out, 1970), Frobenius
//     inventing Atlantis to explain Ife, and the "Hamitic hypothesis" (Seligman 1930).
//   * African participation in slavery and the slave trades (internal, trans-Saharan,
//     Atlantic) is taught plainly (Thornton, Lovejoy, Northrup, SlaveVoyages ~12.5M
//     embarked) — omitting it is its own distortion — and the "sold their own people"
//     gotcha is corrected as an anachronism, not waved away.
//
// House format: `section` on every lesson; one single-line :::reveal per teaching lesson
// (answer NOT restated beneath); a quiz per section with a ~15-question bank (above the
// 10-question attempt cap, so retries rotate); every question carries `explanation` +
// `sourceLessonSlug`; recallContent on most lessons; one exercise (name region · people ·
// period). Registered in scripts/seed-courses.ts under "Culture & History"; NO migration —
// `pnpm seed:courses`.

import type { AuthoredCourse } from "./authored-course";

export const AFRICA_BEFORE_COLONIZATION_COURSE: AuthoredCourse = {
  title: "Africa Before Colonization: The Documented Record",
  description:
    "In 1830s Berlin, Hegel told his students that Africa was \"no historical part of the World.\" In 1963, on British television, an Oxford professor said African history was \"largely darkness.\" This course opens with those claims in the deniers' own words, then spends seven sections walking the documented record that refutes them: the kings of Kush who ruled Egypt as its 25th Dynasty; Aksum minting its own gold coins and adopting Christianity a generation before Rome made it official; the empires of Ghana, Mali, and Songhai on the gold roads, and the book culture of Timbuktu; the drystone city of Great Zimbabwe, and the documented campaign by a settler state to censor who built it; the Swahili trading coast Ibn Battuta called one of the most beautiful in the world; the Benin bronzes and the 1897 British looting; Ethiopia from the rock churches of Lalibela to the battlefield of Adwa. It is honest where honesty is uncomfortable: African states participated in slavery and the slave trades, and the course teaches that record plainly, because omitting it is its own distortion. It is equally honest about the opposite trap: romantic myth (a war-free golden age, invented net-worth figures for Mansa Musa) is as useless as the erasure, and the course flags every shaky claim as contested or estimated rather than asserting it. The last sections teach the transferable skill: HOW historians know, from archaeology, manuscripts, Arabic travelers in scholarly translation, and oral tradition, each with its strengths and limits. Cited throughout to the UNESCO General History of Africa, working Africanists (Thornton, Ehret, Gomez, Vansina, Hunwick), the Levtzion & Hopkins Corpus, museum records, and UNESCO World Heritage documentation. Every claim names a region, a people, and a period. Nothing here is \"Africa did X.\"",
  lessons: [
    // ────────────── SECTION 1 · THE CLAIM AND THE RECORD ──────────────
    {
      slug: "africa-claim-in-their-own-words",
      title: "1 · The claim, in the deniers' own words",
      section: "Section 1 · The claim and the record",
      body: `This course starts with two documents. Read them slowly, because everything that follows is an answer to them.

**Berlin, the 1820s.** The philosopher G. W. F. Hegel delivered a series of lectures on the philosophy of world history, assembled and published after his death in 1837. In the standard English translation, his verdict on Africa reads:

> "At this point we leave Africa, not to mention it again. For it is no historical part of the World; it has no movement or development to exhibit." (Hegel, 1837/1956, Sibree translation)

**London, 1963.** Hugh Trevor-Roper, then Regius Professor of Modern History at Oxford (the most prestigious history chair in Britain), said this in a televised lecture series, printed in *The Listener* and then in his 1965 book:

> "Perhaps, in the future, there will be some African history to teach. But at present there is none, or very little: there is only the history of the Europeans in Africa. The rest is largely darkness... And darkness is not a subject for history." (Trevor-Roper, 1965)

Notice three things about these quotations before you notice anything else.

**First, they are real.** This course did not invent a strawman to knock down. These are checkable, widely reprinted statements by two of the most influential academics of their centuries, and the citations below will let you verify the wording yourself. When you argue against a claim, quote the claim.

**Second, they are claims about evidence, not just prejudice dressed up.** Trevor-Roper's argument, stripped to its skeleton, was: history requires documents; Africa (he believed) produced none; therefore Africa has no history, only "the unrewarding gyrations of barbarous tribes." That is an argument you can test. This course tests it.

**Third, the dates matter, and they cut in opposite directions.** When Hegel lectured in the 1820s, Europeans had not yet excavated Kerma, could not read a word of Meroitic, and had not seen Great Zimbabwe. His ignorance was at least partly an information gap. Trevor-Roper has no such excuse. By 1963, Gertrude Caton-Thompson had published her excavation confirming Great Zimbabwe's African origin (1931), radiocarbon dating had existed for over a decade, the *Journal of African History* had been publishing for three years, and the Arabic sources describing the courts of Ghana and Mali had been in print in European languages for a century. By 1963, "darkness" was a choice.

Here is a preview of the record this course will walk through, each item named precisely, because "Africa" is not an actor and this course never treats it as one:

- Kings from **Kush** (in present-day Sudan) ruled Egypt as its **25th Dynasty** (c. 747-656 BCE). One of them is named in the Hebrew Bible.
- **Aksum** (in the highlands of present-day Ethiopia and Eritrea) minted its own gold coinage from about 270 CE and adopted Christianity under King Ezana around the 340s CE.
- In 1068, the Andalusi geographer **al-Bakri** described the court of the king of **Ghana** (a Soninke state, in present-day Mauritania and Mali) in administrative detail: officials, interpreters, a treasury, taxation on trade.
- **Great Zimbabwe** (built by ancestors of the Shona, c. 1100-1450 CE) is a granite city whose walls stand eleven meters high without mortar.
- The Moroccan traveler **Ibn Battuta** saw the Swahili trading town of **Kilwa** (in present-day Tanzania) in 1331 and called it one of the most beautiful and best-built towns he had seen anywhere.
- The **Benin** court (an Edo kingdom in present-day Nigeria) produced brass plaques of such quality that when British soldiers looted thousands of them in 1897, European museums competed to buy them, at the same time as European opinion held that Africans could not have made them.

One more thing this course promises you, stated here so you can hold it to account. The opposite of erasure is not flattery. Where a beloved claim about this record is shaky (and some are, including a famous one about Mansa Musa), this course will say "contested" or "estimated" rather than assert it. The record does not need inflating. That is the whole point.

:::reveal Hegel (1820s) and Trevor-Roper (1963) made the same claim. Why does the course treat the 1963 version as the more damning one? ||| Because of what was already known by each date. Hegel spoke before Meroitic was transliterated, before Kerma was excavated, before Europeans had documented Great Zimbabwe: partly an information gap. By 1963, Caton-Thompson had confirmed Great Zimbabwe's African origin (1931), radiocarbon dating existed, the Arabic sources on Ghana and Mali were long in print, and a professional journal of African history was publishing. Trevor-Roper's "darkness" was not missing evidence; it was a refusal to look at evidence that existed.

## Sources
- Hegel, G. W. F. (1956). *The philosophy of history* (J. Sibree, Trans.). Dover. (Original lectures published 1837)
- Trevor-Roper, H. (1965). *The rise of Christian Europe*. Thames & Hudson.
- Caton-Thompson, G. (1931). *The Zimbabwe culture: Ruins and reactions*. Clarendon Press.
- Levtzion, N., & Hopkins, J. F. P. (Eds.). (2000). *Corpus of early Arabic sources for West African history*. Markus Wiener. (Original work published 1981)
- Fauvelle, F.-X. (2018). *The golden rhinoceros: Histories of the African Middle Ages* (T. L. Fagan, Trans.). Princeton University Press.`,
      recallContent: [
        {
          prompt: "Quote or closely paraphrase the Hegel and Trevor-Roper claims this course opens with, with their dates.",
          answer:
            "Hegel (lectures from the 1820s, published 1837): Africa 'is no historical part of the World; it has no movement or development to exhibit.' Trevor-Roper (broadcast 1963, printed 1965): there is 'only the history of the Europeans in Africa. The rest is largely darkness... And darkness is not a subject for history.'",
        },
        {
          prompt: "Why does this course open with the deniers' own words instead of a summary of them?",
          answer:
            "Because the claims are real and checkable, and quoting them prevents the course from arguing against a strawman. The rest of the course is the documented record that refutes the actual claim as actually made.",
        },
      ],
    },
    {
      slug: "africa-two-traps",
      title: "2 · Two traps: erasure and romance",
      section: "Section 1 · The claim and the record",
      body: `Before the record, the method. There are two ways to get precolonial Africa wrong, and only one of them is famous.

**Trap one: erasure.** You met it in Lesson 1. It has a milder, more durable cousin worth knowing by name: the **"Hamitic hypothesis."** For much of the twentieth century, when evidence of African achievement became too solid to deny, the fallback was to credit it to outsiders or to supposedly non-African "Hamites." The anthropologist C. G. Seligman put it baldly in a textbook that stayed in print for decades: "the civilizations of Africa are the civilizations of the Hamites" (Seligman, 1930). The same move appears again and again in this course: Great Zimbabwe attributed to Phoenicians, the Ife heads attributed (by Leo Frobenius, in 1911) to survivors of Atlantis, the Swahili towns attributed wholly to Arab colonists. Watch for the pattern. When the evidence could no longer support "they built nothing," the claim quietly became "they did not build the things they built."

**Trap two: romance.** This one is friendlier and therefore more tempting. It says: precolonial Africa was a golden age of peaceful kingdoms; Mansa Musa was the richest human being who ever lived, with a precise dollar figure attached; every manuscript pile is a "university"; nothing bad happened until Europeans arrived. This trap is not just wrong in detail. It is strategically useless, for three reasons. First, invented claims hand the deniers ammunition: knock down one fake statistic and the whole record looks fake. Second, romance treats the real record as insufficient, which quietly concedes the deniers' premise. Third, it erases real people just as thoroughly as the first trap does: African states fought wars, held slaves, and sold captives, and Section 5 of this course teaches that record plainly, because a history with the uncomfortable parts removed is not history. It is advertising.

**The method that avoids both traps has a name: it is just history**, done with the same source discipline you would demand for Rome or China. The landmark institutional statement of that method is the **UNESCO General History of Africa**, a project launched in 1964, whose eight volumes (published 1981-1993) were drafted by an international committee of several hundred scholars, the majority of them African. Its point was never "Africa was perfect." Its point was that African history must be written from evidence (archaeology, written sources, oral tradition, linguistics) and not from either contempt or nostalgia (UNESCO, 1981-1993).

**One rule from that method governs every lesson that follows: never flatten "Africa."** Africa is the second-largest continent on Earth, roughly 30 million square kilometers; the distance from Cairo to Cape Town is greater than from Cairo to London. Today it holds 54 states and, by common linguistic estimates, well over a thousand languages. "Africans built pyramids" and "Africans had no writing" are both false for the same reason: each is true of some people, in some place, in some period, and false of others. So this course names its subjects. Not "Africa": the **Kushites** of the middle Nile in the eighth century BCE; the **Soninke** state of Ghana in the eleventh century CE; the **Shona** builders of Great Zimbabwe in the fourteenth; the **Edo** casters of Benin in the sixteenth. The final exercise of this course drills exactly that habit, because it is the single most transferable skill here: it works on every continent's history, and it is the fastest way to detect nonsense about any of them.

A note on how this course cites. Every teaching lesson ends with a Sources list in APA 7 style, and claims in the text carry in-line citations. Where a number is an estimate, you will see "estimated" or a range. Where scholars disagree, you will see "contested" and at least one name on each side. If you catch this course asserting something it cannot source, it has failed its own standard, and you should say so in the course feedback.

:::reveal Why does this course treat the romantic golden-age story as a trap rather than as harmless enthusiasm? ||| Three reasons. Invented claims arm the deniers (one debunked fake makes the whole record look fake). Romance concedes the deniers' premise by treating the real, documented record as not impressive enough. And it erases real people as thoroughly as contempt does, by deleting the uncomfortable parts (wars, slavery, the slave trades) that Section 5 teaches plainly.

## Sources
- Seligman, C. G. (1930). *Races of Africa*. Thornton Butterworth.
- UNESCO. (1981-1993). *General history of Africa* (Vols. I-VIII). UNESCO Publishing / Heinemann.
- Zeleza, P. T. (2009). African studies and universities since independence. *Transition, 101*, 110-135.
- Ehret, C. (2016). *The civilizations of Africa: A history to 1800* (2nd ed.). University of Virginia Press.`,
      recallContent: [
        {
          prompt: "Name the two traps and give one concrete example of each.",
          answer:
            "Erasure: e.g. the Hamitic hypothesis (Seligman 1930), Great Zimbabwe credited to Phoenicians, Frobenius crediting Ife to Atlantis. Romance: e.g. a precise net-worth figure for Mansa Musa, a war-free and slavery-free golden age, every manuscript library upgraded to a 'university.'",
        },
        {
          prompt: "What is the anti-flattening rule, and what project is the landmark statement of the method?",
          answer:
            "Never say 'Africa did X': name the region, the people, and the period for every claim. The landmark institutional statement is the UNESCO General History of Africa (launched 1964; 8 volumes, 1981-1993, written mostly by African scholars).",
        },
      ],
    },
    {
      slug: "africa-quiz-1",
      title: "Section 1 quiz · The claim and the method",
      section: "Section 1 · The claim and the record",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Who declared that Africa 'is no historical part of the World,' and when did the claim reach print?",
            options: [
              "Hegel, in lectures published in 1837",
              "Trevor-Roper, in a 1965 book",
              "Seligman, in a 1930 textbook",
              "Cecil Rhodes, in an 1890 speech",
            ],
            correctIndex: 0,
            explanation:
              "Hegel's Berlin lectures of the 1820s were published posthumously in 1837; the standard English wording is from the Sibree translation.",
            sourceLessonSlug: "africa-claim-in-their-own-words",
          },
          {
            prompt: "What was Hugh Trevor-Roper's position when he called African history 'largely darkness'?",
            options: [
              "Regius Professor of Modern History at Oxford",
              "Director of the British Museum",
              "Colonial governor of Rhodesia",
              "An amateur broadcaster with no academic post",
            ],
            correctIndex: 0,
            explanation:
              "That is why the quote matters: it was the establishment view, voiced from the most prestigious history chair in Britain, on television, in 1963.",
            sourceLessonSlug: "africa-claim-in-their-own-words",
          },
          {
            prompt: "Why does the course say Trevor-Roper's 1963 claim was 'a choice' in a way Hegel's 1820s claim partly was not?",
            options: [
              "By 1963 the refuting evidence (Caton-Thompson 1931, radiocarbon dating, published Arabic sources) already existed",
              "Trevor-Roper had personally visited Africa and Hegel had not",
              "Hegel later retracted his claim",
              "Television made claims more official than books",
            ],
            correctIndex: 0,
            explanation:
              "Hegel spoke before Kerma, Meroitic transliteration, or Great Zimbabwe were known to Europeans. Trevor-Roper spoke three decades after Caton-Thompson's excavation report and a century after the Arabic sources were in print.",
            sourceLessonSlug: "africa-claim-in-their-own-words",
          },
          {
            prompt: "Stripped to its skeleton, Trevor-Roper's argument was:",
            options: [
              "History requires documents; Africa produced none; therefore Africa has no history",
              "History requires kings; Africa had none; therefore Africa has no history",
              "African history exists but is too dangerous to teach",
              "Only economic history counts as history",
            ],
            correctIndex: 0,
            explanation:
              "It is an evidence claim, which is why it can be tested and why this course answers it with documents, coins, buildings, and manuscripts rather than with outrage.",
            sourceLessonSlug: "africa-claim-in-their-own-words",
          },
          {
            prompt: "What is the 'Hamitic hypothesis'?",
            options: [
              "The claim that anything impressive in Africa was built by outsiders or non-African 'Hamites'",
              "The theory that all African languages descend from one ancestor",
              "The claim that Egypt was culturally African",
              "A hypothesis about Saharan climate change",
            ],
            correctIndex: 0,
            explanation:
              "Seligman's 1930 textbook stated it baldly: 'the civilizations of Africa are the civilizations of the Hamites.' It was the fallback denial once 'they built nothing' failed.",
            sourceLessonSlug: "africa-two-traps",
          },
          {
            prompt: "Which of these is an example of the ROMANCE trap, as the course defines it?",
            options: [
              "Attaching a precise net-worth dollar figure to Mansa Musa",
              "Noting that Kush ruled Egypt as the 25th Dynasty",
              "Saying manuscript counts for Timbuktu are reported estimates",
              "Teaching that African states sold captives into the Atlantic trade",
            ],
            correctIndex: 0,
            explanation:
              "No wealth data exists to compute such a figure; asserting one is invention. The other options are the documented record and honest hedging, which is the course's method.",
            sourceLessonSlug: "africa-two-traps",
          },
          {
            prompt: "Why does the course argue that romantic myth ultimately HELPS the deniers?",
            options: [
              "One debunked invented claim makes the whole documented record look fake",
              "It doesn't; the course says romance is harmless",
              "Because myths are copyrighted",
              "Because deniers prefer flattering stories",
            ],
            correctIndex: 0,
            explanation:
              "Invented statistics are the easiest targets. Knocking one down lets a denier dismiss the real record alongside the fake, and romance also concedes that the real record isn't impressive enough on its own.",
            sourceLessonSlug: "africa-two-traps",
          },
          {
            prompt: "What is the UNESCO General History of Africa?",
            options: [
              "An eight-volume history (published 1981-1993) drafted mostly by African scholars, launched as a project in 1964",
              "A colonial-era encyclopedia of African tribes",
              "A museum catalog of looted objects",
              "A UN resolution condemning Hegel",
            ],
            correctIndex: 0,
            explanation:
              "It is the landmark institutional statement of the method this course uses: African history written from evidence (archaeology, texts, oral tradition, linguistics), not from contempt or nostalgia.",
            sourceLessonSlug: "africa-two-traps",
          },
          {
            prompt: "What is the anti-flattening rule?",
            options: [
              "Every claim must name a region, a people, and a period, never just 'Africa'",
              "Never mention colonization before Section 4",
              "Always compare Africa to Europe",
              "Use only African-authored sources",
            ],
            correctIndex: 0,
            explanation:
              "'Africans built pyramids' and 'Africans had no writing' are both false the same way: each is true of some people in some place and period, and false of others.",
            sourceLessonSlug: "africa-two-traps",
          },
          {
            prompt: "Which pairing is correct, per the course's own naming rule?",
            options: [
              "Great Zimbabwe: ancestors of the Shona, c. 1100-1450 CE",
              "Great Zimbabwe: the Soninke, eleventh century CE",
              "Kush: the Edo, sixteenth century CE",
              "Benin: the Kushites, eighth century BCE",
            ],
            correctIndex: 0,
            explanation:
              "The Soninke are the people of the Ghana state; the Edo are the people of Benin; the Kushites are the middle-Nile kingdom. Precision in naming is the course's core habit.",
            sourceLessonSlug: "africa-claim-in-their-own-words",
          },
          {
            prompt: "Roughly how large is the African continent?",
            options: [
              "About 30 million square kilometers, the second-largest continent",
              "About the size of Western Europe",
              "About 5 million square kilometers",
              "Larger than Asia",
            ],
            correctIndex: 0,
            explanation:
              "Scale is why flattening fails: Cairo to Cape Town is farther than Cairo to London, and the continent today holds 54 states and well over a thousand languages.",
            sourceLessonSlug: "africa-two-traps",
          },
          {
            prompt: "Frobenius's 1911 explanation of the Ife heads is cited in this section as an example of what?",
            options: [
              "The erasure pattern: crediting African work to outsiders (in his case, Atlantis)",
              "Early scientific rigor",
              "The romance trap",
              "A correct attribution later confirmed",
            ],
            correctIndex: 0,
            explanation:
              "When evidence of achievement became undeniable, the claim shifted from 'they built nothing' to 'they did not build the things they built.' Atlantis was Frobenius's version.",
            sourceLessonSlug: "africa-two-traps",
          },
          {
            prompt: "What does the course promise to do when a claim is shaky?",
            options: [
              "Label it contested or estimated rather than assert it",
              "Omit it entirely, always",
              "Assert it if it favors the course's thesis",
              "Put it in a footnote without comment",
            ],
            correctIndex: 0,
            explanation:
              "The record does not need inflating; that is the whole point. Hedging visibly is a feature of the method, not a weakness.",
            sourceLessonSlug: "africa-claim-in-their-own-words",
          },
          {
            prompt: "Which figure is named in this section as ruling Egypt from outside it?",
            options: [
              "Kings from Kush, as the 25th Dynasty (c. 747-656 BCE)",
              "Mansa Musa of Mali, in 1324",
              "Ezana of Aksum, around 340 CE",
              "The Oba of Benin, in 1485",
            ],
            correctIndex: 0,
            explanation:
              "The Kushite kings of the 25th Dynasty ruled Egypt in the eighth to seventh centuries BCE; Section 2 tells that story in full.",
            sourceLessonSlug: "africa-claim-in-their-own-words",
          },
          {
            prompt: "Why does the course teach African participation in the slave trades at all (Section 5) in a course refuting anti-African myths?",
            options: [
              "Because a history with the uncomfortable parts removed is advertising, not history, and omission is its own distortion",
              "Because it makes the course longer",
              "To argue colonization was justified",
              "Because no other course covers slavery",
            ],
            correctIndex: 0,
            explanation:
              "The course's credibility rests on applying one standard everywhere: cited evidence, including where it is uncomfortable. Romance that deletes slavery erases real people just as erasure does.",
            sourceLessonSlug: "africa-two-traps",
          },
        ],
      },
    },

    // ────────────── SECTION 2 · THE NILE BEYOND EGYPT ──────────────
    {
      slug: "africa-kush",
      title: "3 · Kush: the kingdom that ruled Egypt",
      section: "Section 2 · The Nile beyond Egypt",
      body: `Go south along the Nile, upstream past the first cataract, into what is now Sudan. This stretch of river hosted urban civilization nearly as early as Egypt itself, and for one remarkable century its kings ruled Egypt.

**Kerma (c. 2500-1500 BCE).** By around 2500 BCE, Kerma, upstream of the third cataract, was the center of a powerful state Egyptian texts call **Kush**. Its signature monument still stands: the Western Deffufa, a massive solid mudbrick temple platform. Kerma's elite tombs, with their beds, sacrificed retainers, and fine black-topped pottery, are unmistakably a local tradition, not an Egyptian copy (Welsby, 1996; Bonnet's Swiss excavations from 1973 onward established the sequence). Egypt conquered Kush during the New Kingdom, around 1500 BCE, and held it for centuries. Then Egypt's empire crumbled, and the story reversed.

**Napata and the 25th Dynasty (c. 747-656 BCE).** A Kushite state re-emerged centered on Napata, near the holy mountain of Jebel Barkal. In the 720s BCE its king, **Piye**, marched north and took Egypt itself. His account of the campaign, the Victory Stela found at Jebel Barkal (now in the Egyptian Museum, Cairo), is one of the longest royal inscriptions to survive from ancient Egypt, and it is a remarkable document: Piye presents himself not as a foreign conqueror but as the restorer of proper Egyptian religious order (Ehret, 2016; Welsby, 1996). For roughly a century (conventionally c. 747-656 BCE), Kushite kings ruled as Egypt's **25th Dynasty**. The greatest of them, **Taharqa** (r. 690-664 BCE), built at Karnak and across the Nile valley, and appears in the Hebrew Bible: "Tirhakah king of Cush" marches against the Assyrians in 2 Kings 19:9 and Isaiah 37:9. It was those same Assyrians, with iron weapons and repeated invasions, who finally drove the dynasty back south; Thebes was sacked in 663 BCE.

**Meroë (c. 300 BCE-c. 350 CE).** Pushed out of Egypt, Kush did not collapse; it relocated its center of gravity south to **Meroë**, between the fifth and sixth cataracts, where royal burials shift by about 300 BCE. Meroë was a major ironworking center (its slag mounds are still visible), sat astride savanna trade routes, and developed its own written script, **Meroitic**, with about two dozen signs. Here is a detail worth pausing on, because it teaches how knowledge works: the British Egyptologist Francis Llewellyn Griffith worked out the sound values of Meroitic signs in 1909-1911, so scholars can pronounce Meroitic words, yet the language itself remains largely unread to this day, because it has no securely known close relative and no long bilingual text has been found (Welsby, 1996; UNESCO, 1981-1993, Vol. II). An entire African literature may be sitting in plain sight, waiting for its decoder.

Meroë was ruled at times by queens the sources call **Kandake** (the origin of the name Candace). One of them, **Amanirenas**, fought Rome itself to a negotiated settlement in the 20s BCE after Rome annexed Egypt; her forces raided Roman Aswan, and excavators at Meroë in 1910 found a larger-than-life bronze head of the emperor Augustus, hacked from its statue, buried beneath the steps of a temple so that everyone entering trod above it. It is now in the British Museum (British Museum, n.d.; Welsby, 1996).

And the pyramids: the royal cemeteries of Kush, at El-Kurru, Nuri, and Meroë, hold **more pyramids than all of Egypt**, commonly counted at roughly 200 or more (steeper and smaller than Giza's; counts vary with ruin thresholds). More than forty of them lost their tops in the 1830s, when the Italian treasure hunter Giuseppe Ferlini demolished them looking for gold (Näser, in UNESCO's Island of Meroe documentation; the site was inscribed as World Heritage in 2011).

:::reveal Scholars have been able to PRONOUNCE Meroitic since about 1911 but still cannot READ it. How is that possible, and why does the distinction matter? ||| Griffith worked out the sound values of the roughly two dozen Meroitic signs (1909-1911), so the script is transliterated: you can sound out the words. But knowing sounds is not knowing meanings; the Meroitic language has no securely identified close relative and no long bilingual text, so most of what the words mean is still locked. The distinction matters because 'we can't read it yet' is an evidence gap, not evidence of absence, exactly the kind of gap the deniers mistook for 'no history.'

## Sources
- Welsby, D. A. (1996). *The kingdom of Kush: The Napatan and Meroitic empires*. British Museum Press.
- Ehret, C. (2016). *The civilizations of Africa: A history to 1800* (2nd ed.). University of Virginia Press.
- UNESCO. (1981-1993). *General history of Africa* (Vol. II: Ancient civilizations of Africa, G. Mokhtar, Ed.). UNESCO Publishing / Heinemann.
- British Museum. (n.d.). *Head of Augustus (the Meroë head)* [Collection record]. https://www.britishmuseum.org/collection/object/G_1911-0901-1
- UNESCO World Heritage Centre. (2011). *Archaeological sites of the Island of Meroe* [Inscription record]. https://whc.unesco.org/en/list/1336/`,
      recallContent: [
        {
          prompt: "The 25th Dynasty: who, when, and one primary document.",
          answer:
            "Kushite kings from Napata (in present-day Sudan) ruled Egypt c. 747-656 BCE. Piye's Victory Stela from Jebel Barkal (now in Cairo) records the conquest in the 720s BCE; Taharqa (r. 690-664 BCE) appears in the Hebrew Bible as 'Tirhakah king of Cush.'",
        },
        {
          prompt: "What did Amanirenas's forces bury at Meroë, and why is it good evidence?",
          answer:
            "A bronze head of the emperor Augustus, hacked from a statue during raids on Roman Egypt in the 20s BCE, buried beneath temple steps at Meroë so worshippers walked over it. Found in 1910, now in the British Museum: physical, datable evidence of Kush fighting Rome to a settlement.",
        },
      ],
    },
    {
      slug: "africa-aksum",
      title: "4 · Aksum: coins, converts, and standing stone",
      section: "Section 2 · The Nile beyond Egypt",
      body: `Move east from the Nile to the highlands of present-day northern Ethiopia and Eritrea. Between roughly the first and seventh centuries CE, the kingdom of **Aksum** was one of the great powers of its world, and we know it from an unusually rich mix of evidence: its own coins, its own inscriptions, its own monuments, and the accounts of foreign merchants.

**The trade state.** A Greek merchants' handbook of the mid-first century CE, the *Periplus of the Erythraean Sea*, already describes the Red Sea port of **Adulis** and the trade of the region: ivory, tortoiseshell, and rhinoceros horn flowing out toward the Roman Mediterranean and the Indian Ocean world (Casson, 1989). Aksum sat at the hinge between those two worlds, and grew rich on the position.

**The coins.** From about **270 CE**, under King **Endubis**, Aksum minted its own coinage in gold, silver, and copper, on the Roman weight standard, with legends in Greek and later in Ge'ez (Munro-Hay, 1991). Stop on that fact, because it is a precise, countable refutation of the "no history" claim: in its era, only a handful of states anywhere (Rome, Persia, the Kushan realm, Aksum) issued their own gold coinage. Coins are sovereignty you can hold: they carry kings' names, in sequence, datable by hoards and styles, struck by a state confident enough to guarantee metal purity under its own name. A third-century Persian religious text from the followers of the prophet Mani even lists Aksum among the great kingdoms of the world alongside Rome and Persia (the *Kephalaia*; the ranking is a contemporary perception, not a modern league table, and the course cites it as exactly that) (Munro-Hay, 1991).

**The conversion.** Around the **340s CE**, King **Ezana** adopted Christianity. We do not have to take a chronicler's word for it: Ezana's own coins switch, mid-reign, from the pre-Christian disc-and-crescent to the **cross**, among the earliest crosses on any coinage anywhere, and his stone inscriptions shift from polytheist formulas to a single God (Munro-Hay, 1991). The church historian Rufinus (writing c. 402) tells how a shipwrecked Syrian, Frumentius, rose at the Aksumite court and was later consecrated bishop by Athanasius of Alexandria; Ethiopian Christianity has been continuous ever since, and **Ge'ez**, Aksum's language, is still the liturgical language of the Ethiopian Orthodox Tewahedo Church. Its script, vocalized in the fourth century, is the ancestor of the script Ethiopia and Eritrea use today: an unbroken African literate tradition of some seventeen centuries.

**The stones.** Aksum's kings raised monolithic granite **stelae** over their tombs, carved as multi-story towers with false doors and windows. The largest, the Great Stele, is about **33 meters** long and roughly 520 tonnes, among the largest single stones humans have ever tried to erect (it almost certainly fell during the attempt and lies where it broke). A 24-meter sibling was looted on Mussolini's orders in **1937** and re-erected in Rome; after decades of pressure, Italy returned it in **2005**, and it stands again at Aksum, which UNESCO had inscribed as World Heritage in 1980 (UNESCO World Heritage Centre, n.d.; Munro-Hay, 1991). Keep that 1937 looting in mind when you reach the Benin bronzes in Section 4: the removal of African history's physical evidence to European capitals is part of this story, and so is its contested return.

**The end, honestly told.** Aksum declined from the seventh century as Islamic expansion rerouted Red Sea trade; the coinage stops in the early seventh century, and the political center drifted south. No romance: the kingdom rose on a trade position and waned when the position waned. Ethiopia's later medieval story picks up in Section 4.

:::reveal Why does the course call coinage 'sovereignty you can hold,' and what specifically does Aksumite coinage prove that a chronicle could not? ||| Coins are state documents mass-produced by the state itself: they carry rulers' names in sequence, are datable by hoards and style, and only a state guaranteeing weight and purity can issue them credibly (in Aksum's era, gold coinage meant Rome, Persia, the Kushans, and Aksum). Ezana's mid-reign switch from disc-and-crescent to the cross is contemporary, physical, mass-replicated evidence of the conversion around the 340s CE, independent of any chronicler's later account.

## Sources
- Munro-Hay, S. (1991). *Aksum: An African civilisation of late antiquity*. Edinburgh University Press.
- Casson, L. (Ed. & Trans.). (1989). *The Periplus Maris Erythraei*. Princeton University Press.
- UNESCO. (1981-1993). *General history of Africa* (Vol. II: Ancient civilizations of Africa, G. Mokhtar, Ed.). UNESCO Publishing / Heinemann.
- UNESCO World Heritage Centre. (n.d.). *Aksum* [Inscription record, 1980]. https://whc.unesco.org/en/list/15/
- Phillipson, D. W. (2012). *Foundations of an African civilisation: Aksum and the northern Horn, 1000 BC-AD 1300*. James Currey.`,
      recallContent: [
        {
          prompt: "Three independent kinds of evidence for Aksum, one specific example each.",
          answer:
            "Its own coins (gold coinage from c. 270 CE under Endubis; Ezana's mid-reign switch to the cross); its own monuments (the 33-meter Great Stele); foreign merchant accounts (the first-century Periplus of the Erythraean Sea describing the port of Adulis).",
        },
        {
          prompt: "What happened to the 24-meter Aksum stele in 1937 and 2005?",
          answer:
            "Looted to Rome on Mussolini's orders in 1937; returned by Italy in 2005 and re-erected at Aksum (a World Heritage site since 1980). It prefigures the Benin bronzes story: African historical evidence removed to Europe, and its contested return.",
        },
      ],
    },
    {
      slug: "africa-quiz-2",
      title: "Section 2 quiz · Kush and Aksum",
      section: "Section 2 · The Nile beyond Egypt",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What was Kerma?",
            options: [
              "The center of the early Kushite state in present-day Sudan, a major city by c. 2500 BCE",
              "An Egyptian colony founded by Ramesses II",
              "A Roman fort on the Nile",
              "A medieval Swahili port",
            ],
            correctIndex: 0,
            explanation:
              "Kerma, upstream of the third cataract, was the seat of the state Egyptian texts call Kush, with a distinctly local material culture (the Deffufa, black-topped pottery, bed burials).",
            sourceLessonSlug: "africa-kush",
          },
          {
            prompt: "Who was Piye?",
            options: [
              "The Kushite king who conquered Egypt in the 720s BCE and founded the 25th Dynasty",
              "The last pharaoh of the New Kingdom",
              "An Assyrian general",
              "The first Christian king of Aksum",
            ],
            correctIndex: 0,
            explanation:
              "His Victory Stela from Jebel Barkal, one of the longest royal inscriptions surviving from ancient Egypt, presents him as restorer of Egyptian religious order, not as a foreign destroyer.",
            sourceLessonSlug: "africa-kush",
          },
          {
            prompt: "What are the conventional dates of the 25th Dynasty?",
            options: ["c. 747-656 BCE", "c. 2500-1500 BCE", "c. 300 BCE-350 CE", "c. 1324-1337 CE"],
            correctIndex: 0,
            explanation:
              "Roughly a century of Kushite rule over Egypt, ended by repeated Assyrian invasions (Thebes sacked 663 BCE).",
            sourceLessonSlug: "africa-kush",
          },
          {
            prompt: "Where does Taharqa appear outside Egyptian and Kushite sources?",
            options: [
              "In the Hebrew Bible, as 'Tirhakah king of Cush' (2 Kings 19:9; Isaiah 37:9)",
              "In Homer's Iliad",
              "In the Qur'an by name",
              "In Norse sagas",
            ],
            correctIndex: 0,
            explanation:
              "The biblical mentions place the Kushite pharaoh in the same documented world as the Assyrian crisis, an independent textual anchor for the dynasty.",
            sourceLessonSlug: "africa-kush",
          },
          {
            prompt: "What is the state of Meroitic script today?",
            options: [
              "Transliterated (sound values known since Griffith, 1909-1911) but the language is still largely unread",
              "Fully translated since the 1950s",
              "Completely undeciphered, even the sounds",
              "Proven to be a dialect of Egyptian",
            ],
            correctIndex: 0,
            explanation:
              "Scholars can pronounce Meroitic but not understand most of it: no securely known close relative, no long bilingual. An evidence gap, not an absence of history.",
            sourceLessonSlug: "africa-kush",
          },
          {
            prompt: "The bronze head of Augustus in the British Museum was found where, and why is it significant?",
            options: [
              "Buried beneath temple steps at Meroë: physical evidence of Kush's war with Rome in the 20s BCE",
              "In a shipwreck off Alexandria: evidence of Roman trade",
              "At Great Zimbabwe: evidence of Roman contact with the Shona",
              "In Rome: evidence Meroë never fought Rome",
            ],
            correctIndex: 0,
            explanation:
              "Amanirenas's forces raided Roman Egypt; the emperor's hacked-off head was buried under a Meroë temple entrance so worshippers trod above it. Found 1910.",
            sourceLessonSlug: "africa-kush",
          },
          {
            prompt: "Which is the accurate statement about pyramids?",
            options: [
              "The royal cemeteries of Kush hold more pyramids than all of Egypt, commonly counted at roughly 200 or more",
              "Egypt has about ten times more pyramids than Sudan",
              "Nubian pyramids were built by Egyptian colonists",
              "There are no pyramids south of Egypt",
            ],
            correctIndex: 0,
            explanation:
              "El-Kurru, Nuri, and Meroë together hold more (smaller, steeper) pyramids than Egypt; counts vary with ruin thresholds, which is why the course gives a hedged figure.",
            sourceLessonSlug: "africa-kush",
          },
          {
            prompt: "Who demolished the tops of more than forty Kushite pyramids in the 1830s?",
            options: [
              "Giuseppe Ferlini, an Italian treasure hunter",
              "The Assyrian army",
              "British archaeologists in an official excavation",
              "Local farmers quarrying stone",
            ],
            correctIndex: 0,
            explanation:
              "Ferlini blew the peaks off pyramids at Meroë hunting for treasure. The destruction of evidence is itself part of the history of why this record was long underrated.",
            sourceLessonSlug: "africa-kush",
          },
          {
            prompt: "From about what date did Aksum mint its own coins, and under which king did the coinage begin?",
            options: ["c. 270 CE, under Endubis", "c. 30 BCE, under Augustus", "c. 640 CE, under Ezana", "c. 1100 CE, under Lalibela"],
            correctIndex: 0,
            explanation:
              "Aksumite coinage begins around 270 CE with Endubis, in gold, silver, and copper on the Roman weight standard, with Greek and later Ge'ez legends.",
            sourceLessonSlug: "africa-aksum",
          },
          {
            prompt: "What contemporary, physical evidence documents King Ezana's conversion to Christianity around the 340s CE?",
            options: [
              "His coins switch mid-reign from disc-and-crescent to the cross, and his inscriptions shift to a single God",
              "A papal letter congratulating him",
              "A mosaic portrait in Constantinople",
              "Nothing; it is only legend",
            ],
            correctIndex: 0,
            explanation:
              "The coin evidence is mass-produced, contemporary, and independent of later chroniclers, which is why the course leans on it rather than on narrative alone.",
            sourceLessonSlug: "africa-aksum",
          },
          {
            prompt: "What was Adulis?",
            options: [
              "Aksum's Red Sea port, described in the first-century Periplus of the Erythraean Sea",
              "The capital of Kush",
              "A Roman colony in Ethiopia",
              "The name of Aksum's coinage",
            ],
            correctIndex: 0,
            explanation:
              "The Periplus, a Greek merchants' handbook of the mid-first century CE, describes Adulis and the region's trade in ivory, tortoiseshell, and rhinoceros horn.",
            sourceLessonSlug: "africa-aksum",
          },
          {
            prompt: "Which states issued their own GOLD coinage in Aksum's era, per the course?",
            options: [
              "Rome, Persia, the Kushan realm, and Aksum",
              "Rome only",
              "Every Mediterranean city-state",
              "Aksum and Great Zimbabwe",
            ],
            correctIndex: 0,
            explanation:
              "Gold coinage was rare sovereignty. That short list is why Aksum's mint is such a precise refutation of 'no history': countable, datable, king-by-king state documents.",
            sourceLessonSlug: "africa-aksum",
          },
          {
            prompt: "What is Ge'ez today?",
            options: [
              "The liturgical language of the Ethiopian Orthodox Tewahedo Church, with a script ancestral to modern Ethiopian and Eritrean scripts",
              "A dead language with no surviving texts",
              "The official language of modern Sudan",
              "A trade pidgin invented by Portuguese sailors",
            ],
            correctIndex: 0,
            explanation:
              "Aksum's language and fourth-century vocalized script survive in continuous liturgical and literary use: roughly seventeen centuries of unbroken African literacy.",
            sourceLessonSlug: "africa-aksum",
          },
          {
            prompt: "What happened to the 24-meter Aksum stele?",
            options: [
              "Looted to Rome on Mussolini's orders in 1937; returned by Italy in 2005 and re-erected at Aksum",
              "It was destroyed by the Assyrians",
              "It still lies in a Rome warehouse",
              "It was sold to the British Museum in 1897",
            ],
            correctIndex: 0,
            explanation:
              "The 2005 return, to a site UNESCO listed in 1980, is an early landmark in the restitution story that continues with the Benin bronzes in Section 4.",
            sourceLessonSlug: "africa-aksum",
          },
          {
            prompt: "How does the course handle the third-century Manichaean text ranking Aksum among the world's great kingdoms?",
            options: [
              "As evidence of contemporary PERCEPTION of Aksum's stature, not as a modern league table",
              "As proof Aksum was the strongest state on Earth",
              "It dismisses the text as a forgery",
              "As evidence Mani visited Aksum personally",
            ],
            correctIndex: 0,
            explanation:
              "The Kephalaia shows how third-century outsiders ranked Aksum (alongside Rome and Persia). The course cites it for what it is: perception, precisely labelled.",
            sourceLessonSlug: "africa-aksum",
          },
        ],
      },
    },

    // ────────────── SECTION 3 · WEST AFRICA: GOLD, SALT, AND BOOKS ──────────────
    {
      slug: "africa-gold-roads",
      title: "5 · Ghana, Mali, Songhai: three empires on the gold roads",
      section: "Section 3 · West Africa: gold, salt, and books",
      body: `Cross the Sahara. Between roughly the eighth and sixteenth centuries CE, the savanna belt where the desert meets the Niger River hosted a succession of large states that grew rich on one of the medieval world's great trade systems.

**The trade first, because the empires ride on it.** The camel, established in Saharan use by the early centuries CE, made regular desert crossing possible; from about the eighth century, Muslim North African merchants ran caravans south. Southbound: salt above all, mined in slabs at desert sites like **Taghaza**, where Ibn Battuta stopped in 1352 and reported buildings and a mosque built of salt blocks (Levtzion & Hopkins, 2000). Northbound: **gold** from the Bambuk and Bure fields on the upper Senegal and Niger, worked by local producers and moved by Wangara merchant networks, plus ivory, and, plainly stated here and taught fully in Section 5, enslaved people. West African gold mattered far beyond the region: it fed the mints of North Africa and, through them, medieval Europe. Salt going the other way was not a quaint curiosity; in a hot savanna economy salt is a physiological necessity, storable, divisible, and in places it functioned as money. (You will meet a famous story about "silent trade," gold and salt exchanged by traders who never meet or speak. Travelers and geographers repeated it for centuries; no observer ever documented it firsthand, so this course tells it as what it is: a story merchants told about a trade they were not allowed to see up close.)

**Ghana (Wagadu).** The first of the big states in the record: a **Soninke** kingdom, in present-day southeastern Mauritania and western Mali, and no relation to the modern country that borrowed its name in 1957. One of the earliest surviving Arabic mentions, attributed to the eighth-century astronomer al-Fazari and preserved by later writers, already calls it "the land of gold." Our best account is **al-Bakri** (1068), and Lesson 14 will make much of the fact that he compiled it in Muslim Spain from travelers' reports without ever going himself. What he describes is not a "tribe with gold" but an administration: a capital of two towns (a Muslim merchants' town with twelve mosques, and the royal town with the king's court); a king, pre-Islamic in religion, presiding over formal audiences; interpreters, a treasury, officials; and a customs system that taxed each donkey-load of salt one gold dinar coming in and two going out. Al-Bakri also records the royal monopoly rule: nuggets belong to the king, gold dust to the people (Levtzion & Hopkins, 2000). You may read elsewhere that the **Almoravids sacked Ghana in 1076**. Treat that as contested: the claim comes from later Arabic historians, and Conrad and Fisher (1982) argued the evidence for any conquest is thin; many specialists now describe Almoravid pressure and commercial reorientation rather than a sack. Ghana declined across the twelfth and thirteenth centuries; the region's power moved south.

**Mali.** A **Mande** (Malinke) empire on the upper Niger, from the thirteenth century. Its founding story, Sundiata's victory at Kirina over Sumanguru of the Soso around 1235, comes to us mainly through the **oral epic** performed by jeliw (griots) and recorded in writing only in modern times, cross-checked against the fourteenth-century king lists of Ibn Khaldun; the course flags the date as traditional (Niane, 1965; Gomez, 2018). At its fourteenth-century height Mali controlled the goldfields and the desert ports, from the Atlantic coast to beyond Timbuktu. It is the best-documented state of the three, because visitors wrote it down: Lesson 6 is devoted to its most famous ruler, and in 1352-53 **Ibn Battuta traveled through Mali itself** and left an eyewitness account, praising above all the security of the roads, that a traveler had no more to fear from robbers than in any land he knew, while also complaining freely about customs that offended him. An honest witness, worth more than a flattering one (Levtzion & Hopkins, 2000).

**Songhai.** Centered at **Gao** on the Niger bend. Under **Sunni Ali** (r. 1464-1492), who took Timbuktu in 1468, and then **Askia Muhammad** (r. 1493-1528), who seized the throne, made the hajj, and built a provincial administration with appointed governors, judges, and inspectors, Songhai became the largest of the three empires. It ended abruptly: in **1591**, a Moroccan force of a few thousand men crossed the Sahara with firearms and broke the Songhai army at **Tondibi**. The lesson usually drawn, gunpowder beats cavalry, is real but incomplete: the Moroccans could destroy the empire yet could not govern it, and the region fragmented. The scholars of Timbuktu recorded the whole catastrophe in their own chronicles, which is how we know it (Hunwick, 1999).

One deliberate correction before the quiz: these three states were succession IN TIME, not a relay of one "kingdom of Africa." Different peoples (Soninke, Malinke, Songhai), different capitals, overlapping territories, three different languages. The gold roads are the continuity; the states are distinct, and this course keeps them so.

:::reveal Al-Bakri never set foot in West Africa, yet his 1068 account is treated as prime evidence for the kingdom of Ghana. What in the CONTENT of his description makes it credible evidence of a real administration? ||| Its details are the boring, checkable kind that legends do not bother inventing: a two-town capital with counted mosques, formal court audiences with interpreters and officials, a customs schedule (one dinar per donkey-load of salt in, two out), and a royal-monopoly rule splitting nuggets from gold dust. Administrative plumbing of that specificity, gathered from merchants who had to deal with it, is evidence of a functioning state, though Lesson 14 teaches why secondhand compilation still demands caution.

## Sources
- Levtzion, N., & Hopkins, J. F. P. (Eds.). (2000). *Corpus of early Arabic sources for West African history*. Markus Wiener. (Original work published 1981)
- Gomez, M. A. (2018). *African dominion: A new history of empire in early and medieval West Africa*. Princeton University Press.
- Conrad, D., & Fisher, H. (1982). The conquest that never was: Ghana and the Almoravids, 1076. *History in Africa, 9*, 21-59.
- Hunwick, J. O. (1999). *Timbuktu and the Songhay Empire: Al-Sa'di's Ta'rikh al-Sudan down to 1613*. Brill.
- Niane, D. T. (1965). *Sundiata: An epic of old Mali* (G. D. Pickett, Trans.). Longman.
- Green, T. (2019). *A fistful of shells: West Africa from the rise of the slave trade to the age of revolution*. University of Chicago Press.`,
      recallContent: [
        {
          prompt: "Three empires, three peoples, three (approximate) periods.",
          answer:
            "Ghana/Wagadu: Soninke, documented from the eighth century, described by al-Bakri 1068, declining by the twelfth to thirteenth. Mali: Mande (Malinke), thirteenth to fifteenth centuries, founding dated traditionally to Sundiata c. 1235. Songhai: from Gao, dominant fifteenth to sixteenth centuries, destroyed at Tondibi 1591 by a Moroccan force with firearms.",
        },
        {
          prompt: "What is contested about the 'Almoravid sack of Ghana in 1076'?",
          answer:
            "The conquest claim comes from later Arabic historians; Conrad and Fisher (1982) argued the evidence for an actual sack is thin. Many specialists now describe Almoravid pressure and commercial reorientation instead. Older textbooks assert the sack as fact; this course does not.",
        },
      ],
    },
    // Cross-link: BAM's Mansa Gold research files (Ghana cocoa/coffee brand research) live in
    // plans/future-courses/mansa-gold/ and surface on the Future board at /admin/future.
    {
      slug: "africa-mansa-musa",
      title: "6 · Mansa Musa's hajj: what the sources actually say",
      section: "Section 3 · West Africa: gold, salt, and books",
      body: `You have probably met Mansa Musa as a superlative: "the richest human being who ever lived," with a dollar figure attached. This lesson is going to do something more useful than repeat that. It will show you exactly what the sources say, what they cannot say, and how a famous claim gets inflated, because learning to run that audit is worth more than any single fact in this course.

**What is solidly attested.** Musa was *mansa* (ruler) of Mali, reigning from about 1312 to about 1337 (the dates are approximate, reconstructed from Ibn Khaldun's fourteenth-century synchronisms). In **1324-25 he made the pilgrimage to Mecca**, passing through Cairo, and the journey is attested by multiple written sources close to the events, none of them Malian: above all **al-Umari**, a Mamluk official and encyclopedist who visited Cairo about a dozen years later and interviewed people who had dealt with Musa, plus Ibn Khaldun and the fifteenth-century historian al-Maqrizi (Levtzion & Hopkins, 2000; Gomez, 2018).

**The famous gold story, from the source itself.** Al-Umari reports that Musa and his caravan spent and gave away so much gold in Cairo that the market price of gold fell: the mithqal, which had exchanged at 25 dirhams, dropped to about 22, and, he says, stayed depressed for about twelve years (Levtzion & Hopkins, 2000). That is the entire documentary basis of every "he crashed Egypt's economy" headline you have ever seen. Now the audit:

- **What it supports:** an enormous, real expenditure of gold, striking enough that Cairo's officialdom still talked about it a decade later. Musa was, by any reading, spectacularly rich.
- **What it does not support:** a net-worth figure. No source records Mali's revenues, reserves, or production in any form that permits computation. The viral "richest ever" number traces to a 2012 pop-media listicle, not to any scholarly estimate, and historians' actual position is that his wealth is not quantifiable (Gomez, 2018). This course refuses the number entirely.
- **What has been re-examined:** the "crash" itself. The numismatist Warren Schultz (2006) went back to Mamluk exchange-rate records and found that swings of the reported size fall within the normal fluctuation of Cairo's gold-silver market in that era. Al-Umari's report may be true as far as it goes; the strongest versions built on it (a wrecked national economy, a decade of ruin caused by one visit) exceed what the evidence shows. "Contested" is the honest label.
- **The caravan statistics** you see quoted (60,000 people, 12,000 slaves, 80 to 100 camel-loads of gold) come from later or secondhand compilations, and they disagree with one another. Reported, not established. Note also what those numbers include: thousands of enslaved people in the pilgrimage train is part of the same record, stated here and taught fully in Section 5.

**Why the hajj matters beyond the gold.** Within fifty years, Mali's wealth was on European maps: the **Catalan Atlas** (1375, from the Majorcan workshop of Abraham Cresques, now in the Bibliothèque nationale de France) shows a West African king enthroned, crowned, holding up a lump of gold, labeled as the lord of the gold of Guinea. Remember Trevor-Roper's "darkness": a century and a half before Columbus sailed, Europe's finest mapmakers were drawing Mali's king in gold, because merchants needed to know. Musa also came home with scholars and, tradition holds, the Andalusi poet-architect al-Sahili; later tradition credits al-Sahili with buildings including Timbuktu's Djinguereber mosque, an attribution the course labels traditional rather than documented (Hunwick, 1999; Gomez, 2018).

**The takeaway is the method.** One superlative ("richest ever") is unquantifiable and refused. One dramatic claim ("crashed Egypt") is contested and labeled. The documented core (a real hajj, real gold on a spectacular scale, real diplomatic and scholarly consequences, real enslaved people in the caravan) is plenty. The record did not need the inflation, and the inflation is precisely what a denier would attack first.

:::reveal A friend says: 'Mansa Musa was the richest person in history, worth $400 billion.' Run this course's audit on that sentence. ||| The hajj, the Cairo gold spending, and al-Umari's report of the mithqal falling from 25 to about 22 dirhams for about twelve years are documented (Levtzion & Hopkins). But no source records Mali's revenues or reserves, so no net-worth figure is computable: the dollar number traces to a 2012 pop listicle, and historians call the wealth unquantifiable. Even the 'crash' is contested (Schultz 2006: the swing is within normal Mamluk exchange-rate fluctuation). Verdict: spectacularly rich, yes; 'richest ever, $400B,' unsupportable.

## Sources
- Levtzion, N., & Hopkins, J. F. P. (Eds.). (2000). *Corpus of early Arabic sources for West African history*. Markus Wiener. (Original work published 1981)
- Gomez, M. A. (2018). *African dominion: A new history of empire in early and medieval West Africa*. Princeton University Press.
- Schultz, W. C. (2006). Mansa Musa's gold in Mamluk Cairo: A reappraisal of a world civilizations anecdote. In J. Pfeiffer & S. A. Quinn (Eds.), *History and historiography of post-Mongol Central Asia and the Middle East* (pp. 428-447). Harrassowitz.
- Bibliothèque nationale de France. (n.d.). *Atlas catalan* [1375; Espagnol 30]. https://gallica.bnf.fr/ark:/12148/btv1b55002481n
- Hunwick, J. O. (1999). *Timbuktu and the Songhay Empire: Al-Sa'di's Ta'rikh al-Sudan down to 1613*. Brill.`,
      recallContent: [
        {
          prompt: "What does al-Umari actually report about Mansa Musa's gold in Cairo, and via which scholarly translation does this course cite it?",
          answer:
            "That Musa's 1324-25 spending drove the gold mithqal down from 25 dirhams to about 22, depressed for about twelve years; al-Umari gathered this in Cairo roughly a dozen years after the visit. Cited via Levtzion & Hopkins, Corpus of Early Arabic Sources for West African History.",
        },
        {
          prompt: "Name the two hedges this course applies to the Mansa Musa story.",
          answer:
            "'Richest person ever' is refused as unquantifiable (no revenue or reserve data exists; the viral figure traces to a 2012 listicle). The 'crashed Egypt's economy' framing is labeled contested: Schultz (2006) showed the reported price swing is within normal Mamluk exchange-rate fluctuation.",
        },
      ],
    },
    {
      slug: "africa-timbuktu-books",
      title: "7 · Timbuktu and Djenné: the book trade",
      section: "Section 3 · West Africa: gold, salt, and books",
      body: `Trevor-Roper's argument had one load-bearing premise: no documents. This lesson is about a city whose most famous export, by the sixteenth century, was documents.

**Timbuktu** sits where the Niger's great bend comes closest to the Sahara: the port where camel meets canoe. By tradition recorded in the seventeenth-century *Tarikh al-Sudan*, it began around 1100 as a Tuareg seasonal camp; it entered Mali's orbit in the fourteenth century (Mansa Musa returned from Mecca through it in 1325), and reached its peak under Songhai in the fifteenth and sixteenth. When the Granada-born traveler known as **Leo Africanus** saw it around the 1510s, his description (published 1550) made a point of the market that surprised him most: books, he wrote, sold better than any other merchandise (Hunwick, 1999).

**What the scholarship actually was.** You will see Timbuktu's Sankore mosque called "the University of Sankore," sometimes with an enrollment figure like 25,000 students attached. This course flags both. There was no chartered university in the medieval European sense; there were mosques (Djinguereber, Sankore, Sidi Yahya) and around them a dense, real world of independent scholars who taught students individually and granted an *ijaza*, a personal license certifying mastery of specific texts. The enrollment statistics circulating online have no reliable source. The scholarship itself, though, is documented to the bone: the jurist **Ahmad Baba al-Timbukti** (1556-1627), the city's most famous scholar, wrote dozens of works still cited in Maliki law; when Morocco conquered Songhai he was deported to Marrakesh (1594), where he taught to acclaim and protested his exile in writing, remarking that his own confiscated library of some 1,600 volumes was smaller than those of several kinsmen. The figure is his own report, so treat it as testimony rather than inventory, but it tells you what a private library meant in his city (Hunwick, 1999).

**The manuscripts are the point.** Family libraries in and around Timbuktu preserve manuscripts in Arabic and in African languages written in Arabic script (*ajami*): law, theology, astronomy, mathematics, medicine, grammar, poetry, contracts, letters. How many? Reported estimates for the wider region run into the hundreds of thousands, and this course labels them exactly that: reported, never audited. What is documented is what happened in 2012-13, when jihadist groups occupied Timbuktu: they wrecked saints' mausoleums, burned manuscripts at the Ahmed Baba Institute (about 4,200 lost there by the institute's account), and were denied the rest by a smuggling operation, run by the librarian **Abdel Kader Haidara** and dozens of families, that moved a reported several hundred thousand manuscripts to safety in Bamako in trunks, by road and by river. In 2016 the International Criminal Court convicted **Ahmad al-Faqi al-Mahdi** for directing attacks on Timbuktu's protected buildings, the ICC's first conviction treating cultural destruction as the core war crime (International Criminal Court, 2016; UNESCO listed Timbuktu in 1988).

**And the chronicles.** Timbuktu's scholars wrote their region's own history: the *Tarikh al-Sudan* of al-Sadi (c. 1655, translated by Hunwick, 1999) narrates Songhai's rise and the Moroccan catastrophe from the inside. Its companion, the so-called *Tarikh al-fattash*, is taught here with a flag: its textual history is tangled, and scholars have shown that the version long in circulation contains nineteenth-century interpolations serving a later ruler's legitimacy (Nobili & Mathee, 2015). Even the good news gets source-checked; that is the course's whole method.

**Djenné, downstream,** completes the picture, twice. Its Great Mosque, the world's largest mud-brick building, is a city icon rebuilt in **1907** on the site of a mosque tradition dates to the thirteenth century; admire it, but do not caption it "medieval," because the building you photograph is twentieth-century Malian masonry in a deep local tradition (UNESCO, 1988 inscription). And two kilometers away lies the real bombshell: **Jenne-jeno**, excavated by Susan and Roderick McIntosh from 1977, a settlement occupied from around 250 BCE that grew into a substantial urban cluster by the middle of the first millennium CE, centuries before the trans-Saharan Islamic trade. Cities on the Niger did not arrive with Arab merchants or anyone else; they grew there (McIntosh & McIntosh, 1981).

:::reveal Why does this course refuse to call Sankore a 'university with 25,000 students' while still claiming Timbuktu refutes Trevor-Roper's 'no documents' premise? ||| Because each half is judged on its evidence. The 'university' frame is anachronistic (teaching ran through individual scholars granting ijazas, not a chartered institution) and the enrollment figure has no reliable source: asserting them would be the romance trap. But the documents themselves are physical and countable in the hundreds of thousands (reported), the book trade is attested by Leo Africanus around the 1510s, Ahmad Baba's career is documented on two continents, and the Tarikh al-Sudan is an African-written history of an African empire. The real record does the refuting without the inflation.

## Sources
- Hunwick, J. O. (1999). *Timbuktu and the Songhay Empire: Al-Sa'di's Ta'rikh al-Sudan down to 1613*. Brill.
- McIntosh, S. K., & McIntosh, R. J. (1981). West African prehistory. *American Scientist, 69*(6), 602-613.
- Nobili, M., & Mathee, M. S. (2015). Towards a new study of the so-called Tarikh al-fattash. *History in Africa, 42*, 37-73.
- International Criminal Court. (2016). *The Prosecutor v. Ahmad Al Faqi Al Mahdi* [Judgment, ICC-01/12-01/15]. https://www.icc-cpi.int/mali/al-mahdi
- UNESCO World Heritage Centre. (n.d.). *Timbuktu* [Inscription record, 1988]. https://whc.unesco.org/en/list/119/
- Gomez, M. A. (2018). *African dominion: A new history of empire in early and medieval West Africa*. Princeton University Press.`,
      recallContent: [
        {
          prompt: "What did Leo Africanus report about Timbuktu's market around the 1510s?",
          answer:
            "That books sold better than any other merchandise: the famous line documenting a mass book trade in a West African city, published in 1550.",
        },
        {
          prompt: "Why does Jenne-jeno matter so much to this course's argument?",
          answer:
            "The McIntosh excavations (from 1977) showed a settlement from c. 250 BCE growing into an urban cluster by the mid-first millennium CE, centuries before trans-Saharan Islamic trade: cities on the Niger were homegrown, not imported, which kills the claim that urbanism arrived with outsiders.",
        },
      ],
    },
    {
      slug: "africa-quiz-3",
      title: "Section 3 quiz · West Africa",
      section: "Section 3 · West Africa: gold, salt, and books",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What flowed SOUTH across the Sahara in the caravan trade, above all?",
            options: ["Salt, mined in slabs at desert sites like Taghaza", "Gold", "Ivory", "Manuscripts"],
            correctIndex: 0,
            explanation:
              "Salt was the great southbound cargo (a physiological necessity in the savanna, and in places near-money); gold, ivory, and enslaved people moved north.",
            sourceLessonSlug: "africa-gold-roads",
          },
          {
            prompt: "The kingdom of Ghana described by al-Bakri in 1068 was:",
            options: [
              "A Soninke state in present-day Mauritania and Mali, unrelated territorially to the modern country of Ghana",
              "Located in the territory of the modern Republic of Ghana",
              "A Berber colony",
              "A province of Mali",
            ],
            correctIndex: 0,
            explanation:
              "Modern Ghana borrowed the name at independence in 1957; the medieval Soninke state (Wagadu) lay far to the northwest. Naming precisely is the course's core rule.",
            sourceLessonSlug: "africa-gold-roads",
          },
          {
            prompt: "Which administrative detail does al-Bakri record about Ghana's customs system?",
            options: [
              "One gold dinar tax per donkey-load of salt entering, two per load leaving",
              "A flat 10% tithe on all goods",
              "No taxation at all",
              "Taxes payable only in cowrie shells",
            ],
            correctIndex: 0,
            explanation:
              "That boring, specific schedule (plus the nuggets-to-the-king rule) is exactly the kind of administrative plumbing that marks a functioning state, not a legend.",
            sourceLessonSlug: "africa-gold-roads",
          },
          {
            prompt: "How does this course teach the '1076 Almoravid sack of Ghana'?",
            options: [
              "As contested: Conrad and Fisher (1982) argued the evidence for a conquest is thin",
              "As established fact",
              "As a myth invented in the twentieth century",
              "It does not mention it",
            ],
            correctIndex: 0,
            explanation:
              "Later Arabic historians assert a conquest; the case against it (pressure and reorientation, not a sack) is strong enough that the course labels the claim contested.",
            sourceLessonSlug: "africa-gold-roads",
          },
          {
            prompt: "How is the founding of Mali (Sundiata, c. 1235) primarily known?",
            options: [
              "Through the oral epic of the jeliw (griots), recorded in modern times and cross-checked against Ibn Khaldun's king lists",
              "Through a contemporary Malian royal archive",
              "Through Roman records",
              "Through Portuguese chronicles",
            ],
            correctIndex: 0,
            explanation:
              "That is why the course labels the date traditional: oral tradition is real evidence (Section 6 teaches how), but its chronology is approximate.",
            sourceLessonSlug: "africa-gold-roads",
          },
          {
            prompt: "What did Ibn Battuta praise most in his eyewitness account of Mali (1352-53)?",
            options: [
              "The security of the roads: travelers had nothing to fear from robbers",
              "The gold mines, which he toured",
              "The emperor's navy",
              "The university enrollment",
            ],
            correctIndex: 0,
            explanation:
              "He also complained freely about customs that offended him, which makes him a more credible witness, not less: he was no flatterer.",
            sourceLessonSlug: "africa-gold-roads",
          },
          {
            prompt: "What ended the Songhai empire in 1591?",
            options: [
              "A Moroccan force that crossed the Sahara with firearms and won at Tondibi",
              "A Portuguese naval invasion up the Niger",
              "The Almoravid conquest",
              "A succession war with Mali",
            ],
            correctIndex: 0,
            explanation:
              "A few thousand men with arquebuses broke the Songhai army; but the Moroccans could destroy the empire, not govern it, and the region fragmented.",
            sourceLessonSlug: "africa-gold-roads",
          },
          {
            prompt: "What is the documentary basis of the 'Mansa Musa crashed Egypt's gold market' story?",
            options: [
              "Al-Umari's report that the mithqal fell from 25 to about 22 dirhams and stayed depressed about twelve years",
              "Mali's own treasury records",
              "A Venetian banker's ledger",
              "Egyptian tax rolls listing Musa by name",
            ],
            correctIndex: 0,
            explanation:
              "Al-Umari gathered accounts in Cairo about a dozen years after the 1324-25 hajj. That single report, via Levtzion & Hopkins' translation, is the whole basis of every headline version.",
            sourceLessonSlug: "africa-mansa-musa",
          },
          {
            prompt: "Why does the course refuse the claim that Mansa Musa was 'the richest person in history'?",
            options: [
              "No source records Mali's revenues or reserves, so no net-worth figure is computable; the viral number traces to a 2012 pop listicle",
              "Because he was actually poor",
              "Because other African kings were provably richer",
              "Because wealth comparisons across time are always exact but forbidden",
            ],
            correctIndex: 0,
            explanation:
              "Historians' position is that the wealth is unquantifiable. 'Spectacularly rich' is documented; a rank and a dollar figure are inventions.",
            sourceLessonSlug: "africa-mansa-musa",
          },
          {
            prompt: "What did Schultz (2006) conclude about the Cairo gold 'crash'?",
            options: [
              "The reported price swing falls within the normal fluctuation of Mamluk exchange rates, so the strongest 'wrecked economy' versions exceed the evidence",
              "That al-Umari invented the entire visit",
              "That the crash lasted fifty years, not twelve",
              "That Musa paid in silver, not gold",
            ],
            correctIndex: 0,
            explanation:
              "Re-examining the numismatic record led Schultz to a hedged verdict: the report may be true as far as it goes, but 'contested' is the honest label for the crash framing.",
            sourceLessonSlug: "africa-mansa-musa",
          },
          {
            prompt: "What does the Catalan Atlas of 1375 show, and why does the course cite it?",
            options: [
              "A crowned West African king holding gold, labeled lord of the gold of Guinea: Mali's wealth on Europe's best maps within fifty years of the hajj",
              "The first accurate coastline of southern Africa",
              "A portrait of Ibn Battuta",
              "The route of the Moroccan invasion of 1591",
            ],
            correctIndex: 0,
            explanation:
              "From Abraham Cresques's Majorcan workshop (now in the BnF): mapmakers drew what merchants needed to know, a century and a half before Columbus. So much for 'darkness.'",
            sourceLessonSlug: "africa-mansa-musa",
          },
          {
            prompt: "Which caravan statistics does the course label 'reported, not established'?",
            options: [
              "The head-counts like 60,000 people, 12,000 slaves, and 80-100 camel-loads of gold, which come from later compilations that disagree",
              "The existence of the hajj itself",
              "The year 1324",
              "The route through Cairo",
            ],
            correctIndex: 0,
            explanation:
              "The hajj, the route, and the gold spending are well attested; the precise head-counts are secondhand and inconsistent, so they are stated as reports, not facts.",
            sourceLessonSlug: "africa-mansa-musa",
          },
          {
            prompt: "What did Leo Africanus single out about Timbuktu's market (c. 1510s, published 1550)?",
            options: [
              "Books sold better than any other merchandise",
              "Gold was worthless there",
              "No foreigners were admitted",
              "Only salt was traded",
            ],
            correctIndex: 0,
            explanation:
              "The book trade is the direct answer to Trevor-Roper's 'no documents' premise: documents were the city's celebrity commodity.",
            sourceLessonSlug: "africa-timbuktu-books",
          },
          {
            prompt: "How does the course handle the phrase 'the University of Sankore'?",
            options: [
              "As an anachronistic frame: real, documented scholarship (ijaza system, Ahmad Baba, the chronicles) but no chartered university, and no reliable enrollment figures",
              "As literally accurate, with 25,000 enrolled students",
              "As a colonial invention with no scholarship behind it",
              "It does not discuss Sankore",
            ],
            correctIndex: 0,
            explanation:
              "Both traps avoided at once: the scholarship is documented to the bone, and the inflated framing is flagged rather than repeated.",
            sourceLessonSlug: "africa-timbuktu-books",
          },
          {
            prompt: "What was the ICC's 2016 al-Mahdi judgment about?",
            options: [
              "Directing attacks on Timbuktu's protected mausoleums and buildings in 2012: the ICC's first conviction centered on cultural destruction as a war crime",
              "The theft of the Benin bronzes",
              "The 1591 Moroccan invasion",
              "Manuscript forgery",
            ],
            correctIndex: 0,
            explanation:
              "Ahmad al-Faqi al-Mahdi pleaded guilty; the case, with the Haidara-led evacuation of a reported several hundred thousand manuscripts to Bamako, is the modern chapter of the record's survival.",
            sourceLessonSlug: "africa-timbuktu-books",
          },
          {
            prompt: "Why is the Great Mosque of Djenné a caption-check exercise?",
            options: [
              "The current building dates to 1907 (in a deep local tradition, on a site whose mosque tradition dates to the thirteenth century), so calling the photo 'medieval' is false",
              "It is actually in Timbuktu",
              "It is a colonial French design with no local tradition",
              "It is built of granite",
            ],
            correctIndex: 0,
            explanation:
              "Honest captioning cuts both ways: the mud-brick masterpiece is twentieth-century Malian masonry, and two kilometers away Jenne-jeno's mounds are genuinely ancient (c. 250 BCE onward).",
            sourceLessonSlug: "africa-timbuktu-books",
          },
        ],
      },
    },
  ],
};
