import process from 'node:process'

import { govukEleventyPlugin } from '@x-govuk/govuk-eleventy-plugin'

import { layoutFilenames } from './src/index.js'

const serviceName = 'NHS.UK Eleventy Plugin'

export default function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    icons: {
      mask: 'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-icon-mask.svg?raw=true',
      shortcut:
        'https://raw.githubusercontent.com/x-govuk/logo/main/images/favicon.ico',
      touch:
        'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-icon-180.png'
    },
    opengraphImageUrl:
      'https://x-govuk.github.io/nhsuk-eleventy-plugin/assets/opengraph-image.png',
    themeColor: '#2288aa',
    titleSuffix: serviceName,
    showBreadcrumbs: false,
    url:
      process.env.GITHUB_ACTIONS &&
      'https://x-govuk.github.io/nhsuk-eleventy-plugin/',
    stylesheets: ['/assets/application.css'],
    header: {
      homepageUrl: 'https://x-govuk.github.io'
    },
    serviceNavigation: {
      serviceName,
      serviceUrl: process.env.GITHUB_ACTIONS ? '/nhsuk-eleventy-plugin/' : '/',
      search: {
        indexPath: '/search-index.json',
        sitemapPath: '/sitemap/'
      },
      navigation: [
        {
          text: 'Get started',
          href: '/get-started/'
        },
        {
          text: 'Features',
          href: '/features/'
        },
        {
          text: 'Layouts',
          href: '/layouts/'
        }
      ]
    },
    footer: {
      contentLicence: {
        html: 'Licensed under the <a class="govuk-footer__link" href="https://github.com/x-govuk/nhsuk-eleventy-plugin/blob/main/LICENSE.txt">MIT Licence</a>, except where otherwise stated'
      },
      copyright: { text: '© X-GOVUK' },
      meta: {
        items: [
          {
            href: 'https://www.11ty.dev',
            text: 'Documentation for Eleventy (opens in a new tab)',
            attributes: { target: '_blank' }
          }
        ]
      }
    },
    templates: {
      searchIndex: true
    }
  })

  // Collections
  eleventyConfig.addCollection('feature', (collection) =>
    collection
      .getFilteredByGlob(['docs/features/*.md'])
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0))
  )
  eleventyConfig.addCollection('homepage', (collection) =>
    collection
      .getFilteredByGlob([
        'docs/get-started/options.md',
        'docs/features.md',
        'docs/layouts.md'
      ])
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0))
  )
  eleventyConfig.addCollection('layout', (collection) =>
    collection
      .getFilteredByGlob(['docs/layouts/*.md'])
      .sort((a, b) => a.data?.title.localeCompare(b.data?.title))
  )

  // Global data
  eleventyConfig.addGlobalData('layoutFilenames', layoutFilenames)

  // Passthrough
  eleventyConfig.addPassthroughCopy('./docs/assets')

  // Watch
  eleventyConfig.addWatchTarget('./src/')

  // Enable X-GOVUK brand
  eleventyConfig.addNunjucksGlobal('xGovuk', true)

  // Config
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: { input: 'docs' },
    pathPrefix: process.env.GITHUB_ACTIONS && '/nhsuk-eleventy-plugin/'
  }
}
