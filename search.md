---
layout: page
title: "Search"
permalink: /search/
---

<input type="search" id="search-input" class="search-input" placeholder="Search posts by title, category or tag…" aria-label="Search posts">
<p id="search-hint" class="search-hint">Type to filter posts.</p>
<div id="search-results"></div>

<script src="{{ '/assets/js/search.js' | relative_url }}" data-index="{{ '/search.json' | relative_url }}"></script>
