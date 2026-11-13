# Personal Notes

Personal study notes for UPSC Civil Services preparation, organised by subject. Every note is a standalone, print-friendly HTML file that opens in any browser. No build step, server or internet connection is needed to read them.

## Purpose

This repository turns rough classroom notes into a reliable revision library for the Civil Services Examination (Prelims and Mains). Each note is built from one class and then:

- **Cleaned and organised:** the teacher's points are kept, restructured into numbered sections, tables, timelines, flow diagrams and maps or schematics.
- **Fact-checked:** names, dates, figures, definitions and current status are checked against official and standard sources. Fixes are labelled, never silent.
- **Extended for the exam:** relevant background, data, case studies and current-affairs links are added and labelled, with Prelims facts, Mains angles and common traps.
- **Practised on real questions:** related UPSC previous year questions are linked to the topic, with answers or answer approaches.

The collection as a whole follows the course as it is taught, so notes build on one another: a note records which earlier part it continues, and some subjects keep section and figure numbering running across consecutive classes. Over time each subject folder becomes a dated, searchable record of the syllabus coverage, with optional consolidated notes for revision.

## Subjects

| Folder | File prefix | Focus (UPSC area) | Kinds of file |
|---|---|---|---|
| `Notes/Indian Economy/` | `Indian Economy - ` | Economy: concepts, data, policy and trends (GS III) | Class notes |
| `Notes/Indian Geography/` | `Indian Geography - ` | Physical and human geography of India, map-based (GS I) | Class notes with detailed maps |
| `Notes/Internal Security/` | `Internal Security - ` | Security challenges, agencies, laws and case studies (GS III) | Class notes |
| `Notes/Modern History/` | `Modern History - ` | Modern Indian and relevant world history (GS I) | Class notes, consolidated notes |
| `Notes/Polity/` | `Indian Polity - ` | Constitution, institutions and governance (GS II) | Class notes, additional notes, topic-wise consolidated notes |
| `Notes/Science and Technology/` | `Science and Technology - ` | Science, technology and Indian programmes: energy, space and related areas (GS III) | Class notes |
| `Notes/World Geography/` | `World Geography - ` | Physical and regional geography of the world, map-based (GS I) | Class notes with maps |

The table lists the subjects and their purpose; the folders themselves are the authoritative record of which classes have been covered.

## Structure

```text
Personal/
├── README.md
└── Notes/
    └── <Subject>/
        ├── .github/
        │   └── prompts/
        │       └── create-<subject>-notes.prompt.md   # prompt that builds a day's notes
        ├── <Subject> - Class MM-DD-YYYY.html          # one file per class
        ├── <Subject> - Additional Notes MM-DD-YYYY.html # optional supplementary note
        ├── <Subject> - Consolidated Notes <range>.html  # optional revision compilation
        └── Consolidated Notes/                          # optional, topic-wise compilations (Polity)
```

Every subject folder follows this pattern; the optional items exist only where a subject needs them. The prompt file names use lower-case, hyphenated subject names, for example `create-modern-history-notes.prompt.md` and `create-polity-notes.prompt.md`.

## File naming

- **Class notes:** `<Subject> - Class MM-DD-YYYY.html`. The date is the class date, so files sort in lesson order within a month.
- **Additional notes:** `<Subject> - Additional Notes MM-DD-YYYY.html`, for supplementary material on a given day.
- **Consolidated notes:** a revision compilation covering several classes or one topic, for example `<Subject> - Consolidated Notes MM-DD to MM-DD-YYYY.html`, or `<Topic> - Consolidated Notes.html` inside `Polity/Consolidated Notes/`.
- Keep the spaces and hyphens exactly as shown. The prompts and the cross-links between notes depend on them (for example, a note links to the previous day's file by name).

## Creating a day's notes

Each subject has a reusable prompt in `.github/prompts/`. To create today's file:

1. Open the subject folder (for example `Notes/Modern History/`) as the workspace in VS Code.
2. In Copilot Chat, run the prompt, for example `/create-modern-history-notes`, and paste the rough class notes.
3. The prompt creates `<Subject> - Class MM-DD-YYYY.html` for today's date. It never overwrites an earlier note, and it asks before replacing an existing file for the same day.

The prompts copy the layout of the most recent note in the folder, so new files keep the same look and structure.

## What each note contains

Notes follow a common format so revision is predictable:

- **Header:** class date, topics, which earlier note it continues, and the sources consulted.
- **Body:** numbered sections, tables, timelines, flow diagrams and inline SVG maps, charts or schematics suited to the subject.
- **Callout labels:**
  - **[Correction]**: a fix to the rough notes, with the reason, and linked from the "Corrections Made" section.
  - **[Additional]**: material added beyond what was taught in class.
  - **[Verification Required]**: a point not yet confirmed against a reliable source.
- **Ending sections:** every note closes with the same core sequence:
  1. Key Facts for Prelims
  2. Mains Points
  3. Common Traps / Confusions
  4. 30-Second Revision
  5. Previous Year Questions (PYQs)
  6. Corrections Made
  7. Open Sources / Further Reading

  Some subjects add subject-specific sections (for example a timeline, a map-based revision list, data and trends, or a list of visuals), and the order can differ slightly. The subject's prompt file is the definitive list.

Visuals are drawn as lightweight inline SVG so they print cleanly. Maps are simplified and **indicative**, not authoritative boundary maps; diagrams marked "schematic" are not to scale.

## How to use

1. Open `Notes/` and choose a subject.
2. Open any `.html` file in a browser. Use **Print → Save as PDF** for an A4 copy; the pages include print styles.
3. Read files in date order to follow the course. Use the consolidated notes and each note's ending sections (Key Facts, Common Traps, 30-Second Revision) for quick revision.
4. Use the PYQ section of each note to practise, and the Sources section to go deeper.
5. Before an exam, search for `[Verification Required]` across a subject folder to find points that still need checking.

## Reading online (GitHub Pages)

The notes are published as a website at `https://yeshwanth371.github.io/Personal/`. The source `.html` files are never edited for the site; `tools/build-site.mjs` builds a copy in `_site/` that adds:

- a home page with subject cards, recently added classes, and a **search box that finds topics across all notes**;
- one page per subject, with classes grouped by month and each class showing its **topics** as links that jump straight to that section of the note, plus a filter box;
- **Home / Subject / Previous class / Next class** links at the top and bottom of each class note (dated class notes only; consolidated and additional notes are listed on the subject page);
- a viewport tag for any note that lacks one, and a link check that reports broken internal links and anchors.

Publishing is automatic: push to `main` and the `Deploy notes to GitHub Pages` workflow rebuilds and deploys the site. New notes need no extra steps provided they follow the file naming above. Topics are read from each note's `<h2>` headings (the closing Key Facts, Mains Points, PYQ and similar sections are skipped), and the page styles and subject icons live in `tools/site-ui.mjs`.

One-time setup: in the repository, go to **Settings → Pages** and set **Source** to **GitHub Actions**.

To build locally (Node 18 or later): `node tools/build-site.mjs`, then open `_site/index.html`. Set `STRICT_LINKS=1` to make broken links fail the build.

## Git workflow

The `Personal/` folder is a Git repository. The `.git` directory holds repository metadata: do not move or edit it.

### Clone the repository

To clone the `main` branch:

```bash
git clone --branch main https://github.com/yeshwanth371/Personal.git
```

### Get incoming changes

Run these commands from the `Personal/` folder:

```bash
git fetch origin
git status -sb
git pull --rebase origin main
```

`git status -sb` shows whether the local branch is behind `origin/main`. Commit or stash local changes before pulling. If a rebase reports conflicts, resolve them, then run `git rebase --continue`.

### Commit and push new notes

```bash
git status
git add "Notes/<Subject>/"
git commit -m "Add <Subject> notes for MM-DD-YYYY"
git push origin main
```

Check `git status` before staging. Commit one subject or one day at a time so the history stays easy to read.

## Adding a new subject

1. Create `Notes/<Subject>/`.
2. Copy an existing prompt into `Notes/<Subject>/.github/prompts/create-<subject>-notes.prompt.md`.
3. Update the prompt's subject name, file prefix and source list.
4. Add the subject to the table at the top of this README.

## Notes

- The folder is synced through OneDrive, so avoid editing the same file on two devices at once.
- Map-heavy geography notes are larger than text-only notes and may open more slowly.
- This is a personal learning archive. Facts in the notes come from the sources each note lists, and anything marked [Verification Required] should be confirmed before you rely on it.
