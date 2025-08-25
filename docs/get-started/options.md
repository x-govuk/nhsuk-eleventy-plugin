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

## Plugin options

| Name                  | Type              | Description                                                                                                                                                                  |
| --------------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| footer                | object            | Options for [footer component](https://service-manual.nhs.uk/design-system/components/footer)                                                                                |
| header                | object            | Options for [header component](https://service-manual.nhs.uk/design-system/components/header)                                                                                |
| headingPermalinks     | boolean           | Add links to headings, making it easier to share sections of a page (default is `false`)                                                                                     |
| homeKey               | string            | First item in pagination and key to use when referring to the home page for [`eleventyNavigation.parent`](https://www.11ty.dev/docs/plugins/navigation/) (default is `Home`) |
| icons                 | object            | Override NHS.UK site icons                                                                                                                                                   |
| icons.mask            | string or boolean | Override NHS.UK SVG mask icon. Use `false` to not include a mask icon.                                                                                                       |
| icons.shortcut        | string or boolean | Override NHS.UK favicon. Use `false` to not include a favicon.                                                                                                               |
| icons.touch           | string or boolean | Override NHS.UK touch icon. Use `false` to not include a touch icon.                                                                                                         |
| opengraphImageUrl     | string            | URL for default Open Graph share image                                                                                                                                       |
| showBreadcrumbs       | boolean           | Show breadcrumb navigation (default is `true` for nested pages)                                                                                                              |
| stylesheets           | array             | Stylesheets to load instead of default application styles                                                                                                                    |
| templates             | object            | Configuration for page templates                                                                                                                                             |
| templates.error404    | object or boolean | Configuration for the [404 page not found template](/features/404) (default is `true`)                                                                                       |
| templates.feed        | object or boolean | Configuration for the [RSS feed template](/features/feed) (default is `false`)                                                                                               |
| templates.searchIndex | object or boolean | Configuration for the [search index template](/features/search) (default is `false`)                                                                                         |
| templates.sitemap     | object or boolean | Configuration for the [sitemap template](/features/sitemap) (default is `true`)                                                                                              |
| templates.tag         | object or boolean | Configuration for the [tag templates](/features/tags) (default is `false`)                                                                                                   |
| themeColor            | string            | Browser theme colour. Must be a hex value (default is `#005eb8`)                                                                                                             |
| titleSuffix           | string            | Value to show at the end of the document title (default is `NHS`)                                                                                                            |
| url                   | string            | The URL of your website. Optional, but required to have valid canonical URLs in Open Graph meta data.                                                                        |
