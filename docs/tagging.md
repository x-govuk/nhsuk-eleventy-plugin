---
layout: sub-navigation
order: 9
title: Adding tags
description: Use tags to categorise posts and make it easier for readers to browse content on your site.
---

The NHS.UK Eleventy Plugin lets you use tags to categorise pages. Each post can display its list of tags, which link to a page that lists other posts with the same tag. Follow these instructions to enable this feature.

## Create a page that lists all tags used

To include a list of all tags used on your website, create a page that uses the `tags` layout:

```yaml
---
layout: tags
title: Tags
permalink: "/tags/"
---
```

> View an <a href="/example/tags" target="_blank">example tag index (opens in a new tab)</a>

## Create a page for each tag

To generate a page for each tag used on your website, create a page that uses the `tag` layout and paginates `collections.tags` data:

```yaml
---
layout: tag
pagination:
  addAllPagesToCollections: true
  alias: tag
  data: collections.tags
  size: 1
permalink: "/tags/{% raw %}{{ tag | slug }}{% endraw %}/"
eleventyComputed:
  title: "Posts tagged ‘{% raw %}{{ tag }}{% endraw %}’"
eleventyNavigation:
  parent: Tags
---
```

> View an <a href="/example/tags/content" target="_blank">example tag page (opens in a new tab)</a>
