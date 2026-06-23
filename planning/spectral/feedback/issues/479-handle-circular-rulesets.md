---
number: 479
title: "Handle circular rulesets"
state: "closed"
labels: ["tech-debt"]
author: "P0lip"
created: "2019-08-23T16:42:22Z"
updated: "2019-08-26T20:51:35Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/479"
---

# Handle circular rulesets

**Chore summary**
The goal is to safely load circular rulesets.
There is no need to have anything sophisticated, we can easily just process each rule once, and this should be sufficient for now, therefore it will also cover non-circular rulesets that has a similar extends somewhere, if you know what I mean.
This should be perfectly fine though, as we merge all rules and functions into one ruleset, so each rule and function will be included in the final merged ruleset.
