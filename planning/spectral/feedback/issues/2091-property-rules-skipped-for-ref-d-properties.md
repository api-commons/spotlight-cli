---
number: 2091
title: "Property rules skipped for $ref'd properties"
state: "open"
labels: ["t/bug", "triaged", "json-refs"]
author: "jeepshop"
created: "2022-03-15T14:32:37Z"
updated: "2024-12-20T01:02:36Z"
comments: 5
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2091"
---

# Property rules skipped for $ref'd properties

**Describe the bug**
Some of my casing rules don't apply to property names if the property is a $ref: This is occurring within Stoplight Studio but it seems to be a spectral issue.

**To Reproduce**

1. Given this OpenAPI/AsyncAPI document model '...'

```
{
  "title": "Batman",
  "type": "object",
  "properties": {
    "Id": {
      "type": "integer"
    },
    "aircraftTail": {
      "$ref": "./AircraftTail.json"
    },
    "aircraft": {
      "type": "string"
    },
    "LAC": {
      "type": "integer"
    }
  }
}
```

2. With this ruleset

```
    "model-properties-pascal-case": {
      "description": "Model properties MUST be written in PascalCase",
      "message": "{{path}} should be PascalCase",
      "severity": "warn",
      "given": "$.properties[*]~",
      "then":{
        "function":"pattern",
        "functionOptions": {
          "match": "^[A-Z][a-zA-Z0-9]*$"
        }
      }
    }
```

**Expected behavior**
Both aircraftTail and aircraft should be tagged with a warning for not being PascalCased, however only aircraft is tagged. Any property that is a $ref, the property name isn't rule checked.

**Screenshots**
![image](https://user-images.githubusercontent.com/24921675/158400800-eee91a33-dd84-42c4-bc20-999e5ff71821.png)
![image](https://user-images.githubusercontent.com/24921675/158400842-c6135ac5-a6d2-46ba-8d35-f907d88bc484.png)


**Environment (remove any that are not applicable):**
 - Stoplight Studio 2.8.0-statble.7260
 - Windows 10

**Additional context**
This problem is reproducible in individual models as well as within the main document rules.
