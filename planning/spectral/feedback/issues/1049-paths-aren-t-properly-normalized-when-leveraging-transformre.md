---
number: 1049
title: "Paths aren't properly normalized when leveraging transformRef() in a custom relsover"
state: "closed"
labels: ["t/bug"]
author: "nulltoken"
created: "2020-04-01T06:08:56Z"
updated: "2023-03-23T15:59:57Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1049"
---

# Paths aren't properly normalized when leveraging transformRef() in a custom relsover

**To Reproduce**

Full repro case at https://github.com/stoplightio/spectral/issues/1033#issuecomment-605958492

**Expected behavior**
Paths are normalized by Spectral without the need to do it in the `transformRef()` hook.

**Environment (remove any that are not applicable):**
 - Library version: 5.2.0
 - OS: Windows 10
 - Browser: N/A
