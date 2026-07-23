// Authored "Fort Harrison: The Federal Footprint" — a cited, high-school-and-up SITE course on
// Learn.WitUS (Culture & History). It is course 6 of the Indianapolis cluster planned in
// plans/39-indianapolis-pilot-cluster.md, and it runs the same six-beat site template as course 1
// (scripts/data/indiana-avenue-course.ts): Then, Built, Powers, Now, Next, Write.
//
// Prerequisite: `green-book-how-to-read-a-route` teaches the METHOD. This course applies it to a
// piece of ground that was owned by the federal government for most of the twentieth century.
//
// The civic question: what happens to a city when the federal government is the landowner?
//
// Two threads no other course in the cluster carries:
//   1. THE FEDERAL GOVERNMENT AS A CITY-SHAPER. A military post is a large parcel removed from the
//      local property-tax rolls and governed by another sovereign, then eventually handed back.
//      The handing back is a land-use decision with named instruments (BRAC, the Federal Property
//      and Administrative Services Act, a public benefit conveyance, a state reuse authority with
//      its own taxing district), and Section 3 teaches them the way course 1 taught blight
//      designation and eminent domain.
//   2. SEGREGATION ON FEDERAL LAND. plans/39 §4 listed "segregation practices on post" as a lead to
//      VERIFY. Lesson 3 reports exactly what the record supports and exactly where it is silent.
//      Two documented items specific to THIS post (an all-African American CCC company, 1936; the
//      April 1942 Chaplain School photographs) and a plainly stated list of what could not be
//      found. The silence is reported as a fact about the documents, never filled in from national
//      policy.
//
// Sourcing discipline (the load-bearing part of this file):
//   * Preference order: Army and NPS records, the National Register nomination, the HABS
//     documentation, the state agency that now manages the land, then scholarship, then reporting.
//   * NO INVENTED STATISTIC, QUOTATION, PERSON, ADDRESS, OR UNIT. Where sources disagree the course
//     gives the competing values WITH their owners: the establishment year (1902 / 1903 / 1904),
//     the acreage and price, the prisoner-of-war camp dates, the Finance Center's dimensions, and
//     the CCC company's number.
//   * Military history gets no adventure framing. The people who served here and the families who
//     lived on this post have living descendants.
//
// House rule: NO em-dashes or en-dashes in prose. Hyphenated year ranges inside verbatim cited
// titles and `## Sources` blocks are the only place a dash-like character survives.

import type { AuthoredCourse } from "./authored-course";

export const FORT_HARRISON_COURSE: AuthoredCourse = {
  title: "Fort Harrison: The Federal Footprint",
  description:
    "A cited, high-school-and-up site course on Fort Benjamin Harrison, the Army post northeast of Indianapolis that opened in 1908, trained officers in two world wars, held prisoners of war, ran the Army's money for forty years, closed under base realignment, and became a state park, a redevelopment district and a federal finance center all on the same ground. Course 6 of the Indianapolis cluster, and the one that asks what happens to a city when the federal government is the landowner. You will learn how a post is laid out and how to read rank off a street, why federal land pays no property tax and what a school district gets instead, how the base closure commission was built so that no member of Congress could save a single base, and how a public benefit conveyance decided that two thirds of this ground would be public forest rather than subdivisions. The segregation question is handled the way the record allows: two documented items specific to this post, and a plain list of what the preservation documents do not say. You will look up a real parcel, find who actually zones it, and write a piece of grounded nonfiction. A virtual tour of the post is planned and will be added to the Now section when it is published.",
  lessons: [
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 1 · Then  (beat 1: US and state/local history)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "fh-why-a-post",
      title: "1 · Why a post here: an arsenal, an objection, and a purchase",
      section: "Section 1 · Then",
      body: `**Start with the prerequisite.** This course assumes you have finished *The Green Book: How to Read a Route*, which taught a method: read a record down to its abbreviations and its silences, chain records together, read a gap as evidence, and research a place forward to what stands there now. It also assumes you have met the six-beat site template in *Indiana Avenue: A District and What Replaced It*, course 1 of this cluster. **This course points the same method at a different kind of owner.** On Indiana Avenue the decisive actors were a city redevelopment commission and a state university. Here the owner is the federal government, and that changes almost everything about who decides, which records exist, and where they are kept.

**The place.** Fort Benjamin Harrison sat in **Lawrence Township, Marion County, Indiana**, roughly nine to twelve miles northeast of downtown Indianapolis. It is named for **Benjamin Harrison**, the twenty-third president of the United States and an Indianapolis resident, who died in March 1901.

**How it got here is a siting decision, and siting decisions are the whole course in miniature.** The Historic American Buildings Survey documentation records the sequence. In March 1901 **Lieutenant Colonel Russell B. Harrison** came home to Indianapolis for his father's funeral and learned that the **U.S. Arsenal at Indianapolis**, a fixture of Indiana military life since 1861, was being phased out. He went to Washington to argue for its continued use. Late in 1901 a military board recommended converting the Arsenal into a battalion post, which would house part of an Army that had roughly doubled in size during the Spanish-American War (Fife & Salmon, n.d., pp. 2-3).

**Then the neighbours objected.** The Arsenal's 75-acre tract was on the east side of Indianapolis, and the National Register nomination is blunt about what happened: the Arsenal plan "was opposed by the city's residents because of its proximity to their growing residential and business communities" (McGillem et al., 1993, sec. 8, p. 1). Russell Harrison proposed the alternative: sell the Arsenal grounds and buy farmland outside the city. **A post nobody wanted next door went to where the land was cheap and the neighbours were few.** Hold onto that sentence. It is the same logic Section 3 of course 1 taught about highway alignments, running in the opposite political direction.

**The purchase, and your first documented disagreement.** Four institutional sources describe the land acquisition and they do not agree.

| Source | What it says |
|---|---|
| Encyclopedia of Indianapolis (n.d.-a) | **1,994 acres** purchased for **$279,238.01** |
| HABS documentation (Fife & Salmon, n.d., p. 2) | **1,994 acres** in 1903-4, plus **423 acres** in 1906-08, **2,417 acres total** at approximately **$279,000** |
| National Register nomination (McGillem et al., 1993, sec. 8, p. 1) | **2,415 acres** purchased for **$279,000** |
| Hankins (2020, p. 12) | **2,417 acres** bought from several farmers |

**Read the shape of that table rather than picking a winner.** The dollar figure is essentially the same in all four, which suggests one original number moving between documents. The acreage splits into two families: about 1,994 and about 2,416. **The HABS version explains both**, because it separates a first purchase from a later addition. That is a hypothesis you could test in the deed records, and this course has not tested it. **When you cite an acreage for this post, say which figure you used, whose it is, and what it counts.**

**Now the establishment date, which is worse and more useful.** Four sources give three different years, and one of them contradicts itself.

- **1902.** "Fort Benjamin Harrison was established by Congress in 1902" (Fife & Salmon, n.d., p. 2). The National Register nomination says the same thing on the same page where it also says 1903 (McGillem et al., 1993, sec. 8, p. 1).
- **1903.** The Indiana state historical marker, installed in 1996, reads: "Established by Congress, 1903, as infantry post" (Indiana Historical Bureau, 1996).
- **1904.** "Fort Benjamin Harrison was established June 28, 1904" (Encyclopedia of Indianapolis, n.d.-a).

**These are not necessarily four errors.** They are plausibly four different events being called establishment: a congressional authorisation, an appropriation, a land purchase, and a formal designation of the post. **The research instruction is to ask which act each source means**, because "established" is a summary word standing in for a specific document with a specific date. **Anything you cannot pin to a document is a date you are repeating, not a date you know.**

**One error you can actually catch.** The National Register nomination calls Russell Harrison "the grandson of former United States President Benjamin Harrison" (McGillem et al., 1993, sec. 8, p. 1). The HABS narrative says he came home "to attend the funeral of his father, Benjamin Harrison" (Fife & Salmon, n.d., p. 2). **Two federal preservation documents, one relationship, two answers.** Only one of them offers a checkable detail, and any presidential biography settles it in a minute. **A National Register nomination is an authoritative document and it is not an infallible one.** That is the single most useful thing in this lesson, and it is why every later lesson names its source rather than asserting.

**What was built, and when.** Construction of the original post complex began in **1906** and ran through **1910**, with most structures completed in **1908**, the year the first permanent infantry garrison moved in (McGillem et al., 1993, sec. 8, p. 2). In the summer of 1906 the unfinished site hosted **20,000 troops** for joint manoeuvres between the Regular Army and National Guard units from six midwestern states (Fife & Salmon, n.d., p. 3).

**Whom it garrisoned before the First World War.** The **10th** and **23rd U.S. Infantry** regiments, plus training for the Indiana State Militia. The 23rd came from posts along the Mexican border in Texas in **1912** and went back to Texas after a year (Fife & Salmon, n.d., p. 3). **The post was considered for closure several times before 1917 and was kept**, largely because a central location and good rail connections made it valuable as a mobilisation site if a serious war came (Fife & Salmon, n.d., pp. 3-4). **It was kept for a reason that later came true**, which is a rare thing to be able to say about an infrastructure decision.

## Sources
- Encyclopedia of Indianapolis. (n.d.-a). *Fort Benjamin Harrison*. https://indyencyclopedia.org/fort-benjamin-harrison/
- Fife, C. B., & Salmon, T. W., II. (n.d.). *Fort Benjamin Harrison* (HABS No. IN-289) [Written historical and descriptive data]. Historic American Buildings Survey, National Park Service. https://tile.loc.gov/storage-services/master/pnp/habshaer/in/in0400/in0407/data/in0407data.pdf
- Hankins, M. B. (2020). *Fort Benjamin Harrison: From military base to Indiana state park* [Master's thesis, Indiana University]. IUPUI ScholarWorks. https://scholarworks.iupui.edu/bitstream/handle/1805/22736/Hankins_Final_Masters%20Thesis_Fort_Ben.pdf
- Indiana Historical Bureau. (1996). *Fort Benjamin Harrison* [State historical marker 49.1996.1]. Indiana Historical Bureau. https://www.in.gov/history/state-historical-markers/find-a-marker/fort-benjamin-harrison/
- McGillem, D. E., & Associates, Cardinal, J. R., & Bush, D. R. (1993). *Fort Benjamin Harrison Historic District* [National Register of Historic Places registration form]. Indiana Department of Natural Resources. https://npgallery.nps.gov/NRHP/GetAsset/NRHP/93001581_text`,
      recallContent: [
        {
          prompt: "Why was the post built nine to twelve miles outside Indianapolis instead of at the existing Arsenal site?",
          answer: "The Arsenal plan was opposed by city residents because of its proximity to their growing residential and business communities, so Russell B. Harrison proposed selling the Arsenal grounds and buying farmland in Lawrence Township instead.",
        },
        {
          prompt: "Give the three establishment years in circulation for this post, with who says each.",
          answer: "1902 in the HABS documentation and in part of the National Register nomination; 1903 on the Indiana state historical marker and elsewhere in the same nomination; June 28, 1904 in the Encyclopedia of Indianapolis. They are plausibly four different acts all being called establishment.",
        },
        {
          prompt: "What is the acreage disagreement, and which source explains the others?",
          answer: "Sources give about 1,994 acres or about 2,415 to 2,417 acres for roughly the same price. The HABS documentation reconciles them by separating a 1903 to 1904 purchase of 1,994 acres from a further 423 acres bought in 1906 to 1908.",
        },
        {
          prompt: "What error can a reader catch in the National Register nomination, and why does it matter?",
          answer: "It calls Russell B. Harrison the grandson of President Benjamin Harrison; the HABS narrative says he came home for his father's funeral. A National Register nomination is authoritative but not infallible, so corroborate rather than repeat.",
        },
        {
          prompt: "When was the original post complex built, and which regiments garrisoned it before the First World War?",
          answer: "Construction ran from 1906 through 1910, most of it finished in 1908, when the first permanent infantry garrison arrived. The 10th and 23rd U.S. Infantry garrisoned it, and the post also trained the Indiana State Militia.",
        },
      ],
    },
    {
      slug: "fh-two-wars",
      title: "2 · What the post did in two wars",
      section: "Section 1 · Then",
      body: `A post is not one thing across ninety years. **What this one did changed with each war, and the changes are the most legible part of its record.**

## The First World War: a place that made officers

When the United States entered the war in 1917 the post became a training centre, and it filled fast. **An estimated 12,000 men were on the ground at the height of the activity in June 1917.** Three **Officer Training Camps** ran three months of intensive drill and instruction, the first with an enrolment of **5,200 men**. The grounds were dug with a network of practice trenches and their support systems. **Medical Officers Training Camps** followed, and then an **Engineers Training Camp** that prepared up to **9,000 men**, mostly as railroad specialists (Fife & Salmon, n.d., p. 4). By **1918** the post was an **Army railroad transport centre**, and the service and utility buildings surviving from that year reflect it (McGillem et al., 1993, sec. 8, p. 3).

**The hospital, and a name you will recognise.** The Indianapolis pharmaceutical company **Eli Lilly** contributed **$25,000** to establish **Base Hospital 32** at the post, one of **33 voluntary base hospitals** organised nationally before the United States entered the war. Staffed by local doctors and nurses, it set up a **500-bed hospital in France** (Fife & Salmon, n.d., p. 4). In **October 1917** the post hosted a medical convention of roughly **1,300 officers and 2,000 enlisted men**, with the Surgeon General of the Army, the Surgeon General of the Public Health Service, and British and French medical experts speaking.

**Then the influenza.** **General Hospital No. 25** was established in 1918 to treat injured troops coming home. The HABS narrative records that "mortality from the influenza epidemic, then raging across the country, was high," and that the hospital later specialised in treating troops suffering from what the document calls shell shock. **It closed in September 1919** (Fife & Salmon, n.d., p. 4). **Notice what that source does and does not give you.** It gives a fact about mortality with no number attached. **A course that supplied a number here would be inventing one**, and this one will not. The count exists somewhere in Army medical records and this course has not read them.

## Between the wars: citizenship camps, conservation, and an airfield

The **National Defense Act of 1920** reorganised the Army into nine corps areas. The post was first named headquarters of area five, but Ohio had taken that designation by 1922 (Fife & Salmon, n.d., p. 5). **A headquarters is an assignment, and assignments move.** It becomes the home of the **11th Infantry**, founded in 1798 and garrisoned here until **1941**, along with the **3rd Field Artillery** and the **5th Tank Platoon**. When the Ohio River flooded in **1937**, troops from the 11th worked the relief effort in Cincinnati, Louisville and river towns including Lawrenceburg, Indiana.

**Citizens' Military Training Camps** ran here for **sixteen years beginning in 1925**. The Army marketed them, in the face of anti-military public feeling, as "schools in citizenship." Each participant got a month of free transportation, uniforms, laundry, shoes and meals, and once the Depression started the rosters filled on the first day of enrolment (Fife & Salmon, n.d., p. 5). **At its peak the camp here reached 3,450 participants** (National Park Service continuation sheet for Camp Glenn, as cited in Hankins, 2020, p. 14 n.26).

**The Civilian Conservation Corps** made the post **Indiana's district headquarters**, where companies assembled before moving to their assigned locations (Hankins, 2020, p. 14). Lesson 3 takes up what the CCC's presence here documents about race, because that is where the strongest specific evidence sits.

**Schoen Field.** An airfield was built and dedicated in **1922** to **Earl J. Schoen**, an Indianapolis pilot killed in the First World War. It began at about **100 acres** and was expanded to **185 acres in 1933** (Fife & Salmon, n.d., p. 5; Encyclopedia of Indianapolis, n.d.-a). **Remember Schoen Field.** Section 3 shows you what got built on top of it.

## The Second World War: too small to train, so it counted people instead

By the autumn of 1940 the Army had decided the post was **too small to train troops for modern warfare**. Instead it became a **midwest induction and reception centre** and a logistical support hub (Fife & Salmon, n.d., p. 6). **That is a demotion that turned into a bigger job.** The Encyclopedia of Indianapolis records that the reception centre became the largest in the country before the function was transferred to Camp Atterbury in 1944 (Encyclopedia of Indianapolis, n.d.-a).

Around that core the Army opened or enlarged specialised schools: the **Finance School**, the **Chaplain School**, and the **Baker and Cooks School**, plus a large hospital complex, **Billings General Hospital**, which no longer stands (McGillem et al., 1993, sec. 8, p. 3).

**A prisoner of war camp, with dates that do not agree.**

| Source | Dates given |
|---|---|
| Encyclopedia of Indianapolis (n.d.-a) | 1943-1944 |
| HABS documentation (Fife & Salmon, n.d., p. 6) | 1944 to 1945 |
| National Register nomination (McGillem et al., 1993, sec. 8, p. 3) | 1944-45, at the Camp Glenn complex |
| Hankins (2020, p. 15) | 1943-44 |

**Two of four say it started in 1943 and two say 1944.** The nomination adds the detail that puts a shape on it: the Italian and German prisoners "worked as construction and maintenance workers throughout the Fort." **Prisoner of war labour is a documented feature of American home-front infrastructure**, and if you write about this post you should say so with the dates attributed rather than smoothed.

**An Army Disciplinary Barracks** also operated here, which Hankins dates **1944 to 1947** (2020, p. 16, citing Bower). **A post is a workplace, a school, a hospital, a prison and a neighbourhood at once**, and beat 2 will show you that all five of those are legible in the plan.

## Sources
- Encyclopedia of Indianapolis. (n.d.-a). *Fort Benjamin Harrison*. https://indyencyclopedia.org/fort-benjamin-harrison/
- Fife, C. B., & Salmon, T. W., II. (n.d.). *Fort Benjamin Harrison* (HABS No. IN-289) [Written historical and descriptive data]. Historic American Buildings Survey, National Park Service. https://tile.loc.gov/storage-services/master/pnp/habshaer/in/in0400/in0407/data/in0407data.pdf
- Hankins, M. B. (2020). *Fort Benjamin Harrison: From military base to Indiana state park* [Master's thesis, Indiana University]. IUPUI ScholarWorks. https://scholarworks.iupui.edu/bitstream/handle/1805/22736/Hankins_Final_Masters%20Thesis_Fort_Ben.pdf
- McGillem, D. E., & Associates, Cardinal, J. R., & Bush, D. R. (1993). *Fort Benjamin Harrison Historic District* [National Register of Historic Places registration form]. Indiana Department of Natural Resources. https://npgallery.nps.gov/NRHP/GetAsset/NRHP/93001581_text`,
      recallContent: [
        {
          prompt: "What did the post do in the First World War, and how many men were on it at the peak?",
          answer: "It was a training centre. About 12,000 men were on the ground at the height of activity in June 1917, running three Officer Training Camps, Medical Officers Training Camps, and an Engineers Training Camp of up to 9,000 men trained mostly as railroad specialists.",
        },
        {
          prompt: "What was Base Hospital 32, and who paid for it?",
          answer: "One of 33 voluntary base hospitals organised nationally before the United States entered the war, established here with a $25,000 contribution from Eli Lilly and staffed by local doctors and nurses. It ran a 500-bed hospital in France.",
        },
        {
          prompt: "The HABS documentation says influenza mortality at General Hospital No. 25 was high. Why does this course give no number?",
          answer: "Because the source gives none. The count exists in Army medical records this course has not read, and supplying a figure would be inventing a statistic.",
        },
        {
          prompt: "Why did the post become an induction centre rather than a training camp in the Second World War?",
          answer: "By autumn 1940 the Army had decided it was too small to train troops for modern warfare, so it became a midwest induction and reception centre and a logistical support hub, plus specialised Finance, Chaplain, and Baker and Cooks schools.",
        },
        {
          prompt: "What is the disagreement about the prisoner of war camp, and what detail does the National Register nomination add?",
          answer: "Two sources date it 1943 to 1944 and two date it 1944 to 1945. The nomination places it at the Camp Glenn complex and records that the Italian and German prisoners worked as construction and maintenance workers throughout the fort.",
        },
      ],
    },
    {
      slug: "fh-segregation-record",
      title: "3 · Segregation on this post: what the record shows, and what it does not",
      section: "Section 1 · Then",
      body: `**This lesson exists because the planning document for this cluster listed "segregation practices on post" as a lead to verify, and verification produced a thin, specific result rather than a rich one.** Reporting that honestly is the lesson. **The temptation here is enormous and you must refuse it:** the United States armed forces were segregated by regulation for most of this post's first fifty years, so it would be easy to write a confident paragraph about segregated barracks, mess halls and recreation here without a single source about **here**. **A claim about the Army is not a claim about this post.** What follows is what the record supports.

## What is documented, specific to this ground

**1. An all-African American Civilian Conservation Corps company, from 1936.**

The post served as **Indiana's district headquarters for the CCC**, the place where companies assembled before going to their assigned work (Hankins, 2020, p. 14). Two facts frame what that meant. **Indiana had fifty-six CCC companies, of which eight were African American.** And although "the legislation that created the CCC prohibited discrimination due to race, color, and creed, the CCC followed the normative patterns of segregated military personnel with white officers and technical staff supervising black enrollees in segregated camps" (Hankins, 2020, pp. 14-15).

**Read that sentence twice.** A statute banning discrimination and a practice of segregation existed at the same time, in the same programme, on the same ground. **A written prohibition is not an outcome.** That is a civics lesson you can carry to any policy in this course.

**An all-African American company arrived at this post in 1936**, moving from Fort Knox, Kentucky, and specialising in reforestation and soil conservation. Its documented work here included cutting and clearing timber to allow new growth and straightening waterways to prevent soil erosion (Hankins, 2020, p. 15, citing Bower; Fife & Salmon, n.d., p. 5).

**The company's number is itself a disagreement.** Hankins gives **Company 3350**, citing Bower's Army command history and the company's own newsletter. The HABS documentation gives **Company 3550** (Fife & Salmon, n.d., p. 5). **This course uses 3350 and tells you why:** Hankins cites two documents that name the company directly, including one the company produced. **That is a reason, not a certainty**, and CCC company rosters in the National Archives would settle it.

**The company left a record in its own voice.** *The Fort Ben Banner* of **30 April 1938** carried a "News in Brief" item from the company that reads, in part: "Lester Cain, a civilian holds the record as having the best workers and most outstanding detail in the company...Bridges are being built by the fellows on the job to replace defective and old bridges...streams are being improved to keep water from settling in one place after a hard rain storm. Old water and drainage pipes have been taken up and new ones laid in order that good drainage can be obtained. Trees and scrubs are being planted to make the surroundings at Fort Benjamin Harrison a beautiful place to be at" (Company 3350, 1938, as cited in Hankins, 2020, p. 15).

**Two things about that quotation are worth more than their length.** First, it names a real person, **Lester Cain**, doing real work, in a source produced by the men themselves. Second, **the forest those men worked on is the reason two thirds of this post is a state park today.** Section 3 traces that chain of causation, and it runs directly through a segregated work company.

**2. The Chaplain School photographs, April 1942.**

The Army's **Chaplain School** opened here with its first class of **75 chaplains on 2 February 1942**, running a 28-day session of about 200 hours of instruction; after four sessions the school moved to Harvard University and grew from 75 students to 450 (U.S. Army chaplaincy history, as reported in secondary accounts; see the caution below).

In **April 1942** the photographer **Jack Delano** documented the school. The photographs are held in the **Farm Security Administration and Office of War Information collection at the Library of Congress**, and the Library's own catalogue summary for the group describes the school's students as **Jewish, Catholic, and Negro and white Protestant** students training together for field service, in classes on map reading, first aid, chemical warfare and graves registration, and in conducting services and mass (Delano, 1942).

**That is a primary source, and it is doing something specific.** In 1942 the Army was segregated. **These photographs are the Library of Congress's own catalogue evidence that this particular school, on this particular post, was not.** Historic Indianapolis, reading the same images seventy years later, put it this way: "when these were taken, the armed services were firmly segregated, except, apparently, for the Chaplain training classes" (Browne, 2012).

**Handle that carefully, in two directions at once.** It is real evidence about one school in one month. **It is not evidence that the post was integrated**, and it is not evidence that the men in those pictures were housed, fed or promoted equally. **A photograph of a room proves who was in the room.**

## What could not be found, stated plainly

This is the part that most writing about military posts leaves out, and it is the part a researcher most needs.

- **The two major preservation documents for this post say nothing about race.** The 1993 National Register nomination and the HABS documentation describe the post's social hierarchy in detail, by **rank**, and never mention race, segregation or Black soldiers at all. **That is a fact about the documents.** National Register nominations of that era routinely evaluated architectural integrity and military function without asking who was allowed where, and knowing that tells you not to treat a nomination's silence as evidence of absence.
- **The state historical marker and the Encyclopedia of Indianapolis entry are also silent** on segregation at this post (Indiana Historical Bureau, 1996; Encyclopedia of Indianapolis, n.d.-a).
- **The 1917 Officer Training Camps.** The Army trained Black officer candidates in 1917 at a separate camp at **Fort Des Moines, Iowa**. Whether Black candidates were present at, excluded from, or routed away from the three Officer Training Camps held **at this post** in 1917 is **not stated in any source read for this course.** That is an open question with a findable answer: the camp rosters survive in the National Archives.
- **The Second World War reception centre.** This post processed inductees at scale. **Whether they were received, housed and assigned by race here is not documented in the sources read for this course**, although the Army as an institution assigned by race throughout the war.

**The national frame, so you know what the local silence sits inside.** President Truman signed **Executive Order 9981 on 26 July 1948**, declaring "there shall be equality of treatment and opportunity for all persons in the armed services without regard to race, color, religion or national origin," and creating a committee to recommend the regulation changes needed to carry it out (Exec. Order No. 9981, 1948). **Desegregation of the Army was not immediate**; it was completed in **1954** with the deactivation of the last all-Black unit (National Archives, n.d.). **Note where this post was during those years:** deactivated after the Second World War, briefly under Air Force control, and reopened by the Army in 1950 as an administrative and training centre.

**The research instruction, which is the point of the lesson.** If you want to answer the question this lesson could not, the records exist and are requestable: **CCC company rosters and camp inspection reports; Army post general orders and station lists; the reception centre's processing records; and the Indianapolis Recorder**, the city's Black newspaper, which covered the war and the fort's workforce in real time. **None of those were read here.** Saying so is not a weakness in the course. **It is the difference between a finding and a guess.**

**A caution about one citation above.** The Chaplain School's founding dates in the first paragraph of item 2 come from secondary reporting of the Army chaplaincy's own institutional history, whose official page could not be retrieved while this lesson was written. **Treat the 2 February 1942 date and the class sizes as good leads to confirm, not as settled facts**, and confirm them against the Army chaplaincy's published history before you repeat them. **The Delano photographs and the Library of Congress catalogue record are the solid half of that item.**

## Sources
- Browne, T. B. (2012, April 2). *IndyView revisited: Fort Benjamin Harrison, 1942*. Historic Indianapolis. https://historicindianapolis.com/indyview-revisited-fort-benjamin-harrison-1942/
- Delano, J. (1942). *Fort Benjamin Harrison, Indiana. April, 1942. U.S. Army chaplain school* [Photographs]. Farm Security Administration/Office of War Information Collection, Library of Congress. https://www.loc.gov/item/2004673827/
- Encyclopedia of Indianapolis. (n.d.-a). *Fort Benjamin Harrison*. https://indyencyclopedia.org/fort-benjamin-harrison/
- Exec. Order No. 9981, 13 Fed. Reg. 4313 (July 26, 1948). National Archives. https://www.archives.gov/milestone-documents/executive-order-9981
- Fife, C. B., & Salmon, T. W., II. (n.d.). *Fort Benjamin Harrison* (HABS No. IN-289) [Written historical and descriptive data]. Historic American Buildings Survey, National Park Service. https://tile.loc.gov/storage-services/master/pnp/habshaer/in/in0400/in0407/data/in0407data.pdf
- Hankins, M. B. (2020). *Fort Benjamin Harrison: From military base to Indiana state park* [Master's thesis, Indiana University]. IUPUI ScholarWorks. https://scholarworks.iupui.edu/bitstream/handle/1805/22736/Hankins_Final_Masters%20Thesis_Fort_Ben.pdf
- Indiana Historical Bureau. (1996). *Fort Benjamin Harrison* [State historical marker 49.1996.1]. Indiana Historical Bureau. https://www.in.gov/history/state-historical-markers/find-a-marker/fort-benjamin-harrison/
- McGillem, D. E., & Associates, Cardinal, J. R., & Bush, D. R. (1993). *Fort Benjamin Harrison Historic District* [National Register of Historic Places registration form]. Indiana Department of Natural Resources. https://npgallery.nps.gov/NRHP/GetAsset/NRHP/93001581_text
- National Archives. (n.d.). *Executive Order 9981: Desegregation of the Armed Forces (1948)*. https://www.archives.gov/milestone-documents/executive-order-9981`,
      recallContent: [
        {
          prompt: "What is the strongest documented item about race specific to this post, and what year?",
          answer: "An all-African American Civilian Conservation Corps company arrived here in 1936 from Fort Knox, Kentucky, specialising in reforestation and soil conservation, at a post that served as Indiana's CCC district headquarters.",
        },
        {
          prompt: "The CCC's enabling legislation prohibited discrimination by race, color and creed. What actually happened?",
          answer: "The CCC followed the segregated pattern of military personnel, with white officers and technical staff supervising Black enrollees in segregated camps. Eight of Indiana's fifty-six companies were African American. A written prohibition is not an outcome.",
        },
        {
          prompt: "What do the April 1942 Chaplain School photographs document, and what do they not document?",
          answer: "The Library of Congress catalogue summary describes Jewish, Catholic, and Negro and white Protestant students training together, which is evidence that this school was not segregated in that month. It is not evidence that the post was integrated, or that housing, food and promotion were equal.",
        },
        {
          prompt: "What do the National Register nomination and the HABS documentation say about race at this post?",
          answer: "Nothing. Both describe the post's social hierarchy in detail by rank and never mention race, segregation or Black soldiers. That is a fact about the documents and must not be read as evidence of absence.",
        },
        {
          prompt: "Name the records that would answer what this lesson could not.",
          answer: "CCC company rosters and camp inspection reports, Army post general orders and station lists, the reception centre's processing records, and the Indianapolis Recorder. None of them were read for this course.",
        },
        {
          prompt: "What is Executive Order 9981, and when was Army desegregation actually completed?",
          answer: "Truman's order of 26 July 1948 declaring equality of treatment and opportunity in the armed services without regard to race, color, religion or national origin. Army desegregation was completed in 1954 with the deactivation of the last all-Black unit.",
        },
      ],
    },
    {
      slug: "fh-quiz-then",
      title: "4 · Quiz: the post and its wars",
      section: "Section 1 · Then",
      quiz: {
        passingScore: 70,
        // 15-question bank served 8 at a time with shuffled options, so a retake is a different
        // quiz rather than the same list (the repo standard, src/lib/quiz.ts).
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Why was the post built miles outside Indianapolis rather than at the existing Arsenal site?",
            options: [
              "The Arsenal had burned down",
              "Congress required all new posts to be rural",
              "City residents opposed a post next to their growing residential and business communities",
              "The Arsenal land was too expensive to keep",
            ],
            correctIndex: 2,
            explanation: "The National Register nomination records the opposition explicitly. A post nobody wanted next door went where the land was cheap and the neighbours were few.",
            sourceLessonSlug: "fh-why-a-post",
          },
          {
            prompt: "Which three years appear in institutional sources as the post's establishment date?",
            options: ["1902, 1903 and 1904", "1898, 1900 and 1901", "1906, 1908 and 1910", "1917, 1918 and 1919"],
            correctIndex: 0,
            explanation: "HABS says 1902, the state historical marker says 1903, and the Encyclopedia of Indianapolis says June 28, 1904. They are plausibly four different acts all called establishment.",
            sourceLessonSlug: "fh-why-a-post",
          },
          {
            prompt: "Sources give either about 1,994 acres or about 2,415 to 2,417 acres for roughly the same price. Which source reconciles the two families of figures?",
            options: [
              "The Indiana state historical marker",
              "The Encyclopedia of Indianapolis",
              "The National Register nomination",
              "The HABS documentation, which separates a 1903 to 1904 purchase of 1,994 acres from a further 423 acres bought in 1906 to 1908",
            ],
            correctIndex: 3,
            explanation: "That is a hypothesis you could test in the deed records. This course has not tested it, so it reports the figures with their owners.",
            sourceLessonSlug: "fh-why-a-post",
          },
          {
            prompt: "What do the two federal preservation documents disagree about regarding Russell B. Harrison?",
            options: [
              "Whether he was ever an Army officer",
              "The National Register nomination calls him Benjamin Harrison's grandson; the HABS narrative says he came home for his father's funeral",
              "Whether he lived in Indianapolis",
              "Nothing; both call him a son",
            ],
            correctIndex: 1,
            explanation: "Only one version offers a checkable detail. A National Register nomination is authoritative and not infallible, which is why every claim in this course names its source.",
            sourceLessonSlug: "fh-why-a-post",
          },
          {
            prompt: "In what year did the first permanent infantry garrison occupy the post?",
            options: ["1908", "1902", "1917", "1922"],
            correctIndex: 0,
            explanation: "Construction ran 1906 through 1910 with most structures finished in 1908, the year the first permanent garrison arrived.",
            sourceLessonSlug: "fh-why-a-post",
          },
          {
            prompt: "The First World War Engineers Training Camp at this post prepared up to 9,000 men, mostly as:",
            options: ["Pilots", "Cavalry troopers", "Railroad specialists", "Artillery observers"],
            correctIndex: 2,
            explanation: "By 1918 the post was an Army railroad transport centre, and service and utility buildings surviving from that year reflect the function.",
            sourceLessonSlug: "fh-two-wars",
          },
          {
            prompt: "What was Base Hospital 32?",
            options: [
              "The post's permanent hospital, still standing today",
              "One of 33 voluntary base hospitals organised nationally before United States entry, established here with a $25,000 Eli Lilly contribution, which ran a 500-bed hospital in France",
              "A prisoner of war infirmary",
              "The Army's influenza quarantine ward",
            ],
            correctIndex: 1,
            explanation: "It was staffed by local Indianapolis doctors and nurses. A private company's money built a federal war hospital, which is worth noticing.",
            sourceLessonSlug: "fh-two-wars",
          },
          {
            prompt: "The HABS documentation says influenza mortality at General Hospital No. 25 was high. Why does this course give no death toll?",
            options: [
              "The epidemic never reached the post",
              "The figure is classified",
              "The course rounded the number down to be cautious",
              "The source states that mortality was high and gives no figure, and inventing one would be fabricating a statistic",
            ],
            correctIndex: 3,
            explanation: "The count exists somewhere in Army medical records. This course has not read them and says so.",
            sourceLessonSlug: "fh-two-wars",
          },
          {
            prompt: "What was the post's main role in the Second World War, and why?",
            options: [
              "A midwest induction and reception centre plus logistical support, because the Army judged it too small to train troops for modern warfare",
              "The Army's largest armour training school",
              "A shipyard for inland vessels",
              "An aircraft assembly plant",
            ],
            correctIndex: 0,
            explanation: "The reception centre became the largest in the country before the function moved to Camp Atterbury in 1944. A demotion turned into a bigger job.",
            sourceLessonSlug: "fh-two-wars",
          },
          {
            prompt: "How should you report the dates of the prisoner of war camp at this post?",
            options: [
              "All sources agree on 1943 to 1944",
              "All sources agree on 1944 to 1945",
              "Two sources give 1943 to 1944 and two give 1944 to 1945, and the National Register nomination places the camp at the Camp Glenn complex",
              "No source dates it at all",
            ],
            correctIndex: 2,
            explanation: "The nomination adds that the Italian and German prisoners worked as construction and maintenance workers throughout the fort. Attribute the dates rather than smoothing them.",
            sourceLessonSlug: "fh-two-wars",
          },
          {
            prompt: "What is the relationship between the Civilian Conservation Corps statute and CCC practice on race?",
            options: [
              "The statute required segregated camps",
              "The statute was silent on race",
              "The CCC operated integrated companies in Indiana",
              "The statute prohibited discrimination by race, color and creed while the practice was segregated camps with white officers and technical staff supervising Black enrollees",
            ],
            correctIndex: 3,
            explanation: "A written prohibition is not an outcome. Eight of Indiana's fifty-six CCC companies were African American.",
            sourceLessonSlug: "fh-segregation-record",
          },
          {
            prompt: "What is documented about the all-African American CCC company at this post?",
            options: [
              "It was numbered 3350, and no source disagrees",
              "It arrived in 1936 from Fort Knox specialising in reforestation and soil conservation; Hankins numbers it 3350 and the HABS documentation numbers it 3550",
              "It was numbered 3550, confirmed against National Archives rosters",
              "The company's number was never recorded",
            ],
            correctIndex: 1,
            explanation: "This course uses 3350 because Hankins cites two documents naming the company directly, including one the company produced. Archives rosters would settle it.",
            sourceLessonSlug: "fh-segregation-record",
          },
          {
            prompt: "Whom does the 30 April 1938 item in The Fort Ben Banner name?",
            options: [
              "Jack Delano, the photographer",
              "Earl J. Schoen, the pilot the airfield honours",
              "Lester Cain, a civilian credited with the best workers and most outstanding detail in the company",
              "Russell B. Harrison",
            ],
            correctIndex: 2,
            explanation: "It is a record of the work in the men's own publication, naming a real person doing real work. The forest they improved is why two thirds of this ground is a state park today.",
            sourceLessonSlug: "fh-segregation-record",
          },
          {
            prompt: "What, precisely, do the April 1942 Chaplain School photographs establish?",
            options: [
              "That the school's classes in that month included Jewish, Catholic, and Negro and white Protestant students",
              "That the entire post was racially integrated",
              "That housing, food and promotion were equal for all soldiers here",
              "That the Army had already desegregated by 1942",
            ],
            correctIndex: 0,
            explanation: "A photograph of a room proves who was in the room. Executive Order 9981 came in 1948 and Army desegregation was completed in 1954.",
            sourceLessonSlug: "fh-segregation-record",
          },
          {
            prompt: "What do the National Register nomination and the HABS documentation say about race at this post?",
            options: [
              "They document segregated barracks and mess halls in detail",
              "They record the post as integrated from the start",
              "They cite the Indianapolis Recorder throughout",
              "Nothing at all; they describe social hierarchy only by rank, which is a fact about the documents rather than evidence of absence",
            ],
            correctIndex: 3,
            explanation: "Nominations of that era evaluated architectural integrity and military function without asking who was allowed where. Silence in a document is not silence in the past.",
            sourceLessonSlug: "fh-segregation-record",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 2 · Built  (beat 2: architecture, building typology, and site planning)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "fh-built-plan",
      title: "5 · How a post is laid out, and what the plan is saying",
      section: "Section 2 · Built",
      body: `Beat 2 asks: **why does it look like that?** On Indiana Avenue the answer began with a diagonal drawn on an 1821 plat. Here it begins with an office in Washington that drew the same buildings for the whole country.

**Who designed it.** The National Register nomination names the architect on the form: **Army Quartermaster Corps** (McGillem et al., 1993, sec. 8). The overall layout and the buildings both came from **standardised plans used nationwide during the first decade of the twentieth century** (McGillem et al., 1993, sec. 8, p. 2). **There is no signature architect and that is the finding**, not a gap. The nomination says so directly: "Their architects were unknown members of a large organization, and their designs were duplicated at numerous installations throughout the United States" (McGillem et al., 1993, sec. 8, p. 4).

**Hold onto the consequence.** The nomination goes on to say that because of this, the individual buildings "lack the architectural significance necessary for inclusion, individually, in the National Register." **They qualify as a group and not one at a time.** That is a specific, transferable idea: **significance can live in a pattern rather than in an object**, and a district listing is the instrument that recognises it.

**The plan, in one sentence from a 1907 newspaper.** A contemporary account described a "military city housed in thirty beautiful buildings of brick and stone, set on a horseshoe curve, with a parade ground in the center" (*Indianapolis Star*, 14 July 1907, as cited in Fife & Salmon, n.d., pp. 3-4). **Horseshoe curve, parade ground in the centre.** That is the plan, and everything else hangs off it.

**The parade ground is the organ that does the work.** It sits in the western part of the district, surrounded by large trees that shade the officers' residences on its edge, and it is ringed by **Lawton Road**. **Kent Road** crosses it on a diagonal, on a concrete bridge built as part of the original complex. A **bandstand added in 1939** completes the picture (McGillem et al., 1993, sec. 7, p. 2). The HABS documentation makes the comparison explicit: the parade ground's plan "is evocative of the type of configuration made popular by Olmsted and his successors in town and city planning" (Fife & Salmon, n.d., p. 8).

**Read that comparison carefully, because it contains the whole argument of this section.** A parade ground is a **drill field**: a flat, open, controlled space for formations and inspections. A park designed in the Olmsted tradition is a **picturesque landscape**: curving drives, grouped trees, deliberate views. **This post got both at once**, and the HABS surveyors noticed. **The military purpose and the residential amenity are the same piece of ground**, which is why, ninety years later, a state park could inherit the layout without redrawing it.

**Three functional zones, and they are not mixed.** The nomination divides the district by location and function (McGillem et al., 1993, sec. 7, p. 2):

| Zone | Where | What is in it |
|---|---|---|
| **A. Residential and administrative** | Around the parade ground, the Lawton Road area | Officers' family quarters, the commanding officer's residence, bachelor officers' quarters, enlisted men's barracks, the original administrative building, guardhouse, fire station, post exchange and NCO club, bakery, and the interurban railway depot |
| **B. Service and utility** | East and southeast of the parade ground, on Greene Avenue and Otis Avenue | Commissary, quartermaster storehouse and office, blacksmith shop, stables, wagon sheds, and the post's own water tower, pump house and power plant |
| **C. Hospital** | East of the parade ground on Greene Avenue | The original post hospital, later the Soldier Support Center headquarters, plus four officers' residences |

**A self-contained community is a literal description, not a metaphor.** The original complex included "quarters for married and single officers, enlisted men's barracks, an administrative office building, Provost Marshall's Office and stockade, an interurban station, bakery and commissary facilities, warehouse, stables, gun sheds, blacksmith shop, hospital, and an independent water and power system" (McGillem et al., 1993, sec. 8, p. 2). **Its own water. Its own power. Its own jail. Its own rail station.** Section 3 asks you to notice what that means for a county that has to provide none of those things and also cannot tax any of it.

**The land beyond the buildings was doing a job too.** The built complex went on level ground in the southern part of the old farmland. "The original large expanse of wooded rolling hills to the north was used as a training area" (McGillem et al., 1993, sec. 8, p. 2). **That sentence is the seed of the state park.** A training area is land deliberately left unbuilt, and land deliberately left unbuilt for ninety years inside a growing metropolitan county becomes something no planner could have assembled on purpose.

**Two later residential additions, which show the post growing without breaking its own rules.** Between **1929 and 1945**, thirteen brick and stone duplex residences for non-commissioned officers went up west of the parade loop, known as **Sergeant's Row**, all built from uniform plans. **Harrison House**, originally quarters for nurses, and further single residences went in to the northeast. The **Officers Club**, built of stone, dates to **1945** and stands south of the golf course (Fife & Salmon, n.d., p. 10). **New buildings kept quoting the old ones**, which is exactly why the district reads as a whole.

**And one thing on this ground is older than the post.** A **nineteenth-century cemetery predates the fort's establishment** and is counted as a contributing site in the district (McGillem et al., 1993, sec. 8, p. 1). The HABS documentation identifies it as **Spring Valley Cemetery**, containing the earliest graves in Lawrence Township, and records that **Elisha Reddick** had bought 132 acres here in **1823** (Fife & Salmon, n.d., pp. 2-3). **Nothing is ever the first thing on a piece of ground**, and beat 2 is where you find the layer underneath.

## Sources
- Fife, C. B., & Salmon, T. W., II. (n.d.). *Fort Benjamin Harrison* (HABS No. IN-289) [Written historical and descriptive data]. Historic American Buildings Survey, National Park Service. https://tile.loc.gov/storage-services/master/pnp/habshaer/in/in0400/in0407/data/in0407data.pdf
- McGillem, D. E., & Associates, Cardinal, J. R., & Bush, D. R. (1993). *Fort Benjamin Harrison Historic District* [National Register of Historic Places registration form]. Indiana Department of Natural Resources. https://npgallery.nps.gov/NRHP/GetAsset/NRHP/93001581_text
- National Park Service. (n.d.). *National Register of Historic Places*. https://www.nps.gov/subjects/nationalregister/index.htm`,
      recallContent: [
        {
          prompt: "Who is named as the architect of this post, and why does that matter for how it was listed?",
          answer: "The Army Quartermaster Corps, working from standardised plans used nationwide. The nomination says the buildings lack the architectural significance for individual listing, so they qualify as a district. Significance can live in a pattern rather than an object.",
        },
        {
          prompt: "Describe the plan in the terms a 1907 newspaper used, and name the road that rings it.",
          answer: "A military city in thirty brick and stone buildings set on a horseshoe curve with a parade ground in the centre. Lawton Road follows the perimeter of the parade ground; Kent Road crosses it on a diagonal on an original concrete bridge.",
        },
        {
          prompt: "Why did the HABS surveyors compare the parade ground to Olmsted-style planning, and what does that tell you?",
          answer: "Because it combines a flat drill field with curving drives and grouped trees, so the military purpose and a residential landscape amenity are the same ground. It is why a state park could later inherit the layout without redrawing it.",
        },
        {
          prompt: "Name the three functional zones of the historic district.",
          answer: "Residential and administrative around the parade ground on Lawton Road; service and utility east and southeast on Greene and Otis avenues; and the hospital unit east of the parade ground with four officers' residences.",
        },
        {
          prompt: "What was the wooded land north of the built complex used for, and why does that matter to the rest of this course?",
          answer: "It was the training area, land deliberately left unbuilt. Ninety years of that inside a growing county produced a forest no planner could have assembled, which is the ground that became the state park.",
        },
        {
          prompt: "What on this site is older than the post itself?",
          answer: "A nineteenth-century cemetery, identified in the HABS documentation as Spring Valley Cemetery with the earliest graves in Lawrence Township. Elisha Reddick bought 132 acres here in 1823.",
        },
      ],
    },
    {
      slug: "fh-built-hierarchy",
      title: "6 · Rank you can read from the street",
      section: "Section 2 · Built",
      body: `**This is the best lesson in the course for a reader who wants to learn to look at buildings, because the code is written down and the key is published.**

**The claim, from the nomination, in its own words:** the layout and the original buildings "form a planned, architecturally and functionally integrated community whose social hierarchy is reflected by building location and stylistic detailing" (McGillem et al., 1993, sec. 8, p. 1). And more precisely: "Social/military hierarchy within the original community is expressed both in residential pattern and stylistic detail. Officer quarters are separated clearly from enlisted men's housing and service areas. Ornamentation differentiates senior officers from subordinates, married from bachelor, administrative from service/utility" (McGillem et al., 1993, sec. 8, p. 2).

**Unpack that into a ladder you can walk down, from most ornament to least** (McGillem et al., 1993, sec. 8, pp. 2-3; Fife & Salmon, n.d., p. 9):

1. **Senior officers' family quarters.** The most elaborate detail on the post, on the **north and west sides of the parade ground** in the Lawton Loop area. Detail varies again **within** this group according to rank inside the officer system.
2. **Bachelor officers' quarters.** Less individualised, simpler trim, less ornate porches. Positioned so they **separate the officers' quarters from the administrative buildings**.
3. **Hospital complex and administrative buildings.** At the same stylistic level as the bachelor quarters.
4. **Married non-commissioned officers' housing.** Similar to married officers' quarters but more modest.
5. **Enlisted men's barracks.** Large buildings with "little ornamentation except for their columned porches and stylized brick work above the windows."
6. **Service buildings.** Warehouse, stables, commissary, utility buildings. "At the lowest end of the spectrum," with only the basic structure and materials shared by everything else on the post.

**Now the part that turns this from an observation into a research method.** The nomination lists the **actual stock plan numbers** from the Office of the Quartermaster General, and once you have plan numbers you can find the same buildings at other posts (McGillem et al., 1993, sec. 7, p. 1):

| What | How many | O.Q.M.G. plan |
|---|---|---|
| Officers' family residences on the Lawton Road loop | 6 | **120-F** (duplex) |
| Officers' family residences on the Lawton Road loop | 8 | **142-B** (duplex) |
| Officers' family residences on the Lawton Road loop | 4 | **145-D** (single family) |
| Large enlisted men's barracks, east side of the loop | 6 | **75-G** |
| Fourplexes near the hospital | 2 | **85-B** |
| Duplex near the hospital | 1 | **85** |
| Stables | 2 | **139** |
| Wagon sheds (now one building) | 2 | **60H** |

**Eighteen officers' houses drawn from three plans.** That is the federal government building housing at scale, and it is the same logic that produced standardised post offices, lighthouses and federal courthouses. **If you find plan 75-G at another post, you are looking at a sibling of the barracks here**, which is a genuinely powerful research handle and one almost nobody uses.

**The shared material vocabulary, which is how a district holds together.** Every original building uses the same kit (McGillem et al., 1993, sec. 7, p. 1; Fife & Salmon, n.d., pp. 8-9):

- **Foundations**: poured concrete faced with coursed limestone up to a dressed limestone water table
- **Walls**: common bond brick
- **Openings**: dressed limestone lug sills, with flat or arched voussoirs above
- **Roofs**: gabled and hipped, **originally slate**, since replaced with asphalt
- **Porches**: large open verandas with rounded wood columns and balusters
- **Ornament**: confined to eaves and cornices, gables, windows, doors, and residential interior fireplaces

**Style: Colonial Revival**, which the nomination reads as expressing "the country's nostalgic/nationalistic attitude of the time and its need to re-establish fundamentals after a chaotic period of great economic, industrial and artistic growth" (McGillem et al., 1993, sec. 8, p. 2). **That is an interpretation, not a measurement.** It is a reasonable and conventional reading of Colonial Revival, and you should attribute it to the nomination rather than repeat it as fact.

**One street-name fact that is a dating tool.** The post's streets were originally **named for heroes of the Spanish-American War**, and in **1939** they were renamed to honour commanders and men who had been stationed here and distinguished themselves in action (McGillem et al., 1993, sec. 8, p. 2; Fife & Salmon, n.d., pp. 5-6). **A street name on a map is evidence of when the map was made**, and a post that renames its streets is telling you which past it wants to remember. **Lawton, Otis, Greene, Shafter, Aultman, Kent, Birtz, Walker, Glenn: those names are a document.** Who each one was, and which of the two naming rounds each belongs to, is a research task this course leaves to you and does not guess at.

**What ornament will not tell you.** The nomination reads rank off these buildings in fine detail and **never asks who was permitted to hold which rank.** Lesson 3 already showed you that the same document is silent on race. **Put those two observations together and you have the single most important habit in architectural research: a building records the distinctions its builders chose to encode, and is silent about the ones they took for granted.**

## Sources
- Fife, C. B., & Salmon, T. W., II. (n.d.). *Fort Benjamin Harrison* (HABS No. IN-289) [Written historical and descriptive data]. Historic American Buildings Survey, National Park Service. https://tile.loc.gov/storage-services/master/pnp/habshaer/in/in0400/in0407/data/in0407data.pdf
- McGillem, D. E., & Associates, Cardinal, J. R., & Bush, D. R. (1993). *Fort Benjamin Harrison Historic District* [National Register of Historic Places registration form]. Indiana Department of Natural Resources. https://npgallery.nps.gov/NRHP/GetAsset/NRHP/93001581_text`,
      recallContent: [
        {
          prompt: "Walk the ornament ladder from most decorated to least.",
          answer: "Senior officers' family quarters on the north and west sides of the parade ground; bachelor officers' quarters; hospital and administrative buildings; married non-commissioned officers' housing; enlisted men's barracks; and service buildings such as warehouses, stables and the commissary at the bottom.",
        },
        {
          prompt: "Why are the Office of the Quartermaster General plan numbers a research handle?",
          answer: "Eighteen officers' houses here came from just three plans, 120-F, 142-B and 145-D, and the barracks from plan 75-G. The same numbered plans were used at other posts, so a plan number lets you find sibling buildings nationwide.",
        },
        {
          prompt: "Name the shared material vocabulary of the original buildings.",
          answer: "Poured concrete foundations faced with coursed limestone up to a dressed limestone water table, common bond brick walls, dressed limestone lug sills with flat or arched voussoirs, gabled and hipped roofs originally slate, and large open verandas with rounded wood columns.",
        },
        {
          prompt: "The nomination reads Colonial Revival as nostalgic and nationalistic. How should you handle that claim?",
          answer: "As an interpretation rather than a measurement. It is a conventional reading, and you should attribute it to the nomination rather than repeat it as an established fact.",
        },
        {
          prompt: "What happened to the post's street names in 1939, and why is that useful?",
          answer: "Streets originally named for Spanish-American War heroes were renamed for commanders and men stationed here who distinguished themselves in action. A street name dates a map and tells you which past the post chose to commemorate.",
        },
        {
          prompt: "State the habit this lesson wants you to carry to any building.",
          answer: "A building records the distinctions its builders chose to encode, and is silent about the ones they took for granted. This nomination reads rank in fine detail and never asks who was permitted to hold which rank.",
        },
      ],
    },
    {
      slug: "fh-built-what-survives",
      title: "7 · Two districts, and what a listing on federal land actually does",
      section: "Section 2 · Built",
      body: `Course 1 taught you the difference between federal listing and local designation, and concluded that **local designation is what normally stops a demolition.** On federal land that conclusion changes shape, and this lesson is where you learn how.

## The two districts

**1. The Fort Benjamin Harrison Historic District.** The nomination was prepared in **1993** by D. E. McGillem and Associates with Jare R. Cardinal and David R. Bush, for the Indiana Department of Natural Resources, and was accepted in **1995** (Fife & Salmon, n.d., p. 7; McGillem et al., 1993). The form itself records:

- **Approximately 340 acres**, in the south-central portion of the post
- **94 buildings, 6 structures and 2 sites**, of which **75 buildings, 1 site and 3 structures contribute** and the rest do not
- **49 buildings and structures from the original 1906-1910 construction period**, including a bridge, a water tower and the parade ground itself
- **1 building from the First World War era; 9 from the interwar period; 17 buildings and a bandstand from 1939-1945; 19 buildings and 3 structures from after the war**
- **Areas of significance: Military; Community Planning and Development; Architecture**
- **Periods of significance: 1906-1910, 1920-1937, 1938-1945.** Significant date: **1908**
- **Ownership at the time of nomination: public, federal**

**Look at the "areas of significance" line again.** *Community Planning and Development* is on there beside *Military* and *Architecture*. **The people who wrote this nomination understood that this post is a planning artifact**, and that is your licence to teach it as one.

**2. Camp Edwin F. Glenn.** A separate district, listed **1 December 1995**, National Register reference number **95001360**. Its nomination form lists two other names for it that tell you its whole history in six words: **Citizens' Military Training Camp** and **Fort Harrison Prisoner of War Camp**. The form counts **19 buildings and 360 structures, 379 resources in total**, and records the property as **publicly owned by the federal government**. The National Park Service's supplementary listing record notes an amendment: the nomination had not indicated a level of significance, and the state historic preservation office said **state significance** was appropriate, so the form was amended to add it (Indiana Division of Historic Preservation and Archaeology, 1995).

**That amendment is a small, perfect illustration of how listing works.** A nomination is a **negotiated document**. A consultant writes it, a state office reviews it, a federal agency comments, the Keeper of the National Register acts, and corrections get made on continuation sheets that stay in the file forever. **All of it is public and all of it is readable**, which is why this course quotes the forms rather than paraphrasing summaries of them.

**3. And one building listed by itself, first.** The post's **interurban railway station**, Building 616, built in **1908**, was already listed on the National Register before either district, as a good example of an early twentieth-century local interurban station (McGillem et al., 1993, sec. 7, p. 2; the HABS documentation dates the individual nomination to **1984**, Fife & Salmon, n.d., p. 8). **A commuter rail station on an Army post is worth pausing on.** It means the post was connected to Indianapolis by scheduled public transport from the year it opened, which is a fact about labour, supply and daily life that no photograph of a parade ground will tell you.

## What listing does when the landowner is the United States

Here is the mechanism, and it is genuinely different from the private-owner case.

| Situation | What National Register listing does |
|---|---|
| **Private owner, no federal money or permit** | Recognition and some tax credits. **It does not stop demolition.** |
| **Local historic district under a local ordinance** | Usually the real regulator: certificates of appropriateness, review of exterior change and demolition |
| **Federal agency owns or funds the undertaking** | **Section 106 of the National Historic Preservation Act applies.** The agency must take into account the effect of its undertaking on historic properties and consult with the state historic preservation officer before it acts. |

**Section 106 is the instrument that mattered here**, and you can see it operating in the paperwork. Look at who signed the two nomination forms in this lesson: the **Indiana Department of Natural Resources** as the state authority, and a **Deputy Assistant Secretary of the Army** for environment, safety and occupational health as the federal agency (McGillem et al., 1993, sec. 3; Indiana Division of Historic Preservation and Archaeology, 1995, sec. 3). **The Army was a signatory to the listing of its own post, in the years it was closing that post.** That is not a coincidence and it is not goodwill. **It is a legal process producing documents on a schedule.**

**Say plainly what Section 106 is and is not.** It is a **consultation and consideration requirement**, not a veto. **An agency that follows the process may still demolish a listed building.** What the process guarantees is a **record**: a determination of effect, a consultation, and usually a memorandum of agreement with mitigation attached. **The HABS documentation you have been reading all course is itself a classic piece of that mitigation.** When a federal agency is going to change or dispose of historic property, one common agreed measure is to document it to Historic American Buildings Survey standards and deposit the record with the Library of Congress. **That is why this course has a 19-page architectural description of a post that was closing, written in 1996, freely downloadable today.** The paperwork is the point.

**The timing lesson, which mirrors course 1 and reverses it.** On Indiana Avenue, designation arrived **after** the decisions that emptied the corridor. Here, designation arrived **because** of the decision that closed the post: the base was listed for closure in **1991**, the nomination was prepared in **1993**, and both districts were listed in **1995**, the year before the park opened. **Closure produced the listing.** A researcher who found only the listing dates would conclude the community suddenly valued the post in the mid-1990s. **The truth is that a federal disposal process compelled the documentation**, which is a completely different story and one you would miss without the statute.

**What none of it protected.** Reporting on the redevelopment records that **more than one million square feet of buildings were demolished** during the conversion (Sample, 2005). **Listed districts, a federal consultation requirement, and a million square feet of demolition are all true at once.** Hold all three, and never write that a National Register listing saved this post.

## Sources
- Fife, C. B., & Salmon, T. W., II. (n.d.). *Fort Benjamin Harrison* (HABS No. IN-289) [Written historical and descriptive data]. Historic American Buildings Survey, National Park Service. https://tile.loc.gov/storage-services/master/pnp/habshaer/in/in0400/in0407/data/in0407data.pdf
- Indiana Division of Historic Preservation and Archaeology. (1995). *Camp Edwin F. Glenn* [National Register of Historic Places registration form, reference number 95001360]. National Park Service. https://npgallery.nps.gov/GetAsset/a9430be3-0acd-4d90-8f7b-470014c6dbd3
- McGillem, D. E., & Associates, Cardinal, J. R., & Bush, D. R. (1993). *Fort Benjamin Harrison Historic District* [National Register of Historic Places registration form]. Indiana Department of Natural Resources. https://npgallery.nps.gov/NRHP/GetAsset/NRHP/93001581_text
- National Historic Preservation Act, 54 U.S.C. § 306108 (Section 106). https://www.achp.gov/protecting-historic-properties
- National Park Service. (n.d.). *National Register of Historic Places: Frequently asked questions*. https://www.nps.gov/subjects/nationalregister/faqs.htm
- Sample, D. (2005, June 15). *Indiana city flourishes after "Fort Ben" closure*. American Forces Press Service. https://www.dvidshub.net/news/538075/indiana-city-flourishes-after-fort-ben-closure`,
      recallContent: [
        {
          prompt: "Give the Fort Benjamin Harrison Historic District's size, resource count and areas of significance.",
          answer: "About 340 acres; 94 buildings, 6 structures and 2 sites, of which 75 buildings, 1 site and 3 structures contribute. Areas of significance are Military, Community Planning and Development, and Architecture, with periods 1906-1910, 1920-1937 and 1938-1945.",
        },
        {
          prompt: "What two other names does the Camp Edwin F. Glenn nomination list, and what do they tell you?",
          answer: "Citizens' Military Training Camp and Fort Harrison Prisoner of War Camp. Two names give you the district's whole history: interwar civilian training, then a wartime prison.",
        },
        {
          prompt: "What is Section 106, and what does it not do?",
          answer: "It requires a federal agency to take into account the effect of its undertaking on historic properties and to consult the state historic preservation officer. It is a consultation and consideration requirement, not a veto; an agency that follows it may still demolish.",
        },
        {
          prompt: "Why does a 19-page HABS architectural description of this post exist?",
          answer: "Documenting a property to Historic American Buildings Survey standards and depositing the record with the Library of Congress is a common mitigation measure agreed under the Section 106 process when a federal agency changes or disposes of historic property.",
        },
        {
          prompt: "How does the timing of designation here reverse the pattern from the Indiana Avenue course?",
          answer: "On Indiana Avenue designation came after the decisions that emptied the corridor. Here closure produced the listing: the base was listed for closure in 1991, the nomination was prepared in 1993, and both districts were listed in 1995.",
        },
        {
          prompt: "What did listing not prevent?",
          answer: "More than one million square feet of buildings were demolished during the conversion. Listed districts, a federal consultation requirement and mass demolition are all true at once.",
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 3 · Powers  (beat 3: civics, planning, taxes, politics. THE LOAD-BEARING SECTION)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "fh-powers-enclave",
      title: "8 · Instrument one: land the county cannot tax and does not govern",
      section: "Section 3 · Powers",
      body: `**This is the section the course exists for.** Course 1 taught five instruments a city uses on its own ground. **This section teaches what happens when the landowner is not a city, a company or a university, but the United States.** Learn these four instruments and you can read any military town, any federal campus, any national laboratory, and any base that has closed or is going to.

**Keep the definition from course 1:** an instrument is **a specific legal power, exercised by a specific body, under a specific statute, leaving a specific document.** The last clause is what makes history researchable.

## Instrument one has two halves: jurisdiction and taxation

**Half one: another sovereign on the ground.** The Constitution provides for it explicitly. **Article I, Section 8, Clause 17** gives Congress power to exercise authority "over all Places purchased by the Consent of the Legislature of the State in which the Same shall be, for the Erection of Forts, Magazines, Arsenals, dock-Yards, and other needful Buildings" (U.S. Const. art. I, § 8, cl. 17). **That is called the Enclave Clause**, and it is the constitutional basis for the idea that a piece of ground inside a state can be governed under federal rather than state authority.

**Two cautions before you use it, because this is where amateur accounts go wrong.**
1. **Not every federal property is an exclusive-jurisdiction enclave.** Jurisdiction over a given installation can be exclusive, concurrent, partial or merely proprietary, and it depends on **what the state ceded and what the United States accepted, at the time of acquisition**. **This course has not read the jurisdictional history of this specific post and does not assert one.** If you need it, the answer lives in Indiana's cession statutes and the Army's real property records.
2. **"Federal land" is a legal status, not a fence.** The practical experience of it changes with each of those categories, which is exactly why you have to look it up rather than assume.

**Half two, and this one is simple and enormous: the local government cannot tax it.** The principle is as old as *McCulloch v. Maryland* (1819), in which the Supreme Court held that a state may not tax an instrumentality of the federal government. **Federal property does not appear on a county's tax rolls.** The U.S. Department of Education says it in one plain sentence when explaining why a school aid programme exists: "Because federally owned property does not generate taxes, the revenue for the school district is dramatically reduced, but the school district is required to educate the same number of students as before the Federal property was acquired" (U.S. Department of Education, n.d.).

## Now do the arithmetic that this course is really about

Put the numbers from Section 1 next to that rule.

- **Roughly 2,400 acres** in Lawrence Township, Marion County, held by the United States from the early 1900s.
- A built complex with **its own water system, its own power plant, its own hospital, its own bakery, its own stockade and its own rail station** (McGillem et al., 1993, sec. 8, p. 2).
- By **1982**, over **10,000 civilian and military personnel** working there, with the Soldier Support and Finance Center carrying a combined budget of **$180 million**, making the post the **fifth largest employer in Indianapolis** (Hankins, 2020, p. 21, citing Indianapolis News reporting).
- In the early 1990s the fort was **the largest employer in Lawrence with nearly 10,000 civilian and military employees** (Encyclopedia of Indianapolis, n.d.-c).

**Read those four bullets together and you have the civic question of this course in a single shape.** A landowner that is **the largest employer in the city** and **one of the largest in the county** contributes **nothing to the property tax base**, while **generating no demand at all for several services** the local government would otherwise have to provide, and **enormous demand for others**: roads to it, houses around it, and **schools for the children of the people who work there.**

**That is not an accusation.** It is a description of a real and permanent fiscal asymmetry that every community hosting a federal installation lives with, and Congress has legislated about it more than once. Lesson 9 takes the legislation.

## Three consequences you can see on the ground

**1. The service boundary and the tax boundary are different shapes.** You already know from course 1 that a township, a council district and a school district are three different outlines over the same ground. **A federal reservation adds a fourth kind of line**: one that a map will draw, an assessor will not bill, and a police department may or may not enter. **When you look up a parcel in Section 5, notice how many different boundaries claim it.**

**2. Land that pays no tax is also land under no pressure to earn.** A private owner holding 1,700 wooded acres inside a growing metropolitan county pays property tax on them every year, which is a standing incentive to subdivide and sell. **The United States pays no such tax to Marion County and felt no such pressure.** Lesson 11 shows you what ninety years of that produced, and it is the single most consequential fact about this ground.

**3. When federal land comes back, it arrives on the tax rolls all at once.** A parcel that has never been assessed suddenly has to be. **Somebody has to value it, zone it, serve it and collect on it**, and there is a whole Indiana statute about who. That is instrument four.

**The research move for this lesson.** If you want to know what a federal installation costs and gives a local government, do not start with an opinion piece. **Start with three documents: the school district's Impact Aid application, the county assessor's exempt-property roll, and the installation's own real property records.** All three exist. **All three are more informative than any argument about them, and none of them were read for this course.**

## Sources
- Encyclopedia of Indianapolis. (n.d.-c). *Lawrence*. https://indyencyclopedia.org/lawrence/
- Hankins, M. B. (2020). *Fort Benjamin Harrison: From military base to Indiana state park* [Master's thesis, Indiana University]. IUPUI ScholarWorks. https://scholarworks.iupui.edu/bitstream/handle/1805/22736/Hankins_Final_Masters%20Thesis_Fort_Ben.pdf
- McGillem, D. E., & Associates, Cardinal, J. R., & Bush, D. R. (1993). *Fort Benjamin Harrison Historic District* [National Register of Historic Places registration form]. Indiana Department of Natural Resources. https://npgallery.nps.gov/NRHP/GetAsset/NRHP/93001581_text
- McCulloch v. Maryland, 17 U.S. (4 Wheat.) 316 (1819).
- U.S. Const. art. I, § 8, cl. 17.
- U.S. Department of Education. (n.d.). *Impact Aid Section 7002: Payments for federal property*. https://www.ed.gov/grants-and-programs/formula-grants/impact-aid/impact-aid-section-7002--payments-for-federal-property`,
      recallContent: [
        {
          prompt: "What is the Enclave Clause, and what must you not assume from it?",
          answer: "Article I, Section 8, Clause 17 lets Congress exercise authority over places purchased with a state legislature's consent for forts, magazines, arsenals, dockyards and other needful buildings. Do not assume every federal property is an exclusive-jurisdiction enclave: jurisdiction may be exclusive, concurrent, partial or proprietary depending on what the state ceded and the United States accepted.",
        },
        {
          prompt: "Why does federal property not appear on a county's tax rolls?",
          answer: "Because a state may not tax an instrumentality of the federal government, a principle running back to McCulloch v. Maryland in 1819. The Department of Education states plainly that federally owned property does not generate taxes.",
        },
        {
          prompt: "State the fiscal asymmetry this post created for Lawrence and Marion County.",
          answer: "It was the largest employer in Lawrence with nearly 10,000 civilian and military employees and the fifth largest in Indianapolis by 1982, and it contributed nothing to the property tax base, while creating demand for roads, housing and above all schools for workers' children.",
        },
        {
          prompt: "Why is untaxed land also land under no pressure to earn?",
          answer: "A private owner of 1,700 wooded acres in a growing county pays property tax annually, which is a standing incentive to subdivide and sell. The United States paid no such tax and felt no such pressure, which is why the forest survived.",
        },
        {
          prompt: "Name the three documents to start with if you want to know what a federal installation costs and gives a local government.",
          answer: "The school district's Impact Aid application, the county assessor's exempt-property roll, and the installation's own real property records. None of them were read for this course.",
        },
      ],
    },
    {
      slug: "fh-powers-tax-base",
      title: "9 · Instrument two: what a community gets instead of taxes",
      section: "Section 3 · Powers",
      body: `Congress knows what lesson 8 described, and has legislated about it. **The substitutes are the instrument, and knowing their names is the difference between complaining about a problem and reading the file on it.**

## Impact Aid, the oldest federal K-12 programme

**What it is.** Impact Aid sits in **Title VII of the Elementary and Secondary Education Act** and pays school districts affected by a federal presence. It has two limbs that people constantly confuse, and the distinction is the lesson.

| Limb | What it compensates | Trigger |
|---|---|---|
| **Section 7003, basic support** | The cost of educating **federally connected children**: children living on federal property, children of uniformed service members, and others | A count of eligible children |
| **Section 7002, payments for federal property** | The **lost tax base itself** | The federal government has acquired, **since 1938**, real property with an assessed valuation of at least **10 percent** of all real property in the district at the time of acquisition |

**Section 7002 is the one that matters for this course**, and its eligibility test is worth reading twice. The Department of Education describes it as assisting districts "that have lost a portion of their local tax base because of Federal ownership of property," reimbursing for land removed from the rolls **after 1938**, and it notes that roughly **200 school districts** receive Section 7002 funds each year (U.S. Department of Education, n.d.).

**Two research warnings before you go looking.**
1. **The 1938 cut-off does real work.** Property the federal government acquired **before 1938** does not generate a Section 7002 claim. **This post's land was bought around 1903 to 1908.** Whether the school district serving it ever qualified under Section 7002, and on what basis, is a **question this course did not answer and you should not assume either way.** The applications are filed annually and are public.
2. **Eligibility is not payment.** These are **formula grants subject to appropriation**, which is a phrase you should learn to notice. **A district can be eligible for a full entitlement and receive a fraction of it**, every year, for decades. Anyone writing about federal impact on a school district must distinguish **what the formula says is owed** from **what Congress actually appropriated**.

**The transferable point.** When a government exempts something from tax, **it usually creates a programme to compensate the loser, and that programme is almost always smaller, later, and more conditional than the exemption.** You will find the same pattern behind payments in lieu of taxes for federal public lands, behind non-profit hospital and university host agreements, and behind every tax abatement a city grants a developer. **Find the exemption, then find the compensation, then compare their sizes. That is a whole method.**

## The annexation of 1970, which is the local twist

Here is where this post gets genuinely interesting, and where it links to the rest of this cluster.

**In 1970 the City of Lawrence annexed the fort.** The U.S. Army approved the annexation in **July 1970**, and the Indianapolis Star reported it complete in **August 1970**. It added roughly **5,000 people, 26 miles of roads and 2,500 acres** to the city (Hankins, 2020, p. 19, citing Indianapolis Star reporting). The Encyclopedia of Indianapolis records the same event more tersely and adds an important qualifier: the fort "was annexed in 1970, despite objections from the U.S. Army" (Encyclopedia of Indianapolis, n.d.-c).

**Notice the two sources disagree about the Army's posture.** Hankins describes an Army that approved it; the Encyclopedia describes an annexation carried out over Army objections. **Both can be partly right if approval followed objection**, which is ordinary in intergovernmental negotiation. **Do not resolve it by choosing the version you like.** The annexation ordinance and the Army's correspondence would settle it, and neither was read here.

**Now the timing, which is not a coincidence.** Indiana's **Unigov** consolidation of Indianapolis and Marion County took effect on **1 January 1970**. Lawrence is one of the municipalities Unigov did not absorb: the Encyclopedia of Indianapolis describes it as **"a Unigov excluded town" with its own mayor, city council, police and fire departments, municipal water company and parks department** (Encyclopedia of Indianapolis, n.d.-c). **In the same year that the region consolidated, an excluded city annexed the largest federal landholding in the county.** Course 4 of this cluster takes Unigov and the suburbs directly. **This is where the two courses touch: a boundary decision at the metropolitan scale, and a boundary decision at the municipal scale, in the same twelve months.**

**And here is the sting, which is the actual civics.** **Annexing federal land does not make it taxable.** Lesson 8's rule does not bend for a city ordinance. So what did Lawrence get?

- **Population for census and formula purposes**, which drives distributions of many kinds
- **Twenty-six miles of roads** and the obligations attached to them
- **Jurisdictional standing** over the ground, whatever its precise extent, for the day the federal government eventually left
- The mayor at the time, **Morris Settles**, put the civic side of it in a sentence a reporter kept: "We thought it would be nice, kind of prestigious to have them as an official part of the city. Besides, how many other mayors can brag that that they have their own Army?" (Indianapolis News, 11 November 1982, as cited in Hankins, 2020, p. 20)

**Read that quotation for what it is.** It is a real, sourced, published remark by a named mayor, and it is charming. **It is also not a fiscal analysis**, and a careful writer quotes it as personality rather than as evidence about municipal finance.

**What the annexation bought, in hindsight.** Twenty-one years later the base closed. **When roughly 2,500 acres of federal ground came back onto the market, it came back inside the corporate limits of the City of Lawrence**, because of a decision taken in 1970. **Whether anyone intended that is not documented in any source read here.** What is documented is the sequence, and the sequence is the point: **a jurisdictional decision made when land is worthless to you determines who benefits when it becomes valuable.** That single sentence is the most portable thing in this course.

**The relationship was not only fiscal, and the record shows it.** The post ran a "Partners in Education" programme with the Lawrence Township School District that put high school computer science students on the fort's computer system, and by the early 1980s roughly **ten percent of Lawrence High School students were connected to the military through activities at the fort** (Hankins, 2020, pp. 20-21). Soldiers coached and umpired in Lawrence's Little League. **A base is a neighbour as well as a landowner**, and any account that keeps only the ledger is missing most of the relationship.

## Sources
- Encyclopedia of Indianapolis. (n.d.-c). *Lawrence*. https://indyencyclopedia.org/lawrence/
- Hankins, M. B. (2020). *Fort Benjamin Harrison: From military base to Indiana state park* [Master's thesis, Indiana University]. IUPUI ScholarWorks. https://scholarworks.iupui.edu/bitstream/handle/1805/22736/Hankins_Final_Masters%20Thesis_Fort_Ben.pdf
- U.S. Department of Education. (n.d.). *Impact Aid Section 7002: Payments for federal property*. https://www.ed.gov/grants-and-programs/formula-grants/impact-aid/impact-aid-section-7002--payments-for-federal-property
- U.S. Department of Education. (n.d.). *Impact Aid grants*. https://www.ed.gov/grants-and-programs/formula-grants/impact-aid-grants`,
      recallContent: [
        {
          prompt: "What is the difference between Impact Aid Section 7003 and Section 7002?",
          answer: "Section 7003 pays basic support for the cost of educating federally connected children. Section 7002 compensates for the lost tax base itself, and requires that the federal government acquired property since 1938 worth at least 10 percent of all real property in the district at the time.",
        },
        {
          prompt: "Why can this course not tell you whether the district serving this post qualified under Section 7002?",
          answer: "Because the land was bought around 1903 to 1908 and Section 7002 only counts property acquired after 1938, and because the annual applications are public but were not read here. Assume nothing either way.",
        },
        {
          prompt: "What does the phrase 'formula grants subject to appropriation' warn you about?",
          answer: "That eligibility is not payment. A district can be eligible for a full entitlement and receive a fraction of it for decades, so always separate what the formula says is owed from what Congress actually appropriated.",
        },
        {
          prompt: "What happened in 1970, and what did it not accomplish?",
          answer: "The City of Lawrence annexed the fort, adding about 5,000 people, 26 miles of roads and 2,500 acres. It did not make the land taxable, because a city ordinance cannot override the rule that a state may not tax federal property.",
        },
        {
          prompt: "Why is 1970 a significant year for this annexation beyond the annexation itself?",
          answer: "Unigov took effect on 1 January 1970 and Lawrence is a Unigov excluded city with its own mayor, council, police, fire, water and parks. A metropolitan boundary decision and a municipal boundary decision happened in the same twelve months.",
        },
        {
          prompt: "State the portable lesson of the 1970 annexation.",
          answer: "A jurisdictional decision made when land is worthless to you determines who benefits when it becomes valuable. When roughly 2,500 acres came back after 1991, they came back inside the City of Lawrence because of a 1970 decision.",
        },
      ],
    },
    {
      slug: "fh-powers-brac",
      title: "10 · Instrument three: a commission built so that nobody could save one base",
      section: "Section 3 · Powers",
      body: `**Closing a military base in the United States is close to politically impossible, and Congress knew it.** The instrument in this lesson exists specifically to defeat the politics, and understanding its design is worth more than any fact about this post.

## The problem the instrument was built to solve

A base is a district's largest employer. Every member of Congress has an overwhelming incentive to protect the ones at home and no incentive to close anyone else's. **Ordinary legislation therefore cannot close bases**, because any bill naming a base attracts an amendment removing it, and enough of those amendments make the bill pointless.

**The solution was procedural, and it has three moving parts:**
1. **An independent commission** reviews a list of closures and realignments proposed by the Secretary of Defense against published selection criteria.
2. The commission sends **one package** to the President, who accepts or rejects it **as a whole**.
3. Congress may reject the package **in its entirety** within a set period, or it takes effect. **There is no vote on any individual base.**

**That third part is the whole design.** A member of Congress cannot trade a vote to save one installation, because there is no vote to trade. **When you meet a policy problem where everyone agrees something must be cut and nobody will cut theirs, look for a mechanism that removes the item-by-item vote.** Base closure is the classic American example, and the same architecture shows up wherever a legislature wants to bind itself.

**The statute for the round that closed this post is the Defense Base Closure and Realignment Act of 1990**, enacted as part of that year's defense authorisation legislation, which set up the commission rounds of 1991, 1993 and 1995 (Defense Base Closure and Realignment Act of 1990). The Encyclopedia of Indianapolis refers to it as the "Base Realignment and Closure Act of 1990" (Encyclopedia of Indianapolis, n.d.-a). **Same statute, looser name.**

## What happened to this post, in order

**1988: the round that made it stronger.** An earlier commission operated in **1988**, and its effect here ran the other way. **BRAC 1988 brought new jobs to Fort Harrison** and proposed moving additional functions in, and the post came out of it looking like "a financially viable installation and a major contribution to Lawrence Township and Marion County's" economy (Hankins, 2020, pp. 25-26). **A base that survives one round is not safe; it is simply not yet on the next list.** That is a genuinely important thing to understand about any recurring review process.

**1991: the list.** Secretary of Defense **Dick Cheney's** recommendations put the post on the closure list, and the announcement "shocked the communities of Indianapolis and Lawrence" (Hankins, 2020, p. 29). The specialisation that had kept the post alive for forty years, administration and finance training, was also what made it look consolidatable.

**The campaign to save it, which is the civics.** It was serious and it involved everyone you would expect: the mayors of Indianapolis and Lawrence, the Indiana congressional delegation, the Indiana chapter of the Association of the United States Army, and a study by the **General Accounting Office** suggesting there was no suitable reason to close the post. A BRAC commissioner visited the fort on **29 May 1991** before the public hearing, and a public meeting followed at the Indiana Government Center (Hankins, 2020, pp. 30-34).

**It did not work.** Hankins's assessment is worth quoting for its restraint: the efforts had "seemingly little to no effect on the BRAC 91 decision," and "despite the publicity and efforts of the mayors of Indianapolis and Lawrence and other voices of protest, most Hoosiers did not passionately respond" (2020, p. 32). **Continual defense budget cuts and troop reductions at the end of the Cold War outweighed local concerns** (Hankins, 2020, pp. 31-32).

**An unintended coalition, which you should notice.** Environmental groups wanted the fort's forest turned into a park, and community groups in Lawrence Township wanted to prevent future residential development on it. Their preferences **pleased environmentalists enough to gain their support for the decision to close** (Hankins, 2020, p. 32, citing Indianapolis Star reporting of 29 May 1991). **A closure some people fought was a closure other people wanted, for reasons that had nothing to do with defense policy.** Lesson 11 shows that this second group got most of what it asked for.

**1 July 1991: the recommendation itself.** The commission recommended to President Bush:

> the closure of Benjamin Harrison; the realignment of the Soldier Support Center to Fort Jackson, South Carolina; and the retention of the Department of the Defense Finance and Accounting Service, Indianapolis Center. We also recommend the revision on Base Realignment and Closure 1988 recommendation relocating U.S. Army Recruiting Command from Fort Sheridan to Fort Knox rather than Fort Benjamin Harrison. The Commission also recommends an adjustment in the DoD recommendation. We find the Secretary deviated substantially from criterion 2, the availability and condition of land and facilities at both the existing and potential receiving locations. Because of this, the Commission also recommends to the President the closure of Building 1.
>
> (Defense Base Closure and Realignment Commission, 1991, p. 5-4, as quoted in Hankins, 2020, pp. 32-33)

**Take that paragraph apart, because it is the single most instructive document in this course.**

- **"The closure of Benjamin Harrison."** The headline.
- **"The realignment of the Soldier Support Center to Fort Jackson, South Carolina."** Closing a base does not delete its work. **The work goes somewhere else, and somewhere else is a different congressional delegation.**
- **"The retention of the Department of the Defense Finance and Accounting Service, Indianapolis Center."** **The post closed and a major federal employer stayed.** Lesson 15 shows you where it sits today. **"Closed" is not a synonym for "the federal government left."**
- **"The revision on Base Realignment and Closure 1988 recommendation..."** A 1991 commission **amending a 1988 commission's decision**, because the earlier one had directed a command to a base now being closed. **Instruments interact, and later instruments clean up after earlier ones.**
- **"We find the Secretary deviated substantially from criterion 2..."** This is the commission **overruling the Secretary of Defense on the record, citing a numbered selection criterion.** It is the mechanism working exactly as designed: published criteria that an independent body can hold the department to.

**Read that last bullet again if you are tempted to think of BRAC as a rubber stamp.** The commission both closed the post **and** told the Secretary he had misapplied a criterion, and specified a further closure as a result.

## Closure, in stages, with figures attributed

**Closure was phased.** The Encyclopedia of Indianapolis gives **1992 to 1997** (n.d.-a); the HABS documentation, written in 1996, says the base "is scheduled for closure by 1997" (Fife & Salmon, n.d., p. 7); reporting elsewhere gives an official closure date of **30 September 1996**. **Use the range, name the source, and note that "closed" is itself a staged process rather than a day.**

**The job figures, attributed.** The American Forces Press Service reported that closure displaced approximately **3,300 military and 1,050 civilian positions** (Sample, 2005). The Encyclopedia of Indianapolis separately gives a loss of **1,050 civilian positions** (n.d.-a). **Those two agree on the civilian number and only one gives the military one.** Attribute both; adopt neither as "the" figure.

**And note what a base closure is, in the vocabulary of this course.** It is **a federal decision, taken by a federal commission, under a federal statute, about federal land, whose entire local consequence falls on a city, a township, a school district and a county that had no vote in it.** Whether that is good policy is a question this course leaves to you. **That it is the structure is not in dispute.**

## Sources
- Defense Base Closure and Realignment Act of 1990, Pub. L. No. 101-510, tit. XXIX, 104 Stat. 1808. https://www.govinfo.gov/app/collection/uscode
- Defense Base Closure and Realignment Commission. (1991). *Report to the President 1991*. As quoted in Hankins (2020), pp. 32-33.
- Encyclopedia of Indianapolis. (n.d.-a). *Fort Benjamin Harrison*. https://indyencyclopedia.org/fort-benjamin-harrison/
- Fife, C. B., & Salmon, T. W., II. (n.d.). *Fort Benjamin Harrison* (HABS No. IN-289) [Written historical and descriptive data]. Historic American Buildings Survey, National Park Service. https://tile.loc.gov/storage-services/master/pnp/habshaer/in/in0400/in0407/data/in0407data.pdf
- Hankins, M. B. (2020). *Fort Benjamin Harrison: From military base to Indiana state park* [Master's thesis, Indiana University]. IUPUI ScholarWorks. https://scholarworks.iupui.edu/bitstream/handle/1805/22736/Hankins_Final_Masters%20Thesis_Fort_Ben.pdf
- Sample, D. (2005, June 15). *Indiana city flourishes after "Fort Ben" closure*. American Forces Press Service. https://www.dvidshub.net/news/538075/indiana-city-flourishes-after-fort-ben-closure`,
      recallContent: [
        {
          prompt: "Why can ordinary legislation not close military bases, and what are the three parts of the mechanism that can?",
          answer: "Because every member protects the base at home and any bill naming bases attracts amendments removing them. The mechanism is an independent commission reviewing the Secretary of Defense's list against published criteria, a single package sent to the President for all-or-nothing acceptance, and a congressional power to reject only the entire package. There is no vote on any individual base.",
        },
        {
          prompt: "What happened to this post in the 1988 round, and what does that teach?",
          answer: "The 1988 round brought new jobs here and made the post look financially viable. A base that survives one round is not safe; it is simply not yet on the next list.",
        },
        {
          prompt: "Name three things the 1 July 1991 recommendation did besides closing the post.",
          answer: "It realigned the Soldier Support Center to Fort Jackson, South Carolina; it retained the Defense Finance and Accounting Service, Indianapolis Center; it revised a 1988 recommendation so U.S. Army Recruiting Command went to Fort Knox instead; and it found the Secretary had deviated substantially from selection criterion 2 and recommended closing Building 1.",
        },
        {
          prompt: "Why is 'closed' not a synonym for 'the federal government left'?",
          answer: "Because the same recommendation that closed the post explicitly retained the Defense Finance and Accounting Service, Indianapolis Center. A major federal employer stayed on the same ground.",
        },
        {
          prompt: "What unintended coalition appeared during the closure fight?",
          answer: "Environmental groups wanted the forest turned into a park and Lawrence Township community groups wanted to prevent future residential development, so the closure some people fought was a closure others supported for reasons unrelated to defense policy.",
        },
        {
          prompt: "Summarise a base closure in this course's vocabulary.",
          answer: "A federal decision, taken by a federal commission, under a federal statute, about federal land, whose entire local consequence falls on a city, township, school district and county that had no vote in it.",
        },
      ],
    },
    {
      slug: "fh-powers-conveyance",
      title: "11 · Instrument four: who decided the afterlife of the ground",
      section: "Section 3 · Powers",
      body: `**The closure decision was made in Washington. The decision about what the land would become was not.** This lesson is the answer to the course's civic question, and it is the reason this site is worth teaching at all.

## The problem, stated fairly

In 1991 roughly **2,500 acres** inside a growing metropolitan county were about to stop being federal. **That is the largest single land-use decision anyone in Marion County would make that decade**, and there was no obvious body to make it. **Instrument four is really a set of instruments, and they run in a sequence.**

## Step 1: a local body to write the plan

The first move was **the Fort Benjamin Harrison Transition Task Force**, with Lawrence's Mayor **Thomas Schneider** as executive director. It was formed quickly and deliberately: Schneider wanted it stood up by **December 1991** to qualify for a **$100,000 grant from the Defense Office of Economic Adjustment** (Hankins, 2020, p. 33). **Notice that the deadline was a funding deadline.** Federal money for reuse planning is available on a schedule, and communities that organise fast get it.

**By February 1992** the task force had a strategic plan, a timeline and **five subcommittees**: natural and historic resources and environment; economic impact; social and human services; neighbourhood operations and services; and education. They reported to the full task force monthly, and the whole effort ran on **seven sequential steps** aiming at a finished redevelopment plan by **May 1994** (Hankins, 2020, pp. 33-34). **Most military reuse plans take years longer** (Hankins, 2020, p. 35).

**Who sat on the environmental subcommittee is the most instructive membership list in this course**, because it shows exactly whose interests were represented when the land's future was decided. It included the Indiana DNR Division of Nature Preserves, the Indianapolis Department of Metropolitan Development and Planning, the U.S. Department of Agriculture's soil conservation division, U.S. Fish and Wildlife, Groups Advocating Urban Greenspace Environments, neighbourhood associations of Lawrence Township, the Indiana chapter of the Nature Conservancy, the U.S. Army, the Hoosier Environmental Council, the City of Lawrence's park board, the fort's own natural resource management division, the Sierra Club, the Audubon Society, and Mayor Schneider (Hankins, 2020, pp. 35-36).

**Count the sovereigns in that room: federal, state, county, city, township, plus non-governmental organisations.** That is what it takes to decide the future of a piece of federal ground, and **every one of them was there because somebody put them there.**

## Step 2: prove the land is worth keeping

Between **April and June 1992** the subcommittee inventoried what was there. The findings, from studies compiled before the closure decision: **about 1,700 acres of nearly continuous reforested land, 155 plant species including 4 rare plants, tributaries of Fall Creek, 42 species of fish, 21 species of reptiles and amphibians, 185 species of birds**, and mammals including the endangered Indiana bat (Hankins, 2020, pp. 36-37).

**And here is the sentence that explains everything.** An Indiana DNR study concluded: "The forested natural communities found at Fort Ben comprise the largest tract of forest, approximately 1,100 acres remaining in central Indiana. A forested tract of this size is extremely significant, especially in Central Indiana" (Hedge et al., 1992, p. 2, as quoted in Hankins, 2020, p. 37).

**Now connect it to lesson 8.** That forest exists because **for ninety years the land was owned by an entity that paid no property tax on it, needed it undeveloped for training, and restricted access to it.** Hankins puts the mechanism plainly: military land use created **de facto protected areas** by limiting human, industrial and agricultural use (2020, p. 16). **The single largest conservation outcome in central Indiana was an unintended by-product of federal ownership.** Nobody planned it. **That is the answer to this course's civic question, and it is not a comfortable one**, because the same ownership that produced the forest also removed the ground from the tax base for ninety years and closed it to the public.

## Step 3: the conveyance instrument

**Federal surplus property does not simply go on the market.** Under the **Federal Property and Administrative Services Act of 1949**, before disposal the government must consider **public benefit conveyances**, including conveyances for park, recreation and natural resource protection purposes (Hankins, 2020, p. 38). For a park conveyance the **Department of the Interior** assesses the land, and the transfer runs through what was then the National Park Service's **Federal Surplus Real Estate Property Program**, known today as **Federal Lands to Parks** (Hankins, 2020, pp. 38-39; National Park Service, n.d.).

**The alternative, if Interior said no, was disposal at fair market value by public auction or negotiated sale** (Hankins, 2020, p. 39). **Two paths, one decision, and the decision belonged to a federal department.**

**The subcommittee stopped planning and started lobbying**, encouraging members and the public to write to the Department of the Interior and the National Park Service in support (Hankins, 2020, p. 39). **In August 1992 the National Park Service announced support for a public benefit conveyance**, having determined two things: that the land was **not suitable as a national park**, and that **preservation and protection should be accomplished by local or state government** (Hankins, 2020, pp. 39-40). **That is a federal agency deciding it should not be the owner and naming who should be.**

## Step 4: the state says yes, and the transfer happens

**Governor Evan Bayh announced that Indiana would take the land as a state park.** And here you get a source-checking exercise for free. **Hankins's text says the announcement came on 30 August 1994. The footnote on that same sentence cites an Indianapolis Star article dated 31 August 1993, titled "Bayh proposes using Fort Ben as a state park"** (2020, p. 41 and n.97). **The sentence and its own footnote are a year apart.**

**Do not treat that as a gotcha.** Treat it as the ordinary condition of research. **A body-text year and a footnote year that disagree is a signal to go to the footnote's source**, because the footnote points at a dated newspaper you can pull. **This course reports the discrepancy and does not pick a year.** Bayh's quoted words survive either way: "The best use we can make of this property would be to hold it in trust for future generations. Fifty years from now, thousands of our citizens will be able to enjoy this" (as quoted in Hankins, 2020, p. 41).

**The transfer, in 1995, was a lease and not a gift.** The Army transferred **1,700 of the 2,500 acres** to the Indiana Department of Natural Resources under an **interim lease at a recurring lease price**, renewable in **four-year periods**, with covenants protecting the land against **deforestation, mining, soil erosion and pollution** and requiring **historic preservation and archaeological work** (Hankins, 2020, pp. 44-45, citing the Army's interim lease document). **Read the covenants as the instrument.** The conditions on the land were written by the party giving it up, and they bind the state that took it.

**The park opened in October 1996**, and its interpretive centre opened in **1999** (Hankins, 2020, pp. 47-48, 52). The Indiana DNR describes **Fort Harrison State Park** today as a **1,700-acre** park containing **two national historic districts** (Indiana Department of Natural Resources, n.d.).

## Step 5: the other 800 acres, and a taxing district

The remaining roughly **800 acres**, mostly the already-developed part, went to redevelopment. The reuse plan set out residential, office and light industrial options, and marketed a residential conversion as **Harrison Village**, reusing **46 buildings from the 1960s containing 232 apartment units** (Hankins, 2020, p. 45).

**The body that did it is the fourth instrument.** The **Fort Harrison Reuse Authority** was established in **1995 under Indiana Code 36-7-30**, the state's chapter on the **reuse of federal military bases**. The statute's premise is that preparing a military base for reuse is "a public and governmental function that cannot be accomplished through the ordinary operations of private enterprise." The authority's property lies in **a special taxing district** for the purpose of levying and collecting **special benefit taxes** for reuse purposes, and unlike an ordinary tax increment district this one is **indefinite**. The authority **purchased approximately 800 acres for $9 million** (Fort Harrison Reuse Authority, n.d.; Ind. Code § 36-7-30).

**Put that beside lesson 8 and the circle closes.** Ground that paid **no** property tax for ninety years came back under a body whose whole financial design is a **special taxing district that never expires**. **The tax base did not simply return. It returned inside a new instrument, purpose-built by the state legislature, with its own boundary and its own revenue stream.**

**Two more things that had to happen first, and they are not decoration.**

**Environmental cleanup.** A **BRAC Cleanup Team** was formed in **1994** with a BRAC environmental coordinator and representatives of the **Environmental Protection Agency** and the **Indiana Department of Environmental Management**. It coordinated an ordnance and explosives search, because one site had been a **grenade range**, and a **24-acre landfill** west of the Camp Glenn area was **closed and sealed in 1991** with continued EPA monitoring (Hankins, 2020, pp. 42-43). **You cannot convey what you have not cleaned**, and cleanup schedules routinely govern the pace of a base conversion.

**Demolition and investment.** More than **one million square feet of buildings were demolished**, and the American Forces Press Service reported that the **City of Lawrence invested $250 million in the 550-acre main post area**, with **more than 100 new companies and civic organisations** arriving within four years (Sample, 2005). **Treat those as attributed figures from a Defense Department news outlet writing a success story.** They are worth reporting and worth labelling.

## The chain, in one table

| Step | Instrument | Who decided | Document it left |
|---|---|---|---|
| Close the base | Defense Base Closure and Realignment Act of 1990 | An independent commission, then the President and Congress on an all-or-nothing basis | The commission's 1991 report to the President |
| Plan the reuse | A local transition task force funded by the Office of Economic Adjustment | City, county, state, federal and non-governmental members | The Fort Harrison Reuse Plan, 1995 |
| Keep the forest public | Federal Property and Administrative Services Act of 1949, public benefit conveyance via Federal Lands to Parks | The Department of the Interior and the National Park Service | The 1992 NPS determination; the 1995 interim lease |
| Redevelop the rest | Indiana Code 36-7-30 | The Indiana General Assembly, then the Fort Harrison Reuse Authority | The authority's charter and its special taxing district |

**Learn that table and you can read any closed base in the country.**

## Sources
- Fort Harrison Reuse Authority. (n.d.). *About*. https://www.fhra.org/about/
- Hankins, M. B. (2020). *Fort Benjamin Harrison: From military base to Indiana state park* [Master's thesis, Indiana University]. IUPUI ScholarWorks. https://scholarworks.iupui.edu/bitstream/handle/1805/22736/Hankins_Final_Masters%20Thesis_Fort_Ben.pdf
- Ind. Code § 36-7-30 (Reuse of federal military bases). https://law.justia.com/codes/indiana/title-36/article-7/chapter-30/
- Indiana Department of Natural Resources. (n.d.). *Fort Harrison State Park*. https://www.in.gov/dnr/state-parks/parks-lakes/fort-harrison-state-park/
- National Park Service. (n.d.). *Reuse of closed military bases (BRAC)*. https://www.nps.gov/orgs/1508/base-realignment-and-closure.htm
- Sample, D. (2005, June 15). *Indiana city flourishes after "Fort Ben" closure*. American Forces Press Service. https://www.dvidshub.net/news/538075/indiana-city-flourishes-after-fort-ben-closure`,
      recallContent: [
        {
          prompt: "Why was the transition task force formed by December 1991 specifically?",
          answer: "To qualify for a $100,000 grant from the Defense Office of Economic Adjustment. The deadline was a funding deadline, and communities that organise fast get the reuse planning money.",
        },
        {
          prompt: "What did the 1992 inventory find, and what explains it?",
          answer: "About 1,700 acres of nearly continuous reforested land including roughly 1,100 acres that a DNR study called the largest tract of forest remaining in central Indiana, plus 155 plant species, 42 fish species, 185 bird species and the endangered Indiana bat. It exists because ninety years of federal ownership meant no property tax, a need for undeveloped training land, and restricted access.",
        },
        {
          prompt: "What is a public benefit conveyance, and who decides?",
          answer: "Under the Federal Property and Administrative Services Act of 1949 the government must consider conveyances for park, recreation and natural resource protection before disposal. For a park the Department of the Interior assesses it and the transfer runs through the National Park Service programme now called Federal Lands to Parks. The alternative is sale at fair market value.",
        },
        {
          prompt: "What did the National Park Service decide in August 1992?",
          answer: "It supported a public benefit conveyance, having determined that the land was not suitable as a national park and that preservation and protection should be accomplished by local or state government. A federal agency decided it should not be the owner and named who should be.",
        },
        {
          prompt: "What is the discrepancy in the account of Governor Bayh's announcement, and how should you handle it?",
          answer: "Hankins's text gives 30 August 1994 while the footnote on the same sentence cites an Indianapolis Star article dated 31 August 1993. Go to the footnote's source rather than picking a year. This course reports the discrepancy and does not resolve it.",
        },
        {
          prompt: "Describe the 1995 transfer of the park land.",
          answer: "The Army transferred 1,700 of 2,500 acres to the Indiana DNR under an interim lease at a recurring price, renewable in four-year periods, with covenants against deforestation, mining, soil erosion and pollution and requirements for historic preservation and archaeology.",
        },
        {
          prompt: "What is the Fort Harrison Reuse Authority, and why does its financing close the circle of this section?",
          answer: "A body established in 1995 under Indiana Code 36-7-30 for the reuse of federal military bases, which bought about 800 acres for $9 million and sits in an indefinite special taxing district levying special benefit taxes. Ground that paid no property tax for ninety years came back inside a purpose-built taxing instrument.",
        },
      ],
    },
    {
      slug: "fh-quiz-powers",
      title: "12 · Quiz: the four instruments",
      section: "Section 3 · Powers",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is the Enclave Clause?",
            options: [
              "Article I, Section 8, Clause 17, giving Congress authority over places purchased with a state legislature's consent for forts, magazines, arsenals, dockyards and other needful buildings",
              "A provision of the Fifth Amendment governing takings on military land",
              "A section of the Defense Base Closure and Realignment Act of 1990",
              "A clause in Indiana's constitution ceding land to the Army",
            ],
            correctIndex: 0,
            explanation: "It is the constitutional basis for federal rather than state authority over a piece of ground inside a state. It does not mean every federal property is an exclusive-jurisdiction enclave.",
            sourceLessonSlug: "fh-powers-enclave",
          },
          {
            prompt: "Why does this course refuse to state whether this post was an exclusive-jurisdiction federal enclave?",
            options: [
              "Because the answer is classified",
              "Because jurisdiction over federal land is always exclusive",
              "Because the question is unanswerable in principle",
              "Because jurisdiction may be exclusive, concurrent, partial or proprietary depending on what Indiana ceded and the United States accepted, and this course did not read those records",
            ],
            correctIndex: 3,
            explanation: "The answer lives in Indiana's cession statutes and the Army's real property records. Naming where an answer lives is better than guessing at the answer.",
            sourceLessonSlug: "fh-powers-enclave",
          },
          {
            prompt: "Why does federal property not appear on a county's property tax rolls?",
            options: [
              "Because Congress waived the tax in the 1949 property act",
              "Because a state may not tax an instrumentality of the federal government, a principle running back to McCulloch v. Maryland in 1819",
              "Because military land is legally worthless",
              "Because counties choose not to assess it",
            ],
            correctIndex: 1,
            explanation: "The Department of Education states the practical consequence plainly: federally owned property does not generate taxes while the school district must still educate the same children.",
            sourceLessonSlug: "fh-powers-enclave",
          },
          {
            prompt: "Which Impact Aid limb compensates for the lost tax base itself, and what is its eligibility test?",
            options: [
              "Section 7003, triggered by a count of federally connected children",
              "Section 7002, triggered by the number of soldiers stationed on the post",
              "Section 7002, triggered by federal acquisition since 1938 of property worth at least 10 percent of all real property in the district at the time",
              "Section 7003, triggered by the acreage of the installation",
            ],
            correctIndex: 2,
            explanation: "Section 7003 is basic support for federally connected children. Section 7002 is the payment for federal property, and the 1938 cut-off does real work.",
            sourceLessonSlug: "fh-powers-tax-base",
          },
          {
            prompt: "What does the phrase 'formula grants subject to appropriation' warn a researcher about?",
            options: [
              "That the grants are awarded competitively",
              "That only states, not districts, may apply",
              "That the formula is secret",
              "That eligibility is not payment: a district can be eligible for a full entitlement and receive a fraction of it for years",
            ],
            correctIndex: 3,
            explanation: "Always separate what the formula says is owed from what Congress actually appropriated. The same distinction applies to most federal formula programmes.",
            sourceLessonSlug: "fh-powers-tax-base",
          },
          {
            prompt: "The City of Lawrence annexed the fort in 1970. What did the annexation NOT do?",
            options: [
              "It did not make the land taxable, because a city ordinance cannot override the rule that a state may not tax federal property",
              "It did not add population to the city",
              "It did not add roads to the city's obligations",
              "It did not affect who had jurisdiction after the base closed",
            ],
            correctIndex: 0,
            explanation: "It added roughly 5,000 people, 26 miles of roads and 2,500 acres, and it put the ground inside Lawrence for the day the federal government left. It did not create a taxable parcel.",
            sourceLessonSlug: "fh-powers-tax-base",
          },
          {
            prompt: "Why is the 1970 annexation the most portable lesson in Section 3?",
            options: [
              "Because annexation is always profitable",
              "Because it shows that federal land can be taxed after annexation",
              "Because a jurisdictional decision made when land is worthless to you determines who benefits when it becomes valuable",
              "Because it proves the Army supported the annexation",
            ],
            correctIndex: 2,
            explanation: "When roughly 2,500 acres came back after 1991, they came back inside the City of Lawrence because of a decision taken twenty-one years earlier. Sources even disagree on whether the Army approved or objected.",
            sourceLessonSlug: "fh-powers-tax-base",
          },
          {
            prompt: "What is the design feature that makes base closure politically possible?",
            options: [
              "A two-thirds Senate vote requirement",
              "Congress can reject the commission's package only in its entirety, so there is no vote on any individual base to trade",
              "The President may close bases by proclamation without Congress",
              "Each base gets an up-or-down vote in its own state's delegation",
            ],
            correctIndex: 1,
            explanation: "Look for this architecture whenever everyone agrees something must be cut and nobody will cut theirs: a mechanism that removes the item-by-item vote.",
            sourceLessonSlug: "fh-powers-brac",
          },
          {
            prompt: "What did the 1988 base closure round do to this post, and what does that teach?",
            options: [
              "It closed the post outright",
              "It had no effect on the post at all",
              "It cut the post's civilian workforce in half",
              "It brought new jobs here and made the post look financially viable, which teaches that surviving one round means only that you are not yet on the next list",
            ],
            correctIndex: 3,
            explanation: "The 1991 commission even had to revise a 1988 recommendation that had directed U.S. Army Recruiting Command to a base now being closed.",
            sourceLessonSlug: "fh-powers-brac",
          },
          {
            prompt: "Besides closing the post, what else did the commission's 1 July 1991 recommendation do?",
            options: [
              "It realigned the Soldier Support Center to Fort Jackson, retained the Defense Finance and Accounting Service Indianapolis Center, revised a 1988 recommendation, and found the Secretary had deviated substantially from selection criterion 2",
              "It transferred the post to the Air Force",
              "It created the state park directly",
              "It recommended keeping the post open for five more years",
            ],
            correctIndex: 0,
            explanation: "That paragraph is the most instructive document in the course: closing a base does not delete its work, and the commission overruled the Secretary on the record.",
            sourceLessonSlug: "fh-powers-brac",
          },
          {
            prompt: "Why is 'the base closed' not the same as 'the federal government left'?",
            options: [
              "Because the Army retained the parade ground",
              "Because the same recommendation explicitly retained the Defense Finance and Accounting Service, Indianapolis Center, so a major federal employer stayed on the ground",
              "Because the National Park Service took over the whole site",
              "Because the closure was later reversed",
            ],
            correctIndex: 1,
            explanation: "Section 5 shows you where that federal employer sits today, on the same former post as a state park and a redevelopment district.",
            sourceLessonSlug: "fh-powers-brac",
          },
          {
            prompt: "Under the Federal Property and Administrative Services Act of 1949, what must happen before surplus federal land is sold at fair market value?",
            options: [
              "The state legislature must pass an enabling act",
              "The land must be offered to the county at cost",
              "The government must consider public benefit conveyances, including for park, recreation and natural resource protection purposes",
              "Nothing; surplus land goes straight to auction",
            ],
            correctIndex: 2,
            explanation: "For a park conveyance the Department of the Interior assesses the land and the transfer runs through the National Park Service programme now called Federal Lands to Parks.",
            sourceLessonSlug: "fh-powers-conveyance",
          },
          {
            prompt: "What did the National Park Service determine in August 1992?",
            options: [
              "That the land was not suitable as a national park and that preservation should be accomplished by local or state government, while supporting a public benefit conveyance",
              "That the land should be sold at auction",
              "That the forest had no ecological value",
              "That the Army should retain the training area",
            ],
            correctIndex: 0,
            explanation: "A federal agency deciding it should not be the owner, and naming who should be, is an instrument working exactly as designed.",
            sourceLessonSlug: "fh-powers-conveyance",
          },
          {
            prompt: "How did the roughly 1,700 acres reach the Indiana Department of Natural Resources in 1995?",
            options: [
              "By outright gift with no conditions",
              "By purchase at appraised value",
              "By condemnation",
              "Under an interim lease at a recurring price, renewable in four-year periods, with covenants against deforestation, mining, soil erosion and pollution plus historic preservation and archaeology requirements",
            ],
            correctIndex: 3,
            explanation: "Read the covenants as the instrument. The conditions on the land were written by the party giving it up and they bind the state that took it.",
            sourceLessonSlug: "fh-powers-conveyance",
          },
          {
            prompt: "What is the Fort Harrison Reuse Authority, and how is it financed?",
            options: [
              "A federal agency funded by annual appropriations",
              "A body established in 1995 under Indiana Code 36-7-30 that bought about 800 acres for $9 million and sits in an indefinite special taxing district levying special benefit taxes",
              "A private developer selected by competitive bid",
              "A committee of the Metropolitan Development Commission with no revenue of its own",
            ],
            correctIndex: 1,
            explanation: "Ground that paid no property tax for ninety years came back inside a purpose-built taxing instrument created by the state legislature. That is how Section 3 closes its own circle.",
            sourceLessonSlug: "fh-powers-conveyance",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 4 · Now  (beat 4: observation and evidence)
    //
    // The owner has an existing Fort Harrison tour, but its embed URL has NOT been supplied yet,
    // and a tour URL is authoritative external data that must never be guessed
    // (plans/future/04-wanderlearn-360-boundary.md). So this lesson ships as `virtual_tour` with
    // NO contentUrl: the player renders the "no media yet" notice above the body, and the body is
    // the observation brief the learner uses when the tour lands. Drop the URL in and re-seed.
    // Same pattern as `ia-now-tour` in scripts/data/indiana-avenue-course.ts.
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "fh-now-tour",
      title: "13 · Now: walk the post (virtual tour, forthcoming)",
      section: "Section 4 · Now",
      lessonType: "virtual_tour",
      body: `**The virtual tour for this lesson is forthcoming.** It is not here yet, and the notice above this text is reporting the truth rather than a fault. The site template this series uses treats beat 4 as a **drop-in**: a course is complete and teachable without it, and the tour is added later without restructuring anything.

**Read this lesson now anyway, because it is your observation brief.** Beat 4 asks one question, "what is actually there today," and the difference between a visitor looking at a place and a researcher looking at a place is entirely a matter of knowing what to look for before you arrive. **Work this list now, then run it against the tour when it lands.**

## What to look for, in order

**1. Find the parade ground, and stand in the middle of it.** You know it is the organising element of the whole plan: a horseshoe of buildings around an open centre, ringed by **Lawton Road**, crossed on a diagonal by **Kent Road** on an original concrete bridge, with a **bandstand added in 1939** (McGillem et al., 1993, sec. 7, p. 2). **Ask the beat-2 question from the middle: which side has the most ornament?** The answer should be the north and west sides, where the senior officers lived. **If the tour lets you turn, you can read a rank hierarchy in a single rotation.** Almost nothing else in this course is that directly observable.

**2. Count porch columns and window heads.** The ornament ladder from lesson 6 is legible from outside every building: elaborate verandas and detail on senior officers' quarters, simpler trim on bachelor officers' quarters, "little ornamentation except for their columned porches and stylized brick work above the windows" on the enlisted barracks, and nothing at all on the warehouses and stables. **Rank the buildings you see before you look up what they were, then check yourself.**

**3. Look for the roofs, and for what replaced them.** Original roofs were **slate** and are now **asphalt**; original **6 over 6 wooden sash windows** have largely been replaced with vinyl-clad aluminium thermal panes; original wooden porch floors are now concrete (McGillem et al., 1993, sec. 7, p. 2). **Every one of those substitutions is a maintenance decision by a landlord**, and the nomination records them because they bear on integrity. **A building can keep its shape and lose its surfaces.**

**4. Find the line where the historic post stops.** The district is about **340 acres** inside a post of roughly **2,500**. Somewhere the Colonial Revival brick gives way to something else: post-1952 concrete block garages the nomination calls intrusive, modern barracks, or new construction from the redevelopment. **That edge is a date, and it is also a decision about what was worth keeping.**

**5. Look for the biggest building on the site, and notice it is not historic.** The finance building on the old **Schoen Field** is enormous. Sources give it as **966 or 996 feet long by 612 feet wide**, holding around **1.5 million square feet**, built for about **$19 million** and dedicated in **October 1953** (Encyclopedia of Indianapolis, n.d.-a, n.d.-b). **It is outside the historic district**, and it is the single clearest piece of evidence that a post's twentieth-century purpose changed from housing infantry to processing paper. **Note the two different lengths in the two Encyclopedia entries and do not average them.**

**6. Find where the forest starts.** The training area to the north was **never built on**, and what is now the state park is roughly **1,700 acres** of it (Indiana Department of Natural Resources, n.d.). **The transition from mown parade ground to closed-canopy forest is the physical form of a fiscal fact**: land that pays no property tax feels no pressure to be subdivided. **Note exactly where that transition happens, because it is a boundary somebody drew in 1992.**

**7. Read every sign, and note who paid for it.** State historical markers, park interpretive panels, National Register plaques, reuse authority signage and city of Lawrence signage will all be present, and **they are different institutions saying different things about the same ground.** The Indiana state historical marker here was installed in **1996**, marker number **49.1996.1** (Indiana Historical Bureau, 1996). **Note the sponsor every time. A marker is a public statement with an author and a date.**

**8. Look for the CCC's work, which you cannot see.** Lesson 3 documented an all-African American CCC company that cut and cleared timber to allow new growth and straightened waterways to prevent erosion here from 1936. **That labour is inside the forest you are looking at and is invisible in it.** The park's own interpretation is thin on this point: Hankins found that the Camp Glenn area, which preserves the parade ground, the Citizens' Military Training Camp and the CCC headquarters, "does not address or interpret the military's role in inadvertently reforesting and saving the land that became a state park" (2020, p. 49). **When you find an interpretive panel, ask what it leaves out. That gap is a finding you can report to the agency that owns the sign.**

## What the tour cannot show you

- **It cannot show you jurisdiction.** Three different landlords hold parts of this ground and none of them has a colour. Lesson 15 tells you how to find the line.
- **It cannot show you a tax status.** A parcel that pays and a parcel that does not look identical.
- **It cannot show you what was demolished.** More than a million square feet came down in the conversion (Sample, 2005). **You cannot photograph an absence.**
- **It cannot show you who was allowed where.** The buildings encode rank and are silent on race, exactly as lesson 6 warned.

**Write down five confident observations before the tour arrives, based on this brief and the map that follows. Then check them.** Being wrong on the record about a place you had not yet seen is a better teacher than being right about one you had.

## Sources
- Encyclopedia of Indianapolis. (n.d.-a). *Fort Benjamin Harrison*. https://indyencyclopedia.org/fort-benjamin-harrison/
- Encyclopedia of Indianapolis. (n.d.-b). *Major General Emmett J. Bean Federal Center*. https://indyencyclopedia.org/bean-federal-center/
- Hankins, M. B. (2020). *Fort Benjamin Harrison: From military base to Indiana state park* [Master's thesis, Indiana University]. IUPUI ScholarWorks. https://scholarworks.iupui.edu/bitstream/handle/1805/22736/Hankins_Final_Masters%20Thesis_Fort_Ben.pdf
- Indiana Department of Natural Resources. (n.d.). *Fort Harrison State Park*. https://www.in.gov/dnr/state-parks/parks-lakes/fort-harrison-state-park/
- Indiana Historical Bureau. (1996). *Fort Benjamin Harrison* [State historical marker 49.1996.1]. Indiana Historical Bureau. https://www.in.gov/history/state-historical-markers/find-a-marker/fort-benjamin-harrison/
- McGillem, D. E., & Associates, Cardinal, J. R., & Bush, D. R. (1993). *Fort Benjamin Harrison Historic District* [National Register of Historic Places registration form]. Indiana Department of Natural Resources. https://npgallery.nps.gov/NRHP/GetAsset/NRHP/93001581_text
- Sample, D. (2005, June 15). *Indiana city flourishes after "Fort Ben" closure*. American Forces Press Service. https://www.dvidshub.net/news/538075/indiana-city-flourishes-after-fort-ben-closure`,
      recallContent: [
        {
          prompt: "Why is this lesson published before its tour exists?",
          answer: "Because the site template treats beat 4 as a drop-in: a course is complete and teachable with the other five beats, and a tour embed URL is authoritative external data that is never guessed. The body serves as the observation brief until the URL is supplied.",
        },
        {
          prompt: "What should you be able to read from a single rotation in the middle of the parade ground?",
          answer: "The rank hierarchy. The most elaborate ornament is on the senior officers' family quarters on the north and west sides, with simpler trim on bachelor officers' quarters, minimal ornament on enlisted barracks and none on service buildings.",
        },
        {
          prompt: "Name three substitutions the nomination records on the original buildings.",
          answer: "Slate roofs replaced with asphalt, 6 over 6 wooden sash windows replaced with vinyl-clad aluminium thermal panes, and wooden porch floors replaced with concrete. A building can keep its shape and lose its surfaces.",
        },
        {
          prompt: "What is the physical meaning of the line where mown ground becomes closed-canopy forest?",
          answer: "It is the form of a fiscal fact. Land that paid no property tax and was needed undeveloped for training felt no pressure to be subdivided. It is also a boundary somebody drew in 1992 when about 1,700 acres were set aside.",
        },
        {
          prompt: "What did Hankins find about the park's interpretation of Camp Glenn?",
          answer: "That it preserves the parade ground, the Citizens' Military Training Camp and the CCC headquarters but does not address or interpret the military's role in inadvertently reforesting and saving the land that became the state park.",
        },
        {
          prompt: "Name four things the tour cannot show you.",
          answer: "Jurisdiction, tax status, what was demolished, and who was allowed where. Buildings encode rank and are silent on race, and you cannot photograph an absence.",
        },
      ],
    },
    {
      slug: "fh-map",
      title: "14 · Map: this post, and the national pattern it belongs to",
      section: "Section 4 · Now",
      body: `**Read this before you touch the map, because the map's limits are the lesson.**

**This platform's lesson map draws the whole world.** A marker is a fixed-size dot on a world projection, so two points need to be roughly two degrees apart, on the order of 200 kilometres, before they separate visually. **A 2,500-acre post is smaller than one dot.** This map cannot show you Lawton Loop, the district edge, or where the forest begins, and pretending otherwise would be a worse lesson than admitting it.

**That limitation is the most useful thing on this page.** The right map for a parcel question is **MapIndy**, the official geographic information system for the Consolidated City of Indianapolis and Marion County, where you can enter an address, an intersection or a parcel number and see parcel boundaries, political boundaries, street centrelines and aerial imagery (City of Indianapolis and Marion County, n.d.). The right map for the park's trails and boundaries is the **Indiana DNR's own property map**. **Choosing the scale of map that matches your question is a research skill**, and lesson 16 puts you to work in MapIndy directly.

**So this map does the job it can do well.** It places this post inside the national pattern it belongs to.

**Blue: Fort Benjamin Harrison itself**, plotted at an approximate point. Its detail carries the whole arc in a paragraph.

**Amber: four other American military installations that closed and were converted**, each of which used some part of the same toolkit you learned in Section 3: a closure commission, a local redevelopment authority, environmental cleanup, historic districts, and public benefit conveyances. **These are here to stop you reading this post as a local story.** Base closure and conversion is a national programme that reshaped dozens of American communities across four commission rounds in the 1980s and 1990s, and it happened to each of them under the same statutes.

**Green: two record repositories.** Washington is where the National Register and the Historic American Buildings Survey records live, and where the base closure commission reported. **Knowing where a record physically lives is part of knowing it exists.**

**Coordinates on this map are approximate points, not surveyed boundaries.** Do not use them to find an address or a property line. Use them to see the shape of the pattern, and use MapIndy or the assessor's property cards when you need a parcel.

**One honest limit, the same one course 1 flagged.** Every marker on this map exists because something was recorded and written about. **How many converted installations are not on this map is a question this course cannot answer and will not guess at.** The Department of Defense's own base closure records are the place to count them properly, and they were not read here.

## Sources
- City of Indianapolis and Marion County. (n.d.). *MapIndy*. https://maps.indy.gov/MapIndy/
- Indiana Department of Natural Resources. (n.d.). *Fort Harrison State Park*. https://www.in.gov/dnr/state-parks/parks-lakes/fort-harrison-state-park/
- McGillem, D. E., & Associates, Cardinal, J. R., & Bush, D. R. (1993). *Fort Benjamin Harrison Historic District* [National Register of Historic Places registration form]. Indiana Department of Natural Resources. https://npgallery.nps.gov/NRHP/GetAsset/NRHP/93001581_text
- National Park Service. (n.d.). *Reuse of closed military bases (BRAC)*. https://www.nps.gov/orgs/1508/base-realignment-and-closure.htm`,
      mapContent: {
        markers: [
          {
            id: "fh-fort-harrison",
            lat: 39.8598,
            lng: -86.0169,
            title: "Fort Benjamin Harrison, Lawrence, Marion County, Indiana",
            color: "#1d4ed8",
            description:
              "The subject of this course. Roughly 2,400 acres of Lawrence Township farmland bought by the United States around 1903 to 1908, built out from Quartermaster Corps stock plans between 1906 and 1910, and held by the federal government for most of the twentieth century. Officer and engineer training in the First World War, a midwest induction centre, three specialist schools and a prisoner of war camp in the Second, then forty years as the Army's finance and administration centre. Annexed by the City of Lawrence in 1970. Listed for closure by the 1991 base realignment commission. Today the same ground carries a 1,700-acre state park, a redevelopment district under a state reuse authority, and a federal finance centre that never left.",
          },
          {
            id: "fh-fort-sheridan",
            lat: 42.2136,
            lng: -87.8145,
            title: "Fort Sheridan, Lake County, Illinois",
            color: "#b45309",
            description:
              "Closed under an earlier round of the same programme, and directly connected to this post: the 1991 commission revised a 1988 recommendation that had moved U.S. Army Recruiting Command from Fort Sheridan to Fort Benjamin Harrison, sending it to Fort Knox instead. Its lakefront historic district and its conversion to housing and open space make it the closest structural sibling to the case in this course. Same statutes, different market.",
          },
          {
            id: "fh-fort-ord",
            lat: 36.6547,
            lng: -121.7861,
            title: "Fort Ord, Monterey County, California",
            color: "#b45309",
            description:
              "A far larger closure from the same programme, whose reuse produced a university campus and a national monument on former training land. It is the best comparison for the central mechanism of this course, because most of Fort Ord's conserved land, like Fort Harrison's forest, survived development only because a federal owner needed it empty and paid no property tax on it.",
          },
          {
            id: "fh-fort-mcclellan",
            lat: 33.7215,
            lng: -85.8005,
            title: "Fort McClellan, Calhoun County, Alabama",
            color: "#b45309",
            description:
              "Another Army post closed under the base realignment programme and handed to a local redevelopment authority. It is the case to read when you want to see how far environmental cleanup obligations can govern the pace of a conversion, which is the step lesson 11 covers in a single paragraph and which in practice can run for decades.",
          },
          {
            id: "fh-presidio",
            lat: 37.7989,
            lng: -122.4662,
            title: "Presidio of San Francisco, California",
            color: "#b45309",
            description:
              "The opposite outcome to Fort Harrison's, and the reason lesson 11's August 1992 decision matters. Here the National Park Service determined the land was not suitable as a national park and said state or local government should hold it. At the Presidio the federal government reached the other conclusion and kept the ground in federal hands under a park trust. Same question, same era, different answer.",
          },
          {
            id: "fh-washington",
            lat: 38.8977,
            lng: -77.0365,
            title: "National Register, HABS and the closure commission, Washington, D.C.",
            color: "#15803d",
            description:
              "Where the records in this course are kept. The Keeper of the National Register listed both districts on this post in 1995; the Historic American Buildings Survey documentation quoted throughout was deposited with the Library of Congress; and the base closure commission reported to the President here on 1 July 1991. Every date in Section 3 is a decision recorded in this city, on a document you can read.",
          },
          {
            id: "fh-indianapolis",
            lat: 39.7745,
            lng: -86.1665,
            title: "Indiana Avenue, Indianapolis, Indiana",
            color: "#15803d",
            description:
              "Course 1 of this cluster, nine miles southwest, for contrast rather than comparison. There a city redevelopment commission and a state university took a Black commercial corridor using blight designation and eminent domain. Here the federal government held ground for ninety years and then gave most of it back as forest. Two courses, one metropolitan area, two completely different sets of instruments, and the same question: who decided.",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 5 · Next  (beat 5: live civics. who governs this ground today, and a real parcel)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "fh-next-who-governs",
      title: "15 · Who governs this ground today, and how you find out",
      section: "Section 5 · Next",
      body: `Beat 5 turns a history course into a civics course. **Every site has a present legal status and a body currently making decisions about it**, and finding those is research rather than opinion.

## Start by counting the landlords

The most striking thing about this post today is that **one former installation carries at least three different kinds of owner at once**, and they are not the same kind of thing.

**1. The state park.** The **Indiana Department of Natural Resources** runs **Fort Harrison State Park**, described by the agency as a **1,700-acre** park with walking and jogging trails, picnic sites, fishing access to Fall Creek, a nature centre, a dog park, a golf course and **two national historic districts** (Indiana Department of Natural Resources, n.d.). Lesson 11 showed you that the land arrived under an interim lease with covenants attached. **A state park is a state agency answering to a state legislature, and its planning documents are state documents.**

**2. The redevelopment district.** The **Fort Harrison Reuse Authority**, created in **1995** under **Indiana Code 36-7-30**, bought roughly **800 acres for $9 million** and operates within an **indefinite special taxing district** levying special benefit taxes for reuse purposes (Fort Harrison Reuse Authority, n.d.). **This is a creature of state statute doing local development**, and it has its own governing board, its own budget and its own meetings.

**3. The federal tenant that never left.** The **Major General Emmett J. Bean Federal Center** on **East 56th Street** houses the **Defense Finance and Accounting Service**. The Encyclopedia of Indianapolis traces its names in order: Finance Center, U.S. Army (1953-1972); U.S. Army Finance Support Agency (1972-1974); U.S. Army Finance and Accounting Center (1975-1991); Defense Finance and Accounting Service Indianapolis Center (1991 onward); and Major General Emmett J. Bean Federal Center (1987 onward). It records **roughly 5,000 employees there by 2021** (Encyclopedia of Indianapolis, n.d.-b). **Lesson 10 told you the closure recommendation explicitly retained this.** **The base closed and the largest federal employer on it stayed.**

**Notice the name history for its own sake.** A building whose official designation changed five times in seventy years is a research trap: **a search on any one of those names will miss four decades of records.** That is the same lesson course 1 taught about following a corporate entity rather than an institution's name.

**4. And the city.** All of this sits inside the **City of Lawrence**, a **Unigov excluded city** with its own mayor, city council, police and fire departments, water company and parks department (Encyclopedia of Indianapolis, n.d.-c), inside **Marion County**, whose assessor values property and whose consolidated city-county government provides much of the rest.

## Now the four questions, adapted for this kind of ground

Course 1 gave you four questions for any American parcel. **On a former federal installation they need a fifth put in front of them.**

**Question 0: who owns it now, and how did they get it?** Federal, state, municipal, reuse authority or private, and by what instrument: a public benefit conveyance, an economic development sale, a lease, or an ordinary transaction. **The answer changes every other answer**, and the deed and the reuse plan are where it lives.

**Question 1: what does the comprehensive plan say this land should become?** For most of Marion County that is the **Comprehensive Plan for Indianapolis and Marion County**, adopted by the **Metropolitan Development Commission**. **Do not assume it governs here without checking**, for the reason in question 4.

**Question 2: what does the zoning permit today?** Zoning is the enforceable rule; the comprehensive plan is the policy statement a rezoning is judged against.

**Question 3: is there an area-specific plan, and has it been adopted?** For the park, the relevant documents are the DNR's property and interpretive plans. For the redevelopment area, the **Fort Harrison Reuse Plan** and whatever has amended it since. **An unadopted plan is where a member of the public has the most leverage**, because it is still open to comment.

**Question 4: who decides, when do they meet, and is the agenda public?** **This is where an excluded city changes the answer, and it is the trap in this lesson.**

## The zoning question, handled honestly

**Here is what this course can tell you, and what it cannot.**

The City of Lawrence's own municipal code contains a section titled **Cooperation with Marion County**, which provides that the Lawrence planning staff, the **Lawrence Plan Commission**, the **Lawrence Board of Zoning Appeals** and other applicable Lawrence officials shall cooperate with the Marion County metropolitan planning department to ensure continuous coverage of planning and zoning functions in and around Lawrence, and that no gaps exist (City of Lawrence, n.d., § 3-5-1-6).

**Read what that section implies rather than what you want it to say.** It tells you that **Lawrence has its own plan commission and its own board of zoning appeals**, and that the ordinance itself anticipates a coordination problem with the county. **It does not tell you which body will hear a petition on a specific parcel**, and this course did not verify that. **Do not assume the Metropolitan Development Commission handles a Lawrence parcel simply because it handles most of Marion County.**

**That is not a dodge. It is the assignment.** The instruction for beat 5 is: **before you write a sentence about who decides, call or read the ordinance and confirm which body has jurisdiction over your parcel, and confirm it again if the parcel is inside a special district.** On this post a parcel may sit inside a state park, inside a reuse authority's taxing district, inside an excluded city, inside a consolidated county, and inside a National Register district all at once. **Five overlapping authorities is not an exaggeration. It is the ordinary condition of American land.**

## What is actually happening on this ground now

**The park is heavily used and growing more so.** Annual visitation rose from **653,889 in 2008** to **973,599 in 2017** (Indiana Division of State Parks statistics, as cited in Hankins, 2020, p. 46). **A number with an owner and a method beats an impression**, and those two figures come from the agency's own counts.

**The redevelopment worked, by the measures its promoters chose.** The American Forces Press Service reported that **more than 100 new companies and civic organisations** arrived within four years, that the **City of Lawrence invested $250 million in the 550-acre main post area**, and that **more than one million square feet of buildings were demolished** (Sample, 2005). **Read those as attributed claims in a Defense Department success story**, which is exactly what they are, and go to the reuse authority's own annual reports if you want audited figures.

**And the interpretation is contested, which is the live question.** Hankins's central criticism, from a public history thesis, is that the park "carries its military past in its name, and military history is a key component of that place; yet, the current layout of the park and available interpretation means that visitors often do not encounter or learn about its military history," and that the Camp Glenn area "does not address or interpret the military's role in inadvertently reforesting and saving the land that became a state park" (2020, pp. 48-49). **That is an argument with an author**, and it is the most actionable thing in this lesson: **an interpretive gap in a state park is a comment you can make to a state agency**, and interpretive plans get revised.

**The honest limits of this lesson.** Ownership changes, statutes are amended, boards are reconstituted and plans are adopted. **Every figure and every governing arrangement above has a source and a date attached, and you should re-check all of them before you rely on any of them.** That instruction is not a disclaimer. **It is the method.**

## Sources
- City of Lawrence, Indiana. (n.d.). *Municipal code § 3-5-1-6: Cooperation with Marion County*. American Legal Publishing. https://codelibrary.amlegal.com/codes/lawrence/latest/lawrence_in/0-0-0-19528
- Encyclopedia of Indianapolis. (n.d.-b). *Major General Emmett J. Bean Federal Center*. https://indyencyclopedia.org/bean-federal-center/
- Encyclopedia of Indianapolis. (n.d.-c). *Lawrence*. https://indyencyclopedia.org/lawrence/
- Fort Harrison Reuse Authority. (n.d.). *About*. https://www.fhra.org/about/
- Hankins, M. B. (2020). *Fort Benjamin Harrison: From military base to Indiana state park* [Master's thesis, Indiana University]. IUPUI ScholarWorks. https://scholarworks.iupui.edu/bitstream/handle/1805/22736/Hankins_Final_Masters%20Thesis_Fort_Ben.pdf
- Ind. Code § 36-7-30 (Reuse of federal military bases). https://law.justia.com/codes/indiana/title-36/article-7/chapter-30/
- Indiana Department of Natural Resources. (n.d.). *Fort Harrison State Park*. https://www.in.gov/dnr/state-parks/parks-lakes/fort-harrison-state-park/
- Sample, D. (2005, June 15). *Indiana city flourishes after "Fort Ben" closure*. American Forces Press Service. https://www.dvidshub.net/news/538075/indiana-city-flourishes-after-fort-ben-closure`,
      recallContent: [
        {
          prompt: "Name the three different kinds of owner on this former post today.",
          answer: "The Indiana Department of Natural Resources, which runs the 1,700-acre state park; the Fort Harrison Reuse Authority, a state-statute body holding about 800 acres in an indefinite special taxing district; and the federal government, whose Defense Finance and Accounting Service occupies the Bean Federal Center.",
        },
        {
          prompt: "Why is the Bean Federal Center's name history a research trap?",
          answer: "Its official designation changed five times between 1953 and 1991, so a search on any single name will miss four decades of records. Follow the entity, not the current name.",
        },
        {
          prompt: "What extra question does a former federal installation require before the usual four?",
          answer: "Who owns it now and how did they get it: federal, state, municipal, reuse authority or private, and by what instrument such as a public benefit conveyance, an economic development sale, a lease or an ordinary transaction. The answer changes every other answer.",
        },
        {
          prompt: "What does the City of Lawrence's municipal code section on cooperation with Marion County tell you, and what does it not?",
          answer: "It tells you Lawrence has its own plan commission and board of zoning appeals and that the ordinance anticipates a coordination problem with the county. It does not tell you which body hears a petition on a specific parcel, and this course did not verify that.",
        },
        {
          prompt: "How many overlapping authorities can claim one parcel on this post?",
          answer: "At least five: a state park, a reuse authority's special taxing district, an excluded city, a consolidated county, and a National Register historic district. Overlapping authority is the ordinary condition of American land.",
        },
        {
          prompt: "What is the live interpretive argument about the park, and why is it actionable?",
          answer: "Hankins argues that visitors often do not encounter the park's military history and that the Camp Glenn area does not interpret the military's role in inadvertently reforesting the land. Interpretive plans get revised, so a gap in a state park is a comment you can make to a state agency.",
        },
      ],
    },
    {
      slug: "fh-next-exercise-parcel",
      title: "16 · Practice: find the owner, the district and the body",
      section: "Section 5 · Next",
      lessonType: "exercise",
      body: `**Do this drill with the real tools open in another tab.** Everything below is free and public.

**The tools.**
- **MapIndy**, the official GIS for the Consolidated City of Indianapolis and Marion County: https://maps.indy.gov/MapIndy/ . Enter an address, an intersection or a parcel number and read parcel boundaries, political boundaries, street centrelines and aerial imagery.
- **The Marion County Assessor's property cards**: https://maps.indy.gov/AssessorPropertyCards/ . Search by state parcel number, owner name or address.
- **The National Register nomination and the HABS documentation** for this post, both linked in the sources of lessons 5 through 7. **Read a primary document alongside a database and you will catch things neither shows alone.**

**Your target: the Major General Emmett J. Bean Federal Center, 8899 East 56th Street, Indianapolis.** It is a safe address to practise on for the same reason the Walker Building was safe in course 1: **it is a public institutional building whose address is published by the agency that occupies it, and nobody's home is exposed.**

**Work through these, then answer the questions below.**
1. Find the address in **MapIndy** and look at the parcel outline. **Note its size relative to its neighbours.** Compare what you see with the dimensions in lesson 13.
2. Read off the **state parcel number**, exactly, including punctuation.
3. Open the **Assessor's property card** for that parcel. **Look for the owner of record and the assessed value, and expect at least one of them to behave differently from a commercial parcel.** Whatever you find, write down what the record actually says rather than what you predicted.
4. In MapIndy, turn on political boundaries and note which **township**, **city**, **council district** and **school district** the parcel sits in. **You should end up with more boundaries than you expected. That is the point of lesson 15.**
5. Now move a few hundred metres north into the state park and repeat steps 2 and 3 on a park parcel. **Compare the two owners of record.**
6. Finally, open the **National Register nomination** and check whether your parcel is inside the historic district boundary. **A parcel database and a district boundary are two different maps, and only one of them triggers a federal review.**

**The habits this builds, which transfer to any American county.** Every county has an assessor and most have a GIS. **The names of the tools change and the facts do not: parcel number, owner of record, assessed value, which overlapping jurisdictions the parcel sits in, and whether it is inside a designated district.** Learn to find those five and you can research any address in the country.

**The rule you do not get to break.** **Do not run this drill on somebody's home and publish the result.** Much of the former post is now housing, and a current occupant's name attached to their address in a piece of writing is a different act from a public record sitting in a county database. **Practise on institutional and commercial addresses.** This is the same rule the method course applied to tourist homes and course 1 applied to the Avenue.

## Sources
- City of Indianapolis and Marion County. (n.d.). *MapIndy*. https://maps.indy.gov/MapIndy/
- Encyclopedia of Indianapolis. (n.d.-b). *Major General Emmett J. Bean Federal Center*. https://indyencyclopedia.org/bean-federal-center/
- Marion County Assessor. (n.d.). *Assessor property cards*. https://maps.indy.gov/AssessorPropertyCards/
- McGillem, D. E., & Associates, Cardinal, J. R., & Bush, D. R. (1993). *Fort Benjamin Harrison Historic District* [National Register of Historic Places registration form]. Indiana Department of Natural Resources. https://npgallery.nps.gov/NRHP/GetAsset/NRHP/93001581_text`,
      exercise: {
        instructions:
          "Type the missing term, name, number, body or year, then check. Close answers (spelling, capitalization) count as 'close', not wrong.",
        items: [
          {
            prompt: "The official GIS for the Consolidated City of Indianapolis and Marion County is called ___.",
            answer: "MapIndy",
            accept: ["map indy", "mapindy"],
            explanation: "At maps.indy.gov/MapIndy/. Enter an address, intersection or parcel number.",
          },
          {
            prompt: "The constitutional provision giving Congress authority over places purchased for forts, magazines and arsenals is the ___ Clause.",
            answer: "Enclave",
            accept: ["enclave clause", "federal enclave"],
            explanation: "Article I, Section 8, Clause 17. It does not mean every federal property is an exclusive-jurisdiction enclave.",
          },
          {
            prompt: "The 1819 Supreme Court case behind the rule that a state may not tax a federal instrumentality is McCulloch v. ___.",
            answer: "Maryland",
            accept: ["maryland", "state of maryland"],
            explanation: "It is why federal property does not appear on a county's tax rolls, which is why Impact Aid exists.",
          },
          {
            prompt: "The Impact Aid limb that compensates a district for the lost tax base is Section ___.",
            answer: "7002",
            accept: ["seven thousand two", "section 7002"],
            explanation: "Section 7003 is basic support for federally connected children. Section 7002 is payments for federal property, and it counts only acquisitions since 1938.",
          },
          {
            prompt: "Property acquired by the federal government before ___ does not generate a Section 7002 claim.",
            answer: "1938",
            accept: ["38"],
            explanation: "This post's land was bought around 1903 to 1908, so whether its district ever qualified is a question to research rather than assume.",
          },
          {
            prompt: "The City of ___ annexed the fort in 1970, adding about 5,000 people and 26 miles of roads.",
            answer: "Lawrence",
            accept: ["lawrence indiana", "city of lawrence"],
            explanation: "It did not make the land taxable. It did determine who had jurisdiction when the ground came back twenty-one years later.",
          },
          {
            prompt: "Lawrence is a Unigov ___ city, with its own mayor, council, police, fire, water and parks.",
            answer: "excluded",
            accept: ["excluded town", "exclusion"],
            explanation: "Unigov took effect 1 January 1970, the same year as the annexation. Course 4 of this cluster takes Unigov directly.",
          },
          {
            prompt: "The commission that recommended closing this post reported to the President on 1 July ___.",
            answer: "1991",
            accept: ["91"],
            explanation: "It also realigned the Soldier Support Center to Fort Jackson, retained the Defense Finance and Accounting Service Indianapolis Center, and found the Secretary had deviated from selection criterion 2.",
          },
          {
            prompt: "Congress may reject a base closure commission's package only in its ___, so there is no vote on any individual base.",
            answer: "entirety",
            accept: ["whole", "entire", "totality"],
            explanation: "That single design feature is what makes closing bases politically possible.",
          },
          {
            prompt: "Before selling surplus land at fair market value, the government must consider a public ___ conveyance.",
            answer: "benefit",
            accept: ["benefit conveyance", "public benefit"],
            explanation: "Under the Federal Property and Administrative Services Act of 1949, including conveyances for park, recreation and natural resource protection purposes.",
          },
          {
            prompt: "The National Park Service programme that transfers surplus federal land for public parks is called Federal Lands to ___.",
            answer: "Parks",
            accept: ["parks", "park"],
            explanation: "Formerly the Federal Surplus Real Estate Property Program. It provided technical assistance to the transition task force here.",
          },
          {
            prompt: "Of roughly 2,500 acres, about ___ acres went to the Indiana Department of Natural Resources as a state park.",
            answer: "1700",
            accept: ["1,700", "seventeen hundred"],
            explanation: "Under an interim lease with covenants against deforestation, mining, soil erosion and pollution, renewable in four-year periods.",
          },
          {
            prompt: "The Fort Harrison Reuse Authority was established in 1995 under Indiana Code 36-7-___.",
            answer: "30",
            accept: ["thirty", "36-7-30"],
            explanation: "The chapter on reuse of federal military bases. The authority's land sits in an indefinite special taxing district.",
          },
          {
            prompt: "The federal agency that stayed on this ground after the base closed is the Defense ___ and Accounting Service.",
            answer: "Finance",
            accept: ["finance", "dfas"],
            explanation: "In the Major General Emmett J. Bean Federal Center on East 56th Street. Closed is not a synonym for the federal government left.",
          },
          {
            prompt: "The federal review triggered when an agency's undertaking affects a listed historic property is Section ___ of the National Historic Preservation Act.",
            answer: "106",
            accept: ["one hundred six", "section 106"],
            explanation: "It is a consultation and consideration requirement, not a veto. The HABS documentation quoted all course is a classic piece of Section 106 mitigation.",
          },
        ],
      },
    },
    {
      slug: "fh-quiz-next",
      title: "17 · Quiz: reading the ground today",
      section: "Section 5 · Next",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Why is this course's map lesson national rather than post-scale?",
            options: [
              "Because the post's coordinates are unknown",
              "Because military installations may not be mapped",
              "Because the course avoids maps of Indiana",
              "Because the lesson map draws the whole world, so points need roughly two degrees of separation to be distinguishable, and a 2,500-acre post is smaller than one dot",
            ],
            correctIndex: 3,
            explanation: "Matching the scale of the map to the question is the actual skill. For a parcel question the right map is MapIndy; for trails it is the DNR's own property map.",
            sourceLessonSlug: "fh-map",
          },
          {
            prompt: "What is MapIndy?",
            options: [
              "A private real estate listing service",
              "The official GIS for the Consolidated City of Indianapolis and Marion County",
              "The Indiana DNR's trail mapping app",
              "A historical atlas of military installations",
            ],
            correctIndex: 1,
            explanation: "It shows parcel boundaries, political boundaries, street centrelines and aerial imagery by address, intersection or parcel number.",
            sourceLessonSlug: "fh-next-exercise-parcel",
          },
          {
            prompt: "Which five facts should you pull for any parcel on a former installation?",
            options: [
              "Parcel number, owner of record, assessed value, the overlapping jurisdictions it sits in, and whether it is inside a designated district",
              "Square footage, roof age, paint colour, street name and zip code",
              "Architect, contractor, original cost, current tenant and lease term",
              "Zoning code alone",
            ],
            correctIndex: 0,
            explanation: "The names of the tools change from county to county. Those five facts do not, and the fifth one is what tells you whether a federal review applies.",
            sourceLessonSlug: "fh-next-exercise-parcel",
          },
          {
            prompt: "Which three kinds of owner hold parts of this former post today?",
            options: [
              "Three private developers",
              "The Army, the Air Force and the National Guard",
              "The Indiana Department of Natural Resources as a state park, the Fort Harrison Reuse Authority as a redevelopment district, and the federal government at the Bean Federal Center",
              "The City of Lawrence alone",
            ],
            correctIndex: 2,
            explanation: "One former installation, three completely different kinds of owner, plus a city and a county over all of it.",
            sourceLessonSlug: "fh-next-who-governs",
          },
          {
            prompt: "Why is the Bean Federal Center's name history a research trap?",
            options: [
              "Because the building was moved",
              "Because its official designation changed five times between 1953 and 1991, so a search on any one name misses four decades of records",
              "Because the records are sealed",
              "Because the building has no street address",
            ],
            correctIndex: 1,
            explanation: "It is the same lesson course 1 taught about following a corporate entity rather than an institution's current name.",
            sourceLessonSlug: "fh-next-who-governs",
          },
          {
            prompt: "What extra question does a former federal installation add in front of the usual four parcel questions?",
            options: [
              "What year was the building constructed",
              "How many people work there",
              "What is the building's architectural style",
              "Who owns it now and by what instrument they got it: a public benefit conveyance, an economic development sale, a lease, or an ordinary transaction",
            ],
            correctIndex: 3,
            explanation: "The answer changes every other answer, and it lives in the deed and the reuse plan.",
            sourceLessonSlug: "fh-next-who-governs",
          },
          {
            prompt: "What does the Lawrence municipal code's cooperation section establish, and what does it leave open?",
            options: [
              "That the Metropolitan Development Commission hears every Lawrence petition",
              "That Lawrence has no planning authority of its own",
              "That Lawrence has its own plan commission and board of zoning appeals and the ordinance anticipates coordination with the county, while leaving open which body hears a petition on a given parcel",
              "That the state legislature decides all Lawrence zoning",
            ],
            correctIndex: 2,
            explanation: "This course did not verify the answer for a specific parcel, and says so. Confirming which body has jurisdiction before you write is the assignment.",
            sourceLessonSlug: "fh-next-who-governs",
          },
          {
            prompt: "How many overlapping authorities can claim a single parcel on this post?",
            options: [
              "At least five: a state park, a reuse authority's taxing district, an excluded city, a consolidated county, and a National Register district",
              "Exactly one, the City of Lawrence",
              "Two, the state and the county",
              "None; former federal land is unregulated",
            ],
            correctIndex: 0,
            explanation: "Overlapping authority is the ordinary condition of American land, not an anomaly of this site.",
            sourceLessonSlug: "fh-next-who-governs",
          },
          {
            prompt: "State park visitation here rose from 653,889 in 2008 to 973,599 in 2017. Why does this course use those figures rather than a general statement?",
            options: [
              "Because larger numbers are more persuasive",
              "Because they are the agency's own counts, so you know exactly what they measure and who produced them",
              "Because visitation is the only measure of a park's value",
              "Because the figures are estimates the course rounded",
            ],
            correctIndex: 1,
            explanation: "A number with an owner and a method beats an impression. The same rule applied to the disputed acreage and the closure job losses.",
            sourceLessonSlug: "fh-next-who-governs",
          },
          {
            prompt: "How should you treat the redevelopment figures reported by the American Forces Press Service?",
            options: [
              "As independently audited totals",
              "As too unreliable to mention",
              "As attributed claims in a Defense Department success story, worth reporting and worth labelling, with the reuse authority's own reports as the place to look for audited figures",
              "As the reuse authority's official position",
            ],
            correctIndex: 2,
            explanation: "More than 100 new companies in four years, $250 million invested by Lawrence in the 550-acre main post area, and more than a million square feet demolished. Attribute, do not adopt.",
            sourceLessonSlug: "fh-next-who-governs",
          },
          {
            prompt: "Why is the interpretive criticism of the state park actionable rather than merely academic?",
            options: [
              "Because it proves the park should be closed",
              "Because it requires an act of the legislature to address",
              "Because state parks are exempt from public comment",
              "Because interpretive plans get revised, so a documented gap in a state park's interpretation is a comment a member of the public can make to a state agency",
            ],
            correctIndex: 3,
            explanation: "Hankins documents that Camp Glenn does not interpret the military's role in inadvertently reforesting the land that became the park. That is an argument with an author and an address to send it to.",
            sourceLessonSlug: "fh-next-who-governs",
          },
          {
            prompt: "When you stand in the middle of the parade ground, what should a single rotation let you read?",
            options: [
              "The rank hierarchy, because the most elaborate ornament is on the senior officers' quarters on the north and west sides and the least is on service buildings",
              "The dates of every building",
              "The boundary of the state park",
              "Which parcels are taxable",
            ],
            correctIndex: 0,
            explanation: "Almost nothing else in this course is that directly observable. Rank the buildings before you look them up, then check yourself.",
            sourceLessonSlug: "fh-now-tour",
          },
          {
            prompt: "Why does this course publish a virtual_tour lesson before a tour URL exists?",
            options: [
              "Because the tour was cancelled",
              "Because the platform requires a placeholder lesson",
              "Because beat 4 is a drop-in: the course is complete and teachable with the other five beats, and a tour embed URL is authoritative external data that is never guessed",
              "Because the tour is optional and will never be added",
            ],
            correctIndex: 2,
            explanation: "The owner's Fort Harrison tour exists; its embed URL has not been supplied. The lesson ships with the notice and the observation brief, and the URL drops in on a re-seed.",
            sourceLessonSlug: "fh-now-tour",
          },
          {
            prompt: "Name three things the tour cannot show you.",
            options: [
              "Colour, texture and scale",
              "Jurisdiction, tax status, what was demolished, and who was allowed where",
              "Buildings, roads and signs",
              "Season, weather and time of day",
            ],
            correctIndex: 1,
            explanation: "A parcel that pays tax and one that does not look identical, and you cannot photograph an absence. Everything missing from the tour is a question for the records.",
            sourceLessonSlug: "fh-now-tour",
          },
          {
            prompt: "The map lesson says its markers are approximate points. What follows?",
            options: [
              "The map is unreliable and should be ignored",
              "The coordinates should be averaged with a survey",
              "The markers are illustrative fictions",
              "Do not use them to find an address or a property line; use them to see the pattern, and use MapIndy or the assessor's cards for a parcel",
            ],
            correctIndex: 3,
            explanation: "Approximate points at world scale are fine for a pattern and useless for a lot line. Matching the tool to the question is the skill.",
            sourceLessonSlug: "fh-map",
          },
        ],
      },
    },
    // <<< APPEND NEXT SECTION ABOVE THIS LINE >>>
  ],
};
