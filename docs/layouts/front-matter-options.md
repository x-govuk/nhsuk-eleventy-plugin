---
title: Front matter options
---

All layouts can accept the following [front matter data](https://www.11ty.dev/docs/data-frontmatter/) to customise their appearance, content and behaviour:

| Name                 | Type            | Description                                                                                                              |
| -------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| caption              | string          | Heading caption that sits above the page title                                                                           |
| description          | string          | Page description                                                                                                         |
| includeInBreadcrumbs | boolean         | Include page as the last item in any breadcrumbs (default is `false`)                                                    |
| layout               | string          | Page layout to use                                                                                                       |
| opengraphImage       | object          | Open Graph image that appears on social media networks                                                                   |
| opengraphImage.src   | string          | Path to Open Graph image. Can be a relative or absolute URL. This value overrides `opengraphImageUrl` in plugin options. |
| opengraphImage.alt   | string          | Alternative text for Open Graph image                                                                                    |
| order                | integer         | Ranking of page in navigation. Lower numbers appear before pages with a higher number.                                   |
| related              | object or array | See [options for related](#options-for-related-object). Also supports an array of `related` objects.                     |
| theme                | string          | Common title page sits under in sub navigation                                                                           |
| title                | string          | Page title                                                                                                               |

## Options for `related` object

| Name        | Type   | Description                                                                |
| ----------- | ------ | -------------------------------------------------------------------------- |
| title       | string | Title for the related section (default is `Related`)                       |
| description | string | Supporting description for the related section                             |
| items       | array  | See [options for related items](#options-for-related-items-array-objects). |

## Options for related `items` array objects

| Name | Type   | Description                  |
| ---- | ------ | ---------------------------- |
| text | string | Title of related content     |
| href | string | Link for the related content |
