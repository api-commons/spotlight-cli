---
number: 2081
title: "False error oas3-valid-schema-example  reference resolves to more than one schema"
state: "closed"
labels: ["t/bug", "released", "p/high", "triaged"]
author: "DavidBiesack"
created: "2022-03-07T16:29:55Z"
updated: "2023-12-13T12:27:36Z"
comments: 12
reactions_total: 6
thumbs_up: 6
url: "https://github.com/stoplightio/spectral/issues/2081"
---

# False error oas3-valid-schema-example  reference resolves to more than one schema

> For support questions, please use the [Stoplight Discord Community](https://discord.com/invite/stoplight). This repository's issues are reserved for feature requests and bug reports. If you are unsure if you are experiencing a bug, our Discord is a great place to start.
>
> **Please delete this section, any any sections below that you don't use, before creating the issue.**

**Describe the bug**
Spectral is generating a strange error when a schema has a property with the name `id`.

**To Reproduce**

1. Given this OpenAPI/AsyncAPI document 

```yaml
openapi: 3.0.3
info:
  title: Spectral Issue
  description: >-
    error oas3-valid-schema-example reference "bf23bc970b78d27691e8" resolves to more than one schema
  version: 0.1.0
  contact:
    name: Apiture

servers:
  - url: /spectral/issues

tags:
  - name: Spectral Issues
    description: Spectral Issues

paths:

  /path:
    get:
      operationId: getResource
      description: Get a resource
      tags:
        - Spectral Issues
      responses:
        '200':
          description: OK.
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/collection"


components:

  schemas:

    item:
      type: object
      properties:
        id:
          description: >-
            The unique identifier for this account resource.
            This is an immutable opaque string.
          readOnly: true
          type: string
          pattern: '^[-_:.~$a-zA-Z0-9]+$'
          minLength: 6
          maxLength: 48
          example: bf23bc970b78d27691e8
        url:
          description: >-
            The URL of this account instance. See the [`getAccount`](#op-getAccount) operation.
          readOnly: true
          maxLength: 256
          type: string
          format: uri
          example: https://api.apiture.com/banking/accounts/bf23bc970b78d27691e8
      example:
        id: bf23bc970b78d27691e8
        url: https://api.apiture.com/banking/accounts/bf23bc970b78d27691e8

    collection:
      required:
        - items
      type: object
      allOf:
        - type: object
          properties:
            items:
              description: The array of items in this page of accounts.
              readOnly: true
              type: array
              items:
                $ref: '#/components/schemas/item'
      example:
        items:
          - id: bf23bc970b78d27691e8
            url: https://api.example.com/spectral/issues/bf23bc970b78d27691e8
          - id: 8d27691e8bf23bc970b7
            url: https://api.example.com/spectral/issues/8d27691e8bf23bc970b7
```

and this `.spectral.yaml`
3. Run this CLI command: `spectral lint -r ./.spectral.yaml openapi.yaml`
4. See error

```
spectral lint -r ./.spectral.yaml openapi.yaml

./spectral-issues/openapi.yaml
 76:15  error  oas3-valid-schema-example  reference "bf23bc970b78d27691e8" resolves to more than one schema  components.schemas.collection.example

✖ 1 problem (1 error, 0 warnings, 0 infos, 0 hints)

```

**Expected behavior**

There should be no error here.

**Environment (remove any that are not applicable):**
 - Library version: spectral-cli 6.0.0 (newer versions are not working for me; see #2080 )
 - OS: Mac OS
 - Browser: N/A
