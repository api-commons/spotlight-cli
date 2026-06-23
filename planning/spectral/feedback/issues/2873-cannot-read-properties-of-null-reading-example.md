---
number: 2873
title: "Cannot read properties of null (reading 'example')"
state: "open"
labels: []
author: "maximilian-hammerl"
created: "2026-01-15T08:53:53Z"
updated: "2026-01-15T08:53:53Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2873"
---

# Cannot read properties of null (reading 'example')

**Describe the bug**

```
Error running Spectral!
Error #1: Cannot read properties of null (reading 'example')
          at examples)]     …js/core/index.js:66  
          at eval           …js/core/index.js:66  
          at _traverseBody  …time/traverse.js:13  
          at _traverse      …time/traverse.js:41  
          at _traverseBody  …time/traverse.js:17
```

when running the adidas API guidelines (https://github.com/adidas/api-guidelines, https://raw.githubusercontent.com/adidas/api-guidelines/master/.spectral.yml)

**To Reproduce**

Run Spectral with

```yaml
extends:
  - "spectral:oas"
  - "https://raw.githubusercontent.com/adidas/api-guidelines/master/.spectral.yml"
```

**Expected behavior**

Spectral should not fail, but report errors if rules are not followed.

**Environment (remove any that are not applicable):**
 - Spectral version: 6.15.0
