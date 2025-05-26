/**
 * Render a table of contents
 *
 * @param {Function} md - markdown-it instance
 */
export function tableOfContentsRules(md) {
  const { rules } = md.renderer

  rules.toc_open =
    () => `<nav class="nhsuk-contents-list" aria-label="Contents" role="navigation">
    <h2 class="nhsuk-u-visually-hidden">Contents</h2>\n`

  rules.toc_close = () => '</nav>'
}
