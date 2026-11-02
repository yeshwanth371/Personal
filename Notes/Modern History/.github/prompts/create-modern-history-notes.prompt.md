---
name: "Create Daily Modern History Notes"
description: "Use when: converting rough daily Modern History notes into a dated, verified, exam-oriented HTML study file with timelines, schematic maps, comparison tables and flow diagrams."
argument-hint: "Paste today's rough Modern History notes"
agent: "agent"
---

Create today's Modern History study-note file from the rough notes supplied below.

## Input

${input:dailyNotes:Paste today's rough Modern History notes}

## Required Outcome

Work autonomously through research, file creation, visual planning and validation. Do not merely return a rewritten version in chat.

1. Determine today's actual date from the current session context.
2. Create the file in the current workspace using this exact naming pattern:
   `Modern History - Class MM-DD-YYYY.html`
3. Before writing, inspect the most recent `Modern History - Class *.html` file (if any) and preserve its print-friendly HTML structure, typography, colours, responsive behaviour and visual conventions (callout classes `.correction`, `.additional`, `.note`, `.marker`, `.important`, `.answer`, `.flow`, `figure` + `.svg-wrap`, `.timeline`). If no previous file exists, inspect the most recent daily note in a sibling subject folder (for example `Polity`, `Indian Economy` or `World Geography`) and reuse its conventions; otherwise create a clean, print-friendly, responsive HTML structure suitable for revision notes.
4. Never modify or overwrite an earlier daily note. If today's exact file already exists, inspect it and ask before replacing it unless the invocation explicitly requests an update.
5. Use ASCII where practical, while preserving standard historical names, titles, place names and punctuation (for example, give the modern name in brackets where a colonial or older name is used: Bombay (Mumbai), Madras (Chennai)).
6. If the rough notes continue a numbered sequence or theme from an earlier class, keep the numbering and note in the header which earlier parts are not part of today's notes.

## Content Rules

Apply this priority order:

**Original content -> Accuracy -> Organisation -> Relevant additions -> Visual clarity -> Revision value**

- Preserve every important idea and intended meaning from the rough notes.
- Correct grammar, spelling, names of persons, places, organisations, newspapers, acts, treaties, battles, dates, session presidents, venues and causal links where necessary.
- Mark every substantive correction as **[Correction]** with a sequential id (`c01`, `c02`, ...) and briefly explain the corrected position.
- Add only relevant facts that improve conceptual understanding or competitive-exam value. Mark each addition as **[Additional]**.
- If a claim cannot be verified reliably, keep it only when useful and mark it **[Verification Required]**. Never guess.
- Give exact dates (day, month, year) for key events wherever reliably known; otherwise give the year or period and state that the date is approximate or disputed.
- Always state who, what, when, where, why and consequence for important events, acts, movements and personalities.
- Distinguish between: causes and consequences; immediate and long-term causes; moderates and extremists; constructive and non-cooperation programmes; Acts, Resolutions, Commissions, Missions and Pacts; Governor-General and Viceroy; Presidency and Province; revolt and movement; organisation and newspaper/journal.
- Clearly separate official positions, contemporary accounts, nationalist and colonial interpretations, and later scholarly views. Do not present a contested interpretation as settled fact.
- Where an event has multiple names (for example, Revolt of 1857 / First War of Independence / Sepoy Mutiny), state them and the context in which each is used.
- Preserve the sequence of events; use a timeline where chronology matters.
- When the rough notes request something inline (for example, "add map", "add difference between X and Y"), fulfil it at that exact location.
- Do not silently remove uncertain or incorrect original content; represent its corrected meaning in a correction callout.

## Visual Representations

Use visuals wherever they materially improve chronology, geography, comparison, causation or memory. These may include:

- Timelines for movements, constitutional developments, wars, reforms and viceroyalties
- Schematic maps for revolts, battles, partition of Bengal, Princely States, Congress sessions, Gandhian movements, INA campaign, Partition and integration
- Comparison tables (Moderates vs Extremists, Acts of 1909/1919/1935, Ryotwari vs Zamindari vs Mahalwari, Governor-Generals and Viceroys)
- Flowcharts for cause-effect chains, constitutional evolution and negotiation sequences
- Organisation/person-to-event matrices and "who founded / who presided / where / when" tables
- Family trees or succession charts only where they clarify the narrative

Follow these rules:

- **Mandatory area/country maps:** whenever the notes mention a specific area, region, province, princely state, city, port, battlefield, colony or country (for example, Plassey, Buxar, Carnatic, Bengal Presidency, Goa, Pondicherry, Burma, Afghanistan, Tibet, Britain, France, Portugal, Russia, China, Japan, Germany, Italy), add a map showing its location unless it is only a passing reference.
  - Highlight the area/country and label it together with the neighbouring regions, routes, rivers, coasts or sea lanes needed to understand the event.
  - For foreign countries and overseas events, draw a regional or world-level map that also marks India (or the relevant colony) and the connecting routes (for example, the Cape route, Suez Canal, Silk Route, the Durand Line, the Indian Ocean trade routes).
  - Where several places belong to one event, show them together on a single map (for example, the centres of the Revolt of 1857, European trading settlements, Congress session venues, Gandhian satyagraha sites, Partition and princely-state integration) and number or colour them to match the text.
  - Include the era in the map title (for example, "India c. 1857") and show historical names with the modern name in brackets.
  - Place each map immediately next to the text that introduces the area or country, not only at the end.
- **Schematic SVG maps:** draw inline SVG maps from approximate longitude/latitude points using a simple equirectangular projection (x = (lon - lonMin) * scaleX, y = (latMax - lat) * scaleY). For complex maps, generate coordinates with a small throwaway script in a temp folder (outside the notes workspace), then paste the SVG into the HTML. Include a `<title>`/`<desc>`, land/sea fills, labelled places, a legend and a caption.
- Every schematic map's caption must say it is **schematic, drawn from approximate coordinates, not to scale, and not an authoritative boundary map**. Historical boundaries (provinces, princely states, 1947 Radcliffe Line, 1905 Bengal) must be described as approximate.
- Optional interactive map: an OpenStreetMap iframe (`https://www.openstreetmap.org/export/embed.html?bbox=W,S,E,N&layer=mapnik`) with `class="map-embed"`, a `title`, `loading="lazy"`, a link to a larger map and "Map data (c) OpenStreetMap contributors" attribution. Hide it in print.
- Every visual needs a descriptive title, readable labels, a short caption and attribution when externally sourced. Keep visuals responsive and legible in screen and print layouts.
- After adding maps, open the file in the browser and check for overlapping labels, labels on the wrong place, and features drawn on the wrong side of a coastline; fix them.
- Never fabricate dates, places, boundaries, scales or sources. If a necessary visual cannot be created reliably, insert a conspicuous marker at the exact location:
  **[Visual Representation Required: type of visual, exact subject, labels/features/dates to include, and suggested authoritative source]**
- Mark a useful but non-essential visual as:
  **[Visual Representation Recommended: type of visual, exact subject and purpose]**
- Give every marker an id so it can be linked from the visual register. Do not leave generic markers such as "add map here".

## Organisation

Use the following where they improve revision:

- Numbered headings and clear subheadings
- Concise bullet points
- Tables for comparisons, Acts and their provisions, commissions, session lists, newspapers and their editors, and personalities with contributions
- Timelines and flowcharts using HTML arrows
- Callout blocks for corrections, additions, notes and important exam points
- Key items to highlight: dates, Acts, Resolutions, Pacts, Commissions, Missions, Viceroys, Governor-Generals, Congress sessions and presidents, newspapers, organisations, slogans, books and authors, social-reform bodies, tribal and peasant movements, and judicial or administrative reforms

Do not add decorative filler, excessive prose, nested cards or irrelevant detail.

## Verification

Verify factual claims against reliable open sources. Prefer, in this order:

1. NCERT history textbooks (Themes in Indian History, Our Pasts, Modern India by Bipan Chandra, and equivalent official NCERT material)
2. National Archives of India (Abhilekh Patal), Ministry of Culture, Publications Division (including the Collected Works of Mahatma Gandhi), PIB and Government of India archives
3. Constitution of India and Constituent Assembly Debates (for constitutional developments and the lead-up to 1950)
4. Primary documents: texts of Acts, treaties, resolutions, proclamations and reports hosted by official or archival bodies (UK National Archives, legislation.gov.uk, Indian National Congress records, Parliament of India)
5. Archaeological Survey of India (ASI), National Museum and Indian Council of Historical Research (ICHR) for monuments, sites and historiography
6. Britannica and reputable academic publications (university presses, peer-reviewed journals) when an official source is unavailable
7. Standard exam references (Spectrum, Bipan Chandra, Sekhar Bandyopadhyay) only to cross-check, never as the sole source

Use web/research tools when needed. Do not rely on memory alone for exact dates, session venues and presidents, clauses of Acts, casualty figures, treaty terms or disputed claims. When sources differ, do not silently choose one; explain the difference and use the value best supported by primary or NCERT sources.

## Previous Year Questions (PYQs)

After completing the main content, search for UPSC Civil Services (Prelims and Mains) PYQs directly relevant to today's topics. Include related State PSC questions only if clearly labelled and relevant.

- Use web/research tools to find authentic PYQs from official UPSC papers or reputable compilations.
- Include only questions directly related to the day's topics.
- For each PYQ provide: year and paper (for example, "UPSC CSE Prelims 2019"); full question text with all options for Prelims MCQs; the correct answer clearly marked; a brief explanation linked back to the relevant section of the notes; a link to the verifying source.
- For Mains questions, give a short **suggested answer approach [Additional]**, stating that it is study guidance, not an official marking scheme.
- If no authentic PYQ can be verified for a subtopic, state **[No verified PYQ found for this topic]** and list those subtopics. Never invent a question.
- Group them under a dedicated `<h2>` titled **Previous Year Questions (PYQs)**.
- Aim for 3-8 questions depending on topic breadth.

## Mandatory Ending Sections

End the HTML document with all of these sections, in this order:

1. **Key Facts for Prelims**
2. **Mains Points**
3. **Timeline for Quick Revision** (each entry links to the relevant section or figure id)
4. **Personalities, Organisations and Terms** (one-line identification of each name introduced in the notes)
5. **Common Traps / Confusions**
6. **30-Second Revision**
7. **Previous Year Questions (PYQs)**
8. **Corrections Made** (one link per correction id)
9. **Visual Representations Required / Recommended** (list every included map, timeline and figure, and link every marker; if nothing required remains, state **[All necessary visual representations included]**)
10. **Open Sources / Further Reading** (descriptive, clickable HTTPS links; prefer direct archival, NCERT or official pages over home pages; never guess a URL - verify it or use a verified landing page)

## Quality Checks

After creating the file:

- Validate that core HTML tags are balanced and run editor diagnostics; fix relevant errors.
- Confirm the title, visible heading and filename use today's date consistently.
- Confirm `[Correction]`, `[Additional]` and every mandatory ending section are present, and that every correction id is linked from "Corrections Made".
- Confirm every important event has a date (or a stated approximate period) and that dates are internally consistent across the notes, timeline and tables.
- Confirm every area, region, city, battlefield, colony and country that is more than a passing reference has a map (or a precise marker), placed beside its first substantial mention.
- Visually check every SVG map and timeline in the browser for label overlaps and misplaced features.
- Search for misspelt names, wrong dates or mixed-up persons, Acts or sessions identified during research.
- Do not alter unrelated files.

In the final response, provide a clickable link to the created file and briefly state what was verified, the maps/timelines/visuals included, and any items left as [Verification Required]. Keep the response concise.
