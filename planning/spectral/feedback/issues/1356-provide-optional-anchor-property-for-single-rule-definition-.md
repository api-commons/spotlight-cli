---
number: 1356
title: "Provide optional anchor property for single rule definition used by documentationUrl"
state: "closed"
labels: ["enhancement"]
author: "jschaefer77"
created: "2020-09-29T08:03:33Z"
updated: "2020-10-12T08:18:45Z"
comments: 5
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1356"
---

# Provide optional anchor property for single rule definition used by documentationUrl

**User story.**
As a rule developer, I can define user friendly rule names and additional anchors, so that I can point to specific sections of my existing documentation.

**Is your feature request related to a problem?**
Our API style guide is stored in a CMS system, which does generate anchors, but not user friendly ones.
So we cannot use the documentationUrl feature, because we have to use currently the ugly generated anchors as rule name.

**Describe the solution you'd like**
Provide an additional optional property (anchor) for each rule definition. If this anchor is available in the rule definition, append it to the base documentationUrl instead of using the rule name.

**Additional context**
Relates to https://github.com/stoplightio/studio/issues/445
