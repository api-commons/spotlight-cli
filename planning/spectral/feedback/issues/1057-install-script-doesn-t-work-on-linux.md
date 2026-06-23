---
number: 1057
title: "Install script doesn't work on linux"
state: "closed"
labels: ["t/bug"]
author: "pseudo-su"
created: "2020-04-04T05:33:03Z"
updated: "2020-04-04T10:47:05Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1057"
---

# Install script doesn't work on linux

**Describe the bug**

On linux the install script tries to download a file at this URL https://github.com/stoplightio/spectral/releases/latest/download/spectral which is a 404

At some point you must have started suffixing both artifacts in releases with the platform but forgotten to update the the `install.sh` script

EG:
- https://github.com/stoplightio/spectral/releases/latest/download/spectral-macos
- https://github.com/stoplightio/spectral/releases/latest/download/spectral-linux


**To Reproduce**

On linux:
```sh
curl -sfL https://raw.githack.com/stoplightio/spectral/master/scripts/install.sh  | sh
```

**Expected behavior**

To install spectral

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment (remove any that are not applicable):**
 - Library version: [e.g. 3.0.0]
 - OS: [e.g. Windows 7]
 - Browser: [e.g. Chrome 61]

**Additional context**
Add any other context about the problem here.
