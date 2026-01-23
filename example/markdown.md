---
layout: page
title: Markdown guide
description: Markdown is a lightweight markup language that allows you to add formatting to plain text documents.
---

<!-- markdownlint-disable no-inline-html -->

[[toc]]

## Paragraphs and line breaks

To create paragraphs, use a blank line to separate one or more lines of text.

| Markdown                                                                                                                                  | Rendered output                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| <pre class="app-code app-code--block nhsuk-u-margin-0" tabindex="0">This is the first paragraph.<br><br>And this is the second one.</pre> | <p class="nhsuk-body">This is the first paragraph.</p><p class="nhsuk-body">And this is the second one.</p> |

To create a line break or new line (`<br>`), end a line with 2 or more spaces, and then type return.

| Markdown                                                                                                                         | Rendered output                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| <pre class="app-code app-code--block nhsuk-u-margin-0" tabindex="0">This is the first line.<br>And this is the second one.</pre> | <p class="nhsuk-body">This is the first line.<br>And this is the second one.</p> |

## Headings

To create a heading, add number signs (`#`) in front of a word or phrase.

The number of number signs you use should correspond to the heading level. For example, to create a heading level 3 (`<h3>`), use 3 number signs (e.g., `### My Header`).

| Markdown                 | Rendered output                                  |
| ------------------------ | ------------------------------------------------ |
| `# Heading level 1`      | <h1 class="nhsuk-heading-l">Heading level 1</h1> |
| `## Heading level 2`     | <h2 class="nhsuk-heading-m">Heading level 2</h2> |
| `### Heading level 3`    | <h3 class="nhsuk-heading-s">Heading level 3</h3> |
| `#### Heading level 4`   | <h4 class="nhsuk-heading-s">Heading level 4</h4> |
| `##### Heading level 5`  | <h5 class="nhsuk-heading-s">Heading level 5</h5> |
| `###### Heading level 6` | <h6 class="nhsuk-heading-s">Heading level 6</h6> |

## Horizontal rules

To create a horizontal rule, use 3 or more asterisks (`***`), dashes (`---`), or underscores (`___`) on a line by themselves.

```markdown
***
---
___
```

The rendered output of all 3 looks identical:

---

## Blockquotes

To create a blockquote, add a `>` in front of a paragraph.

```markdown
> No society can legitimately call itself civilised if a sick person is denied aid because of lack of means.
```

The rendered output looks like this:

> No society can legitimately call itself civilised if a sick person is denied aid because of lack of means.

### Blockquotes with multiple paragraphs

Blockquotes can contain multiple paragraphs. Add a `>` on the blank lines between the paragraphs.

```markdown
> No society can legitimately call itself civilised if a sick person is denied aid because of lack of means.
>
> Society becomes more wholesome, more serene, and spiritually healthier, if it knows that its citizens have at the back of their consciousness the knowledge that not only themselves, but all their fellows, have access, when ill, to the best that medical care can provide.
```

The rendered output looks like this:

> No society can legitimately call itself civilised if a sick person is denied aid because of lack of means.
>
> Society becomes more wholesome, more serene, and spiritually healthier, if it knows that its citizens have at the back of their consciousness the knowledge that not only themselves, but all their fellows, have access, when ill, to the best that medical care can provide.

### Blockquotes with attribution

You can attribute a quote to its author by adding two hyphens (`--`) before the attribution you want to add.

```markdown
> No society can legitimately call itself civilised if a sick person is denied aid because of lack of means.
> -- Nye Bevan, 1952
```

The rendered output looks like this:

> No society can legitimately call itself civilised if a sick person is denied aid because of lack of means.
> -- Nye Bevan, 1952

## Alerts

Alerts, based on the blockquote syntax, can be used emphasise critical information. [On GitHub they are displayed with distinctive colors and icons](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts), while pages rendered by the plugin use equivalent components from the NHS design system.

### Note and tip alerts

Note and tip alerts are rendered as [inset text](https://service-manual.nhs.uk/design-system/components/inset-text):

```markdown
> [!NOTE]
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.
```

The rendered output looks like this:

> [!NOTE]
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

You can also include a title:

```markdown
> [!NOTE] Reporting side effects
> You can report any suspected side effect to the [UK safety scheme](https://yellowcard.mhra.gov.uk/).
```

The rendered output looks like this:

> [!NOTE] Reporting side effects
> You can report any suspected side effect to the [UK safety scheme](https://yellowcard.mhra.gov.uk/).

#### Information callouts

Govspeak’s [information callout](https://components.publishing.service.gov.uk/component-guide/govspeak/information_callout) syntax is also supported:

```markdown
^ Highlights information that users should take into account, even when skimming.
```

The rendered output looks like this:

^ Highlights information that users should take into account, even when skimming.

### Important, warning and caution alerts

Important, warning and caution alerts are rendered as [warning callouts](https://service-manual.nhs.uk/design-system/components/warning-callout):

```markdown
> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.
```

The rendered output looks like this:

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.

If you include a title, this will be shown in the heading instead of the alert type:

```markdown
> [!WARNING] School, nursery or work
> Stay away from school, nursery or work until all the spots have crusted over. This is usually 5 days after the spots first appeared.
```

The rendered output looks like this:

> [!WARNING] School, nursery or work
> Stay away from school, nursery or work until all the spots have crusted over. This is usually 5 days after the spots first appeared.

## Lists

### Ordered lists

To create an ordered list, add line items with numbers followed by periods. The numbers don’t have to be in numerical order, but the list should start with the number one.

```markdown
1. First item
2. Second item
   1. Indented item
   1. Indented item
3. Third item
```

1. First item
2. Second item
   1. Indented item
   1. Indented item
3. Third item

### Unordered lists

To create an unordered list, add dashes (`-`), asterisks (`*`), or plus signs (`+`) in front of line items. Indent one or more items to create a nested list.

```markdown
- First item
- Second item
  - Indented item
  - Indented item
- Third item
```

- First item
- Second item
  - Indented item
  - Indented item
- Third item

#### Nesting different list types

You can also nest an unordered list in an ordered list, or vice versa.

```markdown
1. First item
2. Second item
   - Indented item
   - Indented item
3. Third item
```

1. First item
2. Second item
   - Indented item
   - Indented item
3. Third item

#### Starting unordered list items with numbers

If you need to start an unordered list item with a number followed by a period, you can use a backslash (`\`) to escape the period.

```markdown
- 2012\. A great year!
- I think 2009 was second best.
```

- 2012\. A great year!
- I think 2009 was second best.

### Description lists

To create a description list, type the term on the first line. On the next line, type a colon followed by a space and the description.

```markdown
First Term
: This is the description of the first term.

Second Term
: This is one description of the second term.
: This is another description of the second term.
```

The rendered output looks like this:

First Term
: This is the description of the first term.

Second Term
: This is one description of the second term.
: This is another description of the second term.

### Contents list

To add a table of contents, add the following Markdown where you want the list to appear on the page:

```markdown
[[toc]]
```

## Code

### Code spans

To denote a word or phrase as code, enclose it in backticks (`` ` ``).

```markdown
At the command prompt, type `npm install`.
```

At the command prompt, type `npm install`.

### Code blocks

By default, [Eleventy doesn’t support the Markdown syntax for indented code blocks](https://www.11ty.dev/docs/languages/markdown/#indented-code-blocks) because pages can render incorrectly should a layout or component include indented markup.

To include code blocks in your documentation, you should use fenced code blocks instead. These use 3 backticks (` ``` `) or 3 tildes (`~~~`) on the lines before and after the code block.

````markdown
```
{
  "firstName": "Florence",
  "lastName": "Nightingale",
  "age": 34
}
```
````

The rendered output looks like this:

```text
{
  "firstName": "Florence",
  "lastName": "Nightingale",
  "age": 34
}
```

#### Syntax highlighting

This feature allows you to add color highlighting different programming languages. To add syntax highlighting, specify a language next to the backticks before the fenced code block.

````markdown
```json
{
  "firstName": "Florence",
  "lastName": "Nightingale",
  "age": 34
}
```
````

The rendered output looks like this:

```json
{
  "firstName": "Florence",
  "lastName": "Nightingale",
  "age": 34
}
```

## Emphasised text

To emphasise text, add one asterisk or underscore before and after a word or phrase.

> The [GDS Style Guide recommends against the use of italics](https://www.gov.uk/guidance/style-guide/a-to-z-of-gov-uk-style#italics), and the GDS Transport font doesn’t provide an italic style. Use ‘single quotation marks’ if referring to a document, scheme or initiative.

| Markdown                     | Rendered output                                             |
| ---------------------------- | ----------------------------------------------------------- |
| `This text is *emphasised*.` | <p class="nhsuk-body">This text is <em>emphasised</em>.</p> |
| `This text is _emphasised_.` | <p class="nhsuk-body">This text is <em>emphasised</em>.</p> |

## Strongly emphasised text

To bold text, add 2 asterisks or underscores before and after a word or phrase.

> The [GDS Style Guide recommends using emboldened text when referring to text from interfaces](https://www.gov.uk/guidance/style-guide/a-to-z-of-gov-uk-style#bold) in technical documentation or instructions.

| Markdown                                | Rendered output                                                              |
| --------------------------------------- | ---------------------------------------------------------------------------- |
| `This text is **strongly emphasised**.` | <p class="nhsuk-body">This text is <strong>strongly emphasised</strong>.</p> |
| `This text is __strongly emphasised__.` | <p class="nhsuk-body">This text is <strong>strongly emphasised</strong>.</p> |

## Deleted text

To show that certain words are a mistake not meant for inclusion in the document, use 2 tilde symbols (`~~`) before and after the words.

```markdown
~~The world is flat.~~ We now know that the world is round.
```

The rendered output looks like this:

~~The world is flat.~~ We now know that the world is round.

## Inserted text

To show inserted text, use 2 plus signs (`++`) before and after the words. You can use this alongside the syntax for [deleted text](#deleted-text).

```text
I need to ~~remove~~ ++insert++ a word.
```

The rendered output looks like this:

I need to ~~remove~~ ++insert++ a word.

## Highlighted text

To highlight words, use 2 equal signs (`==`) before and after the words.

```text
I need to highlight these ==important words==.
```

The rendered output looks like this:

I need to highlight these ==important words==.

## Subscript and superscript text

For subscript text, use one tilde symbol (`~`) before and after the characters.

```text
H~2~O
```

The rendered output looks like this:

H~2~O

For superscript text, use one caret symbol (`^`) before and after the characters.

```text
X^2^
```

The rendered output looks like this:

X^2^

## Links

To create a link, enclose the link text in brackets (e.g., `[NHS.UK]`) and then follow it with the URL in parentheses (e.g., `(https://www.nhs.uk)`).

```markdown
Visit [NHS.UK](https://www.nhs.uk).
```

The rendered output looks like this:

Visit [NHS.UK](https://www.nhs.uk).

### URLs and email addresses

To turn a URL or email address into a link, enclose it in angle brackets.

```markdown
<https://www.nhs.uk>
<mailbox@example.org>
```

The rendered output looks like this:

<https://www.nhs.uk>  
<mailbox@example.org>

### Formatting links

To [emphasise](#emphasised-text) links, add asterisks before and after the brackets and parentheses. To denote links as [code](#code), add backticks in the brackets.

```markdown
Visit the **[Markdown Guide](https://www.markdownguide.org)**.
See the section on [`code`](#code).
```

The rendered output looks like this:

Visit the **[Markdown Guide](https://www.markdownguide.org)**.  
See the section on [`code`](#code).

## Images

To add an image, add an exclamation mark (`!`), followed by alternative text in brackets, and the path or URL to the image asset in parentheses. You can optionally add a caption in quotation marks after the path or URL.

The rendered output looks like this:

```markdown
![Woman looking at the NHS website on her phone.](/assets/post-image.jpg 'We want to make sure the  NHS website is easy to use.')
```

![Woman looking at the NHS website on her phone.](/assets/post-image.jpg 'We want to make sure the  NHS website is easy to use.')

### Linking images

To add a link to an image, enclose the Markdown for the image in brackets, and then add the link in parentheses.

```markdown
[![Visit NHS.UK.](/assets/images/nhsuk-opengraph-image.png)](https://www.nhs.uk)
```

The rendered output looks like this:

[![Visit NHS.UK.](/assets/images/nhsuk-opengraph-image.png)](https://www.nhs.uk)

## Tables

To add a table, use 3 or more hyphens (`---`) to create each column’s header, and use pipes (`|`) to separate each column.

```markdown
| Skin symptoms                        | Possible cause       |
| ------------------------------------ | -------------------- |
| Blisters on lips or around the mouth | Cold sores           |
| Itchy, dry, cracked, sore            | Eczema               |
| Itchy blisters                       | Shingles, chickenpox |
```

The rendered output looks like this:

| Skin symptoms                        | Possible cause       |
| ------------------------------------ | -------------------- |
| Blisters on lips or around the mouth | Cold sores           |
| Itchy, dry, cracked, sore            | Eczema               |
| Itchy blisters                       | Shingles, chickenpox |

Cell widths can vary, as shown below. The rendered output will look the same.

```markdown
| Skin symptoms | Possible cause |
| - | - |
| Blisters on lips or around the mouth | Cold sores |
| Itchy, dry, cracked, sore | Eczema |
| Itchy blisters | Shingles, chickenpox |
```

### Alignment

You can align text in the columns to the left, right, or center by adding a colon (`:`) to the left, right, or on both side of the hyphens within the header row.

```markdown
| Left aligned | Center aligned | Right aligned |
| :----------- | :------------: | ------------: |
| Left         | Center         | Right.        |
```

The rendered output looks like this:

| Left aligned | Center aligned | Right aligned |
| :----------- | :------------: | ------------: |
| Left         |     Center     |         Right |

## Footnotes

Footnotes allow you to add notes and references without cluttering the body of the document.

When you create a footnote, a superscript number with a link appears where you added the footnote reference. Readers can click the link to jump to the content of the footnote at the bottom of the page.

To create a footnote reference, add a caret and an identifier inside brackets (`[^1]`).

Identifiers can be numbers or words, but they can’t contain spaces or tabs. Identifiers correlate the footnote reference with the footnote itself — in the output, footnotes get numbered sequentially.

Add the footnote using another caret and number inside brackets with a colon and text (`[^1]: My footnote.`).

You don’t have to put footnotes at the end of the document. You can put them anywhere except inside other elements like lists, blockquotes, and tables.

```markdown
Here’s a simple footnote,[^1] and here’s a longer one.[^longer]

[^1]: This is the first footnote.

[^longer]: Here’s the second, which has 2 paragraphs.

    Indent any following paragraphs to include them in the footnote.
```

The rendered output looks like this:

Here’s a simple footnote,[^1] and here’s a longer one.[^longer]

[^1]: This is the first footnote.

[^longer]: Here’s the second, which has 2 paragraphs.

    Indent any following paragraphs to include them in the footnote.

## Typographic replacements

| Description          | Text                  | Rendered output     |
| -------------------- | --------------------- | ------------------- |
| En dash              | `--`                  | --                  |
| Em dash              | `---`                 | ---                 |
| Ellipsis             | `...`                 | ...                 |
| Single quotes        | `'single'`            | 'single'            |
| Double quotes        | `"double"`            | "double"            |
| Simple fractions     | `1/2 1/3 2/3 1/4 3/4` | 1/2 1/3 2/3 1/4 3/4 |
| Multiplication       | `2 x 3`               | 2 x 3               |
| Greater than         | `2 => 1`              | 2 => 1              |
| Less than            | `1 <= 2`              | 1 <= 2              |
| Plus-minus           | `2.4 +-1`             | 2.4 +-1             |
| Guillemets           | `<<Bonjour!>>`        | <<Bonjour!>>        |
| Copyright            | `(C)` `(c)`           | (C)                 |
| Registered trademark | `(R)` `(r)`           | (R)                 |
| Trademark            | `(TM)` `(tm)`         | (TM)                |
