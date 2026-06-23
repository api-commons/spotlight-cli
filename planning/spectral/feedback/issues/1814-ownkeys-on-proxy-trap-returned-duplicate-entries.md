---
number: 1814
title: "'ownKeys' on proxy: trap returned duplicate entries"
state: "closed"
labels: ["released"]
author: "maxbec"
created: "2021-09-03T09:14:09Z"
updated: "2021-10-25T12:12:09Z"
comments: 21
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1814"
---

# 'ownKeys' on proxy: trap returned duplicate entries

**Describe the bug**
On execution of `spectral lint` on a local yml file this error pop's up:
`'ownKeys' on proxy: trap returned duplicate entries`

**To Reproduce**

1. Run this CLI command `spectral lint` behind a proxy server.

**Expected behavior**
Error like above.

**Environment (remove any that are not applicable):**
 - Library version: latest
 - OS: Windows 10
