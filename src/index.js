import path from 'node:path'

import { EleventyHtmlBasePlugin } from '@11ty/eleventy'
import eleventyNavigation from '@11ty/eleventy-navigation'
import { addCollections } from '@x-govuk/govuk-eleventy-plugin/collections'
import { scssExtension } from '@x-govuk/govuk-eleventy-plugin/extensions'
import {
  getLayoutTemplates,
  getPageTemplates,
  SearchIndexTemplate
} from '@x-govuk/govuk-eleventy-plugin/utils'

import { eleventyComputed } from './data/eleventy-computed.js'
import { defaultPluginOptions } from './data/options.js'
import { generateAssets } from './events/generate-nhsuk-assets.js'
import * as filters from './filters/index.js'
import { md } from './markdown-it.js'
import { nunjucksConfig } from './nunjucks.js'

export const layoutFilenames = [
  'base.njk',
  'collection.njk',
  'feed.njk',
  'hub.njk',
  'page.njk',
  'post.njk',
  'product.njk',
  'sitemap.njk',
  'sub-navigation.njk',
  'tag.njk',
  'tags.njk'
]

export const pageFilenames = ['404.md', 'sitemap.md', 'tag.md', 'tags.md']

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

  // Virtual layout templates
  const baseDirectory = path.join(import.meta.dirname, '..')
  const templates = await getLayoutTemplates(
    eleventyConfig,
    layoutFilenames,
    baseDirectory
  )
  for (const [virtualPath, template] of Object.entries(templates)) {
    eleventyConfig.addTemplate(virtualPath, template)
  }

  // Virtual page templates
  const pageTemplates = await getPageTemplates(eleventyConfig, pageFilenames)
  for (const [virtualPath, pageTemplate] of Object.entries(pageTemplates)) {
    eleventyConfig.addTemplate(virtualPath, pageTemplate)
  }

  // Virtual search index template
  eleventyConfig.addTemplate('search.11ty.js', new SearchIndexTemplate())

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
