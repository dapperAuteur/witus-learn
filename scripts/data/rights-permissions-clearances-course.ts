import type { AuthoredCourse } from "./authored-course";

// RSRCH-05 of the Researcher track. Plan: plans/69-researcher-track.md §4.
//
// EVERY FAILURE MODE IN THIS COURSE IS ONE THIS CATALOG ACTUALLY HIT while sourcing its own images
// in August 2026. Nothing here is a constructed teaching example. The record is in
// plans/63-course-images-acquisition.md and in scripts/data/media-batches/*.mjs, and the tool that
// hit them is scripts/upload-course-media.mjs.
//
// That matters for a reason beyond convenience: a clearances course written from a textbook teaches
// the rules, and the rules are the easy part. What is hard is the specific shape of the mistakes,
// and those only show up when somebody is actually trying to publish forty images and keeps getting
// stopped by different things.
//
// ⚠️ THE LINE THIS COURSE MUST NOT CROSS. It teaches a research method, not law. Copyright is
// jurisdictional, fact-specific, and changes. Every lesson that touches a legal question ends by
// naming the point at which a professional stops researching and asks a lawyer. Say that plainly and
// often: a researcher who thinks they have cleared something is more dangerous than one who knows
// they have not.

export const RIGHTS_PERMISSIONS_CLEARANCES_COURSE: AuthoredCourse = {
  title: "Rights, Permissions and Clearances Research",
  description:
    "Who owns this image, is it really free to use, what does the licence oblige you to do, and who do you write to. The research method behind clearing archival material, taught from the real refusals a working image project ran into: the public-domain tag that was wrong, the iconic photograph nobody can publish, and the difference between having the right and having the file.",
  lessons: [
    {
      slug: "clr-what-clearing-means",
      title: "1 · What clearing something actually means",
      section: "Part 1 · The question",
      body: `A clearances researcher answers one question about a piece of material, and it is narrower than people think:

> **On the evidence I can gather, may this be published, in this context, and what does using it oblige us to do?**

Notice the four limits built into that sentence.

**On the evidence I can gather.** You are not certifying that the material is free. You are reporting what the record shows and how far it goes.

**Published.** Not "used". Rights depend on use. A photograph you may put in a classroom handout may be a different question in a film, on a book cover, or in an advertisement.

**In this context.** Commercially or not, edited or whole, in one country or worldwide, once or forever.

**Obliges us to do.** Most free material is not obligation-free. Attribution, a licence link, sometimes a share-alike term. Clearing something is not only permission, it is a list of duties you now carry.

## The three questions, in order

1. **Who holds the rights?** Frequently not the institution that has the object.
2. **What is the status?** In copyright, out of copyright, licensed, or genuinely unknown, which is its own answer.
3. **What does using it require of us?** Credit, a link, a fee, a signed licence, a restriction on editing.

## The distinction that saves you

**Holding an object is not holding its rights.** A museum owns a painting; the artist's estate may own the copyright. An archive holds a photograph; the photographer's heirs may hold the rights. A government agency holds a print of an artwork, and the artwork is still the artist's.

That last one is not hypothetical. It is lesson 4, and it is the trap that catches careful people.

⚠️ **This course teaches research, not law.** Copyright is jurisdictional, fact-specific and changes. Your job is to assemble the evidence and to know when the answer is above your pay grade. **A researcher who believes they have cleared something is more dangerous than one who knows they have not.**

:::reveal A national archive holds a photograph and its catalogue offers you a high-resolution download. What have you established about your right to publish it? ||| Almost nothing. You have established that the archive holds a copy and will give you a file. Custody is not copyright, and many archives say plainly that they do not own rights to most of what they hold and cannot grant permission.

## Sources

U.S. Copyright Office. (n.d.). *Copyright basics* (Circular 1). https://www.copyright.gov/circs/circ01.pdf

Library of Congress. (n.d.). *Rights and restrictions information*. https://www.loc.gov/rr/print/195_copr.html`,
    },
    {
      slug: "clr-reading-a-rights-statement",
      title: "2 · Reading a rights statement literally",
      section: "Part 1 · The question",
      recallContent: [
        {
          prompt: "An archive holds a photograph and will give you a high-resolution file. What has that established about publishing it?",
          answer: "Almost nothing. Custody is not copyright, and many archives state that they do not own rights to most of their holdings and cannot grant permission.",
        },
      ],
      body: `Institutions publish short rights statements. They are written carefully, they mean exactly what they say, and the whole skill of this lesson is refusing to round them up.

## Four statements that are not the same

**"Public domain."** The term has expired or never applied. No permission needed. Credit is courtesy rather than obligation, and this catalog gives it anyway.

**"No known restrictions on publication."** The institution looked and did not find a rights holder. **That is a report on what they know, not a grant.** It can be wrong, and a rights holder can surface later.

**"No copyright renewal."** Someone checked the renewal records for a work of the era when renewal was required, and found none. That is a positive finding about a specific register, and it is stronger than silence.

**Nothing at all.** The commonest case, and the one people misread most. An empty rights field means nobody has established anything. It is not permission and it is not a hint of permission.

## The rule that falls out of this

**Treat silence as unresolved, never as free.** The Library of Congress says plainly that it does not own rights to most of its collections and cannot grant or deny permission. Read literally, that sentence tells you the institution is not the place your question ends.

This is also why an automated pipeline can be trusted with the easy half and not the hard half. A tool can match "no known restrictions" and refuse an empty field, which is genuinely useful at scale. What it cannot do is notice that the statement is about the wrong object, and that is lesson 4.

:::reveal Rank these three from strongest to weakest as a basis for publishing: an empty rights field, "no known restrictions on publication", and "public domain". ||| Public domain is strongest, because the term has expired or never applied. "No known restrictions" is next: a real institutional finding, but a report on what they know rather than a grant. An empty field is weakest and is not a basis at all, because nobody has established anything.

## Sources

Library of Congress. (n.d.). *Understanding rights advisories*. https://www.loc.gov/rr/print/195_copr.html

Rightsstatements.org. (n.d.). *Rights statements for cultural heritage*. https://rightsstatements.org/`,
    },
    {
      slug: "clr-licences-and-obligations",
      title: "3 · Licences, and the duties that come with free",
      section: "Part 1 · The question",
      recallContent: [
        {
          prompt: "What does an empty rights field on an archive record actually tell you?",
          answer: "That nobody has established anything. It is not permission and not a hint of it, and should be treated as unresolved rather than free.",
        },
      ],
      body: `Most reusable material is licensed rather than public domain, and a licence is a contract of a kind: it grants permission **in exchange for conditions**. Clearing licensed material means recording the conditions, because they travel with the file.

## The families you will meet

**Public domain and CC0.** No conditions. Credit is good practice and this catalog gives it anyway, because a reader should be able to trace anything.

**Attribution (CC BY).** You must credit the creator and link the licence. Not optional, and not satisfied by a vague thank-you: the credit has to identify the work and the licence.

**Attribution plus share-alike (CC BY-SA).** The above, plus: adaptations must carry the same licence. The word doing the work is **adaptation**. Placing an image beside your text is normally a collection, not an adaptation, so it does not license your text. Cropping and editing is where the question gets real.

**Non-commercial (NC) and no-derivatives (ND).** Frequently unusable for anything sold, and "we are a non-profit" does not automatically make a use non-commercial. Treat these as refusals unless someone with authority says otherwise.

## The misconception worth killing now

**Making your work free does not discharge a share-alike obligation.** Share-alike is not about price. CC BY-SA expressly permits commercial use; the condition attaches to adaptations, not to whether money changed hands. A team that decides to give a course away and believes it has solved a share-alike question has solved nothing, because it was never a money question.

## What this means for your file

For every licensed asset, record the licence name and version, the exact credit line required, the licence URL, and any obligation in plain words. Not because it is tidy, but because the person who edits that image in eighteen months will not know it is share-alike unless your file says so.

:::reveal A team is using a CC BY-SA photograph and decides to publish the finished work for free, believing that settles the licence. What have they misunderstood? ||| That share-alike is about money. It is not: CC BY-SA permits commercial use, and the condition attaches to ADAPTATIONS of the image. Making the work free changes nothing. What matters is whether the image is adapted, and whether the attribution and licence link are present.

## Sources

Creative Commons. (n.d.). *About CC licenses*. https://creativecommons.org/share-your-work/cclicenses/

Creative Commons. (n.d.). *Frequently asked questions: Adaptations and ShareAlike*. https://creativecommons.org/faq/`,
    },
    {
      slug: "clr-check-the-question",
      title: "4 · Knowledge check: the question and the licence",
      section: "Part 1 · The question",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "Which of these is the weakest basis for publishing an archival image?",
            options: [
              "An empty rights field on the catalogue record",
              "A statement reading no known restrictions on publication",
              "A note that the copyright renewal records were checked and no renewal found",
              "A rights statement identifying the work as being in the public domain",
            ],
            correctIndex: 0,
            explanation:
              "Silence means nobody has established anything, so it is not a basis at all. The other three are positive findings of differing strength, and even the weakest of them is a statement somebody stands behind.",
            sourceLessonSlug: "clr-reading-a-rights-statement",
          },
          {
            prompt: "A team using a CC BY-SA image decides to give the finished work away free, believing this resolves the licence. What have they misunderstood?",
            options: [
              "Share-alike attaches to adaptations of the image, not to whether the work is sold",
              "Share-alike prohibits commercial use, so giving the work away was in fact required",
              "Share-alike expires after a fixed term, so the age of the image is what matters",
              "Share-alike applies only when an image is the main subject rather than an illustration",
            ],
            correctIndex: 0,
            explanation:
              "CC BY-SA expressly permits commercial use, so price was never the question. The condition attaches to adaptations, which is why cropping and editing is where the issue becomes real.",
            sourceLessonSlug: "clr-licences-and-obligations",
          },
          {
            prompt: "What does a museum's ownership of a painting establish about the copyright in that painting?",
            options: [
              "Nothing on its own, because holding an object and holding its rights are separate",
              "That the museum may license reproductions, since possession carries reproduction rights",
              "That the work is in the public domain, since museums acquire only unrestricted works",
              "That permission must be sought from the museum rather than from any other party",
            ],
            correctIndex: 0,
            explanation:
              "Custody and copyright are different. A museum may hold the object while an artist's estate holds the copyright, which is exactly the trap the next lesson examines.",
            sourceLessonSlug: "clr-what-clearing-means",
          },
        ],
      },
    },
    {
      slug: "clr-the-lawrence-trap",
      title: "5 · The trap: when the rights field is about the wrong object",
      section: "Part 2 · How it actually goes wrong",
      body: `This is the most important lesson in the course, and it comes from a real refusal.

In August 2026 this catalog was sourcing images for a course on the Great Migration. The obvious images are the panels of Jacob Lawrence's *Migration Series*. Photographs of several panels sit in a US federal archive's holdings, and on a major media repository those files carry the tag **"Public domain."**

An automated rights check reads that tag and allows them. It is a correct reading of the field. **It is the wrong answer**, and here is why.

## Two objects, one file

There are two copyrightable things in play:

1. **The photograph** of the panel. A US government work, plausibly free.
2. **The painting** in the photograph. Jacob Lawrence, who died in 2000.

A federal agency holding a photograph of a painting does not put the painting into the public domain. The rights tag on the file is answering a question about the photograph. **Nobody asked it about the painting.**

## Why this class of error is dangerous

Because everything looks right. The institution is reputable, the tag is machine-readable, the tool approves, and the image is perfect for the lesson. There is no friction anywhere in the process to tell you to stop.

**The general rule, and it is worth memorising:**

> A green light from a rights field is not a right to publish. Ask which object the field is describing.

## Where else this exact shape appears

- **Museum-object photography.** The artefact is three thousand years old and unquestionably free. The 2019 photograph of it has an author and a licence of its own.
- **Digitised books.** The text is out of copyright; the scan, the OCR and the introduction may not be.
- **Sheet music and recordings.** The composition and the recording are separate rights, with different terms.
- **Film stills.** The still and the film are not the same object.

## What to do

When a rights statement seems to clear something surprisingly valuable, ask what the statement is describing. If the file contains a reproduction of somebody else's creative work, you have two questions, not one, and the second one is usually the hard one.

:::reveal An automated tool reads "public domain" from a repository and approves a photograph of a mid-century painting held by a government archive. Why is the tool's reading correct and its conclusion wrong? ||| The tag describes the photograph, which may well be free as a government work. The painting inside it is a separate copyrightable work whose term has not expired, and no field was ever asked about it. The tool answered the question it was given; nobody gave it the right question.

## Sources

U.S. Copyright Office. (n.d.). *Duration of copyright* (Circular 15a). https://www.copyright.gov/circs/circ15a.pdf

Library of Congress. (n.d.). *Rights and restrictions: Obtaining permissions*. https://www.loc.gov/rr/print/195_copr.html`,
    },
    {
      slug: "clr-the-iconic-image-problem",
      title: "6 · The iconic image is the one you cannot have",
      section: "Part 2 · How it actually goes wrong",
      recallContent: [
        {
          prompt: "State the general rule that comes out of the painting-in-a-photograph trap.",
          answer: "A green light from a rights field is not a right to publish. Ask which object the field is describing, because a reproduction contains two works.",
        },
      ],
      body: `The same image project ran into this twice in one week, on two different subjects, and it is a pattern rather than bad luck.

Looking for a photograph of Marcus Garvey, the strongest candidate was a James Van DerZee portrait held by a national library. Its rights advisory reads: **"Publication is restricted."**

Looking for an image of the Triangle Shirtwaist fire, the best-known photograph of the damaged fire escape carries: **"Publication may be restricted."**

Both refused. Both correctly.

## Why this keeps happening

An image becomes iconic because it is good, and a good photograph was usually taken by a professional who registered and renewed the rights, or whose estate has maintained them. The photographs nobody has cleared are the ones nobody cared enough about to protect.

**So expect an inverse relationship between how much you want an image and how likely you are to get it.** That is not cynicism, it is a structural feature of how archives and estates work, and planning around it is a professional skill.

## What to do instead of being disappointed

**Budget for it.** When a project depends on a specific famous image, that is a risk to raise at the start, not a discovery to make at the end.

**Have the second choice ready.** In the Garvey case the project used a 1920 portrait whose advisory recorded that the renewal records had been checked and no renewal found. Less famous, entirely usable, and it did the same job in the lesson.

**Ask anyway, but ask early.** "Restricted" means somebody holds rights, and rights can often be licensed. That is a negotiation with a lead time of weeks, which is why it belongs on day one.

**Reconsider whether you need that image.** Frequently the reason you want the famous one is familiarity rather than fit, and the less-known image is more interesting to a reader who has not seen it a hundred times.

:::reveal Why should a researcher expect the best-known image of an event to be the hardest to clear? ||| Because an image becomes iconic by being good, and a good photograph was usually made by a professional whose rights were registered, renewed and maintained by an estate. The images that are freely available tend to be the ones nobody had a commercial reason to protect.

## Sources

Library of Congress. (n.d.). *Prints and Photographs Division: Rights and restrictions*. https://www.loc.gov/rr/print/195_copr.html

U.S. Copyright Office. (n.d.). *How to investigate the copyright status of a work* (Circular 22). https://www.copyright.gov/circs/circ22.pdf`,
    },
    {
      slug: "clr-rights-vs-availability",
      title: "7 · Having the right is not having the file",
      section: "Part 2 · How it actually goes wrong",
      recallContent: [
        {
          prompt: "Why is the most famous image of an event usually the hardest to clear?",
          answer: "It became famous by being good, and good photographs were usually made by professionals whose rights were registered, renewed and maintained.",
        },
      ],
      body: `A clearance can succeed and the material can still be unusable, and a researcher who reports only on rights will get caught out by this.

The same project found a national library item covering a well-known 1937 strike. The rights advisory: **"No known restrictions on publication."** Cleared.

It could not be used. The item is a **group of images** with no single downloadable rendition: a catalogue entry describing a set, not a file you can place in a page.

## The four questions that are not the rights question

**Does a usable copy exist?** Some records are described but not digitised.

**At what quality?** A thumbnail clears exactly as well as a print resolution file and is worth nothing on a screen, let alone in a film.

**In what form?** A group record, a contact sheet, a bound volume that has not been photographed page by page.

**What will it cost and how long will it take?** Many archives supply reproductions for a fee, on a schedule measured in weeks.

## Report them separately

In your file, rights status and availability are two fields, not one. "Cleared" tells a producer they may use it. It does not tell them they can get it in time or at a quality that will survive projection.

This is also the second half of the day-one rule from earlier in the track: reproduction orders have lead times you do not control, so identify what you will need physically before you finish researching whether you may use it.

:::reveal A researcher reports an archival photograph as cleared, and the production discovers two weeks later that it cannot be used. Give two reasons that are nothing to do with rights. ||| Any two of: no digitised copy exists, only a low-resolution version is available, the record covers a group rather than a single retrievable image, or the archive supplies reproductions on a fee-and-schedule basis that misses the deadline.

## Sources

National Archives. (n.d.). *Ordering reproductions*. https://www.archives.gov/research/order

Library of Congress. (n.d.). *Duplication services*. https://www.loc.gov/duplicationservices/`,
    },
    {
      slug: "clr-check-failures",
      title: "8 · Knowledge check: how it goes wrong",
      section: "Part 2 · How it actually goes wrong",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "A repository tags a government-held photograph of a mid-century painting as public domain, and an automated check approves it. What is wrong?",
            options: [
              "The tag describes the photograph; the painting inside it is a separate work still in term",
              "The tag is simply incorrect, and the repository should be notified of the error",
              "Government works are never in the public domain when they depict private property",
              "Automated checks cannot read rights fields reliably and should not be used at all",
            ],
            correctIndex: 0,
            explanation:
              "The reading of the field is correct. The conclusion is wrong because a reproduction contains two copyrightable objects and nobody asked the field about the second one. Custody of a photograph does not free the artwork inside it.",
            sourceLessonSlug: "clr-the-lawrence-trap",
          },
          {
            prompt: "A researcher clears an archival item and the production still cannot use it. Which explanation is consistent with the item being genuinely cleared?",
            options: [
              "The record covers a group of images with no single retrievable file",
              "The rights holder withdrew permission after the clearance was recorded",
              "The archive discovered the advisory had been applied to the wrong record",
              "The item was cleared for non-commercial use and the project is commercial",
            ],
            correctIndex: 0,
            explanation:
              "Rights and availability are separate questions and both can stop you. The other three describe the clearance itself being wrong or narrower than reported, which is a different failure.",
            sourceLessonSlug: "clr-rights-vs-availability",
          },
          {
            prompt: "Which is the most useful planning assumption when a project depends on a famous photograph?",
            options: [
              "That it is likely to be restricted, so raise it as a risk at the start and prepare an alternative",
              "That a national institution will hold a free copy, since famous images are widely reproduced",
              "That the age of the image is the main determinant of whether it can be used",
              "That permission will be granted if the project is educational rather than commercial",
            ],
            correctIndex: 0,
            explanation:
              "Images become iconic by being good, and good photographs tend to have maintained rights. Treating the famous image as a risk rather than a given is what keeps it from becoming a late discovery.",
            sourceLessonSlug: "clr-the-iconic-image-problem",
          },
          {
            prompt: "In a research file, how should rights status and availability be recorded?",
            options: [
              "As two separate fields, because a cleared item may still be unobtainable in time or at quality",
              "As a single status, since an item that cannot be obtained is not usefully described as cleared",
              "As one field with availability noted only when the item is held outside the country",
              "As a single status, with availability raised verbally if it becomes a problem later",
            ],
            correctIndex: 0,
            explanation:
              "Cleared tells a producer they may use it. It says nothing about whether a usable copy exists, at what resolution, or on what schedule, and collapsing the two hides a risk the producer needs to see.",
            sourceLessonSlug: "clr-rights-vs-availability",
          },
        ],
      },
    },
    {
      slug: "clr-the-clearance-record",
      title: "9 · The clearance record, and what to write down",
      section: "Part 3 · The deliverable",
      body: `A clearance that lives in your memory is not a clearance. The record is the deliverable, and it has to survive both a production and a challenge years later.

## What every asset needs

- **What it is**, precisely enough to identify: title as given, creator, date, and the holding institution's own identifier.
- **Where it came from**, as a resolvable reference: the item URL and the date you retrieved it.
- **The rights statement, quoted verbatim.** Not summarised. "No known restrictions on publication" and "public domain" are different sentences and your record should preserve which one you were relying on.
- **Your reading of it**, in plain words, and the date you made it.
- **The obligation**, if any: the exact credit line, the licence link, restrictions on editing.
- **Availability**, separately: what resolution exists, what it costs, how long it takes.
- **The uncertainty**, if any, and what would resolve it.

## Quote, do not paraphrase

The habit of quoting the statement verbatim looks pedantic and is the single most useful thing in the record.

A summary loses the distinction that matters. If you write "cleared," a reader cannot tell whether an institution asserted the public domain or merely reported that it had not found a rights holder. Those carry different risk, and the person deciding whether to put it on screen deserves the actual sentence.

This has a practical consequence worth knowing: a real credit line may contain the source's own oddities, including a filename with a strange character in it. **Preserve them.** A credit exists to connect a published image to the thing it credits, and correcting a source's own title breaks that link.

## Writing the credit

A credit that discharges an attribution obligation names the creator, identifies the work, states the licence, and links the source. A credit reading "via Wikimedia Commons" alone does none of those things.

:::reveal Why should a clearance record quote the institution's rights statement verbatim rather than summarising it as "cleared"? ||| Because the exact wording carries the risk. An assertion that a work is in the public domain and a report that no rights holder is known are different claims with different strength, and a summary hides which one the decision rested on. The person putting it on screen needs the actual sentence.

## Sources

Association of Moving Image Archivists. (n.d.). *Cataloging and documentation*. https://amianet.org/

Society of American Archivists. (n.d.). *Describing archives: A content standard*. https://www2.archivists.org/standards`,
    },
    {
      slug: "clr-when-to-ask-a-lawyer",
      title: "10 · When to stop researching and ask a lawyer",
      section: "Part 3 · The deliverable",
      recallContent: [
        {
          prompt: "Why quote a rights statement verbatim in a clearance record instead of writing cleared?",
          answer: "The exact wording carries the risk. An assertion of public domain and a report that no rights holder is known are different claims, and a summary hides which one the decision rested on.",
        },
      ],
      body: `The most valuable thing a clearances researcher can say is "this one is above my level."

Knowing where that line sits is professional judgment, not a gap in your skills. Here are the signals.

## Escalate when

**The rights holder is unidentifiable and the use is significant.** An orphan work in a caption is one kind of risk. The same work as the poster image is another. The decision is a risk decision, and risk decisions belong with whoever carries the risk.

**The status turns on a fact you cannot establish.** Whether something was published, when, in which country, with what notice. These change the term and they are genuinely hard.

**The use might be transformative, or might not.** Fair use and fair dealing are fact-specific doctrines, decided case by case, and researchers should not be the ones deciding them.

**Anything involving an identifiable living person beyond the copyright question.** Publicity and privacy rights are a separate body of law, and a photograph you have fully cleared for copyright can still be a problem.

**Anything where an institution's terms of supply conflict with the copyright position.** A contract can bind you where copyright would not.

## How to escalate well

Do not arrive with a question. Arrive with a file: what the material is, what the record shows, what you have quoted verbatim, what you could not establish, and what use is proposed. A lawyer asked "can we use this?" bills for the research you already did. A lawyer handed a complete file answers the actual question.

## The posture to keep

You are assembling evidence and reporting its limits. **You are not certifying that something is safe**, and any pressure to say the word "cleared" about something you have not cleared should be resisted in writing.

That is not defensiveness. A researcher whose "cleared" means something is worth far more than one whose "cleared" means "I did not find a problem in the twenty minutes I had."

:::reveal You have fully established that a photograph is out of copyright, and it shows an identifiable living person. Is the clearance complete? ||| No. Copyright is one question. Publicity and privacy rights are a separate body of law, and depending on the use and the jurisdiction they can prevent publication of an image whose copyright position is perfectly clear. That is an escalation, not a research problem.

## Sources

U.S. Copyright Office. (n.d.). *Fair use index*. https://www.copyright.gov/fair-use/

U.S. Copyright Office. (n.d.). *Orphan works and mass digitization*. https://www.copyright.gov/orphan/`,
    },
    {
      slug: "clr-capstone-clear-five",
      title: "11 · Capstone: clear five images and report honestly",
      section: "Part 3 · The deliverable",
      lessonType: "assignment",
      body: `Pick a subject you could imagine illustrating: a place, an event, a person, a trade. Find **five** candidate images for it and produce a clearance record for each.

**At least two must be ones you would refuse.** If all five clear, you have chosen too carefully, and choosing carefully is not the skill being assessed.

## For each image, record

1. **What it is:** title as given, creator, date, holding institution, and its identifier.
2. **Where it came from:** a resolvable link, and the date you looked.
3. **The rights statement, quoted verbatim.** Copy the sentence.
4. **Your reading**, in plain words, and the date.
5. **The obligation:** the exact credit line you would publish, or none.
6. **Availability, separately:** what resolution exists, cost, lead time.
7. **Your recommendation:** use, refuse, or escalate, and why in one sentence.

## Then, a short note

**What you refused and why.** Name the failure mode: the field described the wrong object, the statement said restricted, the licence carried an obligation the project could not meet, or nothing was established at all.

**One thing you could not settle**, and who you would ask.

## How this is assessed

Not on how many you cleared. **A researcher who returns five approvals and no reasoning is less useful than one who returns two approvals, two refusals and a clear escalation.**

You are assessed on whether the statements are quoted rather than summarised, whether rights and availability are reported separately, whether the credit lines would actually discharge their obligations, and whether the refusals name a specific failure mode rather than a vague doubt.

One rule, and it is the course's whole posture: **do not write "cleared" about anything you have not cleared.** "Probably free, could not confirm the photographer" is a useful sentence. "Cleared" about the same image is not.

## Sources

U.S. Copyright Office. (n.d.). *How to investigate the copyright status of a work* (Circular 22). https://www.copyright.gov/circs/circ22.pdf

Creative Commons. (n.d.). *Best practices for attribution*. https://wiki.creativecommons.org/wiki/best_practices_for_attribution`,
    },
  ],
};
