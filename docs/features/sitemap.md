---
layout: sub-navigation
title: Sitemap
description: Help readers find content on your site.
---

A sitemap is a page that lists all the pages on your site. It helps users find content when they cannot locate what they’re looking for through your main navigation.

The NHS.UK Eleventy Plugin creates a sitemap page that automatically lists all your site's pages in a clear, organised way.

> View an [example sitemap (opens in a tab)](/example/sitemap){target=example}

## Configure the sitemap page

The plugin enables the sitemap page by default (it is linked to from the 404 page). To turn it off, set `templates.sitemap: false` in your plugin options.

Or, you can customise the page by using these options:

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
      { text: "title" },
      { text: "string" },
      { text: "Sets the page title (default is `'Sitemap'`)." | markdown }
    ],
    [
      { text: "permalink" },
      { text: "string" },
      { text: "Sets the file name and location (default is `'/sitemap/'`). Set to `false` to disable writing this file to the output folder." | markdown }
    ]
  ]
}) }}

## Change how the sitemap page looks

The sitemap page uses the [sitemap layout](/layouts/sitemap). You can override this layout to change how the page appears.

## Replace the sitemap page

You can create your own sitemap page that replaces this one. To do this, create a page that saves to the same location (by default `/sitemap/`).

When you do this, your page will be used instead of the plugin’s default.
