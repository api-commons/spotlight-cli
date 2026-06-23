---
number: 2789
title: "Spectral documentation website loads slow on (relatively) fast network"
state: "closed"
labels: ["jira"]
author: "TimvdLippe"
created: "2025-02-26T09:54:29Z"
updated: "2025-03-07T13:41:14Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2789"
---

# Spectral documentation website loads slow on (relatively) fast network

**Describe the bug**
Loading the Spectral documentation website is superslow on my (relatively) fast network.

**To Reproduce**

1. Open DevTools in your browser
2. Open https://docs.stoplight.io/docs/spectral/674b27b261c3c-overview in your browser
3. Observe that 9MB of data is transfered. With cache this is either 3Mb or 175Kb (depends on how many resources you invalidate)

**Expected behavior**
The website loads in a relatively fast manner. 1 second should be an acceptable threshold for a documentation website.

**Environment (remove any that are not applicable):**
 - Library version: Website latest
 - OS: Windows 11
 - Browser: Edge/Mozilla

**Additional context**
The total loading time as reported by my DevTools is 3,04 minutes. Load time was at 2 seconds, although at that point the documentation itself hadn't loaded yet (I see a spinner). The documentation itself appears after 8 seconds. This includes when the documentation is cached, as only 175Kb is actually downloaded from the network, the rest comes from the browser cache.

When the data does not from the cache, it takes 10 seconds to load and it downloaded 3Mb.

Of the 3Mb, 2,45 MB are JavaScript bundles spread over 69 network requests.
