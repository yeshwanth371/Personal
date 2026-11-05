---
name: "Create Daily Modern World History Notes"
description: "Use when: converting rough daily Modern World History notes (c. 1450 - present) into a dated, verified, exam-oriented HTML study file with timelines, schematic maps, comparison tables and flow diagrams."
argument-hint: "Paste today's rough Modern World History notes"
agent: "agent"
---

Create today's Modern World History study-note file from the rough notes supplied below.

## Input

${input:dailyNotes:Paste today's rough Modern World History notes}

## Required Outcome

Work autonomously through research, file creation, visual planning and validation. Do not merely return a rewritten version in chat.

1. Determine today's actual date from the current session context.
2. Create the file in the current workspace using this exact naming pattern:
   `Modern World History - Class MM-DD-YYYY.html`
3. Before writing, inspect the most recent `Modern World History - Class *.html` file (if any) and preserve its print-friendly HTML structure, typography, colours, responsive behaviour and visual conventions (callout classes `.correction`, `.additional`, `.note`, `.marker`, `.important`, `.answer`, `.flow`, `figure` + `.svg-wrap`, `.timeline`, `.map-embed`). If no previous file exists, inspect the most recent `Modern History - Class *.html` file in the sibling `Modern History` folder (otherwise the latest daily note in another sibling subject folder such as `World Geography`, `Polity` or `Indian Economy`) and reuse its conventions; otherwise create a clean, print-friendly, responsive HTML structure suitable for revision notes.
4. Never modify or overwrite an earlier daily note. If today's exact file already exists, inspect it and ask before replacing it unless the invocation explicitly requests an update.
5. Use ASCII where practical, while preserving standard historical names, titles, place names and punctuation. Give the modern name in brackets where an older name is used (for example, Constantinople (Istanbul), Petrograd (St Petersburg), Batavia (Jakarta), Ceylon (Sri Lanka), Siam (Thailand), Persia (Iran), Peking (Beijing)).
6. If the rough notes continue a numbered sequence or theme from an earlier class, keep the numbering and note in the header which earlier parts are not part of today's notes.

## Scope

The subject covers the UPSC GS-I "History of the World" syllabus: events from the 18th century such as the industrial revolution, world wars, re-drawing of national boundaries, colonization, decolonization, and political philosophies like communism, capitalism and socialism and their forms and effects on society. Typical themes include the Renaissance, Reformation, Age of Discovery, Scientific Revolution, Enlightenment, American Revolution, French Revolution and Napoleon, Industrial Revolution, unification of Italy and Germany, 1848 revolutions, imperialism and the colonisation of Africa and Asia, World War I, Russian Revolution, interwar years, rise of Fascism and Nazism, World War II, the Cold War, decolonization, formation of the UN, Chinese and other revolutions, and the post-1991 world.

- Link world events to India wherever it adds exam value (for example, effects of the Industrial Revolution on Indian handicrafts, the World Wars and the Indian freedom struggle, Russian Revolution and Indian socialism, decolonization and Non-Alignment).
- Do not overlap with the Indian Modern History notes; refer to them only for the India link.

## Content Rules

Apply this priority order:

**Original content -> Accuracy -> Organisation -> Relevant additions -> Visual clarity -> Revision value**

- Preserve every important idea and intended meaning from the rough notes.
- Correct grammar, spelling, names of persons, places, organisations, treaties, battles, revolutions, ideologies, dates and causal links where necessary.
- Mark every substantive correction as **[Correction]** with a sequential id (`c01`, `c02`, ...) and briefly explain the corrected position.
- Add only relevant facts that improve conceptual understanding or competitive-exam value. Mark each addition as **[Additional]**.
- If a claim cannot be verified reliably, keep it only when useful and mark it **[Verification Required]**. Never guess.
- Give exact dates (day, month, year) for key events wherever reliably known; otherwise give the year or period and state that the date is approximate or disputed. Use the calendar system noted in the sources and flag Old Style / New Style (Julian / Gregorian) differences, for example, the February and October Revolutions of 1917.
- Always state who, what, when, where, why and consequence for important events, treaties, revolutions, wars and personalities.
- Distinguish between: causes and consequences; immediate and long-term causes; revolution and reform; colonialism, imperialism and neo-colonialism; capitalism, socialism, communism, fascism and nazism; Allied and Axis (or Central) Powers; treaties, pacts, conferences and declarations; League of Nations and United Nations; Cold War blocs; non-alignment and neutrality; decolonization and independence.
- Clearly separate official positions, contemporary accounts and later scholarly or ideological interpretations (for example, historiographical debates on the causes of World War I or the Cold War). Do not present a contested interpretation as settled fact.
- Where an event has multiple names (for example, Great War / World War I; Great Patriotic War; Opium Wars; Taiping Rebellion), state them and the context in which each is used.
- Preserve the sequence of events; use a timeline where chronology matters.
- When the rough notes request something inline (for example, "add map", "add difference between X and Y"), fulfil it at that exact location.
- Do not silently remove uncertain or incorrect original content; represent its corrected meaning in a correction callout.
- Do not list pure spelling fixes as corrections.

## Visual Representations

Use visuals wherever they materially improve chronology, geography, comparison, causation or memory. These may include:

- Timelines for revolutions, wars, treaties, unification movements and Cold War crises
- Schematic maps for the voyages of discovery, trade routes, Europe before/after Napoleon and the Congress of Vienna, unification of Italy and Germany, partition of Africa, imperial possessions in Asia, alliance systems and fronts of World War I and II, post-war boundary changes, Cold War blocs, decolonization waves and the break-up of the USSR and Yugoslavia
- Comparison tables (capitalism vs socialism vs communism, Fascism vs Nazism, League of Nations vs UN, Allied vs Axis powers, French vs Russian vs Chinese revolutions, Bretton Woods institutions)
- Flowcharts for cause-effect chains (for example, assassination at Sarajevo to World War I, Treaty of Versailles to World War II)
- Treaty-to-terms matrices and "who / where / when / outcome" tables
- Family trees or succession charts only where they clarify the narrative

Follow these rules:

- **Mandatory area/country maps:** whenever the notes mention a specific area, region, country, city, battlefield, colony, sea route or strait (for example, France, Prussia, Austria-Hungary, Ottoman Empire, Russia, Congo, Suez Canal, Gallipoli, Stalingrad, Berlin, Korea, Vietnam, Cuba), add a map showing its location unless it is only a passing reference.
  - Highlight the area and label it together with the neighbouring regions, routes, rivers, coasts or sea lanes needed to understand the event.
  - Where an event involves India or its colonial connection, also mark India and the connecting routes (the Cape route, Suez Canal, Silk Route, Indian Ocean trade routes).
  - Where several places belong to one event, show them together on a single map (for example, the fronts of World War I, the Allied and Axis theatres of World War II, Berlin and the partition of Germany) and number or colour them to match the text.
  - Include the era in the map title (for example, "Europe, 1815" or "Africa, 1914") and show historical names with the modern name in brackets.
  - Place each map immediately next to the text that introduces the area, not only at the end.
- **Schematic SVG maps:** draw inline SVG maps from approximate longitude/latitude points using a simple equirectangular projection (x = (lon - lonMin) * scaleX, y = (latMax - lat) * scaleY). For complex maps, generate coordinates with a small throwaway script in a temp folder (outside the notes workspace), then paste or assemble the SVG into the HTML. Include a `<title>`/`<desc>`, land/sea fills, labelled places, a legend and a caption.
- Every schematic map's caption must say it is **schematic, drawn from approximate coordinates, not to scale, and not an authoritative boundary map**. Historical boundaries (empires, alliance blocs, front lines, post-war borders) must be described as approximate.
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
- Tables for comparisons, treaties and their terms, conferences, alliances, leaders and their contributions, ideologies and their features
- Timelines and flowcharts using HTML arrows
- Callout blocks for corrections, additions, notes and important exam points
- Key items to highlight: dates, treaties, pacts, conferences, declarations, revolutions, wars and battles, leaders, ideologies, organisations (League of Nations, UN and its agencies, NATO, Warsaw Pact, Comintern, etc.), slogans, books and authors, and India links

Do not add decorative filler, excessive prose, nested cards or irrelevant detail.

## Verification

Verify factual claims against reliable open sources. Prefer, in this order:

1. Primary documents hosted by official or archival bodies: texts of treaties, declarations, resolutions and charters (UN Treaty Collection and un.org, Yale Avalon Project, UK National Archives, US National Archives and Office of the Historian, Library of Congress, French and German national archives, Wilson Center Digital Archive)
2. NCERT history textbooks (Themes in World History, Class IX-XII material on world history and related Our Pasts / Contemporary World chapters)
3. Government of India sources (MEA, PIB, National Archives of India) for India-linked facts
4. Museum and institutional pages (Imperial War Museums, National WWII Museum, Smithsonian, British Museum, UNESCO)
5. Britannica and reputable academic publications (university presses, peer-reviewed journals) when an official source is unavailable
6. Standard exam references (Norman Lowe's Mastering Modern World History, Arjun Dev, Jain and Mathur's World History, Vajiram and Ravi, Mrunal) only to cross-check, never as the sole source

Use web/research tools when needed. Do not rely on memory alone for exact dates, treaty clauses, casualty figures, borders or disputed claims. When sources differ, do not silently choose one; explain the difference and use the value best supported by primary or authoritative sources.

## Previous Year Questions (PYQs)

After completing the main content, search for UPSC Civil Services (Prelims and Mains GS-I, plus relevant Optional History paper where clearly labelled) PYQs directly relevant to today's topics. Include related State PSC questions only if clearly labelled and relevant.

- Use web/research tools to find authentic PYQs from official UPSC papers or reputable compilations.
- Include only questions directly related to the day's topics.
- For each PYQ provide: year and paper (for example, "UPSC CSE Mains 2019 GS-I"); full question text with all options for Prelims MCQs; the correct answer clearly marked; a brief explanation linked back to the relevant section of the notes; a link to the verifying source.
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
- Search for misspelt names, wrong dates or mixed-up persons, treaties or conferences identified during research.
- Do not alter unrelated files.

In the final response, provide a clickable link to the created file and briefly state what was verified, the maps/timelines/visuals included, and any items left as [Verification Required]. Keep the response concise.
