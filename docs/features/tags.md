---
layout: sub-navigation
title: Tags
description: Allow readers to browse content by using tags to categorise posts.
---

The NHS.UK Eleventy Plugin lets you use tags to categorise pages. Each post can display its list of tags, which link to a page that lists other posts with the same tag. Follow these instructions to enable this feature.

> View an [example tag list page (opens in a tab)](/example/tags){target=example} and an [example tag page (opens in a tab)](/example/tags/content){target=example}

## Configure tag pages

To enable tag pages on your site, set `templates.tags: true` in your plugin options.

Or, you can customise tag pages by using these options:

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
      { text: "Sets the tag list title (default is `'Tags'`)." | markdown }
    ],
    [
      { text: "tagTitle" },
      { text: "string" },
      { text: "Sets the title for individual tag pages (default is `'Posts tagged ‘{{ tag }}’'`)." | markdown }
    ],
    [
      { text: "permalink" },
      { text: "string" },
      { text: "Sets the folder name and location (default is `'/tags'`). Set to `false` to disable writing files to the output folder." | markdown }
]
]
}) }}

## Change how tag pages look

The tag list page uses the [tags layout](/layouts/tags). You can override this layout to change how the page appears.

The tag page uses the [tag layout](/layouts/tag). You can override this layout to change how the page appears.
