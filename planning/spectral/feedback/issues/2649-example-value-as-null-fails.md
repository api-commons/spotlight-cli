---
number: 2649
title: "Example value as null fails"
state: "open"
labels: []
author: "benjamin-mogensen"
created: "2024-07-03T10:52:03Z"
updated: "2024-07-03T10:52:03Z"
comments: 0
reactions_total: 3
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2649"
---

# Example value as null fails

**Describe the bug**
When OpenAPI specification contains `null` as an example value the Spectral engine reports `Cannot read properties of null (reading 'type')`

**To Reproduce**

1. Run Spectral validation on the following OAS:

```yaml
openapi: 3.0.0
info:
  version: 1.0.0
  title: Cat
  description: Cat API
  contact:
    name: Cat owner
    email: cats@cat.com
    url: https://developer.cats.com/contact-us
  license:
    url: https://www.cats.com/api-license-terms
    name: Cats 1.0
servers:
  - url: https://api.maersk.com/products
    description: Production Environment
paths:
  /cats:
    get:
      operationId: get-cats
      description: Cats
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: string
                nullable: true
                example: null
```

**Expected behavior**
It is expected that `null` is an allowed example value for `nullable` properties.

**CLI Environment:**
 - Spectral CLI version: 6.11.1
 - OS: Mac

**CLI Environment Output**
```console
(node:46129) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
Error running Spectral!
Use --verbose flag to print the error stack.
Error #1: Cannot read properties of null (reading 'type')
```

**Node.js Environment**
- @stoplight/spectral-core 1.18.3
- @stoplight/spectral-parsers 1.0.3
- @stoplight/spectral-ruleset-bundler 1.5.2
- @stoplight/spectral-rulesets 1.19.0
- @stoplight/spectral-runtime 1.1.2

**Node.js Environment Output**
![image](https://github.com/stoplightio/spectral/assets/73802221/5cd4c08d-4814-45ac-94dd-1db98b055949)
