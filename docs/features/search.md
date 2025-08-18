---
title: Search
description: Make it easier for readers to search for content on your site.
---

The NHS.UK Eleventy Plugin makes it easy to add search to your website.

It works by creating a search index each time you build your site. This JSON file contains the title, description and URL of every page, plus a list of words that appear on that page.

> View an [example search index (JSON, opens in a tab)](/example/search-index.json){target=example}

This search index provides suggestions when users type in the search box in your site’s header.

## Configure the search index

To enable search indexing, set `templates.searchIndex` to `true` in your plugin options.

Or, you can customise the search index by using these options:

{% from "govuk/components/table/macro.njk" import govukTable %}
{{ govukTable({
  caption: "Feature options",
  captionClasses: "govuk-table__caption--m",
  firstCellIsHeader: true,
  head: [
    { text: "Name" },
    { text: "Type" },
    { text: "Description" }
  ],
  rows: [
    [
      { text: "permalink" },
      { text: "string" },
      { text: "Sets the file name and location (default is `/search-index.json`). Set to `false` to disable writing this file to the output folder." | markdown }
    ]
  ]
}) }}

By adding a search index, the search input will automatically appear in the header.

As the site search requires JavaScript, you can add a fallback search method for users who cannot use JavaScript:

```js
import { nhsukEleventyPlugin } from '@x-govuk/nhsuk-eleventy-plugin'

export default function(eleventyConfig) {
  eleventyConfig.addPlugin(nhsukEleventyPlugin, {
    header: {
      search: {
        action: "/search/",
      }
    }
  })
}
```
