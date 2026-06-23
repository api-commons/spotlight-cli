---
number: 2007
title: "Incorrect path printed when referencing an object inside nested $refs"
state: "open"
labels: ["t/bug", "triaged", "json-refs"]
author: "dwhayduk"
created: "2021-12-20T20:31:12Z"
updated: "2024-05-31T12:35:12Z"
comments: 0
reactions_total: 8
thumbs_up: 8
url: "https://github.com/stoplightio/spectral/issues/2007"
---

# Incorrect path printed when referencing an object inside nested $refs

**Bug Description**
If an API is being linted that has several $ref's in it, then our linter can sometimes fail to print the correct path in the final error message. It still has an internal path to the true error that it can use for all other intents and purposes (like for use inside the rule functions), but in the message that prints to the console, the location is presented on an incomplete path. This is sometimes eliminating errors when there are multiple problems on similar deep paths.

**To Reproduce**

1. Given this ruleset:

```json
{
  "rules": {
    "oas3-field-names-camel-case": {
      "description": "Representation field names should use lowerCamelCase.",
      "message": "{{property}} field is not lowerCamelCase",
      "formats": ["oas3"],
      "severity": "error",
      "given": [
        "$.paths.*.*.responses.*.content.*.*..[*]~",
        "$.paths.*.*.requestBody.content.*.*..[*]~",
        "$.paths.*.*.parameters.*"
      ],
      "then": {
        "function": "casing",
        "functionOptions": {
          "type": "camel"
        }
      }
    }
  }
}
```

...and this API:

```yml
openapi: '3.0.3'
info:
  title: Sample API
  description: This is a sample API.
  version: '1.0'
  contact:
    name: John Smith
servers:
  - url: http://api.example.com
tags:
  - name: Sample
    description: This is a sample tag.
paths:
  /test:
    post:
      description: Get some test data.
      operationId: getTestData
      parameters:
        - in: query
          name: userId
          schema:
            type: integer
          required: true
          description: Numeric ID of the user to get.
      tags:
        - Sample
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: string
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                $ref: '#/Location1'

Location1:
  anObjectName:
    $ref: '#/Location2'

Location2:
  BadCamelCase:
    type: string
  ReallyBadCamelCase:
    type: string
```

2. Run this CLI command: ```spectral lint --ruleset <JSON ruleset file> <API file>```

3. See printed error message:

```
42:16  error  oas3-field-names-camel-case  anObjectName field is not lowerCamelCase  Location1.anObjectName

✖ 1 problem (1 error, 0 warnings, 0 infos, 0 hints)

```

**Expected behavior**
Two error messages should be printed, pointing to the locations of BadCamelCase (Line 46, Location2.BadCamelCase) and ReallyBadCamelCase (Line 48, Location2.ReallyBadCamelCase). However, given this specific case of nested $refs with object names along the path, the path that Spectral reads can only reach Location1.anObjectName, and does not reference the full path to either of the two words that break the camel case rule. A detailed list of examples of $ref situations that do and don't work can be found in this discussion post: [https://github.com/stoplightio/spectral/discussions/1909](https://github.com/stoplightio/spectral/discussions/1909)

**Environment:**
 - Library version: 5.9.1
 - OS: macOS Big Sur 11.6.2
