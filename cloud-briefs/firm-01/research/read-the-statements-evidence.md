# Read the Statements (FIRM-01): Verified Evidence Pack

**Researched:** October 23, 2026 (UTC). Every source listed in the References was fetched in that session.
**Companion to:** `cloud-briefs/firm-01/00-approved-brief.md`. The brief's outline cites the IDs below.

**Tags.** **V** = VERIFIED: read on a page or document fetched on October 23, 2026, at the locator given.
**I** = inferred: arithmetic or reasoning on V items, with the working shown; may be taught only with the
working shown in the lesson. **NOT FOUND** = could not be read or confirmed; never taught as fact.

**How to use this file.** A lesson may assert only V items, each cited to the reference given, and I items
with their working shown. Quotation marks below mean the words were read verbatim. Two kinds of quote have
different strength:

- **Exact.** Text extracted from the document itself (the 10-K, the CFR PDFs, the two SEC PDFs). Safe to quote
  as printed.
- **Excerpt.** Text returned by the fetch tool in excerpts of 125 characters or fewer (the SEC Beginners' Guide,
  IRS Publication 583, the SBA and SEC web pages, the Journal of Accountancy). The words are the page's, but
  the author must re-open the page and read the surrounding paragraph before quoting more than the excerpt.

**Locators in the 10-K.** The filing is an HTML document with the company's own printed page numbers at the
foot of each page. "p. 36" below means printed page 36 of the 10-K, which is what the filing's own table of
contents uses. The inline XBRL viewer has no page numbers, so cite the Item and the printed page.

---

## 1. The filing chosen, and why

| ID | Fact | Tag | Source and locator |
|---|---|---|---|
| F1 | Company: Chipotle Mexican Grill, Inc., CIK 0001058090. Form 10-K for the fiscal year ended December 31, 2025. Filed 2026-02-04, accepted 2026-02-04 16:51:26. Accession number 0001058090-26-000009. Primary document `cmg-20251231.htm` | V | U.S. Securities and Exchange Commission [SEC] (n.d.-c), filing index for accession 0001058090-26-000009 |
| F2 | On October 23, 2026, this was the most recent of 21 Form 10-K filings EDGAR listed for the company (the oldest filed 2006-03-17) | V | SEC (n.d.-a), EDGAR company filing list, CIK 0001058090, type 10-K |
| F3 | The cover page checks "Large accelerated filer" | V | Chipotle Mexican Grill, Inc. (2026), cover page |
| F4 | The cover page asks whether the registrant "is not required to file reports pursuant to Section 13 or Section 15(d) of the Act" and the box marked is No | V | Chipotle Mexican Grill, Inc. (2026), cover page |
| F5 | "We develop and operate restaurants that serve a relevant menu of burritos, burrito bowls, quesadillas, tacos, and salads" | V, exact | Note 1, p. 40 |
| F6 | "As of December 31, 2025, we own 4,042 restaurants including 3,938 Chipotle restaurants within the United States, and 104 international Chipotle restaurants"; the company aggregates its operations "to one reportable segment" | V, exact | Note 1, p. 40 |
| F7 | Exhibits filed with the 10-K include EX-31.1, EX-31.2 and EX-32.1 | V | SEC (n.d.-c) |

**Why this filing (I, the selection reasoning).** It is short and legible for a first reading: one reportable
segment (F6), a business a learner already understands from the counter (F5), and no outstanding borrowings
(E29, E30), so the balance sheet has no bank-debt lines to explain in the first course. Its revenue policy
("point of sale") makes the cash-versus-accrual contrast easy to see, and its gift cards and loyalty program
give a real, dated example of unearned revenue and of an estimate (breakage) that moved revenue (E19, E23).
The company is named only as the author of a public document. Nothing in this file is a view on its stock.

## 2. Where everything is in the filing (locators)

All V, from the 10-K's own table of contents and page footers (Chipotle Mexican Grill, Inc., 2026).

| What | Item and printed page |
|---|---|
| Business | Item 1, p. 4 |
| Risk Factors | Item 1A, p. 9 |
| Item 6 | "Reserved", p. 23 |
| MD&A begins | Item 7, p. 24 |
| 2025 Financial Highlights | Item 7, p. 24 |
| Revenue table and comparable sales | Item 7, p. 25 |
| Change in restaurant sales (the sales bridge) and the gift card breakage footnote | Item 7, p. 26 |
| Liquidity and Capital Resources | Item 7, p. 29 |
| Working-capital paragraph; capital expenditures; Cash Flows discussion | Item 7, p. 30 |
| Critical Accounting Estimates | Item 7, pp. 31 to 32 |
| Market risk | Item 7A, p. 32 |
| Report of Independent Registered Public Accounting Firm (PCAOB ID 42) | Item 8, pp. 34 to 35 |
| Consolidated Balance Sheets | Item 8, p. 36 |
| Consolidated Statements of Income and Comprehensive Income | Item 8, p. 37 |
| Consolidated Statements of Shareholders' Equity | Item 8, p. 38 |
| Consolidated Statements of Cash Flows | Item 8, p. 39 |
| Note 1, Description of Business and Summary of Significant Accounting Policies | p. 40 (runs to p. 46) |
| Inventory policy | Note 1, p. 41 |
| Leasehold improvements, property and equipment; depreciation; useful lives | Note 1, p. 42 |
| Leases policy; goodwill | Note 1, p. 43 |
| Revenue Recognition policy; Delivery | Note 1, p. 44 |
| Gift Cards; Chipotle Rewards | Note 1, p. 45 |
| Note 2, Supplemental Balance Sheet Information | p. 47 |
| Note 3, Revenue Recognition (gift card and rewards tables) | p. 48 |
| Note 9, Leases | p. 58 |
| Note 12, Debt | p. 61 |

## 3. Figures, quoted exactly (fiscal 2025 10-K, filed February 4, 2026)

The statements are headed "(in thousands, except per share data)" (p. 36, p. 37) (E35). So "$8,994,531" on
the page means about $8.99 billion. Negative numbers are printed in parentheses. Every figure below is V and
exact, read in the extracted filing text and cross-checked through a second fetch of the same document.

### Balance sheet, as of December 31 (p. 36)

| ID | Line | 2025 | 2024 |
|---|---|---|---|
| E1 | Total assets | 8,994,531 | 9,204,374 |
| E2 | Total liabilities | 6,163,924 | 5,548,828 |
| E3 | Total shareholders' equity | 2,830,607 | 3,655,546 |
| E4 | Cash and cash equivalents | 350,545 | 748,537 |
| E5 | Restricted cash | 35,364 | 29,842 |
| E6 | Total current assets / Total current liabilities | 1,466,953 / 1,188,142 | 1,780,587 / 1,168,768 |
| E7 | Inventory | 49,508 | 48,942 |
| E8 | Unearned revenue (a current liability) | 240,375 | 238,577 |
| E9 | Retained earnings | 619,908 | 1,574,232 |
| E10 | Operating lease assets / Current operating lease liabilities / Long-term operating lease liabilities | 4,463,010 / 302,380 / 4,773,434 | 4,000,127 / 277,836 / 4,262,782 |

No line on the balance sheet is labeled debt or borrowings (V, read line by line on p. 36).

### Income statement, years ended December 31 (p. 37)

| ID | Line | 2025 | 2024 | 2023 |
|---|---|---|---|---|
| E11 | Total revenue | 11,925,601 | 11,313,853 | 9,871,649 |
| E12 | Food, beverage and packaging / Labor | 3,526,992 / 2,991,680 | 3,374,516 / 2,789,789 | 2,912,564 / 2,440,982 |
| E13 | Total operating expenses / Income from operations | 9,989,803 / 1,935,798 | 9,397,520 / 1,916,333 | 8,313,836 / 1,557,813 |
| E14 | Provision for income taxes / Net income | 473,758 / 1,535,761 | 476,120 / 1,534,110 | 391,769 / 1,228,737 |
| E15 | Diluted earnings per share (dollars, not thousands) | $1.14 | $1.11 | $0.89 |

The restaurant cost lines are captioned "exclusive of depreciation and amortization shown separately below"
(p. 37), and depreciation and amortization was 361,382 in 2025 (V).

### Statement of shareholders' equity, 2025 (p. 38)

| ID | Fact | Tag |
|---|---|---|
| E16 | Row "Repurchase of common stock": (2,490,085) in the Retained Earnings column; (2,490,653) in the Total column. Row "Net income": 1,535,761 to Retained Earnings | V |
| E33 | "All shares of common stock that we repurchase are immediately retired and not held as treasury stock" (Note 1, p. 40). A 50-for-1 stock split took effect on June 26, 2024, and share and per-share figures are restated for it (Note 1, p. 40) | V, exact |

### Cash flow statement, 2025 (p. 39)

| ID | Line | 2025 |
|---|---|---|
| E17 | Net cash provided by operating activities | 2,113,926 |
| E17 | Net cash used in investing activities | (35,082) |
| E17 | Net cash used in financing activities | (2,470,898) |
| E17 | of which, Repurchase of common stock | (2,425,516) |
| E17 | Depreciation and amortization (an add-back under operating activities) | 361,382 |
| E17 | Change in unearned revenue (operating activities) | 40,710 |
| E17 | Effect of exchange rate changes | (416) |
| E17 | Net change in cash, cash equivalents, and restricted cash | (392,470) |
| E17 | Cash, cash equivalents, and restricted cash at beginning / end of year | 778,379 / 385,909 |
| E18 | Purchases of leasehold improvements, property and equipment | (666,336) |

The operating section begins with net income and lists "Adjustments to reconcile net income to net cash
provided by operating activities" (V, p. 39), which is the indirect presentation.

### Notes and MD&A

| ID | Fact | Tag | Locator |
|---|---|---|---|
| E19 | Gift card breakage revenue: "$27,877, $7,760 and $1,162" for 2025, 2024 and 2023 (thousands) | V, exact | Note 1, p. 45 |
| E20 | Gift card liability within unearned revenue: 174,600 (2025), 181,771 (2024) | V | Note 3, p. 48 |
| E21 | Chipotle Rewards liability, 2025: beginning 56,806; revenue deferred 183,617; revenue recognized (176,624); ending 63,799 | V | Note 3, p. 48 |
| E22 | "Total revenue increased 5.4% to $11.9 billion"; "Comparable restaurant sales decreased 1.7%"; "Diluted earnings per share was $1.14, a 2.7% increase from $1.11" | V, exact | Item 7, p. 24 |
| E23 | Sales bridge (dollars in millions): 2024 total 11,313.9; comparable restaurant sales (191.3); restaurants opened in 2025 327.0; opened in 2024 481.8; closures (31.6); other 25.8; 2025 total 11,925.6. Footnote: "Other includes the impact of gift card breakage adjustments, as $20.1 million of additional gift card breakage revenue was recorded during the year ended December 31, 2025 as compared to the year ended December 31, 2024." | V, exact | Item 7, p. 26 |
| E24 | Company-owned restaurants: 3,726 at the beginning of 2025, 334 openings, 13 permanent closures, 5 relocations, 4,042 at the end | V | Item 7, p. 25 |
| E25 | "We generally recognize revenue, net of discounts and incentives, when payment is tendered at the point of sale." | V, exact | Note 1, p. 44 |
| E26 | "Gift card balances are initially recorded as unearned revenue. We recognize revenue from gift cards when the gift card is redeemed by the guest." Deferred revenue for Chipotle Rewards "is included in unearned revenue on our consolidated balance sheets." | V, exact | Note 1, p. 45 |
| E27 | Inventory "is valued at the lower of first-in, first-out cost or net realizable value." | V, exact | Note 1, p. 41 |
| E28 | "Depreciation is calculated using the straight-line method over the estimated useful lives of the assets." Useful lives: leasehold improvements and buildings 3-20 years; furniture and fixtures 4-7 years; equipment 3-10 years | V, exact | Note 1, p. 42 |
| E29 | "As we have no outstanding debt, we estimate this rate based on prevailing financial market conditions, comparable company and credit analysis, and management judgment." (the rate is the incremental borrowing rate used to value lease liabilities) | V, exact | Item 7, p. 31; the same sentence in Note 1, p. 43 |
| E30 | A $500,000 (thousands) revolving credit facility; "We had no outstanding borrowings under the credit facility and were in compliance with all covenants as of December 31, 2025 and 2024, respectively." | V, exact | Note 12, p. 61 |
| E31 | "We have not required significant working capital because guests generally pay using cash or credit and debit cards and because our operations do not require significant receivables or significant inventories" | V, exact | Item 7, p. 30 |
| E32 | The Critical Accounting Estimates section names four: leases; impairment of long-lived assets; stock-based compensation; income taxes. It says the leases estimate, if changed, means "our operating lease assets and liabilities could differ materially" | V | Item 7, pp. 31 to 32 |
| E34 | Auditor's opinion: the statements "present fairly, in all material respects, the financial position of the Company at December 31, 2025 and 2024, and the results of its operations and its cash flows for each of the three years in the period ended December 31, 2025, in conformity with U.S. generally accepted accounting principles." The auditor is Ernst & Young LLP, report dated February 4, 2026, "We have served as the Company's auditor since 1997." The one Critical Audit Matter is "Evaluation of stock-based compensation performance condition assumptions" | V, exact | Item 8, pp. 34 to 35 |
| E35 | Statements are presented "(in thousands, except per share data)" | V, exact | pp. 36, 37 |
| E36 | Capital expenditures for 2025 were "$666.3 million" | V, exact | Item 7, p. 30 |

## 4. Articulation checks (I: arithmetic on the V figures above)

A lesson may teach any of these with the working shown. All were computed on October 23, 2026.

| ID | Check | Working | Result |
|---|---|---|---|
| A1 | The equation holds | 6,163,924 (E2) + 2,830,607 (E3) | 8,994,531 = total assets (E1) |
| A2 | Retained earnings roll forward | 1,574,232 (E9, 2024) + 1,535,761 net income (E14) minus 2,490,085 repurchases charged to retained earnings (E16) | 619,908 = E9, 2025 |
| A3 | Cash flow ending cash ties to the balance sheet | 350,545 cash and cash equivalents (E4) + 35,364 restricted cash (E5) | 385,909 = cash flow statement's end-of-year figure (E17) |
| A4 | The cash flow statement adds up | 2,113,926 minus 35,082 minus 2,470,898 minus 416 | minus 392,470 = 385,909 minus 778,379 (E17) |
| A5 | Operating income | 11,925,601 (E11) minus 9,989,803 (E13) | 1,935,798 = income from operations (E13) |
| A6 | Working capital (the SEC guide's definition, M1) | 1,466,953 minus 1,188,142 (E6) | 278,811 thousand |
| A7 | Operating margin (M1 names the measure) | 1,935,798 / 11,925,601 | about 16.2% |
| A8 | Total liabilities divided by equity (the formula the SEC guide labels debt-to-equity, M1) | 6,163,924 / 2,830,607 | about 2.18. **Teaching point, reviewer check:** the company says it has "no outstanding debt" (E29, E30) while this ratio is 2.18, because the guide's formula uses total liabilities, most of which here are operating lease liabilities (E10). Same word, two meanings |
| A9 | The MD&A's breakage figure matches the note | 27,877 minus 7,760 (E19) | 20,117 thousand, the "$20.1 million" in E23 |
| A10 | Rewards roll-forward | 56,806 + 183,617 minus 176,624 (E21) | 63,799 = ending balance |
| A11 | Filed within its deadline | December 31, 2025 to February 4, 2026 is 35 days; a large accelerated filer (F3) has 60 days (M3) | on time |
| A12 | The sales bridge adds up | 11,313.9 minus 191.3 + 327.0 + 481.8 minus 31.6 + 25.8 (E23) | 11,925.6 |
| A13 | Revenue growth | 11,925,601 / 11,313,853 minus 1 | about 5.4%, matching E22 |

## 5. The mechanics: primary and public sources

| ID | Claim | Tag | Source and locator |
|---|---|---|---|
| M1 | The guide's purpose: "This brochure is designed to help you gain a basic understanding of how to read financial statements." It names "four main financial statements": balance sheets, income statements, cash flow statements and statements of shareholders' equity. It states "ASSETS = LIABILITIES + SHAREHOLDERS' EQUITY". Cash flow statements cover "(1) operating activities; (2) investing activities; and (3) financing activities". "The footnotes to financial statements are packed with information." Of MD&A: "It is intended to help investors to see the company through the eyes of management." It defines working capital ("the money leftover if a company paid its current liabilities"), "Debt-to-Equity Ratio = Total Liabilities / Shareholders' Equity", inventory turnover, operating margin, and the P/E ratio. Current assets and liabilities are those expected to turn into cash, or come due, within one year (paraphrase) | V, excerpts | SEC (2014), sections "Balance Sheets", "Income Statements", "Cash Flow Statements", "Read the Footnotes", "Read the MD&A", "Financial Statement Analysis". Page dated Jan. 12, 2014; last reviewed Feb. 6, 2017 |
| M2 | The SEC investor bulletin: most U.S. public companies must file a 10-K each year (p. 1); "The SEC neither writes the 10-K nor vouches for its accuracy." (p. 1); the Sarbanes-Oxley Act requires the CEO and CFO to certify the 10-K (p. 1, p. 4); Item 7 MD&A "allows company management to tell its story in its own words" and includes "Critical accounting judgments, such as estimates and assumptions" (pp. 2 to 3); Item 8 "requires the company's audited financial statements" including the income statement, balance sheets, statement of cash flows and statement of stockholders' equity, "accompanied by notes" (p. 3); "Most audit reports express an 'unqualified opinion'" and a qualified opinion or disclaimer deserves a careful look (p. 4); the Section 302 and 906 certifications are usually in Exhibits 31 and 32 (p. 4). **Dated:** it describes Item 6 as "Selected Financial Data" for five years (p. 2), which the current form has removed (M3, M4) | V, exact | SEC, Office of Investor Education and Advocacy (2011), PDF pp. 1 to 4 of 6 |
| M3 | Form 10-K General Instruction A(2): annual reports are due 60 days after fiscal year end for large accelerated filers, 75 days for accelerated filers, 90 days for all other registrants (PDF p. 1 of 19). Item 6 is "[Reserved]"; Item 7 furnishes "the information required by Item 303 of Regulation S-K"; Item 8 files "financial statements meeting the requirements of Regulation S-X" (PDF pp. 12 to 13 of 19). Form revision SEC 1673 (02-25), OMB 3235-0063 | V, exact | SEC (2025) |
| M4 | On November 19, 2020 the SEC adopted amendments including "Eliminating Item 301 (Selected Financial Data)" and adding "a new Item 303(b)(3), Critical accounting estimates" | V, excerpts | SEC (2020), press release 2020-290 |
| M5 | 17 CFR 210.3-01(a): there must be filed "audited balance sheets as of the end of each of the two most recent fiscal years" | V, exact | 17 C.F.R. § 210.3-01 (2025), printed p. 272 of the April 1, 2025 edition |
| M6 | 17 CFR 210.3-02(a): "audited statements of comprehensive income and cash flows for each of the three fiscal years preceding the date of the most recent audited balance sheet being filed" | V, exact | 17 C.F.R. § 210.3-02 (2025), p. 273 |
| M7 | 17 CFR 210.3-04: "An analysis of the changes in each caption of stockholders' equity and noncontrolling interests presented in the balance sheets shall be given in a note or separate statement," as "a reconciliation of the beginning balance to the ending balance" | V, exact | 17 C.F.R. § 210.3-04 (2025), p. 274 |
| M8 | 17 CFR 210.5-02 lists the line items that "should appear on the face of the balance sheets or related notes." Its first heading is "ASSETS AND OTHER DEBITS". Caption 1, "Cash and cash items", requires "Separate disclosure" of cash "restricted as to withdrawal or usage" (p. 301). Caption 6, "Inventories", asks for major classes such as finished goods, work in process, raw materials and supplies (p. 302) | V, exact | 17 C.F.R. § 210.5-02 (2025), pp. 301 to 302 |
| M9 | 17 CFR 229.303(a): MD&A's objective is "to provide material information relevant to an assessment of the financial condition and results of operations of the registrant", and a compliant MD&A "is expected to better allow investors to view the registrant from management's perspective" (p. 413). Paragraph (b)(3): "Critical accounting estimates are those estimates made in accordance with generally accepted accounting principles that involve a significant level of estimation uncertainty and have had or are reasonably likely to have a material impact on the financial condition or results of operations of the registrant" (p. 414) | V, exact | 17 C.F.R. § 229.303 (2025), pp. 413 to 414 |
| M10 | IRS Publication 583, heading "Bookkeeping System": "A double-entry bookkeeping system uses journals and ledgers." "Transactions are first entered in a journal and then posted to ledger accounts." "In the double-entry system, each account has a left side for debits and a right side for credits." "It is self-balancing because you record every transaction as a debit entry in one account and as a credit entry in another." "Under this system, the total debits must equal the total credits after you post the journal entries to the ledger accounts." Under "Choosing an Accounting Method": "Under the cash method, you report income in the tax year you receive it." "Under an accrual method, you generally report income in the tax year you earn it," even if paid later. **Framing:** these are tax-reporting definitions ("tax year") | V, excerpts | Internal Revenue Service [IRS] (2024), Publication 583 (Rev. December 2024), sections "Bookkeeping System" and "Choosing an Accounting Method" |
| M11 | SBA: the balance sheet "operates as a snapshot of your business financials." "The accrual method puts transactions on the books immediately upon completing the sale." "The cash method only records this once payment has been received." | V, excerpts | U.S. Small Business Administration [SBA] (n.d.-a) |
| M12 | A non-bank issuer "is required to register a class of equity securities under the Exchange Act if" it has "more than $10 million of total assets" and the securities are "held of record" by "either 2,000 persons, or 500 persons who are not accredited investors" | V, excerpts | SEC (2016), small entity compliance guide |
| M13 | EDGAR: "Enjoy free public access to millions of informational documents filed by publicly traded companies"; tools include Company Search and Full Text Search | V, excerpts | SEC (n.d.-b), "Search Filings" |
| M14 | SBA 7(a) loans: "The contents of the loan application vary depending on the size of the loan and the lender's processing method." "Your lender will help you determine which documents you'll need based on your individual circumstances." The working-capital program describes a business that "Can produce timely and accurate financial statements, accounts receivable and accounts payable agings, and inventory reports" | V, excerpts | SBA (n.d.-b), "Who can benefit?" and "How do I apply?" |
| M15 | The FASB issued two chapters of Concepts Statement No. 8 in December 2021: Chapter 4, Elements of Financial Statements, and Chapter 7, Presentation; Chapter 4 supersedes Concepts Statement No. 6; "Each Statement of Financial Accounting Concepts is nonauthoritative." | V (as reported by the Journal of Accountancy, read directly) | Drew (2021). The FASB's own page returned HTTP 403 (N3) |

## 6. Rights and reuse

| ID | Claim | Tag | Source |
|---|---|---|---|
| R1 | "Copyright protection under this title is not available for any work of the United States Government" | V, excerpt | 17 U.S.C. § 105, read on the Legal Information Institute |
| R2 | Under "Website Dissemination", information on SEC.gov "is considered public information and may be copied or further distributed" "without the SEC's permission"; users should "consider appropriate citation to the SEC as the source"; do not "use the SEC seal or any of the other logos or artwork from this site"; "SEC", the EDGAR logo and the names EDGAR, EDGARLink and EDGARLink Online are "registered trademarks" | V, excerpts | SEC (2023), last reviewed or updated Nov. 29, 2023 |

**Source tiers for the course (the source-hosting rule in CLAUDE.md), decided per source:**

- **Tier A, free to host:** the SEC Beginners' Guide, the 2011 bulletin, the Form 10-K instructions, the 2020
  press release, the 12(g) compliance guide, the Search Filings page (federal works, R1, and R2 for SEC.gov);
  the CFR sections (federal); IRS Publication 583 and the two SBA pages (federal). Do not reproduce the SEC
  seal or logos (R2).
- **Tier B, link only, never rehost:** the Chipotle 10-K. It is on EDGAR for anyone, and R2 covers SEC.gov
  generally, but whether a filer keeps copyright in its own text is a question for counsel (N7), so the
  course links to EDGAR, quotes short passages with page locators, and hosts no copy and no screenshots.
  Also Tier B: the Journal of Accountancy article; the Legal Information Institute pages (cite the govinfo
  CFR edition for regulations).
- **Tier C, cite only:** any FASB text, including the Conceptual Framework and the Accounting Standards
  Codification. Name it; quote none of it; do not paraphrase its definitions. It was not read in this session
  (N3).

## 7. NOT FOUND and failed fetches

| ID | What | Result | Consequence |
|---|---|---|---|
| N1 | Investor.gov "How to Read a 10-K" page | HTTP 403 | Replaced by the SEC's own 2011 bulletin PDF (M2) |
| N2 | eCFR (ecfr.gov) section pages | Redirected to a bot-check page | Regulations read in the govinfo annual edition revised as of April 1, 2025 (M5 to M9). Amendments after that date were not checked. The author re-checks currency on eCFR in a browser before release |
| N3 | FASB Concepts Statements page (fasb.org) | HTTP 403 | No FASB text was read. Cite by title only, through Drew (2021) (M15) |
| N4 | The SEC Beginners' Guide as raw text | Direct download refused (403); read only through the fetch tool in short excerpts | Re-read the page before quoting more than M1's excerpts |
| N5 | A count of companies that file with the SEC; a headline count of U.S. employer firms | Not found by search; the Census SUSB page (fetched) gives no headline count | Lesson 13 argues from the 12(g) thresholds (M12), not from a ratio of filers to firms. Do not write "most companies file nothing" as a statistic |
| N6 | What FASB Concepts Statement No. 8, Chapter 1, says the objective of financial reporting is | Seen only in a search summary (REPORTED) | Do not teach it as the FASB's words |
| N7 | Whether Chipotle holds copyright in its 10-K text | A legal question, not researched | Tier B by default (section 6) |
| N8 | The cover page prints "1,302,423 shares" outstanding as of January 30, 2026; the inline XBRL tag on that number carries `scale="3"` | V that both appear; that the printed figure means thousands is I only | Do not teach this number or call it an error |
| N9 | The plan's earlier license findings (MIT OpenCourseWare, OpenStax, Saylor) | Not re-fetched this session | FIRM-01 uses none of those sources |

## 8. Do not teach (traps found while reading)

- **Any market price measure.** The SEC guide defines the P/E ratio (M1). Leave it out: price, valuation and
  forecasts are where description becomes investment talk.
- **"Chipotle has a debt-to-equity ratio of 2.18" as a bare fact.** Teach A8 only as the reading lesson it is.
- **Item 6 as "Selected Financial Data".** That is the 2011 bulletin's description (M2); the current form
  reserves Item 6 (M3) and the filing shows "Reserved" (p. 23).
- **The tax definitions as the accounting definitions.** Publication 583 frames cash and accrual by tax year
  (M10). Show accrual for financial reporting through the filing's own policies (E25, E26).
- **Lease accounting mechanics.** Name the lease lines (E10) and the estimate (E29); do not teach the
  measurement rules, which live in FASB text (Tier C).
- **Any named person from the filing** (officers, directors, the audit partner). The course names the company
  and the audit firm only.
- **Litigation and risk factors as predictions.** Item 3 and Item 1A are outside FIRM-01's scope.
- **The cover-page share count (N8).**

## References

Balance sheets, 17 C.F.R. § 210.5-02 (2025). https://www.govinfo.gov/content/pkg/CFR-2025-title17-vol3/pdf/CFR-2025-title17-vol3-sec210-5-02.pdf

Changes in stockholders' equity and noncontrolling interests, 17 C.F.R. § 210.3-04 (2025). https://www.govinfo.gov/content/pkg/CFR-2025-title17-vol3/pdf/CFR-2025-title17-vol3-sec210-3-04.pdf

Chipotle Mexican Grill, Inc. (2026, February 4). *Form 10-K: Annual report for the fiscal year ended December 31, 2025* (Accession No. 0001058090-26-000009). U.S. Securities and Exchange Commission. https://www.sec.gov/Archives/edgar/data/1058090/000105809026000009/cmg-20251231.htm

Consolidated balance sheets, 17 C.F.R. § 210.3-01 (2025). https://www.govinfo.gov/content/pkg/CFR-2025-title17-vol3/pdf/CFR-2025-title17-vol3-sec210-3-01.pdf

Consolidated statements of comprehensive income and cash flows, 17 C.F.R. § 210.3-02 (2025). https://www.govinfo.gov/content/pkg/CFR-2025-title17-vol3/pdf/CFR-2025-title17-vol3-sec210-3-02.pdf

Drew, J. (2021, December 23). FASB issues 2 new financial accounting concept statements. *Journal of Accountancy*. https://www.journalofaccountancy.com/news/2021/dec/fasb-2-inancial-accounting-concept-statements.html

Internal Revenue Service. (2024). *Publication 583: Starting a business and keeping records* (Rev. December 2024). https://www.irs.gov/publications/p583

Management's discussion and analysis of financial condition and results of operations, 17 C.F.R. § 229.303 (2025). https://www.govinfo.gov/content/pkg/CFR-2025-title17-vol3/pdf/CFR-2025-title17-vol3-sec229-303.pdf

Subject matter of copyright: United States Government works, 17 U.S.C. § 105. Retrieved October 23, 2026, from https://www.law.cornell.edu/uscode/text/17/105

U.S. Census Bureau. (2025, March 11). *Statistics of U.S. Businesses (SUSB)*. https://www.census.gov/programs-surveys/susb.html

U.S. Securities and Exchange Commission. (n.d.-a). *EDGAR company search: Chipotle Mexican Grill Inc, CIK 0001058090, Form 10-K filings*. Retrieved October 23, 2026, from https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001058090&type=10-K&dateb=&owner=include&count=40

U.S. Securities and Exchange Commission. (n.d.-b). *Search filings*. Retrieved October 23, 2026, from https://www.sec.gov/search-filings

U.S. Securities and Exchange Commission. (n.d.-c). *Filing index: Chipotle Mexican Grill Inc, Form 10-K, accession 0001058090-26-000009*. Retrieved October 23, 2026, from https://www.sec.gov/Archives/edgar/data/1058090/000105809026000009/0001058090-26-000009-index.htm

U.S. Securities and Exchange Commission. (2014, January 12). *Beginners' guide to financial statements*. https://www.sec.gov/about/reports-publications/beginners-guide-financial-statements

U.S. Securities and Exchange Commission. (2016, May 24). *Changes to Exchange Act registration requirements to implement Title V and Title VI of the JOBS Act* [Small entity compliance guide]. https://www.sec.gov/file/small-entity-compliance-guide-44

U.S. Securities and Exchange Commission. (2020, November 19). *SEC adopts amendments to modernize and enhance Management's Discussion and Analysis and other financial disclosures* [Press release 2020-290]. https://www.sec.gov/news/press-release/2020-290

U.S. Securities and Exchange Commission. (2023, November 29). *SEC web site privacy and security policy*. https://www.sec.gov/about/privacy-information

U.S. Securities and Exchange Commission. (2025). *Form 10-K: General instructions* (SEC 1673 (02-25)). https://www.sec.gov/files/form10-k.pdf

U.S. Securities and Exchange Commission, Office of Investor Education and Advocacy. (2011, September). *Investor bulletin: How to read a 10-K*. https://www.sec.gov/files/reada10k.pdf

U.S. Small Business Administration. (n.d.-a). *Manage your finances*. Retrieved October 23, 2026, from https://www.sba.gov/business-guide/manage-your-business/manage-your-finances

U.S. Small Business Administration. (n.d.-b). *7(a) loans*. Retrieved October 23, 2026, from https://www.sba.gov/funding-programs/loans/7a-loans
