---
number: 834
title: "Spectral and OAS 3.x requirement mismatches"
state: "closed"
labels: ["t/bug"]
author: "BigBlueHat"
created: "2019-12-04T16:41:43Z"
updated: "2020-01-26T10:37:39Z"
comments: 5
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/834"
---

# Spectral and OAS 3.x requirement mismatches

**Describe the bug**
Spectral requires `servers` and `description`, but OpenAPI 3.x does not.

**To Reproduce**

1. Given this OpenAPI document
```yaml
openapi: 3.0.1
info:
  title: Testing Overly Requirements
  version: 1.0.0
  contact:
    email: byoung@bigbluehat.com

paths:
  /example:
    get:
      responses:
        200:
          content:
            application/json:
              schema:
                type: object
                properties:
                  name: OK
                  type: boolean
                  default: true
```
2. Run this CLI command `spectral lint file.yaml`
3. See the error output below...
```
  1:1   warning  api-servers            OpenAPI `servers` must be present and non-empty array.
  2:6   warning  info-description       OpenAPI object info `description` must be present and non-empty string.
  10:9  warning  operation-description  Operation `description` must be present and non-empty string.
  10:9  warning  operation-operationId  Operation should have an `operationId`.
  10:9  warning  operation-tags         Operation should have non-empty `tags` array.
 12:13    error  oas3-schema            /paths//example/get/responses/200 should have required property '$ref'
```

**Expected behavior**
* `1.1` is incorrect as `servers` is not required ([see the OpenAPI Object fields](https://spec.openapis.org/oas/v3.0.2#openapi-object)):
  > An array of Server Objects, which provide connectivity information to a target server. If the servers property is not provided, or is an empty array, the default value would be a Server Object with a url value of /.

* `2:6` is incorrect as `description` is optional (and not even a SHOULD...[per the Info object fields info](https://spec.openapis.org/oas/v3.0.2#info-object)):
  > A short description of the application. CommonMark syntax MAY be used for rich text representation.

* `10:9` is incorrect as `description` on a [Path Item Object is also not required](https://spec.openapis.org/oas/v3.0.2#path-item-object):
  > An optional, string description, intended to apply to all operations in this path. CommonMark syntax MAY be used for rich text representation.

* `12:13` is incorrect as `$ref` is not required--but this probably relates to #403.

* Additionally, `description` *is* required for the [Response Object](https://spec.openapis.org/oas/v3.0.2#response-object) and should be appearing in this list, but doesn't...though that may be due to #403 also...

So...there seem to be some mismatches here and there. 😕 Hopefully they're easy tweaks!
