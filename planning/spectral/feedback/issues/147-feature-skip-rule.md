---
number: 147
title: "Feature : Skip rule"
state: "closed"
labels: ["enhancement", "good first issue", "released"]
author: "philsturgeon"
created: "2019-04-17T13:41:46Z"
updated: "2019-05-11T07:21:11Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/147"
---

# Feature : Skip rule

### **I'm submitting a...**
  - [ ] bug report
  - [x] feature request

### What is the current behavior?

You will get all errors for everything in whatever ruleset, and there is no way to disable it. 

### What is the expected behavior?

As a Spectral CLI user, sometimes I like a whole ruleset but a specific rule is really annoying me for some reason. I would like to be able to pass `--skip=valid-example` and spectral would not even bother running that. 

### What is the motivation / use case for changing the behavior?

Plenty of folks have pointed out that the default ruleset is a bit more opinionated than they might like, so turning off a few errors temporarily whilst their team catch up on fixing them would help.
