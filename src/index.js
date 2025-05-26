import { EleventyHtmlBasePlugin } from '@11ty/eleventy'
import eleventyNavigation from '@11ty/eleventy-navigation'

import { addCollections } from './collections/index.js'
import { eleventyComputed } from './data/eleventy-computed.js'
import { defaultPluginOptions } from './data/options.js'
import { generateAssets } from './events/generate-nhsuk-assets.js'
import { scssExtension } from './extensions/scss.js'
import * as filters from './filters/index.js'
import { md } from './markdown-it.js'
import { nunjucksConfig } from './nunjucks.js'
import { getTemplates } from './utils.js'

export async function nhsukEleventyPlugin(eleventyConfig, pluginOptions = {}) {
  const { pathPrefix } = eleventyConfig

  // Plugin options
  const options = defaultPluginOptions(pluginOptions, pathPrefix)

  // Libraries
  eleventyConfig.setLibrary('md', md(options))
  eleventyConfig.setLibrary('njk', nunjucksConfig(eleventyConfig))

  // Collections
  await addCollections(eleventyConfig)

  // Extensions and template formats
  eleventyConfig.addExtension('scss', scssExtension)
  eleventyConfig.addTemplateFormats('scss')

  // Virtual templates
  const templates = await getTemplates(eleventyConfig)
  for (const [virtualPath, template] of Object.entries(templates)) {
    eleventyConfig.addTemplate(virtualPath, template)
  }

  // Filters
  for (const [name, filter] of Object.entries(filters)) {
    eleventyConfig.addFilter(name, filter)
  }

  // Global data
  eleventyConfig.addGlobalData('options', options)
  eleventyConfig.addGlobalData('eleventyComputed', eleventyComputed)

  // Passthrough
  eleventyConfig.addPassthroughCopy({
    'node_modules/nhsuk-frontend/packages/assets': 'assets'
  })

  // Plugins
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin)
  eleventyConfig.addPlugin(eleventyNavigation)

  // Events
  eleventyConfig.on('eleventy.after', async ({ dir }) => {
    generateAssets(dir, options)
  })
}
