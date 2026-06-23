---
number: 2008
title: "Enable AdditionalProperties:false override"
state: "open"
labels: ["enhancement", "triaged"]
author: "savage-alex"
created: "2021-12-21T14:54:55Z"
updated: "2024-05-31T12:35:12Z"
comments: 1
reactions_total: 3
thumbs_up: 3
url: "https://github.com/stoplightio/spectral/issues/2008"
---

# Enable AdditionalProperties:false override

**User story.**
As an API designer
I want to ensure my examples are correctly spelled and typed for properties that are in my API definition
So that any consumers of mocked endpoints do not get incorrect properties

**Is your feature request related to a problem?**
Spectral can find examples that are bad when additionalProperties is set to false but its not something we want to do when we release API definitions as its stops evolution

**Describe the solution you'd like**
A mode for spectral to lint the examples against the definition and to ensure no additionalProperties are present (expect it to be a additional mode)

**Additional context**
Add any other context or screenshots about the feature request here.
