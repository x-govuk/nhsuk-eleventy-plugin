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
const reverseStyleLanguages = ['bash', 'shell', 'sh', 'zsh']

/**
 * Custom fence renderer for nhsuk-frontend code component
 *
 * This markdown-it plugin overrides the default fence renderer to output
 * HTML compatible with the nhsuk-frontend code component, including the
 * copy button.
 *
 * @param {MarkdownIt} md - markdown-it instance
 */
export default function nhsukCodePlugin(md) {
  md.renderer.rules.fence = (tokens, idx) => {
    const token = tokens[idx]

    // Check if the code block has the { .nhsuk-code--button }
    // class added, to indicate that the copy button should be added.
    const addCopyCode = token.attrs?.some(
      (attr) => attr[0] === 'class' && attr[1]?.includes('nhsuk-code--button')
    )
    const language = token.info.trim()
    const code = highlightCode(token.content, language)
    const isReverse = reverseStyleLanguages.includes(language)
    let codeClasses = 'nhsuk-code'
    if (addCopyCode) codeClasses += ' nhsuk-code--button'
    if (isReverse) codeClasses += ' nhsuk-code--reverse'
    const buttonClasses = isReverse
      ? 'nhsuk-button nhsuk-button--reverse nhsuk-button--small nhsuk-code__button nhsuk-js-code-button'
      : 'nhsuk-button nhsuk-button--secondary nhsuk-button--small nhsuk-code__button nhsuk-js-code-button'

    // Output HTML compatible with nhsuk-frontend code component
    let html = `<div class="${codeClasses}" data-module="nhsuk-code">\n`

    // Button is hidden by default and shown by JavaScript when clipboard API is available
    if (addCopyCode) {
      html += `  <button class="${buttonClasses}" data-module="nhsuk-button" type="button" hidden>Copy code</button>\n`
    }

    html += `  <pre class="nhsuk-code__container"><code class="nhsuk-code__content">${code}</code></pre>\n`
    html += `</div>`

    return html
  }
}

/**
 * @import { default as MarkdownIt } from 'markdown-it'
 */
