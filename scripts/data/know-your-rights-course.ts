// Authored "The Bill of Rights: Know Your Rights", a practical, strictly non-partisan
// companion to US Civics 101 and US Constitution 101 in the Civics curriculum on
// Learn.WitUS. Covers the 1st Amendment (speech, religion, press, assembly, petition)
// and the 4th Amendment (searches, seizures, warrants, probable cause) in everyday
// terms: at school, online, and in encounters with police. It explains what these
// rights protect and their limits; it takes no position on any case, law, or
// politician. Every content lesson is cited (APA 7 in-line + a `## Sources`
// bibliography) to primary/authoritative sources: the Bill of Rights text (National
// Archives), the Constitution Annotated (Congress.gov), the Library of Congress'
// U.S. Reports archive, supremecourt.gov, uscourts.gov, and Cornell's Legal
// Information Institute (law.cornell.edu). Ends with a quiz whose every question
// links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const KNOW_YOUR_RIGHTS_COURSE: AuthoredCourse = {
  title: "The Bill of Rights: Know Your Rights",
  description:
    "A clear, non-partisan, practical guide to the 1st Amendment (speech, religion, press, assembly, petition) and the 4th Amendment (searches, seizures, warrants) in everyday terms: at school, online, and in encounters with police. Cited to the Constitution itself, the Supreme Court, and federal court education resources. Built to help you know what these rights protect, and their limits, not to argue any case, law, or politician's side.",
  lessons: [
    {
      slug: "what-is-the-bill-of-rights",
      title: "1 · What is the Bill of Rights?",
      body: `The Bill of Rights is the name for the **first ten amendments** to the U.S. Constitution. They were ratified together on December 15, 1791, four years after the Constitution itself, because several states worried a strong new federal government could threaten individual liberty without explicit limits (National Archives, n.d.).

Among other things, the Bill of Rights protects:

- Freedom of speech, religion, press, assembly, and petition (**1st Amendment**), the focus of this course's first half.
- Freedom from unreasonable government searches and seizures (**4th Amendment**), the focus of the second half.
- Due process and other protections for people accused of crimes (5th through 8th Amendments).
- A reminder that powers not given to the federal government belong to the states and the people (9th and 10th Amendments).

One historical wrinkle matters here. Originally, the Bill of Rights restrained only the **federal** government, not states or cities. The Supreme Court said so directly in **Barron v. Baltimore, 32 U.S. 243 (1833)**. That changed gradually after the Civil War: the 14th Amendment (1868) guarantees due process, and starting with **Gitlow v. New York, 268 U.S. 652 (1925)**, the Supreme Court has held, case by case, that most Bill of Rights protections also apply to state and local governments. This process is called **incorporation**. It is why a public school, a city police department, or a state trooper, not just Congress, has to respect the rights covered in this course.

:::reveal What does "incorporation" mean, and which 1925 case first applied a Bill of Rights protection to state governments? ||| Incorporation is the process by which the Supreme Court has applied most Bill of Rights protections to state and local governments (not just the federal government) through the 14th Amendment's due process clause. Gitlow v. New York (1925) was the first case to do this, for free speech.

## Sources
- National Archives. (n.d.). *The Bill of Rights: A transcription*. https://www.archives.gov/founding-docs/bill-of-rights-transcript
- Barron v. Baltimore, 32 U.S. 243 (1833). Library of Congress. https://www.loc.gov/item/usrep032243/
- Gitlow v. New York, 268 U.S. 652 (1925). Constitution Annotated, Congress.gov. https://constitution.congress.gov/browse/essay/amdt14-S1-4-2/ALDE_00013745/`,
    },
    {
      slug: "first-amendment-speech",
      title: "2 · Freedom of speech: what's protected, and what isn't",
      recallContent: [
        {
          prompt: "What is \"incorporation,\" in one sentence?",
          answer:
            "The process by which the Supreme Court has applied most Bill of Rights protections to state and local governments, not just the federal government, through the 14th Amendment.",
        },
        {
          prompt: "Which case first incorporated a Bill of Rights protection against the states, and which right did it involve?",
          answer: "Gitlow v. New York (1925), which applied free speech protection to the states.",
        },
      ],
      body: `The 1st Amendment says, in part, that "Congress shall make no law... abridging the freedom of speech" (U.S. Const. amend. I). Courts read "speech" broadly: it covers spoken and written words, art, and even some conduct meant to send a message, called **symbolic speech**, such as wearing an armband in protest or burning a flag as political expression (**Texas v. Johnson, 491 U.S. 397 (1989)**).

Free speech is broad, but it is not unlimited. The Supreme Court has said a short list of categories fall **outside** 1st Amendment protection:

- **True threats**: statements a reasonable person would take as a serious expression of intent to commit violence, as opposed to political hyperbole (**Watts v. United States, 394 U.S. 705 (1969)**).
- **Incitement**: speech directed at, and likely to produce, **imminent** lawless action, not just advocacy of an idea (**Brandenburg v. Ohio, 395 U.S. 444 (1969)**).
- **Fighting words**: face-to-face insults likely to provoke an immediate violent reaction (**Chaplinsky v. New Hampshire, 315 U.S. 568 (1942)**).
- **Obscenity**: material that, under a three-part test, appeals to prurient interest, is patently offensive under community standards, and lacks serious literary, artistic, political, or scientific value (**Miller v. California, 413 U.S. 15 (1973)**).
- **Defamation**: false statements of fact that damage a reputation.

Government can also apply reasonable, content-neutral **time, place, and manner** rules to speech, such as requiring a permit for a large march, without violating the 1st Amendment, as long as the rule does not target the message itself.

One more key point: the 1st Amendment restrains **government** action. A private business, employer, or website can generally set its own rules for speech on its own property or platform; that is a private policy choice, not a constitutional violation.

:::reveal Name two categories of speech the Supreme Court has said fall outside 1st Amendment protection. ||| Any two of: true threats, incitement to imminent lawless action, fighting words, obscenity, or defamation.

## Sources
- U.S. Const. amend. I. National Archives. https://www.archives.gov/founding-docs/bill-of-rights-transcript
- Texas v. Johnson, 491 U.S. 397 (1989). Constitution Annotated, Congress.gov. https://constitution.congress.gov/browse/essay/amdt1-7-16-3/ALDE_00000755/
- Watts v. United States, 394 U.S. 705 (1969). Library of Congress. https://www.loc.gov/item/usrep394705/
- Brandenburg v. Ohio, 395 U.S. 444 (1969). Library of Congress. https://www.loc.gov/item/usrep395444/
- Chaplinsky v. New Hampshire, 315 U.S. 568 (1942). Library of Congress. https://www.loc.gov/item/usrep315568/
- Miller v. California, 413 U.S. 15 (1973). Constitution Annotated, Congress.gov. https://constitution.congress.gov/browse/essay/amdt1-7-5-11/ALDE_00013812/`,
    },
    {
      slug: "first-amendment-religion",
      title: "3 · Freedom of religion: establishment and free exercise",
      recallContent: [
        {
          prompt: "What is \"symbolic speech,\" and what 1989 case protected it?",
          answer:
            "Conduct meant to send a message, like wearing an armband or burning a flag in protest. Texas v. Johnson (1989) held that flag burning as political protest is protected symbolic speech.",
        },
        {
          prompt: "Name two categories of speech that fall outside 1st Amendment protection.",
          answer: "Any two of: true threats, incitement to imminent lawless action, fighting words, obscenity, or defamation.",
        },
      ],
      body: `The 1st Amendment contains two religion clauses. It says Congress shall make no law "respecting an establishment of religion, or prohibiting the free exercise thereof" (U.S. Const. amend. I).

**The Establishment Clause** limits government's ability to endorse, fund, or favor a religion, or religion over non-religion. It was first applied to state and local governments in **Everson v. Board of Education, 330 U.S. 1 (1947)**. For decades, courts evaluated Establishment Clause claims with a multi-part test from *Lemon v. Kurtzman* (1971). In **Kennedy v. Bremerton School District, 597 U.S. 507 (2022)**, the Supreme Court moved away from that test, holding that Establishment Clause questions should instead be evaluated by reference to "historical practices and understandings" (Congress.gov, 2022).

**The Free Exercise Clause** protects a person's right to practice their religion, or no religion. It does not excuse everyone from every law: in **Employment Division v. Smith, 494 U.S. 872 (1990)**, the Court held that a neutral, generally applicable law does not violate free exercise merely because it happens to burden a religious practice.

Put together, the two clauses point in different directions. Government cannot establish or favor a religion, but it also cannot single out or suppress one. Both clauses apply to public schools and other state and local government actors, not just Congress, because of the incorporation doctrine covered in the first lesson.

:::reveal Name the 1st Amendment's two religion clauses, and what each one limits. ||| The Establishment Clause, which limits government endorsement or funding of religion, and the Free Exercise Clause, which protects a person's right to practice, or not practice, a religion.

## Sources
- U.S. Const. amend. I. National Archives. https://www.archives.gov/founding-docs/bill-of-rights-transcript
- Everson v. Board of Education, 330 U.S. 1 (1947). Library of Congress. https://www.loc.gov/item/usrep330001/
- Employment Division v. Smith, 494 U.S. 872 (1990). Constitution Annotated, Congress.gov. https://constitution.congress.gov/browse/essay/amdt1-4-3-4/ALDE_00013226/
- Kennedy v. Bremerton School District, 597 U.S. 507 (2022). Congress.gov, Library of Congress. https://www.congress.gov/crs-product/LSB10780`,
    },
    {
      slug: "first-amendment-press-assembly-petition",
      title: "4 · Freedom of the press, assembly, and petition",
      recallContent: [
        {
          prompt: "What does the Establishment Clause limit, and what does the Free Exercise Clause protect?",
          answer:
            "The Establishment Clause limits government endorsement or funding of religion; the Free Exercise Clause protects a person's right to practice, or not practice, a religion.",
        },
        {
          prompt: "What test did the Supreme Court move away from in Kennedy v. Bremerton (2022), and what does it look at instead?",
          answer: "The Lemon test. The Court now evaluates Establishment Clause questions by reference to historical practices and understandings.",
        },
      ],
      body: `The 1st Amendment also protects "the freedom... of the press... the right of the people peaceably to assemble, and to petition the Government for a redress of grievances" (U.S. Const. amend. I).

**Freedom of the press** mainly protects publishers from **prior restraint**, meaning government censorship before publication. In **Near v. Minnesota, 283 U.S. 697 (1931)**, the Court struck down a law that let officials shut down "malicious" or "scandalous" newspapers in advance. In **New York Times Co. v. United States, 403 U.S. 713 (1971)**, known as the Pentagon Papers case, the Court refused to block publication of classified defense material, holding that "any system of prior restraints... bears a heavy presumption against its constitutional validity." Freedom of the press does not mean the press is immune from every consequence after publication, such as defamation liability; it mainly bars government from stopping publication in advance.

**Freedom of assembly** protects the right to gather peaceably: protests, marches, rallies, vigils. Government can impose reasonable, content-neutral time, place, and manner rules, such as a parade permit or a noise ordinance, but it cannot ban assembly outright or single out a viewpoint. Assembly that turns violent, or that blocks emergency access, loses that protection; "peaceably" is in the text for a reason.

**Freedom to petition** protects the right to ask government for something, formally (a lawsuit, a written petition, testimony at a public meeting) or informally (a letter or call to a representative), without retaliation.

:::reveal What is a "prior restraint," and which 1971 case refused to block publication of classified material on that basis? ||| A prior restraint is government censorship of speech or press before it is published. New York Times Co. v. United States (the Pentagon Papers case, 1971) refused to block publication on that basis.

## Sources
- U.S. Const. amend. I. National Archives. https://www.archives.gov/founding-docs/bill-of-rights-transcript
- Near v. Minnesota, 283 U.S. 697 (1931). Library of Congress. https://www.loc.gov/item/usrep283697/
- New York Times Co. v. United States, 403 U.S. 713 (1971). Library of Congress. https://www.loc.gov/item/usrep403713/`,
    },
    {
      slug: "speech-religion-school-and-online",
      title: "5 · Speech and religion at school, and online",
      recallContent: [
        {
          prompt: "What is a \"prior restraint,\" and which case struck down a law allowing officials to shut down \"malicious\" newspapers in advance?",
          answer: "Government censorship of speech or press before it is published. Near v. Minnesota (1931) struck down such a law.",
        },
        {
          prompt: "What does \"peaceably\" mean for the freedom of assembly, and what kind of rules can government still apply to a protest?",
          answer:
            "Assembly that turns violent, or blocks emergency access, loses 1st Amendment protection. Government can apply reasonable, content-neutral time, place, and manner rules, like a permit requirement.",
        },
      ],
      body: `Public schools are government actors, so the 1st Amendment applies there too, but courts give schools more room to regulate speech than a city would have on a public street.

**On campus.** In **Tinker v. Des Moines, 393 U.S. 503 (1969)**, students wore black armbands to protest the Vietnam War. The Court sided with them, ruling that student speech is protected unless it would "materially and substantially disrupt" school operations (Administrative Office of the U.S. Courts, n.d.-a). The Court has since carved out narrower exceptions: schools can restrict lewd or vulgar speech at a school event (**Bethel School District v. Fraser, 478 U.S. 675 (1986)**), and can exercise editorial control over school-sponsored publications like a student newspaper (**Hazelwood School District v. Kuhlmeier, 484 U.S. 260 (1988)**).

**Off campus and online.** In **Mahanoy Area School District v. B.L., 594 U.S. 180 (2021)**, a student was suspended for a vulgar Snapchat post made off campus, on a weekend, about not making the varsity cheer squad. The Court ruled the discipline violated the 1st Amendment, holding that schools have a diminished, though not zero, interest in regulating off-campus speech.

**Religion at school.** Public schools cannot sponsor or lead prayer, but students keep their own free-exercise and free-speech rights, including personal, non-disruptive religious expression (see the previous lesson's discussion of Kennedy v. Bremerton).

**Online, generally.** Outside of school discipline, government cannot broadly ban people from using social media. In **Packingham v. North Carolina, 582 U.S. 98 (2017)**, the Court struck down a state law barring registered sex offenders from social media sites, calling such platforms among the most important places for the exchange of views today. As with speech generally, a private platform can still set and enforce its own rules; the 1st Amendment binds government, not private companies.

:::reveal What standard applies to on-campus student speech under Tinker, and how did the Court treat off-campus speech differently in Mahanoy? ||| Under Tinker, schools may restrict on-campus speech only if it would materially and substantially disrupt school operations. In Mahanoy, the Court held schools have a diminished interest in regulating off-campus speech, like a weekend social media post.

## Sources
- Tinker v. Des Moines Independent Community School District, 393 U.S. 503 (1969). Administrative Office of the U.S. Courts. https://www.uscourts.gov/about-federal-courts/educational-resources/educational-activities/first-amendment-activities/tinker-v-des-moines/facts-and-case-summary-tinker-v-des-moines
- Bethel School District v. Fraser, 478 U.S. 675 (1986). Library of Congress. https://www.loc.gov/item/usrep478675/
- Hazelwood School District v. Kuhlmeier, 484 U.S. 260 (1988). Library of Congress. https://tile.loc.gov/storage-services/service/ll/usrep/usrep484/usrep484260/usrep484260.pdf
- Mahanoy Area School District v. B.L., 594 U.S. 180 (2021). Supreme Court of the United States. https://www.supremecourt.gov/opinions/20pdf/20-255_g3bi.pdf
- Packingham v. North Carolina, 582 U.S. 98 (2017). U.S. Government Publishing Office. https://www.govinfo.gov/content/pkg/USREPORTS-582/pdf/USREPORTS-582-98.pdf`,
    },
    {
      slug: "fourth-amendment-basics",
      title: "6 · The 4th Amendment: searches, seizures, and warrants",
      recallContent: [
        {
          prompt: "What standard applies to on-campus student speech under Tinker v. Des Moines?",
          answer: "Schools may restrict on-campus speech only if it would materially and substantially disrupt school operations.",
        },
        {
          prompt: "What did Packingham v. North Carolina (2017) hold about government restricting access to social media?",
          answer:
            "The Court struck down a state law banning registered sex offenders from social media, calling such platforms among the most important places for the exchange of views today; the 1st Amendment binds government, not private platforms.",
        },
      ],
      body: `The 4th Amendment reads: "The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures, shall not be violated, and no Warrants shall issue, but upon probable cause, supported by Oath or affirmation, and particularly describing the place to be searched, and the persons or things to be seized" (U.S. Const. amend. IV).

Breaking that down:

- A **search** is government intrusion into a place or thing where you have privacy. A **seizure** is government taking control of a person (an arrest, a stop) or property.
- The general rule is that a search or seizure needs a **warrant**: a court order, issued by a neutral judge, based on **probable cause** (a reasonable basis, grounded in facts, to believe evidence of a crime will be found), and specific about the place and items involved.
- There are well-established **exceptions** to the warrant requirement, including consent (you agree to the search), plain view (evidence is visibly in the open), exigent circumstances (an emergency, like evidence about to be destroyed), and search incident to a lawful arrest (a limited search of the person and immediate area).
- Evidence obtained through an unconstitutional search or seizure can generally be kept out of a criminal trial under the **exclusionary rule**, first applied to the states in **Mapp v. Ohio, 367 U.S. 643 (1961)**.

Like the 1st Amendment, the 4th Amendment restrains **government** action (police, public school officials, other government agents), not searches by private individuals or businesses.

:::reveal What is the general rule for a government search under the 4th Amendment, and name one recognized exception to it. ||| The general rule is that a search needs a warrant, issued by a judge based on probable cause. Recognized exceptions include consent, plain view, exigent circumstances, and search incident to a lawful arrest.

## Sources
- U.S. Const. amend. IV. National Archives. https://www.archives.gov/founding-docs/bill-of-rights-transcript
- Mapp v. Ohio, 367 U.S. 643 (1961). Constitution Annotated, Congress.gov. https://constitution.congress.gov/browse/essay/amdt4-6-2/ALDE_00000806/
- Administrative Office of the U.S. Courts. (n.d.-b). *What does the 4th Amendment mean?* https://www.uscourts.gov/about-federal-courts/educational-resources/about-educational-outreach/activity-resources/what-does-fourth-amendment-mean`,
    },
    {
      slug: "police-stops-reasonable-suspicion-privacy",
      title: "7 · Police stops, reasonable suspicion, and your privacy",
      recallContent: [
        {
          prompt: "What is the general rule for a government search under the 4th Amendment?",
          answer: "A search generally needs a warrant, issued by a judge based on probable cause, specific about the place and items involved.",
        },
        {
          prompt: "What is the exclusionary rule, and which 1961 case applied it to the states?",
          answer:
            "A rule that generally keeps evidence obtained through an unconstitutional search or seizure out of a criminal trial. Mapp v. Ohio (1961) applied it to state governments.",
        },
      ],
      body: `Not every police encounter needs a warrant or even probable cause. In **Terry v. Ohio, 392 U.S. 1 (1968)**, the Supreme Court held that an officer can briefly stop and question someone based on **reasonable suspicion**, meaning specific, articulable facts suggesting the person is involved in criminal activity, a lower bar than probable cause. If the officer also reasonably suspects the person is armed and dangerous, the officer may conduct a limited pat-down of outer clothing for weapons, a "Terry stop and frisk" (Constitution Annotated, n.d.).

A separate question is what counts as a "search" at all. In **Katz v. United States, 389 U.S. 347 (1967)**, the Court held the 4th Amendment protects people, not just places, wherever a person has a **reasonable expectation of privacy**, a test with two parts: the person genuinely expected privacy, and society recognizes that expectation as reasonable. Information you knowingly expose to the public, like something said in a loud voice on a street, generally is not protected.

Practically, during a police encounter:

- You can ask whether you are free to leave. If you are not under arrest or being lawfully detained, you generally have the right to walk away.
- You have a 5th Amendment right not to answer questions beyond what your state requires (some states require giving your name during a lawful stop).
- You can decline to consent to a search of your person, car, or home. Officers may still search if they have a warrant, probable cause plus an exception, or reasonable suspicion supporting a Terry frisk, but declining consent preserves the issue for a court to review later.

These are general constitutional principles, not legal advice for a specific situation; state law and the facts of an encounter can change the analysis.

:::reveal What is "reasonable suspicion," and how is it different from probable cause? ||| Reasonable suspicion means specific, articulable facts suggesting a person is involved in criminal activity; it is a lower bar than probable cause and is enough to justify a brief investigative stop (and a pat-down for weapons if the person is also reasonably suspected of being armed).

## Sources
- Terry v. Ohio, 392 U.S. 1 (1968). Constitution Annotated, Congress.gov. https://constitution.congress.gov/browse/essay/amdt4-6-5-1/ALDE_00000797/
- Katz v. United States, 389 U.S. 347 (1967). Constitution Annotated, Congress.gov. https://constitution.congress.gov/browse/essay/amdt4-3-3/
- Administrative Office of the U.S. Courts. (n.d.-b). *What does the 4th Amendment mean?* https://www.uscourts.gov/about-federal-courts/educational-resources/about-educational-outreach/activity-resources/what-does-fourth-amendment-mean`,
    },
    {
      slug: "search-seizure-school-and-digital-life",
      title: "8 · Search and seizure at school and in your digital life",
      recallContent: [
        {
          prompt: "What two-part test does Katz v. United States use to decide whether the 4th Amendment applies?",
          answer:
            "Whether the person genuinely expected privacy, and whether society recognizes that expectation as reasonable. Information knowingly exposed to the public generally is not protected.",
        },
        {
          prompt: "Name one thing you can generally do during a police stop, short of resisting or fleeing.",
          answer:
            "Ask whether you are free to leave, decline to answer questions beyond what your state requires, or decline to consent to a search.",
        },
      ],
      body: `Two settings deserve special attention because the ordinary rule (a warrant based on probable cause) does not apply the same way: public schools, and digital devices.

**At school.** In **New Jersey v. T.L.O., 469 U.S. 325 (1985)**, the Supreme Court held that public school officials need only **reasonable suspicion**, not probable cause or a warrant, to search a student when there's reasonable ground to suspect the search will turn up evidence the student violated the law or a school rule. Schools have a legitimate interest in keeping order, so this is a lower bar than what police need off campus.

**Cell phones during an arrest.** In **Riley v. California, 573 U.S. 373 (2014)**, the Court unanimously held that police generally may **not** search the digital contents of a cell phone seized during an arrest without a warrant. The Court reasoned that modern phones hold such a vast amount of personal information that they differ, both in scale and in kind, from anything else a person might be carrying, so the ordinary "search incident to arrest" exception does not extend to a phone's contents; the Court summarized its answer as "get a warrant."

**Location data.** In **Carpenter v. United States, 585 U.S. 296 (2018)**, the Court held that government generally needs a warrant to obtain historical cell-site location records that reveal a person's movements over time, even though a phone company, a third party, holds that data. The Court reasoned that this kind of comprehensive location history is different enough from data people knowingly share to fall within the 4th Amendment's protection.

The pattern across both cases: digital information often carries far more personal detail than a physical object, so courts have been more protective of it, even where older 4th Amendment exceptions might otherwise seem to apply.

:::reveal What did Riley v. California (2014) hold about searching a cell phone seized during an arrest, and what reasoning did the Court give? ||| Police generally may not search a cell phone's digital contents without a warrant, even though the phone was seized during an arrest, because a modern phone holds far more personal information than the physical items the "search incident to arrest" exception was designed to cover.

## Sources
- New Jersey v. T.L.O., 469 U.S. 325 (1985). Administrative Office of the U.S. Courts. https://www.uscourts.gov/about-federal-courts/educational-resources/educational-activities/fourth-amendment-activities/new-jersey-v-tlo/facts-and-case-summary-new-jersey-v-tlo
- Riley v. California, 573 U.S. 373 (2014). Cornell Law School, Legal Information Institute. https://www.law.cornell.edu/supremecourt/text/13-132
- Carpenter v. United States, 585 U.S. 296 (2018). Supreme Court of the United States. https://www.supremecourt.gov/opinions/17pdf/16-402_h315.pdf`,
    },
    {
      slug: "practice-know-your-rights",
      title: "9 · Practice: apply the Bill of Rights, and where to verify",
      body: `Fill in each blank, then check. Spelling and capitalization are forgiving.

Before the drill, a note on where to go if you want to double-check a specific claim in this course, or research a situation of your own:

- **The text itself**: the National Archives' Bill of Rights transcript (archives.gov).
- **How courts have interpreted it**: the Constitution Annotated at Congress.gov, and full opinions at supremecourt.gov, the Library of Congress, and Cornell's Legal Information Institute (law.cornell.edu).
- **Plain-language case summaries**: the federal courts' own education resources at uscourts.gov.

This course explains general constitutional principles; it is not legal advice. If you are facing an actual legal question or a specific encounter, an attorney, a public defender's office, or a local legal aid organization can advise on your state's law and your particular facts.`,
      exercise: {
        instructions: "Fill in each blank, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt: "The 1st Amendment protects freedom of speech, religion, press, assembly, and the right to ___ the government.",
            answer: "petition",
            explanation: "The right to petition the government for a redress of grievances.",
          },
          {
            prompt: "Government censorship of speech or press BEFORE it is published is called a prior ___.",
            answer: "restraint",
            explanation: "Near v. Minnesota (1931) and the Pentagon Papers case (1971) both involved prior restraints.",
          },
          {
            prompt: "Under Tinker v. Des Moines, schools may restrict on-campus student speech only if it would ___ disrupt school operations.",
            answer: "substantially",
            accept: ["materially and substantially", "material and substantial"],
            explanation: "The \"substantial disruption\" test, from Tinker v. Des Moines (1969).",
          },
          {
            prompt: "The 4th Amendment protects against unreasonable searches and ___.",
            answer: "seizures",
            explanation: "The full phrase is \"unreasonable searches and seizures.\"",
          },
          {
            prompt: "A warrant must be based on ___ cause.",
            answer: "probable",
            explanation: "Probable cause: a reasonable, fact-based belief that evidence of a crime will be found.",
          },
          {
            prompt: "Terry v. Ohio allows a brief police stop based on the lower standard of reasonable ___.",
            answer: "suspicion",
            explanation: "Reasonable suspicion, specific and articulable facts, is a lower bar than probable cause.",
          },
          {
            prompt: "Under New Jersey v. T.L.O., a school official needs only reasonable suspicion, not a warrant or probable cause, to search a ___.",
            answer: "student",
            explanation: "Schools have a lower search standard than police because of their interest in keeping order.",
          },
          {
            prompt: "Under Riley v. California, police generally need a ___ to search the digital contents of a cell phone seized during an arrest.",
            answer: "warrant",
            explanation: "The Court's answer was simple: \"get a warrant.\"",
          },
        ],
      },
    },
    {
      slug: "know-your-rights-quiz",
      title: "10 · Check your understanding",
      quiz: {
        passingScore: 70,
        // Options shuffle per attempt so a fixed answer position cannot be gamed;
        // scoring is by identity, so no answer changes (src/lib/quiz.ts).
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is \"incorporation\"?",
            options: [
              "The process of amending the Constitution",
              "The process by which the Supreme Court applied most Bill of Rights protections to state and local governments",
              "The process of ratifying the Bill of Rights in 1791",
              "The process of impeaching a federal judge",
            ],
            correctIndex: 1,
            explanation:
              "Incorporation, beginning with Gitlow v. New York (1925), applied most Bill of Rights protections to state and local governments through the 14th Amendment.",
            sourceLessonSlug: "what-is-the-bill-of-rights",
          },
          {
            prompt: "Which of these is NOT one of the categories of speech the Supreme Court has excluded from 1st Amendment protection?",
            options: ["Obscenity", "True threats", "Unpopular political opinions", "Incitement to imminent lawless action"],
            correctIndex: 2,
            explanation:
              "Unpopular political opinions are protected speech. Obscenity, true threats, and incitement to imminent lawless action are recognized unprotected categories.",
            sourceLessonSlug: "first-amendment-speech",
          },
          {
            prompt: "The Establishment Clause and the Free Exercise Clause are both part of which amendment?",
            options: ["The 1st Amendment", "The 4th Amendment", "The 5th Amendment", "The 14th Amendment"],
            correctIndex: 0,
            explanation: "Both religion clauses are in the 1st Amendment.",
            sourceLessonSlug: "first-amendment-religion",
          },
          {
            prompt: "What is a \"prior restraint\"?",
            options: [
              "A criminal sentence served before trial",
              "Government censorship of speech or press before it is published",
              "A court order requiring bail",
              "A rule limiting how long a protest permit lasts",
            ],
            correctIndex: 1,
            explanation:
              "A prior restraint is government censorship before publication; courts view it with a heavy presumption against its validity.",
            sourceLessonSlug: "first-amendment-press-assembly-petition",
          },
          {
            prompt: "Under Mahanoy Area School District v. B.L. (2021), how did the Court treat a student's off-campus social media post compared to on-campus speech?",
            options: [
              "The same; schools have identical authority on and off campus",
              "Schools have a diminished, though not zero, interest in regulating off-campus speech",
              "Schools have no authority over any off-campus speech",
              "The Court did not address off-campus speech",
            ],
            correctIndex: 1,
            explanation: "The Court held schools' interest in regulating off-campus speech is diminished, though not eliminated.",
            sourceLessonSlug: "speech-religion-school-and-online",
          },
          {
            prompt: "What does a search or arrest warrant generally require?",
            options: [
              "A tip from an anonymous source",
              "Probable cause, reviewed by a judge, describing the place and items involved",
              "A majority vote of the city council",
              "Consent from the person being searched",
            ],
            correctIndex: 1,
            explanation: "A warrant requires probable cause, a neutral judge's approval, and specificity about the place and items.",
            sourceLessonSlug: "fourth-amendment-basics",
          },
          {
            prompt: "What standard did Terry v. Ohio (1968) establish for a brief investigative police stop?",
            options: ["Probable cause", "A search warrant", "Reasonable suspicion", "Clear and convincing evidence"],
            correctIndex: 2,
            explanation: "Terry v. Ohio held that reasonable suspicion, a lower bar than probable cause, justifies a brief stop.",
            sourceLessonSlug: "police-stops-reasonable-suspicion-privacy",
          },
          {
            prompt: "Under Riley v. California (2014), can police search the digital contents of a cell phone seized during an arrest without a warrant?",
            options: [
              "Yes, always, as part of a search incident to arrest",
              "No, generally not; police generally need a warrant",
              "Only with the arrestee's employer's permission",
              "Only if the phone is unlocked at the time of arrest",
            ],
            correctIndex: 1,
            explanation: "The Court held that police generally may not search a cell phone's contents without a warrant, even incident to an arrest.",
            sourceLessonSlug: "search-seizure-school-and-digital-life",
          },
        ],
      },
    },
  ],
};
