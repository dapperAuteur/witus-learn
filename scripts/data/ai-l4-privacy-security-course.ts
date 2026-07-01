// Authored "L4: Data Privacy & Security in the AI Age" — the fourth rung of the AI
// literacy mastery ladder on Learn.WitUS (builds on F1 "AI Literacy", L1 advanced
// prompting, L2 detecting AI). The throughline: in the AI age your personal data is
// both the fuel AI runs on AND the thing AI makes it cheaper to steal — so the durable
// skills are (1) control what you share (don't paste secrets/PII into AI tools), and
// (2) lock down the basics that AI-supercharged scams now target hardest (unique
// passwords + a manager, MFA, recognizing phishing, prompt updates). Practical,
// empowering, literacy-level — NOT fearmongering and NOT legal advice. Honest that
// "anonymized" data often re-identifies and that no single setting makes you invisible.
// Cited to primary, verified sources only: the NIST Privacy Framework and NIST
// Cybersecurity Framework (CSF) 2.0; FTC business + consumer guidance (Start with
// Security, data-broker report, de-identification/anonymization warnings, kids'
// privacy/COPPA); CISA's "Secure Our World" four actions; the official GDPR.eu rights
// summary and the California AG's CCPA page; and OWASP's Top 10 for LLM Applications
// (LLM02:2025 Sensitive Information Disclosure). Two fill-in exercises + a 9-question
// quiz whose every question carries an explanation and links to the lesson that teaches
// the answer (passing score 70).

import type { AuthoredCourse } from "./authored-course";

export const AI_L4_PRIVACY_SECURITY_COURSE: AuthoredCourse = {
  title: "L4: Data Privacy & Security in the AI Age",
  description:
    "Your personal data is both the fuel modern AI runs on and the thing AI now makes cheaper to steal. This course teaches the durable habits that protect you: understand what counts as personal data and how AI tools collect, train on, and retain what you type; know exactly what NOT to paste into a chatbot (secrets, your own PII, other people's data, confidential work); understand your privacy rights at a high level (GDPR and CCPA) and how to exercise them; see why 'anonymized' data so often gets re-identified; and lock down the security basics — a password manager, multi-factor authentication, and phishing radar — now that AI has supercharged scams, voice clones, and social engineering. Practical and empowering, not fearmongering, and not legal advice. Cited to NIST, the FTC, CISA, the official GDPR and CCPA pages, and OWASP. Builds on AI Literacy (F1).",
  lessons: [
    // ── Section 1: Your data ────────────────────────────────────────────────
    {
      slug: "what-is-personal-data",
      title: "1 · What personal data is — and why it matters",
      section: "Your data",
      body: `**Personal data** is any information that can be tied to *you* — directly or by piecing clues together. It's far broader than your name and Social Security number.

- **Obvious identifiers** — name, address, phone, email, government ID, account numbers.
- **Sensitive data** — health, finances, location, biometrics (face, fingerprint, voice), race, religion, sexual orientation, and anything about children.
- **Quiet trails** — what you search, watch, and buy; who you message; your device IDs; and your location history. Any one looks harmless; together they describe your life in detail.

Why this matters more now: AI systems are **hungry for data**. The more a system knows about you, the more precisely it can target an ad — or a scam — at you. Privacy isn't about "having something to hide." It's about **control**: deciding who gets to know what about you, and being able to change your mind.

A useful frame from the U.S. standards agency: privacy risk is the chance that **data processing causes a problem for a person** — embarrassment, discrimination, financial loss, loss of autonomy — not just a "breach." That's why even data you shared willingly can hurt you later, in a context you never agreed to (NIST Privacy Framework, 2020).

**Check yourself.** Name one "quiet trail" you leave that isn't your name but still identifies you.

## Sources
- National Institute of Standards and Technology. (2020). NIST Privacy Framework 1.0. https://www.nist.gov/privacy-framework`,
    },
    {
      slug: "how-ai-uses-your-data",
      title: "2 · How AI systems collect, train on, and keep your data",
      section: "Your data",
      body: `To use AI safely, picture where your words go. A typical AI chat tool touches your data in three places:

- **Training data** — the huge body of text and images a model learned from *before* you ever used it. Much of it was scraped from the public web. If something about you is public online, assume it may already be baked into models.
- **Your prompts** — what you type *now*. Depending on the product and your settings, your conversations **may be stored and used to improve the model**, and may be reviewed by humans for quality or safety. Free consumer tools are more likely to do this by default than paid or enterprise tiers.
- **Retention** — how long they keep it. Even with "chat history off," providers often retain copies for a period to handle abuse or meet legal duties before deleting them.

The practical rule: **treat anything you type into a public AI tool as if it could be stored, read by a human, or surface later.** The security profession says the same thing in its standards. OWASP's Top 10 for LLM Applications lists **Sensitive Information Disclosure (LLM02:2025)** as a top risk — that PII, financial details, health records, credentials, and confidential business data can leak both *into* a model and *out* of it through its answers (OWASP, 2025).

Two habits that follow:
- **Check the data settings** of every AI tool — look for "don't use my data for training," history controls, and deletion options.
- **Follow your school/employer's policy.** Confidential work data is not yours to paste, no matter how convenient.

**Check yourself.** Name the three places your data lives in an AI system (training, ___, retention).

## Sources
- OWASP. (2025). LLM02:2025 Sensitive Information Disclosure — OWASP Top 10 for LLM Applications. https://genai.owasp.org/llmrisk/llm022025-sensitive-information-disclosure/
- National Institute of Standards and Technology. (2020). NIST Privacy Framework 1.0. https://www.nist.gov/privacy-framework`,
    },
    {
      slug: "what-not-to-paste",
      title: "3 · What NOT to paste into an AI tool",
      section: "Your data",
      body: `This is the single most useful habit in the whole course. Before you hit enter, ask: *"If this conversation were leaked or read by a stranger, would I be okay?"* If not, don't paste it.

**Never paste:**
- **Secrets** — passwords, API keys, security codes, recovery phrases, the contents of a password manager.
- **Your own sensitive PII** — Social Security / national ID numbers, full card or bank numbers, medical records.
- **Other people's data** — a friend's, a patient's, a customer's, a student's. It isn't yours to share, and consent matters.
- **Confidential work or legal material** — unreleased product details, contracts, source code, client files — unless you're on an approved enterprise tool that your employer has cleared for it.

**Safer ways to still get help:**
- **Redact and abstract.** Replace real names, numbers, and identifiers with placeholders ("Person A," "Company X," "###-##-1234"). Ask the question in the general case.
- **Use the smallest slice.** Paste only the paragraph you need feedback on, not the whole confidential document.
- **Prefer cleared tools** for sensitive work, and turn off training/history where the setting exists.

Remember: an AI can't "forget" on command, and a redaction you skipped can't be un-pasted. The FTC's long-running guidance to businesses is the same logic that protects you personally — **don't collect or hand over sensitive data you don't need to**, because the safest data is the data that was never exposed (FTC, *Start with Security*).

**Check yourself.** Give the one-line gut-check question to run before pasting anything into a chatbot.

## Sources
- Federal Trade Commission. Start with Security: A Guide for Business. https://www.ftc.gov/business-guidance/resources/start-security-guide-business
- OWASP. (2025). LLM02:2025 Sensitive Information Disclosure — OWASP Top 10 for LLM Applications. https://genai.owasp.org/llmrisk/llm022025-sensitive-information-disclosure/`,
    },
    {
      slug: "practice-share-or-not",
      title: "4 · Practice: paste it, or don't?",
      section: "Your data",
      exercise: {
        instructions:
          "Quick decisions about what's safe to put into a public AI tool, and how to make a risky paste safe. Type your answer, then check. Spelling is forgiving.",
        items: [
          {
            prompt: "You want resume feedback but the draft has your home address and phone. Before pasting, you should ___ those details.",
            answer: "redact",
            accept: ["remove", "delete", "strip", "redact them", "hide"],
            explanation: "Strip identifiers and ask in the abstract — the model doesn't need your address to fix your wording.",
          },
          {
            prompt: "Is it OK to paste your password into a chatbot to 'check if it's strong'? (yes / no)",
            answer: "no",
            explanation: "Never paste secrets. Use a password manager's strength meter instead — a chatbot may store the input.",
          },
          {
            prompt: "A friend forwarded you their medical lab results to 'ask the AI.' Whose consent do you not have to share their data?",
            answer: "your friend's",
            accept: ["friend's", "the friend's", "theirs", "your friend", "the friend", "friend"],
            explanation: "Other people's data isn't yours to paste. Consent matters even when they asked for help informally.",
          },
          {
            prompt: "To keep a public AI tool from learning from your chats, look in its data ___ for a 'don't train on my data' option.",
            answer: "settings",
            accept: ["setting", "preferences"],
            explanation: "Most tools expose training and history controls; check them and your school/employer policy too.",
          },
          {
            prompt: "The OWASP LLM risk about PII, credentials, and confidential data leaking through a model is called Sensitive Information ___.",
            answer: "Disclosure",
            accept: ["disclosure", "leakage", "leak"],
            explanation: "LLM02:2025 — data can leak both into a model and out through its answers.",
          },
        ],
      },
    },
    // ── Section 2: Your rights ──────────────────────────────────────────────
    {
      slug: "privacy-rights-gdpr-ccpa",
      title: "5 · Your privacy rights (GDPR & CCPA), high level",
      section: "Your rights",
      body: `You have more rights over your data than most people use. Two laws set the global tone — you don't need to be a lawyer to benefit from them.

**GDPR** (the EU's General Data Protection Regulation, in force since 2018) protects people in the EU and applies to any organization handling their data, anywhere. Its data-subject rights include the **right to be informed, the right of access, the right to rectification (correct errors), the right to erasure ("be forgotten"), the right to restrict or object to processing, the right to data portability, and rights around automated decision-making** (GDPR.eu).

**CCPA/CPRA** (California's Consumer Privacy Act, as amended) gives California residents the **right to know** what's collected, the **right to delete** it, the **right to correct** it, the **right to opt out of the sale or sharing** of their personal information, the **right to limit** use of sensitive data, and the **right to non-discrimination** for exercising these rights (California Attorney General).

Two takeaways even if you live elsewhere:
- **The same controls usually exist for everyone.** Big companies often build one privacy dashboard and offer access, deletion, and "do not sell/share" to all users — so look for them on your accounts regardless of your state or country.
- **"Opt out of sale/sharing" is the lever for ad-tracking.** Using it limits how your behavior gets brokered around the web.

This is high-level orientation, **not legal advice** — for a specific situation, check the official sources or a professional.

**Check yourself.** Name the GDPR/CCPA right you'd use to make a company hand over a copy of what it knows about you.

## Sources
- GDPR.eu. What is GDPR, the EU's new data protection law? https://gdpr.eu/what-is-gdpr/
- California Office of the Attorney General. California Consumer Privacy Act (CCPA). https://oag.ca.gov/privacy/ccpa`,
    },
    {
      slug: "deidentification-fails",
      title: "6 · De-identification — and why \"anonymized\" can fail",
      section: "Your rights",
      body: `Companies often promise your data is "anonymized" or "de-identified," meaning the obvious identifiers were stripped so it can no longer be tied to you. It's a real and useful technique — and it's **weaker than it sounds.**

The problem is **re-identification.** Stripped-down data can be matched back to a person by combining it with other available data. The pattern shows up again and again:

- **A few data points are often enough.** Researchers have shown that a small number of timestamped location points can single out the vast majority of people in a large dataset — because *where you go* is nearly as unique as a fingerprint.
- **Mosaic effect.** Two "anonymous" datasets that are safe alone can re-identify people when overlaid (e.g., anonymized purchase history + a public review history).
- **Hashing isn't anonymizing.** Replacing an email with a scrambled code still lets two parties match you if they both hash the same email.

This is why the FTC has warned that broad claims a dataset is "anonymous" are often **misleading**, and that truly de-identifying data takes real measures plus a commitment not to re-identify it (FTC). For you, the lesson is humility: **"anonymized" is not the same as "untraceable."** Share less up front, because de-identification is not a guarantee you can lean on.

**Check yourself.** Why can "anonymized" location data still point back to a specific person?

## Sources
- Federal Trade Commission. (2014). Data Brokers: A Call for Transparency and Accountability (see discussion of de-identification and re-identification). https://www.ftc.gov/reports/data-brokers-call-transparency-accountability-report-federal-trade-commission-may-2014
- Federal Trade Commission. Start with Security: A Guide for Business. https://www.ftc.gov/business-guidance/resources/start-security-guide-business`,
    },
    {
      slug: "data-brokers-footprint",
      title: "7 · Data brokers & your digital footprint",
      section: "Your rights",
      body: `Your **digital footprint** is the trail of data you generate — posts, searches, purchases, locations, app permissions. A whole industry exists to collect, package, and sell it: **data brokers.**

In a landmark study, the FTC examined nine data brokers and found they **collect billions of data elements on nearly every U.S. household — largely behind the scenes, without people's knowledge** — and combine them into detailed profiles (and inferred categories) used for marketing, identity verification, and risk scoring. Most people have no idea these companies hold a file on them, and the FTC called for more transparency and consumer control (FTC, 2014).

You can shrink your footprint:

- **Minimize at the source.** Share less, lock down social profiles, and deny apps permissions (location, contacts, mic) they don't truly need.
- **Use your rights.** "Right to delete" and "do not sell/share" requests (Lesson 5) apply to many data brokers too; some offer opt-out forms.
- **Tighten defaults.** Turn off ad personalization, reset your advertising ID, and prune old accounts you no longer use.
- **Think before you post.** The cheapest privacy win is the data you never put online in the first place.

You won't reach zero — but every reduction shrinks what can be brokered, targeted, or stolen.

**Check yourself.** What is a "data broker," and name one way to shrink the footprint they can collect.

## Sources
- Federal Trade Commission. (2014). Data Brokers: A Call for Transparency and Accountability. https://www.ftc.gov/reports/data-brokers-call-transparency-accountability-report-federal-trade-commission-may-2014`,
    },
    // ── Section 3: Your defenses ────────────────────────────────────────────
    {
      slug: "security-basics",
      title: "8 · Security basics: passwords, MFA, and updates",
      section: "Your defenses",
      body: `Privacy and security are two sides of one coin: it doesn't matter how careful you are about *sharing* data if an attacker can simply **log in as you.** CISA — the U.S. cyber-defense agency — boils everyday protection down to **four actions** in its *Secure Our World* campaign, and they're the highest-return habits you can build (CISA).

- **Use strong, unique passwords + a password manager.** The danger isn't just a weak password — it's a **reused** one. When one site is breached, attackers try that email/password pair everywhere ("credential stuffing"). A password manager generates and remembers a different strong password for every account, so one breach can't unlock the rest.
- **Turn on multi-factor authentication (MFA).** MFA adds a second proof — a code, an app prompt, a security key — so a stolen password alone isn't enough. Enable it everywhere that matters: email, banking, and the account that can reset your other accounts.
- **Recognize and report phishing.** Most account takeovers start with a message that tricks you into typing a password or code. (Next lesson goes deep on this — it's where AI changes the game.)
- **Update your software promptly.** Updates patch the flaws criminals exploit. "Remind me later" is how known holes stay open.

These map directly onto the **Protect** function of the NIST Cybersecurity Framework (CSF) 2.0 — the part about controlling access and safeguarding accounts so an incident never starts (NIST CSF 2.0, 2024).

**Check yourself.** Why is a *reused* password worse than a merely weak one?

## Sources
- Cybersecurity and Infrastructure Security Agency (CISA). Secure Our World. https://www.cisa.gov/secure-our-world
- National Institute of Standards and Technology. (2024). The NIST Cybersecurity Framework (CSF) 2.0. https://www.nist.gov/cyberframework`,
    },
    {
      slug: "ai-scams-social-engineering",
      title: "9 · AI-supercharged scams & social engineering",
      section: "Your defenses",
      body: `**Social engineering** is hacking the human, not the computer — tricking you into giving up a password, a code, or a payment. AI didn't invent it, but AI makes it **cheaper, faster, and far more convincing.** The defenses still work; you just need to apply them on purpose.

How AI raises the stakes:

- **Flawless phishing at scale.** The old tells — broken grammar, weird phrasing — are gone. AI writes clean, personalized lures in any language, in seconds, by the millions.
- **Voice clones.** A few seconds of someone's audio can fake their voice. The classic attack: a panicked call that *sounds like* a family member asking you to send money or read a code.
- **Deepfake video calls.** Attackers have impersonated executives on live video to authorize fraudulent transfers.
- **Tailored pretexts.** AI scrapes your public footprint to reference real names, jobs, and events, making the con feel legitimate.

The durable defenses don't depend on spotting the fake:

- **Slow down on urgency.** "Act now, don't tell anyone, it's an emergency" is the universal scam tell. Pressure is the attack.
- **Verify on a trusted channel.** Got an urgent call or message? **Hang up and call back** on a number you already have. Agree on a **family code word** for emergencies.
- **Never share codes or passwords.** No legitimate organization asks you to read back an MFA code. A code request is the scam.
- **Don't click; navigate.** Reach accounts by typing the address or using your saved bookmark, not the link in the message.

This is exactly why the security basics from the last lesson matter: when MFA is on and you verify before you act, even a perfect AI-written lure runs into a wall.

**Check yourself.** Someone "from your bank" calls and asks you to read back the code they just texted. What do you do?

## Sources
- Cybersecurity and Infrastructure Security Agency (CISA). Secure Our World — Recognize and Report Phishing. https://www.cisa.gov/secure-our-world
- National Institute of Standards and Technology. (2024). The NIST Cybersecurity Framework (CSF) 2.0. https://www.nist.gov/cyberframework`,
    },
    {
      slug: "protecting-family-and-rights",
      title: "10 · Protecting your family & exercising your rights",
      section: "Your defenses",
      body: `Privacy is a household skill. Kids and older relatives are frequent targets — and they often rely on you to set the defaults.

**Protecting kids and family:**
- **Know that kids have special protections.** In the U.S., **COPPA** requires sites and apps aimed at children under 13 to get a parent's permission before collecting a child's personal information — and gives parents the right to review and delete it (FTC). Use those controls.
- **Set privacy-friendly defaults** on kids' devices and accounts: limit location sharing, lock down who can contact them, and review app permissions together.
- **Share a family scam plan.** Teach the urgency tell, the "hang up and call back" habit, and a family code word (Lesson 9) — this protects grandparents from voice-clone scams as much as it protects kids.
- **Mind what you post about others.** "Sharenting" — posting photos and details about your children — builds a footprint they never consented to.

**Exercising your rights — a simple plan:**
1. **Lock the basics first** — password manager + MFA on email and banking (Lesson 8).
2. **Visit the privacy dashboard** of your major accounts; turn off ad personalization and "sell/share."
3. **Use access & deletion rights** (Lesson 5) on services and data brokers you don't use anymore.
4. **Audit app permissions** on your phone; revoke location/contacts/mic where not needed.
5. **Keep the AI rule** — never paste secrets, your PII, or others' data into a public AI tool (Lesson 3).

You won't be invisible, and that's not the goal. The goal is **control and resilience**: share less, lock the doors that matter, verify before you act, and help your family do the same. That's data privacy and security in the AI age — practical, repeatable, and yours.

**Check yourself.** Name the first two steps of the "exercise your rights" plan.

## Sources
- Federal Trade Commission. Children's Privacy (COPPA). https://www.ftc.gov/business-guidance/privacy-security/childrens-privacy
- Federal Trade Commission. Protecting Your Child's Privacy Online — Consumer Advice. https://consumer.ftc.gov/articles/protecting-your-childs-privacy-online`,
    },
    // ── Final quiz ──────────────────────────────────────────────────────────
    {
      slug: "ai-l4-privacy-security-quiz",
      title: "11 · Check your understanding",
      section: "Your defenses",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "Which best describes \"personal data\"?",
            options: [
              "Only your name and Social Security number",
              "Any information that can be tied to you, directly or by combining clues",
              "Only data marked 'confidential'",
              "Only data you posted publicly",
            ],
            correctIndex: 1,
            explanation: "Personal data is broad — identifiers, sensitive data, and the quiet trails (searches, location, device IDs) that together identify you.",
            sourceLessonSlug: "what-is-personal-data",
          },
          {
            prompt: "Where does your data live in a typical AI chat tool?",
            options: [
              "Only in your prompts, never stored",
              "Training data, your prompts, and retention",
              "Only in the company's billing system",
              "Nowhere — it's deleted instantly",
            ],
            correctIndex: 1,
            explanation: "It touches the model's training data, your current prompts (which may be stored/reviewed), and retention windows.",
            sourceLessonSlug: "how-ai-uses-your-data",
          },
          {
            prompt: "Which is safe to paste into a public AI chatbot?",
            options: [
              "A password to 'check if it's strong'",
              "A friend's medical records to ask about them",
              "A general question with names and numbers redacted",
              "Your company's unreleased contract",
            ],
            correctIndex: 2,
            explanation: "Redact and abstract. Never paste secrets, your own sensitive PII, other people's data, or confidential work.",
            sourceLessonSlug: "what-not-to-paste",
          },
          {
            prompt: "The OWASP Top 10 risk about PII, credentials, and confidential data leaking through an LLM is called…",
            options: [
              "Prompt Injection",
              "Sensitive Information Disclosure",
              "Model Theft",
              "Denial of Service",
            ],
            correctIndex: 1,
            explanation: "LLM02:2025 Sensitive Information Disclosure — data can leak both into a model and out through its answers.",
            sourceLessonSlug: "how-ai-uses-your-data",
          },
          {
            prompt: "Which privacy right lets you get a copy of what a company knows about you?",
            options: [
              "Right to non-discrimination",
              "Right of access / right to know",
              "Right to data portability only",
              "Right to limit",
            ],
            correctIndex: 1,
            explanation: "GDPR's right of access and CCPA's right to know both require disclosure of the personal data held about you.",
            sourceLessonSlug: "privacy-rights-gdpr-ccpa",
          },
          {
            prompt: "Why can \"anonymized\" data still be traced back to a person?",
            options: [
              "Anonymizing is illegal",
              "Stripped data can be re-identified by combining it with other data",
              "Companies always keep a secret name list",
              "It can't — anonymized means untraceable",
            ],
            correctIndex: 1,
            explanation: "Re-identification: a few location points or an overlaid dataset can single you out. 'Anonymized' is not 'untraceable.'",
            sourceLessonSlug: "deidentification-fails",
          },
          {
            prompt: "What is a \"data broker\"?",
            options: [
              "A bank that trades stocks",
              "A company that collects and sells profiles built from your data, often without your knowledge",
              "A government privacy office",
              "A type of password manager",
            ],
            correctIndex: 1,
            explanation: "The FTC found data brokers hold billions of data elements on nearly every household, largely behind the scenes.",
            sourceLessonSlug: "data-brokers-footprint",
          },
          {
            prompt: "Why is a REUSED password especially dangerous?",
            options: [
              "It's harder to remember",
              "One site's breach lets attackers log into all your other accounts with the same password",
              "It expires faster",
              "It can't be used with MFA",
            ],
            correctIndex: 1,
            explanation: "Credential stuffing: a unique password per account (via a password manager) contains the damage to one site.",
            sourceLessonSlug: "security-basics",
          },
          {
            prompt: "Someone 'from your bank' calls and asks you to read back the code they just texted. You should…",
            options: [
              "Read it back quickly so they can verify you",
              "Refuse, hang up, and call the bank back on a number you already have",
              "Text the code to be safe",
              "Give them only half the code",
            ],
            correctIndex: 1,
            explanation: "A request to share an MFA code is the scam. Verify on a trusted channel — hang up and call back. Pressure is the attack.",
            sourceLessonSlug: "ai-scams-social-engineering",
          },
        ],
      },
    },
  ],
};
