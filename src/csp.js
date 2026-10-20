import crypto from 'node:crypto'

/**
 * Placeholder written into the `<meta>` tag by the base layout, replaced with
 * the full policy once each page has been rendered (so that hashes of its
 * inline scripts can be included)
 */
export const CSP_PLACEHOLDER = '__NHSUK_CSP_POLICY__'

/**
 * Policy applied when `contentSecurityPolicy` is enabled. Any sources you add
 * are appended to these.
 */
export const defaultDirectives = {
  'default-src': ["'self'"],
  'script-src': ["'self'"],
  'style-src': ["'self'"],
  'img-src': ["'self'", 'data:'],
  'font-src': ["'self'", 'https://assets.nhs.uk'],
  'connect-src': ["'self'"],
  'object-src': ["'none'"],
  'base-uri': ["'self'"],
  'form-action': ["'self'"]
}

/**
 * Merge sets of directives, combining and de-duplicating sources
 *
 * @param {...object} sets - Objects of directive names and sources
 * @returns {Record<string, string[]>} Merged directives
 */
export function mergeDirectives(...sets) {
  const merged = {}

  for (const set of sets) {
    for (const [name, value] of Object.entries(set || {})) {
      const sources = [value].flat().filter(Boolean)
      merged[name] = [...new Set([...(merged[name] || []), ...sources])]
    }
  }

  return merged
}

/**
 * Get the origin of a script URL, if it points to another website
 *
 * @param {string} src - Script URL
 * @returns {string|undefined} Origin, for example `https://example.com`
 */
export function scriptOrigin(src) {
  if (typeof src !== 'string' || !/^(https?:)?\/\//.test(src)) {
    return undefined
  }

  try {
    return new URL(src, 'https://placeholder.invalid').origin
  } catch {
    return undefined
  }
}

/**
 * Work out the Content Security Policy settings from plugin options
 *
 * Each script's origin is allowed in `script-src`, plus anything the script
 * declares in its own `csp` option, so that adding a script doesn’t also
 * require repeating its origin elsewhere.
 *
 * @param {object|boolean} [option] - `contentSecurityPolicy` plugin option
 * @param {Array<object>} [scripts] - `scripts` plugin option
 * @returns {object|undefined} Settings, or `undefined` if not enabled
 */
export function resolveContentSecurityPolicy(option, scripts = []) {
  if (!option) {
    return undefined
  }

  const settings = option === true ? {} : option

  const fromScripts = scripts.map((script) => ({
    ...(scriptOrigin(script.src) && { 'script-src': scriptOrigin(script.src) }),
    ...script.csp
  }))

  return {
    directives: mergeDirectives(
      defaultDirectives,
      ...fromScripts,
      settings.directives
    )
  }
}

/**
 * Get a `sha256-…` source for each inline script in some HTML
 *
 * @param {string} html - HTML
 * @returns {string[]} CSP hash sources
 */
export function hashInlineScripts(html) {
  const inlineScript = /<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi

  return [...html.matchAll(inlineScript)]
    .filter(([tag, content]) => {
      const openingTag = tag.slice(0, tag.indexOf('>'))
      const type = openingTag.match(/\stype\s*=\s*["']?([^"'\s>]+)/i)?.[1]
      const isJavaScript =
        !type || /^(module|(text|application)\/(x-)?javascript)$/i.test(type)

      return isJavaScript && content && !/\ssrc\s*=/i.test(openingTag)
    })
    .map(([, content]) => {
      const hash = crypto.createHash('sha256').update(content).digest('base64')

      return `'sha256-${hash}'`
    })
}

/**
 * Serialise directives to a Content Security Policy
 *
 * @param {Record<string, string[]>} directives - Directive names and sources
 * @returns {string} Policy
 */
export function serialisePolicy(directives) {
  return Object.entries(directives)
    .map(([name, sources]) => [name, ...sources].join(' '))
    .join('; ')
}

/**
 * Replace the placeholder in a rendered page with its Content Security Policy
 *
 * @param {string} html - Rendered page
 * @param {object} settings - Settings from `resolveContentSecurityPolicy()`
 * @returns {string} Page with policy applied
 */
export function applyContentSecurityPolicy(html, settings) {
  const policy = serialisePolicy(
    mergeDirectives(settings.directives, {
      'script-src': hashInlineScripts(html)
    })
  )

  return html.replace(CSP_PLACEHOLDER, () => policy.replaceAll('"', '&quot;'))
}
