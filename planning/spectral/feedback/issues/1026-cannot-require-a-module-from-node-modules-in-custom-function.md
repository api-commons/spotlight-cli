---
number: 1026
title: "Cannot 'require' a module from node_modules/ in custom functions without providing a path"
state: "closed"
labels: ["t/bug"]
author: "RobPhippen"
created: "2020-03-23T14:03:48Z"
updated: "2020-03-24T23:20:11Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1026"
---

# Cannot 'require' a module from node_modules/ in custom functions without providing a path

**Describe the bug**
The new support for node.js modules in [5.2](https://github.com/stoplightio/spectral/releases/tag/v5.2.0) does not find modules unless the path is explicitly given.
This means that the normal use of modules from npmjs.com is not supported.

**To Reproduce**
This example is base on an attempt to use the `plural` npm module from npmjs.com.
1. Run `npm install plural`
2. Create a custom function e.g. `pluralFunction.js` in the `functions` directory containing
    ``` javascript
    const plural = require('plural')
    
    // etc...
    ```
3. Create a rule that uses this custom function in `.spectral.yml`
    ``` yaml
    functions: [pluralFunction]
    
    # ...etc ...
    ```
4. run `spectral lint myOpenApi.yaml`
5. Runtime error - `plural` module not found.

**Expected behavior**
Should not get an error on running `spectral lint`

**Additional context**
I have found that specifying the relative path to the node module works, e.g.
``` javascript
const plural = require('../node_modules/plural')

```

However, this is not really practical, since there is no guarantee that the `node_modules` directory will always be in the same place relative to the `functions` directory.


I have found a better workaround. I have created a subdirectory `functions/lib` and created the following file `utils.js` in it;
``` javascript
const _case = require('case')
const plural = require('plural')

module.exports = {
  _case,
  plural
}
```

In the rule implementation, in the `functions/` directory, I have
``` javascript
const utils = require('./lib/utils')
const _case = utils._case
const plural = utils.plural
```
...which works fine. 

* The reason I regard this as *better* is that 
  * I can be certain of the location of `./lib/util.js`, but I cannot be certain of the location (relative to my functions) of the `node_modules` directory
  * the `utils.js` code does not care about exactly where the node_modules directory is
* The reason I think this is 'just a workaround' is that this restriction is abnormal for node module usage
