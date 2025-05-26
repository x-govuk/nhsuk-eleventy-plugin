---
title: Product page
description: Layout for product and marketing pages.
theme: Content presentation
---

> View an [example page that uses this layout (opens in a new tab)](/example/){target=example}

This layout, based on the component used on [GOV.UK product pages](https://github.com/alphagov/product-page-example), can be useful if you need a product or marketing page.

To use this layout, make `product` the value for a page’s `layout` key:

```yaml
---
layout: product
title: Page title
---

Page content
```

In addition to [common front matter options](/layouts/front-matter-options), this layout also accepts the following options:

{% from "govuk/components/table/macro.njk" import govukTable %}
{{ govukTable({
  caption: "Product page front matter options",
  captionClasses: "govuk-table__caption--m",
  firstCellIsHeader: true,
  head: [
    { text: "Name" },
    { text: "Type" },
    { text: "Description" }
  ],
  rows: [
    [
      { text: "headingClasses" },
      { text: "string" },
      { text: "" }
    ],
    [
      { text: "startButton" },
      { text: "object" },
      { text: "Start button. Appears below the title and any description." }
    ],
    [
      { text: "startButton.text" },
      { text: "string" },
      { text: "Text for the start button (default is ‘Get started’)." }
    ],
    [
      { text: "startButton.href" },
      { text: "string" },
      { text: "URL or page the start button should link to." }
    ],
    [
      { text: "image" },
      { text: "object" },
      { text: "Product image. Appears to the right of the page title, and is hidden on mobile." }
    ],
    [
      { text: "image.src" },
      { text: "string" },
      { text: "Path to product image." }
    ],
    [
      { text: "image.alt" },
      { text: "string" },
      { text: "Alternative text for product image." }
    ],
    [
      { text: "groups" },
      { text: "Array" },
      { text: "Card groups. See [groups](#groups)." | markdown }
    ]
  ]
}) }}

{{ govukTable({
  attributes: { id: "groups" },
  caption: "Options for groups",
  captionClasses: "govuk-table__caption--m",
  firstCellIsHeader: true,
  head: [
    { text: "Name" },
    { text: "Type" },
    { text: "Description" }
  ],
  rows: [
    [
      { text: "title" },
      { text: "string" },
      { text: "Title for group of cards." }
    ],
    [
      { text: "caption" },
      { text: "string" },
      { text: "Heading caption that sits above the title for the group of cards." }
    ],
    [
      { text: "description" },
      { text: "string" },
      { text: "Description for the group of cards." }
    ],
    [
      { text: "items" },
      { text: "Array" },
      { text: "Card items. See [items](#items)." | markdown }
    ]
  ]
}) }}

{{ govukTable({
  attributes: { id: "items" },
  caption: "Options for items",
  captionClasses: "govuk-table__caption--m",
  firstCellIsHeader: true,
  head: [
    { text: "Name" },
    { text: "Type" },
    { text: "Description" }
  ],
  rows: [
    [
      { text: "clickable" },
      { text: "boolean" },
      { text: "" }
    ],
    [
      { text: "feature" },
      { text: "boolean" },
      { text: "" }
    ],
    [
      { text: "primary" },
      { text: "boolean" },
      { text: "" }
    ],
    [
      { text: "secondary" },
      { text: "boolean" },
      { text: "" }
    ],
    [
      { text: "heading" },
      { text: "string" },
      { text: "" }
    ],
    [
      { text: "headingClasses" },
      { text: "string" },
      { text: "" }
    ],
    [
      { text: "headingLevel" },
      { text: "number" },
      { text: "" }
    ],
    [
      { text: "href" },
      { text: "string" },
      { text: "" }
    ],
    [
      { text: "description" },
      { text: "string" },
      { text: "" }
    ],
    [
      { text: "image" },
      { text: "object" },
      { text: "Image shown above post content." }
    ],
    [
      { text: "image.src" },
      { text: "string" },
      { text: "Path to post image." }
    ],
    [
      { text: "image.alt" },
      { text: "string" },
      { text: "Alternative text for post image." }
    ]
  ]
}) }}
