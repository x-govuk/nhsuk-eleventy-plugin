---
title: Hub
description: Layout for a curated list of pages or posts, optionally grouped by section.
theme: Content presentation
---

> View an [example page that uses this layout (opens in a new tab)](/example/hub){target=example}

To use this layout, make `hub` the value for a page’s `layout` key:

```yaml
---
layout: hub
title: Page title
---

Page content
```

In addition to [common front matter options](/layouts/front-matter-options), this layout accepts the following options:

{% from "govuk/components/table/macro.njk" import govukTable %}
{{ govukTable({
  caption: "Hub front matter options",
  captionClasses: "govuk-table__caption--m",
  firstCellIsHeader: true,
  head: [
    { text: "Name" },
    { text: "Type" },
    { text: "Description" }
  ],
  rows: [
    [
      { text: "groups" },
      { text: "Array" },
      { text: "Card groups. See [card group](#card-group)." | markdown }
    ]
  ]
}) }}

{{ govukTable({
  attributes: { id: "card-group" },
  caption: "Options for card group",
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
      { text: "Card group title" }
    ],
    [
      { text: "caption" },
      { text: "string" },
      { text: "Caption that sits above the card group title" }
    ],
    [
      { text: "description" },
      { text: "string" },
      { text: "Card group description" }
    ],
    [
      { text: "items" },
      { text: "Array" },
      { text: "Card group items. See [card](#card). Can also be a reference to a [collection](https://www.11ty.dev/docs/collections/)." | markdown }
    ],
    [
      { text: "limit" },
      { text: "number" },
      { text: "Limit of items to show within the card group" }
    ],
    [
      { text: "feature" },
      { text: "boolean" },
      { text: "Use feature cards within the card group (default is `false`)" | markdown }
    ],
    [
      { text: "primary" },
      { text: "boolean" },
      { text: "Use primary cards within the card group (default is `false`)" | markdown }
    ],
    [
      { text: "secondary" },
      { text: "boolean" },
      { text: "Use secondary cards within the card group (default is `false`)" | markdown }
    ]
  ]
}) }}

{{ govukTable({
  attributes: { id: "card" },
  caption: "Options for card",
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
      { text: "Card title" }
    ],
    [
      { text: "href" },
      { text: "string" },
      { text: "Card link" }
    ],
    [
      { text: "date" },
      { text: "string" },
      { text: "Card date" }
    ],
    [
      { text: "description" },
      { text: "string" },
      { text: "Card text description" }
    ],
    [
      { text: "image" },
      { text: "object" },
      { text: "Card image" }
    ],
    [
      { text: "image.src" },
      { text: "string" },
      { text: "Card image URL" }
    ],
    [
      { text: "image.alt" },
      { text: "string" },
      { text: "Alternative text for card image" }
    ]
  ]
}) }}
