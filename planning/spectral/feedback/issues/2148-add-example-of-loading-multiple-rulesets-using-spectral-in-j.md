---
number: 2148
title: "Add example of loading multiple rulesets using Spectral in JavaScript"
state: "closed"
labels: ["documentation"]
author: "pamgoodrich"
created: "2022-05-04T13:44:08Z"
updated: "2022-06-29T14:53:09Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2148"
---

# Add example of loading multiple rulesets using Spectral in JavaScript

Add example of how to use `bundleAndLoadRuleset()` method with multiple rulesets files. Method will only accept path to one file, not multiple files or a directory.

Discord thread:
https://discord.com/channels/841794018173648916/859895506271600670/969254132760342603

Slack thread:
https://stoplight-internal.slack.com/archives/C0268494GJC/p1651613549636839

jakub:this-is-fine-fire:  8 hours ago
you can create a ruleset that extends all of them

jakub:this-is-fine-fire:  8 hours ago
extends: [rulesetA, rulesetB, rulesetC]
