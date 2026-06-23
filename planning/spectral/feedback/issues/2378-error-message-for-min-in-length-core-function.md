---
number: 2378
title: "Error message for min in length core function"
state: "closed"
labels: ["t/bug", "good first issue", "p/high", "triaged", "c/spectral"]
author: "pamgoodrich"
created: "2023-01-06T21:49:08Z"
updated: "2023-03-06T18:23:56Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2378"
---

# Error message for min in length core function

If you use the core function and set a min value (20 for a minimum description length, for example), the error that is returned during linting says:

"description" property must not be longer than 20.

This should actually say something like:

"description" property must be more than 20.

I tested the max value for this and it appears to be working correctly.
