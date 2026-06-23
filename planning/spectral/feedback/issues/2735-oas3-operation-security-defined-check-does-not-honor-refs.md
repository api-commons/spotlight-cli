---
number: 2735
title: "oas3-operation-security-defined check does not honor $refs"
state: "open"
labels: []
author: "rittneje"
created: "2024-11-14T21:28:29Z"
updated: "2024-11-14T21:28:29Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2735"
---

# oas3-operation-security-defined check does not honor $refs

**Describe the bug**

We have our security schemes defined in a common file, and then we reference them from our actual API file using `$ref`.

It seems that `oas3-operation-security-defined` does not handle this properly, and triggers a false positive.

**To Reproduce**

api.yaml
```yaml
openapi: "3.0.2"
info:
  version: 0.0.0
  title: Example API
  description: Example API
  contact:
    name: John Smith
    email: jsmith@example.com
servers:
  - url: https://example.com
tags:
- name: "foo"
paths:
  /api/v1/foobar:
   get:
      operationId: Foobar
      tags: ["foo"]
      description: foo
      security:
        - Oauth:
          - admin
      responses:
        "204":
          description: foo
components:
  securitySchemes:
    Oauth:
      $ref: "./common.yaml#/components/securitySchemes/Oauth"
```

common.yaml
```yaml
components:
  securitySchemes:
    Oauth:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://example.com/oauth/authorize
          tokenUrl: https://example.com/oauth/token
          refreshUrl: https://example.com/oauth/token
          scopes:
            admin: Admin scope
```

```
$ spectral lint --verbose --fail-severity=warn "api.yaml"
[...]
 21:13  warning  oas3-operation-security-defined  "admin" must be listed among scopes.  paths./api/v1/foobar.get.security[0].Oauth[0]
```

**Expected behavior**
It should pass validation.

**Screenshots**
n/a

**Environment (remove any that are not applicable):**
 - Library version: v6.14.1

**Additional context**

If I remove the ref and copy-paste, then it works.

api.yaml
```yaml
openapi: "3.0.2"
info:
  version: 0.0.0
  title: Example API
  description: Example API
  contact:
    name: John Smith
    email: jsmith@example.com
servers:
  - url: https://example.com
tags:
- name: "foo"
paths:
  /api/v1/foobar:
   get:
      operationId: Foobar
      tags: ["foo"]
      description: foo
      security:
        - Oauth:
          - admin
      responses:
        "204":
          description: foo
components:
  securitySchemes:
    Oauth:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://example.com/oauth/authorize
          tokenUrl: https://example.com/oauth/token
          refreshUrl: https://example.com/oauth/token
          scopes:
            admin: Admin scope
```

```
$ spectral lint --verbose --fail-severity=warn "api.yaml"
[...]
No results with a severity of 'warn' or higher found!
```
