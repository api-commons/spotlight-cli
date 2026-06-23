---
number: 2324
title: "oas3-valid-oas-content-example - Curious if anybody is looking at issue #1274"
category: "Q&A"
author: "JemDay"
created: "2022-11-01T22:08:32Z"
upvotes: 1
comments: 0
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2324"
---

# oas3-valid-oas-content-example - Curious if anybody is looking at issue #1274

Hi ... It looks like we've just stumbled over the readOnly/writeOnly property issue relating to valid examples as raised in Issue #1274.

I'll freely admit to not being JS/TS savy but glancing at the test-case for the rule it doesn't look like any 'context' is passed in when checking the example .. so it wouldn't know if it was a request or response example being checked.

I was wondering if anybody was looking into this (this issue has been open for some time it seems) before I embarrass myself in public with a fix proposal.

Thx
