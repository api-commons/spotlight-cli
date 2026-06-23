---
number: 2002
title: "Require of @stoplight/spectral-core 1.7.0 fails to error node js 16"
state: "closed"
labels: ["wontfix"]
author: "Havunen"
created: "2021-12-15T12:53:14Z"
updated: "2023-07-06T08:16:18Z"
comments: 5
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2002"
---

# Require of @stoplight/spectral-core 1.7.0 fails to error node js 16

usage:

```
const { Spectral, isOpenApiv2, isOpenApiv3, mergeRules } = require('@stoplight/spectral-core');
```

results =>

```
    Cannot find module 'nimma/legacy' from 'node_modules/@stoplight/spectral-core/dist/runner/runner.js'

    Require stack:
      node_modules/@stoplight/spectral-core/dist/runner/runner.js
      node_modules/@stoplight/spectral-core/dist/runner/index.js
      node_modules/@stoplight/spectral-core/dist/spectral.js
      node_modules/@stoplight/spectral-core/dist/index.js
      src/spectral/utils/spectral-validator.js
      src/cli-validator/utils/validator.js
      src/cli-validator/runValidator.js
      test/cli-validator/tests/error-handling.test.js

      at Resolver.resolveModule (node_modules/jest-resolve/build/resolver.js:324:11)
      at Object.<anonymous> (node_modules/@stoplight/spectral-core/src/runner/runner.ts:9:1)
```

what is nimma/legacy? .... 😠
