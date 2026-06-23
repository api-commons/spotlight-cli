---
number: 2543
title: "Double external ref to external ref to recursive schema causes false \"ref does not exist\" (OAS)"
state: "open"
labels: ["triaged"]
author: "FeepingCreature"
created: "2023-10-06T14:47:31Z"
updated: "2024-05-31T12:34:30Z"
comments: 0
reactions_total: 1
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2543"
---

# Double external ref to external ref to recursive schema causes false "ref does not exist" (OAS)

**Describe the bug**

When linting two schemas that both reference a schema in another file, which references a recursive schema in another file, a false "ref does not exist" error is generated.

**To Reproduce**

1. Create rules.yml

```
extends:
  - [spectral:oas, recommended]
rules:
  info-contact: off
  oas3-api-servers: off
  operation-description: off
```
2. Create foo.yml
```
openapi: 3.0.0
info:
  version: 1.0.0
  title: foo
  description: foo
paths:
  /:
    get:
      tags:
        - Foo
      operationId: foo
      responses:
        "200":
          description: OK
          content:
            application/json:
              schema:
                items:
                  $ref: "proxy.yml#/components/schemas/Proxy"
tags:
  - name: Foo
```
3. Create bar.yml
```
openapi: 3.0.0
info:
  version: 1.0.0
  title: bar
  description: bar
paths:
  /:
    get:
      tags:
        - Bar
      operationId: bar
      responses:
        "200":
          description: OK
          content:
            application/json:
              schema:
                items:
                  $ref: "proxy.yml#/components/schemas/Proxy"
tags:
  - name: Bar
```
4. Create proxy.yml
```
components:
  schemas:
    Proxy:
      properties:
        recursive:
          $ref: "recursive.yml#/components/schemas/Recursive"
```
5. Create recursive.yml
```
components:
  schemas:
    Recursive:
      properties:
        next:
          $ref: "#/components/schemas/Recursive"
```
6. `spectral lint --ruleset rules.yml foo.yml bar.yml`
```
foo.yml
 1:1  error  invalid-ref  '#/components/schemas/Recursive' does not exist  components.schemas.Proxy.properties.recursive.properties.next.$ref
```

**Expected behavior**
No error is produced.

**Environment (remove any that are not applicable):**
 - Spectral version: 6.11.0

**Additional context**
Only linting a single schema, foo.yml or bar.yml at a time, makes the error disappear.
Inlining any ref or moving it into another file, makes the error disappear.
