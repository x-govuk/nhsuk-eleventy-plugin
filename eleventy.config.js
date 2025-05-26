import process from 'node:process'

import { nhsukEleventyPlugin } from './src/index.js'
import { layoutNames } from './src/utils.js'

const serviceName = 'NHS.UK Eleventy Plugin'

export default function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(nhsukEleventyPlugin, {
    titleSuffix: serviceName,
    homeKey: serviceName,
    searchIndexPath: '/search.json',
    showBreadcrumbs: true,
    headingPermalinks: true,
    url:
      process.env.GITHUB_ACTIONS &&
      'https://x-govuk.github.io/nhsuk-eleventy-plugin/',
    header: {
      homeHref: process.env.GITHUB_ACTIONS ? '/nhsuk-eleventy-plugin/' : '/',
      service: {
        name: serviceName
      },
      showSearch: 'true'
    },
    footer: {
      copyright: '© X-GOVUK',
      metaLinks: [
        {
          url: 'https://www.11ty.dev',
          label: 'Documentation for Eleventy (opens in a new tab)',
          attributes: { target: '_blank' }
        }
      ]
    }
  })

  // Collections
  eleventyConfig.addCollection('layout', (collection) =>
    collection
      .getFilteredByGlob(['docs/layouts/*.md'])
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0))
  )
  eleventyConfig.addCollection('homepage', (collection) =>
    collection
      .getFilteredByGlob([
        'docs/options.md',
        'docs/layouts.md',
        'docs/markdown.md'
      ])
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0))
  )

  // Global data
  eleventyConfig.addGlobalData('layoutNames', layoutNames)

  // Passthrough
  eleventyConfig.addPassthroughCopy('./docs/assets')

  // Watch
  eleventyConfig.addWatchTarget('./src/')

  // Config
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: { input: 'docs' },
    pathPrefix: process.env.GITHUB_ACTIONS && '/nhsuk-eleventy-plugin/'
  }
}
