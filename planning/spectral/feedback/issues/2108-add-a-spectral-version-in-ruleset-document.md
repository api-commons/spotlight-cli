---
number: 2108
title: "Add a Spectral version in ruleset document"
state: "open"
labels: ["enhancement", "triaged"]
author: "arno-di-loreto"
created: "2022-03-24T20:14:17Z"
updated: "2024-05-31T12:36:26Z"
comments: 0
reactions_total: 2
thumbs_up: 2
url: "https://github.com/stoplightio/spectral/issues/2108"
---

# Add a Spectral version in ruleset document

**User story.**
As a Spectral tool creator, I can read the spectral property of a Spectral ruleset document, so that I can use appropriate Spectral library.

**Is your feature request related to a problem?**
I have been terribly frustrated when Studio integrated Spectral v6, some of my v5 rules were not working anymore until I migrated to v6.

**Describe the solution you'd like**
Add a spectral property indicated the version used (like it happens in OpenAPI with the openapi property)

`spectral:"6.0"`

In order to ensure backward compatibility, it could be made optional in v6 then required in v7.
When not present, it's up to the tool to choose the version according to its own logic and capabilities.

**Additional context**

Maybe there could be some impacts on functions too. They may need to tell which version (or versions?) they handle.
