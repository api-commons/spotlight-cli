---
number: 680
title: "Duplication of results"
state: "closed"
labels: ["t/bug"]
author: "nulltoken"
created: "2019-10-13T10:07:23Z"
updated: "2019-11-10T15:23:53Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/680"
---

# Duplication of results

**Describe the bug**

It's not uncommon to use a file (or a set of files) that acts as a "library" of reusable things.
When an error happens in that file, it looks like it gets reported multiple times.

**To Reproduce**

1. Given this OpenAPI document '...'

**repro/lib.yaml**
```yaml
openapi: 3.0.0

info:
  title: Lib
  version: "1"
  description: I'm here
  contact:
    name: API Support
    url: http://www.example.com/support
    email: support@example.com

servers:
  - url: http://api.example.com/v1

paths: {}

components:
  schemas:
    Test:
      type: integer
      example: "13"
```

**repro/A.yaml**
```yaml
openapi: 3.0.0

info:
  title: Title
  version: "1"
  description: I'm here
  contact:
    name: API Support
    url: http://www.example.com/support
    email: support@example.com

servers:
  - url: http://api.example.com/v1

paths:
  "/resource":
    get:
      description: fetch
      operationId: "12"
      tags: ["a"]
      responses:
        "200":
          description: Coolio
          content:
            application/json:
              schema:
                $ref: "./lib.yaml#/components/schemas/Test"
```

**repro/B.yaml**
```yaml
openapi: 3.0.0

info:
  title: Title
  version: "1"
  description: I'm here
  contact:
    name: API Support
    url: http://www.example.com/support
    email: support@example.com

servers:
  - url: http://api.example.com/v1

paths:
  "/resource":
    get:
      description: fetch
      operationId: "12"
      tags: ["a"]
      responses:
        "200":
          description: Coolio
          content:
            application/json:
              schema:
                $ref: "./lib.yaml#/components/schemas/Test"
```

**repro/C.yaml**
```yaml
openapi: 3.0.0

info:
  title: Title
  version: "1"
  description: I'm here
  contact:
    name: API Support
    url: http://www.example.com/support
    email: support@example.com

servers:
  - url: http://api.example.com/v1

paths:
  "/resource":
    get:
      description: fetch
      operationId: "12"
      tags: ["a"]
      responses:
        "200":
          description: Coolio
          content:
            application/json:
              schema:
                $ref: "./lib.yaml#/components/schemas/Test"
```

_Note:_ A.yaml, B.yaml and C.yaml share the same content for sake of easily building a repro case.

2. Run this CLI command '....'

```bash
$ yarn spectral lint "./repro/*.yaml"
yarn run v1.15.2
$ C:\node_modules\.bin\spectral lint ./repro/*.yaml
```
3. See error
```bash
OpenAPI 3.x detected
OpenAPI 3.x detected
OpenAPI 3.x detected
OpenAPI 3.x detected

c:/repro/lib.yaml
 21:16  error  valid-schema-example-in-content  "schema.example" property type should be integer
 21:16  error  valid-schema-example-in-content  "schema.example" property type should be integer
 21:16  error  valid-schema-example-in-content  "schema.example" property type should be integer
 21:16  error  valid-example-in-schemas         "Test.example" property type should be integer

✖ 4 problems (4 errors, 0 warnings, 0 infos, 0 hints)
```

**Expected behavior**
Deduplicating the errors would 
 - Reduce the noise from the report and make it easier to work through
 - Reduce the number of true root-cause errors  (and potentially help reducing the stress level of the average middle manager inspecting some random KPIs)

**Environment (remove any that are not applicable):**
 - Library version: 4.2.0
 - OS: Windows 3.11 *(nah... I'm just kidding)*
