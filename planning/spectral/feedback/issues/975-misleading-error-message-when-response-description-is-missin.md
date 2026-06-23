---
number: 975
title: "Misleading error message when response description is missing"
state: "closed"
labels: ["t/bug"]
author: "bburtin"
created: "2020-02-19T21:59:09Z"
updated: "2020-03-23T19:08:42Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/975"
---

# Misleading error message when response description is missing

**Describe the bug**
When I omit the **description** field from a response, the error I get is "200 property should have required property $ref".  It would be better if spectral told the user that the description field is missing.

**To Reproduce**

Remove the **description** field from a response and run `spectral lint`

```
$ npx spectral lint test.yaml
OpenAPI 3.x detected

.../test.yaml
  1:1   warning  oas3-api-servers       OpenAPI `servers` must be present and non-empty array.
  1:1   warning  openapi-tags           OpenAPI object should have non-empty `tags` array.
  2:6   warning  info-contact           Info object should contain `contact` object.
  2:6   warning  info-description       OpenAPI object info `description` must be present and non-empty string.
  8:9   warning  operation-description  Operation `description` must be present and non-empty string.
  12:9  warning  operation-tag-defined  Operation tags should be defined in global tags.
 14:15    error  oas3-schema            `200` property should have required property `$ref`
```

**Expected behavior**
spectral should tell me that the **description** field is missing

**Environment (remove any that are not applicable):**
 - @stoplight/spectral@5.0.0
 - OS: Ubuntu 18.04

**Additional context**
```
$ cat test.yaml   
openapi: "3.0.0"
info:
  version: 1.0.0
  title: REST API

paths:
  /test:
    get:
      summary: List
      operationId: list
      tags:
      - Greenhouse
      responses:
        '200':
          content:
            application/json:
              schema:
                type: object
```
