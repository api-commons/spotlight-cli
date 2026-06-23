---
number: 1501
title: "False negative oas3-schema warning when using `simple` parameter style"
state: "closed"
labels: ["t/bug"]
author: "DavidBiesack"
created: "2021-02-10T13:24:38Z"
updated: "2021-02-10T13:34:35Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1501"
---

# False negative oas3-schema warning when using `simple` parameter style

**Describe the bug**

spectral emits an `oas3-schema` warning for an OpenAPI 3.0.0 doc that uses `style: simple` parmater

**To Reproduce**

1. Given this OpenAPI/AsyncAPI document named `style.yaml` : 

```yaml
openapi: 3.0.0
info:
  title: Spectral style bug
  contact:
    name: Stoplight
  description: 'Show false negative on `style: simple`.'
  version: 0.0.1
servers:
  - url: /spectral-issues
tags:
  - name: Bug
    description: Demonstrate spectral oas3-schema bug.
paths:
  /:
    get:
      operationId: simple
      description: GET /?q=a,b or GET /?q=c,b etc.
      tags:
        - Bug
      parameters:
        - name: q
          in: query
          description: A comma-separated list of values.
          style: simple
          schema:
            type: string
            items:
              type: string
              enum:
                - a
                - b
                - c
      responses:
        '200':
          description: OK
```

2. Run this CLI command:

```
$ spectral lint style.yaml
```

3. See error

```text
OpenAPI 3.x detected

/Users/david.biesack/dev/apis/spectral-issues/style.yaml
 24:18  error  oas3-schema  `style` property should be equal to one of the allowed values: `form`, `spaceDelimited`, `pipeDelimited`, `deepObject`.

✖ 1 problem (1 error, 0 warnings, 0 infos, 0 hints)
```

**Expected behavior**
No warning for valid use of the [parameter `style: simple`](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md#style-values)


**Environment (remove any that are not applicable):**
 - Library version: spectral `develop` branch, commit `0a8e0a6cbd53018d84352f749ba6ee2b71320498`
 - OS: Mac OS
 - Browser: N/A
