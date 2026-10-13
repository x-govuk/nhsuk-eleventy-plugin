/**
 * Ignore italic styles, rendering emphasised text as plain text.
 *
 * The NHS digital service manual says not to use italics:
 * https://service-manual.nhs.uk/content/formatting#bold-italics-and-underlining
 *
 * NHS.UK frontend also only includes upright regular and bold faces of
 * Frutiger, so browsers would otherwise synthesise “faux italics” by
 * slanting the upright glyphs.
 * 
 * @param {import('markdown-it')} md - markdown-it instance
 */
export function emphasisRules(md) {
  const { rules } = md.renderer

  rules.em_open = () => ''
  rules.em_close = () => ''
}
