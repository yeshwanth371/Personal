---
name: "Create Daily Science and Technology Notes"
description: "Use when: converting rough daily Science and Technology notes into a dated, verified, UPSC exam-oriented HTML study file with relevant diagrams, schematics, data tables and current-affairs linkages."
argument-hint: "Paste today's rough Science and Technology notes"
agent: "agent"
---

Create today's Science and Technology study-note file from the rough notes supplied below.

## Input

${input:dailyNotes:Paste today's rough Science and Technology notes}

## Required Outcome

Work autonomously through research, file creation, visual planning and validation. Do not merely return a rewritten version in chat.

1. Determine today's actual date from the current session context.
2. Create the file in the Science and Technology notes workspace using this exact naming pattern:
   `Science and Technology - Class MM-DD-YYYY.html`
3. Before writing, inspect the most recent `Science and Technology - Class *.html` file and preserve its established print-friendly HTML structure, typography, colors, responsive behavior and visual conventions. If no previous file exists, use an accessible sibling subject's latest daily HTML note (for example Indian Economy or Internal Security) as a style reference; otherwise create a clean, print-friendly, responsive HTML structure suitable for revision notes.
4. Never modify or overwrite an earlier daily note. If today's exact file already exists, inspect it and ask before replacing it unless the invocation explicitly requests an update.
5. Use ASCII where practical, while preserving standard scientific terminology, units, symbols, organism names, institution names and punctuation.
6. If the rough notes continue a numbered sequence or topic from an earlier class, preserve that numbering and identify the continuation in the header.

## Content Rules

Apply this priority order:

**Original content -> Accuracy -> Organisation -> Relevant additions -> Visual clarity -> Revision value**

- Preserve every important idea and intended meaning from the rough notes.
- Correct grammar, spelling, terminology, definitions, formulas, units, dates, statistics, names of missions, programmes, technologies and institutions where necessary.
- Mark every substantive correction clearly as **[Correction]** and briefly explain the corrected position.
- Add only relevant facts that improve conceptual understanding or competitive-exam value. Mark each such addition as **[Additional]**.
- If a claim cannot be verified reliably, retain it only when useful and mark it **[Verification Required]**. Never guess.
- Keep language simple, precise and easy to revise while retaining correct scientific terminology.
- Highlight important exam points, cause-and-effect links, working principles, applications, limitations and common confusions.
- Explain the underlying principle first, then the technology, then Indian context (programmes, institutions, missions, policies), then issues and way forward.
- Distinguish clearly between: science and technology; basic and applied research; invention and innovation; a technology's principle and its product; a mission's planned, launched and operational/current status; proposals and approved projects; demonstrated results and claimed results.
- For missions, launches, satellites and launch vehicles, state the agency, launch date, vehicle, orbit, objective and current status as of the note date. Do not describe a planned or delayed mission as completed.
- For health, biotechnology and medical topics, keep content educational. Distinguish approved from experimental products, regulatory approvals from trial stages, and do not give medical advice or dosing.
- For defence technology, use only publicly declared specifications and attribute them to the official source; do not speculate on classified capabilities.
- For cyber, AI and emerging technology, keep content conceptual and defensive; do not add operational exploit, misuse or evasion instructions.
- Separate scientific consensus from hypotheses, preliminary findings, media claims and pseudoscience. Attribute disputed or evolving claims.
- For every time-sensitive fact, state the reference date or period, scope, unit and source. Include rankings, counts, budget figures, spectrum or capacity numbers only when verified.
- Verify formulas, chemical equations, SI units, orders of magnitude and arithmetic; explain each variable.
- Do not silently remove uncertain or incorrect original content; represent its corrected meaning in a correction callout.

## Organisation

Use the following where they improve revision:

- Numbered headings and clear subheadings
- Concise bullet points and definitions
- Tables comparing technologies, generations, types, missions, vehicles, vaccines, fuels, reactors, spectrum bands and similar groups
- Working-principle and process flowcharts using arrows
- Timelines for missions, discoveries, programmes and policy milestones
- Callout blocks for corrections, additions, notes and important exam points
- Indian institutions, missions, programmes, policies, laws, indices, awards and international collaborations relevant to the topic
- "In the news" links only when the connection to the day's topic is verified and the event date is stated

For each major topic, use a suitable subset of:

**Concept / Principle -> Types / Classification -> How it Works -> Applications -> Indian Initiatives and Institutions -> Issues / Risks / Ethics -> Way Forward**

Keep additions tied to the day's topics. Do not expand every class into the entire syllabus or add decorative filler, excessive prose, nested cards or irrelevant detail.

## Visual Representations

Use visuals wherever they materially improve conceptual understanding or revision:

- Labelled schematics of structures, devices, cells, organs, circuits, reactors, rockets, satellites and orbits
- Process and working-principle flowcharts (for example, nuclear fission chain, CRISPR editing steps, DNA replication, rocket staging, 5G network slicing)
- Comparison tables and classification trees
- Timelines of missions, programmes and discoveries
- Charts based on verified data (launch counts, R&D expenditure, installed capacity, patents), with axes, units, reference period and source stated
- High-level orbit or trajectory diagrams for space topics, marked as schematic

Follow these rules:

- Prefer lightweight, self-contained HTML/CSS diagrams and inline SVGs that remain legible in screen and print layouts.
- Every visual must have a descriptive title, readable labels, a short caption and source/attribution when based on external material.
- Never fabricate data points, scales, trends, dimensions or sources. Mark non-proportional drawings as **schematic, not to scale**.
- Do not use decorative or irrelevant images. Do not hotlink copyrighted images; use original inline SVG/HTML drawings.
- If a necessary visual cannot be created reliably, insert a conspicuous marker at the relevant location:
  **[Visual Representation Required: type of visual, exact subject, labels/data to include, reference period where applicable, and suggested authoritative source]**
- Mark a useful but non-essential visual as:
  **[Visual Representation Recommended: type of visual and purpose]**
- Do not leave generic markers such as "add diagram here".

## Verification

Verify factual, technical and current claims against reliable open sources. Prefer sources according to the claim:

1. Space: ISRO, Department of Space, IN-SPACe, NSIL; NASA, ESA and other agency pages for international missions
2. Nuclear and energy: Department of Atomic Energy, BARC, NPCIL, IAEA, MNRE, Ministry of Power, IEA
3. Defence technology: DRDO, Ministry of Defence, PIB defence releases
4. Biotechnology, health and agriculture: DBT, DST, ICMR, CDSCO, Ministry of Health and Family Welfare, ICAR, WHO, FSSAI, GEAC
5. IT, electronics, telecom, AI and cyber: MeitY, DoT, TRAI, C-DOT, CERT-In, IndiaAI Mission, ITU, relevant Acts and rules on India Code
6. Policy and R&D: DST, DSIR, CSIR, NITI Aayog, Principal Scientific Adviser's Office, Anusandhan National Research Foundation, Economic Survey, UNESCO Science Report
7. Environment and earth sciences: MoEFCC, MoES, IMD, INCOIS, NCPOR, IPCC
8. Government announcements through PIB; Union Budget documents for allocations
9. NCERT, standard textbooks, IUPAC, BIPM/NIST for scientific definitions, constants and units
10. Peer-reviewed journals, Nature, Science and reputable science journalism for scientific findings and context when primary sources are unavailable

Use web/research tools when needed. Do not rely solely on memory for mission status, launch outcomes, approvals, policy changes, rankings, statistics, records, awards, or recent scientific findings.

When sources disagree, do not silently choose one. Explain differences in definition, date, methodology or status, and use the value most appropriate to the context.

Never upload private rough notes or internal material to external services. Research using minimal, non-sensitive topic queries and public sources only. If a source is inaccessible, state the verification limitation rather than inventing its contents.

## Previous Year Questions (PYQs)

After completing the main content, search for UPSC Civil Services Previous Year Questions directly relevant to today's topics, especially Prelims MCQs and GS Paper III Mains questions on science and technology.

- Prefer official UPSC question papers and answer keys; use reputable compilations only when an official source is unavailable.
- Include only directly related questions. Aim for 3-8 questions depending on topic breadth; do not pad the section to meet a quota.
- For each question provide the year, exam, paper and a descriptive link to the verifying source.
- For Prelims MCQs, include the full question and all options when reproduction is permitted, the verified answer and a brief explanation linking it to the notes. Distinguish an official answer key from a secondary answer; mark unresolved answers **[Verification Required]**.
- For Mains questions, include marks and word limits only when verified, and give a short **suggested answer approach [Additional]** linked to the notes. Make clear this is study guidance, not an official marking scheme.
- If reproduction is not permitted, provide a clearly labelled paraphrase with a link to the original; never present a paraphrase as verbatim text.
- If no authentic PYQ can be verified for a topic, state **[No verified PYQ found for this topic]** rather than fabricating one.

## Mandatory Ending Sections

End the HTML document with all of these sections in this order:

1. **Key Facts for Prelims**
2. **Mains Points**
3. **Common Traps / Confusions**
4. **30-Second Revision**
5. **Previous Year Questions (PYQs)**
6. **Corrections Made**
7. **Visual Representations Required / Recommended**
8. **Open Sources / Further Reading**

In **Mains Points**, include concise analytical points (benefits, risks, ethics, regulation, self-reliance, India's position) and a balanced way forward relevant to the day's topics, not generic slogans.

The visual-representation section must list and link back to every required or recommended marker in the notes. If all necessary visuals were included, explicitly state **[All necessary visual representations included]**.

The final source section must contain descriptive, clickable HTTPS links. Prefer direct official documents, mission pages or releases over home pages. Identify report years and document dates where relevant.

## Quality Checks

After creating the file:

- Validate that core HTML tags are balanced.
- Confirm the title, visible heading and filename use today's date consistently.
- Confirm all mandatory ending sections are present in the required order.
- Confirm substantive corrections and additions are marked `[Correction]` and `[Additional]`. If none were needed, say so in the relevant summary rather than inventing changes.
- Confirm every time-sensitive fact has a reference date or period and source, and that mission, approval and policy statuses are current as of the note date.
- Confirm formulas, units and calculations are consistent.
- Confirm every embedded visual has a title, labels, caption and source where applicable.
- Search for stale facts, misspellings of scientific terms and wrong facts identified during research.
- Ensure diagrams, tables and callouts are responsive and print-friendly. If browser tools are available, inspect the rendered file and fix clipping, overlapping labels or unreadable visuals.
- Run editor diagnostics for the new HTML file when available and fix relevant errors. Report unavailable checks rather than claiming they passed.
- Do not alter unrelated files.

In the final response, provide a clickable link to the created file and briefly state what was verified, including the status of visual representations, time-sensitive data and any unresolved verification limits. Keep the response concise.
