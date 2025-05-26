---
layout: sub-navigation
order: 2
title: Features
sectionKey: Features
description: Add extra features to help users browse your site.
---

The NHS.UK Eleventy Plugin makes it easy to add common website features and pages. Choose from:

{% for page in collections.feature %}

- [{{ page.data.title }}]({{ page.url }}) – {{ page.data.description }}

{% endfor %}

## Turn off the 404 error page and sitemap

The plugin creates 404 page not found and sitemap pages by default. You can turn these off by setting their options to `false`:

```js
import { nhsukEleventyPlugin } from '@x-govuk/nhsuk-eleventy-plugin'

export default function(eleventyConfig) {
  // Register and configure the plugin
  eleventyConfig.addPlugin(nhsukEleventyPlugin, {
    templates: {
      error404: false,
      sitemap: false
    }
  })

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'docs',
    }
  }
};
```

## Turn on search, RSS feed and tag pages

Search, RSS feed and tag pages are turned off by default. You can turn them on by setting their options to true:

### Use the default settings

```js
import { nhsukEleventyPlugin } from '@x-govuk/nhsuk-eleventy-plugin'

export default function(eleventyConfig) {
  // Register and configure the plugin
  eleventyConfig.addPlugin(nhsukEleventyPlugin, {
    templates: {
      feed: true,
      searchIndex: true,
      tags: true
    }
  })

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'docs',
    }
  }
};
```

### Use your own settings

Each feature has options you can change to meet your needs. For example, to change the location of each of these generated pages:

```js
import { nhsukEleventyPlugin } from '@x-govuk/nhsuk-eleventy-plugin'

export default function(eleventyConfig) {
  // Register and configure the plugin
  eleventyConfig.addPlugin(nhsukEleventyPlugin, {
    templates: {
      error404: {
        permalink: '/errors/404.html'
      },
      sitemap: {
        permalink: '/help/site-map/'
      },
      feed: {
        permalink: '/feeds/posts.xml'
      },
      searchIndex: {
        permalink: '/search/index.json'
      },
      tags: {
        permalink: '/browse/tags/'
      }
    }
  })

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'docs',
    }
  }
};
```
