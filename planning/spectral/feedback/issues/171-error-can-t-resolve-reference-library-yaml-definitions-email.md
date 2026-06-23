---
number: 171
title: "'Error: can't resolve reference ../library.yaml#/definitions/email from id #' when linting from cli"
state: "closed"
labels: ["enhancement"]
author: "nulltoken"
created: "2019-04-30T12:48:39Z"
updated: "2019-06-26T19:15:15Z"
comments: 5
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/171"
---

# 'Error: can't resolve reference ../library.yaml#/definitions/email from id #' when linting from cli

### **I'm submitting a...**
  - [ ] bug report
  - [x] feature request

### What is the current behavior?

Given two files:

- `repro/nested/one.yaml`

```
swagger: '2.0'

info:
  title: Repro one
  description: Endpoint definition
  version: "1.0.0"
  contact:
    name: toto
host: not-example.com
schemes:
  - https
basePath: /repro/nested/one

paths:
  /test:
    post:
      summary: Gets nothing
      operationId: "17"
      tags: [ one ]
      description: Cf. summary
      parameters:
        - name: body
          description: Content
          in: body
          schema:
            $ref: '#/definitions/TheDefinition'
          required: true
      responses:
        204:
          description: No content

definitions:
  TheDefinition:
    type: object
    properties:
      email:
        description: Email address.
        example: "toto@toto.com"
        $ref: '../library.yaml#/definitions/email'
```

- `repro/library.yaml`

```
definitions:
  email:
    type: string
```

linting from the cli returns an error

```
$ yarn spectral lint ./repro/nested/one.yaml
yarn run v1.15.2
$ C:\REDACTED\node_modules\.bin\spectral lint ./repro/nested/one.yaml
linting ./repro/nested/one.yaml
OpenAPI 2.0 (Swagger) detected
Encountered error when running rule 'valid-example' on node at path '$,definitions,TheDefinition,properties,email':
Error: can't resolve reference ../library.yaml#/definitions/email from id #
No errors or warnings found!
Done in 1.18s.
```

### What is the expected behavior?

Teach `valid-example` rule to honor relative remote references

### What is the motivation / use case for changing the behavior?

N/A

### Please tell us about your environment:

  - Version: @stoplight/spectral/2.0.6 
  - Framework: win32-x64 node-v10.14.2
  - Language: all
