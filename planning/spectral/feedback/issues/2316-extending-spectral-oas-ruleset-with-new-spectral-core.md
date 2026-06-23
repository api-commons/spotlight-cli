---
number: 2316
title: "Extending `spectral:oas` ruleset with new spectral-core"
state: "closed"
labels: ["chore"]
author: "ognjen-andric"
created: "2022-10-24T08:51:29Z"
updated: "2022-10-24T09:21:18Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2316"
---

# Extending `spectral:oas` ruleset with new spectral-core

We are currently migrating away from `spectral` package into `spectral-core`.
We used to have following specification : 
```
extends: spectral:oas
rules:
  info-contact: false
```
But now when I want to enter an extend for `spectral:oas`, I can see its type is now `RulesetDefinition | [RulesetDefinition, FileRulesetSeverityDefinition]`. 

Is `spectral:oas` being exported anywhere from the `spectral-core` package?
