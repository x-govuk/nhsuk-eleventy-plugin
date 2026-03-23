import { highlighter } from 'nhsuk-frontend/dist/nhsuk/lib/highlighter/index.mjs'

/**
 * Highlight code using highlight.js
 *
 * @param {string} string - Code to highlight
 * @param {string} language - Language for syntax highlighting
 * @returns {string} Highlighted code HTML
 */
export function highlightCode(string, language) {
  if (language && highlighter.getLanguage(language)) {
    return highlighter.highlight(string, { language }).value
  }
  return highlighter.highlightAuto(string).value
}

/**
 * Custom fence renderer for nhsuk-frontend code component
 *
 * This markdown-it plugin overrides the default fence renderer to output
 * HTML compatible with the nhsuk-frontend code component, including the
 * copy button.
 *
 * @param {import('markdown-it')} md - markdown-it instance
 */
// Languages that should use the reverse (dark background) style
const reverseStyleLanguages = ['shell']

export default function nhsukCodePlugin(md) {
  md.renderer.rules.fence = (tokens, idx) => {
    const token = tokens[idx]
    const language = token.info.trim()
    const code = highlightCode(token.content, language)
    const reverseClass = reverseStyleLanguages.includes(language)
      ? ' nhsuk-code--reverse'
      : ''

    // Output HTML compatible with nhsuk-frontend code component
    // Button is hidden by default and shown by JavaScript when clipboard API is available
    return `<div class="nhsuk-code nhsuk-code--button${reverseClass}" data-module="nhsuk-code">
  <button type="button" class="nhsuk-button nhsuk-button--secondary nhsuk-button--small nhsuk-code__button nhsuk-js-code-button" hidden>Copy code</button>
  <pre class="nhsuk-code__container" tabindex="0"><code class="nhsuk-code__content">${code}</code></pre>
    </div>`
  }
}
