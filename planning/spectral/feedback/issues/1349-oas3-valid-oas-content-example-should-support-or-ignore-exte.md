---
number: 1349
title: "oas3-valid-oas-content-example should support or ignore externalValue"
state: "closed"
labels: ["t/bug", "OpenAPI"]
author: "laat"
created: "2020-09-22T18:29:51Z"
updated: "2020-10-09T14:20:42Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1349"
---

# oas3-valid-oas-content-example should support or ignore externalValue

**Describe the bug**
oas3-valid-oas-content-example should support or ignore externalValue

**To Reproduce**
```yaml
openapi: 3.0.0
info:
  title: "API"
  version: "1.0.0"
  description: foobar
  contact:
    email: foo@example.com
    name: example
    url: example.com
tags:
  - name: foobar

servers:
  - url: foobar.com
paths:
  "/foobar":
    get:
      summary: "hello you"
      description: "hello you"
      tags:
        - foobar
      operationId: GetFoobar
      responses:
        "200":
          description: Success
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Foobar"
              examples:
                SomeResponse:
                  externalValue: "http://example.com/foobar.json"

components:
  schemas:
    Foobar:
      type: object
      required:
        - message
      properties:
        message:
          type: string
```

spectral lint this document gives this error:

```
OpenAPI 3.x detected

/Users/sigurd/git/documentation/public/documentation/openapi/mini/openapi.yaml
 31:30  error  oas3-valid-oas-content-example  `SomeResponse.value` property does not exist

✖ 1 problem (1 error, 0 warnings, 0 infos, 0 hints)
```

**Expected behavior**

It should validate externalValue


**Environment:**
Does not work in these versions:

 - 5.5.0
 - 5.6.0

Latest working version:

- 5.4.0
