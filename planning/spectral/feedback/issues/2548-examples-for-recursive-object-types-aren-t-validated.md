---
number: 2548
title: "Examples for recursive object types aren't validated"
state: "open"
labels: ["enhancement", "triaged"]
author: "belka-ew"
created: "2023-10-18T19:29:04Z"
updated: "2024-05-31T12:34:32Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2548"
---

# Examples for recursive object types aren't validated

**Describe the bug**
Examples for recursive object types aren't validated.

**To Reproduce**

> .spectral.yaml

```yaml
extends:
  - [spectral:oas, recommended]
rules:
  info-contact: off
  oas3-api-servers: off
  operation-description: off
  oas3-valid-schema-example: true
```

> api.yaml

```yaml
openapi: 3.0.0

info:
  version: 1.0.0
  title: Title
  description: Description

paths:
  /:
    post:
      tags:
        - Tags
      operationId: operation

      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                external:
                  $ref: "#/components/schemas/A"
              example:
                external: A-1
      responses:
        "201":
          description: Created

tags:
  - name: Tags

components:
  schemas:
    A:
      type: object
      properties:
        internal:
          $ref: "#/components/schemas/A"
```

2. Run this CLI command `./spectral lint api.yml`.
3. Produces no error.

**Expected behavior**
Replacing the `$ref` in `A.internal` with `type: number` produces an error:

> 24:27  error  oas3-valid-schema-example  "external" property type must be object  paths./.post.requestBody.content.application/json.schema.example.external

But this doesn't happen for an object as in the example above.

**Environment:**
 - Library version: 6.11.0
 - OS: Slackware Linux 15.0
 - Platform: 64 bit
