import process from 'node:process'

import { nhsukEleventyPlugin } from './src/index.js'

export default function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(nhsukEleventyPlugin, {
    url:
      process.env.GITHUB_ACTIONS &&
      'https://x-govuk.github.io/nhsuk-eleventy-plugin/example/',
    header: {
      homeHref: '/product-page',
      service: {
        name: 'Apply for a juggling licence'
      }
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
