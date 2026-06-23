---
number: 2531
title: "Define Json Schema in OAS triggers no-$ref-siblings error"
state: "open"
labels: ["triaged"]
author: "htdan"
created: "2023-09-04T08:58:54Z"
updated: "2024-05-31T12:34:30Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2531"
---

# Define Json Schema in OAS triggers no-$ref-siblings error

**Describe the bug**
Tried to define Json Schema as part of API response with a Schema definition in the components section as follows (simplified).

`  "components": {
    "schemas": {
      "Schema": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string"
          },
          "$ref": {
            "type": "string",
            "format": "iri-reference"
          }
        }
      }
    }
  }`

When run spectral with the OAS, the following error reported. It is a false positive?

> 44:19    error  no-$ref-siblings  $ref must not be placed next to any other properties    components.schemas.Schema.properties.title

**To Reproduce**

1. Given a OpenAPI/AsyncAPI document  with above definition for Schema object.
2. Run this CLI command 'spectral lint <oas file name>'
3. See error similar to above

**Environment (remove any that are not applicable):**
 - Library version: latest
 - OS: Mac OS
