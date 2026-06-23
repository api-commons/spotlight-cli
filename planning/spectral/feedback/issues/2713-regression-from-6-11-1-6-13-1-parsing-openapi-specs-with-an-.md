---
number: 2713
title: "Regression from 6.11.1->6.13.1 parsing OpenAPI specs with an operation using $ref"
state: "open"
labels: []
author: "robjtede"
created: "2024-10-21T10:00:02Z"
updated: "2024-10-21T10:03:49Z"
comments: 0
reactions_total: 4
thumbs_up: 4
url: "https://github.com/stoplightio/spectral/issues/2713"
---

# Regression from 6.11.1->6.13.1 parsing OpenAPI specs with an operation using $ref

**Describe the bug**

For an OpenAPI v3.1 spec including this, for example:

```
paths:
  /token:
    post:
      $ref: '_api-login.yml#/operations/login'
```

We now receive this error:
```
 nn:10  error  oas3-schema  "post" property must not have unevaluated properties.  paths./token.post
```

This seemed to work fine in Spectral v6.11.1.

**To Reproduce**

1. Given the OpenAPI document above.
2. Run this CLI command 'spectral lint'
3. See error shown.
4. See error is not shown when using v6.11.1.

**Expected behavior**
Spec should be parsed and reference resolved, as it is in other contexts.

**Environment (remove any that are not applicable):**
 - Library version: v6.13.1
 - OS: Ubuntu
 - Browser: N/A

**Additional context**
I understand that it's possible, via a strict reading of OAS v3.1, that this is not supposed to be allowed and supporting it previously was a bug. However, it's worth it to me to check the team's stance on that, given that I'd _like_ it to be supported (and actually might be worth a contribution to the spec itself).
