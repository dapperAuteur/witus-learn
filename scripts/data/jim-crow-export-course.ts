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

**The claim, stated as narrowly as the sources allow.** In the first half of the twentieth century the United States was, in the technical sense, a world leader in writing race into statute. It had race-based immigration quotas, a naturalisation bar keyed to colour, several kinds of second-class citizenship, and marriage bans enforced by criminal penalty in about thirty states. **Other governments building race law noticed, studied the American statutes, wrote them up, and argued about them in their own policy meetings.** That is the claim. It is about legal technique, and it is about study, argument and selective adaptation.

**Two ways this gets abused, and this course is built to block both.**

**Abuse one: "America equals Nazi Germany."** The claim above becomes, in careless hands, the assertion that the Nazis copied Jim Crow, or that the Holocaust was an American export. **The sources do not support that**, and the leading scholar of the German half spends a great deal of his book saying so. James Q. Whitman writes that "there was certainly never anything remotely like unmixed admiration for America among the Nazis," and that "[t]he Nazis were never interested in simply replicating the United States in Central Europe" (Whitman, 2017, p. 5). He is equally direct about the reverse inference: "None of this is to suggest that America was a Nazi country in the 1930s" (Whitman, 2017, p. 15). **A course that reports the study and drops the selection is not reporting the evidence. It is using it.**

**Abuse two: comparison as a way of minimising Jim Crow.** The mirror error is subtler and just as common. If the destination of every comparison is "but the Nazis were worse," then American segregation gets graded on a curve and quietly downgraded to a regional embarrassment. **This course refuses that too.** The Equal Justice Initiative documented 4,075 racial terror lynchings of African Americans in twelve southern states between 1877 and 1950 (Equal Justice Initiative, 2017). That is not a footnote to somebody else's history. It is the thing itself, and no comparison in this course is offered as a reason to look away from it.

**The two claims this course makes, and why they are kept apart.**

| | **A. Nazi Germany** | **B. Apartheid South Africa** |
|---|---|---|
| **What is claimed** | Nazi lawyers studied American race law in detail while drafting the Nuremberg Laws, and selectively drew on it | Parallel development from a shared colonial parent, with documented mutual observation running in both directions |
| **Strongest evidence** | A stenographic transcript of a closed policy meeting on 5 June 1934, plus the published Nazi legal literature | Comparative legal history, plus named individuals who travelled, observed and published in each direction |
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
- **Germany.** Rung 2, solidly, and Whitman argues for a piece of rung 1 as well. He is careful about that last step, and his hedge is worth memorising: **"It is even possible, indeed likely, that the Nuremberg Laws themselves reflect direct American influence"** (Whitman, 2017, p. 5). *Possible, indeed likely* is not *proved*. **A hedge in a scholarly sentence is data. Read hedges the way you read numbers.**
- **South Africa.** Rungs 3 and 4, with named people on rung 3 travelling in both directions. **Not rung 2, and not rung 1.**

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
          answer: "First, the claim that America equals Nazi Germany or that the Nazis simply copied Jim Crow. Second, using the comparison to minimise Jim Crow by grading it on a curve against something worse.",
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
- ***Pan-Africanism*** carries the organised political movement across borders: the congresses, the parties, the leaders, the arguments among them.
- ***Afrocentricity*** carries the intellectual and cultural frame.
- **This course is the legal-technique thread only.** It is about statutes, drafting meetings, commissioned research and citation. When you reach the anti-apartheid material in lesson 16 you will see the three threads touch, and the right move there is to go and read the other two courses rather than expect this one to summarise them.

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

**Start with the first federal statute on citizenship, because the phrase is short and it does the work.** The Naturalization Act of 1790 opened naturalisation to "any alien, being a free white person" who had resided in the United States for two years, was of good character, and swore to support the Constitution (Naturalization Act of 1790, 1 Stat. 103). **Four words in a founding statute made colour a condition of becoming an American.** That race bar was not fully removed from naturalisation law until the Immigration and Nationality Act of 1952, and even then the new law "only allotted new Asian quotas based on race, instead of nationality" (US Department of State, Office of the Historian, n.d.-b).

**Then exclusion by law, aimed at a named group.** The Chinese Exclusion Act of 1882 suspended the immigration of Chinese labourers and barred Chinese immigrants from naturalisation. **It is the first American statute to exclude an immigrant group by name**, and it created the legal category that the 1924 Act would later generalise.

**Then the quota system, which is the piece that mattered most abroad.** The Immigration Act of 1924, usually called the Johnson-Reed Act, allotted immigration visas to "two percent of the total number of people of each nationality in the United States as of the 1890 national census," a base year chosen deliberately: the Act "pushed back the year on which quota calculations were based from 1910 to 1890," which favoured northern and western Europe and cut southern and eastern European arrivals sharply (US Department of State, Office of the Historian, n.d.-a). It also barred "any alien who by virtue of race or nationality was ineligible for citizenship," which, given the 1790 race bar still on the books, ended Japanese immigration outright (US Department of State, Office of the Historian, n.d.-a).

**Read the two statutes together and you see the technique, which is the thing that travelled.** The 1790 Act made race a condition of citizenship. The 1924 Act made ineligibility for citizenship a condition of entry. **Neither statute has to say "we are excluding this race" in the exclusion clause, because the racial work was already done upstream.** That is a piece of legal engineering, and it is exactly the sort of thing a foreign ministry researching race law would write down.

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
          answer: "Pan-Africanism carries the organised political movement across borders. Afrocentricity carries the intellectual and cultural frame. This course carries the legal-technique thread only.",
        },
        {
          prompt: "What does rule 4, do not extend an argument past its subject, forbid in practice?",
          answer: "Using Whitman's book, which is about Germany, as evidence about South Africa. Section 4 is sourced independently and says so at the top.",
        },
      ],
    },
    {
      slug: "ex-marriage-and-segregation",
      title: "5 · What America built: marriage, and the colour line in public",
      section: "Section 2 · What America built",
      body: `The second half of the recap, and the half that turns out to matter most to section 3.

**Anti-miscegenation law, and the number to remember.** By the early 1930s, thirty American states declared racially mixed marriages civilly invalid, and many of those states also attached **criminal punishment** to entering one (Whitman, 2017, p. 12). Whitman calls America "a beacon of anti-miscegenation law, with thirty different state regimes, many of them outside the South" (Whitman, 2017, p. 12). **The last clause is the one people miss.** This was not a southern peculiarity. It was a national body of law with a southern concentration.

**Why criminalisation is the technically interesting part.** Whitman's point about the thirty states is not that the bans existed but that they were **criminal**. Many legal systems have voided marriages they disapproved of. **Very few have sent people to prison for contracting one.** In his account, the leading German lawyers of the early 1930s framed their own problem as whether marriage could ever be a subject of the criminal law at all, outside bigamy and deception, and American law offered the only Western example they could find of a system that criminalised mixed marriage (Whitman, 2017).

**Two numbers that look like a contradiction and are not.** Thirty states in the early 1930s. In 1967, the Supreme Court wrote that "Virginia is now one of 16 States which prohibit and punish marriages on the basis of racial classifications" (*Loving v. Virginia*, 1967). **Both are correct, because they are counts at different dates.** Between the 1930s and 1967, fourteen states repealed their bans; the remaining sixteen fell on 12 June 1967, when the Court held that "restricting the freedom to marry solely because of racial classifications violates the central meaning of the Equal Protection Clause" (*Loving v. Virginia*, 1967). **A number without its date is not a fact. Carry the date.**

**The Virginia statute at issue in *Loving* has a date worth noticing too.** It was the Racial Integrity Act of 1924, which the Court described as passed "during the period of extreme nativism which followed the end of the First World War" (*Loving v. Virginia*, 1967). **Same year as the Johnson-Reed Act.** That is a coincidence of date rather than a shared drafting process, and it is worth flagging precisely so you do not turn it into a claim. **A shared year is rung 5 on the ladder from lesson 2.**

**Segregation, and a warning about where it fits.** *Plessy v. Ferguson* in 1896 upheld a Louisiana statute requiring separate railway accommodation by race and gave the country the phrase "separate but equal." Statutory segregation then spread across schooling, transport, public accommodation, prisons, voter rolls and tax rolls. **Here is the warning.** Section 3 will show you that segregation is **not** where the German interest concentrated, and Whitman says so bluntly: "Segregation is not what counts most" (Whitman, 2017, p. 11), because "[t]he Nuremberg Laws said nothing about segregation" (Whitman, 2017, p. 11). **Most popular writing on this topic gets this exactly backwards**, asks whether the Nazis copied Jim Crow buses and schools, finds little, and either declares the whole question closed or fudges it.

**So what did the American colour line look like from outside?** One answer is on the record, and it is an uncomfortable one to read: an official Nazi handbook article of 1934 listed, with evident astonishment, American statutes assigning white and colored children to different schools, requiring race on birth, marriage and death certificates, and separating waiting rooms, railway cars, sleeping cars, street cars, buses, steamships "and even in prisons," with separate voter lists and separate tax assessment in Arkansas (Kier, as quoted in Stolleis, 2018; Whitman, 2017). **A German Nazi lawyer thought American segregation was excessive.** Lesson 9 is about what that reaction did and did not lead to.

**The recap in one line, so you can carry it into section 3.** By the early 1930s the United States had, on the public statute books, a race bar in naturalisation, race-based immigration quotas, several forms of second-class citizenship, criminal anti-miscegenation law in about thirty states, and statutory segregation across public life. **All of it was published. None of it was secret. That is the whole reason a foreign ministry could study it.**

## Sources
- *Loving v. Virginia*, 388 U.S. 1 (1967). https://www.law.cornell.edu/supremecourt/text/388/1
- Stolleis, M. (2018). Lehrmeister Amerika [America the schoolmaster]. *Rechtsgeschichte / Legal History*, *26*, 489 to 492. https://doi.org/10.12946/rg26/489-492
- Whitman, J. Q. (2017). *Hitler's American model: The United States and the making of Nazi race law*. Princeton University Press.`,
      recallContent: [
        {
          prompt: "What did the Naturalization Act of 1790 require, and what is the phrase to remember?",
          answer: "It opened naturalisation to \"any alien, being a free white person\" resident for two years, of good character, who swore to support the Constitution. Four words in a founding statute made colour a condition of becoming an American.",
        },
        {
          prompt: "How did the Immigration Act of 1924 build its quotas, and what did the ineligibility clause do?",
          answer: "Two percent of the number of people of each nationality present at the 1890 census, a base year pushed back from 1910 to favour northern and western Europe. It also barred any alien ineligible for citizenship by race or nationality, which ended Japanese immigration.",
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
              "Equating America with Nazi Germany, and minimising Jim Crow by comparison",
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
              "1890, because pushing the base year back from 1910 favoured northern Europe",
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
            explanation: "Whitman (2017, p. 11) argues that scholars looking for a Jim Crow influence on Nazi segregation are asking the wrong question, because segregation was not central to the Nazi programme.",
            sourceLessonSlug: "ex-marriage-and-segregation",
          },
        ],
      },
    },
    // <<< APPEND NEXT SECTION ABOVE THIS LINE >>>
  ],
};
