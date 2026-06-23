---
number: 2900
title: "Spectral schema/propertyNames rule does not flag invalid response codes for PUT"
state: "open"
labels: []
author: "Marton-J"
created: "2026-02-26T08:21:17Z"
updated: "2026-02-26T08:21:41Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2900"
---

# Spectral schema/propertyNames rule does not flag invalid response codes for PUT

**Describe the bug**
A Spectral rule using the schema/propertyNames approach does not flag invalid response codes for PUT operations in OpenAPI 3.1.1, even when the test data clearly violates the rule.

**To Reproduce**

.spectral.yaml:
```
put-must-only-return-200-or-201:
  description: "PUT ska endast returnera 200 OK eller 201 Created."
  message: "PUT får endast returnera 200 eller 201."
  severity: error
  given: $.paths[*].put.responses
  then:
    function: schema
    functionOptions:
      schema:
        type: object
        propertyNames:
          pattern: "^(200|201)$"
```

[test.json]:
```
"/dokumentarkivinfo/api/v1/dokument/{dokumentId}": {
  "put": {
    "responses": {
      "204": {
        "description": "No Content"
      }
    }
  }
}
```

**Expected behavior**
Spectral should flag the PUT operation as invalid because it returns 204 instead of 200 or 201.


**Environment (remove any that are not applicable):**
 - spectral 6.15.0
 - Windows 11
