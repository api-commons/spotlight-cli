---
number: 1211
title: "Support validating examples keyword of a JSON schema"
state: "closed"
labels: []
author: "awlayton"
created: "2020-06-05T19:31:11Z"
updated: "2020-06-12T17:16:09Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1211"
---

# Support validating examples keyword of a JSON schema

**User story.**
I am trying to migrate my schema checking from mocha tests I wrote to spectral. There is a way to validate the `example` keyword of OAS3 already, but I also need to validated the `examples` array keyword of JSON Schema.

**Describe the solution you'd like**
Perhaps `schemaPath` could support a JSONPath in place of a field?

**Additional context**
Here was my attempt at a custom rule before realizing it is not possible with `schemaPath`:
```json
{
  "valid-examples": {
    "description": "Examples must be valid against their schema",
    "message": "{{error}}",
    "recommended": true,
    "type": "validation",
    "given": "$.examples^",
    "then": {
      "function": "schemaPath",
      "functionOptions": {
        "allErrors": true,
        "field": "$.examples[*]",
        "schemaPath": "$"
      }
    }
  }
}
```

Or maybe support saying that the field is an array?
```json
{
  "valid-examples": {
    "description": "Examples must be valid against their schema",
    "message": "{{error}}",
    "recommended": true,
    "type": "validation",
    "given": "$.examples^",
    "then": {
      "function": "schemaPath",
      "functionOptions": {
        "allErrors": true,
        "arrayField": true,
        "field": "examples",
        "schemaPath": "$"
      }
    }
  }
}
```
