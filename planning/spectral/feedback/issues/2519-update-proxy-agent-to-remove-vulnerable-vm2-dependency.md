---
number: 2519
title: "Update proxy-agent to remove vulnerable vm2 dependency"
state: "closed"
labels: ["t/bug", "c/security"]
author: "matthewsac"
created: "2023-07-31T14:28:11Z"
updated: "2023-07-31T15:03:48Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2519"
---

# Update proxy-agent to remove vulnerable vm2 dependency

Dependabot issued a critical alert on the vm2 library which is used by proxy-agent. A new version of proxy-agent removes this vulnerability by replacing vm2. Spectral needs to be updated to use this new version.

Links to the two Dependabot alerts that relate to this issue:

[265](https://github.com/stoplightio/platform-internal/security/dependabot/265)
[266](https://github.com/stoplightio/platform-internal/security/dependabot/266)

Link to the new proxy-agent version to be used:
[proxy-agent 406.3.0](https://github.com/TooTallNate/proxy-agents/releases/tag/proxy-agent%406.3.0)

**NOTE**: This update must also be done for prism and platform-internal. See the links to the other issues in the comments.
