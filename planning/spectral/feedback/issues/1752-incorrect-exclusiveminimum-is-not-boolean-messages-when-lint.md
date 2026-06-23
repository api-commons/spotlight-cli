---
number: 1752
title: "Incorrect \"exclusiveMinimum is not boolean\" messages when linting 3.1.0 schema"
state: "closed"
labels: ["t/bug", "released", "p/medium", "triaged"]
author: "matgr1"
created: "2021-07-22T22:57:08Z"
updated: "2021-08-19T12:17:40Z"
comments: 1
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/1752"
---

# Incorrect "exclusiveMinimum is not boolean" messages when linting 3.1.0 schema

**Describe the bug**
When linting a simple 3.1.0 schema that includes an `exclusiveMinimum` and `default` value, it seems to work OK, but I get some messages that `exclusiveMinimum is not boolean`. Note that it appears this happens when a `default` value is also specified (if this is removed, the console messages do not appear)
```
OpenAPI 3.x detected
OpenAPI 3.1.x detected
exclusiveMinimum is not boolean
exclusiveMinimum is not boolean
No results with a severity of 'error' or higher found!
```

**To Reproduce**

1. Given this OpenAPI/AsyncAPI document
```
openapi: 3.1.0
info:
  title: Foo
  description: |
    Bar.
  contact:
    name: Foo
    url: https://foo.invalid
  version: 1.2.3
tags:
  - name: foo
    description: bar
servers:
  - url: https://bar.invalid
    description: bar server
paths:
  /foo:
    get:
      summary: foo.
      operationId: foo
      tags:
        - foo
      description: |
        foo
      responses:
        '200':
          $ref: '#/components/responses/Foo'
components:
  responses:
    Foo:
      description: |
        foo.
      content:
        application/json:
          schema:
            type: object
            properties:
              foo:
                type: number
                exclusiveMinimum: 0
                default: 1

```
2. Run this CLI command `npx @stoplight/spectral@6.0.0-alpha3 lint openapi.yaml`
3. See console output above

**Expected behavior**
no `exclusiveMinimum is not boolean` messages printed to the console

**Environment:**
 - Library version: 6.0.0-alpha3
 - OS: Ubuntu 20.04
