source "https://rubygems.org"

gem "jekyll", "~> 4.3"

group :jekyll_plugins do
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
end

gem "webrick", "~> 1.8"             # needed by jekyll serve on Ruby >= 3.0

# Windows does not include zoneinfo files; tzinfo and tzinfo-data are needed
# for Jekyll's timezone handling on Windows.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 2.0"
  gem "tzinfo-data"
end
