---
number: 2817
title: "Wrong redirect on meta.stoplight.io for documentation Url"
state: "closed"
labels: []
author: "jschaefer77"
created: "2025-05-07T10:22:10Z"
updated: "2025-07-29T09:12:47Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2817"
---

# Wrong redirect on meta.stoplight.io for documentation Url

**Describe the bug**
With the new feature `--show-documentation-url` urls are generated for the core ruleset.
Example: https://meta.stoplight.io/docs/spectral/docs/reference/openapi-rules.md#oas3-valid-schema-example
Following this link, there is a redirect on meta.stoplight.io and the resulting url will be _https://meta.stoplight.io/docs/spectral/4dec24461f3af-open-api-rules_ instead of _https://meta.stoplight.io/docs/spectral/4dec24461f3af-open-api-rules#oas3-valid-schema-example_

**To Reproduce**

1. Run the CLI with `--show-documentation-url`
2. click on documentation in the report
3. See error wrong redirect

**Expected behavior**
Redirect should include as well the fragment.
Example: _https://meta.stoplight.io/docs/spectral/4dec24461f3af-open-api-rules#oas3-valid-schema-example_

**Environment (remove any that are not applicable):**
 - Library version: 6.15.0
 - OS: MacOS 15.4.1
 - Browser: Chrome 135
