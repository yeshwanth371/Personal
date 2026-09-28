---
name: "Create Daily Polity Notes"
description: "Use when: converting rough daily Indian Polity or Constitution notes into a dated, verified, exam-oriented HTML study file."
argument-hint: "Paste today's rough Indian Polity notes"
agent: "agent"
---

Create today's Indian Polity study-note file from the rough notes supplied below.

## Input

${input:dailyNotes:Paste today's rough Indian Polity or Constitution notes}

## Required Outcome

Work autonomously through research, file creation, and validation. Do not merely return a rewritten version in chat.

1. Determine today's actual date from the current session context.
2. Create the file in the current workspace using this exact naming pattern:
   `Indian Polity - Class MM-DD-YYYY.html`
3. Before writing, inspect the most recent `Indian Polity - Class *.html` file and preserve its established print-friendly HTML structure, typography, colors, responsive behavior, and visual conventions.
4. Never modify or overwrite an earlier daily note. If today's exact file already exists, inspect it and ask before replacing it unless the invocation explicitly requests an update.
5. Use ASCII where practical, while preserving standard constitutional names and punctuation already used by the workspace template.

## Content Rules

Apply this priority order:

**Original content -> Accuracy -> Organisation -> Relevant additions -> Revision value**

- Preserve every important idea and intended meaning from the rough notes.
- Correct grammar, spelling, terminology, Article numbers, dates, facts, case names, constitutional provisions, Parts, Schedules and Amendments where necessary.
- Mark every substantive correction clearly as **[Correction]** and briefly explain the corrected position.
- Add only relevant facts that improve conceptual understanding or competitive-exam value. Mark each such addition as **[Additional]**.
- If a claim cannot be verified reliably, retain it only when useful and mark it **[Verification Required]**. Never guess.
- Keep language simple, precise and easy to revise while retaining constitutional terminology.
- Highlight important exam points and common confusions.
- When a term or classification is widely used in textbooks or coaching but is **not actually mentioned in the Constitution** (e.g., "Absolute Majority", "Government Bill", "Private Member's Bill"), clearly tag it with **[Not mentioned in the Constitution]** in the notes. This helps distinguish constitutional language from academic/political convention.
- Do not silently remove uncertain or incorrect original content; represent its corrected meaning in a correction callout.

## Organisation

Use the following where they improve revision:

- Numbered headings and clear subheadings
- Concise bullet points
- Tables for comparisons, classifications, timelines and Article summaries
- HTML flowcharts using arrows for procedures
- Callout blocks for corrections, additions, notes and important exam points
- Important Articles, Parts, Schedules, Amendments, cases and dates

Do not add decorative filler, excessive prose, nested cards, or irrelevant historical detail.

## Verification

For factual, legal and current claims, verify against reliable open sources. Prefer sources in this order:

1. Legislative Department, Ministry of Law and Justice — official Constitution of India
2. Parliament of India / Lok Sabha / Rajya Sabha
3. Supreme Court of India judgments or official judgment portal
4. Election Commission of India
5. India Code and relevant Government of India ministry websites
6. NCERT
7. Other reputable open legal or educational archives only when an official source is unavailable

Use web/research tools when needed. Do not rely solely on memory for disputed Article numbers, voting thresholds, dates, amendment procedures or current institutional facts.

## Previous Year Questions (PYQs)

After completing the main content, search for UPSC Civil Services (Prelims and Mains) Previous Year Questions directly relevant to the topics covered in today's notes.

- Use web/research tools to find authentic PYQs from official UPSC papers or reputable compilations.
- Include only questions that are directly related to the day's topics — do not add generic or loosely related questions.
- For each PYQ provide:
  - Year and paper (e.g., "UPSC CSE Prelims 2019")
  - Full question text with all options (for Prelims MCQs)
  - Correct answer clearly marked
  - Brief explanation referencing the relevant constitutional provision, Article or concept from the notes
- Group under a dedicated `<h2>` section titled **Previous Year Questions (PYQs)**.
- If no authentic PYQ can be verified for a topic, note it as **[No verified PYQ found for this topic]** rather than fabricating one.
- Aim for 3–8 questions per note depending on topic breadth.

## Mandatory Ending Sections

End the HTML document with all of these sections in this order:

1. **Key Facts for Prelims**
2. **Mains Points**
3. **Common Traps / Confusions**
4. **30-Second Revision**
5. **Previous Year Questions (PYQs)** (placed before Corrections)
6. **Corrections Made**
7. **Open Sources / Further Reading**

The final source section must contain descriptive, clickable HTTPS links. Prefer direct official pages over home pages.

## Quality Checks

After creating the file:

- Validate that core HTML tags are balanced.
- Confirm the title, visible heading and filename use today's date consistently.
- Confirm `[Correction]`, `[Additional]`, and every mandatory ending section are present.
- Search for stale misspellings or wrong facts identified during research.
- Run editor diagnostics for the new HTML file and fix relevant errors.
- Do not alter unrelated files.

In the final response, provide a clickable link to the created file and briefly state what was verified. Keep the response concise.
