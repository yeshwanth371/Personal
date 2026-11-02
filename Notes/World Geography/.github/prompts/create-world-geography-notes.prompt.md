---
name: "Create Daily World Geography Notes"
description: "Use when: converting rough daily World Geography notes into a dated, verified, exam-oriented HTML study file with embedded schematic maps, diagrams and other pictorial representations."
argument-hint: "Paste today's rough World Geography notes"
agent: "agent"
---

Create today's World Geography study-note file from the rough notes supplied below.

## Input

${input:dailyNotes:Paste today's rough World Geography notes}

## Required Outcome

Work autonomously through research, file creation, map drawing and validation. Do not merely return a rewritten version in chat.

1. Determine today's actual date from the current session context.
2. Create the file in the current workspace using this exact naming pattern:
   `World Geography - Class MM-DD-YYYY.html`
3. Before writing, inspect the most recent `World Geography - Class *.html` file and preserve its print-friendly HTML structure, typography, colours, responsive behaviour and visual conventions (callout classes `.correction`, `.additional`, `.note`, `.marker`, `.important`, `.answer`, `.flow`, `figure` + `.svg-wrap`, `.map-embed`).
4. Never modify or overwrite an earlier daily note. If today's exact file already exists, inspect it and ask before replacing it unless the invocation explicitly requests an update.
5. Use ASCII where practical, while preserving standard geographical names (e.g. Hawai'i, Kama'ehuakanaloa), scientific terminology and punctuation.
6. If the rough notes continue a numbered sequence from an earlier class (for example, "4. Great Plains"), keep the numbering and note in the header which earlier divisions are not part of today's notes.

## Content Rules

Apply this priority order:

**Original content -> Accuracy -> Organisation -> Relevant additions -> Visual clarity -> Revision value**

- Preserve every important idea and intended meaning from the rough notes.
- Correct grammar, spelling, terminology, place names, plate-tectonic settings, ocean currents, straits, political status of territories, dates, rankings and statistics where necessary.
- Mark every substantive correction as **[Correction]** with a sequential id (`c01`, `c02`, ...) and briefly explain the corrected position.
- Add only relevant facts that improve conceptual understanding or competitive-exam value. Mark each addition as **[Additional]**. Link world topics to India where it adds exam value (India's policies, resources, routes or interests).
- If a claim cannot be verified reliably - especially current geopolitics such as negotiations, deals or disputes - keep it only when useful and mark it **[Verification Required]**. Never guess.
- Distinguish static geographical facts from time-sensitive data (production, reserves, rankings, prices, current events). State the reference year and source for every time-sensitive figure.
- When the rough notes request something inline (e.g. "add map", "add difference between X and Y"), fulfil it at that exact location.
- Do not silently remove uncertain or incorrect original content; represent its corrected meaning in a correction callout.

## Maps and Pictorial Representations

World Geography is location-driven. Include a map wherever a topic depends on location, extent, direction, routes, neighbouring regions or spatial sequence.

- **Schematic SVG maps:** draw inline SVG maps from approximate longitude/latitude points using a simple equirectangular projection (x = (lon - lonMin) * scaleX, y = (latMax - lat) * scaleY). For complex maps, generate the coordinates with a small throwaway script in a temp folder (outside the notes workspace), then paste the SVG into the HTML. Include land/sea fills, borders, rivers, labelled features, a legend and a `<title>`/`<desc>`.
- Every schematic map's caption must say it is **schematic, drawn from approximate coordinates, not to scale**, and mention notable distortions (e.g. high-latitude stretching).
- **Interactive map (optional):** embed an OpenStreetMap iframe (`https://www.openstreetmap.org/export/embed.html?bbox=W,S,E,N&layer=mapnik`) with `class="map-embed"`, a `title`, `loading="lazy"`, a link to a larger map and "Map data (c) OpenStreetMap contributors" attribution. Hide it in print.
- Use labelled diagrams, cross-sections, comparison sketches (e.g. bay vs gulf vs strait), HTML flowcharts and tables where text alone is insufficient.
- Every visual needs a descriptive title, readable labels, a short caption and attribution when externally sourced. Keep visuals responsive and legible in screen and print.
- After adding maps, open the file in the browser and check for overlapping labels, labels sitting on the wrong land/water area, and features drawn on the wrong side of a coastline; fix them.
- Never fabricate a boundary, scale or source. If a necessary visual cannot be drawn reliably, insert a conspicuous marker at the exact location:
  **[Pictorial Representation Required: type of visual, exact subject, labels/features to include, and suggested authoritative source]**
- Mark a useful but non-essential visual as:
  **[Pictorial Representation Recommended: type of visual, exact subject and purpose]**
- Give every marker an id so it can be linked from the pictorial register.

## Organisation

Use the following where they improve revision:

- Numbered headings and clear subheadings
- Concise bullet points
- Tables for comparisons, classifications, regional belts, mineral/petroleum regions and producer rankings
- Maps, labelled diagrams, cross-sections and flowcharts
- Callout blocks for corrections, additions, notes and important exam points
- Key locations: mountain ranges, plains, plateaus, rivers and confluences, islands, straits, seas, currents, plate boundaries, resource regions, ports and routes

Do not add decorative filler, excessive prose, nested cards or irrelevant detail.

## Verification

Verify factual, scientific and current claims against reliable open sources. Prefer, in this order:

1. USGS (minerals - Mineral Commodity Summaries; volcanoes and earthquakes), NOAA, NASA Earth Observatory
2. US EIA, IEA, OPEC and national energy agencies for petroleum and gas data
3. UN agencies (FAO, UNEP, IMO, UNCTAD), World Bank, IPCC
4. National government geological/statistical agencies (Natural Resources Canada, INEGI, Geological Survey of Denmark and Greenland, etc.)
5. Government of India sources (PIB, Ministry of Mines, MoPNG, MoES/NCPOR, GSI, MEA) for India-linked facts
6. NCERT (Fundamentals of Physical Geography, Fundamentals of Human Geography)
7. Britannica or reputable academic sources only when an official source is unavailable

Use web/research tools when needed. Do not rely on memory alone for rankings, production shares, reserves, territorial status, dates of current events or disputed claims.

## Previous Year Questions (PYQs)

After completing the main content, search for UPSC Civil Services (Prelims and Mains) PYQs directly relevant to today's topics.

- Use web/research tools to find authentic PYQs from official UPSC papers or reputable compilations.
- Include only questions directly related to the day's topics.
- For each PYQ provide: year and paper; full question text with all options for Prelims MCQs; the correct answer clearly marked; a brief explanation linked back to the relevant section of the notes; a link to the verifying source.
- For Mains questions, give a short **suggested answer approach [Additional]**, stating that it is study guidance, not an official marking scheme.
- If no authentic PYQ can be verified for a subtopic, state **[No verified PYQ found for this topic]** and list those subtopics. Never invent a question.
- Aim for 3-8 questions.

## Mandatory Ending Sections

End the HTML document with all of these sections, in this order:

1. **Key Facts for Prelims**
2. **Mains Points**
3. **Map-Based Revision** (each item links to the relevant map/figure id)
4. **Common Traps / Confusions**
5. **30-Second Revision**
6. **Previous Year Questions (PYQs)**
7. **Corrections Made** (one link per correction id)
8. **Pictorial Representations Required / Recommended** (list every included map/figure and link every marker; if nothing required remains, state **[All necessary pictorial representations included]**)
9. **Open Sources / Further Reading** (descriptive, clickable HTTPS links; prefer direct official pages over home pages; never guess a URL - verify it or use a verified landing page)

## Quality Checks

After creating the file:

- Validate that core HTML tags are balanced and run editor diagnostics; fix relevant errors.
- Confirm the title, visible heading and filename use today's date consistently.
- Confirm `[Correction]`, `[Additional]` and every mandatory ending section are present, and that every correction id is linked from "Corrections Made".
- Confirm every location-dependent topic has a map or a precise pictorial-representation marker.
- Visually check every SVG map in the browser for label overlaps and misplaced features.
- Search for stale misspellings or wrong facts identified during research.
- Do not alter unrelated files.

In the final response, provide a clickable link to the created file and briefly state what was verified, the maps/visuals included, and any items left as [Verification Required]. Keep the response concise.
