import assert from 'node:assert/strict'
import crypto from 'node:crypto'
import fs from 'node:fs'
import { describe, it } from 'node:test'

import {
  applyContentSecurityPolicy,
  CSP_PLACEHOLDER,
  hashInlineScripts,
  mergeDirectives,
  resolveContentSecurityPolicy,
  scriptOrigin,
  serialisePolicy
} from '../src/csp.js'

const sha256 = (content) =>
  `'sha256-${crypto.createHash('sha256').update(content).digest('base64')}'`

describe('mergeDirectives', () => {
  it('Combines and de-duplicates sources', () => {
    const result = mergeDirectives(
      { 'script-src': ["'self'"] },
      { 'script-src': ["'self'", 'https://example.com'], 'img-src': 'data:' }
    )

    assert.deepEqual(result, {
      'script-src': ["'self'", 'https://example.com'],
      'img-src': ['data:']
    })
  })
})

describe('scriptOrigin', () => {
  it('Returns the origin of an absolute URL', () => {
    assert.equal(
      scriptOrigin('https://analytics.example.com/script.js'),
      'https://analytics.example.com'
    )
  })

  it('Returns the origin of a protocol-relative URL', () => {
    assert.equal(
      scriptOrigin('//analytics.example.com/script.js'),
      'https://analytics.example.com'
    )
  })

  it('Returns nothing for a local URL', () => {
    assert.equal(scriptOrigin('/assets/script.js'), undefined)
  })
})

describe('resolveContentSecurityPolicy', () => {
  it('Is disabled by default', () => {
    assert.equal(resolveContentSecurityPolicy(undefined), undefined)
    assert.equal(resolveContentSecurityPolicy(false), undefined)
  })

  it('Uses default directives when true', () => {
    const result = resolveContentSecurityPolicy(true)

    assert.deepEqual(result.directives['script-src'], ["'self'"])
    assert.deepEqual(result.directives['default-src'], ["'self'"])
  })

  it('Appends configured sources to the defaults', () => {
    const result = resolveContentSecurityPolicy({
      directives: { 'frame-src': ['https://player.vimeo.com'] }
    })

    assert.deepEqual(result.directives['frame-src'], [
      'https://player.vimeo.com'
    ])
    assert.deepEqual(result.directives['default-src'], ["'self'"])
  })

  it('Allows the origin of each script, plus anything it declares', () => {
    const result = resolveContentSecurityPolicy(true, [
      { src: '/assets/local.js' },
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXX',
        csp: {
          'connect-src': ['https://*.google-analytics.com'],
          'img-src': ['https://*.google-analytics.com']
        }
      }
    ])

    assert.deepEqual(result.directives['script-src'], [
      "'self'",
      'https://www.googletagmanager.com'
    ])
    assert.deepEqual(result.directives['connect-src'], [
      "'self'",
      'https://*.google-analytics.com'
    ])
    assert.deepEqual(result.directives['img-src'], [
      "'self'",
      'data:',
      'https://*.google-analytics.com'
    ])
  })
})

describe('hashInlineScripts', () => {
  it('Hashes inline scripts', () => {
    const script = "console.log('hello')"

    assert.deepEqual(hashInlineScripts(`<script>${script}</script>`), [
      sha256(script)
    ])
  })

  it('Hashes inline scripts that have attributes', () => {
    const script = 'window.dataLayer = []'

    assert.deepEqual(
      hashInlineScripts(`<script type="module">${script}</script>`),
      [sha256(script)]
    )
  })

  it('Ignores external scripts, empty scripts and data blocks', () => {
    const html = `
      <script src="/a.js"></script>
      <script defer src="/b.js"></script>
      <script></script>
      <script type="application/ld+json">{"a":1}</script>
    `

    assert.deepEqual(hashInlineScripts(html), [])
  })
})

describe('serialisePolicy', () => {
  it('Joins directives', () => {
    assert.equal(
      serialisePolicy({
        'default-src': ["'self'"],
        'img-src': ["'self'", 'data:']
      }),
      "default-src 'self'; img-src 'self' data:"
    )
  })
})

describe('applyContentSecurityPolicy', () => {
  const settings = resolveContentSecurityPolicy(true)
  const page = (body = '') => `<head>
  <meta http-equiv="Content-Security-Policy" content="${CSP_PLACEHOLDER}">
  <title>Test</title>
</head>
<body>${body}</body>`

  it('Replaces the placeholder with the policy', () => {
    const result = applyContentSecurityPolicy(page(), settings)

    assert.match(
      result,
      /<meta http-equiv="Content-Security-Policy" content="default-src 'self'; /
    )
    assert.doesNotMatch(result, new RegExp(CSP_PLACEHOLDER))
  })

  it('Includes hashes of the page’s inline scripts', () => {
    const script = 'document.body.className += " js"'
    const result = applyContentSecurityPolicy(
      page(`<script>${script}</script>`),
      settings
    )

    assert.ok(result.includes(`script-src 'self' ${sha256(script)};`))
  })

  it('Leaves pages without the placeholder alone', () => {
    const html = '<head></head><body></body>'

    assert.equal(applyContentSecurityPolicy(html, settings), html)
  })
})

describe('base layout', () => {
  it('Uses the placeholder that is replaced after rendering', () => {
    const layout = fs.readFileSync(
      new URL('../src/layouts/base.njk', import.meta.url),
      'utf8'
    )

    assert.ok(layout.includes(`content="${CSP_PLACEHOLDER}"`))
  })
})
