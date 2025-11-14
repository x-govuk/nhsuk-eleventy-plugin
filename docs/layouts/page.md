---
title: Page
description: Simple layout designed for maximum flexibility of content.
theme: Content presentation
---

> [!NOTE]
> View an [example page that uses this layout (opens in a new tab)](/example/page){target=example}

To use this layout, make `page` the value for a page’s `layout` front matter option:

```yaml
---
layout: page
title: Page title
---

Page content
```

## Previous and next pages

If you have a series of pages, you can add link them together by adding previous and next links to the bottom of the page.

To do this, add `showPagination: true` to the page metadata, and use the `order` value to set the order of the pages:

```yaml
---
layout: page
title: Page title
showPagination: true
order: 2
---

This is the second page
```


You can also use the [common front matter options](/layouts/front-matter-options).
