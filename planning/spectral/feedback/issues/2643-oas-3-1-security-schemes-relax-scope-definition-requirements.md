---
number: 2643
title: "OAS 3.1 Security Schemes Relax \"Scope\" definition requirements - Updated Function/Rule ?"
state: "open"
labels: ["t/bug", "help wanted", "p/medium", "triaged"]
author: "dtolb"
created: "2024-06-14T14:34:55Z"
updated: "2026-05-22T06:04:02Z"
comments: 5
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2643"
---

# OAS 3.1 Security Schemes Relax "Scope" definition requirements - Updated Function/Rule ?

**Describe the bug**

According to the [OAS 3.1](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#security-requirement-object) security requirement objects. BearerAuth schemes in 3.1 are allowed to use scopes on the path without using Oauth2 schema. The rule [oas3-operation-security-defined](https://docs.stoplight.io/docs/spectral/4dec24461f3af-open-api-rules#oas3-operation-security-defined) is incorrectly reporting failure for 3.1.x documents.  

**To Reproduce**

1. Given this OpenAPI/AsyncAPI document '

```yaml
openapi: 3.1.0
info:
  title: Non-oAuth Scopes example
  version: 1.0.0
paths:
  /users:
    get:
      security:
        - bearerAuth:
            - 'read:users'
            - 'public'
components:
  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
      bearerFormat: jwt
      description: 'note: non-oauth scopes are not defined at the securityScheme level'
```

3. Run this CLI command '....'

`spectral -r oas.default.yaml my_oas.yaml`

5. See error

`... must be listed among scopes.  `


**Expected behavior**
Given this is a 3.1 document, I wouldn't expect an error for invalid OAS formatting from OAS 3.0. The [oasSecurityDefined.ts](https://github.com/stoplightio/spectral/blob/develop/packages/rulesets/src/oas/functions/oasSecurityDefined.ts) function should support a new option 3_1 that allows updated security scopes
