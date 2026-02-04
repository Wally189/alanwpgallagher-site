# alanwpgallagher-site (rebuild draft)

## Local preview

From the repository root:

```bash
python -m http.server 8000 --directory site
```

Then open `http://localhost:8000/index.html`.

## Liturgical accent controls

The accent palette is driven by a `data-accent` attribute on the `<body>` element. Supported values:

- `green` (default)
- `violet`
- `white`
- `gold`
- `red`
- `rose`

Example:

```html
<body data-accent="violet">
```

Accents are applied only to borders, callouts, tags, section dividers, and focus states. Backgrounds remain neutral.

## Content source mapping

The build is structured to accept text from `/mnt/data/files.docx`. The file was not present in this environment, so all content areas are currently placeholders marked `[TODO: ...]`. Once the document is available, copy the relevant paragraphs into the matching sections below.

### Page mapping summary

- Home: introduction + section summaries.
- Professional: overview, CV, LinkedIn link, governance overview.
- Professional / CV: summary, experience, education, skills & certifications.
- Professional / Governance: longform governance text, principles, accountability.
- Personal: overview + five pillars introduction.
- Personal / Vocation & Work: pillar text, practices, commitments.
- Personal / Formation: study & reading, spiritual formation.
- Personal / Household & Stewardship: household rhythms, stewardship practices.
- Personal / Community & Relationships: community life, relationships.
- Personal / Rest & Renewal: rest rhythms, renewal practices.
- Journal: overview, work journal hub.
- Journal / September 2025: monthly entry, highlights, notes.
- Contact: contact text + email address.
- Privacy: privacy policy text, data collection, contact details.

## Site structure

```
/site
  index.html
  /professional
    index.html
    cv.html
    governance.html
  /personal
    index.html
    vocation-work.html
    formation.html
    household-stewardship.html
    community-relationships.html
    rest-renewal.html
  /journal
    index.html
    2025-09.html
  /contact
    index.html
  /privacy
    index.html
  /assets
    /css
      main.css
```
