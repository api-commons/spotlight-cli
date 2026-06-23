---
number: 1384
title: "defined function is not registered in the core functions index"
state: "closed"
labels: ["t/bug"]
author: "iwb-rubentytgat"
created: "2020-10-29T08:05:20Z"
updated: "2020-11-06T20:06:16Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1384"
---

# defined function is not registered in the core functions index

**Describe the bug**
The `defined` function, while implemented and documented, does not appear to be registered as a core function.

**To Reproduce**

1. Given any ruleset referencing the core function `defined`
2. It will throw an error: `Function defined not found. Called by rule foo.`

**Expected behavior**
It should find the `defined` function.

**Additional context**
Origin of the issue is probably in this file: https://github.com/stoplightio/spectral/blob/v5.6.0/src/functions/index.ts

The `defined` function is not included in the CoreFunctions map, unlike all the other core functions.
