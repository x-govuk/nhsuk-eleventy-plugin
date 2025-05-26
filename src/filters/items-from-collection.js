import {
  isoDate,
  markdown,
  nhsukDate,
  sliceFromCollection,
  smart
} from './index.js'

function isCollectionData(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return false
  }

  return array.every((item) => {
    return (
      typeof item === 'object' &&
      item !== null &&
      Object.prototype.hasOwnProperty.call(item, 'content') &&
      Object.prototype.hasOwnProperty.call(item, 'data') &&
      Object.prototype.hasOwnProperty.call(item, 'page') &&
      Object.prototype.hasOwnProperty.call(item, 'rawInput')
    )
  })
}

function getDescriptionHtml(item) {
  let html = ''

  if (item.date) {
    html += `<p class="nhsuk-body-s">
  <time class="nhsuk-u-secondary-text-color" datetime="${isoDate(item.date)}">${nhsukDate(item.date)}</time>
</p>`
  }

  if (item.description) {
    html += `<p class="nhsuk-card__description">
  ${markdown(item.description, 'inline')}
</p>`
  }

  return html
}

/**
 * Transform list of posts (that may be in a collection) to `items` array that * can be consumed by NHS.UK Frontend card components
 *
 * @param {Array} array - Eleventy collection data
 * @param {number} n - Number of items to slice from collection
 * @returns {Array<object>} `items` array
 */
export function itemsFromCollection(array, n) {
  if (isCollectionData(array)) {
    array = array.map((item) => {
      return {
        href: item.url,
        date: item.data.date,
        text: item.data.title,
        description: item.data.description,
        image: item.data.image
      }
    })
  }

  array = array.map((item) => ({
    href: item.href,
    heading: smart(item.text),
    descriptionHtml: getDescriptionHtml(item),
    ...(item.image && { imgURL: item.image.src }),
    ...(item.image && { imgALT: item.image.alt })
  }))

  return sliceFromCollection(array, n)
}
