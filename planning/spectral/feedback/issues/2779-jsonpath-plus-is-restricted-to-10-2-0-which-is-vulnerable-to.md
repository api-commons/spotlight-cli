---
number: 2779
title: "jsonpath-plus is restricted to 10.2.0 which is vulnerable to CVE-2025-1302"
state: "closed"
labels: []
author: "mriedem"
created: "2025-02-17T19:34:53Z"
updated: "2025-02-24T19:33:09Z"
comments: 1
reactions_total: 7
thumbs_up: 7
url: "https://github.com/stoplightio/spectral/issues/2779"
---

# jsonpath-plus is restricted to 10.2.0 which is vulnerable to CVE-2025-1302

**Describe the bug**
jsonpath-plus is restricted to 10.2.0:

https://github.com/stoplightio/spectral/blob/%40stoplight/spectral-core-1.19.4/packages/core/package.json#L50

https://github.com/stoplightio/spectral/blob/%40stoplight/spectral-core-1.19.4/yarn.lock#L9284

So it's vulnerable to https://github.com/advisories/GHSA-hw8r-x6gr-5gjp.

**To Reproduce**

Interestingly `npm audit` isn't flagging this yet.

**Expected behavior**

Shouldn't have vulnerable dependencies; upgrade to jsonpath-plus 10.3.0.

**Additional context**
https://github.com/JSONPath-Plus/JSONPath/releases/tag/v10.3.0

Fix: https://github.com/JSONPath-Plus/JSONPath/pull/237
