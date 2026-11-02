---
name: "Create Daily Internal Security Notes"
description: "Use when: converting rough daily Internal Security notes into a dated, verified, UPSC exam-oriented HTML study file with relevant diagrams, case studies and policy analysis."
argument-hint: "Paste today's rough Internal Security notes"
agent: "agent"
---

Create today's Internal Security study-note file from the rough notes supplied below.

## Input

${input:dailyNotes:Paste today's rough Internal Security notes}

## Required Outcome

Work autonomously through research, file creation, visual planning and validation. Do not merely return a rewritten version in chat.

1. Determine today's actual date from the current session context.
2. Create the file in the Internal Security notes workspace using this exact naming pattern:
   `Internal Security - Class MM-DD-YYYY.html`
3. Before writing, inspect the most recent `Internal Security - Class *.html` file and preserve its established print-friendly HTML structure, typography, colors, responsive behavior and visual conventions. If no previous file exists, use an accessible sibling subject's latest daily HTML note as a style reference; otherwise create a clean, print-friendly, responsive HTML structure suitable for revision notes.
4. Never modify or overwrite an earlier daily note. If today's exact file already exists, inspect it and ask before replacing it unless the invocation explicitly requests an update.
5. Use ASCII where practical, while preserving standard legal terminology, institution names and punctuation.
6. If the rough notes continue a numbered sequence from an earlier class, preserve that numbering and identify the continuation in the header.

## Content Rules

Apply this priority order:

**Original content -> Accuracy -> Organisation -> Relevant additions -> Visual clarity -> Revision value**

- Preserve every important idea and intended meaning from the rough notes.
- Correct grammar, spelling, terminology, definitions, dates, statistics, legal provisions, agency names and institutional mandates where necessary.
- Mark every substantive correction clearly as **[Correction]** and briefly explain the corrected position.
- Add only relevant facts that improve conceptual understanding or competitive-exam value. Mark each such addition as **[Additional]**.
- If a claim cannot be verified reliably, retain it only when useful and mark it **[Verification Required]**. Never guess.
- Keep language simple, precise and easy to revise while retaining correct security and legal terminology.
- Highlight important exam points, cause-and-effect links, policy trade-offs and common confusions.
- Distinguish internal security from external defence, law and order from public order, and conventional security from non-traditional security where relevant.
- Distinguish terrorism, insurgency, extremism, radicalisation, organised crime and civil protest; do not treat these as interchangeable or label lawful dissent as a security offence.
- Explain the roles and limits of Union and State governments, police, Central Armed Police Forces, armed forces, intelligence bodies and investigative agencies without conflating their mandates.
- Verify the applicable law and its status as of the note date. Distinguish enactment from commencement, amendments from proposals, and current provisions from repealed or superseded provisions. Preserve historical legal context where the topic requires it.
- Present security responses alongside constitutional safeguards, fundamental rights, accountability, development, community participation and rehabilitation where relevant.
- For every time-sensitive statistic, state its reference period, geographical scope, unit and source. Distinguish incidents, cases registered, arrests, charges and convictions; do not infer guilt from an allegation or arrest.
- Attribute disputed claims and distinguish verified facts, official statements, allegations and analytical interpretations.
- Use neutral, evidence-based language. Avoid sensationalism, communal generalisations and unsupported attribution to communities, countries or organisations.
- Keep cyber threats, terrorism and crime coverage educational and defensive. Do not add operational attack instructions, weapon-making details, evasion techniques, sensitive deployment information or personal data.
- Do not silently remove uncertain or incorrect original content; represent its corrected meaning in a correction callout.

## Organisation

Use the following where they improve revision:

- Numbered headings and clear subheadings
- Concise bullet points and definitions
- Tables comparing threats, laws, institutions, mandates and policy responses
- Cause-impact-response flowcharts and timelines
- Callout blocks for corrections, additions, notes and important exam points
- Verified, concise case studies with date, context, response, lessons and source
- Relevant constitutional provisions, statutes, judgments, committees, reports, schemes and international cooperation mechanisms

For each major security challenge, use a suitable subset of:

**Meaning / Background -> Causes / Drivers -> Threats / Impacts -> Institutional and Legal Framework -> Government Measures -> Gaps / Challenges -> Way Forward**

Keep additions tied to the day's topics. Do not expand every class into the entire syllabus or add decorative filler, excessive prose, nested cards or irrelevant incident details.

## Visual Representations

Use visuals wherever they materially improve conceptual understanding or revision:

- Threat-driver-impact-response flowcharts
- Institutional coordination and legal-process diagrams
- Timelines of laws, reforms and major developments
- Tables or charts based on verified crime and security statistics
- High-level schematic maps for border management, coastal security or regional challenges when location is essential

Follow these rules:

- Prefer lightweight, self-contained HTML/CSS diagrams and inline SVGs that remain legible in screen and print layouts.
- Every visual must have a descriptive title, readable labels, a short caption and source/attribution when based on external material.
- State axes, units, reference periods and sources for charts. Never fabricate data points, scales, trends, boundaries or sources.
- Mark approximate maps as **schematic, not to scale** and use authoritative public maps for boundary references. Do not invent disputed boundaries or precise security deployment locations.
- If a necessary visual cannot be created reliably, insert a conspicuous marker at the relevant location:
  **[Visual Representation Required: type of visual, exact subject, labels/data to include, reference period where applicable, and suggested authoritative source]**
- Mark a useful but non-essential visual as:
  **[Visual Representation Recommended: type of visual and purpose]**
- Do not leave generic markers such as "add diagram here".

## Verification

Verify factual, legal, statistical and current claims against reliable open sources. Prefer sources according to the claim:

1. Ministry of Home Affairs (MHA), including annual reports, official notifications and relevant departmental publications
2. India Code, the Gazette of India and the Legislative Department for statutes, commencement notifications and constitutional provisions
3. Supreme Court of India judgments and official court sources for judicial rulings
4. Parliament of India questions, answers and committee reports
5. National Crime Records Bureau (NCRB) for crime statistics, with report year and category definitions
6. Official publications of the NIA, BPR&D, NDMA, Indian Coast Guard and relevant police or security agencies for their respective mandates and public guidance
7. MeitY, CERT-In, I4C, NCIIPC and other relevant official bodies for cyber security and critical infrastructure protection
8. Ministry of Finance, FIU-IND, RBI and FATF for money laundering, terror financing and financial safeguards
9. MEA, UNODC, relevant UN bodies and official treaty sources for international cooperation
10. PIB for attributable government announcements; reputable academic or journalistic sources for context when primary sources are unavailable

Use web/research tools when needed. Do not rely solely on memory for current legal status, agency powers, statistics, designations, policy changes or disputed claims.

Never upload private rough notes or internal material to external services. Research using minimal, non-sensitive topic queries and public sources only. If a source is inaccessible, state the verification limitation rather than inventing its contents.

## Previous Year Questions (PYQs)

After completing the main content, search for UPSC Civil Services Previous Year Questions directly relevant to today's topics, especially General Studies Paper III Mains questions on internal security.

- Prefer official UPSC question papers and answer keys; use reputable compilations only when an official source is unavailable.
- Include only directly related questions. Aim for 3-8 questions depending on topic breadth; do not pad the section to meet a quota.
- For each question provide the year, exam, paper and a descriptive link to the verifying source.
- Reproduce question text only when permitted; otherwise provide a clearly labelled paraphrase and link to the original. Never present a paraphrase as verbatim text.
- For Prelims MCQs, include all options when reproduction is permitted, the verified answer and a brief explanation. Distinguish an official answer key from a secondary answer; mark unresolved answers **[Verification Required]**.
- For Mains questions, include marks and word limits only when verified, and give a short **suggested answer approach [Additional]** linked to the notes. Make clear this is study guidance, not an official marking scheme.
- If no authentic PYQ can be verified for a topic, state **[No verified PYQ found for this topic]** rather than fabricating one.

## Mandatory Ending Sections

End the HTML document with all of these sections in this order:

1. **Key Facts for Prelims**
2. **Mains Points**
3. **Common Traps / Confusions**
4. **30-Second Revision**
5. **Previous Year Questions (PYQs)**
6. **Corrections Made**
7. **Open Sources / Further Reading**

In **Mains Points**, include concise analytical points and a balanced way forward relevant to the day's topics, not generic slogans.

The final source section must contain descriptive, clickable HTTPS links. Prefer direct official documents or pages over home pages. Identify report years and document dates where relevant.

## Quality Checks

After creating the file:

- Validate that core HTML tags are balanced.
- Confirm the title, visible heading and filename use today's date consistently.
- Confirm all mandatory ending sections are present in the required order.
- Confirm substantive corrections and additions are marked `[Correction]` and `[Additional]`. If none were needed, say so in the relevant summary rather than inventing changes.
- Confirm legal provisions, agency mandates, statistics, case studies and PYQ attributions match the verified sources.
- Search for stale misspellings or wrong facts identified during research.
- Ensure diagrams, tables and callouts are responsive and print-friendly. If browser tools are available, inspect the rendered file and fix clipping, overlapping labels or unreadable visuals.
- Run editor diagnostics for the new HTML file when available and fix relevant errors. Report unavailable checks rather than claiming they passed.
- Do not alter unrelated files.

In the final response, provide a clickable link to the created file and briefly state what was verified, including any unresolved verification limits. Keep the response concise.
