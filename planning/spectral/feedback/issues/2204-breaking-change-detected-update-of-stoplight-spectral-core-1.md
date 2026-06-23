---
number: 2204
title: "Breaking change detected: update of @stoplight/spectral-core 1.12.2 -> 1.12.3 causing breaking changes"
state: "closed"
labels: []
author: "pavelkornev"
created: "2022-07-08T13:39:59Z"
updated: "2022-07-20T16:33:08Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2204"
---

# Breaking change detected: update of @stoplight/spectral-core 1.12.2 -> 1.12.3 causing breaking changes

**Describe the bug**
We tried to update `@stoplight/spectral-core` `1.12.2` -> `1.12.3` and validation breaks with the following issue:
`Error running Nimma`

It seems like in `1.12.3` [Nimma itself was updated](https://github.com/P0lip/nimma/compare/0.2.1...0.2.2).

We had lots of selectors like:
* `$.paths.[*].get`
* `$.paths.[*].*.responses`

Which suddenly stopped working the way they worked before...
