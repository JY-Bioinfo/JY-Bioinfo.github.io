# JY-Bioinfo.github.io

Personal blog of **Jinyuan Guo** — notes and essays on AI for drug design, computational
antibody engineering, protein language models, and immune repertoire analysis.

Live at **https://JY-Bioinfo.github.io/**

## Stack

- [Jekyll](https://jekyllrb.com/) with the [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) theme
- Built and hosted on GitHub Pages

## Local development

```bash
bundle install
bundle exec jekyll serve --config _config.yml,_config.dev.yml
```

The `_config.dev.yml` overrides use the locally-installed theme gem instead of the
`remote_theme`, which is what GitHub Pages uses on build.

## Writing a post

Add a Markdown file to `_posts/` named `YYYY-MM-DD-title.md`:

```markdown
---
layout: single
title: "My post title"
date: 2026-08-16
categories: [antibodies]
tags: [protein-language-models, structure-prediction]
toc: true
author_profile: true
read_time: true
---

Post content in Markdown...
```

## Related

- [Awesome AI Antibody Design](https://JY-Bioinfo.github.io/awesome-ai-antibody-design/) — a verified catalogue of computational methods, software, data and reading for antibody engineering
