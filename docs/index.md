---
homepage: true
layout: product
includeInBreadcrumbs: true
description: Use this plugin for [Eleventy](https://www.11ty.dev) to spend time writing documentation, not building a website for it.
image:
  src: /assets/homepage-illustration.png
  alt: Eleventy’s possum mascot hanging on a red balloon and floating above a laptop.
startButton:
  href: /get-started
eleventyComputed:
  title: "{{ pkg.description }}"
---

<div class="nhsuk-grid-row">
{% for item in collections.homepage %}
  <section class="nhsuk-grid-column-one-third nhsuk-u-margin-bottom-8">
    <h2 class="nhsuk-heading-m nhsuk-u-margin-bottom-2">
      <a class="nhsuk-link nhsuk-link--no-visited-state" href="{{ item.url }}">{{ item.data.title | smart }}</a>
    </h2>
    <p class="nhsuk-body">{{ item.data.description | markdown("inline") }}</p>
  </section>
{% endfor %}
  <section class="nhsuk-grid-column-full">
    <hr class="nhsuk-section-break nhsuk-section-break--visible nhsuk-section-break--xl nhsuk-u-margin-top-0">
    <h2 class="nhsuk-heading-m">Contribute</h2>
    <p class="nhsuk-body">The project repository is public and we welcome contributions from anyone.</p>
    <p class="nhsuk-body"><a class="nhsuk-link nhsuk-link--no-visited-state" href="{{ pkg.repository.url | replace(".git", "") | replace("git+", "") }}">View this project on GitHub</a></p>
  </section>
</div>
