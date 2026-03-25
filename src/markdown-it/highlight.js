import { highlighter } from 'nhsuk-frontend/lib/highlighter/index.mjs'

/**
 * Highlight code using highlight.js
 *
 * @param {string} string - Code to highlight
 * @param {string} language - Language for syntax highlighting
 * @returns {string} Highlighted code HTML
 */
export function highlightCode(string, language) {
  const languages = language ? [language] : undefined
  return highlighter.highlightAuto(string, languages).value
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
    const codeClasses = isReverse
      ? 'nhsuk-code nhsuk-code--button nhsuk-code--reverse'
      : 'nhsuk-code nhsuk-code--button'
    const buttonClasses = isReverse
      ? 'nhsuk-button nhsuk-button--reverse nhsuk-button--small nhsuk-code__button nhsuk-js-code-button'
      : 'nhsuk-button nhsuk-button--secondary nhsuk-button--small nhsuk-code__button nhsuk-js-code-button'

    // Output HTML compatible with nhsuk-frontend code component
    // Button is hidden by default and shown by JavaScript when clipboard API is available
    return `<div class="${codeClasses}" data-module="nhsuk-code">
  <button type="button" class="${buttonClasses}" data-module="nhsuk-button" type="button" hidden>Copy code</button>
  <pre class="nhsuk-code__container"><code class="nhsuk-code__content">${code}</code></pre>
</div>`
  }
}
