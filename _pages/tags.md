---
layout: archive
title: "Posts by Tag"
permalink: /tags/
author_profile: true
---

{% for tag in site.tags %}
  {% capture tag_slug %}{{ tag | first | slugify }}{% endcapture %}
  <h2 id="{{ tag_slug }}" class="archive__subtitle">{{ tag | first }}</h2>
  {% for post in tag.last %}
    {% include archive-single.html %}
  {% endfor %}
{% endfor %}
