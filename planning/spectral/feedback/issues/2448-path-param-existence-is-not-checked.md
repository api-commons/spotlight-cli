---
number: 2448
title: "Path param existence is not checked"
state: "closed"
labels: []
author: "nmoreaud"
created: "2023-04-03T07:45:24Z"
updated: "2023-04-03T07:56:33Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2448"
---

# Path param existence is not checked

**Describe the bug**
Path param variables are not checked for existance/consistency with respective path declaration.
It seems that the field name spec here is not checked: https://spec.openapis.org/oas/v3.1.0#fixed-fields-9

**To Reproduce**

All the documents bellow are considered "valid" but I suspect they should not.

```yaml
openapi: "3.0.0"
info:
  title: Simple API overview
  version: 2.0.0
paths:
  /users/{id}: # id is not defined
    get:
      responses:
        '200':
          description: successful operation
```

```yaml
openapi: "3.0.0"
info:
  title: Simple API overview
  version: 2.0.0
paths:
  /users/{id}:
    get:
      parameters:
      - in: path
        name: toto   # wrong name
        required: true
        schema:
          type: integer
      responses:
        '200':
          description: successful operation
```

```yaml
openapi: "3.0.0"
info:
  title: Simple API overview
  version: 2.0.0
paths:
  /users/{id}:
    get:
      parameters:
      - in: path
        name: id
        required: true
        schema:
          type: integer
      - in: path
        name: var2   # wrong name
        required: true
        schema:
          type: integer
      responses:
        '200':
          description: successful operation
```


**Environment (remove any that are not applicable):**
npx @stoplight/spectral-cli --version: 6.6.0
WSL 2 ubuntu 20.04
