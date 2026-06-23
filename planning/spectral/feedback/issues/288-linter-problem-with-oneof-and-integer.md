---
number: 288
title: "Linter problem with `oneOf` and integer"
state: "closed"
labels: []
author: "juanignaciosl"
created: "2019-07-05T07:31:47Z"
updated: "2019-07-08T08:55:18Z"
comments: 10
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/288"
---

# Linter problem with `oneOf` and integer

### **I'm submitting a...**
  - [x] bug report
  - [ ] feature request

### What is the current behavior?

```
openapi: "3.0.0"
info:
  version: 1.0.0
  title: Swagger Petstore
  description: Swagger Petstore
  license:
    name: MIT
  contact:
    name: Test
servers:
  - url: http://petstore.swagger.io/v1
paths:
  /pets:
    get:
      summary: Info for a specific pet
      operationId: showPetById
      description: Get a pet
      tags:
        - pets
      responses:
        '200':
          description: Expected response to a valid request
          content:
            application/json:
              schema:
                type: object
                additionalProperties:
                  oneOf:
                    - type: string
                    - type: number
                    - type: integer
                example:
                  a_property: 1234567890
```

```bash
$ spectral lint ~/Development/spectral-error.yml
Adding OpenAPI 3.x functions
OpenAPI 3.x detected

/home/juanignaciosl/Development/spectral-error.yml
 25:22  warning  valid-example  "a_property" property should be string
 25:22  warning  valid-example  "a_property" property should match exactly one schema in oneOf

✖ 2 problems (0 errors, 2 warnings, 0 infos)
```

### What is the expected behavior?

```
$ spectral lint ~/Development/spectral-error.yml
Adding OpenAPI 3.x functions
OpenAPI 3.x detected
No errors or warnings found!
```

In fact, if you remove the `- type: integer` section, you get it right.

### What is the motivation / use case for changing the behavior?

It's a bug.

### Please tell us about your environment:

```
$ spectral --version
@stoplight/spectral/3.1.0 linux-x64 node-v8.14.1
```
