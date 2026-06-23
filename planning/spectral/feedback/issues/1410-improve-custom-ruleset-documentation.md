---
number: 1410
title: "improve custom ruleset documentation"
state: "closed"
labels: []
author: "delanym"
created: "2020-11-24T08:31:08Z"
updated: "2021-01-13T20:01:21Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1410"
---

# improve custom ruleset documentation

The documentation is by example, but there's a lot of funky syntax going on that could be explained up front.

My use case is that I'm trying to create a rule where component schemas ending in "Request" or "Response" must have a property "x-message-type" with pattern [0-9]{4}

Its not clear to me how the selector works and how regex fits into that. 

Also the subject of ruleset groups (Recommended vs All) isn't explained anywhere. There's only a passing reference to it at https://meta.stoplight.io/docs/spectral/docs/guides/4-custom-rulesets.md#disabling-rules

What is this double bracket syntax? [[spectral:oas, all]]
Are there other groups?
