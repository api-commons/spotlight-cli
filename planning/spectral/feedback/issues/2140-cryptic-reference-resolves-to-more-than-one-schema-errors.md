---
number: 2140
title: "Cryptic \"reference resolves to more than one schema\" errors"
state: "closed"
labels: []
author: "hudlow"
created: "2022-04-28T16:04:09Z"
updated: "2022-04-29T20:18:27Z"
comments: 2
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/2140"
---

# Cryptic "reference resolves to more than one schema" errors

**Describe the bug**
For certain schema compositions and example values, the `oas3-valid-media-example` and `oas3-valid-schema-example` rules emit `reference <value from example> resolves to more than one schema`.

**To Reproduce**

1. Given this OpenAPI document:
```yaml
openapi: 3.0.3
info:
  title: Foo API
  version: "1.0"
  description: API for foos
  contact:
    email: foowizard@example.com
servers:
- url: 'https://foo.example.com/v1'
tags:
- name: Foos
paths:
  /foo:
    get:
      description: Get a foo
      operationId: get_foo
      summary: Get foo
      tags:
      - Foos
      responses:
        '201':
          description: Got a foo!
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Foo'
              example:
                bars:
                - id: 2922d57a-537c-4ae4-b9d8-2f76c34569cf
components:
  schemas:
    Foo:
      description: It's a foo
      properties:
        bars:
          description: Array of bars!
          items:
            $ref: '#/components/schemas/Bar'
          type: array
          example:
          - id: 5b5bc80e-3692-49ce-81a2-6170764e70de
    Bar:
      oneOf:
      - $ref: '#/components/schemas/RealBar'
      - $ref: '#/components/schemas/NotRealBar'
    RealBar:
      type: object
      description: I'm a real bar!
      required:
      - id
      properties:
        id:
          description: The ID for this real bar
          type: string
      example:
        id: 6d353a0f-aeb1-4ae1-832e-1110d10981bb
    NotRealBar:
      description: I'm not a real bar!
      not:
        $ref: '#/components/schemas/RealBar'

```

2. Run `spectral lint <document>` with the `spectral:oas` ruleset
3. See error:

```sh
 27:23  error  oas3-valid-media-example   reference "6d353a0f-aeb1-4ae1-832e-1110d10981bb" resolves to more than one schema  paths./foo.get.responses[201].content.application/json.example
 40:19  error  oas3-valid-schema-example  reference "6d353a0f-aeb1-4ae1-832e-1110d10981bb" resolves to more than one schema  components.schemas.Foo.properties.bars.example
```

**Expected behavior**
As far as I can tell, these errors are spurious.

**Environment (remove any that are not applicable):**
 - Library version: 6.2.0
 - OS: macOS 12.3.1
