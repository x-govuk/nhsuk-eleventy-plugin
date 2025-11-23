---
title: Product page
description: Layout for product and marketing pages.
theme: Content presentation
---

> [!NOTE]
> View an [example page that uses this layout (opens in a new tab)](/example/){target=example}

This layout, based on the component used on [GOV.UK product pages](https://github.com/alphagov/product-page-example), can be useful if you need a product or marketing page.

To use this layout, make `product` the value for a page’s `layout` front matter option:

```yaml
---
layout: product
title: Page title
---

Page content
```

## Front matter options

In addition to [common front matter options](/layouts/front-matter-options), this layout also accepts the following options:

| Name             | Type   | Description                                                                    |
| ---------------- | ------ | ------------------------------------------------------------------------------ |
| headingClasses   | string | Classes to use for heading in masthead                                         |
| startButton      | object | Start button. Appears below the title and any description.                     |
| startButton.text | string | Text for the start button (default is `Get started`)                           |
| startButton.href | string | URL or page the start button should link to                                    |
| image            | object | Product image. Appears to the right of the page title, and is hidden on mobile |
| image.src        | string | Path to product image                                                          |
| image.alt        | string | Alternative text for product image                                             |
| groups           | array  | See [options for card groups](#options-for-card-groups-array-objects)          |

### Options for card `groups` array objects

| Name        | Type    | Description                                                                                                                                                                           |
| ----------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| title       | string  | Card group title                                                                                                                                                                      |
| caption     | string  | Caption that sits above the card group title                                                                                                                                          |
| description | string  | Card group description                                                                                                                                                                |
| items       | array   | Card group items. See [options for card group items](#options-for-card-group-items-array-objects). Can also be a reference to a [collection](https://www.11ty.dev/docs/collections/). |
| limit       | integer | Limit of items to show within card group                                                                                                                                              |
| type        | string  | Type of card to use within card group. Optional, choose from `primary` (adds chevron) or `secondary` (removes background)                                                             |

### Options for card group `items` array objects

| Name        | Type   | Description                     |
| ----------- | ------ | ------------------------------- |
| title       | string | Card title                      |
| href        | string | Card link                       |
| date        | string | Card date                       |
| description | string | Card text description           |
| image       | object | Card image                      |
| image.src   | string | Card image URL                  |
| image.alt   | string | Alternative text for card image |
