---
layout: page
title: Markdown
description: A lightweight markup language that allows you to add formatting to plain text documents.
---

[[toc]]

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

## Paragraphs

To create paragraphs, use a blank line to separate one or more lines of text.

| Markdown                                                                                                                                  | Rendered output                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| <pre class="app-code app-code--block nhsuk-u-margin-0" tabindex="0">This is the first paragraph.<br><br>And this is the second one.</pre> | <p class="nhsuk-body">This is the first paragraph.</p><p class="nhsuk-body">And this is the second one.</p> |

## Line breaks

To create a line break or new line (`<br>`), end a line with 2 or more spaces, and then type return.

| Markdown                                                                                                                         | Rendered output                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| <pre class="app-code app-code--block nhsuk-u-margin-0" tabindex="0">This is the first line.<br>And this is the second one.</pre> | <p class="nhsuk-body">This is the first line.<br>And this is the second one.</p> |

## Emphasis

To emphasise text, add one asterisk or underscore before and after a word or phrase.

> The [GDS Style Guide recommends against the use of italics](https://www.gov.uk/guidance/style-guide/a-to-z-of-gov-uk-style#italics), and the GDS Transport font doesn’t provide an italic style. Use ‘single quotation marks’ if referring to a document, scheme or initiative.

| Markdown                     | Rendered output                                             |
| ---------------------------- | ----------------------------------------------------------- |
| `This text is *emphasised*.` | <p class="nhsuk-body">This text is <em>emphasised</em>.</p> |
| `This text is _emphasised_.` | <p class="nhsuk-body">This text is <em>emphasised</em>.</p> |

## Strong emphasis

To bold text, add 2 asterisks or underscores before and after a word or phrase.

> The [GDS Style Guide recommends using emboldened text when referring to text from interfaces](https://www.gov.uk/guidance/style-guide/a-to-z-of-gov-uk-style#bold) in technical documentation or instructions.

| Markdown                                | Rendered output                                                              |
| --------------------------------------- | ---------------------------------------------------------------------------- |
| `This text is **strongly emphasised**.` | <p class="nhsuk-body">This text is <strong>strongly emphasised</strong>.</p> |
| `This text is __strongly emphasised__.` | <p class="nhsuk-body">This text is <strong>strongly emphasised</strong>.</p> |

## Blockquotes

To create a blockquote, add a `>` in front of a paragraph.

```markdown
> No society can legitimately call itself civilised if a sick person is denied aid because of lack of means..
```

The rendered output looks like this:

> No society can legitimately call itself civilised if a sick person is denied aid because of lack of means..

### Blockquotes with multiple paragraphs

Blockquotes can contain multiple paragraphs. Add a `>` on the blank lines between the paragraphs.

```markdown
> No society can legitimately call itself civilised if a sick person is denied aid because of lack of means..
>
> Society becomes more wholesome, more serene, and spiritually healthier, if it knows that its citizens have at the back of their consciousness the knowledge that not only themselves, but all their fellows, have access, when ill, to the best that medical care can provide.
```

The rendered output looks like this:

> No society can legitimately call itself civilised if a sick person is denied aid because of lack of means..
>
> Society becomes more wholesome, more serene, and spiritually healthier, if it knows that its citizens have at the back of their consciousness the knowledge that not only themselves, but all their fellows, have access, when ill, to the best that medical care can provide.

### Nested blockquotes

To nest blockquotes, add a `>>` in front of the paragraph you want to nest.

```markdown
> No society can legitimately call itself civilised if a sick person is denied aid because of lack of means..
>
> > Society becomes more wholesome, more serene, and spiritually healthier, if it knows that its citizens have at the back of their consciousness the knowledge that not only themselves, but all their fellows, have access, when ill, to the best that medical care can provide.
```

The rendered output looks like this:

> No society can legitimately call itself civilised if a sick person is denied aid because of lack of means..
>
> > Society becomes more wholesome, more serene, and spiritually healthier, if it knows that its citizens have at the back of their consciousness the knowledge that not only themselves, but all their fellows, have access, when ill, to the best that medical care can provide.

## Lists

You can organize items into ordered and unordered lists.

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

## Code

### Code spans

To denote a word or phrase as code, enclose it in backticks (`` ` ``).

```markdown
At the command prompt, type `npm install`.
```

At the command prompt, type `npm install`.

### Code blocks

By default, [Eleventy doesn’t support the Markdown syntax for indented code blocks](https://www.11ty.dev/docs/languages/markdown/#indented-code-blocks) because pages can get rendered incorrectly should a layout or component include indented markup.

To include code blocks in your documentation, use [fenced code blocks](/markdown-advanced/#fenced-code).

## Horizontal rules

To create a horizontal rule, use 3 or more asterisks (`***`), dashes (`---`), or underscores (`___`) on a line by themselves.

```markdown
***
---
___
```

The rendered output of all 3 looks identical:

---

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

To [emphasize](#emphasis) links, add asterisks before and after the brackets and parentheses. To denote links as [code](#code), add backticks in the brackets.

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
![The NHS logo above the words nhs.uk](/assets/logos/open-graph.png "The NHS.UK logo")
```

![The NHS logo above the words nhs.uk](/assets/logos/open-graph.png 'The NHS.UK logo')

### Linking images

To add a link to an image, enclose the Markdown for the image in brackets, and then add the link in parentheses.

```markdown
[![Visit NHS.UK.](/assets/favicons/apple-touch-icon.png)](https://www.nhs.uk)
```

The rendered output looks like this:

[![Visit NHS.UK.](/assets/favicons/apple-touch-icon.png)](https://www.nhs.uk)

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
