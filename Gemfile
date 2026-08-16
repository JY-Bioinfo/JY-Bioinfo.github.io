source "https://rubygems.org"

gem "jekyll", "~> 4.3"
gem "minimal-mistakes-jekyll"

# If you want GitHub Pages to build remotely, use this instead of the two
# gems above (it pins jekyll 3.9 and the exact GitHub Pages gem versions):
#
#   gem "github-pages", group: :jekyll_plugins

group :jekyll_plugins do
  gem "jekyll-paginate"
  gem "jekyll-sitemap"
  gem "jekyll-gist"
  gem "jekyll-feed"
  gem "jekyll-include-cache"
  gem "jekyll-seo-tag"
end

gem "webrick", "~> 1.8"             # needed by jekyll serve on Ruby >= 3.0

# Windows does not include zoneinfo files; tzinfo and tzinfo-data are needed
# for Jekyll's timezone handling on Windows.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 2.0"
  gem "tzinfo-data"
end
