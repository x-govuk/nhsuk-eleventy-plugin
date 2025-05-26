import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import { currentPage } from '../../src/filters/current-page.js'

const headerData = {
  navigation: {
    items: [
      { text: 'Home', href: '/' },
      { text: 'Styles', href: '/styles' },
      { text: 'Styles 2', href: '/styles-2' }
    ]
  }
}

describe('currentPage filter', () => {
  it('Indicates the home page is current', () => {
    const result = currentPage(headerData, '/')

    assert.deepEqual(result.navigation.items, [
      { text: 'Home', href: '/', active: true },
      { text: 'Styles', href: '/styles', active: false },
      { text: 'Styles 2', href: '/styles-2', active: false }
    ])
  })

  it('Indicates the section page is current', () => {
    const result = currentPage(headerData, '/styles')

    assert.deepEqual(result.navigation.items, [
      { text: 'Home', href: '/', active: false },
      { text: 'Styles', href: '/styles', active: true },
      { text: 'Styles 2', href: '/styles-2', active: false }
    ])
  })

  it('Indicates the section sub page is current', () => {
    const result = currentPage(headerData, '/styles/colour')

    assert.deepEqual(result.navigation.items, [
      { text: 'Home', href: '/', active: false },
      { text: 'Styles', href: '/styles', active: true },
      { text: 'Styles 2', href: '/styles-2', active: false }
    ])
  })
})
