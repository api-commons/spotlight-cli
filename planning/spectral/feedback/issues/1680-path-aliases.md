---
number: 1680
title: "Path aliases"
state: "closed"
labels: ["enhancement", "released", "v6"]
author: "P0lip"
created: "2021-06-18T12:26:39Z"
updated: "2021-07-07T12:20:15Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1680"
---

# Path aliases

**User story.**
As a ruleset write, I often have to come up with complex JSON Path expressions in order to pick a certain fragment of my document I'd like my rule to be run on.
This is both tedious and error-prone, in particular when targeting specific specs like OpenAPI.

**Describe the solution you'd like**

I'd like to have a way to specify these complex path expressions in one spot to be able to re-use them later on.
Ideally, the rulesets Stoplight provides have an array of paths I could choose from, so that I don't need to author my own paths anymore (assuming I write a ruleset based on OpenAPI / AsyncAPI)

**Additional context**

This issue just intend to add the functionality to specify those aliases which can then be used in the ruleset and rulesets extending it.

Stoplight ruleset having aliases would be tackled in a separate issue.
