---
number: 2467
title: "Expose `formatters` from either a separate package or the CLI package"
state: "closed"
labels: ["enhancement", "released"]
author: "sennyeya"
created: "2023-05-11T21:24:51Z"
updated: "2023-07-07T14:57:11Z"
comments: 8
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2467"
---

# Expose `formatters` from either a separate package or the CLI package

**User story.**
As a developer who wants to use Spectral in JS/TS, I can do create custom formatting, so that I can format my text output from an internal command without subshelling out to `spectral-cli`.

**Is your feature request related to a problem?**
I'm looking to use the existing formatters in `sepctral-cli` in Javascript but cannot as they are not exported from the `cli` package.

**Describe the solution you'd like**
Expose the formatters from their own package `@stoplight/spectral-formatters`. Alternatively, they could be exposed from the CLI, but would prefer their own package.

**Additional context**
I'm happy to submit a PR, this _should_ be pretty straightforward.
