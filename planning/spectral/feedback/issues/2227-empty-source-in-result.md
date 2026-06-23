---
number: 2227
title: "Empty `source` in result"
state: "closed"
labels: []
author: "kotofeyskaya"
created: "2022-08-01T14:11:30Z"
updated: "2022-09-08T14:52:28Z"
comments: 10
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2227"
---

# Empty `source` in result

**Describe the bug**
We use a ruleset that extends **oas** ruleset. We have a document with a **$ref** in it. When we `run` spectral, the `source` in the result set is **undefined** for external refs.

**To Reproduce**

1. Given this OpenAPI/AsyncAPI document 
```
openapi: "3.0.0"
info:
  version: 1.0.0
  title: Swagger Petstore
  license:
    name: MIT
paths:
  /pets:
    $ref: './external/external-path-1.yaml#/~1pets'
```
and ref file:

We get the following result:
```
...
{
 code: "operation-description"
 message: "Operation \"description\" must be present and non-empty string."
 path: (3) ['paths', '/pets', 'get']
 range: {start: {…}, end: {…}}
 severity: 1
 source: undefined
}
```

**Expected behavior**
```
{
 code: "operation-description"
 message: "Operation \"description\" must be present and non-empty string."
 path: (3) ['paths', '/pets', 'get']
 range: {start: {…}, end: {…}}
 severity: 1
 source:'external/external-path-1.yaml'
}
```

**Environment (remove any that are not applicable):**
 - Library version: [e.g. 3.0.0]
 - OS: MacOS BigSur
 - Browser: [e.g. Chrome 103]
