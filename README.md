# aalosbeh.github.io — Professional Site

This repository powers **https://aalosbeh.github.io** using the **minima** theme.
Content is data-driven via `_data/` so you can update lists without touching HTML.

## Quick edits
- **News**: edit `_data/news.yml`
- **Publications**: edit `_data/pubs.yml`
- **Teaching**: edit `_data/teaching.yml`
- **Projects**: edit `_data/projects.yml`
- **Service**: edit `_data/service.yml`
- **Styles**: edit `assets/css/style.scss`

## Add a new publication
Open `_data/pubs.yml` and append:
```yml
- year: 2025
  title: "Your Paper Title"
  venue: "Journal/Conference"
  authors: "First Author, Second Author, Anas M. R. AlSobeh"
  pdf: "https://... (optional)"
  doi: "https://doi.org/... (optional)"
  code: "https://github.com/... (optional)"
```

## Build & publish
GitHub Pages builds automatically on commit. Make sure in **Settings → Pages**:
- Source: **Deploy from branch**
- Branch: **main** / **root**
Then visit **https://aalosbeh.github.io**.
