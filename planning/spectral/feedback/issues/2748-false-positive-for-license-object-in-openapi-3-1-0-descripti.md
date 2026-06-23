---
number: 2748
title: "false positive for license object in OpenAPI 3.1.0 descriptions"
state: "open"
labels: []
author: "jschaefer77"
created: "2024-11-28T13:59:27Z"
updated: "2024-11-28T14:00:24Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2748"
---

# false positive for license object in OpenAPI 3.1.0 descriptions

**Describe the bug**
For OpenAPI 3.1.0 spectral expects in license object an `identifier` or `url` if `name` it set.
It's not possible to set license name only!

**To Reproduce**
Set only a license name without identifier and url in OpenAPI 3.1.0 spec file.

`license:
      name: some text
`

**Expected behavior**
license `identifier` and `url` is not required for OpenAPI 3.1.0, even if license `name` was set.
https://spec.openapis.org/oas/v3.1.0.html#license-object

**Environment (remove any that are not applicable):**
 - Library version: Spectral CLI 6.14.2
