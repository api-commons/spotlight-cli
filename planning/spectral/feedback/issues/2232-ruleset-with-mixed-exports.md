---
number: 2232
title: "Ruleset with mixed exports"
state: "closed"
labels: []
author: "curiosus42"
created: "2022-08-08T10:30:35Z"
updated: "2022-09-06T15:20:01Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2232"
---

# Ruleset with mixed exports

**User story.**
As a developer, I can use `js` modules rulesets with mixed exports (named and default), so that I can improve my development experience.

**Is your feature request related to a problem?**
_Description:_ It is not possible to use a .js file with mixed exports as a ruleset for spectral.
_Error:_
```
Entry module "ruleset.js" is using named and default exports together. Consumers of your bundle will have to use `chunk["default"]` to access the default export, which may not be what you want. Use `output.exports: "named"` to disable this warning
Error running Spectral!
Use --verbose flag to print the error stack.
Error #1: exports is not defined
```
_Cause:_ The rulesets are bundled with rollup.js to commonJS. On named and default (mixed) exports rollup.js binds default exports to `exports.default`. When only a default export is used rollup.js binds the default export to `module.exports`.

**Describe the solution you'd like**
It is possible to use `js` modules with mixed exports as a ruleset. 

_Suggestion:_ Pass a `export` object instead of an `module` object on bundle load as a fallback.

**Additional context**
_Example:_ working bundle output, with only default export:
```javascript
// bundledSource_default.js

'use strict'

var spectralFunctions = require('@stoplight/spectral-functions')

var ruleset = {
  rules: {
    'example-rule': {
      description: 'example rule',
      severity: 0,
      given: '$.paths',
      then: {
        field: 'abc',
        function: spectralFunctions.truthy,
      },
    },
  },
}

module.exports = ruleset
```

Not working bundle output, with mixed exports:

```javascript
// bundledSource_mixed.js

'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

var spectralFunctions = require('@stoplight/spectral-functions')

const abc = 12

var ruleset = {
  rules: {
    'example-rule': {
      description: 'example rule',
      severity: 0,
      given: '$.paths',
      then: {
        field: 'abc',
        function: spectralFunctions.truthy,
      },
    },
  },
}

exports.abc = abc
exports['default'] = ruleset
```
