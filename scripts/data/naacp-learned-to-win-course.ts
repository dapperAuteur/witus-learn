import type { AuthoredCourse } from "./authored-course";

// He Did the Work, wave 1 (plans/65 Phase 4.4: "pair launches with She Did the Work waves").
//
// WHY THIS COHORT. plans/future-courses/he-did-the-work/01-list-of-men-that-did-the-work.md lists
// five names: Walter White, W. E. B. Du Bois, Thurgood Marshall, James Weldon Johnson, Onesimus.
// Two of the five are already taught elsewhere in this catalog, so building them again would be
// duplication rather than a wave:
//   * ONESIMUS is the subject of Section 5 of `training-the-colonizer` and appears again in
//     `giants-dragons-and-the-bones`.
//   * MOLEFI KETE ASANTE, the other file in that directory, is the subject of `afrocentricity`.
// The remaining four are not a list. They are one institution's four instruments, in sequence:
// publication (Du Bois), a branch network aimed at legislation (Johnson), investigation and
// publicity (White), and litigation (Marshall). That is the cohort shape the She Did the Work
// proposals document argued for, applied to the men's list.
//
// CHARLES HAMILTON HOUSTON is in the course although he is not on BAM's list, because the
// litigation section is not true without him: he built the strategy, trained Marshall, and died in
// April 1950, four years before Brown. A course that gives Marshall the whole ladder repeats the
// erasure it is supposed to be correcting.
//
// PAIRING WITH `she-took-the-seat`. The two wave-1 courses are deliberately opposite answers to one
// question. She Took the Seat is how INDIVIDUALS enter a closed profession one seat at a time. This
// one is how an ORGANIZATION forces an institution open. Neither route is presented as the whole
// answer, and the final lesson of this course says so.
//
// SOURCING. Every subject here is deceased, so the risk profile is different from the She course,
// but the discipline is the same. Statutory and judicial facts are cited to the case reporters and
// to senate.gov; membership and branch figures to a named historian; the lynching report to the
// digitized original. TWO numbers are deliberately NOT printed: the total in the NAACP's 1919
// lynching report (secondary sources disagree about whether the headline figure counts all victims
// or Black victims only, and the primary could not be read in this pass, so a research check is
// filed) and the exact House tally on the Dyer bill (230 and 231 both circulate). The one quotation
// in the course is Du Bois's own published sentence from The Crisis, cited to the issue and page.
export const NAACP_LEARNED_TO_WIN_COURSE: AuthoredCourse = {
  title: "How the NAACP Learned to Win",
  description:
    "Four men, four instruments, and the slowest successful campaign in American civic history. W. E. B. Du Bois built a press so the facts existed. James Weldon Johnson built a branch network and aimed it at Congress, where it lost. Walter White went and got the evidence nobody would give him, and used it to beat a Supreme Court nomination. Charles Hamilton Houston designed a ladder of precedents and trained the lawyer who climbed it, and Thurgood Marshall argued thirty-two cases before the Supreme Court and won twenty-nine of them. This is a course about organizational strategy told through five careers: what each instrument can do, what it cannot, what a losing campaign still buys, and why the litigation everyone remembers only worked because the other three came first. Cited to the case reporters, the Senate's own record, the digitized Crisis, and named historians, APA 7 throughout.",
  lessons: [
    // ── Section 1 ──────────────────────────────────────────────────────────────────────────────
    {
      slug: "hdw-the-crisis",
      title: "1 · First, own a press",
      section: "Section 1 · Publish the evidence",
      body: `The NAACP was founded in 1909 by a mixed group of Black and white reformers. Within a year it did the single most consequential thing an organization with no money and no legal standing can do: it started publishing.

**The Crisis.** W. E. B. Du Bois founded the magazine in 1910 and edited it until 1934. The first issue appeared in November 1910. He described its purpose in the magazine's own words as setting forth the facts and arguments that show the danger of race prejudice, and as recording events affecting relations between the races, reviewing opinion and literature, and advocating for the rights of people regardless of color (NAACP, n.d.). Within nine years its circulation had reached roughly 100,000 (Modernist Journals Project, n.d.).

**Why a house magazine was a strategic instrument and not a newsletter.** In 1910 a Black organization could not get a hearing in most of the daily press, could not compel a government agency to collect a statistic, and could not sue its way to a headline. A magazine solved a specific problem: it created a place where a fact could be stated, dated, and repeated until other people had to deal with it. Every later instrument in this course depends on that. A lobbying campaign needs something to hand a legislator. An investigation needs somewhere to publish. A lawsuit needs a public that already believes the underlying facts are real.

**What it also built, which nobody planned.** Because The Crisis paid attention to literature and art, it became a publishing venue for a generation of Black writers, and a business manager later described its effect as an intellectual revolution (NAACP, n.d.). An organization that owns a press acquires an audience, and an audience is the raw material of a membership.

**The sentence that shows what the instrument was for.** In May 1919, after Black soldiers returned from the First World War into a year of racial violence, Du Bois published an editorial titled "Returning Soldiers." It closes: "We return. We return from fighting. We return fighting" (Du Bois, 1919, p. 13). That is not decoration. It is an organization telling its own members, in its own pages, what posture to take, without asking anyone's permission to say it.

:::reveal Why is owning a publication a strategic instrument rather than a communications nicety? ||| It creates a place where a fact can be stated, dated and repeated when no daily paper will carry it and no agency will collect it. Lobbying, investigation and litigation all need a public that already accepts the underlying facts.

:::reveal What did The Crisis acquire for the NAACP beyond distribution of its arguments? ||| An audience, which is the raw material of a membership, plus a literary reputation, because the magazine published a generation of Black writers alongside its reporting.

## Vocabulary
- **House magazine**: a periodical owned and edited by an organization, so its editorial line is the organization's own.
- **Circulation**: the number of copies distributed per issue, which is the measure of how far a claim published there can travel.
- **Editorial**: an unsigned or signed opinion piece stating the publication's position rather than reporting an event.
- **Instrument**: in this course, one method an organization uses to force change, distinct from the goal it is aimed at.

## Sources
Du Bois, W. E. B. (1919, May). Returning soldiers. *The Crisis, 18*, 13.

Modernist Journals Project. (n.d.). *The Crisis*. Brown University and the University of Tulsa. https://modjourn.org/journal/crisis/

NAACP. (n.d.). *History of The Crisis*. https://naacp.org/find-resources/history-explained/history-crisis`,
    },
    {
      slug: "hdw-counting-as-evidence",
      title: "2 · Counting and naming as a weapon",
      section: "Section 1 · Publish the evidence",
      body: `The second thing the organization did with its press was less famous and more useful: it counted.

**The 1919 report.** The NAACP published *Thirty Years of Lynching in the United States, 1889-1918*. It is not an essay. It is a tabulation: lynchings arranged by year, by state, by race, by sex, and by the offense the mob alleged, with the victims listed by name where the association could establish one (NAACP, 1919).

**Why a table beats an argument here.** An argument invites a counter-argument. A table invites a check. Once the association published names and dates by state, the reply "this is exaggerated" required the person making it to produce a corrected list, and nobody did. That is the difference between advocacy and evidence, and it is the reason the report was still being cited in congressional debate decades later.

**What the method costs.** Somebody had to gather it. There was no federal count. There is still no complete federal count. Every entry came from press clippings, correspondents, branch officers, and later from investigators sent to the scene, which is Walter White's job in section 3. The tabulation only exists because the organization decided that the number was worth years of unglamorous labor.

**A number this course will not print.** Secondary accounts of the report disagree about whether its headline total counts all persons lynched in those thirty years or only Black victims, and the primary was not readable in the pass that built this course. So the lesson describes the report's structure and method, and prints no total. A course that teaches counting as a discipline and then reprints an unchecked number would be arguing against itself. A source check is filed so the number can be added when someone reads the original.

**The transferable point.** The first move against a harm that official statistics ignore is almost always to build the count yourself, publish the method, and let the burden of correction fall on whoever disputes it.

:::reveal Why does a published tabulation change an argument that a well-written essay does not? ||| An essay invites a counter-argument, while a table invites a check. Once names, dates and states are published, disputing the total requires producing a corrected list, and the burden shifts to the person disputing it.

:::reveal Why does this lesson print no total from the 1919 report? ||| Secondary accounts disagree about whether the headline figure counts all victims or Black victims only, and the primary was not read in this pass. A course teaching counting as a discipline cannot reprint an unchecked number.

## Vocabulary
- **Tabulation**: data arranged so that individual entries can be located and checked, rather than summarized in prose.
- **Burden of correction**: the obligation, once a documented count exists, that falls on whoever claims it is wrong.
- **Official statistic**: a count produced by a government agency, whose absence is itself a political fact.
- **Primary source**: the original document, as opposed to an account of it, which is what this lesson could not obtain.

## Sources
National Association for the Advancement of Colored People. (1919). *Thirty years of lynching in the United States, 1889-1918*. NAACP. https://archive.org/details/thirtyyearsoflyn00nati

Library of Congress. (n.d.). *NAACP: A century in the fight for freedom*. https://www.loc.gov/exhibits/naacp/`,
    },
    {
      slug: "hdw-silent-protest",
      title: "3 · The march that made no sound",
      section: "Section 1 · Publish the evidence",
      body: `Publication and tabulation both assume somebody is reading. The third instrument in this section was designed for people who were not.

**July 1917.** After a white mob attacked Black residents of East St. Louis, Illinois, killing an uncounted number and burning homes, the NAACP organized a march down Fifth Avenue in New York. More than ten thousand people walked. Nobody spoke. Children walked in front, dressed in white. Drums kept time. Signs carried the argument, and the marchers carried nothing else. It is generally described as the first major street protest against lynching in the United States (Siracusa, 2020).

**Why silence was the design and not a mood.** A protest that shouts can be reported as a disturbance. A protest that says nothing forces the coverage to describe what the signs said, because there is nothing else to describe. The organization had spent seven years establishing, in print, that the facts were real. The march made those facts visible to people who would never open a magazine, and it did so in a form that was almost impossible to characterize as a riot.

**What it demonstrates about instruments.** Publication reaches people who read. A tabulation reaches people who argue with numbers. A silent march reaches people who look. None of these three is a substitute for the others, and the organization used all of them in the same decade rather than choosing.

**The man who organized it.** James Weldon Johnson had joined the NAACP as field secretary the year before. He is the subject of the next section, and the parade is the hinge between the two: it is the moment the organization stops being mainly a magazine and starts being a body that can put ten thousand people in a street, which is exactly the capability a legislative campaign requires.

:::reveal Why was silence a strategic choice at the 1917 parade rather than a matter of tone? ||| A protest that shouts can be covered as a disturbance. With no speeches and no noise, coverage had to describe the signs, so the marchers controlled the content of the reporting.

:::reveal What capability did the Silent Protest Parade prove the NAACP had acquired? ||| The ability to assemble more than ten thousand people in a street, which is the organized mass a legislative campaign needs and which a magazine alone cannot supply.

## Vocabulary
- **Silent protest**: a demonstration deliberately conducted without speech or chanting, so its message travels entirely through visible material.
- **Field secretary**: a staff role responsible for traveling to organize and support local branches.
- **Branch**: a local chapter of a national organization, which is what turns members into a distributable capability.
- **Instrument mix**: using publication, evidence and demonstration together rather than treating them as alternatives.

## Sources
Siracusa, A. (2020, November 24). A century ago, James Weldon Johnson became the first Black person to head the NAACP. *The Conversation*. https://theconversation.com/a-century-ago-james-weldon-johnson-became-the-first-black-person-to-head-the-naacp-149513

Library of Congress. (n.d.). *NAACP: A century in the fight for freedom*. https://www.loc.gov/exhibits/naacp/`,
    },
    // ── Section 2 ──────────────────────────────────────────────────────────────────────────────
    {
      slug: "hdw-field-secretary",
      title: "5 · Build the network before you need it",
      section: "Section 2 · Build the network, then aim it at the law",
      body: `A national organization that exists only in New York can publish. It cannot deliver a vote. Between 1916 and 1920 the NAACP built the thing that turns members into leverage.

**What Johnson was hired to do.** James Weldon Johnson joined the NAACP as field secretary in 1916. He had already been a school principal, a songwriter, a novelist, and a United States consul in Venezuela and Nicaragua. The field secretary's job was to travel, particularly into the South, and to organize local branches.

**What the numbers did.** Membership went from 8,765 in 1916 to 90,000 in 1920, and the number of local chapters went from 70 to 395 (Siracusa, 2020). Read those two figures together: the membership grew about tenfold and the branch count grew about fivefold, so the average branch also got bigger. The organization did not just acquire supporters, it acquired addresses, officers, and meeting places in hundreds of specific congressional districts.

**Why the geography is the whole point.** A national membership list is a mailing list. A branch structure is a map. When a bill reaches the floor, the question is never how many people agree with you nationally; it is whether the senator from a particular state hears from constituents he has to answer. Section 3 of this course contains the clearest demonstration of that difference, in 1930.

**Then he ran it.** In November 1920 the board named Johnson executive secretary, the first Black person to hold the top staff job at the organization (NAACP, n.d.; Siracusa, 2020). He held it for a decade before leaving to teach at Fisk University. He is also the author of the lyrics of "Lift Every Voice and Sing," written in 1900 with music by his brother J. Rosamond Johnson, which is a separate and much better-known fact about him, and one that tells you nothing about why the NAACP could lobby by 1922.

:::reveal What is the practical difference between a national membership list and a branch structure? ||| A list is a mailing list. A branch structure is a map: officers, meeting places and constituents inside specific districts, which is what lets an organization reach the particular legislator whose vote is in question.

:::reveal What do the 1916 to 1920 membership and branch figures show when read together? ||| Membership rose from 8,765 to 90,000 and branches from 70 to 395, so the count of branches grew roughly fivefold while membership grew roughly tenfold, meaning the average branch also became substantially larger.

## Vocabulary
- **Executive secretary**: the chief staff officer of the NAACP in this period, the organization's operational head.
- **Constituent pressure**: contact from voters a legislator represents, which is qualitatively different from national opinion.
- **Organizing**: the work of creating durable local structures, as distinct from recruiting individual supporters.
- **Leverage**: the capacity to impose a cost on a decision-maker, which membership only becomes once it is geographically organized.

## Sources
NAACP. (n.d.). *James Weldon Johnson*. https://naacp.org/find-resources/history-explained/civil-rights-leaders/james-weldon-johnson

Siracusa, A. (2020, November 24). A century ago, James Weldon Johnson became the first Black person to head the NAACP. *The Conversation*. https://theconversation.com/a-century-ago-james-weldon-johnson-became-the-first-black-person-to-head-the-naacp-149513`,
    },
    {
      slug: "hdw-dyer-bill",
      title: "6 · The Dyer bill, and the machine that stops bills",
      section: "Section 2 · Build the network, then aim it at the law",
      body: `With a branch network in place, the organization aimed at the thing it actually wanted: a federal law.

**What the bill did.** The Dyer Anti-Lynching Bill would have made lynching a federal offense, allowing federal prosecution of participants, penalties for officials who failed to protect a person in custody, and financial liability for the county where a lynching occurred (NAACP, n.d.).

**What the NAACP did about it.** Between 1919 and 1922 the association organized the witness list for the congressional hearings, prepared the constitutional argument for the bill, and had Johnson, by then executive secretary, run the vote-counting operation in the Capitol (NAACP, n.d.). This is what the branch network was for: the lobbying had a supply of constituents behind it.

**What happened.** The House of Representatives passed the bill on January 26, 1922. It then went to the Senate, where Southern Democrats filibustered it. It was defeated in December 1922, and twice more in later Congresses.

**A tally this course will not print.** Published accounts of the House vote give both 230 to 119 and 231 to 119. The difference is one vote and it does not change anything about the history, which is exactly why guessing is unnecessary: the course says the House passed it in January 1922 and leaves the tally to the Congressional Record.

**The mechanism worth learning.** A filibuster does not defeat a bill on the merits. It defeats it on time, by preventing the chamber from reaching a vote the bill would win. That distinction matters because it changes what a campaign has to do: the target stops being persuasion of a majority and becomes the procedural rule itself, or the small number of senators who control whether debate ends. Anti-lynching legislation was introduced repeatedly for decades and was stopped this same way each time.

:::reveal What did the Dyer bill actually propose to do? ||| Make lynching a federal offense, allowing federal prosecution of participants, penalties for officials who failed to protect a person in custody, and financial liability for the county where a lynching happened.

:::reveal Why does it matter that the bill died by filibuster rather than by losing a vote? ||| A filibuster defeats a bill on time rather than on the merits, by keeping the chamber from ever voting. That changes the target of a campaign from persuading a majority to the procedural rule or the senators who control ending debate.

## Vocabulary
- **Filibuster**: extended Senate debate used to prevent a measure from reaching a vote it might otherwise win.
- **Federal offense**: a crime prosecutable by the national government, which the Dyer bill would have made lynching.
- **Vote counting**: the lobbying discipline of establishing, member by member, where a bill actually stands.
- **Congressional Record**: the official published proceedings of Congress, and the authoritative source for any roll-call tally.

## Sources
NAACP. (n.d.). *Dyer Anti-Lynching Bill*. https://naacp.org/find-resources/history-explained/legislative-milestones/dyer-anti-lynching-bill

Library of Congress. (n.d.). *NAACP: A century in the fight for freedom*. https://www.loc.gov/exhibits/naacp/`,
    },
    {
      slug: "hdw-what-a-defeat-buys",
      title: "7 · What a losing campaign still buys",
      section: "Section 2 · Build the network, then aim it at the law",
      body: `The Dyer bill never became law. No federal anti-lynching statute was enacted in Johnson's lifetime, or White's, or Marshall's. So the honest question a strategy course has to answer is whether the campaign was worth running.

**Four things the campaign produced that the statute would not have.**

1. **A record of who blocked it.** A filibuster is conducted in public and is attributable. After 1922 the association could name, in print, the senators who prevented a vote, and did.
2. **A trained lobbying operation.** Witness lists, constitutional memoranda, hearing preparation, and vote counting are skills. Once an organization has them, they transfer to the next fight, which in section 3 is a Supreme Court nomination.
3. **A branch network with something to do.** Local chapters that are only asked for dues decay. Chapters asked to contact a named senator by a named date become durable. The campaign was an exercise that kept the map alive.
4. **A shifted default.** Repeated national argument over three decades moved lynching from a regional practice that the national press treated as local news into a subject Congress had to keep formally refusing to act on. Refusal on the record is a weaker position than silence.

**What it did not buy, said plainly.** It did not stop lynchings. Treating the four gains above as a substitute for the law would be exactly the flattery this catalog's content rules prohibit. The people the bill would have protected were not protected.

**Why the section ends here rather than on a victory.** The rest of this course is about what the organization did after concluding that Congress was closed. It did not stop working on legislation, but it stopped treating legislation as the only route, and it moved resources toward two instruments that do not require sixty senators: publicity that changes a specific decision, and litigation that changes a rule.

:::reveal Name three things the Dyer campaign bought that a successful statute alone would not have. ||| An attributable public record of who blocked it, a trained lobbying operation whose skills transferred to later fights, and an exercised branch network that stayed durable because it had specific tasks.

:::reveal What is the honest limit on calling the Dyer campaign a productive defeat? ||| It did not stop lynchings, and the people the bill would have protected were not protected. The organizational gains are real and they are not a substitute for the law.

## Vocabulary
- **Attributable defeat**: a loss whose cause can be assigned to named decision-makers, which makes it usable politically.
- **Organizational capability**: a skill an institution retains after a campaign ends, independent of that campaign's outcome.
- **Shifted default**: a change in what an institution has to do openly, such as refusing to act on the record rather than ignoring an issue.
- **Route diversification**: shifting effort across instruments after establishing that one of them is blocked.

## Sources
NAACP. (n.d.). *Dyer Anti-Lynching Bill*. https://naacp.org/find-resources/history-explained/legislative-milestones/dyer-anti-lynching-bill

Library of Congress. (n.d.). *NAACP: A century in the fight for freedom*. https://www.loc.gov/exhibits/naacp/`,
    },
    // ── Section 3 ──────────────────────────────────────────────────────────────────────────────
    {
      slug: "hdw-investigator",
      title: "9 · Go and get the evidence yourself",
      section: "Section 3 · Get the facts nobody will give you",
      body: `The tabulation in section 1 had a supply problem. Newspaper accounts of a lynching were often written by people sympathetic to the mob, and no agency was collecting anything. So the organization sent someone.

**Walter White.** He joined the NAACP in 1918 at James Weldon Johnson's invitation and served as Johnson's assistant secretary. For roughly the next decade his principal job was undercover investigation of lynchings and racial massacres. He investigated forty-one lynchings and eight race riots, among them Elaine, Arkansas, and Chicago in 1919 (New Georgia Encyclopedia, n.d.).

**How the method worked, and what it cost.** White was a Black man with fair skin, blond hair and blue eyes. He traveled into towns where a lynching had just happened, presented himself as a white salesman or a white reporter, and got members of mobs and their neighbors to describe what they had done, in their own words, to a man they believed was one of them. More than once he left in a hurry after his identity was suspected. If it had been established, he would very likely have been killed.

**Why this is an evidence strategy rather than a stunt.** The organization needed accounts that could not be dismissed as hearsay from the victim's side. First-person admissions by participants, gathered on the ground and published under the association's name, were a category of evidence nobody else was producing, and they fed directly into the tabulation, the magazine, and eventually the congressional hearings.

**He published the method too.** In 1929 White wrote an article called "I Investigate Lynchings" for *The American Mercury*, describing how the work was done. Publishing your method is a deliberate choice with a cost: it ends the technique. It also converts a personal skill into a documented practice other people can evaluate and reuse.

**Then he ran the organization.** White became executive secretary in 1931 and held the post until his death in 1955, which means he led the NAACP through the entire litigation campaign in section 4.

:::reveal Why were White's investigations a source of evidence that the association could not otherwise obtain? ||| They produced first-person admissions from participants, gathered on the ground, rather than accounts from the victim's side that opponents could dismiss as hearsay.

:::reveal What did White give up by publishing "I Investigate Lynchings" in 1929, and what did he gain? ||| He gave up the technique, since describing it publicly ends its usefulness. He gained a documented practice that others could evaluate and reuse, rather than a personal skill that would leave with him.

## Vocabulary
- **Undercover investigation**: gathering evidence while concealing your identity or purpose from the people supplying it.
- **Hearsay**: an account of what someone else said, which is weaker evidence than a participant's own admission.
- **Assistant secretary**: White's initial NAACP staff role, reporting to the executive secretary.
- **Documented practice**: a method written down so that others can assess it and repeat it, rather than held privately.

## Sources
New Georgia Encyclopedia. (n.d.). *Walter White (1893-1955)*. https://www.georgiaencyclopedia.org/articles/history-archaeology/walter-white-1893-1955/

White, W. F. (1929). I investigate lynchings. *The American Mercury*.

Library of Congress. (2003, April). *Walter White, Mr. NAACP*. Library of Congress Information Bulletin. https://www.loc.gov/loc/lcib/0304/white.html`,
    },
    {
      slug: "hdw-parker-nomination",
      title: "10 · Beating a Supreme Court nomination",
      section: "Section 3 · Get the facts nobody will give you",
      body: `In 1930 the organization did something it had never done and that nobody expected it could do. It defeated a president's Supreme Court nominee.

**The nomination.** President Herbert Hoover nominated John J. Parker, a judge of the United States Court of Appeals for the Fourth Circuit, to the Supreme Court. A decade earlier, as a candidate for governor of North Carolina, Parker had publicly advocated the exclusion of Black voters (Library of Congress, n.d.).

**Two campaigns, not one.** The NAACP opposed him on the disfranchisement record. Organized labor opposed him over a ruling that had barred unionization of coal miners in West Virginia. Neither group alone had the votes. The nomination failed because two constituencies with unrelated grievances were pressing the same senators at the same time, which is a coalition rather than an alliance: nobody had to agree with anybody about anything else.

**The tactic that made the branch network pay.** White testified against the nomination before the Senate Judiciary Committee. Then, instead of lobbying senators directly, which was the association's usual practice, he told the branches and the membership to telegraph their own senators and to say plainly that they would oppose them in the elections later that year (Library of Congress, n.d.). This is section 2's map being used: not national opinion, but identifiable constituents, in named states, with a dated electoral threat.

**The result.** On May 7, 1930, the Senate rejected the nomination by 41 votes to 39 (United States Senate, n.d.). It was the first successful campaign against a Supreme Court nominee that the association had ever run, and a two-vote margin is a direct answer to the question of whether constituent contact mattered.

**Why this belongs in a course about instruments.** The legislative instrument in section 2 needed a majority plus sixty senators to end debate, and could not get either. This instrument needed to move a handful of votes on a single confirmation, and could. Matching the instrument to the size of the decision is most of strategy.

:::reveal What made the Parker campaign a coalition rather than an alliance? ||| The NAACP opposed him over a disfranchisement record and organized labor opposed him over a coal-miner unionization ruling. Neither group had to agree with the other about anything; they were pressing the same senators at the same time.

:::reveal What did White do differently from the association's usual lobbying practice, and why did it work? ||| Instead of lobbying senators directly, he had branches and members telegraph their own senators with an explicit threat to oppose them in that year's elections, which converted a national membership into identifiable constituents in named states.

## Vocabulary
- **Confirmation**: the Senate's vote on whether to accept a presidential nomination, which requires only a simple majority.
- **Disfranchisement**: the removal or denial of the right to vote, which was the record the NAACP campaigned on.
- **Coalition**: cooperation between groups with different reasons for the same immediate goal.
- **Electoral threat**: a stated intention by constituents to oppose a legislator at the next election, which is the pressure a branch network can deliver.

## Sources
Library of Congress. (n.d.). *The Great Depression*. NAACP: A century in the fight for freedom. https://www.loc.gov/exhibits/naacp/the-great-depression.html

United States Senate. (n.d.). *Judge Parker nomination rejected*. https://www.senate.gov/about/powers-procedures/nominations/judge-parker-nomination-rejected.htm`,
    },
    {
      slug: "hdw-protest-to-policy",
      title: "11 · From protest to a document the government owns",
      section: "Section 3 · Get the facts nobody will give you",
      body: `The last instrument in this section is the one most people never think of as an instrument: getting a government to investigate itself and publish the result.

**The legislative route stayed blocked.** The Costigan-Wagner anti-lynching bill of the mid-1930s was filibustered in the Senate exactly as the Dyer bill had been. The organization now had two decades of evidence that this route did not close.

**A different target.** On December 5, 1946, President Harry Truman established the President's Committee on Civil Rights by Executive Order 9808. Six of the fifteen people appointed to it had appeared on a list of suggested members that Walter White had submitted to the president (Truman Library Institute, n.d.). The committee reported in December 1947, and its report was titled *To Secure These Rights*.

**Why an executive order beats a bill in this situation.** It needs one signature rather than a majority plus a supermajority to end debate. It cannot be filibustered. It produces a document the executive branch owns and therefore has to answer for, and the document itself becomes a citable fact of the kind section 1 was built to manufacture, except that this time the government produced it.

**The limits, stated honestly.** A committee report is not a statute. It does not bind a court, does not create a cause of action, and can be ignored by the next administration. What it does is convert an outside claim into an inside finding, and an inside finding is much harder for the institution that commissioned it to dismiss later.

**What section 3 adds up to.** White's whole career is one method applied at three scales: go and get the evidence yourself, then put it in front of the specific decision-maker who can act on it. A mob's own words to a magazine. A branch's telegram to its senator. A recommended name on a president's committee list. The instrument changes, the discipline does not.

:::reveal Why did the NAACP pursue a presidential committee rather than another anti-lynching bill in the 1940s? ||| An executive order needs one signature and cannot be filibustered, while the legislative route had been blocked by filibuster repeatedly since 1922. The committee also produced a document the executive branch itself owned.

:::reveal What is the honest limit of a presidential committee report as an instrument? ||| It is not a statute: it binds no court, creates no cause of action, and a later administration can ignore it. What it does is convert an outside claim into an inside finding.

## Vocabulary
- **Executive order**: a directive issued by the president under existing authority, which requires no legislative vote.
- **Cause of action**: a legal claim a person can actually bring in court, which a report does not create.
- **Inside finding**: a conclusion published by the institution being criticized, which is harder for it to dismiss than an outside claim.
- **Supermajority**: the larger-than-half threshold required to end Senate debate, which is why the legislative route stayed blocked.

## Sources
Truman Library Institute. (n.d.). *To Secure These Rights: The committee at work*. https://www.trumanlibraryinstitute.org/civil-rights-symposium-history-8/

Harry S. Truman Library and Museum. (n.d.). *Records of the President's Committee on Civil Rights, Record Group 220*. https://www.trumanlibrary.gov/library/federal-record/records-presidents-committee-civil-rights-record-group-220`,
    },
    // ── Section 4 ──────────────────────────────────────────────────────────────────────────────
    {
      slug: "hdw-social-engineer",
      title: "13 · The strategy, and the man who changed it",
      section: "Section 4 · Build the ladder of precedents",
      body: `The litigation campaign that produced *Brown v. Board of Education* did not start with Thurgood Marshall and it did not start with a plan to overturn segregation. It started with money and a memorandum.

**The money.** In 1922 Charles Garland endowed the American Fund for Public Service, usually called the Garland Fund. It granted the NAACP $100,000 to employ a special counsel to study the legal position of Black Americans and design a legal campaign.

**The memorandum.** The association hired Nathan Margold on the recommendation of Felix Frankfurter and Charles Hamilton Houston. Margold's report, issued in May 1931, argued that segregated public education as actually practiced did not even satisfy *Plessy v. Ferguson*'s own separate but equal standard, because the facilities provided to Black students were demonstrably unequal in spending per pupil and per teacher (Smithsonian National Museum of American History, n.d.).

**The man who changed it.** Charles Hamilton Houston succeeded Margold as the NAACP's chief attorney in 1933. He had taken an LL.B. at Harvard Law School in 1922, where he was the first Black editor of the *Harvard Law Review*, and an S.J.D. in 1923. In 1929 he became vice-dean of the Howard University School of Law and rebuilt it into a nationally accredited institution. He taught that Black lawyers should be trained as social engineers, meaning trained specifically to use law as a deliberate tool of structural change (NAACP, n.d.).

**What he changed and why.** Houston did not think the courts would strike down segregation outright in the 1930s, so he did not ask them to. He redirected the campaign to start with graduate and professional schools, where the inequality was starkest, the plaintiff pool was small and adult, and a state had almost no way to comply cheaply. Each win would be narrow, would be decided on the state's own separate but equal terms, and would become a precedent the next case could stand on.

**The cost of building a ladder.** It is slow. Houston died on April 22, 1950, four years before *Brown*.

:::reveal What did the Margold Report argue, and what did Houston change about it? ||| Margold argued in 1931 that segregated schooling as practiced failed even Plessy's own separate but equal standard because of unequal spending. Houston redirected the campaign to begin with graduate and professional schools, building narrow precedents rather than attacking segregation directly.

:::reveal Why start with graduate and professional schools rather than with elementary schools? ||| The inequality was starkest, the plaintiffs were few and adult, a state had no cheap way to comply, and each narrow win decided on the state's own terms became a precedent the next case could stand on.

## Vocabulary
- **Special counsel**: a lawyer engaged for a specific campaign rather than for general representation.
- **Precedent**: a decided case that later courts are expected to follow, which is why the order of cases matters.
- **Separate but equal**: the doctrine from *Plessy v. Ferguson* (1896) permitting segregation if facilities were equal, which the early campaign used rather than attacked.
- **Social engineer**: Houston's term for a lawyer trained to use law deliberately as an instrument of structural change.

## Sources
Smithsonian National Museum of American History. (n.d.). *The NAACP targets higher education*. Separate Is Not Equal. https://americanhistory.si.edu/brown/history/3-organized/higher-education.html

NAACP. (n.d.). *Charles Hamilton Houston*. https://naacp.org/find-resources/history-explained/civil-rights-leaders/charles-hamilton-houston`,
    },
    {
      slug: "hdw-graduate-school-cases",
      title: "14 · The first rungs: Murray and Gaines",
      section: "Section 4 · Build the ladder of precedents",
      body: `The strategy from the previous lesson produced two cases in three years, and they look small until you see what they were for.

**Murray, 1936.** Donald Gaines Murray, a graduate of Amherst College, was refused admission to the University of Maryland School of Law because he was Black. Houston and Thurgood Marshall, then early in his career, argued that Maryland provided no separate law school for Black students at all, so the state was not meeting the equality half of its own doctrine. Maryland's highest court ruled for Murray, and he was admitted (*Pearson v. Murray*, 169 Md. 478, 182 A. 590 (1936)).

**Why the argument is narrower than it sounds.** The court was not asked to hold that segregation was unconstitutional. It was asked to hold that Maryland had not complied with the rule Maryland claimed to be following. That is a much easier thing for a court to say, and it is still a loss for the state.

**Gaines, 1938.** Lloyd Gaines was refused admission to the University of Missouri School of Law and offered tuition to attend a law school in another state instead. In *Missouri ex rel. Gaines v. Canada*, 305 U.S. 337 (1938), the Supreme Court of the United States held that Missouri had to provide legal education within the state on a basis equal to what it offered white students. Sending a student elsewhere was not equality.

**Why Gaines is the important one.** Murray was a state decision binding only Maryland. Gaines was the Supreme Court, and it established the principle at the federal level: a state that operates a professional school for white students has an obligation it cannot discharge by exporting the problem. Every later case in the campaign builds from that holding.

**The personal cost, which the case reports do not carry.** Lloyd Gaines disappeared in 1939, after the decision and before he could enroll. He was never found. The precedent survives; the plaintiff did not get the education he sued for.

:::reveal What did the Murray and Gaines arguments have in common? ||| Neither attacked segregation directly. Both argued that the state had failed to meet the equality half of its own separate but equal doctrine, which is a far easier thing for a court to hold and is still a defeat for the state.

:::reveal Why does the campaign treat Gaines as the more important of the two decisions? ||| Murray was a state court decision binding only Maryland, while Gaines was decided by the Supreme Court of the United States and established at the federal level that a state cannot discharge its obligation by sending a student out of state.

## Vocabulary
- **Plaintiff**: the person bringing a lawsuit, whose individual situation is what a court actually decides.
- **State court decision**: a ruling binding only within that state's jurisdiction, unlike a Supreme Court holding.
- **Holding**: the legal rule a decision establishes, which is the part later cases build on.
- **Ex rel.**: short for "on the relation of," used when a case is brought in the state's name on behalf of an individual.

## Sources
*Missouri ex rel. Gaines v. Canada*, 305 U.S. 337 (1938).

*Pearson v. Murray*, 169 Md. 478, 182 A. 590 (1936).

Smithsonian National Museum of American History. (n.d.). *The NAACP targets higher education*. Separate Is Not Equal. https://americanhistory.si.edu/brown/history/3-organized/higher-education.html`,
    },
    {
      slug: "hdw-ladder-to-brown",
      title: "15 · Climbing to Brown",
      section: "Section 4 · Build the ladder of precedents",
      body: `Thurgood Marshall became the NAACP's top lawyer in 1938 and directed the NAACP Legal Defense and Educational Fund from its establishment in 1940. Over roughly two decades he argued 32 cases before the Supreme Court of the United States and won 29 (NAACP Legal Defense and Educational Fund, n.d.).

**The rungs, in order.**
- ***Smith v. Allwright***, 321 U.S. 649 (1944). Texas ran party primaries that excluded Black voters and defended them as private party affairs. The Court held that the primary was part of the state's electoral machinery, so excluding Black voters from it was state action. This is the voting rung, and it made every later political remedy more plausible.
- ***Shelley v. Kraemer***, 334 U.S. 1 (1948). Private racial covenants in property deeds were not themselves struck down, but the Court held that a court enforcing one is state action, and states may not do it. The covenant survives on paper and becomes unenforceable in practice.
- ***Sweatt v. Painter***, 339 U.S. 629 (1950). Texas built a separate law school rather than admit Sweatt to the University of Texas. The Court held it was not equal, and reasoned about things a state cannot duplicate: faculty reputation, the standing of the alumni, the experience of studying alongside the people you will practice against.
- ***McLaurin v. Oklahoma State Regents***, 339 U.S. 637 (1950), decided the same day. McLaurin was admitted and then segregated within the building, assigned particular seats in the classroom, library and cafeteria. The Court held that this too was unequal, because it impaired his ability to learn.

**Read Sweatt and McLaurin together and you can see Brown coming.** Once a court accepts that equality includes reputation, association and the effect on a student's ability to learn, separate facilities can almost never be equal, because those things cannot be built to order. The campaign had spent nineteen years getting courts to say so about adults in professional schools.

**Brown.** In *Brown v. Board of Education*, 347 U.S. 483 (1954), the Court held that separate educational facilities are inherently unequal and that segregation in public schooling violates the Fourteenth Amendment's equal protection guarantee. Marshall argued it. Houston, who designed the route, had been dead four years.

**Afterward.** Marshall became Solicitor General of the United States in 1965 and an Associate Justice of the Supreme Court in 1967, the first Black person to hold that office.

:::reveal What was the actual holding in Shelley v. Kraemer, and why is the distinction important? ||| The Court did not void private racial covenants themselves. It held that a court enforcing one is state action, which states may not take, so the covenant remains on paper and becomes unenforceable in practice.

:::reveal Why do Sweatt and McLaurin together make Brown's conclusion nearly unavoidable? ||| They establish that equality includes faculty reputation, alumni standing, association with fellow students and the effect on a student's ability to learn. Those cannot be duplicated on demand, so separate facilities can almost never be equal.

## Vocabulary
- **State action**: conduct attributable to a government, which is what the Fourteenth Amendment restricts, and the hinge of both *Smith* and *Shelley*.
- **Restrictive covenant**: a clause in a property deed limiting who may buy or occupy the property.
- **Equal protection**: the Fourteenth Amendment guarantee that a state will not deny any person equal protection of the laws.
- **Solicitor General**: the officer who represents the United States government before the Supreme Court.
- **Legal Defense Fund**: the NAACP's separately organized litigation arm, established in 1940 under Marshall.

## Sources
*Brown v. Board of Education*, 347 U.S. 483 (1954).

*Smith v. Allwright*, 321 U.S. 649 (1944).

*Sweatt v. Painter*, 339 U.S. 629 (1950).

NAACP Legal Defense and Educational Fund. (n.d.). *Who was Thurgood Marshall?* https://www.naacpldf.org/about-us/history/thurgood-marshall/`,
    },
    {
      slug: "hdw-four-instruments",
      title: "16 · What the four instruments add up to",
      section: "Section 4 · Build the ladder of precedents",
      body: `Put the whole campaign on one page and the argument is visible.

**Four instruments, each with a different reach.**
1. **Publication** (Du Bois, from 1910). Establishes that a fact exists and can be repeated. Reaches anyone who reads. Changes no rule by itself.
2. **Organization aimed at legislation** (Johnson, from 1916). Converts members into constituents in named districts. Can pass a bill in one chamber. Cannot beat a filibuster.
3. **Investigation and publicity** (White, from 1918). Produces evidence nobody else has and aims it at one decision. Beat a Supreme Court nomination by two votes in 1930. Does not create a durable rule.
4. **Litigation** (Houston and Marshall, from 1933). Creates rules that bind. Slow, expensive, needs the right plaintiff and the right order of cases, and takes about twenty years.

**The dependency nobody sees in the famous version.** *Brown* is usually told as a legal story. It was only available because the first three instruments had run for forty years: the facts were already public, the organization could find and support plaintiffs in specific states, and the association had already demonstrated it could impose a political cost. A litigation campaign with no press, no branches and no evidence operation is a law firm with a theory.

**The two honest limits.** First, the campaign took forty-five years from the founding of *The Crisis* to *Brown*, and the people harmed in the meantime were not helped by any of it. Second, *Brown* declared a rule; it did not desegregate schools, and the enforcement fight ran for decades afterward. A course that ends on the decision is telling you the campaign succeeded at the moment it actually changed target.

**The pairing.** This course's sibling, *She Took the Seat and Held the Door*, is the other answer to the same question: how a closed institution opens. There it happens one person at a time, through a trial contract, a credential stack, a pipeline. Here it happens through an organization that outlives its own staff. Neither is the whole answer, and the two work on different timescales. An individual cannot wait forty-five years, and an organization cannot get a specific person into a specific room next month.

**Your turn.** Take a change you want in an institution you deal with. Ask which of the four instruments actually reaches the decision-maker who can make it, and what the other three would have to do first for that instrument to work.

:::reveal What does each of the four instruments do that the others cannot? ||| Publication establishes a repeatable fact. Organization converts members into constituents in named districts. Investigation produces evidence nobody else has and aims it at one decision. Litigation creates a rule that binds.

:::reveal Why is Brown badly understood as a purely legal achievement? ||| The litigation was only possible because forty years of publication, organizing and investigation had already made the facts public, made plaintiffs findable and supportable, and proved the association could impose a political cost.

## Vocabulary
- **Instrument reach**: how far a given method can carry, and which kind of decision-maker it can actually move.
- **Dependency**: a prior capability an instrument silently requires, such as litigation requiring a public that accepts the facts.
- **Enforcement gap**: the distance between a declared rule and the change it is supposed to produce.
- **Timescale mismatch**: the reason individual and organizational routes cannot substitute for one another.

## Sources
*Brown v. Board of Education*, 347 U.S. 483 (1954).

Library of Congress. (n.d.). *NAACP: A century in the fight for freedom*. https://www.loc.gov/exhibits/naacp/`,
    },
  ],
};
