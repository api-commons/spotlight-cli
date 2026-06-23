---
number: 2571
title: "Spectral oas3-unused-component warning"
state: "open"
labels: ["t/bug", "p/medium", "triaged", "OpenAPI"]
author: "igorkud90"
created: "2024-01-10T11:23:25Z"
updated: "2025-12-05T13:51:57Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2571"
---

# Spectral oas3-unused-component warning

**Describe the bug**
Spectral alert oas3-unused-component warning.

**To Reproduce**

1. Given this OpenAPI document and referenced document in same folder:

index.yaml
```yaml
openapi: 3.1.0
info:
  title: Test
  version: 1.0.0
paths:
  '/':
    description: test
    get:
      operationId: test
      description: test
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                $ref: './common.yaml#/components/schemas/ResponseType'
```

common.yaml
```yaml
openapi: 3.1.0
info:
  title: Common schema definition
  description: test
  version: 1.0.0
paths: {}
components:
  schemas:
    # Spectral lint warning "Potentially unused component has been detected."
    ResponseType:
      type: string
      example: test
      description: test
```

2. Run this CLI command
```bash
spectral lint index.yaml common.yaml
```

3. See warning
```bash

/tmp/test/common.yaml
 10:18  warning  oas3-unused-component        Potentially unused component has been detected.  components.schemas.ResponseType
```

**Expected behavior**
Component ResponseType used in index.yaml. Spectral can't alert oas3-unused-component warning.
