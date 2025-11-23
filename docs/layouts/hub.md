---
title: Hub
description: Layout for a curated list of pages or posts, optionally grouped by section.
theme: Content presentation
---

> [!NOTE]
> View an [example page that uses this layout (opens in a new tab)](/example/hub){target=example}

To use this layout, make `hub` the value for a page’s `layout` front matter option:

```yaml
---
layout: hub
title: Page title
---

Page content
```

In addition to [common front matter options](/layouts/front-matter-options), this layout accepts the following options:

| Name   | Type  | Description                                                           |
| ------ | ----- | --------------------------------------------------------------------- |
| groups | array | See [options for card groups](#options-for-card-groups-array-objects) |

## Options for card `groups` array objects

| Name        | Type    | Description                                                                                                                                                                           |
| ----------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| title       | string  | Card group title                                                                                                                                                                      |
| caption     | string  | Caption that sits above the card group title                                                                                                                                          |
| description | string  | Card group description                                                                                                                                                                |
| items       | array   | Card group items. See [options for card group items](#options-for-card-group-items-array-objects). Can also be a reference to a [collection](https://www.11ty.dev/docs/collections/). |
| limit       | integer | Limit of items to show within card group                                                                                                                                              |
| type        | string  | Type of card to use within card group. Optional, choose from `primary` (adds chevron) or `secondary` (removes background)                                                             |

## Options for card group `items` array objects

| Name        | Type   | Description                     |
| ----------- | ------ | ------------------------------- |
| title       | string | Card title                      |
| href        | string | Card link                       |
| date        | string | Card date                       |
| description | string | Card text description           |
| image       | object | Card image                      |
| image.src   | string | Card image URL                  |
| image.alt   | string | Alternative text for card image |
