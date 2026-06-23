---
number: 366
title: "Load Rulesets via JS API "
state: "closed"
labels: ["enhancement"]
author: "philsturgeon"
created: "2019-07-11T12:35:46Z"
updated: "2019-08-13T12:46:04Z"
comments: 7
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/366"
---

# Load Rulesets via JS API 

**User story.**
As a developer working with the JS API, I can do reference a custom ruleset (path, url, required from a NPM module), so that I do not need to mess around with the addRules() and addFunctions() interface. 

_This ticket should deprecate those two methods, but is not responsible for adding custom functions to rulesets. That will be handled in_ https://github.com/stoplightio/spectral/issues/311

**Is your feature request related to a problem?**
V4.0 made it way easier to work with custom rulesets but working with the TS/JS interface still feels pretty clunky. 

**Describe the solution you'd like**

TBD on the exact interface. 
```
spectral.loadRuleset(‘file://something’)
```

**Additional context**

Relates to #365
