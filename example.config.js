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
        text: 'Layout examples'
      },
      search: true,
      navigation: {
        items: [
          {
            text: 'Product page',
            href: '/'
          },
          {
            text: 'Collection',
            href: '/collection'
          },
          {
            text: 'Hub',
            href: '/hub'
          },
          {
            text: 'Page',
            href: '/page'
          },
          {
            text: 'Page with sub navigation',
            href: '/page-with-sub-navigation'
          },
          {
            text: 'Post',
            href: '/post'
          },
          {
            text: 'Sitemap',
            href: '/sitemap'
          },
          {
            text: 'Tags',
            href: '/tags'
          }
        ]
      }
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
    templates: {
      searchIndex: true,
      sitemap: true,
      tags: true
    }
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
