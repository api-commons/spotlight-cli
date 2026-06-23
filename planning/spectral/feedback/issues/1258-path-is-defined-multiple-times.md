---
number: 1258
title: "path is defined multiple times"
state: "closed"
labels: ["t/bug"]
author: "m-mohr"
created: "2020-06-27T13:38:02Z"
updated: "2020-07-10T07:11:40Z"
comments: 6
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1258"
---

# path is defined multiple times

**Describe the bug**
After updating from 5.3.0 to 5.4.0 I got the following error message:
>  5671:15  error  path-params  Path parameter `path` is defined multiple times. Path parameters must be unique.

I looked through the file and there's only a single mention of a `path` parameter

**To Reproduce**

Here's the OpenAPI file I'm working on: https://github.com/Open-EO/openeo-api/blob/bc79b312768cc462a99f09d1f9c8caeb47b5dfbc/openapi.yaml
I'm running: spectral lint openapi.yaml
Ruleset is spectral:oas

**Expected behavior**
No error message.

**Environment (remove any that are not applicable):**
 - Library version: 5.4.0
 - OS: Windows 10 + Linux on TravisCI

**Additional context**
Downgrading to 5.3.0 doesn't show an error.
