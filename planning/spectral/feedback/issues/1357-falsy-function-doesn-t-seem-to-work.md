---
number: 1357
title: "Falsy function doesn't seem to work"
state: "closed"
labels: ["t/bug"]
author: "lehphyro"
created: "2020-09-29T16:26:52Z"
updated: "2020-09-30T12:21:18Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1357"
---

# Falsy function doesn't seem to work

**Describe the bug**
The falsy function doesn't seem to be working and I couldn't find built-in rules using it.

**To Reproduce**

1. Given this OpenAPI document:
```
openapi: 3.0.3
info:
  title: Test
  version: 1.0.0
  description: Description
  license:
    name: My license
    url: https://www.test.com/legal
paths:
  /test:
    get:
      summary: Test get
      description: Description
    responses:
```

2. And this linting rule:
```
no-license:
  description: “No license allowed”
  given: “$.info”
  severity: error
  then:
    field: license
    function: falsy
```

3. See that spectral still allows a license attribute

**Expected behavior**
A validation message saying that license attribute is not allowed.

Forum link: https://community.stoplight.io/t/falsy-function-doesnt-seem-to-work/1514
