---
layout: sub-navigation
order: 2
title: Options
description: Customise the appearance and behaviour of your website.
---

You can add options to the second parameter of the `addPlugin` function in Eleventy config file.

For example, to add a product name to the right of the NHS.UK text in the header, you would add the following:

```js
import { nhsukEleventyPlugin } from '@x-govuk/nhsuk-eleventy-plugin'

export default function(eleventyConfig) {
  eleventyConfig.addPlugin(nhsukEleventyPlugin, {
    header: {
      productName: 'Apply for a juggling licence',
    }
  })
}
```

{% from "components/tables/macro.njk" import table %}
{{ table({
  caption: "Plugin options",
  captionClasses: "nhsuk-table__caption--l",
  firstCellIsHeader: true,
  head: [
    { text: "Name" },
    { text: "Type" },
    { text: "Description" }
  ],
  rows: [
    [
      { text: "footer" },
      { text: "object" },
      { text: "Options for [header component](https://service-manual.nhs.uk/design-system/components/footer)." | markdown }
    ],
    [
      { text: "header" },
      { text: "object" },
      { text: "Options for [header component](https://service-manual.nhs.uk/design-system/components/header)." | markdown }
    ],
    [
      { text: "headingPermalinks" },
      { text: "boolean" },
      { text: "Add links to headings, making it easier to share sections of a page (default is `false`)." | markdown }
    ],
    [
      { text: "homeKey" },
      { text: "string" },
      { text: "First item in pagination and key to use when referring to the home page for [`eleventyNavigation.parent`](https://www.11ty.dev/docs/plugins/navigation/) (default is ‘Home’)." | markdown }
    ],
    [
      { text: "icons" },
      { text: "object" },
      { text: "Override NHS.UK icons." }
    ],
    [
      { text: "icons.mask" },
      { text: "string|boolean" },
      { text: "Override NHS.UK SVG mask icon. Use `false` to not include a mask icon." }
    ],
    [
      { text: "icons.shortcut" },
      { text: "string|boolean" },
      { text: "Override NHS.UK favicon. Use `false` to not include a favicon." }
    ],
    [
      { text: "icons.touch" },
      { text: "string|boolean" },
      { text: "Override NHS.UK touch icon. Use `false` to not include a touch icon." | markdown }
    ],
    [
      { text: "opengraphImageUrl" },
      { text: "string" },
      { text: "URL for default Open Graph share image." }
    ],
    [
      { text: "parentSite" },
      { text: "object" },
      { text: "Website to show as first item in breadcrumbs." }
    ],
    [
      { text: "parentSite.url" },
      { text: "string" },
      { text: "URL for parent site." }
    ],
    [
      { text: "parentSite.name" },
      { text: "string" },
      { text: "Name of parent site." }
    ],
    [
      { text: "searchIndexPath" },
      { text: "string" },
      { text: "Path to search index file." }
    ],
    [
      { text: "showBreadcrumbs" },
      { text: "boolean" },
      { text: "Show breadcrumb navigation (default is `true` with nested pages)." | markdown }
    ],
    [
      { text: "stylesheets" },
      { text: "Array" },
      { text: "Additional stylesheets to load after application styles." }
    ],
    [
      { text: "titleSuffix" },
      { text: "string or boolean" },
      { text: "Value to show at the end of the document title (default is `NHS.UK`)." | markdown }
    ],
    [
      { text: "url" },
      { text: "string" },
      { text: "The URL of your website. Optional, but required to have valid canonical URLs in Open Graph meta data." }
    ]
  ]
}) }}
