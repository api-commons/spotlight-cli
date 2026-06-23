---
number: 2909
title: "false positive invalid-ref"
state: "open"
labels: []
author: "emakar"
created: "2026-03-10T21:06:18Z"
updated: "2026-03-10T21:14:33Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2909"
---

# false positive invalid-ref

openapi 3.0.0

**Description**

We extensively use refs to files, and structure files into folders
with certain files structure when adding new refs an error starts occurring
the work around is to flatten directory structure

**To Reproduce**

Please run lint on project attached (sometimes second run needed)
[spectral_ref_issue.zip](https://github.com/user-attachments/files/25883889/spectral_ref_issue.zip)

**Environment:**
 - Library version: cli 6.15.0
 - OS: macOS Tahoe 26.3.1, Ubuntu 22.0.4
