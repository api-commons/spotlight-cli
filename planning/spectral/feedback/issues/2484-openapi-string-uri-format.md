---
number: 2484
title: "OpenAPI string uri format"
state: "closed"
labels: []
author: "rubensa"
created: "2023-06-09T09:45:05Z"
updated: "2023-06-15T10:13:08Z"
comments: 2
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/2484"
---

# OpenAPI string uri format

**Describe the bug**

The **uri** format for the **string** type in OpenAPI is not validated correctly.  Looks like only absolute URIs (vs relative) are supported.

The [URI specification says](https://www.rfc-editor.org/rfc/rfc3986#appendix-B):

```
The following line is the regular expression for breaking-down a well-formed URI reference into its components.

^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?
```

**To Reproduce**

1. Given this OpenAPI document

```yaml
openapi: 3.0.0
info:
  contact:
    name: Test
  description: Test
  title: Test
  version: 1.0.0
servers:
  - url: http://localhost:8080
    description: Localhost
paths:
  /test:
    get:
      description: Test
      operationId: test
      responses:
        "200":
          description: OK
          content:
            application/json:
              schema:
                type: object
                properties:
                  instance:
                    type: string
                    format: uri
                example: { "instance": "/tenant/api/v1/scenario" }
      tags:
        - test
tags:
  - name: test
    description: Test
```

2. See error

`"instance" property must match format "uri"`

**Expected behavior**

No errors are shown as the provided _instance_ URI value is correct according to the [URI specification](https://www.rfc-editor.org/rfc/rfc3986).

**Screenshots**

![Screenshot from 2023-06-09 11-26-44](https://github.com/stoplightio/spectral/assets/1469340/8192ac54-12e7-4bb8-84cf-65b038bb7888)

**Environment (remove any that are not applicable):**
 - Library version: The one included with the [Spectral Linter for VS Code](https://github.com/stoplightio/vscode-spectral) v1.1.2
 - OS: Ubuntu 22.04

**Additional context**

If I replace:
```yaml
                  instance:
                    type: string
                    format: uri
```
with:
```yaml
                  instance:
                    type: string
                    pattern: '^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?'
```
format validation success.
