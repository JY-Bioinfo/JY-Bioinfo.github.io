# JY's Log

A knowledge log on **AI for drug design** — computational antibody and peptide engineering,
protein language models, structure prediction, generative design, and immune repertoire
analysis.

Live at **https://JY-Bioinfo.github.io/**

## What's here

- **Posts** — notes, reading notes and essays on AI-driven drug design.
- **Projects** — the maintained, data-backed outputs linked from this log:
  - [Awesome AI Antibody Design](https://JY-Bioinfo.github.io/awesome-ai-antibody-design/) — a verified catalogue of methods, software, data and reading for antibody engineering, with an interactive lineage roadmap.
  - [Peptide Drug Design Handbook](https://JY-Bioinfo.github.io/peptide-drug-design-handbook/) — a bilingual interactive handbook on peptide drug design (GLP-1-focused).

## Stack

- [Jekyll](https://jekyllrb.com/) with a **custom, self-contained theme** (no remote theme).
- Built and hosted on GitHub Pages.
- Plugins: `jekyll-feed`, `jekyll-sitemap`, `jekyll-seo-tag`.

## Local development

```bash
bundle install
bundle exec jekyll serve --config _config.yml,_config.dev.yml
```

## Writing a post

Add a Markdown file to `_posts/` named `YYYY-MM-DD-title.md`:

```markdown
---
layout: post
title: "My post title"
date: 2026-08-16
categories: [antibodies]
tags: [protein-language-models, structure-prediction]
---

Post content in Markdown...
```

## Licence

- Post content and pages: **CC BY 4.0** (see [LICENSE](LICENSE)).
- The theme code (layouts, includes, SCSS, JS): MIT — reusable freely, keep the attribution in the footer.
