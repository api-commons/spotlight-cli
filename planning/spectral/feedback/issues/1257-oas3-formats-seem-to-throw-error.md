---
number: 1257
title: "OAS3 formats seem to throw error"
state: "closed"
labels: ["t/bug"]
author: "connorpwilliams"
created: "2020-06-25T19:02:54Z"
updated: "2020-06-26T12:17:26Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1257"
---

# OAS3 formats seem to throw error

**Describe the bug**
All of the Spectral rulessets I have put together generate a lot of errors when using the npm package

**To Reproduce**
load this ruleset while using npm package
```yaml
extends: 'spectral:oas'
rules:
  se_oas3_components_must_exist:
    type: style
    given: $
    formats:
      - oas3
    message: '{{error}}'
    then:
      field: components
      function: schema
      functionOptions:
        type: object
        minItems: 1
```
Try to process any Open API Specification

**Expected behavior**
No errors displayed in console

**Environment (remove any that are not applicable):**
 - Library version: [e.g. 5.4.0]
 - OS: [e.g. Windows 10]
 - Browser: N/A

**Additional context**
Errors reported
```node
[
    {
        "keyword": "additionalProperties",
        "dataPath": "/rules/se_oas3_components_must_exist/then/functionOptions",
        "schemaPath": "#/definitions/Then/allOf/6/then/properties/functionOptions/additionalProperties",
        "params": {
            "additionalProperty": "type"
        },
        "message": "should NOT have additional properties"
    },
    {
        "keyword": "additionalProperties",
        "dataPath": "/rules/se_oas3_components_must_exist/then/functionOptions",
        "schemaPath": "#/definitions/Then/allOf/6/then/properties/functionOptions/additionalProperties",
        "params": {
            "additionalProperty": "minItems"
        },
        "message": "should NOT have additional properties"
    },
    {
        "keyword": "required",
        "dataPath": "/rules/se_oas3_components_must_exist/then/functionOptions",
        "schemaPath": "#/definitions/Then/allOf/6/then/properties/functionOptions/required",
        "params": {
            "missingProperty": "schema"
        },
        "message": "should have required property 'schema'"
    },
    {
        "keyword": "if",
        "dataPath": "/rules/se_oas3_components_must_exist/then",
        "schemaPath": "#/definitions/Then/allOf/6/if",
        "params": {
            "failingKeyword": "then"
        },
        "message": "should match \"then\" schema"
    },
    {
        "keyword": "type",
        "dataPath": "/rules/se_oas3_components_must_exist/then",
        "schemaPath": "#/oneOf/0/properties/then/anyOf/1/type",
        "params": {
            "type": "array"
        },
        "message": "should be array"
    },
    {
        "keyword": "anyOf",
        "dataPath": "/rules/se_oas3_components_must_exist/then",
        "schemaPath": "#/oneOf/0/properties/then/anyOf",
        "params": {},
        "message": "should match some schema in anyOf"
    },
    {
        "keyword": "type",
        "dataPath": "/rules/se_oas3_components_must_exist",
        "schemaPath": "#/definitions/HumanReadableSeverity/type",
        "params": {
            "type": "string"
        },
        "message": "should be string"
    },
    {
        "keyword": "enum",
        "dataPath": "/rules/se_oas3_components_must_exist",
        "schemaPath": "#/definitions/HumanReadableSeverity/enum",
        "params": {
            "allowedValues": [
                "error",
                "warn",
                "info",
                "hint",
                "off"
            ]
        },
        "message": "should be equal to one of the allowed values"
    },
    {
        "keyword": "type",
        "dataPath": "/rules/se_oas3_components_must_exist",
        "schemaPath": "#/oneOf/2/type",
        "params": {
            "type": "boolean"
        },
        "message": "should be boolean"
    },
    {
        "keyword": "type",
        "dataPath": "/rules/se_oas3_components_must_exist",
        "schemaPath": "#/oneOf/3/type",
        "params": {
            "type": "array"
        },
        "message": "should be array"
    },
    {
        "keyword": "oneOf",
        "dataPath": "/rules/se_oas3_components_must_exist",
        "schemaPath": "#/oneOf",
        "params": {
            "passingSchemas": null
        },
        "message": "should match exactly one schema in oneOf"
    }
]
```
