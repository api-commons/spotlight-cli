---
number: 2107
title: "fails to run base on js format ruleset "
state: "closed"
labels: []
author: "jianyexi"
created: "2022-03-24T07:33:04Z"
updated: "2023-03-23T16:09:19Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2107"
---

# fails to run base on js format ruleset 

**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**

1. Given this ruleset file
```
> cat myruleset.js 
import { oas2, oas3 } from "https://cdn.jsdelivr.net/npm/@stoplight/spectral-formats/+esm";
import { falsy } from "https://cdn.jsdelivr.net/npm/@stoplight/spectral-functions@1.6.1/+esm";
import { oas } from "https://cdn.jsdelivr.net/npm/@stoplight/spectral-rulesets/+esm";
const ruleset = {
    extends: [
        oas
    ],
    rules: {
        "info-contact": "off",
        "no-$ref-siblings": "off",
        "additional-properties-and-properties": {
            "description": "Don't specify additionalProperties as a sibling of properties.",
            "severity": "warn",
            "formats": [oas2, oas3],
            "given": "$..[?(@object() && @.type === 'object' && @.properties)]",
            "then": {
                "field": "additionalProperties",
                "function": falsy
            }
        },
    }
};
export default ruleset;
```
2. run 
```
> spectral lint -r myruleset.js  swagger.json
```
3. See error
```
Error running Spectral!
Error #1: 'isObject' is not exported by https://cdn.jsdelivr.net/npm/lodash@4.17.21/+esm, imported by https://cdn.jsdelivr.net/npm/@stoplight/json@3.17.2/+esm
          at net/npm/@stoplight/…
          at error                 …hared/rollup.js:160  base = Object.assig…
          at error                 …red/rollup.js:12436  return error(props);
          at traceVariable         …red/rollup.js:12797  return this.error(e…
          at findVariable          …red/rollup.js:11419  const variable = th…
```

**Expected behavior**
return the linting result
