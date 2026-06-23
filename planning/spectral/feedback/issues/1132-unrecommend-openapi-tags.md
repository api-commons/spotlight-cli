---
number: 1132
title: "Unrecommend openapi-tags"
state: "closed"
labels: ["breaking"]
author: "philsturgeon"
created: "2020-04-29T16:43:22Z"
updated: "2020-08-20T09:00:25Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1132"
---

# Unrecommend openapi-tags

**User story.**
As a non-Stoplight user I do not understand the importance of tags, so it is a surprise when im told I absolutely must add them.

**Is your feature request related to a problem?**
Spectral users occasionally ask why Spectral is telling them to do things not in the OpenAPI spec. The answer is usually "this is a linter, not a validator" and that most of the rules are useful: avoiding bugs, stopping them getting hacked, etc. 

One rule which doesn't fit the description is `openapi-tags`. It _is_ useful for bigger APIs, but I'm working on a single endpoint OpenAPI description and adding tags to that is pretty redundant. It's there because Stoplight docs like tags, but for a single endpoint API I don't need my docs grouped like that anyhow.

**Describe the solution you'd like**

For v6.0 we should just make this one rule `recommended: false`.

**Additional context**

_In the future I'd like to look into a `spectral-stoplight-ruleset` with all sorts of rules relevant to Stoplight but not particularly relevant to other tools. Food for thought whilst working on this so we know the direction at least._
