---
number: 1750
title: "Install script is broken"
state: "closed"
labels: []
author: "yli-dev"
created: "2021-07-20T16:06:23Z"
updated: "2021-07-22T08:10:12Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1750"
---

# Install script is broken

**Describe the bug**
The install script at https://raw.githack.com/stoplightio/spectral/master/scripts/install.sh is not working, with error
`Error requesting. Download binary from https://github.com/stoplightio/spectral/releases/latest/download/spectral-linux`

**To Reproduce**

Run `curl -L https://raw.githack.com/stoplightio/spectral/master/scripts/install.sh | sh`

**Expected behavior**
The script should successfully install spectral binary to my machine.

**Environmen:**
 - OS: Ubuntu 18.04.5 LTS
