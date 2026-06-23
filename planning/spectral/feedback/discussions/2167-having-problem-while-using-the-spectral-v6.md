---
number: 2167
title: "Having problem while using the Spectral v6."
category: "Q&A"
author: "adetroja"
created: "2022-05-25T06:09:52Z"
upvotes: 1
comments: 1
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2167"
---

# Having problem while using the Spectral v6.

● Test suite failed to run

    Cannot find module 'nimma/legacy' from 'node_modules/@stoplight/spectral-core/dist/runner/runner.js'

    Require stack:
      node_modules/@stoplight/spectral-core/dist/runner/runner.js
      node_modules/@stoplight/spectral-core/dist/runner/index.js
      node_modules/@stoplight/spectral-core/dist/spectral.js
      node_modules/@stoplight/spectral-core/dist/index.js
      node_modules/@stoplight/spectral-functions/dist/alphabetical.js
      node_modules/@stoplight/spectral-functions/dist/index.js
      tests/rules/adv-delete-operation-should-not-have-body.test.js

      at Resolver.resolveModule (node_modules/jest-resolve/build/index.js:306:11)
      at Object.<anonymous> (node_modules/@stoplight/spectral-core/src/runner/runner.ts:9:1)
