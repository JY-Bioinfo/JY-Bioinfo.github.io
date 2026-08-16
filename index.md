---
layout: splash
title: "Jinyuan Guo"
subtitle: "AI for Drug Design · Antibodies · Immunology"
header:
  overlay_color: "#1a5276"
  overlay_filter: "0.6"
  actions:
    - label: "Awesome AI Antibody Design"
      url: "https://JY-Bioinfo.github.io/awesome-ai-antibody-design/"
      icon: "fas fa-fw fa-dna"
    - label: "Read the Blog"
      url: "/posts/"
      icon: "fas fa-fw fa-pen-alt"
excerpt: >-
  Researcher in AI-driven drug design. Writing about computational antibody
  engineering, protein language models, and immune repertoire analysis.
feature_row:
  - image_path: ""
    alt: "Awesome AI Antibody Design"
    title: "Awesome AI Antibody Design"
    excerpt: >-
      A curated, verified catalogue of **336 computational methods, 40 software
      packages, 50 data resources and 41 reviews** for antibody, nanobody and TCR
      engineering — organized into 16 routes with a searchable interactive site.
    url: "https://JY-Bioinfo.github.io/awesome-ai-antibody-design/"
    btn_label: "Open the Catalogue"
    btn_class: "btn--primary"
  - image_path: ""
    alt: "Blog"
    title: "Blog & Notes"
    excerpt: >-
      Notes and essays on topics I find interesting: protein language models,
      geometric deep learning, structure prediction, generative antibody design,
      and the physics and CADD foundations underneath.
    url: "/posts/"
    btn_label: "Read Latest Posts"
    btn_class: "btn--success"
  - image_path: ""
    alt: "About"
    title: "About Me"
    excerpt: >-
      Researcher in Shanghai working at the intersection of machine learning and
      drug discovery, with a focus on antibodies and immune repertoire analysis.
    url: "/about/"
    btn_label: "More About Me"
    btn_class: "btn--info"
---

<div class="notice--success" style="margin-top: 1em;">
  <h3 style="margin-top: 0;"><i class="fas fa-dna"></i> Featured: Awesome AI Antibody Design</h3>
  <p>
    A curated catalogue of computational methods, software, data resources and reading for
    antibody engineering. Every entry carries a resolvable identifier and an SPDX licence
    record. Explore the interactive site, browse the 16 routes, or contribute on GitHub.
  </p>
  <p>
    <a href="https://JY-Bioinfo.github.io/awesome-ai-antibody-design/" class="btn btn--primary btn--large">
      <i class="fas fa-fw fa-dna"></i> Explore the Interactive Catalogue
    </a>
    <a href="https://github.com/JY-Bioinfo/awesome-ai-antibody-design" class="btn btn--inverse btn--large">
      <i class="fab fa-fw fa-github"></i> GitHub Repository
    </a>
  </p>
</div>

{% include feature_row %}

<h2 id="recent-posts" style="margin-top: 2em;">Recent Posts</h2>

{% assign recent = site.posts | sort: 'date' | reverse | slice: 0, 5 %}
{% for post in recent %}
<div class="archive__item" style="margin-bottom: 1.25em;">
  <h3 class="archive__item-title no_toc" itemprop="headline">
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  </h3>
  <p class="page__meta" style="margin-bottom: 0.4em;">
    <i class="fas fa-fw fa-calendar-alt" aria-hidden="true"></i>
    {{ post.date | date: "%B %d, %Y" }}
    {% if post.categories %}
      &nbsp;·&nbsp;
      <i class="fas fa-fw fa-folder-open" aria-hidden="true"></i>
      {% for cat in post.categories %}<a href="/categories/#{{ cat | slugify }}">{{ cat }}</a>{% unless forloop.last %}, {% endunless %}{% endfor %}
    {% endif %}
  </p>
  <div class="archive__item-excerpt" itemprop="description">
    {{ post.excerpt | markdownify | strip_html | truncatewords: 40 }}
  </div>
</div>
{% endfor %}

<p><a href="/posts/" class="btn btn--primary">View All Posts &raquo;</a></p>
