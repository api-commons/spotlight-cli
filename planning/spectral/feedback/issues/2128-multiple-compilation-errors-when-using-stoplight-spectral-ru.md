---
number: 2128
title: "Multiple compilation errors when using `@stoplight/spectral-ruleset-bundler` Library in an Angular 11.x application"
state: "closed"
labels: []
author: "craicoverflow"
created: "2022-04-13T15:08:09Z"
updated: "2022-11-03T09:07:09Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2128"
---

# Multiple compilation errors when using `@stoplight/spectral-ruleset-bundler` Library in an Angular 11.x application

**Describe the bug**

My Angular application fails to compile when I use the `@stoplight/spectral-ruleset-bundler` API in the code. The problem is that the library depends on some Node.js APIs - `fs`, `module` and `perf_hooks` specifically - which are not available in the browser.

There are some additional errors about unexpected characters which I also believe is caused by this depency on Node.js.

**To Reproduce**

In an Angular 11.x application, set the following code in a component:

```ts
import { bundleAndLoadRuleset } from '@stoplight/spectral-ruleset-bundler/dist/loader/browser';

        const myRuleset = `extends: spectral:oas
rules: {}`;

        const fs: any = {
            promises: {
                async readFile(filepath) {
                    if (filepath === "/.spectral.yaml") {
                        return myRuleset;
                    }

                    throw new Error(`Could not read ${filepath}`);
                },
            },
        };

        const spectral = new Spectral();
        spectral.setRuleset(await bundleAndLoadRuleset("/.spectral.yaml", { fs, fetch }));
        spectral.run(this.document.toString());
```

When the Angular app starts (using `ng`) I get multiple errors like this:

```shell
Error: ./node_modules/@stoplight/spectral-ruleset-bundler/node_modules/rollup/dist/es/rollup.js
Module not found: Error: Can't resolve 'fs' in '...'

Error: ./node_modules/@stoplight/spectral-ruleset-bundler/node_modules/rollup/dist/es/rollup.js
Module not found: Error: Can't resolve 'perf_hooks' in '...'

Error: ./node_modules/nimma/dist/cjs/codegen/fallback.js 24:2
Module parse failed: Unexpected character '#' (24:2)
File was processed with these loaders:
 * ./node_modules/@angular-builders/custom-webpack/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js
 * ./node_modules/@angular-builders/custom-webpack/node_modules/@ngtools/webpack/src/ivy/index.js
You may need an additional loader to handle the result of these loaders.
| 
| class Fallback {
>   #modules = new Set();
|   #deps = new Map();
|   #fn;

Error: ./node_modules/fsevents/fsevents.node 1:0
Module parse failed: Unexpected character '�' (1:0)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
(Source code omitted for this binary file)
```

PS: `@stoplight/spectral-ruleset-bundler/dist/loader/browser` is the only place I could find the `bundleAndLoadRuleset` but the docs say it should be in `@stoplight/spectral-ruleset-bundler/with-loader`:
```
Cannot find module '@stoplight/spectral-ruleset-bundler/with-loader' or its corresponding type declarations.ts(2307)
```

**Expected behavior**

The application starts correctly with no errors.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment (remove any that are not applicable):**
 - Library version: `@stoplight/spectral-ruleset-bundler@1.2.1`
 - Browser: Version 100.0.4896.75
 - Web Framework: Angular 11.2.14
