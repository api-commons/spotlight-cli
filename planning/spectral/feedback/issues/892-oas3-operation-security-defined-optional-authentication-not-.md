---
number: 892
title: "oas3-operation-security-defined: Optional authentication not supported"
state: "closed"
labels: ["t/bug"]
author: "m-mohr"
created: "2020-01-07T11:12:32Z"
updated: "2020-01-09T17:21:18Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/892"
---

# oas3-operation-security-defined: Optional authentication not supported

**Describe the bug**

The rule oas3-operation-security-defined complains that optional/no auth security as defined in the comment below is not part of the security schema:
https://github.com/OAI/OpenAPI-Specification/issues/14#issuecomment-297457320

Strictly speaking that is true, but not very helpful as you can't specify a "no auth" definition in the security schemas.

**To Reproduce**
Snippet for a security definition in a path:
```
      security:
        - {}
        - Bearer: []
```
The second line is the problem, the third line works as expected (as it's defined in the security schema:
```
  securitySchemes:
    Bearer:
      type: http
      scheme: bearer
```

**Expected behavior**
Either have an option for the rule to allow empty no auth security definitions or allow them always.

**Environment (remove any that are not applicable):**
 - Library version: 5.0.0
 - OS: Windows 10
