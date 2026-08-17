import {
  getNavigationKey,
  getNavigationParent
} from '@x-govuk/govuk-eleventy-plugin/utils'

/**
 * Set sensible defaults for eleventyNavigation
 *
 * @see {@link https://www.11ty.dev/docs/plugins/navigation/}
 */
export const eleventyComputed = {
  // Aliases to avoid naming conflicts with nhsuk-frontend Nunjucks macros
  // (`caption`, `image`, `pagination`, `tag`) imported in template-with-imports.njk
  eleventyCaption: (data) => data.caption,
  eleventyImage: (data) => data.image,
  eleventyPagination: (data) => data.pagination,
  eleventyTag: (data) => data.tag,
  eleventyNavigation: {
    key: (data) => getNavigationKey(data),
    parent: (data) => getNavigationParent(data),
    excerpt: (data) => data.eleventyNavigation.excerpt || data.description
  }
}
