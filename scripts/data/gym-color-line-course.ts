// Authored "The Gym and the Color Line" — a cited, high-school-and-up SITE course on Learn.WitUS
// (Culture & History), and course 2 of the Indianapolis cluster planned in
// plans/39-indianapolis-pilot-cluster.md. It runs the same six-beat site template as course 1
// (Indiana Avenue), one beat per section: Then, Built, Powers, Now, Next, Write.
//
// Prerequisites named in the description:
//   * `green-book-how-to-read-a-route` — the METHOD (read a listing, chain a route, research an
//     address forward).
//   * `indiana-avenue-a-district-and-what-replaced-it` — course 1, the same metro, the same
//     instruments, and the chronology test this course reuses.
//
// WHY THIS COURSE EXISTS. Course 1 tested plan 39's proposed Unigov spine against a date table and
// reported that it FAILS for Indiana Avenue's buildings (every instrument predates 1 January 1970).
// The half that survived was schools, suburbs and political power. This is that course. The
// building type (the Indiana high school fieldhouse) is the hook; the BOUNDARY is the lesson.
//
// Sourcing discipline (the load-bearing part of this file):
//   * Section 3 is built on the PRIMARY DOCUMENTS, read directly rather than summarised from a
//     secondary account: United States v. Board of School Commissioners, 332 F. Supp. 655 (S.D.
//     Ind. 1971) ("Indianapolis I", Dillin, J.); the Seventh Circuit's 503 F.2d 68 (1974); and
//     Milliken v. Bradley, 418 U.S. 717 (1974). Every quoted sentence in lessons 8 to 13 is
//     transcribed from those opinions.
//   * TWO CLAIMS WERE CORRECTED AGAINST THE PRIMARY SOURCE and the course says so in the text:
//     (a) the widely repeated "90 percent of 360 boundary changes" is "approximately 350 boundary
//     changes ... More than 90% of these promoted segregation" in the opinion itself; (b) the
//     Seventh Circuit did NOT hold that Unigov fostered segregation. It REVERSED the metropolitan
//     remedy beyond the Uni-Gov line and REMANDED the question of an inter-district remedy inside
//     it. Lesson 13 is the house-style lesson that reports both corrections.
//   * NO INVENTED STATISTIC, PERSON, QUOTATION, ADDRESS OR SCORE. Where accounts disagree the
//     course gives the competing versions with their owners: the 1955 championship celebration
//     (Encyclopedia of Indianapolis vs the Indiana Historical Bureau vs Sports Illustrated) and the
//     largest-gym rankings (which have documented reorderings).
//   * Attucks alumni are living people. This is a story about what a community built under
//     constraint and won on the floor, not only about what was done to it. No ruin porn, no lost
//     golden age. The school is open today, is being expanded today, and won a state title in 2017.
//
// House rule: NO em-dashes or en-dashes in prose. ASCII hyphens in ranges are fine.

import type { AuthoredCourse } from "./authored-course";

export const GYM_COLOR_LINE_COURSE: AuthoredCourse = {
  title: "The Gym and the Color Line",
  description:
    "A cited, high-school-and-up site course on Indianapolis high school gymnasiums and football fields, and on the one civic instrument that decides who plays in them: the school district line. Indiana builds the largest high school gyms in the United States, and it built Crispus Attucks High School in 1927 as the segregated Black high school for a city whose school board had been asked to build it. Attucks was kept out of the state tournament until 1942, sat on 8.4 acres when the state's own formula asked for more than three times that, and then won the state championship in 1955, 1956 and 1959. The building type is the hook. The boundary is the lesson. You will read three court opinions directly, United States v. Board of School Commissioners (1971 and 1974) and Milliken v. Bradley (1974), and watch a federal judge find that more than ninety percent of about 350 attendance-zone changes promoted segregation, watch the 1969 Unigov statute expand a city's limits while expressly leaving its school district where it was, and watch the Supreme Court turn the district line into a wall the remedy could not cross. Then you will test that argument against a chronology, correct two claims this course could not verify, look up a real school's district and its boundary in the federal and state records, and write about one gym. Prerequisites: The Green Book: How to Read a Route (the method) and Indiana Avenue: A District and What Replaced It (course 1, the same metro). A 360 tour of the gyms and fields is planned and will be added to the Now section when it is captured.",
  lessons: [
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 1 · Then  (beat 1: US and state/local history)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "gcl-hoosier-hysteria",
      title: "1 · A state that organized itself around a school gym",
      section: "Section 1 · Then",
      body: `**Where this course sits.** You have finished *The Green Book: How to Read a Route*, which taught the method, and *Indiana Avenue: A District and What Replaced It*, which applied it to one corridor and asked who decided. That course ended by testing an argument against a chronology and reporting that half of it failed. **The half that survived was schools.** This is that course, and it is where the argument actually pays.

**The hook is a building. The lesson is a line.** Indiana builds high school gymnasiums at a scale almost no other state attempts. This course starts there because a fieldhouse is visible, photogenic, and easy to care about. It ends somewhere else: at the boundary of a school district, which is invisible, unphotogenic, and decides more about a child's education than any building on this page.

**The tournament, with the dates the association itself keeps.** The Indiana High School Athletic Association records its first state basketball tournament in **March 1911**, at Assembly Hall on the Indiana University campus in Bloomington, won by Crawfordsville. The IHSAA sponsored the tournament officially from **1912**. Sectionals were added in **1915**, regionals in **1921**, semi-finals in **1936**. The finals moved to Butler Fieldhouse in **1928** and were played there for most of the years through **1971**. In **1990** the finals drew a crowd of **41,046**, which the association records as a national high school record (IHSAA, n.d.-a).

**One fact does more work than all the others.** From 1911 until **1997**, Indiana ran a **single-class** tournament. Every high school in the state, whatever its size, entered the same bracket. **A four-class format began in 1998** (IHSAA, n.d.-a). For eighty-six years, the smallest school in Indiana and the largest played for the same trophy.

**Now the part this course is actually about.** For the first three decades of that tournament, **not every school could enter.** The IHSAA barred all-Black public high schools, along with the state's parochial, private and institutional schools, from membership. In **December 1941** the IHSAA Athletic Council passed a resolution admitting all public, private, parochial, African-American and institutional high schools; those schools were admitted on **15 August 1942** and became eligible for the **1943** tournament (IHSAA, n.d.-b).

**Read those two facts next to each other, because that is the whole course in miniature.**
- **A single-class tournament** says: everybody is in one competition, and size is not a reason to separate you.
- **A membership rule** says: some schools are not in the competition at all.

**One statewide bracket, and a rule about who is allowed into it.** That is a boundary, drawn by an association rather than a legislature, doing exactly what boundaries do. Section 3 shows you the same move made by a state legislature, on a map, with far more durable effects.

**A name for the thing, and a warning about the name.** The phrase you will hear is "Hoosier Hysteria." It is a real and affectionate description of how Indiana treats this tournament, and it is also the reason the story is usually told as folklore. **Folklore does not have citations.** Every claim in this course does, and where the sources disagree, you will get both.

**What a 1911 tournament tells you about 1970.** Nothing directly, and that is the point of starting here. The tournament is the reason a state built the buildings; the buildings are the reason a community's investment in a school is legible from the road; and legibility is what lets you ask the question this course is for: **who is inside the line that decides which school this is?**

## Sources
- Indiana High School Athletic Association. (n.d.-a). *Boys basketball tournament timeline*. https://ihsaapublic.blob.core.windows.net/archive/b-basketball/TournamentTimeline.htm
- Indiana High School Athletic Association. (n.d.-b). *Membership history, 1903 to present*. https://www.ihsaa.org/sites/default/files/documents/Membership%20History.pdf
- Indiana High School Athletic Association. (n.d.-c). *History of the IHSAA*. https://www.ihsaa.org/history-ihsaa`,
    },
    {
      slug: "gcl-attucks-built",
      title: "2 · Crispus Attucks: who asked for it, who fought it, what opened",
      section: "Section 1 · Then",
      body: `**A school is a decision, and this one has a date and a vote.**

**The decision.** On **22 December 1922**, the Indianapolis Board of School Commissioners adopted a resolution authorising the construction of a "Colored High School." Judge S. Hugh Dillin's 1971 findings record that the resolution came "with impetus provided by a petition from the Indianapolis Chamber of Commerce" (*United States v. Board of School Commissioners*, 1971, p. 663). **Note who is in that sentence.** A chamber of commerce is a business association, not a school authority, and it is on the record asking a school board to segregate a school system that was not yet segregated at the high school level.

**Who else pushed.** The Encyclopedia of Indianapolis names the Federation of Community Civic Clubs, the Chamber of Commerce, the White Supremacy League and the Mapleton Civic Association among the organizations supporting a separate school, and notes the **1924** election of Ku Klux Klan members to local offices as the climate in which the project proceeded (Encyclopedia of Indianapolis, n.d.-a).

**Who fought it, and lost.** The NAACP sued in the name of an Indianapolis resident, **Archie Greathouse**, "charging that students would not receive an equal education in a separate school." **The suit and the appeal both failed**, and construction went ahead (Encyclopedia of Indianapolis, n.d.-a). Keep this. It is the same shape as the state NAACP's position recorded in course 1: the objection was made at the time, in public, by named people, and it was overruled. **Nobody in this story had to wait for hindsight.**

**What opened.** Crispus Attucks High School opened in **September 1927** under principal **Matthias Nolcox**, who recruited faculty from Black colleges across the South. Enrolment came in at **1,350** rather than the anticipated 1,000, and staff had to be increased the following year (Encyclopedia of Indianapolis, n.d.-a).

**And what the opening did legally.** Dillin's findings are blunt: "When such school, Crispus Attucks, was opened in September, 1927, **all Negro high school students were forthwith compelled to attend it, regardless of their place of residence in the city**" (*United States v. Board of School Commissioners*, 1971, p. 663). One school, one race, one city, and no exceptions for where you lived.

**The detail most retellings skip, and it is about buses.** In **1935**, the 1869 Indiana school act was amended again "to require the Board to provide transportation for Negro students required to travel more than a certain distance **by reason of its segregation policies**" (*United States v. Board of School Commissioners*, 1971, p. 663). **Read that carefully.** School buses were provided in Indianapolis in the 1930s in order to make segregation work at city scale. Forty-six years later the same city would be ordered to run buses to undo it. **The vehicle is not the policy. The assignment rule is the policy.**

**The state law underneath all of it.** Indiana's General Assembly enacted a law in **1869** providing for the education of Black children for the first time, and providing for them to be organized into separate schools. In **1874** the Indiana Supreme Court held in *Cory v. Carter* that under that act Black children were not entitled to admission to the common schools provided for white students. An **1877** amendment required admission to white schools only if no separate school of comparable grade was provided (*United States v. Board of School Commissioners*, 1971, pp. 661-662; Encyclopedia of Indianapolis, n.d.-b).

**Then Indiana changed its own law, on paper, in 1949.** Chapter 186 of the Acts of 1949 declared it "the public policy of the State of Indiana to provide, furnish, and make available equal, nonsegregated, nondiscriminatory educational opportunities and facilities for all," and "to abolish, eliminate and prohibit segregated and separate schools or school districts on the basis of race, creed or color." Dillin observed that "the State completely anticipated and completely adopted the holding in *Brown I*," five years early (*United States v. Board of School Commissioners*, 1971, pp. 674-675).

**Which raises the question this course spends Section 3 answering.** If Indiana abolished school segregation in 1949, **why was Crispus Attucks 99.8 percent Black in 1968-69?** (*United States v. Board of School Commissioners*, 1971, p. 668.) The answer is not a statute. It is a boundary, drawn and redrawn, and it is all in the record.

**One thing to hold onto before Section 3 makes you angry.** The people who staffed and filled this building did extraordinary work in it. Nolcox recruited a faculty from Black colleges that was, by many accounts, more credentialed than the city's white high school faculties, because segregation elsewhere had made those teachers available. **That is a fact about constraint, not a compensation for it**, and this course will not use it as one. It is also the reason the next lesson exists.

## Sources
- Encyclopedia of Indianapolis. (n.d.-a). *Crispus Attucks High School*. https://indyencyclopedia.org/crispus-attucks-high-school/
- Encyclopedia of Indianapolis. (n.d.-b). *School desegregation*. https://indyencyclopedia.org/school-desegregation/
- Indiana Historical Bureau. (1992). *Crispus Attucks High School* [State historical marker 49.1992.1]. https://www.in.gov/history/state-historical-markers/find-a-marker/crispus-attucks-high-school/
- United States v. Board of School Commissioners of the City of Indianapolis, 332 F. Supp. 655 (S.D. Ind. 1971). https://law.justia.com/cases/federal/district-courts/FSupp/332/655/1624629/`,
      recallContent: [
        {
          prompt: "When and where does the IHSAA record the first Indiana state basketball tournament, and who won it?",
          answer: "March 1911, at Assembly Hall on the Indiana University campus in Bloomington, won by Crawfordsville. The IHSAA sponsored it officially from 1912.",
        },
        {
          prompt: "How long did Indiana run a single-class tournament, and what replaced it?",
          answer: "From 1911 through 1997, every school entered the same bracket regardless of size. A four-class format began in 1998.",
        },
        {
          prompt: "Which schools were barred from IHSAA membership, and when did that end?",
          answer: "All-Black public high schools, along with parochial, private and institutional schools. A December 1941 Athletic Council resolution admitted them; they were admitted 15 August 1942 and were eligible for the 1943 tournament.",
        },
        {
          prompt: "Why does this course put the single-class rule and the membership rule side by side?",
          answer: "Because one says size is no reason to separate you and the other says some schools are not in the competition at all. A membership rule is a boundary drawn by an association, doing what boundaries do.",
        },
      ],
    },
    {
      slug: "gcl-attucks-champions",
      title: "3 · 1955, 1956, 1959, and a parade nobody agrees about",
      section: "Section 1 · Then",
      body: `**This lesson is the one to be careful with**, because it is the part of the story that has been told the most and sourced the least.

**What is documented, and by whom.**

| Year | Result | Source |
|---|---|---|
| 1942 | IHSAA admits Black, parochial, private and institutional schools; eligible from the 1943 tournament | IHSAA (n.d.-b) |
| 1947 | Bill Garrett, a Black player, leads Shelbyville to the state title | Indiana Historical Bureau (2016) |
| 1948 | Garrett's varsity debut at Indiana University directly challenges the Big Ten's unwritten bar | Indiana Historical Bureau (2016) |
| 1955 | Attucks wins the all-city and state championships under coach **Ray Crowe**; beats Gary Roosevelt **97-74** in the final | Encyclopedia of Indianapolis (n.d.-a); Indiana Historical Bureau (n.d.-c) |
| 1956 | Attucks repeats, finishing **undefeated**; Oscar Robertson's last high school game | Encyclopedia of Indianapolis (n.d.-a); Indiana Historical Bureau (n.d.-c) |
| 1959 | Attucks wins again under coach **Bill Garrett**, the same Garrett, now coaching | Indiana Historical Bureau (2016) |
| 2017 | Attucks wins the Class 3A title, its first state championship in 58 years | WFYI (2017) |

**The fact with the cleanest citation, and it is not the one people quote.** The Encyclopedia of Indianapolis records the 1955 team as "the first Indianapolis men's high school basketball team to win in the state contest that began in 1911" (Encyclopedia of Indianapolis, n.d.-a). **The capital city of Indiana had never won its own state tournament until a segregated Black high school did it.** That is checkable against the tournament's own champion list, and it does not require anyone's superlative.

**Now the superlative, handled properly.** The Indiana Historical Bureau's own account says the 1955 team "became the first all-black team in the nation to win a state high school basketball title" (Indiana Historical Bureau, n.d.-c). **That is a national claim, and this course has not verified it nationally.** Verifying it would mean checking the championship records of every state association that ran an open tournament before 1955, which is real work nobody in this course has done. **So: attribute it, do not adopt it.** Write "the Indiana Historical Bureau describes the 1955 team as the first all-Black team in the nation to win a state title," and you have said something true. Write "Attucks was the first," and you have asserted something you cannot check.

**The 1955 final is worth one more sentence.** Attucks beat **Gary Roosevelt**, which was also an all-Black school. The Historical Bureau's account notes that with two Black teams on the floor there was no question of biased officiating deciding it (Indiana Historical Bureau, n.d.-c). **The first time the state's biggest stage was entirely theirs, it was because the bracket had put two segregated schools in the same game.**

## The disagreement you must keep: what happened after the 1955 game

**Three sources, three versions.** All three agree the celebration ended at **Northwestern Park**, in the Black neighborhood. They do not agree about the Circle.

**Version 1, the Encyclopedia of Indianapolis (n.d.-a).** The players, coaches and cheerleaders rode two fire trucks from Butler Fieldhouse "south on Meridian Street to Monument Circle." Mayor **Alex Clark** greeted them there and said, "Crispus Attucks is very happy with Indianapolis tonight and happy with the spirit of cooperation everyone is showing us." Clark then carried the trophy and led a procession toward Northwestern Park, where 25,000 fans gathered.

**Version 2, the Indiana Historical Bureau (n.d.-c).** The team "piled on a fire truck and drove from Butler Fieldhouse to Monument Circle along streets lined with blacks and whites alike. The truck took **a single lap around the monument instead of the traditional longer parade route** and then returned the team to the black neighborhood to celebrate."

**Version 3, *Sports Illustrated* (Bamberger, 2016).** "Indianapolis police would not let Attucks stop and celebrate at Monument Circle, a tradition for the state champions."

**What to do with that.**
1. **They are not equally specific.** Version 1 has a named mayor and a quoted sentence. Version 2 has a described route deviation. Version 3 has a named actor, the police, and an asserted refusal.
2. **They are not necessarily contradictory.** A short ceremony at the Circle and a curtailed parade route can both be true. A greeting from the mayor and a refusal by the police can both be true.
3. **They cannot all be the emphasis.** Version 1 reads as civic welcome. Versions 2 and 3 read as a celebration cut short. **The emphasis is the disagreement**, and picking one silently is the error.
4. **What would settle it** is the contemporaneous record: the *Indianapolis Recorder* and the *Indianapolis Star* for 20 March 1955, the police department's own records, and the city's. **None of those has been read into this course.**

**So this course says all three and names all three.** That is not fence-sitting. It is the only honest position available to someone who has read three secondary accounts and no primary ones, and **saying which position you are in is part of the report.**

**One more thing about which story got told.** The 1986 film *Hoosiers* is widely described as drawing on Milan High School's 1954 championship. *Sports Illustrated* titled its own account of Attucks "The real Hoosiers tale" (Bamberger, 2016). **Notice what that headline concedes:** a state that won a national film out of one small-town championship had, one year later, three championships by a segregated Black high school that did not become the movie. **Which story a place tells about itself is evidence about the place**, and it is the kind of evidence Section 6 asks you to write about.

## Sources
- Bamberger, M. (2016, February 23). *The real Hoosiers tale: Crispus Attucks*. Sports Illustrated. https://www.si.com/nba/2016/02/23/crispus-attucks-oscar-robertson-hoosiers-pacers-indiana-high-school
- Encyclopedia of Indianapolis. (n.d.-a). *Crispus Attucks High School*. https://indyencyclopedia.org/crispus-attucks-high-school/
- Indiana High School Athletic Association. (n.d.-b). *Membership history, 1903 to present*. https://www.ihsaa.org/sites/default/files/documents/Membership%20History.pdf
- Indiana Historical Bureau. (n.d.-c). *The Crispus Attucks Tigers: '55 and '56 state IHSAA champs*. https://www.in.gov/history/about-indiana-history-and-trivia/explore-indiana-history-by-topic/marking-hoosier-history-archive/the-crispus-attucks-tigers-55-and-56-state-ihsaa-champs
- Indiana Historical Bureau. (2016). *Integrating basketball* [State historical marker 53.2016.1]. https://www.in.gov/history/state-historical-markers/find-a-marker/find-historical-markers-by-county/indiana-historical-markers-by-county/integrating-basketball
- WFYI. (2017, March 26). *Crispus Attucks wins first state title in 58 years*. https://www.wfyi.org/education/2017-03-26/crispus-attucks-wins-first-state-title-in-58-years`,
      recallContent: [
        {
          prompt: "What did the Indianapolis school board do on 22 December 1922, and who is recorded as providing the impetus?",
          answer: "It adopted a resolution authorising construction of a Colored High School. Judge Dillin's findings record the impetus as a petition from the Indianapolis Chamber of Commerce.",
        },
        {
          prompt: "Who sued to stop the school being built, in whose name, and what happened?",
          answer: "The NAACP sued in the name of Archie Greathouse, an Indianapolis resident, charging that students would not receive an equal education in a separate school. The suit and the appeal both failed.",
        },
        {
          prompt: "What happened to Black high school students in Indianapolis when Attucks opened in September 1927?",
          answer: "All of them were compelled to attend it regardless of where in the city they lived, in the court's words 'forthwith' and 'regardless of their place of residence.'",
        },
        {
          prompt: "What did the 1935 amendment to the 1869 act require, and why does it matter?",
          answer: "It required the board to provide transportation for Black students who had to travel more than a certain distance by reason of the board's segregation policies. Buses were used to make segregation work decades before buses were ordered to undo it.",
        },
        {
          prompt: "What did Indiana's 1949 act say, and what question does it force?",
          answer: "It declared state policy to be equal, nonsegregated, nondiscriminatory education and to abolish segregated schools and school districts. Dillin noted it anticipated Brown by five years. So the question is why Attucks was still 99.8 percent Black in 1968-69.",
        },
      ],
    },
    {
      slug: "gcl-quiz-then",
      title: "4 · Quiz: the tournament and the school",
      section: "Section 1 · Then",
      quiz: {
        passingScore: 70,
        // 15-question bank served 8 at a time with shuffled options (the repo standard).
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "In what year does the IHSAA record its first state basketball tournament, and where?",
            options: [
              "1899, at Tomlinson Hall in Indianapolis",
              "1911, at Assembly Hall in Bloomington",
              "1928, at the new Butler Fieldhouse",
              "1943, at the Indianapolis Coliseum",
            ],
            correctIndex: 1,
            explanation: "March 1911, won by Crawfordsville. The IHSAA sponsored the tournament officially from 1912.",
            sourceLessonSlug: "gcl-hoosier-hysteria",
          },
          {
            prompt: "Indiana ran a SINGLE-CLASS state basketball tournament until which year?",
            options: ["1942", "1955", "1997", "2013"],
            correctIndex: 2,
            explanation: "1997 was the last single-class tournament; a four-class format began in 1998. For eighty-six years the smallest and largest schools played for the same trophy.",
            sourceLessonSlug: "gcl-hoosier-hysteria",
          },
          {
            prompt: "When were all-Black, parochial, private and institutional high schools admitted to IHSAA membership?",
            options: [
              "Admitted 15 August 1942, first eligible in 1943",
              "1911, when the IHSAA first ran its tournament",
              "1954, right after the Brown v. Board ruling",
              "1970, under a federal desegregation order",
            ],
            correctIndex: 0,
            explanation: "For the first three decades of the state tournament, some schools were not permitted to enter it at all.",
            sourceLessonSlug: "gcl-hoosier-hysteria",
          },
          {
            prompt: "What did the Indianapolis Board of School Commissioners do on 22 December 1922?",
            options: [
              "Voted to desegregate all of the city's high schools",
              "Petitioned the IHSAA for full tournament membership",
              "Purchased the 8.4-acre site for the segregated school",
              "Adopted a resolution authorising a 'Colored High School'",
            ],
            correctIndex: 3,
            explanation: "Judge Dillin's 1971 findings record the impetus as a petition from the Indianapolis Chamber of Commerce.",
            sourceLessonSlug: "gcl-attucks-built",
          },
          {
            prompt: "The NAACP's lawsuit against the creation of a segregated Indianapolis high school was filed in the name of:",
            options: ["Matthias Nolcox", "Freeman B. Ransom", "Archie Greathouse", "Donny Brurell Buckley"],
            correctIndex: 2,
            explanation: "The suit charged that students would not receive an equal education in a separate school. It failed, as did the appeal.",
            sourceLessonSlug: "gcl-attucks-built",
          },
          {
            prompt: "What happened to Black high school students in Indianapolis when Attucks opened in September 1927?",
            options: [
              "They could choose between Attucks and their neighborhood school",
              "They were compelled to attend Attucks regardless of where they lived",
              "Only those living within two miles of Attucks were assigned there",
              "Enrolment at Attucks stayed voluntary until the 1949 state act",
            ],
            correctIndex: 1,
            explanation: "The court's words are 'forthwith compelled to attend it, regardless of their place of residence in the city.'",
            sourceLessonSlug: "gcl-attucks-built",
          },
          {
            prompt: "What did the 1935 amendment to Indiana's 1869 school act require?",
            options: [
              "That the board bus Black students who traveled farther under segregation",
              "That the state equally fund the segregated schools and their facilities",
              "That Crispus Attucks be admitted at once to the IHSAA state tournament",
              "That the board abolish every optional attendance zone in the city",
            ],
            correctIndex: 0,
            explanation: "Buses were used to make segregation work at city scale decades before a court ordered buses to undo it. The vehicle is not the policy; the assignment rule is.",
            sourceLessonSlug: "gcl-attucks-built",
          },
          {
            prompt: "Chapter 186 of Indiana's Acts of 1949 did what?",
            options: [
              "Created the eight surrounding township school districts",
              "Established the IHSAA and its statewide basketball tournament",
              "Authorised the Unigov city-county consolidation of 1969",
              "Declared state policy to abolish segregated schools and districts",
            ],
            correctIndex: 3,
            explanation: "Judge Dillin observed that Indiana 'completely anticipated and completely adopted the holding in Brown I' five years early. Which is why the persistence of segregation afterward is a question about boundaries, not statutes.",
            sourceLessonSlug: "gcl-attucks-built",
          },
          {
            prompt: "In 1874 the Indiana Supreme Court held in Cory v. Carter that:",
            options: [
              "That segregated public schools were plainly unconstitutional",
              "That school district lines had to match the city boundaries",
              "That the 1869 act barred Black children from the white schools",
              "That the IHSAA could not lawfully exclude all-Black schools",
            ],
            correctIndex: 2,
            explanation: "An 1877 amendment required admission to white schools only where no separate school of comparable grade was provided.",
            sourceLessonSlug: "gcl-attucks-built",
          },
          {
            prompt: "Which Attucks championship claim has the cleanest, most checkable citation?",
            options: [
              "That the 1955 team was Indianapolis's first boys state champion",
              "That it was the first all-Black team in the nation to win a title",
              "That it was the first Indiana team to finish a season undefeated",
              "That it was the first team ever to win three straight state titles",
            ],
            correctIndex: 0,
            explanation: "It is checkable against the tournament's own champion list. The national superlative requires checking every state association's record before 1955, which this course has not done.",
            sourceLessonSlug: "gcl-attucks-champions",
          },
          {
            prompt: "Attucks won the 1955 state final against which school, and why is that matchup significant?",
            options: [
              "Milan, the school from the 1954 Hoosiers championship",
              "Gary Roosevelt, itself an all-Black segregated school",
              "Lafayette Jefferson, the state's first integrated final",
              "Shelbyville, coach Bill Garrett's former high school",
            ],
            correctIndex: 1,
            explanation: "The Indiana Historical Bureau's account notes that with two Black teams on the floor there was no question of biased officiating deciding it.",
            sourceLessonSlug: "gcl-attucks-champions",
          },
          {
            prompt: "Three sources describe the celebration after the 1955 championship. What does this course do?",
            options: [
              "Picks the single most dramatic of the three accounts",
              "Omits the disputed celebration from the course entirely",
              "Averages the three accounts into a single combined version",
              "Gives all three, attributed, and names what would settle it",
            ],
            correctIndex: 3,
            explanation: "The Encyclopedia has a mayoral greeting at the Circle; the Historical Bureau has a shortened parade route; Sports Illustrated says police would not let the team stop there. The emphasis is the disagreement.",
            sourceLessonSlug: "gcl-attucks-champions",
          },
          {
            prompt: "Who coached the 1959 Attucks championship team, and what else is he known for?",
            options: [
              "Ray Crowe, who also coached the 1955 and 1956 champions",
              "Matthias Nolcox, the school's first principal from 1927",
              "Bill Garrett, who led Shelbyville to the 1947 state title",
              "Oscar Robertson, serving as the team's player-coach",
            ],
            correctIndex: 2,
            explanation: "The Indiana Historical Bureau's 'Integrating Basketball' marker records Garrett's IU career and his appointment at Attucks in 1957.",
            sourceLessonSlug: "gcl-attucks-champions",
          },
          {
            prompt: "When did Attucks next win a state championship after 1959?",
            options: [
              "1970, under the single-class format",
              "1988, in the Class 4A bracket",
              "2006, in the Class 2A bracket",
              "2017, in the Class 3A final",
            ],
            correctIndex: 3,
            explanation: "Fifty-eight years later. The school is open, competing and being expanded today, which is why this course refuses a lost-golden-age frame.",
            sourceLessonSlug: "gcl-attucks-champions",
          },
          {
            prompt: "Sports Illustrated titled its account of Attucks 'The real Hoosiers tale.' What does that headline concede?",
            options: [
              "That the film Hoosiers was an entirely accurate account",
              "That Milan's 1954 title became the film, not Attucks's three",
              "That the Attucks championship run was largely fictional",
              "That Milan and Attucks met in the 1954 state championship",
            ],
            correctIndex: 1,
            explanation: "Which story a place tells about itself is evidence about the place, and Section 6 asks you to write about that kind of evidence.",
            sourceLessonSlug: "gcl-attucks-champions",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 2 · Built  (beat 2: architecture and building typology)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "gcl-built-fieldhouse",
      title: "5 · The fieldhouse: a building type, and what a town spent on it",
      section: "Section 2 · Built",
      body: `Beat 2 of the site template asks **why does it look like that?** For a school gymnasium the answer is not style. It is **capacity**, and capacity is a budget decision made by a community about itself.

**Start with the type.** A gymnasium is a clear-span room: a playing floor with no columns in it, which is structurally the expensive part, wrapped in as much seating as the builder will pay for. **A "fieldhouse" is what you call it when the seating stops being an afterthought.** The evolution is legible: early Indiana gyms were rooms attached to the school building with little or no spectator space, and they became free-standing buildings as crowds grew, at which point the structural problem of spanning a large room without columns blocking sightlines became the design problem (Indiana Department of Natural Resources, 2024).

**Two 1928 buildings set the ceiling.**
- **Butler Fieldhouse**, now **Hinkle Fieldhouse**, Indianapolis. Designed by the Indianapolis architect **Fermor Spencer Cannon**, opened **1928**, seating **15,000**. It was **the largest basketball arena in the United States until 1950**. Listed on the National Register of Historic Places in **1983**. The IHSAA played its state finals there from **1928** and, with wartime interruptions, through **1971**; sectionals continued there until **1994**. A renovation of **36.2 million dollars** ran from **2009 to 2014** (Encyclopedia of Indianapolis, n.d.-c).
- **Muncie Fieldhouse**, also **1928**, which nearly a century later is still among the largest high school gyms in the United States.

**Hold Hinkle for a moment, because it is about to matter.** A high school with no adequate gym of its own played its biggest home games in a **15,000-seat** building on a private university campus. That is lesson 6.

**Now the scale question, and how to ask it honestly.** You will read that Indiana holds almost all of the largest high school gyms in the country. The compiled ranking most often quoted puts **ten of the twelve largest high school gyms in the United States in Indiana**, with **New Castle Fieldhouse** (1959) first at **8,424** and **Seymour's Lloyd E. Scott Gymnasium** (1970) second at **8,228**. Indiana's state tourism office describes New Castle as "the largest high school arena in the world" and Seymour's as "the second-largest high school gym in the country" (Visit Indiana, n.d.).

**Three cautions before you use any of those numbers, and they are the transferable part of this lesson.**

**1. A capacity is a measurement, and measurements get redone.** The rankings rest on research by the **Indiana High School Basketball Historical Society**, done by on-site seat counts, interviews, and reading architectural blueprints. **A 2019 recount reordered the top three**, moving Seymour's gym to first and New Castle's to third. **Then a 2020 renovation raised New Castle's capacity from 7,829 to 8,424**, and it went back to first. **The building did not change rank because the building changed. It changed rank because somebody counted again, and then because somebody rebuilt.**

**2. The historical figure and the current figure are different numbers about the same room.** New Castle Fieldhouse is reported to have seated **9,325** in its first season, **1959-60**, which is more than its current capacity. **Both figures can be right.** Seats get wider, aisles get added, codes change. **If you quote a capacity, quote the year with it**, exactly as course 1 made you do with displacement figures.

**3. "Largest in the world" is a claim about everywhere.** Nobody in this course has surveyed the world's high school gymnasiums. **Attribute it to the state tourism office and the historical society, and let them own it.**

## What a fieldhouse is evidence of

**Ask the beat 2 question in its blunt form: what did this community choose to spend on, and what does the choice tell you?**

A high school gym seating eight thousand people in a town far smaller than eight thousand is not irrational, and calling it that misses the point. **It is a public building that a community uses for the thing it does together.** Graduations, revivals, concerts, funerals, political meetings and, in 1959 and after, everything from the Harlem Globetrotters to a service band have used New Castle's floor. **A fieldhouse is a town hall that happens to have a basketball court in it.**

**And that is exactly why the next lesson lands.** If the fieldhouse is where a community assembles, then **the size of a school's gym is a public statement about whose assembly the community is funding.** Section 3 shows you the mechanism that decides which community a school belongs to. Lesson 6 shows you what that mechanism produced on one 8.4-acre site.

**A research note you will need in beat 4.** Several Indiana high school gyms are individually listed on the National Register of Historic Places, and course 1 taught you what listing does and does not do: federal listing is recognition plus review leverage when federal money or a federal permit is involved, and **local designation under a local ordinance is what actually regulates a demolition.** A gym is a large, single-purpose, expensive-to-heat building, which makes it a standing demolition candidate the moment a district consolidates. **When you look at a gym, ask what protects it, and check whether the answer is federal or local.**

## Sources
- Encyclopedia of Indianapolis. (n.d.-c). *Hinkle Fieldhouse*. https://indyencyclopedia.org/hinkle-fieldhouse/
- Indiana Department of Natural Resources, Division of Historic Preservation and Archaeology. (2024, May). *Preservation at the crossroads* [Newsletter]. https://www.in.gov/dnr/historic-preservation/files/hp_Legeman-Article-Layout.pdf
- Indiana High School Athletic Association. (n.d.-a). *Boys basketball tournament timeline*. https://ihsaapublic.blob.core.windows.net/archive/b-basketball/TournamentTimeline.htm
- National Park Service. (n.d.). *National Register of Historic Places: Frequently asked questions*. https://www.nps.gov/subjects/nationalregister/faqs.htm
- Visit Indiana. (n.d.). *High school gyms: Basketball, best of Indiana*. https://visitindiana.in.gov/blog/post/high-school-gyms-basketball-best-of-indiana/`,
      recallContent: [
        {
          prompt: "Which Attucks championship fact has the cleanest citation, and why is it stronger than the usual one?",
          answer: "That the 1955 team was the first Indianapolis boys team to win the state tournament begun in 1911. It is checkable against the tournament's own champion list and needs no national superlative.",
        },
        {
          prompt: "How should you handle the claim that Attucks was the first all-Black team in the nation to win a state title?",
          answer: "Attribute it to the Indiana Historical Bureau rather than adopting it. Verifying it nationally would require checking every state association's championship record before 1955, which this course has not done.",
        },
        {
          prompt: "Name the three accounts of the 1955 celebration and what each emphasises.",
          answer: "The Encyclopedia of Indianapolis has the mayor greeting the team at Monument Circle and leading a procession to Northwestern Park. The Indiana Historical Bureau has a single lap around the monument instead of the traditional longer route. Sports Illustrated says police would not let the team stop and celebrate at the Circle.",
        },
        {
          prompt: "What would settle the disagreement about the parade, and has this course read it?",
          answer: "The contemporaneous record: the Indianapolis Recorder and Indianapolis Star for 20 March 1955, plus police and city records. None of it has been read into this course.",
        },
        {
          prompt: "Who coached the 1955, 1956 and 1959 championship teams, and when did Attucks next win a title?",
          answer: "Ray Crowe coached in 1955 and 1956; Bill Garrett coached the 1959 team. Attucks next won a state championship in 2017, in Class 3A, 58 years later.",
        },
      ],
    },
    {
      slug: "gcl-built-8-acres",
      title: "6 · Eight point four acres: reading a school by its land",
      section: "Section 2 · Built",
      body: `**This is the lesson where the building type stops being charming.**

**The state had a formula, and it is in the record.** Judge Dillin's 1971 findings note that Indiana's **State Superintendent of Public Instruction had established minimum acreage requirements of seven acres for the first 200 students and one acre for each additional 100 students** (*United States v. Board of School Commissioners*, 1971, p. 685 n.60).

**Do the arithmetic yourself, because that is the exercise.** Take a school of **2,394** students. Seven acres covers the first 200. The remaining 2,194 students, at one acre per hundred, ask for roughly **21.9** more. **The state's own minimum for a school that size is therefore about 29 acres.**

**Now the finding.** "Because of the small size of the Attucks site (**8.4 acres**), a waiver had to be secured from the State Board of Education. This waiver was obtained, **with the proviso that no more than 2,200 students attend Attucks**; nevertheless, **in 1967-68 Attucks enrolled 2,394 students, 2,393 Negro and one white**" (*United States v. Board of School Commissioners*, 1971, p. 686 n.67).

**Read that footnote three times.** It contains, in one paragraph:
1. **A site under a third of the state's own minimum for its enrollment.**
2. **A waiver, meaning the state knew and signed off.**
3. **A cap attached to the waiver, at 2,200.**
4. **An enrollment 194 students over that cap.**
5. **A racial composition of 2,393 to 1.**

**None of that is an inference. It is a footnote in a federal opinion, and you can read it in five minutes.**

**Attucks was not a badly sited school. It was a school the city knew was undersized and filled anyway.** And the same opinion records that when a new, desegregated Attucks was finally being planned, the city would not release a **54-acre** tract at 38th Street and White River that it owned and could have transferred free or for a nominal price, "on the ground that it is needed for use as a nursery for the Department of Parks and Recreation." Dillin's response is one of the driest sentences in the opinion: **"The City's sense of priorities strikes the Court as curious"** (*United States v. Board of School Commissioners*, 1971, p. 674).

**And when the school board found another site, a different body stopped it.** The board took an option on a tract at **30th Street and Guion Road** and applied to have it rezoned for school use, "only to have its application denied by **The Metropolitan Development Commission** of Marion County, which asserts the right to control the use of all land in the county, including that proposed to be dedicated for public purposes" (*United States v. Board of School Commissioners*, 1971, p. 674).

**Stop and notice what just happened, because it is the single best cross-course link in this cluster.** The Metropolitan Development Commission is the body course 1 introduced in beat 5: the one that **adopts the comprehensive plan, adopts the zoning ordinance, decides rezonings, and approves property sales for redevelopment.** In course 1 it is the body a citizen goes to about a parcel on Indiana Avenue. Here it is **the body that refused a school board the land for a desegregated high school.** Same commission, same county, same decade. **A zoning decision is a school decision when it is made about a school site.**

## What Attucks had, and what this course will not claim it lacked

**Documented.** The main building opened **1927**. A three-story addition and a two-story gymnasium were built in **1938**. A second gymnasium was built in **1966** (Encyclopedia of Indianapolis, n.d.-a; and see the school's National Register listing, 1989).

**Also documented, and it is the sentence to carry.** The Encyclopedia of Indianapolis states: "**At no time as a segregated high school did Crispus Attucks have space and facilities to accommodate its student body and faculty**, despite additions to the structure in 1938 and 1966" (Encyclopedia of Indianapolis, n.d.-a).

**Documented about the gym specifically, and attributed rather than adopted.** *Sports Illustrated* writes that "Attucks's tiny gym was inadequate for organized basketball, meaning the Tigers always played on the road" (Bamberger, 2016), and other accounts describe the team playing "home" games at Butler Fieldhouse. **This course reports that as a characterisation with an author.** What is independently solid is the land: 8.4 acres, a waiver, and a cap the school exceeded.

**What this course does NOT claim, and you should not either.** That Attucks had no gymnasium at all. **It had one from 1938 and a second from 1966**, and the popular version of this story ("the school had no gym") is imprecise. **The accurate version is harder and better: it had gyms, on a site a third the size the state's own formula asked for, and it played its biggest games in someone else's building.** If you find yourself repeating the simpler version, you have stopped checking.

**What is still open.** Exactly what stood on those 8.4 acres, and whether the site ever held a football field, a track, or outdoor practice space, is a question for the **National Register nomination** (the school was listed in **1989**), the **Sanborn fire insurance maps**, and the **school district's own facilities records**. **None of those has been read into this course.** Beat 4 sends you to look, and beat 5 sends you to the records.

## The present, which is why this is not a lament

In **May 2026**, Indianapolis Public Schools announced a **44 million dollar** expansion of the Crispus Attucks campus: about **25 million dollars** donated by **Indiana University Health** and about **20 million dollars** from IPS bonds. It includes a **new gym meeting IHSAA standards, seating roughly 2,400**, with home and visitor locker rooms, indoor concessions and a weight room, plus a healthcare lab, a technology lab, and an atrium connecting the original building to the new south-campus addition. **Attucks is currently the only IPS high school with just one gym.** Completion is expected in **2028**, just over a century after the school opened. Enrolment is about **1,200**, roughly **65 percent Black and 28 percent Hispanic** (Chalkbeat Indiana, 2026a; WFYI, 2026a).

**Put the two numbers side by side and you have this section.** A state whose largest high school gym seats **8,424**. A school that in 1967-68 held **2,394** students on **8.4 acres**. And a **2,400-seat** gym arriving in **2028**. **Those are not rhetorical numbers. They are all cited, and the comparison is yours to make.**

## Sources
- Bamberger, M. (2016, February 23). *The real Hoosiers tale: Crispus Attucks*. Sports Illustrated. https://www.si.com/nba/2016/02/23/crispus-attucks-oscar-robertson-hoosiers-pacers-indiana-high-school
- Chalkbeat Indiana. (2026a, May 6). *Crispus Attucks High School is getting a $44 million upgrade. Here's what's in store.* https://www.chalkbeat.org/indiana/2026/05/06/crispus-attucks-high-school-gets-new-health-lab-and-gym/
- Encyclopedia of Indianapolis. (n.d.-a). *Crispus Attucks High School*. https://indyencyclopedia.org/crispus-attucks-high-school/
- United States v. Board of School Commissioners of the City of Indianapolis, 332 F. Supp. 655 (S.D. Ind. 1971). https://law.justia.com/cases/federal/district-courts/FSupp/332/655/1624629/
- WFYI. (2026a, May 6). *Indy's Crispus Attucks High School to receive new healthcare lab and gym via $44 million expansion*. https://www.wfyi.org/education/2026-05-06/indys-crispus-attucks-high-school-to-receive-new-healthcare-lab-and-gym-via-44-million-expansion`,
      recallContent: [
        {
          prompt: "What structurally distinguishes a gymnasium as a building type, and what makes it a 'fieldhouse'?",
          answer: "A clear-span room: a playing floor with no columns in it, which is the expensive part, wrapped in seating. It becomes a fieldhouse when the seating stops being an afterthought and the building goes free-standing.",
        },
        {
          prompt: "Give Hinkle Fieldhouse's architect, date, capacity, and how long it was the largest basketball arena in the country.",
          answer: "Fermor Spencer Cannon, opened 1928, seating 15,000, the largest basketball arena in the United States until 1950. National Register listed 1983; IHSAA finals from 1928 through 1971; sectionals until 1994.",
        },
        {
          prompt: "Why did New Castle Fieldhouse change rank twice among the largest high school gyms?",
          answer: "A 2019 recount by the Indiana High School Basketball Historical Society reordered the top three and moved it to third; a 2020 renovation raised its capacity from 7,829 to 8,424 and moved it back to first. A ranking is a measurement, and measurements get redone.",
        },
        {
          prompt: "New Castle is reported to have seated 9,325 in 1959-60 and 8,424 today. How do you handle that?",
          answer: "Both can be right. Seats widen, aisles get added, codes change. Quote the year with the capacity, the same discipline course 1 required for displacement figures.",
        },
        {
          prompt: "What is a fieldhouse evidence of, in the beat 2 sense?",
          answer: "What a community chose to spend on. It is a public building for the thing the town does together, effectively a town hall with a basketball court in it, which makes its size a statement about whose assembly is being funded.",
        },
      ],
    },
    {
      slug: "gcl-built-football",
      title: "7 · The football field, and what a state does not build first",
      section: "Section 2 · Built",
      body: `**A gymnasium and a football field are both places a school assembles. They are not the same kind of decision, and Indiana's own dates show it.**

**Two dates, one state.**
- **Basketball.** The IHSAA records its first state tournament in **1911** (IHSAA, n.d.-a).
- **Football.** The IHSAA held its **first football state tournament in 1973**, in three classes, with championship games played at one of the two opponents' home fields. It went to four classes in **1983**, five in **1985**, and six in **2013**. Championship games moved to a single central site in **1984** (IHSAA, n.d.-d; State Line Sports Network, 2022).

**Sixty-two years.** A state that had crowned a basketball champion since before the First World War did not crown a football champion until the year Judge Dillin ordered a remedy in the case you are about to read. **That gap is a fact about what Indiana built and when.**

**Why the building types diverge, in terms you can check.**

| | Gymnasium | Football field |
|---|---|---|
| **Land** | A footprint, usually under two acres including the building | A regulation field plus end zones is over one and a half acres of playing surface alone, before a track, stands, lighting or parking |
| **Season** | Indoor, all winter, weather-proof | Outdoor, autumn, weather-dependent |
| **Other uses** | Graduations, concerts, assemblies, elections, funerals | Fewer, and mostly outdoors |
| **Revenue nights** | Many, in a state with a winter tournament since 1911 | Fewer, in a state with no football tournament until 1973 |

**So the incentive ran one way**, and it ran that way hardest for the schools with the least land. **This is where beat 2 stops being about architecture and becomes about civics.**

**Now apply it to lesson 6's number.** Attucks held **2,394** students on **8.4 acres**. **A regulation football field with any spectator provision is a meaningful fraction of that entire site.** A school on 8.4 acres in a dense city is making a choice about outdoor athletic space that a township school on forty acres never has to make. **The choice is not made by the school. It is made by whoever decided where the school would be and how much land it would get**, which in this case was a school board acting on a 1922 resolution, a state board granting a waiver, a city refusing 54 acres, and a zoning commission refusing a rezoning.

**A rule to carry into any town.** When you look at a school and ask why the athletic plant looks the way it does, **ask about the parcel before you ask about the program.** A school with a stadium had land. A school without one usually did not, and the reason it did not is in a record with a date on it.

## The honest limits of this lesson

**1. This course has not established what athletic facilities Attucks had outdoors.** The site size and the state's formula are documented; the field is not. **Do not fill that gap with an assumption in either direction.** Section 5 tells you which records would settle it.

**2. The 1911-to-1973 gap is real, and its cause is not established here.** It is tempting to say Indiana loved basketball more and therefore built gyms first. That is a plausible reading and it is **not** something this course has sourced to a study. **A dated gap is evidence; a motive is an argument.** Course 1's lesson 13 made exactly this distinction and it applies here.

**3. Football fields are not neutral ground either.** The exclusion story in this course is documented for **IHSAA membership**, which covered all sports, not basketball alone. **When schools were barred from the association until 1942, they were barred from the football tournament that did not yet exist and every other sanctioned competition that did.**

**One thing that is not a limit.** You already know how to test this. Build the chronology. **1911 tournament. 1922 resolution. 1927 opening. 1938 gym. 1942 IHSAA admission. 1949 statute. 1955 championship. 1966 second gym. 1973 first football tournament. 2028 new gym.** Ten dates, one school and one state, and every one of them is cited in this section. **That table is the outline of the essay Section 6 asks you to write.**

## Sources
- Indiana High School Athletic Association. (n.d.-a). *Boys basketball tournament timeline*. https://ihsaapublic.blob.core.windows.net/archive/b-basketball/TournamentTimeline.htm
- Indiana High School Athletic Association. (n.d.-d). *Football state championship records book*. https://www.ihsaa.org/sites/default/files/documents/Football%20Records%20Book_0.pdf
- Indiana High School Athletic Association. (n.d.-b). *Membership history, 1903 to present*. https://www.ihsaa.org/sites/default/files/documents/Membership%20History.pdf
- State Line Sports Network. (2022, October 18). *IHSAA celebrates 50 years of football playoffs: A look back in time*. https://statelinesportsnetwork.net/2022/10/18/ihsaa-celebrates-50-years-of-football-playoffs-a-look-back-in-time/
- United States v. Board of School Commissioners of the City of Indianapolis, 332 F. Supp. 655 (S.D. Ind. 1971). https://law.justia.com/cases/federal/district-courts/FSupp/332/655/1624629/`,
      recallContent: [
        {
          prompt: "What was Indiana's minimum acreage formula for a school site, and what does it require for 2,394 students?",
          answer: "Seven acres for the first 200 students plus one acre for each additional 100. For 2,394 students that is roughly 29 acres: 7 for the first 200 and about 21.9 for the remaining 2,194.",
        },
        {
          prompt: "Give the five facts in the court's footnote about the Attucks site.",
          answer: "The site was 8.4 acres; a waiver was needed from the State Board of Education; the waiver carried a cap of no more than 2,200 students; in 1967-68 the school enrolled 2,394; and those students were 2,393 Black and one white.",
        },
        {
          prompt: "What happened to the two sites proposed for a new, desegregated Attucks?",
          answer: "The City refused to release a 54-acre tract it owned at 38th and White River because Parks wanted it as a nursery, prompting Dillin's line that the City's sense of priorities struck the Court as curious. The board's option at 30th and Guion Road was blocked when the Metropolitan Development Commission denied the rezoning.",
        },
        {
          prompt: "Why is the Metropolitan Development Commission's refusal the best cross-course link in this cluster?",
          answer: "It is the same body course 1 introduced in beat 5, which adopts the comprehensive plan and the zoning ordinance and decides rezonings. Here it is the body that denied a school board the land for a desegregated high school. A zoning decision is a school decision when it is made about a school site.",
        },
        {
          prompt: "Correct the popular claim that Attucks had no gymnasium.",
          answer: "It had a gymnasium from the 1938 addition and a second from 1966. The accurate version is that it had gyms on a site about a third of the state's own minimum for its enrollment, and played its biggest games in Butler Fieldhouse.",
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 3 · Powers  (beat 3: civics, planning, taxes, politics. THE LOAD-BEARING SECTION)
    //
    // Lessons 8 to 13 are built on the PRIMARY OPINIONS, quoted directly:
    //   * United States v. Board of School Commissioners, 332 F. Supp. 655 (S.D. Ind. 1971)
    //   * United States v. Board of School Commissioners, 503 F.2d 68 (7th Cir. 1974)
    //   * Milliken v. Bradley, 418 U.S. 717 (1974)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "gcl-powers-attendance-zone",
      title: "8 · Instrument one: the attendance zone, and the optional zone",
      section: "Section 3 · Powers",
      body: `**This is the section the course exists for.** Course 1 taught five instruments that take buildings: designation, eminent domain, the highway alignment, institutional land assembly, and the redrawing of a jurisdiction. **This section teaches the instruments that take a population.** They are quieter, cheaper, and they leave just as much paper.

**Definition, unchanged from course 1.** An **instrument** is a specific legal power, exercised by a specific body, under a specific statute, leaving a specific document. **The last clause is what makes history researchable.**

**Instrument one is the smallest one, and it does the most work: the attendance zone.** A district decides which addresses feed which school. That decision is a line on a map, adopted by a board, in a meeting, with minutes. **It is not a law. It is an administrative act, which is exactly why it is used.** Changing a state statute is hard and public. Redrawing a feeder boundary is a routine agenda item.

## The number that should end most arguments

Judge S. Hugh Dillin, sitting in the Southern District of Indiana, made this finding on **18 August 1971**:

> "According to the evidence, there have been approximately **350 boundary changes** in the system since 1954. **More than 90% of these promoted segregation**." (*United States v. Board of School Commissioners*, 1971, p. 668.)

**Sit with that.** Not "the schools remained segregated." Not "outcomes were unequal." **A federal judge, after trial, found that in seventeen years a school system made about 350 boundary changes and more than nine in ten of them made segregation worse.** Segregation on that record is not weather. It is a work product.

**A correction this course owes you, and it is a lesson in itself.** You will see this finding quoted as "**90 percent of 360** boundary changes," including in the Encyclopedia of Indianapolis's entry on school desegregation (Encyclopedia of Indianapolis, n.d.-b). **The opinion says "approximately 350."** The difference is trivial to the argument and it is not trivial to your method. **A secondary source rounded, or transcribed, or was working from a different passage, and the primary document is right there to check.** Quote the opinion. Cite the page. **When a good source and a better source disagree, use the better one and say that you did.**

## The move to learn by name: the optional attendance zone

**An "optional zone" is an area whose students may choose between two schools.** It sounds like freedom. Dillin's findings show what it actually did.

> "In some instances **optional attendance zones** between white and Negro schools were adopted in racially integrated neighborhoods." (1971, p. 664.)

> "During the post-1954 period, the Board perpetuated segregation through the use of optional attendance zones. Specifically, in areas of racially mixed residential patterns students were given options between predominantly Negro and predominantly white elementary schools, and where entire elementary districts covered both Negro and white neighborhoods, graduates were given options between predominantly Negro and predominantly white high schools." (1971, p. 666.)

> "Students in Negro elementary schools were given options to Crispus Attucks when other, predominantly white high schools were closer and more accessible. **White students in optional zones almost always attended white schools**." (1971, p. 666.)

**That is the mechanism in three sentences.** Draw an optional zone precisely where the neighborhoods mix. Offer a choice. **Individual choices then do the sorting that an assignment rule would have had to do openly**, and the district's hands look clean because it assigned nobody.

**A rule that transfers to any district, any decade.** **When a rule is optional, ask who exercises the option and in which direction.** A policy that is facially neutral and statistically one-directional is doing work, and the direction is the evidence.

## The transfer policy, which is the same trick in a different file

Two findings from the same opinion, both in footnotes, both devastating:

> One reason for a transfer to be given "special consideration" was **if a pupil had an older sibling attending the preferred high school. This operated as a grandfather clause permitting white students to escape Attucks, and remained in effect through March, 1970.** (1971, p. 685 n.52.)

> "Furthermore, **proximity per se was not a legitimate reason for transfer, unless a student lived more than two miles from the assigned high school; this prevented Negro students who lived within two miles of Attucks from transferring** to other high schools which were closer to their residences." (1971, p. 685 n.52.)

**Read those two rules together.** A sibling rule lets you out. A distance rule keeps you in. **Neither mentions race. Both are race policy**, and the court said so.

## The rest of the toolkit, in the court's own list

Dillin cataloged the techniques the board used after 1954: "attendance zone boundary changes, the construction of additions, the construction of new schools, the provision of transportation or the adjustment of existing transportation, alteration in grade structures, and the location or relocation of special education classes in elementary schools. **Often these techniques were combined**" (1971, p. 665).

**Six instruments, and the sixth is special education class placement.** The court found the board "has shifted these classes in some instances and failed to shift them in other instances, **always with a resulting increase in racial segregation**" (1971, p. 666).

**And one more, which is beat 2 again.** Attucks lost high school students in the 1950s as Black students were finally permitted to attend closer schools, with no offsetting assignment of white students in. The building emptied. **So the board filled it with elementary students** from overcrowded all-Black elementary schools, and the court names them: Schools 63, 17, 23, 24, 40 and 4, "none of which have ever been less than 96.5% Negro" (1971, p. 666). **A high school building used as an overflow annex for segregated elementary schools is an architecture decision and an assignment decision at the same time.**

## What the numbers did

> "Since 1954 the percentage of Negro students in the system has increased from **20 to 36**, and the segregation has likewise increased. The number of **90% or more Negro schools has risen from thirteen to twenty-five**. In 1954-55, **85.9%** of the Negro elementary students were in majority Negro schools; in 1968-69, the percentage had risen to **88.2**. In 1968-69 **Crispus Attucks was 99.8% Negro**." (1971, p. 668.)

**A system that got more diverse got more segregated.** Those are not in tension. They are the same finding, and the instrument that produced it is a line on a map.

## Sources
- Encyclopedia of Indianapolis. (n.d.-b). *School desegregation*. https://indyencyclopedia.org/school-desegregation/
- United States v. Board of School Commissioners of the City of Indianapolis, 332 F. Supp. 655 (S.D. Ind. 1971). https://law.justia.com/cases/federal/district-courts/FSupp/332/655/1624629/`,
      recallContent: [
        {
          prompt: "Give Indiana's two tournament start dates and the gap between them.",
          answer: "The IHSAA records its first state basketball tournament in 1911 and held its first football state tournament in 1973, in three classes. Sixty-two years.",
        },
        {
          prompt: "Name three ways a gymnasium and a football field differ as investments.",
          answer: "Land (a gym footprint versus over an acre and a half of playing surface before track, stands and parking), season and weather dependence, and the number of other community uses and revenue nights the building supports.",
        },
        {
          prompt: "Who actually made the choice about Attucks's outdoor athletic space?",
          answer: "Not the school. A school board acting on a 1922 resolution, a state board granting an acreage waiver, a city refusing to release 54 acres, and a zoning commission refusing a rezoning.",
        },
        {
          prompt: "State the rule for reading any school's athletic plant.",
          answer: "Ask about the parcel before you ask about the program. A school with a stadium had land; a school without one usually did not, and the reason is in a dated record.",
        },
        {
          prompt: "Why will this course not say Indiana built gyms first because it loved basketball more?",
          answer: "Because a dated gap is evidence and a motive is an argument. The 1911 to 1973 gap is sourced; the reason for it is not sourced here.",
        },
      ],
    },
    {
      slug: "gcl-powers-district-line",
      title: "9 · Instrument two: the district line, and Indiana's coterminous rule",
      section: "Section 3 · Powers",
      body: `**An attendance zone moves students inside a district. A district line decides which students a district has at all.** It is the bigger instrument by an order of magnitude, and it is the one this course is named for.

**Indiana's default rule was elegant, and it is the thing to understand first.** Dillin's findings:

> "Historically, it was well established by the common law of the State that whenever an incorporated city or town expanded its corporate limits, the school city or town succeeded to the powers and duties of the township trustee with respect to the administration of the public schools. **In other words, the boundaries of a school city and of a civil city were coterminous.**" (*United States v. Board of School Commissioners*, 1971, p. 675.)

The Seventh Circuit records that this rule was "finally recognized by statute in **1931**" (*United States v. Board of School Commissioners*, 1974, p. 71).

**Say what that means in plain terms.** In Indiana, historically, **the city and its school district were the same shape.** Annex land into the city and the school district followed automatically. **One boundary, one electorate, one tax base, one school system.** A city could not grow its tax base and leave its schools behind, because the law did not let the two come apart.

## Then the law let them come apart, and it did it for one county

> "However, in **1961** the General Assembly crippled this policy by an Act which provided that, **with respect only to Marion County**, the extension of the boundaries of a civil city by a civil annexation would work only **a prima facie extension** of the boundaries of the school city, and render such school city extension **subject to a separate remonstrance** by the losing school corporation." (1971, p. 676.)

**Three things in that sentence deserve their own line.**
1. **"With respect only to Marion County."** A statewide legislature wrote a rule for one county. You saw this technique in course 1, where the Unigov bill applied to any Indiana city of 250,000 or more, which in 1969 meant exactly one. **A jurisdictional carve-out is how you write a law for one place while appearing to write a general rule.**
2. **"Prima facie."** The school extension is now presumed rather than automatic, which means it can be rebutted.
3. **"Subject to a separate remonstrance."** **A remonstrance is a formal objection filed by affected parties that can block or delay an action.** Adding a remonstrance right to a step that used to be automatic does not forbid anything. **It just makes the thing stoppable, by whoever shows up.**

**Then a 1969 act tightened it further**, limiting the School City of Indianapolis to enlarging its territory by agreement with the losing school corporation or by unilateral annexation, **both subject to remonstrance**, and canceling pending annexations by legislative fiat (1971, pp. 676-677).

**And here is the court's conclusion about the pair of them:**

> "the effect of the **1961 and 1969** Acts of the General Assembly referred to in this section **may well have been to retard desegregation and to promote segregation**. In other words, **under previous Indiana law, which still applies to all cities except Indianapolis**, civil annexation would automatically carry school annexation with it ... Under the present law, if valid, the ability of the Board to expand its jurisdiction coterminous with the consolidated city, or for that matter to expand it at all, **is likewise virtually nil**, as a practical matter." (1971, p. 677.)

**Read the hedge, because it is a model.** The judge wrote "**may well have been**." He is stating an effect he considers probable and declining to assert it as a finding of intent. **You should write like that.** Course 1's lesson 13 made the same demand: distinguish what the record establishes from what it suggests.

## Why this is the course's civic question

The question this course carries is: **how do school district lines make a school's population?**

**The Indiana answer, in one paragraph, all cited.** Under the old rule, a city's growth carried its schools with it, so a growing city's schools grew with it and stayed one system. In 1961 and 1969 the legislature broke that link, **for Marion County only**. Then in 1969 the Unigov statute expanded the city of Indianapolis to nearly the whole county **while expressly leaving the school district where it was**. The result is the thing you can still see on a map: **a city boundary and a school boundary that are different shapes, with different electorates, over the same ground.**

**Every consequence in the rest of this course follows from those two shapes not matching.** Who votes for the school board. Which property is inside which taxing district. Which children a district must educate. Which children a court may order it to educate. **All of it.**

**The transferable move.** In any American metropolitan area, ask: **is the school district boundary the same as the municipal boundary? If not, when did they diverge, under what act, and who was inside each one on that date?** That question has an answer in every state, it is usually a statute you can look up, and it explains more than any single school's history will.

## Sources
- United States v. Board of School Commissioners of the City of Indianapolis, 332 F. Supp. 655 (S.D. Ind. 1971). https://law.justia.com/cases/federal/district-courts/FSupp/332/655/1624629/
- United States v. Board of School Commissioners of the City of Indianapolis, 503 F.2d 68 (7th Cir. 1974). https://www.courtlistener.com/opinion/321692/united-states-of-america-donny-brurell-buckley-intervening-v-board-of/`,
      recallContent: [
        {
          prompt: "Quote Dillin's 1971 finding about boundary changes, and note the correction this course makes.",
          answer: "'According to the evidence, there have been approximately 350 boundary changes in the system since 1954. More than 90% of these promoted segregation.' The widely repeated version says 360; the opinion says approximately 350. Use the primary source and say you did.",
        },
        {
          prompt: "What is an optional attendance zone, and what did the court find it did?",
          answer: "An area whose students may choose between two schools. Drawn precisely where neighborhoods mixed, it let individual choices do the sorting: white students in optional zones almost always attended white schools, and Black students were given options to Attucks even when whiter schools were closer.",
        },
        {
          prompt: "Give the two transfer rules the court found, and why neither mentions race.",
          answer: "A sibling preference operated as a grandfather clause letting white students escape Attucks, in effect through March 1970. Proximity was not a legitimate reason for transfer unless a student lived more than two miles away, which kept Black students within two miles of Attucks from transferring. A rule that lets you out and a rule that keeps you in, both facially neutral.",
        },
        {
          prompt: "Name the six techniques the court catalogued for post-1954 segregation.",
          answer: "Attendance zone boundary changes, construction of additions, construction of new schools, provision or adjustment of transportation, alteration of grade structures, and the location or relocation of special education classes. Often combined.",
        },
        {
          prompt: "What is the rule to carry from the optional zone finding?",
          answer: "When a rule is optional, ask who exercises the option and in which direction. A policy that is facially neutral and statistically one-directional is doing work, and the direction is the evidence.",
        },
      ],
    },
    {
      slug: "gcl-powers-unigov-carveout",
      title: "10 · The carve-out: what Unigov merged, and what it deliberately did not",
      section: "Section 3 · Powers",
      body: `**Course 1 introduced Unigov as instrument five and then showed it could not have caused the Avenue's clearance, because every instrument that took those buildings predates 1 January 1970. This is the lesson where Unigov does its actual work.**

**The statute, and the court's description of it.** The Seventh Circuit, in 1974:

> "In **1969**, after this suit had been commenced, the civil governments of the City of Indianapolis and of Marion County were consolidated into a unified, metropolitan city government by the so-called **Uni-Gov Act, which expressly provides that the Indianapolis school district would not be affected by the expansion of the city**." (*United States v. Board of School Commissioners*, 1974, p. 71.)

> "In other words, **the school district (or School City) of Indianapolis was confined to an area in the central part of the new Uni-Gov, where it is surrounded by eight township school systems and by two additional city school corporations (Beech Grove and Speedway City), all operating independently within the new unified City of Indianapolis and within Marion County**." (1974, p. 71.)

**That second passage is the whole course.** Read it slowly and picture it. **A city grew to fill a county. Its school district stayed a hole in the middle of the county, ringed by ten independent school systems that are inside the same city.**

**The facts course 1 established, which you need here.** Unigov was passed by the Indiana General Assembly in **1969**, took effect **1 January 1970**, and is "the only major post-war consolidation to be accomplished without a voter referendum." The statute applied to any Indiana city of **250,000 or more**, which in 1969 meant exactly one; the threshold has since been raised to **600,000**, preventing any other Indiana city doing the same thing. The Black share of the city population fell immediately **from about 27 percent of the old city to about 17 percent of the consolidated city**, and did not recover to pre-Unigov proportions **until the 2010 census** (Wachter, 2014).

## Why the schools were left out, in the participants' own words

**This is not inference. The people who did it said so at the time.**

Mayor **Richard Lugar** said the 162-page bill would die in the General Assembly if schools were included, and acknowledged that "a good number of people really wanted to keep at least their particular school segregated" (Chalkbeat Indiana, 2016).

**Landrum Shields**, the president of the Indianapolis school board, said: "to have included schools in Unigov would have raised the spectre of racial integration...and would have meant instant death for the plan. **We cooperated with the Mayor by not killing Unigov**" (Owen & Willbern, as cited in Wachter, 2014, p. 98).

**The exclusion was the price of passage, stated at the time, by the people who paid it.**

## The numbers on each side of the line in 1969

| | Black share of enrollment, 1969 |
|---|---|
| **Township school districts** | about **2.6 percent** |
| **Indianapolis Public Schools** | **more than one third** |

(Chalkbeat Indiana, 2016.)

**And the trend inside IPS, from the Seventh Circuit's own recital:** nonwhite enrollment was **18.9 percent in 1950**, **26 percent in 1960**, **35.9 percent in 1970**, and **41.1 percent** at the time of the 1973 trial (*United States v. Board of School Commissioners*, 1974, p. 74).

## The finding that makes this a mechanism rather than a coincidence

Judge Dillin, in the 1973 remedy phase, considered whether the surrounding districts had themselves discriminated. His answer, quoted by the Seventh Circuit:

> "**There was no evidence that any of the added defendant school corporations have committed acts of de jure segregation directed against Negro students living within their respective borders. In fact, the evidence shows that, with a few exceptions, none of the added defendants have had the opportunity to commit such overt acts because the Negro population residing within the borders of such defendants ranges from slight to none**." (368 F. Supp. at 1203, as quoted in *United States v. Board of School Commissioners*, 1974, p. 78.)

**Read that twice.** The townships had not discriminated against Black students **because they had almost no Black students to discriminate against.** The boundary had already done the work. **A district line can produce a segregated system without a single discriminatory act inside any district**, and that sentence is the cleanest statement of it in American law.

**This is the answer to the course's civic question.** How do school district lines make a school's population? **By deciding, before anyone is assigned to anything, who is inside.** Every downstream policy is then applied to a population the line already selected.

## What else Unigov did not merge

- **The school districts.** Not consolidated.
- **Incorporated cities and towns over 5,000**, leaving **Beech Grove, Lawrence, Southport and Speedway** independent.
- **The nine townships**, which continue as separate governments and are the territorial basis for eight of the county's eleven school districts.
- Several municipal corporations, and the county court system.
- The act also **barred annexation into neighboring counties**, a restriction needed to get the votes.

**Fifty separate and overlapping governmental units remain within Marion County, with more than 61 taxing districts** (Wachter, 2014; Encyclopedia of Indianapolis, n.d.-d).

**Marion County still has eleven school districts today:** Indianapolis Public Schools, the eight township corporations (Decatur, Franklin, Lawrence, Perry, Pike, Warren, Washington and Wayne), plus Beech Grove and Speedway. **That is the same eleven the Seventh Circuit described in 1974**, which is a remarkable thing for a boundary to survive: fifty-six years, one Supreme Court decision, a federal desegregation order, thirty-five years of busing, and it is still the same eleven.

## Sources
- Chalkbeat Indiana. (2016, August 3). *How racial bias helped turn Indianapolis into one city with 11 school districts*. https://www.chalkbeat.org/indiana/2016/8/3/21098810/how-racial-bias-helped-turn-indianapolis-into-one-city-with-11-school-districts/
- Encyclopedia of Indianapolis. (n.d.-d). *Structure of Unigov*. https://indyencyclopedia.org/structure-of-unigov/
- United States v. Board of School Commissioners of the City of Indianapolis, 503 F.2d 68 (7th Cir. 1974). https://www.courtlistener.com/opinion/321692/united-states-of-america-donny-brurell-buckley-intervening-v-board-of/
- Wachter, J. (2014, May). *40 years after Unigov: Indianapolis and Marion County's experience with consolidated government*. The Abell Foundation. https://abell.org/wp-content/uploads/2022/02/ec-unigov514.pdf`,
      recallContent: [
        {
          prompt: "What was Indiana's historic coterminous rule, and when was it recognised by statute?",
          answer: "When a city expanded its corporate limits, the school city succeeded to the township trustee's school powers, so the boundaries of a school city and a civil city were the same. The Seventh Circuit records the rule as finally recognized by statute in 1931.",
        },
        {
          prompt: "What did the 1961 Act do, and to which county did it apply?",
          answer: "With respect only to Marion County, it made a civil annexation only a prima facie extension of the school city boundary, and made that extension subject to a separate remonstrance by the losing school corporation.",
        },
        {
          prompt: "What is a remonstrance, and why does adding one matter so much?",
          answer: "A formal objection filed by affected parties that can block or delay an action. It forbids nothing; it makes an automatic step stoppable by whoever shows up.",
        },
        {
          prompt: "Quote the court's conclusion about the 1961 and 1969 acts, including its hedge.",
          answer: "That their effect 'may well have been to retard desegregation and to promote segregation,' and that under previous Indiana law, which still applied to every city except Indianapolis, civil annexation would automatically carry school annexation with it. The hedge states a probable effect without asserting intent.",
        },
        {
          prompt: "What is the transferable question to ask about any American metro area?",
          answer: "Is the school district boundary the same shape as the municipal boundary? If not, when did they diverge, under what act, and who was inside each one on that date?",
        },
      ],
    },
    {
      slug: "gcl-powers-the-lawsuit",
      title: "11 · Instrument three: the lawsuit, and the case that outlived the children in it",
      section: "Section 3 · Powers",
      body: `**A lawsuit is an instrument too**, and it fits the definition exactly: a specific legal power (a federal court's remedial authority), exercised by a specific body (the Southern District of Indiana), under a specific statute (Title IV of the Civil Rights Act of 1964, 42 U.S.C. section 2000c-6, and the Fourteenth Amendment), leaving a specific document (a published opinion you can read tonight).

**It is also the slowest instrument in this course.** The United States filed on **31 May 1968**. Court-ordered busing between districts ended in **2016**. A child who started kindergarten the week the complaint was filed could have retired before the remedy did.

## The chronology, and every line of it is dated

| Date | What happened |
|---|---|
| **31 May 1968** | The United States sues the Board of School Commissioners under Title IV of the Civil Rights Act of 1964 |
| **12 to 21 July 1971** | First trial before Judge S. Hugh Dillin |
| **18 August 1971** | Dillin finds IPS guilty of unlawful segregation: **de jure**, not de facto. Orders Crispus Attucks High School desegregated, and orders the State of Indiana and the other Marion County districts added as defendants |
| **1 February 1973** | The Seventh Circuit affirms |
| **20 July 1973** | After a second trial, Dillin imputes the violation to **the State of Indiana** and holds that a remedy requires crossing district lines. Orders each defendant district to receive Black students equal to **5 percent** of its prior-year enrollment |
| **25 July 1974** | **Milliken v. Bradley** is decided. Lesson 12 is about that day |
| **21 August 1974** | The Seventh Circuit reverses the remedy **beyond** the Uni-Gov line, vacates and remands the remedy **inside** it, and affirms everything else |
| **1 August 1975** | On remand, Dillin holds Milliken does **not** bar a Marion County remedy, because Unigov, by not extending IPS boundaries when it extended the city's, inhibited desegregation |
| **16 July 1976** | The Seventh Circuit affirms |
| **25 January 1977** | The Supreme Court vacates and remands in light of *Washington v. Davis* and *Arlington Heights*: the plaintiffs must now prove discriminatory **intent**, not just effect |
| **11 July 1978** | Dillin finds the intent behind Unigov's restriction of IPS boundaries "perfectly obvious," and finds public housing siting kept Black families inside IPS, depriving **at least 7,000 pupils** of a desegregated education |
| **9 July 1979** | The court adopts **Plan A**: transfer of approximately **6,125** Black students |
| **25 April 1980** | The Seventh Circuit affirms the county-wide remedy and authorises transfers **into** IPS as well as out |
| **6 October 1980** | The Supreme Court declines further review |
| **17 July 1981** | The court holds **the State of Indiana** must pay for the whole remedy, because the State alone bore the liability |
| **19 August 1981** | Busing begins. Approximately **5,500** Black students to six township districts |
| **1984** | Parents of bused students win the right to **vote and run** in the township school board elections that now govern their children |
| **25 June 1998** | Dillin approves a settlement: a **13-year phase-out** starting 1999 for some townships and 2004 for others |
| **2016** | Inter-district busing ends |

(Encyclopedia of Indianapolis, n.d.-e; *United States v. Board of School Commissioners*, 1971, 1974.)

## Four things in that table that most retellings get wrong

**1. The finding was against the STATE, not only the city.** Dillin imputed the violation to Indiana in July 1973, and in 1981 held Indiana liable for the cost of the entire county-wide remedy. **When a school board is a creature of a state, a state can be the defendant**, and who pays is a finding in its own right.

**2. The busing that actually ran went ONE WAY.** Black students were transported **out** of IPS to township districts. The Seventh Circuit did not authorise transfers **into** IPS until **April 1980**, and the buses that started in August 1981 carried Black children outward (Encyclopedia of Indianapolis, n.d.-e). **A remedy can be lawful, effective on its own terms, and asymmetric in who bears its inconvenience, all at once.** Say all three.

**3. The 1984 voting ruling is the civics lesson hiding in the docket.** Children were assigned to township districts. Their parents did not live in those townships, so they could not vote for the boards that ran their children's schools. **A court had to fix that separately, three years after the buses started.** Representation does not travel with a student automatically. It has to be granted, and somebody has to ask.

**4. The case cost IPS buildings and teachers.** Meeting the intra-district orders required closing **ten elementary schools and Shortridge High School**, with **525 teachers** dismissed (Encyclopedia of Indianapolis, n.d.-e). **A remedy has a budget and a payroll**, and pretending otherwise is how the argument about desegregation gets conducted badly by everyone.

## The sentence a federal appellate judge wrote in 1997

Twenty-nine years into the case, the Seventh Circuit summarized the whole thing in one sentence:

> "in 1969, when by a law known as 'Uni-Gov' the Indiana legislature extended the boundaries of the City of Indianapolis to make them coterminous with those of Marion County, **the boundaries of IPS were deliberately not extended, in order to prevent black public schoolchildren from being in the same school district as white ones**." (*United States v. Board of School Commissioners*, 1997, p. 509.)

**That is a United States Court of Appeals stating it as settled fact.** Not an advocate, not a documentary, not this course. **When you can cite a court's own recital instead of a characterisation, do.**

The same opinion records the district judge's estimate that but for the violations, "**7,000 more black schoolchildren would today live in the suburbs to which they are being bused and 7,000 fewer in the inner city**" (1997, p. 510). **Notice what kind of number that is.** It is a counterfactual: an estimate of a world that did not happen. **Counterfactual estimates are legitimate and they are not measurements**, and you label them.

## What the case did not do

**It did not merge the districts.** Marion County still has eleven school corporations. **It did not survive its own success**: enrollment in IPS fell from about **108,000 students in 1971** to about **47,000 by the early 1990s** and to roughly **21,000** in district-run schools today (Chalkbeat Indiana, 2025b). **And it did not settle the argument**, which is why Section 5 sends you to a decision being taken about these same boundaries this year.

**One judgment this course will not make.** Whether the remedy was worth it is a question about values, and the record here does not settle it. The Encyclopedia's own summary reports an assessment that bused students received improved educational opportunities while "the neighborhoods and schools from which they were bused suffered as a result" (Encyclopedia of Indianapolis, n.d.-e). **That is a contested assessment with an owner, and it is reported here as one.**

## Sources
- Chalkbeat Indiana. (2025b, December 19). *Why the fractured Indianapolis school system faces a power shakeup*. https://www.chalkbeat.org/indiana/2025/12/19/how-desegregation-and-charters-led-to-indianapolis-local-education-alliance/
- Encyclopedia of Indianapolis. (n.d.-e). *U.S. v. Board of School Commissioners*. https://indyencyclopedia.org/u-s-v-board-of-school-commissioners/
- United States v. Board of School Commissioners of the City of Indianapolis, 332 F. Supp. 655 (S.D. Ind. 1971). https://law.justia.com/cases/federal/district-courts/FSupp/332/655/1624629/
- United States v. Board of School Commissioners of the City of Indianapolis, 503 F.2d 68 (7th Cir. 1974). https://www.courtlistener.com/opinion/321692/united-states-of-america-donny-brurell-buckley-intervening-v-board-of/
- United States v. Board of School Commissioners of the City of Indianapolis, 128 F.3d 507 (7th Cir. 1997). https://caselaw.findlaw.com/court/us-7th-circuit/1233296.html`,
      recallContent: [
        {
          prompt: "Quote the Seventh Circuit's description of what Unigov did to the school district.",
          answer: "The Uni-Gov Act 'expressly provides that the Indianapolis school district would not be affected by the expansion of the city,' so the school district 'was confined to an area in the central part of the new Uni-Gov, where it is surrounded by eight township school systems and by two additional city school corporations (Beech Grove and Speedway City), all operating independently within the new unified City of Indianapolis and within Marion County.'",
        },
        {
          prompt: "In the participants' own words, why were schools excluded from Unigov?",
          answer: "Mayor Lugar said the bill would die if schools were included and acknowledged that many people wanted to keep their particular school segregated. Board president Landrum Shields said including schools would have raised the spectre of racial integration and meant instant death for the plan, adding 'We cooperated with the Mayor by not killing Unigov.'",
        },
        {
          prompt: "What were the Black enrolment shares on each side of the line in 1969?",
          answer: "The township school districts were about 2.6 percent Black; Indianapolis Public Schools enrolled more than one third Black students.",
        },
        {
          prompt: "What did Judge Dillin find about whether the surrounding districts had themselves discriminated, and why is it the key sentence?",
          answer: "That there was no evidence any added defendant had committed acts of de jure segregation, and that with few exceptions none had had the opportunity because the Black population inside their borders ranged from slight to none. A district line can produce a segregated system without a single discriminatory act inside any district.",
        },
        {
          prompt: "How many school districts does Marion County have today, and how does that compare with 1974?",
          answer: "Eleven: IPS, eight township corporations (Decatur, Franklin, Lawrence, Perry, Pike, Warren, Washington, Wayne), plus Beech Grove and Speedway. The same eleven the Seventh Circuit described in 1974.",
        },
      ],
    },
    {
      slug: "gcl-powers-milliken",
      title: "12 · Milliken v. Bradley: the day the district line became a wall",
      section: "Section 3 · Powers",
      body: `**On 25 July 1974 the Supreme Court of the United States decided a Detroit case, 5 to 4, and changed what a school district boundary means everywhere in the country.** This lesson is about that decision, because you cannot understand the Indianapolis result without it.

## The facts, briefly and without embellishment

Detroit's schools were found by the district court to be unlawfully segregated, and the State of Michigan was implicated in it. The district court concluded that a remedy confined to Detroit could not work, and ordered a metropolitan plan covering Detroit **plus 53 of the 85 outlying suburban school districts.** Detroit's own enrollment in 1970 was roughly **63.6 percent** Black and **34.8 percent** white, out of about **289,763** students (*Milliken v. Bradley*, 1974).

**Hold that structure in your head, because it is the Indianapolis structure.** One central district, heavily Black, with a ring of separate, heavily white districts around it, and a judge who concludes that the ring is the reason a remedy inside the center cannot work.

## What the Court held, in its own words

> "**Before the boundaries of separate and autonomous school districts may be set aside by consolidating the separate units for remedial purposes or by imposing a cross-district remedy, it must first be shown that there has been a constitutional violation within one district that produces a significant segregative effect in another district.**" (*Milliken v. Bradley*, 1974, pp. 744-745.)

> "**Specifically it must be shown that racially discriminatory acts of the state or local school districts, or of a single school district have been a substantial cause of inter-district segregation. Thus an inter-district remedy might be in order where the racially discriminatory acts of one or more school districts caused racial segregation in an adjacent district, or where district lines have been deliberately drawn on the basis of race.**" (*Milliken v. Bradley*, 1974, p. 745, as quoted in *United States v. Board of School Commissioners*, 1974, p. 82.)

And the reason the Court gave for the rule:

> "**No single tradition in public education is more deeply rooted than local control over the operation of schools; local autonomy has long been thought essential both to the maintenance of community concern and support for public schools and to quality of the educational process.**" (*Milliken v. Bradley*, 1974.)

## What that actually does, stated without spin

**Before Milliken**, a federal court that found unlawful segregation in a city system could, at least in principle, reach for the whole metropolitan area to fix it. **After Milliken**, it cannot, unless the plaintiffs prove something specific: that the segregation crossed the line **because somebody made it cross**, by an act, in one or more districts, or by drawing the line itself on the basis of race.

**The district boundary becomes the default limit of the remedy.** Not a formality. **A wall.** And the wall is defended by a value the Court names explicitly and that most Americans do in fact hold: local control of schools.

**This course will not caricature that.** Local control is a real good. Small districts are more answerable to the people in them, and a parent can attend a school board meeting in a way she cannot attend a federal court hearing. **The question Milliken settles is not whether local control is valuable. It is what happens when a local boundary and a constitutional violation are the same object**, and the Court's answer was that the boundary presumptively wins.

## A quotation this course does not have, and says so

You will find the closing lines of Justice Marshall's dissent quoted everywhere, and they are moving. **This course does not quote them, because the full-text sources read for this lesson did not carry the dissents in full, and a quotation you have not seen in the document you actually read is a quotation you do not have.** The opinions consulted show separate dissents by Justices Douglas, White and Marshall. **If you want the dissent, read the United States Reports at volume 418, page 717, and quote it from there with a page number.** Doing that yourself is a better exercise than accepting it from this course.

## Why this course puts Milliken next to Unigov

**Because Milliken's own escape clause names exactly what Indianapolis had.** Read the standard again: an inter-district remedy might be in order "**where district lines have been deliberately drawn on the basis of race.**"

In most American metropolitan areas, a plaintiff cannot show that. District lines are old, they follow townships and counties, and the record for why they run where they do is thin or absent. **Indianapolis is different, and the difference is a dated statute.** In 1969 the General Assembly moved the city line and expressly left the school line where it was, and the mayor and the school board president explained why at the time (lesson 10).

**So the Indianapolis plaintiffs had the one thing Milliken demands: a decision, on the record, about the line itself.** That is why the Seventh Circuit, applying Milliken in **August 1974**, did two different things in one paragraph:

> "In accordance with **Milliken v. Bradley**, we **reverse** the district court's findings, conclusions, orders and rulings insofar as they pertain to a metropolitan remedy **beyond** the Uni-Gov boundaries; insofar as they pertain to a remedy **within** the boundaries of Uni-Gov, we **vacate** those rulings and **remand** for further proceedings consistent with that decision. **The district court should determine whether the establishment of the Uni-Gov boundaries without a like reestablishment of IPS boundaries warrants an inter-district remedy within Uni-Gov** in accordance with Milliken." (*United States v. Board of School Commissioners*, 1974, p. 84.)

**Read the geography of that ruling.** The nine adjacent-county districts are out, because nothing was shown about them. **The eight townships and two cities inside Uni-Gov stay in play, because the Uni-Gov line itself is the alleged act.** The wall Milliken built has a door in it, and Indiana's own legislature had left the key in the lock.

## The outcome, and the honest scale of it

On remand Dillin held that Milliken did not bar a Marion County remedy, precisely because Unigov had not extended IPS boundaries when it extended the city's (Encyclopedia of Indianapolis, n.d.-e). After a further trip to the Supreme Court on the question of **intent**, he found that intent "perfectly obvious" in 1978, and buses ran from 1981 to 2016.

**Indianapolis is one of a small number of American metropolitan areas where an inter-district school desegregation remedy survived Milliken and was actually carried out.** The others usually named are **New Castle County, Delaware** (*Evans v. Buchanan*), where a three-judge court ordered an inter-district plan for Wilmington and its suburbs, and **Jefferson County, Kentucky**, where the Louisville city and county systems merged in 1975 under state board action and a federal court order. **Do not read that list as long.** Detroit's plan covered 53 suburban districts and was struck down. **The general rule is Milliken. Indianapolis is the exception, and it is an exception only because a legislature wrote the evidence down.**

## The transferable lesson, which is the point of this section

**A boundary is only a wall until somebody produces the minutes of the meeting where it was drawn.** Milliken did not make district lines untouchable. It made them **presumptively** untouchable, and told plaintiffs exactly what would rebut the presumption. **Then it made that proof extremely hard to assemble**, which is a different thing from making it impossible, and the difference is a research problem.

**That is the skill this whole course is teaching.** Find the act. Find the date. Find the body. Find the document.

## Sources
- Encyclopedia of Indianapolis. (n.d.-e). *U.S. v. Board of School Commissioners*. https://indyencyclopedia.org/u-s-v-board-of-school-commissioners/
- Evans v. Buchanan, 447 F. Supp. 982 (D. Del. 1978). https://law.justia.com/cases/federal/district-courts/FSupp/447/982/1620310/
- Milliken v. Bradley, 418 U.S. 717 (1974). https://caselaw.findlaw.com/court/us-supreme-court/418/717.html
- Newburg Area Council, Inc. v. Board of Education of Jefferson County, 583 F.2d 827 (6th Cir. 1978). https://openjurist.org/583/f2d/827/newburg-area-council-inc-v-board-of-education-of-jefferson-county-kentucky
- United States v. Board of School Commissioners of the City of Indianapolis, 503 F.2d 68 (7th Cir. 1974). https://www.courtlistener.com/opinion/321692/united-states-of-america-donny-brurell-buckley-intervening-v-board-of/`,
      recallContent: [
        {
          prompt: "Why does this course call a lawsuit an instrument, and how long did this one run?",
          answer: "Because it fits the definition: a specific legal power, exercised by a specific body, under a specific statute, leaving a specific document. It was filed 31 May 1968 and the inter-district busing it produced ended in 2016.",
        },
        {
          prompt: "Who was ultimately held liable, and who paid for the remedy?",
          answer: "The State of Indiana. Dillin imputed the violation to the State in July 1973, and in July 1981 held that Indiana must fund the entire Marion County-wide remedy because the State alone bore the liability.",
        },
        {
          prompt: "In which direction did the busing actually run, and when was the other direction authorised?",
          answer: "One way, out of IPS to the township districts, beginning 19 August 1981 with about 5,500 Black students. The Seventh Circuit did not authorise transfers into IPS until April 1980, and the implemented remedy still ran outward.",
        },
        {
          prompt: "What did the 1984 ruling about township school board elections establish, and why does it matter?",
          answer: "That parents of bused students could vote and run in the township school board elections governing their children's schools. Representation does not follow a student automatically; it had to be granted, three years after the buses started.",
        },
        {
          prompt: "Quote the Seventh Circuit's 1997 one-sentence summary of what Unigov did.",
          answer: "That in 1969, when the Uni-Gov law extended the City of Indianapolis boundaries to be coterminous with Marion County, the boundaries of IPS were deliberately not extended, in order to prevent Black public schoolchildren from being in the same school district as white ones.",
        },
      ],
    },
    {
      slug: "gcl-powers-test-the-spine",
      title: "13 · Testing the same argument against a different chronology",
      section: "Section 3 · Powers",
      body: `**Course 1 ended by killing an argument with a table. This lesson runs the identical test on the identical argument, and gets the opposite result.** That is not an inconsistency. **It is the reason tests are worth running.**

**The argument, exactly as it was proposed for this whole cluster.** Indianapolis offers a single, dated, city-scale decision that ties the Black cultural district, the schools, the suburbs and the tax base together: the **1969 Unigov consolidation**, effective **1 January 1970**. A learner can stand at two ends of one decision.

**Course 1's verdict on that argument: FAILS.** Every documented instrument that took Indiana Avenue's buildings was already running before Unigov existed. The 1945 blight identification, the 1948 demolition, the 1954 and 1956 designations, the 1957 freeway announcement, the 1958 campus plan, the 1964 to 1966 parcel purchases. **A cause cannot postdate its effect.**

**This lesson asks the same question about schools.**

## The chronology

| Date | Event | Source |
|---|---|---|
| **1869** | Indiana provides for the education of Black children, organized into separate schools | 1971 opinion, pp. 661-662 |
| **1874** | *Cory v. Carter*: Black children not entitled to admission to the common schools for white students | 1971 opinion, p. 662 |
| **22 December 1922** | Board resolution authorising a "Colored High School," on a Chamber of Commerce petition | 1971 opinion, p. 663 |
| **September 1927** | Attucks opens; all Black high school students compelled to attend regardless of residence | 1971 opinion, p. 663 |
| **1931** | The coterminous rule (civil city boundary equals school city boundary) recognized by statute | 1974 opinion, p. 71 |
| **1935** | Transportation required for Black students traveling farther "by reason of its segregation policies" | 1971 opinion, p. 663 |
| **15 August 1942** | IHSAA admits Black, parochial, private and institutional schools | IHSAA, n.d.-b |
| **1949** | Chapter 186 declares segregated schools and school districts abolished | 1971 opinion, pp. 674-675 |
| **1954 to 1971** | Approximately **350** boundary changes, **more than 90 percent** promoting segregation | 1971 opinion, p. 668 |
| **1961** | For **Marion County only**, civil annexation becomes a mere prima facie school annexation, subject to remonstrance | 1971 opinion, p. 676 |
| **31 May 1968** | The United States sues IPS | Encyclopedia of Indianapolis, n.d.-e |
| **1968-69** | Crispus Attucks is **99.8 percent** Black; township districts about **2.6 percent** Black in 1969 | 1971 opinion, p. 668; Chalkbeat Indiana, 2016 |
| **1969** | A further act limits IPS expansion; the Unigov statute passes, expressly leaving the school district unaffected | 1971 opinion, pp. 676-677; 1974 opinion, p. 71 |
| **1 January 1970** | **Unigov takes effect** | Wachter, 2014 |
| **18 August 1971** | Dillin finds de jure segregation in IPS | 1971 opinion |
| **25 July 1974** | *Milliken v. Bradley* | Milliken, 1974 |
| **21 August 1974** | Seventh Circuit: reverse beyond Uni-Gov, vacate and remand within it | 1974 opinion, p. 84 |
| **1 August 1975** | Dillin: Unigov, by not extending IPS boundaries when it extended the city's, inhibited desegregation | Encyclopedia of Indianapolis, n.d.-e |
| **11 July 1978** | Dillin: the discriminatory intent behind that restriction is "perfectly obvious" | Encyclopedia of Indianapolis, n.d.-e |
| **1981 to 2016** | Inter-district busing runs | Encyclopedia of Indianapolis, n.d.-e |

## Run the test, effect by effect

**Effect 1: Attucks was a segregated school.** Cause proposed: Unigov. **Attucks opened in 1927, forty-three years earlier. FAILS.**

**Effect 2: IPS was internally segregated.** Cause proposed: Unigov. **The boundary changes run from 1954, and the 1961 act is nine years earlier. FAILS.**

**Effect 3: the metro pattern of a Black city district ringed by white township districts.** Cause proposed: Unigov. **In 1969, before Unigov took effect, the townships were about 2.6 percent Black and IPS was more than one third Black. The pattern already existed. FAILS as a cause.**

**Effect 4: that pattern became a permanent jurisdictional fact instead of a temporary one.** Cause proposed: Unigov. **HOLDS, and this is where it pays.**

**Effect 5: the shape, limit and eventual expiry of the federal remedy.** Cause proposed: Unigov. **HOLDS COMPLETELY.** Every ruling from August 1974 to 1981 turns on the Uni-Gov line: what is inside it, what is outside it, and whether drawing it was itself the discriminatory act. A federal judge said so in 1975 and again, under a stricter intent standard, in 1978.

## The claim that survives, stated as precisely as the record allows

**Unigov did not segregate the Indianapolis schools. It made an existing segregation permanent, at the one moment when Indiana's own default rule would have dissolved it.**

**That sentence has a counterfactual in it, and the counterfactual is a statute rather than a guess.** Under the Indiana common law rule recognized by statute in 1931, a civil annexation carried school annexation with it automatically. **Unigov was the largest civil annexation in the state's history.** Under the old rule, the school district would have grown to the county with the city. The 1961 act, for Marion County alone, made school annexation stoppable. The 1969 acts made it, in Dillin's words, "virtually nil." **And then the city grew anyway, without its schools.**

**So the honest formulation is not weaker than the one proposed. It is sharper**, and it survives every date in the table above.

## Same test, opposite answer, and that is the lesson

**Course 1 ran this test and reported a failure. This course runs it and reports a hold.** If the test had returned "confirmed" both times, it would not be a test. It would be a ritual. **A method you only ever use to agree with yourself is not a method.**

**And notice what the two results together produce.** Not "Unigov ruined Indianapolis," which is false, and not "Unigov did nothing," which is also false, but a specific division of labor between instruments: **designation, eminent domain and land assembly took the buildings; the attendance zone, the district line and a statutory carve-out took the children.** Different tools, different bodies, different records, one metro.

## Three corrections this course makes to claims in circulation

**Correction 1. It is "approximately 350," not 360, and the periods differ.** The 1971 opinion says: "there have been approximately 350 boundary changes in the system since 1954. More than 90% of these promoted segregation" (1971, p. 668). The Encyclopedia of Indianapolis says school leaders "shifted the schools' boundary lines 360 times" between 1949 and 1968 (Encyclopedia of Indianapolis, n.d.-e). **Two different counts over two different periods.** Neither is dishonest. **Quote the opinion, give the page, and give the period, and the problem disappears.**

**Correction 2. The Seventh Circuit did NOT hold that Unigov fostered segregation.** In August 1974 that court **reversed** the remedy beyond the Uni-Gov boundaries and **vacated and remanded** the question inside them. **The finding that Unigov inhibited desegregation is Judge Dillin's, on remand, on 1 August 1975**, and the finding of discriminatory **intent** is Dillin's, on **11 July 1978**, made only after the Supreme Court sent the case back in January 1977 because effect alone was no longer enough. **Attributing a trial court's finding to an appellate court, or a 1978 intent finding to a 1974 opinion, is not a rounding error.** It is the difference between a holding and a fact-finding, and between two different legal standards.

**Correction 3. The plan that produced this course cluster said "Judge Dillin's 1971 ruling found Unigov fostered segregation." That is the right judge and the wrong year.** The 1971 opinion is careful and hedged, and it is about the **1961 and 1969 annexation acts**, not the Unigov statute: their effect "**may well have been** to retard desegregation and to promote segregation" (1971, p. 677). **"May well have been" is not a finding.** The finding arrived four years later and the intent finding seven years after that. **This course reports the correction rather than quietly using the stronger version**, which is the entire point of lesson 13 in both courses.

## What would settle what is still open

**None of the following has been read into this course.** They are public or requestable, and they are the next real work:
- **The Board of School Commissioners' own minutes, 1954 to 1971**, which are where the roughly 350 boundary changes actually live, one agenda item at a time.
- **The Indiana General Assembly's committee record for the 1961 act and for the 1969 Unigov bill**, which would show who asked for the Marion County carve-out.
- **The township school boards' minutes**, which are where the remonstrances would appear.
- **The Indianapolis Recorder, 1968 to 1981**, which covered this case for the community it was about.
- **The 1989 National Register nomination for Crispus Attucks High School** and the **Sanborn fire insurance maps**, which would settle what actually stood on the 8.4 acres.

**A course that names its unopened sources is telling you where its own edge is.** Section 5 sends you past that edge on purpose.

## Sources
- Chalkbeat Indiana. (2016, August 3). *How racial bias helped turn Indianapolis into one city with 11 school districts*. https://www.chalkbeat.org/indiana/2016/8/3/21098810/how-racial-bias-helped-turn-indianapolis-into-one-city-with-11-school-districts/
- Encyclopedia of Indianapolis. (n.d.-e). *U.S. v. Board of School Commissioners*. https://indyencyclopedia.org/u-s-v-board-of-school-commissioners/
- Indiana High School Athletic Association. (n.d.-b). *Membership history, 1903 to present*. https://www.ihsaa.org/sites/default/files/documents/Membership%20History.pdf
- Milliken v. Bradley, 418 U.S. 717 (1974). https://caselaw.findlaw.com/court/us-supreme-court/418/717.html
- United States v. Board of School Commissioners of the City of Indianapolis, 332 F. Supp. 655 (S.D. Ind. 1971). https://law.justia.com/cases/federal/district-courts/FSupp/332/655/1624629/
- United States v. Board of School Commissioners of the City of Indianapolis, 503 F.2d 68 (7th Cir. 1974). https://www.courtlistener.com/opinion/321692/united-states-of-america-donny-brurell-buckley-intervening-v-board-of/
- Wachter, J. (2014, May). *40 years after Unigov: Indianapolis and Marion County's experience with consolidated government*. The Abell Foundation. https://abell.org/wp-content/uploads/2022/02/ec-unigov514.pdf`,
      recallContent: [
        {
          prompt: "What did the district court order in the Detroit case, and what did the Supreme Court do about it?",
          answer: "It ordered a metropolitan desegregation plan covering Detroit plus 53 of the 85 outlying suburban districts. On 25 July 1974 the Supreme Court, 5 to 4, held that remedy impermissible.",
        },
        {
          prompt: "State Milliken's threshold for a cross-district remedy.",
          answer: "Before the boundaries of separate and autonomous school districts may be set aside, it must first be shown that there has been a constitutional violation within one district that produces a significant segregative effect in another district, and specifically that racially discriminatory acts of the state or local districts were a substantial cause of inter-district segregation.",
        },
        {
          prompt: "Which clause of the Milliken standard did Indianapolis satisfy, and what supplied the proof?",
          answer: "The clause allowing an inter-district remedy where district lines have been deliberately drawn on the basis of race. The proof was the 1969 Unigov statute, which moved the city line and expressly left the school line, explained on the record at the time.",
        },
        {
          prompt: "Break down what the Seventh Circuit did in August 1974.",
          answer: "It reversed the remedy beyond the Uni-Gov boundaries, vacated and remanded the remedy inside them so the district court could decide whether establishing Uni-Gov boundaries without reestablishing IPS boundaries warranted an inter-district remedy, and affirmed everything else.",
        },
        {
          prompt: "Why does this course refuse to quote Justice Marshall's dissent?",
          answer: "Because the full-text sources read for the lesson did not carry the dissents in full, and a quotation you have not seen in the document you read is a quotation you do not have. The course sends you to volume 418 of the United States Reports to quote it yourself with a page number.",
        },
        {
          prompt: "Name two other metropolitan areas where an inter-district remedy survived Milliken.",
          answer: "New Castle County, Delaware, in Evans v. Buchanan, covering Wilmington and its suburbs; and Jefferson County, Kentucky, where the Louisville city and county systems merged in 1975.",
        },
      ],
    },
    {
      slug: "gcl-quiz-powers",
      title: "14 · Quiz: who decided",
      section: "Section 3 · Powers",
      quiz: {
        passingScore: 70,
        // 15-question bank served 8 at a time with shuffled options (the repo standard).
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Quote Judge Dillin's 1971 finding about boundary changes in the Indianapolis system.",
            options: [
              "About 350 boundary changes since 1954, over 90 percent segregative",
              "Exactly 360 boundary changes since 1954, all of them segregative",
              "Roughly 100 boundary changes since 1954, half of them segregative",
              "No boundary changes since 1954 were found to be segregative",
            ],
            correctIndex: 0,
            explanation: "The widely repeated 'ninety percent of 360' comes from a secondary account counting a different period. Quote the opinion, cite the page, and give the period.",
            sourceLessonSlug: "gcl-powers-attendance-zone",
          },
          {
            prompt: "What did the court find optional attendance zones actually did?",
            options: [
              "They equalised enrollment between crowded and half-empty schools",
              "They let white students in mixed zones keep choosing white schools",
              "They were used only in the all-Black neighborhoods of the city",
              "They applied only to students living over two miles from a school",
            ],
            correctIndex: 1,
            explanation: "A policy that is facially neutral and statistically one-directional is doing work, and the direction is the evidence.",
            sourceLessonSlug: "gcl-powers-attendance-zone",
          },
          {
            prompt: "The transfer rules the court found operated how?",
            options: [
              "Both transfer rules were designed to help every student equally",
              "Both transfer rules were struck down well before Attucks opened",
              "A sibling preference let white students transfer out of Attucks",
              "Transfers were decided each year by a random public lottery",
            ],
            correctIndex: 2,
            explanation: "The court called the sibling preference a grandfather clause; it remained in effect through March 1970. Neither rule mentions race and both are race policy.",
            sourceLessonSlug: "gcl-powers-attendance-zone",
          },
          {
            prompt: "What was Indiana's historic coterminous rule, and when was it recognised by statute?",
            options: [
              "School districts had to match the county lines, fixed in 1869",
              "School districts were drawn by the state board, starting in 1949",
              "Attendance zones had to match the city's ward lines, from 1922",
              "A city's annexations extended its school city too, recognized in 1931",
            ],
            correctIndex: 3,
            explanation: "One boundary, one electorate, one tax base, one school system. A city could not grow its tax base and leave its schools behind, because the law did not let the two come apart.",
            sourceLessonSlug: "gcl-powers-district-line",
          },
          {
            prompt: "The 1961 Act of the Indiana General Assembly applied to which territory, and what did it change?",
            options: [
              "Marion County only; it made civil annexation only prima facie for schools",
              "The whole state; it abolished all existing school district boundaries",
              "Marion and Hamilton counties; it merged their two school systems",
              "Indianapolis only; it required a referendum before any annexation",
            ],
            correctIndex: 0,
            explanation: "A jurisdictional carve-out is how you write a law for one place while appearing to write a general rule. The same technique appears in the 1969 Unigov threshold.",
            sourceLessonSlug: "gcl-powers-district-line",
          },
          {
            prompt: "What is a remonstrance, and why does adding one to a process matter?",
            options: [
              "A public hearing held before any vote; it only slows decisions down",
              "A formal tax appeal that lowers the assessed amount a district owes",
              "A formal objection that can block or delay an otherwise automatic step",
              "A binding court injunction that ends the annexation process entirely",
            ],
            correctIndex: 2,
            explanation: "Before 1961 school annexation followed civil annexation automatically in Indiana. After it, in Marion County, somebody could stop it.",
            sourceLessonSlug: "gcl-powers-district-line",
          },
          {
            prompt: "How did the Seventh Circuit describe what Unigov did to the Indianapolis school district?",
            options: [
              "It merged the IPS district with the eight township school systems",
              "It dissolved the district and handed control to a new county board",
              "It required the school district to expand outward with the city",
              "The Act left the school district unaffected as the city expanded",
            ],
            correctIndex: 3,
            explanation: "A city grew to fill a county. Its school district stayed a hole in the middle of that county, ringed by ten independent systems inside the same city.",
            sourceLessonSlug: "gcl-powers-unigov-carveout",
          },
          {
            prompt: "In the participants' own words, why were schools excluded from Unigov?",
            options: [
              "Including schools would have meant instant death for the whole plan",
              "The school board asked to be included but was refused by the state",
              "Federal law then forbade including schools in any city-county merger",
              "There was simply no time left to draft the school provisions",
            ],
            correctIndex: 0,
            explanation: "Board president Landrum Shields added, 'We cooperated with the Mayor by not killing Unigov.' The exclusion was the price of passage, stated at the time by the people who paid it.",
            sourceLessonSlug: "gcl-powers-unigov-carveout",
          },
          {
            prompt: "Judge Dillin found the surrounding township districts had not committed acts of de jure segregation. Why?",
            options: [
              "Because they had all adopted voluntary integration plans early",
              "Because their Black population ranged from very slight to none",
              "Because they were then governed by the very same board as IPS",
              "Because the evidence against them was all excluded at the trial",
            ],
            correctIndex: 1,
            explanation: "A district line can produce a segregated system without a single discriminatory act inside any district. The boundary had already done the work.",
            sourceLessonSlug: "gcl-powers-unigov-carveout",
          },
          {
            prompt: "Who was ultimately held liable for funding the Marion County-wide desegregation remedy?",
            options: [
              "Indianapolis Public Schools alone, from its own local budget",
              "The eight township districts, split in proportion to enrollment",
              "The federal government, under Title IV of the Civil Rights Act",
              "The State of Indiana, which alone bore the constitutional liability",
            ],
            correctIndex: 3,
            explanation: "Dillin imputed the violation to the State in July 1973 and held the State responsible for the cost in July 1981. When a school board is a creature of a state, the state can be the defendant.",
            sourceLessonSlug: "gcl-powers-the-lawsuit",
          },
          {
            prompt: "In which direction did the inter-district busing that began in August 1981 actually run?",
            options: [
              "Both directions equally, from the very first day of busing",
              "One way, out of IPS: about 5,500 Black students to six townships",
              "Into IPS only, busing township students inward each morning",
              "Between the outer townships alone, bypassing IPS entirely",
            ],
            correctIndex: 1,
            explanation: "The Seventh Circuit did not authorise transfers into IPS until April 1980, and the implemented remedy still ran outward. A remedy can be lawful and asymmetric in who bears its inconvenience.",
            sourceLessonSlug: "gcl-powers-the-lawsuit",
          },
          {
            prompt: "What did a court have to establish separately in 1984, three years after busing began?",
            options: [
              "That every bus used actually met the state safety standards",
              "That the State would fully reimburse the district's transport costs",
              "That bused students' parents could vote in township board elections",
              "That bused students could play on the township athletic teams",
            ],
            correctIndex: 2,
            explanation: "Representation does not follow a student automatically. It had to be granted, and somebody had to ask.",
            sourceLessonSlug: "gcl-powers-the-lawsuit",
          },
          {
            prompt: "State the threshold Milliken v. Bradley set for a cross-district desegregation remedy.",
            options: [
              "Any statewide racial imbalance is enough to justify merging the districts",
              "A remedy may cross lines whenever the central district is majority Black",
              "No desegregation remedy may ever cross a school district boundary line",
              "A violation in one district must cause significant segregation in another",
            ],
            correctIndex: 3,
            explanation: "Decided 25 July 1974, 5 to 4. The district boundary becomes the presumptive limit of the remedy, defended by the value the Court names: local control of schools.",
            sourceLessonSlug: "gcl-powers-milliken",
          },
          {
            prompt: "Which clause of the Milliken standard did the Indianapolis plaintiffs satisfy, and with what evidence?",
            options: [
              "The race-drawn-lines clause; the evidence was the 1969 Unigov statute itself",
              "The statewide school-finance clause; the evidence was per-pupil spending gaps",
              "The faculty-assignment clause; the evidence was the record of teacher transfers",
              "No clause; the Indianapolis metropolitan remedy was struck down entirely",
            ],
            correctIndex: 0,
            explanation: "In most metros a plaintiff cannot show a decision about the line itself. Indiana's legislature had written one down and dated it.",
            sourceLessonSlug: "gcl-powers-milliken",
          },
          {
            prompt: "This course corrects the claim that 'the Seventh Circuit found Unigov fostered segregation.' What is the accurate version?",
            options: [
              "No court at any level, state or federal, ever made such a finding",
              "The Supreme Court itself made this very finding in Milliken",
              "The Seventh Circuit reversed and remanded; Dillin found intent in 1978",
              "The Seventh Circuit did make the finding, but in 1976 and not 1974",
            ],
            correctIndex: 2,
            explanation: "Attributing a trial court's fact-finding to an appellate court, or a 1978 intent finding to a 1974 opinion, changes the meaning. The intent finding was only required after the Supreme Court remanded in January 1977.",
            sourceLessonSlug: "gcl-powers-test-the-spine",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 4 · Now  (beat 4: observation and evidence)
    //
    // Same handling as course 1's `ia-now-tour`. The 360 tour of the gyms and fields exists as a
    // capture plan, but its Wanderlearn embed URL does not exist yet, and a tour URL is
    // authoritative external data that must never be guessed
    // (plans/future/04-wanderlearn-360-boundary.md). So this lesson ships as `virtual_tour` with
    // NO contentUrl: the player renders the "no media yet" notice above the body, and the body is
    // the observation brief the learner uses when the tour lands. Drop the URL in and re-seed.
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "gcl-now-tour",
      title: "15 · Now: stand in the room (360 tour, forthcoming)",
      section: "Section 4 · Now",
      lessonType: "virtual_tour",
      body: `**The 360 tour for this lesson is forthcoming.** It is not here yet, and the notice above this text is telling you the truth rather than reporting a fault. The site template this series uses treats beat 4 as a drop-in: a course is complete and teachable without it, and the tour is added later without restructuring anything.

**Read this lesson now anyway, because it is your observation brief.** Beat 4 asks one question, "what is actually there today," and the difference between a visitor looking at a gym and a researcher looking at a gym is entirely a matter of knowing what to look for before you arrive.

## What to look for, in order

**1. Count the seats, then ask what year the count is from.** Lesson 5 taught you that a capacity is a measurement and measurements get redone: a 2019 recount reordered the three largest high school gyms in Indiana, and a 2020 renovation reordered them again. **When you write down a capacity, write down the year and the source in the same breath.** New Castle is reported at 8,424 today and at 9,325 in 1959-60, and both can be right.

**2. Look up at the structure, because that is where the money went.** A gym is a clear span: a floor with no columns in it. **Find how the roof is held up.** Trusses, arches, a barrel vault, a modern steel frame. **The span is the expensive decision**, and everything else in the room is seating wrapped around it.

**3. Read the banners and the record boards as documents.** A championship banner has a year on it, and a wall of them is a chronology somebody chose to display. **Note which years are up, which sports are up, and which are not.** Then ask: who decided what goes on this wall, and when was it last updated? **A banner is a record with an author.**

**4. Read the lobby.** Trophy cases, portraits, dedication plaques, donor walls, named rooms. **Every plaque has a sponsor and a date.** Note both, every time. A plaque tells you what an institution agreed to say in public in a particular year, which is not the same as what happened.

**5. Look at the site, not just the room.** Where does the parcel end? Is there a football field, a track, tennis courts, a parking lot? **How far is the nearest street, and what is on the other side of it?** Lesson 6 turned on 8.4 acres and a waiver. **Land is the variable this course cares about most**, and a 360 tour is one of the few ways to feel a parcel's size without a survey.

**6. Look for what is being built right now.** Construction fence, a site sign, a rendering on a board, a crane. Crispus Attucks has a 44 million dollar expansion under way with a new IHSAA-standard gym seating roughly 2,400, expected in 2028. **A construction sign carries a contractor, an architect, an owner and often a permit number**, and Section 5 teaches you what to do with those.

**7. Look at the people, and be careful.** These are working schools with students, teachers, coaches and families in them. **Describe people as they would describe themselves, or do not describe them.** Attucks alumni are living people with their own accounts of these rooms, and their accounts outrank yours.

## What the tour cannot show you, and the first one is the whole course

**1. It cannot show you the district line.** **The single most important object in this course is invisible in every frame of every tour.** You cannot photograph a school district boundary. It has no physical existence: no fence, no sign, no change in the pavement. **It exists only as a description in a record**, and it decides which of these buildings a given child may enter. **That is why beats 5 and 6 exist**, and it is the sharpest possible argument for reading records instead of only looking.

**2. It cannot show you a date.** Every addition, every renovation, every closed wing happened at a time, and the tour has no clock.

**3. It cannot show you who paid.** A gym built on a 2015 bond, a gym built on a 1938 federal works program and a gym built on a 2026 hospital donation look identical from the floor.

**4. It cannot show you who is not there.** You cannot photograph the students assigned to a different building. **Everything the tour does not contain is a question for Section 5, not an answer.**

**Write down your five most confident observations before the tour arrives, using this brief and the map that follows. Then check them against the record.** Being wrong on paper about a room you have not entered is a better teacher than being right about one you have.

## Sources
- Chalkbeat Indiana. (2026a, May 6). *Crispus Attucks High School is getting a $44 million upgrade. Here's what's in store.* https://www.chalkbeat.org/indiana/2026/05/06/crispus-attucks-high-school-gets-new-health-lab-and-gym/
- Indiana Department of Natural Resources, Division of Historic Preservation and Archaeology. (2024, May). *Preservation at the crossroads* [Newsletter]. https://www.in.gov/dnr/historic-preservation/files/hp_Legeman-Article-Layout.pdf
- Visit Indiana. (n.d.). *High school gyms: Basketball, best of Indiana*. https://visitindiana.in.gov/blog/post/high-school-gyms-basketball-best-of-indiana/`,
      recallContent: [
        {
          prompt: "Why is this lesson published before its 360 tour exists?",
          answer: "Because the site template treats beat 4 as a drop-in: a course is complete and teachable with the other five beats, and the tour is added later without restructuring anything. The body is the observation brief in the meantime.",
        },
        {
          prompt: "What two things must you record alongside any gym capacity, and why?",
          answer: "The year and the source. A 2019 recount reordered Indiana's three largest high school gyms and a 2020 renovation reordered them again, and New Castle is reported at 8,424 today and 9,325 in 1959-60.",
        },
        {
          prompt: "What is the single most important object in this course, and why can no tour show it?",
          answer: "The school district boundary. It has no physical existence: no fence, no sign, no change in the pavement. It exists only as a description in a record, and it decides which building a child may enter.",
        },
        {
          prompt: "Name three things besides the district line that a 360 tour cannot show you.",
          answer: "A date, who paid for the building, and who is not there. Gyms funded in 1938, 2015 and 2026 look identical from the floor, and you cannot photograph the students assigned elsewhere.",
        },
        {
          prompt: "How should you treat a banner, a plaque or a trophy case in the tour?",
          answer: "As a document with an author, a sponsor and a date. Note who decided what goes on the wall and when it was last updated. It records what an institution agreed to say in public in a particular year.",
        },
      ],
    },
    {
      slug: "gcl-map",
      title: "16 · Map: schools, district lines, and where the line has been fought over",
      section: "Section 4 · Now",
      body: `**Read this before you touch the map, because the map's limits are the lesson.**

**This platform's lesson map draws the whole world on a single fixed projection.** A marker is a fixed-size dot, so two points need to be roughly two degrees apart, on the order of 200 kilometres, before they separate visually. **Marion County is about 25 kilometres across.** Its eleven school districts, and every school in them, collapse into a single dot. **This map physically cannot plot Crispus Attucks against the IPS boundary**, and pretending otherwise would be a worse lesson than saying so.

**Which is itself the point of this course.** A district line is not a thing you can see at any scale without the right instrument. **You need a boundary file.** Here are the three tools that actually work, and Section 5 puts you into them:

- **The NCES School and District Navigator** (https://nces.ed.gov/ccd/schoolmap/), the federal map of public schools and school district boundaries.
- **NCES EDGE school district boundary files** (https://nces.ed.gov/programs/edge/Geographic/DistrictBoundaries), the composite geographic datasets behind it, published for school years from 1989-90 through 2024-25. **You can watch a boundary change across decades in these files**, which is as close to time-lapse civics as this subject gets.
- **MapIndy** (https://maps.indy.gov/MapIndy/), the official geographic information system for the Consolidated City of Indianapolis and Marion County, where a parcel, a township, a council district and a school district can be turned on as separate layers over the same ground.

**So this map does the job it can do well.** It plots the places where **the district line itself** has been the thing in dispute. Every marker is a real case with a citation, and together they are the national argument this course is a local instance of.

**Blue: Indianapolis**, the subject.

**Red: Detroit**, the rule. *Milliken v. Bradley* is the decision that made every other marker on this map harder.

**Amber: four places where somebody tried to move a district line, and the outcomes differ.** Two remedies that crossed lines and survived, one state-constitutional route around Milliken entirely, and two secession fights, one blocked and one completed. **Read them as a set.** The instrument is the same everywhere. The results are not, and the difference is always a record.

**Coordinates on this map are approximate city points, not surveyed locations.** Do not use them to find an address. Use them to see the shape of the argument, and use the boundary files when you need a line.

**Two cases are named here but not marked, because at this scale they would sit on top of their neighbors.** **Louisville and Jefferson County, Kentucky**, where the city and county systems merged in 1975 under state board action and a federal court order, is four degrees from Indianapolis and would collide with it. **Richmond, Virginia**, where a district judge ordered Richmond consolidated with Henrico and Chesterfield counties in January 1972, the Fourth Circuit reversed in June 1972, and an equally divided Supreme Court left that reversal standing in 1973, would collide with Wilmington. **A map that hides two of its best examples is telling you to go get a better map.**

## Sources
- Bradley v. School Board of the City of Richmond, 462 F.2d 1058 (4th Cir. 1972). https://law.justia.com/cases/federal/appellate-courts/F2/462/1058/280802/
- City of Indianapolis and Marion County. (n.d.). *MapIndy*. https://maps.indy.gov/MapIndy/
- Evans v. Buchanan, 447 F. Supp. 982 (D. Del. 1978). https://law.justia.com/cases/federal/district-courts/FSupp/447/982/1620310/
- Milliken v. Bradley, 418 U.S. 717 (1974). https://caselaw.findlaw.com/court/us-supreme-court/418/717.html
- National Center for Education Statistics. (n.d.-a). *School and district navigator*. https://nces.ed.gov/ccd/schoolmap/
- National Center for Education Statistics. (n.d.-b). *EDGE: School district boundaries*. https://nces.ed.gov/programs/edge/Geographic/DistrictBoundaries
- Sheff v. O'Neill, 238 Conn. 1 (1996). https://law.justia.com/cases/connecticut/supreme-court/1996/15255.html
- Stout v. Jefferson County Board of Education, 882 F.3d 988 (11th Cir. 2018). https://law.justia.com/cases/federal/appellate-courts/ca11/17-12338/17-12338-2018-02-13.html`,
      mapContent: {
        markers: [
          {
            id: "gcl-indianapolis",
            lat: 39.7684,
            lng: -86.1581,
            title: "Indianapolis and Marion County, Indiana",
            color: "#1d4ed8",
            description:
              "The subject of this course. Indiana's historic rule made a city's boundary and its school district's boundary the same shape, recognized by statute in 1931. A 1961 act, applying to Marion County only, made school annexation merely prima facie and subject to remonstrance. The 1969 Unigov statute then expanded the city to nearly the whole county while expressly leaving the school district where it was. Eleven school corporations remain inside one consolidated city: Indianapolis Public Schools, eight township corporations, Beech Grove and Speedway. A federal court found in 1975 and again in 1978 that this arrangement inhibited desegregation, and inter-district busing ran from 1981 to 2016.",
          },
          {
            id: "gcl-detroit",
            lat: 42.3314,
            lng: -83.0458,
            title: "Detroit, Michigan: Milliken v. Bradley (1974)",
            color: "#b91c1c",
            description:
              "The rule that governs every other marker here. A district court ordered a metropolitan desegregation plan covering Detroit plus 53 of the 85 outlying suburban districts. On 25 July 1974 the Supreme Court held, 5 to 4, that before the boundaries of separate and autonomous school districts may be set aside, it must first be shown that a violation in one district produced a significant segregative effect in another. Detroit's 1970 enrollment was about 63.6 percent Black and 34.8 percent white out of roughly 289,763 students. Milliken is why an inter-district remedy is rare, and its own exception for lines deliberately drawn on the basis of race is the door Indianapolis went through.",
          },
          {
            id: "gcl-wilmington",
            lat: 39.7459,
            lng: -75.5466,
            title: "Wilmington and New Castle County, Delaware: Evans v. Buchanan",
            color: "#b45309",
            description:
              "A remedy that crossed district lines and survived Milliken. Litigation that began in 1957 over Delaware's dual system reached a three-judge court which found the state had not dismantled de jure segregation, ordered inter-district plans covering Wilmington and its suburban districts, and was affirmed on appeal in 1978. Alongside Indianapolis and Jefferson County, Kentucky, it is one of the small number of metropolitan remedies that were actually carried out after 1974.",
          },
          {
            id: "gcl-hartford",
            lat: 41.7658,
            lng: -72.6734,
            title: "Hartford, Connecticut: Sheff v. O'Neill (1996)",
            color: "#b45309",
            description:
              "The route around Milliken. Milliken is a federal constitutional decision, so it does not control what a STATE constitution requires. On 9 July 1996 the Connecticut Supreme Court held 4 to 3 that the state had an affirmative constitutional obligation to provide substantially equal educational opportunity, that Hartford's schools were racially and ethnically isolated, and that districting based on town and city boundary lines was unconstitutional. If a federal court will not cross a district line, ask what your state's own constitution says about it. That question has fifty different answers.",
          },
          {
            id: "gcl-gardendale",
            lat: 33.66,
            lng: -86.81,
            title: "Gardendale, Alabama: Stout v. Jefferson County (2018)",
            color: "#b45309",
            description:
              "A district line somebody tried to draw in living memory, and a court stopped. Residents of the mostly white city of Gardendale moved from 2012 to form a separate municipal school system, splitting off from a Jefferson County district still under a desegregation order. In 2018 the Eleventh Circuit held the district court had not clearly erred in finding the board moved to secede for a racially discriminatory purpose, or in finding the secession would impede the county board's desegregation, and it reversed the partial secession the district court had allowed, ordering the motion denied. Reading this beside Unigov shows how much turns on whether a desegregation order is already in force.",
          },
          {
            id: "gcl-memphis",
            lat: 35.1495,
            lng: -90.049,
            title: "Memphis and Shelby County, Tennessee: merger, then six new districts",
            color: "#b45309",
            description:
              "A district line erased and then redrawn inside four years. Memphis City Schools and Shelby County Schools merged on 1 July 2013. Six suburban municipalities then formed their own districts, opening in August 2014 in Arlington, Bartlett, Collierville, Germantown, Lakeland and Millington. The first enabling statute was struck down by a federal judge because it applied only to Shelby County, which is the same one-county carve-out technique Indiana used in its 1961 act. Tennessee's constitution treats such local legislation differently than Indiana's did. When a statute names one county, ask what your state constitution says about that.",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 5 · Next  (beat 5: live civics. where the lines are now, who pays, how one moves)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "gcl-next-live-civics",
      title: "17 · Where the lines are today, who pays for the building, and how a district line is actually moved",
      section: "Section 5 · Next",
      body: `Beat 5 is the beat that turns a history course into a civics course. **The boundary you spent Section 3 reading about is still there, it still decides things, and somebody is deciding something about it this year.**

## 1. Where the lines are

**Marion County still has eleven school corporations**: Indianapolis Public Schools, eight township corporations (Decatur, Franklin, Lawrence, Perry, Pike, Warren, Washington and Wayne), plus the city corporations of Beech Grove and Speedway. **The same eleven the Seventh Circuit described in 1974.**

**Here is the detail that surprises almost everybody, and it is the single most useful fact in this lesson.** The IPS boundary is **not** a township boundary and it is **not** the old city limit. **Seven townships have land inside the IPS boundary**: Lawrence, Wayne, Washington, Warren, Pike, Decatur and Perry (Chalkbeat Indiana, 2025a). **The line is a fossil.** It is roughly where the City of Indianapolis stopped growing its schools, frozen by the 1961 and 1969 acts and by Unigov, and it now cuts across seven separate townships without matching any of them.

**How many children are inside it.** Roughly **49,000** K-12 public school students live within IPS boundaries. About **40 percent** of them attend charter schools, and IPS-run schools enroll about **21,000** (Chalkbeat Indiana, 2025b). **Note the disagreement in circulation**: coverage of the 2026 legislation describes the system as serving "nearly 43,000 students" (WFYI, n.d.). **Those two numbers are not a contradiction, they are two different counts**: students who live inside the line, versus students actually enrolled in schools the arrangement covers. **When two figures for "how many kids" differ, the first question is always what each one counted.**

**The trend, for scale.** IPS enrolled about **108,000** students in 1971, about **47,000** by the early 1990s, and roughly **21,000** in district-run schools today (Chalkbeat Indiana, 2025b).

## 2. Who pays for what, and why gyms are a boundary story

**Indiana splits school money in a way that catches people out.** Classroom operations are paid mainly through **state tuition support**, appropriated in the state budget and distributed by a formula: a **foundation amount** for every student, plus **complexity** dollars that go to students from low-income backgrounds, plus targeted categories (Appleton, 2025). The two-year budget proposed in February 2025 put tuition support at about **9.4 billion dollars** for 2025-26 and **9.6 billion** for 2026-27 (Appleton, 2025).

**So does the district line still decide the money? Yes, but through the property tax side, which is exactly the side that builds gyms.**

**Local property tax supports the funds that pay for buildings and buses.** A school corporation levies for its **operations fund**, for **debt service** on bonds and leases, and, if voters approve one, for an **operating referendum levy** under **Indiana Code section 20-46-1** or a **school safety referendum levy** under **section 20-46-9** (Indiana Department of Local Government Finance, 2023).

**Now do the arithmetic that this whole course has been building toward.** A property tax levy raises **rate multiplied by assessed value inside the line**. **Two districts with identical rates and identical children raise different amounts of money if different parcels are inside them.** A district with a shopping center, a hospital campus and high-value housing inside its boundary can build a fieldhouse. A district without them cannot, at the same rate, no matter how much its community wants one. **That is not a metaphor for the argument in Section 3. It is the same argument, in the present tense, with a tax bill attached.**

**Three live changes, all dated.**

- **2023.** Senate Enrolled Act 391 requires school corporations in **Lake, Marion, St. Joseph and Vanderburgh counties** to share operating and safety referendum revenue with participating charter schools, for referendum resolutions adopted after **10 May 2023** (Indiana Department of Local Government Finance, 2023). **Read the county list again.** A statute that applies to four named counties is the **1961 technique**, running in 2023.
- **2025.** Senate Enrolled Act 1 raised homestead deductions. The Indiana Fiscal Policy Institute projects districts will lose about **338 million dollars** in anticipated revenue by 2028. Referendum questions were restricted to **November general elections in even-numbered years**, so a district now gets **one chance every two years**. From **2028**, referendum revenue must be shared with charter schools statewide, phased in over four years for operations fund revenue. **IPS faces an estimated 97 million dollar cost between 2026 and 2032** (Beck, 2026).
- **2026.** Experts estimated **40 to 50 Indiana districts** could put a referendum on the November 2026 ballot (Beck, 2026). **That is a live election about school property tax, happening now, in a state where the district line decides who votes in it.**

**One vocabulary item you now need.** Indiana law calls the tie between a child and a district **legal settlement**. The DLGF's own guidance counts "students in kindergarten through grade 12 who have legal settlement in the school corporation but attend a charter school" (Indiana Department of Local Government Finance, 2023). **A district line does not only draw a school. It assigns a legal status to a child**, and that status is what follows the money.

## 3. How a district line is actually moved

**Three routes, and Indiana has used all three.**

**Route 1: annexation between school corporations, Indiana Code article 20-23, chapter 5.** The statute defines the word plainly: "'Annex', 'annexing', 'annexation', and 'school annexation' mean **any action whereby the boundaries of a school corporation are changed** so that additional territory, constituting all or a part of any one (1) or more other school corporations, is transferred to the school corporation" (Ind. Code section 20-23-5-2). Reporting on the 2025 Indianapolis discussion describes the process as requiring **a resolution adopted by both the district losing territory and the district gaining it**, with **voters in the district losing territory able to file a remonstrance**, and the annexing district assuming the obligations for buildings in the acquired territory (Chalkbeat Indiana, 2025a). **The remonstrance from lesson 9 is still in the statute, sixty-five years after it was put there.**

**Route 2: reorganisation, Indiana Code article 20-23, chapter 4.** Forming new school corporations, altering the boundaries of existing ones, or dissolving them, by uniting corporations, subdividing them, transferring part of a territory, attaching territory, or any combination.

**Route 3: the legislature, which is what Indiana actually does.** The 1961 act. The 1969 acts. Unigov. And, in the last two years, twice more:
- **2025: House Enrolled Act 1515** created the **Indianapolis Local Education Alliance**, a task force required to report on governance, facilities and transportation for all schools inside the IPS boundary by **31 December 2025**. On **17 December 2025** it voted **8 to 1** to recommend a new independent authority (Chalkbeat Indiana, 2025c).
- **2026: House Enrolled Act 1423** created the **Indianapolis Public Education Corporation**, a municipal corporation with a **nine-member board appointed by the mayor of Indianapolis**, taking over budgets and tax levies, school property, a unified transportation system and a unified school performance system, with full implementation delayed to the **2028-29 school year** (Indiana State Teachers Association, 2026).

**Stop and look at what route 3 did, because it is Unigov's move run on the other axis.** **The 2026 law does not move the IPS boundary at all.** It moves the **power inside** it, from an elected school board to a board appointed by a mayor. **A boundary can stay exactly where it is while everything about who governs inside it changes**, and vice versa. **Ask both questions about any district, always: where is the line, and who holds the power inside it?**

**And there is a live boundary proposal too.** In **November 2025**, IPS board members floated shrinking the district to **Center Township alone**, bounded by 38th Street on the north, Emerson Avenue on the east, Troy Avenue on the south and Belmont Avenue on the west. It would remove **47 district and charter schools** from IPS borders and affect **more than 10,000 students**. A Lawrence Township spokesperson said the township "has not been part of any conversation, committee work, or formal discussion regarding this matter" (Chalkbeat Indiana, 2025a). **Nothing has been adopted.** As in course 1, **"not adopted yet" is the finding, and it is where a citizen has the most leverage**, because an unadopted proposal is still open to comment and a resolution has not been voted.

## 4. The four questions, for any district in any state

1. **Where is the boundary, and where is the authoritative file?** Not a news graphic. The federal boundary file or the county GIS.
2. **Which fund pays for what here, and which of them is local property tax?** Find out whether the classroom and the building are paid for from the same place. In Indiana they are not.
3. **What is the legal procedure to change this boundary, and who has to agree?** Name the statute. Find out whether a remonstrance, a referendum or a legislative act is required, and who may file.
4. **Who is deciding something about this district right now?** A board, a task force, a legislature, a court. **When do they meet, and is the agenda public?**

**The honest limits of this lesson.** Every dollar figure, every projection and every proposal above carries a date and a source, and **all of them will move.** A bill gets amended, a proposal is dropped, a projection is revised. **Re-check every one before you rely on it.** That instruction is not a disclaimer. It is the method.

## Sources
- Appleton, A. (2025, February 20). *See how Indiana education funding proposals have changed*. Chalkbeat Indiana. https://www.chalkbeat.org/indiana/2025/02/20/bills-affecting-education-funding-pass/
- Beck, C. (2026, June 9). *Why Indiana school districts are rushing to put tax referendums on the November ballot*. WFYI, via WVPE. https://www.wvpe.org/indiana-news/2026-06-09/why-indiana-school-districts-are-rushing-to-put-tax-referendums-on-the-november-ballot
- Chalkbeat Indiana. (2025a, November 14). *IPS board members float shrinking district's boundaries, but getting buy-in could be tricky*. https://www.chalkbeat.org/indiana/2025/11/14/changing-indianapolis-public-schools-boundaries-draws-concerns-from-parents/
- Chalkbeat Indiana. (2025b, December 19). *Why the fractured Indianapolis school system faces a power shakeup*. https://www.chalkbeat.org/indiana/2025/12/19/how-desegregation-and-charters-led-to-indianapolis-local-education-alliance/
- Chalkbeat Indiana. (2025c, December 18). *ILEA recommends independent authority to oversee IPS, charter schools*. https://www.chalkbeat.org/indiana/2025/12/18/indianapolis-local-education-alliance-recommends-new-independent-authority/
- Indiana Department of Local Government Finance. (2023, October 10). *Legislation affecting school funding matters* [Memorandum]. https://www.in.gov/dlgf/files/2023-memos/231010-Shackle-Memo-Legislation-Affecting-School-Funding-Matters.pdf
- Indiana State Teachers Association. (2026). *2026 legislative review*. https://www.ista-in.org/our-advocacy/2026-legislative-review
- Ind. Code section 20-23-5-2 (definition of annexation). https://codes.findlaw.com/in/title-20-education/in-code-sect-20-23-5-2/
- WFYI. (n.d.). *Mayor-appointed board to assume control of IPS and charter school facilities, finances*. https://www.wfyi.org/news/articles/indiana-senate-passes-hb1423-ips-charters-ipec-2026`,
      recallContent: [
        {
          prompt: "Why does the Unigov argument fail in course 1 and hold in this one?",
          answer: "Because the test is chronological. Every instrument that took Indiana Avenue's buildings predates 1 January 1970, so Unigov cannot have caused them. The shape and limit of the school remedy, from 1974 to 2016, all postdate Unigov and turn on its boundary.",
        },
        {
          prompt: "State the surviving claim about Unigov and schools as precisely as the record allows.",
          answer: "Unigov did not segregate the schools. It made an existing segregation permanent at the one moment Indiana's own default rule would have dissolved it, because under the rule recognized by statute in 1931 a civil annexation carried school annexation automatically, and Unigov was the largest civil annexation in the state's history.",
        },
        {
          prompt: "Which three effects fail the test, and why?",
          answer: "Attucks being segregated (1927, forty-three years earlier), IPS being internally segregated (boundary changes from 1954 and the 1961 act), and the metro pattern of a Black city district ringed by white township districts (the townships were already about 2.6 percent Black in 1969). All predate Unigov.",
        },
        {
          prompt: "Give the three corrections this lesson makes.",
          answer: "The opinion says approximately 350 boundary changes since 1954, not 360 between 1949 and 1968. The Seventh Circuit did not find Unigov fostered segregation; Dillin did, on remand, on 1 August 1975, with the intent finding on 11 July 1978. And the cluster plan's attribution of that finding to Dillin's 1971 ruling names the right judge and the wrong year, because the 1971 opinion only says the 1961 and 1969 acts 'may well have been' to promote segregation.",
        },
        {
          prompt: "Name three records that would settle what is still open here.",
          answer: "The Board of School Commissioners' minutes from 1954 to 1971 where the boundary changes live, the General Assembly's committee record for the 1961 act and the 1969 Unigov bill, and the Indianapolis Recorder's coverage from 1968 to 1981. Also the township school boards' minutes and the 1989 National Register nomination for Attucks.",
        },
      ],
    },
    {
      slug: "gcl-next-exercise-district",
      title: "18 · Practice: look up a real school, its district, and its boundary",
      section: "Section 5 · Next",
      lessonType: "exercise",
      body: `**Do this drill with the real tools open in another tab.** Everything below is free and public, and it works for any public school in the United States.

**The tools.**
- **NCES School and District Navigator**, the federal map of public schools and school district boundaries: https://nces.ed.gov/ccd/schoolmap/
- **NCES EDGE school district boundary files**, the geographic datasets behind it, published for school years from **1989-90 through 2024-25**: https://nces.ed.gov/programs/edge/Geographic/DistrictBoundaries
- **Indiana Graduates Prepared to Succeed (GPS)**, the Indiana Department of Education's public dashboard for enrolment, demographics and performance by school and corporation: https://indianagps.doe.in.gov/
- **MapIndy**, the official geographic information system for the Consolidated City of Indianapolis and Marion County: https://maps.indy.gov/MapIndy/

**Your target: Crispus Attucks High School, Indianapolis.** It is a public institutional building, its location is published by the district that runs it, and you are not exposing anybody's home.

## Work through these, then answer the items below

1. Find **Crispus Attucks High School** in the NCES School and District Navigator. **Read off the school district it belongs to** and note the **NCES identification number** for both the school and the district. Write them down exactly.
2. Turn on the **district boundary** layer. **Find the nearest point where the district boundary runs, and note which district is on the other side of it.** How far is it from the school?
3. In **MapIndy**, enter the school's location and turn on **township**, **city council district** and **school district** as separate layers. **Confirm for yourself that those three boundaries are three different shapes over the same ground.** Section 3 explained why.
4. Identify **which township the school physically sits in**, and confirm that this is **not** the same thing as which school corporation it belongs to. **Seven townships have land inside the IPS boundary.**
5. In **Indiana GPS**, pull enrollment and demographic figures for this school. Then pull the same figures for **one township high school** in Marion County. **Put the two side by side.** Do not draw a conclusion yet. Write down what each number is a count of, and for what year.
6. In the **EDGE boundary files**, download the composite file for a recent school year and one from the 1990s. **Compare the district boundary across those years.** If it did not move, that is a finding: this line has now survived a Supreme Court decision, a federal desegregation order and thirty-five years of busing.
7. Find out whether the district has held an **operating referendum**, when, and what the result was. Then check whether the resolution was adopted before or after **10 May 2023**, because that date decides whether charter schools share the revenue in Marion County.
8. Find the **next public meeting** of the body that governs this district, and check whether the agenda is posted. **Attending one is the cheapest civic act there is.**

**The habits this builds, which transfer to any American district.** The tool names change from state to state and the four facts do not: **which district a school is in, where that district's boundary runs, which overlapping jurisdictions cover the same ground, and which fund pays for the building.** Learn to find those four and you can research any school in the country.

**One rule you do not get to break.** **Do not run this drill on a child.** Do not attach a named student to an address, a school assignment or a demographic figure in anything you publish. Practise on institutions, boundaries and public bodies. **A school is a public body. A student is not.**

## Sources
- City of Indianapolis and Marion County. (n.d.). *MapIndy*. https://maps.indy.gov/MapIndy/
- Indiana Department of Education. (n.d.). *Indiana Graduates Prepared to Succeed (GPS)*. https://indianagps.doe.in.gov/
- Indiana Department of Local Government Finance. (2023, October 10). *Legislation affecting school funding matters* [Memorandum]. https://www.in.gov/dlgf/files/2023-memos/231010-Shackle-Memo-Legislation-Affecting-School-Funding-Matters.pdf
- National Center for Education Statistics. (n.d.-a). *School and district navigator*. https://nces.ed.gov/ccd/schoolmap/
- National Center for Education Statistics. (n.d.-b). *EDGE: School district boundaries*. https://nces.ed.gov/programs/edge/Geographic/DistrictBoundaries`,
      exercise: {
        instructions:
          "Type the missing term, number, body or year, then check. Close answers (spelling, capitalization) count as 'close', not wrong.",
        items: [
          {
            prompt: "The federal agency that publishes school district boundary files is the National Center for ___ Statistics.",
            answer: "Education",
            accept: ["education", "nces"],
            explanation: "Its EDGE program publishes composite district boundary files for school years from 1989-90 through 2024-25.",
          },
          {
            prompt: "The NCES public map for finding a school and its district is the School and District ___.",
            answer: "Navigator",
            accept: ["navigator", "school and district navigator"],
            explanation: "At nces.ed.gov/ccd/schoolmap/. Start there for any public school in the country.",
          },
          {
            prompt: "The official GIS for the Consolidated City of Indianapolis and Marion County is called ___.",
            answer: "MapIndy",
            accept: ["map indy", "mapindy"],
            explanation: "Turn on township, council district and school district as separate layers and watch three different shapes appear over the same ground.",
          },
          {
            prompt: "Marion County contains ___ school corporations today.",
            answer: "eleven",
            accept: ["11"],
            explanation: "IPS, eight township corporations, plus Beech Grove and Speedway. The same eleven the Seventh Circuit described in 1974.",
          },
          {
            prompt: "___ townships have land inside the IPS boundary, which is why the school district line is not a township line.",
            answer: "Seven",
            accept: ["7"],
            explanation: "Lawrence, Wayne, Washington, Warren, Pike, Decatur and Perry. The IPS line is a fossil of where the school district stopped growing.",
          },
          {
            prompt: "Indiana's statutory term for the tie between a student and the school corporation they belong to is legal ___.",
            answer: "settlement",
            accept: ["legal settlement"],
            explanation: "A district line does not only draw a school. It assigns a legal status to a child, and the money follows that status.",
          },
          {
            prompt: "Classroom operations in Indiana are paid mainly from state ___ support, distributed by a formula.",
            answer: "tuition",
            accept: ["tuition support"],
            explanation: "A foundation amount for every student plus complexity dollars for students from low-income backgrounds, plus targeted categories.",
          },
          {
            prompt: "The part of the funding formula that adds money for students from low-income backgrounds is the ___ index.",
            answer: "complexity",
            accept: ["complexity index"],
            explanation: "Foundation dollars follow every student; complexity dollars follow poverty.",
          },
          {
            prompt: "Buildings, buses and utilities are paid from the ___ fund, which is supported by local property tax.",
            answer: "operations",
            accept: ["operations fund", "operating"],
            explanation: "Along with debt service on bonds and leases. That is why a gym is a boundary question: the levy raises rate multiplied by the assessed value inside the line.",
          },
          {
            prompt: "A school corporation may ask voters to raise a property tax rate for operating costs through an operating ___ levy.",
            answer: "referendum",
            accept: ["referendum levy", "operating referendum"],
            explanation: "Under Indiana Code section 20-46-1. School corporations are the local governments that use this route.",
          },
          {
            prompt: "Under Senate Enrolled Act 391 of 2023, referendum revenue is shared with charter schools in four named counties: Lake, ___, St. Joseph and Vanderburgh.",
            answer: "Marion",
            accept: ["marion county"],
            explanation: "A statute that applies to four named counties is the 1961 technique running in 2023. Applies to resolutions adopted after 10 May 2023.",
          },
          {
            prompt: "Moving territory from one school corporation to another under Indiana Code 20-23-5 is called ___.",
            answer: "annexation",
            accept: ["annex", "school annexation"],
            explanation: "Defined as any action whereby the boundaries of a school corporation are changed so that territory of another corporation is transferred to it.",
          },
          {
            prompt: "Voters in the district losing territory can block or delay that annexation by filing a ___.",
            answer: "remonstrance",
            accept: ["remonstrance petition"],
            explanation: "The same instrument the 1961 act inserted into Marion County school annexations. It forbids nothing; it makes an automatic step stoppable.",
          },
          {
            prompt: "The 2026 body that took over IPS budgets, levies, property and transportation is the Indianapolis Public ___ Corporation.",
            answer: "Education",
            accept: ["education", "ipec"],
            explanation: "Created by House Enrolled Act 1423, with a nine-member board appointed by the mayor and full implementation in the 2028-29 school year. It changed who governs inside the line, not the line.",
          },
          {
            prompt: "In November 2025, IPS board members floated shrinking the district to ___ Township alone.",
            answer: "Center",
            accept: ["center township", "centre"],
            explanation: "Bounded by 38th Street, Emerson Avenue, Troy Avenue and Belmont Avenue. It would remove 47 schools and affect more than 10,000 students. Nothing has been adopted.",
          },
        ],
      },
    },
    {
      slug: "gcl-quiz-next",
      title: "19 · Quiz: the line in the present tense",
      section: "Section 5 · Next",
      quiz: {
        passingScore: 70,
        // 15-question bank served 8 at a time with shuffled options (the repo standard).
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Why can no 360 tour ever show you the most important object in this course?",
            options: [
              "Because the tour cameras simply are not mounted high enough",
              "Because a district boundary has no physical existence to photograph",
              "Because school district boundaries are legally confidential records",
              "Because the boundaries change far too often to ever photograph",
            ],
            correctIndex: 1,
            explanation: "That invisible line decides which building a child may enter, which is the strongest possible argument for reading records rather than only looking.",
            sourceLessonSlug: "gcl-now-tour",
          },
          {
            prompt: "When you record a gym's seating capacity, what must you record with it?",
            options: [
              "The architect's name",
              "The number of championships won there",
              "The year and the source",
              "The size of the parking lot",
            ],
            correctIndex: 2,
            explanation: "A 2019 recount reordered Indiana's largest high school gyms and a 2020 renovation reordered them again. New Castle is reported at 8,424 today and 9,325 in 1959-60, and both can be right.",
            sourceLessonSlug: "gcl-now-tour",
          },
          {
            prompt: "How should you treat a championship banner or a dedication plaque in a school lobby?",
            options: [
              "As mere lobby decoration, never as historical evidence",
              "As firm proof the events happened exactly as described",
              "As a trustworthy source that needs no further citation",
              "As a dated document with an author and a sponsor behind it",
            ],
            correctIndex: 3,
            explanation: "Note which years are up and which are not, and who decides what goes on the wall.",
            sourceLessonSlug: "gcl-now-tour",
          },
          {
            prompt: "Why does the lesson map plot other cities rather than Marion County's eleven districts?",
            options: [
              "Because the Marion County boundary data is entirely unavailable",
              "Because Marion County is too small to separate into distinct dots",
              "Because the other cities matter far more to this argument here",
              "Because the base map cannot display any markers inside Indiana",
            ],
            correctIndex: 1,
            explanation: "Choosing the right scale of map for your question is a research skill. For a boundary you need a boundary file, not a world map.",
            sourceLessonSlug: "gcl-map",
          },
          {
            prompt: "What did the Connecticut Supreme Court hold in Sheff v. O'Neill in 1996, and why is it on this map?",
            options: [
              "That Milliken's federal rule applied to the state courts too",
              "That Hartford's schools were already adequately integrated",
              "That the state had a duty to provide equal educational opportunity",
              "That school districts were free to secede from their counties",
            ],
            correctIndex: 2,
            explanation: "Milliken is a federal constitutional decision and does not control what a state constitution requires. That question has fifty different answers.",
            sourceLessonSlug: "gcl-map",
          },
          {
            prompt: "In the Memphis and Shelby County case, why was the first statute allowing suburban municipalities to form their own districts struck down?",
            options: [
              "Because it unconstitutionally applied only to Shelby County",
              "Because the suburban municipalities failed to hold their referenda",
              "Because the proposed new districts were far too small to be viable",
              "Because the county-wide school merger had not yet taken effect",
            ],
            correctIndex: 0,
            explanation: "That is the same one-county carve-out technique Indiana used in 1961. Tennessee's constitution treats such local legislation differently than Indiana's did.",
            sourceLessonSlug: "gcl-map",
          },
          {
            prompt: "How many townships have land inside the Indianapolis Public Schools boundary?",
            options: ["One, Center Township", "Three", "Seven", "All nine"],
            correctIndex: 2,
            explanation: "Lawrence, Wayne, Washington, Warren, Pike, Decatur and Perry. The IPS line is not a township line and not the current city limit. It is a fossil of where the school district stopped growing.",
            sourceLessonSlug: "gcl-next-live-civics",
          },
          {
            prompt: "In Indiana, which money pays for classroom operations and which pays for buildings and buses?",
            options: [
              "Both come entirely from the local property tax on real estate",
              "Both come straight from the state's general fund budget alone",
              "Classrooms come from federal grants and buildings from the county",
              "State aid pays classrooms; local property tax pays for buildings",
            ],
            correctIndex: 3,
            explanation: "Which is why a gym is a boundary question even in a state that pays for teaching centrally.",
            sourceLessonSlug: "gcl-next-live-civics",
          },
          {
            prompt: "Why does a district boundary still determine what a community can build, even where the state pays for teaching?",
            options: [
              "Because a levy equals the tax rate times the value inside the line",
              "Because the state deliberately gives extra money to wealthy districts",
              "Because the building codes themselves vary from district to district",
              "Because all construction contracts are awarded by the local school board",
            ],
            correctIndex: 0,
            explanation: "A district with high-value property inside its line can build a fieldhouse at a rate that raises nothing like as much next door.",
            sourceLessonSlug: "gcl-next-live-civics",
          },
          {
            prompt: "Senate Enrolled Act 391 of 2023 required referendum revenue sharing with charter schools in which counties?",
            options: [
              "All 92 Indiana counties",
              "Lake, Marion, St. Joseph and Vanderburgh",
              "Marion County only",
              "No counties; it was statewide from 2028",
            ],
            correctIndex: 1,
            explanation: "A statute naming four counties is the 1961 technique running in 2023. It applies to referendum resolutions adopted after 10 May 2023.",
            sourceLessonSlug: "gcl-next-live-civics",
          },
          {
            prompt: "What did Senate Enrolled Act 1 of 2025 change about school referendums?",
            options: [
              "It permanently abolished all local school referendums outright",
              "It required a full two-thirds supermajority to pass a referendum",
              "It limited referendums to even-year November general elections",
              "It transferred all referendum authority to the county councils",
            ],
            correctIndex: 2,
            explanation: "The Indiana Fiscal Policy Institute projects districts will lose about 338 million dollars in anticipated revenue by 2028, and IPS an estimated 97 million between 2026 and 2032. A district now gets one ballot chance every two years.",
            sourceLessonSlug: "gcl-next-live-civics",
          },
          {
            prompt: "Under Indiana Code 20-23-5, what does it take to move territory from one school corporation to another?",
            options: [
              "Resolutions by both districts, with voters able to remonstrate",
              "A single vote of the full state board of education alone",
              "A binding county-wide public referendum of the voters",
              "A direct order of the Department of Local Government Finance",
            ],
            correctIndex: 0,
            explanation: "The remonstrance the 1961 act inserted into Marion County school annexations is still in the statute sixty-five years later.",
            sourceLessonSlug: "gcl-next-live-civics",
          },
          {
            prompt: "What did House Enrolled Act 1423 of 2026 do?",
            options: [
              "It formally merged IPS with the eight township districts",
              "It shrank the IPS boundary down to Center Township alone",
              "It abolished the elected IPS school board entirely at once",
              "It created a nine-member education board appointed by the mayor",
            ],
            correctIndex: 3,
            explanation: "Note what it did NOT do: it did not move the boundary. It moved the power inside it. Ask both questions about any district: where is the line, and who holds power inside it?",
            sourceLessonSlug: "gcl-next-live-civics",
          },
          {
            prompt: "The November 2025 proposal to shrink IPS to Center Township would have done what, and what is its status?",
            options: [
              "Removed 47 schools and 10,000-plus students; nothing adopted yet",
              "Added three whole townships to IPS; it was adopted in December 2025",
              "Merged IPS with Beech Grove and Speedway; it is now before a court",
              "Dissolved the IPS district entirely; it takes full effect in 2028",
            ],
            correctIndex: 0,
            explanation: "Bounded by 38th Street, Emerson Avenue, Troy Avenue and Belmont Avenue. 'Not adopted yet' is the finding, and it is where a citizen has the most leverage.",
            sourceLessonSlug: "gcl-next-live-civics",
          },
          {
            prompt: "The exercise ends with one rule you do not get to break. What is it?",
            options: [
              "Never once criticize a sitting school board in your writing",
              "Never attach a named student to an address or a school assignment",
              "Never download the district's public boundary files yourself",
              "Never attend any public board meeting without prior permission",
            ],
            correctIndex: 1,
            explanation: "Practise on institutions, boundaries and public bodies. A school is a public body. A student is not.",
            sourceLessonSlug: "gcl-next-exercise-district",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 6 · Write  (beat 6: ELA and creative nonfiction, grounded in one room)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "gcl-write-assignment",
      title: "20 · Your assignment: one gym, and the line that decides who is in it",
      section: "Section 6 · Write",
      lessonType: "assignment",
      body: `Beat 6 asks a question no other beat can: **what can only be said about this place?** Answering it is a writing problem, and this is a real assignment with a real evidence standard.

## The assignment

Write **900 to 1,300 words** of creative nonfiction **set in a gymnasium**. One room. It may be Crispus Attucks, Hinkle, New Castle, Muncie, a township gym in Marion County, or **the gym in your own town**, which is often the better choice. Every factual sentence must be checkable against a source you name. **The form is literary. The standard of evidence is the one Section 3 used on a federal opinion.**

## Step 1 · Choose one room, and choose small

"Indiana basketball" is a topic, not a subject. **A subject is one room on one date.** The 1955 final at Butler Fieldhouse. A Tuesday sectional in a town of 4,000. The 1938 addition at Attucks, or the second gym built there in 1966. The 2,400-seat gym arriving at Attucks in 2028, which does not exist yet and therefore can only be written about as a plan with a budget and a completion date.

**If you cannot visit, that is a constraint you disclose in the piece**, and it changes what you may honestly claim.

## Step 2 · Build the four-column chronology before you write a sentence

Lesson 13 tested an argument with a table and got a different answer than course 1 did. Build your own, with these columns: **date, event, instrument, source.**

**If the instrument column is empty for an event, you have a story and not yet a decision.** Section 2 already gave you a worked example for Attucks: 1911 tournament, 1922 resolution, 1927 opening, 1938 gym, 1942 IHSAA admission, 1949 statute, 1955 championship, 1966 second gym, 1973 first football tournament, 2028 new gym. **Ten dates, all cited.**

## Step 3 · Find the line. This step is required, and it is what makes this a civics assignment

**Your piece must name three things:**
1. **Which school district the room is in**, from the NCES School and District Navigator or your state's equivalent.
2. **Where that district's boundary runs**, and what is on the other side of it.
3. **One dated decision that put the boundary there**, or a clear statement that you could not find one and where you looked.

**That third item is the whole course.** In Indianapolis the decision is a 1969 statute and two acts before it. In your town it may be a township line nobody has revisited since the nineteenth century, a 1960s consolidation, a secession vote, or a merger. **In some places the honest answer is "no single decision, and here is the search I ran."** That is a finding and it is publishable.

## Step 4 · Decide what kind of piece this is

Pick one and commit, because mixing them is what makes place writing mushy.
- **A biography of a room.** Its span, its uses, its additions, its capacity across years, its end or its survival.
- **A history of a decision.** One resolution, one waiver, one rezoning, one boundary change, one vote, followed to the document.
- **A report on a present.** What is there now, who uses it, what is being built, what a public meeting sounded like.
- **A piece about the record itself.** What you could and could not find, and what the gap means.

**The fourth is the hardest and often the best**, and it is the only one that can be written honestly with thin sources.

## Step 5 · Write it, under these craft rules

1. **Lead with a specific.** A capacity with a year, a footnote in an opinion, an acreage. Not a mood, and not the crowd noise.
2. **Name the instrument every time you name an outcome.** "The school was overcrowded" is weak. "The site was 8.4 acres, the State Board granted a waiver capped at 2,200 students, and the school enrolled 2,394" is strong, and it is a footnote you can cite.
3. **Give every figure its owner and its year.** Not "the largest high school gym in the world" but "Indiana's state tourism office describes New Castle Fieldhouse as the largest high school arena in the world."
4. **Attribute an argument as an argument.** Sports Illustrated titled its account "The real Hoosiers tale." **That is a framing with an author. You may quote it and engage it. You may not launder it into your own narration as a finding.**
5. **Use the present tense for the present.** Crispus Attucks is an open, competing, expanding school with about 1,200 students. Write it that way.
6. **One paragraph, minimum, on what you could not establish.** Required, not optional.

## Rules you do not get to break

1. **No invented detail.** Not a score, an attendance figure, a quotation, a street number, a coach, a player, or a statistic. **If a source does not say it, you do not write it.** This includes atmospheric invention: you do not know what the floor smelled like in 1955.
2. **No composite or imagined characters.** Real, cited people only. Matthias Nolcox, Ray Crowe, Bill Garrett, Archie Greathouse, Judge S. Hugh Dillin, Richard Lugar, Landrum Shields. **That is more than enough material.**
3. **No invented dialogue**, including "he might have said."
4. **Living people describe themselves.** Attucks alumni are alive. **Their memoir is theirs to write.** Quote a published interview with a citation, or interview somebody and say that you did. Do not put words, feelings or motives into a living person.
5. **No ruin porn and no lost golden age**, and one more that this subject needs specifically: **no triumph-only version either.** Three state championships won by a school that was built to segregate a city, on a site a third the size the state's own formula required, is not a happy ending. **A community winning inside a constraint is not the constraint being justified.** Hold both facts in the same paragraph or you have not written the piece.
6. **Credit what was built.** A faculty recruited from Black colleges across the South. Coaches who won and then coached again. A community that filled a building the city had capped. Championships in 1955, 1956, 1959 and 2017. **A piece that inventories only what was done to people is an incomplete report.**
7. **Students are not public figures.** Never attach a named current student to a school assignment, an address or a demographic figure. **A school is a public body. A child is not.**
8. **Say what you did to a number.** If you converted a capacity, adjusted a dollar figure for inflation, or combined two sources, say so and say how.

## What good looks like

A short, checkable piece in which every sentence is either something you read in a named source or something you clearly mark as unresolved, **and in which the prose is still good.** Those two standards do not conflict. **A school on 8.4 acres holding 2,394 students under a waiver capped at 2,200. A team playing its home games in somebody else's 15,000-seat building. A judge writing that the City's sense of priorities struck the Court as curious.** None of that needs decorating.

## Sources
- Bamberger, M. (2016, February 23). *The real Hoosiers tale: Crispus Attucks*. Sports Illustrated. https://www.si.com/nba/2016/02/23/crispus-attucks-oscar-robertson-hoosiers-pacers-indiana-high-school
- Chalkbeat Indiana. (2026a, May 6). *Crispus Attucks High School is getting a $44 million upgrade. Here's what's in store.* https://www.chalkbeat.org/indiana/2026/05/06/crispus-attucks-high-school-gets-new-health-lab-and-gym/
- Encyclopedia of Indianapolis. (n.d.-a). *Crispus Attucks High School*. https://indyencyclopedia.org/crispus-attucks-high-school/
- National Center for Education Statistics. (n.d.-a). *School and district navigator*. https://nces.ed.gov/ccd/schoolmap/
- United States v. Board of School Commissioners of the City of Indianapolis, 332 F. Supp. 655 (S.D. Ind. 1971). https://law.justia.com/cases/federal/district-courts/FSupp/332/655/1624629/`,
      recallContent: [
        {
          prompt: "What three things must your piece name about the district line?",
          answer: "Which school district the room is in, where that district's boundary runs and what is on the other side of it, and one dated decision that put the boundary there, or a clear statement that you could not find one and where you looked.",
        },
        {
          prompt: "What are the four columns of the chronology you build before writing, and what does an empty column mean?",
          answer: "Date, event, instrument, source. An empty instrument column means you have a story rather than a documented decision.",
        },
        {
          prompt: "How must you handle Sports Illustrated's 'the real Hoosiers tale' framing?",
          answer: "As an argument with an author. Quote it and engage it. Do not launder it into your own narration as though it were a documented finding.",
        },
        {
          prompt: "Why does this assignment ban the triumph-only version as well as ruin porn?",
          answer: "Because three championships won by a school built to segregate a city, on a site a third the size the state's own formula required, is not a happy ending. A community winning inside a constraint is not the constraint being justified, and both facts belong in the same paragraph.",
        },
        {
          prompt: "What is the rule about living people and about students?",
          answer: "Living people describe themselves: quote a published interview with a citation or interview somebody and say you did, and never assign words, feelings or motives. Never attach a named current student to a school assignment, an address or a demographic figure. A school is a public body; a child is not.",
        },
      ],
    },
    {
      slug: "gcl-what-comes-next",
      title: "21 · What this course set up, and what it left out",
      section: "Section 6 · Write",
      body: `You have now run the six-beat site template a second time, on a second subject in the same metro. **Running it twice is the point.** Once is a story. Twice, with different results, is a method.

| Beat | What you did here | What you can now do anywhere |
|---|---|---|
| **1. Then** | Read a school out of a tournament timeline, a membership history and a board resolution | Establish what an institution was, from the records the institution itself keeps |
| **2. Built** | Read a building type by its span and its seating, then read a school by its acreage | Tell what a community chose to spend on, and what the parcel would not allow |
| **3. Powers** | Learned the attendance zone, the district line, a lawsuit and a Supreme Court rule, each traced to a body and a date | Ask "who decided, under what statute, on what record" about any school |
| **4. Now** | Built an observation brief, and learned that the decisive object is invisible | Look at a building with questions instead of impressions, and know what looking cannot answer |
| **5. Next** | Found the boundary file, the funding split, the statute for moving a line, and the body deciding this year | Participate in a live decision rather than commenting on a finished one |
| **6. Write** | Wrote grounded nonfiction under an evidence standard, with the line named | Publish something the next researcher can build on |

## What you can do that you could not do before

- **Name the instrument behind a school's population** rather than describing the population.
- **Test a thesis against a chronology and report the result either way.** Course 1 ran this test and reported a failure. This course ran it and reported a hold. **The test is only worth having because it can do both.**
- **Distinguish a claim about a document from a claim about the world.** "The court found more than 90 percent of about 350 boundary changes promoted segregation" is the first. "Indianapolis schools were segregated by accident" is the second, and the record contradicts it.
- **Read a funding formula as a boundary question.** Rate multiplied by assessed value inside the line.
- **Find any school's district, and any district's boundary file**, in any state.
- **Recognise that a proposal not yet adopted is where a citizen has the most leverage**, whether it is a redevelopment plan or a boundary change.

## What this course deliberately did not cover, and why

- **The Attucks athletic record in any depth.** The team, the players, the seasons, and Oscar Robertson's career are a sports history this course touches only where it meets the boundary. **They deserve their own treatment and this is not it.**
- **The IHSAA's own institutional history.** The 1941 resolution and the 1942 admission are stated with dates; **why the association changed its rule when it did is not established here.**
- **What actually stood on the 8.4 acres.** Section 2 says so in the text. The 1989 National Register nomination and the Sanborn maps would settle it and neither has been read.
- **Any judgment about whether the busing remedy was worth it.** The record here does not settle it, and the assessments in circulation disagree. **Section 3 reports the disagreement and names its owner.**
- **The dissents in Milliken v. Bradley.** Lesson 12 explains exactly why: the full-text sources read did not carry them, so quoting them would have meant quoting something this course had not seen.
- **The parochial and Catholic school systems in Marion County**, which are a large part of who is in which building and are outside a course about public district lines.

## The unopened sources, which are the next real work

**None of these has been read into this course.** All are public or requestable:
- **The Board of School Commissioners' minutes, 1954 to 1971**, where roughly 350 boundary changes live as ordinary agenda items.
- **The General Assembly's committee record for the 1961 act and the 1969 Unigov bill**, which would show who asked for the Marion County carve-out.
- **The township school boards' minutes**, where remonstrances would appear.
- **The Indianapolis Recorder, 1922 to 1981**, which covered the founding of Attucks, the championships, and the case, for the community they were about.
- **The 1989 National Register nomination for Crispus Attucks High School**, and the Sanborn fire insurance maps.
- **The Indianapolis Star and the Indianapolis Recorder for 20 March 1955**, which would settle the parade disagreement in lesson 3.

**If you want to make an original contribution to this story rather than restate it, that is the list.**

## One last thing about the place

**This is not a story about a school that was done to.** A city was asked by its chamber of commerce to build a segregated high school, and did. A lawsuit was filed against it at the time, in public, by named people, and lost. The building went up on a third of the land the state's own formula asked for. **And then a faculty recruited from Black colleges across the South taught in it, and its teams won the state in 1955, 1956 and 1959, in a state that until 1942 would not let them enter the tournament, and again in 2017, and the school is being expanded right now with a new gym due in 2028.**

**Both halves are true and neither cancels the other.** The buildings are the evidence. **The line is the argument.** And the line is still there, still deciding, still amendable by a resolution, a remonstrance or an act of a legislature. **That is why this is a civics course wearing a fieldhouse.**

## Sources
- Chalkbeat Indiana. (2026a, May 6). *Crispus Attucks High School is getting a $44 million upgrade. Here's what's in store.* https://www.chalkbeat.org/indiana/2026/05/06/crispus-attucks-high-school-gets-new-health-lab-and-gym/
- Encyclopedia of Indianapolis. (n.d.-a). *Crispus Attucks High School*. https://indyencyclopedia.org/crispus-attucks-high-school/
- Encyclopedia of Indianapolis. (n.d.-e). *U.S. v. Board of School Commissioners*. https://indyencyclopedia.org/u-s-v-board-of-school-commissioners/
- Indiana High School Athletic Association. (n.d.-b). *Membership history, 1903 to present*. https://www.ihsaa.org/sites/default/files/documents/Membership%20History.pdf
- United States v. Board of School Commissioners of the City of Indianapolis, 332 F. Supp. 655 (S.D. Ind. 1971). https://law.justia.com/cases/federal/district-courts/FSupp/332/655/1624629/`,
      recallContent: [
        {
          prompt: "How many townships have land inside the IPS boundary, and why does that matter?",
          answer: "Seven: Lawrence, Wayne, Washington, Warren, Pike, Decatur and Perry. The IPS line is not a township line and not the current city limit. It is roughly where the school district stopped growing, frozen by the 1961 and 1969 acts and by Unigov.",
        },
        {
          prompt: "In Indiana, which parts of a school budget come from the state and which from local property tax?",
          answer: "Classroom operations come mainly from state tuition support, distributed by a formula with a foundation amount plus complexity dollars for students from low-income backgrounds. Local property tax supports the operations fund, debt service on bonds and leases, and any referendum levy under Indiana Code 20-46-1 or 20-46-9.",
        },
        {
          prompt: "Why does a district boundary still decide whether a community can build a gym?",
          answer: "Because a property tax levy raises rate multiplied by the assessed value inside the line. Two districts with identical rates and identical children raise different amounts if different parcels are inside them, and buildings are paid for from the property tax side.",
        },
        {
          prompt: "Give the three routes by which a school district line can be moved in Indiana.",
          answer: "Annexation between school corporations under Indiana Code 20-23-5, which needs a resolution from both the losing and the gaining district and is subject to remonstrance by voters in the losing district; reorganisation under 20-23-4; and an act of the General Assembly, which is what Indiana actually used in 1961, 1969, 2025 and 2026.",
        },
        {
          prompt: "What did the 2026 law do to the IPS boundary, and what did it do instead?",
          answer: "Nothing to the boundary. House Enrolled Act 1423 created the Indianapolis Public Education Corporation, a nine-member board appointed by the mayor, which takes over budgets and tax levies, property, transportation and school performance, with full implementation in 2028-29. A boundary can stay put while everything about who governs inside it changes.",
        },
        {
          prompt: "What is 'legal settlement' and why does the term matter here?",
          answer: "Indiana's statutory term for the tie between a student and a school corporation. A district line does not only draw a school, it assigns a legal status to a child, and that status is what the money follows.",
        },
      ],
    },
    // <<< APPEND NEXT SECTION ABOVE THIS LINE >>>
  ],
};
