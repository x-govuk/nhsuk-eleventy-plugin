import process from 'node:process'

import { nhsukEleventyPlugin } from './src/index.js'

export default function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(nhsukEleventyPlugin, {
    url:
      process.env.GITHUB_ACTIONS &&
      'https://x-govuk.github.io/nhsuk-eleventy-plugin/example/',
    header: {
      service: {
        name: 'Layout examples'
      },
      showNav: 'true',
      showSearch: 'true',
      primaryLinks: [
        {
          label: 'Product page',
          url: '/'
        },
        {
          label: 'Collection',
          url: '/collection'
        },
        {
          label: 'Hub',
          url: '/hub'
        },
        {
          label: 'Page',
          url: '/page'
        },
        {
          label: 'Page with sub navigation',
          url: '/page-with-sub-navigation'
        },
        {
          label: 'Post',
          url: '/post'
        },
        {
          label: 'Sitemap',
          url: '/sitemap'
        },
        {
          label: 'Tags',
          url: '/tags'
        }
      ]
    },
    footer: {
      copyright: '© X-GOVUK',
      metaLinks: [
        {
          label: 'Markdown',
          URL: '/markdown'
        },
        {
          label: 'Advanced Markdown',
          URL: '/markdown-advanced'
        }
      ]
    },
    searchIndexPath: '/search.json'
  })

  // Passthrough
  eleventyConfig.addPassthroughCopy('./example/assets')

  // Config
  return {
    dir: {
      input: 'example',
      output: '_site/example'
    },
    pathPrefix: process.env.GITHUB_ACTIONS
      ? '/nhsuk-eleventy-plugin/example/'
      : '/example/'
  }
}
