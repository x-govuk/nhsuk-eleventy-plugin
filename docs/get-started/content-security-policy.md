---
order: 6
title: Content Security Policy
description: Limit where your pages can load scripts, styles and other resources from.
---

A [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP)
(CSP) tells browsers which sources a page is allowed to load content from. It is
a defence against cross-site scripting and a useful check that you only load
the third-party resources you expect.

The plugin can add a CSP to every page. It is off by default. To turn it on with
the default policy, set `contentSecurityPolicy` to `true`:

```js
import { nhsukEleventyPlugin } from '@x-govuk/nhsuk-eleventy-plugin'

export default function(eleventyConfig) {
  eleventyConfig.addPlugin(nhsukEleventyPlugin, {
    contentSecurityPolicy: true
  })
}
```

## Default policy

The default policy only allows content from your own website, plus fonts from
`assets.nhs.uk`:

```text
default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:;
font-src 'self' https://assets.nhs.uk; connect-src 'self'; object-src 'none';
base-uri 'self'; form-action 'self'
```

Any sources you add are appended to these, rather than replacing them.

## Allowing other sources

Use `contentSecurityPolicy.directives` to allow more sources. For example, to
allow an embedded video player:

```js
contentSecurityPolicy: {
  directives: {
    'script-src': ['https://player.vimeo.com'],
    'frame-src': ['https://player.vimeo.com']
  }
}
```

The origin of each [script](/get-started/scripts) is added to `script-src`
automatically. If a script needs more, such as somewhere to send data, declare it
in that script’s `csp` option so that the policy only changes when the script
does.

### Inline scripts

The NHS.UK Frontend page template contains a small inline script, and you may
have added your own using the [`scripts` option](/get-started/scripts). The
plugin creates a hash of every inline script on each page, so browsers allow
those scripts and no others. You do not need to add `unsafe-inline` or keep
hashes up to date yourself.

### Inline styles

The default policy does not allow `style` attributes. If your content uses them,
for example in embedded HTML, you can allow them with `'unsafe-inline'`:

```js
contentSecurityPolicy: {
  directives: {
    'style-src': ["'unsafe-inline'"]
  }
}
```

## Options

| Name                             | Type              | Description                                                                   |
| -------------------------------- | ----------------- | ----------------------------------------------------------------------------- |
| contentSecurityPolicy            | object or boolean | Use `true` for the default policy, or an object with the options below        |
| contentSecurityPolicy.directives | object            | Extra sources to allow, keyed by directive name. Values are arrays of sources |

## Limitations of a `<meta>` tag

The policy is added to each page in a `<meta>` tag, which works on any host,
including GitHub Pages where you cannot set HTTP headers. Browsers ignore some
directives in a `<meta>` tag, including `frame-ancestors`, `report-uri`,
`report-to` and `sandbox`, and do not support report-only policies.

## Testing your policy

Browsers log a message to the console each time they block something. Build your
site, open your pages with the console open, and check for messages that start
with ‘Refused to…’.
