---
number: 187
title: "OpenAPI-specific Formats not supported"
state: "closed"
labels: ["t/bug", "validation"]
author: "akrabat"
created: "2019-05-09T13:46:26Z"
updated: "2019-05-21T12:45:04Z"
comments: 5
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/187"
---

# OpenAPI-specific Formats not supported

### **I'm submitting a...**
  - [x] bug report
  - [ ] feature request

### What is the current behavior?

Setting the `format` for an integer doesn't work.


test.yaml:
```
openapi: "3.0.2"
info:
  title: "Test"
  description: "Test spec"
  version: "1.0.0"
  contact:
    name: "Rob"
tags:
  - name: tag1
servers:
  - url: http://example.com

paths:
  /:
    get:
      operationId: root
      tags:
        - tag1
      summary: root
      description: The root node
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              type: object
              properties:
                ip_address:
                  description: IP address (as a `long int`)
                  type: integer
                  format: int64
                  example: 2886989840
      responses:
        '200':
          description: Nothing returned
```

Run:
```
$ spectral lint test.yaml
Linting test.yaml
OpenAPI 3.x detected
Encountered error when running rule 'valid-example' on node at path '$,paths,/,get,requestBody,content,application/x-www-form-urlencoded,schema,properties,ip_address':
Error: unknown format "int64" is used in schema at path "#"
No errors or warnings found!
```
### What is the expected behavior?

Spectral should not display:

```
Error: unknown format "int64" is used in schema at path "#"
```

Also, it should not display _No errors or warnings found!_ when the line above starts with the word `Error` !

### What is the motivation / use case for changing the behavior?

[The Spec](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#data-types) says that `int64` is a valid `format` and the petstore-expanded example shows [it in use](https://github.com/OAI/OpenAPI-Specification/blob/master/examples/v3.0/petstore-expanded.yaml#L132-L135).

### Please tell us about your environment:

```
$ spectral --version
@stoplight/spectral/2.1.1 darwin-x64 node-v8.12.0
```
