---
number: 311
title: "Custom functions in Rulesets"
state: "closed"
labels: ["enhancement"]
author: "brianmrock"
created: "2019-07-06T18:00:20Z"
updated: "2019-08-25T09:10:00Z"
comments: 10
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/311"
---

# Custom functions in Rulesets

**User Story**

As a ruleset maintainer, I would like to be able to define my own functions, to achieve things the built in functions might not allow. How that is done I do not much care, so long as it is easy, and the rulesets remain portable as simple YAML or JSON files.

**Details**

Both the CLI and the JS API are converging on a simple `loadRulesets()` method (#366), leaving behind the separate `loadRules()` and `loadFunctions()` methods that have been there forever. 

This will make things easier for Studio, and all JS API users, but we still need a way to support custom functions. Those functions should be defined in, or at the very least referenced by, the ruleset.

A complementary feature that needs to be delivered as a part of this story is the function options schema. In other words - we need to have to configure the function without falling back to JS code too much.

**Implementation**

```
{
  // recommended rules are on, using their default severity values
  // it is expected that an `index.json` file results at the target location if the path does not end in `.json`
  "extends": "spectral:oas2",

  // OPTIONAL
  // use to customize where functions are located, by default they are located in the `functions` dir relative to this ruleset file
  "functionsDir": "functions",

  // OPTIONAL - only needed if defining new functions for your ruleset
  "functions": {
    // convention is that there must be a corresponding `functions/op-id-unique.js` file relative to this config file's location
    "op-id-unique": {
      // OPTIONAL the json schema that describes the function options, if any
      "schema": {
        "type": "object",
        "properties": {
          "foo": {
            "type": "string"
          }
        }
      }
    }
  },

  "rules": {
    // define a new rule that uses a the custom function defined in this config (op-id-unique)
    "my-rule": {
      "summary": "Every operation must have a unique `operationId`.",
      "type": "validation",
      "severity": "error",
      "given": "$",
      "then": {
        "function": "op-id-unique",
        "functionOptions": {
          "foo": "hello"
        }
      }
    }
  }
}
```

When we switch to doing this, lets implement this approach for all of our core functions, and clean out all of the old TypeScript definitions for them, so there is no different between core functions and custom functions.

```
export interface ILengthRuleOptions {
  min?: number;
  max?: number;
}
export type LengthRule = IRule<RuleFunction.LENGTH, ILengthRuleOptions>;
```

We can also clean out the function collections in our rulesets index.ts: 

```
export const commonOasFunctions = (): FunctionCollection => {
  return {
    oasPathParam: require('./functions/oasPathParam').oasPathParam,
    oasOp2xxResponse: require('./functions/oasOp2xxResponse').oasOp2xxResponse,
    oasOpSecurityDefined: require('./functions/oasOpSecurityDefined').oasOpSecurityDefined, // used in oas2/oas3 differently see their rulesets for details
    oasOpIdUnique: require('./functions/oasOpIdUnique').oasOpIdUnique,
    oasOpFormDataConsumeCheck: require('./functions/oasOpFormDataConsumeCheck').oasOpFormDataConsumeCheck,
    oasOpParams: require('./functions/oasOpParams').oasOpParams,
  };
};
```
