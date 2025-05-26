/**
 * Indicate which is the current item in header navigation items
 *
 * @param {object} header - Header options
 * @param {string} pageUrl - URL of current page
 * @returns {Array} Header items
 */
export function currentPage(header, pageUrl) {
  if (!header.navigation?.items) {
    return header
  }

  header.navigation.items = header.navigation.items.map((item) => {
    item.active =
      item.href === '/'
        ? pageUrl === '/' // Page is home page
        : pageUrl.startsWith(`${item.href}/`) // Page is within navigation section

    return item
  })

  return header
}
