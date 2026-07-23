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
      title: "1 · A state that organised itself around a school gym",
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
      slug: "gcl-attucks-built",
      title: "2 · Crispus Attucks: who asked for it, who fought it, what opened",
      section: "Section 1 · Then",
      body: `**A school is a decision, and this one has a date and a vote.**

**The decision.** On **22 December 1922**, the Indianapolis Board of School Commissioners adopted a resolution authorising the construction of a "Colored High School." Judge S. Hugh Dillin's 1971 findings record that the resolution came "with impetus provided by a petition from the Indianapolis Chamber of Commerce" (*United States v. Board of School Commissioners*, 1971, p. 663). **Note who is in that sentence.** A chamber of commerce is a business association, not a school authority, and it is on the record asking a school board to segregate a school system that was not yet segregated at the high school level.

**Who else pushed.** The Encyclopedia of Indianapolis names the Federation of Community Civic Clubs, the Chamber of Commerce, the White Supremacy League and the Mapleton Civic Association among the organisations supporting a separate school, and notes the **1924** election of Ku Klux Klan members to local offices as the climate in which the project proceeded (Encyclopedia of Indianapolis, n.d.-a).

**Who fought it, and lost.** The NAACP sued in the name of an Indianapolis resident, **Archie Greathouse**, "charging that students would not receive an equal education in a separate school." **The suit and the appeal both failed**, and construction went ahead (Encyclopedia of Indianapolis, n.d.-a). Keep this. It is the same shape as the state NAACP's position recorded in course 1: the objection was made at the time, in public, by named people, and it was overruled. **Nobody in this story had to wait for hindsight.**

**What opened.** Crispus Attucks High School opened in **September 1927** under principal **Matthias Nolcox**, who recruited faculty from Black colleges across the South. Enrolment came in at **1,350** rather than the anticipated 1,000, and staff had to be increased the following year (Encyclopedia of Indianapolis, n.d.-a).

**And what the opening did legally.** Dillin's findings are blunt: "When such school, Crispus Attucks, was opened in September, 1927, **all Negro high school students were forthwith compelled to attend it, regardless of their place of residence in the city**" (*United States v. Board of School Commissioners*, 1971, p. 663). One school, one race, one city, and no exceptions for where you lived.

**The detail most retellings skip, and it is about buses.** In **1935**, the 1869 Indiana school act was amended again "to require the Board to provide transportation for Negro students required to travel more than a certain distance **by reason of its segregation policies**" (*United States v. Board of School Commissioners*, 1971, p. 663). **Read that carefully.** School buses were provided in Indianapolis in the 1930s in order to make segregation work at city scale. Forty-six years later the same city would be ordered to run buses to undo it. **The vehicle is not the policy. The assignment rule is the policy.**

**The state law underneath all of it.** Indiana's General Assembly enacted a law in **1869** providing for the education of Black children for the first time, and providing for them to be organised into separate schools. In **1874** the Indiana Supreme Court held in *Cory v. Carter* that under that act Black children were not entitled to admission to the common schools provided for white students. An **1877** amendment required admission to white schools only if no separate school of comparable grade was provided (*United States v. Board of School Commissioners*, 1971, pp. 661-662; Encyclopedia of Indianapolis, n.d.-b).

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

**Three sources, three versions.** All three agree the celebration ended at **Northwestern Park**, in the Black neighbourhood. They do not agree about the Circle.

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
              "1899, in Indianapolis",
              "1911, at Assembly Hall on the Indiana University campus in Bloomington",
              "1928, at Butler Fieldhouse",
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
              "1911, at the tournament's founding",
              "Admitted 15 August 1942 after a December 1941 Athletic Council resolution, eligible for the 1943 tournament",
              "1954, after Brown v. Board of Education",
              "1970, under court order",
            ],
            correctIndex: 1,
            explanation: "For the first three decades of the state tournament, some schools were not permitted to enter it at all.",
            sourceLessonSlug: "gcl-hoosier-hysteria",
          },
          {
            prompt: "What did the Indianapolis Board of School Commissioners do on 22 December 1922?",
            options: [
              "Voted to desegregate the high schools",
              "Adopted a resolution authorising construction of a 'Colored High School'",
              "Purchased the Attucks site",
              "Petitioned the IHSAA for membership",
            ],
            correctIndex: 1,
            explanation: "Judge Dillin's 1971 findings record the impetus as a petition from the Indianapolis Chamber of Commerce.",
            sourceLessonSlug: "gcl-attucks-built",
          },
          {
            prompt: "The NAACP's lawsuit against the creation of a segregated Indianapolis high school was filed in the name of:",
            options: ["Matthias Nolcox", "Archie Greathouse", "Freeman B. Ransom", "Donny Brurell Buckley"],
            correctIndex: 1,
            explanation: "The suit charged that students would not receive an equal education in a separate school. It failed, as did the appeal.",
            sourceLessonSlug: "gcl-attucks-built",
          },
          {
            prompt: "What happened to Black high school students in Indianapolis when Attucks opened in September 1927?",
            options: [
              "They could choose between Attucks and their neighbourhood school",
              "They were compelled to attend Attucks regardless of where in the city they lived",
              "Only those living within two miles were assigned there",
              "Enrolment was voluntary until 1949",
            ],
            correctIndex: 1,
            explanation: "The court's words are 'forthwith compelled to attend it, regardless of their place of residence in the city.'",
            sourceLessonSlug: "gcl-attucks-built",
          },
          {
            prompt: "What did the 1935 amendment to Indiana's 1869 school act require?",
            options: [
              "That segregated schools be equally funded",
              "That the board provide transportation for Black students required to travel farther by reason of its segregation policies",
              "That Attucks be admitted to the IHSAA",
              "That optional attendance zones be abolished",
            ],
            correctIndex: 1,
            explanation: "Buses were used to make segregation work at city scale decades before a court ordered buses to undo it. The vehicle is not the policy; the assignment rule is.",
            sourceLessonSlug: "gcl-attucks-built",
          },
          {
            prompt: "Chapter 186 of Indiana's Acts of 1949 did what?",
            options: [
              "Created the township school districts",
              "Declared it state policy to abolish segregated and separate schools and school districts, and required desegregation on a phased basis",
              "Authorised Unigov",
              "Established the IHSAA",
            ],
            correctIndex: 1,
            explanation: "Judge Dillin observed that Indiana 'completely anticipated and completely adopted the holding in Brown I' five years early. Which is why the persistence of segregation afterward is a question about boundaries, not statutes.",
            sourceLessonSlug: "gcl-attucks-built",
          },
          {
            prompt: "In 1874 the Indiana Supreme Court held in Cory v. Carter that:",
            options: [
              "Segregated schools were unconstitutional",
              "Under the 1869 act, Black children were not entitled to admission to the common schools provided for white students",
              "School district boundaries had to match city boundaries",
              "The IHSAA could not exclude Black schools",
            ],
            correctIndex: 1,
            explanation: "An 1877 amendment required admission to white schools only where no separate school of comparable grade was provided.",
            sourceLessonSlug: "gcl-attucks-built",
          },
          {
            prompt: "Which Attucks championship claim has the cleanest, most checkable citation?",
            options: [
              "That it was the first all-Black team in the nation to win a state title",
              "That the 1955 team was the first Indianapolis boys team to win the state tournament begun in 1911",
              "That it never lost a tournament game",
              "That it was the first team to win three titles",
            ],
            correctIndex: 1,
            explanation: "It is checkable against the tournament's own champion list. The national superlative requires checking every state association's record before 1955, which this course has not done.",
            sourceLessonSlug: "gcl-attucks-champions",
          },
          {
            prompt: "Attucks won the 1955 state final against which school, and why is that matchup significant?",
            options: [
              "Milan; it was the Hoosiers rematch",
              "Gary Roosevelt, also an all-Black school, so both teams on the state's biggest stage were segregated schools",
              "Lafayette Jefferson; it was the first integrated final",
              "Shelbyville; it was Bill Garrett's old school",
            ],
            correctIndex: 1,
            explanation: "The Indiana Historical Bureau's account notes that with two Black teams on the floor there was no question of biased officiating deciding it.",
            sourceLessonSlug: "gcl-attucks-champions",
          },
          {
            prompt: "Three sources describe the celebration after the 1955 championship. What does this course do?",
            options: [
              "Picks the most dramatic version",
              "Gives all three with their owners, notes they agree the celebration ended at Northwestern Park and disagree about the Circle, and names the unread records that would settle it",
              "Averages them",
              "Omits the celebration",
            ],
            correctIndex: 1,
            explanation: "The Encyclopedia has a mayoral greeting at the Circle; the Historical Bureau has a shortened parade route; Sports Illustrated says police would not let the team stop there. The emphasis is the disagreement.",
            sourceLessonSlug: "gcl-attucks-champions",
          },
          {
            prompt: "Who coached the 1959 Attucks championship team, and what else is he known for?",
            options: [
              "Ray Crowe, who also coached 1955 and 1956",
              "Bill Garrett, who led Shelbyville to the 1947 state title and whose 1948 Indiana University debut challenged the Big Ten's unwritten bar on Black players",
              "Matthias Nolcox, the school's first principal",
              "Oscar Robertson, as a player-coach",
            ],
            correctIndex: 1,
            explanation: "The Indiana Historical Bureau's 'Integrating Basketball' marker records Garrett's IU career and his appointment at Attucks in 1957.",
            sourceLessonSlug: "gcl-attucks-champions",
          },
          {
            prompt: "When did Attucks next win a state championship after 1959?",
            options: ["1970", "1988", "2006", "2017, in Class 3A"],
            correctIndex: 3,
            explanation: "Fifty-eight years later. The school is open, competing and being expanded today, which is why this course refuses a lost-golden-age frame.",
            sourceLessonSlug: "gcl-attucks-champions",
          },
          {
            prompt: "Sports Illustrated titled its account of Attucks 'The real Hoosiers tale.' What does that headline concede?",
            options: [
              "That the film Hoosiers was factually accurate",
              "That the championship a state made into a national film was Milan's in 1954, while three championships by a segregated Black high school in 1955, 1956 and 1959 did not become the movie",
              "That Attucks was fictional",
              "That Milan and Attucks played each other",
            ],
            correctIndex: 1,
            explanation: "Which story a place tells about itself is evidence about the place, and Section 6 asks you to write about that kind of evidence.",
            sourceLessonSlug: "gcl-attucks-champions",
          },
        ],
      },
    },
    // <<< APPEND NEXT SECTION ABOVE THIS LINE >>>
  ],
};
