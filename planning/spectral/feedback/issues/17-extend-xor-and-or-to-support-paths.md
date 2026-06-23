---
number: 17
title: "Extend xor and or to support paths"
state: "closed"
labels: ["enhancement"]
author: "casserni"
created: "2018-09-28T21:31:51Z"
updated: "2018-10-02T17:33:59Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/17"
---

# Extend xor and or to support paths

- [ ] update type definition
- [ ] update logic
- [ ] paths should be relative to parent path defined in the rule

- open question, how to we handle comparing values of paths? since in the below example body and formData are not keys

example:

```
{
   "lint:formData-or-body": {
      "type": "xor",
      "path": "$..paths.*.*.parameters",
      "enabled": true,
      "description": "example should have either a value or externalValue member",
      "xor": {
          properties: ["orJustThisProperty"],
          paths: ["$.in.body", "$.in.formData"],
      }
   }
}
```
