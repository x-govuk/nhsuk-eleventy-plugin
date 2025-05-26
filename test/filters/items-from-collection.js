import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import { itemsFromCollection } from '../../src/filters/items-from-collection.js'

const eleventyCollection = [
  {
    url: '/one',
    content: 'Content',
    page: {},
    rawInput: {},
    data: {
      title: 'One',
      description: 'Description'
    }
  },
  {
    url: '/two',
    content: 'Content',
    page: {},
    rawInput: {},
    data: {
      date: '2025-08-03',
      title: 'Two',
      description: 'Description',
      image: {
        src: '/image.jpg',
        alt: 'Alternative text'
      }
    }
  }
]

describe('itemsFromNavigation filter', () => {
  it('Converts collection data to items array', () => {
    const result = itemsFromCollection(eleventyCollection)

    assert.deepEqual(result, [
      {
        href: '/one',
        heading: 'One',
        descriptionHtml: '<p class="nhsuk-card__description">Description</p>'
      },
      {
        href: '/two',
        heading: 'Two',
        descriptionHtml:
          '<p class="nhsuk-body-s"><time class="nhsuk-u-secondary-text-colour" datetime="2025-08-03T00:00:00.000Z">3 August 2025</time></p><p class="nhsuk-card__description">Description</p>',
        imgURL: '/image.jpg',
        imgALT: 'Alternative text'
      }
    ])
  })

  it('Converts collection data to items array with item limit', () => {
    const result = itemsFromCollection(eleventyCollection, 1)

    assert.deepEqual(result, [
      {
        href: '/one',
        heading: 'One',
        descriptionHtml: '<p class="nhsuk-card__description">Description</p>'
      }
    ])
  })

  it('Converts empty collection data to items array', () => {
    const result = itemsFromCollection([])

    assert.deepEqual(result, [])
  })

  it('Converts non-collection data to items array with item limit', () => {
    const result = itemsFromCollection([
      {
        href: '/two',
        date: '2025-08-03',
        text: 'Two',
        description: 'Description',
        image: {
          src: '/image.jpg',
          alt: 'Alternative text'
        }
      }
    ])

    assert.deepEqual(result, [
      {
        href: '/two',
        heading: 'Two',
        descriptionHtml:
          '<p class="nhsuk-body-s"><time class="nhsuk-u-secondary-text-colour" datetime="2025-08-03T00:00:00.000Z">3 August 2025</time></p><p class="nhsuk-card__description">Description</p>',
        imgURL: '/image.jpg',
        imgALT: 'Alternative text'
      }
    ])
  })
})
