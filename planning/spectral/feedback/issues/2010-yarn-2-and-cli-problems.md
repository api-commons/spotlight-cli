---
number: 2010
title: "Yarn 2 and CLI problems"
state: "closed"
labels: ["t/bug", "released"]
author: "yordis"
created: "2021-12-23T00:51:54Z"
updated: "2022-06-13T14:20:53Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2010"
---

# Yarn 2 and CLI problems

Hey there, I just converted the project from yarn 1 to yarn 2 and `pnp` with Zero-Install and I getting a few problems that would be amazing if the tool works without any problems from the get-go.

**To Reproduce**

1. I upgraded the repository from yarn 1 to yarn 2+
2. Run this CLI command: `spectral lint ./openapi/data/file-name.openapi.json`
3. See error

## Environment

```text
@stoplight/spectral-cli: 6.1.0
yarn: 3.1.1
MacOS
```

## Problem One

First problem afge

```text
➜  specifications git:(testing) ✗ yarn lint:spectral:openapi          
No matches found: "lint:spectral:openapi:*"
➜  specifications git:(testing) ✗ yarn lint:spectral:openapi:mainframe        
/Users/ubi/Developer/myapp/core/backend/specifications/.pnp.cjs:13796
    throw firstError;
    ^

Error: @stoplight/spectral-runtime tried to access tslib, but it isn't declared in its dependencies; this makes the require call ambiguous and unsound.

Required package: tslib
Required by: @stoplight/spectral-runtime@npm:1.1.0 (via /Users/ubi/Developer/myapp/core/backend/specifications/.yarn/cache/@stoplight-spectral-runtime-npm-1.1.0-4037ba3b46-f71bac6056.zip/node_modules/@stoplight/spectral-runtime/dist/)

Require stack:
- /Users/ubi/Developer/myapp/core/backend/specifications/.yarn/cache/@stoplight-spectral-runtime-npm-1.1.0-4037ba3b46-f71bac6056.zip/node_modules/@stoplight/spectral-runtime/dist/index.js
- /Users/ubi/Developer/myapp/core/backend/specifications/.yarn/cache/@stoplight-spectral-cli-npm-6.1.0-ab499c2472-8a444a5329.zip/node_modules/@stoplight/spectral-cli/dist/index.js
    at Function.external_module_.Module._resolveFilename (/Users/ubi/Developer/myapp/core/backend/specifications/.pnp.cjs:13795:55)
    at Function.external_module_.Module._load (/Users/ubi/Developer/myapp/core/backend/specifications/.pnp.cjs:13594:48)
    at Module.require (node:internal/modules/cjs/loader:1005:19)
    at require (node:internal/modules/cjs/helpers:102:18)
    at Object.<anonymous> (/Users/ubi/Developer/myapp/core/backend/specifications/.yarn/cache/@stoplight-spectral-runtime-npm-1.1.0-4037ba3b46-f71bac6056.zip/node_modules/@stoplight/spectral-runtime/dist/index.js:4:17)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.external_module_.Module._load (/Users/ubi/Developer/myapp/core/backend/specifications/.pnp.cjs:13644:14)
```

### Fix

```bash
yarn add tslib
```

## Problem Two

```text
yarn lint:spectral:openapi:mainframe
Your application tried to access @stoplight/spectral-formats, but it isn't declared in your dependencies; this makes the require call ambiguous and unsound.

Required package: @stoplight/spectral-formats
Required by: /Users/ubi/Developer/myapp/core/backend/specifications/

Require stack:
- /Users/ubi/Developer/myapp/core/backend/specifications/.spectral.js
```

### Fix

```bash
yarn add @stoplight/spectral-formats
```

## Problem Three

```text
yarn lint:spectral:openapi:mainframe
Your application tried to access @stoplight/spectral-functions, but it isn't declared in your dependencies; this makes the require call ambiguous and unsound.

Required package: @stoplight/spectral-functions
Required by: /Users/ubi/Developer/myapp/core/backend/specifications/

Require stack:
- /Users/ubi/Developer/myapp/core/backend/specifications/.spectral.js
```

### Fix

```bash
 yarn add @stoplight/spectral-functions
```
