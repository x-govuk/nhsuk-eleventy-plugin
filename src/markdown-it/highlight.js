import { highlighter } from 'nhsuk-frontend/lib'

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


// Languages that should use the reverse (dark background) style
const reverseStyleLanguages = ['shell']

/**
 * Custom fence renderer for nhsuk-frontend code component
 *
 * This markdown-it plugin overrides the default fence renderer to output
 * HTML compatible with the nhsuk-frontend code component, including the
 * copy button.
 *
 * @import { default as MarkdownIt } from 'markdown-it'
 * @param {MarkdownIt} md - markdown-it instance
 */
export default function nhsukCodePlugin(md) {
  md.renderer.rules.fence = (tokens, idx) => {
    const token = tokens[idx]
    const language = token.info.trim()
    const code = highlightCode(token.content, language)
    const isReverse = reverseStyleLanguages.includes(language)
    const reverseClass = isReverse ? ' nhsuk-code--reverse' : ''
    const buttonClass = isReverse
      ? 'nhsuk-button--reverse'
      : 'nhsuk-button--secondary'

    // Output HTML compatible with nhsuk-frontend code component
    // Button is hidden by default and shown by JavaScript when clipboard API is available
    return `<div class="nhsuk-code nhsuk-code--button${reverseClass}" data-module="nhsuk-code">
  <button type="button" class="nhsuk-button ${buttonClass} nhsuk-button--small nhsuk-code__button nhsuk-js-code-button" hidden>Copy code</button>
  <pre class="nhsuk-code__container"><code class="nhsuk-code__content">${code}</code></pre>
    </div>`
  }
}
