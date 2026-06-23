---
number: 2260
title: "Publicly export spectral-core utils functions"
state: "closed"
labels: []
author: "Amachua"
created: "2022-08-29T09:36:57Z"
updated: "2022-09-07T12:52:06Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2260"
---

# Publicly export spectral-core utils functions

**User story.**

As a developper, when I am building a tool based on Spectral, then I would like to be able to use the function available in the `spectal-core` workspace in order to reproduce the internal workflow.

**Is your feature request related to a problem?**

When I tried to bump our tool dependency with Spectral, I got the following issue --> the functions `prepareResults` and the `defaultComputeResultFingerprint` are not exported anymore.

```
Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: Package subpath './dist/utils' is not defined by "exports" in \package\node_modules\@stoplight\spectral-core\package.json
    at new NodeError (node:internal/errors:371:5)
    at throwExportsNotFound (node:internal/modules/esm/resolve:440:9)
    at packageExportsResolve (node:internal/modules/esm/resolve:692:3)
    at resolveExports (node:internal/modules/cjs/loader:482:36)
    at Function.Module._findPath (node:internal/modules/cjs/loader:522:31)
    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:919:27)
    at Function.Module._resolveFilename.sharedData.moduleResolveFilenameHook.installedValue [as _resolveFilename] (\package\node_modules\@cspotcode\source-map-support\source-map-support.js:811:30)
    at Function.Module._load (node:internal/modules/cjs/loader:778:27)
    at Module.require (node:internal/modules/cjs/loader:1005:19)
    at require (node:internal/modules/cjs/helpers:102:18) {
  code: 'ERR_PACKAGE_PATH_NOT_EXPORTED'
}
```

**Describe the solution you'd like**

In addition to the `./ruleset` / `.` / `ruleset/validation`, I woudl like that the `spectral-core` is updated to export the `./utils` functions.
