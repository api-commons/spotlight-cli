---
number: 1103
title: "[AsyncAPI] Identify more orphaned components besides schemas"
state: "open"
labels: ["enhancement", "help wanted", "triaged", "AsyncAPI"]
author: "nulltoken"
created: "2020-04-18T15:33:57Z"
updated: "2024-05-31T12:35:37Z"
comments: 5
reactions_total: 2
thumbs_up: 2
url: "https://github.com/stoplightio/spectral/issues/1103"
---

# [AsyncAPI] Identify more orphaned components besides schemas

In #974, the asyncapi ruleset has been initiated with a rule which will identify unused/orphaned schemas, under components.

As identified in #1073 this rule could really benefit from being extended to be able to detect other kinds of orphan objects (messageTraits, ...).

/cc @derberg
