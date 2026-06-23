---
number: 2297
title: "Custom functions not working in Spectral 6.x"
category: "Q&A"
author: "sujnanarai"
created: "2022-09-29T14:06:52Z"
upvotes: 1
comments: 0
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2297"
---

# Custom functions not working in Spectral 6.x

Hi All,

I am trying to implement custom functions in Spectral 6.x, following getting following error. It works fine in Spectral 5.x.  I used sample custom function (abc)  given in https://meta.stoplight.io/docs/spectral/a781e290eb9f9-custom-functions.

**Error:**
`/Users/srai/Practice/Spectral/test/node_modules/rollup/dist/shared/rollup.js:198
        base = Object.assign(new Error(base.message), base);
                             ^

Error: 'default' is not exported by dist/rulesets/functions/abc.js, imported by dist/rulesets/.spectral.js
    at error (/Users/srai/Practice/Spectral/test/node_modules/rollup/dist/shared/rollup.js:198:30)
    at Module.error (/Users/srai/Practice/Spectral/test/node_modules/rollup/dist/shared/rollup.js:12560:16)
    at Module.traceVariable (/Users/srai/Practice/Spectral/test/node_modules/rollup/dist/shared/rollup.js:12919:29)
    at ModuleScope.findVariable (/Users/srai/Practice/Spectral/test/node_modules/rollup/dist/shared/rollup.js:11571:39)
    at Identifier.bind (/Users/srai/Practice/Spectral/test/node_modules/rollup/dist/shared/rollup.js:7570:40)
    at Property.bind (/Users/srai/Practice/Spectral/test/node_modules/rollup/dist/shared/rollup.js:5400:23)
    at ObjectExpression.bind (/Users/srai/Practice/Spectral/test/node_modules/rollup/dist/shared/rollup.js:5396:73)
    at Property.bind (/Users/srai/Practice/Spectral/test/node_modules/rollup/dist/shared/rollup.js:5400:23)
    at ObjectExpression.bind (/Users/srai/Practice/Spectral/test/node_modules/rollup/dist/shared/rollup.js:5396:73)
    at Property.bind (/Users/srai/Practice/Spectral/test/node_modules/rollup/dist/shared/rollup.js:5400:23) {
  code: 'MISSING_EXPORT',
  url: 'https://rollupjs.org/guide/en/#error-name-is-not-exported-by-module',
  id: '/Users/srai/Practice/Spectral/test/dist/rulesets/.spectral.js',
  pos: 57,
  loc: {
    column: 7,
    file: '/Users/srai/Practice/Spectral/test/dist/rulesets/.spectral.js',
    line: 2
  },
  frame: '1: import {oas} from "@stoplight/spectral-rulesets";\n' +
    '2: import abc from "/Users/srai/Practice/Spectral/test/dist/rulesets/functions/abc.js";\n' +
    '          ^\n' +
    '3: export default {\n' +
    '4:   "extends": [[oas, "off"]],',
  watchFiles: [
    '/Users/srai/Practice/Spectral/test/dist/rulesets/.spectral.js',
    '/Users/srai/Practice/Spectral/test/dist/rulesets/functions/abc.js'
  ]
}`
Is there any additional configurations required for custom functions in 6.x?
