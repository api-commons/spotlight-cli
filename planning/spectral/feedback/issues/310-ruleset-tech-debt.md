---
number: 310
title: "Ruleset Tech Debt "
state: "closed"
labels: ["tech-debt"]
author: "brianmrock"
created: "2019-07-06T17:53:10Z"
updated: "2019-07-15T17:56:28Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/310"
---

# Ruleset Tech Debt 

Names are all a bit messed up, we still have some things called "Config" which should be removed.

src/config/_tests_/config.test.ts

src/config/configLoader

src/cli/commands/tests/lint.test.ts

Fixtures should have more meaningful name.Our Spectral default ruleset detection should be a bit more relaxed.There is an ongoing discussion over here https://github.com/stoplightio/spectral/pull/232#discussion_r300493597

![SD332.png](https://images.zenhubusercontent.com/5d07b17fefbbc90cc86cf6fa/8d8e6408-bd18-4a52-92d4-807d07d93fa6)

We haven’t decided on the final approach yet, but we’ll try to get the final spec done as soon as possible.We were planning to deprecate a couple of CLI flags, but these didn’t happen in https://github.com/stoplightio/spectral/pull/232. The flags we consider dropping are:

maxResults

The final decision has not been taken yet, but there was such a plan, so we should revisit the idea as a part of this story.
