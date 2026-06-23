---
number: 2889
title: "Using `extends` with property `off` does not work as expected"
state: "closed"
labels: ["released"]
author: "maiargu"
created: "2026-02-09T07:51:35Z"
updated: "2026-04-13T12:57:27Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2889"
---

# Using `extends` with property `off` does not work as expected

**Describe the bug**

Using the `extends` property with `off` as the second argument for disabling rules seems to not to work as expected.

**To Reproduce**
Code to reproduce:
```
import { Ruleset, RulesetDefinition } from "@stoplight/spectral-core";
import { oas } from "@stoplight/spectral-rulesets";
import { oas3 } from "@stoplight/spectral-formats";
import { defined } from '@stoplight/spectral-functions';

const ruleset1: RulesetDefinition = {
  extends: [[oas, "off"]],
  rules: {
    "operation-success-response": true,
    "my-custom-rule-foo-bar": {
      formats: [oas3],
      given: "$",
      then: {
        function: defined
      }
    }
  },
};

const ruleset2: RulesetDefinition  = {
  extends: [[ruleset1, "off"]],
};


const rulesetInstance = new Ruleset(ruleset2);

// Expected to have no active rules, but got 1 active - "operation-success-response"
console.log("Enabled rules: ", Object.keys(rulesetInstance.rules).filter(ruleName => rulesetInstance.rules[ruleName].enabled).join(", "));
```

**Expected behavior**
Because in ruleset definition `ruleset2` all rules were explicitly turned off, expected behaviour is that `rulesetInstance` has no active rules.

**Environment:**
```
    "@stoplight/json-ref-resolver": "3.1.6",
    "@stoplight/spectral-core": "1.20.0",
    "@stoplight/spectral-formatters": "1.5.0",
    "@stoplight/spectral-functions": "1.10.1",
    "@stoplight/spectral-parsers": "1.0.5",
    "@stoplight/spectral-rulesets": "1.22.0",
```
