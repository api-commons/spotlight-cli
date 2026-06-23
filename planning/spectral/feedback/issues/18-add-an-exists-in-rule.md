---
number: 18
title: "Add an exists in rule"
state: "closed"
labels: ["enhancement"]
author: "casserni"
created: "2018-09-28T22:30:47Z"
updated: "2018-10-02T18:33:15Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/18"
---

# Add an exists in rule

!!!HOLD on this!!!!

- [ ] create a new existsIn rule
- [ ] options
  - properties to determine whether the key or some property? or do we assume its key
  - in with path to new path and the property
```
      "swagger:security-requirement-has-definition": {
        "type": "existsIn",
        "path": "$..paths.*.*.security.*",
        "enabled": true,
        "description": "security requirements must match a security definition",
        "existsIn": {
          "properties": "*",
          "in": { 
            "path": "$.securityDefinitions", 
            "properties": "*" 
          }
        }
      },
```
