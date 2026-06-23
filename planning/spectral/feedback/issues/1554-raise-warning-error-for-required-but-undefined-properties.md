---
number: 1554
title: "Raise Warning/Error for required but undefined properties"
state: "closed"
labels: ["enhancement", "OpenAPI", "team/pierogi-platoon"]
author: "MalteEbner"
created: "2021-03-19T10:11:02Z"
updated: "2023-03-23T16:22:33Z"
comments: 2
reactions_total: 2
thumbs_up: 2
url: "https://github.com/stoplightio/spectral/issues/1554"
---

# Raise Warning/Error for required but undefined properties

**Describe the bug**
Inside a schema: If a property is required, but not defined, no error or warning is thrown.

**To Reproduce**
`schema.yml:`
```
ExampleSchema:
  type: object
  required:
    - prop1
    - prop2
  properties:
    prop1:
      type: string
```
`api.yml:`
```
openapi: 3.0.3
info:
  title: 'Example API'
  description: 'blub'
  version: 1.0.0

paths:
  /example:
    get:
      description: example
      operationId: exampleGet
      responses:
        '200':
          description: Get successful
          content:
            application/json:
              schema:
                $ref: 'schema.yml#/ExampleSchema'
```
1. Given the two documents above...
2. Run the CLI command `spectral lint api.yml`
3. No error or warning is thrown that `ExampleSchema.prop2` is undefined.

**Expected behavior**
There is a warning or error that `ExampleSchema.prop2` is undefined.

**Environment:**
 - Spectral version: 5.8.0
 - OS: MacOS BigSur 11.1
