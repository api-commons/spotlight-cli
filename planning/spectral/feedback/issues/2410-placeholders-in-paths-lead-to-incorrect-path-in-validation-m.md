---
number: 2410
title: "Placeholders in paths lead to incorrect path in validation messages"
state: "open"
labels: ["t/bug", "p/medium", "triaged", "c/spectral"]
author: "ductaily"
created: "2023-02-24T09:33:27Z"
updated: "2024-05-31T12:34:49Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2410"
---

# Placeholders in paths lead to incorrect path in validation messages

**Describe the bug**

Given an OAS document with paths defined that contain placeholders in this shape: `('{localId}')`.
We define a rule that evaluates response objects defined in such paths.

The result of the messages in case if some response object do not adhere to the define rule does not contain the correct path to the response object. Instead, only the `paths` property is shown in the path of the message.

**To Reproduce**

Example to run:
https://github.com/ductaily/spectral-odata-placeholder

```
{
  "openapi": "3.0.2",
  "info": {
    "title": "Service for namespace PetStore",
    "description": "This service is located at [/pet-store/](/pet-store/)",
    "version": "2"
  },
  "paths": {
    "/Dogs('{localId}')": {
      "get": {
        "summary": "Retrieve a single dog.",
        "tags": [
          "Dogs"
        ],
        "responses": {
          "200": {
            "description": "Retrieved dog",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PetStore.Dogs"
                }
              }
            }
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "PetStore.Dogs": {
        "title": "Dog",
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "maxLength": 200,
            "nullable": true
          },
          "birthDate": {
            "type": "string",
            "format": "date",
            "example": "2017-04-13",
            "nullable": true
          },
          "id": {
            "type": "string"
          }
        },
        "description": "Test"
      }
    }
  }
}
```

Rule:

```
const ruleset = {
  extends: [oas],
  rules: {
    "odata-place-holder": {
      message: "Field `x-custom-extension` missing.",
      severity: DiagnosticSeverity.Error,
      given: '$.paths.*.*.responses[?(@property.match(/^[12]/))].content.application/json[?(@.type == "object")]',
      then: {
        field: "x-custom-extension",
          function: truthy
      }
    }
  }
}
```

**Expected behavior**
Expected the message to contain the correct path to the object where the violation of the rule happened.
However, the message only contains `path: ["paths"]` instead the full path to the object.

**Environment (remove any that are not applicable):**
 - Library version: 6.6.0
