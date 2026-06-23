---
number: 1538
title: "Option to sort the OpenAPI properties"
state: "closed"
labels: ["OpenAPI"]
author: "thim81"
created: "2021-03-03T11:16:27Z"
updated: "2023-03-23T17:06:14Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1538"
---

# Option to sort the OpenAPI properties

**User story.**
As a OpenAPI editor, I can sort my OpenAPI properties, so that I can easier maintain my OpenAPI spec in a more consistent manner.

**Is your feature request related to a problem?**
The OpenAPI blocks can become very inconsistent if a great number of people contribute towards the spec.
YAML is a very open format, so the order is less relevant when you enter new properties.  

**Describe the solution you'd like**
To have the option to define the "sorting" in a simple manner of the sublevels of certain OpenAPI parts:
Example: Paths properties > operationID | Summary | paramaters | request body | response

That we have to option to run a command via Spectral to sort the part according to a hierarchy or another consistent manner.
