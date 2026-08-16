---
layout: page
title: "Projects"
permalink: /projects/
---

Two knowledge projects are maintained alongside this log:

{% assign projects = site.data.projects %}
{% for p in projects %}
<article class="project-card">
  <div class="project-body">
    <h3 class="project-title">
      <a href="{{ p.url }}"{% if p.external %} target="_blank" rel="noopener noreferrer"{% endif %}>{{ p.name }}</a>
    </h3>
    {% if p.meta %}<p class="project-meta">{{ p.meta }}</p>{% endif %}
    <div class="project-desc">{{ p.description | markdownify }}</div>
    {% if p.links %}
      <p class="project-links">
        {% for link in p.links %}
          <a href="{{ link.url }}"{% if link.external %} target="_blank" rel="noopener noreferrer"{% endif %}>{{ link.label }}</a>{% unless forloop.last %} · {% endunless %}
        {% endfor %}
      </p>
    {% endif %}
  </div>
</article>
{% endfor %}

Posts in this log are notes on related topics; project pages are the maintained,
data-backed outputs.
