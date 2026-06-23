---
number: 2078
title: "Support the --version command line argument"
state: "closed"
labels: []
author: "DavidBiesack"
created: "2022-03-04T19:00:01Z"
updated: "2022-03-07T13:59:29Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2078"
---

# Support the --version command line argument

**Describe the bug**

The tool has a `--version` option but returns `0.0.0` instead of the current version.


**To Reproduce**

```bash
$ spectral --version
0.0.0
```

**Expected behavior**

```bash
$ spectral --version
6.3.0
```

**Environment (remove any that are not applicable):**
 - Library version: [e.g. 6.3.0]
 - OS: [e.g. Mac]
 - Browser: [N/A]
