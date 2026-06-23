---
number: 1552
title: "Old version of agent-base breaks http.request"
state: "closed"
labels: ["t/bug"]
author: "gabegorelick"
created: "2021-03-16T14:30:05Z"
updated: "2021-03-17T14:16:06Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1552"
---

# Old version of agent-base breaks http.request

**Describe the bug**
This bug is documented in many places, including https://github.com/TooTallNate/node-proxy-agent/issues/54. In summary, `agent-base`, which is transitively loaded via `proxy-agent` and a few other dependencies, patches `http.request`. But old versions are not compatible with recent (Node 10+) changes to the API. This can cause hard to track down bugs when any code in the same process as spectral calls `http.request(url, options, callback)`.

**To Reproduce**

1. Load spectral, causing its version of `agent-base` to be loaded.
2. Call `http.request(url, options, callback)`

See https://github.com/TooTallNate/node-agent-base/issues/35 for some more background.

**Expected behavior**
`http.request(url, options, callback)` works.

**Additional context**
https://github.com/TooTallNate/node-proxy-agent/pull/55
https://github.com/TooTallNate/node-proxy-agent/releases/tag/4.0.0
