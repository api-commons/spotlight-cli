---
number: 380
title: "Do not require JSON Schema to be inlined in rulesets"
state: "closed"
labels: ["enhancement", "tech-debt"]
author: "philsturgeon"
created: "2019-07-15T14:13:50Z"
updated: "2019-08-15T11:04:03Z"
comments: 10
reactions_total: 2
thumbs_up: 2
url: "https://github.com/stoplightio/spectral/issues/380"
---

# Do not require JSON Schema to be inlined in rulesets

**User story.**
As a ruleset maintainer, I would like to create rulesets which do not have JSON Schema inline, so that I can have more rules in a more concise file. 

**Is your feature request related to a problem?**
Currently the oas2 and oas3 rulesets have the OpenAPI metaschema files, and this is bloating a 100 line ruleset to almost 2k lines.

https://github.com/stoplightio/spectral/blob/develop/src/rulesets/oas2/index.json#L106

**Describe the solution you'd like**

Let’s add support for $ref with json-ref-resolver. 

```
    "oas2-schema": {
      "description": "Validate structure of OpenAPIv2 specification.",
      "message": "{{error}}",
      "type": "validation",
      "severity": 0,
      "recommended": true,
      "given": "$",
      "then": {
        "function": "schema",
        "functionOptions": {
          "schema": {
            "$ref": "../oas2-metaschema.json"
          }
        }
      }
```
