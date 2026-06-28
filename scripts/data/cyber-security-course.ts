// Authored career-prep cybersecurity course for the WitUS Trade School, designed
// from the "CyberGuardian" coach persona (content/cyber-security/). Career-oriented,
// hands-on, and ethics-first: offensive topics are framed only for authorized,
// legal, defensive use. Each module follows the persona's lesson shape — Concept
// Overview, Why it Matters, Key Terms, Real-World Example, Practical Application,
// Next Steps. Committed; seeded via the shared importer.

import type { AuthoredCourse } from "./authored-course";

export const CYBER_SECURITY_COURSE: AuthoredCourse = {
  title: "Cybersecurity: Get the Job",
  description:
    "A hands-on, career-focused path into cybersecurity — from how the internet works to defending it, ending with the certifications, portfolio, and interview prep to land an entry-level role (SOC analyst and beyond). Ethics-first throughout: every offensive concept is taught only for authorized, legal, defensive use.",
  lessons: [
    {
      slug: "orientation-career-map",
      title: "1 · Orientation: the cybersecurity career map",
      body: `**Concept overview.** Cybersecurity is not one job; it is a field. The common entry point is the **SOC analyst** (security operations — watching, triaging, and responding to alerts). From there: incident response, threat hunting, penetration testing (offensive), GRC (governance, risk, compliance), cloud security, and more.

**Why it matters.** Knowing the map lets you aim. Most people start defensive (blue team) because the jobs are plentiful and the learning curve is friendlier.

**Key terms.** Blue team (defense), red team (authorized offense), SOC, GRC, threat actor, certification.

**Real-world example.** A SOC analyst sees an alert: a user logged in from two countries an hour apart. They investigate, decide it is a compromised account, and lock it — that is the job, most days.

**Practical application.** Write your 12-month goal: target role, one or two certifications (Security+ is the usual first), and the hours per week you will study.

**Next steps → ethics.** Before any technique: you only ever touch systems you own or are explicitly authorized to test. Unauthorized access is a crime. Everything offensive in this course is for your own lab or authorized work only.`,
    },
    {
      slug: "how-the-internet-works",
      title: "2 · How the internet actually works",
      body: `**Concept overview.** You cannot secure what you do not understand. Data moves in packets over **TCP/IP**; services listen on **ports** (80 = HTTP, 443 = HTTPS, 22 = SSH); **DNS** turns names into IP addresses; **HTTP/HTTPS** carries the web.

**Why it matters.** Almost every attack and defense is explained by this plumbing — a firewall rule, a port scan, a DNS hijack all assume you know how traffic flows.

**Key terms.** IP address, TCP/UDP, port, DNS, HTTP(S), packet, the request/response cycle.

**Real-world example.** Typing a URL: your machine asks DNS for the IP, opens a TCP connection to port 443, and does a TLS handshake before any page loads.

**Practical application (lab).** Run \`ping\`, \`nslookup\` (or \`dig\`), and \`tracert\`/\`traceroute\` against a site you own or a public one. Note what each reveals.

**Next steps.** Sketch the path of a single web request from your laptop to a server and back, labeling DNS, port, and TLS.`,
    },
    {
      slug: "cia-triad-fundamentals",
      title: "3 · The CIA triad and security fundamentals",
      body: `**Concept overview.** Security protects three things — **Confidentiality** (only the right people see it), **Integrity** (it is not tampered with), and **Availability** (it is there when needed). Risk is where a **threat** meets a **vulnerability** on an **asset** that has value.

**Why it matters.** Every control you will ever deploy serves one of the three. "Defense in depth" means layering controls so no single failure is fatal.

**Key terms.** Confidentiality, integrity, availability, threat, vulnerability, risk, asset, defense in depth, attack surface.

**Real-world example.** Ransomware attacks availability (you cannot reach your files) and often confidentiality (data is stolen first). Backups defend availability; encryption defends confidentiality.

**Practical application.** Pick a system you use daily. List one threat to each of C, I, and A, and one control for each.

**Next steps.** Learn the operating systems those controls run on.`,
    },
    {
      slug: "os-and-command-line",
      title: "4 · Operating systems and the command line",
      body: `**Concept overview.** Security work lives in the terminal. You need working **Linux** (most servers and security tools) and **Windows** (most enterprises) literacy: the filesystem, users and permissions, processes, and basic commands.

**Why it matters.** Tools, logs, and investigations all happen at the command line. Comfort here is the single biggest force-multiplier early on.

**Key terms.** Shell, filesystem, permissions (read/write/execute), root/administrator, process, environment variable, sudo.

**Real-world example.** Investigating a Linux box, an analyst checks running processes (\`ps\`), open network connections (\`ss\`/\`netstat\`), and recent logins (\`last\`) to spot an intruder.

**Practical application (lab).** Install Linux in a VM (VirtualBox + Ubuntu or Kali). Practice \`ls\`, \`cd\`, \`cat\`, \`grep\`, \`chmod\`, \`ps\`, and reading a log file with \`less\`.

**Next steps.** With the OS under control, learn how secrets are protected: cryptography.`,
    },
    {
      slug: "cryptography-essentials",
      title: "5 · Cryptography essentials",
      body: `**Concept overview.** **Hashing** is one-way (verifies integrity, stores passwords); **encryption** is two-way (protects confidentiality). **Symmetric** encryption uses one shared key (fast); **asymmetric** uses a public/private key pair (enables TLS and signatures).

**Why it matters.** Crypto underpins HTTPS, password storage, and secure messaging. Most real breaches involve crypto used *wrong*, not crypto broken.

**Key terms.** Hash (SHA-256), salt, symmetric (AES), asymmetric (RSA/ECC), public/private key, TLS, digital signature.

**Real-world example.** Good password storage never stores the password — it stores a salted hash (e.g., bcrypt). A breach then leaks hashes, not plaintext passwords.

**Practical application (lab).** Hash a string with \`sha256sum\`; observe that one character change rewrites the whole hash. Inspect a website's TLS certificate in your browser.

**Next steps.** See how these protect traffic on the network.`,
    },
    {
      slug: "network-defense",
      title: "6 · Network defense",
      body: `**Concept overview.** Defending a network means controlling what can talk to what: **firewalls** (allow/deny rules), **network segmentation** (separating sensitive systems), **VPNs** (encrypted tunnels), and **IDS/IPS** (detecting/blocking known-bad traffic).

**Why it matters.** Most organizations are defended at the network edge and internally between zones. Segmentation is what stops one infected laptop from reaching the whole company.

**Key terms.** Firewall, ACL, segmentation/VLAN, VPN, IDS, IPS, DMZ, zero trust.

**Real-world example.** A flat network let 2017's ransomware spread freely; segmented networks contained it to a few machines.

**Practical application (lab).** In your VM, inspect the host firewall (\`ufw\` on Linux). Write a rule that allows SSH but denies everything else inbound, and explain why.

**Next steps.** Now study what the firewall is defending against: threats and attacks.`,
    },
    {
      slug: "threats-and-attacks",
      title: "7 · Threats and attacks (the attacker mindset, ethically)",
      body: `**Concept overview.** Understanding attacks — *to defend against them* — is core to the job. The big categories: **malware** (viruses, ransomware, trojans), **social engineering** (phishing, pretexting — attacking the human), and **application attacks** (injection, cross-site scripting) that abuse software that trusts input it should not.

**Why it matters.** The majority of breaches start with phishing. Knowing the attacker's playbook tells you where to put defenses and what to look for in logs.

**Key terms.** Malware, ransomware, phishing, social engineering, SQL injection, XSS, exploit, payload, OWASP Top 10.

**Real-world example.** A phishing email impersonates IT, harvests a password, and the attacker logs in from abroad — exactly the alert the SOC analyst in Module 1 caught.

**Practical application (ethics required).** Study phishing examples and the OWASP Top 10 (read-only). Any hands-on attack practice happens ONLY in your own lab or sanctioned platforms (Module 10) — never against systems you do not own.

**Next steps.** Move from attacks to the discipline of defending in real time: the blue team.`,
    },
    {
      slug: "identity-and-access",
      title: "8 · Identity, access, and the human layer",
      body: `**Concept overview.** Most attacks ultimately abuse a login. Defenses: strong **authentication** (long passphrases, a password manager), **multi-factor authentication (MFA)**, and **least privilege** (people and systems get only the access they need).

**Why it matters.** MFA alone blocks the overwhelming majority of account-takeover attacks. Least privilege limits the blast radius when something is compromised.

**Key terms.** Authentication vs authorization, MFA/2FA, password manager, least privilege, role-based access control (RBAC), single sign-on (SSO).

**Real-world example.** A stolen password is useless against an account with MFA — the attacker lacks the second factor.

**Practical application.** Turn on MFA for your key accounts and adopt a password manager. Audit one account for access you no longer need and remove it.

**Next steps.** See how defenders watch all of this at scale.`,
    },
    {
      slug: "blue-team-defense",
      title: "9 · Blue team: defensive operations",
      body: `**Concept overview.** The **SOC** (Security Operations Center) is where defenders watch. It runs on **logging** (systems record what happened), a **SIEM** (aggregates and alerts on logs), and an **incident response** lifecycle: prepare, detect, contain, eradicate, recover, learn.

**Why it matters.** This is the most common entry-level job. The skill is turning a flood of logs and alerts into a confident decision: benign, or incident?

**Key terms.** SOC, log, SIEM, alert, true/false positive, incident response, containment, threat hunting.

**Real-world example.** A SIEM flags 100 failed logins then one success on an admin account. The analyst contains the account, checks what it touched, and writes it up.

**Practical application (lab).** On a free platform (e.g., a Blue Team lab on TryHackMe), triage a sample alert: decide true vs false positive and justify it from the logs.

**Next steps.** Learn the offensive side safely, to test defenses.`,
    },
    {
      slug: "ethical-hacking-and-lab",
      title: "10 · Ethical hacking and your home lab",
      body: `**Concept overview.** Penetration testing is **authorized**, legal, scoped offense used to find weaknesses before criminals do. The non-negotiable rule: written permission and a defined scope, always. Practice happens in environments built for it.

**Why it matters.** Thinking like an attacker — within the law — makes you a far better defender, and pentesting is a well-paid specialization.

**Key terms.** Penetration test, scope, rules of engagement, authorization, CTF (capture the flag), reconnaissance, vulnerability scanning.

**Real-world example.** A company hires a tester, signs a scope document, the tester finds an unpatched server and reports it, and the company fixes it before a criminal finds it.

**Practical application (lab).** Build a home lab (isolated VMs) and practice on platforms designed for it — TryHackMe, Hack The Box, PortSwigger Web Security Academy. Never test anything outside your lab or an explicit authorization.

**Next steps.** Package all of this into a job.`,
    },
    {
      slug: "get-the-job",
      title: "11 · Get the job: certs, portfolio, interview",
      body: `**Concept overview.** Employers hire on evidence. Build three things: **certifications** (CompTIA Security+ first; Network+ helps; then role-specific ones), a **portfolio** (a GitHub or blog documenting your labs, write-ups, and CTF solves), and **interview readiness**.

**Why it matters.** A documented home lab and a few clear write-ups often beat a bare résumé — they prove you do the work.

**Key terms.** Security+, Network+, résumé, portfolio, home lab, behavioral interview, technical interview.

**Real-world example.** A career-changer with no degree lands a SOC role on the strength of Security+, ten TryHackMe write-ups on GitHub, and the ability to explain the incident-response lifecycle in the interview.

**Practical application.** Draft a one-page résumé and a portfolio outline. Schedule your Security+ exam date — a deadline turns study into progress.

**Next steps.** Keep going: pick a specialization (blue team, pentesting, cloud, GRC) and go deep. The field rewards continuous learning.

## A note on ethics
Everything here is for defense and for systems you own or are authorized to test. Unauthorized access, even "just looking," is illegal and ends careers. Authorized, ethical practice is what makes you employable and trusted.`,
    },
  ],
};
