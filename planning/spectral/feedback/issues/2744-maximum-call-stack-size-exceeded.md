---
number: 2744
title: "Maximum call stack size exceeded"
state: "open"
labels: []
author: "rospe"
created: "2024-11-22T08:11:08Z"
updated: "2024-11-22T08:11:08Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2744"
---

# Maximum call stack size exceeded

**Describe the bug**
When running the linter with (lots) of AsyncAPI files, containing many events and schemas, the linter fails with:
```
...
Linting /builds/tedp/event-registry/events/events/reservation/programme-change/programme-change.yml
Error running Spectral!
Error #1: Maximum call stack size exceeded
          at isFrozen                                                                                                                                               
          at d         ../../../../snapshot/project/node_modules/immer/src/utils/plugins.ts:55   return plugin                                                      
          at P         ../../../../snapshot/project/node_modules/immer/src/core/finalize.ts:155  function maybeFreeze(scope: ImmerScope, value: any, deep = false) {
          at           ../../../../snapshot/project/node_modules/immer/src/core/finalize.ts:105  rootScope.inversePatches_!                                         
          at           ../../../../snapshot/project/node_modules/immer/src/utils/common.ts:96    obj.forEach((entry: any, index: any) => iter(index, entry, obj))
```

**To Reproduce**

1. Given many files
2. Run this CLI command
```
      shopt -s globstar
      spectral lint ./events/**/*.yml --verbose
```
3. See error

**Expected behavior**
No error :-)

**Additional context**
As a workaround, we use
```
      shopt -s globstar
      for file in ./events/**/*.yml; do
        echo "Validating file '$file'..."
        spectral lint $file
      done
```
