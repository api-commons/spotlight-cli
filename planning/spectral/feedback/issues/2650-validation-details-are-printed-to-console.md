---
number: 2650
title: "Validation details are printed to console"
state: "open"
labels: ["chore"]
author: "benjamin-mogensen"
created: "2024-07-04T02:25:59Z"
updated: "2024-07-06T17:16:58Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2650"
---

# Validation details are printed to console

**Chore summary**
When I use `run` method a lot of details about the validation are printed to console. I don't think this was the case in earlier versions.

E.g.:
```javascript
const errorList = await spectral.run(oasDocument)
```

**Tasks**
- [ ] Remove the console printing

**Additional context**
Versions used
```json
"@stoplight/spectral-core": "^1.18.3",
"@stoplight/spectral-parsers": "^1.0.3",
"@stoplight/spectral-ruleset-bundler": "^1.5.2",
"@stoplight/spectral-rulesets": "^1.19.1",
"@stoplight/spectral-runtime": "^1.1.2",
```

I found the line 155 in `runner.js` in`@stoplight/json-ref-resolver`:
```javascript
console.log(Utils.uriToJSONPointer(ref), parentPath, ref, uriResolver)
```

But it seems that repo is now archived.

I have put in my package.json:

```json
"@stoplight/json-ref-resolver": "^3.1.6"
```

That fixes it, but I am not sure if that is right approach as I assume that is not the version that is actually used as dependency for the other modules above.
