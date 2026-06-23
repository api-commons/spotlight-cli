---
number: 2637
title: "Bug: Validation Error with @stoplight/spectral-rulesets 1.19.0"
state: "closed"
labels: ["released"]
author: "tomo-kn"
created: "2024-06-09T12:54:08Z"
updated: "2024-06-10T10:30:28Z"
comments: 3
reactions_total: 7
thumbs_up: 7
url: "https://github.com/stoplightio/spectral/issues/2637"
---

# Bug: Validation Error with @stoplight/spectral-rulesets 1.19.0

**Describe the bug**
After upgrading to `@stoplight/spectral-rulesets` version 1.19.0, we encountered a validation error that was not present in version 1.18.1. 

The error message indicates a problem with `spectral`, specifically a `TypeError: Cannot read properties of null (reading 'type')`.

```
[ERROR] There was a problem with spectral.
[ERROR] Cannot read properties of null (reading 'type')
[ERROR] Additional error details:
[ERROR] TypeError: Cannot read properties of null (reading 'type')
at $..[?(@.type === 'array')] (eval at query (/data/node_modules/nimma/dist/legacy/cjs/core/index.js:66:71), <anonymous>:10:31)
at eval (eval at query (/data/node_modules/nimma/dist/legacy/cjs/core/index.js:66:71), <anonymous>:182:41)
at _traverseBody (/data/node_modules/nimma/dist/legacy/cjs/runtime/traverse.js:13:5)
at _traverse (/data/node_modules/nimma/dist/legacy/cjs/runtime/traverse.js:41:7)
at _traverseBody (/data/node_modules/nimma/dist/legacy/cjs/runtime/traverse.js:17:5)
at _traverse (/data/node_modules/nimma/dist/legacy/cjs/runtime/traverse.js:41:7)
at _traverseBody (/data/node_modules/nimma/dist/legacy/cjs/runtime/traverse.js:17:5)
at _traverse (/data/node_modules/nimma/dist/legacy/cjs/runtime/traverse.js:41:7)
at _traverseBody (/data/node_modules/nimma/dist/legacy/cjs/runtime/traverse.js:17:5)
at _traverse **(/data/node_modules/nimma/dist/legacy/cjs/runtime/traverse.js:41:7)
```

**To Reproduce**

1. Upgrade to `@stoplight/spectral-rulesets` version 1.19.0.
2. Run the OpenAPI validation using `ibm-openapi-validator` or `spectral`.
3. Observe the validation error

**Expected behavior**
The OpenAPI validation should pass without any errors, as it did with `@stoplight/spectral-rulesets` version 1.18.1.
