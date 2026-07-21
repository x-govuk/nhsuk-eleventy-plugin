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
  // Alias for Eleventy's pagination data to avoid naming conflict with the
  // nhsuk-frontend `pagination` Nunjucks macro in template-with-imports.njk
  eleventyPagination: (data) => data.pagination,

  // Alias for page image data to avoid naming conflict with the
  // nhsuk-frontend `image` Nunjucks macro in template-with-imports.njk
  eleventyImage: (data) => data.image,
  eleventyNavigation: {
    key: (data) => getNavigationKey(data),
    parent: (data) => getNavigationParent(data),
    excerpt: (data) => data.eleventyNavigation.excerpt || data.description
  }
}
