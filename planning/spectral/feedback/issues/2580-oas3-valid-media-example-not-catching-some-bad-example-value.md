---
number: 2580
title: "oas3-valid-media-example not catching some bad example values"
state: "open"
labels: ["t/bug", "p/medium", "triaged"]
author: "pemba-sherpa-sage"
created: "2024-01-22T17:57:43Z"
updated: "2024-05-31T09:24:19Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2580"
---

# oas3-valid-media-example not catching some bad example values

**Describe the bug**
oas3-valid-media-example doesn't flag the stray field provided in the media example as an error

**To Reproduce**

1. Given this OpenAPI/AsyncAPI document (name.yaml)
```yaml
openapi: 3.0.0
info:
  title: Sample API
  version: 1.0.0
  description: Sample OpenAPI Spec with a Schema

paths:
  /sample:
    get:
      summary: Get Sample Data
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SampleSchema'
              example:
                name: null     # this is caught by the spectral rule
                dateOfBirth: 1990-01-01
                status: test  # this not caught by the spectral rule until the first error (name) is fixed
                age: 12      # this does not exist in the schema

components:
  schemas:
    SampleSchema:
      type: object
      properties:
        name:
          type: string
          example: John Doe
        dateOfBirth:
          type: string
          format: date
          example: 1990-01-01
        status:
          type: string
          enum:
            - active
            - inactive
          example: active

```
2. the following spectral rule: (.spectral.yml)
```yaml
extends: spectral:oas
```
4. Run this CLI command '....'
```unix
spectral lint --ruleset=.spectral.yml name.yaml
```

**Expected behavior**
- The rule should flag the stray field provided in the `example` (i.e `age`) since it does not exist in the schema
- If an example is bad, it stops at the first bad example and doesn't process others until you fix it. I believe it should catch all instead of fail on first for example evaluation

**Environment (remove any that are not applicable):**
 - Spectral version 6.5.0
 - OS: Darwin/Mac
