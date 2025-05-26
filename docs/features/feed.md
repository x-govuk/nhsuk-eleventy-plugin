---
layout: sub-navigation
title: RSS feed
description: Allow readers to subscribe to posts and read them in a feed reader.
---

An RSS feed lets users subscribe to your content and read new posts in their feed reader.

The NHS.UK Eleventy Plugin creates a feed using the [XML Atom format](<https://en.wikipedia.org/wiki/Atom_(web_standard)>) that automatically includes your latest posts.

{% set url = options.url | replace("https://", "feed://") %}

> View an [example RSS feed (may open in a feed reader)]({{ "/example/feed.xml" | htmlBaseUrl(url) }})

## Configure the RSS feed

To enable an RSS feed for all posts on your site, set `templates.feed: true` in your plugin options.

Or, you can customise the feed by using these options:

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
      { text: "Sets the feed title (default is `'Feed'`)." | markdown }
    ],
    [
      { text: "collection" },
      { text: "string" },
      { text: "Sets the collection to use for feed entries (default is `'feed'`)" | markdown }
    ],
    [
      { text: "size" },
      { text: "number" },
      { text: "Sets the number of recent entries to include in the feed (default is `20`)" | markdown }
    ],
    [
      { text: "url" },
      { text: "string" },
      { text: "Sets the base URL for the feed (default is value used for `options.url`)" | markdown }
    ],
    [
      { text: "permalink" },
      { text: "string" },
      { text: "Sets the file name and location (default is `'/feed.xml'`). Set to `false` to disable writing this file to the output folder." | markdown }
    ]
  ]
}) }}

## Using a different collection of pages

By default the feed will include all pages that use the `post` layout.

You can create your own collection and set the feed to use entries from that collection instead.

Create a collection in `eleventy.config.js`:

```js
eleventyConfig.addCollection('guide', (collection) => {
  return collection.getFilteredByGlob('app/guide/*.md')
})
```

Then update the `collection` template option to use `'guide'`.

## Change how entries appear in your feed

The RSS feed uses the [feed layout](/layouts/feed). You can override this layout to change how entries appear in your feed.

## Replace the RSS feed

You can create your own RSS feed that replaces this one. To do this, create a page that saves to the same location (by default `/feed.xml`).

When you do this, your page will be used instead of the plugin’s default.
