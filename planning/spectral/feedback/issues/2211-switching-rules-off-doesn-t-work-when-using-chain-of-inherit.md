---
number: 2211
title: "Switching rules \"off\" doesn't work when using chain of inherited rulesets"
state: "closed"
labels: ["t/bug", "released", "p/medium"]
author: "pavelkornev"
created: "2022-07-21T16:52:46Z"
updated: "2023-05-23T22:18:28Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2211"
---

# Switching rules "off" doesn't work when using chain of inherited rulesets

If there is an hierarchy of rulesets (let’s say 5 inherited rulesets one from each other), then in the top ruleset in the `extends` field I switch off  all the rules, Spectral disables only rules from the direct parent, but not the rule of the other ancestors (parent-parent...).

**Example:**
```
const ruleset3 = {
    extends: [ruleset2],
    rules: { … }
}
```
```
const ruleset4 = {
    extends: [ruleset3],
    rules: { … }
}
```
```
const ruleset5 = {
   extends: [[ruleset4, “off”]],
    rules: { … }
}
```

It disables only rules from the `ruleset4` (direct parent), but not from the `ruleset3` and further ancestors.

**To Reproduce**

1. Checkout the repository - https://github.com/pavelkornev/spectral-example/
2. Run `npm start`
3. There should be no validation errors as they are all switched off, but there will be an error coming from the rule defined in `ruleset1`.
4. See https://github.com/pavelkornev/spectral-example/blob/master/src/index.ts#L14-L52

**Expected behavior**

When inheriting ruleset, it's expected that no matter how many ancestors it has, if I switch off all inherited rules, they must be switched off.
