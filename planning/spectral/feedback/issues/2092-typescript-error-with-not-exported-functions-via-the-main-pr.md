---
number: 2092
title: "TypeScript error with not exported functions via the `main` property of `package.json`"
state: "closed"
labels: []
author: "mima0815"
created: "2022-03-15T15:51:45Z"
updated: "2022-03-22T07:23:01Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2092"
---

# TypeScript error with not exported functions via the `main` property of `package.json`

**Describe the bug**
the differnt loaders are not exported to work with TS, like the `loader/node/bundleAndLoadRuleset`
TS is handling the `exports` property of `package.json` not well.
See TS issue here: https://github.com/microsoft/TypeScript/issues/33079

**To Reproduce**
1. use current spectral packages
2. demo code
```ts
import { Spectral } from '@stoplight/spectral-core';
import { fetch } from '@stoplight/spectral-runtime';
import { bundleAndLoadRuleset } from '@stoplight/spectral-ruleset-bundler/dist/loader/node';
import * as fs from 'fs'

const spectral = new Spectral();
const rulesetFilepath = path.join(__dirname, ".spectral.yaml");
spectral.setRuleset(await bundleAndLoadRuleset(rulesetFilepath, { fs, fetch }));
```
3. run it -> result:
```
Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: Package subpath './dist/loader/node' is not defined by "exports" in /development/testarrow/node_modules/@stoplight/spectral-ruleset-bundler/package.json
    at new NodeError (internal/errors.js:322:7)
    at throwExportsNotFound (internal/modules/esm/resolve.js:332:9)
    at packageExportsResolve (internal/modules/esm/resolve.js:565:3)
    at resolveExports (internal/modules/cjs/loader.js:450:36)
    at Function.Module._findPath (internal/modules/cjs/loader.js:490:31)
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:888:27)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:101:18)
    at Object.<anonymous> (/development/testarrow/packages/testarrow/src/server/server.ts:9:1)
    at Module._compile (internal/modules/cjs/loader.js:1085:14)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
    at Module.load (internal/modules/cjs/loader.js:950:32)
    at Function.Module._load (internal/modules/cjs/loader.js:790:12)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:101:18)
```

**Expected behavior**
just load the ruleset file an be able to lint spec files

**Additional context**
Adding an export to the file `packages/ruleset-bundler/src/index.ts` like:

```ts
export  { bundleAndLoadRuleset as bundleAndLoadRulesetNode }  from './loader/node';
```

solves the issues for TS
