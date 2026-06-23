---
number: 403
title: "Invalid schema causes \"should have required property '$ref'\" error"
state: "closed"
labels: ["t/bug", "p/urgent", "cs/reported"]
author: "AnthonyPorthouse"
created: "2019-07-23T16:48:27Z"
updated: "2020-04-13T08:40:47Z"
comments: 24
reactions_total: 19
thumbs_up: 19
url: "https://github.com/stoplightio/spectral/issues/403"
---

# Invalid schema causes "should have required property '$ref'" error

**Describe the bug**
When an OpenAPI v3 Response Object contains a `schema` which has invalid schemas, an error is thrown saying: should have a required `$ref` property.

This is probably coming from better-ajv-errors, which is deduping errors which are saying "should be a valid sub schema, or should be a $ref" and its just showing the $ref bit. 

**To Reproduce**

1. Given this OpenAPI document 
```yaml
openapi: 3.0.1
info:
  title: Example $ref error
  version: 1.0.0
paths:
  /user:
    get:
      operationId: getUser
      responses:
        "200":
          description: An Example
          content:
            application/json:
              schema:
                type: object
                properties:
                  user_id: 12345
```

2. Run this CLI command `spectral lint openapi.yml`

3. See error

**Expected behavior**

Show a more appropriate validation error. In this instance, other validators return this error:

> Structural error at paths./user.get.responses.200.content.application/json.schema.properties.user_id should be object

**Environment:**
 - Library version: 4.0.1
 - OS: Mac OS 10.14.5
