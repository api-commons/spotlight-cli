---
number: 1119
title: "Cannot import @stoplight/ordered-object-literal module"
state: "closed"
labels: ["t/bug"]
author: "babsher"
created: "2020-04-23T20:43:00Z"
updated: "2020-04-30T00:24:52Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1119"
---

# Cannot import @stoplight/ordered-object-literal module

> For support questions, please use the [Stoplight Community Forum](https://community.stoplight.io). This repository's issues are reserved for feature requests and bug reports. If you are unsure if you are experiencing a bug, the [Community Forum](https://community.stoplight.io) is a great place to start.
>
> **Please delete this section, any any sections below that you don't use, before creating the issue.**

**Describe the bug**
When I run `spectral lint` it fails to load the @stoplight/ordered-object-literal module.

**To Reproduce**

1. yarn add @stoplight/spectral
2. yarn run spectral lint <file>

**Expected behavior**
it should run without throwing an error.

**Screenshots**
```
yarn run spectral lint ./config/openapi/specs/internal/openapi.yaml
yarn run v1.21.1
warning package.json: No license field
$ /Users/bryanabsher/git/api/node_modules/.bin/spectral lint ./config/openapi/specs/internal/openapi.yaml
internal/modules/cjs/loader.js:625
  throw e;
  ^

Error: No valid exports main found for '/Users/bryanabsher/git/api/node_modules/@stoplight/ordered-object-literal'
    at resolveExportsTarget (internal/modules/cjs/loader.js:622:9)
    at applyExports (internal/modules/cjs/loader.js:499:14)
    at resolveExports (internal/modules/cjs/loader.js:548:12)
    at Function.Module._findPath (internal/modules/cjs/loader.js:654:22)
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:953:27)
    at Function.Module._load (internal/modules/cjs/loader.js:859:27)
    at Module.require (internal/modules/cjs/loader.js:1028:19)
    at require (internal/modules/cjs/helpers.js:72:18)
    at Object.<anonymous> (/Users/bryanabsher/git/api/node_modules/@stoplight/json/index.cjs.js:1:238)
    at Module._compile (internal/modules/cjs/loader.js:1139:30) {
  code: 'MODULE_NOT_FOUND'
}
```

**Environment (remove any that are not applicable):**
 - Library version: @stoplight/spectral@^5.3.0
 - OS: OSX
