---
number: 1634
title: "Drop use of githack.com in install instruction"
state: "closed"
labels: ["security"]
author: "dolmen"
created: "2021-05-21T10:20:51Z"
updated: "2021-06-07T15:21:05Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1634"
---

# Drop use of githack.com in install instruction

**User story.**

From install documentation https://meta.stoplight.io/docs/spectral/docs/getting-started/2-installation.md#executable-binaries
```console
curl -L https://raw.githack.com/stoplightio/spectral/master/scripts/install.sh | sh
```

This is insecure. As a user, I don't trust `githack.com` to not hijack the install script of the spectral CLI to install malware.

**Describe the solution you'd like**

I want a command that load files directly from GitHub servers without a third party in the middle.
