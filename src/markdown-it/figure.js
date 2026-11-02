/**
 * Render a figure
 *
 * @param {import('markdown-it')} md - markdown-it instance
 */
export function figureRules(md) {
  const { rules } = md.renderer

  md.core.ruler.after('image_figures', 'nhsuk_image_width', (state) => {
    for (let index = 0; index < state.tokens.length; index++) {
      const figure = state.tokens[index]

      if (figure.type === 'figure_open') {
        figure.attrJoin('class', 'nhsuk-image')

        const image = state.tokens[index + 1]?.children?.find(
          (token) => token.type === 'image'
        )
        const src = image?.attrGet('src')
        const width = src?.match(
          /#(width-full-page|width-full|width-three-quarters|width-two-thirds|width-one-half|width-one-third|width-one-quarter)$/
        )

        if (width) {
          image.attrSet('src', src.slice(0, width.index))
        }

        const widthClass =
          width?.[1] === 'width-full-page'
            ? 'app-u-full-page'
            : `nhsuk-u-${width?.[1] ?? 'width-full'}`

        figure.attrJoin('class', widthClass)
      }
    }
  })

  rules.figure_open = (tokens, index, options, env, self) => {
    return `<figure${self.renderAttrs(tokens[index])}>\n`
  }

  rules.figcaption_open = () => '<figcaption class="nhsuk-image__caption">\n'
}
