---
number: 455
title: "better-ajv-errors is utterly slow under certain circumstances"
state: "closed"
labels: ["t/bug"]
author: "P0lip"
created: "2019-08-14T20:11:04Z"
updated: "2020-07-09T18:01:15Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/455"
---

# better-ajv-errors is utterly slow under certain circumstances

Forgot about this one.
Studio has no better-ajv-errors at all for now, and here is why.

![before_better](https://user-images.githubusercontent.com/9273484/63052578-f641c280-bedf-11e9-806a-ea47dbe881b5.png)
(yes, you see it right, 15 seconds)
The vast chunk of time is spent on parsing.

After (without better-ajv-errors):
![after_better](https://user-images.githubusercontent.com/9273484/63052674-3f921200-bee0-11e9-99a2-9e01c279c6bd.png)

The potential solution would be to swap `json-to-ast` parser used in better-ajv-errors with our alternate version of `jsonc-parser`.
