---
number: 1404
title: "Support the ignoring of specific rules from the OAS definition"
state: "closed"
labels: []
author: "savage-alex"
created: "2020-11-12T13:28:55Z"
updated: "2020-12-09T18:20:55Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1404"
---

# Support the ignoring of specific rules from the OAS definition

**User story.**
As an API Designer
I want to improve my legacy APIs overtime and not be told off for non compliance when I cannot change
So that any errors shown are useful and I am not overwhelmed

**Is your feature request related to a problem?**
There is not a way to disable specific rules from the API definition. The spectral file has to be changed. 

**Describe the solution you'd like**
Zally https://github.com/zalando/zally allows the use of `x-zally-ignor` within the API definition to disable specific rules (as does other linters we use)
It would be great to be able to provide an ID for each rule similar how google AIPs have (this will also help tie back linting rules to standards) and to include an ignor property (at API, path or operation level) that will disable the linting of specific rules if the legacy API is not able to be compliant with all rules at this time.
