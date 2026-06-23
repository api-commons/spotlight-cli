---
number: 1577
title: "No error message when openapi spec file does not exist"
state: "closed"
labels: ["t/bug"]
author: "roubles"
created: "2021-04-09T16:01:00Z"
updated: "2021-04-11T12:13:51Z"
comments: 1
reactions_total: 2
thumbs_up: 2
url: "https://github.com/stoplightio/spectral/issues/1577"
---

# No error message when openapi spec file does not exist

**Describe the bug**
If the spec file passed in to spectral linter does not exist, spectral just says:
"No results with a severity of 'error' or higher found!"

This can be misleading in the case of a typo in the path to the file, someone may just think their file is clean.

**To Reproduce**

spectral lint /path/to/file/that/does/not/exist.yml

**Expected behavior**

If the file does not exist, spectral should print to STDERR, 'OpenAPI Spec file not found at specified location'
