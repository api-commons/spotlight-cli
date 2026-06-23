---
number: 393
title: "new rules: error for anyOf & oneOf in OpenAPI v2"
state: "closed"
labels: ["enhancement"]
author: "rossmcdonald"
created: "2019-07-18T19:19:40Z"
updated: "2019-07-26T15:46:17Z"
comments: 5
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/393"
---

# new rules: error for anyOf & oneOf in OpenAPI v2

**User story.**

As an average user who is not completely familiar with the intricacies of JSON Schema <≠> OpenAPI and the differences between OpenAPI v2 and v3, I often mix up JSON Schema, OAS2 and OAS3 keywords like anyOf and oneOf, so please let me know when I put the wrong keyword in the wrong place.

**Is your feature request related to a problem?**

API description documents should conform to the description format in question, as putting invalid keywords in those documents can lead to inconsistent behavior across various tools that might mistakenly support those keywords. Other tooling which is actually compliant will then look like its failing.

**Describe the solution you'd like**

The rule should error if an `anyOf`, `oneOf` or `not` appears in OpenAPI v2, but `anyOf` is in fact allowed.
