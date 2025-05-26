import path from 'node:path'

import Nunjucks from 'nunjucks'

/**
 * Configure Nunjucks environment
 *
 * @see {@link https://mozilla.github.io/nunjucks/api.html#environment}
 * @param {object} eleventyConfig - Eleventy config
 * @returns {Function} Nunjucks environment
 */
export function nunjucksConfig(eleventyConfig) {
  const { includes, input, layouts } = eleventyConfig.dir

  const searchPaths = [
    ...(includes ? [path.join(input, includes)] : []),
    ...(layouts ? [path.join(input, layouts)] : []),
    input,
    './node_modules/@x-govuk/nhsuk-eleventy-plugin/src',
    './node_modules/nhsuk-frontend/packages'
  ]

  /**
   * Set default options, but respect `nunjucksEnvironmentOptions`
   *
   * @see {@link https://www.11ty.dev/docs/languages/nunjucks/#optional-use-your-nunjucks-environment-options}
   */
  const options = {
    autoescape: false,
    lstripBlocks: true,
    trimBlocks: true,
    noCache: process.env === 'development',
    watch: process.env === 'development',
    ...eleventyConfig.nunjucksEnvironmentOptions
  }

  const nunjucks = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader(searchPaths),
    options
  )

  return nunjucks
}
