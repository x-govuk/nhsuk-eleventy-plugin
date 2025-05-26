---
order: 2
title: Options
description: Customise the appearance and behaviour of your website.
---

You can add options to the second parameter of the `addPlugin` function in your Eleventy config file.

For example, to add a service name next to the NHS logo in the header, you would add the following:

```js
import { nhsukEleventyPlugin } from '@x-govuk/nhsuk-eleventy-plugin'

export default function(eleventyConfig) {
  eleventyConfig.addPlugin(nhsukEleventyPlugin, {
    header: {
      service: {
        text: 'Example service'
      },
    }
  })
}
```

{% from "govuk/components/table/macro.njk" import govukTable %}
{{ govukTable({
  caption: "Plugin options",
  captionClasses: "govuk-table__caption--m",
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
      { text: "Options for [footer component](https://service-manual.nhs.uk/design-system/components/footer)" | markdown }
    ],
    [
      { text: "header" },
      { text: "object" },
      { text: "Options for [header component](https://service-manual.nhs.uk/design-system/components/header)" | markdown }
    ],
    [
      { text: "headingPermalinks" },
      { text: "boolean" },
      { text: "Add links to headings, making it easier to share sections of a page (default is `false`)" | markdown }
    ],
    [
      { text: "homeKey" },
      { text: "string" },
      { text: "First item in pagination and key to use when referring to the home page for [`eleventyNavigation.parent`](https://www.11ty.dev/docs/plugins/navigation/) (default is `Home`)" | markdown }
    ],
    [
      { text: "icons" },
      { text: "object" },
      { text: "Override NHS.UK site icons" }
    ],
    [
      { text: "icons.mask" },
      { text: "string|boolean" },
      { text: "Override NHS.UK SVG mask icon. Use `false` to not include a mask icon." | markdown }
    ],
    [
      { text: "icons.shortcut" },
      { text: "string|boolean" },
      { text: "Override NHS.UK favicon. Use `false` to not include a favicon." | markdown }
    ],
    [
      { text: "icons.touch" },
      { text: "string|boolean" },
      { text: "Override NHS.UK touch icon. Use `false` to not include a touch icon" | markdown }
    ],
    [
      { text: "opengraphImageUrl" },
      { text: "string" },
      { text: "URL for default Open Graph share image" }
    ],
    [
      { text: "showBreadcrumbs" },
      { text: "boolean" },
      { text: "Show breadcrumb navigation (default is `true` with nested pages)" | markdown }
    ],
    [
      { text: "stylesheets" },
      { text: "Array" },
      { text: "Stylesheets to load instead of default application styles" }
    ],
    [
      { text: "templates" },
      { text: "object" },
      { html: "Configuration for page templates" | markdown }
    ],
    [
      { text: "templates.error404" },
      { text: "object or boolean" },
      { text: "Configuration for the [404 page not found template](/features/404) (default is `true`)" | markdown }
    ],
    [
      { text: "templates.feed" },
      { text: "object or boolean" },
      { text: "Configuration for the [RSS feed template](/features/feed) (default is `false`)" | markdown }
    ],
    [
      { text: "templates.searchIndex" },
      { text: "object or boolean" },
      { text: "Configuration for the [search index template](/features/search) (default is `false`)" | markdown }
    ],
    [
      { text: "templates.sitemap" },
      { text: "object or boolean" },
      { text: "Configuration for the [sitemap template](/features/sitemap) (default is `true`)" | markdown }
    ],
    [
      { text: "templates.tag" },
      { text: "object or boolean" },
      { text: "Configuration for the [tag templates](/features/tags) (default is `false`)" | markdown }
    ],
    [
      { text: "titleSuffix" },
      { text: "string or boolean" },
      { text: "Value to show at the end of the document title (default is `NHS`)" | markdown }
    ],
    [
      { text: "url" },
      { text: "string" },
      { text: "The URL of your website. Optional, but required to have valid canonical URLs in Open Graph meta data." }
    ]
  ]
}) }}
