---
number: 92
title: "Spectral's IRuleResult an IPosition reference which is always null"
state: "closed"
labels: ["released"]
author: "XVincentX"
created: "2019-02-17T14:26:15Z"
updated: "2019-03-28T14:13:07Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/92"
---

# Spectral's IRuleResult an IPosition reference which is always null

Spectral's `IRuleResult` interface which is the type returned from the validation process extends `IValidationResult` which has a nullable position reference.

While it is correct — Spectral does not have (yet?) the ability of generating the position information — these are up to the caller.

In order to reduce the confusion (which I personally had) it would be better to simply make sure such interface does not have that property at all.
