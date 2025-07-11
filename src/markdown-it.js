import slugify from '@sindresorhus/slugify'
import MarkdownIt from 'markdown-it'
import markdownItAbbr from 'markdown-it-abbr'
import markdownItAnchor from 'markdown-it-anchor'
import markdownItAttrs from 'markdown-it-attrs'
import markdownItDeflist from 'markdown-it-deflist'
import markdownItFootnote from 'markdown-it-footnote'
import markdownItGovuk from 'markdown-it-govuk'
import highlight from 'markdown-it-govuk/highlight'
import markdownItImageFigures from 'markdown-it-image-figures'
import markdownItIns from 'markdown-it-ins'
import markdownItMark from 'markdown-it-mark'
import markdownItSub from 'markdown-it-sub'
import markdownItSup from 'markdown-it-sup'
import markdownItTableOfContents from 'markdown-it-table-of-contents'

import { defListRules } from './markdown-it/deflist.js'
import { figureRules } from './markdown-it/figure.js'
import { footnotesRules } from './markdown-it/footnote.js'
import { tableRules } from './markdown-it/table.js'

/**
 * Configure markdown-it
 *
 * @see {@link https://markdown-it.github.io/markdown-it/}
 * @param {object} [options] - Plugin options
 * @returns {Function} markdown-it instance
 */
export function md(options = {}) {
  const opts = {
    breaks: true,
    highlight,
    html: true,
    linkify: false,
    typographer: true
  }

  const md = new MarkdownIt(opts)
    .use(markdownItGovuk, {
      brand: 'nhsuk',
      calvert: true,
      headingsStartWith: 'xl'
    })
    .use(markdownItAbbr)
    .use(markdownItAnchor, {
      permalink: options.headingPermalinks
        ? markdownItAnchor.permalink.headerLink({
            class: 'app-link--heading',
            safariReaderFix: true
          })
        : false,
      slugify: (string) => slugify(string).replaceAll(/[*+~.()'"!:@]/g, '')
    })
    .use(markdownItAttrs)
    .use(markdownItDeflist)
    .use(defListRules)
    .use(markdownItFootnote)
    .use(footnotesRules)
    .use(markdownItIns)
    .use(markdownItImageFigures, {
      classes: 'nhsuk-image__img',
      figcaption: true
    })
    .use(figureRules)
    .use(markdownItMark)
    .use(markdownItSub)
    .use(markdownItSup)
    .use(tableRules)
    .use(markdownItTableOfContents, {
      includeLevel: [2, 3],
      listType: 'ol',
      transformContainerOpen: () => {
        return '<nav class="nhsuk-contents-list"><h2 class="nhsuk-u-visually-hidden">Contents</h2>'
      },
      transformContainerClose: () => {
        return '</nav>'
      }
    })

  return md
}
