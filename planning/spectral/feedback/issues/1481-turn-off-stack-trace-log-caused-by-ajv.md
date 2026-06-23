---
number: 1481
title: "Turn off stack trace log caused by Ajv."
state: "closed"
labels: []
author: "redshoga"
created: "2021-01-18T11:52:47Z"
updated: "2021-01-28T10:32:08Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1481"
---

# Turn off stack trace log caused by Ajv.

**User story.**
As a API Designer, I want to turn off the display of the stack trace output by Ajv so that I can concentrate only on the log output by spectral.

**Is your feature request related to a problem?**
Spectral will output a large number of ajv errors if you use it on a huge OAS file.
Developers want to see a clean log based on the rules output by spectral.

Example

```
OpenAPI 3.x detected
Error: schema is invalid: data/type should be equal to one of the allowed values, data/type should be array, data/type should match some schema in anyOf
    at Ajv.validateSchema (C:\Users\redshoga\AppData\Local\Yarn\Data\global\node_modules\ajv\lib\ajv.js:178:16)
    at Ajv._addSchema (C:\Users\redshoga\AppData\Local\Yarn\Data\global\node_modules\ajv\lib\ajv.js:307:10)
    at Ajv.compile (C:\Users\redshoga\AppData\Local\Yarn\Data\global\node_modules\ajv\lib\ajv.js:113:24)
    at WeakMap.get (C:\Users\redshoga\AppData\Local\Yarn\Data\global\node_modules\@stoplight\spectral\dist\functions\schema.js:69:29)
    at Object.exports.schema (C:\Users\redshoga\AppData\Local\Yarn\Data\global\node_modules\@stoplight\spectral\dist\functions\schema.js:89:87)
    at Object.oasExample (eval at exports.evaluateExport (C:\Users\redshoga\AppData\Local\Yarn\Data\global\node_modules\@stoplight\spectral\dist\rulesets\evaluators.js:89:80), <anonymous>:1:1522)
    at Object.exports.lintNode (C:\Users\redshoga\AppData\Local\Yarn\Data\global\node_modules\@stoplight\spectral\dist\runner\lintNode.js:30:33)
    at callback (C:\Users\redshoga\AppData\Local\Yarn\Data\global\node_modules\@stoplight\spectral\dist\runner\runner.js:38:32)
    at JSONPath._handleCallback (C:\Users\redshoga\AppData\Local\Yarn\Data\global\node_modules\jsonpath-plus\dist\index-umd.js:626:7)
    at JSONPath._trace (C:\Users\redshoga\AppData\Local\Yarn\Data\global\node_modules\jsonpath-plus\dist\index-umd.js:658:12)
Error: schema is invalid: data/type should be equal to one of the allowed values, data/type should be array, data/type should match some schema in anyOf
    at Ajv.validateSchema (C:\Users\redshoga\AppData\Local\Yarn\Data\global\node_modules\ajv\lib\ajv.js:178:16)
    at Ajv._addSchema (C:\Users\redshoga\AppData\Local\Yarn\Data\global\node_modules\ajv\lib\ajv.js:307:10)
    at Ajv.compile (C:\Users\redshoga\AppData\Local\Yarn\Data\global\node_modules\ajv\lib\ajv.js:113:24)
    at WeakMap.get (C:\Users\redshoga\AppData\Local\Yarn\Data\global\node_modules\@stoplight\spectral\dist\functions\schema.js:69:29)
    at Object.exports.schema (C:\Users\redshoga\AppData\Local\Yarn\Data\global\node_modules\@stoplight\spectral\dist\functions\schema.js:89:87)
    at Object.oasExample (eval at exports.evaluateExport (C:\Users\redshoga\AppData\Local\Yarn\Data\global\node_modules\@stoplight\spectral\dist\rulesets\evaluators.js:89:80), <anonymous>:1:1522)
    at Object.exports.lintNode (C:\Users\redshoga\AppData\Local\Yarn\Data\global\node_modules\@stoplight\spectral\dist\runner\lintNode.js:30:33)
    at callback (C:\Users\redshoga\AppData\Local\Yarn\Data\global\node_modules\@stoplight\spectral\dist\runner\runner.js:38:32)
    at JSONPath._handleCallback (C:\Users\redshoga\AppData\Local\Yarn\Data\global\node_modules\jsonpath-plus\dist\index-umd.js:626:7)
    at JSONPath._trace (C:\Users\redshoga\AppData\Local\Yarn\Data\global\node_modules\jsonpath-plus\dist\index-umd.js:658:12)
Error: schema is invalid: data/type should be equal to one of the allowed values, data/type should be array, data/type should match some schema in anyOf
    at Ajv.validateSchema (C:\Users\redshoga\AppData\Local\Yarn\Data\global\node_modules\ajv\lib\ajv.js:178:16)
    at Ajv._addSchema (C:\Users\redshoga\AppData\Local\Yarn\Data\global\node_modules\ajv\lib\ajv.js:307:10)
    at Ajv.compile (C:\Users\redshoga\AppData\Local\Yarn\Data\global\node_modules\ajv\lib\ajv.js:113:24)
    at WeakMap.get (C:\Users\redshoga\AppData\Local\Yarn\Data\global\node_modules\@stoplight\spectral\dist\functions\schema.js:69:29)
    at Object.exports.schema (C:\Users\redshoga\AppData\Local\Yarn\Data\global\node_modules\@stoplight\spectral\dist\functions\schema.js:89:87)
    at Object.oasExample (eval at exports.evaluateExport (C:\Users\redshoga\AppData\Local\Yarn\Data\global\node_modules\@stoplight\spectral\dist\rulesets\evaluators.js:89:80), <anonymous>:1:1522)
    at Object.exports.lintNode (C:\Users\redshoga\AppData\Local\Yarn\Data\global\node_modules\@stoplight\spectral\dist\runner\lintNode.js:30:33)
    at callback (C:\Users\redshoga\AppData\Local\Yarn\Data\global\node_modules\@stoplight\spectral\dist\runner\runner.js:38:32)
    at JSONPath._handleCallback (C:\Users\redshoga\AppData\Local\Yarn\Data\global\node_modules\jsonpath-plus\dist\index-umd.js:626:7)
    at JSONPath._trace (C:\Users\redshoga\AppData\Local\Yarn\Data\global\node_modules\jsonpath-plus\dist\index-umd.js:658:12)
.....
```

**Describe the solution you'd like**
- Add CLI option to turn off ajv error stack trace output
