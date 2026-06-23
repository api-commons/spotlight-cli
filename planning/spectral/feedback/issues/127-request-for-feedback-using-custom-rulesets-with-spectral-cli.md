---
number: 127
title: "Request for feedback: Using custom rulesets with Spectral CLI"
state: "closed"
labels: ["enhancement", "question"]
author: "tbarn"
created: "2019-03-29T18:17:58Z"
updated: "2019-06-27T20:59:33Z"
comments: 11
reactions_total: 1
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/127"
---

# Request for feedback: Using custom rulesets with Spectral CLI

# Request for feedback!

_We would love to hear from users what syntax you would like to used -- please comment with your feedback!_ 

### **I'm submitting a...**
feature request

### What is the current behavior?
Currently, the CLI detects if you are using a OpenAPI 2 or 3 based document and uses the default rulesets. No specifications or rulesets outside of that works with it. 

### What is the expected behavior?
You have the ability to use any custom ruleset when using the Spectral CLI.

One potential syntax could be: 

`spectral lint foo.yaml --ruleset=whatever.json --ruleset=advanced.js`

### What is the motivation / use case for changing the behavior?
One of the things that makes Spectral so great is the ability to build out custom rulesets, which can already be done now, but not in the CLI.

### Other information

We are also exploring adding a ESLint or TSLint like config file (i.e. `.spectralrc`) with all the plugins/rules/presets setup. Current plan is that this would come after adding the custom ruleset option to the CLI.
