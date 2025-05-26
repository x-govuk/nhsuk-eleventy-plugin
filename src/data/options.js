import deepmerge from 'deepmerge'

/**
 * Default option values
 *
 * @see {@link https://x-govuk.github.io/nhsuk-eleventy-plugin/options/}
 */
const defaults = {
  header: {
    homeHref: '/'
  },
  homeKey: 'Home',
  icons: {
    mask: '/assets/favicons/favicon.svg',
    shortcut: '/assets/favicons/favicon.ico',
    touch: '/assets/favicons/apple-touch-icon.png'
  },
  parentSite: false,
  stylesheets: [],
  titleSuffix: 'NHS.UK',
  url: false
}

export function defaultPluginOptions(options, pathPrefix) {
  options.pathPrefix = pathPrefix

  // Let `true` mean the default title suffix (`true` is rendered as a string)
  if (options.titleSuffix === true) {
    delete options.titleSuffix
  }

  return deepmerge(defaults, options)
}
