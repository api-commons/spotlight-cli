---
number: 2578
title: "[Feature] Pass pattern some regex modifiers as a function option"
state: "closed"
labels: ["enhancement", "released"]
author: "philsturgeon"
created: "2024-01-21T18:55:43Z"
updated: "2025-10-01T10:23:24Z"
comments: 5
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2578"
---

# [Feature] Pass pattern some regex modifiers as a function option

**User story.**
As a ruleset developer, I can pass regex modifiers to the pattern function, so that I can make more advanced rulesets with everything regex has to offer instead of just the default mode.

**Is your feature request related to a problem?**

Working on https://github.com/stoplightio/spectral-owasp-ruleset/pull/51 I had to write some fairly hectic regex due to not being able to set the `/i` modifier for case insenstivity.
```
      then: {
        field: "description",
        function: pattern,
        functionOptions: {
          match: "((l|L)ocal|(a|A)lpha|(b|B)eta|(t|T)est|(t|T)esting|(s|S)tag|(s|S)taging|(p|P)rod|(p|P)roduction|(n|N)ext|(p|P)reprod)",
        },
      },
```
**Describe the solution you'd like**

```
function: pattern,
functionOptions: {
  match: "(local|alpha|beta|test|testing|stag|staging|prod|production|next|preprod)",
  modifiers: 'i'
},
```

Or you could make it nicer for people and make human named switches like `case-insensitive: true` or whatever.
