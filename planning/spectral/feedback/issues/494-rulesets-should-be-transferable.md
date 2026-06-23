---
number: 494
title: "Rulesets should be transferable"
state: "closed"
labels: ["tech-debt"]
author: "P0lip"
created: "2019-08-26T20:56:59Z"
updated: "2019-08-27T15:15:40Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/494"
---

# Rulesets should be transferable

This is a complementary functionality to custom functions.
I had been aware of that before custom functions PR was merged, but since that PR was undergoing review, I didn't want to change its scope and alter the functionality.

The intention of the change is to have a `readRuleset` function returning a ruleset that can be serialized and hence transferred.
Right now, functions is an object containing actual JS functions as values, so they cannot be serialized. The plan is to snapshot the source code of custom functions and execute them at runtime.

Apart from that, I'm also implementing a timeout option for custom rulesets loaded over http.
