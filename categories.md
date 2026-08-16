---
layout: page
title: "Posts by Category"
permalink: /categories/
---

{% for category in site.categories %}
  {% capture category_slug %}{{ category | first | slugify }}{% endcapture %}
  <h2 id="{{ category_slug }}" class="archive-year">{{ category | first }}</h2>
  {% for post in category.last %}
    {% include archive-single.html post=post %}
  {% endfor %}
{% endfor %}
