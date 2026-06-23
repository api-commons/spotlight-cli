---
number: 2656
title: "SyntaxError: Unexpected token 'export' when running spectral lint"
state: "closed"
labels: []
author: "heller-tobias"
created: "2024-07-18T12:07:42Z"
updated: "2024-07-18T15:56:14Z"
comments: 11
reactions_total: 14
thumbs_up: 13
url: "https://github.com/stoplightio/spectral/issues/2656"
---

# SyntaxError: Unexpected token 'export' when running spectral lint

**Describe the bug**
When running the spectral-cli in version 6.11.1 I get the following error `SyntaxError: Unexpected token 'export'` .

**To Reproduce**

1. Run this CLI command 'spectral lint'
2. See error

/usr/local/lib/node_modules/@stoplight/spectral-cli/node_modules/@stoplight/json/index.js:1
export * from './bundle';
^^^^^^
SyntaxError: Unexpected token 'export'
    at internalCompileFunction (node:internal/vm:128:18)
    at wrapSafe (node:internal/modules/cjs/loader:1279:20)
    at Module._compile (node:internal/modules/cjs/loader:1331:27)
    at Module._extensions..js (node:internal/modules/cjs/loader:1426:10)
    at Module.load (node:internal/modules/cjs/loader:1205:32)
    at Module._load (node:internal/modules/cjs/loader:[102](https://gitlab.com/galenica-group/apim/gaas-test-applications/gaas-test-application/-/jobs/7373119995#L102)1:12)
    at Module.require (node:internal/modules/cjs/loader:1230:19)
    at require (node:internal/modules/helpers:179:18)
    at Object.<anonymous> (/usr/local/lib/node_modules/@stoplight/spectral-cli/node_modules/@stoplight/spectral-runtime/dist/utils/decodeSegmentFragment.js:4:16)
    at Module._compile (node:internal/modules/cjs/loader:1368:14)
Node.js v21.7.3

**Expected behavior**
We should be able to run spectral without an issue.

**Screenshots**
- Error already provided above 

**Environment (remove any that are not applicable):**
 - Library version: 6.11.1
 - OS: MacOS
 - Node Version: 21.7.3
