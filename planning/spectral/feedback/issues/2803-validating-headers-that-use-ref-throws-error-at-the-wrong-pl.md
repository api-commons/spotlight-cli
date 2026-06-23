---
number: 2803
title: "Validating headers that use $ref throws error at the wrong place"
state: "open"
labels: []
author: "erwinkramer"
created: "2025-04-11T08:41:51Z"
updated: "2025-04-11T08:45:42Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2803"
---

# Validating headers that use $ref throws error at the wrong place

**Describe the bug**
Validating headers that use $ref throws error at the wrong place

**To Reproduce**
Define this rule: 

```yaml
  header-requires-hyphenated-pascal-case:
    description: HTTP headers must be in Hyphenated-Pascal-Case.
    message: HTTP header is not in Hyphenated-Pascal-Case.
    severity: warn
    given: "$..responses..headers"
    then:
      field: "@key"
      function: pattern
      functionOptions:
        match: "^([A-Z][a-z0-9]*)(-[A-Z][a-z0-9]*)*$"
```

Make a document with this response header, this one works as expected and throws a validation error because `NonRef` should be `Nonref`: 

```yaml
"Access-Control-Expose-Headers-NonRef": {
                "schema": 
                  {
                    "maxLength": 70707070,
                    "pattern": ".*",
                    "type": "string",
                    "description": "A custom header for exposing specific information.",
                    "example": "CustomHeaderValue"
                  }
              }
```

Make a document with this response header, this one doesn't work as expected and does not throw a validation error **at the right place**, it should because `ByRef` should be `Byref`:

```yaml
 "Access-Control-Expose-Headers-ByRef": {
                "$ref": "#/components/headers/GenericStringHeader"
              },
```

Instead, it will tell me that the referenced component is invalid: 

![Image](https://github.com/user-attachments/assets/d3952377-c753-4adb-8a5b-8fca0c3c95a8)

The error goes away if i fix `ByRef` to be `Byref`, so my rule is okay, the errors are kind of okay, but just not giving the error at the right place in the document. 

A full example document can be found here: https://github.com/erwinkramer/bank-api/blob/main/Specs.Generated/openapi_v1.json

**Screenshots**
![Image](https://github.com/user-attachments/assets/0024162b-c054-4b77-9fe4-d2382e9d531e)

**Environment:**
 - Library version: 6.14.3
 - OS: Windows 11
