---
number: 2660
title: "ESM issue when trying to use spectral bundler in a packaged binary"
state: "open"
labels: []
author: "jackkav"
created: "2024-07-24T13:28:02Z"
updated: "2025-05-07T22:46:31Z"
comments: 1
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/2660"
---

# ESM issue when trying to use spectral bundler in a packaged binary

After using @yao-pkg/pkg to bundle spectral and load a .spectral.yml by a given path the bundleAndLoadRuleset function throws this error.

It appears to be an inconsistent dependency between nimma and jsep both esm, and simple-eval and jsep which is commonjs and esm respectively.
```sh
 FATAL  require() of ES Module /snapshot/insomnia/node_modules/jsep/dist/cjs/jsep.cjs.js from /snapshot/insomnia/node_modules/simple-eval/dist/index.js not supported.
jsep.cjs.js is treated as an ES module file as it is a .js file whose nearest parent package.json contains "type": "module" which declares all .js files in that package scope as ES modules.
Instead either rename jsep.cjs.js to end in .cjs, change the requiring code to use dynamic import() which is available in all CommonJS modules, or change "type": "module" to "type": "commonjs" in /snapshot/insomnia/node_modules/jsep/package.json to treat all .js files as CommonJS (using .mjs for all ES modules instead).
```

This happens when using latest version of @stoplight/spectral[..] packages

The major difference in how spectral CLI is built and insomnia CLI appears to be esbuild.
