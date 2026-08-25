import type { AuthoredCourse } from "./authored-course";

// Shirley Graham Wrote the Opera First - She Did the Work, DIDWORK-S3.
//
// THE ORGANIZING DECISION, and why it is not a style choice. Almost every short account of this
// woman reaches for the 1951 marriage to W. E. B. Du Bois inside its first three sentences, and once
// that fact is in front, everything she made before it reads as prologue. That is the exact move the
// catalog exists to expose, so this course is built in strict CHRONOLOGICAL order of WHAT SHE MADE:
// the opera in section 1, the theatre in section 2, the books in section 3. The wedding does not
// arrive until lesson 15 of 25, more than halfway in. A learner meets the composer before the wife.
//
// WHAT WAS TESTED AND REFUSED. This subject's record is unusually corrupted by summary, so several
// widely repeated claims are NOT taught here, and the refusals are lesson content rather than
// footnotes:
//   * "First opera by a Black woman," full stop. The repository that owns the score hedges it
//     ("perhaps the first"), so the course teaches the narrowest version the sources carry and
//     lesson 3 plus lesson 18 show a learner why the bare superlative fails.
//   * The Great Lakes Exposition, routinely attached to the 1932 premiere. It opened in 1936.
//   * "The Governor of Ohio" in the audience. TIME confirms Newton D. Baker attended; Baker was
//     mayor of Cleveland and Secretary of War and was never governor. Ohio's governor was George
//     White. The error is taught AS an error.
//   * The 10,000 / 15,000 audience split. TIME, contemporaneously, puts about 15,000 at the
//     PREMIERE, which is incompatible with the modern split. Neither number is printed as settled.
//   * An NBC broadcast of Tom-Tom. No contemporary evidence exists; Track Thirteen (1940) really
//     was an NBC radio play, and the attribution most likely migrated backwards.
//   * "Renounced US citizenship in 1961." Neither Du Bois did that in 1961, and section 6 works the
//     actual sequence.
//   * Any invented quotation. Nothing in quotation marks in this course is unsourced.
//
// SOURCE BASE. Institutional records first (National Park Service, Schlesinger Library at Radcliffe,
// UMass Amherst, the Encyclopedia of Cleveland History), then the scholarly literature (Horne's
// Race Woman, Schmalenberger, Caplan, Perkins, Aptheker), then contemporaneous press. Where the
// record would not settle, the lesson says so in its own voice AND a check is filed in
// src/lib/research-checks.ts, because a hedge without a check is a hedge nobody will ever clear.
export const SHIRLEY_GRAHAM_COURSE: AuthoredCourse = {
  title: "Shirley Graham Wrote the Opera First",
  description:
    "A composer, playwright, biographer and organizer taught in the order she built things, which means the opera comes first and the 1951 marriage to W. E. B. Du Bois arrives in lesson 15 as one fact among several. Her opera was staged in a Cleveland stadium in 1932 while she was still an undergraduate. The Federal Theatre put her in charge of a unit. She wrote a shelf of biographies for young readers, won prizes for them, and worked in a genre whose liberties with fact are worth arguing about. She organized, was surveilled, lost her passport, moved to Ghana, helped start a television service, and took Ghanaian citizenship. The course is precise about what the record supports and blunt about what it does not: the unqualified claim that she wrote the first opera by a Black woman is downgraded to the narrowest version the sources carry, four widely repeated details about the 1932 premiere are named as wrong, and what could not be settled is filed as an open source check rather than smoothed over. Cited to archives, contemporaneous press and the scholarly literature, APA 7 throughout.",
  lessons: [
    // ── Section 1 ──────────────────────────────────────────────────────────────────────────────
    {
      slug: "sg-first-sentence",
      title: "1 · The first sentence, and why it is the wrong one",
      section: "Section 1 · The composer, before anybody asked whose wife she was",
      body: `Find any short account of Shirley Graham and watch where it starts. The University of Massachusetts Amherst, which owns the W. E. B. Du Bois papers because she sold them to the university in 1973, publishes a biography of her that names her trades in its first sentence and then, in its second, tells you she became Du Bois's second wife in 1951 (Jackson, n.d.). The National Park Service does better and still reaches the marriage inside a short page (National Park Service, n.d.). By the time a reader arrives at the opera, the frame is set: here is a woman attached to a famous man, and here are some things she also did.

**Run the arithmetic, because the arithmetic is the argument.** She was born on 11 November 1896 (Horne, 2000). Her opera was staged in a municipal stadium in the summer of 1932. She married Du Bois in 1951, at 54, after his first wife Nina Gomer Du Bois died in 1950. Between the opera and the wedding sit nineteen years. Between her first paid work in music and the wedding sit closer to twenty five. A biography that opens on 1951 opens three quarters of the way through a working life.

**The mechanism has a name, and the name has a scope.** The historian of science Margaret W. Rossiter called it the Matilda effect: the systematic under recognition of women, with their contributions denied and repeatedly attributed to male colleagues (Rossiter, 1993). Notice what her article is actually about. It is about **science**, and its cases are scientists. This course borrows the pattern for a composer, and says so out loud rather than smuggling it, because a term used past its evidence stops being checkable. What transfers is not the field but the structure: credit does not merely leave a woman, it arrives somewhere, and you can go and read the name it arrived at.

**So this course runs in the order she built things.** Opera first, then the theatre, then the books, then the organizing. The marriage arrives in lesson 15, inside the section covering the years it belongs to, as one fact among several from that month.

**The opposite error is also an error.** Deleting the marriage would be its own distortion. She spent decades as custodian of the Du Bois papers, negotiated their sale, held an honorary doctorate from UMass and taught there. That is real, difficult, unglamorous work, and a course that hid it to make a point would be committing the same offence in the other direction. The rule here is order and proportion, never omission.

**One practical reason to distrust the summaries.** The accounts that lead with the marriage also carry checkable errors about everything else. One widely reproduced entry seats the governor of Ohio in the audience at her opera. The man it names was never governor of Ohio. Lesson 3 takes that apart.

:::reveal How many years separate the staging of Graham's opera from her marriage to W. E. B. Du Bois, and why does the course keep saying so? ||| Nineteen: 1932 to 1951. A summary that opens on the marriage opens three quarters of the way through a working life, so the reader meets the wife before the composer.

:::reveal Rossiter's Matilda effect is a claim about which field, and what does this course do about that? ||| Science. The course applies the pattern to a composer by analogy and states the extension openly, because a term stretched past its evidence stops being checkable.

:::reveal Why does this course refuse to leave the marriage out altogether? ||| Because she really did spend decades as custodian of the Du Bois papers, sold them to UMass in 1973, and taught there. Hiding that would be the same distortion pointed the other way. The rule is order and proportion, not omission.

## Vocabulary
- **Matilda effect**: the systematic under recognition of women, with their work attributed to male colleagues, named by Rossiter in 1993 for the suffragist Matilda Joslyn Gage.
- **Relational definition**: introducing a person through their relationship to somebody else rather than through what they made.
- **Scope of a term**: the field and the evidence a concept was built on, which is what an author has to state when borrowing it for a different field.
- **Custodian**: the person responsible for an archive's survival, arrangement and eventual placement, a job with almost no public credit attached to it.

## Sources
Horne, G. (2000). *Race woman: The lives of Shirley Graham Du Bois*. New York University Press.

Jackson, E. (n.d.). *Shirley Graham Du Bois*. University of Massachusetts Amherst, Office of Equity and Inclusion. https://www.umass.edu/diversity/black-presence-project/shirley-graham-du-bois

National Park Service. (n.d.). *Shirley Graham Dubois (1896-1977)*. https://www.nps.gov/people/shirleygrahamdubois-1896-1977.htm

Rossiter, M. W. (1993). The Matthew Matilda effect in science. *Social Studies of Science, 23*(2), 325-341. https://doi.org/10.1177/030631293023002004`,
    },
    {
      slug: "sg-training",
      title: "2 · How a composer gets trained when nothing runs straight",
      section: "Section 1 · The composer, before anybody asked whose wife she was",
      body: `The conservatory story goes: prodigy, scholarship, degree, debut. Hers went nothing like that, and the shape of the detour is the useful part.

**The moving household.** Lola Shirley Graham was born in Indianapolis on 11 November 1896, the daughter of an African Methodist Episcopal minister whose appointments moved the family repeatedly: Indianapolis, New Orleans, Nashville, Colorado Springs, Spokane (Horne, 2000; Jackson, n.d.). At 13 she wrote a protest editorial after being kept out of a YWCA swimming pool, which is the earliest recorded instance of the thing she went on doing for the next sixty years.

**Marriage, two sons, divorce.** She married Shadrach T. McCants in Seattle at 21, bore Robert in 1923 and David in 1925, filed in Portland, Oregon, and was divorced by 1927 (Horne, 2000). Robert died in the early 1940s. David Graham Du Bois became a journalist and, much later, the person who sold her own papers to Harvard.

**Then the training, in pieces, mostly paid for by working.** She was in France from December 1926, on and off until about 1930, and reported studying music composition there, usually given as the Sorbonne. Hold that one loosely: no account names a registration record, and the caution is earned by the next lesson. She worked as a music librarian at Howard University in 1927 and 1928 as a nonmatriculated student, studied at the Institute of Musical Art in New York in 1929, then headed the music department at Morgan College in Baltimore from 1929 to 1931 (Horne, 2000). Only in 1931 did she enter Oberlin, at 35, a divorced mother of two, holding no bachelor's degree.

**Oberlin gave her the credential and the thesis.** Bachelor's degree in 1934, master's in 1935, with a thesis on survivals of Africanism in modern music (Oberlin College, n.d.). Notice the sequence. She ran a college music department for two years **before** she held an undergraduate degree, and she composed the work this course is named for while she was still an undergraduate.

**What the detour teaches.** Three things travel out of it. First, the credential arrived late and did not create the competence; the competence got her the job that paid for the credential. Second, the non linear route is not a deficit story, it is the ordinary shape of a career built without money. Third, and least comfortable, an interrupted record is easy to misreport, which is exactly what happened to hers, in her lifetime and after it.

:::reveal What had Graham already done professionally before she enrolled at Oberlin in 1931? ||| Studied music in France, worked as a music librarian at Howard, studied at the Institute of Musical Art, and headed the music department at Morgan College for two years, all without holding a bachelor's degree.

:::reveal Why does this lesson hold the Sorbonne claim loosely? ||| Every account asserts it and none cites a registration record or transcript, so it is a repeated self report rather than a documented fact.

:::reveal What is the sequence that makes her credential story unusual? ||| She ran a college music department, then earned the bachelor's degree, and composed Tom-Tom while still an undergraduate. The competence came first and paid for the credential.

## Vocabulary
- **Nonmatriculated student**: someone taking instruction at an institution without being enrolled in a degree program, which leaves a thin paper trail.
- **Institute of Musical Art**: the New York conservatory, founded in 1905, that later became part of the Juilliard School.
- **Survivals of Africanism**: the research question of which African musical practices persisted in the Americas, and the subject of her 1935 Oberlin thesis.
- **Non linear route**: a career whose training, work and credentials arrive out of the conventional order, usually because the money did.

## Sources
Horne, G. (2000). *Race woman: The lives of Shirley Graham Du Bois*. New York University Press.

Jackson, E. (n.d.). *Shirley Graham Du Bois*. University of Massachusetts Amherst, Office of Equity and Inclusion. https://www.umass.edu/diversity/black-presence-project/shirley-graham-du-bois

Oberlin College. (n.d.). *Genius at the intersection*. https://www.oberlin.edu/news/genius-intersection`,
    },
    {
      slug: "sg-tom-tom",
      title: "3 · Cleveland, 30 June 1932: what was actually staged",
      section: "Section 1 · The composer, before anybody asked whose wife she was",
      body: `Here is the event, stripped back to what the record supports.

**The verified core.** On 30 June 1932, in Cleveland Municipal Stadium, an opera in three acts by Shirley Graham was given its world premiere in the second and final season of a summer venture the Encyclopedia of Cleveland History calls simply Stadium Opera, organized by the scenic designer Laurence Higgins and running from 29 June to 10 July 1932 (Case Western Reserve University, n.d.). The season's other titles were *Carmen*, *Aida* and *Die Walkure*. The work traces the African diaspora across three acts, from West Africa through a Southern plantation to Harlem. The baritone Jules Bledsoe, who had originated "Ol' Man River," sang the Voodoo Man. She was still an Oberlin student.

**What a contemporary reporter saw.** *TIME* covered the season on 11 July 1932 and put nearly fifteen thousand people at the performance it called the first. It described roughly five hundred Black choristers and children, a stage of about fifty thousand square feet carrying a thirty foot revolving unit, and a thirty foot waterfall supplied by the Cleveland Fire Department (Music: Cleveland opera, 1932).

**Now the four things retellings add that the record does not carry.**

1. **The Great Lakes Exposition.** Frequently attached to this premiere. The exposition opened in 1936, four years later. It has nothing to do with it.
2. **The governor of Ohio in the audience.** *TIME* does confirm that Newton Diehl Baker was applauded when he entered. Baker was mayor of Cleveland and later Secretary of War. He was never governor of Ohio, and in 1932 the governor was George White.
3. **Ten thousand on the first night and fifteen thousand on the second.** The combined figure above twenty five thousand is repeated everywhere, but the contemporary account puts about fifteen thousand at the **premiere** itself. The split is not settled and this course does not print it.
4. **A national radio broadcast.** *TIME* mentions no broadcast. The NBC attribution traces to weak sources, and her radio play *Track Thirteen* really was an NBC broadcast in 1940, which is an easy thing to slide backwards onto the opera. Unverified, so not taught.

**And the reception was not unanimous.** *TIME*, in the same piece, preferred *Carmen* to what it called a murky *Tom-Tom*. The enthusiastic quotations that circulate are real. So is that one. A course that prints only the raves is doing the same selective work as a course that prints only the pans.

:::reveal Give the premiere date, venue and producing season for Tom-Tom. ||| 30 June 1932, Cleveland Municipal Stadium, in the second and final season of Stadium Opera, which ran from 29 June to 10 July 1932.

:::reveal Which four widely repeated details about the premiere does this course refuse to print, and why? ||| The Great Lakes Exposition (it opened in 1936), the governor of Ohio in the audience (Newton D. Baker was a mayor and a war secretary, never governor), the 10,000 and 15,000 audience split (the contemporary report puts about 15,000 at the premiere itself), and a national radio broadcast (no contemporary evidence, and the attribution probably migrated from Track Thirteen in 1940).

:::reveal Why does the lesson quote TIME calling the work murky? ||| Because printing only the enthusiastic notices would be the same selection error as printing only the hostile ones. Both reactions are in the record.

## Vocabulary
- **Stadium Opera**: the two season Cleveland summer venture, 1931 and 1932, organized by the scenic designer Laurence Higgins, that staged the premiere.
- **World premiere**: the first performance anywhere of a work, which is a checkable event with a date, a venue and a payroll.
- **Migrated attribution**: a true fact about one work, such as an NBC broadcast of Track Thirteen, that slides onto a different work in retelling.
- **Selective quotation**: building a reputation out of only the favourable notices, which is what makes a reception look unanimous when it was not.

## Sources
Case Western Reserve University. (n.d.). *Stadium opera*. Encyclopedia of Cleveland History. https://case.edu/ech/articles/s/stadium-opera

Music: Cleveland opera. (1932, July 11). *TIME*. https://time.com/archive/6749534/music-cleveland-opera/

Schmalenberger, S. (2006). Debuting her political voice: The lost opera of Shirley Graham. *Black Music Research Journal, 26*(1), 39-87.`,
    },
    // ── Section 2 ──────────────────────────────────────────────────────────────────────────────
    {
      slug: "sg-federal-theatre",
      title: "5 · Running a unit: Chicago, 1936",
      section: "Section 2 · The theatre worker, 1936 to 1941",
      body: `In 1936 the national director of the Federal Theatre Project, Hallie Flanagan, put Shirley Graham in charge of the Chicago Negro Unit (Horne, 2000). She is widely described as the only woman to head a Federal Theatre unit.

**What the job was.** The Federal Theatre Project ran from 1935 to 1939 as work relief under the Works Progress Administration. It employed theatre workers rather than subsidising theatre, which meant a unit director was managing a payroll, a building, a season and a company of people who needed the wage, in a program whose funding could be cancelled by a congressional vote. It was killed by exactly that in 1939.

**What her unit staged while she ran it.** Lew Payton's *Did Adam Sin?* in 1936, *Little Black Sambo* in 1937, Theodore Ward's *Big White Fog* in 1938, and the unit's commercial hit, *The Swing Mikado*, in 1938.

**Now the credit distinction, which is the point of this lesson.** Those are productions **of the unit she directed**. That is not the same claim as saying she directed them. *The Swing Mikado* is generally credited to the director Harry Minturn, and sources differ on her personal creative role in the others. It is tempting, in a course arguing that a woman was under credited, to widen every claim in her favour. Do not. Over crediting her would put this course in the same business as the summaries it is correcting, and the honest version is impressive without help: she ran the operation, and the operation produced work that outlived it. Kate Dossett's *Radical Black Theatre in the New Deal* is where to go before attaching her name to any single staging (Dossett, 2020).

**Why the job ended.** The Federal Theatre came under congressional attack in late 1938 by the committee then investigating un American activities, and its funding was cut off in 1939. She left for Yale before the collapse finished.

**The transferable observation.** An institutional job of this kind creates almost no personal credit by design. The programme's name goes on the playbill, the director of a given show is named, and the person who kept the unit alive is in an administrative file. Twenty years later, when somebody writes a paragraph about her, the theatre years compress into a line, because a line is what the printed record left.

:::reveal What exactly was Shirley Graham's role in Chicago from 1936, and what did the job actually involve? ||| Head of the Chicago Negro Unit of the Federal Theatre Project, appointed by Hallie Flanagan. The Federal Theatre was work relief, so the job was running a payroll, a building, a company and a season under funding that Congress could cancel.

:::reveal Why does this course refuse to say she directed The Swing Mikado? ||| It was staged by the unit she ran, and the direction is generally credited to Harry Minturn. Widening a claim in her favour would make this course guilty of the thing it is correcting.

:::reveal Why do administrative jobs like this one leave so little personal credit? ||| The programme's name goes on the playbill and the individual show's director is named, while the person keeping the unit alive appears in an administrative file that nobody quotes.

## Vocabulary
- **Federal Theatre Project**: the 1935 to 1939 Works Progress Administration programme that employed theatre workers as relief, cancelled by Congress in 1939.
- **Unit**: a regional Federal Theatre company with its own director, building, payroll and season.
- **Work relief**: government employment created to pay wages during the Depression, which makes the payroll, rather than the art, the primary obligation.
- **Over crediting**: attaching a person's name to work they supervised but did not make, which is the mirror image of the under crediting this course is about.

## Sources
Dossett, K. (2020). *Radical Black theatre in the New Deal*. University of North Carolina Press.

Horne, G. (2000). *Race woman: The lives of Shirley Graham Du Bois*. New York University Press.`,
    },
    {
      slug: "sg-yale",
      title: "6 · Yale, the Rosenwald, and the dissertation she never wrote",
      section: "Section 2 · The theatre worker, 1936 to 1941",
      body: `With the Federal Theatre collapsing, a Julius Rosenwald Fund fellowship took her to the Yale School of Drama, where she worked from about 1938 to 1940 (Horne, 2000).

**What she went there to write.** Hallie Flanagan described the plan: a study of the history of the Negro in the Federal Theatre, a record Graham believed would show what the race might accomplish in the American theatre if given the opportunity (quoted in Horne, 2000). She was proposing to write the institutional history of the thing she had just been running, from the inside, while the memory was fresh.

**She never wrote it.** She left Yale without the degree when her favoured professor, Allardyce Nicoll, returned to Britain, and by 1941 she was directing adult activities at the Phillis Wheatley YWCA in Indianapolis, the city she was born in.

**Which is not the same as leaving with nothing.** In those two years she produced *It's Morning*, *Dust to Earth* and *Track Thirteen*, wrote radio scripts, and took coursework in Tudor drama, screenplay analysis, and German theatre history conducted in German. The output is there. The credential is not.

**A pattern, and it costs her.** This is the second graduate programme she entered and did not finish, and it would not be the last: a 459 page biographical novel about the frontier journalist Anne Newport Royall, intended as a doctoral dissertation at New York University, was never submitted (Horne, 2000). A reader who counts degrees reads that as a person who could not finish. A reader who counts finished work reads it as a person who kept choosing the work over the paperwork, at a time when the paperwork was what other people used to decide whether she was serious.

**Hold the dates loosely.** The scholarship dates the fellowship award to 1938, while Horne cites a Rosenwald Fund letter of 12 April 1939, which is consistent with a renewal rather than an original award. The precise term is not settled without the fund's own records, held at Fisk, or her papers at the Schlesinger Library, so this course says "about 1938 to 1940" and means it.

:::reveal What did Graham go to Yale to write, and did she write it? ||| A study of the history of the Negro in the Federal Theatre Project, the institution she had just been running. She never wrote it and left without the degree.

:::reveal Name two things she did finish at Yale. ||| It's Morning, Dust to Earth and Track Thirteen were all produced out of those two years, along with radio scripts and coursework including German theatre history taught in German.

:::reveal Why does this lesson give the fellowship term as "about 1938 to 1940" rather than a precise span? ||| Because the scholarship dates the award to 1938 while Horne cites a Rosenwald letter of April 1939 that looks like a renewal, and the fund's own records would be needed to settle it.

## Vocabulary
- **Julius Rosenwald Fund**: the philanthropic fund, wound up in 1948, whose fellowships supported a generation of Black artists, writers and scholars.
- **Renewal**: a second year of an existing fellowship, which produces a later dated letter and is easily mistaken for the original award.
- **Institutional history**: an account of an organization written from inside it, which is what she proposed and never delivered.
- **Credential gap**: the distance between the work a person completed and the qualifications they hold, which other people use as a proxy for seriousness.

## Sources
Horne, G. (2000). *Race woman: The lives of Shirley Graham Du Bois*. New York University Press.

Schlesinger Library, Radcliffe Institute. (n.d.). *Papers of Shirley Graham Du Bois, 1865-1998 (inclusive), 1905-1975 (bulk)*. Harvard University. https://hollisarchives.lib.harvard.edu/repositories/8/resources/5016`,
    },
    {
      slug: "sg-the-plays",
      title: "7 · The plays, and the only one that got into print",
      section: "Section 2 · The theatre worker, 1936 to 1941",
      body: `Between the Federal Theatre and the first biography she wrote a body of plays. Here is the working list, and then the fact that explains why you have not heard of any of them.

**The plays.**
- *Coal Dust*, three acts, built on a mine disaster, staged by the Gilpin Players at Karamu House in Cleveland in 1938. Horne treats *Dust to Earth*, produced at Yale in 1941, as the same work under another name; catalogues list them separately. Safest description: a revision, not a second play.
- *It's Morning*, a one act tragedy in which an enslaved mother kills her daughter rather than let her be sold. Given a staged reading in 1939 and a full production at the Yale University Theatre in 1940, directed by Frederick Cole. Reprinted in Kathy Perkins's anthology of Black women playwrights (Perkins, 1989), which is why it is the one scholars can actually read.
- *I Gotta Home*, Gilpin Players, Karamu House, 1939.
- *Elijah's Ravens*, a three act comedy set in a minister's household, produced at Dillard University in New Orleans in the spring of 1941, directed by Randolph Edmonds with sets by the sculptor Elizabeth Catlett (Horne, 2000).
- *Track Thirteen*, a radio comedy about Pullman porters, produced by Yale over the station WICC in 1940 and broadcast on NBC.

**Now the fact.** *Track Thirteen* is the only play of hers published in her lifetime, in *Yale Radio Plays: The Listener's Theatre* (Welch and Eaton, 1940).

**Why that single fact explains the rest of her reputation.** A staged play that is never printed survives as a programme, a review clipping and a typescript in a box. It cannot be assigned in a class, quoted in a survey, or found by somebody who was not in the room. Print is the mechanism by which theatre becomes a record, and she was almost entirely outside it. Her opera has the same problem in a louder register: the score sat in a family's possession until 2001, when the Schlesinger Library bought her papers, and the work went nearly seventy years with no full production.

**This is the under recognition mechanism, and it is boring.** It is not primarily a conspiracy or even a snub. It is a distribution failure with a documentable cause, which is far more useful to a student, because a distribution failure can be described, measured, and in the archives at least partly reversed.

:::reveal Which of Shirley Graham's plays was published during her lifetime, and where? ||| Track Thirteen, in Yale Radio Plays: The Listener's Theatre, edited by Constance Welch and Walter Prichard Eaton, 1940.

:::reveal Why is It's Morning the play scholars most often discuss? ||| Because Kathy Perkins reprinted it in her anthology of Black women playwrights, so it is available to read. Availability, not quality, is doing most of the work in that selection.

:::reveal State the under recognition mechanism this lesson identifies, in one sentence. ||| An unpublished play survives only as a programme, a clipping and a typescript, so it cannot be taught, quoted or found, which is a distribution failure rather than a conspiracy.

## Vocabulary
- **Karamu House**: the Cleveland settlement house whose Gilpin Players were among the most important Black theatre companies of the period.
- **Typescript**: an unpublished manuscript, the form most of her plays survive in, readable only by someone who visits the archive.
- **Distribution failure**: work that exists but never reaches the channels through which reputations are built, which is a describable and partly reversible cause of obscurity.
- **Anthology reprint**: republication in a collection, which is often the single event that decides which of an author's works later scholarship discusses.

## Sources
Horne, G. (2000). *Race woman: The lives of Shirley Graham Du Bois*. New York University Press.

Perkins, K. A. (Ed.). (1989). *Black female playwrights: An anthology of plays before 1950*. Indiana University Press.

Welch, C., & Eaton, W. P. (Eds.). (1940). *Yale radio plays: The listener's theatre*. Expression Company.`,
    },
    // ── Section 3 ──────────────────────────────────────────────────────────────────────────────
    {
      slug: "sg-the-shelf",
      title: "9 · The shelf, and the house that built it",
      section: "Section 3 · The biographer, 1944 to 1955",
      body: `From 1944 she stopped being mainly a composer and became mainly an author of biographies, and she stayed one for thirty years. Here is the shelf.

**The books.** *Dr. George Washington Carver, Scientist*, written with George D. Lipscomb, 1944. *Paul Robeson: Citizen of the World*, 1946. *There Was Once a Slave: The Heroic Story of Frederick Douglass*, 1947. *Your Most Humble Servant*, on Benjamin Banneker, 1949. *The Story of Phillis Wheatley*, 1949. *Jean Baptiste Pointe de Sable: Founder of Chicago*, 1953. *The Story of Pocahontas*, 1953, from Grosset and Dunlap. *Booker T. Washington*, 1955. Then, after a long gap, *His Day Is Marching On: A Memoir of W. E. B. Du Bois*, 1971. *Gamal Abdel Nasser: Son of the Nile*, 1972. *Zulu Heart*, a novel, 1974. *Julius K. Nyerere: Teacher of Africa*, 1975. And *Du Bois: A Pictorial Biography*, 1978, published after her death.

**One publisher built most of it.** Julian Messner, Inc. issued the great majority of these, and Messner is the house that industrialised the juvenile biography from the 1930s onward, selling into the school and public library market through what it advertised as a shelf of biographies. That matters for lesson 11: the form these books take is a house style with a business model behind it, not a private eccentricity of hers.

**Why she did it.** Horne's answer is unsentimental. The biographies were not the apex of the biographical art, and unlike her work in the theatre, they brought in a decent income (Horne, 2000). She was a divorced woman supporting herself and had spent fifteen years in an art form that paid almost nothing.

**Two she never finished.** A 459 page biographical novel about the frontier journalist Anne Newport Royall, meant to be a doctoral dissertation, was never submitted and, later, was rejected by five publishers with no criticism of the manuscript offered. A book on Emmett Till proposed to a Prague publisher in 1957 was never completed (Horne, 2000).

**A warning about the reference works.** A widely syndicated encyclopedia entry on her gives the du Sable and Booker T. Washington books as 1971, the Nasser book as 1974 and *Zulu Heart* as 1978. All four are wrong. If you are checking a bibliography, check it against a library catalogue record or the book's own copyright page, never against an encyclopedia summary, and do not trust a source on a year once it has missed one.

:::reveal Which publisher issued most of Shirley Graham's biographies, and why does that matter? ||| Julian Messner, Inc., the house that industrialised juvenile biography for the school and library market. The form of the books is a house style with a business model behind it, not a personal quirk.

:::reveal According to Horne, why did Graham move from theatre to biography? ||| Money. The biographies brought in a decent income, and her stage work had not.

:::reveal Where should you check a book's publication year, and where should you not? ||| A library catalogue record or the copyright page of the book itself. Not an encyclopedia entry, and especially not one you have already caught getting a year wrong.

## Vocabulary
- **Juvenile biography**: life writing published for young readers, a distinct commercial genre with its own conventions about scene, dialogue and length.
- **Julian Messner, Inc.**: the New York publisher that built a biography line for schools and libraries and issued most of Graham's books.
- **Copyright page**: the page carrying the publisher, year and printing history, which is the primary evidence for a publication date.
- **Syndicated entry**: a reference article republished across many sites, which spreads one editor's error to a hundred addresses without adding any verification.

## Sources
Horne, G. (2000). *Race woman: The lives of Shirley Graham Du Bois*. New York University Press.

Graham, S. (1947). *There was once a slave: The heroic story of Frederick Douglass*. Julian Messner. https://www.gutenberg.org/ebooks/75237`,
    },
    {
      slug: "sg-the-prize",
      title: "10 · The prize record, and how to get one right",
      section: "Section 3 · The biographer, 1944 to 1955",
      body: `Prizes are the easiest part of a biography to verify, because awarding bodies keep lists. They are also, reliably, among the most frequently mis-stated, because nobody looks.

**What her own book says.** The copyright page of the 1947 first edition of *There Was Once a Slave* states that the book received the sixty five hundred dollar Julian Messner Award for the best book combating intolerance in America, that the judges were Carl Van Doren, Lewis Gannett and Clifton Fadiman, that the work was selected from over six hundred manuscripts, and that the original award was augmented by a grant from the Lionel Judah Tachna Memorial Foundation (Graham, 1947). Horne corroborates the panel, the volume of submissions and the size of the stipend (Horne, 2000).

**What this course will not print.** A year for that award. Neither the book nor Horne dates the judging, and it was a manuscript competition, so a 1946 decision with a 1947 publication is plausible and unproven. "Won the Julian Messner Award; published 1947" is the honest form. A source check is filed to settle it against the trade press.

**Now a correction worth the whole lesson.** It is often said that *Paul Robeson: Citizen of the World* won an Anisfield-Wolf Book Award in 1946. The awarding foundation's own list records something else: Shirley Graham, *Your Most Humble Servant*, 1950, nonfiction. Right author, wrong book, wrong year. The National Park Service gives 1949, so even the institutional sources disagree on the date, and Horne does not mention the award at all.

**The procedure, which transfers to any prize.** Go to the awarding body's own record first, because a prize is a list somebody maintains. Then check the book's front or copyright matter, which is where a publisher prints an award it paid to advertise. Only then consult a biography, and treat a secondary source's year as a lead rather than a fact. If two institutional sources disagree, print the awarding body's version and say the other exists.

**And two awards this course handles differently.** A Guggenheim Fellowship is confirmed by Horne, so it appears here without a term, because the 1945 to 1947 span comes from a reference source already caught misdating four of her books. An award from the National Institute of Arts and Letters in 1950 rests on secondary sources only, so it does not appear at all.

:::reveal What does the 1947 first edition of There Was Once a Slave state about its award, and what does it not state? ||| That the book received the six thousand five hundred dollar Julian Messner Award for the best book combating intolerance in America, judged by Carl Van Doren, Lewis Gannett and Clifton Fadiman from over six hundred manuscripts. It does not state a year for the award.

:::reveal The Anisfield-Wolf claim usually attached to Graham is wrong in two ways. Which two? ||| The book and the year. The awarding foundation's own list records Your Most Humble Servant in 1950, not Paul Robeson in 1946.

:::reveal In what order should a prize claim be checked? ||| The awarding body's own record first, then the book's copyright or front matter, then a biography. A secondary source's year is a lead, not a fact.

## Vocabulary
- **Julian Messner Award**: the publisher's manuscript competition for the best book combating intolerance in America, won by her Frederick Douglass book.
- **Anisfield-Wolf Book Award**: the Cleveland based prize for books on racism and human diversity, whose own records are the authority on who won what and when.
- **Awarding body record**: the list a prize administrator maintains, which outranks any biography or encyclopedia on the question of who won.
- **Front matter**: the pages before a book's text, where a publisher prints awards, judges and the terms of a competition.

## Sources
Graham, S. (1947). *There was once a slave: The heroic story of Frederick Douglass*. Julian Messner. https://www.gutenberg.org/ebooks/75237

Horne, G. (2000). *Race woman: The lives of Shirley Graham Du Bois*. New York University Press.

National Park Service. (n.d.). *Shirley Graham Dubois (1896-1977)*. https://www.nps.gov/people/shirleygrahamdubois-1896-1977.htm`,
    },
    {
      slug: "sg-fictionalized",
      title: "11 · Invented dialogue: the charge, the defence, and a verdict",
      section: "Section 3 · The biographer, 1944 to 1955",
      body: `A course about credit cannot be soft on its own subject, so here is the strongest case against her books, the strongest case for them, and where this course lands.

**The charge, and it is documented.** Her biographies were, in Horne's words, at times "criticized sharply for their inclusion of imagined dialogue," and he lists "fictionalized dialogue and shimmering prose" among her trademarks (Horne, 2000). He goes further, and the sentence is uncomfortable: her invention of dialogue was an extension of a life in which she had already created and unmade details about herself, so why not do it for somebody else.

**Named critics, in her own time.** Horace Cayton reviewed the Douglass book in the *Chicago Sun* on 13 April 1947, called it a competent story, and attacked the fictionalization. Saunders Redding admired the Robeson book and questioned its fictionalized aspects in the *Philadelphia Afro-American* on 31 August 1946. The *New York Times* on 6 April 1947 and the *New York Post* on 20 March 1947 were both critical (all cited in Horne, 2000). Note who these people are. Cayton and Redding were major Black intellectuals with no political motive to attack her. This is not a hostile establishment; it is her own field.

**The defence, from the same biographer.** Horne says plainly that the critics were "a bit unfair," because she did conduct primary research: the Library of Congress and the Maryland Historical Society for Banneker, Tuskegee and the surrounding countryside for Carver, Douglass's descendants and people who had known him for the Douglass book. And he records that while some critics railed at her recreations of dialogue, others found the technique trailblazing (Horne, 2000).

**The evidence in the books themselves.** *There Was Once a Slave* carries thirty five numbered footnotes and a seventeen item bibliography, citing Douglass's own autobiographies, *The Liberator*, the *Congressional Globe*, the *New Orleans Tribune* and Du Bois's *Black Reconstruction*. *Your Most Humble Servant* has a notes on sources section. *The Story of Phillis Wheatley* has a bibliography. Whatever else these books are, they are not unresearched.

**So what is the verdict.** That both things are true and they are not in conflict. These are hybrid books: real archival research carrying invented scenes, published without telling the reader which sentences are which. Graham later called the form the biographical novel, and Horne's qualifier is the fair one, that this was not the impression given to contemporary readers and critics. The defensible judgement is therefore about **disclosure**, not about honesty or laziness: a reader who cannot separate the documented from the imagined cannot use the book as evidence, and the fault is a labelling failure that the publisher's genre encouraged and she did not resist.

**And an honest gap in the literature.** No published scholar this course could find names a specific invented line in a specific book. The charge is asserted at the level of the pattern and supported by reviews, not by a worked example. That is a real hole, and a course that took the charge on trust without saying so would be doing what it accuses the summaries of doing.

:::reveal Name two contemporaneous critics who objected to the fictionalization, and say why their identity matters. ||| Horace Cayton in the Chicago Sun (13 April 1947) and Saunders Redding in the Philadelphia Afro-American (31 August 1946). Both were major Black intellectuals with no political motive against her, so this was criticism from inside her own field.

:::reveal What is Horne's defence of the books? ||| That the critics were a bit unfair, because she did primary research: the Library of Congress and the Maryland Historical Society for Banneker, Tuskegee for Carver, Douglass's descendants for the Douglass book. Some critics also found the recreated dialogue trailblazing.

:::reveal Where does this course land, and on what specific ground? ||| On disclosure. The books are hybrids of real research and invented scenes published without telling the reader which is which, so a reader cannot use them as evidence. The fault is labelling, encouraged by the publisher's genre.

:::reveal What gap in the scholarship does this lesson admit? ||| No published scholar names a specific invented line in a specific book. The charge rests on the pattern and on reviews rather than on a worked example.

## Vocabulary
- **Fictionalized biography**: a life written with invented scenes and dialogue among documented events, a commercial genre in mid century American publishing.
- **Disclosure**: telling the reader which parts of a text are documented and which are imagined, the standard this course judges the books against.
- **Hybrid text**: a work combining archival research with invention, which is usable as neither straight evidence nor straight fiction unless it is labelled.
- **Worked example**: a specific, quotable instance that supports a general charge, which is exactly what the literature on these books lacks.

## Sources
Graham, S. (1947). *There was once a slave: The heroic story of Frederick Douglass*. Julian Messner. https://www.gutenberg.org/ebooks/75237

Horne, G. (2000). *Race woman: The lives of Shirley Graham Du Bois*. New York University Press.

Aptheker, B. (2019, March 11). *Shirley Graham Du Bois's biographical writings*. African American Intellectual History Society. https://www.aaihs.org/shirley-graham-du-boiss-biographical-writings/`,
    },
    // ── Section 4 ──────────────────────────────────────────────────────────────────────────────
    {
      slug: "sg-fort-huachuca",
      title: "13 · Fort Huachuca, and the job she lost for doing it",
      section: "Section 4 · The organizer, 1942 to 1951",
      body: `In 1942 she took a wartime post as a YWCA and USO director at Fort Huachuca, Arizona, the Army installation where the segregated Black infantry divisions trained. She was dismissed for fighting discrimination against Black soldiers there (Horne & Stevens, 2009).

**A note on what this course will not repeat.** A widely reproduced summary adds a specific body count to the trouble at the post. It comes from the same entry that seats a governor of Ohio at her opera, and this course does not print a number it can only get from a source it has already caught. The documented core is enough: she took the soldiers' side against the post, and it cost her the job.

**She went straight to the NAACP.** She arrived in New York in 1943 as an assistant field director. The organization was in the middle of the largest growth in its history, from roughly forty thousand members in 1940 to four hundred thousand by 1945, and she thought a million was reachable. She raised more than seven thousand dollars in 1943 alone (Horne & Stevens, 2009).

**Then she quit, and the reason is not what the summaries assume.** She stayed about a year and resigned, and Horne and Stevens are explicit that the decision was not the apparent result of an ideological pull toward Communism. Her stated reason was the urge to do creative work. The next year she published her first book.

**Two errors this lesson exists to prevent.**

1. **She was not pushed out of the NAACP.** She resigned, for a reason she gave at the time, in a year when she was one of its more effective fundraisers.
2. **Do not merge that resignation with the Du Bois rupture.** W. E. B. Du Bois was ousted from the NAACP in 1948, five years later. She attacked the association publicly for it, calling the ouster a brazen act of sheer persecution that showed the archaic and anti democratic character of the NAACP's structure (quoted in Horne & Stevens, 2009). That is a different event, with different people, and collapsing the two produces a tidy story in which she left the NAACP because of him, which is exactly backwards in time.

**The general lesson.** When a woman's departure from an institution is later attributed to a man she had not yet married, check the dates before you accept the explanation. Chronology is the cheapest correction available and almost nobody runs it.

:::reveal What ended Shirley Graham's wartime USO post, and where did she go next? ||| She was dismissed from Fort Huachuca for fighting discrimination against Black soldiers, and went to New York in 1943 as an assistant field director of the NAACP.

:::reveal Was she forced out of the NAACP, and what reason did she give for leaving? ||| No. She resigned after about a year, and the stated reason was the urge to do creative work, not an ideological turn.

:::reveal Why does the lesson insist on separating her 1944 resignation from the 1948 Du Bois ouster? ||| They are five years and different people apart. Merging them produces a story in which she left the NAACP because of a man she had not yet married, which reverses the chronology.

## Vocabulary
- **USO**: the United Service Organizations, which ran welfare and recreation services for American troops, staffed in part through the YWCA.
- **Fort Huachuca**: the Arizona Army post where the segregated Black infantry divisions trained during the Second World War.
- **Assistant field director**: an NAACP staff role covering organizing and fundraising in the branches, distinct from national office.
- **Chronology check**: testing an explanation by asking whether its cause happened before its effect, the cheapest correction in historical writing.

## Sources
Horne, G. (2000). *Race woman: The lives of Shirley Graham Du Bois*. New York University Press.

Horne, G., & Stevens, M. (2009). Shirley Graham Du Bois: Portrait of the Black woman artist as a revolutionary. In D. F. Gore, J. Theoharis, & K. Woodard (Eds.), *Want to start a revolution? Radical women in the Black freedom struggle* (pp. 95-114). New York University Press.`,
    },
    {
      slug: "sg-the-left",
      title: "14 · Where she actually stood, without a single label",
      section: "Section 4 · The organizer, 1942 to 1951",
      body: `Her politics get compressed into one word, and the word is usually chosen by whoever is doing the compressing. Here is the record, in pieces, because the pieces do not reduce.

**Electoral, 1948.** She and Du Bois both backed Henry Wallace's Progressive Party, and she played a leading role at its July 1948 nominating convention in Philadelphia. This is a person who, in the same decade, worked for the NAACP and campaigned for a third party against the Democratic incumbent.

**Anticolonial.** She was active in the Council on African Affairs, founded by Paul Robeson in 1937 and led by the late 1940s by Du Bois with Alphaeus Hunton. Note the verb. No source found for this course gives her an office or a title in the Council, so it says active and associated, never officer. That distinction is the same one lesson 5 made about the Federal Theatre, and it is the discipline that keeps a corrective course honest.

**Peace.** The Peace Information Center is the organization at the centre of the 1951 prosecution in the next lesson. She was not a defendant. She organized the defence.

**Black women's organizing.** In 1951 she co founded the Sojourners for Truth and Justice with Eslanda Robeson and Louise Thompson Patterson, a radical Black women's organization whose Call to Negro Women is dated 29 September 1951 and drew more than a hundred and thirty women from fourteen states within two weeks (Horne & Stevens, 2009).

**The Communist Party question, held open on purpose.** In a spring 1945 letter she wrote that two years earlier she had had the good fortune of becoming a member of the Communist Party. Peter V. Cacchione, a Communist member of the New York City Council, wrote to Earl Browder that she had joined about two years before. An FBI memorandum of 29 June 1950 records the informant Louis Budenz saying she was represented to him as a staunch Party member. Against that, a standard reference encyclopedia states she never joined and was instead a self described proud apologist for Communism, the phrase her *New York Times* obituary used. Horne treats her as a member while recording that her own son was not certain beyond a shadow of a doubt, and that she was never forthcoming about it.

**What this course concludes.** The strongest evidence is her own 1945 sentence, and it is good evidence. But "card carrying Communist" as a permanent label fails on the rest of the record: she broke with the American party over the Sino Soviet split, and in 1970 she disavowed those ties to get back into the United States. A label that has to be true for fifty years is the wrong tool for a person who kept moving.

:::reveal What is the strongest evidence that Graham joined the Communist Party, and what is the strongest evidence against a permanent label? ||| Her own spring 1945 letter saying she had joined two years earlier, corroborated by Peter Cacchione's letter to Earl Browder. Against the label: she broke with the American party over the Sino Soviet split and disavowed the ties in 1970 to regain US entry.

:::reveal Why does this course say she was "active in" the Council on African Affairs rather than an officer of it? ||| Because no source gives her an office or title there, and inventing one in her favour would repeat the error the course exists to correct.

:::reveal Which organization did she co found in 1951, with whom, and what triggered it? ||| The Sojourners for Truth and Justice, with Eslanda Robeson and Louise Thompson Patterson, organized in response to the government's prosecution of W. E. B. Du Bois.

## Vocabulary
- **Progressive Party**: Henry Wallace's 1948 third party campaign, which drew Black and left support away from the Democratic ticket.
- **Council on African Affairs**: the anticolonial organization founded by Paul Robeson in 1937, later led by W. E. B. Du Bois with Alphaeus Hunton.
- **Sojourners for Truth and Justice**: the radical Black women's organization founded in 1951, active for about two years.
- **Static label**: a single political word applied across decades, which fails on anyone whose positions changed, and hers did.

## Sources
Horne, G. (2000). *Race woman: The lives of Shirley Graham Du Bois*. New York University Press.

Horne, G., & Stevens, M. (2009). Shirley Graham Du Bois: Portrait of the Black woman artist as a revolutionary. In D. F. Gore, J. Theoharis, & K. Woodard (Eds.), *Want to start a revolution? Radical women in the Black freedom struggle* (pp. 95-114). New York University Press.

Stabile, C. A. (n.d.). *Graham, Shirley*. The Broadcast 41, University of Oregon. https://broadcast41.uoregon.edu/biography/graham-shirley`,
    },
    {
      slug: "sg-february-1951",
      title: "15 · February 1951: an indictment, an arraignment, and a wedding",
      section: "Section 4 · The organizer, 1942 to 1951",
      body: `This is the fifteenth lesson of twenty five, and it is where the marriage arrives. Look at what she had already done before you read the month.

**The month, in order.**
- **9 February 1951.** W. E. B. Du Bois and other officers of the Peace Information Center are indicted for failing to register as agents of a foreign principal under the Foreign Agents Registration Act.
- **16 February 1951.** He is arraigned in federal court in Washington, searched, fingerprinted and briefly handcuffed. He turned 83 that same month.
- **27 February 1951.** They marry in New York. The date comes from an item in the W. E. B. Du Bois papers at UMass Amherst that records the ceremony.
- **18 November 1951.** The trial opens after a defence postponement, and ends in acquittal from the bench when the judge holds the government produced no evidence of the Center's Soviet ties.

**Two corrections the sequence forces.** First, a variant wedding date of 14 February circulates. It comes from a reference entry that also gives her birth year as 1907 and her age at death as 69, both demonstrably wrong, so this course prints 27 February and files a source check. Second, and more common, they did not marry "on the eve of the trial." They married eighteen days after the indictment and about nine months before the trial began.

**Why they married then.** Her son David Du Bois later told *Essence* that the wedding was timed so that, come what may, she would have unimpeded access to him. That is spousal access to a man who might go to prison. It is not, and no source claims it is, about a spouse's privilege not to testify.

**What she did next.** She organized. The Sojourners for Truth and Justice grew directly out of the campaign against this prosecution, and Du Bois published his own account of the affair the following year as *In Battle for Peace: The Story of My 83rd Birthday*, with comment by Shirley Graham.

**Notice that last detail, because it is this course in miniature.** Her writing about the case exists, and it exists **inside his book**, under a byline that describes it as comment. She had eight published books of her own by then. The most durable placement of her prose about the most public event of that year is an appendage to his.

:::reveal Put the four February and November 1951 events in order with their dates. ||| Indictment 9 February, arraignment 16 February, marriage 27 February, trial opening 18 November followed by acquittal from the bench.

:::reveal Why is "they married on the eve of the trial" wrong? ||| The trial began about nine months later, on 18 November 1951. The wedding came eighteen days after the indictment.

:::reveal What reason did David Du Bois give for the timing of the marriage? ||| That it was timed so his mother would have unimpeded access to Du Bois whatever happened, meaning spousal access if he were imprisoned. Not testimonial privilege.

:::reveal In what form did Shirley Graham's own writing about the 1951 case reach print, and why does this course point at it? ||| As comment inside W. E. B. Du Bois's book In Battle for Peace. She had eight books of her own by then, and her prose on that year's biggest event survives as an appendage to his.

## Vocabulary
- **Foreign Agents Registration Act**: the 1938 statute requiring agents of foreign principals to register, the law the 1951 indictment charged.
- **Arraignment**: the court appearance at which a defendant is formally charged and enters a plea, distinct from the trial.
- **Acquittal from the bench**: a judge ending a case for want of evidence rather than sending it to a jury, which is what happened in November 1951.
- **Placement**: where a piece of writing physically appears, which decides how it is cited and remembered independent of its quality.

## Sources
Du Bois, W. E. B. (1952). *In battle for peace: The story of my 83rd birthday* (with comment by Shirley Graham). Masses & Mainstream.

Horne, G., & Stevens, M. (2009). Shirley Graham Du Bois: Portrait of the Black woman artist as a revolutionary. In D. F. Gore, J. Theoharis, & K. Woodard (Eds.), *Want to start a revolution? Radical women in the Black freedom struggle* (pp. 95-114). New York University Press.

University of Massachusetts Amherst Libraries. (n.d.). *W. E. B. Du Bois papers, 1803-1999* (MS 312). Special Collections and University Archives. http://findingaids.library.umass.edu/ead/mums312`,
    },
    // ── Section 5 ──────────────────────────────────────────────────────────────────────────────
    {
      slug: "sg-the-file",
      title: "17 · What a blacklist actually costs, in contracts",
      section: "Section 5 · What the state did, 1950 to 1961",
      body: `Surveillance is usually taught as an atmosphere. It is more useful taught as an itemised bill, and in her case the bill survives.

**June 1950, two things at once.** *Red Channels*, the pamphlet naming broadcast industry figures as Communist affiliated, was published, and she was in it. In the same month the informant Louis Budenz told the FBI she was a secret Communist, opening roughly twenty five years of surveillance (Stabile, n.d.).

**What that cost, item by item.** Demands that her books be withdrawn from schools and libraries in Scarsdale, New York. Five publishers rejecting her Anne Royall novel with no criticism of the manuscript offered. A book tour for her Benjamin Banneker biography cancelled with no explanation given (Stabile, n.d.). Notice the shape. Nothing here is a prosecution and nothing is appealable. It is a set of private decisions by private parties, each individually deniable, that together end a working writer's access to the market.

**The file.** On 3 October 1950 J. Edgar Hoover directed the New York field office to investigate her in order to decide whether her name belonged in the Security Index. The FBI accumulated over two thousand pages on her, separate from the far larger file on Du Bois, and cultivated the couple's friends and employees as potential informants (Stabile, n.d.).

**Now a correction that is repeated almost everywhere.** She is often said to have testified before the House Committee on Un American Activities. On 25 June 1953 she received a subpoena signed by Joseph McCarthy to appear on 15 July 1953. McCarthy chaired the **Senate** Permanent Subcommittee on Investigations, which is a different body in a different chamber. She had separately appeared on a 1948 HUAC list of Communist fronts, which is probably where the confusion starts, and being named on a list is not testifying. No evidence has been located that she testified before HUAC at all. Whether she appeared before McCarthy's subcommittee on 15 July 1953 is unsettled, and a source check is filed against the Senate's own executive session transcripts, unsealed in 2003.

**The transferable point.** When you read that somebody was blacklisted, ask what it cost in nameable transactions. A cancelled tour, a withdrawn title, five silent rejections. Those are checkable and they are what actually happened to a career, while atmosphere is not something anyone can verify or compensate.

:::reveal Name three specific, documented costs of the blacklist to Graham's writing career. ||| Demands to withdraw her books from Scarsdale schools and libraries, five publishers rejecting her Anne Royall novel without criticising the manuscript, and a cancelled book tour for her Benjamin Banneker biography.

:::reveal What is the standard error about her and HUAC, and what actually happened? ||| She is often said to have testified before HUAC. She was named on a 1948 HUAC list of fronts, and in 1953 was subpoenaed by Joseph McCarthy's Senate Permanent Subcommittee on Investigations, a different body. No evidence has been found that she testified before HUAC.

:::reveal Why does this lesson insist on itemising a blacklist rather than describing a climate? ||| Because private, individually deniable decisions are what actually ended her market access, and they are checkable in a way that atmosphere is not.

## Vocabulary
- **Red Channels**: the June 1950 pamphlet listing broadcast figures alleged to have Communist affiliations, which functioned as an industry blacklist.
- **Security Index**: the FBI's list of people to be detained in a national emergency, which is what the 1950 Hoover memorandum was assessing her for.
- **Permanent Subcommittee on Investigations**: the Senate body Joseph McCarthy chaired, frequently confused with the House Committee on Un American Activities.
- **Deniable sanction**: a private decision, such as cancelling a tour, that damages a career while leaving nothing to appeal against.

## Sources
Horne, G. (2000). *Race woman: The lives of Shirley Graham Du Bois*. New York University Press.

Stabile, C. A. (n.d.). *Graham, Shirley*. The Broadcast 41, University of Oregon. https://broadcast41.uoregon.edu/biography/graham-shirley`,
    },
    {
      slug: "sg-passport",
      title: "18 · Three different doors, and why sources keep confusing them",
      section: "Section 5 · What the state did, 1950 to 1961",
      body: `Three separate things happened to her ability to cross a border, in three different decades, under three different mechanisms. Almost every short account blurs at least two of them, so learn them apart.

**Door one: the passport, through most of the 1950s.** Both hers and Du Bois's passports were withheld for most of the decade, which confined them to domestic affairs (Horne & Stevens, 2009). Applications to attend a peace conference in Brazil were denied around 1952. Her son David was separately refused a passport because of her activities, which is worth pausing on: the sanction reached a person who had done nothing.

**When it lifted.** Their passports were restored in 1958, the year the Supreme Court held in *Kent v. Dulles* that Congress had not authorised the Secretary of State to withhold a passport on the basis of a citizen's beliefs and associations.

**Door two: renunciation, 1963.** That is a different act entirely, done by the citizen rather than to them, before a diplomatic officer, and it is section 6's material.

**Door three: a visa, 1970.** By 1970 she was a foreign national, so the question was no longer whether the United States would let a citizen leave but whether it would let a foreigner in. On 5 May 1970 the Justice Department denied her entry under the McCarran Walter Act, overruling the State Department, on the ground that she had been associated with more than thirty organizations on the Attorney General's list of subversive groups. On 16 August 1970, after public pressure, the decision was reversed and the Immigration and Naturalization Service concurred in the State Department's recommendation. She visited in 1971 and again in 1975.

**Why the confusion matters.** A sentence like "the United States took away her citizenship" is false in all three cases. In the 1950s she kept her citizenship and lost her mobility. In 1963 she gave up the citizenship herself. In 1970 she was refused a visa and then granted one. Each is a different actor, a different legal instrument and a different remedy, and a reader who cannot tell them apart cannot evaluate any claim about what was done to her.

:::reveal What happened to Graham's passport in the 1950s, and when did it change? ||| It was withheld for most of the decade, confining her to domestic work. It was restored in 1958, the year of Kent v. Dulles.

:::reveal What did the Supreme Court hold in Kent v. Dulles? ||| That Congress had not authorised the Secretary of State to withhold a passport because of a citizen's beliefs and associations.

:::reveal Distinguish the three border mechanisms in one sentence each. ||| A 1950s passport denial kept a citizen from leaving; a 1963 renunciation was an act she performed herself before a diplomatic officer; a 1970 visa denial and reversal governed whether a foreign national could enter.

## Vocabulary
- **Passport denial**: withholding a citizen's travel document, which restricts departure without touching citizenship.
- **Kent v. Dulles**: the 1958 Supreme Court decision holding that Congress had not authorised passport denial over beliefs and associations.
- **Renunciation**: the formal act by which a citizen gives up nationality before a diplomatic or consular officer.
- **McCarran Walter Act**: the 1952 immigration statute under which her 1970 entry was first refused on association grounds.

## Sources
Horne, G., & Stevens, M. (2009). Shirley Graham Du Bois: Portrait of the Black woman artist as a revolutionary. In D. F. Gore, J. Theoharis, & K. Woodard (Eds.), *Want to start a revolution? Radical women in the Black freedom struggle* (pp. 95-114). New York University Press.

*Kent v. Dulles*, 357 U.S. 116 (1958). https://supreme.justia.com/cases/federal/us/357/116/

Stabile, C. A. (n.d.). *Graham, Shirley*. The Broadcast 41, University of Oregon. https://broadcast41.uoregon.edu/biography/graham-shirley`,
    },
    {
      slug: "sg-leaving",
      title: "19 · Freedomways, the invitation, and leaving in 1961",
      section: "Section 5 · What the state did, 1950 to 1961",
      body: `In the spring of 1961 a new quarterly appeared, and she was its first editor. By the autumn she had left the country.

**Freedomways.** Founded in 1961, it became the central journal of the Black left for a quarter of a century. Shirley Graham Du Bois was its first editor, and she resigned the post when she moved to Ghana later that same year. Esther Cooper Jackson then edited it until it closed in 1985.

**Get the tense right.** A flat sentence like "she became the editor of *Freedomways*" implies she ran it. She held the chair for months, in its first year. That is a real and worth stating fact, and it is a smaller one than the sentence suggests. This course has spent five sections objecting to claims that shrink her; the same discipline forbids one that inflates her.

**What she did keep doing.** She shaped the journal's internationalism from Accra, soliciting work from Tom Mboya, Oliver Tambo and Julius Nyerere. She later fell out with Esther Cooper Jackson after Du Bois's death, when the journal ran Roy Wilkins on Du Bois and would not take her own choice, Malcolm X (Horne & Stevens, 2009). She published her own account of the 1966 Ghanaian coup there in 1966.

**Why they left.** Kwame Nkrumah invited W. E. B. Du Bois to Ghana to direct the *Encyclopedia Africana*. They arrived in Accra in October 1961. She was 64.

**Two things that invitation was not.** It was not an offer to her, and the encyclopedia was not her project. Du Bois directed it until his death in August 1963, after which Alphaeus Hunton, who had come to Ghana in 1962, ran the secretariat until the 1966 coup. No source found for this course gives her a title or a function on the encyclopedia. If you want to know what was hers in Ghana, the answer is in the next section, and it is a bigger answer than the encyclopedia would have been.

**And a date to distrust.** Several summaries say that in 1961 both of them renounced American citizenship and became Ghanaian citizens. Neither half of that is right for 1961, and section 6 works the actual sequence, which is messier and more interesting.

:::reveal What position did Graham hold at Freedomways, and for how long? ||| First editor, from the journal's founding in spring 1961 until she resigned to move to Ghana later that year. Esther Cooper Jackson then edited it until 1985.

:::reveal Whose project was the Encyclopedia Africana, and who ran it after 1963? ||| W. E. B. Du Bois directed it until his death in August 1963; Alphaeus Hunton then ran the secretariat until the 1966 coup. No source gives Shirley Graham Du Bois a role on it.

:::reveal Why does the lesson correct an overstatement about her Freedomways role? ||| Because the discipline that forbids claims which shrink her also forbids claims that inflate her. She held the chair for months, not for the journal's run.

## Vocabulary
- **Freedomways**: the quarterly founded in 1961 that became the central journal of the Black left, published until 1985.
- **Encyclopedia Africana**: the projected multi volume reference work on Africa and the diaspora that Nkrumah invited Du Bois to Ghana to direct.
- **Secretariat**: the working office of a large project, in this case the body Alphaeus Hunton ran after Du Bois's death.
- **Tenseless claim**: a statement of a role with no dates attached, which quietly implies a longer tenure than the record supports.

## Sources
Horne, G., & Stevens, M. (2009). Shirley Graham Du Bois: Portrait of the Black woman artist as a revolutionary. In D. F. Gore, J. Theoharis, & K. Woodard (Eds.), *Want to start a revolution? Radical women in the Black freedom struggle* (pp. 95-114). New York University Press.

Du Bois, S. G. (1966). What happened in Ghana? The inside story. *Freedomways*, Spring 1966, 201-223.

Schlesinger Library, Radcliffe Institute. (n.d.). *Papers of Shirley Graham Du Bois, 1865-1998 (inclusive), 1905-1975 (bulk)*. Harvard University. https://hollisarchives.lib.harvard.edu/repositories/8/resources/5016`,
    },
    // ── Section 6 ──────────────────────────────────────────────────────────────────────────────
    {
      slug: "sg-ghana-television",
      title: "21 · What was actually hers in Ghana: a television service",
      section: "Section 6 · Ghana, Cairo, Beijing, 1961 to 1977",
      body: `Ask what she built in Ghana and the answer is not the encyclopedia. It is a national broadcaster, and she was appointed to build it at 67.

**The appointment.** She became director of Ghana Television on 1 February 1964 (Gipson, 2024). The media historian Jennifer Blaylock calls her Ghana Television's first director, credits her with devising it as an anticolonial and pan African indigenous television system, and notes she was likely the first Black woman to head a national station (Blaylock, 2022).

**A name to get right.** Many accounts call her director of television for the Ghana Broadcasting Corporation. The broadcaster did not carry that name during her tenure. It became the Ghana Broadcasting Corporation under a National Liberation Council decree in 1968, two years after she left. Before that it was the Ghana Broadcasting Service. Writing "GBC" onto 1964 is a small anachronism that quietly backdates an institution.

**Eighteen months of building, then a launch.** Ghana Television began broadcasting on 31 July 1965, after months of test transmissions, with facilities built by Marconi. Nkrumah's inauguration speech was recorded and survives (Nkrumah, 1965). Her appointment came about a year and a half before the first broadcast, which is the actual job: a director appointed that far ahead is not presenting programmes, she is designing a system.

**Three decisions with her name on them.** The service would carry no advertising, on the stated ground that its primary function was not to serve big business. Programming would be produced in Ghana to an unusually high degree. And she brokered a supply agreement with the Japanese manufacturer Sanyo, displacing Philips of the Netherlands, the colonial era supplier of televisions to Ghana (Horne & Stevens, 2009).

**One number this course will not print.** The share of locally made programming is reported at eighty five per cent in one place and seventy five per cent in another. Both figures circulate, they cannot both be right, and a source check is filed rather than a number chosen.

**Her own account of the purpose**, from her papers: the television being planned would be a channel for education, for increased understanding, and for developing and unifying the peoples of Africa (quoted in Gipson, 2024).

:::reveal What was Shirley Graham Du Bois's documented role in Ghana, with dates? ||| Director of Ghana Television, appointed 1 February 1964, in post until the February 1966 coup. The service began broadcasting on 31 July 1965.

:::reveal Why is "director of television for the Ghana Broadcasting Corporation" an inaccurate description of her job? ||| The broadcaster only took that name under a 1968 decree, two years after she left. During her tenure it was the Ghana Broadcasting Service.

:::reveal Name two structural decisions attributed to her at Ghana Television. ||| No advertising, on the ground that the service was not there to serve big business, and a supply deal with Sanyo of Japan that displaced Philips, the colonial era supplier.

## Vocabulary
- **Ghana Television**: the national television service that began broadcasting on 31 July 1965, with her as its first director.
- **Anachronism**: applying a later name, title or institution to an earlier period, as "Ghana Broadcasting Corporation" does to 1964.
- **Test transmission**: a broadcast made to prove the network before a public launch, which is why a service exists technically before it exists publicly.
- **Supply agreement**: the contract deciding which manufacturer's receivers a country buys, which is an industrial policy decision as much as a technical one.

## Sources
Blaylock, J. (2022). The mother, the mistress, and the cover girls: Ghana Broadcasting Corporation and the coloniality of gender. *Feminist Media Histories, 8*(1), 102-133. https://doi.org/10.1525/fmh.2022.8.1.102

Gipson, N. (2024, February 29). *In her own right: Shirley Graham Du Bois in Ghana*. Welfare Citizenship and Intersectional Feminism, University of Bristol. https://wcif.blogs.bristol.ac.uk/2024/02/29/in-her-own-right-shirley-graham-du-bois-in-ghana/

Horne, G., & Stevens, M. (2009). Shirley Graham Du Bois: Portrait of the Black woman artist as a revolutionary. In D. F. Gore, J. Theoharis, & K. Woodard (Eds.), *Want to start a revolution? Radical women in the Black freedom struggle* (pp. 95-114). New York University Press.

Nkrumah, K. (1965). *Inauguration of Ghana Television Service* [Speech]. Internet Archive. https://archive.org/details/inaugurationofghanatelevisionservice_20200416`,
    },
    {
      slug: "sg-citizenship-coup",
      title: "22 · Citizenship, the coup, and what the record will not settle",
      section: "Section 6 · Ghana, Cairo, Beijing, 1961 to 1977",
      body: `Two citizenship stories run through these years. One is reasonably documented. The other is not, and this lesson is about refusing to pretend otherwise.

**His, first, because it is the clearer one.** The United States refused to renew W. E. B. Du Bois's passport in early 1963. He became a Ghanaian citizen, and the Du Bois papers at UMass Amherst hold a letter from Ghana's Ministry of the Interior dated 16 February 1963 enclosing his certificate of citizenship. He died in Accra on 27 August 1963.

**A distinction that is constantly collapsed.** Acquiring a foreign nationality and formally renouncing American citizenship before a consular officer are two different legal acts, and doing the first does not perform the second. Many accounts say Du Bois renounced his American citizenship. This course says he became a Ghanaian citizen after the United States refused to renew his passport, and stops there, because that is what the document shows.

**Hers, which is genuinely unsettled.** Some sources put her Ghanaian citizenship in 1961, alongside his, which is also the year they arrived, and an arrival year is exactly the kind of date that contaminates a citizenship claim. A different account cites a Justice Department memorandum of 10 October 1963 recording that the American embassy at Accra had advised on 4 October 1963 that she had renounced her United States citizenship under section 349(a)(6) of the Immigration and Nationality Act of 1952, the formal renunciation provision, and on 5 October that she intended to apply for an American visa on a Ghanaian passport. That version is more specific and cites the right statute. It also comes from a journalist rather than a scholar, in an article that misstates her death year. **So this course prints no settled date and files a source check** against the FBI file and the State Department record.

**The coup.** On the morning of 24 February 1966 the Ghanaian military deposed Nkrumah. She was placed under house arrest and removed from the television directorship. She was 69, and had run the service for two years. She published her own account that spring as "What Happened in Ghana? The Inside Story" in *Freedomways*, which makes her a participant and a primary source on the same event.

**Then the second exile.** Not straight to Egypt, as summaries have it. She went to Tanzania, where she took citizenship, and then to Cairo in 1967, where her son David was working as a journalist. Cairo was her base for the rest of her life. Her citizenship chain therefore runs United States, then Ghana, then Tanzania, and she died a Tanzanian citizen (Horne & Stevens, 2009).

:::reveal What does the documentary record show about W. E. B. Du Bois's citizenship, and what does it not show? ||| It shows a 16 February 1963 letter from Ghana's Ministry of the Interior enclosing his certificate of Ghanaian citizenship. It does not show that he formally renounced American citizenship, which is a separate legal act.

:::reveal Why does this course print no date for Shirley Graham Du Bois's own change of citizenship? ||| Because the two candidate accounts conflict. The 1961 version matches her arrival year, and the more specific October 1963 version rests on a journalist's citation of a Justice Department memorandum in an article that gets her death year wrong.

:::reveal Trace her citizenship chain and say where she went after the 1966 coup. ||| United States, then Ghana, then Tanzania, where she took citizenship after the coup, before settling in Cairo in 1967. She died a Tanzanian citizen.

## Vocabulary
- **Certificate of citizenship**: the document a state issues to record a grant of nationality, which is the primary evidence for such a claim.
- **Section 349(a)(6)**: the provision of the Immigration and Nationality Act of 1952 covering formal renunciation before a diplomatic or consular officer abroad.
- **Contaminating date**: a nearby, memorable year, such as an arrival, that gets substituted for the year actually being asked about.
- **Participant source**: an account written by someone inside the event, which is both the best available detail and an interested witness.

## Sources
Du Bois, S. G. (1966). What happened in Ghana? The inside story. *Freedomways*, Spring 1966, 201-223.

Horne, G., & Stevens, M. (2009). Shirley Graham Du Bois: Portrait of the Black woman artist as a revolutionary. In D. F. Gore, J. Theoharis, & K. Woodard (Eds.), *Want to start a revolution? Radical women in the Black freedom struggle* (pp. 95-114). New York University Press.

University of Massachusetts Amherst Libraries. (n.d.). *W. E. B. Du Bois papers, 1803-1999* (MS 312). Special Collections and University Archives. http://findingaids.library.umass.edu/ead/mums312`,
    },
    {
      slug: "sg-ledger",
      title: "23 · The ledger, the bargain, and how to write her first sentence",
      section: "Section 6 · Ghana, Cairo, Beijing, 1961 to 1977",
      body: `The last years contain the hardest fact in the course, so take it before the summary.

**The bargain of 1970.** The Justice Department refused her entry to the United States on 5 May 1970 under the McCarran Walter Act, citing her association with more than thirty listed organizations, and overruled the State Department to do it. Public pressure reversed the decision on 16 August. What is usually left out is the price. Horne and Stevens record that she pragmatically, perhaps even willingly, disavowed her ties to the American Communist Party in order to regain entry; that the campaign for her return included Roy Wilkins, whom she had attacked for decades; and that on the tour she spoke as a nationalist about Africa and Afrocentrism rather than about class or socialism (Horne & Stevens, 2009). That single passage ruins both the saintly version and the dismissive one, which is why it belongs in the course.

**What the visits produced.** She came in 1971 and again in 1975, lectured, taught briefly at the University of Massachusetts Amherst and at Harvard, took an honorary doctorate from UMass in 1973, and negotiated the sale of the Du Bois papers to that university the same year. She died in Beijing on 27 March 1977 of breast cancer, aged 80. Horne gives 1 April, which may be the memorial rather than the death, so a check is filed. A memorial service was held at Babaoshan Revolutionary Cemetery, and her ashes were later brought to Accra by her son and interred at the W. E. B. Du Bois Memorial Centre.

**The ledger.** One opera professionally staged in 1932. Five plays produced between 1938 and 1941, one of them published. Thirteen books between 1944 and 1978. A Federal Theatre unit run. A year of NAACP fundraising. A women's organization co founded. A journal edited. A national television service built and directed.

**The superlative, finally, at the narrowest width the evidence allows.** Careful scholars hedge it and press summaries do not. Caplan writes of the first opera by an African American woman to be produced by a major company in the United States. Schmalenberger writes of the first Black American woman to compose an opera for a major professional organization. The Schlesinger Library, which owns the score, says one of the first, perhaps the first. The reason for the hedge is not modesty. A bare claim of "the first ever" asserts a global absence, and the record of Black women composers before 1932 is precisely the record nobody kept, so absence of evidence there is weak evidence of absence. The honest sentence is: the earliest known opera by a Black American woman to receive a large scale professional staging in the United States.

**So write her first sentence.** It has to name a trade, a work, and a date before it names anybody else. Something like: Shirley Graham Du Bois was a composer, playwright and biographer whose opera was staged in a Cleveland stadium in 1932, who ran a Federal Theatre unit and published thirteen books, and who directed Ghana's first television service. The marriage can go in the second sentence. It has waited nineteen years already.

:::reveal What did Graham Du Bois give up in order to re enter the United States in 1970? ||| She disavowed her ties to the American Communist Party, was championed by Roy Wilkins whom she had long attacked, and spoke on the tour as a nationalist about Africa rather than about class or socialism.

:::reveal State the narrowest defensible version of the Tom-Tom superlative, and say why the hedge is required. ||| The earliest known opera by a Black American woman to receive a large scale professional staging in the United States. A bare "first ever" asserts a global absence, and the record of Black women composers before 1932 is the record nobody kept.

:::reveal What must her first sentence contain before it names anyone else? ||| A trade, a work and a date: composer, playwright and biographer; an opera staged in a Cleveland stadium; 1932.

:::reveal Where is she buried, and where was her memorial held? ||| The memorial service was at Babaoshan Revolutionary Cemetery in Beijing; her ashes were later taken to Accra by her son and interred at the W. E. B. Du Bois Memorial Centre.

## Vocabulary
- **McCarran Walter Act**: the 1952 immigration law under which her 1970 entry was first refused on association grounds.
- **Ledger**: the plain list of finished work, which is the unit this course measures a career in.
- **Global absence claim**: a superlative asserting that nothing earlier exists anywhere, which is unprovable when the relevant record was never kept.
- **Narrowest true version**: the most limited form of a claim that every source will support, which is the form a careful writer publishes.

## Sources
Caplan, L. (2025). *Dreaming in ensemble: How Black artists transformed American opera*. Harvard University Press.

Horne, G., & Stevens, M. (2009). Shirley Graham Du Bois: Portrait of the Black woman artist as a revolutionary. In D. F. Gore, J. Theoharis, & K. Woodard (Eds.), *Want to start a revolution? Radical women in the Black freedom struggle* (pp. 95-114). New York University Press.

Schmalenberger, S. (2006). Debuting her political voice: The lost opera of Shirley Graham. *Black Music Research Journal, 26*(1), 39-87.

Schlesinger Library, Radcliffe Institute. (n.d.). *Papers of Shirley Graham Du Bois, 1865-1998 (inclusive), 1905-1975 (bulk)*. Harvard University. https://hollisarchives.lib.harvard.edu/repositories/8/resources/5016`,
    },
    // NEXT_SECTION_ANCHOR
  ],
};
