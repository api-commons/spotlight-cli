---
number: 1402
title: "Linter is missing non existing enums in the default"
state: "closed"
labels: ["t/bug", "OpenAPI", "v6"]
author: "savage-alex"
created: "2020-11-09T16:01:36Z"
updated: "2021-01-06T16:53:26Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1402"
---

# Linter is missing non existing enums in the default

Spectral 5.6.0

Given the following schema property
```yaml
property:
          type: string
          enum: [s, b, a, c]
          description: 'example schema for bug report'
          default: ''
          example: 'a'
```

Note that the validation on examples works great but no validation happens on default so I can leave it empty or put anything inside without spectral noticing.
