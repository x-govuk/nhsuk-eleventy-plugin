import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import { markdown } from '../../src/filters/markdown.js'

describe('markdown filter', () => {
  it('Converts Markdown string to HTML', () => {
    const result = markdown('**this** is _emphasis_')

    assert.equal(
      result,
      '<p class="nhsuk-body"><strong>this</strong> is <em>emphasis</em></p>\n'
    )
  })

  it('Converts Markdown string to HTML without paragraph wrap', () => {
    const result = markdown('**this** is _emphasis_', 'inline')

    assert.equal(result, '<strong>this</strong> is <em>emphasis</em>')
  })

  it('Converts a Markdown code block to use the nhsuk-code component structure', () => {
    const result = markdown(`\`\`\`js
const x = 1
\`\`\``)

    assert.equal(
      result,
      `<div class="nhsuk-code" data-module="nhsuk-code">
  <pre class="nhsuk-code__container"><code class="nhsuk-code__content"><span class="nhsuk-code__keyword">const</span> x = <span class="nhsuk-code__number">1</span>
</code></pre>
</div>
`
    )
  })

  it('Converts a Markdown code block with a copy button attribute added', () => {
    const result = markdown('```js { .nhsuk-code--button }\nconst x = 1\n```')

    assert.equal(
      result,
      `<div class="nhsuk-code nhsuk-code--button" data-module="nhsuk-code">
  <button class="nhsuk-button nhsuk-button--secondary nhsuk-button--small nhsuk-code__button nhsuk-js-code-button" data-module="nhsuk-button" type="button" hidden>Copy code</button>
  <pre class="nhsuk-code__container"><code class="nhsuk-code__content"><span class="nhsuk-code__keyword">const</span> x = <span class="nhsuk-code__number">1</span>
</code></pre>
</div>
`
    )
  })
})
