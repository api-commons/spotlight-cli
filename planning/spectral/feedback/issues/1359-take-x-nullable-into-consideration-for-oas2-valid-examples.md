---
number: 1359
title: "Take x-nullable into consideration for oas2 valid examples"
state: "closed"
labels: ["t/bug", "v6"]
author: "igas"
created: "2020-09-30T02:09:25Z"
updated: "2021-01-04T16:03:25Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1359"
---

# Take x-nullable into consideration for oas2 valid examples

**Describe the bug**

`oas2-valid-response-schema-example` does not consider `x-nullable`

**To Reproduce**

1. clone https://github.com/igas/examples-examples
2. `spectral lint oas2.yaml`
3. See error `63:24    error  oas2-valid-response-schema-example  `nickname` property type should be string`

**Expected behavior**
Because nickname has x-nullable I expect it not to raise error

**Additional context**
I believe it's related to #1284 as it started failing with 5.5.0 upgrade attempt
