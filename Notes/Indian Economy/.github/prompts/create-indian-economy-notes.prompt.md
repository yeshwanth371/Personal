---
name: "Create Daily Indian Economy Notes"
description: "Use when: converting rough daily Indian Economy notes into a dated, verified, exam-oriented HTML study file with relevant charts, diagrams and data tables."
argument-hint: "Paste today's rough Indian Economy notes"
agent: "agent"
---

Create today's Indian Economy study-note file from the rough notes supplied below.

## Input

${input:dailyNotes:Paste today's rough Indian Economy notes}

## Required Outcome

Work autonomously through research, file creation, visual planning and validation. Do not merely return a rewritten version in chat.

1. Determine today's actual date from the current session context.
2. Create the file in the current workspace using this exact naming pattern:
   `Indian Economy - Class MM-DD-YYYY.html`
3. Before writing, inspect the most recent `Indian Economy - Class *.html` file and preserve its established print-friendly HTML structure, typography, colors, responsive behavior and visual conventions. If no previous file exists, create a clean, print-friendly, responsive HTML structure suitable for revision notes.
4. Never modify or overwrite an earlier daily note. If today's exact file already exists, inspect it and ask before replacing it unless the invocation explicitly requests an update.
5. Use ASCII where practical, while preserving standard economic terminology, institution names and punctuation.

## Content Rules

Apply this priority order:

**Original content -> Accuracy -> Organisation -> Relevant additions -> Visual clarity -> Revision value**

- Preserve every important idea and intended meaning from the rough notes.
- Correct grammar, spelling, terminology, definitions, formulas, dates, statistics, units, institutional names and economic relationships where necessary.
- Mark every substantive correction clearly as **[Correction]** and briefly explain the corrected position.
- Add only relevant facts that improve conceptual understanding or competitive-exam value. Mark each such addition as **[Additional]**.
- If a claim cannot be verified reliably, retain it only when useful and mark it **[Verification Required]**. Never guess.
- Keep language simple, precise and easy to revise while retaining correct economic terminology.
- Highlight important exam points, cause-and-effect links, policy trade-offs and common confusions.
- For every time-sensitive statistic, state the reference period, unit and source. Include the release or access date when needed to prevent ambiguity.
- Clearly distinguish stocks from flows; nominal from real values; absolute values from growth rates; percentage from percentage-point changes; fiscal year from calendar year; estimates from final data; and current prices from constant prices.
- State the base year wherever it affects a series such as GDP, GVA, CPI, WPI or IIP.
- Preserve formulas and explain each variable. Verify that calculations, signs and units are internally consistent.
- Distinguish official definitions from textbook shorthand, commentary or contested interpretations.
- Do not silently remove uncertain or incorrect original content; represent its corrected meaning in a correction callout.

## Visual Representations

Use visual representations wherever they materially improve conceptual understanding, data interpretation, memory or revision. These may include:

- Line, bar and stacked charts for trends and composition
- Tables for indicators, sectors, policies and institutional comparisons
- Circular-flow and money-flow diagrams
- Monetary-policy transmission diagrams
- Fiscal-policy and budget flowcharts
- Inflation, exchange-rate and balance-of-payments schematics
- Banking, taxation and financial-market process diagrams
- Demand-supply graphs and simple economic models
- Timelines for reforms, crises, committees and policy changes

Follow these rules:

- Prefer clear, lightweight, print-friendly HTML/CSS diagrams, SVGs, Mermaid diagrams or charts created from verified official data.
- Use a chart only when the axes, units, reference period, base year where applicable and data source can be stated accurately.
- Use a labelled diagram for processes or relationships where text alone is insufficient.
- Every visual must have a descriptive title, readable labels, a short caption and source/attribution when based on external data.
- Keep visuals responsive and legible in both screen and print layouts. Do not use decorative or irrelevant images.
- Never fabricate data points, scales, trends, labels or sources.
- If a necessary visual cannot be created or embedded reliably, insert a conspicuous placeholder at the exact relevant location using this format:
  **[Visual Representation Required: type of visual, exact subject, variables/labels to include, reference period, and suggested authoritative source]**
- Mark a useful but non-essential visual as:
  **[Visual Representation Recommended: type of visual and purpose]**
- Do not leave generic markers such as "add chart here". Each marker must state exactly what should be shown.

## Organisation

Use the following where they improve revision:

- Numbered headings and clear subheadings
- Concise bullet points
- Tables for comparisons, classifications, indicators, reforms and timelines
- Charts and labelled economic diagrams
- HTML flowcharts using arrows for mechanisms, processes and cause-effect chains
- Callout blocks for corrections, additions, notes and important exam points
- Important institutions, reports, indices, committees, schemes, formulas, dates and policy instruments

Do not add decorative filler, excessive prose, nested cards or irrelevant detail.

## Verification

For factual, statistical, policy and current claims, verify against reliable open sources. Prefer sources in this order:

1. Reserve Bank of India (RBI), including the Database on Indian Economy and official reports
2. Ministry of Statistics and Programme Implementation (MoSPI), including National Accounts Statistics, CPI, IIP and PLFS releases
3. Ministry of Finance, including the Union Budget, Economic Survey and Department of Economic Affairs
4. Controller General of Accounts (CGA), Comptroller and Auditor General of India (CAG) and Finance Commission reports
5. NITI Aayog and relevant Government of India ministries or statutory bodies
6. Securities and Exchange Board of India (SEBI), Insurance Regulatory and Development Authority of India (IRDAI), Pension Fund Regulatory and Development Authority (PFRDA) and Insolvency and Bankruptcy Board of India (IBBI)
7. Directorate General of Commercial Intelligence and Statistics (DGCI&S), Department of Commerce and official trade portals
8. Labour Bureau, National Statistical Office and Census of India
9. NCERT
10. Reputable international sources such as the IMF, World Bank, WTO, ILO, UN agencies and OECD only when an Indian official source is unavailable or an international comparison is required

Use web/research tools when needed. Do not rely solely on memory for current rates, targets, thresholds, rankings, budget figures, growth estimates, inflation data, poverty or employment statistics, base years or institutional mandates.

When sources report different values, do not silently choose one. Explain differences in definition, reference period, revision status, methodology or coverage, and use the value most appropriate to the context.

## Previous Year Questions (PYQs)

After completing the main content, search for UPSC Civil Services (Prelims and Mains) Previous Year Questions directly relevant to the topics covered in today's notes.

- Use web/research tools to find authentic PYQs from official UPSC papers or reputable compilations.
- Include only questions that are directly related to the day's topics; do not add generic or loosely related questions.
- For each PYQ provide:
  - Year and paper (for example, "UPSC CSE Prelims 2021")
  - Full question text with all options for Prelims MCQs
  - Correct answer clearly marked
  - Brief explanation connecting the answer to the economic concept, policy, institution or data covered in the notes
- Group them under a dedicated `<h2>` section titled **Previous Year Questions (PYQs)**.
- If no authentic PYQ can be verified for a topic, note it as **[No verified PYQ found for this topic]** rather than fabricating one.
- Aim for 3-8 questions per note depending on topic breadth.

## Mandatory Ending Sections

End the HTML document with all of these sections in this order:

1. **Key Facts for Prelims**
2. **Mains Points**
3. **Data and Trends to Remember**
4. **Common Traps / Confusions**
5. **30-Second Revision**
6. **Previous Year Questions (PYQs)**
7. **Corrections Made**
8. **Visual Representations Required / Recommended**
9. **Open Sources / Further Reading**

The visual-representation section must list and link back to every required or recommended marker in the notes. If all necessary visuals were included, explicitly state **[All necessary visual representations included]**.

The final source section must contain descriptive, clickable HTTPS links. Prefer direct official data releases, reports or tables over home pages.

## Quality Checks

After creating the file:

- Validate that core HTML tags are balanced.
- Confirm the title, visible heading and filename use today's date consistently.
- Confirm `[Correction]`, `[Additional]`, and every mandatory ending section are present.
- Confirm every time-sensitive figure has a reference period, unit and source.
- Confirm every relevant data series identifies its base year and whether values are nominal/real or current/constant prices.
- Confirm every embedded chart or diagram has a title, labels, caption and source where applicable.
- Check that tables, charts and diagrams remain legible in responsive and print layouts.
- Search for stale figures, unit mismatches, arithmetic errors, incorrect institutional names or wrong facts identified during research.
- Run editor diagnostics for the new HTML file and fix relevant errors.
- Do not alter unrelated files.

In the final response, provide a clickable link to the created file and briefly state what was verified, including the status of visual representations and time-sensitive data. Keep the response concise.
