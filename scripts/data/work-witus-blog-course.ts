import type { AuthoredCourse } from "./authored-course";

// "The Work.WitUS Blog" (WORK-07, the "Work.WitUS guides" series, `work-witus-guides`). Slug `work-witus-blog`.
//
// SOURCE. Converted from the Work.WitUS tutorial markdown in contractor-os `content/tutorials/blog/`
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
// COURSE-SPECIFIC EDITS. In Work.WitUS the Blog link is admin-only (components/nav/NavConfig.ts,
// adminOnly: true) and the markdown import page sends non-admins away (app/dashboard/blog/import), so
// lesson 1 says plainly that the writing lessons are for the people who publish the blog, while anyone
// can read /blog. Lesson 9 of the source (recipes) is left out: Work.WitUS has no recipes module. The
// Data Hub on main has no blog card, so lesson 8's CSV bulk-import section was cut. The CentenarianOS
// framing (longevity, fitness, recipe examples; Viloud as "the provider CentenarianOS uses") was removed.
export const WORK_WITUS_BLOG_COURSE: AuthoredCourse = {
  title: "The Work.WitUS Blog",
  description:
    "Learn how the blog built into Work.WitUS works: write and publish a post, use the rich text editor, embed video, set visibility or schedule a post, read likes, saves, shares and analytics, and import posts from markdown. Writing is open to Work.WitUS administrators; anyone can read the public blog.",
  lessons: [
    {
      slug: "welcome-to-blog",
      title: "Welcome to the Blog",
      section: "Section 1 · Getting Started",
      body: `Welcome to The Work.WitUS Blog, a free course about the blog built into Work.WitUS (work.witus.online). In Work.WitUS, the **Blog** link in the dashboard menu appears for administrators only, so the writing lessons are for the people who publish the Work.WitUS blog. Anyone can read the public blog at /blog without an account.

Whether you want to share crew stories, how-tos, or news, the blog gives you a full publishing platform without leaving the app. By the end of this course, you'll know how to create posts, embed video, control visibility, track analytics, and import content from other platforms.

Let's start with a quick overview of where everything lives.

## What is the Blog?

The Work.WitUS blog is a built-in publishing platform with two sides: the **public blog** and the **author dashboard**.

**Public blog at /blog**: This is where readers browse posts. It shows all published posts in reverse chronological order, with cover images, excerpts, and author bylines. Anyone can read public posts without an account.

**Author pages at /blog/[username]**: Each author gets a profile page listing all their published posts. Readers can follow the link from any post byline to see everything that author has written.

**Dashboard at /dashboard/blog**: This is your writing workspace. Here you create, edit, and manage all your posts. You can see drafts, published posts, scheduled posts, and analytics from one place.

## Before You Start Writing

Before you can publish, you need a **username** set in your Profile. Your username becomes part of your author page URL (/blog/[username]) and appears on every post you publish. Set your display name and username on your profile if you haven't already.

## What You Can Do

The blog module gives you everything you need to publish:

- **Write** rich content with the Tiptap editor: headings, lists, images, video embeds, and more
- **Control visibility**: save as draft, publish publicly, restrict to members only, or schedule for a future date
- **Engage readers**: likes, saves, and a share bar with copy link, email, and LinkedIn
- **Track performance**: view counts, read depth percentages, referrers, and geographic data
- **Import content**: bring in posts from Ghost, Obsidian, or Notion via markdown

## What's Next

In the next lesson, we'll create your first post from scratch: title, cover image, content, and publish. After that, you can explore the editor deep-dive, video embedding, analytics, or any topic that interests you.`,
    },
    {
      slug: "creating-a-post",
      title: "Creating and Publishing a Post",
      section: "Section 1 · Getting Started",
      body: `Let's create your first blog post. By the end of this lesson, you'll have a published post live on your author page.

## Getting to the Editor

From your dashboard, click **Blog** in the sidebar, then **New Post**. This opens the post editor: a clean writing environment with your content front and center.

## The Post Editor Fields

Every post has these core fields:

**Title**: Your headline. Keep it descriptive and under 80 characters for best display on cards and social shares. The title is required before you can publish.

**Cover Image**: An optional banner image that appears at the top of the post and on blog listing cards. Click the image area to upload from your device. Images are stored on Cloudinary and automatically optimized. For best results, use a landscape image at least 1200px wide.

**Excerpt**: A short summary (1-2 sentences) shown on listing cards and in search results. If you leave it blank, the system auto-generates one from the first few lines of your content. Writing your own excerpt gives you more control over how the post appears in feeds.

**Content**: The main body of your post, written in the Tiptap rich text editor. You get a full formatting toolbar: headings, bold, italic, lists, blockquotes, code blocks, images, links, and video embeds. We'll go deeper on the editor in the next lesson.

**Tags**: Comma-separated labels that help readers find related content. Tags appear on the published post and power the tag filter on /blog. Use consistent tags across posts (e.g., "how-to", "news", "crew") to build browsable collections.

**Visibility**: Controls who can see the post. Options are Draft, Public, Members Only, and Scheduled. We'll cover these in detail in Lesson 05.

## Saving a Draft vs. Publishing

You have two actions at the bottom of the editor:

**Save Draft**: Saves your work without making it visible to anyone. Your post appears in the Drafts tab on your dashboard. You can return and edit as many times as you like. Use this for work in progress.

**Publish**: Makes the post live immediately (if visibility is set to Public) or saves it with the visibility you selected. Once published, the post appears on /blog and your author page.

You can always unpublish a post by changing its visibility back to Draft.

## Quick Start Workflow

Here's the fastest path to your first published post:

1. Click **New Post** from the blog dashboard
2. Type a title
3. Write a few paragraphs in the editor
4. Optionally add a cover image and tags
5. Set visibility to **Public**
6. Click **Publish**

Your post is now live at /blog. Share the link or let readers discover it through the feed.

## What's Next

Now that you know the basics, explore the Tiptap editor in depth (Lesson 03), learn about video embedding (Lesson 04), or jump to visibility and scheduling (Lesson 05).`,
    },
    {
      slug: "rich-text-editor",
      title: "Using the Tiptap Rich Text Editor",
      section: "Section 2 · Writing & Editing",
      body: `The Tiptap editor is where your writing comes to life. It gives you a clean, distraction-free writing surface with a full formatting toolbar. Let's walk through every tool available to you.

## Text Formatting

The toolbar across the top of the editor provides quick access to all formatting options:

**Headings**: Three levels available: H1 (main section), H2 (subsection), and H3 (sub-subsection). Use headings to structure your post for readability and accessibility. Screen readers and search engines rely on heading hierarchy, so start with H1 and nest downward.

**Bold / Italic / Underline**: Standard text emphasis. Bold draws attention to key terms, italic adds subtle emphasis or marks titles, and underline is available but use it sparingly to avoid confusion with links. Keyboard shortcuts: Cmd+B (bold), Cmd+I (italic), Cmd+U (underline).

## Lists and Blocks

**Bullet Lists**: Unordered lists for items without a specific sequence. Click the bullet list icon or type a dash followed by a space at the start of a line.

**Numbered Lists**: Ordered lists for step-by-step instructions or ranked items. Click the numbered list icon or type "1." followed by a space.

**Blockquotes**: Indented, styled blocks for quotes or callouts. Great for highlighting key takeaways or citing external sources. Click the blockquote icon or type ">" at the start of a line.

**Code Blocks**: Monospaced blocks for code snippets, configuration examples, or technical content. Click the code block icon or type triple backticks. Syntax highlighting is applied automatically.

## Links and Media

**Links**: Select text and click the link icon (or Cmd+K) to add a hyperlink. Paste the URL and the selected text becomes clickable. Links open in a new tab by default.

**Inline Images**: Place your cursor where you want an image, then click the image icon. Upload from your device or paste a URL. Images are stored on Cloudinary and served optimized. You can resize by dragging the corner handles.

**Horizontal Rules**: Insert a visual divider between sections. Click the horizontal rule icon or type three dashes (---) on a new line.

## Keyboard Shortcuts

Speed up your writing with these shortcuts:

| Action | Mac | Windows |
|--------|-----|---------|
| Bold | Cmd+B | Ctrl+B |
| Italic | Cmd+I | Ctrl+I |
| Underline | Cmd+U | Ctrl+U |
| Link | Cmd+K | Ctrl+K |
| Undo | Cmd+Z | Ctrl+Z |
| Redo | Cmd+Shift+Z | Ctrl+Shift+Z |

Undo and redo work across all formatting changes, not just text edits. If you accidentally delete a section or apply the wrong format, Cmd+Z brings it back.

## Writing Tips

- **Use headings liberally.** They break up long posts and make scanning easier. A post with no headings is a wall of text.
- **Keep paragraphs short.** Three to four sentences per paragraph reads well on both desktop and mobile.
- **Preview before publishing.** The editor shows a close approximation of the published layout, but always check the final result.

## What's Next

Learn how to embed video directly in your posts (Lesson 04), or explore visibility settings (Lesson 05) and reader engagement features (Lesson 06).`,
    },
    {
      slug: "embedding-video",
      title: "Embedding Video in Posts",
      section: "Section 2 · Writing & Editing",
      body: `Video makes your posts more engaging and is perfect for walkthroughs, demos, or interviews. Work.WitUS has a built-in video embedding system for blog posts. Let's walk through every option.

## The Media Embed Dialog

When you're in the Tiptap editor, click the **video icon** in the toolbar. This opens the media embed dialog: a dialog with four tabs, each giving you a different way to add media.

## Tab 1: Video URL

Paste a URL from a supported video provider and the system handles the rest:

**YouTube**: Paste any YouTube watch URL (e.g., youtube.com/watch?v=...) and it's automatically converted to an embed. The player appears inline in your post with standard YouTube controls. Shorts URLs are also supported.

**Viloud.tv**: Paste a Viloud channel or video URL. The embed renders as a responsive player.

**Mux**: Paste a Mux playback URL or ID. Mux is a video API often used for high-quality, adaptive-bitrate streaming. The system generates the correct embed automatically.

**Cloudinary**: Paste a Cloudinary video URL for directly hosted video files. These play natively in the browser without a third-party player.

After pasting, click **Embed** and the video appears in your post content as a video block. You can reposition it by dragging or delete it by selecting and pressing backspace.

## Tab 2: Social Embed

Have embed code from another platform? Paste the raw HTML iframe or embed snippet here. This is useful for Vimeo, Loom, Twitter/X video, or any platform that provides an embed code. The system sanitizes the HTML and renders it inline.

## Tab 3: Image Upload

Upload a still image from your device. This is the same image upload available from the toolbar, provided here for convenience when you're already in the media modal. Images are uploaded to Cloudinary and optimized automatically.

## Tab 4: Video Upload

Upload a video file directly from your device to Cloudinary. Supported formats include MP4, MOV, and WebM. There's a file size limit displayed in the upload area. Once uploaded, the video is stored on Cloudinary and embedded as a native HTML5 video player in your post.

This is ideal for short clips where you don't need a third-party hosting service: quick demos or screen recordings.

## How Embedded Videos Work

Once embedded, videos appear as responsive blocks within your post content. They:

- Scale to fit the post width on any screen size
- Show a play button overlay before interaction
- Load lazily to keep page performance fast
- Can be placed anywhere in the post: between paragraphs, after headings, inside sections

## What's Next

Learn about visibility and scheduling (Lesson 05), or explore likes, saves, and sharing (Lesson 06).`,
    },
    {
      slug: "visibility-and-scheduling",
      title: "Visibility Options and Scheduling",
      section: "Section 3 · Publishing & Visibility",
      body: `Not every post needs to go live immediately. The blog gives you four visibility options so you can control exactly when and who sees your content. Let's break down each one.

## Visibility Options

When you create or edit a post, the **Visibility** dropdown offers four choices:

**Draft**: The post is saved but invisible to everyone except you. It appears in your Drafts tab on the blog dashboard. Use this for work in progress, ideas you're developing, or posts you want a second look at before publishing. You can keep a post in draft indefinitely.

**Public**: The post is visible to everyone, including visitors who don't have a Work.WitUS account. It appears on /blog, on your author page (/blog/[username]), and is indexable by search engines. This is the default for most content.

**Members Only**: The post is visible only to logged-in Work.WitUS users with an active subscription. Non-members see the title and excerpt but are prompted to subscribe to read the full content. This is useful for premium content, detailed guides, or exclusive updates that reward your subscribers.

**Scheduled**: The post will auto-publish at a specific date and time you set. Until that moment, it behaves like a draft: invisible to readers. Once the scheduled time arrives, the post automatically switches to Public visibility.

## How Scheduling Works

When you select **Scheduled** from the visibility dropdown, a date and time picker appears:

1. Choose the **date** you want the post to go live
2. Set the **time** (in your local timezone)
3. Save the post

The post is stored with a publish time set to your chosen date/time. A background process checks for posts whose scheduled time has passed and flips them to Public.

Scheduling is great for:

- **Content calendars**: Write a week of posts on Sunday and schedule them to publish daily
- **Time-sensitive announcements**: Prepare a post about an event or product launch and have it go live at exactly the right moment
- **Consistent publishing cadence**: Maintain a regular posting schedule even when you're busy

You can edit the scheduled date/time at any point before publication. You can also cancel scheduling by switching visibility back to Draft.

## Changing Visibility After Publishing

Already published a post and want to pull it back? Change the visibility to **Draft** and it disappears from public view immediately. Switch it back to **Public** whenever you're ready. The original URL and any existing likes/saves are preserved.

Moving a public post to **Members Only** keeps it accessible to subscribers but hides it from unauthenticated readers.

## What's Next

Explore how readers interact with your posts (likes, saves, and sharing, in Lesson 06) or see how analytics help you understand your audience (Lesson 07).`,
    },
    {
      slug: "likes-saves-shares",
      title: "Likes, Saves, and Shares",
      section: "Section 4 · Engagement & Analytics",
      body: `Publishing is only half the story. The blog has built-in social engagement features that help readers interact with your content and help you understand what resonates. Let's look at each one.

## Likes (Heart)

Every published post has a **heart icon** that readers can tap to like it. Likes are a quick signal of appreciation, no comment required, just a single tap.

As the author, you can see the total like count on each post from both the public view and your dashboard. Likes help you gauge which topics and styles connect with your audience. A post with many likes tells you to write more like that.

Likes require a logged-in account. The heart icon toggles: tap once to like, tap again to unlike.

## Saves (Bookmark)

The **bookmark icon** lets readers save a post to their personal collection. Saved posts are accessible from the **Saved** tab in the reader's blog dashboard, making it easy to build a reading list or reference library.

Saves are private: only the reader sees their saved posts. As an author, you can see the total save count but not who saved it. A high save count indicates your post has lasting reference value, not just momentary interest.

## Share Bar

Below each published post, a **share bar** provides three ways to share:

**Copy Link**: Copies the post URL to the clipboard with one click. A brief confirmation toast appears. This is the most-used share action and works everywhere: paste into messages, emails, social media, or documents.

**Email**: Opens the reader's default email client with the post title as the subject and the URL in the body. Useful for sharing directly with a specific person.

**LinkedIn**: Opens a LinkedIn share dialog pre-populated with the post URL. Great for professional content that fits a LinkedIn audience.

## Your Dashboard Tabs

Your blog dashboard (\`/dashboard/blog\`, which Work.WitUS shows to administrators) organizes engagement into tabs:

**Published**: All your live posts with like and save counts visible at a glance.

**Drafts**: Work in progress, accessible only to you.

**Saved**: Posts by other authors that you've bookmarked. This is your personal reading list.

**Liked**: Posts you've liked, giving you quick access to content you've enjoyed.

## Author Page Sharing

Your author page at /blog/[username] is itself shareable. It lists all your published posts in one place, making it the ideal link to drop in your bio, email signature, or social profiles. Readers who land on your author page can browse your full catalog and follow links to individual posts.

## What's Next

Dive into post analytics to see detailed read depth, referrers, and geographic data (Lesson 07), or learn how to import existing content from markdown (Lesson 08).`,
    },
    {
      slug: "analytics",
      title: "Post Analytics",
      section: "Section 4 · Engagement & Analytics",
      body: `Knowing that a post was viewed is useful. Knowing that readers dropped off at the halfway mark is actionable. The blog tracks detailed analytics on every published post so you can write better content over time.

## Accessing Analytics

From your blog dashboard, click on any published post to see its analytics panel. You can also access a summary view across all posts from the analytics tab. Each metric is tracked automatically; no setup or third-party tools required.

## Views

The **view count** shows how many times your post has been loaded. Each unique page load counts as one view. This is your top-level reach metric: how many people landed on your post.

Views tell you which posts attract attention. Compare view counts across posts to understand which titles, cover images, and topics draw readers in.

## Read Depth

This is the most valuable metric. Read depth tracks how far readers scroll through your post, measured at four milestones:

- **25%**: Reader saw the first quarter of the post
- **50%**: Reader reached the midpoint
- **75%**: Reader made it through most of the content
- **100%**: Reader reached the bottom of the post

Each milestone shows the percentage of viewers who reached it. For example, if 200 people viewed a post and 80 reached 100%, your full-read rate is 40%.

**How to use read depth:**

- **High drop-off before 50%**: Your opening may not match the title's promise, or the post may be too long for the topic. Try frontloading the most valuable information.
- **Strong 50% but weak 100%**: The post might drag in the second half. Tighten the ending or add a compelling section break.
- **Strong 100%**: Readers found the content valuable enough to finish. This is your benchmark. Write more posts like this.

## Share Methods

Analytics tracks which share actions readers use: **copy link**, **email**, or **LinkedIn**. This tells you where your audience prefers to share and can inform how you promote future posts.

## Country

Geographic data shows which countries your readers are in. This is derived from the request and displayed as a country breakdown. Useful if you're writing location-specific content or want to understand your audience's geographic distribution.

## Referrer

The **referrer** metric shows where readers came from before landing on your post: direct link, Google search, social media platforms, email clients, or other websites. This helps you understand which promotion channels are most effective.

If most traffic comes from direct links, your share bar is working. If search is strong, your headings and content are well-optimized. If a specific external site sends traffic, consider contributing more there.

## What's Next

Learn how to import existing content from markdown files (Lesson 08).`,
    },
    {
      slug: "importing-markdown",
      title: "Importing Posts from Markdown",
      section: "Section 5 · Importing",
      body: `If you've been writing on another platform (Ghost, Obsidian, Notion, or plain markdown files) you don't have to start from scratch. Work.WitUS lets administrators import markdown content directly into the blog editor (\`/dashboard/blog/import\`). Let's walk through it.

## Single Post: Paste or Upload Markdown

From the blog dashboard, click **New Post** to open the editor. You have two ways to bring in markdown content:

**Paste**: Copy the raw markdown from your source (a .md file, a Ghost export, a Notion page exported as markdown) and paste it into the editor. The Tiptap editor auto-converts markdown syntax to rich text:

- \`# Heading\` becomes an H1
- \`**bold**\` becomes bold text
- \`- item\` becomes a bullet list
- \`> quote\` becomes a blockquote
- Code fences become code blocks
- \`[link text](url)\` becomes a clickable link
- \`![alt](image-url)\` becomes an inline image

**Upload**: If you have a .md file on your device, use the import option to upload it directly. The file contents are parsed and loaded into the editor as formatted rich text.

After import, review the converted content. Some complex markdown (nested tables, footnotes, custom shortcodes) may need manual cleanup. The editor gives you a visual preview so you can spot anything that didn't convert cleanly.

## Setting Post Metadata

Imported content fills the body of the post, but you still need to set:

- **Title**: If your markdown has a top-level heading, it may auto-populate. Otherwise, type your title.
- **Cover image**: Upload one or skip it.
- **Excerpt**: Write a summary or let the system generate one.
- **Tags**: Add relevant tags for discoverability.
- **Visibility**: Choose Draft to review first, or Public to publish immediately.

## Migration Tips

- **Ghost**: Export your Ghost site as JSON, then use a Ghost-to-markdown converter. Import each post's markdown individually.
- **Obsidian**: Your vault files are already .md; upload them directly.
- **Notion**: Export pages as Markdown & CSV from Notion's settings. Import the .md files one at a time.

## Course Complete

You've completed The Work.WitUS Blog. You now know how to create posts, use the rich text editor, embed video, control visibility, track analytics, and import content. Start writing and publishing; your author page is waiting.`,
    },
  ],
};
