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
      slug: "gcl-built-8-acres",
      title: "6 · Eight point four acres: reading a school by its land",
      section: "Section 2 · Built",
      body: `**This is the lesson where the building type stops being charming.**

**The state had a formula, and it is in the record.** Judge Dillin's 1971 findings note that Indiana's **State Superintendent of Public Instruction had established minimum acreage requirements of seven acres for the first 200 students and one acre for each additional 100 students** (*United States v. Board of School Commissioners*, 1971, p. 685 n.60).

**Do the arithmetic yourself, because that is the exercise.** Take a school of **2,394** students. Seven acres covers the first 200. The remaining 2,194 students, at one acre per hundred, ask for roughly **21.9** more. **The state's own minimum for a school that size is therefore about 29 acres.**

**Now the finding.** "Because of the small size of the Attucks site (**8.4 acres**), a waiver had to be secured from the State Board of Education. This waiver was obtained, **with the proviso that no more than 2,200 students attend Attucks**; nevertheless, **in 1967-68 Attucks enrolled 2,394 students, 2,393 Negro and one white**" (*United States v. Board of School Commissioners*, 1971, p. 686 n.67).

**Read that footnote three times.** It contains, in one paragraph:
1. **A site under a third of the state's own minimum for its enrolment.**
2. **A waiver, meaning the state knew and signed off.**
3. **A cap attached to the waiver, at 2,200.**
4. **An enrolment 194 students over that cap.**
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
          answer: "It had a gymnasium from the 1938 addition and a second from 1966. The accurate version is that it had gyms on a site about a third of the state's own minimum for its enrolment, and played its biggest games in Butler Fieldhouse.",
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

**That is the mechanism in three sentences.** Draw an optional zone precisely where the neighbourhoods mix. Offer a choice. **Individual choices then do the sorting that an assignment rule would have had to do openly**, and the district's hands look clean because it assigned nobody.

**A rule that transfers to any district, any decade.** **When a rule is optional, ask who exercises the option and in which direction.** A policy that is facially neutral and statistically one-directional is doing work, and the direction is the evidence.

## The transfer policy, which is the same trick in a different file

Two findings from the same opinion, both in footnotes, both devastating:

> One reason for a transfer to be given "special consideration" was **if a pupil had an older sibling attending the preferred high school. This operated as a grandfather clause permitting white students to escape Attucks, and remained in effect through March, 1970.** (1971, p. 685 n.52.)

> "Furthermore, **proximity per se was not a legitimate reason for transfer, unless a student lived more than two miles from the assigned high school; this prevented Negro students who lived within two miles of Attucks from transferring** to other high schools which were closer to their residences." (1971, p. 685 n.52.)

**Read those two rules together.** A sibling rule lets you out. A distance rule keeps you in. **Neither mentions race. Both are race policy**, and the court said so.

## The rest of the toolkit, in the court's own list

Dillin catalogued the techniques the board used after 1954: "attendance zone boundary changes, the construction of additions, the construction of new schools, the provision of transportation or the adjustment of existing transportation, alteration in grade structures, and the location or relocation of special education classes in elementary schools. **Often these techniques were combined**" (1971, p. 665).

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
          prompt: "Quote Dillin's 1971 finding about boundary changes, and note the correction this course makes.",
          answer: "'According to the evidence, there have been approximately 350 boundary changes in the system since 1954. More than 90% of these promoted segregation.' The widely repeated version says 360; the opinion says approximately 350. Use the primary source and say you did.",
        },
        {
          prompt: "What is an optional attendance zone, and what did the court find it did?",
          answer: "An area whose students may choose between two schools. Drawn precisely where neighbourhoods mixed, it let individual choices do the sorting: white students in optional zones almost always attended white schools, and Black students were given options to Attucks even when whiter schools were closer.",
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

**Then a 1969 act tightened it further**, limiting the School City of Indianapolis to enlarging its territory by agreement with the losing school corporation or by unilateral annexation, **both subject to remonstrance**, and cancelling pending annexations by legislative fiat (1971, pp. 676-677).

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
          prompt: "What was Indiana's historic coterminous rule, and when was it recognised by statute?",
          answer: "When a city expanded its corporate limits, the school city succeeded to the township trustee's school powers, so the boundaries of a school city and a civil city were the same. The Seventh Circuit records the rule as finally recognised by statute in 1931.",
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

| | Black share of enrolment, 1969 |
|---|---|
| **Township school districts** | about **2.6 percent** |
| **Indianapolis Public Schools** | **more than one third** |

(Chalkbeat Indiana, 2016.)

**And the trend inside IPS, from the Seventh Circuit's own recital:** nonwhite enrolment was **18.9 percent in 1950**, **26 percent in 1960**, **35.9 percent in 1970**, and **41.1 percent** at the time of the 1973 trial (*United States v. Board of School Commissioners*, 1974, p. 74).

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
- The act also **barred annexation into neighbouring counties**, a restriction needed to get the votes.

**Fifty separate and overlapping governmental units remain within Marion County, with more than 61 taxing districts** (Wachter, 2014; Encyclopedia of Indianapolis, n.d.-d).

**Marion County still has eleven school districts today:** Indianapolis Public Schools, the eight township corporations (Decatur, Franklin, Lawrence, Perry, Pike, Warren, Washington and Wayne), plus Beech Grove and Speedway. **That is the same eleven the Seventh Circuit described in 1974**, which is a remarkable thing for a boundary to survive: fifty-six years, one Supreme Court decision, a federal desegregation order, thirty-five years of busing, and it is still the same eleven.

## Sources
- Chalkbeat Indiana. (2016, August 3). *How racial bias helped turn Indianapolis into one city with 11 school districts*. https://www.chalkbeat.org/indiana/2016/8/3/21098810/how-racial-bias-helped-turn-indianapolis-into-one-city-with-11-school-districts/
- Encyclopedia of Indianapolis. (n.d.-d). *Structure of Unigov*. https://indyencyclopedia.org/structure-of-unigov/
- United States v. Board of School Commissioners of the City of Indianapolis, 503 F.2d 68 (7th Cir. 1974). https://www.courtlistener.com/opinion/321692/united-states-of-america-donny-brurell-buckley-intervening-v-board-of/
- Wachter, J. (2014, May). *40 years after Unigov: Indianapolis and Marion County's experience with consolidated government*. The Abell Foundation. https://abell.org/wp-content/uploads/2022/02/ec-unigov514.pdf`,
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
    // <<< APPEND NEXT SECTION ABOVE THIS LINE >>>
  ],
};
