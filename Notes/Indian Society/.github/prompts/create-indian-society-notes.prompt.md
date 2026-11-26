---
name: "Create Daily Indian Society Notes"
description: "Use when: converting rough daily Indian Society notes into a dated, verified, exam-oriented HTML study file with data charts, maps, comparison tables, flow diagrams and linked constitutional, legal and policy provisions."
argument-hint: "Paste today's rough Indian Society notes"
agent: "agent"
---

Create today's Indian Society study-note file from the rough notes supplied below.

## Input

${input:dailyNotes:Paste today's rough Indian Society notes}

## Required Outcome

Work autonomously through research, file creation, visual planning and validation. Do not merely return a rewritten version in chat.

1. Determine today's actual date from the current session context.
2. Create the file in the current workspace using this exact naming pattern:
   `Indian Society - Class MM-DD-YYYY.html`
3. Before writing, inspect the most recent `Indian Society - Class *.html` file (if any) and preserve its print-friendly HTML structure, typography, colours, responsive behaviour and visual conventions (callout classes `.correction`, `.additional`, `.note`, `.marker`, `.important`, `.answer`, `.flow`, `figure` + `.svg-wrap`, `.timeline`). If no previous file exists, inspect the most recent daily note in a sibling subject folder (for example `Modern History`, `Indian Geography` or `Polity`) and reuse its conventions; otherwise create a clean, print-friendly, responsive HTML structure suitable for revision notes.
4. Never modify or overwrite an earlier daily note. If today's exact file already exists, inspect it and ask before replacing it unless the invocation explicitly requests an update.
5. Use ASCII where practical, while preserving standard sociological terms, names of thinkers, communities, laws and institutions with their correct spelling and punctuation.
6. If the rough notes continue a numbered sequence or theme from an earlier class, keep the numbering and note in the header which earlier parts are not part of today's notes.

## Scope and Syllabus Mapping

Map the day's topics to the UPSC GS Paper I "Indian Society" syllabus and state the mapping in the header:

- Salient features of Indian society; diversity of India (caste, class, tribe, religion, language, region)
- Role of women and women's organisations
- Population and associated issues
- Poverty and developmental issues
- Urbanisation, problems and remedies
- Effects of globalisation on Indian society
- Social empowerment
- Communalism, regionalism and secularism

Where relevant, also link the topic to GS II (social justice, vulnerable sections, welfare schemes, constitutional provisions) and the Essay paper. Mark such links as **[Additional]**.

## Content Rules

Apply this priority order:

**Original content -> Accuracy -> Organisation -> Relevant additions -> Visual clarity -> Revision value**

- Preserve every important idea and intended meaning from the rough notes.
- Correct grammar, spelling, terminology, names of thinkers, communities, castes, tribes, laws, commissions, schemes, Articles, years and statistics where necessary.
- Mark every substantive correction as **[Correction]** with a sequential id (`c01`, `c02`, ...) and briefly explain the corrected position.
- Add only relevant facts that improve conceptual understanding or competitive-exam value. Mark each addition as **[Additional]**.
- If a claim cannot be verified reliably, keep it only when useful and mark it **[Verification Required]**. Never guess.
- Define every sociological concept in one clear line, give an Indian example, and state how it is used in Mains answers (for example, Sanskritisation, Westernisation, Modernisation, Secularisation, Social mobility, Social capital, Patriarchy, Intersectionality, Ethnicity, Syncretism).
- Attribute every theory, concept and viewpoint to its thinker (for example, M. N. Srinivas, G. S. Ghurye, A. R. Desai, Irawati Karve, Louis Dumont, Andre Beteille, B. R. Ambedkar, Mahatma Gandhi, D. P. Mukerji, S. C. Dube, Yogendra Singh, Veena Das). Never attribute a view without a reliable source.
- Link each social issue to its constitutional provisions (Articles, Fundamental Rights, DPSPs, Fundamental Duties, Schedules), statutes, commissions and committees, judicial pronouncements and government schemes. State the year and the nodal ministry for each.
- Distinguish clearly between: static concepts and time-sensitive data; legal provisions and social practice; official data and estimates by independent bodies; causes and consequences; constitutional status and sociological description (for example, Scheduled Tribes vs tribes in general; caste vs class; religion vs communalism; secularism in India vs the Western model; gender vs sex; sex ratio vs child sex ratio; poverty line vs multidimensional poverty; urbanisation vs urban growth).
- Time-sensitive data (Census, NFHS, SRS, PLFS, MPI, HDI, Gender Gap Index and similar) must carry its source, survey round and reference year. Where the latest figure is not the Census, state that and give the Census figure separately. Do not mix data from different years in one comparison without saying so.
- Where concepts or classifications are contested or have multiple scholarly definitions, present them as such and do not give one as settled fact.
- Use neutral, respectful and non-stereotyping language for castes, tribes, religions, genders, regions and communities. Use constitutional or officially recognised terms (Scheduled Castes, Scheduled Tribes, Other Backward Classes, Persons with Disabilities, Particularly Vulnerable Tribal Groups, transgender persons). Do not generalise about any community; describe patterns with data and sources. Present competing political viewpoints on communalism, reservation, secularism and similar contested subjects as viewpoints, attributed to their proponents, without endorsing any.
- When the rough notes request something inline (for example, "add table", "add difference between X and Y", "add data"), fulfil it at that exact location.
- Do not silently remove uncertain or incorrect original content; represent its corrected meaning in a correction callout.

## Visual Representations

Use visuals wherever they materially improve understanding of distribution, trend, comparison, causation or memory. These may include:

- Charts for demographic and social data: population pyramids, decadal growth, sex ratio and child sex ratio trends, literacy, fertility and mortality rates, urban share of population, poverty and MPI trends, workforce participation
- Schematic maps for state-wise indicators, tribal regions and Scheduled Areas, language families, linguistic states, regional movements, migration corridors, urban agglomerations and aspirational districts
- Comparison tables (for example, caste vs class, joint vs nuclear family, Sanskritisation vs Westernisation, communalism vs communal harmony, Fifth vs Sixth Schedule, sex ratio vs child sex ratio)
- Flowcharts for cause-effect chains (for example, demographic transition, urbanisation to urban problems to remedies, globalisation to social change, women's education to empowerment)
- Timelines for social reform movements, women's movements, population policies, Census milestones, commissions and legislation
- Concept maps, matrices and "thinker - concept - work" tables
- Scheme tables: scheme, year, ministry, target group, key features, limitations

Follow these rules:

- **Data charts:** draw inline SVG or lightweight HTML/CSS charts from verified figures only. Every chart must show the source, survey round and reference year, label axes and units, and state the figure values on or beside the bars or lines. Never plot estimated or unverified values; if only approximate values are available, say so in the caption.
- **Mandatory area maps:** whenever the notes depend on a specific state, region, tribal belt, language area or city cluster, add a map showing its location unless it is only a passing reference.
  - Highlight the area and label it together with the neighbouring states or regions needed to understand the point.
  - For state-wise indicators, use a labelled schematic map or a ranked table with colour bands, and always state the reference year and source.
  - Place each map immediately next to the text that introduces the area, not only at the end.
- **Schematic SVG maps:** draw inline SVG maps from approximate longitude/latitude points using a simple equirectangular projection (x = (lon - lonMin) * scaleX, y = (latMax - lat) * scaleY). For complex maps, generate coordinates with a small throwaway script in a temp folder (outside the notes workspace), then paste the SVG into the HTML. Include a `<title>`/`<desc>`, land/sea fills, labelled places, a legend and a caption.
- Every schematic map's caption must say it is **schematic, drawn from approximate coordinates, not to scale, and not an authoritative boundary map**. Describe the boundaries of states, Scheduled Areas and linguistic regions as approximate. Do not draw or label disputed international boundaries beyond what an official Survey of India map shows.
- Optional interactive map: an OpenStreetMap iframe (`https://www.openstreetmap.org/export/embed.html?bbox=W,S,E,N&layer=mapnik`) with `class="map-embed"`, a `title`, `loading="lazy"`, a link to a larger map and "Map data (c) OpenStreetMap contributors" attribution. Hide it in print.
- Every visual needs a descriptive title, readable labels, a short caption and attribution when externally sourced. Keep visuals responsive and legible in screen and print layouts. Do not use decorative or irrelevant images, and do not use photographs of identifiable individuals or communities.
- After adding charts and maps, open the file in the browser and check for overlapping labels, clipped text, wrong values and features drawn in the wrong place; fix them.
- Never fabricate data, places, boundaries, scales or sources. If a necessary visual cannot be created reliably, insert a conspicuous marker at the exact location:
  **[Visual Representation Required: type of visual, exact subject, labels/values/years to include, and suggested authoritative source]**
- Mark a useful but non-essential visual as:
  **[Visual Representation Recommended: type of visual, exact subject and purpose]**
- Give every marker an id so it can be linked from the visual register. Do not leave generic markers such as "add chart here".

## Organisation

Use the following where they improve revision:

- Numbered headings and clear subheadings
- Concise bullet points
- Tables for comparisons, constitutional provisions, laws, committees and commissions, schemes, data series, thinkers and their concepts
- Timelines and flowcharts using HTML arrows
- Callout blocks for corrections, additions, notes and important exam points
- Key items to highlight: definitions, thinkers and concepts, Articles, Schedules, Acts and amendments, commissions and committees, schemes, indices and their publishers, Census and survey figures with years, landmark judgments, social-reform movements, and women's and tribal organisations
- For each major social issue, use the structure: **Concept -> Status/Data -> Causes -> Consequences -> Constitutional/Legal framework -> Government initiatives -> Challenges/Criticism -> Way forward**, omitting a part only where it does not apply

Do not add decorative filler, excessive prose, nested cards or irrelevant detail.

## Verification

Verify factual claims against reliable open sources. Prefer, in this order:

1. Census of India and the Office of the Registrar General and Census Commissioner (Census data, language, religion, SC/ST and urbanisation tables), and the Sample Registration System (SRS)
2. National Family Health Survey (NFHS, IIPS and the Ministry of Health and Family Welfare), Periodic Labour Force Survey (PLFS), NSO/MoSPI reports, and the National Crime Records Bureau (NCRB) for crime against women, children and vulnerable groups
3. Constitution of India (Legislative Department and Constituent Assembly Debates), India Code for Acts and amendments, and Supreme Court of India and High Court judgments
4. Ministries and statutory bodies: Ministry of Social Justice and Empowerment, Ministry of Tribal Affairs, Ministry of Women and Child Development, Ministry of Minority Affairs, Ministry of Housing and Urban Affairs, Ministry of Rural Development, NCW, NCSC, NCST, NCBC, NHRC, NCPCR, NITI Aayog and PIB
5. Economic Survey, Union Budget documents, Finance Commission reports and Parliamentary Standing Committee reports
6. Reports of commissions and committees (for example, Mandal Commission, Sachar Committee, Kaka Kalelkar Commission, Lokur Committee, Bhuria Commission, Xaxa Committee, Rangarajan and Tendulkar Committees, Towards Equality 1974, High Level Committee on the Status of Women 2015)
7. NCERT Sociology, History and Geography textbooks, and the Anthropological Survey of India (People of India project) and the Linguistic Survey of India
8. International sources, only when an Indian official source is unavailable or for comparison: UNDP (HDI, MPI), UNFPA, UN DESA, UN Women, World Bank, WEF Global Gender Gap Report, ILO, WHO, Britannica and peer-reviewed academic publications
9. Standard exam references (Ram Ahuja, Giddens, M. N. Srinivas, Yogendra Singh, Laxmikanth) only to cross-check, never as the sole source

Use web/research tools when needed. Do not rely on memory alone for statistics, rankings, Census figures, recent amendments, scheme details, committee recommendations or judicial rulings. When sources differ (for example, Census vs NFHS, or older vs revised poverty estimates), do not silently choose one; explain the difference and use the value best supported by the official primary source, giving the year.

## Previous Year Questions (PYQs)

After completing the main content, search for UPSC Civil Services (Prelims and Mains) PYQs directly relevant to today's topics. Include related State PSC questions only if clearly labelled and relevant.

- Use web/research tools to find authentic PYQs from official UPSC papers or reputable compilations.
- Include only questions directly related to the day's topics.
- For each PYQ provide: year and paper (for example, "UPSC CSE Mains 2019 GS I"); full question text, with all options for Prelims MCQs; the correct answer clearly marked; a brief explanation linked back to the relevant section of the notes; a link to the verifying source.
- For Mains questions, give a short **suggested answer approach [Additional]** (introduction, body dimensions, data or examples to cite, conclusion), stating that it is study guidance, not an official marking scheme.
- If no authentic PYQ can be verified for a subtopic, state **[No verified PYQ found for this topic]** and list those subtopics. Never invent a question.
- Group them under a dedicated `<h2>` titled **Previous Year Questions (PYQs)**.
- Aim for 3-8 questions depending on topic breadth.

## Mandatory Ending Sections

End the HTML document with all of these sections, in this order:

1. **Key Facts for Prelims**
2. **Mains Points** (dimensions: social, economic, political, cultural, legal; with examples, data and way forward)
3. **Concepts, Thinkers and Terms** (one-line definition or identification of each concept, thinker, law and body introduced in the notes)
4. **Constitutional Provisions, Laws and Schemes at a Glance** (Article/Act/scheme, year, ministry or body, and one-line significance; each entry links to the relevant section)
5. **Data Snapshot** (key figures with source, survey round and reference year)
6. **Common Traps / Confusions**
7. **30-Second Revision**
8. **Previous Year Questions (PYQs)**
9. **Corrections Made** (one link per correction id)
10. **Visual Representations Required / Recommended** (list every included chart, map, timeline and figure, and link every marker; if nothing required remains, state **[All necessary visual representations included]**)
11. **Open Sources / Further Reading** (descriptive, clickable HTTPS links; prefer direct Census, NFHS, ministry, India Code, court or NCERT pages over home pages; never guess a URL - verify it or use a verified landing page)

## Quality Checks

After creating the file:

- Validate that core HTML tags are balanced and run editor diagnostics; fix relevant errors.
- Confirm the title, visible heading and filename use today's date consistently.
- Confirm `[Correction]`, `[Additional]` and every mandatory ending section are present, and that every correction id is linked from "Corrections Made".
- Confirm every statistic carries a source and reference year and that figures are internally consistent across the notes, charts, tables and the Data Snapshot.
- Confirm every Article, Act, amendment, commission and scheme mentioned is named correctly with its year.
- Confirm every region-dependent topic that is more than a passing reference has a map or table (or a precise marker), placed beside its first substantial mention.
- Visually check every SVG chart, map and timeline in the browser for label overlaps and wrong values.
- Review the wording for neutrality, respectful terminology and absence of stereotypes; ensure contested topics present attributed viewpoints.
- Search for misspelt names of thinkers, communities or laws, wrong years and mixed-up concepts identified during research.
- Do not alter unrelated files.

In the final response, provide a clickable link to the created file and briefly state what was verified, the charts/maps/tables/visuals included, and any items left as [Verification Required]. Keep the response concise.
