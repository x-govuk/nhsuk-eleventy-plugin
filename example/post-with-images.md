---
layout: post
title: Post with images
description: This is an example of different ways to embed images in a post
date: 2019-02-05
---

You can embed images in a post by using the standard image markdown format:

![Alt text](/assets/nhs-homepage.png "The NHS.UK homepage (Default full column width)")

You can also change the default widths by adding a width modifier to the image path after a `#` sign:

```md
![Alt text](/assets/nhs-homepage.png#width-one-half)
![Alt text](/assets/nhs-homepage.png#width-two-thirds)
```

![Alt text](/assets/nhs-homepage.png#width-one-half "The NHS.UK homepage (one-half width)")

![Alt text](/assets/nhs-homepage.png#width-two-thirds "The NHS.UK homepage (two-thirds width)")

And if you have have really big image, you can make it the full page width:

```md
![Alt text](/assets/nhs-homepage.png#width-full-page)
```

![Alt text](/assets/nhs-homepage.png#width-full-page "The NHS.UK homepage (full page width)")

Lots of options!