// Authored "Exported: How Others Studied American Race Law" for Learn.WitUS (Culture & History),
// high school and up. Planned in plans/43-jim-crow-export.md, which required an explicit sign-off
// before authoring because this is the most sensitive topic in the route series.
//
// Prerequisite: at least one US city course, `indiana-avenue-a-district-and-what-replaced-it`. The
// export claim only works if the learner has already watched an American instrument get named,
// dated and traced to a body. This course asks whether those instruments travelled.
//
// THE DESIGN IS THE ETHICS. The topic gets abused in two opposite directions: as "America equals
// Nazi Germany" agitprop, and as a comparison that minimises Jim Crow by making it look mild. The
// structure below exists to block both, and the course says so in its own text rather than trusting
// the reader to infer it.
//
// The two claims are kept STRICTLY APART because they differ in kind and in evidence:
//   A. NAZI GERMANY. Anchored on James Q. Whitman, "Hitler's American Model" (Princeton, 2017),
//      read directly. The published Introduction (pp. 1 to 16) was read verbatim and is the source
//      of every page-numbered quotation here; chapter material is cited without page numbers
//      because it was read in the author's pre-publication typescript, whose pagination differs.
//      The course LEADS with the nuance Whitman himself insists on: the Nazis found parts of
//      American law too harsh, notably the one-drop rule, and did not copy it. "Influence" here
//      means studied and selectively drew on. It never means replicated.
//   B. APARTHEID SOUTH AFRICA. A DIFFERENT evidentiary base, sourced independently. Whitman's
//      German thesis is NOT extended to South Africa. What the sources support is parallel
//      development from a shared British colonial parent plus documented mutual observation
//      (Evans 1915, Loram 1917, the Phelps-Stokes commissions), running in BOTH directions, plus
//      later cross-citation between the civil rights and anti-apartheid movements.
//
// The scholarly disagreement is taught, not smoothed. Whitman is arguing against a named prior
// consensus (Rethmeier, Bernstein, Hanke, Guettel), and the course quotes those scholars from
// Whitman's own text while telling the learner that this is a one-sided window and where to read
// the other side. Stolleis (2018) supplies the sharpest published qualifier.
//
// NO INVENTED STATISTIC, QUOTATION, CHARACTER OR DATE. Where the sources gave a number this course
// could not verify (the 1986 override tallies), the number is omitted rather than guessed. Two Nazi
// quotations that contain a racial slur are quoted only up to the slur and paraphrased after it.
//
// House rule: NO em-dashes or en-dashes in prose. Quoted fragments were chosen to avoid them.

import type { AuthoredCourse } from "./authored-course";

export const JIM_CROW_EXPORT_COURSE: AuthoredCourse = {
  title: "Exported: How Others Studied American Race Law",
  description:
    "A cited, high-school-and-up course on a narrow and well documented question: did the legal techniques the United States built for governing race travel to other countries, and if so, how. This is the capstone of the route series and the most carefully bounded course in it. It keeps two claims strictly apart because they rest on different kinds of evidence. The first is Nazi Germany, where a stenographic transcript of a 5 June 1934 meeting of Nazi lawyers records a long, detailed discussion of American immigration, citizenship and anti-miscegenation law, and where the leading study of that record, James Q. Whitman's Hitler's American Model, insists that the Nazis studied American law selectively and rejected parts of it, including the one-drop rule, as too harsh. The second is apartheid South Africa, where the honest framing is parallel development from a shared British colonial parent plus documented mutual observation running in both directions, not copying. You will learn what the word influence means in comparative law and what it does not, read the American instruments the claim rests on, meet the scholars who think the German link is overstated, and finish with a section on the limits of the analogy that is taught explicitly so the course inoculates against its own misuse. It teaches the transmission of legal technique. It does not equate outcomes, and it says so.",
  lessons: [
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 1 · The claim, and how to hold it
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "ex-the-claim",
      title: "1 · The claim, and the two ways it gets abused",
      section: "Section 1 · The claim, and how to hold it",
      body: `**Start with the prerequisite.** This course assumes you have finished at least one of the United States city courses, and it is written against *Indiana Avenue: A District and What Replaced It*. That course taught you to ask a specific question about a specific block: **who decided, under which instrument, on what record.** It taught you that a blight designation is a legal instrument with a statute behind it, a body that voted, and a date. **This course asks whether instruments like those were exportable.** The answer, for a narrow and well documented set of them, is yes, and the whole difficulty of this course is saying that precisely enough to be true.

**The claim, stated as narrowly as the sources allow.** In the first half of the twentieth century the United States was, in the technical sense, a world leader in writing race into statute. It had race-based immigration quotas, a naturalisation bar keyed to color, several kinds of second-class citizenship, and marriage bans enforced by criminal penalty in about thirty states. **Other governments building race law noticed, studied the American statutes, wrote them up, and argued about them in their own policy meetings.** That is the claim. It is about legal technique, and it is about study, argument and selective adaptation.

**Two ways this gets abused, and this course is built to block both.**

**Abuse one: "America equals Nazi Germany."** The claim above becomes, in careless hands, the assertion that the Nazis copied Jim Crow, or that the Holocaust was an American export. **The sources do not support that**, and the leading scholar of the German half spends a great deal of his book saying so. James Q. Whitman writes that "there was certainly never anything remotely like unmixed admiration for America among the Nazis," and that "[t]he Nazis were never interested in simply replicating the United States in Central Europe" (Whitman, 2017, p. 5). He is equally direct about the reverse inference: "None of this is to suggest that America was a Nazi country in the 1930s" (Whitman, 2017, p. 15). **A course that reports the study and drops the selection is not reporting the evidence. It is using it.**

**Abuse two: comparison as a way of minimizing Jim Crow.** The mirror error is subtler and just as common. If the destination of every comparison is "but the Nazis were worse," then American segregation gets graded on a curve and quietly downgraded to a regional embarrassment. **This course refuses that too.** The Equal Justice Initiative documented 4,075 racial terror lynchings of African Americans in twelve southern states between 1877 and 1950 (Equal Justice Initiative, 2017). That is not a footnote to somebody else's history. It is the thing itself, and no comparison in this course is offered as a reason to look away from it.

**The two claims this course makes, and why they are kept apart.**

| | **A. Nazi Germany** | **B. Apartheid South Africa** |
|---|---|---|
| **What is claimed** | Nazi lawyers studied American race law in detail while drafting the Nuremberg Laws, and selectively drew on it | Parallel development from a shared colonial parent, with documented mutual observation running in both directions |
| **Strongest evidence** | A stenographic transcript of a closed policy meeting on 5 June 1934, plus the published Nazi legal literature | Comparative legal history, plus named individuals who traveled, observed and published in each direction |
| **What is NOT claimed** | That the Nazis copied American law, or that American law caused the Holocaust | That South Africa copied Jim Crow |
| **Where it is taught here** | Section 3 | Section 4 |

**They are different in kind, and blurring them is the single most common failure in popular writing on this subject.** The German claim rests on a document in which named officials discuss named American statutes in a closed room. The South African claim has no equivalent single document and does not need one, because it is a different sort of claim: about a shared legal ancestor and a documented traffic of observers. **Evidence for one is not evidence for the other, and this course never borrows across the line.**

**A rule about tone, which is a research instruction and not a courtesy.** Everything in this course happened to people whose grandchildren are alive. Write about it the way you would write about a parcel record: name the instrument, name the body, give the date, cite the source, and let the reader draw the conclusion. **The material does not need help being shocking. It needs help being accurate.**

## Sources
- Equal Justice Initiative. (2017). *Lynching in America: Confronting the legacy of racial terror* (3rd ed.). https://eji.org/reports/lynching-in-america/
- Whitman, J. Q. (2017). *Hitler's American model: The United States and the making of Nazi race law*. Princeton University Press.`,
    },
    {
      slug: "ex-what-influence-means",
      title: "2 · What \"influence\" means in law, and what it does not",
      section: "Section 1 · The claim, and how to hold it",
      body: `The whole argument turns on one word, so spend a lesson on it.

**The crude test, and why it fails.** The commonest way to dismiss a claim of legal influence is to demand verbatim copying: show me the German sentence lifted from the Virginia statute. Whitman argues that this test is wrong, and he is worth quoting in full because the sentence is the hinge of his book: **"Influence is a complex business of translation, creative adaptation, selective borrowing, and invocation of authority"** (Whitman, 2017, p. 13). He adds that "[a]ll borrowers engage in tinkering and retrofitting; that is as true of the Nazis as it is of any other regime" (Whitman, 2017, pp. 13 to 14).

**Notice what that argument costs him.** By loosening the test from copying to adaptation, Whitman makes his claim easier to support and harder to falsify. **That is a real weakness and you should hold it against the argument, not wave it through.** Section 3 ends with the scholars who do exactly that.

**The opposite error, which is just as bad.** If verbatim copying is too strict, "these two things resemble each other" is far too loose. Two countries can build similar racial regimes without either one having read the other, because they faced comparable pressures, inherited comparable law, or both descended from the same imperial system. **Resemblance is not transmission.** Section 4 is entirely about a case where resemblance is strong and transmission is limited.

**A ladder, so you can grade any claim you meet.** Put every "X influenced Y" claim on one of these rungs, and say which rung you are on.

| Rung | What it means | What you need to show it |
|---|---|---|
| **1. Verbatim borrowing** | The text was copied or closely tracked | The two texts, side by side |
| **2. Documented study in a policy context** | Officials researched the foreign law and argued about it while drafting their own | Minutes, memos, transcripts, commissioned research |
| **3. Documented awareness** | The actors knew about the foreign example and referred to it | Published references, correspondence, speeches |
| **4. Parallel development from a shared parent** | Both systems descend from a common legal ancestor | The ancestor's texts and both lines of descent |
| **5. Resemblance only** | The two look alike | Nothing. This rung is not a claim about causation at all |

**Where this course puts its two claims.**
- **Germany.** Rung 2, solidly, and Whitman argues for a piece of rung 1 as well. He is careful about that last step, and his hedge is worth memorizing: **"It is even possible, indeed likely, that the Nuremberg Laws themselves reflect direct American influence"** (Whitman, 2017, p. 5). *Possible, indeed likely* is not *proved*. **A hedge in a scholarly sentence is data. Read hedges the way you read numbers.**
- **South Africa.** Rungs 3 and 4, with named people on rung 3 traveling in both directions. **Not rung 2, and not rung 1.**

**One more distinction, because it is the one people skip.** There is a difference between a claim about a **document** and a claim about the **world**. "The transcript of the 5 June 1934 meeting records a long discussion of American anti-miscegenation statutes" is a claim about a document, and it is either true or false about that document. "American law caused the Nuremberg Laws" is a claim about the world, and it requires a great deal more. **The first claim is nearly bulletproof. The second is contested. Most bad writing on this subject proves the first and asserts the second.**

## Sources
- Whitman, J. Q. (2017). *Hitler's American model: The United States and the making of Nazi race law*. Princeton University Press.`,
      recallContent: [
        {
          prompt: "State this course's claim as narrowly as the sources allow.",
          answer: "In the first half of the twentieth century the United States was a world leader in writing race into statute, and other governments building race law studied those statutes, wrote them up, and argued about them in their own policy meetings. The claim is about legal technique, study, argument and selective adaptation.",
        },
        {
          prompt: "What are the two opposite abuses this course is built to block?",
          answer: "First, the claim that America equals Nazi Germany or that the Nazis simply copied Jim Crow. Second, using the comparison to minimize Jim Crow by grading it on a curve against something worse.",
        },
        {
          prompt: "Quote Whitman on whether the Nazis wanted to reproduce the United States.",
          answer: "\"The Nazis were never interested in simply replicating the United States in Central Europe\" (Whitman, 2017, p. 5). He also writes that there was never anything like unmixed admiration for America among the Nazis.",
        },
        {
          prompt: "Why does the course refuse to let the German material soften the American record?",
          answer: "Because comparison used that way downgrades Jim Crow to a regional embarrassment. The Equal Justice Initiative documented 4,075 racial terror lynchings in twelve southern states between 1877 and 1950, and that is the thing itself, not a footnote to another country's history.",
        },
        {
          prompt: "How do the two claims in this course differ in their evidence?",
          answer: "The German claim rests on a stenographic transcript of a closed policy meeting plus the published Nazi legal literature. The South African claim has no equivalent single document and rests instead on a shared colonial legal parent and a documented traffic of observers in both directions.",
        },
      ],
    },
    {
      slug: "ex-sourcing-standard",
      title: "3 · The sourcing standard for the rest of this course",
      section: "Section 1 · The claim, and how to hold it",
      body: `Before any evidence, the rules it will be handled under. **You should be able to check every one of them against this course's own text as you go, and you should try.**

**Rule 1. Read the monograph, not the meme.** The German half of this course is built on one book, *Hitler's American Model*, published by Princeton University Press in 2017 and written by James Q. Whitman, a legal historian at Yale. **The book is short and its argument is narrow.** Almost everything wrong that circulates on this subject comes from people who have read a headline about the book rather than the book. Where this course quotes Whitman's introduction it gives a page number, because those pages were read verbatim; where it draws on his chapters it cites the book without a page number, because those were read in a typescript whose pagination differs from the printed edition. **That distinction is small and it is the kind of thing that separates a checkable course from a confident one.**

**Rule 2. Name the people who disagree, and say where to read them.** Whitman is arguing **against** a prior scholarly consensus, not into a vacuum. That consensus has names, and lesson 11 gives them. **A course that presents a contested thesis as settled has misinformed you even when the thesis is right.**

**Rule 3. Label the evidence type on every claim.** Use the ladder from lesson 2. Whenever this course says something happened, it should be clear whether you are looking at a transcript, a published article, a statute, a biography, or a historian's inference. **If you cannot tell which, that is a defect in the writing, and you should treat it as one.**

**Rule 4. Do not extend an argument past its subject.** Whitman's book is about Germany. **It is not evidence about South Africa**, even though Nazi researchers did also look at South Africa, and even though Whitman's own conclusion briefly gestures at British colonial law, Brazilian immigration law, South Africa and Australia as other places where inequality was created by statute along biological lines (Stolleis, 2018). Section 4 is sourced independently and says so at the top.

**Rule 5. No atrocity arithmetic.** This course does not rank atrocities, does not compute which regime was worse, and does not offer any comparison as a mitigation of anything. **It is about the transmission of legal technique. It is not about the equivalence of outcomes**, and section 5 exists to make that boundary explicit rather than implied.

**Rule 6. No invented anything.** No invented statistic, quotation, person or date. Where a figure was in circulation but could not be verified against an authoritative source, it has been left out rather than guessed. **You will notice one or two places where this course tells you a number exists and declines to print it. That is the rule working, not the course being coy.**

**What this course is a companion to, rather than a repeat of.** Two shipped courses already carry the transnational Black political thread, and this one deliberately does not restate them.
- ***Pan-Africanism*** carries the organized political movement across borders: the congresses, the parties, the leaders, the arguments among them.
- ***Afrocentricity*** carries the intellectual and cultural frame.
- **This course is the legal-technique thread only.** It is about statutes, drafting meetings, commissioned research and citation. When you reach the anti-apartheid material in lesson 16 you will see the three threads touch, and the right move there is to go and read the other two courses rather than expect this one to summarize them.

**One thing to carry into section 2.** The export claim only means something if you already know what was being exported. That is the next two lessons, and they are a recap of instruments the city courses established, not new assertions. **Ground first, then the claim.**

## Sources
- Stolleis, M. (2018). Lehrmeister Amerika [America the schoolmaster]. *Rechtsgeschichte / Legal History*, *26*, 489 to 492. https://doi.org/10.12946/rg26/489-492
- Whitman, J. Q. (2017). *Hitler's American model: The United States and the making of Nazi race law*. Princeton University Press.`,
      recallContent: [
        {
          prompt: "What is wrong with demanding verbatim copying as the test of legal influence?",
          answer: "Legal borrowing rarely works that way. Whitman argues influence is a complex business of translation, creative adaptation, selective borrowing and invocation of authority, and that all borrowers tinker and retrofit.",
        },
        {
          prompt: "What does loosening the test from copying to adaptation cost Whitman's argument?",
          answer: "It makes his claim easier to support and harder to falsify. That is a genuine weakness in the argument and should be held against it rather than waved through.",
        },
        {
          prompt: "Name the five rungs of the evidence ladder.",
          answer: "1. Verbatim borrowing. 2. Documented study in a policy context. 3. Documented awareness. 4. Parallel development from a shared parent. 5. Resemblance only, which is not a causal claim at all.",
        },
        {
          prompt: "Which rungs do the German and South African claims sit on?",
          answer: "Germany sits solidly on rung 2, documented study in a policy context, with Whitman arguing for a piece of rung 1. South Africa sits on rungs 3 and 4, documented awareness and parallel development from a shared parent.",
        },
        {
          prompt: "What is Whitman's hedge about the Nuremberg Laws themselves, and why does the wording matter?",
          answer: "\"It is even possible, indeed likely, that the Nuremberg Laws themselves reflect direct American influence\" (Whitman, 2017, p. 5). Possible and likely are not proved. A hedge in a scholarly sentence is data and should be read as carefully as a number.",
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 2 · What America built
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "ex-citizenship-and-immigration",
      title: "4 · What America built: citizenship, and who could enter",
      section: "Section 2 · What America built",
      body: `**This lesson asserts nothing new.** It is a recap of instruments the United States courses already established, gathered in one place so that section 3's claim rests on ground you have already walked. **If the export claim is going to mean anything, you have to be able to say what was being studied.**

**Start with the first federal statute on citizenship, because the phrase is short and it does the work.** The Naturalization Act of 1790 opened naturalisation to "any alien, being a free white person" who had resided in the United States for two years, was of good character, and swore to support the Constitution (Naturalization Act of 1790, 1 Stat. 103). **Four words in a founding statute made color a condition of becoming an American.** That race bar was not fully removed from naturalisation law until the Immigration and Nationality Act of 1952, and even then the new law "only allotted new Asian quotas based on race, instead of nationality" (US Department of State, Office of the Historian, n.d.-b).

**Then exclusion by law, aimed at a named group.** The Chinese Exclusion Act of 1882 suspended the immigration of Chinese labourers and barred Chinese immigrants from naturalisation. **It is the first American statute to exclude an immigrant group by name**, and it created the legal category that the 1924 Act would later generalise.

**Then the quota system, which is the piece that mattered most abroad.** The Immigration Act of 1924, usually called the Johnson-Reed Act, allotted immigration visas to "two percent of the total number of people of each nationality in the United States as of the 1890 national census," a base year chosen deliberately: the Act "pushed back the year on which quota calculations were based from 1910 to 1890," which favored northern and western Europe and cut southern and eastern European arrivals sharply (US Department of State, Office of the Historian, n.d.-a). It also barred "any alien who by virtue of race or nationality was ineligible for citizenship," which, given the 1790 race bar still on the books, ended Japanese immigration outright (US Department of State, Office of the Historian, n.d.-a).

**Read the two statutes together and you see the technique, which is the thing that traveled.** The 1790 Act made race a condition of citizenship. The 1924 Act made ineligibility for citizenship a condition of entry. **Neither statute has to say "we are excluding this race" in the exclusion clause, because the racial work was already done upstream.** That is a piece of legal engineering, and it is exactly the sort of thing a foreign ministry researching race law would write down.

**Then the third and least discussed instrument: citizenship that is not full citizenship.** Whitman puts it plainly: the United States "stood at the forefront in the creation of forms of de jure and de facto second-class citizenship for blacks, Filipinos, Chinese, and others" (Whitman, 2017, p. 12). **The category matters more than any single statute.** A person could be a national of the United States, subject to its jurisdiction, and still not hold the political rights of a citizen. **Hold that category in your head until lesson 10**, because the first of the two Nuremberg Laws is a citizenship law, and it works by creating exactly that kind of second tier.

**One more, because Nazi commentators singled it out.** The Cable Act of 1922 stripped an American woman of her United States citizenship if she married a foreign man who was ineligible for citizenship. Whitman notes that Nazi writing on American immigration law praised this rule specifically (Whitman, 2017). **Notice what it does: it makes a legal status turn on who you married.** Lesson 9 shows that idea reappearing in the German definition of who counted as a Jew, and it shows how carefully you have to hedge that observation.

**What this lesson does not claim.** It does not claim these statutes were designed for export, that they were the worst thing in American law, or that they explain anything about Germany by themselves. **It claims only that they existed, that they were federal, and that they were public.** Anybody in the world could read them, and lesson 8 shows you the young lawyer who did.

## Sources
- Naturalization Act of 1790, 1 Stat. 103 (1790). https://govtrackus.s3.amazonaws.com/legislink/pdf/stat/1/STATUTE-1-Pg103.pdf
- US Department of State, Office of the Historian. (n.d.-a). *The Immigration Act of 1924 (The Johnson-Reed Act)*. https://history.state.gov/milestones/1921-1936/immigration-act
- US Department of State, Office of the Historian. (n.d.-b). *The Immigration and Nationality Act of 1952 (The McCarran-Walter Act)*. https://history.state.gov/milestones/1945-1952/immigration-act
- Whitman, J. Q. (2017). *Hitler's American model: The United States and the making of Nazi race law*. Princeton University Press.`,
      recallContent: [
        {
          prompt: "What are the six rules this course handles its evidence under?",
          answer: "Read the monograph rather than the meme. Name the people who disagree. Label the evidence type on every claim. Do not extend an argument past its subject. No atrocity arithmetic. No invented statistic, quotation, person or date.",
        },
        {
          prompt: "Why does this course cite Whitman's introduction with page numbers but his chapters without?",
          answer: "The published introduction, pages 1 to 16, was read verbatim. The chapter material was read in a typescript whose pagination differs from the printed edition, so printing a page number for it would be a guess.",
        },
        {
          prompt: "Which two shipped courses is this one a companion to, and what does each carry?",
          answer: "Pan-Africanism carries the organized political movement across borders. Afrocentricity carries the intellectual and cultural frame. This course carries the legal-technique thread only.",
        },
        {
          prompt: "What does rule 4, do not extend an argument past its subject, forbid in practice?",
          answer: "Using Whitman's book, which is about Germany, as evidence about South Africa. Section 4 is sourced independently and says so at the top.",
        },
      ],
    },
    {
      slug: "ex-marriage-and-segregation",
      title: "5 · What America built: marriage, and the color line in public",
      section: "Section 2 · What America built",
      body: `The second half of the recap, and the half that turns out to matter most to section 3.

**Anti-miscegenation law, and the number to remember.** By the early 1930s, thirty American states declared racially mixed marriages civilly invalid, and many of those states also attached **criminal punishment** to entering one (Whitman, 2017, p. 12). Whitman calls America "a beacon of anti-miscegenation law, with thirty different state regimes, many of them outside the South" (Whitman, 2017, p. 12). **The last clause is the one people miss.** This was not a southern peculiarity. It was a national body of law with a southern concentration.

**Why criminalisation is the technically interesting part.** Whitman's point about the thirty states is not that the bans existed but that they were **criminal**. Many legal systems have voided marriages they disapproved of. **Very few have sent people to prison for contracting one.** In his account, the leading German lawyers of the early 1930s framed their own problem as whether marriage could ever be a subject of the criminal law at all, outside bigamy and deception, and American law offered the only Western example they could find of a system that criminalised mixed marriage (Whitman, 2017).

**Two numbers that look like a contradiction and are not.** Thirty states in the early 1930s. In 1967, the Supreme Court wrote that "Virginia is now one of 16 States which prohibit and punish marriages on the basis of racial classifications" (*Loving v. Virginia*, 1967). **Both are correct, because they are counts at different dates.** Between the 1930s and 1967, fourteen states repealed their bans; the remaining sixteen fell on 12 June 1967, when the Court held that "restricting the freedom to marry solely because of racial classifications violates the central meaning of the Equal Protection Clause" (*Loving v. Virginia*, 1967). **A number without its date is not a fact. Carry the date.**

**The Virginia statute at issue in *Loving* has a date worth noticing too.** It was the Racial Integrity Act of 1924, which the Court described as passed "during the period of extreme nativism which followed the end of the First World War" (*Loving v. Virginia*, 1967). **Same year as the Johnson-Reed Act.** That is a coincidence of date rather than a shared drafting process, and it is worth flagging precisely so you do not turn it into a claim. **A shared year is rung 5 on the ladder from lesson 2.**

**Segregation, and a warning about where it fits.** *Plessy v. Ferguson* in 1896 upheld a Louisiana statute requiring separate railway accommodation by race and gave the country the phrase "separate but equal." Statutory segregation then spread across schooling, transport, public accommodation, prisons, voter rolls and tax rolls. **Here is the warning.** Section 3 will show you that segregation is **not** where the German interest concentrated, and Whitman says so bluntly: "Segregation is not what counts most" (Whitman, 2017, p. 11), because "[t]he Nuremberg Laws said nothing about segregation" (Whitman, 2017, p. 11). **Most popular writing on this topic gets this exactly backwards**, asks whether the Nazis copied Jim Crow buses and schools, finds little, and either declares the whole question closed or fudges it.

**So what did the American color line look like from outside?** One answer is on the record, and it is an uncomfortable one to read: an official Nazi handbook article of 1934 listed, with evident astonishment, American statutes assigning white and colored children to different schools, requiring race on birth, marriage and death certificates, and separating waiting rooms, railway cars, sleeping cars, street cars, buses, steamships "and even in prisons," with separate voter lists and separate tax assessment in Arkansas (Kier, as quoted in Stolleis, 2018; Whitman, 2017). **A German Nazi lawyer thought American segregation was excessive.** Lesson 9 is about what that reaction did and did not lead to.

**The recap in one line, so you can carry it into section 3.** By the early 1930s the United States had, on the public statute books, a race bar in naturalisation, race-based immigration quotas, several forms of second-class citizenship, criminal anti-miscegenation law in about thirty states, and statutory segregation across public life. **All of it was published. None of it was secret. That is the whole reason a foreign ministry could study it.**

## Sources
- *Loving v. Virginia*, 388 U.S. 1 (1967). https://www.law.cornell.edu/supremecourt/text/388/1
- Stolleis, M. (2018). Lehrmeister Amerika [America the schoolmaster]. *Rechtsgeschichte / Legal History*, *26*, 489 to 492. https://doi.org/10.12946/rg26/489-492
- Whitman, J. Q. (2017). *Hitler's American model: The United States and the making of Nazi race law*. Princeton University Press.`,
      recallContent: [
        {
          prompt: "What did the Naturalization Act of 1790 require, and what is the phrase to remember?",
          answer: "It opened naturalisation to \"any alien, being a free white person\" resident for two years, of good character, who swore to support the Constitution. Four words in a founding statute made color a condition of becoming an American.",
        },
        {
          prompt: "How did the Immigration Act of 1924 build its quotas, and what did the ineligibility clause do?",
          answer: "Two percent of the number of people of each nationality present at the 1890 census, a base year pushed back from 1910 to favor northern and western Europe. It also barred any alien ineligible for citizenship by race or nationality, which ended Japanese immigration.",
        },
        {
          prompt: "Why is the 1790 and 1924 pairing described as a piece of legal engineering?",
          answer: "The 1790 Act made race a condition of citizenship; the 1924 Act made ineligibility for citizenship a condition of entry. The exclusion clause never has to name a race, because the racial work was done upstream.",
        },
        {
          prompt: "What is the third instrument, the one Whitman says America led the world in, and why does it matter later?",
          answer: "Forms of de jure and de facto second-class citizenship. It matters because the first of the two Nuremberg Laws is a citizenship law that works by creating exactly that kind of second tier.",
        },
        {
          prompt: "What did the Cable Act of 1922 do, and why did Nazi writers single it out?",
          answer: "It stripped an American woman of her United States citizenship if she married a foreign man ineligible for citizenship. It makes a legal status turn on whom you married, and Nazi writing on American immigration law praised the rule specifically.",
        },
      ],
    },
    {
      slug: "ex-quiz-claim-and-instruments",
      title: "6 · Quiz: the claim, the method, and the American instruments",
      section: "Section 2 · What America built",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Which sentence states this course's claim at the width the sources actually support?",
            options: [
              "The Nazis copied American segregation law and applied it directly to Germany's Jews",
              "Other governments studied American statutes and selectively drew on them",
              "American race law was the sole cause of the Nuremberg Laws and of apartheid",
              "American race law had no effect at all outside the United States",
            ],
            correctIndex: 1,
            explanation: "The claim is about study, argument and selective adaptation of legal technique. Both the maximal and the minimal versions go past the evidence.",
            sourceLessonSlug: "ex-the-claim",
          },
          {
            prompt: "This course is built to block two opposite abuses. What are they?",
            options: [
              "Equating America with Nazi Germany, and minimizing Jim Crow by comparison",
              "Overstating the South African evidence, and understating the Australian material",
              "Citing primary sources, and citing secondary sources",
              "Discussing citizenship law, and discussing marriage law",
            ],
            correctIndex: 0,
            explanation: "Agitprop and minimisation are the two failure modes, and the whole structure of the course exists to prevent both of them.",
            sourceLessonSlug: "ex-the-claim",
          },
          {
            prompt: "Whitman writes that the Nazis were never interested in doing what with the United States?",
            options: [
              "Reading its published statutes",
              "Sending official delegations of lawyers to visit it",
              "Simply replicating it in Central Europe",
              "Comparing their own laws to its laws",
            ],
            correctIndex: 2,
            explanation: "Whitman (2017, p. 5) writes that the Nazis were never interested in simply replicating the United States in Central Europe. They did all three of the other things.",
            sourceLessonSlug: "ex-the-claim",
          },
          {
            prompt: "How does Whitman define influence in comparative law?",
            options: [
              "Copying a statute word for word into a new legal system",
              "Any resemblance between the laws of two countries, whatever the cause of the resemblance",
              "A shared date of enactment between two statutes in different countries",
              "Translation, creative adaptation, selective borrowing, and invocation of authority",
            ],
            correctIndex: 3,
            explanation: "Whitman (2017, p. 13) rejects the verbatim-copying test. Note that this definition also makes his claim harder to falsify, which is a fair criticism to hold against it.",
            sourceLessonSlug: "ex-what-influence-means",
          },
          {
            prompt: "On the five-rung evidence ladder, where does the German claim sit?",
            options: [
              "Rung 5, resemblance only",
              "Rung 2, documented study in a policy context",
              "Rung 4, parallel development from a shared parent",
              "Rung 3, documented awareness and nothing more",
            ],
            correctIndex: 1,
            explanation: "A stenographic transcript of a closed drafting meeting is rung 2. Whitman argues for a piece of rung 1 as well, and hedges when he does.",
            sourceLessonSlug: "ex-what-influence-means",
          },
          {
            prompt: "Whitman writes that it is \"possible, indeed likely\" that the Nuremberg Laws reflect direct American influence. How should you read that phrasing?",
            options: [
              "As proof, since a Yale professor wrote it",
              "As a claim he later retracted",
              "As a hedge, which is evidence about how strong he thinks his own case is",
              "As a translation error introduced in the English-language edition of the book",
            ],
            correctIndex: 2,
            explanation: "Possible and likely are not proved. Reading hedges as carefully as you read numbers is one of the transferable skills in this course.",
            sourceLessonSlug: "ex-what-influence-means",
          },
          {
            prompt: "Rule 4 of the sourcing standard forbids which specific move?",
            options: [
              "Quoting a scholar you disagree with",
              "Quoting page numbers from an unpublished typescript edition of a book",
              "Citing a statute rather than a historian",
              "Using Whitman's German thesis as evidence about South Africa",
            ],
            correctIndex: 3,
            explanation: "Whitman's book is about Germany. Section 4 is sourced independently for exactly this reason.",
            sourceLessonSlug: "ex-sourcing-standard",
          },
          {
            prompt: "Why does this course cite Whitman's introduction with page numbers and his chapters without them?",
            options: [
              "Because an introduction is always more reliable than a chapter",
              "The introduction was read in print, the chapters in a typescript",
              "Because the publisher does not print page numbers in the chapters of this book",
              "Because the chapters are not cited anywhere in this course",
            ],
            correctIndex: 1,
            explanation: "Printing a page number you did not verify is a small lie. Saying which edition you read is the fix.",
            sourceLessonSlug: "ex-sourcing-standard",
          },
          {
            prompt: "Which phrase from the Naturalization Act of 1790 made colour a condition of becoming an American?",
            options: [
              "Of good character and sound mind",
              "Resident within the limits of the United States",
              "Any alien, being a free white person",
              "Owing allegiance to no foreign prince",
            ],
            correctIndex: 2,
            explanation: "The statute reads \"any alien, being a free white person\" (1 Stat. 103). The race bar was not fully removed from naturalisation law until 1952.",
            sourceLessonSlug: "ex-citizenship-and-immigration",
          },
          {
            prompt: "The Immigration Act of 1924 based its quotas on which census year, and why does the choice matter?",
            options: [
              "1890, because pushing the base year back from 1910 favored northern Europe",
              "1920, because it was the most recent national count available to the Congress of the day",
              "1870, because it predated Reconstruction",
              "1900, because it was a round number at the turn of the century",
            ],
            correctIndex: 0,
            explanation: "The Act allotted visas at two percent of each nationality present at the 1890 census, a base year chosen to cut southern and eastern European arrivals.",
            sourceLessonSlug: "ex-citizenship-and-immigration",
          },
          {
            prompt: "How did the 1790 and 1924 statutes work together as a piece of legal engineering?",
            options: [
              "Both statutes named the excluded races directly in the operative clauses that did the excluding",
              "The 1924 Act repealed the racial language of the 1790 Act",
              "Race governed citizenship in 1790, and ineligibility for citizenship governed entry in 1924",
              "Neither statute mentioned race, so the effect was accidental",
            ],
            correctIndex: 2,
            explanation: "The exclusion clause of 1924 never has to name a race, because the racial work was already done upstream in naturalisation law.",
            sourceLessonSlug: "ex-citizenship-and-immigration",
          },
          {
            prompt: "About how many American states declared racially mixed marriages civilly invalid in the early 1930s?",
            options: [
              "Eleven",
              "Sixteen",
              "Forty-eight",
              "Thirty",
            ],
            correctIndex: 3,
            explanation: "Whitman (2017, p. 12) gives thirty state regimes, many of them outside the South. Sixteen is the 1967 figure, thirty-four years later.",
            sourceLessonSlug: "ex-marriage-and-segregation",
          },
          {
            prompt: "In 1967 the Supreme Court wrote that Virginia was one of sixteen states punishing marriage by racial classification. Why is that not a contradiction of the figure of thirty?",
            options: [
              "Because the Supreme Court miscounted, and the true figure in 1967 was still thirty states",
              "The two counts are at different dates, and fourteen states repealed in between",
              "Because Whitman counted territories as well as states",
              "Because the Court was counting only southern states",
            ],
            correctIndex: 1,
            explanation: "A number without its date is not a fact. Loving v. Virginia struck down the remaining sixteen bans on 12 June 1967.",
            sourceLessonSlug: "ex-marriage-and-segregation",
          },
          {
            prompt: "Whitman argues that the technically interesting feature of American anti-miscegenation law was that it was:",
            options: [
              "Enforced by federal marshals rather than by the states",
              "Written into state constitutions rather than into statutes",
              "Criminal, not merely a rule making the marriage void",
              "Applied only to marriages contracted outside the United States",
            ],
            correctIndex: 2,
            explanation: "Voiding a disapproved marriage is common in legal history. Sending people to prison for contracting one is rare, and that is what German drafters could find nowhere else in the West.",
            sourceLessonSlug: "ex-marriage-and-segregation",
          },
          {
            prompt: "Whitman writes \"Segregation is not what counts most.\" What is his reason?",
            options: [
              "The Nuremberg Laws said nothing about segregation",
              "American segregation law was too poorly documented for the Nazis to read",
              "German lawyers admired segregation but could not translate the statutes",
              "Segregation was repealed in the United States before 1933",
            ],
            correctIndex: 0,
            explanation: "Whitman (2017, p. 11) argues that scholars looking for a Jim Crow influence on Nazi segregation are asking the wrong question, because segregation was not central to the Nazi program.",
            sourceLessonSlug: "ex-marriage-and-segregation",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 3 · Germany studied it
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "ex-june-1934",
      title: "7 · The room: 5 June 1934",
      section: "Section 3 · Germany studied it",
      body: `**This is the document the German half of the course rests on, so read the description of it before you read anything about it.**

**The meeting.** On 5 June 1934, about a year and a half after Adolf Hitler became Chancellor, the leading lawyers of Nazi Germany met to plan what became the Nuremberg Laws. **It was chaired by Franz Gürtner, the Reich Minister of Justice.** Among those present were **Bernhard Lösener**, whom Whitman describes as "one of the principal draftsmen of the Nuremberg Laws," and **Roland Freisler**, later President of the Nazi People's Court and "a man whose name has endured as a byword for twentieth-century judicial savagery" (Whitman, 2017, p. 1). The body was the Commission on Criminal Law Reform.

**Why the document exists.** "The meeting was an important one, and a stenographer was present to record a verbatim transcript, to be preserved by the ever-diligent Nazi bureaucracy" (Whitman, 2017, p. 1). **A regime that took minutes of its own drafting meetings left a record of how it argued.** That is the whole reason this claim can be handled to an evidence standard rather than as provocation.

**What is in it.** "In the opening minutes, Justice Minister Gürtner presented a memo on American race law, which had been carefully prepared by the officials of the ministry for purposes of the gathering; and the participants returned repeatedly to the American models of racist legislation in the course of their discussions" (Whitman, 2017, p. 2). Gürtner told the room it was "naturally very attractive to look around in the world to see how this problem has been attacked by other Völker," and, on Whitman's account, the United States supplied the only model the Justice Ministry found to investigate (Whitman, 2017).

**The single most quoted line, and the one that shows you the shape of the whole problem.** Freisler, at that meeting:

> This jurisprudence would suit us perfectly, with a single exception. Over there they have in mind, practically speaking, only coloreds and half-coloreds, which includes mestizos and mulattoes; but the Jews, who are also of interest to us, are not reckoned among the coloreds. (Freisler, 5 June 1934, as quoted in Whitman, 2017, p. 1)

**Read that twice.** A leading Nazi lawyer says American race jurisprudence would suit Germany perfectly, and in the same breath names the reason it cannot be lifted: **American law did not classify Jews as non-white.** That single sentence contains both the evidence of study and the reason copying was impossible. **Anyone who quotes the first half without the second is misusing the source.**

**A second exchange, from the same transcript, which Whitman uses as the epigraph to his chapter on the Blood Law.**

> Dr. Möbius: I am reminded of something an American said to us recently. He explained, "We do the same thing you are doing. But why do you have to say it so explicitly in your laws?" State Secretary Freisler: But the Americans put it in their own laws even more explicitly! (5 June 1934, as quoted in Whitman, 2017)

**The finding that surprises people most.** "It is particularly startling to discover that the most radical Nazis present were the most ardent champions of the lessons that American approaches held for Germany" (Whitman, 2017, p. 2). **The American material was the radicals' argument, not the moderates'.** Freisler wanted broad criminalisation and could point out that in the United States racial mixing was actually prosecuted as a crime; Gürtner and Lösener tried to slow him with legal objections (Stolleis, 2018).

**That last point matters more than it looks.** The transcript is not a record of agreement. **It is a record of a fight**, between a conservative nationalist Justice Minister who braked and a radical State Secretary who pushed, and the American material was a weapon in that fight. **A source that captures an argument is more useful than one that captures a conclusion, and it is also easier to misquote**, because you can pick whichever speaker suits you.

**One earlier document, because the transcript is not the first.** American law was expressly invoked in the **Prussian Memorandum**, the radical Nazi document of 1933 that set the initial framework for the Blood Law, and which spoke not only of Jews but of "Jews, Negroes or other coloreds" (Whitman, 2017). **So the interest predates the meeting.**

**Where this sits on the ladder from lesson 2.** Rung 2: documented study inside a policy-making process. **Not propaganda for foreigners.** Whitman's argument for that is a physical one about the documents: this was a closed meeting recorded for the ministry's own files, and the published Nazi legal literature that fed it was printed in dense German Fraktur type for a domestic professional readership (Whitman, 2017). **Ask of any source: who was the audience? A memo written for the people in the room is different evidence from a pamphlet written for the world.**

## Sources
- Stolleis, M. (2018). Lehrmeister Amerika [America the schoolmaster]. *Rechtsgeschichte / Legal History*, *26*, 489 to 492. https://doi.org/10.12946/rg26/489-492
- Whitman, J. Q. (2017). *Hitler's American model: The United States and the making of Nazi race law*. Princeton University Press.`,
      recallContent: [
        {
          prompt: "How many American states had criminal anti-miscegenation regimes in the early 1930s, and how many remained in 1967?",
          answer: "About thirty in the early 1930s, many of them outside the South. Sixteen remained when Loving v. Virginia struck them down on 12 June 1967.",
        },
        {
          prompt: "Why does Whitman say the criminal character of American marriage bans is the technically interesting part?",
          answer: "Many legal systems have voided marriages they disapproved of, but very few have imprisoned people for contracting one. German drafters framed their problem as whether marriage could be a subject of criminal law at all, and American law was the only Western example they could find.",
        },
        {
          prompt: "What does Whitman mean by \"Segregation is not what counts most\"?",
          answer: "The Nuremberg Laws said nothing about segregation. The Nazi concern lay in citizenship and in sex and reproduction, so scholars looking for a Jim Crow influence on Nazi segregation are asking the wrong question.",
        },
        {
          prompt: "What did a 1934 official Nazi handbook article say about American segregation, and why is that striking?",
          answer: "It listed American statutes separating school children, requiring race on birth, marriage and death certificates, and separating waiting rooms, rail cars, buses, steamships and even prisons, plus separate voter and tax rolls in Arkansas. The author found it excessive.",
        },
      ],
    },
    {
      slug: "ex-krieger-and-kier",
      title: "8 · The researchers: who actually read the American statutes",
      section: "Section 3 · Germany studied it",
      body: `A ministry memo does not write itself. **Two named researchers stand behind the American material in the German record, and knowing who they were is the difference between a rumor and a citation.**

**Heinrich Krieger, the man who went and looked.** Krieger was a young Nazi lawyer who spent two semesters as an exchange student at the University of Arkansas Law School in 1933 and 1934. He was immersed enough in American law to publish an English-language article, "Principles of the Indian Law," in the *George Washington Law Review* in 1935 (Whitman, 2017). Returning to Germany, he became a fellow at an institute in Düsseldorf under the Interior Ministry, and it was there that his work came to the attention of Gürtner's Justice Ministry (Whitman, 2017). **The material Gürtner quoted at the 5 June 1934 meeting most likely came from Krieger's article "Das Rassenrecht in den Vereinigten Staaten," published in mid-1934 in the technical administrative-law journal *Verwaltungsarchiv*** (Whitman, 2017; Stolleis, 2018). He expanded it into a book of the same title in 1936, backed by roughly 350 pages of study of American statutes and case law (Whitman, 2017; Stolleis, 2018).

**What Krieger told German readers about American law.** Two passages, quoted by Whitman, are worth reading because they show the level of detail.

On penalties: "Violations of these marriage prohibitions are threatened with both fines and imprisonment," with the offence graded differently by state, "for example misdemeanor in Nevada, felony in Tennessee, felony (infamous crime) in Maryland," and with "[i]n several states imprisonment of up to ten years" possible (Krieger, as quoted in Whitman, 2017).

On classification: some states counted descent "for up to three generations," five states used "1/8 or more negro blood," two used one quarter, and other states let outward facts decide, including "former slave status (North Carolina), the fact of regular social association with one or another group (ditto) or, in the case of a second marriage, the racial identity of the first marital partner (Texas)" (Krieger, as quoted in Whitman, 2017).

**Whitman's assessment of Krieger is the uncomfortable part, and he does not soften it.** He calls Krieger's *Race Law in the United States* "a work of real learning and numerous insights," writes that "Heinrich Krieger was, as it were, the Nazi Gunnar Myrdal," and adds that "[i]t may sound grating to speak of 'first-rate Nazi scholarship,' but that is what Heinrich Krieger's Race Law in the United States represented" (Whitman, 2017). **Krieger's heroes in that book were Thomas Jefferson and Abraham Lincoln**, and his diagnosis of American law was that it was torn between what he called formalistic liberal egalitarianism and realistic racism, with the second, he hoped, winning (Whitman, 2017). **Note the shape of that argument. He was not reading America as an enemy. He was reading it as a country whose race law had been sabotaged by its own constitution.**

**Herbert Kier, the man who was commissioned.** Kier (1900 to 1973) was a young Austrian National Socialist whom Viktor Bruns, director of the Kaiser Wilhelm Institute for Foreign Public Law and International Law, brought in on a research stipend in 1933. **He was tasked with compiling material on the race legislation of the United States, South Africa and Australia**, apparently in answer to a request from the Reich Justice Ministry (Stolleis, 2018). His article "Volk, Rasse und Staat" appeared in the official *Nationalsozialistisches Handbuch für Recht und Gesetzgebung*, edited by Hans Frank (Munich, 1935), pages 17 to 28 (Stolleis, 2018).

**What Kier printed.** After a passage expressing astonishment that a country whose "dominant political ideology" was "entirely liberal and democratic" had such extensive race legislation, **Kier printed a two-page alphabetical table giving the anti-miscegenation legislation of all thirty American states with exact citations** (Whitman, 2017). Whitman notes that this table matches the description of American law that Gürtner and Freisler gave the previous June, and that it very likely was the "list" Freisler referred to at the meeting. The same table went on circulating, reappearing in a standard 1937 commentary on the Blood Law (Whitman, 2017).

**Three things a careful reader should take from this lesson, in order of weight.**

**1. The research was commissioned, specific and traceable.** A named institute, a named director, a named researcher, a named journal, a named handbook, page numbers. **This is not "the Nazis admired Jim Crow." It is a paper trail.**

**2. It was written for Germans.** Whitman argues Kier's chapter "cannot have been meant for a foreign audience," being a dense Fraktur text with limited foreign circulation and intended "to guide and inspire domestic Nazi deliberations" (Whitman, 2017). **That is the argument that separates study from propaganda, and it is an argument about the physical document, which is the strongest kind.**

**3. South Africa is in the brief, and it is ranked second.** Kier's commission covered the United States, South Africa and Australia. Krieger later joined the National Socialist Office of Race Policy, traveled to South-West Africa, and gathered material for a monograph on South Africa (Whitman, 2017). **And Krieger's own summary judgment, as Stolleis reports it, was that there were only two real centers of race law in the world, the United States and Germany, with South Africa at the margin (Stolleis, 2018).** Hold that. **It is the honest bridge to section 4, and it points the opposite way from the popular version of this story.**

## Sources
- Stolleis, M. (2018). Lehrmeister Amerika [America the schoolmaster]. *Rechtsgeschichte / Legal History*, *26*, 489 to 492. https://doi.org/10.12946/rg26/489-492
- Whitman, J. Q. (2017). *Hitler's American model: The United States and the making of Nazi race law*. Princeton University Press.`,
      recallContent: [
        {
          prompt: "Give the date, the chair, and two named attendees of the meeting the German half of this course rests on.",
          answer: "5 June 1934, chaired by Franz Gürtner, Reich Minister of Justice. Bernhard Lösener, a principal draftsman of the Nuremberg Laws, and Roland Freisler, later President of the People's Court, were present.",
        },
        {
          prompt: "What did Gürtner do in the opening minutes of that meeting?",
          answer: "He presented a memo on American race law that officials of the Justice Ministry had prepared for the gathering, and the participants returned to American models repeatedly.",
        },
        {
          prompt: "Quote Freisler's line about American jurisprudence, and say what its second half proves.",
          answer: "\"This jurisprudence would suit us perfectly, with a single exception.\" The exception was that American law did not reckon Jews among the coloreds. The second half proves that copying was impossible, which is why quoting only the first half misuses the source.",
        },
        {
          prompt: "Which faction in the room championed the American material, and why is that surprising?",
          answer: "The most radical Nazis present were the most ardent champions of the American example. Freisler could point out that racial mixing was prosecuted as a crime in the United States, while Gürtner and Lösener tried to slow him with legal objections.",
        },
        {
          prompt: "Why does Whitman argue the transcript is study rather than propaganda?",
          answer: "It was a closed meeting recorded for the ministry's own files, and the Nazi legal literature feeding it was printed in dense Fraktur for a domestic professional readership. The audience for a document is evidence about what the document is.",
        },
      ],
    },
    {
      slug: "ex-too-harsh",
      title: "9 · Where they said the American model was too harsh",
      section: "Section 3 · Germany studied it",
      body: `**This is the load-bearing lesson of the course.** If you remember one thing, remember this one, because it is the finding that makes the whole subject safe to teach and the finding that gets stripped out every time the subject is abused.

**Whitman's sentence, in full.** "[T]he ironic truth is that when Nazis rejected the American example, it was sometimes because they thought that American practices were overly harsh: for Nazis of the early 1930s, even radical ones, American race law sometimes looked too racist" (Whitman, 2017, p. 5).

**The specific thing they balked at was the one-drop rule.** In American practice, and increasingly in American case law, a person with any traceable African ancestry counted as Black. Whitman reports German commentary recoiling from it.

- A **1934 German book written as a guide for teachers** on how to present Nazi race policy to pupils praised American seriousness about racial purity while noting that it led "in certain cases to human hardness," the illustration being a person of predominantly white appearance who was nonetheless classified as Black. (The original passage uses a racial slur at that point; it is omitted here, and the omission is deliberate rather than an accident of quotation.) (Whitman, 2017)
- A **1936 article written for German teachers of English** likewise praised the American commitment to legislating racial purity but blanched at "the unforgiving hardness of the social usage" that counted anyone with a drop of African ancestry as Black (Whitman, 2017).

**Whitman's verdict on what that meant for the borrowing.** "The one-drop rule was too harsh for the Nazis," he writes, with the qualification that at least one fanatic, Achim Gercke, favored something like it, and he draws the consequence: "for that reason alone the influence of American classification schemes was inevitably limited" (Whitman, 2017).

**Now the sentence that should stop you from misreading this as a compliment to the United States.** Whitman writes that scholars who see parallels between American and Nazi racial classification schemes are wrong, and gives the reason: **"only because they understate the relative severity of American law"** (Whitman, 2017). **The Nazis did not settle on a milder rule because America was cruel and they were kind. They settled on a different rule because their target population was different and because a rule that harsh was, in their judgment, unworkable for it.** That is a statement about Nazi cost-benefit reasoning, not about American mercy, and treating it as exoneration is the second-commonest abuse of this material after the first.

**The second reason unmodified borrowing was impossible: the targets did not match.** Nazi authors argued that American law could rely on what one anonymous 1935 writer called "mostly clear color lines," while German Jews were not visually distinguishable in the same way and maintained identity through culture rather than color (Whitman, 2017). **From this the Nazi literature drew a conclusion that should turn your stomach and that you should still record accurately**, namely that the German "problem" was therefore harder and more insidious than the American one.

**Whitman's bottom line, which is the sentence to memorize for the quiz and for arguments.**

> The bottom line is that the Nazis regarded American classification schemes as too harsh, and the American race problem as too different, for any unmodified borrowing to have taken place. But what ultimately matters is that they knew that there was an American example, and indeed the example that they turned to first, and over and over again. (Whitman, 2017)

**Both halves of that sentence are the finding.** The first half is the limit on the claim. The second half is the claim. **A course that gives you only the first half is minimizing. A course that gives you only the second half is agitating. This course gives you the sentence.**

**A test you can apply to any writing you meet on this subject.** Ask: does it contain the words *too harsh*, or any equivalent? **If a piece asserts that the Nazis modeled their race law on America and never mentions that they rejected the American classification rule as excessive, the writer either has not read the book or is not telling you what is in it.** That test is cheap, it is fast, and it works.

## Sources
- Whitman, J. Q. (2017). *Hitler's American model: The United States and the making of Nazi race law*. Princeton University Press.`,
      recallContent: [
        {
          prompt: "Who was Heinrich Krieger and what did he write?",
          answer: "A young Nazi lawyer who spent two semesters as an exchange student at the University of Arkansas Law School in 1933 and 1934. He published an article on American race law in Verwaltungsarchiv in 1934 and expanded it into a book in 1936, backed by roughly 350 pages of study.",
        },
        {
          prompt: "What did Whitman call Krieger, and why is the comparison uncomfortable?",
          answer: "He called Krieger \"the Nazi Gunnar Myrdal\" and said the book represented first-rate Nazi scholarship. It is uncomfortable because it means the research was competent, not crude, and it cannot be dismissed as ignorance.",
        },
        {
          prompt: "Who was Herbert Kier, who commissioned him, and what was his brief?",
          answer: "A young Austrian National Socialist brought into the Kaiser Wilhelm Institute for Foreign Public Law and International Law by its director Viktor Bruns in 1933. He was asked to compile material on the race legislation of the United States, South Africa and Australia.",
        },
        {
          prompt: "What did Kier print in the official National Socialist handbook, and why does it corroborate the transcript?",
          answer: "A two-page alphabetical table giving the anti-miscegenation legislation of all thirty American states with exact citations. It matches the description Gürtner and Freisler gave the previous June, and was very likely the list Freisler referred to.",
        },
        {
          prompt: "Where did South Africa sit in the German research, according to Krieger's own summary?",
          answer: "At the margin. Krieger judged that there were only two real centers of race law in the world, the United States and Germany, with South Africa peripheral, even though he later traveled to South-West Africa and gathered material on South Africa.",
        },
      ],
    },
    {
      slug: "ex-nuremberg-laws",
      title: "10 · What the Nuremberg Laws actually said",
      section: "Section 3 · Germany studied it",
      body: `**Read the statutes before the argument about the statutes.** Two laws were announced at the Nazi Party rally on **15 September 1935** (United States Holocaust Memorial Museum, n.d.-a).

**1. The Reich Citizenship Law.** It reserved citizenship for those "of German or related blood," stripping Jews of full citizenship and eliminating their political rights (United States Holocaust Memorial Museum, n.d.-a). **Compare lesson 4.** This is the second-class citizenship technique: a person remains a subject of the state without holding the political rights of a citizen. **The technique is the parallel, and the technique is what the German researchers had written up.**

**2. The Law for the Protection of German Blood and German Honor**, usually called the Blood Law. Whitman quotes its operative provisions:

> § 1 (1) Marriages between Jews and nationals of German blood or racially related blood are forbidden. If such marriages are nevertheless entered into they are null and void, even if they are concluded abroad in order to evade this law.
> § 5 (1) Any person who violates the prohibition of § 1 shall be punished by imprisonment at hard labor. (Law on the Protection of German Blood and German Honor, as quoted in Whitman, 2017)

**Look at what that pair of clauses does: civil invalidity plus criminal penalty, with an anti-evasion rule for marriages contracted abroad.** That is structurally the American anti-miscegenation package from lesson 5. **And here is Whitman being scrupulous about exactly that point:** "The language of this law was certainly not directly copied from some American statute; but that is not the point" (Whitman, 2017). **He is not claiming a copied text. He is claiming a borrowed conceptual framework, which is rung 1 of the ladder softened into rung 2.**

**3. The definition, which came two months later, and which is where the one-drop story lands.** The First Regulation under the Reich Citizenship Law, of **14 November 1935**, provided that a person was a Jew if descended from at least three racially full-Jewish grandparents, and that a person with two Jewish grandparents counted as a Jew if he belonged to the Jewish religious community at the time of the law or joined it afterwards, or was married to a Jew at that time or married one afterwards (First Regulation, as quoted in Whitman, 2017). Those with one or two Jewish grandparents who did not meet those conditions fell into the category of *Mischlinge* (United States Holocaust Memorial Museum, n.d.-a).

**Now put the numbers side by side, because this is the whole argument in one table.**

| | Threshold used | Source |
|---|---|---|
| **American states, as reported to German readers** | One eighth in five states, one quarter in two, any traceable ancestry in some case law | Krieger, as quoted in Whitman (2017) |
| **What Nazi radicals wanted** | One Jewish grandparent, the equivalent of one quarter | Whitman (2017) |
| **What the 14 November 1935 regulation settled on** | Three or four Jewish grandparents, with a religion-and-marriage test for those with two | First Regulation, as quoted in Whitman (2017) |

**The radicals lost that fight, and they lost it in the direction of leniency.** Lösener defended the compromise on the ground that life choices revealed the "inclinations" of the person in question (Whitman, 2017). **The regime that produced the Holocaust adopted a narrower racial definition than the one its own radicals proposed and than the one several American states used.** Both halves of that sentence are true, and neither of them is a mitigation of anything.

**The marriage test, and Whitman at his most careful.** Notice that the November regulation makes legal status turn partly on whom you married. Krieger had reported that Texas courts looked at the racial identity of a first marital partner, and the Nazi literature on American immigration law had praised the Cable Act rule from lesson 4 (Whitman, 2017). **So there is a possible American echo here.** Whitman raises it, and then writes: **"In the end though we do not know. We cannot say what part if any this aspect of the American model played in German thinking"** (Whitman, 2017).

**That sentence is why this book can be taught.** He had a striking parallel, he had a plausible transmission route, and he wrote *we do not know*. **When you write about this subject, that is the standard.**

**The postscript that keeps the story from ending tidily.** A week after the Nuremberg Laws were proclaimed, an official delegation of German lawyers, forty-five people, sailed for the United States. In New York they met large protests, which the delegation read as confirmation that its enemies had understood the challenge (Stolleis, 2018; Williams, 2017). **What they did on the rest of that trip is not in the record**, and Whitman's reviewers have noted the gap (Williams, 2017). **An absent source is a finding. Report it as one.**

**One more thing that belongs here and not in section 5, because it is a claim about 1935 rather than a moral framing.** Whitman writes: "It is simply not the case that the drafters of the Nuremberg laws were already aiming at the annihilation of the Jews in 1935. The concern of early Nazi policy was to drive the Jewish population into exile, or at the very least to marginalize it within the borders of the Reich" (Whitman, 2017, p. 13). **He says this while arguing against critics who use the Holocaust to rule out any comparison. It is a claim about what the 1935 drafters intended, and it is not a claim about what the regime became.**

## Sources
- Stolleis, M. (2018). Lehrmeister Amerika [America the schoolmaster]. *Rechtsgeschichte / Legal History*, *26*, 489 to 492. https://doi.org/10.12946/rg26/489-492
- United States Holocaust Memorial Museum. (n.d.-a). *The Nuremberg Race Laws*. Holocaust Encyclopedia. https://encyclopedia.ushmm.org/content/en/article/the-nuremberg-race-laws
- Whitman, J. Q. (2017). *Hitler's American model: The United States and the making of Nazi race law*. Princeton University Press.
- Williams, T. C. (2017, August 16). Long read review: *Hitler's American Model* by James Q. Whitman. *LSE Review of Books*. https://blogs.lse.ac.uk/lsereviewofbooks/2017/08/16/long-read-review-hitlers-american-model-the-united-states-and-the-making-of-nazi-race-law-by-james-q-whitman/`,
      recallContent: [
        {
          prompt: "Quote Whitman's sentence about why the Nazis sometimes rejected the American example.",
          answer: "\"[T]he ironic truth is that when Nazis rejected the American example, it was sometimes because they thought that American practices were overly harsh: for Nazis of the early 1930s, even radical ones, American race law sometimes looked too racist\" (Whitman, 2017, p. 5).",
        },
        {
          prompt: "Which specific American rule did German commentators recoil from, and how did they describe it?",
          answer: "The one-drop rule. A 1934 Nazi teachers' guide said American racial separation led in certain cases to human hardness, and a 1936 article for teachers of English called it the unforgiving hardness of the social usage.",
        },
        {
          prompt: "Why is \"the Nazis found American law too harsh\" not a compliment to the United States?",
          answer: "Whitman says scholars who see parallels are wrong only because they understate the relative severity of American law. The Nazis chose a different rule because their target population was different and the American rule was unworkable for it, not out of mercy.",
        },
        {
          prompt: "State Whitman's bottom line on the one-drop rule in both its halves.",
          answer: "The Nazis regarded American classification schemes as too harsh and the American race problem as too different for any unmodified borrowing. But what ultimately matters is that they knew there was an American example, and it was the one they turned to first and repeatedly.",
        },
        {
          prompt: "What cheap test can you run on any piece of writing about this subject?",
          answer: "Check whether it contains the words too harsh or an equivalent. If a piece says the Nazis modeled their race law on America and never mentions that they rejected the American classification rule as excessive, the writer has not read the book or is not reporting it.",
        },
      ],
    },
    {
      slug: "ex-the-argument-against",
      title: "11 · The scholars who think this is overstated",
      section: "Section 3 · Germany studied it",
      body: `**A course that presents a contested thesis as settled has misinformed you even when the thesis is right.** Whitman is arguing **against** a scholarly position, not into empty space, and that position has names.

**The prior consensus, in its own words.** All four of these are quoted here from Whitman's own introduction, which is both the honest way to get them and a limitation you should notice; more on that below.

| Scholar | Position | Source |
|---|---|---|
| **Andreas Rethmeier**, 1995 dissertation on the Nuremberg Laws | Conceded America was for the Nazis the "classic example" of racist legislation, but insisted the idea of American influence on the Nuremberg Laws was "not just off-base, but plain wrong," because American law classified Jews as "Caucasian" | Whitman (2017, p. 4) |
| **Richard Bernstein**, American legal historian | "[T]he few and fleeting references by Nazi polemicists and 'jurists' to Jim Crow laws" were "simply attempts to cite vaguely relevant precedents for home-grown statutes and policies to deflect criticism, not actual sources of intellectual influence" | Whitman (2017, p. 4) |
| **Marcus Hanke**, University of Salzburg | "[T]he segregation law of the states has not been of any important influence" | Whitman (2017, p. 4) |
| **Jens-Uwe Guettel**, 2012 book | The "astonishing insignificance of American segregation laws" for Nazi policy; the Nazis saw America as mired in an outdated liberal outlook | Whitman (2017, p. 4) |

**Their shared argument, stated fairly.** Nazi references to American law were **rhetorical**, not formative. They were there to embarrass foreign critics, and they were reaching for a handy parallel rather than a source. **On that reading, the transcript shows a regime looking for cover, not for a model.**

**Whitman's answer, stated fairly.** He makes two moves. First, he says they are answering the wrong question, because they ask about segregation and "[t]he Nuremberg Laws said nothing about segregation" (Whitman, 2017, p. 11). Second, he says the audience for the documents rules out the propaganda reading, as lesson 7 set out. **Notice that the first move is a concession as much as a rebuttal: Whitman agrees that American segregation law was not the important influence.** On the narrow question his critics asked, he substantially grants their answer and then changes the question. **Whether changing the question is a legitimate move or a rescue is exactly what the argument is about, and it is your call to make, not this course's.**

**The objection Whitman raises against himself, which is the strongest one.** "Skeptics may retort that Nazi radicals would have succeeded in criminalizing racially mixed marriages even if they had not had an American example to cite. That is perfectly possible; we will never know" (Whitman, 2017). **A cause that was not necessary is a weaker cause. He concedes it in his own text.**

**The sharpest published qualifier comes from a friendly reviewer, which is why it is worth more.** Michael Stolleis, one of Germany's leading legal historians, reviewed the book in *Rechtsgeschichte* in 2018 and largely accepted its findings. His summing-up sentence is the one to keep: **"Gewiss hätte es für die Nationalsozialisten dieses Modells nicht bedurft, aber da es vorhanden war, wurde es auch genutzt"** (Stolleis, 2018, p. 492), which reads in English as: certainly the National Socialists would not have needed this model, but since it was there, it was used as well. **That is a precise statement of a modest claim, and it is compatible with everything in section 3.** Stolleis also notices the political shape of the book's American reception, suggesting the enthusiasm carried an implication that American society should examine its own past and present rather than only pointing at Nazi Germany (Stolleis, 2018).

**The limitation you should have spotted three paragraphs ago.** **Every critic quoted in the table above is quoted from Whitman.** He chose the sentences, he set them up, and he answers them on the next page. **That is normal scholarly practice and it is still a one-sided window.** If this question matters to you, the honest next step is to read Guettel's 2012 book and Rethmeier's dissertation yourself, and to read the published reviews rather than only the book. Three you can start with: S. J. Wiesen in the *American Historical Review* (2018), K. F. Ledford in *Holocaust and Genocide Studies* (2019), and Stolleis (2018). **This course has read Stolleis in full and characterises only Stolleis. The other two are named as places to go, not summarized second hand.**

**What a live disagreement looks like, and how to hold one.**
1. **The documentary claims are not in dispute.** Nobody argues that the transcript is a forgery or that Kier's table is not in the handbook. **Both sides agree about the documents.**
2. **The dispute is about what the documents mean.** Were the American references formative or decorative? **That is an interpretive question, and interpretive questions do not get settled by producing one more document.**
3. **Both sides have a motivated reading available to them**, and you should notice yours. If you want America implicated, Whitman is convenient. If you want America exonerated, Guettel is. **Preferring the conclusion you wanted is the failure mode; naming it in advance is the defense.**
4. **The safest formulations are the specific ones.** "Nazi lawyers studied American race law in detail while drafting the Nuremberg Laws" is defensible on any reading. "American race law caused the Nuremberg Laws" is not. **Write the first.**

## Sources
- Ledford, K. F. (2019). Review of *Hitler's American model: The United States and the making of Nazi race law*, by J. Q. Whitman. *Holocaust and Genocide Studies*, *33*(2), 277. https://academic.oup.com/hgs/article-abstract/33/2/277/5607388
- Stolleis, M. (2018). Lehrmeister Amerika [America the schoolmaster]. *Rechtsgeschichte / Legal History*, *26*, 489 to 492. https://doi.org/10.12946/rg26/489-492
- Whitman, J. Q. (2017). *Hitler's American model: The United States and the making of Nazi race law*. Princeton University Press.
- Wiesen, S. J. (2018). Review of *Hitler's American model: The United States and the making of Nazi race law*, by J. Q. Whitman. *The American Historical Review*, *123*(3), 917 to 918. https://academic.oup.com/ahr/article-abstract/123/3/917/5025408`,
      recallContent: [
        {
          prompt: "Give the date the Nuremberg Laws were announced and name the two laws.",
          answer: "15 September 1935. The Reich Citizenship Law and the Law for the Protection of German Blood and German Honor.",
        },
        {
          prompt: "What did the Blood Law's sections 1 and 5 do, and which American package do they resemble structurally?",
          answer: "Section 1 forbade marriages between Jews and nationals of German or related blood, made them null and void even if concluded abroad to evade the law, and section 5 punished violation with imprisonment at hard labor. That is civil invalidity plus criminal penalty, the American anti-miscegenation package.",
        },
        {
          prompt: "What threshold did the 14 November 1935 regulation settle on, and what had the radicals wanted?",
          answer: "Three or four Jewish grandparents, with a religion and marriage test for those with two. The radicals had wanted a single Jewish grandparent, the equivalent of the one-quarter rule used in two American states.",
        },
        {
          prompt: "What does Whitman say about whether the American marital-status rule shaped the German definition?",
          answer: "He raises the parallel with Texas and the Cable Act and then writes that in the end we do not know, and cannot say what part if any this aspect of the American model played in German thinking.",
        },
        {
          prompt: "What happened a week after the Nuremberg Laws were proclaimed, and what is missing from the record?",
          answer: "An official delegation of forty-five German lawyers sailed for the United States and met large protests in New York. What they did for the rest of the trip is not documented, and reviewers have noted the gap.",
        },
      ],
    },
    {
      slug: "ex-quiz-germany",
      title: "12 · Quiz: what the German record shows, and what it does not",
      section: "Section 3 · Germany studied it",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is the document at the centre of the German half of this course?",
            options: [
              "A verbatim stenographic transcript of a meeting held on 5 June 1934",
              "A pamphlet the Nazi regime published in English for readers in the United States and Britain",
              "A letter from Hitler to the government of the state of Virginia",
              "The minutes of the 1935 Nazi Party rally at Nuremberg",
            ],
            correctIndex: 0,
            explanation: "A stenographer recorded the Commission on Criminal Law Reform meeting and the Nazi bureaucracy preserved the transcript. That is why the claim can be handled to an evidence standard.",
            sourceLessonSlug: "ex-june-1934",
          },
          {
            prompt: "Who chaired the 5 June 1934 meeting?",
            options: [
              "Roland Freisler, later President of the People's Court",
              "Franz Gürtner, Reich Minister of Justice",
              "Bernhard Lösener, a draftsman of the Nuremberg Laws",
              "Hans Frank, editor of the National Socialist legal handbook",
            ],
            correctIndex: 1,
            explanation: "Gürtner chaired and opened by presenting a ministry memo on American race law. Freisler and Lösener were both present but did not chair.",
            sourceLessonSlug: "ex-june-1934",
          },
          {
            prompt: "Freisler said American jurisprudence would suit Germany perfectly \"with a single exception.\" What was the exception?",
            options: [
              "American penalties for mixed marriage were far too light for German purposes",
              "American law was written in English and could not be translated accurately",
              "American law did not reckon Jews among the coloreds",
              "American law was made by judges rather than by an elected legislature",
            ],
            correctIndex: 2,
            explanation: "That half of the sentence is the reason copying was impossible, and quoting only the first half misuses the source.",
            sourceLessonSlug: "ex-june-1934",
          },
          {
            prompt: "Which faction at the meeting pushed hardest for using the American example?",
            options: [
              "The conservative nationalists around Gürtner, who wanted to restrain the radicals",
              "The foreign ministry, which wanted material for use against critics abroad",
              "Nobody; the American material was raised once and dropped",
              "The most radical Nazis present",
            ],
            correctIndex: 3,
            explanation: "Whitman calls it particularly startling that the most radical Nazis were the most ardent champions of the American lessons. Gürtner and Lösener braked.",
            sourceLessonSlug: "ex-june-1934",
          },
          {
            prompt: "Why does Whitman argue the Nazi engagement with American law was study rather than propaganda?",
            options: [
              "The documents were closed-door records and dense domestic legal texts, not material aimed at foreigners",
              "Because Nazi officials said under oath at Nuremberg after the war that they had never intended propaganda",
              "Because the American press reported on the meeting at the time",
              "Because propaganda was illegal under German law in 1934",
            ],
            correctIndex: 0,
            explanation: "The argument is about the physical document and its intended audience, which is the strongest kind of argument available here.",
            sourceLessonSlug: "ex-june-1934",
          },
          {
            prompt: "Where did Heinrich Krieger study American law?",
            options: [
              "At Harvard Law School as a visiting professor of comparative law",
              "At the University of Arkansas Law School as an exchange student",
              "At the Kaiser Wilhelm Institute in Berlin, without leaving Germany",
              "At the Reich Ministry of Justice library in Berlin",
            ],
            correctIndex: 1,
            explanation: "Two semesters in 1933 and 1934, after which he published an article on American race law that most likely supplied the memo Gürtner brought to the June meeting.",
            sourceLessonSlug: "ex-krieger-and-kier",
          },
          {
            prompt: "Whitman calls Krieger \"the Nazi Gunnar Myrdal.\" What is the uncomfortable implication?",
            options: [
              "That Krieger secretly opposed the regime he served throughout the whole of the Nazi period",
              "That Krieger's work was too obscure to have reached any German policy maker",
              "That Krieger's research was competent scholarship, not crude ignorance",
              "That Krieger later emigrated to the United States and changed his views",
            ],
            correctIndex: 2,
            explanation: "Whitman writes that it may sound grating to speak of first-rate Nazi scholarship, but that is what the book represented. Competence is what makes it hard to dismiss.",
            sourceLessonSlug: "ex-krieger-and-kier",
          },
          {
            prompt: "Herbert Kier was commissioned to compile material on the race legislation of which countries?",
            options: [
              "Only the United States, because no other country had comparable statutes on its books",
              "The United States, Brazil and Canada",
              "The United States and Britain",
              "The United States, South Africa and Australia",
            ],
            correctIndex: 3,
            explanation: "The brief was wider than the United States, which matters for section 4. Krieger nonetheless judged South Africa marginal next to the United States and Germany.",
            sourceLessonSlug: "ex-krieger-and-kier",
          },
          {
            prompt: "What did Kier print in the official National Socialist handbook of law and legislation?",
            options: [
              "A two-page table of the anti-miscegenation statutes of all thirty American states",
              "A photograph of the Reich Minister of Justice meeting a delegation of American lawyers in Berlin",
              "A translation of the full text of the American Constitution",
              "A map showing the American states with the largest Jewish populations",
            ],
            correctIndex: 0,
            explanation: "Whitman notes the table matches the description Gürtner and Freisler gave the previous June, and that it kept circulating into a 1937 commentary on the Blood Law.",
            sourceLessonSlug: "ex-krieger-and-kier",
          },
          {
            prompt: "Which American rule did German commentators describe as leading to \"human hardness\"?",
            options: [
              "The requirement that race be stated on a birth certificate",
              "The one-drop rule",
              "The ten-year maximum sentence for mixed marriage in several states",
              "The exclusion of Chinese labourers under the 1882 Act",
            ],
            correctIndex: 1,
            explanation: "A 1934 German teachers' guide and a 1936 article for teachers of English both praised American racial legislation and recoiled from the one-drop rule.",
            sourceLessonSlug: "ex-too-harsh",
          },
          {
            prompt: "Why is \"the Nazis found American law too harsh\" NOT a point in America's favour?",
            options: [
              "Because the Nazis were lying about their real view in order to embarrass American diplomats at the League of Nations",
              "Because Whitman later withdrew the claim in the paperback edition of his book",
              "Because it reflects Nazi judgment about workability, and understating American severity is the error",
              "Because no German source actually says it, and the whole passage is a later invention",
            ],
            correctIndex: 2,
            explanation: "Whitman says scholars who see parallels are wrong only because they understate the relative severity of American law. The Nazis picked a different rule for their own reasons, not out of mercy.",
            sourceLessonSlug: "ex-too-harsh",
          },
          {
            prompt: "The First Regulation of 14 November 1935 defined a Jew as a person descended from how many racially full-Jewish grandparents?",
            options: [
              "One, which the radicals had proposed and which matched the American quarter-blood rule",
              "Any traceable Jewish ancestry, mirroring the American one-drop rule exactly",
              "Two, in every case regardless of religion or marriage",
              "At least three",
            ],
            correctIndex: 3,
            explanation: "Three or four grandparents, with a religion and marriage test for those with two. The radicals had wanted one, and lost.",
            sourceLessonSlug: "ex-nuremberg-laws",
          },
          {
            prompt: "Whitman notes that the November 1935 definition turned partly on whom a person had married, and that Texas and the Cable Act did something similar. What does he then conclude?",
            options: [
              "That we do not know what part, if any, the American model played here",
              "That the German drafters certainly took the rule from Texas case law reported by Krieger",
              "That the parallel is a coincidence with no possible route of transmission at all",
              "That the Cable Act was itself modeled on an earlier German statute",
            ],
            correctIndex: 0,
            explanation: "He had a striking parallel and a plausible route, and he wrote that we do not know. That is the standard this course asks you to write to.",
            sourceLessonSlug: "ex-nuremberg-laws",
          },
          {
            prompt: "Which scholar wrote of the \"astonishing insignificance of American segregation laws\" for Nazi policy?",
            options: [
              "Michael Stolleis, reviewing the book in the journal Rechtsgeschichte in 2018",
              "Jens-Uwe Guettel",
              "Bernhard Lösener, in his own postwar memoir of the drafting process",
              "George M. Fredrickson, in his comparative study of white supremacy",
            ],
            correctIndex: 1,
            explanation: "Guettel's 2012 book is one of four positions Whitman argues against, alongside Rethmeier, Bernstein and Hanke. All four are quoted here from Whitman's own introduction.",
            sourceLessonSlug: "ex-the-argument-against",
          },
          {
            prompt: "What is the limitation in how this course presents Whitman's critics?",
            options: [
              "Their books are all out of print and cannot be consulted by anyone today",
              "They wrote only in German, so their arguments cannot be checked by an English-speaking reader",
              "Every one of them is quoted from Whitman, who chose the sentences and answers them",
              "They published after Whitman's book and so could not have been read by him",
            ],
            correctIndex: 2,
            explanation: "That is normal scholarly practice and still a one-sided window. The honest next step is to read Guettel and Rethmeier directly, and the published reviews.",
            sourceLessonSlug: "ex-the-argument-against",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 4 · South Africa: parallel, parent, and mutual sight
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "ex-different-evidence",
      title: "13 · A different kind of evidence, and why that matters",
      section: "Section 4 · South Africa: parallel, parent, and mutual sight",
      body: `**Nothing in section 3 is evidence about South Africa.** Whitman's book is about Germany. **This section is sourced independently, and this lesson exists so that you can see the join rather than being walked across it.**

**What people expect this section to say.** The popular version of this story runs: apartheid was Jim Crow with a different accent, and South Africa copied the American South. **The sources do not support that**, and the section will end up somewhere more interesting.

**What the sources support instead, stated up front so the rest of the section is checkable against it.**
1. **A shared parent.** South African segregation law and American segregation law both descend, in part, from the same imperial legal world, and South Africa's own segregation framework was legislated under British dominion government decades before the word apartheid existed. **Lesson 14.**
2. **Documented mutual observation, running in both directions.** Named people traveled, watched and published, and at least one important current ran from South Africa **to** the American South rather than the other way. **Lesson 15.**
3. **Explicit cross-citation between the freedom movements**, which is a different phenomenon again and is the best documented thing in the whole section. **Lesson 16.**

**Why the evidence is different in kind, not just weaker.** In section 3 there was a room, a date, a stenographer and a ministry memo. **There is no equivalent single document here, and the honest thing is to say so plainly rather than to hunt for a substitute.** What there is instead is a body of comparative legal history and a set of biographies. Two books define the field:

- **George M. Fredrickson, *White Supremacy: A Comparative Study in American and South African History* (1981).** Fredrickson finds real parallels, including that both countries had a colonial frontier phase in which a settler population displaced or subjugated indigenous peoples, and that both later had imperial or neo-imperial governments trying to limit white territorial expansion. **He is equally firm that the two differ in origin, in legal form, and in the ideas used to justify them.**
- **John W. Cell, *The Highest Stage of White Supremacy: The Origins of Segregation in South Africa and the American South* (1982).** Cell's argument is that segregation was **distinctively modern**, tied to urbanisation, industrialisation and modern state formation, and that it crystallised in South Africa as a system and ideology only after 1900. **He also argues that it was first advocated by moderates and liberals rather than by the fanatics later identified with it**, which is one of the more uncomfortable findings in the comparative literature.

**Read what those two books are doing.** Neither is a transmission study. **Both are comparisons**, which is rung 4 and rung 5 territory on the ladder from lesson 2: parallel development from partly shared conditions and a partly shared legal ancestor. **That is a real finding. It is just not the finding people arrive expecting.**

**One piece of evidence from section 3 that legitimately crosses over, and its exact weight.** Herbert Kier's commission at the Kaiser Wilhelm Institute covered "the United States, South Africa and Australia" (Stolleis, 2018), and Heinrich Krieger later traveled to South-West Africa for the National Socialist Office of Race Policy and gathered material for a monograph on South Africa (Whitman, 2017). **So Nazi researchers did look at South Africa.** And Krieger's own conclusion, as Stolleis reports it, was that the world had **two** real centers of race law, the United States and Germany, with South Africa at the margin (Stolleis, 2018).

**Notice how little that gets you, and notice it in both directions.** It tells you a German researcher's ranking in the 1930s. **It is not evidence that South Africa borrowed from anybody, and it is not evidence that it did not.** It is evidence about what one Nazi comparativist thought. **Treating a third party's ranking as a finding about the country ranked is a mistake worth naming, because it is easy to make and hard to see.**

**The standing rule for this section.** Every claim from here to lesson 16 is cited to a source about **South Africa**, not to Whitman. **If you catch this course leaning on the German material to carry a South African claim, it has broken its own rule, and you should say so.**

## Sources
- Cell, J. W. (1982). *The highest stage of white supremacy: The origins of segregation in South Africa and the American South*. Cambridge University Press.
- Fredrickson, G. M. (1981). *White supremacy: A comparative study in American and South African history*. Oxford University Press.
- Stolleis, M. (2018). Lehrmeister Amerika [America the schoolmaster]. *Rechtsgeschichte / Legal History*, *26*, 489 to 492. https://doi.org/10.12946/rg26/489-492
- Whitman, J. Q. (2017). *Hitler's American model: The United States and the making of Nazi race law*. Princeton University Press.`,
      recallContent: [
        {
          prompt: "Name the four scholars whose positions Whitman argues against, and summarise their shared claim.",
          answer: "Andreas Rethmeier, Richard Bernstein, Marcus Hanke and Jens-Uwe Guettel. Their shared claim is that Nazi references to American law were rhetorical rather than formative, meant to deflect foreign criticism rather than to supply a model.",
        },
        {
          prompt: "What does Whitman concede in his own answer to those critics?",
          answer: "He concedes that American segregation law was not the important influence, and argues that his critics are answering the wrong question because the Nuremberg Laws said nothing about segregation. Whether changing the question is legitimate is what the argument is about.",
        },
        {
          prompt: "What is the strongest objection Whitman raises against himself?",
          answer: "That the Nazi radicals would probably have succeeded in criminalising racially mixed marriages even without an American example to cite. He writes that this is perfectly possible and that we will never know.",
        },
        {
          prompt: "Give Stolleis's summing-up qualifier in English.",
          answer: "Certainly the National Socialists would not have needed this model, but since it was there, it was used as well. It is a precise statement of a modest claim.",
        },
        {
          prompt: "What are the two safest and least safe ways to state the German claim?",
          answer: "Safe: Nazi lawyers studied American race law in detail while drafting the Nuremberg Laws. Not safe: American race law caused the Nuremberg Laws.",
        },
      ],
    },
    {
      slug: "ex-colonial-parent",
      title: "14 · The shared parent: colonial native administration",
      section: "Section 4 · South Africa: parallel, parent, and mutual sight",
      body: `**If you want to know where South Africa's segregation law came from, look up, not sideways.** The framework apartheid was built on was legislated in a British dominion, by dominion governments, decades before 1948.

**The Union, and then the three statutes that built the frame.** The Union of South Africa was formed in 1910 out of British colonies and former Boer republics. Within twenty years its parliament had passed the structural core of segregation.

| Statute | Year | What it did |
|---|---|---|
| **Natives Land Act** (Act No. 27 of 1913) | 1913 | Defined less than one tenth of the country as African reserves and prohibited African purchase or lease of land outside them |
| **Natives (Urban Areas) Act** (Act No. 21 of 1923) | 1923 | Segregated urban residential space by race and created influx control over African movement into towns |
| **Native Administration Act** (Act No. 38 of 1927) | 1927 | Made the Governor-General "supreme chief" of all Africans, with power to govern them by proclamation |

**The 1923 Act had a commission behind it, and the commission's principle is the thing to remember.** The Stallard Commission of 1922 held that Africans should be in the urban industrial areas only in order to work, and should leave when the work was done (South African History Online, n.d.-a). **That is a principle about labor and residence, not about seating or drinking fountains.** It is the ancestor of the pass laws, and its lineage is the colonial administration of a labouring population, not the American color line in public accommodation.

**Now the 1927 Act, which is the giveaway.** A statute that names the **Governor-General** as supreme chief of all Africans and lets him legislate for them by proclamation is not an American instrument at all. **The United States had no Governor-General.** This is indirect rule: the classic technique of British colonial native administration, in which a colonial authority governs a subject population through a separate legal channel. **When you see that in the statute book, you are looking at the parent.**

**Then apartheid, from 1948, built on top of that frame.** The National Party won the 1948 election and legislated fast.

| Statute | Year |
|---|---|
| Prohibition of Mixed Marriages Act | 1949 |
| Immorality Amendment Act | 1950 |
| Population Registration Act | 1950 |
| Group Areas Act | 1950 |
| Natives (Abolition of Passes and Co-ordination of Documents) Act | 1952 |
| Reservation of Separate Amenities Act | 1953 |
| Bantu Education Act | 1953 |

**Look at that list beside lesson 5 and you will feel the pull of the easy conclusion.** A marriage ban, a sex ban, a compulsory racial register, residential zoning by race, and separate public amenities. **It looks like Jim Crow with the volume turned up.**

**Three reasons to resist the easy conclusion, in order of strength.**

**1. The chronology is wrong for a simple copy.** The land, urban-areas and administration statutes came first, in 1913, 1923 and 1927, and the 1948 laws were built on them. **A system whose frame was already thirty-five years old is not a system that was imported in 1949.** This is the same test that section 3 applied to Germany and the same test the Indiana Avenue course applied to Unigov: **put the dates in a column and see whether the proposed cause precedes the effect.**

**2. Some of the instruments have no American counterpart at all.** A national population register assigning every person to a racial category by law, and a supreme chief governing by proclamation, are not American techniques. **Where an instrument has no American analogue, the American model cannot be its source.**

**3. The comparative historians who studied this most closely reached a different conclusion.** Cell's argument is that segregation in both places was a distinctively modern response to urbanisation and industrialisation that crystallised after 1900, and that it was first advocated by moderates and liberals rather than by fanatics (Cell, 1982). Fredrickson finds parallels in the settler frontier phase and in the later friction with imperial government, and differences "in origin, legal form, and ideological rationalizations" (Fredrickson, 1981). **Neither concluded that one country copied the other.**

**So what is the honest formulation?** **Parallel development from a shared colonial parent, with a partly shared vocabulary and a partly shared set of pressures.** Not derivation. **And once you have said that, lesson 15 gets a great deal more interesting, because parallel development did not stop the people involved from watching each other.**

## Sources
- Britannica. (n.d.). *Native Lands Act*. https://www.britannica.com/topic/Native-Lands-Act
- Cell, J. W. (1982). *The highest stage of white supremacy: The origins of segregation in South Africa and the American South*. Cambridge University Press.
- Fredrickson, G. M. (1981). *White supremacy: A comparative study in American and South African history*. Oxford University Press.
- South African History Online. (n.d.-a). *The history of separate development in South Africa*. https://sahistory.org.za/article/history-separate-development-south-africa
- South African History Online. (n.d.-b). *The Natives Land Act of 1913*. https://sahistory.org.za/article/natives-land-act-1913`,
      recallContent: [
        {
          prompt: "Why is nothing in section 3 evidence about South Africa?",
          answer: "Whitman's book is about Germany. Section 4 is sourced independently, and the standing rule is that every claim in it must cite a source about South Africa rather than leaning on the German material.",
        },
        {
          prompt: "What three things do the sources actually support about South Africa?",
          answer: "A shared colonial legal parent, documented mutual observation running in both directions, and explicit cross-citation between the freedom movements, which is the best documented of the three.",
        },
        {
          prompt: "Name the two books that define the comparative field, and say what kind of studies they are.",
          answer: "Fredrickson's White Supremacy (1981) and Cell's The Highest Stage of White Supremacy (1982). Neither is a transmission study. Both are comparisons, which sit on rungs 4 and 5 of the ladder.",
        },
        {
          prompt: "What was Cell's argument about the origins of segregation?",
          answer: "That segregation was distinctively modern, tied to urbanisation, industrialisation and modern state formation, that it crystallised in South Africa only after 1900, and that it was first advocated by moderates and liberals rather than by the fanatics later identified with it.",
        },
        {
          prompt: "Where did Krieger rank South Africa, and what does that ranking prove?",
          answer: "At the margin, behind the United States and Germany as the two real centers of race law. It proves what one Nazi comparativist thought. It is not evidence that South Africa borrowed from anybody, in either direction.",
        },
      ],
    },
    {
      slug: "ex-mutual-sight",
      title: "15 · Mutual sight: who traveled, who watched, and which way it ran",
      section: "Section 4 · South Africa: parallel, parent, and mutual sight",
      body: `Parallel development did not mean mutual ignorance. **People crossed the ocean on purpose to look, and the traffic is documented by name.**

**Maurice Smethurst Evans, who went the other way.** Evans was a British immigrant to South Africa in 1875, described by his American republisher as a founder of the Union of South Africa in 1910, and by then a leading authority on racial policy in colonial Africa. **In 1914 he traveled through the American South to study race relations there**, and in 1915 he published the results as *Black and White in the Southern States: A Study of the Race Problem in the United States from a South African Point of View* (University of South Carolina Press, n.d.).

**Read the subtitle again.** *From a South African point of view.* **The observer is South African and the object of study is the United States.** The book is "one of the earliest studies in comparative race relations" and was "the first to connect the experience of the American South" to South African conditions, and it was reissued with an introduction by George M. Fredrickson (University of South Carolina Press, n.d.).

**What Evans concluded, which is not what a copyist would conclude.** He judged that the American South, unable to achieve physical separation of the races, had put up legal and cultural barriers instead, and he treated that as an **inadequate** model and a cautionary example for South Africa (University of South Carolina Press, n.d.). **A South African segregationist studied the American South and came home unimpressed.** That is a documented fact about a published book, and it is very hard to square with "South Africa copied Jim Crow."

**Now the current that ran the other way, which is the finding most people have never heard.** In 1913 **Clarence Hamilton Poe**, editor of the agricultural journal *Progressive Farmer*, launched a campaign to segregate the North Carolina countryside. It failed. **And Poe "had been introduced to the notion that the countryside could be segregated by Maurice Smethurst Evans"** (Herbin-Triant, 2013, p. 170). Herbin-Triant's argument is that rural segregationist thinking in the American South had international roots and was quite different from the urban strain of Jim Crow that historians have mostly studied (Herbin-Triant, 2013).

**Sit with that for a second.** **On the best-documented single line of influence between these two countries in this period, the direction runs from South Africa to the American South.** Not the reverse. **If your model of this history only has one arrow, and it points west to east, the model is wrong.**

**A third figure, and a third domain: education.** **Charles Templeman Loram** took his doctorate at Columbia University in 1917 and published the dissertation as *The Education of the South African Native*, long the standard work on the subject. He was strongly influenced by the vogue for the Hampton and Tuskegee model of Black American education, and he went on to serve on the **Phelps-Stokes Commissions** on education in Africa in the early and mid 1920s (South African History Online, n.d.-c; Davis, 1976). The Phelps-Stokes Fund, founded in 1911 with Thomas Jesse Jones as its educational director, took the schooling of Black Americans as a template for the schooling of Africans (Davis, 1976).

**This is the closest thing in the section to an American export**, and notice its shape. It is not a statute. **It is a curriculum model, carried by a South African who studied in New York, into a colonial education policy.** Davis titled his article "Charles T. Loram and an American Model for African Education in South Africa," and the word *model* is doing the same job it does in Whitman's title: something studied and adapted, not something copied.

**What the whole lesson adds up to, put carefully.**

| Line | Direction | Domain | Evidence |
|---|---|---|---|
| Evans, 1914 to 1915 | South Africa observes the United States | Rural and urban segregation | A published book with a stated point of view |
| Evans to Poe, from 1913 | South Africa to the American South | Rural segregation ideology | A peer-reviewed article tracing the introduction |
| Loram and Phelps-Stokes, 1917 to the mid 1920s | The United States to South Africa | Education | A doctorate, a standard work, commission service |
| Kier and Krieger, 1933 onward | Germany observes South Africa | Race law generally | A commission brief and a research trip |

**Four lines, three directions, no copying.** **That is what mutual sight looks like, and it is a more accurate picture of how legal and policy ideas actually move than any single arrow could be.**

**One thing this course looked for and could not source to its standard.** There is material in circulation about apartheid-era South African officials publicly invoking the American example to defend their own policy. **The best evidence found for it was a magazine cartoon reproduced in a journalistic article, which is not a sourcing floor this course will build on**, and no peer-reviewed treatment of the specific claim was located. **It is therefore left out.** If you want a real research project out of this course, that is one: the United Nations records of the South African delegation's speeches in the 1950s are public.

## Sources
- Davis, R. H., Jr. (1976). Charles T. Loram and an American model for African education in South Africa. *African Studies Review*, *19*(2), 87 to 99. https://www.cambridge.org/core/journals/african-studies-review/article/abs/charles-t-loram-and-an-american-model-for-african-education-in-south-africa/1729041BFCCE192553CFF79F75306187
- Herbin-Triant, E. A. (2013). Southern segregation South Africa style: Maurice Evans, Clarence Poe, and the ideology of rural segregation. *Agricultural History*, *87*(2), 170 to 187. https://read.dukeupress.edu/agricultural-history/article/87/2/170/296896/Southern-Segregation-South-Africa-Style-Maurice
- South African History Online. (n.d.-c). *Charles Templeman Loram*. https://sahistory.org.za/people/charles-templeman-loram
- University of South Carolina Press. (n.d.). *Black and white in the Southern states* [Publisher's description of the Southern Classics edition of Evans, 1915]. https://uscpress.com/Black-and-White-in-the-Southern-States`,
      recallContent: [
        {
          prompt: "Name the three statutes that built South Africa's segregation frame before apartheid, with their years.",
          answer: "The Natives Land Act 1913, the Natives (Urban Areas) Act 1923, and the Native Administration Act 1927.",
        },
        {
          prompt: "What principle did the Stallard Commission of 1922 lay down, and what did it produce?",
          answer: "That Africans should be in the urban industrial areas only in order to work, and should leave when the work was done. It is the ancestor of influx control and the pass laws.",
        },
        {
          prompt: "Why is the Native Administration Act of 1927 the giveaway about the parent system?",
          answer: "It made the Governor-General supreme chief of all Africans with power to legislate for them by proclamation. That is British indirect rule. The United States had no Governor-General, so the instrument cannot be American in origin.",
        },
        {
          prompt: "Give the three reasons to resist the conclusion that apartheid copied Jim Crow.",
          answer: "The chronology is wrong, because the frame was legislated from 1913. Several instruments, such as a national population register and a supreme chief governing by proclamation, have no American counterpart. And the comparative historians who studied it closely concluded parallel development, not derivation.",
        },
        {
          prompt: "What is the honest formulation this course uses for the South African case?",
          answer: "Parallel development from a shared colonial parent, with a partly shared vocabulary and a partly shared set of pressures. Not derivation.",
        },
      ],
    },
    {
      slug: "ex-cross-citation",
      title: "16 · The other direction: freedom movements citing each other",
      section: "Section 4 · South Africa: parallel, parent, and mutual sight",
      body: `**The best documented transnational traffic in this entire course is not between governments. It is between the movements that fought them.** And it is documented for a structural reason worth naming: **movements cite their forebears on purpose, in public, because citing them is part of the work. Governments borrowing a technique do not.** That asymmetry is why this lesson has better sources than every other lesson in section 4 combined.

**1957: the first joint act.** More than a hundred leaders from every continent issued a Declaration of Conscience calling on South Africa to bring its policies into line with the Universal Declaration of Human Rights, and Martin Luther King Jr. was among the sponsors of a Day of Protest on 10 December 1957 against the jailing of 156 South African political activists, Albert Luthuli among them (Martin Luther King, Jr. Research and Education Institute, n.d.).

**1962: the joint appeal.** On **10 December 1962**, Chief Albert Luthuli and the Reverend Martin Luther King Jr. issued a joint statement, **"Appeal for Action Against Apartheid,"** through the American Committee on Africa (South African History Online, n.d.-d). It recalled the 1957 declaration, noting that "[t]he non-whites took heart in learning that they were not alone." It set out the record of repression, including "March 21, 1960 - 72 Africans killed and 186 wounded at Sharpeville by police." And it asked readers to hold meetings and demonstrations on Human Rights Day, to press their governments to support economic sanctions, and not to buy South African products, trade with South Africa or invest there, until "AN EFFECTIVE INTERNATIONAL QUARANTINE OF APARTHEID IS ESTABLISHED" (Luthuli & King, 1962, as archived by South African History Online, n.d.-d).

**Notice the frame the appeal actually uses.** Its case is built on the **Universal Declaration of Human Rights** and on international action, sanctions and boycott. **It is not built on an argument that the two national struggles were the same struggle.** That is a small point and it is the kind of small point this course exists to make: **two leaders can act together without asserting an equivalence, and reading the equivalence into the document is a thing you would be doing, not a thing they did.**

**1986: American law changes because of South Africa.** Congress passed the **Comprehensive Anti-Apartheid Act of 1986** over President Reagan's veto. Reagan vetoed the bill on 26 September 1986; the House voted to override on 29 September; the Senate override on 2 October made it **Public Law 99-440** (Reagan Library, n.d.; United States House of Representatives, n.d.).

**A small honesty note about that paragraph.** Published sources this course consulted give **different vote tallies** for the House override. **Rather than pick one, the tallies are omitted and the dates and the public law number, on which the sources agree, are given instead.** If you need the tallies, the *Congressional Record* has them, and going to it is the assignment. **Reporting a disagreement between sources is a finding; splitting the difference is a fabrication.**

**1990: the citation made explicit, by name.** On **26 June 1990**, four months after his release, Nelson Mandela addressed a joint meeting of the United States Congress. He said:

> We could not have made an acquaintance through literature with human giants such as George Washington, Abraham Lincoln and Thomas Jefferson, and not been moved to act as they were moved to act. We could not have heard of and admired John Brown, Sojourner Truth, Frederick Douglass, W.E.B. DuBois, Marcus Garvey, Martin Luther King, Jr. and others, we could not have heard of these and not be moved to act as they were moved to act. (Mandela, 1990)

**That is a citation.** It is public, it is deliberate, it names its sources, and it was delivered in the legislature of the country being cited. **Compare it with the evidence in lesson 7: a closed meeting, a stenographer, and a memo nobody outside the ministry was meant to read.** Both are real evidence of transnational influence. **They are opposite in kind, and the difference tells you something about the two phenomena.** A regime borrowing a technique of exclusion has no reason to advertise it. **A movement borrowing courage has every reason to.**

**Where to go next, and why this course stops here.** Three of the names in that passage, **Du Bois, Garvey and King**, are the spine of other courses in this catalog, and summarizing them here would do them badly.
- ***Pan-Africanism*** carries the organized political movement across borders, including Garvey and Du Bois and the congresses. **The transnational Black political thread is that course's job.**
- ***Afrocentricity*** carries the intellectual and cultural frame.
- **This course carries the legal-technique thread and stops at the edge of theirs.** When Mandela names Garvey in the United States Capitol, you have arrived at the border between this course and those. **Cross it.**

## Sources
- Martin Luther King, Jr. Research and Education Institute. (n.d.). *Apartheid*. Stanford University. https://kinginstitute.stanford.edu/apartheid
- Mandela, N. (1990, June 26). *Address to a joint meeting of the United States Congress*. African Activist Archive, Michigan State University. https://africanactivist.msu.edu/document_metadata.php?objectid=32-130-2D2
- Reagan Library. (n.d.). *Anti-Apartheid Act of 1986, The Comprehensive (H.R. 4868): Veto and override*. https://www.reaganlibrary.gov/archives/topic-guide/anti-apartheid-act-1986-comprehensive-hr-4868-vetooverride
- South African History Online. (n.d.-d). *Appeal for action against apartheid: Statement issued jointly by Chief Albert Luthuli and Reverend Martin Luther King, Jr., 10 December 1962*. https://sahistory.org.za/archive/appeal-action-against-apartheid-statement-issued-jointly-chief-albert-luthuli-and-reverend
- United States House of Representatives, History, Art & Archives. (n.d.). *The Comprehensive Anti-Apartheid Act*. https://history.house.gov/Historical-Highlights/1951-2000/The-Comprehensive-Apartheid-Act/`,
      recallContent: [
        {
          prompt: "Who was Maurice Evans, what did he do in 1914, and what did he publish?",
          answer: "A British immigrant to South Africa in 1875 and a figure in the founding of the Union in 1910. He traveled the American South in 1914 and published Black and White in the Southern States in 1915, subtitled a study from a South African point of view.",
        },
        {
          prompt: "What did Evans conclude about the American South, and why does it matter?",
          answer: "That the South, unable to achieve physical separation of the races, had put up legal and cultural barriers instead, which he judged an inadequate model and a cautionary example. A South African segregationist came home unimpressed, which is hard to square with copying.",
        },
        {
          prompt: "Which way does the best documented single line of influence between the two countries run?",
          answer: "From South Africa to the American South. Clarence Poe, who launched a campaign in 1913 to segregate the North Carolina countryside, had been introduced to the idea by Maurice Evans.",
        },
        {
          prompt: "Who was C.T. Loram and what did he carry in which direction?",
          answer: "A South African who took his doctorate at Columbia in 1917 and published The Education of the South African Native. He carried the Hampton and Tuskegee model of Black American education into South African and colonial African education policy, and served on the Phelps-Stokes commissions.",
        },
        {
          prompt: "What did this course look for in section 4 and refuse to print?",
          answer: "Claims that apartheid-era officials publicly invoked the American example to defend their policy. The best evidence found was a magazine cartoon reproduced in a journalistic article, which is below this course's sourcing floor, so the claim was left out.",
        },
      ],
    },
    {
      slug: "ex-quiz-south-africa",
      title: "17 · Quiz: parallel, parent, and mutual sight",
      section: "Section 4 · South Africa: parallel, parent, and mutual sight",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Why can Whitman's book not be used as evidence about South Africa?",
            options: [
              "Because Whitman was writing before the South African archives were opened to researchers",
              "Because his book is a study of Germany",
              "Because South Africa was not a country when he wrote",
              "Because Whitman says in his introduction that comparative legal history is impossible",
            ],
            correctIndex: 1,
            explanation: "Rule 4 of the sourcing standard. Section 4 cites sources about South Africa and says so at the top.",
            sourceLessonSlug: "ex-different-evidence",
          },
          {
            prompt: "What kind of studies are Fredrickson (1981) and Cell (1982)?",
            options: [
              "Transmission studies tracing statutes as they moved between the two countries",
              "Legal casebooks compiled for the use of practicing attorneys in both jurisdictions",
              "Comparisons, sitting on the parallel-development rungs of the ladder",
              "Memoirs written by participants in the events they describe",
            ],
            correctIndex: 2,
            explanation: "Neither book is a transmission study. Both compare, and both find parallels alongside real differences of origin, legal form and justification.",
            sourceLessonSlug: "ex-different-evidence",
          },
          {
            prompt: "Cell argued that segregation was first advocated by which group?",
            options: [
              "Moderates and liberals, rather than the fanatics later identified with it",
              "Mining companies acting through their representatives in the Union parliament",
              "The Nazi Party's Office of Race Policy in the 1930s",
              "American advisers sent to South Africa after the First World War",
            ],
            correctIndex: 0,
            explanation: "Cell (1982) treats segregation as a distinctively modern system tied to urbanisation and industrialisation, which crystallised in South Africa only after 1900.",
            sourceLessonSlug: "ex-different-evidence",
          },
          {
            prompt: "Krieger judged South Africa marginal beside the United States and Germany. What does that judgement establish?",
            options: [
              "That South Africa's race law was in fact less severe than American race law in the same period",
              "That South Africa had not yet passed any segregation statutes by the 1930s",
              "That South African officials had rejected the American model",
              "What one Nazi comparativist thought, and nothing more",
            ],
            correctIndex: 3,
            explanation: "Treating a third party's ranking as a finding about the country ranked is an easy mistake to make and a hard one to see.",
            sourceLessonSlug: "ex-different-evidence",
          },
          {
            prompt: "Which three statutes built South Africa's segregation frame before apartheid?",
            options: [
              "The Group Areas Act, the Population Registration Act and the Bantu Education Act",
              "The Land Act 1913, the Urban Areas Act 1923 and the Native Administration Act 1927",
              "The Prohibition of Mixed Marriages Act, the Immorality Amendment Act and the Separate Amenities Act",
              "The Glen Grey Act, the Suppression of Communism Act and the Pass Laws Act",
            ],
            correctIndex: 1,
            explanation: "All three predate the National Party's 1948 victory. A frame already thirty-five years old was not imported in 1949.",
            sourceLessonSlug: "ex-colonial-parent",
          },
          {
            prompt: "What principle did the Stallard Commission of 1922 lay down?",
            options: [
              "That racial classification should be recorded on every birth, marriage and death certificate in the Union",
              "That schools for African children should follow the American industrial-education model",
              "That Africans should be in the urban areas only to work, and should leave when the work was done",
              "That mixed marriages should be void and criminally punishable throughout South Africa",
            ],
            correctIndex: 2,
            explanation: "It is a principle about labor and residence, and it is the ancestor of influx control and the pass laws, not of the American color line in public accommodation.",
            sourceLessonSlug: "ex-colonial-parent",
          },
          {
            prompt: "Why is the Native Administration Act of 1927 evidence about the parent system?",
            options: [
              "It made the Governor-General supreme chief of all Africans, governing by proclamation",
              "It copied the wording of the American Indian Citizenship Act passed in the same decade",
              "It was drafted by lawyers who had studied in the United States",
              "It was the first South African statute to use the word apartheid in its title",
            ],
            correctIndex: 0,
            explanation: "That is British indirect rule. The United States had no Governor-General, so the instrument cannot have an American source.",
            sourceLessonSlug: "ex-colonial-parent",
          },
          {
            prompt: "Which test does lesson 14 apply to the claim that apartheid copied Jim Crow?",
            options: [
              "Whether the two systems used identical vocabulary in their statutes and regulations",
              "Whether South African lawyers were able to read English-language American law reports",
              "Whether any American official ever visited South Africa before 1948",
              "Whether the proposed cause precedes the effect in the chronology",
            ],
            correctIndex: 3,
            explanation: "The same chronology test the German section applies and that the Indiana Avenue course applies to Unigov. Put the dates in a column and look.",
            sourceLessonSlug: "ex-colonial-parent",
          },
          {
            prompt: "Maurice Evans travelled through the American South in 1914. What was the subtitle of the book he published in 1915?",
            options: [
              "A study of the race problem in the United States from a South African point of view",
              "An American guide to the government of native populations in the colonies of southern Africa",
              "The origins of segregation in South Africa and the American South",
              "A comparative study in American and South African history",
            ],
            correctIndex: 0,
            explanation: "The observer is South African and the object of study is the United States. The other two subtitles belong to Cell (1982) and Fredrickson (1981).",
            sourceLessonSlug: "ex-mutual-sight",
          },
          {
            prompt: "What did Evans conclude about the American South's approach to race?",
            options: [
              "That it was the most advanced racial legislation in the world and should be adopted at once",
              "That it was an inadequate model, since legal barriers had replaced physical separation",
              "That it was too lenient and needed a criminal marriage ban of the South African kind",
              "That it could not be assessed, because the United States kept no reliable statistics",
            ],
            correctIndex: 1,
            explanation: "A South African segregationist studied the American South and came home unimpressed. That is hard to square with copying.",
            sourceLessonSlug: "ex-mutual-sight",
          },
          {
            prompt: "In the best documented single line of influence between the two countries in this period, which way does it run?",
            options: [
              "From the American South to South Africa, through the Progressive Farmer",
              "In neither direction, since no contact between the two countries has been documented at all",
              "From South Africa to the American South, from Evans to Clarence Poe",
              "From Germany to both countries, through the National Socialist Office of Race Policy",
            ],
            correctIndex: 2,
            explanation: "Herbin-Triant (2013) traces Poe's 1913 campaign to segregate the North Carolina countryside to an idea he got from Evans. If your model has one arrow, it is wrong.",
            sourceLessonSlug: "ex-mutual-sight",
          },
          {
            prompt: "What did C.T. Loram carry, and in which direction?",
            options: [
              "A South African population-register technique, from South Africa into American state law",
              "A Nazi race-classification scheme, from Germany into South African statute",
              "A British indirect-rule statute, from London into the Union parliament",
              "The Hampton and Tuskegee education model, from the United States into South Africa",
            ],
            correctIndex: 3,
            explanation: "Loram took his doctorate at Columbia in 1917 and served on the Phelps-Stokes commissions. The nearest thing to an American export here is a curriculum model, not a statute.",
            sourceLessonSlug: "ex-mutual-sight",
          },
          {
            prompt: "Who issued the Appeal for Action Against Apartheid on 10 December 1962, and what did it ask for?",
            options: [
              "Albert Luthuli and Martin Luther King Jr., asking for demonstrations, sanctions and a boycott",
              "The United Nations General Assembly, asking member states to expel South Africa from the organization",
              "The American Committee on Africa alone, asking Congress to impose a trade embargo at once",
              "Nelson Mandela and John F. Kennedy, asking for an arms embargo on the South African government",
            ],
            correctIndex: 0,
            explanation: "Issued through the American Committee on Africa. Its case was built on the Universal Declaration of Human Rights rather than on an assertion that the two national struggles were the same.",
            sourceLessonSlug: "ex-cross-citation",
          },
          {
            prompt: "Why does this course give the dates and public law number of the 1986 Anti-Apartheid Act but not the override vote tallies?",
            options: [
              "Because the tallies were never recorded anywhere in the congressional documentation of the period",
              "Because roll-call votes on veto overrides are constitutionally secret in the United States",
              "Because published sources consulted disagreed on the tallies",
              "Because the tallies are irrelevant to whether the statute took effect as law",
            ],
            correctIndex: 2,
            explanation: "Reporting a disagreement between sources is a finding. Splitting the difference is a fabrication. The Congressional Record is where you would settle it.",
            sourceLessonSlug: "ex-cross-citation",
          },
          {
            prompt: "Mandela named Du Bois, Garvey and King before Congress in 1990. How does that evidence differ in kind from the 1934 transcript?",
            options: [
              "It is a private letter, whereas the transcript was published by the German government at the time",
              "It is public and deliberate, whereas the transcript is a closed record never meant for outsiders",
              "It is a secondary source, whereas the transcript is a primary source",
              "It concerns economics, whereas the transcript concerns law",
            ],
            correctIndex: 1,
            explanation: "A movement borrowing courage advertises its sources. A regime borrowing a technique of exclusion does not. Both are real evidence of transnational influence, and they are opposite in kind.",
            sourceLessonSlug: "ex-cross-citation",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 5 · The limits of the analogy
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "ex-limits",
      title: "18 · Where the analogy breaks, taught on purpose",
      section: "Section 5 · The limits of the analogy",
      body: `**This course teaches the transmission of legal technique. It does not equate outcomes.** That sentence is in the course rather than left for you to infer, because a course on this subject that leaves it to inference has failed at its main job.

**Limit 1. Outcome, and it is not close.** The United States Holocaust Memorial Museum states: "In total, six million Jewish men, women, and children were murdered by the Nazi German regime and its allies and collaborators" (United States Holocaust Memorial Museum, n.d.-b). **There is no American equivalent, and nothing in sections 3 or 4 suggests otherwise.** A shared drafting technique in 1935 is not a shared outcome in 1942, and treating the first as evidence of the second is the error the whole course is built to prevent.

**And the mirror error, stated in the same breath, because it belongs there.** The Equal Justice Initiative documented 4,075 racial terror lynchings of African Americans in twelve southern states between 1877 and 1950 (Equal Justice Initiative, 2017). **That is not softened by anything in this course either.** **Neither of these two paragraphs is a response to the other. They are both simply true, and the impulse to weigh them against each other is the impulse to stop reading.**

**Limit 2. Intent at the moment of the borrowing.** Whitman writes: "It is simply not the case that the drafters of the Nuremberg laws were already aiming at the annihilation of the Jews in 1935. The concern of early Nazi policy was to drive the Jewish population into exile, or at the very least to marginalize it within the borders of the Reich" (Whitman, 2017, p. 13). **Read what that does and does not do.** It dates the intent of the 1935 drafters. **It does not make the 1935 laws innocent**, and it does not mean that what came later was unconnected to them. **It means 1935 and 1942 are different objects and have to be dated separately**, which is the same chronology discipline lesson 14 applied to apartheid and the Indiana Avenue course applied to Unigov.

**Limit 3. Structure.** American racism in this period was **decentralised**: state legislatures, state courts, thirty different anti-miscegenation regimes with different thresholds and different penalties, inside a single country that also contained a constitutional tradition working against them. Whitman is explicit: "the racist strains in American law coexisted and competed with some glorious humane and egalitarian strains" (Whitman, 2017, p. 15), and Nazi lawyers spent a good deal of energy "deploring, and puzzling over, the strength of the liberal countercurrent in a country with so much openly and unapologetically sanctioned racism" (Whitman, 2017, p. 15). **A one-party dictatorship and a federal constitutional republic with a large racist minority are not the same kind of machine**, even when parts of them look alike.

**Limit 4. Target.** American race law was aimed at Black Americans, at Chinese and Japanese immigrants, at Filipinos, at Native Americans. **The Nuremberg Laws were aimed at Jews, whom American law classified as white.** Freisler said so in the room, and Rethmeier built an entire objection on it (lesson 11). **The mismatch is not a technicality. It is the reason no statute could simply be lifted.**

**Limit 5. The lynching and terror comparison, which is a comparison and not a transmission.** Whitman opens his book by noting that in the 1930s Nazi Germany and the American South had, in the words of two southern historians, "the look of a 'mirror image'," two unapologetically racist regimes in which people were "hounded, beaten, and sometimes murdered" (Whitman, 2017, p. 3). **That is a resemblance claim, and it belongs on rung 5 of the ladder.** Historians argue about how far the comparison goes and what it explains. **What nobody has produced is a document in which one regime's terror practice was studied and adopted by the other**, and this course does not pretend otherwise. **The legal record is about statutes. It is not about lynching, and stretching it to cover lynching is exactly the overreach section 1 warned you about.**

**Limit 6. The comparison cannot be used to rank suffering, and the attempt is itself a harm.** There is no arithmetic that makes one of these histories acceptable by reference to the other. **A comparison that ends in a ranking has stopped being history and become an argument about whose ancestors matter, which is not a question the sources can answer and not a question worth asking.**

**What survives all six limits, which is the actual finding.** **Legal techniques are portable.** A two-tier citizenship, a quota formula keyed to a census, a criminal marriage ban with an anti-evasion clause, and a classification rule with a threshold: these are modular pieces of drafting, and they can be studied, written up, argued over and adapted by a government whose ideology and whose targets are entirely different. **That is a smaller claim than the one people arrive with, and it is the one the evidence supports.**

## Sources
- Equal Justice Initiative. (2017). *Lynching in America: Confronting the legacy of racial terror* (3rd ed.). https://eji.org/reports/lynching-in-america/
- United States Holocaust Memorial Museum. (n.d.-b). *Documenting numbers of victims of the Holocaust and Nazi persecution*. Holocaust Encyclopedia. https://encyclopedia.ushmm.org/content/en/article/documenting-numbers-of-victims-of-the-holocaust-and-nazi-persecution
- Whitman, J. Q. (2017). *Hitler's American model: The United States and the making of Nazi race law*. Princeton University Press.`,
      recallContent: [
        {
          prompt: "Why is the cross-citation between freedom movements better documented than the legal-technique traffic?",
          answer: "Because movements cite their forebears on purpose and in public, since citing them is part of the work. A regime borrowing a technique of exclusion has no reason to advertise it.",
        },
        {
          prompt: "What did the 1962 Luthuli and King appeal ask people to do?",
          answer: "Hold meetings and demonstrations on Human Rights Day, press their governments to support economic sanctions, and refuse to buy South African products, trade with South Africa or invest there.",
        },
        {
          prompt: "Which American figures did Mandela name before Congress in 1990?",
          answer: "George Washington, Abraham Lincoln and Thomas Jefferson as figures met through literature, and John Brown, Sojourner Truth, Frederick Douglass, W.E.B. Du Bois, Marcus Garvey and Martin Luther King Jr. as people he had heard of and admired.",
        },
        {
          prompt: "Why does this course stop at the edge of the Pan-Africanism and Afrocentricity courses?",
          answer: "Because Du Bois, Garvey and King are the spine of those courses and summarizing them here would do them badly. This course carries the legal-technique thread only.",
        },
      ],
    },
    {
      slug: "ex-two-misuses",
      title: "19 · The two misuses, named and disarmed",
      section: "Section 5 · The limits of the analogy",
      body: `**Both misuses are built out of true statements.** That is what makes them effective and what makes a general warning useless. **You disarm them by knowing which true statement got dropped.**

**Misuse 1: "America equals Nazi Germany."**

*How it is assembled, step by step.*
1. Quote Freisler saying American jurisprudence "would suit us perfectly." **Stop before the words "with a single exception."**
2. Report that Nazi lawyers studied American law. **Omit "too harsh" and the rejection of the one-drop rule.**
3. Upgrade Whitman's "possible, indeed likely" to *proved*.
4. Slide from the 1935 statutes to the Holocaust without dating anything in between.
5. Conclude that America was the author of Nazi race law.

*What is wrong with it.* **Every individual step except the last is a real quotation or a real fact.** The conclusion is still false, and Whitman rejects it in his own text: "None of this is to suggest that America was a Nazi country in the 1930s" (Whitman, 2017, p. 15), and "[w]e can, and should, reject the sort of simple-minded anti-Americanism that blames the United States for all the evils of the world, or reduces America to nothing but its history of racism" (Whitman, 2017, pp. 15 to 16).

*How to disarm it in one move.* **Ask for the second half of the Freisler sentence.** Anyone who has actually read the source can supply it. **Anyone who cannot has been working from a headline.**

**Misuse 2: comparison as minimisation.**

*How it is assembled, step by step.*
1. Report, correctly, that the Nazis found the American one-drop rule too harsh.
2. Infer that American race law was therefore comparatively moderate.
3. Add that the Nuremberg drafters were not yet aiming at annihilation in 1935.
4. Add that South Africa developed in parallel rather than by copying, and let "parallel" quietly mean "unconnected."
5. Conclude that American segregation has been overrated by comparison with real tyranny.

*What is wrong with it.* Step 2 inverts the evidence. **Whitman's actual sentence is that scholars who see parallels between American and Nazi classification schemes are wrong "only because they understate the relative severity of American law"** (Whitman, 2017). **The Nazis found the American rule too harsh. That is a fact about the American rule.** Step 3 misuses a claim about the 1935 drafters as if it were a claim about the whole regime. Step 4 confuses "not derived from" with "not comparable to," when lesson 14's finding was a shared colonial parent, which is a relationship and not an absence of one.

*How to disarm it in one move.* **Ask what the comparison is for.** A comparison that produces a ranking has left history. **"Which was worse" is not a research question.**

**A third misuse, quieter and more common than either.** **Reaching for this material to score a point about the present without doing any of the legal work.** Sections 3 and 4 are about named instruments, named bodies, named dates and named documents. **An argument that gestures at "America taught the Nazis" to characterise some current dispute has borrowed the emotional weight of the history and none of its method.** The Indiana Avenue course put the same rule on writing about a city block: **name the instrument every time you name a harm.** It applies here without modification.

**A self-test for anything you write on this subject.** Three questions, and you should be able to answer all three about your own draft.

| Question | If the answer is no |
|---|---|
| **Have I said which rung of the ladder my claim is on?** | The reader cannot tell whether you found a transcript or a resemblance |
| **Have I included the fact that most cuts against my conclusion?** | You are advocating, not reporting |
| **Would the scholar I disagree with recognize my summary of their position?** | You have built a straw version and beaten it |

**And one last framing, which is the reason the course was built this way.** Whitman writes that we may feel a need "to identify a true nefandum, an abyss of unexampled modern horror against which we can define ourselves" (Whitman, 2017, p. 14). **Both misuses serve that need in opposite ways.** One makes America part of the abyss so the writer can stand outside it. The other keeps the abyss safely foreign so the writer can stand outside it. **Standing outside it is the thing both are for, and the discipline of naming instruments and dates is what stops you.**

## Sources
- Whitman, J. Q. (2017). *Hitler's American model: The United States and the making of Nazi race law*. Princeton University Press.`,
      recallContent: [
        {
          prompt: "State this course's boundary sentence about outcomes.",
          answer: "The course teaches the transmission of legal technique. It does not equate outcomes. A shared drafting technique in 1935 is not a shared outcome in 1942.",
        },
        {
          prompt: "What does Whitman's claim about the intent of the 1935 drafters do, and what does it not do?",
          answer: "It dates the intent of the drafters, who aimed at exile or marginalisation rather than annihilation. It does not make the 1935 laws innocent, and it does not disconnect them from what came later. It means 1935 and 1942 must be dated separately.",
        },
        {
          prompt: "Give the structural difference between the American and Nazi race regimes.",
          answer: "American racism was decentralised across state legislatures and courts, inside a country whose constitutional tradition also worked against it, and Nazi lawyers deplored and puzzled over that liberal countercurrent. The Nazi state was a one-party dictatorship.",
        },
        {
          prompt: "How does this course classify the comparison between American racial terror and Nazi violence?",
          answer: "As a resemblance claim on rung 5, which historians argue about. Nobody has produced a document in which one regime's terror practice was studied and adopted by the other, so it is a comparison and not a transmission.",
        },
        {
          prompt: "What survives all six limits?",
          answer: "That legal techniques are portable. A two-tier citizenship, a quota formula keyed to a census, a criminal marriage ban with an anti-evasion clause, and a classification threshold are modular pieces of drafting that a government with different targets can study and adapt.",
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 6 · Why it matters now
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "ex-why-it-matters",
      title: "20 · Why it matters now: read it as history of law",
      section: "Section 6 · Why it matters now",
      body: `**The finding is not that some country was secretly the villain. The finding is about how law travels**, and that is a durable, usable thing to know.

**1. Comparative research before legislation is normal, and normality is the point.** Whitman quotes Konrad Zweigert and Hein Kötz, the leading postwar German comparative lawyers, on how legislation actually gets made: "Legislators all over the world have found that on many matters good laws cannot be produced without the assistance of comparative law," and "[e]ver since the second half of the nineteenth century legislation in Germany has been preceded by extensive comparative legal research." Whitman's addition is the sting: this description "is just as pertinent to the making of bad laws as it is to the making of good ones" (Whitman, 2017). **A ministry commissioning a survey of foreign statutes is not a conspiracy. It is Tuesday.** Which is precisely why the survey is worth reading.

**2. Legal techniques are modular in a way that ideologies are not.** You cannot transplant a worldview. **You can absolutely transplant a drafting device.** Look back at what actually crossed: a threshold rule for classifying people by descent, a two-tier citizenship, a criminal marriage prohibition with an anti-evasion clause, a quota formula keyed to a census year. **Each of those is a component**, and a component can be picked up by a regime with a different history, a different target population, and a different justification. **That is the transferable lesson, and it is why "our law is nothing like theirs" is a weak defense when the question was about a component.**

**3. The most uncomfortable finding in the book is not about racism at all.** Whitman argues that what appealed to Nazi lawyers included the **American legal style**: the open-endedness and flexibility of common-law method, judge-made law, and the legal realism that was fashionable in New Deal America as well as in Nazi Germany. Freisler praised American jurisprudence as one that "would suit us perfectly," and Whitman writes that what attracted Nazi lawyers "was not just American racism but American legal culture" (Whitman, 2017). **Flexibility is a feature until you ask flexible in whose hands.** That is a question worth carrying to any argument about legal innovation.

**4. The reception of the argument is part of the argument.** Michael Stolleis, reviewing the book from Germany, noticed that its warm American reception seemed to carry an implication: that American society should reflect critically on its own past and present rather than only pointing at Nazi Germany (Stolleis, 2018). He also closes his review by observing that a sharper light on the American share of discrimination by color, religion, sex and language makes visible that the whole business was not banished on 8 May 1945 (Stolleis, 2018). **Notice that a German legal historian is the one making that point about America, and notice that noticing it does not settle whether he is right.**

**5. What to do with all of this, concretely.** When you next meet the phrase "modeled on" in a news story about a law, treat it as a claim that needs the same handling this course has given its two claims.

| Ask | Because |
|---|---|
| **Which rung?** | Copied text, commissioned study, mere awareness, or resemblance are four different claims |
| **Where is the memo?** | Real legislative borrowing usually leaves a research trail, and the trail is often public |
| **Who was the document's audience?** | A closed briefing and a press release are different evidence |
| **What did they reject, and why?** | The rejections tell you more about the borrower than the adoptions do |
| **Does the chronology work?** | The proposed cause has to precede the effect |

**The last of those five is the one this course has used most.** It broke the easy story about apartheid in lesson 14, it dated the Nuremberg definition against the radicals' proposal in lesson 10, and it is the same test that broke a proposed argument in the Indiana Avenue course. **A table of dates is the cheapest research instrument there is, and it wins arguments that rhetoric cannot.**

**Why this belongs at the end of a series about American cities.** The city courses taught that racial outcomes on one block were made by named decisions under named instruments. **This course asked whether those instruments were exportable, and found that at least some of them were studied abroad as the leading example of the type.** That reframes the city courses without changing a word in them: **a country whose race law was cataloged by foreign ministries as the world's most developed example cannot treat its own segregation as a local embarrassment.** It was, in the technical sense that this course has been careful to define, a model.

## Sources
- Stolleis, M. (2018). Lehrmeister Amerika [America the schoolmaster]. *Rechtsgeschichte / Legal History*, *26*, 489 to 492. https://doi.org/10.12946/rg26/489-492
- Whitman, J. Q. (2017). *Hitler's American model: The United States and the making of Nazi race law*. Princeton University Press.`,
      recallContent: [
        {
          prompt: "How is misuse 1, the America-equals-Nazi-Germany reading, assembled?",
          answer: "Quote Freisler up to \"would suit us perfectly\" and stop before \"with a single exception\"; report the study but omit the rejection of the one-drop rule as too harsh; upgrade Whitman's hedge to proof; slide from 1935 to the Holocaust without dating anything.",
        },
        {
          prompt: "What is the one-move disarming of that misuse?",
          answer: "Ask for the second half of the Freisler sentence. Anyone who has read the source can supply it. Anyone who cannot has been working from a headline.",
        },
        {
          prompt: "Which step in misuse 2 inverts the evidence, and what is the actual sentence?",
          answer: "The step that infers American law was comparatively moderate. Whitman's actual claim is that scholars who see parallels are wrong only because they understate the relative severity of American law.",
        },
        {
          prompt: "What is the third and quieter misuse?",
          answer: "Reaching for the material to score a present-day point without doing any of the legal work, borrowing the emotional weight of the history and none of its method. Name the instrument every time you name a harm.",
        },
        {
          prompt: "Give the three questions of the self-test.",
          answer: "Have I said which rung of the ladder my claim is on? Have I included the fact that most cuts against my conclusion? Would the scholar I disagree with recognize my summary of their position?",
        },
      ],
    },
    {
      slug: "ex-what-this-left-out",
      title: "21 · What this course left out, and the sources nobody has read here",
      section: "Section 6 · Why it matters now",
      body: `**A course that does not tell you its own edges is asking to be over-trusted.** Here are the edges.

**Deliberately not covered, and where each one lives instead.**

- **Nazi eugenics and the American eugenics movement.** Whitman names Stefan Kühl's *The Nazi Connection: Eugenics, American Racism, and German National Socialism* (1994), which showed an active traffic between American and Nazi eugenicists into the late 1930s, and named American figures whose works were standard citations in Germany (Whitman, 2017, p. 8). **That is a separate literature with a separate evidence base and it deserves its own course, not a paragraph here.**
- **Lebensraum and the American conquest of the West.** Whitman reports that Nazi leaders repeatedly invoked American westward expansion when speaking of their own conquests, quotes Hitler doing so in a 1928 speech, notes Hans Frank calling the Jews of Ukraine "Indians" in 1942, and quotes Norman Rich's conclusion that American westward expansion "served as the model for Hitler's entire conception of Lebensraum" (Whitman, 2017, pp. 9 to 10). **Whitman also notes that there are historians who deny the significance of those quotations.** This course did not adjudicate that, because it is not a claim about legal technique.
- **Australia, Brazil, and British colonial law more broadly.** Whitman's conclusion gestures at all three as further places where inequality was created by statute along biological lines, and Kier's 1933 research brief covered Australia alongside the United States and South Africa (Stolleis, 2018). **Neither is followed up here.**
- **The transnational Black political movement.** ***Pan-Africanism*** is the course for that, and ***Afrocentricity*** is the course for the intellectual and cultural frame. **This course cross-links to them and deliberately does not summarize them.**
- **The American domestic story.** The city courses do that work, and this course assumed it.

**Things this course looked for and would not print.**
1. **Apartheid officials publicly invoking the American example.** Discussed in lesson 15. The best evidence located was a cartoon reproduced in a journalistic piece. **Below the floor, so left out.**
2. **The House and Senate override tallies for the Comprehensive Anti-Apartheid Act of 1986.** Published sources consulted disagreed. **The dates and the public law number are given instead.**
3. **Any characterisation of the Wiesen and Ledford reviews of Whitman.** They are named in lesson 11 as places to go. **They were not read in full here, so they are not summarized.**

**The unopened sources, which are the actual next work.** Every item on this list is real, and none of it was read for this course.

| Source | Why it matters |
|---|---|
| The full German transcript of the 5 June 1934 Commission meeting | Everything in section 3 rests on one scholar's reading of it |
| Heinrich Krieger, *Das Rassenrecht in den Vereinigten Staaten* (1936) | Whitman writes that the book "would deserve at least a partial translation today" |
| Herbert Kier, "Volk, Rasse und Staat," in Frank (Ed.), *Nationalsozialistisches Handbuch für Recht und Gesetzgebung* (1935), pp. 17 to 28 | The thirty-state table itself, rather than a description of it |
| Jens-Uwe Guettel (2012) and Andreas Rethmeier (1995) | The other side of the argument, read directly rather than through Whitman |
| Maurice Evans, *Black and White in the Southern States* (1915) | A South African segregationist's own account of the American South |
| C. T. Loram, *The Education of the South African Native* (1917) | The clearest American-to-South-African transfer in the section |
| United Nations records of South African delegations, 1950s | Where claim 1 in the "would not print" list above could be settled |
| The record of the September 1935 German lawyers' delegation to the United States | Whitman's reviewers note the gap; somebody should close it |

**What you can do now that you could not do before.**
- **Grade an influence claim by rung** instead of accepting or rejecting it whole.
- **Read a hedge as data.** "Possible, indeed likely" is a measurement of an author's own confidence, and it should change yours.
- **Ask who a document's audience was**, and treat a closed briefing and a press release as different evidence.
- **Break a causal story with a table of dates**, which worked on apartheid in lesson 14 and on the Nuremberg definition in lesson 10.
- **Spot both misuses from their missing pieces**, rather than from their tone.
- **Say "we do not know" in writing**, which is the single hardest sentence in this course and the one Whitman writes at the moment his own argument would most like him not to.

**The last thing, and the reason the course exists.** The instruments in section 2 were not hidden. They were published statutes in a democratic republic, printed in volumes anyone could order, and a foreign ministry ordered them, cataloged them, and argued about them in a room with a stenographer. **The most disturbing fact in this whole subject is not that anything was concealed. It is that nothing was.** Whatever else you take from this course, take that: **the record of how a country governs race is public, and someone is always reading it.**

## Sources
- Stolleis, M. (2018). Lehrmeister Amerika [America the schoolmaster]. *Rechtsgeschichte / Legal History*, *26*, 489 to 492. https://doi.org/10.12946/rg26/489-492
- Whitman, J. Q. (2017). *Hitler's American model: The United States and the making of Nazi race law*. Princeton University Press.`,
      recallContent: [
        {
          prompt: "Why does Whitman quote Zweigert and Kötz on comparative law, and what is his addition?",
          answer: "To show that comparative research before legislation is ordinary practice, and that German legislation had been preceded by extensive comparative research since the second half of the nineteenth century. His addition is that the description is just as pertinent to the making of bad laws as of good ones.",
        },
        {
          prompt: "Why are legal techniques portable in a way ideologies are not?",
          answer: "Because a threshold rule, a two-tier citizenship, a criminal marriage ban with an anti-evasion clause and a quota formula keyed to a census are components. A component can be picked up by a regime with a different history, target and justification.",
        },
        {
          prompt: "What did Whitman find attracted Nazi lawyers besides American racism?",
          answer: "American legal culture: the open-endedness and flexibility of common-law method, judge-made law, and the legal realism fashionable in New Deal America as well as in Nazi Germany. Flexibility is a feature until you ask flexible in whose hands.",
        },
        {
          prompt: "Give the five questions to ask of any claim that a law was modelled on a foreign one.",
          answer: "Which rung of the ladder? Where is the memo? Who was the document's audience? What did they reject and why? Does the chronology work?",
        },
        {
          prompt: "How does this course reframe the city courses without changing a word in them?",
          answer: "A country whose race law was cataloged by foreign ministries as the world's most developed example of the type cannot treat its own segregation as a local embarrassment. It was, in the technical sense the course defines, a model.",
        },
      ],
    },
    // <<< APPEND NEXT SECTION ABOVE THIS LINE >>>
  ],
};
