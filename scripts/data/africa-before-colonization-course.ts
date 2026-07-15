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

    // ────────────── SECTION 4 · STONE TOWNS AND BRONZE COURTS ──────────────
    {
      slug: "africa-great-zimbabwe",
      title: "8 · Great Zimbabwe, and the men who refused to believe it",
      section: "Section 4 · Stone towns and bronze courts",
      body: `South of the Zambezi, on the Zimbabwean plateau, stands the largest of several hundred drystone ruins that give the modern nation its name: **Great Zimbabwe**, from the Shona *dzimbahwe*, houses of stone. This lesson is two stories: the city, and the seventy-year campaign to deny who built it. The second story is why this course exists, so the receipts here are unusually thorough.

**The city.** Built and occupied from roughly **1100 to 1450 CE** by ancestors of the **Shona**, Great Zimbabwe was the center of a state that grew rich coupling the plateau's cattle and gold to the Indian Ocean trade. Its signature is granite walling laid without a drop of mortar: the Great Enclosure's outer wall runs about 250 meters around and rises to roughly 11 meters, and the site is often described as the largest ancient stone construction south of the Sahara (Garlake, 1973; UNESCO inscribed it in 1986). Population estimates for its peak vary widely (commonly cited on the order of 10,000 or more; treat all such figures as estimates). What is not an estimate is what excavators found in it: Chinese celadon, Persian glazed ware, glass beads, and a coin from **Kilwa**, the Swahili port of Lesson 9. This landlocked city sat in a trade web that touched China (Garlake, 1973). Eight carved soapstone birds stood on its walls; one is on Zimbabwe's flag today.

**The denial, from the documents.** The German geologist Karl Mauch reached the ruins in 1871 and decided a local African origin was impossible: he proposed the Queen of Sheba's Ophir, and famously judged a wooden lintel to be Lebanese cedar, hence Solomon's era. In 1891 J. Theodore Bent, sponsored under the patronage of Cecil Rhodes's circle, excavated and pronounced the builders non-African (Phoenician or Arabian). Worse than theories: in 1895 a chartered company, Rhodesia Ancient Ruins Ltd., was licensed to strip goldwork from zimbabwe sites commercially, and the journalist-curator Richard Hall, appointed to Great Zimbabwe in 1902, shoveled out meters of stratified deposit as "Kaffir filth" (his phrase), destroying evidence wholesale (Garlake, 1973; Pikirayi, 2012). Then science arrived: **David Randall-MacIver** (1905), a trained archaeologist, concluded the site was African and medieval. **Gertrude Caton-Thompson**'s 1929 excavation settled it: every datable object and every structural technique pointed to an African origin in the African Middle Ages (Caton-Thompson, 1931). Radiocarbon dating later confirmed the chronology.

**And then the denial became law.** This is the part to memorize, because it is documented, recent, and exactly what Lesson 1 predicted: evidence does not always win quickly when a state needs the opposite conclusion. Under the white-minority Rhodesian Front government (which declared independence in 1965 precisely to prevent majority rule), official censorship from **1970** barred state publications from stating as fact that Great Zimbabwe was an African creation; guidebooks and museum displays were required to present the origins as a mystery. **Peter Garlake**, the country's Inspector of Monuments from 1964, refused to play along and was forced out of the country in 1970 (Pikirayi, 2012; PBS NOVA, n.d.). Sit with that: within living memory, a government censored archaeology because the archaeology proved Africans built a stone city. When Zimbabwe won majority rule in 1980, it named itself after the site.

**Why it matters beyond the walls.** Great Zimbabwe is the cleanest possible test of Trevor-Roper's claim, because it is physical. No documents are needed: the walls, the stratigraphy, the imports, and the dates speak. The deniers understood that too, which is why the site had to be Phoenician, then a mystery, then censored. It was never a mystery. It was inconvenient.

:::reveal A 1970s Rhodesian guidebook says Great Zimbabwe's origins are 'a mystery.' Using this lesson's evidence, explain what that sentence actually documents. ||| Not an evidence gap but a policy: Randall-MacIver (1905) and Caton-Thompson (1929, published 1931) had settled the African, medieval origin decades earlier, and radiocarbon confirmed it. From 1970 the Rhodesian government censored official publications from stating that conclusion as fact, and forced out the Inspector of Monuments (Garlake) who insisted on it. The 'mystery' sentence is a documented artifact of state censorship of archaeology, not of archaeological uncertainty.

## Sources
- Garlake, P. S. (1973). *Great Zimbabwe*. Thames & Hudson.
- Caton-Thompson, G. (1931). *The Zimbabwe culture: Ruins and reactions*. Clarendon Press.
- Pikirayi, I. (2012). Peter Garlake (1934-2011), Great Zimbabwe and the politics of the past in Zimbabwe. *Azania: Archaeological Research in Africa, 47*(2), 223-231. https://doi.org/10.1080/0067270X.2012.682779
- PBS NOVA. (n.d.). *Mysteries of Great Zimbabwe*. https://www.pbs.org/wgbh/nova/article/mysteries-of-great-zimbabwe/
- UNESCO World Heritage Centre. (n.d.). *Great Zimbabwe National Monument* [Inscription record, 1986]. https://whc.unesco.org/en/list/364/`,
      recallContent: [
        {
          prompt: "Great Zimbabwe: who built it, when, and name two excavation finds that prove long-distance trade.",
          answer:
            "Ancestors of the Shona, c. 1100-1450 CE. Finds include Chinese celadon, Persian glazed ware, glass beads, and a coin from Kilwa on the Swahili coast: a landlocked city wired into Indian Ocean trade.",
        },
        {
          prompt: "The chain of denial and correction at Great Zimbabwe, with dates.",
          answer:
            "Mauch 1871 (Sheba/Ophir), Bent 1891 (Phoenician), Rhodesia Ancient Ruins Ltd. 1895 (commercial looting), Hall from 1902 (deposits destroyed); then Randall-MacIver 1905 (African, medieval) and Caton-Thompson 1929/1931 (settled). From 1970 Rhodesia censored official publications from stating the African origin as fact and forced out Inspector of Monuments Peter Garlake.",
        },
      ],
    },
    {
      slug: "africa-swahili-coast",
      title: "9 · The Swahili coast: Kilwa and the Indian Ocean",
      section: "Section 4 · Stone towns and bronze courts",
      body: `Now to the coast Great Zimbabwe's gold flowed toward. From Mogadishu (in present-day Somalia) down to Sofala (in present-day Mozambique), a chain of stone-built trading towns (Lamu, Malindi, Mombasa, Zanzibar, Kilwa, and dozens more) faced the monsoon winds of the Indian Ocean. Between roughly the eleventh and fifteenth centuries this was one of the most connected commercial coasts on Earth.

**Start with the language, because it settles an old slander.** Swahili is a **Bantu** language, of the coast's own Sabaki group, enriched with Arabic loanwords the way English is enriched with French. Colonial-era writers routinely described the stone towns as Arab or Persian colonies, foreign implants on a passive shore: the coastal cousin of the Great Zimbabwe denial. Archaeology dismantled it. Excavations at sites like Shanga in the Lamu archipelago traced the stone towns down through their own foundations to African fishing and farming villages, with the first tiny timber mosques growing generation by generation into stone ones on the same spot (Horton & Middleton, 2000; Kusimba, 1999). The Swahili towns were African towns that traded with everyone, and their merchant families intermarried with the ocean world they did business in. Cosmopolitan is not the same thing as foreign.

**Kilwa Kisiwani** (an island off present-day Tanzania) was the jewel. It controlled the southern gold route from Sofala (the outlet for the plateau gold of Great Zimbabwe's world; the two lessons of this section are one economy), and its sultans struck their own **copper coinage** from around the eleventh to fourteenth centuries, coins found up and down the coast and, as Lesson 8 noted, at Great Zimbabwe itself. Its Great Mosque, with its domed and vaulted bays, and the vast fourteenth-century palace complex of **Husuni Kubwa**, with an octagonal bathing pool cut above the sea, still stand in ruin (UNESCO inscribed Kilwa Kisiwani and Songo Mnara in 1981). When **Ibn Battuta** visited in **1331**, he called Kilwa, in the standard English translation of his travels, "one of the most beautiful and well-constructed towns in the world" (Gibb translation; Ibn Battuta, 1331/1962). That sentence was written by the most traveled human being of his century, a man who had seen Cairo, Damascus, and Constantinople.

**The trade itself** ran on the monsoon: northeast winds carrying dhows out toward Arabia and India part of the year, southwest winds bringing them back the other part. Out of Africa: gold, ivory (elephant ivory was prized in India and China for carving), mangrove poles for treeless Gulf cities, ambergris, iron. In: Indian cloth, Chinese porcelain (which coastal elites set into the walls and tombs of their houses, where archaeologists still find it), glass beads. Chinese court records document the connection from the other end: early in the fifteenth century, the Ming admiral **Zheng He**'s fleets reached the coast at Malindi and Mogadishu, and a giraffe from Malindi, presented at the Ming court around 1414-15 (routed via Bengal, in the usual reconstruction), caused a sensation as the auspicious *qilin* (Dreyer, 2007; the episode is documented in Ming sources, with details varying by account).

**The turn.** In 1498 Vasco da Gama rounded the Cape and found this world already old; a Gujarati or Swahili pilot guided him on to India. The Portuguese returned with fleets: Kilwa was sacked in **1505**, forts were planted, and the coast's free trade was forced into a Portuguese protection racket. The stone towns survived, diminished; their history, like Great Zimbabwe's, was then rewritten by their conquerors as someone else's achievement, until the archaeologists arrived.

:::reveal Colonial-era writers called the Swahili stone towns 'Arab colonies.' What evidence overturned that, and what distinction does the course insist on instead? ||| Excavation (e.g., Shanga in the Lamu archipelago) traced the towns down through their own foundations to African fishing and farming villages, with timber mosques rebuilt generation by generation into stone on the same spots, and Swahili itself is a Bantu language of the coast's own Sabaki group with Arabic loanwords. The distinction: cosmopolitan is not foreign. These were African towns that traded and intermarried with the whole Indian Ocean world, which is a description of success, not of someone else's colony.

## Sources
- Horton, M., & Middleton, J. (2000). *The Swahili: The social landscape of a mercantile society*. Blackwell.
- Kusimba, C. M. (1999). *The rise and fall of Swahili states*. AltaMira Press.
- Ibn Battuta. (1962). *The travels of Ibn Battuta, A.D. 1325-1354* (Vol. 2, H. A. R. Gibb, Trans.). Hakluyt Society. (Original account of 1331 visit)
- Dreyer, E. L. (2007). *Zheng He: China and the oceans in the early Ming dynasty, 1405-1433*. Pearson Longman.
- UNESCO World Heritage Centre. (n.d.). *Ruins of Kilwa Kisiwani and ruins of Songo Mnara* [Inscription record, 1981]. https://whc.unesco.org/en/list/144/`,
      recallContent: [
        {
          prompt: "What did Ibn Battuta say about Kilwa in 1331, and why does the witness matter?",
          answer:
            "In the Gibb translation: 'one of the most beautiful and well-constructed towns in the world.' The witness was the most traveled person of his century, comparing Kilwa against Cairo, Damascus, and Constantinople firsthand.",
        },
        {
          prompt: "How do the Great Zimbabwe and Swahili coast lessons form one economy?",
          answer:
            "Plateau gold moved from Great Zimbabwe's world to the coast at Sofala, whose trade Kilwa controlled; Kilwa's own copper coins have been found at Great Zimbabwe, and Chinese and Persian goods moved inland the other way.",
        },
      ],
    },
    {
      slug: "africa-benin-bronzes",
      title: "10 · Benin: the bronzes, and the 1897 looting",
      section: "Section 4 · Stone towns and bronze courts",
      body: `First, fix the map, because the names collide. The **Kingdom of Benin** was and is the state of the **Edo** people, centered on Benin City in present-day southern **Nigeria**. It is unrelated to the modern Republic of Benin next door, which renamed itself (from Dahomey) in 1975 after the Bight of Benin. Every "Benin" in this lesson is the Edo kingdom.

**The court and the casting.** Benin's royal dynasty, which tradition ties to the older sacred city of **Ife**, has reigned since about the thirteenth century, and its current Oba sits in Benin City today. Ife deserves its own sentence: its copper-alloy and terracotta heads (commonly dated to about the twelfth through fifteenth centuries) are portraits of such naturalism that when the German ethnographer Leo Frobenius encountered one in 1910, he announced he had found art of the lost civilization of **Atlantis**, a perfect specimen of Lesson 2's erasure trap: faced with African mastery, invent a sunken continent rather than credit the Yoruba (Frobenius's claim and its debunking are standard in the Ife literature; see Blier, 2015). Benin's own court workshops, organized in a hereditary casters' guild that still exists, produced the objects the world now calls the **Benin Bronzes**: mostly leaded brass, cast by the lost-wax process, including over 900 relief plaques (sixteenth to seventeenth centuries) that once sheathed the pillars of the Oba's palace, recording court ritual, warriors, Portuguese traders, and royal history. A 2023 lead-isotope study traced much of the metal to brass manilla rings produced in the German Rhineland for the Atlantic trade: the kingdom melted Europe's trade currency and cast its own history in it (Skowronek et al., 2023).

**Contact, trade, and the honest ledger.** The Portuguese reached Benin in 1485, and the kingdom traded with Europeans for four centuries on its own terms: pepper, cloth, ivory, and enslaved captives. Honesty requires both halves of that sentence's ending. Benin restricted the export of male captives for a long stretch of the sixteenth century (a royal embargo documented in the Portuguese records; Ryder, 1969), and Benin also sold war captives into the Atlantic trade in later centuries. Section 5 takes this up in full; this course does not launder it.

**1897.** In January 1897 a British party under acting consul-general James Phillips, heading for Benin City against explicit warnings to wait (the court was in its annual Igue rites), was ambushed and most of the party killed. The response was ready within weeks: in February 1897 a British naval force of about 1,200 men took Benin City in a "punitive expedition," shelling and burning the town and palace. The Oba, **Ovonramwen**, was deported to Calabar, where he died in 1914. And the palace was stripped: **thousands of objects** were carried off (commonly estimated at 3,000 to 5,000; no complete inventory was ever made), including the roughly 900 plaques found stacked in a palace storehouse. The Admiralty auctioned much of the loot to defray the expedition's costs; within months Benin's royal history hung in European museums, where **the British Museum's holdings (over 900 objects, by its own account) remain the largest single collection** (British Museum, n.d.; Smarthistory, n.d.). European critics marveled at casting that stood comparison with the Renaissance, and some reached for Portuguese tutors or wandering Egyptians to explain it: the same year's newspapers carried both the loot and the disbelief.

**Where it stands now (dated, as this course's rules require).** Nigeria has sought returns for decades. As of this writing: Germany signed over ownership of its museums' Benin holdings in 2022 and physically returned the first group that December; the Smithsonian returned 29 objects in 2022; the Horniman Museum and several university museums followed; and in 2023 Nigeria's president declared the Oba of Benin the owner of returned works. The British Museum, whose trustees are barred from deaccessioning by the British Museum Act 1963, has returned none. The story is live; check the date on anything you read about it, including this.

:::reveal Explain the sentence: 'the kingdom melted Europe's trade currency and cast its own history in it.' What is the evidence, and why does it cut against BOTH of Lesson 2's traps? ||| A 2023 lead-isotope study (Skowronek et al.) traced much of the Benin brasses' metal to manilla rings made in the German Rhineland as Atlantic trade currency. Against erasure: the casting, iconography, and guild were Benin's own, so 'Portuguese tutors' explanations fail; the imported input was raw metal, obtained through trade the kingdom controlled. Against romance: that trade, plainly, included selling captives, so the same evidence that proves Edo mastery also documents the kingdom's participation in the Atlantic economy, both halves taught, neither erased.

## Sources
- Ryder, A. F. C. (1969). *Benin and the Europeans, 1485-1897*. Longmans.
- Skowronek, T. B., et al. (2023). German brass for Benin Bronzes: Geochemical analysis insights into the early Atlantic trade. *PLOS ONE, 18*(4), e0283415. https://doi.org/10.1371/journal.pone.0283415
- British Museum. (n.d.). *The Benin Bronzes* [Contested objects statement]. https://www.britishmuseum.org/about-us/british-museum-story/contested-objects-collection/benin-bronzes
- Smarthistory. (n.d.). *The Benin "Bronzes": A story of violence, theft, and artistry*. https://smarthistory.org/benin-bronzes-theft-artistry/
- Blier, S. P. (2015). *Art and risk in ancient Yoruba: Ife history, power, and identity, c. 1300*. Cambridge University Press.
- Hicks, D. (2020). *The brutish museums: The Benin Bronzes, colonial violence and cultural restitution*. Pluto Press.`,
      recallContent: [
        {
          prompt: "Which kingdom made the Benin Bronzes, what are they materially, and what did the 2023 isotope study show?",
          answer:
            "The Edo Kingdom of Benin (present-day southern Nigeria; not the modern Republic of Benin). Mostly leaded brass, lost-wax cast, including 900+ palace plaques of the 16th-17th centuries. Skowronek et al. (2023) traced much of the metal to Rhineland-made manilla trade rings.",
        },
        {
          prompt: "State the 1897 events and the course's hedged loot figures.",
          answer:
            "January 1897: the Phillips party, proceeding against warnings, was ambushed and killed. February 1897: a British punitive expedition (~1,200 men) took and burned Benin City; Oba Ovonramwen was exiled to Calabar. Thousands of objects were looted (commonly estimated 3,000-5,000; no complete inventory), including ~900 plaques from a storehouse; the British Museum holds the largest collection (900+ objects).",
        },
      ],
    },
    {
      slug: "africa-ethiopia-lalibela-adwa",
      title: "11 · Ethiopia: Lalibela to Adwa",
      section: "Section 4 · Stone towns and bronze courts",
      body: `Return to the highlands where Aksum stood. Ethiopia's medieval and modern record closes this section because it carries the argument into the colonial era itself, to the one battle that made European chancelleries treat an African state as a fact they could not unmake.

**Lalibela.** After Aksum's decline, the **Zagwe** dynasty ruled from the eleventh-to-thirteenth centuries, and its monument is one of the astonishments of world architecture: at the town now called Lalibela, eleven churches were not built but **excavated**, carved top-down out of the living red volcanic rock, complete with windows, vaults, and drainage, connected by trenches and tunnels. Biete Giyorgis, the church of St. George, is a Greek cross sunk whole into the hillside. Tradition attributes the ensemble to King **Lalibela** (reigned around the late twelfth to early thirteenth century) as a "New Jerusalem" after Saladin's capture of Jerusalem in 1187; scholars generally see construction phases spread over a longer span, so the course gives the attribution as tradition with an archaeological hedge (Phillipson, 2009). The churches were on UNESCO's very first World Heritage list in **1978**, and they are not ruins: the liturgy has continued in them for some eight centuries.

**The written tradition, honestly sorted.** The **Solomonic** dynasty that displaced the Zagwe in 1270 grounded its legitimacy in the *Kebra Nagast* (a fourteenth-century compilation), which tells how the Queen of Sheba bore Solomon a son, Menelik, who brought the **Ark of the Covenant** to Ethiopia, where the church of Our Lady Mary of Zion at Aksum holds it still, guarded by a single monk, seen by no one. This course states that exactly as what it is: a foundational **tradition** of the Ethiopian Orthodox Church, central to Ethiopian identity, and not a verified artifact; no scholar has examined the chapel's contents. In the same breath, the verifiable version of the deep written tradition: the **Garima Gospels**, illuminated Ge'ez manuscripts kept at the Abba Garima monastery, produced radiocarbon results (reported in the 2010s) placing them between roughly the fourth and seventh centuries, which would make them among the earliest illuminated Christian manuscripts surviving anywhere (Bausi, 2011; dates reported with laboratory ranges, and the course keeps the hedge).

**Adwa, 1 March 1896.** In the 1880s-90s "Scramble," European powers partitioned essentially the entire continent by treaty among themselves. Italy claimed a protectorate over Ethiopia on the strength of the 1889 **Treaty of Wuchale**, whose Article 17 said, in the Italian text, that Ethiopia's foreign relations ran through Italy, and, in the Amharic text, merely that Ethiopia *could* use Italy's good offices. Emperor **Menelik II** repudiated the Italian reading, and when Italy pressed the claim with an army, Menelik and Empress **Taytu** met it at **Adwa** with a force reported around 100,000, many equipped with modern rifles Menelik had spent years importing. On 1 March 1896 the Italian army was destroyed as a fighting force, with thousands dead and thousands captured (Jonas, 2011). In the Treaty of Addis Ababa that October, **Italy recognized Ethiopia's full independence**. European powers proceeded to open embassies in Addis Ababa. This is why the standard sentence runs that only Ethiopia and Liberia among African states were never colonized during the Scramble.

**And the honest asterisk on that sentence.** In 1935-36 Fascist Italy invaded again, with aircraft and, as documented at the time and since, poison gas; Addis Ababa fell in May 1936, and Italy occupied Ethiopia until 1941, committing massacres including the reprisal killings of February 1937. Haile Selassie's protest to the League of Nations (June 1936) became one of the century's famous speeches, and Ethiopian resistance never stopped; sovereignty was restored in 1941. Whether five years of brutal military occupation, never internationally consolidated and never accepted, counts as "colonization" is a definitional argument you should be able to see both sides of. The course's position is the precise one: **never colonized in the Scramble; invaded and occupied 1936-41; independent before, throughout as a matter of law and resistance, and after.** Say all of it, and the sentence survives scrutiny.

:::reveal The Treaty of Wuchale (1889) had two texts. Explain how a translation discrepancy helped cause the Battle of Adwa, and what that episode teaches about reading sources. ||| Article 17 in Italian made Ethiopia conduct foreign relations THROUGH Italy (a protectorate); the Amharic text said Ethiopia COULD use Italy's good offices (an option). Menelik II repudiated the Italian reading; Italy enforced it with an army and was destroyed at Adwa on 1 March 1896, after which the October treaty recognized full Ethiopian independence. The lesson for source work: always ask which language version you are reading and who benefits from each rendering; a single modal verb's difference was worth a war.

## Sources
- Jonas, R. (2011). *The Battle of Adwa: African victory in the age of empire*. Harvard University Press.
- Phillipson, D. W. (2009). *Ancient churches of Ethiopia: Fourth-fourteenth centuries*. Yale University Press.
- Bausi, A. (2011). The "true story" of the Abba Garima Gospels. *Comparative Oriental Manuscript Studies Newsletter, 1*, 17-20.
- Marcus, H. G. (1994). *A history of Ethiopia*. University of California Press.
- UNESCO World Heritage Centre. (n.d.). *Rock-hewn churches, Lalibela* [Inscription record, 1978]. https://whc.unesco.org/en/list/18/`,
      recallContent: [
        {
          prompt: "What happened at Adwa, and what made it diplomatically different from other African victories?",
          answer:
            "On 1 March 1896, Menelik II and Empress Taytu's army destroyed the invading Italian force. The Treaty of Addis Ababa (October 1896) made Italy recognize Ethiopia's full independence, and European powers opened embassies: a battlefield result converted into durable international standing.",
        },
        {
          prompt: "State the course's precise formulation of 'Ethiopia was never colonized.'",
          answer:
            "Never colonized in the Scramble (Adwa 1896 secured recognized independence); invaded and brutally occupied by Fascist Italy 1936-41 (poison gas, the 1937 massacres), with sovereignty restored in 1941. The precise sentence survives scrutiny; the slogan without the asterisk does not.",
        },
      ],
    },
    {
      slug: "africa-quiz-4",
      title: "Section 4 quiz · Stone towns and bronze courts",
      section: "Section 4 · Stone towns and bronze courts",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Who built Great Zimbabwe, and when?",
            options: [
              "Ancestors of the Shona, c. 1100-1450 CE",
              "Phoenician colonists, c. 900 BCE",
              "The Queen of Sheba's court, c. 950 BCE",
              "Portuguese traders, c. 1550 CE",
            ],
            correctIndex: 0,
            explanation:
              "Settled by Randall-MacIver (1905) and conclusively by Caton-Thompson (1929/1931), later confirmed by radiocarbon. The alternatives are the documented denial theories.",
            sourceLessonSlug: "africa-great-zimbabwe",
          },
          {
            prompt: "What did the Rhodesian government do about Great Zimbabwe from 1970?",
            options: [
              "Censored official publications from stating the African origin as fact, and forced out the Inspector of Monuments who insisted on it",
              "Funded the largest excavation in African history",
              "Returned the soapstone birds to the Shona",
              "Nothing; the site was ignored",
            ],
            correctIndex: 0,
            explanation:
              "Peter Garlake, Inspector of Monuments from 1964, left the country under pressure in 1970; guidebooks presented a settled question as a 'mystery.' Documented in Pikirayi (2012).",
            sourceLessonSlug: "africa-great-zimbabwe",
          },
          {
            prompt: "Which finds at Great Zimbabwe prove its place in world trade?",
            options: [
              "Chinese celadon, Persian glazed ware, glass beads, and a Kilwa coin",
              "Roman legionary equipment",
              "Viking silver",
              "Aztec obsidian",
            ],
            correctIndex: 0,
            explanation:
              "A landlocked plateau city holding coastal coinage and Chinese ceramics: the gold-for-goods economy that ran through Sofala and Kilwa.",
            sourceLessonSlug: "africa-great-zimbabwe",
          },
          {
            prompt: "What is the Swahili language, linguistically?",
            options: [
              "A Bantu language of the coast's own Sabaki group, with Arabic loanwords",
              "A dialect of Arabic",
              "A Persian creole",
              "A Portuguese trade pidgin",
            ],
            correctIndex: 0,
            explanation:
              "The linguistic fact underpins the archaeological one: the stone towns grew from African villages (e.g., the Shanga excavations), cosmopolitan but not foreign.",
            sourceLessonSlug: "africa-swahili-coast",
          },
          {
            prompt: "What did Ibn Battuta call Kilwa in 1331?",
            options: [
              "One of the most beautiful and well-constructed towns in the world",
              "A miserable village of fishermen",
              "The capital of Prester John",
              "A Portuguese fort",
            ],
            correctIndex: 0,
            explanation:
              "In the Gibb translation of his travels. The praise carries weight because he could compare Kilwa firsthand with Cairo, Damascus, and Constantinople.",
            sourceLessonSlug: "africa-swahili-coast",
          },
          {
            prompt: "What powered the sailing rhythm of Indian Ocean trade?",
            options: [
              "The seasonal monsoon winds, out one part of the year and back the other",
              "Steam power",
              "Constant westerlies",
              "River currents",
            ],
            correctIndex: 0,
            explanation:
              "Northeast and southwest monsoons made the ocean a predictable highway connecting the Swahili coast with Arabia, India, and beyond.",
            sourceLessonSlug: "africa-swahili-coast",
          },
          {
            prompt: "What happened to Kilwa in 1505?",
            options: [
              "A Portuguese fleet sacked it, part of forcing the coast's trade into Portuguese control",
              "Zheng He's fleet burned it",
              "An earthquake destroyed it",
              "It conquered Great Zimbabwe",
            ],
            correctIndex: 0,
            explanation:
              "After da Gama's 1498 arrival, Portuguese fleets returned to seize the trade by force; the stone towns survived, diminished.",
            sourceLessonSlug: "africa-swahili-coast",
          },
          {
            prompt: "The Kingdom of Benin (of the bronzes) is located in:",
            options: [
              "Present-day southern Nigeria (the Edo people; Benin City)",
              "The modern Republic of Benin",
              "Ghana",
              "Ethiopia",
            ],
            correctIndex: 0,
            explanation:
              "The neighboring republic renamed itself (from Dahomey) in 1975 after the Bight of Benin; the kingdom of the Obas is Edo, in Nigeria, and its dynasty continues today.",
            sourceLessonSlug: "africa-benin-bronzes",
          },
          {
            prompt: "What did Leo Frobenius claim in 1910 when he encountered the naturalistic heads of Ife?",
            options: [
              "That he had found art of the lost civilization of Atlantis",
              "That the Yoruba were master portraitists",
              "That the heads were modern forgeries",
              "That the heads were Roman imports",
            ],
            correctIndex: 0,
            explanation:
              "A textbook case of the erasure trap: faced with African mastery, invent a sunken continent rather than credit the Yoruba artists who made them.",
            sourceLessonSlug: "africa-benin-bronzes",
          },
          {
            prompt: "What are the Benin 'Bronzes,' materially and technically?",
            options: [
              "Mostly leaded brass, cast by the lost-wax process, much of the metal traced to European manilla trade rings (2023 isotope study)",
              "Solid gold castings",
              "Carved and painted wood",
              "Bronze imported ready-made from Portugal",
            ],
            correctIndex: 0,
            explanation:
              "Skowronek et al. (2023) traced much of the metal to Rhineland-made manillas: Benin melted Europe's trade currency and cast its own court history in it.",
            sourceLessonSlug: "africa-benin-bronzes",
          },
          {
            prompt: "How does the course state the size of the 1897 Benin loot?",
            options: [
              "Thousands of objects, commonly estimated 3,000-5,000, with no complete inventory ever made",
              "Exactly 5,000 objects, per the official inventory",
              "A few dozen items",
              "The number is known precisely from Admiralty records: 3,127",
            ],
            correctIndex: 0,
            explanation:
              "The honest form is a range plus the reason for the range. The documented specifics: ~900 plaques found in a palace storehouse; the British Museum's own account puts its holdings above 900 objects.",
            sourceLessonSlug: "africa-benin-bronzes",
          },
          {
            prompt: "Why has the British Museum returned none of its Benin holdings, on its own stated account?",
            options: [
              "Its trustees are barred from deaccessioning by the British Museum Act 1963",
              "Nigeria has never asked",
              "The objects were proven not to come from Benin",
              "It returned everything in 2022",
            ],
            correctIndex: 0,
            explanation:
              "The statutory bar is the museum's stated position; meanwhile Germany transferred ownership of its holdings (2022) and the Smithsonian returned 29 objects (2022). The story is live and dated.",
            sourceLessonSlug: "africa-benin-bronzes",
          },
          {
            prompt: "What are the Lalibela churches?",
            options: [
              "Eleven churches carved top-down out of living volcanic rock (c. 12th-13th century tradition, with construction phases debated), still in liturgical use",
              "Ruined stone towers built by the Portuguese",
              "Cave churches painted but not carved",
              "Nineteenth-century reconstructions",
            ],
            correctIndex: 0,
            explanation:
              "Excavated, not built; on UNESCO's first World Heritage list (1978). Tradition credits King Lalibela's 'New Jerusalem'; archaeology sees longer phasing, and the course keeps both labels straight.",
            sourceLessonSlug: "africa-ethiopia-lalibela-adwa",
          },
          {
            prompt: "How does this course present the Ark of the Covenant at Aksum?",
            options: [
              "As a foundational church tradition, central to Ethiopian identity, and not a verified artifact",
              "As archaeologically confirmed",
              "As a proven medieval forgery",
              "It does not mention it",
            ],
            correctIndex: 0,
            explanation:
              "No scholar has examined the chapel's contents. The verifiable deep written tradition is carried instead by the radiocarbon-dated Garima Gospels (roughly 4th-7th century ranges).",
            sourceLessonSlug: "africa-ethiopia-lalibela-adwa",
          },
          {
            prompt: "What caused the Wuchale Treaty crisis that led to Adwa?",
            options: [
              "Article 17 differed between texts: the Italian version imposed a protectorate, the Amharic version offered an option",
              "A dispute over gold mines",
              "Ethiopia's refusal to pay an indemnity",
              "A succession dispute in Italy",
            ],
            correctIndex: 0,
            explanation:
              "Menelik II repudiated the Italian reading; Italy pressed it with an army and lost decisively on 1 March 1896, then recognized Ethiopia's full independence that October.",
            sourceLessonSlug: "africa-ethiopia-lalibela-adwa",
          },
          {
            prompt: "What is the course's precise formulation about Ethiopia and colonization?",
            options: [
              "Never colonized in the Scramble; invaded and occupied by Italy 1936-41; sovereignty restored in 1941",
              "Never touched by any European army",
              "Colonized by Italy from 1889 to 1941",
              "Colonized briefly by Britain in 1868",
            ],
            correctIndex: 0,
            explanation:
              "The slogan needs the asterisk to survive scrutiny: Adwa (1896) secured recognized independence; the brutal 1936-41 occupation is stated plainly, and so is the restoration.",
            sourceLessonSlug: "africa-ethiopia-lalibela-adwa",
          },
        ],
      },
    },

    // ────────────── SECTION 5 · THE HONEST RECORD ──────────────
    {
      slug: "africa-slavery-within",
      title: "12 · Slavery within Africa, and across the Sahara",
      section: "Section 5 · The honest record",
      body: `Why does a course built to refute anti-African myth spend a whole section on African slavery? Because the course's method is one standard, applied everywhere: cited evidence, including where it is uncomfortable. A version of this history with the slaving removed would be the romance trap of Lesson 2, it would collapse at first contact with the sources (which discuss slavery constantly), and it would hand deniers the easiest possible rebuttal. So: plainly, and with names, places, and periods, as always.

**Slavery existed within many African societies, long before and entirely apart from Europeans.** The forms varied enormously, which is why the anti-flattening rule matters here more than anywhere. In much of West and Central Africa, where land was abundant and labor scarce, wealth and power were measured in people ("wealth in people," in the historians' shorthand), and enslaved people were acquired as war captives, through judicial condemnation, kidnapping, or debt (Thornton, 1998; Lovejoy, 2012). Some forms were absorptive: household and lineage slavery in which the enslaved or their children could marry in and their descendants merge into the community. Some were nothing of the kind: state and plantation slavery could be, and in places was, brutal and hereditary; the nineteenth-century Sokoto Caliphate (in present-day northern Nigeria) ran large slave-worked estates, and royal slaves staffed armies and administrations in several states precisely because they were property without rival lineages (Lovejoy, 2012). The honest summary is that "African slavery" was not one thing, that some of its forms differed deeply from New World chattel slavery, and that the difference is not a comfort to be leaned on: enslaved is enslaved, and the sources record flight, resistance, and grief here as everywhere humans were owned.

**The trans-Saharan, Red Sea, and Indian Ocean trades** carried enslaved Africans northward and eastward for roughly twelve centuries, from at least the eighth century into the late nineteenth (in places the twentieth). The caravans of Lesson 5 that brought salt south took people north, alongside the gold: to North Africa, Egypt, Arabia, the Gulf, and beyond, where demand ran to domestic service, concubinage, soldiers, and eunuchs. How many? Here the course is strict about what numbers are. The surviving evidence (scattered customs figures, travelers' counts, market records) is thin, so all totals are modern reconstructions: the most-cited attempt, Austen's "tentative census" (1979, his own word), put the trans-Saharan trade in the several millions across the whole period, and estimates for all the eastern routes combined commonly run higher. Treat every such figure as an order-of-magnitude reconstruction with wide error bars, not a count (Austen, 1979; Wright, 2007). What the sources support qualitatively without dispute: the trade was large, sustained for centuries, deadly in the crossing, and normal to the societies at both ends of the routes.

**Hold the structural point for Lesson 13.** Enslavement of outsiders was an old, established institution across much of the continent (as it was, in the same centuries, across much of Europe and Asia). When Atlantic buyers arrived in the fifteenth and sixteenth centuries, they did not introduce slavery to African societies; they plugged an existing supply system into a new, insatiable, and different kind of demand, and the scale and character of what followed is the next lesson. Both halves of that sentence are load-bearing, and the course will not let either one carry the whole weight.

One more honesty checkpoint, because a course that only criticizes the long-dead is dodging: slavery within Africa outlasted the Atlantic trade's abolition, and the European colonial powers that advertised abolition as a justification for conquest then tolerated internal slavery in their territories for decades where suppressing it was inconvenient (Lovejoy, 2012). The record embarrasses everyone. That is a mark of its being the record.

:::reveal Why does this course insist on teaching African slavery and the Saharan trades in a course refuting 'Africa has no history'? ||| One standard, applied everywhere, is the course's whole claim to credibility: the sources discuss slavery constantly, so a sanitized version would be the romance trap, would collapse against the evidence, and would hand deniers the easiest rebuttal. The record is taught with the same discipline as the rest: named societies and periods (e.g., Sokoto's estates, the twelve-century Saharan routes), forms distinguished rather than flattened, and all aggregate numbers labeled as reconstructions with wide error bars.

## Sources
- Lovejoy, P. E. (2012). *Transformations in slavery: A history of slavery in Africa* (3rd ed.). Cambridge University Press.
- Thornton, J. K. (1998). *Africa and Africans in the making of the Atlantic world, 1400-1800* (2nd ed.). Cambridge University Press.
- Austen, R. A. (1979). The trans-Saharan slave trade: A tentative census. In H. A. Gemery & J. S. Hogendorn (Eds.), *The uncommon market: Essays in the economic history of the Atlantic slave trade* (pp. 23-76). Academic Press.
- Wright, J. (2007). *The trans-Saharan slave trade*. Routledge.`,
      recallContent: [
        {
          prompt: "Give two documented, NAMED examples showing that 'African slavery' was not one thing.",
          answer:
            "Absorptive household/lineage slavery in parts of West and Central Africa, where descendants could merge into the community ('wealth in people'), versus the nineteenth-century Sokoto Caliphate's large slave-worked estates and hereditary state slavery. Same continent, radically different institutions; neither to be romanticized.",
        },
        {
          prompt: "How does the course present numbers for the trans-Saharan trade?",
          answer:
            "As modern reconstructions from thin evidence, not counts: Austen's 1979 'tentative census' (his own word) put it in the several millions over roughly twelve centuries, and all such figures carry wide error bars. Qualitatively undisputed: large, sustained, deadly in the crossing.",
        },
      ],
    },
    {
      slug: "africa-atlantic-trade",
      title: "13 · The Atlantic trade: scale, participation, and the bad-faith gotcha",
      section: "Section 5 · The honest record",
      body: `Now the hardest lesson in the course, taught with its best-documented database.

**The scale.** The Trans-Atlantic Slave Trade Database (SlaveVoyages), the standard scholarly reconstruction built from surviving voyage records, documents that from 1501 to 1866 about **12.5 million** enslaved Africans were embarked on Atlantic slave ships, of whom about **10.7 million** survived to be landed in the Americas; the difference, nearly two million people, died at sea (SlaveVoyages, n.d.). Unlike the Saharan figures of Lesson 12, these rest on tens of thousands of individual voyage records; they are estimates, but tight ones.

**The participation, stated plainly.** For most of those four centuries, Europeans did not march inland and seize captives themselves. They could not: disease (malaria and yellow fever killed Europeans inland at catastrophic rates) and African military strength confined them mostly to ships and coastal forts held on African sufferance, often paying rent and customs to African rulers (Thornton, 1998). The captives were overwhelmingly supplied by African states and merchants: prisoners from wars between African polities, victims of raids, people condemned or sold under judicial and debt mechanisms. Name the participants, as the rule requires, each in its period: the kingdom of **Kongo** was entangled in the trade from the early sixteenth century; **Dahomey** (in present-day Benin Republic) and **Asante** (in present-day Ghana) rose in the seventeenth-eighteenth centuries as major suppliers whose royal revenues ran substantially on captives; **Oyo** (in present-day Nigeria) channeled captives to the coast in the eighteenth. Rulers and merchant classes in these states profited enormously; the people caught in the system did not. Whether European demand *created* the wars that fed it, or paid a bounty on wars that would have happened anyway, is a real scholarly debate (the "gun-slave cycle"); that African elites were active, negotiating, price-setting participants is not (Thornton, 1998; Lovejoy, 2012; Green, 2019).

**Now the gotcha, because you will meet it.** "Africans sold their own people, so European guilt is misplaced." Notice what the sentence smuggles in: the word "own." No one in the sixteenth century was "African" to themselves; the identity is a later construction (largely built, in fact, in the diaspora the trade created). An Asante army selling captives from a defeated neighboring state was not selling "its own people" by any definition it recognized, any more than fifteenth-century Venetians and Genoese selling Slavic and Circassian captives into Mediterranean slavery (a documented trade twice as old as the Atlantic one) were betraying "their own." The gotcha applies a pan-African identity backward to Africans while never applying pan-European identity backward to Europeans: that asymmetry is the tell that it is rhetoric, not history (Northrup, 2002; Thornton, 1998). The honest statement needs no gotcha and no absolution in either direction: African elites sold captives; European and American buyers built the racialized, hereditary, industrial-scale plantation system those captives were sold into; both facts are documented; neither cancels the other.

**And the dissent, because it is also documented.** In 1526, **Afonso I**, the Christian king of Kongo, wrote to King João III of Portugal protesting that Portuguese merchants and their local agents were kidnapping and buying away his freeborn subjects, "even nobles and members of our own family," depopulating his country; he demanded controls and set up inspection commissions to examine whether the enslaved had been taken lawfully (the letters survive in the Portuguese archives; Thornton, 1998; Green, 2019). Read carefully, Afonso was objecting to *unlawful* enslavement of his subjects rather than to slavery as such, and the course will not dress him as a modern abolitionist; but his letters prove that the trade's African critics are as old as the trade, and that its costs were visible from inside in real time. Benin's sixteenth-century embargo on exporting male captives (Lesson 10) belongs in the same file.

**Consequences,** flagged at the course's honesty standard: the long-run damage of the trades to African societies (demographic loss, militarization, corrosion of institutions) is the subject of a large and genuinely contested literature, from demographic modeling to econometrics linking historical slave exports to lasting harms; the direction of the findings is broadly negative, the magnitudes are debated, and this course reports that state of play rather than picking a number (Lovejoy, 2012; Nunn, 2008).

:::reveal What is wrong, as history, with the sentence 'Africans sold their own people'? ||| The word 'own' smuggles in a pan-African identity that did not exist for anyone in the era: an Asante army selling captives from a defeated neighboring polity was not selling 'its own' by any definition it recognized, exactly as Venetians selling Circassian captives were not selling 'their own Europeans.' The gotcha applies a collective identity backward to one continent only, which marks it as rhetoric. The honest, documented statement needs no gotcha: African elites sold captives from rival polities; European and American buyers built the racialized hereditary plantation system they were sold into; both are true, and neither cancels the other.

## Sources
- SlaveVoyages. (n.d.). *Trans-Atlantic slave trade: Estimates*. https://www.slavevoyages.org/assessment/estimates
- Thornton, J. K. (1998). *Africa and Africans in the making of the Atlantic world, 1400-1800* (2nd ed.). Cambridge University Press.
- Northrup, D. (2002). *Africa's discovery of Europe, 1450-1850*. Oxford University Press.
- Lovejoy, P. E. (2012). *Transformations in slavery: A history of slavery in Africa* (3rd ed.). Cambridge University Press.
- Green, T. (2019). *A fistful of shells: West Africa from the rise of the slave trade to the age of revolution*. University of Chicago Press.
- Nunn, N. (2008). The long-term effects of Africa's slave trades. *Quarterly Journal of Economics, 123*(1), 139-176.`,
      recallContent: [
        {
          prompt: "The SlaveVoyages headline figures, and why they are firmer than the Saharan ones.",
          answer:
            "About 12.5 million embarked and about 10.7 million landed alive, 1501-1866 (nearly two million died at sea). They rest on tens of thousands of surviving individual voyage records, unlike the thin evidence behind Saharan reconstructions.",
        },
        {
          prompt: "What do Afonso I's 1526 letters document, and what does the course refuse to make of them?",
          answer:
            "The king of Kongo protesting to João III of Portugal that merchants were kidnapping and buying away his freeborn subjects, depopulating the country, and demanding controls: contemporary African criticism of the trade, from inside, in writing. The course refuses to dress him as a modern abolitionist; he objected to unlawful enslavement of his subjects, not to slavery as such.",
        },
      ],
    },
    {
      slug: "africa-quiz-5",
      title: "Section 5 quiz · The honest record",
      section: "Section 5 · The honest record",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Why does this course teach African slavery at full depth rather than minimizing it?",
            options: [
              "One evidentiary standard applied everywhere is the course's claim to credibility; a sanitized version is the romance trap and collapses against the sources",
              "To argue colonization was deserved",
              "Because European slavery was worse and needs contrast",
              "United Nations rules require it",
            ],
            correctIndex: 0,
            explanation:
              "The sources discuss slavery constantly. Omitting it would hand deniers the easiest rebuttal and would erase real people just as the erasure trap does.",
            sourceLessonSlug: "africa-slavery-within",
          },
          {
            prompt: "What does 'wealth in people' describe?",
            options: [
              "Societies where land was abundant and labor scarce, so power was measured in people, including enslaved dependents",
              "A tax system based on head-counts",
              "A modern development metric",
              "The idea that slaves were always treated as kin",
            ],
            correctIndex: 0,
            explanation:
              "The historians' shorthand for a structural condition of much of West and Central Africa, which shaped why captives were a core form of wealth (Thornton, Lovejoy).",
            sourceLessonSlug: "africa-slavery-within",
          },
          {
            prompt: "Which named example does the course give of harsh, large-scale slavery WITHIN Africa?",
            options: [
              "The nineteenth-century Sokoto Caliphate's slave-worked estates",
              "The kingdom of Aksum's coin mints",
              "Great Zimbabwe's cattle herds",
              "The Kilwa fish markets",
            ],
            correctIndex: 0,
            explanation:
              "Naming region, people, and period cuts both ways: absorptive lineage slavery existed, and so did brutal hereditary plantation and state slavery, e.g., Sokoto (present-day northern Nigeria).",
            sourceLessonSlug: "africa-slavery-within",
          },
          {
            prompt: "How should Austen's figure for the trans-Saharan slave trade be treated?",
            options: [
              "As a 'tentative census' (his own word): an order-of-magnitude reconstruction from thin evidence, in the several millions over roughly twelve centuries",
              "As an exact count from customs archives",
              "As propaganda with no evidentiary basis",
              "As covering only the twentieth century",
            ],
            correctIndex: 0,
            explanation:
              "Scattered customs figures and travelers' counts cannot support precision; the course reports the reconstruction with its error bars showing.",
            sourceLessonSlug: "africa-slavery-within",
          },
          {
            prompt: "What was demand in the Saharan and eastern trades primarily for, per the sources?",
            options: [
              "Domestic service, concubinage, soldiers, and eunuchs",
              "Plantation field labor exclusively",
              "Mine labor exclusively",
              "Galley rowers exclusively",
            ],
            correctIndex: 0,
            explanation:
              "A different demand profile from the Atlantic plantation system, which is part of why the two systems are taught as distinct (and both plainly).",
            sourceLessonSlug: "africa-slavery-within",
          },
          {
            prompt: "What are the SlaveVoyages headline estimates for the Atlantic trade, 1501-1866?",
            options: [
              "About 12.5 million embarked; about 10.7 million landed alive",
              "About 1 million embarked",
              "About 100 million embarked",
              "The database refuses to estimate",
            ],
            correctIndex: 0,
            explanation:
              "Built from tens of thousands of voyage records; the gap of nearly two million is death at sea. Firm estimates, unlike the Saharan reconstructions.",
            sourceLessonSlug: "africa-atlantic-trade",
          },
          {
            prompt: "Why did Europeans rarely capture slaves inland themselves for most of the trade's four centuries?",
            options: [
              "Disease killed Europeans inland at catastrophic rates, and African military strength confined them to ships and coastal forts, often rented from African rulers",
              "European law forbade it",
              "They had no interest in the interior",
              "African coasts had no harbors",
            ],
            correctIndex: 0,
            explanation:
              "Thornton's structural point: the coastal forts stood on African sufferance, paying rent and customs. Supply ran through African states and merchants.",
            sourceLessonSlug: "africa-atlantic-trade",
          },
          {
            prompt: "Which of these is a correctly NAMED participation example, per the course?",
            options: [
              "Dahomey and Asante rose in the seventeenth-eighteenth centuries as major suppliers whose royal revenues ran substantially on captives",
              "Great Zimbabwe supplied captives to Portugal in the twelfth century",
              "Aksum sold captives to Rome in 1897",
              "The Almoravids ran the Middle Passage",
            ],
            correctIndex: 0,
            explanation:
              "Named states, named periods: Kongo (from the early 1500s), Dahomey and Asante (17th-18th c.), Oyo (18th c.). Flattened versions in either direction fail the course's rule.",
            sourceLessonSlug: "africa-atlantic-trade",
          },
          {
            prompt: "What is the 'tell' that 'Africans sold their own people' is rhetoric rather than history?",
            options: [
              "It applies a pan-African identity backward to Africans while never applying pan-European identity backward to Europeans selling Slavic and Circassian captives",
              "It uses a passive verb",
              "It cites no date",
              "Nothing; the course endorses the sentence",
            ],
            correctIndex: 0,
            explanation:
              "The asymmetric use of 'own' is the giveaway. The honest statement carries both documented halves without the gotcha: African elites sold captives from rival polities; Euro-American buyers built the racialized plantation system.",
            sourceLessonSlug: "africa-atlantic-trade",
          },
          {
            prompt: "What do Afonso I of Kongo's 1526 letters show?",
            options: [
              "Documented African criticism of the trade from inside and in real time: protests that merchants were taking his freeborn subjects, with demands for controls",
              "That Kongo never touched the slave trade",
              "The first abolitionist manifesto in the modern sense",
              "That Portugal ended the trade in 1526",
            ],
            correctIndex: 0,
            explanation:
              "The course keeps the hedge: Afonso objected to unlawful enslavement of his subjects rather than slavery as such, so he is evidence of contemporary dissent, not a modern abolitionist.",
            sourceLessonSlug: "africa-atlantic-trade",
          },
          {
            prompt: "What is the 'gun-slave cycle' debate about?",
            options: [
              "Whether European demand created the wars that produced captives or paid a bounty on wars that would have happened anyway",
              "Whether guns were traded at all",
              "Whether Africans manufactured firearms before 1500",
              "Naval gunnery tactics",
            ],
            correctIndex: 0,
            explanation:
              "A real scholarly debate the course reports as open. What is not debated: African elites were active, negotiating, price-setting participants in supply.",
            sourceLessonSlug: "africa-atlantic-trade",
          },
          {
            prompt: "How does the course handle the long-run consequences of the trades for African societies?",
            options: [
              "Direction broadly negative, magnitudes genuinely contested (demography, militarization, econometrics like Nunn 2008), reported as a live debate rather than a picked number",
              "As fully settled: exactly 30% population loss",
              "As having no measurable effects",
              "It skips the question",
            ],
            correctIndex: 0,
            explanation:
              "The honesty standard applies to harms as well as glories: report the state of scholarship, hedge the magnitudes, cite the debate.",
            sourceLessonSlug: "africa-atlantic-trade",
          },
          {
            prompt: "Which statement about the timing of slavery in Africa is correct?",
            options: [
              "Enslavement of outsiders predates Atlantic demand by centuries, and internal slavery outlasted Atlantic abolition, tolerated for decades by colonial powers",
              "Slavery in Africa began with the Portuguese in 1444",
              "Slavery in Africa ended everywhere in 1807",
              "The Sahara trades began after the Atlantic trades ended",
            ],
            correctIndex: 0,
            explanation:
              "The record embarrasses everyone, including the colonial powers who advertised abolition as justification for conquest and then tolerated internal slavery where convenient.",
            sourceLessonSlug: "africa-slavery-within",
          },
          {
            prompt: "Roughly how many people died at sea in the Middle Passage, per SlaveVoyages?",
            options: [
              "Nearly two million (the gap between ~12.5M embarked and ~10.7M landed)",
              "About ten thousand",
              "About seven million",
              "The database shows no deaths",
            ],
            correctIndex: 0,
            explanation:
              "The embarked-versus-landed gap is itself a documented atrocity statistic, resting on voyage-level records.",
            sourceLessonSlug: "africa-atlantic-trade",
          },
          {
            prompt: "What does the course say the Atlantic buyers did to the existing supply system?",
            options: [
              "Plugged it into a new, insatiable, and different kind of demand: racialized, hereditary, industrial-scale plantation chattel slavery",
              "Left it entirely unchanged",
              "Abolished it immediately",
              "Replaced it with wage labor",
            ],
            correctIndex: 0,
            explanation:
              "Both halves are load-bearing: Europeans did not introduce slavery to African societies, and what they built with the captives was a different and vaster system. Neither half carries the sentence alone.",
            sourceLessonSlug: "africa-atlantic-trade",
          },
        ],
      },
    },

    // ────────────── SECTION 6 · HOW WE KNOW ──────────────
    {
      slug: "africa-written-record",
      title: "14 · Reading the written record",
      section: "Section 6 · How we know",
      body: `Everything you have learned so far rests on evidence, and the last full section of this course opens the toolbox, because the skill transfers: once you can ask "how do we know this?" about Mali, you can ask it about anything. Start with writing.

**The outsider accounts.** For West Africa before 1500, the richest written sources are in Arabic, produced by the Muslim world the trade routes connected. Learn the main names as a chain, each with its method:

- **Al-Fazari** (late eighth century): the earliest surviving Arabic mention of Ghana, "the land of gold." Catch: his original work is lost, and we have the line only because later writers quoted it. Much of the early record is like this, texts surviving inside other texts, like fossils in rock.
- **Al-Masudi** (tenth century) actually sailed to East Africa and wrote about the land of Zanj from experience.
- **Al-Bakri** (1068): the great account of Ghana from Lesson 5, compiled in al-Andalus by a scholar who never crossed the Sahara, from merchants' and travelers' reports. Secondhand, but administrative in its detail, and checkable against archaeology.
- **Al-Idrisi** (1154) wrote his geography at the Norman court of Roger II of Sicily: Muslim scholarship, Christian patron, African subject matter, one book. The medieval Mediterranean was like that.
- **Al-Umari** (1330s, Mamluk Cairo/Damascus): the interview-based account of Mali behind Lesson 6.
- **Ibn Battuta** (East African coast 1331; Mali 1352-53): the only one of these who walked the ground at both ends, and the most detailed surviving eyewitness. Even here, source criticism applies: he dictated his travels years later to the literary editor Ibn Juzayy, and scholars have long debated whether every leg of the itinerary is firsthand. Eyewitness is a claim to be tested, not a magic word.
- **Ibn Khaldun** (late fourteenth century): the historian's historian, whose king lists and synchronisms for Mali let us hang approximate dates on the oral record.

**Read them in scholarly translation.** This course cites these authors through **Levtzion and Hopkins' Corpus of Early Arabic Sources for West African History** (1981/2000), and that is a method point, not a bibliographic nicety. Translation is interpretation: word choices ("king" or "chief"? "town" or "encampment"?) tilt everything downstream, and older translations made in the colonial era sometimes tilted hard. Citing a critical edition tells the reader which choices you inherited.

**The insider record.** The claim "Africa produced no documents" was false on its face, and you have already met the proof: the **Ge'ez** manuscript tradition running from Aksum's fourth-century inscriptions through the radiocarbon-dated Garima Gospels to the present; **Meroitic**, an African script awaiting its decipherer; the **Timbuktu manuscripts** and the *Tarikh al-Sudan*, an African-written history of an African empire; **ajami** traditions writing African languages (Hausa, Fulfulde, Swahili, Wolof, and more) in Arabic script; the **Kilwa Chronicle** (sixteenth century), which survives both in an Arabic version and in the Portuguese historian João de Barros's rendering, so historians can watch two transmissions of one tradition diverge. And the caution runs both ways: the *Tarikh al-fattash* interpolations of Lesson 7 show that insider documents get source-criticized too.

**Where writing is absent, history is not.** Benin kept no indigenous script, and its royal history is among the best-attested in the region: cast in brass plaques (a court record in metal, keyed to reign and ritual), carried by the court's professional remembrancers, and cross-checkable against four centuries of European trade records. Absence of writing is a fact about the medium, not about the past. Trevor-Roper's premise failed twice over: the documents existed, and documents were never the only admissible evidence, which is the next lesson.

:::reveal Al-Bakri (never left al-Andalus) and Ibn Battuta (walked the ground) both describe West African states. Why does the course teach BOTH 'secondhand' and 'eyewitness' as labels to be tested rather than verdicts? ||| Because each label is the start of source criticism, not the end. Al-Bakri's compilation is secondhand but administratively specific (customs schedules, court protocol) and checkable against archaeology; a careful compiler of merchants' reports can beat a careless tourist. Ibn Battuta is an eyewitness, but he dictated the rihla years later to Ibn Juzayy and scholars debate whether every leg is firsthand, so even 'eyewitness' is a claim requiring testing. Method beats labels: ask what the source could know, how it reached you, and what checks against it.

## Sources
- Levtzion, N., & Hopkins, J. F. P. (Eds.). (2000). *Corpus of early Arabic sources for West African history*. Markus Wiener. (Original work published 1981)
- Hunwick, J. O. (1999). *Timbuktu and the Songhay Empire: Al-Sa'di's Ta'rikh al-Sudan down to 1613*. Brill.
- Dunn, R. E. (2012). *The adventures of Ibn Battuta: A Muslim traveler of the 14th century* (3rd ed.). University of California Press.
- Nobili, M., & Mathee, M. S. (2015). Towards a new study of the so-called Tarikh al-fattash. *History in Africa, 42*, 37-73.
- UNESCO. (1981-1993). *General history of Africa* (Vol. I: Methodology and African prehistory, J. Ki-Zerbo, Ed.). UNESCO Publishing / Heinemann.`,
      recallContent: [
        {
          prompt: "Name four Arabic-language sources for West Africa, each with its method and its catch.",
          answer:
            "Al-Fazari (8th c.): earliest mention of Ghana, but survives only as quotations in later writers. Al-Bakri (1068): administratively detailed but compiled secondhand in al-Andalus. Al-Umari (1330s): interviews in Cairo a dozen years after Musa's hajj. Ibn Battuta (1331/1352-53): eyewitness, but dictated years later to Ibn Juzayy, with debated legs.",
        },
        {
          prompt: "Give three examples of the INSIDER African written record.",
          answer:
            "The Ge'ez tradition (Aksumite inscriptions to the radiocarbon-dated Garima Gospels), the Timbuktu manuscripts and Tarikh al-Sudan, ajami writing of African languages in Arabic script, plus the Kilwa Chronicle (and Meroitic, still unread).",
        },
      ],
    },
    {
      slug: "africa-ground-truth",
      title: "15 · Digging, listening, comparing: the other toolkits",
      section: "Section 6 · How we know",
      body: `Documents are one leg of the stool. African history was rebuilt in the twentieth century on three more, and each carries its own rules of evidence.

**Archaeology, with radiocarbon as the game-changer.** Radiocarbon dating (developed by Willard Libby's group from 1949) did something quietly revolutionary for this field: it let sites be dated **without any documents at all**, which dissolved Trevor-Roper's premise wholesale. Three excavations you have already met or should meet:

- **Jenne-jeno** (Mali): the McIntosh excavations from 1977 dated urban growth on the Niger to centuries before trans-Saharan Islamic trade (Lesson 7). Cities without outside tutors.
- **Igbo-Ukwu** (in present-day southeastern Nigeria): Thurstan Shaw's excavations (1959, 1964) uncovered a burial and regalia in leaded bronze of dazzling technical sophistication, and the radiocarbon dates said **ninth-tenth century CE**, far earlier than anyone had guessed for such casting in the region, with glass beads showing long-distance trade connections. The dates were so surprising that scholars spent years testing them; they held (Shaw, 1970).
- **Great Zimbabwe**: stratigraphy plus radiocarbon confirmed what Caton-Thompson concluded from artifacts alone: African, medieval (Lesson 8).

**Oral tradition, treated as evidence with rules.** Much of African history was carried by professional rememberers: the **jeliw (griots)** of the Mande world, dynastic reciters elsewhere, whose training was long, formal, and consequential. The Belgian historian **Jan Vansina**, in *Oral Tradition as History* (1985), built the working method: an oral tradition is a chain of transmission, and the historian's job is to study the chain, not just the tale. Its strengths are real: king lists, institutional origins, place names, migration accounts (the Epic of Sundiata, recorded in versions such as Niane's from the jeli Mamadou Kouyaté, preserves the founding tradition of Mali that Ibn Khaldun's lists then anchor in time). Its limits are equally real, and Vansina names them: **telescoping** (chronology compresses; middle generations drop out), **feedback** (written accounts leak back into oral ones and masquerade as independent), and **present function** (traditions are performed for living patrons, and content bends toward what the present needs; a praise-singer's king list is not a neutral database). The method is the same as for any source: ask what it could know, how it was transmitted, and what independent evidence checks it.

**Historical linguistics.** Languages are archives. By comparing related languages and reconstructing their family trees, historians like **Christopher Ehret** read migrations and technologies out of vocabulary: the **Bantu expansion**, one of the great demographic events of world history, in which Bantu-speaking farming communities spread over roughly three millennia from the Nigeria-Cameroon borderlands across most of central, eastern, and southern Africa, is reconstructed primarily from the language map and its loanwords (which words for crops, iron, and cattle were carried, which were borrowed en route), cross-checked against archaeology (Ehret, 2016). No document records the Bantu expansion. We know it anyway.

**The rule that makes the stool stand: convergence.** Any single method can mislead: a chronicle can lie, a tradition can telescope, a date can be contaminated, a translation can tilt. Confidence comes when **independent** lines agree. Great Zimbabwe is the model case: stratigraphy, radiocarbon, imported datable ceramics, Shona oral tradition, and sixteenth-century Portuguese trade reports all point to the same African, medieval answer. When you meet a claim about any past, on any continent, the audit is now yours: *which people, which place, which century, which sources, and do independent lines converge?*

:::reveal Vansina says to study the chain of transmission, not just the tale. Apply that to the Epic of Sundiata: what makes it usable evidence, and for what exactly? ||| The epic is carried by trained professional jeliw whose versions (e.g., Mamadou Kouyate's, recorded by Niane) can be compared, and its core (a founder named Sundiata, a victory over the Soso, the founding of Mali) is anchored externally by Ibn Khaldun's fourteenth-century king lists. So it is good evidence for the founding TRADITION and institutional memory of Mali, usable for dynastic sequence and institutions, but weak evidence for precise chronology (telescoping) and vulnerable to feedback and present-function bias, which is why the course dates Kirina 'traditionally c. 1235' rather than flatly.

## Sources
- Vansina, J. (1985). *Oral tradition as history*. University of Wisconsin Press.
- Ehret, C. (2016). *The civilizations of Africa: A history to 1800* (2nd ed.). University of Virginia Press.
- Shaw, T. (1970). *Igbo-Ukwu: An account of archaeological discoveries in eastern Nigeria*. Faber & Faber.
- McIntosh, S. K., & McIntosh, R. J. (1981). West African prehistory. *American Scientist, 69*(6), 602-613.
- Niane, D. T. (1965). *Sundiata: An epic of old Mali* (G. D. Pickett, Trans.). Longman.`,
      recallContent: [
        {
          prompt: "Why did radiocarbon dating matter SPECIFICALLY for the 'no documents, no history' argument?",
          answer:
            "It lets sites be dated without any documents at all, so history could be written wherever people left material traces: Jenne-jeno's pre-Islamic urbanism, Igbo-Ukwu's ninth-tenth-century bronzes, Great Zimbabwe's medieval dates. The premise 'history requires documents' dissolved.",
        },
        {
          prompt: "Vansina's three named limits of oral tradition.",
          answer:
            "Telescoping (chronology compresses, middle generations drop), feedback (written accounts leak back into oral ones and pose as independent confirmation), and present function (performance bends content toward living patrons' needs).",
        },
      ],
    },
    {
      slug: "africa-quiz-6",
      title: "Section 6 quiz · How we know",
      section: "Section 6 · How we know",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is the catch with al-Fazari's eighth-century mention of Ghana?",
            options: [
              "His original work is lost; the line survives only as quotations inside later writers",
              "He wrote in a cipher never solved",
              "He described the wrong continent",
              "There is no catch; the manuscript survives complete",
            ],
            correctIndex: 0,
            explanation:
              "Texts surviving inside other texts are common in the early record, which is why transmission history is part of reading them.",
            sourceLessonSlug: "africa-written-record",
          },
          {
            prompt: "Why does this course cite the Arabic sources via Levtzion & Hopkins' Corpus?",
            options: [
              "Translation is interpretation: a critical scholarly edition documents its choices, where colonial-era translations sometimes tilted hard",
              "Because the Arabic originals are illegal to quote",
              "Because it is the only translation ever made",
              "For copyright reasons only",
            ],
            correctIndex: 0,
            explanation:
              "Word choices like 'king' versus 'chief' tilt everything downstream; citing the edition tells readers which choices you inherited.",
            sourceLessonSlug: "africa-written-record",
          },
          {
            prompt: "What source-criticism caution applies even to Ibn Battuta's eyewitness account?",
            options: [
              "He dictated it years later to the editor Ibn Juzayy, and scholars debate whether every leg of the itinerary is firsthand",
              "He could not write at all",
              "He never existed",
              "He visited only Europe",
            ],
            correctIndex: 0,
            explanation:
              "'Eyewitness' is a claim to be tested, not a magic word. He remains the most detailed surviving eyewitness for both coasts he described.",
            sourceLessonSlug: "africa-written-record",
          },
          {
            prompt: "Which of these belongs to the INSIDER African written record?",
            options: [
              "The Tarikh al-Sudan, an African-written history of Songhai, plus Ge'ez manuscripts and ajami traditions",
              "Al-Umari's encyclopedia",
              "The Catalan Atlas",
              "The Periplus of the Erythraean Sea",
            ],
            correctIndex: 0,
            explanation:
              "The others are outsider sources (valuable ones). The insider record alone falsifies the 'no documents' premise.",
            sourceLessonSlug: "africa-written-record",
          },
          {
            prompt: "Why is the Kilwa Chronicle's double survival (Arabic version and Portuguese rendering) methodologically useful?",
            options: [
              "Historians can watch two transmissions of one tradition diverge, exposing how texts change in the telling",
              "It proves the Portuguese wrote Swahili history first",
              "It makes the chronicle twice as long",
              "It settles Kilwa's foundation date exactly",
            ],
            correctIndex: 0,
            explanation:
              "Parallel transmissions are a natural experiment in how sources mutate, the same reason the Tarikh al-fattash interpolations matter.",
            sourceLessonSlug: "africa-written-record",
          },
          {
            prompt: "How does the course use Benin to argue 'absence of writing is not absence of history'?",
            options: [
              "Benin's royal history is cast in brass plaques, carried by professional court remembrancers, and cross-checkable against four centuries of European trade records",
              "Benin actually had a secret alphabet",
              "Benin's history is unknowable",
              "Benin's history comes only from British sources",
            ],
            correctIndex: 0,
            explanation:
              "Absence of writing is a fact about the medium, not the past: record-keeping can run in metal, ritual office, and memory, checked against external documents.",
            sourceLessonSlug: "africa-written-record",
          },
          {
            prompt: "Why was radiocarbon dating 'quietly revolutionary' for African history?",
            options: [
              "It dates sites without documents, dissolving the premise that history requires written records",
              "It made excavation unnecessary",
              "It works only in deserts",
              "It reads inscriptions chemically",
            ],
            correctIndex: 0,
            explanation:
              "From 1949 on, material traces alone could carry chronology: exactly the evidence class Trevor-Roper's argument excluded by assumption.",
            sourceLessonSlug: "africa-ground-truth",
          },
          {
            prompt: "What did Thurstan Shaw's excavations at Igbo-Ukwu establish?",
            options: [
              "Technically dazzling leaded-bronze casting and long-distance trade in southeastern Nigeria by the ninth-tenth century CE, dates so surprising they were re-tested for years and held",
              "The first Portuguese fort in Nigeria",
              "That the bronzes were cast in Egypt",
              "A Roman settlement on the Niger",
            ],
            correctIndex: 0,
            explanation:
              "Igbo-Ukwu (excavated 1959 and 1964) pushed sophisticated regional metallurgy centuries earlier than anyone had guessed.",
            sourceLessonSlug: "africa-ground-truth",
          },
          {
            prompt: "In Vansina's method, what is 'telescoping'?",
            options: [
              "Oral chronology compressing over generations, with middle generations dropping out",
              "Using lenses to read manuscripts",
              "Combining two traditions into one",
              "Extending a king list to flatter a patron",
            ],
            correctIndex: 0,
            explanation:
              "One of his three named limits, with feedback (written accounts leaking back into oral ones) and present function (content bending toward living patrons).",
            sourceLessonSlug: "africa-ground-truth",
          },
          {
            prompt: "What is 'feedback' as a limit of oral tradition?",
            options: [
              "Written accounts leaking back into oral traditions and masquerading as independent confirmation",
              "Audience applause changing a performance",
              "Microphone interference in recordings",
              "Griots correcting each other",
            ],
            correctIndex: 0,
            explanation:
              "If the 'independent' oral version absorbed the written one a century ago, agreement between them proves nothing. Chains of transmission must be studied.",
            sourceLessonSlug: "africa-ground-truth",
          },
          {
            prompt: "What does the Epic of Sundiata reliably evidence, per the course?",
            options: [
              "Mali's founding tradition, dynastic sequence, and institutions, anchored by Ibn Khaldun's lists; NOT precise chronology, which is why Kirina is dated 'traditionally c. 1235'",
              "The exact date and casualty count of the Battle of Kirina",
              "Nothing; epics are not evidence",
              "The gold output of the Bure fields",
            ],
            correctIndex: 0,
            explanation:
              "Oral tradition is evidence with rules: strong on sequence and institutions, weak on absolute dates (telescoping).",
            sourceLessonSlug: "africa-ground-truth",
          },
          {
            prompt: "How is the Bantu expansion primarily reconstructed?",
            options: [
              "From historical linguistics (language family trees and loanwords for crops, iron, cattle), cross-checked against archaeology",
              "From Roman travel diaries",
              "From a medieval Bantu chronicle",
              "From colonial census records",
            ],
            correctIndex: 0,
            explanation:
              "No document records it; the language map does: a spread over roughly three millennia from the Nigeria-Cameroon borderlands across central, eastern, and southern Africa (Ehret).",
            sourceLessonSlug: "africa-ground-truth",
          },
          {
            prompt: "What is the convergence rule?",
            options: [
              "Confidence comes when INDEPENDENT lines of evidence agree; any single method can mislead",
              "The majority of historians voting settles a question",
              "Newer sources always beat older ones",
              "Physical evidence always beats writing",
            ],
            correctIndex: 0,
            explanation:
              "Great Zimbabwe is the model: stratigraphy, radiocarbon, datable imports, Shona oral tradition, and Portuguese trade reports converge on African and medieval.",
            sourceLessonSlug: "africa-ground-truth",
          },
          {
            prompt: "Which question is NOT part of the course's five-part audit for any historical claim?",
            options: [
              "Does the claim flatter the right side?",
              "Which people and which place?",
              "Which century?",
              "Which sources, and do independent lines converge?",
            ],
            correctIndex: 0,
            explanation:
              "The audit is people, place, century, sources, convergence. Whether a claim flatters anyone is exactly what the method exists to ignore.",
            sourceLessonSlug: "africa-ground-truth",
          },
          {
            prompt: "Who were the jeliw?",
            options: [
              "Professional, formally trained oral historians and praise-singers of the Mande world (griots)",
              "Songhai cavalry officers",
              "Swahili ship pilots",
              "Aksumite coin engravers",
            ],
            correctIndex: 0,
            explanation:
              "Their training was long and their office consequential; their testimony is evidence, to be handled with Vansina's rules like any other source.",
            sourceLessonSlug: "africa-ground-truth",
          },
        ],
      },
    },

    // ────────────── SECTION 7 · THE MAP REDRAWN ──────────────
    {
      slug: "africa-map-redrawn",
      title: "16 · The map redrawn",
      section: "Section 7 · The map redrawn",
      body: `Go back to the two documents you started with, and read them one more time with everything you now know.

Hegel: "no historical part of the World... no movement or development to exhibit." You have now met, in the documented record: a Kushite dynasty ruling Egypt, its king named in the Hebrew Bible; an Aksumite mint striking gold under kings whose conversion is stamped into the coins themselves; a customs schedule for the kingdom of Ghana written down in 1068; a Malian emperor whose gold moved Cairo's market and whose portrait Europe's best mapmakers painted within fifty years; a book trade that outsold every other business in Timbuktu; a granite city south of the Zambezi wired by coin and porcelain to China; a coastal civilization whose beauty stunned the most traveled man of the fourteenth century; brass court records in Benin City; churches carved whole out of Ethiopian rock, and a battlefield at Adwa where an African state made the age of empire blink. Movement and development were never absent. They were unexamined, and then, when examined, denied.

That last step deserves its final restatement, because it is this course's sharpest finding: **the "darkness" was manufactured, and we can watch it being manufactured, in the documents of the deniers themselves.** Mauch reaching for Solomon in 1871. Bent's Phoenicians in 1891. A chartered company licensed in 1895 to strip evidence for gold. Frobenius inventing Atlantis in 1910 rather than credit Yoruba artists. Seligman's Hamites in 1930, in a standard textbook. Rhodesia, in 1970, censoring a settled archaeological conclusion by law and forcing out the official who would not repeat the lie. Trevor-Roper's "darkness" in 1963, three decades after Caton-Thompson. The claim of "no history" was never a neutral report of missing evidence. It was work: expensive, sustained, institutional work, performed because empires needed the conclusion.

And the correction was also work, and it is worth naming who did it. Decolonization built the institutions: the *Journal of African History* began publishing in 1960; the UNESCO **General History of Africa** was launched in 1964 and its eight volumes (1981-1993) were written mostly by African scholars; university departments across Africa and the diaspora trained the field. Individuals mattered too, and this course names them the way it names kings: Caton-Thompson and Randall-MacIver, who followed the artifacts; Garlake, who chose exile over a censored caption; Vansina, who turned oral tradition into a discipline; Hunwick, who spent a career on Timbuktu's texts; the Senegalese scholar **Cheikh Anta Diop**, who forced open the question of ancient Egypt's African context a generation before the establishment would touch it (some of his specific claims remain contested, and this course flags that with its usual label, but the questions he forced are now normal science); the McIntoshes and Shaw with their trowels; Haidara and the Timbuktu families with their footlockers. The record survived because people carried it.

**What you take with you** is the audit, one last time: *which people, which place, which century, which sources, and do independent lines converge?* Plus its two guard rails: refuse erasure, and refuse romance, because both replace evidence with need. This works on every history you will ever meet, including the ones you want to believe.

**Where to go deeper.** This course is a survey; each of its sections compresses a literature that deserves its own course, and follow-on courses in this track (the Nile corridor; the West African empires; Great Zimbabwe and the southern states; the Swahili coast; Benin, Ife, and the forest kingdoms; Ethiopia; and a full methods course) are proposed on this platform's future-work board. Meanwhile, the single best starting shelf: the UNESCO General History of Africa (free online through UNESCO), Fauvelle's *The Golden Rhinoceros* for the medieval centuries in vivid short chapters, and Thornton, Green, and Gomez for the Atlantic age and the empires.

:::reveal The course claims the 'darkness' was manufactured rather than a neutral report of missing evidence. Give the strongest three pieces of documentation for that claim. ||| Best three: (1) Rhodesia's 1970 censorship law barring official publications from stating Great Zimbabwe's African origin as fact, plus Garlake's forced departure, i.e., the state suppressing a conclusion archaeology had settled in 1929-1931; (2) the succession of outsider attributions each invented AFTER evidence of African achievement appeared (Bent's Phoenicians 1891, Frobenius's Atlantis 1910, Seligman's Hamites 1930), showing denial adapting to survive evidence; (3) Trevor-Roper's 1963 'darkness' delivered three decades after Caton-Thompson published and a century after the Arabic sources were in European print, proving the information was available and unexamined by choice.

## Sources
- UNESCO. (1981-1993). *General history of Africa* (Vols. I-VIII). UNESCO Publishing / Heinemann.
- Fauvelle, F.-X. (2018). *The golden rhinoceros: Histories of the African Middle Ages* (T. L. Fagan, Trans.). Princeton University Press.
- Pikirayi, I. (2012). Peter Garlake (1934-2011), Great Zimbabwe and the politics of the past in Zimbabwe. *Azania: Archaeological Research in Africa, 47*(2), 223-231.
- Diop, C. A. (1974). *The African origin of civilization: Myth or reality* (M. Cook, Trans.). Lawrence Hill.
- Vansina, J. (1985). *Oral tradition as history*. University of Wisconsin Press.
- Thornton, J. K. (1998). *Africa and Africans in the making of the Atlantic world, 1400-1800* (2nd ed.). Cambridge University Press.`,
      recallContent: [
        {
          prompt: "Recite the five-part audit and its two guard rails.",
          answer:
            "Which people, which place, which century, which sources, and do independent lines converge? Guard rails: refuse erasure and refuse romance, because both replace evidence with need.",
        },
        {
          prompt: "How does the course treat Cheikh Anta Diop?",
          answer:
            "By its usual standard: he forced open the question of ancient Egypt's African context a generation early, and the questions he forced are now normal science, while some of his specific claims remain contested and are labeled so.",
        },
      ],
    },
    {
      slug: "africa-exercise-name-it",
      title: "Exercise · Name the people, place, and period",
      section: "Section 7 · The map redrawn",
      body: `The single most transferable skill in this course is the anti-flattening rule: no claim about "Africa," only claims about named peoples, places, and periods. This drill hardens the habit. For each cue, type the missing name. Spelling is checked forgivingly; common variant spellings are accepted.`,
      exercise: {
        instructions: "Fill in the missing name (a people, state, city, person, or site). Variants and common alternate spellings are accepted.",
        items: [
          {
            prompt: "The 'bronzes' looted by British forces in 1897 came from the palace of ___ City, capital of an Edo kingdom in present-day Nigeria.",
            answer: "Benin",
            accept: ["benin city"],
            hint: "Not the modern republic next door, which took the name in 1975.",
            explanation: "The Kingdom of Benin, of the Edo people, in present-day southern Nigeria; its Oba dynasty continues today.",
          },
          {
            prompt: "The 25th Dynasty pharaohs of Egypt (c. 747-656 BCE) came from the kingdom of ___, in present-day Sudan.",
            answer: "Kush",
            accept: ["kush", "cush", "nubia"],
            hint: "Piye and Taharqa were its kings.",
            explanation: "Kush, centered at Napata and later Meroe; Taharqa appears in the Hebrew Bible as 'Tirhakah king of Cush.'",
          },
          {
            prompt: "King Ezana, whose coins switch mid-reign to the cross around the 340s CE, ruled the kingdom of ___.",
            answer: "Aksum",
            accept: ["axum"],
            hint: "Its port was Adulis; its stelae still stand in the Ethiopian highlands.",
            explanation: "Aksum minted its own gold coinage from c. 270 CE; Ezana's conversion is stamped into the coins themselves.",
          },
          {
            prompt: "In 1331, Ibn Battuta called ___ 'one of the most beautiful and well-constructed towns in the world.'",
            answer: "Kilwa",
            accept: ["kilwa kisiwani"],
            hint: "A Swahili island port in present-day Tanzania; its sultans minted copper coins.",
            explanation: "Kilwa Kisiwani controlled the Sofala gold trade; its coins have been found at Great Zimbabwe.",
          },
          {
            prompt: "Mansa Musa's 1324-25 pilgrimage set out from the empire of ___, on the upper Niger.",
            answer: "Mali",
            accept: [],
            hint: "Founded, by tradition, by Sundiata around 1235.",
            explanation: "Mali, the Mande empire whose gold and hajj put it on the Catalan Atlas of 1375.",
          },
          {
            prompt: "From 1970, the Rhodesian government censored official publications from stating that ___ was built by Africans.",
            answer: "Great Zimbabwe",
            accept: ["zimbabwe"],
            hint: "Drystone walls, soapstone birds, a Kilwa coin in its ruins.",
            explanation: "The African, medieval origin had been settled by Randall-MacIver (1905) and Caton-Thompson (1929/1931); the censorship was policy, not uncertainty.",
          },
          {
            prompt: "The empire destroyed at the Battle of Tondibi in 1591 by a Moroccan force with firearms was ___.",
            answer: "Songhai",
            accept: ["songhay"],
            hint: "Its great rulers were Sunni Ali and Askia Muhammad, from Gao.",
            explanation: "Songhai, the largest of the three West African empires; Timbuktu's own chroniclers recorded its fall.",
          },
          {
            prompt: "Al-Bakri's 1068 account describes the twin-town capital and customs system of the kingdom of ___, a Soninke state (not the modern country of the same name).",
            answer: "Ghana",
            accept: ["wagadu"],
            hint: "Al-Fazari had already called it 'the land of gold' in the eighth century.",
            explanation: "The Soninke state of Ghana/Wagadu, in present-day Mauritania and Mali; the modern republic borrowed the name in 1957.",
          },
          {
            prompt: "The eleven rock-hewn churches of ___, carved down into living volcanic rock around the 12th-13th centuries, are still in liturgical use in the Ethiopian highlands.",
            answer: "Lalibela",
            accept: [],
            hint: "On UNESCO's very first World Heritage list (1978).",
            explanation: "Traditionally King Lalibela's 'New Jerusalem' under the Zagwe dynasty; archaeologists see longer construction phasing.",
          },
          {
            prompt: "The founding of Mali is preserved in the griot-carried epic of ___, victor (by tradition) at Kirina c. 1235.",
            answer: "Sundiata",
            accept: ["sunjata", "sundjata"],
            hint: "Recorded versions include Niane's, from the jeli Mamadou Kouyate.",
            explanation: "The epic evidences Mali's founding tradition and institutions; the date is traditional, anchored by Ibn Khaldun's king lists.",
          },
          {
            prompt: "The ninth-tenth-century leaded-bronze regalia that stunned archaeologists in southeastern Nigeria was excavated at ___.",
            answer: "Igbo-Ukwu",
            accept: ["igbo ukwu"],
            hint: "Thurstan Shaw's excavations, 1959 and 1964; the radiocarbon dates held.",
            explanation: "Igbo-Ukwu pushed sophisticated casting in the region centuries earlier than anyone had guessed.",
          },
          {
            prompt: "The urban settlement on the Niger occupied from c. 250 BCE, proving cities predate trans-Saharan Islamic trade, is ___.",
            answer: "Jenne-jeno",
            accept: ["jenne jeno", "djenne-djeno", "jenne-jeno"],
            hint: "Two kilometers from the famous 1907 mud-brick mosque.",
            explanation: "Excavated by Susan and Roderick McIntosh from 1977: urbanism on the Niger was homegrown.",
          },
        ],
      },
    },
    {
      slug: "africa-quiz-7",
      title: "Final quiz · The record, whole",
      section: "Section 7 · The map redrawn",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is this course's sharpest overall finding about the 'Africa has no history' claim?",
            options: [
              "The 'darkness' was manufactured: denial was sustained institutional work, documentable in the deniers' own publications and laws",
              "The claim was true until 1960",
              "The claim was an innocent error corrected as soon as evidence appeared",
              "The claim was never actually made by anyone",
            ],
            correctIndex: 0,
            explanation:
              "From Bent's Phoenicians (1891) to Rhodesia's 1970 censorship law, the denial adapted to survive each new piece of evidence, because empires needed the conclusion.",
            sourceLessonSlug: "africa-map-redrawn",
          },
          {
            prompt: "Which sequence of corrective institutions is right?",
            options: [
              "Journal of African History (1960); UNESCO General History of Africa launched (1964), its 8 volumes published 1981-1993",
              "UNESCO GHA (1837); JAH (1897)",
              "Both were founded in the 1990s",
              "Neither exists",
            ],
            correctIndex: 0,
            explanation:
              "Decolonization built the field's institutions; the GHA volumes were written mostly by African scholars.",
            sourceLessonSlug: "africa-map-redrawn",
          },
          {
            prompt: "How does the course handle Cheikh Anta Diop?",
            options: [
              "Credits him with forcing open questions (ancient Egypt's African context) a generation early, while labeling some of his specific claims contested",
              "Endorses every claim he made",
              "Dismisses him entirely",
              "Does not mention him",
            ],
            correctIndex: 0,
            explanation:
              "One standard, applied to allies too: pioneering questions, contested specifics, both stated.",
            sourceLessonSlug: "africa-map-redrawn",
          },
          {
            prompt: "Which pairing of evidence to claim is correct?",
            options: [
              "Ezana's conversion: contemporary coins switching to the cross mid-reign",
              "Mansa Musa's exact net worth: al-Umari's ledgers",
              "Great Zimbabwe's Phoenician origin: Caton-Thompson 1931",
              "The Ark of the Covenant at Aksum: radiocarbon-verified",
            ],
            correctIndex: 0,
            explanation:
              "The others invert the course: no net-worth figure is computable, Caton-Thompson settled the AFRICAN origin, and the Ark is a church tradition, not a verified artifact.",
            sourceLessonSlug: "africa-map-redrawn",
          },
          {
            prompt: "A blog post says: 'Africans never developed writing.' Which single lesson-fact most efficiently falsifies it?",
            options: [
              "The Ge'ez tradition: an African script in continuous use from Aksum's fourth-century inscriptions to today's liturgy",
              "The monsoon winds",
              "The 1505 sack of Kilwa",
              "The Battle of Tondibi",
            ],
            correctIndex: 0,
            explanation:
              "Meroitic, ajami, and the Timbuktu manuscripts pile on, but seventeen centuries of continuous Ge'ez literacy is the one-sentence refutation. (And absence of script, as at Benin, is still not absence of history.)",
            sourceLessonSlug: "africa-written-record",
          },
          {
            prompt: "A different post says: 'Precolonial Africa was a paradise without war or slavery.' What is the course's response?",
            options: [
              "That is the romance trap: African states fought wars and held and sold slaves (Section 5 teaches it plainly), and sanitizing the record concedes the deniers' premise",
              "Correct, and the course proves it",
              "Unknowable either way",
              "True for the whole continent except Egypt",
            ],
            correctIndex: 0,
            explanation:
              "One standard everywhere: the documented record includes Sokoto's estates, the Saharan trades, and Atlantic participation by named states. Romance erases real people too.",
            sourceLessonSlug: "africa-map-redrawn",
          },
          {
            prompt: "Which claim does this course itself refuse to assert, on its own rules?",
            options: [
              "That Mansa Musa was the richest person in history",
              "That Kush ruled Egypt as the 25th Dynasty",
              "That about 12.5 million people were embarked in the Atlantic trade",
              "That Rhodesia censored Great Zimbabwe's origin from 1970",
            ],
            correctIndex: 0,
            explanation:
              "The others are documented (inscriptions and chronology; SlaveVoyages; Pikirayi 2012). The 'richest ever' figure is unquantifiable and traces to a 2012 listicle.",
            sourceLessonSlug: "africa-mansa-musa",
          },
          {
            prompt: "Which three-part chain correctly connects Great Zimbabwe to China?",
            options: [
              "Plateau gold to Sofala; Sofala's trade controlled by Kilwa; Kilwa in the monsoon network that carried Chinese porcelain (found in Great Zimbabwe's ruins)",
              "A Chinese fleet sailed up the Zambezi to the city",
              "Zheng He built the Great Enclosure",
              "There is no connection; the porcelain finds are fake",
            ],
            correctIndex: 0,
            explanation:
              "One economy across Lessons 8-9: the Kilwa coin and celadon in the ruins are its receipts.",
            sourceLessonSlug: "africa-swahili-coast",
          },
          {
            prompt: "What made Adwa (1896) diplomatically unique in the Scramble era?",
            options: [
              "The victory was converted into treaty recognition of full independence, and European powers opened embassies",
              "It was the only battle Africans won",
              "It ended colonialism continent-wide",
              "It was fought without weapons",
            ],
            correctIndex: 0,
            explanation:
              "Other African forces won battles (Isandlwana, for one); Ethiopia converted its victory into durable, recognized statehood, which is the difference the course teaches.",
            sourceLessonSlug: "africa-ethiopia-lalibela-adwa",
          },
          {
            prompt: "Which of these is a correct application of the five-part audit?",
            options: [
              "'The bronzes were cast by the Edo casters' guild of Benin City, mostly 16th-17th centuries, per court tradition, trade records, and the 2023 isotope study, which converge'",
              "'Africa made bronzes at some point'",
              "'Bronzes prove Atlantis traded with Africa'",
              "'All African art is anonymous and undatable'",
            ],
            correctIndex: 0,
            explanation:
              "People (Edo casters), place (Benin City), period (16th-17th c.), sources (court tradition, trade records, isotope study), convergence: all five, in one sentence.",
            sourceLessonSlug: "africa-map-redrawn",
          },
          {
            prompt: "Why does the course insist on naming individuals (Caton-Thompson, Garlake, Vansina, Hunwick, Diop, Haidara) in its closing lesson?",
            options: [
              "Because the record survived through people's documented work and risk, and naming them is the same precision the course applies to kings",
              "To pad the bibliography",
              "Because they were all African",
              "Because institutions played no role",
            ],
            correctIndex: 0,
            explanation:
              "The correction was work, like the denial was work: exile chosen over a censored caption (Garlake), footlockers to Bamako (Haidara), careers on the texts (Hunwick).",
            sourceLessonSlug: "africa-map-redrawn",
          },
          {
            prompt: "Which claim below would this course label 'tradition, not verified fact'?",
            options: [
              "The Ark of the Covenant rests in the chapel at Aksum",
              "Kilwa minted copper coins",
              "Meroitic can be sounded out but not read",
              "The Great Mosque of Djenne standing today was built in 1907",
            ],
            correctIndex: 0,
            explanation:
              "The Ark is a foundational church tradition no scholar has examined; the other three are documented (coin finds; Griffith's transliteration; the 1907 rebuilding).",
            sourceLessonSlug: "africa-ethiopia-lalibela-adwa",
          },
          {
            prompt: "What, per the course, is the correct one-sentence response to Trevor-Roper's 'history requires documents'?",
            options: [
              "The documents existed (Ge'ez, the chronicles, the Arabic corpus), and documents were never the only admissible evidence (radiocarbon, oral tradition with rules, linguistics)",
              "Documents are colonial constructs",
              "He was right, but Africa is an exception",
              "Oral tradition is superior to writing",
            ],
            correctIndex: 0,
            explanation:
              "His premise failed twice over: factually (the written record exists) and methodologically (convergent non-written evidence is standard historical practice everywhere).",
            sourceLessonSlug: "africa-written-record",
          },
          {
            prompt: "Which reading list does the course recommend as the starting shelf?",
            options: [
              "UNESCO General History of Africa; Fauvelle's Golden Rhinoceros; Thornton, Green, and Gomez",
              "Hegel, Trevor-Roper, and Seligman",
              "Only nineteenth-century travel diaries",
              "Social media threads, curated for engagement",
            ],
            correctIndex: 0,
            explanation:
              "The GHA is free online via UNESCO; Fauvelle covers the medieval centuries in short cited chapters; Thornton, Green, and Gomez carry the empires and the Atlantic age.",
            sourceLessonSlug: "africa-map-redrawn",
          },
          {
            prompt: "The final habit this course wants you to keep is:",
            options: [
              "Run the audit (people, place, century, sources, convergence) on every historical claim, especially the ones you want to believe",
              "Trust museum labels",
              "Prefer the most dramatic version of any story",
              "Assume all old sources are worthless",
            ],
            correctIndex: 0,
            explanation:
              "The guard rails cut both ways by design: refuse erasure, refuse romance. Evidence over need, on every continent, including for claims that flatter your own side.",
            sourceLessonSlug: "africa-map-redrawn",
          },
        ],
      },
    },
  ],
};
