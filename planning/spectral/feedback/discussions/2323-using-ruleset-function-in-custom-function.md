---
number: 2323
title: "Using Ruleset Function In Custom Function"
category: "Q&A"
author: "OllieTho"
created: "2022-11-01T21:10:32Z"
upvotes: 2
comments: 1
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2323"
---

# Using Ruleset Function In Custom Function

I'm running into problems trying to import a function from the oas ruleset into my custom function.

For context, I'm overriding a rule in the included oas ruleset (oas3-unused-component) and want the same behavior as the original rule, but only use the rule in files that contain a 'paths' attribute.  I've made a custom function and added the check for 'paths', but after succeeding that check, I want to call the original function oasUnusedComponents.  I've tried importing it several ways to no success, but this is the closest I've come:

```
import {oasUnusedComponent} from '@stoplight/spectral-rulesets/dist/oas/functions';

module.exports = function(targetVal, _opts, paths, ...args) {
    if (targetVal === void 0 || targetVal.length == 0) {
        return [];
    }

    if ('paths' in targetVal && targetVal['paths']) {
        return oasUnusedComponent(targetVal, _opts, paths);
    }

    return [];
}
```

I've tried modeling this off of the examples for core functions such as 'truthy' but this way does not seem to be working.  Any help would be much appreciated!  Thanks!
