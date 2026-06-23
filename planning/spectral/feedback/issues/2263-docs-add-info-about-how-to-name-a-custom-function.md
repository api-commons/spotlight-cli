---
number: 2263
title: "docs: add info about how to name a custom function"
state: "closed"
labels: ["documentation", "chore"]
author: "heitortsergent"
created: "2022-09-02T15:49:21Z"
updated: "2022-09-20T07:15:04Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2263"
---

# docs: add info about how to name a custom function

**Chore summary**
Add information about how to name a custom function. Example naming a function `checkSecurity`:

```
export default createRulesetFunction({
  input: null,
  options: {
    type: 'object',
    additionalProperties: false,
    properties: {
      value: true,
    },
    required: ['value'],
  },
}, function checkSecurity (input, options): IFunctionResult[] {
```

**Tasks**
- [ ] Update Custom Functions docs
