/* Simple client-side search over search.json */
(function () {
  var input = document.getElementById("search-input");
  var results = document.getElementById("search-results");
  var hint = document.getElementById("search-hint");
  if (!input) return;

  var posts = [];
  var script = document.querySelector('script[src$="search.js"]');
  var idxPath = script ? script.getAttribute("data-index") : "/search.json";

  fetch(idxPath)
    .then(function (r) { return r.json(); })
    .then(function (data) { posts = data; })
    .catch(function () { posts = []; });

  function render(list) {
    if (!list.length) {
      results.innerHTML = "<p>No matches.</p>";
      return;
    }
    var html = "";
    list.forEach(function (p) {
      html +=
        '<article class="archive-item">' +
        '<h3 class="archive-item-title"><a href="' + p.url + '">' + escapeHtml(p.title) + "</a></h3>" +
        '<p class="archive-item-meta">' + (p.date || "") + "</p>" +
        '<p class="archive-item-excerpt">' + escapeHtml(p.excerpt || "") + "</p>" +
        "</article>";
    });
    results.innerHTML = html;
  }

  function escapeHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function apply() {
    var q = input.value.trim().toLowerCase();
    if (!q) {
      if (hint) hint.textContent = "Type to filter posts.";
      results.innerHTML = "";
      return;
    }
    var hits = posts.filter(function (p) {
      var hay = (p.title + " " + (p.excerpt || "") + " " +
                 (p.categories || []).join(" ") + " " + (p.tags || []).join(" ")).toLowerCase();
      return hay.indexOf(q) !== -1;
    });
    if (hint) hint.textContent = hits.length + " result" + (hits.length === 1 ? "" : "s");
    render(hits);
  }

  input.addEventListener("input", apply);
})();
