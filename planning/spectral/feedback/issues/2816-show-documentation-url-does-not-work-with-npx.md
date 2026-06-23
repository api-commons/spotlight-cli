---
number: 2816
title: "--show-documentation-url does not work with npx"
state: "closed"
labels: []
author: "jschaefer77"
created: "2025-05-05T16:06:51Z"
updated: "2025-05-07T09:45:53Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2816"
---

# --show-documentation-url does not work with npx

**Describe the bug**
The new feature `--show-documentation-url` doesn't work if I run the cli va `npx @stoplight/spectral-cli lint --show-documentation-url ...`. It only works if I run `spectral lint --show-documentation-url ...`

**To Reproduce**

1. Run the cli via `npx @stoplight/spectral-cli lint` and the parameter `--show-documentation-url`.

**Expected behavior**
The report output should include the documentation urls.

**Environment (remove any that are not applicable):**
 - Library version: 6.15.0
 - OS: macOS 15.4.1
