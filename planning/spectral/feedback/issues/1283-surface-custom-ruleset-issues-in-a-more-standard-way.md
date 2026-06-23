---
number: 1283
title: "Surface custom ruleset issues in a more standard way"
state: "closed"
labels: []
author: "nulltoken"
created: "2020-07-14T09:43:01Z"
updated: "2022-07-06T15:31:05Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1283"
---

# Surface custom ruleset issues in a more standard way

Currently issues in custom rulesets are detected and reported. However, from a UX standpoint, it may make sense to surface them to the caller using the format that Spectral use for rules.

As such, issues in files and issues in custom rulesets would be reported in the same manner (The "source" would be the ruleset, the ranges would point at problems in the ruleset....).

Teaching Spectral to behave this way would make ruleset editing in VSCode (leveraging the `vscode-spectral` extension) a much more user friendly experience, for instance.
