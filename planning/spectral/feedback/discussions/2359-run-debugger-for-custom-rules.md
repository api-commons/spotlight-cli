---
number: 2359
title: "Run Debugger for custom rules"
category: "Q&A"
author: "colinmollenhour"
created: "2022-12-02T20:53:12Z"
upvotes: 5
comments: 0
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2359"
---

# Run Debugger for custom rules

It would be really helpful to be able to step through my custom Spectral rules with a debugger. Anyone have an idea how to run Spectral with Node's debugging capabilities? It is not a long-running app so it runs and listens for a debugger connection but of course it quits before I can open the debugger.. I'm using PhpStorm.

```
npx --node-options=--inspect spectral lint ./reference/* --ruleset .spectral.yaml
```
