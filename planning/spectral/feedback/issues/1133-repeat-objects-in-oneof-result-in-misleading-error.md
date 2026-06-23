---
number: 1133
title: "Repeat objects in oneOf result in misleading error"
state: "closed"
labels: ["t/bug"]
author: "codyaray"
created: "2020-04-30T00:13:14Z"
updated: "2020-10-21T16:24:10Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1133"
---

# Repeat objects in oneOf result in misleading error

**Describe the bug**

This is a very weird issue where repeat types in a `oneOf` results in a misleading `oas3-valid-oas-content-example` error. I'm pretty sure this is an invalid spec, but it took me actually whittling my giant generated spec down for this bug report to realize what the actual bug was.

I don't know if this happens for repeat objects in `oneOf` in all situations, or if its just for `example`s in `responses` through N layers of schema `$ref`s.

**To Reproduce**

1. Given this OpenAPI/AsyncAPI document '...'

This is a (minimal relative to the original) reproduction of the issue.

```
openapi: 3.0.0
info:
  title: Foo API
  version: 0.1.0
  contact:
    name: Foo Support
  description: Something here
servers:
  - url: https://example.com/api/v1
paths:
  /foo:
    get:
      operationId: getFoo
      description: Does stuff
      tags: [Foo]
      responses:
        '204':
          description: Nothing to do
        '400':
          $ref: '#/components/responses/BadRequestError'
tags:
  - name: Foo
    description: Foo maloo
components:
  responses:
    BadRequestError:
      description: Bad Request
      content:
        application/vnd.api+json:
          schema:
            $ref: '#/components/schemas/Failure'
          example:
            errors:
              - links:
                  help: https://example.com/docs
  schemas:
    Failure:
      type: object
      properties:
        errors:
          type: array
          items:
            $ref: '#/components/schemas/Error'
    Error:
      type: object
      properties:
        links:
          $ref: '#/components/schemas/links'
    links:
      type: object
      additionalProperties:
        $ref: '#/components/schemas/link'
    link:
      oneOf:
        - type: string
        - type: object
          properties:
            href:
              type: string
        - type: string
```

2. Run this CLI command '....'

```
docker run --rm -it -v $(PWD):/tmp stoplight/spectral:5.3.0 lint "/tmp/openapi.yaml"
```

3. See error

```
OpenAPI 3.x detected

/tmp/openapi.yaml
 36:25  error  oas3-valid-oas-content-example  `help` property type should be object

✖ 1 problem (1 error, 0 warnings, 0 infos, 0 hints)
```

**Expected behavior**

Either
* no error, because it doesn't need to be an object, a string is allowed
* a "duplicate items in oneOf" error pointing to the schema

or something similar

**Environment:**
 - Library version: spectral 5.3.0

**Additional context**

To make it more interesting, if I update the response schema to point directly to `Error` instead of via `Failure`, Spectral doesn't give an error.

```
          schema:
            $ref: '#/components/schemas/Error'
```
