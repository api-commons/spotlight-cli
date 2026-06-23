---
number: 1352
title: "Error disabling an extended ruleset in an extended ruleset"
state: "closed"
labels: ["t/bug"]
author: "adanilev"
created: "2020-09-24T01:52:24Z"
updated: "2021-01-14T15:29:49Z"
comments: 7
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1352"
---

# Error disabling an extended ruleset in an extended ruleset

**Describe the bug**
When I structure my rules like so:

index.json
```json
{
  "extends": [
    "rules-one.json",
    "rules-two.json",
  ]
}
```

rules-one.json
```json
{
  "extends": ["spectral:oas", "off"],
  "rules": {
    "path-params": true
  }
}
```

...and then load them like so:
```ts
const spectral = new Spectral();
spectral.registerFormat("oas3", isOpenApiv3);
await spectral.loadRuleset(path.resolve("***/index.json"));
```

I get the following error:
```
    Error: Provided ruleset is not an object
        at Object.assertValidRuleset (/***/node_modules/@stoplight/spectral/dist/rulesets/validation.js:23:15)
        at processRuleset (/***/node_modules/@stoplight/spectral/dist/rulesets/reader.js:62:38)
        at process._tickCallback (internal/process/next_tick.js:68:7)
```

This does not occur if:
* I don't disable the `spectral:oas` rules
* I extend and disable them in `index.json` instead of `rules-one.json`

I also tried to extend/disable the spectral rules in `index.json` and then enable specific ones in `rules-one.json` but that didn't work (they don't get enabled).

I printed the ruleset that fails to validate and it's an IIFE that starts with:
`(function (root, factory) { if (typeof define === \"function\" && define.amd) {`

**To Reproduce**

1. Set up and load rules as described above
1. Observe error

**Expected behavior**
The rules load successfully and allow me to disable an extended ruleset, in an extended ruleset, and then selectively enable them.

**Environment (remove any that are not applicable):**
 - Library version: 5.5.0
 - OS: macOS 10.15.6

**Additional context**
I organised my rules to be aligned with the OAS schema objects (e.g. `operation-object.json`) to keep things manageable. I want to enable specific `spectral:oas` rules alongside related, custom ones.

Workaround is to extend/disable in `index.json` and then enable specific rules there too.
