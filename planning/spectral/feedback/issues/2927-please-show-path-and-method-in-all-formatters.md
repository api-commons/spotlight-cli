---
number: 2927
title: "Please show Path and Method in all formatters"
state: "open"
labels: []
author: "Vampire"
created: "2026-03-31T16:59:03Z"
updated: "2026-03-31T16:59:03Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2927"
---

# Please show Path and Method in all formatters

These formatters behave nicely and show path and method for findings:
- gitlab
- json
- pretty
- stylish

These formatters only show the path, but miss the method, which still is usable but a bit unfortunate:
- junit
- markdown

These formatters do neither show the path nor the method, with these it is extremely cumbersome to check findings if there are many findings or even if there are just many developers doing API changes and CI complains. You can have only the line as indicator where the problem is, and sometimes even that is only marginally helpful if the spec file is generated and thus not readily available.
- code-climate
- github-action
- html
- sarif
- teamcity
- txt

It would be nice if the reports could be improved to all show at least the path and optimally also the method,
so that findings can be located more easily.
