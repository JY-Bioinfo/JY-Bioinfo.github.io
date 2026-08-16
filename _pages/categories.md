---
layout: archive
title: "Posts by Category"
permalink: /categories/
author_profile: true
---

{% for category in site.categories %}
  {% capture category_slug %}{{ category | first | slugify }}{% endcapture %}
  <h2 id="{{ category_slug }}" class="archive__subtitle">{{ category | first }}</h2>
  {% for post in category.last %}
    {% include archive-single.html %}
  {% endfor %}
{% endfor %}
