---
name: "Create Daily Indian Geography Notes"
description: "Use when: converting rough daily Indian Geography notes into a dated, verified, exam-oriented HTML study file with necessary maps, diagrams and other pictorial representations."
argument-hint: "Paste today's rough Indian Geography notes"
agent: "agent"
---

Create today's Indian Geography study-note file from the rough notes supplied below.

## Input

${input:dailyNotes:Paste today's rough Indian Geography notes}

## Required Outcome

Work autonomously through research, file creation, pictorial planning and validation. Do not merely return a rewritten version in chat.

1. Determine today's actual date from the current session context.
2. Create the file in the current workspace using this exact naming pattern:
   `Indian Geography - Class MM-DD-YYYY.html`
3. Before writing, inspect the most recent `Indian Geography - Class *.html` file and preserve its established print-friendly HTML structure, typography, colors, responsive behavior and visual conventions. If no previous file exists, create a clean, print-friendly, responsive HTML structure suitable for revision notes.
4. Never modify or overwrite an earlier daily note. If today's exact file already exists, inspect it and ask before replacing it unless the invocation explicitly requests an update.
5. Use ASCII where practical, while preserving standard geographical names, scientific terminology and punctuation.

## Content Rules

Apply this priority order:

**Original content -> Accuracy -> Organisation -> Relevant additions -> Visual clarity -> Revision value**

- Preserve every important idea and intended meaning from the rough notes.
- Correct grammar, spelling, terminology, place names, locations, coordinates, dates, statistics, classifications and geographical processes where necessary.
- Mark every substantive correction clearly as **[Correction]** and briefly explain the corrected position.
- Add only relevant facts that improve conceptual understanding or competitive-exam value. Mark each such addition as **[Additional]**.
- If a claim cannot be verified reliably, retain it only when useful and mark it **[Verification Required]**. Never guess.
- Keep language simple, precise and easy to revise while retaining correct geographical terminology.
- Highlight important exam points, spatial relationships, cause-and-effect links and common confusions.
- Distinguish clearly between static geographical facts and time-sensitive data such as population, production, rankings, boundaries or climate records. Include the reference year for time-sensitive data.
- Do not silently remove uncertain or incorrect original content; represent its corrected meaning in a correction callout.

## Pictorial Representations

Use necessary pictorial representations wherever they materially improve spatial understanding, memory or revision. These may include:

- Maps and outline maps
- Labelled diagrams and cross-sections
- River-system and drainage maps
- Physiographic profiles
- Geological or soil profiles
- Climographs and simple charts
- Process diagrams, cycles and flowcharts
- Comparison sketches and location schematics

Follow these rules:

- Prefer clear, lightweight, print-friendly HTML/CSS diagrams, SVGs, Mermaid diagrams or properly licensed/open-source images with attribution.
- Use a map whenever the topic depends on location, distribution, direction, extent, neighbouring regions or a spatial sequence.
- Use a labelled diagram for landforms, atmospheric processes, oceanic processes, drainage patterns, soil profiles and other concepts where text alone is insufficient.
- Every visual must have a descriptive title, readable labels, a short caption and source/attribution when externally sourced.
- Keep visuals responsive and legible in both screen and print layouts. Do not use decorative or irrelevant images.
- Never fabricate a map, boundary, scale, legend, location or source.
- If a necessary visual cannot be created or embedded reliably, insert a conspicuous placeholder at the exact relevant location using this format:
  **[Pictorial Representation Required: type of visual, exact subject, labels/features to include, and suggested authoritative source]**
- Mark a useful but non-essential visual as:
  **[Pictorial Representation Recommended: type of visual and purpose]**
- Do not leave generic markers such as "add map here". Each marker must state exactly what should be shown.

## Organisation

Use the following where they improve revision:

- Numbered headings and clear subheadings
- Concise bullet points
- Tables for comparisons, classifications, regional patterns, resources and timelines
- Maps, labelled diagrams, profiles and climographs
- HTML flowcharts using arrows for geographical processes and cause-effect chains
- Callout blocks for corrections, additions, notes and important exam points
- Important locations, latitudes, longitudes, passes, rivers, mountain ranges, plateaus, plains, coasts, islands, soils, climate regions and resources

Do not add decorative filler, excessive prose, nested cards or irrelevant detail.

## Verification

For factual, scientific and current claims, verify against reliable open sources. Prefer sources in this order:

1. Survey of India and National Atlas and Thematic Mapping Organisation (NATMO)
2. Geological Survey of India (GSI)
3. India Meteorological Department (IMD)
4. Census of India and Office of the Registrar General of India
5. Ministry of Environment, Forest and Climate Change and Forest Survey of India
6. Central Water Commission, Central Ground Water Board and relevant Government of India ministries
7. ISRO, NRSC and Bhuvan
8. NCERT
9. Reputable international sources such as UN agencies, IPCC, USGS and Britannica only when an Indian official source is unavailable

Use web/research tools when needed. Do not rely solely on memory for disputed boundaries, locations, dimensions, rankings, statistics, geological ages or current environmental facts.

## Previous Year Questions (PYQs)

After completing the main content, search for UPSC Civil Services (Prelims and Mains) Previous Year Questions directly relevant to the topics covered in today's notes.

- Use web/research tools to find authentic PYQs from official UPSC papers or reputable compilations.
- Include only questions that are directly related to the day's topics; do not add generic or loosely related questions.
- For each PYQ provide:
  - Year and paper (for example, "UPSC CSE Prelims 2019")
  - Full question text with all options for Prelims MCQs
  - Correct answer clearly marked
  - Brief explanation connecting the answer to the geographical concept or location covered in the notes
- Group them under a dedicated `<h2>` section titled **Previous Year Questions (PYQs)**.
- If no authentic PYQ can be verified for a topic, note it as **[No verified PYQ found for this topic]** rather than fabricating one.
- Aim for 3-8 questions per note depending on topic breadth.

## Mandatory Ending Sections

End the HTML document with all of these sections in this order:

1. **Key Facts for Prelims**
2. **Mains Points**
3. **Map-Based Revision**
4. **Common Traps / Confusions**
5. **30-Second Revision**
6. **Previous Year Questions (PYQs)**
7. **Corrections Made**
8. **Pictorial Representations Required / Recommended**
9. **Open Sources / Further Reading**

The pictorial-representation section must list and link back to every required or recommended marker in the notes. If all necessary visuals were included, explicitly state **[All necessary pictorial representations included]**.

The final source section must contain descriptive, clickable HTTPS links. Prefer direct official pages over home pages.

## Quality Checks

After creating the file:

- Validate that core HTML tags are balanced.
- Confirm the title, visible heading and filename use today's date consistently.
- Confirm `[Correction]`, `[Additional]`, and every mandatory ending section are present.
- Confirm every location-dependent topic has an appropriate map or a precise pictorial-representation marker.
- Confirm every embedded visual has a title, labels, caption and source where applicable.
- Check that maps and diagrams remain legible in responsive and print layouts.
- Search for stale misspellings, incorrect place names or wrong facts identified during research.
- Run editor diagnostics for the new HTML file and fix relevant errors.
- Do not alter unrelated files.

In the final response, provide a clickable link to the created file and briefly state what was verified, including the status of pictorial representations. Keep the response concise.