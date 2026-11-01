import type { AuthoredCourse } from "./authored-course";

// "CrewOps on Work.WitUS: The Lister and Crew Coordinator Guide" (WORK-02, the "Work.WitUS guides" series, `work-witus-guides`). Slug `work-witus-crewops-guide`.
//
// SOURCE. Converted from the Work.WitUS tutorial markdown in contractor-os `content/tutorials/lister/`
// (gitignored there; backup ~/Downloads/workwitus-tutorials-2026-10-31.tar.gz), read 2026-11-01. Each
// lesson keeps its narrator script and key takeaways. The screen-recording notes, audio-chapter JSON and
// teacher setup checklist were production notes, not learner text, and were left out. Edits to the text:
// em dashes replaced; routes checked against contractor-os main (f8a2bfa8, 2026-11-01) and kept only
// where the route exists; references to screens Work.WitUS no longer has removed (Travel moved to
// RideWitUS, the Academy moved to Learn.WitUS, and the CentenarianOS modules this text was first written
// for were never part of Work.WitUS). The source names no screenshots that exist, so no lesson shows one.
//
// BRIEF. None was written: BAM's decisions in contractor-os plans/user-tasks/25 (2026-11-01) stand in for
// it. Every guide, one course per guide, published as one series, public, BAM as instructor, and the
// travel guide left out (it goes to RideWitUS's curriculum). RESEARCH TIER 1: product documentation,
// ours. Nothing outside Work.WitUS is cited, so there is no ## Sources list and no citation staging.
//
// NO QUIZZES YET. The source had none, and BAM asked for the guides as written. A quiz pass, sized like
// the Using Learn.WitUS exception in scripts/audit-course.ts, is a follow-up, not part of the move.
//
// COURSE-SPECIFIC EDITS. CrewOps is still the lister product's name in Work.WitUS (app/lister-pricing,
// app/features/lister), so it stays. Database column names the source quoted (is_lister_job, lister_id,
// union_leader, contractor_role) became the role and screen names a lister sees.
export const WORK_WITUS_CREWOPS_GUIDE_COURSE: AuthoredCourse = {
  title: "CrewOps on Work.WitUS: The Lister and Crew Coordinator Guide",
  description:
    "Learn how to use CrewOps, the lister side of Work.WitUS, to create jobs for your crew, build a contractor roster, assign and track positions, message contractors one at a time or in groups, read fill rates, and use the union leader tools.",
  lessons: [
    {
      slug: "welcome-to-crewops",
      title: "Welcome to CrewOps",
      section: "Section 1 · Getting Started",
      body: `Welcome to the Lister and Crew Coordinator Guide, a free course about CrewOps, the lister side of Work.WitUS (work.witus.online).

If you're a crew coordinator, staffing agency, or union leader who assigns contractors to jobs, this module was built for you. By the end of this course, you'll know how to create jobs, build a roster, dispatch assignments, send messages, manage groups, and track fill rates.

## What is CrewOps?

CrewOps is the crew management platform for people who list and staff jobs. It lives at /dashboard/contractor/lister on work.witus.online.

The key areas:

**Jobs**: Create jobs with client, event, venue, dates, and rates. Mark them as lister jobs that you're staffing for others.

**Roster**: Your curated list of contractors with skills, availability, and contact info.

**Assignments**: Assign specific contractors to specific jobs. Track who's been offered, accepted, declined, or removed.

**Messages**: Send individual messages to contractors or broadcast to groups.

**Groups**: Organize your roster into messaging groups (e.g., "Camera Department", "Audio Team").

**Reports**: Fill rates, response times, and contractor performance.

## Lister vs. Union Leader

There are two lister roles:

**Lister**: Can create jobs, manage roster, assign contractors, and send messages.

**Union Leader**: Everything a lister can do, plus: union member directory, seniority tracking, job priority flags, minimum rate enforcement, and dispatch queue.

Your role is set by the platform admin.

## Interactive Feature Walkthroughs

Every CrewOps feature has an interactive walkthrough you can take inside the app. When you first log in, you'll be offered a guided tour of whatever module you choose. You can also re-take tours anytime from **Settings > Module Tours** or the "Re-take Tours" option in your user menu.

If you'd rather read first, the public feature pages at /features/lister explain each module in detail and let you try a demo login with one click.

## What's Next

In the next lesson, we'll set up your lister profile and create your first job. After that, you'll explore roster management, assignments, messaging, and reporting.`,
    },
    {
      slug: "setting-up-your-profile",
      title: "Setting Up Your Lister Profile",
      section: "Section 1 · Getting Started",
      body: `Before you start creating jobs, let's set up your lister profile. This tells contractors who you are and which organization you represent.

## Profile Fields

Your lister profile extends your standard Work.WitUS profile with:

- **Company Name**: Your staffing agency or crew service name (e.g., "Midwest Crew Services")
- **Union Local**: If you're affiliated with a union (e.g., "IATSE 317")
- **Contractor Role**: Lister or Union Leader, set by the admin

These fields appear on assignment offers and messages, so contractors know who's reaching out.

## Your Dashboard

The Lister Dashboard at /dashboard/contractor/lister shows:

- **Job fill status**: How many positions are filled vs. open across your active jobs
- **Pending responses**: Assignments waiting for contractor acceptance
- **Recent activity**: Latest assignment changes and messages
- **Quick actions**: Create job, send message, view roster

## What's Next

Now that your profile is set, you have four areas to explore: Jobs & Assignments, Roster & Availability, Messaging, and Reports. Pick whichever is most relevant to you.`,
    },
    {
      slug: "creating-jobs",
      title: "Creating Jobs for Your Crew",
      section: "Section 2 · Jobs & Assignments",
      body: `As a lister, you create jobs that other contractors will work. The process is similar to contractor job creation but with a few key differences.

## Creating a Lister Job

Navigate to your Lister Dashboard → Create Job. Fill in:

- **Client**: The network or production company booking the event
- **Event Name**: What's being produced
- **Venue**: Where the work happens
- **Dates**: Start and end dates
- **Pay Rates**: ST, OT, DT rates that will apply to assigned contractors
- **Department**: Camera, Audio, Utility, etc.
- **Positions Needed**: How many contractors you need to fill

Jobs you create as a lister are automatically marked as lister jobs, with you as the lister. This distinguishes them from jobs contractors create for themselves.

## Job Notes

Use the notes field to communicate important details: positions needed, special requirements, equipment expectations, call time, and any other info that helps contractors decide whether to accept.

## Key Takeaways

- Lister jobs are flagged differently from self-created contractor jobs
- Include position count and requirements in notes
- Jobs are the foundation: assignments link contractors to them`,
    },
    {
      slug: "assigning-contractors",
      title: "Assigning Contractors to Jobs",
      section: "Section 2 · Jobs & Assignments",
      body: `Once a job is created, you need to fill the positions. Assignments are how you connect contractors to jobs.

## Creating an Assignment

From a job detail page, click Assign Contractor. Search your roster by name, skills, or availability. Select a contractor and add an optional message (e.g., "Camera 3 position, call time 8 AM, park in Lot 1").

The assignment is created with status "offered". The contractor sees it in their Offers list (\`/dashboard/contractor/assignments\`).

## Assignment Statuses

- **Offered**: You've sent the assignment, waiting for response
- **Accepted**: Contractor confirmed they'll work it
- **Declined**: Contractor can't make it (they can include a reason)
- **Removed**: You've pulled the assignment (reassigning to someone else)

## Reassignment

If a contractor declines or you need to make a change, remove the current assignment and create a new one for a different contractor. The original contractor is notified.

## Bulk Assignment

For multi-day events with multiple positions, you can assign different contractors to different dates. Each assignment tracks who's covering which day.

## Contractor Experience

When a contractor accepts an assignment, the job appears in their Work.WitUS as a regular job. They can log time entries, upload documents, and generate invoices against it. They see your company name and contact info on the job.

## Key Takeaways

- Assign contractors from your roster to specific jobs
- Track offered/accepted/declined/removed statuses
- Reassign easily when plans change
- Accepted assignments appear in the contractor's own Work.WitUS`,
    },
    {
      slug: "tracking-assignments",
      title: "Tracking Assignments and Responses",
      section: "Section 2 · Jobs & Assignments",
      body: `You've sent out assignments; now you need to track who's responded and who hasn't. The Lister Dashboard gives you that visibility.

## Assignment Overview

Your Lister Dashboard shows:

- **Fill Rate**: Percentage of positions filled across all active jobs
- **Pending**: Assignments in "offered" status awaiting response
- **Accepted**: Confirmed contractors
- **Declined**: Contractors who can't make it

## Per-Job View

Click any job to see its assignment breakdown: which positions are filled, who accepted, who's still pending, and which slots need replacement.

## Response Notes

When contractors accept or decline, they can include a note. This helps you understand availability patterns ("Already booked that weekend" or "Available if the rate goes up"). That is useful intel for future staffing decisions.

## Follow-Up

For pending assignments that haven't been answered, use the messaging system to send a follow-up. A quick individual message ("Just checking, are you available for the Colts game on Sep 7?") often gets a faster response than waiting.

## Key Takeaways

- Dashboard shows fill rates and pending responses at a glance
- Per-job view breaks down which positions are covered
- Contractor response notes help with future planning
- Follow up on pending assignments via messaging`,
    },
    {
      slug: "building-your-roster",
      title: "Building Your Contractor Roster",
      section: "Section 3 · Roster & Availability",
      body: `Your roster is your go-to list of contractors you trust and regularly work with. It's the foundation for fast staffing.

## Adding Contractors

Go to Lister Dashboard → Roster (\`/dashboard/contractor/lister/roster\`). Add contractors with:

- **Name**: Full name
- **Email**: For contact and invite purposes
- **Phone**: Direct line
- **Skills**: A list of specialties: Camera Op, Jib, Steadicam, RF Camera, Audio A1, Audio A2, Utility, EIC, Graphics, Shader, etc.
- **Availability Notes**: Free-form notes like "IATSE 317. Available weekends only." or "AZ market. Can travel for NFL."
- **Is Contractor**: Flagged as true for roster members

If the contractor has a Work.WitUS account, you can link their user ID for direct assignment dispatch.

## Organizing Your Roster

Skills make your roster searchable. When you need a Camera Op for a specific gig, filter by skill to see who's qualified. Availability notes help you quickly assess who might be free.

## Roster Size

There's no limit on roster size. Build it over time as you work with new contractors. The more detailed your skills and availability data, the faster you can staff jobs.

## Key Takeaways

- Store skills, availability, and contact info for every contractor
- Filter by skill when staffing specific positions
- Link to Work.WitUS accounts for seamless assignment dispatch
- No roster size limit: add contractors as you work with them`,
    },
    {
      slug: "availability-calendar",
      title: "Checking Availability",
      section: "Section 3 · Roster & Availability",
      body: `Before you assign a contractor, you want to know if they're free. The availability system helps you check.

## Checking Availability

When creating assignments, the system cross-references your roster against existing job dates. If a contractor in your roster is already assigned to another job on the same date, you'll see a conflict indicator.

## Availability Notes

Each roster entry has an availability notes field. Use this for standing availability info:

- "Available weekends only"
- "No availability Nov-Dec (holiday commitments)"
- "Prefers basketball season (Nov-Apr)"
- "Can travel for NFL but not NCAA"

## Planning Ahead

For large events with many positions (like the NFL Combine or B1G Tournament), check availability early. Send a group message to your roster asking who's free, then assign based on responses.

## Key Takeaways

- Cross-reference roster against existing assignments to spot conflicts
- Maintain availability notes for quick reference
- Plan ahead for large events with early availability checks`,
    },
    {
      slug: "individual-messaging",
      title: "Individual Messaging",
      section: "Section 4 · Messaging",
      body: `Sometimes you need to reach one contractor directly: a confirmation, a call sheet reminder, or feedback after a gig. Individual messages handle that.

## Sending an Individual Message

Go to Lister Dashboard → Messages (\`/dashboard/contractor/lister/messages\`) → Compose. Select a recipient from your roster, add a subject and body, and send.

Common use cases:
- **Job confirmations**: "You're confirmed for Camera 3 at Lucas Oil, Sep 7. Call time 8 AM."
- **Call sheet delivery**: "Call sheet attached for IU vs Purdue at Assembly Hall."
- **W9 reminders**: "CBS is asking for updated W9s before processing January invoices."
- **Availability checks**: "Are you free for the B1G Tournament run, Mar 4-8?"
- **Feedback**: "Client feedback from the Pacers game was excellent. You're on the shortlist for playoffs."

## Inbox

Contractors see your messages in their contractor inbox. They can read and respond. You can see read status for each message.

## Key Takeaways

- Direct messaging for confirmations, reminders, and feedback
- Contractors see messages in their Work.WitUS inbox
- Read receipts let you know who's seen your messages`,
    },
    {
      slug: "group-messaging",
      title: "Group Messaging",
      section: "Section 4 · Messaging",
      body: `When you need to reach multiple contractors at once (a crew call, a rate update, or a schedule change) group messages save time.

## Sending a Group Message

Go to Messages → Compose. Instead of selecting an individual recipient, select a message group. Write your subject and body, and send. Every member of the group receives the message.

Example group messages:
- "NFL Combine 2026: Crew Call. Looking for 6 camera ops at Lucas Oil, Feb 23 - Mar 2. Reply if interested."
- "Rate Update: CBS Sports. Camera ops now at $65/hr ST, $97.50 OT for 2026 season."
- "Holiday Schedule Reminder. Colts vs 49ers Dec 22 and Suns vs Lakers Dec 23. Let me know availability."

## Read Tracking

For group messages, you can see which members have read the message and which haven't. This helps you follow up with non-responders.

## Key Takeaways

- Broadcast to entire groups with one message
- Great for crew calls, rate changes, and schedule updates
- Track who's read the message for targeted follow-ups`,
    },
    {
      slug: "managing-groups",
      title: "Managing Message Groups",
      section: "Section 4 · Messaging",
      body: `Groups are how you organize your roster for targeted communications. Think of them as mailing lists for your crew.

## Creating a Group

Go to Lister Dashboard → Groups (\`/dashboard/contractor/lister/groups\`) → New Group. Give it a name and description:

- **Camera Department**: "All camera operators in Indiana/Arizona markets"
- **Audio Team**: "Audio A1 and A2 operators"
- **Indianapolis Crew**: "All crew members based in the Indianapolis area"
- **NFL Regulars**: "Contractors who regularly work NFL broadcasts"

## Adding Members

After creating a group, add members from your roster. Select contractors by name; they're added immediately. You can add and remove members at any time.

## Group Management

- **Rename**: Update the group name or description as your needs change
- **Add/Remove Members**: Adjust membership as your roster evolves
- **Delete**: Remove groups you no longer need (messages are preserved)

## Strategy Tips

Create groups based on:
- **Skill/department**: Camera, Audio, Utility
- **Geography**: Indianapolis, Phoenix, Bloomington
- **Client**: CBS regulars, ESPN regulars
- **Event type**: NFL crew, NCAA crew, NBA crew

The right groups make crew calls fast and targeted.

## Key Takeaways

- Groups organize your roster for broadcast messaging
- Create groups by skill, geography, client, or event type
- Add/remove members as your roster evolves
- Targeted groups get better response rates than blasting everyone`,
    },
    {
      slug: "reports-and-fill-rates",
      title: "Reports and Fill Rates",
      section: "Section 5 · Advanced",
      body: `How quickly are you filling positions? Which contractors always say yes? Which events are hardest to staff? Reports give you the data to answer these questions.

## Fill Rate Reports

Your Lister Dashboard includes fill rate metrics:

- **Overall Fill Rate**: Percentage of positions filled across all active jobs
- **Per-Event Fill Rate**: How many positions each job has filled vs. total needed
- **Response Time**: Average time from assignment offer to contractor response

## Contractor Performance

Over time, the system tracks:
- Which contractors have the highest acceptance rate
- Which contractors respond fastest
- Who you've assigned most frequently (helps identify your core crew)

## Using Reports for Planning

If you notice certain events are harder to staff (low fill rate, slow responses), consider:
- Increasing the rate for that event
- Sending crew calls earlier
- Expanding your roster for that market/skill
- Using group messages for broader reach

## Key Takeaways

- Track fill rates per job and overall
- Monitor contractor acceptance rates and response times
- Use data to improve staffing strategy
- Harder-to-fill events may need higher rates or earlier outreach`,
    },
    {
      slug: "union-leader-tools",
      title: "Union Leader Tools",
      section: "Section 5 · Advanced",
      body: `If you're a union leader, you have additional tools beyond standard lister capabilities. These help manage your local's members and enforce contract requirements.

## Union Member Directory

View all platform users affiliated with your union local. Search by name, skills, or seniority.

## Seniority and Skills Tracking

Track years of membership and certifications for each union member. This data feeds into the dispatch queue: when you need to fill positions, seniority determines contact order.

## Job Priority Flags

Mark jobs as priority or mandatory for union members. Priority jobs appear with a flag in contractors' assignment inboxes, indicating they should be given preference.

## Minimum Rate Enforcement

Set minimum rates that must be met for union jobs. If a job's pay rate falls below the minimum, the system warns you before publishing. This ensures contract compliance.

## Dispatch Queue

The dispatch queue is an ordered list of members to contact for open calls, sorted by seniority. When you need to fill a position, work through the queue from top to bottom. The system tracks who's been contacted and their response.

## Becoming a Union Leader

The union leader role is set by the platform admin. Contact the admin to request the upgrade from Lister to Union Leader. Once your role is updated, these additional features unlock.

## Key Takeaways

- Union leaders get member directory, seniority tracking, and dispatch queue
- Priority flags help contractors prioritize union jobs
- Minimum rate enforcement ensures contract compliance
- Request the Union Leader role from the admin`,
    },
  ],
};
