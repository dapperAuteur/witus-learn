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
    // NEXT_SECTION_ANCHOR
  ],
};
