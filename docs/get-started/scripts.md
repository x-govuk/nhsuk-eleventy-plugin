---
order: 5
title: Scripts
description: Add JavaScript such as web analytics to every page of your website.
---

Use the `scripts` option to add scripts to every page. Each item describes one
script, so you can add as many as you need, from any provider.

```js
import { nhsukEleventyPlugin } from '@x-govuk/nhsuk-eleventy-plugin'

export default function(eleventyConfig) {
  eleventyConfig.addPlugin(nhsukEleventyPlugin, {
    scripts: [
      {
        src: 'https://analytics.example.com/script.js',
        defer: true,
        attributes: {
          'data-website-id': 'your-website-id'
        }
      }
    ]
  })
}
```

Scripts are added after the plugin’s own script, so they do not delay it.

## Script options

| Name        | Type    | Description                                                                                                                                               |
| ----------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| async       | boolean | Add the `async` attribute                                                                                                                                 |
| attributes  | object  | Any other attributes, for example `data-` attributes                                                                                                      |
| crossorigin | string  | Add a `crossorigin` attribute, for example `anonymous`                                                                                                    |
| csp         | object  | Extra [Content Security Policy](/get-started/content-security-policy) sources this script needs, for example `{ 'connect-src': ['https://example.com'] }` |
| defer       | boolean | Add the `defer` attribute                                                                                                                                 |
| inline      | string  | JavaScript to include directly in the page. Use instead of `src`                                                                                          |
| integrity   | string  | Add a [subresource integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Subresource_Integrity) hash                                  |
| position    | string  | Where to add the script: `head` (default) or `bodyEnd`                                                                                                    |
| src         | string  | URL of an external script                                                                                                                                 |
| type        | string  | Add a `type` attribute, for example `module`                                                                                                              |

## Examples

### Google Analytics

```js
scripts: [
  {
    src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX',
    async: true,
    csp: {
      'connect-src': [
        'https://*.google-analytics.com',
        'https://*.analytics.google.com',
        'https://*.googletagmanager.com'
      ],
      'img-src': [
        'https://*.google-analytics.com',
        'https://*.googletagmanager.com'
      ]
    }
  },
  {
    inline: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    `
  }
]
```

### Umami

```js
scripts: [
  {
    src: 'https://analytics.example.com/script.js',
    defer: true,
    attributes: {
      'data-website-id': 'your-website-id',
      'data-domains': 'www.example.com'
    }
  }
]
```

> [!NOTE]
> You may need a privacy notice, or consent from users, before adding analytics
> to your website. Check which rules apply to your service.
