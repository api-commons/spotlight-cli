---
number: 1778
title: "Disable recursive resolution in spectral"
state: "closed"
labels: []
author: "rahulgopal88"
created: "2021-08-17T05:19:47Z"
updated: "2021-12-02T22:51:46Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1778"
---

# Disable recursive resolution in spectral

**User story.**
As a spectral developer, I want to disable recursive resolution, so that I can use my custom rule set to only parse the source code of relevant API

**Is your feature request related to a problem?**
Disable the resolution of $ref. Currently on running a spectral linter, all the $ref are resolved and then the rule set is applied. This can lead to a lot of redundant warnings/errors which are not in the current file.

**Describe the solution you'd like**
Please disable the parsing of the all $ref. A feature to parse and run the linter only on the source code would be great.

We have already tried `:resolved: false` . This does not seem to meet our need.
