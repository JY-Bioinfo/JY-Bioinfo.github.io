# JY's Log

An index of knowledge projects on **AI for drug design** — computational antibody and
peptide engineering, protein language models, structure prediction, generative design,
and immune repertoire analysis.

Live at **https://JY-Bioinfo.github.io/**

## Projects

This site is a pure project index; each project is a maintained, data-backed site of
its own:

- **Awesome AI Antibody Design** — a verified catalogue of methods, software, data and reading for antibody engineering, with an interactive lineage roadmap.
  - [Roadmap (landing)](https://JY-Bioinfo.github.io/awesome-ai-antibody-design/) · [Catalogue](https://JY-Bioinfo.github.io/awesome-ai-antibody-design/catalogue.html) · [GitHub](https://github.com/JY-Bioinfo/awesome-ai-antibody-design)
- **Peptide Drug Design Handbook** — a bilingual interactive handbook on peptide drug design (GLP-1-focused).
  - [中文手册](https://JY-Bioinfo.github.io/peptide-drug-design-handbook/handbook.zh.html) · [English Handbook](https://JY-Bioinfo.github.io/peptide-drug-design-handbook/handbook.en.html) · [GitHub](https://github.com/JY-Bioinfo/peptide-drug-design-handbook)

## Stack

- [Jekyll](https://jekyllrb.com/) with a **custom, self-contained theme** (no remote theme).
- Built and hosted on GitHub Pages.
- Plugins: `jekyll-sitemap`, `jekyll-seo-tag`.

## Local development

```bash
bundle install
bundle exec jekyll serve --config _config.yml,_config.dev.yml
```

## Licence

- Page content: **CC BY 4.0** (see [LICENSE](LICENSE)).
- The theme code (layouts, includes, SCSS, JS): MIT — reusable freely, keep the attribution in the footer.
