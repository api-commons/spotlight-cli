---
number: 1345
title: "String like 01234 is parsed as number in YAML - regression"
state: "closed"
labels: ["documentation"]
author: "davidkvc"
created: "2020-09-18T14:31:18Z"
updated: "2020-10-01T21:02:43Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1345"
---

# String like 01234 is parsed as number in YAML - regression

**Describe the bug**
When linting YAML OpenAPI 3.x schema string value that looks like number but starts with 0 is incorrectly considered to be a number. This produces linting error even though the document is correct.

**To Reproduce**

1. Given this OpenAPI document 
```yml
openapi: '3.0.2'
info:
  title: API Title
  version: '1.0'
servers:
  - url: https://api.server.test/v1
paths:
  /test:
    get:
      responses:
        '200':
          description: OK
          content:
            'application/json':
              schema:
                type: object
                properties:
                  value:
                    type: string
                    example: 0125487936
```
2. Run this CLI command `spectral lint the_document.yml`
3. I get this error ``20:30    error  oas3-valid-schema-example  `example` property type should be string``

**Expected behavior**
I would expect that the error is not produced and the schema is considered valid. This is how version 5.3.0 behaves.

**Environment:**
 - Library version: 5.5.0
