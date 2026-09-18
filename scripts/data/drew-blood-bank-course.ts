import type { AuthoredCourse } from "./authored-course";

// "Who Built the Blood Bank: Charles Drew, the Research, and the Record" (Culture & History).
// CREDIT series, science track, position S2, beside S1 (`the-paper-and-the-prize`, Esther Lederberg).
// Slug to be registered: `who-built-the-blood-bank`. PRIVATE UNTIL VETTED, by BAM's approval of the
// brief at plans/future-courses/he-did-the-work/2026-09-18-charles-drew-brief.md. Every
// `sourceLessonSlug` below is course-internal, so the registered slug does not affect them.
//
// THE SPINE, and it must not be flattened into a hero story or a debunking:
// The popular story gets Drew wrong in BOTH directions. It OVER-credits him (he did not invent blood
// banking; Fantus named it in Chicago in 1937 and Drew's own dissertation says so) and it
// UNDER-credits him (the preservation research, the standards and central checks that made nine
// hospitals one program, and the surgeons he trained at Howard). Every section teaches both halves.
//
// THE DEATH MYTH IS NOT RE-TAUGHT HERE. `who-gets-the-credit` lesson 17 (`five-claims-that-fail`)
// already corrects it. Lessons 1 and 2 point there in one sentence each and move on.
//
// FETCH-OR-DO-NOT-CITE. Everything cited below was retrieved and read on 2026-09-18:
//  - NLM Profiles in Science, The Charles R. Drew Papers: the collection home page and five feature
//    pages (Biographical overview; Brief chronology; Education and early medical career; Becoming
//    "the father of the blood bank"; "My chief interest was and is surgery"). Fetched as raw HTML.
//  - NLM Digital Collections catalogue records AND the digitized documents themselves, read from the
//    PDF page images where the OCR was noisy (the dissertation's OCR is poor, so every quotation from
//    it below was checked against the rendered page, not the OCR):
//      101584649X142  Drew, Banked Blood (1940), 356 pp.  Quoted: acknowledgements pp. i-ii,
//                     intro p. 1, ch. II pp. 86-88, ch. V pp. 205-212, summary pp. 243-245.
//      101584649X141  Blood Transfusion Association report, 31 Jan 1941, 64 pp. Quoted pp. 8-15,
//                     42, 50-52, 60-61.
//      101584649X26   Drew, A report on the contaminated plasma discovered in England, ca. Nov 1940.
//      101584649X9    Drew (1944), The role of Soviet investigators..., Am Rev Soviet Med 1(4).
//      101584649X47   Drew, The Negro physician in the present war effort, radio, 27 Apr 1943.
//      101584649X113  Drew to Mrs. J. F. Bates, 27 Jan 1947.
//  - Science History Institute, "Charles Richard Drew" (page shows no date; its metadata carries a
//    2016 publish date and a 2026 modified date, so it is cited n.d.).
//
// HOW EACH "MUST NOT PRINT UNTIL SETTLED" ITEM FROM THE BRIEF WAS HANDLED:
//  1. BIRTH AND DEATH DATES, AND AGE. RESOLVED from NLM. Two separate NLM pages agree: the
//     Biographical overview says "born in Washington, DC, on June 3, 1904" and "Drew died on April
//     1, 1950"; the Brief chronology says "1904 --Born June 3" and "1950 --Died April 1". 3 June 1904
//     to 1 April 1950 is 45 years and 302 days, so he was 45. The Science History Institute's "at the
//     age of 46" is therefore off by one, and lesson 1 uses that disagreement as a small checking
//     exercise (the dates settle it) rather than hiding it.
//  2. BERNARD FANTUS / COOK COUNTY 1937. RESOLVED from two fetched sources. NLM's "Becoming the
//     father of the blood bank" chapter: "the first opened at Chicago's Cook County Hospital in 1937;
//     its director, Bernard Fantus, coined the term 'blood bank.'" Drew's own dissertation, p. 87
//     (read from the page image): "In March, 1937, Fantus instituted at the Cook County Hospital in
//     Chicago a system ... He called this system a 'blood bank'". The Fantus JAMA paper itself was
//     NOT fetched, so it is never cited directly.
//  3. "FIRST BLACK RESEARCHER TO EARN THE DEGREE IN THE UNITED STATES". NOT PRINTED. The course uses
//     NLM's "the first African American to earn the degree there" and teaches that "there" means
//     Columbia (lesson 4).
//  4. "RESIGNED IN PROTEST". NOT PRINTED as fact. NLM addresses it directly and this pass found the
//     sentence: "There is no evidence, however, that this blood exclusion policy was Drew's reason
//     for leaving the pilot program and not continuing on to direct the national project, as some
//     accounts suggest." Lessons 2 and 8 teach that sentence and what the sources DO record.
//  Also: the Howard chair date the brief marked unconfirmed is settled by NLM's Howard chapter,
//  "In October 1941, he was appointed chairman of the Department of Surgery".
//
// DISCREPANCIES INSIDE THE SOURCES, taught rather than smoothed:
//  - NLM's overview places the Red Cross appointment "When the program ended in January 1941";
//    NLM's chapter and chronology say February 1941. The course says "early 1941" in prose and
//    quotes the chronology's February when it quotes.
//  - Plasma totals: the 1941 report says about 5,500 liters PRODUCED and 4,712 DELIVERED at the time
//    of writing; NLM says "over 5,000 liters" shipped; SHI says "5,000 liters". Lesson 5 teaches
//    produced / delivered / lost as three different numbers.
//  - The Presbyterian nurse's surname is typed "Stoddart" in the staff list (p. 211) and "Stoddard"
//    in the acknowledgements (p. ii). The course prints both rather than choosing.
//
// House style, matching deaf-america-course.ts: `section` on every lesson; flush-left single-line
// `:::reveal q ||| a`; a `## Vocabulary` block of 3-6 lesson-specific terms; APA 7 `## Sources`; a
// quiz per teaching section (pool sized to audit-course's density target, 46 to 60, serving 5,
// passing 80, shuffled) plus a final pooling 41 and serving 10, placed LAST; every question carries `explanation` + `sourceLessonSlug`. Correct
// options are written SHORT and distractors long and specifically wrong, so check-longest-option
// passes by construction. No em dashes in user-visible copy.
export const DREW_BLOOD_BANK_COURSE: AuthoredCourse = {
  title: "Who Built the Blood Bank: Charles Drew, the Research, and the Record",
  description:
    "The popular story says Charles Drew invented the blood bank, became the first director of the Red Cross blood bank, and resigned in protest when the Red Cross segregated blood. The record says something different, and better. Drew did not invent blood banking: the term was coined in Chicago in 1937, and Drew's own dissertation says so. What he did was harder and easier to check. With his mentor John Scudder he ran an experimental blood bank in New York and measured what storage does to blood in a 356-page doctoral study, the first such degree Columbia awarded to an African American. As medical supervisor of Blood for Britain he built the standards, records and central laboratory checks that let nine hospitals produce safe plasma for shipment across an ocean in wartime. Then, under a rule the armed forces insisted on, Black Americans were excluded from giving blood to the national program he had helped establish, and only later allowed to give blood that was kept segregated. He criticized that policy in public for years. And he spent the rest of his life training surgeons at Howard University, the work he called his chief interest. This course reads the primary documents, the dissertation, the 1941 project report, his own letters and speeches, and teaches how to take a flattering story apart without taking the person down with it.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 — Four stories, and what the record says
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "credited-wrong-both-ways",
      title: "1 · Credited wrong in both directions",
      section: "Section 1 · Four stories, and what the record says",
      body: `Ask most people what Charles Drew did and you will get some version of one story. He invented the blood bank. He became the first director of the American Red Cross blood bank. He resigned in protest when the Red Cross segregated blood by race. And he died after a car crash because a white hospital refused to give him blood.

That story gets him wrong twice, in opposite directions, and this course is built on the difference.

**It over-credits him.** Blood was being stored for transfusion before Drew worked on it, and the term "blood bank" was coined by somebody else, in Chicago, in 1937. The best witness to that is Drew. A whole chapter of his doctoral dissertation, "Evolution of the Blood Bank", nearly eighty typed pages long, is a history of other people's work, and it names the man who coined the term (Drew, 1940a). Section 2 goes through them.

**It under-credits him, which is the bigger loss.** The inventor story leaves out what he actually did, and what he did was harder to do and easier to check. He managed an experimental blood bank and measured what storage does to blood in a 356-page study. He was the medical supervisor who made nine New York City hospitals produce plasma to one standard for shipment across an ocean in wartime. And he spent the rest of his life training surgeons at Howard University, which he believed would be his greatest and most lasting contribution (National Library of Medicine [NLM], n.d.-f). A story that hands him an invention he never claimed crowds out three achievements the documents actually show.

**Read the careful version first.** The National Library of Medicine, which presents a digitized selection of the Drew Papers held at Howard University's Moorland-Spingarn Research Center, says Drew "has been called 'the father of the blood bank,' for his outstanding role in conceiving, organizing, and directing America's first large-scale blood banking program during the early years of World War II" (NLM, n.d.-d). Two phrases carry the weight. *Has been called* reports a title others gave him without endorsing it as a claim of invention. *First large-scale* claims the first American program at that size, not the first blood bank. Section 3 shows what "large-scale" had to mean in 1940.

The Science History Institute says he "earned the title 'father of the blood bank' for his lifesaving innovations in the use and preservation of blood plasma" (Science History Institute, n.d.). *Earned* endorses the title where *has been called* only reports it. Neither sentence says he invented anything. That claim lives in retellings, not in these sources.

**What he said about the title.** NLM notes that Drew never claimed these titles himself, "always noting that it took the combined efforts of many people" (NLM, n.d.-a). In January 1947 a biology teacher in Fort Worth, Texas, Mrs. J. F. Bates, planned a program in his honour for her students. He wrote back that "in the field of science wherever any advance is made the work of many people is involved and it always seems just a little bit unfair that one name should be chosen from the list for special commendation" (Drew, 1947). The flattering story is about a man who declined the flattery in writing.

**The dates, settled.** Drew was born in Washington, DC, on 3 June 1904, and died on 1 April 1950 of injuries from a car accident near Burlington, North Carolina (NLM, n.d.-b; NLM, n.d.-c). He was 45. One reputable biography says he died "at the age of 46" (Science History Institute, n.d.). That is a small, useful lesson in itself: when two sources disagree about an age, the dates settle it, and NLM gives the same dates on two separate pages.

**The fourth story is false, and this catalog has already dealt with it.** The claim that he died because a hospital refused him blood is taken apart in *Who Gets the Credit*, lesson 17, "Five claims that do not survive checking". This course does not repeat that lesson. It spends its time on what was true.

:::reveal In what two opposite directions does the popular story get Charles Drew wrong? ||| It over-credits him with inventing the blood bank, which others did before him, and it under-credits him for what he actually did: the preservation research, the standards that made a large program safe, and the surgeons he trained at Howard.

:::reveal What do "has been called" and "first large-scale" do in NLM's sentence about Drew? ||| "Has been called" reports a title others gave him without endorsing it as a claim of invention, and "first large-scale" limits the claim to the first American program at that size rather than the first blood bank.

## Vocabulary
- **Over-credit**: attributing to a person something that others did, such as an invention that came before them.
- **Under-credit**: failing to attribute to a person what the record shows they did, often because a bigger, simpler claim has crowded it out.
- **Blood bank**: a hospital store of donated blood, collected in advance and drawn on later, named by Bernard Fantus in Chicago in 1937.
- **Large-scale**: in NLM's sentence, a program collecting and processing blood across many hospitals at once, as distinct from one hospital's store.

## Sources
Drew, C. R. (1940a). *Banked blood: A study in blood preservation* [Doctoral dissertation, Columbia University]. Charles R. Drew Papers, Moorland-Spingarn Research Center, Howard University. National Library of Medicine Digital Collections. https://resource.nlm.nih.gov/101584649X142
Drew, C. R. (1947, January 27). [Letter to Mrs. J. F. Bates]. Charles R. Drew Papers, Moorland-Spingarn Research Center, Howard University. National Library of Medicine Digital Collections. https://resource.nlm.nih.gov/101584649X113
National Library of Medicine. (n.d.-a). *Becoming "the father of the blood bank," 1938-1941*. Profiles in Science: The Charles R. Drew Papers. https://profiles.nlm.nih.gov/spotlight/bg/feature/blood
National Library of Medicine. (n.d.-b). *Biographical overview*. Profiles in Science: The Charles R. Drew Papers. https://profiles.nlm.nih.gov/spotlight/bg/feature/biographical-overview
National Library of Medicine. (n.d.-c). *Brief chronology*. Profiles in Science: The Charles R. Drew Papers. https://profiles.nlm.nih.gov/spotlight/bg/feature/biographical-information
National Library of Medicine. (n.d.-d). *The Charles R. Drew papers*. Profiles in Science. https://profiles.nlm.nih.gov/spotlight/bg
National Library of Medicine. (n.d.-f). *"My chief interest was and is surgery": Howard University, 1941-1950*. Profiles in Science: The Charles R. Drew Papers. https://profiles.nlm.nih.gov/spotlight/bg/feature/my-chief-interest-was-and-is-surgery-howard-university-1941-1950
Science History Institute. (n.d.). *Charles Richard Drew*. https://www.sciencehistory.org/education/scientific-biographies/charles-richard-drew/`,
    },
    {
      slug: "four-claims-checked",
      title: "2 · Four claims, checked one at a time",
      section: "Section 1 · Four stories, and what the record says",
      body: `A claim about a real person can be checked the way any claim can: find the source, read its exact words, and ask whether it says what the retelling says it says. Here are the four popular claims about Drew, set against the record.

**Claim one: he invented the blood bank.** Not supported. The first American hospital program that stored the blood it collected opened at Cook County Hospital in Chicago in 1937, and its director, Bernard Fantus, coined the term "blood bank" (NLM, n.d.-a). Drew's own dissertation records that in March 1937 Fantus set up a central depot where donors gave blood to be stored for later use, and that "he called this system a 'blood bank'". It quotes Fantus explaining that the name was "not a mere metaphor": a hospital could not draw out blood that had not first been deposited (Drew, 1940a, p. 87). What NLM credits Drew with is narrower and more checkable: America's first *large-scale* program.

**Claim two: he was the first director of the Red Cross blood bank.** Not supported as worded. NLM's chronology says that in February 1941 he was "Appointed Assistant Director of the first American Red Cross Blood Bank (Presbyterian Hospital, New York)" (NLM, n.d.-c). Watch what happened to that sentence on its way into the popular version. The word *first* moved from the bank to the man, and the word *Assistant* fell off. Each change is small. Together they turn a true title into a false one. The sources this course read do not say who held the director's post, so this course does not guess. One more detail is worth knowing: NLM's overview places the appointment in January 1941, while its chronology and its chapter on these years say February (NLM, n.d.-b; NLM, n.d.-c). When this course is not quoting, it says early 1941.

**Claim three: he resigned in protest over the blood policy.** Not supported, and NLM answers it directly: "There is no evidence, however, that this blood exclusion policy was Drew's reason for leaving the pilot program and not continuing on to direct the national project, as some accounts suggest" (NLM, n.d.-a). The Science History Institute describes the same moment with no protest in it: after the three-month pilot program, Drew "returned to Howard University in April 1941 to pursue his long-term goal of establishing a top-level surgical program for African Americans" (Science History Institute, n.d.). NLM adds two ordinary reasons. He had been away from his wife and their first child for much of the previous year, and he had always expected to return to his faculty post at Howard (NLM, n.d.-a). What the sources do record is more durable than a resignation: he "openly criticized these policies" (Science History Institute, n.d.), and NLM adds that he wrote and spoke about them frequently during the war years (NLM, n.d.-a). Section 4 reads what he said.

**Claim four: he died because a white hospital refused him blood.** False. NLM says the stories were "repeatedly proved false" (NLM, n.d.-d). *Who Gets the Credit*, lesson 17, has the full correction.

**Notice the pattern.** Three of the four claims are not inventions from nothing. Each is a true fact bent a little: a real title with a word dropped, a real departure given a motive nobody recorded, a real policy he really opposed turned into a dramatic exit. That is why they are hard to kill. A correction that only says "false" loses to a story that is nearly true. A correction that says "here is the true version, and here is the exact word that changed" can win.

**The method, which the rest of the course uses.** For any claim about a person, ask four things. Which source says it? What are its exact words? Is that source reporting its own evidence, or repeating another account? And who does the flattering version push out of the frame? For Drew the answer to the last question keeps coming back the same: John Scudder, Bernard Fantus, the nurses and chemists at Presbyterian Hospital, the volunteers in nine hospitals, and Drew's own best work.

:::reveal What happened to Drew's title from NLM's chronology on its way into the popular story? ||| The chronology says Assistant Director of the first American Red Cross Blood Bank. The popular version moved "first" from the bank to the man and dropped "Assistant", which turns a true title into a false one.

:::reveal What does NLM say about the claim that Drew left the Red Cross program in protest? ||| That there is no evidence the exclusion policy was his reason for leaving the pilot program, as some accounts suggest. He returned to Howard in April 1941, as he had always expected to, and openly criticized the policy.

## Vocabulary
- **Assistant director**: the title NLM's chronology gives Drew at the first American Red Cross blood bank, in February 1941.
- **Pilot program**: a trial run of a system, here the three-month Red Cross program in New York in 1941 that became the model for the National Blood Donor Service.
- **Claim drift**: this course's name for the small changes a true statement picks up as it is retold, such as a moved or dropped word, until it says something false.
- **Primary source**: a document made at the time by a participant, such as Drew's dissertation or the 1941 project report, as opposed to a secondary account written later from such documents, such as NLM's narrative pages.

## Sources
Drew, C. R. (1940a). *Banked blood: A study in blood preservation* [Doctoral dissertation, Columbia University]. Charles R. Drew Papers, Moorland-Spingarn Research Center, Howard University. National Library of Medicine Digital Collections. https://resource.nlm.nih.gov/101584649X142
National Library of Medicine. (n.d.-a). *Becoming "the father of the blood bank," 1938-1941*. Profiles in Science: The Charles R. Drew Papers. https://profiles.nlm.nih.gov/spotlight/bg/feature/blood
National Library of Medicine. (n.d.-b). *Biographical overview*. Profiles in Science: The Charles R. Drew Papers. https://profiles.nlm.nih.gov/spotlight/bg/feature/biographical-overview
National Library of Medicine. (n.d.-c). *Brief chronology*. Profiles in Science: The Charles R. Drew Papers. https://profiles.nlm.nih.gov/spotlight/bg/feature/biographical-information
National Library of Medicine. (n.d.-d). *The Charles R. Drew papers*. Profiles in Science. https://profiles.nlm.nih.gov/spotlight/bg
Science History Institute. (n.d.). *Charles Richard Drew*. https://www.sciencehistory.org/education/scientific-biographies/charles-richard-drew/`,
    },
    {
      slug: "section-1-quiz",
      title: "Section 1 quiz · Four stories and the record",
      section: "Section 1 · Four stories, and what the record says",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "How does the National Library of Medicine introduce the title \"father of the blood bank\"?",
            options: [
              "He \"has been called\" it",
              "He was formally awarded it by the American Red Cross when the pilot program ended in 1941",
              "Columbia University conferred it on him together with his Doctor of Medical Science in June 1940",
              "He chose it himself as the subtitle of his 1940 dissertation on blood preservation",
            ],
            correctIndex: 0,
            explanation:
              "\"Has been called\" reports a title other people gave him. It does not endorse the title as a claim that he invented blood banking, and NLM also notes he never claimed it himself.",
            sourceLessonSlug: "credited-wrong-both-ways",
          },
          {
            prompt: "NLM credits Drew's role in America's first what kind of blood banking program?",
            options: [
              "Large-scale",
              "Hospital-based, meaning the store of donated blood opened at Cook County Hospital in March 1937",
              "Military, meaning a service run directly by the Army and Navy medical corps from 1938 onward",
              "Commercial, meaning a plasma supply sold to hospitals at the market price of the day",
            ],
            correctIndex: 0,
            explanation:
              "\"Large-scale\" is the precise claim. The first hospital store in the United States was Fantus's at Cook County in 1937, which is exactly why NLM's qualifier matters.",
            sourceLessonSlug: "credited-wrong-both-ways",
          },
          {
            prompt: "In which direction does the claim that Drew invented the blood bank get him wrong?",
            options: [
              "It over-credits him",
              "It under-credits him, because it assigns him less than the sources credit him with for the plasma work",
              "It gets his dates wrong, placing the invention after the 1942 segregation announcement",
              "It confuses him with John Scudder, who is the person the sources name as the inventor",
            ],
            correctIndex: 0,
            explanation:
              "It gives him something others did before him. The course pairs it with the opposite error: the same story under-credits what he really did.",
            sourceLessonSlug: "credited-wrong-both-ways",
          },
          {
            prompt: "Which of these does the course say the popular story UNDER-credits?",
            options: [
              "His research, standards and teaching",
              "His invention of sodium citrate as an anticoagulant, which made stored blood possible before 1918",
              "His term as national director of the Red Cross during the whole of the Second World War",
              "His resignation from the Red Cross, which the sources describe as the turning point of his career",
            ],
            correctIndex: 0,
            explanation:
              "The preservation research, the program standards that made Blood for Britain safe, and the surgeons he trained at Howard are the three achievements the invention story crowds out.",
            sourceLessonSlug: "credited-wrong-both-ways",
          },
          {
            prompt: "Where does Drew himself credit the people who came before him in blood storage?",
            options: [
              "In his own dissertation",
              "In a memoir he completed shortly before the 1950 car accident near Burlington, North Carolina",
              "In a letter of resignation he sent to the Red Cross when the pilot program ended",
              "In his November 1940 report on the contaminated plasma discovered in England",
            ],
            correctIndex: 0,
            explanation:
              "A whole chapter of the 1940 dissertation, \"Evolution of the Blood Bank\", is a history of other people's work, and it names the man who coined the term.",
            sourceLessonSlug: "credited-wrong-both-ways",
          },
          {
            prompt: "How does the Science History Institute's wording about the title differ from NLM's?",
            options: [
              "It says he \"earned\" the title",
              "It says he invented blood banking at Presbyterian Hospital in August 1939, against NLM's wording",
              "It says the title was withdrawn after the Red Cross reviewed the record in the 1950s",
              "It says the title belongs to John Scudder, and that Drew was only his laboratory assistant",
            ],
            correctIndex: 0,
            explanation:
              "\"Earned\" endorses the title where \"has been called\" only reports it. Neither source says he invented anything.",
            sourceLessonSlug: "credited-wrong-both-ways",
          },
          {
            prompt: "Do either of the two biographies the course quotes say Drew invented blood banking?",
            options: [
              "No, neither does",
              "Yes, both say it, and the course argues that both are wrong about the invention",
              "Only NLM says it, in the sentence that begins \"has been called the father of the blood bank\"",
              "Only the Science History Institute says it, in the sentence about his lifesaving innovations",
            ],
            correctIndex: 0,
            explanation:
              "The invention claim lives in retellings. NLM reports a title others gave him, and the Science History Institute ties the title to his work on using and preserving plasma.",
            sourceLessonSlug: "credited-wrong-both-ways",
          },
          {
            prompt: "According to NLM, how did Drew treat the titles he was given?",
            options: [
              "He never claimed them himself",
              "He used \"father of the blood bank\" on his letterhead at Howard from 1941 until his death",
              "He asked the Red Cross in writing to confirm him as the inventor of the blood bank",
              "He accepted them in public but disputed them privately in letters to John Scudder",
            ],
            correctIndex: 0,
            explanation:
              "NLM says he always noted that it took the combined efforts of many people, which matches what he wrote to Mrs. Bates in 1947.",
            sourceLessonSlug: "credited-wrong-both-ways",
          },
          {
            prompt: "What did Drew write in 1947 about one name being singled out for an advance in science?",
            options: [
              "That it seemed a little unfair",
              "That it was the proper reward for whoever published the first paper on a new method",
              "That the honour belonged to Howard University rather than to any individual surgeon",
              "That it was the only way the public would ever learn about the work of Black scientists",
            ],
            correctIndex: 0,
            explanation:
              "He wrote that wherever an advance is made the work of many people is involved, and that it always seems a little unfair that one name should be chosen from the list.",
            sourceLessonSlug: "credited-wrong-both-ways",
          },
          {
            prompt: "To whom did Drew write the 1947 letter about one name being chosen from the list?",
            options: [
              "A Fort Worth biology teacher",
              "The president of the American Red Cross, after the January 1942 announcement on segregation",
              "John Scudder, thanking him for suggesting the research that became the dissertation",
              "The NAACP committee that had awarded him the Spingarn Medal three years earlier",
            ],
            correctIndex: 0,
            explanation:
              "Mrs. J. F. Bates, a biology teacher in Fort Worth, Texas, had planned a program in his honour for her students, and he answered her.",
            sourceLessonSlug: "credited-wrong-both-ways",
          },
          {
            prompt: "On what date was Charles Drew born, according to NLM?",
            options: [
              "3 June 1904",
              "1 April 1904, the same day of the year on which he would die in 1950",
              "3 June 1905, a year later than the date some biographies give",
              "3 June 1906, which would make him 43 years old at his death",
            ],
            correctIndex: 0,
            explanation:
              "NLM's overview and its brief chronology both give 3 June 1904, in Washington, DC.",
            sourceLessonSlug: "credited-wrong-both-ways",
          },
          {
            prompt: "How old was Drew when he died on 1 April 1950?",
            options: [
              "45",
              "46, which is the age NLM's brief chronology records in its entry for 1950",
              "47, counting from the year he entered Dunbar High School in Washington",
              "44, because his birthday fell in June and the chronology rounds down twice",
            ],
            correctIndex: 0,
            explanation:
              "Born 3 June 1904, died 1 April 1950: two months short of his 46th birthday. NLM gives the dates, not an age; the \"46\" comes from a different biography.",
            sourceLessonSlug: "credited-wrong-both-ways",
          },
          {
            prompt: "One reputable biography says Drew died at 46. How does this course settle it?",
            options: [
              "From NLM's two dated pages",
              "By counting the number of years listed on his curriculum vitae in the Drew Papers",
              "By accepting the more recent source, since later biographies correct earlier ones",
              "By averaging the two figures and printing forty-five and a half as a compromise",
            ],
            correctIndex: 0,
            explanation:
              "When sources disagree about an age, the dates settle it. NLM gives the same birth and death dates on two separate pages, and they make him 45.",
            sourceLessonSlug: "credited-wrong-both-ways",
          },
          {
            prompt: "Where in this catalog is the story of Drew's death corrected in full?",
            options: [
              "Who Gets the Credit, lesson 17",
              "Section 4 of this course, which gives a full chapter to the accident and the hospital",
              "The final lesson of this course, which ends with the events of 1 April 1950",
              "Nowhere yet, because the story is still filed as an open question for review",
            ],
            correctIndex: 0,
            explanation:
              "Lesson 17 of Who Gets the Credit, \"Five claims that do not survive checking\", corrects it. This course points there and spends its time on what was true.",
            sourceLessonSlug: "credited-wrong-both-ways",
          },
          {
            prompt: "Why does this course not re-teach the story of how Drew died?",
            options: [
              "Another lesson already corrects it",
              "Because the sources this course read disagree about what happened at the hospital",
              "Because NLM declined to publish anything about his death in Profiles in Science",
              "Because the story is still unresolved, and an open question cannot be taught",
            ],
            correctIndex: 0,
            explanation:
              "The story is false, NLM says so plainly, and the catalog already corrects it. Repeating the correction would crowd out the true record this course exists to teach.",
            sourceLessonSlug: "credited-wrong-both-ways",
          },
          {
            prompt: "Where are the original Charles R. Drew Papers held?",
            options: [
              "Moorland-Spingarn, at Howard University",
              "The National Library of Medicine, which purchased the originals from the family in 1950",
              "The Columbia University archive that holds all of the College of Physicians and Surgeons' theses",
              "The American Red Cross national headquarters archive, alongside the pilot program's records",
            ],
            correctIndex: 0,
            explanation:
              "The Moorland-Spingarn Research Center at Howard is the repository. NLM presents a digitized selection online in collaboration with it.",
            sourceLessonSlug: "credited-wrong-both-ways",
          },
          {
            prompt: "What does NLM's Profiles in Science provide for Drew?",
            options: [
              "A digitized selection of his papers",
              "The complete original collection, transferred from Howard University for safekeeping",
              "A licensed biography written by a member of the Drew family",
              "A list of every blood bank in the United States that claims descent from his work",
            ],
            correctIndex: 0,
            explanation:
              "It makes a digitized selection publicly available, with narrative chapters on his life. Researchers who need the full collection are directed to Moorland-Spingarn.",
            sourceLessonSlug: "credited-wrong-both-ways",
          },
          {
            prompt: "What does \"under-credit\" mean in this course?",
            options: [
              "Missing what he demonstrably did",
              "Giving a person credit for something that others did before them, such as a named invention",
              "Reporting a title that others gave a person without saying whether it is accurate",
              "Crediting an institution, such as a hospital, instead of the individuals who worked there",
            ],
            correctIndex: 0,
            explanation:
              "Under-credit is failing to attribute what the record shows a person did, often because a bigger, simpler claim has crowded it out. Giving credit for others' work is the opposite error.",
            sourceLessonSlug: "credited-wrong-both-ways",
          },
          {
            prompt: "What did Drew believe would be his greatest and most lasting contribution?",
            options: [
              "Training surgeons at Howard",
              "The 1941 report on Blood for Britain, which the Red Cross history later praised",
              "The dumbbell-shaped storage flask his dissertation recommended as routine hospital equipment",
              "The mobile collection units, later called bloodmobiles, introduced during the Red Cross pilot",
            ],
            correctIndex: 0,
            explanation:
              "NLM records that he regarded training Black surgeons to the most rigorous standards as the work that would last. Section 5 returns to it.",
            sourceLessonSlug: "credited-wrong-both-ways",
          },
          {
            prompt: "Which of the two errors does lesson 1 call the bigger loss?",
            options: [
              "The under-credit",
              "The over-credit, because an invented achievement can never be removed once it is printed",
              "Neither, because the two errors cancel out and leave his reputation where it should be",
              "The death story, because it is the only one of the four claims that is entirely false",
            ],
            correctIndex: 0,
            explanation:
              "The inventor story crowds out what he actually did, which was harder to do and easier to check. Losing that is the bigger cost.",
            sourceLessonSlug: "credited-wrong-both-ways",
          },
          {
            prompt: "How long is the dissertation chapter in which Drew traces the history of blood banking?",
            options: [
              "Nearly eighty typed pages",
              "A single paragraph in the introduction, with Fantus mentioned only in a footnote",
              "Three pages in an appendix placed after the bibliography and the floor plan",
              "The whole 356 pages, since the dissertation contains no experiments of its own",
            ],
            correctIndex: 0,
            explanation:
              "\"Evolution of the Blood Bank\" is nearly eighty typed pages of other people's work. The rest of the dissertation is Drew's own experiments and the Presbyterian bank.",
            sourceLessonSlug: "credited-wrong-both-ways",
          },
          {
            prompt: "What is the title of the dissertation chapter that is a history of other people's work?",
            options: [
              "Evolution of the Blood Bank",
              "Banked Blood, which is also the title the whole dissertation carries on its first page",
              "Summary of Clinical Observations and Recommendations, the closing part of the study",
              "The Role of Soviet Investigators, the chapter he later republished as a journal article",
            ],
            correctIndex: 0,
            explanation:
              "Chapter II, \"Evolution of the Blood Bank\", runs from the ancient history of transfusion to the blood bank concept, and it names Fantus.",
            sourceLessonSlug: "credited-wrong-both-ways",
          },
          {
            prompt: "How many New York City hospitals does lesson 1 say produced plasma to one standard under Drew's supervision?",
            options: [
              "Nine",
              "Six, the number that began in August and September 1940 and was never enlarged",
              "Twenty, every hospital that had offered to take part before the work began",
              "Three: Presbyterian, Mount Sinai and New York Hospital, working as a single unit",
            ],
            correctIndex: 0,
            explanation:
              "Six hospitals began and three more joined, nine in all. Section 3 takes the numbers from the project's own report.",
            sourceLessonSlug: "credited-wrong-both-ways",
          },
          {
            prompt: "Where was Charles Drew born?",
            options: [
              "Washington, DC",
              "Burlington, North Carolina, near where the 1950 accident took place",
              "Montreal, where he later earned his medical degrees at McGill University",
              "New York City, where he later earned his doctorate at Columbia University",
            ],
            correctIndex: 0,
            explanation:
              "NLM's overview says he was born in Washington, DC, on 3 June 1904. The other places are real places in his life, attached to the wrong event.",
            sourceLessonSlug: "credited-wrong-both-ways",
          },
          {
            prompt: "What does the word \"earned\" do that \"has been called\" does not?",
            options: [
              "It endorses the title",
              "It shows the title was awarded by a formal committee on a documented date",
              "It limits the title to plasma, leaving out whole blood and the blood bank itself",
              "It attributes the title to Drew himself rather than to the people who used it",
            ],
            correctIndex: 0,
            explanation:
              "\"Has been called\" reports what others said. \"Earned\" adds the writer's agreement. Neither word turns the title into a claim of invention.",
            sourceLessonSlug: "credited-wrong-both-ways",
          },
          {
            prompt: "According to lesson 1, what does the inventor story do to Drew's documented achievements?",
            options: [
              "Crowds them out",
              "Confirms them, since an inventor would naturally also have done the later work",
              "Moves them to John Scudder, who is then credited with the research and the teaching",
              "Dates them earlier, so that they appear to come before the Cook County bank",
            ],
            correctIndex: 0,
            explanation:
              "A story that hands him an invention he never claimed leaves no room for the research, the program standards and the surgeons he trained.",
            sourceLessonSlug: "credited-wrong-both-ways",
          },
          {
            prompt: "In what year was the term \"blood bank\" coined?",
            options: [
              "1937",
              "1939, when the experimental bank at Presbyterian Hospital opened for its trial period",
              "1940, when Drew titled his Columbia dissertation after the practice he was studying",
              "1941, when the first American Red Cross blood bank opened at Presbyterian Hospital",
            ],
            correctIndex: 0,
            explanation:
              "Bernard Fantus coined it in Chicago in 1937. The later dates are real dates in Drew's story, which is exactly why they are easy to attach to the wrong event.",
            sourceLessonSlug: "credited-wrong-both-ways",
          },
          {
            prompt: "Where did the first American hospital program that stored collected blood open?",
            options: [
              "Cook County Hospital, Chicago",
              "Presbyterian Hospital in New York, as a trial approved by its Medical Board in January 1939",
              "Freedmen's Hospital in Washington, where Drew later became Chief of Surgery in 1941",
              "Montreal General Hospital, where Drew studied shock with John Beattie in the 1930s",
            ],
            correctIndex: 0,
            explanation:
              "NLM says the first opened at Cook County Hospital in 1937 under Bernard Fantus. Presbyterian's experimental bank came two years later.",
            sourceLessonSlug: "four-claims-checked",
          },
          {
            prompt: "Who coined the term \"blood bank\"?",
            options: [
              "Bernard Fantus",
              "John Scudder, in the committee report that led Presbyterian Hospital to try a bank",
              "Charles Drew, in the title of his 1940 dissertation on blood preservation",
              "Oswald Robertson, the First World War medical officer who ran a small stored-blood service",
            ],
            correctIndex: 0,
            explanation:
              "Fantus, the director of the Cook County program. Both NLM and Drew's own dissertation say so.",
            sourceLessonSlug: "four-claims-checked",
          },
          {
            prompt: "What did Fantus say the term \"blood bank\" was not?",
            options: [
              "A mere metaphor",
              "A commercial arrangement, since donors in Chicago were never paid for their blood",
              "A permanent institution, since he expected it to close when the Depression ended",
              "A new idea, since Soviet surgeons had used the same phrase for a decade before him",
            ],
            correctIndex: 0,
            explanation:
              "Drew's dissertation quotes him: a hospital could not supply blood unless as much came in as went out, so the term was not a mere metaphor.",
            sourceLessonSlug: "four-claims-checked",
          },
          {
            prompt: "What makes Drew's own dissertation strong evidence against the claim that he invented the blood bank?",
            options: [
              "He credits Fantus in it",
              "It was written by a committee at Presbyterian Hospital and only signed by Drew",
              "It was rejected by Columbia and resubmitted after the Red Cross pilot had ended",
              "It never mentions blood banks, only plasma, so it cannot support an invention claim",
            ],
            correctIndex: 0,
            explanation:
              "The strongest witness against an over-credit is the subject himself. Drew records that Fantus instituted the system in March 1937 and named it.",
            sourceLessonSlug: "four-claims-checked",
          },
          {
            prompt: "What title does NLM's chronology give Drew in February 1941?",
            options: [
              "Assistant Director",
              "Director of the American Red Cross, the national post the popular story assigns him",
              "Medical Supervisor of the Blood Plasma Division of the National Blood Donor Service",
              "Chief of Surgery of the first American Red Cross Blood Bank in Washington, DC",
            ],
            correctIndex: 0,
            explanation:
              "The chronology reads \"Assistant Director of the first American Red Cross Blood Bank (Presbyterian Hospital, New York)\". Medical Supervisor was his Blood for Britain title in 1940.",
            sourceLessonSlug: "four-claims-checked",
          },
          {
            prompt: "What two changes turn the chronology's title into the popular claim?",
            options: [
              "\"First\" moves and \"Assistant\" drops",
              "\"Red Cross\" is replaced with \"National Research Council\" and the year moves to 1940",
              "\"Presbyterian\" is replaced with \"Howard\" and the word \"blood\" becomes \"plasma\"",
              "\"Pilot\" is added before \"program\" and the date is moved forward to 1942",
            ],
            correctIndex: 0,
            explanation:
              "In the chronology, \"first\" describes the bank. In the popular claim it describes the man, and \"Assistant\" is gone. Two small changes, one false title.",
            sourceLessonSlug: "four-claims-checked",
          },
          {
            prompt: "Whom does this course name as director of the first American Red Cross blood bank?",
            options: [
              "Nobody, since its sources do not say",
              "John Scudder, since he first proposed shipping plasma to the Allies in 1940",
              "Morris M. Davidson, since he was the volunteer director of the Blood Plasma Division",
              "Charles Drew, since the assistant director title was a formality at the time",
            ],
            correctIndex: 0,
            explanation:
              "The sources read for this course do not name who held the director's post, so the course does not guess. Davidson's title belonged to Blood for Britain, not to the Red Cross pilot.",
            sourceLessonSlug: "four-claims-checked",
          },
          {
            prompt: "Why does the course say \"early 1941\" for Drew's Red Cross appointment when it is not quoting?",
            options: [
              "NLM's own pages differ on the month",
              "Because the chronology gives no month at all for the Red Cross appointment",
              "Because the appointment was never actually made, and early 1941 is a placeholder",
              "Because the course prefers round figures to exact months in every one of its lessons",
            ],
            correctIndex: 0,
            explanation:
              "NLM's overview places it in January 1941, while its chronology and its chapter on these years say February. Where sources disagree, the course says what they agree on.",
            sourceLessonSlug: "four-claims-checked",
          },
          {
            prompt: "What does NLM say about the claim that Drew resigned in protest?",
            options: [
              "There is no evidence for it",
              "That it is confirmed by a letter of resignation held in the Drew Papers at Howard",
              "That he resigned from the National Research Council but not from the Red Cross",
              "That he resigned in protest in January 1942, the month the segregation policy was announced",
            ],
            correctIndex: 0,
            explanation:
              "NLM: there is no evidence that the exclusion policy was his reason for leaving the pilot program and not going on to direct the national project, as some accounts suggest.",
            sourceLessonSlug: "four-claims-checked",
          },
          {
            prompt: "When did Drew return to Howard after the Red Cross pilot program?",
            options: [
              "April 1941",
              "January 1942, the month the Red Cross announced it would take and segregate Black donors' blood",
              "November 1941, the month the National Blood Donor Service officially began",
              "December 1948, the month his first group of residents passed their board examinations",
            ],
            correctIndex: 0,
            explanation:
              "The Science History Institute says he returned in April 1941, after the three-month pilot, to build a top-level surgical program. NLM gives the same month.",
            sourceLessonSlug: "four-claims-checked",
          },
          {
            prompt: "What reasons for Drew's return to Howard does NLM give?",
            options: [
              "Family, and a plan he always had",
              "A dispute with John Scudder over credit for the Blood for Britain report",
              "A formal complaint from the armed forces about the pace of the pilot program",
              "An order from Columbia University requiring him to finish his residency elsewhere",
            ],
            correctIndex: 0,
            explanation:
              "He had been away from his wife and their first child for much of the previous year, and he had always expected to return to his faculty post at Howard.",
            sourceLessonSlug: "four-claims-checked",
          },
          {
            prompt: "What does the Science History Institute say Drew did about the blood policies?",
            options: [
              "He openly criticized them",
              "He resigned from the Red Cross the same week the exclusion policy took effect in 1941",
              "He approved them at the time and only criticized them after the war ended",
              "He stayed silent in public and objected only in private letters to the Red Cross",
            ],
            correctIndex: 0,
            explanation:
              "\"Drew openly criticized these policies.\" The documented record is sustained public criticism, which is more durable than the resignation nobody recorded.",
            sourceLessonSlug: "four-claims-checked",
          },
          {
            prompt: "How does NLM describe the stories that Drew died because he was refused treatment?",
            options: [
              "Repeatedly proved false",
              "Unresolved, since NLM takes no position on them in any of its pages",
              "Accurate, which is why NLM repeats them in its summary of the collection",
              "Beyond its scope, since NLM's pages cover only his scientific papers",
            ],
            correctIndex: 0,
            explanation:
              "NLM's collection summary says the stories were repeatedly proved false. The full correction is in Who Gets the Credit, lesson 17.",
            sourceLessonSlug: "four-claims-checked",
          },
          {
            prompt: "What pattern does lesson 2 find in three of the four popular claims?",
            options: [
              "Each is a true fact bent a little",
              "Each was invented from nothing by a single newspaper article published after 1950",
              "Each was first made by Drew himself and then withdrawn in his later letters",
              "Each comes from the Red Cross's own publicity during the Second World War",
            ],
            correctIndex: 0,
            explanation:
              "A real title with a word dropped, a real departure given an unrecorded motive, a real policy turned into a dramatic exit. Nearly true stories are the hardest to kill.",
            sourceLessonSlug: "four-claims-checked",
          },
          {
            prompt: "Why does lesson 2 say a correction that only says \"false\" tends to lose?",
            options: [
              "A nearly true story beats it",
              "Because readers distrust any correction that is shorter than the story it corrects",
              "Because corrections are never printed in the same places as the original stories",
              "Because a single word cannot carry a citation in the APA format the course uses",
            ],
            correctIndex: 0,
            explanation:
              "The correction that wins gives the true version and names the exact word that changed, so the reader can see how the nearly true story was made.",
            sourceLessonSlug: "four-claims-checked",
          },
          {
            prompt: "In the four-question method, what comes right after \"Which source says it?\"",
            options: [
              "What are its exact words?",
              "How many other sources repeat it, since a claim repeated widely is more likely true?",
              "Is the author a professional historian, and are they employed by a university?",
              "Was it published before or after the subject's death, since earlier is always better?",
            ],
            correctIndex: 0,
            explanation:
              "Exact wording is where claim drift shows: \"has been called\" is not \"invented\", and \"Assistant Director\" is not \"director\".",
            sourceLessonSlug: "four-claims-checked",
          },
          {
            prompt: "What is the last question in the course's method for checking a claim about a person?",
            options: [
              "Who does the flattering version push out?",
              "Would the subject's family approve of the claim if they were asked about it today?",
              "Does the claim appear in at least three textbooks published in the last decade?",
              "Can the claim be traced to the subject's own obituary in a national newspaper?",
            ],
            correctIndex: 0,
            explanation:
              "For Drew, the answer keeps coming back the same: Scudder, Fantus, the Presbyterian staff, the volunteers in nine hospitals, and Drew's own best work.",
            sourceLessonSlug: "four-claims-checked",
          },
          {
            prompt: "What does the course mean by \"claim drift\"?",
            options: [
              "Small retelling changes that make a true claim false",
              "The tendency of a correct claim to become more accurate the more often it is repeated",
              "The movement of a claim from a secondary source back into the primary documents",
              "A deliberate falsehood introduced by an institution to protect its own reputation",
            ],
            correctIndex: 0,
            explanation:
              "It is the course's own name for what happened to the chronology's title: a moved word and a dropped word, and a true statement became a false one.",
            sourceLessonSlug: "four-claims-checked",
          },
          {
            prompt: "Which of these is a primary source for Drew's work, in the course's sense?",
            options: [
              "His 1940 dissertation",
              "The Science History Institute's biography, written decades later from published accounts",
              "NLM's narrative chapter on his blood bank years, written for Profiles in Science",
              "A retelling of his life in a popular list of famous inventors",
            ],
            correctIndex: 0,
            explanation:
              "A primary source is a document made at the time by a participant. The dissertation and the 1941 project report are primary; NLM's narrative and the Science History Institute's biography are secondary.",
            sourceLessonSlug: "four-claims-checked",
          },
          {
            prompt: "What did the three-month Red Cross pilot program become the model for?",
            options: [
              "The National Blood Donor Service",
              "The Blood for Britain project, which followed it later in the same year",
              "The Presbyterian Hospital experimental bank, which opened after the pilot closed",
              "The Cook County Hospital blood bank, which copied its forms and procedures",
            ],
            correctIndex: 0,
            explanation:
              "The pilot, run in New York in early 1941, became the model for the National Blood Donor Service. Blood for Britain and the Presbyterian bank both came before it.",
            sourceLessonSlug: "four-claims-checked",
          },
          {
            prompt: "According to Drew's dissertation, when did Fantus set up the Cook County system?",
            options: [
              "March 1937",
              "August 1939, the month the experimental bank opened at Presbyterian Hospital",
              "September 1940, the month Drew was recalled to New York for Blood for Britain",
              "February 1941, the month NLM's chronology gives for the Red Cross appointment",
            ],
            correctIndex: 0,
            explanation:
              "Drew's dissertation dates it to March 1937. The other months are real months in Drew's own story, which is why they are easy to misattach.",
            sourceLessonSlug: "four-claims-checked",
          },
          {
            prompt: "What month does NLM's overview give for Drew's Red Cross appointment?",
            options: [
              "January 1941",
              "February 1941, which is the same month given by NLM's chronology and chapter",
              "April 1941, the month he returned to his faculty post at Howard University",
              "November 1941, the month the National Blood Donor Service officially began",
            ],
            correctIndex: 0,
            explanation:
              "The overview says the appointment came when Blood for Britain ended in January 1941. The chronology and the chapter say February, which is why the course says early 1941 when not quoting.",
            sourceLessonSlug: "four-claims-checked",
          },
          {
            prompt: "In NLM's chronology entry, what does the word \"first\" describe?",
            options: [
              "The bank",
              "Drew, as the first person ever appointed to any post in the Red Cross blood program",
              "The appointment, meaning the first of several posts Drew held during 1941",
              "The pilot program's director, whom the chronology names in the same entry",
            ],
            correctIndex: 0,
            explanation:
              "It says Assistant Director of the first American Red Cross Blood Bank. The popular story moves \"first\" onto the man.",
            sourceLessonSlug: "four-claims-checked",
          },
          {
            prompt: "Which popular claim does NLM answer with \"There is no evidence\"?",
            options: [
              "That he left in protest",
              "That he was the first African American to earn the Doctor of Medical Science at Columbia",
              "That he was born in Washington, DC, and grew up in the Foggy Bottom neighborhood",
              "That he was appointed to a post at the first American Red Cross blood bank in 1941",
            ],
            correctIndex: 0,
            explanation:
              "NLM finds no evidence that the exclusion policy was his reason for leaving the pilot program. The other three are things NLM affirms.",
            sourceLessonSlug: "four-claims-checked",
          },
          {
            prompt: "According to NLM, what did Drew NOT go on to do after the pilot program?",
            options: [
              "Direct the national project",
              "Chair the Department of Surgery at Howard, a post he took up in October 1941",
              "Examine candidates for the American Board of Surgery, which he began in October 1941",
              "Serve as Chief of Surgery at Freedmen's Hospital, from October 1941 onward",
            ],
            correctIndex: 0,
            explanation:
              "NLM's sentence is about his leaving the pilot and \"not continuing on to direct the national project\". The other three are things he did do, at Howard.",
            sourceLessonSlug: "four-claims-checked",
          },
          {
            prompt: "What goal does the Science History Institute say Drew returned to Howard to pursue?",
            options: [
              "A top surgical program for African Americans",
              "Running the National Blood Donor Service from a new headquarters in Washington",
              "Earning a second doctorate, this time in surgery rather than medical science",
              "Opening Howard's first blood bank, modeled on the one at Cook County Hospital",
            ],
            correctIndex: 0,
            explanation:
              "\"His long-term goal of establishing a top-level surgical program for African Americans.\" There is no protest in the sentence, and no national post.",
            sourceLessonSlug: "four-claims-checked",
          },
          {
            prompt: "In the four-question method, what does the third question ask about a source?",
            options: [
              "Whether it reports its own evidence",
              "Whether it was written by someone who knew the subject personally during his life",
              "Whether it has been translated into more than one language since it was published",
              "Whether it agrees with the majority of popular accounts published about the subject",
            ],
            correctIndex: 0,
            explanation:
              "Is the source reporting its own documents, or repeating another account? A repeated claim is only as good as the account it repeats.",
            sourceLessonSlug: "four-claims-checked",
          },
          {
            prompt: "What was the Red Cross pilot program, as lesson 2 defines it?",
            options: [
              "A three-month trial in New York",
              "A permanent national blood service run by the Army and Navy from 1938 to the end of the war",
              "The relief program that collected blood in New York hospitals to send plasma to Britain in 1940",
              "The experimental bank at Presbyterian Hospital that formed the basis of Drew's dissertation",
            ],
            correctIndex: 0,
            explanation:
              "A three-month Red Cross trial in New York in 1941, which became the model for the National Blood Donor Service. Blood for Britain and the Presbyterian bank were earlier and different.",
            sourceLessonSlug: "four-claims-checked",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 — The science, and the mentor
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "before-drew",
      title: "3 · Before Drew: who stored blood first",
      section: "Section 2 · The science, and the mentor",
      body: `Blood banking has a long prehistory, and the best short guide to it is a document Drew wrote himself. Chapter II of his 1940 dissertation, "Evolution of the Blood Bank", runs from page 10 to page 88, and it is a history of other people's work (Drew, 1940a). Here are the pieces that matter for the credit question.

**The problem storage had to solve.** Blood starts to change as soon as it leaves the body. It clots, its white cells break down, and the balance of its salts shifts (NLM, n.d.-a). Transfusion itself had become practical about thirty years before Drew's residency, when Karl Landsteiner and others identified the four basic blood groups, A, B, AB and O, so that donor and recipient could be matched (NLM, n.d.-e). But without storage, a donor had to be found at the moment of need.

**Before 1918: anticoagulant, sugar, cold.** Before the First World War, researchers found that sodium citrate kept blood from clotting and that dextrose would preserve it for up to two weeks under refrigeration. A First World War medical officer, Oswald Robertson, set up a temporary small-scale blood bank and performed twenty-two successful transfusions with stored blood (NLM, n.d.-a).

**The Soviet work, which Drew credited above all.** Soviet physicians built a large blood donation network and transfused stored cadaver blood successfully, work that many American researchers did not know about (NLM, n.d.-a). Drew knew it. His acknowledgements thank a translator for rendering "over twenty of the most important Russian works on blood transfusions" (Drew, 1940a, p. i). In 1944 he published an article whose title is its argument, "The Role of Soviet Investigators in the Development of the Blood Bank". It opens by crediting earlier workers, including investigators in Brussels, Buenos Aires, New York and France, then says the present world-wide institution of blood banks "does not, however, stem from any of these investigators. Fundamentally, it is a Russian contribution" (Drew, 1944, p. 360). You can weigh that judgment as you like; it appeared during the wartime alliance, in a journal of Soviet medicine. What you cannot do with it is make Drew the inventor. He named someone else.

**Barcelona, 1936.** During the Spanish Civil War, Durán Jordà organized the Barcelona Blood Transfusion Service for the Republican army. Drew called it "the best system of collection and distribution of blood yet devised" and reported that it distributed over 9,000 liters of blood (Drew, 1940a, p. 86).

**Chicago, 1937.** The first American hospital program that stored the blood it collected opened at Cook County Hospital in 1937, and its director, Bernard Fantus, coined the term "blood bank" (NLM, n.d.-a). Drew's account adds the results: by the end of its second year the Chicago bank had handled over four thousand transfusions, and by 1939 over eight thousand (Drew, 1940a, pp. 87-88).

**New York, 1929.** The city's leading hospitals, surgeons and blood researchers founded the Blood Transfusion Betterment Association in 1929 to supply tested donors on demand and to fund blood research (NLM, n.d.-a). Remember the name. It paid for much of Drew's experimental work, and it ran Blood for Britain.

**So what was left to do?** A great deal, and NLM says what. The programs that existed "varied in their staffing arrangements, facilities, equipment and lab protocols, donor recruitment, and other aspects", and there was still "no standardized procedure for collecting blood, preserving it from contamination and deterioration, and protecting transfusion recipients" (NLM, n.d.-a). Drew ends his history chapter with a caution, not a boast. Transfusions carried by "this new found power, the blood bank, may be overdone", he writes, and of blood itself, "its limitations must be recognized, its indications crystallized, and its indiscriminate use condemned" (Drew, 1940a, p. 88). The open problem in 1939 was not the idea of storing blood. It was knowing, with measurements, what storage did to blood, and building procedures that held up. That is where Drew's own work begins.

:::reveal What did Drew argue in his 1944 article about where blood banks came from? ||| That the world-wide institution of blood banks did not stem from the earlier investigators he listed, and was fundamentally a Russian contribution, growing out of Soviet work with cadaver blood.

:::reveal What problem remained unsolved when Drew began, according to NLM? ||| Not the idea of storing blood, but a standardized procedure for collecting it, protecting it from contamination and deterioration, and protecting the patients who received it.

## Vocabulary
- **Anticoagulant**: a substance that stops blood from clotting, such as sodium citrate.
- **Blood group**: one of the classes, A, B, AB or O, into which blood is sorted by the antigens it carries, which must be matched between donor and recipient.
- **Cadaver blood**: blood taken after death, which Soviet surgeons transfused successfully and which Drew traced as the root of the blood bank.
- **Blood Transfusion Betterment Association**: the New York body founded in 1929 that supplied tested donors, funded blood research, and later ran Blood for Britain.
- **Priority**: the question of who did or published something first, which Drew's own writing assigns to other people more than once.

## Sources
Drew, C. R. (1940a). *Banked blood: A study in blood preservation* [Doctoral dissertation, Columbia University]. Charles R. Drew Papers, Moorland-Spingarn Research Center, Howard University. National Library of Medicine Digital Collections. https://resource.nlm.nih.gov/101584649X142
Drew, C. R. (1944). The role of Soviet investigators in the development of the blood bank. *American Review of Soviet Medicine, 1*(4), 360-369. National Library of Medicine Digital Collections. https://resource.nlm.nih.gov/101584649X9
National Library of Medicine. (n.d.-a). *Becoming "the father of the blood bank," 1938-1941*. Profiles in Science: The Charles R. Drew Papers. https://profiles.nlm.nih.gov/spotlight/bg/feature/blood
National Library of Medicine. (n.d.-e). *Education and early medical career, 1922-1938*. Profiles in Science: The Charles R. Drew Papers. https://profiles.nlm.nih.gov/spotlight/bg/feature/education`,
    },
    {
      slug: "banked-blood",
      title: "4 · Banked Blood: the bank at Presbyterian and what it found",
      section: "Section 2 · The science, and the mentor",
      body: `The experimental bank that made Drew's name did not start as his idea, and it did not run on him alone. The dissertation he built from it says both of those things in its own pages. It also contains the work that was his.

**How the bank was approved.** In late November 1938, after discussions among the hospital's superintendent and Doctors Fordyce B. St. John, David C. Bull and John Scudder, Presbyterian Hospital's Medical Board was asked to endorse the appointment of a committee "to investigate the advisability of the use of a blood bank". The committee, chaired by St. John, reported on 30 January 1939 and recommended an experimental trial, and the Board agreed. Then came the division of labour: "Doctor John Scudder was appointed to direct the laboratory and experimental aspects of the project and Doctor Charles R. Drew to manage the bank and direct clinical investigations" (Drew, 1940a, pp. 205-208).

**How it ran.** The bank opened on 9 August 1939. The announcement sent to the house staff the next day called it "a trial period of four months" (Drew, 1940a, p. 209); it ran for seven (NLM, n.d.-a). The announcement is signed by three people, D. C. Bull, J. Scudder and C. R. Drew, and it turned the banking metaphor into a rule: to get blood from the bank, a ward had to have made "a deposit or incur a debit" that it paid back by sending in more donors (Drew, 1940a, p. 211). Every donation had to be typed and tested for syphilis, donors had to be screened, staff trained, and each step recorded on forms (NLM, n.d.-a).

**Who staffed it.** The dissertation lists the staff at the opening: a full-time nurse, Helen Stoddart; a part-time nurse; a chemist, Elizabeth Tuthill; two laboratory technicians; a part-time research chemist, Dr. Margaret E. Smith; two secretaries; and a nurse's aide. When one secretary left, "Mrs. Lenore Drew filled in", Drew's wife (Drew, 1940a, pp. 211-212). The acknowledgements go further. They thank Scudder, "who suggested this investigation and has actively participated in or guided nearly every step of it"; give Smith "the entire credit for working out the technique of the ammonia determinations"; and thank the nurse, spelled Stoddard there, as the one "in charge of the 'blood bank'" (Drew, 1940a, pp. i-ii).

**What the work found.** The dissertation runs to 356 pages, and most of it is measurement (Drew, 1940a). Its summary of clinical observations reaches conclusions like these (pp. 243-245):

- Stored blood "gradually becomes more toxic as a result of the increase of potassium in the plasma", as potassium leaks out of the aging red cells.
- Red cells keep better when the surface between cells and plasma is kept small. A flask had been designed to do this, and he recommended it as routine hospital equipment.
- Glucose in the preservative prevents the cells from breaking down, and the best preservative then available seemed to be "an isotonic citrate-saline-glucose solution".
- Whole blood could be stored about a week with full effect; after that, "it is advised that the plasma be removed from the cells and stored in saline for future use".
- "Banked blood is safe when its limitations are known."

One result points the other way, which is a mark of honest work. Among seventy-six patients given preserved blood, he found "no relation" between the potassium level in their plasma and whether they had a reaction (p. 242). The potassium limit was real, but it did not explain the ordinary reactions.

Read the fourth conclusion twice. Whole blood for a week, and the plasma kept after that, is the bridge from a hospital store to a wartime supply. Section 3 crosses it.

**The degree.** In June 1940 Columbia awarded Drew the Doctor of Medical Science, and NLM is precise: he became "the first African American to earn the degree there" (NLM, n.d.-b). *There* means Columbia. Retellings that stretch it to the whole country claim something this source does not.

**So whose bank was it?** Scudder's suggestion, a hospital committee's decision, a staff's daily labour, and Drew's management, clinical investigation and analysis. The honest credit is shared, and Drew's share is substantial: a 356-page study that turned a practice into measured rules. It is under-credited precisely because "he invented it" is easier to say.

:::reveal According to Drew's own dissertation, who suggested the investigation, and what was Drew appointed to do? ||| John Scudder suggested it and guided nearly every step. The hospital appointed Scudder to direct the laboratory and experimental side, and Drew to manage the bank and direct the clinical investigations.

:::reveal What did the dissertation advise doing with stored blood after about a week, and why does it matter? ||| Remove the plasma from the cells and store it in saline for future use. That rule is the bridge from a hospital blood bank to shipping plasma in wartime.

## Vocabulary
- **Plasma**: the fluid portion of blood, carrying proteins and salts but no cells.
- **Preservative**: the solution blood is stored in to slow its breakdown; the dissertation favoured citrate, saline and glucose.
- **Acknowledgements**: the part of a thesis in which the author names who helped, and one of the most direct credit records a historian can read.
- **Doctor of Medical Science**: the research doctorate Columbia awarded Drew in June 1940, the first earned there by an African American.
- **Experimental trial**: a bounded test of a new practice, which is what Presbyterian's Medical Board approved in January 1939.

## Sources
Drew, C. R. (1940a). *Banked blood: A study in blood preservation* [Doctoral dissertation, Columbia University]. Charles R. Drew Papers, Moorland-Spingarn Research Center, Howard University. National Library of Medicine Digital Collections. https://resource.nlm.nih.gov/101584649X142
National Library of Medicine. (n.d.-a). *Becoming "the father of the blood bank," 1938-1941*. Profiles in Science: The Charles R. Drew Papers. https://profiles.nlm.nih.gov/spotlight/bg/feature/blood
National Library of Medicine. (n.d.-b). *Biographical overview*. Profiles in Science: The Charles R. Drew Papers. https://profiles.nlm.nih.gov/spotlight/bg/feature/biographical-overview`,
    },
    {
      slug: "section-2-quiz",
      title: "Section 2 quiz · The science and the mentor",
      section: "Section 2 · The science, and the mentor",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does Chapter II of Drew's dissertation, \"Evolution of the Blood Bank\", consist of?",
            options: [
              "A history of others' work",
              "His own experiments on potassium in stored blood, with the tables of results",
              "The minutes of Presbyterian Hospital's Medical Board meetings from 1938 and 1939",
              "The plans for shipping plasma to Britain that he drafted with Scudder and Corwin",
            ],
            correctIndex: 0,
            explanation:
              "It runs from page 10 to page 88 and traces the work of others, from early transfusion to the blood bank concept. His own experiments come later in the dissertation.",
            sourceLessonSlug: "before-drew",
          },
          {
            prompt: "What happens to blood soon after it leaves the body?",
            options: [
              "It clots and its cells break down",
              "It separates into the four blood groups, which can then no longer be matched",
              "Nothing measurable for about two weeks, provided it is kept in a refrigerator",
              "It loses its sodium citrate, which the body produces only while blood circulates",
            ],
            correctIndex: 0,
            explanation:
              "It clots, the white cells break down, and the balance of its salts shifts. Storage was the attempt to slow all three.",
            sourceLessonSlug: "before-drew",
          },
          {
            prompt: "What made transfusion practical, according to NLM, before anyone could store blood?",
            options: [
              "Identifying the blood groups",
              "The refrigerated truck, which let fresh blood travel between city hospitals in the 1920s",
              "The discovery of plasma by the Barcelona Blood Transfusion Service in 1936",
              "Drew's potassium measurements at Presbyterian Hospital in 1939 and 1940",
            ],
            correctIndex: 0,
            explanation:
              "Karl Landsteiner and others identified the four basic groups, A, B, AB and O, so donor and recipient could be matched. Storage was a separate, later problem.",
            sourceLessonSlug: "before-drew",
          },
          {
            prompt: "Who does NLM credit with identifying the four basic blood groups?",
            options: [
              "Karl Landsteiner and others",
              "Bernard Fantus, while he was setting up the Cook County bank in Chicago in 1937",
              "Oswald Robertson, during his service as a medical officer in the First World War",
              "John Scudder, in the blood chemistry studies that came before Drew arrived",
            ],
            correctIndex: 0,
            explanation:
              "Landsteiner and others, about thirty years before Drew's residency. The other three are real figures in this history, attached to the wrong discovery.",
            sourceLessonSlug: "before-drew",
          },
          {
            prompt: "Before storage, what had to happen when a patient needed a transfusion?",
            options: [
              "A donor had to be found then",
              "The patient's own blood was drawn in advance and returned after the operation",
              "Plasma was sent from the nearest blood bank, usually within a day or two",
              "Blood was taken from a cadaver, which Soviet law required hospitals to keep",
            ],
            correctIndex: 0,
            explanation:
              "Without storage, a matched donor had to be found at the moment of need, which is the problem a blood bank solves.",
            sourceLessonSlug: "before-drew",
          },
          {
            prompt: "What did sodium citrate do for stored blood?",
            options: [
              "It kept blood from clotting",
              "It preserved red cells for up to two weeks by supplying them with sugar",
              "It killed bacteria in pooled plasma so that cultures were no longer needed",
              "It identified the donor's blood group without a separate laboratory test",
            ],
            correctIndex: 0,
            explanation:
              "Citrate is an anticoagulant. Dextrose, a sugar, was the ingredient that helped preserve the blood under refrigeration.",
            sourceLessonSlug: "before-drew",
          },
          {
            prompt: "What did researchers find dextrose could do, before the First World War?",
            options: [
              "Preserve refrigerated blood about two weeks",
              "Stop blood from clotting when added at the moment the blood was collected",
              "Separate plasma from red cells without needing a centrifuge or sedimentation",
              "Make cadaver blood safe to transfuse by neutralizing the toxins released at death",
            ],
            correctIndex: 0,
            explanation:
              "Dextrose would preserve blood for up to two weeks under refrigeration. Stopping clotting was citrate's job.",
            sourceLessonSlug: "before-drew",
          },
          {
            prompt: "Who set up a temporary small-scale blood bank during the First World War?",
            options: [
              "Oswald Robertson",
              "Durán Jordà, who organized a blood service for the Republican army in Spain",
              "Bernard Fantus, who later directed the blood bank at Cook County Hospital",
              "Karl Landsteiner, shortly after he identified the four basic blood groups",
            ],
            correctIndex: 0,
            explanation:
              "Robertson, a medical officer in that war, did twenty-two successful transfusions with stored blood, two decades before Chicago.",
            sourceLessonSlug: "before-drew",
          },
          {
            prompt: "How many successful transfusions with stored blood did Robertson perform?",
            options: [
              "Twenty-two",
              "Over four thousand, the figure Cook County had reached by the end of its second year",
              "14,556, the number of donations that Blood for Britain eventually collected",
              "Over eight thousand, the figure the Chicago bank had reached by 1939",
            ],
            correctIndex: 0,
            explanation:
              "Twenty-two. The larger numbers are real, and belong to Chicago and to Blood for Britain.",
            sourceLessonSlug: "before-drew",
          },
          {
            prompt: "What did Soviet physicians transfuse successfully, according to NLM?",
            options: [
              "Stored cadaver blood",
              "Dried plasma shipped to them from New York hospitals during the autumn of 1940",
              "Animal blood, which they found was compatible with every human blood group",
              "Placental blood only, since transfusing blood taken after death was forbidden there",
            ],
            correctIndex: 0,
            explanation:
              "They built a large donation network and transfused stored cadaver blood, work many American researchers did not know about. Drew did.",
            sourceLessonSlug: "before-drew",
          },
          {
            prompt: "How did Drew read the Soviet research on blood transfusion for his dissertation?",
            options: [
              "In translation",
              "In the original Russian, which he had learned during his years at McGill University",
              "Only in English summaries that NLM published long after his death",
              "He did not read it; Scudder summarized it for him in a memorandum in 1939",
            ],
            correctIndex: 0,
            explanation:
              "His acknowledgements thank a translator for rendering over twenty of the most important Russian works on blood transfusions.",
            sourceLessonSlug: "before-drew",
          },
          {
            prompt: "How many Russian works on transfusion do the acknowledgements say were translated for him?",
            options: [
              "Over twenty",
              "Two, both written by the Kharkov surgeon whose work on cadaver blood he admired",
              "Over two hundred, which was the whole Soviet literature on transfusion up to 1939",
              "None, since he worked only from French abstracts of the Russian papers",
            ],
            correctIndex: 0,
            explanation:
              "\"Over twenty of the most important Russian works on blood transfusions\", with further help from others on other articles and the Russian bibliography.",
            sourceLessonSlug: "before-drew",
          },
          {
            prompt: "What subject does the title of Drew's 1944 article name?",
            options: [
              "Soviet investigators",
              "His own work as medical supervisor of the Blood for Britain project in 1940",
              "The Red Cross decision to segregate Black donors' blood in January 1942",
              "The founding of the experimental blood bank at Presbyterian Hospital in 1939",
            ],
            correctIndex: 0,
            explanation:
              "\"The Role of Soviet Investigators in the Development of the Blood Bank\". The title is the argument: other people developed it.",
            sourceLessonSlug: "before-drew",
          },
          {
            prompt: "What did Drew's 1944 article call the world-wide institution of blood banks?",
            options: [
              "Fundamentally a Russian contribution",
              "An American invention that began at Cook County Hospital in Chicago in 1937",
              "A joint achievement of the Red Cross and the National Research Council",
              "The direct outcome of his own experimental bank at Presbyterian Hospital",
            ],
            correctIndex: 0,
            explanation:
              "He wrote that it did not stem from the earlier investigators he listed and was \"fundamentally ... a Russian contribution\", grown from work on cadaver blood.",
            sourceLessonSlug: "before-drew",
          },
          {
            prompt: "Why does lesson 3 say you may weigh the 1944 article's judgment as you like?",
            options: [
              "Its wartime Soviet-journal setting",
              "Because it was published anonymously, so its author cannot be known for certain",
              "Because it was written before the dissertation and later superseded by it",
              "Because it is a newspaper interview rather than an article Drew wrote himself",
            ],
            correctIndex: 0,
            explanation:
              "It appeared during the wartime alliance, in a journal of Soviet medicine, which is context worth weighing. It still names someone other than Drew.",
            sourceLessonSlug: "before-drew",
          },
          {
            prompt: "Whatever you make of the 1944 article, what does lesson 3 say you cannot do with it?",
            options: [
              "Make Drew the inventor",
              "Use it as evidence, because journal articles from wartime are not accepted as sources",
              "Quote from it, because the text is still under copyright and cannot be reproduced",
              "Date it, because the Drew Papers do not record when or where it was published",
            ],
            correctIndex: 0,
            explanation:
              "The article credits others with the blood bank. A document in which the subject names someone else cannot support the claim that he invented it.",
            sourceLessonSlug: "before-drew",
          },
          {
            prompt: "Which service did Drew call \"the best system of collection and distribution of blood yet devised\"?",
            options: [
              "Barcelona's",
              "Chicago's, where Fantus's bank had handled over eight thousand transfusions by 1939",
              "New York's, where the Betterment Association had supplied tested donors since 1929",
              "Presbyterian's, where he managed the experimental bank during its trial",
            ],
            correctIndex: 0,
            explanation:
              "The Barcelona Blood Transfusion Service, organized by Durán Jordà during the Spanish Civil War. Drew praised it in his own dissertation.",
            sourceLessonSlug: "before-drew",
          },
          {
            prompt: "For whom was the Barcelona Blood Transfusion Service organized?",
            options: [
              "Spain's Republican army",
              "The British Red Cross, as a model for the plasma it later received from New York",
              "The Soviet army, which lent Spanish doctors its methods for cadaver blood",
              "Civilian hospitals in Catalonia that had no connection with the war",
            ],
            correctIndex: 0,
            explanation:
              "Durán Jordà organized it for the Republican army during the Spanish Civil War, according to Drew's dissertation.",
            sourceLessonSlug: "before-drew",
          },
          {
            prompt: "How much blood does Drew report the Barcelona service distributed?",
            options: [
              "Over 9,000 liters",
              "About 5,500 liters of plasma saline, the total later produced for Blood for Britain",
              "4,712 liters, the amount delivered to the Red Cross for shipment by January 1941",
              "222 liters, the size of a single shipment later lost at sea in the Atlantic",
            ],
            correctIndex: 0,
            explanation:
              "Over 9,000 liters, by Drew's account. The other figures are real and belong to Blood for Britain, which is why they are tempting.",
            sourceLessonSlug: "before-drew",
          },
          {
            prompt: "How many transfusions had the Chicago bank handled by the end of its second year?",
            options: [
              "Over four thousand",
              "Twenty-two, the number Robertson performed with stored blood in the First World War",
              "Over nine thousand, the figure Drew gives for the Barcelona service",
              "Seventy-six, the number of patients Drew followed for potassium and reactions",
            ],
            correctIndex: 0,
            explanation:
              "Over four thousand by the end of its second year, and over eight thousand by 1939, according to Drew's dissertation.",
            sourceLessonSlug: "before-drew",
          },
          {
            prompt: "In what year was the Blood Transfusion Betterment Association founded?",
            options: [
              "1929",
              "1937, the year Fantus opened the Cook County bank and coined its name",
              "1939, the year the experimental bank opened at Presbyterian Hospital",
              "1940, the year it launched Blood for Britain with the Red Cross",
            ],
            correctIndex: 0,
            explanation:
              "New York's leading hospitals, surgeons and blood researchers founded it in 1929. It later funded Drew's work and ran Blood for Britain.",
            sourceLessonSlug: "before-drew",
          },
          {
            prompt: "What two jobs was the Blood Transfusion Betterment Association founded to do?",
            options: [
              "Supply donors and fund research",
              "Run the Red Cross pilot program and certify surgeons for the American Board of Surgery",
              "Collect cadaver blood and translate the Soviet literature on transfusion into English",
              "Train nurses for blood banks and sell plasma to hospitals at commercial prices",
            ],
            correctIndex: 0,
            explanation:
              "To provide reliable, tested donors on demand and to support blood research financially.",
            sourceLessonSlug: "before-drew",
          },
          {
            prompt: "Which later program did the Blood Transfusion Betterment Association run?",
            options: [
              "Blood for Britain",
              "The National Blood Donor Service, which officially began in November 1941",
              "The Cook County Hospital blood bank, which it funded from its founding in 1937",
              "The Barcelona Blood Transfusion Service during the Spanish Civil War",
            ],
            correctIndex: 0,
            explanation:
              "It ran Blood for Britain with the Red Cross in 1940, which is why lesson 3 asks you to remember the name.",
            sourceLessonSlug: "before-drew",
          },
          {
            prompt: "According to NLM, what did the blood programs that existed before Drew lack?",
            options: [
              "A standardized procedure",
              "Any donors at all, since the public would not give blood before the war began",
              "Refrigerators, which hospitals could not buy until after the Second World War",
              "Any way of matching blood groups between the donor and the recipient",
            ],
            correctIndex: 0,
            explanation:
              "They varied in staffing, facilities, equipment, lab protocols and donor recruitment, and there was no standardized procedure for collecting, preserving and protecting.",
            sourceLessonSlug: "before-drew",
          },
          {
            prompt: "How does Drew end his chapter on the history of the blood bank?",
            options: [
              "With a caution",
              "With a claim that he had designed the first American blood bank himself",
              "With a tribute to the Red Cross for funding his fellowship at Columbia",
              "With a floor plan for a national network of blood banks under one director",
            ],
            correctIndex: 0,
            explanation:
              "He warns that transfusions carried by the new power of the blood bank may be overdone, and that blood's limitations must be recognized and its indiscriminate use condemned.",
            sourceLessonSlug: "before-drew",
          },
          {
            prompt: "At the end of his history chapter, what did Drew say about the indiscriminate use of blood?",
            options: [
              "It must be condemned",
              "It was the main reason the Cook County bank had reached eight thousand transfusions by 1939",
              "It should be encouraged in wartime, when every hospital would need stored blood",
              "It was a problem only for cadaver blood and not for blood from living donors",
            ],
            correctIndex: 0,
            explanation:
              "\"Its limitations must be recognized, its indications crystallized, and its indiscriminate use condemned.\" A pioneer's caution, not a boast.",
            sourceLessonSlug: "before-drew",
          },
          {
            prompt: "What does lesson 3 say was the open problem in 1939?",
            options: [
              "Measuring what storage did to blood",
              "Persuading anyone at all that blood could be stored, since nobody had yet tried it",
              "Finding a name for the practice, which Drew supplied in the title of his thesis",
              "Obtaining permission from the Red Cross to open hospital blood banks in New York",
            ],
            correctIndex: 0,
            explanation:
              "The idea of storing blood already existed. What was missing was measured knowledge of what storage did, and procedures that held up.",
            sourceLessonSlug: "before-drew",
          },
          {
            prompt: "Who suggested the investigation that became Drew's dissertation, according to his acknowledgements?",
            options: [
              "John Scudder",
              "Bernard Fantus, whose Chicago bank the dissertation describes in its history chapter",
              "Fordyce B. St. John, who chaired the hospital committee on the blood bank",
              "Drew himself, as the acknowledgements make clear in their opening line",
            ],
            correctIndex: 0,
            explanation:
              "Scudder, \"who suggested this investigation and has actively participated in or guided nearly every step of it\", in Drew's own words.",
            sourceLessonSlug: "banked-blood",
          },
          {
            prompt: "Who chaired the Presbyterian Hospital committee on the advisability of a blood bank?",
            options: [
              "Fordyce B. St. John",
              "John Scudder, who was later appointed to direct the laboratory side of the bank",
              "Charles Drew, who was then a Rockefeller fellow in Scudder's surgical laboratory",
              "David C. Bull, whose name appears first on the announcement to the house staff",
            ],
            correctIndex: 0,
            explanation:
              "St. John chaired it. Bull sat on it. Scudder took part in the discussions that led to it.",
            sourceLessonSlug: "banked-blood",
          },
          {
            prompt: "When did the committee report to Presbyterian's Medical Board?",
            options: [
              "30 January 1939",
              "9 August 1939, which is the day the experimental bank actually opened",
              "June 1940, the month Columbia awarded Drew the Doctor of Medical Science",
              "March 1937, the month Fantus instituted the bank at Cook County Hospital",
            ],
            correctIndex: 0,
            explanation:
              "The committee reported on 30 January 1939 and recommended an experimental trial. The bank opened that August.",
            sourceLessonSlug: "banked-blood",
          },
          {
            prompt: "What did the committee recommend?",
            options: [
              "An experimental trial",
              "A permanent blood bank with a full-time paid director, starting at once",
              "Closing the hospital's donor service in favour of buying blood from Chicago",
              "Waiting until the Red Cross had published national standards for blood banks",
            ],
            correctIndex: 0,
            explanation:
              "That the method be given an experimental trial, which the Board then resolved to make.",
            sourceLessonSlug: "banked-blood",
          },
          {
            prompt: "What was John Scudder appointed to direct at the Presbyterian bank?",
            options: [
              "The laboratory and experimental side",
              "The clinical investigations and the day-to-day management of the bank",
              "The recruitment of donors through the New York chapter of the Red Cross",
              "The hospital as a whole, as its superintendent during the trial",
            ],
            correctIndex: 0,
            explanation:
              "Scudder was to direct the laboratory and experimental aspects. Managing the bank and directing clinical investigations was Drew's appointment.",
            sourceLessonSlug: "banked-blood",
          },
          {
            prompt: "What was Drew appointed to do at the Presbyterian bank?",
            options: [
              "Manage it and direct clinical work",
              "Chair the committee that decided whether the hospital should have a bank at all",
              "Direct the laboratory and experimental aspects while Scudder saw patients",
              "Serve as its only physician, with no other doctors involved in the trial",
            ],
            correctIndex: 0,
            explanation:
              "\"To manage the bank and direct clinical investigations\", alongside Scudder's laboratory role and a staff of nurses, chemists and technicians.",
            sourceLessonSlug: "banked-blood",
          },
          {
            prompt: "On what date did the experimental bank at Presbyterian Hospital open?",
            options: [
              "9 August 1939",
              "30 January 1939, the day the committee reported to the Medical Board",
              "15 August 1940, the day Presbyterian began collecting for Blood for Britain",
              "February 1941, the month NLM's chronology gives for Drew's Red Cross appointment there",
            ],
            correctIndex: 0,
            explanation:
              "Actual operation began on 9 August 1939. The other dates are real dates at the same hospital, for different events.",
            sourceLessonSlug: "banked-blood",
          },
          {
            prompt: "How long did the announcement to the house staff say the trial would last?",
            options: [
              "Four months",
              "Seven months, which is also how long NLM says the bank actually ran",
              "One year, with a report due to the Medical Board at the end of 1940",
              "Three months, the same length as the Red Cross pilot program in 1941",
            ],
            correctIndex: 0,
            explanation:
              "\"A trial period of four months.\" NLM says it ran for seven, a small reminder that plans and records are different documents.",
            sourceLessonSlug: "banked-blood",
          },
          {
            prompt: "How long does NLM say the Presbyterian experiment ran?",
            options: [
              "Seven months",
              "Four months, exactly as the announcement to the house staff had planned",
              "Three months, after which it became the first Red Cross blood bank",
              "Eight years, until Drew left New York for the last time in 1947",
            ],
            correctIndex: 0,
            explanation:
              "Seven months, and it was a success that became the basis of the dissertation. The announcement had planned four.",
            sourceLessonSlug: "banked-blood",
          },
          {
            prompt: "Who signed the announcement of the experimental bank to the house staff?",
            options: [
              "Bull, Scudder and Drew",
              "Drew alone, as the physician in charge of managing the bank",
              "The superintendent and the chairman of the Medical Board, on the hospital's behalf",
              "Fantus and Scudder, on behalf of the Blood Transfusion Betterment Association",
            ],
            correctIndex: 0,
            explanation:
              "D. C. Bull, J. Scudder and C. R. Drew. Three names on the document, which is the credit the record gives.",
            sourceLessonSlug: "banked-blood",
          },
          {
            prompt: "What rule did the announcement set for a ward that wanted blood from the bank?",
            options: [
              "Deposit first, or repay with donors",
              "Pay a fee per bottle, set by the hospital according to the commercial price of blood",
              "Obtain written approval from the Medical Board for each transfusion requested",
              "Use the blood within forty-eight hours, since older blood could not be issued",
            ],
            correctIndex: 0,
            explanation:
              "A ward had to have made \"a deposit or incur a debit\" repaid by sending in more donors. The banking metaphor became a working rule.",
            sourceLessonSlug: "banked-blood",
          },
          {
            prompt: "Besides being typed, what was every donation at the Presbyterian bank tested for?",
            options: [
              "Syphilis",
              "Merthiolate, which had to be present before the blood could be stored",
              "Plasma protein, which disqualified any donor whose level was above average",
              "Potassium, since any donor with a high level was turned away at the door",
            ],
            correctIndex: 0,
            explanation:
              "Each donation was typed and tested for syphilis, one of the diseases transfusion could transmit, and donors were screened for obvious health problems.",
            sourceLessonSlug: "banked-blood",
          },
          {
            prompt: "Who was the full-time nurse at the opening of the Presbyterian bank?",
            options: [
              "Helen Stoddart",
              "Elizabeth Tuthill, who is listed on the staff at the opening as the bank's chemist",
              "Margaret E. Smith, who is listed as the part-time research chemist",
              "Lenore Drew, who is recorded as filling in when a secretary left",
            ],
            correctIndex: 0,
            explanation:
              "Helen Stoddart, spelled Stoddard in the acknowledgements, where Drew calls her the one in charge of the blood bank.",
            sourceLessonSlug: "banked-blood",
          },
          {
            prompt: "How does the dissertation spell the nurse's surname in the acknowledgements?",
            options: [
              "Stoddard",
              "Stoddart, exactly as in the staff list, since the dissertation spells it one way throughout",
              "It does not name her there at all, and refers only to the nursing staff",
              "It gives only her first name, Helen, with no surname at all",
            ],
            correctIndex: 0,
            explanation:
              "Stoddart in the staff list, Stoddard in the acknowledgements. The course prints both rather than silently choosing one.",
            sourceLessonSlug: "banked-blood",
          },
          {
            prompt: "Who filled in at the Presbyterian bank when a secretary left?",
            options: [
              "Lenore Drew",
              "Helen Stoddart, who took on the secretarial work in addition to nursing",
              "Margaret E. Smith, who gave up her chemistry work to keep the records",
              "John Scudder, who kept the records himself for the rest of the trial",
            ],
            correctIndex: 0,
            explanation:
              "\"Mrs. Lenore Drew filled in.\" Drew's wife appears in the staff record of the bank he managed.",
            sourceLessonSlug: "banked-blood",
          },
          {
            prompt: "To whom do the acknowledgements give \"the entire credit\" for working out the ammonia technique?",
            options: [
              "Dr. Margaret Smith",
              "John Scudder, who suggested the investigation and guided nearly every step",
              "Elizabeth Tuthill, whom the acknowledgements call co-author of the sodium method",
              "Drew himself, who describes the technique as his own original contribution",
            ],
            correctIndex: 0,
            explanation:
              "Smith gets the entire credit for the ammonia determinations; Tuthill is thanked as co-author of the sodium method. Drew assigns credit precisely.",
            sourceLessonSlug: "banked-blood",
          },
          {
            prompt: "What did the dissertation find happens to stored blood over long periods?",
            options: [
              "It grows more toxic",
              "It becomes safer, because the potassium in the plasma gradually disappears",
              "It changes blood group, so that it must be typed again before every use",
              "It stays exactly as it was, provided the bottle is sealed and kept cold",
            ],
            correctIndex: 0,
            explanation:
              "It \"gradually becomes more toxic as a result of the increase of potassium in the plasma\", as potassium leaks from the aging red cells.",
            sourceLessonSlug: "banked-blood",
          },
          {
            prompt: "What makes long-stored blood more toxic, according to the dissertation?",
            options: [
              "Rising potassium in the plasma",
              "Falling glucose, which lets bacteria grow in any bottle more than a week old",
              "The sodium citrate, which turns poisonous after about two weeks in storage",
              "Merthiolate, the preservative added to each pool before it was shipped",
            ],
            correctIndex: 0,
            explanation:
              "The increase of potassium in the plasma. He also outlined when that made stored blood unsuitable.",
            sourceLessonSlug: "banked-blood",
          },
          {
            prompt: "What did Drew find about potassium levels and transfusion reactions in seventy-six patients?",
            options: [
              "No relation",
              "A direct relation, so that every patient with a reaction had received high-potassium blood",
              "An inverse relation, so that high-potassium blood protected patients from reactions",
              "He could not measure it, because potassium could not yet be detected in plasma",
            ],
            correctIndex: 0,
            explanation:
              "He found no relation between patients' plasma potassium and the occurrence of reactions. Reporting a result that cuts against your own hypothesis is a mark of honest work.",
            sourceLessonSlug: "banked-blood",
          },
          {
            prompt: "What did the dissertation say about the surface between cells and plasma in storage?",
            options: [
              "Keep it small",
              "Make it as large as possible, so the plasma can absorb oxygen from the air",
              "Remove it by shaking the bottle every day to keep cells and plasma mixed",
              "Ignore it, since the shape of the container makes no difference to the blood",
            ],
            correctIndex: 0,
            explanation:
              "Blood keeps better when the interface between cells and plasma is kept to a minimum, and he recommended a flask designed for it as routine equipment.",
            sourceLessonSlug: "banked-blood",
          },
          {
            prompt: "What did glucose do in the preservative, according to the dissertation?",
            options: [
              "It prevented the cells breaking down",
              "It stopped the blood from clotting, which made citrate unnecessary",
              "It killed bacteria, so that pools no longer needed to be cultured",
              "It raised the potassium level, which made old blood safer to give",
            ],
            correctIndex: 0,
            explanation:
              "Glucose \"definitely prevents hemolysis\", keeps the pH near neutral, and lengthens the life of the cells.",
            sourceLessonSlug: "banked-blood",
          },
          {
            prompt: "Which preservative did the dissertation judge the best then available?",
            options: [
              "Citrate-saline-glucose",
              "Merthiolate in a one to ten thousand dilution, as later used for Blood for Britain",
              "Plain refrigeration with no additive, which avoided every chemical risk",
              "Carbon dioxide gas alone, bubbled through each bottle before it was sealed",
            ],
            correctIndex: 0,
            explanation:
              "\"An isotonic citrate-saline-glucose solution.\" Merthiolate was an antibacterial added to plasma pools later, a different purpose.",
            sourceLessonSlug: "banked-blood",
          },
          {
            prompt: "What did the dissertation advise doing with stored blood after about a week?",
            options: [
              "Separate and keep the plasma",
              "Pour it away, since blood more than seven days old was always unsafe to give",
              "Return it to the donor, who could take it back as a transfusion if ever needed",
              "Freeze the whole blood, which would preserve the red cells indefinitely",
            ],
            correctIndex: 0,
            explanation:
              "\"It is advised that the plasma be removed from the cells and stored in saline for future use.\" That rule is the bridge to Blood for Britain.",
            sourceLessonSlug: "banked-blood",
          },
          {
            prompt: "Which sentence from the dissertation's summary states its view of stored blood's safety?",
            options: [
              "\"Banked blood is safe when its limitations are known.\"",
              "\"Banked blood is dangerous under all conditions and should be given only when fresh blood cannot be obtained at all.\"",
              "\"Banked blood is as safe as fresh blood for every purpose, whatever its age or container.\"",
              "\"Banked blood cannot be judged until the Red Cross has adopted national standards for it.\"",
            ],
            correctIndex: 0,
            explanation:
              "Safe when its limitations are known, which is exactly what the measurements were for.",
            sourceLessonSlug: "banked-blood",
          },
          {
            prompt: "How long is Drew's dissertation, Banked Blood?",
            options: [
              "356 pages",
              "64 pages, about the length of the 1941 report on the plasma project for England",
              "38 pages, a short thesis followed by a book-length published version",
              "10 pages, the length of his 1944 article in a journal of Soviet medicine",
            ],
            correctIndex: 0,
            explanation:
              "NLM's catalogue record gives 356 pages. Most of it is measurement.",
            sourceLessonSlug: "banked-blood",
          },
          {
            prompt: "In NLM's sentence about Drew's degree, what does the word \"there\" mean?",
            options: [
              "Columbia",
              "The United States as a whole, making him the first African American with the degree anywhere",
              "New York State, where several universities awarded the Doctor of Medical Science",
              "Presbyterian Hospital, which awarded its own research degree to its fellows",
            ],
            correctIndex: 0,
            explanation:
              "\"The first African American to earn the degree there\" means at Columbia. Retellings that stretch it to the whole country claim something the source does not.",
            sourceLessonSlug: "banked-blood",
          },
          {
            prompt: "Why does lesson 4 say Drew's share of the Presbyterian work is under-credited?",
            options: [
              "\"He invented it\" is easier to say",
              "Because the dissertation credits Drew alone and names no one else who helped",
              "Because the dissertation was never completed or submitted to Columbia",
              "Because the Presbyterian bank failed and closed after its first week",
            ],
            correctIndex: 0,
            explanation:
              "The simple claim crowds out the real one: management, clinical investigation, and a 356-page study that turned a practice into measured rules.",
            sourceLessonSlug: "banked-blood",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 — Scale: Blood for Britain
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "blood-for-britain",
      title: "5 · Blood for Britain: what large-scale meant",
      section: "Section 3 · Scale: Blood for Britain",
      body: `In the summer of 1940 Britain was under sustained German bombing and desperately short of blood and plasma to treat military and civilian casualties. Members of the Blood Transfusion Betterment Association met with representatives of the National Research Council and the American Red Cross, and the result was a relief program, Blood for Britain, to collect blood at New York hospitals and ship plasma to England. It had a second purpose that mattered as much: to gather the research, the administrative data and the experience needed to launch a nationwide program if the United States entered the war (NLM, n.d.-a).

**Why plasma, not whole blood.** Plasma is the fluid part of blood, without the cells. It cannot carry oxygen, but it works well to replace lost fluid and treat shock, and for a war it has advantages whole blood lacks: it keeps longer without refrigeration, it survives being shaken in transport, it can be given to a patient of any blood type, and it is much less likely to transmit disease (NLM, n.d.-a; Science History Institute, n.d.). The dissertation's rule, whole blood for a week and the plasma saved after that, was the laboratory version of this decision.

**Who proposed it, and who drew it up.** The project's own report, dated 31 January 1941, credits "Dr. John Scudder, who first proposed the shipment of blood plasma to the Allies" (Blood Transfusion Association, 1941, p. 15). A committee of three, E. H. L. Corwin, Drew and Scudder, submitted a report dated 1 July 1940 on what the cooperating hospitals would need: staff, floor space, supplies, serology, bacteriology and supervision (p. 5). NLM calls this the blueprint, with the Presbyterian bank as its organizational template (NLM, n.d.-a).

**Drew's job, and its exact title.** Drew went back to Howard in June 1940 (NLM, n.d.-a). In September he was recalled, because the Association found it needed a full-time Medical Supervisor and Scudder could give the work only part of his time (Blood Transfusion Association, 1941, p. 8). The report's credit line is precise. Drew, "as Medical Supervisor, had charge of coordinating the medical aspects of the program, establishing uniform records, standard equipment and criteria in order to insure the safety of the final product" (p. 15). Administration was someone else's: Morris M. Davidson "served as a full-time volunteer as Director of the Blood Plasma Division in charge of the administrative work of the project" (p. 15). NLM's overview says Drew was called back "to direct the Blood for Britain project" (NLM, n.d.-b), which is shorthand for the medical side, and the report shows what the shorthand compresses. It also records that officers and the Board's doctors served without pay, and that the Association's "only paid medical staff" was the full-time Medical Supervisor (p. 13).

**The size of it.** Six hospitals began work between 15 August and 4 September 1940, Presbyterian first and Mount Sinai the next day, and three more joined by 2 December: nine in all (pp. 8-9). At the peak, appointments ran at 1,200 to 1,300 donations a week (p. 9). The last blood was taken on 17 January 1941. The totals: 18,861 donor appointments, 14,556 donations, and about 5,500 liters of plasma in saline produced (p. 11), with some two thousand volunteer workers taking part (p. 14). Of that plasma, 4,712 liters had been delivered to the Red Cross for shipment when the report was written, and one shipment of 222 liters went down with the S.S. *Western Prince* (p. 42).

**Why the numbers do not quite agree.** NLM says the program "shipped (via the Red Cross) over 5,000 liters of plasma saline solution to England" (NLM, n.d.-a). The Science History Institute says "more than 14,000 blood donations were collected and 5,000 liters of plasma shipped" (Science History Institute, n.d.). The report counted plasma produced, plasma delivered and plasma lost, which are three different numbers, and secondary sources round and pick one. When you cite a figure, say which one it is.

**Why "large-scale" is the precise claim.** Cook County had banked blood since 1937, and Barcelona had distributed thousands of liters. What was new here was the combination: nine hospitals, thousands of volunteer donors, and a biological product that had to arrive sterile after an ocean crossing in wartime, all run to one standard. The report itself called it "this first large project of its kind" (p. 42). That is the claim NLM makes for Drew, and it is a better claim than invention, because it is true and because it was hard.

:::reveal What was Drew's exact title on Blood for Britain, and what did the project's report say he had charge of? ||| Medical Supervisor. The report says he had charge of coordinating the medical aspects of the program, establishing uniform records, standard equipment and criteria to insure the safety of the final product.

:::reveal Why do the published plasma totals for Blood for Britain differ? ||| Because the report counted plasma produced (about 5,500 liters), delivered (4,712 liters when it was written) and lost, and secondary sources round and choose one of those numbers.

## Vocabulary
- **Medical Supervisor**: Drew's title on Blood for Britain, in charge of the medical side of the program, as distinct from its administrative direction.
- **Shock**: a collapse of circulation after heavy blood or fluid loss, which plasma could treat by restoring volume.
- **Plasma saline**: plasma diluted with sterile salt solution, the form in which Blood for Britain's plasma was packed and shipped.
- **Blood Plasma Division**: the part of the Blood Transfusion Association that ran the project, with a volunteer director for administration and Drew as Medical Supervisor.

## Sources
Blood Transfusion Association. (1941). *Report of the Blood Transfusion Association concerning the project for supplying blood plasma to England, which has been carried on jointly with the American Red Cross from August, 1940, to January, 1941*. Charles R. Drew Papers, Moorland-Spingarn Research Center, Howard University. National Library of Medicine Digital Collections. https://resource.nlm.nih.gov/101584649X141
National Library of Medicine. (n.d.-a). *Becoming "the father of the blood bank," 1938-1941*. Profiles in Science: The Charles R. Drew Papers. https://profiles.nlm.nih.gov/spotlight/bg/feature/blood
National Library of Medicine. (n.d.-b). *Biographical overview*. Profiles in Science: The Charles R. Drew Papers. https://profiles.nlm.nih.gov/spotlight/bg/feature/biographical-overview
Science History Institute. (n.d.). *Charles Richard Drew*. https://www.sciencehistory.org/education/scientific-biographies/charles-richard-drew/`,
    },
    {
      slug: "one-standard",
      title: "6 · Nine hospitals, one standard",
      section: "Section 3 · Scale: Blood for Britain",
      body: `Running a program at scale is a different skill from running a laboratory, and the record of Blood for Britain shows the difference in the one place it could not be hidden: contamination.

**The problem.** Plasma pools that had been cultured at the hospitals and found free of bacteria later grew bacteria when they were tested again (Blood Transfusion Association, 1941, p. 50). Then word came from England. On 14 November 1940 a cable reached Scudder from Dr. A. N. Drury of Britain's Medical Research Council: "Sterility tests upon random samples of saline plasma unsatisfactory." A second cable reported that of eight flagons tested, four were contaminated, and identified them (Drew, 1940b, p. 1).

**How Drew wrote it up.** His two-page report, signed "Charles R. Drew, Medical Supervisor", traces each bad bottle to its hospital and pool. It is frank about his own home institution: on the day two of the bottles were dispensed, three of Presbyterian's seven pools were contaminated, and "this period was definitely the worst period in the operating experience of Presbyterian Hospital" (Drew, 1940b, p. 1). Then it states the cause. The contaminated flasks "were all prepared and shipped in August before the technique had been thoroughly worked out; before establishment of the central laboratory; before each pool was tested separately" (p. 2). He did not blame the British tests or play down the failure. He described what had been missing, and the list is the list of what had since been built.

**What was built.** At Drew's request, Dr. Frank L. Meleney, director of the surgical bacteriology laboratory at Presbyterian, met the hospital bacteriologists on 30 September 1940 to work out tighter controls (Blood Transfusion Association, 1941, p. 50). What came out of it:

- a **central laboratory** at Presbyterian Hospital, under Meleney's direction and the supervision of Miss Balbina Johnson, to which a sample of every pool from every hospital was sent for further tests for sterility and toxicity (p. 52);
- **every pool cultured** aerobically and anaerobically before it went into final containers (p. 52);
- a preservative, merthiolate, added to each pool at a fixed dilution (p. 52);
- **uniform records**. Each hospital had begun with its own bookkeeping, which caused "great confusion" at the central office, so the program moved to one master book and one serial numbering scheme for donors, pools, cartons and bottles, so that any container could be traced (p. 61).

NLM credits the core of this to him directly: under his direction the collection procedures, equipment and record-keeping were standardized, and he designated the central laboratory for the final check (NLM, n.d.-a). He also drew up the specifications to which a cream-separator centrifuge, of the kind stockyard laboratories used on cattle blood, was redesigned to separate human plasma faster (Blood Transfusion Association, 1941, p. 104).

**What it cost to learn.** The report's own accounting: of 6,151 liters of plasma saline produced or in process, 361 were found contaminated at the hospitals and 160 in the central laboratory; with breakage, clotting and material held back for further tests, 581 liters, 9.4 percent, were lost through all causes (p. 60). Screening mattered too: of the 14,556 donations, 151 were rejected for serological evidence of syphilis (p. 50). The report draws the lesson for "any large scale program": every step should be checked by cultures "at repeated intervals" before the product is released (p. 60).

**Then the next step.** In early 1941 Drew became assistant director of a three-month Red Cross pilot in New York set up to mass-produce dried plasma, and there he introduced mobile collection units, later called bloodmobiles. The pilot became the model for the National Blood Donor Service (NLM, n.d.-a). NLM also quotes an in-house Red Cross history saying his report on Blood for Britain "had brought together, for the benefit of hematologists working everywhere, the latest knowledge acquired by scientists working in several different fields" (as quoted in NLM, n.d.-a).

**Why this is the under-credited part.** Nobody puts "established uniform records" on a poster. But a product pooled from nine hospitals is only as safe as the worst hospital's worst day, and the record names that day. Central checking, tracing and one standard are what turned nine separate operations into one program. That is scientific work, and NLM is plain about whose it was: Drew "didn't 'discover' plasma as a blood substitute", but "his expertise and leadership were largely responsible for the program's success" (NLM, n.d.-a).

:::reveal What did Drew's November 1940 report give as the cause of the contaminated plasma found in England? ||| The flasks were all prepared and shipped in August, before the technique was worked out, before the central laboratory existed, and before each pool was tested separately.

:::reveal Name three controls the program adopted after the contamination problem appeared. ||| A central laboratory at Presbyterian that retested a sample of every pool, cultures of every pool before final packing, and uniform records with serial numbers so any container could be traced.

## Vocabulary
- **Sterility test**: a culture of a sample to see whether bacteria grow in it, repeated over days because a sample that looks clean at first can grow bacteria later.
- **Pool**: plasma from several donors combined in one container before being divided into shipping bottles.
- **Central laboratory**: the single laboratory at Presbyterian Hospital that retested samples from every hospital's pools before release.
- **Quality control**: the routine checks that make a product safe every time rather than usually, which is what a program at scale depends on.
- **Bloodmobile**: a mobile blood collection unit, introduced during the 1941 Red Cross pilot.

## Sources
Blood Transfusion Association. (1941). *Report of the Blood Transfusion Association concerning the project for supplying blood plasma to England, which has been carried on jointly with the American Red Cross from August, 1940, to January, 1941*. Charles R. Drew Papers, Moorland-Spingarn Research Center, Howard University. National Library of Medicine Digital Collections. https://resource.nlm.nih.gov/101584649X141
Drew, C. R. (1940b). *A report on the contaminated plasma discovered in England* [Report]. Charles R. Drew Papers, Moorland-Spingarn Research Center, Howard University. National Library of Medicine Digital Collections. https://resource.nlm.nih.gov/101584649X26
National Library of Medicine. (n.d.-a). *Becoming "the father of the blood bank," 1938-1941*. Profiles in Science: The Charles R. Drew Papers. https://profiles.nlm.nih.gov/spotlight/bg/feature/blood`,
    },
    {
      slug: "section-3-quiz",
      title: "Section 3 quiz · Blood for Britain",
      section: "Section 3 · Scale: Blood for Britain",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Which bodies came together to organize Blood for Britain?",
            options: [
              "The Association, the NRC and the Red Cross",
              "The British Medical Research Council, the Army Medical Corps and Columbia University",
              "Howard University, Freedmen's Hospital and the NAACP, working with the War Department",
              "Cook County Hospital, the Mayo Clinic and the Rockefeller Foundation's General Education Board",
            ],
            correctIndex: 0,
            explanation:
              "Members of the Blood Transfusion Betterment Association met with representatives of the National Research Council and the American Red Cross.",
            sourceLessonSlug: "blood-for-britain",
          },
          {
            prompt: "Besides helping Britain, what second purpose did Blood for Britain have?",
            options: [
              "Preparing for a national program",
              "Testing whether British donors could be recruited to give blood for American hospitals",
              "Raising money for the Presbyterian Hospital blood bank to continue after its trial",
              "Proving that whole blood could be shipped across the Atlantic without any refrigeration",
            ],
            correctIndex: 0,
            explanation:
              "It was meant to gather the research, administrative data and experience needed to launch a nationwide program if the United States entered the war.",
            sourceLessonSlug: "blood-for-britain",
          },
          {
            prompt: "What can plasma NOT do that whole blood can?",
            options: [
              "Carry oxygen",
              "Replace fluid lost through bleeding, which only whole blood with its cells can do",
              "Treat shock, since shock can be reversed only by restoring red cells",
              "Travel by ship, since plasma spoils within hours unless kept frozen",
            ],
            correctIndex: 0,
            explanation:
              "Plasma has no red cells, so it carries no oxygen. It does replace fluid and treat shock, which is why it suited a war.",
            sourceLessonSlug: "blood-for-britain",
          },
          {
            prompt: "What did plasma do well enough to make it the choice for Blood for Britain?",
            options: [
              "Replace fluid and treat shock",
              "Carry oxygen to the tissues as effectively as fresh whole blood straight from a donor",
              "Supply platelets for patients with bleeding disorders caused by low platelet counts",
              "Restore white cells, and with them the blood's power to fight infection",
            ],
            correctIndex: 0,
            explanation:
              "It works well to replace fluids and treat shock, and it keeps and travels better than whole blood.",
            sourceLessonSlug: "blood-for-britain",
          },
          {
            prompt: "Which of these is an advantage of plasma over whole blood that lesson 5 lists?",
            options: [
              "It can go to any blood type",
              "It carries more oxygen per liter than whole blood does after the first week of storage",
              "It needs no testing for disease, since plasma cannot carry any infection at all",
              "It can be collected without a donor, from blood already stored at Cook County",
            ],
            correctIndex: 0,
            explanation:
              "It can be given to a patient of any blood type, it keeps longer, survives shaking in transport, and is much less likely to transmit disease.",
            sourceLessonSlug: "blood-for-britain",
          },
          {
            prompt: "How does lesson 5 connect the dissertation to the choice of plasma?",
            options: [
              "Its week-then-plasma rule",
              "The dissertation was written after Blood for Britain and simply reported its results",
              "The dissertation argued against plasma, and Blood for Britain proved it wrong",
              "The dissertation dealt only with Soviet cadaver blood and did not mention plasma",
            ],
            correctIndex: 0,
            explanation:
              "Whole blood for about a week, then the plasma separated and kept in saline: the laboratory version of the decision to ship plasma.",
            sourceLessonSlug: "blood-for-britain",
          },
          {
            prompt: "Who does the 1941 report credit with first proposing the shipment of plasma to the Allies?",
            options: [
              "John Scudder",
              "Charles Drew, as the first act of his new appointment as Medical Supervisor",
              "Morris M. Davidson, the volunteer Director of the Blood Plasma Division",
              "Frank L. Meleney, the bacteriologist who later ran the central laboratory",
            ],
            correctIndex: 0,
            explanation:
              "\"Dr. John Scudder, who first proposed the shipment of blood plasma to the Allies.\" The project's own credit list starts the idea with him.",
            sourceLessonSlug: "blood-for-britain",
          },
          {
            prompt: "Which three men made up the committee whose report of 1 July 1940 set out what the hospitals would need?",
            options: [
              "Corwin, Drew and Scudder",
              "Stetten, Rhoads and Davidson, the three officers who ran the Association's board",
              "Fantus, Robertson and Landsteiner, as outside advisers on stored blood",
              "St. John, Bull and Dochez, the members of the Presbyterian blood bank committee",
            ],
            correctIndex: 0,
            explanation:
              "E. H. L. Corwin, Drew and Scudder. NLM calls their work the blueprint for Blood for Britain.",
            sourceLessonSlug: "blood-for-britain",
          },
          {
            prompt: "What date does the 1941 report give for that committee's report on the hospitals' requirements?",
            options: [
              "1 July 1940",
              "16 August 1940, the day the program officially opened to donors in New York",
              "30 September 1940, the day the bacteriologists met to tighten the controls",
              "14 November 1940, the day the first cable about contamination arrived from England",
            ],
            correctIndex: 0,
            explanation:
              "The committee submitted a report dated July 1st. The other dates are real later dates in the same project.",
            sourceLessonSlug: "blood-for-britain",
          },
          {
            prompt: "What served as the organizational template for Blood for Britain, according to NLM?",
            options: [
              "The Presbyterian bank",
              "The Barcelona Blood Transfusion Service, which the British Red Cross asked New York to copy",
              "The Cook County Hospital blood bank, whose director was invited to run the program",
              "The Soviet donation network, whose methods Drew had read about in translation",
            ],
            correctIndex: 0,
            explanation:
              "The experimental bank at Presbyterian served as the template, scaled up enormously for six and then nine hospitals.",
            sourceLessonSlug: "blood-for-britain",
          },
          {
            prompt: "When did Drew return to Howard after drafting the Blood for Britain blueprint?",
            options: [
              "June 1940",
              "January 1941, when the last blood for Britain had been taken",
              "April 1941, after three months as assistant director of the Red Cross pilot",
              "October 1941, when he was appointed chairman of the Department of Surgery",
            ],
            correctIndex: 0,
            explanation:
              "He went back to Howard in June 1940 and was recalled to New York in September. April 1941 is his later return, after the pilot.",
            sourceLessonSlug: "blood-for-britain",
          },
          {
            prompt: "When was Drew recalled to New York to work on Blood for Britain?",
            options: [
              "September 1940",
              "August 1939, when the experimental bank opened at Presbyterian Hospital",
              "February 1941, when he took up the post at the first Red Cross blood bank",
              "January 1942, when the Red Cross changed its policy on Black donors",
            ],
            correctIndex: 0,
            explanation:
              "The report says he was recalled in September from teaching duties in Washington that he had just taken up.",
            sourceLessonSlug: "blood-for-britain",
          },
          {
            prompt: "Why did the Association need a full-time Medical Supervisor?",
            options: [
              "Scudder had only part of his time",
              "Because the Red Cross refused to let any of its own staff supervise hospital work",
              "Because the British government required a named American doctor to sign every shipment",
              "Because the Association had no doctors of its own and had to hire one from Britain",
            ],
            correctIndex: 0,
            explanation:
              "Scudder could devote only part of his time to supervision because of his hospital and research duties, so Drew was recalled full time.",
            sourceLessonSlug: "blood-for-britain",
          },
          {
            prompt: "What was Drew's title on Blood for Britain, as the project's own report gives it?",
            options: [
              "Medical Supervisor",
              "Director of the Blood Plasma Division, in charge of all administrative work",
              "Chairman of the Board of Medical Control, which oversaw the participating hospitals",
              "Director of the American Red Cross blood program for the whole of New York City",
            ],
            correctIndex: 0,
            explanation:
              "Medical Supervisor. The Director of the Blood Plasma Division was Morris M. Davidson, and the Board of Medical Control had its own chairman.",
            sourceLessonSlug: "blood-for-britain",
          },
          {
            prompt: "What does the 1941 report say Drew, as Medical Supervisor, had charge of?",
            options: [
              "Coordinating the medical aspects",
              "Raising the money for the project from the Red Cross and the Association's trustees",
              "Recruiting donors through radio broadcasts and newspaper publicity campaigns",
              "Negotiating the shipping space for plasma cartons with the British government",
            ],
            correctIndex: 0,
            explanation:
              "Coordinating the medical aspects of the program, establishing uniform records, standard equipment and criteria to insure the safety of the final product.",
            sourceLessonSlug: "blood-for-britain",
          },
          {
            prompt: "Who was the Director of the Blood Plasma Division, in charge of administration?",
            options: [
              "Morris M. Davidson",
              "Charles Drew, who held both the medical and the administrative posts at once",
              "John Scudder, who also acted as director of the work at Presbyterian Hospital",
              "DeWitt Stetten, who was vice-president of the Blood Transfusion Association",
            ],
            correctIndex: 0,
            explanation:
              "Davidson served as a full-time volunteer Director of the Blood Plasma Division. The medical side was Drew's.",
            sourceLessonSlug: "blood-for-britain",
          },
          {
            prompt: "How was Morris M. Davidson's work on Blood for Britain paid?",
            options: [
              "It was not; he volunteered",
              "By the British government, which paid a fee for each liter of plasma delivered",
              "By the Red Cross, which employed him as a member of its national staff",
              "By Presbyterian Hospital, which lent him from its administrative office",
            ],
            correctIndex: 0,
            explanation:
              "He served as a full-time volunteer. The report says the Association's only paid medical staff was the full-time Medical Supervisor.",
            sourceLessonSlug: "blood-for-britain",
          },
          {
            prompt: "Who, according to the report, made up the Association's only paid medical staff?",
            options: [
              "The full-time Medical Supervisor",
              "The Board of Medical Control, whose doctors each received a fee per meeting",
              "The hospital bacteriologists, whom the Association paid by the number of cultures",
              "The Red Cross nurses who received donors at the entrance of each hospital",
            ],
            correctIndex: 0,
            explanation:
              "Officers and the Board's doctors served without pay. The only paid medical staff was the full-time Medical Supervisor, Drew.",
            sourceLessonSlug: "blood-for-britain",
          },
          {
            prompt: "Which hospital began collecting for Blood for Britain first?",
            options: [
              "Presbyterian",
              "Mount Sinai, which started a full week before any of the other hospitals",
              "Jewish Hospital of Brooklyn, which joined in December and led from then on",
              "Memorial Hospital, which began on 4 September with the New York Post Graduate",
            ],
            correctIndex: 0,
            explanation:
              "Presbyterian began on 15 August 1940 and Mount Sinai the next day. Memorial began in September and Jewish Hospital of Brooklyn in December.",
            sourceLessonSlug: "blood-for-britain",
          },
          {
            prompt: "How many hospitals took part in Blood for Britain in all?",
            options: [
              "Nine",
              "Six, since no hospital joined after the first group began in August and September",
              "Twenty, every hospital that had offered to cooperate before the work started",
              "Fourteen, one for each thousand donations the program eventually collected",
            ],
            correctIndex: 0,
            explanation:
              "Six began between 15 August and 4 September 1940, and three more joined by 2 December, for nine.",
            sourceLessonSlug: "blood-for-britain",
          },
          {
            prompt: "At the peak, about how many donation appointments a week did the program make?",
            options: [
              "1,200 to 1,300",
              "14,556, the total number of donations taken over the whole life of the program",
              "About 5,500, which is closer to the number of liters of plasma saline produced",
              "Twenty-two, the number of transfusions Robertson gave with stored blood",
            ],
            correctIndex: 0,
            explanation:
              "At the peak, appointments for 1,200 to 1,300 donations a week were being made at the hospitals.",
            sourceLessonSlug: "blood-for-britain",
          },
          {
            prompt: "When was the last blood for Blood for Britain taken?",
            options: [
              "17 January 1941",
              "16 August 1940, the day the program officially opened in New York",
              "14 November 1940, the day the first cable about contamination arrived",
              "1 April 1941, just before Drew returned to Howard University",
            ],
            correctIndex: 0,
            explanation:
              "The program wound down after England said supply to about February 1941 would be enough, and the last blood was taken on 17 January 1941.",
            sourceLessonSlug: "blood-for-britain",
          },
          {
            prompt: "How many donations did Blood for Britain actually take?",
            options: [
              "14,556",
              "18,861, which was the total number of donor appointments the program made",
              "6,151, the number of liters produced or in process by the end of the project",
              "4,712, the number of liters delivered to the Red Cross by January 1941",
            ],
            correctIndex: 0,
            explanation:
              "14,556 donations from 18,861 appointments. Keeping appointments, donations and liters apart is the whole skill.",
            sourceLessonSlug: "blood-for-britain",
          },
          {
            prompt: "How many donor appointments did the program make?",
            options: [
              "18,861",
              "14,556, the number of donations that were actually taken from volunteers",
              "5,500, the approximate number of liters of plasma saline produced",
              "2,000, the approximate number of volunteer workers who took part",
            ],
            correctIndex: 0,
            explanation:
              "18,861 appointments, of which 14,556 became donations. Appointments are not donations.",
            sourceLessonSlug: "blood-for-britain",
          },
          {
            prompt: "About how much plasma saline did the report say was produced?",
            options: [
              "About 5,500 liters",
              "About 9,000 liters, the figure Drew gave for the Barcelona service in 1936",
              "About 222 liters, since most of the plasma was lost when a ship was sunk",
              "About 14,556 liters, one liter for each donation taken during the program",
            ],
            correctIndex: 0,
            explanation:
              "Conservatively estimated at about 5,500,000 cc, or 5,500 liters, subject to completion of tests.",
            sourceLessonSlug: "blood-for-britain",
          },
          {
            prompt: "About how many volunteer workers took part in the Association's and hospitals' share of the work?",
            options: [
              "About two thousand",
              "About two hundred, all of them paid staff lent by the nine participating hospitals",
              "About 18,861, since every donor was also counted as a volunteer worker",
              "About twenty, the members of the Board of Medical Control and their assistants",
            ],
            correctIndex: 0,
            explanation:
              "Approximately two thousand volunteer workers, not counting the Red Cross's own extensive work.",
            sourceLessonSlug: "blood-for-britain",
          },
          {
            prompt: "What happened to one shipment of 222 liters of plasma?",
            options: [
              "It was lost at sea",
              "It was found contaminated in the central laboratory and destroyed in New York",
              "It was diverted to the United States Army after the Red Cross pilot began",
              "It was returned from England because the British no longer needed it",
            ],
            correctIndex: 0,
            explanation:
              "It went down with the S.S. Western Prince. A wartime supply line loses things that a hospital store never has to count.",
            sourceLessonSlug: "blood-for-britain",
          },
          {
            prompt: "Why do published totals for Blood for Britain's plasma differ from source to source?",
            options: [
              "They count different things",
              "Because the report itself gives no totals, so later writers had to estimate them",
              "Because NLM and the Science History Institute describe two different programs",
              "Because the report counted only donations and never measured liters of plasma",
            ],
            correctIndex: 0,
            explanation:
              "Produced, delivered and lost are three different numbers, and secondary sources round and pick one. Say which figure you are citing.",
            sourceLessonSlug: "blood-for-britain",
          },
          {
            prompt: "What did the 1941 report call Blood for Britain?",
            options: [
              "The first large project of its kind",
              "The first blood bank ever established anywhere in the United States of America",
              "A failure, owing to the contaminated plasma found in England in November",
              "A private experiment of Presbyterian Hospital, unconnected with the Red Cross",
            ],
            correctIndex: 0,
            explanation:
              "\"This first large project of its kind.\" Large, not first ever: the same distinction NLM draws.",
            sourceLessonSlug: "blood-for-britain",
          },
          {
            prompt: "Why does lesson 5 call \"large-scale\" a better claim than invention?",
            options: [
              "It is true, and it was hard",
              "Because it is vaguer, and a vague claim is harder for critics to disprove",
              "Because the Red Cross adopted it officially as Drew's title in 1941",
              "Because it makes Drew the first person to store blood anywhere in America",
            ],
            correctIndex: 0,
            explanation:
              "Nine hospitals, thousands of donors, and a product that had to arrive sterile after an ocean crossing in wartime, run to one standard.",
            sourceLessonSlug: "blood-for-britain",
          },
          {
            prompt: "What happened to some plasma pools that the hospitals had cultured and found free of bacteria?",
            options: [
              "They later grew bacteria",
              "They were shipped at once and arrived in England in perfect condition",
              "They were used in New York because England had cancelled its orders",
              "They were mixed with whole blood so that they could be given to any patient",
            ],
            correctIndex: 0,
            explanation:
              "Pools found sterile on culture revealed bacteria on later examination, which is why a single early test was not enough.",
            sourceLessonSlug: "one-standard",
          },
          {
            prompt: "On what date did the cable about unsatisfactory sterility tests reach Scudder?",
            options: [
              "14 November 1940",
              "30 September 1940, the day the bacteriologists met at Drew's request",
              "17 January 1941, the day the last blood for the program was taken",
              "1 July 1940, the date of the committee's report on the hospitals' needs",
            ],
            correctIndex: 0,
            explanation:
              "On 14 November 1940 a cable from Dr. A. N. Drury reported that sterility tests on random samples were unsatisfactory.",
            sourceLessonSlug: "one-standard",
          },
          {
            prompt: "Who sent the cable reporting unsatisfactory sterility tests?",
            options: [
              "Dr. A. N. Drury",
              "Frank L. Meleney, from the central laboratory at Presbyterian Hospital",
              "DeWitt Stetten, chairman of the Board of Medical Control in New York",
              "The captain of the S.S. Western Prince, which was carrying the plasma",
            ],
            correctIndex: 0,
            explanation:
              "Dr. A. N. Drury of the Medical Research Council of Great Britain.",
            sourceLessonSlug: "one-standard",
          },
          {
            prompt: "Of the eight flagons tested in England, how many were found contaminated?",
            options: [
              "Four",
              "All eight, which led the British to reject the whole program's output",
              "None, since the cable had been sent in error and was later withdrawn",
              "One, from a hospital that could never afterwards be identified",
            ],
            correctIndex: 0,
            explanation:
              "The second cable reported eight flagons tested and four contaminated, and identified the pools they came from.",
            sourceLessonSlug: "one-standard",
          },
          {
            prompt: "How did Drew sign his report on the contaminated plasma?",
            options: [
              "As Medical Supervisor",
              "As Director of the American Red Cross Blood Bank at Presbyterian Hospital",
              "As chairman of the Department of Surgery at Howard University",
              "He did not sign it; the report was issued anonymously by the Association",
            ],
            correctIndex: 0,
            explanation:
              "\"Blood Plasma Division, Charles R. Drew, Medical Supervisor.\" The signature is the title the record gives him.",
            sourceLessonSlug: "one-standard",
          },
          {
            prompt: "What did Drew's report say about his own home hospital in the period when the bad bottles were made?",
            options: [
              "It was Presbyterian's worst period",
              "That Presbyterian had no contamination at all and the problem lay elsewhere",
              "That Presbyterian's pools had been tested three times and were beyond doubt",
              "That Presbyterian had stopped collecting for the program by then",
            ],
            correctIndex: 0,
            explanation:
              "\"This period was definitely the worst period in the operating experience of Presbyterian Hospital.\" He did not spare his own institution.",
            sourceLessonSlug: "one-standard",
          },
          {
            prompt: "When were all the contaminated flasks prepared and shipped, according to Drew?",
            options: [
              "In August",
              "In January 1941, in the final weeks after supply had been cut back",
              "In November, after the central laboratory had been set up",
              "In December, when the Jewish Hospital of Brooklyn joined the program",
            ],
            correctIndex: 0,
            explanation:
              "All in August, before the technique had been worked out, before the central laboratory, and before each pool was tested separately.",
            sourceLessonSlug: "one-standard",
          },
          {
            prompt: "What did Drew's report give as the cause of the contamination?",
            options: [
              "Controls not yet in place in August",
              "Faulty British laboratory tests, which had mistaken harmless particles for bacteria",
              "Sabotage at the shipping warehouse, which was never proved but widely suspected",
              "Donors who had lied about their health when screened at the hospitals",
            ],
            correctIndex: 0,
            explanation:
              "Before the technique was worked out, before the central laboratory, before separate testing of each pool. He named what was missing.",
            sourceLessonSlug: "one-standard",
          },
          {
            prompt: "How does lesson 6 characterize the way Drew handled the failure?",
            options: [
              "He named what had been missing",
              "He blamed the British laboratory tests and asked for the samples to be sent back",
              "He kept the cables private and reported the problem only after the war",
              "He resigned as Medical Supervisor and handed the program to Scudder",
            ],
            correctIndex: 0,
            explanation:
              "He neither blamed the tests nor minimized the failure. His list of what was missing is the list of what had since been built.",
            sourceLessonSlug: "one-standard",
          },
          {
            prompt: "Who was Frank L. Meleney?",
            options: [
              "Presbyterian's bacteriology director",
              "The British scientist who sent the cable reporting contaminated plasma",
              "The volunteer Director of the Blood Plasma Division in charge of administration",
              "The superintendent of Presbyterian Hospital when the experimental bank opened",
            ],
            correctIndex: 0,
            explanation:
              "Director of the Surgical Bacteriology Laboratory at Presbyterian, asked to act as the Association's consultant on sterility.",
            sourceLessonSlug: "one-standard",
          },
          {
            prompt: "When did the hospital bacteriologists meet to work out tighter controls?",
            options: [
              "30 September 1940",
              "14 November 1940, on the same day the cable arrived from England",
              "15 August 1940, before any hospital had begun collecting blood",
              "17 January 1941, after the last blood had been taken",
            ],
            correctIndex: 0,
            explanation:
              "The meeting was held on 30 September, after pools found sterile at first had grown bacteria on later testing.",
            sourceLessonSlug: "one-standard",
          },
          {
            prompt: "At whose request did Meleney meet the hospital bacteriologists?",
            options: [
              "Drew's",
              "The British Medical Research Council's, sent through the Red Cross in London",
              "The Red Cross's national headquarters, which demanded a meeting in writing",
              "Presbyterian Hospital's Medical Board, which had approved the 1939 trial",
            ],
            correctIndex: 0,
            explanation:
              "At the request of the Medical Supervisor, which is to say Drew.",
            sourceLessonSlug: "one-standard",
          },
          {
            prompt: "Where was the program's central laboratory?",
            options: [
              "Presbyterian Hospital",
              "Mount Sinai Hospital, which had the largest bacteriology department in the city",
              "The Red Cross warehouse where the cartons waited for shipping space",
              "The Medical Research Council's laboratory in England, where plasma was retested",
            ],
            correctIndex: 0,
            explanation:
              "At Presbyterian, under Meleney's direction and the supervision of Miss Balbina Johnson.",
            sourceLessonSlug: "one-standard",
          },
          {
            prompt: "Who supervised the work of the central laboratory under Meleney?",
            options: [
              "Miss Balbina Johnson",
              "Helen Stoddart, who had been the full-time nurse at the 1939 experimental bank",
              "Margaret E. Smith, who had worked out the ammonia technique for the dissertation",
              "Lenore Drew, who had filled in as a secretary at the Presbyterian bank",
            ],
            correctIndex: 0,
            explanation:
              "The report places the central laboratory under Meleney's directorship and Miss Balbina Johnson's supervision, and credits the two with the bacteriological tests.",
            sourceLessonSlug: "one-standard",
          },
          {
            prompt: "What did every hospital send to the central laboratory?",
            options: [
              "A sample of every pool",
              "Every bottle of plasma, which was then repacked at the central laboratory",
              "A written report once a month, without any samples of the plasma itself",
              "Only the pools that had already failed their first test at the hospital",
            ],
            correctIndex: 0,
            explanation:
              "A sample of every pool, for additional tests for sterility and toxicity before release.",
            sourceLessonSlug: "one-standard",
          },
          {
            prompt: "How were pools to be cultured at each hospital before going into final containers?",
            options: [
              "Aerobically and anaerobically",
              "Only once, on the day of collection, since later tests were thought unnecessary",
              "Only in England, after shipment, by the Medical Research Council",
              "Not at all, since merthiolate was believed to make culturing unnecessary",
            ],
            correctIndex: 0,
            explanation:
              "Each pool was to be tested both aerobically and anaerobically before it was put into final containers.",
            sourceLessonSlug: "one-standard",
          },
          {
            prompt: "Which preservative was added to each pool at a fixed dilution?",
            options: [
              "Merthiolate",
              "Sodium citrate, which kept the whole blood from clotting in the collection bottle",
              "Glucose, which the dissertation had shown prevented red cells breaking down",
              "Ammonium sulfide, which was added to neutralize mercury in every shipping bottle",
            ],
            correctIndex: 0,
            explanation:
              "Merthiolate, an antibacterial, was added to each pool in a quantity to guarantee a fixed dilution.",
            sourceLessonSlug: "one-standard",
          },
          {
            prompt: "Why did the program move to uniform records?",
            options: [
              "Separate bookkeeping caused confusion",
              "Because the British government refused plasma that arrived without a Red Cross label",
              "Because the donors complained that their names were being published",
              "Because the Association's accountants would not audit handwritten ledgers",
            ],
            correctIndex: 0,
            explanation:
              "Each hospital began with its own bookkeeping, which caused \"great confusion\" when the central office tried to summarize the records.",
            sourceLessonSlug: "one-standard",
          },
          {
            prompt: "What did one master book and one serial numbering scheme make possible?",
            options: [
              "Tracing any container",
              "Paying each donor a fixed fee per bottle, recorded against their serial number",
              "Skipping the central laboratory's tests for hospitals with good records",
              "Selling surplus plasma to commercial laboratories at the market price",
            ],
            correctIndex: 0,
            explanation:
              "Donors, pools, cartons and bottles numbered in one scheme meant any container could be traced back through the process.",
            sourceLessonSlug: "one-standard",
          },
          {
            prompt: "What does NLM say was standardized under Drew's direction?",
            options: [
              "Procedures, equipment and records",
              "The donors' blood groups, which he restricted to type O for the whole program",
              "The price of plasma, which he fixed at the commercial rate charged in Chicago",
              "The shipping routes, which he negotiated with the British Admiralty",
            ],
            correctIndex: 0,
            explanation:
              "The collection procedures, equipment and record-keeping, and he designated the central laboratory for the final bacteriological check.",
            sourceLessonSlug: "one-standard",
          },
          {
            prompt: "What machine was redesigned to specifications drawn up by the Medical Supervisor?",
            options: [
              "A cream-separator centrifuge",
              "A refrigerated truck for carrying plasma cartons from the hospitals to the warehouse",
              "A drying machine for plasma, built by a physicist on Dr. Rhoads's staff",
              "A mobile collection unit, the first of the vehicles later called bloodmobiles",
            ],
            correctIndex: 0,
            explanation:
              "A DeLaval separator centrifuge, of the kind stockyard laboratories used on cattle blood, redesigned to separate human plasma faster.",
            sourceLessonSlug: "one-standard",
          },
          {
            prompt: "Where had centrifuges of the cream-separator type already been used on blood?",
            options: [
              "In stockyard laboratories",
              "In the Barcelona Blood Transfusion Service during the Spanish Civil War",
              "At Cook County Hospital, where Fantus had used one since 1937",
              "In the Soviet cadaver-blood program that Drew described in 1944",
            ],
            correctIndex: 0,
            explanation:
              "Reports said one or two of the larger stockyard laboratories separated cattle blood into plasma and cells with them.",
            sourceLessonSlug: "one-standard",
          },
          {
            prompt: "How many liters of plasma saline does the report say were produced or in process?",
            options: [
              "6,151",
              "581, which is the total the report records as lost through all causes",
              "14,556, one liter for each of the donations taken during the program",
              "361, the amount that was found contaminated at the hospitals themselves",
            ],
            correctIndex: 0,
            explanation:
              "6,151 liters produced or in process, of which 581 were lost through all causes.",
            sourceLessonSlug: "one-standard",
          },
          {
            prompt: "What share of the plasma saline was lost through all causes, according to the report?",
            options: [
              "9.4 percent",
              "1.03 percent, the share of donations rejected because of syphilis",
              "50 percent, since half the pools failed their first sterility test",
              "Nothing, since every contaminated pool was caught before shipment",
            ],
            correctIndex: 0,
            explanation:
              "581 liters, 9.4 percent, lost to contamination found at the hospitals and the central laboratory, breakage, clotting, and material held for further tests.",
            sourceLessonSlug: "one-standard",
          },
          {
            prompt: "Of the 14,556 donations, how many were rejected for serological evidence of syphilis?",
            options: [
              "151",
              "581, the number of liters of plasma lost through all causes",
              "4,712, the number of liters delivered to the Red Cross",
              "None, since donors were screened before they gave blood",
            ],
            correctIndex: 0,
            explanation:
              "151 were rejected on serological evidence of syphilis, a rejection rate of 1.03 percent.",
            sourceLessonSlug: "one-standard",
          },
          {
            prompt: "What lesson did the report draw for any large-scale program?",
            options: [
              "Culture at repeated intervals",
              "Use as few hospitals as possible, ideally one, to avoid all coordination problems",
              "Ship only whole blood, which the report found far safer than plasma",
              "Rely on the preservative alone, since repeated testing wastes plasma",
            ],
            correctIndex: 0,
            explanation:
              "Every step should be checked by aerobic and anaerobic cultures at repeated intervals before the product is released.",
            sourceLessonSlug: "one-standard",
          },
          {
            prompt: "What did the 1941 Red Cross pilot program mass-produce?",
            options: [
              "Dried plasma",
              "Whole blood with a two-week shelf life for the Army and Navy",
              "Merthiolate, for use by every hospital blood bank in the country",
              "Blood-typing serum for the new National Blood Donor Service",
            ],
            correctIndex: 0,
            explanation:
              "The three-month pilot in New York was set up to mass-produce dried plasma, and it became the model for the National Blood Donor Service.",
            sourceLessonSlug: "one-standard",
          },
          {
            prompt: "What did Drew introduce during the Red Cross pilot?",
            options: [
              "Mobile collection units",
              "The term \"blood bank\", which he coined in the pilot's first announcement",
              "Sodium citrate as an anticoagulant for stored blood",
              "The four basic blood groups, A, B, AB and O",
            ],
            correctIndex: 0,
            explanation:
              "Mobile collection units, later called bloodmobiles. The other three came from other people, earlier.",
            sourceLessonSlug: "one-standard",
          },
          {
            prompt: "What does NLM say about whether Drew discovered plasma as a blood substitute?",
            options: [
              "He did not",
              "That he discovered it in 1939, during the experimental bank at Presbyterian",
              "That he discovered it jointly with Fantus in Chicago in 1937",
              "That the question cannot be answered from the surviving records",
            ],
            correctIndex: 0,
            explanation:
              "Drew \"didn't 'discover' plasma as a blood substitute\", but his expertise and leadership were largely responsible for the program's success. Both halves at once.",
            sourceLessonSlug: "one-standard",
          },
          {
            prompt: "Why does lesson 6 say a product pooled from nine hospitals needs one standard?",
            options: [
              "It is only as safe as the worst day",
              "Because each hospital charged a different price per liter for its plasma",
              "Because the British insisted every bottle carry the same hospital's name",
              "Because the Red Cross could legally accept plasma from only one source",
            ],
            correctIndex: 0,
            explanation:
              "A pooled product is only as safe as the worst hospital's worst day. Central checking, tracing and one standard are what turned nine operations into one program.",
            sourceLessonSlug: "one-standard",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4 — Barred from his own program
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "excluded-then-segregated",
      title: "7 · Excluded first, segregated after",
      section: "Section 4 · Barred from his own program",
      body: `The short version, "the Red Cross segregated blood and Drew objected", is true and incomplete. The order of events is part of the injustice, and it is the part that gets lost.

**Step one, 1940: Blood for Britain segregated.** Donations and plasma for Blood for Britain "had been segregated, on the assumption that the British would prefer this" (NLM, n.d.-a). The Science History Institute agrees that the project required Black donors' blood to be kept apart from white donors' (Science History Institute, n.d.). The reason NLM gives is an assumption, not a finding: a guess about what the recipients would prefer.

**Step two, early 1941: the Red Cross pilot excluded.** When the Red Cross pilot program ran in New York in early 1941, it did not segregate Black donors' blood. It refused it. NLM's chapter on these years says the pilot, "at the insistence of the armed forces, excluded black donors" (NLM, n.d.-a). NLM's overview draws the consequence: the armed forces "initially stipulated that the Red Cross exclude African Americans from donating; thus Drew, a leading expert in blood banking, was ineligible to participate in the program he helped establish" (NLM, n.d.-b). The Science History Institute says it in a parenthesis that deserves to come out of one: "the Red Cross pilot program initially did not accept black donors at all" (Science History Institute, n.d.). Its own assistant director could not have given blood to it.

**Step three, November 1941: the national service kept the exclusion.** The policy was maintained when the National Blood Donor Service officially began in November 1941, and it provoked protest from the Black press and the NAACP, among others (NLM, n.d.-a).

**Step four, January 1942: accepted, and segregated.** In January 1942 the Red Cross announced that it would accept blood from Black donors, but would segregate it (NLM, n.d.-a). The overview calls this a modification: "The policy was soon modified to accept blood donations from blacks, but required that these be segregated" (NLM, n.d.-b).

**Why the order matters.** Segregation, however insulting, is a rule about what happens to a donation. Exclusion is a rule about who counts as a donor at all. The familiar phrase "segregated blood" describes step four and quietly erases steps two and three: months in which Black Americans could not give blood to the national war effort at all, and in which the man whose standards and methods the program was built on was, under its rules, ineligible. It also erases step one, which shows that blood was already being separated by race before the armed forces stepped in. Restoring the sequence is not pedantry. It restores the worst part.

**Who decided.** The sources name the armed forces as insisting on the exclusion, and the Red Cross as the body that carried it out and later announced the change (NLM, n.d.-a; NLM, n.d.-b). Nothing in the sources this course read attributes the policy to Drew, and nothing attributes it to any scientific finding. That second point is the one Drew himself pressed, and lesson 8 reads what he said.

**What the sequence does not show.** It does not show that Drew resigned over it. Section 1 covered what NLM says about that: there is no evidence the policy was his reason for leaving. He left the pilot in April 1941, when its three months were up (Science History Institute, n.d.), and the exclusion carried into the national service that November, after he had gone back to Howard.

:::reveal Put the four steps of the blood policy in order, from 1940 to 1942. ||| Blood for Britain segregated donations in 1940; the Red Cross pilot excluded Black donors in early 1941 at the armed forces' insistence; the National Blood Donor Service kept the exclusion from November 1941; in January 1942 the Red Cross accepted Black donors' blood but segregated it.

:::reveal Why does the phrase "segregated blood" understate what happened? ||| Because it describes only the last step. Before Black donors' blood was segregated, it was refused entirely, which made Drew himself ineligible to give blood to the program he had helped establish.

## Vocabulary
- **Exclusion**: a rule that shuts a group out entirely, here refusing blood from Black donors.
- **Segregation**: a rule that admits a group but keeps what it gives apart from what others give.
- **Stipulation**: a condition one party requires of another, as the armed forces required of the Red Cross.
- **National Blood Donor Service**: the Red Cross's national wartime blood collection program, which began officially in November 1941 on the model of the New York pilot.

## Sources
National Library of Medicine. (n.d.-a). *Becoming "the father of the blood bank," 1938-1941*. Profiles in Science: The Charles R. Drew Papers. https://profiles.nlm.nih.gov/spotlight/bg/feature/blood
National Library of Medicine. (n.d.-b). *Biographical overview*. Profiles in Science: The Charles R. Drew Papers. https://profiles.nlm.nih.gov/spotlight/bg/feature/biographical-overview
Science History Institute. (n.d.). *Charles Richard Drew*. https://www.sciencehistory.org/education/scientific-biographies/charles-richard-drew/`,
    },
    {
      slug: "what-drew-said",
      title: "8 · What Drew said about it",
      section: "Section 4 · Barred from his own program",
      body: `Drew's response to the blood policy is documented, repeated and public. It is a better story than the resignation that never happened, because it lasted.

**The argument.** Drew objected on two grounds, as NLM summarizes them: there was no scientific evidence of any difference between the blood of different races, and the policy was insulting to African Americans, who were as eager to contribute to the war effort as anyone else. He wrote and spoke about it frequently during the war years (NLM, n.d.-a). The overview gives the same record in one line: "Throughout the war, Drew criticized these policies as unscientific and insulting to African Americans" (NLM, n.d.-b).

**His words, 1944.** In 1944 the NAACP awarded Drew the Spingarn Medal, its highest honour (Science History Institute, n.d.), for his work on the British and American plasma projects (NLM, n.d.-c). Accepting it, he said: "It is fundamentally wrong for any great nation to willfully discriminate against such a large group of its people. . . . One can say quite truthfully that on the battlefields nobody is very interested in where the plasma comes from when they are hurt. . . . It is unfortunate that such a worthwhile and scientific bit of work should have been hampered by such stupidity" (as quoted in NLM, n.d.-a). Notice what the argument rests on. Not only outrage, but a practical fact, that a wounded soldier does not ask whose plasma it is, and a scientific one, that the separation measured nothing.

**The same two words, a year earlier.** On 27 April 1943 Drew gave a radio talk on station KSD in St. Louis, "The Negro Physician in the Present War Effort". Most of it is a careful count of how few Black physicians there were and where they were. Near the end he described Black physicians entering military service "bitterly opposed to the Army's policy of segregation, unified in their distaste and dissatisfaction with the Navy's policy of exclusion" (Drew, 1943, p. 5). Segregation and exclusion, named as two different things, by a man who had seen both applied to the blood program. He listed what they wanted, including "freedom to rise by merit according to ability and freedom from the tyranny of small minds in high places", and he closed on a warning: after the war, the Black physician "is certain not to accept less" (p. 5).

**How he argued: from inside, in public, for years.** A resignation is one act on one day. What the record shows instead is a physician who stayed inside his profession and argued, in print, on the radio and from the podium, through the rest of the war. It also shows him arguing about more than blood. He repeatedly petitioned the American Medical Association, the American College of Surgeons and other groups to change membership rules that shut out Black physicians (NLM, n.d.-f). Section 5 follows that fight.

**Why the resignation story appeals, and why to let it go.** It is dramatic, it has a clear villain and a clear gesture, and it turns a long argument into one visible act. But it is not in the record, and NLM says so. Holding on to it trades a documented, years-long public argument for an invented moment, and the first person to check it gets to say the whole story is made up. The true version is stronger: the man whose methods the program ran on was barred by its rules from giving blood to it, and he said, in public and on the record, that the rule was stupid and unscientific.

:::reveal What two grounds did Drew give for opposing the blood policy? ||| That there was no scientific evidence of any difference between the blood of different races, and that the policy insulted African Americans who were as eager as anyone to contribute to the war effort.

:::reveal In his 1943 radio talk, which service did Drew associate with segregation and which with exclusion? ||| The Army with segregation and the Navy with exclusion, naming them as two different policies.

## Vocabulary
- **Spingarn Medal**: the NAACP's highest honour, awarded to Drew in 1944 for his work on the British and American plasma projects.
- **Unscientific**: resting on no evidence, which is how Drew described a rule separating blood by the donor's race.
- **Petition**: a formal written request to an institution to change a rule, the method Drew used on the medical associations.
- **Public record**: statements made openly, in speeches, broadcasts and print, which can be checked in a way a private motive cannot.

## Sources
Drew, C. R. (1943, April 27). *The Negro physician in the present war effort* [Radio address, Station KSD, St. Louis]. Charles R. Drew Papers, Moorland-Spingarn Research Center, Howard University. National Library of Medicine Digital Collections. https://resource.nlm.nih.gov/101584649X47
National Library of Medicine. (n.d.-a). *Becoming "the father of the blood bank," 1938-1941*. Profiles in Science: The Charles R. Drew Papers. https://profiles.nlm.nih.gov/spotlight/bg/feature/blood
National Library of Medicine. (n.d.-b). *Biographical overview*. Profiles in Science: The Charles R. Drew Papers. https://profiles.nlm.nih.gov/spotlight/bg/feature/biographical-overview
National Library of Medicine. (n.d.-c). *Brief chronology*. Profiles in Science: The Charles R. Drew Papers. https://profiles.nlm.nih.gov/spotlight/bg/feature/biographical-information
National Library of Medicine. (n.d.-f). *"My chief interest was and is surgery": Howard University, 1941-1950*. Profiles in Science: The Charles R. Drew Papers. https://profiles.nlm.nih.gov/spotlight/bg/feature/my-chief-interest-was-and-is-surgery-howard-university-1941-1950
Science History Institute. (n.d.). *Charles Richard Drew*. https://www.sciencehistory.org/education/scientific-biographies/charles-richard-drew/`,
    },
    {
      slug: "section-4-quiz",
      title: "Section 4 quiz · Barred from his own program",
      section: "Section 4 · Barred from his own program",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What did Blood for Britain do with blood from Black donors in 1940?",
            options: [
              "Segregated it",
              "Refused it outright, which is the policy the Red Cross pilot later copied",
              "Mixed it with all other donations, since the program made no racial distinction",
              "Sent it to American military hospitals instead of shipping it to England",
            ],
            correctIndex: 0,
            explanation:
              "NLM and the Science History Institute both say Blood for Britain segregated Black donors' blood. Outright refusal came next, in the Red Cross pilot.",
            sourceLessonSlug: "excluded-then-segregated",
          },
          {
            prompt: "What reason does NLM give for segregating donations in Blood for Britain?",
            options: [
              "An assumption the British would prefer it",
              "A written request from the British Medical Research Council, received in August 1940",
              "A finding from Drew's dissertation that blood from different races stored differently",
              "An order from the armed forces, which ran the program from its first day",
            ],
            correctIndex: 0,
            explanation:
              "Donations \"had been segregated, on the assumption that the British would prefer this\". An assumption about someone else's preference, not a finding.",
            sourceLessonSlug: "excluded-then-segregated",
          },
          {
            prompt: "How does lesson 7 characterize the reason given for segregating Blood for Britain donations?",
            options: [
              "An assumption, not a finding",
              "A scientific result later overturned by better laboratory methods in the 1950s",
              "A legal requirement of New York State's sanitary code for all blood products",
              "A compromise Drew himself proposed to keep the program running",
            ],
            correctIndex: 0,
            explanation:
              "It was a guess about what the recipients would prefer. Nothing in the sources ties it to any evidence about blood.",
            sourceLessonSlug: "excluded-then-segregated",
          },
          {
            prompt: "What did the Red Cross pilot program of early 1941 do about Black donors?",
            options: [
              "Excluded them",
              "Accepted their blood and segregated it, exactly as Blood for Britain had done in 1940",
              "Accepted their blood without any distinction, until the national service began",
              "Recruited them specially, to make up for donors lost after Blood for Britain ended",
            ],
            correctIndex: 0,
            explanation:
              "The pilot did not segregate Black donors' blood. It refused it, at the insistence of the armed forces.",
            sourceLessonSlug: "excluded-then-segregated",
          },
          {
            prompt: "At whose insistence, according to NLM, did the Red Cross pilot exclude Black donors?",
            options: [
              "The armed forces'",
              "The British government's, which had asked for the change after Blood for Britain",
              "The Blood Transfusion Association's, whose board voted for it in January 1941",
              "Presbyterian Hospital's, where the first Red Cross blood bank was housed",
            ],
            correctIndex: 0,
            explanation:
              "NLM: the pilot, \"at the insistence of the armed forces, excluded black donors\". The overview says the armed forces stipulated it.",
            sourceLessonSlug: "excluded-then-segregated",
          },
          {
            prompt: "According to NLM's overview, what did the exclusion mean for Drew himself?",
            options: [
              "He was ineligible to participate",
              "He was dismissed as assistant director and replaced by an officer of the armed forces",
              "He was put in charge of recruiting Black donors for a separate program in Washington",
              "It made no difference to him, since staff members were not permitted to donate",
            ],
            correctIndex: 0,
            explanation:
              "\"Thus Drew, a leading expert in blood banking, was ineligible to participate in the program he helped establish.\"",
            sourceLessonSlug: "excluded-then-segregated",
          },
          {
            prompt: "How does the Science History Institute describe the pilot's treatment of Black donors?",
            options: [
              "It did not accept them at all",
              "It accepted them only on weekends, when white donors were fewest",
              "It accepted them only if a Black physician was present to draw the blood",
              "It accepted them only for plasma, never for whole blood",
            ],
            correctIndex: 0,
            explanation:
              "\"The Red Cross pilot program initially did not accept black donors at all\", in a parenthesis the lesson takes out of its brackets.",
            sourceLessonSlug: "excluded-then-segregated",
          },
          {
            prompt: "Under the pilot's rule, who could not have given blood to the program?",
            options: [
              "Its own assistant director",
              "Any donor over the age of thirty-five, whatever their race or state of health",
              "Any donor who had already given blood to Blood for Britain in 1940",
              "Any member of the Red Cross staff, to avoid a conflict of interest",
            ],
            correctIndex: 0,
            explanation:
              "Drew was the pilot's assistant director, and under a rule excluding Black donors he could not have given blood to it.",
            sourceLessonSlug: "excluded-then-segregated",
          },
          {
            prompt: "When did the National Blood Donor Service officially begin?",
            options: [
              "November 1941",
              "August 1940, the month Blood for Britain opened officially in New York",
              "January 1942, the month the Red Cross changed its policy on Black donors",
              "April 1941, the month Drew left the pilot and returned to Howard",
            ],
            correctIndex: 0,
            explanation:
              "It began officially in November 1941, and it kept the pilot's exclusion of Black donors.",
            sourceLessonSlug: "excluded-then-segregated",
          },
          {
            prompt: "What did the National Blood Donor Service do about the exclusion when it began?",
            options: [
              "It kept it",
              "It ended it at once and accepted Black donors' blood without any restriction",
              "It replaced it with segregation from its first day of operation",
              "It left the decision to each hospital, some of which accepted Black donors",
            ],
            correctIndex: 0,
            explanation:
              "The exclusion was maintained when the service officially began in November 1941. Segregation came in January 1942.",
            sourceLessonSlug: "excluded-then-segregated",
          },
          {
            prompt: "Who protested when the national service kept the exclusion, according to NLM?",
            options: [
              "The Black press and the NAACP",
              "The British Medical Research Council, which refused further plasma until it changed",
              "The American Medical Association, which issued a formal statement of objection",
              "The armed forces themselves, who had asked for the opposite policy",
            ],
            correctIndex: 0,
            explanation:
              "The policy provoked protest from the Black press and the NAACP, among others.",
            sourceLessonSlug: "excluded-then-segregated",
          },
          {
            prompt: "What did the Red Cross announce in January 1942?",
            options: [
              "It would accept, and segregate",
              "It would end all racial distinctions in its blood program, effective immediately",
              "It would exclude Black donors permanently, for the duration of the war",
              "It would hand the blood program to the armed forces to run directly",
            ],
            correctIndex: 0,
            explanation:
              "It would accept blood from Black donors, but would segregate it. The exclusion ended; the separation began.",
            sourceLessonSlug: "excluded-then-segregated",
          },
          {
            prompt: "What word does NLM's overview use for the January 1942 change?",
            options: [
              "Modified",
              "Reversed, meaning that all racial distinctions were dropped from the program",
              "Suspended, meaning the policy was paused until the end of the war",
              "Tightened, meaning that the exclusion was extended to all Red Cross services",
            ],
            correctIndex: 0,
            explanation:
              "\"The policy was soon modified to accept blood donations from blacks, but required that these be segregated.\"",
            sourceLessonSlug: "excluded-then-segregated",
          },
          {
            prompt: "Which sequence matches the record from 1940 to January 1942?",
            options: [
              "Segregation, exclusion, then segregation",
              "Exclusion throughout, with no segregation at any stage until after the war",
              "Segregation throughout, with no exclusion at any point in the program",
              "Exclusion in 1940, segregation in 1941, and full acceptance in January 1942",
            ],
            correctIndex: 0,
            explanation:
              "Blood for Britain segregated; the pilot and the national service excluded; in January 1942 the Red Cross accepted and segregated.",
            sourceLessonSlug: "excluded-then-segregated",
          },
          {
            prompt: "In lesson 7's terms, what is exclusion?",
            options: [
              "Shutting a group out entirely",
              "Admitting a group but keeping what it gives apart from what others give",
              "Charging a group a higher fee for the same service as everyone else",
              "Requiring a group to give more often than others to make up a shortfall",
            ],
            correctIndex: 0,
            explanation:
              "Exclusion decides who counts as a donor at all. Segregation admits the donor and separates the donation.",
            sourceLessonSlug: "excluded-then-segregated",
          },
          {
            prompt: "In lesson 7's terms, what is segregation?",
            options: [
              "Admitting, but keeping apart",
              "Refusing a group's donations altogether, whatever their quality",
              "Testing a group's donations more often than others for disease",
              "Sending a group's donations abroad instead of using them at home",
            ],
            correctIndex: 0,
            explanation:
              "Segregation is a rule about what happens to a donation. Exclusion is a rule about who may donate at all.",
            sourceLessonSlug: "excluded-then-segregated",
          },
          {
            prompt: "Which step of the policy does the phrase \"segregated blood\" describe?",
            options: [
              "The last one",
              "All four, since segregation was the Red Cross's policy from 1940 to the end of the war",
              "Only the first, since the Red Cross never segregated blood after Blood for Britain",
              "None, since the Red Cross never separated blood by the race of the donor",
            ],
            correctIndex: 0,
            explanation:
              "It describes January 1942 onward, and so quietly erases the months in which Black donors were refused entirely.",
            sourceLessonSlug: "excluded-then-segregated",
          },
          {
            prompt: "What does the familiar phrase \"segregated blood\" erase, according to lesson 7?",
            options: [
              "The months of total exclusion",
              "The fact that the Red Cross ever changed its policy during the war",
              "The part the NAACP played in winning the January 1942 change",
              "The British government's role in asking for the policy in the first place",
            ],
            correctIndex: 0,
            explanation:
              "Months in which Black Americans could not give blood to the national effort at all, and in which Drew was ineligible under the rules.",
            sourceLessonSlug: "excluded-then-segregated",
          },
          {
            prompt: "What does step one, Blood for Britain's segregation, show?",
            options: [
              "Separation predated the armed forces' demand",
              "That the British government had required the policy in its agreement with the Red Cross",
              "That Drew had approved separation of blood by race while he was Medical Supervisor",
              "That segregation was based on the dissertation's findings about stored blood",
            ],
            correctIndex: 0,
            explanation:
              "Blood was already being separated by race, on an assumption about British preferences, before the armed forces insisted on exclusion.",
            sourceLessonSlug: "excluded-then-segregated",
          },
          {
            prompt: "Which body carried out the exclusion and later announced the change, according to the sources?",
            options: [
              "The Red Cross",
              "The Blood Transfusion Association, which ran the national service from New York",
              "The National Research Council, which held legal authority over all blood programs",
              "Presbyterian Hospital, where the first Red Cross blood bank was housed",
            ],
            correctIndex: 0,
            explanation:
              "The armed forces insisted on the exclusion; the Red Cross carried it out and announced the change in January 1942.",
            sourceLessonSlug: "excluded-then-segregated",
          },
          {
            prompt: "Do the sources this course read attribute the policy to any scientific finding?",
            options: [
              "No",
              "Yes, to Drew's dissertation, which found stored blood differed by race",
              "Yes, to a British study of transfusion reactions in wartime casualties",
              "Yes, to Landsteiner's work on blood groups, which the armed forces cited",
            ],
            correctIndex: 0,
            explanation:
              "Nothing in the sources attributes it to any finding. Drew's own point was that there was no scientific evidence for it.",
            sourceLessonSlug: "excluded-then-segregated",
          },
          {
            prompt: "Do the sources attribute the blood exclusion policy to Drew?",
            options: [
              "No",
              "Yes, as the assistant director who drafted the pilot's rules for donors",
              "Yes, as the Medical Supervisor who set the criteria for Blood for Britain donors",
              "Partly, since he signed the policy but protested it privately",
            ],
            correctIndex: 0,
            explanation:
              "The sources name the armed forces as insisting on it and the Red Cross as carrying it out. Nothing attributes it to Drew.",
            sourceLessonSlug: "excluded-then-segregated",
          },
          {
            prompt: "Relative to Drew's departure, when did the exclusion carry into the national service?",
            options: [
              "After he had gone back to Howard",
              "Before he joined the pilot, which is why he took the post of assistant director",
              "On the same day he resigned, which is why the two events are linked",
              "It never did, since the national service began with segregation instead",
            ],
            correctIndex: 0,
            explanation:
              "He left the pilot in April 1941, when its three months were up, and the national service began with the exclusion that November.",
            sourceLessonSlug: "excluded-then-segregated",
          },
          {
            prompt: "What two grounds did Drew give for opposing the blood policy, as NLM summarizes them?",
            options: [
              "No scientific basis, and an insult",
              "That it slowed collection, and that it cost the Red Cross too much money to run",
              "That the British had never asked for it, and that the Army had not approved it",
              "That it broke New York law, and that it had been adopted without his signature",
            ],
            correctIndex: 0,
            explanation:
              "No scientific evidence of any difference between the blood of different races, and an insult to African Americans as eager as anyone to contribute.",
            sourceLessonSlug: "what-drew-said",
          },
          {
            prompt: "How does NLM's overview describe the way Drew criticized the policies throughout the war?",
            options: [
              "As unscientific and insulting",
              "As regrettable but necessary in wartime, since morale mattered more than evidence",
              "As a British idea that the Red Cross should never have adopted from London",
              "As an administrative error that could be fixed by better record-keeping",
            ],
            correctIndex: 0,
            explanation:
              "\"Throughout the war, Drew criticized these policies as unscientific and insulting to African Americans.\"",
            sourceLessonSlug: "what-drew-said",
          },
          {
            prompt: "How often did Drew speak or write about the blood policy during the war, according to NLM?",
            options: [
              "Frequently",
              "Once, in a single private letter to the Red Cross that was never answered",
              "Never in public, because his post at Howard forbade political statements",
              "Only after the war ended, once the Red Cross had dropped the policy",
            ],
            correctIndex: 0,
            explanation:
              "He wrote and spoke about it frequently during the war years. A long public argument, not a single gesture.",
            sourceLessonSlug: "what-drew-said",
          },
          {
            prompt: "What honour did Drew receive in 1944?",
            options: [
              "The Spingarn Medal",
              "The E. S. Jones Award for Research in Medical Science from the Tuskegee clinic",
              "Fellowship in the American College of Surgeons, which he had long petitioned for",
              "An honorary doctorate from Columbia, where he had earned his research degree",
            ],
            correctIndex: 0,
            explanation:
              "The NAACP's Spingarn Medal, its highest honour, in 1944. The American College of Surgeons made him a fellow only after his death.",
            sourceLessonSlug: "what-drew-said",
          },
          {
            prompt: "Which organization awards the Spingarn Medal?",
            options: [
              "The NAACP",
              "The American Red Cross, to volunteers who serve in its national blood program",
              "The National Research Council, to scientists who contribute to national defense",
              "Howard University, to its most distinguished members of faculty",
            ],
            correctIndex: 0,
            explanation:
              "The Spingarn Medal is the highest honour of the National Association for the Advancement of Colored People.",
            sourceLessonSlug: "what-drew-said",
          },
          {
            prompt: "What was Drew's Spingarn Medal awarded for, according to NLM's chronology?",
            options: [
              "The British and American plasma projects",
              "His campaign against the exclusion of Black physicians from the American Medical Association",
              "His training of surgeons at Howard, where his first residents passed their boards in 1948",
              "His 1943 radio talk on the Negro physician in the present war effort",
            ],
            correctIndex: 0,
            explanation:
              "For work on the British and American blood plasma projects. The residents' board results came four years later.",
            sourceLessonSlug: "what-drew-said",
          },
          {
            prompt: "In his Spingarn Medal speech, what did Drew call \"fundamentally wrong\"?",
            options: [
              "A great nation discriminating willfully",
              "The decision to ship plasma instead of whole blood to the British in 1940",
              "The Red Cross's refusal to name him director of the national blood service",
              "The contamination of the first shipments of plasma to England",
            ],
            correctIndex: 0,
            explanation:
              "\"It is fundamentally wrong for any great nation to willfully discriminate against such a large group of its people.\"",
            sourceLessonSlug: "what-drew-said",
          },
          {
            prompt: "What did Drew say nobody on the battlefields is very interested in?",
            options: [
              "Where the plasma comes from",
              "Which hospital in New York prepared the plasma and on what date it was shipped",
              "Whether the plasma is liquid or dried, since both work equally well in shock",
              "Who holds the title of director of the blood program back at home",
            ],
            correctIndex: 0,
            explanation:
              "\"On the battlefields nobody is very interested in where the plasma comes from when they are hurt.\" The practical half of his argument.",
            sourceLessonSlug: "what-drew-said",
          },
          {
            prompt: "What word did Drew use for what had hampered \"such a worthwhile and scientific bit of work\"?",
            options: [
              "Stupidity",
              "Bureaucracy, meaning the slowness of the Red Cross's national headquarters",
              "Contamination, meaning the bacteria found in the first shipments to England",
              "Poverty, meaning the underfunding of Howard University's medical school",
            ],
            correctIndex: 0,
            explanation:
              "\"It is unfortunate that such a worthwhile and scientific bit of work should have been hampered by such stupidity.\"",
            sourceLessonSlug: "what-drew-said",
          },
          {
            prompt: "According to lesson 8, what two kinds of fact does Drew's 1944 argument rest on?",
            options: [
              "A practical one and a scientific one",
              "A legal one about the Constitution and a financial one about the cost of the program",
              "A personal one about his own career and a family one about his daughter's name",
              "A British one about Blood for Britain and a Soviet one about cadaver blood",
            ],
            correctIndex: 0,
            explanation:
              "A wounded soldier does not ask whose plasma it is, and the separation measured nothing. Not only outrage.",
            sourceLessonSlug: "what-drew-said",
          },
          {
            prompt: "When did Drew give his radio talk \"The Negro Physician in the Present War Effort\"?",
            options: [
              "27 April 1943",
              "1 April 1950, on the morning he set out for the clinic in Tuskegee, Alabama",
              "January 1942, the week the Red Cross announced it would segregate donations",
              "June 1940, the month he received his doctorate from Columbia",
            ],
            correctIndex: 0,
            explanation:
              "27 April 1943, on station KSD in St. Louis.",
            sourceLessonSlug: "what-drew-said",
          },
          {
            prompt: "On which station did Drew give the 1943 radio talk?",
            options: [
              "KSD, St. Louis",
              "A national network broadcast from the Red Cross headquarters in Washington",
              "The Howard University station, broadcasting to students and faculty",
              "A British station, as part of a program thanking American plasma donors",
            ],
            correctIndex: 0,
            explanation:
              "Station KSD, St. Louis, Missouri, as the typescript in the Drew Papers records.",
            sourceLessonSlug: "what-drew-said",
          },
          {
            prompt: "What is most of the 1943 radio talk about?",
            options: [
              "How few Black physicians there were",
              "The technical steps of separating plasma from red cells for shipment overseas",
              "His own role in Blood for Britain and the contaminated plasma found in England",
              "The founding of the blood bank at Cook County Hospital in 1937",
            ],
            correctIndex: 0,
            explanation:
              "Most of it is a careful count of how few Black physicians there were and where, before the passage on segregation and exclusion.",
            sourceLessonSlug: "what-drew-said",
          },
          {
            prompt: "In the 1943 talk, which service's policy did Drew call segregation?",
            options: [
              "The Army's",
              "The Navy's, which he contrasted with the Army's policy of exclusion",
              "The Red Cross's, which he said was worse than any military policy",
              "The Public Health Service's, which he said had no policy at all",
            ],
            correctIndex: 0,
            explanation:
              "\"Bitterly opposed to the Army's policy of segregation, unified in their distaste and dissatisfaction with the Navy's policy of exclusion.\"",
            sourceLessonSlug: "what-drew-said",
          },
          {
            prompt: "In the 1943 talk, which service's policy did Drew call exclusion?",
            options: [
              "The Navy's",
              "The Army's, which he contrasted with the Navy's policy of segregation",
              "The Red Cross's, which he said had refused Black donors since 1940",
              "The American Medical Association's, which barred Black members locally",
            ],
            correctIndex: 0,
            explanation:
              "The Navy's. He used the two words as two different policies, the same distinction lesson 7 draws for the blood program.",
            sourceLessonSlug: "what-drew-said",
          },
          {
            prompt: "In the 1943 talk, freedom from the tyranny of what did Drew list?",
            options: [
              "Small minds in high places",
              "Distant governments, meaning the British authorities who asked for segregated plasma",
              "Old methods, meaning the medical practices that ignored his research on storage",
              "Poverty, meaning the low incomes that kept young men out of medical school",
            ],
            correctIndex: 0,
            explanation:
              "\"Freedom to rise by merit according to ability and freedom from the tyranny of small minds in high places.\"",
            sourceLessonSlug: "what-drew-said",
          },
          {
            prompt: "How did Drew end the 1943 talk?",
            options: [
              "With a warning",
              "With a request for listeners to give blood to the Red Cross the following week",
              "With a tribute to John Scudder as the true father of the blood bank",
              "With a list of the hospitals that had taken part in Blood for Britain",
            ],
            correctIndex: 0,
            explanation:
              "After the war, the Black physician \"is certain not to accept less\".",
            sourceLessonSlug: "what-drew-said",
          },
          {
            prompt: "Which organizations did Drew repeatedly petition to change their membership rules?",
            options: [
              "The AMA and the College of Surgeons",
              "The American Red Cross and the National Research Council, which ran the blood program",
              "The British Medical Research Council and the Royal College of Surgeons in London",
              "Columbia University and McGill University, where he had trained",
            ],
            correctIndex: 0,
            explanation:
              "The American Medical Association, the American College of Surgeons and other groups, whose rules shut out Black physicians.",
            sourceLessonSlug: "what-drew-said",
          },
          {
            prompt: "According to lesson 8, why does the resignation story appeal?",
            options: [
              "It is one visible, dramatic act",
              "Because Drew told it himself in the acceptance speech for the Spingarn Medal",
              "Because NLM confirms it in its chapter on the blood bank years",
              "Because the Red Cross announced his resignation in its own publications",
            ],
            correctIndex: 0,
            explanation:
              "It has a clear villain and a clear gesture, and it turns a long argument into a single moment. NLM finds no evidence for it.",
            sourceLessonSlug: "what-drew-said",
          },
          {
            prompt: "What does lesson 8 say is the cost of holding on to the resignation story?",
            options: [
              "Checking it discredits the rest",
              "It makes Drew seem less committed than he was, since resigning is a sign of weakness",
              "It gives the Red Cross credit it does not deserve for changing the policy",
              "It moves the protest from 1942 to 1941, which confuses the order of events",
            ],
            correctIndex: 0,
            explanation:
              "It trades a documented public argument for an invented moment, and whoever checks it can say the whole story is made up.",
            sourceLessonSlug: "what-drew-said",
          },
          {
            prompt: "What does lesson 8 offer as the true version that is stronger than the resignation story?",
            options: [
              "Barred, he called the rule unscientific",
              "He resigned in protest and took the other doctors of the pilot program with him",
              "He persuaded the armed forces to drop the exclusion within a month of its adoption",
              "He secretly gave blood to the program despite the rule, and was never discovered",
            ],
            correctIndex: 0,
            explanation:
              "The man whose methods the program ran on was barred from giving blood to it, and said in public, on the record, that the rule was stupid and unscientific.",
            sourceLessonSlug: "what-drew-said",
          },
          {
            prompt: "Why does lesson 8 value the public record over a private motive?",
            options: [
              "It can be checked",
              "Because private motives are always more flattering to the person concerned",
              "Because public statements are never edited before they are printed or broadcast",
              "Because private letters in the Drew Papers are closed to researchers",
            ],
            correctIndex: 0,
            explanation:
              "Speeches, broadcasts and print can be read and verified. A motive nobody recorded cannot.",
            sourceLessonSlug: "what-drew-said",
          },
          {
            prompt: "What was the title of Drew's 1943 radio talk?",
            options: [
              "The Negro Physician in the Present War Effort",
              "Blood for Britain: A Report to the Nation on the Plasma Project and What It Has Taught Us",
              "The Role of Soviet Investigators in the Development of the Blood Bank, Revised for Radio",
              "My Chief Interest Was and Is Surgery: A Talk to the Students of Howard University",
            ],
            correctIndex: 0,
            explanation:
              "\"The Negro Physician in the Present War Effort\", 27 April 1943. The other titles borrow from his 1944 article and from NLM's chapter headings.",
            sourceLessonSlug: "what-drew-said",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5 — The longer legacy
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-surgeons-he-trained",
      title: "9 · The work he called his chief interest",
      section: "Section 5 · The longer legacy",
      body: `NLM titles its chapter on Drew's last nine years with a phrase of his: "My chief interest was and is surgery" (NLM, n.d.-f). This lesson takes him at his word.

**Why it had to be built.** Drew's own training shows the problem. He graduated second in a class of 137 from McGill's medical faculty in 1933 and hoped for further surgical training at a major American center such as the Mayo Clinic. But specialty residencies were rarely given to African Americans in that era, and despite his record he received no offers (NLM, n.d.-e). When he reached Presbyterian Hospital in New York, African American physicians had never been granted residencies or staff privileges there. Allen O. Whipple assigned him to Scudder's laboratory, assuming he would not attend patients, and Drew persuaded Whipple to train him as a resident (NLM, n.d.-a). NLM adds a colleague's later remark that it probably helped that Drew was very light-skinned, which measures how narrow the door was.

**What the numbers looked like.** In his 1943 radio talk Drew used the War Manpower Commission's figures: about 160,321 physicians in the continental United States, of whom 3,618, or 2.3 percent, were Black. For the population as a whole there was about one physician for every 800 people; counting Black physicians against the Black population, one for every 3,600. Mississippi had 52 Black physicians for approximately 1,074,578 Black residents, a ratio he gave as one doctor per 20,000 (Drew, 1943, p. 1). He named two causes: the low economic status of the group, and "the great paucity of opportunity for training in the higher professional fields" (p. 3).

**What he built.** Drew returned to Howard in April 1941, having passed the American Board of Surgery examinations during his last months in New York. In October 1941 he was appointed chairman of the Department of Surgery and Chief of Surgery at Freedmen's Hospital, Howard's main teaching hospital, and that same month became the first African American appointed an examiner for the American Board of Surgery (NLM, n.d.-f). His aim, in NLM's words, was to train young African American surgeons "who would meet the most rigorous standards in any surgical specialty" and place them where they could carry that standard on. He believed this would be his greatest and most lasting contribution, and NLM records that he told a friend the blood bank and his other achievements were "only the preface in his life story" (NLM, n.d.-f).

**What it produced.** In December 1948 his first group of residents passed their Board of Surgery certification exams, two of them with the top two scores. Between 1941 and 1950, NLM reports, Drew trained more than half of the Black surgeons certified in those years, eight surgeons by NLM's count, and another fourteen who passed later had received part of their training with him (NLM, n.d.-f). The Science History Institute records the same 1948 milestone (Science History Institute, n.d.).

**The walls he pushed on.** Drew was not eligible for membership in the American Medical Association, because as an African American he was excluded from the local District of Columbia society, and national membership ran through the local societies. That was not a formality: hospital privileges and specialty training increasingly depended on AMA membership. He petitioned the AMA, the American College of Surgeons and others repeatedly. He never obtained AMA membership, and the American College of Surgeons made him a fellow only after his death (NLM, n.d.-f). It is the mechanism of Section 4 applied to a whole profession: a national body that lets a local gatekeeper decide who counts.

**Legacy, not epilogue.** A blood program is a system, and systems are replaced. A surgeon trained to board standard trains others. NLM's own summary puts the two in that order: Drew left a substantial legacy, "embodied in his blood bank work and especially in the graduates of the Howard University College of Medicine" (NLM, n.d.-b). *Especially.* The popular story, which is entirely about blood, leaves out the part NLM singles out.

:::reveal What posts did Drew take up at Howard in October 1941? ||| Chairman of the Department of Surgery and Chief of Surgery at Freedmen's Hospital, and in the same month he became the first African American appointed an examiner for the American Board of Surgery.

:::reveal Why could Drew not join the American Medical Association? ||| Because national membership ran through local societies, and as an African American he was excluded from the District of Columbia society. He petitioned repeatedly and never obtained membership.

## Vocabulary
- **Residency**: the years of supervised hospital training after medical school in which a doctor becomes a specialist, rarely offered to African Americans in Drew's era.
- **Board certification**: passing the American Board of Surgery's examinations, the standard Drew trained his residents to meet.
- **Freedmen's Hospital**: Howard University's main teaching hospital, where Drew was Chief of Surgery from October 1941.
- **Gatekeeper**: a body that controls entry to something larger, as local medical societies controlled entry to the AMA.

## Sources
Drew, C. R. (1943, April 27). *The Negro physician in the present war effort* [Radio address, Station KSD, St. Louis]. Charles R. Drew Papers, Moorland-Spingarn Research Center, Howard University. National Library of Medicine Digital Collections. https://resource.nlm.nih.gov/101584649X47
National Library of Medicine. (n.d.-a). *Becoming "the father of the blood bank," 1938-1941*. Profiles in Science: The Charles R. Drew Papers. https://profiles.nlm.nih.gov/spotlight/bg/feature/blood
National Library of Medicine. (n.d.-b). *Biographical overview*. Profiles in Science: The Charles R. Drew Papers. https://profiles.nlm.nih.gov/spotlight/bg/feature/biographical-overview
National Library of Medicine. (n.d.-e). *Education and early medical career, 1922-1938*. Profiles in Science: The Charles R. Drew Papers. https://profiles.nlm.nih.gov/spotlight/bg/feature/education
National Library of Medicine. (n.d.-f). *"My chief interest was and is surgery": Howard University, 1941-1950*. Profiles in Science: The Charles R. Drew Papers. https://profiles.nlm.nih.gov/spotlight/bg/feature/my-chief-interest-was-and-is-surgery-howard-university-1941-1950
Science History Institute. (n.d.). *Charles Richard Drew*. https://www.sciencehistory.org/education/scientific-biographies/charles-richard-drew/`,
    },
    {
      slug: "crediting-him-correctly",
      title: "10 · Crediting him correctly",
      section: "Section 5 · The longer legacy",
      body: `This course has been assembling one sentence. Here it is, built only from what the sources support:

*Charles Drew did not invent the blood bank. With John Scudder he ran an experimental bank at Presbyterian Hospital and measured what storage does to blood in a 356-page dissertation; as medical supervisor of Blood for Britain he set the standards, records and central checks that let nine hospitals make one safe product; under the Red Cross pilot's rules he was then ineligible to give blood to the program he had helped establish; and he spent the rest of his life training surgeons at Howard* (Drew, 1940a; Blood Transfusion Association, 1941; NLM, n.d.-b).

Every clause can be checked, and together they amount to more than "he invented it".

**Why the flattering version does damage.** It is tempting to think an exaggeration in someone's favour is harmless. This case shows three kinds of harm.

*It erases other people.* "Drew invented the blood bank" leaves no room for Fantus, who named it; for Robertson and the Soviet and Spanish workers Drew himself credited; for Scudder, who suggested the research and first proposed shipping plasma; for Helen Stoddart, Margaret Smith and the rest of the Presbyterian staff; for Morris Davidson, Frank Meleney, Balbina Johnson and some two thousand volunteers.

*It erases Drew's own work.* The invention claim crowds out what he did, and what it crowds out is the demonstrable part: measurements, standards, a report other scientists used, and a generation of surgeons.

*It makes the true record easier to attack.* A false claim can be knocked down, and whoever knocks it down gets to imply the rest was false too. The correction then lands on Drew instead of on the story. The defence is to hold the true claims first.

**Drew's own view, once more.** In January 1947 he wrote to Mrs. Bates that when an advance is made "the work of many people is involved and it always seems just a little bit unfair that one name should be chosen from the list for special commendation" (Drew, 1947). In the same letter he wrote: "Whenever, however, one breaks out of this rather high-walled prison of the 'Negro problem' by virtue of some worthwhile contribution, not only is he himself allowed more freedom, but a part of the wall crumbles" (Drew, 1947). Both are true of him at once. The credit was shared, and the contribution was his.

**The method, as a checklist.** For any biographical claim, and especially a flattering one:

1. **Which source?** Name it. "Everyone knows" is not a source.
2. **What exact words?** "Has been called" is not "invented"; "Assistant Director" is not "director"; "there" is not "in the United States".
3. **Whose evidence?** Is the source reporting its own documents, or repeating another account?
4. **Who drops out?** Ask who disappears from the flattering version, and whether the subject himself named them.
5. **What is left when the flattery is gone?** If the answer is "a great deal", teach that.

**Where this sits in the series.** Other CREDIT courses in this catalog meet the same double error. The Esther Lederberg course teaches the science before it asks the credit question, and warns against retellings that overshoot in her favour. *Who Gets the Credit* corrects false claims made on behalf of real inventors so that the true record can stand. Drew is the clearest case of all, because the man at the centre of the story told us, in writing, that the story was too simple.

:::reveal Name the three kinds of harm this lesson says a flattering exaggeration does. ||| It erases the other people who did the work, it crowds out the subject's own demonstrable work, and it makes the true record easier to attack once the false claim is knocked down.

:::reveal State the five questions of the checklist. ||| Which source? What exact words? Whose evidence? Who drops out? What is left when the flattery is gone?

## Vocabulary
- **Attribution**: the statement of who did a piece of work, which can be wrong by giving too much as well as too little.
- **Shared credit**: credit divided among the people the record shows did the work, as Drew's own acknowledgements divide it.
- **Demonstrable contribution**: a contribution a reader can confirm from documents, such as the dissertation's measurements or the project report's credit line.
- **Overcorrection**: knocking down a false claim so hard that true claims about the same person fall with it.

## Sources
Blood Transfusion Association. (1941). *Report of the Blood Transfusion Association concerning the project for supplying blood plasma to England, which has been carried on jointly with the American Red Cross from August, 1940, to January, 1941*. Charles R. Drew Papers, Moorland-Spingarn Research Center, Howard University. National Library of Medicine Digital Collections. https://resource.nlm.nih.gov/101584649X141
Drew, C. R. (1940a). *Banked blood: A study in blood preservation* [Doctoral dissertation, Columbia University]. Charles R. Drew Papers, Moorland-Spingarn Research Center, Howard University. National Library of Medicine Digital Collections. https://resource.nlm.nih.gov/101584649X142
Drew, C. R. (1947, January 27). [Letter to Mrs. J. F. Bates]. Charles R. Drew Papers, Moorland-Spingarn Research Center, Howard University. National Library of Medicine Digital Collections. https://resource.nlm.nih.gov/101584649X113
National Library of Medicine. (n.d.-b). *Biographical overview*. Profiles in Science: The Charles R. Drew Papers. https://profiles.nlm.nih.gov/spotlight/bg/feature/biographical-overview`,
    },
    {
      slug: "section-5-quiz",
      title: "Section 5 quiz · The longer legacy",
      section: "Section 5 · The longer legacy",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What phrase of Drew's does NLM use as the title of its chapter on his Howard years?",
            options: [
              "\"My chief interest was and is surgery\"",
              "\"Becoming the father of the blood bank, and why the title was never mine to claim\"",
              "\"On the battlefields nobody is very interested in where the plasma comes from\"",
              "\"Banked blood is safe when its limitations are known, and so is a surgeon\"",
            ],
            correctIndex: 0,
            explanation:
              "The chapter on 1941 to 1950 is titled with his words, \"My chief interest was and is surgery\". The lesson takes him at his word.",
            sourceLessonSlug: "the-surgeons-he-trained",
          },
          {
            prompt: "Where did Drew graduate second in a class of 137?",
            options: [
              "McGill",
              "Amherst College, where he was better remembered as an athlete than as a student",
              "Columbia University, where he later earned the Doctor of Medical Science",
              "Howard University College of Medicine, where he later chaired surgery",
            ],
            correctIndex: 0,
            explanation:
              "He graduated from McGill University's Faculty of Medicine in Montreal in 1933, second in a class of 137.",
            sourceLessonSlug: "the-surgeons-he-trained",
          },
          {
            prompt: "Where did Drew hope to continue his surgical training after McGill?",
            options: [
              "At a center like the Mayo Clinic",
              "At Cook County Hospital in Chicago, under Bernard Fantus at the blood bank",
              "At the Medical Research Council in London, which trained surgeons for the war",
              "At Freedmen's Hospital, which was then the only hospital that would accept him",
            ],
            correctIndex: 0,
            explanation:
              "He hoped for further training at a major American center such as the Mayo Clinic, and received no offers.",
            sourceLessonSlug: "the-surgeons-he-trained",
          },
          {
            prompt: "Why did Drew receive no residency offers despite his McGill record?",
            options: [
              "Residencies rarely went to African Americans",
              "Because he had not yet passed the American Board of Surgery examinations",
              "Because he had chosen to specialize in pathology rather than in surgery",
              "Because the Mayo Clinic had closed its residency program during the Depression",
            ],
            correctIndex: 0,
            explanation:
              "Specialty residencies were rarely given to African Americans in that era, which is the problem his Howard program set out to solve.",
            sourceLessonSlug: "the-surgeons-he-trained",
          },
          {
            prompt: "Before Drew, had Presbyterian Hospital granted residencies to African American physicians?",
            options: [
              "Never",
              "Yes, routinely, which is why Drew chose Presbyterian over the Mayo Clinic",
              "Once, to a surgeon who later chaired the department at Freedmen's Hospital",
              "Only in pathology, where patients did not see the physician",
            ],
            correctIndex: 0,
            explanation:
              "NLM says African American physicians had never been granted residencies or staff privileges there.",
            sourceLessonSlug: "the-surgeons-he-trained",
          },
          {
            prompt: "Where did Allen O. Whipple first assign Drew at Presbyterian?",
            options: [
              "Scudder's laboratory",
              "The outpatient clinic, where he saw patients without admitting privileges",
              "The emergency room, where the most urgent transfusions were given",
              "The Columbia library, to write up the history chapter of his thesis",
            ],
            correctIndex: 0,
            explanation:
              "Whipple assigned him to Scudder's surgical laboratory, assuming he would spend his fellowship there and not attend patients.",
            sourceLessonSlug: "the-surgeons-he-trained",
          },
          {
            prompt: "What did Drew persuade Whipple to do?",
            options: [
              "Train him as a resident",
              "Appoint him director of the Presbyterian blood bank in place of Scudder",
              "Write to the Mayo Clinic on his behalf for a residency there",
              "Admit Black patients to the surgical wards for the first time",
            ],
            correctIndex: 0,
            explanation:
              "He persuaded Whipple to train him as a resident, and Whipple became one of his strongest allies.",
            sourceLessonSlug: "the-surgeons-he-trained",
          },
          {
            prompt: "What does lesson 9 say a colleague's remark about Drew's light skin measures?",
            options: [
              "How narrow the door was",
              "How little race mattered in American surgery by the end of the 1930s",
              "How Drew hid his background from Whipple for the whole of his residency",
              "How the Red Cross chose which donors to accept in 1941",
            ],
            correctIndex: 0,
            explanation:
              "That it probably helped him to be very light-skinned shows how few could get through at all.",
            sourceLessonSlug: "the-surgeons-he-trained",
          },
          {
            prompt: "How many physicians did the 1943 figures count in the continental United States?",
            options: [
              "About 160,321",
              "About 3,618, which is the number Drew gave for Black physicians only",
              "About 37,000, the number he said were then assigned to the armed forces",
              "About 18,861, the number of donor appointments made for Blood for Britain",
            ],
            correctIndex: 0,
            explanation:
              "About 160,321, from the War Manpower Commission, of whom 3,618 were Black.",
            sourceLessonSlug: "the-surgeons-he-trained",
          },
          {
            prompt: "How many of those physicians were Black, according to Drew's 1943 figures?",
            options: [
              "3,618",
              "160,321, since the figures Drew quoted counted only Black physicians",
              "14,556, the number of donations collected for Blood for Britain",
              "52, which was the number he gave for the state of Mississippi alone",
            ],
            correctIndex: 0,
            explanation:
              "3,618, which is 2.3 percent of the national total.",
            sourceLessonSlug: "the-surgeons-he-trained",
          },
          {
            prompt: "What share of American physicians were Black, according to Drew's 1943 figures?",
            options: [
              "2.3 percent",
              "9.4 percent, the same as the share of plasma lost in Blood for Britain",
              "One third, since he said one third of physicians would go to the forces",
              "0.6 percent, which he gave as the share of all physicians",
            ],
            correctIndex: 0,
            explanation:
              "2.3 percent. The 0.6 percent in the talk is a different figure: the Black share of physicians already in the armed forces.",
            sourceLessonSlug: "the-surgeons-he-trained",
          },
          {
            prompt: "Counting Black physicians against the Black population, what ratio did Drew give?",
            options: [
              "One per 3,600",
              "One per 800, which is the ratio he gave for the population as a whole",
              "One per 1,500, the minimum he said civilians must keep during the war",
              "One per 137, the size of his graduating class at McGill",
            ],
            correctIndex: 0,
            explanation:
              "One Black physician for each 3,600 Black Americans, against about one physician per 800 people overall.",
            sourceLessonSlug: "the-surgeons-he-trained",
          },
          {
            prompt: "What ratio did Drew give for Mississippi?",
            options: [
              "One doctor per 20,000",
              "One doctor per 3,600, which he gave as the ratio for the country as a whole",
              "One doctor per 800, the same as the national figure for all Americans",
              "Mississippi had no Black physicians at all, according to the talk",
            ],
            correctIndex: 0,
            explanation:
              "Fifty-two Black physicians for approximately 1,074,578 Black residents, a ratio he gave as one doctor per 20,000.",
            sourceLessonSlug: "the-surgeons-he-trained",
          },
          {
            prompt: "What two causes did Drew name for the shortage of Black physicians?",
            options: [
              "Poverty and lack of training opportunity",
              "The war, which took young doctors, and the closure of Howard's medical school",
              "The blood policy, which drove Black doctors away from the Red Cross",
              "Low interest in medicine among Black students, and the cost of textbooks",
            ],
            correctIndex: 0,
            explanation:
              "The low economic status of the group, and \"the great paucity of opportunity for training in the higher professional fields\".",
            sourceLessonSlug: "the-surgeons-he-trained",
          },
          {
            prompt: "What examinations had Drew passed before returning to Howard in April 1941?",
            options: [
              "The American Board of Surgery's",
              "The Red Cross's examinations for blood bank directors, first held in 1941",
              "Columbia's qualifying examinations for a second doctorate in surgery",
              "The British Medical Research Council's examinations in bacteriology",
            ],
            correctIndex: 0,
            explanation:
              "He passed the American Board of Surgery examinations during his last months in New York.",
            sourceLessonSlug: "the-surgeons-he-trained",
          },
          {
            prompt: "What posts did Drew take up at Howard in October 1941?",
            options: [
              "Chair of Surgery and Chief of Surgery",
              "Dean of the College of Medicine and President of Howard University",
              "Director of Howard's blood bank and assistant professor of pathology",
              "Chief of Staff and Medical Director of Freedmen's Hospital at the same time",
            ],
            correctIndex: 0,
            explanation:
              "Chairman of the Department of Surgery and Chief of Surgery at Freedmen's Hospital, Howard's main teaching hospital.",
            sourceLessonSlug: "the-surgeons-he-trained",
          },
          {
            prompt: "What was Freedmen's Hospital to Howard University?",
            options: [
              "Its main teaching hospital",
              "Its rival, a separate institution that refused to train Howard's residents",
              "Its blood bank, which supplied plasma to the National Blood Donor Service",
              "Its administrative office, where no patients were ever treated",
            ],
            correctIndex: 0,
            explanation:
              "NLM calls it Howard's main teaching facility, where Drew was Chief of Surgery from October 1941.",
            sourceLessonSlug: "the-surgeons-he-trained",
          },
          {
            prompt: "What did Drew become the first African American to be appointed in October 1941?",
            options: [
              "An American Board of Surgery examiner",
              "Director of the National Blood Donor Service for the armed forces",
              "A fellow of the American College of Surgeons, after years of petitioning",
              "A member of the American Medical Association through the Washington society",
            ],
            correctIndex: 0,
            explanation:
              "An examiner for the American Board of Surgery. He never obtained AMA membership, and the College of Surgeons made him a fellow only after his death.",
            sourceLessonSlug: "the-surgeons-he-trained",
          },
          {
            prompt: "To what standard did Drew aim to train young African American surgeons, in NLM's words?",
            options: [
              "The most rigorous, in any specialty",
              "A separate standard designed for hospitals that served only Black patients",
              "The minimum needed to pass the examinations, so that more could qualify quickly",
              "Whatever standard the American Medical Association set for its members",
            ],
            correctIndex: 0,
            explanation:
              "Surgeons \"who would meet the most rigorous standards in any surgical specialty\", placed where they could carry that standard on.",
            sourceLessonSlug: "the-surgeons-he-trained",
          },
          {
            prompt: "What does NLM record Drew telling a friend about the blood bank and his other achievements?",
            options: [
              "They were only the preface",
              "They were the main work of his life, and teaching was only a sideline",
              "They belonged to Scudder, and he wanted no credit for them",
              "They were finished, and he would never work on blood again",
            ],
            correctIndex: 0,
            explanation:
              "NLM records that he called them \"only the preface in his life story\". The story itself was the surgeons.",
            sourceLessonSlug: "the-surgeons-he-trained",
          },
          {
            prompt: "What happened in December 1948?",
            options: [
              "His first residents passed their boards",
              "The Red Cross ended its policy of segregating blood from Black donors",
              "The American Medical Association admitted him as a member",
              "He received the Spingarn Medal for his work on plasma",
            ],
            correctIndex: 0,
            explanation:
              "His first group of residents passed their Board of Surgery certification exams, two of them with the top two scores.",
            sourceLessonSlug: "the-surgeons-he-trained",
          },
          {
            prompt: "What share of the Black surgeons certified between 1941 and 1950 did Drew train, according to NLM?",
            options: [
              "More than half",
              "All of them, since no other program trained Black surgeons in those years",
              "About a tenth, since most trained at white hospitals in the North",
              "None directly, since he taught only medical students, not residents",
            ],
            correctIndex: 0,
            explanation:
              "More than half, eight surgeons by NLM's count, and another fourteen who passed later had part of their training with him.",
            sourceLessonSlug: "the-surgeons-he-trained",
          },
          {
            prompt: "How many surgeons who passed later had received part of their training with Drew?",
            options: [
              "Fourteen",
              "Eight, which NLM gives as the number he trained who were certified by 1950",
              "137, the number of students in his graduating class at McGill",
              "3,618, the number of Black physicians in the country in 1943",
            ],
            correctIndex: 0,
            explanation:
              "Another fourteen, on top of the eight certified between 1941 and 1950.",
            sourceLessonSlug: "the-surgeons-he-trained",
          },
          {
            prompt: "Why could Drew not become a member of the American Medical Association?",
            options: [
              "The local DC society excluded him",
              "Because the AMA required members to have trained at an American medical school",
              "Because he refused to apply until the Red Cross changed its blood policy",
              "Because the AMA admitted only doctors in private practice, not teachers",
            ],
            correctIndex: 0,
            explanation:
              "National membership ran through local societies, and as an African American he was excluded from the District of Columbia society.",
            sourceLessonSlug: "the-surgeons-he-trained",
          },
          {
            prompt: "Why was AMA membership not a formality, according to NLM?",
            options: [
              "Privileges and training depended on it",
              "Because members received a salary from the association for their work",
              "Because only members were allowed to publish in medical journals",
              "Because only members could be awarded the Spingarn Medal",
            ],
            correctIndex: 0,
            explanation:
              "Hospital privileges and specialty training were increasingly contingent on AMA membership, so local exclusion had national effects.",
            sourceLessonSlug: "the-surgeons-he-trained",
          },
          {
            prompt: "When did the American College of Surgeons make Drew a fellow?",
            options: [
              "Only after his death",
              "In October 1941, the same month he became chairman of surgery at Howard",
              "In 1946, the year he was elected to the International College of Surgeons",
              "Never; it refused him to the end and has not changed its decision since",
            ],
            correctIndex: 0,
            explanation:
              "Posthumously. The International College of Surgeons elected him in 1946; that is a different body.",
            sourceLessonSlug: "the-surgeons-he-trained",
          },
          {
            prompt: "What mechanism does lesson 9 say links the AMA's exclusion to the blood policy?",
            options: [
              "A gatekeeper deciding who counts",
              "A shortage of money, which forced both institutions to limit their numbers",
              "A legal requirement, which both institutions were obliged to obey",
              "A scientific finding, which both institutions misread in the same way",
            ],
            correctIndex: 0,
            explanation:
              "A national body lets a local gatekeeper decide who counts, the same shape as a donor program that decides who may give.",
            sourceLessonSlug: "the-surgeons-he-trained",
          },
          {
            prompt: "What does NLM say Drew's legacy is embodied in \"especially\"?",
            options: [
              "Howard's medical graduates",
              "The bloodmobiles he introduced during the 1941 Red Cross pilot program",
              "The 1941 report on Blood for Britain, which a Red Cross history later praised",
              "The dissertation, the 356-page study of stored blood he completed in 1940",
            ],
            correctIndex: 0,
            explanation:
              "\"Embodied in his blood bank work and especially in the graduates of the Howard University College of Medicine.\"",
            sourceLessonSlug: "the-surgeons-he-trained",
          },
          {
            prompt: "What is the first clause of the one-sentence credit that lesson 10 assembles?",
            options: [
              "He did not invent the blood bank",
              "He invented the blood bank, and then made it work on a national scale",
              "He was the first director of the American Red Cross blood bank",
              "He resigned in protest when the Red Cross segregated blood",
            ],
            correctIndex: 0,
            explanation:
              "The sentence starts by removing the over-credit, then adds back everything the record supports.",
            sourceLessonSlug: "crediting-him-correctly",
          },
          {
            prompt: "In the one-sentence credit, with whom did Drew run the experimental bank at Presbyterian?",
            options: [
              "John Scudder",
              "Bernard Fantus, who came from Chicago to set up the New York bank",
              "Morris M. Davidson, the volunteer who ran the Blood Plasma Division",
              "Allen O. Whipple, the surgeon who took him on as a resident",
            ],
            correctIndex: 0,
            explanation:
              "With John Scudder, who suggested the investigation and directed its laboratory side.",
            sourceLessonSlug: "crediting-him-correctly",
          },
          {
            prompt: "In the one-sentence credit, what did Drew do as medical supervisor of Blood for Britain?",
            options: [
              "Set standards, records and central checks",
              "Discovered that plasma could be used as a substitute for whole blood",
              "Raised the money for the program from the Red Cross and the trustees",
              "Negotiated the shipping of plasma with the British government",
            ],
            correctIndex: 0,
            explanation:
              "The standards, records and central checks that let nine hospitals make one safe product. NLM says he did not discover plasma as a substitute.",
            sourceLessonSlug: "crediting-him-correctly",
          },
          {
            prompt: "In the one-sentence credit, under whose rules was Drew ineligible to give blood to the program?",
            options: [
              "The Red Cross pilot's",
              "Blood for Britain's, which barred all doctors working on the project",
              "Presbyterian Hospital's, which barred its own staff from donating",
              "The British government's, which set the donor rules for the plasma",
            ],
            correctIndex: 0,
            explanation:
              "The pilot excluded Black donors at the armed forces' insistence, which made its assistant director ineligible.",
            sourceLessonSlug: "crediting-him-correctly",
          },
          {
            prompt: "Which of these is one of the three harms lesson 10 says a flattering exaggeration does?",
            options: [
              "It erases other people",
              "It makes the subject too famous, so that historians stop writing about him",
              "It is illegal, since false claims about a real person can be prosecuted",
              "It confuses dates, which is harmful only in examinations",
            ],
            correctIndex: 0,
            explanation:
              "It erases other people, it crowds out the subject's own work, and it makes the true record easier to attack.",
            sourceLessonSlug: "crediting-him-correctly",
          },
          {
            prompt: "Which person does the flattering story erase as the one who named the blood bank?",
            options: [
              "Bernard Fantus",
              "John Scudder, who suggested the investigation that became the dissertation",
              "Helen Stoddart, the nurse in charge of the Presbyterian bank",
              "Frank Meleney, who ran the central laboratory for Blood for Britain",
            ],
            correctIndex: 0,
            explanation:
              "Fantus named it. The others are also erased by the invention story, each for a different contribution.",
            sourceLessonSlug: "crediting-him-correctly",
          },
          {
            prompt: "What does lesson 10 say the invention claim crowds out of Drew's own record?",
            options: [
              "The demonstrable part",
              "His athletic career at Amherst, which the invention story makes seem unimportant",
              "His boyhood jobs in Washington, selling newspapers and working as a lifeguard",
              "His early wish to become an electrical engineer, recorded in his yearbook",
            ],
            correctIndex: 0,
            explanation:
              "Measurements, standards, a report others used, and a generation of surgeons: the part a reader can check.",
            sourceLessonSlug: "crediting-him-correctly",
          },
          {
            prompt: "Why does a false flattering claim make the true record easier to attack?",
            options: [
              "Knocking it down discredits the rest",
              "Because true claims are always harder to remember than false ones",
              "Because false claims are copied more often and push true ones out of print",
              "Because critics are forbidden from attacking claims that are well sourced",
            ],
            correctIndex: 0,
            explanation:
              "Whoever knocks down the false claim gets to imply the rest was false too, so the correction lands on Drew instead of on the story.",
            sourceLessonSlug: "crediting-him-correctly",
          },
          {
            prompt: "What does lesson 10 give as the defence against that kind of attack?",
            options: [
              "Hold the true claims first",
              "Repeat the flattering claim more often than its critics repeat the correction",
              "Avoid writing about the subject until every document has been found",
              "Rely only on sources written by the subject's family and colleagues",
            ],
            correctIndex: 0,
            explanation:
              "A record built on true claims has nothing to knock down.",
            sourceLessonSlug: "crediting-him-correctly",
          },
          {
            prompt: "In the 1947 letter, what did Drew say crumbles when someone breaks out by a worthwhile contribution?",
            options: [
              "A part of the wall",
              "The blood bank's reputation, which he said depended on one famous name",
              "The Red Cross's policy, which he predicted would end within the year",
              "The distinction between science and teaching in a medical school",
            ],
            correctIndex: 0,
            explanation:
              "Not only is that person allowed more freedom, \"but a part of the wall crumbles\", the wall of the \"high-walled prison\" he described.",
            sourceLessonSlug: "crediting-him-correctly",
          },
          {
            prompt: "What does lesson 10 conclude from the two sentences in the 1947 letter?",
            options: [
              "The credit was shared; the contribution was his",
              "That Drew did not believe individual contributions mattered at all in science",
              "That the letter contradicts itself and cannot be used as evidence",
              "That Drew privately thought he deserved sole credit for the blood bank",
            ],
            correctIndex: 0,
            explanation:
              "Both are true of him at once: many people did the work, and his worthwhile contribution was real.",
            sourceLessonSlug: "crediting-him-correctly",
          },
          {
            prompt: "In the checklist, why is \"everyone knows\" not good enough?",
            options: [
              "It names no source",
              "Because popular knowledge is always wrong about historical figures",
              "Because it is too informal a phrase for a written course",
              "Because it refers to living people, whose views change",
            ],
            correctIndex: 0,
            explanation:
              "The first question is \"Which source?\", and \"everyone knows\" does not answer it.",
            sourceLessonSlug: "crediting-him-correctly",
          },
          {
            prompt: "Which example does the checklist give under \"What exact words?\"",
            options: [
              "\"Has been called\" is not \"invented\"",
              "\"Medical Supervisor\" means the same as \"Director of the Blood Plasma Division\"",
              "\"First\" and \"large-scale\" mean the same thing in NLM's sentence",
              "\"There\" means the United States in NLM's sentence about the degree",
            ],
            correctIndex: 0,
            explanation:
              "Also \"Assistant Director\" is not \"director\", and \"there\" is not \"in the United States\". Each is a single word doing the work.",
            sourceLessonSlug: "crediting-him-correctly",
          },
          {
            prompt: "What does the checklist's \"Whose evidence?\" ask?",
            options: [
              "Own documents, or a repeated account?",
              "Whether the author is related to the person the claim is about",
              "Whether the claim has been printed in at least three places",
              "Whether the claim is older than the subject's death",
            ],
            correctIndex: 0,
            explanation:
              "Is the source reporting its own documents, or repeating another account? A repetition is only as good as the account it repeats.",
            sourceLessonSlug: "crediting-him-correctly",
          },
          {
            prompt: "What extra question does the checklist attach to \"Who drops out?\"",
            options: [
              "Did the subject himself name them?",
              "Were they paid for their work, or did they volunteer it?",
              "Are they still alive, and can they be interviewed?",
              "Did they later become famous in their own right?",
            ],
            correctIndex: 0,
            explanation:
              "For Drew the answer is yes, repeatedly: Scudder, Smith, the nurse, Fantus, the Soviet workers. The subject's own credit list is strong evidence.",
            sourceLessonSlug: "crediting-him-correctly",
          },
          {
            prompt: "What does the checklist say to do if a great deal is left once the flattery is gone?",
            options: [
              "Teach that",
              "Restore the flattery, since the remaining record is too complicated to teach",
              "Drop the subject, since a corrected story is no longer worth teaching",
              "Wait for a new biography before teaching anything about the subject",
            ],
            correctIndex: 0,
            explanation:
              "For Drew, what is left is research, standards, a public argument, and a generation of surgeons. That is the course.",
            sourceLessonSlug: "crediting-him-correctly",
          },
          {
            prompt: "Which other CREDIT course does lesson 10 say teaches the science before asking the credit question?",
            options: [
              "The Esther Lederberg course",
              "Who Gets the Credit, which is built around the patent system and inventors",
              "A course on the history of the American Red Cross in the Second World War",
              "A course on the Soviet cadaver-blood program and its critics",
            ],
            correctIndex: 0,
            explanation:
              "The Lederberg course teaches the technique first, and also warns against retellings that overshoot in her favour.",
            sourceLessonSlug: "crediting-him-correctly",
          },
          {
            prompt: "Why does lesson 10 call Drew the clearest case of the double error?",
            options: [
              "He said himself the story was too simple",
              "Because his case has no surviving documents, so every claim is equally uncertain",
              "Because every source about him agrees on every detail, so nothing needs checking",
              "Because he is the only person in the catalog who was ever over-credited",
            ],
            correctIndex: 0,
            explanation:
              "The man at the centre of the story told us, in writing, that one name should not be chosen from the list.",
            sourceLessonSlug: "crediting-him-correctly",
          },
          {
            prompt: "In lesson 10's vocabulary, how can an attribution be wrong?",
            options: [
              "By giving too much or too little",
              "Only by giving too little, since extra credit never harms anyone",
              "Only by naming the wrong person, never by the amount of credit given",
              "Only when it is made after the subject's death",
            ],
            correctIndex: 0,
            explanation:
              "Attribution can err in both directions, which is the spine of this course.",
            sourceLessonSlug: "crediting-him-correctly",
          },
          {
            prompt: "What does lesson 10 call knocking down a false claim so hard that true claims fall with it?",
            options: [
              "Overcorrection",
              "Under-credit, the error of giving a person less than the record shows",
              "Claim drift, the change a statement picks up as it is retold",
              "Priority, the question of who did something first",
            ],
            correctIndex: 0,
            explanation:
              "Overcorrection. It is how a debunking of the invention story can take the real Drew down with it.",
            sourceLessonSlug: "crediting-him-correctly",
          },
          {
            prompt: "What makes a contribution \"demonstrable\" in lesson 10's sense?",
            options: [
              "A reader can confirm it from documents",
              "It has been repeated in a large number of popular articles and books",
              "It was announced by the person who made it in a public speech",
              "It is included in the person's official obituary",
            ],
            correctIndex: 0,
            explanation:
              "Such as the dissertation's measurements or the project report's credit line: things a reader can check.",
            sourceLessonSlug: "crediting-him-correctly",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // FINAL — placed last, pooling 41 and serving 10
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "who-built-the-blood-bank-final",
      title: "Final assessment · Who Built the Blood Bank",
      section: "Final assessment",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Which statement best captures this course's thesis about Charles Drew?",
            options: [
              "Over-credited and under-credited at once",
              "Fully credited, since the popular story matches the documents in every detail",
              "Over-credited only, since the documents show he contributed little of substance",
              "Under-credited only, since the documents show he did invent blood banking in 1939",
            ],
            correctIndex: 0,
            explanation:
              "The popular story gives him an invention others made and leaves out the research, the program standards and the surgeons he trained.",
            sourceLessonSlug: "credited-wrong-both-ways",
          },
          {
            prompt: "Which source says Drew \"has been called\" the father of the blood bank?",
            options: [
              "The National Library of Medicine",
              "The Science History Institute, which uses exactly the same words in its biography",
              "Drew's own dissertation, in its opening chapter on the evolution of the blood bank",
              "The 1941 report on Blood for Britain, in its list of the people who led the work",
            ],
            correctIndex: 0,
            explanation:
              "NLM's collection summary. The Science History Institute says he \"earned\" the title, which is warmer, and neither says he invented anything.",
            sourceLessonSlug: "credited-wrong-both-ways",
          },
          {
            prompt: "What were Drew's birth and death dates, according to NLM?",
            options: [
              "3 June 1904 to 1 April 1950",
              "3 June 1904 to 1 April 1951, which would make him 46 when he died",
              "1 April 1904 to 3 June 1950, with the day and month of each date swapped",
              "3 June 1905 to 1 April 1950, a year later than the date NLM records",
            ],
            correctIndex: 0,
            explanation:
              "Two NLM pages give the same dates, which make him 45. When sources disagree about an age, the dates settle it.",
            sourceLessonSlug: "credited-wrong-both-ways",
          },
          {
            prompt: "What did Drew tell Mrs. Bates about credit for advances in science?",
            options: [
              "Many people's work is involved",
              "That the first person to publish should always receive the whole of the credit",
              "That credit mattered less than money, which science never had enough of",
              "That credit belonged to institutions such as Howard rather than to people",
            ],
            correctIndex: 0,
            explanation:
              "Wherever an advance is made the work of many people is involved, and it seems a little unfair that one name is chosen from the list.",
            sourceLessonSlug: "credited-wrong-both-ways",
          },
          {
            prompt: "Which popular claim is corrected by the title \"Assistant Director of the first American Red Cross Blood Bank\"?",
            options: [
              "That he was the first director",
              "That he invented the blood bank at Cook County Hospital in Chicago in 1937",
              "That he died because a white hospital in North Carolina refused him blood",
              "That he earned the first Doctor of Medical Science ever awarded by Columbia",
            ],
            correctIndex: 0,
            explanation:
              "The popular version moved \"first\" from the bank to the man and dropped \"Assistant\". Claim drift, two words long.",
            sourceLessonSlug: "four-claims-checked",
          },
          {
            prompt: "What evidence does NLM find that Drew left the Red Cross program in protest?",
            options: [
              "None",
              "A letter of resignation dated January 1942, held in the Drew Papers at Howard",
              "A statement he gave to the Black press on the day the exclusion began",
              "The testimony of Scudder, who said Drew left in anger over the policy",
            ],
            correctIndex: 0,
            explanation:
              "NLM: there is no evidence the exclusion policy was his reason for leaving the pilot. He returned to Howard in April 1941, as he had always planned.",
            sourceLessonSlug: "four-claims-checked",
          },
          {
            prompt: "Who coined the term \"blood bank\", and where?",
            options: [
              "Fantus, in Chicago",
              "Drew, in New York, in the title of his 1940 dissertation at Columbia",
              "Scudder, in New York, in the committee report to Presbyterian Hospital",
              "Robertson, in France, while running a small stored-blood service in wartime",
            ],
            correctIndex: 0,
            explanation:
              "Bernard Fantus, at Cook County Hospital in Chicago, in 1937. NLM says so and so does Drew's own dissertation.",
            sourceLessonSlug: "four-claims-checked",
          },
          {
            prompt: "Of the four popular claims, which one is simply false rather than a true fact bent?",
            options: [
              "The death story",
              "The invention story, since Drew had no connection with blood banks at all",
              "The director story, since Drew held no post of any kind at the Red Cross",
              "The protest story, since Drew never criticized the blood policy in public",
            ],
            correctIndex: 0,
            explanation:
              "The other three bend real facts: a real field he worked in, a real title with a word dropped, a real policy he really opposed. The death story is false, and lesson 17 of Who Gets the Credit corrects it.",
            sourceLessonSlug: "four-claims-checked",
          },
          {
            prompt: "To whom did Drew's 1944 article credit the origin of the world-wide institution of blood banks?",
            options: [
              "Soviet investigators",
              "Himself and John Scudder, working together at Presbyterian Hospital from 1939",
              "The American Red Cross, whose pilot program he had helped to run in 1941",
              "Bernard Fantus alone, whose Chicago bank he called the true beginning",
            ],
            correctIndex: 0,
            explanation:
              "\"Fundamentally, it is a Russian contribution.\" The man called the father of the blood bank named someone else.",
            sourceLessonSlug: "before-drew",
          },
          {
            prompt: "Who performed twenty-two successful transfusions with stored blood in the First World War?",
            options: [
              "Oswald Robertson",
              "Charles Drew, as a young medical officer before he went to Amherst College",
              "Durán Jordà, who later organized the Barcelona Blood Transfusion Service",
              "Karl Landsteiner, as part of his work identifying the four blood groups",
            ],
            correctIndex: 0,
            explanation:
              "Robertson set up a temporary small-scale blood bank in that war, two decades before the Cook County bank.",
            sourceLessonSlug: "before-drew",
          },
          {
            prompt: "What did Drew call the Barcelona Blood Transfusion Service?",
            options: [
              "The best system yet devised",
              "A failure, since it could not keep blood sterile in the conditions of civil war",
              "A copy of the Cook County bank, adapted for use by the Republican army",
              "An experiment too small to teach American hospitals anything useful",
            ],
            correctIndex: 0,
            explanation:
              "\"The best system of collection and distribution of blood yet devised\", which distributed over 9,000 liters by his account.",
            sourceLessonSlug: "before-drew",
          },
          {
            prompt: "Which body, founded in 1929, funded much of Drew's experimental work and later ran Blood for Britain?",
            options: [
              "The Betterment Association",
              "The American Medical Association, through its committee on blood transfusion",
              "The National Research Council, through its committee on transfusion formed in 1940",
              "The NAACP, which later awarded him the Spingarn Medal for the work",
            ],
            correctIndex: 0,
            explanation:
              "The Blood Transfusion Betterment Association of New York, founded in 1929 to supply tested donors and fund research.",
            sourceLessonSlug: "before-drew",
          },
          {
            prompt: "Whom did Drew's acknowledgements thank for suggesting the investigation behind Banked Blood?",
            options: [
              "John Scudder",
              "Allen O. Whipple, who gave him the privilege of working in the Surgery Department",
              "Margaret E. Smith, who worked out the technique of the ammonia determinations",
              "The General Education Board, which paid for his fellowship at Columbia",
            ],
            correctIndex: 0,
            explanation:
              "Scudder, \"who suggested this investigation and has actively participated in or guided nearly every step of it\". The others are thanked for other things.",
            sourceLessonSlug: "banked-blood",
          },
          {
            prompt: "What was Drew appointed to do at the Presbyterian experimental bank in 1939?",
            options: [
              "Manage it and lead clinical work",
              "Chair the committee that decided whether to try a blood bank at all",
              "Direct the laboratory side while Scudder managed the bank itself",
              "Recruit donors through the New York chapter of the American Red Cross",
            ],
            correctIndex: 0,
            explanation:
              "To manage the bank and direct clinical investigations. Scudder directed the laboratory and experimental side; St. John chaired the committee.",
            sourceLessonSlug: "banked-blood",
          },
          {
            prompt: "What did the dissertation advise for blood stored longer than about a week?",
            options: [
              "Keep the plasma, in saline",
              "Discard it entirely, since blood older than a week could never be given safely",
              "Freeze it whole, since freezing kept red cells alive for months",
              "Give it only to patients of the same race as the donor",
            ],
            correctIndex: 0,
            explanation:
              "Remove the plasma from the cells and store it in saline for future use: the bridge from a hospital bank to Blood for Britain.",
            sourceLessonSlug: "banked-blood",
          },
          {
            prompt: "According to NLM, what exactly was Drew the first African American to earn?",
            options: [
              "Columbia's Doctor of Medical Science",
              "Any doctorate in medical science anywhere in the United States of America",
              "A surgical residency at the Mayo Clinic, after he left McGill in 1933",
              "Membership of the American Medical Association, in the District of Columbia",
            ],
            correctIndex: 0,
            explanation:
              "\"The first African American to earn the degree there\": at Columbia. The course does not stretch \"there\" to the whole country.",
            sourceLessonSlug: "banked-blood",
          },
          {
            prompt: "Which pairing correctly matches a date to its event?",
            options: [
              "9 August 1939, Presbyterian bank opens",
              "March 1937, Blood for Britain begins collecting at Presbyterian Hospital",
              "17 January 1941, the Red Cross begins accepting Black donors' blood",
              "October 1941, Drew accepts the Spingarn Medal from the NAACP",
            ],
            correctIndex: 0,
            explanation:
              "March 1937 is Cook County; 17 January 1941 is the last blood taken for Britain; October 1941 is the Howard chair; the Spingarn Medal was 1944.",
            sourceLessonSlug: "banked-blood",
          },
          {
            prompt: "What was Drew's title on Blood for Britain, as the 1941 report gives it?",
            options: [
              "Medical Supervisor",
              "Director of the American Red Cross, with charge of the whole national program",
              "Director of the Blood Plasma Division, with charge of its administration",
              "Chairman of the Board of Medical Control of the Blood Transfusion Association",
            ],
            correctIndex: 0,
            explanation:
              "Medical Supervisor, with charge of the medical aspects, uniform records, standard equipment and criteria. Morris M. Davidson was the volunteer Director of the division.",
            sourceLessonSlug: "blood-for-britain",
          },
          {
            prompt: "How many donations did Blood for Britain take, and at how many hospitals?",
            options: [
              "14,556, at nine hospitals",
              "18,861, at six hospitals, since no hospital joined after the first group began",
              "5,500, at twenty hospitals, every one that had offered to cooperate",
              "4,712, at three hospitals: Presbyterian, Mount Sinai and New York Hospital",
            ],
            correctIndex: 0,
            explanation:
              "14,556 donations from 18,861 appointments, at six hospitals joined later by three more.",
            sourceLessonSlug: "blood-for-britain",
          },
          {
            prompt: "What is the precise claim NLM makes for Drew's role in blood banking?",
            options: [
              "America's first large-scale program",
              "The first blood bank anywhere in the world, opened in New York in 1939",
              "The discovery of plasma as a substitute for whole blood in treating shock",
              "The invention of sodium citrate as an anticoagulant for stored blood",
            ],
            correctIndex: 0,
            explanation:
              "Conceiving, organizing and directing America's first large-scale blood banking program. The report called Blood for Britain \"this first large project of its kind\".",
            sourceLessonSlug: "blood-for-britain",
          },
          {
            prompt: "Which pairing correctly matches a person to a role in Blood for Britain?",
            options: [
              "Davidson, volunteer director",
              "Scudder, the nurse in charge of the experimental bank at Presbyterian Hospital",
              "Meleney, the British scientist who cabled to report contaminated plasma",
              "Fantus, the Medical Supervisor recalled to New York in September 1940",
            ],
            correctIndex: 0,
            explanation:
              "Morris M. Davidson was the full-time volunteer Director of the Blood Plasma Division. Scudder first proposed the plan; Meleney ran the central laboratory; Drew was Medical Supervisor.",
            sourceLessonSlug: "blood-for-britain",
          },
          {
            prompt: "What did Drew's November 1940 report blame for the contaminated plasma found in England?",
            options: [
              "Controls not yet in place",
              "The British Medical Research Council's laboratory, whose tests he said were faulty",
              "A single careless donor at Mount Sinai Hospital who had concealed an infection",
              "The shipping company, whose cargo holds were too warm for plasma",
            ],
            correctIndex: 0,
            explanation:
              "The flasks were shipped in August, before the technique was worked out, before the central laboratory, before each pool was tested separately.",
            sourceLessonSlug: "one-standard",
          },
          {
            prompt: "Where was the central laboratory that retested samples from every hospital's pools?",
            options: [
              "Presbyterian Hospital",
              "Howard University, where Drew had returned to teach in June 1940",
              "The Red Cross national headquarters in Washington, DC",
              "Cook County Hospital in Chicago, which had the oldest blood bank",
            ],
            correctIndex: 0,
            explanation:
              "At Presbyterian, under Frank L. Meleney's direction with Miss Balbina Johnson supervising, designated by Drew for the final check.",
            sourceLessonSlug: "one-standard",
          },
          {
            prompt: "What did uniform records make possible in a nine-hospital program?",
            options: [
              "Tracing any container",
              "Paying each hospital the same fee regardless of how much plasma it produced",
              "Dropping the central laboratory's tests for hospitals with good records",
              "Publishing donors' names in the newspapers as a thank-you",
            ],
            correctIndex: 0,
            explanation:
              "One master book and one serial scheme for donors, pools, cartons and bottles, so any container could be traced back through the process.",
            sourceLessonSlug: "one-standard",
          },
          {
            prompt: "What does NLM say about Drew and plasma as a blood substitute?",
            options: [
              "Not his discovery; his leadership",
              "That he discovered it in 1939 at Presbyterian and published the finding in 1940",
              "That he opposed its use and argued for shipping whole blood to Britain instead",
              "That it was discovered by Fantus, who then taught the method to Drew",
            ],
            correctIndex: 0,
            explanation:
              "He \"didn't 'discover' plasma as a blood substitute\", but \"his expertise and leadership were largely responsible for the program's success\".",
            sourceLessonSlug: "one-standard",
          },
          {
            prompt: "In what order did the blood policies on Black donors come, from 1940 to 1942?",
            options: [
              "Segregation, exclusion, segregation",
              "Exclusion throughout, with no segregation at any stage of the program",
              "Segregation throughout, with no period of exclusion at any point",
              "Full acceptance in 1940, then exclusion, then full acceptance again in 1942",
            ],
            correctIndex: 0,
            explanation:
              "Blood for Britain segregated; the Red Cross pilot and the national service excluded; in January 1942 the Red Cross accepted and segregated.",
            sourceLessonSlug: "excluded-then-segregated",
          },
          {
            prompt: "What did the Red Cross pilot's exclusion of Black donors mean for Drew?",
            options: [
              "He could not donate to it",
              "He was removed from his post as assistant director and replaced",
              "He was asked to run a separate program for Black donors in Washington",
              "Nothing, since the rule did not apply to members of the staff",
            ],
            correctIndex: 0,
            explanation:
              "NLM: he was \"ineligible to participate in the program he helped establish\". Its assistant director could not have given blood to it.",
            sourceLessonSlug: "excluded-then-segregated",
          },
          {
            prompt: "When did the Red Cross announce that it would accept Black donors' blood, but segregate it?",
            options: [
              "January 1942",
              "August 1940, when Blood for Britain opened officially in New York",
              "April 1941, the month Drew returned to his post at Howard",
              "November 1941, when the National Blood Donor Service officially began",
            ],
            correctIndex: 0,
            explanation:
              "January 1942. In November 1941 the national service had begun with the exclusion still in place.",
            sourceLessonSlug: "excluded-then-segregated",
          },
          {
            prompt: "Who insisted that the Red Cross pilot exclude Black donors, according to NLM?",
            options: [
              "The armed forces",
              "Drew himself, as assistant director responsible for donor criteria",
              "The British government, as a condition of receiving further plasma",
              "Presbyterian Hospital's Medical Board, which housed the pilot",
            ],
            correctIndex: 0,
            explanation:
              "The pilot, \"at the insistence of the armed forces, excluded black donors\". Nothing in the sources attributes the policy to Drew.",
            sourceLessonSlug: "excluded-then-segregated",
          },
          {
            prompt: "How did Drew describe the blood policies, according to NLM's overview?",
            options: [
              "Unscientific and insulting",
              "Necessary for wartime morale, though regrettable once the war had ended",
              "A matter for the British, since they had requested the policy first",
              "Justified by his own findings on stored blood at Presbyterian Hospital",
            ],
            correctIndex: 0,
            explanation:
              "\"Throughout the war, Drew criticized these policies as unscientific and insulting to African Americans.\"",
            sourceLessonSlug: "what-drew-said",
          },
          {
            prompt: "Accepting which award in 1944 did Drew call the policy \"stupidity\"?",
            options: [
              "The Spingarn Medal",
              "An honorary doctorate from Amherst College, where he had studied",
              "Fellowship of the American College of Surgeons, after years of petitions",
              "The E. S. Jones Award for Research in Medical Science",
            ],
            correctIndex: 0,
            explanation:
              "The NAACP's Spingarn Medal, awarded for his work on the British and American plasma projects.",
            sourceLessonSlug: "what-drew-said",
          },
          {
            prompt: "In his 1943 radio talk, which two policies did Drew name as different things?",
            options: [
              "Segregation and exclusion",
              "Taxation and conscription, which he said fell hardest on Black families",
              "Plasma and whole blood, which he said the armed forces confused",
              "Residency and fellowship, which he said Howard could not afford",
            ],
            correctIndex: 0,
            explanation:
              "The Army's policy of segregation and the Navy's policy of exclusion: the same distinction lesson 7 draws for the blood program.",
            sourceLessonSlug: "what-drew-said",
          },
          {
            prompt: "What does the course say is stronger than the resignation-in-protest story?",
            options: [
              "Years of public argument",
              "A different resignation, from the National Research Council in 1942",
              "A secret campaign he ran through private letters to Red Cross officials",
              "His silence, which the course reads as a more dignified protest",
            ],
            correctIndex: 0,
            explanation:
              "He argued in print, on the radio and from the podium, on the record, for years. That is documented; the resignation is not.",
            sourceLessonSlug: "what-drew-said",
          },
          {
            prompt: "What did Drew say, in the phrase NLM uses as a chapter title, was his chief interest?",
            options: [
              "Surgery",
              "Blood banking, which he meant to return to after the war",
              "Athletics, which he coached at Morgan College before medical school",
              "Research on the Soviet cadaver-blood program",
            ],
            correctIndex: 0,
            explanation:
              "\"My chief interest was and is surgery.\" NLM records that he called the blood bank only the preface.",
            sourceLessonSlug: "the-surgeons-he-trained",
          },
          {
            prompt: "What post did Drew take up at Howard in October 1941?",
            options: [
              "Chair of the Department of Surgery",
              "Director of the National Blood Donor Service, run from Freedmen's Hospital",
              "Dean of the College of Medicine, succeeding Numa P. G. Adams",
              "Instructor in pathology, the post he first held at Howard in 1935",
            ],
            correctIndex: 0,
            explanation:
              "Chairman of the Department of Surgery and Chief of Surgery at Freedmen's Hospital, and that month the first African American examiner for the American Board of Surgery.",
            sourceLessonSlug: "the-surgeons-he-trained",
          },
          {
            prompt: "Why was Drew never a member of the American Medical Association?",
            options: [
              "The DC society excluded him",
              "Because he refused to join while the Red Cross segregated blood",
              "Because the AMA did not admit surgeons who had trained in Canada",
              "Because he died before his application could be considered",
            ],
            correctIndex: 0,
            explanation:
              "Membership ran through local societies, and as an African American he was excluded from the District of Columbia society. He petitioned repeatedly.",
            sourceLessonSlug: "the-surgeons-he-trained",
          },
          {
            prompt: "How did Drew's first group of residents do on their board examinations in December 1948?",
            options: [
              "They passed, with the top two scores",
              "They failed, and passed only after he had died in 1950",
              "They were refused permission to sit the examinations because of their race",
              "Half passed, which was the national average at the time",
            ],
            correctIndex: 0,
            explanation:
              "They passed their Board of Surgery certification exams, two of them with the top two scores.",
            sourceLessonSlug: "the-surgeons-he-trained",
          },
          {
            prompt: "What is the first question on the course's checklist for a biographical claim?",
            options: [
              "Which source?",
              "Is the claim flattering to the person, and would they have approved of it?",
              "How many times has the claim been repeated in popular books?",
              "Was the claim made during the person's lifetime or afterwards?",
            ],
            correctIndex: 0,
            explanation:
              "Which source, what exact words, whose evidence, who drops out, and what is left when the flattery is gone.",
            sourceLessonSlug: "crediting-him-correctly",
          },
          {
            prompt: "What does a flattering exaggeration do to the true record, according to lesson 10?",
            options: [
              "Makes it easier to attack",
              "Protects it, since a larger claim draws attention to the smaller true ones",
              "Replaces it permanently, since corrections are never read",
              "Nothing, since exaggerations and facts are kept in separate sources",
            ],
            correctIndex: 0,
            explanation:
              "Whoever knocks down the false claim gets to imply the rest was false too. The defence is to hold the true claims first.",
            sourceLessonSlug: "crediting-him-correctly",
          },
          {
            prompt: "Whom does the invention story erase?",
            options: [
              "Fantus, Scudder and many others",
              "Nobody, since blood banking had no history before Drew's work in 1939",
              "Only the Red Cross, which is the one body that deserves the credit instead",
              "Only Drew's family, who are left out of every retelling",
            ],
            correctIndex: 0,
            explanation:
              "Fantus, Robertson, the Soviet and Spanish workers, Scudder, the Presbyterian staff, Davidson, Meleney, Johnson and some two thousand volunteers.",
            sourceLessonSlug: "crediting-him-correctly",
          },
          {
            prompt: "What does the course mean by overcorrection?",
            options: [
              "Taking the true claims down too",
              "Correcting a claim more than once in the same lesson, which confuses learners",
              "Adding more citations than a claim strictly needs to be believed",
              "Replacing a false claim with an even more flattering true one",
            ],
            correctIndex: 0,
            explanation:
              "Knocking down a false claim so hard that the true claims about the same person fall with it. The course corrects the story, not the man.",
            sourceLessonSlug: "crediting-him-correctly",
          },
        ],
      },
    },
  ],
};

// ══════════════════════════════════════════════════════════════════════════════════════════════
// PROPOSED RESEARCH CHECKS for src/lib/research-checks.ts (I do not own that file; these are for
// whoever registers the course). Each is written in the ResearchCheck shape. `course` is the slug
// to be registered, `who-built-the-blood-bank`.
//
//  A. key "drew-red-cross-director" · severity medium · lesson "four-claims-checked"
//     title: Who held the director's post at the first American Red Cross blood bank (1941)?
//     quote: "The sources this course read do not say who held the director's post, so this course
//            does not guess."
//     claim: Drew was Assistant Director of the first American Red Cross Blood Bank (Presbyterian
//            Hospital, New York), per NLM's Brief chronology; the director is not named.
//     stakes: Naming the director would finish the correction of the "first director" myth; a
//            wrong name would create a new myth.
//     needs: the director's name and title, with the document that states it.
//     where: Drew Papers at Moorland-Spingarn; Kendrick, "Blood Program in World War II" (U.S.
//            Army Medical Department, listed on NLM's Further Resources page); Red Cross records.
//
//  B. key "drew-red-cross-appointment-month" · severity low · lesson "four-claims-checked"
//     quote: "When this course is not quoting, it says early 1941."
//     claim: NLM's Biographical overview places the appointment "When the program ended in January
//            1941"; NLM's chapter and Brief chronology say February 1941.
//     needs: the date on the appointment letter or the Red Cross/NRC record of it.
//     where: Drew Papers (Moorland-Spingarn); NLM Profiles in Science item-level records.
//
//  C. key "drew-1941-symposium-race-remark" · severity medium · lesson "excluded-then-segregated"
//     claim: The course teaches (from NLM and the Science History Institute) that the Red Cross
//            pilot of early 1941 excluded Black donors.
//     question: In the transcript of Drew's comments at the American Human Serum Association
//            symposium of 2-3 June 1941 (NLM 101584649X64, read in this pass), he answers a question
//            the transcript does not record with "there is no distinction made concerning race".
//            Was that about donors, or about pooling plasma regardless of donor race? Nothing in
//            this course relies on the remark, and it is not printed.
//     stakes: If it was about donors, the exclusion's timing in New York needs refining.
//     needs: the full symposium proceedings, including the question put to Drew.
//     where: NLM 101584649X64 and its source volume; AHSA symposium proceedings, June 1941.
//
//  D. key "drew-barcelona-service-date" · severity low · lesson "before-drew"
//     claim: The course says only "1936" and "over 9,000 liters" for the Barcelona Blood
//            Transfusion Service, from Drew's dissertation p. 86, whose typescript gives the founding
//            day as "August 119, 1936" (a typing error) and a donor figure too faint to read with
//            confidence. No founding day and no donor count are printed.
//     needs: the founding date and donor figure from a primary account.
//     where: Durán Jordà, "The Barcelona blood-transfusion service", Lancet 1939 (cited in the
//            bibliography of Drew 1944, NLM 101584649X9).
//
//  E. key "drew-presbyterian-nurse-surname" · severity low · lesson "banked-blood"
//     claim: The full-time nurse at the 1939 Presbyterian bank is typed "Helen Stoddart" in the staff
//            list (p. 211) and "Stoddard" in the acknowledgements (p. ii); the course prints both.
//     needs: the spelling in a Presbyterian Hospital or Columbia nursing record.
//
// RESOLVED IN THIS PASS, so NO check is needed (the brief's "unverified" list):
//  - Age at death: 45, from NLM's two dated pages (see the header). The Science History
//    Institute's "46" is off by one; the course teaches the discrepancy openly in lesson 1.
//  - Fantus / Cook County 1937: NLM chapter + Drew's dissertation p. 87 (page image read).
//  - Howard chair: October 1941, NLM Howard chapter.
//  - "First Black researcher in the US": not printed; NLM's "there" (Columbia) is taught.
//  - "Resigned in protest": not printed; NLM's "There is no evidence" sentence is taught.
//
// FOR THE REGISTERING AGENT (outside this file):
//  - CITATIONS: add `who-built-the-blood-bank` to STAGED_COURSES in src/lib/citations.ts and run
//    `pnpm gen:citations` once seeded; every lesson carries an APA `## Sources` block.
//  - STANDARDS: this is a primary-source history course (sourcing, corroboration, chronology,
//    claim-versus-evidence), so per the repo rule it should be MAPPED in src/lib/standards/ rather
//    than BACKLOGged; until mapped it needs a BACKLOG line in check-standards-coverage.ts.
//  - SERIES: CREDIT science track, position S2 (brief section 3). Confirm check-series-codes accepts it.
//  - VISIBILITY: private until vetted, per BAM's approval.
