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
  stylesheets: [],
  titleSuffix: 'NHS.UK',
  url: false,
  templates: {
    error404: true,
    sitemap: true // Linked to from default 404 page
  }
}

export function defaultPluginOptions(options, pathPrefix) {
  options.pathPrefix = pathPrefix

  // Let `true` mean the default title suffix (`true` is rendered as a string)
  if (options.titleSuffix === true) {
    delete options.titleSuffix
  }

  if (options.templates?.searchIndex) {
    // Enable search in header
    options.header.search = options?.header?.search || true
    // Add _searchIndexPath to enable search field to be initialised
    options._searchIndexPath =
      options.templates?.searchIndex?.permalink || '/search-index.json'
  }

  return deepmerge(defaults, options)
}
