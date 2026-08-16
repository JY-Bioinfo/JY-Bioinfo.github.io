---
layout: page
title: "Posts by Tag"
permalink: /tags/
---

{% for tag in site.tags %}
  {% capture tag_slug %}{{ tag | first | slugify }}{% endcapture %}
  <h2 id="{{ tag_slug }}" class="archive-year">{{ tag | first }}</h2>
  {% for post in tag.last %}
    {% include archive-single.html post=post %}
  {% endfor %}
{% endfor %}
