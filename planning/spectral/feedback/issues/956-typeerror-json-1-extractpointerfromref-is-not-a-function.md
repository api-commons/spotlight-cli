---
number: 956
title: "TypeError: json_1.extractPointerFromRef is not a function"
state: "closed"
labels: ["t/bug"]
author: "lehphyro"
created: "2020-02-08T13:19:42Z"
updated: "2020-03-30T02:50:58Z"
comments: 5
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/956"
---

# TypeError: json_1.extractPointerFromRef is not a function

**Describe the bug**
Rule 'oas3-unused-components-schema' causes an error.

**To Reproduce**

1. Given this OpenAPI document:
```
openapi: 3.0.1
info:
  title: Test
  version: v1
  description: "Description"
  license:
    name: None
    url: https://www.google.com/legal
servers:
  - description: Prism mock server
    url: http://localhost:4010
tags:
  - name: sessions
paths:
  /sessions:
    description: Desc
    post:
      operationId: createSession
      description: Creates a new session
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                device:
                  description: Device information
                  type: string
              required:
                - device
      responses:
        '201':
          description: Session has been created successfully
          headers:
            x-rds-context:
              description: Session context data that is shared by all future requests
              schema:
                type: string
      tags:
      - sessions
components:
  schemas:
    ErrorItem:
      $ref: https://pastebin.com/raw/8YRYeFUY
```
2. Run this CLI command: `spectral lint openapi.yaml`
3. See error message:
```
OpenAPI 3.x detected
Encountered error when running rule 'oas3-unused-components-schema' on node at path '$,components,schemas':
TypeError: json_1.extractPointerFromRef is not a function
 
undefined
2:6   warning  info-contact  Info object should contain `contact` object.
43:15    error  oas3-schema   `ErrorItem` property type should be object
 
✖ 2 problems (1 error, 1 warning, 0 infos, 0 hints)
```

**Expected behavior**
No type errors in the output and something better than `undefined` below it would be nice.

**Environment:**
 - Library version: 5.0.0
