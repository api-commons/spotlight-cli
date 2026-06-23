---
number: 965
title: "format and ruleset: AsyncAPI"
state: "closed"
labels: ["enhancement", "p/high"]
author: "philsturgeon"
created: "2020-02-14T09:48:01Z"
updated: "2020-04-18T15:19:40Z"
comments: 2
reactions_total: 3
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/965"
---

# format and ruleset: AsyncAPI

**User story.**
As an AsyncAPI, I will get validation and a reasonable set of default opinions when working with AsyncAPI files.

**Is your feature request related to a problem?**
Right now spectral doesn't know what AsyncAPI is. It'll recognize $ref'ed schema files, but not the main thing, so I cannot write rules for channel names, etc.

**Describe the solution you'd like**

A ruleset based on OpenAPI (started here https://github.com/openapi-contrib/style-guides/pull/4). 

AsyncAPI is important enough that it should be another core ruleset, not done over at openapi-contrib. We will almost certainly split rulesets out into their own NPM modules in the future, but for now, let's get this one in the core.
