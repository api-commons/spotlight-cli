---
number: 1621
title: "Drop `schemaPath` function"
state: "closed"
labels: ["tech-debt", "breaking", "v6"]
author: "P0lip"
created: "2021-05-12T12:57:40Z"
updated: "2021-05-24T08:41:36Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1621"
---

# Drop `schemaPath` function

`schemaPath` function relies on Spectral's internals and is used only by AsyncAPI ruleset.
 
- [ ] Remove the SchemaPath usage in AsyncAPI ruleset.
- [ ] Create a custom function if we cannot use any other spectral function to achieve the same outcome. 
- [ ] Use the custom function in the AsyncAPI ruleset.
