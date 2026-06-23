---
number: 2874
title: "Cannot read properties of null (reading 'type')"
state: "open"
labels: []
author: "maximilian-hammerl"
created: "2026-01-15T08:56:28Z"
updated: "2026-01-15T08:56:28Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2874"
---

# Cannot read properties of null (reading 'type')

**Describe the bug**

```
Error running Spectral!
Error #1: Cannot read properties of null (reading 'type')
          at type == "boolean")]~  …js/core/index.js:66  
          at eval                  …js/core/index.js:66  
          at _traverseBody         …time/traverse.js:13  
          at _traverse             …time/traverse.js:41  
          at _traverseBody         …time/traverse.js:17
```

when running the AEP OpenAPI linting rules (https://aep.dev/tooling/openapi-linter/, https://raw.githubusercontent.com/aep-dev/aep-openapi-linter/main/spectral.yaml)

**To Reproduce**

Run Spectral with

```yaml
extends:
  - "spectral:oas"
  - "https://raw.githubusercontent.com/aep-dev/aep-openapi-linter/main/spectral.yaml"
```

**Expected behavior**

Spectral should not fail, but report errors if rules are not followed.

**Environment (remove any that are not applicable):**
 - Spectral version: 6.15.0
