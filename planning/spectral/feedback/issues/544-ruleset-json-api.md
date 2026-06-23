---
number: 544
title: "ruleset: JSON:API"
state: "closed"
labels: ["enhancement"]
author: "ahx"
created: "2019-09-12T11:14:29Z"
updated: "2022-07-06T15:29:04Z"
comments: 7
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/544"
---

# ruleset: JSON:API

**User story.**
As a developer, I can use Spectral to guide me while designing my [JSON:API](https://jsonapi.org/) API.
Spectral returns errors and warnings if responses do not look like JSON:API responses.

**Describe the solution you'd like**
I can use a new ruleset jsonapi-openapi which extends the spectral:oas ruleset. Using this ruleset helps me describe APIs that conform with JSON:API.
Beginning with rules to describe response bodies only would be a great start.

**Additional context**
Could we make use of http://jsonapi.org/schema ?

I hope this makes sense.
