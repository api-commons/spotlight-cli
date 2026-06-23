---
number: 2655
title: "spectral-rulesets 1.19.0 breaks path $ref behavior "
state: "open"
labels: []
author: "jstuckey"
created: "2024-07-17T21:32:19Z"
updated: "2025-11-13T23:14:27Z"
comments: 12
reactions_total: 7
thumbs_up: 7
url: "https://github.com/stoplightio/spectral/issues/2655"
---

# spectral-rulesets 1.19.0 breaks path $ref behavior 

**Describe the bug**

Using a `$ref` keyword under a path http verb started producing an error in version 1.19.0 of the spectral-rulesets package:

```
error  oas3-schema  Property "$ref" is not expected to be here.     paths./<some_path>.<some_verb>.$ref
```

This behavior is not present in spectral-rulesets 1.18.1 and earlier. 

**To Reproduce**

1. Given this OpenAPI document 
```yaml
openapi: 3.0.3
info:
  title: Foo
  version: 1.0.0
  description: Foo API
  contact:
    name: Foo
tags:
  - name: FooTag
servers:
  - url: https://example.com
    description: Example

paths:
  /foos:
    get:
      $ref: 'foo_request.yaml'
```

```yaml
# foo_request.yaml
description: Get a list of foos
summary: List Foos
operationId: foosIndex
tags:
  - FooTag
responses:
  "200":
    description: A collection of foos
    content:
      application/json:
        schema:
          type: object
          properties:
            foos:
              type: array
              description: The list of foos
              items:
                type: string
```

2. Run this CLI command 
```
npx spectral lint openapi.yaml
```
3. See error
```
openapi.yaml
  16:9  error  oas3-schema  "get" property must have required property "responses".  paths./foos.get
 17:13  error  oas3-schema  Property "$ref" is not expected to be here.              paths./foos.get.$ref
```

**Expected behavior**

Using version 1.18.1 of the spectral-rulesets package produces the expected behavior:

```
No results with a severity of 'error' found!
```

**Environment (remove any that are not applicable):**
 - Library version: 6.11.1
 - OS: macOS Ventura

**Additional context**

If I had to hazard a guess, I suspect this change to be the culprit: https://github.com/stoplightio/spectral/pull/2574
